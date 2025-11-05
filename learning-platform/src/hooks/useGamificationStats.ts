/**
 * Hook for accessing gamification stats
 *
 * Provides easy access to user's gamification data (XP, level, streak, achievements)
 * from the UserProfile loaded in AuthContext.
 */

import { useAuth } from '../contexts/AuthContext';

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
 * @returns Gamification stats with loading state
 *
 * @example
 * ```tsx
 * const { totalXP, currentLevel, isLoading } = useGamificationStats();
 *
 * if (isLoading) return <LoadingSpinner />;
 *
 * return <div>Level {currentLevel} - {totalXP} XP</div>;
 * ```
 */
export function useGamificationStats(): GamificationStats {
  const { userProfile, loading } = useAuth();

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

  // Return stats from userProfile.gamification if available
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
