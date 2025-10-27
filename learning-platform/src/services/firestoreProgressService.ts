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
    batch.set(convRef, {
      ...conversation,
      lastUpdated: serverTimestamp()
    });

    // 2. Update progress summary for parent dashboard
    const summaryRef = doc(firestore, `users/${uid}/progressSummary`);

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

    batch.set(summaryRef, summaryUpdate, { merge: true });

    await batch.commit();
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
  const summaryRef = doc(firestore, `users/${uid}/progressSummary`);
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
        startTime: conversation.sessionStats.startTime.toDate()
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
  const summaryRef = doc(firestore, `users/${uid}/progressSummary`);

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
    batch.set(progressRef, {
      ...progress,
      lastUpdated: serverTimestamp()
    });

    // 2. Update progress summary for parent dashboard
    const summaryRef = doc(firestore, `users/${uid}/progressSummary`);

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

    batch.set(summaryRef, summaryUpdate, { merge: true });

    await batch.commit();
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
      completedAt: nodeProgress.completedAt ? Timestamp.fromDate(nodeProgress.completedAt) : undefined,
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
    totalXP: 0, // Not tracked in PathProgress
    currentLevel: 1, // Not tracked in PathProgress
    streak: {
      currentStreak: 0,
      longestStreak: 0,
      lastActivityDate: new Date().toISOString().split('T')[0],
      streakDates: []
    },
    achievements: [],
    sessionHistory: [],
    totalProblemsAttempted: pathProgress.totalProblemsAttempted,
    totalProblemsCorrect: pathProgress.totalProblemsCorrect,
    totalTimeSpentSeconds: 0, // Not tracked in PathProgress
    pathStartedAt: Timestamp.fromDate(pathProgress.pathStartedAt),
    lastUpdated: Timestamp.fromDate(pathProgress.lastUpdated),
    createdAt: Timestamp.fromDate(pathProgress.pathStartedAt)
  };
}
