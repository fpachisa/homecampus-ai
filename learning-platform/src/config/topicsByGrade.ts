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
      id: 's1-numbers-operations',
      name: 'Numbers & Operations',
      icon: '🔢',
      description: 'Master integers, fractions, decimals, and percentages',
      subtopicCount: 8,
      isActive: false, // Coming soon
      category: 's1-math-numbers',
      grade: 'Secondary 1',
      subject: 'Mathematics',
    },
    {
      id: 's1-algebra-basics',
      name: 'Algebra Basics',
      icon: '🔤',
      description: 'Introduction to algebraic expressions and simple equations',
      subtopicCount: 6,
      isActive: false,
      category: 's1-math-algebra-basics',
      grade: 'Secondary 1',
      subject: 'Mathematics',
    },
    {
      id: 's1-geometry-basics',
      name: 'Geometry Basics',
      icon: '📐',
      description: 'Angles, triangles, and basic geometric properties',
      subtopicCount: 7,
      isActive: false,
      category: 's1-math-geometry-basics',
      grade: 'Secondary 1',
      subject: 'Mathematics',
    },
    {
      id: 's1-data-analysis',
      name: 'Data Analysis',
      icon: '📊',
      description: 'Collect, organize, and represent data with charts',
      subtopicCount: 5,
      isActive: false,
      category: 's1-math-data-analysis',
      grade: 'Secondary 1',
      subject: 'Mathematics',
    },
  ],

  'Secondary 2': [
    {
      id: 's2-linear-equations',
      name: 'Linear Equations',
      icon: '📏',
      description: 'Solve and graph linear equations and inequalities',
      subtopicCount: 8,
      isActive: false,
      category: 's2-math-linear-equations',
      grade: 'Secondary 2',
      subject: 'Mathematics',
    },
    {
      id: 's2-pythagoras',
      name: 'Pythagoras Theorem',
      icon: '△',
      description: 'Apply Pythagoras theorem to solve geometric problems',
      subtopicCount: 5,
      isActive: false,
      category: 's2-math-pythagoras',
      grade: 'Secondary 2',
      subject: 'Mathematics',
    },
    {
      id: 's2-congruence-similarity',
      name: 'Congruence & Similarity',
      icon: '🔺',
      description: 'Understand congruent and similar figures',
      subtopicCount: 6,
      isActive: false,
      category: 's2-math-congruence',
      grade: 'Secondary 2',
      subject: 'Mathematics',
    },
    {
      id: 's2-probability',
      name: 'Probability',
      icon: '🎲',
      description: 'Calculate probabilities and analyze chance events',
      subtopicCount: 6,
      isActive: false,
      category: 's2-math-probability',
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
