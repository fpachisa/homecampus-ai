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
 * - users/{uid}/learn/{subtopicId}/conversation
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
  query,
  orderBy,
  getDocs
} from 'firebase/firestore';
import { firestore } from './firebase';
import type {
  LearnConversation,
  ProgressSummary,
  LearnSubtopicSummary,
  FirestoreMessage,
  messageToFirestore,
  messageFromFirestore,
  calculateProgress
} from '../types/firestore';
import type { ConversationState, SectionProgressState } from '../types/types';

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
    const convRef = doc(firestore, `users/${uid}/learn/${subtopicId}/conversation`);
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
  const convRef = doc(firestore, `users/${uid}/learn/${subtopicId}/conversation`);
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
 * @returns Firestore-compatible conversation
 */
export function conversationStateToFirestore(
  state: ConversationState,
  subtopicId: string,
  topicId: string,
  displayName: string,
  grade: string
): LearnConversation {
  // Get section progress from state or create default
  const sectionProgress: SectionProgressState = state.problemState?.sectionProgress || {
    currentSection: 'introduction',
    masteredSections: [],
    sectionHistory: []
  };

  return {
    subtopicId,
    topicId,
    categoryId: topicId, // Alias for backward compatibility
    grade,
    displayName,
    messages: state.messages.map(convertMessageToFirestore),
    sectionProgress,
    problemState: state.problemState ? {
      currentProblemId: state.problemState.currentProblemId,
      currentProblemText: state.problemState.currentProblemText,
      currentProblemType: state.problemState.problemType,
      hintsProvided: state.problemState.hintsGivenForCurrentProblem,
      attempts: state.problemState.attemptsForCurrentProblem,
      mathTool: state.problemState.originalMathTool
    } : undefined,
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
}

/**
 * Convert LearnConversation to ConversationState
 *
 * Helper function to convert Firestore data to local state.
 *
 * @param conversation - Firestore conversation
 * @returns Local conversation state
 */
export function conversationStateFromFirestore(
  conversation: LearnConversation
): ConversationState {
  return {
    messages: conversation.messages.map(convertMessageFromFirestore),
    currentProblemType: conversation.problemState?.currentProblemType || 1,
    problemState: conversation.problemState ? {
      currentProblemId: conversation.problemState.currentProblemId,
      hintsGivenForCurrentProblem: conversation.problemState.hintsProvided,
      attemptsForCurrentProblem: conversation.problemState.attempts,
      problemStartTime: new Date(),
      currentProblemText: conversation.problemState.currentProblemText,
      problemType: conversation.problemState.currentProblemType,
      originalMathTool: conversation.problemState.mathTool,
      sectionProgress: conversation.sectionProgress
    } : undefined,
    sessionStats: {
      problemsAttempted: conversation.sessionStats.problemsAttempted,
      correctAnswers: conversation.sessionStats.correctAnswers,
      hintsProvided: conversation.sessionStats.hintsProvided,
      startTime: conversation.sessionStats.startTime.toDate()
    },
    studentProfile: conversation.studentProfile
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
