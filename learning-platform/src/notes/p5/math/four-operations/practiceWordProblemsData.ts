/**
 * Practice Word Problems Data
 *
 * NEW problems for Practice mode - based on Learn module templates
 * but with DIFFERENT numbers and contexts.
 *
 * Total: 23 problems across 7 categories (matching Learn module structure)
 * Each problem has new SVG in /bar-model-svgs/practice/
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

export interface PracticeWordProblem {
  id: string;
  templateId: string; // Original problem it's based on
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
}

// ============================================
// SVG BASE PATH
// ============================================

const SVG_BASE = '/curriculum-content/P5/Maths/bar-model-svgs/practice';

// ============================================
// PRACTICE PROBLEMS DATA
// ============================================

export const PRACTICE_WORD_PROBLEMS: PracticeWordProblem[] = [

  // ==========================================
  // CATEGORY 1: RATIO COMPARISON (3 problems)
  // ==========================================

  {
    id: 'p01-jacket-pants',
    templateId: 'q01-tshirt-skirt',
    title: 'Jacket and Pants',
    category: 'ratio-comparison',
    difficulty: 1,

    problem: {
      text: 'A jacket costs $25 and a pair of pants costs 3 times as much. If Ben is left with $30 after paying for the jacket and the pants, how much money had he at first?',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/ratio-comparison/p01-jacket-pants.svg`,

    solution: {
      steps: [
        { description: 'Find cost of pants', calculation: '3 × $25', result: 75 },
        { description: 'Find total cost of jacket and pants', calculation: '$25 + $75', result: 100, note: 'Or: 4 units × $25 = $100' },
        { description: 'Add the money left to find starting amount', calculation: '$100 + $30', result: 130 }
      ],
      answer: { value: 130, unit: '$' },
      answerSentence: 'Ben had $130 at first.'
    }
  },

  {
    id: 'p02-toycar-puzzle',
    templateId: 'q03-boardgame-watershooter',
    title: 'Toy Car Discount',
    category: 'ratio-comparison',
    difficulty: 2,

    problem: {
      text: 'David bought a toy car at $6 off. He also bought a puzzle and paid $42 altogether. What was the original price of the toy car, if, before discount, it cost 5 times as much as the puzzle?',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/ratio-comparison/p02-toycar-puzzle.svg`,

    solution: {
      steps: [
        { description: 'Find original total (before discount)', calculation: '$42 + $6', result: 48 },
        { description: 'Toy car = 5 units, Puzzle = 1 unit', calculation: '6 units = $48', result: '6 units' },
        { description: 'Find value of 1 unit', calculation: '$48 ÷ 6', result: 8 },
        { description: 'Find original toy car price (5 units)', calculation: '5 × $8', result: 40 }
      ],
      answer: { value: 40, unit: '$' },
      answerSentence: 'The original price of the toy car was $40.'
    }
  },

  {
    id: 'p03-savings-accounts',
    templateId: 'q11-yana-zach-income',
    title: 'Savings Comparison',
    category: 'ratio-comparison',
    difficulty: 1,

    problem: {
      text: 'Emma and Finn have savings of $9000 together. If Finn has $1500 in savings, how many times as much savings as Finn does Emma have?',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/ratio-comparison/p03-savings-accounts.svg`,

    solution: {
      steps: [
        { description: 'Find Emma\'s savings', calculation: '$9000 - $1500', result: 7500 },
        { description: 'Find how many times more', calculation: '$7500 ÷ $1500', result: 5 }
      ],
      answer: { value: 5, unit: 'times' },
      answerSentence: 'Emma has 5 times as much savings as Finn.'
    }
  },

  // ==========================================
  // CATEGORY 2: PART-WHOLE (3 problems)
  // ==========================================

  {
    id: 'p04-erasers-rulers',
    templateId: 'q02-cards-stamps',
    title: 'Erasers and Rulers',
    category: 'part-whole',
    difficulty: 1,

    problem: {
      text: 'Grace had $18. After paying for 4 erasers and some rulers, she had $2 left. If each eraser cost $2 and each ruler cost $1, find the number of rulers she bought.',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/part-whole/p04-erasers-rulers.svg`,

    solution: {
      steps: [
        { description: 'Find total spent', calculation: '$18 - $2', result: 16 },
        { description: 'Find cost of 4 erasers', calculation: '4 × $2', result: 8 },
        { description: 'Find cost of rulers', calculation: '$16 - $8', result: 8 },
        { description: 'Find number of rulers', calculation: '$8 ÷ $1', result: 8 }
      ],
      answer: { value: 8, unit: 'rulers' },
      answerSentence: 'She bought 8 rulers.'
    }
  },

  {
    id: 'p05-phone-internet',
    templateId: 'q05-electricity-water',
    title: 'Monthly Bills',
    category: 'part-whole',
    difficulty: 1,

    problem: {
      text: 'Each month Kim pays bills for phone and internet. If she pays $45 a month for phone, and $840 a year for phone and internet together, find the amount of money she pays for internet each month.',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/part-whole/p05-phone-internet.svg`,

    solution: {
      steps: [
        { description: 'Find monthly total', calculation: '$840 ÷ 12', result: 70 },
        { description: 'Find monthly internet bill', calculation: '$70 - $45', result: 25 }
      ],
      answer: { value: 25, unit: '$' },
      answerSentence: 'She pays $25 for internet each month.'
    }
  },

  {
    id: 'p06-jar-candy',
    templateId: 'q23-tin-cookies',
    title: 'Candy Boxes',
    category: 'part-whole',
    difficulty: 2,

    problem: {
      text: 'The total mass of a jar containing 15 boxes of candy is 4050 g. The mass of the jar is 300 g. If each empty box has a mass of 10 g, what is the mass of candy inside each box?',
      context: 'mass'
    },

    barModelSvg: `${SVG_BASE}/part-whole/p06-jar-candy.svg`,

    solution: {
      steps: [
        { description: 'Find mass of 15 boxes with candy', calculation: '4050 - 300', result: 3750 },
        { description: 'Find mass of each box with candy', calculation: '3750 ÷ 15', result: 250 },
        { description: 'Find mass of candy per box', calculation: '250 - 10', result: 240 }
      ],
      answer: { value: 240, unit: 'g' },
      answerSentence: 'The mass of candy inside each box is 240 g.'
    }
  },

  // ==========================================
  // CATEGORY 3: COMPARISON-DIFFERENCE (2 problems)
  // ==========================================

  {
    id: 'p07-gym-memberships',
    templateId: 'q04-streaming-subscriptions',
    title: 'Gym Memberships',
    category: 'comparison-difference',
    difficulty: 2,

    problem: {
      text: 'Amy and Bob bought gym memberships and paid $108 altogether for the year. If Bob subscribed for 8 more months than Amy and paid $24 more than her, find the number of months that Amy subscribed for.',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/comparison-difference/p07-gym-memberships.svg`,

    solution: {
      steps: [
        { description: 'Find cost per month', calculation: '$24 ÷ 8', result: 3, note: '8 extra months cost $24 more' },
        { description: 'Remove the extra $24 to make amounts equal', calculation: '$108 - $24', result: 84 },
        { description: 'Find 2 equal parts', calculation: '$84 ÷ 2', result: 42, note: '2 units = $84, so 1 unit = $42' },
        { description: 'Find number of months Amy subscribed', calculation: '$42 ÷ $3', result: 14 }
      ],
      answer: { value: 14, unit: 'months' },
      answerSentence: 'Amy subscribed for 14 months.'
    }
  },

  {
    id: 'p08-siblings-savings',
    templateId: 'q07-mia-neil-olivia',
    title: 'Three Siblings\' Savings',
    category: 'comparison-difference',
    difficulty: 2,

    problem: {
      text: 'Alex, Beth and Chris had a total of $160. Beth had $8 more than Alex. Chris had 5 times as much money as Beth. How much money had Alex?',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/comparison-difference/p08-siblings-savings.svg`,

    solution: {
      steps: [
        { description: 'If Alex had $8 more, all would be multiples of Beth', calculation: '$160 + $8', result: 168, note: 'Alex=1 unit, Beth=1 unit, Chris=5 units = 7 units total' },
        { description: 'Find value of 1 unit (Beth)', calculation: '$168 ÷ 7', result: 24 },
        { description: 'Beth = $24', calculation: '1 unit = $24', result: 24 },
        { description: 'Alex = Beth - $8', calculation: '$24 - $8', result: 16 }
      ],
      answer: { value: 16, unit: '$' },
      answerSentence: 'Alex had $16.'
    }
  },

  // ==========================================
  // CATEGORY 4: BEFORE-AFTER (4 problems)
  // ==========================================

  {
    id: 'p09-marbles-friends',
    templateId: 'q09-qi-maria-crayons',
    title: 'Borrowing Marbles',
    category: 'before-after',
    difficulty: 2,

    problem: {
      text: 'Lily had 2 times as many marbles as Maya. After borrowing some marbles from Maya, Lily now has 5 times as many marbles as Maya. If they have 180 marbles altogether, how many marbles did Lily borrow from Maya?',
      context: 'marbles'
    },

    barModelSvg: `${SVG_BASE}/before-after/p09-marbles-friends.svg`,

    solution: {
      steps: [
        { description: 'BEFORE: Lily = 2 units, Maya = 1 unit, Total = 3 units', calculation: '180 ÷ 3', result: 60, note: '1 unit = 60 marbles' },
        { description: 'Maya had 60 marbles at first', calculation: '1 × 60', result: 60 },
        { description: 'AFTER: Lily = 5 units, Maya = 1 unit, Total = 6 units', calculation: '180 ÷ 6', result: 30, note: '1 unit now = 30 marbles' },
        { description: 'Maya has 30 marbles left', calculation: '1 × 30', result: 30 },
        { description: 'Marbles borrowed', calculation: '60 - 30', result: 30 }
      ],
      answer: { value: 30, unit: 'marbles' },
      answerSentence: 'Lily borrowed 30 marbles from Maya.'
    }
  },

  {
    id: 'p10-trading-cards',
    templateId: 'q10-tina-jill-jack-stickers',
    title: 'Trading Cards Transfer',
    category: 'before-after',
    difficulty: 3,

    problem: {
      text: 'Noah had 3 times as many trading cards as Olivia while Peter had 4 times as many cards as Olivia. After Noah gave 12 cards away and Peter gave 36 cards to Olivia, they each had the same number of cards. How many cards had Peter at first?',
      context: 'cards'
    },

    barModelSvg: `${SVG_BASE}/before-after/p10-trading-cards.svg`,

    solution: {
      steps: [
        { description: 'After transfers, Noah loses 12, Peter loses 36 to Olivia', calculation: 'Noah: 3u - 12, Peter: 4u - 36, Olivia: 1u + 36', result: 'equal' },
        { description: 'For Noah and Peter to be equal after transfers', calculation: '3u - 12 = 4u - 36', result: 'u = 24' },
        { description: 'Find 1 unit', calculation: '36 - 12 = 24 (difference in what they gave)', result: 24 },
        { description: 'Peter at first = 4 units', calculation: '4 × 24', result: 96 }
      ],
      answer: { value: 96, unit: 'cards' },
      answerSentence: 'Peter had 96 trading cards at first.'
    }
  },

  {
    id: 'p11-shopping-purchases',
    templateId: 'q15-jeremy-ryan-money',
    title: 'Shopping Purchases',
    category: 'before-after',
    difficulty: 3,

    problem: {
      text: 'Quinn had 3 times as much money as Rachel. After Quinn bought a tablet for $185 and Rachel bought a book for $20, Rachel had 2 times as much money as Quinn. How much money had Quinn at first?',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/before-after/p11-shopping-purchases.svg`,

    solution: {
      steps: [
        { description: 'BEFORE: Quinn = 3 units, Rachel = 1 unit', calculation: 'Quinn = 3u, Rachel = 1u', result: 'ratio 3:1' },
        { description: 'AFTER: Quinn left = 3u - $185, Rachel left = 1u - $20', calculation: 'Rachel left = 2 × Quinn left', result: 'ratio 1:2' },
        { description: 'Set up equation: 1u - 20 = 2(3u - 185)', calculation: '1u - 20 = 6u - 370', result: 'equation' },
        { description: 'Solve: 5u = 350', calculation: '370 - 20 = 350', result: 350 },
        { description: 'Find 1 unit', calculation: '$350 ÷ 5', result: 70 },
        { description: 'Quinn at first = 3 units', calculation: '3 × $70', result: 210 }
      ],
      answer: { value: 210, unit: '$' },
      answerSentence: 'Quinn had $210 at first.'
    }
  },

  {
    id: 'p12-father-daughter-age',
    templateId: 'q17-mom-son-age',
    title: 'Age Problem',
    category: 'before-after',
    difficulty: 2,

    problem: {
      text: 'A father is 4 times as old as his daughter. 8 years later, the father will be 3 times as old as his daughter. How old is the daughter now?',
      context: 'age'
    },

    barModelSvg: `${SVG_BASE}/before-after/p12-father-daughter-age.svg`,

    solution: {
      steps: [
        { description: 'NOW: Father = 4 units, Daughter = 1 unit', calculation: 'Father = 4u, Daughter = 1u', result: 'ratio 4:1' },
        { description: 'IN 8 YEARS: Both add 8', calculation: 'Father = 4u + 8, Daughter = 1u + 8', result: '+8 each' },
        { description: 'New ratio is 3:1, so Father = 3 × Daughter', calculation: '4u + 8 = 3(1u + 8)', result: 'equation' },
        { description: 'Solve: 4u + 8 = 3u + 24', calculation: '1u = 16', result: 16 }
      ],
      answer: { value: 16, unit: 'years old' },
      answerSentence: 'The daughter is 16 years old now.'
    }
  },

  // ==========================================
  // CATEGORY 5: SEQUENTIAL-UNITS (7 problems)
  // ==========================================

  {
    id: 'p13-icecream-promo',
    templateId: 'q06-pizza-promotion',
    title: 'Ice Cream Promotion',
    category: 'sequential-units',
    difficulty: 1,

    problem: {
      text: 'An ice cream shop is having a promotion. Ice creams are normally priced at $6 each. If Sam buys 3 ice creams and gets 1 free, how much does he save on each ice cream in this promotion?',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/sequential-units/p13-icecream-promo.svg`,

    solution: {
      steps: [
        { description: 'Sam pays for 3 ice creams, gets 4', calculation: '$6 × 3', result: 18 },
        { description: 'Effective price per ice cream', calculation: '$18 ÷ 4', result: 4.5 },
        { description: 'Savings per ice cream', calculation: '$6 - $4.50', result: 1.5 }
      ],
      answer: { value: 1.5, unit: '$' },
      answerSentence: 'He saves $1.50 on each ice cream in the promotion.'
    }
  },

  {
    id: 'p14-ribbon-cutting',
    templateId: 'q08-lace-pieces',
    title: 'Selling Ribbon',
    category: 'sequential-units',
    difficulty: 2,

    problem: {
      text: 'Tina had 65 m of ribbon that she divided into pieces of 4 m each. She sold each 4-m piece for $7 and the leftover at a discount. She collected $115 altogether. How much did she sell the leftover ribbon for?',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/sequential-units/p14-ribbon-cutting.svg`,

    solution: {
      steps: [
        { description: 'Divide ribbon into 4m pieces', calculation: '65 ÷ 4', result: '16 R 1', note: '16 pieces, 1m leftover' },
        { description: 'Revenue from 4m pieces', calculation: '16 × $7', result: 112 },
        { description: 'Revenue from leftover', calculation: '$115 - $112', result: 3 }
      ],
      answer: { value: 3, unit: '$' },
      answerSentence: 'She sold the leftover piece for $3.'
    }
  },

  {
    id: 'p15-bracelets-selling',
    templateId: 'q12-keyrings',
    title: 'Selling Bracelets',
    category: 'sequential-units',
    difficulty: 2,

    problem: {
      text: 'A craftsman made some bracelets. He gave away 18 defective bracelets and sold the rest at 6 for $8. If he received $400, how many bracelets had he made?',
      context: 'items'
    },

    barModelSvg: `${SVG_BASE}/sequential-units/p15-bracelets-selling.svg`,

    solution: {
      steps: [
        { description: 'Find number of sets sold', calculation: '$400 ÷ $8', result: 50 },
        { description: 'Find total bracelets sold', calculation: '50 × 6', result: 300 },
        { description: 'Add defective bracelets', calculation: '300 + 18', result: 318 }
      ],
      answer: { value: 318, unit: 'bracelets' },
      answerSentence: 'He had made 318 bracelets.'
    }
  },

  {
    id: 'p16-pencil-packs',
    templateId: 'q13-folders-packs',
    title: 'Pencil Packs',
    category: 'sequential-units',
    difficulty: 2,

    problem: {
      text: 'A box contains 108 pencils. A shop owner bought 25 boxes of pencils and divided the pencils into packs of 9. If he sold each pack for $4 and the remaining pencils for 50 cents each, find the sum of money that the shop owner got.',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/sequential-units/p16-pencil-packs.svg`,

    solution: {
      steps: [
        { description: 'Find total pencils', calculation: '25 × 108', result: 2700 },
        { description: 'Divide into packs of 9', calculation: '2700 ÷ 9', result: 300, note: '300 packs, 0 remaining' },
        { description: 'Revenue from packs', calculation: '300 × $4', result: 1200 },
        { description: 'No remaining pencils', calculation: '0 × $0.50', result: 0 },
        { description: 'Total revenue', calculation: '$1200 + $0', result: 1200 }
      ],
      answer: { value: 1200, unit: '$' },
      answerSentence: 'He got $1200 altogether.'
    }
  },

  {
    id: 'p17-motorcycle-payments',
    templateId: 'q18-truck-instalments',
    title: 'Motorcycle Payments',
    category: 'sequential-units',
    difficulty: 2,

    problem: {
      text: 'Uma paid $6000 upfront for a motorcycle priced at $78,000. She will pay the remaining sum of money by monthly instalments of $500 each. How many years will it take Uma to pay off all the instalments?',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/sequential-units/p17-motorcycle-payments.svg`,

    solution: {
      steps: [
        { description: 'Find remaining amount', calculation: '$78,000 - $6,000', result: 72000 },
        { description: 'Find number of months', calculation: '$72,000 ÷ $500', result: 144 },
        { description: 'Convert to years', calculation: '144 ÷ 12', result: 12 }
      ],
      answer: { value: 12, unit: 'years' },
      answerSentence: 'It will take her 12 years to pay off all the instalments.'
    }
  },

  {
    id: 'p18-bus-fare',
    templateId: 'q20-cab-fare',
    title: 'Bus Fare',
    category: 'sequential-units',
    difficulty: 2,

    problem: {
      text: 'A bus charges $1.50 for the first 1 km and 10 cents for every 200 m after that. How much do you pay for a 5-km ride?',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/sequential-units/p18-bus-fare.svg`,

    solution: {
      steps: [
        { description: 'First 1 km', calculation: '$1.50', result: 1.5 },
        { description: 'Remaining distance', calculation: '5 km - 1 km = 4 km', result: '4000 m' },
        { description: 'Number of 200m segments', calculation: '4000 ÷ 200', result: 20 },
        { description: 'Cost for remaining distance', calculation: '20 × 10¢', result: '200¢ = $2' },
        { description: 'Total fare', calculation: '$1.50 + $2', result: 3.5 }
      ],
      answer: { value: 3.5, unit: '$' },
      answerSentence: 'You pay $3.50 for a 5-km ride.'
    }
  },

  {
    id: 'p19-reading-speed',
    templateId: 'q21-typing-speed',
    title: 'Reading Speed',
    category: 'sequential-units',
    difficulty: 1,

    problem: {
      text: 'Victor reads at a speed of 35 words a minute. If he took 24 minutes to read a chapter, how many words did the chapter have?',
      context: 'words'
    },

    barModelSvg: `${SVG_BASE}/sequential-units/p19-reading-speed.svg`,

    solution: {
      steps: [
        { description: 'Words per minute × minutes', calculation: '35 × 24', result: 840 }
      ],
      answer: { value: 840, unit: 'words' },
      answerSentence: 'The chapter had 840 words.'
    }
  },

  // ==========================================
  // CATEGORY 6: STACKED-RATIO (3 problems)
  // ==========================================

  {
    id: 'p20-hairclips-sharing',
    templateId: 'q14-rubberbands-sharing',
    title: 'Sharing Hair Clips',
    category: 'stacked-ratio',
    difficulty: 2,

    problem: {
      text: 'Wendy had 20 hair clips before she found a packet containing some hair clips. She and her 4 friends then shared the hair clips equally among themselves. If Wendy has 28 hair clips now, how many hair clips did the packet have?',
      context: 'items'
    },

    barModelSvg: `${SVG_BASE}/stacked-ratio/p20-hairclips-sharing.svg`,

    solution: {
      steps: [
        { description: 'Total people sharing', calculation: 'Wendy + 4 friends', result: 5 },
        { description: 'Each person gets 28, find total', calculation: '28 × 5', result: 140 },
        { description: 'Subtract Wendy\'s original hair clips', calculation: '140 - 20', result: 120 }
      ],
      answer: { value: 120, unit: 'hair clips' },
      answerSentence: 'The packet had 120 hair clips.'
    }
  },

  {
    id: 'p21-amusement-park',
    templateId: 'q16-ferris-wheel',
    title: 'Amusement Park Tickets',
    category: 'stacked-ratio',
    difficulty: 1,

    problem: {
      text: '145 children and 105 adults visited an amusement park. If a child ticket cost $8 and an adult ticket cost $15, how much money was collected by the amusement park?',
      context: 'money'
    },

    barModelSvg: `${SVG_BASE}/stacked-ratio/p21-amusement-park.svg`,

    solution: {
      steps: [
        { description: 'Revenue from children', calculation: '145 × $8', result: 1160 },
        { description: 'Revenue from adults', calculation: '105 × $15', result: 1575 },
        { description: 'Total revenue', calculation: '$1160 + $1575', result: 2735 }
      ],
      answer: { value: 2735, unit: '$' },
      answerSentence: 'Total money collected by the amusement park is $2735.'
    }
  },

  {
    id: 'p22-store-visitors',
    templateId: 'q22-airport-travelers',
    title: 'Weekly Store Visitors',
    category: 'stacked-ratio',
    difficulty: 3,

    problem: {
      text: 'The table shows the number of visitors to a store last week: Mon=820, Tue=560, Wed=640, Thu=1200, Fri=?, Sat=?, Sun=?, Total=14,000. There were twice as many visitors on Saturday as on Sunday and twice as many on Friday as on Saturday. How many visitors came on Friday?',
      context: 'people'
    },

    barModelSvg: `${SVG_BASE}/stacked-ratio/p22-store-visitors.svg`,

    solution: {
      steps: [
        { description: 'Find Mon-Thu total', calculation: '820 + 560 + 640 + 1200', result: 3220 },
        { description: 'Find Fri-Sun total', calculation: '14,000 - 3,220', result: 10780 },
        { description: 'Set up ratio: Sun=1u, Sat=2u, Fri=4u', calculation: '7 units = 10,780', result: '7 units' },
        { description: 'Find 1 unit', calculation: '10,780 ÷ 7', result: 1540 },
        { description: 'Friday = 4 units', calculation: '4 × 1540', result: 6160 }
      ],
      answer: { value: 6160, unit: 'visitors' },
      answerSentence: 'There were 6160 visitors on Friday.'
    }
  },

  // ==========================================
  // CATEGORY 7: AREA-GRID (1 problem)
  // ==========================================

  {
    id: 'p23-wall-tiles',
    templateId: 'q19-floor-tiles',
    title: 'Wall Tiles',
    category: 'area-grid',
    difficulty: 2,

    problem: {
      text: 'A wall measuring 800 cm by 600 cm is being tiled using 200-cm² tiles. If each 200-cm² tile costs $3, how much will it cost to tile the wall?',
      context: 'area'
    },

    barModelSvg: `${SVG_BASE}/area-grid/p23-wall-tiles.svg`,

    solution: {
      steps: [
        { description: 'Find wall area', calculation: '800 × 600', result: 480000, note: 'Area in cm²' },
        { description: 'Find number of tiles needed', calculation: '480,000 ÷ 200', result: 2400 },
        { description: 'Find total cost', calculation: '2400 × $3', result: 7200 }
      ],
      answer: { value: 7200, unit: '$' },
      answerSentence: 'Cost of tiling the wall is $7200.'
    }
  }

];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get all practice problems in a specific category
 */
export function getPracticeProblemsByCategory(category: ProblemCategory): PracticeWordProblem[] {
  return PRACTICE_WORD_PROBLEMS.filter(p => p.category === category);
}

/**
 * Get practice problems by difficulty level
 */
export function getPracticeProblemsByDifficulty(difficulty: 1 | 2 | 3): PracticeWordProblem[] {
  return PRACTICE_WORD_PROBLEMS.filter(p => p.difficulty === difficulty);
}

/**
 * Get a practice problem by its ID
 */
export function getPracticeProblemById(id: string): PracticeWordProblem | undefined {
  return PRACTICE_WORD_PROBLEMS.find(p => p.id === id);
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
 * Get count of practice problems per category
 */
export function getPracticeProblemCountByCategory(): Record<ProblemCategory, number> {
  const counts = {} as Record<ProblemCategory, number>;
  for (const category of getCategoriesInOrder()) {
    counts[category] = getPracticeProblemsByCategory(category).length;
  }
  return counts;
}

// ============================================
// EXPORTS
// ============================================

export default PRACTICE_WORD_PROBLEMS;
