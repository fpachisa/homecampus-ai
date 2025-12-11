/**
 * useStudentDashboardStats Hook
 *
 * React hook for accessing comprehensive student dashboard statistics.
 * Handles loading states, error handling, and data refresh.
 */

import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useActiveProfile } from '../contexts/ActiveProfileContext';
import { getStudentDashboardData } from '../services/studentDashboardService';
import type { StudentDashboardData } from '../types/studentDashboard';

export interface UseStudentDashboardStatsReturn extends StudentDashboardData {
  isLoading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
}

/**
 * Hook to fetch and manage student dashboard statistics
 *
 * @returns Dashboard data with loading/error states and refresh function
 *
 * @example
 * ```tsx
 * const { overview, learnMode, isLoading, error, refresh } = useStudentDashboardStats();
 *
 * if (isLoading) return <LoadingSpinner />;
 * if (error) return <ErrorMessage message={error} />;
 *
 * return <DashboardView data={overview} />;
 * ```
 */
export function useStudentDashboardStats(studentId?: string): UseStudentDashboardStatsReturn {
  const { user } = useAuth();
  const { activeProfile } = useActiveProfile();
  const [data, setData] = useState<StudentDashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Use effective UID: studentId (if provided), activeProfile (for Netflix style), or user's UID
  const effectiveUid = studentId || activeProfile?.uid || user?.uid;

  const fetchData = async () => {
    if (!effectiveUid) {
      setIsLoading(false);
      setError('User not authenticated');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const dashboardData = await getStudentDashboardData(effectiveUid);
      setData(dashboardData);
    } catch (err) {
      console.error('Error fetching dashboard stats:', err);
      setError(err instanceof Error ? err.message : 'Failed to load dashboard data');
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch data on mount and when effectiveUid changes
  useEffect(() => {
    fetchData();
  }, [effectiveUid]);

  // Refresh function for manual data reload
  const refresh = async () => {
    await fetchData();
  };

  // Return data or empty structure while loading
  if (!data) {
    return {
      overview: {
        stats: {
          currentLevel: 0,
          totalXP: 0,
          xpProgress: { current: 0, needed: 0, percentage: 0 },
          currentStreak: 0,
          longestStreak: 0,
          totalTimeSeconds: 0,
          overallAccuracy: 0,
          totalProblemsSolved: 0,
          topicsStarted: 0,
          topicsCompleted: 0,
          totalAchievements: 0
        },
        activityHeatmap: [],
        weekComparison: {
          thisWeek: { problemsSolved: 0, timeSpentSeconds: 0, accuracy: 0, xpEarned: 0 },
          lastWeek: { problemsSolved: 0, timeSpentSeconds: 0, accuracy: 0, xpEarned: 0 },
          trends: { problemsTrend: 0, timeTrend: 0, accuracyTrend: 0, xpTrend: 0 }
        },
        topicsOverview: [],
        performanceCharts: {
          accuracyOverTime: [],
          problemsPerDay: [],
          timePerDay: [],
          xpPerWeek: []
        }
      },
      learnMode: {
        summary: {
          topicsInProgress: 0,
          totalProblemsSolved: 0,
          totalHintsUsed: 0,
          averageHintsPerProblem: 0,
          solutionsViewed: 0,
          totalTimeSeconds: 0,
          overallAccuracy: 0
        },
        topicsBreakdown: [],
        hintsAnalysis: {
          totalHints: 0,
          averageHintsPerProblem: 0,
          byTopic: []
        },
        masteryTimeline: []
      },
      practiceMode: {
        summary: {
          pathsInProgress: 0,
          totalProblemsSolved: 0,
          overallAccuracy: 0,
          totalTimeSeconds: 0,
          speedChallengesCompleted: 0
        },
        pathsProgress: [],
        learnVsPracticeComparison: {
          learn: { accuracy: 0, problemsSolved: 0, averageTimePerProblem: 0, hintsAvailable: true },
          practice: { accuracy: 0, problemsSolved: 0, averageTimePerProblem: 0, hintsAvailable: false },
          insight: ''
        }
      },
      achievements: {
        summary: {
          totalUnlocked: 0,
          totalAvailable: 0,
          percentageComplete: 0,
          totalXPFromAchievements: 0
        },
        categories: [],
        recentAchievements: []
      },
      isLoading,
      error,
      refresh
    };
  }

  return {
    ...data,
    isLoading,
    error,
    refresh
  };
}
