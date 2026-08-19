/**
 * contactController.js
 *
 * The controller layer sits between the provider (React state) and the service
 * layer (transport). It owns: field schemas, validation rules, payload shaping,
 * and mapping transport errors into something a form can render. It knows
 * nothing about React and imports no components.
 */

import { contactService } from '../services/contactService';
import { ApiError } from '../services/httpClient';
import {
  email as emailRule,
  maxLength,
  minLength,
  mustBeTrue,
  oneOf,
  phone as phoneRule,
  required,
  validateSchema,
} from '../utils/validators';

export const CONTACT_REASONS = [
  { value: 'prp-services', label: 'Psychiatric Rehabilitation Services' },
  { value: 'referral', label: 'Make a Referral' },
  { value: 'medicaid-coverage', label: 'Maryland Medicaid & Coverage' },
  { value: 'programs-question', label: 'Questions About Programs' },
  { value: 'new-participant', label: 'New Participant Information' },
  { value: 'existing-participant', label: 'Existing Participant' },
  { value: 'general', label: 'General Question' },
];

export const CONTACT_METHODS = [
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Phone call' },
  { value: 'text', label: 'Text message' },
];

export const initialContactValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  reason: 'prp-services',
  preferredContact: 'email',
  preferredTherapist: '',
  message: '',
  consent: false,
  /** Honeypot — bots fill it, humans never see it. */
  website: '',
};

/**
 * Validation schema. Deliberately does NOT require clinical detail: the
 * message field asks for context, not history, and the UI says so.
 */
export const contactSchema = {
  firstName: [required('Please enter your first name'), maxLength(60)],
  lastName: [maxLength(60)],
  email: [required('We need an email address to reply to you'), emailRule()],
  phone: [phoneRule()],
  reason: [required(), oneOf(CONTACT_REASONS.map((r) => r.value))],
  preferredContact: [required(), oneOf(CONTACT_METHODS.map((m) => m.value))],
  message: [
    required('Please tell us briefly what you are looking for'),
    minLength(10, 'A sentence or two is plenty — just enough for us to point you the right way'),
    maxLength(2000, 'Please keep this under 2000 characters'),
  ],
  consent: [
    mustBeTrue('Please confirm you understand this form is not for urgent or clinical information'),
  ],
};

/** Cross-field rules that a per-field schema cannot express. */
function validateCrossFields(values) {
  const errors = {};
  const wantsCall = values.preferredContact === 'phone' || values.preferredContact === 'text';
  if (wantsCall && !values.phone?.trim()) {
    errors.phone = 'Add a phone number so we can reach you that way';
  }
  return errors;
}

export const contactController = {
  initialValues: initialContactValues,
  schema: contactSchema,
  reasons: CONTACT_REASONS,
  methods: CONTACT_METHODS,

  /** Validate one field in isolation — used for validate-on-blur. */
  validateField(field, values) {
    const rules = contactSchema[field];
    if (!rules) return null;
    const { errors } = validateSchema(values, { [field]: rules });
    return errors[field] ?? validateCrossFields(values)[field] ?? null;
  },

  /** Validate the whole form — used on submit. */
  validate(values) {
    const { errors } = validateSchema(values, contactSchema);
    const merged = { ...errors, ...validateCrossFields(values) };
    return { isValid: Object.keys(merged).length === 0, errors: merged };
  },

  /** Trim, normalise and drop the honeypot before it reaches the wire. */
  buildPayload(values) {
    return {
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      email: values.email.trim().toLowerCase(),
      phone: values.phone.replace(/\D/g, '') || null,
      reason: values.reason,
      preferredContact: values.preferredContact,
      preferredTherapist: values.preferredTherapist || null,
      message: values.message.trim(),
      submittedAt: new Date().toISOString(),
      source: 'website-contact-form',
    };
  },

  /**
   * Submit an enquiry.
   * @returns {Promise<{status:'success'|'error'|'rejected', ...}>}
   *          Never throws — the provider maps the result straight to state.
   */
  async submit(values) {
    // Honeypot: pretend it worked. Telling a bot it failed just makes it retry.
    if (values.website) {
      return { status: 'success', reference: 'HH-C-IGNORED', silent: true };
    }

    const { isValid, errors } = this.validate(values);
    if (!isValid) return { status: 'rejected', errors };

    try {
      const result = await contactService.submitEnquiry(this.buildPayload(values));
      return { status: 'success', reference: result.reference, receivedAt: result.receivedAt };
    } catch (error) {
      return {
        status: 'error',
        message:
          error instanceof ApiError
            ? error.message
            : 'Something went wrong on our end. Please try again, or call us directly.',
        errors: error instanceof ApiError ? error.fieldErrors ?? {} : {},
      };
    }
  },
};

export default contactController;
