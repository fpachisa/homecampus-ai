// Four Operations on Whole Numbers - Notes Index
// P5 Mathematics Chapter 2

export { default as MultiplyBy10_100_1000 } from './MultiplyBy10_100_1000';
export { default as MultiplyByTensHundredsThousands } from './MultiplyByTensHundredsThousands';
export { default as DivideBy10_100_1000 } from './DivideBy10_100_1000';
export { default as DivideByTensHundredsThousands } from './DivideByTensHundredsThousands';
export { default as OrderOfOperations } from './OrderOfOperations';
export { default as OrderOfOperationsWithBrackets } from './OrderOfOperationsWithBrackets';
export { default as WordProblems } from './WordProblems';

// Word Problems Data (for AI integration and notes)
export {
  WORD_PROBLEMS,
  CATEGORY_INFO,
  getProblemsByCategory,
  getProblemsByDifficulty,
  getProblemById,
  getProblemByNumber,
  getCategoriesInOrder,
  getProblemCountByCategory
} from './wordProblemsData';
export type {
  WordProblem,
  ProblemCategory,
  SolutionStep
} from './wordProblemsData';

// Type for subtopic IDs
export type FourOperationsSubtopicId =
  | 'multiply-by-10-100-1000'
  | 'multiply-by-tens-hundreds-thousands'
  | 'divide-by-10-100-1000'
  | 'divide-by-tens-hundreds-thousands'
  | 'order-of-operations'
  | 'order-of-operations-brackets'
  | 'word-problems';

// Map of subtopic IDs to their note components
export const FOUR_OPERATIONS_NOTES_MAP: Record<FourOperationsSubtopicId, React.ComponentType> = {
  'multiply-by-10-100-1000': require('./MultiplyBy10_100_1000').default,
  'multiply-by-tens-hundreds-thousands': require('./MultiplyByTensHundredsThousands').default,
  'divide-by-10-100-1000': require('./DivideBy10_100_1000').default,
  'divide-by-tens-hundreds-thousands': require('./DivideByTensHundredsThousands').default,
  'order-of-operations': require('./OrderOfOperations').default,
  'order-of-operations-brackets': require('./OrderOfOperationsWithBrackets').default,
  'word-problems': require('./WordProblems').default,
};
