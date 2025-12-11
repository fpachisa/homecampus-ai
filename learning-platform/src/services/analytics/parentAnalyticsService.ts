/**
 * Parent Analytics Service
 *
 * Provides comprehensive analytics for parent dashboard.
 * Aggregates data from ProgressSummary, LearnConversation, and PracticeProgress.
 */

import { getProgressSummary } from '../firestoreProgressService';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../firebase';
import { getLocalDateString } from '../../utils/dateUtils';
import type {
  ProgressSummary,
  LearnSubtopicSummary,
  ActivityEntry
} from '../../types/firestore';

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface ChildAnalytics {
  overview: OverviewMetrics;
  keyMetrics: KeyMetrics;
  activity: ActivityData;
  strengths: TopicInsight[];
  weaknesses: TopicInsight[];
  insights: Insight[];
  recentActivity: ActivityEntry[];
  topicsBreakdown: TopicBreakdown[];
}

export interface OverviewMetrics {
  displayName: string;
  gradeLevel: string;
  lastActive: Date | null;
  currentStreak: number;
  longestStreak: number;
  totalXP: number;
  currentLevel: number;
  overallProgress: number; // 0-100%
}

export interface KeyMetrics {
  weeklyTime: {
    value: number; // seconds
    formatted: string; // "5h 32m"
    trend: number; // percentage change vs last week
    trendDirection: 'up' | 'down' | 'neutral';
  };
  topicsProgress: {
    completed: number;
    total: number;
    percentage: number;
    trend: number; // topics completed this week vs last week
    trendDirection: 'up' | 'down' | 'neutral';
  };
  accuracy: {
    value: number; // percentage
    trend: number; // percentage point change
    trendDirection: 'up' | 'down' | 'neutral';
  };
  streak: {
    current: number;
    longest: number;
    isBestEver: boolean;
  };
}

export interface ActivityData {
  heatmap: HeatmapDay[]; // Last 30 days
  dailyXP: DailyXP[]; // Last 7 days
  weeklyComparison: {
    thisWeek: WeeklyStats;
    lastWeek: WeeklyStats;
  };
}

export interface HeatmapDay {
  date: string; // YYYY-MM-DD
  problemsSolved: number;
  xpEarned: number;
  timeSpent: number; // seconds
  intensity: 'none' | 'light' | 'medium' | 'high';
}

export interface DailyXP {
  date: string;
  day: string; // "Mon", "Tue", etc.
  xp: number;
}

export interface WeeklyStats {
  problemsSolved: number;
  timeSpent: number;
  xpEarned: number;
  accuracy: number;
}

export interface TopicInsight {
  topicId: string;
  displayName: string;
  progress: number; // 0-100%
  accuracy?: number; // 0-100%
  timeSpent: number; // seconds
  problemsAttempted?: number;
  problemsCorrect?: number;
  masteryLevel: 'high' | 'medium' | 'low';
  issues?: string[]; // Specific struggling areas
  lastActive: Date | null;
}

export interface TopicBreakdown {
  topicId: string;
  displayName: string;
  progress: number;
  status: 'completed' | 'in-progress' | 'locked';
  subtopics?: SubtopicBreakdown[];
}

export interface SubtopicBreakdown {
  subtopicId: string;
  displayName: string;
  progress: number;
  timeSpent: number;
  problemsCorrect: number;
  status: 'completed' | 'in-progress' | 'locked';
}

export interface Insight {
  type: 'celebration' | 'alert' | 'recommendation' | 'motivational';
  icon: string;
  message: string;
  priority: number; // 1 (highest) to 5 (lowest)
  sentiment: 'positive' | 'warning' | 'info';
  action?: {
    label: string;
    route: string;
  };
}

// ============================================
// MAIN SERVICE CLASS
// ============================================

export class ParentAnalyticsService {
  /**
   * Convert various timestamp formats to Date
   * Handles Firestore Timestamps, Date objects, strings, and numbers
   * @private
   */
  private convertToDate(timestamp: any): Date | null {
    if (!timestamp) return null;
    if (timestamp instanceof Date) return timestamp;
    if (typeof timestamp.toDate === 'function') return timestamp.toDate();
    if (typeof timestamp === 'string') return new Date(timestamp);
    if (typeof timestamp === 'number') return new Date(timestamp);
    return null;
  }

  /**
   * Get comprehensive analytics for a child
   *
   * @param childUid - For linked children: their user UID. For child profiles: parent's UID
   * @param childProfileId - For child profiles only: the profile ID within parent's account
   */
  async getChildAnalytics(
    childUid: string,
    timeRange: '7d' | '30d' | '3m' | 'all' = '30d',
    _childProfileId?: string // Unused, kept for API compatibility
  ): Promise<ChildAnalytics | null> {
    try {
      // For child profiles and linked children, we get data from their own documents
      // Netflix-style profiles now have shadow user documents with full functionality

      // For linked children, fetch from their own documents
      let summary = null;
      let userProfile = null;

      try {
        summary = await getProgressSummary(childUid);
      } catch (error) {
        console.warn('Could not fetch progress summary for child:', childUid, error);
      }

      try {
        userProfile = await this.getUserProfile(childUid);
      } catch (error) {
        console.warn('Could not fetch user profile for child:', childUid, error);
      }

      // If we have profile but no summary, show profile data with empty progress
      if (!summary && userProfile) {
        return this.getMockAnalyticsWithProfile(userProfile);
      }

      // If we don't have profile, return generic mock data
      if (!userProfile) {
        return this.getMockAnalytics(childUid);
      }

      // Return empty analytics if no summary data
      if (!summary) {
        return null;
      }

      // Calculate all analytics
      const overview = this.calculateOverview(summary, userProfile);
      const keyMetrics = this.calculateKeyMetrics(summary, timeRange, userProfile);  // Pass userProfile
      const activity = this.getActivityData(summary, timeRange);
      const strengths = this.identifyStrengths(summary);
      const weaknesses = this.identifyWeaknesses(summary);
      const insights = this.generateInsights(summary, userProfile, keyMetrics);
      const topicsBreakdown = this.getTopicsBreakdown(summary);

      return {
        overview,
        keyMetrics,
        activity,
        strengths,
        weaknesses,
        insights,
        recentActivity: summary.recentActivity || [],
        topicsBreakdown
      };
    } catch (error) {
      console.error('Error fetching child analytics:', error);
      return null;
    }
  }

  /**
   * Get user profile with gamification stats
   */
  private async getUserProfile(uid: string): Promise<any> {
    const userRef = doc(firestore, 'users', uid);
    const snap = await getDoc(userRef);
    return snap.exists() ? snap.data() : null;
  }

  /**
   * Calculate overview metrics
   */
  private calculateOverview(summary: ProgressSummary, userProfile: any): OverviewMetrics {
    const learnTopics = Object.values(summary.learnSubtopics || {});
    const practiceTopics = Object.values(summary.practiceTopics || {});

    // Get last active from userProfile.gamification (updated on every practice session)
    const lastActive = this.convertToDate(userProfile.gamification?.lastActive);

    // Calculate overall progress (average of all topics)
    const allProgress = [
      ...learnTopics.map(t => t.progress),
      ...practiceTopics.map(t => (t.nodesCompleted / t.totalNodes) * 100)
    ];
    const overallProgress = allProgress.length > 0
      ? Math.round(allProgress.reduce((sum, p) => sum + p, 0) / allProgress.length)
      : 0;

    return {
      displayName: userProfile.displayName || 'Student',
      gradeLevel: userProfile.gradeLevel || userProfile.grade || 'Unknown',
      lastActive,
      currentStreak: userProfile.gamification?.currentStreak || 0,
      longestStreak: userProfile.gamification?.longestStreak || 0,
      totalXP: userProfile.gamification?.totalXP || 0,              // ✅ Read from userProfile.gamification
      currentLevel: userProfile.gamification?.currentLevel || 1,     // ✅ Read from userProfile.gamification
      overallProgress
    };
  }

  /**
   * Calculate key metrics with trends
   * Now reads from userProfile.gamification instead of empty summary.recentActivity
   */
  private calculateKeyMetrics(summary: ProgressSummary, _timeRange: string, userProfile: any): KeyMetrics {
    // Get total metrics from userProfile.gamification (which is actually kept up-to-date)
    const totalTimeSeconds = userProfile.gamification?.totalTimeSpentSeconds || 0;
    const totalProblemsAttempted = userProfile.gamification?.totalProblemsAttempted || 0;
    const totalProblemsSolved = userProfile.gamification?.totalProblemsSolved || 0;

    // Topics progress
    const totalTopicsStarted = summary.totalTopicsStarted || 0;
    const totalTopicsCompleted = summary.totalTopicsCompleted || 0;
    const topicsPercentage = totalTopicsStarted > 0 ? (totalTopicsCompleted / totalTopicsStarted) * 100 : 0;

    // Accuracy (from global gamification stats)
    const accuracy = totalProblemsAttempted > 0
      ? Math.round((totalProblemsSolved / totalProblemsAttempted) * 100)
      : 0;

    // Streak (from global gamification stats)
    const currentStreak = userProfile.gamification?.currentStreak || 0;
    const longestStreak = userProfile.gamification?.longestStreak || 0;

    return {
      weeklyTime: {
        value: totalTimeSeconds,  // Show total time (we don't have weekly breakdown)
        formatted: this.formatTime(totalTimeSeconds),
        trend: 0,  // No trend data without historical tracking
        trendDirection: 'neutral' as const
      },
      topicsProgress: {
        completed: totalTopicsCompleted,
        total: totalTopicsStarted,
        percentage: Math.round(topicsPercentage),
        trend: 0,  // No trend data without historical tracking
        trendDirection: 'neutral' as const
      },
      accuracy: {
        value: accuracy,
        trend: 0,  // No trend data without historical tracking
        trendDirection: 'neutral' as const
      },
      streak: {
        current: currentStreak,
        longest: longestStreak,
        isBestEver: currentStreak === longestStreak && currentStreak > 0
      }
    };
  }

  /**
   * Get activity data for visualizations
   */
  private getActivityData(summary: ProgressSummary, _timeRange: string): ActivityData {
    const now = new Date();
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    // Generate heatmap for last 30 days
    const heatmap: HeatmapDay[] = [];
    for (let i = 0; i < 30; i++) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      const dateStr = getLocalDateString(date);

      const dayActivity = (summary.recentActivity || []).filter(a => a.date === dateStr);
      const problemsSolved = dayActivity.reduce((sum, a) => sum + (a.problemsSolved || 0), 0);
      const xpEarned = dayActivity.reduce((sum) => sum + 0, 0); // TODO: Add XP to activity
      const timeSpent = dayActivity.reduce((sum, a) => sum + (a.timeSpent || 0), 0);

      let intensity: 'none' | 'light' | 'medium' | 'high' = 'none';
      if (problemsSolved >= 6) intensity = 'high';
      else if (problemsSolved >= 3) intensity = 'medium';
      else if (problemsSolved >= 1) intensity = 'light';

      heatmap.unshift({ date: dateStr, problemsSolved, xpEarned, timeSpent, intensity });
    }

    // Generate daily XP for last 7 days
    const dailyXP: DailyXP[] = [];
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      const dateStr = getLocalDateString(date);
      const dayActivity = (summary.recentActivity || []).filter(a => a.date === dateStr);
      const xp = dayActivity.reduce((sum) => sum + 0, 0); // TODO: Add XP tracking

      dailyXP.push({
        date: dateStr,
        day: days[date.getDay()],
        xp
      });
    }

    // Weekly comparison
    const thisWeekActivity = (summary.recentActivity || []).filter(a => new Date(a.date) >= sevenDaysAgo);
    const lastWeekActivity = (summary.recentActivity || []).filter(a => {
      const date = new Date(a.date);
      return date >= new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000) && date < sevenDaysAgo;
    });

    const thisWeek: WeeklyStats = {
      problemsSolved: thisWeekActivity.reduce((sum, a) => sum + (a.problemsSolved || 0), 0),
      timeSpent: thisWeekActivity.reduce((sum, a) => sum + (a.timeSpent || 0), 0),
      xpEarned: 0, // TODO
      accuracy: 85 // TODO: Calculate properly
    };

    const lastWeek: WeeklyStats = {
      problemsSolved: lastWeekActivity.reduce((sum, a) => sum + (a.problemsSolved || 0), 0),
      timeSpent: lastWeekActivity.reduce((sum, a) => sum + (a.timeSpent || 0), 0),
      xpEarned: 0,
      accuracy: 80
    };

    return {
      heatmap,
      dailyXP,
      weeklyComparison: { thisWeek, lastWeek }
    };
  }

  /**
   * Identify strong topics (top 3)
   */
  private identifyStrengths(summary: ProgressSummary): TopicInsight[] {
    const allTopics: TopicInsight[] = [];

    // Learn subtopics
    Object.entries(summary.learnSubtopics || {}).forEach(([id, topic]) => {
      if (topic.progress >= 80) {
        allTopics.push({
          topicId: id,
          displayName: topic.displayName,
          progress: topic.progress,
          accuracy: topic.problemsCorrect > 0 ? (topic.problemsCorrect / (topic.problemsCorrect + 5)) * 100 : 0,
          timeSpent: topic.timeSpent,
          problemsAttempted: topic.problemsCorrect + 5, // Estimate
          problemsCorrect: topic.problemsCorrect,
          masteryLevel: topic.progress >= 90 ? 'high' : 'medium',
          lastActive: this.convertToDate(topic.lastActive)
        });
      }
    });

    // Practice topics
    Object.entries(summary.practiceTopics || {}).forEach(([id, topic]) => {
      const progress = topic.totalNodes > 0 ? (topic.nodesCompleted / topic.totalNodes) * 100 : 0;
      if (progress >= 80) {
        allTopics.push({
          topicId: id,
          displayName: topic.displayName,
          progress,
          timeSpent: 0, // Not tracked in practice summary
          masteryLevel: progress >= 90 ? 'high' : 'medium',
          lastActive: this.convertToDate(topic.lastActive)
        });
      }
    });

    // Sort by progress and return top 3
    return allTopics
      .sort((a, b) => b.progress - a.progress)
      .slice(0, 3);
  }

  /**
   * Identify weak topics (areas needing attention)
   */
  private identifyWeaknesses(summary: ProgressSummary): TopicInsight[] {
    const weakTopics: TopicInsight[] = [];

    // Learn subtopics with low progress or accuracy
    Object.entries(summary.learnSubtopics || {}).forEach(([id, topic]) => {
      const accuracy = topic.problemsCorrect > 0 ? (topic.problemsCorrect / (topic.problemsCorrect + 10)) * 100 : 0;

      if (topic.progress > 0 && (topic.progress < 70 || accuracy < 70)) {
        weakTopics.push({
          topicId: id,
          displayName: topic.displayName,
          progress: topic.progress,
          accuracy,
          timeSpent: topic.timeSpent,
          problemsCorrect: topic.problemsCorrect,
          masteryLevel: 'low',
          issues: accuracy < 70 ? ['Low accuracy - may need concept review'] : ['Progress slower than expected'],
          lastActive: this.convertToDate(topic.lastActive)
        });
      }
    });

    // Practice topics with low progress
    Object.entries(summary.practiceTopics || {}).forEach(([id, topic]) => {
      const progress = topic.totalNodes > 0 ? (topic.nodesCompleted / topic.totalNodes) * 100 : 0;

      if (progress > 0 && progress < 70) {
        weakTopics.push({
          topicId: id,
          displayName: topic.displayName,
          progress,
          timeSpent: 0,
          masteryLevel: 'low',
          issues: ['Needs more practice'],
          lastActive: this.convertToDate(topic.lastActive)
        });
      }
    });

    // Sort by progress (lowest first) and return top 3
    return weakTopics
      .sort((a, b) => a.progress - b.progress)
      .slice(0, 3);
  }

  /**
   * Generate AI insights for parents
   */
  private generateInsights(
    summary: ProgressSummary,
    _userProfile: any,
    metrics: KeyMetrics
  ): Insight[] {
    const insights: Insight[] = [];

    // Celebration insights (progress improvements)
    if (metrics.weeklyTime.trend > 20) {
      insights.push({
        type: 'celebration',
        icon: '✨',
        message: `Great progress this week! ${metrics.weeklyTime.trend > 0 ? '+' : ''}${metrics.weeklyTime.trend}% more study time`,
        priority: 1,
        sentiment: 'positive'
      });
    }

    if (metrics.accuracy.trend > 5) {
      insights.push({
        type: 'celebration',
        icon: '🎯',
        message: `Accuracy improved by ${metrics.accuracy.trend}% - learning techniques are working!`,
        priority: 1,
        sentiment: 'positive'
      });
    }

    // Streak insights
    if (metrics.streak.current >= 7) {
      insights.push({
        type: 'motivational',
        icon: '🔥',
        message: `${metrics.streak.current}-day streak! Encourage them to keep it up tomorrow`,
        priority: 2,
        sentiment: 'positive'
      });
    }

    // Alert insights (areas needing attention)
    const weaknesses = this.identifyWeaknesses(summary);
    if (weaknesses.length > 0) {
      const weakest = weaknesses[0];
      insights.push({
        type: 'alert',
        icon: '⚠️',
        message: `${weakest.displayName} needs attention (${Math.round(weakest.progress)}% progress, ${Math.round(weakest.accuracy || 0)}% accuracy)`,
        priority: 2,
        sentiment: 'warning',
        action: {
          label: 'View Topic Details',
          route: `/parent/topics/${weakest.topicId}`
        }
      });
    }

    // Recommendation insights
    if (metrics.weeklyTime.value < 3600) { // Less than 1 hour per week
      insights.push({
        type: 'recommendation',
        icon: '💡',
        message: 'Low study time this week. Consider setting a daily 15-minute goal',
        priority: 3,
        sentiment: 'info'
      });
    }

    // Sort by priority and return top 5
    return insights.sort((a, b) => a.priority - b.priority).slice(0, 5);
  }

  /**
   * Get topics breakdown with subtopics
   */
  private getTopicsBreakdown(summary: ProgressSummary): TopicBreakdown[] {
    const topics: TopicBreakdown[] = [];

    // Group learn subtopics by parent topic
    const topicGroups = new Map<string, LearnSubtopicSummary[]>();
    Object.entries(summary.learnSubtopics || {}).forEach(([_id, subtopic]) => {
      if (!topicGroups.has(subtopic.topicId)) {
        topicGroups.set(subtopic.topicId, []);
      }
      topicGroups.get(subtopic.topicId)!.push({ ...subtopic, displayName: subtopic.displayName });
    });

    // Create topic breakdown for each group
    topicGroups.forEach((subtopics, topicId) => {
      const avgProgress = subtopics.reduce((sum, s) => sum + s.progress, 0) / subtopics.length;
      const allCompleted = subtopics.every(s => s.progress === 100);

      topics.push({
        topicId,
        displayName: subtopics[0].displayName.split(' - ')[0], // Extract parent topic name
        progress: Math.round(avgProgress),
        status: allCompleted ? 'completed' : avgProgress > 0 ? 'in-progress' : 'locked',
        subtopics: subtopics.map(s => ({
          subtopicId: topicId + '-' + s.displayName.toLowerCase().replace(/\s+/g, '-'),
          displayName: s.displayName,
          progress: s.progress,
          timeSpent: s.timeSpent,
          problemsCorrect: s.problemsCorrect,
          status: s.progress === 100 ? 'completed' : s.progress > 0 ? 'in-progress' : 'locked'
        }))
      });
    });

    // Add practice topics
    Object.entries(summary.practiceTopics || {}).forEach(([topicId, topic]) => {
      const progress = topic.totalNodes > 0 ? (topic.nodesCompleted / topic.totalNodes) * 100 : 0;
      topics.push({
        topicId,
        displayName: topic.displayName,
        progress: Math.round(progress),
        status: progress === 100 ? 'completed' : progress > 0 ? 'in-progress' : 'locked'
      });
    });

    return topics.sort((a, b) => b.progress - a.progress);
  }

  /**
   * Format time in seconds to human-readable string
   */
  private formatTime(seconds: number): string {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    if (hours === 0 && minutes === 0) return '0m';
    if (hours === 0) return `${minutes}m`;
    return `${hours}h ${minutes}m`;
  }

  /**
   * Get mock analytics with actual user profile data
   * Used when child has a profile but no progress summary yet
   */
  private getMockAnalyticsWithProfile(userProfile: any): ChildAnalytics {
    // Convert lastLoginAt to Date (handle various formats)
    const lastActive = this.convertToDate(userProfile.lastLoginAt);

    return {
      overview: {
        displayName: userProfile.displayName || 'Student',
        gradeLevel: userProfile.gradeLevel || userProfile.grade || 'Not Set',
        lastActive,
        currentStreak: userProfile.gamification?.currentStreak || 0,
        longestStreak: userProfile.gamification?.longestStreak || 0,
        totalXP: userProfile.gamification?.totalXP || 0,
        currentLevel: userProfile.gamification?.currentLevel || 1,
        overallProgress: 0
      },
      keyMetrics: {
        weeklyTime: {
          value: 0,
          formatted: '0m',
          trend: 0,
          trendDirection: 'neutral'
        },
        topicsProgress: {
          completed: 0,
          total: 0,
          percentage: 0,
          trend: 0,
          trendDirection: 'neutral'
        },
        accuracy: {
          value: 0,
          trend: 0,
          trendDirection: 'neutral'
        },
        streak: {
          current: userProfile.gamification?.currentStreak || 0,
          longest: userProfile.gamification?.longestStreak || 0,
          isBestEver: false
        }
      },
      activity: {
        heatmap: [],
        dailyXP: [],
        weeklyComparison: {
          thisWeek: { problemsSolved: 0, timeSpent: 0, xpEarned: 0, accuracy: 0 },
          lastWeek: { problemsSolved: 0, timeSpent: 0, xpEarned: 0, accuracy: 0 }
        }
      },
      strengths: [],
      weaknesses: [],
      insights: [{
        type: 'motivational',
        icon: '📚',
        message: `${userProfile.displayName || 'This student'} hasn't started learning yet. Encourage them to begin their first lesson!`,
        priority: 1,
        sentiment: 'info'
      }],
      recentActivity: [],
      topicsBreakdown: []
    };
  }

  /**
   * Get mock analytics when no data is available
   */
  private getMockAnalytics(_childUid: string): ChildAnalytics {
    return {
      overview: {
        displayName: 'Student',
        gradeLevel: 'Not Set',
        lastActive: null,
        currentStreak: 0,
        longestStreak: 0,
        totalXP: 0,
        currentLevel: 1,
        overallProgress: 0
      },
      keyMetrics: {
        weeklyTime: {
          value: 0,
          formatted: '0m',
          trend: 0,
          trendDirection: 'neutral'
        },
        topicsProgress: {
          completed: 0,
          total: 0,
          percentage: 0,
          trend: 0,
          trendDirection: 'neutral'
        },
        accuracy: {
          value: 0,
          trend: 0,
          trendDirection: 'neutral'
        },
        streak: {
          current: 0,
          longest: 0,
          isBestEver: false
        }
      },
      activity: {
        heatmap: [],
        dailyXP: [],
        weeklyComparison: {
          thisWeek: { problemsSolved: 0, timeSpent: 0, xpEarned: 0, accuracy: 0 },
          lastWeek: { problemsSolved: 0, timeSpent: 0, xpEarned: 0, accuracy: 0 }
        }
      },
      strengths: [],
      weaknesses: [],
      insights: [{
        type: 'motivational',
        icon: 'ℹ️',
        message: 'No learning data available yet. Start learning to see progress!',
        priority: 1,
        sentiment: 'info'
      }],
      recentActivity: [],
      topicsBreakdown: []
    };
  }
}

// Export singleton instance
export const parentAnalyticsService = new ParentAnalyticsService();
