/**
 * Firestore Configuration for P5 Mathematics - Fractions and Division
 *
 * This file contains the Firestore document configurations for the
 * P5 Fractions and Division topic subtopics.
 *
 * To migrate these configs to Firestore:
 * 1. Import this file in migrateAllConfigs.ts
 * 2. Add to the ALL_CONFIGS array
 * 3. Run: npx tsx scripts/migrateAllConfigs.ts
 */

export const P5_FRACTIONS_DIVISIONS_FIRESTORE_CONFIGS = [
  // ========================================
  // SUBTOPIC 1: Division of Whole Numbers as Fractions
  // ========================================
  {
    id: "p5-math-fractions-divisions-whole-numbers",
    displayName: "Division of Whole Numbers as Fractions",
    grade: "p5",
    subject: "math",
    topic: "fractions-divisions",
    subtopic: "whole-numbers",

    metadata: {
      difficulty: "foundational",
      estimatedMinutes: 45,
      prerequisites: []
    },

    notesComponent: "p5/math/fractions-divisions/DivisionAsFractions",
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
  // SUBTOPIC 2: Expressing Fractions as Decimals
  // ========================================
  {
    id: "p5-math-fractions-divisions-decimals",
    displayName: "Expressing Fractions as Decimals",
    grade: "p5",
    subject: "math",
    topic: "fractions-divisions",
    subtopic: "decimals",

    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 50,
      prerequisites: ["p5-math-fractions-divisions-whole-numbers"]
    },

    notesComponent: "p5/math/fractions-divisions/FractionsAsDecimals",
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
