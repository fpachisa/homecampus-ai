/**
 * Configuration Loader Service
 *
 * Loads subtopic configurations from Firestore with caching
 * for optimal performance.
 */

import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { firestore } from './firebase';
import type { SubtopicConfig } from '../types/curriculum';

export class ConfigLoader {
  private cache: Map<string, SubtopicConfig> = new Map();
  private cacheTimestamps: Map<string, number> = new Map();
  private readonly CACHE_TTL = 5 * 60 * 1000; // 5 minutes

  /**
   * Get subtopic configuration by ID
   */
  async getSubtopicConfig(subtopicId: string): Promise<SubtopicConfig> {
    // Check cache first
    if (this.isCacheValid(subtopicId)) {
      const cached = this.cache.get(subtopicId);
      if (cached) {
        console.log(`[ConfigLoader] Cache hit for ${subtopicId}`);
        return cached;
      }
    }

    // TEMPORARY: Mock data for S3 Trigonometry subtopics until Firestore permissions are fixed
    const mockConfigs: Record<string, SubtopicConfig> = {
      's3-math-trigonometry-basic-ratios': {
        id: 's3-math-trigonometry-basic-ratios',
        displayName: 'Trigonometric Ratios (sine, cosine, tangent)',
        grade: 's3',
        subject: 'math',
        topic: 'trigonometry',
        subtopic: 'basic-ratios',
        metadata: {
          difficulty: 'beginner',
          estimatedMinutes: 45,
          prerequisites: []
        },
        notesComponent: 's3/math/trigonometry/BasicRatios',
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
      's3-math-trigonometry-problem-solving': {
        id: 's3-math-trigonometry-problem-solving',
        displayName: 'Problem Solving Using Trigonometry',
        grade: 's3',
        subject: 'math',
        topic: 'trigonometry',
        subtopic: 'problem-solving',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 50,
          prerequisites: ['s3-math-trigonometry-basic-ratios']
        },
        notesComponent: 's3/math/trigonometry/ProblemSolving',
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
      's3-math-trigonometry-true-bearings': {
        id: 's3-math-trigonometry-true-bearings',
        displayName: 'True Bearings',
        grade: 's3',
        subject: 'math',
        topic: 'trigonometry',
        subtopic: 'true-bearings',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 40,
          prerequisites: ['s3-math-trigonometry-basic-ratios']
        },
        notesComponent: 's3/math/trigonometry/TrueBearings',
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
      's3-math-trigonometry-obtuse-angles': {
        id: 's3-math-trigonometry-obtuse-angles',
        displayName: 'Trigonometry with Obtuse Angles',
        grade: 's3',
        subject: 'math',
        topic: 'trigonometry',
        subtopic: 'obtuse-angles',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 40,
          prerequisites: ['s3-math-trigonometry-basic-ratios']
        },
        notesComponent: 's3/math/trigonometry/ObtuseAngles',
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
      's3-math-trigonometry-area-of-triangle': {
        id: 's3-math-trigonometry-area-of-triangle',
        displayName: 'Area of Triangle',
        grade: 's3',
        subject: 'math',
        topic: 'trigonometry',
        subtopic: 'area-of-triangle',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 40,
          prerequisites: ['s3-math-trigonometry-basic-ratios']
        },
        notesComponent: 's3/math/trigonometry/AreaOfTriangle',
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
      's3-math-trigonometry-sine-rule': {
        id: 's3-math-trigonometry-sine-rule',
        displayName: 'Sine Rule',
        grade: 's3',
        subject: 'math',
        topic: 'trigonometry',
        subtopic: 'sine-rule',
        metadata: {
          difficulty: 'advanced',
          estimatedMinutes: 50,
          prerequisites: ['s3-math-trigonometry-basic-ratios']
        },
        notesComponent: 's3/math/trigonometry/SineRule',
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
      's3-math-trigonometry-cosine-rule': {
        id: 's3-math-trigonometry-cosine-rule',
        displayName: 'Cosine Rule',
        grade: 's3',
        subject: 'math',
        topic: 'trigonometry',
        subtopic: 'cosine-rule',
        metadata: {
          difficulty: 'advanced',
          estimatedMinutes: 50,
          prerequisites: ['s3-math-trigonometry-basic-ratios', 's3-math-trigonometry-sine-rule']
        },
        notesComponent: 's3/math/trigonometry/CosineRule',
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
      's3-math-circle-geometry-definitions': {
        id: 's3-math-circle-geometry-definitions',
        displayName: 'Circle Geometry Definitions',
        grade: 's3',
        subject: 'math',
        topic: 'circle-geometry',
        subtopic: 'definitions',
        metadata: {
          difficulty: 'beginner',
          estimatedMinutes: 30,
          prerequisites: []
        },
        notesComponent: 's3/math/circle-geometry/Definitions',
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
      's3-math-circle-geometry-angle-semicircle': {
        id: 's3-math-circle-geometry-angle-semicircle',
        displayName: 'Angle in a Semi-circle',
        grade: 's3',
        subject: 'math',
        topic: 'circle-geometry',
        subtopic: 'angle-semicircle',
        metadata: {
          difficulty: 'beginner',
          estimatedMinutes: 35,
          prerequisites: ['s3-math-circle-geometry-definitions']
        },
        notesComponent: 's3/math/circle-geometry/AngleInSemicircle',
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
      's3-math-circle-geometry-chords': {
        id: 's3-math-circle-geometry-chords',
        displayName: 'Chords of a Circle',
        grade: 's3',
        subject: 'math',
        topic: 'circle-geometry',
        subtopic: 'chords',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 40,
          prerequisites: ['s3-math-circle-geometry-definitions']
        },
        notesComponent: 's3/math/circle-geometry/Chords',
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
      's3-math-circle-geometry-radius-tangent': {
        id: 's3-math-circle-geometry-radius-tangent',
        displayName: 'Radius-Tangent Theorem',
        grade: 's3',
        subject: 'math',
        topic: 'circle-geometry',
        subtopic: 'radius-tangent',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 40,
          prerequisites: ['s3-math-circle-geometry-definitions']
        },
        notesComponent: 's3/math/circle-geometry/RadiusTangent',
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
      's3-math-circle-geometry-tangents-external': {
        id: 's3-math-circle-geometry-tangents-external',
        displayName: 'Tangents from an External Point',
        grade: 's3',
        subject: 'math',
        topic: 'circle-geometry',
        subtopic: 'tangents-external',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 40,
          prerequisites: ['s3-math-circle-geometry-radius-tangent']
        },
        notesComponent: 's3/math/circle-geometry/TangentsExternal',
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
      's3-math-circle-geometry-angle-centre': {
        id: 's3-math-circle-geometry-angle-centre',
        displayName: 'Angle at the Centre',
        grade: 's3',
        subject: 'math',
        topic: 'circle-geometry',
        subtopic: 'angle-centre',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 45,
          prerequisites: ['s3-math-circle-geometry-angle-semicircle']
        },
        notesComponent: 's3/math/circle-geometry/AngleCentre',
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
      's3-math-circle-geometry-angle-same-arc': {
        id: 's3-math-circle-geometry-angle-same-arc',
        displayName: 'Angles Subtended by Same Arc',
        grade: 's3',
        subject: 'math',
        topic: 'circle-geometry',
        subtopic: 'angle-same-arc',
        metadata: {
          difficulty: 'advanced',
          estimatedMinutes: 50,
          prerequisites: ['s3-math-circle-geometry-angle-centre']
        },
        notesComponent: 's3/math/circle-geometry/AngleSameArc',
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
      // Quadratic Equations - Section 1: Solving
      's3-math-quadratic-solving-standard-form': {
        id: 's3-math-quadratic-solving-standard-form',
        displayName: 'Solving ax² = k',
        grade: 's3',
        subject: 'math',
        topic: 'quadratic-equations',
        subtopic: 'solving-standard-form',
        metadata: {
          difficulty: 'beginner',
          estimatedMinutes: 30,
          prerequisites: []
        },
        notesComponent: 's3/math/quadratic-equations/SolvingStandardForm',
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
      's3-math-quadratic-solving-factorization': {
        id: 's3-math-quadratic-solving-factorization',
        displayName: 'Solving by Factorization',
        grade: 's3',
        subject: 'math',
        topic: 'quadratic-equations',
        subtopic: 'solving-factorization',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 45,
          prerequisites: ['s3-math-quadratic-solving-standard-form']
        },
        notesComponent: 's3/math/quadratic-equations/SolvingFactorization',
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
      's3-math-quadratic-solving-fractional': {
        id: 's3-math-quadratic-solving-fractional',
        displayName: 'Fractional Equations',
        grade: 's3',
        subject: 'math',
        topic: 'quadratic-equations',
        subtopic: 'solving-fractional',
        metadata: {
          difficulty: 'advanced',
          estimatedMinutes: 40,
          prerequisites: ['s3-math-quadratic-solving-factorization']
        },
        notesComponent: 's3/math/quadratic-equations/SolvingFractional',
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
      's3-math-quadratic-solving-completing-square': {
        id: 's3-math-quadratic-solving-completing-square',
        displayName: 'Completing the Square',
        grade: 's3',
        subject: 'math',
        topic: 'quadratic-equations',
        subtopic: 'solving-completing-square',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 50,
          prerequisites: ['s3-math-quadratic-solving-factorization']
        },
        notesComponent: 's3/math/quadratic-equations/SolvingCompletingSquare',
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
      's3-math-quadratic-solving-formula': {
        id: 's3-math-quadratic-solving-formula',
        displayName: 'Quadratic Formula',
        grade: 's3',
        subject: 'math',
        topic: 'quadratic-equations',
        subtopic: 'solving-formula',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 45,
          prerequisites: ['s3-math-quadratic-solving-factorization']
        },
        notesComponent: 's3/math/quadratic-equations/SolvingFormula',
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
      's3-math-quadratic-solving-exponential': {
        id: 's3-math-quadratic-solving-exponential',
        displayName: 'Exponential Quadratics',
        grade: 's3',
        subject: 'math',
        topic: 'quadratic-equations',
        subtopic: 'solving-exponential',
        metadata: {
          difficulty: 'advanced',
          estimatedMinutes: 40,
          prerequisites: ['s3-math-quadratic-solving-formula']
        },
        notesComponent: 's3/math/quadratic-equations/SolvingExponential',
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
      // Quadratic Equations - Section 2: Practical Problems
      's3-math-quadratic-word-problems': {
        id: 's3-math-quadratic-word-problems',
        displayName: 'Word Problems & Optimization',
        grade: 's3',
        subject: 'math',
        topic: 'quadratic-equations',
        subtopic: 'word-problems',
        metadata: {
          difficulty: 'advanced',
          estimatedMinutes: 60,
          prerequisites: ['s3-math-quadratic-solving-factorization', 's3-math-quadratic-solving-formula']
        },
        notesComponent: 's3/math/quadratic-equations/WordProblems',
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
      // Quadratic Equations - Section 3: Graphing
      's3-math-quadratic-graph-features': {
        id: 's3-math-quadratic-graph-features',
        displayName: 'Graph Features',
        grade: 's3',
        subject: 'math',
        topic: 'quadratic-equations',
        subtopic: 'graph-features',
        metadata: {
          difficulty: 'beginner',
          estimatedMinutes: 40,
          prerequisites: []
        },
        notesComponent: 's3/math/quadratic-equations/GraphFeatures',
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
      's3-math-quadratic-graph-completed-square': {
        id: 's3-math-quadratic-graph-completed-square',
        displayName: 'Graphing: Vertex Form',
        grade: 's3',
        subject: 'math',
        topic: 'quadratic-equations',
        subtopic: 'graph-completed-square',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 45,
          prerequisites: ['s3-math-quadratic-graph-features', 's3-math-quadratic-solving-completing-square']
        },
        notesComponent: 's3/math/quadratic-equations/GraphCompletedSquare',
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
      's3-math-quadratic-graph-factorised': {
        id: 's3-math-quadratic-graph-factorised',
        displayName: 'Graphing: Factorised Form',
        grade: 's3',
        subject: 'math',
        topic: 'quadratic-equations',
        subtopic: 'graph-factorised',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 40,
          prerequisites: ['s3-math-quadratic-graph-features', 's3-math-quadratic-solving-factorization']
        },
        notesComponent: 's3/math/quadratic-equations/GraphFactorised',
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
      's3-math-quadratic-graph-polynomial': {
        id: 's3-math-quadratic-graph-polynomial',
        displayName: 'Graphing: Standard Form',
        grade: 's3',
        subject: 'math',
        topic: 'quadratic-equations',
        subtopic: 'graph-polynomial',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 45,
          prerequisites: ['s3-math-quadratic-graph-features']
        },
        notesComponent: 's3/math/quadratic-equations/GraphPolynomial',
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
      's3-math-quadratic-graph-finding-function': {
        id: 's3-math-quadratic-graph-finding-function',
        displayName: 'Finding Functions from Graphs',
        grade: 's3',
        subject: 'math',
        topic: 'quadratic-equations',
        subtopic: 'graph-finding-function',
        metadata: {
          difficulty: 'advanced',
          estimatedMinutes: 50,
          prerequisites: ['s3-math-quadratic-graph-completed-square', 's3-math-quadratic-graph-factorised', 's3-math-quadratic-graph-polynomial']
        },
        notesComponent: 's3/math/quadratic-equations/GraphFindingFunction',
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
      's3-math-quadratic-graph-problem-solving': {
        id: 's3-math-quadratic-graph-problem-solving',
        displayName: 'Graphing for Problem Solving',
        grade: 's3',
        subject: 'math',
        topic: 'quadratic-equations',
        subtopic: 'graph-problem-solving',
        metadata: {
          difficulty: 'advanced',
          estimatedMinutes: 55,
          prerequisites: ['s3-math-quadratic-graph-polynomial', 's3-math-quadratic-word-problems']
        },
        notesComponent: 's3/math/quadratic-equations/GraphProblemSolving',
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
      // Exponential & Logarithms
      's3-math-exponential-logarithms-exponential-functions': {
        id: 's3-math-exponential-logarithms-exponential-functions',
        displayName: 'Exponential Functions',
        grade: 's3',
        subject: 'math',
        topic: 'exponential-logarithms',
        subtopic: 'exponential-functions',
        metadata: {
          difficulty: 'beginner',
          estimatedMinutes: 40,
          prerequisites: []
        },
        notesComponent: 's3/math/exponential-logarithms/ExponentialFunctions',
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
      's3-math-exponential-logarithms-exponential-graphs': {
        id: 's3-math-exponential-logarithms-exponential-graphs',
        displayName: 'Graphs of Exponential Functions',
        grade: 's3',
        subject: 'math',
        topic: 'exponential-logarithms',
        subtopic: 'exponential-graphs',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 45,
          prerequisites: ['s3-math-exponential-logarithms-exponential-functions']
        },
        notesComponent: 's3/math/exponential-logarithms/ExponentialGraphs',
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
      's3-math-exponential-logarithms-exponential-equations': {
        id: 's3-math-exponential-logarithms-exponential-equations',
        displayName: 'Exponential Equations',
        grade: 's3',
        subject: 'math',
        topic: 'exponential-logarithms',
        subtopic: 'exponential-equations',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 45,
          prerequisites: ['s3-math-exponential-logarithms-exponential-functions']
        },
        notesComponent: 's3/math/exponential-logarithms/ExponentialEquations',
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
      's3-math-exponential-logarithms-exponential-growth': {
        id: 's3-math-exponential-logarithms-exponential-growth',
        displayName: 'Exponential Growth',
        grade: 's3',
        subject: 'math',
        topic: 'exponential-logarithms',
        subtopic: 'exponential-growth',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 50,
          prerequisites: ['s3-math-exponential-logarithms-exponential-functions']
        },
        notesComponent: 's3/math/exponential-logarithms/ExponentialGrowth',
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
      's3-math-exponential-logarithms-exponential-decay': {
        id: 's3-math-exponential-logarithms-exponential-decay',
        displayName: 'Exponential Decay',
        grade: 's3',
        subject: 'math',
        topic: 'exponential-logarithms',
        subtopic: 'exponential-decay',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 50,
          prerequisites: ['s3-math-exponential-logarithms-exponential-growth']
        },
        notesComponent: 's3/math/exponential-logarithms/ExponentialDecay',
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
      's3-math-exponential-logarithms-common-logarithms': {
        id: 's3-math-exponential-logarithms-common-logarithms',
        displayName: 'Common Logarithms',
        grade: 's3',
        subject: 'math',
        topic: 'exponential-logarithms',
        subtopic: 'common-logarithms',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 45,
          prerequisites: ['s3-math-exponential-logarithms-exponential-functions']
        },
        notesComponent: 's3/math/exponential-logarithms/CommonLogarithms',
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
      's3-math-exponential-logarithms-logarithm-laws': {
        id: 's3-math-exponential-logarithms-logarithm-laws',
        displayName: 'Laws of Logarithms',
        grade: 's3',
        subject: 'math',
        topic: 'exponential-logarithms',
        subtopic: 'logarithm-laws',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 50,
          prerequisites: ['s3-math-exponential-logarithms-common-logarithms']
        },
        notesComponent: 's3/math/exponential-logarithms/LogarithmLaws',
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
      's3-math-exponential-logarithms-using-logarithms': {
        id: 's3-math-exponential-logarithms-using-logarithms',
        displayName: 'Using Logarithms to Solve Equations',
        grade: 's3',
        subject: 'math',
        topic: 'exponential-logarithms',
        subtopic: 'using-logarithms',
        metadata: {
          difficulty: 'advanced',
          estimatedMinutes: 55,
          prerequisites: ['s3-math-exponential-logarithms-logarithm-laws']
        },
        notesComponent: 's3/math/exponential-logarithms/UsingLogarithms',
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
      's3-math-exponential-logarithms-logarithms-other-bases': {
        id: 's3-math-exponential-logarithms-logarithms-other-bases',
        displayName: 'Logarithms in Other Bases',
        grade: 's3',
        subject: 'math',
        topic: 'exponential-logarithms',
        subtopic: 'logarithms-other-bases',
        metadata: {
          difficulty: 'advanced',
          estimatedMinutes: 50,
          prerequisites: ['s3-math-exponential-logarithms-common-logarithms']
        },
        notesComponent: 's3/math/exponential-logarithms/LogarithmsOtherBases',
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
      // Sets & Venn Diagrams
      's3-math-sets-fundamentals': {
        id: 's3-math-sets-fundamentals',
        displayName: 'Sets',
        grade: 's3',
        subject: 'math',
        topic: 'sets-venn-diagrams',
        subtopic: 'fundamentals',
        metadata: {
          difficulty: 'beginner',
          estimatedMinutes: 40,
          prerequisites: []
        },
        notesComponent: 's3/math/sets-venn-diagrams/Sets',
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
      's3-math-sets-complement': {
        id: 's3-math-sets-complement',
        displayName: 'Complement of a Set',
        grade: 's3',
        subject: 'math',
        topic: 'sets-venn-diagrams',
        subtopic: 'complement',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 35,
          prerequisites: ['s3-math-sets-fundamentals']
        },
        notesComponent: 's3/math/sets-venn-diagrams/ComplementOfSet',
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
      's3-math-sets-intersection-union': {
        id: 's3-math-sets-intersection-union',
        displayName: 'Intersection and Union',
        grade: 's3',
        subject: 'math',
        topic: 'sets-venn-diagrams',
        subtopic: 'intersection-union',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 40,
          prerequisites: ['s3-math-sets-fundamentals']
        },
        notesComponent: 's3/math/sets-venn-diagrams/IntersectionUnion',
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
      's3-math-sets-special-number-sets': {
        id: 's3-math-sets-special-number-sets',
        displayName: 'Special Number Sets',
        grade: 's3',
        subject: 'math',
        topic: 'sets-venn-diagrams',
        subtopic: 'special-number-sets',
        metadata: {
          difficulty: 'beginner',
          estimatedMinutes: 35,
          prerequisites: ['s3-math-sets-fundamentals']
        },
        notesComponent: 's3/math/sets-venn-diagrams/SpecialNumberSets',
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
      's3-math-sets-interval-notation': {
        id: 's3-math-sets-interval-notation',
        displayName: 'Interval Notation',
        grade: 's3',
        subject: 'math',
        topic: 'sets-venn-diagrams',
        subtopic: 'interval-notation',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 40,
          prerequisites: ['s3-math-sets-special-number-sets']
        },
        notesComponent: 's3/math/sets-venn-diagrams/IntervalNotation',
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
      's3-math-sets-venn-diagrams': {
        id: 's3-math-sets-venn-diagrams',
        displayName: 'Venn Diagrams',
        grade: 's3',
        subject: 'math',
        topic: 'sets-venn-diagrams',
        subtopic: 'venn-diagrams',
        metadata: {
          difficulty: 'beginner',
          estimatedMinutes: 40,
          prerequisites: ['s3-math-sets-fundamentals']
        },
        notesComponent: 's3/math/sets-venn-diagrams/VennDiagrams',
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
      's3-math-sets-venn-regions': {
        id: 's3-math-sets-venn-regions',
        displayName: 'Venn Diagram Regions',
        grade: 's3',
        subject: 'math',
        topic: 'sets-venn-diagrams',
        subtopic: 'venn-regions',
        metadata: {
          difficulty: 'advanced',
          estimatedMinutes: 50,
          prerequisites: ['s3-math-sets-venn-diagrams', 'intersection-union']
        },
        notesComponent: 's3/math/sets-venn-diagrams/VennDiagramRegions',
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
      's3-math-sets-numbers-in-regions': {
        id: 's3-math-sets-numbers-in-regions',
        displayName: 'Numbers in Regions',
        grade: 's3',
        subject: 'math',
        topic: 'sets-venn-diagrams',
        subtopic: 'numbers-in-regions',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 45,
          prerequisites: ['s3-math-sets-venn-diagrams', 'intersection-union']
        },
        notesComponent: 's3/math/sets-venn-diagrams/NumbersInRegions',
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
      's3-math-sets-problem-solving': {
        id: 's3-math-sets-problem-solving',
        displayName: 'Problem Solving with Venn Diagrams',
        grade: 's3',
        subject: 'math',
        topic: 'sets-venn-diagrams',
        subtopic: 'problem-solving',
        metadata: {
          difficulty: 'advanced',
          estimatedMinutes: 55,
          prerequisites: ['s3-math-sets-numbers-in-regions']
        },
        notesComponent: 's3/math/sets-venn-diagrams/ProblemSolvingVenn',
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
      // Exponents
      's3-math-exponents-laws': {
        id: 's3-math-exponents-laws',
        displayName: 'Exponent Laws',
        grade: 's3',
        subject: 'math',
        topic: 'exponents',
        subtopic: 'laws',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 50,
          prerequisites: []
        },
        notesComponent: 's3/math/exponents/ExponentLaws',
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
      's3-math-exponents-rational': {
        id: 's3-math-exponents-rational',
        displayName: 'Rational Exponents',
        grade: 's3',
        subject: 'math',
        topic: 'exponents',
        subtopic: 'rational',
        metadata: {
          difficulty: 'intermediate-to-advanced',
          estimatedMinutes: 45,
          prerequisites: ['s3-math-exponents-laws']
        },
        notesComponent: 's3/math/exponents/RationalExponents',
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
      's3-math-exponents-standard-form': {
        id: 's3-math-exponents-standard-form',
        displayName: 'Standard Form (Scientific Notation)',
        grade: 's3',
        subject: 'math',
        topic: 'exponents',
        subtopic: 'standard-form',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 45,
          prerequisites: ['s3-math-exponents-laws']
        },
        notesComponent: 's3/math/exponents/StandardForm',
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
      's3-math-surds-fundamentals': {
        id: 's3-math-surds-fundamentals',
        displayName: 'Understanding Surds',
        grade: 's3',
        subject: 'math',
        topic: 'surds-radicals',
        subtopic: 'fundamentals',
        metadata: {
          difficulty: 'foundational',
          estimatedMinutes: 40,
          prerequisites: []
        },
        notesComponent: 's3/math/surds-radicals/SurdsFundamentals',
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
      's3-math-surds-simplifying': {
        id: 's3-math-surds-simplifying',
        displayName: 'Simplifying Surds',
        grade: 's3',
        subject: 'math',
        topic: 'surds-radicals',
        subtopic: 'simplifying',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 45,
          prerequisites: ['s3-math-surds-fundamentals']
        },
        notesComponent: 's3/math/surds-radicals/SimplifyingSurds',
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
      's3-math-surds-addition-subtraction': {
        id: 's3-math-surds-addition-subtraction',
        displayName: 'Adding & Subtracting Surds',
        grade: 's3',
        subject: 'math',
        topic: 'surds-radicals',
        subtopic: 'addition-subtraction',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 40,
          prerequisites: ['s3-math-surds-simplifying']
        },
        notesComponent: 's3/math/surds-radicals/AddingSubtractingSurds',
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
      's3-math-surds-multiplication-division': {
        id: 's3-math-surds-multiplication-division',
        displayName: 'Multiplying & Dividing Surds',
        grade: 's3',
        subject: 'math',
        topic: 'surds-radicals',
        subtopic: 'multiplication-division',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 50,
          prerequisites: ['s3-math-surds-simplifying']
        },
        notesComponent: 's3/math/surds-radicals/MultiplyingDividingSurds',
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
      's3-math-surds-rationalizing': {
        id: 's3-math-surds-rationalizing',
        displayName: 'Rationalizing Denominators',
        grade: 's3',
        subject: 'math',
        topic: 'surds-radicals',
        subtopic: 'rationalizing',
        metadata: {
          difficulty: 'intermediate-to-advanced',
          estimatedMinutes: 50,
          prerequisites: ['s3-math-surds-multiplication-division']
        },
        notesComponent: 's3/math/surds-radicals/RationalizingDenominators',
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
      's3-math-surds-mixed-operations': {
        id: 's3-math-surds-mixed-operations',
        displayName: 'Mixed Operations',
        grade: 's3',
        subject: 'math',
        topic: 'surds-radicals',
        subtopic: 'mixed-operations',
        metadata: {
          difficulty: 'advanced',
          estimatedMinutes: 55,
          prerequisites: ['s3-math-surds-rationalizing']
        },
        notesComponent: 's3/math/surds-radicals/MixedOperations',
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

      // S3 Statistics subtopics
      's3-math-statistics-data-types': {
        id: 's3-math-statistics-data-types',
        displayName: 'Data Types and Organization',
        grade: 's3',
        subject: 'math',
        topic: 'statistics',
        subtopic: 'data-types',
        metadata: {
          difficulty: 'foundational',
          estimatedMinutes: 45,
          prerequisites: []
        },
        notesComponent: 's3/math/statistics/DataTypes',
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

      's3-math-statistics-distributions': {
        id: 's3-math-statistics-distributions',
        displayName: 'Describing Data Distributions',
        grade: 's3',
        subject: 'math',
        topic: 'statistics',
        subtopic: 'distributions',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 40,
          prerequisites: ['s3-math-statistics-data-types']
        },
        notesComponent: null,
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

      's3-math-statistics-centre': {
        id: 's3-math-statistics-centre',
        displayName: 'Measures of Centre',
        grade: 's3',
        subject: 'math',
        topic: 'statistics',
        subtopic: 'centre',
        metadata: {
          difficulty: 'foundational-intermediate',
          estimatedMinutes: 50,
          prerequisites: ['s3-math-statistics-data-types']
        },
        notesComponent: 's3/math/statistics/MeasuresOfCentre',
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

      's3-math-statistics-boxplots': {
        id: 's3-math-statistics-boxplots',
        displayName: 'Box Plots and Quartiles',
        grade: 's3',
        subject: 'math',
        topic: 'statistics',
        subtopic: 'boxplots',
        metadata: {
          difficulty: 'intermediate-advanced',
          estimatedMinutes: 55,
          prerequisites: ['s3-math-statistics-centre']
        },
        notesComponent: 's3/math/statistics/BoxPlots',
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

      's3-math-statistics-cumulative': {
        id: 's3-math-statistics-cumulative',
        displayName: 'Cumulative Frequency Graphs',
        grade: 's3',
        subject: 'math',
        topic: 'statistics',
        subtopic: 'cumulative',
        metadata: {
          difficulty: 'intermediate-advanced',
          estimatedMinutes: 50,
          prerequisites: ['s3-math-statistics-centre']
        },
        notesComponent: 's3/math/statistics/CumulativeFrequency',
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

      's3-math-statistics-deviation': {
        id: 's3-math-statistics-deviation',
        displayName: 'Standard Deviation',
        grade: 's3',
        subject: 'math',
        topic: 'statistics',
        subtopic: 'deviation',
        metadata: {
          difficulty: 'intermediate-advanced',
          estimatedMinutes: 55,
          prerequisites: ['s3-math-statistics-centre']
        },
        notesComponent: 's3/math/statistics/StandardDeviation',
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

      's3-math-statistics-normal': {
        id: 's3-math-statistics-normal',
        displayName: 'The Normal Distribution',
        grade: 's3',
        subject: 'math',
        topic: 'statistics',
        subtopic: 'normal',
        metadata: {
          difficulty: 'advanced',
          estimatedMinutes: 60,
          prerequisites: ['s3-math-statistics-deviation']
        },
        notesComponent: 's3/math/statistics/NormalDistribution',
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
      // S3 Relations & Functions subtopics
      's3-math-relations-functions-fundamentals': {
        id: 's3-math-relations-functions-fundamentals',
        displayName: 'Relations and Functions Fundamentals',
        grade: 's3',
        subject: 'math',
        topic: 'relations-functions',
        subtopic: 'fundamentals',
        metadata: {
          difficulty: 'foundational',
          estimatedMinutes: 45,
          prerequisites: []
        },
        notesComponent: 's3/math/relations-functions/RelationsFunctionsFundamentals',
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
      's3-math-function-notation': {
        id: 's3-math-function-notation',
        displayName: 'Function Notation',
        grade: 's3',
        subject: 'math',
        topic: 'relations-functions',
        subtopic: 'function-notation',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 40,
          prerequisites: ['s3-math-relations-functions-fundamentals']
        },
        notesComponent: 's3/math/relations-functions/FunctionNotation',
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
      's3-math-domain-range': {
        id: 's3-math-domain-range',
        displayName: 'Domain and Range',
        grade: 's3',
        subject: 'math',
        topic: 'relations-functions',
        subtopic: 'domain-range',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 45,
          prerequisites: ['s3-math-function-notation']
        },
        notesComponent: 's3/math/relations-functions/DomainAndRange',
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
      's3-math-sign-diagrams': {
        id: 's3-math-sign-diagrams',
        displayName: 'Sign Diagrams',
        grade: 's3',
        subject: 'math',
        topic: 'relations-functions',
        subtopic: 'sign-diagrams',
        metadata: {
          difficulty: 'intermediate-advanced',
          estimatedMinutes: 50,
          prerequisites: ['s3-math-domain-range']
        },
        notesComponent: 's3/math/relations-functions/SignDiagrams',
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
      's3-math-transformations': {
        id: 's3-math-transformations',
        displayName: 'Transformations of Graphs',
        grade: 's3',
        subject: 'math',
        topic: 'relations-functions',
        subtopic: 'transformations',
        metadata: {
          difficulty: 'intermediate-advanced',
          estimatedMinutes: 55,
          prerequisites: ['s3-math-function-notation']
        },
        notesComponent: 's3/math/relations-functions/TransformationsOfGraphs',
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
      's3-math-absolute-value': {
        id: 's3-math-absolute-value',
        displayName: 'Absolute Value Function',
        grade: 's3',
        subject: 'math',
        topic: 'relations-functions',
        subtopic: 'absolute-value',
        metadata: {
          difficulty: 'intermediate',
          estimatedMinutes: 45,
          prerequisites: ['s3-math-function-notation', 's3-math-transformations']
        },
        notesComponent: 's3/math/relations-functions/AbsoluteValueFunction',
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
    };

    if (mockConfigs[subtopicId]) {
      const mockConfig = mockConfigs[subtopicId];

      // Cache the mock config
      this.cache.set(subtopicId, mockConfig);
      this.cacheTimestamps.set(subtopicId, Date.now());

      return mockConfig;
    }

    console.log(`[ConfigLoader] Loading ${subtopicId} from Firestore`);

    // Load from Firestore
    const docRef = doc(firestore, 'subtopics', subtopicId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error(`Subtopic configuration not found: ${subtopicId}`);
    }

    const config = this.deserializeConfig(docSnap.data());

    // Update cache
    this.cache.set(subtopicId, config);
    this.cacheTimestamps.set(subtopicId, Date.now());

    return config;
  }

  /**
   * Get all subtopics for a given topic
   */
  async getSubtopicsByTopic(topicId: string): Promise<SubtopicConfig[]> {
    console.log(`[ConfigLoader] Loading subtopics for topic: ${topicId}`);

    const [grade, subject, topic] = topicId.split('-');

    const q = query(
      collection(firestore, 'subtopics'),
      where('grade', '==', grade),
      where('subject', '==', subject),
      where('topic', '==', topic)
    );

    const querySnapshot = await getDocs(q);
    const configs: SubtopicConfig[] = [];

    querySnapshot.forEach((doc) => {
      const config = this.deserializeConfig(doc.data());
      configs.push(config);

      // Update cache
      this.cache.set(config.id, config);
      this.cacheTimestamps.set(config.id, Date.now());
    });

    return configs;
  }

  /**
   * Get all subtopics for a given grade and subject
   */
  async getSubtopicsByGradeAndSubject(
    grade: string,
    subject: string
  ): Promise<SubtopicConfig[]> {
    console.log(`[ConfigLoader] Loading subtopics for ${grade}-${subject}`);

    const q = query(
      collection(firestore, 'subtopics'),
      where('grade', '==', grade),
      where('subject', '==', subject)
    );

    const querySnapshot = await getDocs(q);
    const configs: SubtopicConfig[] = [];

    querySnapshot.forEach((doc) => {
      const config = this.deserializeConfig(doc.data());
      configs.push(config);

      // Update cache
      this.cache.set(config.id, config);
      this.cacheTimestamps.set(config.id, Date.now());
    });

    return configs;
  }

  /**
   * Invalidate cache for a specific subtopic
   */
  invalidateCache(subtopicId: string): void {
    this.cache.delete(subtopicId);
    this.cacheTimestamps.delete(subtopicId);
    console.log(`[ConfigLoader] Cache invalidated for ${subtopicId}`);
  }

  /**
   * Clear all cache
   */
  clearCache(): void {
    this.cache.clear();
    this.cacheTimestamps.clear();
    console.log(`[ConfigLoader] Cache cleared`);
  }

  /**
   * Check if cached data is still valid
   */
  private isCacheValid(subtopicId: string): boolean {
    if (!this.cache.has(subtopicId)) {
      return false;
    }

    const timestamp = this.cacheTimestamps.get(subtopicId);
    if (!timestamp) {
      return false;
    }

    return Date.now() - timestamp < this.CACHE_TTL;
  }

  /**
   * Deserialize Firestore data to SubtopicConfig
   * Handles Timestamp conversion
   */
  private deserializeConfig(data: any): SubtopicConfig {
    return {
      ...data,
      createdAt: data.createdAt?.toDate?.() || data.createdAt,
      updatedAt: data.updatedAt?.toDate?.() || data.updatedAt,
      notesLastUpdated: data.notesLastUpdated?.toDate?.() || data.notesLastUpdated,
      templateGeneratedAt: data.templateGeneratedAt?.toDate?.() || data.templateGeneratedAt,
    } as SubtopicConfig;
  }

  /**
   * Preload configurations for performance
   */
  async preloadConfigs(subtopicIds: string[]): Promise<void> {
    console.log(`[ConfigLoader] Preloading ${subtopicIds.length} configurations`);

    const promises = subtopicIds.map(id =>
      this.getSubtopicConfig(id).catch(err => {
        console.error(`[ConfigLoader] Failed to preload ${id}:`, err);
        return null;
      })
    );

    await Promise.all(promises);
    console.log(`[ConfigLoader] Preloading complete`);
  }
}

// Export singleton instance
export const configLoader = new ConfigLoader();
