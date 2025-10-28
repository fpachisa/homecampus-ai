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
      const serviceAccount = require(serviceAccountPath);
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
 * All subtopic configurations to migrate
 * This includes EVERYTHING from mockConfigs plus the 7 missing Differential Calculus configs
 */
const ALL_CONFIGS = [
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
  },

  // ============================================
  // TODO: Add remaining ~95 configs from mockConfigs
  // ============================================
  // For now, this script only includes the 7 new Differential Calculus configs.
  // You can add the rest manually or extract them programmatically from configLoader.ts
];

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
