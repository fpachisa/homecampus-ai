/**
 * Streak Tracking Service
 *
 * Manages daily streak tracking with fire streak system.
 * CRITICAL: Uses LOCAL timezone for consistency with user's location.
 */

import type { DailyStreak } from '../types/practice';
import { getLocalDateString } from '../utils/dateUtils';

// ============================================
// DATE UTILITIES
// ============================================

const getDateString = (date: Date): string => {
  return getLocalDateString(date); // ✅ Uses LOCAL timezone, not UTC
};

const getTodayString = (): string => {
  return getDateString(new Date());
};

const getYesterdayString = (): string => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return getDateString(yesterday);
};

const getDaysBetween = (date1: string, date2: string): number => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diffTime = Math.abs(d2.getTime() - d1.getTime());
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
};

// ============================================
// STREAK INITIALIZATION
// ============================================

export const initializeStreak = (): DailyStreak => {
  return {
    currentStreak: 0,
    longestStreak: 0,
    lastActivityDate: '',
    streakDates: [],
  };
};

// ============================================
// STREAK UPDATES
// ============================================

export const updateStreak = (streak: DailyStreak): DailyStreak => {
  const today = getTodayString();
  const yesterday = getYesterdayString();

  // If already practiced today, just return current streak
  if (streak.lastActivityDate === today) {
    return { ...streak };
  }

  const updated = { ...streak };

  // Check if continuing a streak (practiced yesterday)
  if (updated.lastActivityDate === yesterday) {
    // Continue streak
    updated.currentStreak += 1;
    updated.lastActivityDate = today;
    updated.streakDates = [...updated.streakDates, today];
  }
  // Check if starting fresh (first time or broke streak)
  else if (updated.lastActivityDate === '' || getDaysBetween(updated.lastActivityDate, today) > 1) {
    // Start new streak
    updated.currentStreak = 1;
    updated.lastActivityDate = today;
    updated.streakDates = [...updated.streakDates, today];
  }
  // Same day (should not happen due to check above, but safety)
  else if (updated.lastActivityDate === today) {
    // Already counted, do nothing
    return updated;
  }

  // Update longest streak if current beats it
  if (updated.currentStreak > updated.longestStreak) {
    updated.longestStreak = updated.currentStreak;
  }

  // Keep only last 30 days of streak dates
  updated.streakDates = updated.streakDates.slice(-30);

  return updated;
};

// ============================================
// STREAK STATUS CHECKING
// ============================================

export const getStreakStatus = (streak: DailyStreak): {
  isActive: boolean;
  needsPractice: boolean;
  daysAgo: number;
  message: string;
} => {
  const today = getTodayString();
  const yesterday = getYesterdayString();

  // Not started yet
  if (!streak.lastActivityDate) {
    return {
      isActive: false,
      needsPractice: true,
      daysAgo: 0,
      message: 'Start your streak today!',
    };
  }

  // Practiced today
  if (streak.lastActivityDate === today) {
    return {
      isActive: true,
      needsPractice: false,
      daysAgo: 0,
      message: `${streak.currentStreak} day streak!`,
    };
  }

  // Practiced yesterday (still active but needs practice today)
  if (streak.lastActivityDate === yesterday) {
    return {
      isActive: true,
      needsPractice: true,
      daysAgo: 1,
      message: `Practice today to keep your ${streak.currentStreak} day streak!`,
    };
  }

  // Streak broken
  const daysAgo = getDaysBetween(streak.lastActivityDate, today);
  return {
    isActive: false,
    needsPractice: true,
    daysAgo,
    message: `Streak ended ${daysAgo} days ago. Start a new one!`,
  };
};

// ============================================
// HEATMAP DATA GENERATION
// ============================================

export const generateHeatmapData = (streak: DailyStreak, days: number = 30): {
  date: string;
  active: boolean;
}[] => {
  const heatmap: { date: string; active: boolean }[] = [];
  const activeSet = new Set(streak.streakDates);

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = getDateString(date);

    heatmap.push({
      date: dateStr,
      active: activeSet.has(dateStr),
    });
  }

  return heatmap;
};

// ============================================
// SERVICE EXPORTS
// ============================================

export const streakService = {
  initializeStreak,
  updateStreak,
  getStreakStatus,
  generateHeatmapData,
  getTodayString,
  getYesterdayString,
};
