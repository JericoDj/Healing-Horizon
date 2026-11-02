/**
 * bookingController.js
 *
 * Owns the multi-step consultation request on /book: step definitions, which
 * fields belong to which step, per-step validation, and submission.
 *
 * Important: this books a free 15-minute CONSULTATION, not a therapy session,
 * and it collects no clinical information. That is a deliberate scope limit —
 * a marketing site should not be a PHI intake channel.
 */

import { services } from '../data/services';
import { contactService } from '../services/contactService';
import { ApiError } from '../services/httpClient';
import {
  email as emailRule,
  maxLength,
  mustBeTrue,
  notInPast,
  oneOf,
  phone as phoneRule,
  required,
  validateSchema,
} from '../utils/validators';

export const SESSION_FORMATS = [
  { value: 'in-person', label: 'In person', detail: 'Dunkirk office, 10339 Southern Maryland Blvd' },
  { value: 'telehealth', label: 'Online / Telehealth', detail: 'Maryland residents' },
  { value: 'either', label: 'Either is fine', detail: 'We will suggest what fits you best' },
];

export const BOOKING_DAYS = [
  { value: 'tuesday', label: 'Tuesday' },
  { value: 'wednesday', label: 'Wednesday' },
  { value: 'thursday', label: 'Thursday' },
  { value: 'friday', label: 'Friday' },
];

export const TIME_WINDOWS = [
  { value: '10am-12pm', label: '10:00 AM – 12:00 PM' },
  { value: '1pm-2pm', label: '1:00 PM – 2:00 PM' },
  { value: '2pm-3pm', label: '2:00 PM – 3:00 PM' },
  { value: '3pm-4pm', label: '3:00 PM – 4:00 PM' },
];

export const BOOKING_TIME_SLOTS = TIME_WINDOWS;

export const PAYMENT_OPTIONS = [
  { value: 'insurance', label: 'I plan to use insurance' },
  { value: 'self-pay', label: 'I plan to pay privately' },
  { value: 'sliding-scale', label: 'I would like to ask about reduced fees' },
  { value: 'unsure', label: 'I am not sure yet' },
];

export const bookingSteps = [
  {
    id: 'care',
    title: 'What you are looking for',
    description: 'So we can match you with the right clinician.',
    fields: ['serviceSlug'],
  },
  {
    id: 'availability',
    title: 'When you are free',
    description: 'Pick everything that could work — more options means a sooner start.',
    fields: ['days', 'timeWindows', 'earliestDate'],
  },
  {
    id: 'details',
    title: 'How to reach you',
    description: 'We will call to confirm before anything is booked.',
    // 'payment' removed from the form — PRP is Medicaid-covered.
    fields: ['firstName', 'lastName', 'email', 'phone', 'notes', 'consent'],
  },
];

export const initialBookingValues = {
  serviceSlug: '',
  format: 'either',
  preferredTherapist: '',
  days: [],
  timeWindows: [],
  earliestDate: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  payment: 'unsure',
  notes: '',
  consent: false,
  website: '',
};

const atLeastOne = (message) => (value) =>
  Array.isArray(value) && value.length > 0 ? null : message;

export const bookingSchema = {
  serviceSlug: [required('Please choose the kind of support you are looking for')],
  format: [],
  preferredTherapist: [],
  days: [atLeastOne('Please select at least one day that could work')],
  timeWindows: [atLeastOne('Please select at least one time that could work')],
  earliestDate: [notInPast('Please choose today or a later date')],
  firstName: [required('Please enter your first name'), maxLength(60)],
  lastName: [maxLength(60)],
  email: [required('We need an email address to confirm your consultation'), emailRule()],
  phone: [
    required('The consultation happens by phone, so we need a number'),
    phoneRule(),
  ],
  // payment: [required(), oneOf(PAYMENT_OPTIONS.map((p) => p.value))],
  notes: [maxLength(1000, 'Please keep this under 1000 characters')],
  consent: [
    mustBeTrue('Please confirm you understand this is a request, not a confirmed appointment'),
  ],
};

export const bookingController = {
  steps: bookingSteps,
  initialValues: initialBookingValues,
  schema: bookingSchema,
  formats: SESSION_FORMATS,
  days: BOOKING_DAYS,
  timeWindows: TIME_WINDOWS,
  paymentOptions: PAYMENT_OPTIONS,

  stepCount: bookingSteps.length,

  getStep(index) {
    return bookingSteps[Math.min(Math.max(index, 0), bookingSteps.length - 1)];
  },

  validateField(field, values) {
    const rules = bookingSchema[field];
    if (!rules?.length) return null;
    const { errors } = validateSchema(values, { [field]: rules });
    return errors[field] ?? null;
  },

  /** Validate only the fields belonging to one step — gates "Continue". */
  validateStep(index, values) {
    const step = this.getStep(index);
    const partial = Object.fromEntries(
      step.fields.filter((f) => bookingSchema[f]?.length).map((f) => [f, bookingSchema[f]]),
    );
    const { isValid, errors } = validateSchema(values, partial);
    return { isValid, errors };
  },

  validate(values) {
    return validateSchema(values, bookingSchema);
  },

  buildPayload(values) {
    const service = services.find((item) => item.slug === values.serviceSlug);
    const format = SESSION_FORMATS.find((item) => item.value === values.format);
    const selectedDays = BOOKING_DAYS.filter((item) => values.days?.includes(item.value));
    const windows = TIME_WINDOWS.filter((item) => values.timeWindows?.includes(item.value));

    return {
      /* Human-readable versions for the notification email, so the practice
         sees "Tuesday, Wednesday" and "10:00 AM – 12:00 PM" rather than raw keys. */
      labels: {
        service: service?.name ?? null,
        format: format?.label ?? null,
        days: selectedDays.map((item) => item.label),
        timeWindows: windows.map((item) => (item.detail ? `${item.label} (${item.detail})` : item.label)),
      },
      serviceSlug: values.serviceSlug,
      format: values.format,
      preferredTherapist: values.preferredTherapist || null,
      days: values.days || [],
      timeWindows: values.timeWindows || [],
      earliestDate: values.earliestDate || null,
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      email: values.email.trim().toLowerCase(),
      phone: values.phone.replace(/\D/g, ''),
      notes: values.notes.trim() || null,
      submittedAt: new Date().toISOString(),
      source: 'website-booking-form',
    };
  },

  async submit(values) {
    if (values.website) {
      return { status: 'success', reference: 'HH-B-IGNORED', silent: true };
    }

    const { isValid, errors } = this.validate(values);
    if (!isValid) {
      // Send the caller to the earliest step that has a problem.
      const firstBadStep = bookingSteps.findIndex((step) =>
        step.fields.some((field) => errors[field]),
      );
      return { status: 'rejected', errors, stepIndex: Math.max(firstBadStep, 0) };
    }

    try {
      const result = await contactService.submitBooking(this.buildPayload(values));
      return { status: 'success', reference: result.reference, receivedAt: result.receivedAt };
    } catch (error) {
      return {
        status: 'error',
        message:
          error instanceof ApiError
            ? error.message
            : 'We could not send your request. Please try again, or call the practice directly.',
        errors: error instanceof ApiError ? error.fieldErrors ?? {} : {},
      };
    }
  },
};

export default bookingController;
