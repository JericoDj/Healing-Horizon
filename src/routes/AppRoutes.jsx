
import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import RouteFallback from '../components/layout/RouteFallback';
import HomePage from '../pages/HomePage';
import paths from './paths';

/**
 * AppRoutes — the route table.
 */

const ComingSoonPage = lazy(() => import('../pages/ComingSoonPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ProgramsPage = lazy(() => import('../pages/ProgramsPage'));
const ProgramDetailPage = lazy(() => import('../pages/ProgramDetailPage'));
const TherapistsPage = lazy(() => import('../pages/TherapistsPage'));
const TherapistDetailPage = lazy(() => import('../pages/TherapistDetailPage'));
const RatesPage = lazy(() => import('../pages/RatesPage'));
const ExplorePage = lazy(() => import('../pages/ExplorePage'));
const ExploreDetailPage = lazy(() => import('../pages/ExploreDetailPage'));
const FaqPage = lazy(() => import('../pages/FaqPage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const BookingPage = lazy(() => import('../pages/BookingPage'));
const PrivacyPage = lazy(() => import('../pages/legal/PrivacyPage'));
const TermsPage = lazy(() => import('../pages/legal/TermsPage'));
const AccessibilityPage = lazy(() => import('../pages/legal/AccessibilityPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

function LegacyServiceRedirect() {
  const { slug } = useParams();
  return <Navigate to={paths.program(slug)} replace />;
}

function LegacyResourceRedirect() {
  const { slug } = useParams();
  return <Navigate to={paths.exploreArticle(slug)} replace />;
}

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

        <Route path={paths.programs}>
          <Route
            index
            element={
              <Suspense fallback={<RouteFallback />}>
                <ProgramsPage />
              </Suspense>
            }
          />
          <Route
            path=":slug"
            element={
              <Suspense fallback={<RouteFallback />}>
                <ProgramDetailPage />
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

        <Route path={paths.explore}>
          <Route
            index
            element={
              <Suspense fallback={<RouteFallback />}>
                <ExplorePage />
              </Suspense>
            }
          />
          <Route
            path=":slug"
            element={
              <Suspense fallback={<RouteFallback />}>
                <ExploreDetailPage />
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
        <Route path="/services" element={<Navigate to={paths.programs} replace />} />
        <Route path="/services/:slug" element={<LegacyServiceRedirect />} />
        <Route path="/resources" element={<Navigate to={paths.explore} replace />} />
        <Route path="/resources/:slug" element={<LegacyResourceRedirect />} />
        <Route path="/team" element={<Navigate to={paths.therapists} replace />} />
        <Route path="/pricing" element={<Navigate to={paths.rates} replace />} />
        <Route path="/blog" element={<Navigate to={paths.explore} replace />} />
        <Route path="/appointment" element={<Navigate to={paths.book} replace />} />

        {/* Catch-all fallback for invalid routes: redirect to Home Page */}
        <Route path="*" element={<Navigate to={paths.home} replace />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
