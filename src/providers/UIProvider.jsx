import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { UIContext } from '../context/UIContext';

/**
 * UIProvider — chrome-level UI state that more than one component needs.
 *
 *  · mobile navigation drawer (with scroll lock and Escape handling)
 *  · the sticky-header "has scrolled" flag
 *  · the booking dialog, which every CTA on the site opens through openBooking()
 *
 * Route changes close the drawer, which is the behaviour people expect and
 * the thing most hand-rolled mobile navs forget.
 */
export function UIProvider({ children }) {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  /** The booking dialog is opened from the header, the hero and page CTAs. */
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const closeBooking = useCallback(() => setIsBookingOpen(false), []);
  /** Opening the dialog closes the mobile drawer — they must never stack. */
  const openBooking = useCallback(() => {
    setIsNavOpen(false);
    setIsBookingOpen(true);
  }, []);

  const closeNav = useCallback(() => setIsNavOpen(false), []);
  const openNav = useCallback(() => setIsNavOpen(true), []);
  const toggleNav = useCallback(() => setIsNavOpen((open) => !open), []);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setIsNavOpen(false);
  }, [location.pathname]);

  // Lock body scroll while the drawer is open, and restore it exactly.
  useEffect(() => {
    if (!isNavOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isNavOpen]);

  // Escape closes the drawer.
  useEffect(() => {
    if (!isNavOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsNavOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isNavOpen]);

  // Condense the header once the user scrolls past the hero's top edge.
  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const value = useMemo(
    () => ({
      isNavOpen,
      openNav,
      closeNav,
      toggleNav,
      hasScrolled,
      isBookingOpen,
      openBooking,
      closeBooking,
    }),
    [
      isNavOpen,
      openNav,
      closeNav,
      toggleNav,
      hasScrolled,
      isBookingOpen,
      openBooking,
      closeBooking,
    ],
  );

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export default UIProvider;
