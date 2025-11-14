/**
 * useHomeworkAutoSave Hook
 *
 * React hook that provides autosave functionality for homework sessions
 * - Automatic saves with debouncing
 * - Save status tracking
 * - Error handling
 * - Easy integration with components
 */

import { useEffect, useState, useCallback, useRef } from 'react';
import {
  homeworkAutoSaveManager,
  type SaveStatus,
  type SaveEvent
} from '../services/homework/homeworkAutoSaveManager';
import { homeworkStorageService } from '../services/homework/homeworkStorageService';
import type { UploadedProblem, HomeworkSession } from '../types/homework';

export interface UseHomeworkAutoSaveReturn {
  // Save methods
  saveProblem: (problem: UploadedProblem) => Promise<boolean>;
  saveSession: (session: HomeworkSession, immediate?: boolean) => Promise<void>;
  completeSession: (session: HomeworkSession, finalOutcome: HomeworkSession['finalOutcome']) => Promise<boolean>;

  // Resume
  checkForActiveSession: (userId: string) => {
    hasSaved: boolean;
    problem: any | null;
    session: HomeworkSession | null;
  };
  clearActiveSession: (userId: string) => boolean;

  // Status
  saveStatus: SaveStatus;
  lastSaved: Date | null;
  isDegraded: boolean;
  errorMessage: string | null;

  // Manual control
  retryFailedSaves: () => Promise<void>;
}

export function useHomeworkAutoSave(): UseHomeworkAutoSaveReturn {
  const [saveStatus, setSaveStatus] = useState<SaveStatus>('idle');
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isDegraded, setIsDegraded] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const unsubscribeRef = useRef<(() => void) | null>(null);

  // Subscribe to save events
  useEffect(() => {
    const handleSaveEvent = (event: SaveEvent) => {
      setSaveStatus(event.status);

      if (event.status === 'saved' || event.status === 'degraded') {
        setLastSaved(event.timestamp);
      }

      if (event.status === 'degraded') {
        setIsDegraded(true);
        setErrorMessage('Saved locally only. Will sync when connection is restored.');
      } else if (event.status === 'saved') {
        setIsDegraded(false);
        setErrorMessage(null);
      } else if (event.status === 'error') {
        setErrorMessage(event.message || 'Failed to save');
      }
    };

    unsubscribeRef.current = homeworkAutoSaveManager.addEventListener(handleSaveEvent);

    // Cleanup
    return () => {
      if (unsubscribeRef.current) {
        unsubscribeRef.current();
      }
    };
  }, []);

  // Flush pending saves on unmount
  useEffect(() => {
    return () => {
      homeworkAutoSaveManager.flushAll();
    };
  }, []);

  // Save problem
  const saveProblem = useCallback(async (problem: UploadedProblem): Promise<boolean> => {
    try {
      return await homeworkAutoSaveManager.saveProblem(problem);
    } catch (error) {
      console.error('Error in saveProblem:', error);
      setErrorMessage('Failed to save problem');
      return false;
    }
  }, []);

  // Save session
  const saveSession = useCallback(async (
    session: HomeworkSession,
    immediate: boolean = false
  ): Promise<void> => {
    try {
      await homeworkAutoSaveManager.saveSession(session, { immediate });
    } catch (error) {
      console.error('Error in saveSession:', error);
      setErrorMessage('Failed to save session');
    }
  }, []);

  // Complete session
  const completeSession = useCallback(async (
    session: HomeworkSession,
    finalOutcome: HomeworkSession['finalOutcome']
  ): Promise<boolean> => {
    try {
      return await homeworkAutoSaveManager.completeSession(session, finalOutcome);
    } catch (error) {
      console.error('Error in completeSession:', error);
      setErrorMessage('Failed to complete session');
      return false;
    }
  }, []);

  // Check for active session (for resume)
  const checkForActiveSession = useCallback((userId: string) => {
    const { problem, session } = homeworkStorageService.getActiveHomework(userId);

    return {
      hasSaved: session !== null,
      problem,
      session
    };
  }, []);

  // Clear active session
  const clearActiveSession = useCallback((userId: string): boolean => {
    return homeworkStorageService.clearActiveSession(userId);
  }, []);

  // Retry failed saves
  const retryFailedSaves = useCallback(async (): Promise<void> => {
    try {
      await homeworkAutoSaveManager.retryFailedSaves();
      setErrorMessage(null);
    } catch (error) {
      console.error('Error in retryFailedSaves:', error);
      setErrorMessage('Failed to retry saves');
    }
  }, []);

  return {
    // Save methods
    saveProblem,
    saveSession,
    completeSession,

    // Resume
    checkForActiveSession,
    clearActiveSession,

    // Status
    saveStatus,
    lastSaved,
    isDegraded,
    errorMessage,

    // Manual control
    retryFailedSaves
  };
}

/**
 * Hook for getting relative time string (e.g., "2 minutes ago")
 */
export function useRelativeTime(date: Date | null): string {
  const [relativeTime, setRelativeTime] = useState('');

  useEffect(() => {
    if (!date) {
      setRelativeTime('');
      return;
    }

    const updateRelativeTime = () => {
      const now = new Date();
      const diffMs = now.getTime() - date.getTime();
      const diffSeconds = Math.floor(diffMs / 1000);
      const diffMinutes = Math.floor(diffSeconds / 60);
      const diffHours = Math.floor(diffMinutes / 60);

      if (diffSeconds < 10) {
        setRelativeTime('just now');
      } else if (diffSeconds < 60) {
        setRelativeTime(`${diffSeconds} seconds ago`);
      } else if (diffMinutes < 60) {
        setRelativeTime(`${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`);
      } else {
        setRelativeTime(`${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`);
      }
    };

    updateRelativeTime();

    // Update every 10 seconds
    const interval = setInterval(updateRelativeTime, 10000);

    return () => clearInterval(interval);
  }, [date]);

  return relativeTime;
}
