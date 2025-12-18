/**
 * Firestore Subtopic Configurations for P5 Properties of Parallelogram, Rhombus and Trapezium
 *
 * Topic: Properties of Quadrilaterals
 * Subtopics:
 *   1. Properties of Parallelogram (3 sections)
 *   2. Properties of Rhombus (3 sections)
 *   3. Properties of Trapezium (3 sections)
 *   4. Finding Unknown Angles (4 sections)
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

export const P5_PROPERTIES_OF_QUADRILATERALS_FIRESTORE_CONFIGS = [
  // ========================================
  // SUBTOPIC 1: Properties of Parallelogram
  // ========================================
  {
    id: "p5-math-properties-quadrilaterals-parallelogram",
    displayName: "Properties of Parallelogram",
    grade: "p5",
    subject: "math",
    topic: "properties-of-quadrilaterals",
    subtopic: "parallelogram",
    metadata: {
      difficulty: "beginner",
      estimatedMinutes: 45,
      prerequisites: []
    },
    notesComponent: "p5/math/properties-of-quadrilaterals/PropertiesOfParallelogram",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 2: Properties of Rhombus
  // ========================================
  {
    id: "p5-math-properties-quadrilaterals-rhombus",
    displayName: "Properties of Rhombus",
    grade: "p5",
    subject: "math",
    topic: "properties-of-quadrilaterals",
    subtopic: "rhombus",
    metadata: {
      difficulty: "beginner-intermediate",
      estimatedMinutes: 45,
      prerequisites: ["p5-math-properties-quadrilaterals-parallelogram"]
    },
    notesComponent: "p5/math/properties-of-quadrilaterals/PropertiesOfRhombus",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 3: Properties of Trapezium
  // ========================================
  {
    id: "p5-math-properties-quadrilaterals-trapezium",
    displayName: "Properties of Trapezium",
    grade: "p5",
    subject: "math",
    topic: "properties-of-quadrilaterals",
    subtopic: "trapezium",
    metadata: {
      difficulty: "beginner-intermediate",
      estimatedMinutes: 45,
      prerequisites: ["p5-math-properties-quadrilaterals-parallelogram"]
    },
    notesComponent: "p5/math/properties-of-quadrilaterals/PropertiesOfTrapezium",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 4: Finding Unknown Angles
  // ========================================
  {
    id: "p5-math-properties-quadrilaterals-finding-unknown",
    displayName: "Finding Unknown Angles",
    grade: "p5",
    subject: "math",
    topic: "properties-of-quadrilaterals",
    subtopic: "finding-unknown",
    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 50,
      prerequisites: [
        "p5-math-properties-quadrilaterals-parallelogram",
        "p5-math-properties-quadrilaterals-rhombus",
        "p5-math-properties-quadrilaterals-trapezium"
      ]
    },
    notesComponent: "p5/math/properties-of-quadrilaterals/FindingUnknownAngles",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];
