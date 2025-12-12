/**
 * P5 Mathematics - Four Operations on Whole Numbers Topic Configuration
 *
 * Chapter 2: Four Operations of Whole Numbers
 * 7 Subtopics covering multiplication, division, order of operations, and word problems.
 *
 * Target audience: Primary 5 students (10-11 years old)
 */

// Type exports
export type FourOperationsTopicId =
  | 'p5-math-four-operations-multiply-10-100-1000'
  | 'p5-math-four-operations-multiply-tens-hundreds-thousands'
  | 'p5-math-four-operations-divide-10-100-1000'
  | 'p5-math-four-operations-divide-tens-hundreds-thousands'
  | 'p5-math-four-operations-order-of-operations'
  | 'p5-math-four-operations-order-with-brackets'
  | 'p5-math-four-operations-word-problems';

// Topic-specific tutor customization
export const P5_FOUR_OPERATIONS_CONFIG = {
  teachingPhilosophy: `You are a friendly and encouraging mathematics tutor for Primary 5 students learning about the four operations on whole numbers.

Teaching Approach:
- Use simple, age-appropriate language suitable for 10-11 year olds
- Guide students to discover patterns in multiplication and division
- Help students understand place value patterns when multiplying/dividing by 10, 100, 1000
- Use visual representations like place value charts and bar models
- Connect to real-world contexts (shopping, sharing items, money)
- Build from concrete examples to abstract rules
- Be patient and encouraging - operations with large numbers can be intimidating
- Emphasize checking answers and estimation strategies

**Text-to-Speech Guidelines:**
- Say "times" or "multiplied by" instead of using symbols
- Say "divided by" clearly
- For order of operations: say "brackets first, then multiplication and division, then addition and subtraction"
- Say "left to right" when explaining order
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding.
IMPORTANT: Use the technical name (e.g., "placeValueChart", "barModel") in the toolName field, NOT the display name.

Available tools for this topic:
- placeValueChart: For showing how digits shift when multiplying/dividing by 10, 100, 1000
- barModel: For word problems - showing comparisons, part-whole relationships, and multi-step problems
- numberLine: For showing number relationships and jumps

Tool usage guidelines:
- Use placeValueChart when teaching multiplication/division by 10, 100, 1000 to show digit shifting
- Use barModel for word problems to help students visualize relationships
- Always include a helpful caption explaining what to look at in the visualization`
};

// Available math tools for this topic
export const P5_FOUR_OPERATIONS_MATH_TOOLS = [
  "placeValueChart",
  "barModel",
  "numberLine"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const P5_MATH_FOUR_OPERATIONS_SUBTOPICS = {

  // ========================================
  // SUBTOPIC 1: Multiplying by 10, 100, 1000
  // ========================================
  'p5-math-four-operations-multiply-10-100-1000': {
    displayName: 'Multiplying by 10, 100 and 1000',
    topicName: 'multiplying whole numbers by 10, 100, and 1000',

    progressionStructure: {
      sections: [
        {
          id: "multiply-by-10",
          title: "Multiplying by 10",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly multiplies single and multi-digit numbers by 10, explaining the pattern in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multiplications by 10",
                "Can explain the zero-adding pattern"
              ],
              qualitative: [
                "Correctly multiplies: 3 × 10 = 30, 12 × 10 = 120, 245 × 10 = 2450",
                "Explains that multiplying by 10 adds one zero",
                "Understands digits shift one place to the left",
                "Can work with 2-digit and 3-digit numbers confidently"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with occasional errors",
                "May need reminding about the pattern"
              ],
              qualitative: [
                "Knows the pattern but sometimes miscounts",
                "Can do single-digit × 10 but struggles with larger numbers",
                "Needs visual support to see digit shifting"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot identify the pattern"
              ],
              qualitative: [
                "Does not see the pattern of adding zeros",
                "Tries to multiply each digit separately the long way",
                "Confuses × 10 with + 10"
              ]
            }
          },
          learningObjectives: [
            "Multiply single-digit numbers by 10",
            "Multiply multi-digit numbers by 10",
            "Understand that × 10 shifts digits one place left",
            "Recognize the pattern: n × 10 adds one zero"
          ],
          relevantFormulas: [
            "1 × 10 = 10",
            "3 × 10 = 30 (since 1 × 10 = 10, then 3 × 10 = 30)",
            "12 × 10 = 120",
            "245 × 10 = 2450"
          ],
          availableTools: ["placeValueChart"]
        },
        {
          id: "multiply-by-100-1000",
          title: "Multiplying by 100 and 1000",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["multiply-by-10"],
          masterySignals: "Student correctly multiplies numbers by 100 and 1000, explaining the pattern in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multiplications by 100 and 1000",
                "Can explain the relationship: 100 = 10 × 10, 1000 = 10 × 10 × 10"
              ],
              qualitative: [
                "Correctly states that × 100 adds two zeros",
                "Correctly states that × 1000 adds three zeros",
                "Understands 3 × 100 = 3 × 10 × 10",
                "Can apply pattern to any whole number"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with errors on larger numbers",
                "May confuse 100 and 1000 patterns"
              ],
              qualitative: [
                "Knows the pattern but miscounts zeros",
                "Can do × 100 but struggles with × 1000",
                "Needs prompting about the relationship to × 10"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot apply the pattern"
              ],
              qualitative: [
                "Does not know how many zeros to add",
                "Cannot connect × 100 to × 10 × 10",
                "Adds wrong number of zeros"
              ]
            }
          },
          learningObjectives: [
            "Multiply numbers by 100 by adding two zeros",
            "Multiply numbers by 1000 by adding three zeros",
            "Understand that 100 = 10 × 10 and 1000 = 10 × 10 × 10",
            "Apply patterns: 245 × 100 = 24,500 and 245 × 1000 = 245,000"
          ],
          relevantFormulas: [
            "1 × 100 = 100, 3 × 100 = 300, 12 × 100 = 1200, 245 × 100 = 24,500",
            "1 × 1000 = 1000, 3 × 1000 = 3000, 12 × 1000 = 12,000, 245 × 1000 = 245,000",
            "Pattern: × 100 adds TWO zeros, × 1000 adds THREE zeros"
          ],
          availableTools: ["placeValueChart"]
        }
      ]
    },

    learningObjectives: [
      "Multiply whole numbers by 10 using place value patterns",
      "Multiply whole numbers by 100 using place value patterns",
      "Multiply whole numbers by 1000 using place value patterns",
      "Understand the relationship between × 10, × 100, and × 1000"
    ],

    keyFormulas: `
Multiplying by 10, 100, 1000:
- × 10: Add ONE zero (digits shift left 1 place)
  Examples: 3 × 10 = 30, 12 × 10 = 120, 245 × 10 = 2,450

- × 100: Add TWO zeros (digits shift left 2 places)
  Examples: 3 × 100 = 300, 12 × 100 = 1,200, 245 × 100 = 24,500

- × 1000: Add THREE zeros (digits shift left 3 places)
  Examples: 3 × 1000 = 3,000, 12 × 1000 = 12,000, 245 × 1000 = 245,000

Key Pattern:
- 100 = 10 × 10, so × 100 = × 10 × 10
- 1000 = 10 × 10 × 10, so × 1000 = × 10 × 10 × 10
    `
  },

  // ========================================
  // SUBTOPIC 2: Multiplying by Tens, Hundreds, Thousands
  // ========================================
  'p5-math-four-operations-multiply-tens-hundreds-thousands': {
    displayName: 'Multiplying by Tens, Hundreds and Thousands',
    topicName: 'multiplying by multiples like 20, 60, 400, 600',

    progressionStructure: {
      sections: [
        {
          id: "multiply-by-tens",
          title: "Multiplying by 20, 30, 40, 50, 60, 70, 80, 90",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly multiplies by multiples of 10 using the factor method in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multiplications using factor method",
                "Can explain: 20 = 2 × 10, so multiply by 2, then by 10"
              ],
              qualitative: [
                "Correctly breaks down: 43 × 20 = 43 × 2 × 10 = 86 × 10 = 860",
                "Can work with 2-digit and 3-digit numbers",
                "Uses efficient mental math strategies",
                "Can verify answers"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with calculation errors",
                "Understands strategy but makes arithmetic mistakes"
              ],
              qualitative: [
                "Knows to break down but struggles with multiplication",
                "Forgets to multiply by 10 at the end",
                "Gets confused with larger numbers"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot apply the factor strategy",
                "Multiple calculation errors"
              ],
              qualitative: [
                "Does not know to break 20 into 2 × 10",
                "Tries long multiplication for everything",
                "Makes basic multiplication errors"
              ]
            }
          },
          learningObjectives: [
            "Recognize that 20 = 2 × 10, 30 = 3 × 10, etc.",
            "Multiply by tens: n × 20 = n × 2 × 10",
            "Apply strategy: 43 × 20 = 43 × 2 × 10 = 86 × 10 = 860",
            "Use efficient mental math strategies"
          ],
          relevantFormulas: [
            "43 × 20 = 43 × 2 × 10 = 86 × 10 = 860",
            "134 × 60 = 134 × 6 × 10 = 804 × 10 = 8,040",
            "Strategy: Multiply by the digit, then multiply by 10"
          ],
          availableTools: ["placeValueChart"]
        },
        {
          id: "multiply-by-hundreds-thousands",
          title: "Multiplying by 200, 400, 600... and 2000, 3000...",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["multiply-by-tens"],
          masterySignals: "Student correctly multiplies by multiples of 100 and 1000 using the factor method in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multiplications by hundreds and thousands",
                "Can explain the factor method for larger multipliers"
              ],
              qualitative: [
                "Correctly breaks down: 68 × 400 = 68 × 4 × 100 = 272 × 100 = 27,200",
                "Applies strategy to thousands: 314 × 600 = 314 × 6 × 100 = 188,400",
                "Works confidently with large products",
                "Checks answers using estimation"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with errors in intermediate steps",
                "May confuse × 100 and × 1000 patterns"
              ],
              qualitative: [
                "Can break down but makes multiplication errors",
                "Struggles with very large numbers",
                "Needs prompting to remember the strategy"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot apply the strategy",
                "Multiple errors"
              ],
              qualitative: [
                "Does not know to break 400 into 4 × 100",
                "Gets overwhelmed by large numbers",
                "Makes basic errors"
              ]
            }
          },
          learningObjectives: [
            "Recognize that 400 = 4 × 100, 600 = 6 × 100, etc.",
            "Multiply by hundreds: n × 400 = n × 4 × 100",
            "Apply to thousands: n × 3000 = n × 3 × 1000",
            "Handle large products confidently"
          ],
          relevantFormulas: [
            "68 × 400 = 68 × 4 × 100 = 272 × 100 = 27,200",
            "314 × 600 = 314 × 6 × 100 = 1,884 × 100 = 188,400",
            "Strategy: Multiply by digit, then by 100 or 1000"
          ],
          availableTools: ["placeValueChart"]
        }
      ]
    },

    learningObjectives: [
      "Multiply by multiples of 10 (20, 30, 40, etc.)",
      "Multiply by multiples of 100 (200, 400, 600, etc.)",
      "Multiply by multiples of 1000 (2000, 3000, etc.)",
      "Use factor method for efficient calculation"
    ],

    keyFormulas: `
Multiplying by Tens (20, 30, 40, 50, 60, 70, 80, 90):
- Break into: digit × 10
- Example: 43 × 20 = 43 × 2 × 10 = 86 × 10 = 860

Multiplying by Hundreds (200, 300, 400, 500, 600):
- Break into: digit × 100
- Example: 68 × 400 = 68 × 4 × 100 = 272 × 100 = 27,200

Multiplying by Thousands (2000, 3000, etc.):
- Break into: digit × 1000
- Example: 25 × 3000 = 25 × 3 × 1000 = 75 × 1000 = 75,000

Key Insight:
- Use what we know about × 10, × 100, × 1000
    `
  },

  // ========================================
  // SUBTOPIC 3: Dividing by 10, 100, 1000
  // ========================================
  'p5-math-four-operations-divide-10-100-1000': {
    displayName: 'Dividing by 10, 100 and 1000',
    topicName: 'dividing whole numbers by 10, 100, and 1000',

    progressionStructure: {
      sections: [
        {
          id: "divide-by-10",
          title: "Dividing by 10",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly divides numbers ending in zero by 10, explaining the pattern in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct divisions by 10",
                "Can explain the zero-removing pattern"
              ],
              qualitative: [
                "Correctly divides: 10 ÷ 10 = 1, 100 ÷ 10 = 10, 320 ÷ 10 = 32",
                "Explains that dividing by 10 removes one zero",
                "Understands digits shift one place to the right",
                "Can verify using multiplication"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with occasional errors",
                "May need reminding about the pattern"
              ],
              qualitative: [
                "Knows the pattern but sometimes miscounts",
                "Struggles with larger numbers",
                "Doesn't always connect to multiplication"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot identify the pattern"
              ],
              qualitative: [
                "Does not see the pattern of removing zeros",
                "Tries long division for everything",
                "Confuses ÷ 10 with - 10"
              ]
            }
          },
          learningObjectives: [
            "Divide numbers by 10 by removing one zero",
            "Understand that ÷ 10 shifts digits one place right",
            "Connect to multiplication: if 3 × 10 = 30, then 30 ÷ 10 = 3",
            "Verify answers using multiplication"
          ],
          relevantFormulas: [
            "10 ÷ 10 = 1 (since 1 × 10 = 10)",
            "100 ÷ 10 = 10 (since 10 × 10 = 100)",
            "32,000 ÷ 10 = 3,200",
            "Pattern: ÷ 10 removes ONE zero"
          ],
          availableTools: ["placeValueChart"]
        },
        {
          id: "divide-by-100-1000",
          title: "Dividing by 100 and 1000",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["divide-by-10"],
          masterySignals: "Student correctly divides by 100 and 1000, explaining the pattern in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct divisions by 100 and 1000",
                "Can explain the zero-removing pattern"
              ],
              qualitative: [
                "Correctly states that ÷ 100 removes two zeros",
                "Correctly states that ÷ 1000 removes three zeros",
                "Examples: 32,000 ÷ 100 = 320, 32,000 ÷ 1000 = 32",
                "Can verify using multiplication"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with errors",
                "May confuse 100 and 1000 patterns"
              ],
              qualitative: [
                "Knows the pattern but miscounts zeros removed",
                "Can do ÷ 100 but struggles with ÷ 1000",
                "Needs prompting to check with multiplication"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot apply the pattern"
              ],
              qualitative: [
                "Does not know how many zeros to remove",
                "Cannot connect ÷ 100 to ÷ 10 ÷ 10",
                "Removes wrong number of zeros"
              ]
            }
          },
          learningObjectives: [
            "Divide by 100 by removing two zeros",
            "Divide by 1000 by removing three zeros",
            "Understand that division is the inverse of multiplication",
            "Verify: if 245 × 100 = 24,500, then 24,500 ÷ 100 = 245"
          ],
          relevantFormulas: [
            "100 ÷ 100 = 1, 32,000 ÷ 100 = 320",
            "1000 ÷ 1000 = 1, 32,000 ÷ 1000 = 32",
            "Pattern: ÷ 100 removes TWO zeros, ÷ 1000 removes THREE zeros"
          ],
          availableTools: ["placeValueChart"]
        }
      ]
    },

    learningObjectives: [
      "Divide whole numbers by 10 using place value patterns",
      "Divide whole numbers by 100 using place value patterns",
      "Divide whole numbers by 1000 using place value patterns",
      "Connect division to multiplication as inverse operations"
    ],

    keyFormulas: `
Dividing by 10, 100, 1000:
- ÷ 10: Remove ONE zero (digits shift right 1 place)
  Examples: 30 ÷ 10 = 3, 120 ÷ 10 = 12, 32,000 ÷ 10 = 3,200

- ÷ 100: Remove TWO zeros (digits shift right 2 places)
  Examples: 300 ÷ 100 = 3, 32,000 ÷ 100 = 320

- ÷ 1000: Remove THREE zeros (digits shift right 3 places)
  Examples: 3000 ÷ 1000 = 3, 32,000 ÷ 1000 = 32

Key Pattern:
- Division is the inverse of multiplication
- If 245 × 10 = 2,450, then 2,450 ÷ 10 = 245
    `
  },

  // ========================================
  // SUBTOPIC 4: Dividing by Tens, Hundreds, Thousands
  // ========================================
  'p5-math-four-operations-divide-tens-hundreds-thousands': {
    displayName: 'Dividing by Tens, Hundreds and Thousands',
    topicName: 'dividing by multiples like 20, 60, 80, 600, 3000',

    progressionStructure: {
      sections: [
        {
          id: "divide-by-tens",
          title: "Dividing by 20, 30, 40, 60, 80, 90",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly divides by multiples of 10 using the factor method in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct divisions using factor method",
                "Can explain: 20 = 2 × 10, so divide by 10, then by 2"
              ],
              qualitative: [
                "Correctly applies: 60 ÷ 20 = 60 ÷ 10 ÷ 2 = 6 ÷ 2 = 3",
                "Alternative: 540 ÷ 60 = 540 ÷ 6 ÷ 10 = 90 ÷ 10 = 9",
                "Can choose the more efficient order",
                "Verifies answers using multiplication"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with calculation errors",
                "Understands strategy but makes mistakes"
              ],
              qualitative: [
                "Can break down divisor but struggles with division",
                "Sometimes divides in wrong order and gets confused",
                "Needs prompting to check with multiplication"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot apply the factor strategy",
                "Multiple errors"
              ],
              qualitative: [
                "Does not know to break 20 into 2 × 10",
                "Tries long division for everything",
                "Makes basic division errors"
              ]
            }
          },
          learningObjectives: [
            "Recognize that 20 = 2 × 10, so ÷ 20 = ÷ 10 ÷ 2",
            "Apply: 60 ÷ 20 = 60 ÷ 10 ÷ 2 = 6 ÷ 2 = 3",
            "Alternative method: ÷ digit first, then ÷ 10",
            "Choose the more efficient order"
          ],
          relevantFormulas: [
            "60 ÷ 20 = 60 ÷ 10 ÷ 2 = 6 ÷ 2 = 3",
            "540 ÷ 60 = 540 ÷ 10 ÷ 6 = 54 ÷ 6 = 9",
            "2400 ÷ 80 = 2400 ÷ 10 ÷ 8 = 240 ÷ 8 = 30"
          ],
          availableTools: ["placeValueChart"]
        },
        {
          id: "divide-by-hundreds-thousands",
          title: "Dividing by 600, 700, 3000, 5000...",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["divide-by-tens"],
          masterySignals: "Student correctly divides by multiples of 100 and 1000 using the factor method in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct divisions by hundreds and thousands",
                "Can explain the factor method"
              ],
              qualitative: [
                "Correctly applies: 4800 ÷ 600 = 4800 ÷ 100 ÷ 6 = 48 ÷ 6 = 8",
                "Handles thousands: 21,000 ÷ 3000 = 21,000 ÷ 1000 ÷ 3 = 21 ÷ 3 = 7",
                "Works confidently with large numbers",
                "Verifies answers using multiplication"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with errors",
                "May confuse ÷ 100 and ÷ 1000 steps"
              ],
              qualitative: [
                "Can break down but makes calculation errors",
                "Struggles with very large numbers",
                "Needs prompting to remember the strategy"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot apply the strategy",
                "Multiple errors"
              ],
              qualitative: [
                "Does not know to break 600 into 6 × 100",
                "Gets overwhelmed by large numbers",
                "Makes basic errors"
              ]
            }
          },
          learningObjectives: [
            "Recognize that 600 = 6 × 100, so ÷ 600 = ÷ 100 ÷ 6",
            "Apply: 77,000 ÷ 700 = 77,000 ÷ 100 ÷ 7 = 770 ÷ 7 = 110",
            "Handle thousands: 21,000 ÷ 3000 = 21 ÷ 3 = 7",
            "Choose efficient order for calculations"
          ],
          relevantFormulas: [
            "4800 ÷ 600 = 4800 ÷ 100 ÷ 6 = 48 ÷ 6 = 8",
            "77,000 ÷ 700 = 77,000 ÷ 100 ÷ 7 = 770 ÷ 7 = 110",
            "21,000 ÷ 3000 = 21,000 ÷ 1000 ÷ 3 = 21 ÷ 3 = 7"
          ],
          availableTools: ["placeValueChart"]
        }
      ]
    },

    learningObjectives: [
      "Divide by multiples of 10 (20, 30, 60, 80, etc.)",
      "Divide by multiples of 100 (600, 700, etc.)",
      "Divide by multiples of 1000 (3000, 5000, etc.)",
      "Use factor method for efficient calculation"
    ],

    keyFormulas: `
Dividing by Tens:
- Break into: ÷ 10 ÷ digit OR ÷ digit ÷ 10
- Example: 60 ÷ 20 = 60 ÷ 10 ÷ 2 = 6 ÷ 2 = 3
- Example: 540 ÷ 60 = 540 ÷ 10 ÷ 6 = 54 ÷ 6 = 9

Dividing by Hundreds:
- Break into: ÷ 100 ÷ digit
- Example: 4800 ÷ 600 = 4800 ÷ 100 ÷ 6 = 48 ÷ 6 = 8

Dividing by Thousands:
- Break into: ÷ 1000 ÷ digit
- Example: 21,000 ÷ 3000 = 21,000 ÷ 1000 ÷ 3 = 21 ÷ 3 = 7

Key Insight:
- Order can be flexible: choose what's easier to calculate
    `
  },

  // ========================================
  // SUBTOPIC 5: Order of Operations
  // ========================================
  'p5-math-four-operations-order-of-operations': {
    displayName: 'Order of Operations',
    topicName: 'order of operations with +, -, ×, ÷',

    progressionStructure: {
      sections: [
        {
          id: "add-subtract-left-to-right",
          title: "Addition and Subtraction (Left to Right)",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly evaluates expressions with only + and - by working left to right in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct evaluations working left to right",
                "Consistent application of the rule"
              ],
              qualitative: [
                "Correctly states: work left to right for + and -",
                "Applies: 25 + 32 - 17 = 57 - 17 = 40",
                "Applies: 16 - 12 + 45 - 21 = 4 + 45 - 21 = 49 - 21 = 28",
                "Does not do all + first, then all -"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with occasional order mistakes",
                "May do all + first, then all -"
              ],
              qualitative: [
                "Knows the rule but sometimes forgets",
                "Makes arithmetic errors",
                "Gets confused with longer expressions"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Does not follow left-to-right order"
              ],
              qualitative: [
                "Does not know the left-to-right rule",
                "Does all additions first, then all subtractions",
                "Gets very different answers"
              ]
            }
          },
          learningObjectives: [
            "Understand that + and - have equal priority",
            "Evaluate from left to right",
            "Example: 50 - 20 + 15 = 30 + 15 = 45 (NOT 50 - 35)"
          ],
          relevantFormulas: [
            "Rule: For + and - only, work LEFT to RIGHT",
            "50 - 20 + 15 = 30 + 15 = 45",
            "25 + 32 - 17 = 57 - 17 = 40"
          ],
          availableTools: []
        },
        {
          id: "multiply-divide-left-to-right",
          title: "Multiplication and Division (Left to Right)",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["add-subtract-left-to-right"],
          masterySignals: "Student correctly evaluates expressions with only × and ÷ by working left to right in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct evaluations",
                "Consistent left-to-right application"
              ],
              qualitative: [
                "Correctly states: work left to right for × and ÷",
                "Applies: 24 ÷ 8 × 2 = 3 × 2 = 6",
                "Applies: 8 × 30 ÷ 6 × 5 = 240 ÷ 6 × 5 = 40 × 5 = 200",
                "Does not do all × first, then all ÷"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with occasional errors",
                "May do all × first, then all ÷"
              ],
              qualitative: [
                "Knows the rule but sometimes forgets",
                "Makes arithmetic errors",
                "Gets confused with longer expressions"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Does not follow left-to-right order"
              ],
              qualitative: [
                "Does not know the left-to-right rule",
                "Does all × first, then all ÷",
                "Gets very different answers"
              ]
            }
          },
          learningObjectives: [
            "Understand that × and ÷ have equal priority",
            "Evaluate from left to right",
            "Example: 24 ÷ 8 × 2 = 3 × 2 = 6"
          ],
          relevantFormulas: [
            "Rule: For × and ÷ only, work LEFT to RIGHT",
            "24 ÷ 8 × 2 = 3 × 2 = 6",
            "72 ÷ 9 × 3 ÷ 6 = 8 × 3 ÷ 6 = 24 ÷ 6 = 4"
          ],
          availableTools: []
        },
        {
          id: "mixed-operations",
          title: "Mixed Operations (×, ÷ before +, -)",
          difficulty: "intermediate",
          prerequisites: ["multiply-divide-left-to-right"],
          masterySignals: "Student correctly evaluates mixed expressions by doing × and ÷ before + and - in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct evaluations with proper order",
                "Consistently does × and ÷ before + and -"
              ],
              qualitative: [
                "Correctly states: × and ÷ come before + and -",
                "Applies: 40 + 3 × 20 = 40 + 60 = 100",
                "Can identify which operations to do first",
                "Handles multiple operations correctly"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with occasional priority errors",
                "Sometimes does left to right regardless"
              ],
              qualitative: [
                "Knows the rule but sometimes forgets",
                "Does × and ÷ first but makes arithmetic errors",
                "Gets confused with complex expressions"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Does not follow operation priority"
              ],
              qualitative: [
                "Does not know × and ÷ come before + and -",
                "Evaluates strictly left to right",
                "Gets very different answers"
              ]
            }
          },
          learningObjectives: [
            "Understand that × and ÷ have higher priority than + and -",
            "Evaluate × and ÷ first, then + and -",
            "Example: 40 + 3 × 20 = 40 + 60 = 100"
          ],
          relevantFormulas: [
            "Priority: × and ÷ BEFORE + and -",
            "40 + 3 × 20 = 40 + 60 = 100 (NOT 43 × 20)",
            "Sue had 40 stickers. Amy gave her 3 packs of 20. Total: 40 + 3 × 20 = 100"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Evaluate + and - expressions left to right",
      "Evaluate × and ÷ expressions left to right",
      "Apply priority: × and ÷ before + and -",
      "Solve word problems requiring order of operations"
    ],

    keyFormulas: `
Order of Operations:
1. × and ÷ - work left to right (these come FIRST)
2. + and - - work left to right (these come SECOND)

Key Rules:
- For + and - only: work LEFT to RIGHT
  Example: 50 - 20 + 15 = 30 + 15 = 45

- For × and ÷ only: work LEFT to RIGHT
  Example: 24 ÷ 8 × 2 = 3 × 2 = 6

- Mixed: Do × and ÷ FIRST, then + and -
  Example: 40 + 3 × 20 = 40 + 60 = 100

Word Problem Example:
Sue had 40 stickers. Amy gave her 3 packs of 20 stickers each.
How many stickers did Sue have altogether?
40 + 3 × 20 = 40 + 60 = 100 stickers
    `
  },

  // ========================================
  // SUBTOPIC 6: Order of Operations with Brackets
  // ========================================
  'p5-math-four-operations-order-with-brackets': {
    displayName: 'Order of Operations with Use of Brackets',
    topicName: 'using brackets to change order of operations',

    progressionStructure: {
      sections: [
        {
          id: "brackets-first",
          title: "Brackets Come First",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly evaluates expressions with brackets by doing brackets first in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct evaluations with brackets",
                "Consistently does brackets first"
              ],
              qualitative: [
                "Correctly states: brackets first, then × ÷, then + -",
                "Applies: (16 - 4) ÷ 2 = 12 ÷ 2 = 6",
                "Can explain why brackets change the answer",
                "Handles expressions with multiple operations inside brackets"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with occasional errors",
                "May forget brackets or mishandle operations inside"
              ],
              qualitative: [
                "Knows brackets come first but makes errors inside",
                "Struggles with complex expressions",
                "Needs prompting to remember full order"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Does not handle brackets correctly"
              ],
              qualitative: [
                "Does not know to do brackets first",
                "Ignores brackets",
                "Cannot evaluate inside brackets"
              ]
            }
          },
          learningObjectives: [
            "Understand that brackets have highest priority",
            "Evaluate inside brackets first",
            "Apply: (16 - 4) ÷ 2 = 12 ÷ 2 = 6",
            "Contrast: 16 - 4 ÷ 2 = 16 - 2 = 14 (different!)"
          ],
          relevantFormulas: [
            "Full Order: BRACKETS first, then × ÷, then + -",
            "(16 - 4) ÷ 2 = 12 ÷ 2 = 6",
            "Without brackets: 16 - 4 ÷ 2 = 16 - 2 = 14"
          ],
          availableTools: []
        },
        {
          id: "word-problems-with-brackets",
          title: "Word Problems Requiring Brackets",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["brackets-first"],
          masterySignals: "Student correctly writes and evaluates expressions with brackets for word problems in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions with proper bracket usage",
                "Can write expressions from word problems"
              ],
              qualitative: [
                "Identifies when brackets are needed",
                "Writes: 'Sam had 16 cupcakes, gave away 4, packed rest into 2 boxes' → (16 - 4) ÷ 2",
                "Correctly evaluates multi-step bracket expressions",
                "Can explain why brackets represent the problem correctly"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with errors in expression or evaluation",
                "May forget brackets when needed"
              ],
              qualitative: [
                "Understands word problem but writes expression without needed brackets",
                "Can evaluate given expressions but struggles to write them",
                "Needs guidance to identify when brackets are needed"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot write correct expressions",
                "Multiple errors"
              ],
              qualitative: [
                "Cannot translate word problems to expressions",
                "Does not know when brackets are needed",
                "Cannot evaluate bracket expressions correctly"
              ]
            }
          },
          learningObjectives: [
            "Identify when brackets are needed in word problems",
            "Write expressions using brackets correctly",
            "Solve: 'Samad bought 8 watermelons at $6 each, 7 pineapples at $5 each, and 3 pineapples at $4 each'",
            "Expression: (8 × 6) + (7 × 5) + (3 × 4)"
          ],
          relevantFormulas: [
            "Sam baked 16 cupcakes, gave away 4, packed rest in 2 boxes: (16 - 4) ÷ 2 = 6",
            "Samad's fruits: (8 × $6) + (7 × $5) + (10 - 7) × $4 = $48 + $35 + $12 = $95",
            "Change from $100: $100 - [(8 × $6) + (7 × $5) + (3 × $4)] = $100 - $95 = $5"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Understand that brackets have highest priority",
      "Evaluate expressions with brackets first",
      "Write expressions with brackets for word problems",
      "Solve multi-step problems using brackets"
    ],

    keyFormulas: `
Order with Brackets:
1. BRACKETS - do what's inside first
2. × and ÷ - left to right
3. + and - - left to right

Examples:
- (16 - 4) ÷ 2 = 12 ÷ 2 = 6
- Without brackets: 16 - 4 ÷ 2 = 16 - 2 = 14

Word Problem Examples:
- Sam baked 16 cupcakes. He gave away 4 and packed the rest equally into 2 boxes.
  How many cupcakes in each box?
  (16 - 4) ÷ 2 = 12 ÷ 2 = 6 cupcakes

- Samad bought 8 watermelons ($6 each), 7 pineapples ($5 each), and 3 pineapples ($4 each).
  Total cost: (8 × 6) + (7 × 5) + (3 × 4) = 48 + 35 + 12 = $95
    `
  },

  // ========================================
  // SUBTOPIC 7: Word Problems
  // ========================================
  'p5-math-four-operations-word-problems': {
    displayName: 'Word Problems',
    topicName: 'multi-step word problems with four operations and bar models',

    // Use pre-generated question bank for this subtopic
    // Bar model word problems require accurate SVG visuals that AI cannot generate reliably
    usePreGeneratedQuestions: true,

    progressionStructure: {
      sections: [
        {
          id: "two-step-problems",
          title: "Two-Step Word Problems",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly solves two-step word problems in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions with clear working",
                "Can identify the two steps needed"
              ],
              qualitative: [
                "Correctly identifies given information",
                "Determines correct operations",
                "Shows step-by-step working",
                "Writes answer with correct units"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with some errors",
                "May miss one of the steps"
              ],
              qualitative: [
                "Gets confused about which operation to use",
                "May solve only part of the problem",
                "Needs prompting to identify all steps"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot solve two-step problems",
                "Multiple errors"
              ],
              qualitative: [
                "Cannot identify the steps needed",
                "Uses wrong operations",
                "Cannot translate words to math"
              ]
            }
          },
          learningObjectives: [
            "Identify information given in word problems",
            "Determine operations needed",
            "Break down problems into steps",
            "Show clear working with labels"
          ],
          relevantFormulas: [
            "Mr Yeo: 40 bottles × $33 = $1,320 per box; 18 boxes × $1,320 = $23,760",
            "TV: $480 + ($73 × 12) = $480 + $876 = $1,356",
            "Strategy: Read → Plan → Solve → Check"
          ],
          availableTools: ["barModel"]
        },
        {
          id: "comparison-bar-models",
          title: "Comparison Word Problems with Bar Models",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["two-step-problems"],
          masterySignals: "Student correctly uses bar models to solve comparison problems in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions using bar models",
                "Can draw and interpret bar models"
              ],
              qualitative: [
                "Draws bar models showing comparison correctly",
                "Identifies who has more and by how much",
                "Uses units approach for ratio comparisons",
                "Shows clear working from model to solution"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with errors in model or calculation",
                "May draw model but not use it correctly"
              ],
              qualitative: [
                "Can draw but makes interpretation errors",
                "Gets confused with 'more than' vs 'less than'",
                "Struggles with unit-based problems"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot solve comparison problems",
                "Cannot draw useful bar models"
              ],
              qualitative: [
                "Does not understand comparison relationships",
                "Cannot represent relationships visually",
                "Draws incorrect bar models"
              ]
            }
          },
          learningObjectives: [
            "Draw bar models for comparison relationships",
            "Solve 'more than' and 'less than' problems",
            "Solve 'times as many' problems using units",
            "Handle before-after comparison scenarios"
          ],
          relevantFormulas: [
            "Leila had $60 more than Siti. Siti gave Leila $80. Now Leila has twice as much.",
            "Draw bars: Before shows $60 difference, After shows 2:1 ratio",
            "1 unit = (2 × $80) + $60 = $220; Leila had $220 + $80 + $60 = $360"
          ],
          availableTools: ["barModel"]
        },
        {
          id: "complex-multi-step",
          title: "Complex Multi-Step Problems",
          difficulty: "advanced",
          prerequisites: ["comparison-bar-models"],
          masterySignals: "Student correctly solves complex problems with 3+ people/quantities in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions with clear reasoning",
                "Can handle 3+ unknowns"
              ],
              qualitative: [
                "Represents complex relationships in bar models",
                "Finds total units and unit values systematically",
                "Handles multiple constraints",
                "Verifies answers by checking all conditions"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with partial solutions",
                "Gets confused with multiple unknowns"
              ],
              qualitative: [
                "Understands problem but loses track",
                "Can start but gets stuck partway",
                "Makes errors with multiple constraints"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot solve complex problems",
                "Gets overwhelmed"
              ],
              qualitative: [
                "Cannot organize complex information",
                "Does not know how to start",
                "Cannot draw models for 3+ quantities"
              ]
            }
          },
          learningObjectives: [
            "Organize information from complex problems",
            "Draw bar models with 3+ bars",
            "Set up relationships between multiple unknowns",
            "Solve systematically using unit values"
          ],
          relevantFormulas: [
            "Mary & Jia Ling: 1500, Mary & Vicky: 650, Jia Ling = 6 × Vicky",
            "Difference: 1500 - 650 = 850 = Jia Ling - Vicky = 5 units",
            "1 unit = 170 (Vicky), Jia Ling = 1020, Mary = 1500 - 1020 = 480"
          ],
          availableTools: ["barModel"]
        }
      ]
    },

    learningObjectives: [
      "Solve two-step word problems",
      "Use bar models for comparison problems",
      "Handle 'more than', 'less than', 'times as many'",
      "Solve complex problems with multiple unknowns"
    ],

    keyFormulas: `
Word Problem Strategy:
1. READ carefully
2. IDENTIFY what's given and what to find
3. DRAW a bar model if helpful
4. PLAN the steps
5. SOLVE step by step
6. CHECK if reasonable

Bar Model Types:
- Part-Whole: Total split into parts
- Comparison: Two bars showing difference
- Before-After: Shows change in quantities
- Units: Equal parts for ratio problems

Complex Problem Example:
Mary and Jia Ling had 1500 hair clips altogether.
Mary and Vicky had 650 hair clips altogether.
Jia Ling had 6 times as many as Vicky.
How many did Mary have?

Solution:
- Jia Ling - Vicky = 1500 - 650 = 850 (since Mary is common)
- Jia Ling = 6 units, Vicky = 1 unit, difference = 5 units
- 5 units = 850, so 1 unit = 170 (Vicky)
- Jia Ling = 6 × 170 = 1020
- Mary = 1500 - 1020 = 480 hair clips
    `
  }
};
