import React, { useState, useEffect, useRef, useCallback } from 'react';
import MessageBubble from './MessageBubble';
import InputArea from './InputArea';
import ProgressIndicator from './ProgressIndicator';
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
import { TOPIC_IDS } from '../prompts/topicIds';
import { P6_MATH_FRACTIONS } from '../prompts/topics/P6-Math-Fractions';
import type { TopicId } from '../prompts/topics/P6-Math-Fractions';
import type { ConversationState, Message, ProblemState, EvaluatorInstruction } from '../types/types';

interface ChatInterfaceProps {
  topicId?: string;
  onBackToTopics?: () => void;
}

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

  const aiService = useRef<AIService | null>(null);
  const [fallbackMessage, setFallbackMessage] = useState<string | null>(null);
  const pendingNewProblemRef = useRef<{
    problemType: number;
    topicId: string;
    recentHistory?: Message[];
    evaluatorReasoning?: string;
  } | null>(null);
  const currentTopicRef = useRef<string>(topicId);

  // Auto-save session state
  useSessionPersistence({
    topicId,
    conversationState: state,
    currentScore,
    problemsCompleted,
    subtopicComplete,
    problemState: problemState || undefined
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
    }
  };

  const saveProgress = () => {
    progressService.saveProgress(
      topicId,
      state.sessionStats,
      currentScore,
      state.currentProblemType,
      user?.uid
    );
  };

  // Helper functions for problem state management
  const createNewProblemState = (problemText: string, problemType: number): ProblemState => {
    return {
      currentProblemId: `problem_${Date.now()}`,
      hintsGivenForCurrentProblem: 0,
      attemptsForCurrentProblem: 0,
      problemStartTime: new Date(),
      currentProblemText: problemText,
      problemType
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

  const resetProblemState = (newProblemText: string, problemType: number) => {
    setProblemState(createNewProblemState(newProblemText, problemType));
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
        addMessage('tutor', questionResponse.display.content, { problemType: pendingNewProblem.problemType });
        resetProblemState(questionResponse.display.content, pendingNewProblem.problemType);
        setState(prev => ({
          ...prev,
          sessionStats: {
            ...prev.sessionStats,
            problemsAttempted: prev.sessionStats.problemsAttempted + 1
          }
        }));
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
      // Get initial greeting and first problem in a single LLM call
      const { greeting, problem } = await aiService.current.generateInitialGreetingWithProblem(topicId);

      // Check if topic hasn't changed while we were waiting
      if (currentTopicRef.current !== initTopicId) {
        console.log('Topic changed during initialization, aborting');
        return;
      }

      // Speak the greeting via avatar (no chat message, just subtitle)
      speakText(greeting, 'encouraging', () => {
        // Check again before updating state
        if (currentTopicRef.current !== initTopicId) return;

        // After greeting is spoken, show the first problem
        addMessage('tutor', problem, { problemType: 1 });

        // Initialize problem state for the first problem
        resetProblemState(problem, 1);

        setState(prev => ({
          ...prev,
          sessionStats: {
            ...prev.sessionStats,
            problemsAttempted: 1
          }
        }));
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
    visualization?: import('../types/visualization').VisualizationData
  ) => {
    // Prevent empty messages from being added
    if (!content || !content.trim()) {
      console.warn('Attempted to add empty message, skipping');
      return;
    }

    const newMessage: Message = {
      id: Date.now().toString() + '-' + Math.random().toString(36).substr(2, 9),
      role,
      content: content.trim(),
      timestamp: new Date(),
      metadata,
      visualization
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage]
    }));
  };

const handleStudentSubmit = async (input: string) => {
    if (!aiService.current || !input.trim() || !problemState) return;

    // Add student message
    addMessage('student', input);
    setIsLoading(true);

    try {
      // Check if subtopic is already complete
      if (subtopicComplete || currentScore >= 1.0) {
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

      // Get recent conversation history
      const recentHistory = state.messages.slice(-6);

      console.log('=== SEQUENTIAL AGENT FLOW START ===');
      console.log('Problem State:', problemState);
      console.log('Student Response:', input);

      // STEP 1: Evaluator Agent - Analyze and provide instruction
      const instruction = await aiService.current.evaluateAndInstruct(
        input,
        recentHistory,
        problemState,
        topicId
      );

      console.log('Evaluator instruction:', instruction);

      // STEP 2: Update explicit state based on instruction
      updateProblemState(instruction);

      // Update score from instruction
      const newScore = currentScore + instruction.pointsEarned;
      setCurrentScore(newScore);

      // Override instruction if subtopic is completed
      if (newScore >= 1.0 && instruction.action === "NEW_PROBLEM") {
        instruction.action = "CELEBRATE";
      }

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

// Check for subtopic completion
      if (newScore >= 1.0) {
        setSubtopicComplete(true);
        console.log('🎉 SUBTOPIC COMPLETED! Score:', newScore.toFixed(2));
      }

      // STEP 3: Calculate problem type for NEW_PROBLEM actions BEFORE execution
      let problemTypeForExecution = state.currentProblemType;
      if (instruction.action === "NEW_PROBLEM") {
        // Get topic config to determine next problem type
        const topicConfig = P6_MATH_FRACTIONS[topicId as TopicId];
        const thresholds = topicConfig.PROBLEM_TYPE_CONFIG.progressionThresholds;

        // Calculate next problem type based on new score
        let nextProblemType = 1;
        for (let i = 0; i < thresholds.length; i++) {
          if (newScore >= thresholds[i]) {
            nextProblemType = i + 2;
          }
        }

        problemTypeForExecution = nextProblemType;

        // Update state with new problem type immediately
        if (nextProblemType !== state.currentProblemType) {
          setState(prev => ({
            ...prev,
            currentProblemType: nextProblemType
          }));
        }
      }

      // STEP 3.5: Check topic config to override visualization setting
      // Config has final say on whether visualization is enabled for this problem type
      if (instruction.action === "GIVE_SOLUTION") {
        const topicConfig = P6_MATH_FRACTIONS[topicId as TopicId];
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
        // Use Visualization Agent for all solutions (generates step-by-step text)
        // Single LLM call generates: solution text + complete visualization data (if enabled)
        console.log(`🎨 Using Visualization Agent for solution (visualization ${instruction.includeVisualization ? 'enabled' : 'disabled'})`);
        try {
          structuredVisualizationData = await aiService.current.generateVisualizationSolution(
            problemState.currentProblemText,
            problemTypeForExecution,
            topicId,
            recentHistory,
            input,
            instruction.reasoning || 'Student needs help with this problem'
          );
          console.log('Visualization Agent data:', structuredVisualizationData);

          // Extract tutor response from structured data
          if (structuredVisualizationData) {
            // Construct the tutor response text from introText
            tutorResponse = structuredVisualizationData.introText || "Let me show you how to solve this.";
          } else {
            console.warn('Visualization Agent returned null, using fallback');
            tutorResponse = "Let me show you how to solve this problem step by step.";
          }
        } catch (error) {
          console.error('Failed to generate visualization solution:', error);
          tutorResponse = "Let me show you how to solve this problem step by step.";
          structuredVisualizationData = undefined;
        }
      } else if (instruction.action === "NEW_PROBLEM") {
        // NEW_PROBLEM: Use generateQuestion directly (1 LLM call)
        // This returns both celebration speech AND the new problem
        console.log('🎯 Using Question Generation for NEW_PROBLEM (1 LLM call)');
        try {
          // Format recent history properly before passing to AI
          const { formatConversationHistory } = await import('../services/utils/responseParser');
          const formattedHistory = formatConversationHistory(state.messages.slice(-6));

          const questionResponse = await aiService.current.generateQuestion(
            problemTypeForExecution,
            topicId,
            {
              recentHistory: formattedHistory,
              evaluatorReasoning: instruction.reasoning
            }
          );

          console.log('Question response:', questionResponse);

          // Speak the celebration, then show the problem
          const emotion = questionResponse.speech.emotion || 'celebratory';
          speakText(questionResponse.speech.text, emotion, () => {
            // After speech, show the problem
            addMessage('tutor', questionResponse.display.content, { problemType: problemTypeForExecution });
            resetProblemState(questionResponse.display.content, problemTypeForExecution);
            setState(prev => ({
              ...prev,
              sessionStats: {
                ...prev.sessionStats,
                problemsAttempted: prev.sessionStats.problemsAttempted + 1
              }
            }));
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
        try {
          // Clean JSON response
          let cleanedResponse = tutorResponseRaw.trim();
          if (cleanedResponse.startsWith('```json')) {
            cleanedResponse = cleanedResponse.replace(/```json\s*/, '').replace(/\s*```$/, '');
          } else if (cleanedResponse.startsWith('```')) {
            cleanedResponse = cleanedResponse.replace(/```\s*/, '').replace(/\s*```$/, '');
          }

          const parsedResponse = JSON.parse(cleanedResponse);
          console.log('Parsed tutor response:', parsedResponse);

          // STEP 5a: Speak the introduction via avatar
          if (parsedResponse.speech && parsedResponse.speech.text) {
            const emotion = parsedResponse.speech.emotion || 'neutral';

            // Speak with callback to show display content after speech completes
            speakText(parsedResponse.speech.text, emotion, async () => {
              // STEP 5b: After speech, show display content (if any)
              if (parsedResponse.display && parsedResponse.display.content) {
                addMessage('tutor', parsedResponse.display.content, { problemType: problemTypeForExecution });
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
        // Format recent history properly before storing
        const { formatConversationHistory } = await import('../services/utils/responseParser');
        const formattedHistory = formatConversationHistory(state.messages.slice(-6));

        pendingNewProblemRef.current = {
          problemType: problemTypeForExecution,
          topicId,
          recentHistory: formattedHistory,
          evaluatorReasoning: instruction.reasoning
        };

        if (structuredVisualizationData) {
          if (structuredVisualizationData.includeVisualization === false && structuredVisualizationData.plainTextSolution) {
            // Plain text solution (no interactive visualization)
            console.log('📝 Displaying plain text solution with Continue button');
            speakText(stripLatexForSpeech(tutorResponse), 'supportive', () => {
              // Show only the plain text solution (introText is already spoken, don't display it)
              const solutionText = structuredVisualizationData.plainTextSolution;
              // Pass a special marker to indicate this is a plain text solution that needs a Continue button
              const plainTextSolutionData = {
                isPlainTextSolution: true,
                content: solutionText
              };
              addMessage('tutor', solutionText, { problemType: problemTypeForExecution }, plainTextSolutionData);
            });
          } else {
            // Interactive visualization (existing behavior)
            console.log('🎬 ChatInterface: Setting up step-by-step completion callback');
            speakText(stripLatexForSpeech(tutorResponse), 'supportive', () => {
              // Show visualization after speech
              addMessage('tutor', tutorResponse, { problemType: problemTypeForExecution }, structuredVisualizationData);
            });
          }
        }
      }

      // NEW_PROBLEM and GIVE_SOLUTION are now handled in the speech callback above
      // No additional logic needed here

      console.log('=== SEQUENTIAL AGENT FLOW COMPLETE ===');
      console.log('Final state - Score:', newScore.toFixed(2), 'Problems:', instruction.isMainProblemSolved ? problemsCompleted + 1 : problemsCompleted);

    } catch (error) {
      console.error('Failed to process sequential agent flow:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Get current topic configuration for display
  const currentTopicConfig = P6_MATH_FRACTIONS[topicId as TopicId];
  const topicDisplayName = currentTopicConfig?.displayName || 'Fraction Division';

  return (
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
            ➗
          </div>
          <div>
            <h1 className="text-lg font-semibold" style={{ color: theme.colors.textPrimary }}>
              {topicDisplayName}
            </h1>
            <p className="text-sm" style={{ color: theme.colors.textMuted }}>Master fractions step by step!</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <ProgressIndicator stats={state.sessionStats} currentScore={currentScore} />

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
                onStepByStepComplete={(hasStepByStepVisualization || hasPlainTextSolution) ? handleStepByStepComplete : undefined}
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
      <InputArea onSubmit={handleStudentSubmit} disabled={isLoading} />
    </div>
  );
};

export default ChatInterface;