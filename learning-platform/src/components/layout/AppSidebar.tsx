import { forwardRef, useMemo } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useThemeContext } from '../../contexts/ThemeContext';
import { ProfileSwitcher } from '../ProfileSwitcher';
import { Logo } from '../ui/Logo';
import { NavLink } from '../ui/NavLink';
import {
  Home,
  GraduationCap,
  Target,
  Award,
  FileText,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  X,
  Settings,
  CreditCard,
  Sun,
  Moon,
  LogOut,
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useActiveProfile } from '../../contexts/ActiveProfileContext';

export interface AppSidebarProps {
  isOpen: boolean;
  collapsed: boolean;
  onToggleCollapse: () => void;
  onClose?: () => void;
  isMobile?: boolean;
  className?: string;
}

export const AppSidebar = forwardRef<HTMLElement, AppSidebarProps>(
  ({ isOpen, collapsed, onToggleCollapse, onClose, isMobile = false, className = '' }, ref) => {
    const { theme } = useTheme();
    const { toggleTheme, isDark } = useThemeContext();
    const { userProfile, logout, user } = useAuth();
    const { activeProfile } = useActiveProfile();
    const isParent = userProfile?.accountType === 'parent';

    // Get effective grade level (active profile or user profile)
    const effectiveGrade = activeProfile?.gradeLevel || userProfile?.gradeLevel;
    const isSecondary4 = effectiveGrade === 'Secondary 4';

    // Build nav items dynamically - O-Level only shows for Secondary 4
    const navItems = useMemo(() => {
      const items = [
        { to: '/home', icon: Home, label: 'Dashboard' },
        { to: '/learn', icon: GraduationCap, label: 'Learn' },
        { to: '/practice', icon: Target, label: 'Practice', exact: true },
      ];

      // Only add O-Level for Secondary 4 students
      if (isSecondary4) {
        items.push({ to: '/practice/olevel', icon: Award, label: 'O-Level' });
      }

      items.push(
        { to: '/homework-helper', icon: FileText, label: 'Homework' },
        { to: '/stats', icon: BarChart3, label: 'Stats' },
      );

      return items;
    }, [isSecondary4]);

    if (!isOpen) return null;

    const isCollapsed = collapsed && !isMobile;

    return (
      <aside
        ref={ref}
        className={`fixed top-0 left-0 h-screen flex flex-col transition-all duration-300 z-50 ${isCollapsed ? 'w-16' : 'w-64'
          } ${className}`}
        style={{
          background: theme.glass.background,
          borderRight: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop,
          boxShadow: theme.shadows.lg,
        }}
      >
        {/* Header with Logo */}
        <div
          className={`p-4 flex items-center border-b ${isCollapsed ? 'justify-center' : 'justify-between'
            }`}
          style={{ borderColor: theme.colors.border }}
        >
          {isCollapsed ? (
            <Logo size="sm" linkToHome />
          ) : (
            <Logo size="sm" showText linkToHome />
          )}

          {/* Desktop collapse toggle */}
          {!isMobile && !isCollapsed && (
            <button
              onClick={onToggleCollapse}
              className="p-1.5 rounded-lg transition-colors"
              style={{
                backgroundColor: theme.colors.interactive,
                color: theme.colors.textSecondary,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.interactiveHover;
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.interactive;
                e.currentTarget.style.color = theme.colors.textSecondary;
              }}
              title="Collapse sidebar"
            >
              <ChevronLeft size={16} />
            </button>
          )}

          {/* Mobile close button */}
          {isMobile && onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg transition-colors"
              style={{
                backgroundColor: theme.colors.interactive,
                color: theme.colors.textSecondary,
              }}
              title="Close menu"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Expand button when collapsed */}
        {isCollapsed && !isMobile && (
          <div className="p-2">
            <button
              onClick={onToggleCollapse}
              className="w-full p-2 rounded-lg transition-colors flex justify-center"
              style={{
                backgroundColor: theme.colors.interactive,
                color: theme.colors.textSecondary,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.interactiveHover;
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.interactive;
                e.currentTarget.style.color = theme.colors.textSecondary;
              }}
              title="Expand sidebar"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}

        {/* Navigation Links */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              icon={<item.icon size={20} />}
              collapsed={isCollapsed}
              variant="sidebar"
              onClick={isMobile ? onClose : undefined}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Bottom section: Settings + Theme toggle */}
        <div
          className="border-t p-3 space-y-2"
          style={{ borderColor: theme.colors.border }}
        >
          {/* Profile Switcher (visible when expanded) */}
          {!isCollapsed && (
            <div className="mb-2">
              <ProfileSwitcher direction="up" />
            </div>
          )}

          {/* Settings link */}
          <NavLink
            to="/settings"
            icon={<Settings size={20} />}
            collapsed={isCollapsed}
            variant="sidebar"
            onClick={isMobile ? onClose : undefined}
          >
            Settings
          </NavLink>

          {/* Billing link (parent only) */}
          {isParent && (
            <NavLink
              to="/billing"
              icon={<CreditCard size={20} />}
              collapsed={isCollapsed}
              variant="sidebar"
              onClick={isMobile ? onClose : undefined}
            >
              Billing
            </NavLink>
          )}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${isCollapsed ? 'justify-center' : ''
              }`}
            style={{
              backgroundColor: 'transparent',
              color: theme.colors.textSecondary,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.interactive;
              e.currentTarget.style.color = theme.colors.textPrimary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = theme.colors.textSecondary;
            }}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
            {!isCollapsed && <span className="text-sm font-medium">{isDark ? 'Light Mode' : 'Dark Mode'}</span>}
          </button>

          {/* Sign Out button (only show when logged in) */}
          {user && (
            <button
              onClick={async () => {
                try {
                  await logout();
                  if (isMobile && onClose) onClose();
                } catch (error) {
                  console.error('Error signing out:', error);
                }
              }}
              className={`flex items-center gap-3 w-full p-3 rounded-lg transition-colors ${isCollapsed ? 'justify-center' : ''
                }`}
              style={{
                backgroundColor: 'transparent',
                color: '#f87171', // red-400
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.interactive;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              title="Sign out"
            >
              <LogOut size={20} />
              {!isCollapsed && <span className="text-sm font-medium">Sign Out</span>}
            </button>
          )}
        </div>
      </aside>
    );
  }
);

AppSidebar.displayName = 'AppSidebar';
