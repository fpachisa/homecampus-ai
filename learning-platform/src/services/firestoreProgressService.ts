/**
 * Firestore Progress Service - MVP Implementation
 *
 * Purpose: Saves and loads learning progress to/from Firestore
 * Architecture: Hybrid Collection Model (Option D) from FIRESTORE_DATA_STRATEGY.md
 *
 * Key Features:
 * - Learn Mode: Subtopic-level documents with section progression
 * - Progress Summary: Denormalized for parent dashboard (single-read performance)
 * - Offline Support: Built-in Firestore persistence
 * - Simple Retry Logic: 3 retries with exponential backoff
 *
 * Collection Paths:
 * - users/{uid}/learn/{subtopicId}
 * - users/{uid}/practice/{topicId}
 * - users/{uid}/progressSummary
 */

import {
  doc,
  getDoc,
  setDoc,
  writeBatch,
  serverTimestamp,
  Timestamp,
  collection,
  getDocs
} from 'firebase/firestore';
import { firestore } from './firebase';
import type {
  LearnConversation,
  ProgressSummary,
  PracticeProgress,
  PracticeNodeProgress
} from '../types/firestore';
import type { ConversationState, SectionProgressState } from '../types/types';
import type { PathProgress, PathNode } from '../types/practice';

// Import the helper functions
import {
  messageToFirestore as convertMessageToFirestore,
  messageFromFirestore as convertMessageFromFirestore,
  calculateProgress as calcProgress
} from '../types/firestore';

// Import global streak service
import { updateGlobalStreak } from './globalStreakService';

// Import global stats aggregator
import { aggregateGlobalStats } from './globalStatsAggregator';

// Import daily activity and mastery services
import { updateDailyActivity } from './dailyActivityService';
import { recordMasteryEvent } from './masteryEventService';

// ============================================
// DELTA TRACKING FOR DAILY ACTIVITY
// ============================================

/**
 * Tracks last saved stats to calculate deltas for daily activity updates.
 * Key format: "uid:topicId" for practice, "uid:subtopicId" for learn
 *
 * This prevents stats duplication bug where cumulative totals were
 * being added repeatedly on each debounced save.
 */
interface LastSavedStats {
  problemsSolved: number;
  problemsAttempted: number;
  timeSeconds: number;
  xpEarned: number;
}

const lastSavedStatsMap = new Map<string, LastSavedStats>();

/**
 * Recursively remove undefined values from an object
 * Firestore doesn't allow undefined values - they must be null or omitted
 */
function stripUndefined(obj: any): any {
  if (obj === null || obj === undefined) {
    return null;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => stripUndefined(item));
  }

  if (obj instanceof Timestamp || obj instanceof Date) {
    return obj;
  }

  if (typeof obj === 'object') {
    const cleaned: any = {};
    for (const key in obj) {
      const value = obj[key];
      if (value !== undefined) {
        cleaned[key] = stripUndefined(value);
      }
    }
    return cleaned;
  }

  return obj;
}

/**
 * Save Learn Mode Progress
 *
 * Saves conversation data and updates progress summary in a single batch.
 * Uses simple retry logic (3 attempts with 1-second delay).
 *
 * @param uid - User ID
 * @param subtopicId - Full subtopic ID (e.g., "s3-math-trigonometry-basic-ratios")
 * @param conversation - Conversation data to save
 * @param retryCount - Internal retry counter
 */
export async function saveLearnProgress(
  uid: string,
  subtopicId: string,
  conversation: LearnConversation,
  retryCount = 0
): Promise<void> {
  try {
    const batch = writeBatch(firestore);

    // 1. Save conversation document
    const convRef = doc(firestore, `users/${uid}/learn/${subtopicId}`);
    const cleanedConversation = stripUndefined({
      ...conversation,
      lastUpdated: serverTimestamp()
    });
    batch.set(convRef, cleanedConversation);

    // 2. Update progress summary for parent dashboard
    const summaryRef = doc(firestore, 'progressSummaries', uid);

    // Calculate progress percentage
    const totalSections = 6; // TODO: Get from curriculum config
    const progress = calcProgress(conversation.sectionProgress, totalSections);

    const summaryUpdate: Partial<ProgressSummary> = {
      learnSubtopics: {
        [subtopicId]: {
          displayName: conversation.displayName,
          topicId: conversation.topicId,
          grade: conversation.grade,
          progress,
          lastActive: serverTimestamp() as Timestamp,
          problemsCorrect: conversation.sessionStats.correctAnswers,
          timeSpent: conversation.sessionStats.totalTimeSpent,
          sectionsCompleted: conversation.sectionProgress.masteredSections.length,
          totalSections
        }
      },
      lastUpdated: serverTimestamp() as Timestamp
    };

    const cleanedSummaryUpdate = stripUndefined(summaryUpdate);
    batch.set(summaryRef, cleanedSummaryUpdate, { merge: true });

    await batch.commit();

    // 3. Update daily activity stats (Learn mode)
    try {
      // Get last saved stats for this uid:subtopicId combination
      const statsKey = `${uid}:${subtopicId}`;
      const lastStats = lastSavedStatsMap.get(statsKey) || {
        problemsSolved: 0,
        problemsAttempted: 0,
        timeSeconds: 0,
        xpEarned: 0
      };

      // Calculate current cumulative totals
      const currentStats = {
        problemsSolved: conversation.sessionStats.correctAnswers,
        problemsAttempted: conversation.sessionStats.problemsAttempted,
        timeSeconds: conversation.sessionStats.totalTimeSpent,
        xpEarned: 0 // XP is tracked in practice mode only
      };

      // Calculate DELTA (only new activity since last save)
      const delta = {
        problemsSolved: Math.max(0, currentStats.problemsSolved - lastStats.problemsSolved),
        problemsAttempted: Math.max(0, currentStats.problemsAttempted - lastStats.problemsAttempted),
        timeSeconds: Math.max(0, currentStats.timeSeconds - lastStats.timeSeconds),
        hintsUsed: conversation.sessionStats.hintsProvided, // These are already session deltas
        solutionsViewed: conversation.sessionStats.solutionsViewed || 0
      };

      // Only update if there's actual new activity
      if (delta.problemsSolved > 0 || delta.problemsAttempted > 0 || delta.timeSeconds > 0) {
        await updateDailyActivity(uid, {
          mode: 'learn',
          problemsSolved: delta.problemsSolved,
          problemsAttempted: delta.problemsAttempted,
          timeSeconds: delta.timeSeconds,
          xpEarned: 0,
          hintsUsed: delta.hintsUsed,
          solutionsViewed: delta.solutionsViewed
        });

        // Update last saved stats in memory
        lastSavedStatsMap.set(statsKey, currentStats);

        console.log('📊 Daily activity updated (Learn):', delta);
      }
    } catch (err) {
      console.error('Failed to update daily activity:', err);
      // Don't fail the entire save if daily activity update fails
    }

    // 4. Record mastery events for newly mastered sections
    // Check if there are any sections that just became mastered in this session
    // TODO: Track previously mastered sections to detect new ones
    // For now, this will be handled when section mastery occurs in the UI

    // 5. Aggregate global stats from BOTH learn AND practice modes
    try {
      const globalStats = await aggregateGlobalStats(uid);

      // Update user profile with AGGREGATED stats
      const userProfileRef = doc(firestore, 'users', uid);
      const gamificationUpdate = {
        gamification: {
          totalXP: globalStats.totalXP || 0,
          currentLevel: globalStats.currentLevel || 1,
          totalProblemsSolved: globalStats.totalProblemsSolved || 0,
          totalProblemsAttempted: globalStats.totalProblemsAttempted || 0,
          totalTimeSpentSeconds: globalStats.totalTimeSpentSeconds || 0,
          totalAchievements: globalStats.totalAchievements || 0,
          currentStreak: globalStats.currentStreak || 0,
          longestStreak: globalStats.longestStreak || 0,
          lastActive: new Date().toISOString(),
          lastUpdated: new Date().toISOString()
        }
      };

      const cleanedUpdate = stripUndefined(gamificationUpdate);
      await setDoc(userProfileRef, cleanedUpdate, { merge: true });

      console.log('📊 Global stats updated (Learn mode):', {
        currentLevel: globalStats.currentLevel,
        totalProblemsSolved: globalStats.totalProblemsSolved,
        totalXP: globalStats.totalXP,
        currentStreak: globalStats.currentStreak,
        longestStreak: globalStats.longestStreak
      });
    } catch (err) {
      console.error('Failed to update global stats:', err);
      // Don't fail the entire save if stats update fails
    }

    // 6. Update global streak (Learn mode activity counts for streaks too!)
    try {
      await updateGlobalStreak(uid);
      console.log('🔥 Global streak updated after learn session');
    } catch (streakError) {
      console.error('Error updating global streak:', streakError);
      // Don't throw - streak update failure shouldn't break progress save
    }

  } catch (error) {
    // Simple retry logic (3 attempts)
    if (retryCount < 3) {
      await new Promise(r => setTimeout(r, 1000));
      return saveLearnProgress(uid, subtopicId, conversation, retryCount + 1);
    }
    throw error;
  }
}

/**
 * Load Learn Mode Progress
 *
 * Loads conversation data for a specific subtopic.
 *
 * @param uid - User ID
 * @param subtopicId - Full subtopic ID
 * @returns Conversation data or null if not found
 */
export async function loadLearnProgress(
  uid: string,
  subtopicId: string
): Promise<LearnConversation | null> {
  const convRef = doc(firestore, `users/${uid}/learn/${subtopicId}`);
  const snap = await getDoc(convRef);

  if (!snap.exists()) {
    return null;
  }

  return snap.data() as LearnConversation;
}

/**
 * Get Progress Summary (Parent Dashboard)
 *
 * Single-read query for parent dashboard.
 * Returns all learn subtopics and practice topics in one read.
 *
 * @param uid - User ID (child's UID for parents)
 * @returns Progress summary or null if not found
 */
export async function getProgressSummary(
  uid: string
): Promise<ProgressSummary | null> {
  const summaryRef = doc(firestore, 'progressSummaries', uid);
  const snap = await getDoc(summaryRef);

  if (!snap.exists()) {
    return null;
  }

  return snap.data() as ProgressSummary;
}

/**
 * List All Learn Subtopics
 *
 * Gets metadata for all subtopics a student has started.
 * Use getProgressSummary() instead for dashboard views (more efficient).
 *
 * @param uid - User ID
 * @returns Array of subtopic IDs
 */
export async function listLearnSubtopics(uid: string): Promise<string[]> {
  const learnRef = collection(firestore, `users/${uid}/learn`);
  const snap = await getDocs(learnRef);

  return snap.docs.map(doc => doc.id);
}

/**
 * Convert ConversationState to LearnConversation
 *
 * Helper function to convert local state to Firestore format.
 *
 * @param state - Local conversation state
 * @param subtopicId - Subtopic ID
 * @param topicId - Topic ID
 * @param displayName - Display name
 * @param grade - Grade level
 * @param sectionProgress - Section progression state
 * @returns Firestore-compatible conversation
 */
export function conversationStateToFirestore(
  state: ConversationState,
  subtopicId: string,
  topicId: string,
  displayName: string,
  grade: string,
  sectionProgress: SectionProgressState
): LearnConversation {
  // Build the base conversation object
  const conversation: LearnConversation = {
    subtopicId,
    topicId,
    categoryId: topicId, // Alias for backward compatibility
    grade,
    displayName,
    messages: state.messages.map(convertMessageToFirestore),
    sectionProgress,
    sessionStats: {
      problemsAttempted: state.sessionStats.problemsAttempted,
      correctAnswers: state.sessionStats.correctAnswers,
      hintsProvided: state.sessionStats.hintsProvided,
      solutionsViewed: state.sessionStats.solutionsViewed || 0,
      startTime: Timestamp.fromDate(state.sessionStats.startTime),
      totalTimeSpent: Math.floor((Date.now() - state.sessionStats.startTime.getTime()) / 1000)
    },
    studentProfile: state.studentProfile,
    lastUpdated: Timestamp.now(),
    createdAt: Timestamp.now()
  };

  // Only add problemState if it exists (Firestore doesn't allow undefined)
  if (state.problemState) {
    conversation.problemState = {
      currentProblemId: state.problemState.currentProblemId,
      currentProblemText: state.problemState.currentProblemText,
      currentProblemType: state.problemState.problemType,
      hintsProvided: state.problemState.hintsGivenForCurrentProblem,
      attempts: state.problemState.attemptsForCurrentProblem,
      // Only include mathTool if it's defined
      ...(state.problemState.originalMathTool && { mathTool: state.problemState.originalMathTool })
    };
  }

  return conversation;
}

/**
 * Convert LearnConversation to ConversationState
 *
 * Helper function to convert Firestore data to local state.
 *
 * @param conversation - Firestore conversation
 * @returns Object with conversation state and section progress
 */
export function conversationStateFromFirestore(
  conversation: LearnConversation
): { conversationState: ConversationState; sectionProgress: SectionProgressState } {
  return {
    conversationState: {
      messages: conversation.messages.map(convertMessageFromFirestore),
      currentProblemType: conversation.problemState?.currentProblemType || 1,
      problemState: conversation.problemState ? {
        currentProblemId: conversation.problemState.currentProblemId,
        hintsGivenForCurrentProblem: conversation.problemState.hintsProvided,
        attemptsForCurrentProblem: conversation.problemState.attempts,
        problemStartTime: new Date(),
        currentProblemText: conversation.problemState.currentProblemText,
        problemType: conversation.problemState.currentProblemType,
        originalMathTool: conversation.problemState.mathTool
      } : undefined,
      sessionStats: {
        problemsAttempted: conversation.sessionStats.problemsAttempted,
        correctAnswers: conversation.sessionStats.correctAnswers,
        hintsProvided: conversation.sessionStats.hintsProvided,
        solutionsViewed: conversation.sessionStats.solutionsViewed || 0,
        startTime: new Date()  // Start fresh for current session
      },
      studentProfile: conversation.studentProfile
    },
    sectionProgress: conversation.sectionProgress
  };
}

/**
 * Initialize Progress Summary
 *
 * Creates initial progress summary document for new users.
 *
 * @param uid - User ID
 */
export async function initializeProgressSummary(uid: string): Promise<void> {
  const summaryRef = doc(firestore, 'progressSummaries', uid);

  // Check if already exists
  const snap = await getDoc(summaryRef);
  if (snap.exists()) {
    return; // Already initialized
  }

  const initialSummary: ProgressSummary = {
    uid,
    totalTopicsStarted: 0,
    totalTopicsCompleted: 0,
    totalProblemsCorrect: 0,
    totalTimeSpentSeconds: 0,
    currentLevel: 1,
    totalXP: 0,
    learnSubtopics: {},
    practiceTopics: {},
    recentActivity: [],
    lastUpdated: Timestamp.now()
  };

  await setDoc(summaryRef, initialSummary);
}

// ============================================
// PRACTICE MODE FUNCTIONS
// ============================================

/**
 * Save Practice Mode Progress
 *
 * Saves practice progress and updates progress summary.
 * Uses simple retry logic (3 attempts with 1-second delay).
 *
 * @param uid - User ID
 * @param topicId - Topic ID (e.g., "s3-math-trigonometry")
 * @param progress - Practice progress data to save
 * @param retryCount - Internal retry counter
 */
export async function savePracticeProgress(
  uid: string,
  topicId: string,
  progress: PracticeProgress,
  retryCount = 0
): Promise<void> {
  try {
    const batch = writeBatch(firestore);

    // 1. Save practice progress document
    const progressRef = doc(firestore, `users/${uid}/practice/${topicId}`);
    const cleanedProgress = stripUndefined({
      ...progress,
      lastUpdated: serverTimestamp()
    });
    batch.set(progressRef, cleanedProgress);

    // 2. Update progress summary for parent dashboard
    const summaryRef = doc(firestore, 'progressSummaries', uid);

    const summaryUpdate: Partial<ProgressSummary> = {
      practiceTopics: {
        [topicId]: {
          displayName: progress.displayName,
          nodesCompleted: Object.values(progress.nodes).filter(n => n.status === 'completed').length,
          totalNodes: Object.keys(progress.nodes).length,
          totalXP: progress.totalXP,
          currentLevel: progress.currentLevel,
          lastActive: serverTimestamp() as Timestamp
        }
      },
      lastUpdated: serverTimestamp() as Timestamp
    };

    const cleanedSummaryUpdate = stripUndefined(summaryUpdate);
    batch.set(summaryRef, cleanedSummaryUpdate, { merge: true });

    // 3. Commit the batch FIRST (so aggregation can read the saved data)
    await batch.commit();

    // 4. Aggregate global stats from ALL practice topics
    try {
      const globalStats = await aggregateGlobalStats(uid);

      // Update user profile with AGGREGATED stats (not just this topic)
      const userProfileRef = doc(firestore, 'users', uid);
      const gamificationUpdate = {
        gamification: {
          totalXP: globalStats.totalXP || 0,                                    // ✅ Sum across ALL topics
          currentLevel: globalStats.currentLevel || 1,                          // ✅ Calculated from total XP
          totalProblemsSolved: globalStats.totalProblemsSolved || 0,            // ✅ Sum across ALL topics
          totalProblemsAttempted: globalStats.totalProblemsAttempted || 0,      // ✅ Sum across ALL topics
          totalTimeSpentSeconds: globalStats.totalTimeSpentSeconds || 0,        // ✅ Sum across ALL topics
          totalAchievements: globalStats.totalAchievements || 0,                // ✅ Deduplicated count
          currentStreak: globalStats.currentStreak || 0,                        // ✅ Current daily streak
          longestStreak: globalStats.longestStreak || 0,                        // ✅ Longest streak ever
          lastActive: new Date().toISOString(),                                 // ✅ Track last practice time
          lastUpdated: new Date().toISOString()
        }
      };

      // Strip undefined values (Firestore doesn't allow them)
      const cleanedUpdate = stripUndefined(gamificationUpdate);

      await setDoc(userProfileRef, cleanedUpdate, { merge: true });

      console.log('📊 Global stats updated (Practice):', {
        totalXP: globalStats.totalXP,
        currentLevel: globalStats.currentLevel,
        totalProblemsSolved: globalStats.totalProblemsSolved,
        currentStreak: globalStats.currentStreak,
        longestStreak: globalStats.longestStreak
      });
    } catch (statsError) {
      console.error('Error aggregating global stats:', statsError);
      // Don't throw - stats aggregation failure shouldn't break progress save
      // User will see stale global stats until next save succeeds
    }

    // 5. Update daily activity stats (Practice mode)
    try {
      // Get last saved stats for this uid:topicId combination
      const statsKey = `${uid}:${topicId}`;
      const lastStats = lastSavedStatsMap.get(statsKey) || {
        problemsSolved: 0,
        problemsAttempted: 0,
        timeSeconds: 0,
        xpEarned: 0
      };

      // Calculate current cumulative totals
      const currentStats = {
        problemsSolved: progress.totalProblemsCorrect,
        problemsAttempted: progress.totalProblemsAttempted,
        timeSeconds: progress.totalTimeSpentSeconds || 0,
        xpEarned: progress.totalXP
      };

      // Calculate DELTA (only new activity since last save)
      const delta = {
        problemsSolved: Math.max(0, currentStats.problemsSolved - lastStats.problemsSolved),
        problemsAttempted: Math.max(0, currentStats.problemsAttempted - lastStats.problemsAttempted),
        timeSeconds: Math.max(0, currentStats.timeSeconds - lastStats.timeSeconds),
        xpEarned: Math.max(0, currentStats.xpEarned - lastStats.xpEarned)
      };

      // Only update if there's actual new activity
      if (delta.problemsSolved > 0 || delta.problemsAttempted > 0 || delta.timeSeconds > 0) {
        await updateDailyActivity(uid, {
          mode: 'practice',
          problemsSolved: delta.problemsSolved,
          problemsAttempted: delta.problemsAttempted,
          timeSeconds: delta.timeSeconds,
          xpEarned: delta.xpEarned
        });

        // Update last saved stats in memory
        lastSavedStatsMap.set(statsKey, currentStats);

        console.log('📊 Daily activity updated (Practice):', delta);
      }
    } catch (activityError) {
      console.error('Failed to update daily activity:', activityError);
      // Don't fail the entire save if daily activity update fails
    }

    // 6. Update global streak (separate from batch, happens after commit)
    try {
      await updateGlobalStreak(uid);
      console.log('🔥 Global streak updated after practice');
    } catch (streakError) {
      console.error('Error updating global streak:', streakError);
      // Don't throw - streak update failure shouldn't break progress save
    }
  } catch (error) {
    // Simple retry logic (3 attempts)
    if (retryCount < 3) {
      await new Promise(r => setTimeout(r, 1000));
      return savePracticeProgress(uid, topicId, progress, retryCount + 1);
    }
    throw error;
  }
}

/**
 * Save Practice Progress - Lightweight Version (No Cascade)
 *
 * Saves only the progress document without triggering the expensive cascade:
 * - NO aggregateGlobalStats
 * - NO updateDailyActivity
 * - NO updateGlobalStreak
 *
 * Use this for background sync operations where the full cascade would hurt performance.
 *
 * @param uid - User ID
 * @param topicId - Topic ID (e.g., "s3-math-trigonometry")
 * @param progress - Practice progress data to save
 */
export async function savePracticeProgressLightweight(
  uid: string,
  topicId: string,
  progress: PracticeProgress
): Promise<void> {
  try {
    const progressRef = doc(firestore, `users/${uid}/practice/${topicId}`);
    const cleanedProgress = stripUndefined({
      ...progress,
      lastUpdated: serverTimestamp()
    });
    await setDoc(progressRef, cleanedProgress, { merge: true });
    console.log('📤 Background sync to Firestore (lightweight)');
  } catch (error) {
    console.error('Lightweight save failed:', error);
    throw error;
  }
}

/**
 * Load Practice Mode Progress
 *
 * Loads practice progress for a specific topic.
 *
 * @param uid - User ID
 * @param topicId - Topic ID
 * @returns Practice progress or null if not found
 */
export async function loadPracticeProgress(
  uid: string,
  topicId: string
): Promise<PracticeProgress | null> {
  const progressRef = doc(firestore, `users/${uid}/practice/${topicId}`);
  const snap = await getDoc(progressRef);

  if (!snap.exists()) {
    return null;
  }

  return snap.data() as PracticeProgress;
}

/**
 * List All Practice Topics
 *
 * Gets metadata for all practice topics a student has started.
 * Use getProgressSummary() instead for dashboard views (more efficient).
 *
 * @param uid - User ID
 * @returns Array of topic IDs
 */
export async function listPracticeTopics(uid: string): Promise<string[]> {
  const practiceRef = collection(firestore, `users/${uid}/practice`);
  const snap = await getDocs(practiceRef);

  return snap.docs.map(doc => doc.id);
}

/**
 * Convert PathProgress (localStorage format) to PracticeProgress (Firestore format)
 *
 * @param pathProgress - Practice progress from pathProgressService
 * @param topicId - Topic ID (e.g., "s3-math-trigonometry")
 * @param displayName - Display name for the topic
 * @param allNodes - All nodes in the path (for metadata)
 * @returns Firestore-compatible PracticeProgress
 */
export function pathProgressToFirestore(
  pathProgress: PathProgress,
  topicId: string,
  displayName: string,
  allNodes: PathNode[]
): PracticeProgress {
  // Convert node progress to Firestore format
  const firestoreNodes: Record<string, PracticeNodeProgress> = {};

  Object.entries(pathProgress.nodes).forEach(([nodeId, nodeProgress]) => {
    const nodeMetadata = allNodes.find(n => n.id === nodeId);

    firestoreNodes[nodeId] = {
      nodeId,
      nodeNumber: nodeMetadata?.nodeNumber || 0,
      title: nodeMetadata?.title || 'Unknown',
      layer: (nodeMetadata?.layer as any) || 'foundation',
      problemsAttempted: nodeProgress.problemsAttempted,
      problemsCorrect: nodeProgress.problemsCorrect,
      status: nodeProgress.status,
      completedAt: nodeProgress.completedAt
        ? Timestamp.fromDate(
          nodeProgress.completedAt instanceof Date
            ? nodeProgress.completedAt
            : new Date(nodeProgress.completedAt)
        )
        : undefined,
      timeSpentSeconds: 0 // Not tracked in PathProgress
    };
  });

  // Calculate layer progress
  const layerProgress = {
    foundation: { completed: 0, total: 0 },
    integration: { completed: 0, total: 0 },
    application: { completed: 0, total: 0 },
    examPractice: { completed: 0, total: 0 }
  };

  allNodes.forEach(node => {
    const layer = node.layer as 'foundation' | 'integration' | 'application' | 'examPractice';
    if (layer in layerProgress) {
      layerProgress[layer].total++;
      if (pathProgress.nodes[node.id]?.status === 'completed') {
        layerProgress[layer].completed++;
      }
    }
  });

  return {
    topicId,
    displayName,
    currentNodeId: pathProgress.currentNodeId,
    currentCycle: pathProgress.currentCycle,
    nodes: firestoreNodes,
    layerProgress,
    totalXP: pathProgress.totalXP,
    currentLevel: pathProgress.currentLevel,
    achievements: pathProgress.achievements.map(a => {
      // Convert earnedAt to Date if it's not already
      let earnedAtDate: Date;
      if (a.earnedAt instanceof Date) {
        earnedAtDate = a.earnedAt;
      } else if (typeof a.earnedAt === 'string' || typeof a.earnedAt === 'number') {
        earnedAtDate = new Date(a.earnedAt);
      } else {
        // Fallback to current date if invalid
        earnedAtDate = new Date();
      }

      return {
        ...a,
        earnedAt: Timestamp.fromDate(earnedAtDate)
      };
    }),
    sessionHistory: pathProgress.sessionHistory,
    totalProblemsAttempted: pathProgress.totalProblemsAttempted,
    totalProblemsCorrect: pathProgress.totalProblemsCorrect,
    totalTimeSpentSeconds: pathProgress.totalTimeSpentSeconds,
    pathStartedAt: Timestamp.fromDate(
      pathProgress.pathStartedAt instanceof Date
        ? pathProgress.pathStartedAt
        : new Date(pathProgress.pathStartedAt)
    ),
    lastUpdated: Timestamp.fromDate(
      pathProgress.lastUpdated instanceof Date
        ? pathProgress.lastUpdated
        : new Date(pathProgress.lastUpdated)
    ),
    createdAt: Timestamp.fromDate(
      pathProgress.pathStartedAt instanceof Date
        ? pathProgress.pathStartedAt
        : new Date(pathProgress.pathStartedAt)
    ),
    weeklyStats: pathProgress.weeklyStats
  };
}

/**
 * Record Section Mastery Event
 *
 * Call this when a student masters a section in Learn Mode.
 * Records the event for dashboard timeline.
 *
 * @param uid - User ID
 * @param topicId - Parent topic ID (e.g., "s3-math-trigonometry")
 * @param topicDisplayName - Human-readable topic name
 * @param subtopicId - Full subtopic ID
 * @param sectionNumber - Section number (1-based)
 * @param sectionName - Section display name
 */
export async function recordSectionMastery(
  uid: string,
  topicId: string,
  topicDisplayName: string,
  subtopicId: string,
  sectionNumber: number,
  sectionName: string
): Promise<void> {
  try {
    await recordMasteryEvent(uid, {
      topicId,
      topicDisplayName,
      subtopicId,
      sectionId: `section-${sectionNumber}`,
      sectionName,
      sectionNumber
    });
    console.log(`✅ Mastery event recorded: ${topicDisplayName} - ${sectionName}`);
  } catch (error) {
    console.error('Failed to record mastery event:', error);
    // Don't throw - mastery event failure shouldn't break the session
  }
}
