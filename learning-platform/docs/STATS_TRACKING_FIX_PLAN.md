# Stats Tracking Fix Plan

**Date**: November 13, 2025
**Priority**: 🔴 CRITICAL
**Status**: In Progress

---

## Executive Summary

The stats tracking system has **critical inconsistencies** causing:
- Dashboard showing wrong XP/level (200 instead of 350)
- Weekly stats showing 0 despite active practice
- Parent dashboard showing "Never active" when child is active
- Homepage showing different numbers than practice page

**Root Cause**: XP/Level stored per-topic instead of globally aggregated + timezone mismatches + placeholder data

---

## Architecture Decision

### ✅ **GLOBAL STATS** (Single Source of Truth: `users/{uid}.gamification`)

| Stat | Storage | Update Trigger | Display Location |
|------|---------|----------------|------------------|
| **Total XP** | `gamification.totalXP` | After EVERY practice session | Homepage, Dashboard, Practice Header |
| **Current Level** | `gamification.currentLevel` | Calculated from totalXP | Homepage, Dashboard, Practice Header |
| **Current Streak** | `gamification.dailyStreak.currentStreak` | Daily (via globalStreakService) ✅ | Homepage, Dashboard |
| **Problems Solved** | `gamification.totalProblemsSolved` | After EVERY correct answer | Dashboard, Progress Summary |
| **Total Time** | `gamification.totalTimeSpentSeconds` | After EVERY practice session | Dashboard, Progress Summary |
| **Achievements** | `gamification.achievements[]` | When earned | Dashboard, Profile |

### ✅ **PER-TOPIC STATS** (Stored in: `users/{uid}/practice/{topicId}`)

| Stat | Storage | Purpose |
|------|---------|---------|
| **Topic XP** | `totalXP` | Show XP earned in THIS topic only |
| **Node Progress** | `nodes[nodeId]` | Track which nodes completed |
| **Session History** | `sessionHistory[]` | Daily activity for THIS topic |
| **Topic Problems** | `totalProblemsAttempted/Correct` | Accuracy per topic |

---

## Implementation Phases

### **Phase 1: Fix Timezone Inconsistencies** 🔴 CRITICAL

**Problem**: sessionHistory uses local time, but comparisons use UTC → daily stats show 0

**Files to Fix**:
1. `/src/services/pathProgressService.ts` line 698
2. `/src/hooks/useProgressSummary.ts` line 314
3. `/src/services/globalStreakService.ts` (check consistency)

**Solution**: Create unified date helper
```typescript
// src/utils/dateUtils.ts
export function getLocalDateString(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
```

**Changes**:
- Replace ALL `date.toISOString().split('T')[0]` with `getLocalDateString(date)`
- Use consistently across all services

**Test**: After fix, weeklyStats should show today's activity

---

### **Phase 2: Create Global Stats Aggregation Service** 🔴 CRITICAL

**Problem**: No mechanism to sum XP/problems/time across all topics

**New File**: `/src/services/globalStatsAggregator.ts`

```typescript
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from './firebase';

export interface GlobalStats {
  totalXP: number;
  totalProblemsSolved: number;
  totalProblemsAttempted: number;
  totalTimeSpentSeconds: number;
  totalAchievements: number;
  currentLevel: number;
}

export async function aggregateGlobalStats(uid: string): Promise<GlobalStats> {
  // Query ALL practice topics for this user
  const practiceRef = collection(firestore, `users/${uid}/practice`);
  const snapshot = await getDocs(practiceRef);

  let totalXP = 0;
  let totalProblemsSolved = 0;
  let totalProblemsAttempted = 0;
  let totalTimeSpentSeconds = 0;
  const allAchievements = new Set<string>();

  snapshot.forEach(doc => {
    const data = doc.data();
    totalXP += data.totalXP || 0;
    totalProblemsSolved += data.totalProblemsCorrect || 0;
    totalProblemsAttempted += data.totalProblemsAttempted || 0;
    totalTimeSpentSeconds += data.totalTimeSpentSeconds || 0;

    // Deduplicate achievements by ID
    if (data.achievements) {
      data.achievements.forEach(a => allAchievements.add(a.id));
    }
  });

  // Calculate level from total XP
  const currentLevel = calculateLevelFromXP(totalXP);

  return {
    totalXP,
    totalProblemsSolved,
    totalProblemsAttempted,
    totalTimeSpentSeconds,
    totalAchievements: allAchievements.size,
    currentLevel
  };
}

function calculateLevelFromXP(totalXP: number): number {
  // Matches achievementService.ts logic
  if (totalXP < 100) return 1;
  if (totalXP < 300) return 2;
  if (totalXP < 600) return 3;
  if (totalXP < 1000) return 4;
  return Math.floor(totalXP / 500) + 1;
}
```

---

### **Phase 3: Update firestoreProgressService** 🔴 CRITICAL

**Problem**: Currently saves only current topic's XP to global profile

**File**: `/src/services/firestoreProgressService.ts` lines 387-397

**Current Code** (WRONG):
```typescript
const gamificationUpdate = {
  gamification: {
    totalXP: progress.totalXP,  // ❌ Only THIS topic
    currentLevel: progress.currentLevel,  // ❌ Wrong
    totalAchievements: progress.achievements?.length || 0,  // ❌ Only THIS topic
    lastUpdated: new Date().toISOString()
  }
};
```

**Fixed Code**:
```typescript
import { aggregateGlobalStats } from './globalStatsAggregator';

// Inside savePracticeProgress, AFTER saving practice document:
const globalStats = await aggregateGlobalStats(uid);

const gamificationUpdate = {
  gamification: {
    totalXP: globalStats.totalXP,  // ✅ Sum across ALL topics
    currentLevel: globalStats.currentLevel,  // ✅ Calculated from total XP
    totalProblemsSolved: globalStats.totalProblemsSolved,  // ✅ NEW
    totalTimeSpentSeconds: globalStats.totalTimeSpentSeconds,  // ✅ NEW
    totalAchievements: globalStats.totalAchievements,  // ✅ Deduplicated
    lastUpdated: new Date().toISOString()
  }
};
```

**Test**: After practicing topic A (50 XP) and topic B (75 XP), `users/{uid}.gamification.totalXP` should be 125

---

### **Phase 4: Fix useGamificationStats Hook** 🔴 CRITICAL

**Problem**: Reads from per-topic PathProgress instead of global gamification

**File**: `/src/hooks/useGamificationStats.ts` lines 43-58

**Current Code** (WRONG):
```typescript
// Priority 1: PathProgress (per-topic)
if (pathProgress) {
  return {
    totalXP: pathProgress.totalXP || 0,  // ❌ Only THIS topic
    currentLevel: pathProgress.currentLevel || 1,  // ❌ Only THIS topic
    // ...
  };
}
```

**Fixed Code**:
```typescript
// ALWAYS read global stats from userProfile.gamification
if (userProfile?.gamification) {
  return {
    totalXP: userProfile.gamification.totalXP || 0,  // ✅ Global
    currentLevel: userProfile.gamification.currentLevel || 1,  // ✅ Global
    currentStreak: userProfile.gamification.dailyStreak?.currentStreak || 0,  // ✅ Already global
    longestStreak: userProfile.gamification.dailyStreak?.longestStreak || 0,  // ✅ Already global
    totalAchievements: userProfile.gamification.totalAchievements || 0,  // ✅ Global
    level: userProfile.gamification.currentLevel || 1,
  };
}

// Fallback only if NO gamification data exists
return {
  totalXP: 0,
  currentLevel: 1,
  currentStreak: 0,
  longestStreak: 0,
  totalAchievements: 0,
  level: 1
};
```

**Remove**: Per-topic fallback logic entirely

**Test**: Dashboard should show same XP/level as homepage (currently mismatched)

---

### **Phase 5: Remove Placeholder Data** 🟠 HIGH

**Problem**: Dashboard always shows fake data (45 problems, 120 XP, etc.)

**File**: `/src/components/dashboard/HeroStatsBanner.tsx` lines 22-29

**Current Code** (WRONG):
```typescript
const weeklyStats = {
  problemsSolved: 45,  // ❌ FAKE
  timeSpent: 135,      // ❌ FAKE
  xpEarned: 120,       // ❌ FAKE
  trend: '+25%',       // ❌ FAKE
};
```

**Fixed Code**:
```typescript
import { useProgressSummary } from '../../hooks/useProgressSummary';

function HeroStatsBanner() {
  const { weeklyProblems, weeklyTimeMinutes, weeklyXP, loading } = useProgressSummary();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <p>Problems Solved: {weeklyProblems}</p>
      <p>Time Spent: {weeklyTimeMinutes}m</p>
      <p>XP Earned: {weeklyXP}</p>
    </div>
  );
}
```

**Test**: Dashboard should show 0 for new users, actual numbers for active users

---

### **Phase 6: Add Save Flush on Unmount** 🟡 MEDIUM

**Problem**: Debounced saves lost when tab closes

**File**: `/src/services/pathProgressService.ts`

**Add**:
```typescript
// Add to PathProgressService class
public flushPendingSaves(): Promise<void> {
  if (this.saveTimersByCategory.size > 0) {
    const promises = [];
    this.saveTimersByCategory.forEach((timer, category) => {
      clearTimeout(timer);
      promises.push(this.saveProgressToFirestore(category));
    });
    return Promise.all(promises);
  }
  return Promise.resolve();
}
```

**Use in component**:
```typescript
// In practice page component
useEffect(() => {
  const handleBeforeUnload = async (e) => {
    await pathProgressService.flushPendingSaves();
  };

  window.addEventListener('beforeunload', handleBeforeUnload);

  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
    pathProgressService.flushPendingSaves(); // Also flush on unmount
  };
}, []);
```

**Test**: Practice, close tab immediately, reopen → progress should be saved

---

### **Phase 7: Update Parent Dashboard Analytics** 🟡 MEDIUM

**Problem**: Parent dashboard reads old data structure

**File**: `/src/services/analytics/parentAnalyticsService.ts`

**Update**: Use new global stats fields
```typescript
const overview = {
  totalXP: userProfile.gamification?.totalXP || 0,  // ✅ Now accurate
  currentLevel: userProfile.gamification?.currentLevel || 1,  // ✅ Now accurate
  totalProblemsSolved: userProfile.gamification?.totalProblemsSolved || 0,  // ✅ NEW
  totalTimeSpent: userProfile.gamification?.totalTimeSpentSeconds || 0,  // ✅ NEW
  // ...
};
```

---

## Testing Checklist

### **After Phase 1 (Timezone Fix)**
- [ ] Complete a problem today
- [ ] Check weeklyStats shows today's date in sessionHistory
- [ ] Verify "Daily Goal" shows 1 problem (not 0)
- [ ] Verify "This Week" shows 1 problem (not 0)

### **After Phase 3 (Global Aggregation)**
- [ ] Practice Topic A (earn 50 XP)
- [ ] Practice Topic B (earn 75 XP)
- [ ] Check `users/{uid}.gamification.totalXP` = 125 (not 75)
- [ ] Check homepage shows "Level X (125 XP)"

### **After Phase 4 (useGamificationStats Fix)**
- [ ] Homepage and Dashboard show SAME XP/level
- [ ] Practice page header shows SAME XP/level
- [ ] No more mismatches between views

### **After Phase 5 (Remove Placeholders)**
- [ ] Dashboard shows 0 problems for new user
- [ ] Dashboard shows actual numbers after practicing
- [ ] Weekly trend shows actual change (not always +25%)

### **After Phase 6 (Save Flush)**
- [ ] Practice 1 problem
- [ ] Immediately close tab (within 500ms)
- [ ] Reopen → progress should be saved
- [ ] XP should reflect the completed problem

### **After Phase 7 (Parent Dashboard)**
- [ ] Parent views child's dashboard
- [ ] Shows actual XP/level (not 0)
- [ ] Shows actual last active time (not "Never")
- [ ] Shows actual problems solved this week

---

## Migration Plan

### **For Existing Users**

**Problem**: Current users have XP split across topics, not aggregated in profile

**Solution**: Run one-time migration script

```typescript
// scripts/migrateGlobalStats.ts
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';

async function migrateAllUsers() {
  const usersSnapshot = await getDocs(collection(firestore, 'users'));

  for (const userDoc of usersSnapshot.docs) {
    const uid = userDoc.id;
    console.log(`Migrating user ${uid}...`);

    // Aggregate their stats
    const globalStats = await aggregateGlobalStats(uid);

    // Update their profile
    await updateDoc(doc(firestore, 'users', uid), {
      'gamification.totalXP': globalStats.totalXP,
      'gamification.currentLevel': globalStats.currentLevel,
      'gamification.totalProblemsSolved': globalStats.totalProblemsSolved,
      'gamification.totalTimeSpentSeconds': globalStats.totalTimeSpentSeconds,
      'gamification.totalAchievements': globalStats.totalAchievements,
    });

    console.log(`✅ Migrated ${uid}: ${globalStats.totalXP} XP, Level ${globalStats.currentLevel}`);
  }
}
```

**Run**: `npm run migrate-stats` (add to package.json)

---

## Success Criteria

✅ **Fix Confirmed When**:
1. Homepage, Dashboard, and Practice page all show SAME XP/level
2. Weekly stats show actual problems solved (not 0, not fake 45)
3. Parent dashboard shows child's actual XP/level (not 0, not "Never active")
4. Practicing multiple topics increases TOTAL XP (not just per-topic)
5. Closing tab doesn't lose progress
6. Daily goal shows today's problems (not 0)

---

## Rollback Plan

**If Issues Arise**:
1. Revert firestoreProgressService changes (Phase 3)
2. Keep timezone fixes (Phase 1) - no harm
3. Revert useGamificationStats changes (Phase 4)
4. Restore placeholder data temporarily (Phase 5)
5. Run migration script in reverse (restore per-topic as source of truth)

**Git Tags**:
- `before-stats-fix` - Tag current state
- `after-phase-1` - After timezone fix
- `after-phase-3` - After aggregation
- `stats-fix-complete` - After all phases

---

## Timeline

- **Phase 1**: 30 minutes
- **Phase 2**: 1 hour
- **Phase 3**: 1 hour
- **Phase 4**: 30 minutes
- **Phase 5**: 30 minutes
- **Phase 6**: 45 minutes
- **Phase 7**: 30 minutes
- **Testing**: 1 hour
- **Migration**: 30 minutes

**Total**: ~6 hours

---

## Notes

- Keep per-topic stats for topic-specific views (progress rings, topic accuracy)
- Global stats are for dashboard/homepage only
- ProgressSummary is denormalized cache - can be regenerated from global + per-topic
- Timezone fix is safe and has no dependencies
- Start with Phase 1 (timezone) - it's isolated and fixes daily stats immediately
