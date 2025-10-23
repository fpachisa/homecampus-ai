/**
 * Progress Snapshot Types
 * Defines the structure for persisting user progress across sessions
 */

import type { Message, ProblemState } from './types';
import type { PracticePathState } from './practice';

/**
 * Conversation state snapshot for Socratic learning mode
 */
export interface ConversationSnapshot {
  topicId: string;
  categoryId: string; // e.g., 's3-math-trigonometry'
  messages: Message[];
  problemState?: ProblemState;
  sessionStats: {
    problemsAttempted: number;
    correctAnswers: number;
    hintsProvided: number;
    startTime: string; // ISO string
  };
  studentProfile: {
    strugglingWith: string[];
    preferredMethod: 'visual' | 'procedural' | 'conceptual' | null;
    confidenceLevel: number;
  };
  lastUpdated: string; // ISO string
}

/**
 * Complete progress snapshot for a user session
 */
export interface ProgressSnapshot {
  uid: string; // User ID (or 'guest' for unauthenticated)
  timestamp: string; // ISO string

  // Socratic learning state (current active conversation)
  conversationState?: ConversationSnapshot;

  // Practice mode state (all categories)
  practiceState?: {
    [category: string]: PracticePathState;
  };

  // User preferences
  settings?: {
    ttsSpeaker: string;
    theme: 'light' | 'dark';
    audioEnabled: boolean;
  };
}

/**
 * Metadata about saved progress (for displaying resume prompts)
 */
export interface ProgressMetadata {
  uid: string;
  lastSaved: string; // ISO string
  lastTopic?: string; // Human-readable topic name
  lastProblem?: string; // Last problem text (truncated)
  totalProblemsCompleted: number;
  dataSize: number; // bytes
}
