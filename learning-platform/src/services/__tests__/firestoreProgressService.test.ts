/**
 * Firestore Progress Service Tests - MVP Implementation
 *
 * These are integration tests that show how to use the service.
 * For actual testing, you'll need Firebase emulator or test credentials.
 */

import { describe, it, expect, beforeEach } from 'vitest';
import type { ConversationState, SectionProgressState } from '../../types/types';
import {
  conversationStateToFirestore,
  conversationStateFromFirestore,
  saveLearnProgress,
  loadLearnProgress,
  getProgressSummary
} from '../firestoreProgressService';
import { Timestamp } from 'firebase/firestore';

describe('Firestore Progress Service - Unit Tests', () => {
  const mockConversationState: ConversationState = {
    messages: [
      {
        id: '1',
        role: 'tutor',
        content: 'Hello! Welcome to trigonometry.',
        timestamp: new Date(),
        sectionId: 'introduction'
      },
      {
        id: '2',
        role: 'student',
        content: 'Hi!',
        timestamp: new Date(),
        sectionId: 'introduction'
      }
    ],
    currentProblemType: 1,
    sessionStats: {
      problemsAttempted: 0,
      correctAnswers: 0,
      hintsProvided: 0,
      startTime: new Date()
    },
    studentProfile: {
      strugglingWith: [],
      preferredMethod: null,
      confidenceLevel: 50
    },
    problemState: {
      currentProblemId: 'prob-1',
      hintsGivenForCurrentProblem: 0,
      attemptsForCurrentProblem: 0,
      problemStartTime: new Date(),
      currentProblemText: 'What is sin(30°)?',
      problemType: 1,
      sectionProgress: {
        currentSection: 'introduction',
        masteredSections: [],
        sectionHistory: []
      }
    }
  };

  it('should convert ConversationState to LearnConversation', () => {
    const firestoreConversation = conversationStateToFirestore(
      mockConversationState,
      's3-math-trigonometry-basic-ratios',
      's3-math-trigonometry',
      'Basic Ratios',
      'Secondary 3'
    );

    expect(firestoreConversation.subtopicId).toBe('s3-math-trigonometry-basic-ratios');
    expect(firestoreConversation.topicId).toBe('s3-math-trigonometry');
    expect(firestoreConversation.displayName).toBe('Basic Ratios');
    expect(firestoreConversation.grade).toBe('Secondary 3');
    expect(firestoreConversation.messages).toHaveLength(2);
    expect(firestoreConversation.sectionProgress.currentSection).toBe('introduction');
  });

  it('should convert LearnConversation back to ConversationState', () => {
    const firestoreConversation = conversationStateToFirestore(
      mockConversationState,
      's3-math-trigonometry-basic-ratios',
      's3-math-trigonometry',
      'Basic Ratios',
      'Secondary 3'
    );

    const convertedState = conversationStateFromFirestore(firestoreConversation);

    expect(convertedState.messages).toHaveLength(2);
    expect(convertedState.currentProblemType).toBe(1);
    expect(convertedState.sessionStats.problemsAttempted).toBe(0);
    expect(convertedState.problemState?.sectionProgress.currentSection).toBe('introduction');
  });
});

describe('Firestore Progress Service - Integration Examples', () => {
  /**
   * Example: Save progress during a learning session
   *
   * This shows how to integrate with your existing Learn component.
   */
  it('should save learn progress - example usage', async () => {
    // Skip in CI - requires Firebase credentials
    if (!process.env.VITE_FIREBASE_PROJECT_ID) {
      return;
    }

    const uid = 'test-user-123';
    const subtopicId = 's3-math-trigonometry-basic-ratios';

    // In your component, you'll have conversation state
    const conversationState: ConversationState = mockConversationState;

    // Convert to Firestore format
    const firestoreConversation = conversationStateToFirestore(
      conversationState,
      subtopicId,
      's3-math-trigonometry',
      'Basic Ratios',
      'Secondary 3'
    );

    // Save to Firestore
    await saveLearnProgress(uid, subtopicId, firestoreConversation);

    // Load it back
    const loaded = await loadLearnProgress(uid, subtopicId);
    expect(loaded).not.toBeNull();
    expect(loaded?.subtopicId).toBe(subtopicId);
  });

  /**
   * Example: Load progress when resuming a topic
   *
   * This shows how to load existing progress.
   */
  it('should load learn progress - example usage', async () => {
    if (!process.env.VITE_FIREBASE_PROJECT_ID) {
      return;
    }

    const uid = 'test-user-123';
    const subtopicId = 's3-math-trigonometry-basic-ratios';

    // Load from Firestore
    const loaded = await loadLearnProgress(uid, subtopicId);

    if (loaded) {
      // Convert to local state
      const conversationState = conversationStateFromFirestore(loaded);

      // Use in your component
      expect(conversationState.messages.length).toBeGreaterThan(0);
    }
  });

  /**
   * Example: Get progress summary for parent dashboard
   *
   * This shows the single-read query for parent dashboards.
   */
  it('should get progress summary - example usage', async () => {
    if (!process.env.VITE_FIREBASE_PROJECT_ID) {
      return;
    }

    const uid = 'test-user-123';

    // Single read for entire progress summary
    const summary = await getProgressSummary(uid);

    if (summary) {
      // Access learn subtopics
      const learnSubtopics = Object.values(summary.learnSubtopics);
      console.log('Learn subtopics:', learnSubtopics);

      // Access practice topics
      const practiceTopics = Object.values(summary.practiceTopics);
      console.log('Practice topics:', practiceTopics);

      // Recent activity
      console.log('Recent activity:', summary.recentActivity);
    }
  });
});

/**
 * Integration Guide for Existing Components
 *
 * 1. In your Learn component, when saving progress:
 *    ```typescript
 *    import { saveLearnProgress, conversationStateToFirestore } from '../services/firestoreProgressService';
 *
 *    const handleSaveProgress = async () => {
 *      const firestoreConv = conversationStateToFirestore(
 *        conversationState,
 *        subtopicId,
 *        topicId,
 *        displayName,
 *        grade
 *      );
 *      await saveLearnProgress(userId, subtopicId, firestoreConv);
 *    };
 *    ```
 *
 * 2. When loading progress:
 *    ```typescript
 *    import { loadLearnProgress, conversationStateFromFirestore } from '../services/firestoreProgressService';
 *
 *    const handleLoadProgress = async () => {
 *      const loaded = await loadLearnProgress(userId, subtopicId);
 *      if (loaded) {
 *        const state = conversationStateFromFirestore(loaded);
 *        setConversationState(state);
 *      }
 *    };
 *    ```
 *
 * 3. For parent dashboard:
 *    ```typescript
 *    import { getProgressSummary } from '../services/firestoreProgressService';
 *
 *    const summary = await getProgressSummary(childUserId);
 *    // Single read - all data in one query!
 *    ```
 */
