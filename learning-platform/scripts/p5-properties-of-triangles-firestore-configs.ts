/**
 * Firestore Subtopic Configurations for P5 Properties of Triangles
 *
 * Topic: Properties of Triangles
 * Subtopics:
 *   1. Types of Triangles (3 sections)
 *   2. Angle Sum of a Triangle (3 sections)
 *   3. Finding Unknown Angles (3 sections)
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

export const P5_PROPERTIES_OF_TRIANGLES_FIRESTORE_CONFIGS = [
  // ========================================
  // SUBTOPIC 1: Types of Triangles
  // ========================================
  {
    id: "p5-math-properties-triangles-types",
    displayName: "Types of Triangles",
    grade: "p5",
    subject: "math",
    topic: "properties-of-triangles",
    subtopic: "types",
    metadata: {
      difficulty: "beginner",
      estimatedMinutes: 45,
      prerequisites: []
    },
    notesComponent: "p5/math/properties-of-triangles/TypesOfTriangles",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 2: Angle Sum of a Triangle
  // ========================================
  {
    id: "p5-math-properties-triangles-angle-sum",
    displayName: "Angle Sum of a Triangle",
    grade: "p5",
    subject: "math",
    topic: "properties-of-triangles",
    subtopic: "angle-sum",
    metadata: {
      difficulty: "beginner-intermediate",
      estimatedMinutes: 45,
      prerequisites: ["p5-math-properties-triangles-types"]
    },
    notesComponent: "p5/math/properties-of-triangles/AngleSumOfTriangle",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 3: Finding Unknown Angles
  // ========================================
  {
    id: "p5-math-properties-triangles-finding-unknown",
    displayName: "Finding Unknown Angles",
    grade: "p5",
    subject: "math",
    topic: "properties-of-triangles",
    subtopic: "finding-unknown",
    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 50,
      prerequisites: [
        "p5-math-properties-triangles-types",
        "p5-math-properties-triangles-angle-sum"
      ]
    },
    notesComponent: "p5/math/properties-of-triangles/FindingUnknownAngles",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];
