/**
 * useFirestoreProgress Hook
 *
 * React hook for easy Firestore integration in Learn components.
 * Handles loading, saving, and syncing progress automatically.
 *
 * Usage:
 * ```typescript
 * const { loading, error, saveProgress, loadProgress } = useFirestoreProgress(
 *   userId,
 *   subtopicId,
 *   conversationState
 * );
 * ```
 */

import { useState, useEffect, useCallback } from 'react';
import {
  saveLearnProgress,
  loadLearnProgress,
  conversationStateToFirestore,
  conversationStateFromFirestore
} from '../services/firestoreProgressService';
import type { ConversationState } from '../types/types';
import type { LearnConversation } from '../types/firestore';

export interface UseFirestoreProgressOptions {
  subtopicId: string;
  topicId: string;
  displayName: string;
  grade: string;
  autoSave?: boolean;           // Auto-save after each message (default: true)
  autoLoad?: boolean;           // Auto-load on mount (default: true)
  saveDebounceMs?: number;      // Debounce saves (default: 2000ms)
}

export interface UseFirestoreProgressReturn {
  loading: boolean;
  error: Error | null;
  saveProgress: (state: ConversationState) => Promise<void>;
  loadProgress: () => Promise<ConversationState | null>;
  lastSaved: Date | null;
  isSaving: boolean;
}

/**
 * Hook for managing Firestore progress for Learn Mode
 */
export function useFirestoreProgress(
  userId: string | null | undefined,
  options: UseFirestoreProgressOptions
): UseFirestoreProgressReturn {
  const {
    subtopicId,
    topicId,
    displayName,
    grade,
    autoLoad = true,
    saveDebounceMs = 2000
  } = options;

  const [loading, setLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [saveTimeout, setSaveTimeout] = useState<NodeJS.Timeout | null>(null);

  /**
   * Save conversation state to Firestore
   */
  const saveProgress = useCallback(
    async (state: ConversationState): Promise<void> => {
      if (!userId) {
        console.warn('Cannot save progress: userId is null');
        return;
      }

      try {
        setIsSaving(true);
        setError(null);

        const firestoreConv = conversationStateToFirestore(
          state,
          subtopicId,
          topicId,
          displayName,
          grade
        );

        await saveLearnProgress(userId, subtopicId, firestoreConv);
        setLastSaved(new Date());
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to save progress');
        setError(error);
        console.error('Error saving progress:', error);
        throw error;
      } finally {
        setIsSaving(false);
      }
    },
    [userId, subtopicId, topicId, displayName, grade]
  );

  /**
   * Save with debounce to avoid excessive writes
   */
  const debouncedSave = useCallback(
    (state: ConversationState): void => {
      // Clear existing timeout
      if (saveTimeout) {
        clearTimeout(saveTimeout);
      }

      // Set new timeout
      const timeout = setTimeout(() => {
        saveProgress(state).catch(err => {
          console.error('Debounced save failed:', err);
        });
      }, saveDebounceMs);

      setSaveTimeout(timeout);
    },
    [saveProgress, saveDebounceMs, saveTimeout]
  );

  /**
   * Load conversation state from Firestore
   */
  const loadProgress = useCallback(async (): Promise<ConversationState | null> => {
    if (!userId) {
      return null;
    }

    try {
      setLoading(true);
      setError(null);

      const loaded = await loadLearnProgress(userId, subtopicId);

      if (loaded) {
        return conversationStateFromFirestore(loaded);
      }

      return null;
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to load progress');
      setError(error);
      console.error('Error loading progress:', error);
      return null;
    } finally {
      setLoading(false);
    }
  }, [userId, subtopicId]);

  /**
   * Auto-load on mount
   */
  useEffect(() => {
    if (autoLoad && userId) {
      loadProgress();
    }
  }, [autoLoad, userId, loadProgress]);

  /**
   * Cleanup timeout on unmount
   */
  useEffect(() => {
    return () => {
      if (saveTimeout) {
        clearTimeout(saveTimeout);
      }
    };
  }, [saveTimeout]);

  return {
    loading,
    error,
    saveProgress,
    loadProgress,
    lastSaved,
    isSaving
  };
}

/**
 * Hook for parent dashboard - loads progress summary
 */
export function useProgressSummary(userId: string | null | undefined) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [summary, setSummary] = useState<any>(null);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const loadSummary = async () => {
      try {
        setLoading(true);
        setError(null);

        const { getProgressSummary } = await import('../services/firestoreProgressService');
        const data = await getProgressSummary(userId);

        setSummary(data);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('Failed to load summary');
        setError(error);
        console.error('Error loading summary:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSummary();
  }, [userId]);

  return { loading, error, summary };
}
