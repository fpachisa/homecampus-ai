/**
 * Migration Script: S1 Math Subtopic Configs to Firestore
 *
 * This script migrates S1 Math subtopic configurations to Firestore.
 *
 * Topics:
 *   1. Approximation & Estimation (3 subtopics)
 *   2. Simple Linear Equations (4 subtopics)
 *   3. Basic Algebra (7 subtopics)
 *   4. Angles and Parallel Lines (6 subtopics)
 *   5. Ratio, Rate, and Speed (4 subtopics)
 *   6. Percentage (7 subtopics)
 *   7. Linear Functions & Graphs (4 subtopics)
 *   8. Perimeter and Area (3 subtopics)
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

/**
 * S1 Simple Linear Equations configs (4 configs)
 */
const S1_SIMPLE_LINEAR_EQUATIONS_CONFIGS = [
  // ============================================
  // S1 SIMPLE LINEAR EQUATIONS (4 NEW CONFIGS)
  // ============================================

  // Subtopic 1: Introduction to Linear Equations
  {
    id: 's1-math-simple-linear-equations-introduction',
    displayName: 'Introduction to Linear Equations',
    grade: 's1',
    subject: 'math',
    topic: 'simple-linear-equations',
    subtopic: 'introduction',
    metadata: {
      difficulty: 'foundational' as const,
      estimatedMinutes: 50,
      prerequisites: []
    },
    notesComponent: 's1/math/simple-linear-equations/Introduction',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 2: Equations with Variables on Both Sides
  {
    id: 's1-math-simple-linear-equations-both-sides',
    displayName: 'Equations with Variables on Both Sides',
    grade: 's1',
    subject: 'math',
    topic: 'simple-linear-equations',
    subtopic: 'both-sides',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 55,
      prerequisites: ['s1-math-simple-linear-equations-introduction']
    },
    notesComponent: 's1/math/simple-linear-equations/BothSides',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 3: Fractional Equations
  {
    id: 's1-math-simple-linear-equations-fractional',
    displayName: 'Fractional Equations',
    grade: 's1',
    subject: 'math',
    topic: 'simple-linear-equations',
    subtopic: 'fractional',
    metadata: {
      difficulty: 'intermediate-to-advanced' as const,
      estimatedMinutes: 60,
      prerequisites: ['s1-math-simple-linear-equations-both-sides']
    },
    notesComponent: 's1/math/simple-linear-equations/Fractional',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 4: Word Problems & Applications
  {
    id: 's1-math-simple-linear-equations-word-problems',
    displayName: 'Word Problems & Applications',
    grade: 's1',
    subject: 'math',
    topic: 'simple-linear-equations',
    subtopic: 'word-problems',
    metadata: {
      difficulty: 'advanced' as const,
      estimatedMinutes: 65,
      prerequisites: ['s1-math-simple-linear-equations-fractional']
    },
    notesComponent: 's1/math/simple-linear-equations/WordProblems',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];

/**
 * S1 Basic Algebra configs (7 configs)
 */
const S1_BASIC_ALGEBRA_CONFIGS = [
  // ============================================
  // S1 BASIC ALGEBRA (7 NEW CONFIGS)
  // ============================================

  // Subtopic 1: Algebraic Notation & Expressions
  {
    id: 's1-math-basic-algebra-notation',
    displayName: 'Algebraic Notation & Expressions',
    grade: 's1',
    subject: 'math',
    topic: 'basic-algebra',
    subtopic: 'notation',
    metadata: {
      difficulty: 'foundational' as const,
      estimatedMinutes: 45,
      prerequisites: []
    },
    notesComponent: 's1/math/basic-algebra/AlgebraicNotation',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 2: Simplifying Expressions
  {
    id: 's1-math-basic-algebra-simplifying',
    displayName: 'Simplifying Algebraic Expressions',
    grade: 's1',
    subject: 'math',
    topic: 'basic-algebra',
    subtopic: 'simplifying',
    metadata: {
      difficulty: 'foundational-to-intermediate' as const,
      estimatedMinutes: 50,
      prerequisites: ['s1-math-basic-algebra-notation']
    },
    notesComponent: 's1/math/basic-algebra/SimplifyingExpressions',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 3: Expanding Brackets
  {
    id: 's1-math-basic-algebra-expanding',
    displayName: 'Expanding Brackets',
    grade: 's1',
    subject: 'math',
    topic: 'basic-algebra',
    subtopic: 'expanding',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 55,
      prerequisites: ['s1-math-basic-algebra-simplifying']
    },
    notesComponent: 's1/math/basic-algebra/ExpandingBrackets',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 4: Factorization
  {
    id: 's1-math-basic-algebra-factorization',
    displayName: 'Factorization',
    grade: 's1',
    subject: 'math',
    topic: 'basic-algebra',
    subtopic: 'factorization',
    metadata: {
      difficulty: 'intermediate-to-advanced' as const,
      estimatedMinutes: 55,
      prerequisites: ['s1-math-basic-algebra-expanding']
    },
    notesComponent: 's1/math/basic-algebra/Factorization',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 5: Linear Equations
  {
    id: 's1-math-basic-algebra-equations',
    displayName: 'Solving Linear Equations',
    grade: 's1',
    subject: 'math',
    topic: 'basic-algebra',
    subtopic: 'equations',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 60,
      prerequisites: ['s1-math-basic-algebra-simplifying']
    },
    notesComponent: 's1/math/basic-algebra/LinearEquations',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 6: Changing the Subject
  {
    id: 's1-math-basic-algebra-changing-subject',
    displayName: 'Changing the Subject of a Formula',
    grade: 's1',
    subject: 'math',
    topic: 'basic-algebra',
    subtopic: 'changing-subject',
    metadata: {
      difficulty: 'intermediate-to-advanced' as const,
      estimatedMinutes: 55,
      prerequisites: ['s1-math-basic-algebra-equations']
    },
    notesComponent: 's1/math/basic-algebra/ChangingTheSubject',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 7: Word Problems & Applications
  {
    id: 's1-math-basic-algebra-word-problems',
    displayName: 'Word Problems & Applications',
    grade: 's1',
    subject: 'math',
    topic: 'basic-algebra',
    subtopic: 'word-problems',
    metadata: {
      difficulty: 'advanced' as const,
      estimatedMinutes: 60,
      prerequisites: ['s1-math-basic-algebra-equations']
    },
    notesComponent: 's1/math/basic-algebra/WordProblems',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];

/**
 * S1 Angles and Parallel Lines configs (6 configs)
 */
const S1_ANGLES_PARALLEL_LINES_CONFIGS = [
  // ============================================
  // S1 ANGLES AND PARALLEL LINES (6 NEW CONFIGS)
  // ============================================

  // Subtopic 1: Introduction to Angles
  {
    id: 's1-math-angles-parallel-lines-introduction',
    displayName: 'Introduction to Angles',
    grade: 's1',
    subject: 'math',
    topic: 'angles-parallel-lines',
    subtopic: 'introduction',
    metadata: {
      difficulty: 'foundational' as const,
      estimatedMinutes: 40,
      prerequisites: []
    },
    notesComponent: 's1/math/angles-parallel-lines/IntroductionToAngles',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 2: Angles at a Point
  {
    id: 's1-math-angles-parallel-lines-angles-at-point',
    displayName: 'Angles at a Point',
    grade: 's1',
    subject: 'math',
    topic: 'angles-parallel-lines',
    subtopic: 'angles-at-point',
    metadata: {
      difficulty: 'foundational-to-intermediate' as const,
      estimatedMinutes: 50,
      prerequisites: ['s1-math-angles-parallel-lines-introduction']
    },
    notesComponent: 's1/math/angles-parallel-lines/AnglesAtPoint',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 3: Angles on a Straight Line
  {
    id: 's1-math-angles-parallel-lines-angles-on-line',
    displayName: 'Angles on a Straight Line',
    grade: 's1',
    subject: 'math',
    topic: 'angles-parallel-lines',
    subtopic: 'angles-on-line',
    metadata: {
      difficulty: 'foundational-to-intermediate' as const,
      estimatedMinutes: 50,
      prerequisites: ['s1-math-angles-parallel-lines-angles-at-point']
    },
    notesComponent: 's1/math/angles-parallel-lines/AnglesOnStraightLine',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 4: Vertically Opposite Angles
  {
    id: 's1-math-angles-parallel-lines-vertically-opposite',
    displayName: 'Vertically Opposite Angles',
    grade: 's1',
    subject: 'math',
    topic: 'angles-parallel-lines',
    subtopic: 'vertically-opposite',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 55,
      prerequisites: ['s1-math-angles-parallel-lines-angles-on-line']
    },
    notesComponent: 's1/math/angles-parallel-lines/VerticallyOppositeAngles',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 5: Parallel Lines - Basic
  {
    id: 's1-math-angles-parallel-lines-basic-parallel',
    displayName: 'Parallel Lines - Basic',
    grade: 's1',
    subject: 'math',
    topic: 'angles-parallel-lines',
    subtopic: 'basic-parallel',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 60,
      prerequisites: ['s1-math-angles-parallel-lines-vertically-opposite']
    },
    notesComponent: 's1/math/angles-parallel-lines/ParallelLinesBasic',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 6: Parallel Lines - Advanced
  {
    id: 's1-math-angles-parallel-lines-advanced-parallel',
    displayName: 'Parallel Lines - Advanced',
    grade: 's1',
    subject: 'math',
    topic: 'angles-parallel-lines',
    subtopic: 'advanced-parallel',
    metadata: {
      difficulty: 'intermediate-to-advanced' as const,
      estimatedMinutes: 65,
      prerequisites: ['s1-math-angles-parallel-lines-basic-parallel']
    },
    notesComponent: 's1/math/angles-parallel-lines/ParallelLinesAdvanced',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];

/**
 * S1 Ratio, Rate, and Speed configs (4 configs)
 */
const S1_RATIO_RATE_SPEED_CONFIGS = [
  // ============================================
  // S1 RATIO, RATE, AND SPEED (4 NEW CONFIGS)
  // ============================================

  // Subtopic 1: Understanding Ratios
  {
    id: 's1-math-ratio-rate-speed-understanding-ratios',
    displayName: 'Understanding Ratios',
    grade: 's1',
    subject: 'math',
    topic: 'ratio-rate-speed',
    subtopic: 'understanding-ratios',
    metadata: {
      difficulty: 'foundational' as const,
      estimatedMinutes: 50,
      prerequisites: []
    },
    notesComponent: 's1/math/ratio-rate-speed/UnderstandingRatios',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 2: Ratios and Proportions
  {
    id: 's1-math-ratio-rate-speed-proportions',
    displayName: 'Ratios and Proportions',
    grade: 's1',
    subject: 'math',
    topic: 'ratio-rate-speed',
    subtopic: 'proportions',
    metadata: {
      difficulty: 'foundational-to-intermediate' as const,
      estimatedMinutes: 55,
      prerequisites: ['s1-math-ratio-rate-speed-understanding-ratios']
    },
    notesComponent: 's1/math/ratio-rate-speed/RatiosAndProportions',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 3: Rate and Speed
  {
    id: 's1-math-ratio-rate-speed-rate-speed',
    displayName: 'Rate and Speed',
    grade: 's1',
    subject: 'math',
    topic: 'ratio-rate-speed',
    subtopic: 'rate-speed',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 60,
      prerequisites: ['s1-math-ratio-rate-speed-proportions']
    },
    notesComponent: 's1/math/ratio-rate-speed/RateAndSpeed',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 4: Advanced Applications (Unit Conversion)
  {
    id: 's1-math-ratio-rate-speed-unit-conversion',
    displayName: 'Advanced Applications',
    grade: 's1',
    subject: 'math',
    topic: 'ratio-rate-speed',
    subtopic: 'unit-conversion',
    metadata: {
      difficulty: 'intermediate-to-advanced' as const,
      estimatedMinutes: 65,
      prerequisites: ['s1-math-ratio-rate-speed-rate-speed']
    },
    notesComponent: 's1/math/ratio-rate-speed/AdvancedApplications',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];

/**
 * S1 Percentage configs (7 configs)
 */
const S1_PERCENTAGE_CONFIGS = [
  // ============================================
  // S1 PERCENTAGE (7 NEW CONFIGS)
  // ============================================

  // Subtopic 1: Introduction to Percentage
  {
    id: 's1-math-percentage-introduction',
    displayName: 'Introduction to Percentage',
    grade: 's1',
    subject: 'math',
    topic: 'percentage',
    subtopic: 'introduction',
    metadata: {
      difficulty: 'foundational' as const,
      estimatedMinutes: 45,
      prerequisites: []
    },
    notesComponent: 's1/math/percentage/Introduction',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 2: Percentage, Fraction, and Decimal Conversions
  {
    id: 's1-math-percentage-conversions',
    displayName: 'Percentage, Fraction, and Decimal Conversions',
    grade: 's1',
    subject: 'math',
    topic: 'percentage',
    subtopic: 'conversions',
    metadata: {
      difficulty: 'foundational' as const,
      estimatedMinutes: 50,
      prerequisites: ['s1-math-percentage-introduction']
    },
    notesComponent: 's1/math/percentage/Conversions',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 3: Expressing One Quantity as a Percentage of Another
  {
    id: 's1-math-percentage-expressing',
    displayName: 'Expressing One Quantity as a Percentage of Another',
    grade: 's1',
    subject: 'math',
    topic: 'percentage',
    subtopic: 'expressing',
    metadata: {
      difficulty: 'foundational-to-intermediate' as const,
      estimatedMinutes: 55,
      prerequisites: ['s1-math-percentage-conversions']
    },
    notesComponent: 's1/math/percentage/Expressing',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 4: Comparing Two Quantities by Percentage
  {
    id: 's1-math-percentage-comparing',
    displayName: 'Comparing Two Quantities by Percentage',
    grade: 's1',
    subject: 'math',
    topic: 'percentage',
    subtopic: 'comparing',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 50,
      prerequisites: ['s1-math-percentage-expressing']
    },
    notesComponent: 's1/math/percentage/Comparing',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 5: Percentage Increase and Decrease
  {
    id: 's1-math-percentage-change',
    displayName: 'Percentage Increase and Decrease',
    grade: 's1',
    subject: 'math',
    topic: 'percentage',
    subtopic: 'change',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 60,
      prerequisites: ['s1-math-percentage-expressing']
    },
    notesComponent: 's1/math/percentage/PercentageChange',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 6: Reverse Percentage Problems
  {
    id: 's1-math-percentage-reverse',
    displayName: 'Reverse Percentage Problems',
    grade: 's1',
    subject: 'math',
    topic: 'percentage',
    subtopic: 'reverse',
    metadata: {
      difficulty: 'intermediate-to-advanced' as const,
      estimatedMinutes: 55,
      prerequisites: ['s1-math-percentage-change']
    },
    notesComponent: 's1/math/percentage/ReversePercentage',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 7: Real-World Percentage Applications
  {
    id: 's1-math-percentage-applications',
    displayName: 'Real-World Percentage Applications',
    grade: 's1',
    subject: 'math',
    topic: 'percentage',
    subtopic: 'applications',
    metadata: {
      difficulty: 'intermediate-to-advanced' as const,
      estimatedMinutes: 70,
      prerequisites: ['s1-math-percentage-change', 's1-math-percentage-reverse']
    },
    notesComponent: 's1/math/percentage/Applications',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];

const S1_LINEAR_FUNCTIONS_CONFIGS = [
  // ============================================
  // S1 LINEAR FUNCTIONS & GRAPHS (4 NEW CONFIGS)
  // ============================================

  // Subtopic 1: Cartesian Coordinates
  {
    id: 's1-math-linear-functions-cartesian-coordinates',
    displayName: 'Cartesian Coordinates',
    grade: 's1',
    subject: 'math',
    topic: 'linear-functions-graphs',
    subtopic: 'cartesian-coordinates',
    metadata: {
      difficulty: 'foundational' as const,
      estimatedMinutes: 50,
      prerequisites: []
    },
    notesComponent: 's1/math/linear-functions-graphs/CartesianCoordinates',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 2: Concept of a Function
  {
    id: 's1-math-linear-functions-function-concept',
    displayName: 'Concept of a Function',
    grade: 's1',
    subject: 'math',
    topic: 'linear-functions-graphs',
    subtopic: 'function-concept',
    metadata: {
      difficulty: 'foundational' as const,
      estimatedMinutes: 50,
      prerequisites: ['s1-math-linear-functions-cartesian-coordinates']
    },
    notesComponent: 's1/math/linear-functions-graphs/FunctionConcept',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 3: Linear Functions and Linear Graphs
  {
    id: 's1-math-linear-functions-linear-graphs',
    displayName: 'Linear Functions and Linear Graphs',
    grade: 's1',
    subject: 'math',
    topic: 'linear-functions-graphs',
    subtopic: 'linear-graphs',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 55,
      prerequisites: ['s1-math-linear-functions-function-concept']
    },
    notesComponent: 's1/math/linear-functions-graphs/LinearGraphs',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 4: Gradient of Linear Graphs
  {
    id: 's1-math-linear-functions-gradient',
    displayName: 'Gradient of Linear Graphs',
    grade: 's1',
    subject: 'math',
    topic: 'linear-functions-graphs',
    subtopic: 'gradient',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 60,
      prerequisites: ['s1-math-linear-functions-linear-graphs']
    },
    notesComponent: 's1/math/linear-functions-graphs/Gradient',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];

/**
 * S1 Perimeter and Area configs (3 configs)
 */
const S1_PERIMETER_AREA_CONFIGS = [
  // ============================================
  // S1 PERIMETER AND AREA (3 NEW CONFIGS)
  // ============================================

  // Subtopic 1: Parallelograms
  {
    id: 's1-math-perimeter-area-parallelograms',
    displayName: 'Parallelograms',
    grade: 's1',
    subject: 'math',
    topic: 'perimeter-area',
    subtopic: 'parallelograms',
    metadata: {
      difficulty: 'foundational-to-intermediate' as const,
      estimatedMinutes: 50,
      prerequisites: []
    },
    notesComponent: 's1/math/perimeter-area/Parallelograms',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 2: Trapeziums
  {
    id: 's1-math-perimeter-area-trapeziums',
    displayName: 'Trapeziums',
    grade: 's1',
    subject: 'math',
    topic: 'perimeter-area',
    subtopic: 'trapeziums',
    metadata: {
      difficulty: 'intermediate' as const,
      estimatedMinutes: 55,
      prerequisites: ['s1-math-perimeter-area-parallelograms']
    },
    notesComponent: 's1/math/perimeter-area/Trapeziums',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  },

  // Subtopic 3: Composite Figures
  {
    id: 's1-math-perimeter-area-composite',
    displayName: 'Composite Figures',
    grade: 's1',
    subject: 'math',
    topic: 'perimeter-area',
    subtopic: 'composite',
    metadata: {
      difficulty: 'intermediate-to-advanced' as const,
      estimatedMinutes: 65,
      prerequisites: ['s1-math-perimeter-area-trapeziums']
    },
    notesComponent: 's1/math/perimeter-area/CompositeFigures',
    teachingTemplate: '',
    scoring: STANDARD_SCORING,
    modules: STANDARD_MODULES
  }
];

// Migrate all S1 topics
const ALL_CONFIGS = [
  ...S1_APPROXIMATION_ESTIMATION_CONFIGS,
  ...S1_SIMPLE_LINEAR_EQUATIONS_CONFIGS,
  ...S1_BASIC_ALGEBRA_CONFIGS,
  ...S1_ANGLES_PARALLEL_LINES_CONFIGS,
  ...S1_RATIO_RATE_SPEED_CONFIGS,
  ...S1_PERCENTAGE_CONFIGS,
  ...S1_LINEAR_FUNCTIONS_CONFIGS,
  ...S1_PERIMETER_AREA_CONFIGS
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

  // Check for S1 Simple Linear Equations configs
  console.log('\n📋 S1 Simple Linear Equations configs:');
  const simpleLinearEqIds = ALL_CONFIGS
    .filter(c => c.id.startsWith('s1-math-simple-linear-equations'))
    .map(c => c.id);

  for (const id of simpleLinearEqIds) {
    const doc = await db.collection('subtopics').doc(id).get();
    if (doc.exists) {
      console.log(`  ✓ ${id}`);
    } else {
      console.log(`  ✗ MISSING: ${id}`);
    }
  }

  // Check for S1 Basic Algebra configs
  console.log('\n📋 S1 Basic Algebra configs:');
  const basicAlgebraIds = ALL_CONFIGS
    .filter(c => c.id.startsWith('s1-math-basic-algebra'))
    .map(c => c.id);

  for (const id of basicAlgebraIds) {
    const doc = await db.collection('subtopics').doc(id).get();
    if (doc.exists) {
      console.log(`  ✓ ${id}`);
    } else {
      console.log(`  ✗ MISSING: ${id}`);
    }
  }

  // Check for S1 Angles and Parallel Lines configs
  console.log('\n📋 S1 Angles and Parallel Lines configs:');
  const anglesParallelLinesIds = ALL_CONFIGS
    .filter(c => c.id.startsWith('s1-math-angles-parallel-lines'))
    .map(c => c.id);

  for (const id of anglesParallelLinesIds) {
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
    console.log('2. Test the S1 Math modules in the app:');
    console.log('   - Approximation & Estimation (3 subtopics)');
    console.log('   - Simple Linear Equations (4 subtopics)');
    console.log('   - Basic Algebra (7 subtopics)');
    console.log('   - Angles and Parallel Lines (6 subtopics)');
    console.log('3. Commit and push to deploy to production');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n💥 Migration failed:', error);
    process.exit(1);
  });
