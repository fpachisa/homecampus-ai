/**
 * Hook for accessing gamification stats
 *
 * Provides easy access to user's gamification data (XP, level, streak, achievements).
 *
 * PRIORITY:
 * 1. If pathProgress is provided (practice mode), read real-time data from it
 * 2. Otherwise, fall back to userProfile.gamification (non-practice mode)
 *
 * This ensures stats update in real-time during practice sessions while maintaining
 * backward compatibility for components outside practice mode.
 */

import { useAuth } from '../contexts/AuthContext';
import type { PathProgress } from '../types/practice';

export interface GamificationStats {
  totalXP: number;
  currentLevel: number;
  currentStreak: number;
  longestStreak: number;
  totalAchievements: number;
  isLoading: boolean;
  lastUpdated?: string;
}

/**
 * Custom hook to access gamification stats
 *
 * @param pathProgress - Optional PathProgress from practice mode for real-time updates
 * @returns Gamification stats with loading state
 *
 * @example
 * ```tsx
 * // In practice mode (real-time updates)
 * const { totalXP, currentLevel } = useGamificationStats(pathProgress);
 *
 * // Outside practice mode (fallback to userProfile)
 * const { totalXP, currentLevel } = useGamificationStats();
 * ```
 */
export function useGamificationStats(pathProgress?: PathProgress | null): GamificationStats {
  const { userProfile, loading } = useAuth();

  // PRIORITY 1: Use PathProgress if provided (real-time data in practice mode)
  if (pathProgress) {
    return {
      totalXP: pathProgress.totalXP || 0,
      currentLevel: pathProgress.currentLevel || 1,
      currentStreak: pathProgress.streak?.currentStreak || 0,
      longestStreak: pathProgress.streak?.longestStreak || 0,
      totalAchievements: pathProgress.achievements?.length || 0,
      lastUpdated: pathProgress.lastUpdated?.toISOString(),
      isLoading: false,
    };
  }

  // Return default stats if still loading or no profile
  if (loading || !userProfile) {
    return {
      totalXP: 0,
      currentLevel: 1,
      currentStreak: 0,
      longestStreak: 0,
      totalAchievements: 0,
      isLoading: loading,
    };
  }

  // PRIORITY 2: Fall back to userProfile.gamification (non-practice mode)
  if (userProfile.gamification) {
    return {
      totalXP: userProfile.gamification.totalXP,
      currentLevel: userProfile.gamification.currentLevel,
      currentStreak: userProfile.gamification.currentStreak,
      longestStreak: userProfile.gamification.longestStreak,
      totalAchievements: userProfile.gamification.totalAchievements,
      lastUpdated: userProfile.gamification.lastUpdated,
      isLoading: false,
    };
  }

  // Return default stats if gamification data not yet populated
  return {
    totalXP: 0,
    currentLevel: 1,
    currentStreak: 0,
    longestStreak: 0,
    totalAchievements: 0,
    isLoading: false,
  };
}
