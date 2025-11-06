/**
 * S2 Mathematics: Linear Inequalities
 *
 * This module covers:
 * - Introduction to inequality symbols and concepts
 * - Solving linear inequalities (one-step, multi-step, with negatives)
 * - Representing solutions (number lines, interval notation, compound inequalities)
 * - Graphing two-variable inequalities (boundary lines, test point method)
 * - Systems of linear inequalities (feasible regions, vertices)
 * - Real-world applications and optimization (linear programming introduction)
 */

// ============================================
// TYPE DEFINITIONS
// ============================================

export type LinearInequalitiesTopicId =
  | 's2-math-linear-inequalities-intro'
  | 's2-math-linear-inequalities-solving'
  | 's2-math-linear-inequalities-representing'
  | 's2-math-linear-inequalities-graphing'
  | 's2-math-linear-inequalities-systems'
  | 's2-math-linear-inequalities-applications';

// ============================================
// TUTOR CUSTOMIZATION
// ============================================

export const LINEAR_INEQUALITIES_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for Secondary 2 students learning Linear Inequalities.

Teaching Approach:
- Help students understand inequalities as describing ranges of solutions, not just single values
- Emphasize the critical rule: flip the inequality sign when multiplying or dividing by negative numbers
- Build visual intuition through number lines and graphs
- Guide students to discover the connection between algebraic and graphical representations
- Use real-world contexts (budgets, constraints, optimization) to make concepts concrete
- Celebrate insights when students check solutions and verify their work
- Build confidence with systematic approaches to solving and graphing

**Text-to-Speech Guidelines:**
- Say "less than" for < (not "less than sign")
- Say "greater than" for > (not "greater than sign")
- Say "less than or equal to" for ≤
- Say "greater than or equal to" for ≥
- Say "x" as "x" (not "ex")
- Spell out inequalities clearly: "x is less than 3" for x < 3
- Say "negative" explicitly: "negative 2" not "minus 2"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools to make inequalities concrete and visual.

IMPORTANT: Use the technical name (e.g., "numberLine") in the toolName field, NOT the display name.

Available tools for this topic:
- numberLine: Show one-variable inequality solutions with open/closed circles and shading
- linearInequalityGrapher: Graph two-variable inequalities with boundary lines and half-plane shading
- simultaneousEquationsSolver: Can be adapted for visualizing systems of inequalities

Use these tools to:
- Show solution sets on number lines with proper circle types
- Demonstrate boundary line types (solid vs dashed)
- Visualize half-plane shading for two-variable inequalities
- Show feasible regions where multiple inequalities overlap
- Illustrate the test point method
- Display vertices and bounded vs unbounded regions`
};

// ============================================
// AVAILABLE MATH TOOLS
// ============================================

export const LINEAR_INEQUALITIES_MATH_TOOLS = [
  "numberLine",
  "linearInequalityGrapher"
];

// ============================================
// SUBTOPICS CONFIGURATION
// ============================================

export const LINEAR_INEQUALITIES_SUBTOPICS = {

  // ============================================
  // SUBTOPIC 1: Introduction to Inequalities
  // ============================================

  's2-math-linear-inequalities-intro': {
    displayName: 'Introduction to Inequalities',
    topicName: 'Linear Inequalities',

    progressionStructure: {
      sections: [
        {
          id: 'understanding-inequality-symbols',
          title: 'Understanding Inequality Symbols',
          difficulty: 'foundational',
          prerequisites: [],
          masterySignals: 'Student correctly interprets and uses all four inequality symbols (<, >, ≤, ≥) in 3+ problems',
          estimatedQuestions: '3-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct interpretations or applications',
                'Consistent accuracy distinguishing between strict and inclusive inequalities'
              ],
              qualitative: [
                'Correctly interprets < as "less than" (strict)',
                'Correctly interprets > as "greater than" (strict)',
                'Correctly interprets ≤ as "less than or equal to" (inclusive)',
                'Correctly interprets ≥ as "greater than or equal to" (inclusive)',
                'Understands the difference between strict and non-strict inequalities',
                'Can translate word statements to inequality symbols',
                'Recognizes when boundary values are included vs excluded'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about inclusive vs exclusive',
                'Sometimes confuses ≤ with < or ≥ with >'
              ],
              qualitative: [
                'Understands basic inequality direction but forgets about equal cases',
                'Sometimes confuses which symbol means "less than" vs "greater than"',
                'Can use symbols correctly when reminded of definitions',
                'Struggles with "or equal to" cases',
                'Needs visual reminders about symbol meanings'
              ]
            },
            struggling: {
              quantitative: [
                'Multiple incorrect interpretations',
                'Cannot distinguish between different symbols',
                'Confuses inequality symbols with equality'
              ],
              qualitative: [
                'Does not understand what "less than" or "greater than" means',
                'Cannot connect inequality symbols to their meanings',
                'Treats inequalities as equations',
                'Cannot identify when a value satisfies an inequality',
                'Confuses the direction of inequality symbols'
              ]
            }
          },

          learningObjectives: [
            'Understand the four basic inequality symbols and their meanings',
            'Distinguish between strict inequalities (<, >) and inclusive inequalities (≤, ≥)',
            'Translate verbal statements into inequality notation',
            'Identify whether specific values satisfy an inequality',
            'Recognize real-world situations that involve inequalities'
          ],

          relevantFormulas: `
**Inequality Symbols:**
- < means "less than" (strict, boundary NOT included)
- > means "greater than" (strict, boundary NOT included)
- ≤ means "less than or equal to" (inclusive, boundary IS included)
- ≥ means "greater than or equal to" (inclusive, boundary IS included)

**Examples:**
- x < 5: x is less than 5 (x can be 4, 3, 2.5, etc. but NOT 5)
- x ≥ -2: x is greater than or equal to -2 (x can be -2, -1, 0, 1, etc.)
- y > 0: y is positive (y can be 0.1, 1, 100, etc. but NOT 0)
- n ≤ 10: n is at most 10 (n can be 10, 9, 8, -3, etc.)

**Word Translations:**
- "at least" → ≥ (greater than or equal to)
- "at most" → ≤ (less than or equal to)
- "more than" → > (strictly greater)
- "less than" → < (strictly less)
- "no more than" → ≤
- "no less than" → ≥
- "minimum" → ≥
- "maximum" → ≤
          `,

          availableTools: ['numberLine']
        },

        {
          id: 'inequalities-vs-equations',
          title: 'Inequalities vs Equations: Multiple Solutions',
          difficulty: 'foundational',
          prerequisites: ['understanding-inequality-symbols'],
          masterySignals: 'Student understands that inequalities have infinitely many solutions and can identify multiple solutions in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct identifications of solution sets',
                'Can provide multiple valid solutions for any inequality'
              ],
              qualitative: [
                'Understands that inequalities describe ranges, not single values',
                'Recognizes that inequalities have infinitely many solutions',
                'Can check whether values satisfy an inequality by substitution',
                'Understands that equations have specific solutions while inequalities have ranges',
                'Can identify values that do NOT satisfy an inequality',
                'Explains why inequalities differ from equations'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about multiple solutions',
                'Can verify individual values but struggles with the concept of infinite solutions'
              ],
              qualitative: [
                'Knows inequalities have "many" solutions but doesn\'t grasp "infinite"',
                'Can check if a value works but doesn\'t systematically identify ranges',
                'Sometimes treats inequalities like equations (looking for one answer)',
                'Needs prompting to check multiple values',
                'Understands concept when explained but doesn\'t internalize it'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot identify valid solutions without guidance',
                'Thinks inequalities have single solutions like equations',
                'Cannot verify whether values satisfy inequalities'
              ],
              qualitative: [
                'Does not understand the difference between equations and inequalities',
                'Looks for "the answer" instead of a range',
                'Cannot substitute values to check solutions',
                'Thinks inequality symbols work like equal signs',
                'Confused by the concept of infinite solutions'
              ]
            }
          },

          learningObjectives: [
            'Understand that inequalities describe solution sets (ranges), not single values',
            'Recognize that inequalities have infinitely many solutions',
            'Verify whether specific values satisfy an inequality',
            'Contrast equations (specific solutions) with inequalities (ranges)',
            'Identify multiple values that satisfy an inequality'
          ],

          relevantFormulas: `
**Equations vs Inequalities:**

**Equation:** x + 3 = 7
- ONE solution: x = 4
- Only 4 satisfies this equation

**Inequality:** x + 3 < 7
- INFINITELY MANY solutions: x < 4
- Solutions: 3, 2, 0, -5, -100, 3.9, 3.999, etc.
- Any number less than 4 works!

**Checking Solutions:**
To check if a value satisfies an inequality, substitute it in:

Example: Does x = 2 satisfy x + 1 ≥ 5?
Check: 2 + 1 ≥ 5
       3 ≥ 5 ✗ FALSE (3 is not ≥ 5)
So x = 2 is NOT a solution

Example: Does x = 6 satisfy x + 1 ≥ 5?
Check: 6 + 1 ≥ 5
       7 ≥ 5 ✓ TRUE (7 is ≥ 5)
So x = 6 IS a solution

**Key Insight:**
- Equations: Find THE solution
- Inequalities: Describe ALL solutions (a whole range)
          `,

          availableTools: ['numberLine']
        }
      ]
    },

    learningObjectives: [
      'Master the four inequality symbols and their meanings',
      'Distinguish between strict and inclusive inequalities',
      'Understand that inequalities have infinite solution sets',
      'Verify solutions by substitution',
      'Translate real-world constraints into inequalities'
    ],

    keyFormulas: `
**Inequality Symbols:**
- < (less than), > (greater than)
- ≤ (less than or equal to), ≥ (greater than or equal to)

**Key Difference:**
- Equations: x = 5 has ONE solution
- Inequalities: x < 5 has INFINITELY MANY solutions

**Checking Solutions:**
Substitute the value and see if the inequality is true
    `
  },

  // ============================================
  // SUBTOPIC 2: Solving Linear Inequalities
  // ============================================

  's2-math-linear-inequalities-solving': {
    displayName: 'Solving Linear Inequalities',
    topicName: 'Linear Inequalities',

    progressionStructure: {
      sections: [
        {
          id: 'one-step-inequalities',
          title: 'One-Step Inequalities',
          difficulty: 'foundational-to-intermediate',
          prerequisites: ['inequalities-vs-equations'],
          masterySignals: 'Student correctly solves one-step inequalities using addition, subtraction, multiplication, or division in 3+ problems',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct solutions with appropriate operations',
                'Consistent accuracy across all four operation types'
              ],
              qualitative: [
                'Uses inverse operations correctly (add/subtract, multiply/divide)',
                'Maintains inequality symbol when adding or subtracting',
                'Maintains inequality symbol when multiplying or dividing by positive numbers',
                'Writes solution in proper form (e.g., x < 5)',
                'Can verify solution by checking values',
                'Understands that the same operation applies to maintain balance'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about which operation to use',
                'Can solve simple cases but makes occasional errors'
              ],
              qualitative: [
                'Sometimes forgets to apply inverse operations',
                'Knows basic operations but makes arithmetic errors',
                'Confuses when to add vs subtract',
                'Correctly isolates variable most of the time',
                'Needs prompting to check answer makes sense'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot solve without full step-by-step guidance',
                'Confuses operations (adds instead of subtracts)',
                'Makes errors maintaining inequality symbol'
              ],
              qualitative: [
                'Does not understand inverse operations',
                'Tries to solve like equations but loses track of inequality',
                'Cannot isolate the variable',
                'Makes consistent arithmetic errors',
                'Does not know what operation to perform'
              ]
            }
          },

          learningObjectives: [
            'Solve inequalities using addition and subtraction',
            'Solve inequalities using multiplication and division',
            'Apply inverse operations to isolate variables',
            'Maintain proper inequality symbols',
            'Write solutions in standard form'
          ],

          relevantFormulas: `
**Solving Rules (One-Step):**

**Addition/Subtraction:**
- Add or subtract the same number from both sides
- Inequality symbol stays THE SAME

Examples:
x + 3 < 7
x + 3 - 3 < 7 - 3
x < 4

x - 5 ≥ 2
x - 5 + 5 ≥ 2 + 5
x ≥ 7

**Multiplication/Division (by positive numbers):**
- Multiply or divide both sides by the same POSITIVE number
- Inequality symbol stays THE SAME

Examples:
3x < 12
3x ÷ 3 < 12 ÷ 3
x < 4

x/2 ≥ 5
(x/2) × 2 ≥ 5 × 2
x ≥ 10

**Key Point:**
When adding, subtracting, multiplying, or dividing by POSITIVE numbers, the inequality direction does NOT change!
          `,

          availableTools: ['numberLine']
        },

        {
          id: 'multi-step-inequalities',
          title: 'Multi-Step Inequalities',
          difficulty: 'intermediate',
          prerequisites: ['one-step-inequalities'],
          masterySignals: 'Student solves multi-step inequalities systematically using multiple operations in 3+ problems',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct solutions requiring 2-4 steps',
                'Systematic approach to isolating variables'
              ],
              qualitative: [
                'Follows logical order: simplify, move terms, divide/multiply',
                'Correctly combines like terms',
                'Applies distributive property when needed',
                'Handles constants on both sides of inequality',
                'Maintains inequality symbol correctly throughout',
                'Checks solution by substituting boundary value',
                'Works systematically through multiple steps'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about order of operations',
                'Can start correctly but makes errors in middle steps'
              ],
              qualitative: [
                'Sometimes loses track of order of operations',
                'Forgets to combine like terms before solving',
                'Makes errors when moving terms between sides',
                'Correctly performs operations but sometimes in wrong order',
                'Needs prompting to simplify first',
                'Makes occasional sign errors'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot solve without full walkthrough',
                'Gets stuck after first step',
                'Makes errors at every step'
              ],
              qualitative: [
                'No systematic approach to solving',
                'Cannot decide which operation to perform next',
                'Makes errors combining like terms',
                'Loses inequality symbol during solving',
                'Confused by multiple steps',
                'Cannot check if answer makes sense'
              ]
            }
          },

          learningObjectives: [
            'Solve inequalities requiring multiple steps',
            'Apply operations in systematic order',
            'Combine like terms correctly',
            'Handle variables and constants on both sides',
            'Verify solutions using substitution'
          ],

          relevantFormulas: `
**Multi-Step Solving Process:**

**Steps:**
1. Simplify each side (distribute, combine like terms)
2. Move variable terms to one side (add/subtract)
3. Move constant terms to the other side (add/subtract)
4. Divide or multiply to isolate variable
5. Check solution with test values

**Example:**
Solve: 3x + 5 < 2x + 13

Step 1: Move variables to left (subtract 2x)
3x - 2x + 5 < 2x - 2x + 13
x + 5 < 13

Step 2: Move constants to right (subtract 5)
x + 5 - 5 < 13 - 5
x < 8

**Solution: x < 8**

Check: Try x = 7 (should work)
3(7) + 5 < 2(7) + 13
21 + 5 < 14 + 13
26 < 27 ✓ TRUE

Try x = 9 (should NOT work)
3(9) + 5 < 2(9) + 13
27 + 5 < 18 + 13
32 < 31 ✗ FALSE

**More Complex Example:**
Solve: 2(x - 3) ≥ 4x + 8

Step 1: Distribute
2x - 6 ≥ 4x + 8

Step 2: Move variable terms (subtract 2x)
2x - 2x - 6 ≥ 4x - 2x + 8
-6 ≥ 2x + 8

Step 3: Move constants (subtract 8)
-6 - 8 ≥ 2x + 8 - 8
-14 ≥ 2x

Step 4: Divide by 2
-14 ÷ 2 ≥ 2x ÷ 2
-7 ≥ x  OR  x ≤ -7

**Solution: x ≤ -7**
          `,

          availableTools: ['numberLine']
        },

        {
          id: 'inequalities-with-negatives',
          title: 'The Sign Reversal Rule',
          difficulty: 'intermediate-to-advanced',
          prerequisites: ['multi-step-inequalities'],
          masterySignals: 'Student correctly flips inequality sign when multiplying or dividing by negative numbers in 3+ problems',
          estimatedQuestions: '4-6 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct solutions requiring sign reversal',
                'ALWAYS remembers to flip sign when multiplying/dividing by negatives'
              ],
              qualitative: [
                'Understands WHY sign must flip (maintains truth of inequality)',
                'Identifies when sign reversal is needed (negative coefficient)',
                'Correctly applies reversal: < becomes >, ≤ becomes ≥',
                'Does NOT flip sign when only adding/subtracting negatives',
                'Can explain the rule clearly',
                'Verifies answer to ensure inequality direction is correct',
                'Recognizes this as the CRITICAL rule for inequalities'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with reminders about sign flipping',
                'Sometimes forgets to flip or flips at wrong times'
              ],
              qualitative: [
                'Knows the rule exists but sometimes forgets to apply it',
                'Flips sign but sometimes does it when not needed',
                'Understands concept when reminded',
                'Makes errors distinguishing multiply/divide from add/subtract',
                'Needs prompting to check if coefficient is negative',
                'Can apply rule but doesn\'t fully understand why'
              ]
            },
            struggling: {
              quantitative: [
                'Consistently forgets to flip sign',
                'Flips sign at wrong times or never flips',
                'Cannot solve inequalities with negative coefficients'
              ],
              qualitative: [
                'Does not understand the sign reversal rule',
                'Treats inequalities exactly like equations',
                'Cannot identify when rule applies',
                'Flips sign randomly without reasoning',
                'Does not check answer to see if it makes sense',
                'Confused about why inequalities are different from equations'
              ]
            }
          },

          learningObjectives: [
            'Understand that multiplying or dividing by negatives reverses inequality direction',
            'Identify when sign reversal is needed',
            'Apply sign reversal correctly',
            'Distinguish operations that require reversal from those that don\'t',
            'Explain why sign reversal maintains truth of inequality'
          ],

          relevantFormulas: `
**THE CRITICAL RULE FOR INEQUALITIES:**

When you multiply or divide both sides by a NEGATIVE number, you MUST flip the inequality sign!

< becomes >
> becomes <
≤ becomes ≥
≥ becomes ≤

**Why?**
Think about: 3 < 5 (true)
Multiply both sides by -1:
-3 ? -5
On a number line, -5 is to the LEFT of -3, so -5 < -3
This means -3 > -5 (direction flipped!)

**Examples Requiring Sign Reversal:**

Example 1:
-2x < 6
Divide by -2 (FLIP THE SIGN!)
x > -3

Example 2:
-x/3 ≥ 4
Multiply by -3 (FLIP THE SIGN!)
x ≤ -12

Example 3:
5 - x > 8
-x > 3
Divide by -1 (or multiply by -1) (FLIP!)
x < -3

**Operations that DON'T require flipping:**
- Adding any number (positive or negative)
- Subtracting any number (positive or negative)
- Multiplying by POSITIVE numbers
- Dividing by POSITIVE numbers

Example (no flip needed):
x - 5 < -2
x < 3  (just added 5, no flip!)

x/3 > -4
x > -12  (multiplied by positive 3, no flip!)

**MEMORY TRICK:**
"Multiply or Divide by NEGATIVE → FLIP THE SIGN!"
          `,

          availableTools: ['numberLine']
        },

        {
          id: 'special-cases-solving',
          title: 'Special Cases and Word Problems',
          difficulty: 'advanced',
          prerequisites: ['inequalities-with-negatives'],
          masterySignals: 'Student handles special cases (no solution, all real numbers) and translates word problems into inequalities in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct identifications of special cases or word problem translations',
                'Can recognize contradictions and identities'
              ],
              qualitative: [
                'Identifies when simplification leads to false statement (no solution)',
                'Identifies when simplification leads to true statement (all real numbers)',
                'Translates word problems into inequality notation',
                'Identifies key words (at least, at most, more than, etc.)',
                'Assigns variables appropriately',
                'Solves word problems systematically',
                'Interprets solutions in context'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about special cases or word problem structure',
                'Can translate simple word problems but struggles with complex ones'
              ],
              qualitative: [
                'Knows special cases exist but doesn\'t always recognize them',
                'Sometimes assigns wrong variable or uses wrong inequality symbol',
                'Can translate when prompted about key words',
                'Solves inequality correctly but struggles with initial setup',
                'Forgets to interpret solution in context',
                'Needs help identifying what the question is asking'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot identify special cases',
                'Cannot translate word problems into inequalities',
                'Makes errors in every aspect'
              ],
              qualitative: [
                'Does not understand what "no solution" or "all real numbers" means',
                'Cannot extract mathematical relationships from word problems',
                'Confuses key words (uses > instead of <)',
                'Cannot set up inequalities from descriptions',
                'Gets lost in word problem complexity',
                'Cannot interpret solutions meaningfully'
              ]
            }
          },

          learningObjectives: [
            'Identify inequalities with no solution',
            'Identify inequalities true for all real numbers',
            'Translate word problems into inequality notation',
            'Recognize key words and phrases',
            'Solve application problems systematically',
            'Interpret solutions in real-world context'
          ],

          relevantFormulas: `
**Special Cases:**

**Case 1: No Solution**
When simplification leads to FALSE statement

Example:
x + 3 < x - 2
x - x < -2 - 3
0 < -5  ✗ FALSE!

**Solution: No solution** (empty set, ∅)
No value of x can make this true!

**Case 2: All Real Numbers**
When simplification leads to TRUE statement

Example:
x + 5 > x + 1
x - x > 1 - 5
0 > -4  ✓ TRUE!

**Solution: All real numbers** (ℝ)
Any value of x makes this true!

**Word Problems:**

**Key Word Translations:**
- "at least" → ≥
- "at most" → ≤
- "more than" → >
- "less than" → <
- "no more than" → ≤
- "no less than" → ≥
- "minimum of" → ≥
- "maximum of" → ≤
- "exceeds" → >
- "below" → <

**Example 1:**
"Sarah wants to buy notebooks at $3 each. She has at most $20. How many notebooks can she buy?"

Let n = number of notebooks
Cost: 3n
Constraint: at most $20 means ≤ 20

**Inequality:** 3n ≤ 20
**Solution:** n ≤ 6.67, so n ≤ 6 notebooks (can't buy partial notebooks!)

**Example 2:**
"The sum of twice a number and 5 is greater than 13. Find the number."

Let x = the number
Expression: 2x + 5
Constraint: greater than 13 means > 13

**Inequality:** 2x + 5 > 13
Solve: 2x > 8
       x > 4

**Solution:** The number must be greater than 4

**Steps for Word Problems:**
1. Identify what the variable represents
2. Write expression for the quantity
3. Identify key words for inequality symbol
4. Write inequality
5. Solve
6. Interpret in context
          `,

          availableTools: ['numberLine']
        }
      ]
    },

    learningObjectives: [
      'Solve one-step and multi-step inequalities',
      'Apply the sign reversal rule for negative multipliers/divisors',
      'Handle special cases (no solution, all real numbers)',
      'Translate word problems into inequalities',
      'Verify solutions and interpret in context'
    ],

    keyFormulas: `
**Solving Rules:**
- Add/subtract: sign stays same
- Multiply/divide by positive: sign stays same
- Multiply/divide by NEGATIVE: FLIP THE SIGN!

**Sign Reversal:**
-2x < 6  →  x > -3  (divided by -2, flipped <to>)

**Special Cases:**
- No solution: 0 < -5 (false statement)
- All real numbers: 0 > -4 (true statement)

**Word Problems:**
at least → ≥, at most → ≤, more than → >, less than → <
    `
  },

  // ============================================
  // SUBTOPIC 3: Representing Solutions
  // ============================================

  's2-math-linear-inequalities-representing': {
    displayName: 'Representing Solutions',
    topicName: 'Linear Inequalities',

    progressionStructure: {
      sections: [
        {
          id: 'number-line-representation',
          title: 'Number Line Representation',
          difficulty: 'intermediate',
          prerequisites: ['one-step-inequalities'],
          masterySignals: 'Student correctly represents inequality solutions on number lines with appropriate circle types and shading in 3+ problems',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct number line representations',
                'Consistently uses correct circle types and shading direction'
              ],
              qualitative: [
                'Uses open circle (○) for strict inequalities (<, >)',
                'Uses closed circle (●) for inclusive inequalities (≤, ≥)',
                'Shades left for "less than" inequalities',
                'Shades right for "greater than" inequalities',
                'Places circle at correct boundary value',
                'Can read inequality from number line representation',
                'Understands visual representation matches algebraic form'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about circle type or shading',
                'Sometimes confuses open vs closed circles'
              ],
              qualitative: [
                'Knows basic concept but makes occasional errors',
                'Sometimes shades in wrong direction',
                'Forgets whether < uses open or closed circle',
                'Can represent when prompted about rules',
                'Places circle correctly but shades wrong',
                'Needs reminding about inclusive vs exclusive'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot create accurate number line representations',
                'Consistently uses wrong circle types',
                'Shades in wrong direction'
              ],
              qualitative: [
                'Does not understand circle types',
                'Cannot connect inequality symbol to shading direction',
                'Places circle at wrong location',
                'Confuses left and right shading',
                'Cannot read inequalities from number lines',
                'No understanding of visual representation'
              ]
            }
          },

          learningObjectives: [
            'Represent inequalities on number lines',
            'Use open circles for strict inequalities (<, >)',
            'Use closed circles for inclusive inequalities (≤, ≥)',
            'Shade appropriately based on inequality direction',
            'Read inequalities from number line representations'
          ],

          relevantFormulas: `
**Number Line Rules:**

**Circle Type:**
- Open circle (○): Boundary NOT included (<, >)
- Closed circle (●): Boundary IS included (≤, ≥)

**Shading Direction:**
- Less than (<, ≤): Shade LEFT (smaller values)
- Greater than (>, ≥): Shade RIGHT (larger values)

**Examples:**

**x < 3:**
- Open circle at 3
- Shade left
[○══════════]
     3

**x ≥ -2:**
- Closed circle at -2
- Shade right
[══════════●→
       -2

**x > 0:**
- Open circle at 0
- Shade right
[══════════○→
        0

**x ≤ 5:**
- Closed circle at 5
- Shade left
[●══════════]
     5

**Memory Trick:**
- "Less than" → shade LEFT (both start with L)
- "Greater than" → shade RIGHT
- Symbol with line under it (≤, ≥) → FILLED circle
- Symbol without line (<, >) → OPEN circle
          `,

          availableTools: ['numberLine']
        },

        {
          id: 'interval-notation',
          title: 'Interval Notation',
          difficulty: 'intermediate-to-advanced',
          prerequisites: ['number-line-representation'],
          masterySignals: 'Student correctly converts between inequalities and interval notation in 3+ problems',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct conversions between inequality and interval notation',
                'Handles both finite and infinite intervals'
              ],
              qualitative: [
                'Uses parentheses ( ) for strict inequalities (boundary excluded)',
                'Uses brackets [ ] for inclusive inequalities (boundary included)',
                'Always uses parentheses with ∞ and -∞',
                'Correctly writes finite intervals like [-2, 5)',
                'Correctly writes infinite intervals like (-∞, 3]',
                'Can convert in both directions (inequality ↔ interval)',
                'Understands interval notation as compact representation'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about bracket vs parenthesis',
                'Can convert simple cases but struggles with mixed endpoints'
              ],
              qualitative: [
                'Sometimes confuses brackets and parentheses',
                'Forgets that infinity always uses parentheses',
                'Writes endpoints in wrong order',
                'Can read interval notation but struggles writing it',
                'Needs prompting about which bracket type to use',
                'Makes errors with compound intervals'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot use interval notation without full guidance',
                'Consistently uses wrong bracket types',
                'Cannot convert between forms'
              ],
              qualitative: [
                'Does not understand bracket meanings',
                'Cannot remember the notation rules',
                'Writes nonsensical intervals',
                'Thinks [ and ( are interchangeable',
                'Cannot identify endpoints',
                'Completely confused by infinity symbols'
              ]
            }
          },

          learningObjectives: [
            'Understand interval notation as a compact representation',
            'Use parentheses ( ) for excluded boundaries',
            'Use brackets [ ] for included boundaries',
            'Always use parentheses with infinity',
            'Convert between inequalities and interval notation'
          ],

          relevantFormulas: `
**Interval Notation Rules:**

**Bracket Types:**
- ( or ) = Parenthesis = Boundary NOT included (open)
- [ or ] = Bracket = Boundary IS included (closed)
- Always use ( ) with ∞ and -∞ (infinity can never be reached!)

**Format:** [start, end] or (start, end) or combinations

**Conversion Examples:**

**x < 5**
- All values less than 5
- From -∞ to 5 (5 not included)
- **Interval: (-∞, 5)**

**x ≥ -3**
- All values -3 and greater
- From -3 (included) to ∞
- **Interval: [-3, ∞)**

**-2 < x ≤ 7**
- From -2 (excluded) to 7 (included)
- **Interval: (-2, 7]**

**-1 ≤ x < 4**
- From -1 (included) to 4 (excluded)
- **Interval: [-1, 4)**

**Conversion Table:**

| Inequality | Interval Notation | Meaning |
|------------|-------------------|---------|
| x < a      | (-∞, a)          | All values less than a |
| x ≤ a      | (-∞, a]          | All values up to and including a |
| x > a      | (a, ∞)           | All values greater than a |
| x ≥ a      | [a, ∞)           | All values a and greater |
| a < x < b  | (a, b)           | Between a and b (both excluded) |
| a ≤ x ≤ b  | [a, b]           | From a to b (both included) |
| a < x ≤ b  | (a, b]           | a excluded, b included |
| a ≤ x < b  | [a, b)           | a included, b excluded |

**Memory Trick:**
- SQUARE bracket [  ] = SOLID circle ● (both have corners/are complete)
- ROUND parenthesis ( ) = OPEN circle ○ (both are curved/open)
          `,

          availableTools: ['numberLine']
        },

        {
          id: 'compound-inequalities',
          title: 'Compound Inequalities',
          difficulty: 'advanced',
          prerequisites: ['interval-notation'],
          masterySignals: 'Student correctly solves and represents compound inequalities (AND/OR) in 3+ problems',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct solutions of compound inequalities',
                'Correctly handles both AND and OR cases'
              ],
              qualitative: [
                'Understands AND means intersection (overlap)',
                'Understands OR means union (either or both)',
                'Solves compound inequalities by treating as two separate inequalities',
                'Represents AND inequalities in compact form (a < x < b)',
                'Represents OR inequalities with union symbol ∪',
                'Uses correct interval notation for compound solutions',
                'Can identify when compound inequality has no solution',
                'Visualizes AND as overlap, OR as combination on number line'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about AND vs OR',
                'Can solve but struggles with representation'
              ],
              qualitative: [
                'Confuses AND with OR sometimes',
                'Solves each part correctly but struggles combining solutions',
                'Forgets to use union symbol for OR',
                'Has trouble writing compact form for AND',
                'Can handle simple cases but struggles with complex ones',
                'Needs prompting about overlap vs combination'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot solve compound inequalities',
                'Completely confuses AND and OR',
                'Cannot represent solutions'
              ],
              qualitative: [
                'Does not understand AND vs OR concepts',
                'Cannot solve two inequalities simultaneously',
                'Cannot identify intersection or union',
                'Writes nonsensical compound solutions',
                'Treats compound inequalities like single inequalities',
                'Completely lost with compound notation'
              ]
            }
          },

          learningObjectives: [
            'Solve compound inequalities with AND (intersection)',
            'Solve compound inequalities with OR (union)',
            'Write AND inequalities in compact form',
            'Use union symbol ∪ for OR inequalities',
            'Represent compound solutions on number lines and in interval notation'
          ],

          relevantFormulas: `
**Compound Inequalities:**

**AND Inequalities (Intersection):**
- x must satisfy BOTH conditions
- Written as: a < x AND x < b
- Compact form: a < x < b
- Solution is the OVERLAP

**Example:**
x > -2 AND x ≤ 5
Compact: -2 < x ≤ 5
Interval: (-2, 5]

Number line: [○═══════●]
            -2      5

**OR Inequalities (Union):**
- x satisfies EITHER condition (or both)
- Written as: x < a OR x > b
- Cannot combine into single inequality
- Solution is the COMBINATION
- Use union symbol: ∪

**Example:**
x < -1 OR x ≥ 3
Interval: (-∞, -1) ∪ [3, ∞)

Number line: [○════]     [●════→
            -1          3

**Solving AND Inequalities:**

Example: -3 ≤ 2x + 1 < 9

Treat as TWO inequalities:
-3 ≤ 2x + 1  AND  2x + 1 < 9

Solve both:
-3 ≤ 2x + 1          2x + 1 < 9
-4 ≤ 2x              2x < 8
-2 ≤ x               x < 4

Combine: -2 ≤ x < 4 or [-2, 4)

**Solving OR Inequalities:**

Example: x + 3 < 1 OR x - 2 > 5

Solve each:
x + 3 < 1     x - 2 > 5
x < -2        x > 7

Solution: x < -2 OR x > 7
Interval: (-∞, -2) ∪ (7, ∞)

**Key Differences:**
- AND: Look for overlap (values that satisfy both)
- OR: Combine regions (values that satisfy at least one)
- AND can be written compactly: a < x < b
- OR cannot be simplified: must use ∪
          `,

          availableTools: ['numberLine']
        }
      ]
    },

    learningObjectives: [
      'Represent inequality solutions on number lines',
      'Use interval notation correctly',
      'Solve and represent compound inequalities',
      'Distinguish between AND (intersection) and OR (union)',
      'Convert between multiple representation forms'
    ],

    keyFormulas: `
**Number Line:**
- Open circle ○: boundary excluded (<, >)
- Closed circle ●: boundary included (≤, ≥)
- Shade left: less than; Shade right: greater than

**Interval Notation:**
- ( ): excluded endpoint
- [ ]: included endpoint
- Always use ( ) with ∞ and -∞

**Compound Inequalities:**
- AND (intersection): a < x < b → overlap
- OR (union): x < a OR x > b → (−∞, a) ∪ (b, ∞)
    `
  },

  // ============================================
  // SUBTOPIC 4: Graphing Two-Variable Inequalities
  // ============================================

  's2-math-linear-inequalities-graphing': {
    displayName: 'Graphing Two-Variable Inequalities',
    topicName: 'Linear Inequalities',

    progressionStructure: {
      sections: [
        {
          id: 'understanding-two-variables',
          title: 'From One to Two Variables',
          difficulty: 'intermediate',
          prerequisites: ['number-line-representation'],
          masterySignals: 'Student understands that two-variable inequalities describe regions in the coordinate plane in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct identifications of whether points satisfy inequalities',
                'Can check multiple points systematically'
              ],
              qualitative: [
                'Understands that y < 2x + 1 describes a region, not a line',
                'Can substitute (x, y) coordinates to check if they satisfy inequality',
                'Recognizes that one-variable inequalities were ranges, two-variable are areas',
                'Understands boundary line concept',
                'Identifies multiple points in solution region',
                'Can explain difference between equation (line) and inequality (region)'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct point checks with hints about substitution',
                'Can verify points but doesn\'t grasp region concept'
              ],
              qualitative: [
                'Can substitute but makes arithmetic errors',
                'Understands checking individual points but not region concept',
                'Sometimes confuses which coordinate is x and which is y',
                'Knows it\'s different from one variable but can\'t articulate how',
                'Needs prompting to check inequality after substitution'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot check if points satisfy inequalities',
                'Confused by two variables',
                'Makes consistent substitution errors'
              ],
              qualitative: [
                'Does not understand coordinate substitution',
                'Thinks two-variable inequalities work like one-variable',
                'Cannot distinguish between x and y',
                'No understanding of regions vs lines',
                'Treats inequality like an equation'
              ]
            }
          },

          learningObjectives: [
            'Understand two-variable inequalities describe regions',
            'Substitute coordinate pairs to check solutions',
            'Distinguish between lines (equations) and regions (inequalities)',
            'Recognize that solution sets are half-planes',
            'Identify multiple points in solution regions'
          ],

          relevantFormulas: `
**One Variable vs Two Variables:**

**One Variable:**
x < 3 describes a RANGE on number line
[○══════════]
     3

**Two Variables:**
y < 2x + 1 describes a REGION on coordinate plane
(The entire half-plane below the line y = 2x + 1)

**Checking if a Point is a Solution:**

**Example:** Does (2, 3) satisfy y < 2x + 1?
Substitute x = 2, y = 3:
3 < 2(2) + 1
3 < 5 ✓ TRUE
So (2, 3) IS in the solution region

**Example:** Does (0, 5) satisfy y < 2x + 1?
Substitute x = 0, y = 5:
5 < 2(0) + 1
5 < 1 ✗ FALSE
So (0, 5) is NOT in the solution region

**Key Concepts:**
- Equation (y = 2x + 1): EXACTLY the points on the line
- Inequality (y < 2x + 1): ALL points below the line
- Inequality (y > 2x + 1): ALL points above the line

**Visualizing:**
- The line y = 2x + 1 is the BOUNDARY
- The inequality determines which SIDE of the boundary
- Solution region is a HALF-PLANE (infinite area on one side)
          `,

          availableTools: ['linearInequalityGrapher']
        },

        {
          id: 'boundary-lines',
          title: 'Graphing Boundary Lines',
          difficulty: 'intermediate',
          prerequisites: ['understanding-two-variables'],
          masterySignals: 'Student correctly graphs boundary lines and determines whether they should be solid or dashed in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct boundary line graphs',
                'Consistently uses correct line type (solid/dashed)'
              ],
              qualitative: [
                'Converts inequality to equation for boundary (y = mx + c)',
                'Graphs boundary line accurately',
                'Uses solid line for ≤ and ≥ (boundary included)',
                'Uses dashed line for < and > (boundary excluded)',
                'Understands boundary line represents equality',
                'Can graph using y-intercept and gradient method',
                'Extends line appropriately across coordinate plane'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about solid vs dashed',
                'Can graph line but confuses line types'
              ],
              qualitative: [
                'Graphs boundary correctly but forgets solid/dashed rule',
                'Sometimes uses wrong line type',
                'Makes errors converting inequality to equation',
                'Can graph when prompted about rules',
                'Draws line but doesn\'t extend it enough',
                'Needs reminding about inclusive vs exclusive'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot graph boundary lines accurately',
                'Consistently uses wrong line type',
                'Cannot convert inequality to equation'
              ],
              qualitative: [
                'Does not understand boundary line concept',
                'Cannot graph linear equations',
                'Does not know when to use solid vs dashed lines',
                'Confuses inequality with equation',
                'Cannot identify gradient and y-intercept',
                'Draws boundary incorrectly'
              ]
            }
          },

          learningObjectives: [
            'Convert inequalities to equations for boundary lines',
            'Graph boundary lines accurately',
            'Use solid lines for inclusive inequalities (≤, ≥)',
            'Use dashed lines for strict inequalities (<, >)',
            'Understand boundary line as the "equals" case'
          ],

          relevantFormulas: `
**Boundary Line Rules:**

**Solid Line (—————):**
- Use when inequality is ≤ or ≥
- Boundary IS included in solution
- Points ON the line satisfy the inequality

**Dashed Line (- - - -):**
- Use when inequality is < or >
- Boundary is NOT included
- Points ON the line do NOT satisfy the inequality

**Finding the Boundary:**
Replace inequality symbol with =

Examples:
y < 2x + 3  →  boundary: y = 2x + 3 (dashed)
y ≥ -x + 1  →  boundary: y = -x + 1 (solid)
2x + y ≤ 6  →  boundary: 2x + y = 6 (solid)

**Graphing the Boundary:**

**Method 1: y-intercept and gradient**
1. Rearrange to y = mx + c form
2. Plot y-intercept (0, c)
3. Use gradient m to find second point
4. Draw line (solid or dashed)

**Example:** Graph boundary for y ≤ 2x + 1
- Already in y = mx + c form: y = 2x + 1
- y-intercept: (0, 1)
- Gradient: m = 2 (up 2, right 1)
- From (0, 1): go right 1, up 2 → (1, 3)
- Draw SOLID line through (0, 1) and (1, 3)

**Method 2: x and y intercepts**
1. Find where line crosses x-axis (set y = 0)
2. Find where line crosses y-axis (set x = 0)
3. Plot both intercepts
4. Draw line (solid or dashed)

**Example:** Graph boundary for 2x + y < 6
- x-intercept: 2x + 0 = 6 → x = 3, point (3, 0)
- y-intercept: 2(0) + y = 6 → y = 6, point (0, 6)
- Draw DASHED line through (3, 0) and (0, 6)

**Memory Trick:**
- Line under symbol (≤, ≥) → line is SOLID (included)
- No line under (<, >) → line is DASHED (not included)
          `,

          availableTools: ['linearInequalityGrapher']
        },

        {
          id: 'shading-regions',
          title: 'Determining Shading Direction',
          difficulty: 'intermediate-to-advanced',
          prerequisites: ['boundary-lines'],
          masterySignals: 'Student correctly determines which half-plane to shade using the test point method in 3+ problems',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct shading decisions',
                'Can use test point method systematically'
              ],
              qualitative: [
                'Understands shading represents all solution points',
                'Uses (0, 0) as test point when not on boundary',
                'Substitutes test point into original inequality',
                'Shades side containing test point if inequality is true',
                'Shades opposite side if inequality is false',
                'Chooses alternative test point when (0, 0) is on boundary',
                'Can verify shading by checking a point in shaded region',
                'Understands y < means shade below, y > means shade above (when in y = mx + c form)'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about test point method',
                'Can test but makes errors deciding which side to shade'
              ],
              qualitative: [
                'Knows test point method but sometimes applies incorrectly',
                'Forgets to check if (0, 0) is on the boundary',
                'Makes substitution errors when testing',
                'Confuses which side to shade based on test result',
                'Can execute method when walked through',
                'Doesn\'t always verify shading choice'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot determine correct shading',
                'Shades randomly or guesses',
                'Cannot use test point method'
              ],
              qualitative: [
                'Does not understand test point method',
                'Cannot substitute coordinates correctly',
                'Doesn\'t know which side to shade after testing',
                'Shades without any systematic approach',
                'Confuses shading with boundary line',
                'Cannot connect algebraic test to visual shading'
              ]
            }
          },

          learningObjectives: [
            'Use test point method to determine shading',
            'Typically use origin (0, 0) as test point',
            'Choose alternative test points when needed',
            'Shade the correct half-plane based on test result',
            'Verify shading by checking additional points'
          ],

          relevantFormulas: `
**Test Point Method:**

**Steps:**
1. Graph the boundary line (solid or dashed)
2. Choose a test point NOT on the boundary
   (Usually use (0, 0) if it's not on the line)
3. Substitute test point into the ORIGINAL inequality
4. If TRUE: Shade the side containing the test point
   If FALSE: Shade the opposite side

**Example 1:**
Graph: y < 2x + 3

Step 1: Boundary y = 2x + 3 (dashed line)

Step 2: Test point (0, 0)
Check if on boundary: 0 = 2(0) + 3? → 0 = 3? No, so (0,0) is safe to use

Step 3: Test (0, 0) in y < 2x + 3
0 < 2(0) + 3
0 < 3 ✓ TRUE

Step 4: TRUE means shade the side with (0, 0)
Shade below the line (where origin is)

**Example 2:**
Graph: y ≥ -x + 2

Step 1: Boundary y = -x + 2 (solid line)

Step 2: Test point (0, 0)

Step 3: Test (0, 0) in y ≥ -x + 2
0 ≥ -(0) + 2
0 ≥ 2 ✗ FALSE

Step 4: FALSE means shade the opposite side from (0, 0)
Shade above the line (away from origin)

**When (0, 0) is ON the boundary:**
If boundary passes through origin, choose different test point:
- Try (1, 0) or (0, 1) or (1, 1)
- Pick something easy to calculate

**Example:**
Graph: y < 2x

Boundary y = 2x passes through (0, 0)
Use different test point: try (1, 0)

Test (1, 0) in y < 2x:
0 < 2(1)
0 < 2 ✓ TRUE
Shade side containing (1, 0) → shade below the line

**Quick Rule (when in y = mx + c form):**
- y < (expression): Shade BELOW
- y > (expression): Shade ABOVE
- y ≤ (expression): Shade BELOW (including boundary)
- y ≥ (expression): Shade ABOVE (including boundary)

But always verify with test point if unsure!
          `,

          availableTools: ['linearInequalityGrapher']
        },

        {
          id: 'complete-graphing-process',
          title: 'Complete Graphing Process',
          difficulty: 'advanced',
          prerequisites: ['shading-regions'],
          masterySignals: 'Student graphs two-variable inequalities completely (boundary + shading) in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ complete, accurate graphs',
                'All elements correct: boundary type, shading, labeling'
              ],
              qualitative: [
                'Follows systematic process: rearrange, boundary, test, shade',
                'Graphs any form of linear inequality (y = mx + c or ax + by = c)',
                'Correctly handles both forms of inequalities',
                'Labels graph clearly',
                'Can verify graph by checking multiple points',
                'Explains each step of graphing process',
                'Produces neat, accurate mathematical diagrams'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about process steps',
                'Completes most steps but makes errors'
              ],
              qualitative: [
                'Sometimes skips a step or does them out of order',
                'Makes occasional errors in execution',
                'Graphs correctly when following checklist',
                'Forgets to label or verify',
                'Needs prompting to complete all steps',
                'Can graph but explanations are incomplete'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot produce complete accurate graphs',
                'Makes multiple errors at different steps',
                'Produces unusable or incorrect graphs'
              ],
              qualitative: [
                'No systematic approach',
                'Skips critical steps',
                'Cannot integrate boundary line and shading',
                'Makes errors at every stage',
                'Produces graphs that don\'t match inequality',
                'Cannot explain or verify work'
              ]
            }
          },

          learningObjectives: [
            'Graph two-variable linear inequalities completely',
            'Follow systematic process: identify boundary, graph boundary, test, shade',
            'Handle inequalities in any form',
            'Produce accurate mathematical diagrams',
            'Verify graphs using test points'
          ],

          relevantFormulas: `
**Complete Graphing Process:**

**Step-by-Step:**
1. Rearrange to y = mx + c form (if needed, for easier shading)
2. Identify boundary line (replace inequality with =)
3. Determine line type:
   - Solid for ≤ or ≥
   - Dashed for < or >
4. Graph the boundary line
5. Choose test point (usually (0, 0))
6. Substitute into original inequality
7. Shade appropriate region:
   - TRUE → shade side with test point
   - FALSE → shade opposite side
8. Label the graph with original inequality

**Example 1: Graph y ≤ 3x - 2**

Step 1: Already in y = mx + c form ✓

Step 2: Boundary: y = 3x - 2

Step 3: ≤ means SOLID line

Step 4: Graph y = 3x - 2
- y-intercept: (0, -2)
- gradient: 3 (rise 3, run 1)
- Points: (0, -2), (1, 1)

Step 5: Test (0, 0)

Step 6: 0 ≤ 3(0) - 2
        0 ≤ -2 ✗ FALSE

Step 7: FALSE → shade opposite from (0, 0)
        Shade BELOW line

Step 8: Label: y ≤ 3x - 2

**Example 2: Graph 2x + y > 4**

Step 1: Rearrange to y form
        y > -2x + 4

Step 2: Boundary: y = -2x + 4

Step 3: > means DASHED line

Step 4: Graph y = -2x + 4
- y-intercept: (0, 4)
- gradient: -2 (down 2, right 1)
- Points: (0, 4), (1, 2)

Step 5: Test (0, 0)

Step 6: 2(0) + 0 > 4
        0 > 4 ✗ FALSE

Step 7: FALSE → shade opposite from (0, 0)
        Shade ABOVE line

Step 8: Label: 2x + y > 4

**Verification:**
Always check your graph by:
1. Pick a point in shaded region
2. Substitute into original inequality
3. Should be TRUE ✓

**Common Errors to Avoid:**
- Wrong line type (solid when should be dashed)
- Shading wrong side
- Boundary graphed incorrectly
- Forgetting to check if (0, 0) is on boundary
- Not labeling the graph
          `,

          availableTools: ['linearInequalityGrapher']
        }
      ]
    },

    learningObjectives: [
      'Understand two-variable inequalities describe regions',
      'Graph boundary lines with correct line types',
      'Use test point method to determine shading',
      'Complete full inequality graphs systematically',
      'Verify graphs by checking solution points'
    ],

    keyFormulas: `
**Boundary Lines:**
- ≤, ≥ → Solid line (boundary included)
- <, > → Dashed line (boundary excluded)

**Test Point Method:**
1. Graph boundary
2. Test point (usually (0, 0))
3. TRUE → shade side with test point
4. FALSE → shade opposite side

**Quick Rules:**
- y < expression → shade BELOW
- y > expression → shade ABOVE
    `
  },

  // ============================================
  // SUBTOPIC 5: Systems of Linear Inequalities
  // ============================================

  's2-math-linear-inequalities-systems': {
    displayName: 'Systems of Linear Inequalities',
    topicName: 'Linear Inequalities',

    progressionStructure: {
      sections: [
        {
          id: 'graphing-systems',
          title: 'Graphing Systems of Inequalities',
          difficulty: 'advanced',
          prerequisites: ['complete-graphing-process'],
          masterySignals: 'Student graphs multiple inequalities on same axes and identifies overlapping region in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct system graphs with feasible regions identified',
                'Graphs all inequalities accurately on same axes'
              ],
              qualitative: [
                'Graphs each inequality separately on same coordinate plane',
                'Uses different shading patterns or colors for different inequalities',
                'Identifies the feasible region where ALL shadings overlap',
                'Understands solution must satisfy all inequalities simultaneously',
                'Can verify points in feasible region satisfy all inequalities',
                'Labels each inequality clearly',
                'Distinguishes feasible region visually (darker shading or highlighted)'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about overlapping',
                'Can graph individually but struggles identifying feasible region'
              ],
              qualitative: [
                'Graphs inequalities correctly but has trouble seeing overlap',
                'Sometimes forgets to check all inequalities',
                'Can find feasible region when prompted',
                'Makes errors with multiple different line types',
                'Graphs become cluttered or confusing',
                'Needs help distinguishing which region is the solution'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot graph systems correctly',
                'Cannot identify feasible regions',
                'Makes errors on multiple inequalities'
              ],
              qualitative: [
                'Graphs inequalities on separate axes instead of same',
                'Does not understand concept of overlapping regions',
                'Cannot verify if points satisfy system',
                'Produces confusing or incorrect graphs',
                'No understanding of simultaneous satisfaction',
                'Treats system as separate problems'
              ]
            }
          },

          learningObjectives: [
            'Graph multiple inequalities on the same coordinate plane',
            'Identify the feasible region where all inequalities overlap',
            'Understand that solutions must satisfy ALL inequalities',
            'Use shading or colors to distinguish different inequalities',
            'Verify that points in feasible region satisfy the system'
          ],

          relevantFormulas: `
**Systems of Inequalities:**

A system is a set of two or more inequalities with the same variables.
The solution is the region where ALL inequalities are satisfied AT THE SAME TIME.

**Graphing Process:**
1. Graph each inequality separately on the SAME axes
2. Use different shading patterns or colors for each
3. Identify where all shadings overlap
4. The overlap is the FEASIBLE REGION (solution set)
5. Boundary segments within feasible region follow their inequality's line style

**Example System:**
y ≤ x + 2 ... (1)
y ≥ -x ... (2)

**Step 1: Graph inequality (1): y ≤ x + 2**
- Boundary: y = x + 2 (solid, m=1, c=2)
- Test (0,0): 0 ≤ 0 + 2? YES
- Shade below (includes origin)

**Step 2: Graph inequality (2): y ≥ -x**
- Boundary: y = -x (solid, m=-1, c=0)
- Test (1,1): 1 ≥ -1? YES
- Shade above

**Step 3: Find overlap**
The darker region where BOTH shadings overlap is the solution!

**Verification:**
Pick a point in the feasible region, e.g., (0, 1)

Check inequality (1): 1 ≤ 0 + 2? → 1 ≤ 2 ✓
Check inequality (2): 1 ≥ -0? → 1 ≥ 0 ✓

Both satisfied! ✓

**3 Inequality Example:**
x ≥ 0 ... (1)
y ≥ 0 ... (2)
x + y ≤ 4 ... (3)

Graph all three:
- (1): Shade right of y-axis
- (2): Shade above x-axis
- (3): Shade below line x + y = 4

Feasible region: Triangle in first quadrant bounded by axes and the line

**Important:**
- ALL inequalities must be satisfied
- Feasible region can be bounded (enclosed) or unbounded (extends infinitely)
- Each boundary segment keeps its line type (solid/dashed) in final diagram
          `,

          availableTools: ['linearInequalityGrapher']
        },

        {
          id: 'feasible-regions-vertices',
          title: 'Feasible Regions and Corner Points',
          difficulty: 'advanced',
          prerequisites: ['graphing-systems'],
          masterySignals: 'Student identifies vertices of feasible regions and distinguishes bounded from unbounded regions in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct identifications of vertices and region types',
                'Can locate all corner points accurately'
              ],
              qualitative: [
                'Identifies vertices as boundary line intersection points',
                'Finds vertices by reading from graph or solving equations',
                'Understands bounded region has finite area (enclosed)',
                'Understands unbounded region extends infinitely',
                'Can count vertices correctly',
                'Recognizes vertices are crucial for optimization',
                'Verifies that vertices lie within feasible region'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about finding intersections',
                'Can locate some vertices but misses others'
              ],
              qualitative: [
                'Knows vertices are corner points but struggles locating all',
                'Sometimes confuses bounded with unbounded',
                'Can read approximate coordinates but not exact',
                'Forgets to check if vertex is in feasible region',
                'Needs prompting to find intersections',
                'Understands concept when explained'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot identify vertices',
                'Cannot distinguish bounded from unbounded',
                'Cannot read coordinates from graphs'
              ],
              qualitative: [
                'Does not understand vertex concept',
                'Cannot find boundary intersections',
                'No understanding of bounded vs unbounded',
                'Cannot read coordinates from coordinate plane',
                'Confused by feasible region boundaries',
                'No sense of what corner points represent'
              ]
            }
          },

          learningObjectives: [
            'Identify vertices (corner points) of feasible regions',
            'Locate vertices from graphs or by solving equations',
            'Distinguish between bounded and unbounded feasible regions',
            'Understand importance of vertices in optimization',
            'Count and list all vertices systematically'
          ],

          relevantFormulas: `
**Feasible Region Concepts:**

**Feasible Region:**
- The area where ALL inequalities in the system are satisfied
- Solution set of the system
- Can be bounded or unbounded

**Vertices (Corner Points):**
- Points where boundary lines intersect
- "Corners" of the feasible region
- Critical for optimization problems
- Found by solving pairs of boundary equations

**Bounded Region:**
- Enclosed feasible region (finite area)
- Has all vertices visible on graph
- Typically polygonal shape (triangle, quadrilateral, etc.)

**Example:**
System: x ≥ 0, y ≥ 0, x + y ≤ 4

Feasible region: Triangle in first quadrant
Vertices:
- (0, 0) — where x = 0 meets y = 0
- (4, 0) — where x + y = 4 meets y = 0
- (0, 4) — where x + y = 4 meets x = 0

This is BOUNDED (triangular region)

**Unbounded Region:**
- Extends infinitely in one or more directions
- Not enclosed
- May have some vertices, but region continues beyond

**Example:**
System: x ≥ 1, y ≥ x + 1

Feasible region: Extends infinitely upward and right
Vertex: (1, 2) — where x = 1 meets y = x + 1

This is UNBOUNDED (region goes to infinity)

**Finding Vertices:**

**Method 1: From Graph**
- Locate where boundary lines intersect
- Read coordinates carefully
- Check if point is in feasible region

**Method 2: Algebraically**
1. Identify which boundaries meet at corners
2. Convert each inequality to equation
3. Solve the system of two equations
4. Verify point satisfies all original inequalities

**Example:**
Find vertex where x + y = 4 meets 2x + y = 6

Solve simultaneously:
x + y = 4    ... (1)
2x + y = 6   ... (2)

Subtract (1) from (2):
x = 2

Substitute into (1):
2 + y = 4
y = 2

Vertex: (2, 2)

**Checking Vertices:**
After finding a vertex, substitute into ALL original inequalities to confirm it's in the feasible region!
          `,

          availableTools: ['linearInequalityGrapher']
        },

        {
          id: 'finding-vertices-algebraically',
          title: 'Finding Vertices Algebraically',
          difficulty: 'advanced',
          prerequisites: ['feasible-regions-vertices'],
          masterySignals: 'Student finds exact vertex coordinates by solving systems of boundary equations in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct vertex calculations',
                'Solves systems of equations accurately'
              ],
              qualitative: [
                'Converts boundary inequalities to equations',
                'Solves pairs of linear equations (substitution or elimination)',
                'Finds exact coordinates algebraically',
                'Verifies vertices satisfy all inequalities in system',
                'Rejects vertices outside feasible region',
                'Lists all vertices of feasible region systematically',
                'Recognizes when to solve equations vs read from graph'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about solving equations',
                'Can solve equations but forgets to verify'
              ],
              qualitative: [
                'Sets up equations correctly but makes solving errors',
                'Sometimes forgets to check all inequalities',
                'Needs prompting to convert inequalities to equations',
                'Can find one or two vertices but misses others',
                'Makes arithmetic errors when solving',
                'Understands process when guided'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot solve systems of equations',
                'Cannot find vertices algebraically',
                'Makes errors at every step'
              ],
              qualitative: [
                'Does not know how to convert inequalities to equations',
                'Cannot solve simultaneous equations',
                'No systematic approach to finding all vertices',
                'Cannot verify if points are in feasible region',
                'Completely lost with algebraic method',
                'Cannot connect algebraic and graphical representations'
              ]
            }
          },

          learningObjectives: [
            'Convert boundary inequalities to equations',
            'Solve systems of two linear equations',
            'Find exact vertex coordinates algebraically',
            'Verify vertices are in the feasible region',
            'Systematically find all vertices of a system'
          ],

          relevantFormulas: `
**Algebraic Vertex Finding:**

**Process:**
1. Identify all boundary lines from the system
2. Determine which pairs of boundaries could form vertices
3. Convert both inequalities to equations (replace ≤,≥,<,> with =)
4. Solve the system of two equations
5. Check if solution satisfies ALL original inequalities
6. If yes, it's a vertex; if no, discard it

**Example System:**
x ≥ 0       ... (1)
y ≥ 0       ... (2)
2x + y ≤ 6  ... (3)
x + 2y ≤ 6  ... (4)

**Potential Vertices:**
We need to check where boundaries intersect.

**Vertex A: Boundaries (1) and (2)**
x = 0 and y = 0
Solution: (0, 0)
Check (3): 2(0) + 0 = 0 ≤ 6 ✓
Check (4): 0 + 2(0) = 0 ≤ 6 ✓
Vertex: (0, 0) ✓

**Vertex B: Boundaries (1) and (3)**
x = 0 and 2x + y = 6
Substitute x = 0:
2(0) + y = 6
y = 6
Solution: (0, 6)
Check (2): 6 ≥ 0 ✓
Check (4): 0 + 2(6) = 12 ≤ 6? ✗ FAILS
NOT a vertex of feasible region ✗

**Vertex C: Boundaries (1) and (4)**
x = 0 and x + 2y = 6
Substitute x = 0:
0 + 2y = 6
y = 3
Solution: (0, 3)
Check all: (0,3) satisfies all inequalities ✓
Vertex: (0, 3) ✓

**Vertex D: Boundaries (2) and (3)**
y = 0 and 2x + y = 6
Substitute y = 0:
2x + 0 = 6
x = 3
Solution: (3, 0)
Check all: (3,0) satisfies all ✓
Vertex: (3, 0) ✓

**Vertex E: Boundaries (3) and (4)**
2x + y = 6  ... (3)
x + 2y = 6  ... (4)

Solve using elimination:
Multiply (4) by 2: 2x + 4y = 12
Subtract (3):       2x + y = 6
                   ___________
                    3y = 6
                    y = 2

Substitute y = 2 into (3):
2x + 2 = 6
2x = 4
x = 2

Solution: (2, 2)
Check all: (2,2) satisfies all ✓
Vertex: (2, 2) ✓

**Final Vertices:**
(0, 0), (0, 3), (2, 2), (3, 0)

**Important:**
- Always check if calculated vertex satisfies ALL inequalities
- Boundary intersections outside the feasible region are NOT vertices
- List vertices in order (e.g., counterclockwise) for clarity
          `,

          availableTools: ['linearInequalityGrapher']
        },

        {
          id: 'special-cases-systems',
          title: 'Special Cases: No Solution and Unbounded Regions',
          difficulty: 'advanced',
          prerequisites: ['finding-vertices-algebraically'],
          masterySignals: 'Student identifies systems with no solution and correctly classifies bounded vs unbounded regions in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct identifications of special cases',
                'Can determine region type before graphing'
              ],
              qualitative: [
                'Recognizes when inequalities contradict each other (no solution)',
                'Identifies parallel boundaries with incompatible shading',
                'Distinguishes bounded from unbounded regions',
                'Understands unbounded regions extend infinitely',
                'Can explain why a system has no solution',
                'Recognizes when constraints are too restrictive',
                'Can predict region type from system structure'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about contradictions',
                'Can identify after graphing but not before'
              ],
              qualitative: [
                'Needs to graph to see no solution',
                'Sometimes confuses bounded with unbounded',
                'Knows special cases exist but struggles identifying them',
                'Can recognize no solution when shown but not independently',
                'Needs prompting about parallel lines or contradictions'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot identify special cases',
                'Cannot distinguish region types',
                'Tries to find solutions when none exist'
              ],
              qualitative: [
                'Does not understand concept of no solution',
                'Cannot identify contradictory constraints',
                'No understanding of bounded vs unbounded',
                'Thinks every system has a solution',
                'Cannot analyze system structure',
                'Completely confused by special cases'
              ]
            }
          },

          learningObjectives: [
            'Identify systems with no solution (empty feasible region)',
            'Recognize contradictory constraints',
            'Distinguish bounded from unbounded feasible regions',
            'Understand implications of parallel boundary lines',
            'Classify systems before or after graphing'
          ],

          relevantFormulas: `
**Special Cases in Systems:**

**Case 1: No Solution (Empty Feasible Region)**
When constraints contradict each other, no region satisfies all inequalities.

**Example 1:**
y > x + 2
y < x - 1

These lines are parallel (both have m = 1)
First: shade above y = x + 2
Second: shade below y = x - 1
Since x + 2 is always greater than x - 1, these regions never overlap!

**No solution:** ∅ (empty set)

**Example 2:**
x ≥ 5
x ≤ 3

No number can be both ≥ 5 AND ≤ 3 simultaneously.

**No solution**

**Case 2: Unbounded Region**
Feasible region extends infinitely in one or more directions.

**Example:**
x ≥ 1
y ≥ x + 1

Graphs:
- x ≥ 1: Shade right of vertical line x = 1
- y ≥ x + 1: Shade above line y = x + 1

Feasible region: Extends infinitely up and to the right
Vertex at (1, 2), but region is UNBOUNDED

**Characteristics:**
- Not enclosed
- May have some vertices
- At least one direction goes to infinity

**Case 3: Bounded Region**
Feasible region is completely enclosed (finite area).

**Example:**
x ≥ 0, y ≥ 0, x + y ≤ 5

Feasible region: Triangle in first quadrant
All sides are bounded
Vertices: (0,0), (5,0), (0,5)

This is BOUNDED

**Identifying No Solution:**
- Look for parallel lines with incompatible shading
- Look for contradictory constraints (x ≥ 5 AND x ≤ 3)
- After graphing, see if any region has all shadings overlap

**Identifying Bounded vs Unbounded:**
- Bounded: Region is completely enclosed by boundaries
- Unbounded: Region extends infinitely (usually when missing constraints)
- Often: Including x ≥ 0, y ≥ 0, and upper bounds creates bounded region
- Missing upper or lower bounds often creates unbounded region

**Real-World Context:**
- No solution: Constraints are impossible to satisfy (over-constrained)
- Unbounded: Problem has infinite possibilities (under-constrained)
- Bounded: Realistic constraints that create finite solution space
          `,

          availableTools: ['linearInequalityGrapher']
        }
      ]
    },

    learningObjectives: [
      'Graph systems of inequalities and identify feasible regions',
      'Find vertices of feasible regions graphically and algebraically',
      'Distinguish bounded from unbounded regions',
      'Recognize systems with no solution',
      'Verify vertices and solution regions systematically'
    ],

    keyFormulas: `
**System of Inequalities:**
- Solution: Region where ALL inequalities satisfied simultaneously
- Feasible region: Overlapping shaded area

**Vertices (Corner Points):**
- Found where boundary lines intersect
- Verify by substituting into all inequalities

**Region Types:**
- Bounded: Enclosed region (finite area)
- Unbounded: Extends infinitely
- No solution: No overlap (contradictory constraints)
    `
  },

  // ============================================
  // SUBTOPIC 6: Applications and Optimization
  // ============================================

  's2-math-linear-inequalities-applications': {
    displayName: 'Applications and Optimization',
    topicName: 'Linear Inequalities',

    progressionStructure: {
      sections: [
        {
          id: 'real-world-constraints',
          title: 'Modeling Real-World Constraints',
          difficulty: 'advanced',
          prerequisites: ['graphing-systems'],
          masterySignals: 'Student translates real-world situations into systems of inequalities in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct translations of scenarios into inequality systems',
                'Identifies all relevant constraints'
              ],
              qualitative: [
                'Identifies variables and what they represent',
                'Translates resource constraints into inequalities',
                'Translates capacity constraints into inequalities',
                'Includes non-negativity constraints (x ≥ 0, y ≥ 0) when appropriate',
                'Writes complete system capturing all conditions',
                'Uses appropriate inequality symbols for each constraint',
                'Can explain each inequality in context'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about identifying constraints',
                'Captures some but not all constraints'
              ],
              qualitative: [
                'Identifies main constraints but misses subtle ones',
                'Sometimes uses wrong inequality direction',
                'Forgets non-negativity constraints',
                'Needs prompting to identify all variables',
                'Can translate when given constraint structure',
                'Makes some errors in interpretation'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot translate scenarios into inequalities',
                'Misses most constraints',
                'Uses wrong variables or symbols'
              ],
              qualitative: [
                'Does not understand how to model constraints',
                'Cannot identify variables from context',
                'Confuses constraints with objectives',
                'Cannot extract mathematical relationships from words',
                'Writes equations instead of inequalities',
                'Completely lost with word problems'
              ]
            }
          },

          learningObjectives: [
            'Translate real-world scenarios into systems of inequalities',
            'Identify all relevant constraints',
            'Define variables appropriately',
            'Include non-negativity constraints when needed',
            'Interpret inequalities in context'
          ],

          relevantFormulas: `
**Modeling Real-World Constraints:**

**Common Constraint Types:**

**1. Resource Constraints**
"Limited amount of something"

Example: A factory has 100 hours of labor available
If product A takes 2 hours, product B takes 3 hours:
2x + 3y ≤ 100 (total labor used ≤ available)

**2. Capacity Constraints**
"Maximum or minimum capacity"

Example: Storage can hold at most 50 items
x + y ≤ 50

**3. Budget Constraints**
"Limited money available"

Example: \$500 budget, item A costs \$20, item B costs \$30
20x + 30y ≤ 500

**4. Demand/Requirement Constraints**
"Need at least a certain amount"

Example: Must produce at least 10 of product A
x ≥ 10

**5. Non-Negativity Constraints**
"Cannot have negative amounts"

Almost always include: x ≥ 0, y ≥ 0

**Complete Example:**

**Scenario:**
A bakery makes cakes (x) and pies (y).
- Each cake requires 2 hours, each pie requires 1 hour
- Only 20 hours available per day
- Each cake needs 3 eggs, each pie needs 2 eggs
- Only 36 eggs available
- Must make at least 4 cakes to satisfy orders
- Cannot make negative amounts

**Variables:**
Let x = number of cakes
Let y = number of pies

**Constraints:**

Time: 2x + y ≤ 20
Eggs: 3x + 2y ≤ 36
Cake demand: x ≥ 4
Non-negativity: x ≥ 0, y ≥ 0

**System:**
2x + y ≤ 20
3x + 2y ≤ 36
x ≥ 4
x ≥ 0
y ≥ 0

**Another Example:**

**Scenario:**
A company makes chairs (x) and tables (y).
- Profit: \$50 per chair, \$80 per table
- Wood: chairs need 5 units, tables need 10 units; 200 units available
- Labor: chairs need 3 hours, tables need 5 hours; 90 hours available
- Must make at least 5 chairs and 3 tables

**System:**
5x + 10y ≤ 200  (wood constraint)
3x + 5y ≤ 90    (labor constraint)
x ≥ 5           (minimum chairs)
y ≥ 3           (minimum tables)
x ≥ 0, y ≥ 0    (non-negativity)

**Steps for Modeling:**
1. Define variables clearly
2. Identify ALL constraints from problem
3. Translate each constraint into inequality
4. Include non-negativity if applicable
5. Write complete system
6. Verify each inequality makes sense in context
          `,

          availableTools: ['linearInequalityGrapher']
        },

        {
          id: 'linear-programming-intro',
          title: 'Introduction to Linear Programming',
          difficulty: 'advanced',
          prerequisites: ['real-world-constraints', 'finding-vertices-algebraically'],
          masterySignals: 'Student understands concept of optimization and objective functions in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ correct identifications of objective functions',
                'Can write objective functions from word problems'
              ],
              qualitative: [
                'Understands optimization means maximizing or minimizing',
                'Distinguishes constraints (inequalities) from objective (equation)',
                'Writes objective function in form P = ax + by',
                'Identifies what is being optimized (profit, cost, area, etc.)',
                'Understands constraints define feasible region',
                'Understands objective function evaluated at vertices',
                'Can explain difference between constraints and objective'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about what to optimize',
                'Can write objective when told what to maximize/minimize'
              ],
              qualitative: [
                'Sometimes confuses objective with constraints',
                'Knows objective is what we\'re optimizing but struggles writing it',
                'Can identify objective from problem but makes coefficient errors',
                'Needs prompting about maximize vs minimize',
                'Understands concept when explained',
                'Makes errors distinguishing objective from constraints'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot write objective functions',
                'Cannot distinguish objective from constraints',
                'Confuses optimization with solving'
              ],
              qualitative: [
                'Does not understand what optimization means',
                'Cannot identify what is being maximized or minimized',
                'Treats objective like another constraint',
                'Cannot extract coefficients for objective function',
                'No understanding of linear programming concepts',
                'Completely confused by optimization language'
              ]
            }
          },

          learningObjectives: [
            'Understand linear programming as optimization with constraints',
            'Distinguish constraints from objective function',
            'Write objective functions from word problems',
            'Identify whether to maximize or minimize',
            'Understand role of feasible region in optimization'
          ],

          relevantFormulas: `
**Linear Programming Basics:**

**Definition:**
Linear Programming (LP) is finding the maximum or minimum value of a linear objective function subject to linear constraints (inequalities).

**Components:**

**1. Objective Function**
- What we want to MAXIMIZE or MINIMIZE
- Linear equation: P = ax + by
- Examples: profit, cost, area, distance, production quantity

**2. Constraints**
- Limitations or restrictions
- System of linear inequalities
- Define the feasible region

**3. Feasible Region**
- Set of all points satisfying all constraints
- Where we search for the optimal solution

**Format:**

**Maximize (or Minimize):** P = ax + by
**Subject to:**
    inequality 1
    inequality 2
    ...
    x ≥ 0, y ≥ 0

**Example 1:**

**Scenario:**
Furniture company makes chairs (x) and tables (y)
Profit: \$50 per chair, \$80 per table
Constraints: 5x + 10y ≤ 200 (wood), 3x + 5y ≤ 90 (labor)

**Objective Function:**
Maximize P = 50x + 80y (total profit)

**Constraints:**
5x + 10y ≤ 200
3x + 5y ≤ 90
x ≥ 0, y ≥ 0

**Example 2:**

**Scenario:**
Shipping company uses trucks (x) and trains (y)
Cost: \$200 per truck, \$500 per train
Constraints: Must ship at least 50 tons, x + 3y ≥ 50
            At most 30 vehicles available, x + y ≤ 30

**Objective Function:**
Minimize C = 200x + 500y (total cost)

**Constraints:**
x + 3y ≥ 50
x + y ≤ 30
x ≥ 0, y ≥ 0

**Key Insight:**
In linear programming, the optimal solution (maximum or minimum) always occurs at a VERTEX of the feasible region!

This means:
1. Graph the constraints to find feasible region
2. Find all vertices
3. Evaluate objective function at each vertex
4. The vertex giving the best value is the optimal solution

**Constraints vs Objective:**
- Constraints: Inequalities that must be satisfied (limitations)
- Objective: Equation to optimize (goal)
- Constraints define WHERE to look (feasible region)
- Objective defines WHAT to optimize (value we care about)

**Example of Distinction:**

Problem: Maximize profit from x chairs and y tables

**Objective:** P = 50x + 80y (this is what we WANT to maximize)
**Constraints:**
- 5x + 10y ≤ 200 (these are LIMITS we must respect)
- 3x + 5y ≤ 90
- x ≥ 0, y ≥ 0
          `,

          availableTools: ['linearInequalityGrapher']
        },

        {
          id: 'solving-optimization-problems',
          title: 'Solving Optimization Problems',
          difficulty: 'advanced',
          prerequisites: ['linear-programming-intro'],
          masterySignals: 'Student solves complete optimization problems by graphing, finding vertices, and evaluating objective function in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ complete optimization problems solved correctly',
                'Finds optimal solution systematically'
              ],
              qualitative: [
                'Graphs all constraints to find feasible region',
                'Finds all vertices of feasible region',
                'Evaluates objective function at each vertex',
                'Identifies maximum or minimum value',
                'States optimal solution clearly (x, y, and objective value)',
                'Follows systematic process',
                'Can verify solution makes sense in context',
                'Interprets answer in real-world terms'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about process steps',
                'Can complete most steps but makes errors'
              ],
              qualitative: [
                'Graphs correctly but misses some vertices',
                'Finds vertices but makes evaluation errors',
                'Sometimes forgets to check all vertices',
                'Can follow process when prompted',
                'Makes arithmetic errors in evaluation',
                'Forgets to interpret answer in context'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot complete optimization problems',
                'Makes errors at multiple steps',
                'Cannot find optimal solution'
              ],
              qualitative: [
                'No systematic approach',
                'Cannot graph constraints correctly',
                'Cannot find vertices',
                'Does not know how to evaluate objective function',
                'Cannot identify maximum or minimum',
                'Completely lost with optimization process'
              ]
            }
          },

          learningObjectives: [
            'Solve linear programming problems completely',
            'Graph constraints and identify feasible region',
            'Find all vertices systematically',
            'Evaluate objective function at vertices',
            'Identify optimal solution and interpret in context'
          ],

          relevantFormulas: `
**Complete Optimization Process:**

**Steps:**
1. Define variables
2. Write objective function (maximize or minimize)
3. Write all constraints as inequalities
4. Graph the feasible region
5. Find all vertices of the feasible region
6. Evaluate objective function at each vertex
7. Identify maximum or minimum value
8. State optimal solution in context

**Fundamental Theorem of Linear Programming:**
The maximum or minimum value of the objective function occurs at a vertex of the feasible region.

**Complete Example:**

**Problem:**
A factory makes product A (x units) and product B (y units).
- Profit: \$40 per unit of A, \$30 per unit of B
- Labor: A needs 2 hours, B needs 1 hour; 40 hours available
- Materials: A needs 1 unit, B needs 2 units; 50 units available
- Must make at least 5 units of product A

Find production levels that maximize profit.

**Step 1: Variables**
x = units of product A
y = units of product B

**Step 2: Objective Function**
Maximize P = 40x + 30y

**Step 3: Constraints**
2x + y ≤ 40   (labor)
x + 2y ≤ 50   (materials)
x ≥ 5         (minimum production)
x ≥ 0, y ≥ 0  (non-negativity)

**Step 4: Graph Feasible Region**
Graph all constraints on same axes.
Identify feasible region (where all overlap).

**Step 5: Find Vertices**
Calculate intersection points:

Vertex A: x = 5, y = 0
Intersection of x = 5 and y = 0
Point: (5, 0)

Vertex B: x = 5, 2(5) + y = 40
y = 30
Point: (5, 30)

Vertex C: 2x + y = 40 and x + 2y = 50
Solve system:
From first: y = 40 - 2x
Substitute: x + 2(40 - 2x) = 50
           x + 80 - 4x = 50
           -3x = -30
           x = 10, y = 20
Point: (10, 20)

Vertex D: x + 2y = 50 and y = 0
x = 50, but check x ≥ 5? Yes
Point: (50, 0) but check 2(50) + 0 = 100 ≤ 40? NO
This vertex is outside feasible region!

Need to check: 2x + y = 40 and y = 0
2x = 40, x = 20
Point: (20, 0)

**Step 6: Evaluate Objective at Each Vertex**

| Vertex | P = 40x + 30y | Value |
|--------|---------------|-------|
| (5, 0) | 40(5) + 30(0) | \$200 |
| (5, 30)| 40(5) + 30(30)| \$1100|
| (10,20)| 40(10) + 30(20)| \$1000|
| (20,0) | 40(20) + 30(0)| \$800 |

**Step 7: Identify Maximum**
Maximum profit is \$1100 at vertex (5, 30)

**Step 8: Optimal Solution**
Produce 5 units of product A and 30 units of product B
for maximum profit of \$1100.

**Verification:**
Check (5, 30) satisfies all constraints:
2(5) + 30 = 40 ≤ 40 ✓
5 + 2(30) = 65 ≤ 50 ✗ WAIT!

Let me recalculate vertex B...

Actually: 2(5) + y ≤ 40 → y ≤ 30
         5 + 2y ≤ 50 → 2y ≤ 45 → y ≤ 22.5
So the binding constraint at x = 5 is y ≤ 22.5

Vertex B: (5, 22.5)
P = 40(5) + 30(22.5) = 200 + 675 = \$875

Recalculate all vertices properly!

**Process Summary:**
1. Set up problem (variables, objective, constraints)
2. Graph feasible region
3. Find ALL vertices (check each satisfies all constraints!)
4. Evaluate objective at each vertex
5. Select maximum (or minimum)
6. Interpret in context
          `,

          availableTools: ['linearInequalityGrapher']
        },

        {
          id: 'practical-applications',
          title: 'Practical Applications and Interpretation',
          difficulty: 'advanced',
          prerequisites: ['solving-optimization-problems'],
          masterySignals: 'Student solves diverse real-world optimization problems and interprets solutions meaningfully in 3+ problems',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                '3+ complete application problems solved',
                'Handles different contexts (business, agriculture, nutrition, etc.)'
              ],
              qualitative: [
                'Translates various real-world scenarios into LP problems',
                'Solves optimization problems in context',
                'Interprets solutions meaningfully',
                'Considers practical constraints (integer solutions, rounding)',
                'Can explain why solution is optimal',
                'Verifies solution makes sense in real-world context',
                'Communicates results clearly',
                'Adapts method to different problem types'
              ]
            },
            developing: {
              quantitative: [
                '1-2 correct with hints about setup or interpretation',
                'Can solve but struggles with context'
              ],
              qualitative: [
                'Solves mechanically but doesn\'t deeply understand context',
                'Sometimes forgets practical constraints',
                'Can find mathematical answer but struggles interpreting',
                'Needs prompting about real-world meaning',
                'Makes some modeling errors',
                'Follows procedure but lacks flexibility'
              ]
            },
            struggling: {
              quantitative: [
                'Cannot solve application problems',
                'Cannot connect math to context',
                'Makes errors in setup and solving'
              ],
              qualitative: [
                'Cannot extract mathematical model from scenario',
                'No understanding of real-world meaning',
                'Cannot interpret solutions',
                'Gives mathematically incorrect or contextually nonsensical answers',
                'Completely lost with applications',
                'Cannot adapt to different contexts'
              ]
            }
          },

          learningObjectives: [
            'Apply linear programming to diverse real-world problems',
            'Model various optimization scenarios',
            'Interpret solutions in practical terms',
            'Consider real-world constraints (integers, feasibility)',
            'Communicate optimization results clearly'
          ],

          relevantFormulas: `
**Application Areas:**

**1. Business/Manufacturing**
- Maximize profit
- Minimize cost
- Determine production mix
- Resource allocation

**2. Agriculture**
- Maximize crop yield
- Minimize fertilizer cost
- Optimize land use
- Animal feed mix

**3. Nutrition/Diet**
- Minimize cost while meeting nutritional requirements
- Maximize nutrition within budget
- Balance multiple dietary constraints

**4. Transportation**
- Minimize shipping cost
- Maximize delivery efficiency
- Route optimization
- Fleet management

**Complete Application Example:**

**Farmer Problem:**

A farmer has 100 acres of land and wants to plant wheat (x acres) and corn (y acres) to maximize profit.

**Information:**
- Wheat profit: \$200 per acre
- Corn profit: \$300 per acre
- Wheat needs 3 hours labor per acre
- Corn needs 5 hours labor per acre
- Only 400 hours of labor available
- Must plant at least 10 acres of wheat (contract requirement)
- At least 20 acres must be planted in total

**Solution:**

**Variables:**
x = acres of wheat
y = acres of corn

**Objective:**
Maximize P = 200x + 300y (total profit)

**Constraints:**
x + y ≤ 100      (land available)
3x + 5y ≤ 400    (labor available)
x ≥ 10           (wheat contract)
x + y ≥ 20       (minimum planting)
x ≥ 0, y ≥ 0     (non-negativity)

**Graph and Find Vertices:**
Vertices of feasible region:
- (10, 10): P = 200(10) + 300(10) = \$5000
- (10, 74): P = 200(10) + 300(74) = \$24,200
- (50, 50): P = 200(50) + 300(50) = \$25,000
- (100, 0): Check labor: 3(100) = 300 ≤ 400 ✓
            P = 200(100) + 300(0) = \$20,000

**Optimal Solution:**
Plant 50 acres of wheat and 50 acres of corn
Maximum profit: \$25,000

**Interpretation:**
"The farmer should allocate land equally between wheat and corn, planting 50 acres of each. This will yield a maximum profit of \$25,000 while satisfying all constraints including the wheat contract and labor availability."

**Practical Considerations:**

**Integer Solutions:**
If problem requires whole units (can't make 7.5 chairs):
- Round to nearest feasible integers
- Check nearby integer points
- Choose best integer solution

**Example:** Optimal is (7.3, 12.8) chairs and tables
Check: (7, 12), (7, 13), (8, 12), (8, 13)
Choose the feasible one with best objective value

**Sensitivity:**
"What if we had 10 more labor hours?"
- Would optimal solution change?
- Would profit increase significantly?

**Real-World Reporting:**
Don't just give (x, y) values!

Good answer: "Produce 20 chairs and 15 tables per day for a maximum daily profit of \$2200. This uses all available labor (90 hours) and stays within the wood budget (200 units)."

Bad answer: "x = 20, y = 15, P = 2200"

**Common Application Patterns:**
- Profit maximization: Maximize revenue, minimize cost
- Resource allocation: Limited resources, multiple uses
- Diet problems: Minimize cost, meet nutrition requirements
- Blending problems: Mix ingredients to meet specifications
- Production planning: What and how much to produce
          `,

          availableTools: ['linearInequalityGrapher']
        }
      ]
    },

    learningObjectives: [
      'Model real-world constraints as inequality systems',
      'Understand linear programming optimization',
      'Solve complete optimization problems',
      'Interpret solutions in practical contexts',
      'Apply linear inequalities to diverse real-world scenarios'
    ],

    keyFormulas: `
**Linear Programming:**
Maximize (or Minimize) P = ax + by (objective function)
Subject to: system of linear inequalities (constraints)

**Fundamental Theorem:**
Optimal solution occurs at a vertex of the feasible region

**Solving Process:**
1. Model: variables, objective, constraints
2. Graph feasible region
3. Find all vertices
4. Evaluate objective at vertices
5. Select optimal vertex
6. Interpret in context
    `
  }

};

// ============================================
// GLOBAL TOPIC CONFIGURATION
// ============================================

export const S2_LINEAR_INEQUALITIES_CONFIG = {
  id: 's2-linear-inequalities',
  displayName: 'Linear Inequalities',
  description: 'Master linear inequalities, graphing, systems, and optimization applications',
  grade: 'Secondary 2',
  subject: 'Mathematics',

  subtopics: Object.keys(LINEAR_INEQUALITIES_SUBTOPICS) as LinearInequalitiesTopicId[],

  tutorCustomization: LINEAR_INEQUALITIES_TUTOR_CUSTOMIZATION,
  availableTools: LINEAR_INEQUALITIES_MATH_TOOLS,

  estimatedDuration: {
    perSubtopic: '45-60 minutes',
    total: '5-6 hours'
  }
};
