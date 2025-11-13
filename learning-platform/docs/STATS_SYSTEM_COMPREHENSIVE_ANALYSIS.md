# Stats Tracking System - Comprehensive Analysis

**Date**: November 13, 2025
**Status**: 🔴 CRITICAL ISSUES FOUND
**Analysis Depth**: Complete codebase audit

---

## Executive Summary

After comprehensive analysis of the stats tracking system, I've identified **7 critical issues** causing incorrect calculations, inflated stats, and dummy data. The infrastructure EXISTS but has fundamental logic flaws that make stats unreliable.

### Key Problems:
1. ❌ **Stats Duplication Bug** - Daily stats inflated by cumulative totals
2. ❌ **Streak Not Updated** - No mechanism to update daily streaks
3. ❌ **Fake Trend Data** - Week trend always shows "+25%"
4. ❌ **Missing Delta Tracking** - No way to calculate session deltas
5. ❌ **Timezone Inconsistencies** - Mixed local/UTC date handling
6. ❌ **No Streak Service Integration** - Global aggregator doesn't call streak service
7. ❌ **Incomplete Daily Activity** - Missing Learn mode integration

---

## 🔴 CRITICAL ISSUE #1: Stats Duplication Bug

### Problem
Both Learn and Practice modes pass **cumulative totals** to `updateDailyActivity`, but the service **ADDS** them to existing daily stats, causing massive inflation.

### Evidence

**Practice Mode** (`firestoreProgressService.ts:493-504`):
```typescript
// Passing CUMULATIVE totals (WRONG!)
const sessionProblemsSolved = progress.totalProblemsCorrect;  // ← Cumulative
const sessionProblemsAttempted = progress.totalProblemsAttempted;  // ← Cumulative

await updateDailyActivity(uid, {
  mode: 'practice',
  problemsSolved: sessionProblemsSolved,  // ← Should be delta!
  problemsAttempted: sessionProblemsAttempted,
  // ...
});
```

**Daily Activity Service** (`dailyActivityService.ts:111-115`):
```typescript
// ADDS values (expects incremental deltas)
existing.practice.problemsSolved += data.problemsSolved;  // ← Adding cumulative = WRONG
existing.practice.problemsAttempted += data.problemsAttempted;
existing.practice.timeSeconds += data.timeSeconds;
```

### Actual Behavior Example:
```
Session 1: Solve 5 problems
  - progress.totalProblemsCorrect = 5
  - updateDailyActivity gets 5
  - Daily total = 0 + 5 = 5 ✅

Save progress again (debounced save):
  - progress.totalProblemsCorrect still = 5
  - updateDailyActivity gets 5 AGAIN
  - Daily total = 5 + 5 = 10 ❌ (should be 5)

Session 2: Solve 3 more problems
  - progress.totalProblemsCorrect = 8
  - updateDailyActivity gets 8
  - Daily total = 10 + 8 = 18 ❌ (should be 8)
```

### Impact
- ✅ Global stats (XP, level) are CORRECT (aggregated from topic documents)
- ❌ Daily activity stats are INFLATED (2-10x actual values)
- ❌ Weekly stats show wrong numbers
- ❌ Activity heatmap shows wrong intensity
- ❌ Parent dashboard shows inflated activity

### Root Cause
`pathProgressService` saves progress multiple times (debounced saves + manual saves), each time passing cumulative totals. `dailyActivityService` assumes incremental deltas.

---

## 🔴 CRITICAL ISSUE #2: Streak Not Updated

### Problem
Global stats aggregation does NOT update daily streaks. Streak data exists in `userProfile.gamification.currentStreak` but is never incremented.

### Evidence

**globalStatsAggregator.ts** does NOT call streak service:
```typescript
export async function aggregateGlobalStats(uid: string): Promise<GlobalStats> {
  // Aggregates XP, problems, time, achievements
  // ❌ Does NOT update streak
  // ❌ Does NOT call globalStreakService

  return {
    totalXP,
    currentLevel,
    totalProblemsSolved,
    // ❌ NO STREAK FIELDS
  };
}
```

**firestoreProgressService.ts** updates gamification:
```typescript
const gamificationUpdate = {
  gamification: {
    totalXP: globalStats.totalXP,
    currentLevel: globalStats.currentLevel,
    totalProblemsSolved: globalStats.totalProblemsSolved,
    // ❌ Does NOT update currentStreak
    // ❌ Does NOT update longestStreak
  }
};
```

### Impact
- Streak never increments beyond initial value
- "Longest streak" frozen at old value
- Users lose motivation (streak is a key engagement metric)

### Expected Behavior
After every practice/learn session:
1. Check if this is first activity today
2. If yes, increment streak (or reset if broken)
3. Update `gamification.currentStreak` and `longestStreak`

---

## 🔴 CRITICAL ISSUE #3: Fake Trend Data

### Problem
Week-over-week trend calculation returns fake "+25%" value instead of calculating real trends.

### Evidence

**useProgressSummary.ts:381-388**:
```typescript
function calculateWeekTrend(weeklyData: DailyActivity[]): string {
  if (weeklyData.length < 7) return '+0%';

  const thisWeekTotal = weeklyData.reduce((sum, d) => sum + d.problemsSolved, 0);

  // Simplified: assuming we only have this week's data
  // In a real implementation, we'd fetch last week's data too
  return thisWeekTotal > 0 ? '+25%' : '+0%';  // ← FAKE DATA!
}
```

### Impact
- Dashboard always shows "+25% vs last week" when active
- Misleading data shown to students and parents
- No actual trend analysis

### Expected Behavior
```typescript
function calculateWeekTrend(thisWeek: DailyActivity[], lastWeek: DailyActivity[]): string {
  const thisWeekTotal = thisWeek.reduce((sum, d) => sum + d.problemsSolved, 0);
  const lastWeekTotal = lastWeek.reduce((sum, d) => sum + d.problemsSolved, 0);

  if (lastWeekTotal === 0) return '+0%';

  const change = ((thisWeekTotal - lastWeekTotal) / lastWeekTotal) * 100;
  return change > 0 ? `+${Math.round(change)}%` : `${Math.round(change)}%`;
}
```

---

## 🔴 CRITICAL ISSUE #4: Missing Delta Tracking

### Problem
No mechanism to track session deltas. Both Learn and Practice only store cumulative totals, making it impossible to know "how many problems solved THIS save" vs "total solved ever in this topic".

### Evidence

**PathProgress.ts** (Practice):
```typescript
interface PathProgress {
  totalProblemsCorrect: number;      // ← Cumulative
  totalProblemsAttempted: number;    // ← Cumulative
  totalTimeSpentSeconds: number;     // ← Cumulative
  // ❌ NO delta fields
}
```

**LearnConversation.ts** (Learn):
```typescript
interface SessionStats {
  correctAnswers: number;            // ← Cumulative
  problemsAttempted: number;         // ← Cumulative
  totalTimeSpent: number;            // ← Cumulative
  // ❌ NO delta fields
}
```

### Solutions

**Option A: Track Previous Save State** (Recommended)
```typescript
// In pathProgressService or component state
let lastSavedStats = {
  problemsCorrect: 0,
  problemsAttempted: 0,
  timeSpent: 0
};

function saveProgress() {
  const delta = {
    problemsSolved: current.totalProblemsCorrect - lastSavedStats.problemsCorrect,
    problemsAttempted: current.totalProblemsAttempted - lastSavedStats.problemsAttempted,
    timeSeconds: current.totalTimeSpentSeconds - lastSavedStats.timeSpent
  };

  await updateDailyActivity(uid, delta);

  lastSavedStats = {
    problemsCorrect: current.totalProblemsCorrect,
    problemsAttempted: current.totalProblemsAttempted,
    timeSpent: current.totalTimeSpentSeconds
  };
}
```

**Option B: Make updateDailyActivity Idempotent**
```typescript
// Change updateDailyActivity to SET instead of ADD
// Pass cumulative totals + date
// Service calculates delta from yesterday's value
// More complex but safer
```

---

## 🔴 CRITICAL ISSUE #5: Timezone Inconsistencies

### Problem
Mixed timezone handling causes mismatches between `sessionHistory` dates and current date comparisons.

### Evidence

**pathProgressService.ts:698** uses LOCAL timezone:
```typescript
date: getLocalDateString(now)  // ✅ "2025-11-13" in local TZ
```

**But some code uses UTC**:
```typescript
date.toISOString().split('T')[0]  // ❌ Might be different day in UTC
```

### Impact
- Weekly stats show 0 even after practicing today
- "Last active" date might be wrong
- Activity heatmap shows wrong days

### Fix
Use `getLocalDateString()` from `dateUtils.ts` EVERYWHERE for date comparisons.

---

## 🔴 CRITICAL ISSUE #6: No Streak Service Integration

### Problem
`globalStatsAggregator` doesn't call `globalStreakService` to update streaks when stats are aggregated.

### Evidence

**globalStatsAggregator.ts** aggregates stats but doesn't touch streaks:
```typescript
export async function aggregateGlobalStats(uid: string): Promise<GlobalStats> {
  // ❌ No call to globalStreakService.updateStreak()
  // ❌ No streak fields in return type

  return {
    totalXP,
    currentLevel,
    totalProblemsSolved,
    // ❌ Missing: currentStreak, longestStreak
  };
}
```

### Expected Integration
```typescript
export async function aggregateGlobalStats(uid: string): Promise<GlobalStats> {
  // ... existing aggregation ...

  // Update streak
  const { updateStreak } = await import('./globalStreakService');
  const streakData = await updateStreak(uid);

  return {
    totalXP,
    currentLevel,
    totalProblemsSolved,
    currentStreak: streakData.currentStreak,  // ✅ Include streaks
    longestStreak: streakData.longestStreak
  };
}
```

Then update gamification in firestoreProgressService:
```typescript
gamification: {
  totalXP: globalStats.totalXP,
  currentLevel: globalStats.currentLevel,
  currentStreak: globalStats.currentStreak,  // ✅ Update streaks
  longestStreak: globalStats.longestStreak,
  // ...
}
```

---

## 🔴 CRITICAL ISSUE #7: Incomplete Daily Activity

### Problem
`saveLearnProgress` calls `updateDailyActivity`, but it passes cumulative totals and gets called EVERY time progress is saved (potentially multiple times per session).

### Evidence

**saveLearnProgress** (`firestoreProgressService.ts:148-156`):
```typescript
await updateDailyActivity(uid, {
  mode: 'learn',
  problemsSolved: conversation.sessionStats.correctAnswers,  // ← Cumulative!
  problemsAttempted: conversation.sessionStats.problemsAttempted,  // ← Cumulative!
  timeSeconds: conversation.sessionStats.totalTimeSpent,  // ← Cumulative!
  // ...
});
```

Comment says "This works correctly when called at session end" but:
1. Progress is saved multiple times during a session (auto-save)
2. Stats get duplicated on every save
3. Same bug as Practice mode

---

## ✅ What's Actually Working

Despite the issues above, some parts ARE working correctly:

### 1. Global Stats Aggregation (XP, Level, Problems)
- ✅ `globalStatsAggregator.ts` correctly sums XP across ALL topics (Learn + Practice)
- ✅ Level calculated from total XP
- ✅ `useGamificationStats` reads from `userProfile.gamification`
- ✅ Homepage, dashboard, practice page all show SAME XP/level

### 2. Real Data (Not Placeholders)
- ✅ `HeroStatsBanner` uses `useProgressSummary()` for real data
- ✅ `useGamificationStats()` returns real global stats
- ✅ No fake/placeholder data in display components

### 3. Date Utilities
- ✅ `dateUtils.ts` exists with proper local timezone handling
- ✅ `getLocalDateString()` used in most places

### 4. Infrastructure
- ✅ `dailyActivityService.ts` structure is correct
- ✅ `globalStatsAggregator.ts` logic is sound
- ✅ Firestore collections properly structured
- ✅ Type safety with TypeScript

---

## 🛠️ Comprehensive Fix Plan

### Phase 1: Critical Fixes (Must-Do Immediately)

#### 1.1 Fix Stats Duplication Bug 🔴 HIGH PRIORITY

**Option A: Track Delta in Memory** (Quickest)
```typescript
// In pathProgressService.ts
class PathProgressService {
  private lastSavedStats: Map<string, { problems: number; time: number }> = new Map();

  async saveProgressToFirestore(category: string) {
    const progress = this.loadUnifiedProgress(category);
    const last = this.lastSavedStats.get(category) || { problems: 0, time: 0 };

    // Calculate delta
    const delta = {
      problemsSolved: progress.totalProblemsCorrect - last.problems,
      timeSeconds: progress.totalTimeSpentSeconds - last.time
    };

    // Save to Firestore...

    // Update daily activity with DELTA
    await updateDailyActivity(uid, {
      mode: 'practice',
      problemsSolved: delta.problemsSolved,  // ✅ Incremental!
      problemsAttempted: delta.problemsSolved,
      timeSeconds: delta.timeSeconds,
      xpEarned: delta.problemsSolved * 25
    });

    // Remember for next save
    this.lastSavedStats.set(category, {
      problems: progress.totalProblemsCorrect,
      time: progress.totalTimeSpentSeconds
    });
  }
}
```

**Option B: Make Daily Activity Idempotent** (Safer long-term)
```typescript
// Change updateDailyActivity signature
export async function updateDailyActivity(
  uid: string,
  data: {
    mode: 'learn' | 'practice';
    cumulativeProblems: number;  // ← Change to cumulative
    cumulativeTime: number;
    cumulativeXP: number;
  }
): Promise<void> {
  const today = getLocalDateString();
  const docRef = doc(firestore, `users/${uid}/dailyActivity/${today}`);

  // Get yesterday's cumulative to calculate today's delta
  const yesterday = getDateDaysAgo(1);
  const yesterdayStr = getLocalDateString(yesterday);
  const yesterdayDoc = await getDoc(doc(firestore, `users/${uid}/dailyActivity/${yesterdayStr}`));

  const yesterdayCumulative = yesterdayDoc.exists()
    ? yesterdayDoc.data().practice.cumulativeSolved || 0
    : 0;

  // Calculate today's actual problems solved
  const todayProblems = Math.max(0, data.cumulativeProblems - yesterdayCumulative);

  // Set (not add) today's stats
  await setDoc(docRef, {
    date: today,
    [data.mode]: {
      problemsSolved: todayProblems,  // ✅ Calculated delta
      // ...
    }
  }, { merge: true });
}
```

**Recommendation**: Start with Option A (quick fix), migrate to Option B later.

#### 1.2 Integrate Streak Service 🔴 HIGH PRIORITY

**Update globalStatsAggregator.ts**:
```typescript
import { updateStreak } from './globalStreakService';

export async function aggregateGlobalStats(uid: string): Promise<GlobalStats> {
  // ... existing aggregation ...

  // Update streak (this checks if today's activity qualifies)
  const streakData = await updateStreak(uid);

  return {
    totalXP,
    currentLevel,
    totalProblemsSolved,
    totalProblemsAttempted,
    totalTimeSpentSeconds,
    totalAchievements,
    achievementIds,
    currentStreak: streakData.currentStreak,  // ✅ Add streaks
    longestStreak: streakData.longestStreak
  };
}
```

**Update GlobalStats interface**:
```typescript
export interface GlobalStats {
  totalXP: number;
  currentLevel: number;
  totalProblemsSolved: number;
  totalProblemsAttempted: number;
  totalTimeSpentSeconds: number;
  totalAchievements: number;
  achievementIds: string[];
  currentStreak: number;  // ✅ Add
  longestStreak: number;  // ✅ Add
}
```

**Update firestoreProgressService.ts**:
```typescript
const gamificationUpdate = {
  gamification: {
    totalXP: globalStats.totalXP,
    currentLevel: globalStats.currentLevel,
    totalProblemsSolved: globalStats.totalProblemsSolved,
    totalProblemsAttempted: globalStats.totalProblemsAttempted,
    totalTimeSpentSeconds: globalStats.totalTimeSpentSeconds,
    totalAchievements: globalStats.totalAchievements,
    currentStreak: globalStats.currentStreak,  // ✅ Add
    longestStreak: globalStats.longestStreak,  // ✅ Add
    lastActive: new Date().toISOString(),
    lastUpdated: new Date().toISOString()
  }
};
```

#### 1.3 Fix Fake Trend Data 🟡 MEDIUM PRIORITY

**Update useProgressSummary.ts**:
```typescript
async function fetchWeeklyActivity(uid: string): Promise<{ thisWeek: DailyActivity[]; lastWeek: DailyActivity[] }> {
  // Fetch last 14 days
  const allSessions: { [date: string]: { problems: number; time: number; xp: number } } = {};

  // ... existing aggregation ...

  const today = new Date();
  const thisWeek: DailyActivity[] = [];
  const lastWeek: DailyActivity[] = [];

  // Last 7 days = this week
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateStr = getLocalDateString(date);
    const session = allSessions[dateStr] || { problems: 0, time: 0, xp: 0 };

    thisWeek.push({
      date,
      problemsSolved: session.problems,
      timeSpentMinutes: Math.round(session.time / 60),
      xpEarned: session.xp
    });
  }

  // Days 7-13 ago = last week
  for (let i = 13; i >= 7; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateStr = getLocalDateString(date);
    const session = allSessions[dateStr] || { problems: 0, time: 0, xp: 0 };

    lastWeek.push({
      date,
      problemsSolved: session.problems,
      timeSpentMinutes: Math.round(session.time / 60),
      xpEarned: session.xp
    });
  }

  return { thisWeek, lastWeek };
}

function calculateWeekTrend(thisWeek: DailyActivity[], lastWeek: DailyActivity[]): string {
  const thisWeekTotal = thisWeek.reduce((sum, d) => sum + d.problemsSolved, 0);
  const lastWeekTotal = lastWeek.reduce((sum, d) => sum + d.problemsSolved, 0);

  if (lastWeekTotal === 0) {
    return thisWeekTotal > 0 ? '+100%' : '+0%';
  }

  const change = ((thisWeekTotal - lastWeekTotal) / lastWeekTotal) * 100;
  const sign = change > 0 ? '+' : '';
  return `${sign}${Math.round(change)}%`;
}
```

### Phase 2: Data Quality Improvements

#### 2.1 Add Timezone Consistency Check
- Audit ALL date comparisons
- Replace `toISOString().split('T')[0]` with `getLocalDateString()`
- Add tests for timezone edge cases

#### 2.2 Learn Mode Daily Activity
- Same fix as Practice mode (track deltas)
- Ensure Learn mode stats not inflated

### Phase 3: Data Migration

#### 3.1 Reset Daily Activity (One-Time)
```typescript
// Script: scripts/resetDailyActivity.ts
async function resetDailyActivity() {
  // Delete all dailyActivity subcollections
  // Users will start fresh from today
  // Weekly stats will show 0 until new activity accumulates
}
```

#### 3.2 Recalculate Streaks (One-Time)
```typescript
// Script: scripts/recalculateStreaks.ts
async function recalculateStreaks() {
  // For each user:
  // 1. Load their practice sessionHistory
  // 2. Calculate actual streak from dates
  // 3. Update gamification.currentStreak and longestStreak
}
```

---

## 📊 Impact Assessment

### Without Fixes:
- ❌ Daily stats show 200 problems when user solved 20
- ❌ Weekly stats show 500 problems when user solved 50
- ❌ Parent dashboard shows inflated activity
- ❌ Activity heatmap intensity 10x too high
- ❌ Streak frozen at initial value
- ❌ Trend always shows "+25%" (fake)

### With Fixes:
- ✅ Daily stats show accurate problem counts
- ✅ Weekly stats reliable for goal tracking
- ✅ Parent dashboard shows real progress
- ✅ Activity heatmap accurate
- ✅ Streak increments correctly
- ✅ Trend shows real week-over-week change

---

## 🧪 Testing Checklist

### After Fix 1.1 (Stats Duplication):
- [ ] Solve 5 problems in practice
- [ ] Save progress (wait for debounce)
- [ ] Check daily activity shows 5 (not 10 or 15)
- [ ] Solve 3 more problems
- [ ] Check daily activity shows 8 (not 18)

### After Fix 1.2 (Streak Integration):
- [ ] Practice today (first time)
- [ ] Check `userProfile.gamification.currentStreak` incremented
- [ ] Practice again tomorrow
- [ ] Check streak = 2
- [ ] Skip a day
- [ ] Practice next day
- [ ] Check streak = 1 (reset)

### After Fix 1.3 (Real Trends):
- [ ] Solve 10 problems this week
- [ ] Solve 5 problems next week
- [ ] Check trend shows "-50%" (not "+25%")

---

## 🎯 Priority Summary

### Critical (Fix This Week):
1. 🔴 Stats duplication bug (Phase 1.1)
2. 🔴 Streak integration (Phase 1.2)

### High (Fix Next Week):
3. 🟡 Fake trend data (Phase 1.3)
4. 🟡 Timezone consistency audit

### Medium (Fix When Possible):
5. 🟢 Data migration scripts
6. 🟢 Comprehensive test suite

---

## 📝 Notes

- Global XP/Level stats ARE working correctly
- Display components ARE using real data
- Infrastructure EXISTS, just has logic bugs
- Fixes are surgical, not architectural rewrites
- Most issues can be fixed in 1-2 days

---

**Next Step**: Implement Phase 1.1 (Stats Duplication Fix) first, then Phase 1.2 (Streak Integration).
