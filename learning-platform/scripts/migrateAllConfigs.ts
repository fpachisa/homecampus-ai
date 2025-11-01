/**
 * Migration Script: S1 Approximation & Estimation Configs to Firestore
 *
 * This script migrates the S1 Approximation & Estimation subtopic configurations to Firestore.
 *
 * Subtopics:
 *   1. Rounding to Decimal Places
 *   2. Significant Figures
 *   3. Estimation Techniques
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
 * S1 Approximation & Estimation configs (3 configs)
 */
const S1_APPROXIMATION_ESTIMATION_CONFIGS = [
  // ============================================
  // S1 APPROXIMATION & ESTIMATION (3 NEW CONFIGS)
  // ============================================

  // Subtopic 1: Rounding to Decimal Places
  {
    id: 's1-math-approximation-estimation-rounding-decimal-places',
    displayName: 'Rounding to Decimal Places',
    grade: 's1',
    subject: 'math',
    topic: 'approximation-estimation',
    subtopic: 'rounding-decimal-places',
    metadata: {
      difficulty: 'foundational' as const,
      estimatedMinutes: 45,
      prerequisites: []
    },
    notesComponent: 's1/math/approximation-estimation/RoundingDecimalPlaces',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 2: Significant Figures
  {
    id: 's1-math-approximation-estimation-significant-figures',
    displayName: 'Significant Figures',
    grade: 's1',
    subject: 'math',
    topic: 'approximation-estimation',
    subtopic: 'significant-figures',
    metadata: {
      difficulty: 'foundational-to-intermediate' as const,
      estimatedMinutes: 50,
      prerequisites: ['s1-math-approximation-estimation-rounding-decimal-places']
    },
    notesComponent: 's1/math/approximation-estimation/SignificantFigures',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 3: Estimation Techniques
  {
    id: 's1-math-approximation-estimation-techniques',
    displayName: 'Estimation Techniques',
    grade: 's1',
    subject: 'math',
    topic: 'approximation-estimation',
    subtopic: 'techniques',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 55,
      prerequisites: ['s1-math-approximation-estimation-rounding-decimal-places', 's1-math-approximation-estimation-significant-figures']
    },
    notesComponent: 's1/math/approximation-estimation/EstimationTechniques',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];

// Only migrate S1 Approximation & Estimation configs
const ALL_CONFIGS = [...S1_APPROXIMATION_ESTIMATION_CONFIGS];

/**
 * Migrate S1 Approximation & Estimation configs to Firestore
 */
async function migrateAll() {
  console.log('🚀 Starting S1 Approximation & Estimation migration to Firestore...\n');
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

  // Check for S1 Approximation & Estimation configs
  console.log('\n📋 S1 Approximation & Estimation configs:');
  const approxEstIds = ALL_CONFIGS
    .filter(c => c.id.startsWith('s1-math-approximation-estimation'))
    .map(c => c.id);

  for (const id of approxEstIds) {
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
    console.log('2. Test the S1 Approximation & Estimation module in the app');
    console.log('3. Commit and push to deploy to production');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Migration failed:', error);
    process.exit(1);
  });
