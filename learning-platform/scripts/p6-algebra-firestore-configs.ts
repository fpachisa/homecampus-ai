/**
 * Firestore Subtopic Configurations for P6 Algebra
 *
 * Topic: Algebra
 * Subtopics:
 *   1. Writing Algebraic Expressions (5 sections)
 *   2. Simplifying Expressions (4 sections)
 *   3. Evaluating Expressions (4 sections)
 *   4. Solving Equations (4 sections)
 */

const STANDARD_SCORING = {
  easy: { basePoints: 0.10, hintPenalties: [0.02, 0.04, 0.06] },
  medium: { basePoints: 0.20, hintPenalties: [0.04, 0.08, 0.12] },
  hard: { basePoints: 0.30, hintPenalties: [0.06, 0.12, 0.20] }
};

const STANDARD_MODULES = {
  learn: true,
  practice: true,
  visualizations: true
};

export const P6_ALGEBRA_FIRESTORE_CONFIGS = [
  // ========================================
  // SUBTOPIC 1: Writing Algebraic Expressions
  // ========================================
  {
    id: "p6-math-algebra-writing-expressions",
    displayName: "Writing Algebraic Expressions",
    grade: "p6",
    subject: "math",
    topic: "algebra",
    subtopic: "writing-expressions",
    metadata: {
      difficulty: "beginner",
      estimatedMinutes: 50,
      prerequisites: []
    },
    notesComponent: "p6/math/algebra/WritingExpressions",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 2: Simplifying Expressions
  // ========================================
  {
    id: "p6-math-algebra-simplifying",
    displayName: "Simplifying Expressions",
    grade: "p6",
    subject: "math",
    topic: "algebra",
    subtopic: "simplifying",
    metadata: {
      difficulty: "beginner-intermediate",
      estimatedMinutes: 50,
      prerequisites: ["p6-math-algebra-writing-expressions"]
    },
    notesComponent: "p6/math/algebra/SimplifyingExpressions",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 3: Evaluating Expressions
  // ========================================
  {
    id: "p6-math-algebra-evaluating",
    displayName: "Evaluating Expressions",
    grade: "p6",
    subject: "math",
    topic: "algebra",
    subtopic: "evaluating",
    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 45,
      prerequisites: [
        "p6-math-algebra-writing-expressions",
        "p6-math-algebra-simplifying"
      ]
    },
    notesComponent: "p6/math/algebra/EvaluatingExpressions",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 4: Solving Equations
  // ========================================
  {
    id: "p6-math-algebra-solving",
    displayName: "Solving Equations",
    grade: "p6",
    subject: "math",
    topic: "algebra",
    subtopic: "solving",
    metadata: {
      difficulty: "intermediate-advanced",
      estimatedMinutes: 60,
      prerequisites: [
        "p6-math-algebra-writing-expressions",
        "p6-math-algebra-simplifying",
        "p6-math-algebra-evaluating"
      ]
    },
    notesComponent: "p6/math/algebra/SolvingEquations",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];
