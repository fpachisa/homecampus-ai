import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../hooks/useTheme';
import { useActiveProfile } from '../../contexts/ActiveProfileContext';
import { useAppNavigation } from '../../hooks/useAppNavigation';

interface ProfileMenuProps {
  onOpenAuth?: () => void;
}

export const ProfileMenu: React.FC<ProfileMenuProps> = ({ onOpenAuth }) => {
  const navigate = useNavigate();
  const { user, userProfile, logout, loading } = useAuth();
  const { theme } = useTheme();
  const { switchToSelf } = useActiveProfile();
  const { goToHome } = useAppNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    try {
      await logout();
      setIsOpen(false);
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Show loading skeleton while auth initializes
  if (loading) {
    return (
      <div className="w-24 h-10 rounded-lg animate-pulse" style={{ backgroundColor: theme.colors.interactive }} />
    );
  }

  // If not authenticated, show sign in button
  if (!user) {
    return (
      <button
        onClick={onOpenAuth}
        className="px-4 py-2 text-white font-medium rounded-lg transition-all duration-200"
        style={{
          backgroundColor: theme.colors.brand,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '0.9';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '1';
        }}
      >
        Sign In
      </button>
    );
  }

  const displayName = userProfile?.displayName || user.displayName || 'User';
  const isGuest = userProfile?.isGuest || user.isAnonymous;

  return (
    <div className="relative" ref={menuRef}>
      {/* Profile button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors"
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = theme.colors.interactive;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        {/* Avatar */}
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-medium text-sm"
          style={{
            background: `linear-gradient(135deg, ${theme.colors.brand} 0%, ${theme.colors.brandHover} 100%)`,
          }}
        >
          {displayName.charAt(0).toUpperCase()}
        </div>

        {/* Name and guest badge */}
        <div className="hidden sm:block text-left">
          <div className="text-sm font-medium" style={{ color: theme.colors.textPrimary }}>{displayName}</div>
          {isGuest && <div className="text-xs" style={{ color: theme.colors.textMuted }}>Guest</div>}
        </div>

        {/* Dropdown arrow */}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={{ color: theme.colors.textSecondary }}
        >
          <path d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-64 rounded-lg shadow-xl py-2"
          style={{
            backgroundColor: theme.colors.overlay,
            borderColor: theme.colors.border,
            border: `1px solid ${theme.colors.border}`,
            zIndex: 9999,
          }}
        >
          {/* User info */}
          <div className="px-4 py-3" style={{ borderBottom: `1px solid ${theme.colors.border}` }}>
            <div className="font-medium" style={{ color: theme.colors.textPrimary }}>{displayName}</div>
            {user.email && (
              <div className="text-sm mt-1" style={{ color: theme.colors.textMuted }}>{user.email}</div>
            )}
            {isGuest && (
              <div className="mt-2 text-xs text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded inline-block">
                Guest Account
              </div>
            )}
            {userProfile?.gradeLevel && (
              <div className="text-sm mt-1" style={{ color: theme.colors.textMuted }}>{userProfile.gradeLevel}</div>
            )}
          </div>

          {/* Menu items */}
          <div className="py-2">
            {isGuest && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenAuth?.();
                }}
                className="w-full px-4 py-2 text-left text-sm transition-colors flex items-center gap-2"
                style={{ color: theme.colors.brand }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.colors.interactive;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path>
                </svg>
                Create Account to Save Progress
              </button>
            )}

            {userProfile?.isParent && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  switchToSelf(); // Switch to viewing as parent
                  goToHome(); // Navigate back to home page
                }}
                className="w-full px-4 py-2 text-left text-sm transition-colors flex items-center gap-2"
                style={{ color: theme.colors.textSecondary }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = theme.colors.interactive;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                Dashboard
              </button>
            )}

            <button
              onClick={() => {
                setIsOpen(false);
                navigate('/settings');
              }}
              className="w-full px-4 py-2 text-left text-sm transition-colors flex items-center gap-2"
              style={{ color: theme.colors.textSecondary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.interactive;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              Settings
            </button>

            <div className="my-2" style={{ borderTop: `1px solid ${theme.colors.border}` }}></div>

            <button
              onClick={handleSignOut}
              className="w-full px-4 py-2 text-left text-sm transition-colors flex items-center gap-2 text-red-400"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.interactive;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
              </svg>
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
