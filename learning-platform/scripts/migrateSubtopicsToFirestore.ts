/**
 * Migration Script: Subtopic Configs to Firestore
 *
 * This script migrates all subtopic configurations from the mock data
 * in configLoader.ts to Firestore's `subtopics` collection.
 *
 * Usage:
 *   npx ts-node scripts/migrateSubtopicsToFirestore.ts
 *
 * Prerequisites:
 *   - Firebase Admin SDK credentials set up
 *   - GOOGLE_APPLICATION_CREDENTIALS environment variable set
 */

import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';
import * as dotenv from 'dotenv';
import type { SubtopicConfig } from '../src/types/curriculum';

// Load environment variables
dotenv.config();

// Initialize Firebase Admin (only if not already initialized)
if (getApps().length === 0) {
  // For local development, use service account key
  // For production, use Application Default Credentials
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    const serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);
    initializeApp({
      credential: cert(serviceAccount),
      projectId: process.env.VITE_FIREBASE_PROJECT_ID
    });
  } else {
    // Fallback: use environment variables
    initializeApp({
      projectId: process.env.VITE_FIREBASE_PROJECT_ID,
    });
  }
}

const db = getFirestore();

/**
 * Standard scoring config used across all topics
 */
const STANDARD_SCORING = {
  easy: { basePoints: 0.10, hintPenalties: [0.02, 0.04, 0.06] },
  medium: { basePoints: 0.20, hintPenalties: [0.04, 0.08, 0.12] },
  hard: { basePoints: 0.30, hintPenalties: [0.06, 0.12, 0.20] }
};

/**
 * Standard modules config
 */
const STANDARD_MODULES = {
  learn: true,
  practice: true,
  visualizations: true
};

/**
 * Helper to create a subtopic config
 */
function createSubtopicConfig(
  id: string,
  displayName: string,
  grade: string,
  subject: string,
  topic: string,
  subtopic: string,
  notesComponent: string,
  difficulty: SubtopicConfig['metadata']['difficulty'],
  estimatedMinutes: number,
  prerequisites: string[] = []
): SubtopicConfig {
  return {
    id,
    displayName,
    grade,
    subject,
    topic,
    subtopic,
    metadata: {
      difficulty,
      estimatedMinutes,
      prerequisites
    },
    notesComponent,
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  };
}

/**
 * All subtopic configurations
 * Including the 7 missing Differential Calculus configs!
 */
const ALL_SUBTOPICS: SubtopicConfig[] = [
  // ============================================
  // S4 DIFFERENTIAL CALCULUS (NEW - MISSING CONFIGS)
  // ============================================
  createSubtopicConfig(
    's4-math-differential-calculus-limits',
    'Limits',
    's4',
    'math',
    'differential-calculus',
    'limits',
    's4/math/differential-calculus/Limits',
    'foundational',
    60,
    []
  ),

  createSubtopicConfig(
    's4-math-differential-calculus-gradient-tangent',
    'Gradient of a Tangent',
    's4',
    'math',
    'differential-calculus',
    'gradient-tangent',
    's4/math/differential-calculus/GradientOfTangent',
    'foundational-to-intermediate',
    50,
    ['s4-math-differential-calculus-limits']
  ),

  createSubtopicConfig(
    's4-math-differential-calculus-derivative-function',
    'The Derivative Function',
    's4',
    'math',
    'differential-calculus',
    'derivative-function',
    's4/math/differential-calculus/DerivativeFunction',
    'intermediate',
    55,
    ['s4-math-differential-calculus-gradient-tangent']
  ),

  createSubtopicConfig(
    's4-math-differential-calculus-first-principles',
    'Differentiation from First Principles',
    's4',
    'math',
    'differential-calculus',
    'first-principles',
    's4/math/differential-calculus/FirstPrinciples',
    'intermediate',
    60,
    ['s4-math-differential-calculus-derivative-function']
  ),

  createSubtopicConfig(
    's4-math-differential-calculus-differentiation-rules',
    'Rules for Differentiation',
    's4',
    'math',
    'differential-calculus',
    'differentiation-rules',
    's4/math/differential-calculus/DifferentiationRules',
    'intermediate-to-advanced',
    70,
    ['s4-math-differential-calculus-first-principles']
  ),

  createSubtopicConfig(
    's4-math-differential-calculus-tangent-equations',
    'Finding the Equation of a Tangent',
    's4',
    'math',
    'differential-calculus',
    'tangent-equations',
    's4/math/differential-calculus/TangentEquations',
    'intermediate-to-advanced',
    55,
    ['s4-math-differential-calculus-differentiation-rules']
  ),

  createSubtopicConfig(
    's4-math-differential-calculus-stationary-points',
    'Stationary Points',
    's4',
    'math',
    'differential-calculus',
    'stationary-points',
    's4/math/differential-calculus/StationaryPoints',
    'advanced',
    65,
    ['s4-math-differential-calculus-tangent-equations']
  ),
];

/**
 * Main migration function
 */
async function migrateSubtopics() {
  console.log('🚀 Starting subtopic migration to Firestore...\n');
  console.log(`Total subtopics to migrate: ${ALL_SUBTOPICS.length}\n`);

  let successCount = 0;
  let errorCount = 0;
  const errors: Array<{ id: string; error: any }> = [];

  // Batch writes for better performance (Firestore allows 500 operations per batch)
  const BATCH_SIZE = 500;

  for (let i = 0; i < ALL_SUBTOPICS.length; i += BATCH_SIZE) {
    const batch = db.batch();
    const batchSubtopics = ALL_SUBTOPICS.slice(i, i + BATCH_SIZE);

    console.log(`Processing batch ${Math.floor(i / BATCH_SIZE) + 1}...`);

    for (const config of batchSubtopics) {
      try {
        const docRef = db.collection('subtopics').doc(config.id);

        // Add timestamps
        const configWithTimestamps = {
          ...config,
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now()
        };

        batch.set(docRef, configWithTimestamps);

        console.log(`  ✓ Queued: ${config.id}`);
        successCount++;
      } catch (error) {
        console.error(`  ✗ Failed: ${config.id}`, error);
        errorCount++;
        errors.push({ id: config.id, error });
      }
    }

    // Commit the batch
    try {
      await batch.commit();
      console.log(`  ✅ Batch ${Math.floor(i / BATCH_SIZE) + 1} committed successfully\n`);
    } catch (error) {
      console.error(`  ❌ Batch commit failed:`, error);
      errorCount += batchSubtopics.length;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('📊 Migration Summary');
  console.log('='.repeat(60));
  console.log(`✅ Successfully migrated: ${successCount}`);
  console.log(`❌ Failed: ${errorCount}`);

  if (errors.length > 0) {
    console.log('\n⚠️  Errors:');
    errors.forEach(({ id, error }) => {
      console.log(`  - ${id}: ${error.message}`);
    });
  }

  console.log('\n🎉 Migration complete!');
  console.log('\nNext steps:');
  console.log('1. Verify data in Firebase Console: https://console.firebase.google.com/');
  console.log('2. Navigate to Firestore Database → subtopics collection');
  console.log('3. Deploy security rules: firebase deploy --only firestore:rules');
  console.log('4. Update ConfigLoader to use Firestore');
}

/**
 * Verify migration (optional check)
 */
async function verifyMigration() {
  console.log('\n🔍 Verifying migration...');

  const snapshot = await db.collection('subtopics').get();
  console.log(`\nTotal documents in Firestore: ${snapshot.size}`);
  console.log(`Expected documents: ${ALL_SUBTOPICS.length}`);

  if (snapshot.size === ALL_SUBTOPICS.length) {
    console.log('✅ Count matches!');
  } else {
    console.log('⚠️  Count mismatch - some documents may not have been migrated');
  }

  // Check for specific Differential Calculus configs
  console.log('\n📋 Checking for Differential Calculus configs:');
  const diffCalcConfigs = ALL_SUBTOPICS.filter(c =>
    c.id.startsWith('s4-math-differential-calculus')
  );

  for (const config of diffCalcConfigs) {
    const doc = await db.collection('subtopics').doc(config.id).get();
    if (doc.exists) {
      console.log(`  ✓ ${config.id}`);
    } else {
      console.log(`  ✗ MISSING: ${config.id}`);
    }
  }
}

// Run migration
migrateSubtopics()
  .then(() => verifyMigration())
  .then(() => {
    console.log('\n✨ All done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Migration failed:', error);
    process.exit(1);
  });
