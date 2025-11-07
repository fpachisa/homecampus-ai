/**
 * S2 Mathematics - Algebraic Fractions and Formulae Topic Configuration
 *
 * Complete configuration for teaching algebraic fractions, operations,
 * and formula manipulation using the new prompt library architecture.
 */

// ==================== TYPE EXPORTS ====================

export type AlgebraicFractionsTopicId =
  | 's2-math-algebraic-fractions-introduction'
  | 's2-math-algebraic-fractions-factorization'
  | 's2-math-algebraic-fractions-mult-div'
  | 's2-math-algebraic-fractions-add-subtract'
  | 's2-math-algebraic-fractions-equations-formulae';

// ==================== TUTOR CUSTOMIZATION ====================

export const ALGEBRAIC_FRACTIONS_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary school students learning Algebraic Fractions and Formulae.

Teaching Approach:
- Guide students to discover solutions through questioning, not direct instruction
- Build on their understanding of numerical fractions from primary school
- Help students see that algebraic fractions follow the same rules as numerical fractions
- Emphasize factorization as a powerful tool for simplifying
- For formula rearrangement, use the balance scale analogy (same operation on both sides)
- Celebrate insights when students factor expressions or find common denominators correctly
- Adapt difficulty organically based on student mastery

Common Student Difficulties to Address:
- Canceling terms instead of factors (e.g., thinking (x+3)/(x+5) = 3/5)
- Forgetting to factor completely before canceling
- Sign errors when dealing with (a−b) vs (b−a)
- Adding denominators when adding fractions
- Not checking when fractions are undefined (denominator = 0)

**Text-to-Speech Guidelines:**
- Say "x squared" not "x to the power of two"
- Say "x cubed" not "x to the power of three"
- For fractions, say "x over y" or "x divided by y"
- Spell out "LCM" as "L C M" or say "least common multiple"
- Spell out "LCD" as "L C D" or say "least common denominator"
- Say "theta" not "θ", spell out Greek letters
- Avoid complex notation in speech - spell out algebraic expressions clearly
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding.
IMPORTANT: Use the technical name (e.g., "fractionBar", "balanceScale") in the toolName field, NOT the display name.

Available tools for this topic:
- fractionBar: For visualizing fraction operations, finding LCD, equivalent fractions
- algebraExpression: For breaking down expressions, identifying like terms and factors
- balanceScale: For equation solving and formula rearrangement (CRITICAL for formulae section)
- factoringVisualizer: For showing factorization steps
- distributiveVisualizer: For expanding brackets
- multiplicationGrid: For expanding products like (x+2)(x+3)

Use tools sparingly - only when they add genuine understanding, not for every question.`
};

// ==================== AVAILABLE MATH TOOLS ====================

export const ALGEBRAIC_FRACTIONS_MATH_TOOLS = [
  "fractionBar",
  "algebraExpression",
  "balanceScale",
  "factoringVisualizer",
  "distributiveVisualizer",
  "multiplicationGrid"
];

// ==================== GLOBAL CONFIG ====================

export const ALGEBRAIC_FRACTIONS_CONFIG = {
  mathTools: ALGEBRAIC_FRACTIONS_MATH_TOOLS,
  tutorCustomization: ALGEBRAIC_FRACTIONS_TUTOR_CUSTOMIZATION
};

// ==================== SUBTOPICS CONFIGURATION ====================

export const S2_MATH_ALGEBRAIC_FRACTIONS_SUBTOPICS = {

  // =================================================================
  // SUBTOPIC 1: INTRODUCTION TO ALGEBRAIC FRACTIONS
  // =================================================================

  's2-math-algebraic-fractions-introduction': {
    displayName: 'Introduction to Algebraic Fractions',
    topicName: 'algebraic fractions and basic simplification',

    progressionStructure: {
      sections: [
        {
          id: "understanding-algebraic-fractions",
          title: "Understanding Algebraic Fractions",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies algebraic fractions, understands when fractions are undefined (denominator = 0) in 3+ problems",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications without hints",
                "Consistently identifies when fractions are undefined",
                "Correctly applies equivalent fractions rule"
              ],
              qualitative: [
                "Understands that A/B is algebraic when A or B contains variables",
                "Can identify values that make denominator zero",
                "Recognizes importance of B ≠ 0 condition",
                "Applies equivalent fractions rule: A/B = (A×C)/(B×C)",
                "Explains why fractions are undefined when denominator is zero"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on setting denominator to zero",
                "Makes occasional errors identifying algebraic vs numerical fractions"
              ],
              qualitative: [
                "Understands basic concept but uncertain about edge cases",
                "Needs prompting to set denominator equal to zero",
                "Can apply equivalent fractions rule with guidance",
                "Sometimes forgets that denominator cannot be zero"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect attempts",
                "Cannot identify when fractions are undefined",
                "Confused about equivalent fractions"
              ],
              qualitative: [
                "Does not understand what makes a fraction algebraic",
                "Cannot set up equation to find when denominator is zero",
                "Confuses numerator and denominator",
                "Does not understand the condition B ≠ 0",
                "Tries to evaluate algebraic expressions without values"
              ]
            }
          },

          learningObjectives: [
            "Define an algebraic fraction as A/B where A and/or B are algebraic expressions",
            "Identify algebraic fractions and distinguish from numerical fractions",
            "Determine when a fraction is undefined (denominator = 0)",
            "Apply equivalent fractions rule: A/B = (A×C)/(B×C) where B, C ≠ 0",
            "Understand that fraction value remains unchanged when multiplying/dividing numerator and denominator by same expression"
          ],

          relevantFormulas: [
            "Equivalent fractions: A/B = (A×C)/(B×C), where B, C ≠ 0",
            "Also: A/B = (A+C)/(B+C), where B+C ≠ 0",
            "Fraction undefined when: denominator = 0",
            "Example: 5/(x−3) is undefined when x = 3"
          ],

          availableTools: ["fractionBar", "algebraExpression"]
        },

        {
          id: "simplifying-algebraic-fractions-basic",
          title: "Simplifying by Canceling Common Factors",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["understanding-algebraic-fractions"],
          masterySignals: "Student correctly simplifies 3+ algebraic fractions by canceling common numerical and variable factors",
          estimatedQuestions: "5-6 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct simplifications without hints",
                "Consistent accuracy across different types of fractions",
                "Correctly handles exponents when canceling variables"
              ],
              qualitative: [
                "Identifies common numerical factors in numerator and denominator",
                "Identifies common variable factors",
                "Correctly subtracts exponents when canceling (x³/x² = x)",
                "Simplifies to lowest terms (no common factors except 1)",
                "Understands that only factors can be canceled, not terms",
                "Final answer has no common factors except 1"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on identifying factors",
                "Makes occasional errors with exponents"
              ],
              qualitative: [
                "Can identify obvious common factors but misses some",
                "Needs prompting for exponent subtraction rules",
                "Sometimes forgets to simplify completely",
                "Can cancel with guidance but not independently"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect attempts",
                "Cannot identify common factors",
                "Makes systematic errors with exponents"
              ],
              qualitative: [
                "Tries to cancel terms instead of factors (e.g., (x+3)/(x+5) → 3/5)",
                "Does not understand exponent rules for division",
                "Cancels variables incorrectly (e.g., x/x² → 1/1 instead of 1/x)",
                "Cannot identify what factors are common",
                "Stops before fully simplifying"
              ]
            }
          },

          learningObjectives: [
            "Identify common numerical factors in numerator and denominator",
            "Identify common variable factors",
            "Apply exponent rules: xᵐ/xⁿ = xᵐ⁻ⁿ when m > n, 1/xⁿ⁻ᵐ when n > m",
            "Simplify fractions to lowest terms by dividing by all common factors",
            "Understand that only factors (things that multiply) can be canceled",
            "Verify final answer has no common factors except 1"
          ],

          relevantFormulas: [
            "Division of like variables: xᵐ/xⁿ = xᵐ⁻ⁿ (when m ≥ n)",
            "Example: x⁵/x² = x⁵⁻² = x³",
            "Example: y³/y³ = y³⁻³ = y⁰ = 1",
            "Cancel common factors: (3xy³)/(9x³y²) = y/(3x²)",
            "IMPORTANT: Can only cancel factors, never terms"
          ],

          availableTools: ["fractionBar", "algebraExpression"]
        }
      ]
    },

    learningObjectives: [
      "Understand what makes a fraction algebraic",
      "Determine when algebraic fractions are undefined",
      "Apply equivalent fractions principle to algebraic fractions",
      "Simplify algebraic fractions by canceling common factors",
      "Master exponent rules for dividing variables"
    ],

    keyFormulas: `
**Key Concepts:**
• Algebraic fraction: A/B where A and/or B are algebraic expressions
• Undefined when: denominator = 0
• Equivalent fractions: A/B = (A×C)/(B×C) where B, C ≠ 0
• Variable division: xᵐ/xⁿ = xᵐ⁻ⁿ
• Only factors (not terms) can be canceled
    `
  },

  // =================================================================
  // SUBTOPIC 2: SIMPLIFYING BY FACTORIZATION
  // =================================================================

  's2-math-algebraic-fractions-factorization': {
    displayName: 'Simplifying by Factorization',
    topicName: 'factorization of algebraic fractions',

    progressionStructure: {
      sections: [
        {
          id: "factorization-linear",
          title: "Factorization with Linear Expressions",
          difficulty: "intermediate",
          prerequisites: ["simplifying-algebraic-fractions-basic"],
          masterySignals: "Student correctly factorizes and simplifies 3+ fractions with linear factors without hints",
          estimatedQuestions: "5-6 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct factorizations and simplifications",
                "Consistent accuracy in extracting common factors",
                "No errors in final simplified form"
              ],
              qualitative: [
                "Factors numerator completely before canceling",
                "Factors denominator completely before canceling",
                "Extracts common numerical and variable factors",
                "Recognizes common binomial factors like (x+3) or (2a−5)",
                "Cancels all common factors correctly",
                "Verifies no further simplification possible"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on which expression to factor",
                "Makes occasional errors in factoring"
              ],
              qualitative: [
                "Understands need to factor but misses some factors",
                "Can extract simple common factors but struggles with binomials",
                "Needs prompting to factor both numerator and denominator",
                "Sometimes stops factoring before completion"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect factorizations",
                "Cannot extract common factors",
                "Tries to cancel without factoring first"
              ],
              qualitative: [
                "Does not understand why factoring is necessary",
                "Cannot identify common factors in expressions",
                "Tries to cancel terms instead of factors",
                "Gives up when expressions look complex",
                "Factors incorrectly (e.g., 3t as 3+t instead of 3×t)"
              ]
            }
          },

          learningObjectives: [
            "Factor out common terms from numerator",
            "Factor out common terms from denominator",
            "Identify common binomial factors",
            "Cancel common factors after complete factorization",
            "Recognize when direct cancellation is not possible without factoring first"
          ],

          relevantFormulas: [
            "Common factor extraction: ax + ay = a(x+y)",
            "Example: a²+4ab² = a(a+4b²)",
            "Example: 3t/(t²−2t) = 3t/(t(t−2)) = 3/(t−2)",
            "Always factor COMPLETELY before canceling"
          ],

          availableTools: ["factoringVisualizer", "algebraExpression", "fractionBar"]
        },

        {
          id: "factorization-quadratic",
          title: "Factorization with Quadratic Expressions",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["factorization-linear"],
          masterySignals: "Student correctly factorizes quadratic numerators/denominators and simplifies 3+ fractions",
          estimatedQuestions: "6-7 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct factorizations of quadratic expressions",
                "Consistently applies difference of squares",
                "Correctly factors trinomials"
              ],
              qualitative: [
                "Recognizes difference of squares pattern: a²−b² = (a+b)(a−b)",
                "Factors trinomials correctly: x²+bx+c = (x+p)(x+q)",
                "Factors both numerator and denominator completely",
                "Cancels common binomial factors like (x−3)",
                "Handles sign differences: (a−b) = −(b−a)",
                "Verifies factorization by expanding mentally"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on which factoring method to use",
                "Recognizes patterns with prompting"
              ],
              qualitative: [
                "Can factor with guidance but not independently",
                "Recognizes difference of squares when pointed out",
                "Struggles with trinomial factoring",
                "Makes sign errors when factoring",
                "Needs hints to factor completely"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot factor quadratic expressions",
                "Multiple incorrect factorizations",
                "Does not recognize standard patterns"
              ],
              qualitative: [
                "Does not recognize difference of squares",
                "Cannot factor trinomials",
                "Does not understand relationship between factored and expanded forms",
                "Gives incorrect factors (e.g., x²−9 = (x−3)(x−3))",
                "Cannot proceed when quadratics appear in fractions"
              ]
            }
          },

          learningObjectives: [
            "Factor quadratic expressions using difference of squares",
            "Factor trinomials of form x²+bx+c",
            "Apply factorization to simplify fractions with quadratic numerators",
            "Apply factorization to simplify fractions with quadratic denominators",
            "Recognize and handle sign differences: (a−b) vs (b−a)"
          ],

          relevantFormulas: [
            "Difference of squares: a²−b² = (a+b)(a−b)",
            "Example: m²−4 = (m+2)(m−2)",
            "Example: v²−9 = (v+3)(v−3)",
            "Trinomial factoring: x²+bx+c = (x+p)(x+q) where pq=c and p+q=b",
            "Sign rule: (a−b) = −(b−a)",
            "Example: (2m²−4m)/(m²−4) = 2m(m−2)/((m+2)(m−2)) = 2m/(m+2)"
          ],

          availableTools: ["factoringVisualizer", "multiplicationGrid", "fractionBar"]
        }
      ]
    },

    learningObjectives: [
      "Factor linear expressions to reveal common factors",
      "Factor quadratic expressions using standard patterns",
      "Apply difference of squares and trinomial factoring",
      "Simplify complex algebraic fractions through factorization",
      "Recognize when factorization is necessary vs direct cancellation"
    ],

    keyFormulas: `
**Factorization Patterns:**
• Common factor: ax + ay = a(x+y)
• Difference of squares: a²−b² = (a+b)(a−b)
• Trinomials: x²+bx+c = (x+p)(x+q) where pq=c, p+q=b
• Sign rule: (a−b) = −(b−a)

**Key Principle:**
Always factor BOTH numerator and denominator completely before canceling
    `
  },

  // =================================================================
  // SUBTOPIC 3: MULTIPLICATION AND DIVISION
  // =================================================================

  's2-math-algebraic-fractions-mult-div': {
    displayName: 'Multiplying and Dividing Algebraic Fractions',
    topicName: 'multiplication and division of algebraic fractions',

    progressionStructure: {
      sections: [
        {
          id: "multiplying-algebraic-fractions",
          title: "Multiplying Algebraic Fractions",
          difficulty: "intermediate",
          prerequisites: ["factorization-linear"],
          masterySignals: "Student correctly multiplies 3+ algebraic fractions, simplifying efficiently by canceling before multiplying",
          estimatedQuestions: "5-6 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multiplications with efficient simplification",
                "Consistently cancels common factors before multiplying",
                "No errors in final answer"
              ],
              qualitative: [
                "Applies multiplication rule: (a/b)×(c/d) = (ac)/(bd)",
                "Factors expressions before multiplying when beneficial",
                "Cancels common factors diagonally (across numerators and denominators)",
                "Chooses efficient method (cancel first vs multiply then simplify)",
                "Simplifies final answer to lowest terms",
                "Handles complex expressions with factorization"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on canceling strategy",
                "Gets correct answer but uses inefficient method"
              ],
              qualitative: [
                "Knows multiplication rule but multiplies everything first",
                "Does not look for cancellation opportunities before multiplying",
                "Can cancel with prompting but doesn't do it independently",
                "Forgets to factor when it would help",
                "Makes occasional arithmetic errors in multiplication"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect answers",
                "Cannot complete multiplication problems",
                "Makes systematic errors"
              ],
              qualitative: [
                "Does not understand multiplication rule for fractions",
                "Tries to add numerators and denominators",
                "Cannot identify common factors to cancel",
                "Does not factor expressions when needed",
                "Gets lost in complex expressions",
                "Cannot simplify final answer"
              ]
            }
          },

          learningObjectives: [
            "Apply multiplication rule: (a/b)×(c/d) = (ac)/(bd)",
            "Cancel common factors diagonally before multiplying (more efficient)",
            "Factor numerators and denominators to reveal cancellation opportunities",
            "Simplify products of algebraic fractions to lowest terms",
            "Choose efficient strategies (cancel first vs multiply then simplify)"
          ],

          relevantFormulas: [
            "Multiplication: (a/b)×(c/d) = (ac)/(bd) where b,d ≠ 0",
            "Smart strategy: Factor and cancel BEFORE multiplying",
            "Example: (ab/c)×(4c/(6a²b)) = (4abc)/(6a²bc) = 2/(3ac)",
            "Can cancel factors across fractions: (a/b)×(b/c) = a/c"
          ],

          availableTools: ["fractionBar", "distributiveVisualizer"]
        },

        {
          id: "dividing-algebraic-fractions",
          title: "Dividing Algebraic Fractions",
          difficulty: "intermediate",
          prerequisites: ["multiplying-algebraic-fractions"],
          masterySignals: "Student correctly divides 3+ algebraic fractions by finding reciprocal and multiplying",
          estimatedQuestions: "5-6 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct divisions without hints",
                "Consistently finds reciprocal correctly",
                "Simplifies efficiently after converting to multiplication"
              ],
              qualitative: [
                "Understands division as multiplication by reciprocal",
                "Correctly flips second fraction (numerator ↔ denominator)",
                "Converts division to multiplication: (a/b)÷(c/d) = (a/b)×(d/c)",
                "Applies multiplication strategies after conversion",
                "Handles complex expressions with factorization",
                "Explains why division uses reciprocal"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on finding reciprocal",
                "Makes occasional errors flipping fractions"
              ],
              qualitative: [
                "Knows to find reciprocal but sometimes forgets",
                "Flips wrong fraction (first instead of second)",
                "Can complete division with guidance",
                "Needs reminding of Keep-Change-Flip method",
                "Makes errors after conversion to multiplication"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot perform division of fractions",
                "Multiple incorrect attempts",
                "Confused about reciprocals"
              ],
              qualitative: [
                "Does not understand concept of reciprocal",
                "Tries to divide numerators and denominators directly",
                "Cannot convert division to multiplication",
                "Confuses which fraction to flip",
                "Does not understand relationship between division and multiplication",
                "Cannot identify reciprocal of expressions like (2x+1)/3"
              ]
            }
          },

          learningObjectives: [
            "Understand reciprocal concept: reciprocal of a/b is b/a",
            "Convert division to multiplication: (a/b)÷(c/d) = (a/b)×(d/c)",
            "Apply Keep-Change-Flip (KCF) method",
            "Find reciprocals of algebraic expressions",
            "Simplify division problems by converting to multiplication"
          ],

          relevantFormulas: [
            "Division: (a/b)÷(c/d) = (a/b)×(d/c) where b,c,d ≠ 0",
            "Reciprocal of c/d is d/c",
            "Reciprocal of x is 1/x",
            "Keep-Change-Flip: keep first, change ÷ to ×, flip second",
            "Example: (p/q)÷(p²r/q²) = (p/q)×(q²/(p²r)) = q/(pr)"
          ],

          availableTools: ["fractionBar"]
        }
      ]
    },

    learningObjectives: [
      "Multiply algebraic fractions by multiplying numerators and denominators",
      "Divide algebraic fractions by multiplying by the reciprocal",
      "Cancel common factors efficiently before multiplying",
      "Factor expressions to reveal cancellation opportunities",
      "Simplify products and quotients to lowest terms"
    ],

    keyFormulas: `
**Multiplication:**
• (a/b)×(c/d) = (ac)/(bd)
• Smart: Cancel common factors BEFORE multiplying

**Division:**
• (a/b)÷(c/d) = (a/b)×(d/c)
• Keep-Change-Flip (KCF) method
• Reciprocal of a/b is b/a
    `
  },

  // =================================================================
  // SUBTOPIC 4: ADDITION AND SUBTRACTION
  // =================================================================

  's2-math-algebraic-fractions-add-subtract': {
    displayName: 'Adding and Subtracting Algebraic Fractions',
    topicName: 'addition and subtraction of algebraic fractions',

    progressionStructure: {
      sections: [
        {
          id: "finding-lcd",
          title: "Finding LCD for Algebraic Expressions",
          difficulty: "intermediate",
          prerequisites: ["simplifying-algebraic-fractions-basic"],
          masterySignals: "Student correctly finds LCD for 3+ pairs of algebraic denominators by factoring",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct LCD calculations",
                "Consistently factors denominators first",
                "Finds LCD efficiently"
              ],
              qualitative: [
                "Factors each denominator completely",
                "Lists all different factors",
                "Takes highest power of each factor",
                "Multiplies factors correctly to get LCD",
                "Recognizes when factoring simplifies LCD finding",
                "Can find LCD of expressions like (2b−4c) and (3b−6c)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on factoring",
                "Can find LCD of simple expressions"
              ],
              qualitative: [
                "Understands LCD concept but struggles with factoring",
                "Needs prompting to factor denominators first",
                "Sometimes multiplies all denominators instead of finding LCD",
                "Makes errors identifying different factors",
                "Can find LCD with guidance"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot find LCD",
                "Multiple incorrect attempts",
                "Just multiplies all denominators"
              ],
              qualitative: [
                "Does not understand what LCD means",
                "Does not factor denominators before finding LCD",
                "Cannot identify common factors",
                "Confuses LCD with product of denominators",
                "Cannot work with algebraic expressions as factors"
              ]
            }
          },

          learningObjectives: [
            "Factor algebraic denominators completely",
            "Identify all different factors in denominators",
            "Select highest power of each factor for LCD",
            "Calculate LCD by multiplying selected factors",
            "Recognize when expressions have common factors"
          ],

          relevantFormulas: [
            "LCD must be divisible by all denominators",
            "Factor denominators first to find LCD efficiently",
            "Example: LCD of 3a and 5a is 15a",
            "Example: LCD of 2(b−2c) and 3(b−2c) is 6(b−2c)",
            "Take highest power of each factor"
          ],

          availableTools: ["fractionBar", "algebraExpression", "factoringVisualizer"]
        },

        {
          id: "adding-subtracting-same-denominator",
          title: "Adding/Subtracting with Same Denominator",
          difficulty: "intermediate",
          prerequisites: ["finding-lcd"],
          masterySignals: "Student correctly adds/subtracts 3+ fractions with same denominator, simplifying result",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct without hints",
                "Consistently combines numerators correctly",
                "Simplifies results properly"
              ],
              qualitative: [
                "Adds/subtracts numerators while keeping denominator",
                "Handles negative signs correctly in subtraction",
                "Simplifies numerator after combining",
                "Factors and cancels if possible in final answer",
                "Understands why denominators must be the same"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on sign handling",
                "Makes occasional arithmetic errors in numerators"
              ],
              qualitative: [
                "Knows to combine numerators but makes sign errors",
                "Forgets to keep denominator unchanged",
                "Does not simplify final answer",
                "Needs reminding about negative sign distribution"
              ]
            },
            struggling: {
              quantitative: [
                "Tries to add denominators",
                "Multiple errors in numerator combinations",
                "Cannot complete problems"
              ],
              qualitative: [
                "Adds both numerators and denominators",
                "Does not understand addition/subtraction rules for fractions",
                "Makes systematic sign errors",
                "Cannot simplify algebraic expressions in numerator"
              ]
            }
          },

          learningObjectives: [
            "Add fractions with same denominator: (a/c)+(b/c) = (a+b)/c",
            "Subtract fractions with same denominator: (a/c)−(b/c) = (a−b)/c",
            "Handle negative signs correctly in subtraction",
            "Simplify numerator after combining",
            "Factor and cancel common factors in result if possible"
          ],

          relevantFormulas: [
            "Addition: (a/c)+(b/c) = (a+b)/c",
            "Subtraction: (a/c)−(b/c) = (a−b)/c",
            "Keep denominator unchanged",
            "Simplify numerator after combining",
            "Example: (2/3a)+(3/3a) = 5/(3a)"
          ],

          availableTools: ["fractionBar", "algebraExpression"]
        },

        {
          id: "adding-subtracting-different-denominators",
          title: "Adding/Subtracting with Different Denominators",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["finding-lcd", "adding-subtracting-same-denominator"],
          masterySignals: "Student correctly adds/subtracts 3+ fractions with different denominators, including those requiring factorization",
          estimatedQuestions: "6-7 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct without hints",
                "Consistently finds LCD correctly",
                "No errors in equivalent fraction conversion",
                "Simplifies results properly"
              ],
              qualitative: [
                "Finds LCD by factoring denominators when needed",
                "Converts each fraction to equivalent with LCD",
                "Combines numerators correctly",
                "Handles sign differences: (a−b) = −(b−a)",
                "Simplifies final answer to lowest terms",
                "Can explain each step of the process",
                "Works systematically through complex problems"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with 1-2 hints on LCD or conversion",
                "Makes occasional errors in conversion or signs"
              ],
              qualitative: [
                "Understands process but makes errors in execution",
                "Can find LCD with prompting",
                "Makes sign errors when dealing with (a−b) vs (b−a)",
                "Forgets to simplify final answer",
                "Needs guidance with complex denominators"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot find LCD independently",
                "Multiple errors in conversion",
                "Cannot complete multi-step problems"
              ],
              qualitative: [
                "Does not understand need for common denominator",
                "Tries to add fractions without converting",
                "Cannot factor denominators to find LCD",
                "Makes systematic sign errors",
                "Confused by expressions like (2k−h) vs (h−2k)",
                "Cannot convert to equivalent fractions",
                "Gets overwhelmed by algebraic expressions"
              ]
            }
          },

          learningObjectives: [
            "Find LCD of different algebraic denominators",
            "Convert fractions to equivalent fractions with LCD",
            "Handle sign differences: (a−b) = −(b−a)",
            "Combine numerators after conversion",
            "Simplify final answer including factoring if possible",
            "Work through complex multi-step problems systematically"
          ],

          relevantFormulas: [
            "Process: Find LCD → Convert each fraction → Combine → Simplify",
            "Sign rule: (a−b) = −(b−a), so 1/(a−b) = −1/(b−a)",
            "Example: (2/3a)+(3/5a) = (10/15a)+(9/15a) = 19/(15a)",
            "Example with factoring: (3/(2b−4c))+(2/(3b−6c))",
            "  Factor: 2(b−2c) and 3(b−2c), LCD = 6(b−2c)"
          ],

          availableTools: ["fractionBar", "factoringVisualizer", "algebraExpression"]
        }
      ]
    },

    learningObjectives: [
      "Find LCD of algebraic denominators through factorization",
      "Add and subtract fractions with same denominators",
      "Add and subtract fractions with different denominators",
      "Handle sign differences and negative expressions",
      "Simplify complex algebraic fractions involving addition/subtraction"
    ],

    keyFormulas: `
**Same Denominator:**
• (a/c)+(b/c) = (a+b)/c
• (a/c)−(b/c) = (a−b)/c

**Different Denominators:**
1. Find LCD (factor denominators first)
2. Convert each to equivalent fraction with LCD
3. Add/subtract numerators
4. Simplify result

**Sign Rule:** (a−b) = −(b−a)
    `
  },

  // =================================================================
  // SUBTOPIC 5: EQUATIONS AND FORMULAE
  // =================================================================

  's2-math-algebraic-fractions-equations-formulae': {
    displayName: 'Solving Equations and Manipulating Formulae',
    topicName: 'equations and formula manipulation',

    progressionStructure: {
      sections: [
        {
          id: "solving-equations-fractions",
          title: "Solving Equations with Fractions",
          difficulty: "advanced",
          prerequisites: ["adding-subtracting-different-denominators"],
          masterySignals: "Student correctly solves 3+ equations with fractions using LCD multiplication method",
          estimatedQuestions: "6-7 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions without hints",
                "Consistently uses efficient method (multiply by LCD)",
                "No errors in solving resulting equations"
              ],
              qualitative: [
                "Identifies LCD of all fractions in equation",
                "Multiplies every term by LCD to clear fractions",
                "Solves resulting linear equation correctly",
                "Checks solution doesn't make denominators zero",
                "Can use both methods but chooses efficient one",
                "Explains why multiplying by LCD eliminates fractions"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on finding LCD",
                "Can solve but uses less efficient method"
              ],
              qualitative: [
                "Understands one method but not both",
                "Makes errors when multiplying by LCD",
                "Forgets to multiply all terms",
                "Does not check if solution makes denominators zero",
                "Can solve with guidance but lacks independence"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot solve equations with fractions",
                "Multiple errors in process",
                "Gets stuck after clearing fractions"
              ],
              qualitative: [
                "Does not understand how to clear fractions",
                "Cannot find LCD of all terms",
                "Makes errors multiplying by LCD",
                "Cannot solve resulting equation",
                "Does not understand why solution might be invalid",
                "Confused about when to use which method"
              ]
            }
          },

          learningObjectives: [
            "Identify LCD of all fractions in an equation",
            "Multiply all terms by LCD to eliminate fractions (efficient method)",
            "Solve equations by converting to equivalent fractions then combining (alternative method)",
            "Solve resulting linear equations",
            "Check solutions are valid (denominators ≠ 0)",
            "Choose efficient solving strategies"
          ],

          relevantFormulas: [
            "Method 2 (Faster): Multiply all terms by LCD",
            "Example: (a−2)/5 + (a−1)/3 = 1",
            "  LCD = 15, multiply: 15×(a−2)/5 + 15×(a−1)/3 = 15×1",
            "  Simplifies to: 3(a−2) + 5(a−1) = 15",
            "Always check: solution must not make any denominator zero"
          ],

          availableTools: ["balanceScale", "fractionBar"]
        },

        {
          id: "changing-subject-formula",
          title: "Changing the Subject of a Formula",
          difficulty: "advanced",
          prerequisites: ["solving-equations-fractions"],
          masterySignals: "Student correctly rearranges 3+ formulae to make different variables the subject",
          estimatedQuestions: "6-7 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct rearrangements without hints",
                "Handles formulas with fractions confidently",
                "Successfully isolates variables in denominators"
              ],
              qualitative: [
                "Understands that subject must be alone with coefficient 1",
                "Uses inverse operations systematically",
                "Multiplies by LCD when variable is in denominator",
                "Handles square roots and squares correctly",
                "Can rearrange complex formulas like 1/f = 1/u + 1/v",
                "Verifies final form has desired variable as subject",
                "Explains reasoning for each step"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on which operation to use",
                "Can do simple rearrangements but struggles with complex ones"
              ],
              qualitative: [
                "Understands concept but uncertain about steps",
                "Needs prompting for inverse operations",
                "Makes errors when variable is in denominator",
                "Forgets to ensure coefficient is 1",
                "Can complete with guidance but not independently"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot rearrange formulae",
                "Multiple errors in process",
                "Gets stuck when variable is in denominator"
              ],
              qualitative: [
                "Does not understand what 'subject' means",
                "Does not know inverse operations",
                "Cannot clear fractions when variable is in denominator",
                "Makes systematic errors with operations",
                "Does not understand balance concept (same to both sides)",
                "Cannot handle formulas with multiple occurrences of variable"
              ]
            }
          },

          learningObjectives: [
            "Understand what it means to make a variable the subject",
            "Use inverse operations to isolate variables",
            "Clear fractions by multiplying by LCD",
            "Handle variables in denominators",
            "Handle squares and square roots",
            "Ensure final form has coefficient of 1 for subject"
          ],

          relevantFormulas: [
            "Inverse operations:",
            "  +a ↔ −a, ×a ↔ ÷a, square ↔ square root",
            "Example: Make v subject of 1/f = 1/u + 1/v",
            "  Step 1: 1/v = 1/f − 1/u",
            "  Step 2: 1/v = (u−f)/(fu)  [find LCD]",
            "  Step 3: v = fu/(u−f)  [take reciprocal]",
            "Always work systematically: isolate → clear fractions → simplify"
          ],

          availableTools: ["balanceScale"]
        },

        {
          id: "finding-unknowns-formulae",
          title: "Finding Unknowns in Formulae",
          difficulty: "advanced",
          prerequisites: ["changing-subject-formula"],
          masterySignals: "Student correctly finds unknown values in formulae by substituting and rearranging in 3+ problems",
          estimatedQuestions: "5-6 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions",
                "Accurately substitutes given values",
                "Correctly rearranges and solves"
              ],
              qualitative: [
                "Substitutes known values correctly into formula",
                "Rearranges to isolate unknown variable",
                "Solves resulting equation accurately",
                "Checks solution is in valid domain (no negative square roots, no division by zero)",
                "Can decide whether to rearrange first or substitute first",
                "Explains reasoning and shows clear working"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on substitution or rearrangement order",
                "Makes occasional arithmetic errors"
              ],
              qualitative: [
                "Can substitute values but struggles with rearranging",
                "Needs prompting on which step to do first",
                "Makes errors in solving resulting equations",
                "Forgets to check domain validity",
                "Can complete with guidance"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot find unknowns in formulae",
                "Multiple errors in substitution or solving",
                "Does not understand the process"
              ],
              qualitative: [
                "Confuses variables and given values",
                "Cannot substitute correctly",
                "Does not know when to rearrange vs substitute",
                "Cannot solve equations after substitution",
                "Does not understand domain restrictions",
                "Gets overwhelmed by multi-step problems"
              ]
            }
          },

          learningObjectives: [
            "Substitute known values into formulae correctly",
            "Rearrange formula to isolate unknown variable",
            "Solve resulting equations",
            "Check solutions are in valid domain",
            "Decide efficient order of operations (rearrange first vs substitute first)",
            "Verify answers make sense in context"
          ],

          relevantFormulas: [
            "Process: Identify known and unknown → Substitute OR rearrange → Solve → Check domain",
            "Example: Given y = √(64/(3x+1)), find x when y = 2",
            "  Square both sides: 4 = 64/(3x+1)",
            "  Multiply: 4(3x+1) = 64",
            "  Solve: 12x+4 = 64, 12x = 60, x = 5",
            "Domain check: 3x+1 ≠ 0, and radicand ≥ 0"
          ],

          availableTools: ["balanceScale"]
        }
      ]
    },

    learningObjectives: [
      "Solve equations involving algebraic fractions efficiently",
      "Change the subject of formulae by systematic rearrangement",
      "Find unknown values in formulae by substitution and solving",
      "Check solutions are valid (domain restrictions)",
      "Use inverse operations correctly",
      "Handle variables in denominators and under square roots"
    ],

    keyFormulas: `
**Solving Equations:**
• Method: Multiply all terms by LCD to clear fractions
• Check: Solution must not make denominators zero

**Changing Subject:**
• Use inverse operations: +↔−, ×↔÷, square↔√
• If variable in denominator: multiply by LCD first
• Subject must be alone with coefficient 1

**Inverse Operations:**
+a ↔ −a, ×a ↔ ÷a, x² ↔ √x, 1/x ↔ x
    `
  }
};
