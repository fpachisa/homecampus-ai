export interface Message {
  id: string;
  role: 'tutor' | 'student';
  content: string;
  timestamp: Date;
  metadata?: {
    difficulty?: 'easy' | 'medium' | 'hard';
    isCorrect?: boolean;
    conceptsCovered?: string[];
  };
}

export interface ConversationState {
  messages: Message[];
  currentDifficulty: 'easy' | 'medium' | 'hard';
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
  difficulty: 'easy' | 'medium' | 'hard';
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
  nextDifficulty: 'easy' | 'medium' | 'hard';  // Next difficulty level
  subtopicComplete: boolean;          // True when score reaches 1.0
}