/**
 * Daily Activity Service
 *
 * Tracks granular daily statistics for:
 * - Activity heatmap (90-day history)
 * - Performance charts (trends over time)
 * - Week-over-week comparisons
 *
 * Collection: users/{uid}/dailyActivity/{YYYY-MM-DD}
 */

import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  orderBy,
  limit as firestoreLimit,
  Timestamp,
  serverTimestamp
} from 'firebase/firestore';
import { firestore } from './firebase';
import { getLocalDateString } from '../utils/dateUtils';

// ============================================
// TYPES
// ============================================

export interface DailyActivityStats {
  date: string;               // YYYY-MM-DD
  learn: {
    problemsSolved: number;
    problemsAttempted: number;
    hintsUsed: number;
    solutionsViewed: number;
    timeSeconds: number;
    accuracy: number;         // 0-100
  };
  practice: {
    problemsSolved: number;
    problemsAttempted: number;
    timeSeconds: number;
    accuracy: number;         // 0-100
  };
  combined: {
    totalProblemsSolved: number;
    totalTimeSeconds: number;
    xpEarned: number;
    overallAccuracy: number;
  };
  activityLevel: 'none' | 'low' | 'medium' | 'high';
  updatedAt?: Timestamp;
}

export interface ActivityUpdateData {
  mode: 'learn' | 'practice';
  problemsSolved: number;
  problemsAttempted: number;
  timeSeconds: number;
  xpEarned: number;
  hintsUsed?: number;         // Learn mode only
  solutionsViewed?: number;   // Learn mode only
}

// ============================================
// CONSTANTS
// ============================================

const ACTIVITY_RETENTION_DAYS = 90;

// Activity level thresholds (based on problems solved)
const ACTIVITY_THRESHOLDS = {
  none: 0,
  low: 1,      // 1-4 problems
  medium: 5,   // 5-14 problems
  high: 15     // 15+ problems
};

// ============================================
// CORE FUNCTIONS
// ============================================

/**
 * Update daily activity stats
 *
 * Increments today's stats with new session data.
 * Creates document if it doesn't exist.
 *
 * @param uid - User ID
 * @param data - Activity update data
 */
export async function updateDailyActivity(
  uid: string,
  data: ActivityUpdateData
): Promise<void> {
  const today = getLocalDateString();
  const docRef = doc(firestore, `users/${uid}/dailyActivity/${today}`);

  try {
    // Get existing data (if any)
    const docSnap = await getDoc(docRef);
    const existing = docSnap.exists()
      ? (docSnap.data() as DailyActivityStats)
      : createEmptyDayStats(today);

    // Update mode-specific stats
    if (data.mode === 'learn') {
      existing.learn.problemsSolved += data.problemsSolved;
      existing.learn.problemsAttempted += data.problemsAttempted;
      existing.learn.timeSeconds += data.timeSeconds;
      existing.learn.hintsUsed += data.hintsUsed || 0;
      existing.learn.solutionsViewed += data.solutionsViewed || 0;

      // Recalculate learn accuracy
      existing.learn.accuracy = existing.learn.problemsAttempted > 0
        ? Math.round((existing.learn.problemsSolved / existing.learn.problemsAttempted) * 100)
        : 0;
    } else {
      existing.practice.problemsSolved += data.problemsSolved;
      existing.practice.problemsAttempted += data.problemsAttempted;
      existing.practice.timeSeconds += data.timeSeconds;

      // Recalculate practice accuracy
      existing.practice.accuracy = existing.practice.problemsAttempted > 0
        ? Math.round((existing.practice.problemsSolved / existing.practice.problemsAttempted) * 100)
        : 0;
    }

    // Update combined stats
    existing.combined.totalProblemsSolved =
      existing.learn.problemsSolved + existing.practice.problemsSolved;
    existing.combined.totalTimeSeconds =
      existing.learn.timeSeconds + existing.practice.timeSeconds;
    existing.combined.xpEarned += data.xpEarned;

    // Recalculate overall accuracy
    const totalAttempted = existing.learn.problemsAttempted + existing.practice.problemsAttempted;
    existing.combined.overallAccuracy = totalAttempted > 0
      ? Math.round((existing.combined.totalProblemsSolved / totalAttempted) * 100)
      : 0;

    // Calculate activity level
    existing.activityLevel = calculateActivityLevel(existing.combined.totalProblemsSolved);

    // Add timestamp
    existing.updatedAt = serverTimestamp() as Timestamp;

    // Save to Firestore
    await setDoc(docRef, existing);

    console.log(`📅 Daily activity updated for ${today}:`, {
      mode: data.mode,
      problems: data.problemsSolved,
      time: data.timeSeconds,
      activityLevel: existing.activityLevel
    });
  } catch (error) {
    console.error('Error updating daily activity:', error);
    throw error;
  }
}

/**
 * Get daily activity for a date range
 *
 * @param uid - User ID
 * @param days - Number of days to fetch (default: 90)
 * @returns Array of daily activity stats
 */
export async function getDailyActivity(
  uid: string,
  days: number = 90
): Promise<DailyActivityStats[]> {
  try {
    const activityRef = collection(firestore, `users/${uid}/dailyActivity`);

    // Calculate start date
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    const startDateStr = getLocalDateString(startDate);

    // Query last N days
    const q = query(
      activityRef,
      where('date', '>=', startDateStr),
      orderBy('date', 'desc'),
      firestoreLimit(days)
    );

    const snapshot = await getDocs(q);
    const activities: DailyActivityStats[] = [];

    snapshot.forEach(doc => {
      activities.push(doc.data() as DailyActivityStats);
    });

    // Fill in missing days with empty stats
    const filledActivities = fillMissingDays(activities, days);

    return filledActivities;
  } catch (error) {
    console.error('Error fetching daily activity:', error);
    return [];
  }
}

/**
 * Get week-over-week comparison
 *
 * @param uid - User ID
 * @returns This week vs last week stats
 */
export async function getWeekComparison(uid: string): Promise<{
  thisWeek: WeekStats;
  lastWeek: WeekStats;
  trends: {
    problemsTrend: number;
    timeTrend: number;
    accuracyTrend: number;
    xpTrend: number;
  };
}> {
  try {
    // Get last 14 days of activity
    const activities = await getDailyActivity(uid, 14);

    // Split into this week and last week
    const thisWeekActivities = activities.slice(0, 7);
    const lastWeekActivities = activities.slice(7, 14);

    // Aggregate each week
    const thisWeek = aggregateWeek(thisWeekActivities);
    const lastWeek = aggregateWeek(lastWeekActivities);

    // Calculate trends (percentage change)
    const trends = {
      problemsTrend: calculateTrend(lastWeek.problemsSolved, thisWeek.problemsSolved),
      timeTrend: calculateTrend(lastWeek.timeSeconds, thisWeek.timeSeconds),
      accuracyTrend: calculateTrend(lastWeek.accuracy, thisWeek.accuracy),
      xpTrend: calculateTrend(lastWeek.xpEarned, thisWeek.xpEarned)
    };

    return { thisWeek, lastWeek, trends };
  } catch (error) {
    console.error('Error calculating week comparison:', error);

    // Return empty stats on error
    const emptyWeek: WeekStats = {
      problemsSolved: 0,
      timeSeconds: 0,
      accuracy: 0,
      xpEarned: 0
    };

    return {
      thisWeek: emptyWeek,
      lastWeek: emptyWeek,
      trends: { problemsTrend: 0, timeTrend: 0, accuracyTrend: 0, xpTrend: 0 }
    };
  }
}

/**
 * Get most active time of day
 *
 * Analyzes session start times from last 30 days.
 * Returns human-readable time range (e.g., "Weekdays 4-6pm")
 *
 * @param uid - User ID
 * @returns Most active time description
 */
export async function getMostActiveTime(_uid: string): Promise<string | undefined> {
  // TODO: Implement when we start tracking session start times
  // For now, return undefined
  return undefined;
}

/**
 * Prune old daily activity data
 *
 * Deletes activity records older than retention period.
 * Should be called periodically (e.g., weekly cleanup job)
 *
 * @param uid - User ID
 */
export async function pruneOldActivity(uid: string): Promise<void> {
  try {
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - ACTIVITY_RETENTION_DAYS);
    const cutoffDateStr = getLocalDateString(cutoffDate);

    const activityRef = collection(firestore, `users/${uid}/dailyActivity`);
    const q = query(activityRef, where('date', '<', cutoffDateStr));

    const snapshot = await getDocs(q);

    // TODO: Batch delete (requires admin SDK or client-side loop)
    console.log(`🗑️ Found ${snapshot.size} old activity records to prune`);
  } catch (error) {
    console.error('Error pruning old activity:', error);
  }
}

// ============================================
// HELPER FUNCTIONS
// ============================================

interface WeekStats {
  problemsSolved: number;
  timeSeconds: number;
  accuracy: number;
  xpEarned: number;
}

/**
 * Create empty stats for a day
 */
function createEmptyDayStats(date: string): DailyActivityStats {
  return {
    date,
    learn: {
      problemsSolved: 0,
      problemsAttempted: 0,
      hintsUsed: 0,
      solutionsViewed: 0,
      timeSeconds: 0,
      accuracy: 0
    },
    practice: {
      problemsSolved: 0,
      problemsAttempted: 0,
      timeSeconds: 0,
      accuracy: 0
    },
    combined: {
      totalProblemsSolved: 0,
      totalTimeSeconds: 0,
      xpEarned: 0,
      overallAccuracy: 0
    },
    activityLevel: 'none'
  };
}

/**
 * Calculate activity level based on problems solved
 */
function calculateActivityLevel(problemsSolved: number): 'none' | 'low' | 'medium' | 'high' {
  if (problemsSolved === 0) return 'none';
  if (problemsSolved < ACTIVITY_THRESHOLDS.medium) return 'low';
  if (problemsSolved < ACTIVITY_THRESHOLDS.high) return 'medium';
  return 'high';
}

/**
 * Fill in missing days with empty stats
 */
function fillMissingDays(
  activities: DailyActivityStats[],
  days: number
): DailyActivityStats[] {
  const filled: DailyActivityStats[] = [];
  const activityMap = new Map(activities.map(a => [a.date, a]));

  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = getLocalDateString(date);

    filled.push(activityMap.get(dateStr) || createEmptyDayStats(dateStr));
  }

  return filled.reverse(); // Oldest first
}

/**
 * Aggregate stats for a week
 */
function aggregateWeek(activities: DailyActivityStats[]): WeekStats {
  return activities.reduce(
    (acc, day) => ({
      problemsSolved: acc.problemsSolved + day.combined.totalProblemsSolved,
      timeSeconds: acc.timeSeconds + day.combined.totalTimeSeconds,
      accuracy: acc.accuracy + day.combined.overallAccuracy,
      xpEarned: acc.xpEarned + day.combined.xpEarned
    }),
    { problemsSolved: 0, timeSeconds: 0, accuracy: 0, xpEarned: 0 }
  );
}

/**
 * Calculate percentage trend
 */
function calculateTrend(oldValue: number, newValue: number): number {
  if (oldValue === 0) return newValue > 0 ? 100 : 0;
  return Math.round(((newValue - oldValue) / oldValue) * 100);
}

// ============================================
// EXPORTS
// ============================================

export const dailyActivityService = {
  updateDailyActivity,
  getDailyActivity,
  getWeekComparison,
  getMostActiveTime,
  pruneOldActivity
};
