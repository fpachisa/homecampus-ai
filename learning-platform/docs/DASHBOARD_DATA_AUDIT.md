# Student Dashboard Data Audit

## Current Data Collection Status

### ✅ **Already Tracked (Available Now)**

#### Global Stats (`userProfile.gamification`)
- ✅ `totalXP` - Aggregated from all practice topics
- ✅ `currentLevel` - Calculated from totalXP
- ✅ `currentStreak` - Daily activity streak
- ✅ `longestStreak` - Best streak ever
- ✅ `lastActivityDate` - YYYY-MM-DD format
- ✅ `streakDates` - Array of active dates (last 30 days)
- ✅ `totalAchievements` - Deduplicated count
- ✅ `lastUpdated` - ISO timestamp

**Source:** `globalStatsAggregator.aggregateGlobalStats()`

#### Practice Mode (`users/{uid}/practice/{topicId}`)
Per-topic documents with:
- ✅ `totalXP` - XP earned in this topic
- ✅ `currentLevel` - Level in this topic
- ✅ `totalProblemsCorrect` - Problems solved
- ✅ `totalProblemsAttempted` - Total attempts
- ✅ `totalTimeSpentSeconds` - Time spent
- ✅ `achievements[]` - Array of achievement objects
- ✅ `nodes` - Node progress (completed, current, locked)
- ✅ `lastUpdated` - Timestamp

**Source:** `savePracticeProgress()` in `firestoreProgressService.ts`

#### Learn Mode (`users/{uid}/learn/{subtopicId}`)
Per-subtopic documents with:
- ✅ `sessionStats.correctAnswers` - Problems solved
- ✅ `sessionStats.problemsAttempted` - Total attempts
- ✅ `sessionStats.hintsProvided` - Hints used
- ✅ `sessionStats.totalTimeSpent` - Time in seconds
- ✅ `sectionProgress.masteredSections[]` - Array of mastered section numbers
- ✅ `sectionProgress.currentSection` - Current section number
- ✅ `lastUpdated` - Timestamp

**Source:** `saveLearnProgress()` in `firestoreProgressService.ts`

#### Progress Summary (`progressSummaries/{uid}`)
Denormalized for parent dashboard:
- ✅ `learnSubtopics[subtopicId]` - Per-subtopic summary
  - displayName, topicId, grade, progress%, lastActive
  - problemsCorrect, timeSpent, sectionsCompleted, totalSections
- ✅ `practiceTopics[topicId]` - Per-topic summary
  - displayName, nodesCompleted, totalNodes, totalXP, currentLevel, lastActive
- ✅ `recentActivity[]` - Array of activity entries
  - date, topicId, activityType ('learn'|'practice'), problemsSolved, timeSpent

**Source:** `saveLearnProgress()` and `savePracticeProgress()`

---

### ⚠️ **Partially Tracked (Needs Aggregation)**

#### Daily Activity Heatmap
- ✅ **Have:** `streakDates[]` in `userProfile.gamification` (last 30 days, boolean activity)
- ❌ **Need:** Full 90-day history with granular data (problems, time, XP per day)
- ❌ **Need:** Activity level categorization (none/low/medium/high)

**Gap:** Need to track daily stats for 90 days, not just boolean "active or not"

#### Week-over-Week Comparison
- ✅ **Have:** `recentActivity[]` in `ProgressSummary` (raw activity log)
- ❌ **Need:** Pre-calculated weekly aggregates (this week vs last week)
- ❌ **Need:** Trend percentages (+25%, -10%, etc.)

**Gap:** Need to aggregate activity by week for comparison

#### Performance Over Time (Charts)
- ✅ **Have:** Per-session data exists in Firestore documents
- ❌ **Need:** Time-series data for charts (accuracy, problems, time, XP over 30 days)
- ❌ **Need:** Historical snapshots (not just cumulative totals)

**Gap:** Need to track daily/weekly snapshots for trending

#### Topics Overview Table
- ✅ **Have:** `learnSubtopics` and `practiceTopics` in `ProgressSummary`
- ✅ **Have:** Per-topic accuracy and time spent
- ⚠️ **Need:** Better status calculation ('active', 'paused', 'completed', 'locked')
- ⚠️ **Need:** Estimated total problems per topic

**Gap:** Need better topic status logic and total problem estimates

---

### ❌ **Not Tracked (Need to Implement)**

#### Learn Mode Specific
- ❌ **Solutions Viewed Count** - Not currently tracked
  - Need to add `solutionsViewed` counter to `sessionStats`
- ❌ **Per-Section Stats** - Not granular enough
  - Need `hintsUsed` and `problemsSolved` per section
- ❌ **Mastery Timeline** - Events not stored
  - Need to track date when each section was mastered

#### Practice Mode Specific
- ❌ **Speed Challenges Completed** - Not tracked
  - Need flag/counter for speed challenge mode
- ❌ **Per-Node Time Spent** - Only global time tracked
  - Need `timeSpentSeconds` per node
- ❌ **Node Layer Categorization** - Not aggregated
  - Have layer info in YAML, but not in progress tracking

#### Performance Analytics
- ❌ **Average Time Per Problem** - Not calculated or stored
  - Need to track per-problem timing (optional, could be expensive)
- ❌ **Accuracy Trends** - Only current accuracy stored
  - Need daily accuracy snapshots for trending
- ❌ **Most Active Time of Day** - Not tracked
  - Need to log session start times and analyze

#### Insights & Intelligence
- ❌ **Struggle Area Detection** - Not automated
  - Need logic to flag topics with high hint usage or low accuracy
- ❌ **Best/Worst Topic Identification** - Not stored
  - Need comparative analysis across topics
- ❌ **Improvement Trends** - Not calculated
  - Need week-over-week or month-over-month trend analysis

---

## Data Collection Priority

### 🔴 **Critical (Required for MVP Dashboard)**

1. **Daily Activity Log (90 days)** - For heatmap
   - Store: `{ date, learnProblems, practiceProblems, totalTime, xpEarned, accuracy }`
   - Collection: `users/{uid}/dailyActivity/{YYYY-MM-DD}`

2. **Solutions Viewed Counter** - For Learn Mode tab
   - Add to: `LearnConversation.sessionStats.solutionsViewed`
   - Increment when solution agent is called

3. **Mastery Events Log** - For Learn Mode timeline
   - Store: `{ date, topicId, sectionId, sectionName, sectionNumber }`
   - Collection: `users/{uid}/masteryEvents` (subcollection)

4. **Weekly Aggregates** - For week comparison
   - Pre-calculate weekly stats during daily activity logging
   - Store last 12 weeks for trending

### 🟡 **Important (Enhanced Experience)**

5. **Per-Section Learn Stats** - For detailed breakdown
   - Expand section progress to include `{ hintsUsed, problemsSolved, timeSpent }`

6. **Per-Node Time Tracking** - For practice node detail
   - Add `timeSpentSeconds` to node progress

7. **Most Active Time Analysis** - For insights
   - Log session start hour, analyze weekly to find pattern

### 🟢 **Nice-to-Have (Future Enhancement)**

8. **Per-Problem Timing** - For average time metrics
   - Track start/end time per problem (could be expensive)

9. **Speed Challenge Tracking** - For practice mode
   - Add `speedChallengeMode` flag and counter

10. **Automated Insights Engine** - For smart recommendations
    - Background job to analyze trends and generate insights

---

## Implementation Strategy

### Phase 1: Fix Critical Gaps (This PR)
1. Create `dailyActivity` subcollection with rich daily stats
2. Add `solutionsViewed` to Learn Mode session stats
3. Create `masteryEvents` subcollection
4. Implement weekly aggregation in daily activity logger

### Phase 2: Enhanced Tracking (Next PR)
5. Expand section progress with detailed stats
6. Add time tracking to practice nodes
7. Log session start times for activity pattern analysis

### Phase 3: Intelligence Layer (Future)
8. Build insights engine for automated recommendations
9. Add per-problem timing (if needed for analytics)
10. Implement advanced features (speed challenges, etc.)

---

## New Firestore Collections

### `users/{uid}/dailyActivity/{YYYY-MM-DD}`
```typescript
{
  date: "2024-11-13",
  learn: {
    problemsSolved: 12,
    problemsAttempted: 15,
    hintsUsed: 4,
    solutionsViewed: 1,
    timeSeconds: 1820,
    accuracy: 80
  },
  practice: {
    problemsSolved: 8,
    problemsAttempted: 10,
    timeSeconds: 960,
    accuracy: 80
  },
  combined: {
    totalProblemsSolved: 20,
    totalTimeSeconds: 2780,
    xpEarned: 145,
    overallAccuracy: 80
  },
  activityLevel: "high", // none/low/medium/high (for heatmap)
  updatedAt: Timestamp
}
```

### `users/{uid}/masteryEvents` (subcollection)
```typescript
{
  eventId: "auto-generated-id",
  date: "2024-11-13",
  timestamp: Timestamp,
  topicId: "s3-math-trigonometry",
  topicDisplayName: "Trigonometry",
  subtopicId: "s3-math-trigonometry-basic-ratios",
  sectionId: "section-1",
  sectionName: "Basic Ratios",
  sectionNumber: 1
}
```

### `users/{uid}/weeklyStats/{YYYY-Wnn}` (optional, for caching)
```typescript
{
  weekStart: "2024-11-11", // Monday
  weekEnd: "2024-11-17",   // Sunday
  problemsSolved: 67,
  timeSeconds: 15420,
  xpEarned: 487,
  accuracy: 84,
  daysActive: 5
}
```

---

## Affected Services

### Update Required:
1. ✏️ `firestoreProgressService.ts` - Add daily activity logging
2. ✏️ `pathProgressService.ts` - Add node time tracking
3. ✏️ `solutionAgentService.ts` - Increment solutions viewed counter
4. ✏️ Create `dailyActivityService.ts` - New service for daily stats
5. ✏️ Create `masteryEventService.ts` - New service for mastery tracking

### New Service Required:
6. ✨ `studentDashboardService.ts` - Aggregation and querying for dashboard

---

## Migration Plan

### For Existing Users:
- **Daily Activity:** No backfill possible, start from dashboard launch
- **Solutions Viewed:** Start counter at 0, track going forward
- **Mastery Events:** Can backfill from current `sectionProgress.masteredSections` (no dates though)
- **Weekly Stats:** Calculate from existing `recentActivity[]` where available

### Data Retention:
- Daily Activity: Keep 90 days (auto-prune older)
- Mastery Events: Keep forever (achievement timeline)
- Weekly Stats: Keep 12 weeks (for trending)
