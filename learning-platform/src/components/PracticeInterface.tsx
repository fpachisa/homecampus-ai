import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useAudioManager } from '../hooks/useAudioManager';
import Avatar from './Avatar';
import FallbackAIService from '../services/fallbackAIService';
import type { AIService } from '../services/aiService';
import { practiceBatchService } from '../services/practiceBatchService';
import type { PracticeConfig, PracticeProblem, ProblemQueue, PracticeState, PracticeProgressState, ProgressiveConfig, DifficultyTier, PracticeProblemState, Message } from '../types/types';
import type { TopicId } from '../prompts/topics/P6-Math-Fractions';
import { P6_MATH_FRACTIONS } from '../prompts/topics/P6-Math-Fractions';
import MathText from './MathText';
import StepByStepRenderer from './StepByStepRenderer';
import Scratchpad from './Scratchpad';

interface PracticeInterfaceProps {
  topicId: TopicId;
  practiceConfig: PracticeConfig;
  onBackToModeSelect: () => void;
}

const PracticeInterface: React.FC<PracticeInterfaceProps> = ({
  topicId,
  practiceConfig,
  onBackToModeSelect
}) => {
  const { theme } = useTheme();

  // Audio Manager for TTS and Avatar control
  const { isPlaying, currentSubtitle, avatarState, audioDuration, speakText, stopSpeaking } = useAudioManager();
  const [showSubtitle, setShowSubtitle] = useState(true); // User preference

  const [problemQueue, setProblemQueue] = useState<ProblemQueue | null>(null);
  const [currentProblem, setCurrentProblem] = useState<PracticeProblem | null>(null);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPrefetching, setIsPrefetching] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'incorrect' | null; message: string }>({ type: null, message: '' });
  const [showSolution, setShowSolution] = useState(false);

  // AI-powered evaluation state
  const [problemState, setProblemState] = useState<PracticeProblemState | null>(null);
  const [conversationHistory, setConversationHistory] = useState<Message[]>([]);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const [stats, setStats] = useState<PracticeState>({
    problemsAttempted: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    currentStreak: 0,
    bestStreak: 0,
    startTime: new Date(),
    accuracy: 0
  });

  const [progressionMessage, setProgressionMessage] = useState<string | null>(null);
  const progressiveConfigRef = useRef<ProgressiveConfig | null>(null);

  // Scratchpad state
  const [showScratchpad, setShowScratchpad] = useState(true);

  const aiService = useRef<AIService | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize AI service and progressive config
  useEffect(() => {
    const geminiApiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const claudeApiKey = import.meta.env.VITE_CLAUDE_API_KEY;

    if (!geminiApiKey) {
      console.error('Gemini API key not found');
      return;
    }

    aiService.current = new FallbackAIService(geminiApiKey, claudeApiKey);

    // Initialize progressive config (use provided or defaults)
    if (practiceConfig.difficulty === 'progressive') {
      progressiveConfigRef.current = practiceConfig.progressiveConfig ||
        practiceBatchService.getDefaultProgressiveConfig();

      // Load saved progression state or create new one
      const savedProgress = practiceBatchService.loadProgressState(topicId);
      if (savedProgress) {
        console.log('📊 Loaded saved progress state:', savedProgress);
        setStats(prev => ({ ...prev, progressState: savedProgress }));
      } else {
        console.log('🆕 Initializing new progress state');
        const newProgress = practiceBatchService.initProgressState(progressiveConfigRef.current);
        setStats(prev => ({ ...prev, progressState: newProgress }));
      }
    }

    // Load saved practice stats
    const savedStats = practiceBatchService.loadPracticeStats(topicId);
    if (savedStats) {
      console.log('📊 Loaded saved practice stats:', savedStats);
      setStats(prev => ({
        ...prev,
        problemsAttempted: savedStats.problemsAttempted,
        correctAnswers: savedStats.correctAnswers,
        incorrectAnswers: savedStats.incorrectAnswers,
        currentStreak: savedStats.currentStreak,
        bestStreak: savedStats.bestStreak,
        accuracy: savedStats.accuracy
      }));
    }
  }, [topicId, practiceConfig]);

  // Load or generate initial batch
  useEffect(() => {
    const initializePractice = async () => {
      if (!aiService.current) return;

      // For progressive mode, wait until progressState is initialized
      if (practiceConfig.difficulty === 'progressive' && !stats.progressState) {
        return;
      }

      setIsLoading(true);
      try {
        // Try to load existing queue
        const savedQueue = practiceBatchService.loadQueue(topicId, practiceConfig.mode);

        if (savedQueue && savedQueue.problems.length > 0) {
          console.log('📦 Loaded existing practice queue:', savedQueue);
          const problem = practiceBatchService.getNextProblem(savedQueue);
          setProblemQueue(savedQueue);
          setCurrentProblem(problem);
          if (problem) initializeProblemState(problem);
        } else {
          // Generate first batch
          console.log('🆕 Generating initial practice batch...');
          const problemType = getProblemTypeForGeneration();
          const batchSize = practiceBatchService.getBatchSize();

          console.log(`Starting difficulty: ${stats.progressState?.currentDifficultyTier || practiceConfig.difficulty}, Problem type: ${problemType}`);

          const problems = await aiService.current.generatePracticeBatch(
            problemType,
            topicId,
            batchSize
          );

          const newQueue = practiceBatchService.createQueue(topicId, practiceConfig, problems);
          const firstProblem = practiceBatchService.getNextProblem(newQueue);
          setProblemQueue(newQueue);
          setCurrentProblem(firstProblem);
          if (firstProblem) initializeProblemState(firstProblem);
        }
      } catch (error) {
        console.error('Failed to initialize practice:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializePractice();
  }, [topicId, practiceConfig, stats.progressState]);

  // Prefetch next batch if needed
  useEffect(() => {
    const prefetchIfNeeded = async () => {
      if (!problemQueue || !aiService.current || isPrefetching) return;

      if (practiceBatchService.shouldPrefetch(problemQueue)) {
        setIsPrefetching(true);
        practiceBatchService.markPrefetching(problemQueue, true);

        try {
          console.log('🔄 Prefetching next batch...');
          const problemType = getProblemTypeForGeneration();
          const batchSize = practiceBatchService.getBatchSize();

          // Get recent contexts to avoid repetition
          const recentContexts = problemQueue.problems.slice(-3).map(p => p.context);

          const newProblems = await aiService.current.generatePracticeBatch(
            problemType,
            topicId,
            batchSize,
            { excludeContexts: recentContexts }
          );

          practiceBatchService.appendProblems(problemQueue, newProblems);
          setProblemQueue({ ...problemQueue }); // Trigger re-render
        } catch (error) {
          console.error('Prefetch failed:', error);
          practiceBatchService.markPrefetching(problemQueue, false);
        } finally {
          setIsPrefetching(false);
        }
      }
    };

    prefetchIfNeeded();
  }, [problemQueue, topicId, practiceConfig, isPrefetching]);

  // Helper function to get problem type based on difficulty mode
  const getProblemTypeForGeneration = (): number => {
    const difficulty = practiceConfig.difficulty || 'progressive';

    // If specific problemTypes are provided, use them
    if (practiceConfig.problemTypes && practiceConfig.problemTypes.length > 0) {
      return practiceConfig.problemTypes[0];
    }

    // Progressive mode: use current tier
    if (difficulty === 'progressive' && stats.progressState) {
      return practiceBatchService.selectRandomProblemType(
        topicId,
        stats.progressState.currentDifficultyTier
      );
    }

    // Fixed difficulty modes
    if (difficulty === 'easy' || difficulty === 'medium' || difficulty === 'hard') {
      return practiceBatchService.selectRandomProblemType(topicId, difficulty);
    }

    // Fallback
    return 1;
  };

  // Initialize problem state when a new problem is loaded
  const initializeProblemState = (problem: PracticeProblem) => {
    setProblemState({
      currentProblemId: problem.id,
      hintsGiven: 0,
      attempts: 0,
      isAnswered: false,
      problemStartTime: new Date()
    });
    setFeedback({ type: null, message: '' });
    setShowSolution(false);
  };

  // Handle user input submission with AI evaluation
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentProblem || !userInput.trim() || !aiService.current || !problemState) return;

    setIsEvaluating(true);

    try {
      // Call AI to evaluate response
      const response = await aiService.current.evaluatePracticeResponse(
        userInput.trim(),
        currentProblem,
        problemState,
        conversationHistory.slice(-5), // Last 5 messages for context
        topicId
      );

      console.log('Practice AI Response:', response);

      // Update conversation history
      const studentMessage: Message = {
        id: `student_${Date.now()}`,
        role: 'student',
        content: userInput.trim(),
        timestamp: new Date()
      };

      const tutorMessage: Message = {
        id: `tutor_${Date.now()}`,
        role: 'tutor',
        content: response.speech.text,
        timestamp: new Date(),
        speechContent: {
          text: response.speech.text,
          emotion: response.speech.emotion
        },
        displayContent: response.display.content !== 'none' ? {
          text: response.display.content,
          showAfterSpeech: response.display.showAfterSpeech
        } : undefined
      };

      setConversationHistory(prev => [...prev, studentMessage, tutorMessage]);

      // Update problem state
      const updatedProblemState = { ...problemState };
      updatedProblemState.attempts++;
      if (response.hintLevel) {
        updatedProblemState.hintsGiven = response.hintLevel;
      }
      if (response.isMainProblemSolved) {
        updatedProblemState.isAnswered = true;
      }
      setProblemState(updatedProblemState);

      // Update stats
      const newStats = { ...stats };

      if (response.isMainProblemSolved) {
        newStats.problemsAttempted++;
        newStats.correctAnswers++;
        newStats.currentStreak++;
        newStats.bestStreak = Math.max(newStats.bestStreak, newStats.currentStreak);

        // Update progressive difficulty if enabled
        if (practiceConfig.difficulty === 'progressive' && newStats.progressState && progressiveConfigRef.current) {
          const progressResult = practiceBatchService.updateProgressState(
            newStats.progressState,
            progressiveConfigRef.current,
            true
          );

          practiceBatchService.saveProgressState(topicId, newStats.progressState);

          if (progressResult.message) {
            setProgressionMessage(progressResult.message);
            setTimeout(() => setProgressionMessage(null), 5000);
          }
        }
      } else if (response.intent === 'answer_submission' && !response.answerCorrect) {
        // Wrong answer
        newStats.problemsAttempted++;
        newStats.incorrectAnswers++;
        newStats.currentStreak = 0;

        // Update progressive difficulty if enabled
        if (practiceConfig.difficulty === 'progressive' && newStats.progressState && progressiveConfigRef.current) {
          const progressResult = practiceBatchService.updateProgressState(
            newStats.progressState,
            progressiveConfigRef.current,
            false
          );

          practiceBatchService.saveProgressState(topicId, newStats.progressState);

          if (progressResult.message) {
            setProgressionMessage(progressResult.message);
            setTimeout(() => setProgressionMessage(null), 5000);
          }
        }
      }

      newStats.accuracy = newStats.problemsAttempted > 0
        ? Math.round((newStats.correctAnswers / newStats.problemsAttempted) * 100)
        : 0;

      setStats(newStats);

      // Save stats to localStorage
      practiceBatchService.savePracticeStats(topicId, {
        problemsAttempted: newStats.problemsAttempted,
        correctAnswers: newStats.correctAnswers,
        incorrectAnswers: newStats.incorrectAnswers,
        currentStreak: newStats.currentStreak,
        bestStreak: newStats.bestStreak,
        accuracy: newStats.accuracy
      });

      // Clear input
      setUserInput('');

      // Speak the response via avatar and handle actions after speech completes
      await speakText(response.speech.text, response.speech.emotion, () => {
        // After speech completes, show display content if exists
        if (response.display.content !== 'none') {
          setFeedback({
            type: response.answerCorrect ? 'correct' : 'incorrect',
            message: response.display.content
          });
        } else {
          setFeedback({ type: null, message: '' });
        }

        // Handle actions after speech
        if (response.action === 'NEXT_PROBLEM') {
          // Auto-advance to next problem after a short delay
          setTimeout(() => {
            handleNextProblem();
          }, 1500);
        } else if (response.action === 'GIVE_SOLUTION') {
          // Auto-show solution when action is GIVE_SOLUTION
          setShowSolution(true);
        }
        // If action is 'none', just wait for next user input
      });

    } catch (error) {
      console.error('Error evaluating practice response:', error);
      setFeedback({
        type: 'incorrect',
        message: 'Sorry, I had trouble processing your response. Please try again.'
      });
    } finally {
      setIsEvaluating(false);
    }
  };

  const handleNextProblem = () => {
    if (!problemQueue) return;

    const nextProblem = practiceBatchService.getNextProblem(problemQueue);

    if (nextProblem) {
      setCurrentProblem(nextProblem);
      initializeProblemState(nextProblem);
      setProblemQueue({ ...problemQueue }); // Trigger re-render

      // Focus input for next problem
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      // Queue exhausted - generate more
      console.log('Queue exhausted, generating more problems...');
      // This will trigger prefetch effect
    }
  };

  // Get topic config for display
  const topicConfig = P6_MATH_FRACTIONS[topicId];
  const topicDisplayName = topicConfig?.displayName || 'Practice';

  // Helper function to get difficulty color
  const getDifficultyColor = (tier: DifficultyTier): string => {
    const colors = {
      easy: '#57F287',   // Green
      medium: '#FEE75C', // Yellow
      hard: '#ED4245'    // Red
    };
    return colors[tier];
  };

  if (isLoading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background: theme.gradients.panel,
          color: theme.colors.textPrimary
        }}
      >
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin mx-auto mb-4"
            style={{ borderColor: theme.colors.brand, borderTopColor: 'transparent' }}
          />
          <p className="text-lg font-medium">Generating practice problems...</p>
          <p className="text-sm mt-2" style={{ color: theme.colors.textMuted }}>This will only take a moment</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col h-screen"
      style={{
        background: theme.gradients.panel,
        color: theme.colors.textPrimary
      }}
    >
      {/* Header */}
      <div
        className="px-6 py-4 border-b"
        style={{ borderColor: theme.colors.border }}
      >
        <div className="flex items-center justify-between">
          {/* Left: Back button and title */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onBackToModeSelect}
              className="p-2 rounded-lg transition-all duration-200"
              style={{
                backgroundColor: theme.colors.interactive,
                color: theme.colors.textSecondary
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.brand;
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = theme.colors.interactive;
                e.currentTarget.style.color = theme.colors.textSecondary;
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-lg font-semibold">{topicDisplayName}</h1>
                <span
                  className="px-2 py-1 rounded text-xs font-medium"
                  style={{
                    backgroundColor: '#57F287' + '20',
                    color: '#57F287'
                  }}
                >
                  Practice Mode ⚡
                </span>
              </div>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="flex items-center space-x-6 text-sm">
            <div className="text-center">
              <div className="font-semibold" style={{ color: theme.colors.textPrimary }}>
                {stats.problemsAttempted}
              </div>
              <div style={{ color: theme.colors.textMuted }}>Attempted</div>
            </div>
            <div className="text-center">
              <div className="font-semibold" style={{ color: '#57F287' }}>
                {stats.accuracy}%
              </div>
              <div style={{ color: theme.colors.textMuted }}>Accuracy</div>
            </div>
            <div className="text-center">
              <div className="font-semibold" style={{ color: theme.colors.brand }}>
                {stats.currentStreak}
              </div>
              <div style={{ color: theme.colors.textMuted }}>Streak 🔥</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="flex-1 overflow-hidden flex">
        {/* Left Column: Problem Area */}
        <div className={`flex-1 overflow-y-auto p-8 transition-all duration-300 ${showScratchpad ? 'lg:pr-4' : ''}`}>
          <div className="max-w-3xl mx-auto">
          {/* Progression Message Banner */}
          {progressionMessage && (
            <div
              className="mb-6 p-4 rounded-lg text-center font-semibold animate-pulse"
              style={{
                backgroundColor: theme.colors.brand + '20',
                border: `2px solid ${theme.colors.brand}`,
                color: theme.colors.brand
              }}
            >
              {progressionMessage}
            </div>
          )}

          {/* Avatar - Fixed overlay when speaking */}
          <div
            className="fixed top-20 left-1/2 z-50 transition-all duration-300 ease-out"
            style={{
              width: '500px',
              minHeight: '280px',
              transform: 'translateX(-50%)',
              opacity: isPlaying ? 1 : 0,
              scale: isPlaying ? '1' : '0.95',
              pointerEvents: isPlaying ? 'auto' : 'none',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center'
            }}
          >
            <Avatar
              state={avatarState}
              subtitle={currentSubtitle}
              showSubtitle={showSubtitle}
              audioDuration={audioDuration}
              emotion={conversationHistory.length > 0
                ? conversationHistory[conversationHistory.length - 1].speechContent?.emotion
                : 'neutral'}
            />
          </div>

          {currentProblem && (
            <div className="space-y-6">
              {/* Problem Card */}
              <div
                className="p-8 rounded-2xl"
                style={{
                  background: theme.glass.background,
                  border: `1px solid ${theme.glass.border}`,
                  backdropFilter: theme.glass.backdrop,
                  boxShadow: theme.shadows.md
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: theme.colors.brand + '20',
                        color: theme.colors.brand
                      }}
                    >
                      Problem {stats.problemsAttempted + 1}
                    </div>
                    {/* Difficulty badge */}
                    {stats.progressState && (
                      <div
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          backgroundColor: getDifficultyColor(stats.progressState.currentDifficultyTier) + '20',
                          color: getDifficultyColor(stats.progressState.currentDifficultyTier)
                        }}
                      >
                        {practiceBatchService.getDifficultyLabel(stats.progressState.currentDifficultyTier)}
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-xl mb-8 leading-relaxed" style={{ color: theme.colors.textPrimary }}>
                  <MathText>{currentProblem.problemText}</MathText>
                </p>

                {/* Feedback */}
                {feedback.type && (
                  <div
                    className="p-4 rounded-lg mb-6"
                    style={{
                      backgroundColor: feedback.type === 'correct' ? '#57F287' + '20' : '#ED4245' + '20',
                      border: `1px solid ${feedback.type === 'correct' ? '#57F287' : '#ED4245'}`,
                      color: feedback.type === 'correct' ? '#57F287' : '#ED4245'
                    }}
                  >
                    <p className="font-medium">{feedback.message}</p>
                  </div>
                )}

                {/* Input Form */}
                {!problemState?.isAnswered && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: theme.colors.textSecondary }}>
                        Your answer:
                      </label>
                      <input
                        ref={inputRef}
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Enter your answer or ask for help"
                        className="w-full px-4 py-3 rounded-lg text-lg"
                        style={{
                          backgroundColor: theme.colors.interactive,
                          color: theme.colors.textPrimary,
                          border: `1px solid ${theme.colors.border}`
                        }}
                        autoFocus
                        disabled={isEvaluating}
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg font-semibold transition-all duration-200"
                      style={{
                        backgroundColor: theme.colors.brand,
                        color: '#ffffff',
                        opacity: !userInput.trim() || isEvaluating ? 0.6 : 1
                      }}
                      disabled={!userInput.trim() || isEvaluating}
                    >
                      {isEvaluating ? 'Checking...' : 'Submit'}
                    </button>
                  </form>
                )}

                {/* Solution Display */}
                {showSolution && currentProblem.solutionData && (
                  <div
                    className="mt-6 p-6 rounded-lg"
                    style={{
                      backgroundColor: theme.colors.interactive,
                      border: `1px solid ${theme.colors.border}`
                    }}
                  >
                    <h3 className="font-semibold mb-4" style={{ color: theme.colors.textPrimary }}>
                      Solution:
                    </h3>

                    {/* Step-by-step solution */}
                    <div className="mb-6">
                      {(currentProblem.solutionData.stages || []).map((stage: any, index: number) => (
                        <div
                          key={`step-${index}`}
                          className="mb-4 p-4 rounded-lg"
                          style={{
                            backgroundColor: theme.colors.secondary,
                            border: `1px solid ${theme.colors.border}`
                          }}
                        >
                          <div className="flex items-center space-x-3 mb-2">
                            <div
                              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                              style={{ backgroundColor: theme.colors.brand }}
                            >
                              {index + 1}
                            </div>
                            <h4 className="font-semibold" style={{ color: theme.colors.textPrimary }}>
                              {stage.title}
                            </h4>
                          </div>
                          <p className="ml-11 text-sm" style={{ color: theme.colors.textSecondary }}>
                            {stage.description}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Math Summary */}
                    {currentProblem.solutionData.mathSummary && (
                      <div
                        className="mt-4 p-4 rounded-lg"
                        style={{
                          backgroundColor: theme.colors.secondary,
                          border: `2px solid ${theme.colors.brand}`
                        }}
                      >
                        <div className="space-y-2">
                          {currentProblem.solutionData.mathSummary.problem && (
                            <div>
                              <span className="font-semibold" style={{ color: theme.colors.textPrimary }}>
                                Problem:
                              </span>
                              <span className="ml-2" style={{ color: theme.colors.textSecondary }}>
                                <MathText>{currentProblem.solutionData.mathSummary.problem}</MathText>
                              </span>
                            </div>
                          )}
                          {currentProblem.solutionData.mathSummary.solution && (
                            <div>
                              <span className="font-semibold" style={{ color: theme.colors.textPrimary }}>
                                Solution:
                              </span>
                              <span className="ml-2" style={{ color: theme.colors.textSecondary }}>
                                <MathText>{currentProblem.solutionData.mathSummary.solution}</MathText>
                              </span>
                            </div>
                          )}
                          {currentProblem.solutionData.mathSummary.explanation && (
                            <div>
                              <span className="font-semibold" style={{ color: theme.colors.textPrimary }}>
                                Answer:
                              </span>
                              <span className="ml-2" style={{ color: theme.colors.textSecondary }}>
                                {currentProblem.solutionData.mathSummary.explanation}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* No Solution Available Message */}
                {showSolution && !currentProblem.solutionData && (
                  <div
                    className="mt-6 p-6 rounded-lg"
                    style={{
                      backgroundColor: theme.colors.interactive,
                      border: `1px solid ${theme.colors.border}`
                    }}
                  >
                    <p style={{ color: theme.colors.textSecondary }}>
                      Solution not available for this problem.
                    </p>
                  </div>
                )}

                {/* Next Problem Button - Shows when solution is displayed */}
                {showSolution && (
                  <div className="mt-6">
                    <button
                      onClick={handleNextProblem}
                      className="w-full py-3 rounded-lg font-semibold transition-all duration-200"
                      style={{
                        backgroundColor: theme.colors.brand,
                        color: '#ffffff'
                      }}
                    >
                      Next Problem →
                    </button>
                  </div>
                )}
              </div>

              {/* Stats Summary */}
              <div
                className="p-6 rounded-xl"
                style={{
                  background: theme.glass.background,
                  border: `1px solid ${theme.glass.border}`,
                  backdropFilter: theme.glass.backdrop
                }}
              >
                <h3 className="font-semibold mb-4" style={{ color: theme.colors.textPrimary }}>
                  Session Stats
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
                      {stats.correctAnswers}
                    </div>
                    <div className="text-sm" style={{ color: theme.colors.textMuted }}>Correct</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: theme.colors.textPrimary }}>
                      {stats.incorrectAnswers}
                    </div>
                    <div className="text-sm" style={{ color: theme.colors.textMuted }}>Incorrect</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: theme.colors.brand }}>
                      {stats.bestStreak}
                    </div>
                    <div className="text-sm" style={{ color: theme.colors.textMuted }}>Best Streak</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold" style={{ color: '#57F287' }}>
                      {stats.accuracy}%
                    </div>
                    <div className="text-sm" style={{ color: theme.colors.textMuted }}>Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>

        {/* Right Column: Scratchpad */}
        <div
          className={`${
            showScratchpad ? 'w-full lg:w-[400px]' : 'w-0'
          } transition-all duration-300 overflow-hidden border-l hidden lg:flex flex-col`}
          style={{ borderColor: theme.colors.border }}
        >
          <div className="h-full p-4">
            <Scratchpad />
          </div>
        </div>

        {/* Mobile Scratchpad Toggle Button */}
        <button
          onClick={() => setShowScratchpad(!showScratchpad)}
          className="fixed bottom-6 right-6 lg:hidden p-4 rounded-full shadow-lg transition-all z-50"
          style={{
            backgroundColor: theme.colors.brand,
            color: '#ffffff',
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>

        {/* Desktop Scratchpad Toggle */}
        <button
          onClick={() => setShowScratchpad(!showScratchpad)}
          className="hidden lg:block fixed top-24 right-4 p-2 rounded-lg transition-all z-40"
          style={{
            backgroundColor: theme.colors.interactive,
            color: theme.colors.textSecondary,
          }}
          title={showScratchpad ? 'Hide Scratchpad' : 'Show Scratchpad'}
        >
          <svg className={`w-5 h-5 transition-transform ${showScratchpad ? 'rotate-0' : 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PracticeInterface;
