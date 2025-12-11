# Account Architecture Review: Dual Mode Functionality Analysis

**Date:** 2025-12-11
**Objective:** Ensure identical functionality between Netflix-style and separate account modes, differing only in access method

---

## Executive Summary

The AI Campus application implements two distinct account architectures:

1. **Netflix-Style Mode** (child-profile): Child uses parent's account with profile switching
2. **Separate Accounts Mode** (linked-child): Child and parent have independent Firebase accounts

### Overall Assessment: ⚠️ **MOSTLY FUNCTIONAL WITH CRITICAL GAPS**

**Key Findings:**
- ✅ **Progress tracking, analytics, and learning functionality are identical** across both modes
- ✅ **Active profile switching mechanism works correctly**
- ❌ **Settings page does NOT respect active profile** - always shows parent's settings
- ❌ **Profile menu displays logged-in user, not active profile**
- ⚠️ **Subscription management unclear for linked children**

---

## 1. Architecture Overview

### Mode 1: Netflix-Style Profile (child-profile)

**Authentication:** Uses parent's Firebase Auth token
**Data Storage:** "Shadow user document" at `users/{profileId}` (pseudo-UID)
**Email:** None required (no Firebase Auth user)

**Firestore Structure:**
```
users/{profileId}                            # Shadow document (complete user profile)
  └── parents/{parentUid}                    # Parent relationship
users/{parentUid}
  └── childProfiles/{profileId}              # Parent visibility

Parent's user document:
  childProfiles: [...]                       # Array with child profile metadata
```

**Type Identifier:** `activeProfile.type === 'child-profile'`

### Mode 2: Linked Child (linked-child)

**Authentication:** Child has own Firebase Auth user/email
**Data Storage:** Child's own document at `users/{childUid}`
**Email:** Required (full Firebase Auth account)

**Firestore Structure:**
```
users/{childUid}                             # Child's own user document
  └── parents/{parentUid}                    # Parent relationship
users/{parentUid}
  └── children/{childUid}                    # Parent visibility

Parent's user document:
  linkedChildren: [...]                      # Array with linked child metadata
```

**Type Identifier:** `activeProfile.type === 'linked-child'`

---

## 2. Active Profile Switching Mechanism ✅ WORKING

**Implementation:** `src/contexts/ActiveProfileContext.tsx`

### ActiveProfile Interface
```typescript
{
  type: 'self' | 'child-profile' | 'linked-child'
  uid: string                    // Actual UID for both modes
  profileId?: string             // For Netflix profiles only
  displayName: string
  gradeLevel: string
  accountType: 'student' | 'parent'  // Logged-in user's account type
}
```

### Switching Functions
- `switchToSelf()`: Parent returns to parent dashboard
- `switchToChildProfile(profileId, displayName, gradeLevel)`: Parent views Netflix child
- `switchToLinkedChild(childUid, displayName, gradeLevel)`: Parent views linked child

### Persistence
- Saved to localStorage as `'active-profile'` (JSON)
- Restored on app reload with validation
- Defaults to 'self' if saved profile is invalid

**Status:** ✅ **Working correctly**

---

## 3. Data Access Patterns ✅ IDENTICAL ACROSS MODES

### Critical Design Principle: Effective UID

Both modes use the same data access mechanism:

```typescript
const effectiveUid = activeProfile?.uid || userProfile?.uid
```

This makes both Netflix profiles and linked children **completely transparent** to data services.

### Progress & Learning Data (✅ Identical)

**Location:** `src/hooks/useProgressSummary.ts:71`

```typescript
// Both modes query the same paths using effectiveUid
users/{effectiveUid}/learn/{subtopicId}
users/{effectiveUid}/practice/{topicId}
progressSummaries/{effectiveUid}
```

**Status:** ✅ **Perfect parity - no differences**

### Gamification Stats (✅ Identical)

**Location:** `src/hooks/useGamificationStats.ts:54-70`

```typescript
// Always reads from user profile gamification object
userProfile.gamification = {
  totalXP, currentLevel, currentStreak, longestStreak, lastActivityDate
}
```

**Status:** ✅ **Perfect parity**

### Parent Analytics (✅ Identical)

**Location:** `src/services/analytics/parentAnalyticsService.ts:181`

```typescript
async getChildAnalytics(childUid: string) {
  // Works identically for both modes
  summary = await getProgressSummary(childUid);
  userProfile = await getUserProfile(childUid);
}
```

**Status:** ✅ **Perfect parity - uses UID directly for both modes**

---

## 4. Component-Level Analysis

### ✅ Components Correctly Using ActiveProfile

| Component | File | Implementation |
|-----------|------|----------------|
| **ActiveStudentDashboard** | `src/components/dashboard/ActiveStudentDashboard.tsx:28` | Uses `activeProfile?.gradeLevel`, `useProgressSummary()` |
| **GreetingHeader** | `src/components/dashboard/GreetingHeader.tsx:45` | Displays `activeProfile?.displayName` |
| **PracticeSessionView** | `src/components/practice/PracticeSessionView.tsx:132` | Saves progress using `effectiveUid` |
| **InteractivePathView** | `src/components/practice/InteractivePathView.tsx` | Uses `activeProfile.uid` for data |
| **ProfileSwitcher** | `src/components/ProfileSwitcher.tsx:11` | Correctly shows active profile and switches |
| **ParentDashboard** | `src/components/parent/ParentDashboard.tsx:12` | Lists both types, switches correctly |

**Status:** ✅ **All learning/dashboard components respect activeProfile**

### ❌ CRITICAL GAPS: Components NOT Respecting ActiveProfile

#### 1. SettingsPage ❌ BROKEN

**File:** `src/pages/SettingsPage.tsx`

**Problem:**
```typescript
// Line 14: Always uses logged-in user's profile
const { user, userProfile, updateProfile } = useAuth();

// Lines 30-32: Initializes from userProfile (parent's)
useEffect(() => {
  if (userProfile) {
    setDisplayName(userProfile.displayName || '');
    setGradeLevel(userProfile.gradeLevel || '');
  }
}, [userProfile]);

// Lines 69-77: Updates logged-in user's profile
await updateProfile({
  displayName: displayName.trim(),
  gradeLevel,
  settings: { /* ... */ }
});
```

**Impact:**
- ❌ When parent switches to Netflix child, settings show **PARENT'S** settings
- ❌ When parent switches to linked child, settings show **PARENT'S** settings
- ❌ Changing settings while viewing a child profile updates **PARENT'S** profile
- ❌ Children's individual settings (theme, TTS speaker, etc.) cannot be accessed

**Severity:** 🔴 **CRITICAL** - Violates core requirement of identical functionality

---

#### 2. ProfileMenu ❌ BROKEN

**File:** `src/components/auth/ProfileMenu.tsx`

**Problem:**
```typescript
// Line 70-71: Always displays logged-in user
const displayName = userProfile?.displayName || user.displayName || 'User';

// Line 139-141: Shows logged-in user's grade level
{userProfile?.gradeLevel && (
  <div className="text-sm mt-1">{userProfile.gradeLevel}</div>
)}
```

**Impact:**
- ❌ Profile menu always shows parent's name/grade when viewing child
- ❌ Confusing UX - user thinks they're viewing child but menu shows parent
- ❌ "Settings" button navigates to parent's settings even when child is active

**Severity:** 🟡 **MEDIUM** - Confusing but doesn't break functionality

---

## 5. Subscription & Access Control ⚠️ PARTIAL GAPS

### Netflix Profiles Subscription (✅ Working)

**Location:** `src/hooks/useSubscription.ts:146`

```typescript
// Reads from childProfiles subcollection
const childProfilesRef = collection(firestore, 'users', parentUid, 'childProfiles');
```

**Initialization:** `src/services/authService.ts:912-933`
- Creates 7-day trial in shadow document
- Initializes subscription field

**Status:** ✅ **Netflix profiles have full subscription tracking**

### Linked Children Subscription (⚠️ UNCLEAR)

**Location:** `src/services/authService.ts:575-631` (invite flow)

**Problem:**
- 🔍 No clear subscription initialization in linked child invite acceptance
- 🔍 `useSubscription` hook only reads `childProfiles` subcollection
- ⚠️ Linked children may not have subscription tracking implemented

**Impact:**
- ⚠️ Linked children might not have trial/subscription management
- ⚠️ Feature access might differ between modes

**Severity:** 🟡 **MEDIUM** - Needs verification with real data

---

## 6. Data Consistency Risks ⚠️

### Shadow Document Sync (Netflix Profiles)

**Risk:** Shadow documents created on profile addition may become out-of-sync with parent's `childProfiles` array

**Locations:**
- Shadow doc creation: `src/services/authService.ts:952-989`
- Array update: `src/services/authService.ts:1003-1019`

**Impact:**
- If parent updates `childProfiles` array but shadow doc isn't updated, reads will fail
- Settings changes might not sync between shadow doc and parent array

**Mitigation Needed:** Ensure atomic updates to both locations

---

## 7. Critical Gaps Summary

| # | Issue | Severity | Impact | Files Affected |
|---|-------|----------|--------|----------------|
| 1 | **SettingsPage ignores activeProfile** | 🔴 CRITICAL | Settings always show/update parent's profile, not active child | `src/pages/SettingsPage.tsx` |
| 2 | **ProfileMenu shows logged-in user** | 🟡 MEDIUM | Confusing UX - menu doesn't reflect active profile | `src/components/auth/ProfileMenu.tsx` |
| 3 | **Linked children subscription unclear** | 🟡 MEDIUM | May lack subscription tracking | `src/services/authService.ts`, `src/hooks/useSubscription.ts` |
| 4 | **Shadow doc sync risk** | 🟡 MEDIUM | Data inconsistency between shadow doc and parent array | `src/services/authService.ts` |
| 5 | **Email assignment for linked children** | 🟢 LOW | Child invite flow doesn't clearly assign email | `src/services/authService.ts:810-827` |

---

## 8. Recommended Fixes

### 🔴 PRIORITY 1: Fix SettingsPage (CRITICAL)

**Goal:** Settings should show active profile's settings, not logged-in user's settings

**Implementation:**

```typescript
// src/pages/SettingsPage.tsx

import { useActiveProfile } from '../contexts/ActiveProfileContext';
import { authService } from '../services/authService';

const SettingsPage: React.FC = () => {
  const { user } = useAuth();
  const { activeProfile } = useActiveProfile();
  const { theme, themeName, setTheme } = useTheme();

  // NEW: Fetch active profile's settings
  const [profileSettings, setProfileSettings] = useState<UserProfile | null>(null);

  useEffect(() => {
    async function loadActiveProfileSettings() {
      if (activeProfile?.uid) {
        const profile = await authService.getUserProfile(activeProfile.uid);
        setProfileSettings(profile);
      }
    }
    loadActiveProfileSettings();
  }, [activeProfile?.uid]);

  // Initialize form with ACTIVE profile's data
  useEffect(() => {
    if (profileSettings) {
      setDisplayName(profileSettings.displayName || '');
      setGradeLevel(profileSettings.gradeLevel || '');
      setSelectedTheme(profileSettings.settings?.theme || 'light');
    }
  }, [profileSettings]);

  // Update ACTIVE profile's settings
  const handleSave = async () => {
    if (!activeProfile?.uid) return;

    await authService.updateUserProfile(activeProfile.uid, {
      displayName: displayName.trim(),
      gradeLevel,
      settings: {
        ttsSpeaker: profileSettings?.settings?.ttsSpeaker || 'callirrhoe',
        audioEnabled: profileSettings?.settings?.audioEnabled ?? true,
        theme: selectedTheme,
      },
    });

    // Reload settings
    const updatedProfile = await authService.getUserProfile(activeProfile.uid);
    setProfileSettings(updatedProfile);
  };

  // ... rest of component
};
```

**Testing Checklist:**
- [ ] Parent switches to Netflix child → Settings show child's settings
- [ ] Parent switches to linked child → Settings show child's settings
- [ ] Parent returns to self → Settings show parent's settings
- [ ] Settings changes for child persist correctly
- [ ] Settings changes for child don't affect parent's settings

---

### 🟡 PRIORITY 2: Fix ProfileMenu

**Goal:** ProfileMenu should show active profile's info, not logged-in user's info

**Implementation:**

```typescript
// src/components/auth/ProfileMenu.tsx

const ProfileMenu: React.FC<ProfileMenuProps> = ({ onOpenAuth }) => {
  const { user, logout } = useAuth();
  const { activeProfile } = useActiveProfile();
  const { theme } = useTheme();

  // NEW: Use activeProfile for display
  const displayName = activeProfile?.displayName || user?.displayName || 'User';
  const gradeLevel = activeProfile?.gradeLevel;
  const isParentViewingChild = activeProfile?.type !== 'self';

  return (
    <div className="relative" ref={menuRef}>
      {/* Show active profile's name */}
      <div>{displayName}</div>

      {/* Show badge if parent is viewing child */}
      {isParentViewingChild && (
        <div className="text-xs text-blue-500">
          Viewing: {activeProfile?.type === 'child-profile' ? 'Profile' : 'Linked'}
        </div>
      )}

      {/* ... */}
    </div>
  );
};
```

---

### 🟡 PRIORITY 3: Clarify Linked Children Subscription

**Goal:** Ensure linked children have subscription tracking identical to Netflix profiles

**Investigation Needed:**
1. Check if linked children create `users/{childUid}` with `subscription` field
2. Verify `useSubscription` works for linked children
3. Add subscription initialization to linked child invite acceptance

**Implementation:**

```typescript
// src/services/authService.ts - acceptChildInvite()

// After creating child user document, initialize subscription
await updateDoc(childUserRef, {
  subscription: {
    status: 'trialing',
    trialStartDate: serverTimestamp(),
    trialEndDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  }
});
```

---

### 🟢 PRIORITY 4: Add Atomic Shadow Document Updates

**Goal:** Ensure shadow documents stay in sync with parent's `childProfiles` array

**Implementation:**

```typescript
// Create a cloud function or client-side transaction
async function updateChildProfile(parentUid: string, profileId: string, updates: any) {
  const batch = writeBatch(firestore);

  // Update shadow document
  const shadowDocRef = doc(firestore, 'users', profileId);
  batch.update(shadowDocRef, updates);

  // Update parent's childProfiles array
  const parentRef = doc(firestore, 'users', parentUid);
  const parentDoc = await getDoc(parentRef);
  const childProfiles = parentDoc.data()?.childProfiles || [];
  const updatedProfiles = childProfiles.map((child: any) =>
    child.profileId === profileId ? { ...child, ...updates } : child
  );
  batch.update(parentRef, { childProfiles: updatedProfiles });

  await batch.commit();
}
```

---

## 9. Testing Checklist

### Netflix-Style Mode Testing

**Setup:**
1. Create parent account
2. Add Netflix-style child profile
3. Switch to child profile

**Tests:**
- [ ] Dashboard shows child's progress, not parent's
- [ ] Settings show child's settings (displayName, gradeLevel, theme)
- [ ] Changing settings updates child's profile, not parent's
- [ ] Profile menu shows child's name
- [ ] Practice session saves to child's UID
- [ ] Analytics show child's data
- [ ] Switching back to parent shows parent's settings
- [ ] Subscription/trial status tracked correctly

### Separate Accounts Mode Testing

**Setup:**
1. Create parent account
2. Send child invite (with email)
3. Child accepts invite (creates Firebase account)
4. Parent switches to linked child

**Tests:**
- [ ] Dashboard shows child's progress, not parent's
- [ ] Settings show child's settings (displayName, gradeLevel, theme)
- [ ] Changing settings updates child's profile, not parent's
- [ ] Profile menu shows child's name
- [ ] Practice session saves to child's UID
- [ ] Analytics show child's data
- [ ] Switching back to parent shows parent's settings
- [ ] Subscription/trial status tracked correctly (needs verification)

### Cross-Mode Parity Testing

**Goal:** Ensure both modes provide identical functionality

- [ ] Create one Netflix profile and one linked child
- [ ] Switch between both
- [ ] Verify settings, progress, analytics, gamification all work identically
- [ ] Verify no data leakage between profiles
- [ ] Verify parent can switch freely between all profiles

---

## 10. Architecture Strengths ✅

**What's Working Well:**

1. ✅ **Unified Data Access Pattern**
   - The `effectiveUid` pattern makes both modes transparent to services
   - Progress, analytics, and gamification work identically
   - No mode-specific branching in core business logic

2. ✅ **Active Profile Context**
   - Centralized switching logic
   - Persistent across page reloads
   - Validation ensures child still exists

3. ✅ **Firestore Structure**
   - Both modes have complete user documents with full data
   - Parent-child relationships via subcollections
   - Security rules can enforce access control

4. ✅ **Parent Dashboard**
   - Shows both types of children
   - Unified switching interface
   - Clear visual distinction (icons)

---

## 11. Conclusion

### Current State: **MOSTLY FUNCTIONAL**

**Strengths:**
- Core learning functionality (practice, progress, analytics) works identically across both modes
- Active profile switching mechanism is well-designed and functional
- Data access pattern is clean and maintainable

**Critical Gaps:**
- Settings page ALWAYS shows parent's settings, violating the core requirement
- Profile menu doesn't reflect active profile
- Subscription management for linked children needs verification

### Recommended Action Plan

1. **Immediate (Week 1):**
   - 🔴 Fix SettingsPage to use activeProfile (CRITICAL)
   - 🔴 Add tests for settings in both modes

2. **Short-term (Week 2-3):**
   - 🟡 Fix ProfileMenu to show activeProfile
   - 🟡 Verify/implement linked children subscription tracking
   - 🟡 Add comprehensive cross-mode testing

3. **Long-term (Month 1):**
   - 🟢 Implement atomic shadow document updates
   - 🟢 Add monitoring for data sync issues
   - 🟢 Document the dual-mode architecture for future developers

### Impact Assessment

**If SettingsPage is fixed:**
- ✅ Both modes will have **100% functional parity**
- ✅ User experience will be identical, differing only in access method
- ✅ Netflix-style and separate accounts will be truly interchangeable

**Risk if not fixed:**
- ❌ Children cannot customize their own settings
- ❌ Parent accidentally changes child's settings when viewing child profile
- ❌ Poor user experience - settings don't match active profile
- ❌ Violates the stated architecture goal of "identical functionality"

---

## Appendix: File Reference

### Core Files to Monitor

| Category | File Path | Purpose |
|----------|-----------|---------|
| **Contexts** | `src/contexts/ActiveProfileContext.tsx` | Profile switching logic |
| **Contexts** | `src/contexts/AuthContext.tsx` | Authentication state |
| **Services** | `src/services/authService.ts` | User/profile management |
| **Services** | `src/services/firestoreProgressService.ts` | Progress persistence |
| **Services** | `src/services/analytics/parentAnalyticsService.ts` | Parent analytics |
| **Hooks** | `src/hooks/useProgressSummary.ts` | Progress aggregation |
| **Hooks** | `src/hooks/useGamificationStats.ts` | XP/level/streak |
| **Hooks** | `src/hooks/useSubscription.ts` | Subscription status |
| **Pages** | `src/pages/SettingsPage.tsx` | **NEEDS FIX** |
| **Components** | `src/components/auth/ProfileMenu.tsx` | **NEEDS FIX** |
| **Components** | `src/components/ProfileSwitcher.tsx` | Profile switching UI |
| **Components** | `src/components/parent/ParentDashboard.tsx` | Parent overview |

---

**Report Generated:** 2025-12-11
**Review Depth:** Comprehensive (very thorough)
**Files Analyzed:** 24+ files across services, hooks, components, and pages
