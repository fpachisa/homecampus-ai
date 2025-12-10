/**
 * Hook for accessing gamification stats
 *
 * Provides easy access to user's gamification data (XP, level, streak, achievements).
 *
 * CRITICAL: ALWAYS reads from userProfile.gamification (single source of truth)
 * - XP, Level, Streak, Achievements are GLOBAL across all topics
 * - Updated via firestoreProgressService after every practice session
 * - Real-time updates via Firestore listeners in AuthContext
 *
 * The pathProgress parameter is kept for backward compatibility but is IGNORED.
 * All stats are aggregated globally across topics, not per-topic.
 */

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useActiveProfile } from '../contexts/ActiveProfileContext';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../services/firebase';
import { streakService } from '../services/streakService';
import type { PathProgress } from '../types/practice';
import type { UserProfile } from '../types/user';

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
 * @param pathProgress - DEPRECATED: Kept for backward compatibility but ignored
 * @returns Gamification stats with loading state
 *
 * @example
 * ```tsx
 * // All contexts (homepage, dashboard, practice) show same global stats
 * const { totalXP, currentLevel } = useGamificationStats();
 * ```
 */
export function useGamificationStats(_pathProgress?: PathProgress | null): GamificationStats {
  const { userProfile, loading: authLoading } = useAuth();
  const { activeProfile } = useActiveProfile();
  const location = useLocation();
  const [childProfile, setChildProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Determine which profile to use
  const isViewingChild = activeProfile && activeProfile.uid !== userProfile?.uid;
  const effectiveProfile = isViewingChild ? childProfile : userProfile;

  // Fetch child profile if viewing as child
  useEffect(() => {
    async function fetchChildProfile() {
      if (!isViewingChild || !activeProfile?.uid) {
        setChildProfile(null);
        setLoading(authLoading);
        return;
      }

      try {
        setLoading(true);
        const profileDoc = await getDoc(doc(firestore, 'users', activeProfile.uid));
        if (profileDoc.exists()) {
          setChildProfile(profileDoc.data() as UserProfile);
        } else {
          setChildProfile(null);
        }
      } catch (error) {
        console.error('Failed to fetch child profile for gamification stats:', error);
        setChildProfile(null);
      } finally {
        setLoading(false);
      }
    }

    fetchChildProfile();
  }, [activeProfile?.uid, isViewingChild, authLoading, location.pathname]); // Re-fetch when navigating

  // Return default stats if still loading or no profile
  if (loading || !effectiveProfile) {
    return {
      totalXP: 0,
      currentLevel: 1,
      currentStreak: 0,
      longestStreak: 0,
      totalAchievements: 0,
      isLoading: loading,
    };
  }

  // ALWAYS read from effectiveProfile.gamification (single source of truth)
  // Stats are aggregated globally across ALL topics via globalStatsAggregator
  if (effectiveProfile.gamification) {
    // Construct streak object to check effectiveness
    const rawStreak = {
      currentStreak: effectiveProfile.gamification.currentStreak || 0,
      longestStreak: effectiveProfile.gamification.longestStreak || 0,
      lastActivityDate: effectiveProfile.gamification.lastActivityDate || '',
      streakDates: effectiveProfile.gamification.streakDates || []
    };

    // Get effective streak (resets to 0 if broken)
    const effectiveStreak = streakService.getEffectiveStreak(rawStreak);

    return {
      totalXP: effectiveProfile.gamification.totalXP || 0,                      // ✅ Global across all topics
      currentLevel: effectiveProfile.gamification.currentLevel || 1,            // ✅ Calculated from total XP
      currentStreak: effectiveStreak.currentStreak,                             // ✅ Corrected for broken streaks
      longestStreak: effectiveProfile.gamification.longestStreak || 0,          // ✅ Global longest streak
      totalAchievements: effectiveProfile.gamification.totalAchievements || 0,  // ✅ Deduplicated count
      lastUpdated: effectiveProfile.gamification.lastUpdated,
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
