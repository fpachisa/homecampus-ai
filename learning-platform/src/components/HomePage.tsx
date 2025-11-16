/**
 * HomePage - Main landing page for authenticated users
 *
 * Routes to:
 * - StudentDashboard (for students)
 * - ParentDashboard (for parents)
 *
 * Includes shared header with theme toggle, profile menu, and profile switcher
 */

import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useThemeContext } from '../contexts/ThemeContext';
import { ProfileMenu, AuthModal } from './auth';
import { ProfileSwitcher } from './ProfileSwitcher';
import { ParentDashboard } from './parent/ParentDashboard';
import { StudentDashboard } from './dashboard/StudentDashboard';
import { useActiveProfile } from '../contexts/ActiveProfileContext';
import logoLight from '/logo.png?url';
import logoDark from '/logo-dark.png?url';

const HomePage: React.FC = () => {
  const { theme } = useTheme();
  const { toggleTheme, isDark } = useThemeContext();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { isViewingAsParent, canSwitchProfiles } = useActiveProfile();

  // Theme-aware logo
  const logoSrc = isDark ? logoDark : logoLight;

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: theme.gradients.panel,
        color: theme.colors.textPrimary,
      }}
    >
      {/* Background texture */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, rgba(88, 101, 242, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(71, 82, 196, 0.05) 0%, transparent 50%)',
        }}
      />

      {/* Header */}
      <header className="relative z-[100] px-4 sm:px-6 lg:px-8 py-3 sm:py-4 border-b" style={{ borderColor: theme.colors.border }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center animate-float">
                <img src={logoSrc} alt="Home Campus Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold" style={{ color: theme.colors.textPrimary }}>
                  Home Campus
                </h1>
                <p className="text-xs sm:text-sm" style={{ color: theme.colors.textMuted }}>
                  AI-Powered Home Learning
                </p>
              </div>
            </div>

            {/* Theme toggle and user section */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Profile Switcher (for parents to switch between children) - only show for parents */}
              {canSwitchProfiles && <ProfileSwitcher />}

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

              {/* Profile Menu */}
              <ProfileMenu onOpenAuth={() => setAuthModalOpen(true)} />
            </div>
          </div>
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />

      {/* Main Content - Route to appropriate dashboard */}
      <main className="relative z-10 flex-1">
        {isViewingAsParent ? (
          <div className="px-4 sm:px-6 lg:px-8 py-6">
            <ParentDashboard />
          </div>
        ) : (
          <StudentDashboard />
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-4 sm:px-6 lg:px-8 py-4 border-t" style={{ borderColor: theme.colors.border }}>
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm" style={{ color: theme.colors.textMuted }}>
            AI-powered Socratic learning
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
