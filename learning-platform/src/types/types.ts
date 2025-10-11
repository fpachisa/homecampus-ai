export interface Message {
  id: string;
  role: 'tutor' | 'student';
  content: string;
  timestamp: Date;
  sectionId?: string;              // NEW: Section this message belongs to (for section-isolated conversations)

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
    mathTool?: MathTool;  // Optional math tool to render (e.g., rightTriangle)
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
  originalMathTool?: MathTool;          // Original visual tool shown with the problem (for validation)
}

export interface EvaluatorInstruction {
  // Evaluation results
  answerCorrect: boolean;
  isMainProblemSolved: boolean;

  // Assessment of student understanding
  assessment: {
    understanding: 'strong' | 'developing' | 'struggling';
    conceptGaps: string[];
    readyToAdvance: boolean;
  };

  // Progression tracking
  progression: {
    currentSection: string;
    sectionMastered: boolean;
    masteryProgress: string;
    nextSection: string | null;
  };

  // Instructions for Tutor
  action: "GIVE_HINT" | "GIVE_SOLUTION" | "NEW_PROBLEM" | "CELEBRATE";
  hintLevel?: 1 | 2 | 3;  // Which hint number to give
  reasoning: string;  // Why this action was chosen
  includeVisualization?: boolean; // Optional: whether to include visualization

  // Targeted instructions for UI agents (only include the relevant one based on action)
  tutorInstruction?: any;  // For GIVE_HINT or CELEBRATE
  questionInstruction?: any;  // For NEW_PROBLEM
  solutionInstruction?: any;  // For GIVE_SOLUTION

  // NEW: AI-driven speech and display content separation (legacy - may be removed)
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
  mathTool?: MathTool;              // Optional visual tool to show with the problem
}

export interface MathTool {
  toolName: string;                  // Name of the visual tool (e.g., 'rightTriangle')
  parameters: Record<string, any>;   // Tool-specific parameters
  caption?: string;                  // Optional caption explaining the diagram
}

export interface InitialGreetingResponse {
  speech: {
    text: string;                    // What avatar should speak (warm welcome message) - MUST be plain text, no markdown or LaTeX
    emotion: 'encouraging' | 'celebratory' | 'supportive' | 'neutral';
  };
  display: {
    content: string;                 // The first problem text to display
    showAfterSpeech: boolean;        // Show after speech completes
    type?: string;                   // Type of display (e.g., 'question')
    notes?: Record<string, any>;     // Optional notes about the display
  };
  mathTool?: MathTool;              // Optional visual tool to show with the problem
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
// PRACTICE MODE TYPES (PATH-BASED)
// ============================================
// Types will be imported from types/practice.ts

// ============================================
// SECTION PROGRESSION TRACKING
// ============================================

export interface SectionProgressEntry {
  sectionId: string;                   // e.g., "triangle-labeling"
  enteredAt: number;                   // timestamp when section started
  masteredAt: number | null;           // timestamp when mastered, null if not yet
  questionsAttempted: number;          // total questions in this section
  questionsCorrect: number;            // correct answers in this section
  hintsUsed: number;                   // hints used in this section
}

export interface SectionProgressState {
  currentSection: string;              // Current section ID
  masteredSections: string[];          // Array of mastered section IDs
  sectionHistory: SectionProgressEntry[]; // Detailed history per section
}