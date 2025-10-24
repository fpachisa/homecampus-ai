import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useThemeContext } from '../contexts/ThemeContext';
import { OnboardingWizard } from './onboarding/OnboardingWizard';

interface LandingPageProps {
  onComplete: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onComplete }) => {
  const { theme } = useTheme();
  const { toggleTheme, isDark } = useThemeContext();
  const [showOnboarding, setShowOnboarding] = useState(false);

  if (showOnboarding) {
    return (
      <OnboardingWizard
        onComplete={() => {
          setShowOnboarding(false);
          onComplete();
        }}
        onCancel={() => setShowOnboarding(false)}
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
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold text-white"
              style={{ backgroundColor: theme.colors.brand }}
            >
              📚
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
      <main className="relative z-10 flex-1 flex items-center justify-center px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h2
              className="text-5xl md:text-6xl font-bold mb-4"
              style={{ color: theme.colors.textPrimary }}
            >
              AI-Powered Home Learning
            </h2>
            <h3
              className="text-2xl md:text-3xl mb-6"
              style={{ color: theme.colors.textAccent }}
            >
              for Secondary School Mathematics
            </h3>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto"
              style={{ color: theme.colors.textSecondary, lineHeight: '1.6' }}
            >
              Master mathematics through interactive conversations with your AI tutor.
              Adaptive learning tailored to your pace, with real-time progress tracking for parents.
            </p>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {[
              {
                icon: '🤖',
                title: 'AI-Powered Tutor',
                description: 'Socratic teaching that adapts to your learning style',
              },
              {
                icon: '📊',
                title: 'Track Progress',
                description: 'Parents can monitor learning journey in real-time',
              },
              {
                icon: '🎯',
                title: 'Personalized Path',
                description: 'Master concepts at your own pace, grade by grade',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl"
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
            Get Started
          </button>

          {/* Supported Grades */}
          <p
            className="mt-8 text-sm"
            style={{ color: theme.colors.textMuted }}
          >
            Supporting Secondary 1 - 4 Mathematics
          </p>
        </div>
      </main>

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
