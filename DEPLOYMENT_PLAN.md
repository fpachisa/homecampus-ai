# Production Deployment Plan - homecampus.ai
**Version:** 2.0.0
**Status:** Pre-Production Review
**Last Updated:** October 25, 2024
**Target Go-Live:** TBD (Post TypeScript Resolution)

---

## Executive Summary

This document outlines the production deployment strategy for **Home Campus AI** (homecampus.ai), a K-12 AI-powered tutoring platform. The deployment leverages Google Cloud Platform with Firebase Hosting, implements secure CI/CD via GitHub Actions, and follows industry best practices for scalability, security, and cost optimization.

**Critical Path:** TypeScript compilation errors (54 errors) must be resolved before any deployment activities can begin.

---

## Table of Contents
1. [Current State Assessment](#current-state-assessment)
2. [Pre-Flight Requirements](#pre-flight-requirements)
3. [Infrastructure Setup](#infrastructure-setup)
4. [Security Hardening](#security-hardening)
5. [CI/CD Pipeline](#cicd-pipeline)
6. [Production Deployment](#production-deployment)
7. [Post-Deployment Operations](#post-deployment-operations)
8. [Monitoring & Observability](#monitoring--observability)
9. [Cost Management](#cost-management)
10. [Incident Response](#incident-response)
11. [Rollback Procedures](#rollback-procedures)
12. [Success Metrics & SLAs](#success-metrics--slas)

---

## Current State Assessment

### Technology Stack
| Component | Technology | Version | Status |
|-----------|-----------|---------|--------|
| Frontend Framework | React + TypeScript | 19.1.1 | ✅ Ready |
| Build Tool | Vite | 7.1.7 | ⚠️ Needs optimization |
| Styling | Tailwind CSS | 4.1.13 | ✅ Ready |
| Package Manager | npm | - | ✅ Ready |
| AI Primary | Google Gemini | 2.5 Flash | ✅ Ready |
| AI Fallback | Claude | Sonnet | ✅ Ready |
| TTS Primary | Gemini TTS | - | ✅ Ready |
| TTS Fallback | Google Cloud TTS | - | ✅ Ready |
| Authentication | Firebase Auth | 12.3.0 | ⚠️ Needs config |
| Database | Firestore | 12.3.0 | ⚠️ Needs config |
| Hosting | - | - | 🔴 Not configured |

### Project Structure
```
aicampus/
├── learning-platform/          # Main React application
│   ├── src/                   # Source code
│   ├── public/                # Static assets (minimal)
│   ├── package.json           # Dependencies
│   └── vite.config.ts         # Build config (basic)
├── curriculum-content/         # YAML curriculum files
└── logo.png                   # Brand asset (1024x1024)
```

### Blockers & Issues

#### 🔴 CRITICAL - TypeScript Compilation Errors (54 errors)
**Files Affected:**
- `src/components/TrigonometryTopicView.tsx` (1 error)
- `src/components/CircleGeometryTopicView.tsx` (1 error)
- `src/components/QuadraticEquationsTopicView.tsx` (1 error)
- `src/notes/s3/math/relations-functions/*.tsx` (51 errors)

**Error Types:**
1. **Unterminated string literals** (3 occurrences)
   - Likely multi-line strings without proper template literal syntax
2. **JSX syntax errors** (51 occurrences)
   - Unescaped `>` characters in JSX (should be `{'>'}` or `&gt;`)
   - Invalid characters in JSX expressions

**Impact:** Build completely blocked. No deployment possible until resolved.

#### ⚠️ HIGH PRIORITY - Missing Infrastructure
- No Firebase project created
- No `firebase.json` configuration
- No `firestore.rules` security rules
- No `.firebaserc` project mapping
- No GitHub Actions workflows
- No production environment variables

#### ⚠️ MEDIUM PRIORITY - Build Optimization
- Vite config has no bundle splitting
- No performance budgets configured
- No PWA manifest or service worker
- Missing favicon and app icons

---

## Pre-Flight Requirements

### Phase 0: Immediate Blockers (MUST COMPLETE FIRST)

#### Step 0.1: Fix TypeScript Compilation Errors
**Priority:** CRITICAL 🔴
**Estimated Time:** 2-4 hours
**Owner:** Development Team

**Action Items:**
1. **Fix unterminated string literals** (3 files)
   ```typescript
   // WRONG:
   const text = "This is a multi-line
   string that breaks";

   // CORRECT:
   const text = `This is a multi-line
   string that works`;
   ```

2. **Fix JSX > character escaping** (51 occurrences)
   ```tsx
   // WRONG:
   <div>x > 5</div>

   // CORRECT:
   <div>x &gt; 5</div>
   // OR:
   <div>x {`>`} 5</div>
   ```

3. **Verify fix:**
   ```bash
   cd learning-platform
   npm run build
   # Should complete with 0 errors
   ```

4. **Run tests:**
   ```bash
   npm run test:run
   # All tests should pass
   ```

**Exit Criteria:**
- ✅ `npm run build` completes successfully
- ✅ `npm run test:run` passes with 0 failures
- ✅ No TypeScript errors in output

---

#### Step 0.2: Generate Required Assets
**Priority:** HIGH ⚠️
**Estimated Time:** 30 minutes
**Tools Needed:** ImageMagick or online tool (realfavicongenerator.net)

**Action Items:**
1. **Generate favicons from logo.png:**
   ```bash
   # Using ImageMagick (install with: brew install imagemagick)
   cd learning-platform/public

   # Generate favicon.ico (multi-size ICO)
   convert ../../logo.png -define icon:auto-resize=16,32,48,64,256 favicon.ico

   # Generate PWA icons
   convert ../../logo.png -resize 192x192 icon-192.png
   convert ../../logo.png -resize 512x512 icon-512.png

   # Generate Apple touch icon
   convert ../../logo.png -resize 180x180 apple-touch-icon.png
   ```

2. **Alternative: Use online generator**
   - Upload `logo.png` to https://realfavicongenerator.net
   - Download generated package
   - Extract to `learning-platform/public/`

**Exit Criteria:**
- ✅ `favicon.ico` exists in `public/`
- ✅ `icon-192.png` and `icon-512.png` exist
- ✅ `apple-touch-icon.png` exists

---

#### Step 0.3: Update Application Metadata
**Priority:** MEDIUM
**Estimated Time:** 15 minutes

**Files to Update:**

**1. `learning-platform/index.html`:**
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
    <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />

    <!-- Viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Primary Meta Tags -->
    <title>Home Campus - AI-Powered K-12 Learning Platform</title>
    <meta name="title" content="Home Campus - AI-Powered K-12 Learning Platform" />
    <meta name="description" content="Interactive AI tutor for K-12 mathematics using Socratic teaching methods. Personalized learning paths, real-time feedback, and adaptive problem generation." />
    <meta name="keywords" content="AI tutor, K-12 education, mathematics learning, Socratic method, personalized learning, online tutoring" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://homecampus.ai/" />
    <meta property="og:title" content="Home Campus - AI-Powered K-12 Learning" />
    <meta property="og:description" content="Interactive AI tutor for K-12 mathematics using Socratic teaching methods." />
    <meta property="og:image" content="https://homecampus.ai/icon-512.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://homecampus.ai/" />
    <meta property="twitter:title" content="Home Campus - AI-Powered K-12 Learning" />
    <meta property="twitter:description" content="Interactive AI tutor for K-12 mathematics using Socratic teaching methods." />
    <meta property="twitter:image" content="https://homecampus.ai/icon-512.png" />

    <!-- Theme Color -->
    <meta name="theme-color" content="#4F46E5" />

    <!-- Web App Manifest -->
    <link rel="manifest" href="/manifest.json" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

**2. Create `learning-platform/public/manifest.json`:**
```json
{
  "name": "Home Campus",
  "short_name": "HomeCampus",
  "description": "AI-powered K-12 learning platform with personalized tutoring",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#4F46E5",
  "background_color": "#111827",
  "orientation": "portrait-primary",
  "categories": ["education", "learning"],
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

**3. Create `learning-platform/public/robots.txt`:**
```
User-agent: *
Allow: /

Sitemap: https://homecampus.ai/sitemap.xml
```

---

#### Step 0.4: Optimize Build Configuration
**Priority:** MEDIUM
**Estimated Time:** 20 minutes

**Update `learning-platform/vite.config.ts`:**
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // Target modern browsers for smaller bundles
    target: 'es2020',

    // Source maps for production debugging (can disable if not needed)
    sourcemap: false,

    // Chunk size warning limit (500kb is reasonable)
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        // Manual chunking for better caching
        manualChunks: {
          // React vendor bundle
          'react-vendor': [
            'react',
            'react-dom',
            'react-router-dom'
          ],
          // Firebase vendor bundle
          'firebase-vendor': [
            'firebase/app',
            'firebase/auth',
            'firebase/firestore',
            'firebase/storage'
          ],
          // AI vendor bundle (largest dependencies)
          'ai-vendor': [
            '@google/generative-ai',
            '@anthropic-ai/sdk'
          ],
          // Math rendering vendor
          'math-vendor': [
            'katex',
            'marked'
          ]
        },

        // Asset naming for cache busting
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]

          // Separate images from other assets
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`
          }

          return `assets/[name]-[hash][extname]`
        },

        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    },

    // Minification options
    minify: 'esbuild',

    // Enable CSS code splitting
    cssCodeSplit: true
  },

  // Optimize deps
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'firebase/app',
      'firebase/auth',
      'firebase/firestore'
    ]
  },

  // Preview server config (for local testing)
  preview: {
    port: 4173,
    strictPort: true
  }
})
```

**Exit Criteria:**
- ✅ Build completes with optimized bundles
- ✅ Vendor chunks properly separated
- ✅ No chunks exceed 500kb warning limit

---

## Infrastructure Setup

### Phase 1: Google Cloud Platform & Firebase (Day 1)

#### Step 1.1: Create Firebase Project
**Priority:** CRITICAL
**Estimated Time:** 30 minutes
**Prerequisites:** Google Cloud account with billing enabled

**Action Items:**

1. **Create Firebase project:**
   - Navigate to https://console.firebase.google.com
   - Click "Create a project"
   - Project name: `HomeCampus Production`
   - Project ID: `homecampus-ai` (must be globally unique)
   - Enable Google Analytics (recommended)
   - Select region: Choose closest to target audience

2. **Enable required services:**
   - Authentication (Email/Password, Email Link, Google Sign-In)
   - Cloud Firestore (Native mode)
   - Cloud Storage
   - Hosting
   - Performance Monitoring
   - Analytics

3. **Create web app:**
   - Click "Add app" → Web
   - App nickname: `HomeCampus Web`
   - Enable Firebase Hosting
   - **Copy the Firebase config** (will need for environment variables)

4. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   firebase login
   ```

5. **Initialize Firebase in project:**
   ```bash
   cd /Users/farhat/Documents/AI Systems/AITutor/aicampus
   firebase init

   # Select:
   # ◉ Firestore: Configure security rules and indexes files
   # ◉ Hosting: Configure files for Firebase Hosting

   # Configuration prompts:
   # - Firestore rules file: firestore.rules
   # - Firestore indexes file: firestore.indexes.json
   # - Public directory: learning-platform/dist
   # - Configure as single-page app: Yes
   # - Set up automatic builds with GitHub: No (we'll do manual CI/CD)
   # - Overwrite index.html: No
   ```

**Exit Criteria:**
- ✅ Firebase project created with ID `homecampus-ai`
- ✅ All required services enabled
- ✅ Web app registered with Firebase config available
- ✅ `.firebaserc` created with project mapping
- ✅ `firebase.json` created with hosting config

---

#### Step 1.2: Configure Firebase Hosting
**Priority:** CRITICAL
**Estimated Time:** 20 minutes

**Create/update `firebase.json` in project root:**
```json
{
  "firestore": {
    "rules": "firestore.rules",
    "indexes": "firestore.indexes.json"
  },
  "hosting": {
    "public": "learning-platform/dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp|ico)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        "source": "**/*.@(js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=31536000, immutable"
          }
        ]
      },
      {
        "source": "index.html",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "public, max-age=0, must-revalidate"
          }
        ]
      },
      {
        "source": "**",
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
          },
          {
            "key": "Referrer-Policy",
            "value": "strict-origin-when-cross-origin"
          },
          {
            "key": "Permissions-Policy",
            "value": "camera=(), microphone=(), geolocation=(), interest-cohort=()"
          },
          {
            "key": "Content-Security-Policy",
            "value": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://generativelanguage.googleapis.com https://api.anthropic.com https://*.googleapis.com https://firebasestorage.googleapis.com; frame-ancestors 'self'"
          }
        ]
      }
    ],
    "cleanUrls": true,
    "trailingSlash": false
  }
}
```

**Notes on CSP:**
- Allows inline scripts/styles (required for Vite)
- `unsafe-eval` required for AI SDK dynamic code execution
- Whitelists Gemini, Claude, and Firebase APIs
- Blocks FLoC tracking

---

#### Step 1.3: Configure Firestore Security Rules
**Priority:** CRITICAL (Security)
**Estimated Time:** 30 minutes

**Create `firestore.rules` in project root:**
```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    // Helper functions
    function isAuthenticated() {
      return request.auth != null;
    }

    function isOwner(userId) {
      return isAuthenticated() && request.auth.uid == userId;
    }

    function isParent(childId) {
      return isAuthenticated() &&
        exists(/databases/$(database)/documents/users/$(childId)/parents/$(request.auth.uid));
    }

    // User profiles
    match /users/{userId} {
      // Users can read/write their own profile
      allow read, write: if isOwner(userId);

      // Parent-child relationships
      match /parents/{parentId} {
        allow read: if isOwner(userId) || isOwner(parentId);
        allow write: if isOwner(userId);
      }

      // Children under parent account
      match /children/{childId} {
        allow read: if isOwner(userId) || isOwner(childId);
        allow write: if isOwner(userId);
      }
    }

    // Learning progress data
    match /progress/{userId} {
      allow read: if isOwner(userId) || isParent(userId);
      allow write: if isOwner(userId);

      // Granular progress tracking
      match /paths/{pathId} {
        allow read: if isOwner(userId) || isParent(userId);
        allow write: if isOwner(userId);
      }
    }

    // Practice session data
    match /sessions/{sessionId} {
      allow read: if isAuthenticated() &&
        (resource.data.userId == request.auth.uid || isParent(resource.data.userId));
      allow create: if isAuthenticated() && request.resource.data.userId == request.auth.uid;
      allow update, delete: if isAuthenticated() && resource.data.userId == request.auth.uid;
    }

    // Email queue for Firebase Email Extension
    match /mail/{mailId} {
      // Users can only create emails (extension handles sending)
      allow create: if isAuthenticated();
      // Nobody can read emails (privacy)
      allow read: if false;
      // Only service account can update/delete
      allow update, delete: if false;
    }

    // Public curriculum metadata (read-only)
    match /curriculum/{document=**} {
      allow read: if true;
      allow write: if false;
    }

    // Analytics events (write-only)
    match /analytics/{eventId} {
      allow create: if isAuthenticated();
      allow read, update, delete: if false;
    }

    // Deny all other access by default
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

**Create `firestore.indexes.json`:**
```json
{
  "indexes": [
    {
      "collectionGroup": "progress",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "userId", "order": "ASCENDING" },
        { "fieldPath": "updatedAt", "order": "DESCENDING" }
      ]
    },
    {
      "collectionGroup": "sessions",
      "queryScope": "COLLECTION",
      "fields": [
        { "fieldPath": "userId", "order": "ASCENDING" },
        { "fieldPath": "startedAt", "order": "DESCENDING" }
      ]
    }
  ],
  "fieldOverrides": []
}
```

**Exit Criteria:**
- ✅ `firestore.rules` created with proper security
- ✅ `firestore.indexes.json` created
- ✅ Rules tested in Firebase console emulator

---

#### Step 1.4: Set Up Service Account for CI/CD
**Priority:** CRITICAL
**Estimated Time:** 15 minutes

**Action Items:**

1. **Create service account in GCP:**
   - Go to https://console.cloud.google.com
   - Select `homecampus-ai` project
   - Navigate to IAM & Admin → Service Accounts
   - Click "Create Service Account"
   - Name: `github-actions-deployer`
   - Description: `Service account for GitHub Actions CI/CD deployment`

2. **Grant required roles:**
   - Firebase Hosting Admin
   - Cloud Datastore User (for Firestore rules deployment)
   - Service Account User

3. **Create and download key:**
   - Click on service account
   - Keys tab → Add Key → Create new key
   - Key type: JSON
   - Download JSON file (KEEP SECURE)

4. **Encode key for GitHub Secrets:**
   ```bash
   # On macOS/Linux:
   base64 -i path/to/service-account-key.json | pbcopy

   # On Windows:
   certutil -encode path/to/service-account-key.json encoded.txt
   ```

5. **Delete local copy of service account key:**
   ```bash
   # IMPORTANT: Don't leave credentials on disk
   rm path/to/service-account-key.json
   ```

**Exit Criteria:**
- ✅ Service account created with proper roles
- ✅ JSON key downloaded and base64-encoded
- ✅ Local copy of key securely deleted
- ✅ Base64 key ready for GitHub Secrets

---

### Phase 2: Domain & Email Configuration (Day 1-2)

#### Step 2.1: Configure Custom Domain
**Priority:** HIGH
**Estimated Time:** 30 minutes (+ 24-48h DNS propagation)

**Action Items:**

1. **Add custom domain in Firebase:**
   ```bash
   firebase hosting:sites:create homecampus-ai
   ```

2. **Connect domain in Firebase Console:**
   - Navigate to Hosting → Add custom domain
   - Enter: `homecampus.ai`
   - Follow verification steps
   - Firebase will provide DNS records

3. **Add DNS records at your domain registrar:**

   **For homecampus.ai (root domain):**
   - Firebase will provide specific A/AAAA records (these change, don't use hardcoded IPs)
   - Typically 2 A records pointing to Firebase Hosting IPs

   **For www.homecampus.ai:**
   ```
   Type: CNAME
   Name: www
   Value: homecampus.ai.
   TTL: 3600
   ```

   **For Firebase verification:**
   ```
   Type: TXT
   Name: @
   Value: [Firebase will provide verification token]
   TTL: 3600
   ```

4. **Wait for DNS propagation:**
   ```bash
   # Check DNS propagation
   nslookup homecampus.ai
   dig homecampus.ai
   ```

5. **Verify SSL certificate:**
   - Firebase auto-provisions SSL via Let's Encrypt
   - May take up to 24 hours
   - Verify at https://www.ssllabs.com/ssltest/

**Exit Criteria:**
- ✅ Domain verified in Firebase Console
- ✅ DNS records propagated
- ✅ SSL certificate provisioned
- ✅ https://homecampus.ai resolves correctly
- ✅ SSL Labs grade A or A+

---

#### Step 2.2: Configure Email Service
**Priority:** MEDIUM
**Estimated Time:** 45 minutes

**Action Items:**

1. **Install Firebase Email Extension:**
   - Navigate to Firebase Console → Extensions
   - Search for "Trigger Email"
   - Click "Install"
   - Configure:
     - SMTP Connection: Use Gmail or SendGrid
     - Default FROM address: `noreply@homecampus.ai`
     - Email documents collection: `mail`

2. **Configure SPF record:**
   ```
   Type: TXT
   Name: @
   Value: v=spf1 include:_spf.google.com include:sendgrid.net ~all
   TTL: 3600
   ```

   (Adjust based on your email provider)

3. **Configure DKIM:**
   - If using Google Workspace or SendGrid, follow their DKIM setup
   - Add provided TXT records to DNS

4. **Configure DMARC:**
   ```
   Type: TXT
   Name: _dmarc
   Value: v=DMARC1; p=quarantine; rua=mailto:dmarc@homecampus.ai; pct=100; adkim=s; aspf=s
   TTL: 3600
   ```

5. **Test email delivery:**
   ```bash
   # Send test email via Firestore
   firebase firestore:write mail/test001 '{
     "to": "your-email@example.com",
     "message": {
       "subject": "Test Email",
       "text": "This is a test email from Home Campus."
     }
   }'
   ```

**Exit Criteria:**
- ✅ Email extension installed and configured
- ✅ SPF, DKIM, DMARC records added
- ✅ Test email delivered successfully
- ✅ Email not in spam folder

---

## Security Hardening

### Phase 3: API Key Management & Restrictions (Day 2)

#### Step 3.1: Configure API Key Restrictions
**Priority:** CRITICAL (Security)
**Estimated Time:** 30 minutes

**Action Items:**

1. **Firebase API Key Restrictions:**
   - Navigate to GCP Console → APIs & Services → Credentials
   - Find Firebase API key (starts with `AIza...`)
   - Edit → Application restrictions:
     - HTTP referrers (web sites)
     - Add: `https://homecampus.ai/*`
     - Add: `https://*.homecampus.ai/*`
     - Add: `https://*.firebaseapp.com/*` (for preview channels)
   - API restrictions:
     - Restrict key to: Firebase services only

2. **Gemini API Key Restrictions:**
   - Navigate to Google AI Studio → API Keys
   - Create production key (separate from development)
   - Restrictions:
     - HTTP referrers
     - Add: `https://homecampus.ai/*`
     - Add: `https://*.homecampus.ai/*`

3. **Google Cloud TTS API Key:**
   - Same restrictions as Gemini API key

4. **Claude API Key:**
   - Anthropic doesn't support HTTP referrer restrictions
   - Implement rate limiting in application code
   - Monitor usage via Anthropic Console

**Exit Criteria:**
- ✅ All API keys restricted to production domains
- ✅ Development keys separate from production
- ✅ No unrestricted API keys in use

---

#### Step 3.2: Environment Variables & Secrets Management
**Priority:** CRITICAL
**Estimated Time:** 20 minutes

**GitHub Repository Secrets:**

Navigate to GitHub repo → Settings → Secrets and variables → Actions → New repository secret

Add the following secrets:

| Secret Name | Description | How to Get |
|-------------|-------------|------------|
| `FIREBASE_SERVICE_ACCOUNT` | Base64 encoded service account JSON | Step 1.4 |
| `VITE_GEMINI_API_KEY` | Production Gemini API key | Google AI Studio |
| `VITE_CLAUDE_API_KEY` | Claude API key (fallback) | Anthropic Console |
| `VITE_FIREBASE_API_KEY` | Firebase web API key | Firebase Console → Project Settings → Web App |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain | Same as above |
| `VITE_FIREBASE_PROJECT_ID` | `homecampus-ai` | Same as above |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket | Same as above |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID | Same as above |
| `VITE_FIREBASE_APP_ID` | Firebase app ID | Same as above |
| `VITE_GOOGLE_TTS_API_KEY` | Google Cloud TTS API key | GCP Console |

**Exit Criteria:**
- ✅ All secrets added to GitHub repository
- ✅ No secrets committed to git
- ✅ `.env` files in `.gitignore`

---

## CI/CD Pipeline

### Phase 4: GitHub Actions Workflow (Day 2)

#### Step 4.1: Create Production Deployment Workflow
**Priority:** CRITICAL
**Estimated Time:** 30 minutes

**Create `.github/workflows/production.yml`:**
```yaml
name: Production Deployment

on:
  push:
    branches:
      - main
    paths:
      - 'learning-platform/**'
      - '.github/workflows/production.yml'
      - 'firebase.json'
      - 'firestore.rules'

  workflow_dispatch:
    inputs:
      skip_tests:
        description: 'Skip tests (use for hotfixes only)'
        required: false
        default: 'false'

env:
  NODE_VERSION: '20'
  WORKING_DIR: ./learning-platform

jobs:
  test:
    name: Run Tests
    runs-on: ubuntu-latest
    if: github.event.inputs.skip_tests != 'true'

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
          cache-dependency-path: learning-platform/package-lock.json

      - name: Install dependencies
        working-directory: ${{ env.WORKING_DIR }}
        run: npm ci

      - name: Run linter
        working-directory: ${{ env.WORKING_DIR }}
        run: npm run lint

      - name: Run tests
        working-directory: ${{ env.WORKING_DIR }}
        run: npm run test:run

      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: test-results
          path: learning-platform/coverage/

  build:
    name: Build Application
    runs-on: ubuntu-latest
    needs: test
    if: |
      always() &&
      (needs.test.result == 'success' || github.event.inputs.skip_tests == 'true')

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
          cache-dependency-path: learning-platform/package-lock.json

      - name: Install dependencies
        working-directory: ${{ env.WORKING_DIR }}
        run: npm ci

      - name: Create environment file
        working-directory: ${{ env.WORKING_DIR }}
        run: |
          cat > .env << EOF
          VITE_GEMINI_API_KEY=${{ secrets.VITE_GEMINI_API_KEY }}
          VITE_CLAUDE_API_KEY=${{ secrets.VITE_CLAUDE_API_KEY }}
          VITE_FIREBASE_API_KEY=${{ secrets.VITE_FIREBASE_API_KEY }}
          VITE_FIREBASE_AUTH_DOMAIN=${{ secrets.VITE_FIREBASE_AUTH_DOMAIN }}
          VITE_FIREBASE_PROJECT_ID=${{ secrets.VITE_FIREBASE_PROJECT_ID }}
          VITE_FIREBASE_STORAGE_BUCKET=${{ secrets.VITE_FIREBASE_STORAGE_BUCKET }}
          VITE_FIREBASE_MESSAGING_SENDER_ID=${{ secrets.VITE_FIREBASE_MESSAGING_SENDER_ID }}
          VITE_FIREBASE_APP_ID=${{ secrets.VITE_FIREBASE_APP_ID }}
          VITE_GOOGLE_TTS_API_KEY=${{ secrets.VITE_GOOGLE_TTS_API_KEY }}
          VITE_TTS_PROVIDER=gemini
          VITE_TTS_SPEAKER=callirrhoe
          VITE_EMAIL_COLLECTION=mail
          VITE_FROM_EMAIL=noreply@homecampus.ai
          VITE_FROM_NAME=Home Campus
          VITE_SUPPORT_EMAIL=support@homecampus.ai
          EOF

      - name: Build application
        working-directory: ${{ env.WORKING_DIR }}
        run: npm run build

      - name: Upload build artifacts
        uses: actions/upload-artifact@v4
        with:
          name: production-build
          path: learning-platform/dist/
          retention-days: 30

  deploy:
    name: Deploy to Firebase Hosting
    runs-on: ubuntu-latest
    needs: build
    environment:
      name: production
      url: https://homecampus.ai

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Download build artifacts
        uses: actions/download-artifact@v4
        with:
          name: production-build
          path: learning-platform/dist/

      - name: Deploy to Firebase
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: ${{ secrets.GITHUB_TOKEN }}
          firebaseServiceAccount: ${{ secrets.FIREBASE_SERVICE_ACCOUNT }}
          channelId: live
          projectId: homecampus-ai

      - name: Deploy Firestore rules
        uses: w9jds/firebase-action@v13.10.0
        with:
          args: deploy --only firestore:rules
        env:
          GCP_SA_KEY: ${{ secrets.FIREBASE_SERVICE_ACCOUNT }}

      - name: Notify deployment success
        if: success()
        run: |
          echo "✅ Deployment successful!"
          echo "🌐 Production URL: https://homecampus.ai"
          echo "📊 View deployment: https://console.firebase.google.com/project/homecampus-ai/hosting"
```

**Exit Criteria:**
- ✅ Workflow file created in `.github/workflows/production.yml`
- ✅ Workflow triggers on push to main
- ✅ Tests run before build
- ✅ Build artifacts uploaded
- ✅ Deployment configured with proper secrets

---

#### Step 4.2: Create PR Preview Workflow
**Priority:** MEDIUM
**Estimated Time:** 20 minutes

**Create `.github/workflows/preview.yml`:**
```yaml
name: PR Preview Deployment

on:
  pull_request:
    types: [opened, synchronize, reopened]
    paths:
      - 'learning-platform/**'

env:
  NODE_VERSION: '20'
  WORKING_DIR: ./learning-platform

jobs:
  preview:
    name: Deploy PR Preview
    runs-on: ubuntu-latest
    if: github.event.pull_request.head.repo.full_name == github.repository

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
          cache-dependency-path: learning-platform/package-lock.json

      - name: Install dependencies
        working-directory: ${{ env.WORKING_DIR }}
        run: npm ci

      - name: Create environment file
        working-directory: ${{ env.WORKING_DIR }}
        run: |
          cat > .env << EOF
          VITE_GEMINI_API_KEY=${{ secrets.VITE_GEMINI_API_KEY }}
          VITE_CLAUDE_API_KEY=${{ secrets.VITE_CLAUDE_API_KEY }}
          VITE_FIREBASE_API_KEY=${{ secrets.VITE_FIREBASE_API_KEY }}
          VITE_FIREBASE_AUTH_DOMAIN=${{ secrets.VITE_FIREBASE_AUTH_DOMAIN }}
          VITE_FIREBASE_PROJECT_ID=${{ secrets.VITE_FIREBASE_PROJECT_ID }}
          VITE_FIREBASE_STORAGE_BUCKET=${{ secrets.VITE_FIREBASE_STORAGE_BUCKET }}
          VITE_FIREBASE_MESSAGING_SENDER_ID=${{ secrets.VITE_FIREBASE_MESSAGING_SENDER_ID }}
          VITE_FIREBASE_APP_ID=${{ secrets.VITE_FIREBASE_APP_ID }}
          VITE_GOOGLE_TTS_API_KEY=${{ secrets.VITE_GOOGLE_TTS_API_KEY }}
          VITE_TTS_PROVIDER=gemini
          VITE_TTS_SPEAKER=callirrhoe
          VITE_EMAIL_COLLECTION=mail
          VITE_FROM_EMAIL=noreply@homecampus.ai
          VITE_FROM_NAME=Home Campus
          VITE_SUPPORT_EMAIL=support@homecampus.ai
          EOF

      - name: Build application
        working-directory: ${{ env.WORKING_DIR }}
        run: npm run build

      - name: Deploy to preview channel
        uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: ${{ secrets.GITHUB_TOKEN }}
          firebaseServiceAccount: ${{ secrets.FIREBASE_SERVICE_ACCOUNT }}
          projectId: homecampus-ai
          expires: 7d
        id: firebase_hosting_preview

      - name: Comment preview URL on PR
        uses: actions/github-script@v7
        with:
          script: |
            github.rest.issues.createComment({
              issue_number: context.issue.number,
              owner: context.repo.owner,
              repo: context.repo.repo,
              body: `🔍 **Preview deployment ready!**\n\n✅ Preview URL: ${{ steps.firebase_hosting_preview.outputs.details_url }}\n\n*Preview expires in 7 days*`
            })
```

**Exit Criteria:**
- ✅ Preview workflow created
- ✅ Deploys on PR open/update
- ✅ Comments preview URL on PR
- ✅ Preview expires after 7 days

---

## Production Deployment

### Phase 5: Go-Live Procedure (Day 3)

#### Step 5.1: Pre-Deployment Checklist

**Run through this checklist before deploying:**

- [ ] ✅ All TypeScript errors resolved
- [ ] ✅ `npm run build` succeeds locally
- [ ] ✅ `npm run test:run` passes with 100% success
- [ ] ✅ Firebase project created (`homecampus-ai`)
- [ ] ✅ Firebase Hosting configured
- [ ] ✅ Firestore rules deployed and tested
- [ ] ✅ Service account created with proper permissions
- [ ] ✅ All GitHub Secrets configured
- [ ] ✅ GitHub Actions workflows committed
- [ ] ✅ Domain DNS records configured
- [ ] ✅ Email service configured and tested
- [ ] ✅ API keys restricted to production domains
- [ ] ✅ Assets (favicons, icons) generated
- [ ] ✅ `index.html` metadata updated
- [ ] ✅ `manifest.json` created
- [ ] ✅ Vite config optimized

**Manual Testing Checklist:**

- [ ] Landing page loads correctly
- [ ] User registration works (email link)
- [ ] Google OAuth sign-in works
- [ ] AI tutor responds to questions
- [ ] TTS audio plays correctly
- [ ] Math visualizers render properly
- [ ] Practice mode generates problems
- [ ] Progress tracking saves correctly
- [ ] Parent dashboard accessible
- [ ] All navigation routes work
- [ ] No console errors in browser
- [ ] Mobile responsive design works

---

#### Step 5.2: Deployment Steps

**1. Create release tag:**
```bash
git tag -a v1.0.0-beta.1 -m "Initial beta release for testing"
git push origin v1.0.0-beta.1
```

**2. Merge to main (triggers deployment):**
```bash
git checkout main
git merge --no-ff feature/production-ready
git push origin main
```

**3. Monitor GitHub Actions:**
- Navigate to: https://github.com/YOUR_ORG/aicampus/actions
- Watch deployment progress
- Check for any failures

**4. Verify deployment:**
```bash
# Check Firebase hosting URL first
open https://homecampus-ai.web.app

# If DNS propagated, check custom domain
open https://homecampus.ai
```

**5. Smoke test critical paths:**
- Test user registration flow
- Test AI conversation
- Test practice problem generation
- Test TTS functionality
- Test progress saving

**6. Monitor Firebase logs:**
```bash
firebase functions:log --project homecampus-ai
```

---

#### Step 5.3: Post-Deployment Verification

**Performance Testing:**

1. **Lighthouse audit:**
   - Open Chrome DevTools
   - Navigate to Lighthouse tab
   - Run audit for Performance, Accessibility, Best Practices, SEO
   - **Target scores:** Performance >90, Accessibility >95, Best Practices >95, SEO >95

2. **Load testing:**
   ```bash
   # Using Apache Bench (install: brew install httpd)
   ab -n 1000 -c 10 https://homecampus.ai/

   # Target metrics:
   # - Requests per second: >50
   # - Time per request: <200ms (mean)
   # - Failed requests: 0
   ```

3. **Page load metrics:**
   - First Contentful Paint (FCP): <1.5s
   - Largest Contentful Paint (LCP): <2.5s
   - Cumulative Layout Shift (CLS): <0.1
   - First Input Delay (FID): <100ms
   - Time to Interactive (TTI): <3.5s

**Security Testing:**

1. **SSL Labs test:**
   - https://www.ssllabs.com/ssltest/analyze.html?d=homecampus.ai
   - **Target:** Grade A or A+

2. **Security headers check:**
   - https://securityheaders.com/?q=homecampus.ai
   - **Target:** Grade A

3. **OWASP ZAP scan (optional):**
   ```bash
   docker run -t owasp/zap2docker-stable zap-baseline.py \
     -t https://homecampus.ai
   ```

**Exit Criteria:**
- ✅ Deployment successful
- ✅ All smoke tests pass
- ✅ Lighthouse score >90
- ✅ SSL Labs grade A+
- ✅ Security headers grade A
- ✅ No critical errors in logs

---

## Post-Deployment Operations

### Phase 6: Monitoring & Observability (Day 3-4)

#### Step 6.1: Enable Firebase Monitoring
**Priority:** HIGH
**Estimated Time:** 30 minutes

**Action Items:**

1. **Enable Performance Monitoring:**

   **Update `learning-platform/src/main.tsx`:**
   ```typescript
   import { initializeApp } from 'firebase/app';
   import { getAuth } from 'firebase/auth';
   import { getFirestore } from 'firebase/firestore';
   import { getPerformance } from 'firebase/performance';
   import { getAnalytics } from 'firebase/analytics';

   const firebaseConfig = {
     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
     appId: import.meta.env.VITE_FIREBASE_APP_ID,
   };

   const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);
   export const db = getFirestore(app);

   // Initialize monitoring (only in production)
   if (import.meta.env.PROD) {
     getPerformance(app);
     getAnalytics(app);
   }
   ```

2. **Configure custom traces:**
   ```typescript
   import { trace } from 'firebase/performance';
   import { getPerformance } from 'firebase/performance';

   // Example: Trace AI response time
   export async function measureAIResponse(callback: () => Promise<any>) {
     if (!import.meta.env.PROD) {
       return callback();
     }

     const perf = getPerformance();
     const customTrace = trace(perf, 'ai_response_time');
     customTrace.start();

     try {
       const result = await callback();
       customTrace.stop();
       return result;
     } catch (error) {
       customTrace.stop();
       throw error;
     }
   }
   ```

3. **Set up Analytics events:**
   ```typescript
   import { logEvent } from 'firebase/analytics';
   import { getAnalytics } from 'firebase/analytics';

   // Track key user actions
   export function trackEvent(eventName: string, params?: Record<string, any>) {
     if (!import.meta.env.PROD) return;

     const analytics = getAnalytics();
     logEvent(analytics, eventName, params);
   }

   // Usage examples:
   trackEvent('practice_session_started', { topic: 'trigonometry' });
   trackEvent('ai_response_received', { responseTime: 1250 });
   trackEvent('tts_played', { speaker: 'callirrhoe' });
   ```

**Exit Criteria:**
- ✅ Performance Monitoring enabled
- ✅ Analytics enabled
- ✅ Custom traces implemented for critical paths
- ✅ Key events tracked

---

#### Step 6.2: Set Up Error Tracking
**Priority:** HIGH
**Estimated Time:** 45 minutes

**Option A: Firebase Crashlytics (Recommended)**

1. **Enable Crashlytics in Firebase Console**

2. **Install SDK:**
   ```bash
   cd learning-platform
   npm install firebase
   ```

3. **Create error boundary with reporting:**

   **Update `learning-platform/src/components/ErrorBoundary.tsx`:**
   ```typescript
   import React, { Component, ErrorInfo, ReactNode } from 'react';
   import { logEvent } from 'firebase/analytics';
   import { getAnalytics } from 'firebase/analytics';

   interface Props {
     children: ReactNode;
   }

   interface State {
     hasError: boolean;
     error: Error | null;
   }

   export class ErrorBoundary extends Component<Props, State> {
     constructor(props: Props) {
       super(props);
       this.state = { hasError: false, error: null };
     }

     static getDerivedStateFromError(error: Error): State {
       return { hasError: true, error };
     }

     componentDidCatch(error: Error, errorInfo: ErrorInfo) {
       console.error('Error caught by boundary:', error, errorInfo);

       // Log to Firebase Analytics
       if (import.meta.env.PROD) {
         const analytics = getAnalytics();
         logEvent(analytics, 'exception', {
           description: error.message,
           fatal: true,
           stack: error.stack,
           componentStack: errorInfo.componentStack,
         });
       }
     }

     render() {
       if (this.state.hasError) {
         return (
           <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
             <div className="max-w-md w-full bg-gray-800 rounded-lg p-6 text-center">
               <h1 className="text-2xl font-bold text-red-400 mb-4">
                 Oops! Something went wrong
               </h1>
               <p className="text-gray-300 mb-6">
                 We're sorry for the inconvenience. Please try refreshing the page.
               </p>
               <button
                 onClick={() => window.location.reload()}
                 className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
               >
                 Refresh Page
               </button>
             </div>
           </div>
         );
       }

       return this.props.children;
     }
   }
   ```

**Exit Criteria:**
- ✅ Error tracking enabled
- ✅ Error boundary implemented
- ✅ Errors logged to monitoring service
- ✅ User-friendly error pages

---

#### Step 6.3: Configure Alerts & Notifications
**Priority:** MEDIUM
**Estimated Time:** 30 minutes

**Firebase Alerts to Configure:**

1. **Navigate to Firebase Console → Alerts**

2. **Create alerts for:**
   - **Hosting quota exceeded:** Alert when approaching quota
   - **Firestore quota exceeded:** Alert at 80% of quota
   - **High error rate:** Alert when error rate >5%
   - **Performance degradation:** Alert when LCP >3s
   - **Authentication failures:** Alert when auth failure rate >10%

3. **Set up notification channels:**
   - Email: Your email address
   - Slack (optional): Create webhook for team notifications
   - PagerDuty (optional): For critical production issues

4. **Configure GCP budget alerts:**
   - Navigate to GCP Console → Billing → Budgets & alerts
   - Create budget: $50/month (adjust based on expected usage)
   - Set alerts at: 50%, 80%, 100%, 120%
   - Email notifications to: your-email@domain.com

**Exit Criteria:**
- ✅ Firebase alerts configured
- ✅ GCP budget alerts set
- ✅ Notification channels tested
- ✅ Alert thresholds appropriate

---

## Cost Management

### Phase 7: Cost Optimization & Monitoring (Ongoing)

#### Step 7.1: Understand Cost Structure

**Firebase Hosting (Spark/Blaze Plan):**
- **Free tier:** 10 GB storage, 360 MB/day transfer
- **Paid:** $0.026/GB storage, $0.15/GB transfer
- **Estimate:** ~$5-20/month for 1000-5000 users

**Cloud Firestore:**
- **Free tier:** 1 GB storage, 50K reads, 20K writes, 20K deletes per day
- **Paid:** $0.18/GB storage, $0.06/100K reads, $0.18/100K writes
- **Estimate:** ~$10-50/month for active users

**Firebase Authentication:**
- **Free tier:** Unlimited for email/password, Google, email link
- **Paid:** Only for phone auth ($0.06/verification)
- **Estimate:** $0/month (no phone auth)

**Gemini API (Pay-as-you-go):**
- **Gemini 2.5 Flash:** $0.075/1M input tokens, $0.30/1M output tokens
- **TTS:** $0.000016/character (~$16 per million characters)
- **Estimate:** $50-200/month for 1000 users (highly variable)

**Claude API (Fallback):**
- **Claude Sonnet:** $3/1M input tokens, $15/1M output tokens
- **Estimate:** $0-50/month (only used on Gemini failures)

**Total Estimated Monthly Cost:**
- **Low usage (100 users):** $20-50/month
- **Medium usage (1000 users):** $100-300/month
- **High usage (5000 users):** $300-800/month

---

#### Step 7.2: Implement Cost Controls

**Action Items:**

1. **Set up budget alerts (already done in Step 6.3)**

2. **Implement rate limiting for AI calls:**

   **Create `learning-platform/src/utils/rateLimiter.ts`:**
   ```typescript
   // Simple client-side rate limiter
   class RateLimiter {
     private calls: number[] = [];
     private maxCalls: number;
     private windowMs: number;

     constructor(maxCalls: number, windowMs: number) {
       this.maxCalls = maxCalls;
       this.windowMs = windowMs;
     }

     canMakeCall(): boolean {
       const now = Date.now();
       this.calls = this.calls.filter(time => now - time < this.windowMs);

       if (this.calls.length >= this.maxCalls) {
         return false;
       }

       this.calls.push(now);
       return true;
     }

     getRemainingCalls(): number {
       const now = Date.now();
       this.calls = this.calls.filter(time => now - time < this.windowMs);
       return this.maxCalls - this.calls.length;
     }
   }

   // Limit to 10 AI calls per minute per user
   export const aiRateLimiter = new RateLimiter(10, 60000);
   ```

3. **Monitor API usage daily:**
   - Gemini API: https://aistudio.google.com/app/apikey
   - Claude API: https://console.anthropic.com/account/usage
   - Set calendar reminder to check weekly

4. **Optimize AI prompts for token efficiency:**
   - Keep system prompts concise
   - Avoid redundant context in evaluator prompts
   - Use Gemini Flash (cheaper) over Pro when possible

**Exit Criteria:**
- ✅ Budget alerts configured
- ✅ Rate limiting implemented
- ✅ Usage monitoring scheduled
- ✅ Cost optimization strategies documented

---

## Incident Response

### Phase 8: Incident Response Plan

#### Incident Severity Levels

| Level | Description | Response Time | Example |
|-------|-------------|---------------|---------|
| **P0 - Critical** | Complete service outage | Immediate (15 min) | Site down, database inaccessible |
| **P1 - High** | Major feature broken | 1 hour | AI not responding, auth broken |
| **P2 - Medium** | Minor feature broken | 4 hours | TTS not working, one topic broken |
| **P3 - Low** | Cosmetic issue | Next business day | UI glitch, typo in content |

---

#### Incident Response Procedure

**1. Detect:**
- Automated alerts (Firebase, GCP, monitoring)
- User reports
- Manual testing

**2. Assess:**
- Determine severity level
- Identify affected users/features
- Check recent deployments

**3. Communicate:**
- **P0/P1:** Post status update within 30 minutes
- Create incident channel (Slack, Discord, etc.)
- Update status page if available

**4. Mitigate:**
- **Quick fix available:** Deploy hotfix
- **No quick fix:** Roll back to previous version
- **Partial outage:** Disable affected feature

**5. Resolve:**
- Deploy fix
- Verify resolution
- Monitor for recurrence

**6. Post-Mortem:**
- Document incident timeline
- Identify root cause
- Create action items to prevent recurrence
- Update runbooks

---

## Rollback Procedures

### Emergency Rollback

**Method 1: Firebase Console (Fastest - ~1 minute)**

1. Navigate to Firebase Console → Hosting
2. Click "Release history"
3. Find previous stable version
4. Click "⋮" → "Roll back to this version"
5. Confirm rollback

**Method 2: Firebase CLI**

```bash
# List recent releases
firebase hosting:clone homecampus-ai:PREVIOUS_VERSION homecampus-ai:live

# Example:
firebase hosting:clone homecampus-ai:abc123 homecampus-ai:live
```

**Method 3: Git Revert + Redeploy**

```bash
# Revert commit
git revert HEAD
git push origin main

# This triggers automatic redeployment via GitHub Actions
```

**Method 4: Force Deploy Previous Version**

```bash
# Checkout previous tag
git checkout v1.0.0-beta.1

# Build
cd learning-platform
npm ci
npm run build

# Deploy
firebase deploy --only hosting --project homecampus-ai
```

---

### Firestore Rules Rollback

```bash
# If new Firestore rules break production
firebase deploy --only firestore:rules --project homecampus-ai
```

**Emergency rule bypass (USE ONLY IN EXTREME EMERGENCY):**
```javascript
// TEMPORARY - REMOVE IMMEDIATELY AFTER FIX
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

⚠️ **WARNING:** This makes all data publicly readable. Use only as last resort and revert ASAP.

---

## Success Metrics & SLAs

### Launch Success Criteria (Week 1)

**Availability:**
- ✅ Uptime: ≥99% (7.2 minutes downtime allowed)
- ✅ Error rate: <3%
- ✅ Zero data loss incidents

**Performance:**
- ✅ Page load time (LCP): <2.5s (75th percentile)
- ✅ AI response time: <3s (median)
- ✅ TTS latency: <2s (median)
- ✅ Lighthouse score: ≥90

**Functionality:**
- ✅ User registration success rate: >95%
- ✅ AI response success rate: >95%
- ✅ TTS success rate: >90%
- ✅ Practice session completion rate: >80%

**Cost:**
- ✅ Cost per active user: <$2
- ✅ Total monthly cost: <$500 (for <100 beta users)

---

### Production SLAs (Month 1+)

**Uptime SLA:** 99.5% monthly uptime
- Allowed downtime: ~3.6 hours/month
- Scheduled maintenance: Max 2 hours/month (announced 48h in advance)

**Performance SLA:**
- Page load: <3s (90th percentile)
- AI response: <5s (90th percentile)
- Database queries: <500ms (95th percentile)

**Support SLA:**
- P0 incidents: Response in 15 minutes, resolution in 4 hours
- P1 incidents: Response in 1 hour, resolution in 24 hours
- P2 incidents: Response in 4 hours, resolution in 3 days

---

## Timeline & Milestones

| Phase | Duration | Start | End | Status | Owner |
|-------|----------|-------|-----|--------|-------|
| **Phase 0: Pre-Flight** | 3-5 hours → 6-9 hours | Day 1 | In Progress | 🟡 28% Complete | Dev Team |
| └─ Fix TypeScript errors | 2-4 hours → 4-7 hours | ✓ Started | In Progress | 🟡 28% (126/445 fixed) | Dev Team |
| └─ Generate assets | 30 min | | Pending | ⚪ Not Started | Dev Team |
| └─ Update metadata | 15 min | | Pending | ⚪ Not Started | Dev Team |
| └─ Optimize build config | 20 min | | Pending | ⚪ Not Started | Dev Team |
| **Phase 1: Infrastructure** | 2-3 hours | Day 1 | Day 1 | ⚪ Not Started | DevOps |
| └─ Create Firebase project | 30 min | | | DevOps |
| └─ Configure hosting | 20 min | | | DevOps |
| └─ Set up Firestore rules | 30 min | | | DevOps |
| └─ Create service account | 15 min | | | DevOps |
| **Phase 2: Domain & Email** | 1-2 hours | Day 1 | Day 2 | DevOps |
| └─ Configure domain | 30 min | | | DevOps |
| └─ Configure email | 45 min | | | DevOps |
| └─ *Wait for DNS propagation* | 24-48h | | | - |
| **Phase 3: Security** | 1 hour | Day 2 | Day 2 | DevOps |
| └─ API key restrictions | 30 min | | | DevOps |
| └─ GitHub Secrets | 20 min | | | DevOps |
| **Phase 4: CI/CD** | 1 hour | Day 2 | Day 2 | DevOps |
| └─ Production workflow | 30 min | | | DevOps |
| └─ Preview workflow | 20 min | | | DevOps |
| **Phase 5: Deployment** | 2-3 hours | Day 3 | Day 3 | Team |
| └─ Pre-deployment checklist | 1 hour | | | Team |
| └─ Deploy to production | 30 min | | | DevOps |
| └─ Post-deployment verification | 1 hour | | | Team |
| **Phase 6: Monitoring** | 2 hours | Day 3 | Day 4 | DevOps |
| └─ Enable Firebase monitoring | 30 min | | | DevOps |
| └─ Set up error tracking | 45 min | | | DevOps |
| └─ Configure alerts | 30 min | | | DevOps |

**Total Estimated Time:** 12-16 hours of active work over 3-4 days (excluding DNS propagation wait time)

---

## Next Steps

### Immediate Actions (Today)

1. **Continue fixing TypeScript errors** (BLOCKER) 🟡 IN PROGRESS
   ```bash
   cd learning-platform
   npm run build
   # Currently: 319 errors remaining (down from 445)
   # See TYPESCRIPT_FIXES.md for detailed progress and next steps
   # Estimated: 4-7 hours remaining
   ```

2. **Create Firebase project** ⚪ BLOCKED (waiting for TypeScript fixes)
   - Go to https://console.firebase.google.com
   - Create `homecampus-ai` project

3. **Generate assets**
   - Use ImageMagick or online tool
   - Create favicons and PWA icons

### Week 1 Actions

4. **Complete infrastructure setup**
   - Firebase Hosting, Firestore rules
   - Service account for CI/CD

5. **Set up CI/CD pipeline**
   - GitHub Actions workflows
   - GitHub Secrets

6. **Deploy to production**
   - Follow Phase 5 deployment procedure
   - Complete post-deployment verification

7. **Enable monitoring**
   - Performance monitoring
   - Error tracking
   - Alerts

### Week 2 Actions

8. **Invite beta testers**
   - Create beta tester list
   - Send invitation emails
   - Provide feedback form

9. **Monitor and iterate**
   - Review analytics daily
   - Address user feedback
   - Fix bugs as they arise

10. **Optimize based on real usage**
    - Review performance metrics
    - Optimize slow queries
    - Reduce bundle size if needed

---

## Emergency Contacts

**Project Lead:** [Your Name]
**Email:** [your-email@domain.com]
**Phone:** [your-phone]

**Firebase Support:** https://firebase.google.com/support
**GCP Support:** https://cloud.google.com/support
**Domain Registrar:** [Your registrar support]

**Status Page:** (To be created)
**Incident Slack Channel:** (To be created)

---

## Appendix

### A. Useful Commands

```bash
# Build and test locally
cd learning-platform
npm run build
npm run test:run
npm run preview

# Firebase deployment
firebase deploy --only hosting
firebase deploy --only firestore:rules
firebase deploy --only firestore:indexes

# View Firebase logs
firebase functions:log
firebase hosting:channel:list

# Git operations
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
git revert HEAD

# Performance testing
npm run build && npm run preview
# In another terminal:
ab -n 1000 -c 10 http://localhost:4173/
```

### B. Environment Variables Reference

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `VITE_GEMINI_API_KEY` | Yes | Google Gemini API key | `AIza...` |
| `VITE_CLAUDE_API_KEY` | No | Claude API key (fallback) | `sk-ant-...` |
| `VITE_FIREBASE_API_KEY` | Yes | Firebase API key | `AIza...` |
| `VITE_FIREBASE_AUTH_DOMAIN` | Yes | Firebase auth domain | `homecampus-ai.firebaseapp.com` |
| `VITE_FIREBASE_PROJECT_ID` | Yes | Firebase project ID | `homecampus-ai` |
| `VITE_FIREBASE_STORAGE_BUCKET` | Yes | Firebase storage bucket | `homecampus-ai.appspot.com` |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Yes | Firebase messaging sender ID | `123456789` |
| `VITE_FIREBASE_APP_ID` | Yes | Firebase app ID | `1:123456789:web:abc...` |
| `VITE_GOOGLE_TTS_API_KEY` | No | Google Cloud TTS key (fallback) | `AIza...` |
| `VITE_TTS_PROVIDER` | No | TTS provider (`gemini` or `cloud`) | `gemini` |
| `VITE_TTS_SPEAKER` | No | Default TTS speaker | `callirrhoe` |
| `VITE_EMAIL_COLLECTION` | No | Firestore email collection | `mail` |
| `VITE_FROM_EMAIL` | No | From email address | `noreply@homecampus.ai` |
| `VITE_FROM_NAME` | No | From name | `Home Campus` |
| `VITE_SUPPORT_EMAIL` | No | Support email address | `support@homecampus.ai` |

### C. Security Checklist

- [ ] All API keys restricted to production domains
- [ ] Firestore rules tested and validated
- [ ] No secrets in git repository
- [ ] `.env` files in `.gitignore`
- [ ] HTTPS enforced (automatic with Firebase)
- [ ] Security headers configured (CSP, X-Frame-Options, etc.)
- [ ] CORS properly configured
- [ ] Rate limiting implemented for AI calls
- [ ] SQL injection N/A (NoSQL Firestore)
- [ ] XSS protection (React escapes by default)
- [ ] CSRF protection (Firebase handles)
- [ ] Email SPF/DKIM/DMARC configured

### D. Performance Optimization Checklist

- [ ] Bundle splitting configured
- [ ] Code splitting via lazy loading
- [ ] Image optimization (use WebP where possible)
- [ ] CDN enabled (Firebase Hosting has built-in CDN)
- [ ] Gzip/Brotli compression (automatic with Firebase)
- [ ] Cache headers configured
- [ ] Service worker for offline support (optional)
- [ ] Database queries optimized with indexes
- [ ] Firestore pagination for large lists
- [ ] Debouncing for search inputs
- [ ] Memoization for expensive computations

---

**Document Version:** 2.0.0
**Last Updated:** October 25, 2024
**Status:** Ready for Implementation
**Next Review:** After Phase 0 completion

---

*This deployment plan is a living document and should be updated as the project evolves.*
