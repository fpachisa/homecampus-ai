/**
 * P5 Mathematics - Rate Topic Configuration
 *
 * Comprehensive configuration for teaching rate concepts including:
 * - Understanding what rate means ("per" = "every")
 * - Finding unit rates by division
 * - Using rates to calculate larger quantities
 * - Two-step rate problems
 * - Table-based rate problems
 * - Tiered/variable rate problems
 * - Multi-step word problems
 *
 * Target audience: Primary 5 students (10-11 years old)
 */

// Type exports
export type RateTopicId =
  | 'p5-math-rate-understanding'
  | 'p5-math-rate-word-problems';

// Topic-specific tutor customization
export const P5_RATE_CONFIG = {
  teachingPhilosophy: `You are a friendly and encouraging mathematics tutor for Primary 5 students learning about rate.

Teaching Approach:
- Use simple, age-appropriate language suitable for 10-11 year olds
- Build understanding step by step: first what rate means, then finding rates, then using rates
- Connect to real-world contexts: printing speed, pay per hour, distance per hour, water per hour
- Use the rate table method with division (÷) and multiplication (×) arrows
- Emphasize that "per" means "every" or "for each"
- For two-step problems, always find the unit rate first, then scale
- Help students see the pattern: divide to find rate for 1, multiply to find larger amounts
- Be patient with unit conversions (hours to minutes, kg to g)
- Celebrate when students correctly identify whether to divide or multiply

**Text-to-Speech Guidelines:**
- Say "per" clearly as "per" (not "slash" or "divided by")
- Say "dollars per hour" not "dollar slash hour"
- Say "pages per minute" not "pages per min"
- For currency, say "fifteen dollars" not "dollar fifteen"
- Say "metres" clearly (British spelling used in Singapore curriculum)
- For m², say "square metres" not "m squared"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation`,

  visualToolsGuidance: `This topic primarily uses rate tables rather than interactive visualizers.

Rate tables show the relationship between quantities and help students see:
- The original values (top row)
- The target values (bottom row)
- The operation needed (arrows with ÷ or ×)

When explaining rate concepts:
- Draw simple rate tables showing the division to find unit rate
- Show multiplication to scale up from unit rate
- Use clear step-by-step working

No interactive math tools are needed for this topic - the concepts are best taught through clear worked examples and rate tables.`
};

// Available math tools for this topic
export const P5_RATE_MATH_TOOLS: string[] = [];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const P5_MATH_RATE_SUBTOPICS = {

  'p5-math-rate-understanding': {
    displayName: 'Understanding Rate',
    topicName: 'understanding what rate means and how to calculate it',

    progressionStructure: {
      sections: [
        {
          id: "intro-to-rate",
          title: "Introduction to Rate",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly explains what rate means and understands that 'per' means 'every' in 3+ responses",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct explanations of rate concept",
                "Correctly interprets 'per' as 'every' or 'for each'"
              ],
              qualitative: [
                "Explains rate as 'how much for every one unit'",
                "Understands 'per minute' means 'every minute'",
                "Can give examples of rates (speed, price, etc.)",
                "Correctly reads rate expressions like '$15 per hour'",
                "Connects rate to real-life situations"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with some confusion",
                "Partially understands rate concept"
              ],
              qualitative: [
                "Has vague understanding of rate",
                "Confuses rate with total amount",
                "Cannot explain what 'per' means",
                "Needs examples to understand the concept"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot explain what rate means"
              ],
              qualitative: [
                "Does not know what 'rate' means",
                "Does not understand 'per'",
                "Cannot identify rate in a sentence",
                "Confuses rate with other measurements"
              ]
            }
          },
          learningObjectives: [
            "Understand that rate tells us how much for every one unit",
            "Know that 'per' means 'every' or 'for each'",
            "Identify rate in real-world contexts",
            "Read and interpret rate expressions correctly"
          ],
          relevantFormulas: [
            "'Per' means 'every' or 'for each'",
            "50 pages per minute = 50 pages every minute",
            "$15 per hour = $15 for each hour"
          ],
          availableTools: []
        },
        {
          id: "finding-unit-rate",
          title: "Finding the Unit Rate",
          difficulty: "foundational",
          prerequisites: ["intro-to-rate"],
          masterySignals: "Student correctly divides to find the unit rate (rate per 1 unit) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct unit rate calculations",
                "Uses division correctly to find rate per 1"
              ],
              qualitative: [
                "Understands to divide total by number of units",
                "Sets up rate table correctly with ÷ arrows",
                "Correctly identifies what to divide by what",
                "Expresses answer with correct units (per minute, per hour)",
                "Can explain why we divide to find unit rate"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with calculation errors",
                "Sometimes divides in wrong order"
              ],
              qualitative: [
                "Knows to divide but unsure which number goes first",
                "Forgets to include units in answer",
                "Makes arithmetic errors in division",
                "Needs rate table to organize thinking"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot find unit rate"
              ],
              qualitative: [
                "Does not know to use division",
                "Multiplies instead of divides",
                "Cannot set up the calculation",
                "Does not understand what 'per 1' means"
              ]
            }
          },
          learningObjectives: [
            "Understand that finding unit rate means finding 'per 1'",
            "Use division to find the rate per unit",
            "Set up and use a rate table with division arrows",
            "Express unit rate with correct units"
          ],
          relevantFormulas: [
            "Unit rate = total amount ÷ number of units",
            "Example: 300 pages in 5 min → 300 ÷ 5 = 60 pages per minute",
            "Use ÷ to go from many to one"
          ],
          availableTools: []
        },
        {
          id: "using-rate",
          title: "Using Rate to Calculate",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["finding-unit-rate"],
          masterySignals: "Student correctly multiplies rate to find larger quantities in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations using given rate",
                "Uses multiplication correctly to scale up"
              ],
              qualitative: [
                "Understands to multiply rate by number of units",
                "Sets up rate table correctly with × arrows",
                "Calculates accurately with larger numbers",
                "Includes correct units in answer",
                "Can explain why multiplication gives the total"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with some errors",
                "Sometimes confuses multiply/divide"
              ],
              qualitative: [
                "Knows to multiply but makes arithmetic errors",
                "Forgets units in answer",
                "Gets confused with larger multipliers",
                "Needs prompting to use rate table"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot apply rate to find total"
              ],
              qualitative: [
                "Does not know to multiply",
                "Divides when should multiply",
                "Cannot connect rate to total amount",
                "Does not understand scaling up"
              ]
            }
          },
          learningObjectives: [
            "Understand that given a rate, multiply to find larger amounts",
            "Use multiplication to scale from unit rate to target amount",
            "Set up and use a rate table with multiplication arrows",
            "Calculate accurately with multi-digit numbers"
          ],
          relevantFormulas: [
            "Total = rate × number of units",
            "Example: $11 per hour for 10 hours → $11 × 10 = $110",
            "Use × to go from one to many"
          ],
          availableTools: []
        },
        {
          id: "two-step-rate",
          title: "Two-Step Rate Problems",
          difficulty: "intermediate",
          prerequisites: ["using-rate"],
          masterySignals: "Student correctly solves two-step problems (find unit rate first, then calculate target) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct two-step solutions",
                "Correctly sequences ÷ then ×"
              ],
              qualitative: [
                "Recognizes when two steps are needed",
                "First finds unit rate by division",
                "Then multiplies to find target amount",
                "Sets up three-row rate table correctly",
                "Shows clear working for both steps"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance on steps",
                "Makes errors in one of the two steps"
              ],
              qualitative: [
                "Knows two steps needed but sequences wrong",
                "Finds unit rate but forgets to multiply",
                "Makes calculation errors in second step",
                "Needs prompting to organize working"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot complete two-step problems"
              ],
              qualitative: [
                "Does not recognize two steps needed",
                "Tries to solve in one step and fails",
                "Cannot find unit rate as intermediate step",
                "Gets overwhelmed by multi-step process"
              ]
            }
          },
          learningObjectives: [
            "Recognize when a problem requires two steps",
            "Find the unit rate as an intermediate step",
            "Then use multiplication to find the target amount",
            "Set up a three-row rate table (given → unit → target)"
          ],
          relevantFormulas: [
            "Step 1: Find unit rate = given amount ÷ given units",
            "Step 2: Calculate target = unit rate × target units",
            "Example: 42 revolutions in 3 min, find for 7 min",
            "Step 1: 42 ÷ 3 = 14 rev/min",
            "Step 2: 14 × 7 = 98 revolutions"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Understand what rate means and that 'per' means 'every'",
      "Find unit rates using division",
      "Use rates to calculate larger amounts by multiplication",
      "Solve two-step rate problems"
    ],

    keyFormulas: `
**What is Rate?**
- Rate tells us how much for every one unit
- "Per" means "every" or "for each"
- Examples: pages per minute, dollars per hour, km per hour

**Finding Unit Rate:**
- Divide to find the rate for 1 unit
- Unit rate = total ÷ number of units

**Using Rate:**
- Multiply rate by number of units to find total
- Total = rate × units

**Two-Step Problems:**
1. Find unit rate (÷)
2. Calculate target amount (×)
    `
  },

  'p5-math-rate-word-problems': {
    displayName: 'Word Problems',
    topicName: 'solving rate word problems including tables and tiered rates',

    progressionStructure: {
      sections: [
        {
          id: "table-rate-problems",
          title: "Table-Based Rate Problems",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly reads and uses rate tables to solve problems in 3+ examples",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct table-based problems",
                "Correctly interprets 'up to' brackets"
              ],
              qualitative: [
                "Reads table headings accurately",
                "Understands 'up to X' means less than or equal to X",
                "Finds correct row for given value",
                "Interprets between-bracket values correctly",
                "Solves problems with multiple table lookups"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with some table reading errors",
                "Confuses bracket boundaries"
              ],
              qualitative: [
                "Can read table but picks wrong row sometimes",
                "Confused about 'up to' meaning",
                "Needs help determining which bracket to use",
                "Makes errors at boundary values"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot read or interpret tables"
              ],
              qualitative: [
                "Does not understand table structure",
                "Cannot find correct rate from table",
                "Ignores bracket limits",
                "Overwhelmed by tabular information"
              ]
            }
          },
          learningObjectives: [
            "Read and interpret rate tables correctly",
            "Understand 'up to X' means values less than or equal to X",
            "Find the correct rate bracket for a given value",
            "Solve problems using information from tables"
          ],
          relevantFormulas: [
            "'Mass up to 50 g' includes items: 20 g < mass ≤ 50 g",
            "Find your value, look for the smallest bracket that contains it",
            "Read across to find the corresponding charge/rate"
          ],
          availableTools: []
        },
        {
          id: "tiered-rate-problems",
          title: "Tiered Rate Problems",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["table-rate-problems"],
          masterySignals: "Student correctly solves problems with different rates for different portions (e.g., parking, utilities) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct tiered rate calculations",
                "Correctly splits quantities at tier boundaries"
              ],
              qualitative: [
                "Recognizes when different rates apply to portions",
                "Calculates first tier amount correctly",
                "Calculates remaining amount at second rate",
                "Adds portions correctly for total",
                "Handles time-based tiered rates (parking)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with errors in splitting",
                "Forgets to add portions together"
              ],
              qualitative: [
                "Understands concept but makes splitting errors",
                "Applies wrong rate to wrong portion",
                "Forgets there are multiple portions",
                "Calculation errors in multi-step work"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot handle tiered rates"
              ],
              qualitative: [
                "Does not recognize different rates for portions",
                "Applies single rate to entire amount",
                "Cannot split quantity at tier boundary",
                "Overwhelmed by multiple rates"
              ]
            }
          },
          learningObjectives: [
            "Recognize when different rates apply to different portions",
            "Split the quantity at tier boundaries",
            "Calculate each portion at its rate separately",
            "Add portions to find the total"
          ],
          relevantFormulas: [
            "Tiered pricing: different rates for different portions",
            "Example: First hour $2.20, subsequent ½ hour $1.20",
            "Total = (first portion × rate 1) + (remaining × rate 2)",
            "Water: First 40 m³ at $1.43, above 40 m³ at $1.81"
          ],
          availableTools: []
        },
        {
          id: "multi-step-problems",
          title: "Multi-Step Word Problems",
          difficulty: "advanced",
          prerequisites: ["tiered-rate-problems"],
          masterySignals: "Student correctly solves complex word problems requiring multiple steps and operations in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multi-step problems",
                "Shows clear organized working"
              ],
              qualitative: [
                "Breaks down complex problems into steps",
                "Identifies what information is given and needed",
                "Performs unit conversions correctly (g to kg, min to hours)",
                "Combines table lookup with calculation",
                "Checks answer for reasonableness"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance",
                "Makes errors in intermediate steps"
              ],
              qualitative: [
                "Starts correctly but loses track of steps",
                "Makes unit conversion errors",
                "Forgets to use some given information",
                "Cannot check if answer is reasonable"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot complete multi-step problems"
              ],
              qualitative: [
                "Overwhelmed by problem complexity",
                "Cannot identify what steps are needed",
                "Does not know where to start",
                "Cannot organize multi-step working"
              ]
            }
          },
          learningObjectives: [
            "Read carefully to identify given information and question",
            "Break complex problems into manageable steps",
            "Perform necessary unit conversions",
            "Combine different rate concepts in one problem"
          ],
          relevantFormulas: [
            "Problem-solving strategy:",
            "1. Read - what information is given?",
            "2. Identify - what is asked?",
            "3. Plan - what steps needed?",
            "4. Calculate - work step by step",
            "5. Check - does answer make sense?"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Read and use rate tables correctly",
      "Solve problems with tiered/variable rates",
      "Handle multi-step rate word problems",
      "Apply unit conversions where needed"
    ],

    keyFormulas: `
**Table-Based Problems:**
- "Up to X" means values ≤ X (includes boundary)
- Find the smallest bracket containing your value
- Read across for the rate/charge

**Tiered Rates:**
- Different rates for different portions
- Calculate each portion separately
- Add portions for total

**Problem-Solving Steps:**
1. Read carefully
2. Identify what's given and asked
3. Plan your steps
4. Calculate systematically
5. Check reasonableness

**Common Conversions:**
- 1 hour = 60 minutes
- 1 kg = 1000 g
    `,

    sampleProblems: [
      {
        section: "table-rate-problems",
        examples: [
          "The postage for a 80 g letter using the table (up to 50g: $2.65, up to 100g: $2.85). What is the cost?",
          "Henry sends a 3.5 kg parcel. Using the parcel table (up to 4 kg: $32), how much does he pay?",
          "Two letters of 45 g and 120 g are sent. Using the postage table, find the total cost."
        ]
      },
      {
        section: "tiered-rate-problems",
        examples: [
          "Parking: First hour $2.20, then $1.20 per ½ hour. Find cost for parking from 10 am to 1 pm.",
          "Water: First 40 m³ at $1.43/m³, above at $1.81/m³. Find charge for using 52 m³.",
          "Electricity: First 200 units at $0.20, above at $0.25. Find bill for 350 units used."
        ]
      },
      {
        section: "multi-step-problems",
        examples: [
          "A machine fills 35 jars per minute. How many hours to fill 4200 jars?",
          "Two parcels of 2.8 kg and 4.5 kg are sent separately. Find total postal charge using the table.",
          "A vacuum cleaner cleans 10 m² every 4 minutes. What area does it clean in 1 hour?"
        ]
      }
    ]
  }
};
