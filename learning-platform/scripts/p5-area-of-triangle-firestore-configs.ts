/**
 * Firestore Configuration for P5 Mathematics - Area of Triangle
 *
 * This file contains the Firestore document configurations for the
 * P5 Area of Triangle topic subtopics.
 *
 * To migrate these configs to Firestore:
 * 1. Import this file in migrateAllConfigs.ts
 * 2. Add to the ALL_CONFIGS array
 * 3. Run: npx tsx scripts/migrateAllConfigs.ts
 */

export const P5_AREA_OF_TRIANGLE_FIRESTORE_CONFIGS = [
  // ========================================
  // SUBTOPIC 1: Base and Height of a Triangle
  // ========================================
  {
    id: "p5-math-area-triangle-base-height",
    displayName: "Base and Height of a Triangle",
    grade: "p5",
    subject: "math",
    topic: "area-of-triangle",
    subtopic: "base-height",

    metadata: {
      difficulty: "foundational",
      estimatedMinutes: 40,
      prerequisites: []
    },

    notesComponent: "p5/math/area-of-triangle/BaseAndHeight",
    teachingTemplate: "",

    scoring: {
      easy: { basePoints: 0.10, hintPenalties: [0.02, 0.04, 0.06] },
      medium: { basePoints: 0.20, hintPenalties: [0.04, 0.08, 0.12] },
      hard: { basePoints: 0.30, hintPenalties: [0.06, 0.12, 0.20] }
    },

    modules: {
      learn: true,
      practice: true,
      visualizations: true
    }
  },

  // ========================================
  // SUBTOPIC 2: Area of Triangle
  // ========================================
  {
    id: "p5-math-area-triangle-formula",
    displayName: "Area of Triangle",
    grade: "p5",
    subject: "math",
    topic: "area-of-triangle",
    subtopic: "formula",

    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 50,
      prerequisites: ["p5-math-area-triangle-base-height"]
    },

    notesComponent: "p5/math/area-of-triangle/AreaOfTriangle",
    teachingTemplate: "",

    scoring: {
      easy: { basePoints: 0.10, hintPenalties: [0.02, 0.04, 0.06] },
      medium: { basePoints: 0.20, hintPenalties: [0.04, 0.08, 0.12] },
      hard: { basePoints: 0.30, hintPenalties: [0.06, 0.12, 0.20] }
    },

    modules: {
      learn: true,
      practice: true,
      visualizations: true
    }
  },

  // ========================================
  // SUBTOPIC 3: Area of Composite Figures
  // ========================================
  {
    id: "p5-math-area-triangle-composite",
    displayName: "Area of Composite Figures",
    grade: "p5",
    subject: "math",
    topic: "area-of-triangle",
    subtopic: "composite",

    metadata: {
      difficulty: "challenging",
      estimatedMinutes: 60,
      prerequisites: ["p5-math-area-triangle-formula"]
    },

    notesComponent: "p5/math/area-of-triangle/CompositeTriangleFigures",
    teachingTemplate: "",
    questionBankId: "p5-math-area-triangle-composite",

    scoring: {
      easy: { basePoints: 0.10, hintPenalties: [0.02, 0.04, 0.06] },
      medium: { basePoints: 0.20, hintPenalties: [0.04, 0.08, 0.12] },
      hard: { basePoints: 0.30, hintPenalties: [0.06, 0.12, 0.20] }
    },

    modules: {
      learn: true,
      practice: true,
      visualizations: true
    }
  }
];
