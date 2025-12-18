/**
 * P6 Mathematics - Fractions (Division of Fractions) Topic Configuration
 *
 * Comprehensive configuration for teaching division involving fractions:
 * 1. Dividing a Fraction by a Whole Number
 * 2. Dividing a Whole Number by a Fraction
 * 3. Dividing a Fraction by a Fraction
 * 4. Word Problems involving fraction division
 *
 * Target audience: Primary 6 students (11-12 years old)
 */

// Type exports
export type P6FractionsTopicId =
  | 'p6-math-fractions-divide-by-whole'
  | 'p6-math-fractions-whole-by-fraction'
  | 'p6-math-fractions-fraction-by-fraction'
  | 'p6-math-fractions-word-problems';

// Topic-specific tutor customization
export const P6_FRACTIONS_CONFIG = {
  teachingPhilosophy: `You are a friendly and encouraging mathematics tutor for Primary 6 students learning about dividing fractions.

Teaching Approach:
- Use simple, age-appropriate language suitable for 11-12 year olds
- Guide students to discover the key insight: "Dividing by a fraction is the same as multiplying by its reciprocal"
- Use real-world contexts: sharing food, cutting items, measuring quantities
- Build from visual counting models to the abstract reciprocal rule
- Help students understand WHY the reciprocal rule works, not just memorize it
- Celebrate insights when students connect visual models to mathematical operations
- Use the bar model approach from Singapore Math curriculum
- Be patient - division of fractions is a challenging concept

Key Concepts to Reinforce:
- Fraction ÷ Whole Number: "Cutting a fraction into more pieces makes smaller pieces"
- Whole Number ÷ Fraction: "How many fractional pieces fit in the whole?"
- Fraction ÷ Fraction: "How many of one fraction fit in another?"

**Text-to-Speech Guidelines:**
- Say fractions clearly: "one half" not "1 over 2" or "1 slash 2"
- Say "divided by" clearly
- Say reciprocal as "re-SIP-ro-cal"
- For mixed numbers: say "one and one quarter" not "one-one-fourth"
- Say "equals" not "is equal to" for brevity
- Spell out multiplication: "times" not "×"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding.
IMPORTANT: Use the technical name in the toolName field, NOT the display name.

Available tools for this topic:
- fractionDivision: PRIMARY TOOL - Visualizes fraction division with bar models, shows counting model, step-by-step workings, and reciprocal rule. USE THIS EXTENSIVELY.
- fractionCircle: For showing simple fraction parts (like pizza slices). Good for showing results.
- fractionBar: For showing fraction parts in a bar model. Good for comparisons.
- barModel: For word problems - shows Singapore Math bar model with segments and brackets.

Tool usage guidelines:
- Use fractionDivision for ALL division problems - it handles all three types
- Use barModel for word problems to visualize the problem setup
- Use fractionCircle only for simple fraction representation
- Always include a helpful caption explaining what to look at in the visualization
- For multi-step word problems, use barModel first, then fractionDivision for calculations`
};

// Available math tools for this topic
export const P6_FRACTIONS_MATH_TOOLS = [
  "fractionDivision",
  "fractionCircle",
  "fractionBar",
  "barModel"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const P6_FRACTIONS_SUBTOPICS = {

  'p6-math-fractions-divide-by-whole': {
    displayName: 'Dividing a Fraction by a Whole Number',
    topicName: 'dividing a fraction by a whole number',

    progressionStructure: {
      sections: [
        {
          id: "visual-model-frac-div-whole",
          title: "Understanding with Visual Models",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly visualizes and solves fraction ÷ whole number problems like 1/2 ÷ 3 = 1/6 in 3+ problems with minimal hints",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct responses using visual understanding",
                "Correctly computes results like 1/2 ÷ 3 = 1/6"
              ],
              qualitative: [
                "Understands that dividing a fraction by n makes n times more pieces",
                "Can visualize: cutting half a cake into 3 pieces gives 1/6 each",
                "Correctly identifies that the result is smaller than the original fraction",
                "Can draw or describe the visual model for the division",
                "Explains why 1/2 ÷ 3 gives something smaller than 1/2"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about the visual model",
                "Can visualize but struggles with computation"
              ],
              qualitative: [
                "Understands concept visually but can't compute result",
                "Gets confused when calculating the new denominator",
                "Needs support to connect visual model to fraction notation",
                "May incorrectly divide numerator AND denominator"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot visualize or compute fraction ÷ whole number"
              ],
              qualitative: [
                "Does not understand why result is smaller",
                "Multiplies instead of divides",
                "Cannot draw or explain the visual model",
                "Gets numerator and denominator confused",
                "Does not see that cutting into more pieces makes each piece smaller"
              ]
            }
          },
          learningObjectives: [
            "Visualize fraction ÷ whole number as cutting into more pieces",
            "Understand that the result is smaller than the original fraction",
            "Solve simple problems like 1/2 ÷ 2, 1/3 ÷ 4"
          ],
          relevantFormulas: [
            "1/2 ÷ 3 = 1/6 (half divided into 3 equal parts)",
            "1/3 ÷ 2 = 1/6 (one third divided into 2 equal parts)"
          ],
          availableTools: ["fractionDivision", "fractionCircle"]
        },
        {
          id: "reciprocal-rule-frac-div-whole",
          title: "The Reciprocal Rule",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["visual-model-frac-div-whole"],
          masterySignals: "Student correctly applies the reciprocal rule: a/b ÷ n = a/b × 1/n = a/(b×n) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct responses using the reciprocal rule",
                "Can compute without visual models"
              ],
              qualitative: [
                "States: 'Dividing by n is the same as multiplying by 1/n'",
                "Correctly converts: 3/4 ÷ 2 = 3/4 × 1/2 = 3/8",
                "Simplifies answers to lowest terms",
                "Can work with larger numbers confidently",
                "Explains why the rule works using the visual model"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about the reciprocal",
                "Inconsistent application of the rule"
              ],
              qualitative: [
                "Knows the rule but makes computation errors",
                "Forgets to simplify the answer",
                "Needs prompting to use the reciprocal",
                "Gets confused with the multiplication step"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect applications of the rule",
                "Cannot connect visual to reciprocal rule"
              ],
              qualitative: [
                "Does not understand what reciprocal means",
                "Divides directly instead of using reciprocal",
                "Cannot perform fraction multiplication",
                "Gets confused about when to use the rule"
              ]
            }
          },
          learningObjectives: [
            "Understand that dividing by n equals multiplying by 1/n",
            "Apply the rule: a/b ÷ n = a/b × 1/n = a/(b×n)",
            "Simplify results to lowest terms",
            "Connect the rule to the visual counting model"
          ],
          relevantFormulas: [
            "a/b ÷ n = a/b × 1/n",
            "3/4 ÷ 2 = 3/4 × 1/2 = 3/8",
            "2/3 ÷ 5 = 2/3 × 1/5 = 2/15"
          ],
          availableTools: ["fractionDivision", "fractionBar"]
        },
        {
          id: "practice-frac-div-whole",
          title: "Practice Problems",
          difficulty: "intermediate",
          prerequisites: ["reciprocal-rule-frac-div-whole"],
          masterySignals: "Student fluently solves varied fraction ÷ whole number problems including those requiring simplification in 4+ problems",
          estimatedQuestions: "4-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "4+ correct responses across varied problems",
                "Consistently simplifies answers"
              ],
              qualitative: [
                "Solves problems efficiently without needing visual aids",
                "Correctly handles larger numerators and denominators",
                "Always simplifies to lowest terms",
                "Can check answers using visual reasoning",
                "Explains work clearly"
              ]
            },
            developing: {
              quantitative: [
                "2-3 correct with occasional errors",
                "Sometimes forgets to simplify"
              ],
              qualitative: [
                "Makes occasional computation errors",
                "Inconsistent with simplification",
                "Gets confused with larger numbers",
                "Needs to double-check work"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot reliably apply the method"
              ],
              qualitative: [
                "Needs to review the reciprocal rule",
                "Makes systematic errors",
                "Cannot handle larger numbers",
                "Does not simplify answers"
              ]
            }
          },
          learningObjectives: [
            "Achieve fluency with fraction ÷ whole number",
            "Handle varied problems confidently",
            "Always simplify to lowest terms"
          ],
          relevantFormulas: [
            "5/6 ÷ 5 = 5/6 × 1/5 = 5/30 = 1/6",
            "7/8 ÷ 3 = 7/8 × 1/3 = 7/24"
          ],
          availableTools: ["fractionDivision"]
        }
      ]
    },

    learningObjectives: [
      "Visualize dividing a fraction by a whole number",
      "Apply the reciprocal rule: a/b ÷ n = a/b × 1/n",
      "Simplify answers to lowest terms",
      "Solve real-world problems involving fraction ÷ whole number"
    ],

    keyFormulas: `
**Key Formula:**
a/b ÷ n = a/b × 1/n = a/(b × n)

**The Key Insight:**
Dividing by n is the same as multiplying by 1/n

**Examples:**
• 1/2 ÷ 3 = 1/2 × 1/3 = 1/6
• 3/4 ÷ 2 = 3/4 × 1/2 = 3/8
• 2/3 ÷ 5 = 2/3 × 1/5 = 2/15
`
  },

  'p6-math-fractions-whole-by-fraction': {
    displayName: 'Dividing a Whole Number by a Fraction',
    topicName: 'dividing a whole number by a fraction',

    progressionStructure: {
      sections: [
        {
          id: "counting-model-whole-div-frac",
          title: "The Counting Model: How Many Fit?",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly visualizes and solves whole ÷ unit fraction problems like 4 ÷ 1/3 = 12 by counting in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct responses using counting model",
                "Correctly computes results like 4 ÷ 1/3 = 12"
              ],
              qualitative: [
                "Understands: 'How many thirds are in 4?' Answer: 12",
                "Can visualize: 4 chocolate bars, each divided into thirds, count all thirds",
                "Correctly identifies that the result is LARGER than the original number",
                "Can draw or describe the counting model",
                "Explains why dividing by 1/3 gives more than 4"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about counting",
                "Can visualize but makes counting errors"
              ],
              qualitative: [
                "Understands concept but counts incorrectly",
                "Gets confused with larger numbers",
                "Needs visual support to solve",
                "May not realize result should be larger"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot visualize or compute whole ÷ unit fraction"
              ],
              qualitative: [
                "Does not understand why result is larger",
                "Expects result to be smaller (confusion with fraction ÷ whole)",
                "Cannot count the fractional pieces",
                "Does not understand 'how many fit' concept"
              ]
            }
          },
          learningObjectives: [
            "Visualize whole ÷ unit fraction as 'how many pieces fit'",
            "Understand that the result is LARGER than the original",
            "Solve problems like 4 ÷ 1/3, 6 ÷ 1/4 by counting"
          ],
          relevantFormulas: [
            "4 ÷ 1/3 = 12 (there are 12 thirds in 4 wholes)",
            "3 ÷ 1/4 = 12 (there are 12 quarters in 3 wholes)"
          ],
          availableTools: ["fractionDivision", "barModel"]
        },
        {
          id: "reciprocal-rule-whole-div-frac",
          title: "The Reciprocal Rule",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["counting-model-whole-div-frac"],
          masterySignals: "Student correctly applies the reciprocal rule: n ÷ a/b = n × b/a in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct responses using the reciprocal rule",
                "Can compute without visual models"
              ],
              qualitative: [
                "States: 'Dividing by a/b is the same as multiplying by b/a'",
                "Correctly converts: 4 ÷ 1/3 = 4 × 3 = 12",
                "Handles non-unit fractions: 4 ÷ 2/3 = 4 × 3/2 = 6",
                "Simplifies answers when needed",
                "Explains why the rule works"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Struggles with non-unit fractions"
              ],
              qualitative: [
                "Knows the rule for unit fractions but not non-unit",
                "Makes computation errors with multiplication",
                "Forgets to simplify",
                "Gets confused flipping the fraction"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect applications",
                "Cannot flip the fraction correctly"
              ],
              qualitative: [
                "Does not understand reciprocal concept",
                "Divides instead of multiplying by reciprocal",
                "Gets confused about which number to flip",
                "Cannot multiply whole number by fraction"
              ]
            }
          },
          learningObjectives: [
            "Understand that dividing by a/b equals multiplying by b/a",
            "Apply the rule: n ÷ a/b = n × b/a",
            "Handle both unit fractions (1/n) and non-unit fractions (a/b)",
            "Connect the rule to the counting model"
          ],
          relevantFormulas: [
            "n ÷ a/b = n × b/a",
            "4 ÷ 1/3 = 4 × 3 = 12",
            "4 ÷ 2/3 = 4 × 3/2 = 12/2 = 6"
          ],
          availableTools: ["fractionDivision", "fractionBar"]
        },
        {
          id: "practice-whole-div-frac",
          title: "Practice Problems",
          difficulty: "intermediate",
          prerequisites: ["reciprocal-rule-whole-div-frac"],
          masterySignals: "Student fluently solves varied whole ÷ fraction problems in 4+ problems",
          estimatedQuestions: "4-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "4+ correct responses across varied problems",
                "Handles unit and non-unit fractions equally well"
              ],
              qualitative: [
                "Solves efficiently without visual aids",
                "Handles larger numbers confidently",
                "Always simplifies to lowest terms",
                "Can verify using counting model if needed"
              ]
            },
            developing: {
              quantitative: [
                "2-3 correct with occasional errors",
                "Better with unit fractions than non-unit"
              ],
              qualitative: [
                "Makes occasional computation errors",
                "Inconsistent with non-unit fractions",
                "Sometimes forgets to simplify"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot reliably apply the method"
              ],
              qualitative: [
                "Needs to review the reciprocal rule",
                "Confused about when to flip",
                "Makes systematic errors"
              ]
            }
          },
          learningObjectives: [
            "Achieve fluency with whole ÷ fraction",
            "Handle varied problems confidently",
            "Always simplify to lowest terms"
          ],
          relevantFormulas: [
            "6 ÷ 3/4 = 6 × 4/3 = 24/3 = 8",
            "5 ÷ 1/6 = 5 × 6 = 30"
          ],
          availableTools: ["fractionDivision"]
        }
      ]
    },

    learningObjectives: [
      "Visualize whole ÷ fraction as counting how many fit",
      "Apply the reciprocal rule: n ÷ a/b = n × b/a",
      "Handle both unit and non-unit fractions",
      "Simplify answers to lowest terms"
    ],

    keyFormulas: `
**Key Formula:**
n ÷ a/b = n × b/a

**The Key Insight:**
Dividing by a/b is the same as multiplying by b/a (the reciprocal)

**The Counting Model:**
n ÷ 1/b means "how many 1/b pieces are in n wholes?"
Answer: n × b pieces

**Examples:**
• 4 ÷ 1/3 = 4 × 3 = 12 (there are 12 thirds in 4)
• 4 ÷ 2/3 = 4 × 3/2 = 6 (there are 6 two-thirds in 4)
• 6 ÷ 3/4 = 6 × 4/3 = 8
`
  },

  'p6-math-fractions-fraction-by-fraction': {
    displayName: 'Dividing a Fraction by a Fraction',
    topicName: 'dividing a fraction by a fraction',

    progressionStructure: {
      sections: [
        {
          id: "visual-model-frac-div-frac",
          title: "Visual Model: How Many Fit?",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly visualizes and solves fraction ÷ fraction problems like 1/2 ÷ 1/4 = 2 by counting in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct responses using visual counting",
                "Correctly computes results like 2/3 ÷ 1/6 = 4"
              ],
              qualitative: [
                "Understands: 'How many 1/4s fit in 1/2?' Answer: 2",
                "Can visualize using bar models or circle models",
                "Correctly predicts if result will be larger or smaller than 1",
                "Can explain reasoning with visual model"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about counting",
                "Can visualize simple cases"
              ],
              qualitative: [
                "Gets simple cases (1/2 ÷ 1/4) but struggles with harder ones",
                "Needs visual support for all problems",
                "Makes counting errors"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot visualize fraction ÷ fraction"
              ],
              qualitative: [
                "Does not understand 'how many fit' with two fractions",
                "Cannot draw or explain the visual model",
                "Gets confused about which fraction is divided by which"
              ]
            }
          },
          learningObjectives: [
            "Visualize fraction ÷ fraction as 'how many of B fit in A'",
            "Use bar models to count fractional pieces",
            "Solve simple problems like 1/2 ÷ 1/4, 2/3 ÷ 1/6"
          ],
          relevantFormulas: [
            "1/2 ÷ 1/4 = 2 (two quarters fit in one half)",
            "2/3 ÷ 1/6 = 4 (four sixths fit in two thirds)"
          ],
          availableTools: ["fractionDivision", "fractionBar"]
        },
        {
          id: "reciprocal-rule-frac-div-frac",
          title: "The Reciprocal Rule",
          difficulty: "intermediate",
          prerequisites: ["visual-model-frac-div-frac"],
          masterySignals: "Student correctly applies: a/b ÷ c/d = a/b × d/c in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct responses using the reciprocal rule",
                "Can compute without visual models"
              ],
              qualitative: [
                "States: 'Flip the second fraction and multiply'",
                "Correctly converts: 2/3 ÷ 1/6 = 2/3 × 6/1 = 12/3 = 4",
                "Simplifies before and after multiplying",
                "Can explain why the rule works"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Inconsistent with simplification"
              ],
              qualitative: [
                "Knows to flip but makes multiplication errors",
                "Forgets to simplify",
                "Gets confused which fraction to flip"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect applications",
                "Cannot apply the reciprocal rule"
              ],
              qualitative: [
                "Flips the wrong fraction",
                "Cannot multiply two fractions",
                "Does not understand reciprocal concept"
              ]
            }
          },
          learningObjectives: [
            "Apply the rule: a/b ÷ c/d = a/b × d/c",
            "Simplify before and after multiplying",
            "Connect the rule to the visual model"
          ],
          relevantFormulas: [
            "a/b ÷ c/d = a/b × d/c",
            "2/3 ÷ 1/6 = 2/3 × 6/1 = 12/3 = 4",
            "3/4 ÷ 1/8 = 3/4 × 8/1 = 24/4 = 6"
          ],
          availableTools: ["fractionDivision"]
        },
        {
          id: "simplifying-before-multiplying",
          title: "Simplifying Before Multiplying",
          difficulty: "intermediate",
          prerequisites: ["reciprocal-rule-frac-div-frac"],
          masterySignals: "Student simplifies cross-diagonally before multiplying in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct responses with cross-simplification",
                "Efficiently simplifies to reduce computation"
              ],
              qualitative: [
                "Simplifies across numerators and denominators before multiplying",
                "Recognizes common factors quickly",
                "Uses this technique consistently to make calculation easier",
                "Can explain why this works"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with reminders to simplify first",
                "Sometimes spots simplification opportunities"
              ],
              qualitative: [
                "Knows the technique but doesn't always use it",
                "Misses some common factors",
                "Gets correct answer but takes longer route"
              ]
            },
            struggling: {
              quantitative: [
                "Doesn't simplify before multiplying",
                "Works with large numbers unnecessarily"
              ],
              qualitative: [
                "Cannot identify common factors across fractions",
                "Doesn't understand why simplifying first helps",
                "Makes errors with large number multiplication"
              ]
            }
          },
          learningObjectives: [
            "Identify common factors across numerators and denominators",
            "Simplify cross-diagonally before multiplying",
            "Reduce computation with this technique"
          ],
          relevantFormulas: [
            "4/9 ÷ 2/3 = 4/9 × 3/2 = (4×3)/(9×2) = 12/18 = 2/3",
            "Or simplify first: 4/9 × 3/2 → (2×1)/(3×1) = 2/3"
          ],
          availableTools: ["fractionDivision"]
        },
        {
          id: "practice-frac-div-frac",
          title: "Practice Problems",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["simplifying-before-multiplying"],
          masterySignals: "Student fluently solves varied fraction ÷ fraction problems in 4+ problems",
          estimatedQuestions: "4-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "4+ correct responses across varied problems",
                "Efficient computation with simplification"
              ],
              qualitative: [
                "Solves efficiently without visual aids",
                "Consistently simplifies before multiplying",
                "Handles various fraction combinations",
                "Can verify answers logically"
              ]
            },
            developing: {
              quantitative: [
                "2-3 correct with occasional errors",
                "Sometimes forgets to simplify"
              ],
              qualitative: [
                "Makes occasional computation errors",
                "Inconsistent with simplification technique"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot reliably apply the method"
              ],
              qualitative: [
                "Needs more practice with the reciprocal rule",
                "Makes systematic errors"
              ]
            }
          },
          learningObjectives: [
            "Achieve fluency with fraction ÷ fraction",
            "Handle varied problems confidently",
            "Use efficient computation techniques"
          ],
          relevantFormulas: [
            "3/5 ÷ 2/7 = 3/5 × 7/2 = 21/10 = 2 1/10",
            "5/8 ÷ 3/4 = 5/8 × 4/3 = 20/24 = 5/6"
          ],
          availableTools: ["fractionDivision"]
        }
      ]
    },

    learningObjectives: [
      "Visualize fraction ÷ fraction as counting how many fit",
      "Apply the reciprocal rule: a/b ÷ c/d = a/b × d/c",
      "Simplify before multiplying for efficiency",
      "Handle improper fractions and mixed number results"
    ],

    keyFormulas: `
**Key Formula:**
a/b ÷ c/d = a/b × d/c

**The Key Insight:**
To divide fractions, flip the second fraction and multiply

**Steps:**
1. Keep the first fraction the same
2. Flip the second fraction (take its reciprocal)
3. Multiply the fractions
4. Simplify the result

**Examples:**
• 1/2 ÷ 1/4 = 1/2 × 4/1 = 4/2 = 2
• 2/3 ÷ 1/6 = 2/3 × 6/1 = 12/3 = 4
• 3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8 = 1 7/8
`
  },

  'p6-math-fractions-word-problems': {
    displayName: 'Word Problems',
    topicName: 'word problems involving fraction division',

    progressionStructure: {
      sections: [
        {
          id: "single-step-word-problems",
          title: "Single-Step Word Problems",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly solves single-step fraction division word problems in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct responses with clear working",
                "Identifies division operation correctly"
              ],
              qualitative: [
                "Correctly identifies when to divide fractions",
                "Sets up the division correctly from word problem",
                "Shows clear working steps",
                "Writes answer with appropriate units",
                "Can explain why division is the correct operation"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about operation",
                "Sometimes sets up problem incorrectly"
              ],
              qualitative: [
                "Struggles to identify division vs multiplication",
                "Sets up fraction order incorrectly sometimes",
                "Forgets units in answer",
                "Can solve once setup is confirmed"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot identify division problems"
              ],
              qualitative: [
                "Cannot distinguish division from multiplication contexts",
                "Sets up fractions in wrong order",
                "Cannot extract mathematical operation from words",
                "Does not understand problem context"
              ]
            }
          },
          learningObjectives: [
            "Identify division contexts in word problems",
            "Set up fraction division from word problems correctly",
            "Solve and write answers with appropriate units"
          ],
          relevantFormulas: [
            "Sharing problems: Total ÷ portion per person = number of people",
            "Cutting problems: Total ÷ size of each piece = number of pieces"
          ],
          availableTools: ["fractionDivision", "barModel"]
        },
        {
          id: "multi-step-word-problems",
          title: "Multi-Step Word Problems",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["single-step-word-problems"],
          masterySignals: "Student correctly solves 2-3 step word problems involving fraction division in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multi-step problems",
                "Clear, organized working"
              ],
              qualitative: [
                "Correctly identifies all steps needed",
                "Uses bar model to visualize multi-step problems",
                "Shows clear working for each step",
                "Correctly combines fraction operations",
                "Checks reasonableness of answer"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance on steps",
                "May miss intermediate steps"
              ],
              qualitative: [
                "Can solve individual steps but loses track of overall problem",
                "Struggles to organize multi-step working",
                "Needs help identifying all required steps",
                "Sometimes makes errors carrying results between steps"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot complete multi-step problems",
                "Gets lost in problem structure"
              ],
              qualitative: [
                "Cannot break down multi-step problems",
                "Tries to solve in one step",
                "Cannot use bar model for complex problems",
                "Gets overwhelmed by problem complexity"
              ]
            }
          },
          learningObjectives: [
            "Break down multi-step problems into individual steps",
            "Use bar models to visualize complex problems",
            "Combine fraction operations correctly",
            "Check reasonableness of answers"
          ],
          relevantFormulas: [
            "Step 1: Calculate remainder after first action",
            "Step 2: Apply fraction operation to remainder",
            "Step 3: Answer the question asked"
          ],
          availableTools: ["barModel", "fractionDivision"]
        },
        {
          id: "challenging-word-problems",
          title: "Challenging Problems",
          difficulty: "advanced",
          prerequisites: ["multi-step-word-problems"],
          masterySignals: "Student correctly solves challenging word problems requiring fraction division combined with other operations in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct challenging problems",
                "Systematic problem-solving approach"
              ],
              qualitative: [
                "Handles problems with multiple fractions and operations",
                "Uses bar models effectively for complex scenarios",
                "Shows logical, step-by-step working",
                "Can solve problems with 'remainder' and 'of the rest' language",
                "Verifies answers make sense in context"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with significant guidance",
                "Struggles with complex scenarios"
              ],
              qualitative: [
                "Needs help interpreting complex problem language",
                "Can follow a structured approach but cannot create one",
                "Makes errors with multiple fraction operations"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot complete challenging problems",
                "Needs review of earlier sections"
              ],
              qualitative: [
                "Cannot interpret complex fraction word problems",
                "Needs to strengthen fundamental skills first",
                "Gets frustrated with problem complexity"
              ]
            }
          },
          learningObjectives: [
            "Solve complex multi-step problems",
            "Handle 'remainder' and 'fraction of the rest' problems",
            "Combine division with other fraction operations"
          ],
          relevantFormulas: [
            "Remainder = 1 - fraction used",
            "Fraction of remainder = fraction × remaining portion"
          ],
          availableTools: ["barModel", "fractionDivision"]
        }
      ]
    },

    learningObjectives: [
      "Identify when to use fraction division in word problems",
      "Set up and solve single-step word problems",
      "Break down and solve multi-step word problems",
      "Use bar models to visualize complex problems"
    ],

    keyFormulas: `
**Problem Types:**

1. **Sharing/Distribution:**
   "X is shared so each person gets Y. How many people?"
   → X ÷ Y

2. **Cutting/Portioning:**
   "Total is cut into pieces of size Y. How many pieces?"
   → Total ÷ Y

3. **How Many Fit:**
   "How many of size Y fit in X?"
   → X ÷ Y

4. **Remainder Problems:**
   "Spent 2/5, remainder shared equally..."
   Step 1: Remainder = 1 - 2/5 = 3/5
   Step 2: Apply next operation to 3/5

**Key Strategy:** Draw a bar model first!
`
  }
};

// Helper function to get all subtopic IDs
export const getP6FractionsSubtopicIds = (): P6FractionsTopicId[] => {
  return Object.keys(P6_FRACTIONS_SUBTOPICS) as P6FractionsTopicId[];
};
