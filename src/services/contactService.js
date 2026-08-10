/**
 * contactService.js — transport for enquiry, booking and newsletter payloads.
 * Shape-only. All validation and business rules live in the controllers.
 */

import { request } from './httpClient';

export const contactService = {
  /** General enquiry from /contact. */
  submitEnquiry(payload, options) {
    return request('/contact', { method: 'POST', body: payload, ...options });
  },

  /** Consultation request from /book. */
  submitBooking(payload, options) {
    return request('/booking', { method: 'POST', body: payload, ...options });
  },

  /** Newsletter opt-in from the footer. */
  subscribe(payload, options) {
    return request('/newsletter', { method: 'POST', body: payload, ...options });
  },
};

export default contactService;
