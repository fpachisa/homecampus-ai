import { useState, useEffect, useCallback } from 'react';
import { useLocation, Navigate, Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { useThemeContext } from '../contexts/ThemeContext';
import { useAppNavigation } from '../hooks/useAppNavigation';
import { useAuth } from '../contexts/AuthContext';
import { OnboardingWizard } from './onboarding/OnboardingWizard';
import { AuthModal } from './auth/AuthModal';
import { authService } from '../services/authService';
import { ProductShowcase } from './landing/ProductShowcase';
import logoLight from '/logo.png?url';
import logoDark from '/logo-dark.png?url';
import MathAntigravity from './effects/MathAntigravity';

export const LandingPage: React.FC = () => {
  const location = useLocation();
  const { theme } = useTheme();
  const { toggleTheme, isDark } = useThemeContext();
  const { goToHome, goToLogin, goToSignup, goToLanding } = useAppNavigation();
  const { user, isProcessingEmailLink } = useAuth();
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [inviteToken, setInviteToken] = useState<string | null>(null);
  const [inviteInfo, setInviteInfo] = useState<any>(null);
  const [inviteType, setInviteType] = useState<'parent-to-child' | 'student-to-parent' | null>(null);
  const [loadingInvite, setLoadingInvite] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Theme-aware logo
  const logoSrc = isDark ? logoDark : logoLight;

  // Stable callback for closing AuthModal (prevents infinite loops)
  const handleAuthModalClose = useCallback(() => {
    setShowAuthModal(false);
    goToHome(); // Navigate to home after successful login
  }, [goToHome]);

  // Check for invite token in URL and route changes
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const parentInviteToken = urlParams.get('parentInvite');
    const childInviteToken = urlParams.get('childInvite');
    const token = parentInviteToken || childInviteToken;

    // Distinguish between login (existing users) and signup (new users)
    // Only update state if it needs to change to prevent infinite loops
    if (location.pathname === '/login') {
      if (!showAuthModal) setShowAuthModal(true);
      if (showOnboarding) setShowOnboarding(false);
    } else if (location.pathname === '/signup') {
      if (!showOnboarding) setShowOnboarding(true);
      if (showAuthModal) setShowAuthModal(false);
    } else {
      // On root path, close both modals
      if (showAuthModal) setShowAuthModal(false);
      if (showOnboarding) setShowOnboarding(false);
    }

    if (token) {
      console.log('[LandingPage] Invite token detected in URL:', token);
      const detectedInviteType = parentInviteToken ? 'student-to-parent' : 'parent-to-child';
      console.log('[LandingPage] Invite type:', detectedInviteType);
      setInviteToken(token);
      setInviteType(detectedInviteType);
      setLoadingInvite(true); // Show loading immediately
      // Store in localStorage in case user refreshes
      localStorage.setItem('pendingInviteToken', token);
      localStorage.setItem('pendingInviteType', detectedInviteType);

      // Fetch invite info to show student name
      authService.getInviteByToken(token).then(invite => {
        if (invite) {
          console.log('[LandingPage] Invite info fetched:', invite);
          setInviteInfo(invite);
          // Auto-open onboarding for invite acceptance
          setShowOnboarding(true);
          setShowAuthModal(false);
        } else {
          console.warn('[LandingPage] No invite found for token:', token);
        }
      }).catch(error => {
        console.error('[LandingPage] Error fetching invite:', error);
      }).finally(() => {
        setLoadingInvite(false); // Hide loading when done
      });
    } else {
      // Check localStorage for pending invite (only on initial mount at root path)
      if (location.pathname === '/') {
        const storedToken = localStorage.getItem('pendingInviteToken');
        const storedInviteType = localStorage.getItem('pendingInviteType') as 'parent-to-child' | 'student-to-parent' | null;
        if (storedToken) {
          console.log('[LandingPage] Restoring invite token from localStorage:', storedToken);
          setInviteToken(storedToken);
          setInviteType(storedInviteType);
          setLoadingInvite(true);
          authService.getInviteByToken(storedToken).then(invite => {
            if (invite) {
              setInviteInfo(invite);
            }
          }).finally(() => {
            setLoadingInvite(false);
          });
        }
      }
    }
  }, [location.pathname, location.search]);

  // Redirect authenticated users to /home (prevents homepage flash during email verification)
  // This runs after email link is processed by AuthContext
  if (user && !showOnboarding && !showAuthModal && !inviteToken) {
    console.log('[LandingPage] Authenticated user detected, redirecting to /home');
    return <Navigate to="/home" replace />;
  }

  // Show loading spinner while processing email link or fetching invite information
  if (isProcessingEmailLink || loadingInvite) {
    return (
      <div
        className="flex items-center justify-center min-h-screen"
        style={{ background: theme.gradients.panel }}
      >
        <div className="text-center">
          <div
            className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 mx-auto mb-4"
            style={{ borderColor: theme.colors.brand }}
          />
          <p style={{ color: theme.colors.textSecondary }}>
            {isProcessingEmailLink ? 'Verifying your email...' : 'Loading invitation...'}
          </p>
        </div>
      </div>
    );
  }

  if (showOnboarding) {
    return (
      <OnboardingWizard
        onComplete={() => {
          setShowOnboarding(false);
          // Clear invite token from localStorage
          localStorage.removeItem('pendingInviteToken');
          localStorage.removeItem('pendingInviteType');
          goToHome(); // Navigate to home after onboarding
        }}
        onCancel={() => {
          setShowOnboarding(false);
          goToLanding(); // Navigate back to landing page root
        }}
        inviteToken={inviteToken}
        inviteInfo={inviteInfo}
        inviteType={inviteType}
      />
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: theme.gradients.panel,
        color: theme.colors.textPrimary,
      }}
    >
      {/* Background pattern with Math Antigravity Effect */}
      <div className="fixed inset-0 z-0">
        <MathAntigravity />
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(217, 119, 87, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(217, 119, 87, 0.05) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-20 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <img src={logoSrc} alt="Home Campus Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
                Home Campus
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#demo"
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: theme.colors.textSecondary }}
              onMouseEnter={(e) => { e.currentTarget.style.color = theme.colors.brand; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = theme.colors.textSecondary; }}
            >
              How It Works
            </a>
            <a
              href="#features"
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: theme.colors.textSecondary }}
              onMouseEnter={(e) => { e.currentTarget.style.color = theme.colors.brand; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = theme.colors.textSecondary; }}
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: theme.colors.textSecondary }}
              onMouseEnter={(e) => { e.currentTarget.style.color = theme.colors.brand; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = theme.colors.textSecondary; }}
            >
              Testimonials
            </a>
          </nav>

          {/* Sign In, Theme Toggle, and Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Sign In Button */}
            <button
              onClick={goToLogin}
              className="hidden sm:block px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base rounded-lg font-semibold transition-all duration-200"
              style={{
                backgroundColor: theme.colors.brand,
                color: '#ffffff',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.brandHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.brand;
              }}
            >
              Sign In
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-200"
              style={{
                backgroundColor: theme.colors.interactive,
                color: theme.colors.textSecondary,
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.brand;
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.interactive;
                e.currentTarget.style.color = theme.colors.textSecondary;
              }}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg transition-all duration-200"
              style={{
                backgroundColor: theme.colors.interactive,
                color: theme.colors.textSecondary,
                cursor: 'pointer',
              }}
              aria-label="Open menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 md:hidden"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              backdropFilter: 'blur(4px)',
            }}
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div
            className="fixed top-0 right-0 bottom-0 w-[280px] z-50 md:hidden transform transition-transform duration-300"
            style={{
              backgroundColor: theme.colors.surface,
              boxShadow: theme.shadows.xl,
            }}
          >
            {/* Drawer Header */}
            <div
              className="flex items-center justify-between p-4"
              style={{ borderBottom: `1px solid ${theme.colors.border}` }}
            >
              <span
                className="text-lg font-semibold"
                style={{ color: theme.colors.textPrimary }}
              >
                Menu
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-lg transition-colors duration-200"
                style={{
                  backgroundColor: theme.colors.interactive,
                  color: theme.colors.textSecondary,
                }}
                aria-label="Close menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Drawer Content */}
            <nav className="p-4 space-y-2">
              <a
                href="#demo"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
                style={{
                  color: theme.colors.textPrimary,
                  backgroundColor: 'transparent',
                }}
              >
                How It Works
              </a>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
                style={{
                  color: theme.colors.textPrimary,
                  backgroundColor: 'transparent',
                }}
              >
                Features
              </a>
              <a
                href="#testimonials"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200"
                style={{
                  color: theme.colors.textPrimary,
                  backgroundColor: 'transparent',
                }}
              >
                Testimonials
              </a>

              <div
                className="my-4"
                style={{ borderTop: `1px solid ${theme.colors.border}` }}
              />

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  goToLogin();
                }}
                className="w-full px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200"
                style={{
                  backgroundColor: 'transparent',
                  color: theme.colors.textPrimary,
                  border: `1px solid ${theme.colors.border}`,
                }}
              >
                Sign In
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  goToSignup();
                }}
                className="w-full px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200"
                style={{
                  backgroundColor: theme.colors.brand,
                  color: '#ffffff',
                }}
              >
                Get Started
              </button>
            </nav>
          </div>
        </>
      )}

      {/* Hero Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8 sm:mb-10">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: theme.colors.textPrimary }}
            >
              Smarter Maths Learning Starts Here
            </h2>
            <h3
              className="text-xl sm:text-2xl lg:text-3xl mb-6"
              style={{ color: theme.colors.textAccent }}
            >
              With Your Personal AI Tutor
            </h3>
            <p
              className="text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-8"
              style={{ color: theme.colors.textSecondary, lineHeight: '1.6' }}
            >
              Learn through guided conversations that build real understanding.
              Not just answers—true mastery through Socratic teaching.
            </p>

            {/* CTA Button */}
            <button
              onClick={goToSignup}
              className="px-6 py-3 sm:px-10 sm:py-4 lg:px-12 rounded-xl text-base sm:text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
              style={{
                background: theme.gradients.brand,
                boxShadow: theme.shadows.lg,
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = theme.shadows.glow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = theme.shadows.lg;
              }}
            >
              Master Maths
            </button>

            {/* Supported Grades */}
            <p
              className="mt-4 sm:mt-6 text-sm"
              style={{ color: theme.colors.textMuted }}
            >
              Supporting Secondary 1 - 4 Mathematics
            </p>
          </div>
        </div>
      </section>

      {/* Problem-Solution Framework */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-6 sm:pb-8" style={{ borderTop: `1px solid ${theme.colors.border}` }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            style={{ color: theme.colors.textPrimary }}
          >
            Struggling with Maths? Here's Why Traditional Methods Fall Short
          </h2>
          <p
            className="text-center text-lg mb-12 max-w-3xl mx-auto"
            style={{ color: theme.colors.textSecondary }}
          >
            You're not alone. Most learning approaches focus on quick fixes instead of deep understanding.
          </p>

          {/* Pain Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                icon: '💸',
                title: 'Expensive Tutoring',
                description: 'Traditional tutors cost $50-100/hour, making quality help inaccessible',
              },
              {
                icon: '📚',
                title: 'One-Size-Fits-All',
                description: 'Group classes move at a fixed pace, leaving students behind or bored',
              },
              {
                icon: '😰',
                title: 'Fear of Asking',
                description: 'Students feel embarrassed to ask questions in class or groups',
              },
              {
                icon: '📊',
                title: 'No Visibility',
                description: "Parents can't see real progress or understand where help is needed",
              },
            ].map((pain, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl text-center"
                style={{
                  background: theme.glass.background,
                  border: `1px solid ${theme.glass.border}`,
                  backdropFilter: theme.glass.backdrop,
                }}
              >
                <div className="text-4xl mb-3">{pain.icon}</div>
                <h4
                  className="font-semibold mb-2"
                  style={{ color: theme.colors.textPrimary }}
                >
                  {pain.title}
                </h4>
                <p
                  className="text-sm"
                  style={{ color: theme.colors.textSecondary }}
                >
                  {pain.description}
                </p>
              </div>
            ))}
          </div>

          {/* Transition */}
          <div className="text-center">
            <p
              className="text-xl md:text-2xl font-semibold"
              style={{ color: theme.colors.brand }}
            >
              Home Campus changes everything
            </p>
          </div>
        </div>
      </section>

      {/* Socratic Learning Showcase */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16" style={{ borderTop: `1px solid ${theme.colors.border}` }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            style={{ color: theme.colors.textPrimary }}
          >
            The Home Campus Difference: Socratic Learning
          </h2>
          <p
            className="text-center text-lg mb-12 max-w-3xl mx-auto"
            style={{ color: theme.colors.textSecondary }}
          >
            We don't just give answers. We guide students to discover solutions through questions,
            building deep understanding that lasts.
          </p>

          {/* Scenario Setup */}
          <div
            className="mb-8 p-6 rounded-xl text-center"
            style={{
              background: theme.colors.interactive,
              border: `1px solid ${theme.glass.border}`,
            }}
          >
            <p className="text-sm font-semibold mb-2" style={{ color: theme.colors.brand }}>
              Example Scenario
            </p>
            <p className="font-mono text-lg mb-2" style={{ color: theme.colors.textPrimary }}>
              Solve: x² + 5x + 6 = 0
            </p>
            <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
              Student submits wrong answer: x = 2, x = 3
            </p>
          </div>

          {/* Side-by-side Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Standard Approach */}
            <div>
              <div className="text-center mb-4">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: theme.colors.textMuted }}
                >
                  ❌ Standard Approach
                </h3>
                <p className="text-sm" style={{ color: theme.colors.textMuted }}>
                  Quick fix, no understanding
                </p>
              </div>

              <div
                className="p-6 rounded-2xl space-y-4"
                style={{
                  background: theme.colors.interactive,
                  border: `1px solid ${theme.colors.border}`,
                  opacity: 0.7,
                }}
              >
                {/* Wrong answer */}
                <div className="flex justify-end">
                  <div
                    className="max-w-[80%] p-4 rounded-2xl rounded-tr-sm"
                    style={{
                      backgroundColor: theme.colors.brand + '40',
                      color: theme.colors.textPrimary,
                    }}
                  >
                    <p className="text-sm">x = 2, x = 3</p>
                  </div>
                </div>

                {/* Standard response */}
                <div className="flex justify-start">
                  <div
                    className="max-w-[80%] p-4 rounded-2xl rounded-tl-sm"
                    style={{
                      backgroundColor: theme.colors.textMuted + '20',
                      color: theme.colors.textPrimary,
                    }}
                  >
                    <p className="text-sm font-semibold mb-2">❌ That's incorrect.</p>
                    <p className="text-sm mb-2">The correct answer is <strong>x = -2</strong> and <strong>x = -3</strong>.</p>
                    <p className="text-sm mb-2">Here's the solution:</p>
                    <p className="text-sm font-mono">
                      x² + 5x + 6 = 0<br />
                      (x + 2)(x + 3) = 0<br />
                      x = -2 or x = -3
                    </p>
                    <p className="text-sm mt-2">Let's move on to the next problem.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Home Campus Socratic Approach */}
            <div>
              <div className="text-center mb-4">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ color: theme.colors.brand }}
                >
                  ✅ Home Campus Socratic Method
                </h3>
                <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                  Guide to discovery, deep understanding
                </p>
              </div>

              <div
                className="p-6 rounded-2xl space-y-4"
                style={{
                  background: theme.glass.background,
                  border: `2px solid ${theme.colors.brand}`,
                  backdropFilter: theme.glass.backdrop,
                  boxShadow: theme.shadows.glow,
                }}
              >
                {/* Wrong answer */}
                <div className="flex justify-end">
                  <div
                    className="max-w-[80%] p-4 rounded-2xl rounded-tr-sm"
                    style={{
                      backgroundColor: theme.colors.brand + '40',
                      color: theme.colors.textPrimary,
                    }}
                  >
                    <p className="text-sm">x = 2, x = 3</p>
                  </div>
                </div>

                {/* Socratic response 1 */}
                <div className="flex justify-start">
                  <div
                    className="max-w-[80%] p-4 rounded-2xl rounded-tl-sm"
                    style={{
                      backgroundColor: theme.colors.interactive,
                      color: theme.colors.textPrimary,
                    }}
                  >
                    <p className="text-sm">
                      Let's verify your answer together! What happens if we substitute x = 2 back into the original equation?
                    </p>
                  </div>
                </div>

                {/* Student realization */}
                <div className="flex justify-end">
                  <div
                    className="max-w-[80%] p-4 rounded-2xl rounded-tr-sm"
                    style={{
                      backgroundColor: theme.colors.brand + '40',
                      color: theme.colors.textPrimary,
                    }}
                  >
                    <p className="text-sm">(2)² + 5(2) + 6 = 4 + 10 + 6 = 20... Oh, it doesn't equal 0!</p>
                  </div>
                </div>

                {/* Socratic guidance */}
                <div className="flex justify-start">
                  <div
                    className="max-w-[80%] p-4 rounded-2xl rounded-tl-sm"
                    style={{
                      backgroundColor: theme.colors.interactive,
                      color: theme.colors.textPrimary,
                    }}
                  >
                    <p className="text-sm">
                      Exactly! Now, can you think of two numbers that multiply to 6 and add to 5?
                    </p>
                  </div>
                </div>

                {/* Student discovery */}
                <div className="flex justify-end">
                  <div
                    className="max-w-[80%] p-4 rounded-2xl rounded-tr-sm"
                    style={{
                      backgroundColor: theme.colors.brand + '40',
                      color: theme.colors.textPrimary,
                    }}
                  >
                    <p className="text-sm">Hmm... 2 and 3!</p>
                  </div>
                </div>

                {/* Final guidance */}
                <div className="flex justify-start">
                  <div
                    className="max-w-[80%] p-4 rounded-2xl rounded-tl-sm"
                    style={{
                      backgroundColor: theme.colors.interactive,
                      color: theme.colors.textPrimary,
                    }}
                  >
                    <p className="text-sm">
                      Great thinking! So we can factor as (x + 2)(x + 3) = 0. What values of x make this true?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div
            className="p-8 rounded-2xl"
            style={{
              background: theme.glass.background,
              border: `1px solid ${theme.colors.brand}`,
              backdropFilter: theme.glass.backdrop,
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-3">❌</div>
                <h4 className="font-bold mb-2" style={{ color: theme.colors.textMuted }}>
                  Standard Approach
                </h4>
                <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                  Give solution → Move on → Surface learning
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">✅</div>
                <h4 className="font-bold mb-2" style={{ color: theme.colors.brand }}>
                  Home Campus Method
                </h4>
                <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
                  Ask questions → Guide thinking → True mastery
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase - Scroll-driven Demo */}
      <ProductShowcase />

      {/* Features */}
      <section id="features" className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16" style={{ borderTop: `1px solid ${theme.colors.border}` }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            style={{ color: theme.colors.textPrimary }}
          >
            Everything You Need to Excel
          </h2>
          <p
            className="text-center text-lg mb-12 max-w-3xl mx-auto"
            style={{ color: theme.colors.textSecondary }}
          >
            Powerful features designed for students and parents
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🤖',
                title: 'AI-Powered Tutor',
                description: 'Socratic teaching that adapts to your learning style and pace',
              },
              {
                icon: '📊',
                title: 'Track Progress',
                description: 'Parents can monitor learning journey and mastery in real-time',
              },
              {
                icon: '🎯',
                title: 'Personalized Path',
                description: 'Master concepts at your own pace with adaptive difficulty',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl text-center"
                style={{
                  background: theme.glass.background,
                  border: `1px solid ${theme.glass.border}`,
                  backdropFilter: theme.glass.backdrop,
                }}
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h4
                  className="text-lg font-semibold mb-2"
                  style={{ color: theme.colors.textPrimary }}
                >
                  {feature.title}
                </h4>
                <p
                  className="text-sm"
                  style={{ color: theme.colors.textSecondary }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="testimonials" className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16" style={{ borderTop: `1px solid ${theme.colors.border}` }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            style={{ color: theme.colors.textPrimary }}
          >
            Join Hundreds of Students Achieving Success
          </h2>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                stat: '500+',
                label: 'Students Learning Daily',
              },
              {
                stat: '95%',
                label: 'Parent Satisfaction',
              },
              {
                stat: '25%',
                label: 'Avg. Grade Improvement',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl text-center"
                style={{
                  background: theme.gradients.brand,
                  color: '#ffffff',
                  boxShadow: theme.shadows.lg,
                }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{item.stat}</div>
                <p className="text-sm opacity-90">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Testimonials 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote: "I went from struggling with C's to getting A's in Trigonometry! The AI tutor helps me understand WHY things work, not just memorize formulas.",
                name: 'Sarah L.',
                role: 'Sec 3 Student',
                avatar: '🎓',
              },
              {
                quote: "Finally I can see what my daughter is actually learning. The progress dashboard shows me exactly where she needs help and where she's excelling.",
                name: 'Mrs. Tan',
                role: 'Parent of Sec 4 Student',
                avatar: '👨‍👩‍👧',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl"
                style={{
                  background: theme.glass.background,
                  border: `1px solid ${theme.glass.border}`,
                  backdropFilter: theme.glass.backdrop,
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ backgroundColor: theme.colors.brand + '20' }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p
                      className="text-sm mb-4 italic"
                      style={{ color: theme.colors.textSecondary }}
                    >
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p
                        className="font-semibold text-sm"
                        style={{ color: theme.colors.textPrimary }}
                      >
                        {testimonial.name}
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: theme.colors.textMuted }}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: theme.colors.textPrimary }}
          >
            Ready to Transform Your Maths Journey?
          </h2>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: theme.colors.textSecondary }}
          >
            Join hundreds of students mastering mathematics through guided learning.
            Start your free journey today.
          </p>

          <button
            onClick={goToSignup}
            className="px-12 py-4 rounded-xl text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
            style={{
              background: theme.gradients.brand,
              boxShadow: theme.shadows.lg,
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = theme.shadows.glow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = theme.shadows.lg;
            }}
          >
            Master Maths
          </button>

          <p
            className="mt-6 text-sm"
            style={{ color: theme.colors.textMuted }}
          >
            Supporting Secondary 1 - 4 Mathematics
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-t" style={{ borderColor: theme.colors.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Column 1: Logo & Tagline */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={logoSrc} alt="Home Campus" className="w-10 h-10 object-contain" />
                <span
                  className="text-xl font-bold"
                  style={{ color: theme.colors.textPrimary }}
                >
                  Home Campus
                </span>
              </div>
              <p
                className="text-sm"
                style={{ color: theme.colors.textSecondary }}
              >
                Personalized AI tutoring that builds real understanding through Socratic learning.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4
                className="font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-sm transition-colors duration-200"
                    style={{ color: theme.colors.textSecondary }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = theme.colors.brand; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = theme.colors.textSecondary; }}
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#demo"
                    className="text-sm transition-colors duration-200"
                    style={{ color: theme.colors.textSecondary }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = theme.colors.brand; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = theme.colors.textSecondary; }}
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-sm transition-colors duration-200"
                    style={{ color: theme.colors.textSecondary }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = theme.colors.brand; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = theme.colors.textSecondary; }}
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <button
                    onClick={goToSignup}
                    className="text-sm transition-colors duration-200"
                    style={{ color: theme.colors.textSecondary, background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = theme.colors.brand; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = theme.colors.textSecondary; }}
                  >
                    Get Started
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 3: Legal & Contact */}
            <div>
              <h4
                className="font-semibold mb-4"
                style={{ color: theme.colors.textPrimary }}
              >
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/privacy"
                    className="text-sm transition-colors duration-200"
                    style={{ color: theme.colors.textSecondary }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = theme.colors.brand; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = theme.colors.textSecondary; }}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-sm transition-colors duration-200"
                    style={{ color: theme.colors.textSecondary }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = theme.colors.brand; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = theme.colors.textSecondary; }}
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:aitutor@homecampus.ai"
                    className="text-sm transition-colors duration-200"
                    style={{ color: theme.colors.textSecondary }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = theme.colors.brand; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = theme.colors.textSecondary; }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div
            className="pt-8 text-center"
            style={{ borderTop: `1px solid ${theme.colors.border}` }}
          >
            <p className="text-sm" style={{ color: theme.colors.textMuted }}>
              © {new Date().getFullYear()} Home Campus. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Auth Modal - for existing users to log in */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={handleAuthModalClose}
      />
    </div>
  );
};

export default LandingPage;
