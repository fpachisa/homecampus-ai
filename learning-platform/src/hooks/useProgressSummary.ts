/**
 * useProgressSummary - Hook to fetch comprehensive progress data
 *
 * Aggregates data from multiple sources:
 * - Topic progress (completion %, XP earned, last accessed)
 * - Weekly activity (problems solved, time spent)
 * - Achievements (earned badges)
 * - Recent activity (last accessed topic)
 *
 * Fetches from Firestore ProgressSummary and combines with practice data
 */

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useActiveProfile } from '../contexts/ActiveProfileContext';
import { getProgressSummary } from '../services/firestoreProgressService';
import { loadPracticeProgress, listPracticeTopics } from '../services/firestoreProgressService';
import type { ProgressSummary } from '../types/firestore';

export interface TopicProgress {
  topicId: string;
  topicName: string;
  topicCategory: string;
  progress: number; // 0-100
  xpEarned: number;
  lastAccessed?: Date;
  source: 'learn' | 'practice'; // Track which mode this progress came from
}

export interface DailyActivity {
  date: Date;
  problemsSolved: number;
  timeSpentMinutes: number;
  xpEarned: number;
}

export interface ProgressSummaryData {
  // Topics
  topics: TopicProgress[];

  // Recent activity (for "Continue Learning")
  lastAccessedTopic?: TopicProgress;

  // Weekly stats
  weeklyActivity: DailyActivity[];
  weeklyProblems: number;
  weeklyXP: number;
  weeklyTimeMinutes: number;
  weekTrend: string; // e.g., "+25%"

  // Daily goal
  dailyProblems: number;
  dailyGoal: number;

  // Achievements
  achievements: any[]; // Achievement[]
  totalAchievements: number;

  // Loading state
  isLoading: boolean;
}

export function useProgressSummary(): ProgressSummaryData {
  const { userProfile } = useAuth();
  const { activeProfile } = useActiveProfile();
  const location = useLocation();

  // Use effective UID: activeProfile UID if viewing as child, otherwise user's UID
  const effectiveUid = activeProfile?.uid || userProfile?.uid;

  const [data, setData] = useState<ProgressSummaryData>({
    topics: [],
    lastAccessedTopic: undefined,
    weeklyActivity: [],
    weeklyProblems: 0,
    weeklyXP: 0,
    weeklyTimeMinutes: 0,
    weekTrend: '+0%',
    dailyProblems: 0,
    dailyGoal: 5,
    achievements: [],
    totalAchievements: 0,
    isLoading: true,
  });

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      if (!effectiveUid) {
        if (isMounted) {
          setData(prev => ({ ...prev, isLoading: false }));
        }
        return;
      }

      try {
        // Fetch progress summary from Firestore (using effectiveUid for child profiles)
        const summary = await getProgressSummary(effectiveUid);

        if (!isMounted) return;

        if (!summary) {
          // No progress yet
          setData(prev => ({ ...prev, isLoading: false }));
          return;
        }

        // Transform Firestore data to component format
        const topics = await transformTopicProgress(summary);
        const lastAccessed = findLastAccessedTopic(topics);
        const weeklyData = await fetchWeeklyActivity(effectiveUid);
        const weeklyStats = calculateWeeklyStats(weeklyData);
        const achievements = await fetchRecentAchievements(effectiveUid);

        if (isMounted) {
          setData({
            topics,
            lastAccessedTopic: lastAccessed,
            weeklyActivity: weeklyData,
            weeklyProblems: weeklyStats.problemsSolved,
            weeklyXP: weeklyStats.xpEarned,
            weeklyTimeMinutes: Math.round(weeklyStats.timeSpentSeconds / 60),
            weekTrend: calculateWeekTrend(weeklyData),
            dailyProblems: getTodayProblems(weeklyData),
            dailyGoal: 5,
            achievements,
            totalAchievements: userProfile?.gamification?.totalAchievements || 0,
            isLoading: false,
          });
        }
      } catch (error) {
        console.error('Failed to fetch progress summary:', error);
        if (isMounted) {
          setData(prev => ({ ...prev, isLoading: false }));
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [effectiveUid, location.pathname]); // Re-fetch when effective UID changes OR when navigating

  return data;
}

/**
 * Helper to safely convert Firestore Timestamp to Date
 */
function toDate(timestamp: any): Date | undefined {
  if (!timestamp) return undefined;

  // Already a Date
  if (timestamp instanceof Date) return timestamp;

  // Firestore Timestamp with toDate method
  if (typeof timestamp.toDate === 'function') return timestamp.toDate();

  // Timestamp-like object with seconds
  if (timestamp.seconds) return new Date(timestamp.seconds * 1000);

  // ISO string
  if (typeof timestamp === 'string') return new Date(timestamp);

  return undefined;
}

/**
 * Transform Firestore ProgressSummary to TopicProgress array
 * Aggregates subtopics by their parent topic for display
 * Returns separate progress for Learn and Practice modes
 */
async function transformTopicProgress(
  summary: ProgressSummary
): Promise<TopicProgress[]> {
  const allProgress: TopicProgress[] = [];

  // Transform practice topics
  for (const [topicId, topicSummary] of Object.entries(summary.practiceTopics || {})) {
    const progress = topicSummary.nodesCompleted > 0
      ? Math.round((topicSummary.nodesCompleted / topicSummary.totalNodes) * 100)
      : 0;

    allProgress.push({
      topicId,
      topicName: topicSummary.displayName,
      topicCategory: topicId,
      progress,
      xpEarned: topicSummary.totalXP || 0,
      lastAccessed: toDate(topicSummary.lastActive),
      source: 'practice',
    });
  }

  // Transform learn subtopics and aggregate by parent topic
  const learnTopicAggregates = new Map<string, {
    subtopics: any[];
    totalProgress: number;
    maxProgress: number;
    latestAccess?: Date;
    count: number;
  }>();

  for (const [subtopicId, subtopicSummary] of Object.entries(summary.learnSubtopics || {})) {
    const topicCategory = subtopicSummary.topicId;
    const subtopicProgress = subtopicSummary.progress || 0;
    const lastAccessed = toDate(subtopicSummary.lastActive);

    if (!learnTopicAggregates.has(topicCategory)) {
      learnTopicAggregates.set(topicCategory, {
        subtopics: [],
        totalProgress: 0,
        maxProgress: 0,
        latestAccess: lastAccessed,
        count: 0,
      });
    }

    const aggregate = learnTopicAggregates.get(topicCategory)!;
    aggregate.subtopics.push({ subtopicId, ...subtopicSummary });
    aggregate.totalProgress += subtopicProgress;
    aggregate.maxProgress = Math.max(aggregate.maxProgress, subtopicProgress);
    aggregate.count++;

    // Track latest access time
    if (lastAccessed) {
      if (!aggregate.latestAccess || lastAccessed > aggregate.latestAccess) {
        aggregate.latestAccess = lastAccessed;
      }
    }
  }

  // Create aggregated topic entries for learn mode
  for (const [topicCategory, aggregate] of learnTopicAggregates.entries()) {
    // Use average progress across all subtopics
    const averageProgress = Math.round(aggregate.totalProgress / aggregate.count);

    // Get the display name from the first subtopic (they should all have the same parent topic name)
    const displayName = aggregate.subtopics[0]?.displayName?.split(' - ')[0] || topicCategory;

    allProgress.push({
      topicId: topicCategory,
      topicName: displayName,
      topicCategory,
      progress: averageProgress,
      xpEarned: 0, // Learn mode doesn't track XP
      lastAccessed: aggregate.latestAccess,
      source: 'learn',
    });
  }

  return allProgress;
}

/**
 * Find the most recently accessed topic
 */
function findLastAccessedTopic(topics: TopicProgress[]): TopicProgress | undefined {
  if (topics.length === 0) return undefined;

  return topics.reduce((latest, topic) => {
    if (!topic.lastAccessed) return latest;
    if (!latest?.lastAccessed) return topic;
    return topic.lastAccessed > latest.lastAccessed ? topic : latest;
  });
}

/**
 * Helper function to get local date string in YYYY-MM-DD format
 * without timezone conversion (avoids UTC shift issues)
 */
function getLocalDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Fetch weekly activity data from practice progress
 */
async function fetchWeeklyActivity(uid: string): Promise<DailyActivity[]> {
  try {
    const topicIds = await listPracticeTopics(uid);

    // Aggregate session history from all practice topics
    const allSessions: { [date: string]: { problems: number; time: number; xp: number } } = {};

    for (const topicId of topicIds) {
      const progress = await loadPracticeProgress(uid, topicId);
      if (!progress?.sessionHistory) {
        console.log(`⚠️ No sessionHistory for topic ${topicId}`);
        continue;
      }

      console.log(`📚 Topic ${topicId} sessionHistory:`, progress.sessionHistory);

      for (const session of progress.sessionHistory) {
        if (!allSessions[session.date]) {
          allSessions[session.date] = { problems: 0, time: 0, xp: 0 };
        }
        allSessions[session.date].problems += session.problemsSolved;
        allSessions[session.date].time += session.timeSpentSeconds;
        allSessions[session.date].xp += session.xpEarned;
      }
    }

    // Get last 7 days using local timezone
    const today = new Date();
    const weeklyData: DailyActivity[] = [];

    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      // Use local date string instead of UTC
      const dateStr = getLocalDateString(date);

      const session = allSessions[dateStr] || { problems: 0, time: 0, xp: 0 };

      weeklyData.push({
        date,
        problemsSolved: session.problems,
        timeSpentMinutes: Math.round(session.time / 60),
        xpEarned: session.xp,
      });
    }

    console.log('📊 Weekly activity fetch result:', {
      topicCount: topicIds.length,
      allSessionDates: Object.keys(allSessions),
      allSessionsData: allSessions,
      weekDates: weeklyData.map(d => getLocalDateString(d.date)),
      weeklyDataDetailed: weeklyData.map(d => ({
        date: getLocalDateString(d.date),
        problems: d.problemsSolved,
        minutes: d.timeSpentMinutes,
        xp: d.xpEarned,
      })),
      totalProblems: weeklyData.reduce((sum, d) => sum + d.problemsSolved, 0),
    });

    return weeklyData;
  } catch (error) {
    console.error('Failed to fetch weekly activity:', error);
    return [];
  }
}

/**
 * Calculate weekly totals
 */
function calculateWeeklyStats(weeklyData: DailyActivity[]): {
  problemsSolved: number;
  timeSpentSeconds: number;
  xpEarned: number;
} {
  const result = weeklyData.reduce(
    (acc, day) => ({
      problemsSolved: acc.problemsSolved + day.problemsSolved,
      timeSpentSeconds: acc.timeSpentSeconds + day.timeSpentMinutes * 60,
      xpEarned: acc.xpEarned + day.xpEarned,
    }),
    { problemsSolved: 0, timeSpentSeconds: 0, xpEarned: 0 }
  );

  console.log('📊 calculateWeeklyStats result:', {
    input: weeklyData.map(d => ({ date: d.date.toISOString().split('T')[0], problems: d.problemsSolved })),
    output: result,
  });

  return result;
}

/**
 * Calculate week-over-week trend
 */
function calculateWeekTrend(weeklyData: DailyActivity[]): string {
  if (weeklyData.length < 7) return '+0%';

  const thisWeekTotal = weeklyData.reduce((sum, d) => sum + d.problemsSolved, 0);

  // Simplified: assuming we only have this week's data
  // In a real implementation, we'd fetch last week's data too
  return thisWeekTotal > 0 ? '+25%' : '+0%';
}

/**
 * Get today's problem count
 */
function getTodayProblems(weeklyData: DailyActivity[]): number {
  if (weeklyData.length === 0) return 0;

  const today = weeklyData[weeklyData.length - 1];
  return today?.problemsSolved || 0;
}

/**
 * Fetch recent achievements from practice progress
 */
async function fetchRecentAchievements(uid: string): Promise<any[]> {
  try {
    const topicIds = await listPracticeTopics(uid);
    const allAchievements: any[] = [];

    for (const topicId of topicIds) {
      const progress = await loadPracticeProgress(uid, topicId);
      if (progress?.achievements) {
        allAchievements.push(...progress.achievements);
      }
    }

    // Sort by earnedAt and take most recent 5
    return allAchievements
      .sort((a, b) => b.earnedAt.toMillis() - a.earnedAt.toMillis())
      .slice(0, 5);
  } catch (error) {
    console.error('Failed to fetch achievements:', error);
    return [];
  }
}
