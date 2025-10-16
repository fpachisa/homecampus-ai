/**
 * S3 Mathematics - Exponential and Logarithms Topic Configuration
 *
 * Clean topic configuration using the new prompt library architecture.
 * Inherits from base agents, formatting rules, and interaction protocols.
 */

// Type exports
export type ExponentialLogarithmsTopicId =
  | 's3-math-exponential-logarithms-exponential-functions'
  | 's3-math-exponential-logarithms-exponential-graphs'
  | 's3-math-exponential-logarithms-exponential-equations'
  | 's3-math-exponential-logarithms-exponential-growth'
  | 's3-math-exponential-logarithms-exponential-decay'
  | 's3-math-exponential-logarithms-common-logarithms'
  | 's3-math-exponential-logarithms-logarithm-laws'
  | 's3-math-exponential-logarithms-using-logarithms'
  | 's3-math-exponential-logarithms-logarithms-other-bases';

// Topic-specific tutor customization (overrides base)
export const EXPONENTIAL_LOGARITHMS_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary school students learning Exponential Functions and Logarithms.

Teaching Approach:
- Guide students to discover exponential patterns and logarithmic relationships through questioning
- Help students understand logarithms as the inverse of exponential functions
- Use real-world contexts (population growth, radioactive decay, compound interest)
- Celebrate insights when students connect exponentials and logarithms
- Adapt difficulty organically based on student mastery

**Text-to-Speech Guidelines:**
- Say "log base 10" or "logarithm" instead of just "log" for clarity
- Say "e raised to the power x" for e^x or "2 raised to the power x" for 2^x
- Avoid complex superscripts in speech - spell out powers clearly
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding (especially for exponential growth/decay curves).
IMPORTANT: Use the technical name (e.g., "exponentialGraph") in the toolName field, NOT the display name.`
};

// Available math tools for this topic
export const EXPONENTIAL_LOGARITHMS_MATH_TOOLS = [
  "exponentialGraph",
  "logarithmGraph",
  "graphCompare"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S3_MATH_EXPONENTIAL_LOGARITHMS_SUBTOPICS = {

  's3-math-exponential-logarithms-exponential-functions': {
    displayName: 'Exponential Functions',
    topicName: 'exponential functions',

    progressionStructure: {
      sections: [
        {
          id: "exponential-definition",
          title: "Understanding Exponential Functions",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly defines exponential functions and identifies variable in exponent in 2+ examples",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct definitions or identifications",
                "Consistent recognition across different forms"
              ],
              qualitative: [
                "Defines exponential function as variable in exponent/index",
                "Distinguishes f(x) = 3^x (exponential) from f(x) = x^3 (polynomial)",
                "Recognizes general form f(x) = a^x where a > 0",
                "Identifies exponential growth (a > 1) vs decay (0 < a < 1)"
              ]
            },
            developing: {
              quantitative: ["1 correct with hints"],
              qualitative: [
                "Partial understanding of exponent position",
                "Needs prompting to distinguish from polynomials",
                "Can identify once definition is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect identifications", "Requests solution early"],
              qualitative: [
                "Confuses exponential with polynomial functions",
                "Does not recognize variable in exponent requirement",
                "Cannot distinguish between function types"
              ]
            }
          },
          learningObjectives: [
            "Define exponential function as f(x) = a^x where variable is in the exponent",
            "Distinguish exponential functions from polynomials (3^x vs x^3)",
            "Identify examples: f(x) = 2^x, g(x) = 0.5^x are exponential",
            "Identify non-examples: f(x) = x^2, f(x) = 2x + 3 are NOT exponential",
            "Recognize a must be positive (a > 0)"
          ],
          relevantFormulas: [
            "Exponential function form: f(x) = a^x where a > 0",
            "Growth: a > 1",
            "Decay: 0 < a < 1"
          ],
          availableTools: ["exponentialGraph"]
        },
        {
          id: "evaluating-exponentials",
          title: "Evaluating Exponential Expressions",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["exponential-definition"],
          masterySignals: "Student correctly evaluates exponential expressions including negative and zero exponents in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct evaluations without hints",
                "Consistent accuracy with negative/zero exponents"
              ],
              qualitative: [
                "Evaluates f(0) correctly using a^0 = 1",
                "Evaluates negative exponents using a^(-n) = 1/a^n",
                "Substitutes values correctly into exponential expressions",
                "Applies exponent rules accurately"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on exponent rules"],
              qualitative: [
                "Understands positive exponents but struggles with negative/zero",
                "Needs prompting for exponent rule application",
                "Can evaluate once rules are reviewed"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect evaluations", "Requests solution early"],
              qualitative: [
                "Does not know a^0 = 1",
                "Cannot handle negative exponents",
                "Makes calculation errors with exponents"
              ]
            }
          },
          learningObjectives: [
            "Evaluate f(0) for any exponential function (a^0 = 1)",
            "Evaluate positive exponents correctly",
            "Apply negative exponent rule: a^(-n) = 1/a^n",
            "Substitute and simplify exponential expressions",
            "Use calculator for decimal exponents when needed"
          ],
          relevantFormulas: [
            "a^0 = 1",
            "a^(-n) = 1/a^n",
            "a^(m/n) = ∜(a^m)"
          ],
          availableTools: ["exponentialGraph"]
        },
        {
          id: "identifying-functions",
          title: "Identifying Exponential vs Non-Exponential Functions",
          difficulty: "intermediate",
          prerequisites: ["exponential-definition"],
          masterySignals: "Student correctly classifies 4+ functions as exponential or non-exponential with clear reasoning",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "4+ correct classifications without hints",
                "Consistent reasoning across function types"
              ],
              qualitative: [
                "Correctly identifies exponential functions",
                "Correctly rejects polynomials, linear functions",
                "Explains reasoning using 'variable in exponent' criterion",
                "Handles mixed cases like f(x) = 2^x + 3"
              ]
            },
            developing: {
              quantitative: ["2-3 correct with hints on classification"],
              qualitative: [
                "Understands criterion but uncertain with mixed forms",
                "Needs prompting for edge cases",
                "Can classify once form is simplified"
              ]
            },
            struggling: {
              quantitative: ["Multiple misclassifications", "Requests solution early"],
              qualitative: [
                "Cannot apply classification criterion consistently",
                "Confuses exponential with other function types",
                "Does not understand variable position requirement"
              ]
            }
          },
          learningObjectives: [
            "Classify functions as exponential or non-exponential",
            "Identify exponential: f(x) = 7^x, f(x) = (1/2)^x, f(x) = 5 × 2^x",
            "Identify non-exponential: f(x) = x^3, f(x) = 10x^2 + 5",
            "Handle mixed forms: f(x) = 2^x + 3 is exponential",
            "Explain reasoning clearly using definition"
          ],
          relevantFormulas: [
            "Exponential: variable must be in exponent",
            "Polynomial: variable is base with constant exponent",
            "Linear: f(x) = mx + b"
          ],
          availableTools: ["exponentialGraph"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Definition (foundational) - Define exponential functions with variable in exponent",
      "2. Evaluation (foundational→intermediate) - Evaluate expressions with all exponent types",
      "3. Identification (intermediate) - Classify functions as exponential or not"
    ],

    keyFormulas: `• Exponential function: f(x) = a^x (a > 0, a ≠ 1)
• Growth: a > 1 (function increases)
• Decay: 0 < a < 1 (function decreases)
• Exponent rules: a^0 = 1, a^(-n) = 1/a^n
• Examples: f(x) = 2^x, g(x) = 0.5^x, h(x) = 3 × 5^x`
  },

  's3-math-exponential-logarithms-exponential-graphs': {
    displayName: 'Graphs of Exponential Functions',
    topicName: 'graphs of exponential functions',

    progressionStructure: {
      sections: [
        {
          id: "graphing-basics",
          title: "Creating Graphs from Tables of Values",
          difficulty: "foundational",
          prerequisites: ["s3-math-exponential-logarithms-exponential-functions"],
          masterySignals: "Student creates table of values and plots exponential graph correctly for 2+ functions",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ graphs plotted correctly from tables",
                "Consistent accuracy in point plotting"
              ],
              qualitative: [
                "Creates accurate table of values for x = -2, -1, 0, 1, 2, 3",
                "Plots points correctly on coordinate plane",
                "Draws smooth curve through points",
                "Labels axes and function clearly"
              ]
            },
            developing: {
              quantitative: ["1 graph with hints on plotting"],
              qualitative: [
                "Table values correct but plotting imprecise",
                "Needs prompting for smooth curve connection",
                "Can complete once process is reviewed"
              ]
            },
            struggling: {
              quantitative: ["Multiple plotting errors", "Requests solution early"],
              qualitative: [
                "Cannot create accurate table of values",
                "Plots points incorrectly",
                "Does not understand curve shape"
              ]
            }
          },
          learningObjectives: [
            "Create table of values by substituting x-values",
            "Plot points accurately on coordinate plane",
            "Draw smooth curve through points",
            "Recognize characteristic exponential curve shape",
            "Label graph appropriately"
          ],
          relevantFormulas: [
            "Table method: choose x values, calculate y = a^x",
            "Common x values: -3, -2, -1, 0, 1, 2, 3"
          ],
          availableTools: ["exponentialGraph"]
        },
        {
          id: "graph-features",
          title: "Key Features of Exponential Graphs",
          difficulty: "intermediate",
          prerequisites: ["graphing-basics"],
          masterySignals: "Student identifies y-intercept, asymptote, domain, range correctly for 3+ exponential graphs",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ graphs analyzed correctly for all features",
                "Consistent identification across growth and decay"
              ],
              qualitative: [
                "States y-intercept is always (0, 1) for f(x) = a^x",
                "Identifies horizontal asymptote y = 0 (x-axis)",
                "States domain: all real numbers (-∞, ∞)",
                "States range: y > 0 (positive values only)",
                "Explains graph never touches x-axis"
              ]
            },
            developing: {
              quantitative: ["2 features identified with hints"],
              qualitative: [
                "Knows some features but uncertain about others",
                "Needs prompting for asymptote or range",
                "Can identify once features are reviewed"
              ]
            },
            struggling: {
              quantitative: ["Multiple feature misidentifications", "Requests solution early"],
              qualitative: [
                "Cannot identify key features consistently",
                "Confuses domain and range",
                "Does not understand asymptote concept"
              ]
            }
          },
          learningObjectives: [
            "Identify y-intercept: always (0, 1) for f(x) = a^x",
            "Identify horizontal asymptote: y = 0 (x-axis)",
            "State domain: all real numbers",
            "State range: y > 0 (positive values only)",
            "Understand graph lies entirely above x-axis"
          ],
          relevantFormulas: [
            "Y-intercept: (0, 1) since a^0 = 1",
            "Horizontal asymptote: y = 0",
            "Domain: (-∞, ∞)",
            "Range: (0, ∞)"
          ],
          sampleProblems: [
            {
              problem: "For f(x) = 2^x, state the y-intercept, asymptote, domain, and range"
            }
          ],
          availableTools: ["exponentialGraph"]
        },
        {
          id: "comparing-functions",
          title: "Comparing Growth and Decay Functions",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["graph-features"],
          masterySignals: "Student distinguishes growth (a > 1) from decay (0 < a < 1) and compares growth rates for 3+ pairs",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct growth/decay identifications",
                "Consistent rate comparisons"
              ],
              qualitative: [
                "Identifies a > 1 as growth (rising left to right)",
                "Identifies 0 < a < 1 as decay (falling left to right)",
                "Compares growth rates: larger base grows faster",
                "Explains both types pass through (0, 1)",
                "Recognizes decay is reflection of growth"
              ]
            },
            developing: {
              quantitative: ["2 comparisons with hints"],
              qualitative: [
                "Understands growth vs decay but uncertain about rates",
                "Needs prompting for comparison reasoning",
                "Can compare once criteria are clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple misclassifications", "Requests solution early"],
              qualitative: [
                "Cannot distinguish growth from decay reliably",
                "Does not understand rate comparison",
                "Cannot explain base-rate relationship"
              ]
            }
          },
          learningObjectives: [
            "Distinguish growth (a > 1) from decay (0 < a < 1)",
            "Identify graph behavior: growth rises, decay falls",
            "Compare growth rates: larger base = faster growth",
            "Recognize both pass through (0, 1)",
            "Understand decay as reflection of growth about y-axis"
          ],
          relevantFormulas: [
            "Growth: a > 1 (e.g., 2^x, 3^x, 5^x)",
            "Decay: 0 < a < 1 (e.g., 0.5^x, 0.8^x)",
            "Larger base → steeper growth"
          ],
          sampleProblems: [
            {
              problem: "Which grows faster: f(x) = 2^x or g(x) = 5^x? Why?"
            }
          ],
          availableTools: ["exponentialGraph", "graphCompare"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Graphing Basics (foundational) - Create graphs from tables of values",
      "2. Graph Features (intermediate) - Identify y-intercept, asymptote, domain, range",
      "3. Comparing Functions (intermediate→advanced) - Compare growth vs decay and rates"
    ],

    keyFormulas: `• Y-intercept: always (0, 1) for f(x) = a^x
• Horizontal asymptote: y = 0 (x-axis)
• Domain: all real numbers (-∞, ∞)
• Range: y > 0
• Growth (a > 1): rises left to right
• Decay (0 < a < 1): falls left to right
• Larger base → faster growth`
  },

  's3-math-exponential-logarithms-exponential-equations': {
    displayName: 'Exponential Equations',
    topicName: 'exponential equations',

    progressionStructure: {
      sections: [
        {
          id: "same-base-simple",
          title: "Solving Simple Same-Base Equations",
          difficulty: "intermediate",
          prerequisites: ["s3-math-exponential-logarithms-exponential-functions"],
          masterySignals: "Student solves 3+ simple equations by equating exponents when bases are same",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ equations solved correctly",
                "Consistent application of equating exponents"
              ],
              qualitative: [
                "States rule: if a^x = a^k, then x = k",
                "Writes both sides with same base",
                "Equates exponents correctly",
                "Solves resulting equation accurately",
                "Verifies solution makes sense"
              ]
            },
            developing: {
              quantitative: ["2 correct with hints on base conversion"],
              qualitative: [
                "Understands rule but struggles with base conversion",
                "Needs prompting for rewriting strategy",
                "Can solve once bases are identified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Requests solution early"],
              qualitative: [
                "Cannot write numbers as powers",
                "Does not understand equating exponents rule",
                "Makes errors in solving resulting equation"
              ]
            }
          },
          learningObjectives: [
            "Apply rule: if a^x = a^k, then x = k",
            "Write both sides with same base",
            "Solve simple equations: 2^x = 8, 3^x = 27",
            "Recognize common powers: 8 = 2^3, 27 = 3^3, 32 = 2^5",
            "Verify solutions by substitution"
          ],
          relevantFormulas: [
            "If a^x = a^k, then x = k (same base → equal exponents)",
            "Common powers: 4=2^2, 8=2^3, 16=2^4, 9=3^2, 27=3^3"
          ],
          sampleProblems: [
            {
              problem: "Solve: 2^x = 32"
            },
            {
              problem: "Solve: 5 × 2^x = 40"
            }
          ],
          availableTools: []
        },
        {
          id: "same-base-complex",
          title: "Complex Same-Base Equations",
          difficulty: "advanced",
          prerequisites: ["same-base-simple"],
          masterySignals: "Student solves 2-3 complex equations requiring manipulation and negative exponents",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 complex equations solved correctly",
                "Consistent handling of negative exponents and fractions"
              ],
              qualitative: [
                "Converts fractions to negative exponents: 1/9 = 3^(-2)",
                "Handles equations with variables in multiple exponents",
                "Applies exponent rules correctly: (a^m)^n = a^(mn)",
                "Solves multi-step algebraic equations after equating",
                "Isolates exponential terms before equating"
              ]
            },
            developing: {
              quantitative: ["1 correct with hints on manipulation"],
              qualitative: [
                "Understands process but struggles with negative exponents",
                "Needs prompting for fraction-to-power conversion",
                "Can solve once equation is simplified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Requests solution early"],
              qualitative: [
                "Cannot handle negative exponents",
                "Does not apply exponent rules correctly",
                "Cannot solve multi-step algebraic equations"
              ]
            }
          },
          learningObjectives: [
            "Convert fractions to negative exponents: 1/a^n = a^(-n)",
            "Solve equations with negative exponents",
            "Apply power rules: (a^m)^n = a^(mn)",
            "Handle equations with variables in multiple places",
            "Isolate exponential term before equating exponents"
          ],
          relevantFormulas: [
            "1/a^n = a^(-n)",
            "(a^m)^n = a^(mn)",
            "a^m × a^n = a^(m+n)",
            "If coefficients present, isolate exponential first"
          ],
          sampleProblems: [
            {
              problem: "Solve: 3^(x-2) = 1/9"
            },
            {
              problem: "Solve: 4^(x-1) = (1/2)^(1-3x)"
            }
          ],
          availableTools: []
        },
        {
          id: "technology-use",
          title: "Using Technology for Unsolvable Equations",
          difficulty: "intermediate",
          prerequisites: ["same-base-simple"],
          masterySignals: "Student recognizes 2+ equations requiring calculator/logs and uses technology appropriately",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct identifications of unsolvable-by-hand equations",
                "Appropriate technology use"
              ],
              qualitative: [
                "Recognizes when same-base method fails",
                "Identifies equations like 2^x = 7 need technology",
                "Uses graphing or calculator appropriately",
                "Understands logarithms will solve these (preview)",
                "Rounds answers appropriately"
              ]
            },
            developing: {
              quantitative: ["1 identification with hints"],
              qualitative: [
                "Understands limitation but uncertain when it applies",
                "Needs prompting for technology use",
                "Can proceed once method is clarified"
              ]
            },
            struggling: {
              quantitative: ["Cannot identify unsolvable cases", "Requests solution early"],
              qualitative: [
                "Tries to force same-base method inappropriately",
                "Does not understand when calculator needed",
                "Cannot use technology effectively"
              ]
            }
          },
          learningObjectives: [
            "Recognize equations that cannot be solved by same-base method",
            "Identify when calculator/graphing needed",
            "Use technology to find approximate solutions",
            "Understand logarithms solve these exactly (preview)",
            "Round and interpret calculator results appropriately"
          ],
          relevantFormulas: [
            "Cannot solve 2^x = 7 by same base (7 not a power of 2)",
            "Use calculator or graphing for approximate solution",
            "Logarithms provide exact solution (later topic)"
          ],
          sampleProblems: [
            {
              problem: "Solve approximately using technology: 2^x = 7"
            }
          ],
          availableTools: ["exponentialGraph"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Simple Same-Base (intermediate) - Solve by equating exponents with same base",
      "2. Complex Same-Base (advanced) - Handle negative exponents and multi-step manipulations",
      "3. Technology Use (intermediate) - Recognize when calculator/logs needed"
    ],

    keyFormulas: `• If a^x = a^k, then x = k (same base rule)
• 1/a^n = a^(-n) (negative exponent)
• (a^m)^n = a^(mn) (power rule)
• Isolate exponential term first before equating
• Use technology when same base not possible`
  },

  's3-math-exponential-logarithms-exponential-growth': {
    displayName: 'Exponential Growth',
    topicName: 'exponential growth',

    progressionStructure: {
      sections: [
        {
          id: "growth-concept",
          title: "Understanding Exponential Growth",
          difficulty: "foundational",
          prerequisites: ["s3-math-exponential-logarithms-exponential-functions"],
          masterySignals: "Student defines exponential growth and identifies a > 1 requirement in 2-3 scenarios",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct definitions or identifications",
                "Consistent recognition of a > 1 criterion"
              ],
              qualitative: [
                "Defines exponential growth as quantity increasing exponentially",
                "States requirement: base a > 1",
                "Explains multiplies by same factor each period",
                "Identifies real-world examples: population, compound interest",
                "Understands growth accelerates over time"
              ]
            },
            developing: {
              quantitative: ["1 correct with hints"],
              qualitative: [
                "Partial understanding of growth concept",
                "Needs prompting for a > 1 requirement",
                "Can identify once criterion is reviewed"
              ]
            },
            struggling: {
              quantitative: ["Multiple misidentifications", "Requests solution early"],
              qualitative: [
                "Confuses growth with linear increase",
                "Does not understand exponential vs constant rate",
                "Cannot identify growth from function form"
              ]
            }
          },
          learningObjectives: [
            "Define exponential growth: quantity increases exponentially over time",
            "State requirement: base a > 1 in f(x) = p × a^x",
            "Understand multiplies by same factor each period",
            "Identify real-world examples: population, bacteria, investments",
            "Recognize growth curve shape (accelerating)"
          ],
          relevantFormulas: [
            "Exponential growth: f(x) = p × a^x where a > 1",
            "p = initial value (when x = 0)",
            "a = growth factor (multiply each period)"
          ],
          availableTools: ["exponentialGraph"]
        },
        {
          id: "growth-formula",
          title: "Growth Formula and Calculations",
          difficulty: "intermediate",
          prerequisites: ["growth-concept"],
          masterySignals: "Student applies growth formula correctly in 3+ scenarios, calculating future values accurately",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ growth calculations correct",
                "Consistent formula application"
              ],
              qualitative: [
                "Identifies initial value p from context",
                "Determines growth factor a from percentage increase",
                "Substitutes values correctly into f(x) = p × a^x",
                "Calculates future values accurately",
                "Interprets results in context with units"
              ]
            },
            developing: {
              quantitative: ["2 correct with hints on formula setup"],
              qualitative: [
                "Understands formula but struggles with factor conversion",
                "Needs prompting for percentage to factor (1 + r)",
                "Can calculate once setup is verified"
              ]
            },
            struggling: {
              quantitative: ["Multiple calculation errors", "Requests solution early"],
              qualitative: [
                "Cannot identify initial value or growth factor",
                "Confuses percentage with factor",
                "Makes calculator or substitution errors"
              ]
            }
          },
          learningObjectives: [
            "Apply formula: f(x) = p × a^x for growth calculations",
            "Identify initial value p from context",
            "Determine growth factor a from percentage: a = 1 + r/100",
            "Calculate future values at specific times",
            "Interpret results with appropriate units and context"
          ],
          relevantFormulas: [
            "Growth formula: f(x) = p × a^x",
            "p = initial population/amount",
            "a = growth factor = 1 + r/100 (r is percentage increase)",
            "Example: 12% growth → a = 1.12"
          ],
          sampleProblems: [
            {
              problem: "A rabbit population of 80 increases by 12% per year. Find population after 3 years using f(n) = 80 × 1.12^n"
            },
            {
              problem: "An investment of $5000 grows at 8% per year. Calculate value after 5 years"
            }
          ],
          availableTools: ["exponentialGraph"]
        },
        {
          id: "growth-problems",
          title: "Real-World Growth Applications",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["growth-formula"],
          masterySignals: "Student solves 2-3 real-world growth problems from setup through interpretation",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 complete problems solved correctly",
                "Consistent accuracy from setup to interpretation"
              ],
              qualitative: [
                "Translates word problems into exponential models",
                "Identifies all parameters from context correctly",
                "Performs calculations accurately",
                "Interprets answers in real-world context",
                "Rounds appropriately for context (e.g., whole animals)"
              ]
            },
            developing: {
              quantitative: ["1 problem with hints on setup"],
              qualitative: [
                "Understands formula but struggles with translation",
                "Needs prompting for parameter identification",
                "Can solve once model is established"
              ]
            },
            struggling: {
              quantitative: ["Cannot set up model", "Requests solution early"],
              qualitative: [
                "Cannot translate context to mathematical model",
                "Does not identify parameters correctly",
                "Makes errors in calculation or interpretation"
              ]
            }
          },
          learningObjectives: [
            "Translate word problems into exponential growth models",
            "Set up formula with correct parameters from context",
            "Solve population growth problems (rabbits, mongooses, bacteria)",
            "Solve financial growth problems (compound interest)",
            "Round and interpret results appropriately"
          ],
          relevantFormulas: [
            "General: f(n) = p × a^n",
            "Population after n years: P(n) = P₀ × (1 + r/100)^n",
            "Investment after n years: A(n) = A₀ × (1 + r/100)^n"
          ],
          sampleProblems: [
            {
              problem: "Rabbits: 80 start, 12% growth per year. How many after 5 years?"
            },
            {
              problem: "Mongooses: 2000 start, 7% growth per year. Find population after 3 years"
            }
          ],
          availableTools: ["exponentialGraph"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Growth Concept (foundational) - Define exponential growth and identify a > 1",
      "2. Growth Formula (intermediate) - Apply f(x) = p × a^x with percentage increases",
      "3. Growth Problems (intermediate→advanced) - Solve real-world population and finance problems"
    ],

    keyFormulas: `• Exponential growth: f(x) = p × a^x where a > 1
• p = initial value (at x = 0)
• a = growth factor = 1 + r/100 (r is % increase)
• Examples: 12% growth → a = 1.12, 5% growth → a = 1.05
• Population: P(n) = P₀ × (1 + r/100)^n
• Investment: A(n) = A₀ × (1 + r/100)^n`
  },

  's3-math-exponential-logarithms-exponential-decay': {
    displayName: 'Exponential Decay',
    topicName: 'exponential decay',

    progressionStructure: {
      sections: [
        {
          id: "decay-concept",
          title: "Understanding Exponential Decay",
          difficulty: "foundational",
          prerequisites: ["s3-math-exponential-logarithms-exponential-growth"],
          masterySignals: "Student defines exponential decay and identifies 0 < a < 1 requirement in 2-3 scenarios",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct definitions or identifications",
                "Consistent recognition of 0 < a < 1 criterion"
              ],
              qualitative: [
                "Defines exponential decay as quantity decreasing exponentially",
                "States requirement: 0 < a < 1 (or a = 1 - r/100)",
                "Explains multiplies by same fraction each period",
                "Identifies real-world examples: radioactive decay, cooling, depreciation",
                "Understands decay slows but never reaches zero"
              ]
            },
            developing: {
              quantitative: ["1 correct with hints"],
              qualitative: [
                "Partial understanding of decay concept",
                "Needs prompting for 0 < a < 1 requirement",
                "Can identify once criterion is reviewed"
              ]
            },
            struggling: {
              quantitative: ["Multiple misidentifications", "Requests solution early"],
              qualitative: [
                "Confuses decay with linear decrease",
                "Does not understand exponential vs constant rate",
                "Cannot identify decay from function form"
              ]
            }
          },
          learningObjectives: [
            "Define exponential decay: quantity decreases exponentially over time",
            "State requirement: 0 < a < 1 in f(x) = p × a^x",
            "Alternative form: a = 1 - r/100 for percentage decrease",
            "Identify real-world examples: radioactive decay, cooling, drug metabolism",
            "Recognize decay curve shape (decreasing, approaching zero)"
          ],
          relevantFormulas: [
            "Exponential decay: f(x) = p × a^x where 0 < a < 1",
            "Or: f(x) = p × (1 - r/100)^x for percentage decrease",
            "p = initial value",
            "a = decay factor (multiplier each period)"
          ],
          availableTools: ["exponentialGraph"]
        },
        {
          id: "decay-formula",
          title: "Decay Formula and Calculations",
          difficulty: "intermediate",
          prerequisites: ["decay-concept"],
          masterySignals: "Student applies decay formula correctly in 3+ scenarios, calculating remaining amounts accurately",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ decay calculations correct",
                "Consistent formula application"
              ],
              qualitative: [
                "Identifies initial value p from context",
                "Determines decay factor from percentage: a = 1 - r/100",
                "Substitutes values correctly into f(x) = p × a^x",
                "Calculates remaining values accurately",
                "Interprets results in context with units"
              ]
            },
            developing: {
              quantitative: ["2 correct with hints on formula setup"],
              qualitative: [
                "Understands formula but struggles with factor conversion",
                "Needs prompting for percentage to factor (1 - r/100)",
                "Can calculate once setup is verified"
              ]
            },
            struggling: {
              quantitative: ["Multiple calculation errors", "Requests solution early"],
              qualitative: [
                "Cannot identify initial value or decay factor",
                "Confuses percentage decrease with factor",
                "Makes calculator or substitution errors"
              ]
            }
          },
          learningObjectives: [
            "Apply formula: f(x) = p × a^x for decay calculations",
            "Determine decay factor from percentage: a = 1 - r/100",
            "Calculate remaining amount after given time periods",
            "Solve cooling problems (Newton's law context)",
            "Interpret results with appropriate units"
          ],
          relevantFormulas: [
            "Decay formula: f(x) = p × a^x where 0 < a < 1",
            "a = 1 - r/100 (r is percentage decrease)",
            "Example: 15% decay → a = 0.85",
            "Cooling: T(t) = T₀ × a^t (temperature after t minutes)"
          ],
          sampleProblems: [
            {
              problem: "Water cools from 100°C, losing 15% temperature each minute. Find temperature after 4 minutes"
            },
            {
              problem: "Electric current 8A decreases by 10% per second. Calculate current after 3 seconds"
            }
          ],
          availableTools: ["exponentialGraph"]
        },
        {
          id: "half-life",
          title: "Half-Life Applications",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["decay-formula"],
          masterySignals: "Student understands half-life concept and solves 2+ half-life problems correctly",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ half-life problems solved correctly",
                "Consistent application of halving concept"
              ],
              qualitative: [
                "Defines half-life as time for quantity to reduce to half",
                "Applies repeated halving: after n half-lives, amount = p × (1/2)^n",
                "Calculates remaining amount after multiple half-lives",
                "Interprets radioactive decay contexts",
                "Understands exponential nature of half-life"
              ]
            },
            developing: {
              quantitative: ["1 problem with hints on halving"],
              qualitative: [
                "Understands concept but struggles with calculation",
                "Needs prompting for formula setup",
                "Can solve once half-life count is identified"
              ]
            },
            struggling: {
              quantitative: ["Cannot apply half-life concept", "Requests solution early"],
              qualitative: [
                "Does not understand half-life definition",
                "Cannot calculate number of half-lives elapsed",
                "Confuses half-life with linear halving"
              ]
            }
          },
          learningObjectives: [
            "Define half-life: time for quantity to reduce to half original amount",
            "Apply formula: A(n) = A₀ × (1/2)^n where n is number of half-lives",
            "Calculate number of half-lives: n = total time / half-life period",
            "Solve radioactive decay problems",
            "Understand exponential nature: never reaches zero"
          ],
          relevantFormulas: [
            "Half-life formula: A(n) = A₀ × (1/2)^n",
            "n = total time / half-life period",
            "After 1 half-life: 50% remains",
            "After 2 half-lives: 25% remains",
            "After 3 half-lives: 12.5% remains"
          ],
          sampleProblems: [
            {
              problem: "Strontium-90 has half-life 25 years. If 80g present initially, how much after 100 years?"
            }
          ],
          availableTools: ["exponentialGraph"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Decay Concept (foundational) - Define exponential decay and identify 0 < a < 1",
      "2. Decay Formula (intermediate) - Apply f(x) = p × a^x with percentage decreases",
      "3. Half-Life (intermediate→advanced) - Solve radioactive decay and half-life problems"
    ],

    keyFormulas: `• Exponential decay: f(x) = p × a^x where 0 < a < 1
• a = decay factor = 1 - r/100 (r is % decrease)
• Examples: 15% decay → a = 0.85, 10% decay → a = 0.90
• Half-life: A(n) = A₀ × (1/2)^n
• n = total time / half-life period
• Cooling: T(t) = T₀ × a^t`
  },

  's3-math-exponential-logarithms-common-logarithms': {
    displayName: 'Common Logarithms',
    topicName: 'common logarithms',

    progressionStructure: {
      sections: [
        {
          id: "logarithm-definition",
          title: "Understanding Logarithms",
          difficulty: "foundational",
          prerequisites: ["s3-math-exponential-logarithms-exponential-functions"],
          masterySignals: "Student defines logarithm as inverse of exponential and converts between forms in 3+ examples",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ conversions between exponential and logarithmic form",
                "Consistent understanding of inverse relationship"
              ],
              qualitative: [
                "Defines logarithm as 'power to which base must be raised'",
                "States: if 10^x = y, then log₁₀(y) = x (or log y = x)",
                "Converts exponential to logarithmic form correctly",
                "Converts logarithmic to exponential form correctly",
                "Understands log is asking: 'what power?'"
              ]
            },
            developing: {
              quantitative: ["2 conversions with hints"],
              qualitative: [
                "Understands definition but struggles with conversion",
                "Needs prompting for identifying base and exponent",
                "Can convert once positions are clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple conversion errors", "Requests solution early"],
              qualitative: [
                "Does not understand logarithm as inverse",
                "Cannot identify base, exponent, result positions",
                "Confuses direction of conversion"
              ]
            }
          },
          learningObjectives: [
            "Define logarithm as inverse of exponential function",
            "Understand log₁₀(y) asks: '10 to what power gives y?'",
            "Convert exponential to logarithmic: 10^2 = 100 → log 100 = 2",
            "Convert logarithmic to exponential: log 1000 = 3 → 10^3 = 1000",
            "Recognize common logarithm (base 10) written as 'log' without subscript"
          ],
          relevantFormulas: [
            "Definition: if 10^x = y, then log y = x (base 10 assumed)",
            "Logarithm asks: 'what power?'",
            "Common logarithm: log₁₀ = log (base 10)",
            "Inverse relationship: 10^(log y) = y and log(10^x) = x"
          ],
          sampleProblems: [
            {
              problem: "Convert to logarithmic form: 10^4 = 10,000"
            },
            {
              problem: "Convert to exponential form: log 0.01 = -2"
            }
          ],
          availableTools: ["logarithmGraph"]
        },
        {
          id: "calculator-use",
          title: "Using Calculators for Logarithms",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["logarithm-definition"],
          masterySignals: "Student uses calculator correctly to find logarithms and evaluates 4+ expressions accurately",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "4+ calculator evaluations correct",
                "Consistent accuracy with rounding"
              ],
              qualitative: [
                "Uses log button correctly on calculator",
                "Evaluates log of numbers not powers of 10",
                "Rounds to appropriate decimal places (typically 2-4)",
                "Verifies answers make sense (e.g., log 50 ≈ 1.7 between log 10 = 1 and log 100 = 2)",
                "Interprets calculator display correctly"
              ]
            },
            developing: {
              quantitative: ["2-3 correct with hints on calculator use"],
              qualitative: [
                "Understands process but makes input errors",
                "Needs prompting for rounding convention",
                "Can evaluate once calculator steps clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple calculator errors", "Requests solution early"],
              qualitative: [
                "Cannot use log button correctly",
                "Does not round appropriately",
                "Cannot verify if answer is reasonable"
              ]
            }
          },
          learningObjectives: [
            "Use calculator log button to find logarithms",
            "Evaluate log of numbers that are not powers of 10",
            "Round answers to specified decimal places",
            "Verify answers are reasonable using benchmarks",
            "Solve simple equations using calculator: if log x = 2.5, find x"
          ],
          relevantFormulas: [
            "Calculator gives log to many decimal places",
            "Typically round to 2-4 decimal places",
            "Benchmarks: log 1 = 0, log 10 = 1, log 100 = 2, log 1000 = 3",
            "If log x = k, then x = 10^k (antilog)"
          ],
          sampleProblems: [
            {
              problem: "Use calculator to find log 50 (round to 2 d.p.)"
            },
            {
              problem: "If log x = 2.78, find x using calculator"
            }
          ],
          availableTools: ["logarithmGraph"]
        },
        {
          id: "domain-restrictions",
          title: "Domain of Logarithmic Functions",
          difficulty: "intermediate",
          prerequisites: ["logarithm-definition"],
          masterySignals: "Student states domain restriction (x > 0) and explains why for 3+ contexts",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct domain identifications",
                "Consistent explanation of restriction"
              ],
              qualitative: [
                "States domain: x > 0 (positive numbers only)",
                "Explains log of zero is undefined (10^? = 0 impossible)",
                "Explains log of negatives is undefined (10^? = negative impossible)",
                "Identifies vertical asymptote at x = 0",
                "Understands graph only exists for x > 0"
              ]
            },
            developing: {
              quantitative: ["2 identifications with hints"],
              qualitative: [
                "Knows restriction but uncertain about reasoning",
                "Needs prompting for why zero/negatives excluded",
                "Can explain once exponential connection reviewed"
              ]
            },
            struggling: {
              quantitative: ["Cannot state domain", "Requests solution early"],
              qualitative: [
                "Does not understand domain restriction",
                "Cannot explain why negatives excluded",
                "Confuses with exponential domain"
              ]
            }
          },
          learningObjectives: [
            "State domain of log function: x > 0 (positive real numbers)",
            "Explain why log 0 is undefined",
            "Explain why log of negative is undefined",
            "Identify vertical asymptote at x = 0 on graph",
            "Recognize range: all real numbers (-∞, ∞)"
          ],
          relevantFormulas: [
            "Domain: x > 0 (positive numbers only)",
            "Range: all real numbers",
            "Vertical asymptote: x = 0 (y-axis)",
            "log 0 and log(negative) are undefined"
          ],
          sampleProblems: [
            {
              problem: "Why is log(-5) undefined?"
            }
          ],
          availableTools: ["logarithmGraph"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Definition (foundational) - Define logarithm and convert between forms",
      "2. Calculator Use (foundational→intermediate) - Use technology to evaluate logarithms",
      "3. Domain (intermediate) - Understand x > 0 restriction and asymptote"
    ],

    keyFormulas: `• Definition: if 10^x = y, then log y = x
• Common log (base 10): log₁₀ = log
• Inverse: 10^(log y) = y and log(10^x) = x
• Domain: x > 0 only (positive numbers)
• Range: all real numbers
• Vertical asymptote: x = 0
• Use calculator for non-powers of 10`
  },

  's3-math-exponential-logarithms-logarithm-laws': {
    displayName: 'Laws of Logarithms',
    topicName: 'laws of logarithms',

    progressionStructure: {
      sections: [
        {
          id: "product-law",
          title: "Product Law of Logarithms",
          difficulty: "intermediate",
          prerequisites: ["s3-math-exponential-logarithms-common-logarithms"],
          masterySignals: "Student states and applies product law correctly in 3+ problems (expansion and simplification)",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of product law",
                "Consistent use in both directions"
              ],
              qualitative: [
                "States product law: log(ab) = log a + log b",
                "Expands logarithms: log(5 × 7) = log 5 + log 7",
                "Simplifies sums: log 3 + log 4 = log 12",
                "Applies to multiple products: log(2 × 3 × 5)",
                "Explains why law works using exponent addition"
              ]
            },
            developing: {
              quantitative: ["2 applications with hints"],
              qualitative: [
                "Knows law but uncertain when to apply",
                "Needs prompting for direction (expand vs simplify)",
                "Can apply once situation is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple misapplications", "Requests solution early"],
              qualitative: [
                "Cannot state product law correctly",
                "Confuses with power law or quotient law",
                "Does not understand bidirectional use"
              ]
            }
          },
          learningObjectives: [
            "State product law: log(ab) = log a + log b",
            "Expand products: log(5 × 8) = log 5 + log 8",
            "Simplify sums: log 2 + log 9 = log 18",
            "Apply to multiple terms: log(2 × 3 × 5) = log 2 + log 3 + log 5",
            "Understand proof using exponent rules"
          ],
          relevantFormulas: [
            "Product law: log(ab) = log a + log b",
            "Reverse: log a + log b = log(ab)",
            "Proof: if a = 10^x and b = 10^y, then ab = 10^x × 10^y = 10^(x+y)"
          ],
          sampleProblems: [
            {
              problem: "Expand: log(5 × 12)"
            },
            {
              problem: "Simplify: log 6 + log 7"
            }
          ],
          availableTools: []
        },
        {
          id: "quotient-law",
          title: "Quotient Law of Logarithms",
          difficulty: "intermediate",
          prerequisites: ["product-law"],
          masterySignals: "Student states and applies quotient law correctly in 3+ problems (expansion and simplification)",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of quotient law",
                "Consistent use in both directions"
              ],
              qualitative: [
                "States quotient law: log(a/b) = log a - log b",
                "Expands quotients: log(20/4) = log 20 - log 4",
                "Simplifies differences: log 50 - log 2 = log 25",
                "Applies correctly to fractions",
                "Explains why law works using exponent subtraction"
              ]
            },
            developing: {
              quantitative: ["2 applications with hints"],
              qualitative: [
                "Knows law but confuses order (numerator - denominator)",
                "Needs prompting for direction",
                "Can apply once subtraction order clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple misapplications", "Requests solution early"],
              qualitative: [
                "Cannot state quotient law correctly",
                "Confuses subtraction order",
                "Mixes up quotient with product law"
              ]
            }
          },
          learningObjectives: [
            "State quotient law: log(a/b) = log a - log b",
            "Expand quotients: log(30/5) = log 30 - log 5",
            "Simplify differences: log 100 - log 4 = log 25",
            "Apply to complex fractions",
            "Remember: numerator log minus denominator log"
          ],
          relevantFormulas: [
            "Quotient law: log(a/b) = log a - log b",
            "Reverse: log a - log b = log(a/b)",
            "Proof: if a = 10^x and b = 10^y, then a/b = 10^x / 10^y = 10^(x-y)"
          ],
          sampleProblems: [
            {
              problem: "Expand: log(60/12)"
            },
            {
              problem: "Simplify: log 80 - log 8"
            }
          ],
          availableTools: []
        },
        {
          id: "power-law",
          title: "Power Law of Logarithms",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["quotient-law"],
          masterySignals: "Student states and applies power law correctly in 3+ problems including negative and fractional exponents",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of power law",
                "Handles positive, negative, and fractional powers"
              ],
              qualitative: [
                "States power law: log(a^n) = n × log a",
                "Simplifies powers: log(5^3) = 3 log 5",
                "Handles negative exponents: log(2^(-2)) = -2 log 2",
                "Handles fractional exponents: log(√x) = (1/2) log x",
                "Brings coefficients into exponent: 3 log 4 = log(4^3) = log 64"
              ]
            },
            developing: {
              quantitative: ["2 applications with hints on exponent type"],
              qualitative: [
                "Knows basic power law but struggles with negative/fractional",
                "Needs prompting for direction",
                "Can apply once exponent is identified"
              ]
            },
            struggling: {
              quantitative: ["Multiple misapplications", "Requests solution early"],
              qualitative: [
                "Cannot state power law correctly",
                "Confuses power with product/quotient",
                "Cannot handle negative or fractional exponents"
              ]
            }
          },
          learningObjectives: [
            "State power law: log(a^n) = n × log a",
            "Apply to positive exponents: log(7^2) = 2 log 7",
            "Apply to negative exponents: log(3^(-1)) = -log 3",
            "Apply to fractional exponents: log(√5) = (1/2) log 5",
            "Reverse direction: bring coefficient into log as exponent"
          ],
          relevantFormulas: [
            "Power law: log(a^n) = n × log a",
            "Reverse: n × log a = log(a^n)",
            "Special: log(√a) = log(a^(1/2)) = (1/2) log a",
            "Negative: log(1/a) = log(a^(-1)) = -log a"
          ],
          sampleProblems: [
            {
              problem: "Simplify: log(6^4)"
            },
            {
              problem: "Simplify: log(√10)"
            },
            {
              problem: "Write as single log: 4 log 2"
            }
          ],
          availableTools: []
        },
        {
          id: "simplification",
          title: "Combined Law Applications",
          difficulty: "advanced",
          prerequisites: ["power-law"],
          masterySignals: "Student simplifies 2-3 complex expressions using multiple laws correctly",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 complex simplifications correct",
                "Correct law selection and application order"
              ],
              qualitative: [
                "Applies multiple laws in correct sequence",
                "Simplifies expressions like log a + 2 log b - log c",
                "Writes as single logarithm correctly",
                "Expands complex logarithms using all three laws",
                "Shows clear working with law citations"
              ]
            },
            developing: {
              quantitative: ["1 simplification with hints on law selection"],
              qualitative: [
                "Knows all laws but uncertain about order",
                "Needs prompting for which law to apply",
                "Can complete once strategy is outlined"
              ]
            },
            struggling: {
              quantitative: ["Cannot simplify", "Requests solution early"],
              qualitative: [
                "Mixes up laws incorrectly",
                "Cannot determine application sequence",
                "Makes errors combining multiple laws"
              ]
            }
          },
          learningObjectives: [
            "Apply multiple laws in combination",
            "Simplify: log a + log b - log c = log(ab/c)",
            "Simplify: 2 log x + log y = log(x²y)",
            "Expand: log(x²y/z) = 2 log x + log y - log z",
            "Choose efficient strategy for simplification"
          ],
          relevantFormulas: [
            "Product: log(ab) = log a + log b",
            "Quotient: log(a/b) = log a - log b",
            "Power: log(a^n) = n log a",
            "Order: handle powers first, then products/quotients"
          ],
          sampleProblems: [
            {
              problem: "Write as single log: log 5 + 2 log 3 - log 9"
            },
            {
              problem: "Expand completely: log(x³y²/z)"
            }
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. Product Law (intermediate) - Apply log(ab) = log a + log b",
      "2. Quotient Law (intermediate) - Apply log(a/b) = log a - log b",
      "3. Power Law (intermediate→advanced) - Apply log(a^n) = n log a with all exponent types",
      "4. Simplification (advanced) - Combine all three laws for complex expressions"
    ],

    keyFormulas: `• Product law: log(ab) = log a + log b
• Quotient law: log(a/b) = log a - log b
• Power law: log(a^n) = n × log a
• All work in reverse direction too
• Combine: log(x²y/z) = 2 log x + log y - log z
• Strategy: powers first, then products/quotients`
  },

  's3-math-exponential-logarithms-using-logarithms': {
    displayName: 'Using Logarithms to Solve Equations',
    topicName: 'using logarithms to solve exponential equations',

    progressionStructure: {
      sections: [
        {
          id: "method-understanding",
          title: "Understanding the Logarithm Method",
          difficulty: "intermediate",
          prerequisites: ["s3-math-exponential-logarithms-logarithm-laws"],
          masterySignals: "Student explains logarithm method for exponential equations and sets up 2+ problems correctly",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct problem setups",
                "Consistent understanding of method"
              ],
              qualitative: [
                "Explains: take log of both sides to bring exponent down",
                "States process: isolate exponential → log both sides → apply power law → solve",
                "Understands when method needed (vs same-base method)",
                "Sets up equation correctly before solving",
                "Recognizes log is inverse operation to exponential"
              ]
            },
            developing: {
              quantitative: ["1 setup with hints"],
              qualitative: [
                "Understands concept but uncertain about steps",
                "Needs prompting for when to apply log",
                "Can proceed once method is reviewed"
              ]
            },
            struggling: {
              quantitative: ["Cannot set up method", "Requests solution early"],
              qualitative: [
                "Does not understand why logarithms help",
                "Cannot identify when method is needed",
                "Confuses with same-base method"
              ]
            }
          },
          learningObjectives: [
            "Understand logarithms solve exponential equations",
            "Explain process: take log of both sides",
            "Recognize when to use vs same-base method",
            "Set up equation: if 2^x = 7, take log both sides",
            "Understand log brings exponent down (power law)"
          ],
          relevantFormulas: [
            "Method: take log of both sides",
            "Apply power law: log(a^x) = x log a",
            "Solve for x: x = log(result) / log(base)",
            "Use when same-base method impossible"
          ],
          sampleProblems: [
            {
              problem: "Explain why taking log of both sides of 2^x = 7 helps solve for x"
            }
          ],
          availableTools: []
        },
        {
          id: "solving-equations",
          title: "Solving Exponential Equations",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["method-understanding"],
          masterySignals: "Student solves 3+ exponential equations using logarithms with correct setup and calculation",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ equations solved correctly using logarithms",
                "Consistent accuracy through all steps"
              ],
              qualitative: [
                "Isolates exponential term before taking logs",
                "Takes log of both sides correctly",
                "Applies power law: x log a = log b → x = log b / log a",
                "Uses calculator accurately for final answer",
                "Rounds appropriately and verifies solution"
              ]
            },
            developing: {
              quantitative: ["2 correct with hints on setup or calculation"],
              qualitative: [
                "Understands method but makes algebra errors",
                "Needs prompting for isolation or power law application",
                "Can complete once steps are clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple solving errors", "Requests solution early"],
              qualitative: [
                "Cannot apply power law correctly",
                "Makes calculator or algebra errors",
                "Does not verify solution makes sense"
              ]
            }
          },
          learningObjectives: [
            "Solve equations like 2^x = 7 using logarithms",
            "Isolate exponential term first: 5 × 2^x = 70 → 2^x = 14",
            "Take log of both sides: log(2^x) = log 7",
            "Apply power law: x log 2 = log 7",
            "Solve and use calculator: x = log 7 / log 2 ≈ 2.807"
          ],
          relevantFormulas: [
            "General: if a^x = b, then x = log b / log a",
            "Steps: isolate → log both sides → power law → divide → calculate",
            "Example: 2^x = 7 → x log 2 = log 7 → x = log 7 / log 2"
          ],
          sampleProblems: [
            {
              problem: "Solve: 2^x = 7 (give answer to 3 d.p.)"
            },
            {
              problem: "Solve: 5 × 2^x = 70"
            },
            {
              problem: "Solve: 3^(x+1) = 20"
            }
          ],
          availableTools: []
        },
        {
          id: "applications",
          title: "Real-World Applications",
          difficulty: "advanced",
          prerequisites: ["solving-equations"],
          masterySignals: "Student solves 2+ real-world problems requiring logarithms from setup through interpretation",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ application problems solved completely",
                "Correct setup, solution, and interpretation"
              ],
              qualitative: [
                "Translates word problem to exponential equation",
                "Sets up growth/decay equation correctly",
                "Solves using logarithms accurately",
                "Interprets result in context with units",
                "Rounds appropriately for real-world context"
              ]
            },
            developing: {
              quantitative: ["1 problem with hints on setup or solving"],
              qualitative: [
                "Can solve equation but struggles with translation",
                "Needs prompting for model setup",
                "Can complete once equation is established"
              ]
            },
            struggling: {
              quantitative: ["Cannot translate to equation", "Requests solution early"],
              qualitative: [
                "Cannot set up exponential model from context",
                "Makes errors in logarithmic solving",
                "Does not interpret result correctly"
              ]
            }
          },
          learningObjectives: [
            "Set up exponential equations from word problems",
            "Solve 'when will population reach X?' questions",
            "Find time for investment to reach target amount",
            "Calculate half-lives to reach certain decay level",
            "Interpret solutions in practical context"
          ],
          relevantFormulas: [
            "Growth: P(n) = P₀ × a^n, solve for n when P(n) is given",
            "General: if p × a^n = target, then n = log(target/p) / log a",
            "Time = number of periods (years, days, hours depending on context)"
          ],
          sampleProblems: [
            {
              problem: "Rabbits start at 80, grow 12% per year. When will population reach 200?"
            },
            {
              problem: "Investment of $5000 grows at 6% annually. How long to reach $8000?"
            }
          ],
          availableTools: ["exponentialGraph"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Method Understanding (intermediate) - Explain why logarithms solve exponentials",
      "2. Solving Equations (intermediate→advanced) - Solve a^x = b using log method",
      "3. Applications (advanced) - Solve real-world growth/decay timing problems"
    ],

    keyFormulas: `• Method: take log of both sides of equation
• Power law: log(a^x) = x log a
• General solution: if a^x = b, then x = log b / log a
• With coefficient: if p × a^x = k, first isolate: a^x = k/p
• Real-world: solve for time n in P(n) = P₀ × a^n
• Always verify solution makes sense in context`
  },

  's3-math-exponential-logarithms-logarithms-other-bases': {
    displayName: 'Logarithms in Other Bases',
    topicName: 'logarithms in other bases',

    progressionStructure: {
      sections: [
        {
          id: "base-definition",
          title: "Understanding Logarithms in Any Base",
          difficulty: "intermediate",
          prerequisites: ["s3-math-exponential-logarithms-common-logarithms"],
          masterySignals: "Student defines log_a(x) and converts between exponential and logarithmic forms for 3+ bases",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ conversions with different bases",
                "Consistent understanding across bases"
              ],
              qualitative: [
                "Defines log_a(x): 'a to what power gives x?'",
                "States: if a^n = x, then log_a(x) = n",
                "Converts any base exponential to logarithmic form",
                "Converts any base logarithmic to exponential form",
                "Recognizes base 10 and base e as special cases"
              ]
            },
            developing: {
              quantitative: ["2 conversions with hints"],
              qualitative: [
                "Understands definition but uncertain with new bases",
                "Needs prompting for identifying base position",
                "Can convert once base is identified"
              ]
            },
            struggling: {
              quantitative: ["Multiple conversion errors", "Requests solution early"],
              qualitative: [
                "Confuses base position in different forms",
                "Cannot generalize from base 10 to other bases",
                "Mixes up base, exponent, and result"
              ]
            }
          },
          learningObjectives: [
            "Define log_a(x): 'a to what power gives x?'",
            "Convert exponential to log: 2^3 = 8 → log₂(8) = 3",
            "Convert log to exponential: log₃(81) = 4 → 3^4 = 81",
            "Recognize common bases: base 10 (log), base e (ln), base 2 (log₂)",
            "Understand base must be positive (a > 0, a ≠ 1)"
          ],
          relevantFormulas: [
            "Definition: if a^n = x, then log_a(x) = n",
            "Base must satisfy: a > 0 and a ≠ 1",
            "Special: log₁₀ = log (common), log_e = ln (natural)"
          ],
          sampleProblems: [
            {
              problem: "Convert to logarithmic form: 2^5 = 32"
            },
            {
              problem: "Convert to exponential form: log₅(125) = 3"
            }
          ],
          availableTools: ["logarithmGraph"]
        },
        {
          id: "conversion",
          title: "Converting Between Bases",
          difficulty: "advanced",
          prerequisites: ["base-definition"],
          masterySignals: "Student applies change of base formula correctly in 3+ conversions and evaluations",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct base conversions",
                "Accurate calculator use for evaluation"
              ],
              qualitative: [
                "States change of base formula: log_a(x) = log(x) / log(a)",
                "Converts to base 10 for calculator use",
                "Evaluates logarithms in any base using calculator",
                "Understands why formula works (log laws)",
                "Chooses appropriate base for calculation"
              ]
            },
            developing: {
              quantitative: ["2 conversions with hints on formula"],
              qualitative: [
                "Knows formula but uncertain about application",
                "Needs prompting for numerator/denominator order",
                "Can calculate once setup is verified"
              ]
            },
            struggling: {
              quantitative: ["Multiple formula errors", "Requests solution early"],
              qualitative: [
                "Cannot recall or apply change of base formula",
                "Confuses numerator and denominator",
                "Makes calculator errors in evaluation"
              ]
            }
          },
          learningObjectives: [
            "State change of base formula: log_a(x) = log(x) / log(a)",
            "Convert any base to base 10 for calculator",
            "Evaluate using calculator: log₂(50) = log 50 / log 2",
            "Understand formula derivation using log laws",
            "Apply to solve equations in any base"
          ],
          relevantFormulas: [
            "Change of base: log_a(x) = log(x) / log(a)",
            "Alternative: log_a(x) = ln(x) / ln(a) (using natural log)",
            "General: log_a(x) = log_b(x) / log_b(a) for any base b"
          ],
          sampleProblems: [
            {
              problem: "Use calculator to find log₂(50) (use change of base formula)"
            },
            {
              problem: "Evaluate log₅(200) to 2 decimal places"
            }
          ],
          availableTools: []
        },
        {
          id: "properties",
          title: "Universal Logarithm Properties",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["conversion"],
          masterySignals: "Student applies universal properties correctly in 3+ problems across different bases",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of properties",
                "Consistent understanding across bases"
              ],
              qualitative: [
                "Applies log_a(1) = 0 for any base (a^0 = 1)",
                "Applies log_a(a) = 1 for any base (a^1 = a)",
                "States inverse: a^(log_a(x)) = x",
                "Applies all three logarithm laws in any base",
                "Recognizes properties are universal across bases"
              ]
            },
            developing: {
              quantitative: ["2 properties applied with hints"],
              qualitative: [
                "Knows some properties but uncertain about others",
                "Needs prompting for universal application",
                "Can apply once property is stated"
              ]
            },
            struggling: {
              quantitative: ["Cannot apply properties", "Requests solution early"],
              qualitative: [
                "Does not understand universal nature",
                "Confuses properties between bases",
                "Cannot explain why properties hold"
              ]
            }
          },
          learningObjectives: [
            "Apply universal property: log_a(1) = 0 for any base",
            "Apply universal property: log_a(a) = 1 for any base",
            "Use inverse property: a^(log_a(x)) = x",
            "Apply product, quotient, power laws in any base",
            "Recognize all logarithm laws work regardless of base"
          ],
          relevantFormulas: [
            "Universal: log_a(1) = 0 (for any a)",
            "Universal: log_a(a) = 1 (for any a)",
            "Inverse: a^(log_a(x)) = x and log_a(a^x) = x",
            "Laws work in any base: product, quotient, power"
          ],
          sampleProblems: [
            {
              problem: "Evaluate without calculator: log₅(1) + log₅(5) + log₅(25)"
            },
            {
              problem: "Simplify: log₃(9x) - log₃(x)"
            }
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Base Definition (intermediate) - Define and convert log_a(x) for any base",
      "2. Base Conversion (advanced) - Apply change of base formula for calculator use",
      "3. Universal Properties (intermediate→advanced) - Apply properties across all bases"
    ],

    keyFormulas: `• Definition: if a^n = x, then log_a(x) = n
• Change of base: log_a(x) = log(x) / log(a)
• Universal properties:
  - log_a(1) = 0 (any base)
  - log_a(a) = 1 (any base)
  - a^(log_a(x)) = x (inverse)
• All three logarithm laws work in any base
• Special bases: log (base 10), ln (base e), log₂ (base 2)`
  }
};

// ==========================
// BACKWARD COMPATIBILITY EXPORT
// ==========================

/**
 * Export for backward compatibility with existing code
 */
export const EXPONENTIAL_LOGARITHMS_CONFIG = {
  agents: {
    tutor: {
      extends: 'TUTOR_BASE',
      customization: EXPONENTIAL_LOGARITHMS_TUTOR_CUSTOMIZATION
    },
    evaluator: {
      extends: 'EVALUATOR_BASE'
    },
    question: {
      extends: 'QUESTION_BASE'
    },
    solution: {
      extends: 'SOLUTION_BASE'
    }
  },
  progressionStructure: {
    subtopics: S3_MATH_EXPONENTIAL_LOGARITHMS_SUBTOPICS,
    mathTools: EXPONENTIAL_LOGARITHMS_MATH_TOOLS
  }
};

// ==========================
// PROMPT LIBRARY CONFIG
// ==========================

/**
 * Configuration for PromptLibrary registration
 */
export const EXPONENTIAL_LOGARITHMS_PROMPT_CONFIG = {
  subject: 'mathematics',
  level: 'secondary',
  topicId: 's3-math-exponential-logarithms',
  displayName: 'Exponential Functions and Logarithms',
  subtopics: S3_MATH_EXPONENTIAL_LOGARITHMS_SUBTOPICS,
  tutorCustomization: EXPONENTIAL_LOGARITHMS_TUTOR_CUSTOMIZATION,
  mathTools: EXPONENTIAL_LOGARITHMS_MATH_TOOLS
};