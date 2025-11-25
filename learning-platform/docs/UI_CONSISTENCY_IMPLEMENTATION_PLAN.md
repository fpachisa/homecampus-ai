# UI/UX Consistency Implementation Plan for AI Campus

**Created**: 2025-11-25
**Status**: IMPLEMENTED
**Goal**: Deliver consistent UI/UX across Learn, Practice, O-Level, Homework Help, and Dashboards

## Implementation Summary

### Completed on 2025-11-25

**New Components Created:**
- `src/components/ui/Logo.tsx` - Reusable theme-aware logo component
- `src/components/ui/NavLink.tsx` - Consistent navigation link styling
- `src/components/layout/AppSidebar.tsx` - Collapsible navigation sidebar
- `src/components/layout/AppTopBar.tsx` - Slim top bar with profile controls
- `src/components/layout/AppFooter.tsx` - Shared footer (full/minimal variants)
- `src/components/layout/AuthenticatedLayout.tsx` - Main layout wrapper

**Files Modified:**
- `src/routes/index.tsx` - Wrapped routes with AuthenticatedLayout
- `src/components/HomePage.tsx` - Simplified to ~25 lines (from ~143)
- `src/components/practice/OLevelTopicSelector.tsx` - Removed duplicate header/footer
- `src/pages/SettingsPage.tsx` - Removed duplicate header/background
- `src/components/homework/HomeworkHelper.tsx` - Removed duplicate layout elements

**Build Status:** Successful (npm run build passes)

---

## User Requirements

1. **Navigation Pattern**: Sidebar + top bar (collapsible left sidebar for modules + slim top bar for profile/settings)
2. **Footer**: Landing & dashboards only (hidden during active learning to maximize focus)
3. **Approach**: Comprehensive full refactor in one pass

---

## Current State Analysis

### Existing Assets (Reuse These)

| Component | Location | Status |
|-----------|----------|--------|
| ThemeToggle | `src/components/ui/ThemeToggle.tsx` | Excellent - use `iconOnly` prop |
| Button | `src/components/ui/Button.tsx` | Good - use variants (primary, secondary, ghost) |
| Card | `src/components/ui/Card.tsx` | Good - use for consistent cards |
| Panel | `src/components/ui/Panel.tsx` | Good - use for sections |
| Avatar | `src/components/ui/Avatar.tsx` | Good - use in profile areas |
| ProfileMenu | `src/components/auth/ProfileMenu.tsx` | Good - use in top bar |
| ProfileSwitcher | `src/components/ProfileSwitcher.tsx` | Good - use in top bar (parents only) |
| MathAntigravity | `src/components/effects/MathAntigravity.tsx` | Good - use in layout background |
| Theme System | `src/styles/themes.ts`, `src/contexts/ThemeContext.tsx`, `src/hooks/useTheme.ts` | Excellent - fully functional |

### Problems to Fix

| Issue | Files Affected |
|-------|----------------|
| Duplicate headers | HomePage.tsx, OLevelTopicSelector.tsx, SettingsPage.tsx, HomeworkHelper.tsx |
| No consistent footer | Most pages have none or minimal |
| No shared layout wrapper | Each page implements full structure |
| Mixed styling (Tailwind + inline) | Throughout codebase |
| Some hardcoded colors | Various components |
| ThemeToggle re-implemented | Multiple files instead of using component |

---

## Phase 1: Create Core UI Components

### 1.1 Create `Logo.tsx`

**File**: `src/components/ui/Logo.tsx`

```typescript
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import logoLight from '/logo.png?url';
import logoDark from '/logo-dark.png?url';

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  showTagline?: boolean;
  animated?: boolean;
  linkToHome?: boolean;
  className?: string;
}

const sizeMap = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10 sm:w-12 sm:h-12',
  lg: 'w-12 h-12 sm:w-14 sm:h-14',
};

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ size = 'md', showText = false, showTagline = false, animated = false, linkToHome = false, className = '' }, ref) => {
    const { isDark, theme } = useTheme();
    const logoSrc = isDark ? logoDark : logoLight;

    const content = (
      <div ref={ref} className={`flex items-center space-x-2 sm:space-x-3 ${className}`}>
        <div className={`${sizeMap[size]} flex items-center justify-center ${animated ? 'animate-float' : ''}`}>
          <img src={logoSrc} alt="Home Campus Logo" className={`${sizeMap[size]} object-contain`} />
        </div>
        {showText && (
          <div>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
              Home Campus
            </h1>
            {showTagline && (
              <p className="text-xs sm:text-sm" style={{ color: theme.colors.textMuted }}>
                AI-Powered Home Learning
              </p>
            )}
          </div>
        )}
      </div>
    );

    if (linkToHome) {
      return <Link to="/home">{content}</Link>;
    }

    return content;
  }
);

Logo.displayName = 'Logo';
```

### 1.2 Create `NavLink.tsx`

**File**: `src/components/ui/NavLink.tsx`

```typescript
import { forwardRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

export interface NavLinkProps {
  to: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant?: 'sidebar' | 'topbar' | 'footer';
  collapsed?: boolean; // For sidebar icon-only mode
  className?: string;
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ to, icon, children, variant = 'sidebar', collapsed = false, className = '' }, ref) => {
    const { theme } = useTheme();
    const location = useLocation();
    const isActive = location.pathname === to || location.pathname.startsWith(`${to}/`);

    const baseStyles = {
      display: 'flex',
      alignItems: 'center',
      gap: collapsed ? '0' : '0.75rem',
      padding: variant === 'sidebar' ? '0.75rem 1rem' : '0.5rem 0.75rem',
      borderRadius: theme.radius.md,
      transition: 'all 0.2s ease',
      color: isActive ? theme.colors.brand : theme.colors.textSecondary,
      backgroundColor: isActive ? `${theme.colors.brand}15` : 'transparent',
      fontWeight: isActive ? '600' : '500',
      justifyContent: collapsed ? 'center' : 'flex-start',
    };

    const hoverStyles = {
      backgroundColor: isActive ? `${theme.colors.brand}20` : theme.colors.interactive,
      color: isActive ? theme.colors.brand : theme.colors.textPrimary,
    };

    return (
      <Link
        ref={ref}
        to={to}
        className={`group ${className}`}
        style={baseStyles}
        onMouseEnter={(e) => {
          Object.assign(e.currentTarget.style, hoverStyles);
        }}
        onMouseLeave={(e) => {
          Object.assign(e.currentTarget.style, baseStyles);
        }}
        title={collapsed ? String(children) : undefined}
      >
        {icon && <span className="w-5 h-5 flex-shrink-0">{icon}</span>}
        {!collapsed && <span>{children}</span>}
      </Link>
    );
  }
);

NavLink.displayName = 'NavLink';
```

---

## Phase 2: Create Layout Components

### 2.1 Create `AppSidebar.tsx`

**File**: `src/components/layout/AppSidebar.tsx`

```typescript
import { forwardRef } from 'react';
import { useTheme } from '../../hooks/useTheme';
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
  ChevronRight
} from 'lucide-react';

export interface AppSidebarProps {
  isOpen: boolean;
  collapsed: boolean;
  onToggleCollapse: () => void;
  onClose?: () => void; // For mobile drawer
  className?: string;
}

const navItems = [
  { to: '/home', icon: Home, label: 'Dashboard' },
  { to: '/learn', icon: GraduationCap, label: 'Learn' },
  { to: '/practice', icon: Target, label: 'Practice' },
  { to: '/practice/olevel', icon: Award, label: 'O-Level' },
  { to: '/homework-helper', icon: FileText, label: 'Homework' },
  { to: '/stats', icon: BarChart3, label: 'Stats' },
];

export const AppSidebar = forwardRef<HTMLElement, AppSidebarProps>(
  ({ isOpen, collapsed, onToggleCollapse, onClose, className = '' }, ref) => {
    const { theme } = useTheme();

    if (!isOpen) return null;

    return (
      <aside
        ref={ref}
        className={`fixed lg:relative z-40 h-full flex flex-col transition-all duration-300 ${
          collapsed ? 'w-16' : 'w-64'
        } ${className}`}
        style={{
          backgroundColor: theme.colors.sidebar,
          borderRight: `1px solid ${theme.colors.border}`,
        }}
      >
        {/* Logo */}
        <div className={`p-4 border-b flex items-center ${collapsed ? 'justify-center' : 'justify-between'}`}
             style={{ borderColor: theme.colors.border }}>
          <Logo size="sm" showText={!collapsed} linkToHome animated />

          {/* Collapse toggle (desktop only) */}
          <button
            onClick={onToggleCollapse}
            className="hidden lg:flex p-1.5 rounded-lg transition-colors"
            style={{
              backgroundColor: theme.colors.interactive,
              color: theme.colors.textSecondary
            }}
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              icon={<item.icon size={20} />}
              collapsed={collapsed}
              variant="sidebar"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile close button */}
        <div className="lg:hidden p-4 border-t" style={{ borderColor: theme.colors.border }}>
          <button
            onClick={onClose}
            className="w-full py-2 rounded-lg text-sm font-medium"
            style={{
              backgroundColor: theme.colors.interactive,
              color: theme.colors.textSecondary
            }}
          >
            Close Menu
          </button>
        </div>
      </aside>
    );
  }
);

AppSidebar.displayName = 'AppSidebar';
```

### 2.2 Create `AppTopBar.tsx`

**File**: `src/components/layout/AppTopBar.tsx`

```typescript
import { forwardRef } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { ThemeToggle } from '../ui/ThemeToggle';
import { ProfileMenu } from '../auth/ProfileMenu';
import { ProfileSwitcher } from '../ProfileSwitcher';
import { useActiveProfile } from '../../contexts/ActiveProfileContext';
import { Menu } from 'lucide-react';

export interface AppTopBarProps {
  pageTitle?: string;
  onMenuClick: () => void;
  showMenuButton?: boolean;
  className?: string;
}

export const AppTopBar = forwardRef<HTMLElement, AppTopBarProps>(
  ({ pageTitle, onMenuClick, showMenuButton = true, className = '' }, ref) => {
    const { theme } = useTheme();
    const { canSwitchProfiles } = useActiveProfile();

    return (
      <header
        ref={ref}
        className={`sticky top-0 z-50 px-4 py-3 border-b ${className}`}
        style={{
          backgroundColor: theme.colors.primary,
          borderColor: theme.colors.border,
        }}
      >
        <div className="flex items-center justify-between">
          {/* Left: Menu button + Page title */}
          <div className="flex items-center space-x-3">
            {showMenuButton && (
              <button
                onClick={onMenuClick}
                className="lg:hidden p-2 rounded-lg transition-colors"
                style={{
                  backgroundColor: theme.colors.interactive,
                  color: theme.colors.textSecondary,
                }}
              >
                <Menu size={20} />
              </button>
            )}
            {pageTitle && (
              <h1 className="text-lg font-semibold" style={{ color: theme.colors.textPrimary }}>
                {pageTitle}
              </h1>
            )}
          </div>

          {/* Right: Profile controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {canSwitchProfiles && <ProfileSwitcher />}
            <ThemeToggle iconOnly variant="ghost" />
            <ProfileMenu />
          </div>
        </div>
      </header>
    );
  }
);

AppTopBar.displayName = 'AppTopBar';
```

### 2.3 Create `AppFooter.tsx`

**File**: `src/components/layout/AppFooter.tsx`

```typescript
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import { Logo } from '../ui/Logo';

export interface AppFooterProps {
  variant?: 'full' | 'minimal';
  className?: string;
}

export const AppFooter = forwardRef<HTMLElement, AppFooterProps>(
  ({ variant = 'minimal', className = '' }, ref) => {
    const { theme } = useTheme();

    if (variant === 'minimal') {
      return (
        <footer
          ref={ref}
          className={`px-4 sm:px-6 lg:px-8 py-4 border-t ${className}`}
          style={{ borderColor: theme.colors.border }}
        >
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm" style={{ color: theme.colors.textMuted }}>
              AI-powered Socratic learning
            </p>
          </div>
        </footer>
      );
    }

    // Full footer
    return (
      <footer
        ref={ref}
        className={`px-4 sm:px-6 lg:px-8 py-12 border-t ${className}`}
        style={{
          borderColor: theme.colors.border,
          backgroundColor: theme.colors.secondary
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: Logo & Tagline */}
            <div>
              <Logo size="md" showText showTagline />
              <p className="mt-4 text-sm" style={{ color: theme.colors.textMuted }}>
                Empowering students with AI-driven personalized learning experiences.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="font-semibold mb-4" style={{ color: theme.colors.textPrimary }}>
                Quick Links
              </h3>
              <ul className="space-y-2">
                {['Features', 'How It Works', 'Testimonials', 'Get Started'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm hover:underline"
                      style={{ color: theme.colors.textSecondary }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              <h3 className="font-semibold mb-4" style={{ color: theme.colors.textPrimary }}>
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="text-sm hover:underline" style={{ color: theme.colors.textSecondary }}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm hover:underline" style={{ color: theme.colors.textSecondary }}>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a href="mailto:support@homecampus.ai" className="text-sm hover:underline" style={{ color: theme.colors.textSecondary }}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t text-center" style={{ borderColor: theme.colors.border }}>
            <p className="text-sm" style={{ color: theme.colors.textMuted }}>
              &copy; {new Date().getFullYear()} Home Campus. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
);

AppFooter.displayName = 'AppFooter';
```

### 2.4 Create `AuthenticatedLayout.tsx`

**File**: `src/components/layout/AuthenticatedLayout.tsx`

```typescript
import { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { AppSidebar } from './AppSidebar';
import { AppTopBar } from './AppTopBar';
import { AppFooter } from './AppFooter';
import MathAntigravity from '../effects/MathAntigravity';

export interface AuthenticatedLayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  showFooter?: boolean;
  footerVariant?: 'full' | 'minimal';
  showSidebar?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '7xl' | 'full';
}

const maxWidthClasses = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-5xl',
  xl: 'max-w-6xl',
  '7xl': 'max-w-7xl',
  full: 'max-w-full',
};

export const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({
  children,
  pageTitle,
  showFooter = false,
  footerVariant = 'minimal',
  showSidebar = true,
  maxWidth = '7xl',
}) => {
  const { theme } = useTheme();
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

  return (
    <div className="min-h-screen flex" style={{ background: theme.gradients.panel }}>
      {/* Background effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <MathAntigravity />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(88, 101, 242, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(71, 82, 196, 0.05) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      {showSidebar && (
        <AppSidebar
          isOpen={sidebarOpen}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          onClose={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-screen relative z-10">
        {/* Top bar */}
        <AppTopBar
          pageTitle={pageTitle}
          onMenuClick={toggleSidebar}
          showMenuButton={showSidebar}
        />

        {/* Page content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6">
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
```

---

## Phase 3: Update Routes

### 3.1 Update `routes/index.tsx`

Add imports at top:
```typescript
import { AuthenticatedLayout } from '../components/layout/AuthenticatedLayout';
```

Update route definitions to use AuthenticatedLayout:

```typescript
// Dashboard with footer
{
  path: '/home',
  element: (
    <RootLayout>
      <ProtectedRoute>
        <AuthenticatedLayout pageTitle="Dashboard" showFooter={true} footerVariant="minimal">
          <HomePage />
        </AuthenticatedLayout>
      </ProtectedRoute>
    </RootLayout>
  ),
},

// Settings without footer
{
  path: '/settings',
  element: (
    <RootLayout>
      <ProtectedRoute>
        <AuthenticatedLayout pageTitle="Settings" showFooter={false}>
          <SettingsPage />
        </AuthenticatedLayout>
      </ProtectedRoute>
    </RootLayout>
  ),
},

// Stats with footer
{
  path: '/stats',
  element: (
    <RootLayout>
      <ProtectedRoute>
        <AuthenticatedLayout pageTitle="Statistics" showFooter={true} footerVariant="minimal">
          <StudentStatsDashboard />
        </AuthenticatedLayout>
      </ProtectedRoute>
    </RootLayout>
  ),
},

// Homework helper without footer
{
  path: '/homework-helper',
  element: (
    <RootLayout>
      <ProtectedRoute>
        <AuthenticatedLayout pageTitle="Homework Helper" showFooter={false}>
          <HomeworkHelperPage />
        </AuthenticatedLayout>
      </ProtectedRoute>
    </RootLayout>
  ),
},

// Learn - hide sidebar during learning (uses own 3-panel layout)
{
  path: '/learn/*',
  element: (
    <RootLayout>
      <ProtectedRoute>
        <AuthenticatedLayout showSidebar={false} showFooter={false}>
          <LearnRouter />
        </AuthenticatedLayout>
      </ProtectedRoute>
    </RootLayout>
  ),
},

// Practice routes
{
  path: '/practice/*',
  element: (
    <RootLayout>
      <ProtectedRoute>
        <AuthenticatedLayout showFooter={false}>
          <PracticeRouter />
        </AuthenticatedLayout>
      </ProtectedRoute>
    </RootLayout>
  ),
},
```

---

## Phase 4: Refactor Pages

### 4.1 Simplify `HomePage.tsx`

**Before**: ~143 lines with header, footer, background
**After**: ~20 lines

```typescript
import { useActiveProfile } from '../contexts/ActiveProfileContext';
import { ParentDashboard } from './parent/ParentDashboard';
import { StudentDashboard } from './dashboard/StudentDashboard';

const HomePage: React.FC = () => {
  const { isViewingAsParent } = useActiveProfile();

  return (
    <>
      {isViewingAsParent ? <ParentDashboard /> : <StudentDashboard />}
    </>
  );
};

export default HomePage;
```

**Lines to remove**:
- Lines 11-21: Logo imports, theme imports
- Lines 23-30: Theme context usage, logo src calculation
- Lines 32-51: Outer div wrapper and background texture
- Lines 53-111: Header section
- Lines 113-118: AuthModal (if not needed)
- Lines 131-137: Footer section

### 4.2 Simplify `OLevelTopicSelector.tsx`

Remove:
- Logo imports (lines ~9-11)
- Theme toggle logic (lines ~50-57)
- Background texture div (lines ~117-124)
- Header section (lines ~126-186)
- Footer section (lines ~311-317)
- AuthModal component

Keep:
- Topic categories data
- Loading state handling
- Topic grid rendering logic
- Selection/navigation logic

### 4.3 Simplify `SettingsPage.tsx`

Remove:
- Background texture div (lines ~109-117)
- Header with back button (lines ~119-151)

Keep:
- Settings form content
- All settings logic

### 4.4 Simplify `HomeworkHelper.tsx`

Remove:
- Background texture div (lines ~368-376)
- Header implementation (lines ~378-440)

Keep:
- Upload zone
- Problem preview
- Session logic
- All homework helper functionality

---

## Phase 5: Color Standardization

### Files to Check

Search for these patterns and replace with theme values:

```bash
# Hardcoded colors to find
grep -r "'#ffffff'" src/
grep -r "\"#ffffff\"" src/
grep -r "bg-gray-900" src/
grep -r "rgba(88, 101, 242" src/
```

### Replacements

| Find | Replace With |
|------|--------------|
| `'#ffffff'` in hover states | Keep (intentional white on brand bg) |
| `bg-gray-900` in PageLoader | Use `theme.colors.primary` or CSS variable |
| `rgba(88, 101, 242, 0.05)` | `${theme.colors.brand}0d` (hex with alpha) |

---

## Implementation Checklist

### Phase 1: UI Components
- [ ] Create `src/components/ui/Logo.tsx`
- [ ] Create `src/components/ui/NavLink.tsx`
- [ ] Test Logo renders correctly in dark/light mode
- [ ] Test NavLink active states work

### Phase 2: Layout Components
- [ ] Create `src/components/layout/AppSidebar.tsx`
- [ ] Create `src/components/layout/AppTopBar.tsx`
- [ ] Create `src/components/layout/AppFooter.tsx`
- [ ] Create `src/components/layout/AuthenticatedLayout.tsx`
- [ ] Test sidebar collapse/expand on desktop
- [ ] Test sidebar drawer on mobile
- [ ] Test theme toggle in top bar
- [ ] Test profile menu in top bar

### Phase 3: Route Updates
- [ ] Update `src/routes/index.tsx` with new layouts
- [ ] Verify all routes render without errors
- [ ] Test navigation between routes

### Phase 4: Page Refactoring
- [ ] Refactor `src/components/HomePage.tsx`
- [ ] Refactor `src/components/practice/OLevelTopicSelector.tsx`
- [ ] Refactor `src/pages/SettingsPage.tsx`
- [ ] Refactor `src/components/homework/HomeworkHelper.tsx`
- [ ] Refactor `src/components/dashboard/stats/StudentStatsDashboard.tsx`
- [ ] Test each page after refactoring

### Phase 5: Finalization
- [ ] Run color standardization pass
- [ ] Test dark mode on all pages
- [ ] Test light mode on all pages
- [ ] Test mobile responsiveness
- [ ] Test iOS safe areas (if applicable)
- [ ] Run `npm run build` to check for errors
- [ ] Run `npm run lint` to check for issues

---

## Testing Checklist

- [ ] All pages render without console errors
- [ ] Theme toggle works on every page
- [ ] Dark mode colors are correct
- [ ] Light mode colors are correct
- [ ] Sidebar navigation works
- [ ] Sidebar collapse/expand works on desktop
- [ ] Mobile menu opens and closes
- [ ] Mobile menu links navigate and close menu
- [ ] Profile menu shows correct user info
- [ ] Profile menu actions work (settings, sign out)
- [ ] Profile switcher appears for parents only
- [ ] Footer appears only on dashboard pages
- [ ] Footer hidden during learning/practice
- [ ] Pages scroll correctly with sticky top bar
- [ ] Learn module's 3-panel layout still works
- [ ] Practice path view still works

---

## Files Reference

### New Files to Create
1. `src/components/ui/Logo.tsx`
2. `src/components/ui/NavLink.tsx`
3. `src/components/layout/AppSidebar.tsx`
4. `src/components/layout/AppTopBar.tsx`
5. `src/components/layout/AppFooter.tsx`
6. `src/components/layout/AuthenticatedLayout.tsx`

### Files to Modify
1. `src/routes/index.tsx` - Wrap routes with AuthenticatedLayout
2. `src/components/HomePage.tsx` - Remove header/footer (~120 lines)
3. `src/components/practice/OLevelTopicSelector.tsx` - Remove header/footer (~100 lines)
4. `src/pages/SettingsPage.tsx` - Remove header (~50 lines)
5. `src/components/homework/HomeworkHelper.tsx` - Remove header (~80 lines)
6. `src/components/dashboard/stats/StudentStatsDashboard.tsx` - Remove any duplicate header

### Existing Files to Reuse (No Changes Needed)
- `src/components/ui/ThemeToggle.tsx` - Use as-is
- `src/components/ui/Button.tsx` - Use as-is
- `src/components/auth/ProfileMenu.tsx` - Use as-is
- `src/components/ProfileSwitcher.tsx` - Use as-is
- `src/styles/themes.ts` - Use as-is
- `src/contexts/ThemeContext.tsx` - Use as-is
- `src/hooks/useTheme.ts` - Use as-is
