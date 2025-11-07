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
import { S4_MATH_ADVANCED_TRIGONOMETRY_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s4-advanced-trigonometry';
import type { AdvancedTrigonometryTopicId } from '../prompt-library/subjects/mathematics/secondary/s4-advanced-trigonometry';
import { S4_VECTORS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s4-vectors';
import type { S4VectorsTopicId } from '../prompt-library/subjects/mathematics/secondary/s4-vectors';
import { S1_MATH_FACTORS_MULTIPLES_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-factors-multiples';
import type { FactorsMultiplesTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-factors-multiples';
import { S1_MATH_REAL_NUMBERS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-real-numbers';
import type { RealNumbersTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-real-numbers';
import { S1_MATH_APPROXIMATION_ESTIMATION_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-approximation-estimation';
import type { ApproximationEstimationTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-approximation-estimation';
import { S1_MATH_BASIC_ALGEBRA_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-basic-algebra';
import type { BasicAlgebraTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-basic-algebra';
import { S1_SIMPLE_LINEAR_EQUATIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-simple-linear-equations';
import type { SimpleLinearEquationsTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-simple-linear-equations';
import { S1_MATH_ANGLES_PARALLEL_LINES_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-angles-parallel-lines';
import type { AnglesParallelLinesTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-angles-parallel-lines';
import { S1_MATH_RATIO_RATE_SPEED_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-ratio-rate-speed';
import type { RatioRateSpeedTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-ratio-rate-speed';
import { S1_PERCENTAGE_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-percentage';
import type { PercentageTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-percentage';
import { S1_LINEAR_FUNCTIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-linear-functions-graphs';
import type { LinearFunctionsTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-linear-functions-graphs';
import { S1_MATH_PERIMETER_AREA_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-perimeter-area';
import type { PerimeterAreaTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-perimeter-area';
import { S1_MATH_DATA_HANDLING_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-data-handling';
import type { DataHandlingTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-data-handling';
import { LINEAR_GRAPHS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s2-linear-graphs';
import type { LinearGraphsTopicId } from '../prompt-library/subjects/mathematics/secondary/s2-linear-graphs';
import { LINEAR_INEQUALITIES_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s2-linear-inequalities';
import type { LinearInequalitiesTopicId } from '../prompt-library/subjects/mathematics/secondary/s2-linear-inequalities';
import { S2_MATH_EXPANSION_FACTORISATION_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s2-expansion-factorisation';
import type { ExpansionFactorisationTopicId } from '../prompt-library/subjects/mathematics/secondary/s2-expansion-factorisation';
import { S2_MATH_QUADRATIC_EQUATIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s2-quadratic-equations-graphs';
import type { QuadraticTopicId } from '../prompt-library/subjects/mathematics/secondary/s2-quadratic-equations-graphs';
import { S2_MATH_ALGEBRAIC_FRACTIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s2-algebraic-fractions-formulae';
import type { AlgebraicFractionsTopicId } from '../prompt-library/subjects/mathematics/secondary/s2-algebraic-fractions-formulae';
import type { ConversationState, Message, ProblemState, SectionProgressState, SectionProgressEntry, InitialGreetingResponse } from '../types/types';
import type { EvaluatorOutput } from '../prompt-library/types/agents';
import { notesLoader } from '../services/notesLoader';
import NotesViewer from './NotesViewer';
import SectionProgressTracker from './SectionProgressTracker';
import { getCachedGreeting, type CachedGreeting } from '../data/initialGreetingsCache';
import { preGeneratedQuestionsService } from '../services/preGeneratedQuestionsService';
import type { PreGeneratedQuestion } from '../data/learn/question-banks/types';

interface ChatInterfaceProps {
  topicId?: string;
  onBackToTopics?: () => void;
}

// Helper function to get topic config from S3 sources
const getTopicConfig = (topicId: string) => {
  // Check if it's an S1 factors & multiples topic
  if (topicId.startsWith('s1-math-factors-multiples-')) {
    return S1_MATH_FACTORS_MULTIPLES_SUBTOPICS[topicId as FactorsMultiplesTopicId];
  }
  // Check if it's an S1 real numbers topic
  if (topicId.startsWith('s1-math-real-numbers-')) {
    return S1_MATH_REAL_NUMBERS_SUBTOPICS[topicId as RealNumbersTopicId];
  }

  // Check if it's an S1 approximation & estimation topic
  if (topicId.startsWith('s1-math-approximation-estimation-')) {
    return S1_MATH_APPROXIMATION_ESTIMATION_SUBTOPICS[topicId as ApproximationEstimationTopicId];
  }
  // Check if it's an S1 basic algebra topic
  if (topicId.startsWith('s1-math-basic-algebra-')) {
    return S1_MATH_BASIC_ALGEBRA_SUBTOPICS[topicId as BasicAlgebraTopicId];
  }
  // Check if it's an S1 simple linear equations topic
  if (topicId.startsWith('s1-math-simple-linear-equations-')) {
    return S1_SIMPLE_LINEAR_EQUATIONS_SUBTOPICS[topicId as SimpleLinearEquationsTopicId];
  }
  // Check if it's an S1 angles parallel lines topic
  if (topicId.startsWith('s1-math-angles-parallel-lines-')) {
    return S1_MATH_ANGLES_PARALLEL_LINES_SUBTOPICS[topicId as AnglesParallelLinesTopicId];
  }
  // Check if it's an S1 ratio, rate, and speed topic
  if (topicId.startsWith('s1-math-ratio-rate-speed-')) {
    return S1_MATH_RATIO_RATE_SPEED_SUBTOPICS[topicId as RatioRateSpeedTopicId];
  }
  // Check if it's an S1 percentage topic
  if (topicId.startsWith('s1-math-percentage-')) {
    return S1_PERCENTAGE_SUBTOPICS[topicId as PercentageTopicId];
  }
  // Check if it's an S1 linear functions topic
  if (topicId.startsWith('s1-math-linear-functions-')) {
    return S1_LINEAR_FUNCTIONS_SUBTOPICS[topicId as LinearFunctionsTopicId];
  }
  // Check if it's an S1 perimeter area topic
  if (topicId.startsWith('s1-math-perimeter-area-')) {
    return S1_MATH_PERIMETER_AREA_SUBTOPICS[topicId as PerimeterAreaTopicId];
  }
  // Check if it's an S1 data handling topic
  if (topicId.startsWith('s1-math-data-')) {
    return S1_MATH_DATA_HANDLING_SUBTOPICS[topicId as DataHandlingTopicId];
  }
  // Check if it's an S2 linear graphs topic
  if (topicId.startsWith('s2-math-linear-graphs-')) {
    return LINEAR_GRAPHS_SUBTOPICS[topicId as LinearGraphsTopicId];
  }
  // Check if it's an S2 linear inequalities topic
  if (topicId.startsWith('s2-math-linear-inequalities-')) {
    return LINEAR_INEQUALITIES_SUBTOPICS[topicId as LinearInequalitiesTopicId];
  }
  // Check if it's an S2 expansion factorisation topic
  if (topicId.startsWith('s2-math-expansion-factorisation-')) {
    return S2_MATH_EXPANSION_FACTORISATION_SUBTOPICS[topicId as ExpansionFactorisationTopicId];
  }
  // Check if it's an S2 quadratic equations and graphs topic
  if (topicId.startsWith('s2-math-quadratics-')) {
    return S2_MATH_QUADRATIC_EQUATIONS_SUBTOPICS[topicId as QuadraticTopicId];
  }
  // Check if it's an S2 algebraic fractions topic
  if (topicId.startsWith('s2-math-algebraic-fractions-')) {
    return S2_MATH_ALGEBRAIC_FRACTIONS_SUBTOPICS[topicId as AlgebraicFractionsTopicId];
  }
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
  // Check if it's an S4 advanced trigonometry topic
  if (topicId.startsWith('s4-math-advanced-trig-')) {
    return S4_MATH_ADVANCED_TRIGONOMETRY_SUBTOPICS[topicId as AdvancedTrigonometryTopicId];
  }
  // Check if it's an S4 vectors topic
  if (topicId.startsWith('s4-math-vectors-')) {
    return S4_VECTORS_SUBTOPICS[topicId as S4VectorsTopicId];
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

/**
 * Check if a topic uses pre-generated questions
 * Returns true if the topic has usePreGeneratedQuestions flag set to true
 */
const usesPreGeneratedQuestions = (topicId: string): boolean => {
  const topicConfig = getTopicConfig(topicId);
  if (!topicConfig) return false;
  return (topicConfig as any).usePreGeneratedQuestions === true;
};

/**
 * Get the section index (0-based) from a section ID
 * Returns the index of the section in the progressionStructure, or 0 if not found
 */
const getSectionIndex = (topicId: string, sectionId: string): number => {
  const topicConfig = getTopicConfig(topicId);
  if (!topicConfig) return 0;

  const sections = (topicConfig as any).progressionStructure?.sections;
  if (!sections || !Array.isArray(sections)) return 0;

  const index = sections.findIndex((section: any) => section.id === sectionId);
  return index >= 0 ? index : 0;
};

/**
 * Create an initial greeting response with a pre-generated question
 * Used for topics with pre-generated question banks
 */
const createGreetingWithPreGeneratedQuestion = (
  question: PreGeneratedQuestion,
  topicConfig: any
): InitialGreetingResponse => {
  const topicName = topicConfig.displayName || 'this topic';

  // Include image only if imagePath is provided
  const displayContent = question.imagePath
    ? `${question.problemStatement}\n\n![Problem Diagram](${question.imagePath})`
    : question.problemStatement;

  return {
    speech: {
      text: `Let's start learning about ${topicName}! I've prepared a problem for you.`,
      emotion: 'encouraging'
    },
    display: {
      content: displayContent,
      showAfterSpeech: true
    },
    mathTool: undefined  // Pre-generated questions include images instead of interactive tools
  };
};

// Loading message mapping with contextual, emoji-enriched feedback
const LOADING_MESSAGES: Record<string, string> = {
  evaluating: '🤔 Analyzing your answer...',
  generating_hint: '💭 Crafting a helpful hint...',
  generating_solution: '📝 Preparing step-by-step solution...',
  generating_question: '✨ Creating a new problem...',
  celebrating: '🎉 Great work! Preparing celebration...',
  initializing: '📚 Starting your learning session...',
  loading_section: '📖 Loading section...'
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

  // Loading state with contextual stages
  type LoadingStage = 'evaluating' | 'generating_hint' | 'generating_solution' |
                       'generating_question' | 'celebrating' | 'initializing' |
                       'loading_section' | null;

  const [loadingState, setLoadingState] = useState<{ active: boolean; stage: LoadingStage }>({
    active: false,
    stage: null
  });

  // Legacy isLoading for backward compatibility
  const isLoading = loadingState.active;

  const [currentScore, setCurrentScore] = useState(0);
  const [subtopicComplete, setSubtopicComplete] = useState(false);
  const [problemsCompleted, setProblemsCompleted] = useState(0);
  const [problemState, setProblemState] = useState<ProblemState | null>(null);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const hasInitialized = useRef(false);

  // Audio Manager for TTS and Avatar control
  const { isPlaying, currentSubtitle, avatarState, audioDuration, speakText, speakTextWithAudio, stopSpeaking } = useAudioManager();
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
    setLoadingState({ active: false, stage: null });
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
      setLoadingState({ active: false, stage: null });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicId]);

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
    setLoadingState({ active: true, stage: 'initializing' });
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
            hintsUsed: 0,
            currentQuestionIndex: -1  // Initialize for pre-generated question topics
          }]
        };
        setSectionProgress(initialSectionProgress);
        console.log(`📍 Initialized section progression starting at: ${firstSection.id}`);
      }

      // Get initial greeting and first problem
      let response: InitialGreetingResponse;
      let cachedGreeting: CachedGreeting | undefined = undefined;
      const usePreGenerated = usesPreGeneratedQuestions(topicId);

      if (usePreGenerated) {
        // Load first question from pre-generated question bank
        console.log('🏦 Using PRE-GENERATED question bank flow');

        // Check if there's an intro section (sectionIndex: -1)
        const introQuestion = preGeneratedQuestionsService.getQuestionByIndex(
          topicId,
          -1,  // Intro section
          0    // First intro question
        );

        let targetSectionIndex: number;

        if (introQuestion) {
          // Use intro question and cached greeting
          console.log('📚 Found intro section (sectionIndex: -1), loading intro question first');
          targetSectionIndex = -1;

          // Try to get cached greeting for better intro experience
          const greetingCache = getCachedGreeting(topicId);
          if (greetingCache) {
            console.log('⚡ Using cached greeting with intro question');
            cachedGreeting = greetingCache;
            // Combine cached greeting speech with intro question display
            response = {
              speech: greetingCache.speech,
              display: {
                content: introQuestion.problemStatement,
                showAfterSpeech: true
              },
              mathTool: undefined
            };
          } else {
            // Fallback to generic greeting if no cached greeting
            response = createGreetingWithPreGeneratedQuestion(introQuestion, topicConfig);
          }
        } else {
          // No intro section, load Section 1 as usual
          console.log('📖 No intro section found, loading Section 1 directly');
          const sectionIndex = getSectionIndex(topicId, firstSection.id);
          const section1Question = preGeneratedQuestionsService.getQuestionByIndex(
            topicId,
            sectionIndex,
            0  // First question
          );

          if (!section1Question) {
            throw new Error(`No pre-generated questions found for topic ${topicId}, section ${sectionIndex}`);
          }

          targetSectionIndex = sectionIndex;
          response = createGreetingWithPreGeneratedQuestion(section1Question, topicConfig);
        }

        // Update section progress to set currentQuestionIndex
        // For intro section, we use sectionIndex -1 and questionIndex 0
        // For Section 1, we use the actual sectionIndex and questionIndex 0
        setSectionProgress(prev => ({
          ...prev,
          sectionHistory: prev.sectionHistory.map(entry =>
            entry.sectionId === firstSection.id
              ? {
                  ...entry,
                  currentQuestionIndex: targetSectionIndex === -1 ? -1 : 0  // -1 for intro, 0 for Section 1
                }
              : entry
          )
        }));
      } else {
        // Check cache first for instant load, fall back to AI generation
        cachedGreeting = getCachedGreeting(topicId);

        if (cachedGreeting) {
          console.log('⚡ Using cached initial greeting (instant load)');
          response = cachedGreeting;
        } else {
          console.log('🤖 No cached greeting found, generating with AI...');
          response = await aiService.current.generateInitialGreetingWithProblem(topicId);
        }
      }

      // Check if topic hasn't changed while we were waiting
      if (currentTopicRef.current !== initTopicId) {
        console.log('Topic changed during initialization, aborting');
        return;
      }

      // Speak the greeting via avatar (no chat message, just subtitle)
      // Use pre-generated audio if available for instant playback
      const validatedMathTool = validateMathTool(response.mathTool);
      const preGeneratedAudioUrl = cachedGreeting?.speech.preGeneratedAudioUrl;

      if (preGeneratedAudioUrl) {
        console.log('🎵 Using pre-generated audio (zero TTS delay)');
        speakTextWithAudio(response.speech.text, preGeneratedAudioUrl, response.speech.emotion, () => {
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
      } else {
        console.log('🔊 Generating TTS audio on-the-fly');
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
      }

      // Don't add greeting as a message - it's spoken only

    } catch (error) {
      console.error('Failed to initialize conversation:', error);
      throw error;
    } finally {
      if (currentTopicRef.current === initTopicId) {
        setLoadingState({ active: false, stage: null });
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

      setLoadingState({ active: true, stage: 'loading_section' });
      try {
        // Check if using pre-generated questions
        const usePreGenerated = usesPreGeneratedQuestions(topicId);
        let preGeneratedQuestion: PreGeneratedQuestion | undefined;

        if (usePreGenerated) {
          // Load current question from question bank
          const sectionIndex = getSectionIndex(topicId, sectionId);
          const currentQuestionIndex = sectionStats.currentQuestionIndex ?? 0;

          console.log(`🏦 Loading pre-generated question at index ${currentQuestionIndex} for resume`);

          preGeneratedQuestion = preGeneratedQuestionsService.getQuestionByIndex(
            topicId,
            sectionIndex,
            currentQuestionIndex
          ) || undefined;

          if (!preGeneratedQuestion) {
            console.warn(`No question found at index ${currentQuestionIndex}, using index 0`);
            preGeneratedQuestion = preGeneratedQuestionsService.getQuestionByIndex(
              topicId,
              sectionIndex,
              0
            ) || undefined;
          }
        }

        // Generate resume with summary and next question
        // Pass pre-generated question if available (AI will generate speech only)
        const resumeResponse = await aiService.current.generateSectionResume(
          topicId,
          sectionId,
          sectionMessages.slice(-6),  // Last 6 messages for context
          sectionStats,
          preGeneratedQuestion
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
        setLoadingState({ active: false, stage: null });
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
            hintsUsed: 0,
            currentQuestionIndex: -1  // Initialize for pre-generated question topics
          }
        ]
      }));
    }

    // Generate first question for this section
    setLoadingState({ active: true, stage: 'loading_section' });
    try {
      const usePreGenerated = usesPreGeneratedQuestions(topicId);
      let preGeneratedQuestion: PreGeneratedQuestion | undefined;

      if (usePreGenerated) {
        // Load first question from pre-generated question bank for this section
        console.log(`🏦 Loading first pre-generated question for section: ${sectionId}`);
        const sectionIndex = getSectionIndex(topicId, sectionId);
        console.log(`📊 Section index for ${sectionId}:`, sectionIndex);

        const firstQuestion = preGeneratedQuestionsService.getQuestionByIndex(
          topicId,
          sectionIndex,
          0  // First question
        );

        if (!firstQuestion) {
          throw new Error(`No pre-generated questions found for topic ${topicId}, section ${sectionIndex}`);
        }

        preGeneratedQuestion = firstQuestion;
        console.log(`✅ Pre-generated question loaded:`, preGeneratedQuestion.questionId);

        // Update section progress to set currentQuestionIndex to 0 for this section
        setSectionProgress(prev => ({
          ...prev,
          sectionHistory: prev.sectionHistory.map(entry =>
            entry.sectionId === sectionId
              ? { ...entry, currentQuestionIndex: 0 }
              : entry
          )
        }));
      }

      console.log(`📤 Calling generateSectionStartQuestion with preGenQ:`, preGeneratedQuestion ? `YES (${preGeneratedQuestion.questionId})` : 'NO');

      // Generate section start question (with or without pre-generated question)
      // If pre-generated question is provided, AI generates speech only
      const response = await aiService.current.generateSectionStartQuestion(
        topicId,
        sectionId,
        preGeneratedQuestion
      );

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
      setLoadingState({ active: false, stage: null });
    }
  };

const handleStudentSubmit = async (input: string) => {
    if (!aiService.current || !input.trim() || !problemState) return;

    // Add student message
    addMessage('student', input);

    // Stage 1: Start with evaluating stage
    setLoadingState({ active: true, stage: 'evaluating' });

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

      // ========================================
      // BRANCH: Check if topic uses pre-generated questions
      // ========================================
      const usePreGenerated = usesPreGeneratedQuestions(topicId);

      if (usePreGenerated) {
        // PRE-GENERATED QUESTION FLOW
        console.log('🏦 Using PRE-GENERATED question bank flow');

        // Get current section stats to find current question index
        const currentSectionStats = sectionProgress.sectionHistory.find(
          entry => entry.sectionId === sectionProgress.currentSection
        );

        if (!currentSectionStats) {
          console.error('No section stats found for current section');
          throw new Error('Section stats not initialized');
        }

        const currentQuestionIndex = currentSectionStats.currentQuestionIndex ?? -1;

        // Get topic config to extract section index
        const topicConfig = getTopicConfig(topicId);
        if (!topicConfig || !('progressionStructure' in topicConfig)) {
          throw new Error(`No progression structure found for topic: ${topicId}`);
        }

        const sections = (topicConfig as any).progressionStructure.sections;

        // Determine which section index to use for question bank
        // If currentQuestionIndex is -1, we're in the intro section
        let sectionIndex: number;
        if (currentQuestionIndex === -1) {
          // We're in intro section, use special sectionIndex -1
          console.log('📚 Currently in intro section (sectionIndex: -1)');
          sectionIndex = -1;
        } else {
          // Normal section, find index in progression structure
          sectionIndex = sections.findIndex((s: any) => s.id === sectionProgress.currentSection);

          if (sectionIndex === -1) {
            throw new Error(`Current section not found in progression structure: ${sectionProgress.currentSection}`);
          }
        }

        // Get current question from question bank
        const currentQuestion = preGeneratedQuestionsService.getQuestionByIndex(
          topicId,
          sectionIndex,
          sectionIndex === -1 ? 0 : currentQuestionIndex  // Intro uses question 0, others use tracked index
        );

        if (!currentQuestion) {
          console.error(`No question found at index ${currentQuestionIndex} for section ${sectionIndex}`);
          throw new Error('Current question not found in bank');
        }

        console.log(`📖 Using question ${currentQuestionIndex} from bank:`, currentQuestion.questionId);

        // Peek at next question for intelligent transition speech
        let nextQuestion: PreGeneratedQuestion | null = null;
        let isLastQuestionInSection = false;

        if (sectionIndex === -1) {
          // In intro section, peek at first question of Section 1 (sectionIndex 0)
          console.log('📚 Intro section: Peeking at Section 1, Question 1');
          nextQuestion = preGeneratedQuestionsService.getQuestionByIndex(topicId, 0, 0);
          isLastQuestionInSection = false; // Intro transitions to Section 1
        } else {
          // In regular section, peek at next question in same section
          nextQuestion = preGeneratedQuestionsService.getNextQuestion(
            topicId,
            sectionIndex,
            currentQuestionIndex
          );

          // Calculate if this is the last question in the section
          const totalQuestions = preGeneratedQuestionsService.getTotalQuestions(topicId, sectionIndex);
          isLastQuestionInSection = (currentQuestionIndex === totalQuestions - 1);
        }

        console.log(`📊 Next question preview: ${nextQuestion?.questionId || 'none'}, isLast: ${isLastQuestionInSection}`);

        // STEP 1: Pre-Generated Learn Evaluator - Evaluate with solution context
        const preGenEvaluatorOutput = await aiService.current.evaluateAnswerPreGenerated(
          input,
          recentHistory,
          updatedProblemState,
          topicId,
          sectionProgress,
          currentQuestion,
          nextQuestion ?? undefined,  // Pass next question for context (convert null to undefined)
          isLastQuestionInSection  // Pass last question flag
        );

        console.log('Pre-Gen Evaluator output:', preGenEvaluatorOutput);
        console.log('Action:', preGenEvaluatorOutput.action);

        // Update loading stage based on evaluator's decision
        const stageMap: Record<string, LoadingStage> = {
          'GIVE_HINT': 'generating_hint',
          'GIVE_SOLUTION': 'generating_solution',
          'NEW_PROBLEM': 'generating_question'
        };
        setLoadingState({ active: true, stage: preGenEvaluatorOutput.action ? stageMap[preGenEvaluatorOutput.action] : 'celebrating' });

        // STEP 2: Update problem state (hints tracking)
        if (preGenEvaluatorOutput.action === "GIVE_HINT") {
          setProblemState(prev => prev ? ({
            ...prev,
            hintsGivenForCurrentProblem: prev.hintsGivenForCurrentProblem + 1
          }) : prev);
        }

        // Calculate time spent on current problem (for analytics)
        const timeSpentOnProblem = updatedProblemState.problemStartTime
          ? Math.round((Date.now() - updatedProblemState.problemStartTime.getTime()) / 1000)
          : 0;

        // Track problems completed (when evaluator decides to give new problem after correct answer)
        if (preGenEvaluatorOutput.answerCorrect && preGenEvaluatorOutput.action === "NEW_PROBLEM") {
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

        // Log timing for solution requests
        if (preGenEvaluatorOutput.action === "GIVE_SOLUTION") {
          console.log(`⏱️ Solution requested after ${timeSpentOnProblem}s with ${updatedProblemState.attemptsForCurrentProblem} attempt(s) and ${updatedProblemState.hintsGivenForCurrentProblem} hint(s)`);
        }

        // STEP 2.4: Update section stats for current section
        const currentSectionId = sectionProgress.currentSection;
        if (currentSectionId) {
          setSectionProgress(prev => ({
            ...prev,
            sectionHistory: prev.sectionHistory.map(entry => {
              if (entry.sectionId === currentSectionId) {
                return {
                  ...entry,
                  questionsAttempted: preGenEvaluatorOutput.action === "NEW_PROBLEM"
                    ? entry.questionsAttempted + 1
                    : entry.questionsAttempted,
                  questionsCorrect: preGenEvaluatorOutput.answerCorrect
                    ? entry.questionsCorrect + 1
                    : entry.questionsCorrect,
                  hintsUsed: preGenEvaluatorOutput.action === "GIVE_HINT"
                    ? entry.hintsUsed + 1
                    : entry.hintsUsed
                };
              }
              return entry;
            })
          }));
          console.log(`📊 Updated section stats for ${currentSectionId}: attempted ${preGenEvaluatorOutput.action === "NEW_PROBLEM" ? '+1' : '0'}, correct: ${preGenEvaluatorOutput.answerCorrect ? '+1' : '0'}, hints: ${preGenEvaluatorOutput.action === "GIVE_HINT" ? '+1' : '0'}`);
        }

        // STEP 2.4.1: Update session-wide stats for hints
        if (preGenEvaluatorOutput.action === "GIVE_HINT") {
          setState(prev => ({
            ...prev,
            sessionStats: {
              ...prev.sessionStats,
              hintsProvided: prev.sessionStats.hintsProvided + 1
            }
          }));
          console.log('📊 Session-wide hints provided incremented');
        }

        // STEP 2.5: Section progression
        // NOTE: For pre-generated questions, section completion is determined by the system
        // based on isLastQuestionInSection, not by AI mastery decisions.
        // User manually advances to next section by clicking section pills.

        // STEP 3: Handle actions based on evaluator output
        // Note: action is always present (GIVE_HINT, GIVE_SOLUTION, or NEW_PROBLEM)
        let problemTypeForExecution = state.currentProblemType;

        if (preGenEvaluatorOutput.action === "NEW_PROBLEM") {
          // SPECIAL CASE: Last question in section
          // Play celebration speech but don't load another question
          if (isLastQuestionInSection) {
            console.log('🎉 SECTION COMPLETE! Last question answered correctly.');

            const celebrationText = preGenEvaluatorOutput.speech.text;
            const emotion = preGenEvaluatorOutput.speech.emotion || 'celebratory';

            speakText(celebrationText, emotion);

            console.log('=== SECTION COMPLETE - USER CAN ADVANCE VIA SECTION PILLS ===');
            return; // Don't load another question
          }

          // NORMAL CASE: Load next question
          console.log('🎯 Getting next question from question bank');

          // Special handling: Transition from intro section (-1) to Section 1 (0)
          let targetSectionIndex = sectionIndex;
          let targetQuestionIndex = currentQuestionIndex;

          if (sectionIndex === -1) {
            // We're in the intro section, transition to Section 1
            console.log('🎓 Transitioning from intro section to Section 1');
            targetSectionIndex = 0;  // Section 1
            targetQuestionIndex = -1;  // Will become 0 after calculation
          }

          const nextQuestion = preGeneratedQuestionsService.getNextQuestion(
            topicId,
            targetSectionIndex,
            targetQuestionIndex
          );

          if (!nextQuestion) {
            console.error(`Failed to get next question from question bank`);
            throw new Error('Failed to load next question from bank');
          }

          // Calculate the next index (cycles through questions)
          const totalQuestions = preGeneratedQuestionsService.getTotalQuestions(topicId, targetSectionIndex);
          const nextQuestionIndex = targetQuestionIndex === -1 ? 0 : (targetQuestionIndex + 1) % totalQuestions;

          console.log(`📖 Next question: ${nextQuestion.questionId} (section ${targetSectionIndex}, index ${nextQuestionIndex})`);

          // Update currentQuestionIndex in section progress
          setSectionProgress(prev => ({
            ...prev,
            sectionHistory: prev.sectionHistory.map(entry =>
              entry.sectionId === currentSectionId
                ? { ...entry, currentQuestionIndex: nextQuestionIndex }
                : entry
            )
          }));

          // Create celebration speech from evaluator or default
          const celebrationText = preGenEvaluatorOutput.speech?.text || "Great work! Let's try another one.";
          const emotion = preGenEvaluatorOutput.speech?.emotion || 'celebratory';

          // Speak the celebration, then show the problem
          speakText(celebrationText, emotion, () => {
            // After speech, show the problem (with image if available)
            const problemDisplay = nextQuestion.imagePath
              ? `${nextQuestion.problemStatement}\n\n![Problem Diagram](${nextQuestion.imagePath})`
              : nextQuestion.problemStatement;

            addMessage('tutor', problemDisplay, {
              problemType: problemTypeForExecution
            });

            resetProblemState(nextQuestion.problemStatement, problemTypeForExecution, undefined);

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

        } else if (preGenEvaluatorOutput.action === "GIVE_HINT") {
          // Use speech/display directly from evaluator (no Tutor agent)
          console.log('💭 Using direct hint from Pre-Gen Evaluator');

          if (!preGenEvaluatorOutput.speech || !preGenEvaluatorOutput.display) {
            console.error('Missing speech or display in Pre-Gen Evaluator output');
            throw new Error('Incomplete evaluator output');
          }

          const emotion = preGenEvaluatorOutput.speech.emotion || 'neutral';

          // Speak with callback to show display content after speech completes
          speakText(preGenEvaluatorOutput.speech.text, emotion, async () => {
            // After speech, show display content
            if (preGenEvaluatorOutput.display!.content) {
              addMessage('tutor', preGenEvaluatorOutput.display!.content, {
                problemType: problemTypeForExecution
              });

              // Auto-focus input after displaying hint
              setTimeout(() => {
                inputAreaRef.current?.focus();
              }, 300);
            }
          });

        } else if (preGenEvaluatorOutput.action === "GIVE_SOLUTION") {
          // Use speech/display directly from evaluator (no Solution agent, no nested solution object)
          console.log('📝 Using direct solution from Pre-Gen Evaluator');

          if (!preGenEvaluatorOutput.speech || !preGenEvaluatorOutput.display) {
            console.error('Missing speech or display in Pre-Gen Evaluator output');
            throw new Error('Incomplete evaluator output for GIVE_SOLUTION');
          }

          const speechText = preGenEvaluatorOutput.speech.text;
          const emotion = preGenEvaluatorOutput.speech.emotion || 'supportive';

          // Speak the intro speech, then show the solution
          speakText(speechText, emotion, () => {
            // Display the step-by-step solution
            addMessage('tutor', preGenEvaluatorOutput.display!.content, {
              problemType: problemTypeForExecution,
              messageType: 'solution'
            });
          });

          // Store pending new problem details (for "Next Problem" button)
          const { formatConversationHistory } = await import('../services/utils/responseParser');
          const formattedHistory = formatConversationHistory(
            state.messages
              .filter(m => m.sectionId === sectionProgress.currentSection)
              .slice(-6)
          );

          pendingNewProblemRef.current = {
            problemType: problemTypeForExecution,
            topicId,
            recentHistory: formattedHistory
          };
        }

        console.log('=== PRE-GENERATED QUESTION FLOW COMPLETE ===');
        console.log('Final state - Problems completed:', problemsCompleted);
        console.log('Action taken:', preGenEvaluatorOutput.action);

        // Exit early - pre-generated flow complete
        return;
      }

      // ========================================
      // REGULAR FLOW (AI-Generated Questions)
      // ========================================
      console.log('🤖 Using REGULAR AI-generated question flow');

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

      // Stage 2: Update loading stage based on evaluator's decision
      const stageMap: Record<string, LoadingStage> = {
        'GIVE_HINT': 'generating_hint',
        'GIVE_SOLUTION': 'generating_solution',
        'NEW_PROBLEM': 'generating_question',
        'CELEBRATE': 'celebrating'
      };
      setLoadingState({ active: true, stage: stageMap[evaluatorOutput.action] || null });

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
              hintsUsed: 0,
              currentQuestionIndex: -1  // Initialize for consistency (used by pre-generated topics)
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
      // Clear loading state
      setLoadingState({ active: false, stage: null });
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
    if (topicId.startsWith('s4-math-advanced-trig-')) {
      return 'Master advanced trigonometry!';
    }
    if (topicId.startsWith('s4-math-vectors-')) {
      return 'Master vectors and geometric operations!';
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
    if (topicId.startsWith('s4-math-advanced-trig-')) {
      return '∠';
    }
    if (topicId.startsWith('s4-math-vectors-')) {
      return '→';
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
                    {fallbackMessage || (loadingState.stage ? LOADING_MESSAGES[loadingState.stage] : 'Thinking...')}
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