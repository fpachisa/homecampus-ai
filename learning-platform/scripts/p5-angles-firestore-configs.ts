/**
 * Firestore Subtopic Configurations for P5 Angles
 *
 * Topic: Angles
 * Subtopics:
 *   1. Angles on a Straight Line (3 sections)
 *   2. Vertically Opposite Angles (3 sections)
 *   3. Angles at a Point (3 sections)
 *   4. Finding Unknown Angles (3 sections)
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

export const P5_ANGLES_FIRESTORE_CONFIGS = [
  // ========================================
  // SUBTOPIC 1: Angles on a Straight Line
  // ========================================
  {
    id: "p5-math-angles-straight-line",
    displayName: "Angles on a Straight Line",
    grade: "p5",
    subject: "math",
    topic: "angles",
    subtopic: "straight-line",
    metadata: {
      difficulty: "beginner",
      estimatedMinutes: 45,
      prerequisites: []
    },
    notesComponent: "p5/math/angles/AnglesOnStraightLine",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 2: Vertically Opposite Angles
  // ========================================
  {
    id: "p5-math-angles-vertically-opposite",
    displayName: "Vertically Opposite Angles",
    grade: "p5",
    subject: "math",
    topic: "angles",
    subtopic: "vertically-opposite",
    metadata: {
      difficulty: "beginner-intermediate",
      estimatedMinutes: 45,
      prerequisites: ["p5-math-angles-straight-line"]
    },
    notesComponent: "p5/math/angles/VerticallyOppositeAngles",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 3: Angles at a Point
  // ========================================
  {
    id: "p5-math-angles-at-point",
    displayName: "Angles at a Point",
    grade: "p5",
    subject: "math",
    topic: "angles",
    subtopic: "at-point",
    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 45,
      prerequisites: ["p5-math-angles-straight-line"]
    },
    notesComponent: "p5/math/angles/AnglesAtPoint",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 4: Finding Unknown Angles
  // ========================================
  {
    id: "p5-math-angles-finding-unknown",
    displayName: "Finding Unknown Angles",
    grade: "p5",
    subject: "math",
    topic: "angles",
    subtopic: "finding-unknown",
    metadata: {
      difficulty: "intermediate-advanced",
      estimatedMinutes: 50,
      prerequisites: [
        "p5-math-angles-straight-line",
        "p5-math-angles-vertically-opposite",
        "p5-math-angles-at-point"
      ]
    },
    notesComponent: "p5/math/angles/FindingUnknownAngles",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];
