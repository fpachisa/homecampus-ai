/**
 * Firestore Subtopic Configurations for P6 Percentage
 *
 * Topic: Percentage
 * Subtopics:
 *   1. Finding the Whole (4 sections)
 *   2. Percentage Increase (4 sections)
 *   3. Percentage Decrease (4 sections)
 *   4. Word Problems (6 sections)
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

export const P6_PERCENTAGE_FIRESTORE_CONFIGS = [
  // ========================================
  // SUBTOPIC 1: Finding the Whole
  // ========================================
  {
    id: "p6-math-percentage-finding-whole",
    displayName: "Finding the Whole",
    grade: "p6",
    subject: "math",
    topic: "percentage",
    subtopic: "finding-whole",
    metadata: {
      difficulty: "beginner",
      estimatedMinutes: 45,
      prerequisites: ["p5-math-percentage-part-of-whole"]
    },
    notesComponent: "p6/math/percentage/FindingTheWhole",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 2: Percentage Increase
  // ========================================
  {
    id: "p6-math-percentage-increase",
    displayName: "Percentage Increase",
    grade: "p6",
    subject: "math",
    topic: "percentage",
    subtopic: "increase",
    metadata: {
      difficulty: "beginner-intermediate",
      estimatedMinutes: 50,
      prerequisites: ["p6-math-percentage-finding-whole"]
    },
    notesComponent: "p6/math/percentage/PercentageIncrease",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 3: Percentage Decrease
  // ========================================
  {
    id: "p6-math-percentage-decrease",
    displayName: "Percentage Decrease",
    grade: "p6",
    subject: "math",
    topic: "percentage",
    subtopic: "decrease",
    metadata: {
      difficulty: "beginner-intermediate",
      estimatedMinutes: 50,
      prerequisites: [
        "p6-math-percentage-finding-whole",
        "p6-math-percentage-increase"
      ]
    },
    notesComponent: "p6/math/percentage/PercentageDecrease",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 4: Word Problems
  // ========================================
  {
    id: "p6-math-percentage-word-problems",
    displayName: "Word Problems",
    grade: "p6",
    subject: "math",
    topic: "percentage",
    subtopic: "word-problems",
    metadata: {
      difficulty: "intermediate-advanced",
      estimatedMinutes: 60,
      prerequisites: [
        "p6-math-percentage-finding-whole",
        "p6-math-percentage-increase",
        "p6-math-percentage-decrease"
      ]
    },
    notesComponent: "p6/math/percentage/WordProblems",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];
