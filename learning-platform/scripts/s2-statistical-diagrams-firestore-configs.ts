/**
 * Firestore Configuration: S2 Statistical Diagrams
 *
 * Contains Firestore document configurations for all S2 Statistical Diagrams subtopics.
 * These configs are uploaded to the 'subtopics' collection in Firestore.
 *
 * Topic: Statistical Diagrams
 * Subtopics: 5 total
 *   1. Introduction to Statistical Diagrams
 *   2. Dot Diagrams
 *   3. Histograms for Ungrouped Data
 *   4. Stem-and-Leaf Diagrams
 *   5. Histograms for Grouped Data
 */

export const S2_STATISTICAL_DIAGRAMS_FIRESTORE_CONFIGS = [
  // ========================================
  // SUBTOPIC 1: Introduction to Statistical Diagrams
  // ========================================
  {
    id: "s2-math-statistical-diagrams-introduction",
    displayName: "Introduction to Statistical Diagrams",
    grade: "s2",
    subject: "math",
    topic: "statistical-diagrams",
    subtopic: "introduction",

    metadata: {
      difficulty: "foundational",
      estimatedMinutes: 45,
      prerequisites: [] // Foundation topic - no prerequisites
    },

    notesComponent: "s2/math/statistical-diagrams/Introduction",
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
  // SUBTOPIC 2: Dot Diagrams
  // ========================================
  {
    id: "s2-math-statistical-diagrams-dot-diagrams",
    displayName: "Dot Diagrams",
    grade: "s2",
    subject: "math",
    topic: "statistical-diagrams",
    subtopic: "dot-diagrams",

    metadata: {
      difficulty: "foundational",
      estimatedMinutes: 50,
      prerequisites: ["s2-math-statistical-diagrams-introduction"]
    },

    notesComponent: "s2/math/statistical-diagrams/DotDiagrams",
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
  // SUBTOPIC 3: Histograms for Ungrouped Data
  // ========================================
  {
    id: "s2-math-statistical-diagrams-histograms-ungrouped",
    displayName: "Histograms for Ungrouped Data",
    grade: "s2",
    subject: "math",
    topic: "statistical-diagrams",
    subtopic: "histograms-ungrouped",

    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 55,
      prerequisites: [
        "s2-math-statistical-diagrams-introduction",
        "s2-math-statistical-diagrams-dot-diagrams"
      ]
    },

    notesComponent: "s2/math/statistical-diagrams/HistogramsUngrouped",
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
  // SUBTOPIC 4: Stem-and-Leaf Diagrams
  // ========================================
  {
    id: "s2-math-statistical-diagrams-stem-and-leaf",
    displayName: "Stem-and-Leaf Diagrams",
    grade: "s2",
    subject: "math",
    topic: "statistical-diagrams",
    subtopic: "stem-and-leaf",

    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 55,
      prerequisites: [
        "s2-math-statistical-diagrams-introduction",
        "s2-math-statistical-diagrams-histograms-ungrouped"
      ]
    },

    notesComponent: "s2/math/statistical-diagrams/StemAndLeaf",
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
  // SUBTOPIC 5: Histograms for Grouped Data
  // ========================================
  {
    id: "s2-math-statistical-diagrams-histograms-grouped",
    displayName: "Histograms for Grouped Data",
    grade: "s2",
    subject: "math",
    topic: "statistical-diagrams",
    subtopic: "histograms-grouped",

    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 60,
      prerequisites: [
        "s2-math-statistical-diagrams-introduction",
        "s2-math-statistical-diagrams-histograms-ungrouped",
        "s2-math-statistical-diagrams-stem-and-leaf"
      ]
    },

    notesComponent: "s2/math/statistical-diagrams/HistogramsGrouped",
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
