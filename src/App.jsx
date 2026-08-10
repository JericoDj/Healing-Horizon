import { BrowserRouter } from 'react-router-dom';
import ErrorBoundary from './components/layout/ErrorBoundary';
import AppProviders from './providers/AppProviders';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './routes/ScrollToTop';

/**
 * App — composition root.
 *
 * Order is deliberate:
 *   ErrorBoundary  outermost, so a provider that throws still renders a page
 *                  with a phone number on it rather than a white screen;
 *   BrowserRouter  above the providers, because UIProvider uses useLocation;
 *   AppProviders   the shared context stack;
 *   ScrollToTop    inside the router, restores per-navigation scroll behaviour.
 */
export function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppProviders>
          <ScrollToTop />
          <AppRoutes />
        </AppProviders>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
