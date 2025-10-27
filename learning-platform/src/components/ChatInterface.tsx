import { useState, useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import InputArea, { type InputAreaHandle } from './InputArea';
import Avatar from './Avatar';
import FallbackAIService from '../services/fallbackAIService';
import type { AIService } from '../services/aiService';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../hooks/useTheme';
import {
  saveLearnProgress,
  loadLearnProgress,
  conversationStateToFirestore,
  conversationStateFromFirestore
} from '../services/firestoreProgressService';
import { useAudioManager } from '../hooks/useAudioManager';
import { S3_MATH_TRIGONOMETRY } from '../prompt-library/subjects/mathematics/secondary/s3-trigonometry';
import type { TrigonometryTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-trigonometry';
import { S3_MATH_CIRCLE_GEOMETRY } from '../prompt-library/subjects/mathematics/secondary/s3-circle-geometry';
import type { CircleGeometryTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-circle-geometry';
import { S3_MATH_QUADRATIC_EQUATIONS } from '../prompt-library/subjects/mathematics/secondary/s3-quadratic-equations';
import type { QuadraticEquationsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-quadratic-equations';
import { S3_MATH_EXPONENTIAL_LOGARITHMS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-exponential-logarithms';
import type { ExponentialLogarithmsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-exponential-logarithms';
import { S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-sets-venn-diagrams';
import type { SetsVennDiagramsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-sets-venn-diagrams';
import { S3_MATH_EXPONENTS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-exponents';
import type { ExponentsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-exponents';
import { S3_MATH_SURDS_RADICALS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-surds-radicals';
import type { SurdsRadicalsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-surds-radicals';
import { S3_MATH_STATISTICS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-statistics';
import type { StatisticsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-statistics';
import { S3_MATH_RELATIONS_FUNCTIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-relations-functions';
import type { RelationsFunctionsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-relations-functions';
import { S3_MATH_COORDINATE_GEOMETRY_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-coordinate-geometry';
import type { CoordinateGeometryTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-coordinate-geometry';
import { DIFFERENTIAL_CALCULUS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s4-differential-calculus';
import type { DifferentialCalculusTopicId } from '../prompt-library/subjects/mathematics/secondary/s4-differential-calculus';
import { S4_MATH_INTEGRATION_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s4-integration';
import type { IntegrationTopicId } from '../prompt-library/subjects/mathematics/secondary/s4-integration';
import { S4_MATH_PROBABILITY_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s4-probability';
import type { ProbabilityTopicId } from '../prompt-library/subjects/mathematics/secondary/s4-probability';
import { S4_MATH_QUADRATIC_FUNCTIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s4-quadratic-functions';
import type { QuadraticFunctionsTopicId } from '../prompt-library/subjects/mathematics/secondary/s4-quadratic-functions';
import type { ConversationState, Message, ProblemState, SectionProgressState, SectionProgressEntry } from '../types/types';
import type { EvaluatorOutput } from '../prompt-library/types/agents';
import { notesLoader } from '../services/notesLoader';
import NotesViewer from './NotesViewer';
import SectionProgressTracker from './SectionProgressTracker';

interface ChatInterfaceProps {
  topicId?: string;
  onBackToTopics?: () => void;
}

// Helper function to get topic config from S3 sources
const getTopicConfig = (topicId: string) => {
  // Check if it's an S3 trigonometry topic
  if (topicId.startsWith('s3-math-trigonometry-')) {
    return S3_MATH_TRIGONOMETRY[topicId as TrigonometryTopicId];
  }
  // Check if it's an S3 circle geometry topic
  if (topicId.startsWith('s3-math-circle-geometry-')) {
    return S3_MATH_CIRCLE_GEOMETRY[topicId as CircleGeometryTopicId];
  }
  // Check if it's an S3 quadratic equations topic
  if (topicId.startsWith('s3-math-quadratic-')) {
    return S3_MATH_QUADRATIC_EQUATIONS[topicId as QuadraticEquationsTopicId];
  }
  // Check if it's an S3 exponential & logarithms topic
  if (topicId.startsWith('s3-math-exponential-logarithms-')) {
    return S3_MATH_EXPONENTIAL_LOGARITHMS_SUBTOPICS[topicId as ExponentialLogarithmsTopicId];
  }
  // Check if it's an S3 sets & Venn diagrams topic
  if (topicId.startsWith('s3-math-sets-')) {
    return S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS[topicId as SetsVennDiagramsTopicId];
  }
  // Check if it's an S3 exponents topic
  if (topicId.startsWith('s3-math-exponents-')) {
    return S3_MATH_EXPONENTS_SUBTOPICS[topicId as ExponentsTopicId];
  }
  // Check if it's an S3 surds & radicals topic
  if (topicId.startsWith('s3-math-surds-')) {
    return S3_MATH_SURDS_RADICALS_SUBTOPICS[topicId as SurdsRadicalsTopicId];
  }
  // Check if it's an S3 statistics topic
  if (topicId.startsWith('s3-math-statistics-')) {
    return S3_MATH_STATISTICS_SUBTOPICS[topicId as StatisticsTopicId];
  }
  // Check if it's an S3 relations-functions topic
  if (topicId.startsWith('s3-math-relations-')) {
    return S3_MATH_RELATIONS_FUNCTIONS_SUBTOPICS[topicId as RelationsFunctionsTopicId];
  }
  // Check if it's an S3 coordinate geometry topic
  if (topicId.startsWith('s3-math-coord-geom-')) {
    return S3_MATH_COORDINATE_GEOMETRY_SUBTOPICS[topicId as CoordinateGeometryTopicId];
  }
  // Check if it's an S4 differential calculus topic (direct topic IDs)
  const differentialCalculusTopics = ['s4-math-differential-calculus-limits', 's4-math-differential-calculus-gradient-tangent', 's4-math-differential-calculus-derivative-function', 's4-math-differential-calculus-first-principles', 's4-math-differential-calculus-differentiation-rules', 's4-math-differential-calculus-tangent-equations', 's4-math-differential-calculus-stationary-points'];
  if (differentialCalculusTopics.includes(topicId)) {
    return DIFFERENTIAL_CALCULUS_SUBTOPICS[topicId as DifferentialCalculusTopicId];
  }
  // Check if it's an S4 integration topic
  if (topicId.startsWith('s4-math-integration-')) {
    return S4_MATH_INTEGRATION_SUBTOPICS[topicId as IntegrationTopicId];
  }
  // Check if it's an S4 probability topic
  if (topicId.startsWith('s4-math-probability-')) {
    return S4_MATH_PROBABILITY_SUBTOPICS[topicId as ProbabilityTopicId];
  }
  // Check if it's an S4 quadratic functions topic
  if (topicId.startsWith('s4-math-quad-')) {
    return S4_MATH_QUADRATIC_FUNCTIONS_SUBTOPICS[topicId as QuadraticFunctionsTopicId];
  }
  // Return undefined for unknown topics
  return undefined;
};

/**
 * Validates and sanitizes mathTool object from AI responses
 * Returns validated mathTool or undefined if invalid
 */
const validateMathTool = (mathTool: any): import('../types/types').MathTool | undefined => {
  if (!mathTool) return undefined;

  // Check for old nested format
  if ('structure' in mathTool || 'description' in mathTool) {
    console.error('Invalid mathTool format: nested structure not allowed');
    return undefined;
  }

  // Validate required fields
  if (!mathTool.toolName || typeof mathTool.toolName !== 'string' || !mathTool.parameters) {
    console.warn('Invalid or empty mathTool object, filtering it out:', mathTool);
    return undefined;
  }

  return mathTool;
};

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  topicId = 's3-math-trigonometry-basic-ratios',
  onBackToTopics,
}) => {
  const { user, signInWithGoogle } = useAuth();
  const { theme } = useTheme();
  const [state, setState] = useState<ConversationState>({
    messages: [],
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
    }
  });

const [isLoading, setIsLoading] = useState(false);
  const [currentScore, setCurrentScore] = useState(0);
  const [subtopicComplete, setSubtopicComplete] = useState(false);
  const [problemsCompleted, setProblemsCompleted] = useState(0);
  const [problemState, setProblemState] = useState<ProblemState | null>(null);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const hasInitialized = useRef(false);

  // Audio Manager for TTS and Avatar control
  const { isPlaying, currentSubtitle, avatarState, audioDuration, speakText, stopSpeaking } = useAudioManager();
  const [showSubtitle] = useState(true); // User preference

  // Notes viewer state
  const [hasNotes, setHasNotes] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  // Error state
  const [_error, setError] = useState<string | null>(null);

  // Section progression state
  const [sectionProgress, setSectionProgress] = useState<SectionProgressState>({
    currentSection: '', // Will be set on load/init
    masteredSections: [],
    sectionHistory: []
  });

  const aiService = useRef<AIService | null>(null);
  const [fallbackMessage, setFallbackMessage] = useState<string | null>(null);
  const pendingNewProblemRef = useRef<{
    problemType: number;
    topicId: string;
    recentHistory?: string;
    evaluatorReasoning?: string;
  } | null>(null);
  const currentTopicRef = useRef<string>(topicId);
  const inputAreaRef = useRef<InputAreaHandle>(null);

  // Helper functions to extract metadata from topicId (subtopicId)
  const getPathIdFromSubtopicId = (subtopicId: string): string => {
    // s3-math-trigonometry-basic-ratios → s3-math-trigonometry
    const parts = subtopicId.split('-');
    return parts.slice(0, -1).join('-') || parts.join('-');
  };

  const getGradeFromSubtopicId = (subtopicId: string): string => {
    // s3-math-trigonometry-basic-ratios → Secondary 3
    // s4-math-probability-sample-space → Secondary 4
    const match = subtopicId.match(/^s(\d+)/);
    if (match) {
      return `Secondary ${match[1]}`;
    }
    return 'Secondary 3'; // fallback
  };

  // Auto-save to Firestore (debounced)
  const saveTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  useEffect(() => {
    // Clear existing timeout
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    // Only save if user is authenticated and has messages
    if (!user?.uid || state.messages.length === 0) {
      return;
    }

    // Debounce saves (3 seconds after last change)
    saveTimeoutRef.current = setTimeout(async () => {
      try {
        const topicConfig = getTopicConfig(topicId);
        const pathId = getPathIdFromSubtopicId(topicId);
        const grade = getGradeFromSubtopicId(topicId);
        const displayName = topicConfig?.displayName || 'Unknown Topic';

        const firestoreConv = conversationStateToFirestore(
          state,
          topicId, // subtopicId
          pathId,  // topicId (parent path)
          displayName,
          grade,
          sectionProgress
        );

        await saveLearnProgress(user.uid, topicId, firestoreConv);
        console.log('✅ Progress auto-saved to Firestore');
      } catch (error) {
        console.error('Failed to auto-save progress:', error);
      }
    }, 3000);

    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [
    user?.uid,
    topicId,
    state.messages.length,
    state.currentProblemType,
    state.sessionStats.correctAnswers,
    sectionProgress.currentSection,
    sectionProgress.masteredSections.length
  ]);

  // Initialize AI service once
  useEffect(() => {
    // Prevent duplicate initialization in React StrictMode
    if (hasInitialized.current) return;

    hasInitialized.current = true;

    // Initialize AI service with fallback
    const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const claudeApiKey = import.meta.env.VITE_CLAUDE_API_KEY;

    if (!geminiApiKey) {
      console.error('Gemini API key not found in environment variables');
      return;
    }

    // Callback to show fallback messages to user
    const showFallbackMessage = (message: string) => {
      setFallbackMessage(message);
      // Clear the message after a few seconds
      setTimeout(() => setFallbackMessage(null), 3000);
    };

    aiService.current = new FallbackAIService(
      geminiApiKey,
      claudeApiKey, // optional - can be undefined
      {
        maxRetries: 1, // Fast fail - single attempt before Claude fallback
        retryDelay: 0, // No delay when switching to Claude
        exponentialBackoff: false, // No exponential backoff needed
        showFallbackMessage: true
      },
      showFallbackMessage
    );

    console.log('AI Service initialized:', {
      primary: 'Gemini',
      fallback: claudeApiKey ? 'Claude' : 'None',
      hasFallback: Boolean(claudeApiKey)
    });
  }, []);

  // Check if notes are available for this topic
  useEffect(() => {
    notesLoader.hasNotes(topicId).then(setHasNotes);
  }, [topicId]);

  // Load session when topicId changes
  useEffect(() => {
    if (!aiService.current) return;

    console.log('Loading session for topic:', topicId);

    // Update current topic ref
    currentTopicRef.current = topicId;
    const loadingTopicId = topicId; // Capture for closure

    // Reset state completely when switching topics (including loading state)
    setIsLoading(false);
    setState({
      messages: [],
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
      }
    });
    setCurrentScore(0);
    setProblemsCompleted(0);
    setSubtopicComplete(false);
    setProblemState(null);

    // Auto-restore session from Firestore if available, otherwise start new conversation
    // Note: restoreFromSession handles both loading and fallback to initialization
    restoreFromSession();

    // Cleanup function - runs when topicId changes or component unmounts
    return () => {
      console.log('Cleaning up topic:', loadingTopicId);
      // Stop any playing audio when switching topics
      stopSpeaking();
      // Clear loading state when switching topics
      setIsLoading(false);
    };
  }, [topicId, stopSpeaking]);

  useEffect(() => {
    scrollToBottom();
  }, [state.messages]);

const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const createNewProblemState = (problemText: string, problemType: number, mathTool?: import('../types/types').MathTool): ProblemState => {
    return {
      currentProblemId: `problem_${Date.now()}`,
      hintsGivenForCurrentProblem: 0,
      attemptsForCurrentProblem: 0,
      problemStartTime: new Date(),
      currentProblemText: problemText,
      problemType,
      originalMathTool: mathTool // Store the original mathTool for validation
    };
  };

  const updateProblemState = (evaluatorOutput: EvaluatorOutput) => {
    if (!problemState) return;

    setProblemState(prev => {
      if (!prev) return prev;

      const updated = { ...prev };

      // NOTE: attempts are incremented BEFORE evaluator call (see handleStudentSubmit)
      // This function only updates reactive stats based on evaluator's response

      // Increment hints given when evaluator decides to give a hint
      if (evaluatorOutput.action === "GIVE_HINT") {
        updated.hintsGivenForCurrentProblem += 1;  // INCREMENT, not SET
      }

      return updated;
    });
  };

  const resetProblemState = (newProblemText: string, problemType: number, mathTool?: import('../types/types').MathTool) => {
    setProblemState(createNewProblemState(newProblemText, problemType, mathTool));
  };

  // Removed unused _handleStepByStepComplete callback

  const restoreFromSession = async () => {
    const restoreTopicId = currentTopicRef.current; // Capture current topic

    if (!user?.uid) {
      console.log('No authenticated user, starting new conversation');
      initializeConversation();
      return;
    }

    try {
      const savedConversation = await loadLearnProgress(user.uid, topicId);

      if (!savedConversation || savedConversation.messages.length === 0) {
        // No saved data, start new conversation
        console.log('No saved conversation found, starting new');
        if (currentTopicRef.current === restoreTopicId) {
          initializeConversation();
        }
        return;
      }

      // Check if topic hasn't changed
      if (currentTopicRef.current !== restoreTopicId) {
        console.log('Topic changed during restore, aborting');
        return;
      }

      // Convert Firestore format to local state
      const { conversationState: restoredState, sectionProgress: restoredSection } =
        conversationStateFromFirestore(savedConversation);

      // Restore conversation state
      setState(restoredState);

      // Restore problem state if exists
      if (restoredState.problemState) {
        setProblemState(restoredState.problemState);
      }

      // Restore section progress
      setSectionProgress(restoredSection);

      // Note: currentScore and problemsCompleted are derived from sessionStats
      // No need to restore them separately

      console.log('✅ Session restored from Firestore:', topicId, 'with', restoredState.messages.length, 'messages');
      console.log('📍 Restored section:', restoredSection.currentSection);
    } catch (error) {
      console.error('Failed to restore session from Firestore:', error);
      // Fallback to new conversation
      if (currentTopicRef.current === restoreTopicId) {
        initializeConversation();
      }
    }
  };

// Legacy function - removed as it's replaced by sequential architecture

const initializeConversation = async () => {
    if (!aiService.current) return;

    const initTopicId = currentTopicRef.current; // Capture current topic
    setIsLoading(true);
    try {
      // Initialize section progress for new session
      const topicConfig = getTopicConfig(topicId);
      console.log('Topic config for', topicId, ':', topicConfig);
      console.log('Has progressionStructure?', topicConfig?.progressionStructure);

      if (!topicConfig) {
        throw new Error(`No topic configuration found for: ${topicId}`);
      }

      const firstSection = (topicConfig as any).progressionStructure?.sections?.[0];
      if (firstSection && !sectionProgress.currentSection) {
        const initialSectionProgress: SectionProgressState = {
          currentSection: firstSection.id,
          masteredSections: [],
          sectionHistory: [{
            sectionId: firstSection.id,
            enteredAt: Date.now(),
            masteredAt: null,
            questionsAttempted: 0,
            questionsCorrect: 0,
            hintsUsed: 0
          }]
        };
        setSectionProgress(initialSectionProgress);
        console.log(`📍 Initialized section progression starting at: ${firstSection.id}`);
      }

      // Get initial greeting and first problem in a single LLM call
      const response = await aiService.current.generateInitialGreetingWithProblem(topicId);

      // Check if topic hasn't changed while we were waiting
      if (currentTopicRef.current !== initTopicId) {
        console.log('Topic changed during initialization, aborting');
        return;
      }

      // Speak the greeting via avatar (no chat message, just subtitle)
      const validatedMathTool = validateMathTool(response.mathTool);
      speakText(response.speech.text, response.speech.emotion, () => {
        // Check again before updating state
        if (currentTopicRef.current !== initTopicId) return;

        // After greeting is spoken, show the first problem
        addMessage('tutor', response.display.content, {
          problemType: 1,
          mathTool: validatedMathTool // Include optional mathTool if valid
        });

        // Initialize problem state for the first problem
        resetProblemState(response.display.content, 1, validatedMathTool);

        setState(prev => ({
          ...prev,
          sessionStats: {
            ...prev.sessionStats,
            problemsAttempted: 1
          }
        }));

        // Auto-focus input after first problem is displayed
        setTimeout(() => {
          inputAreaRef.current?.focus();
        }, 300);
      });

      // Don't add greeting as a message - it's spoken only

    } catch (error) {
      console.error('Failed to initialize conversation:', error);
      throw error;
    } finally {
      if (currentTopicRef.current === initTopicId) {
        setIsLoading(false);
      }
    }
  };

  const addMessage = (
    role: 'tutor' | 'student',
    content: string,
    metadata?: Message['metadata'],
    visualization?: import('../types/visualization').VisualizationData,
    explicitSectionId?: string  // Optional: pass section ID explicitly to avoid race conditions
  ) => {
    // Prevent empty messages from being added
    if (!content || !content.trim()) {
      console.warn('Attempted to add empty message, skipping');
      return;
    }

    // Use explicit sectionId if provided, otherwise fall back to current section from state
    const messageSectionId = explicitSectionId || sectionProgress.currentSection;

    const newMessage: Message = {
      id: Date.now().toString() + '-' + Math.random().toString(36).substr(2, 9),
      role,
      content: content.trim(),
      timestamp: new Date(),
      sectionId: messageSectionId, // Tag message with section (explicit or from state)
      metadata,
      visualization
    };

    console.log(`📝 Adding ${role} message to section: ${messageSectionId}`);


    setState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage]
    }));
  };

  // Handle section navigation - jump to any section
  const handleSectionClick = async (sectionId: string) => {
    if (!aiService.current) return;

    // Don't do anything if clicking current section
    if (sectionId === sectionProgress.currentSection) {
      console.log('Already on this section:', sectionId);
      return;
    }

    console.log(`🔀 Jumping to section: ${sectionId}`);

    // Update current section
    setSectionProgress(prev => ({
      ...prev,
      currentSection: sectionId
    }));

    // Check if this section has messages (already started)
    const sectionMessages = state.messages.filter(m => m.sectionId === sectionId);

    if (sectionMessages.length > 0) {
      // Resume existing conversation - generate summary and continue
      console.log(`📚 Resuming section ${sectionId} with ${sectionMessages.length} messages`);

      const sectionStats = sectionProgress.sectionHistory.find(e => e.sectionId === sectionId);
      if (!sectionStats) {
        console.error('Section stats not found for resume');
        return;
      }

      setIsLoading(true);
      try {
        // Generate resume with summary and next question
        const resumeResponse = await aiService.current.generateSectionResume(
          topicId,
          sectionId,
          sectionMessages.slice(-6),  // Last 6 messages for context
          sectionStats
        );

        // Speak the resume/summary
        const emotion = resumeResponse.speech.emotion || 'encouraging';
        const validatedMathTool = validateMathTool(resumeResponse.mathTool);
        speakText(resumeResponse.speech.text, emotion, () => {
          // After speech, show the question
          // IMPORTANT: Pass explicit sectionId to avoid race condition with state update
          addMessage('tutor', resumeResponse.display.content, {
            problemType: 1,
            mathTool: validatedMathTool
          }, undefined, sectionId);  // Explicit sectionId
          resetProblemState(resumeResponse.display.content, 1, validatedMathTool);
        });

      } catch (error) {
        console.error('Failed to generate section resume:', error);
        setError('Failed to resume section. Please try again.');
      } finally {
        setIsLoading(false);
      }
      return;
    }

    // New section - need to initialize and generate first question
    console.log(`🆕 Starting new section: ${sectionId}`);

    // Initialize section stats if not already present
    const existingEntry = sectionProgress.sectionHistory.find(e => e.sectionId === sectionId);
    if (!existingEntry) {
      setSectionProgress(prev => ({
        ...prev,
        sectionHistory: [
          ...prev.sectionHistory,
          {
            sectionId,
            enteredAt: Date.now(),
            masteredAt: null,
            questionsAttempted: 0,
            questionsCorrect: 0,
            hintsUsed: 0
          }
        ]
      }));
    }

    // Generate first question for this section
    setIsLoading(true);
    try {
      const response = await aiService.current.generateSectionStartQuestion(topicId, sectionId);

      // Speak the greeting/transition
      const emotion = response.speech.emotion || 'encouraging';
      const validatedMathTool = validateMathTool(response.mathTool);
      speakText(response.speech.text, emotion, () => {
        // After speech, show the problem
        // IMPORTANT: Pass explicit sectionId to avoid race condition with state update
        addMessage('tutor', response.display.content, {
          problemType: 1, // Start with basic problem type for new section
          mathTool: validatedMathTool
        }, undefined, sectionId);  // Explicit sectionId
        resetProblemState(response.display.content, 1, validatedMathTool);
      });

    } catch (error) {
      console.error('Failed to generate section start question:', error);
      setError('Failed to start new section. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

const handleStudentSubmit = async (input: string) => {
    if (!aiService.current || !input.trim() || !problemState) return;

    // Add student message
    addMessage('student', input);
    setIsLoading(true);

    try {
      // Check if subtopic is already complete
      if (subtopicComplete) {
        console.log('Subtopic already complete, generating celebration message');

        const sessionDuration = Math.round(
          (new Date().getTime() - state.sessionStats.startTime.getTime()) / 60000
        );

        const celebration = await aiService.current.generateCelebration(
          currentScore,
          problemsCompleted,
          sessionDuration,
          topicId
        );

        addMessage('tutor', celebration);
        return;
      }

      // Get recent conversation history (filtered by current section)
      // IMPORTANT: Add current student input to history since setState is async
      const currentStudentMessage: Message = {
        id: Date.now().toString() + '-temp',
        role: 'student',
        content: input.trim(),
        timestamp: new Date(),
        sectionId: sectionProgress.currentSection
      };

      const recentHistory = [
        ...state.messages.filter(m => m.sectionId === sectionProgress.currentSection),
        currentStudentMessage // Include the message we just added
      ].slice(-6);

      console.log('=== SEQUENTIAL AGENT FLOW START ===');
      console.log('Recent History Messages:', recentHistory.length);
      console.log('Recent History (formatted):', recentHistory.map(m => `${m.role}: ${m.content.substring(0, 50)}`));
      console.log('Problem State:', problemState);
      console.log('Student Response:', input);

      // CRITICAL: Increment attempts BEFORE evaluator sees the state
      // This ensures evaluator receives attemptCount = 1 on first submission
      const updatedProblemState = {
        ...problemState,
        attemptsForCurrentProblem: problemState.attemptsForCurrentProblem + 1
      };

      // Update state immediately so subsequent code sees the incremented count
      setProblemState(updatedProblemState);

      // STEP 1: Evaluator Agent - Evaluate answer and decide action
      const evaluatorOutput = await aiService.current.evaluateAnswer(
        input,
        recentHistory,
        updatedProblemState,  // Pass updated state with incremented attempts
        topicId,
        sectionProgress
      );

      console.log('Evaluator output:', evaluatorOutput);
      console.log('Action:', evaluatorOutput.action);
      console.log('Section mastered:', evaluatorOutput.sectionMastered);
      console.log('Advance to next section:', evaluatorOutput.advanceToNextSection);

      // STEP 2: Update problem state based on evaluator output
      // Note: attempts already incremented above, this updates hints only
      updateProblemState(evaluatorOutput);

      // Calculate time spent on current problem (for analytics)
      const timeSpentOnProblem = updatedProblemState.problemStartTime
        ? Math.round((Date.now() - updatedProblemState.problemStartTime.getTime()) / 1000)
        : 0;

      // Track problems completed (when evaluator decides to give new problem after correct answer)
      if (evaluatorOutput.answerCorrect && evaluatorOutput.action === "NEW_PROBLEM") {
        const newProblemsCompleted = problemsCompleted + 1;
        setProblemsCompleted(newProblemsCompleted);

        setState(prev => ({
          ...prev,
          sessionStats: {
            ...prev.sessionStats,
            correctAnswers: newProblemsCompleted
          }
        }));

        console.log(`⏱️ Problem completed in ${timeSpentOnProblem}s with ${updatedProblemState.attemptsForCurrentProblem} attempt(s) and ${updatedProblemState.hintsGivenForCurrentProblem} hint(s)`);
      }

      // Log timing for solution requests (student gave up)
      if (evaluatorOutput.action === "GIVE_SOLUTION") {
        console.log(`⏱️ Solution requested after ${timeSpentOnProblem}s with ${updatedProblemState.attemptsForCurrentProblem} attempt(s) and ${updatedProblemState.hintsGivenForCurrentProblem} hint(s)`);
      }

      // STEP 2.4: Update section stats for current section
      // Update questionsAttempted, questionsCorrect, and hintsUsed
      const currentSectionId = sectionProgress.currentSection;
      if (currentSectionId) {
        setSectionProgress(prev => ({
          ...prev,
          sectionHistory: prev.sectionHistory.map(entry => {
            if (entry.sectionId === currentSectionId) {
              return {
                ...entry,
                // Only increment when a NEW question is presented (not on every attempt)
                questionsAttempted: evaluatorOutput.action === "NEW_PROBLEM"
                  ? entry.questionsAttempted + 1
                  : entry.questionsAttempted,
                // Increment correct answers when answer is correct
                questionsCorrect: evaluatorOutput.answerCorrect
                  ? entry.questionsCorrect + 1
                  : entry.questionsCorrect,
                // Increment hints when evaluator gives a hint
                hintsUsed: evaluatorOutput.action === "GIVE_HINT"
                  ? entry.hintsUsed + 1
                  : entry.hintsUsed
              };
            }
            return entry;
          })
        }));
        console.log(`📊 Updated section stats for ${currentSectionId}: attempted ${evaluatorOutput.action === "NEW_PROBLEM" ? '+1' : '0'}, correct: ${evaluatorOutput.answerCorrect ? '+1' : '0'}, hints: ${evaluatorOutput.action === "GIVE_HINT" ? '+1' : '0'}`);
      }

      // STEP 2.4.1: Update session-wide stats for hints
      if (evaluatorOutput.action === "GIVE_HINT") {
        setState(prev => ({
          ...prev,
          sessionStats: {
            ...prev.sessionStats,
            hintsProvided: prev.sessionStats.hintsProvided + 1
          }
        }));
        console.log('📊 Session-wide hints provided incremented');
      }

      // STEP 2.5: Handle section mastery and progression
      if (evaluatorOutput.sectionMastered && currentSectionId && !sectionProgress.masteredSections.includes(currentSectionId)) {
        console.log(`✅ Section mastered: ${currentSectionId}`);

        const newMasteredSections = [...sectionProgress.masteredSections, currentSectionId];

        // Get next section from topic config if advancing
        let newCurrentSection = currentSectionId;
        if (evaluatorOutput.advanceToNextSection) {
          const topicConfig = getTopicConfig(topicId);
          if (topicConfig && 'progressionStructure' in topicConfig) {
            const sections = (topicConfig as any).progressionStructure.sections;
            const currentIndex = sections.findIndex((s: any) => s.id === currentSectionId);
            if (currentIndex >= 0 && currentIndex < sections.length - 1) {
              newCurrentSection = sections[currentIndex + 1].id;
              console.log(`📍 Section transition: ${currentSectionId} → ${newCurrentSection}`);
            }
          }
        }

        // Update section history: mark old section as mastered
        let updatedSectionHistory = sectionProgress.sectionHistory.map(entry =>
          entry.sectionId === currentSectionId
            ? { ...entry, masteredAt: Date.now() }
            : entry
        );

        // CRITICAL: If advancing to a NEW section, initialize its stats entry
        if (newCurrentSection !== currentSectionId) {
          const newSectionExists = updatedSectionHistory.some(entry => entry.sectionId === newCurrentSection);
          if (!newSectionExists) {
            const newSectionEntry: SectionProgressEntry = {
              sectionId: newCurrentSection,
              enteredAt: Date.now(),
              masteredAt: null,
              questionsAttempted: 0,
              questionsCorrect: 0,
              hintsUsed: 0
            };
            updatedSectionHistory = [...updatedSectionHistory, newSectionEntry];
            console.log(`📊 Initialized stats for new section: ${newCurrentSection}`);
          }
        }

        const updatedSectionProgress = {
          currentSection: newCurrentSection,
          masteredSections: newMasteredSections,
          sectionHistory: updatedSectionHistory
        };

        setSectionProgress(updatedSectionProgress);

        // Note: Auto-save to Firestore will trigger via useEffect (debounced)
        console.log(`✨ Section progress updated with ${newMasteredSections.length} mastered sections`);
      }

      // Check for subtopic completion (trust evaluator's CELEBRATE action only)
      if (evaluatorOutput.action === "CELEBRATE") {
        setSubtopicComplete(true);
        console.log('🎉 SUBTOPIC COMPLETED! Evaluator determined mastery achieved.');
      }

      // STEP 3: Use current problem type for execution
      // Note: For AI-First approach, evaluator decides difficulty progression organically
      // No score-based thresholds - trust the AI's judgment in progression model
      let problemTypeForExecution = state.currentProblemType;

      // STEP 4: Generate response based on action
      let tutorResponse: string;
      let structuredVisualizationData = undefined;

      if (evaluatorOutput.action === "GIVE_SOLUTION" && problemState?.currentProblemText) {
        // Use Solution Agent for all solutions (generates step-by-step text)
        // Single LLM call generates: solution text + optional mathTool
        console.log(`🎨 Using Solution Agent for solution`);
        try {
          structuredVisualizationData = await aiService.current.generateSolution(
            problemState.currentProblemText,
            problemTypeForExecution,
            topicId,
            recentHistory,
            input,
            evaluatorOutput.reasoning,
            undefined, // No solutionInstruction in new architecture
            sectionProgress.currentSection
          );
          console.log('Solution Agent data:', structuredVisualizationData);

          // Extract tutor response from structured data
          if (structuredVisualizationData) {
            // Use display.content as the tutor response (NEW FORMAT per INTERACTION_PROTOCOL)
            tutorResponse = structuredVisualizationData.display?.content || "Let me show you how to solve this.";
          } else {
            console.warn('Solution Agent returned null, using fallback');
            tutorResponse = "Let me show you how to solve this problem step by step.";
          }
        } catch (error) {
          console.error('Failed to generate solution:', error);
          tutorResponse = "Let me show you how to solve this problem step by step.";
          structuredVisualizationData = undefined;
        }
      } else if (evaluatorOutput.action === "NEW_PROBLEM") {
        // NEW_PROBLEM: Use generateQuestion directly (1 LLM call)
        // This returns both celebration speech AND the new problem
        console.log('🎯 Using Question Generation for NEW_PROBLEM (1 LLM call)');
        try {
          // Format recent history properly before passing to AI (filtered by current section)
          const { formatConversationHistory } = await import('../services/utils/responseParser');
          const formattedHistory = formatConversationHistory(
            state.messages
              .filter(m => m.sectionId === sectionProgress.currentSection)
              .slice(-6)
          );

          const questionResponse = await aiService.current.generateQuestion(
            problemTypeForExecution,
            topicId,
            {
              recentHistory: formattedHistory,
              evaluatorReasoning: evaluatorOutput.reasoning,
              currentSection: sectionProgress.currentSection
            }
          );

          console.log('Question response:', questionResponse);

          // Speak the celebration, then show the problem
          const emotion = questionResponse.speech.emotion || 'celebratory';
          const validatedMathTool = validateMathTool(questionResponse.mathTool);
          speakText(questionResponse.speech.text, emotion, () => {
            // After speech, show the problem
            addMessage('tutor', questionResponse.display.content, {
              problemType: problemTypeForExecution,
              mathTool: validatedMathTool // Include mathTool if present and valid
            });
            resetProblemState(questionResponse.display.content, problemTypeForExecution, validatedMathTool);
            setState(prev => ({
              ...prev,
              sessionStats: {
                ...prev.sessionStats,
                problemsAttempted: prev.sessionStats.problemsAttempted + 1
              }
            }));

            // Auto-focus input after new problem is displayed
            setTimeout(() => {
              inputAreaRef.current?.focus();
            }, 300);
          });
        } catch (error) {
          console.error('Failed to generate new problem:', error);
          throw error;
        }
      } else {
        // GIVE_HINT, CELEBRATE: Use Tutor Agent (returns speech + display)
        console.log('📝 Using Tutor Agent for:', evaluatorOutput.action);

        if (!problemState?.currentProblemText) {
          console.error('No current problem text for tutor agent');
          throw new Error('No current problem available');
        }

        const tutorResponse = await aiService.current.generateTutorResponse(
          evaluatorOutput,
          problemState.currentProblemText,
          input,
          recentHistory,
          problemTypeForExecution,
          topicId,
          sectionProgress.currentSection
        );

        console.log('Tutor response:', tutorResponse);

        // Extract and validate mathTool if present
        const mathTool = validateMathTool(tutorResponse.mathTool);

        // STEP 5a: Speak the response via avatar
        if (tutorResponse.speech && tutorResponse.speech.text) {
          const emotion = tutorResponse.speech.emotion || 'neutral';

          // Speak with callback to show display content after speech completes
          speakText(tutorResponse.speech.text, emotion, async () => {
            // STEP 5b: After speech, show display content (if any)
            // Skip if content is "none" or null (speech-only response)
            if (tutorResponse.display && tutorResponse.display.content &&
                tutorResponse.display.content !== "none" &&
                tutorResponse.display.content !== null) {
              addMessage('tutor', tutorResponse.display.content, {
                problemType: problemTypeForExecution,
                mathTool: mathTool // Include mathTool if present
              });

              // Auto-focus input after displaying hint
              if (tutorResponse.display.type === 'hint') {
                setTimeout(() => {
                  inputAreaRef.current?.focus();
                }, 300); // Small delay for smooth UX
              }
            }
          });
        }
      }

      // STEP 5: Handle GIVE_SOLUTION display
      if (evaluatorOutput.action === "GIVE_SOLUTION") {
        // Store the pending new problem details in ref (no re-render)
        // This must happen for ALL solutions, not just those with visualization
        // Format recent history properly before storing (filtered by current section)
        const { formatConversationHistory } = await import('../services/utils/responseParser');
        const formattedHistory = formatConversationHistory(
          state.messages
            .filter(m => m.sectionId === sectionProgress.currentSection)
            .slice(-6)
        );

        pendingNewProblemRef.current = {
          problemType: problemTypeForExecution,
          topicId,
          recentHistory: formattedHistory,
          evaluatorReasoning: evaluatorOutput.reasoning
        };

        if (structuredVisualizationData) {
          // New format: {speech, display, mathTool (optional)} per INTERACTION_PROTOCOL
          console.log('📝 Displaying solution with speech and optional mathTool');

          // Speak the intro speech, then show the solution
          const speechText = structuredVisualizationData.speech?.text || "Let me show you how to solve this.";
          const emotion = structuredVisualizationData.speech?.emotion || 'supportive';
          const validatedMathTool = validateMathTool(structuredVisualizationData.mathTool);
          speakText(speechText, emotion, () => {
            // Display the solution text with optional mathTool
            addMessage('tutor', tutorResponse, {
              problemType: problemTypeForExecution,
              mathTool: validatedMathTool,
              messageType: 'solution'
            });
          });
        }
      }

      // NEW_PROBLEM and GIVE_SOLUTION are now handled in the speech callback above
      // No additional logic needed here

      console.log('=== SEQUENTIAL AGENT FLOW COMPLETE ===');
      console.log('Final state - Problems completed:', problemsCompleted);
      console.log('Evaluator action taken:', evaluatorOutput.action);

    } catch (error) {
      console.error('Failed to process sequential agent flow:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Get current topic configuration for display
  const currentTopicConfig = getTopicConfig(topicId);
  const topicDisplayName = currentTopicConfig?.displayName || 'Fraction Division';

  // Get dynamic subtitle based on topic category
  const getTopicSubtitle = () => {
    if (topicId.startsWith('p6-math-fractions-')) {
      return 'Master fractions step by step!';
    }
    if (topicId.startsWith('s3-math-trigonometry-')) {
      return 'Master trigonometry through practice!';
    }
    if (topicId.startsWith('s3-math-circle-geometry-')) {
      return 'Master circle geometry theorems!';
    }
    if (topicId.startsWith('s3-math-quadratic-')) {
      return 'Master quadratic equations step by step!';
    }
    if (topicId.startsWith('s3-math-exponential-logarithms-')) {
      return 'Master exponential functions and logarithms!';
    }
    if (topicId.startsWith('s3-math-sets-')) {
      return 'Master sets and Venn diagrams!';
    }
    if (topicId.startsWith('s3-math-exponents-')) {
      return 'Master exponents and powers!';
    }
    if (topicId.startsWith('s3-math-surds-')) {
      return 'Master surds and radicals!';
    }
    if (topicId.startsWith('s3-math-statistics-')) {
      return 'Master statistics and data analysis!';
    }
    if (topicId.startsWith('s3-math-relations-')) {
      return 'Master functions and transformations!';
    }
    if (topicId.startsWith('s4-math-probability-')) {
      return 'Master probability and statistics!';
    }
    if (topicId.startsWith('s4-math-quad-')) {
      return 'Master quadratic functions and parabolas!';
    }
    return 'Master mathematics step by step!';
  };

  // Get dynamic icon based on topic category
  const getTopicIcon = () => {
    if (topicId.startsWith('p6-math-fractions-')) {
      return '➗';
    }
    if (topicId.startsWith('s3-math-trigonometry-')) {
      return '📐';
    }
    if (topicId.startsWith('s3-math-circle-geometry-')) {
      return '⭕';
    }
    if (topicId.startsWith('s3-math-quadratic-')) {
      return '📈';
    }
    if (topicId.startsWith('s3-math-exponential-logarithms-')) {
      return '📊';
    }
    if (topicId.startsWith('s3-math-sets-')) {
      return '🔄';
    }
    if (topicId.startsWith('s3-math-exponents-')) {
      return '⚡';
    }
    if (topicId.startsWith('s3-math-surds-')) {
      return '√';
    }
    if (topicId.startsWith('s3-math-statistics-')) {
      return '📊';
    }
    if (topicId.startsWith('s3-math-relations-')) {
      return '🔗';
    }
    if (topicId.startsWith('s4-math-probability-')) {
      return '🎲';
    }
    if (topicId.startsWith('s4-math-quad-')) {
      return '📊';
    }
    return '📚';
  };

  return (
    <>
      {/* Notes Viewer Overlay - shown on top without unmounting chat */}
      {showNotes && (
        <div className="fixed inset-0 z-50">
          <NotesViewer subtopicId={topicId} onClose={() => setShowNotes(false)} />
        </div>
      )}

      {/* Main Chat Interface - stays mounted */}
      <div
        className="flex flex-col h-full scroll-smooth"
        style={{
          backgroundColor: theme.colors.chat,
          color: theme.colors.textPrimary,
        }}
      >
      {/* Header with topic info and progress */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b"
        style={{
          borderColor: theme.colors.border,
          backgroundColor: theme.colors.chat,
        }}
      >
        {/* Left: Back button + Topic info */}
        <div className="flex items-center space-x-3">
          {/* Back Button */}
          {onBackToTopics && (
            <button
              onClick={onBackToTopics}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-colors focus:outline-none focus:ring-2"
              style={{
                backgroundColor: theme.colors.interactive,
                color: theme.colors.textSecondary,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.brand;
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.interactive;
                e.currentTarget.style.color = theme.colors.textSecondary;
              }}
              title="Back to topic selection"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-lg text-white"
            style={{ backgroundColor: theme.colors.brand }}
          >
            {getTopicIcon()}
          </div>
          <div>
            <h1 className="text-lg font-semibold" style={{ color: theme.colors.textPrimary }}>
              {topicDisplayName}
            </h1>
            <p className="text-sm" style={{ color: theme.colors.textMuted }}>{getTopicSubtitle()}</p>
          </div>
        </div>

        {/* Center: Section Progress Tracker */}
        {sectionProgress.currentSection && (
          <SectionProgressTracker
            topicId={topicId}
            sectionProgress={sectionProgress}
            onSectionClick={handleSectionClick}
            messages={state.messages}
            compact={true}
          />
        )}

        {/* Right: Notes + Auth buttons */}
        <div className="flex items-center space-x-4">
          {/* View Notes Button */}
          {hasNotes && (
            <button
              onClick={() => setShowNotes(true)}
              disabled={isLoading || isPlaying}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: theme.colors.interactive,
                color: theme.colors.textSecondary,
              }}
              onMouseEnter={(e) => {
                if (!isLoading && !isPlaying) {
                  e.currentTarget.style.backgroundColor = '#FFA500';
                  e.currentTarget.style.color = '#ffffff';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.interactive;
                e.currentTarget.style.color = theme.colors.textSecondary;
              }}
              title={isLoading || isPlaying ? "Wait for current response to complete" : "View study notes"}
            >
              <span className="text-lg">📖</span>
              <span className="text-sm font-medium">View Notes</span>
            </button>
          )}

          {/* Auth Button */}
          {user ? (
            <div className="flex items-center space-x-3">
              <img
                src={user.photoURL || undefined}
                alt={user.displayName || 'User'}
                className="w-7 h-7 rounded-full"
                style={{ backgroundColor: theme.colors.interactive }}
              />
              <button
                onClick={() => {/* Add logout logic if needed */}}
                className="text-sm hover:underline"
                style={{ color: theme.colors.textSecondary }}
                title="Signed in"
              >
                {user.displayName?.split(' ')[0] || 'User'}
              </button>
            </div>
          ) : (
            <button
              onClick={async () => {
                try {
                  await signInWithGoogle();
                } catch (error) {
                  console.error('Sign-in failed:', error);
                }
              }}
              className="px-3 py-1.5 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2"
              style={{
                backgroundColor: theme.colors.brand,
                color: '#ffffff',
              }}
            >
              Sign In
            </button>
          )}
        </div>
      </div>

      {/* Chat Messages */}
      <div
        className="overflow-y-auto"
        style={{ height: 0, flexGrow: 1 }}
      >
        <div className="max-w-5xl mx-auto p-3 space-y-4">
          {/* Avatar - Fixed Position (stays visible during scroll) */}
          {(state.messages.length === 0 || isPlaying) && (
            <div style={{
              position: 'fixed',
              top: '100px',
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
                showSubtitle={showSubtitle}
                size={120}
                audioDuration={audioDuration}
              />
            </div>
          )}
          {state.messages.map(message => {
            // Only pass the callback to messages that have step-by-step visualization OR plain text solution
            const hasStepByStepVisualization = message.visualization &&
              typeof message.visualization === 'object' &&
              Array.isArray(message.visualization.steps) &&
              message.visualization.steps.length > 0;

            const hasPlainTextSolution = message.visualization &&
              typeof message.visualization === 'object' &&
              message.visualization.isPlainTextSolution === true;

            return (
              <MessageBubble
                key={message.id}
                message={message}
                problemText={problemState?.currentProblemText}
                topicId={topicId}
                onContinue={(hasStepByStepVisualization || hasPlainTextSolution) ? () => handleStudentSubmit("continue learning") : undefined}
              />
            );
          })}
          {isLoading && (
            <div className="flex items-start space-x-3 justify-start">
              {/* Tutor Avatar */}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg text-white shadow-md"
                style={{ backgroundColor: theme.colors.brand }}
              >
                📚
              </div>

              {/* Loading Message */}
              <div
                className="relative rounded-2xl px-5 py-4 shadow-sm max-w-lg border"
                style={{
                  backgroundColor: theme.colors.tutorMessage,
                  borderColor: theme.colors.border,
                  color: theme.colors.textPrimary,
                }}
              >
                {/* Message tail */}
                <div
                  className="absolute top-4 w-3 h-3 transform rotate-45 border-l border-t -left-1.5"
                  style={{
                    backgroundColor: theme.colors.tutorMessage,
                    borderColor: theme.colors.border,
                  }}
                />

                <div className="text-xs font-semibold mb-2" style={{ color: theme.colors.textAccent }}>
                  Math Tutor
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: theme.colors.brand }} />
                    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: theme.colors.brand, animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: theme.colors.brand, animationDelay: '0.2s' }} />
                  </div>
                  <span className="text-sm ml-2" style={{ color: theme.colors.textMuted }}>
                    {fallbackMessage || 'Thinking...'}
                  </span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <InputArea ref={inputAreaRef} onSubmit={handleStudentSubmit} disabled={isLoading} topicId={topicId} />
      </div>
    </>
  );
};

export default ChatInterface;