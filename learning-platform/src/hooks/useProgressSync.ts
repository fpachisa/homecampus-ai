/**
 * @deprecated This hook is DEPRECATED and should NOT be used.
 *
 * ISSUE: This hook uses the old progressSyncService which writes to the wrong
 * Firestore path (progress/{uid}) that has no security rules, causing permission errors.
 *
 * REPLACEMENT: Use firestoreProgressService directly in components:
 * - For Learn mode: saveLearnProgress(uid, subtopicId, conversationStateToFirestore(...))
 * - For Practice mode: savePracticeProgress(uid, topicId, pathProgressToFirestore(...))
 *
 * See ChatInterface.tsx (lines 218-266) for correct implementation example.
 *
 * TODO: This file should be deleted once migration is verified complete.
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { progressSyncService } from '../services/progressSyncService';
import type { ConversationSnapshot, ProgressSnapshot } from '../types/progress';
import type { PracticePathState } from '../types/practice';

interface UseProgressSyncReturn {
  // State
  isSyncing: boolean;
  lastSyncTime: Date | null;
  syncError: string | null;

  // Conversation methods
  saveConversationState: (conversation: ConversationSnapshot) => Promise<void>;
  loadConversationState: (topicId?: string) => Promise<ConversationSnapshot | null>;

  // Practice methods
  savePracticeState: (category: string, state: PracticePathState) => Promise<void>;
  loadPracticeState: (category: string) => Promise<PracticePathState | null>;

  // General methods
  loadAllProgress: () => Promise<ProgressSnapshot | null>;
  clearAllProgress: () => Promise<void>;
}

/**
 * React hook for managing progress persistence
 * Handles auto-saving and loading of user progress
 */
export function useProgressSync(uid: string | null = null): UseProgressSyncReturn {
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState<Date | null>(null);
  const [syncError, setSyncError] = useState<string | null>(null);

  // Ref to track if auto-sync is started
  const autoSyncStarted = useRef(false);

  // Start auto-sync when component mounts or uid changes
  useEffect(() => {
    if (!autoSyncStarted.current) {
      progressSyncService.startAutoSync(uid);
      autoSyncStarted.current = true;
    }

    return () => {
      // Don't stop on unmount - keep syncing globally
      // Only stop when user logs out (handled by AuthContext)
    };
  }, [uid]);

  /**
   * Save conversation state (debounced automatically by service)
   */
  const saveConversationState = useCallback(
    async (conversation: ConversationSnapshot): Promise<void> => {
      setIsSyncing(true);
      setSyncError(null);

      try {
        await progressSyncService.saveConversationState(uid, conversation);
        setLastSyncTime(new Date());
      } catch (error: any) {
        console.error('Failed to save conversation state:', error);
        setSyncError(error.message || 'Failed to save progress');
      } finally {
        setIsSyncing(false);
      }
    },
    [uid]
  );

  /**
   * Load conversation state
   */
  const loadConversationState = useCallback(
    async (topicId?: string): Promise<ConversationSnapshot | null> => {
      try {
        const progress = await progressSyncService.loadProgress(uid);

        if (!progress?.conversationState) return null;

        // If topicId provided, only return if it matches
        if (topicId && progress.conversationState.topicId !== topicId) {
          return null;
        }

        return progress.conversationState;
      } catch (error: any) {
        console.error('Failed to load conversation state:', error);
        return null;
      }
    },
    [uid]
  );

  /**
   * Save practice state (immediate save)
   */
  const savePracticeState = useCallback(
    async (category: string, state: PracticePathState): Promise<void> => {
      setIsSyncing(true);
      setSyncError(null);

      try {
        await progressSyncService.savePracticeState(uid, category, state);
        setLastSyncTime(new Date());
      } catch (error: any) {
        console.error('Failed to save practice state:', error);
        setSyncError(error.message || 'Failed to save progress');
      } finally {
        setIsSyncing(false);
      }
    },
    [uid]
  );

  /**
   * Load practice state
   */
  const loadPracticeState = useCallback(
    async (category: string): Promise<PracticePathState | null> => {
      try {
        const progress = await progressSyncService.loadProgress(uid);
        return progress?.practiceState?.[category] || null;
      } catch (error: any) {
        console.error('Failed to load practice state:', error);
        return null;
      }
    },
    [uid]
  );

  /**
   * Load all progress
   */
  const loadAllProgress = useCallback(async (): Promise<ProgressSnapshot | null> => {
    try {
      return await progressSyncService.loadProgress(uid);
    } catch (error: any) {
      console.error('Failed to load progress:', error);
      return null;
    }
  }, [uid]);

  /**
   * Clear all progress
   */
  const clearAllProgress = useCallback(async (): Promise<void> => {
    setIsSyncing(true);

    try {
      await progressSyncService.clearProgress(uid);
      setLastSyncTime(null);
    } catch (error: any) {
      console.error('Failed to clear progress:', error);
      setSyncError(error.message || 'Failed to clear progress');
    } finally {
      setIsSyncing(false);
    }
  }, [uid]);

  return {
    isSyncing,
    lastSyncTime,
    syncError,
    saveConversationState,
    loadConversationState,
    savePracticeState,
    loadPracticeState,
    loadAllProgress,
    clearAllProgress,
  };
}
