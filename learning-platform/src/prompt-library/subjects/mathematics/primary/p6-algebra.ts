/**
 * P6 Mathematics - Algebra Topic Configuration
 *
 * Comprehensive configuration for teaching algebra:
 * 1. Writing Algebraic Expressions - Variables, +, -, ×, ÷
 * 2. Simplifying Expressions - Like terms, combining
 * 3. Evaluating Expressions - Substitution
 * 4. Solving Equations - Finding unknowns
 *
 * Target audience: Primary 6 students (11-12 years old)
 */

// Type exports
export type P6AlgebraTopicId =
  | 'p6-math-algebra-writing-expressions'
  | 'p6-math-algebra-simplifying'
  | 'p6-math-algebra-evaluating'
  | 'p6-math-algebra-solving';

// Topic-specific tutor customization
export const P6_ALGEBRA_CONFIG = {
  teachingPhilosophy: `You are a friendly and encouraging mathematics tutor for Primary 6 students learning algebra for the first time.

Teaching Approach:
- Use simple, age-appropriate language suitable for 11-12 year olds
- Introduce variables as "letters that represent unknown numbers" - like a mystery box
- Use BAR MODELS extensively - this is the Singapore Math approach and critical for this topic
- Build from concrete (cupcakes in a box) to abstract (n + 3)
- Help students understand that algebra is just a way to express relationships mathematically
- Use real-world contexts: cupcakes, stickers, money, age, cookies, shirts with buttons
- Be patient - this is many students' FIRST encounter with algebra
- Celebrate when students write expressions correctly on their own

Key Concepts to Reinforce:
- A variable (n, x, y) represents an unknown number
- We can use ANY letter for a variable
- Multiplication: Write 5 × q as "5q" (number before letter, no × sign)
- Division: Write y ÷ 6 as "y/6" (fraction form)
- Like terms have the SAME variable (3x and 5x are like terms)
- Unlike terms CANNOT be combined (3x + 2y stays as 3x + 2y)
- Solving an equation = finding the value of the unknown

Common Misconceptions to Watch For:
- "3x + 2y = 5xy" ← WRONG! Unlike terms cannot be combined
- "3x + 2x = 5xx" ← WRONG! Add coefficients, not variables (answer is 5x)
- "x - 5 is the same as 5 - x" ← WRONG! Order matters in subtraction
- "The answer must be a number" ← WRONG! Algebraic expressions are valid answers

**Text-to-Speech Guidelines:**
- Say "n plus 3" not "n + 3"
- Say "5 x" or "5 times x" for multiplication, not "5x" as one word
- Say "y divided by 6" or "y over 6" for fractions
- For equations: "x equals 5" not "x = 5"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), use proper notation`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding.
IMPORTANT: Use the technical name in the toolName field, NOT the display name.

Available tools for this topic:
- barModel: PRIMARY TOOL - Singapore Math bar model for expressions and equations. Use for EVERY concept. Parameters: title, bars, comparison, groupBracket, showUnitDividers, caption.
- algebraExpression: Shows term breakdown, coefficients, and like terms with color-coding. Use for simplifying expressions. Parameters: expression, highlightLikeTerms, showCoefficients, showBreakdown, caption.
- balanceScale: Shows equation as balanced scale, operations on both sides. Use for equation solving concept. Parameters: leftSide, rightSide, operation, operationValue, step, caption.

Tool usage guidelines:
- Use barModel EXTENSIVELY - it's the core visual for Singapore Math algebra
- For expressions: Show variable + constant as segments in a bar
- For comparisons: Use multiple bars to show relationships (e.g., "3 times as many")
- For equations: Use bar model with totalLabel showing the known total
- Use algebraExpression when showing how to combine like terms
- Use balanceScale sparingly - mainly for introducing the equation concept
- Always include a helpful caption explaining what to observe in the visualization`
};

// Available math tools for this topic
export const P6_ALGEBRA_MATH_TOOLS = [
  "barModel",
  "algebraExpression",
  "balanceScale"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const P6_ALGEBRA_SUBTOPICS = {

  'p6-math-algebra-writing-expressions': {
    displayName: 'Writing Algebraic Expressions',
    topicName: 'writing algebraic expressions',

    progressionStructure: {
      sections: [
        {
          id: "intro-variables",
          title: "Understanding Variables",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student explains that a variable represents an unknown number and uses letters correctly in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct responses explaining variables",
                "Uses variables appropriately in expressions"
              ],
              qualitative: [
                "Explains that a variable is a letter representing an unknown number",
                "Understands that any letter can be used (n, x, y, etc.)",
                "Recognizes why variables are useful (when we don't know the exact number)",
                "Can identify the variable in a given expression",
                "Understands that the same variable represents the same unknown in an expression"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about variables",
                "Can follow examples but struggles to explain"
              ],
              qualitative: [
                "Understands the concept but can't articulate clearly",
                "Sometimes confuses variable with a specific value",
                "Needs visual support (bar model) to understand",
                "Can work with examples but struggles with new scenarios"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot explain what a variable represents",
                "Confused about why we use letters"
              ],
              qualitative: [
                "Thinks the letter is a specific number",
                "Does not understand why we need variables",
                "Cannot identify variables in expressions",
                "Confuses variables with units (like 'm' for metres)"
              ]
            }
          },
          learningObjectives: [
            "Understand that a variable represents an unknown number",
            "Recognize that any letter can be used as a variable",
            "Explain why variables are useful in mathematics"
          ],
          relevantFormulas: [
            "A variable (like n, x, or y) represents an unknown number",
            "Example: 'Some cupcakes in a box' can be written as n cupcakes"
          ],
          availableTools: ["barModel"]
        },
        {
          id: "addition-expressions",
          title: "Addition Expressions",
          difficulty: "foundational",
          prerequisites: ["intro-variables"],
          masterySignals: "Student correctly writes addition expressions (variable + number or number + variable) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct addition expressions",
                "Shows understanding with different contexts"
              ],
              qualitative: [
                "Writes expressions like n + 3 or 7 + y correctly",
                "Understands that n + 3 means 'n plus 3'",
                "Can translate word problems: 'k oranges more' becomes + k",
                "Recognizes that addition is commutative: n + 3 = 3 + n",
                "Can draw bar model showing variable + constant"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Makes occasional notation errors"
              ],
              qualitative: [
                "Understands concept but sometimes reverses order unnecessarily",
                "Needs prompting to identify what to add",
                "Can set up bar model but struggles to write expression",
                "Gets confused with word problem phrasing"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot write addition expressions correctly",
                "Confuses addition with other operations"
              ],
              qualitative: [
                "Does not understand how to translate to algebra",
                "Writes numbers only, forgetting the variable",
                "Cannot identify what quantities to add",
                "Gets lost in word problem context"
              ]
            }
          },
          learningObjectives: [
            "Write addition expressions with variables",
            "Translate 'more than' into addition expressions",
            "Understand that addition order doesn't matter"
          ],
          relevantFormulas: [
            "n cupcakes in box + 3 on plate = (n + 3) cupcakes",
            "'k more' means add k: original + k"
          ],
          availableTools: ["barModel"]
        },
        {
          id: "subtraction-expressions",
          title: "Subtraction Expressions",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["addition-expressions"],
          masterySignals: "Student correctly writes subtraction expressions understanding ORDER matters in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct subtraction expressions",
                "Shows awareness of order importance"
              ],
              qualitative: [
                "Writes p - 2 for 'p minus 2' correctly",
                "Writes 12 - j for '12 minus j' correctly",
                "Understands p - 2 ≠ 2 - p (ORDER MATTERS)",
                "'Subtract c from 20' = 20 - c (not c - 20)",
                "'15 less than d' = d - 15 (not 15 - d)",
                "Can explain the difference between the two orders"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with order hints",
                "Sometimes reverses subtraction order"
              ],
              qualitative: [
                "Knows subtraction but confuses order",
                "'15 less than d' written as 15 - d (common error)",
                "Needs bar model to see which is larger",
                "Can correct errors when prompted"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot write subtraction expressions correctly",
                "Consistently gets order wrong"
              ],
              qualitative: [
                "Does not understand order matters in subtraction",
                "Cannot distinguish 'subtract from' vs 'subtract'",
                "Writes expressions backwards consistently",
                "Cannot use bar model to determine order"
              ]
            }
          },
          learningObjectives: [
            "Write subtraction expressions with correct order",
            "Understand that ORDER MATTERS in subtraction",
            "Translate 'subtract from' and 'less than' correctly"
          ],
          relevantFormulas: [
            "p - 2 means 'start with p, take away 2'",
            "'Subtract c from 20' = 20 - c",
            "'15 less than d' = d - 15 (NOT 15 - d)"
          ],
          availableTools: ["barModel"]
        },
        {
          id: "multiplication-expressions",
          title: "Multiplication Expressions",
          difficulty: "intermediate",
          prerequisites: ["subtraction-expressions"],
          masterySignals: "Student writes multiplication expressions using correct notation (5q not q5 or 5×q) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multiplication expressions",
                "Uses correct notation consistently"
              ],
              qualitative: [
                "Writes m × 8 as 8m (number before letter)",
                "Understands that 5 × q = 5q (no × sign needed)",
                "'3 times as many' translates to multiplication",
                "Each shirt has 8 buttons, m shirts → 8m buttons",
                "Can draw bar model showing repeated units"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with notation hints",
                "Sometimes writes q5 instead of 5q"
              ],
              qualitative: [
                "Understands multiplication but uses wrong notation",
                "Writes 5 × q instead of 5q",
                "Forgets number goes before letter",
                "Can identify multiplication situations but notation is weak"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot write multiplication expressions",
                "Confuses with addition"
              ],
              qualitative: [
                "Does not know to write 5q (writes 5 × q or q5)",
                "Cannot translate 'times as many' to multiplication",
                "Confuses multiplication with addition",
                "Cannot connect bar model to multiplication"
              ]
            }
          },
          learningObjectives: [
            "Write multiplication expressions in algebraic form",
            "Use correct notation: number before letter, no × sign",
            "Translate 'times as many' into multiplication"
          ],
          relevantFormulas: [
            "m × 8 = 8 × m = 8m (number before letter)",
            "5 groups of q = 5 × q = 5q",
            "Note: Just 'q' means '1q' or '1 × q'"
          ],
          availableTools: ["barModel"]
        },
        {
          id: "division-expressions",
          title: "Division Expressions",
          difficulty: "intermediate",
          prerequisites: ["multiplication-expressions"],
          masterySignals: "Student writes division expressions as fractions (y/6 not y÷6) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct division expressions",
                "Uses fraction notation correctly"
              ],
              qualitative: [
                "Writes y ÷ 6 as y/6 (fraction form)",
                "Understands that sharing equally = division",
                "$p shared among 3 children = $(p/3) each",
                "Can determine 1 unit when total is given as variable",
                "Connects bar model (equal parts) to division expression"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with fraction notation hints",
                "Uses ÷ instead of fraction form"
              ],
              qualitative: [
                "Knows to divide but uses y ÷ 6 instead of y/6",
                "Struggles to determine which number goes where",
                "Can solve but notation is not algebraic",
                "Needs help connecting sharing to fractions"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot write division expressions",
                "Confuses with multiplication"
              ],
              qualitative: [
                "Does not know fraction notation for division",
                "Reverses division (writes 6/y instead of y/6)",
                "Cannot identify division situations",
                "Does not understand equal sharing concept"
              ]
            }
          },
          learningObjectives: [
            "Write division expressions as fractions",
            "Understand that sharing equally = division",
            "Use correct notation: variable/number"
          ],
          relevantFormulas: [
            "y ÷ 6 = y/6 (fraction form)",
            "$p shared among 3 = $(p/3) each child",
            "'Divide y by 6' = y/6"
          ],
          availableTools: ["barModel"]
        }
      ]
    },

    learningObjectives: [
      "Understand that variables represent unknown numbers",
      "Write addition expressions (n + 3)",
      "Write subtraction expressions understanding order matters (p - 2 vs 12 - j)",
      "Write multiplication expressions using correct notation (8m not m8 or 8×m)",
      "Write division expressions as fractions (y/6)"
    ],

    keyFormulas: `
**Variables:**
A variable (n, x, y, etc.) represents an unknown number.

**Addition Expressions:**
n + 3 means "n plus 3"
k more than 5 = 5 + k

**Subtraction Expressions (ORDER MATTERS!):**
p - 2 means "p minus 2"
"Subtract c from 20" = 20 - c (NOT c - 20)
"15 less than d" = d - 15 (NOT 15 - d)

**Multiplication Expressions:**
m × 8 = 8m (number before letter, no × sign)
"5 times q" = 5q

**Division Expressions:**
y ÷ 6 = y/6 (use fraction form)
"$p shared among 3" = $(p/3)

**Common Phrases Translation:**
| Statement | Expression |
|-----------|------------|
| Add 10 to a | a + 10 |
| 12 more than b | b + 12 |
| Subtract c from 20 | 20 - c |
| 15 less than d | d - 15 |
| 3 groups of x | 3x |
| Divide y by 6 | y/6 |
`
  },

  'p6-math-algebra-simplifying': {
    displayName: 'Simplifying Expressions',
    topicName: 'simplifying algebraic expressions',

    progressionStructure: {
      sections: [
        {
          id: "like-terms-concept",
          title: "Understanding Like Terms",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student identifies like terms and explains why they can be combined in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of like terms",
                "Explains the concept clearly"
              ],
              qualitative: [
                "Identifies like terms: same variable (3y and 5y are like terms)",
                "Identifies unlike terms: different variables (3x and 5y cannot combine)",
                "Understands constants (numbers alone) are like terms with each other",
                "Can explain WHY like terms can be combined (same type of quantity)",
                "Uses bar model to visualize same-sized units"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Sometimes confuses like and unlike terms"
              ],
              qualitative: [
                "Understands concept but makes identification errors",
                "Thinks 3x and 3y are like terms (same coefficient)",
                "Needs visual support to distinguish",
                "Can correct errors when prompted"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot identify like terms",
                "Tries to combine everything"
              ],
              qualitative: [
                "Thinks all terms can be combined",
                "Does not understand what 'like' means",
                "Attempts 3x + 2y = 5xy (common error)",
                "Cannot visualize the concept"
              ]
            }
          },
          learningObjectives: [
            "Identify like terms (same variable)",
            "Identify unlike terms (different variables)",
            "Explain why only like terms can be combined"
          ],
          relevantFormulas: [
            "Like terms: 3y and 5y (same variable y)",
            "Unlike terms: 3x and 5y (different variables)",
            "Constants: 4 and 9 are like terms (both just numbers)"
          ],
          availableTools: ["barModel", "algebraExpression"]
        },
        {
          id: "adding-like-terms",
          title: "Adding Like Terms",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["like-terms-concept"],
          masterySignals: "Student correctly adds like terms by adding coefficients in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct additions of like terms",
                "Shows clear working"
              ],
              qualitative: [
                "Adds coefficients correctly: 6y + 2y = 8y",
                "Understands y by itself means 1y: 4y + y = 5y",
                "Can handle multiple terms: 3x + 2x + 5x = 10x",
                "Uses bar model: combining boxes of same variable",
                "Can verify answer makes sense"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Makes occasional coefficient errors"
              ],
              qualitative: [
                "Knows to add coefficients but makes arithmetic errors",
                "Forgets y alone = 1y",
                "Sometimes writes 8yy instead of 8y",
                "Can follow examples but struggles independently"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot add like terms correctly",
                "Makes conceptual errors"
              ],
              qualitative: [
                "Tries to add variables: 3x + 2x = 5xx (WRONG)",
                "Does not know what coefficient to add",
                "Cannot connect bar model to addition",
                "Completely lost with the process"
              ]
            }
          },
          learningObjectives: [
            "Add like terms by adding coefficients",
            "Understand that y alone means 1y",
            "Use bar models to visualize combining like terms"
          ],
          relevantFormulas: [
            "6y + 2y = 8y (add coefficients: 6 + 2 = 8)",
            "4x + x = 4x + 1x = 5x",
            "3m + 5m + 2m = 10m"
          ],
          availableTools: ["barModel", "algebraExpression"]
        },
        {
          id: "subtracting-like-terms",
          title: "Subtracting Like Terms",
          difficulty: "intermediate",
          prerequisites: ["adding-like-terms"],
          masterySignals: "Student correctly subtracts like terms in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct subtractions of like terms",
                "Shows clear working"
              ],
              qualitative: [
                "Subtracts coefficients correctly: 6y - 2y = 4y",
                "Handles single variable: 8n - n = 7n (since n = 1n)",
                "Can handle multiple subtractions: 10x - 3x - 2x = 5x",
                "Uses bar model: showing difference/removal",
                "Writes answer as just 'x' not '1x' when coefficient is 1"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Makes coefficient subtraction errors"
              ],
              qualitative: [
                "Knows to subtract but makes arithmetic errors",
                "Forgets n alone = 1n in subtraction",
                "Writes 1x instead of x",
                "Needs prompting for negative results concept"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot subtract like terms correctly",
                "Confuses with addition"
              ],
              qualitative: [
                "Subtracts wrong values",
                "Does not know coefficient subtraction",
                "Cannot visualize removal on bar model",
                "Gets confused when answer should be just the variable"
              ]
            }
          },
          learningObjectives: [
            "Subtract like terms by subtracting coefficients",
            "Handle subtracting single variables (n = 1n)",
            "Write simplified form (x not 1x)"
          ],
          relevantFormulas: [
            "6y - 2y = 4y (subtract coefficients: 6 - 2 = 4)",
            "8n - n = 8n - 1n = 7n",
            "4x - 3x = x (not 1x)"
          ],
          availableTools: ["barModel", "algebraExpression"]
        },
        {
          id: "combining-mixed-terms",
          title: "Combining Terms with Constants",
          difficulty: "intermediate",
          prerequisites: ["subtracting-like-terms"],
          masterySignals: "Student correctly combines expressions with both variables and constants in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct simplifications",
                "Shows grouping of like terms"
              ],
              qualitative: [
                "Groups like terms: (6y + 2y) + (2 + 5) = 8y + 7",
                "Handles subtraction within: 5x + 3 - 2x + 7 = 3x + 10",
                "Keeps unlike terms separate: 4a + 2b stays as 4a + 2b",
                "Shows step-by-step working with grouping",
                "Can explain which terms were combined and why"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with grouping hints",
                "Sometimes combines unlike terms"
              ],
              qualitative: [
                "Can group but makes arithmetic errors",
                "Sometimes tries to combine variable and constant",
                "Forgets to handle sign changes properly",
                "Working is messy or incomplete"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot simplify mixed expressions",
                "Makes multiple errors"
              ],
              qualitative: [
                "Tries to combine unlike terms (3x + 5 = 8x WRONG)",
                "Cannot identify which terms to group",
                "Gets lost with multiple terms",
                "Does not understand the grouping strategy"
              ]
            }
          },
          learningObjectives: [
            "Group and combine like terms in mixed expressions",
            "Handle both addition and subtraction in one expression",
            "Show clear working with grouping"
          ],
          relevantFormulas: [
            "6y + 2 + 2y + 5 = (6y + 2y) + (2 + 5) = 8y + 7",
            "5x + 3 - 2x + 7 = (5x - 2x) + (3 + 7) = 3x + 10",
            "4a + 2b - a = 3a + 2b (unlike terms stay separate)"
          ],
          availableTools: ["barModel", "algebraExpression"]
        }
      ]
    },

    learningObjectives: [
      "Identify like terms (same variable) and unlike terms",
      "Add like terms by adding coefficients (6y + 2y = 8y)",
      "Subtract like terms by subtracting coefficients (6y - 2y = 4y)",
      "Combine mixed expressions with variables and constants"
    ],

    keyFormulas: `
**Like Terms:**
Like terms have the SAME variable.
3y and 5y are like terms (both have y)
3x and 5y are NOT like terms (different variables)

**Adding Like Terms:**
6y + 2y = 8y (add coefficients: 6 + 2 = 8)
4x + x = 5x (remember: x means 1x)

**Subtracting Like Terms:**
6y - 2y = 4y (subtract coefficients: 6 - 2 = 4)
4x - 3x = x (not 1x - just write x)

**Combining Mixed Expressions:**
1. Group like terms together
2. Simplify each group
3. Write final answer

Example: 5x + 3 - 2x + 7
= (5x - 2x) + (3 + 7)
= 3x + 10

**Common Mistakes to Avoid:**
- 3x + 2y ≠ 5xy (cannot combine unlike terms!)
- 3x + 2x ≠ 5xx (add coefficients, not multiply variables!)
- 4x - 3x ≠ 1x (write just x, not 1x)
`
  },

  'p6-math-algebra-evaluating': {
    displayName: 'Evaluating Expressions',
    topicName: 'evaluating algebraic expressions',

    progressionStructure: {
      sections: [
        {
          id: "substitution-basics",
          title: "Introduction to Substitution",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly substitutes values and evaluates simple expressions in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct substitutions",
                "Shows replacement clearly"
              ],
              qualitative: [
                "Understands substitution = replacing variable with number",
                "Shows the replacement step: y + 3 becomes 5 + 3 when y = 5",
                "Correctly evaluates after substitution",
                "Can explain what substitution means",
                "Connects substitution to 'finding actual value'"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with prompting",
                "Makes calculation errors after substituting"
              ],
              qualitative: [
                "Understands replacement but makes arithmetic errors",
                "Sometimes substitutes wrong value",
                "Forgets to show substitution step",
                "Can follow examples but struggles independently"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot perform substitution",
                "Does not understand the concept"
              ],
              qualitative: [
                "Does not understand what substitution means",
                "Cannot replace variable with given value",
                "Gets confused between variable and value",
                "Needs fundamental explanation of the concept"
              ]
            }
          },
          learningObjectives: [
            "Understand that substitution means replacing a variable with a number",
            "Perform simple substitution in addition/subtraction expressions",
            "Show the substitution step clearly"
          ],
          relevantFormulas: [
            "If y = 5, then y + 3 = 5 + 3 = 8",
            "If n = 7, then 25 - n = 25 - 7 = 18",
            "Always show the replacement step!"
          ],
          availableTools: ["barModel"]
        },
        {
          id: "single-variable-eval",
          title: "Single Variable Expressions",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["substitution-basics"],
          masterySignals: "Student evaluates expressions with one variable including multiplication and division in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct evaluations",
                "Handles all operations"
              ],
              qualitative: [
                "Evaluates 4x correctly: 4 × 15 = 60 when x = 15",
                "Evaluates y/6 correctly: 84 ÷ 6 = 14 when y = 84",
                "Shows clear step-by-step working",
                "Remembers 4x means 4 × x",
                "Remembers y/6 means y ÷ 6"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with operation reminders",
                "Confuses notation sometimes"
              ],
              qualitative: [
                "Knows to substitute but forgets what 4x means",
                "Makes division/multiplication errors",
                "Needs reminding about algebraic notation",
                "Working is unclear or incomplete"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot evaluate expressions",
                "Does not understand notation"
              ],
              qualitative: [
                "Does not know 4x means 4 × x",
                "Does not know y/6 means y ÷ 6",
                "Cannot perform the calculations",
                "Needs review of writing expressions"
              ]
            }
          },
          learningObjectives: [
            "Evaluate multiplication expressions (4x when x = 15)",
            "Evaluate division expressions (y/6 when y = 84)",
            "Remember what algebraic notation means"
          ],
          relevantFormulas: [
            "4x means 4 × x: When x = 15, 4x = 4 × 15 = 60",
            "y/6 means y ÷ 6: When y = 84, y/6 = 84 ÷ 6 = 14"
          ],
          availableTools: ["barModel"]
        },
        {
          id: "multi-term-eval",
          title: "Multi-term Expressions",
          difficulty: "intermediate",
          prerequisites: ["single-variable-eval"],
          masterySignals: "Student evaluates expressions with multiple terms following order of operations in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multi-term evaluations",
                "Follows order of operations"
              ],
              qualitative: [
                "Evaluates 4x + 9 correctly: 4 × 15 + 9 = 60 + 9 = 69 when x = 15",
                "Does multiplication/division before addition/subtraction",
                "Shows clear step-by-step working",
                "Can handle expressions like 30 + 6p correctly",
                "Includes units in final answer when appropriate"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with order hints",
                "Sometimes gets order wrong"
              ],
              qualitative: [
                "Adds before multiplying (wrong order)",
                "Can substitute but makes calculation sequence errors",
                "Working is hard to follow",
                "Forgets to include units"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot evaluate multi-term expressions",
                "Does not follow order of operations"
              ],
              qualitative: [
                "Does not know order of operations",
                "Makes multiple errors in calculation",
                "Cannot organize the steps",
                "Gets overwhelmed by multiple operations"
              ]
            }
          },
          learningObjectives: [
            "Evaluate multi-term expressions",
            "Follow order of operations (× ÷ before + -)",
            "Show clear step-by-step working"
          ],
          relevantFormulas: [
            "4x + 9 when x = 15: = 4 × 15 + 9 = 60 + 9 = 69",
            "30 + 6p when p = 20: = 30 + 6 × 20 = 30 + 120 = 150",
            "Remember: Multiply/divide BEFORE add/subtract"
          ],
          availableTools: ["barModel"]
        },
        {
          id: "word-problems-eval",
          title: "Word Problem Evaluation",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["multi-term-eval"],
          masterySignals: "Student sets up expressions from context and evaluates them correctly in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct word problem evaluations",
                "Complete working with context"
              ],
              qualitative: [
                "Reads problem and identifies the expression",
                "Substitutes the given value correctly",
                "Shows complete step-by-step working",
                "Includes units and context in answer",
                "Can explain what the answer means in context"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with problem interpretation help",
                "Struggles with context"
              ],
              qualitative: [
                "Can evaluate but struggles to find expression in context",
                "Forgets units or context in answer",
                "Makes calculation errors",
                "Needs help understanding what problem is asking"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot solve word problems",
                "Cannot identify expression from context"
              ],
              qualitative: [
                "Does not understand word problem context",
                "Cannot translate words to expression",
                "Gets lost in the problem",
                "Needs review of earlier sections"
              ]
            }
          },
          learningObjectives: [
            "Extract algebraic expressions from word problems",
            "Evaluate expressions in real-world contexts",
            "Include units and context in final answers"
          ],
          relevantFormulas: [
            "Bus rental: $(30 + 6p) when p = 20 → $30 + $120 = $150",
            "Taxi fare: $(3 + 2k) when k = 12 → $3 + $24 = $27",
            "Always include $ or units in answer!"
          ],
          availableTools: ["barModel"]
        }
      ]
    },

    learningObjectives: [
      "Understand substitution as replacing variables with numbers",
      "Evaluate expressions with multiplication and division",
      "Follow order of operations in multi-term expressions",
      "Solve word problems involving expression evaluation"
    ],

    keyFormulas: `
**What is Substitution?**
Substitution = Replacing a variable with a specific number
When y = 5: y + 3 becomes 5 + 3 = 8

**Remember the Notation:**
- 4x means 4 × x
- y/6 means y ÷ 6

**Order of Operations:**
Multiply and Divide BEFORE Add and Subtract

**Evaluation Steps:**
1. Identify the expression
2. Write down the given value (e.g., x = 15)
3. Substitute (replace variable with number)
4. Calculate (following order of operations)
5. Include units if appropriate

**Examples:**
• y + 3 when y = 5 → 5 + 3 = 8
• 25 - n when n = 7 → 25 - 7 = 18
• 4x + 9 when x = 15 → 4×15 + 9 = 60 + 9 = 69
• q/6 when q = 84 → 84 ÷ 6 = $14
• $(30 + 6p) when p = 20 → $30 + $120 = $150
`
  },

  'p6-math-algebra-solving': {
    displayName: 'Solving Algebraic Equations',
    topicName: 'solving algebraic equations',

    progressionStructure: {
      sections: [
        {
          id: "one-step-equations",
          title: "One-Step Equations",
          difficulty: "foundational-to-intermediate",
          prerequisites: [],
          masterySignals: "Student solves one-step equations and explains the process in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct one-step equation solutions",
                "Shows inverse operations"
              ],
              qualitative: [
                "Solves addition equations: 7 + j = 18 → j = 18 - 7 = 11",
                "Solves multiplication equations: 9g = 72 → g = 72 ÷ 9 = 8",
                "Understands inverse operations (+ ↔ -, × ↔ ÷)",
                "Can verify solution by substituting back",
                "Uses bar model to set up equation"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with inverse operation hints",
                "Makes calculation errors"
              ],
              qualitative: [
                "Knows the concept but makes arithmetic errors",
                "Sometimes uses wrong inverse operation",
                "Forgets to verify answer",
                "Can follow examples but struggles to set up independently"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot solve one-step equations",
                "Does not understand inverse operations"
              ],
              qualitative: [
                "Does not know to use inverse operations",
                "Guesses answers instead of solving",
                "Cannot set up bar model for equations",
                "Needs fundamental explanation of equation concept"
              ]
            }
          },
          learningObjectives: [
            "Solve one-step addition equations (7 + j = 18)",
            "Solve one-step multiplication equations (9g = 72)",
            "Understand and apply inverse operations"
          ],
          relevantFormulas: [
            "Addition equation: 7 + j = 18 → j = 18 - 7 = 11",
            "Multiplication equation: 9g = 72 → g = 72 ÷ 9 = 8",
            "To undo +, use -. To undo ×, use ÷."
          ],
          availableTools: ["barModel", "balanceScale"]
        },
        {
          id: "bar-model-equations",
          title: "Bar Models for Equations",
          difficulty: "intermediate",
          prerequisites: ["one-step-equations"],
          masterySignals: "Student draws bar models to represent and solve equations in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct with proper bar model use",
                "Shows model-to-equation conversion"
              ],
              qualitative: [
                "Draws bar model showing known total and unknown parts",
                "Sets up equation from bar model correctly",
                "Finds value of 1 unit (when multiple units exist)",
                "Connects 'find 1 unit' strategy to division",
                "Can explain bar model reasoning"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with bar model guidance",
                "Struggles to set up model independently"
              ],
              qualitative: [
                "Can use provided bar model but can't draw own",
                "Makes errors translating model to equation",
                "Forgets 'find 1 unit' step",
                "Working is disorganized"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot use bar models for equations",
                "Does not see connection"
              ],
              qualitative: [
                "Cannot draw bar model from word problem",
                "Does not understand how model connects to equation",
                "Cannot identify what '1 unit' represents",
                "Needs more practice with bar models"
              ]
            }
          },
          learningObjectives: [
            "Draw bar models representing equations",
            "Convert bar models to algebraic equations",
            "Use 'find 1 unit' strategy for equations with multiple units"
          ],
          relevantFormulas: [
            "2k + 4 = 20 (bar model: two k-units plus 4 equals 20)",
            "Step 1: 2k = 20 - 4 = 16",
            "Step 2: k = 16 ÷ 2 = 8 (find 1 unit)"
          ],
          availableTools: ["barModel", "balanceScale"]
        },
        {
          id: "multi-step-equations",
          title: "Multi-Step Equations",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["bar-model-equations"],
          masterySignals: "Student solves two-step equations using systematic approach in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multi-step solutions",
                "Shows clear systematic approach"
              ],
              qualitative: [
                "Solves 2x + 14 = 70 systematically",
                "First isolates variable terms: 2x = 70 - 14 = 56",
                "Then finds 1 unit: x = 56 ÷ 2 = 28",
                "Shows all steps clearly",
                "Verifies by substituting back into original equation"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with step sequencing help",
                "Gets order of steps wrong"
              ],
              qualitative: [
                "Tries to divide first instead of subtracting first",
                "Makes arithmetic errors in multi-step process",
                "Working is incomplete",
                "Forgets to verify answer"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot solve multi-step equations",
                "Gets lost in the process"
              ],
              qualitative: [
                "Does not know which operation to do first",
                "Cannot organize multi-step solution",
                "Makes multiple errors",
                "Needs review of one-step equations"
              ]
            }
          },
          learningObjectives: [
            "Solve two-step equations systematically",
            "Know to isolate variable terms first",
            "Verify solutions by substitution"
          ],
          relevantFormulas: [
            "2x + 14 = 70",
            "Step 1: 2x = 70 - 14 = 56 (isolate variable terms)",
            "Step 2: x = 56 ÷ 2 = 28 (find 1 unit)",
            "Check: 2(28) + 14 = 56 + 14 = 70 ✓"
          ],
          availableTools: ["barModel", "balanceScale"]
        },
        {
          id: "word-problems-solving",
          title: "Word Problems with Equations",
          difficulty: "advanced",
          prerequisites: ["multi-step-equations"],
          masterySignals: "Student sets up and solves equations from complex word problems in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct word problem solutions",
                "Complete with bar model and equation"
              ],
              qualitative: [
                "Reads problem and identifies relationships",
                "Draws accurate bar model from context",
                "Writes correct equation from bar model",
                "Solves systematically with all steps shown",
                "States answer in context with units"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with problem setup help",
                "Struggles with complex wording"
              ],
              qualitative: [
                "Can solve once equation is set up but struggles with setup",
                "Bar model has errors or is incomplete",
                "Answer lacks context or units",
                "Needs help identifying what problem is asking"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot solve word problems with equations",
                "Cannot set up bar model or equation"
              ],
              qualitative: [
                "Does not understand problem context",
                "Cannot identify relationships between quantities",
                "Cannot translate words to bar model/equation",
                "Needs review of earlier sections"
              ]
            }
          },
          learningObjectives: [
            "Extract relationships from word problems",
            "Draw bar models representing the problem",
            "Set up and solve equations from context",
            "State answers with appropriate units and context"
          ],
          relevantFormulas: [
            "Strategy: Read → Draw bar model → Write equation → Solve → Check → Answer in context",
            "Example: '14 more children play badminton than table tennis, total 70'",
            "Let x = table tennis. x + (x + 14) = 70 → 2x + 14 = 70 → x = 28"
          ],
          availableTools: ["barModel"]
        }
      ]
    },

    learningObjectives: [
      "Solve one-step equations using inverse operations",
      "Use bar models to represent and solve equations",
      "Solve two-step equations systematically",
      "Set up and solve equations from word problems"
    ],

    keyFormulas: `
**What is an Equation?**
An equation has an = sign and shows two things are equal.
Solving = finding the value that makes it true.

**One-Step Equations:**
7 + j = 18 → j = 18 - 7 = 11 (use inverse: -)
9g = 72 → g = 72 ÷ 9 = 8 (use inverse: ÷)

**Multi-Step Equations:**
2x + 14 = 70
Step 1: 2x = 70 - 14 = 56 (isolate variable terms)
Step 2: x = 56 ÷ 2 = 28 (find 1 unit)
Check: 2(28) + 14 = 56 + 14 = 70 ✓

**Bar Model Strategy:**
1. Draw bar model showing quantities
2. Write equation from bar model
3. Find total units first
4. Find value of 1 unit
5. Answer the question

**Inverse Operations:**
- To undo + → use -
- To undo - → use +
- To undo × → use ÷
- To undo ÷ → use ×

**Problem-Solving Steps:**
1. Read the problem carefully
2. Draw a bar model
3. Write the equation
4. Solve step by step
5. Check by substituting back
6. State answer in context with units
`
  }
};

// Helper function to get all subtopic IDs
export const getP6AlgebraSubtopicIds = (): P6AlgebraTopicId[] => {
  return Object.keys(P6_ALGEBRA_SUBTOPICS) as P6AlgebraTopicId[];
};
