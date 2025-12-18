/**
 * Firestore Subtopic Configurations for P6 Ratios
 *
 * Topic: Ratios
 * Subtopics:
 *   1. Introduction to Ratios (2 sections)
 *   2. Equivalent Ratios (2 sections)
 *   3. Finding Equivalent Ratios (2 sections)
 *   4. Finding New Ratios (3 sections)
 *   5. Fraction and Ratio (2 sections)
 *   6. Word Problems (2 sections)
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

export const P6_RATIOS_FIRESTORE_CONFIGS = [
  // ========================================
  // SUBTOPIC 1: Introduction to Ratios
  // ========================================
  {
    id: "p6-math-ratios-introduction",
    displayName: "Introduction to Ratios",
    grade: "p6",
    subject: "math",
    topic: "ratios",
    subtopic: "introduction",
    metadata: {
      difficulty: "beginner",
      estimatedMinutes: 40,
      prerequisites: []
    },
    notesComponent: "p6/math/ratios/Introduction",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 2: Equivalent Ratios
  // ========================================
  {
    id: "p6-math-ratios-equivalent-ratios",
    displayName: "Equivalent Ratios",
    grade: "p6",
    subject: "math",
    topic: "ratios",
    subtopic: "equivalent-ratios",
    metadata: {
      difficulty: "beginner",
      estimatedMinutes: 45,
      prerequisites: ["p6-math-ratios-introduction"]
    },
    notesComponent: "p6/math/ratios/EquivalentRatios",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 3: Finding Equivalent Ratios
  // ========================================
  {
    id: "p6-math-ratios-finding-equivalent",
    displayName: "Finding Equivalent Ratios",
    grade: "p6",
    subject: "math",
    topic: "ratios",
    subtopic: "finding-equivalent",
    metadata: {
      difficulty: "beginner-intermediate",
      estimatedMinutes: 50,
      prerequisites: [
        "p6-math-ratios-introduction",
        "p6-math-ratios-equivalent-ratios"
      ]
    },
    notesComponent: "p6/math/ratios/FindingEquivalent",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 4: Finding New Ratios (Three-Term Ratios)
  // ========================================
  {
    id: "p6-math-ratios-finding-new-ratios",
    displayName: "Finding New Ratios",
    grade: "p6",
    subject: "math",
    topic: "ratios",
    subtopic: "finding-new-ratios",
    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 55,
      prerequisites: [
        "p6-math-ratios-introduction",
        "p6-math-ratios-equivalent-ratios",
        "p6-math-ratios-finding-equivalent"
      ]
    },
    notesComponent: "p6/math/ratios/FindingNewRatios",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 5: Fraction and Ratio
  // ========================================
  {
    id: "p6-math-ratios-fraction-and-ratio",
    displayName: "Fraction and Ratio",
    grade: "p6",
    subject: "math",
    topic: "ratios",
    subtopic: "fraction-and-ratio",
    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 50,
      prerequisites: [
        "p6-math-ratios-introduction",
        "p6-math-ratios-equivalent-ratios"
      ]
    },
    notesComponent: "p6/math/ratios/FractionAndRatio",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 6: Word Problems
  // ========================================
  {
    id: "p6-math-ratios-word-problems",
    displayName: "Word Problems",
    grade: "p6",
    subject: "math",
    topic: "ratios",
    subtopic: "word-problems",
    metadata: {
      difficulty: "intermediate-advanced",
      estimatedMinutes: 60,
      prerequisites: [
        "p6-math-ratios-introduction",
        "p6-math-ratios-equivalent-ratios",
        "p6-math-ratios-finding-equivalent",
        "p6-math-ratios-finding-new-ratios",
        "p6-math-ratios-fraction-and-ratio"
      ]
    },
    notesComponent: "p6/math/ratios/WordProblems",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];
