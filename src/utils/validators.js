/**
 * validators.js — pure, framework-free validation primitives.
 *
 * Controllers compose these into form-level rule sets. Keeping them pure means
 * they are trivially testable and reusable outside React.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/** Permissive on formatting, strict on digit count (NANP: 10, or 11 with a leading 1). */
const PHONE_DIGITS_RE = /^1?\d{10}$/;

export const isBlank = (value) =>
  value === null || value === undefined || String(value).trim() === '';

export const required = (message = 'This field is required') => (value) =>
  isBlank(value) ? message : null;

export const minLength = (n, message) => (value) =>
  !isBlank(value) && String(value).trim().length < n
    ? message ?? `Please enter at least ${n} characters`
    : null;

export const maxLength = (n, message) => (value) =>
  !isBlank(value) && String(value).trim().length > n
    ? message ?? `Please keep this under ${n} characters`
    : null;

export const email = (message = 'Please enter a valid email address') => (value) =>
  !isBlank(value) && !EMAIL_RE.test(String(value).trim()) ? message : null;

export const phone = (message = 'Please enter a valid phone number') => (value) => {
  if (isBlank(value)) return null;
  const digits = String(value).replace(/\D/g, '');
  return PHONE_DIGITS_RE.test(digits) ? null : message;
};

export const oneOf = (allowed, message = 'Please choose one of the options') => (value) =>
  !isBlank(value) && !allowed.includes(value) ? message : null;

export const mustBeTrue = (message = 'Please confirm to continue') => (value) =>
  value === true ? null : message;

/** Rejects a date earlier than today (local time). */
export const notInPast = (message = 'Please choose a date in the future') => (value) => {
  if (isBlank(value)) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const parsed = new Date(`${value}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return 'Please enter a valid date';
  return parsed < today ? message : null;
};

/**
 * Runs an array of rules against a value and returns the first failure.
 * First-failure-wins keeps error messages from stacking up on one field.
 */
export function runRules(value, rules = []) {
  for (const rule of rules) {
    const error = rule(value);
    if (error) return error;
  }
  return null;
}

/**
 * Validates a whole values object against a `{ field: [rules] }` schema.
 * @returns {{ isValid: boolean, errors: Record<string, string> }}
 */
export function validateSchema(values, schema) {
  const errors = {};
  for (const [field, rules] of Object.entries(schema)) {
    const error = runRules(values[field], rules);
    if (error) errors[field] = error;
  }
  return { isValid: Object.keys(errors).length === 0, errors };
}

/**
 * Tidies a US phone number into `(503) 555-1234`.
 *
 * Two rules that matter, both learned the hard way:
 *
 *  1. A leading country code is dropped rather than counted. Slicing the first
 *     ten digits of "1 503 555 1234" yields "(150) 355-5123" — a number the
 *     person never typed, which then looks like their mistake.
 *  2. Anything we cannot confidently format is returned **unchanged**. This
 *     runs on blur, and silently deleting a half-typed or unrecognised number
 *     while someone is still correcting it is worse than leaving it alone.
 */
export function formatPhone(input) {
  const raw = String(input ?? '');
  let digits = raw.replace(/\D/g, '');

  if (digits.length === 11 && digits.startsWith('1')) digits = digits.slice(1);
  if (digits.length !== 10) return raw;

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}
