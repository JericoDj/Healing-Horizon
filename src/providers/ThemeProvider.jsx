import { useCallback, useEffect, useMemo, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { STORAGE_KEYS, storageService } from '../services/storageService';

/**
 * ThemeProvider
 *
 * Healing Horizon ships light mode only — that was the brief, and a calm,
 * high-contrast light palette is the right call for a clinical practice.
 *
 * The provider still exists and still does real work: it writes `data-theme`
 * onto <html>, syncs the browser UI colour, and exposes the OS accessibility
 * preferences (reduced motion, high contrast) that several components read.
 *
 * To add dark mode later:
 *   1. add a `[data-theme='dark'] { ... }` block to tokens.css overriding the
 *      SEMANTIC tokens only (section 2) — never the raw ramps;
 *   2. set ALLOW_DARK to true.
 * Nothing else changes, because no component hard-codes a colour.
 */
const ALLOW_DARK = false;
const DEFAULT_THEME = 'light';

/** Matches --surface-page so the mobile browser chrome blends in. */
const THEME_COLORS = { light: '#ffffff', dark: '#142c52' };

function usePrefersQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const list = window.matchMedia(query);
    const onChange = (event) => setMatches(event.matches);
    list.addEventListener('change', onChange);
    return () => list.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    if (!ALLOW_DARK) return DEFAULT_THEME;
    const stored = storageService.get(STORAGE_KEYS.theme);
    return stored === 'dark' || stored === 'light' ? stored : DEFAULT_THEME;
  });

  const prefersReducedMotion = usePrefersQuery('(prefers-reduced-motion: reduce)');
  const prefersHighContrast = usePrefersQuery('(prefers-contrast: more)');

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', THEME_COLORS[theme] ?? THEME_COLORS.light);
  }, [theme]);

  const setTheme = useCallback((next) => {
    if (!ALLOW_DARK) return;
    setThemeState(next);
    storageService.set(STORAGE_KEYS.theme, next);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [setTheme, theme]);

  const value = useMemo(
    () => ({
      theme,
      isLight: theme === 'light',
      isDark: theme === 'dark',
      canToggleTheme: ALLOW_DARK,
      setTheme,
      toggleTheme,
      prefersReducedMotion,
      prefersHighContrast,
    }),
    [theme, setTheme, toggleTheme, prefersReducedMotion, prefersHighContrast],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
