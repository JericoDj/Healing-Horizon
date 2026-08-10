import { createSafeContext } from './createSafeContext';

/** State for the /contact enquiry form. Backed by contactController. */
export const [ContactContext, useContactForm] = createSafeContext('Contact');
