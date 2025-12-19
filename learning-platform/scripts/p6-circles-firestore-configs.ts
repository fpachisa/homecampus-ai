/**
 * Firestore Subtopic Configurations for P6 Circles
 *
 * Topic: Circles
 * Subtopics:
 *   1. Parts of a Circle (2 sections)
 *   2. Circumference of a Circle (3 sections)
 *   3. Perimeter of Semicircle & Quarter Circle (3 sections)
 *   4. Area of a Circle (3 sections)
 *   5. Area of Semicircle & Quarter Circle (3 sections)
 *   6. Composite Figures (3 sections)
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

export const P6_CIRCLES_FIRESTORE_CONFIGS = [
  // ========================================
  // SUBTOPIC 1: Parts of a Circle
  // ========================================
  {
    id: "p6-math-circles-parts",
    displayName: "Parts of a Circle",
    grade: "p6",
    subject: "math",
    topic: "circles",
    subtopic: "parts",
    metadata: {
      difficulty: "beginner",
      estimatedMinutes: 30,
      prerequisites: []
    },
    notesComponent: "p6/math/circles/PartsOfCircle",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 2: Circumference of a Circle
  // ========================================
  {
    id: "p6-math-circles-circumference",
    displayName: "Circumference of a Circle",
    grade: "p6",
    subject: "math",
    topic: "circles",
    subtopic: "circumference",
    metadata: {
      difficulty: "beginner-intermediate",
      estimatedMinutes: 45,
      prerequisites: ["p6-math-circles-parts"]
    },
    notesComponent: "p6/math/circles/Circumference",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 3: Perimeter of Semicircle & Quarter Circle
  // ========================================
  {
    id: "p6-math-circles-perimeter-semi-quarter",
    displayName: "Perimeter of Semicircle & Quarter Circle",
    grade: "p6",
    subject: "math",
    topic: "circles",
    subtopic: "perimeter-semi-quarter",
    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 50,
      prerequisites: ["p6-math-circles-circumference"]
    },
    notesComponent: "p6/math/circles/PerimeterSemiQuarter",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 4: Area of a Circle
  // ========================================
  {
    id: "p6-math-circles-area",
    displayName: "Area of a Circle",
    grade: "p6",
    subject: "math",
    topic: "circles",
    subtopic: "area",
    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 45,
      prerequisites: ["p6-math-circles-circumference"]
    },
    notesComponent: "p6/math/circles/AreaOfCircle",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 5: Area of Semicircle & Quarter Circle
  // ========================================
  {
    id: "p6-math-circles-area-semi-quarter",
    displayName: "Area of Semicircle & Quarter Circle",
    grade: "p6",
    subject: "math",
    topic: "circles",
    subtopic: "area-semi-quarter",
    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 50,
      prerequisites: ["p6-math-circles-area"]
    },
    notesComponent: "p6/math/circles/AreaSemiQuarter",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // ========================================
  // SUBTOPIC 6: Composite Figures (Area & Perimeter)
  // ========================================
  {
    id: "p6-math-circles-composite",
    displayName: "Composite Figures",
    grade: "p6",
    subject: "math",
    topic: "circles",
    subtopic: "composite",
    metadata: {
      difficulty: "advanced",
      estimatedMinutes: 60,
      prerequisites: [
        "p6-math-circles-perimeter-semi-quarter",
        "p6-math-circles-area-semi-quarter"
      ]
    },
    notesComponent: "p6/math/circles/CompositeFigures",
    teachingTemplate: "",
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];
