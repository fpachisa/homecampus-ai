/**
 * Quick Fix Script: Add Missing Differential Calculus Configs
 *
 * This script adds the 7 missing S4 Differential Calculus subtopic configs
 * to Firestore, which will make the Notes links appear on the Learn page.
 *
 * Usage (from learning-platform directory):
 *   npx ts-node scripts/addDifferentialCalculusConfigs.ts
 *
 * Prerequisites:
 *   - Firebase credentials configured in .env
 *   - firestore.rules deployed
 */

import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables
dotenv.config({ path: path.join(__dirname, '../.env') });

// Initialize Firebase Admin
if (getApps().length === 0) {
  // Use environment variables for initialization
  const projectId = process.env.VITE_FIREBASE_PROJECT_ID;

  if (!projectId) {
    console.error('❌ Error: VITE_FIREBASE_PROJECT_ID not found in .env file');
    process.exit(1);
  }

  console.log(`🔧 Initializing Firebase Admin for project: ${projectId}`);

  try {
    // Try to use service account if available
    const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;

    if (serviceAccountPath) {
      const serviceAccount = require(serviceAccountPath);
      initializeApp({
        credential: cert(serviceAccount),
        projectId
      });
      console.log('✅ Using service account credentials');
    } else {
      // Fallback to application default credentials
      initializeApp({ projectId });
      console.log('✅ Using application default credentials');
    }
  } catch (error) {
    console.error('❌ Failed to initialize Firebase:', error);
    console.log('\n💡 Tip: Set up Firebase credentials:');
    console.log('   1. Download service account key from Firebase Console');
    console.log('   2. Set GOOGLE_APPLICATION_CREDENTIALS environment variable');
    console.log('   3. Or run: firebase login');
    process.exit(1);
  }
}

const db = getFirestore();

/**
 * The 7 missing Differential Calculus subtopic configs
 */
const DIFFERENTIAL_CALCULUS_CONFIGS = [
  {
    id: 's4-math-differential-calculus-limits',
    displayName: 'Limits',
    grade: 's4',
    subject: 'math',
    topic: 'differential-calculus',
    subtopic: 'limits',
    metadata: {
      difficulty: 'foundational',
      estimatedMinutes: 60,
      prerequisites: []
    },
    notesComponent: 's4/math/differential-calculus/Limits',
    teachingTemplate: '',
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
  {
    id: 's4-math-differential-calculus-gradient-tangent',
    displayName: 'Gradient of a Tangent',
    grade: 's4',
    subject: 'math',
    topic: 'differential-calculus',
    subtopic: 'gradient-tangent',
    metadata: {
      difficulty: 'foundational-to-intermediate',
      estimatedMinutes: 50,
      prerequisites: ['s4-math-differential-calculus-limits']
    },
    notesComponent: 's4/math/differential-calculus/GradientOfTangent',
    teachingTemplate: '',
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
  {
    id: 's4-math-differential-calculus-derivative-function',
    displayName: 'The Derivative Function',
    grade: 's4',
    subject: 'math',
    topic: 'differential-calculus',
    subtopic: 'derivative-function',
    metadata: {
      difficulty: 'intermediate',
      estimatedMinutes: 55,
      prerequisites: ['s4-math-differential-calculus-gradient-tangent']
    },
    notesComponent: 's4/math/differential-calculus/DerivativeFunction',
    teachingTemplate: '',
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
  {
    id: 's4-math-differential-calculus-first-principles',
    displayName: 'Differentiation from First Principles',
    grade: 's4',
    subject: 'math',
    topic: 'differential-calculus',
    subtopic: 'first-principles',
    metadata: {
      difficulty: 'intermediate',
      estimatedMinutes: 60,
      prerequisites: ['s4-math-differential-calculus-derivative-function']
    },
    notesComponent: 's4/math/differential-calculus/FirstPrinciples',
    teachingTemplate: '',
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
  {
    id: 's4-math-differential-calculus-differentiation-rules',
    displayName: 'Rules for Differentiation',
    grade: 's4',
    subject: 'math',
    topic: 'differential-calculus',
    subtopic: 'differentiation-rules',
    metadata: {
      difficulty: 'intermediate-to-advanced',
      estimatedMinutes: 70,
      prerequisites: ['s4-math-differential-calculus-first-principles']
    },
    notesComponent: 's4/math/differential-calculus/DifferentiationRules',
    teachingTemplate: '',
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
  {
    id: 's4-math-differential-calculus-tangent-equations',
    displayName: 'Finding the Equation of a Tangent',
    grade: 's4',
    subject: 'math',
    topic: 'differential-calculus',
    subtopic: 'tangent-equations',
    metadata: {
      difficulty: 'intermediate-to-advanced',
      estimatedMinutes: 55,
      prerequisites: ['s4-math-differential-calculus-differentiation-rules']
    },
    notesComponent: 's4/math/differential-calculus/TangentEquations',
    teachingTemplate: '',
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
  {
    id: 's4-math-differential-calculus-stationary-points',
    displayName: 'Stationary Points',
    grade: 's4',
    subject: 'math',
    topic: 'differential-calculus',
    subtopic: 'stationary-points',
    metadata: {
      difficulty: 'advanced',
      estimatedMinutes: 65,
      prerequisites: ['s4-math-differential-calculus-tangent-equations']
    },
    notesComponent: 's4/math/differential-calculus/StationaryPoints',
    teachingTemplate: '',
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

/**
 * Add configs to Firestore
 */
async function addConfigs() {
  console.log('\n🚀 Adding Differential Calculus configs to Firestore...\n');

  let successCount = 0;
  let errorCount = 0;

  for (const config of DIFFERENTIAL_CALCULUS_CONFIGS) {
    try {
      const docRef = db.collection('subtopics').doc(config.id);

      // Check if already exists
      const existing = await docRef.get();

      if (existing.exists) {
        console.log(`  ⚠️  Already exists: ${config.id} (skipping)`);
        successCount++;
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
  console.log('📊 Summary');
  console.log('='.repeat(60));
  console.log(`✅ Success: ${successCount}/${DIFFERENTIAL_CALCULUS_CONFIGS.length}`);
  console.log(`❌ Errors: ${errorCount}`);

  if (errorCount === 0) {
    console.log('\n🎉 All Differential Calculus configs added successfully!');
    console.log('\n📝 Next steps:');
    console.log('1. ✅ Verify in Firebase Console');
    console.log('2. ✅ Test Notes link in Learn page for Differential Calculus');
    console.log('3. 🔄 Update ConfigLoader to fetch from Firestore');
  }
}

// Run the script
addConfigs()
  .then(() => {
    console.log('\n✨ Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Error:', error);
    process.exit(1);
  });
