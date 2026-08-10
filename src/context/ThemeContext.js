import { createSafeContext } from './createSafeContext';

/**
 * Theme state. The site ships light-mode only by design, so `theme` is
 * effectively constant — but the plumbing is real, so adding a dark palette
 * later is a token change plus flipping ALLOW_DARK in ThemeProvider.
 */
export const [ThemeContext, useTheme] = createSafeContext('Theme');
