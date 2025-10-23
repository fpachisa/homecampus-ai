# Production Readiness Implementation Plan
**AI Campus - Sec 3 Maths MVP → Production Ready**

**Timeline**: 2-4 days with 3-4 developers working in parallel
**Last Updated**: 2025-10-23
**Status**: Phase 1 Authentication & Progress Persistence COMPLETED ✅

---

## Overview

Transform the working Sec 3 Maths MVP into a production-ready platform for real student pilot testing. Focus on reliability, user experience, and demo-readiness while avoiding scope creep.

## Developer Assignments

- **Developer A**: Authentication & Session Management
- **Developer B**: Error Handling & Reliability
- **Developer C**: Student Dashboard & Progress UI
- **Developer D**: Analytics & Teacher View

---

## 📊 Implementation Progress Summary

### ✅ Completed (2025-10-23)
- **Task 1.1: Error Handling & Reliability** - Global error boundaries, AI timeout handling, user-friendly error messages, toast notifications, loading states
- **Task 1.2: Authentication & User Management** - Fully functional auth system with theme integration
- **Firebase Configuration** - Email Link & Google Sign-In enabled and working
- **Task 1.3: Progress Persistence & State Management** - Complete auto-sync system with Firestore integration

### 🔴 Not Started
- Task 2.1: Student Onboarding Flow
- Task 2.2: Problem Experience Improvements
- Task 2.3: Responsive Design & Mobile Optimization
- Task 3.1: Student Dashboard
- Task 3.2: Analytics & Tracking
- Task 3.3: Parent View
- Task 4.1: Testing Coverage
- Task 4.2: Performance Optimization
- Task 4.3: Deployment Pipeline

### ⚠️ Issues Encountered During Implementation
1. **Task 1.2 - Form visibility**: Initial implementation had poor label contrast - fixed by changing to `textPrimary` and semibold fonts
2. **Task 1.2 - Theme integration**: Hardcoded colors (blue/gray) didn't match brand - required full refactor to use theme system
3. **Task 1.2 - User feedback**: "Not a good developer" - forms were confusing with invisible labels
4. **Task 1.2 - Time estimate**: Planned 8-10 hours, actual ~4 hours (but with multiple revision cycles for UX issues)
5. **Task 1.2 - Disabled button visibility**: "Continue with Email" button was invisible when disabled - fixed with opacity:1 and border/text color states
6. **Task 1.2 - Firebase configuration**: Required manual setup in Firebase Console (Email Link & Google Sign-In providers)

**Task 1.3 - Smooth Implementation**: No major issues encountered. Implementation went smoothly with clear separation of concerns.

**Task 1.1 - Error Handling Complete**: All components implemented successfully. Focus on honest error messages (no dummy fallbacks). Timeout handling prevents hanging requests.

### 📝 Lessons Learned
- Always use theme system from the start, never hardcode colors
- Test with actual users/screenshots before claiming "done"
- Form labels need high contrast and bold text to be readable
- Mobile responsiveness should be tested during development, not after
- **Service layer separation**: Keeping sync logic in dedicated service (progressSyncService) made integration clean
- **Dual-save strategy**: Maintaining backward compatibility (localStorage) while adding new features (Firestore) prevents breaking changes
- **Hooks for UI integration**: Custom hooks (useProgressSync, useSessionPersistence) provide clean abstraction between services and components
- **Guest-first approach**: Treating guest users as first-class citizens (with full localStorage persistence) makes sign-up migration seamless

---

## ✅ COMPLETED: Task 1.2 - Authentication & User Management

**What Was Built**:
- Complete Firebase authentication system (email/password, Google OAuth, anonymous guest mode)
- User profile management with Firestore integration
- Parent/Student account types with linking capability
- Full UI components (SignInForm, SignUpForm, AuthModal, ProfileMenu)
- Theme integration (all components follow existing color theme)
- Type definitions for User, UserProfile, SignUpData, SignInData

**Files Created**:
- `src/types/user.ts` - Complete type system
- `src/services/authService.ts` - Authentication service with Firebase
- `src/contexts/AuthContext.tsx` - Enhanced with full auth methods
- `src/components/auth/SignInForm.tsx` - Themed sign-in form
- `src/components/auth/SignUpForm.tsx` - Themed sign-up form with parent/student options
- `src/components/auth/AuthModal.tsx` - Modal wrapper
- `src/components/auth/ProfileMenu.tsx` - User menu dropdown
- `src/components/auth/index.ts` - Barrel export

**Files Modified**:
- `src/components/HomePage.tsx` - Integrated ProfileMenu and AuthModal

**Known Issues to Fix**:
- Form label visibility was initially poor (fixed with semibold + textPrimary)
- Input styling needed better contrast (fixed)
- Button colors didn't follow theme initially (fixed)

**Next Steps**: Error handling, session recovery UI polish

---

## ✅ COMPLETED: Task 1.3 - Progress Persistence & State Management

**What Was Built**:
- Complete progress persistence system with automatic syncing (30-second intervals)
- Firestore integration for authenticated users with cross-device sync
- localStorage persistence for guest users with full feature parity
- Automatic guest→authenticated data migration on sign-up
- Real-time sync status indicators ("Saving...", "Saved X ago", error states)
- Debounced saves (3s) to prevent excessive writes during active sessions
- Immediate saves on page unload to prevent data loss
- Resume session prompts with conversation restoration
- Dual-save strategy maintaining backward compatibility with existing localStorage system

**Files Created**:
- `src/types/progress.ts` - ProgressSnapshot, ConversationSnapshot, PracticePathState types
- `src/services/progressSyncService.ts` - Core sync service (400+ lines) with queue management
- `src/hooks/useProgressSync.ts` - React hook exposing sync functionality to components
- `src/components/ResumeSessionPrompt.tsx` - Modal for resuming saved sessions
- `src/components/SyncStatusIndicator.tsx` - Visual sync status component

**Files Modified**:
- `src/contexts/AuthContext.tsx` - Auto-sync lifecycle management (start on login, stop on logout)
- `src/hooks/useSessionPersistence.ts` - Dual-save to localStorage + Firestore
- `src/components/ChatInterface.tsx` - Integrated SyncStatusIndicator in header
- `src/services/pathProgressService.ts` - Added Firestore sync to practice progress saves
- `src/components/practice/PracticeSessionView.tsx` - Added sync status display

**Key Features**:
- Zero configuration required - works automatically for both guest and authenticated users
- Smart change detection - only saves when state actually changes (signature-based)
- Graceful degradation - falls back to localStorage if Firestore unavailable
- No progress lost on browser crash/close (beforeunload handlers)
- Cross-device sync for authenticated users
- Seamless guest migration preserves all conversation history and progress

**Next Steps**: Error handling & reliability improvements, session recovery UI polish

---

# Phase 1: Production Essentials (Priority: CRITICAL)

## ✅ Task 1.1: Error Handling & Reliability (COMPLETED)
**Owner**: Developer B
**Effort**: 6-8 hours (Actual: ~5 hours)
**Dependencies**: None
**Status**: ✅ COMPLETED (2025-10-23)

### Objectives
- ✅ Wrap all components in error boundaries
- ✅ Handle AI service failures gracefully
- ✅ Add loading states everywhere
- ⚠️ Session recovery (basic implementation complete, UI polish can be enhanced later)

### What Was Built

**Files Created**:
- `src/components/ErrorBoundary.tsx` - Global error boundary with themed UI, Try Again/Refresh/Home buttons
- `src/components/Toast.tsx` - Toast notification system with success/error/warning/info types
- `src/components/LoadingSpinner.tsx` - Comprehensive loading components (spinner, skeletons, specialized states)

**Files Modified**:
- `src/App.tsx` - Wrapped main routes in ErrorBoundary (AppContent, MainLayout, PracticeSessionView)
- `src/services/aiService.ts` - Added AI_ERROR_MESSAGES with user-friendly error text, getUserMessage() method
- `src/services/providers/GeminiProvider.ts` - Added 30-second timeout with withTimeout() helper
- `src/services/providers/ClaudeProvider.ts` - Added 30-second timeout with withTimeout() helper

**Key Features**:
- **Honest Error Communication**: All error messages are transparent ("AI tutor unavailable" not "Here's a hint...")
- **No Dummy Fallbacks**: Following user's philosophy - better to say "unavailable" than serve low-quality content
- **30-Second Timeout**: Prevents hanging requests on both Gemini and Claude providers
- **Comprehensive Loading States**: MessageSkeleton, CardSkeleton, TopicListSkeleton, ProblemLoading, SessionLoading
- **Theme Integration**: All components use theme system (dark/light mode support)
- **Development Mode Details**: Stack traces shown only in development, hidden in production

**Error Types Covered**:
- Rate Limit (429): "You're working very quickly! Please wait..."
- Service Unavailable (503): "AI tutor temporarily unavailable..."
- Timeout: "Request taking too long..."
- Network: "Connection lost. Check your internet..."
- Authentication: "Authentication issue. Contact support"
- Unknown: "Something went wrong. Progress saved."

### Technical Specification

#### 1.1.1: Global Error Boundary
**Files**: `learning-platform/src/components/ErrorBoundary.tsx` (new)

```typescript
// Create a global error boundary component
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  ErrorBoundaryState
> {
  // Implement componentDidCatch
  // Log errors to console (or Sentry in future)
  // Show user-friendly error message
  // Provide "Reset Session" button
}
```

**Acceptance Criteria**:
- [x] All routes wrapped in ErrorBoundary ✅
- [x] User sees friendly message, not stack traces ✅
- [x] "Try Again" and "Refresh Page" buttons work ✅
- [x] Errors logged to console with context ✅
- [x] **BONUS**: Stack trace shown only in development mode

#### 1.1.2: AI Service Error Handling
**Files**:
- `learning-platform/src/services/BaseAIService.ts`
- `learning-platform/src/services/FallbackAIService.ts`

**Implementation**:
```typescript
// Add user-friendly error messages
const AI_ERROR_MESSAGES = {
  network: "Connection lost. Please check your internet and try again.",
  rateLimit: "Too many requests. Please wait a moment and try again.",
  apiError: "Our AI tutor is having trouble. Please try again in a moment.",
  timeout: "Request took too long. Please try again.",
  unknown: "Something went wrong. Please try again."
};

// Add timeout handling (30 seconds max)
// Add exponential backoff for retries
// Show loading spinner during retry
// Display specific error message to user
```

**Acceptance Criteria**:
- [x] All API errors show user-friendly messages ✅
- [ ] Automatic retry with exponential backoff (max 3 attempts) - NOT IMPLEMENTED (can be added later if needed)
- [x] 30-second timeout on all AI requests ✅
- [x] Loading states created (LoadingSpinner, skeletons) ✅
- [x] Gemini → Claude fallback still works ✅
- [x] **BONUS**: Toast notification system for error display ✅
- [x] **BONUS**: Error messages include actionable guidance (e.g., "Check connection and retry") ✅

#### 1.1.3: Session Recovery
**Files**:
- `learning-platform/src/hooks/useSessionRecovery.ts` (new)
- `learning-platform/src/components/SessionRecoveryPrompt.tsx` (new)

**Implementation**:
```typescript
// Save conversation state to localStorage every 30 seconds
// On app load, check for saved session
// Prompt user: "Resume previous session or start new?"
// Restore full conversation state if user chooses resume

interface SavedSession {
  timestamp: number;
  conversationState: ConversationState;
  topicId: string;
  sectionIndex: number;
}
```

**Acceptance Criteria**:
- [x] Session auto-saves every 30 seconds ✅ (Implemented in Task 1.3)
- [x] On refresh, user prompted to resume ✅ (ResumeSessionPrompt component created)
- [x] Full state restored (messages, progress, hints) ✅ (Implemented in Task 1.3)
- [ ] Old sessions (>7 days) auto-deleted - NOT IMPLEMENTED (can be added later)
- [x] Works across browser restarts ✅ (localStorage + Firestore sync)

#### 1.1.4: Loading States
**Files**: `learning-platform/src/components/LoadingSpinner.tsx` (enhance existing)

**Add loading states for**:
- AI response generation (with estimated time)
- Curriculum loading
- Problem generation
- Session restoration
- User authentication

**Acceptance Criteria**:
- [x] Loading spinner component created ✅
- [x] Skeleton screens for initial load ✅ (MessageSkeleton, CardSkeleton, TopicListSkeleton)
- [x] Progress indicators for long operations ✅ (ProblemLoading, SessionLoading)
- [x] Specialized loading states (dots animation, bounce animation) ✅
- [ ] Integrated into all views (ChatInterface, PracticeSessionView) - Can be done in follow-up

---

## ✅ Task 1.2: Authentication & User Management (COMPLETED)
**Owner**: Developer A
**Effort**: 8-10 hours (Actual: ~4 hours)
**Dependencies**: None
**Status**: ✅ COMPLETED with theme integration

### Objectives
- ✅ Implement Firebase authentication
- ✅ Create user profiles with progress tracking
- ✅ Add guest mode for demos
- ✅ Persist user sessions

### Technical Specification

#### 1.2.1: Firebase Auth Setup
**Files**:
- `learning-platform/src/services/authService.ts` (new)
- `learning-platform/src/contexts/AuthContext.tsx` (new)

**Implementation**:
```typescript
// Firebase config already in .env (VITE_FIREBASE_*)
// Implement authentication methods:
// - Email/Password signup and login
// - Google Sign-In (optional but recommended)
// - Anonymous/Guest mode

interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  isGuest: boolean;
  createdAt: string;
  lastLogin: string;
}

// Auth service methods:
// - signUp(email, password, displayName)
// - signIn(email, password)
// - signInWithGoogle()
// - signInAsGuest()
// - signOut()
// - getCurrentUser()
// - onAuthStateChanged(callback)
```

**Acceptance Criteria**:
- [x] Users can sign up with email/password
- [x] Users can log in with existing accounts
- [x] Google Sign-In works
- [x] Guest mode creates anonymous session
- [x] Sessions persist across page refreshes
- [x] Sign out clears all user data
- [x] **BONUS**: Full theme integration (all forms/buttons follow color scheme)
- [x] **BONUS**: Parent account creation with student linkage

#### 1.2.2: User Profile & Progress Storage
**Files**:
- `learning-platform/src/services/userProgressService.ts` (new)
- `learning-platform/src/types/user.ts` (new)

**Implementation**:
```typescript
// Store in Firestore (or localStorage for MVP)
interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  gradeLevel: string; // e.g., "Secondary 3"
  pathProgress: {
    [pathId: string]: {
      completedTopics: string[];
      currentTopicId: string;
      currentSectionIndex: number;
      lastAccessedAt: string;
      timeSpentMinutes: number;
    };
  };
  settings: {
    ttsSpeaker: string;
    theme: 'light' | 'dark';
  };
}

// Methods:
// - createUserProfile(user)
// - getUserProfile(uid)
// - updateProgress(uid, pathId, progress)
// - getPathProgress(uid, pathId)
```

**Acceptance Criteria**:
- [x] User profile created on first sign-up
- [ ] Progress saved after each completed problem (NOT IMPLEMENTED - Task 1.3)
- [ ] Progress syncs across devices (if using Firestore) (NOT IMPLEMENTED - Task 1.3)
- [x] User can see their profile info (in ProfileMenu)
- [ ] Guest progress saved to localStorage (NOT IMPLEMENTED - Task 1.3)

#### 1.2.3: Auth UI Components
**Files**:
- `learning-platform/src/components/auth/SignInForm.tsx` (new)
- `learning-platform/src/components/auth/SignUpForm.tsx` (new)
- `learning-platform/src/components/auth/AuthModal.tsx` (new)
- `learning-platform/src/components/auth/ProfileMenu.tsx` (new)

**Implementation**:
- Modal-based auth forms (not separate pages)
- Sign In form with email/password fields
- Sign Up form with name, email, password, confirm password
- "Continue as Guest" button on both forms
- Profile dropdown in header (user name, sign out)
- Form validation and error display

**Acceptance Criteria**:
- [x] Clean, simple auth forms
- [x] Form validation (email format, password strength)
- [x] Error messages for failed auth
- [x] Guest mode clearly explained
- [x] Profile menu shows user name and sign out option
- [x] All forms themed with brand colors
- [x] Labels visible and readable
- [x] Mobile-responsive

#### 1.2.4: Protected Routes & Auth Flow
**Files**:
- `learning-platform/src/App.tsx` (modify)
- `learning-platform/src/components/ProtectedRoute.tsx` (new)

**Implementation**:
```typescript
// Wrap learning routes with authentication check
// On unauthenticated access:
// - Show auth modal
// - Allow guest mode
// - Redirect to last page after sign in

// Landing page (new, optional):
// - Hero section with value prop
// - "Start Learning" CTA (opens auth modal)
// - "Try as Guest" button
```

**Acceptance Criteria**:
- [ ] Learning routes require auth or guest mode (NOT IMPLEMENTED - all routes currently open)
- [x] Auth modal accessible from header
- [ ] After sign in, user returns to intended page (NOT IMPLEMENTED)
- [x] Guest users have full functionality (no sync)

**NOTE**: Protected routes not implemented - may not be needed if all content is free

---

## ✅ Task 1.3: Progress Persistence & State Management (COMPLETED)
**Owner**: Developer A (after auth complete)
**Effort**: 4-6 hours (Actual: ~6 hours)
**Dependencies**: Task 1.2 (Authentication) ✅
**Status**: ✅ COMPLETED (2025-10-23)

### Objectives
- ✅ Save all conversation and progress data
- ✅ Sync across devices (authenticated users)
- ✅ Enable resume from any point
- ✅ Guest mode with localStorage persistence
- ✅ Automatic guest data migration when signing up

### What Was Built

**Files Created**:
- `src/types/progress.ts` - Type definitions for ProgressSnapshot, ConversationSnapshot
- `src/services/progressSyncService.ts` - 400+ line sync service with auto-save (30s interval)
- `src/hooks/useProgressSync.ts` - React hook for components to access sync functionality
- `src/components/ResumeSessionPrompt.tsx` - Modal UI for resuming saved sessions
- `src/components/SyncStatusIndicator.tsx` - Real-time sync status display ("Saving...", "Saved X ago")

**Files Modified**:
- `src/contexts/AuthContext.tsx` - Integrated auto-sync start/stop on login/logout, guest migration
- `src/hooks/useSessionPersistence.ts` - Enhanced to dual-save (localStorage + Firestore)
- `src/components/ChatInterface.tsx` - Added SyncStatusIndicator to header
- `src/services/pathProgressService.ts` - Added Firestore sync to saveUnifiedProgress()
- `src/components/practice/PracticeSessionView.tsx` - Integrated sync status display

### Technical Specification

#### 1.3.1: Progress Sync Service ✅
**Files**:
- `learning-platform/src/services/progressSyncService.ts` ✅
- Integrated with `pathProgressService.ts` ✅

**Implementation**:
```typescript
// Auto-save progress every 30 seconds + debounced saves (3s for Socratic)
// Immediate saves on page unload

interface ProgressSnapshot {
  uid: string;
  timestamp: string;
  conversationState?: ConversationSnapshot;
  practiceState?: { [category: string]: PracticePathState };
  settings?: { ttsSpeaker: string; theme: 'light' | 'dark'; audioEnabled: boolean };
}

// Key Methods Implemented:
// - startAutoSync(uid: string | null) - Starts 30s interval sync
// - stopAutoSync() - Stops auto-sync
// - queueSave(snapshot) - Debounced save
// - saveNow(snapshot) - Immediate save
// - loadProgress(uid) - Load full progress
// - saveConversationState(uid, conversation) - Save Socratic session
// - savePracticeState(uid, category, state) - Save practice progress
// - migrateGuestProgress(guestData, newUid) - Transfer guest→authenticated
// - loadGuestData() - Retrieve guest localStorage
// - clearGuestData() - Clean up after migration
```

**Acceptance Criteria**:
- [x] Progress saves automatically (no manual save button)
- [x] Authenticated users: saved to Firestore
- [x] Guest users: saved to localStorage
- [x] Full conversation history preserved
- [x] Progress loads on app start
- [x] No progress lost on unexpected close (beforeunload handler)
- [x] **BONUS**: Visual sync status indicator in UI
- [x] **BONUS**: Guest data automatically migrates when signing up
- [x] **BONUS**: Dual-save strategy (localStorage for backward compatibility + Firestore)

---

# Phase 2: UX Polish (Priority: HIGH)

## Task 2.1: Progressive Onboarding Flow (REDESIGNED)
**Owner**: Developer C
**Effort**: 12-16 hours (3 phases: Quick Win 4h, Full Flow 8h, Polish 4h)
**Dependencies**: Task 1.2 (Authentication) ✅, Task 1.3 (Progress persistence)
**Status**: 🔴 NOT STARTED
**Philosophy**: **"Try First, Commit Later"** - Prove value before asking for anything

### New Onboarding Strategy
Instead of upfront sign-up wall, use progressive approach:
1. **Guest mode by default** - Immediate access to topics and problems
2. **Sign-up trigger** - After first problem success or 3rd problem attempt
3. **Minimal sign-up** - Email/password/Google + account type only
4. **Deferred wizard** - Collect grade level after 2-3 more problems
5. **Never interrupt learning** - All info collection happens between problems

### Objectives
- Zero friction to first problem (no sign-up required)
- Smart sign-up prompts after proving value
- Simplified sign-up form (remove grade level)
- Deferred onboarding wizard (collect remaining info later)
- Guest→authenticated migration (preserve all progress)

### Technical Specification

#### 2.1.1: Guest Mode Enablement (Phase 1 - Quick Win)
**Files**:
- `learning-platform/src/components/HomePage.tsx` (modify - remove auth requirement)
- `learning-platform/src/services/guestSessionService.ts` (new)
- `learning-platform/src/components/SaveProgressBanner.tsx` (new)

**Implementation**:
```typescript
// 1. Make HomePage fully accessible without auth
// - Remove any auth checks from topic selection
// - Allow guest users to click topics and start learning
// - Track guest sessions with anonymous ID in localStorage

// 2. Guest session service
interface GuestSession {
  guestId: string;  // UUID
  startedAt: string;
  problemsAttempted: number;
  problemsSolved: number;
  currentTopicId: string;
  conversationState: ConversationState;  // Saved to localStorage
}

// 3. Save Progress Banner (shown after 1st correct problem)
// - Non-intrusive top banner
// - "🎉 Great work! Sign up to save your progress and unlock more topics"
// - [Save My Progress] [Maybe Later] buttons
// - If "Maybe Later", show again after 3rd problem or 10 minutes
```

**Acceptance Criteria**:
- [ ] Guest users can access all topics without sign-up
- [ ] Guest sessions tracked with anonymous ID
- [ ] Progress saved to localStorage for guests
- [ ] Banner shows after first successful problem
- [ ] Banner dismissible, re-shows intelligently
- [ ] "Sign In" button remains in header but not intrusive

#### 2.1.2: Simplified Sign-Up Flow (Phase 1)
**Files**:
- `learning-platform/src/components/auth/SignUpForm.tsx` (modify - simplify)
- `learning-platform/src/hooks/useGuestMigration.ts` (new)
- `learning-platform/src/components/SignUpSuccessCelebration.tsx` (new)

**Implementation**:
```typescript
// 1. Simplify SignUpForm
// - Remove grade level field (moved to onboarding wizard)
// - Remove "add student now" checkbox (moved to parent wizard)
// - Keep: email, password, confirm password, parent/student selector
// - Add celebratory messaging: "Almost there! Just 2 quick questions..."

// 2. Guest migration hook
// - When guest signs up, migrate localStorage data to Firestore
// - Transfer conversation state, progress, problems solved
// - Clear guest session data after migration

// 3. Post-signup celebration
// - Quick "Success! Your progress is saved!" message
// - Auto-close after 2 seconds
// - Return to exact problem they were on
```

**Acceptance Criteria**:
- [ ] Sign-up form simplified (only email/password + account type)
- [ ] Guest data automatically migrates to authenticated account
- [ ] User returns to exact same problem after sign-up
- [ ] Celebration message shows briefly
- [ ] No interruption to learning flow

#### 2.1.3: Deferred Onboarding Wizard (Phase 2 - Full Flow)
**Files**:
- `learning-platform/src/components/onboarding/OnboardingWizard.tsx` (new)
- `learning-platform/src/components/onboarding/GradeLevelSelector.tsx` (new)
- `learning-platform/src/components/onboarding/ParentWizard.tsx` (new)
- `learning-platform/src/hooks/useOnboardingTrigger.ts` (new)

**Implementation**:
```typescript
// 1. Trigger logic - When to show onboarding wizard
const shouldShowOnboarding = (user: User, userProfile: UserProfile) => {
  if (userProfile.onboardingComplete) return false;

  // Don't show immediately after signup
  const signedUpRecently = (Date.now() - userProfile.createdAt) < 60000;
  if (signedUpRecently) return false;

  // Show after 3 problems or 2nd session
  return userProfile.problemsCompleted >= 3 || userProfile.sessionCount >= 2;
};

// 2. Onboarding Wizard Modal
// Screen 1 (Students): Grade Level Selection
// - "Personalize Your Learning - Which grade are you in?"
// - Grid of grade buttons (Primary 1-6, Secondary 1-5)
// - [Continue] [Skip for now]

// Screen 2 (Parents): Add Child (Optional)
// - "Add Your Child"
// - Child's name + grade level
// - [Add Student] [I'll Do This Later]

// 3. After completion
// - Save onboardingComplete: true to profile
// - Show personalized topic recommendations
// - Return to learning
```

**Acceptance Criteria**:
- [ ] Wizard shows after 3 problems OR 2nd session
- [ ] Never shows immediately after sign-up
- [ ] Single-screen for students (grade level only)
- [ ] Two-screen for parents (grade + optional child)
- [ ] Skippable at any point
- [ ] Never shows again after completion
- [ ] Returns user to exact problem/topic they were on

#### 2.1.4: Smart Sign-Up Prompts (Phase 2)
**Files**:
- `learning-platform/src/components/BeforeUnloadPrompt.tsx` (new)
- `learning-platform/src/components/FeatureUnlockPrompt.tsx` (new)

**Implementation**:
```typescript
// 1. Browser unload detection
// - Detect when guest user tries to leave/close tab
// - Show browser confirmation: "You have unsaved progress!"
// - Option to sign up in modal

// 2. Feature unlock prompts
// - After 3-4 problems: "Sign up to unlock unlimited topics"
// - When trying 4th topic: "Create account to access all topics"
// - Parent dashboard click: "Sign up as parent to monitor progress"

// 3. Smart timing
// - Track engagement level (time spent, problems solved)
// - Show prompts when engagement is high
// - Respect user dismissals (don't spam)
```

**Acceptance Criteria**:
- [ ] Before-unload prompt shows for active guest sessions
- [ ] Feature unlock prompts contextual and relevant
- [ ] Prompts respect dismissals (max 3 times per session)
- [ ] All prompts include "Maybe Later" option
- [ ] Analytics track prompt→conversion rates

---

## Task 2.2: Problem Experience Improvements
**Owner**: Developer C (parallel with 2.1)
**Effort**: 6-8 hours
**Dependencies**: None

### Objectives
- Better hint and solution UX
- Clearer problem status indicators
- Enhanced visual tool integration
- Mobile-optimized input

### Technical Specification

#### 2.2.1: Enhanced Hint System
**Files**:
- `learning-platform/src/components/HintButton.tsx` (enhance existing)
- `learning-platform/src/components/HintHistory.tsx` (new)

**Implementation**:
```typescript
// Hint button improvements:
// - Show hint count: "Hint (2 used)"
// - Disable if no more hints available
// - Confirmation dialog: "This will use a hint. Continue?"
// - Show estimated wait time: "Getting hint... (~5 seconds)"

// Hint history sidebar:
// - List all hints for current problem
// - Collapsible/expandable
// - Visual indicator of which hint was most recent
// - Clear distinction from tutor conversation
```

**Acceptance Criteria**:
- [ ] Hint count always visible
- [ ] User confirms before requesting hint
- [ ] All previous hints accessible
- [ ] Hints visually distinct from other messages
- [ ] Loading state during hint generation




#### 2.2.4: Mobile-Optimized Math Input
**Files**:
- `learning-platform/src/components/MathInput.tsx` (enhance existing)

**Implementation**:
```typescript
// Mobile keyboard improvements:
// - Custom math symbol keyboard above system keyboard
// - Quick access buttons: π, √, ², ³, °, θ, ±, ×, ÷, ≤, ≥
// - Fraction button: a/b
// - Degree/radian toggle
// - Clear visual feedback on symbol insertion

// Desktop improvements:
// - Keyboard shortcuts (shift+6 for ^, alt+p for π)
// - Auto-suggest common math symbols
// - LaTeX preview as you type
```

**Acceptance Criteria**:
- [ ] Custom math keyboard on mobile
- [ ] All common symbols accessible
- [ ] LaTeX preview shows formatted math
- [ ] Input field large enough for complex expressions
- [ ] Works on iOS and Android

---

## Task 2.3: Responsive Design & Mobile Optimization
**Owner**: Developer C (final task)
**Effort**: 6-8 hours
**Dependencies**: Tasks 2.1, 2.2

### Objectives
- Fully responsive layout (mobile, tablet, desktop)
- Touch-optimized interactions
- Readable fonts and spacing
- Optional dark mode

### Technical Specification

#### 2.3.1: Responsive Layout System
**Files**:
- `learning-platform/src/index.css` (enhance Tailwind config)
- All component files (add responsive classes)

**Implementation**:
```typescript
// Breakpoints (Tailwind default):
// - sm: 640px (mobile landscape)
// - md: 768px (tablet portrait)
// - lg: 1024px (tablet landscape / small desktop)
// - xl: 1280px (desktop)

// Layout patterns:
// Mobile (< 768px):
// - Single column
// - Hamburger menu
// - Full-width components
// - Bottom navigation for key actions

// Tablet (768px - 1024px):
// - Two columns (chat + tools)
// - Collapsible sidebar
// - Larger touch targets

// Desktop (> 1024px):
// - Three columns (sidebar + chat + tools/hints)
// - Fixed header
// - Spacious layout
```

**Acceptance Criteria**:
- [ ] Tested on mobile (375px, 414px widths)
- [ ] Tested on tablet (768px, 1024px widths)
- [ ] Tested on desktop (1280px, 1920px widths)
- [ ] No horizontal scrolling on any breakpoint
- [ ] All interactive elements accessible on touch

#### 2.3.2: Touch Optimization
**Files**:
- All interactive components

**Implementation**:
```typescript
// Touch target sizes (minimum 44x44px per Apple HIG)
// - Buttons: min 44px height
// - Links: min 44px clickable area
// - Form inputs: min 44px height
// - Math tool controls: larger hit areas

// Touch gestures:
// - Swipe left/right to navigate sections (optional)
// - Pull down to refresh conversation
// - Pinch to zoom visual tools
// - Long press for context menus (optional)

// Visual feedback:
// - Hover states (desktop)
// - Active/pressed states (mobile)
// - Ripple effect on tap
```

**Acceptance Criteria**:
- [ ] All buttons at least 44px tall
- [ ] No accidental taps (adequate spacing)
- [ ] Visual feedback on all interactions
- [ ] Tested on iOS Safari and Android Chrome

#### 2.3.3: Typography & Readability
**Files**:
- `learning-platform/src/index.css`
- `learning-platform/tailwind.config.js`

**Implementation**:
```typescript
// Font system:
// - Base size: 16px (1rem)
// - Scale: 1.25 (major third)
// - Headings: 1.25rem, 1.5rem, 1.875rem, 2.25rem
// - Body: 1rem (16px)
// - Small: 0.875rem (14px)
// - Math: 1.125rem (18px) for better readability

// Line height:
// - Headings: 1.2
// - Body: 1.6
// - Math expressions: 1.8

// Color contrast:
// - WCAG AA minimum (4.5:1 for normal text)
// - WCAG AAA preferred (7:1 for normal text)
```

**Acceptance Criteria**:
- [ ] All text readable at arm's length on mobile
- [ ] Sufficient contrast ratios (pass WCAG AA)
- [ ] Comfortable line length (45-75 characters)
- [ ] Math expressions clearly rendered


---

# Phase 3: Demo-Ready Features (Priority: MEDIUM-HIGH)

## Task 3.1: Student Dashboard
**Owner**: Developer C
**Effort**: 8-10 hours
**Dependencies**: Task 1.2 (Authentication), Task 1.3 (Progress persistence)

### Objectives
- Visual overview of all topics and progress
- Engagement metrics (time spent, streaks)
- Achievement system
- Navigation hub for learning

### Technical Specification

#### 3.1.1: Dashboard Layout
**Files**:
- `learning-platform/src/pages/Dashboard.tsx` (new)
- `learning-platform/src/components/dashboard/DashboardLayout.tsx` (new)

**Implementation**:
```typescript
// Layout sections:
// 1. Header:
//    - "Welcome back, [Name]!"
//    - Current streak: "5 days in a row 🔥"
//    - Last accessed: "Trigonometry - Section 2"
//    - "Continue Learning" button

// 2. Progress Overview:
//    - Overall progress: "3/8 topics completed"
//    - Time spent this week: "2h 15m"
//    - Problems solved: "47 total"
//    - Mastery rate: "85% correct"

// 3. Topics Grid:
//    - Visual cards for each path/topic
//    - Progress ring (circular progress indicator)
//    - Status badge: "In Progress", "Completed", "Not Started"
//    - Click to continue learning

// 4. Recent Activity (optional):
//    - Last 5 problems solved
//    - Achievements unlocked
```

**Acceptance Criteria**:
- [ ] Clean, modern dashboard design
- [ ] All metrics update in real-time
- [ ] Quick navigation to any topic
- [ ] Mobile-responsive layout
- [ ] Loading states for data fetch

#### 3.1.2: Progress Metrics Components
**Files**:
- `learning-platform/src/components/dashboard/ProgressCard.tsx` (new)
- `learning-platform/src/components/dashboard/ProgressRing.tsx` (new)
- `learning-platform/src/components/dashboard/StreakDisplay.tsx` (new)

**Implementation**:
```typescript
// ProgressCard: Reusable metric display
interface ProgressCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: string; // e.g., "+5 this week"
  color: 'blue' | 'green' | 'purple' | 'orange';
}

// ProgressRing: Circular progress indicator
// - SVG-based circular progress
// - Percentage in center
// - Smooth animations
// - Color-coded by progress (red < 30%, yellow 30-70%, green > 70%)

// StreakDisplay: Gamified streak counter
// - Fire emoji for active streaks
// - Calendar view of last 7 days
// - Motivational message: "Keep it up!", "You're on fire!"
```

**Acceptance Criteria**:
- [ ] All cards show real data from user profile
- [ ] Progress rings animate on page load
- [ ] Streak calculates correctly (consecutive days)
- [ ] Responsive on all screen sizes

#### 3.1.3: Topic Cards with Progress
**Files**:
- `learning-platform/src/components/dashboard/TopicCard.tsx` (new)

**Implementation**:
```typescript
interface TopicCardProps {
  topicId: string;
  title: string;
  description: string;
  progress: number; // 0-100
  status: 'not-started' | 'in-progress' | 'completed';
  lastAccessed?: string;
  estimatedTime?: string; // "~2 hours to complete"
}

// Visual design:
// - Large card with topic icon/illustration
// - Progress ring in corner
// - Status badge
// - "Continue" or "Start" button
// - Time estimate
// - Hover effect (desktop)
// - Tap animation (mobile)
```

**Acceptance Criteria**:
- [ ] Cards visually appealing
- [ ] Progress accurate from saved data
- [ ] Click navigates to topic learning interface
- [ ] Last accessed time displayed
- [ ] Completed topics show checkmark



## Task 3.2: Analytics & Tracking
**Owner**: Developer D
**Effort**: 6-8 hours
**Dependencies**: Task 1.2 (Authentication)

### Objectives
- Track student learning behavior
- Provide data for improvement
- Enable teacher insights (Phase 3.3)
- Export data for external analysis

### Technical Specification

#### 3.2.1: Event Tracking Service
**Files**:
- `learning-platform/src/services/analyticsService.ts` (new)
- `learning-platform/src/types/analytics.ts` (new)

**Implementation**:
```typescript
// Track key events:
// - problem_started
// - problem_completed
// - hint_requested
// - solution_viewed
// - section_completed
// - topic_completed
// - answer_submitted (correct/incorrect)
// - session_started
// - session_ended

interface AnalyticsEvent {
  eventType: string;
  uid: string;
  timestamp: string;
  pathId: string;
  topicId: string;
  sectionIndex?: number;
  metadata: Record<string, any>; // event-specific data
}

// Methods:
// - trackEvent(event: AnalyticsEvent)
// - getUserEvents(uid, startDate, endDate)
// - getTopicEvents(topicId, startDate, endDate)
// - getEventsByType(eventType, startDate, endDate)

// Storage: Firestore collection "analytics_events"
// or localStorage for guest users (no server yet)
```

**Acceptance Criteria**:
- [ ] All key events tracked automatically
- [ ] Events include full context (topic, section, timestamp)
- [ ] No events lost (reliable storage)
- [ ] Query interface for retrieving events
- [ ] Privacy-compliant (no PII in events)

#### 3.2.2: Student Analytics Dashboard
**Files**:
- `learning-platform/src/components/analytics/StudentAnalytics.tsx` (new)
- `learning-platform/src/components/analytics/AnalyticsChart.tsx` (new)

**Implementation**:
```typescript
// Add "My Progress" tab to student dashboard

// Metrics to display:
// 1. Time spent per topic (bar chart)
// 2. Accuracy over time (line chart)
// 3. Hints used per problem (average)
// 4. Solutions viewed count
// 5. Problems solved per day (activity heatmap, GitHub-style)
// 6. Mastery levels per topic (radar chart)

// Use simple charting library: recharts or chart.js
```

**Acceptance Criteria**:
- [ ] Charts render with real user data
- [ ] Responsive and mobile-friendly
- [ ] Date range selector (week, month, all time)
- [ ] Export data as CSV button
- [ ] Loading states while computing metrics


---

## Task 3.3: Parent View (Lightweight)
**Owner**: Developer D
**Effort**: 8-10 hours
**Dependencies**: Task 3.2 (Analytics)

### Objectives
- Allow parents to monitor child progress
- Generate reports

### Technical Specification

#### 3.3.1: Parent Account Setup (during onboarding ask if parent or student, if parent then ask student details and vice versa)

#### 3.3.2: Parent Dashboard


---

# Quick Wins for Immediate Demo Impact

## Quick Win 1: Enable Guest Mode & Save Progress Banner
**Effort**: 4 hours
**Priority**: HIGH - Implement immediately after auth system

**What to Build**:
1. Remove auth requirement from HomePage
2. Create `guestSessionService.ts` for guest tracking
3. Create `SaveProgressBanner.tsx` component
4. Add trigger logic (show after 1st correct problem)

**Why This First**:
- Biggest UX improvement (zero friction to try)
- Enables all users to experience value immediately
- Foundation for rest of onboarding flow

## Quick Win 2: Celebration Animations
**Effort**: 2 hours
**Use**: canvas-confetti library

```typescript
import confetti from 'canvas-confetti';

function celebrateCompletion() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}
```

Trigger on:
- Section completion
- Topic completion
- Achievement unlock

## Quick Win 3: Progress Visualization
**Effort**: 2 hours
**Component**: Progress ring on topic cards

Make progress highly visible:
- Large progress rings
- Percentage numbers
- Color coding (red/yellow/green)
- Animated transitions

## Quick Win 4: Loading Skeletons
**Effort**: 2 hours
**Library**: Use Tailwind's animate-pulse

Replace spinners with content-shaped skeletons:
- Dashboard cards skeleton
- Topic list skeleton
- Message bubbles skeleton

More professional appearance.

## Quick Win 5: Error Messages
**Effort**: 1 hour
**Component**: Toast notifications

User-friendly error toasts:
- "Connection lost. Retrying..."
- "That didn't work. Let's try again."
- Auto-dismiss after 5 seconds
- Retry button

**Let's build something amazing! 🚀**
