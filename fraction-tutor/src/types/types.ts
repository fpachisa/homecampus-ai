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