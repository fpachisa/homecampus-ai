/**
 * S4 Advanced Trigonometry - Firestore Migration Configurations
 *
 * ADD THESE 5 CONFIGS to scripts/migrateAllConfigs.ts
 * Insert after the existing S4 configs (around line 100+)
 *
 * To migrate:
 *   1. Copy the configs below into the main migration array in migrateAllConfigs.ts
 *   2. Run: npx ts-node scripts/migrateAllConfigs.ts
 *   3. Verify in Firebase Console → Firestore Database → subtopics collection
 */

const STANDARD_SCORING = {
  easy: { basePoints: 0.10, hintPenalties: [0.02, 0.04, 0.06] },
  medium: { basePoints: 0.20, hintPenalties: [0.04, 0.08, 0.12] },
  hard: { basePoints: 0.30, hintPenalties: [0.06, 0.12, 0.20] }
};

const STANDARD_MODULES = {
  learn: true,
  practice: true,
  visualizations: true  // Note: Some visualizations pending unitCircle tool development
};

export const S4_ADVANCED_TRIGONOMETRY_CONFIGS = [
  // ============================================
  // S4 ADVANCED TRIGONOMETRY (5 NEW CONFIGS)
  // ============================================

  // Subtopic 1: Unit Circle & Special Angles
  {
    id: 's4-math-advanced-trig-unit-circle',
    displayName: 'Unit Circle & Special Angles',
    grade: 's4',
    subject: 'math',
    topic: 'advanced-trigonometry',
    subtopic: 'unit-circle',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 50,
      prerequisites: ['s3-math-trigonometry-basic-ratios', 's3-math-trigonometry-obtuse-angles']
    },
    notesComponent: 's4/math/advanced-trigonometry/UnitCircleSpecialAngles',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 2: Trigonometric Functions & Graphs
  {
    id: 's4-math-advanced-trig-functions-graphs',
    displayName: 'Trigonometric Functions & Graphs',
    grade: 's4',
    subject: 'math',
    topic: 'advanced-trigonometry',
    subtopic: 'functions-graphs',
    metadata: {
      difficulty: 'intermediate-to-advanced' as const,
      estimatedMinutes: 55,
      prerequisites: ['s4-math-advanced-trig-unit-circle']
    },
    notesComponent: 's4/math/advanced-trigonometry/TrigonometricFunctionsGraphs',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 3: Transformations
  {
    id: 's4-math-advanced-trig-transformations',
    displayName: 'Transformations of Trigonometric Functions',
    grade: 's4',
    subject: 'math',
    topic: 'advanced-trigonometry',
    subtopic: 'transformations',
    metadata: {
      difficulty: 'advanced' as const,
      estimatedMinutes: 60,
      prerequisites: ['s4-math-advanced-trig-functions-graphs']
    },
    notesComponent: 's4/math/advanced-trigonometry/Transformations',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 4: Trigonometric Equations & Identities
  {
    id: 's4-math-advanced-trig-equations-identities',
    displayName: 'Trigonometric Equations & Identities',
    grade: 's4',
    subject: 'math',
    topic: 'advanced-trigonometry',
    subtopic: 'equations-identities',
    metadata: {
      difficulty: 'advanced' as const,
      estimatedMinutes: 65,
      prerequisites: ['s4-math-advanced-trig-unit-circle', 's4-math-advanced-trig-functions-graphs']
    },
    notesComponent: 's4/math/advanced-trigonometry/EquationsIdentities',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 5: Radian Measure
  {
    id: 's4-math-advanced-trig-radians',
    displayName: 'Radian Measure',
    grade: 's4',
    subject: 'math',
    topic: 'advanced-trigonometry',
    subtopic: 'radians',
    metadata: {
      difficulty: 'advanced' as const,
      estimatedMinutes: 50,
      prerequisites: ['s4-math-advanced-trig-unit-circle']
    },
    notesComponent: 's4/math/advanced-trigonometry/RadianMeasure',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];

/**
 * MANUAL UPLOAD INSTRUCTIONS (Alternative to Migration Script)
 *
 * If you prefer to upload manually via Firebase Console:
 *
 * 1. Go to Firebase Console → Firestore Database
 * 2. Navigate to the `subtopics` collection
 * 3. For each config above, click "Add document"
 * 4. Use the `id` field as the document ID
 * 5. Add all fields from the config object
 * 6. For createdAt and updatedAt: use Firestore Timestamp (auto-generated)
 * 7. Verify all 5 documents are created successfully
 *
 * NOTE: The notesComponent paths reference files that will be created in a follow-up.
 * The system will gracefully handle missing notes files by showing placeholder content.
 */
