/**
 * Firestore Configuration for P5 Mathematics - Four Operations on Whole Numbers
 *
 * This file contains the Firestore document configurations for the
 * P5 Four Operations topic subtopics.
 *
 * To migrate these configs to Firestore:
 * 1. Import this file in migrateAllConfigs.ts
 * 2. Add to the ALL_CONFIGS array
 * 3. Run: npx tsx scripts/migrateAllConfigs.ts
 */

export const P5_FOUR_OPERATIONS_FIRESTORE_CONFIGS = [
  // ========================================
  // SUBTOPIC 1: Multiplying by 10, 100 and 1000
  // ========================================
  {
    id: "p5-math-four-operations-multiply-10-100-1000",
    displayName: "Multiplying by 10, 100 and 1000",
    grade: "p5",
    subject: "math",
    topic: "four-operations",
    subtopic: "multiply-10-100-1000",

    metadata: {
      difficulty: "foundational",
      estimatedMinutes: 30,
      prerequisites: []
    },

    notesComponent: "p5/math/four-operations/MultiplyBy10_100_1000",
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
  // SUBTOPIC 2: Multiplying by Tens, Hundreds and Thousands
  // ========================================
  {
    id: "p5-math-four-operations-multiply-tens-hundreds-thousands",
    displayName: "Multiplying by Tens, Hundreds and Thousands",
    grade: "p5",
    subject: "math",
    topic: "four-operations",
    subtopic: "multiply-tens-hundreds-thousands",

    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 35,
      prerequisites: ["p5-math-four-operations-multiply-10-100-1000"]
    },

    notesComponent: "p5/math/four-operations/MultiplyByTensHundredsThousands",
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
  // SUBTOPIC 3: Dividing by 10, 100 and 1000
  // ========================================
  {
    id: "p5-math-four-operations-divide-10-100-1000",
    displayName: "Dividing by 10, 100 and 1000",
    grade: "p5",
    subject: "math",
    topic: "four-operations",
    subtopic: "divide-10-100-1000",

    metadata: {
      difficulty: "foundational",
      estimatedMinutes: 30,
      prerequisites: ["p5-math-four-operations-multiply-10-100-1000"]
    },

    notesComponent: "p5/math/four-operations/DivideBy10_100_1000",
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
  // SUBTOPIC 4: Dividing by Tens, Hundreds and Thousands
  // ========================================
  {
    id: "p5-math-four-operations-divide-tens-hundreds-thousands",
    displayName: "Dividing by Tens, Hundreds and Thousands",
    grade: "p5",
    subject: "math",
    topic: "four-operations",
    subtopic: "divide-tens-hundreds-thousands",

    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 35,
      prerequisites: ["p5-math-four-operations-divide-10-100-1000"]
    },

    notesComponent: "p5/math/four-operations/DivideByTensHundredsThousands",
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
  // SUBTOPIC 5: Order of Operations
  // ========================================
  {
    id: "p5-math-four-operations-order-of-operations",
    displayName: "Order of Operations",
    grade: "p5",
    subject: "math",
    topic: "four-operations",
    subtopic: "order-of-operations",

    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 40,
      prerequisites: [
        "p5-math-four-operations-multiply-tens-hundreds-thousands",
        "p5-math-four-operations-divide-tens-hundreds-thousands"
      ]
    },

    notesComponent: "p5/math/four-operations/OrderOfOperations",
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
  // SUBTOPIC 6: Order of Operations with Brackets
  // ========================================
  {
    id: "p5-math-four-operations-order-with-brackets",
    displayName: "Order of Operations with Brackets",
    grade: "p5",
    subject: "math",
    topic: "four-operations",
    subtopic: "order-with-brackets",

    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 40,
      prerequisites: ["p5-math-four-operations-order-of-operations"]
    },

    notesComponent: "p5/math/four-operations/OrderOfOperationsWithBrackets",
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
  // SUBTOPIC 7: Word Problems
  // ========================================
  {
    id: "p5-math-four-operations-word-problems",
    displayName: "Word Problems",
    grade: "p5",
    subject: "math",
    topic: "four-operations",
    subtopic: "word-problems",

    metadata: {
      difficulty: "advanced",
      estimatedMinutes: 50,
      prerequisites: ["p5-math-four-operations-order-with-brackets"]
    },

    notesComponent: "p5/math/four-operations/WordProblems",
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
