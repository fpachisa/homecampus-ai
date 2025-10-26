import { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useThemeContext } from '../contexts/ThemeContext';
import { useAppNavigation } from '../hooks/useAppNavigation';
import { OnboardingWizard } from './onboarding/OnboardingWizard';
import { authService } from '../services/authService';

export const LandingPage: React.FC = () => {
  const { theme } = useTheme();
  const { toggleTheme, isDark } = useThemeContext();
  const { goToHome } = useAppNavigation();
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [inviteToken, setInviteToken] = useState<string | null>(null);
  const [inviteInfo, setInviteInfo] = useState<any>(null);

  // Check for invite token in URL on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('parentInvite');

    if (token) {
      setInviteToken(token);
      // Store in localStorage in case user refreshes
      localStorage.setItem('pendingInviteToken', token);

      // Fetch invite info to show student name
      authService.getInviteByToken(token).then(invite => {
        if (invite) {
          setInviteInfo(invite);
          // Auto-open onboarding for invite acceptance
          setShowOnboarding(true);
        }
      });
    } else {
      // Check localStorage for pending invite
      const storedToken = localStorage.getItem('pendingInviteToken');
      if (storedToken) {
        setInviteToken(storedToken);
        authService.getInviteByToken(storedToken).then(invite => {
          if (invite) {
            setInviteInfo(invite);
          }
        });
      }
    }
  }, []);

  if (showOnboarding) {
    return (
      <OnboardingWizard
        onComplete={() => {
          setShowOnboarding(false);
          // Clear invite token from localStorage
          localStorage.removeItem('pendingInviteToken');
          goToHome(); // Navigate to home after onboarding
        }}
        onCancel={() => setShowOnboarding(false)}
        inviteToken={inviteToken}
        inviteInfo={inviteInfo}
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
      {/* Background pattern */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, rgba(217, 119, 87, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(217, 119, 87, 0.05) 0%, transparent 50%)',
        }}
      />

      {/* Header */}
      <header className="relative z-10 px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/logo.png" alt="Home Campus Logo" className="w-12 h-12 object-contain" />
            </div>
            <div>
              <h1 className="text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
                Home Campus
              </h1>
            </div>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-all duration-200"
            style={{
              backgroundColor: theme.colors.interactive,
              color: theme.colors.textSecondary,
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
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-8 py-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-12">
            <h2
              className="text-5xl md:text-6xl font-bold mb-4"
              style={{ color: theme.colors.textPrimary }}
            >
              From Struggling to A's
            </h2>
            <h3
              className="text-2xl md:text-3xl mb-6"
              style={{ color: theme.colors.textAccent }}
            >
              Master Secondary Math with Your Personal AI Tutor
            </h3>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto mb-8"
              style={{ color: theme.colors.textSecondary, lineHeight: '1.6' }}
            >
              Learn through guided conversations that build real understanding.
              Not just answers—true mastery through Socratic teaching.
            </p>

            {/* CTA Button */}
            <button
              onClick={() => setShowOnboarding(true)}
              className="px-12 py-4 rounded-xl text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
              style={{
                background: theme.gradients.brand,
                boxShadow: theme.shadows.lg,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = theme.shadows.glow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = theme.shadows.lg;
              }}
            >
              Get Started Free
            </button>

            {/* Supported Grades */}
            <p
              className="mt-6 text-sm"
              style={{ color: theme.colors.textMuted }}
            >
              Supporting Secondary 1 - 4 Mathematics
            </p>
          </div>
        </div>
      </section>

      {/* Problem-Solution Framework */}
      <section className="relative z-10 px-8 py-16" style={{ borderTop: `1px solid ${theme.colors.border}` }}>
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold text-center mb-4"
            style={{ color: theme.colors.textPrimary }}
          >
            Struggling with Math? Here's Why Traditional Methods Fall Short
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
      <section className="relative z-10 px-8 py-16" style={{ borderTop: `1px solid ${theme.colors.border}` }}>
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

      {/* Features */}
      <section className="relative z-10 px-8 py-16" style={{ borderTop: `1px solid ${theme.colors.border}` }}>
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
      <section className="relative z-10 px-8 py-16" style={{ borderTop: `1px solid ${theme.colors.border}` }}>
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

          {/* Testimonials */}
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
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: theme.colors.textPrimary }}
          >
            Ready to Transform Your Math Journey?
          </h2>
          <p
            className="text-lg mb-8 max-w-2xl mx-auto"
            style={{ color: theme.colors.textSecondary }}
          >
            Join hundreds of students mastering mathematics through guided learning.
            Start your free journey today.
          </p>

          <button
            onClick={() => setShowOnboarding(true)}
            className="px-12 py-4 rounded-xl text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
            style={{
              background: theme.gradients.brand,
              boxShadow: theme.shadows.lg,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = theme.shadows.glow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = theme.shadows.lg;
            }}
          >
            Get Started Free
          </button>

          <p
            className="mt-6 text-sm"
            style={{ color: theme.colors.textMuted }}
          >
            Supporting Secondary 1 - 4 Mathematics • No credit card required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-8 py-6 border-t" style={{ borderColor: theme.colors.border }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm" style={{ color: theme.colors.textMuted }}>
            © 2025 Home Campus - Personalized Learning Platform
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
