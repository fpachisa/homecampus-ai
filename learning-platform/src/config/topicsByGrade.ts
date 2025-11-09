/**
 * Topics organized by grade level
 * Centralizes topic definitions for the learning platform
 */

export interface Topic {
  id: string;
  name: string;
  icon: string;
  description: string;
  subtopicCount: number;
  isActive: boolean;
  category?: string;
  grade: string;
  subject: string;
}

export type GradeLevel = 'Secondary 1' | 'Secondary 2' | 'Secondary 3' | 'Secondary 4';

export const GRADE_LEVELS: GradeLevel[] = [
  'Secondary 1',
  'Secondary 2',
  'Secondary 3',
  'Secondary 4',
];

export const topicsByGrade: Record<GradeLevel, Topic[]> = {
  'Secondary 1': [
    {
      id: 's1-factors-multiples',
      name: 'Factors & Multiples',
      icon: '🔢',
      description: 'Master prime numbers, HCF, LCM, and square/cube roots',
      subtopicCount: 5,
      isActive: true,
      category: 's1-math-factors-multiples',
      grade: 'Secondary 1',
      subject: 'Mathematics',
    },
    {
      id: 's1-real-numbers',
      name: 'Real Numbers',
      icon: '🔢',
      description: 'Master negative numbers, integer operations, rational & irrational numbers, and real number operations',
      subtopicCount: 5,
      isActive: true,
      category: 's1-math-real-numbers',
      grade: 'Secondary 1',
      subject: 'Mathematics',
    },
    {
      id: 's1-approximation-estimation',
      name: 'Approximation & Estimation',
      icon: '≈',
      description: 'Master rounding, significant figures, and estimation techniques for real-world problem solving',
      subtopicCount: 3,
      isActive: true,
      category: 's1-math-approximation-estimation',
      grade: 'Secondary 1',
      subject: 'Mathematics',
    },
    {
      id: 's1-basic-algebra',
      name: 'Basic Algebra',
      icon: '🔤',
      description: 'Master algebraic notation, simplification, expanding, factorization, equations, and word problems',
      subtopicCount: 7,
      isActive: true,
      category: 's1-math-basic-algebra',
      grade: 'Secondary 1',
      subject: 'Mathematics',
    },
    {
      id: 's1-simple-linear-equations',
      name: 'Simple Linear Equations',
      icon: '⚖️',
      description: 'Master solving equations from one-step to fractional equations and word problems',
      subtopicCount: 4,
      isActive: true,
      category: 's1-math-simple-linear-equations',
      grade: 'Secondary 1',
      subject: 'Mathematics',
    },
    {
      id: 's1-angles-parallel-lines',
      name: 'Angles and Parallel Lines',
      icon: '📐',
      description: 'Master angle properties, parallel lines, and geometric reasoning (F/Z/C patterns)',
      subtopicCount: 6,
      isActive: true,
      category: 's1-math-angles-parallel-lines',
      grade: 'Secondary 1',
      subject: 'Mathematics',
    },
    {
      id: 's1-ratio-rate-speed',
      name: 'Ratio, Rate, and Speed',
      icon: '⚡',
      description: 'Master ratios, proportions, rates, and speed calculations',
      subtopicCount: 4,
      isActive: true,
      category: 's1-math-ratio-rate-speed',
      grade: 'Secondary 1',
      subject: 'Mathematics',
    },
    {
      id: 's1-percentage',
      name: 'Percentage',
      icon: '%',
      description: 'Master percentages, conversions, change, reverse problems, and real-world applications (discount, GST, interest)',
      subtopicCount: 7,
      isActive: true,
      category: 's1-math-percentage',
      grade: 'Secondary 1',
      subject: 'Mathematics',
    },
    {
      id: 's1-linear-functions-graphs',
      name: 'Linear Functions & Graphs',
      icon: '📈',
      description: 'Master coordinates, functions, linear graphs y = mx + c, and gradient (slope) with rise/run method',
      subtopicCount: 4,
      isActive: true,
      category: 's1-math-linear-functions-graphs',
      grade: 'Secondary 1',
      subject: 'Mathematics',
    },
    {
      id: 's1-perimeter-area',
      name: 'Perimeter & Area',
      icon: '📐',
      description: 'Master perimeter and area of parallelograms, trapeziums, and composite shapes',
      subtopicCount: 3,
      isActive: true,
      category: 's1-math-perimeter-area',
      grade: 'Secondary 1',
      subject: 'Mathematics',
    },
    {
      id: 's1-data-handling',
      name: 'Data Handling',
      icon: '📊',
      description: 'Master data collection, frequency tables, grouped data, statistical diagrams (bar, pie, line), and critical analysis',
      subtopicCount: 6,
      isActive: true,
      category: 's1-math-data-handling',
      grade: 'Secondary 1',
      subject: 'Mathematics',
    },
  ],

  'Secondary 2': [
    {
      id: 's2-linear-graphs',
      name: 'Linear Graphs & Equations',
      icon: '📈',
      description: 'Master linear graphs, gradients, y-intercepts, equations, and simultaneous equations',
      subtopicCount: 7,
      isActive: true,
      category: 's2-math-linear-graphs',
      grade: 'Secondary 2',
      subject: 'Mathematics',
    },
    {
      id: 's2-linear-inequalities',
      name: 'Linear Inequalities',
      icon: '≤',
      description: 'Master inequalities, solving, graphing, systems, and optimization with linear programming',
      subtopicCount: 6,
      isActive: true,
      category: 's2-math-linear-inequalities',
      grade: 'Secondary 2',
      subject: 'Mathematics',
    },
    {
      id: 's2-expansion-factorisation',
      name: 'Expansion & Factorisation',
      icon: '🔧',
      description: 'Master algebraic expansion, distributive law, double brackets, and factorising quadratic expressions',
      subtopicCount: 10,
      isActive: true,
      category: 's2-math-expansion-factorisation',
      grade: 'Secondary 2',
      subject: 'Mathematics',
    },
    {
      id: 's2-quadratic-equations-graphs',
      name: 'Quadratic Equations & Graphs',
      icon: '📊',
      description: 'Master solving quadratic equations, graphing parabolas, roots, intercepts, and real-world applications',
      subtopicCount: 6,
      isActive: true,
      category: 's2-math-quadratic-equations-graphs',
      grade: 'Secondary 2',
      subject: 'Mathematics',
    },
    {
      id: 's2-algebraic-fractions-formulae',
      name: 'Algebraic Fractions & Formulae',
      icon: '🧮',
      description: 'Master algebraic fractions, operations, formula manipulation, and changing the subject',
      subtopicCount: 5,
      isActive: true,
      category: 's2-math-algebraic-fractions-formulae',
      grade: 'Secondary 2',
      subject: 'Mathematics',
    },
    {
      id: 's2-direct-inverse-proportion',
      name: 'Direct & Inverse Proportion',
      icon: '⚖️',
      description: 'Master direct proportion (y ∝ x, y ∝ x²), inverse proportion (y ∝ 1/x, y ∝ 1/x²), and real-world applications',
      subtopicCount: 6,
      isActive: true,
      category: 's2-math-direct-inverse-proportion',
      grade: 'Secondary 2',
      subject: 'Mathematics',
    },
    {
      id: 's2-pythagoras',
      name: 'Pythagoras\' Theorem',
      icon: '△',
      description: 'Master Pythagoras\' Theorem: finding sides, real-world applications, and the converse theorem',
      subtopicCount: 5,
      isActive: true,
      category: 's2-math-pythagoras',
      grade: 'Secondary 2',
      subject: 'Mathematics',
    },
    {
      id: 's2-trigonometric-ratios',
      name: 'Trigonometric Ratios',
      icon: '📐',
      description: 'Master sine, cosine, and tangent ratios (SOH-CAH-TOA) to find sides and angles in right-angled triangles',
      subtopicCount: 5,
      isActive: true,
      category: 's2-math-trigonometric-ratios',
      grade: 'Secondary 2',
      subject: 'Mathematics',
    },
    {
      id: 's2-probability-single-event',
      name: 'Probability of Single Events',
      icon: '🎲',
      description: 'Master probability experiments, sample spaces, theoretical & experimental probability, and real-world applications',
      subtopicCount: 4,
      isActive: true,
      category: 's2-math-probability-single-event',
      grade: 'Secondary 2',
      subject: 'Mathematics',
    },

  ],

  'Secondary 3': [
    {
      id: 's3-trigonometry',
      name: 'Trigonometry',
      icon: '📐',
      description: 'Master trigonometric ratios: sine, cosine, and tangent',
      subtopicCount: 7,
      isActive: true,
      category: 's3-math-trigonometry',
      grade: 'Secondary 3',
      subject: 'Mathematics',
    },
    {
      id: 's3-circle-geometry',
      name: 'Circle Geometry',
      icon: '⭕',
      description: 'Prove geometric theorems: angles, chords, tangents',
      subtopicCount: 7,
      isActive: true,
      category: 's3-math-circle-geometry',
      grade: 'Secondary 3',
      subject: 'Mathematics',
    },
    {
      id: 's3-quadratic-equations',
      name: 'Quadratic Equations',
      icon: '📈',
      description: 'Solving, graphing, and applying quadratic equations and functions',
      subtopicCount: 13,
      isActive: true,
      category: 's3-math-quadratic-equations',
      grade: 'Secondary 3',
      subject: 'Mathematics',
    },
    {
      id: 's3-exponential-logarithms',
      name: 'Exponential & Logarithms',
      icon: '📊',
      description: 'Master exponential functions, growth, decay, and logarithmic relationships',
      subtopicCount: 9,
      isActive: true,
      category: 's3-math-exponential-logarithms',
      grade: 'Secondary 3',
      subject: 'Mathematics',
    },
    {
      id: 's3-sets-venn-diagrams',
      name: 'Sets & Venn Diagrams',
      icon: '🔵',
      description: 'Master set theory, operations, and problem solving with Venn diagrams',
      subtopicCount: 9,
      isActive: true,
      category: 's3-math-sets-venn-diagrams',
      grade: 'Secondary 3',
      subject: 'Mathematics',
    },
    {
      id: 's3-exponents',
      name: 'Exponents',
      icon: '⚡',
      description: 'Master exponent laws, rational exponents, and scientific notation',
      subtopicCount: 3,
      isActive: true,
      category: 's3-math-exponents',
      grade: 'Secondary 3',
      subject: 'Mathematics',
    },
    {
      id: 's3-surds-radicals',
      name: 'Surds & Radicals',
      icon: '√',
      description: 'Simplify surds, rationalize denominators, and master surd operations',
      subtopicCount: 6,
      isActive: true,
      category: 's3-math-surds-radicals',
      grade: 'Secondary 3',
      subject: 'Mathematics',
    },
    {
      id: 's3-relations-functions',
      name: 'Relations & Functions',
      icon: '🔗',
      description: 'Master functions, domain, range, transformations, and absolute value',
      subtopicCount: 6,
      isActive: true,
      category: 's3-math-relations-functions',
      grade: 'Secondary 3',
      subject: 'Mathematics',
    },
    {
      id: 's3-statistics',
      name: 'Statistics',
      icon: '📊',
      description: 'Analyze data with mean, median, box plots, and normal distribution',
      subtopicCount: 7,
      isActive: true,
      category: 's3-math-statistics',
      grade: 'Secondary 3',
      subject: 'Mathematics',
    },
    {
      id: 's3-coordinate-geometry',
      name: 'Coordinate Geometry',
      icon: '📍',
      description: 'Master the Cartesian plane, distance, gradients, and line equations',
      subtopicCount: 6,
      isActive: true,
      category: 's3-math-coordinate-geometry',
      grade: 'Secondary 3',
      subject: 'Mathematics',
    },
  ],

  'Secondary 4': [
    {
      id: 's4-quadratic-functions',
      name: 'Quadratic Functions',
      icon: '📊',
      description: 'Master quadratic functions, parabolas, transformations, vertex form, and real-world applications',
      subtopicCount: 5,
      isActive: true,
      category: 's4-math-quad',
      grade: 'Secondary 4',
      subject: 'Mathematics',
    },
    {
      id: 's4-advanced-trigonometry',
      name: 'Advanced Trigonometry',
      icon: '∠',
      description: 'Master the unit circle, trigonometric graphs, transformations, equations, identities, and radians',
      subtopicCount: 5,
      isActive: true,
      category: 's4-math-advanced-trig',
      grade: 'Secondary 4',
      subject: 'Mathematics',
    },
    {
      id: 's4-vectors',
      name: 'Vectors',
      icon: '→',
      description: 'Master vector fundamentals, geometric operations, component form, magnitude, parallelism, and dot product',
      subtopicCount: 5,
      isActive: true,
      category: 's4-math-vectors',
      grade: 'Secondary 4',
      subject: 'Mathematics',
    },
    {
      id: 's4-differential-calculus',
      name: 'Differential Calculus',
      icon: '∫',
      description: 'Master limits, derivatives, and optimization using differential calculus',
      subtopicCount: 7,
      isActive: true,
      category: 's4-math-differential-calculus',
      grade: 'Secondary 4',
      subject: 'Mathematics',
    },
    {
      id: 's4-integration',
      name: 'Integration',
      icon: '∫',
      description: 'Master integration, antiderivatives, definite integrals, and Riemann sums',
      subtopicCount: 5,
      isActive: true,
      category: 's4-math-integration',
      grade: 'Secondary 4',
      subject: 'Mathematics',
    },
    {
      id: 's4-probability',
      name: 'Probability',
      icon: '🎲',
      description: 'Master probability concepts, combined events, trees, conditional probability, and real-world applications',
      subtopicCount: 5,
      isActive: true,
      category: 's4-math-probability',
      grade: 'Secondary 4',
      subject: 'Mathematics',
    },
  ],
};

/**
 * Get all topics for a specific grade level
 */
export const getTopicsByGrade = (grade: GradeLevel): Topic[] => {
  return topicsByGrade[grade] || [];
};

/**
 * Get all active topics (currently available)
 */
export const getActiveTopics = (): Topic[] => {
  return Object.values(topicsByGrade)
    .flat()
    .filter(topic => topic.isActive);
};

/**
 * Get all topics across all grades
 */
export const getAllTopics = (): Topic[] => {
  return Object.values(topicsByGrade).flat();
};

/**
 * Check if a grade has any active topics
 */
export const hasActiveTopics = (grade: GradeLevel): boolean => {
  return topicsByGrade[grade]?.some(topic => topic.isActive) || false;
};
