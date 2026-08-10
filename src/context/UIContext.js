import { createSafeContext } from './createSafeContext';

/**
 * Cross-cutting UI state: mobile navigation drawer, crisis-banner dismissal,
 * and the scroll flag the header uses to condense itself.
 */
export const [UIContext, useUI] = createSafeContext('UI');
