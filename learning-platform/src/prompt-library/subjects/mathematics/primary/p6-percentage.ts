/**
 * P6 Mathematics - Percentage Topic Configuration
 *
 * Comprehensive configuration for teaching Percentage:
 * 1. Finding the Whole Given a Part and the Percentage
 * 2. Percentage Increase
 * 3. Percentage Decrease
 * 4. Word Problems
 *
 * Target audience: Primary 6 students (11-12 years old)
 * Based on Singapore Math curriculum
 */

// Type exports
export type P6PercentageTopicId =
  | 'p6-math-percentage-finding-whole'
  | 'p6-math-percentage-increase'
  | 'p6-math-percentage-decrease'
  | 'p6-math-percentage-word-problems';

// Topic-specific tutor customization
export const P6_PERCENTAGE_CONFIG = {
  teachingPhilosophy: `You are a friendly and encouraging mathematics tutor for Primary 6 students learning about Percentages.

Teaching Approach:
- Use simple, age-appropriate language suitable for 11-12 year olds
- Use real-world contexts: money (spending/saving), discounts, GST, interest, price changes
- Build from the foundational concept that percent means "per 100" or "out of 100"
- Emphasize the unitary method: find 1%, then scale to find other percentages
- Use visual bar models extensively to show percentage relationships
- Connect percentages to fractions (25% = 1/4, 50% = 1/2, 20% = 1/5)
- Use the Singapore Math model method for word problems
- Celebrate when students make connections between concepts

Key Concepts to Reinforce:
- Percent means "per 100" - 43% means 43 out of 100
- The unitary method: find 1% first, then multiply to find any percentage
- Percentage increase: (Increase ÷ Original) × 100%
- Percentage decrease: (Decrease ÷ Original) × 100%
- The original/base is always 100% in increase/decrease problems
- Bar models help visualize percentage relationships

**Text-to-Speech Guidelines:**
- Say percentages clearly: "43 percent" not "43 per cent" or "43%"
- For operations: say "43 percent of 200" not "43% times 200"
- Say "divided by" not "over" for fractions
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation`,

  visualToolsGuidance: `Use the percentage visualization tools extensively for percentage problems.
IMPORTANT: Use the technical name in the toolName field.

Available tools for this topic:
- percentageBar: PRIMARY TOOL - Horizontal bars with percentage segments. Use for spent/left, before/after comparisons, increase/decrease visualizations.
- unitaryMethodTable: ESSENTIAL - Shows the unitary method calculations with arrows. Use for finding 1%, then 100%.
- percentageStackedBar: Vertical stacked bar for composition problems (e.g., "40% adults, 25% girls, 35% boys").
- percentageGrid: 10×10 grid showing percentage as shaded squares out of 100.
- fractionBar: For showing percentage-fraction connections (25% = 1/4).

Tool usage guidelines:
- Use percentageBar for most percentage bar model problems
- Use unitaryMethodTable when showing step-by-step calculations
- Use percentageStackedBar for composition/distribution problems
- For "finding the whole" problems: show percentageBar with segments for known/unknown portions
- For increase/decrease: show two bars with referenceLine at 100%
- Always include helpful caption explaining the visualization
- Use annotation for key insights (e.g., "1% = $8")`
};

// Available math tools for this topic
export const P6_PERCENTAGE_MATH_TOOLS = [
  "percentageBar",
  "unitaryMethodTable",
  "percentageStackedBar",
  "percentageGrid",
  "fractionBar",
  "ratioBarModel"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const P6_PERCENTAGE_SUBTOPICS = {

  'p6-math-percentage-finding-whole': {
    displayName: 'Finding the Whole Given a Part and the Percentage',
    topicName: 'finding the whole from part and percentage',

    progressionStructure: {
      sections: [
        {
          id: "recall-percentage-basics",
          title: "Recall: Percentage Basics",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly converts between fractions, decimals, and percentages in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conversions between forms",
                "Uses both methods (equivalent fractions and ×100%)"
              ],
              qualitative: [
                "Understands percent means 'per 100' or 'out of 100'",
                "Converts fractions to percentages confidently",
                "Converts percentages to fractions in simplest form",
                "Converts percentages to decimals correctly",
                "Can express part of whole as percentage"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Uses only one conversion method"
              ],
              qualitative: [
                "Understands percent = out of 100 but struggles with conversion",
                "Can convert simple cases (50%, 25%) but not complex ones",
                "Makes errors simplifying fractions from percentages"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot convert between forms"
              ],
              qualitative: [
                "Does not understand percent means out of 100",
                "Confuses percentage with actual quantity",
                "Cannot convert fractions to percentages",
                "Does not understand the relationship between forms"
              ]
            }
          },
          learningObjectives: [
            "Understand that percent means 'per 100'",
            "Convert fractions to percentages using two methods",
            "Convert percentages to fractions in simplest form",
            "Convert percentages to decimals"
          ],
          relevantFormulas: [
            "1% = 1/100 = 0.01",
            "Method 1: 11/50 = 22/100 = 22% (equivalent fraction)",
            "Method 2: 11/50 × 100% = 22% (multiply by 100%)",
            "16% = 16/100 = 4/25 (simplest form)",
            "45% = 45/100 = 0.45"
          ],
          availableTools: ["percentageGrid", "fractionBar"]
        },
        {
          id: "expressing-as-percentage",
          title: "Expressing One Quantity as a Percentage of Another",
          difficulty: "foundational",
          prerequisites: ["recall-percentage-basics"],
          masterySignals: "Student correctly expresses one quantity as a percentage of another in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct percentage expressions",
                "Handles different units correctly"
              ],
              qualitative: [
                "Uses formula (Part ÷ Whole) × 100%",
                "Converts units when necessary (g to g, cm to m)",
                "Identifies which quantity is the 'whole'",
                "Can work with larger numbers"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Struggles with unit conversion"
              ],
              qualitative: [
                "Knows formula but makes calculation errors",
                "Forgets to convert units",
                "Sometimes confuses part and whole"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot express as percentage"
              ],
              qualitative: [
                "Does not understand the formula",
                "Cannot identify part vs whole",
                "Makes major calculation errors"
              ]
            }
          },
          learningObjectives: [
            "Express one quantity as a percentage of another",
            "Use the formula (Part ÷ Whole) × 100%",
            "Handle unit conversions when needed"
          ],
          relevantFormulas: [
            "Percentage = (Part ÷ Whole) × 100%",
            "200g as % of 800g = (200 ÷ 800) × 100% = 25%",
            "Express 30 cm as % of 2 m: First convert 2 m = 200 cm"
          ],
          availableTools: ["percentageBar"]
        },
        {
          id: "finding-whole-unitary-method",
          title: "Finding the Whole - Unitary Method",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["expressing-as-percentage"],
          masterySignals: "Student correctly finds the whole using the unitary method (find 1%, then 100%) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct using unitary method",
                "Shows clear step-by-step working"
              ],
              qualitative: [
                "Finds 1% by dividing by the percentage number",
                "Finds 100% by multiplying 1% by 100",
                "Uses two-step approach: given% → 1% → 100%",
                "Can identify what percentage the given value represents",
                "Shows clear working with all steps"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Makes calculation errors in steps"
              ],
              qualitative: [
                "Understands method but makes arithmetic errors",
                "Sometimes skips finding 1%",
                "Needs prompting for step-by-step approach"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot apply unitary method"
              ],
              qualitative: [
                "Does not understand how to find 1%",
                "Confuses multiplication and division",
                "Cannot set up the problem correctly"
              ]
            }
          },
          learningObjectives: [
            "Find 1% by dividing the given value by the percentage",
            "Find 100% by multiplying 1% by 100",
            "Apply the two-step unitary method systematically",
            "Identify what percentage a given value represents"
          ],
          relevantFormulas: [
            "If 30% = $240:",
            "Step 1: 1% = $240 ÷ 30 = $8",
            "Step 2: 100% = $8 × 100 = $800",
            "Alternative: If 10% = 5, then 100% = 5 × 10 = 50"
          ],
          availableTools: ["percentageBar", "unitaryMethodTable"]
        },
        {
          id: "finding-whole-direct-method",
          title: "Finding the Whole - Direct Method",
          difficulty: "intermediate",
          prerequisites: ["finding-whole-unitary-method"],
          masterySignals: "Student correctly finds the whole using the direct division method in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct using direct method",
                "Chooses appropriate method for efficiency"
              ],
              qualitative: [
                "Uses formula: Whole = Part ÷ (Percentage ÷ 100)",
                "Can convert percentage to decimal for division",
                "Recognizes when direct method is more efficient",
                "Can verify answer by checking percentage"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Prefers unitary method exclusively"
              ],
              qualitative: [
                "Understands concept but makes errors with decimals",
                "Struggles to convert percentage to decimal",
                "Needs support choosing efficient method"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot apply direct method"
              ],
              qualitative: [
                "Does not understand the division approach",
                "Confuses the formula",
                "Cannot work with decimal percentages"
              ]
            }
          },
          learningObjectives: [
            "Find the whole using direct division",
            "Convert percentages to decimals for calculation",
            "Choose the most efficient method for given problem",
            "Verify answers by calculating the percentage"
          ],
          relevantFormulas: [
            "Whole = Part ÷ (Percentage/100)",
            "If 30% = $240: Whole = $240 ÷ 0.30 = $800",
            "If 25% = 50: Whole = 50 ÷ 0.25 = 200"
          ],
          availableTools: ["percentageBar", "unitaryMethodTable"]
        },
        {
          id: "word-problems-finding-whole",
          title: "Word Problems - Finding the Whole",
          difficulty: "intermediate",
          prerequisites: ["finding-whole-unitary-method"],
          masterySignals: "Student correctly solves word problems involving finding the whole in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct word problems",
                "Uses bar model to represent problem"
              ],
              qualitative: [
                "Identifies what percentage is given in the problem",
                "Draws bar model showing known and unknown portions",
                "Applies unitary method correctly",
                "Interprets 'left' as 100% - spent%",
                "Answers the specific question asked"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Struggles to set up the problem"
              ],
              qualitative: [
                "Can solve once problem is set up",
                "Needs help identifying the percentage",
                "Sometimes answers wrong question (finds wrong quantity)"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot solve word problems"
              ],
              qualitative: [
                "Cannot extract percentage from word problem",
                "Does not understand 'spent' vs 'left' relationship",
                "Cannot draw appropriate bar model"
              ]
            }
          },
          learningObjectives: [
            "Extract percentage information from word problems",
            "Draw bar models for percentage word problems",
            "Solve 'spent/left' type problems",
            "Apply finding the whole to real-world contexts"
          ],
          relevantFormulas: [
            "Hassan spent $240 and had 70% left",
            "Spent = 100% - 70% = 30%",
            "30% = $240, so 100% = ?",
            "Use bar model: spent (30%) + left (70%) = 100%"
          ],
          availableTools: ["percentageBar", "unitaryMethodTable"]
        }
      ]
    },

    learningObjectives: [
      "Convert between fractions, decimals, and percentages",
      "Express one quantity as a percentage of another",
      "Find the whole given a part and its percentage using unitary method",
      "Apply direct method for efficiency",
      "Solve word problems involving finding the whole"
    ],

    keyFormulas: `
**Percentage Basics:**
Percent means "per 100" or "out of 100"
1% = 1/100 = 0.01

**Converting Fractions to Percentages:**
Method 1: Make denominator 100
11/50 = 22/100 = 22%

Method 2: Multiply by 100%
11/50 × 100% = 22%

**Expressing as Percentage:**
(Part ÷ Whole) × 100%
200g of 800g = (200÷800) × 100% = 25%

**Finding the Whole (Unitary Method):**
If 30% = $240:
Step 1: 1% = $240 ÷ 30 = $8
Step 2: 100% = $8 × 100 = $800

**Finding the Whole (Direct Method):**
Whole = Part ÷ (Percentage/100)
Whole = $240 ÷ 0.30 = $800

**Word Problem Strategy:**
If "spent $240 and had 70% left":
- Spent = 100% - 70% = 30%
- 30% = $240
- Find 100% using unitary method
`
  },

  'p6-math-percentage-increase': {
    displayName: 'Percentage Increase',
    topicName: 'percentage increase',

    progressionStructure: {
      sections: [
        {
          id: "understanding-percentage-increase",
          title: "Understanding Percentage Increase",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly calculates percentage increase using the formula in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct percentage increase calculations",
                "Uses formula correctly with clear working"
              ],
              qualitative: [
                "Understands increase = new value - original value",
                "Applies formula: (Increase ÷ Original) × 100%",
                "Recognizes that original is always the base (100%)",
                "Can calculate increase when given original and new values",
                "Interprets percentage increase in context"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Sometimes confuses increase with new value"
              ],
              qualitative: [
                "Knows formula but makes calculation errors",
                "Sometimes divides by new value instead of original",
                "Needs prompting to find increase first"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot calculate percentage increase"
              ],
              qualitative: [
                "Does not understand what percentage increase means",
                "Confuses original and new values",
                "Cannot apply the formula"
              ]
            }
          },
          learningObjectives: [
            "Understand what percentage increase represents",
            "Calculate the increase (new - original)",
            "Apply formula: (Increase ÷ Original) × 100%",
            "Recognize that original value is always 100%"
          ],
          relevantFormulas: [
            "Increase = New Value - Original Value",
            "Percentage Increase = (Increase ÷ Original) × 100%",
            "5 medals → 7 medals: Increase = 2",
            "% Increase = (2 ÷ 5) × 100% = 40%"
          ],
          availableTools: ["percentageBar", "unitaryMethodTable"]
        },
        {
          id: "calculating-percentage-increase",
          title: "Calculating Percentage Increase",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["understanding-percentage-increase"],
          masterySignals: "Student confidently calculates percentage increase using both formula and table methods in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations",
                "Uses both formula and table methods"
              ],
              qualitative: [
                "Uses formula method efficiently",
                "Uses table method: Original=100%, find %increase",
                "Can work with larger numbers",
                "Handles non-whole number percentages",
                "Verifies answers make sense"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Uses only one method"
              ],
              qualitative: [
                "Can apply one method but not the other",
                "Makes errors with larger numbers",
                "Struggles with non-whole percentages"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot calculate reliably"
              ],
              qualitative: [
                "Confuses the steps",
                "Cannot set up the table method",
                "Makes frequent calculation errors"
              ]
            }
          },
          learningObjectives: [
            "Calculate percentage increase using formula method",
            "Calculate percentage increase using table method",
            "Handle various number sizes and contexts",
            "Work with non-whole number percentages"
          ],
          relevantFormulas: [
            "Formula: (Increase ÷ Original) × 100%",
            "Table Method:",
            "Original (5) = 100%",
            "1 unit = 100% ÷ 5 = 20%",
            "Increase (2) = 2 × 20% = 40%"
          ],
          availableTools: ["percentageBar", "unitaryMethodTable"]
        },
        {
          id: "finding-new-value-from-increase",
          title: "Finding New Value from Percentage Increase",
          difficulty: "intermediate",
          prerequisites: ["calculating-percentage-increase"],
          masterySignals: "Student correctly finds new value given original and percentage increase in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct new value calculations",
                "Uses efficient calculation methods"
              ],
              qualitative: [
                "Calculates increase: Original × (Percentage/100)",
                "Adds increase to original to get new value",
                "Alternative: Original × (100% + increase%)/100",
                "Can work backwards to verify",
                "Applies to real contexts (GST, interest, price increase)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Forgets to add increase to original"
              ],
              qualitative: [
                "Calculates increase but forgets final step",
                "Needs prompting for the complete process",
                "Makes arithmetic errors"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot find new value"
              ],
              qualitative: [
                "Confuses percentage of and percentage increase",
                "Does not understand the relationship",
                "Cannot apply to word problems"
              ]
            }
          },
          learningObjectives: [
            "Calculate the increase amount from percentage",
            "Find new value: Original + Increase",
            "Use alternative method: Original × (1 + percentage/100)",
            "Apply to GST, interest, and price increase problems"
          ],
          relevantFormulas: [
            "Increase Amount = Original × (Percentage/100)",
            "New Value = Original + Increase",
            "Or: New Value = Original × (100% + Increase%)/100%",
            "GST 9% on $30: GST = $30 × 0.09 = $2.70",
            "Price with GST = $30 + $2.70 = $32.70"
          ],
          availableTools: ["percentageBar", "unitaryMethodTable"]
        },
        {
          id: "finding-original-from-increase",
          title: "Finding Original from Percentage Increase",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["finding-new-value-from-increase"],
          masterySignals: "Student correctly finds original value given increase amount and percentage in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct original value calculations",
                "Uses unitary method effectively"
              ],
              qualitative: [
                "Recognizes that increase amount = given percentage",
                "Uses unitary method: increase% → 1% → 100%",
                "Can find original when given new value and %increase",
                "Draws bar model showing relationship",
                "Applies to price increase problems"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance",
                "Struggles to set up the problem"
              ],
              qualitative: [
                "Understands concept but makes setup errors",
                "Needs help identifying what the percentage represents",
                "Makes calculation errors in unitary method"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot find original value"
              ],
              qualitative: [
                "Cannot identify that increase = given percentage",
                "Confuses new value with increase",
                "Cannot apply unitary method to this context"
              ]
            }
          },
          learningObjectives: [
            "Recognize increase amount represents the percentage increase",
            "Apply unitary method: increase% → 1% → 100%",
            "Find original when given new value and percentage increase",
            "Draw bar models for increase problems"
          ],
          relevantFormulas: [
            "If 20% increase = $32:",
            "20% = $32",
            "1% = $32 ÷ 20 = $1.60",
            "100% (Original) = $1.60 × 100 = $160",
            "Or: Original = Increase ÷ (Percentage/100)"
          ],
          availableTools: ["percentageBar", "unitaryMethodTable"]
        }
      ]
    },

    learningObjectives: [
      "Understand what percentage increase represents",
      "Calculate percentage increase using formula",
      "Find new value from original and percentage increase",
      "Find original value from increase and percentage",
      "Apply percentage increase to real-world contexts"
    ],

    keyFormulas: `
**Understanding Percentage Increase:**
When a value goes UP, we have an increase.
Increase = New Value - Original Value

**Calculating Percentage Increase:**
% Increase = (Increase ÷ Original) × 100%

Example: 80 buns → 120 buns
Increase = 120 - 80 = 40
% Increase = (40 ÷ 80) × 100% = 50%

**Finding New Value:**
Increase Amount = Original × (Percentage/100)
New Value = Original + Increase

Example: $40 T-shirt with 20% increase
Increase = $40 × 0.20 = $8
New Price = $40 + $8 = $48

**Finding Original from Increase:**
If 20% increase = $32:
1% = $32 ÷ 20 = $1.60
100% (Original) = $160

**Key Point:**
The ORIGINAL value is always 100% (the base).
`
  },

  'p6-math-percentage-decrease': {
    displayName: 'Percentage Decrease',
    topicName: 'percentage decrease',

    progressionStructure: {
      sections: [
        {
          id: "understanding-percentage-decrease",
          title: "Understanding Percentage Decrease",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly calculates percentage decrease using the formula in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct percentage decrease calculations",
                "Uses formula correctly with clear working"
              ],
              qualitative: [
                "Understands decrease = original value - new value",
                "Applies formula: (Decrease ÷ Original) × 100%",
                "Recognizes that original is always the base (100%)",
                "Can calculate decrease when given original and new values",
                "Interprets percentage decrease in context"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Sometimes confuses decrease with remaining"
              ],
              qualitative: [
                "Knows formula but makes calculation errors",
                "Sometimes divides by new value instead of original",
                "Confuses percentage decrease with percentage remaining"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot calculate percentage decrease"
              ],
              qualitative: [
                "Does not understand what percentage decrease means",
                "Confuses decrease with new value",
                "Cannot apply the formula"
              ]
            }
          },
          learningObjectives: [
            "Understand what percentage decrease represents",
            "Calculate the decrease (original - new)",
            "Apply formula: (Decrease ÷ Original) × 100%",
            "Distinguish between decrease and remaining"
          ],
          relevantFormulas: [
            "Decrease = Original Value - New Value",
            "Percentage Decrease = (Decrease ÷ Original) × 100%",
            "280 members → 70 members: Decrease = 210",
            "% Decrease = (210 ÷ 280) × 100% = 75%"
          ],
          availableTools: ["percentageBar", "unitaryMethodTable"]
        },
        {
          id: "calculating-percentage-decrease",
          title: "Calculating Percentage Decrease",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["understanding-percentage-decrease"],
          masterySignals: "Student confidently calculates percentage decrease using both formula and table methods in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations",
                "Uses both formula and table methods"
              ],
              qualitative: [
                "Uses formula method efficiently",
                "Uses table method: Original=100%, find %decrease",
                "Can work with larger numbers",
                "Handles non-whole number percentages",
                "Can also find percentage remaining (100% - decrease%)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Uses only one method"
              ],
              qualitative: [
                "Can apply one method but not the other",
                "Confuses decrease with remaining",
                "Makes calculation errors"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot calculate reliably"
              ],
              qualitative: [
                "Confuses the steps",
                "Cannot set up the table method",
                "Does not understand the relationship"
              ]
            }
          },
          learningObjectives: [
            "Calculate percentage decrease using formula method",
            "Calculate percentage decrease using table method",
            "Distinguish between percentage decrease and percentage remaining",
            "Work with various number sizes"
          ],
          relevantFormulas: [
            "Formula: (Decrease ÷ Original) × 100%",
            "% Remaining = 100% - % Decrease",
            "If 75% decrease, then 25% remaining",
            "Table Method:",
            "Original = 100%, New = ?%, Decrease = 100% - New%"
          ],
          availableTools: ["percentageBar", "unitaryMethodTable"]
        },
        {
          id: "finding-new-value-from-decrease",
          title: "Finding New Value from Percentage Decrease",
          difficulty: "intermediate",
          prerequisites: ["calculating-percentage-decrease"],
          masterySignals: "Student correctly finds new value given original and percentage decrease in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct new value calculations",
                "Uses efficient calculation methods"
              ],
              qualitative: [
                "Calculates decrease: Original × (Percentage/100)",
                "Subtracts decrease from original to get new value",
                "Alternative: Original × (100% - decrease%)/100",
                "Applies to discount and depreciation problems",
                "Can work backwards to verify"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Forgets to subtract decrease from original"
              ],
              qualitative: [
                "Calculates decrease but forgets final step",
                "Confuses subtracting with adding",
                "Makes arithmetic errors"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot find new value"
              ],
              qualitative: [
                "Confuses percentage decrease with percentage of",
                "Does not understand to subtract",
                "Cannot apply to word problems"
              ]
            }
          },
          learningObjectives: [
            "Calculate the decrease amount from percentage",
            "Find new value: Original - Decrease",
            "Use alternative method: Original × (1 - percentage/100)",
            "Apply to discount and depreciation problems"
          ],
          relevantFormulas: [
            "Decrease Amount = Original × (Percentage/100)",
            "New Value = Original - Decrease",
            "Or: New Value = Original × (100% - Decrease%)/100%",
            "20% discount on $40: Discount = $40 × 0.20 = $8",
            "Sale Price = $40 - $8 = $32"
          ],
          availableTools: ["percentageBar", "unitaryMethodTable"]
        },
        {
          id: "finding-original-from-decrease",
          title: "Finding Original from Percentage Decrease",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["finding-new-value-from-decrease"],
          masterySignals: "Student correctly finds original value given remaining amount and percentage decrease in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct original value calculations",
                "Uses unitary method effectively"
              ],
              qualitative: [
                "Recognizes remaining represents (100% - decrease%)",
                "Uses unitary method: remaining% → 1% → 100%",
                "Can find original when given new value and %decrease",
                "Draws bar model showing relationship",
                "Applies to discount and depreciation problems"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance",
                "Struggles to identify remaining percentage"
              ],
              qualitative: [
                "Understands concept but makes setup errors",
                "Forgets to calculate (100% - decrease%)",
                "Makes calculation errors in unitary method"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot find original value"
              ],
              qualitative: [
                "Cannot identify that remaining = (100% - decrease%)",
                "Confuses new value with decrease amount",
                "Cannot apply unitary method to this context"
              ]
            }
          },
          learningObjectives: [
            "Recognize remaining represents (100% - decrease%)",
            "Apply unitary method: remaining% → 1% → 100%",
            "Find original when given new value and percentage decrease",
            "Draw bar models for decrease problems"
          ],
          relevantFormulas: [
            "If 30% decrease, remaining = 70%",
            "If 70% = 210:",
            "1% = 210 ÷ 70 = 3",
            "100% (Original) = 3 × 100 = 300",
            "Or: Original = Remaining ÷ (100% - Decrease%)/100%"
          ],
          availableTools: ["percentageBar", "unitaryMethodTable"]
        }
      ]
    },

    learningObjectives: [
      "Understand what percentage decrease represents",
      "Calculate percentage decrease using formula",
      "Find new value from original and percentage decrease",
      "Find original value from remaining and percentage",
      "Apply percentage decrease to discounts and real-world contexts"
    ],

    keyFormulas: `
**Understanding Percentage Decrease:**
When a value goes DOWN, we have a decrease.
Decrease = Original Value - New Value

**Calculating Percentage Decrease:**
% Decrease = (Decrease ÷ Original) × 100%

Example: 280 members → 70 members
Decrease = 280 - 70 = 210
% Decrease = (210 ÷ 280) × 100% = 75%

**Finding New Value:**
Decrease Amount = Original × (Percentage/100)
New Value = Original - Decrease

Example: $40 T-shirt with 20% discount
Discount = $40 × 0.20 = $8
Sale Price = $40 - $8 = $32

**Finding Original from Remaining:**
If 30% decrease (70% remaining) and 70% = 210:
1% = 210 ÷ 70 = 3
100% (Original) = 300

**Key Relationships:**
% Remaining = 100% - % Decrease
If 75% decrease → 25% remaining
`
  },

  'p6-math-percentage-word-problems': {
    displayName: 'Word Problems',
    topicName: 'percentage word problems',

    progressionStructure: {
      sections: [
        {
          id: "gst-discount-interest",
          title: "GST, Discount, and Interest",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly solves GST, discount, and interest problems in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct across problem types",
                "Uses appropriate formula for each context"
              ],
              qualitative: [
                "Calculates GST and adds to get final price",
                "Calculates discount and subtracts to get sale price",
                "Calculates simple interest and adds to principal",
                "Identifies problem type and applies correct operation",
                "Shows clear working"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Confuses add vs subtract"
              ],
              qualitative: [
                "Can calculate percentage but forgets final operation",
                "Confuses GST (add) with discount (subtract)",
                "Needs prompting for the complete solution"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot complete problems"
              ],
              qualitative: [
                "Cannot identify problem type",
                "Does not know whether to add or subtract",
                "Cannot extract information from word problem"
              ]
            }
          },
          learningObjectives: [
            "Calculate GST and find price including GST",
            "Calculate discount and find sale price",
            "Calculate simple interest and find total savings",
            "Identify problem type from context clues"
          ],
          relevantFormulas: [
            "GST: Final Price = Original + (Original × GST%)",
            "Discount: Sale Price = Original - (Original × Discount%)",
            "Interest: Total = Principal + (Principal × Rate% × Time)"
          ],
          availableTools: ["percentageBar", "unitaryMethodTable"]
        },
        {
          id: "part-to-whole-composition",
          title: "Part-to-Whole Composition",
          difficulty: "intermediate",
          prerequisites: ["gst-discount-interest"],
          masterySignals: "Student correctly solves composition problems (e.g., '40% adults, 25% girls, rest boys') in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct composition problems",
                "Uses stacked bar model effectively"
              ],
              qualitative: [
                "Identifies all parts add to 100%",
                "Converts fractions to percentages when mixed",
                "Calculates unknown percentage (100% - known parts)",
                "Uses stacked bar to visualize",
                "Finds actual values from known parts"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Struggles with mixed fractions and percentages"
              ],
              qualitative: [
                "Can work with percentages only",
                "Needs help converting fractions",
                "Makes errors calculating 'rest'"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot solve composition problems"
              ],
              qualitative: [
                "Does not understand parts add to 100%",
                "Cannot convert between fractions and percentages",
                "Cannot visualize the composition"
              ]
            }
          },
          learningObjectives: [
            "Understand all parts of a whole add to 100%",
            "Convert fractions to percentages in mixed problems",
            "Calculate unknown percentage: 100% - known parts",
            "Use stacked bar model for composition problems"
          ],
          relevantFormulas: [
            "2/5 of audience = 2/5 × 100% = 40%",
            "40% adults + 25% girls + ?% boys = 100%",
            "Boys = 100% - 40% - 25% = 35%",
            "If 35% = 70, then 100% = 200"
          ],
          availableTools: ["percentageStackedBar", "percentageBar", "unitaryMethodTable"]
        },
        {
          id: "multi-step-problems",
          title: "Multi-Step Problems",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["part-to-whole-composition"],
          masterySignals: "Student correctly solves multi-step percentage problems in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multi-step problems",
                "Shows organized step-by-step working"
              ],
              qualitative: [
                "Breaks complex problem into steps",
                "Handles multiple percentage operations",
                "Applies increase/decrease in sequence",
                "Tracks intermediate results correctly",
                "Verifies final answer makes sense"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with significant guidance",
                "Loses track in multi-step"
              ],
              qualitative: [
                "Can solve individual steps",
                "Gets confused with sequence of operations",
                "Needs help organizing the solution"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot complete multi-step problems",
                "Needs to strengthen single-step first"
              ],
              qualitative: [
                "Cannot break down complex problems",
                "Gets overwhelmed by multiple operations",
                "Makes errors carrying values forward"
              ]
            }
          },
          learningObjectives: [
            "Break complex problems into manageable steps",
            "Apply multiple percentage operations in sequence",
            "Track intermediate results accurately",
            "Verify answers through estimation or checking"
          ],
          relevantFormulas: [
            "Step 1: Calculate first operation",
            "Step 2: Use result for next operation",
            "Step 3: Continue until final answer",
            "Check: Does the answer make sense?"
          ],
          availableTools: ["percentageBar", "unitaryMethodTable"]
        },
        {
          id: "percentage-of-remainder",
          title: "Percentage of Remainder",
          difficulty: "advanced",
          prerequisites: ["multi-step-problems"],
          masterySignals: "Student correctly solves problems involving percentage of a remainder in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct remainder problems",
                "Uses bar model to track portions"
              ],
              qualitative: [
                "Understands 'of the remainder' means percentage of what's left",
                "Calculates first operation correctly",
                "Applies second percentage to the remainder",
                "Draws multi-stage bar model",
                "Can work backwards from final value"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance",
                "Struggles with 'of the remainder' concept"
              ],
              qualitative: [
                "Can calculate first step",
                "Confuses remainder with original whole",
                "Needs help understanding 'of the remainder'"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot solve remainder problems",
                "Needs to review basic concepts"
              ],
              qualitative: [
                "Does not understand 'remainder'",
                "Applies percentage to wrong value",
                "Cannot draw appropriate bar model"
              ]
            }
          },
          learningObjectives: [
            "Understand 'of the remainder' means percentage of what's left",
            "Calculate remainder after first operation",
            "Apply percentage to remainder, not original",
            "Draw multi-stage bar models"
          ],
          relevantFormulas: [
            "Sold 25% morning → 75% remainder",
            "Sold 1/6 of remainder afternoon",
            "1/6 of 75% = 12.5%",
            "Left = 75% - 12.5% = 62.5% of original"
          ],
          availableTools: ["percentageBar", "unitaryMethodTable"]
        },
        {
          id: "percentage-of-percentage",
          title: "Percentage of Percentage",
          difficulty: "advanced",
          prerequisites: ["percentage-of-remainder"],
          masterySignals: "Student correctly solves nested percentage problems (percentage of a percentage) in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct nested percentage problems",
                "Calculates compound percentages accurately"
              ],
              qualitative: [
                "Understands 70% of 80% concept",
                "Calculates: 70% × 80% = 56%",
                "Can work with nested categories",
                "Uses stacked bar to visualize layers",
                "Applies to real contexts (e.g., buttons problem)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance",
                "Struggles with nested calculation"
              ],
              qualitative: [
                "Understands concept but makes calculation errors",
                "Needs help setting up the multiplication",
                "Can solve with simpler numbers"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot solve nested percentage problems",
                "Does not understand the concept"
              ],
              qualitative: [
                "Does not understand 'percentage of percentage'",
                "Cannot multiply percentages",
                "Cannot visualize the layers"
              ]
            }
          },
          learningObjectives: [
            "Understand percentage of a percentage concept",
            "Calculate: X% of Y% = (X/100) × (Y/100) × 100%",
            "Visualize nested percentages with stacked bar",
            "Apply to multi-category problems"
          ],
          relevantFormulas: [
            "80% of buttons are blue",
            "70% of blue are square-shaped",
            "Square blue buttons = 70% × 80% = 56% of total",
            "If 30% of blue (round) = 60 buttons",
            "30% × 80% = 24% of total = 60"
          ],
          availableTools: ["percentageStackedBar", "percentageBar", "unitaryMethodTable"]
        },
        {
          id: "combined-fractions-percentages",
          title: "Combined Fractions and Percentages",
          difficulty: "advanced",
          prerequisites: ["percentage-of-percentage"],
          masterySignals: "Student correctly solves problems mixing fractions and percentages in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct mixed notation problems",
                "Converts fluently between forms"
              ],
              qualitative: [
                "Converts fractions to percentages for consistency",
                "Recognizes common equivalents (1/4=25%, 1/5=20%)",
                "Uses bar model with mixed units",
                "Solves Siti/Xinyi type comparison problems",
                "Shows clear conversion working"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance",
                "Struggles with conversion"
              ],
              qualitative: [
                "Can solve if given all in same form",
                "Makes conversion errors",
                "Needs help choosing which form to use"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot solve mixed notation problems",
                "Needs to review conversions"
              ],
              qualitative: [
                "Cannot convert between fractions and percentages",
                "Gets confused by mixed notation",
                "Cannot set up the comparison"
              ]
            }
          },
          learningObjectives: [
            "Convert between fractions and percentages fluently",
            "Choose consistent notation for calculation",
            "Solve problems with mixed fraction/percentage notation",
            "Use bar models with fraction-based units"
          ],
          relevantFormulas: [
            "Siti spent 20% = 1/5 of her money",
            "Xinyi spent 25% = 1/4 of her money",
            "Siti: 5 units (1 spent, 4 left)",
            "Xinyi: 4 units (1 spent, 3 left)",
            "Combined: 4 + 3 = 7 units left = $700"
          ],
          availableTools: ["percentageBar", "ratioBarModel", "unitaryMethodTable"]
        }
      ]
    },

    learningObjectives: [
      "Apply percentage to GST, discount, and interest",
      "Solve composition problems with mixed percentages",
      "Handle multi-step percentage problems",
      "Calculate percentage of remainder",
      "Work with nested percentages",
      "Solve problems mixing fractions and percentages"
    ],

    keyFormulas: `
**GST, Discount, Interest:**
GST: Price with GST = Original × (1 + GST%)
Discount: Sale Price = Original × (1 - Discount%)
Interest: Total = Principal × (1 + Rate% × Years)

**Part-to-Whole Composition:**
All parts add to 100%
2/5 + 25% + boys% = 100%
40% + 25% + boys% = 100%
Boys% = 35%

**Percentage of Remainder:**
Sold 25% morning → 75% left
Sold 1/6 of remainder = 1/6 × 75% = 12.5%
Finally left = 75% - 12.5% = 62.5%

**Nested Percentages:**
70% of 80% = 0.70 × 0.80 × 100% = 56%

**Mixed Fractions and Percentages:**
Convert to same form:
20% = 1/5 (spent 1 of 5 parts)
25% = 1/4 (spent 1 of 4 parts)
Use bar model with appropriate units
`
  }
};

// Helper function to get all subtopic IDs
export const getP6PercentageSubtopicIds = (): P6PercentageTopicId[] => {
  return Object.keys(P6_PERCENTAGE_SUBTOPICS) as P6PercentageTopicId[];
};
