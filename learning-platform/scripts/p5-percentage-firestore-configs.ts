/**
 * Firestore Subtopic Configurations for P5 Percentage
 *
 * Topic: Percentage
 * Subtopics:
 *   1. Per Cent (3 sections)
 *   2. Conversions (3 sections)
 *   3. Part of Whole (4 sections)
 *   4. Pie Charts (3 sections)
 *   5. GST, Discount and Interest (4 sections)
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

export const P5_PERCENTAGE_FIRESTORE_CONFIGS = [
  // ========================================
  // SUBTOPIC 1: Per Cent
  // ========================================
  {
    id: "p5-math-percentage-per-cent",
    displayName: "Per Cent",
    grade: "p5",
    subject: "math",
    topic: "percentage",
    subtopic: "per-cent",
    metadata: {
      difficulty: "beginner",
      estimatedMinutes: 45,
      prerequisites: []
    },
    notesComponent: "p5/math/percentage/PerCent",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 2: Conversions
  // ========================================
  {
    id: "p5-math-percentage-conversions",
    displayName: "Conversions",
    grade: "p5",
    subject: "math",
    topic: "percentage",
    subtopic: "conversions",
    metadata: {
      difficulty: "beginner-intermediate",
      estimatedMinutes: 45,
      prerequisites: ["p5-math-percentage-per-cent"]
    },
    notesComponent: "p5/math/percentage/Conversions",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 3: Percentage Part of a Whole
  // ========================================
  {
    id: "p5-math-percentage-part-of-whole",
    displayName: "Percentage Part of a Whole",
    grade: "p5",
    subject: "math",
    topic: "percentage",
    subtopic: "part-of-whole",
    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 50,
      prerequisites: ["p5-math-percentage-conversions"]
    },
    notesComponent: "p5/math/percentage/PartOfWhole",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 4: Percentage in Pie Charts
  // ========================================
  {
    id: "p5-math-percentage-pie-charts",
    displayName: "Percentage in Pie Charts",
    grade: "p5",
    subject: "math",
    topic: "percentage",
    subtopic: "pie-charts",
    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 45,
      prerequisites: ["p5-math-percentage-part-of-whole"]
    },
    notesComponent: "p5/math/percentage/PieCharts",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 5: GST, Discount and Annual Interest
  // ========================================
  {
    id: "p5-math-percentage-gst-discount-interest",
    displayName: "GST, Discount and Interest",
    grade: "p5",
    subject: "math",
    topic: "percentage",
    subtopic: "gst-discount-interest",
    metadata: {
      difficulty: "intermediate-advanced",
      estimatedMinutes: 55,
      prerequisites: ["p5-math-percentage-part-of-whole"]
    },
    notesComponent: "p5/math/percentage/GSTDiscountInterest",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];
