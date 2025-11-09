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
import { S2_QUADRATIC_EQUATIONS_GRAPHS_CONFIGS } from './s2-quadratic-equations-graphs-firestore-configs.js';
import { S2_TRIGONOMETRIC_RATIOS_CONFIGS } from './s2-trigonometric-ratios-firestore-configs.js';

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


export const S2_ALGEBRAIC_FRACTIONS_FIRESTORE_CONFIGS = [
  {
    id: "s2-math-algebraic-fractions-introduction",
    displayName: "Introduction to Algebraic Fractions",
    grade: "s2",
    subject: "math",
    topic: "algebraic-fractions-formulae",
    subtopic: "introduction",

    metadata: {
      difficulty: "foundational",
      estimatedMinutes: 50,
      prerequisites: ["s1-math-fractions-operations"] // From S1 if exists
    },

    notesComponent: "s2/math/algebraic-fractions-formulae/Introduction",
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

  {
    id: "s2-math-algebraic-fractions-factorization",
    displayName: "Simplifying by Factorization",
    grade: "s2",
    subject: "math",
    topic: "algebraic-fractions-formulae",
    subtopic: "factorization",

    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 65,
      prerequisites: ["s2-math-algebraic-fractions-introduction"]
    },

    notesComponent: "s2/math/algebraic-fractions-formulae/Factorization",
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

  {
    id: "s2-math-algebraic-fractions-mult-div",
    displayName: "Multiplying and Dividing Algebraic Fractions",
    grade: "s2",
    subject: "math",
    topic: "algebraic-fractions-formulae",
    subtopic: "multiplication-division",

    metadata: {
      difficulty: "intermediate",
      estimatedMinutes: 55,
      prerequisites: ["s2-math-algebraic-fractions-factorization"]
    },

    notesComponent: "s2/math/algebraic-fractions-formulae/MultiplicationDivision",
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

  {
    id: "s2-math-algebraic-fractions-add-subtract",
    displayName: "Adding and Subtracting Algebraic Fractions",
    grade: "s2",
    subject: "math",
    topic: "algebraic-fractions-formulae",
    subtopic: "addition-subtraction",

    metadata: {
      difficulty: "intermediate-to-advanced",
      estimatedMinutes: 70,
      prerequisites: ["s2-math-algebraic-fractions-mult-div"]
    },

    notesComponent: "s2/math/algebraic-fractions-formulae/AdditionSubtraction",
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

  {
    id: "s2-math-algebraic-fractions-equations-formulae",
    displayName: "Solving Equations and Manipulating Formulae",
    grade: "s2",
    subject: "math",
    topic: "algebraic-fractions-formulae",
    subtopic: "equations-formulae",

    metadata: {
      difficulty: "advanced",
      estimatedMinutes: 75,
      prerequisites: ["s2-math-algebraic-fractions-add-subtract"]
    },

    notesComponent: "s2/math/algebraic-fractions-formulae/EquationsFormulae",
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

export const S2_PYTHAGORAS_CONFIGS = [
  // ============================================
  // S2 PYTHAGORAS' THEOREM (5 NEW CONFIGS)
  // ============================================

  // Subtopic 1: Introduction to Pythagoras' Theorem
  {
    id: 's2-math-pythagoras-introduction',
    displayName: 'Introduction to Pythagoras\' Theorem',
    grade: 's2',
    subject: 'math',
    topic: 'pythagoras',
    subtopic: 'introduction',
    metadata: {
      difficulty: 'foundational' as const,
      estimatedMinutes: 45,
      prerequisites: ['Basic knowledge of right-angled triangles', 'Squares and square roots'],
      keywords: [
        'pythagoras',
        'hypotenuse',
        'right-angled triangle',
        'pythagorean triple',
        'a squared plus b squared equals c squared'
      ],
      learningObjectives: [
        'Identify the hypotenuse and legs of a right-angled triangle',
        'State Pythagoras\' Theorem: a² + b² = c²',
        'Understand that c is the hypotenuse (longest side)',
        'Recognize common Pythagorean triples (3-4-5, 5-12-13, 8-15-17, 7-24-25)',
        'Verify the theorem with given side lengths'
      ]
    },
    notesComponent: 's2/math/pythagoras/Introduction',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 2: Finding the Hypotenuse
  {
    id: 's2-math-pythagoras-finding-hypotenuse',
    displayName: 'Finding the Hypotenuse',
    grade: 's2',
    subject: 'math',
    topic: 'pythagoras',
    subtopic: 'finding-hypotenuse',
    metadata: {
      difficulty: 'foundational' as const,
      estimatedMinutes: 60,
      prerequisites: ['s2-math-pythagoras-introduction'],
      keywords: [
        'hypotenuse',
        'finding longest side',
        'c equals square root',
        'pythagorean triples',
        'rounding decimals',
        'ladder problems'
      ],
      learningObjectives: [
        'Apply c = √(a² + b²) to find hypotenuse',
        'Square numbers and add squares correctly',
        'Find square roots using calculator',
        'Round answers to specified precision',
        'Solve word problems involving hypotenuse'
      ]
    },
    notesComponent: 's2/math/pythagoras/FindingHypotenuse',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 3: Finding Shorter Sides (Legs)
  {
    id: 's2-math-pythagoras-finding-shorter-sides',
    displayName: 'Finding Shorter Sides',
    grade: 's2',
    subject: 'math',
    topic: 'pythagoras',
    subtopic: 'finding-shorter-sides',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 60,
      prerequisites: ['s2-math-pythagoras-introduction', 's2-math-pythagoras-finding-hypotenuse'],
      keywords: [
        'finding leg',
        'rearranging formula',
        'subtract from hypotenuse',
        'a squared equals c squared minus b squared',
        'ladder height problems'
      ],
      learningObjectives: [
        'Rearrange a² + b² = c² to find a leg: a² = c² - b²',
        'Apply a = √(c² - b²) correctly',
        'Distinguish finding hypotenuse from finding leg',
        'Solve word problems where hypotenuse is given',
        'Verify answers using the original theorem'
      ]
    },
    notesComponent: 's2/math/pythagoras/FindingShorterSides',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 4: Real-World Applications
  {
    id: 's2-math-pythagoras-real-world-applications',
    displayName: 'Real-World Applications',
    grade: 's2',
    subject: 'math',
    topic: 'pythagoras',
    subtopic: 'real-world-applications',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 75,
      prerequisites: ['s2-math-pythagoras-finding-hypotenuse', 's2-math-pythagoras-finding-shorter-sides'],
      keywords: [
        'ladder problems',
        'navigation distance',
        'rectangle diagonal',
        'space diagonal',
        '3D pythagoras',
        'TV screen size',
        'construction applications'
      ],
      learningObjectives: [
        'Identify right-angled triangles in real contexts',
        'Solve ladder problems (wall-ground-ladder)',
        'Calculate navigation distances (perpendicular directions)',
        'Find rectangle diagonals',
        'Apply Pythagoras twice for 3D space diagonals',
        'Interpret answers in context with correct units'
      ]
    },
    notesComponent: 's2/math/pythagoras/RealWorldApplications',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 5: Converse of Pythagoras' Theorem
  {
    id: 's2-math-pythagoras-converse',
    displayName: 'Converse of Pythagoras\' Theorem',
    grade: 's2',
    subject: 'math',
    topic: 'pythagoras',
    subtopic: 'converse',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 50,
      prerequisites: ['s2-math-pythagoras-finding-hypotenuse', 's2-math-pythagoras-finding-shorter-sides'],
      keywords: [
        'converse theorem',
        'testing right angle',
        'checking if right-angled',
        'construction checking',
        '3-4-5 method',
        'carpenter square',
        'if and only if'
      ],
      learningObjectives: [
        'State the converse of Pythagoras\' Theorem',
        'Test if a triangle is right-angled using side lengths',
        'Identify the longest side as potential hypotenuse',
        'Apply to construction checking (3-4-5 method)',
        'Explain the difference between theorem and converse'
      ]
    },
    notesComponent: 's2/math/pythagoras/Converse',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];

const ALL_CONFIGS = [
  ...S2_ALGEBRAIC_FRACTIONS_FIRESTORE_CONFIGS,
  ...S2_PYTHAGORAS_CONFIGS,
  ...S2_TRIGONOMETRIC_RATIOS_CONFIGS
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
