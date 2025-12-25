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
  // ============================================
  // FIRST STEPS (Beginner achievements)
  // ============================================
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
  {
    id: 'first-perfect-session',
    title: 'Perfect Start',
    description: 'Complete a session with 100% accuracy',
    icon: '✨',
    xpReward: 30,
    check: (p, _streak) => p.sessionHistory.some(s => s.problemsSolved >= 3 && s.accuracy === 100),
  },

  // ============================================
  // CONSISTENCY (Streak achievements)
  // ============================================
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
    id: 'streak-14',
    title: 'Fortnight Fighter',
    description: 'Practice for 14 days in a row',
    icon: '⚔️',
    xpReward: 150,
    check: (_p, streak) => streak.currentStreak >= 14,
  },
  {
    id: 'streak-30',
    title: 'Monthly Master',
    description: 'Practice for 30 days in a row',
    icon: '👑',
    xpReward: 300,
    check: (_p, streak) => streak.currentStreak >= 30,
  },
  {
    id: 'streak-60',
    title: 'Unstoppable',
    description: 'Practice for 60 days in a row',
    icon: '🚀',
    xpReward: 500,
    check: (_p, streak) => streak.currentStreak >= 60,
  },
  {
    id: 'streak-100',
    title: 'Legendary Streak',
    description: 'Practice for 100 days in a row',
    icon: '🌟',
    xpReward: 1000,
    check: (_p, streak) => streak.currentStreak >= 100,
  },

  // ============================================
  // ACCURACY (Precision achievements)
  // ============================================
  {
    id: 'perfectionist',
    title: 'Perfectionist',
    description: 'Get 10 problems correct in a row',
    icon: '💎',
    xpReward: 50,
    check: (p, _streak) => {
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
  {
    id: 'sharpshooter',
    title: 'Sharpshooter',
    description: 'Maintain 95%+ accuracy for 50 problems',
    icon: '🎯',
    xpReward: 200,
    check: (p, _streak) => {
      const accuracy = p.totalProblemsAttempted > 0
        ? (p.totalProblemsCorrect / p.totalProblemsAttempted) * 100
        : 0;
      return p.totalProblemsAttempted >= 50 && accuracy >= 95;
    },
  },
  {
    id: 'no-hints-hero',
    title: 'No Hints Hero',
    description: 'Complete 10 problems with 100% accuracy in one session',
    icon: '🦸',
    xpReward: 75,
    check: (p, _streak) => {
      // Check for a session with 10+ problems at 100% accuracy (no mistakes = no hints needed)
      return p.sessionHistory.some(s => s.problemsSolved >= 10 && s.accuracy === 100);
    },
  },

  // ============================================
  // VOLUME (Problem solving milestones)
  // ============================================
  {
    id: 'problem-solver-10',
    title: 'Problem Solver',
    description: 'Solve 10 problems',
    icon: '🧮',
    xpReward: 20,
    check: (p, _streak) => p.totalProblemsCorrect >= 10,
  },
  {
    id: 'problem-solver-25',
    title: 'Getting Warmed Up',
    description: 'Solve 25 problems',
    icon: '🔢',
    xpReward: 50,
    check: (p, _streak) => p.totalProblemsCorrect >= 25,
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
  {
    id: 'problem-solver-250',
    title: 'Math Warrior',
    description: 'Solve 250 problems',
    icon: '⚔️',
    xpReward: 400,
    check: (p, _streak) => p.totalProblemsCorrect >= 250,
  },
  {
    id: 'problem-solver-500',
    title: 'Problem Crusher',
    description: 'Solve 500 problems',
    icon: '💪',
    xpReward: 750,
    check: (p, _streak) => p.totalProblemsCorrect >= 500,
  },
  {
    id: 'problem-solver-1000',
    title: 'Math Legend',
    description: 'Solve 1000 problems',
    icon: '🏆',
    xpReward: 1500,
    check: (p, _streak) => p.totalProblemsCorrect >= 1000,
  },

  // ============================================
  // LAYER COMPLETION (Progress achievements)
  // ============================================
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
    description: 'Complete the entire learning path',
    icon: '🏆',
    xpReward: 500,
    check: (p, _streak) => {
      const totalNodes = p.layerProgress.foundation.total + p.layerProgress.integration.total + p.layerProgress.application.total + p.layerProgress['word-problems'].total;
      const completedNodes = p.layerProgress.foundation.completed + p.layerProgress.integration.completed + p.layerProgress.application.completed + p.layerProgress['word-problems'].completed;
      return totalNodes > 0 && completedNodes === totalNodes;
    },
  },

  // ============================================
  // NODE COMPLETION (Node milestones)
  // ============================================
  {
    id: 'nodes-5',
    title: 'Node Explorer',
    description: 'Complete 5 nodes',
    icon: '🗺️',
    xpReward: 75,
    check: (p, _streak) => Object.values(p.nodes).filter(n => n.status === 'completed').length >= 5,
  },
  {
    id: 'nodes-10',
    title: 'Node Collector',
    description: 'Complete 10 nodes',
    icon: '📦',
    xpReward: 150,
    check: (p, _streak) => Object.values(p.nodes).filter(n => n.status === 'completed').length >= 10,
  },
  {
    id: 'nodes-25',
    title: 'Node Conqueror',
    description: 'Complete 25 nodes',
    icon: '🏰',
    xpReward: 350,
    check: (p, _streak) => Object.values(p.nodes).filter(n => n.status === 'completed').length >= 25,
  },
  {
    id: 'nodes-50',
    title: 'Node Dominator',
    description: 'Complete 50 nodes',
    icon: '👑',
    xpReward: 750,
    check: (p, _streak) => Object.values(p.nodes).filter(n => n.status === 'completed').length >= 50,
  },

  // ============================================
  // SPEED (Quick completion achievements)
  // ============================================
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
  {
    id: 'lightning-fast',
    title: 'Lightning Fast',
    description: 'Complete 10 problems in under 15 minutes',
    icon: '🌩️',
    xpReward: 150,
    check: (p, _streak) => {
      return p.sessionHistory.some(s => s.problemsSolved >= 10 && s.timeSpentSeconds <= 900);
    },
  },
  {
    id: 'quick-thinker',
    title: 'Quick Thinker',
    description: 'Solve a problem in under 30 seconds',
    icon: '🧠',
    xpReward: 40,
    check: (p, _streak) => {
      return p.sessionHistory.some(s => s.problemsSolved >= 1 && s.timeSpentSeconds <= 30);
    },
  },

  // ============================================
  // TIME INVESTMENT (Dedication achievements)
  // ============================================
  {
    id: 'dedicated-learner',
    title: 'Dedicated Learner',
    description: 'Spend 1 hour learning',
    icon: '📚',
    xpReward: 50,
    check: (p, _streak) => p.totalTimeSpentSeconds >= 3600,
  },
  {
    id: 'committed-student',
    title: 'Committed Student',
    description: 'Spend 3 hours learning',
    icon: '📖',
    xpReward: 125,
    check: (p, _streak) => p.totalTimeSpentSeconds >= 10800,
  },
  {
    id: 'marathon-runner',
    title: 'Marathon Runner',
    description: 'Spend 5 hours learning',
    icon: '🏃',
    xpReward: 200,
    check: (p, _streak) => p.totalTimeSpentSeconds >= 18000,
  },
  {
    id: 'time-master',
    title: 'Time Master',
    description: 'Spend 10 hours learning',
    icon: '⏰',
    xpReward: 400,
    check: (p, _streak) => p.totalTimeSpentSeconds >= 36000,
  },
  {
    id: 'knowledge-seeker',
    title: 'Knowledge Seeker',
    description: 'Spend 24 hours learning',
    icon: '🎓',
    xpReward: 1000,
    check: (p, _streak) => p.totalTimeSpentSeconds >= 86400,
  },

  // ============================================
  // DAILY GOALS (Consistency achievements)
  // ============================================
  {
    id: 'daily-champion',
    title: 'Daily Champion',
    description: 'Complete your daily goal',
    icon: '🌅',
    xpReward: 15,
    check: (p, _streak) => {
      const today = p.sessionHistory.filter(s => {
        const sessionDate = new Date(s.date);
        const now = new Date();
        return sessionDate.toDateString() === now.toDateString();
      });
      return today.reduce((sum, s) => sum + s.problemsSolved, 0) >= 5;
    },
  },
  {
    id: 'weekly-warrior',
    title: 'Weekly Warrior',
    description: 'Complete daily goal 7 days in a row',
    icon: '📅',
    xpReward: 100,
    check: (_p, streak) => streak.currentStreak >= 7,
  },

  // ============================================
  // SPECIAL (Unique achievements)
  // ============================================
  {
    id: 'comeback-kid',
    title: 'Comeback Kid',
    description: 'Return after 7+ days away and solve a problem',
    icon: '🔄',
    xpReward: 50,
    check: (p, _streak) => {
      if (p.sessionHistory.length < 2) return false;
      const sorted = [...p.sessionHistory].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      if (sorted.length < 2) return false;
      const latest = new Date(sorted[0].date);
      const previous = new Date(sorted[1].date);
      const daysDiff = (latest.getTime() - previous.getTime()) / (1000 * 60 * 60 * 24);
      return daysDiff >= 7;
    },
  },
  {
    id: 'night-owl',
    title: 'Night Owl',
    description: 'Practice after 10 PM',
    icon: '🦉',
    xpReward: 25,
    check: (p, _streak) => {
      return p.sessionHistory.some(s => {
        const hour = new Date(s.date).getHours();
        return hour >= 22 || hour < 5;
      });
    },
  },
  {
    id: 'early-bird',
    title: 'Early Bird',
    description: 'Practice before 7 AM',
    icon: '🐦',
    xpReward: 25,
    check: (p, _streak) => {
      return p.sessionHistory.some(s => {
        const hour = new Date(s.date).getHours();
        return hour >= 5 && hour < 7;
      });
    },
  },
  {
    id: 'weekend-learner',
    title: 'Weekend Learner',
    description: 'Practice on both Saturday and Sunday',
    icon: '🎉',
    xpReward: 40,
    check: (p, _streak) => {
      const days = new Set(p.sessionHistory.map(s => new Date(s.date).getDay()));
      return days.has(0) && days.has(6); // Sunday = 0, Saturday = 6
    },
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
