/**
 * Word Problems Data
 *
 * Complete data for P5 Four Operations Word Problems.
 * Problems are organized by bar model category for pedagogical grouping.
 * Each problem includes text, solution steps, and path to SVG bar model.
 *
 * Source: Singapore Math P5 curriculum
 * Total: 23 problems across 7 categories
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export type ProblemCategory =
  | 'ratio-comparison'
  | 'part-whole'
  | 'comparison-difference'
  | 'before-after'
  | 'sequential-units'
  | 'stacked-ratio'
  | 'area-grid';

export interface SolutionStep {
  description: string;
  calculation: string;
  result: string | number;
  note?: string;
}

export interface WordProblem {
  id: string;
  originalNumber: number;
  title: string;
  category: ProblemCategory;
  difficulty: 1 | 2 | 3;

  problem: {
    text: string;
    context: string;
  };

  barModelSvg: string;

  solution: {
    steps: SolutionStep[];
    answer: {
      value: number | string;
      unit: string;
    };
    answerSentence: string;
  };

  teachingNotes?: string;
}

// ============================================
// CATEGORY METADATA
// ============================================

export const CATEGORY_INFO: Record<ProblemCategory, {
  title: string;
  description: string;
  keyTechnique: string;
}> = {
  'ratio-comparison': {
    title: 'Ratio Comparison Problems',
    description: 'Problems where one quantity is a multiple of another (e.g., "3 times as much").',
    keyTechnique: 'Draw bars showing the ratio relationship. If A is 3× B, draw A as 3 equal units and B as 1 unit.'
  },
  'part-whole': {
    title: 'Part-Whole Problems',
    description: 'Problems where we find parts of a total, or combine parts to find a total.',
    keyTechnique: 'Draw a single bar divided into labeled segments. The parts add up to the whole.'
  },
  'comparison-difference': {
    title: 'Comparison Problems',
    description: 'Problems comparing two or more quantities with a known difference.',
    keyTechnique: 'Draw bars of different lengths. Show the difference as an extra segment on the longer bar.'
  },
  'before-after': {
    title: 'Before-After Problems',
    description: 'Problems involving changes, transfers, or state changes between quantities.',
    keyTechnique: 'Draw TWO diagrams: one showing the BEFORE state, one showing the AFTER state. Track what changed.'
  },
  'sequential-units': {
    title: 'Sequential & Repeated Problems',
    description: 'Problems with repeated equal quantities, sequences, or rate-based calculations.',
    keyTechnique: 'Draw repeated equal boxes. Use "..." for continuation. Focus on finding one unit then multiplying.'
  },
  'stacked-ratio': {
    title: 'Multi-Person Ratio Problems',
    description: 'Problems with three or more people/quantities in a ratio relationship.',
    keyTechnique: 'Stack bars vertically. Use a group bracket to show the total. Find one unit first.'
  },
  'area-grid': {
    title: 'Area & Grid Problems',
    description: 'Problems involving 2D measurements, coverage, and area calculations.',
    keyTechnique: 'Draw the shape with dimensions. Show smaller units fitting inside. Calculate area first.'
  }
};

// ============================================
// SVG BASE PATH
// ============================================

const SVG_BASE = '/curriculum-content/P5/Maths/bar-model-svgs';

// ============================================
// PROBLEM DATA
// ============================================

export const WORD_PROBLEMS: WordProblem[] = [

  // ==========================================
  // CATEGORY 1: RATIO COMPARISON
  // ==========================================

  {
    id: 'q01-tshirt-skirt',
    originalNumber: 1,
    title: 'T-Shirt and Skirt',
    category: 'ratio-comparison',
    difficulty: 1,

    problem: {
      text: 'A T-shirt costs $19 and a skirt costs 3 times as much. If Annie is left with $24 after paying for the T-shirt and the skirt, how much money had she at first?',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/ratio-comparison/q01-tshirt-skirt.svg`,

    solution: {
      steps: [
        { description: 'Find total cost of T-shirt and skirt', calculation: '4 × $19', result: 76, note: 'T-shirt = 1 unit, Skirt = 3 units, Total = 4 units' },
        { description: 'Add the money left to find starting amount', calculation: '$76 + $24', result: 100 }
      ],
      answer: { value: 100, unit: '$' },
      answerSentence: 'Annie had $100 at first.'
    },

    teachingNotes: 'Key insight: The skirt (3×) plus T-shirt (1×) equals 4 units total, where 1 unit = $19.'
  },

  {
    id: 'q03-boardgame-watershooter',
    originalNumber: 3,
    title: 'Board Game Discount',
    category: 'ratio-comparison',
    difficulty: 2,

    problem: {
      text: 'Charlie bought a board game at $7 off. He also bought a water shooter and paid $41 altogether. What was the original price of the board game, if, before discount, it cost 5 times as much as the water shooter?',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/ratio-comparison/q03-boardgame-watershooter.svg`,

    solution: {
      steps: [
        { description: 'Find original total (before discount)', calculation: '$41 + $7', result: 48 },
        { description: 'Board game = 5 units, Water shooter = 1 unit', calculation: '6 units = $48', result: '6 units' },
        { description: 'Find value of 1 unit', calculation: '$48 ÷ 6', result: 8 },
        { description: 'Find original board game price (5 units)', calculation: '5 × $8', result: 40 }
      ],
      answer: { value: 40, unit: '$' },
      answerSentence: 'The original price of the board game was $40.'
    }
  },

  {
    id: 'q11-yana-zach-income',
    originalNumber: 11,
    title: 'Income Comparison',
    category: 'ratio-comparison',
    difficulty: 1,

    problem: {
      text: 'Yana and Zach have an income of $7500 together. If Zach has an income of $1500, how many times as much income as Zach does Yana have?',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/ratio-comparison/q11-yana-zach-income.svg`,

    solution: {
      steps: [
        { description: 'Find Yana\'s income', calculation: '$7500 - $1500', result: 6000 },
        { description: 'Find how many times more', calculation: '$6000 ÷ $1500', result: 4 }
      ],
      answer: { value: 4, unit: 'times' },
      answerSentence: 'Yana has 4 times as much income as Zach.'
    }
  },

  // ==========================================
  // CATEGORY 2: PART-WHOLE
  // ==========================================

  {
    id: 'q02-cards-stamps',
    originalNumber: 2,
    title: 'Cards and Stamps',
    category: 'part-whole',
    difficulty: 1,

    problem: {
      text: 'Ben had $15. After paying for 3 cards and some stamps, he had $3 left. If each card cost $2 and each stamp cost $1, find the number of stamps he bought.',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/part-whole/q02-cards-stamps.svg`,

    solution: {
      steps: [
        { description: 'Find total spent', calculation: '$15 - $3', result: 12 },
        { description: 'Find cost of 3 cards', calculation: '3 × $2', result: 6 },
        { description: 'Find cost of stamps', calculation: '$12 - $6', result: 6 },
        { description: 'Find number of stamps', calculation: '$6 ÷ $1', result: 6 }
      ],
      answer: { value: 6, unit: 'stamps' },
      answerSentence: 'He bought 6 stamps.'
    }
  },

  {
    id: 'q05-electricity-water',
    originalNumber: 5,
    title: 'Monthly Bills',
    category: 'part-whole',
    difficulty: 1,

    problem: {
      text: 'Each month Li pays bills for electricity and water. If she pays $36 a month for electricity, and $720 a year for electricity and water together, find the amount of money she pays for water each month.',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/part-whole/q05-electricity-water.svg`,

    solution: {
      steps: [
        { description: 'Find monthly total', calculation: '$720 ÷ 12', result: 60 },
        { description: 'Find monthly water bill', calculation: '$60 - $36', result: 24 }
      ],
      answer: { value: 24, unit: '$' },
      answerSentence: 'She pays $24 for water each month.'
    }
  },

  {
    id: 'q23-tin-cookies',
    originalNumber: 23,
    title: 'Cookie Boxes',
    category: 'part-whole',
    difficulty: 2,

    problem: {
      text: 'The total mass of a tin containing 16 boxes of cookies is 3260 g. The mass of the tin is 220 g. If each empty box has a mass of 10 g, what is the mass of cookies inside each box?',
      context: 'mass'
    },

    barModelSvg: `${SVG_BASE}/part-whole/q23-tin-cookies.svg`,

    solution: {
      steps: [
        { description: 'Find mass of 16 boxes with cookies', calculation: '3260 - 220', result: 3040 },
        { description: 'Find mass of each box with cookies', calculation: '3040 ÷ 16', result: 190 },
        { description: 'Find mass of cookies per box', calculation: '190 - 10', result: 180 }
      ],
      answer: { value: 180, unit: 'g' },
      answerSentence: 'The mass of cookies inside each box is 180 g.'
    }
  },

  // ==========================================
  // CATEGORY 3: COMPARISON WITH DIFFERENCE
  // ==========================================

  {
    id: 'q04-streaming-subscriptions',
    originalNumber: 4,
    title: 'Streaming Subscriptions',
    category: 'comparison-difference',
    difficulty: 2,

    problem: {
      text: 'Dave and Eli bought monthly streaming subscriptions and paid $96 altogether for the year. If Eli subscribed for 10 more months than Dave and paid $20 more than him, find the number of months that Dave subscribed for.',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/comparison-difference/q04-streaming-subscriptions.svg`,

    solution: {
      steps: [
        { description: 'Find cost per month', calculation: '$20 ÷ 10', result: 2, note: '10 extra months cost $20 more' },
        { description: 'Remove the extra $20 to make amounts equal', calculation: '$96 - $20', result: 76 },
        { description: 'Find 2 equal parts', calculation: '$76 ÷ 2', result: 38, note: '2 units = $76, so 1 unit = $38' },
        { description: 'Find number of months Dave subscribed', calculation: '$38 ÷ $2', result: 19 }
      ],
      answer: { value: 19, unit: 'months' },
      answerSentence: 'Dave subscribed for 19 months.'
    },

    teachingNotes: ''
  },

  {
    id: 'q07-mia-neil-olivia',
    originalNumber: 7,
    title: 'Three Friends\' Money',
    category: 'comparison-difference',
    difficulty: 2,

    problem: {
      text: 'Mia, Neil and Olivia had a total of $160. Neil had $8 more than Mia. Olivia had 5 times as much money as Neil. How much money had Mia?',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/comparison-difference/q07-mia-neil-olivia.svg`,

    solution: {
      steps: [
        { description: 'If Mia had $8 more, all three would be multiples of Neil', calculation: '$160 + $8', result: 168, note: 'Mia=1 unit, Neil=1 unit, Olivia=5 units' },
        { description: 'Find value of 1 unit', calculation: '$168 ÷ 7', result: 24, note: 'Total = 7 units' },
        { description: 'Neil = 1 unit', calculation: '$24', result: 24 },
        { description: 'Mia = Neil - $8', calculation: '$24 - $8', result: 16 }
      ],
      answer: { value: 16, unit: '$' },
      answerSentence: 'Mia had $16.'
    }
  },

  // ==========================================
  // CATEGORY 4: BEFORE-AFTER
  // ==========================================

  {
    id: 'q09-qi-maria-crayons',
    originalNumber: 9,
    title: 'Borrowing Crayons',
    category: 'before-after',
    difficulty: 2,

    problem: {
      text: 'Qi had 2 times as many crayons as Maria. After borrowing some crayons from Maria, Qi now has 5 times as many crayons as Maria. If they have 150 crayons altogether, how many crayons did Qi borrow from Maria?',
      context: 'crayons'
    },

    barModelSvg: `${SVG_BASE}/before-after/q09-qi-maria-crayons.svg`,

    solution: {
      steps: [
        { description: 'BEFORE: Qi = 2 units, Maria = 1 unit, Total = 3 units', calculation: '150 ÷ 3', result: 50, note: '1 unit = 50 crayons' },
        { description: 'Maria had 50 crayons at first', calculation: '1 × 50', result: 50 },
        { description: 'AFTER: Qi = 5 units, Maria = 1 unit, Total = 6 units', calculation: '150 ÷ 6', result: 25, note: '1 unit now = 25 crayons' },
        { description: 'Maria has 25 crayons left', calculation: '1 × 25', result: 25 },
        { description: 'Crayons borrowed', calculation: '50 - 25', result: 25 }
      ],
      answer: { value: 25, unit: 'crayons' },
      answerSentence: 'Qi borrowed 25 crayons from Maria.'
    },

    teachingNotes: 'Key insight: Total crayons stays the same (150), but the UNIT VALUE changes between Before and After.'
  },

  {
    id: 'q10-tina-jill-jack-stickers',
    originalNumber: 10,
    title: 'Sticker Transfers',
    category: 'before-after',
    difficulty: 3,

    problem: {
      text: 'Tina had 3 times as many stickers as Jill while Jack had 4 times as many stickers as Jill. After Tina gave 10 stickers away and Jack gave 30 stickers to Jill, they each had the same number of stickers. How many stickers had Jack at first?',
      context: 'stickers'
    },

    barModelSvg: `${SVG_BASE}/before-after/q10-tina-jill-jack-stickers.svg`,

    solution: {
      steps: [
        { description: 'After transfers, Tina loses 10, Jack loses 30 to Jill', calculation: 'Tina: 3 units - 10, Jack: 4 units - 30, Jill: 1 unit + 30', result: 'equal' },
        { description: 'For Tina and Jack to be equal: difference = 30 - 10', calculation: '4 units - 3 units = 30 - 10', result: '1 unit = 20' },
        { description: 'Find 1 unit', calculation: '(30 + 10) ÷ 2', result: 20, note: 'The gap of 1 unit must equal 20 for them to be equal after transfers' },
        { description: 'Jack at first = 4 units', calculation: '4 × 20', result: 80 }
      ],
      answer: { value: 80, unit: 'stickers' },
      answerSentence: 'Jack had 80 stickers at first.'
    }
  },

  {
    id: 'q15-jeremy-ryan-money',
    originalNumber: 15,
    title: 'Shopping Purchases',
    category: 'before-after',
    difficulty: 3,

    problem: {
      text: 'Jeremy had 3 times as much money as Ryan. After Jeremy bought a camera for $179 and Ryan bought a jersey for $38, Ryan had 2 times as much money as Jeremy. How much money had Jeremy at first?',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/before-after/q15-jeremy-ryan-money.svg`,

    solution: {
      steps: [
        { description: 'BEFORE: Jeremy = 3 units, Ryan = 1 unit', calculation: 'Jeremy = 3u, Ryan = 1u', result: 'ratio 3:1' },
        { description: 'AFTER: Jeremy left = 3u - $179, Ryan left = 1u - $38', calculation: 'Ryan left = 2 × Jeremy left', result: 'ratio 1:2' },
        { description: 'Set up equation: 1u - 38 = 2(3u - 179)', calculation: '1u - 38 = 6u - 358', result: 'equation' },
        { description: 'Solve: 5 units = $179 - 3×$38', calculation: '$179 - $114', result: 65 },
        { description: 'Find 1 unit', calculation: '$65 ÷ 5', result: 13 },
        { description: 'Jeremy at first = 3 units + camera', calculation: '(3 × $13) + $179', result: 192, note: 'Or: Jeremy spent $179, had $13 left, so had $192' }
      ],
      answer: { value: 192, unit: '$' },
      answerSentence: 'Jeremy had $192 at first.'
    },

    teachingNotes: 'This is an advanced "before-after" where the ratio REVERSES. Draw the "after" state first, then work backwards.'
  },

  {
    id: 'q17-mom-son-age',
    originalNumber: 17,
    title: 'Age Problem',
    category: 'before-after',
    difficulty: 2,

    problem: {
      text: 'A mom is 3 times as old as her son. 10 years later, the mom will be 2 times as old as the son. How old is the son now?',
      context: 'age'
    },

    barModelSvg: `${SVG_BASE}/before-after/q17-mom-son-age.svg`,

    solution: {
      steps: [
        { description: 'NOW: Mom = 3 units, Son = 1 unit', calculation: 'Mom = 3u, Son = 1u', result: 'ratio 3:1' },
        { description: 'IN 10 YEARS: Both add 10', calculation: 'Mom = 3u + 10, Son = 1u + 10', result: '+10 each' },
        { description: 'New ratio is 2:1, so Mom = 2 × Son', calculation: '3u + 10 = 2(1u + 10)', result: 'equation' },
        { description: 'Solve: 3u + 10 = 2u + 20', calculation: '1u = 10', result: 10 }
      ],
      answer: { value: 10, unit: 'years old' },
      answerSentence: 'The son is 10 years old now.'
    },

    teachingNotes: 'Can also solve by Guess-and-Check table method. Key: both ages increase by the same amount (10 years).'
  },

  // ==========================================
  // CATEGORY 5: SEQUENTIAL/REPEATED UNITS
  // ==========================================

  {
    id: 'q06-pizza-promotion',
    originalNumber: 6,
    title: 'Pizza Promotion',
    category: 'sequential-units',
    difficulty: 1,

    problem: {
      text: 'A supermarket is having a promotion on frozen pizzas that are normally priced at $9 each. If Ken buys 2 frozen pizzas and gets 1 free, how much does he save on each frozen pizza in this promotion?',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/sequential-units/q06-pizza-promotion.svg`,

    solution: {
      steps: [
        { description: 'Ken pays for 2 pizzas, gets 3', calculation: '$9 × 2', result: 18 },
        { description: 'Effective price per pizza', calculation: '$18 ÷ 3', result: 6 },
        { description: 'Savings per pizza', calculation: '$9 - $6', result: 3 }
      ],
      answer: { value: 3, unit: '$' },
      answerSentence: 'He saves $3 on each pizza in the promotion.'
    }
  },

  {
    id: 'q08-lace-pieces',
    originalNumber: 8,
    title: 'Selling Lace',
    category: 'sequential-units',
    difficulty: 2,

    problem: {
      text: 'Piper had 50 m of lace that she divided into pieces of 3 m each. She sold each 3-m piece for $5 and the leftover at a discount. She collected $82 altogether. How much did she sell the leftover lace for?',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/sequential-units/q08-lace-pieces.svg`,

    solution: {
      steps: [
        { description: 'Divide lace into 3m pieces', calculation: '50 ÷ 3', result: '16 R 2', note: '16 pieces, 2m leftover' },
        { description: 'Revenue from 3m pieces', calculation: '16 × $5', result: 80 },
        { description: 'Revenue from leftover', calculation: '$82 - $80', result: 2 }
      ],
      answer: { value: 2, unit: '$' },
      answerSentence: 'She sold the leftover piece for $2.'
    }
  },

  {
    id: 'q12-keyrings',
    originalNumber: 12,
    title: 'Selling Key Rings',
    category: 'sequential-units',
    difficulty: 2,

    problem: {
      text: 'A shopkeeper bought some key rings from a supplier. He threw away 15 broken key rings and sold the rest at 5 for $7. If he received $427, how many key rings had he bought from the supplier?',
      context: 'items'
    },

    barModelSvg: `${SVG_BASE}/sequential-units/q12-keyrings.svg`,

    solution: {
      steps: [
        { description: 'Find number of sets sold', calculation: '$427 ÷ $7', result: 61 },
        { description: 'Find total key rings sold', calculation: '61 × 5', result: 305 },
        { description: 'Add broken key rings', calculation: '305 + 15', result: 320 }
      ],
      answer: { value: 320, unit: 'key rings' },
      answerSentence: 'He had bought 320 key rings from the supplier.'
    }
  },

  {
    id: 'q13-folders-packs',
    originalNumber: 13,
    title: 'Folder Packs',
    category: 'sequential-units',
    difficulty: 2,

    problem: {
      text: 'A box contains 96 folders. A bookstore keeper bought 32 boxes of folders and divided the folders into packs of 10. If he sold each pack for $7 and the remaining folders for $1 each, find the sum of money that the bookstore keeper got.',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/sequential-units/q13-folders-packs.svg`,

    solution: {
      steps: [
        { description: 'Find total folders', calculation: '32 × 96', result: 3072 },
        { description: 'Divide into packs of 10', calculation: '3072 ÷ 10', result: '307 R 2', note: '307 packs, 2 loose folders' },
        { description: 'Revenue from packs', calculation: '307 × $7', result: 2149 },
        { description: 'Revenue from loose folders', calculation: '2 × $1', result: 2 },
        { description: 'Total revenue', calculation: '$2149 + $2', result: 2151 }
      ],
      answer: { value: 2151, unit: '$' },
      answerSentence: 'He got $2151 altogether.'
    }
  },

  {
    id: 'q18-truck-instalments',
    originalNumber: 18,
    title: 'Truck Payments',
    category: 'sequential-units',
    difficulty: 2,

    problem: {
      text: 'Joe paid $10,000 upfront for a truck priced at $96,400. He will pay the remaining sum of money by monthly instalments of $600 each. How many years will it take Joe to pay off all the instalments?',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/sequential-units/q18-truck-instalments.svg`,

    solution: {
      steps: [
        { description: 'Find remaining amount', calculation: '$96,400 - $10,000', result: 86400 },
        { description: 'Find number of months', calculation: '$86,400 ÷ $600', result: 144 },
        { description: 'Convert to years', calculation: '144 ÷ 12', result: 12 }
      ],
      answer: { value: 12, unit: 'years' },
      answerSentence: 'It will take him 12 years to pay off all the instalments.'
    }
  },

  {
    id: 'q20-cab-fare',
    originalNumber: 20,
    title: 'Cab Fare',
    category: 'sequential-units',
    difficulty: 2,

    problem: {
      text: 'A cab charges $2 for the first 1 km and 20¢ for every 200 m after that. How much do you pay for a 4-km ride?',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/sequential-units/q20-cab-fare.svg`,

    solution: {
      steps: [
        { description: 'First 1 km', calculation: '$2', result: 2 },
        { description: 'Remaining distance', calculation: '4 km - 1 km = 3 km', result: '3000 m' },
        { description: 'Number of 200m segments', calculation: '3000 ÷ 200', result: 15 },
        { description: 'Cost for remaining distance', calculation: '15 × 20¢', result: '300¢ = $3' },
        { description: 'Total fare', calculation: '$2 + $3', result: 5 }
      ],
      answer: { value: 5, unit: '$' },
      answerSentence: 'You pay $5 for a 4-km ride.'
    }
  },

  {
    id: 'q21-typing-speed',
    originalNumber: 21,
    title: 'Typing Speed',
    category: 'sequential-units',
    difficulty: 1,

    problem: {
      text: 'Riley types at a speed of 25 words a minute. If she took 18 minutes to type an essay, how many words did the essay have?',
      context: 'words'
    },

    barModelSvg: `${SVG_BASE}/sequential-units/q21-typing-speed.svg`,

    solution: {
      steps: [
        { description: 'Words per minute × minutes', calculation: '25 × 18', result: 450 }
      ],
      answer: { value: 450, unit: 'words' },
      answerSentence: 'The essay had 450 words.'
    }
  },

  // ==========================================
  // CATEGORY 6: STACKED RATIO
  // ==========================================

  {
    id: 'q14-rubberbands-sharing',
    originalNumber: 14,
    title: 'Sharing Rubber Bands',
    category: 'stacked-ratio',
    difficulty: 2,

    problem: {
      text: 'Mei had 14 rubber bands before she found a packet containing some rubber bands. She and her 5 friends then shared the rubber bands equally among themselves. If Mei has 19 rubber bands now, how many rubber bands did the packet have?',
      context: 'items'
    },

    barModelSvg: `${SVG_BASE}/stacked-ratio/q14-rubberbands-sharing.svg`,

    solution: {
      steps: [
        { description: 'Total people sharing', calculation: 'Mei + 5 friends', result: 6 },
        { description: 'Each person gets 19, find total', calculation: '19 × 6', result: 114 },
        { description: 'Subtract Mei\'s original rubber bands', calculation: '114 - 14', result: 100 }
      ],
      answer: { value: 100, unit: 'rubber bands' },
      answerSentence: 'The packet had 100 rubber bands.'
    }
  },

  {
    id: 'q16-ferris-wheel',
    originalNumber: 16,
    title: 'Ferris Wheel Tickets',
    category: 'stacked-ratio',
    difficulty: 1,

    problem: {
      text: '130 children and 110 adults took a Ferris wheel ride. If a child ticket cost $9 and an adult ticket cost $16, how much money was collected by the Ferris wheel operator?',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/stacked-ratio/q16-ferris-wheel.svg`,

    solution: {
      steps: [
        { description: 'Revenue from children', calculation: '130 × $9', result: 1170 },
        { description: 'Revenue from adults', calculation: '110 × $16', result: 1760 },
        { description: 'Total revenue', calculation: '$1170 + $1760', result: 2930 }
      ],
      answer: { value: 2930, unit: '$' },
      answerSentence: 'Total sum of money collected by the Ferris wheel operator is $2930.'
    }
  },

  {
    id: 'q22-airport-travelers',
    originalNumber: 22,
    title: 'Airport Travelers',
    category: 'stacked-ratio',
    difficulty: 3,

    problem: {
      text: 'The table shows the number of travelers that arrived at an airport last week: Mon=998, Tue=498, Wed=749, Thu=1500, Fri=?, Sat=?, Sun=?, Total=16,240. There were twice as many travelers on Saturday as on Sunday and twice as many on Friday as on Saturday. How many travelers arrived on Friday?',
      context: 'people'
    },

    barModelSvg: `${SVG_BASE}/stacked-ratio/q22-airport-travelers.svg`,

    solution: {
      steps: [
        { description: 'Find Mon-Thu total', calculation: '998 + 498 + 749 + 1500', result: 3745 },
        { description: 'Find Fri-Sun total', calculation: '16,240 - 3,745', result: 12495 },
        { description: 'Set up ratio: Sun=1u, Sat=2u, Fri=4u', calculation: '7 units = 12,495', result: '7 units' },
        { description: 'Find 1 unit', calculation: '12,495 ÷ 7', result: 1785 },
        { description: 'Friday = 4 units', calculation: '4 × 1785', result: 7140 }
      ],
      answer: { value: 7140, unit: 'travelers' },
      answerSentence: 'There were 7140 travelers on Friday.'
    }
  },

  // ==========================================
  // CATEGORY 7: AREA/GRID
  // ==========================================

  {
    id: 'q19-floor-tiles',
    originalNumber: 19,
    title: 'Floor Tiles',
    category: 'area-grid',
    difficulty: 2,

    problem: {
      text: 'A floor measuring 700 cm by 500 cm is being tiled using 100-cm² tiles. If each 100-cm² tile costs $2, how much will it cost to tile the floor?',
      context: 'area'
    },

    barModelSvg: `${SVG_BASE}/area-grid/q19-floor-tiles.svg`,

    solution: {
      steps: [
        { description: 'Find floor area', calculation: '700 × 500', result: 350000, note: 'Area in cm²' },
        { description: 'Find number of tiles needed', calculation: '350,000 ÷ 100', result: 3500 },
        { description: 'Find total cost', calculation: '3500 × $2', result: 7000 }
      ],
      answer: { value: 7000, unit: '$' },
      answerSentence: 'Cost of tiling the floor is $7000.'
    }
  }

];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get all problems in a specific category
 */
export function getProblemsByCategory(category: ProblemCategory): WordProblem[] {
  return WORD_PROBLEMS.filter(p => p.category === category);
}

/**
 * Get problems by difficulty level
 */
export function getProblemsByDifficulty(difficulty: 1 | 2 | 3): WordProblem[] {
  return WORD_PROBLEMS.filter(p => p.difficulty === difficulty);
}

/**
 * Get a problem by its ID
 */
export function getProblemById(id: string): WordProblem | undefined {
  return WORD_PROBLEMS.find(p => p.id === id);
}

/**
 * Get a problem by its original number (1-23)
 */
export function getProblemByNumber(num: number): WordProblem | undefined {
  return WORD_PROBLEMS.find(p => p.originalNumber === num);
}

/**
 * Get all categories in display order
 */
export function getCategoriesInOrder(): ProblemCategory[] {
  return [
    'ratio-comparison',
    'part-whole',
    'comparison-difference',
    'before-after',
    'sequential-units',
    'stacked-ratio',
    'area-grid'
  ];
}

/**
 * Get count of problems per category
 */
export function getProblemCountByCategory(): Record<ProblemCategory, number> {
  const counts = {} as Record<ProblemCategory, number>;
  for (const category of getCategoriesInOrder()) {
    counts[category] = getProblemsByCategory(category).length;
  }
  return counts;
}

// ============================================
// EXPORTS
// ============================================

export default WORD_PROBLEMS;
