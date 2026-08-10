import ThemeProvider from './ThemeProvider';
import ToastProvider from './ToastProvider';
import UIProvider from './UIProvider';

/**
 * AppProviders — one place that defines provider nesting order.
 *
 * Order matters:
 *   Theme  → writes data-theme before anything paints
 *   Toast  → UI and forms both raise toasts, so it must sit above them
 *   UI     → needs useLocation(), so it must sit inside the Router
 *
 * Form providers (Contact, Booking) are intentionally NOT here. They are
 * mounted by the routes that use them, so a visitor reading the privacy
 * policy is not carrying booking-form state around.
 */
export function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <ToastProvider>
        <UIProvider>{children}</UIProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default AppProviders;
