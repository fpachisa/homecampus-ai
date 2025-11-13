/**
 * Student Dashboard Service
 *
 * Aggregates data from multiple sources to provide comprehensive
 * dashboard statistics for the Student Stats Dashboard.
 *
 * Data Sources:
 * - userProfile.gamification (global stats)
 * - users/{uid}/dailyActivity (heatmap, charts)
 * - users/{uid}/learn (per-subtopic Learn Mode data)
 * - users/{uid}/practice (per-topic Practice Mode data)
 * - users/{uid}/masteryEvents (mastery timeline)
 * - progressSummaries/{uid} (denormalized overview)
 */

import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { firestore } from './firebase';
import { getDailyActivity, getWeekComparison } from './dailyActivityService';
import { getMasteryEvents } from './masteryEventService';
import { achievementService } from './achievementService';
import type {
  StudentDashboardData,
  OverviewStats,
  DailyActivity,
  WeekComparisonStats,
  TopicOverviewRow,
  PerformanceChartData,
  LearnModeSummary,
  LearnTopicDetail,
  HintsAnalysisData,
  MasteryEvent as DashboardMasteryEvent,
  PracticeModeSummary,
  PracticePathDetail,
  LearnVsPracticeComparison,
  AchievementSummary,
  AchievementCategory
} from '../types/studentDashboard';
import type { UserProfile } from '../types/user';
import type { LearnConversation, PracticeProgress } from '../types/firestore';

// ============================================
// MAIN AGGREGATION FUNCTION
// ============================================

/**
 * Get complete dashboard data for a student
 *
 * @param uid - User ID
 * @returns Complete dashboard data
 */
export async function getStudentDashboardData(
  uid: string
): Promise<StudentDashboardData> {
  try {
    // Fetch all data in parallel for performance
    const [
      userProfile,
      dailyActivity,
      weekComparison,
      learnDocs,
      practiceDocs,
      masteryEvents
    ] = await Promise.all([
      getUserProfile(uid),
      getDailyActivity(uid, 90),
      getWeekComparison(uid),
      getLearnDocuments(uid),
      getPracticeDocuments(uid),
      getMasteryEvents(uid, 50)
    ]);

    // Aggregate Overview stats
    const overview = {
      stats: aggregateOverviewStats(userProfile, learnDocs, practiceDocs, dailyActivity),
      activityHeatmap: transformDailyActivity(dailyActivity),
      weekComparison: transformWeekComparison(weekComparison),
      topicsOverview: aggregateTopicsOverview(learnDocs, practiceDocs),
      performanceCharts: aggregatePerformanceCharts(dailyActivity),
      mostActiveTime: undefined // TODO: Implement when session time tracking added
    };

    // Aggregate Learn Mode stats
    const learnMode = {
      summary: aggregateLearnSummary(learnDocs),
      topicsBreakdown: aggregateLearnTopics(learnDocs),
      hintsAnalysis: aggregateHintsAnalysis(learnDocs),
      masteryTimeline: transformMasteryEvents(masteryEvents)
    };

    // Aggregate Practice Mode stats
    const practiceMode = {
      summary: aggregatePracticeSummary(practiceDocs),
      pathsProgress: aggregatePracticePaths(practiceDocs),
      learnVsPracticeComparison: aggregateLearnVsPracticeComparison(learnMode.summary, practiceDocs)
    };

    // Aggregate Achievements
    const achievements = {
      summary: aggregateAchievementSummary(userProfile),
      categories: aggregateAchievementCategories(userProfile),
      recentAchievements: [] // TODO: Implement achievement timeline
    };

    return {
      overview,
      learnMode,
      practiceMode,
      achievements,
      isLoading: false,
      lastUpdated: new Date().toISOString()
    };
  } catch (error) {
    console.error('Error fetching dashboard data:', error);

    // Return empty dashboard on error
    return getEmptyDashboard();
  }
}

// ============================================
// DATA FETCHING HELPERS
// ============================================

async function getUserProfile(uid: string): Promise<UserProfile | null> {
  try {
    const userRef = doc(firestore, 'users', uid);
    const snap = await getDoc(userRef);
    return snap.exists() ? (snap.data() as UserProfile) : null;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
}

async function getLearnDocuments(uid: string): Promise<LearnConversation[]> {
  try {
    const learnRef = collection(firestore, `users/${uid}/learn`);
    const snapshot = await getDocs(learnRef);
    return snapshot.docs.map(doc => doc.data() as LearnConversation);
  } catch (error) {
    console.error('Error fetching learn documents:', error);
    return [];
  }
}

async function getPracticeDocuments(uid: string): Promise<PracticeProgress[]> {
  try {
    const practiceRef = collection(firestore, `users/${uid}/practice`);
    const snapshot = await getDocs(practiceRef);
    return snapshot.docs.map(doc => doc.data() as PracticeProgress);
  } catch (error) {
    console.error('Error fetching practice documents:', error);
    return [];
  }
}

// ============================================
// OVERVIEW AGGREGATION
// ============================================

function aggregateOverviewStats(
  userProfile: UserProfile | null,
  learnDocs: LearnConversation[],
  practiceDocs: PracticeProgress[],
  _dailyActivity: any[]
): OverviewStats {
  const gamification = userProfile?.gamification;

  // Calculate overall accuracy
  const totalAttempted =
    learnDocs.reduce((sum, doc) => sum + (doc.sessionStats.problemsAttempted || 0), 0) +
    practiceDocs.reduce((sum, doc) => sum + (doc.totalProblemsAttempted || 0), 0);
  const totalCorrect =
    learnDocs.reduce((sum, doc) => sum + (doc.sessionStats.correctAnswers || 0), 0) +
    practiceDocs.reduce((sum, doc) => sum + (doc.totalProblemsCorrect || 0), 0);
  const overallAccuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  // Count topics
  const topicsStarted = learnDocs.length + practiceDocs.length;
  const topicsCompleted = 0; // TODO: Define completion criteria

  // Calculate total time from all topics (aggregate Learn + Practice)
  const totalTimeSeconds =
    learnDocs.reduce((sum, doc) => sum + (doc.sessionStats.totalTimeSpent || 0), 0) +
    practiceDocs.reduce((sum, doc) => sum + (doc.totalTimeSpentSeconds || 0), 0);

  return {
    currentLevel: gamification?.currentLevel || 1,
    totalXP: gamification?.totalXP || 0,
    xpProgress: achievementService.getXPProgress(gamification?.totalXP || 0),
    currentStreak: gamification?.currentStreak || 0,
    longestStreak: gamification?.longestStreak || 0,
    totalTimeSeconds,
    overallAccuracy,
    totalProblemsSolved: totalCorrect,
    topicsStarted,
    topicsCompleted,
    totalAchievements: gamification?.totalAchievements || 0
  };
}

function transformDailyActivity(activities: any[]): DailyActivity[] {
  return activities.map(activity => ({
    date: activity.date,
    problemsSolved: activity.combined?.totalProblemsSolved || 0,
    timeSpentSeconds: activity.combined?.totalTimeSeconds || 0,
    xpEarned: activity.combined?.xpEarned || 0,
    activityLevel: activity.activityLevel || 'none'
  }));
}

function transformWeekComparison(comparison: any): WeekComparisonStats {
  return {
    thisWeek: {
      problemsSolved: comparison.thisWeek.problemsSolved,
      timeSpentSeconds: comparison.thisWeek.timeSeconds,
      accuracy: comparison.thisWeek.accuracy,
      xpEarned: comparison.thisWeek.xpEarned
    },
    lastWeek: {
      problemsSolved: comparison.lastWeek.problemsSolved,
      timeSpentSeconds: comparison.lastWeek.timeSeconds,
      accuracy: comparison.lastWeek.accuracy,
      xpEarned: comparison.lastWeek.xpEarned
    },
    trends: comparison.trends
  };
}

function aggregateTopicsOverview(
  learnDocs: LearnConversation[],
  practiceDocs: PracticeProgress[]
): TopicOverviewRow[] {
  const rows: TopicOverviewRow[] = [];

  // Add Learn topics (only those with actual activity)
  learnDocs.forEach(doc => {
    const attempted = doc.sessionStats.problemsAttempted || 0;
    const correct = doc.sessionStats.correctAnswers || 0;
    const timeSpent = doc.sessionStats.totalTimeSpent || 0;

    // Skip topics with no activity at all
    if (attempted === 0 && timeSpent === 0) {
      return;
    }

    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

    // Estimate total problems based on sections (6 sections * ~15 problems per section)
    const totalSections = doc.sectionProgress?.masteredSections?.length || 0;
    const estimatedTotalProblems = Math.max(attempted * 2, totalSections * 15, 50);

    rows.push({
      topicId: doc.subtopicId,
      displayName: doc.displayName,
      status: 'active',
      problemsSolved: correct,
      totalProblems: estimatedTotalProblems,
      accuracy,
      timeSpentSeconds: timeSpent,
      lastActive: doc.lastUpdated?.toDate?.()?.toISOString()
    });
  });

  // Add Practice topics (only those with actual activity)
  practiceDocs.forEach(doc => {
    const attempted = doc.totalProblemsAttempted || 0;
    const correct = doc.totalProblemsCorrect || 0;
    const timeSpent = doc.totalTimeSpentSeconds || 0;

    // Skip topics with no activity at all
    if (attempted === 0 && timeSpent === 0) {
      return;
    }

    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

    // Estimate total problems from nodes (each node ~8-12 problems)
    const totalNodes = Object.keys(doc.nodes || {}).length;
    const estimatedTotalProblems = Math.max(attempted * 1.5, totalNodes * 10, 100);

    rows.push({
      topicId: doc.topicId,
      displayName: doc.displayName,
      status: 'active',
      problemsSolved: correct,
      totalProblems: Math.round(estimatedTotalProblems),
      accuracy,
      timeSpentSeconds: timeSpent,
      lastActive: doc.lastUpdated?.toDate?.()?.toISOString()
    });
  });

  return rows.sort((a, b) => {
    if (!a.lastActive) return 1;
    if (!b.lastActive) return -1;
    return new Date(b.lastActive).getTime() - new Date(a.lastActive).getTime();
  });
}

function aggregatePerformanceCharts(activities: any[]): PerformanceChartData {
  const last30Days = activities.slice(-30);

  return {
    accuracyOverTime: last30Days.map(a => ({
      date: a.date,
      accuracy: a.combined?.overallAccuracy || 0
    })),
    problemsPerDay: last30Days.map(a => ({
      date: a.date,
      count: a.combined?.totalProblemsSolved || 0
    })),
    timePerDay: last30Days.map(a => ({
      date: a.date,
      minutes: Math.round((a.combined?.totalTimeSeconds || 0) / 60)
    })),
    xpPerWeek: [] // TODO: Implement weekly XP aggregation
  };
}

// ============================================
// LEARN MODE AGGREGATION
// ============================================

function aggregateLearnSummary(learnDocs: LearnConversation[]): LearnModeSummary {
  const totalProblems = learnDocs.reduce((sum, doc) => sum + (doc.sessionStats.correctAnswers || 0), 0);
  const totalAttempted = learnDocs.reduce((sum, doc) => sum + (doc.sessionStats.problemsAttempted || 0), 0);
  const totalHints = learnDocs.reduce((sum, doc) => sum + (doc.sessionStats.hintsProvided || 0), 0);
  const totalSolutions = learnDocs.reduce((sum, doc) => sum + (doc.sessionStats.solutionsViewed || 0), 0);
  const totalTime = learnDocs.reduce((sum, doc) => sum + (doc.sessionStats.totalTimeSpent || 0), 0);

  return {
    topicsInProgress: learnDocs.length,
    totalProblemsSolved: totalProblems,
    totalHintsUsed: totalHints,
    averageHintsPerProblem: totalProblems > 0 ? totalHints / totalProblems : 0,
    solutionsViewed: totalSolutions,
    totalTimeSeconds: totalTime,
    overallAccuracy: totalAttempted > 0 ? Math.round((totalProblems / totalAttempted) * 100) : 0
  };
}

function aggregateLearnTopics(learnDocs: LearnConversation[]): LearnTopicDetail[] {
  return learnDocs.map(doc => {
    const attempted = doc.sessionStats.problemsAttempted || 0;
    const correct = doc.sessionStats.correctAnswers || 0;
    const hints = doc.sessionStats.hintsProvided || 0;
    const solutions = doc.sessionStats.solutionsViewed || 0;

    return {
      topicId: doc.subtopicId,
      displayName: doc.displayName,
      grade: doc.grade,
      progressPercentage: 0, // TODO: Calculate from sections
      sectionsCompleted: doc.sectionProgress?.masteredSections?.length || 0,
      totalSections: 6, // TODO: Get from config
      problemsSolved: correct,
      accuracy: attempted > 0 ? Math.round((correct / attempted) * 100) : 0,
      hintsUsed: hints,
      averageHintsPerProblem: correct > 0 ? hints / correct : 0,
      solutionsViewed: solutions,
      timeSpentSeconds: doc.sessionStats.totalTimeSpent || 0,
      sections: [], // TODO: Build section detail
      lastActive: doc.lastUpdated?.toDate?.()?.toISOString()
    };
  });
}

function aggregateHintsAnalysis(learnDocs: LearnConversation[]): HintsAnalysisData {
  const totalHints = learnDocs.reduce((sum, doc) => sum + (doc.sessionStats.hintsProvided || 0), 0);
  const totalProblems = learnDocs.reduce((sum, doc) => sum + (doc.sessionStats.correctAnswers || 0), 0);

  const byTopic = learnDocs.map(doc => {
    const hints = doc.sessionStats.hintsProvided || 0;
    const problems = doc.sessionStats.correctAnswers || 0;
    const avg = problems > 0 ? hints / problems : 0;

    return {
      topicId: doc.subtopicId,
      displayName: doc.displayName,
      hintsUsed: hints,
      problemsSolved: problems,
      averageHintsPerProblem: avg,
      insight: (avg < 0.3 ? 'excellent' : avg < 0.7 ? 'good' : 'needsPractice') as 'excellent' | 'good' | 'needsPractice'
    };
  });

  // Find best and struggling topics
  const sorted = [...byTopic].sort((a, b) => a.averageHintsPerProblem - b.averageHintsPerProblem);

  return {
    totalHints,
    averageHintsPerProblem: totalProblems > 0 ? totalHints / totalProblems : 0,
    byTopic,
    bestTopic: sorted[0] ? {
      topicId: sorted[0].topicId,
      displayName: sorted[0].displayName,
      averageHints: sorted[0].averageHintsPerProblem
    } : undefined,
    strugglingTopic: sorted[sorted.length - 1] ? {
      topicId: sorted[sorted.length - 1].topicId,
      displayName: sorted[sorted.length - 1].displayName,
      averageHints: sorted[sorted.length - 1].averageHintsPerProblem
    } : undefined
  };
}

function transformMasteryEvents(events: any[]): DashboardMasteryEvent[] {
  return events.map(event => ({
    date: event.date,
    topicId: event.topicId,
    topicDisplayName: event.topicDisplayName,
    sectionName: event.sectionName,
    sectionNumber: event.sectionNumber
  }));
}

// ============================================
// PRACTICE MODE AGGREGATION
// ============================================

function aggregatePracticeSummary(practiceDocs: PracticeProgress[]): PracticeModeSummary {
  const totalProblems = practiceDocs.reduce((sum, doc) => sum + (doc.totalProblemsCorrect || 0), 0);
  const totalAttempted = practiceDocs.reduce((sum, doc) => sum + (doc.totalProblemsAttempted || 0), 0);
  const totalTime = practiceDocs.reduce((sum, doc) => sum + (doc.totalTimeSpentSeconds || 0), 0);

  return {
    pathsInProgress: practiceDocs.length,
    totalProblemsSolved: totalProblems,
    overallAccuracy: totalAttempted > 0 ? Math.round((totalProblems / totalAttempted) * 100) : 0,
    totalTimeSeconds: totalTime,
    speedChallengesCompleted: 0 // TODO: Implement when speed challenges added
  };
}

function aggregatePracticePaths(practiceDocs: PracticeProgress[]): PracticePathDetail[] {
  return practiceDocs.map(doc => {
    const nodesCompleted = Object.values(doc.nodes || {}).filter(n => n.status === 'completed').length;
    const totalNodes = Object.keys(doc.nodes || {}).length;

    return {
      pathId: doc.topicId,
      displayName: doc.displayName,
      progressPercentage: totalNodes > 0 ? Math.round((nodesCompleted / totalNodes) * 100) : 0,
      nodesCompleted,
      totalNodes,
      foundationNodes: { completed: 0, total: 0 }, // TODO: Categorize by layer
      integrationNodes: { completed: 0, total: 0 },
      applicationNodes: { completed: 0, total: 0 },
      examPracticeNodes: { completed: 0, total: 0 },
      accuracy: doc.totalProblemsAttempted > 0
        ? Math.round((doc.totalProblemsCorrect / doc.totalProblemsAttempted) * 100)
        : 0,
      timeSpentSeconds: doc.totalTimeSpentSeconds || 0,
      xpEarned: doc.totalXP || 0,
      nodes: [], // TODO: Build node detail
      lastActive: doc.lastUpdated?.toDate?.()?.toISOString()
    };
  });
}

function aggregateLearnVsPracticeComparison(
  learnSummary: LearnModeSummary,
  practiceDocs: PracticeProgress[]
): LearnVsPracticeComparison {
  const practiceProblems = practiceDocs.reduce((sum, doc) => sum + (doc.totalProblemsCorrect || 0), 0);
  const practiceAttempted = practiceDocs.reduce((sum, doc) => sum + (doc.totalProblemsAttempted || 0), 0);
  const practiceTime = practiceDocs.reduce((sum, doc) => sum + (doc.totalTimeSpentSeconds || 0), 0);
  const practiceAccuracy = practiceAttempted > 0 ? Math.round((practiceProblems / practiceAttempted) * 100) : 0;

  const learnAvgTime = learnSummary.totalProblemsSolved > 0
    ? learnSummary.totalTimeSeconds / learnSummary.totalProblemsSolved
    : 0;
  const practiceAvgTime = practiceProblems > 0 ? practiceTime / practiceProblems : 0;

  // Generate insight
  let insight = "Keep up the great work!";
  if (practiceAccuracy >= 75 && practiceProblems > 10) {
    insight = "Practice accuracy is strong! Shows you're building real understanding, not just relying on hints.";
  } else if (practiceAccuracy < 60 && learnSummary.overallAccuracy > 80) {
    insight = "Consider reviewing Learn Mode hints before attempting Practice problems.";
  }

  return {
    learn: {
      accuracy: learnSummary.overallAccuracy,
      problemsSolved: learnSummary.totalProblemsSolved,
      averageTimePerProblem: learnAvgTime,
      hintsAvailable: true
    },
    practice: {
      accuracy: practiceAccuracy,
      problemsSolved: practiceProblems,
      averageTimePerProblem: practiceAvgTime,
      hintsAvailable: false
    },
    insight
  };
}

// ============================================
// ACHIEVEMENTS AGGREGATION
// ============================================

function aggregateAchievementSummary(userProfile: UserProfile | null): AchievementSummary {
  const total = userProfile?.gamification?.totalAchievements || 0;

  return {
    totalUnlocked: total,
    totalAvailable: 48, // TODO: Get from achievement service
    percentageComplete: Math.round((total / 48) * 100),
    totalXPFromAchievements: 0, // TODO: Calculate from achievements
    nextMilestone: total < 30 ? {
      achievementsNeeded: 30 - total,
      xpReward: 300
    } : undefined
  };
}

function aggregateAchievementCategories(_userProfile: UserProfile | null): AchievementCategory[] {
  // TODO: Implement when achievements are fully structured
  return [];
}

// ============================================
// EMPTY DASHBOARD
// ============================================

function getEmptyDashboard(): StudentDashboardData {
  return {
    overview: {
      stats: {
        currentLevel: 1,
        totalXP: 0,
        xpProgress: { current: 0, needed: 100, percentage: 0 },
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
        insight: "Start learning to see your progress!"
      }
    },
    achievements: {
      summary: {
        totalUnlocked: 0,
        totalAvailable: 48,
        percentageComplete: 0,
        totalXPFromAchievements: 0
      },
      categories: [],
      recentAchievements: []
    },
    isLoading: false
  };
}

// ============================================
// EXPORTS
// ============================================

export const studentDashboardService = {
  getStudentDashboardData
};
