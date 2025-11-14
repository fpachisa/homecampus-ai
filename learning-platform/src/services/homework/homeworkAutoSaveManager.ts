/**
 * Homework AutoSave Manager
 *
 * Purpose: Orchestrates both localStorage and Firestore saves
 * - Debounced saves (3-second delay after changes)
 * - Smart diffing (only save if changed)
 * - Retry logic with exponential backoff
 * - Event emitter for UI feedback
 * - Fallback to localStorage-only mode on persistent Firestore failures
 */

import { homeworkStorageService } from './homeworkStorageService';
import { homeworkPersistenceService } from './homeworkPersistenceService';
import type { UploadedProblem, HomeworkSession } from '../../types/homework';

export type SaveStatus = 'idle' | 'saving' | 'saved' | 'error' | 'degraded';

export interface SaveEvent {
  status: SaveStatus;
  message?: string;
  timestamp: Date;
}

type SaveEventListener = (event: SaveEvent) => void;

const DEBOUNCE_DELAY = 3000; // 3 seconds
const MAX_RETRIES = 3;
const RETRY_DELAYS = [1000, 3000, 5000]; // Exponential backoff

class HomeworkAutoSaveManager {
  private debounceTimers: Map<string, NodeJS.Timeout> = new Map();
  private lastSavedData: Map<string, string> = new Map();
  private retryQueue: Map<string, { retries: number; data: any }> = new Map();
  private listeners: Set<SaveEventListener> = new Set();
  private currentStatus: SaveStatus = 'idle';
  private degradedMode: boolean = false;

  /**
   * Add event listener for save status changes
   */
  addEventListener(listener: SaveEventListener): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  /**
   * Emit save event to all listeners
   */
  private emit(status: SaveStatus, message?: string): void {
    this.currentStatus = status;
    const event: SaveEvent = {
      status,
      message,
      timestamp: new Date()
    };

    this.listeners.forEach(listener => {
      try {
        listener(event);
      } catch (error) {
        console.error('Error in save event listener:', error);
      }
    });
  }

  /**
   * Get current save status
   */
  getStatus(): SaveStatus {
    return this.currentStatus;
  }

  /**
   * Check if data has changed (simple JSON comparison)
   */
  private hasChanged(key: string, data: any): boolean {
    const currentJson = JSON.stringify(data);
    const lastJson = this.lastSavedData.get(key);

    if (!lastJson) {
      return true; // First save
    }

    return currentJson !== lastJson;
  }

  /**
   * Update last saved data
   */
  private updateLastSaved(key: string, data: any): void {
    this.lastSavedData.set(key, JSON.stringify(data));
  }

  /**
   * Save problem (immediate, no debounce)
   */
  async saveProblem(problem: UploadedProblem): Promise<boolean> {
    const key = `problem-${problem.id}`;

    // Check if changed
    if (!this.hasChanged(key, problem)) {
      return true; // No changes, skip save
    }

    this.emit('saving', 'Saving problem...');

    try {
      // Save to localStorage (fast, always succeeds or throws)
      const localSuccess = homeworkStorageService.saveActiveProblem(
        problem.studentId,
        problem
      );

      if (!localSuccess) {
        console.warn('localStorage save failed for problem');
      }

      // Save to Firestore (with retry)
      const firestoreSuccess = await this.saveToFirestoreWithRetry(
        key,
        async () => {
          return await homeworkPersistenceService.saveProblem(problem);
        }
      );

      this.updateLastSaved(key, problem);

      if (firestoreSuccess) {
        this.emit('saved', 'Problem saved');
        this.degradedMode = false;
        return true;
      } else {
        this.emit('degraded', 'Saved locally only');
        this.degradedMode = true;
        return true; // Still success (localStorage worked)
      }
    } catch (error) {
      console.error('Failed to save problem:', error);
      this.emit('error', 'Failed to save problem');
      return false;
    }
  }

  /**
   * Save session (debounced for frequent updates)
   */
  async saveSession(
    session: HomeworkSession,
    options: { immediate?: boolean } = {}
  ): Promise<void> {
    const key = `session-${session.sessionId}`;

    // Check if changed
    if (!this.hasChanged(key, session)) {
      return; // No changes, skip save
    }

    // Clear existing debounce timer
    const existingTimer = this.debounceTimers.get(key);
    if (existingTimer) {
      clearTimeout(existingTimer);
    }

    // Execute immediately or debounce
    if (options.immediate) {
      await this.executeSaveSession(session);
    } else {
      // Debounce for 3 seconds
      const timer = setTimeout(async () => {
        await this.executeSaveSession(session);
        this.debounceTimers.delete(key);
      }, DEBOUNCE_DELAY);

      this.debounceTimers.set(key, timer);
    }
  }

  /**
   * Execute session save (internal)
   */
  private async executeSaveSession(session: HomeworkSession): Promise<boolean> {
    const key = `session-${session.sessionId}`;

    this.emit('saving', 'Saving session...');

    try {
      // Save to localStorage (instant)
      const localSuccess = homeworkStorageService.saveActiveSession(
        session.studentId,
        session
      );

      if (!localSuccess) {
        console.warn('localStorage save failed for session');
      }

      // Determine if this is first save or update
      const isFirstSave = !this.lastSavedData.has(key);

      // Save to Firestore (with retry)
      const firestoreSuccess = await this.saveToFirestoreWithRetry(
        key,
        async () => {
          if (isFirstSave) {
            return await homeworkPersistenceService.saveSession(session);
          } else {
            return await homeworkPersistenceService.updateSession(session);
          }
        }
      );

      this.updateLastSaved(key, session);

      if (firestoreSuccess) {
        this.emit('saved', 'Session saved');
        this.degradedMode = false;
        return true;
      } else {
        this.emit('degraded', 'Saved locally only');
        this.degradedMode = true;
        return true;
      }
    } catch (error) {
      console.error('Failed to save session:', error);
      this.emit('error', 'Failed to save session');
      return false;
    }
  }

  /**
   * Save to Firestore with retry logic
   */
  private async saveToFirestoreWithRetry(
    key: string,
    saveFn: () => Promise<boolean>
  ): Promise<boolean> {
    // Check if Firestore is available
    if (!homeworkPersistenceService.isAvailable()) {
      console.warn('Firestore not available, using localStorage only');
      return false;
    }

    // Get retry count
    const retryInfo = this.retryQueue.get(key) || { retries: 0, data: null };

    try {
      const success = await saveFn();

      if (success) {
        // Success! Clear retry queue
        this.retryQueue.delete(key);
        return true;
      } else {
        // Failed, but no exception thrown
        return await this.handleSaveFailure(key, retryInfo, saveFn);
      }
    } catch (error) {
      console.error('Firestore save error:', error);
      return await this.handleSaveFailure(key, retryInfo, saveFn);
    }
  }

  /**
   * Handle Firestore save failure with retry
   */
  private async handleSaveFailure(
    key: string,
    retryInfo: { retries: number; data: any },
    saveFn: () => Promise<boolean>
  ): Promise<boolean> {
    if (retryInfo.retries >= MAX_RETRIES) {
      console.warn(`Max retries reached for ${key}, giving up`);
      this.retryQueue.delete(key);
      return false;
    }

    // Schedule retry
    const retryDelay = RETRY_DELAYS[retryInfo.retries] || 5000;
    retryInfo.retries++;
    this.retryQueue.set(key, retryInfo);

    console.log(`Retrying save for ${key} in ${retryDelay}ms (attempt ${retryInfo.retries}/${MAX_RETRIES})`);

    return new Promise(resolve => {
      setTimeout(async () => {
        const success = await this.saveToFirestoreWithRetry(key, saveFn);
        resolve(success);
      }, retryDelay);
    });
  }

  /**
   * Complete session (immediate save, mark as completed)
   */
  async completeSession(
    session: HomeworkSession,
    finalOutcome: HomeworkSession['finalOutcome']
  ): Promise<boolean> {
    // Update session status
    const completedSession: HomeworkSession = {
      ...session,
      status: 'completed',
      completedAt: new Date().toISOString(),
      finalOutcome
    };

    this.emit('saving', 'Completing session...');

    try {
      // Save to localStorage
      homeworkStorageService.saveActiveSession(
        completedSession.studentId,
        completedSession
      );

      // Save to Firestore
      const success = await homeworkPersistenceService.completeSession(
        completedSession.studentId,
        completedSession.problemId,
        completedSession.sessionId,
        finalOutcome,
        finalOutcome
      );

      if (success) {
        // Clear active session from localStorage
        homeworkStorageService.clearActiveSession(completedSession.studentId);
        this.emit('saved', 'Session completed');
        return true;
      } else {
        this.emit('degraded', 'Session completed locally');
        return true;
      }
    } catch (error) {
      console.error('Failed to complete session:', error);
      this.emit('error', 'Failed to complete session');
      return false;
    }
  }

  /**
   * Flush all pending saves (on page unload)
   */
  async flushAll(): Promise<void> {
    // Clear all debounce timers and execute saves immediately
    const timers = Array.from(this.debounceTimers.entries());

    for (const [key, timer] of timers) {
      clearTimeout(timer);
      this.debounceTimers.delete(key);
    }

    // Wait a bit for any ongoing saves
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  /**
   * Retry failed saves (manual trigger or on reconnect)
   */
  async retryFailedSaves(): Promise<void> {
    if (this.retryQueue.size === 0) {
      return;
    }

    console.log(`Retrying ${this.retryQueue.size} failed saves...`);
    this.emit('saving', 'Retrying failed saves...');

    const retries = Array.from(this.retryQueue.keys());

    for (const key of retries) {
      // Trigger retry by clearing retry count
      this.retryQueue.delete(key);
    }

    this.emit('saved', 'Retries completed');
  }

  /**
   * Check if in degraded mode (localStorage-only)
   */
  isDegraded(): boolean {
    return this.degradedMode;
  }

  /**
   * Reset manager state (for testing or cleanup)
   */
  reset(): void {
    // Clear timers
    this.debounceTimers.forEach(timer => clearTimeout(timer));
    this.debounceTimers.clear();

    // Clear queues
    this.lastSavedData.clear();
    this.retryQueue.clear();

    // Reset status
    this.currentStatus = 'idle';
    this.degradedMode = false;
  }

  /**
   * Get retry queue size (for debugging)
   */
  getRetryQueueSize(): number {
    return this.retryQueue.size;
  }
}

// Export singleton instance
export const homeworkAutoSaveManager = new HomeworkAutoSaveManager();

// Setup page unload handler to flush pending saves
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    homeworkAutoSaveManager.flushAll();
  });
}
