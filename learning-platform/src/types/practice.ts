/**
 * Practice Mode Types - Path-Based System
 *
 * Simple, organic structure that can evolve over time.
 * Layered learning path with gamification features.
 */

import type { QuestionTable } from './examQuestions';

// ============================================
// PATH LAYERS
// ============================================

export type PathDifficulty = 'easy' | 'medium' | 'hard'; // Deprecated, keeping for backward compatibility
export type PathLayer = 'foundation' | 'integration' | 'application' | 'examPractice';

// ============================================
// NODE STRUCTURE
// ============================================

/**
 * Pre-written question for exam-style problems
 * Questions are loaded from YAML instead of AI-generated
 */
export interface PreWrittenQuestion {
  id: string;                     // Unique identifier (e.g., "q26-a", "q26-b")
  problemText: string;            // The actual question text
  avatarIntro?: string;           // Optional intro speech (typically for first question only)
  diagramSvg?: string;            // Optional path to pre-built SVG diagram
  questionGroup?: string;         // Group identifier for multi-part questions (e.g., "q26", "q27")

  // NEW: Math tool for interactive visualizations (alternative to diagramSvg)
  // Used for AI-generated pre-written questions that use interactive tools instead of static diagrams
  mathTool?: {
    toolName: string;              // e.g., "setVisualizer", "rightTriangle"
    parameters: Record<string, any>; // Tool-specific parameters
  };

  // NEW: Table data for questions with tabular information
  // Used for pricing tables, data tables, etc.
  tableData?: {
    title?: string;
    zones?: Record<string, Record<string, any>>;
    constraints?: Record<string, string>;
    bookSpecs?: Record<string, string>;
    [key: string]: any;
  };

  // NEW: Structured table for exam questions (markdown tables converted to structured format)
  questionTable?: QuestionTable;

  // NEW: Pre-written answer and solution (optional)
  // If provided, these will be used instead of AI-solving the question
  finalAnswer?: string;           // The correct final answer (e.g., "222 m", "67.5°", "1250 m²")
  stepByStepGuideline?: string[]; // Array of solution steps with LaTeX formatting
}

export interface NodeDescriptor {
  // CRITICAL: Sample problems that define the pattern
  problemDescription: string[];

  // Context themes to vary
  contexts: string[];

  // Difficulty level (deprecated, use PathNode.layer instead)
  difficulty?: PathDifficulty;

  // Required math tool/visualization for this node
  // e.g., "rightTriangle", "extendedLineTriangle", "bearingsVisualizer"
  mathTool?: string;

  // @deprecated Use mathTool instead. Kept for backward compatibility.
  extraMathTool?: string;

  // @deprecated Old format with subtopics. Kept for backward compatibility.
  subtopics?: any[];

  // NEW: Flag for pre-written vs AI-generated questions
  // Default: true (AI-generated)
  // Set to false for exam-style pre-written questions
  aiGeneratedQuestions?: boolean;

  // NEW: Pre-written questions (used when aiGeneratedQuestions = false)
  preWrittenQuestions?: PreWrittenQuestion[];
}

export interface PathNode {
  id: string;                    // e.g., "trig-node-1"
  nodeNumber: number;            // 1-15 for unified path
  title: string;                 // e.g., "Finding Missing Sides"
  problemsRequired: number;      // e.g., 5-8 problems to complete node

  // NEW: Layer categorization
  layer: PathLayer;              // foundation, integration, or application

  // NEW: Prerequisites (empty array = no prereqs, can start here)
  prerequisites: string[];       // Array of node IDs that should ideally be completed first

  // Core descriptor for AI problem generation
  descriptor: NodeDescriptor;
}

// ============================================
// PATH CONFIGURATION
// ============================================

export interface PathConfig {
  category: string;              // e.g., "trigonometry"
  difficulty: PathDifficulty;
  nodes: PathNode[];             // Initial 10 nodes
  cycle: number;                 // 0 = first 10, 1 = next 10, etc.
}

export interface PathConfigSet {
  easy: PathNode[];
  medium: PathNode[];
  hard: PathNode[];
}

// ============================================
// PROGRESS TRACKING
// ============================================

export interface NodeProgress {
  nodeId: string;
  problemsAttempted: number;
  problemsCorrect: number;
  status: 'locked' | 'current' | 'completed';
  completedAt?: Date;
  timeSpentSeconds?: number;  // Time spent on this node
}

// ============================================
// GAMIFICATION FEATURES
// ============================================

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;           // Emoji or icon name
  earnedAt: Date;
  xpReward: number;
}

export interface DailyStreak {
  currentStreak: number;        // Current consecutive days
  longestStreak: number;        // Best streak ever
  lastActivityDate: string;     // ISO date string (YYYY-MM-DD)
  streakDates: string[];        // Array of active dates (last 30 days)
}

export interface SessionStats {
  date: string;                 // ISO date string
  problemsSolved: number;
  timeSpentSeconds: number;
  xpEarned: number;
  accuracy: number;             // 0-100%
}

export interface PathProgress {
  category: string;
  difficulty?: PathDifficulty;     // Deprecated: Kept for backward compatibility
  currentNodeId: string | null;   // Currently selected/active node
  currentCycle: number;            // Which set of nodes (0 = first set)
  nodes: Record<string, NodeProgress>;

  // Layer-based progress tracking
  layerProgress: {
    foundation: { completed: number; total: number };    // e.g., 5/7
    integration: { completed: number; total: number };   // e.g., 2/4
    application: { completed: number; total: number };   // e.g., 0/4
    examPractice: { completed: number; total: number };  // e.g., 0/18
  };

  totalProblemsAttempted: number;
  totalProblemsCorrect: number;
  pathStartedAt: Date;
  lastUpdated: Date;

  // NEW: Entry point selection (where student chose to start)
  entryPoint?: 'foundation' | 'integration' | 'application' | 'explore';

  // NEW: Gamification features
  totalXP: number;                          // Total experience points earned
  currentLevel: number;                     // Current level (calculated from XP)
  achievements: Achievement[];              // Earned achievements
  sessionHistory: SessionStats[];           // Last 30 days of sessions
  totalTimeSpentSeconds: number;            // Total time spent on this path

  // Weekly/Daily stats for quick access
  weeklyStats?: {
    problemsSolved: number;
    timeSpentSeconds: number;
    xpEarned: number;
    averageAccuracy: number;
  };
}

// NEW: Unified single path state (replaces 3-path system)
export interface PracticePathState {
  category: string;
  progress: PathProgress;          // Single unified path

  // Deprecated: Keeping for backward compatibility during migration
  paths?: {
    easy: PathProgress;
    medium: PathProgress;
    hard: PathProgress;
  };
}

// ============================================
// PROBLEM TYPES
// ============================================

export interface PathProblem {
  id: string;
  nodeId: string;
  problemText: string;
  correctAnswer: string;
  context: string;
  subtopicId: string;
  difficulty: PathDifficulty;
  generatedAt: Date;
  solutionSteps?: string[];        // Optional step-by-step solution

  // Optional math tool visualization (generated by AI)
  mathTool?: {
    toolName: string;               // e.g., "rightTriangle", "elevationDepression"
    parameters: Record<string, any>; // Tool-specific parameters
    caption: string;                // Caption describing the visualization
  };

  // NEW: For pre-written questions with pre-built diagrams
  diagramSvg?: string;             // Path to pre-built SVG diagram

  // NEW: Table data for questions with tabular information
  tableData?: {
    title?: string;
    zones?: Record<string, Record<string, any>>;
    constraints?: Record<string, string>;
    bookSpecs?: Record<string, string>;
    [key: string]: any;
  };

  // NEW: Structured table for exam questions  
  questionTable?: QuestionTable;

  // NEW: Group identifier for multi-part questions
  questionGroup?: string;          // Group identifier (e.g., "q26", "q27") for related multi-part questions

  // NEW: Metadata for pre-written questions
  metadata?: {
    isPreWritten?: boolean;        // True if loaded from YAML
    avatarIntro?: string;          // Stored intro speech for first question
    partNumber?: number;           // Part number (1, 2, 3, etc.)
    totalParts?: number;           // Total number of parts in the question set
    [key: string]: any;            // Allow other metadata
  };
}

export interface ProblemAttempt {
  problemId: string;
  nodeId: string;
  studentAnswer: string;
  isCorrect: boolean;
  hintsUsed: number;
  attemptedAt: Date;
  timeSpentSeconds: number;
}

// ============================================
// SESSION STATE
// ============================================

export interface NodeSessionState {
  nodeId: string;
  currentProblemIndex: number;
  problems: PathProblem[];
  attempts: ProblemAttempt[];
  startedAt: Date;
}

// ============================================
// ENHANCED PRACTICE WITH HISTORY
// ============================================

export interface AttemptHistory {
  attemptNumber: number;
  studentAnswer: string;
  avatarSpeech: string;    // Brief speech for avatar
  hint?: string;           // Detailed hint for display (only for incorrect answers)
  explanation?: string;    // Brief explanation for correct answers
  isCorrect: boolean;
  timestamp: Date;
}

export interface EvaluationWithHistory {
  isCorrect: boolean;
  avatarSpeech: string;    // Brief encouraging speech for avatar (1-2 sentences)
  hint?: string;           // Detailed hint for incorrect answers (only when isCorrect=false)
  hintLevel?: number;      // 1-3 based on attempt number (only when isCorrect=false)
  explanation?: string;    // Brief explanation for correct answers (only when isCorrect=true)
}

export interface RelatedQuestionContext {
  problemId: string;
  problemText: string;
  studentAnswer: string;
  isCorrect: boolean;
}

// ============================================
// SCRATCH PAD
// ============================================

export interface ScratchPadData {
  mode: 'text' | 'draw';
  textContent: string;
  drawingData: string;     // base64 PNG image data
  lastModified: Date;
}

export interface ProblemSessionState {
  problemId: string;
  attemptCount: number;    // Current attempt number (1-3)
  attemptHistory: AttemptHistory[];  // All attempts for this problem
  canRetry: boolean;       // True if attemptCount < 3
  showingSolution: boolean;
  scratchPad?: ScratchPadData; // Optional scratch pad work space
}
