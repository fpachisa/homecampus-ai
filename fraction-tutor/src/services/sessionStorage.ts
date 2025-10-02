import type { ConversationState, Message, ProblemState } from '../types/types';

export interface SessionData {
  topicId: string;
  messages: Message[]; // Last 10 messages for context
  currentScore: number;
  problemsCompleted: number;
  currentProblemType: number;
  problemState?: ProblemState;
  timestamp: number;
  subtopicComplete: boolean;
}

const SESSION_STORAGE_KEY = 'fraction-tutor-session';
const MAX_MESSAGES_TO_STORE = 10;
const SESSION_EXPIRY_HOURS = 24;

class SessionStorageService {
  /**
   * Save current session state to localStorage
   */
  saveSession(
    topicId: string,
    conversationState: ConversationState,
    currentScore: number,
    problemsCompleted: number,
    subtopicComplete: boolean,
    problemState?: ProblemState
  ): void {
    try {
      const sessionData: SessionData = {
        topicId,
        // Only store the last N messages to keep localStorage size manageable
        messages: conversationState.messages.slice(-MAX_MESSAGES_TO_STORE),
        currentScore,
        problemsCompleted,
        currentProblemType: conversationState.currentProblemType,
        problemState,
        timestamp: Date.now(),
        subtopicComplete
      };

      localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionData));
    } catch (error) {
      console.warn('Failed to save session to localStorage:', error);
    }
  }

  /**
   * Load session state from localStorage
   */
  loadSession(): SessionData | null {
    try {
      const stored = localStorage.getItem(SESSION_STORAGE_KEY);
      if (!stored) return null;

      const sessionData: SessionData = JSON.parse(stored);

      // Check if session has expired
      const hoursElapsed = (Date.now() - sessionData.timestamp) / (1000 * 60 * 60);
      if (hoursElapsed > SESSION_EXPIRY_HOURS) {
        this.clearSession();
        return null;
      }

      // Validate required fields
      if (!sessionData.topicId || !Array.isArray(sessionData.messages)) {
        this.clearSession();
        return null;
      }

      // Convert timestamp strings back to Date objects
      sessionData.messages = sessionData.messages.map(msg => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      }));

      if (sessionData.problemState) {
        sessionData.problemState.problemStartTime = new Date(sessionData.problemState.problemStartTime);
      }

      return sessionData;
    } catch (error) {
      console.warn('Failed to load session from localStorage:', error);
      this.clearSession();
      return null;
    }
  }

  /**
   * Check if there's a valid saved session
   */
  hasSavedSession(): boolean {
    return this.loadSession() !== null;
  }

  /**
   * Get basic info about saved session without loading full data
   */
  getSessionInfo(): { topicId: string; timestamp: number; problemsCompleted: number } | null {
    try {
      const stored = localStorage.getItem(SESSION_STORAGE_KEY);
      if (!stored) return null;

      const sessionData = JSON.parse(stored);
      const hoursElapsed = (Date.now() - sessionData.timestamp) / (1000 * 60 * 60);

      if (hoursElapsed > SESSION_EXPIRY_HOURS) {
        this.clearSession();
        return null;
      }

      return {
        topicId: sessionData.topicId,
        timestamp: sessionData.timestamp,
        problemsCompleted: sessionData.problemsCompleted || 0
      };
    } catch (error) {
      console.warn('Failed to get session info:', error);
      return null;
    }
  }

  /**
   * Clear saved session
   */
  clearSession(): void {
    try {
      localStorage.removeItem(SESSION_STORAGE_KEY);
    } catch (error) {
      console.warn('Failed to clear session:', error);
    }
  }

  /**
   * Get human-readable time elapsed since session
   */
  getTimeElapsedString(timestamp: number): string {
    const elapsed = Date.now() - timestamp;
    const minutes = Math.floor(elapsed / (1000 * 60));
    const hours = Math.floor(minutes / 60);

    if (hours > 0) {
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else {
      return 'Just now';
    }
  }
}

export const sessionStorage = new SessionStorageService();