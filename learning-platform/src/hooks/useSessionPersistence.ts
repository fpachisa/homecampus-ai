import { useEffect, useRef } from 'react';
import { sessionStorage } from '../services/sessionStorage';
import type { ConversationState, ProblemState, SectionProgressState } from '../types/types';

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
 * Hook that automatically saves session state to localStorage
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
      sessionStorage.saveSession(
        topicId,
        conversationState,
        currentScore,
        problemsCompleted,
        subtopicComplete,
        problemState,
        sectionProgress
      );

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
      sessionStorage.saveSession(
        topicId,
        conversationState,
        currentScore,
        problemsCompleted,
        subtopicComplete,
        problemState,
        sectionProgress
      );
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [topicId, conversationState, currentScore, problemsCompleted, subtopicComplete, problemState, sectionProgress]);
};