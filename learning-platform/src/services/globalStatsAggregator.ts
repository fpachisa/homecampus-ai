/**
 * Global Stats Aggregator Service
 *
 * Aggregates stats across ALL practice topics to calculate true global values.
 * CRITICAL: This is the SINGLE SOURCE OF TRUTH for global stats.
 *
 * Problem Solved:
 * - Previously: XP/Level stored per-topic, dashboard showed wrong totals
 * - Now: Queries ALL topics, sums XP, calculates correct level
 */

import { collection, getDocs } from 'firebase/firestore';
import { firestore } from './firebase';
import { achievementService } from './achievementService';

// ============================================
// TYPES
// ============================================

export interface GlobalStats {
  totalXP: number;
  currentLevel: number;
  totalProblemsSolved: number;
  totalProblemsAttempted: number;
  totalTimeSpentSeconds: number;
  totalAchievements: number;
  achievementIds: string[]; // Deduplicated achievement IDs
}

// ============================================
// AGGREGATION FUNCTIONS
// ============================================

/**
 * Aggregate global stats from ALL practice topics
 *
 * @param uid - User ID
 * @returns Aggregated global stats
 */
export async function aggregateGlobalStats(uid: string): Promise<GlobalStats> {
  try {
    let totalXP = 0;
    let totalProblemsSolved = 0;
    let totalProblemsAttempted = 0;
    let totalTimeSpentSeconds = 0;
    const achievementIdsSet = new Set<string>();

    // 1. Aggregate from PRACTICE mode (users/{uid}/practice/{topicId})
    const practiceRef = collection(firestore, `users/${uid}/practice`);
    const practiceSnapshot = await getDocs(practiceRef);

    practiceSnapshot.forEach(doc => {
      const data = doc.data();
      totalXP += data.totalXP || 0;
      totalProblemsSolved += data.totalProblemsCorrect || 0;
      totalProblemsAttempted += data.totalProblemsAttempted || 0;
      totalTimeSpentSeconds += data.totalTimeSpentSeconds || 0;

      if (data.achievements && Array.isArray(data.achievements)) {
        data.achievements.forEach((achievement: { id: string }) => {
          if (achievement && achievement.id) {
            achievementIdsSet.add(achievement.id);
          }
        });
      }
    });

    // 2. Aggregate from LEARN mode (users/{uid}/learn/{subtopicId})
    const learnRef = collection(firestore, `users/${uid}/learn`);
    const learnSnapshot = await getDocs(learnRef);

    learnSnapshot.forEach(doc => {
      const data = doc.data();

      // Learn mode tracks stats in sessionStats
      if (data.sessionStats) {
        totalProblemsSolved += data.sessionStats.correctAnswers || 0;
        totalProblemsAttempted += data.sessionStats.problemsAttempted || 0;
        totalTimeSpentSeconds += data.sessionStats.totalTimeSpent || 0;
      }

      // Learn mode doesn't have XP per problem, but we can assign a fixed amount
      // Let's give 25 XP per correct answer in learn mode (same as practice)
      const learnXP = (data.sessionStats?.correctAnswers || 0) * 25;
      totalXP += learnXP;
    });

    // Calculate level from TOTAL XP across ALL modes
    const currentLevel = calculateLevelFromXP(totalXP);

    console.log('📊 Global Stats Aggregation:', {
      practiceTopics: practiceSnapshot.size,
      learnTopics: learnSnapshot.size,
      totalXP,
      currentLevel,
      totalProblemsSolved,
      totalAchievements: achievementIdsSet.size
    });

    return {
      totalXP,
      currentLevel,
      totalProblemsSolved,
      totalProblemsAttempted,
      totalTimeSpentSeconds,
      totalAchievements: achievementIdsSet.size,
      achievementIds: Array.from(achievementIdsSet)
    };
  } catch (error) {
    console.error('Error aggregating global stats:', error);

    // Return zero stats on error (safe fallback)
    return {
      totalXP: 0,
      currentLevel: 1,
      totalProblemsSolved: 0,
      totalProblemsAttempted: 0,
      totalTimeSpentSeconds: 0,
      totalAchievements: 0,
      achievementIds: []
    };
  }
}

/**
 * Calculate level from total XP
 * Uses same logic as achievementService for consistency
 *
 * @param totalXP - Total XP across all topics
 * @returns Current level
 */
function calculateLevelFromXP(totalXP: number): number {
  // Use achievementService.calculateLevel directly (getXPProgress doesn't return level)
  return achievementService.calculateLevel(totalXP);
}

/**
 * Calculate global accuracy percentage
 *
 * @param stats - Global stats with attempts and correct answers
 * @returns Accuracy percentage (0-100)
 */
export function calculateGlobalAccuracy(stats: GlobalStats): number {
  if (stats.totalProblemsAttempted === 0) return 0;
  return Math.round((stats.totalProblemsSolved / stats.totalProblemsAttempted) * 100);
}

/**
 * Format time in seconds to human-readable string
 *
 * @param seconds - Time in seconds
 * @returns Formatted string (e.g., "2h 15m", "45m", "0m")
 */
export function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours === 0 && minutes === 0) return '0m';
  if (hours === 0) return `${minutes}m`;
  return `${hours}h ${minutes}m`;
}

// ============================================
// EXPORTS
// ============================================

export const globalStatsAggregator = {
  aggregateGlobalStats,
  calculateGlobalAccuracy,
  formatTime
};
