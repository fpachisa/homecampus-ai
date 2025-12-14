import { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { AppSidebar } from './AppSidebar';
import { AppFooter } from './AppFooter';
import MathAntigravity from '../effects/MathAntigravity';
import { Menu } from 'lucide-react';

export interface AuthenticatedLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  showFooter?: boolean;
  footerVariant?: 'full' | 'minimal';
  showSidebar?: boolean;
  showBackground?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '7xl' | 'full';
}

const maxWidthClasses: Record<string, string> = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-5xl',
  xl: 'max-w-6xl',
  '7xl': 'max-w-7xl',
  full: 'max-w-full',
};

export const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({
  children,
  showFooter = false,
  footerVariant = 'minimal',
  showSidebar = true,
  showBackground = true,
  maxWidth = '7xl',
}) => {
  const { theme, isDark } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setSidebarOpen(!sidebarOpen);
    } else {
      setSidebarCollapsed(!sidebarCollapsed);
    }
  };

  const closeSidebar = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  // Calculate sidebar width for margin offset
  const sidebarWidth = showSidebar && !isMobile ? (sidebarCollapsed ? '4rem' : '16rem') : '0';

  const backgroundOverlayOpacity = isDark ? 0.4 : 0.6;
  const backgroundOverlay = isDark
    ? 'radial-gradient(circle at 25% 15%, rgba(217, 119, 87, 0.12) 0%, transparent 52%), radial-gradient(circle at 75% 85%, rgba(217, 119, 87, 0.08) 0%, transparent 55%)'
    : 'radial-gradient(circle at 22% 10%, rgba(217, 119, 87, 0.22) 0%, transparent 55%), radial-gradient(circle at 82% 90%, rgba(217, 119, 87, 0.16) 0%, transparent 60%), radial-gradient(circle at 80% 12%, rgba(88, 101, 242, 0.16) 0%, transparent 52%), radial-gradient(circle at 14% 78%, rgba(88, 101, 242, 0.10) 0%, transparent 58%)';

  return (
    <div
      className="min-h-screen"
      style={{ background: theme.gradients.panel }}
    >
      {/* Background effect */}
      {showBackground && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          <MathAntigravity />
          <div
            className="absolute inset-0"
            style={{
              opacity: backgroundOverlayOpacity,
              backgroundImage: backgroundOverlay,
            }}
          />
        </div>
      )}

      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 transition-opacity"
          onClick={closeSidebar}
        />
      )}

      {/* Fixed Sidebar */}
      {showSidebar && (
        <AppSidebar
          isOpen={sidebarOpen}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          onClose={closeSidebar}
          isMobile={isMobile}
        />
      )}

      {/* Main content wrapper - offset by sidebar width on desktop */}
      <div
        className="min-h-screen flex flex-col transition-all duration-300"
        style={{
          marginLeft: sidebarWidth,
        }}
      >
        {/* Mobile menu button - only shown on mobile when sidebar is hidden */}
        {showSidebar && isMobile && !sidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="fixed top-4 left-4 z-30 p-2 rounded-lg transition-colors"
            style={{
              backgroundColor: theme.colors.interactive,
              color: theme.colors.textSecondary,
              boxShadow: theme.shadows.md,
            }}
            title="Open menu"
          >
            <Menu size={24} />
          </button>
        )}

        {/* Page content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 relative z-10">
          <div className={`mx-auto ${maxWidthClasses[maxWidth]}`}>
            {children}
          </div>
        </main>

        {/* Footer */}
        {showFooter && <AppFooter variant={footerVariant} />}
      </div>
    </div>
  );
};
