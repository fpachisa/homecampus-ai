/**
 * Firestore Configuration for P5 Mathematics - Volume
 *
 * This file contains the Firestore document configurations for the
 * P5 Volume topic subtopics.
 *
 * To migrate these configs to Firestore:
 * 1. Import this file in migrateAllConfigs.ts
 * 2. Add to the ALL_CONFIGS array
 * 3. Run: npx tsx scripts/migrateAllConfigs.ts
 */

export const P5_VOLUME_FIRESTORE_CONFIGS = [
  // ========================================
  // SUBTOPIC 1: Understanding Volume with Unit Cubes
  // ========================================
  {
    id: "p5-math-volume-unit-cubes",
    displayName: "Understanding Volume with Unit Cubes",
    grade: "p5",
    subject: "math",
    topic: "volume",
    subtopic: "unit-cubes",

    metadata: {
      difficulty: "foundational",
      estimatedMinutes: 40,
      prerequisites: []
    },

    notesComponent: "p5/math/volume/UnitCubes",
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
  // SUBTOPIC 2: Volume in cm³ and m³
  // ========================================
  {
    id: "p5-math-volume-cubic-units",
    displayName: "Volume in cm³ and m³",
    grade: "p5",
    subject: "math",
    topic: "volume",
    subtopic: "cubic-units",

    metadata: {
      difficulty: "foundational-to-intermediate",
      estimatedMinutes: 35,
      prerequisites: ["p5-math-volume-unit-cubes"]
    },

    notesComponent: "p5/math/volume/CubicUnits",
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
  // SUBTOPIC 3: Volume of Cubes and Cuboids
  // ========================================
  {
    id: "p5-math-volume-formula",
    displayName: "Volume of Cubes and Cuboids",
    grade: "p5",
    subject: "math",
    topic: "volume",
    subtopic: "formula",

    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 50,
      prerequisites: ["p5-math-volume-cubic-units"]
    },

    notesComponent: "p5/math/volume/VolumeFormula",
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
  // SUBTOPIC 4: Volume of Liquids
  // ========================================
  {
    id: "p5-math-volume-liquids",
    displayName: "Volume of Liquids",
    grade: "p5",
    subject: "math",
    topic: "volume",
    subtopic: "liquids",

    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 45,
      prerequisites: ["p5-math-volume-formula"]
    },

    notesComponent: "p5/math/volume/VolumeLiquids",
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
  // SUBTOPIC 5: Word Problems on Volume
  // ========================================
  {
    id: "p5-math-volume-word-problems",
    displayName: "Word Problems on Volume",
    grade: "p5",
    subject: "math",
    topic: "volume",
    subtopic: "word-problems",

    metadata: {
      difficulty: "challenging",
      estimatedMinutes: 60,
      prerequisites: ["p5-math-volume-liquids"]
    },

    notesComponent: "p5/math/volume/WordProblems",
    teachingTemplate: "",
    questionBankId: "p5-math-volume-word-problems",

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
