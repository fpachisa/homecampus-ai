/**
 * Firestore Configuration: S2 Averages of Statistical Data
 *
 * This file contains Firestore document configurations for the S2 Mathematics
 * Averages of Statistical Data topic (5 subtopics).
 *
 * Topic Coverage:
 *   1. Introduction to Averages (foundational)
 *   2. Calculating Mean (intermediate)
 *   3. Calculating Median (intermediate)
 *   4. Calculating Mode (foundational-to-intermediate)
 *   5. Choosing the Right Average (intermediate-to-advanced)
 */

export const S2_AVERAGES_STATISTICAL_DATA_FIRESTORE_CONFIGS = [
  // ========================================
  // SUBTOPIC 1: Introduction to Averages
  // ========================================
  {
    id: "s2-math-averages-introduction",
    displayName: "Introduction to Averages",
    grade: "s2",
    subject: "math",
    topic: "averages-statistical-data",
    subtopic: "introduction",

    metadata: {
      difficulty: "foundational",
      estimatedMinutes: 45,
      prerequisites: [] // Foundation subtopic - no prerequisites
    },

    notesComponent: "s2/math/averages-statistical-data/IntroductionToAverages",
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
  // SUBTOPIC 2: Calculating Mean
  // ========================================
  {
    id: "s2-math-averages-mean",
    displayName: "Calculating Mean",
    grade: "s2",
    subject: "math",
    topic: "averages-statistical-data",
    subtopic: "mean",

    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 60,
      prerequisites: ["s2-math-averages-introduction"]
    },

    notesComponent: "s2/math/averages-statistical-data/Mean",
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
  // SUBTOPIC 3: Calculating Median
  // ========================================
  {
    id: "s2-math-averages-median",
    displayName: "Calculating Median",
    grade: "s2",
    subject: "math",
    topic: "averages-statistical-data",
    subtopic: "median",

    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 50,
      prerequisites: ["s2-math-averages-introduction"]
    },

    notesComponent: "s2/math/averages-statistical-data/Median",
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
  // SUBTOPIC 4: Calculating Mode
  // ========================================
  {
    id: "s2-math-averages-mode",
    displayName: "Calculating Mode",
    grade: "s2",
    subject: "math",
    topic: "averages-statistical-data",
    subtopic: "mode",

    metadata: {
      difficulty: "foundational-to-intermediate",
      estimatedMinutes: 45,
      prerequisites: ["s2-math-averages-introduction"]
    },

    notesComponent: "s2/math/averages-statistical-data/Mode",
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
  // SUBTOPIC 5: Choosing the Right Average
  // ========================================
  {
    id: "s2-math-averages-choosing",
    displayName: "Choosing the Right Average",
    grade: "s2",
    subject: "math",
    topic: "averages-statistical-data",
    subtopic: "choosing",

    metadata: {
      difficulty: "intermediate-to-advanced",
      estimatedMinutes: 50,
      prerequisites: [
        "s2-math-averages-mean",
        "s2-math-averages-median",
        "s2-math-averages-mode"
      ]
    },

    notesComponent: "s2/math/averages-statistical-data/ChoosingTheRightMeasure",
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
