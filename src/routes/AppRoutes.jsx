import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import RouteFallback from '../components/layout/RouteFallback';
import HomePage from '../pages/HomePage';
import paths from './paths';

/**
 * AppRoutes — the route table.
 *
 * The home page is eager because it is the most-requested entry point and
 * should paint without a second network round trip. Everything else is
 * code-split, so a visitor who only reads the privacy policy never downloads
 * the booking form.
 */

const ComingSoonPage = lazy(() => import('../pages/ComingSoonPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ServicesPage = lazy(() => import('../pages/ServicesPage'));
const ServiceDetailPage = lazy(() => import('../pages/ServiceDetailPage'));
const TherapistsPage = lazy(() => import('../pages/TherapistsPage'));
const TherapistDetailPage = lazy(() => import('../pages/TherapistDetailPage'));
const RatesPage = lazy(() => import('../pages/RatesPage'));
const ResourcesPage = lazy(() => import('../pages/ResourcesPage'));
const ResourceDetailPage = lazy(() => import('../pages/ResourceDetailPage'));
const FaqPage = lazy(() => import('../pages/FaqPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const BookingPage = lazy(() => import('../pages/BookingPage'));
const PrivacyPage = lazy(() => import('../pages/legal/PrivacyPage'));
const TermsPage = lazy(() => import('../pages/legal/TermsPage'));
const AccessibilityPage = lazy(() => import('../pages/legal/AccessibilityPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path={paths.about}
          element={
            <Suspense fallback={<RouteFallback />}>
              <AboutPage />
            </Suspense>
          }
        />

        <Route path={paths.services}>
          <Route
            index
            element={
              <Suspense fallback={<RouteFallback />}>
                <ServicesPage />
              </Suspense>
            }
          />
          <Route
            path=":slug"
            element={
              <Suspense fallback={<RouteFallback />}>
                <ServiceDetailPage />
              </Suspense>
            }
          />
        </Route>

        <Route path={paths.therapists}>
          <Route
            index
            element={
              <Suspense fallback={<RouteFallback />}>
                <TherapistsPage />
              </Suspense>
            }
          />
          <Route
            path=":slug"
            element={
              <Suspense fallback={<RouteFallback />}>
                <TherapistDetailPage />
              </Suspense>
            }
          />
        </Route>

        <Route
          path={paths.rates}
          element={
            <Suspense fallback={<RouteFallback />}>
              <RatesPage />
            </Suspense>
          }
        />

        <Route path={paths.resources}>
          <Route
            index
            element={
              <Suspense fallback={<RouteFallback />}>
                <ResourcesPage />
              </Suspense>
            }
          />
          <Route
            path=":slug"
            element={
              <Suspense fallback={<RouteFallback />}>
                <ResourceDetailPage />
              </Suspense>
            }
          />
        </Route>

        <Route
          path={paths.faq}
          element={
            <Suspense fallback={<RouteFallback />}>
              <FaqPage />
            </Suspense>
          }
        />

        <Route
          path={paths.contact}
          element={
            <Suspense fallback={<RouteFallback />}>
              <ContactPage />
            </Suspense>
          }
        />

        <Route
          path={paths.book}
          element={
            <Suspense fallback={<RouteFallback />}>
              <BookingPage />
            </Suspense>
          }
        />

        <Route
          path={paths.privacy}
          element={
            <Suspense fallback={<RouteFallback />}>
              <PrivacyPage />
            </Suspense>
          }
        />
        <Route
          path={paths.terms}
          element={
            <Suspense fallback={<RouteFallback />}>
              <TermsPage />
            </Suspense>
          }
        />
        <Route
          path={paths.accessibility}
          element={
            <Suspense fallback={<RouteFallback />}>
              <AccessibilityPage />
            </Suspense>
          }
        />

        {/* Legacy / convenience redirects */}
        <Route path="/team" element={<Navigate to={paths.therapists} replace />} />
        <Route path="/pricing" element={<Navigate to={paths.rates} replace />} />
        <Route path="/blog" element={<Navigate to={paths.resources} replace />} />
        <Route path="/appointment" element={<Navigate to={paths.book} replace />} />

        {/* Catch-all fallback for invalid routes: redirect to Home Page */}
        <Route path="*" element={<Navigate to={paths.home} replace />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
