/**
 * Firestore Subtopic Configurations for P6 Volume of Cube and Cuboid
 *
 * Topic: Volume of Cube and Cuboid
 * Subtopics:
 *   1. Finding the Side of Cube or Cuboid (4 sections)
 *   2. Finding the Area of One Face (3 sections)
 *   3. Word Problems (3 sections)
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

export const P6_VOLUME_FIRESTORE_CONFIGS = [
  // ========================================
  // SUBTOPIC 1: Finding the Side of Cube or Cuboid
  // ========================================
  {
    id: "p6-math-volume-finding-side",
    displayName: "Finding the Side of Cube or Cuboid",
    grade: "p6",
    subject: "math",
    topic: "volume-cube-cuboid",
    subtopic: "finding-side",
    metadata: {
      difficulty: "beginner-intermediate",
      estimatedMinutes: 60,
      prerequisites: []
    },
    notesComponent: "p6/math/volume-cube-cuboid/FindingSide",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 2: Finding the Area of One Face
  // ========================================
  {
    id: "p6-math-volume-face-area",
    displayName: "Finding the Area of One Face",
    grade: "p6",
    subject: "math",
    topic: "volume-cube-cuboid",
    subtopic: "face-area",
    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 45,
      prerequisites: ["p6-math-volume-finding-side"]
    },
    notesComponent: "p6/math/volume-cube-cuboid/FaceArea",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 3: Word Problems
  // ========================================
  {
    id: "p6-math-volume-word-problems",
    displayName: "Word Problems",
    grade: "p6",
    subject: "math",
    topic: "volume-cube-cuboid",
    subtopic: "word-problems",
    metadata: {
      difficulty: "intermediate-advanced",
      estimatedMinutes: 60,
      prerequisites: [
        "p6-math-volume-finding-side",
        "p6-math-volume-face-area"
      ]
    },
    notesComponent: "p6/math/volume-cube-cuboid/WordProblems",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];
