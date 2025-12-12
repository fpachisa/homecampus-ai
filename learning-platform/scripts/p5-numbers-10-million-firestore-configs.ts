/**
 * Firestore Configuration for P5 Mathematics - Numbers up to 10 Million
 *
 * This file contains the Firestore document configurations for the
 * P5 Numbers up to 10 Million topic subtopics.
 *
 * To migrate these configs to Firestore:
 * 1. Import this file in migrateAllConfigs.ts
 * 2. Add to the ALL_CONFIGS array
 * 3. Run: npx tsx scripts/migrateAllConfigs.ts
 */

export const P5_NUMBERS_10_MILLION_FIRESTORE_CONFIGS = [
  // ========================================
  // SUBTOPIC 1: Place Value to Millions
  // ========================================
  {
    id: "p5-math-numbers-10-million-place-value",
    displayName: "Place Value to Millions",
    grade: "p5",
    subject: "math",
    topic: "numbers-10-million",
    subtopic: "place-value",

    metadata: {
      difficulty: "foundational",
      estimatedMinutes: 45,
      prerequisites: [] // No prerequisites - this is the foundation
    },

    notesComponent: "p5/math/numbers-10-million/PlaceValueMillions",
    teachingTemplate: "", // Auto-populated by AI system

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
  // SUBTOPIC 2: Writing & Representing Numbers
  // ========================================
  {
    id: "p5-math-numbers-10-million-writing-representing",
    displayName: "Writing & Representing Numbers",
    grade: "p5",
    subject: "math",
    topic: "numbers-10-million",
    subtopic: "writing-representing",

    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 50,
      prerequisites: ["p5-math-numbers-10-million-place-value"]
    },

    notesComponent: "p5/math/numbers-10-million/WritingRepresentingNumbers",
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
  // SUBTOPIC 3: Comparing & Ordering Numbers
  // ========================================
  {
    id: "p5-math-numbers-10-million-comparing-ordering",
    displayName: "Comparing & Ordering Numbers",
    grade: "p5",
    subject: "math",
    topic: "numbers-10-million",
    subtopic: "comparing-ordering",

    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 55,
      prerequisites: ["p5-math-numbers-10-million-writing-representing"]
    },

    notesComponent: "p5/math/numbers-10-million/ComparingOrderingNumbers",
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
  }
];
