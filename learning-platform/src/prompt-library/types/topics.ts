/**
 * Topic and Subject Type Definitions
 * Types for educational content organization
 */

import { GradeLevel, SubjectType, DifficultyLevel } from './prompts';

// ============================================
// Topic Structure Types
// ============================================

export interface Topic {
  id: string;
  displayName: string;
  subject: SubjectType;
  gradeLevel: GradeLevel;
  prerequisites?: string[];
  estimatedDuration?: number; // in minutes
  tags?: string[];
  metadata?: TopicMetadata;
}

export interface TopicMetadata {
  author?: string;
  createdAt?: Date;
  updatedAt?: Date;
  version?: string;
  curriculum?: string;
  examBoard?: string;
  language?: string;
}

// ============================================
// Subject Configuration Types
// ============================================

export interface SubjectConfig {
  id: string;
  name: string;
  type: SubjectType;
  description?: string;
  icon?: string;
  color?: string;
  topics: TopicReference[];
  tools?: SubjectTool[];
  commonFormulas?: Formula[];
}

export interface TopicReference {
  topicId: string;
  order: number;
  optional?: boolean;
  alternativeTo?: string;
}

export interface SubjectTool {
  id: string;
  name: string;
  type: 'visualization' | 'calculator' | 'reference';
  applicableTopics?: string[];
}

export interface Formula {
  id: string;
  name: string;
  latex: string;
  description?: string;
  applicableTopics?: string[];
}

// ============================================
// Mathematics-specific Types
// ============================================

export interface MathematicsTopic extends Topic {
  concepts: MathConcept[];
  formulas: MathFormula[];
  visualTools?: MathVisualizationTool[];
  problemTypes?: ProblemType[];
}

export interface MathConcept {
  id: string;
  name: string;
  definition: string;
  examples?: string[];
  relatedConcepts?: string[];
}

export interface MathFormula {
  id: string;
  name: string;
  formula: string;
  latex: string;
  variables?: FormulaVariable[];
  usage?: string;
}

export interface FormulaVariable {
  symbol: string;
  meaning: string;
  unit?: string;
}

export interface MathVisualizationTool {
  id: string;
  name: string;
  type: 'geometry' | 'graph' | 'diagram' | 'animation';
  parameters?: ToolParameter[];
}

export interface ToolParameter {
  name: string;
  type: 'number' | 'string' | 'boolean' | 'angle' | 'length';
  default?: any;
  range?: [number, number];
  required?: boolean;
}

export interface ProblemType {
  id: string;
  name: string;
  difficulty: DifficultyLevel;
  concepts: string[];
  solutionSteps?: string[];
  commonMistakes?: string[];
}

// ============================================
// Science-specific Types
// ============================================

export interface ScienceTopic extends Topic {
  concepts: ScienceConcept[];
  experiments?: Experiment[];
  phenomena?: Phenomenon[];
}

export interface ScienceConcept {
  id: string;
  name: string;
  theory: string;
  applications?: string[];
  misconceptions?: string[];
}

export interface Experiment {
  id: string;
  name: string;
  objective: string;
  materials: string[];
  procedure: string[];
  expectedResults?: string;
  safetyNotes?: string[];
}

export interface Phenomenon {
  id: string;
  name: string;
  description: string;
  explanation: string;
  examples?: string[];
}

// ============================================
// Language-specific Types
// ============================================

export interface LanguageTopic extends Topic {
  skills: LanguageSkill[];
  grammar?: GrammarRule[];
  vocabulary?: VocabularySet[];
}

export interface LanguageSkill {
  type: 'reading' | 'writing' | 'listening' | 'speaking';
  objectives: string[];
  activities?: string[];
}

export interface GrammarRule {
  id: string;
  name: string;
  rule: string;
  examples: string[];
  exceptions?: string[];
}

export interface VocabularySet {
  id: string;
  theme: string;
  words: VocabularyWord[];
  difficulty: DifficultyLevel;
}

export interface VocabularyWord {
  word: string;
  definition: string;
  partOfSpeech?: string;
  example?: string;
  synonyms?: string[];
  antonyms?: string[];
}

// ============================================
// Learning Path Types
// ============================================

export interface LearningPath {
  id: string;
  name: string;
  description?: string;
  targetGrade: GradeLevel;
  subjects: SubjectPath[];
  estimatedDuration?: number;
  certification?: string;
}

export interface SubjectPath {
  subjectId: string;
  topics: TopicNode[];
  weight?: number; // Percentage of overall path
}

export interface TopicNode {
  topicId: string;
  order: number;
  required: boolean;
  dependencies?: string[];
  assessmentType?: 'quiz' | 'project' | 'exam';
  passingScore?: number;
}

// ============================================
// Progression Types
// ============================================

export interface TopicProgression {
  topicId: string;
  sections: ProgressionNode[];
  masteryPhilosophy: string;
  assessmentStrategy?: string;
}

export interface ProgressionNode {
  id: string;
  title: string;
  order: number;
  difficulty: DifficultyLevel;

  objectives: string[];
  prerequisites: string[];

  masterySignals: MasterySignal[];
  masteryRubric?: MasteryRubric;  // Optional: Structured rubric for AI evaluation
  estimatedQuestions: number;
  estimatedTime?: number;

  content?: SectionContent;
  assessment?: SectionAssessment;
}

export interface MasterySignal {
  type: 'correct_answers' | 'time_spent' | 'hints_used' | 'explanation_quality';
  threshold: number | string;
  weight?: number;
}

/**
 * Structured mastery rubric for evaluator assessment
 * Combines quantitative (trackable) and qualitative (AI judgment) criteria
 */
export interface MasteryRubric {
  mastery: MasteryLevel;
  developing: MasteryLevel;
  struggling: MasteryLevel;
}

export interface MasteryLevel {
  quantitative: string[];  // Observable metrics: "2+ correct without hints"
  qualitative: string[];   // AI-assessed criteria: "Uses correct terminology"
}

export interface SectionContent {
  concepts: string[];
  formulas?: string[];
  examples?: any[];
  visualizations?: string[];
  practiceProblems?: any[];
}

export interface SectionAssessment {
  type: 'formative' | 'summative';
  questions: number;
  passingScore: number;
  allowRetry: boolean;
  feedbackLevel: 'immediate' | 'delayed' | 'none';
}