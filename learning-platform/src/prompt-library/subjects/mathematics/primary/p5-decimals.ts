/**
 * P5 Mathematics - Decimals Topic Configuration
 *
 * Comprehensive configuration for teaching decimal operations including:
 * - Multiplying decimals by 10, 100, 1000
 * - Multiplying decimals by tens, hundreds, thousands (20, 300, 5000, etc.)
 * - Dividing decimals by 10, 100, 1000
 * - Dividing decimals by tens, hundreds, thousands
 * - Converting measurements using decimals
 * - Word problems involving decimals
 *
 * Target audience: Primary 5 students (10-11 years old)
 */

// Type exports
export type DecimalsTopicId =
  | 'p5-math-decimals-multiply-10-100-1000'
  | 'p5-math-decimals-multiply-tens-hundreds-thousands'
  | 'p5-math-decimals-divide-10-100-1000'
  | 'p5-math-decimals-divide-tens-hundreds-thousands'
  | 'p5-math-decimals-converting-measurements'
  | 'p5-math-decimals-word-problems';

// Topic-specific tutor customization
export const P5_DECIMALS_CONFIG = {
  teachingPhilosophy: `You are a friendly and encouraging mathematics tutor for Primary 5 students learning about decimal operations.

Teaching Approach:
- Use simple, age-appropriate language suitable for 10-11 year olds
- Build understanding through place value: tenths, hundredths, thousandths
- Emphasize the visual pattern: decimal point movement (right for ×, left for ÷)
- Use real-world contexts: money, measurements, shopping scenarios
- Connect multiplying by 10/100/1000 to dividing (inverse operations)
- Help students see the decomposition strategy: 20 = 2 × 10, 300 = 3 × 100
- Be patient - place value with decimals can be tricky!
- Celebrate when students correctly move the decimal point or apply decomposition

**Text-to-Speech Guidelines:**
- Say "zero point three" for 0.3, not "point three"
- Say "tenths" and "hundredths" clearly
- For multiplication by powers of 10, say "times ten" not "times one zero"
- Say "move the decimal point one place to the right" clearly
- When reading money, say "three dollars fifty" not "three point five zero dollars"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation`,

  visualToolsGuidance: `Use pre-built visual tools when they help understanding.
IMPORTANT: Use the technical name in the toolName field, NOT the display name.

Available tools for this topic:
- placeValueChart: Shows digits in place value columns (ones, tenths, hundredths, etc.). Use to demonstrate decimal point movement.
- numberLine: Can show decimal positions with configurable step sizes. Use for visualizing decimal values.

Tool usage guidelines:
- Use placeValueChart when teaching × or ÷ by 10, 100, 1000 to show digit movement
- Use numberLine for comparing decimals or showing decimal positions
- Always include helpful captions explaining what to notice
- DO NOT show final answers in visualizations - let students figure those out`
};

// Available math tools for this topic
export const P5_DECIMALS_MATH_TOOLS = [
  "placeValueChart",
  "numberLine"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const P5_MATH_DECIMALS_SUBTOPICS = {

  'p5-math-decimals-multiply-10-100-1000': {
    displayName: 'Multiplying by 10, 100, 1000',
    topicName: 'multiplying decimals by 10, 100, and 1000',

    progressionStructure: {
      sections: [
        {
          id: "multiply-by-10",
          title: "Multiplying by 10",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly explains and applies the pattern: multiply by 10 = move decimal 1 place right in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multiplications by 10",
                "Correctly explains the pattern"
              ],
              qualitative: [
                "States rule: 'Move decimal point 1 place to the right'",
                "Applies correctly: 0.3 × 10 = 3, 1.25 × 10 = 12.5",
                "Understands WHY: tenths become ones, ones become tens",
                "Can verify by counting: 3 tenths × 10 = 30 tenths = 3 ones",
                "Uses place value table to show digit movement"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with some hesitation",
                "Knows rule but makes occasional errors"
              ],
              qualitative: [
                "Remembers the rule but sometimes moves wrong direction",
                "Confuses × 10 with ÷ 10 (left vs right)",
                "Makes errors with numbers like 2.05 × 10",
                "Cannot explain WHY the rule works"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot apply the rule"
              ],
              qualitative: [
                "Does not know the decimal point movement rule",
                "Adds a zero instead of moving decimal (0.3 × 10 = 0.30)",
                "Moves decimal wrong direction",
                "Cannot connect multiplication to place value change"
              ]
            }
          },
          learningObjectives: [
            "State that multiplying by 10 moves decimal 1 place right",
            "Apply the rule to multiply any decimal by 10",
            "Explain WHY the rule works using place value",
            "Verify answers using place value reasoning"
          ],
          relevantFormulas: [
            "Decimal × 10 = move decimal point 1 place RIGHT",
            "0.3 × 10 = 3 (tenths become ones)",
            "1.25 × 10 = 12.5"
          ],
          availableTools: ["placeValueChart"]
        },
        {
          id: "multiply-by-100-1000",
          title: "Multiplying by 100 and 1000",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["multiply-by-10"],
          masterySignals: "Student correctly applies patterns for × 100 (2 places right) and × 1000 (3 places right) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multiplications by 100 or 1000",
                "Correctly handles adding zeros when needed"
              ],
              qualitative: [
                "States rules: × 100 = 2 places right, × 1000 = 3 places right",
                "Applies correctly: 1.25 × 100 = 125, 1.25 × 1000 = 1250",
                "Adds zeros when needed: 0.41 × 1000 = 410",
                "Connects number of zeros to number of places moved",
                "Can work with various decimal places"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with errors on × 1000",
                "Confuses 2 places vs 3 places"
              ],
              qualitative: [
                "Knows rules but confuses × 100 and × 1000",
                "Makes errors adding trailing zeros",
                "Struggles with 2.002 × 100 type problems",
                "Needs reminders about how many places to move"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot distinguish × 100 from × 1000"
              ],
              qualitative: [
                "Does not remember which rule goes with which multiplier",
                "Moves decimal wrong number of places",
                "Cannot handle adding zeros when needed",
                "Confuses with × 10 rule"
              ]
            }
          },
          learningObjectives: [
            "State that × 100 moves decimal 2 places right",
            "State that × 1000 moves decimal 3 places right",
            "Add zeros when decimal places run out",
            "Connect number of zeros in multiplier to places moved"
          ],
          relevantFormulas: [
            "Decimal × 100 = move decimal 2 places RIGHT",
            "Decimal × 1000 = move decimal 3 places RIGHT",
            "0.41 × 1000 = 410 (add zero because only 2 decimal digits)"
          ],
          availableTools: ["placeValueChart"]
        }
      ]
    },

    learningObjectives: [
      "Apply the shortcut: × 10 moves decimal 1 place right",
      "Apply the shortcut: × 100 moves decimal 2 places right",
      "Apply the shortcut: × 1000 moves decimal 3 places right",
      "Add zeros when needed"
    ],

    keyFormulas: `
**Multiplying Decimals by 10, 100, 1000:**
- × 10: Move decimal point 1 place to the RIGHT
- × 100: Move decimal point 2 places to the RIGHT
- × 1000: Move decimal point 3 places to the RIGHT

**Examples:**
- 0.3 × 10 = 3
- 1.25 × 100 = 125
- 0.41 × 1000 = 410

**Key Idea:** The number of zeros in the multiplier = number of places to move
    `
  },

  'p5-math-decimals-multiply-tens-hundreds-thousands': {
    displayName: 'Multiplying by Tens, Hundreds, Thousands',
    topicName: 'multiplying decimals by multiples like 20, 300, 5000',

    progressionStructure: {
      sections: [
        {
          id: "decomposition-strategy",
          title: "Breaking Down Multipliers",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly breaks down multipliers (20 = 2 × 10, 300 = 3 × 100) in 3+ responses",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct decompositions",
                "Can break down any multiple of 10, 100, or 1000"
              ],
              qualitative: [
                "Correctly states: 20 = 2 × 10, 30 = 3 × 10, etc.",
                "Correctly states: 200 = 2 × 100, 600 = 6 × 100, etc.",
                "Correctly states: 3000 = 3 × 1000, 5000 = 5 × 1000, etc.",
                "Understands the strategy: multiply by digit, then by 10/100/1000",
                "Can apply this to any multiple"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct decompositions",
                "Struggles with larger multiples"
              ],
              qualitative: [
                "Can break down 20, 30 but struggles with 200, 3000",
                "Confuses which power of 10 to use",
                "Understands concept but needs practice",
                "Needs prompting to see the pattern"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect decompositions",
                "Cannot break down multipliers"
              ],
              qualitative: [
                "Does not see 20 as 2 × 10",
                "Cannot identify the single digit and power of 10",
                "Does not understand the strategy",
                "Needs full explanation of decomposition"
              ]
            }
          },
          learningObjectives: [
            "Recognize that 20 = 2 × 10, 30 = 3 × 10, etc.",
            "Recognize that 200 = 2 × 100, 600 = 6 × 100, etc.",
            "Recognize that 3000 = 3 × 1000, 5000 = 5 × 1000, etc.",
            "Understand the two-step multiplication strategy"
          ],
          relevantFormulas: [
            "20 = 2 × 10, 30 = 3 × 10, ..., 90 = 9 × 10",
            "200 = 2 × 100, 300 = 3 × 100, ..., 900 = 9 × 100",
            "2000 = 2 × 1000, 3000 = 3 × 1000, ..., 9000 = 9 × 1000"
          ],
          availableTools: []
        },
        {
          id: "multiply-by-tens-hundreds",
          title: "Multiplying by Tens and Hundreds",
          difficulty: "intermediate",
          prerequisites: ["decomposition-strategy"],
          masterySignals: "Student correctly multiplies decimals by 20, 30, 200, 600, etc. using two-step method in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct two-step multiplications",
                "Handles both tens and hundreds"
              ],
              qualitative: [
                "Correctly applies: 2.3 × 20 = 2.3 × 2 × 10 = 4.6 × 10 = 46",
                "Correctly applies: 1.9 × 200 = 1.9 × 2 × 100 = 3.8 × 100 = 380",
                "Shows clear two-step working",
                "Can work with various decimal values",
                "Can do either order: × digit first or × 10/100 first"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with calculation errors",
                "Struggles with the second multiplication"
              ],
              qualitative: [
                "Understands the method but makes arithmetic errors",
                "Forgets to multiply by 10/100 after first step",
                "Gets confused with decimal point in second step",
                "Needs help organizing the two steps"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot apply the two-step method"
              ],
              qualitative: [
                "Does not know how to start the problem",
                "Tries to multiply directly without breaking down",
                "Cannot connect decomposition to actual calculation",
                "Makes multiple errors in each step"
              ]
            }
          },
          learningObjectives: [
            "Apply two-step method: × digit, then × 10 or 100",
            "Calculate decimal × tens (20, 30, 40, etc.)",
            "Calculate decimal × hundreds (200, 300, 600, etc.)",
            "Show clear working for both steps"
          ],
          relevantFormulas: [
            "2.3 × 20 = 2.3 × 2 × 10 = 4.6 × 10 = 46",
            "1.9 × 200 = 1.9 × 2 × 100 = 3.8 × 100 = 380",
            "4.15 × 600 = 4.15 × 6 × 100 = 24.9 × 100 = 2490"
          ],
          availableTools: ["placeValueChart"]
        },
        {
          id: "multiply-by-thousands",
          title: "Multiplying by Thousands",
          difficulty: "intermediate",
          prerequisites: ["multiply-by-tens-hundreds"],
          masterySignals: "Student correctly multiplies decimals by 3000, 5000, 7000, etc. using two-step method in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multiplications by thousands",
                "Consistent accuracy across different values"
              ],
              qualitative: [
                "Correctly applies: 3000 × 5.7 = 3 × 5.7 × 1000 = 17.1 × 1000 = 17100",
                "Correctly applies: 8.25 × 5000 = 8.25 × 5 × 1000 = 41.25 × 1000 = 41250",
                "Handles large resulting numbers confidently",
                "Shows organized working",
                "Can estimate to check reasonableness"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with place value errors",
                "Makes mistakes with large numbers"
              ],
              qualitative: [
                "Knows the method but loses track with large numbers",
                "Makes errors moving decimal 3 places",
                "Confuses thousands with hundreds in final step",
                "Needs help keeping track of zeros"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot handle × thousands"
              ],
              qualitative: [
                "Overwhelmed by large numbers",
                "Cannot move decimal 3 places correctly",
                "Makes basic multiplication errors",
                "Does not know how many zeros in answer"
              ]
            }
          },
          learningObjectives: [
            "Apply two-step method: × digit, then × 1000",
            "Calculate decimal × thousands (2000, 3000, 5000, etc.)",
            "Handle large resulting numbers",
            "Estimate to check reasonableness"
          ],
          relevantFormulas: [
            "3000 × 5.7 = 3 × 5.7 × 1000 = 17.1 × 1000 = 17100",
            "8.25 × 5000 = 8.25 × 5 × 1000 = 41.25 × 1000 = 41250"
          ],
          availableTools: ["placeValueChart"]
        }
      ]
    },

    learningObjectives: [
      "Break down multipliers: 20 = 2 × 10, 300 = 3 × 100, etc.",
      "Apply two-step multiplication method",
      "Multiply decimals by tens (20, 30, 40...)",
      "Multiply decimals by hundreds (200, 300, 600...)",
      "Multiply decimals by thousands (2000, 5000, 7000...)"
    ],

    keyFormulas: `
**Decomposition Method:**
- 20 = 2 × 10, 30 = 3 × 10, etc.
- 200 = 2 × 100, 600 = 6 × 100, etc.
- 3000 = 3 × 1000, 5000 = 5 × 1000, etc.

**Two-Step Method:**
1. Multiply by the single digit
2. Then multiply by 10, 100, or 1000

**Examples:**
- 2.3 × 20 = 2.3 × 2 × 10 = 4.6 × 10 = 46
- 1.9 × 200 = 1.9 × 2 × 100 = 3.8 × 100 = 380
- 5.7 × 3000 = 5.7 × 3 × 1000 = 17.1 × 1000 = 17100
    `
  },

  'p5-math-decimals-divide-10-100-1000': {
    displayName: 'Dividing by 10, 100, 1000',
    topicName: 'dividing decimals by 10, 100, and 1000',

    progressionStructure: {
      sections: [
        {
          id: "divide-by-10-100-1000",
          title: "Dividing by 10, 100, and 1000",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly applies patterns: ÷ 10 (1 place left), ÷ 100 (2 places left), ÷ 1000 (3 places left) in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct divisions by 10, 100, or 1000",
                "Correctly adds leading zeros when needed"
              ],
              qualitative: [
                "States rules: ÷ 10 = 1 place left, ÷ 100 = 2 places left, ÷ 1000 = 3 places left",
                "Applies correctly: 12.4 ÷ 10 = 1.24, 12.4 ÷ 100 = 0.124",
                "Adds leading zero: 1.3 ÷ 10 = 0.13",
                "Understands this is opposite of multiplication",
                "Can explain WHY: division makes numbers smaller"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with direction errors",
                "Forgets leading zeros"
              ],
              qualitative: [
                "Knows rules but moves decimal wrong direction (right instead of left)",
                "Forgets to write leading zero (writes .13 instead of 0.13)",
                "Confuses ÷ 10 with × 10",
                "Struggles with ÷ 100 and ÷ 1000"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Moves decimal wrong direction consistently"
              ],
              qualitative: [
                "Does not know the rule for division",
                "Thinks division moves decimal right (like multiplication)",
                "Cannot handle adding leading zeros",
                "Does not see the inverse relationship"
              ]
            }
          },
          learningObjectives: [
            "State that ÷ 10 moves decimal 1 place LEFT",
            "State that ÷ 100 moves decimal 2 places LEFT",
            "State that ÷ 1000 moves decimal 3 places LEFT",
            "Add leading zeros when needed (0.13, 0.024)",
            "Understand division is opposite of multiplication"
          ],
          relevantFormulas: [
            "Decimal ÷ 10 = move decimal point 1 place LEFT",
            "Decimal ÷ 100 = move decimal point 2 places LEFT",
            "Decimal ÷ 1000 = move decimal point 3 places LEFT",
            "12.4 ÷ 10 = 1.24, 12.4 ÷ 100 = 0.124",
            "234 ÷ 1000 = 0.234"
          ],
          availableTools: ["placeValueChart"]
        }
      ]
    },

    learningObjectives: [
      "Apply the shortcut: ÷ 10 moves decimal 1 place left",
      "Apply the shortcut: ÷ 100 moves decimal 2 places left",
      "Apply the shortcut: ÷ 1000 moves decimal 3 places left",
      "Add leading zeros when needed"
    ],

    keyFormulas: `
**Dividing Decimals by 10, 100, 1000:**
- ÷ 10: Move decimal point 1 place to the LEFT
- ÷ 100: Move decimal point 2 places to the LEFT
- ÷ 1000: Move decimal point 3 places to the LEFT

**Examples:**
- 12.4 ÷ 10 = 1.24
- 12.4 ÷ 100 = 0.124
- 234 ÷ 1000 = 0.234

**Key Idea:** Division is the OPPOSITE of multiplication (left, not right!)
    `
  },

  'p5-math-decimals-divide-tens-hundreds-thousands': {
    displayName: 'Dividing by Tens, Hundreds, Thousands',
    topicName: 'dividing decimals by multiples like 20, 400, 8000',

    progressionStructure: {
      sections: [
        {
          id: "division-decomposition",
          title: "Breaking Down Divisors",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly breaks down divisors for division (20 = 2 × 10, so divide by 2, then by 10) in 3+ responses",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct explanations of divisor breakdown",
                "Understands the two-step division strategy"
              ],
              qualitative: [
                "Correctly states: 'To divide by 20, divide by 2 then by 10'",
                "Correctly states: 'To divide by 400, divide by 4 then by 100'",
                "Understands this uses the same decomposition as multiplication",
                "Can plan the steps before calculating",
                "Sees the connection to multiplication decomposition"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct explanations",
                "Struggles with larger divisors"
              ],
              qualitative: [
                "Understands dividing by 20 but not 400 or 8000",
                "Confuses order of operations",
                "Needs prompting to see the pattern",
                "Understands concept but cannot apply it"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot explain the breakdown strategy",
                "Multiple incorrect explanations"
              ],
              qualitative: [
                "Does not see 20 as something to break down",
                "Cannot connect decomposition to division",
                "Does not know how to start these problems",
                "Needs full explanation"
              ]
            }
          },
          learningObjectives: [
            "Understand that dividing by 20 means ÷ 2, then ÷ 10",
            "Understand that dividing by 400 means ÷ 4, then ÷ 100",
            "Understand that dividing by 8000 means ÷ 8, then ÷ 1000",
            "Plan the two steps before calculating"
          ],
          relevantFormulas: [
            "To divide by 20: ÷ 2, then ÷ 10",
            "To divide by 400: ÷ 4, then ÷ 100",
            "To divide by 8000: ÷ 8, then ÷ 1000"
          ],
          availableTools: []
        },
        {
          id: "divide-by-tens-hundreds-thousands",
          title: "Dividing by Tens, Hundreds, and Thousands",
          difficulty: "intermediate",
          prerequisites: ["division-decomposition"],
          masterySignals: "Student correctly divides by 20, 30, 400, 600, 2000, 8000, etc. using two-step method in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct two-step divisions",
                "Handles tens, hundreds, and thousands"
              ],
              qualitative: [
                "Correctly applies: 6.3 ÷ 30 = 6.3 ÷ 3 ÷ 10 = 2.1 ÷ 10 = 0.21",
                "Correctly applies: 100.4 ÷ 400 = 100.4 ÷ 4 ÷ 100 = 25.1 ÷ 100 = 0.251",
                "Correctly applies: 208 ÷ 8000 = 208 ÷ 8 ÷ 1000 = 26 ÷ 1000 = 0.026",
                "Shows clear two-step working",
                "Adds leading zeros correctly"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with calculation or decimal errors",
                "Struggles with the division steps"
              ],
              qualitative: [
                "Understands method but makes division errors",
                "Forgets to move decimal left in second step",
                "Confuses with multiplication (moves decimal wrong way)",
                "Forgets leading zeros (writes .21 instead of 0.21)"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot apply the two-step method"
              ],
              qualitative: [
                "Cannot break down the divisor",
                "Makes errors in basic division step",
                "Does not know to move decimal left",
                "Gets lost in the multi-step process"
              ]
            }
          },
          learningObjectives: [
            "Apply two-step method: ÷ digit, then ÷ 10, 100, or 1000",
            "Divide by tens (20, 30, 40, etc.)",
            "Divide by hundreds (200, 400, 600, etc.)",
            "Divide by thousands (2000, 8000, etc.)",
            "Write answers with leading zeros when needed"
          ],
          relevantFormulas: [
            "6.3 ÷ 30 = 6.3 ÷ 3 ÷ 10 = 2.1 ÷ 10 = 0.21",
            "100.4 ÷ 400 = 100.4 ÷ 4 ÷ 100 = 25.1 ÷ 100 = 0.251",
            "72 ÷ 600 = 72 ÷ 6 ÷ 100 = 12 ÷ 100 = 0.12",
            "208 ÷ 8000 = 208 ÷ 8 ÷ 1000 = 26 ÷ 1000 = 0.026"
          ],
          availableTools: ["placeValueChart"]
        }
      ]
    },

    learningObjectives: [
      "Break down divisors: 20 = 2 × 10, 400 = 4 × 100, etc.",
      "Apply two-step division method",
      "Divide decimals by tens (20, 30, 40...)",
      "Divide decimals by hundreds (200, 400, 600...)",
      "Divide decimals by thousands (2000, 8000...)",
      "Write answers with correct leading zeros"
    ],

    keyFormulas: `
**Decomposition Method for Division:**
- To ÷ 20: divide by 2, then divide by 10
- To ÷ 400: divide by 4, then divide by 100
- To ÷ 8000: divide by 8, then divide by 1000

**Two-Step Method:**
1. Divide by the single digit
2. Then divide by 10, 100, or 1000 (move decimal LEFT)

**Examples:**
- 6.3 ÷ 30 = 6.3 ÷ 3 ÷ 10 = 2.1 ÷ 10 = 0.21
- 100.4 ÷ 400 = 100.4 ÷ 4 ÷ 100 = 25.1 ÷ 100 = 0.251
    `
  },

  'p5-math-decimals-converting-measurements': {
    displayName: 'Converting Measurements',
    topicName: 'converting between measurement units using decimals',

    progressionStructure: {
      sections: [
        {
          id: "length-conversions",
          title: "Length Conversions (m, cm, km)",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly converts between m/cm and km/m using multiplication and division by 100 and 1000 in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct length conversions",
                "Handles both directions (big to small, small to big)"
              ],
              qualitative: [
                "States: 1 m = 100 cm, 1 km = 1000 m",
                "Converts m → cm by multiplying by 100",
                "Converts cm → m by dividing by 100",
                "Converts km → m by multiplying by 1000",
                "Handles mixed units: 3 m 28 cm = 328 cm"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct conversions",
                "Confuses multiply vs divide"
              ],
              qualitative: [
                "Knows the conversion facts but confuses operations",
                "Multiplies when should divide (or vice versa)",
                "Struggles with mixed units (3 m 28 cm)",
                "Needs reminders about which way to convert"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect conversions",
                "Cannot remember conversion facts"
              ],
              qualitative: [
                "Does not know 1 m = 100 cm or 1 km = 1000 m",
                "Cannot decide whether to multiply or divide",
                "Makes place value errors in conversion",
                "Needs full explanation of conversions"
              ]
            }
          },
          learningObjectives: [
            "State that 1 m = 100 cm and 1 km = 1000 m",
            "Convert metres to centimetres (× 100)",
            "Convert centimetres to metres (÷ 100)",
            "Convert kilometres to metres (× 1000)",
            "Convert metres to kilometres (÷ 1000)",
            "Handle mixed units"
          ],
          relevantFormulas: [
            "1 m = 100 cm",
            "1 km = 1000 m",
            "Big to small: MULTIPLY",
            "Small to big: DIVIDE"
          ],
          availableTools: []
        },
        {
          id: "mass-volume-conversions",
          title: "Mass and Volume Conversions",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["length-conversions"],
          masterySignals: "Student correctly converts between kg/g and ℓ/ml using multiplication and division by 1000 in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct mass or volume conversions",
                "Handles both kg/g and ℓ/ml"
              ],
              qualitative: [
                "States: 1 kg = 1000 g, 1 ℓ = 1000 ml",
                "Converts kg → g by multiplying by 1000",
                "Converts g → kg by dividing by 1000",
                "Same for ℓ and ml",
                "Handles mixed units: 5 kg 82 g = 5082 g"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct conversions",
                "Makes errors with large numbers"
              ],
              qualitative: [
                "Knows facts but makes calculation errors",
                "Struggles with decimal answers (3109 g = 3.109 kg)",
                "Confuses kg/g with ℓ/ml occasionally",
                "Needs practice with mixed units"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect conversions",
                "Cannot apply conversion facts"
              ],
              qualitative: [
                "Does not remember 1 kg = 1000 g or 1 ℓ = 1000 ml",
                "Cannot perform × or ÷ 1000 correctly",
                "Makes major place value errors",
                "Cannot handle mixed units"
              ]
            }
          },
          learningObjectives: [
            "State that 1 kg = 1000 g",
            "State that 1 ℓ = 1000 ml",
            "Convert kg ↔ g using × or ÷ 1000",
            "Convert ℓ ↔ ml using × or ÷ 1000",
            "Handle mixed units"
          ],
          relevantFormulas: [
            "1 kg = 1000 g",
            "1 ℓ = 1000 ml",
            "5 kg 82 g = 5000 g + 82 g = 5082 g",
            "3109 g = 3000 g + 109 g = 3 kg 109 g"
          ],
          availableTools: []
        },
        {
          id: "decimal-unit-conversions",
          title: "Decimal Conversions",
          difficulty: "intermediate",
          prerequisites: ["mass-volume-conversions"],
          masterySignals: "Student correctly converts decimals between units (e.g., 2.5 kg to grams, 3.5 ℓ to ml) in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct decimal conversions",
                "Handles various decimal places"
              ],
              qualitative: [
                "Converts 2.5 kg = 2500 g, 0.45 m = 45 cm",
                "Converts 3500 ml = 3.5 ℓ, 250 cm = 2.5 m",
                "Uses decimal multiplication and division skills",
                "Places decimal correctly in converted value",
                "Can work in both directions"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct decimal conversions",
                "Makes decimal placement errors"
              ],
              qualitative: [
                "Understands concept but misplaces decimals",
                "Struggles with smaller decimals (0.085 kg)",
                "Confuses which way decimal moves",
                "Needs help connecting to × and ÷ rules"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect decimal conversions",
                "Cannot handle decimals in conversions"
              ],
              qualitative: [
                "Does not know how to multiply decimals by 1000",
                "Cannot place decimal correctly",
                "Makes fundamental calculation errors",
                "Needs to review decimal operations first"
              ]
            }
          },
          learningObjectives: [
            "Convert decimal values between units",
            "Apply × and ÷ 10/100/1000 skills to conversions",
            "Handle small decimals (0.085 kg = 85 g)",
            "Convert in both directions with decimals"
          ],
          relevantFormulas: [
            "2.5 kg = 2.5 × 1000 g = 2500 g",
            "0.45 m = 0.45 × 100 cm = 45 cm",
            "3500 ml = 3500 ÷ 1000 ℓ = 3.5 ℓ",
            "14.085 kg = 14.085 × 1000 g = 14085 g"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Convert between metres and centimetres",
      "Convert between kilometres and metres",
      "Convert between kilograms and grams",
      "Convert between litres and millilitres",
      "Handle decimal values in conversions",
      "Apply × and ÷ 10/100/1000 skills"
    ],

    keyFormulas: `
**Conversion Facts:**
- 1 m = 100 cm
- 1 km = 1000 m
- 1 kg = 1000 g
- 1 ℓ = 1000 ml

**Conversion Rules:**
- Big to small unit: MULTIPLY
- Small to big unit: DIVIDE

**Examples:**
- 2.5 kg = 2.5 × 1000 = 2500 g
- 3500 ml = 3500 ÷ 1000 = 3.5 ℓ
- 0.45 m = 0.45 × 100 = 45 cm
    `
  },

  'p5-math-decimals-word-problems': {
    displayName: 'Word Problems',
    topicName: 'solving word problems involving decimals',

    progressionStructure: {
      sections: [
        {
          id: "single-step-problems",
          title: "Single-Step Word Problems",
          difficulty: "foundational-to-intermediate",
          prerequisites: [],
          masterySignals: "Student correctly solves single-step decimal word problems (multiplication or division) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct single-step problems",
                "Identifies correct operation"
              ],
              qualitative: [
                "Correctly identifies what operation is needed",
                "Extracts numbers from word problem correctly",
                "Calculates accurately with decimals",
                "Includes units in answer",
                "Writes answer sentence"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance",
                "Sometimes picks wrong operation"
              ],
              qualitative: [
                "Struggles to identify multiply vs divide",
                "Extracts numbers but unsure what to do",
                "Makes calculation errors",
                "Forgets units in answer"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot set up the problem"
              ],
              qualitative: [
                "Does not know what operation to use",
                "Cannot extract relevant numbers",
                "Gets overwhelmed by word problem",
                "Needs help understanding the scenario"
              ]
            }
          },
          learningObjectives: [
            "Identify the operation needed from word problem",
            "Extract relevant numbers and units",
            "Calculate accurately with decimals",
            "Write complete answer with units"
          ],
          relevantFormulas: [],
          availableTools: []
        },
        {
          id: "multi-step-problems",
          title: "Multi-Step Word Problems",
          difficulty: "intermediate",
          prerequisites: ["single-step-problems"],
          masterySignals: "Student correctly solves multi-step decimal word problems requiring 2-3 operations in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multi-step problems",
                "Shows clear step-by-step working"
              ],
              qualitative: [
                "Breaks problem into logical steps",
                "Solves each step correctly",
                "Carries values between steps accurately",
                "Converts units when needed",
                "Checks answer for reasonableness"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with some errors",
                "Misses steps or makes transfer errors"
              ],
              qualitative: [
                "Understands approach but misses a step",
                "Makes errors carrying values between steps",
                "Forgets to convert units",
                "Gets confused by complexity"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot plan multi-step approach"
              ],
              qualitative: [
                "Does not know how to break problem into steps",
                "Gets lost after first calculation",
                "Cannot track multiple pieces of information",
                "Needs full guidance"
              ]
            }
          },
          learningObjectives: [
            "Break complex problems into steps",
            "Plan approach before calculating",
            "Convert units within problems",
            "Check answers for reasonableness"
          ],
          relevantFormulas: [],
          availableTools: []
        },
        {
          id: "unit-conversion-problems",
          title: "Problems with Unit Conversions",
          difficulty: "intermediate",
          prerequisites: ["multi-step-problems"],
          masterySignals: "Student correctly solves word problems requiring unit conversion as part of solution in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct problems with unit conversion",
                "Converts units accurately within solution"
              ],
              qualitative: [
                "Identifies when unit conversion is needed",
                "Converts units correctly (kg → g, m → cm)",
                "Ensures same units before operations",
                "Gives final answer in requested unit",
                "Shows clear conversion working"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with conversion errors",
                "Forgets to convert or converts wrong"
              ],
              qualitative: [
                "Knows conversion is needed but makes errors",
                "Forgets to convert before adding/comparing",
                "Converts but makes calculation errors",
                "Gives answer in wrong unit"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot identify need for conversion"
              ],
              qualitative: [
                "Does not see that units need to match",
                "Tries to add different units directly",
                "Cannot perform conversions in context",
                "Gets overwhelmed by the complexity"
              ]
            }
          },
          learningObjectives: [
            "Identify when unit conversion is needed",
            "Convert units within word problems",
            "Ensure same units before operations",
            "Give answers in requested units"
          ],
          relevantFormulas: [],
          availableTools: []
        },
        {
          id: "challenging-problems",
          title: "Challenging Word Problems",
          difficulty: "intermediate-to-challenging",
          prerequisites: ["unit-conversion-problems"],
          masterySignals: "Student correctly solves challenging word problems including comparison and bar model problems in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct challenging problems",
                "Uses appropriate strategies (bar model, equations)"
              ],
              qualitative: [
                "Draws bar models to represent relationships",
                "Sets up equations for comparison problems",
                "Works systematically through complex scenarios",
                "Checks answers and interprets results",
                "Can solve problems with 'more than' or 'less than'"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct challenging problems",
                "Struggles with bar models or equations"
              ],
              qualitative: [
                "Attempts bar model but draws incorrectly",
                "Understands relationships but cannot compute",
                "Makes errors in multi-step logic",
                "Needs guidance on problem structure"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot approach challenging problems"
              ],
              qualitative: [
                "Does not know how to start",
                "Cannot represent relationships visually",
                "Gets confused by 'more than' or 'less than'",
                "Needs significant support and simpler problems first"
              ]
            }
          },
          learningObjectives: [
            "Use bar models to represent word problems",
            "Solve comparison problems",
            "Handle 'more than' and 'less than' relationships",
            "Work systematically through complex problems"
          ],
          relevantFormulas: [],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Solve single-step decimal word problems",
      "Solve multi-step decimal word problems",
      "Convert units within word problems",
      "Use bar models for complex problems",
      "Check answers for reasonableness"
    ],

    keyFormulas: `
**Problem-Solving Strategy:**
1. Read carefully - what is given? What is asked?
2. Identify the operations needed
3. Check if units need converting
4. Calculate step by step
5. Write answer with units
6. Check: Does the answer make sense?

**Tips:**
- Draw bar models for comparison problems
- Estimate first to check reasonableness
- Convert to same units before adding/subtracting
- Show all your working!
    `
  }
};
