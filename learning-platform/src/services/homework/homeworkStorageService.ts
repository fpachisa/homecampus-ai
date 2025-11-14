/**
 * Homework Storage Service
 *
 * Purpose: Local storage (localStorage) for homework sessions
 * - Quick access and offline-first architecture
 * - Caches active session and recent problems
 * - Enables instant session resume
 * - Auto-cleanup of old cached data
 */

import type {
  UploadedProblem,
  HomeworkSession,
  ProblemAnalysis,
  GradeAppropriatenessCheck
} from '../../types/homework';

const STORAGE_PREFIX = 'ai-campus-homework-';
const MAX_CACHED_PROBLEMS = 5; // Keep last 5 problems in cache

export interface CachedProblem {
  extractedText: string;
  analysis: ProblemAnalysis;
  gradeCheck: GradeAppropriatenessCheck;
  uploadedAt: string;
}

export interface HomeworkLocalStorage {
  currentProblemId: string | null;
  currentSessionId: string | null;
  recentProblems: Record<string, CachedProblem>;
  activeSession: HomeworkSession | null;
  lastSyncedAt: string;
}

class HomeworkStorageService {
  /**
   * Get storage key for a specific user
   */
  private getStorageKey(userId: string): string {
    return `${STORAGE_PREFIX}${userId}`;
  }

  /**
   * Initialize storage for a user (if not exists)
   */
  private initializeStorage(): HomeworkLocalStorage {
    return {
      currentProblemId: null,
      currentSessionId: null,
      recentProblems: {},
      activeSession: null,
      lastSyncedAt: new Date().toISOString()
    };
  }

  /**
   * Get all homework data for a user
   */
  private getData(userId: string): HomeworkLocalStorage {
    try {
      const stored = localStorage.getItem(this.getStorageKey(userId));
      if (!stored) {
        return this.initializeStorage();
      }

      const data: HomeworkLocalStorage = JSON.parse(stored);

      // Validate structure
      if (!data || typeof data !== 'object') {
        return this.initializeStorage();
      }

      return {
        ...this.initializeStorage(),
        ...data
      };
    } catch (error) {
      console.warn('Failed to load homework data from localStorage:', error);
      return this.initializeStorage();
    }
  }

  /**
   * Save all homework data for a user
   */
  private saveData(userId: string, data: HomeworkLocalStorage): boolean {
    try {
      localStorage.setItem(this.getStorageKey(userId), JSON.stringify(data));
      return true;
    } catch (error) {
      if (error instanceof Error && error.name === 'QuotaExceededError') {
        console.error('localStorage quota exceeded. Attempting cleanup...');
        this.cleanupOldProblems(userId, 2); // Keep only 2 problems

        // Try again
        try {
          localStorage.setItem(this.getStorageKey(userId), JSON.stringify(data));
          return true;
        } catch (retryError) {
          console.error('Failed to save even after cleanup:', retryError);
          return false;
        }
      }

      console.warn('Failed to save homework data to localStorage:', error);
      return false;
    }
  }

  /**
   * Save active problem (no image data - too large)
   */
  saveActiveProblem(
    userId: string,
    problem: UploadedProblem
  ): boolean {
    const data = this.getData(userId);

    // Update current problem ID
    data.currentProblemId = problem.id;

    // Cache problem metadata (excluding image data)
    if (problem.analysis && problem.gradeCheck) {
      data.recentProblems[problem.id] = {
        extractedText: problem.analysis.extractedText,
        analysis: problem.analysis,
        gradeCheck: problem.gradeCheck,
        uploadedAt: problem.uploadedAt
      };
    }

    // Auto-cleanup: keep only last N problems
    this.cleanupOldProblemsInData(data, MAX_CACHED_PROBLEMS);

    data.lastSyncedAt = new Date().toISOString();
    return this.saveData(userId, data);
  }

  /**
   * Save active session
   */
  saveActiveSession(
    userId: string,
    session: HomeworkSession
  ): boolean {
    const data = this.getData(userId);

    data.currentSessionId = session.sessionId;
    data.activeSession = session;
    data.lastSyncedAt = new Date().toISOString();

    return this.saveData(userId, data);
  }

  /**
   * Get active session
   */
  getActiveSession(userId: string): HomeworkSession | null {
    const data = this.getData(userId);
    return data.activeSession;
  }

  /**
   * Get active problem metadata
   */
  getActiveProblem(userId: string): CachedProblem | null {
    const data = this.getData(userId);

    if (!data.currentProblemId) {
      return null;
    }

    return data.recentProblems[data.currentProblemId] || null;
  }

  /**
   * Get both active problem and session (for resume)
   */
  getActiveHomework(userId: string): {
    problem: CachedProblem | null;
    session: HomeworkSession | null;
  } {
    const data = this.getData(userId);

    const problem = data.currentProblemId
      ? data.recentProblems[data.currentProblemId] || null
      : null;

    return {
      problem,
      session: data.activeSession
    };
  }

  /**
   * Check if there's an active session that can be resumed
   */
  hasActiveSession(userId: string): boolean {
    const data = this.getData(userId);
    return data.activeSession !== null &&
           data.activeSession.status === 'active';
  }

  /**
   * Clear active session (after completion or abandonment)
   */
  clearActiveSession(userId: string): boolean {
    const data = this.getData(userId);

    data.currentSessionId = null;
    data.activeSession = null;
    data.lastSyncedAt = new Date().toISOString();

    return this.saveData(userId, data);
  }

  /**
   * Clear specific problem from cache
   */
  clearProblem(userId: string, problemId: string): boolean {
    const data = this.getData(userId);

    delete data.recentProblems[problemId];

    if (data.currentProblemId === problemId) {
      data.currentProblemId = null;
    }

    data.lastSyncedAt = new Date().toISOString();
    return this.saveData(userId, data);
  }

  /**
   * Clear all homework data for a user
   */
  clearAll(userId: string): boolean {
    try {
      localStorage.removeItem(this.getStorageKey(userId));
      return true;
    } catch (error) {
      console.warn('Failed to clear homework data:', error);
      return false;
    }
  }

  /**
   * Auto-cleanup: remove oldest problems to keep only N most recent
   */
  private cleanupOldProblemsInData(
    data: HomeworkLocalStorage,
    maxToKeep: number
  ): void {
    const problems = Object.entries(data.recentProblems);

    if (problems.length <= maxToKeep) {
      return;
    }

    // Sort by upload time (oldest first)
    problems.sort((a, b) => {
      const timeA = new Date(a[1].uploadedAt).getTime();
      const timeB = new Date(b[1].uploadedAt).getTime();
      return timeA - timeB;
    });

    // Remove oldest problems
    const toRemove = problems.length - maxToKeep;
    for (let i = 0; i < toRemove; i++) {
      const [problemId] = problems[i];
      delete data.recentProblems[problemId];
    }
  }

  /**
   * Cleanup old problems (public method)
   */
  cleanupOldProblems(userId: string, maxToKeep: number = MAX_CACHED_PROBLEMS): boolean {
    const data = this.getData(userId);
    this.cleanupOldProblemsInData(data, maxToKeep);
    return this.saveData(userId, data);
  }

  /**
   * Get recent problems list (for quick access)
   */
  getRecentProblems(userId: string): Array<CachedProblem & { id: string }> {
    const data = this.getData(userId);

    return Object.entries(data.recentProblems)
      .map(([id, problem]) => ({ id, ...problem }))
      .sort((a, b) => {
        // Sort by upload time (most recent first)
        const timeA = new Date(a.uploadedAt).getTime();
        const timeB = new Date(b.uploadedAt).getTime();
        return timeB - timeA;
      });
  }

  /**
   * Get last sync timestamp
   */
  getLastSyncedAt(userId: string): string | null {
    const data = this.getData(userId);
    return data.lastSyncedAt;
  }

  /**
   * Update last sync timestamp (after successful Firestore sync)
   */
  updateSyncTimestamp(userId: string): boolean {
    const data = this.getData(userId);
    data.lastSyncedAt = new Date().toISOString();
    return this.saveData(userId, data);
  }

  /**
   * Get storage size estimate (for debugging)
   */
  getStorageSize(userId: string): number {
    try {
      const stored = localStorage.getItem(this.getStorageKey(userId));
      return stored ? stored.length : 0;
    } catch {
      return 0;
    }
  }

  /**
   * Check if storage is available
   */
  isAvailable(): boolean {
    try {
      const test = '__homework_storage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch {
      return false;
    }
  }
}

export const homeworkStorageService = new HomeworkStorageService();
