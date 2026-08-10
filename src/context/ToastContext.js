import { createSafeContext } from './createSafeContext';

/** Transient status messages, announced politely to assistive tech. */
export const [ToastContext, useToast] = createSafeContext('Toast');
