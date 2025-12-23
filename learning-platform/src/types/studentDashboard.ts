/**
 * Student Dashboard Types
 *
 * Complete type definitions for the Student Stats Dashboard.
 * Covers all data needed for Overview, Learn Mode, Practice Mode, and Achievements tabs.
 */

// ============================================
// OVERVIEW TAB
// ============================================

export interface OverviewStats {
  // Hero section
  currentLevel: number;
  totalXP: number;
  xpProgress: {
    current: number;
    needed: number;
    percentage: number;
  };
  currentStreak: number;
  longestStreak: number;
  totalTimeSeconds: number;

  // Quick stats grid
  overallAccuracy: number;        // 0-100%
  totalProblemsSolved: number;
  topicsStarted: number;
  topicsCompleted: number;
  totalAchievements: number;
}

export interface DailyActivity {
  date: string;                   // ISO date (YYYY-MM-DD)
  problemsSolved: number;
  timeSpentSeconds: number;
  xpEarned: number;
  activityLevel: 'none' | 'low' | 'medium' | 'high';  // For heatmap coloring
}

export interface WeekComparisonStats {
  thisWeek: {
    problemsSolved: number;
    timeSpentSeconds: number;
    accuracy: number;
    xpEarned: number;
  };
  lastWeek: {
    problemsSolved: number;
    timeSpentSeconds: number;
    accuracy: number;
    xpEarned: number;
  };
  trends: {
    problemsTrend: number;        // e.g., +25 (percentage change)
    timeTrend: number;
    accuracyTrend: number;
    xpTrend: number;
  };
}

export interface TopicOverviewRow {
  topicId: string;
  displayName: string;
  status: 'active' | 'paused' | 'completed' | 'locked';
  problemsSolved: number;
  totalProblems: number;          // Estimated total (sections * avg problems)
  accuracy: number;
  timeSpentSeconds: number;
  lastActive?: string;            // ISO date
}

export interface PerformanceChartData {
  // Line chart: Accuracy over time
  accuracyOverTime: {
    date: string;
    accuracy: number;
  }[];

  // Bar chart: Problems solved per day
  problemsPerDay: {
    date: string;
    count: number;
  }[];

  // Area chart: Time spent per day
  timePerDay: {
    date: string;
    minutes: number;
  }[];

  // Bar chart: XP earned per week
  xpPerWeek: {
    weekStart: string;            // ISO date (Monday)
    xpEarned: number;
  }[];
}

// ============================================
// LEARN MODE TAB
// ============================================

export interface LearnModeSummary {
  topicsInProgress: number;
  totalProblemsSolved: number;
  totalHintsUsed: number;
  averageHintsPerProblem: number;
  solutionsViewed: number;
  totalTimeSeconds: number;
  overallAccuracy: number;
}

export interface LearnTopicDetail {
  topicId: string;
  displayName: string;
  grade: string;

  // Progress
  progressPercentage: number;     // Based on sections completed
  sectionsCompleted: number;
  totalSections: number;

  // Performance
  problemsSolved: number;
  accuracy: number;
  hintsUsed: number;
  averageHintsPerProblem: number;
  solutionsViewed: number;
  timeSpentSeconds: number;

  // Section breakdown
  sections: LearnSectionDetail[];

  lastActive?: string;            // ISO date
}

export interface LearnSectionDetail {
  sectionId: string;
  sectionName: string;
  sectionNumber: number;
  status: 'locked' | 'current' | 'mastered';
  problemsSolved: number;
  totalProblemsInSection?: number; // If known
  hintsUsed: number;
  masteredAt?: string;            // ISO date
}

export interface HintsAnalysisData {
  totalHints: number;
  averageHintsPerProblem: number;

  // By topic
  byTopic: {
    topicId: string;
    displayName: string;
    hintsUsed: number;
    problemsSolved: number;
    averageHintsPerProblem: number;
    insight: 'excellent' | 'good' | 'needsPractice';  // Based on threshold
  }[];

  // Insights
  bestTopic?: {
    topicId: string;
    displayName: string;
    averageHints: number;
  };
  strugglingTopic?: {
    topicId: string;
    displayName: string;
    averageHints: number;
  };
}

export interface MasteryEvent {
  date: string;                   // ISO date
  topicId: string;
  topicDisplayName: string;
  sectionName: string;
  sectionNumber: number;
}

// ============================================
// PRACTICE MODE TAB
// ============================================

export interface PracticeModeSummary {
  pathsInProgress: number;
  totalProblemsSolved: number;
  overallAccuracy: number;
  totalTimeSeconds: number;
  speedChallengesCompleted: number;
}

export interface PracticePathDetail {
  pathId: string;                 // e.g., "s3-math-trigonometry"
  displayName: string;

  // Overall progress
  progressPercentage: number;     // Based on nodes completed
  nodesCompleted: number;
  totalNodes: number;

  // Layer breakdown
  foundationNodes: {
    completed: number;
    total: number;
  };
  integrationNodes: {
    completed: number;
    total: number;
  };
  applicationNodes: {
    completed: number;
    total: number;
  };
  examPracticeNodes: {
    completed: number;
    total: number;
  };
  wordProblemsNodes: {
    completed: number;
    total: number;
  };

  // Performance
  accuracy: number;
  timeSpentSeconds: number;
  xpEarned: number;

  // Nodes detail
  nodes: PracticeNodeDetail[];

  lastActive?: string;            // ISO date
}

export interface PracticeNodeDetail {
  nodeId: string;
  nodeNumber: number;
  title: string;
  layer: 'foundation' | 'integration' | 'application' | 'examPractice' | 'word-problems';
  status: 'locked' | 'current' | 'completed';

  problemsAttempted: number;
  problemsCorrect: number;
  problemsRequired: number;
  accuracy: number;

  completedAt?: string;           // ISO date
  timeSpentSeconds?: number;
}

export interface LearnVsPracticeComparison {
  learn: {
    accuracy: number;
    problemsSolved: number;
    averageTimePerProblem: number; // seconds
    hintsAvailable: boolean;
  };
  practice: {
    accuracy: number;
    problemsSolved: number;
    averageTimePerProblem: number; // seconds
    hintsAvailable: boolean;
  };
  insight: string;                // Generated insight text
}

// ============================================
// ACHIEVEMENTS TAB
// ============================================

export interface AchievementSummary {
  totalUnlocked: number;
  totalAvailable: number;
  percentageComplete: number;
  totalXPFromAchievements: number;
  nextMilestone?: {
    achievementsNeeded: number;
    xpReward: number;
  };
}

export interface AchievementCategory {
  categoryId: string;
  categoryName: string;
  icon: string;
  unlockedCount: number;
  totalCount: number;
  achievements: AchievementDetail[];
}

export interface AchievementDetail {
  id: string;
  title: string;
  description: string;
  icon: string;
  xpReward: number;
  categoryId: string;
  isUnlocked: boolean;
  earnedAt?: string;              // ISO date
  progress?: {
    current: number;
    required: number;
  };
}

export interface AchievementEvent {
  date: string;                   // ISO date
  achievement: AchievementDetail;
}

// ============================================
// MAIN DASHBOARD DATA
// ============================================

export interface StudentDashboardData {
  overview: {
    stats: OverviewStats;
    activityHeatmap: DailyActivity[];
    weekComparison: WeekComparisonStats;
    topicsOverview: TopicOverviewRow[];
    performanceCharts: PerformanceChartData;
    mostActiveTime?: string;      // e.g., "Weekdays 4-6pm"
  };

  learnMode: {
    summary: LearnModeSummary;
    topicsBreakdown: LearnTopicDetail[];
    hintsAnalysis: HintsAnalysisData;
    masteryTimeline: MasteryEvent[];
  };

  practiceMode: {
    summary: PracticeModeSummary;
    pathsProgress: PracticePathDetail[];
    learnVsPracticeComparison: LearnVsPracticeComparison;
  };

  achievements: {
    summary: AchievementSummary;
    categories: AchievementCategory[];
    recentAchievements: AchievementEvent[];
  };

  isLoading: boolean;
  lastUpdated?: string;           // ISO timestamp
}

// ============================================
// FIRESTORE DATA STRUCTURES (for tracking)
// ============================================

/**
 * New collection: studentDashboardStats
 * Denormalized data for fast dashboard loading
 * Updated incrementally after each session
 */
export interface StudentDashboardStatsDoc {
  uid: string;

  // Daily activity log (last 90 days)
  dailyActivity: {
    [date: string]: {             // YYYY-MM-DD
      learnProblemsSolved: number;
      practiceProblemsSolved: number;
      totalTimeSeconds: number;
      xpEarned: number;
      accuracy: number;
    };
  };

  // Learn mode aggregates
  learnMode: {
    totalProblemsSolved: number;
    totalProblemsAttempted: number;
    totalHintsUsed: number;
    totalSolutionsViewed: number;
    totalTimeSeconds: number;

    // Per-topic data
    topics: {
      [topicId: string]: {
        problemsSolved: number;
        problemsAttempted: number;
        hintsUsed: number;
        solutionsViewed: number;
        timeSeconds: number;
        lastActive: string;       // ISO date
      };
    };
  };

  // Practice mode aggregates
  practiceMode: {
    totalProblemsSolved: number;
    totalProblemsAttempted: number;
    totalTimeSeconds: number;
    speedChallengesCompleted: number;

    // Per-path data
    paths: {
      [pathId: string]: {
        nodesCompleted: number;
        problemsSolved: number;
        problemsAttempted: number;
        timeSeconds: number;
        xpEarned: number;
        lastActive: string;       // ISO date
      };
    };
  };

  // Mastery events (for timeline)
  masteryEvents: {
    date: string;                 // ISO date
    topicId: string;
    sectionId: string;
    sectionName: string;
    sectionNumber: number;
  }[];

  lastUpdated: string;            // ISO timestamp
}
