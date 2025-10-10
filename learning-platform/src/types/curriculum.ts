/**
 * Universal Curriculum Type Definitions
 *
 * These types support a scalable, topic-agnostic learning platform
 * that works across all subjects, grades, and topics.
 */

// ============================================
// CURRICULUM HIERARCHY
// ============================================

export interface CurriculumMetadata {
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedMinutes: number;
  prerequisites: string[];
}

// ============================================
// SUBTOPIC CONFIGURATION
// ============================================

export interface SubtopicConfig {
  // Identification
  id: string;
  displayName: string;
  grade: string;
  subject: string;
  topic: string;
  subtopic: string;

  // Metadata
  metadata: CurriculumMetadata;

  // Content (stored separately in Cloud Storage, referenced here)
  comprehensiveNotesUrl?: string;  // Cloud Storage URL to MDX file
  notesComponent?: string;          // Path to React component (e.g., "s3/math/trigonometry/BasicRatios")
  teachingTemplate: string;         // AI-condensed template (800-1000 words)

  // Scoring configuration (universal across all topics)
  scoring: ScoringConfig;

  // Module availability
  modules: ModuleConfig;

  // Timestamps
  createdAt?: Date;
  updatedAt?: Date;
  notesLastUpdated?: Date;
  templateGeneratedAt?: Date;
  templateVersion?: string;
}

export interface ScoringConfig {
  easy: ScoringTier;
  medium: ScoringTier;
  hard: ScoringTier;
}

export interface ScoringTier {
  basePoints: number;
  hintPenalties: number[]; // [first, second, third+]
}

export interface ModuleConfig {
  learn: boolean;           // Socratic tutoring available
  practice: boolean;        // Practice mode available
  visualizations: boolean;  // Has visual components
}

// ============================================
// TEACHING TEMPLATE
// ============================================

export interface TeachingTemplate {
  subtopicId: string;
  version: string;
  generatedAt: Date;
  generatedFrom: {
    notesUrl: string;
    aiModel: string;
  };

  // Condensed content (800-1000 words)
  content: string;

  // Metadata
  wordCount: number;
  sections: string[]; // List of section titles
}

// ============================================
// NOTES METADATA
// ============================================

export interface NotesMetadata {
  subtopicId: string;
  title: string;
  author?: string;
  createdAt: Date;
  updatedAt: Date;
  version: string;

  // Cloud Storage info
  storageUrl: string;
  fileSize: number;
  mimeType: string;

  // Content info
  estimatedReadingTime: number; // minutes
  wordCount?: number;
  hasInteractiveComponents: boolean;
  componentTypes?: string[]; // e.g., ['FractionVisualizer', 'Quiz', 'WorkedExample']
}

// ============================================
// GENERATED CONTENT CACHE
// ============================================

export interface GeneratedContent {
  subtopicId: string;
  type: 'problem' | 'hint' | 'solution' | 'evaluation';
  content: any;
  generatedAt: Date;
  difficulty?: 'easy' | 'medium' | 'hard';
  context?: string;
  expiresAt?: Date; // Optional TTL for cache
}

// ============================================
// YAML CONFIGURATION FORMAT
// ============================================

export interface SubtopicYAML {
  id: string;
  displayName: string;
  grade: string;
  subject: string;
  topic: string;
  subtopic: string;

  metadata: {
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    estimatedMinutes: number;
    prerequisites: string[];
  };

  scoring: {
    easy: { basePoints: number; hintPenalties: number[] };
    medium: { basePoints: number; hintPenalties: number[] };
    hard: { basePoints: number; hintPenalties: number[] };
  };

  modules: {
    learn: boolean;
    practice: boolean;
    visualizations: boolean;
  };
}

// ============================================
// PROBLEM GENERATION (UNIVERSAL)
// ============================================

export interface GeneratedProblem {
  problemText: string;
  correctAnswer: string;
  context: string;
  difficulty: 'easy' | 'medium' | 'hard';
  solutionSteps: string[];
  metadata?: Record<string, any>; // Topic-specific extras
}

export interface ProblemGenerationRequest {
  subtopicId: string;
  difficulty: 'easy' | 'medium' | 'hard';
  contextPreferences?: string[]; // Student's preferred contexts (e.g., 'spaceship', 'dinosaur')
  excludeContexts?: string[];    // Recently used contexts to avoid
}

// ============================================
// EVALUATION (UNIVERSAL)
// ============================================

export interface EvaluationRequest {
  subtopicId: string;
  currentProblem: string;
  studentResponse: string;
  context: {
    hintsGiven: number;
    attempts: number;
    recentHistory: string;
  };
}

export interface EvaluationResponse {
  answerCorrect: boolean;
  understanding: 'none' | 'partial' | 'complete';
  action: 'GIVE_HINT' | 'GIVE_SOLUTION' | 'NEW_PROBLEM' | 'CELEBRATE';
  hintLevel?: 1 | 2 | 3;
  reasoning: string;
  pointsEarned: number;
  feedback: string;
}
