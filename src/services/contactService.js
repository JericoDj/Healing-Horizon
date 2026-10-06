/**
 * contactService.js — transport for enquiry, booking and newsletter payloads.
 * Shape-only. All validation and business rules live in the controllers.
 *
 * Enquiries and bookings go to the healinghorizons-mailer Cloud Functions
 * (see functions/index.js), which save them to Firestore and email the
 * practice. Set VITE_FORMS_MOCK=true to use the offline mock instead.
 */

import { ApiError, request } from './httpClient';

const USE_MOCK = import.meta.env.VITE_FORMS_MOCK === 'true';

/**
 * Who the form emails go to, from the site's .env (VITE_MAIL_FROM / _TO / _CC).
 * The function only honours addresses on its MAIL_ALLOWED list
 * (functions/.env), so these are public but cannot be abused.
 * Left empty, the function's own defaults are used.
 */
const splitEmails = (value) =>
  (value ?? '')
    .split(',')
    .map((address) => address.trim())
    .filter(Boolean);

const MAIL_ROUTING = {
  from: import.meta.env.VITE_MAIL_FROM?.trim() || undefined,
  to: splitEmails(import.meta.env.VITE_MAIL_TO),
  ...(import.meta.env.VITE_MAIL_CC !== undefined && {
    cc: splitEmails(import.meta.env.VITE_MAIL_CC),
  }),
};

const withRouting = (payload) => ({ ...payload, mail: MAIL_ROUTING });

/** Maps Firebase callable errors onto the ApiError every controller expects. */
async function callFunction(name, payload) {
  try {
    // Loaded on first submit so the Firebase SDK stays out of the initial bundle.
    const { callable } = await import('./firebase');
    return await callable(name)(payload);
  } catch (error) {
    if (error?.code === 'functions/invalid-argument') {
      throw new ApiError('Please check the form and try again.', { status: 400, code: 'invalid' });
    }
    if (error?.code === 'functions/deadline-exceeded') {
      throw new ApiError('That took too long. Please check your connection and try again.', {
        code: 'timeout',
      });
    }
    throw new ApiError('We could not send your request. Please try again, or call us directly.', {
      status: 500,
      code: error?.code ?? 'request_failed',
    });
  }
}

export const contactService = {
  /** General enquiry from /contact. */
  submitEnquiry(payload, options) {
    if (USE_MOCK) return request('/contact', { method: 'POST', body: payload, ...options });
    return callFunction('submitContact', withRouting(payload));
  },

  /** Consultation request from /book. */
  submitBooking(payload, options) {
    if (USE_MOCK) return request('/booking', { method: 'POST', body: payload, ...options });
    return callFunction('submitBooking', withRouting(payload));
  },

  /** Newsletter opt-in from the footer (form currently hidden). */
  subscribe(payload, options) {
    return request('/newsletter', { method: 'POST', body: payload, ...options });
  },
};

export default contactService;
