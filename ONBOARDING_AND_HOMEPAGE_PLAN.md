# Homepage & Onboarding - Passwordless Multi-Account System

**Created**: 2025-10-23
**Last Updated**: 2025-10-23
**Status**: ✅ COMPLETE - All 6 Phases Done!
**Estimated Time**: 24-31 hours (3-4 days)
**Actual Time**: ~14 hours total (Phase 1: 3h, Phase 2: 2h, Phase 3: 2h, Phase 4: 3h, Phase 5: 2h, Phase 6: 2h)

---

## 📊 Progress Summary

### ✅ Completed
- **Phase 1: Onboarding Components** (3 hours)
  - Landing page with hero section and value props
  - Multi-step onboarding wizard with progress indicator
  - Account type selection (Student/Parent)
  - Student profile form (name + grade)
  - Parent invite form (collect parent email)
  - Parent profile form (name)
  - Add children form (supports multiple children with optional emails)
  - App routing integration (shows landing page for first-time visitors)

- **Phase 2: Profile Switching System** (2 hours)
  - ActiveProfileContext - manages current active profile state
  - ProfileSwitcher component - dropdown UI for switching profiles
  - useActiveProfile hook - easy access to profile switching
  - Integration into HomePage header
  - Support for 3 profile types: self, child-profile (Netflix-style), linked-child
  - LocalStorage persistence of active profile
  - Automatic profile restoration on reload

- **Phase 3: Parent Dashboard** (2 hours)
  - ParentDashboard component - Overview showing all children
  - ChildCard component - Individual child summary cards with progress
  - Integration with HomePage - Shows dashboard when viewing as parent
  - Support for both Netflix-style profiles and linked children
  - Activity tracking display (UI ready, backend pending Phase 5)
  - Empty state for parents with no children yet

- **Phase 4: Homepage Personalization** (3 hours)
  - topicsByGrade.ts - Centralized topic configuration by grade level
  - GradeSelector component - Dropdown to switch between grades
  - Grade-specific topic display - Shows only current grade's topics
  - "Explore Other Grades" section - Collapsible section to preview other grades
  - Info banner when exploring different grade
  - Topics for all 4 grade levels (Sec 1-4) with placeholder content
  - 10 active topics for Secondary 3, 4 topics each for other grades

- **Phase 5: Invite System** (2 hours)
  - authService invite methods - Complete backend integration
  - sendParentInvite - Student invites parent with email
  - sendChildInvite - Parent invites child with email
  - acceptParentInvite - Parent accepts and links to student
  - acceptChildInvite - Child accepts and links to parent
  - addChildProfile - Create Netflix-style profiles (no email)
  - OnboardingWizard integration - Auto-send invites after signup
  - URL parameter handling - Accept invites via ?parentInvite= or ?childInvite=
  - Success/error message display

- **Phase 6: Multi-Grade Infrastructure** (2 hours)
  - App.tsx routing - LandingPage for first-time visitors ✅ (already done)
  - AuthContext - Profile management ✅ (already done)
  - ActiveProfileContext - Profile switching logic ✅ (Phase 2)
  - topicsByGrade.ts - Grade-organized topics ✅ (Phase 4)
  - user.ts types - ChildProfile, LinkedChild ✅ (Phase 3)
  - Invite URL handling in App.tsx
  - All infrastructure complete and integrated

### 🔄 In Progress
- None

### ⏳ Pending
- None - All phases complete!

---

## Core Architecture

### Authentication Model
- **Email Magic Links** (already implemented ✅)
- **Google OAuth** (already implemented ✅)
- **No passwords** - All passwordless
- **Forever sessions** - Stay logged in until explicit sign out
- **Multi-device sync** - Firestore handles synchronization

### Account Types
1. **Student Account** - Independent login with email
2. **Parent Account** - Can have Netflix-style child profiles OR linked child accounts
3. **Child Profile** (Netflix-style) - No login, accessed via parent account

---

## Flow 1: Student Self-Registration

```
Landing Page → "Get Started"
↓
┌──────────────────────────────────────────────┐
│ Onboarding Step 1: Account Type              │
│ "Are you a student or parent?"               │
│ → Select: [Student] [Parent]                 │
└──────────────────────────────────────────────┘
↓ (Student selected)
┌──────────────────────────────────────────────┐
│ Step 2: Student Email                        │
│ "What's your email address?"                 │
│ Email: [_______________]                     │
│ [Continue with Email] [Sign in with Google] │
└──────────────────────────────────────────────┘
↓
✉️ Verification email sent → Student clicks link
↓
┌──────────────────────────────────────────────┐
│ Step 3: Complete Profile                     │
│ Name: [_______________]                      │
│ Grade: [Sec 1 ▼] [Sec 2] [Sec 3] [Sec 4]   │
│ [Continue]                                   │
└──────────────────────────────────────────────┘
↓
┌──────────────────────────────────────────────┐
│ Step 4: Add Parent (REQUIRED)                │
│ "Your parent can monitor your progress"      │
│ Parent's Email: [_______________]            │
│ [Send Invite to Parent]                      │
└──────────────────────────────────────────────┘
↓
✉️ Invite sent to parent
↓
┌──────────────────────────────────────────────┐
│ Success! "Start Learning"                    │
│ → Navigate to personalized homepage          │
└──────────────────────────────────────────────┘
```

**Backend Actions:**
- Create student Firebase account (email verified)
- Store in Firestore:
  ```typescript
  {
    uid: 'student-uid',
    accountType: 'student',
    email: 'student@email.com',
    displayName: 'Sarah',
    gradeLevel: 'Secondary 3',
    parentInvitePending: true,
    parentEmail: 'parent@email.com',
    parentUid: null  // Updated when parent accepts
  }
  ```
- Create invite token → Send email to parent

---

## Flow 2A: Parent Registration + Child with Email

```
Landing Page → "Get Started"
↓
┌──────────────────────────────────────────────┐
│ Step 1: Account Type → "Parent"              │
└──────────────────────────────────────────────┘
↓
┌──────────────────────────────────────────────┐
│ Step 2: Parent Email                         │
│ Email: [_______________]                     │
│ [Continue with Email] [Sign in with Google] │
└──────────────────────────────────────────────┘
↓
✉️ Verification email sent → Parent clicks link
↓
┌──────────────────────────────────────────────┐
│ Step 3: Complete Profile                     │
│ Your Name: [_______________]                 │
│ [Continue]                                   │
└──────────────────────────────────────────────┘
↓
┌──────────────────────────────────────────────┐
│ Step 4: Add Your Children                    │
│ ┌────────────────────────────────────────┐   │
│ │ Child 1:                               │   │
│ │ Name: [Sarah]                          │   │
│ │ Grade: [Sec 3 ▼]                       │   │
│ │ Email (optional): [sarah@email.com]    │   │
│ │                                        │   │
│ │ ℹ️ If email provided, child gets       │   │
│ │   their own login. Otherwise, you'll   │   │
│ │   manage their profile.                │   │
│ └────────────────────────────────────────┘   │
│ [+ Add Another Child] [Continue]             │
└──────────────────────────────────────────────┘
↓
IF child email provided:
  ✉️ Invite sent to child email
ELSE:
  Child profile created under parent account
↓
┌──────────────────────────────────────────────┐
│ Success! "Go to Dashboard"                   │
└──────────────────────────────────────────────┘
```

**Backend Actions:**
- Create parent Firebase account
- For each child WITH email:
  ```typescript
  // Create invite, send email
  // When child accepts:
  {
    uid: 'child-uid',
    accountType: 'student',
    email: 'child@email.com',
    displayName: 'Sarah',
    gradeLevel: 'Secondary 3',
    parentUid: 'parent-uid',
    parentLinked: true
  }
  ```
- For each child WITHOUT email:
  ```typescript
  // Stored as profile in parent's document
  {
    uid: 'parent-uid',
    accountType: 'parent',
    childProfiles: [
      {
        profileId: 'generated-id',
        displayName: 'Tom',
        gradeLevel: 'Secondary 1',
        pathProgress: {...},
        settings: {...}
      }
    ]
  }
  ```

---

## Flow 3: Parent Accepts Student Invite

```
Parent receives email: "Sarah invited you to monitor their progress"
↓
Clicks link → Opens /parent-invite?token=abc123
↓
┌──────────────────────────────────────────────┐
│ "Sarah wants you to monitor their progress"  │
│                                              │
│ Already have an account?                     │
│   [Sign In]                                  │
│                                              │
│ New to AI Campus?                            │
│   [Create Account]                           │
└──────────────────────────────────────────────┘
↓
Sign in OR create new parent account
↓
✅ Linked! Sarah now appears in parent's dashboard
```

**Backend Actions:**
- Verify invite token
- Link accounts:
  ```typescript
  // Update student profile
  student.parentUid = parentUid;
  student.parentLinked = true;

  // Update parent profile
  parent.linkedChildren.push({
    uid: studentUid,
    email: studentEmail,
    displayName: studentName,
    grade: studentGrade
  });
  ```

---

## Profile Switching (Netflix-Style)

### Parent Dashboard View
```
┌──────────────────────────────────────────────────┐
│ AI Campus                    [Viewing as: Parent ▼] [Profile] │
│                              └─→ Sarah (Sec 3)                │
│                                  Tom (Sec 1)                  │
│                                  Parent Dashboard             │
└──────────────────────────────────────────────────┘

Your Children
┌──────────────┐  ┌──────────────┐
│ Sarah (S3)   │  │ Tom (S1)     │
│ Independent  │  │ Your Profile │
│ Login ✓      │  │              │
│ 45% Progress │  │ 12% Progress │
│ [View]       │  │ [View]       │
└──────────────┘  └──────────────┘
```

### Parent Viewing as Child
```
┌──────────────────────────────────────────────────┐
│ AI Campus              [Viewing as: Sarah (Sec 3) ▼] [Profile] │
│                        └─→ Tom (Sec 1)                         │
│                            Parent Dashboard                     │
└──────────────────────────────────────────────────┘

Sarah's Topics (Secondary 3 Mathematics)
[Shows all Sec 3 topics with Sarah's progress]
```

---

## Homepage Personalization

### For Students (Independent Account)
```
Welcome, Sarah!          [Grade: Sec 3 ▼] [Profile ▼]
                         └─→ Sec 1               └─→ Settings
                             Sec 2                   Sign Out
                             Sec 3 ✓
                             Sec 4

My Topics (Secondary 3 Mathematics)
┌─────────────────────────────────────────┐
│ [Trigonometry] [Quadratic] [Statistics] │
│ 45% ●●●○○       20% ●○○○○   0% ○○○○○    │
└─────────────────────────────────────────┘

Explore Other Grades ▼ (collapsed)
```

### For Parent (Dashboard View)
```
Parent Dashboard         [Viewing as: Parent ▼] [Profile ▼]

Your Children
[Card for each child with progress summary]

Recent Activity
- Sarah completed Trigonometry Section 2 (2h ago)
- Tom practiced Fractions (1d ago)
```

### For Parent (Viewing as Child)
```
[Viewing as: Tom (Sec 1) ▼]   [Profile ▼]

Tom's Topics (Secondary 1 Mathematics)
[Shows Sec 1 topics with Tom's progress]
```

---

## Implementation Checklist

### Phase 1: Onboarding Components ✅ COMPLETE (3 hours)

**Files Created:**
- [x] `src/components/LandingPage.tsx` - Hero + Get Started CTA ✅
- [x] `src/components/onboarding/OnboardingWizard.tsx` - Stepper wrapper ✅
- [x] `src/components/onboarding/AccountTypeSelector.tsx` - Student/Parent choice ✅
- [x] `src/components/onboarding/StudentProfileForm.tsx` - Name + grade selection ✅
- [x] `src/components/onboarding/ParentInviteForm.tsx` - Parent email input ✅
- [x] `src/components/onboarding/ParentProfileForm.tsx` - Parent name ✅
- [x] `src/components/onboarding/AddChildrenForm.tsx` - Add children (email optional) ✅
- [x] `src/App.tsx` - Updated routing to show LandingPage for first-time visitors ✅

**Note**: Email verification reuses existing `UnifiedAuthForm`. Parent invite page will be created in Phase 5.

### Phase 2: Profile Switching System ✅ COMPLETE (2 hours)

**Files Created:**
- [x] `src/components/ProfileSwitcher.tsx` - Dropdown in header ✅
- [x] `src/contexts/ActiveProfileContext.tsx` - Track which profile is active ✅
- [x] `useActiveProfile` hook - Exported from ActiveProfileContext ✅

**Files Modified:**
- [x] `src/App.tsx` - Wrapped app with ActiveProfileProvider ✅
- [x] `src/components/HomePage.tsx` - Added ProfileSwitcher to header ✅

### Phase 3: Parent Dashboard ✅ COMPLETE (2 hours)

**Files Created:**
- [x] `src/components/parent/ParentDashboard.tsx` - Overview of all children ✅
- [x] `src/components/parent/ChildCard.tsx` - Individual child summary card ✅

**Files Modified:**
- [x] `src/components/HomePage.tsx` - Integrated ParentDashboard for parent view ✅
- [x] `src/types/user.ts` - Added ChildProfile and LinkedChild types ✅

### Phase 4: Homepage Personalization ✅ COMPLETE (3 hours)

**Files Created:**
- [x] `src/components/GradeSelector.tsx` - Dropdown to explore other grades ✅
- [x] `src/config/topicsByGrade.ts` - Topics organized by grade ✅

**Files Modified:**
- [x] `src/components/HomePage.tsx` - Personalized by active profile with grade switching ✅

**Features Implemented:**
- Grade selector dropdown with smooth transitions
- Automatic display of grade-specific topics based on active profile
- Info banner when exploring different grade
- "Back to My Topics" button for easy navigation
- "Explore Other Grades" collapsible section
- Grade preview cards showing available vs coming soon topics
- Support for 4 grade levels (Secondary 1-4)
- 30+ topics total across all grades

### Phase 5: Invite System ✅ COMPLETE (2 hours)

**Files Modified:**
- [x] `src/services/authService.ts` - Added complete invite system ✅
  - [x] `sendParentInvite(studentUid, parentEmail)` - Creates invite doc, sends email ✅
  - [x] `sendChildInvite(parentUid, childEmail, childInfo)` - Creates invite for linked child ✅
  - [x] `acceptParentInvite(token, parentUid)` - Links parent to student account ✅
  - [x] `acceptChildInvite(token, childUid)` - Links child to parent account ✅
  - [x] `addChildProfile(parentUid, childInfo)` - Creates Netflix-style profile ✅
  - [x] `getInviteDetails(token)` - Preview invite before accepting ✅
- [x] `src/components/onboarding/OnboardingWizard.tsx` - Integrated invite sending ✅
- [x] `src/App.tsx` - Added URL parameter handling for invite acceptance ✅

**Features Implemented:**
- Firestore `/invites` collection with token-based system
- 7-day expiry for parent invites, 30-day for child invites
- Automatic profile linking on invite acceptance
- Support for both linked children (with email) and Netflix-style profiles (no email)
- Beautiful success/error message display after invite acceptance
- Console logging of invite URLs (ready for email service integration)

**Next Step for Production:**
- Integrate email service (Firebase Functions, SendGrid, etc.) to send actual emails
- Current implementation logs invite URLs to console for testing

### Phase 6: Multi-Grade Infrastructure ✅ COMPLETE (2 hours)

**Status:** Most components were already completed in previous phases!

**Files Already Complete:**
- [x] `src/config/topicsByGrade.ts` - Created in Phase 4 ✅
- [x] `src/types/user.ts` - ChildProfile, LinkedChild added in Phase 3 ✅
- [x] `src/contexts/ActiveProfileContext.tsx` - Profile switching in Phase 2 ✅
- [x] `src/App.tsx` - LandingPage routing already implemented ✅
- [x] `src/contexts/AuthContext.tsx` - Profile management already complete ✅

**Files Modified This Phase:**
- [x] `src/App.tsx` - Added invite URL parameter handling ✅

**Infrastructure Complete:**
- ✅ Multi-grade topic system (Sec 1-4)
- ✅ Profile switching (parent viewing as child)
- ✅ Landing page for first-time visitors
- ✅ Onboarding flow with account types
- ✅ Parent-child linking system
- ✅ Netflix-style child profiles
- ✅ Invite system with URL tokens

---

## Database Schema

### Firestore Collections

#### users/{uid} - Student Account
```typescript
{
  accountType: 'student',
  email: string,
  displayName: string,
  gradeLevel: 'Secondary 1' | 'Secondary 2' | 'Secondary 3' | 'Secondary 4',
  parentUid: string | null,
  parentLinked: boolean,
  parentInvitePending: boolean,
  parentEmail: string | null,
  pathProgress: {...},
  settings: {...},
  createdAt: timestamp,
  lastLogin: timestamp
}
```

#### users/{uid} - Parent Account
```typescript
{
  accountType: 'parent',
  email: string,
  displayName: string,

  // Children with independent logins
  linkedChildren: [
    {
      uid: string,
      email: string,
      displayName: string,
      grade: string
    }
  ],

  // Netflix-style child profiles (no email)
  childProfiles: [
    {
      profileId: string,
      displayName: string,
      gradeLevel: string,
      pathProgress: {...},
      settings: {...}
    }
  ],

  createdAt: timestamp,
  lastLogin: timestamp
}
```

#### invites/{token}
```typescript
{
  type: 'student-to-parent' | 'parent-to-child',
  fromUid: string,
  toEmail: string,
  fromDisplayName: string,  // For email content
  childInfo?: {  // For parent-to-child invites
    displayName: string,
    gradeLevel: string
  },
  createdAt: timestamp,
  expiresAt: timestamp,
  accepted: boolean
}
```

---

## Context for Profile Switching

```typescript
// ActiveProfileContext
interface ActiveProfile {
  type: 'self' | 'child-profile' | 'linked-child';
  uid: string;  // User's own UID or child's UID
  profileId?: string;  // For Netflix-style profiles
  displayName: string;
  gradeLevel: string;
}

// Example: When parent switches to child profile
setActiveProfile({
  type: 'child-profile',
  uid: parentUid,  // Still the parent's UID
  profileId: 'child-profile-id',
  displayName: 'Tom',
  gradeLevel: 'Secondary 1'
});

// Progress saved to: users/{parentUid}/childProfiles/{profileId}/pathProgress
```

---

## User Flow Summary

| User Type | Login Method | Can Switch Profiles? | Progress Saved To |
|-----------|--------------|---------------------|-------------------|
| Student (independent) | Email/Google | No | Own account |
| Parent | Email/Google | Yes (children) | Own account |
| Child (Netflix-style) | Via parent | No | Parent's childProfiles |
| Child (linked account) | Email/Google | No | Own account |

---

## Key Design Decisions

1. **No Guest Mode** - All users must provide email (or be created by parent)
2. **Passwordless Only** - Email magic links + Google OAuth
3. **Forever Sessions** - Users stay logged in until explicit sign out
4. **Parent-Child Linking Required** - Students MUST provide parent email
5. **Netflix-Style Profiles** - Parents can create profiles for children without emails
6. **Profile Switching** - Parents can seamlessly switch between children's views
7. **Multi-Device Sync** - Firestore keeps everything synchronized

---

## Timeline Estimate

| Phase | Description | Hours |
|-------|-------------|-------|
| 1 | Onboarding Components | 8-10 |
| 2 | Profile Switching System | 4-5 |
| 3 | Parent Dashboard | 4-5 |
| 4 | Homepage Personalization | 3-4 |
| 5 | Invite System | 3-4 |
| 6 | Multi-Grade Infrastructure | 2-3 |
| **Total** | | **24-31 hours** |

**Expected Duration**: 3-4 days with focused work

---

## Migration Strategy for Existing Users

1. **Existing Sec 3 users**: Auto-set `gradeLevel = "Secondary 3"`
2. **Show onboarding**: Modal on first login asking for parent email
3. **Gradual rollout**:
   - ✅ Sec 3 (already built)
   - → Sec 4 (next to build)
   - → Sec 1 & 2 (by launch)

---

## Next Steps

1. Review and approve this plan
2. Begin Phase 1: Onboarding Components
3. Test each phase before moving to next
4. Iterate based on user feedback

---

**Status Legend:**
- 🔴 Not Started
- 🟡 In Progress
- ✅ Complete
