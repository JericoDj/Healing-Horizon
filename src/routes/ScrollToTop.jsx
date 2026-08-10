import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop — restores the behaviour a client-side router breaks.
 *
 * On a normal site, following a link puts you at the top of the new page.
 * React Router keeps the scroll position, which on a long page means the new
 * page appears to start halfway down. This fixes that, while still honouring
 * in-page #anchors and back/forward navigation.
 */
export function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      // Let the target render before trying to scroll to it.
      const id = decodeURIComponent(hash.slice(1));
      requestAnimationFrame(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Make the anchor target focusable so keyboard users land there too.
          if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
          return;
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash, key]);

  return null;
}

export default ScrollToTop;
