// Composite Circle Problems Data
// Pre-generated problems with SVG visualizations for P6 Circles

export interface SolutionStep {
  description: string;
  calculation: string;
  result: string;
}

export interface CompositeCircleProblem {
  id: string;
  title: string;
  category: 'perimeter' | 'area' | 'both';
  difficulty: 1 | 2 | 3;
  piValue: '3.14' | '22/7';

  problem: {
    text: string;
    figureDescription: string;
  };

  figureSvg: string; // Path to SVG file

  solution: {
    decomposition: string;
    steps: SolutionStep[];
    answer: { value: string; unit: string };
    answerSentence: string;
  };

  teachingNotes?: string;
}

export const compositeCircleProblems: CompositeCircleProblem[] = [
  // ===========================================
  // PERIMETER PROBLEMS
  // ===========================================
  {
    id: 'comp-peri-1',
    title: 'Quarter Circle in a Square',
    category: 'both',
    difficulty: 1,
    piValue: '22/7',
    problem: {
      text: 'The figure shows a quarter circle in a square. Find (a) the perimeter and (b) the area of the shaded part.',
      figureDescription: 'A square with side 7 cm. A quarter circle is cut from one corner with radius equal to the side of the square.'
    },
    figureSvg: '/curriculum-content/P6/Maths/circle-composite-svgs/notes/quarter-circle-in-square.svg',
    solution: {
      decomposition: 'The shaded part is the region outside the quarter circle but inside the square.',
      steps: [
        {
          description: 'Find the length of the arc (quarter of circumference)',
          calculation: '1/4 × 2 × 22/7 × 7',
          result: '11 cm'
        },
        {
          description: 'Find the perimeter of shaded part',
          calculation: '11 + 7 + 7 (arc + two sides of square)',
          result: '25 cm'
        },
        {
          description: 'Find area of square',
          calculation: '7 × 7',
          result: '49 cm²'
        },
        {
          description: 'Find area of quarter circle',
          calculation: '1/4 × 22/7 × 7 × 7',
          result: '38.5 cm²'
        },
        {
          description: 'Find area of shaded part',
          calculation: '49 - 38.5',
          result: '10.5 cm²'
        }
      ],
      answer: { value: 'Perimeter = 25 cm, Area = 10.5 cm²', unit: '' },
      answerSentence: 'The perimeter of the shaded part is 25 cm and the area is 10.5 cm².'
    },
    teachingNotes: 'For perimeter, trace around the outside - you need the arc plus the two straight sides of the square. For area, subtract the quarter circle from the square.'
  },

  {
    id: 'comp-peri-2',
    title: 'Two Overlapping Quarter Circles (Leaf Shape)',
    category: 'both',
    difficulty: 2,
    piValue: '22/7',
    problem: {
      text: 'The figure is made up of two overlapping quarter circles. Find (a) the perimeter and (b) the area of the shaded part.',
      figureDescription: 'Two quarter circles overlapping to form a leaf or eye shape, with side 7 cm.'
    },
    figureSvg: '/curriculum-content/P6/Maths/circle-composite-svgs/notes/overlapping-quarter-circles.svg',
    solution: {
      decomposition: 'The perimeter consists of two identical quarter-circle arcs. The area is equal to the area of a quarter circle.',
      steps: [
        {
          description: 'Find the length of one quarter-circle arc',
          calculation: '1/4 × 2 × 22/7 × 7',
          result: '11 cm'
        },
        {
          description: 'Find the perimeter (2 arcs)',
          calculation: '2 × 11',
          result: '22 cm'
        },
        {
          description: 'Recognize the shaded area = area of quarter circle',
          calculation: '(The two "crescents" outside each arc together equal the quarter circle)',
          result: 'See next step'
        },
        {
          description: 'Find area of quarter circle',
          calculation: '1/4 × 22/7 × 7 × 7',
          result: '38.5 cm²'
        }
      ],
      answer: { value: 'Perimeter = 22 cm, Area = 38.5 cm²', unit: '' },
      answerSentence: 'The perimeter is 22 cm and the area is 38.5 cm².'
    },
    teachingNotes: 'Try imagining sliding and rearranging the shapes - you\'ll see that the shaded area equals exactly one quarter circle!'
  },

  {
    id: 'comp-peri-3',
    title: 'Two Quarter Circles + Semicircle',
    category: 'perimeter',
    difficulty: 2,
    piValue: '22/7',
    problem: {
      text: 'The figure is made up of two quarter circles and a semicircle. Find the perimeter of the figure.',
      figureDescription: 'Two quarter circles at top forming a concave (V-shaped indent), connected by straight edges to a semicircle at the bottom. Height is 21 cm.'
    },
    figureSvg: '/curriculum-content/P6/Maths/circle-composite-svgs/notes/two-quarter-circles-semicircle.svg',
    solution: {
      decomposition: 'The two quarter circles can be rearranged to form one semicircle. So the curved edges make a full circle.',
      steps: [
        {
          description: 'Recognize: 2 quarter circles + 1 semicircle = 1 full circle',
          calculation: '1/4 + 1/4 + 1/2 = 1 whole circumference',
          result: 'Full circumference'
        },
        {
          description: 'Find the circumference',
          calculation: '2 × 22/7 × 21',
          result: '132 cm'
        },
        {
          description: 'Add the two straight edges',
          calculation: '132 + 21 + 21',
          result: '174 cm'
        }
      ],
      answer: { value: '174', unit: 'cm' },
      answerSentence: 'The perimeter of the figure is 174 cm.'
    },
    teachingNotes: 'Remember: 2 quarter circles + 1 semicircle = 1 full circle. Look for these combinations to simplify your calculations!'
  },

  // ===========================================
  // AREA PROBLEMS
  // ===========================================
  {
    id: 'comp-area-1',
    title: 'Two Semicircles + Quarter Circle',
    category: 'area',
    difficulty: 2,
    piValue: '22/7',
    problem: {
      text: 'The figure is made up of 2 identical semicircles and a quarter circle. Find the area of the shaded part.',
      figureDescription: 'A composite shape with two semicircles (diameter 14 cm each) and a quarter circle (radius 14 cm).'
    },
    figureSvg: '/curriculum-content/P6/Maths/circle-composite-svgs/notes/two-semicircles-quarter.svg',
    solution: {
      decomposition: 'One semicircle bulges OUT (adds area), one bulges IN (subtracts area). They cancel out, leaving just the quarter circle!',
      steps: [
        {
          description: 'Find area of one semicircle (radius = 7 cm)',
          calculation: '1/2 × 22/7 × 7 × 7',
          result: '77 cm²'
        },
        {
          description: 'Notice: +77 (bulging out) and −77 (bulging in) cancel out',
          calculation: '77 − 77',
          result: '0 cm²'
        },
        {
          description: 'Shaded area = Quarter circle only (radius = 14 cm)',
          calculation: '1/4 × 22/7 × 14 × 14',
          result: '154 cm²'
        }
      ],
      answer: { value: '154', unit: 'cm²' },
      answerSentence: 'The area of the shaded part is 154 cm².'
    },
    teachingNotes: 'When one shape adds area and another subtracts the same amount, they cancel out!'
  },

  {
    id: 'comp-area-2',
    title: 'Stadium Shape (Rectangle + Two Semicircles)',
    category: 'area',
    difficulty: 2,
    piValue: '3.14',
    problem: {
      text: 'The figure is made up of a rectangle and two semicircles. Find the area of the figure.',
      figureDescription: 'A stadium/capsule shape with a rectangle (100 m × 48 m) and two semicircles on the ends.'
    },
    figureSvg: '/curriculum-content/P6/Maths/circle-composite-svgs/notes/stadium-shape.svg',
    solution: {
      decomposition: 'Area = Rectangle + 2 semicircles = Rectangle + 1 full circle',
      steps: [
        {
          description: 'Find radius of semicircles',
          calculation: '48 ÷ 2',
          result: '24 m'
        },
        {
          description: 'Find area of circle (2 semicircles = 1 circle)',
          calculation: '3.14 × 24 × 24',
          result: '1808.64 m²'
        },
        {
          description: 'Find area of rectangle',
          calculation: '100 × 48',
          result: '4800 m²'
        },
        {
          description: 'Find total area',
          calculation: '4800 + 1808.64',
          result: '6608.64 m²'
        }
      ],
      answer: { value: '6608.64', unit: 'm²' },
      answerSentence: 'The area of the figure is 6608.64 m².'
    },
    teachingNotes: 'This stadium shape is used for running tracks! Break it into a rectangle plus two semicircles (which make one circle).'
  },

  {
    id: 'comp-area-3',
    title: 'Four-Point Star (Square minus 4 Quarter Circles)',
    category: 'area',
    difficulty: 3,
    piValue: '3.14',
    problem: {
      text: 'The figures below are made up of quarter circles. Find the area of the shaded part.',
      figureDescription: 'A square with 4 quarter circles cut out from each corner, creating a 4-point star shape.'
    },
    figureSvg: '/curriculum-content/P6/Maths/circle-composite-svgs/notes/four-point-star.svg',
    solution: {
      decomposition: 'Area = Square - 4 quarter circles = Square - 1 full circle',
      steps: [
        {
          description: 'Find side of square (radius of quarter circle)',
          calculation: 'Side = 8 cm, so radius = 4 cm',
          result: '4 cm'
        },
        {
          description: 'Find area of square',
          calculation: '8 × 8',
          result: '64 cm²'
        },
        {
          description: 'Find area of 4 quarter circles (= 1 circle)',
          calculation: '3.14 × 4 × 4',
          result: '50.24 cm²'
        },
        {
          description: 'Find area of shaded part',
          calculation: '64 - 50.24',
          result: '13.76 cm²'
        }
      ],
      answer: { value: '13.76', unit: 'cm²' },
      answerSentence: 'The area of the shaded part is 13.76 cm².'
    },
    teachingNotes: 'Shortcut: 4 quarter circles = 1 full circle. Use this to calculate much faster!'
  },

  {
    id: 'comp-area-4',
    title: 'Two Semicircles (Bump Shape)',
    category: 'both',
    difficulty: 2,
    piValue: '22/7',
    problem: {
      text: 'The figure is made up of semicircles. Find the area and perimeter of the shaded part.',
      figureDescription: 'Two semicircles side by side, one facing up and one facing down, with diameter 14 cm each.'
    },
    figureSvg: '/curriculum-content/P6/Maths/circle-composite-svgs/notes/two-semicircles-bump.svg',
    solution: {
      decomposition: 'Two semicircles = 1 full circle for area. Perimeter = 2 semicircle arcs + base line.',
      steps: [
        {
          description: 'Find radius',
          calculation: '14 ÷ 2',
          result: '7 cm'
        },
        {
          description: 'Find area (2 semicircles = 1 circle)',
          calculation: '22/7 × 7 × 7',
          result: '154 cm²'
        },
        {
          description: 'Find arc length of each semicircle',
          calculation: '1/2 × 2 × 22/7 × 7',
          result: '22 cm'
        },
        {
          description: 'Find perimeter (2 arcs)',
          calculation: '22 + 22',
          result: '44 cm'
        }
      ],
      answer: { value: 'Perimeter = 44 cm, Area = 154 cm²', unit: '' },
      answerSentence: 'The perimeter is 44 cm and the area is 154 cm².'
    }
  },

  {
    id: 'comp-area-5',
    title: 'Two Circles with Tangent Lines',
    category: 'both',
    difficulty: 3,
    piValue: '3.14',
    problem: {
      text: 'The figure shows 2 identical circles with two lines touching the circles. The radius of each circle is 10 cm. Find (i) the perimeter and (ii) the area of the shaded part.',
      figureDescription: 'Two circles touching each other with common tangent lines at top and bottom forming a shaded region between them.'
    },
    figureSvg: '/curriculum-content/P6/Maths/circle-composite-svgs/notes/two-circles-tangent.svg',
    solution: {
      decomposition: 'The shaded region is a rectangle minus two semicircles.',
      steps: [
        {
          description: 'Find perimeter (2 semicircle arcs + 2 straight lines)',
          calculation: 'Arc = π × 10 = 31.4 cm each; Lines = 20 cm each',
          result: '2(31.4) + 2(20) = 102.8 cm'
        },
        {
          description: 'Find area of rectangle',
          calculation: '20 × 20',
          result: '400 cm²'
        },
        {
          description: 'Find area of 2 semicircles (= 1 circle)',
          calculation: '3.14 × 10 × 10',
          result: '314 cm²'
        },
        {
          description: 'Find shaded area',
          calculation: '400 - 314',
          result: '86 cm²'
        }
      ],
      answer: { value: 'Perimeter ≈ 102.8 cm, Area = 86 cm²', unit: '' },
      answerSentence: 'The perimeter of the shaded part is approximately 102.8 cm and the area is 86 cm².'
    }
  }
];

// Get problems by category
export const getProblemsbyCategory = (category: 'perimeter' | 'area' | 'both') => {
  return compositeCircleProblems.filter(p => p.category === category || p.category === 'both');
};

// Get problems by difficulty
export const getProblemsByDifficulty = (difficulty: 1 | 2 | 3) => {
  return compositeCircleProblems.filter(p => p.difficulty === difficulty);
};
