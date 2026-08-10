import { Outlet } from 'react-router-dom';
import BookingDialog from '../booking/BookingDialog';
import Footer from './Footer';
import Header from './Header';
import NewsTicker from './NewsTicker';
import styles from './Layout.module.css';

/**
 * Layout — the shell every route renders inside.
 *
 * The skip link is the first tab stop on the page and targets #main, which is
 * focusable via tabindex="-1". Without both halves, keyboard users tab through
 * the whole nav on every single page.
 *
 * The ticker sits above the header and scrolls away with the page — only the
 * header is sticky. Announcements are read once; they do not deserve permanent
 * vertical space on every screen.
 */
export function Layout() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <div className={styles.stickyHeaderWrap}>
        <NewsTicker />
        <Header />
      </div>

      <main id="main" className={styles.main} tabIndex={-1}>
        <Outlet />
      </main>

      <Footer />

      {/* Mounted once for the whole app. Any CTA anywhere opens it through
          useUI().openBooking(), so there is exactly one booking dialog in the
          tree rather than one per trigger. */}
      <BookingDialog />
    </>
  );
}

export default Layout;
