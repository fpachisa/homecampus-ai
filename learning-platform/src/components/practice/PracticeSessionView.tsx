/**
 * Practice Session View - Interactive problem-solving interface
 *
 * Main practice UI where students solve problems within a lesson.
 * Handles problem display, answer submission, hints, and solutions.
 */

import { useState, useEffect, useRef } from 'react';
import type { PathNode, PathProblem, PathDifficulty, ProblemAttempt, AttemptHistory, ProblemSessionState, RelatedQuestionContext, ScratchPadData } from '../../types/practice';
import { pathPracticeService } from '../../services/pathPracticeService';
import { pathProgressService } from '../../services/pathProgressService';
import { pathConfigLoader } from '../../services/pathConfigLoader';
import {
  savePracticeProgress,
  pathProgressToFirestore
} from '../../services/firestoreProgressService';
import { MathToolRenderer } from './MathToolRenderer';
import { TableRenderer } from './TableRenderer';
import { BackButton } from '../BackButton';
import Avatar from '../Avatar';
import { useAuth } from '../../contexts/AuthContext';
import { useActiveProfile } from '../../contexts/ActiveProfileContext';
import { useAudioManager } from '../../hooks/useAudioManager';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';
import MathInputToolbar from '../MathInputToolbar';
import ScratchPad from './ScratchPad';
import { QuestionTable } from '../tables';

interface PracticeSessionViewProps {
  category: string;
  difficulty: PathDifficulty;
  node: PathNode;
  onComplete: () => void;
  onBack: () => void;
}

interface SessionState {
  problems: PathProblem[];
  currentIndex: number;
  attempts: ProblemAttempt[];
  hintsUsed: number;
  showingSolution: boolean;
  loading: boolean;
  error: string | null;
  // Enhanced practice tracking
  currentProblemSession: ProblemSessionState | null;
  // Store per-problem session state for navigation
  problemSessions: Record<string, ProblemSessionState>;
}

export const PracticeSessionView: React.FC<PracticeSessionViewProps> = ({
  category,
  difficulty: _difficulty, // Kept for API compatibility, no longer used for styling
  node,
  onComplete,
  onBack,
}) => {
  const [session, setSession] = useState<SessionState>({
    problems: [],
    currentIndex: 0,
    attempts: [],
    hintsUsed: 0,
    showingSolution: false,
    loading: true,
    error: null,
    currentProblemSession: null,
    problemSessions: {},
  });

  // Helper function to save practice progress to Firestore
  const saveProgressToFirestore = async (
    pathProgress: any,
    allNodes: PathNode[],
    userId: string | undefined
  ) => {
    if (!userId) {
      console.warn('Cannot save: No User ID');
      return;
    }

    try {
      console.log('Attempts to save practice progress...');
      // Extract topic displayName from the path or nodes
      const displayName = allNodes[0]?.title?.split(' - ')[0] || category;

      // Convert PathProgress to Firestore format
      const firestoreProgress = pathProgressToFirestore(
        pathProgress,
        category, // topicId
        displayName,
        allNodes
      );

      await savePracticeProgress(userId, category, firestoreProgress);
      console.log('✅ Practice progress saved to Firestore');
    } catch (error) {
      console.error('Failed to save practice progress to Firestore:', error);
    }
  };

  const [studentAnswer, setStudentAnswer] = useState('');
  const [solution, setSolution] = useState<{ steps: string[]; finalAnswer: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [loadingSolution, setLoadingSolution] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState<{ current: number; total: number } | null>(null);
  const [showMathToolbar, setShowMathToolbar] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea when content changes
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [studentAnswer]);

  // Timer tracking for time spent per problem
  const [problemStartTime, setProblemStartTime] = useState<Date>(new Date());

  // Mobile detection for responsive scratch pad
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Audio manager for Avatar TTS
  const { isPlaying, currentSubtitle, avatarState, audioDuration, speakText } = useAudioManager();

  // Auth and Profile
  const { user } = useAuth();
  const { activeProfile } = useActiveProfile();

  // Theme for consistent styling
  const { theme } = useTheme();

  // Compute effective UID: use activeProfile's UID if viewing as child, otherwise user's UID
  // This ensures progress saves to the correct user document (Netflix profiles or linked children)
  const effectiveUid = activeProfile?.uid || user?.uid;

  // Detect window resize for responsive layout
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Flush pending saves on page unload to prevent data loss
  useEffect(() => {
    const handleBeforeUnload = (_e: BeforeUnloadEvent) => {
      // Flush any pending debounced saves immediately
      pathProgressService.flushPendingSaves();

      // Note: We don't prevent navigation, just ensure data is saved
      // The browser might wait for the flush to complete
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      // Also flush on component unmount (e.g., navigation within app)
      pathProgressService.flushPendingSaves();
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Handle math symbol insertion at cursor position
  const handleMathInsert = (text: string) => {
    const currentInput = inputRef.current;
    if (!currentInput) return;

    const start = currentInput.selectionStart || 0;
    const end = currentInput.selectionEnd || 0;
    const newValue = studentAnswer.slice(0, start) + text + studentAnswer.slice(end);

    setStudentAnswer(newValue);

    // Set cursor position after inserted text
    setTimeout(() => {
      const newCursorPos = start + text.length;
      currentInput.setSelectionRange(newCursorPos, newCursorPos);
      currentInput.focus();
    }, 0);
  };

  // Handle scratch pad changes and save to session
  const handleScratchPadChange = (data: ScratchPadData) => {
    if (!session.currentProblemSession || !currentProblem) return;

    const updatedProblemSession: ProblemSessionState = {
      ...session.currentProblemSession,
      scratchPad: data
    };

    const updatedProblemSessions = {
      ...session.problemSessions,
      [currentProblem.id]: updatedProblemSession
    };

    setSession(prev => ({
      ...prev,
      currentProblemSession: updatedProblemSession,
      problemSessions: updatedProblemSessions
    }));

    // Save to localStorage
    saveSessionToStorage({
      nodeId: node.id,
      problems: session.problems,
      currentIndex: session.currentIndex,
      attempts: session.attempts,
      problemSessions: updatedProblemSessions,
    });
  };

  // Initialize session: load or generate problems
  useEffect(() => {
    initializeSession();
  }, [node.id]);

  const initializeSession = async () => {
    try {
      // Reset UI state for new session
      setStudentAnswer('');
      setSolution(null);
      setSubmitting(false);
      setLoadingSolution(false);

      setSession(prev => ({ ...prev, loading: true, error: null }));

      console.log('=== PRACTICE SESSION INIT ===');
      console.log('Node ID:', node.id);
      console.log('Node Title:', node.title);
      console.log('Problems Required:', node.problemsRequired);

      // Try to load existing session from localStorage
      const savedSession = loadSessionFromStorage();

      if (savedSession && savedSession.nodeId === node.id) {
        console.log('📦 Loading cached session from localStorage');
        console.log('Cached problems count:', savedSession.problems.length);
        console.log('Cached current index:', savedSession.currentIndex);

        // IMPORTANT: Sync with unified progress to ensure consistency
        const unifiedProgress = pathProgressService.loadUnifiedProgress(category);
        const nodeProgress = unifiedProgress?.nodes[node.id];
        // Use problemsCorrect (not problemsAttempted) to determine which problems are actually done
        const problemsCompleted = nodeProgress?.problemsCorrect || 0;

        console.log('Unified progress shows:', problemsCompleted, 'problems completed correctly');

        // Determine the correct current index based on unified progress
        // Only advance past problems that were solved correctly
        const correctIndex = Math.max(savedSession.currentIndex, problemsCompleted);

        console.log('Setting current index to:', correctIndex);
        console.log('Current progress:', correctIndex + 1, '/', savedSession.problems.length);
        console.log('=============================');

        // If we've already completed all problems, load in review mode (start at index 0)
        if (correctIndex >= savedSession.problems.length) {
          console.log('🎓 All problems complete - loading in REVIEW MODE');

          const currentProblem = savedSession.problems[0];
          const savedProblemSessions = savedSession.problemSessions || {};

          const currentProblemSession: ProblemSessionState = savedProblemSessions[currentProblem?.id] || {
            problemId: currentProblem?.id || '',
            attemptCount: 0,
            attemptHistory: [],
            canRetry: false, // Disable retry in review mode if not already set
            showingSolution: false,
          };

          setSession(prev => ({
            ...prev,
            problems: savedSession.problems,
            currentIndex: 0, // Start at beginning for review
            attempts: savedSession.attempts || [],
            problemSessions: savedProblemSessions,
            loading: false,
            currentProblemSession,
          }));

          return;
        } else {
          // Resume saved session with corrected index
          const currentProblem = savedSession.problems[correctIndex];
          const savedProblemSessions = savedSession.problemSessions || {};

          // CRITICAL: Load saved problem session if it exists, otherwise create fresh one
          const currentProblemSession: ProblemSessionState = savedProblemSessions[currentProblem?.id] || {
            problemId: currentProblem?.id || '',
            attemptCount: 0,
            attemptHistory: [],
            canRetry: true,
            showingSolution: false,
          };

          setSession(prev => ({
            ...prev,
            problems: savedSession.problems,
            currentIndex: correctIndex,
            attempts: savedSession.attempts || [],
            problemSessions: savedProblemSessions,
            loading: false,
            currentProblemSession,
          }));

          return; // Exit early to prevent generating new problems
        }
      } else {
        console.log('🔄 No cached session found - generating new problems with AI...');
        console.log('Calling pathPracticeService.generateNodeProblems()...');

        // Generate new problems (with progress callback for pre-written questions)
        const problems = await pathPracticeService.generateNodeProblems(
          node,
          node.problemsRequired,
          (current, total) => {
            // Update loading progress (only for pre-written questions)
            setLoadingProgress({ current, total });
          }
        );

        console.log('✓ Problems generated:', problems.length);
        console.log('=============================');

        // Clear loading progress
        setLoadingProgress(null);

        // Handle avatar intro for first question if pre-written
        if (problems.length > 0 && problems[0].metadata?.avatarIntro) {
          speakText(problems[0].metadata.avatarIntro);
        }

        setSession(prev => ({
          ...prev,
          problems,
          currentIndex: 0,
          attempts: [],
          loading: false,
          currentProblemSession: problems.length > 0 ? {
            problemId: problems[0].id,
            attemptCount: 0,
            attemptHistory: [],
            canRetry: true,
            showingSolution: false,
          } : null,
        }));

        // Save to localStorage
        saveSessionToStorage({
          nodeId: node.id,
          problems,
          currentIndex: 0,
          attempts: [],
          problemSessions: {},
        });
      }
    } catch (error) {
      console.error('Failed to initialize session:', error);
      setSession(prev => ({
        ...prev,
        loading: false,
        error: 'Failed to load practice session. Please try again.',
      }));
    }
  };

  const loadSessionFromStorage = (): any => {
    try {
      const key = `practice_session_${node.id}`;
      const stored = localStorage.getItem(key);
      if (!stored) return null;

      const data = JSON.parse(stored);

      // Convert date strings back to Date objects for problems
      if (data.problems) {
        data.problems.forEach((p: any) => {
          p.generatedAt = new Date(p.generatedAt);
        });
      }

      // CRITICAL: Convert date strings back to Date objects for problemSessions
      if (data.problemSessions) {
        Object.keys(data.problemSessions).forEach((problemId: string) => {
          const problemSession = data.problemSessions[problemId];
          if (problemSession.attemptHistory) {
            problemSession.attemptHistory.forEach((attempt: any) => {
              attempt.timestamp = new Date(attempt.timestamp);
            });
          }
        });
      }

      // Convert date strings for attempts
      if (data.attempts) {
        data.attempts.forEach((attempt: any) => {
          attempt.attemptedAt = new Date(attempt.attemptedAt);
        });
      }

      return data;
    } catch (error) {
      console.error('Failed to load session from storage:', error);
      return null;
    }
  };

  const saveSessionToStorage = (data: any) => {
    try {
      const key = `practice_session_${node.id}`;
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    } catch (error: any) {
      // Handle QuotaExceededError
      if (error.name === 'QuotaExceededError' ||
        error.name === 'NS_ERROR_DOM_QUOTA_REACHED' ||
        error.message?.includes('quota')) {

        console.warn('⚠️ LocalStorage quota exceeded. Attempting to save without scratchpad data...');

        try {
          // Create a "light" version of the data by removing scratchpad drawings
          const lightData = { ...data };

          if (lightData.problemSessions) {
            // Deep copy problemSessions to avoid mutating original state
            lightData.problemSessions = JSON.parse(JSON.stringify(lightData.problemSessions));

            // Remove scratchpad data from all problem sessions
            Object.keys(lightData.problemSessions).forEach((id: string) => {
              if (lightData.problemSessions[id].scratchPad) {
                delete lightData.problemSessions[id].scratchPad;
              }
            });
          }

          const lightSerializedData = JSON.stringify(lightData);
          const key = `practice_session_${node.id}`;
          localStorage.setItem(key, lightSerializedData);
          console.log('✅ Saved session (without scratchpad data) after quota error');

        } catch (retryError) {
          console.error('❌ Failed to save session even after removing scratchpad data:', retryError);
        }
      } else {
        console.error('Failed to save session to storage:', error);
      }
    }
  };



  const handleSubmitAnswer = async () => {
    if (!studentAnswer.trim() || submitting) return;

    const currentProblem = session.problems[session.currentIndex];
    const problemSession = session.currentProblemSession;

    if (!currentProblem || !problemSession) return;

    // Check if we've exceeded attempt limit
    if (problemSession.attemptCount >= 3) return;

    try {
      setSubmitting(true);

      // Prepare previous attempts for context (only include hints, not explanations)
      const previousAttempts = problemSession.attemptHistory
        .filter(h => !h.isCorrect) // Only include incorrect attempts (which have hints)
        .map(h => ({
          answer: h.studentAnswer,
          hint: h.hint || '', // Provide empty string as fallback
        }));

      // Build related questions context for multi-part questions
      let relatedQuestionsContext: RelatedQuestionContext[] | undefined;
      if (currentProblem.questionGroup) {
        // Find all problems in the same question group
        const relatedProblems = session.problems.filter(p =>
          p.questionGroup === currentProblem.questionGroup &&
          p.id !== currentProblem.id
        );

        // Get attempts for related problems that have been completed
        relatedQuestionsContext = relatedProblems
          .map(problem => {
            // Find the attempt for this problem
            const attempt = session.attempts.find(a => a.problemId === problem.id);
            if (!attempt) return null; // Skip if not attempted yet

            return {
              problemId: problem.id,
              problemText: problem.problemText,
              studentAnswer: attempt.studentAnswer,
              isCorrect: attempt.isCorrect
            };
          })
          .filter((ctx): ctx is RelatedQuestionContext => ctx !== null); // Filter out null values

        console.log('Related Questions Context:', relatedQuestionsContext.length, 'previous parts');
      }

      // Check if this is the last problem in the session
      const isLastProblem = session.currentIndex >= session.problems.length - 1;

      // Get evaluation with progressive hints (and related questions context if applicable)
      const result = await pathPracticeService.evaluateAnswerWithHistory(
        currentProblem,
        studentAnswer,
        problemSession.attemptCount + 1,
        previousAttempts,
        relatedQuestionsContext,
        isLastProblem
      );

      // Create attempt history entry
      const attemptEntry: AttemptHistory = {
        attemptNumber: problemSession.attemptCount + 1,
        studentAnswer,
        avatarSpeech: result.avatarSpeech,
        hint: result.hint,           // Only present for incorrect answers
        explanation: result.explanation, // Only present for correct answers
        isCorrect: result.isCorrect,
        timestamp: new Date(),
      };

      // Update problem session state
      const updatedProblemSession: ProblemSessionState = {
        ...problemSession,
        attemptCount: problemSession.attemptCount + 1,
        attemptHistory: [...problemSession.attemptHistory, attemptEntry],
        canRetry: !result.isCorrect && problemSession.attemptCount + 1 < 3,
        showingSolution: false,
      };

      // CRITICAL: Create updatedProblemSessions BEFORE speakText callback to avoid stale closure
      const updatedProblemSessionsForCallback = {
        ...session.problemSessions,
        [currentProblem.id]: updatedProblemSession,
      };

      // Speak the avatar speech with auto-advance callback for correct answers
      speakText(
        result.avatarSpeech,
        undefined,
        result.isCorrect ? () => {
          // Auto-advance to next problem after speech finishes (only for correct answers)
          // Pass updatedProblemSessions to avoid stale closure bug
          console.log('✓ Avatar speech complete, auto-advancing to next problem...');
          handleNextProblem(true, updatedProblemSessionsForCallback);
        } : undefined
      );

      // Calculate time spent on this problem (for all attempts)
      const timeSpent = Math.floor((new Date().getTime() - problemStartTime.getTime()) / 1000);

      // CRITICAL: Update unified progress on FIRST attempt (to show "in progress") 
      // OR when correct (to count as solved)
      // This prevents incrementing problemsAttempted multiple times for the same problem
      if (updatedProblemSession.attemptCount === 1 || result.isCorrect) {
        const pathProgress = pathProgressService.loadUnifiedProgress(category);
        if (pathProgress) {
          const allNodes = await pathConfigLoader.loadUnifiedPathNodes(category);

          // Check if this was a first-try success
          const isFirstTry = updatedProblemSession.attemptCount === 1;
          pathProgressService.recordUnifiedAttempt(
            pathProgress,
            node.id,
            result.isCorrect,
            allNodes,
            isFirstTry,
            effectiveUid,
            category
          );

          // Accumulate time spent to total (using timeSpent from above)
          pathProgress.totalTimeSpentSeconds = (pathProgress.totalTimeSpentSeconds || 0) + timeSpent;
          console.log(`⏱️ Time spent on this problem: ${timeSpent}s (Total: ${pathProgress.totalTimeSpentSeconds}s)`);

          // Check if node is complete and mark it (all problems solved CORRECTLY)
          const nodeProgress = pathProgress.nodes[node.id];
          if (nodeProgress && nodeProgress.problemsCorrect >= node.problemsRequired) {
            pathProgressService.completeUnifiedNode(pathProgress, node.id, allNodes, effectiveUid, category);
            console.log(`✅ Node completed! (${nodeProgress.problemsCorrect}/${node.problemsRequired} correct)`);
          }

          pathProgressService.saveUnifiedProgress(category, pathProgress);
          console.log(`📊 Updated unified progress: ${nodeProgress?.problemsAttempted || 0}/${node.problemsRequired} problems`);

          // Firestore save is now automatic via pathProgressService auto-save
        }
      }

      // If correct or last attempt, record for session history
      if (result.isCorrect || updatedProblemSession.attemptCount >= 3) {
        const attempt: ProblemAttempt = {
          problemId: currentProblem.id,
          nodeId: node.id,
          studentAnswer,
          isCorrect: result.isCorrect,
          hintsUsed: updatedProblemSession.attemptCount - 1,
          attemptedAt: new Date(),
          timeSpentSeconds: timeSpent,  // ✅ NOW TRACKS ACTUAL TIME
        };

        const newAttempts = [...session.attempts, attempt];

        // Use the same updatedProblemSessions created earlier for the callback
        const updatedProblemSessions = updatedProblemSessionsForCallback;

        setSession(prev => ({
          ...prev,
          attempts: newAttempts,
          currentProblemSession: updatedProblemSession,
          problemSessions: updatedProblemSessions,
        }));

        // Save updated session to localStorage with updated problemSessions
        saveSessionToStorage({
          nodeId: node.id,
          problems: session.problems,
          currentIndex: session.currentIndex,
          attempts: newAttempts,
          problemSessions: updatedProblemSessions,
        });
        console.log(`💾 Saved attempt (${result.isCorrect ? 'correct' : 'incorrect'}): ${newAttempts.length} total attempts, current index: ${session.currentIndex}`);
      } else {
        // For incorrect attempts that can retry, also save the session state
        const updatedProblemSessions = {
          ...session.problemSessions,
          [currentProblem.id]: updatedProblemSession,
        };

        setSession(prev => ({
          ...prev,
          currentProblemSession: updatedProblemSession,
          problemSessions: updatedProblemSessions,
        }));

        // Save to localStorage so hints persist on navigation
        saveSessionToStorage({
          nodeId: node.id,
          problems: session.problems,
          currentIndex: session.currentIndex,
          attempts: session.attempts,
          problemSessions: updatedProblemSessions,
        });
      }

      // Clear input if incorrect and can retry
      if (!result.isCorrect && updatedProblemSession.canRetry) {
        setStudentAnswer('');
      }
    } catch (error) {
      console.error('Failed to evaluate answer:', error);
      speakText('Let me try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleShowSolution = async () => {
    const currentProblem = session.problems[session.currentIndex];
    if (!currentProblem || loadingSolution) return;

    try {
      setLoadingSolution(true);
      const solutionData = await pathPracticeService.getSolution(currentProblem);

      setSolution(solutionData);

      // Update session state to reflect showing solution
      // CRITICAL: We must also update currentProblemSession and save to storage
      // to ensure this state persists across reloads

      const updatedProblemSession: ProblemSessionState = {
        ...(session.currentProblemSession || {
          problemId: currentProblem.id,
          attemptCount: 0,
          attemptHistory: [],
          canRetry: false,
          showingSolution: true
        }),
        showingSolution: true,
        canRetry: false // Cannot retry once solution is shown
      };

      const updatedProblemSessions = {
        ...session.problemSessions,
        [currentProblem.id]: updatedProblemSession
      };

      setSession(prev => ({
        ...prev,
        showingSolution: true,
        currentProblemSession: updatedProblemSession,
        problemSessions: updatedProblemSessions
      }));

      // Save to storage immediately
      saveSessionToStorage({
        nodeId: node.id,
        problems: session.problems,
        currentIndex: session.currentIndex,
        attempts: session.attempts,
        problemSessions: updatedProblemSessions,
      });

    } catch (error) {
      console.error('Failed to load solution:', error);
      setSolution({
        steps: ['Failed to load solution. Please try again.'],
        finalAnswer: currentProblem.correctAnswer,
      });
    } finally {
      setLoadingSolution(false);
    }
  };

  const handleNextProblem = (skipAvatarSpeech = false, existingProblemSessions?: Record<string, ProblemSessionState>) => {
    const nextIndex = session.currentIndex + 1;

    if (nextIndex >= session.problems.length) {
      // Session complete!
      completeSession();
    } else {
      // CRITICAL: Use existingProblemSessions if provided (to avoid stale closure), otherwise use session.problemSessions
      const baseProblemSessions = existingProblemSessions || session.problemSessions;
      const updatedProblemSessions = { ...baseProblemSessions };

      // CRITICAL: Only save currentProblemSession if NOT using existingProblemSessions
      // (because existingProblemSessions already contains the updated current problem session)
      if (session.currentProblemSession && !existingProblemSessions) {
        const currentProblem = session.problems[session.currentIndex];
        updatedProblemSessions[currentProblem.id] = session.currentProblemSession;
      }

      const nextProblem = session.problems[nextIndex];

      // Handle avatar intro for pre-written questions
      // Skip if already spoken (e.g., during auto-advance after correct answer)
      if (!skipAvatarSpeech) {
        if (nextProblem.metadata?.avatarIntro) {
          // First question with custom intro
          speakText(nextProblem.metadata.avatarIntro);
        } else if (nextProblem.metadata?.isPreWritten && nextProblem.metadata.partNumber) {
          // Subsequent parts - generate contextual transition
          const partNum = nextProblem.metadata.partNumber;
          const partLetter = String.fromCharCode(96 + partNum); // 1=a, 2=b, 3=c, etc.
          speakText(`Let's move on to part ${partLetter}.`);
        }
      }

      // Move to next problem with fresh problem session
      setSession(prev => ({
        ...prev,
        currentIndex: nextIndex,
        hintsUsed: 0,
        showingSolution: false,
        problemSessions: updatedProblemSessions, // Save updated problem sessions
        currentProblemSession: {
          problemId: nextProblem.id,
          attemptCount: 0,
          attemptHistory: [],
          canRetry: true,
          showingSolution: false,
        },
      }));
      setStudentAnswer('');

      // Reset timer for next problem
      setProblemStartTime(new Date());
      console.log('⏱️ Timer reset for next problem');
      setSolution(null);

      // Save progress with updated problem sessions
      const sessionData = {
        nodeId: node.id,
        problems: session.problems,
        currentIndex: nextIndex,
        attempts: session.attempts,
        problemSessions: updatedProblemSessions, // Use updated version
      };
      saveSessionToStorage(sessionData);
    }
  };

  const handleNavigateToProblem = (targetIndex: number) => {
    if (targetIndex === session.currentIndex) return; // Already on this problem

    // Save current problem session state before navigating
    const updatedProblemSessions = { ...session.problemSessions };
    if (session.currentProblemSession) {
      const currentProblem = session.problems[session.currentIndex];
      updatedProblemSessions[currentProblem.id] = session.currentProblemSession;
    }

    const targetProblem = session.problems[targetIndex];

    // Load saved session for target problem, or create fresh one
    const savedProblemSession = updatedProblemSessions[targetProblem.id];
    const targetProblemSession: ProblemSessionState = savedProblemSession || {
      problemId: targetProblem.id,
      attemptCount: 0,
      attemptHistory: [],
      canRetry: true,
      showingSolution: false,
    };

    // Update session state
    setSession(prev => ({
      ...prev,
      currentIndex: targetIndex,
      currentProblemSession: targetProblemSession,
      problemSessions: updatedProblemSessions,
      hintsUsed: 0,
      showingSolution: false,
    }));

    // Clear UI state
    setStudentAnswer('');
    setSolution(null);

    // Reset timer when navigating to different problem
    setProblemStartTime(new Date());
    console.log('⏱️ Timer reset for navigated problem');

    // Save to localStorage
    saveSessionToStorage({
      nodeId: node.id,
      problems: session.problems,
      currentIndex: targetIndex,
      attempts: session.attempts,
      problemSessions: updatedProblemSessions,
    });
  };

  const completeSession = async () => {
    console.log('=== COMPLETING SESSION ===');
    console.log('Node:', node.id, node.title);
    console.log('Attempts:', session.attempts.length);

    // Update progress in pathProgressService using UNIFIED system
    let pathProgress = pathProgressService.loadUnifiedProgress(category);

    if (pathProgress) {
      console.log('✓ Found existing unified progress');

      // Load all nodes (needed for completion check)
      const allNodes = await pathConfigLoader.loadUnifiedPathNodes(category);

      // CRITICAL: Sync progress with current nodes to ensure IDs match
      // This fixes the issue where old progress objects don't have the new node IDs
      const synced = pathProgressService.syncUnifiedProgress(pathProgress, allNodes);
      if (synced) {
        console.log('🔄 Synced unified progress with current nodes');
        pathProgressService.saveUnifiedProgress(category, pathProgress);
      }

      // Check if node is complete (it may already be marked complete from real-time tracking)
      const nodeProgress = pathProgress.nodes[node.id];

      console.log('🔍 Debug Node Completion:', {
        nodeId: node.id,
        nodeProgress: nodeProgress,
        problemsAttempted: nodeProgress?.problemsAttempted,
        problemsRequired: node.problemsRequired,
        allNodeKeys: Object.keys(pathProgress.nodes).filter(k => k.includes(node.id.split('-').pop() || ''))
      });

      if (nodeProgress && nodeProgress.problemsAttempted >= node.problemsRequired) {
        console.log(`✓ Node complete! (${nodeProgress.problemsAttempted}/${node.problemsRequired})`);

        // Only complete the node if it's not already marked as completed
        if (nodeProgress.status !== 'completed') {
          pathProgressService.completeUnifiedNode(pathProgress, node.id, allNodes, user?.uid, category);
        } else {
          console.log('  Node already marked as completed');
        }
      } else {
        console.log(`  Node in progress: ${nodeProgress?.problemsAttempted || 0}/${node.problemsRequired}`);
      }

      // Save updated state
      pathProgressService.saveUnifiedProgress(category, pathProgress);
      console.log('✓ Progress saved to unified system');

      // Also save to Firestore
      await saveProgressToFirestore(pathProgress, allNodes, effectiveUid);
    } else {
      console.error('❌ No unified progress found!');
    }

    console.log('===========================');

    // DO NOT clear session from storage - keep it for review mode
    // clearSessionFromStorage();

    // Navigate back to path map
    onComplete();
  };

  // Computed values
  const currentProblem = session.problems[session.currentIndex];
  const progress = session.currentIndex + 1;
  const total = session.problems.length;

  // Progress based on completed problems (attempts recorded), not current problem number
  const completedProblems = session.attempts.length;
  const progressPercent = total > 0 ? Math.round((completedProblems / total) * 100) : 0;

  // Calculate the active working index (furthest problem that needs work)
  // This is the index of the first problem that hasn't been attempted yet
  const activeWorkingIndex = session.problems.findIndex((p, _idx) =>
    !session.attempts.some(a => a.problemId === p.id)
  );
  // If all problems attempted, active index is last problem
  const finalActiveIndex = activeWorkingIndex === -1 ? session.problems.length - 1 : activeWorkingIndex;

  // Determine if user is reviewing (viewing a completed problem that's not the active one)
  const isReviewing = session.currentIndex < finalActiveIndex &&
    session.currentProblemSession?.attemptHistory.some(a => a.isCorrect);


  if (session.loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          {/* Animated book icon */}
          <div className="text-6xl mb-4 animate-bounce">📚</div>

          {/* Loading text with animated dots */}
          <div className="text-xl text-gray-700 font-semibold flex items-center justify-center gap-1">
            <span>{loadingProgress ? 'Preparing exam questions' : 'Loading your practice session'}</span>
            <span className="flex gap-1">
              <span className="animate-pulse" style={{ animationDelay: '0ms' }}>.</span>
              <span className="animate-pulse" style={{ animationDelay: '200ms' }}>.</span>
              <span className="animate-pulse" style={{ animationDelay: '400ms' }}>.</span>
            </span>
          </div>

          {/* Progress indicator for pre-written questions */}
          {loadingProgress && (
            <div className="mt-3 text-lg text-gray-600">
              ({loadingProgress.current}/{loadingProgress.total})
            </div>
          )}

          {/* Animated progress bar */}
          <div className="mt-6 w-64 h-2 bg-white/30 rounded-full overflow-hidden mx-auto">
            {loadingProgress ? (
              /* Determinate progress bar for pre-written questions */
              <div
                className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-300"
                style={{ width: `${(loadingProgress.current / loadingProgress.total) * 100}%` }}
              />
            ) : (
              /* Indeterminate progress bar for AI-generated questions */
              <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 animate-pulse" style={{
                animation: 'loading-bar 1.5s ease-in-out infinite'
              }}></div>
            )}
          </div>

          {/* Loading spinner circles */}
          <div className="mt-4 flex justify-center gap-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>

        <style>{`
          @keyframes loading-bar {
            0%, 100% {
              width: 30%;
              margin-left: 0%;
            }
            50% {
              width: 70%;
              margin-left: 30%;
            }
          }
        `}</style>
      </div>
    );
  }

  if (session.error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">⚠️</div>
          <div className="text-xl text-red-600 font-semibold mb-4">{session.error}</div>
          <button
            onClick={onBack}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-blue-50 to-indigo-100 pb-safe-b">
      {/* Header */}
      <div className="bg-white shadow-md border-b-2 border-blue-200 pt-safe-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          {/* Top Row: Back button + Title + Progress */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2 sm:gap-4 flex-1 min-w-0">
              <BackButton onClick={onBack} />
              <div className="flex-1 min-w-0">
                <h1 className="text-base sm:text-xl font-bold text-gray-800 truncate">{node.title}</h1>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-xs sm:text-sm text-gray-600">Progress</div>
              <div className="text-base sm:text-lg font-bold text-gray-800">{progressPercent}%</div>
            </div>
          </div>

          {/* Bottom Row: Problem Navigation Pills */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto py-2 -mx-1 px-1">
            {session.problems.map((problem, index) => {
              const isAttempted = session.attempts.some(a => a.problemId === problem.id);
              const hasVisited = session.problemSessions[problem.id] !== undefined;
              const isCurrent = index === session.currentIndex;
              // Can click if: attempted, current, has visited session, or any problem up to current index
              const canClick = isAttempted || isCurrent || hasVisited || index <= session.currentIndex;

              // Compute pill styles based on state
              const pillStyle = isAttempted
                ? { backgroundColor: theme.colors.success, color: '#ffffff' }
                : isCurrent
                  ? { backgroundColor: theme.colors.brand, color: '#ffffff', boxShadow: theme.shadows.lg }
                  : hasVisited || index < session.currentIndex
                    ? { backgroundColor: theme.colors.brandHover, color: '#ffffff' }
                    : { backgroundColor: theme.colors.interactive, color: theme.colors.textMuted, opacity: 0.6 };

              return (
                <button
                  key={problem.id}
                  onClick={() => canClick && handleNavigateToProblem(index)}
                  disabled={!canClick}
                  className={`min-w-[44px] min-h-[44px] w-11 h-11 flex-shrink-0 rounded-full font-semibold transition-all text-sm sm:text-base ${
                    isAttempted || hasVisited || index < session.currentIndex ? 'cursor-pointer' : 'cursor-not-allowed'
                  } ${isCurrent ? 'scale-105 sm:scale-110' : ''} ${isCurrent && isAttempted ? 'ring-2 sm:ring-4' : ''}`}
                  style={{
                    ...pillStyle,
                    ...(isCurrent && isAttempted ? { boxShadow: `0 0 0 4px ${theme.colors.brand}40` } : {}),
                  }}
                  onMouseEnter={(e) => {
                    if (canClick && !isCurrent) {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isCurrent) {
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                  title={
                    isCurrent && isAttempted
                      ? `Current problem ${index + 1} (attempted)`
                      : isCurrent
                        ? `Current problem ${index + 1}`
                        : isAttempted
                          ? `Navigate to problem ${index + 1} (completed)`
                          : hasVisited || index < session.currentIndex
                            ? `Navigate to problem ${index + 1} (visited)`
                            : `Problem ${index + 1} (not reached yet)`
                  }
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Avatar Component - Fixed Position (stays visible during scroll) */}
        {(isPlaying || currentSubtitle) && (
          <div style={{
            position: 'fixed',
            top: '120px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Avatar
              state={avatarState}
              subtitle={currentSubtitle}
              showSubtitle={true}
              size={120}
              audioDuration={audioDuration}
              emotion="encouraging"
            />
          </div>
        )}

        {/* Responsive Grid: Problem Card (60%) | Scratch Pad (40%) on desktop, stacked on mobile */}
        <div className="grid-layout-responsive mb-6">
          {/* Problem Column */}
          <div className="problem-column">
            {/* Previous Parts Context (for multi-part questions) */}
            {currentProblem?.questionGroup && (
              (() => {
                // Find previous parts in the same group
                const previousParts = session.problems.filter((p, idx) =>
                  p.questionGroup === currentProblem.questionGroup &&
                  idx < session.currentIndex
                );

                if (previousParts.length === 0) return null;

                return (
                  <div className="mb-6 space-y-4">
                    {previousParts.map((part, idx) => {
                      const attempt = session.attempts.find(a => a.problemId === part.id);
                      // Determine part label (e.g., "Part (a)")
                      const partLabel = part.metadata?.partNumber
                        ? `Part (${String.fromCharCode(96 + part.metadata.partNumber)})`
                        : `Part ${idx + 1}`;

                      return (
                        <div
                          key={part.id}
                          className="rounded-lg border p-4 opacity-90 hover:opacity-100 transition-opacity"
                          style={{
                            backgroundColor: theme.colors.surface,
                            borderColor: theme.colors.border,
                          }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: theme.colors.textMuted }}>{partLabel}</span>
                            <span
                              className="text-xs font-medium px-2 py-1 rounded-full"
                              style={{
                                backgroundColor: `${theme.colors.success}20`,
                                color: theme.colors.success,
                                border: `1px solid ${theme.colors.success}30`,
                              }}
                            >
                              Completed
                            </span>
                          </div>
                          <div className="text-gray-600 mb-3 text-sm">
                            <MathText>{part.problemText}</MathText>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="font-medium text-gray-700">Answer:</span>
                            <span className="font-mono bg-white px-2 py-1 rounded border border-gray-200 text-gray-800">
                              <MathText>{attempt?.studentAnswer || part.correctAnswer}</MathText>
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })()
            )}

            {/* Problem Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Problem {progress}</h2>
              <div className="text-gray-800 text-lg leading-relaxed mb-6">
                <MathText>{currentProblem?.problemText || ''}</MathText>
              </div>

              {/* SVG Diagram (for pre-written questions) */}
              {currentProblem?.diagramSvg && (
                <div className="my-4 p-4 bg-white rounded-lg border-2 border-gray-200">
                  <div className="flex justify-center">
                    <img
                      src={currentProblem.diagramSvg}
                      alt="Problem diagram"
                      className="max-w-full h-auto"
                      style={{ maxHeight: '500px' }}
                    />
                  </div>
                </div>
              )}

              {/* Structured Question Table */}
              {currentProblem?.questionTable && (
                <div className="my-4">
                  <QuestionTable table={currentProblem.questionTable} />
                </div>
              )}

              {/* Table Data (for questions with tabular information) */}
              {currentProblem?.tableData && (
                <TableRenderer tableData={currentProblem.tableData} />
              )}

              {/* Math Tool Visualization (for AI-generated questions) */}
              {currentProblem?.mathTool && currentProblem.mathTool.toolName !== "none" && (
                <MathToolRenderer
                  toolName={currentProblem.mathTool.toolName}
                  parameters={currentProblem.mathTool.parameters}
                  caption={currentProblem.mathTool.caption}
                />
              )}

              {/* Attempt History Display - Shows all previous attempts and hints */}
              {session.currentProblemSession && session.currentProblemSession.attemptHistory.length > 0 && (
                <div className="mt-6 mb-6 space-y-3">
                  <div className="text-sm font-semibold text-gray-600 mb-2">Previous Attempts:</div>
                  {session.currentProblemSession.attemptHistory.map((attempt, index) => (
                    <div key={index} className="border-l-4 border-blue-300 pl-4 py-2">
                      {/* Student's Answer */}
                      <div className="flex items-start space-x-2 mb-2">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm">
                          🙋‍♀️
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-gray-500 mb-1">Attempt {attempt.attemptNumber}</div>
                          <div className="bg-blue-50 rounded-lg px-3 py-2 text-gray-800">
                            {attempt.studentAnswer}
                          </div>
                        </div>
                      </div>

                      {/* Tutor's Hint/Feedback - WhatsApp style (right-aligned) */}
                      <div className="flex items-start space-x-2 justify-end">
                        <div className="max-w-[75%]">
                          <div
                            className="rounded-lg px-3 py-2"
                            style={{
                              backgroundColor: attempt.isCorrect ? `${theme.colors.success}20` : `${theme.colors.warning}20`,
                              color: theme.colors.textPrimary,
                            }}
                          >
                            {/* Show explanation for correct answers, hint with label for incorrect */}
                            <MathText>
                              {attempt.isCorrect
                                ? (attempt.explanation || '')
                                : `Hint ${attempt.attemptNumber}: ${attempt.hint || ''}`}
                            </MathText>
                          </div>
                        </div>
                        {/* Tutor label badge */}
                        <div
                          className="flex-shrink-0 px-2 py-1 rounded text-xs font-semibold whitespace-nowrap"
                          style={{
                            backgroundColor: `${theme.colors.brand}20`,
                            color: theme.colors.brand,
                          }}
                        >
                          Tutor
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Answer Input */}
              <div className="space-y-4">
                {/* Math Toolbar (collapsible) */}
                {showMathToolbar && (
                  <div className="mb-3">
                    <MathInputToolbar
                      onInsert={handleMathInsert}
                      topicId={category}
                      disabled={
                        submitting ||
                        (session.currentProblemSession && !session.currentProblemSession.canRetry) ||
                        (session.currentProblemSession && session.currentProblemSession.attemptHistory.some(a => a.isCorrect)) ||
                        false
                      }
                    />
                  </div>
                )}

                <div>
                  {/* Math toolbar toggle button */}
                  <button
                    onClick={() => setShowMathToolbar(!showMathToolbar)}
                    disabled={
                      submitting ||
                      (session.currentProblemSession && !session.currentProblemSession.canRetry) ||
                      (session.currentProblemSession && session.currentProblemSession.attemptHistory.some(a => a.isCorrect)) ||
                      false
                    }
                    className="text-xs px-3 py-1.5 mb-2 rounded-md transition-all duration-150 hover:scale-105 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      backgroundColor: showMathToolbar ? theme.colors.brand : theme.colors.interactive,
                      color: showMathToolbar ? '#ffffff' : theme.colors.textPrimary,
                    }}
                    title="Toggle math symbols toolbar"
                  >
                    {showMathToolbar ? '✕ Hide Math Symbols' : '∑ Math Symbols'}
                  </button>

                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Answer {session.currentProblemSession && session.currentProblemSession.attemptCount > 0
                      ? `(Attempt ${Math.min(session.currentProblemSession.attemptCount + 1, 3)} of 3)`
                      : ''}:
                  </label>
                  <textarea
                    ref={inputRef}
                    value={studentAnswer}
                    onChange={(e) => setStudentAnswer(e.target.value)}
                    onKeyDown={(e) => {
                      const canSubmit = session.currentProblemSession?.canRetry ?? false;
                      // Submit on Ctrl+Enter or Cmd+Enter
                      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && canSubmit && !submitting) {
                        handleSubmitAnswer();
                      }
                    }}
                    disabled={
                      submitting ||
                      (session.currentProblemSession && !session.currentProblemSession.canRetry) ||
                      (session.currentProblemSession && session.currentProblemSession.attemptHistory.some(a => a.isCorrect)) ||
                      false
                    }
                    className="w-full px-4 py-3 focus:outline-none text-lg disabled:cursor-not-allowed resize-y min-h-[120px]"
                    style={{
                      background: (submitting ||
                        (session.currentProblemSession && !session.currentProblemSession.canRetry) ||
                        (session.currentProblemSession && session.currentProblemSession.attemptHistory.some(a => a.isCorrect)))
                        ? theme.colors.interactive
                        : theme.glass.background,
                      border: `1px solid ${theme.glass.border}`,
                      backdropFilter: theme.glass.backdrop,
                      borderRadius: theme.radius.lg,
                      color: theme.colors.textPrimary,
                      opacity: (submitting ||
                        (session.currentProblemSession && !session.currentProblemSession.canRetry) ||
                        (session.currentProblemSession && session.currentProblemSession.attemptHistory.some(a => a.isCorrect)))
                        ? 0.7
                        : 1,
                    }}
                    placeholder={
                      session.currentProblemSession && !session.currentProblemSession.canRetry
                        ? "Maximum attempts reached"
                        : "Enter your answer... (Press Ctrl+Enter to submit)"
                    }
                    rows={4}
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-3">
                  {/* Check if student got it correct */}
                  {session.currentProblemSession && session.currentProblemSession.attemptHistory.some(a => a.isCorrect) ? (
                    <button
                      onClick={() => isReviewing ? handleNavigateToProblem(finalActiveIndex) : handleNextProblem()}
                      className="px-6 py-2.5 text-white rounded-lg font-semibold transition-all duration-200"
                      style={{
                        background: theme.gradients.brand,
                        boxShadow: theme.shadows.glow,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.02)';
                        e.currentTarget.style.boxShadow = theme.shadows.xl;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = theme.shadows.glow;
                      }}
                    >
                      {session.currentIndex >= session.problems.length - 1
                        ? 'Finish Lesson'
                        : isReviewing
                          ? `Return to Problem ${finalActiveIndex + 1} →`
                          : 'Next Problem →'}
                    </button>
                  ) : (
                    <>
                      {/* If still can retry, show submit button */}
                      {session.currentProblemSession && session.currentProblemSession.canRetry ? (
                        <button
                          onClick={handleSubmitAnswer}
                          disabled={!studentAnswer.trim() || submitting}
                          className="px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 disabled:cursor-not-allowed"
                          style={{
                            background: (!studentAnswer.trim() || submitting) ? theme.colors.interactive : theme.gradients.brand,
                            color: (!studentAnswer.trim() || submitting) ? theme.colors.textMuted : '#ffffff',
                            boxShadow: (!studentAnswer.trim() || submitting) ? 'none' : theme.shadows.glow,
                          }}
                          onMouseEnter={(e) => {
                            if (studentAnswer.trim() && !submitting) {
                              e.currentTarget.style.transform = 'scale(1.02)';
                              e.currentTarget.style.boxShadow = theme.shadows.xl;
                            }
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = (!studentAnswer.trim() || submitting) ? 'none' : theme.shadows.glow;
                          }}
                        >
                          {submitting ? 'Checking...' : (
                            <span className="flex items-center gap-1.5">
                              <span>Submit Answer</span>
                              <span className="hidden lg:inline-flex items-center gap-0.5 text-xs opacity-50">
                                <span>Ctrl</span>
                                <span>↵</span>
                              </span>
                            </span>
                          )}
                        </button>
                      ) : (
                        /* After 3 failed attempts, show solution and next buttons */
                        <>
                          {!solution ? (
                            <button
                              onClick={handleShowSolution}
                              disabled={loadingSolution}
                              className="px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50"
                              style={{
                                backgroundColor: theme.colors.interactive,
                                color: theme.colors.textPrimary,
                              }}
                              onMouseEnter={(e) => {
                                if (!loadingSolution) {
                                  e.currentTarget.style.backgroundColor = theme.colors.interactiveHover;
                                  e.currentTarget.style.transform = 'scale(1.02)';
                                }
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = theme.colors.interactive;
                                e.currentTarget.style.transform = 'scale(1)';
                              }}
                            >
                              {loadingSolution ? 'Loading...' : 'Show Solution'}
                            </button>
                          ) : (
                            <button
                              onClick={() => isReviewing ? handleNavigateToProblem(finalActiveIndex) : handleNextProblem()}
                              className="px-6 py-2.5 text-white rounded-lg font-semibold transition-all duration-200"
                              style={{
                                background: theme.gradients.brand,
                                boxShadow: theme.shadows.glow,
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.02)';
                                e.currentTarget.style.boxShadow = theme.shadows.xl;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = theme.shadows.glow;
                              }}
                            >
                              {session.currentIndex >= session.problems.length - 1
                                ? 'Finish Lesson'
                                : isReviewing
                                  ? `Return to Problem ${finalActiveIndex + 1} →`
                                  : 'Next Problem →'}
                            </button>
                          )}
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Solution Display */}
              {solution && (
                <div
                  className="mt-6 p-4 rounded-lg"
                  style={{
                    backgroundColor: theme.colors.surface,
                    border: `2px solid ${theme.colors.brand}`,
                  }}
                >
                  <div className="font-semibold mb-3" style={{ color: theme.colors.brand }}>Solution:</div>
                  {/* Bar Model / Solution Diagram (shown only with solution) */}
                  {currentProblem?.solutionDiagramSvg && (
                    <div className="my-4 p-4 bg-white rounded-lg border-2 border-gray-200">
                      <div className="text-sm font-medium text-gray-600 mb-2">Bar Model:</div>
                      <div className="flex justify-center">
                        <img
                          src={currentProblem.solutionDiagramSvg}
                          alt="Solution diagram"
                          className="max-w-full h-auto"
                          style={{ maxHeight: '400px' }}
                        />
                      </div>
                    </div>
                  )}
                  <div className="space-y-2">
                    {solution.steps.map((step, index) => (
                      <div key={index} style={{ color: theme.colors.textSecondary }}>
                        <MathText>{step}</MathText>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 font-semibold" style={{ color: theme.colors.brand }}>
                    Final Answer: <MathText>{solution.finalAnswer}</MathText>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Scratch Pad Column */}
          <div className="scratch-pad-column">
            <ScratchPad
              problemId={currentProblem?.id || ''}
              initialData={session.currentProblemSession?.scratchPad}
              onChange={handleScratchPadChange}
              isMobile={isMobile}
            />
          </div>
        </div>

        {/* Stats Card
        <div className="bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center justify-around text-center">
            <div>
              <div className="text-2xl font-bold text-gray-800">{correctCount}/{session.attempts.length}</div>
              <div className="text-sm text-gray-600">Correct</div>
            </div>
            <div className="h-12 w-px bg-gray-300" />
            <div>
              <div className="text-2xl font-bold text-gray-800">{accuracy}%</div>
              <div className="text-sm text-gray-600">Accuracy</div>
            </div>
            <div className="h-12 w-px bg-gray-300" />
            <div>
              <div className="text-2xl font-bold text-gray-800">{session.hintsUsed}</div>
              <div className="text-sm text-gray-600">Hints Used</div>
            </div>
          </div>
        </div>
     */}
      </div>
    </div>
  );
};

export default PracticeSessionView;
