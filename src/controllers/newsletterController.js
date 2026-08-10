/**
 * newsletterController.js — the footer subscribe form. Small on purpose.
 */

import { contactService } from '../services/contactService';
import { ApiError } from '../services/httpClient';
import { email as emailRule, required, validateSchema } from '../utils/validators';

export const newsletterSchema = {
  email: [required('Please enter your email address'), emailRule()],
};

export const newsletterController = {
  schema: newsletterSchema,

  validate(values) {
    return validateSchema(values, newsletterSchema);
  },

  async submit(values) {
    if (values.website) return { status: 'success', silent: true };

    const { isValid, errors } = this.validate(values);
    if (!isValid) return { status: 'rejected', errors };

    try {
      await contactService.subscribe({
        email: values.email.trim().toLowerCase(),
        submittedAt: new Date().toISOString(),
        source: 'website-footer',
      });
      return { status: 'success' };
    } catch (error) {
      return {
        status: 'error',
        message:
          error instanceof ApiError ? error.message : 'We could not subscribe you. Please try again.',
      };
    }
  },
};

export default newsletterController;
