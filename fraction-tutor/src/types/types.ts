export interface Message {
  id: string;
  role: 'tutor' | 'student';
  content: string;
  timestamp: Date;

  // NEW: Speech and display content separation for AI avatar
  speechContent?: {
    text: string;                    // What the avatar speaks
    emotion?: 'encouraging' | 'celebratory' | 'supportive' | 'neutral';
    audioUrl?: string;               // Cached TTS audio URL (blob URL)
    duration?: number;               // Audio duration in milliseconds
  };

  displayContent?: {
    text: string;                    // What appears as text on screen
    showAfterSpeech?: boolean;       // Show text after speech completes
  };

  visualization?: any; // Optional visualization data - can be VisualizationData or structured step data
  metadata?: {
    problemType?: number;
    isCorrect?: boolean;
    conceptsCovered?: string[];
    messageType?: 'greeting' | 'problem' | 'hint' | 'solution' | 'celebration' | 'feedback';
  };
}

export interface ConversationState {
  messages: Message[];
  currentProblemType: number;
  problemState?: ProblemState;  // Explicit problem tracking
  sessionStats: {
    problemsAttempted: number;
    correctAnswers: number;
    hintsProvided: number;
    startTime: Date;
  };
  studentProfile: {
    strugglingWith: string[];
    preferredMethod: 'visual' | 'procedural' | 'conceptual' | null;
    confidenceLevel: number; // 0-100
  };
}

export interface GeminiResponse {
  response: string;
  metadata: {
    detectedUnderstanding: 'none' | 'partial' | 'complete';
    suggestedDifficulty: 'same' | 'easier' | 'harder';
    conceptsCovered: string[];
    includesNewProblem?: boolean;
  };
}

export interface ProblemState {
  currentProblemId: string;
  hintsGivenForCurrentProblem: number;  // Running counter
  attemptsForCurrentProblem: number;    // Student attempts
  problemStartTime: Date;
  currentProblemText: string;
  problemType: number;
}

export interface EvaluatorInstruction {
  // Scoring results
  answerCorrect: boolean;
  pointsEarned: number;
  isMainProblemSolved: boolean;

  // Instructions for Tutor
  action: "GIVE_HINT" | "GIVE_SOLUTION" | "NEW_PROBLEM" | "CELEBRATE";
  hintLevel?: 1 | 2 | 3;  // Which hint number to give
  reasoning: string;  // Why this action was chosen
  includeVisualization?: boolean; // Optional: whether to include visualization

  // NEW: AI-driven speech and display content separation
  speech?: {
    text: string;                    // What avatar should speak
    emotion?: 'encouraging' | 'celebratory' | 'supportive' | 'neutral';
  };

  display?: {
    content: string | null;          // What to show as text (null for speech-only)
    showAfterSpeech?: boolean;       // Show after speech completes
  };
}

export interface QuestionGenerationResponse {
  speech: {
    text: string;                    // What avatar should speak (acknowledgment + transition)
    emotion: 'encouraging' | 'celebratory' | 'supportive' | 'neutral';
  };
  display: {
    content: string;                 // The new problem text
    showAfterSpeech: boolean;        // Show after speech completes
  };
}

export interface InitialGreetingResponse {
  greeting: string;                  // What avatar should speak (warm welcome message)
  problem: string;                   // The first problem text to display
}

export interface AnswerEvaluation {
  answerCorrect: boolean;           // Is this answer right?
  pointsEarned: number;             // Points for THIS problem only
  hintsUsed: number;                // Hints used for THIS problem
  answerType: "final" | "intermediate";  // Type of answer given
  isMainProblemSolved: boolean;     // Is the main problem fully solved?

  // New fields for sequential architecture
  instruction?: EvaluatorInstruction;  // Instructions for Tutor
}

export interface ProgressEvaluation {
  problemsCompleted: number;          // Total problems solved correctly
  currentScore: number;               // Running score (0.00-1.00)
  hintsUsed: number;                  // Hints used for current problem
  nextProblemType: number;            // Next problem type
  subtopicComplete: boolean;          // True when score reaches 1.0
}

// ============================================
// PRACTICE MODE TYPES
// ============================================

export type DifficultyTier = 'easy' | 'medium' | 'hard';
export type DifficultyMode = 'progressive' | 'easy' | 'medium' | 'hard';

export interface ProgressiveConfig {
  // Advancement criteria
  advanceAfterStreak: number;          // Default: 5 (consecutive correct to advance)
  minProblemsBeforeAdvance: number;    // Default: 3 (minimum at current tier before advancing)

  // Regression criteria (optional)
  allowRegression: boolean;            // Default: false
  regressAfterFailStreak?: number;     // Default: 3 (consecutive wrong to regress)

  // Starting point
  startingDifficulty: DifficultyTier;  // Default: 'easy'
}

export interface PracticeProgressState {
  currentDifficultyTier: DifficultyTier;
  problemsAtCurrentTier: number;
  currentCorrectStreak: number;
  currentWrongStreak: number;
  hasUnlockedMedium: boolean;
  hasUnlockedHard: boolean;
}

export interface PracticeConfig {
  mode: 'subtopic' | 'topic';         // Practice single subtopic or mixed topics
  subtopicId?: string;                 // For subtopic practice
  problemTypes?: number[];             // Specific problem types or 'all'
  totalProblems?: number;              // Optional limit (default: unlimited)
  showSolutions?: boolean;             // Toggle step-by-step on wrong answers (default: true)

  // NEW: Difficulty settings
  difficulty?: DifficultyMode;         // Difficulty mode (default: 'progressive')
  progressiveConfig?: ProgressiveConfig; // Configuration for progressive mode
}

export interface PracticeProblem {
  id: string;                          // Unique problem ID
  problemText: string;                 // The word problem
  correctAnswer: string;               // AI-provided answer (e.g., "1/4")
  problemType: number;                 // Problem type (1-4)
  context: string;                     // Context used (chocolate, pizza, etc.)
  generatedAt: number;                 // Timestamp
  solutionData?: any;                  // Pre-generated visualization data for "View Solution"
}

export interface ProblemQueue {
  topicId: string;                     // Topic or subtopic ID
  problems: PracticeProblem[];         // Pre-generated problems
  currentIndex: number;                // Current problem position
  config: PracticeConfig;              // Practice configuration
  lastGenerated: number;               // Last batch generation timestamp
  isPrefetching?: boolean;             // Background prefetch in progress
}

export interface PracticeState {
  problemsAttempted: number;           // Total problems attempted
  correctAnswers: number;              // Correct answers
  incorrectAnswers: number;            // Incorrect answers
  currentStreak: number;               // Current correct streak
  bestStreak: number;                  // Best streak in session
  startTime: Date;                     // Session start time
  accuracy: number;                    // Accuracy percentage (0-100)

  // NEW: Progressive difficulty state
  progressState?: PracticeProgressState; // Only present if using progressive mode
}

export interface PracticeBatchResponse {
  problems: PracticeProblem[];         // Array of generated problems
  generatedAt: number;                 // Batch generation timestamp
}

// ============================================
// PRACTICE MODE AI AGENT TYPES
// ============================================

export interface PracticeProblemState {
  currentProblemId: string;            // Current problem ID
  hintsGiven: number;                  // Hints given for current problem
  attempts: number;                    // Attempts made on current problem
  isAnswered: boolean;                 // Has this problem been answered correctly?
  problemStartTime: Date;              // When problem was presented
}

export interface PracticeAgentResponse {
  // Intent detection
  intent: "hint_request" | "answer_submission" | "off_topic";

  // Evaluation results
  answerCorrect: boolean;              // Is the answer correct?
  pointsEarned: number;                // Points for this attempt
  isMainProblemSolved: boolean;        // Problem fully solved?
  hintLevel?: number;                  // Hint level given (1-3)

  // Speech for avatar
  speech: {
    text: string;                      // What avatar speaks
    emotion: 'encouraging' | 'celebratory' | 'supportive' | 'neutral';
  };

  // Display for UI
  display: {
    content: string;                   // Actual content OR "none"
    showAfterSpeech: boolean;          // Show after speech completes
  };

  // Next action
  action: "NEXT_PROBLEM" | "GIVE_SOLUTION" | "none";     // Auto-advance, show solution, or wait for input
  reasoning: string;                   // Why this action (debugging)
}