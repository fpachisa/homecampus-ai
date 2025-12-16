/**
 * Migration Script: Math Subtopic Configs to Firestore
 *
 * This script migrates S2 Math subtopic configurations to Firestore.
 *

 *
 * S2 Topics:
 *   1. Linear Graphs & Simultaneous Equations (7 subtopics)
 *   2. Expansion & Factorisation (5 subtopics)
 *   3. Quadratic Equations & Graphs (6 subtopics)
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
import { P5_NUMBERS_10_MILLION_FIRESTORE_CONFIGS } from './p5-numbers-10-million-firestore-configs.js';
import { P5_FOUR_OPERATIONS_FIRESTORE_CONFIGS } from './p5-four-operations-firestore-configs.js';
import { P5_FRACTIONS_DIVISIONS_FIRESTORE_CONFIGS } from './p5-fractions-divisions-firestore-configs.js';
import { P5_AREA_OF_TRIANGLE_FIRESTORE_CONFIGS } from './p5-area-of-triangle-firestore-configs.js';
import { P5_VOLUME_FIRESTORE_CONFIGS } from './p5-volume-firestore-configs.js';

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


// ============================================
// P5 FOUR OPERATIONS OF FRACTIONS CONFIGS
// ============================================

export const P5_FOUR_OPERATIONS_FRACTIONS_FIRESTORE_CONFIGS = [
  {
    id: 'p5-math-four-operations-fractions-add-subtract-mixed',
    displayName: 'Addition and Subtraction of Mixed Numbers',
    grade: 'p5',
    subject: 'math',
    topic: 'four-operations-fractions',
    subtopic: 'add-subtract-mixed',
    metadata: {
      difficulty: 'intermediate',
      estimatedMinutes: 45,
      prerequisites: ['p5-math-fractions-divisions-whole-numbers']
    },
    notesComponent: 'p5/math/four-operations-fractions/AddSubtractMixedNumbers',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },
  {
    id: 'p5-math-four-operations-fractions-multiply-fraction-whole',
    displayName: 'Multiplying a Fraction and a Whole Number',
    grade: 'p5',
    subject: 'math',
    topic: 'four-operations-fractions',
    subtopic: 'multiply-fraction-whole',
    metadata: {
      difficulty: 'intermediate',
      estimatedMinutes: 45,
      prerequisites: ['p5-math-four-operations-fractions-add-subtract-mixed']
    },
    notesComponent: 'p5/math/four-operations-fractions/MultiplyFractionWholeNumber',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },
  {
    id: 'p5-math-four-operations-fractions-multiply-two-fractions',
    displayName: 'Multiplying Two Fractions',
    grade: 'p5',
    subject: 'math',
    topic: 'four-operations-fractions',
    subtopic: 'multiply-two-fractions',
    metadata: {
      difficulty: 'intermediate',
      estimatedMinutes: 45,
      prerequisites: ['p5-math-four-operations-fractions-multiply-fraction-whole']
    },
    notesComponent: 'p5/math/four-operations-fractions/MultiplyTwoFractions',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },
  {
    id: 'p5-math-four-operations-fractions-multiply-mixed-whole',
    displayName: 'Multiplying a Mixed Number and a Whole Number',
    grade: 'p5',
    subject: 'math',
    topic: 'four-operations-fractions',
    subtopic: 'multiply-mixed-whole',
    metadata: {
      difficulty: 'intermediate',
      estimatedMinutes: 45,
      prerequisites: ['p5-math-four-operations-fractions-multiply-two-fractions']
    },
    notesComponent: 'p5/math/four-operations-fractions/MultiplyMixedNumberWholeNumber',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },
  {
    id: 'p5-math-four-operations-fractions-word-problems',
    displayName: 'Word Problems',
    grade: 'p5',
    subject: 'math',
    topic: 'four-operations-fractions',
    subtopic: 'word-problems',
    metadata: {
      difficulty: 'advanced',
      estimatedMinutes: 60,
      prerequisites: ['p5-math-four-operations-fractions-multiply-mixed-whole']
    },
    notesComponent: 'p5/math/four-operations-fractions/WordProblems',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];

export const S2_PROBABILITY_SINGLE_EVENT_FIRESTORE_CONFIGS = [
  // ========================================
  // SUBTOPIC 1: Probability Experiments and Sample Space
  // ========================================
  {
    id: "s2-math-probability-experiments-sample-space",
    displayName: "Probability Experiments and Sample Space",
    grade: "s2",
    subject: "math",
    topic: "probability-single-event",
    subtopic: "experiments-sample-space",

    metadata: {
      difficulty: "foundational",
      estimatedMinutes: 50,
      prerequisites: [] // No prerequisites - this is the foundation
    },

    notesComponent: "s2/math/probability-single-event/ProbabilityExperimentsAndSampleSpace",
    teachingTemplate: "", // Auto-populated by AI system

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

  // ========================================
  // SUBTOPIC 2: Basic Probability Calculation
  // ========================================
  {
    id: "s2-math-probability-basic-calculation",
    displayName: "Basic Probability Calculation",
    grade: "s2",
    subject: "math",
    topic: "probability-single-event",
    subtopic: "basic-calculation",

    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 60,
      prerequisites: ["s2-math-probability-experiments-sample-space"]
    },

    notesComponent: "s2/math/probability-single-event/BasicProbabilityCalculation",
    teachingTemplate: "",

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

  // ========================================
  // SUBTOPIC 3: Experimental Probability
  // ========================================
  {
    id: "s2-math-probability-experimental",
    displayName: "Experimental Probability",
    grade: "s2",
    subject: "math",
    topic: "probability-single-event",
    subtopic: "experimental",

    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 55,
      prerequisites: ["s2-math-probability-basic-calculation"]
    },

    notesComponent: "s2/math/probability-single-event/ExperimentalProbability",
    teachingTemplate: "",

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

  // ========================================
  // SUBTOPIC 4: Advanced Single Event Probability
  // ========================================
  {
    id: "s2-math-probability-advanced-single-event",
    displayName: "Advanced Single Event Probability",
    grade: "s2",
    subject: "math",
    topic: "probability-single-event",
    subtopic: "advanced",

    metadata: {
      difficulty: "advanced",
      estimatedMinutes: 65,
      prerequisites: [
        "s2-math-probability-basic-calculation",
        "s2-math-probability-experimental"
      ]
    },

    notesComponent: "s2/math/probability-single-event/AdvancedSingleEventProbability",
    teachingTemplate: "",

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

// ============================================
// P5 MATHEMATICS - Decimals
// ============================================
const P5_DECIMALS_FIRESTORE_CONFIGS = [
  {
    id: "p5-math-decimals-multiply-10-100-1000",
    displayName: "Multiplying Decimals by 10, 100, 1000",
    grade: "p5",
    subject: "math",
    topic: "decimals",
    subtopic: "multiply-10-100-1000",
    metadata: {
      difficulty: "foundational",
      estimatedMinutes: 35,
      prerequisites: []
    },
    notesComponent: "p5/math/decimals/MultiplyingBy10_100_1000",
    teachingTemplate: "",
    scoring: {
      easy: { basePoints: 0.10, hintPenalties: [0.02, 0.04, 0.06] },
      medium: { basePoints: 0.20, hintPenalties: [0.04, 0.08, 0.12] },
      hard: { basePoints: 0.30, hintPenalties: [0.06, 0.12, 0.20] }
    },
    modules: { learn: true, practice: true, visualizations: true }
  },
  {
    id: "p5-math-decimals-multiply-tens-hundreds-thousands",
    displayName: "Multiplying Decimals by Tens, Hundreds, Thousands",
    grade: "p5",
    subject: "math",
    topic: "decimals",
    subtopic: "multiply-tens-hundreds-thousands",
    metadata: {
      difficulty: "foundational-to-intermediate",
      estimatedMinutes: 40,
      prerequisites: ["p5-math-decimals-multiply-10-100-1000"]
    },
    notesComponent: "p5/math/decimals/MultiplyingByTensHundredsThousands",
    teachingTemplate: "",
    scoring: {
      easy: { basePoints: 0.10, hintPenalties: [0.02, 0.04, 0.06] },
      medium: { basePoints: 0.20, hintPenalties: [0.04, 0.08, 0.12] },
      hard: { basePoints: 0.30, hintPenalties: [0.06, 0.12, 0.20] }
    },
    modules: { learn: true, practice: true, visualizations: true }
  },
  {
    id: "p5-math-decimals-divide-10-100-1000",
    displayName: "Dividing Decimals by 10, 100, 1000",
    grade: "p5",
    subject: "math",
    topic: "decimals",
    subtopic: "divide-10-100-1000",
    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 40,
      prerequisites: ["p5-math-decimals-multiply-10-100-1000"]
    },
    notesComponent: "p5/math/decimals/DividingBy10_100_1000",
    teachingTemplate: "",
    scoring: {
      easy: { basePoints: 0.10, hintPenalties: [0.02, 0.04, 0.06] },
      medium: { basePoints: 0.20, hintPenalties: [0.04, 0.08, 0.12] },
      hard: { basePoints: 0.30, hintPenalties: [0.06, 0.12, 0.20] }
    },
    modules: { learn: true, practice: true, visualizations: true }
  },
  {
    id: "p5-math-decimals-divide-tens-hundreds-thousands",
    displayName: "Dividing Decimals by Tens, Hundreds, Thousands",
    grade: "p5",
    subject: "math",
    topic: "decimals",
    subtopic: "divide-tens-hundreds-thousands",
    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 45,
      prerequisites: ["p5-math-decimals-divide-10-100-1000", "p5-math-decimals-multiply-tens-hundreds-thousands"]
    },
    notesComponent: "p5/math/decimals/DividingByTensHundredsThousands",
    teachingTemplate: "",
    scoring: {
      easy: { basePoints: 0.10, hintPenalties: [0.02, 0.04, 0.06] },
      medium: { basePoints: 0.20, hintPenalties: [0.04, 0.08, 0.12] },
      hard: { basePoints: 0.30, hintPenalties: [0.06, 0.12, 0.20] }
    },
    modules: { learn: true, practice: true, visualizations: true }
  },
  {
    id: "p5-math-decimals-converting-measurements",
    displayName: "Converting Measurements",
    grade: "p5",
    subject: "math",
    topic: "decimals",
    subtopic: "converting-measurements",
    metadata: {
      difficulty: "intermediate-to-challenging",
      estimatedMinutes: 50,
      prerequisites: ["p5-math-decimals-multiply-10-100-1000", "p5-math-decimals-divide-10-100-1000"]
    },
    notesComponent: "p5/math/decimals/ConvertingMeasurements",
    teachingTemplate: "",
    scoring: {
      easy: { basePoints: 0.10, hintPenalties: [0.02, 0.04, 0.06] },
      medium: { basePoints: 0.20, hintPenalties: [0.04, 0.08, 0.12] },
      hard: { basePoints: 0.30, hintPenalties: [0.06, 0.12, 0.20] }
    },
    modules: { learn: true, practice: true, visualizations: true }
  },
  {
    id: "p5-math-decimals-word-problems",
    displayName: "Word Problems on Decimals",
    grade: "p5",
    subject: "math",
    topic: "decimals",
    subtopic: "word-problems",
    metadata: {
      difficulty: "challenging",
      estimatedMinutes: 60,
      prerequisites: ["p5-math-decimals-multiply-tens-hundreds-thousands", "p5-math-decimals-divide-tens-hundreds-thousands", "p5-math-decimals-converting-measurements"]
    },
    notesComponent: "p5/math/decimals/WordProblems",
    teachingTemplate: "",
    scoring: {
      easy: { basePoints: 0.10, hintPenalties: [0.02, 0.04, 0.06] },
      medium: { basePoints: 0.20, hintPenalties: [0.04, 0.08, 0.12] },
      hard: { basePoints: 0.30, hintPenalties: [0.06, 0.12, 0.20] }
    },
    modules: { learn: true, practice: true, visualizations: true }
  }
];

const ALL_CONFIGS = [
  ...S2_PROBABILITY_SINGLE_EVENT_FIRESTORE_CONFIGS,
  ...P5_NUMBERS_10_MILLION_FIRESTORE_CONFIGS,
  ...P5_FOUR_OPERATIONS_FIRESTORE_CONFIGS,
  ...P5_FRACTIONS_DIVISIONS_FIRESTORE_CONFIGS,
  ...P5_FOUR_OPERATIONS_FRACTIONS_FIRESTORE_CONFIGS,
  ...P5_AREA_OF_TRIANGLE_FIRESTORE_CONFIGS,
  ...P5_VOLUME_FIRESTORE_CONFIGS,
  ...P5_DECIMALS_FIRESTORE_CONFIGS
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
