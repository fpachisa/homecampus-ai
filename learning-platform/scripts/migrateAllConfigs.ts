/**
 * Complete Migration Script: All Subtopic Configs to Firestore
 *
 * This script migrates ALL subtopic configurations to Firestore.
 * Since this is a new app with no users, we can migrate everything at once.
 *
 * Usage:
 *   npx ts-node scripts/migrateAllConfigs.ts
 *
 * Prerequisites:
 *   - Firebase credentials configured
 *   - firestore.rules deployed
 */

import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { S4_VECTORS_CONFIGS } from './s4-vectors-firestore-configs.js';

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') });

// Initialize Firebase Admin
if (getApps().length === 0) {
  const projectId = process.env.VITE_FIREBASE_PROJECT_ID;

  if (!projectId) {
    console.error('❌ Error: VITE_FIREBASE_PROJECT_ID not found in .env file');
    process.exit(1);
  }

  console.log(`🔧 Initializing Firebase Admin for project: ${projectId}\n`);

  try {
    const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;

    if (serviceAccountPath) {
      // Read and parse service account JSON file
      const serviceAccountJson = readFileSync(serviceAccountPath, 'utf-8');
      const serviceAccount = JSON.parse(serviceAccountJson);

      initializeApp({
        credential: cert(serviceAccount),
        projectId
      });
      console.log('✅ Using service account credentials');
    } else {
      initializeApp({ projectId });
      console.log('✅ Using application default credentials');
    }
  } catch (error) {
    console.error('❌ Failed to initialize Firebase:', error);
    console.log('\n💡 Tip: Set GOOGLE_APPLICATION_CREDENTIALS to your service account key path');
    process.exit(1);
  }
}

const db = getFirestore();

/**
 * Standard scoring configuration
 */
const STANDARD_SCORING = {
  easy: { basePoints: 0.10, hintPenalties: [0.02, 0.04, 0.06] },
  medium: { basePoints: 0.20, hintPenalties: [0.04, 0.08, 0.12] },
  hard: { basePoints: 0.30, hintPenalties: [0.06, 0.12, 0.20] }
};

/**
 * Standard modules configuration
 */
const STANDARD_MODULES = {
  learn: true,
  practice: true,
  visualizations: true
};

/**
 * Load all subtopic configurations from extracted JSON + Differential Calculus configs
 */

// Import old configs from JSON (96 configs)
let oldConfigs: any[] = [];
try {
  const oldConfigsJson = readFileSync(path.join(__dirname, '../tmp-all-configs.json'), 'utf-8');
  oldConfigs = JSON.parse(oldConfigsJson);
  console.log(`📦 Loaded ${oldConfigs.length} configs from extracted JSON`);
} catch (error) {
  console.log('ℹ️  No old configs JSON found, will only migrate Differential Calculus');
}

/**
 * New Differential Calculus configs (7 configs)
 */
const DIFFERENTIAL_CALCULUS_CONFIGS = [
  // ============================================
  // S4 DIFFERENTIAL CALCULUS (7 NEW CONFIGS)
  // ============================================
  {
    id: 's4-math-differential-calculus-limits',
    displayName: 'Limits',
    grade: 's4',
    subject: 'math',
    topic: 'differential-calculus',
    subtopic: 'limits',
    metadata: {
      difficulty: 'foundational' as const,
      estimatedMinutes: 60,
      prerequisites: []
    },
    notesComponent: 's4/math/differential-calculus/Limits',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },
  {
    id: 's4-math-differential-calculus-gradient-tangent',
    displayName: 'Gradient of a Tangent',
    grade: 's4',
    subject: 'math',
    topic: 'differential-calculus',
    subtopic: 'gradient-tangent',
    metadata: {
      difficulty: 'foundational-to-intermediate' as const,
      estimatedMinutes: 50,
      prerequisites: ['s4-math-differential-calculus-limits']
    },
    notesComponent: 's4/math/differential-calculus/GradientOfTangent',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },
  {
    id: 's4-math-differential-calculus-derivative-function',
    displayName: 'The Derivative Function',
    grade: 's4',
    subject: 'math',
    topic: 'differential-calculus',
    subtopic: 'derivative-function',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 55,
      prerequisites: ['s4-math-differential-calculus-gradient-tangent']
    },
    notesComponent: 's4/math/differential-calculus/DerivativeFunction',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },
  {
    id: 's4-math-differential-calculus-first-principles',
    displayName: 'Differentiation from First Principles',
    grade: 's4',
    subject: 'math',
    topic: 'differential-calculus',
    subtopic: 'first-principles',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 60,
      prerequisites: ['s4-math-differential-calculus-derivative-function']
    },
    notesComponent: 's4/math/differential-calculus/FirstPrinciples',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },
  {
    id: 's4-math-differential-calculus-differentiation-rules',
    displayName: 'Rules for Differentiation',
    grade: 's4',
    subject: 'math',
    topic: 'differential-calculus',
    subtopic: 'differentiation-rules',
    metadata: {
      difficulty: 'intermediate-to-advanced' as const,
      estimatedMinutes: 70,
      prerequisites: ['s4-math-differential-calculus-first-principles']
    },
    notesComponent: 's4/math/differential-calculus/DifferentiationRules',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },
  {
    id: 's4-math-differential-calculus-tangent-equations',
    displayName: 'Finding the Equation of a Tangent',
    grade: 's4',
    subject: 'math',
    topic: 'differential-calculus',
    subtopic: 'tangent-equations',
    metadata: {
      difficulty: 'intermediate-to-advanced' as const,
      estimatedMinutes: 55,
      prerequisites: ['s4-math-differential-calculus-differentiation-rules']
    },
    notesComponent: 's4/math/differential-calculus/TangentEquations',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },
  {
    id: 's4-math-differential-calculus-stationary-points',
    displayName: 'Stationary Points',
    grade: 's4',
    subject: 'math',
    topic: 'differential-calculus',
    subtopic: 'stationary-points',
    metadata: {
      difficulty: 'advanced' as const,
      estimatedMinutes: 65,
      prerequisites: ['s4-math-differential-calculus-tangent-equations']
    },
    notesComponent: 's4/math/differential-calculus/StationaryPoints',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];

/**
 * S4 Advanced Trigonometry configs (5 configs)
 */
const ADVANCED_TRIGONOMETRY_CONFIGS = [
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
 * S1 Factors & Multiples configs (5 configs)
 */
const S1_FACTORS_MULTIPLES_CONFIGS = [
  // ============================================
  // S1 FACTORS & MULTIPLES (5 NEW CONFIGS)
  // ============================================

  // Subtopic 1: Introduction to Factors & Multiples
  {
    id: 's1-math-factors-multiples-introduction',
    displayName: 'Introduction to Factors & Multiples',
    grade: 's1',
    subject: 'math',
    topic: 'factors-multiples',
    subtopic: 'introduction',
    metadata: {
      difficulty: 'foundational' as const,
      estimatedMinutes: 50,
      prerequisites: []
    },
    notesComponent: 's1/math/factors-multiples/IntroductionToFactorsMultiples',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 2: Prime Numbers and Factorisation
  {
    id: 's1-math-factors-multiples-prime-factorisation',
    displayName: 'Prime Numbers and Factorisation',
    grade: 's1',
    subject: 'math',
    topic: 'factors-multiples',
    subtopic: 'prime-factorisation',
    metadata: {
      difficulty: 'foundational-to-intermediate' as const,
      estimatedMinutes: 55,
      prerequisites: ['s1-math-factors-multiples-introduction']
    },
    notesComponent: 's1/math/factors-multiples/PrimeNumbersAndFactorisation',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 3: Highest Common Factor (HCF)
  {
    id: 's1-math-factors-multiples-hcf',
    displayName: 'Highest Common Factor (HCF)',
    grade: 's1',
    subject: 'math',
    topic: 'factors-multiples',
    subtopic: 'hcf',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 60,
      prerequisites: ['s1-math-factors-multiples-prime-factorisation']
    },
    notesComponent: 's1/math/factors-multiples/HighestCommonFactor',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 4: Lowest Common Multiple (LCM)
  {
    id: 's1-math-factors-multiples-lcm',
    displayName: 'Lowest Common Multiple (LCM)',
    grade: 's1',
    subject: 'math',
    topic: 'factors-multiples',
    subtopic: 'lcm',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 60,
      prerequisites: ['s1-math-factors-multiples-hcf']
    },
    notesComponent: 's1/math/factors-multiples/LowestCommonMultiple',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 5: Square and Cube Roots
  {
    id: 's1-math-factors-multiples-square-cube-roots',
    displayName: 'Square and Cube Roots',
    grade: 's1',
    subject: 'math',
    topic: 'factors-multiples',
    subtopic: 'square-cube-roots',
    metadata: {
      difficulty: 'intermediate-to-advanced' as const,
      estimatedMinutes: 55,
      prerequisites: ['s1-math-factors-multiples-prime-factorisation']
    },
    notesComponent: 's1/math/factors-multiples/SquareAndCubeRoots',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];

// Combine old configs + S1 + S4 configs
const ALL_CONFIGS = [...oldConfigs, ...S1_FACTORS_MULTIPLES_CONFIGS, ...DIFFERENTIAL_CALCULUS_CONFIGS, ...ADVANCED_TRIGONOMETRY_CONFIGS, ...S4_VECTORS_CONFIGS];

/**
 * Migrate all configs to Firestore
 */
async function migrateAll() {
  console.log('🚀 Starting complete migration to Firestore...\n');
  console.log(`Total configs to migrate: ${ALL_CONFIGS.length}\n`);

  let successCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  for (const config of ALL_CONFIGS) {
    try {
      const docRef = db.collection('subtopics').doc(config.id);

      // Check if already exists
      const existing = await docRef.get();

      if (existing.exists) {
        console.log(`  ⚠️  Already exists: ${config.id} (skipping)`);
        skippedCount++;
        continue;
      }

      // Add timestamps
      const configWithTimestamps = {
        ...config,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };

      await docRef.set(configWithTimestamps);

      console.log(`  ✅ Added: ${config.displayName}`);
      successCount++;
    } catch (error: any) {
      console.error(`  ❌ Failed: ${config.id}`, error.message);
      errorCount++;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('📊 Migration Summary');
  console.log('='.repeat(60));
  console.log(`✅ Added: ${successCount}`);
  console.log(`⚠️  Skipped (already exist): ${skippedCount}`);
  console.log(`❌ Errors: ${errorCount}`);
  console.log(`📦 Total: ${ALL_CONFIGS.length}`);

  if (errorCount === 0) {
    console.log('\n🎉 Migration completed successfully!');
  } else {
    console.log('\n⚠️  Migration completed with errors. Check logs above.');
  }
}

/**
 * Verify migration
 */
async function verify() {
  console.log('\n🔍 Verifying migration...\n');

  const snapshot = await db.collection('subtopics').get();
  console.log(`Total documents in Firestore: ${snapshot.size}`);

  // Check for Differential Calculus configs
  console.log('\n📋 Differential Calculus configs:');
  const diffCalcIds = ALL_CONFIGS
    .filter(c => c.id.startsWith('s4-math-differential-calculus'))
    .map(c => c.id);

  for (const id of diffCalcIds) {
    const doc = await db.collection('subtopics').doc(id).get();
    if (doc.exists) {
      console.log(`  ✓ ${id}`);
    } else {
      console.log(`  ✗ MISSING: ${id}`);
    }
  }

  // Check for Advanced Trigonometry configs
  console.log('\n📋 Advanced Trigonometry configs:');
  const advTrigIds = ALL_CONFIGS
    .filter(c => c.id.startsWith('s4-math-advanced-trig'))
    .map(c => c.id);

  for (const id of advTrigIds) {
    const doc = await db.collection('subtopics').doc(id).get();
    if (doc.exists) {
      console.log(`  ✓ ${id}`);
    } else {
      console.log(`  ✗ MISSING: ${id}`);
    }
  }
}

// Run migration
migrateAll()
  .then(() => verify())
  .then(() => {
    console.log('\n✨ All done!');
    console.log('\n📝 Next steps:');
    console.log('1. Verify configs in Firebase Console');
    console.log('2. Add remaining configs to this script (optional)');
    console.log('3. Commit and push to trigger CI/CD deployment');
    console.log('4. After deployment, remove mockConfigs from configLoader.ts');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Migration failed:', error);
    process.exit(1);
  });
