/**
 * Migration Script: Math Subtopic Configs to Firestore
 *
 * This script migrates S2 Math subtopic configurations to Firestore.
 *

 *
 * S2 Topics:
 *   1. Linear Graphs & Simultaneous Equations (7 subtopics)
 *
 * Usage:
 *   npx tsx scripts/migrateAllConfigs.ts
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
 * S2 Linear Graphs and Simultaneous Equations configs (7 configs)
 */
const S2_LINEAR_GRAPHS_CONFIGS = [
  // ============================================
  // S2 LINEAR GRAPHS & SIMULTANEOUS EQUATIONS (7 CONFIGS)
  // ============================================

  // Subtopic 1: Introduction to Linear Graphs
  {
    id: 's2-math-linear-graphs-intro',
    displayName: 'Introduction to Linear Graphs',
    grade: 's2',
    subject: 'math',
    topic: 'linear-graphs',
    subtopic: 'intro',
    metadata: {
      difficulty: 'foundational' as const,
      estimatedMinutes: 50,
      prerequisites: []
    },
    notesComponent: 's2/math/linear-graph/IntroToLinearGraphs',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 2: Gradient and y-intercept
  {
    id: 's2-math-linear-graphs-gradient-intercept',
    displayName: 'Gradient and y-intercept',
    grade: 's2',
    subject: 'math',
    topic: 'linear-graphs',
    subtopic: 'gradient-intercept',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 55,
      prerequisites: ['s2-math-linear-graphs-intro']
    },
    notesComponent: 's2/math/linear-graph/GradientAndIntercept',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 3: Equation of a Line
  {
    id: 's2-math-linear-graphs-equation-of-line',
    displayName: 'Equation of a Line',
    grade: 's2',
    subject: 'math',
    topic: 'linear-graphs',
    subtopic: 'equation-of-line',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 50,
      prerequisites: ['s2-math-linear-graphs-gradient-intercept']
    },
    notesComponent: 's2/math/linear-graph/EquationOfLine',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 4: Finding Equations from Two Points
  {
    id: 's2-math-linear-graphs-equations-from-points',
    displayName: 'Finding Equations from Two Points',
    grade: 's2',
    subject: 'math',
    topic: 'linear-graphs',
    subtopic: 'equations-from-points',
    metadata: {
      difficulty: 'intermediate-to-advanced' as const,
      estimatedMinutes: 55,
      prerequisites: ['s2-math-linear-graphs-gradient-intercept', 's2-math-linear-graphs-equation-of-line']
    },
    notesComponent: 's2/math/linear-graph/EquationsFromTwoPoints',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 5: Graphing Linear Equations
  {
    id: 's2-math-linear-graphs-graphing',
    displayName: 'Graphing Linear Equations',
    grade: 's2',
    subject: 'math',
    topic: 'linear-graphs',
    subtopic: 'graphing',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 50,
      prerequisites: ['s2-math-linear-graphs-equation-of-line']
    },
    notesComponent: 's2/math/linear-graph/GraphingLinearEquations',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 6: Introduction to Simultaneous Equations
  {
    id: 's2-math-linear-graphs-simultaneous-intro',
    displayName: 'Introduction to Simultaneous Equations',
    grade: 's2',
    subject: 'math',
    topic: 'linear-graphs',
    subtopic: 'simultaneous-intro',
    metadata: {
      difficulty: 'intermediate-to-advanced' as const,
      estimatedMinutes: 55,
      prerequisites: ['s2-math-linear-graphs-equation-of-line', 's2-math-linear-graphs-graphing']
    },
    notesComponent: 's2/math/linear-graph/SimultaneousEquationsIntro',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 7: Algebraic Methods for Simultaneous Equations
  {
    id: 's2-math-linear-graphs-simultaneous-algebraic',
    displayName: 'Algebraic Methods for Simultaneous Equations',
    grade: 's2',
    subject: 'math',
    topic: 'linear-graphs',
    subtopic: 'simultaneous-algebraic',
    metadata: {
      difficulty: 'advanced' as const,
      estimatedMinutes: 60,
      prerequisites: ['s2-math-linear-graphs-simultaneous-intro']
    },
    notesComponent: 's2/math/linear-graph/SimultaneousEquationsAlgebraic',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];

const ALL_CONFIGS = [

  ...S2_LINEAR_GRAPHS_CONFIGS
];

/**
 * Migrate all S1 Math configs to Firestore
 */
async function migrateAll() {
  console.log('🚀 Starting S1 Math subtopic migration to Firestore...\n');
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


  // Check for S2 Linear Graphs configs
  console.log('\n📋 S2 Linear Graphs & Simultaneous Equations configs:');
  const linearGraphsIds = ALL_CONFIGS
    .filter(c => c.id.startsWith('s2-math-linear-graphs'))
    .map(c => c.id);

  for (const id of linearGraphsIds) {
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
    console.log('2. Test the Math modules in the app:');
    console.log('   S1 Topics:');
    console.log('   - Approximation & Estimation (3 subtopics)');
    console.log('   - Simple Linear Equations (4 subtopics)');
    console.log('   - Basic Algebra (7 subtopics)');
    console.log('   - Angles and Parallel Lines (6 subtopics)');
    console.log('   S2 Topics:');
    console.log('   - Linear Graphs & Simultaneous Equations (7 subtopics)');
    console.log('3. Commit and push to deploy to production');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Migration failed:', error);
    process.exit(1);
  });
