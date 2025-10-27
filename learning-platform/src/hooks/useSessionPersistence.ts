import { useEffect, useRef } from 'react';
import { sessionStorage } from '../services/sessionStorage';
import { useAuth } from '../contexts/AuthContext';
import { useProgressSync } from './useProgressSync';
import type { ConversationState, ProblemState, SectionProgressState } from '../types/types';
import type { ConversationSnapshot } from '../types/progress';

interface UseSessionPersistenceProps {
  topicId: string;
  conversationState: ConversationState;
  currentScore: number;
  problemsCompleted: number;
  subtopicComplete: boolean;
  problemState?: ProblemState;
  sectionProgress?: SectionProgressState;
}

/**
 * Hook that automatically saves session state to localStorage and Firestore
 * with debouncing to avoid excessive writes
 */
export const useSessionPersistence = ({
  topicId,
  conversationState,
  currentScore,
  problemsCompleted,
  subtopicComplete,
  problemState,
  sectionProgress
}: UseSessionPersistenceProps) => {
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const lastSaveRef = useRef<string>('');
  const { user } = useAuth();
  const { saveConversationState, isSyncing, lastSyncTime, syncError } = useProgressSync(user?.uid || null);

  useEffect(() => {
    // Create a signature of the current state to avoid unnecessary saves
    const currentSignature = JSON.stringify({
      messagesLength: conversationState.messages.length,
      currentScore,
      problemsCompleted,
      currentDifficulty: conversationState.currentDifficulty,
      subtopicComplete,
      problemStateId: problemState?.currentProblemId,
      currentSection: sectionProgress?.currentSection,
      masteredSectionsCount: sectionProgress?.masteredSections?.length
    });

    // Skip if state hasn't changed
    if (currentSignature === lastSaveRef.current) {
      return;
    }

    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Debounced save (wait 3 seconds after last change to reduce re-render frequency)
    timeoutRef.current = setTimeout(() => {
      // Save to old localStorage system (for backward compatibility)
      sessionStorage.saveSession(
        topicId,
        conversationState,
        currentScore,
        problemsCompleted,
        subtopicComplete,
        problemState,
        sectionProgress
      );

      // NEW: Also save to Firestore/localStorage using progressSyncService
      const snapshot: ConversationSnapshot = {
        topicId,
        categoryId: topicId.split('-').slice(0, -1).join('-'), // Extract category from topicId
        messages: conversationState.messages,
        ...(problemState && { problemState }), // Only include if defined
        sessionStats: {
          problemsAttempted: conversationState.sessionStats.problemsAttempted,
          correctAnswers: conversationState.sessionStats.correctAnswers,
          hintsProvided: conversationState.sessionStats.hintsProvided,
          startTime: conversationState.sessionStats.startTime.toISOString(),
        },
        studentProfile: conversationState.studentProfile,
        lastUpdated: new Date().toISOString(),
      };

      saveConversationState(snapshot).catch(error => {
        console.error('Failed to sync conversation state:', error);
      });

      lastSaveRef.current = currentSignature;
    }, 3000);

    // Cleanup timeout on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    topicId,
    conversationState.messages.length,
    conversationState.currentDifficulty,
    currentScore,
    problemsCompleted,
    subtopicComplete,
    problemState?.currentProblemId,
    sectionProgress?.currentSection,
    sectionProgress?.masteredSections?.length
  ]);

  // Save immediately on page unload
  useEffect(() => {
    const handleBeforeUnload = () => {
      // Save to old localStorage system
      sessionStorage.saveSession(
        topicId,
        conversationState,
        currentScore,
        problemsCompleted,
        subtopicComplete,
        problemState,
        sectionProgress
      );

      // NEW: Also save to Firestore/localStorage using progressSyncService
      const snapshot: ConversationSnapshot = {
        topicId,
        categoryId: topicId.split('-').slice(0, -1).join('-'),
        messages: conversationState.messages,
        ...(problemState && { problemState }), // Only include if defined
        sessionStats: {
          problemsAttempted: conversationState.sessionStats.problemsAttempted,
          correctAnswers: conversationState.sessionStats.correctAnswers,
          hintsProvided: conversationState.sessionStats.hintsProvided,
          startTime: conversationState.sessionStats.startTime.toISOString(),
        },
        studentProfile: conversationState.studentProfile,
        lastUpdated: new Date().toISOString(),
      };

      // Use saveNow for immediate save (not queued)
      saveConversationState(snapshot).catch(error => {
        console.error('Failed to sync on unload:', error);
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [topicId, conversationState, currentScore, problemsCompleted, subtopicComplete, problemState, sectionProgress, saveConversationState]);

  // Return sync status for UI components
  return {
    isSyncing,
    lastSyncTime,
    syncError,
  };
};