import type { QuestionBank } from './types.js';

/**
 * Pre-generated question bank for P5 Four Operations Word Problems
 *
 * Bar model word problems require accurate visual representations that AI cannot
 * reliably generate on the fly. Each question has a corresponding SVG bar model.
 *
 * Structure:
 * - Intro (1 question): Introduction to bar models
 * - Section 0 (8 questions): Two-step word problems
 * - Section 1 (6 questions): Comparison bar model problems
 * - Section 2 (4 questions): Complex multi-step problems
 *
 * Total: 19 questions
 */

const SVG_BASE = '/curriculum-content/P5/Maths/bar-model-svgs/learn';

export const P5_MATH_FOUR_OPERATIONS_WORD_PROBLEMS_QUESTION_BANK: QuestionBank = [

  // ============================================
  // INTRO SECTION (-1)
  // ============================================
  {
    sectionIndex: -1,
    questions: [
      {
        questionId: "p5-wp-intro-q1",
        problemStatement: `### Understanding Bar Models

Bar models help us visualize word problems. Look at this scenario:

**"Ahmad has 3 times as many stickers as Bella. Together they have 120 stickers."**

Which bar model correctly represents this problem?

A) Two equal bars, each showing 60

B) One bar with 3 equal parts for Ahmad, one bar with 1 part for Bella (same size parts)

C) One bar showing 120, another showing 40

D) Two bars of random different sizes`,
        hintImagePath: "",
        correctAnswer: "B",
        stepByStepSolution: [
          {
            stepNumber: 1,
            text: "The problem says Ahmad has '3 times as many' as Bella. This tells us we need to show a ratio of 3:1."
          },
          {
            stepNumber: 2,
            text: "In a bar model, we use UNITS to represent equal parts. If Bella has 1 unit, Ahmad has 3 units."
          },
          {
            stepNumber: 3,
            text: "Option B shows exactly this: Ahmad's bar has 3 equal parts, Bella's bar has 1 part of the same size."
          },
          {
            stepNumber: 4,
            text: "The correct answer is B. With this model, we can see that 4 units = 120, so 1 unit = 30."
          }
        ]
      }
    ]
  },

  // ============================================
  // SECTION 0: TWO-STEP WORD PROBLEMS
  // ============================================
  {
    sectionIndex: 0,
    questions: [
      // Q1: Based on Notes Q1 (ratio-comparison) - T-shirt & Skirt → Notebook & Pen
      {
        questionId: "p5-wp-s0-q1",
        problemStatement: `### Notebook and Pen

A notebook costs \\$8 and a pen costs 3 times as much as the notebook. If Mei Ling has \\$15 left after buying the notebook and the pen, how much money did she have at first?`,
        hintImagePath: `${SVG_BASE}/s0-q1-notebook-pen.svg`,
        correctAnswer: 47,
        stepByStepSolution: [
          {
            stepNumber: 1,
            text: "Identify the costs: Notebook = $8 (1 unit), Pen = 3 times notebook = 3 units."
          },
          {
            stepNumber: 2,
            text: "Total cost = Notebook + Pen = 1 unit + 3 units = 4 units = 4 × $8 = $32."
          },
          {
            stepNumber: 3,
            text: "She has $15 left after paying, so: Money at first = Total spent + Money left = $32 + $15 = $47."
          },
          {
            stepNumber: 4,
            text: "Mei Ling had $47 at first."
          }
        ]
      },

      // Q2: Based on Notes Q3 (ratio-comparison) - Board game → Video game
      {
        questionId: "p5-wp-s0-q2",
        problemStatement: `### Video Game Discount

Ryan bought a video game at \\$12 off. He also bought a controller and paid \\$78 altogether. What was the original price of the video game, if, before discount, it cost 5 times as much as the controller?`,
        hintImagePath: `${SVG_BASE}/s0-q2-video-game.svg`,
        correctAnswer: 75,
        stepByStepSolution: [
          {
            stepNumber: 1,
            text: "Find the original total (before discount): $78 + $12 = $90."
          },
          {
            stepNumber: 2,
            text: "Video game = 5 units, Controller = 1 unit. Total = 6 units = $90."
          },
          {
            stepNumber: 3,
            text: "Find value of 1 unit: $90 ÷ 6 = $15."
          },
          {
            stepNumber: 4,
            text: "Original video game price = 5 units = 5 × $15 = $75."
          }
        ]
      },

      // Q3: Based on Notes Q11 (ratio-comparison) - Income → Savings
      {
        questionId: "p5-wp-s0-q3",
        problemStatement: `### Father and Son Savings

Mr Tan and his son have savings of \\$4500 altogether. If his son has saved \\$900, how many times as much savings as his son does Mr Tan have?`,
        hintImagePath: `${SVG_BASE}/s0-q3-savings.svg`,
        correctAnswer: 4,
        stepByStepSolution: [
          {
            stepNumber: 1,
            text: "Find Mr Tan's savings: $4500 - $900 = $3600."
          },
          {
            stepNumber: 2,
            text: "Find how many times more: $3600 ÷ $900 = 4."
          },
          {
            stepNumber: 3,
            text: "Mr Tan has 4 times as much savings as his son."
          },
          {
            stepNumber: 4,
            text: "Check: Son ($900) × 4 = $3600 (Mr Tan). Total = $900 + $3600 = $4500. ✓"
          }
        ]
      },

      // Q4: Based on Notes Q2 (part-whole) - Cards & Stamps → Books & Stickers
      {
        questionId: "p5-wp-s0-q4",
        problemStatement: `### Books and Stickers

Aisha had \\$20. After paying for 4 books and some stickers, she had \\$4 left. If each book cost \\$3 and each sticker cost \\$1, find the number of stickers she bought.`,
        hintImagePath: `${SVG_BASE}/s0-q4-books-stickers.svg`,
        correctAnswer: 4,
        stepByStepSolution: [
          {
            stepNumber: 1,
            text: "Find total spent: $20 - $4 = $16."
          },
          {
            stepNumber: 2,
            text: "Find cost of 4 books: 4 × $3 = $12."
          },
          {
            stepNumber: 3,
            text: "Find cost of stickers: $16 - $12 = $4."
          },
          {
            stepNumber: 4,
            text: "Find number of stickers: $4 ÷ $1 = 4 stickers."
          }
        ]
      },

      // Q5: Based on Notes Q5 (part-whole) - Electricity & Water → Internet & Phone
      {
        questionId: "p5-wp-s0-q5",
        problemStatement: `### Monthly Bills

Each month Mrs Wong pays bills for internet and phone. If she pays \\$45 a month for internet, and \\$900 a year for internet and phone together, find the amount of money she pays for phone each month.`,
        hintImagePath: `${SVG_BASE}/s0-q5-bills.svg`,
        correctAnswer: 30,
        stepByStepSolution: [
          {
            stepNumber: 1,
            text: "Find monthly total: $900 ÷ 12 = $75 per month."
          },
          {
            stepNumber: 2,
            text: "Find monthly phone bill: $75 - $45 = $30."
          },
          {
            stepNumber: 3,
            text: "She pays $30 for phone each month."
          },
          {
            stepNumber: 4,
            text: "Check: $45 (internet) + $30 (phone) = $75/month. $75 × 12 = $900/year. ✓"
          }
        ]
      },

      // Q6: Based on Notes Q6 (sequential-units) - Pizza promo → Burger promo
      {
        questionId: "p5-wp-s0-q6",
        problemStatement: `### Burger Promotion

A fast food restaurant is having a promotion on burgers that are normally priced at \\$6 each. If you buy 2 burgers, you get 1 free. How much does Sam save on each burger in this promotion?`,
        hintImagePath: `${SVG_BASE}/s0-q6-burger.svg`,
        correctAnswer: 2,
        stepByStepSolution: [
          {
            stepNumber: 1,
            text: "Sam pays for 2 burgers but gets 3: 2 × $6 = $12 for 3 burgers."
          },
          {
            stepNumber: 2,
            text: "Effective price per burger: $12 ÷ 3 = $4."
          },
          {
            stepNumber: 3,
            text: "Savings per burger: $6 - $4 = $2."
          },
          {
            stepNumber: 4,
            text: "He saves $2 on each burger in the promotion."
          }
        ]
      },

      // Q7: Based on Notes Q21 (sequential-units) - Typing speed → Reading speed
      {
        questionId: "p5-wp-s0-q7",
        problemStatement: `### Reading Speed

Priya reads at a speed of 40 words per minute. If she took 15 minutes to read a story, how many words did the story have?`,
        hintImagePath: `${SVG_BASE}/s0-q7-reading.svg`,
        correctAnswer: 600,
        stepByStepSolution: [
          {
            stepNumber: 1,
            text: "Reading speed = 40 words per minute."
          },
          {
            stepNumber: 2,
            text: "Time taken = 15 minutes."
          },
          {
            stepNumber: 3,
            text: "Total words = Speed × Time = 40 × 15 = 600 words."
          },
          {
            stepNumber: 4,
            text: "The story had 600 words."
          }
        ]
      },

      // Q8: Based on Notes Q23 (part-whole) - Cookie boxes → Muffin trays
      {
        questionId: "p5-wp-s0-q8",
        problemStatement: `### Muffin Trays

The total mass of a box containing 12 trays of muffins is 2420 g. The mass of the box is 140 g. If each empty tray has a mass of 15 g, what is the mass of muffins in each tray?`,
        hintImagePath: `${SVG_BASE}/s0-q8-muffins.svg`,
        correctAnswer: 175,
        stepByStepSolution: [
          {
            stepNumber: 1,
            text: "Find mass of 12 trays with muffins: 2420 - 140 = 2280 g."
          },
          {
            stepNumber: 2,
            text: "Find mass of each tray with muffins: 2280 ÷ 12 = 190 g."
          },
          {
            stepNumber: 3,
            text: "Find mass of muffins per tray: 190 - 15 = 175 g."
          },
          {
            stepNumber: 4,
            text: "The mass of muffins in each tray is 175 g."
          }
        ]
      }
    ]
  },

  // ============================================
  // SECTION 1: COMPARISON BAR MODEL PROBLEMS
  // ============================================
  {
    sectionIndex: 1,
    questions: [
      // Q1: Based on Notes Q4 (comparison-difference) - Streaming → Gym membership
      {
        questionId: "p5-wp-s1-q1",
        problemStatement: `### Gym Memberships

Kai and Lin bought monthly gym memberships and paid \\$144 altogether for the year. If Lin attended for 8 more months than Kai and paid \\$32 more than him, find the number of months that Kai had his membership.`,
        hintImagePath: `${SVG_BASE}/s1-q1-gym.svg`,
        correctAnswer: 14,
        stepByStepSolution: [
          {
            stepNumber: 1,
            text: "Find cost per month: $32 ÷ 8 months = $4 per month."
          },
          {
            stepNumber: 2,
            text: "Remove the extra $32 to make amounts equal: $144 - $32 = $112."
          },
          {
            stepNumber: 3,
            text: "Find 2 equal parts: $112 ÷ 2 = $56 each."
          },
          {
            stepNumber: 4,
            text: "Find number of months Kai had membership: $56 ÷ $4 = 14 months."
          }
        ]
      },

      // Q2: Based on Notes Q7 (comparison-difference) - Mia/Neil/Olivia → Emma/Liam/Sophie
      {
        questionId: "p5-wp-s1-q2",
        problemStatement: `### Three Friends' Pocket Money

Emma, Liam and Sophie had a total of \\$200. Liam had \\$10 more than Emma. Sophie had 4 times as much money as Liam. How much money did Emma have?`,
        hintImagePath: `${SVG_BASE}/s1-q2-pocket-money.svg`,
        correctAnswer: 25,
        stepByStepSolution: [
          {
            stepNumber: 1,
            text: "If Emma had $10 more, she would equal Liam. Adjusted total: $200 + $10 = $210."
          },
          {
            stepNumber: 2,
            text: "Now: Emma = 1 unit, Liam = 1 unit, Sophie = 4 units. Total = 6 units."
          },
          {
            stepNumber: 3,
            text: "Find 1 unit: $210 ÷ 6 = $35. This is Liam's amount."
          },
          {
            stepNumber: 4,
            text: "Emma = Liam - $10 = $35 - $10 = $25."
          },
          {
            stepNumber: 5,
            text: "Check: Emma=$25, Liam=$35, Sophie=4×$35=$140. Total=$25+$35+$140=$200 ✓"
          }
        ]
      },

      // Q3: Based on Notes Q9 (before-after) - Crayons → Markers
      {
        questionId: "p5-wp-s1-q3",
        problemStatement: `### Borrowing Markers

Hafiz had 2 times as many markers as Nurul. After borrowing some markers from Nurul, Hafiz now has 5 times as many markers as Nurul. If they have 180 markers altogether, how many markers did Hafiz borrow from Nurul?`,
        hintImagePath: `${SVG_BASE}/s1-q3-markers.svg`,
        correctAnswer: 30,
        stepByStepSolution: [
          {
            stepNumber: 1,
            text: "BEFORE: Hafiz = 2 units, Nurul = 1 unit. Total = 3 units = 180. So 1 unit = 60 markers."
          },
          {
            stepNumber: 2,
            text: "Nurul had 60 markers at first (1 unit)."
          },
          {
            stepNumber: 3,
            text: "AFTER: Hafiz = 5 units, Nurul = 1 unit. Total = 6 units = 180. So 1 unit now = 30 markers."
          },
          {
            stepNumber: 4,
            text: "Nurul now has 30 markers. Markers borrowed = 60 - 30 = 30 markers."
          }
        ]
      },

      // Q4: Based on Notes Q10 (before-after) - Stickers → Trading cards
      {
        questionId: "p5-wp-s1-q4",
        problemStatement: `### Trading Card Transfers

Amy had 3 times as many trading cards as Ben while Chloe had 4 times as many as Ben. After Amy gave away 15 cards and Chloe gave 45 cards to Ben, they each had the same number of cards. How many cards did Chloe have at first?`,
        hintImagePath: `${SVG_BASE}/s1-q4-cards.svg`,
        correctAnswer: 120,
        stepByStepSolution: [
          {
            stepNumber: 1,
            text: "BEFORE: Amy = 3 units, Ben = 1 unit, Chloe = 4 units."
          },
          {
            stepNumber: 2,
            text: "AFTER: Amy loses 15, Chloe loses 45 to Ben. Amy and Chloe end up equal."
          },
          {
            stepNumber: 3,
            text: "Difference between Chloe and Amy before = 4 - 3 = 1 unit. After transfers, this difference disappears."
          },
          {
            stepNumber: 4,
            text: "1 unit = difference in what they gave away = 45 - 15 = 30. So 1 unit = 30 cards."
          },
          {
            stepNumber: 5,
            text: "Chloe at first = 4 units = 4 × 30 = 120 cards."
          }
        ]
      },

      // Q5: Based on Notes Q15 (before-after) - Camera & Jersey → Phone & Watch
      {
        questionId: "p5-wp-s1-q5",
        problemStatement: `### Shopping Purchases

David had 3 times as much money as Sarah. After David bought a phone for \\$150 and Sarah bought a watch for \\$30, Sarah had 2 times as much money as David. How much money did David have at first?`,
        hintImagePath: `${SVG_BASE}/s1-q5-shopping.svg`,
        correctAnswer: 162,
        stepByStepSolution: [
          {
            stepNumber: 1,
            text: "BEFORE: David = 3 units, Sarah = 1 unit."
          },
          {
            stepNumber: 2,
            text: "AFTER: David left = 3u - $150, Sarah left = 1u - $30. Sarah left = 2 × David left."
          },
          {
            stepNumber: 3,
            text: "Equation: 1u - 30 = 2(3u - 150) → 1u - 30 = 6u - 300."
          },
          {
            stepNumber: 4,
            text: "Solve: 300 - 30 = 6u - 1u → 270 = 5u → 1 unit = $54."
          },
          {
            stepNumber: 5,
            text: "David at first = 3 units = 3 × $54 = $162. Check: David left=$12, Sarah left=$24. Is $24 = 2×$12? ✓"
          }
        ]
      },

      // Q6: Based on Notes Q17 (before-after) - Mom & Son age → Dad & Daughter age
      {
        questionId: "p5-wp-s1-q6",
        problemStatement: `### Age Problem

A father is 4 times as old as his daughter. 8 years later, the father will be 2 times as old as the daughter. How old is the daughter now?`,
        hintImagePath: `${SVG_BASE}/s1-q6-age.svg`,
        correctAnswer: 4,
        stepByStepSolution: [
          {
            stepNumber: 1,
            text: "NOW: Father = 4 units, Daughter = 1 unit."
          },
          {
            stepNumber: 2,
            text: "IN 8 YEARS: Father = 4u + 8, Daughter = 1u + 8."
          },
          {
            stepNumber: 3,
            text: "New ratio is 2:1, so Father = 2 × Daughter: 4u + 8 = 2(1u + 8)."
          },
          {
            stepNumber: 4,
            text: "Solve: 4u + 8 = 2u + 16 → 2u = 8 → 1u = 4."
          },
          {
            stepNumber: 5,
            text: "The daughter is 4 years old now. (Father is 16, in 8 years: daughter=12, father=24, ratio 2:1 ✓)"
          }
        ]
      }
    ]
  },

  // ============================================
  // SECTION 2: COMPLEX MULTI-STEP PROBLEMS
  // ============================================
  {
    sectionIndex: 2,
    questions: [
      // Q1: Based on Notes Q8 (sequential-units) - Lace → Ribbon
      {
        questionId: "p5-wp-s2-q1",
        problemStatement: `### Selling Ribbon

Mrs Chen had 65 m of ribbon that she divided into pieces of 4 m each. She sold each 4-m piece for \\$7 and the leftover at a discount. She collected \\$115 altogether. How much did she sell the leftover ribbon for?`,
        hintImagePath: `${SVG_BASE}/s2-q1-ribbon.svg`,
        correctAnswer: 3,
        stepByStepSolution: [
          {
            stepNumber: 1,
            text: "Divide ribbon into 4m pieces: 65 ÷ 4 = 16 remainder 1. So 16 pieces with 1m leftover."
          },
          {
            stepNumber: 2,
            text: "Revenue from 4m pieces: 16 × $7 = $112."
          },
          {
            stepNumber: 3,
            text: "Revenue from leftover: $115 - $112 = $3."
          },
          {
            stepNumber: 4,
            text: "She sold the leftover ribbon (1m) for $3."
          }
        ]
      },

      // Q2: Based on Notes Q12 (sequential-units) - Key rings → Badges
      {
        questionId: "p5-wp-s2-q2",
        problemStatement: `### Selling Badges

A shopkeeper bought some badges from a supplier. He threw away 20 damaged badges and sold the rest at 4 for \\$5. If he received \\$315, how many badges had he bought from the supplier?`,
        hintImagePath: `${SVG_BASE}/s2-q2-badges.svg`,
        correctAnswer: 272,
        stepByStepSolution: [
          {
            stepNumber: 1,
            text: "Find number of sets sold: $315 ÷ $5 = 63 sets."
          },
          {
            stepNumber: 2,
            text: "Find total badges sold: 63 × 4 = 252 badges."
          },
          {
            stepNumber: 3,
            text: "Add damaged badges: 252 + 20 = 272 badges."
          },
          {
            stepNumber: 4,
            text: "He had bought 272 badges from the supplier."
          }
        ]
      },

      // Q3: Based on Notes Q14 (stacked-ratio) - Rubber bands → Paper clips
      {
        questionId: "p5-wp-s2-q3",
        problemStatement: `### Sharing Paper Clips

Wei had 18 paper clips before he found a box containing some paper clips. He and his 4 friends then shared the paper clips equally among themselves. If Wei has 23 paper clips now, how many paper clips did the box have?`,
        hintImagePath: `${SVG_BASE}/s2-q3-paperclips.svg`,
        correctAnswer: 97,
        stepByStepSolution: [
          {
            stepNumber: 1,
            text: "Total people sharing: Wei + 4 friends = 5 people."
          },
          {
            stepNumber: 2,
            text: "Each person gets 23. Total paper clips: 23 × 5 = 115."
          },
          {
            stepNumber: 3,
            text: "Subtract Wei's original paper clips: 115 - 18 = 97."
          },
          {
            stepNumber: 4,
            text: "The box had 97 paper clips."
          }
        ]
      },

      // Q4: Based on Notes Q22 (stacked-ratio) - Airport travelers → Cinema visitors
      {
        questionId: "p5-wp-s2-q4",
        problemStatement: `### Cinema Visitors

The table shows the number of visitors at a cinema last week:
- Mon: 450, Tue: 380, Wed: 520, Thu: 650
- Fri: ?, Sat: ?, Sun: ?
- Total: 7600

There were twice as many visitors on Saturday as on Sunday, and twice as many on Friday as on Saturday. How many visitors came on Friday?`,
        hintImagePath: `${SVG_BASE}/s2-q4-cinema.svg`,
        correctAnswer: 3200,
        stepByStepSolution: [
          {
            stepNumber: 1,
            text: "Find Mon-Thu total: 450 + 380 + 520 + 650 = 2000."
          },
          {
            stepNumber: 2,
            text: "Find Fri-Sun total: 7600 - 2000 = 5600."
          },
          {
            stepNumber: 3,
            text: "Set up ratio: Sun = 1 unit, Sat = 2 units, Fri = 4 units. Total = 7 units."
          },
          {
            stepNumber: 4,
            text: "Find 1 unit: 5600 ÷ 7 = 800."
          },
          {
            stepNumber: 5,
            text: "Friday = 4 units = 4 × 800 = 3200 visitors."
          }
        ]
      }
    ]
  }
];
