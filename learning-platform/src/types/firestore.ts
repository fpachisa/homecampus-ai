/**
 * Firestore Data Types - MVP Implementation
 *
 * Following the Hybrid Collection Model (Option D) from FIRESTORE_DATA_STRATEGY.md
 *
 * Collection Structure:
 * - users/{userId} (main user profile document)
 * - users/{userId}/progressSummary
 * - users/{userId}/learn/{subtopicId}
 * - users/{userId}/practice/{topicId}
 */

import { Timestamp } from 'firebase/firestore';
import type { Message, SectionProgressState, MathTool } from './types';

// ============================================
// USER PROFILE
// ============================================

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: 'student' | 'parent' | 'admin';

  // Settings
  settings: {
    ttsSpeaker: string;
    theme: 'light' | 'dark';
    audioEnabled: boolean;
  };

  // Account metadata
  createdAt: Timestamp;
  lastLoginAt: Timestamp;

  // Parent-child relationships
  children?: string[];  // Array of child UIDs (for parent accounts)
  parents?: string[];   // Array of parent UIDs (for student accounts)
}

// ============================================
// PROGRESS SUMMARY (Denormalized for Parent Dashboard)
// ============================================

export interface ProgressSummary {
  uid: string;

  // Overall stats
  totalTopicsStarted: number;
  totalTopicsCompleted: number;
  totalProblemsCorrect: number;
  totalTimeSpentSeconds: number;
  currentLevel: number;
  totalXP: number;

  // Learn mode summary (subtopic level)
  learnSubtopics: {
    [subtopicId: string]: LearnSubtopicSummary;
  };

  // Practice mode summary (topic level)
  practiceTopics: {
    [topicId: string]: PracticeTopicSummary;
  };

  // Recent activity (for dashboard)
  recentActivity: ActivityEntry[];

  lastUpdated: Timestamp;
}

export interface LearnSubtopicSummary {
  displayName: string;          // e.g., "Basic Ratios"
  topicId: string;              // Parent topic: "s3-math-trigonometry"
  grade: string;                // e.g., "Secondary 3"
  progress: number;             // 0-100% (sections completed)
  lastActive: Timestamp;
  problemsCorrect: number;
  timeSpent: number;            // seconds
  sectionsCompleted: number;
  totalSections: number;
}

export interface PracticeTopicSummary {
  displayName: string;          // e.g., "Trigonometry"
  nodesCompleted: number;
  totalNodes: number;
  totalXP: number;
  currentLevel: number;
  lastActive: Timestamp;
}

export interface ActivityEntry {
  date: string;                 // ISO date
  topicId?: string;
  category?: string;
  activityType: 'learn' | 'practice';
  problemsSolved: number;
  timeSpent: number;
}

// ============================================
// LEARN MODE CONVERSATION
// ============================================

export interface LearnConversation {
  // Subtopic identification
  subtopicId: string;           // Full subtopic ID: "s3-math-trigonometry-basic-ratios"
  topicId: string;              // Parent topic: "s3-math-trigonometry"
  categoryId: string;           // Alias for topicId (deprecated, keep for compatibility)
  grade: string;                // e.g., "Secondary 3"
  displayName: string;          // e.g., "Basic Ratios"

  // Full message history (section-scoped)
  messages: FirestoreMessage[];

  // Section progression (SOURCE OF TRUTH)
  sectionProgress: SectionProgressState;

  // Current problem state (transient)
  problemState?: {
    currentProblemId: string;
    currentProblemText: string;
    currentProblemType: number;
    hintsProvided: number;
    attempts: number;
    mathTool?: MathTool;
  };

  // Session stats
  sessionStats: {
    problemsAttempted: number;
    correctAnswers: number;
    hintsProvided: number;
    startTime: Timestamp;
    totalTimeSpent: number;     // seconds
  };

  // Student learning profile
  studentProfile: {
    strugglingWith: string[];
    preferredMethod: 'visual' | 'procedural' | 'conceptual' | null;
    confidenceLevel: number;    // 0-100
  };

  lastUpdated: Timestamp;
  createdAt: Timestamp;
}

// Firestore-compatible message (using Timestamp instead of Date)
export interface FirestoreMessage {
  id: string;
  role: 'tutor' | 'student';
  content: string;
  timestamp: Timestamp;
  sectionId?: string;

  speechContent?: {
    text: string;
    emotion?: 'encouraging' | 'celebratory' | 'supportive' | 'neutral';
    audioUrl?: string;
    duration?: number;
  };

  displayContent?: {
    text: string;
    showAfterSpeech?: boolean;
  };

  visualization?: any;
  metadata?: {
    problemType?: number;
    isCorrect?: boolean;
    conceptsCovered?: string[];
    messageType?: 'greeting' | 'problem' | 'hint' | 'solution' | 'celebration' | 'feedback';
    mathTool?: MathTool;
  };
}

// ============================================
// PRACTICE MODE PROGRESS
// ============================================

export interface PracticeProgress {
  topicId: string;              // Topic ID: "s3-math-trigonometry"
  displayName: string;          // e.g., "Trigonometry"
  currentNodeId: string | null;
  currentCycle: number;

  // Node progress
  nodes: {
    [nodeId: string]: PracticeNodeProgress;
  };

  // Layer progress
  layerProgress: {
    foundation: { completed: number; total: number };
    integration: { completed: number; total: number };
    application: { completed: number; total: number };
    examPractice: { completed: number; total: number };
  };

  // Gamification
  totalXP: number;
  currentLevel: number;
  streak: DailyStreak;
  achievements: Achievement[];
  sessionHistory: SessionHistoryEntry[];

  // Aggregate stats
  totalProblemsAttempted: number;
  totalProblemsCorrect: number;
  totalTimeSpentSeconds: number;
  pathStartedAt: Timestamp;

  lastUpdated: Timestamp;
  createdAt: Timestamp;
}

export interface PracticeNodeProgress {
  nodeId: string;
  nodeNumber: number;
  title: string;
  layer: 'foundation' | 'integration' | 'application' | 'examPractice';
  problemsAttempted: number;
  problemsCorrect: number;
  status: 'locked' | 'current' | 'completed';
  completedAt?: Timestamp;
  timeSpentSeconds: number;
}

export interface DailyStreak {
  currentStreak: number;
  longestStreak: number;
  lastActivityDate: string;     // ISO date (YYYY-MM-DD)
  streakDates: string[];         // Last 30 days
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earnedAt: Timestamp;
  xpReward: number;
}

export interface SessionHistoryEntry {
  date: string;                  // ISO date
  problemsSolved: number;
  timeSpentSeconds: number;
  xpEarned: number;
  accuracy: number;              // 0-100%
}

// ============================================
// HELPER FUNCTIONS FOR TYPE CONVERSION
// ============================================

/**
 * Convert local Message to Firestore-compatible FirestoreMessage
 */
export function messageToFirestore(message: Message): FirestoreMessage {
  return {
    ...message,
    timestamp: Timestamp.fromDate(message.timestamp)
  };
}

/**
 * Convert Firestore FirestoreMessage to local Message
 */
export function messageFromFirestore(firestoreMessage: FirestoreMessage): Message {
  return {
    ...firestoreMessage,
    timestamp: firestoreMessage.timestamp.toDate()
  };
}

/**
 * Calculate progress percentage from section state
 */
export function calculateProgress(sectionProgress: SectionProgressState, totalSections: number): number {
  if (totalSections === 0) return 0;
  return Math.round((sectionProgress.masteredSections.length / totalSections) * 100);
}
