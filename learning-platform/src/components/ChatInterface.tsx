import React, { useState, useEffect, useRef, useCallback } from 'react';
import MessageBubble from './MessageBubble';
import InputArea, { type InputAreaHandle } from './InputArea';
import Avatar from './Avatar';
import FallbackAIService from '../services/fallbackAIService';
import type { AIService } from '../services/aiService';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../hooks/useTheme';
import { progressService } from '../services/progressService';
import { sessionStorage } from '../services/sessionStorage';
import { useSessionPersistence } from '../hooks/useSessionPersistence';
import { useAudioManager } from '../hooks/useAudioManager';
import { stripLatexForSpeech } from '../utils/textUtils';
import { safeParseJSON } from '../services/utils/responseParser';
import { TOPIC_IDS } from '../prompts/topicIds';
import { P6_MATH_FRACTIONS } from '../prompts/topics/P6-Math-Fractions';
import type { TopicId } from '../prompts/topics/P6-Math-Fractions';
import { S3_MATH_TRIGONOMETRY } from '../prompts/topics/S3-Math-Trigonometry';
import type { TrigonometryTopicId } from '../prompts/topics/S3-Math-Trigonometry';
import { S3_MATH_CIRCLE_GEOMETRY } from '../prompts/topics/S3-Math-CircleGeometry';
import type { CircleGeometryTopicId } from '../prompts/topics/S3-Math-CircleGeometry';
import { S3_MATH_QUADRATIC_EQUATIONS } from '../prompts/topics/S3-Math-QuadraticEquations';
import type { QuadraticEquationsTopicId } from '../prompts/topics/S3-Math-QuadraticEquations';
import type { ConversationState, Message, ProblemState, EvaluatorInstruction, SectionProgressState, SectionProgressEntry } from '../types/types';
import { notesLoader } from '../services/notesLoader';
import NotesViewer from './NotesViewer';
import SectionProgressTracker from './SectionProgressTracker';

interface ChatInterfaceProps {
  topicId?: string;
  onBackToTopics?: () => void;
}

// Helper function to get topic config from either P6 or S3 sources
const getTopicConfig = (topicId: string) => {
  // Check if it's a P6 fractions topic
  if (topicId.startsWith('p6-math-fractions-')) {
    return P6_MATH_FRACTIONS[topicId as TopicId];
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
  // Fallback to P6 fractions for unknown topics
  return P6_MATH_FRACTIONS[topicId as TopicId];
};

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  topicId = TOPIC_IDS.P6_MATH_FRACTIONS_DIVIDING_WHOLE_NUMBERS,
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
  const [showSubtitle, setShowSubtitle] = useState(true); // User preference

  // Notes viewer state
  const [hasNotes, setHasNotes] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

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

  // Auto-save session state
  useSessionPersistence({
    topicId,
    conversationState: state,
    currentScore,
    problemsCompleted,
    subtopicComplete,
    problemState: problemState || undefined,
    sectionProgress
  });

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

    // Load previous progress if available
    loadProgress();

    // Auto-restore session if available, otherwise start new conversation
    const savedSession = sessionStorage.loadSession(topicId);
    if (savedSession) {
      restoreFromSession();
    } else {
      initializeConversation();
    }

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

  // Progress persistence functions
  const loadProgress = () => {
    const savedProgress = progressService.loadProgress(topicId, user?.uid);
    if (savedProgress) {
      setCurrentScore(savedProgress.score);
      setState(prev => ({
        ...prev,
        sessionStats: {
          ...prev.sessionStats,
          problemsAttempted: savedProgress.problemsAttempted,
          correctAnswers: savedProgress.correctAnswers
        },
        currentProblemType: savedProgress.currentProblemType
      }));

      // Load section progress if available
      if (savedProgress.sectionProgress) {
        setSectionProgress(savedProgress.sectionProgress);
      }
    }
  };

  const saveProgress = () => {
    progressService.saveProgress(
      topicId,
      state.sessionStats,
      currentScore,
      state.currentProblemType,
      user?.uid,
      sectionProgress
    );
  };

  // Helper functions for problem state management
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

  const updateProblemState = (instruction: EvaluatorInstruction) => {
    if (!problemState) return;

    setProblemState(prev => {
      if (!prev) return prev;

      const updated = { ...prev };

      // Increment attempts for this problem
      updated.attemptsForCurrentProblem += 1;

      // Update hints given based on instruction
      if (instruction.action === "GIVE_HINT") {
        updated.hintsGivenForCurrentProblem = instruction.hintLevel || 1;
      }

      return updated;
    });
  };

  const resetProblemState = (newProblemText: string, problemType: number, mathTool?: import('../types/types').MathTool) => {
    setProblemState(createNewProblemState(newProblemText, problemType, mathTool));
  };

  // Callback for when step-by-step visualization completes (Continue button clicked)
  const handleStepByStepComplete = useCallback(async () => {
    const pendingNewProblem = pendingNewProblemRef.current;
    if (!pendingNewProblem || !aiService.current) return;

    console.log('🎬 ChatInterface: Step-by-step complete, Continue button clicked');

    try {
      const questionResponse = await aiService.current.generateQuestion(
        pendingNewProblem.problemType,
        pendingNewProblem.topicId,
        {
          recentHistory: pendingNewProblem.recentHistory,
          evaluatorReasoning: pendingNewProblem.evaluatorReasoning
        }
      );
      console.log('📝 ChatInterface: Adding new problem after step-by-step completion');

      // Speak the celebration/transition, then show the problem
      const emotion = questionResponse.speech.emotion || 'celebratory';
      speakText(questionResponse.speech.text, emotion, () => {
        // After speech, show the problem
        addMessage('tutor', questionResponse.display.content, {
          problemType: pendingNewProblem.problemType,
          mathTool: questionResponse.mathTool // Include mathTool if present
        });
        resetProblemState(questionResponse.display.content, pendingNewProblem.problemType, questionResponse.mathTool);
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

      pendingNewProblemRef.current = null;
      console.log('✅ ChatInterface: New problem added after step-by-step completion');
    } catch (error) {
      console.error('Failed to generate new problem after step-by-step completion:', error);
      pendingNewProblemRef.current = null;
    }
  }, []); // No dependencies - callback is now stable

  const restoreFromSession = async () => {
    const restoreTopicId = currentTopicRef.current; // Capture current topic
    const sessionData = sessionStorage.loadSession(topicId);

    if (!sessionData || sessionData.messages.length === 0) {
      // Fallback to new conversation if session is empty or corrupted
      console.log('No valid session data or empty messages, starting new conversation');
      if (currentTopicRef.current === restoreTopicId) {
        initializeConversation();
      }
      return;
    }

    try {
      // Check if topic hasn't changed
      if (currentTopicRef.current !== restoreTopicId) {
        console.log('Topic changed during restore, aborting');
        return;
      }

      // Restore conversation state
      setState(prevState => ({
        ...prevState,
        messages: sessionData.messages,
        currentProblemType: sessionData.currentProblemType
      }));

      // Restore other state variables
      setCurrentScore(sessionData.currentScore);
      setProblemsCompleted(sessionData.problemsCompleted);
      setSubtopicComplete(sessionData.subtopicComplete);

      if (sessionData.problemState) {
        setProblemState(sessionData.problemState);
      }

      // Restore section progress
      if (sessionData.sectionProgress) {
        setSectionProgress(sessionData.sectionProgress);
        console.log('📍 Restored section progress:', sessionData.sectionProgress.currentSection);
      }

      console.log('Session restored successfully for topic:', topicId, 'with', sessionData.messages.length, 'messages');
    } catch (error) {
      console.error('Failed to restore session:', error);
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
      speakText(response.speech.text, response.speech.emotion, () => {
        // Check again before updating state
        if (currentTopicRef.current !== initTopicId) return;

        // After greeting is spoken, show the first problem
        addMessage('tutor', response.display.content, {
          problemType: 1,
          mathTool: response.mathTool // Include optional mathTool if AI provided it
        });

        // Initialize problem state for the first problem
        resetProblemState(response.display.content, 1, response.mathTool);

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
        speakText(resumeResponse.speech.text, emotion, () => {
          // After speech, show the question
          // IMPORTANT: Pass explicit sectionId to avoid race condition with state update
          addMessage('tutor', resumeResponse.display.content, {
            problemType: 1,
            mathTool: resumeResponse.mathTool
          }, undefined, sectionId);  // Explicit sectionId
          resetProblemState(resumeResponse.display.content, 1, resumeResponse.mathTool);
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
      speakText(response.speech.text, emotion, () => {
        // After speech, show the problem
        // IMPORTANT: Pass explicit sectionId to avoid race condition with state update
        addMessage('tutor', response.display.content, {
          problemType: 1, // Start with basic problem type for new section
          mathTool: response.mathTool
        }, undefined, sectionId);  // Explicit sectionId
        resetProblemState(response.display.content, 1, response.mathTool);
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
      const recentHistory = state.messages
        .filter(m => m.sectionId === sectionProgress.currentSection)
        .slice(-6);

      console.log('=== SEQUENTIAL AGENT FLOW START ===');
      console.log('Problem State:', problemState);
      console.log('Student Response:', input);

      // STEP 1: Evaluator Agent - Analyze and provide instruction
      const instruction = await aiService.current.evaluateAndInstruct(
        input,
        recentHistory,
        problemState,
        topicId,
        sectionProgress // Pass current section state
      );

      console.log('Evaluator instruction:', instruction);
      console.log('Section progression:', instruction.progression);

      // STEP 2: Update explicit state based on instruction
      updateProblemState(instruction);

      // Track problems completed
      if (instruction.isMainProblemSolved) {
        const newProblemsCompleted = problemsCompleted + 1;
        setProblemsCompleted(newProblemsCompleted);

        setState(prev => ({
          ...prev,
          sessionStats: {
            ...prev.sessionStats,
            correctAnswers: newProblemsCompleted
          }
        }));
      }

      // STEP 2.4: Update section stats for current section
      // Update questionsAttempted, questionsCorrect, and hintsUsed
      const currentSectionId = instruction.progression?.currentSection || sectionProgress.currentSection;
      if (currentSectionId) {
        setSectionProgress(prev => ({
          ...prev,
          sectionHistory: prev.sectionHistory.map(entry => {
            if (entry.sectionId === currentSectionId) {
              return {
                ...entry,
                questionsAttempted: entry.questionsAttempted + 1,
                questionsCorrect: instruction.answerCorrect
                  ? entry.questionsCorrect + 1
                  : entry.questionsCorrect,
                hintsUsed: instruction.action === "GIVE_HINT"
                  ? entry.hintsUsed + 1
                  : entry.hintsUsed
              };
            }
            return entry;
          })
        }));
        console.log(`📊 Updated section stats for ${currentSectionId}: attempted +1, correct: ${instruction.answerCorrect ? '+1' : '0'}, hints: ${instruction.action === "GIVE_HINT" ? '+1' : '0'}`);
      }

      // STEP 2.5: Update section progression based on evaluator feedback
      if (instruction.progression) {
        const currentSectionId = instruction.progression.currentSection;
        const sectionMastered = instruction.progression.sectionMastered;

        // Update current section if it changed
        if (currentSectionId && currentSectionId !== sectionProgress.currentSection) {
          console.log(`📍 Section transition: ${sectionProgress.currentSection} → ${currentSectionId}`);

          setSectionProgress(prev => ({
            ...prev,
            currentSection: currentSectionId
          }));
        }

        // Handle section mastery
        if (sectionMastered && currentSectionId && !sectionProgress.masteredSections.includes(currentSectionId)) {
          console.log(`✅ Section mastered: ${currentSectionId}`);

          const newMasteredSections = [...sectionProgress.masteredSections, currentSectionId];
          const newCurrentSection = instruction.progression.nextSection || currentSectionId;

          const updatedSectionProgress = {
            currentSection: newCurrentSection,
            masteredSections: newMasteredSections,
            sectionHistory: sectionProgress.sectionHistory.map(entry =>
              entry.sectionId === currentSectionId
                ? { ...entry, masteredAt: Date.now() }
                : entry
            )
          };

          setSectionProgress(updatedSectionProgress);

          // IMPORTANT: Save to BOTH session storage AND progress service
          // Save section progress to progressService (persistent localStorage)
          progressService.saveProgress(
            topicId,
            state.sessionStats,
            currentScore,
            state.currentProblemType,
            user?.uid,
            updatedSectionProgress
          );

          console.log(`💾 Saved progress with ${newMasteredSections.length} mastered sections`);
        }
      }

      // Check for subtopic completion (trust evaluator's CELEBRATE action only)
      if (instruction.action === "CELEBRATE") {
        setSubtopicComplete(true);
        console.log('🎉 SUBTOPIC COMPLETED! Evaluator determined mastery achieved.');
      }

      // STEP 3: Use current problem type for execution
      // Note: For AI-First approach, evaluator decides difficulty progression organically
      // No score-based thresholds - trust the AI's judgment in progression model
      let problemTypeForExecution = state.currentProblemType;

      // STEP 3.5: Check topic config to override visualization setting
      // Config has final say on whether visualization is enabled for this problem type
      if (instruction.action === "GIVE_SOLUTION") {
        const topicConfig = getTopicConfig(topicId);
        if (topicConfig && 'VISUALIZATION_CONFIG' in topicConfig) {
          const vizConfig = (topicConfig as any).VISUALIZATION_CONFIG[problemTypeForExecution];
          if (vizConfig) {
            // Config overrides evaluator's decision
            instruction.includeVisualization = vizConfig.includeVisualization === true;
            console.log(`📐 Visualization ${instruction.includeVisualization ? 'enabled' : 'disabled'} for problem type ${problemTypeForExecution} per config`);
          }
        }
      }

      // STEP 4: Generate response based on action
      let tutorResponse: string;
      let structuredVisualizationData = undefined;

      if (instruction.action === "GIVE_SOLUTION" && problemState?.currentProblemText) {
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
            instruction.reasoning || 'Student needs help with this problem',
            instruction.solutionInstruction
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
      } else if (instruction.action === "NEW_PROBLEM") {
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
              evaluatorReasoning: instruction.reasoning,
              questionInstruction: instruction.questionInstruction
            }
          );

          console.log('Question response:', questionResponse);

          // Speak the celebration, then show the problem
          const emotion = questionResponse.speech.emotion || 'celebratory';
          speakText(questionResponse.speech.text, emotion, () => {
            // After speech, show the problem
            addMessage('tutor', questionResponse.display.content, {
              problemType: problemTypeForExecution,
              mathTool: questionResponse.mathTool // Include mathTool if present
            });
            resetProblemState(questionResponse.display.content, problemTypeForExecution, questionResponse.mathTool);
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
        console.log('📝 Using Tutor Agent for:', instruction.action);
        const tutorResponseRaw = await aiService.current.executeInstruction(
          instruction,
          recentHistory,
          input,
          problemTypeForExecution,
          topicId
        );
        console.log('Tutor response (raw):', tutorResponseRaw);

        // Parse the structured response (speech + display)
        // CRITICAL: Use safeParseJSON which tries direct parsing first, then applies fixes only if needed!
        // This prevents double-escaping LaTeX when the AI sends properly formatted JSON.
        // LaTeX like $\theta$ will be correctly rendered after parsing.
        // See: src/services/utils/responseParser.ts for safeParseJSON() implementation
        try {
          console.log('🔍 LaTeX Debug - Raw JSON from AI:', tutorResponseRaw.substring(0, 500));
          const parsedResponse = safeParseJSON<any>(
            tutorResponseRaw,
            ['speech', 'display'], // Expected keys
            {
              speech: { text: '', emotion: 'neutral' },
              display: { content: tutorResponseRaw, showAfterSpeech: false, type: 'hint' }
            }
          );
          console.log('✅ LaTeX Debug - Parsed response:', parsedResponse);
          if (parsedResponse.display?.content) {
            console.log('📝 LaTeX Debug - Display content:', parsedResponse.display.content);
            // Check for LaTeX patterns
            const latexMatches = parsedResponse.display.content.match(/\$[^$]+\$/g);
            if (latexMatches) {
              console.log('🔢 LaTeX Debug - Found LaTeX expressions:', latexMatches);
              latexMatches.forEach((match: string, index: number) => {
                // Count backslashes in the match
                const backslashCount = (match.match(/\\/g) || []).length;
                console.log(`  [${index}] "${match}" - ${backslashCount} backslash(es)`);
              });
            }
          }

          // Check for difficulty progression signal from AI
          if (parsedResponse.assessment?.readyToAdvance === true && state.currentProblemType < 3) {
            const newDifficulty = state.currentProblemType + 1;
            const difficultyLabel = newDifficulty === 2 ? 'intermediate' : 'advanced';
            console.log(`📈 AI signals readiness to advance: ${state.currentProblemType} → ${newDifficulty} (${difficultyLabel})`);

            setState(prev => ({
              ...prev,
              currentProblemType: newDifficulty
            }));
          }

          // Extract mathTool if present - must be flat format with toolName, parameters, caption
          const mathTool = parsedResponse.mathTool;
          if (mathTool) {
            // Fail fast if using old nested format
            if (mathTool.structure || mathTool.description) {
              throw new Error('Invalid mathTool format: Do not use wrapper fields like "structure" or "description". Use flat format: {toolName, parameters, caption}');
            }
            // Validate required fields
            if (!mathTool.toolName || !mathTool.parameters) {
              throw new Error(`Invalid mathTool: missing required fields. Got: ${JSON.stringify(mathTool)}`);
            }
          }

          // STEP 5a: Speak the introduction via avatar
          if (parsedResponse.speech && parsedResponse.speech.text) {
            const emotion = parsedResponse.speech.emotion || 'neutral';

            // Speak with callback to show display content after speech completes
            speakText(parsedResponse.speech.text, emotion, async () => {
              // STEP 5b: After speech, show display content (if any)
              // Skip if content is "none" or null (speech-only response)
              if (parsedResponse.display && parsedResponse.display.content &&
                  parsedResponse.display.content !== "none" &&
                  parsedResponse.display.content !== null) {
                addMessage('tutor', parsedResponse.display.content, {
                  problemType: problemTypeForExecution,
                  mathTool: mathTool // Include mathTool if present
                });

                // Auto-focus input after displaying problem/question
                if (parsedResponse.display.type === 'question' || parsedResponse.display.type === 'hint') {
                  setTimeout(() => {
                    inputAreaRef.current?.focus();
                  }, 300); // Small delay for smooth UX
                }
              }
            });
          }

        } catch (parseError) {
          console.error('Failed to parse tutor response as JSON, falling back to plain text:', parseError);
          // Fallback: treat as plain text
          tutorResponse = tutorResponseRaw;
          addMessage('tutor', tutorResponse, { problemType: problemTypeForExecution });
        }
      }

      // STEP 5: Handle GIVE_SOLUTION display
      if (instruction.action === "GIVE_SOLUTION") {
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
          evaluatorReasoning: instruction.reasoning
        };

        if (structuredVisualizationData) {
          // New format: {speech, display, mathTool (optional)} per INTERACTION_PROTOCOL
          console.log('📝 Displaying solution with speech and optional mathTool');

          // Speak the intro speech, then show the solution
          const speechText = structuredVisualizationData.speech?.text || "Let me show you how to solve this.";
          const emotion = structuredVisualizationData.speech?.emotion || 'supportive';
          speakText(speechText, emotion, () => {
            // Display the solution text with optional mathTool
            addMessage('tutor', tutorResponse, {
              problemType: problemTypeForExecution,
              mathTool: structuredVisualizationData.mathTool
            }, { isPlainTextSolution: true }); // Mark as solution to show Continue button
          });
        }
      }

      // NEW_PROBLEM and GIVE_SOLUTION are now handled in the speech callback above
      // No additional logic needed here

      console.log('=== SEQUENTIAL AGENT FLOW COMPLETE ===');
      console.log('Final state - Problems completed:', instruction.isMainProblemSolved ? problemsCompleted + 1 : problemsCompleted);

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
        className="flex items-center justify-between px-6 py-4 border-b"
        style={{
          borderColor: theme.colors.border,
          backgroundColor: theme.colors.chat,
        }}
      >
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

        <div className="flex items-center space-x-3">
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

      {/* Section Progress Tracker */}
      {sectionProgress.currentSection && (
        <SectionProgressTracker
          topicId={topicId}
          sectionProgress={sectionProgress}
          onSectionClick={handleSectionClick}
          messages={state.messages}
        />
      )}

      {/* Chat Messages */}
      <div
        className="overflow-y-auto"
        style={{ height: 0, flexGrow: 1 }}
      >
        <div className="w-full mx-auto p-6 space-y-6">
          {/* Avatar - Fixed Position (stays visible during scroll) */}
          {(state.messages.length === 0 || isPlaying) && (
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
      <InputArea ref={inputAreaRef} onSubmit={handleStudentSubmit} disabled={isLoading} />
      </div>
    </>
  );
};

export default ChatInterface;