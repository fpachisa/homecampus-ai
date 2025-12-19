/**
 * Composite Circle Problems - Learn Module
 *
 * Pregenerated problems for the P6 Circles Learn module.
 * These problems are presented interactively by the AI tutor.
 *
 * Separate from compositeProblemsData.ts which is for Notes (worked examples).
 *
 * Total: 8 problems (1 per composite figure type with varied dimensions)
 */

export interface LearnSolutionStep {
  description: string;
  calculation: string;
  result: string;
}

export interface CompositeLearnProblem {
  id: string;
  title: string;
  figureType:
    | 'quarter-in-square'
    | 'overlapping-quarters'
    | 'two-quarters-semicircle'
    | 'two-semicircles-quarter'
    | 'stadium'
    | 'four-point-star'
    | 'two-semicircles-bump'
    | 'two-circles-tangent';
  category: 'perimeter' | 'area' | 'both';
  difficulty: 1 | 2 | 3;
  piValue: '3.14' | '22/7';
  section: 'composite-addition' | 'composite-subtraction' | 'composite-complex';

  problem: {
    text: string;
    figureDescription: string;
  };

  figureSvg: string;

  solution: {
    decomposition: string;
    steps: LearnSolutionStep[];
    answer: {
      perimeter?: { value: string; unit: string };
      area?: { value: string; unit: string };
    };
    answerSentence: string;
  };

  hints: string[];
}

// SVG base path for Learn problems
const SVG_BASE = '/curriculum-content/P6/Maths/circle-composite-svgs/practice';

/**
 * Learn Module Problems
 * 8 problems - one variation per figure type
 */
export const COMPOSITE_LEARN_PROBLEMS: CompositeLearnProblem[] = [

  // ==========================================
  // PROBLEM 1: Quarter Circle in Square (14 cm)
  // ==========================================
  {
    id: 'learn-quarter-square-14',
    title: 'Quarter Circle in a Square',
    figureType: 'quarter-in-square',
    category: 'both',
    difficulty: 2,
    piValue: '22/7',
    section: 'composite-subtraction',

    problem: {
      text: 'The figure shows a quarter circle in a square with side 14 cm. Find (a) the perimeter and (b) the area of the shaded part. (Take π = 22/7)',
      figureDescription: 'A square with side 14 cm. A quarter circle is cut from one corner with radius equal to the side of the square. The shaded region is outside the quarter circle but inside the square.'
    },

    figureSvg: `${SVG_BASE}/quarter-in-square-14cm.svg`,

    solution: {
      decomposition: 'The shaded part is the square minus the quarter circle. For perimeter, trace around the outside: arc + two sides.',
      steps: [
        { description: 'Find the length of the arc (quarter of circumference)', calculation: '1/4 × 2 × 22/7 × 14', result: '22 cm' },
        { description: 'Find the perimeter of shaded part', calculation: '22 + 14 + 14', result: '50 cm' },
        { description: 'Find area of square', calculation: '14 × 14', result: '196 cm²' },
        { description: 'Find area of quarter circle', calculation: '1/4 × 22/7 × 14 × 14', result: '154 cm²' },
        { description: 'Find area of shaded part', calculation: '196 - 154', result: '42 cm²' }
      ],
      answer: {
        perimeter: { value: '50', unit: 'cm' },
        area: { value: '42', unit: 'cm²' }
      },
      answerSentence: 'The perimeter of the shaded part is 50 cm and the area is 42 cm².'
    },

    hints: [
      'What shapes make up this figure? Can you identify a square and a quarter circle?',
      'The shaded region is what remains when you remove the quarter circle from the square.',
      'For perimeter, trace around the outside edge. What parts do you see? (Think: arc + straight lines)',
      'The arc is 1/4 of the full circumference. What is the circumference formula?',
      'For area: Shaded area = Square area - Quarter circle area'
    ]
  },

  // ==========================================
  // PROBLEM 2: Overlapping Quarter Circles (14 cm)
  // ==========================================
  {
    id: 'learn-overlapping-quarters-14',
    title: 'Two Overlapping Quarter Circles',
    figureType: 'overlapping-quarters',
    category: 'both',
    difficulty: 2,
    piValue: '22/7',
    section: 'composite-complex',

    problem: {
      text: 'The figure is made up of two overlapping quarter circles with radius 14 cm. Find (a) the perimeter and (b) the area of the shaded part. (Take π = 22/7)',
      figureDescription: 'Two quarter circles overlapping to form a leaf or eye shape, with radius 14 cm.'
    },

    figureSvg: `${SVG_BASE}/overlapping-quarters-14cm.svg`,

    solution: {
      decomposition: 'The perimeter consists of two identical quarter-circle arcs. The area equals the area of one quarter circle (the overlapping region).',
      steps: [
        { description: 'Find the length of one quarter-circle arc', calculation: '1/4 × 2 × 22/7 × 14', result: '22 cm' },
        { description: 'Find the perimeter (2 arcs)', calculation: '2 × 22', result: '44 cm' },
        { description: 'The shaded area = area of one quarter circle', calculation: '1/4 × 22/7 × 14 × 14', result: '154 cm²' }
      ],
      answer: {
        perimeter: { value: '44', unit: 'cm' },
        area: { value: '154', unit: 'cm²' }
      },
      answerSentence: 'The perimeter is 44 cm and the area is 154 cm².'
    },

    hints: [
      'Look at the outer boundary. What curved parts do you see?',
      'The perimeter is made up of two quarter-circle arcs.',
      'For the area, try imagining sliding the shapes around. What do you notice?',
      'Hint: The shaded region equals exactly one quarter circle!'
    ]
  },

  // ==========================================
  // PROBLEM 3: Two Quarter Circles + Semicircle (14 cm)
  // ==========================================
  {
    id: 'learn-quarters-semicircle-14',
    title: 'Two Quarter Circles and a Semicircle',
    figureType: 'two-quarters-semicircle',
    category: 'perimeter',
    difficulty: 2,
    piValue: '22/7',
    section: 'composite-complex',

    problem: {
      text: 'The figure is made up of two quarter circles and a semicircle with radius 14 cm. Find the perimeter of the figure. (Take π = 22/7)',
      figureDescription: 'Two quarter circles at top forming a V-shaped indent, connected to a semicircle at the bottom. The radius is 14 cm.'
    },

    figureSvg: `${SVG_BASE}/quarters-semicircle-14cm.svg`,

    solution: {
      decomposition: 'Two quarter circles + one semicircle = one full circle for the curved parts. Add the two straight edges.',
      steps: [
        { description: 'Recognize: 2 quarter circles + 1 semicircle = 1 full circle', calculation: '1/4 + 1/4 + 1/2 = 1', result: 'Full circumference' },
        { description: 'Find the circumference', calculation: '2 × 22/7 × 14', result: '88 cm' },
        { description: 'Add the two straight edges (each = radius)', calculation: '88 + 14 + 14', result: '116 cm' }
      ],
      answer: {
        perimeter: { value: '116', unit: 'cm' }
      },
      answerSentence: 'The perimeter of the figure is 116 cm.'
    },

    hints: [
      'Count the curved parts: how many quarter circles and semicircles do you see?',
      'Can you combine the curved parts into something simpler?',
      '2 quarter circles = 1 semicircle. So 2 quarters + 1 semicircle = ?',
      'Don\'t forget the straight edges! What are they equal to?'
    ]
  },

  // ==========================================
  // PROBLEM 4: Two Semicircles + Quarter Circle (28 cm diameter)
  // ==========================================
  {
    id: 'learn-semicircles-quarter-28',
    title: 'Two Semicircles and a Quarter Circle',
    figureType: 'two-semicircles-quarter',
    category: 'area',
    difficulty: 2,
    piValue: '22/7',
    section: 'composite-complex',

    problem: {
      text: 'The figure is made up of 2 identical semicircles and a quarter circle. The diameter of each semicircle is 28 cm. Find the area of the shaded part. (Take π = 22/7)',
      figureDescription: 'A quarter circle with two semicircles - one bulging out and one bulging in. The semicircles have diameter 28 cm (radius 14 cm).'
    },

    figureSvg: `${SVG_BASE}/semicircles-quarter-28cm.svg`,

    solution: {
      decomposition: 'One semicircle adds area, one subtracts - they cancel out! The shaded area equals just the quarter circle.',
      steps: [
        { description: 'Find radius of semicircles', calculation: '28 ÷ 2', result: '14 cm' },
        { description: 'Area of one semicircle', calculation: '1/2 × 22/7 × 14 × 14', result: '308 cm²' },
        { description: 'Notice: +308 (bulging out) and −308 (bulging in) cancel', calculation: '308 − 308', result: '0 cm²' },
        { description: 'Shaded area = Quarter circle (radius = 28 cm)', calculation: '1/4 × 22/7 × 28 × 28', result: '616 cm²' }
      ],
      answer: {
        area: { value: '616', unit: 'cm²' }
      },
      answerSentence: 'The area of the shaded part is 616 cm².'
    },

    hints: [
      'Look at the two semicircles. Does one add area and one subtract area?',
      'What happens when you add and subtract the same amount?',
      'If the semicircles cancel out, what shape is left?',
      'The quarter circle has radius = diameter of semicircle = 28 cm'
    ]
  },

  // ==========================================
  // PROBLEM 5: Stadium Shape (70 m × 28 m)
  // ==========================================
  {
    id: 'learn-stadium-70x28',
    title: 'Stadium Shape',
    figureType: 'stadium',
    category: 'area',
    difficulty: 2,
    piValue: '22/7',
    section: 'composite-addition',

    problem: {
      text: 'The figure is made up of a rectangle and two semicircles. The rectangle measures 70 m by 28 m. Find the area of the figure. (Take π = 22/7)',
      figureDescription: 'A stadium/capsule shape with a rectangle (70 m × 28 m) and two semicircles on the shorter ends.'
    },

    figureSvg: `${SVG_BASE}/stadium-70x28m.svg`,

    solution: {
      decomposition: 'Area = Rectangle + 2 semicircles = Rectangle + 1 full circle',
      steps: [
        { description: 'Find radius of semicircles', calculation: '28 ÷ 2', result: '14 m' },
        { description: 'Find area of circle (2 semicircles = 1 circle)', calculation: '22/7 × 14 × 14', result: '616 m²' },
        { description: 'Find area of rectangle', calculation: '70 × 28', result: '1960 m²' },
        { description: 'Find total area', calculation: '1960 + 616', result: '2576 m²' }
      ],
      answer: {
        area: { value: '2576', unit: 'm²' }
      },
      answerSentence: 'The area of the figure is 2576 m².'
    },

    hints: [
      'What shapes make up this stadium? Can you identify a rectangle and semicircles?',
      'How many semicircles are there? What do 2 semicircles make?',
      'The radius of each semicircle equals half the height of the rectangle.',
      'Total area = Rectangle area + Circle area (2 semicircles = 1 circle)'
    ]
  },

  // ==========================================
  // PROBLEM 6: Four-Point Star (14 cm)
  // ==========================================
  {
    id: 'learn-four-star-14',
    title: 'Four-Point Star',
    figureType: 'four-point-star',
    category: 'area',
    difficulty: 3,
    piValue: '22/7',
    section: 'composite-subtraction',

    problem: {
      text: 'The figure shows a square with 4 quarter circles cut from each corner. The side of the square is 14 cm. Find the area of the shaded part. (Take π = 22/7)',
      figureDescription: 'A square with 4 quarter circles cut out from each corner, creating a 4-point star shape. Each quarter circle has radius 7 cm (half the side).'
    },

    figureSvg: `${SVG_BASE}/four-star-14cm.svg`,

    solution: {
      decomposition: 'Area = Square - 4 quarter circles = Square - 1 full circle',
      steps: [
        { description: 'Find radius of each quarter circle', calculation: '14 ÷ 2', result: '7 cm' },
        { description: 'Find area of square', calculation: '14 × 14', result: '196 cm²' },
        { description: 'Find area of 4 quarter circles (= 1 circle)', calculation: '22/7 × 7 × 7', result: '154 cm²' },
        { description: 'Find area of shaded part', calculation: '196 - 154', result: '42 cm²' }
      ],
      answer: {
        area: { value: '42', unit: 'cm²' }
      },
      answerSentence: 'The area of the shaded part is 42 cm².'
    },

    hints: [
      'What is the radius of each quarter circle? Look at where they are positioned.',
      'How many quarter circles are cut out? What do 4 quarter circles make?',
      '4 quarter circles = 1 full circle. This is a useful shortcut!',
      'Shaded area = Square area - Circle area'
    ]
  },

  // ==========================================
  // PROBLEM 7: Two Semicircles Bump (21 cm diameter)
  // ==========================================
  {
    id: 'learn-semicircles-bump-21',
    title: 'Two Semicircles',
    figureType: 'two-semicircles-bump',
    category: 'both',
    difficulty: 2,
    piValue: '22/7',
    section: 'composite-addition',

    problem: {
      text: 'The figure is made up of two semicircles with diameter 21 cm each. Find (a) the perimeter and (b) the area of the shaded figure. (Take π = 22/7)',
      figureDescription: 'Two semicircles arranged side by side, one facing up and one facing down, creating an S-curve or wave shape.'
    },

    figureSvg: `${SVG_BASE}/semicircles-bump-21cm.svg`,

    solution: {
      decomposition: 'Two semicircles = 1 full circle for area. Perimeter = 2 semicircle arcs (no straight edges visible).',
      steps: [
        { description: 'Find radius', calculation: '21 ÷ 2', result: '10.5 cm' },
        { description: 'Find area (2 semicircles = 1 circle)', calculation: '22/7 × 10.5 × 10.5', result: '346.5 cm²' },
        { description: 'Find arc length of each semicircle', calculation: '1/2 × 2 × 22/7 × 10.5', result: '33 cm' },
        { description: 'Find perimeter (2 arcs)', calculation: '33 + 33', result: '66 cm' }
      ],
      answer: {
        perimeter: { value: '66', unit: 'cm' },
        area: { value: '346.5', unit: 'cm²' }
      },
      answerSentence: 'The perimeter is 66 cm and the area is 346.5 cm².'
    },

    hints: [
      'How many semicircles do you see? What shape do 2 semicircles make together?',
      'For area: 2 semicircles = 1 full circle',
      'For perimeter: trace around the outside. Are there any straight edges?',
      'The perimeter is just the two curved arcs added together.'
    ]
  },

  // ==========================================
  // PROBLEM 8: Two Circles with Tangent Lines (14 cm radius)
  // ==========================================
  {
    id: 'learn-circles-tangent-14',
    title: 'Two Circles with Tangent Lines',
    figureType: 'two-circles-tangent',
    category: 'both',
    difficulty: 3,
    piValue: '22/7',
    section: 'composite-subtraction',

    problem: {
      text: 'The figure shows 2 identical circles with two lines touching the circles. The radius of each circle is 14 cm. Find (a) the perimeter and (b) the area of the shaded part. (Take π = 22/7)',
      figureDescription: 'Two circles touching each other with common tangent lines at top and bottom, forming a shaded region between them (like a rectangle minus two semicircles).'
    },

    figureSvg: `${SVG_BASE}/circles-tangent-14cm.svg`,

    solution: {
      decomposition: 'The shaded region is a rectangle minus two semicircles (= minus one circle).',
      steps: [
        { description: 'Find dimensions: height = diameter = 28 cm, width = 2 × radius = 28 cm', calculation: 'Rectangle: 28 × 28', result: '28 cm × 28 cm' },
        { description: 'Find perimeter: 2 semicircle arcs + 2 straight lines', calculation: '(2 × 22/7 × 14) + (2 × 28)', result: '88 + 56 = 144 cm' },
        { description: 'Find area of rectangle', calculation: '28 × 28', result: '784 cm²' },
        { description: 'Find area of 2 semicircles (= 1 circle)', calculation: '22/7 × 14 × 14', result: '616 cm²' },
        { description: 'Find shaded area', calculation: '784 - 616', result: '168 cm²' }
      ],
      answer: {
        perimeter: { value: '144', unit: 'cm' },
        area: { value: '168', unit: 'cm²' }
      },
      answerSentence: 'The perimeter of the shaded part is 144 cm and the area is 168 cm².'
    },

    hints: [
      'What is the shaded region? Can you see a rectangle with circles cut out?',
      'The two semicircles (one from each circle) together make one full circle.',
      'For perimeter: What parts form the boundary? (arcs + straight lines)',
      'For area: Rectangle area - Circle area'
    ]
  }
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get problems by figure type
 */
export function getLearnProblemsByType(figureType: CompositeLearnProblem['figureType']): CompositeLearnProblem[] {
  return COMPOSITE_LEARN_PROBLEMS.filter(p => p.figureType === figureType);
}

/**
 * Get problems by difficulty level
 */
export function getLearnProblemsByDifficulty(difficulty: 1 | 2 | 3): CompositeLearnProblem[] {
  return COMPOSITE_LEARN_PROBLEMS.filter(p => p.difficulty === difficulty);
}

/**
 * Get problems by section
 */
export function getLearnProblemsBySection(section: CompositeLearnProblem['section']): CompositeLearnProblem[] {
  return COMPOSITE_LEARN_PROBLEMS.filter(p => p.section === section);
}

/**
 * Get a problem by its ID
 */
export function getLearnProblemById(id: string): CompositeLearnProblem | undefined {
  return COMPOSITE_LEARN_PROBLEMS.find(p => p.id === id);
}

/**
 * Get problems by category (perimeter/area/both)
 */
export function getLearnProblemsByCategory(category: 'perimeter' | 'area' | 'both'): CompositeLearnProblem[] {
  return COMPOSITE_LEARN_PROBLEMS.filter(p => p.category === category || p.category === 'both');
}

export default COMPOSITE_LEARN_PROBLEMS;
