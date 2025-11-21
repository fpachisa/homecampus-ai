/**
 * Global Streak Service
 *
 * Manages global streak tracking across ALL topics.
 * Streak increments when student practices ANY topic on consecutive days.
 */

import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { firestore } from './firebase';
import type { DailyStreak } from '../types/practice';
import { updateStreak, initializeStreak, generateHeatmapData } from './streakService';

/**
 * Load global streak from user profile
 */
export async function loadGlobalStreak(uid: string): Promise<DailyStreak> {
  try {
    const userDocRef = doc(firestore, 'users', uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const data = userDoc.data();
      const gamification = data.gamification || {};

      // Return existing streak or initialize new one
      if (gamification.currentStreak !== undefined) {
        let streakDates = gamification.streakDates || [];

        // FIX: If streakDates is empty but we have a lastActivityDate, reconstruct it
        // This handles the case where old data exists without streakDates array
        const needsReconstruction = streakDates.length === 0 && gamification.lastActivityDate;
        if (needsReconstruction) {
          // Reconstruct all dates for the current streak
          const currentStreakCount = gamification.currentStreak || 0;
          const baseDate = new Date(gamification.lastActivityDate);

          streakDates = [];
          for (let i = currentStreakCount - 1; i >= 0; i--) {
            const date = new Date(baseDate);
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0]; // YYYY-MM-DD format
            streakDates.push(dateStr);
          }

          console.log(`📅 Reconstructed streak: ${currentStreakCount} consecutive dates from ${gamification.lastActivityDate}`);
        }

        const streak = {
          currentStreak: gamification.currentStreak || 0,
          longestStreak: gamification.longestStreak || 0,
          lastActivityDate: gamification.lastActivityDate || '',
          streakDates: streakDates
        };

        // Save the reconstructed streak back to Firestore to fix the data
        if (needsReconstruction) {
          saveGlobalStreak(uid, streak).catch(err =>
            console.error('Failed to save reconstructed streak:', err)
          );
        }

        return streak;
      }
    }

    // Return fresh streak if no data exists
    return initializeStreak();
  } catch (error) {
    console.error('Error loading global streak:', error);
    return initializeStreak();
  }
}

/**
 * Update global streak when ANY topic is practiced
 */
export async function updateGlobalStreak(uid: string): Promise<DailyStreak> {
  try {
    // Load current streak
    const currentStreak = await loadGlobalStreak(uid);

    // Update using existing streak logic
    const updatedStreak = updateStreak(currentStreak);

    // Save to Firestore
    await saveGlobalStreak(uid, updatedStreak);

    return updatedStreak;
  } catch (error) {
    console.error('Error updating global streak:', error);
    throw error;
  }
}

/**
 * Save global streak to user profile
 */
export async function saveGlobalStreak(uid: string, streak: DailyStreak): Promise<void> {
  try {
    const userDocRef = doc(firestore, 'users', uid);

    await updateDoc(userDocRef, {
      'gamification.currentStreak': streak.currentStreak,
      'gamification.longestStreak': streak.longestStreak,
      'gamification.lastActivityDate': streak.lastActivityDate,
      'gamification.streakDates': streak.streakDates
    });
  } catch (error) {
    console.error('Error saving global streak:', error);
    throw error;
  }
}

/**
 * Get heatmap data for global streak (all practice activity)
 */
export function getGlobalStreakHeatmap(streak: DailyStreak, days: number = 30): Array<{ date: string; active: boolean }> {
  return generateHeatmapData(streak, days);
}
