/**
 * Achievement Tracking Service
 *
 * Manages achievement definitions, checking, and awarding.
 * Gamification system with streaks, badges, and XP rewards.
 *
 * NOTE: Streak tracking is now global across all topics. Streak achievements
 * check the global streak passed as a parameter, not per-topic streaks.
 */

import type { Achievement, PathProgress, DailyStreak } from '../types/practice';

// ============================================
// ACHIEVEMENT DEFINITIONS
// ============================================

interface AchievementDefinition {
  id: string;
  title: string;
  description: string;
  icon: string;
  xpReward: number;
  check: (progress: PathProgress, globalStreak: DailyStreak) => boolean;
}

const ACHIEVEMENT_DEFINITIONS: AchievementDefinition[] = [
  // First Steps
  {
    id: 'first-problem',
    title: 'First Steps',
    description: 'Complete your first problem',
    icon: '🎯',
    xpReward: 10,
    check: (p, _streak) => p.totalProblemsCorrect >= 1,
  },
  {
    id: 'first-node',
    title: 'Node Master',
    description: 'Complete your first node',
    icon: '⭐',
    xpReward: 25,
    check: (p, _streak) => Object.values(p.nodes).some(n => n.status === 'completed'),
  },

  // Consistency (Global Streak - across all topics)
  {
    id: 'streak-3',
    title: '3-Day Streak',
    description: 'Practice for 3 days in a row',
    icon: '🔥',
    xpReward: 30,
    check: (_p, streak) => streak.currentStreak >= 3,
  },
  {
    id: 'streak-7',
    title: 'Week Warrior',
    description: 'Practice for 7 days in a row',
    icon: '💪',
    xpReward: 75,
    check: (_p, streak) => streak.currentStreak >= 7,
  },
  {
    id: 'streak-30',
    title: 'Monthly Master',
    description: 'Practice for 30 days in a row',
    icon: '👑',
    xpReward: 300,
    check: (_p, streak) => streak.currentStreak >= 30,
  },

  // Accuracy
  {
    id: 'perfectionist',
    title: 'Perfectionist',
    description: 'Get 10 problems correct in a row',
    icon: '💎',
    xpReward: 50,
    check: (p, _streak) => {
      // Check recent session history for perfect accuracy
      const recent = p.sessionHistory.slice(-5);
      return recent.some(s => s.problemsSolved >= 10 && s.accuracy === 100);
    },
  },
  {
    id: 'accuracy-master',
    title: 'Accuracy Master',
    description: 'Maintain 90%+ accuracy for 20 problems',
    icon: '🎖️',
    xpReward: 100,
    check: (p, _streak) => {
      const accuracy = p.totalProblemsAttempted > 0
        ? (p.totalProblemsCorrect / p.totalProblemsAttempted) * 100
        : 0;
      return p.totalProblemsAttempted >= 20 && accuracy >= 90;
    },
  },

  // Volume
  {
    id: 'problem-solver-10',
    title: 'Problem Solver',
    description: 'Solve 10 problems',
    icon: '🧮',
    xpReward: 20,
    check: (p, _streak) => p.totalProblemsCorrect >= 10,
  },
  {
    id: 'problem-solver-50',
    title: 'Math Enthusiast',
    description: 'Solve 50 problems',
    icon: '📊',
    xpReward: 100,
    check: (p, _streak) => p.totalProblemsCorrect >= 50,
  },
  {
    id: 'problem-solver-100',
    title: 'Century Club',
    description: 'Solve 100 problems',
    icon: '💯',
    xpReward: 200,
    check: (p, _streak) => p.totalProblemsCorrect >= 100,
  },

  // Layer Completion
  {
    id: 'foundation-complete',
    title: 'Foundation Expert',
    description: 'Complete all Foundation nodes',
    icon: '🏗️',
    xpReward: 150,
    check: (p, _streak) => p.layerProgress.foundation.completed === p.layerProgress.foundation.total && p.layerProgress.foundation.total > 0,
  },
  {
    id: 'integration-complete',
    title: 'Integration Master',
    description: 'Complete all Integration nodes',
    icon: '🔗',
    xpReward: 200,
    check: (p, _streak) => p.layerProgress.integration.completed === p.layerProgress.integration.total && p.layerProgress.integration.total > 0,
  },
  {
    id: 'application-complete',
    title: 'Application Pro',
    description: 'Complete all Application nodes',
    icon: '🎯',
    xpReward: 250,
    check: (p, _streak) => p.layerProgress.application.completed === p.layerProgress.application.total && p.layerProgress.application.total > 0,
  },
  {
    id: 'word-problems-complete',
    title: 'Word Problem Wizard',
    description: 'Complete all Word Problems',
    icon: '📝',
    xpReward: 300,
    check: (p, _streak) => p.layerProgress['word-problems'].completed === p.layerProgress['word-problems'].total && p.layerProgress['word-problems'].total > 0,
  },
  {
    id: 'path-complete',
    title: 'Path Champion',
    description: 'Complete the entire path',
    icon: '🏆',
    xpReward: 500,
    check: (p, _streak) => {
      const totalNodes = p.layerProgress.foundation.total + p.layerProgress.integration.total + p.layerProgress.application.total + p.layerProgress['word-problems'].total;
      const completedNodes = p.layerProgress.foundation.completed + p.layerProgress.integration.completed + p.layerProgress.application.completed + p.layerProgress['word-problems'].completed;
      return totalNodes > 0 && completedNodes === totalNodes;
    },
  },

  // Speed
  {
    id: 'speed-demon',
    title: 'Speed Demon',
    description: 'Complete 5 problems in under 10 minutes',
    icon: '⚡',
    xpReward: 75,
    check: (p, _streak) => {
      return p.sessionHistory.some(s => s.problemsSolved >= 5 && s.timeSpentSeconds <= 600);
    },
  },

  // Time Investment
  {
    id: 'dedicated-learner',
    title: 'Dedicated Learner',
    description: 'Spend 1 hour learning',
    icon: '📚',
    xpReward: 50,
    check: (p, _streak) => p.totalTimeSpentSeconds >= 3600,
  },
  {
    id: 'marathon-runner',
    title: 'Marathon Runner',
    description: 'Spend 5 hours learning',
    icon: '🏃',
    xpReward: 200,
    check: (p, _streak) => p.totalTimeSpentSeconds >= 18000,
  },
];

// ============================================
// XP AND LEVEL CALCULATION
// ============================================

export const calculateLevel = (totalXP: number): number => {
  // Level formula: Level = floor(sqrt(XP / 100))
  // Level 1 = 100 XP, Level 2 = 400 XP, Level 3 = 900 XP, etc.
  return Math.floor(Math.sqrt(totalXP / 100));
};

export const getXPForLevel = (level: number): number => {
  return level * level * 100;
};

export const getXPForNextLevel = (currentLevel: number): number => {
  return getXPForLevel(currentLevel + 1);
};

export const getXPProgress = (totalXP: number): { current: number; needed: number; percentage: number } => {
  const currentLevel = calculateLevel(totalXP);
  const xpForCurrentLevel = getXPForLevel(currentLevel);
  const xpForNextLevel = getXPForNextLevel(currentLevel);

  const current = totalXP - xpForCurrentLevel;
  const needed = xpForNextLevel - xpForCurrentLevel;
  const percentage = (current / needed) * 100;

  return { current, needed, percentage };
};

// ============================================
// ACHIEVEMENT CHECKING
// ============================================

export const checkAndAwardAchievements = (
  progress: PathProgress,
  globalStreak: DailyStreak
): Achievement[] => {
  const newlyEarned: Achievement[] = [];
  const earnedIds = new Set(progress.achievements.map(a => a.id));

  for (const def of ACHIEVEMENT_DEFINITIONS) {
    // Skip if already earned
    if (earnedIds.has(def.id)) continue;

    // Check if condition is met (passing both progress and global streak)
    if (def.check(progress, globalStreak)) {
      const achievement: Achievement = {
        id: def.id,
        title: def.title,
        description: def.description,
        icon: def.icon,
        earnedAt: new Date(),
        xpReward: def.xpReward,
      };
      newlyEarned.push(achievement);
    }
  }

  return newlyEarned;
};

// ============================================
// XP REWARDS
// ============================================

export const XP_REWARDS = {
  PROBLEM_CORRECT: 10,          // Base XP for solving a problem
  PROBLEM_FIRST_TRY: 5,         // Bonus for solving on first try
  NODE_COMPLETE: 50,            // XP for completing a node
  LAYER_COMPLETE: 100,          // XP for completing a layer
  DAILY_LOGIN: 5,               // XP for logging in daily (streak bonus)
};

export const calculateProblemXP = (isCorrect: boolean, isFirstTry: boolean): number => {
  if (!isCorrect) return 0;
  let xp = XP_REWARDS.PROBLEM_CORRECT;
  if (isFirstTry) xp += XP_REWARDS.PROBLEM_FIRST_TRY;
  return xp;
};

// ============================================
// SERVICE EXPORTS
// ============================================

export const achievementService = {
  checkAndAwardAchievements,
  calculateLevel,
  getXPForLevel,
  getXPForNextLevel,
  getXPProgress,
  calculateProblemXP,
  XP_REWARDS,
  ACHIEVEMENT_DEFINITIONS,
};
