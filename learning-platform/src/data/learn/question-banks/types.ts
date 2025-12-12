/**
 * Types for pre-generated question banks used in Learn module
 * for topics where AI-generated questions are unreliable
 */

export interface SolutionStep {
  stepNumber: number;
  text: string;
}

export interface PreGeneratedQuestion {
  questionId: string;
  problemStatement: string;
  /** Image that IS the problem (e.g., geometric figure to analyze) - shown immediately */
  imagePath?: string;
  /** Image as a hint/scaffold (e.g., bar model) - revealed when student struggles */
  hintImagePath?: string;
  correctAnswer: string | number;
  stepByStepSolution: SolutionStep[];
}

export interface QuestionBankEntry {
  sectionIndex: number;
  questions: PreGeneratedQuestion[];
}

export type QuestionBank = QuestionBankEntry[];
