import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useUI } from '../../context/UIContext';
import { primaryNav, site } from '../../data/site';
import paths from '../../routes/paths';
import { Button, Icon } from '../ui';
import logoImg from '../../assets/logos/logo_no_background.png';
import logoTextImg from '../../assets/logos/logo_text_no_background.png';
import styles from './Header.module.css';

/**
 * Header — sticky site chrome.
 *
 * Condenses on scroll (state lives in UIProvider so the layout can react too).
 * Below 60rem it collapses to a drawer that traps nothing, closes on Escape,
 * closes on route change, and locks body scroll while open.
 *
 * The phone number stays visible at every breakpoint. On a therapy site the
 * phone is not a secondary action.
 */
/**
 * Tracks the active nav pill and reports where a shared indicator should sit.
 *
 * A per-link `::after` can only pop in and out — there is no element that
 * exists in both the old position and the new one, so there is nothing to
 * animate. One shared element that moves is the only way to get travel.
 *
 * `hasMeasured` suppresses the transition on first paint, so the dot appears
 * under the current page rather than flying in from the left on every load.
 */
function useActiveIndicator(pathname) {
  const navRef = useRef(null);
  const [hoveredTo, setHoveredTo] = useState(null);
  const [indicator, setIndicator] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    visible: false,
    isHover: false,
    activeX: 0,
    activeWidth: 0,
    activeVisible: false,
  });
  const [hasMeasured, setHasMeasured] = useState(false);

  const measure = useCallback(() => {
    const nav = navRef.current;
    if (!nav) return;

    const activeEl = nav.querySelector('[aria-current="page"]');
    const hoveredEl = hoveredTo ? nav.querySelector(`[data-to="${hoveredTo}"]`) : null;
    const target = hoveredEl || activeEl;

    if (!target) {
      setIndicator((previous) => ({ ...previous, visible: false, activeVisible: false }));
      return;
    }

    const navBox = nav.getBoundingClientRect();
    const targetBox = target.getBoundingClientRect();
    const isHover = Boolean(hoveredEl && target !== activeEl);

    let activeX = 0;
    let activeWidth = 0;
    let activeVisible = false;

    if (activeEl) {
      const activeBox = activeEl.getBoundingClientRect();
      activeX = activeBox.left - navBox.left;
      activeWidth = activeBox.width;
      activeVisible = true;
    }

    setIndicator({
      x: targetBox.left - navBox.left,
      y: targetBox.top - navBox.top,
      width: targetBox.width,
      height: targetBox.height,
      visible: true,
      isHover,
      activeX,
      activeWidth,
      activeVisible,
    });
  }, [hoveredTo]);

  useLayoutEffect(() => {
    measure();
  }, [pathname, measure]);

  useEffect(() => {
    // Webfonts change pill widths after first paint, and so does a resize.
    const observer = new ResizeObserver(measure);
    if (navRef.current) observer.observe(navRef.current);
    document.fonts?.ready.then(measure).catch(() => {});

    // Enable the transition once the first position is painted. rAF alone is
    // not enough: it is throttled in background tabs, so a page opened in one
    // would never turn the animation on. The timer is the backstop.
    const frame = requestAnimationFrame(() => setHasMeasured(true));
    const timer = setTimeout(() => setHasMeasured(true), 120);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [measure]);

  return { navRef, indicator, hasMeasured, setHoveredTo, hoveredTo };
}

export function Header() {
  const { isNavOpen, toggleNav, closeNav, hasScrolled, openBooking } = useUI();
  const { pathname } = useLocation();
  const { navRef, indicator, hasMeasured, setHoveredTo, hoveredTo } =
    useActiveIndicator(pathname);

  return (
    <header className={`${styles.header} ${hasScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to={paths.home} className={styles.brand} aria-label={`${site.name} Maryland — home`}>
          <img src={logoImg} alt="" className={styles.logoImg} />
          <div className={styles.brandTextWrapper}>
            <img src={logoTextImg} alt={`${site.name} Maryland`} className={styles.brandTextImg} />
            <span className={styles.brandPill}>Maryland</span>
          </div>
        </Link>

        <nav
          className={styles.desktopNav}
          aria-label="Primary"
          ref={navRef}
          onMouseLeave={() => setHoveredTo(null)}
        >
          <ul className={styles.navList}>
            {primaryNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  data-to={item.to}
                  onMouseEnter={() => setHoveredTo(item.to)}
                  className={({ isActive }) => {
                    const isCoveredBySolidPill =
                      !indicator.isHover && (hoveredTo ? hoveredTo === item.to : isActive);

                    return [
                      styles.navLink,
                      isActive ? styles.navLinkActive : '',
                      isCoveredBySolidPill ? styles.navLinkSolid : '',
                      hoveredTo === item.to && !isActive ? styles.navLinkHovered : '',
                    ]
                      .filter(Boolean)
                      .join(' ');
                  }}
                >
                  <Icon name={item.icon} size={17} className={styles.navIcon} />
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Shared sliding background pill */}
          <span
            className={[
              styles.navIndicator,
              indicator.visible ? styles.navIndicatorVisible : '',
              indicator.isHover ? styles.navIndicatorHover : '',
              hasMeasured ? styles.navIndicatorAnimated : '',
            ]
              .filter(Boolean)
              .join(' ')}
            style={{
              transform: `translate3d(${indicator.x}px, ${indicator.y}px, 0)`,
              width: `${indicator.width}px`,
              height: `${indicator.height}px`,
            }}
          />

          {/* Standalone traveling active green dot pinned to active route */}
          <span
            className={[
              styles.activeDot,
              indicator.activeVisible ? styles.activeDotVisible : '',
              hasMeasured ? styles.navIndicatorAnimated : '',
            ]
              .filter(Boolean)
              .join(' ')}
            style={{
              transform: `translate3d(${indicator.activeX + indicator.activeWidth / 2}px, 0, 0)`,
            }}
          />
        </nav>

        <div className={styles.actions}>
          <a href={site.contact.phoneHref} className={styles.phone}>
            <Icon name="phone" size={17} />
            <span className={styles.phoneNumber}>{site.contact.phone}</span>
          </a>

          <Button type="button" size="sm" className={styles.cta} onClick={openBooking}>
            Book a call
          </Button>

          <button
            type="button"
            className={styles.menuButton}
            onClick={toggleNav}
            aria-expanded={isNavOpen}
            aria-controls="mobile-navigation"
            aria-label={isNavOpen ? 'Close menu' : 'Open menu'}
          >
            <Icon name={isNavOpen ? 'close' : 'menu'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile side drawer */}
      <div
        id="mobile-navigation"
        className={`${styles.drawer} ${isNavOpen ? styles.drawerOpen : ''}`}
        hidden={!isNavOpen}
      >
        <div className={styles.drawerHeader}>
          <div className={styles.drawerBrand}>
            <img src={logoImg} alt="" className={styles.drawerLogoImg} />
            <div className={styles.brandTextWrapper}>
              <img src={logoTextImg} alt={`${site.name} Maryland`} className={styles.drawerBrandTextImg} />
              <span className={styles.brandPill}>Maryland</span>
            </div>
          </div>
          <button
            type="button"
            className={styles.drawerCloseButton}
            onClick={closeNav}
            aria-label="Close menu"
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        <nav aria-label="Mobile" className={styles.drawerNav}>
          <ul className={styles.drawerList}>
            {primaryNav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={closeNav}
                  className={({ isActive }) =>
                    `${styles.drawerLink} ${isActive ? styles.drawerLinkActive : ''}`
                  }
                >
                  <span className={styles.drawerLinkLabel}>
                    <Icon name={item.icon} size={19} className={styles.drawerIcon} />
                    {item.label}
                  </span>
                  <Icon name="arrowRight" size={18} />
                </NavLink>
              </li>
            ))}
          </ul>

          <div className={styles.drawerFooter}>
            <Button type="button" fullWidth onClick={openBooking}>
              Book a free consultation
            </Button>
            <a href={site.contact.phoneHref} className={styles.drawerPhone}>
              <Icon name="phone" size={18} />
              {site.contact.phone}
            </a>
            <p className={styles.drawerCrisis}>
              In crisis? Call or text <a href="tel:988">988</a> any time.
            </p>
          </div>
        </nav>
      </div>

      {isNavOpen ? (
        <button
          type="button"
          className={styles.scrim}
          onClick={closeNav}
          tabIndex={-1}
          aria-hidden="true"
        />
      ) : null}
    </header>
  );
}

export default Header;
