/**
 * S4 Vectors - Firestore Migration Configurations
 *
 * ADD THESE 5 CONFIGS to scripts/migrateAllConfigs.ts
 * Insert after the existing S4 configs (around line 100+)
 *
 * To migrate:
 *   1. Copy the configs below into the main migration array in migrateAllConfigs.ts
 *   2. Run: npx tsx scripts/migrateAllConfigs.ts
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
  visualizations: true
};

export const S4_VECTORS_CONFIGS = [
  // ============================================
  // S4 VECTORS (5 NEW CONFIGS)
  // ============================================

  // Subtopic 1: Vector Fundamentals & Geometric Operations
  {
    id: 's4-math-vectors-fundamentals',
    displayName: 'Vector Fundamentals & Geometric Operations',
    grade: 's4',
    subject: 'math',
    topic: 'vectors',
    subtopic: 'fundamentals',
    metadata: {
      difficulty: 'foundational' as const,
      estimatedMinutes: 50,
      prerequisites: []
    },
    notesComponent: 's4/math/vectors/VectorFundamentals',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 2: Component Form & Algebraic Methods
  {
    id: 's4-math-vectors-component-form',
    displayName: 'Component Form & Algebraic Methods',
    grade: 's4',
    subject: 'math',
    topic: 'vectors',
    subtopic: 'component-form',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 50,
      prerequisites: ['s4-math-vectors-fundamentals']
    },
    notesComponent: 's4/math/vectors/ComponentForm',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 3: Magnitude & Complex Operations
  {
    id: 's4-math-vectors-magnitude-ops',
    displayName: 'Magnitude & Complex Operations',
    grade: 's4',
    subject: 'math',
    topic: 'vectors',
    subtopic: 'magnitude-operations',
    metadata: {
      difficulty: 'intermediate-to-advanced' as const,
      estimatedMinutes: 55,
      prerequisites: ['s4-math-vectors-component-form']
    },
    notesComponent: 's4/math/vectors/MagnitudeOperations',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 4: Parallelism & Geometric Applications
  {
    id: 's4-math-vectors-parallelism',
    displayName: 'Parallelism & Geometric Applications',
    grade: 's4',
    subject: 'math',
    topic: 'vectors',
    subtopic: 'parallelism',
    metadata: {
      difficulty: 'advanced' as const,
      estimatedMinutes: 45,
      prerequisites: ['s4-math-vectors-fundamentals', 's4-math-vectors-component-form']
    },
    notesComponent: 's4/math/vectors/Parallelism',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 5: Dot Product & Angles
  {
    id: 's4-math-vectors-dot-product',
    displayName: 'Dot Product & Angles',
    grade: 's4',
    subject: 'math',
    topic: 'vectors',
    subtopic: 'dot-product',
    metadata: {
      difficulty: 'advanced' as const,
      estimatedMinutes: 55,
      prerequisites: ['s4-math-vectors-component-form', 's4-math-vectors-magnitude-ops']
    },
    notesComponent: 's4/math/vectors/DotProduct',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];

// Instructions for migration:
console.log(`
====================================
S4 VECTORS FIRESTORE MIGRATION
====================================

To add these configs to Firestore:

1. Open scripts/migrateAllConfigs.ts

2. Import this file at the top:
   import { S4_VECTORS_CONFIGS } from './s4-vectors-firestore-configs';

3. Add to the configs array (after S4 Advanced Trig configs):
   ...S4_VECTORS_CONFIGS,

4. Run migration:
   npx tsx scripts/migrateAllConfigs.ts

5. Verify in Firebase Console:
   - Go to Firestore Database
   - Check 'subtopics' collection
   - Look for 5 new documents with IDs:
     * s4-math-vectors-fundamentals
     * s4-math-vectors-component-form
     * s4-math-vectors-magnitude-ops
     * s4-math-vectors-parallelism
     * s4-math-vectors-dot-product

====================================
`);
