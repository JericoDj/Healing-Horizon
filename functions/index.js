/**
 * healinghorizons-mailer — Cloud Functions behind the website's forms.
 *
 * Each form submission is:
 *   1. re-validated here (the browser's checks can be bypassed),
 *   2. saved to the `healing-horizons` Firestore database, and
 *   3. emailed to the practice through Resend.
 *
 * This lives in the shared `dignity-with-care` project, so everything is kept
 * apart from Business Manager Pro: a separate named database (never the
 * default one) and a separate functions codebase (see firebase.json), so a
 * deploy from here can never touch that app's data, rules or `api` function.
 *
 * Email is optional at runtime. Until RESEND_API_KEY holds a real key the
 * request is still saved and the visitor still gets a success message — the
 * practice just has to check Firestore instead of the inbox.
 */

import { initializeApp } from 'firebase-admin/app';
import { FieldValue, getFirestore } from 'firebase-admin/firestore';
import { setGlobalOptions } from 'firebase-functions/v2';
import { HttpsError, onCall } from 'firebase-functions/v2/https';
import { defineSecret } from 'firebase-functions/params';
import { logger } from 'firebase-functions';

setGlobalOptions({ region: 'us-east4', maxInstances: 5 });

initializeApp();
const db = getFirestore('healing-horizons');

const RESEND_API_KEY = defineSecret('RESEND_API_KEY');

/* Email routing.
 *
 * The website chooses From / To / CC (VITE_MAIL_* in the site's .env) and sends
 * them with each request. Because anything the website sends can be forged,
 * every address is checked against MAIL_ALLOWED in functions/.env — a short
 * list of domains and addresses set once. Anything not on it is dropped, so
 * nobody can use these functions to send mail to arbitrary people.
 *
 * MAIL_FROM / MAIL_TO / MAIL_CC in functions/.env are the fallback when the
 * website sends nothing usable.
 */
const RESEND_TEST_SENDER = 'onboarding@resend.dev';
const MAX_RECIPIENTS = 5;

const emailList = (value) =>
  (Array.isArray(value) ? value : String(value ?? '').split(','))
    .filter((address) => typeof address === 'string')
    .map((address) => address.trim())
    .filter(Boolean);

/** "Name <a@b.com>" or "a@b.com" → "a@b.com" */
const bareAddress = (value) => (value.match(/<([^>]+)>/)?.[1] ?? value).trim().toLowerCase();

/** Entries with an @ before the domain are exact addresses; others are whole domains. */
const ALLOWED = emailList(process.env.MAIL_ALLOWED).map((entry) => entry.toLowerCase());

function isAllowed(value) {
  const address = bareAddress(value);
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/.test(address)) return false;
  const domain = address.split('@')[1];
  return ALLOWED.some((entry) =>
    entry.includes('@') && !entry.startsWith('@')
      ? entry === address
      : entry.replace(/^@/, '') === domain,
  );
}

const DEFAULT_ROUTING = {
  from: process.env.MAIL_FROM || `Healing Horizons Website <${RESEND_TEST_SENDER}>`,
  to: emailList(process.env.MAIL_TO),
  cc: emailList(process.env.MAIL_CC),
};

/** Merges what the website asked for with the server defaults and the allowlist. */
function resolveRouting(requested) {
  const mail = requested && typeof requested === 'object' ? requested : {};
  const pick = (value) => emailList(value).filter(isAllowed).slice(0, MAX_RECIPIENTS);

  const rejected = [...emailList(mail.to), ...emailList(mail.cc)].filter((a) => !isAllowed(a));
  if (rejected.length > 0) logger.warn('Dropped recipients not in MAIL_ALLOWED', { rejected });

  const from =
    typeof mail.from === 'string' &&
    mail.from.length <= 200 &&
    (isAllowed(mail.from) || bareAddress(mail.from) === RESEND_TEST_SENDER)
      ? mail.from.trim()
      : DEFAULT_ROUTING.from;

  const to = pick(mail.to);
  return {
    from,
    to: to.length > 0 ? to : DEFAULT_ROUTING.to,
    cc: mail.cc === undefined ? DEFAULT_ROUTING.cc : pick(mail.cc),
  };
}

/* ----------------------------------------------------------- validation -- */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function text(value, { field, max, required = false }) {
  const trimmed = typeof value === 'string' ? value.trim() : '';
  if (required && !trimmed) throw new HttpsError('invalid-argument', `Missing ${field}.`);
  if (trimmed.length > max) throw new HttpsError('invalid-argument', `${field} is too long.`);
  return trimmed;
}

function email(value) {
  const trimmed = text(value, { field: 'email', max: 254, required: true }).toLowerCase();
  if (!EMAIL_RE.test(trimmed)) throw new HttpsError('invalid-argument', 'Invalid email address.');
  return trimmed;
}

function phone(value, { required = false } = {}) {
  const digits = typeof value === 'string' ? value.replace(/\D/g, '') : '';
  if (required && !digits) throw new HttpsError('invalid-argument', 'Missing phone number.');
  if (digits && (digits.length < 10 || digits.length > 11)) {
    throw new HttpsError('invalid-argument', 'Invalid phone number.');
  }
  return digits || null;
}

function list(value, { max = 10, itemMax = 40 } = {}) {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item) => typeof item === 'string')
    .slice(0, max)
    .map((item) => item.slice(0, itemMax));
}

/* --------------------------------------------------------------- helpers -- */

function makeReference(prefix) {
  const stamp = Date.now().toString(36).toUpperCase().slice(-5);
  const noise = Math.random().toString(36).toUpperCase().slice(2, 5);
  return `${prefix}-${stamp}${noise}`;
}

function formatPhone(digits) {
  if (!digits) return '—';
  const d = digits.length === 11 ? digits.slice(1) : digits;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}

/** "2026-10-14" → "Wednesday, October 14, 2026" */
function formatDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value ?? '')) return '';
  const date = new Date(`${value}T12:00:00Z`);
  return date.toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  });
}

const escapeHtml = (value) =>
  String(value ?? '').replace(
    /[&<>"']/g,
    (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch],
  );

/** Renders [label, value] rows as a plain HTML table and a text fallback. */
function renderEmail(title, rows) {
  const html = `
    <div style="font-family:Arial,sans-serif;font-size:15px;color:#1a2b3c">
      <h2 style="margin:0 0 16px">${escapeHtml(title)}</h2>
      <table cellpadding="8" style="border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="border-bottom:1px solid #e3e8ee;font-weight:bold;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td>
            <td style="border-bottom:1px solid #e3e8ee;white-space:pre-wrap">${escapeHtml(value || '—')}</td>
          </tr>`,
          )
          .join('')}
      </table>
    </div>`;
  const plain = `${title}\n\n${rows.map(([label, value]) => `${label}: ${value || '—'}`).join('\n')}`;
  return { html, text: plain };
}

async function sendEmail({ subject, replyTo, title, rows, routing }) {
  const apiKey = RESEND_API_KEY.value();
  if (!apiKey || !apiKey.startsWith('re_')) {
    logger.warn('RESEND_API_KEY is not set to a real key; skipping email.');
    return { sent: false, reason: 'not-configured' };
  }
  if (routing.to.length === 0) {
    logger.warn('No allowed recipients (check VITE_MAIL_TO and MAIL_ALLOWED / MAIL_TO); skipping email.');
    return { sent: false, reason: 'no-recipients' };
  }

  const { html, text: plain } = renderEmail(title, rows);
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: routing.from,
      to: routing.to,
      ...(routing.cc.length > 0 && { cc: routing.cc }),
      reply_to: replyTo,
      subject,
      html,
      text: plain,
    }),
  });

  if (!response.ok) {
    logger.error('Resend rejected the email', { status: response.status, body: await response.text() });
    return { sent: false, reason: `resend-${response.status}` };
  }
  return { sent: true };
}

/**
 * Saves first, then emails. If the email fails the request is still on
 * record, so the visitor is told it went through — which it did.
 */
async function saveAndNotify({ collection, prefix, data, email: mail, routing }) {
  const reference = makeReference(prefix);
  const ref = db.collection(collection).doc(reference);

  await ref.set({
    ...data,
    reference,
    status: 'new',
    createdAt: FieldValue.serverTimestamp(),
  });

  let emailResult;
  try {
    emailResult = await sendEmail({ ...mail, routing, title: `${mail.title} · ${reference}` });
  } catch (error) {
    logger.error('Email send threw', error);
    emailResult = { sent: false, reason: 'exception' };
  }
  await ref.update({ emailSent: emailResult.sent, emailError: emailResult.reason ?? null });

  return { ok: true, reference, receivedAt: new Date().toISOString() };
}

const callableOptions = { secrets: [RESEND_API_KEY], cors: true };

/* ------------------------------------------------------------- functions -- */

/** Book a Call page and the quick booking dialog. */
export const submitBooking = onCall(callableOptions, async (request) => {
  const body = request.data ?? {};

  // Honeypot: bots fill the hidden field. Pretend it worked.
  if (body.website) return { ok: true, reference: 'HH-B-IGNORED' };

  const data = {
    firstName: text(body.firstName, { field: 'first name', max: 60, required: true }),
    lastName: text(body.lastName, { field: 'last name', max: 60 }),
    email: email(body.email),
    phone: phone(body.phone, { required: true }),
    serviceSlug: text(body.serviceSlug, { field: 'service', max: 80 }),
    format: text(body.format, { field: 'format', max: 40 }),
    timeWindows: list(body.timeWindows),
    earliestDate: text(body.earliestDate, { field: 'earliest date', max: 20 }) || null,
    notes: text(body.notes, { field: 'notes', max: 1000 }),
    source: text(body.source, { field: 'source', max: 60 }) || 'website-booking-form',
  };

  /* Readable labels sent by the website, for the email only. They are
     display text (escaped when rendered), so they are just length-capped. */
  const labels = body.labels && typeof body.labels === 'object' ? body.labels : {};
  const serviceLabel = text(labels.service, { field: 'service label', max: 120 });
  const formatLabel = text(labels.format, { field: 'format label', max: 60 });
  const timeLabels = list(labels.timeWindows, { itemMax: 60 });

  const name = `${data.firstName} ${data.lastName}`.trim();
  return saveAndNotify({
    collection: 'bookings',
    prefix: 'HH-B',
    data,
    routing: resolveRouting(body.mail),
    email: {
      subject: `New call request: ${name}`,
      replyTo: data.email,
      title: 'New Book a Call request',
      rows: [
        ['Name', name],
        ['Phone', formatPhone(data.phone)],
        ['Email', data.email],
        ['Service', serviceLabel || data.serviceSlug],
        ['Format', formatLabel || data.format],
        ['Times that work', (timeLabels.length ? timeLabels : data.timeWindows).join('\n')],
        ['Earliest date', formatDate(data.earliestDate) || 'As soon as possible'],
        ['Notes', data.notes],
      ],
    },
  });
});

/** Contact page enquiry form. */
export const submitContact = onCall(callableOptions, async (request) => {
  const body = request.data ?? {};

  if (body.website) return { ok: true, reference: 'HH-C-IGNORED' };

  const data = {
    firstName: text(body.firstName, { field: 'first name', max: 60, required: true }),
    lastName: text(body.lastName, { field: 'last name', max: 60 }),
    email: email(body.email),
    phone: phone(body.phone),
    reason: text(body.reason, { field: 'reason', max: 60 }),
    preferredContact: text(body.preferredContact, { field: 'preferred contact', max: 20 }),
    message: text(body.message, { field: 'message', max: 2000, required: true }),
    source: text(body.source, { field: 'source', max: 60 }) || 'website-contact-form',
  };

  const name = `${data.firstName} ${data.lastName}`.trim();
  return saveAndNotify({
    collection: 'enquiries',
    prefix: 'HH-C',
    data,
    routing: resolveRouting(body.mail),
    email: {
      subject: `New website enquiry: ${name}`,
      replyTo: data.email,
      title: 'New contact form enquiry',
      rows: [
        ['Name', name],
        ['Email', data.email],
        ['Phone', formatPhone(data.phone)],
        ['Reason', data.reason],
        ['Preferred contact', data.preferredContact],
        ['Message', data.message],
      ],
    },
  });
});
