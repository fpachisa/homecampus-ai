/**
 * Firestore Subtopic Configurations for P6 Fractions (Division of Fractions)
 *
 * Topic: Fractions
 * Subtopics:
 *   1. Dividing a Fraction by a Whole Number (3 sections)
 *   2. Dividing a Whole Number by a Fraction (3 sections)
 *   3. Dividing a Fraction by a Fraction (4 sections)
 *   4. Word Problems (3 sections)
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

export const P6_FRACTIONS_FIRESTORE_CONFIGS = [
  // ========================================
  // SUBTOPIC 1: Dividing a Fraction by a Whole Number
  // ========================================
  {
    id: "p6-math-fractions-divide-by-whole",
    displayName: "Dividing a Fraction by a Whole Number",
    grade: "p6",
    subject: "math",
    topic: "fractions",
    subtopic: "divide-by-whole",
    metadata: {
      difficulty: "beginner",
      estimatedMinutes: 45,
      prerequisites: []
    },
    notesComponent: "p6/math/fractions/DivideFractionByWhole",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 2: Dividing a Whole Number by a Fraction
  // ========================================
  {
    id: "p6-math-fractions-whole-by-fraction",
    displayName: "Dividing a Whole Number by a Fraction",
    grade: "p6",
    subject: "math",
    topic: "fractions",
    subtopic: "whole-by-fraction",
    metadata: {
      difficulty: "beginner-intermediate",
      estimatedMinutes: 50,
      prerequisites: ["p6-math-fractions-divide-by-whole"]
    },
    notesComponent: "p6/math/fractions/DivideWholeByFraction",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 3: Dividing a Fraction by a Fraction
  // ========================================
  {
    id: "p6-math-fractions-fraction-by-fraction",
    displayName: "Dividing a Fraction by a Fraction",
    grade: "p6",
    subject: "math",
    topic: "fractions",
    subtopic: "fraction-by-fraction",
    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 55,
      prerequisites: [
        "p6-math-fractions-divide-by-whole",
        "p6-math-fractions-whole-by-fraction"
      ]
    },
    notesComponent: "p6/math/fractions/DivideFractionByFraction",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 4: Word Problems
  // ========================================
  {
    id: "p6-math-fractions-word-problems",
    displayName: "Word Problems",
    grade: "p6",
    subject: "math",
    topic: "fractions",
    subtopic: "word-problems",
    metadata: {
      difficulty: "intermediate-advanced",
      estimatedMinutes: 60,
      prerequisites: [
        "p6-math-fractions-divide-by-whole",
        "p6-math-fractions-whole-by-fraction",
        "p6-math-fractions-fraction-by-fraction"
      ]
    },
    notesComponent: "p6/math/fractions/WordProblems",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];
