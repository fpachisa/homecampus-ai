import type { ConversationState, Message, ProblemState, SectionProgressState } from '../types/types';

export interface SessionData {
  topicId: string;
  messages: Message[]; // Full message history (no limit for WhatsApp-style persistence)
  currentScore: number;
  problemsCompleted: number;
  currentProblemType: number;
  problemState?: ProblemState;
  timestamp: number;
  subtopicComplete: boolean;
  sectionProgress?: SectionProgressState; // NEW: Section progression tracking
}

export interface SessionPreview {
  topicId: string;
  lastMessage: string;
  timestamp: number;
  problemsCompleted: number;
  messageCount: number;
}

const SESSION_STORAGE_PREFIX = 'ai-campus-session-';

/**
 * Session Storage Service
 *
 * Purpose: Stores conversation data (messages, current problem state) for learning sessions
 * Lifespan: PERMANENT - Chat history persists forever for student/parent review
 * Firebase Ready: This will map to conversations collection in Firebase
 *
 * Note: sectionProgress is a snapshot only. The source of truth is progressService.
 */
class SessionStorageService {
  /**
   * Get storage key for a specific topic
   */
  private getStorageKey(topicId: string): string {
    return `${SESSION_STORAGE_PREFIX}${topicId}`;
  }

  /**
   * Save current session state to localStorage (topic-specific)
   */
  saveSession(
    topicId: string,
    conversationState: ConversationState,
    currentScore: number,
    problemsCompleted: number,
    subtopicComplete: boolean,
    problemState?: ProblemState,
    sectionProgress?: SectionProgressState
  ): void {
    try {
      const sessionData: SessionData = {
        topicId,
        messages: conversationState.messages, // Store all messages for full chat history
        currentScore,
        problemsCompleted,
        currentProblemType: conversationState.currentProblemType,
        problemState,
        timestamp: Date.now(),
        subtopicComplete,
        sectionProgress
      };

      localStorage.setItem(this.getStorageKey(topicId), JSON.stringify(sessionData));
    } catch (error) {
      console.warn('Failed to save session to localStorage:', error);
    }
  }

  /**
   * Load session state from localStorage for a specific topic
   * Sessions are PERMANENT - no expiry (for student/parent review)
   */
  loadSession(topicId: string): SessionData | null {
    try {
      const stored = localStorage.getItem(this.getStorageKey(topicId));
      if (!stored) return null;

      const sessionData: SessionData = JSON.parse(stored);

      // Validate required fields
      if (!sessionData.topicId || !Array.isArray(sessionData.messages)) {
        this.clearSession(topicId);
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
      this.clearSession(topicId);
      return null;
    }
  }

  /**
   * Check if there's a valid saved session for a specific topic
   */
  hasSavedSession(topicId: string): boolean {
    return this.loadSession(topicId) !== null;
  }

  /**
   * Get all saved sessions (for WhatsApp-style list)
   */
  getAllSessions(): SessionData[] {
    try {
      const sessions: SessionData[] = [];

      // Iterate through all localStorage keys
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(SESSION_STORAGE_PREFIX)) {
          const topicId = key.replace(SESSION_STORAGE_PREFIX, '');
          const session = this.loadSession(topicId);
          if (session) {
            sessions.push(session);
          }
        }
      }

      // Sort by timestamp (most recent first)
      return sessions.sort((a, b) => b.timestamp - a.timestamp);
    } catch (error) {
      console.warn('Failed to get all sessions:', error);
      return [];
    }
  }

  /**
   * Get session preview for WhatsApp-style display
   */
  getSessionPreview(topicId: string): SessionPreview | null {
    try {
      const session = this.loadSession(topicId);
      if (!session) return null;

      // Get last tutor message for preview
      const lastTutorMessage = [...session.messages]
        .reverse()
        .find(msg => msg.role === 'tutor');

      return {
        topicId: session.topicId,
        lastMessage: lastTutorMessage?.content || 'No messages yet',
        timestamp: session.timestamp,
        problemsCompleted: session.problemsCompleted,
        messageCount: session.messages.length
      };
    } catch (error) {
      console.warn('Failed to get session preview:', error);
      return null;
    }
  }

  /**
   * Clear saved session for a specific topic
   */
  clearSession(topicId: string): void {
    try {
      localStorage.removeItem(this.getStorageKey(topicId));
    } catch (error) {
      console.warn('Failed to clear session:', error);
    }
  }

  /**
   * Clear all sessions
   */
  clearAllSessions(): void {
    try {
      const keysToRemove: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(SESSION_STORAGE_PREFIX)) {
          keysToRemove.push(key);
        }
      }
      keysToRemove.forEach(key => localStorage.removeItem(key));
    } catch (error) {
      console.warn('Failed to clear all sessions:', error);
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