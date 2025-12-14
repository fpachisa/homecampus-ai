import { createBrowserRouter, Navigate, useNavigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useActiveProfile } from '../contexts/ActiveProfileContext';
import LoadingSpinner from '../components/LoadingSpinner';
import { OnboardingWizard } from '../components/onboarding/OnboardingWizard';
import { AuthenticatedLayout } from '../components/layout/AuthenticatedLayout';
import { SubscriptionGuard } from '../components/auth/SubscriptionGuard';

// Lazy load components for code splitting
const LandingPage = lazy(() => import('../components/LandingPage'));
const HomePage = lazy(() => import('../components/HomePage'));
const SettingsPage = lazy(() => import('../pages/SettingsPage'));
const BillingPage = lazy(() => import('../pages/BillingPage'));
const ParentDashboard = lazy(() => import('../components/parent/ParentDashboard'));
const ErrorBoundary = lazy(() => import('../components/ErrorBoundary'));
const GreetingsViewer = lazy(() => import('../pages/GreetingsViewer'));
const StudentStatsDashboard = lazy(() => import('../components/dashboard/stats/StudentStatsDashboard').then(module => ({ default: module.StudentStatsDashboard })));
const HomeworkHelperPage = lazy(() => import('../pages/HomeworkHelperPage'));
const HomeworkHistoryPageWrapper = lazy(() => import('../pages/HomeworkHistoryPageWrapper'));
const SessionDetailPageWrapper = lazy(() => import('../pages/SessionDetailPageWrapper'));
const QuestionBankQA = lazy(() => import('../components/QuestionBankQA'));

// Legal pages
const PrivacyPolicy = lazy(() => import('../components/legal/PrivacyPolicy'));
const TermsOfService = lazy(() => import('../components/legal/TermsOfService'));

// Lazy load sub-routers for better code splitting
const LearnRouter = lazy(() => import('./LearnRouter'));
const PracticeRouter = lazy(() => import('./PracticeRouter'));
const DevRouter = lazy(() => import('./DevRouter'));

// Loading component for lazy-loaded routes
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900">
    <LoadingSpinner size="large" />
  </div>
);

import { useAnalytics } from '../hooks/useAnalytics';

// Root layout wrapper (passes through children)
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  useAnalytics(); // Initialize analytics tracking

  return (
    <Suspense fallback={<PageLoader />}>
      <ErrorBoundary>
        {children}
      </ErrorBoundary>
    </Suspense>
  );
};

// Protected route wrapper - requires authentication
export const ProtectedRoute = ({
  children,
  skipOnboardingCheck = false
}: {
  children: React.ReactNode;
  skipOnboardingCheck?: boolean;
}) => {
  const { user, loading, needsProfileSetup, isProcessingEmailLink } = useAuth();

  // Show loading during auth check OR email link processing (prevents page flash)
  if (loading || isProcessingEmailLink) {
    return <PageLoader />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Redirect to onboarding if user needs to complete profile setup
  // Skip this check for the onboarding page itself to prevent infinite loop
  if (!skipOnboardingCheck && needsProfileSetup) {
    return <Navigate to="/onboarding" replace />;
  }

  return <>{children}</>;
};

// Parent guard - requires parent account type
export const ParentGuard = ({ children }: { children: React.ReactNode }) => {
  const { userProfile, loading } = useAuth();
  const { activeProfile } = useActiveProfile();

  if (loading) {
    return <PageLoader />;
  }

  // Check if user is a parent (either by userProfile or activeProfile)
  const isParent = userProfile?.accountType === 'parent' || activeProfile?.accountType === 'parent';

  if (!isParent) {
    return <Navigate to="/home" replace />;
  }

  return <>{children}</>;
};

// 404 Not Found Page
const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
    <h1 className="text-6xl font-bold mb-4">404</h1>
    <p className="text-xl mb-8">Page not found</p>
    <a href="/" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">
      Go to Home
    </a>
  </div>
);

// Invite handler component (will be implemented later)
const InviteHandler = () => {
  // TODO: Implement invite handling based on URL params
  return <div>Invite Handler - TODO</div>;
};

// Onboarding page wrapper with navigation
// Waits for auth state to fully resolve before rendering wizard (prevents race condition)
const OnboardingPage = () => {
  const navigate = useNavigate();
  const { loading } = useAuth();

  // Extract accountType from URL (set during email verification flow)
  const urlParams = new URLSearchParams(window.location.search);
  const accountTypeFromUrl = urlParams.get('accountType') as 'student' | 'parent' | null;

  // Wait for auth state to fully resolve before showing wizard
  if (loading) {
    return <PageLoader />;
  }

  return (
    <OnboardingWizard
      onComplete={() => navigate('/home')}
      onCancel={() => navigate('/')}
      accountTypeFromUrl={accountTypeFromUrl}
    />
  );
};

// Create the router
export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RootLayout>
        <LandingPage />
      </RootLayout>
    ),
    errorElement: (
      <RootLayout>
        <NotFoundPage />
      </RootLayout>
    ),
  },
  {
    path: '/login',
    element: (
      <RootLayout>
        <LandingPage />
      </RootLayout>
    ),
  },
  {
    path: '/signup',
    element: (
      <RootLayout>
        <LandingPage />
      </RootLayout>
    ),
  },
  {
    path: '/privacy',
    element: (
      <RootLayout>
        <PrivacyPolicy />
      </RootLayout>
    ),
  },
  {
    path: '/terms',
    element: (
      <RootLayout>
        <TermsOfService />
      </RootLayout>
    ),
  },
  {
    path: '/onboarding',
    element: (
      <RootLayout>
        <ProtectedRoute skipOnboardingCheck={true}>
          <OnboardingPage />
        </ProtectedRoute>
      </RootLayout>
    ),
  },
  {
    path: '/home',
    element: (
      <RootLayout>
        <ProtectedRoute>
          <AuthenticatedLayout showFooter={true} footerVariant="minimal">
            <HomePage />
          </AuthenticatedLayout>
        </ProtectedRoute>
      </RootLayout>
    ),
  },
  {
    path: '/settings',
    element: (
      <RootLayout>
        <ProtectedRoute>
          <AuthenticatedLayout showFooter={false}>
            <SettingsPage />
          </AuthenticatedLayout>
        </ProtectedRoute>
      </RootLayout>
    ),
  },
  {
    path: '/billing',
    element: (
      <RootLayout>
        <ProtectedRoute>
          <ParentGuard>
            <AuthenticatedLayout showFooter={false}>
              <BillingPage />
            </AuthenticatedLayout>
          </ParentGuard>
        </ProtectedRoute>
      </RootLayout>
    ),
  },
  {
    path: '/stats',
    element: (
      <RootLayout>
        <ProtectedRoute>
          <AuthenticatedLayout showFooter={true} footerVariant="minimal">
            <SubscriptionGuard>
              <StudentStatsDashboard />
            </SubscriptionGuard>
          </AuthenticatedLayout>
        </ProtectedRoute>
      </RootLayout>
    ),
  },
  {
    path: '/homework-helper',
    element: (
      <RootLayout>
        <ProtectedRoute>
          <AuthenticatedLayout showFooter={false}>
            <SubscriptionGuard>
              <HomeworkHelperPage />
            </SubscriptionGuard>
          </AuthenticatedLayout>
        </ProtectedRoute>
      </RootLayout>
    ),
  },
  {
    path: '/homework/history',
    element: (
      <RootLayout>
        <ProtectedRoute>
          <AuthenticatedLayout showFooter={false}>
            <HomeworkHistoryPageWrapper />
          </AuthenticatedLayout>
        </ProtectedRoute>
      </RootLayout>
    ),
  },
  {
    path: '/homework/history/:problemId',
    element: (
      <RootLayout>
        <ProtectedRoute>
          <AuthenticatedLayout showFooter={false}>
            <SessionDetailPageWrapper />
          </AuthenticatedLayout>
        </ProtectedRoute>
      </RootLayout>
    ),
  },
  {
    path: '/learn/*',
    element: (
      <RootLayout>
        <ProtectedRoute>
          <AuthenticatedLayout
            showSidebar={false}
            showFooter={false}
            showBackground={false}
            maxWidth="full"
            contentPadding="none"
            lockToViewport
          >
            <SubscriptionGuard>
              <LearnRouter />
            </SubscriptionGuard>
          </AuthenticatedLayout>
        </ProtectedRoute>
      </RootLayout>
    ),
  },
  {
    path: '/practice/*',
    element: (
      <RootLayout>
        <ProtectedRoute>
          <AuthenticatedLayout showFooter={false}>
            <SubscriptionGuard>
              <PracticeRouter />
            </SubscriptionGuard>
          </AuthenticatedLayout>
        </ProtectedRoute>
      </RootLayout>
    ),
  },
  {
    path: '/parent/*',
    element: (
      <RootLayout>
        <ProtectedRoute>
          <ParentGuard>
            <AuthenticatedLayout showFooter={true} footerVariant="minimal">
              <ParentDashboard />
            </AuthenticatedLayout>
          </ParentGuard>
        </ProtectedRoute>
      </RootLayout>
    ),
  },

  {
    path: '/invite/:type/:token',
    element: (
      <RootLayout>
        <InviteHandler />
      </RootLayout>
    ),
  },
  {
    path: '/dev/*',
    element: (
      <RootLayout>
        <DevRouter />
      </RootLayout>
    ),
  },
  {
    path: '/greetings-viewer',
    element: (
      <RootLayout>
        <GreetingsViewer />
      </RootLayout>
    ),
  },
  {
    path: '/dev/question-bank-qa',
    element: (
      <RootLayout>
        <QuestionBankQA />
      </RootLayout>
    ),
  },
  {
    path: '/404',
    element: (
      <RootLayout>
        <NotFoundPage />
      </RootLayout>
    ),
  },
  {
    path: '*',
    element: (
      <RootLayout>
        <NotFoundPage />
      </RootLayout>
    ),
  },
]);
