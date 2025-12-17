/**
 * P5 Mathematics - Percentage Topic Configuration
 *
 * Comprehensive configuration for teaching percentage concepts including:
 * - Per Cent (understanding 100 equal parts, % symbol)
 * - Conversions between Fractions, Decimals and Percentages
 * - Percentage Part of a Whole
 * - Percentage in Pie Charts
 * - GST, Discount and Annual Interest
 *
 * Target audience: Primary 5 students (10-11 years old)
 */

// Type exports
export type PercentageTopicId =
  | 'p5-math-percentage-per-cent'
  | 'p5-math-percentage-conversions'
  | 'p5-math-percentage-part-of-whole'
  | 'p5-math-percentage-pie-charts'
  | 'p5-math-percentage-gst-discount-interest';

// Topic-specific tutor customization
export const P5_PERCENTAGE_CONFIG = {
  teachingPhilosophy: `You are a friendly and encouraging mathematics tutor for Primary 5 students learning about percentages.

Teaching Approach:
- Use simple, age-appropriate language suitable for 10-11 year olds
- Build understanding that percent means "out of 100"
- Use the 100-square grid visualization frequently to build intuition
- Connect to real-life contexts: shopping discounts, GST, savings
- Show TWO methods when available (e.g., × 100% vs equivalent fractions)
- Emphasize the relationship: fraction ↔ decimal ↔ percentage
- Use Singapore contexts (GST at 9%, local stores, MRT)
- Be patient - conversions can be tricky for this age group!
- Celebrate when students connect percentages to fractions they know

**Text-to-Speech Guidelines:**
- Say "percent" not "percentage sign" for %
- Say "G S T" (spell out) not "gee-ess-tee" or "gist"
- Say "dollars" or "dollar" not "dollar sign"
- For fractions, say "three over four" or "three-fourths"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation`,

  visualToolsGuidance: `Use pre-built visual tools when they help understanding.
IMPORTANT: Use the technical name in the toolName field, NOT the display name.

Available tools for this topic:
- percentageGrid: 10×10 grid (100 squares) showing percentages. Use for teaching "X out of 100", shaded/unshaded problems, and visualizing what percentage means.
- pieChart: Pie chart showing categories and their proportions. Use for pie chart word problems.
- fractionBar: Horizontal bar divided into segments. Use for showing fraction-percentage relationships.
- fractionCircle: Circle divided into equal parts. Use for showing parts of a whole.

Tool usage guidelines:
- Use percentageGrid when teaching the concept of percent (1% = 1 out of 100)
- Use pieChart for pie chart reading and interpretation problems
- Use fractionBar when showing conversions between fractions and percentages
- Always include helpful captions explaining what to notice
- DO NOT show final answers in visualizations - let students figure those out`
};

// Available math tools for this topic
export const P5_PERCENTAGE_MATH_TOOLS = [
  "percentageGrid",
  "pieChart",
  "fractionBar",
  "fractionCircle"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const P5_MATH_PERCENTAGE_SUBTOPICS = {

  'p5-math-percentage-per-cent': {
    displayName: 'Per Cent',
    topicName: 'understanding what per cent means',

    progressionStructure: {
      sections: [
        {
          id: "understanding-per-cent",
          title: "Understanding Per Cent",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly explains that percent means 'out of 100' and identifies 1% = 1/100 in 3+ responses",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct explanations of what percent means",
                "Correctly converts X/100 to X% without hesitation"
              ],
              qualitative: [
                "States that percent means 'out of 100'",
                "Correctly identifies that 1% = 1/100",
                "Understands that 100% = the whole",
                "Can read the % symbol as 'percent'",
                "Connects the grid visualization to the concept"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with some hesitation",
                "Sometimes confuses percent with other concepts"
              ],
              qualitative: [
                "Knows percent relates to 100 but can't explain clearly",
                "Confuses 1% with 10% or other values",
                "Needs visual support to understand",
                "Can identify percentages but not explain the concept"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot explain what percent means"
              ],
              qualitative: [
                "Does not understand that percent means 'out of 100'",
                "Cannot connect fractions with denominator 100 to percentages",
                "Confused by the % symbol",
                "Needs full explanation of the concept"
              ]
            }
          },
          learningObjectives: [
            "Explain that 'per cent' means 'out of 100'",
            "Identify that 1% = 1/100 of the whole",
            "Recognize that 100% represents the whole",
            "Read and write the % symbol"
          ],
          relevantFormulas: [
            "1% = 1/100",
            "100% = 100/100 = 1 whole",
            "X% = X/100"
          ],
          availableTools: ["percentageGrid", "fractionCircle"]
        },
        {
          id: "reading-percentages",
          title: "Reading Percentages from Grids",
          difficulty: "foundational",
          prerequisites: ["understanding-per-cent"],
          masterySignals: "Student correctly reads shaded and unshaded percentages from 100-square grids in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct readings from grid visualizations",
                "Correctly calculates unshaded % using 100% - X%"
              ],
              qualitative: [
                "Correctly counts shaded squares and expresses as percentage",
                "Uses the formula: unshaded % = 100% - shaded %",
                "Understands that shaded + unshaded = 100%",
                "Can work with any number of shaded squares (0-100)",
                "Can explain reasoning clearly"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with counting errors",
                "Sometimes forgets to subtract from 100%"
              ],
              qualitative: [
                "Can count shaded squares but makes errors",
                "Forgets that total must equal 100%",
                "Struggles with finding unshaded percentage",
                "Needs visual grid to count each time"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot read percentages from grids"
              ],
              qualitative: [
                "Cannot count shaded squares accurately",
                "Does not understand that parts add up to 100%",
                "Cannot calculate 100% - X%",
                "Needs significant support"
              ]
            }
          },
          learningObjectives: [
            "Count shaded squares in a 100-square grid",
            "Express shaded parts as a percentage",
            "Calculate unshaded percentage (100% - shaded %)",
            "Understand that shaded % + unshaded % = 100%"
          ],
          relevantFormulas: [
            "Shaded % = number of shaded squares / 100",
            "Unshaded % = 100% - Shaded %"
          ],
          availableTools: ["percentageGrid"]
        },
        {
          id: "simple-percentage-problems",
          title: "Simple Percentage Word Problems",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["reading-percentages"],
          masterySignals: "Student correctly solves word problems where the whole is 100 in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct word problems solved",
                "Identifies percentage correctly when total is 100"
              ],
              qualitative: [
                "Correctly identifies that total = 100 means easy conversion",
                "Converts 'X out of 100' directly to X%",
                "Can find remaining % by subtracting from 100%",
                "Writes answer sentences correctly",
                "Can handle two-part questions"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with calculation errors",
                "Sometimes sets up problem incorrectly"
              ],
              qualitative: [
                "Understands concept but makes arithmetic errors",
                "Forgets to find remaining when asked",
                "Struggles with word problem interpretation",
                "Needs guidance on problem setup"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot extract information from word problems"
              ],
              qualitative: [
                "Cannot identify relevant numbers from word problems",
                "Does not see connection between '100 total' and percentage",
                "Gets confused by word problem format",
                "Needs full guidance on interpretation"
              ]
            }
          },
          learningObjectives: [
            "Identify when total equals 100 in word problems",
            "Convert 'X out of 100' to X%",
            "Find remaining percentage in word problems",
            "Write complete answer sentences"
          ],
          relevantFormulas: [
            "When total = 100: part directly equals percentage",
            "Remaining % = 100% - given %"
          ],
          availableTools: ["percentageGrid"]
        }
      ]
    },

    learningObjectives: [
      "Understand that per cent means 'out of 100'",
      "Read and write percentages using the % symbol",
      "Read percentages from 100-square grids",
      "Solve simple word problems where the whole is 100"
    ],

    keyFormulas: `
**Understanding Per Cent:**
- Per cent means "out of 100"
- 1% = 1/100 of the whole
- 100% = the whole

**Reading from Grids:**
- Shaded % = number of shaded squares (out of 100)
- Unshaded % = 100% - Shaded %

**Examples:**
- 25 shaded squares = 25%
- If 35% shaded, then 65% unshaded (100% - 35% = 65%)
    `
  },

  'p5-math-percentage-conversions': {
    displayName: 'Conversions between Fractions, Decimals and Percentages',
    topicName: 'converting between fractions, decimals, and percentages',

    progressionStructure: {
      sections: [
        {
          id: "fraction-to-percentage",
          title: "Converting Fractions to Percentages",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly converts fractions to percentages using either method in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct fraction to percentage conversions",
                "Can use both methods (× 100% and equivalent fractions)"
              ],
              qualitative: [
                "Correctly applies: fraction × 100% = percentage",
                "Can find equivalent fraction with denominator 100",
                "Simplifies fractions before multiplying when helpful",
                "Chooses efficient method based on the fraction",
                "Shows clear working"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct conversions",
                "Only knows one method"
              ],
              qualitative: [
                "Knows × 100% rule but makes calculation errors",
                "Cannot find equivalent fractions with denominator 100",
                "Struggles with fractions that don't divide evenly into 100",
                "Needs help choosing the best method"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect conversions",
                "Cannot apply any method"
              ],
              qualitative: [
                "Does not know how to convert fractions to percentages",
                "Cannot multiply fractions by 100%",
                "Cannot find equivalent fractions",
                "Needs full explanation of methods"
              ]
            }
          },
          learningObjectives: [
            "Convert fractions to percentages by multiplying by 100%",
            "Convert fractions to percentages using equivalent fractions",
            "Choose the most efficient method for a given fraction",
            "Simplify fractions before converting when helpful"
          ],
          relevantFormulas: [
            "Method 1: Fraction × 100% = Percentage",
            "Method 2: Find equivalent fraction with denominator 100",
            "Example: 3/5 × 100% = 300/5% = 60%",
            "Example: 3/5 = 60/100 = 60%"
          ],
          availableTools: ["fractionBar"]
        },
        {
          id: "decimal-to-percentage",
          title: "Converting Decimals to Percentages",
          difficulty: "foundational",
          prerequisites: ["fraction-to-percentage"],
          masterySignals: "Student correctly converts decimals to percentages in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct decimal to percentage conversions",
                "Handles 1-place and 2-place decimals"
              ],
              qualitative: [
                "Correctly converts decimal to fraction over 100",
                "Understands: decimal × 100 = percentage",
                "Handles 0.05 type decimals (single digit after decimal)",
                "Handles 0.3 type decimals (needs to find equivalent /100)",
                "Can explain the conversion process"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with errors on single-digit decimals",
                "Struggles with 0.05 vs 0.5 type decimals"
              ],
              qualitative: [
                "Knows the method but confuses place values",
                "Writes 0.5 as 5% instead of 50%",
                "Struggles to convert 0.3 (3/10) to percentage",
                "Needs practice with various decimal forms"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect conversions",
                "Cannot convert any decimals correctly"
              ],
              qualitative: [
                "Does not understand decimal-percentage relationship",
                "Cannot write decimals as fractions",
                "Confuses decimal places completely",
                "Needs review of decimal place value"
              ]
            }
          },
          learningObjectives: [
            "Convert decimals to fractions with denominator 100",
            "Apply the rule: decimal × 100 = percentage",
            "Handle various decimal formats (0.05, 0.15, 0.3)",
            "Explain the decimal to percentage conversion process"
          ],
          relevantFormulas: [
            "0.05 = 5/100 = 5%",
            "0.15 = 15/100 = 15%",
            "0.3 = 3/10 = 30/100 = 30%"
          ],
          availableTools: []
        },
        {
          id: "percentage-to-decimal-fraction",
          title: "Converting Percentages to Decimals and Fractions",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["decimal-to-percentage"],
          masterySignals: "Student correctly converts percentages to both decimals and fractions (simplified) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conversions to decimals",
                "3+ correct conversions to simplified fractions"
              ],
              qualitative: [
                "Correctly converts: X% ÷ 100 = decimal",
                "Correctly writes X% as X/100",
                "Simplifies fractions to lowest terms",
                "Can find GCF to simplify fractions",
                "Shows clear working for simplification"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct but forgets to simplify",
                "Makes errors in decimal point placement"
              ],
              qualitative: [
                "Converts correctly but doesn't simplify fractions",
                "Places decimal incorrectly (7% as 0.7 instead of 0.07)",
                "Cannot find common factors for simplification",
                "Needs reminders about simplifying"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect conversions",
                "Cannot perform either conversion"
              ],
              qualitative: [
                "Does not know percentage ÷ 100 = decimal",
                "Cannot write percentage as fraction",
                "Does not know how to simplify fractions",
                "Needs full review of both concepts"
              ]
            }
          },
          learningObjectives: [
            "Convert percentages to decimals by dividing by 100",
            "Convert percentages to fractions by writing over 100",
            "Simplify fractions to lowest terms",
            "Place decimal point correctly in conversion"
          ],
          relevantFormulas: [
            "X% = X/100 = X ÷ 100 (decimal)",
            "75% = 75/100 = 3/4 (simplified)",
            "7% = 7/100 = 0.07"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Convert fractions to percentages using two methods",
      "Convert decimals to percentages",
      "Convert percentages to decimals",
      "Convert percentages to fractions in simplest form"
    ],

    keyFormulas: `
**Fraction to Percentage:**
- Method 1: Fraction × 100%
- Method 2: Equivalent fraction with denominator 100

**Decimal to Percentage:**
- Decimal × 100 = Percentage
- Or: Write as fraction over 100

**Percentage to Decimal:**
- Percentage ÷ 100 = Decimal

**Percentage to Fraction:**
- Write over 100, then simplify

**Examples:**
- 3/4 = 75/100 = 75%
- 0.45 = 45%
- 60% = 0.6 = 60/100 = 3/5
    `
  },

  'p5-math-percentage-part-of-whole': {
    displayName: 'Percentage Part of a Whole',
    topicName: 'finding percentage of a whole and calculating quantities from percentages',

    progressionStructure: {
      sections: [
        {
          id: "what-percentage-is",
          title: "Finding What Percentage One Number Is of Another",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly applies (part/whole) × 100% to find percentages in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct percentage calculations",
                "Correctly identifies part and whole"
              ],
              qualitative: [
                "Correctly applies: (part/whole) × 100%",
                "Identifies the 'whole' as the denominator",
                "Identifies the 'part' as the numerator",
                "Simplifies fractions before multiplying when helpful",
                "Can explain why the formula works"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with part/whole confusion",
                "Makes calculation errors"
              ],
              qualitative: [
                "Confuses which number is part vs whole",
                "Puts numbers in wrong position in fraction",
                "Understands formula but makes arithmetic errors",
                "Needs prompting to identify part and whole"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot apply the formula"
              ],
              qualitative: [
                "Does not know the formula (part/whole) × 100%",
                "Cannot identify part or whole from word problems",
                "Gets overwhelmed by the calculation",
                "Needs full explanation and guidance"
              ]
            }
          },
          learningObjectives: [
            "Apply the formula (part/whole) × 100%",
            "Identify the 'part' and 'whole' in word problems",
            "Simplify fractions before calculating percentage",
            "Express answers as percentages"
          ],
          relevantFormulas: [
            "Percentage = (Part/Whole) × 100%",
            "What % of 80 is 60? → (60/80) × 100% = 75%"
          ],
          availableTools: ["percentageGrid", "fractionBar"]
        },
        {
          id: "unit-conversion-percentage",
          title: "Converting Units Before Calculating Percentages",
          difficulty: "intermediate",
          prerequisites: ["what-percentage-is"],
          masterySignals: "Student correctly converts units and calculates percentages in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct problems with unit conversion",
                "Always converts to same units first"
              ],
              qualitative: [
                "Identifies when units are different",
                "Converts kg to g, or litres to ml correctly",
                "Applies percentage formula after conversion",
                "Remembers conversion facts (1 kg = 1000 g)",
                "Shows conversion step clearly"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct but sometimes forgets to convert",
                "Makes unit conversion errors"
              ],
              qualitative: [
                "Knows to convert but makes errors",
                "Forgets conversion facts",
                "Sometimes skips conversion step",
                "Needs reminders about same units"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Does not convert units"
              ],
              qualitative: [
                "Does not see that units must match",
                "Tries to calculate with different units",
                "Cannot remember conversion facts",
                "Needs full review of unit conversions"
              ]
            }
          },
          learningObjectives: [
            "Identify when quantities have different units",
            "Convert quantities to the same unit before calculating",
            "Apply percentage formula with converted values",
            "Show unit conversion step in working"
          ],
          relevantFormulas: [
            "1 kg = 1000 g",
            "1 litre = 1000 ml",
            "Always convert to SAME UNITS first!"
          ],
          availableTools: []
        },
        {
          id: "finding-quantity-from-percentage",
          title: "Finding a Quantity from a Percentage",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["unit-conversion-percentage"],
          masterySignals: "Student correctly calculates X% of Y and finds remaining quantities in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct 'X% of Y' calculations",
                "Can find remaining quantity after percentage used"
              ],
              qualitative: [
                "Correctly applies: X% of Y = (X/100) × Y",
                "Can use alternative method: find 1%, then multiply",
                "Finds remaining by subtracting or using (100%-X%)",
                "Chooses efficient method based on numbers",
                "Can solve two-part questions"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with calculation errors",
                "Only knows one method"
              ],
              qualitative: [
                "Knows formula but makes arithmetic errors",
                "Forgets to find remaining when asked",
                "Cannot use alternative methods",
                "Needs guidance on which method to use"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot calculate X% of Y"
              ],
              qualitative: [
                "Does not know how to calculate percentage of a number",
                "Cannot set up the calculation",
                "Gets confused by finding remaining",
                "Needs full explanation of methods"
              ]
            }
          },
          learningObjectives: [
            "Calculate X% of Y using (X/100) × Y",
            "Use alternative method: find 1%, then multiply",
            "Find remaining quantity after a percentage is used",
            "Choose efficient calculation method"
          ],
          relevantFormulas: [
            "X% of Y = (X/100) × Y",
            "Alternative: 100% = Y, so 1% = Y ÷ 100",
            "Remaining = Total - (X% of Total)",
            "Or: Remaining = (100% - X%) of Total"
          ],
          availableTools: ["percentageGrid"]
        },
        {
          id: "multi-step-percentage-problems",
          title: "Multi-Step Percentage Word Problems",
          difficulty: "advanced",
          prerequisites: ["finding-quantity-from-percentage"],
          masterySignals: "Student correctly solves multi-step problems involving tables and missing values in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multi-step problems",
                "Shows clear step-by-step working"
              ],
              qualitative: [
                "Breaks complex problems into logical steps",
                "Finds missing values from tables",
                "Uses subtraction to find unknown parts",
                "Calculates percentage of the unknown part",
                "Checks answer reasonableness"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with some step errors",
                "Misses intermediate steps"
              ],
              qualitative: [
                "Understands approach but misses steps",
                "Makes errors in intermediate calculations",
                "Forgets to complete all parts of question",
                "Needs help organizing multi-step work"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot break problem into steps"
              ],
              qualitative: [
                "Gets overwhelmed by multi-step problems",
                "Cannot identify what to find first",
                "Cannot extract data from tables",
                "Needs significant guidance"
              ]
            }
          },
          learningObjectives: [
            "Break complex problems into logical steps",
            "Extract data from tables",
            "Find missing values before calculating percentages",
            "Show clear step-by-step working"
          ],
          relevantFormulas: [],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Find what percentage one number is of another",
      "Convert units before calculating percentages",
      "Calculate a percentage of a given quantity",
      "Solve multi-step percentage word problems"
    ],

    keyFormulas: `
**Finding What Percentage:**
- Percentage = (Part/Whole) × 100%
- The WHOLE goes in the denominator

**Finding Quantity from Percentage:**
- X% of Y = (X/100) × Y
- Alternative: Find 1%, then multiply

**Finding Remaining:**
- Remaining = Total - (X% of Total)
- Or: Remaining % = 100% - X%

**Unit Conversion:**
- Always convert to SAME units first!
- 1 kg = 1000 g, 1 ℓ = 1000 ml
    `
  },

  'p5-math-percentage-pie-charts': {
    displayName: 'Percentage in Pie Charts',
    topicName: 'reading pie charts and converting fractions to percentages in pie charts',

    progressionStructure: {
      sections: [
        {
          id: "reading-pie-charts",
          title: "Reading Pie Charts with Numbers",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly reads values and finds missing parts from pie charts in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct pie chart readings",
                "Correctly finds missing values"
              ],
              qualitative: [
                "Understands pie chart represents a whole",
                "Adds up given parts correctly",
                "Finds missing part by subtraction",
                "Can compare sizes of different sectors",
                "Can answer 'which is largest/smallest' questions"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with addition errors",
                "Sometimes forgets to find missing part"
              ],
              qualitative: [
                "Understands concept but makes arithmetic errors",
                "Needs prompting to find missing values",
                "Sometimes misreads values from chart",
                "Needs guidance on comparison questions"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot read pie charts"
              ],
              qualitative: [
                "Does not understand pie chart structure",
                "Cannot add up parts correctly",
                "Does not know how to find missing part",
                "Needs full explanation of pie charts"
              ]
            }
          },
          learningObjectives: [
            "Understand that pie chart represents a whole",
            "Read values from pie chart sectors",
            "Find missing values by subtraction from total",
            "Compare sizes of different sectors"
          ],
          relevantFormulas: [
            "All parts add up to the total",
            "Missing part = Total - sum of known parts"
          ],
          availableTools: ["pieChart"]
        },
        {
          id: "fractions-to-percentage-pie-charts",
          title: "Converting Fractions in Pie Charts to Percentages",
          difficulty: "intermediate",
          prerequisites: ["reading-pie-charts"],
          masterySignals: "Student correctly converts fractions in pie charts to percentages in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct fraction to percentage conversions in pie chart context",
                "Correctly finds unknown fractions first"
              ],
              qualitative: [
                "Finds unknown fraction: 1 - sum of known fractions",
                "Converts fractions to common denominator for subtraction",
                "Converts final fraction to percentage correctly",
                "Shows clear step-by-step working",
                "Can handle pie charts with 3+ categories"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with fraction errors",
                "Makes errors finding common denominators"
              ],
              qualitative: [
                "Understands process but makes fraction calculation errors",
                "Struggles with subtracting fractions",
                "Forgets to convert to percentage at end",
                "Needs help with common denominators"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot find unknown fractions"
              ],
              qualitative: [
                "Does not know fractions must add up to 1",
                "Cannot subtract fractions",
                "Cannot convert fractions to percentages",
                "Needs review of fraction operations"
              ]
            }
          },
          learningObjectives: [
            "Understand that fractions in pie chart add up to 1",
            "Find unknown fraction by subtracting from 1",
            "Use common denominators for fraction subtraction",
            "Convert fractions to percentages"
          ],
          relevantFormulas: [
            "All fractions add up to 1 (or 100%)",
            "Unknown fraction = 1 - sum of known fractions",
            "Fraction × 100% = Percentage"
          ],
          availableTools: ["pieChart", "fractionBar"]
        },
        {
          id: "solving-pie-chart-problems",
          title: "Solving Pie Chart Word Problems",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["fractions-to-percentage-pie-charts"],
          masterySignals: "Student correctly solves multi-part pie chart problems in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multi-part pie chart problems",
                "Shows systematic working"
              ],
              qualitative: [
                "Can answer multiple related questions about one pie chart",
                "Finds fractions, percentages, and actual quantities",
                "Uses total to find actual values",
                "Compares different categories",
                "Answers questions in correct units"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct parts but misses others",
                "Makes errors connecting fraction to actual value"
              ],
              qualitative: [
                "Answers some parts but not all",
                "Struggles connecting percentage to quantity",
                "Forgets to use total when finding actual values",
                "Needs guidance on multi-part questions"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot handle multi-part questions"
              ],
              qualitative: [
                "Gets overwhelmed by multiple questions",
                "Cannot connect fractions to real quantities",
                "Does not know what information to use",
                "Needs step-by-step guidance"
              ]
            }
          },
          learningObjectives: [
            "Answer multiple questions about one pie chart",
            "Find actual quantities from fractions and totals",
            "Compare different categories",
            "Show systematic working"
          ],
          relevantFormulas: [
            "Actual value = Fraction × Total",
            "Check: all parts should add up to total"
          ],
          availableTools: ["pieChart"]
        }
      ]
    },

    learningObjectives: [
      "Read values from pie charts",
      "Find missing values in pie charts",
      "Convert fractions in pie charts to percentages",
      "Solve multi-part pie chart word problems"
    ],

    keyFormulas: `
**Pie Chart Basics:**
- All parts add up to the whole (100% or 1)
- Missing part = Total - sum of known parts

**Fractions in Pie Charts:**
- All fractions add up to 1
- Unknown fraction = 1 - (known fractions)
- Use common denominators for subtraction

**Converting to Percentage:**
- Fraction × 100% = Percentage

**Finding Actual Values:**
- Actual value = Fraction × Total
    `
  },

  'p5-math-percentage-gst-discount-interest': {
    displayName: 'GST, Discount and Annual Interest',
    topicName: 'calculating GST, discounts, and simple annual interest',

    progressionStructure: {
      sections: [
        {
          id: "understanding-gst",
          title: "Understanding and Calculating GST",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly calculates GST and total price including GST in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct GST calculations",
                "Correctly finds total with GST"
              ],
              qualitative: [
                "Knows GST stands for Goods and Services Tax",
                "Knows current GST rate is 9%",
                "Correctly calculates: GST = 9% × price",
                "Correctly finds: Total = price + GST",
                "Can use alternative: Total = 109% × price"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with calculation errors",
                "Forgets to add GST to get total"
              ],
              qualitative: [
                "Knows GST concept but makes calculation errors",
                "Calculates GST but forgets to add to price",
                "Confuses GST rate",
                "Needs reminders about the formula"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot calculate GST"
              ],
              qualitative: [
                "Does not understand what GST is",
                "Does not know the GST rate",
                "Cannot calculate 9% of a price",
                "Needs full explanation of GST concept"
              ]
            }
          },
          learningObjectives: [
            "Understand that GST is a tax on goods and services",
            "Know the current GST rate (9%)",
            "Calculate GST amount: 9% × price",
            "Calculate total price including GST"
          ],
          relevantFormulas: [
            "GST = 9% × Price (before GST)",
            "Total = Price + GST",
            "Alternative: Total = 109% × Price"
          ],
          availableTools: []
        },
        {
          id: "calculating-discounts",
          title: "Calculating Discounts",
          difficulty: "intermediate",
          prerequisites: ["understanding-gst"],
          masterySignals: "Student correctly calculates discount amount and price after discount in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct discount calculations",
                "Correctly finds price after discount"
              ],
              qualitative: [
                "Correctly calculates: Discount = X% × usual price",
                "Correctly finds: Price after = usual price - discount",
                "Can use alternative: Price after = (100%-X%) × usual price",
                "Chooses efficient method based on numbers",
                "Understands discount REDUCES the price"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with errors",
                "Adds instead of subtracts discount"
              ],
              qualitative: [
                "Calculates discount but adds instead of subtracts",
                "Confuses discount with GST (add vs subtract)",
                "Makes percentage calculation errors",
                "Only knows one method"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot calculate discount"
              ],
              qualitative: [
                "Does not understand what discount means",
                "Cannot calculate X% of usual price",
                "Confuses discount direction (add vs subtract)",
                "Needs full explanation of discount concept"
              ]
            }
          },
          learningObjectives: [
            "Understand that discount is a reduction in price",
            "Calculate discount amount: X% × usual price",
            "Calculate price after discount",
            "Use alternative method: (100% - X%) × usual price"
          ],
          relevantFormulas: [
            "Discount = X% × Usual Price",
            "Price after discount = Usual Price - Discount",
            "Alternative: Price after = (100% - X%) × Usual Price"
          ],
          availableTools: []
        },
        {
          id: "annual-interest",
          title: "Calculating Annual Interest",
          difficulty: "intermediate",
          prerequisites: ["calculating-discounts"],
          masterySignals: "Student correctly calculates simple annual interest and total savings in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct interest calculations",
                "Correctly finds total after 1 year"
              ],
              qualitative: [
                "Understands interest is money earned from savings",
                "Correctly calculates: Interest = rate% × principal",
                "Correctly finds: Total = principal + interest",
                "Understands 'principal' is the deposited amount",
                "Can work with various interest rates"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with calculation errors",
                "Forgets to add interest to principal"
              ],
              qualitative: [
                "Knows formula but makes arithmetic errors",
                "Confuses principal with interest",
                "Forgets to find total at end",
                "Struggles with larger principal amounts"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot calculate interest"
              ],
              qualitative: [
                "Does not understand what interest is",
                "Cannot apply the interest formula",
                "Confuses with discount/GST concepts",
                "Needs full explanation of interest"
              ]
            }
          },
          learningObjectives: [
            "Understand that interest is earned on savings",
            "Know terms: principal, interest rate, interest",
            "Calculate interest: rate% × principal",
            "Calculate total after 1 year"
          ],
          relevantFormulas: [
            "Interest = Rate% × Principal",
            "Total after 1 year = Principal + Interest"
          ],
          availableTools: []
        },
        {
          id: "mixed-problems",
          title: "Mixed GST, Discount and Interest Problems",
          difficulty: "advanced",
          prerequisites: ["annual-interest"],
          masterySignals: "Student correctly identifies problem type and applies correct formula in 3+ mixed problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct mixed problems",
                "Identifies problem type correctly each time"
              ],
              qualitative: [
                "Distinguishes between GST, discount, and interest",
                "Knows: GST adds, Discount subtracts, Interest adds",
                "Selects correct formula for each problem type",
                "Shows clear working with correct labels",
                "Can handle two-part questions"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct but confuses problem types",
                "Uses wrong formula sometimes"
              ],
              qualitative: [
                "Confuses GST with discount (add vs subtract)",
                "Knows formulas but applies wrong one",
                "Needs hints to identify problem type",
                "Makes calculation errors under complexity"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot distinguish problem types"
              ],
              qualitative: [
                "Confuses all three concepts",
                "Does not know which formula to use",
                "Cannot identify key words in problems",
                "Needs significant guidance"
              ]
            }
          },
          learningObjectives: [
            "Identify problem type from context",
            "Select appropriate formula",
            "Remember: GST adds, Discount subtracts, Interest adds",
            "Solve problems with clear working"
          ],
          relevantFormulas: [
            "GST: Total = Price + (9% × Price)",
            "Discount: Final = Price - (X% × Price)",
            "Interest: Total = Principal + (Rate% × Principal)"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Calculate GST and total price including GST",
      "Calculate discount and price after discount",
      "Calculate simple annual interest",
      "Distinguish between GST, discount, and interest problems"
    ],

    keyFormulas: `
**GST (Goods and Services Tax) - Singapore 9%:**
- GST = 9% × Price
- Total = Price + GST (ADD)

**Discount:**
- Discount = X% × Usual Price
- Final Price = Usual Price - Discount (SUBTRACT)

**Annual Interest:**
- Interest = Rate% × Principal
- Total = Principal + Interest (ADD)

**Remember:**
- GST → ADD to price
- Discount → SUBTRACT from price
- Interest → ADD to savings
    `
  }
};
