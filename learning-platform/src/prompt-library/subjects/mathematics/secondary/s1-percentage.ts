/**
 * S1 Mathematics - Percentage Topic Configuration
 *
 * Clean topic configuration using the new prompt library architecture.
 * Inherits from base agents, formatting rules, and interaction protocols.
 *
 * Coverage: Introduction, Conversions, Expressing as %, Comparing,
 * Percentage Change, Reverse %, Real-World Applications
 */

// Type exports
export type PercentageTopicId =
  | 's1-math-percentage-introduction'
  | 's1-math-percentage-conversions'
  | 's1-math-percentage-expressing'
  | 's1-math-percentage-comparing'
  | 's1-math-percentage-change'
  | 's1-math-percentage-reverse'
  | 's1-math-percentage-applications';

// Topic-specific tutor customization (overrides base)
export const PERCENTAGE_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary school students learning Percentage concepts.

Teaching Approach:
- Guide students to discover percentage patterns and relationships through questioning
- Help students understand percentages as proportions "out of 100"
- Use real-world contexts (shopping discounts, test scores, statistics, banking)
- Celebrate insights when students connect percentages to fractions and decimals
- Address common misconceptions explicitly (percentage points vs percentage change, sequential changes)
- Adapt difficulty organically based on student mastery

**Common Misconceptions to Address:**
- Students adding percentages directly without considering different bases
- Confusing percentage points with percentage change
- Assuming equal percentage increase then decrease returns to original value
- Not converting units before calculating percentages
- Mixing up "part" and "whole" in percentage calculations

**Text-to-Speech Guidelines:**
- Say "percent" or "percentage" clearly - avoid abbreviating
- Say "x percent of y" for clear pronunciation
- Spell out formulas: "x divided by y, multiplied by 100 percent"
- Avoid symbols like % in speech - say "percent" instead
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally
- Currency: say "dollar sign 100" or "100 dollars", not using $ symbol in speech`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding.
IMPORTANT: Use the technical name (e.g., "fractionBar") in the toolName field, NOT the display name.

Available tools:
- "fractionBar": Show percentage-fraction-decimal equivalence
- "numberLine": Display percentage ranges, changes, comparisons
- "barChart": Visualize part-whole relationships, percentage breakdowns`
};

// Available math tools for this topic
export const PERCENTAGE_MATH_TOOLS = [
  "fractionBar",
  "numberLine",
  "barChart"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S1_PERCENTAGE_SUBTOPICS = {

  // ========================================
  // SUBTOPIC 1: INTRODUCTION TO PERCENTAGE
  // ========================================
  's1-math-percentage-introduction': {
    displayName: 'Introduction to Percentage',
    topicName: 'introduction to percentage',

    progressionStructure: {
      sections: [
        {
          id: "meaning-of-percentage",
          title: "Meaning of Percentage",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly defines percentage and identifies percentages in context in 3+ examples",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct answers without hints",
                "Consistent accuracy identifying percentages"
              ],
              qualitative: [
                "Correctly defines percentage as 'out of 100'",
                "Recognizes and interprets the % symbol correctly",
                "Identifies percentages in real-world contexts (statistics, scores, storage)",
                "Explains that percentage represents a proportion",
                "Understands that 100% represents the whole"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about the definition",
                "Occasional errors in interpretation"
              ],
              qualitative: [
                "Understands basic concept but needs prompting for definition",
                "Can identify percentages once reminded what to look for",
                "Struggles with real-world application without guidance",
                "Needs clarification on what 'out of 100' means"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect attempts",
                "Cannot define percentage without full explanation",
                "Requests solution early"
              ],
              qualitative: [
                "Confuses percentage with absolute numbers (thinks 35% is the same as 35)",
                "Does not understand 'per cent' or 'out of 100' concept",
                "Cannot recognize percentages in context",
                "Confuses % symbol with other mathematical symbols"
              ]
            }
          },
          learningObjectives: [
            "Define percentage and explain 'per cent' means 'out of 100'",
            "Interpret and use the % symbol correctly",
            "Recognize percentages in real-world contexts (news, statistics, daily life)",
            "Understand that percentage represents a proportion or part of a whole",
            "Explain that 100% represents one complete whole"
          ],
          relevantFormulas: [
            "Definition: x% means x out of 100",
            "Symbol: % represents 'per cent' or 'out of 100'",
            "Example: 35% = 35 out of 100"
          ],
          availableTools: ["fractionBar", "numberLine"]
        },
        {
          id: "percentage-as-proportion",
          title: "Percentage as a Proportion",
          difficulty: "foundational",
          prerequisites: ["meaning-of-percentage"],
          masterySignals: "Student correctly applies the concept that 100% = whole and calculates basic percentages in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations without hints",
                "Consistent understanding that parts sum to 100%"
              ],
              qualitative: [
                "Recognizes that one whole = 100%",
                "Understands percentages can be greater than 100% or less than 1%",
                "Correctly identifies parts of a whole that sum to 100%",
                "Can find the percentage of a part given the whole is 100 items",
                "Explains why multiple parts must sum to 100% (when representing complete whole)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on the 100% = whole concept",
                "Makes occasional calculation errors"
              ],
              qualitative: [
                "Understands 100% = whole but uncertain about parts summing",
                "Can calculate simple percentages with prompting",
                "Struggles with percentages > 100% or < 1%",
                "Needs guidance to verify parts sum correctly"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect attempts",
                "Cannot identify parts and whole",
                "Requests solution early"
              ],
              qualitative: [
                "Does not understand that 100% represents the complete whole",
                "Cannot calculate basic percentages from 100 items",
                "Confuses individual percentages with total",
                "Does not recognize when parts should sum to 100%"
              ]
            }
          },
          learningObjectives: [
            "Recognize that 100% represents one complete whole",
            "Understand that percentages can exceed 100% (e.g., 150% growth)",
            "Understand that percentages can be less than 1% (e.g., 0.5% interest)",
            "Calculate simple percentages when whole is 100 units",
            "Identify and verify that parts of a whole sum to 100%",
            "Apply percentage concept to multi-part problems"
          ],
          relevantFormulas: [
            "One whole = 100%",
            "If parts make up the whole: Part A % + Part B % + ... = 100%",
            "Percentage of quantity: (part/whole) × 100%",
            "Example: 35 out of 100 = 35/100 × 100% = 35%"
          ],
          availableTools: ["fractionBar", "barChart"]
        }
      ]
    },

    learningObjectives: [
      "Understand the meaning of percentage and the % symbol",
      "Recognize that percentage represents a proportion 'out of 100'",
      "Apply the concept that 100% = one complete whole",
      "Identify percentages in real-world contexts",
      "Calculate basic percentages from quantities of 100"
    ],

    keyFormulas: `
**Core Definition:**
- Percentage (%) = "per cent" = "out of 100"
- x% means x out of 100

**Whole and Parts:**
- One complete whole = 100%
- If parts make up whole: Sum of all parts = 100%

**Basic Calculation:**
- Percentage = (part/whole) × 100%
- Example: 35 out of 100 = (35/100) × 100% = 35%
    `
  },

  // ================================================
  // SUBTOPIC 2: PERCENTAGE, FRACTION, AND DECIMAL CONVERSIONS
  // ================================================
  's1-math-percentage-conversions': {
    displayName: 'Percentage, Fraction, and Decimal Conversions',
    topicName: 'percentage conversions',

    progressionStructure: {
      sections: [
        {
          id: "percentage-to-fraction-decimal",
          title: "Converting Percentage to Fraction and Decimal",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly converts percentages to fractions (simplified) and decimals in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conversions without hints",
                "Consistent simplification of fractions"
              ],
              qualitative: [
                "Converts % to fraction using x% = x/100",
                "Simplifies fractions to lowest terms (50% = 50/100 = 1/2)",
                "Converts % to decimal by dividing by 100 (25% = 0.25)",
                "Handles percentages with decimals (12.5% = 12.5/100 = 1/8)",
                "Explains that all three forms represent the same quantity"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on simplification",
                "Occasional errors in decimal placement"
              ],
              qualitative: [
                "Can convert to fraction but forgets to simplify",
                "Converts to decimal but makes decimal point errors",
                "Needs prompting for percentages with decimal places",
                "Understands process once reminded of steps"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect conversions",
                "Cannot simplify fractions",
                "Requests solution early"
              ],
              qualitative: [
                "Does not know x% = x/100",
                "Cannot divide by 100 correctly for decimal conversion",
                "Does not simplify fractions (leaves as 50/100 instead of 1/2)",
                "Confuses conversion processes (multiplies instead of divides)"
              ]
            }
          },
          learningObjectives: [
            "Convert percentage to fraction using x% = x/100",
            "Simplify fractions to lowest terms after conversion",
            "Convert percentage to decimal by dividing by 100",
            "Handle percentages with decimal places (12.5%, 33.33%)",
            "Recognize equivalence: 50% = 1/2 = 0.5",
            "Explain conversion process clearly"
          ],
          relevantFormulas: [
            "Percentage to fraction: x% = x/100 (then simplify)",
            "Percentage to decimal: x% = x ÷ 100",
            "Examples:",
            "  75% = 75/100 = 3/4 (fraction)",
            "  75% = 75 ÷ 100 = 0.75 (decimal)",
            "  12.5% = 12.5/100 = 125/1000 = 1/8 (fraction)",
            "  12.5% = 12.5 ÷ 100 = 0.125 (decimal)"
          ],
          availableTools: ["fractionBar", "numberLine"]
        },
        {
          id: "fraction-decimal-to-percentage",
          title: "Converting Fraction and Decimal to Percentage",
          difficulty: "foundational",
          prerequisites: ["percentage-to-fraction-decimal"],
          masterySignals: "Student correctly converts fractions and decimals to percentages in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conversions without hints",
                "Consistent accuracy across different forms"
              ],
              qualitative: [
                "Converts fraction to % by multiplying by 100: (3/4) × 100 = 75%",
                "Converts decimal to % by multiplying by 100: 0.75 × 100 = 75%",
                "Handles improper fractions resulting in percentages > 100%",
                "Correctly places % symbol after calculation",
                "Explains that multiplying by 100 is the reverse of dividing by 100"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on multiplication",
                "Occasional errors with improper fractions or decimals"
              ],
              qualitative: [
                "Understands the process but makes calculation errors",
                "Forgets to include % symbol in final answer",
                "Needs prompting for improper fractions (5/4 = 125%)",
                "Can complete once conversion method is clarified"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect conversions",
                "Divides instead of multiplies",
                "Requests solution early"
              ],
              qualitative: [
                "Does not know to multiply by 100",
                "Confuses conversion direction (uses percentage→fraction method instead)",
                "Cannot handle improper fractions",
                "Makes significant calculation errors with decimals"
              ]
            }
          },
          learningObjectives: [
            "Convert fraction to percentage by multiplying by 100",
            "Convert decimal to percentage by multiplying by 100",
            "Handle improper fractions (resulting in % > 100%)",
            "Place % symbol correctly in final answer",
            "Explain why we multiply by 100 (inverse of dividing by 100)",
            "Recognize equivalent representations"
          ],
          relevantFormulas: [
            "Fraction to percentage: (fraction) × 100%",
            "Decimal to percentage: (decimal) × 100%",
            "Examples:",
            "  3/4 × 100% = 75%",
            "  0.75 × 100% = 75%",
            "  5/4 × 100% = 125% (improper fraction)",
            "  1.25 × 100% = 125%",
            "  1/3 × 100% = 33.33...% (recurring decimal)"
          ],
          availableTools: ["fractionBar", "numberLine"]
        },
        {
          id: "comparison-using-percentages",
          title: "Comparing Quantities Using Percentages",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["fraction-decimal-to-percentage"],
          masterySignals: "Student correctly converts to percentages and compares quantities in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct comparisons without hints",
                "Converts all quantities to percentages before comparing"
              ],
              qualitative: [
                "Recognizes that percentages provide common denominator for comparison",
                "Converts fractions/decimals to percentages before comparing",
                "Correctly orders quantities from smallest to largest",
                "Explains why percentage comparison is useful (common base of 100)",
                "Handles mixed forms (comparing 0.7, 3/5, 65%)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on conversion strategy",
                "Makes occasional comparison errors"
              ],
              qualitative: [
                "Understands need to convert but unsure which form to use",
                "Can compare once all are in same form",
                "Needs prompting about using percentages as common denominator",
                "Makes conversion errors that affect comparison"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect comparisons",
                "Attempts to compare without converting",
                "Requests solution early"
              ],
              qualitative: [
                "Tries to compare fractions and decimals directly without conversion",
                "Does not understand why common form is needed",
                "Makes conversion errors leading to wrong comparisons",
                "Cannot order quantities correctly even after conversion"
              ]
            }
          },
          learningObjectives: [
            "Recognize percentages as a common denominator for comparison",
            "Convert mixed forms (fraction, decimal, %) to percentages",
            "Compare and order quantities after conversion",
            "Explain why percentage comparison is useful",
            "Determine which quantity is larger/smaller",
            "Apply to real-world comparison scenarios"
          ],
          relevantFormulas: [
            "For comparison: Convert all to percentages first",
            "Then compare percentage values directly",
            "Example comparison:",
            "  0.7 = 70%",
            "  3/5 = 60%",
            "  65% = 65%",
            "  Order: 3/5 < 65% < 0.7"
          ],
          availableTools: ["numberLine", "barChart"]
        }
      ]
    },

    learningObjectives: [
      "Convert percentages to fractions and decimals",
      "Convert fractions and decimals to percentages",
      "Simplify fractions after conversion",
      "Use percentages to compare different forms of quantities",
      "Recognize equivalence across all three representations"
    ],

    keyFormulas: `
**Percentage to Other Forms:**
- Percentage → Fraction: x% = x/100 (simplify)
- Percentage → Decimal: x% = x ÷ 100

**Other Forms to Percentage:**
- Fraction → Percentage: (fraction) × 100%
- Decimal → Percentage: (decimal) × 100%

**Key Examples:**
- 75% = 75/100 = 3/4 = 0.75
- 1/2 = 0.5 = 50%
- 0.25 = 1/4 = 25%
    `
  },

  // ========================================================
  // SUBTOPIC 3: EXPRESSING ONE QUANTITY AS PERCENTAGE OF ANOTHER
  // ========================================================
  's1-math-percentage-expressing': {
    displayName: 'Expressing One Quantity as a Percentage of Another',
    topicName: 'expressing as percentage',

    progressionStructure: {
      sections: [
        {
          id: "basic-percentage-calculation",
          title: "Basic Percentage Calculation (x as % of y)",
          difficulty: "foundational-to-intermediate",
          prerequisites: [],
          masterySignals: "Student correctly calculates x as percentage of y using formula in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations without hints",
                "Consistent identification of part and whole"
              ],
              qualitative: [
                "Applies formula (x/y) × 100% correctly",
                "Correctly identifies which value is the 'part' (x) and 'whole' (y)",
                "Calculates percentage accurately with calculator",
                "Includes % symbol in final answer",
                "Explains that x is being expressed as portion of y",
                "Verifies answer makes sense (e.g., 20 out of 50 should be around 40%)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on identifying part vs whole",
                "Occasional errors in calculation or formula application"
              ],
              qualitative: [
                "Knows the formula but unsure which value goes where",
                "Can calculate once part and whole are identified",
                "Forgets to multiply by 100 or include % symbol",
                "Makes calculator input errors"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect attempts",
                "Reverses part and whole",
                "Requests solution early"
              ],
              qualitative: [
                "Does not know the formula (x/y) × 100%",
                "Confuses which value is numerator vs denominator",
                "Divides whole by part instead of part by whole",
                "Cannot identify part and whole in word problems",
                "Forgets to multiply by 100 entirely"
              ]
            }
          },
          learningObjectives: [
            "Apply the formula: x as % of y = (x/y) × 100%",
            "Identify the 'part' (x) and 'whole' (y) in problems",
            "Calculate percentage accurately using calculator",
            "Include % symbol in final answer",
            "Verify answer is reasonable",
            "Express one quantity as percentage of another in context"
          ],
          relevantFormulas: [
            "Formula: x as percentage of y = (x/y) × 100%",
            "x = part (numerator)",
            "y = whole (denominator)",
            "Examples:",
            "  15 as % of 60 = (15/60) × 100% = 25%",
            "  35 as % of 100 = (35/100) × 100% = 35%",
            "  72 as % of 80 = (72/80) × 100% = 90%"
          ],
          availableTools: ["barChart", "fractionBar"]
        },
        {
          id: "multi-part-percentage-problems",
          title: "Multi-Part Problems and Complements",
          difficulty: "intermediate",
          prerequisites: ["basic-percentage-calculation"],
          masterySignals: "Student correctly solves multi-part percentage problems and finds complementary percentages in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions using both methods",
                "Consistent verification that parts sum to 100%"
              ],
              qualitative: [
                "Calculates individual parts as percentages of whole",
                "Finds complementary percentage using 100% - given %",
                "Verifies that all parts sum to 100%",
                "Uses Method 1 (direct calculation) and Method 2 (complementary) appropriately",
                "Explains when parts must sum to 100% (complete whole)",
                "Solves real-world breakdown problems (class composition, storage allocation)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on complementary method",
                "Occasional errors in verification"
              ],
              qualitative: [
                "Can calculate percentages but unsure about using 100% - x",
                "Needs prompting to verify parts sum to 100%",
                "Understands concept once method is explained",
                "Makes arithmetic errors in subtraction from 100%"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect attempts",
                "Cannot identify when to use complementary method",
                "Requests solution early"
              ],
              qualitative: [
                "Does not understand that parts must sum to 100%",
                "Cannot use complementary percentage method (100% - x)",
                "Calculates each part but does not verify total",
                "Confuses when parts represent complete whole vs partial"
              ]
            }
          },
          learningObjectives: [
            "Solve problems where parts make up a complete whole (sum to 100%)",
            "Calculate complementary percentage using 100% - given %",
            "Use Method 1: Calculate each part directly as (part/whole) × 100%",
            "Use Method 2: Find one part, then use 100% - part for remainder",
            "Verify that all parts sum to 100%",
            "Apply to composition problems (gender ratios, storage breakdown)"
          ],
          relevantFormulas: [
            "When parts make up whole: Part A % + Part B % + ... = 100%",
            "Complementary percentage: Part B % = 100% - Part A %",
            "Method 1 (Direct): Calculate each part separately",
            "Method 2 (Complement): Calculate one, subtract from 100%",
            "Example: In a class of 160, 90 are girls",
            "  Girls % = (90/160) × 100% = 56.25%",
            "  Boys % = 100% - 56.25% = 43.75%",
            "  Verify: 56.25% + 43.75% = 100% ✓"
          ],
          availableTools: ["barChart"]
        },
        {
          id: "unit-conversion-percentage",
          title: "Unit Conversion Before Percentage Calculation",
          difficulty: "intermediate",
          prerequisites: ["basic-percentage-calculation"],
          masterySignals: "Student correctly converts units before calculating percentage in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conversions and calculations",
                "Consistent recognition when conversion is needed"
              ],
              qualitative: [
                "Recognizes when quantities are in different units",
                "Converts to same unit before calculating percentage",
                "Chooses appropriate unit for conversion (usually smaller unit)",
                "Applies conversion correctly (kg→g, hours→min, m→cm)",
                "Calculates percentage after conversion",
                "Explains why conversion is necessary (must compare like quantities)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on conversion need",
                "Occasional errors in conversion factors"
              ],
              qualitative: [
                "Recognizes different units but unsure of conversion factor",
                "Can convert once reminded of the relationship",
                "Makes conversion errors affecting final answer",
                "Needs prompting to convert before calculating"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect attempts",
                "Attempts to calculate without converting",
                "Requests solution early"
              ],
              qualitative: [
                "Does not recognize that units must match",
                "Tries to calculate percentage with different units (250g as % of 2kg)",
                "Does not know conversion factors (1 kg = 1000 g)",
                "Cannot identify which unit to convert to",
                "Makes significant conversion errors"
              ]
            }
          },
          learningObjectives: [
            "Recognize when quantities are in different units",
            "Convert quantities to the same unit before calculating percentage",
            "Apply common conversions: kg↔g, m↔cm, hours↔minutes",
            "Choose appropriate unit for conversion",
            "Calculate percentage after ensuring same units",
            "Explain why unit conversion is necessary"
          ],
          relevantFormulas: [
            "ALWAYS convert to same unit first, then calculate %",
            "Common conversions:",
            "  1 kg = 1000 g",
            "  1 m = 100 cm",
            "  1 hour = 60 minutes",
            "  1 km = 1000 m",
            "Example: Express 250g as % of 2kg",
            "  Step 1: Convert 2kg to 2000g",
            "  Step 2: Calculate (250/2000) × 100% = 12.5%",
            "NOT: (250/2) × 100% = 12,500% ✗ WRONG!"
          ],
          availableTools: ["barChart", "numberLine"]
        }
      ]
    },

    learningObjectives: [
      "Calculate x as a percentage of y using the formula",
      "Identify part and whole in word problems",
      "Solve multi-part percentage problems",
      "Use complementary percentages (100% - x)",
      "Convert units before calculating percentages",
      "Verify that parts sum to 100% when appropriate"
    ],

    keyFormulas: `
**Core Formula:**
- x as % of y = (x/y) × 100%
- x = part (numerator)
- y = whole (denominator)

**Multi-Part Problems:**
- When parts make complete whole: Sum = 100%
- Complementary %: Part B = 100% - Part A

**Unit Conversion:**
- MUST convert to same unit before calculating
- Common: 1kg=1000g, 1m=100cm, 1hr=60min
- Then apply formula
    `
  },

  // ======================================================
  // SUBTOPIC 4: COMPARING TWO QUANTITIES BY PERCENTAGE
  // ======================================================
  's1-math-percentage-comparing': {
    displayName: 'Comparing Two Quantities by Percentage',
    topicName: 'comparing by percentage',

    progressionStructure: {
      sections: [
        {
          id: "percentage-comparison-method",
          title: "Comparing Using Percentage (Different Bases)",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly compares two quantities by converting each to percentage of its own whole in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct comparisons without hints",
                "Consistent use of percentage comparison method"
              ],
              qualitative: [
                "Recognizes that different bases prevent direct comparison",
                "Converts each quantity to percentage of its own whole",
                "Compares the resulting percentages correctly",
                "Explains why percentage provides common basis (denominator of 100)",
                "Concludes which has higher percentage despite different absolute values",
                "Understands same-basis comparison concept"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on calculation method",
                "Occasional errors in identifying which whole to use"
              ],
              qualitative: [
                "Understands need for percentage but uncertain about process",
                "Can compare once both percentages are calculated",
                "Needs prompting about using different bases",
                "Makes calculation errors affecting comparison"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect comparisons",
                "Attempts to compare absolute numbers directly",
                "Requests solution early"
              ],
              qualitative: [
                "Does not understand why different bases prevent comparison",
                "Tries to compare raw numbers without converting to percentages",
                "Confuses which base to use for each quantity",
                "Cannot explain why percentage comparison is necessary",
                "Makes errors: compares 18 vs 15 instead of 72% vs 75%"
              ]
            }
          },
          learningObjectives: [
            "Recognize when quantities have different bases/wholes",
            "Convert each quantity to percentage of its own whole",
            "Compare the resulting percentages to determine which is higher",
            "Explain why percentage comparison is necessary",
            "Understand that higher percentage ≠ higher absolute value",
            "Apply to real-world comparison scenarios"
          ],
          relevantFormulas: [
            "Cannot compare raw numbers with different bases directly!",
            "Must convert each to percentage of its own whole:",
            "  Quantity A % = (A's part / A's whole) × 100%",
            "  Quantity B % = (B's part / B's whole) × 100%",
            "  Then compare A% vs B%",
            "Example: Which has more accuracy?",
            "  Shooter A: 18 hits out of 25 shots = 72%",
            "  Shooter B: 15 hits out of 20 shots = 75%",
            "  Answer: Shooter B has higher accuracy (75% > 72%)",
            "  Even though 18 > 15 in absolute terms!"
          ],
          availableTools: ["barChart"]
        },
        {
          id: "real-world-percentage-comparisons",
          title: "Real-World Comparison Applications",
          difficulty: "intermediate",
          prerequisites: ["percentage-comparison-method"],
          masterySignals: "Student correctly applies percentage comparison to real-world scenarios in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct real-world comparisons",
                "Consistent extraction of relevant data from context"
              ],
              qualitative: [
                "Extracts part and whole from word problems correctly",
                "Applies percentage calculation to each scenario",
                "Compares percentages and makes correct conclusion",
                "Explains findings in context (which fruit has more water content)",
                "Handles various contexts: sports accuracy, defect rates, composition",
                "Recognizes when comparison makes sense vs when it doesn't"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on data extraction",
                "Occasional errors in context interpretation"
              ],
              qualitative: [
                "Can calculate percentages but unsure which data to use",
                "Needs prompting to identify part and whole in context",
                "Makes correct comparison once data is clarified",
                "Struggles with conclusion wording"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect comparisons",
                "Cannot extract relevant data from context",
                "Requests solution early"
              ],
              qualitative: [
                "Confused about which numbers represent part vs whole",
                "Cannot identify what is being compared",
                "Makes calculation errors from wrong data",
                "Cannot translate mathematical result to contextual conclusion",
                "Mixes up scenarios (compares wrong quantities)"
              ]
            }
          },
          learningObjectives: [
            "Extract relevant data from real-world scenarios",
            "Identify part and whole for each quantity being compared",
            "Calculate percentages for different contexts",
            "Make comparisons and state conclusions clearly",
            "Apply to: accuracy rates, defect rates, composition, content percentage",
            "Explain why one has higher percentage despite lower absolute value"
          ],
          relevantFormulas: [
            "Same process as basic comparison:",
            "  1. Identify part and whole for each scenario",
            "  2. Calculate percentage for each",
            "  3. Compare percentages",
            "  4. State conclusion in context",
            "Examples:",
            "  Water content: Peach 220g water in 250g = 88%",
            "                 Pear 210g water in 250g = 84%",
            "  Conclusion: Peach has higher water content",
            "",
            "  Defects: Factory A has 3 defects in 30 items = 10%",
            "           Factory B has 2 defects in 21 items = 9.5%",
            "  Conclusion: Factory A has higher defect rate"
          ],
          availableTools: ["barChart"]
        }
      ]
    },

    learningObjectives: [
      "Understand why different bases prevent direct comparison",
      "Convert each quantity to percentage of its own whole",
      "Compare percentages to determine which is higher",
      "Extract relevant data from real-world scenarios",
      "Make conclusions about comparisons in context"
    ],

    keyFormulas: `
**Comparison Method:**
- Step 1: Calculate % for Quantity A = (A's part / A's whole) × 100%
- Step 2: Calculate % for Quantity B = (B's part / B's whole) × 100%
- Step 3: Compare A% vs B%
- Step 4: State conclusion

**Key Insight:**
- Different bases → Must use percentage for fair comparison
- Higher absolute value ≠ higher percentage
- Percentage provides common denominator (100)
    `
  },

  // ====================================================
  // SUBTOPIC 5: PERCENTAGE CHANGE (INCREASE AND DECREASE)
  // ====================================================
  's1-math-percentage-change': {
    displayName: 'Percentage Increase and Decrease',
    topicName: 'percentage change',

    progressionStructure: {
      sections: [
        {
          id: "percentage-increase",
          title: "Percentage Increase",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly calculates percentage increase and new values in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations without hints",
                "Consistent use of both formulas (finding % increase and finding new value)"
              ],
              qualitative: [
                "Calculates absolute increase correctly (New - Original)",
                "Applies formula: % increase = (Increase / Original) × 100%",
                "Finds new value using: Original × (100% + % increase)",
                "Works backwards to find original given new value and % increase",
                "Explains that increase is always relative to original value",
                "Applies to real-world contexts: salary, enrollment, prices"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on formula application",
                "Occasional errors in calculation or formula choice"
              ],
              qualitative: [
                "Knows the formula but makes calculation errors",
                "Confuses which value is original vs new",
                "Can calculate once reminded of formula structure",
                "Needs prompting to identify increase amount first"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect attempts",
                "Uses wrong formula or wrong values",
                "Requests solution early"
              ],
              qualitative: [
                "Does not know the formula for percentage increase",
                "Divides by new value instead of original value",
                "Cannot identify what the 'increase' is (New - Original)",
                "Confuses percentage increase with the new value itself",
                "Cannot work backwards to find original value"
              ]
            }
          },
          learningObjectives: [
            "Calculate absolute increase: Increase = New value - Original value",
            "Apply formula: % increase = (Increase / Original) × 100%",
            "Find new value given original and % increase",
            "Work backwards to find original value given new value and % increase",
            "Understand that percentage increase is relative to original",
            "Apply to real-world contexts: salary raises, price increases, growth"
          ],
          relevantFormulas: [
            "Absolute increase = New value - Original value",
            "Percentage increase = (Increase / Original value) × 100%",
            "New value = Original × (100% + % increase)",
            "New value = Original × (1 + % increase as decimal)",
            "Examples:",
            "  Salary: $3600 → $3888",
            "  Increase = $3888 - $3600 = $288",
            "  % increase = ($288 / $3600) × 100% = 8%",
            "",
            "  Finding new value: $3600 with 8% increase",
            "  New = $3600 × (100% + 8%) = $3600 × 1.08 = $3888"
          ],
          availableTools: ["barChart", "numberLine"]
        },
        {
          id: "percentage-decrease",
          title: "Percentage Decrease",
          difficulty: "intermediate",
          prerequisites: ["percentage-increase"],
          masterySignals: "Student correctly calculates percentage decrease and understands asymmetry in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations without hints",
                "Demonstrates understanding of increase/decrease asymmetry"
              ],
              qualitative: [
                "Calculates absolute decrease correctly (Original - New)",
                "Applies formula: % decrease = (Decrease / Original) × 100%",
                "Finds new value using: Original × (100% - % decrease)",
                "Understands asymmetry: 10% increase then 10% decrease ≠ original",
                "Explains that each percentage change applies to the current value",
                "Applies to contexts: depreciation, price reduction, population decline"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on formula",
                "Struggles with asymmetry concept"
              ],
              qualitative: [
                "Can calculate decrease but uncertain about asymmetry",
                "Needs prompting about which value to use as base",
                "Makes errors when applying sequential changes",
                "Understands formula once reminded"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect attempts",
                "Uses increase formula instead of decrease",
                "Requests solution early"
              ],
              qualitative: [
                "Does not know percentage decrease formula",
                "Confuses increase and decrease formulas",
                "Believes equal % increase and decrease cancel out",
                "Cannot identify which value is original vs new",
                "Divides by new value instead of original"
              ]
            }
          },
          learningObjectives: [
            "Calculate absolute decrease: Decrease = Original - New value",
            "Apply formula: % decrease = (Decrease / Original) × 100%",
            "Find new value given original and % decrease",
            "Understand asymmetry of percentage changes",
            "Explain why 10% increase then 10% decrease ≠ original",
            "Apply to depreciation, discounts, reductions"
          ],
          relevantFormulas: [
            "Absolute decrease = Original value - New value",
            "Percentage decrease = (Decrease / Original value) × 100%",
            "New value = Original × (100% - % decrease)",
            "New value = Original × (1 - % decrease as decimal)",
            "ASYMMETRY: Equal % increase and decrease DO NOT cancel!",
            "Example:",
            "  Price: $1250 → $1050",
            "  Decrease = $1250 - $1050 = $200",
            "  % decrease = ($200 / $1250) × 100% = 16%",
            "",
            "Asymmetry example:",
            "  $100 + 10% = $110",
            "  $110 - 10% = $99 (NOT $100!)"
          ],
          availableTools: ["barChart", "numberLine"]
        },
        {
          id: "sequential-percentage-changes",
          title: "Sequential and Compound Percentage Changes",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["percentage-increase", "percentage-decrease"],
          masterySignals: "Student correctly applies sequential percentage changes in 3+ multi-step problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct sequential calculations",
                "Applies each change to the result of the previous change"
              ],
              qualitative: [
                "Applies first percentage change to original value",
                "Applies second change to result of first change (not original)",
                "Understands changes are compounding, not additive",
                "Recognizes that order can matter in some cases",
                "Calculates final value through multiple steps correctly",
                "Applies to real scenarios: utility bills, plant growth, successive discounts"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on sequential application",
                "Occasional errors in applying changes correctly"
              ],
              qualitative: [
                "Understands concept but applies both changes to original",
                "Needs prompting about using result of first change",
                "Can complete once process is clarified",
                "Makes calculation errors in multi-step process"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect attempts",
                "Adds percentages instead of applying sequentially",
                "Requests solution early"
              ],
              qualitative: [
                "Tries to add percentage changes (20% + 15% = 35%)",
                "Applies both changes to original value instead of sequentially",
                "Does not understand compounding effect",
                "Cannot track multiple steps correctly",
                "Confuses which value to use as base for each change"
              ]
            }
          },
          learningObjectives: [
            "Apply first percentage change to original value",
            "Apply second change to result (not original)",
            "Understand compounding: changes multiply, not add",
            "Calculate final value through 2-3 sequential changes",
            "Recognize when order matters vs doesn't matter",
            "Apply to: successive discounts, multi-month changes, compound scenarios"
          ],
          relevantFormulas: [
            "Sequential changes: Apply each to the current value",
            "Step 1: Value after 1st change = Original × (1 ± % change₁)",
            "Step 2: Final value = Value after 1st × (1 ± % change₂)",
            "NOT: Original × (1 + % change₁ + % change₂) ✗ WRONG!",
            "Example: $150 increases by 20%, then decreases by 15%",
            "  After +20%: $150 × 1.20 = $180",
            "  After -15%: $180 × 0.85 = $153",
            "  Final: $153 (not $150 × 1.05 = $157.50)",
            "",
            "Plant growth example:",
            "  Jan height: 50cm",
            "  +7% in Feb: 50 × 1.07 = 53.5cm",
            "  +6.5% in Mar: 53.5 × 1.065 = 56.98cm",
            "  +5% in Apr: 56.98 × 1.05 = 59.83cm"
          ],
          availableTools: ["barChart", "numberLine"]
        },
        {
          id: "percentage-points-vs-change",
          title: "Percentage Points vs Percentage Change",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["percentage-increase", "percentage-decrease"],
          masterySignals: "Student correctly distinguishes percentage points from percentage change in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications and calculations",
                "Correctly applies appropriate terminology"
              ],
              qualitative: [
                "Defines percentage point: simple arithmetic difference (28% - 25% = 3 percentage points)",
                "Defines percentage change: proportional change calculated as % of original",
                "Calculates percentage point change by subtraction",
                "Calculates percentage change using formula: (Change / Original) × 100%",
                "Explains the difference between the two concepts clearly",
                "Uses appropriate term based on context"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on which concept to use",
                "Occasional confusion between the two"
              ],
              qualitative: [
                "Understands there's a difference but uncertain when to use each",
                "Can calculate once concept is specified",
                "Needs clarification about terminology",
                "Makes errors in choosing appropriate measure"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect applications",
                "Uses terms interchangeably",
                "Requests solution early"
              ],
              qualitative: [
                "Does not understand difference between percentage points and percentage change",
                "Confuses simple subtraction with proportional calculation",
                "Uses wrong formula for the concept",
                "Cannot explain when to use each term",
                "Makes statement like '3% increase means 3 percentage points' (wrong!)"
              ]
            }
          },
          learningObjectives: [
            "Define percentage point: arithmetic difference between two percentages",
            "Define percentage change: proportional change relative to original",
            "Calculate percentage point change by subtraction",
            "Calculate percentage change using (Change / Original) × 100%",
            "Distinguish when to use each term appropriately",
            "Explain why they give different values for same situation"
          ],
          relevantFormulas: [
            "Percentage point change = New % - Old %",
            "  Example: 28% - 25% = 3 percentage points",
            "",
            "Percentage change = (Change / Original value) × 100%",
            "  Example: Interest rate 25% → 28%",
            "  Change in percentage points = 3 percentage points",
            "  But percentage change = (3/25) × 100% = 12%",
            "  (The rate increased BY 12%)",
            "",
            "Real example: Grade A students",
            "  Term 1: 25% got A",
            "  Term 2: 30% got A",
            "  Percentage point increase = 5 percentage points",
            "  Percentage increase = (5/25) × 100% = 20%",
            "  Correct: 'Increased by 5 percentage points' or 'Increased by 20%'",
            "  WRONG: 'Increased by 5%' (this is ambiguous!)"
          ],
          availableTools: ["numberLine", "barChart"]
        }
      ]
    },

    learningObjectives: [
      "Calculate percentage increase and decrease",
      "Find new values after percentage changes",
      "Understand asymmetry of percentage changes",
      "Apply sequential percentage changes correctly",
      "Distinguish percentage points from percentage change",
      "Apply to real-world scenarios: growth, depreciation, inflation"
    ],

    keyFormulas: `
**Percentage Increase:**
- Increase = New - Original
- % increase = (Increase / Original) × 100%
- New value = Original × (100% + % increase)

**Percentage Decrease:**
- Decrease = Original - New
- % decrease = (Decrease / Original) × 100%
- New value = Original × (100% - % decrease)

**Sequential Changes:**
- Apply each change to current value (NOT original)
- Changes multiply, not add

**Percentage Points vs % Change:**
- Percentage points = New % - Old % (simple subtraction)
- Percentage change = (Change / Original %) × 100% (proportional)
    `
  },

  // ============================================
  // SUBTOPIC 6: REVERSE PERCENTAGE
  // ============================================
  's1-math-percentage-reverse': {
    displayName: 'Reverse Percentage Problems',
    topicName: 'reverse percentage',

    progressionStructure: {
      sections: [
        {
          id: "finding-original-from-percentage",
          title: "Finding Original Value from Percentage",
          difficulty: "intermediate-to-advanced",
          prerequisites: [],
          masterySignals: "Student correctly finds original value given percentage portion in 3+ problems using 2 different methods",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions without hints",
                "Demonstrates both algebraic and visual (bar model) methods"
              ],
              qualitative: [
                "Recognizes reverse percentage problem structure",
                "Method 1 (Algebraic): Sets up equation P% of x = y, solves for x",
                "Method 2 (Proportion): Uses x = y ÷ (P/100)",
                "Method 3 (Visual): Draws bar diagram to find 1%, then 100%",
                "Verifies answer by calculating forward (checks P% of answer = given)",
                "Explains that we're working backwards from result to original"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on method selection",
                "Can use one method but struggles with alternatives"
              ],
              qualitative: [
                "Understands the concept but uncertain about setup",
                "Can solve once equation is set up",
                "Prefers one method, struggles to explain others",
                "Makes calculation errors in division"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect attempts",
                "Cannot set up the problem",
                "Requests solution early"
              ],
              qualitative: [
                "Does not recognize this as reverse percentage problem",
                "Tries to use forward formula (x/y) × 100% incorrectly",
                "Cannot work backwards from given information",
                "Confuses what is known vs what needs to be found",
                "Cannot verify answer makes sense"
              ]
            }
          },
          learningObjectives: [
            "Recognize reverse percentage problem structure",
            "Use algebraic method: If P% of x = y, then x = y ÷ (P/100)",
            "Use visual method: Bar diagram to find 1%, then 100%",
            "Verify answer by calculating forward",
            "Apply to real contexts: library fines, pricing, storage",
            "Explain the reverse percentage concept clearly"
          ],
          relevantFormulas: [
            "Reverse percentage structure: 'P% of something = given value'",
            "Need to find: the 'something' (original value)",
            "",
            "Method 1 (Algebraic):",
            "  If P% of x = y",
            "  Then x = y ÷ (P/100)",
            "  Or: x = y × (100/P)",
            "",
            "Method 2 (Visual - Bar Model):",
            "  Step 1: Draw bar, mark P% = y",
            "  Step 2: Find 1% = y ÷ P",
            "  Step 3: Find 100% = (y ÷ P) × 100",
            "",
            "Example: 35% of what number is 140?",
            "  Method 1: x = 140 ÷ (35/100) = 140 ÷ 0.35 = 400",
            "  Method 2: 1% = 140 ÷ 35 = 4, so 100% = 4 × 100 = 400",
            "  Verify: 35% of 400 = 140 ✓"
          ],
          availableTools: ["barChart", "numberLine"]
        },
        {
          id: "reverse-after-percentage-change",
          title: "Finding Original Value After Percentage Change",
          difficulty: "advanced",
          prerequisites: ["finding-original-from-percentage"],
          masterySignals: "Student correctly finds original value given value after % increase/decrease in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions without hints",
                "Handles both increase and decrease scenarios"
              ],
              qualitative: [
                "Recognizes that new value = original × (100% ± % change)",
                "Works backwards: Original = New ÷ (100% ± % change)",
                "Correctly uses + for increase, - for decrease in formula",
                "Applies to salary increases, price reductions, depreciation",
                "Verifies by calculating forward",
                "Explains the reverse calculation process"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on formula setup",
                "Occasional errors with +/- sign"
              ],
              qualitative: [
                "Understands concept but unsure about formula direction",
                "Confuses whether to add or subtract percentage",
                "Can solve once formula structure is clarified",
                "Makes division errors"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect attempts",
                "Uses wrong formula or wrong operation",
                "Requests solution early"
              ],
              qualitative: [
                "Does not understand reverse calculation from changed value",
                "Tries to add/subtract percentage from new value",
                "Cannot identify whether it's increase or decrease scenario",
                "Confuses forward and reverse formulas",
                "Cannot set up equation correctly"
              ]
            }
          },
          learningObjectives: [
            "Identify when value has been changed by a percentage",
            "Work backwards to find original value before change",
            "Apply formula: Original = New ÷ (100% + % increase)",
            "Apply formula: Original = New ÷ (100% - % decrease)",
            "Distinguish increase from decrease scenarios",
            "Verify answer by calculating forward"
          ],
          relevantFormulas: [
            "After INCREASE:",
            "  New = Original × (100% + % increase)",
            "  Reverse: Original = New ÷ (100% + % increase)",
            "  Example: After 8% increase, salary is $3888",
            "  Original = $3888 ÷ 1.08 = $3600",
            "",
            "After DECREASE:",
            "  New = Original × (100% - % decrease)",
            "  Reverse: Original = New ÷ (100% - % decrease)",
            "  Example: After 30% discount, price is $2380",
            "  Original = $2380 ÷ 0.70 = $3400",
            "",
            "Key: Identify the multiplier (100% ± change), then divide"
          ],
          availableTools: ["barChart", "numberLine"]
        },
        {
          id: "sequential-reverse-percentage",
          title: "Sequential Reverse Percentage Problems",
          difficulty: "advanced",
          prerequisites: ["reverse-after-percentage-change"],
          masterySignals: "Student correctly works backwards through multiple percentage changes in 2+ problems",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct multi-step reverse calculations",
                "Works backwards in correct order"
              ],
              qualitative: [
                "Identifies sequence of percentage changes",
                "Works backwards in reverse order (undoes last change first)",
                "Applies reverse formula at each step correctly",
                "Tracks intermediate values accurately",
                "Verifies final answer by calculating forward through all steps",
                "Explains why order of reversal matters"
              ]
            },
            developing: {
              quantitative: [
                "1 correct with hints on reverse order",
                "Struggles with multiple steps"
              ],
              qualitative: [
                "Understands concept but uncertain about order",
                "Can complete once steps are outlined",
                "Makes calculation errors in multi-step process",
                "Needs prompting about working backwards"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect attempts",
                "Works in wrong order or uses wrong formulas",
                "Requests solution early"
              ],
              qualitative: [
                "Does not understand sequential reverse calculation",
                "Works forwards instead of backwards",
                "Cannot track multiple steps",
                "Applies changes in wrong order",
                "Gets lost in complexity of problem"
              ]
            }
          },
          learningObjectives: [
            "Identify sequences of percentage changes",
            "Work backwards through changes in reverse order",
            "Apply reverse formula at each step",
            "Track intermediate values accurately",
            "Verify answer by calculating forward",
            "Solve complex multi-step financial scenarios"
          ],
          relevantFormulas: [
            "Sequential reverse: Undo last change first, work backwards",
            "Example: Final value is $V after +20% then -15%",
            "  Step 1: Undo the -15%",
            "  Before 2nd change = V ÷ 0.85",
            "  Step 2: Undo the +20%",
            "  Original = (V ÷ 0.85) ÷ 1.20",
            "",
            "Order matters! Reverse in opposite order of application",
            "",
            "Verification: Apply changes forward",
            "  Original → ×1.20 → ×0.85 → Should equal final value"
          ],
          availableTools: ["barChart"]
        }
      ]
    },

    learningObjectives: [
      "Recognize reverse percentage problem structures",
      "Find original value given percentage portion",
      "Work backwards from value after percentage change",
      "Solve sequential reverse percentage problems",
      "Use multiple methods (algebraic, visual, proportional)",
      "Verify answers by calculating forward"
    ],

    keyFormulas: `
**Basic Reverse:**
- If P% of x = y, then x = y ÷ (P/100)
- Or: x = y × (100/P)
- Visual: Find 1% = y÷P, then 100% = (y÷P)×100

**Reverse After Change:**
- Original = New ÷ (100% + % increase)
- Original = New ÷ (100% - % decrease)

**Sequential Reverse:**
- Work backwards in reverse order
- Undo last change first, then previous changes
- Verify by calculating forward
    `
  },

  // ===================================================
  // SUBTOPIC 7: REAL-LIFE APPLICATIONS
  // ===================================================
  's1-math-percentage-applications': {
    displayName: 'Real-World Percentage Applications',
    topicName: 'percentage applications',

    progressionStructure: {
      sections: [
        {
          id: "discount-applications",
          title: "Discount Calculations",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly calculates discounts, selling prices, and compares discount offers in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct discount calculations",
                "Handles both single and successive discounts"
              ],
              qualitative: [
                "Calculates discount amount: Discount = Marked price × (% discount / 100)",
                "Finds selling price: SP = Marked price × (100% - % discount)",
                "Calculates percentage discount: (Discount / Marked price) × 100%",
                "Applies successive discounts correctly (compounds, not adds)",
                "Compares discount offers to determine better deal",
                "Explains why 20%+50% ≠ 70% discount"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on formula selection",
                "Struggles with successive discounts"
              ],
              qualitative: [
                "Can calculate single discount but uncertain about multiples",
                "Tries to add successive discounts instead of applying sequentially",
                "Needs prompting about which formula to use",
                "Makes calculation errors"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect attempts",
                "Confuses marked price and selling price",
                "Requests solution early"
              ],
              qualitative: [
                "Does not know discount formulas",
                "Confuses what discount represents",
                "Adds successive discounts (70% instead of sequential)",
                "Cannot identify which value is given vs needed",
                "Confuses discount amount with selling price"
              ]
            }
          },
          learningObjectives: [
            "Calculate discount amount from marked price and percentage",
            "Find selling price after discount",
            "Calculate percentage discount from prices",
            "Apply successive discounts correctly",
            "Compare discount structures (single vs multiple discounts)",
            "Identify better deals in shopping scenarios"
          ],
          relevantFormulas: [
            "Discount amount = Marked price × (% discount / 100)",
            "Selling price = Marked price - Discount",
            "OR: Selling price = Marked price × (100% - % discount)",
            "Percentage discount = (Discount / Marked price) × 100%",
            "",
            "Successive discounts: Apply sequentially, NOT additive",
            "Example: $100 with 20% then 50% discount",
            "  After 20%: $100 × 0.80 = $80",
            "  After 50%: $80 × 0.50 = $40",
            "  NOT: $100 × (1 - 0.70) = $30 ✗ WRONG!",
            "",
            "Single discount example:",
            "  Marked: $3400, Discount 30%",
            "  Discount amount = $3400 × 0.30 = $1020",
            "  Selling price = $3400 - $1020 = $2380",
            "  OR: SP = $3400 × 0.70 = $2380"
          ],
          availableTools: ["barChart"]
        },
        {
          id: "gst-calculations",
          title: "Goods and Services Tax (GST)",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly calculates GST and prices including/excluding GST in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct GST calculations",
                "Handles both forward (add GST) and reverse (remove GST) problems"
              ],
              qualitative: [
                "Calculates GST amount: GST = Price × GST rate",
                "Finds price including GST: Total = Price × (100% + GST rate)",
                "Works backwards to find pre-GST price: Price = Total ÷ (100% + GST rate)",
                "Applies current GST rate (e.g., Singapore 9%)",
                "Distinguishes prices inclusive vs exclusive of GST",
                "Explains GST as consumption tax on goods/services"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on formula direction",
                "Occasional confusion between adding and removing GST"
              ],
              qualitative: [
                "Can add GST but struggles with removing GST",
                "Needs prompting about which formula to use",
                "Understands concept once direction is clarified",
                "Makes calculation errors"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect attempts",
                "Uses wrong operation (subtracts instead of divides)",
                "Requests solution early"
              ],
              qualitative: [
                "Does not understand what GST represents",
                "Cannot add GST correctly to base price",
                "Cannot work backwards to remove GST",
                "Confuses inclusive and exclusive pricing",
                "Tries to subtract GST rate instead of dividing"
              ]
            }
          },
          learningObjectives: [
            "Calculate GST amount on purchases",
            "Find total price including GST",
            "Work backwards to find pre-GST price",
            "Understand GST as percentage-based tax",
            "Apply current GST rate correctly",
            "Distinguish prices inclusive vs exclusive of GST"
          ],
          relevantFormulas: [
            "GST amount = Price before GST × GST rate",
            "Price including GST = Price before GST × (100% + GST rate)",
            "Price before GST = Price including GST ÷ (100% + GST rate)",
            "",
            "Singapore GST rate: 9% (as of context)",
            "",
            "Example (Adding GST):",
            "  Item costs $200 before GST",
            "  GST = $200 × 0.09 = $18",
            "  Total = $200 + $18 = $218",
            "  OR: Total = $200 × 1.09 = $218",
            "",
            "Example (Removing GST):",
            "  Total paid $218 (inclusive of GST)",
            "  Price before GST = $218 ÷ 1.09 = $200",
            "  GST = $218 - $200 = $18"
          ],
          availableTools: ["barChart"]
        },
        {
          id: "simple-interest",
          title: "Simple Interest Calculations",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly calculates simple interest and related values in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct interest calculations",
                "Finds different variables (principal, rate, time, interest)"
              ],
              qualitative: [
                "Applies formula: Interest = Principal × Rate × Time",
                "Identifies principal (amount deposited/borrowed)",
                "Uses annual interest rate correctly (per annum)",
                "Converts time to years if given in months",
                "Finds total amount: Total = Principal + Interest",
                "Works backwards to find principal, rate, or time",
                "Explains that simple interest is calculated on original principal only"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on formula rearrangement",
                "Occasional errors in time conversion"
              ],
              qualitative: [
                "Knows formula but uncertain about rearranging",
                "Forgets to convert time units (months to years)",
                "Can calculate once variables are identified",
                "Needs prompting about which value is principal"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect attempts",
                "Uses wrong formula or wrong values",
                "Requests solution early"
              ],
              qualitative: [
                "Does not know simple interest formula",
                "Confuses principal with interest or total",
                "Cannot identify interest rate (uses 5 instead of 0.05)",
                "Does not convert time to years",
                "Cannot rearrange formula to find unknown values"
              ]
            }
          },
          learningObjectives: [
            "Calculate simple interest using I = P × R × T",
            "Identify principal, rate (per annum), and time",
            "Convert time to years if given in months",
            "Find total amount = Principal + Interest",
            "Work backwards to find principal, rate, or time",
            "Apply to savings accounts and loans"
          ],
          relevantFormulas: [
            "Simple Interest (I) = Principal (P) × Rate (R) × Time (T)",
            "Where:",
            "  P = Amount deposited or borrowed",
            "  R = Annual interest rate (as decimal: 5% = 0.05)",
            "  T = Time period in years",
            "Total amount = Principal + Interest",
            "",
            "Rearrangements:",
            "  P = I ÷ (R × T)",
            "  R = I ÷ (P × T)",
            "  T = I ÷ (P × R)",
            "",
            "Example:",
            "  Principal = $3600",
            "  Rate = 1.5% per annum = 0.015",
            "  Time = 3 years",
            "  Interest = $3600 × 0.015 × 3 = $162",
            "  Total = $3600 + $162 = $3762",
            "",
            "Finding time:",
            "  If $2500 at 1.66% earns $166 interest",
            "  T = $166 ÷ ($2500 × 0.0166) = 4 years"
          ],
          availableTools: ["barChart", "numberLine"]
        },
        {
          id: "instalments-down-payment",
          title: "Instalments and Down Payments",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["simple-interest"],
          masterySignals: "Student correctly calculates monthly instalments with interest in 2+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct instalment calculations",
                "Handles interest on outstanding balance"
              ],
              qualitative: [
                "Calculates outstanding balance: Total price - Down payment",
                "Calculates interest on outstanding balance",
                "Finds total to be paid in instalments: Outstanding + Interest",
                "Calculates monthly instalment: Total ÷ Number of months",
                "Explains how down payment reduces outstanding balance",
                "Compares total cost with different down payments",
                "Understands interest is charged on the amount being financed"
              ]
            },
            developing: {
              quantitative: [
                "1 correct with hints on calculation steps",
                "Occasional errors in multi-step process"
              ],
              qualitative: [
                "Understands concept but uncertain about calculation order",
                "Needs prompting about calculating interest before dividing",
                "Can complete once steps are outlined",
                "Makes arithmetic errors in calculations"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect attempts",
                "Confuses which values to use",
                "Requests solution early"
              ],
              qualitative: [
                "Does not understand instalment payment structure",
                "Calculates interest on total price instead of outstanding balance",
                "Forgets to add interest before dividing by months",
                "Cannot identify what down payment affects",
                "Confuses monthly instalment with total cost"
              ]
            }
          },
          learningObjectives: [
            "Calculate outstanding balance after down payment",
            "Calculate interest on outstanding balance",
            "Find total amount to be paid in instalments",
            "Calculate monthly instalment amount",
            "Understand impact of down payment on total cost",
            "Compare different payment plans"
          ],
          relevantFormulas: [
            "Outstanding balance = Total price - Down payment",
            "Interest = Outstanding balance × Interest rate",
            "Total in instalments = Outstanding balance + Interest",
            "Monthly instalment = Total in instalments ÷ Number of months",
            "",
            "Example: TV set costs $2750",
            "  Down payment: 30% = $2750 × 0.30 = $825",
            "  Outstanding = $2750 - $825 = $1925",
            "  Interest: 6% on outstanding = $1925 × 0.06 = $115.50",
            "  Total in instalments = $1925 + $115.50 = $2040.50",
            "  12 monthly instalments = $2040.50 ÷ 12 = $170.04 each",
            "",
            "Total cost = Down payment + Total in instalments",
            "           = $825 + $2040.50 = $2865.50"
          ],
          availableTools: ["barChart"]
        }
      ]
    },

    learningObjectives: [
      "Calculate discounts and selling prices",
      "Apply successive discounts correctly",
      "Calculate GST on purchases",
      "Compute simple interest on savings and loans",
      "Determine monthly instalments with interest",
      "Compare different payment and discount structures"
    ],

    keyFormulas: `
**Discount:**
- Discount = Marked price × % discount
- Selling price = Marked price × (100% - % discount)
- Successive: Apply sequentially, not additively

**GST:**
- Price with GST = Price × (100% + GST rate)
- Price before GST = Price with GST ÷ (100% + GST rate)

**Simple Interest:**
- I = P × R × T
- Total = Principal + Interest

**Instalments:**
- Outstanding = Total price - Down payment
- Interest on outstanding balance
- Monthly = (Outstanding + Interest) ÷ Months
    `
  }

};

// Global configuration export
export const S1_PERCENTAGE_CONFIG = {
  topicName: "Percentage",
  gradeLevel: "S1",
  subject: "Mathematics",
  tutorCustomization: PERCENTAGE_TUTOR_CUSTOMIZATION,
  availableTools: PERCENTAGE_MATH_TOOLS
};
