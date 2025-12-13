/**
 * P5 Mathematics - Fractions and Division Topic Configuration
 *
 * Comprehensive configuration for teaching division of whole numbers as fractions
 * and expressing fractions as decimals.
 *
 * Target audience: Primary 5 students (10-11 years old)
 */

// Type exports
export type FractionsDivisionsTopicId =
  | 'p5-math-fractions-divisions-whole-numbers'
  | 'p5-math-fractions-divisions-decimals';

// Topic-specific tutor customization
export const P5_FRACTIONS_DIVISIONS_CONFIG = {
  teachingPhilosophy: `You are a friendly and encouraging mathematics tutor for Primary 5 students learning about fractions and division.

Teaching Approach:
- Use simple, age-appropriate language suitable for 10-11 year olds
- Guide students to discover the connection between division and fractions
- Use real-world contexts like sharing pizza, chocolate, cakes, and other items equally
- Help students visualize division as fair sharing
- Build from concrete examples (visual sharing models) to abstract notation
- Celebrate insights when students see that division and fractions are the same thing
- Be patient - connecting division to fractions is a key conceptual leap
- Use familiar scenarios: sharing snacks among friends, dividing rope/ribbon, pouring liquids

**Text-to-Speech Guidelines:**
- Say fractions clearly: "one third" not "1 over 3" or "1 slash 3"
- Say "divided by" clearly, not "div"
- For mixed numbers: say "one and one quarter" not "one-one-fourth"
- Say decimals digit by digit for clarity: "zero point seven five" for 0.75
- Say "equals" not "is equal to" for brevity
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding.
IMPORTANT: Use the technical name in the toolName field, NOT the display name.

Available tools for this topic:
- fractionBar: For showing fraction parts visually. Use when demonstrating division as sharing.
- fractionCircle: For showing fraction parts in a circular model (like pizza/cake).
- numberLine: For showing fractions and decimals on a number line. Helpful for decimal conversions.
- placeValueChart: For showing decimal place values (tenths, hundredths).

Tool usage guidelines:
- Use fractionCircle when sharing circular items (pizza, cake, pie)
- Use fractionBar when sharing rectangular items (chocolate bar, ribbon)
- Use numberLine when comparing fractions and decimals
- Use placeValueChart when teaching tenths and hundredths
- Always include a helpful caption explaining what to look at in the visualization`
};

// Available math tools for this topic
export const P5_FRACTIONS_DIVISIONS_MATH_TOOLS = [
  "fractionBar",
  "fractionCircle",
  "numberLine",
  "placeValueChart"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const P5_MATH_FRACTIONS_DIVISIONS_SUBTOPICS = {

  'p5-math-fractions-divisions-whole-numbers': {
    displayName: 'Division of Whole Numbers as Fractions',
    topicName: 'expressing division of whole numbers as fractions',

    progressionStructure: {
      sections: [
        {
          id: "division-as-sharing",
          title: "Understanding Division as Fractions",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly expresses simple divisions like 1 ÷ 3 as fractions (1/3) in 3+ problems with minimal hints",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct responses expressing division as fractions",
                "Consistent understanding that a ÷ b = a/b"
              ],
              qualitative: [
                "Correctly writes 1 ÷ 3 as 1/3, 1 ÷ 4 as 1/4, etc.",
                "Understands that dividing 1 item among n people gives each person 1/n",
                "Can explain using sharing context (1 pizza shared by 3 people = 1/3 each)",
                "Recognizes the connection: numerator is what's being shared, denominator is number of people",
                "Can work in both directions: fraction to division and division to fraction"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about the division-fraction connection",
                "May need visual support to understand"
              ],
              qualitative: [
                "Understands sharing concept but struggles to write as fraction",
                "Gets confused about which number is numerator vs denominator",
                "Can solve with visual aids but not abstractly",
                "Needs prompting to connect 1 ÷ 3 to 1/3"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot express division as fraction"
              ],
              qualitative: [
                "Does not see connection between division and fractions",
                "Writes fraction upside down (3/1 instead of 1/3 for 1 ÷ 3)",
                "Cannot explain what fair sharing means",
                "Confuses multiplication with division",
                "Does not understand that 1 ÷ 3 gives a value less than 1"
              ]
            }
          },
          learningObjectives: [
            "Understand that division can be expressed as a fraction",
            "Express 1 ÷ n as 1/n",
            "Connect fractions to fair sharing scenarios",
            "Identify numerator (what's shared) and denominator (number of sharers)"
          ],
          relevantFormulas: [
            "1 ÷ n = 1/n",
            "1 ÷ 3 = 1/3 (one third)",
            "1 ÷ 4 = 1/4 (one quarter)"
          ],
          availableTools: ["fractionCircle", "fractionBar"]
        },
        {
          id: "dividing-multiple-items",
          title: "Dividing Multiple Items Equally",
          difficulty: "foundational",
          prerequisites: ["division-as-sharing"],
          masterySignals: "Student correctly expresses divisions like 2 ÷ 3 as fractions (2/3) and understands each person gets 2/3 in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct responses for multi-item division",
                "Correctly expresses a ÷ b = a/b for various values"
              ],
              qualitative: [
                "Correctly writes 2 ÷ 3 as 2/3, 4 ÷ 7 as 4/7, etc.",
                "Understands that dividing m items among n people gives each person m/n",
                "Can visualize: 2 pizzas shared by 3 people - cut each into 3, each person gets 2 pieces of size 1/3",
                "Recognizes proper fractions (numerator < denominator) when items < people",
                "Can simplify fractions when possible (4 ÷ 6 = 4/6 = 2/3)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "May struggle when numerator is larger"
              ],
              qualitative: [
                "Gets simple cases (2 ÷ 3) but confused by larger numbers",
                "Forgets to simplify fractions",
                "Needs visual help to understand multiple items being shared",
                "Can set up fraction but unsure if it's correct"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot generalize from 1 ÷ n to m ÷ n"
              ],
              qualitative: [
                "Still writes fraction upside down",
                "Cannot visualize sharing multiple items",
                "Does not understand that each person can get more than one piece",
                "Confuses the sharing process",
                "Cannot connect physical sharing to fraction notation"
              ]
            }
          },
          learningObjectives: [
            "Express m ÷ n as m/n",
            "Visualize sharing multiple items among multiple people",
            "Understand proper fractions result when items < people",
            "Simplify fractions to lowest terms when possible"
          ],
          relevantFormulas: [
            "m ÷ n = m/n",
            "2 ÷ 3 = 2/3 (two thirds)",
            "4 ÷ 6 = 4/6 = 2/3 (simplify by dividing by 2)"
          ],
          availableTools: ["fractionCircle", "fractionBar"]
        },
        {
          id: "improper-fractions-mixed-numbers",
          title: "Improper Fractions and Mixed Numbers",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["dividing-multiple-items"],
          masterySignals: "Student correctly expresses divisions like 5 ÷ 4 as improper fractions (5/4) and converts to mixed numbers (1 1/4) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conversions between improper fractions and mixed numbers",
                "Consistent accuracy with division to mixed number conversions"
              ],
              qualitative: [
                "Correctly writes 5 ÷ 4 as 5/4 = 1 1/4",
                "Understands when result will be improper (items > people)",
                "Can visualize: 5 cakes among 4 children - each gets 1 whole + 1/4",
                "Converts improper fractions to mixed numbers correctly",
                "Converts mixed numbers back to improper fractions",
                "Simplifies final answers when possible"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on conversion process",
                "May get improper fraction but struggle with mixed number"
              ],
              qualitative: [
                "Can write improper fraction but unsure about mixed number",
                "Knows division but struggles with conversion steps",
                "Gets confused about how many wholes and what remainder",
                "May forget to simplify the fractional part"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot convert between improper and mixed"
              ],
              qualitative: [
                "Does not understand improper fractions",
                "Cannot determine whole number part",
                "Confuses remainder with denominator",
                "Writes mixed number incorrectly (e.g., 1 4/5 instead of 1 1/4 for 5÷4)",
                "Cannot visualize getting more than one whole item"
              ]
            }
          },
          learningObjectives: [
            "Recognize when division results in improper fraction (numerator > denominator)",
            "Convert division to improper fraction",
            "Convert improper fraction to mixed number",
            "Visualize sharing when items exceed number of people"
          ],
          relevantFormulas: [
            "When m > n: m ÷ n = m/n (improper fraction)",
            "To convert to mixed number: divide to get whole part, remainder becomes numerator",
            "5 ÷ 4 = 5/4 = 1 1/4 (5 = 4×1 + 1, so 1 whole and 1/4)"
          ],
          availableTools: ["fractionCircle", "fractionBar"]
        },
        {
          id: "word-problems-division-fractions",
          title: "Word Problems: Division as Fractions",
          difficulty: "intermediate",
          prerequisites: ["improper-fractions-mixed-numbers"],
          masterySignals: "Student correctly solves word problems involving division expressed as fractions, giving answers in simplest form or as mixed numbers where appropriate, in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ word problems solved correctly",
                "Answers given in appropriate form (simplified fraction or mixed number)"
              ],
              qualitative: [
                "Correctly identifies division situations in word problems",
                "Extracts correct values for numerator and denominator from context",
                "Chooses appropriate answer form (fraction vs mixed number)",
                "Includes correct units in answer (e.g., 3/4 litre, 1 1/2 metres)",
                "Can explain solution process clearly"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on problem setup",
                "May solve computation but forget units or simplification"
              ],
              qualitative: [
                "Can identify division but sets up fraction incorrectly",
                "Forgets to simplify or convert to mixed number",
                "Leaves out units in answer",
                "Needs help interpreting word problem context"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot identify division situation in word problems"
              ],
              qualitative: [
                "Cannot extract numbers from word problem",
                "Sets up problem backwards (wrong numerator/denominator)",
                "Does not recognize equal sharing scenarios",
                "Cannot interpret what the question is asking",
                "Gives unreasonable answers (e.g., each person gets more than total)"
              ]
            }
          },
          learningObjectives: [
            "Identify division situations in real-world word problems",
            "Set up correct fraction from word problem context",
            "Express answer in simplest form or as mixed number",
            "Include appropriate units in answers"
          ],
          relevantFormulas: [
            "Total amount ÷ Number of shares = Amount per share",
            "Example: 7 metres of rope ÷ 4 pieces = 7/4 m = 1 3/4 m per piece"
          ],
          availableTools: ["fractionBar", "numberLine"]
        }
      ]
    },

    learningObjectives: [
      "Understand that division can be expressed as fractions",
      "Express a ÷ b as a/b",
      "Convert between improper fractions and mixed numbers",
      "Solve word problems involving division as fractions"
    ],

    keyFormulas: `
**Division as Fractions:**
- a ÷ b = a/b
- 1 ÷ 3 = 1/3
- 2 ÷ 3 = 2/3
- 5 ÷ 4 = 5/4 = 1 1/4

**Converting Improper to Mixed:**
- Divide numerator by denominator
- Quotient = whole number part
- Remainder = new numerator
- Keep same denominator
    `
  },

  'p5-math-fractions-divisions-decimals': {
    displayName: 'Expressing Fractions as Decimals',
    topicName: 'converting fractions to decimals',

    progressionStructure: {
      sections: [
        {
          id: "tenths-hundredths-decimals",
          title: "Tenths and Hundredths as Decimals",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly converts fractions with denominators 10 and 100 to decimals (3/10 = 0.3, 14/100 = 0.14) in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conversions of tenths and hundredths",
                "Consistent accuracy with place value understanding"
              ],
              qualitative: [
                "Correctly converts 3/10 to 0.3, 7/10 to 0.7, etc.",
                "Correctly converts 14/100 to 0.14, 3/100 to 0.03, etc.",
                "Understands tenths place is first digit after decimal",
                "Understands hundredths place is second digit after decimal",
                "Can use place value chart to explain conversions"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on place value",
                "May confuse tenths and hundredths"
              ],
              qualitative: [
                "Gets tenths but struggles with hundredths",
                "Writes 3/100 as 0.3 instead of 0.03",
                "Needs place value chart support",
                "Understands concept but makes place value errors"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot connect fractions to decimal place values"
              ],
              qualitative: [
                "Does not understand decimal place values",
                "Writes decimals without proper zero placement",
                "Cannot read place value chart",
                "Confuses numerator with decimal digits directly",
                "Does not understand that /10 means tenths place"
              ]
            }
          },
          learningObjectives: [
            "Convert fractions with denominator 10 to decimals",
            "Convert fractions with denominator 100 to decimals",
            "Understand tenths and hundredths place values",
            "Use place value chart for conversions"
          ],
          relevantFormulas: [
            "a/10 = 0.a (e.g., 3/10 = 0.3)",
            "ab/100 = 0.ab (e.g., 14/100 = 0.14)",
            "a/100 = 0.0a (e.g., 3/100 = 0.03)"
          ],
          availableTools: ["placeValueChart", "fractionBar"]
        },
        {
          id: "equivalent-fractions-decimals",
          title: "Using Equivalent Fractions",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["tenths-hundredths-decimals"],
          masterySignals: "Student correctly converts fractions to decimals using equivalent fractions with denominators 10 or 100 (3/5 = 6/10 = 0.6) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conversions using equivalent fractions",
                "Correctly identifies what to multiply denominator by"
              ],
              qualitative: [
                "Converts 1/2 = 5/10 = 0.5 correctly",
                "Converts 3/5 = 6/10 = 0.6 correctly",
                "Converts 1/4 = 25/100 = 0.25 correctly",
                "Recognizes which fractions convert to tenths vs hundredths",
                "Multiplies both numerator and denominator by same number"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on equivalent fractions",
                "May forget to multiply numerator"
              ],
              qualitative: [
                "Knows to find equivalent but makes calculation errors",
                "Only multiplies denominator, forgetting numerator",
                "Gets common conversions (1/2, 1/4) but struggles with others",
                "Needs help identifying what to multiply by"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot find equivalent fractions"
              ],
              qualitative: [
                "Does not understand equivalent fractions concept",
                "Cannot determine multiplier to reach 10 or 100",
                "Adds instead of multiplies to find equivalent",
                "Does not see that 2/4 = 1/2 = 0.5",
                "Cannot work backwards from decimal to fraction"
              ]
            }
          },
          learningObjectives: [
            "Find equivalent fractions with denominators 10 or 100",
            "Convert fractions to decimals using equivalent fractions method",
            "Recognize common fraction-decimal equivalents",
            "Multiply both numerator and denominator by same number"
          ],
          relevantFormulas: [
            "To convert to tenths: multiply to get denominator 10",
            "1/2 = 5/10 = 0.5",
            "1/4 = 25/100 = 0.25",
            "3/5 = 6/10 = 0.6",
            "1/5 = 2/10 = 0.2"
          ],
          availableTools: ["fractionBar", "numberLine"]
        },
        {
          id: "long-division-decimals",
          title: "Using Long Division",
          difficulty: "intermediate",
          prerequisites: ["equivalent-fractions-decimals"],
          masterySignals: "Student correctly converts fractions to decimals using long division (9 ÷ 4 = 2.25) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conversions using long division",
                "Properly handles decimal point placement"
              ],
              qualitative: [
                "Sets up long division correctly (numerator ÷ denominator)",
                "Adds decimal point and zeros as needed",
                "Correctly performs division steps",
                "Places decimal point correctly in answer",
                "Can convert improper fractions to decimals > 1"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance on process",
                "May make calculation errors in division"
              ],
              qualitative: [
                "Sets up division but makes arithmetic errors",
                "Forgets to add decimal point to answer",
                "Stops too early (before complete answer)",
                "Needs help knowing when division is complete"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot set up or perform long division"
              ],
              qualitative: [
                "Does not know how to set up long division",
                "Cannot add zeros after decimal point",
                "Makes basic division errors",
                "Does not understand why we divide numerator by denominator",
                "Confuses which number goes inside the division"
              ]
            }
          },
          learningObjectives: [
            "Set up long division for fraction to decimal conversion",
            "Add decimal point and zeros as needed",
            "Perform long division correctly",
            "Convert both proper and improper fractions to decimals"
          ],
          relevantFormulas: [
            "a/b = a ÷ b (use long division)",
            "3 ÷ 5 = 0.6 (3.0 ÷ 5)",
            "9 ÷ 4 = 2.25 (9.00 ÷ 4)"
          ],
          availableTools: ["numberLine"]
        },
        {
          id: "rounding-decimals",
          title: "Rounding Decimals",
          difficulty: "intermediate",
          prerequisites: ["long-division-decimals"],
          masterySignals: "Student correctly converts fractions to decimals and rounds to specified decimal places (5/6 ≈ 0.83 to 2 d.p.) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct rounded decimal conversions",
                "Consistent accuracy with rounding rules"
              ],
              qualitative: [
                "Recognizes when decimal doesn't terminate (repeating)",
                "Rounds correctly to 1 decimal place",
                "Rounds correctly to 2 decimal places",
                "Uses ≈ symbol for rounded answers",
                "Applies correct rounding rule (5 or more rounds up)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on rounding rules",
                "May round to wrong number of places"
              ],
              qualitative: [
                "Converts to decimal but rounds incorrectly",
                "Confuses 1 decimal place vs 2 decimal places",
                "Forgets to use ≈ for rounded answers",
                "Rounds down when should round up (or vice versa)"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot round decimals correctly"
              ],
              qualitative: [
                "Does not understand what 1 or 2 decimal places means",
                "Cannot identify which digit to look at for rounding",
                "Does not know rounding rules",
                "Truncates instead of rounds",
                "Gives exact answer when rounding is required"
              ]
            }
          },
          learningObjectives: [
            "Recognize when fractions produce repeating decimals",
            "Round decimals to 1 decimal place",
            "Round decimals to 2 decimal places",
            "Use appropriate notation (≈) for rounded values"
          ],
          relevantFormulas: [
            "Rounding rule: 5 or more rounds up, less than 5 rounds down",
            "5/6 = 0.8333... ≈ 0.8 (1 d.p.) ≈ 0.83 (2 d.p.)",
            "2/3 = 0.6666... ≈ 0.7 (1 d.p.) ≈ 0.67 (2 d.p.)"
          ],
          availableTools: ["numberLine"]
        }
      ]
    },

    learningObjectives: [
      "Convert fractions to decimals using place value knowledge",
      "Use equivalent fractions to convert to decimals",
      "Use long division to convert fractions to decimals",
      "Round decimals to specified decimal places"
    ],

    keyFormulas: `
**Direct Conversion (denominators 10, 100):**
- 3/10 = 0.3
- 14/100 = 0.14
- 3/100 = 0.03

**Using Equivalent Fractions:**
- 1/2 = 5/10 = 0.5
- 1/4 = 25/100 = 0.25
- 3/5 = 6/10 = 0.6

**Using Long Division:**
- a/b = a ÷ b
- 9/4 = 9 ÷ 4 = 2.25

**Rounding:**
- 5/6 ≈ 0.83 (2 decimal places)
- Look at next digit: 5+ rounds up, 4- rounds down
    `
  }
};
