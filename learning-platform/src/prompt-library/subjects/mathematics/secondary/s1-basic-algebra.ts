/**
 * S1 Mathematics: Basic Algebra
 *
 * This module covers fundamental algebraic concepts for Secondary 1 students,
 * including notation, simplification, expansion, factorization, equation solving,
 * and real-world applications.
 */

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type BasicAlgebraTopicId =
  | 's1-math-basic-algebra-notation'
  | 's1-math-basic-algebra-simplifying'
  | 's1-math-basic-algebra-expanding'
  | 's1-math-basic-algebra-factorization'
  | 's1-math-basic-algebra-equations'
  | 's1-math-basic-algebra-changing-subject'
  | 's1-math-basic-algebra-word-problems';

// ============================================================================
// TOPIC CONFIGURATION
// ============================================================================

export const S1_BASIC_ALGEBRA_CONFIG = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for Secondary 1 students learning Basic Algebra.

Teaching Approach:
- Guide students to discover algebraic patterns through questioning
- Help students understand variables as representations of unknown values
- Use real-world contexts: money, age, distance, measurements, shopping
- Build from concrete (simple expressions) to abstract (complex equations)
- Emphasize the connection between operations and inverse operations
- Celebrate insights when students recognize like terms or apply distributive law correctly
- Adapt difficulty organically based on student mastery

**Text-to-Speech Guidelines:**
- Say "x squared" instead of "x²" for clarity
- Spell out variables clearly: "ex", "why", "zee" or "zed"
- Say "brackets" instead of "parentheses"
- Say "equals" not "is equal to" for brevity
- Avoid saying symbols like "+" or "-", say "plus" and "minus"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding.
IMPORTANT: Use the technical name (e.g., "algebraExpression") in the toolName field, NOT the display name.

Available tools for this topic:
- algebraExpression: Essential for showing term breakdown, coefficients, and like terms
- distributiveVisualizer: For expanding brackets a(b+c) and showing distribution
- balanceScale: For equation solving and showing balance concept
- numberLine: For variable representation and inequality visualization
- fractionBar: For fractional coefficients

Examples of effective tool use:
- algebraExpression to identify like terms in 5x + 3y - 2x + 7
- distributiveVisualizer to show 3(x + 5) = 3x + 15 step-by-step
- balanceScale to demonstrate why we do same operation to both sides
- numberLine for showing variable values and solution verification`
};

// ============================================================================
// AVAILABLE MATH TOOLS
// ============================================================================

export const S1_BASIC_ALGEBRA_MATH_TOOLS = [
  "algebraExpression",
  "distributiveVisualizer",
  "balanceScale",
  "numberLine",
  "fractionBar"
];

// ============================================================================
// SUBTOPICS CONFIGURATION
// ============================================================================

export const S1_MATH_BASIC_ALGEBRA_SUBTOPICS = {
  // ========================================================================
  // SUBTOPIC 1: ALGEBRAIC NOTATION & EXPRESSIONS
  // ========================================================================

  's1-math-basic-algebra-notation': {
    displayName: 'Algebraic Notation & Expressions',
    topicName: 'Basic Algebra',

    progressionStructure: {
      sections: [
        {
          id: "introduction-to-variables",
          title: "Introduction to Variables",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student understands that variables represent unknown values, correctly interprets simple variable expressions, and can explain what a variable represents in context",
          estimatedQuestions: "3-4 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct interpretations without hints",
                "Correctly explains variable meaning in all contexts"
              ],
              qualitative: [
                "Understands variables as placeholders for unknown numbers",
                "Can explain what x, y, or n represents in a given context",
                "Recognizes that variables can represent any value",
                "Correctly interprets expressions like '3x' as 'three times x'",
                "Connects variables to real-world scenarios (age, cost, distance)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about what variable represents",
                "Can interpret with prompting"
              ],
              qualitative: [
                "Understands concept but needs reinforcement",
                "Sometimes confuses variable with a specific number",
                "Can identify variables but struggles to explain their meaning",
                "Needs examples to connect to real-world contexts"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot explain what variable represents",
                "Multiple incorrect interpretations",
                "Treats variables as specific unknown numbers to solve for"
              ],
              qualitative: [
                "Does not understand variables as general representations",
                "Thinks 'x' always equals a specific value",
                "Cannot distinguish between variable and number",
                "Confused about purpose of using letters in mathematics",
                "Cannot connect variable expressions to real situations"
              ]
            }
          },

          learningObjectives: [
            "Understand that variables are letters representing unknown or changing values",
            "Interpret simple algebraic expressions in context",
            "Explain what a variable represents in a real-world situation",
            "Recognize that the same variable can represent different values in different problems",
            "Use variables to represent unknown quantities"
          ],

          relevantFormulas: [
            "Variables: Letters (commonly x, y, z, n, a, b) that represent numbers",
            "Expression: A combination of numbers, variables, and operations (e.g., $3x + 5$)"
          ],

          sampleProblems: [
            "If n represents the number of students, what does n + 5 represent?",
            "A car travels at v km/h for 3 hours. What does 3v represent?",
            "Explain what the variable x represents in the expression x - 7 = 10"
          ],

          availableTools: []
        },

        {
          id: "terms-and-coefficients",
          title: "Terms and Coefficients",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["introduction-to-variables"],
          masterySignals: "Student correctly identifies terms, coefficients, and variables in expressions, distinguishes like terms from unlike terms, and can explain the structure of algebraic expressions",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "4+ correct identifications without hints",
                "Accurately identifies like terms in all cases"
              ],
              qualitative: [
                "Correctly identifies each term in an expression",
                "Recognizes coefficient as the number part of a term",
                "Understands that like terms have same variable and power",
                "Can identify constant terms (no variable)",
                "Explains why 3x and 3y are NOT like terms",
                "Recognizes coefficient of 1 in terms like 'x' or 'y'"
              ]
            },
            developing: {
              quantitative: [
                "2-3 correct with hints about term structure",
                "Needs prompting to identify like terms"
              ],
              qualitative: [
                "Can identify terms with assistance",
                "Sometimes forgets to include sign with term",
                "Struggles with coefficient of 1 (thinks 'x' has no coefficient)",
                "Can identify like terms in simple cases but not complex ones",
                "Confuses variable with coefficient"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot identify terms consistently",
                "Multiple errors in like terms identification",
                "Cannot separate coefficient from variable"
              ],
              qualitative: [
                "Does not understand what a 'term' is",
                "Cannot distinguish coefficient from variable",
                "Thinks all terms with variables are like terms",
                "Cannot identify constant terms",
                "Does not understand role of signs in separating terms",
                "Confuses 3x and x^2 as like terms"
              ]
            }
          },

          learningObjectives: [
            "Identify individual terms in an algebraic expression",
            "Recognize the coefficient of a term",
            "Distinguish between like terms and unlike terms",
            "Identify constant terms in expressions",
            "Understand that like terms must have the same variable AND power",
            "Explain the structure of algebraic expressions using correct terminology"
          ],

          relevantFormulas: [
            "Term: A single number, variable, or product of numbers and variables (e.g., 5x, -3y, 7)",
            "Coefficient: The numerical part of a term (in 5x, the coefficient is 5)",
            "Like Terms: Terms with the same variable(s) and same power (e.g., 3x and 7x are like terms)",
            "Constant: A term with no variable (e.g., 5, -3, 10)"
          ],

          sampleProblems: [
            "In 7a - 4b + 9, identify all terms and their coefficients",
            "Which terms are like terms in 6x + 3y - 2x + 5y + 4?",
            "Explain why 4x² and 4x are NOT like terms"
          ],

          availableTools: ["algebraExpression"]
        },

        {
          id: "writing-algebraic-expressions",
          title: "Writing Algebraic Expressions",
          difficulty: "intermediate",
          prerequisites: ["terms-and-coefficients"],
          masterySignals: "Student correctly translates word phrases to algebraic expressions in 3+ problems, handles order correctly (e.g., '5 less than x' as x-5), and can write expressions from descriptions",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct translations without hints",
                "Consistent accuracy with order-dependent phrases"
              ],
              qualitative: [
                "Correctly translates 'more than', 'less than', 'times', 'divided by'",
                "Handles order carefully: '5 less than x' becomes x-5, not 5-x",
                "Recognizes 'twice a number' as 2n",
                "Identifies 'half of' as division by 2 or multiplication by 1/2",
                "Can write multi-operation expressions from descriptions",
                "Understands implicit multiplication (3x means 3 times x)"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on order",
                "Makes occasional order errors ('5 less than x' as 5-x)"
              ],
              qualitative: [
                "Understands basic translations but struggles with order",
                "Sometimes reverses 'less than' or 'divided by' operations",
                "Can translate with examples but not independently",
                "Forgets that 'product' means multiply",
                "Needs prompting for multi-step expressions"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple translation errors",
                "Consistently reverses order",
                "Cannot translate compound phrases"
              ],
              qualitative: [
                "Does not know word-to-operation mappings",
                "Always writes operations in the order words appear",
                "Thinks '5 less than x' is the same as 'x less than 5'",
                "Cannot translate 'product', 'sum', 'quotient', 'difference'",
                "Adds unnecessary operations or symbols",
                "Cannot handle phrases with multiple operations"
              ]
            }
          },

          learningObjectives: [
            "Translate word phrases to algebraic expressions",
            "Handle order-dependent phrases correctly (less than, divided by)",
            "Recognize keywords: sum (add), difference (subtract), product (multiply), quotient (divide)",
            "Write expressions involving multiple operations",
            "Understand implicit multiplication in algebra",
            "Distinguish between 'x less than 5' and '5 less than x'"
          ],

          relevantFormulas: [
            "Addition: sum, total, more than, increased by → use +",
            "Subtraction: difference, less than, decreased by, minus → use - (watch order!)",
            "Multiplication: product, times, of, twice → use × or write adjacent (3x)",
            "Division: quotient, divided by, per, half → use ÷ or fraction notation",
            "Example: '5 less than x' → $x - 5$ (NOT $5 - x$)"
          ],

          sampleProblems: [
            "Write: The sum of three times a number and 7",
            "Write: 5 less than twice a number",
            "Write: The quotient of x and 4, increased by 3"
          ],

          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Understand variables as representations of unknown values",
      "Identify and use algebraic notation correctly",
      "Recognize and identify like terms in expressions",
      "Translate between word phrases and algebraic expressions"
    ],

    keyFormulas: `
**Core Concepts:**
- Variable: A letter representing an unknown or changing value
- Term: A single element in an expression (e.g., 5x, -3, 2y)
- Coefficient: The number part of a term
- Like Terms: Terms with same variable and power (can be combined)
- Constant: A term with no variable

**Examples:**
In $5x + 3y - 2x + 7$:
- Terms: $5x$, $3y$, $-2x$, $7$
- Coefficients: 5, 3, -2
- Like terms: $5x$ and $-2x$
- Constant: $7$
`
  },

  // ========================================================================
  // SUBTOPIC 2: SIMPLIFYING EXPRESSIONS
  // ========================================================================

  's1-math-basic-algebra-simplifying': {
    displayName: 'Simplifying Algebraic Expressions',
    topicName: 'Basic Algebra',

    progressionStructure: {
      sections: [
        {
          id: "collecting-like-terms-basics",
          title: "Collecting Like Terms - Basics",
          difficulty: "foundational",
          prerequisites: ["terms-and-coefficients"],
          masterySignals: "Student correctly combines like terms in 3+ expressions with single variable, adds/subtracts coefficients accurately, and explains the process",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct simplifications without hints",
                "Consistent accuracy with signs (positive and negative)"
              ],
              qualitative: [
                "Correctly identifies like terms",
                "Adds/subtracts coefficients while keeping variable unchanged",
                "Handles negative coefficients correctly",
                "Understands why 3x + 5x = 8x (not 8x² or 15x)",
                "Can simplify expressions with 3-4 like terms",
                "Maintains correct signs throughout simplification"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on combining",
                "Makes occasional sign errors"
              ],
              qualitative: [
                "Understands concept but makes calculation errors",
                "Sometimes adds incorrectly with negatives (e.g., 5x - 3x = 8x)",
                "Forgets to keep the variable when combining",
                "Can combine positive terms but struggles with negatives",
                "Needs prompting to identify all like terms"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect attempts",
                "Cannot combine like terms without full solution",
                "Consistently errors with signs"
              ],
              qualitative: [
                "Does not understand which terms can be combined",
                "Adds variables together (3x + 5y = 8xy)",
                "Changes the variable when adding (3x + 5x = 8x²)",
                "Cannot handle negative coefficients",
                "Adds coefficients to variables (3 + x = 4x)",
                "Combines unlike terms"
              ]
            }
          },

          learningObjectives: [
            "Identify like terms in an expression",
            "Combine like terms by adding/subtracting coefficients",
            "Maintain the variable unchanged when combining",
            "Handle positive and negative coefficients correctly",
            "Simplify expressions with multiple like terms",
            "Explain why only like terms can be combined"
          ],

          relevantFormulas: [
            "Combining Like Terms: Add/subtract coefficients, keep variable same",
            "Example: $3x + 5x = (3+5)x = 8x$",
            "Example: $7y - 2y = (7-2)y = 5y$",
            "With negatives: $4a - 7a = (4-7)a = -3a$"
          ],

          sampleProblems: [
            "Simplify: 9x + 4x - 5x + 2x",
            "Simplify: 6y - 8y + 3y",
            "Simplify: -3m + 7m - m"
          ],

          availableTools: ["algebraExpression"]
        },

        {
          id: "simplifying-multiple-variables",
          title: "Simplifying with Multiple Variables",
          difficulty: "intermediate",
          prerequisites: ["collecting-like-terms-basics"],
          masterySignals: "Student correctly simplifies expressions with 2-3 different variables in 3+ problems, groups like terms separately, and presents final answer in standard form",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multi-variable simplifications",
                "All like terms grouped correctly"
              ],
              qualitative: [
                "Identifies and groups like terms for each variable separately",
                "Combines like terms for x, y, z independently",
                "Handles constants (numbers without variables) correctly",
                "Presents answer in standard form (e.g., 5x + 3y - 2)",
                "Maintains correct signs throughout",
                "Can simplify expressions with 3+ different variables"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on grouping",
                "Misses some like terms or makes sign errors"
              ],
              qualitative: [
                "Can identify like terms but needs help organizing",
                "Sometimes combines unlike terms",
                "Forgets to simplify all variable groups",
                "Makes errors with constants",
                "Can handle 2 variables but struggles with 3+"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot organize expression by variables",
                "Multiple errors in grouping and combining",
                "Leaves expression unsimplified"
              ],
              qualitative: [
                "Combines different variables (3x + 2y = 5xy)",
                "Cannot separate and group like terms",
                "Loses or duplicates terms during simplification",
                "Does not understand how to organize multi-variable expressions",
                "Cannot identify which terms are constants",
                "Randomly groups terms"
              ]
            }
          },

          learningObjectives: [
            "Identify and group like terms in multi-variable expressions",
            "Simplify each variable group independently",
            "Handle constant terms separately",
            "Present final answer in standard form",
            "Simplify expressions with 3+ different variables",
            "Maintain organization throughout simplification process"
          ],

          relevantFormulas: [
            "Strategy: Group like terms separately for each variable",
            "Example: $5x + 3y + 2x - y + 4$",
            "Group x terms: $5x + 2x = 7x$",
            "Group y terms: $3y - y = 2y$",
            "Constants: $4$",
            "Final: $7x + 2y + 4$"
          ],

          sampleProblems: [
            "Simplify: 5x + 3y + 2x - y + 4",
            "Simplify: 4a + 2b - 3c + 5a - b + 2c",
            "Simplify: 7m - 3n + 2m + 8 - 4n + 9"
          ],

          availableTools: ["algebraExpression"]
        },

        {
          id: "complex-simplification",
          title: "Complex Simplification",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["simplifying-multiple-variables"],
          masterySignals: "Student simplifies expressions with fractional coefficients, multiple negatives, and mixed operations accurately in 3+ problems, showing proper working",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ complex simplifications without errors",
                "Correct handling of fractions and negatives throughout"
              ],
              qualitative: [
                "Handles fractional coefficients (finds common denominators)",
                "Correctly simplifies with multiple negative terms",
                "Maintains accuracy with signs in complex expressions",
                "Can simplify $\\frac{1}{2}x + \\frac{3}{4}x$ correctly",
                "Combines like terms regardless of coefficient complexity",
                "Shows clear working for fraction addition"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on fractions or signs",
                "Makes occasional arithmetic errors with fractions"
              ],
              qualitative: [
                "Understands process but makes calculation errors",
                "Struggles to find common denominators",
                "Can handle simple fractions (halves, thirds) but not complex ones",
                "Makes sign errors with multiple negatives",
                "Needs prompting for proper fraction arithmetic"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot simplify expressions with fractions",
                "Multiple sign and arithmetic errors",
                "Cannot complete complex simplifications"
              ],
              qualitative: [
                "Does not know how to add fractional coefficients",
                "Cannot find common denominators",
                "Makes systematic sign errors",
                "Adds fractions incorrectly (1/2 + 1/3 = 2/5)",
                "Cannot track multiple negative terms",
                "Gives up when seeing fractions or multiple negatives"
              ]
            }
          },

          learningObjectives: [
            "Simplify expressions with fractional coefficients",
            "Handle multiple negative terms correctly",
            "Find common denominators for fractional coefficients",
            "Maintain accuracy with signs in complex expressions",
            "Simplify expressions with mixed operations",
            "Show clear working for complex simplifications"
          ],

          relevantFormulas: [
            "Fractional coefficients: Find common denominator, then add",
            "Example: $\\frac{1}{2}x + \\frac{3}{4}x = \\frac{2}{4}x + \\frac{3}{4}x = \\frac{5}{4}x$",
            "Multiple negatives: Track signs carefully",
            "Example: $5y - 3x - 2y + 8x - 4y = (5-2-4)y + (-3+8)x = -y + 5x$"
          ],

          sampleProblems: [
            "Simplify: $\\frac{2}{3}a + \\frac{1}{2}b - \\frac{1}{3}a + \\frac{1}{4}b$",
            "Simplify: $7y - 3x - 4y + 8x - 2y$",
            "Simplify: $-5m + 3n - 2m + 7 - 4n + 9$"
          ],

          availableTools: ["algebraExpression", "fractionBar"]
        }
      ]
    },

    learningObjectives: [
      "Identify and combine like terms in algebraic expressions",
      "Simplify expressions with single and multiple variables",
      "Handle fractional coefficients and negative terms",
      "Present simplified expressions in standard form"
    ],

    keyFormulas: `
**Collecting Like Terms:**
- Like terms have same variable and power
- Add/subtract coefficients only
- Keep variable unchanged

**Examples:**
- $3x + 5x = 8x$
- $7y - 2y = 5y$
- $5x + 3y - 2x + y = 3x + 4y$
- $\\frac{1}{2}a + \\frac{3}{4}a = \\frac{5}{4}a$
`
  },

  // ========================================================================
  // SUBTOPIC 3: EXPANDING BRACKETS
  // ========================================================================

  's1-math-basic-algebra-expanding': {
    displayName: 'Expanding Brackets',
    topicName: 'Basic Algebra',

    progressionStructure: {
      sections: [
        {
          id: "distributive-law-single-bracket",
          title: "Distributive Law - Single Bracket",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["simplifying-multiple-variables"],
          masterySignals: "Student correctly expands a(b+c) expressions in 3+ problems, multiplies term outside by every term inside, and can explain the distributive law",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct expansions without hints",
                "Multiplies every term inside brackets"
              ],
              qualitative: [
                "Understands distributive law: a(b+c) = ab + ac",
                "Multiplies outside term by EVERY term inside",
                "Handles numeric and variable multipliers",
                "Correctly expands 3(x + 5) as 3x + 15",
                "Can expand x(2x + 7) as 2x² + 7x",
                "Explains why we must multiply each term"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on distribution",
                "Forgets to multiply some terms inside"
              ],
              qualitative: [
                "Understands concept but makes errors",
                "Sometimes only multiplies first term in brackets",
                "Can expand with numbers but struggles with variables",
                "Makes multiplication errors (3 × x = 3x²)",
                "Needs prompting to multiply all terms"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot expand correctly",
                "Only multiplies one term inside brackets",
                "Multiple multiplication errors"
              ],
              qualitative: [
                "Does not understand distributive law",
                "Only multiplies first term inside brackets",
                "Adds instead of multiplies (3(x+5) = 3x + 5)",
                "Cannot handle variable multipliers",
                "Confused about x × x = x² vs x + x = 2x",
                "Does not know when to distribute"
              ]
            }
          },

          learningObjectives: [
            "Understand and apply the distributive law",
            "Multiply outside term by every term inside brackets",
            "Expand expressions with numeric multipliers",
            "Expand expressions with variable multipliers",
            "Recognize when to use distributive law",
            "Explain why a(b+c) = ab + ac"
          ],

          relevantFormulas: [
            "Distributive Law: $a(b + c) = ab + ac$",
            "The term outside multiplies EVERY term inside",
            "Example: $3(x + 5) = 3 \\times x + 3 \\times 5 = 3x + 15$",
            "Example: $x(2x + 7) = x \\times 2x + x \\times 7 = 2x^2 + 7x$"
          ],

          sampleProblems: [
            "Expand: 3(x + 5)",
            "Expand: 5(2y - 3)",
            "Expand: x(2x + 7)"
          ],

          availableTools: ["distributiveVisualizer"]
        },

        {
          id: "expanding-negative-multipliers",
          title: "Expanding with Negative Multipliers",
          difficulty: "intermediate",
          prerequisites: ["distributive-law-single-bracket"],
          masterySignals: "Student correctly expands expressions with negative outside terms in 3+ problems, handles sign changes properly, and explains the sign rules",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct expansions with negatives",
                "All signs handled correctly"
              ],
              qualitative: [
                "Correctly applies sign rules: negative × positive = negative",
                "Correctly applies: negative × negative = positive",
                "Expands -2(x - 5) as -2x + 10 correctly",
                "Understands why -2 × (-5) = +10",
                "Can expand -3(2a + 4b - 1) accurately",
                "Explains sign changes when multiplying by negative"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on signs",
                "Makes occasional sign errors, especially with double negatives"
              ],
              qualitative: [
                "Understands distribution but struggles with signs",
                "Forgets that negative × negative = positive",
                "Can handle one negative term but errors with multiple",
                "Needs prompting for sign rules",
                "Makes errors like -2 × (-5) = -10"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple sign errors",
                "Cannot expand with negative multipliers",
                "Consistently incorrect with double negatives"
              ],
              qualitative: [
                "Does not understand sign rules",
                "Makes all terms negative when multiplier is negative",
                "Cannot handle negative × negative correctly",
                "Randomly assigns signs",
                "Does not understand why signs change",
                "Confused about when to make terms positive vs negative"
              ]
            }
          },

          learningObjectives: [
            "Apply distributive law with negative multipliers",
            "Handle sign changes correctly when multiplying by negative",
            "Understand and apply sign rules (neg × pos = neg, neg × neg = pos)",
            "Expand expressions with multiple terms and negative multiplier",
            "Explain why signs change when multiplying by negative",
            "Check answer by considering sign logic"
          ],

          relevantFormulas: [
            "Sign Rules:",
            "$(+) \\times (+) = (+)$",
            "$(+) \\times (-) = (-)$",
            "$(-) \\times (+) = (-)$",
            "$(-) \\times (-) = (+)$",
            "Example: $-2(x - 5) = -2x + 10$ (because $-2 \\times -5 = +10$)"
          ],

          sampleProblems: [
            "Expand: -2(x - 5)",
            "Expand: -3(2a + 4b - 1)",
            "Expand: -(5m - 3n + 7)"
          ],

          availableTools: ["distributiveVisualizer"]
        },

        {
          id: "expanding-double-brackets",
          title: "Expanding Double Brackets",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["expanding-negative-multipliers"],
          masterySignals: "Student correctly expands (a+b)(c+d) in 3+ problems using FOIL or grid method, combines like terms in result, and can check answer",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct double bracket expansions",
                "All four terms generated and combined correctly"
              ],
              qualitative: [
                "Uses FOIL method correctly (First, Outer, Inner, Last)",
                "Multiplies every term in first bracket by every term in second",
                "Correctly expands (x + 3)(x + 5) as x² + 8x + 15",
                "Combines like terms after expanding",
                "Handles signs correctly in expressions like (x - 2)(x + 7)",
                "Can verify answer by checking number of terms and degree"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on FOIL",
                "Forgets some terms or makes sign errors"
              ],
              qualitative: [
                "Understands FOIL but misses terms occasionally",
                "Forgets Inner or Outer multiplication",
                "Makes errors combining like terms",
                "Can expand with all positive but struggles with negatives",
                "Needs prompting to identify like terms in result"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot generate all four terms",
                "Multiple errors in expansion and combination",
                "Cannot expand double brackets independently"
              ],
              qualitative: [
                "Does not understand FOIL or grid method",
                "Only multiplies First terms or First and Last",
                "Cannot handle (x + a)(x + b) pattern",
                "Makes errors like (x + 3)(x + 5) = x² + 15",
                "Does not combine like terms after expanding",
                "Randomly multiplies some terms",
                "Cannot work with signs in double brackets"
              ]
            }
          },

          learningObjectives: [
            "Expand double brackets using FOIL method",
            "Multiply every term in first bracket by every term in second bracket",
            "Generate all four terms from (a+b)(c+d)",
            "Combine like terms in the expanded result",
            "Handle signs correctly in double bracket expansion",
            "Verify result has correct number of terms and highest degree"
          ],

          relevantFormulas: [
            "FOIL Method for $(a + b)(c + d)$:",
            "**F**irst: $a \\times c$",
            "**O**uter: $a \\times d$",
            "**I**nner: $b \\times c$",
            "**L**ast: $b \\times d$",
            "Result: $(a + b)(c + d) = ac + ad + bc + bd$",
            "Example: $(x + 3)(x + 5) = x^2 + 5x + 3x + 15 = x^2 + 8x + 15$"
          ],

          sampleProblems: [
            "Expand: (x + 3)(x + 5)",
            "Expand: (x - 2)(x + 7)",
            "Expand and simplify: (2a + 1)(3a - 4)"
          ],

          availableTools: []
        },

        {
          id: "expanding-and-simplifying",
          title: "Expanding and Simplifying",
          difficulty: "advanced",
          prerequisites: ["expanding-double-brackets"],
          masterySignals: "Student expands multiple brackets and simplifies in 3+ problems, combines all like terms correctly, and presents final answer in simplest form",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multi-bracket expansions with full simplification",
                "All terms expanded and combined accurately"
              ],
              qualitative: [
                "Expands each bracket separately",
                "Combines all like terms across multiple expansions",
                "Correctly simplifies 2(x + 3) + 3(x - 1) as 5x + 3",
                "Handles negative multipliers in multi-bracket expressions",
                "Presents final answer in standard simplified form",
                "Shows organized working throughout"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on organization",
                "Makes errors in combining across multiple brackets"
              ],
              qualitative: [
                "Can expand each bracket but struggles to combine all",
                "Makes sign errors when multiple negatives present",
                "Loses track of terms in complex expressions",
                "Forgets to simplify after expanding",
                "Needs help organizing multi-step problems"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot handle multiple brackets",
                "Multiple errors in expansion and simplification",
                "Cannot organize complex expressions"
              ],
              qualitative: [
                "Confused by multiple brackets in one problem",
                "Cannot expand more than one bracket correctly",
                "Does not know how to combine terms across brackets",
                "Makes systematic sign errors",
                "Cannot identify all like terms",
                "Leaves answer unsimplified or partially simplified",
                "Working is disorganized and error-prone"
              ]
            }
          },

          learningObjectives: [
            "Expand multiple brackets in one expression",
            "Combine like terms across multiple expansions",
            "Handle expressions with both expansion and simplification",
            "Manage signs correctly in complex multi-bracket expressions",
            "Present final answer in fully simplified standard form",
            "Show clear, organized working for complex problems"
          ],

          relevantFormulas: [
            "Strategy: Expand each bracket separately, then combine like terms",
            "Example: $2(x + 3) + 3(x - 1)$",
            "Step 1: Expand first bracket: $2x + 6$",
            "Step 2: Expand second bracket: $3x - 3$",
            "Step 3: Combine: $2x + 6 + 3x - 3 = 5x + 3$"
          ],

          sampleProblems: [
            "Expand and simplify: 2(x + 3) + 3(x - 1)",
            "Expand and simplify: 4(2a - 1) - 3(a + 2)",
            "Expand and simplify: 5(y + 2) - 2(3y - 4) + 7"
          ],

          availableTools: ["distributiveVisualizer"]
        }
      ]
    },

    learningObjectives: [
      "Apply the distributive law to expand single brackets",
      "Handle negative multipliers correctly",
      "Expand double brackets using FOIL method",
      "Combine and simplify after expansion"
    ],

    keyFormulas: `
**Distributive Law:**
- $a(b + c) = ab + ac$
- Multiply outside term by EVERY term inside

**FOIL for Double Brackets:**
- $(a + b)(c + d) = ac + ad + bc + bd$
- First, Outer, Inner, Last

**Sign Rules:**
- $(+) \\times (-) = (-)$
- $(-) \\times (-) = (+)$

**Examples:**
- $3(x + 5) = 3x + 15$
- $-2(x - 5) = -2x + 10$
- $(x + 3)(x + 5) = x^2 + 8x + 15$
`
  },

  // ========================================================================
  // SUBTOPIC 4: FACTORIZATION
  // ========================================================================

  's1-math-basic-algebra-factorization': {
    displayName: 'Factorization',
    topicName: 'Basic Algebra',

    progressionStructure: {
      sections: [
        {
          id: "common-factor-extraction",
          title: "Common Factor Extraction",
          difficulty: "intermediate",
          prerequisites: ["distributive-law-single-bracket"],
          masterySignals: "Student correctly factors expressions by extracting highest common factor in 3+ problems, checks answer by expanding, and understands factorization as reverse of expansion",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct factorizations with HCF identified",
                "All factors fully extracted"
              ],
              qualitative: [
                "Identifies highest common factor (HCF) of all terms",
                "Extracts both numeric and variable common factors",
                "Correctly factors 6x + 9 as 3(2x + 3)",
                "Factors 4x² + 6x as 2x(2x + 3)",
                "Checks answer by expanding factored form",
                "Understands factorization undoes expansion"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on finding HCF",
                "Partially factors (finds common factor but not highest)"
              ],
              qualitative: [
                "Can identify common factors but misses highest one",
                "Factors out number but forgets variable part",
                "Makes errors dividing terms by common factor",
                "Can factor simple expressions but struggles with variables",
                "Needs prompting to check by expanding"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot identify common factors",
                "Multiple errors in factorization",
                "Cannot divide terms by common factor"
              ],
              qualitative: [
                "Does not understand what factorization means",
                "Cannot find common factors",
                "Confuses factorization with expansion",
                "Factors out incorrect value",
                "Cannot divide algebraic terms",
                "Does not understand HCF concept",
                "Cannot verify answer"
              ]
            }
          },

          learningObjectives: [
            "Understand factorization as the reverse of expansion",
            "Identify the highest common factor of all terms",
            "Extract common numeric and variable factors",
            "Divide each term by the HCF to find bracket contents",
            "Check factorization by expanding",
            "Recognize fully factored form"
          ],

          relevantFormulas: [
            "Factorization: Reverse of expansion",
            "Find HCF of all terms, write outside brackets",
            "Divide each term by HCF for bracket contents",
            "Example: $6x + 9 = 3(2x + 3)$ (HCF is 3)",
            "Example: $4x^2 + 6x = 2x(2x + 3)$ (HCF is 2x)",
            "Check: Expand to get original expression"
          ],

          sampleProblems: [
            "Factorize: 6x + 9",
            "Factorize: 15a² - 10a",
            "Factorize: 8xy + 12x"
          ],

          availableTools: ["distributiveVisualizer"]
        },

        {
          id: "factoring-by-grouping",
          title: "Factoring by Grouping",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["common-factor-extraction"],
          masterySignals: "Student factors four-term expressions by grouping in 2+ problems, identifies common binomial factor, and completes factorization",
          estimatedQuestions: "3-4 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct grouping factorizations",
                "Common binomial identified and factored out"
              ],
              qualitative: [
                "Groups terms in pairs strategically",
                "Factors out common factor from each pair",
                "Identifies common binomial factor",
                "Factors ax + ay + bx + by as (x + y)(a + b)",
                "Understands the grouping strategy",
                "Can rearrange terms if needed for better grouping"
              ]
            },
            developing: {
              quantitative: [
                "1 correct with hints on pairing",
                "Groups correctly but struggles to identify common binomial"
              ],
              qualitative: [
                "Can group terms but needs help factoring pairs",
                "Factors pairs but doesn't see common binomial",
                "Needs prompting for which terms to group",
                "Struggles with rearranging for optimal grouping",
                "Can complete with guidance"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot group terms correctly",
                "Does not identify common binomial",
                "Cannot complete factorization by grouping"
              ],
              qualitative: [
                "Does not understand grouping concept",
                "Cannot see which terms to group together",
                "Does not factor out common factor from pairs",
                "Cannot identify binomial factors",
                "Confused about the entire process",
                "Cannot apply grouping method"
              ]
            }
          },

          learningObjectives: [
            "Group four-term expressions into pairs",
            "Factor out common factor from each pair",
            "Identify common binomial factor",
            "Factor out the common binomial",
            "Verify factorization by expanding",
            "Understand when to use grouping method"
          ],

          relevantFormulas: [
            "Grouping Method for $ax + ay + bx + by$:",
            "Step 1: Group in pairs: $(ax + ay) + (bx + by)$",
            "Step 2: Factor each pair: $a(x + y) + b(x + y)$",
            "Step 3: Factor common binomial: $(x + y)(a + b)$",
            "Example: $3x + 6 + xy + 2y = 3(x + 2) + y(x + 2) = (x + 2)(3 + y)$"
          ],

          sampleProblems: [
            "Factorize: ax + ay + bx + by",
            "Factorize: 3x + 6 + xy + 2y",
            "Factorize: 2a + 4 + ab + 2b"
          ],

          availableTools: []
        },

        {
          id: "difference-of-squares",
          title: "Difference of Squares",
          difficulty: "advanced",
          prerequisites: ["expanding-double-brackets"],
          masterySignals: "Student recognizes difference of squares pattern in 3+ problems, applies formula a² - b² = (a+b)(a-b), and can verify by expansion",
          estimatedQuestions: "3-4 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct difference of squares factorizations",
                "Pattern recognized in all applicable cases"
              ],
              qualitative: [
                "Recognizes a² - b² pattern (two terms, subtraction, both squares)",
                "Applies formula a² - b² = (a + b)(a - b)",
                "Factors x² - 9 as (x + 3)(x - 3)",
                "Factors 4x² - 25 as (2x + 5)(2x - 5)",
                "Can identify square roots of each term",
                "Verifies answer by expanding using FOIL"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on pattern recognition",
                "Can apply formula with prompting"
              ],
              qualitative: [
                "Knows the formula but struggles to recognize pattern",
                "Can factor simple cases (x² - 9) but not complex ones",
                "Makes errors identifying square roots",
                "Confuses with sum of squares (cannot factor a² + b²)",
                "Needs help verifying answer"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot recognize difference of squares pattern",
                "Does not know the formula",
                "Cannot factor any difference of squares"
              ],
              qualitative: [
                "Does not recognize when expression is difference of squares",
                "Does not know a² - b² formula",
                "Cannot identify perfect squares",
                "Cannot find square roots of terms",
                "Tries to factor expressions that cannot be factored",
                "Confused about when pattern applies"
              ]
            }
          },

          learningObjectives: [
            "Recognize difference of squares pattern (a² - b²)",
            "Identify perfect squares in expressions",
            "Apply the formula a² - b² = (a + b)(a - b)",
            "Find square roots of terms",
            "Factor expressions like x² - 9 and 4a² - 25",
            "Verify factorization by expanding"
          ],

          relevantFormulas: [
            "Difference of Squares Formula:",
            "$a^2 - b^2 = (a + b)(a - b)$",
            "Recognition: Two terms, subtraction, both perfect squares",
            "Example: $x^2 - 9 = (x + 3)(x - 3)$ where $a = x$, $b = 3$",
            "Example: $4x^2 - 25 = (2x + 5)(2x - 5)$ where $a = 2x$, $b = 5$",
            "Check: $(a + b)(a - b) = a^2 - ab + ab - b^2 = a^2 - b^2$ ✓"
          ],

          sampleProblems: [
            "Factorize: x² - 9",
            "Factorize: 4x² - 25",
            "Factorize: 9a² - 16b²"
          ],

          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Extract common factors from algebraic expressions",
      "Factor expressions by grouping",
      "Recognize and factor difference of squares",
      "Verify factorization by expanding"
    ],

    keyFormulas: `
**Common Factor:**
- Find HCF, write outside brackets
- Example: $6x + 9 = 3(2x + 3)$

**Grouping:**
- $ax + ay + bx + by = (x + y)(a + b)$

**Difference of Squares:**
- $a^2 - b^2 = (a + b)(a - b)$
- Example: $x^2 - 9 = (x + 3)(x - 3)$
`
  },

  // ========================================================================
  // SUBTOPIC 5: LINEAR EQUATIONS
  // ========================================================================

  's1-math-basic-algebra-equations': {
    displayName: 'Solving Linear Equations',
    topicName: 'Basic Algebra',

    progressionStructure: {
      sections: [
        {
          id: "one-step-equations",
          title: "One-Step Equations",
          difficulty: "foundational",
          prerequisites: ["simplifying-multiple-variables"],
          masterySignals: "Student solves one-step equations (x + a = b, ax = b) in 3+ problems using inverse operations, checks answers, and explains the balance concept",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions without hints",
                "Consistently applies correct inverse operation"
              ],
              qualitative: [
                "Understands equation balance concept (scale analogy)",
                "Applies inverse operations correctly (add ↔ subtract, multiply ↔ divide)",
                "Solves x + 5 = 12 by subtracting 5 from both sides",
                "Solves 3x = 15 by dividing both sides by 3",
                "Checks answer by substituting back",
                "Explains why same operation must be done to both sides"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on which operation to use",
                "Forgets to apply operation to both sides occasionally"
              ],
              qualitative: [
                "Knows inverse operations but needs prompting",
                "Sometimes forgets to do operation to both sides",
                "Can solve with examples but not independently",
                "Makes arithmetic errors when applying operations",
                "Needs help identifying which inverse operation to use"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot identify correct inverse operation",
                "Multiple errors in solving",
                "Does not apply operation to both sides"
              ],
              qualitative: [
                "Does not understand inverse operations",
                "Only does operation to one side",
                "Does not understand equation balance",
                "Adds when should subtract, or vice versa",
                "Cannot verify answer",
                "Confused about what 'solving' means",
                "Does not understand what the variable represents"
              ]
            }
          },

          learningObjectives: [
            "Understand equations as balanced statements",
            "Apply inverse operations to isolate the variable",
            "Solve addition/subtraction equations (x + a = b)",
            "Solve multiplication/division equations (ax = b)",
            "Maintain equation balance (do same to both sides)",
            "Check solutions by substitution"
          ],

          relevantFormulas: [
            "Inverse Operations:",
            "Addition ↔ Subtraction",
            "Multiplication ↔ Division",
            "Balance Principle: Do same to both sides",
            "Examples:",
            "$x + 5 = 12 \\Rightarrow x = 12 - 5 = 7$",
            "$3x = 15 \\Rightarrow x = 15 \\div 3 = 5$"
          ],

          sampleProblems: [
            "Solve: x + 7 = 15",
            "Solve: 4y = 20",
            "Solve: m - 8 = 12"
          ],

          availableTools: ["balanceScale"]
        },

        {
          id: "two-step-equations",
          title: "Two-Step Equations",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["one-step-equations"],
          masterySignals: "Student solves two-step equations (ax + b = c) in 3+ problems, applies inverse operations in correct order, and shows clear working",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct two-step solutions",
                "Operations applied in correct order consistently"
              ],
              qualitative: [
                "Understands to remove constant term first, then coefficient",
                "Correctly solves 3x + 7 = 19 (subtract 7, then divide by 3)",
                "Shows clear step-by-step working",
                "Handles negative coefficients and constants",
                "Checks answer by substituting back",
                "Explains the two-step process"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on operation order",
                "Sometimes reverses order of operations"
              ],
              qualitative: [
                "Can solve but needs prompting on order",
                "Sometimes tries to divide before removing constant",
                "Makes arithmetic errors in multi-step process",
                "Can follow examples but struggles independently",
                "Forgets to check answer"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot complete two-step solution",
                "Multiple errors in operation order and execution",
                "Cannot organize solving steps"
              ],
              qualitative: [
                "Does not understand order of operations to undo",
                "Randomly applies operations",
                "Cannot handle two steps in sequence",
                "Loses track of equation structure",
                "Cannot identify what needs to be undone first",
                "Makes systematic arithmetic errors",
                "Cannot verify solution"
              ]
            }
          },

          learningObjectives: [
            "Solve two-step equations of form ax + b = c",
            "Apply inverse operations in correct order",
            "Remove constant term first, then coefficient",
            "Show clear step-by-step working",
            "Handle negative coefficients and constants",
            "Verify solutions by substitution"
          ],

          relevantFormulas: [
            "Two-Step Equation Solving:",
            "For $ax + b = c$:",
            "Step 1: Remove constant ($b$) → subtract/add from both sides",
            "Step 2: Remove coefficient ($a$) → divide/multiply both sides",
            "Example: $3x + 7 = 19$",
            "$3x = 12$ (subtract 7)",
            "$x = 4$ (divide by 3)"
          ],

          sampleProblems: [
            "Solve: 3x + 7 = 19",
            "Solve: 5y - 3 = 17",
            "Solve: 2m + 9 = 5"
          ],

          availableTools: ["balanceScale"]
        },

        {
          id: "equations-with-brackets",
          title: "Equations with Brackets",
          difficulty: "intermediate",
          prerequisites: ["two-step-equations", "distributive-law-single-bracket"],
          masterySignals: "Student solves equations with brackets in 3+ problems by expanding first, then solving, and can handle multi-step bracket equations",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions with brackets",
                "Expands correctly before solving"
              ],
              qualitative: [
                "Expands brackets using distributive law first",
                "Simplifies after expansion by collecting like terms",
                "Solves resulting equation correctly",
                "Correctly solves 2(x + 3) = 14 as x = 4",
                "Handles multiple brackets like 3(y - 2) + 5 = 17",
                "Shows organized working: expand, simplify, solve"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on expansion",
                "Makes errors in expansion or subsequent solving"
              ],
              qualitative: [
                "Can expand but makes sign errors",
                "Forgets to simplify after expanding",
                "Can handle one bracket but struggles with multiple",
                "Makes arithmetic errors in multi-step process",
                "Needs prompting to expand first"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot expand brackets correctly",
                "Multiple errors in solving bracket equations",
                "Cannot organize multi-step solution"
              ],
              qualitative: [
                "Does not know to expand brackets first",
                "Cannot apply distributive law in equations",
                "Makes systematic expansion errors",
                "Cannot simplify after expansion",
                "Tries to solve without expanding",
                "Loses track of equation through multiple steps",
                "Cannot verify solution"
              ]
            }
          },

          learningObjectives: [
            "Expand brackets in equations using distributive law",
            "Simplify after expansion before solving",
            "Solve equations with single brackets",
            "Solve equations with multiple brackets",
            "Organize working clearly: expand → simplify → solve",
            "Verify solutions with original equation"
          ],

          relevantFormulas: [
            "Strategy for Bracket Equations:",
            "Step 1: Expand all brackets",
            "Step 2: Simplify (collect like terms)",
            "Step 3: Solve resulting equation",
            "Example: $2(x + 3) = 14$",
            "Expand: $2x + 6 = 14$",
            "Subtract 6: $2x = 8$",
            "Divide by 2: $x = 4$"
          ],

          sampleProblems: [
            "Solve: 2(x + 3) = 14",
            "Solve: 3(y - 2) + 5 = 17",
            "Solve: 5(2a - 1) = 25"
          ],

          availableTools: ["distributiveVisualizer", "balanceScale"]
        },

        {
          id: "variables-on-both-sides",
          title: "Variables on Both Sides",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["equations-with-brackets"],
          masterySignals: "Student solves equations with variables on both sides in 3+ problems, collects variables on one side correctly, and handles complex multi-step equations",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions with variables on both sides",
                "Variables collected correctly, constants isolated"
              ],
              qualitative: [
                "Moves all variable terms to one side (usually left)",
                "Moves all constants to other side",
                "Correctly solves 5x - 3 = 2x + 9 as x = 4",
                "Handles negative coefficients when collecting",
                "Can solve complex equations like 3(x + 2) = 2(x - 1) + 10",
                "Shows organized working throughout",
                "Verifies solution in original equation"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on collecting terms",
                "Makes sign errors when moving terms"
              ],
              qualitative: [
                "Understands concept but makes execution errors",
                "Sometimes forgets to apply operation to both sides when collecting",
                "Makes sign errors (forgets to change sign when moving term)",
                "Can handle simple cases but struggles with negatives",
                "Needs prompting to organize steps"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot collect variables on one side",
                "Multiple errors in solving",
                "Cannot organize multi-step solution"
              ],
              qualitative: [
                "Does not understand how to move variables to one side",
                "Makes systematic sign errors when collecting",
                "Cannot handle variables on both sides",
                "Confused about which terms are variables vs constants",
                "Cannot solve after collecting terms",
                "Working is disorganized",
                "Cannot verify or check solution"
              ]
            }
          },

          learningObjectives: [
            "Solve equations with variables on both sides",
            "Collect all variable terms on one side",
            "Collect all constant terms on other side",
            "Handle sign changes when moving terms",
            "Solve complex multi-step equations",
            "Organize working clearly through multiple steps",
            "Verify solutions with both sides of original equation"
          ],

          relevantFormulas: [
            "Strategy for Variables on Both Sides:",
            "Step 1: Expand brackets if present",
            "Step 2: Collect variable terms on one side",
            "Step 3: Collect constants on other side",
            "Step 4: Solve resulting equation",
            "Example: $5x - 3 = 2x + 9$",
            "Subtract $2x$: $3x - 3 = 9$",
            "Add 3: $3x = 12$",
            "Divide by 3: $x = 4$"
          ],

          sampleProblems: [
            "Solve: 5x - 3 = 2x + 9",
            "Solve: 7a + 5 = 3a - 7",
            "Solve: 3(x + 2) = 2(x - 1) + 10"
          ],

          availableTools: ["balanceScale"]
        }
      ]
    },

    learningObjectives: [
      "Solve one-step and two-step linear equations",
      "Apply inverse operations to isolate variables",
      "Solve equations with brackets",
      "Solve equations with variables on both sides",
      "Verify solutions by substitution"
    ],

    keyFormulas: `
**Inverse Operations:**
- Addition ↔ Subtraction
- Multiplication ↔ Division

**Equation Solving Strategy:**
1. Expand brackets
2. Simplify both sides
3. Collect variable terms on one side
4. Collect constants on other side
5. Solve by inverse operations
6. Check answer

**Examples:**
- $x + 5 = 12 \\Rightarrow x = 7$
- $3x + 7 = 19 \\Rightarrow x = 4$
- $5x - 3 = 2x + 9 \\Rightarrow x = 4$
`
  },

  // ========================================================================
  // SUBTOPIC 6: CHANGING THE SUBJECT
  // ========================================================================

  's1-math-basic-algebra-changing-subject': {
    displayName: 'Changing the Subject of a Formula',
    topicName: 'Basic Algebra',

    progressionStructure: {
      sections: [
        {
          id: "simple-rearrangement",
          title: "Simple Formula Rearrangement",
          difficulty: "intermediate",
          prerequisites: ["two-step-equations"],
          masterySignals: "Student rearranges simple formulas to make different variables the subject in 3+ problems, applies inverse operations correctly, and can verify rearrangement",
          estimatedQuestions: "3-4 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct rearrangements",
                "Variable isolated correctly in all cases"
              ],
              qualitative: [
                "Understands subject of formula is isolated variable",
                "Applies same inverse operation techniques as equation solving",
                "Rearranges A = lw to l = A/w correctly",
                "Rearranges P = a + b to b = P - a correctly",
                "Maintains equation balance throughout",
                "Can verify by substituting values"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on operations",
                "Makes occasional errors in rearrangement"
              ],
              qualitative: [
                "Can rearrange with guidance",
                "Sometimes applies wrong inverse operation",
                "Struggles with division/multiplication rearrangements",
                "Can handle addition/subtraction but not multiply/divide",
                "Needs prompting to verify rearrangement"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot rearrange formulas",
                "Multiple errors in applying operations",
                "Cannot isolate target variable"
              ],
              qualitative: [
                "Does not understand what 'subject' means",
                "Cannot apply inverse operations to formulas",
                "Confuses rearranging with solving for specific value",
                "Makes systematic operation errors",
                "Cannot identify what needs to be undone",
                "Does not maintain equation balance"
              ]
            }
          },

          learningObjectives: [
            "Understand the subject of a formula is the isolated variable",
            "Rearrange simple formulas using inverse operations",
            "Make different variables the subject",
            "Handle addition, subtraction, multiplication, division rearrangements",
            "Maintain equation balance throughout",
            "Verify rearrangements by substitution"
          ],

          relevantFormulas: [
            "Subject of Formula: The variable by itself on one side",
            "Use inverse operations same as equation solving",
            "Examples:",
            "$A = lw \\Rightarrow l = \\frac{A}{w}$ (divide both by $w$)",
            "$P = a + b \\Rightarrow b = P - a$ (subtract $a$ from both)",
            "$C = 2\\pi r \\Rightarrow r = \\frac{C}{2\\pi}$ (divide both by $2\\pi$)"
          ],

          sampleProblems: [
            "Rearrange A = lw to make l the subject",
            "Rearrange P = 2(l + w) to make w the subject",
            "Rearrange C = 2πr to make r the subject"
          ],

          availableTools: ["balanceScale"]
        },

        {
          id: "rearranging-multiple-operations",
          title: "Rearranging with Multiple Operations",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["simple-rearrangement"],
          masterySignals: "Student rearranges formulas with multiple operations in 3+ problems, applies operations in correct order, and handles complex formulas like v = u + at",
          estimatedQuestions: "3-4 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multi-operation rearrangements",
                "Target variable isolated with all operations handled correctly"
              ],
              qualitative: [
                "Applies inverse operations in reverse order (undoes last operation first)",
                "Correctly rearranges v = u + at to t = (v - u)/a",
                "Handles formulas with 2-3 operations",
                "Rearranges y = mx + c to x = (y - c)/m",
                "Shows clear step-by-step working",
                "Can verify rearrangement by substitution"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on operation order",
                "Makes errors in multi-step rearrangement"
              ],
              qualitative: [
                "Can rearrange but needs prompting on order",
                "Sometimes confuses which operation to undo first",
                "Makes arithmetic errors in complex rearrangements",
                "Can handle 2 operations but struggles with 3+",
                "Needs help organizing steps"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot handle multiple operations",
                "Multiple errors in rearrangement",
                "Cannot isolate variable in complex formulas"
              ],
              qualitative: [
                "Does not understand operation order for rearranging",
                "Cannot undo multiple operations in sequence",
                "Randomly applies operations",
                "Cannot organize multi-step rearrangement",
                "Makes systematic errors",
                "Cannot verify rearrangement"
              ]
            }
          },

          learningObjectives: [
            "Rearrange formulas with multiple operations",
            "Apply inverse operations in reverse order",
            "Handle addition, subtraction, multiplication, division in sequence",
            "Rearrange formulas like v = u + at and y = mx + c",
            "Show clear organized working",
            "Verify complex rearrangements"
          ],

          relevantFormulas: [
            "Multi-Operation Rearrangement:",
            "Undo operations in reverse order",
            "Example: $v = u + at$ to make $t$ subject:",
            "Step 1: Subtract $u$: $v - u = at$",
            "Step 2: Divide by $a$: $t = \\frac{v - u}{a}$",
            "Example: $y = mx + c$ to make $x$ subject:",
            "Step 1: Subtract $c$: $y - c = mx$",
            "Step 2: Divide by $m$: $x = \\frac{y - c}{m}$"
          ],

          sampleProblems: [
            "Rearrange v = u + at to make t the subject",
            "Rearrange y = mx + c to make x the subject",
            "Rearrange F = ma to make a the subject"
          ],

          availableTools: []
        },

        {
          id: "complex-rearrangement",
          title: "Complex Formula Rearrangement",
          difficulty: "advanced",
          prerequisites: ["rearranging-multiple-operations"],
          masterySignals: "Student rearranges complex formulas with brackets and fractions in 2-3 problems, handles formulas like A = ½(a+b)h, and shows systematic approach",
          estimatedQuestions: "3-4 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 correct complex rearrangements",
                "Handles brackets and fractions correctly"
              ],
              qualitative: [
                "Clears fractions by multiplying through",
                "Handles brackets strategically (expand or work with entire bracket)",
                "Rearranges A = ½(a + b)h to a = 2A/h - b correctly",
                "Shows systematic organized approach",
                "Can handle 3-4 steps in rearrangement",
                "Verifies complex rearrangements"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on strategy",
                "Makes errors in complex manipulations"
              ],
              qualitative: [
                "Can start rearrangement but gets stuck partway",
                "Struggles with fractions in formulas",
                "Makes errors with brackets",
                "Can complete with guidance",
                "Needs help organizing multi-step process"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot rearrange complex formulas",
                "Multiple errors throughout",
                "Cannot organize approach"
              ],
              qualitative: [
                "Overwhelmed by complex formulas",
                "Cannot handle fractions in rearrangement",
                "Cannot deal with brackets",
                "Makes systematic errors",
                "Cannot organize approach to problem",
                "Gives up on complex formulas"
              ]
            }
          },

          learningObjectives: [
            "Rearrange formulas with brackets and fractions",
            "Clear fractions by multiplying through",
            "Handle brackets strategically",
            "Rearrange complex formulas like A = ½(a+b)h",
            "Show systematic organized approach",
            "Verify complex rearrangements"
          ],

          relevantFormulas: [
            "Complex Rearrangement Strategy:",
            "1. Clear fractions (multiply through)",
            "2. Handle brackets (expand or isolate)",
            "3. Collect terms with target variable",
            "4. Isolate target variable",
            "Example: $A = \\frac{1}{2}(a + b)h$ to make $a$ subject:",
            "Multiply by 2: $2A = (a + b)h$",
            "Divide by $h$: $\\frac{2A}{h} = a + b$",
            "Subtract $b$: $a = \\frac{2A}{h} - b$"
          ],

          sampleProblems: [
            "Rearrange A = ½(a + b)h to make a the subject",
            "Rearrange s = d/t to make t the subject",
            "Rearrange P = 2(l + w) to make w the subject"
          ],

          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Understand the subject of a formula",
      "Rearrange simple and complex formulas",
      "Apply inverse operations to isolate variables",
      "Handle formulas with brackets and fractions",
      "Verify rearrangements"
    ],

    keyFormulas: `
**Changing Subject:**
- Subject = isolated variable (by itself on one side)
- Use same inverse operations as equation solving
- Undo operations in reverse order

**Examples:**
- $A = lw \\Rightarrow l = \\frac{A}{w}$
- $v = u + at \\Rightarrow t = \\frac{v - u}{a}$
- $A = \\frac{1}{2}(a + b)h \\Rightarrow a = \\frac{2A}{h} - b$
`
  },

  // ========================================================================
  // SUBTOPIC 7: WORD PROBLEMS & APPLICATIONS
  // ========================================================================

  's1-math-basic-algebra-word-problems': {
    displayName: 'Word Problems & Applications',
    topicName: 'Basic Algebra',

    progressionStructure: {
      sections: [
        {
          id: "basic-translation-to-equations",
          title: "Translating Word Problems to Equations",
          difficulty: "intermediate",
          prerequisites: ["writing-algebraic-expressions", "two-step-equations"],
          masterySignals: "Student translates simple word problems to equations in 3+ problems, solves correctly, and answers with proper units in complete sentences",
          estimatedQuestions: "3-4 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct translations and solutions",
                "Equations set up correctly from word descriptions"
              ],
              qualitative: [
                "Defines variable clearly (let x = ...)",
                "Translates word description to algebraic equation",
                "Solves equation correctly",
                "Answers in complete sentence with units",
                "Verifies answer makes sense in context",
                "Can handle number problems, consecutive numbers, simple age problems"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on equation setup",
                "Can solve but needs help translating words to algebra"
              ],
              qualitative: [
                "Can translate with prompting",
                "Sometimes defines variable incorrectly",
                "Solves equation but forgets to answer question asked",
                "Makes errors in translation (e.g., order of operations)",
                "Can handle simple cases but struggles with complex descriptions"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot translate to equations",
                "Multiple errors in setup and solving",
                "Cannot answer word problems"
              ],
              qualitative: [
                "Does not know how to start word problems",
                "Cannot define variable appropriately",
                "Cannot translate words to algebraic expressions",
                "Makes random guesses instead of setting up equations",
                "Cannot verify if answer makes sense",
                "Does not answer with units or complete sentences"
              ]
            }
          },

          learningObjectives: [
            "Read and understand word problems carefully",
            "Define variables clearly",
            "Translate word descriptions to algebraic equations",
            "Solve the resulting equations",
            "Check if answers make sense in context",
            "Write answers in complete sentences with units"
          ],

          relevantFormulas: [
            "Problem-Solving Process:",
            "1. Read carefully - what is unknown?",
            "2. Define variable: Let $x$ = unknown",
            "3. Translate to equation",
            "4. Solve equation",
            "5. Check answer makes sense",
            "6. Answer in complete sentence",
            "Example: 'A number increased by 7 is 23'",
            "Let $x$ = the number",
            "$x + 7 = 23$",
            "$x = 16$",
            "Answer: The number is 16."
          ],

          sampleProblems: [
            "A number increased by 7 is 23. Find the number.",
            "The sum of two consecutive numbers is 45. Find the numbers.",
            "Sarah is 3 years older than Tom. Their combined age is 27. How old is each person?"
          ],

          availableTools: []
        },

        {
          id: "multi-step-word-problems",
          title: "Multi-Step Word Problems",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["basic-translation-to-equations"],
          masterySignals: "Student solves multi-step word problems (age, geometric, number relationships) in 2-3 problems, sets up complex equations, and shows organized problem-solving",
          estimatedQuestions: "3-4 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 correct multi-step problem solutions",
                "Complex equations set up and solved correctly"
              ],
              qualitative: [
                "Handles problems with multiple unknowns",
                "Expresses all unknowns in terms of one variable",
                "Solves age problems (current age, past/future age)",
                "Solves geometric problems (perimeter, area with constraints)",
                "Shows organized clear working throughout",
                "Checks answer against all conditions in problem"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on setup",
                "Can solve if equation provided but struggles with setup"
              ],
              qualitative: [
                "Can translate with guidance",
                "Struggles to express multiple unknowns using one variable",
                "Makes errors in complex equation setup",
                "Can solve simpler multi-step but not complex ones",
                "Forgets to check all conditions"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot handle multi-step problems",
                "Cannot set up equations for complex scenarios",
                "Multiple errors throughout"
              ],
              qualitative: [
                "Overwhelmed by multi-step problems",
                "Cannot identify what to use as variable",
                "Cannot express relationships algebraically",
                "Cannot organize approach to problem",
                "Gives up on complex word problems",
                "Cannot verify answer against conditions"
              ]
            }
          },

          learningObjectives: [
            "Solve multi-step word problems",
            "Express multiple unknowns using one variable",
            "Handle age problems and geometric problems",
            "Set up and solve complex equations from descriptions",
            "Show organized problem-solving approach",
            "Verify answers against all problem conditions"
          ],

          relevantFormulas: [
            "Age Problems: Define one person's age as $x$, express others in terms of $x$",
            "Consecutive Numbers: If first is $n$, next is $n + 1$, then $n + 2$, etc.",
            "Geometric Problems: Use formulas (perimeter, area) with constraints",
            "Example: Rectangle length is 5cm more than width, perimeter is 42cm",
            "Let $w$ = width, then length = $w + 5$",
            "Perimeter: $2(w + w + 5) = 42$"
          ],

          sampleProblems: [
            "Sarah is 3 years older than Tom. Their sum is 27. Find both ages.",
            "A rectangle's length is 5cm more than width. Perimeter is 42cm. Find dimensions.",
            "One number is twice another. Their sum is 72. Find both numbers."
          ],

          availableTools: []
        },

        {
          id: "real-world-applications",
          title: "Real-World Application Problems",
          difficulty: "advanced",
          prerequisites: ["multi-step-word-problems"],
          masterySignals: "Student solves real-world problems (money, distance, mixture) in 2-3 problems using algebra, applies formulas correctly, and interprets results in context",
          estimatedQuestions: "3-4 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 correct real-world problem solutions",
                "Appropriate formulas and methods applied"
              ],
              qualitative: [
                "Solves money/cost problems with multiple items",
                "Applies distance = speed × time formula in problems",
                "Handles average/mixture problems",
                "Interprets results correctly in context",
                "Identifies when answer doesn't make sense (negative, too large, etc.)",
                "Presents solution clearly with units and context"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on formula or setup",
                "Can solve if structure provided"
              ],
              qualitative: [
                "Can apply formulas with prompting",
                "Struggles to identify which formula to use",
                "Makes arithmetic errors in calculations",
                "Can handle simpler applications but not complex ones",
                "Needs help interpreting results"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot solve real-world problems",
                "Does not know which formulas to apply",
                "Multiple errors throughout"
              ],
              qualitative: [
                "Cannot identify relevant formulas",
                "Cannot translate real situations to algebra",
                "Makes systematic setup errors",
                "Cannot interpret results in context",
                "Does not recognize unreasonable answers",
                "Cannot organize approach to applied problems"
              ]
            }
          },

          learningObjectives: [
            "Solve real-world problems using algebra",
            "Apply formulas (distance, cost, average) in context",
            "Handle money and shopping problems",
            "Solve distance/speed/time problems",
            "Work with averages and mixtures",
            "Interpret solutions in context with appropriate units"
          ],

          relevantFormulas: [
            "Common Formulas:",
            "Distance: $d = st$ (distance = speed × time)",
            "Cost: Total = price × quantity",
            "Average: $\\text{Average} = \\frac{\\text{sum}}{\\text{count}}$",
            "Percentage: Part = $\\frac{\\text{percent}}{100} \\times$ whole"
          ],

          sampleProblems: [
            "Emma buys 3 notebooks and 2 pens for \\$11. Each pen costs \\$2. Find notebook cost.",
            "A car travels at 60 km/h. How long to travel 210 km?",
            "A student averaged 78 on three tests. She scored 72 and 81 on first two. Find third score."
          ],

          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Translate word problems to algebraic equations",
      "Solve multi-step word problems",
      "Apply algebra to real-world situations",
      "Interpret and verify solutions in context"
    ],

    keyFormulas: `
**Problem-Solving Steps:**
1. Read and understand
2. Define variable clearly
3. Translate to equation
4. Solve equation
5. Check if reasonable
6. Answer with units

**Common Formulas:**
- Distance: $d = st$
- Cost: Total = price × quantity
- Average: $\\frac{\\text{sum}}{n}$

**Common Patterns:**
- Consecutive numbers: $n$, $n+1$, $n+2$
- Age problems: Express all ages in terms of one variable
`
  }
};
