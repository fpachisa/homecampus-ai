# URL Architecture Implementation Guide for HomeCampus.ai

## Executive Summary

This document provides a complete implementation guide for migrating HomeCampus.ai from a single-URL state-based routing system to a proper URL-based architecture using React Router. This migration will enable deep linking, better SEO, analytics tracking, and improved user experience.

## Table of Contents
1. [Current State Analysis](#current-state-analysis)
2. [Proposed URL Architecture](#proposed-url-architecture)
3. [Implementation Guide](#implementation-guide)
4. [Code Examples](#code-examples)
5. [Configuration Files](#configuration-files)
6. [Testing Strategy](#testing-strategy)
7. [Deployment Checklist](#deployment-checklist)
8. [Migration Timeline](#migration-timeline)

## Current State Analysis

### Existing Architecture
- **Single URL**: Everything runs on `localhost:5173` (dev) or `homecampus.ai` (production)
- **State-based routing**: Navigation handled through React state in `App.tsx`
- **No React Router**: No proper routing library installed
- **Query parameters**: Limited use for test modes (`?test=tts`, `?test=avatar`)
- **Invite handling**: Uses query params for parent/child invites

### Current Navigation Flow
```
AppState {
  selectedCategory: string | null    // e.g., 's3-math-trigonometry'
  selectedTopic: TopicId | null      // specific topic within category
  selectedMode: 'socratic' | 'practice' | null
  practiceState?: {
    selectedDifficulty: PathDifficulty | null
    selectedNodeId: string | null
    showingAchievements: boolean
  }
}
```

### Limitations
1. Cannot share direct links to specific topics or practice sessions
2. Browser back/forward buttons don't work as expected
3. No SEO visibility for content pages
4. Cannot bookmark specific locations
5. Limited analytics tracking capabilities
6. Poor accessibility for screen readers relying on URL context

## Proposed URL Architecture

### URL Structure

```
homecampus.ai/
│
├── Public Routes (No Auth Required)
│   ├── /                           # Landing page
│   ├── /login                      # Login page
│   ├── /signup                     # Registration page
│   ├── /about                      # About page
│   └── /pricing                    # Pricing (if applicable)
│
├── Authenticated Routes
│   ├── /home                       # Dashboard/Topic selection
│   ├── /onboarding                 # New user onboarding wizard
│   │
│   ├── Learning Routes
│   │   ├── /learn                  # Learning mode selector
│   │   ├── /learn/:pathId          # Category view (e.g., /learn/s3-math-trigonometry)
│   │   └── /learn/:pathId/socratic # Socratic learning session
│   │
│   ├── Practice Routes
│   │   ├── /practice               # Practice mode overview
│   │   ├── /practice/:pathId       # Path map view
│   │   └── /practice/:pathId/:nodeId # Active practice session
│   │
│   ├── Profile Routes
│   │   ├── /profile                # Current user profile
│   │   ├── /profile/settings       # User settings
│   │   ├── /profile/achievements   # Achievements page
│   │   └── /u/:username            # Public profile (if enabled)
│   │
│   └── Parent Portal
│       ├── /parent                 # Parent dashboard
│       ├── /parent/children        # Manage children accounts
│       ├── /parent/invite          # Send invites
│       └── /parent/reports/:childId # Child progress reports
│
├── Special Routes
│   ├── /invite                     # Handle invite tokens
│   │   ├── /invite/parent/:token   # Parent invite acceptance
│   │   └── /invite/child/:token    # Child invite acceptance
│   │
│   └── Development Routes (dev environment only)
│       ├── /dev/tts                # TTS testing
│       ├── /dev/avatar             # Avatar testing
│       ├── /dev/visualizers        # Math visualizer testing
│       └── /dev/preview            # Question preview
│
└── Error Routes
    ├── /404                        # Not found
    └── /error                      # Error page
```

### Route Parameter Definitions

| Parameter | Description | Example |
|-----------|-------------|---------|
| `:pathId` | Learning path identifier | `s3-math-trigonometry` |
| `:nodeId` | Practice node identifier | `basic-ratios-intro` |
| `:childId` | Child user ID for reports | `user123` |
| `:username` | Public username | `johndoe` |
| `:token` | Invite token | `abc123xyz` |

## Implementation Guide

### Step 1: Install Dependencies

```bash
npm install react-router-dom
npm install -D @types/react-router-dom  # If using TypeScript
```

### Step 2: Create Route Structure

Create a new file `src/routes/index.tsx`:

```typescript
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Lazy load components for code splitting
const LandingPage = lazy(() => import('../components/LandingPage'));
const HomePage = lazy(() => import('../components/HomePage'));
const LoginPage = lazy(() => import('../components/auth/LoginPage'));
const SignupPage = lazy(() => import('../components/auth/SignupPage'));
const LearnRouter = lazy(() => import('./LearnRouter'));
const PracticeRouter = lazy(() => import('./PracticeRouter'));
const ProfilePage = lazy(() => import('../components/profile/ProfilePage'));
const ParentDashboard = lazy(() => import('../components/parent/ParentDashboard'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
  </div>
);

// Protected route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading) return <PageLoader />;
  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'signup',
        element: <SignupPage />
      },
      {
        path: 'home',
        element: <ProtectedRoute><HomePage /></ProtectedRoute>
      },
      {
        path: 'learn/*',
        element: <ProtectedRoute><LearnRouter /></ProtectedRoute>
      },
      {
        path: 'practice/*',
        element: <ProtectedRoute><PracticeRouter /></ProtectedRoute>
      },
      {
        path: 'profile/*',
        element: <ProtectedRoute><ProfileRouter /></ProtectedRoute>
      },
      {
        path: 'parent/*',
        element: <ProtectedRoute><ParentRouter /></ProtectedRoute>
      },
      {
        path: 'invite/:type/:token',
        element: <InviteHandler />
      },
      {
        path: '*',
        element: <NotFoundPage />
      }
    ]
  }
]);
```

### Step 3: Update App.tsx

Replace the current App.tsx with Router-based implementation:

```typescript
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { ActiveProfileProvider } from './contexts/ActiveProfileContext';

function App() {
  useEffect(() => {
    registerAllVisualizers();
  }, []);

  return (
    <ThemeProvider defaultTheme="dark">
      <AuthProvider>
        <ActiveProfileProvider>
          <RouterProvider router={router} />
        </ActiveProfileProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
```

### Step 4: Create Sub-Routers

#### LearnRouter.tsx
```typescript
import { Routes, Route, useParams } from 'react-router-dom';

export default function LearnRouter() {
  return (
    <Routes>
      <Route index element={<LearnModeSelector />} />
      <Route path=":pathId" element={<PathOverview />} />
      <Route path=":pathId/socratic" element={<SocraticSession />} />
    </Routes>
  );
}

function SocraticSession() {
  const { pathId } = useParams<{ pathId: string }>();
  // Load topic based on pathId
  return <MainLayout topicId={pathId} />;
}
```

#### PracticeRouter.tsx
```typescript
import { Routes, Route, useParams } from 'react-router-dom';

export default function PracticeRouter() {
  return (
    <Routes>
      <Route index element={<PracticeOverview />} />
      <Route path=":pathId" element={<InteractivePathView />} />
      <Route path=":pathId/:nodeId" element={<PracticeSession />} />
    </Routes>
  );
}

function PracticeSession() {
  const { pathId, nodeId } = useParams<{ pathId: string; nodeId: string }>();
  // Load practice session based on pathId and nodeId
  return <PracticeSessionView category={pathId} nodeId={nodeId} />;
}
```

### Step 5: Update Navigation Components

Replace state-based navigation with React Router navigation:

```typescript
// Before (state-based)
const handleTopicSelect = (topicId: string) => {
  setAppState(prev => ({ ...prev, selectedTopic: topicId }));
};

// After (URL-based)
import { useNavigate, Link } from 'react-router-dom';

const navigate = useNavigate();

const handleTopicSelect = (topicId: string) => {
  navigate(`/learn/${topicId}`);
};

// For links
<Link to="/learn/s3-math-trigonometry">
  <TopicCard topic="Trigonometry" />
</Link>
```

### Step 6: Handle URL Parameters

Update components to read from URL instead of state:

```typescript
// Before
const { selectedCategory, selectedTopic } = useAppContext();

// After
import { useParams } from 'react-router-dom';

const { pathId, nodeId } = useParams();
// Use pathId instead of selectedCategory
// Use nodeId for specific practice nodes
```

### Step 7: Implement Route Guards

Create authentication and authorization guards:

```typescript
// src/components/guards/AuthGuard.tsx
export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <LoadingScreen />;

  if (!user) {
    // Redirect to login with return URL
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

// src/components/guards/ParentGuard.tsx
export function ParentGuard({ children }: { children: React.ReactNode }) {
  const { userProfile } = useAuth();

  if (userProfile?.role !== 'parent') {
    return <Navigate to="/home" replace />;
  }

  return <>{children}</>;
}
```

## Code Examples

### Navigation Hook
Create a custom navigation hook for common patterns:

```typescript
// src/hooks/useAppNavigation.ts
import { useNavigate } from 'react-router-dom';

export function useAppNavigation() {
  const navigate = useNavigate();

  return {
    goToHome: () => navigate('/home'),
    goToLearn: (pathId?: string) => {
      navigate(pathId ? `/learn/${pathId}` : '/learn');
    },
    goToPractice: (pathId?: string, nodeId?: string) => {
      if (nodeId) navigate(`/practice/${pathId}/${nodeId}`);
      else if (pathId) navigate(`/practice/${pathId}`);
      else navigate('/practice');
    },
    goToProfile: () => navigate('/profile'),
    goToParentDashboard: () => navigate('/parent'),
    goBack: () => navigate(-1)
  };
}
```

### Breadcrumb Component
```typescript
// src/components/navigation/Breadcrumbs.tsx
import { Link, useLocation } from 'react-router-dom';

export function Breadcrumbs() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const breadcrumbs = pathSegments.map((segment, index) => {
    const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
    const label = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    return { path, label };
  });

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex space-x-2">
        <li><Link to="/">Home</Link></li>
        {breadcrumbs.map(({ path, label }, index) => (
          <li key={path}>
            <span className="mx-2">/</span>
            {index === breadcrumbs.length - 1 ? (
              <span>{label}</span>
            ) : (
              <Link to={path}>{label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
```

### Deep Link Handler
```typescript
// src/utils/deepLinkHandler.ts
export function generateShareableLink(type: 'practice' | 'learn', pathId: string, nodeId?: string) {
  const baseUrl = window.location.origin;

  if (type === 'practice' && nodeId) {
    return `${baseUrl}/practice/${pathId}/${nodeId}`;
  } else if (type === 'learn') {
    return `${baseUrl}/learn/${pathId}/socratic`;
  }

  return `${baseUrl}/${type}/${pathId}`;
}

export function parseDeepLink(url: string) {
  const urlObj = new URL(url);
  const pathSegments = urlObj.pathname.split('/').filter(Boolean);

  return {
    type: pathSegments[0],
    pathId: pathSegments[1],
    nodeId: pathSegments[2],
    params: Object.fromEntries(urlObj.searchParams)
  };
}
```

## Configuration Files

### Vercel Configuration (vercel.json)
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Netlify Configuration (netlify.toml)
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build]
  command = "npm run build"
  publish = "learning-platform/dist"

[build.environment]
  NODE_VERSION = "18"

[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "SAMEORIGIN"
    X-XSS-Protection = "1; mode=block"
```

### Vite Configuration Update (vite.config.ts)
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'firebase': ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          'ai-services': ['@google/generative-ai', '@anthropic-ai/sdk'],
          'math-tools': ['katex', 'marked']
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@services': '/src/services',
      '@hooks': '/src/hooks',
      '@utils': '/src/utils'
    }
  }
});
```

## Testing Strategy

### Unit Tests for Routes
```typescript
// src/routes/__tests__/routing.test.tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Routing', () => {
  test('renders landing page at /', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Welcome to HomeCampus/)).toBeInTheDocument();
  });

  test('renders learn page at /learn', () => {
    render(
      <MemoryRouter initialEntries={['/learn']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Choose a Topic/)).toBeInTheDocument();
  });

  test('redirects to login when not authenticated', () => {
    render(
      <MemoryRouter initialEntries={['/profile']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Login/)).toBeInTheDocument();
  });
});
```

### E2E Navigation Tests
```typescript
// e2e/navigation.spec.ts
describe('Navigation Flow', () => {
  it('should navigate from home to practice session', () => {
    cy.visit('/');
    cy.get('[data-testid="get-started"]').click();
    cy.url().should('include', '/home');

    cy.get('[data-testid="topic-s3-math"]').click();
    cy.url().should('include', '/learn/s3-math-trigonometry');

    cy.get('[data-testid="practice-mode"]').click();
    cy.url().should('include', '/practice/s3-math-trigonometry');

    cy.get('[data-testid="node-basic-ratios"]').click();
    cy.url().should('include', '/practice/s3-math-trigonometry/basic-ratios');
  });

  it('should handle browser back button', () => {
    cy.visit('/practice/s3-math-trigonometry/basic-ratios');
    cy.go('back');
    cy.url().should('include', '/practice/s3-math-trigonometry');
    cy.go('back');
    cy.url().should('include', '/practice');
  });
});
```

## Deployment Checklist

### Pre-Deployment
- [ ] All routes tested locally
- [ ] 404 page implemented
- [ ] Error boundaries in place
- [ ] Loading states for all routes
- [ ] Authentication guards working
- [ ] Browser back/forward navigation tested
- [ ] Deep links tested
- [ ] Meta tags updated for SEO
- [ ] Sitemap.xml generated
- [ ] Robots.txt configured

### Build & Deploy
- [ ] Environment variables configured
- [ ] Build successful with no errors
- [ ] Bundle size optimized (< 500kb initial)
- [ ] Code splitting working
- [ ] Deploy configuration file added (vercel.json/netlify.toml)
- [ ] Preview deployment tested
- [ ] DNS configured for homecampus.ai

### Post-Deployment
- [ ] All routes accessible in production
- [ ] Analytics tracking verified
- [ ] Error monitoring configured
- [ ] Performance monitoring active
- [ ] SEO crawling initiated
- [ ] Share links tested on social media
- [ ] Mobile browser testing completed

## Migration Timeline

### Phase 1: Foundation (Week 1)
- Install React Router
- Set up basic routing structure
- Create route components
- Implement authentication guards
- Test core navigation

### Phase 2: Core Features (Week 2)
- Migrate learning routes
- Migrate practice routes
- Update all navigation handlers
- Implement breadcrumbs
- Add loading states

### Phase 3: Advanced Features (Week 3)
- Add parent portal routes
- Implement profile routes
- Add invite handling
- Create shareable links
- Add analytics tracking

### Phase 4: Polish & Deploy (Week 4)
- Optimize bundle sizes
- Add meta tags and SEO
- Complete testing
- Deploy to staging
- Production deployment

## Rollback Plan

If issues arise after deployment:

1. **Immediate Rollback**
   - Revert to previous deployment
   - Use feature flag to disable routing

2. **Hotfix Approach**
   ```typescript
   // Add temporary fallback
   const USE_NEW_ROUTING = process.env.REACT_APP_USE_NEW_ROUTING === 'true';

   function App() {
     if (!USE_NEW_ROUTING) {
       return <LegacyApp />; // Old state-based routing
     }
     return <RouterProvider router={router} />;
   }
   ```

3. **Gradual Migration**
   - Deploy with both systems
   - A/B test with user groups
   - Monitor metrics
   - Gradually increase traffic to new system

## Support & Troubleshooting

### Common Issues

**Issue**: Routes not working after deployment
**Solution**: Ensure server is configured for client-side routing (see Configuration Files section)

**Issue**: State lost during navigation
**Solution**: Use URL parameters for critical state, Context for session data

**Issue**: SEO not working
**Solution**: Consider Next.js for SSR or implement prerendering for static routes

**Issue**: Deep links not loading correct content
**Solution**: Ensure components fetch data based on URL params, not just props

## Additional Resources

- [React Router Documentation](https://reactrouter.com/en/main)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Web Vitals Best Practices](https://web.dev/vitals/)
- [SEO for SPAs](https://developers.google.com/search/docs/advanced/javascript/javascript-seo-basics)

## Contact for Questions

For implementation questions, refer to:
- This document's examples and code snippets
- The existing codebase patterns in `/src/App.tsx`
- React Router v6 documentation for advanced patterns

---

Document Version: 1.0
Last Updated: 2025-01-24
Author: AI Campus Development Team