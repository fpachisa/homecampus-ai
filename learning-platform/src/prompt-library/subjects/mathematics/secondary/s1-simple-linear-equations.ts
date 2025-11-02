/**
 * S1 Mathematics: Simple Linear Equations
 *
 * This module covers solving linear equations from one-step to multi-step equations,
 * including equations with fractions, variables in denominators, and word problem applications
 * for Secondary 1 students.
 */

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type SimpleLinearEquationsTopicId =
  | 's1-math-simple-linear-equations-introduction'
  | 's1-math-simple-linear-equations-both-sides'
  | 's1-math-simple-linear-equations-fractional'
  | 's1-math-simple-linear-equations-word-problems';

// ============================================================================
// TOPIC CONFIGURATION
// ============================================================================

export const S1_SIMPLE_LINEAR_EQUATIONS_CONFIG = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for Secondary 1 students learning Simple Linear Equations.

Teaching Approach:
- Guide students to discover equation-solving strategies through questioning
- Emphasize the balance concept: equations are like scales that must stay balanced
- Use real-world contexts: money problems, age relationships, geometry, measurements
- Build from simple (one-step) to complex (fractional equations, word problems)
- Connect inverse operations to "undoing" what's been done to the variable
- Celebrate insights when students recognize patterns or apply strategies correctly
- Help students understand WHY we perform operations, not just HOW
- Adapt difficulty organically based on student mastery

**Text-to-Speech Guidelines:**
- Say "x" as "ex", "y" as "why"
- Say "equals" not "is equal to" for brevity
- Spell out fractions: "three x plus two over five" for (3x+2)/5
- Say "brackets" instead of "parentheses"
- For variables in denominators, say "six over x minus two" for 6/(x-2)
- Say "L C M" (spell out letters) not "LCM" or "lowest common multiple"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding.
IMPORTANT: Use the technical name (e.g., "balanceScale") in the toolName field, NOT the display name.

Available tools for this topic:
- balanceScale: PRIMARY TOOL for showing equation balance and operations on both sides
- fractionBar: For equations involving fractions, showing LCM process
- distributiveVisualizer: For expanding brackets in equations
- algebraExpression: For identifying like terms before collecting
- numberLine: For verifying solutions and showing variable values

Examples of effective tool use:
- balanceScale to show why x + 5 = 12 becomes x = 7 (subtract 5 from both sides)
- balanceScale to demonstrate 3x + 7 = 19 step-by-step
- fractionBar to show clearing fractions by multiplying by LCM
- distributiveVisualizer for expanding 3(x + 2) before solving
- numberLine to verify solution makes sense in context`
};

// ============================================================================
// AVAILABLE MATH TOOLS
// ============================================================================

export const S1_SIMPLE_LINEAR_EQUATIONS_MATH_TOOLS = [
  "balanceScale",
  "fractionBar",
  "distributiveVisualizer",
  "algebraExpression",
  "numberLine"
];

// ============================================================================
// SUBTOPICS CONFIGURATION
// ============================================================================

export const S1_SIMPLE_LINEAR_EQUATIONS_SUBTOPICS = {
  // ========================================================================
  // SUBTOPIC 1: INTRODUCTION TO LINEAR EQUATIONS
  // ========================================================================

  's1-math-simple-linear-equations-introduction': {
    displayName: 'Introduction to Linear Equations',
    topicName: 'Simple Linear Equations',

    progressionStructure: {
      sections: [
        {
          id: "one-step-equations",
          title: "One-Step Equations",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student solves one-step equations (x + a = b, ax = b, x - a = b, x/a = b) in 3+ problems using inverse operations, understands balance concept, and checks solutions",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions without hints",
                "Consistently applies correct inverse operation",
                "Verifies solutions independently"
              ],
              qualitative: [
                "Understands equation as balanced statement (LHS = RHS)",
                "Correctly identifies inverse operation needed",
                "Solves x + 5 = 12 by subtracting 5 from both sides to get x = 7",
                "Solves 3x = 15 by dividing both sides by 3 to get x = 5",
                "Solves x - 8 = 4 by adding 8 to both sides to get x = 12",
                "Solves x/4 = 3 by multiplying both sides by 4 to get x = 12",
                "Checks answer by substituting back into original equation",
                "Explains why same operation must be done to both sides"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with 1-2 hints on which operation to use",
                "Sometimes forgets to apply operation to both sides",
                "Can solve with prompting"
              ],
              qualitative: [
                "Knows inverse operations exist but needs help identifying which one",
                "Sometimes forgets to perform operation on both sides",
                "Can solve with examples but not fully independently",
                "Makes occasional arithmetic errors",
                "Needs reminder to check answer",
                "Understands concept but lacks fluency"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot identify correct inverse operation",
                "Multiple incorrect attempts",
                "Only does operation to one side",
                "Cannot complete without full solution"
              ],
              qualitative: [
                "Does not understand inverse operations concept",
                "Only applies operation to left side or only to right side",
                "Does not understand equation balance principle",
                "Confuses operations: adds when should subtract, multiplies when should divide",
                "Cannot verify if solution is correct",
                "Doesn't understand what 'solving for x' means",
                "Treats equation as two separate expressions rather than balanced statement"
              ]
            }
          },

          learningObjectives: [
            "Understand equations as balanced statements where LHS = RHS",
            "Apply inverse operations to isolate the variable",
            "Solve addition equations (x + a = b) using subtraction",
            "Solve subtraction equations (x - a = b) using addition",
            "Solve multiplication equations (ax = b) using division",
            "Solve division equations (x/a = b) using multiplication",
            "Maintain equation balance by doing same operation to both sides",
            "Check solutions by substitution"
          ],

          relevantFormulas: [
            "**Inverse Operations:**",
            "Addition ↔ Subtraction",
            "Multiplication ↔ Division",
            "**Balance Principle:** Whatever you do to one side, you must do to the other",
            "**Examples:**",
            "$x + 5 = 12 \\Rightarrow x = 12 - 5 = 7$ (subtract 5 from both sides)",
            "$3x = 15 \\Rightarrow x = 15 \\div 3 = 5$ (divide both sides by 3)",
            "$x - 8 = 4 \\Rightarrow x = 4 + 8 = 12$ (add 8 to both sides)",
            "$\\frac{x}{4} = 3 \\Rightarrow x = 3 \\times 4 = 12$ (multiply both sides by 4)"
          ],

          sampleProblems: [
            "Solve: x + 7 = 15",
            "Solve: 4y = 20",
            "Solve: m - 8 = 12",
            "Solve: n/5 = 6"
          ],

          availableTools: ["balanceScale", "numberLine"]
        },

        {
          id: "two-step-equations",
          title: "Two-Step Equations",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["one-step-equations"],
          masterySignals: "Student solves two-step equations (ax + b = c) in 3+ problems, applies inverse operations in correct order (remove constant first, then coefficient), and shows clear working",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct two-step solutions without hints",
                "Operations applied in correct order consistently",
                "Clear, organized working shown"
              ],
              qualitative: [
                "Understands to remove constant term first, then coefficient",
                "Correctly solves 3x + 7 = 19 by subtracting 7, then dividing by 3",
                "Correctly solves 5y - 3 = 17 by adding 3, then dividing by 5",
                "Shows step-by-step working with equals signs aligned",
                "Handles negative coefficients and negative constants correctly",
                "Checks answer by substituting back into original equation",
                "Explains the two-step process clearly",
                "Can solve equations of form ax + b = c and ax - b = c"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on operation order",
                "Sometimes reverses order (tries coefficient before constant)",
                "Makes arithmetic errors in execution"
              ],
              qualitative: [
                "Can solve but needs prompting on which operation first",
                "Sometimes tries to divide by coefficient before removing constant",
                "Can follow examples but struggles with new problems",
                "Makes sign errors with negatives",
                "Forgets to check answer",
                "Working is disorganized or steps are unclear",
                "Needs help with negative coefficients or constants"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot complete two-step solution",
                "Multiple errors in operation order and execution",
                "Cannot organize solving steps",
                "Requests solution after 1-2 attempts"
              ],
              qualitative: [
                "Does not understand order: which operation to undo first",
                "Randomly applies operations without strategy",
                "Cannot handle two steps in sequence",
                "Loses track of equation structure after first step",
                "Cannot identify what needs to be undone",
                "Makes systematic arithmetic errors (especially with negatives)",
                "Cannot verify if solution is correct",
                "Confuses two-step with one-step equations"
              ]
            }
          },

          learningObjectives: [
            "Solve two-step equations of form ax + b = c",
            "Apply inverse operations in correct order",
            "Remove constant term first by adding or subtracting",
            "Remove coefficient second by multiplying or dividing",
            "Show clear, organized step-by-step working",
            "Handle equations with negative coefficients and constants",
            "Verify solutions by substitution"
          ],

          relevantFormulas: [
            "**Two-Step Equation Strategy:**",
            "For $ax + b = c$:",
            "**Step 1:** Remove constant ($b$) → subtract/add from both sides",
            "**Step 2:** Remove coefficient ($a$) → divide/multiply both sides",
            "**Example:** $3x + 7 = 19$",
            "$3x = 12$ (subtract 7 from both sides)",
            "$x = 4$ (divide both sides by 3)",
            "**Check:** $3(4) + 7 = 12 + 7 = 19$ ✓"
          ],

          sampleProblems: [
            "Solve: 3x + 7 = 19",
            "Solve: 5y - 3 = 17",
            "Solve: 2m + 9 = 5",
            "Solve: 4n - 11 = -3"
          ],

          availableTools: ["balanceScale"]
        },

        {
          id: "checking-solutions",
          title: "Checking Solutions",
          difficulty: "intermediate",
          prerequisites: ["two-step-equations"],
          masterySignals: "Student independently checks solutions by substituting back into original equation in 3+ problems, verifies LHS = RHS, and identifies incorrect solutions when given",
          estimatedQuestions: "3-4 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "Checks 3+ solutions correctly without prompting",
                "Correctly identifies valid and invalid solutions",
                "Accurately evaluates both sides"
              ],
              qualitative: [
                "Substitutes solution value into original equation",
                "Evaluates left-hand side (LHS) correctly",
                "Evaluates right-hand side (RHS) correctly",
                "Confirms LHS = RHS for valid solution",
                "Identifies when LHS ≠ RHS indicates incorrect solution",
                "Uses checking as verification, not guessing",
                "Shows organized check working",
                "Can check solutions from word problems in context"
              ]
            },
            developing: {
              quantitative: [
                "Checks with 1-2 hints or reminders",
                "Makes occasional arithmetic errors in checking",
                "Needs prompting to evaluate both sides"
              ],
              qualitative: [
                "Understands concept but makes calculation errors",
                "Sometimes forgets to evaluate both sides",
                "Can check with examples but not independently",
                "Needs help organizing check working",
                "Sometimes confuses which value to substitute",
                "Can verify but not identify errors in given solutions"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot check solution without full guidance",
                "Multiple errors in substitution or evaluation",
                "Cannot compare LHS and RHS"
              ],
              qualitative: [
                "Does not understand purpose of checking",
                "Substitutes incorrectly or in wrong places",
                "Cannot evaluate expressions with substituted value",
                "Does not compare both sides",
                "Thinks checking means re-solving",
                "Cannot identify if a given solution is correct or incorrect",
                "Makes systematic arithmetic errors in evaluation",
                "Confuses original equation with solution"
              ]
            }
          },

          learningObjectives: [
            "Check solutions by substituting into original equation",
            "Evaluate left-hand side with substituted value",
            "Evaluate right-hand side with substituted value",
            "Verify that LHS = RHS confirms correct solution",
            "Identify incorrect solutions when LHS ≠ RHS",
            "Show organized checking work",
            "Understand checking as verification, not solving method"
          ],

          relevantFormulas: [
            "**Checking Solutions:**",
            "1. Take your solution value for the variable",
            "2. Substitute it into the original equation",
            "3. Evaluate LHS (left side)",
            "4. Evaluate RHS (right side)",
            "5. If LHS = RHS, solution is correct ✓",
            "**Example:** Check if $x = 4$ is solution to $3x + 7 = 19$",
            "LHS: $3(4) + 7 = 12 + 7 = 19$",
            "RHS: $19$",
            "Since LHS = RHS, $x = 4$ is correct ✓"
          ],

          sampleProblems: [
            "Check if x = 5 is the solution to 2x + 3 = 13",
            "Check if y = -2 is the solution to 5y - 3 = -13",
            "Explain why x = 6 is NOT a solution to 4x - 5 = 15"
          ],

          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Solve one-step and two-step linear equations using inverse operations",
      "Understand and apply the balance principle in equations",
      "Apply inverse operations in the correct order",
      "Check solutions by substitution and verification"
    ],

    keyFormulas: `
**Core Concepts:**
- Equation: A mathematical statement that two expressions are equal (LHS = RHS)
- Linear Equation: Equation where variable has power of 1 (e.g., $ax + b = c$)
- Solution/Root: Value that satisfies the equation
- Balance Principle: Do same operation to both sides

**Inverse Operations:**
- Addition ↔ Subtraction
- Multiplication ↔ Division

**Two-Step Strategy:**
For $ax + b = c$:
1. Remove $b$ (constant) first
2. Remove $a$ (coefficient) second

**Examples:**
- One-step: $x + 5 = 12 \\Rightarrow x = 7$
- Two-step: $3x + 7 = 19 \\Rightarrow 3x = 12 \\Rightarrow x = 4$
`
  },

  // ========================================================================
  // SUBTOPIC 2: EQUATIONS WITH VARIABLES ON BOTH SIDES
  // ========================================================================

  's1-math-simple-linear-equations-both-sides': {
    displayName: 'Equations with Variables on Both Sides',
    topicName: 'Simple Linear Equations',

    progressionStructure: {
      sections: [
        {
          id: "collecting-like-terms-both-sides",
          title: "Collecting Like Terms - Variables on Both Sides",
          difficulty: "intermediate",
          prerequisites: ["two-step-equations"],
          masterySignals: "Student solves equations with variables on both sides (5x - 3 = 2x + 9) in 3+ problems, correctly collects all x-terms on one side and constants on other, and shows clear working",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions without hints",
                "Consistently collects terms correctly",
                "All working organized and clear"
              ],
              qualitative: [
                "Identifies variables on both sides of equation",
                "Collects all variable terms on one side (usually left)",
                "Collects all constant terms on other side (usually right)",
                "Correctly solves 5x - 3 = 2x + 9 to get x = 4",
                "Strategy: subtract 2x from both sides, add 3 to both sides, divide by coefficient",
                "Handles negative coefficients correctly",
                "Shows step-by-step working with clear progression",
                "Checks answer by substitution"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on collecting strategy",
                "Makes sign errors when moving terms",
                "Needs prompting on organization"
              ],
              qualitative: [
                "Understands need to collect terms but needs guidance",
                "Sometimes makes errors when moving terms across equals sign",
                "Forgets to change sign when moving terms",
                "Can follow examples but struggles independently",
                "Makes arithmetic errors with negative coefficients",
                "Working is disorganized",
                "Needs help deciding which side to collect variables"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot collect terms without full solution",
                "Multiple errors in moving terms and signs",
                "Cannot complete solution independently",
                "Requests hints after each step"
              ],
              qualitative: [
                "Does not understand how to move terms across equals sign",
                "Does not know to collect variables on one side, constants on other",
                "Randomly moves terms without strategy",
                "Makes systematic sign errors (doesn't change sign when moving)",
                "Cannot identify like terms on both sides",
                "Loses terms during collection",
                "Cannot organize multi-step solution",
                "Confuses this with two-step equations"
              ]
            }
          },

          learningObjectives: [
            "Identify when equation has variables on both sides",
            "Collect all variable terms on one side of equation",
            "Collect all constant terms on other side of equation",
            "Understand that moving a term changes its sign",
            "Solve resulting two-step equation",
            "Show clear, organized working",
            "Handle negative coefficients correctly"
          ],

          relevantFormulas: [
            "**Strategy for Variables on Both Sides:**",
            "1. Collect all variable terms on one side (subtract smaller variable term)",
            "2. Collect all constants on other side",
            "3. Solve resulting two-step equation",
            "**Example:** $5x - 3 = 2x + 9$",
            "$5x - 2x - 3 = 9$ (subtract $2x$ from both sides)",
            "$3x - 3 = 9$ (simplify left side)",
            "$3x = 12$ (add 3 to both sides)",
            "$x = 4$ (divide both sides by 3)",
            "**Remember:** Moving a term across $=$ changes its sign"
          ],

          sampleProblems: [
            "Solve: 5x - 3 = 2x + 9",
            "Solve: 7y + 2 = 3y + 18",
            "Solve: 4m - 5 = m + 7",
            "Solve: 6n + 1 = 2n - 11"
          ],

          availableTools: ["balanceScale", "algebraExpression"]
        },

        {
          id: "equations-with-brackets-both-sides",
          title: "Equations with Brackets",
          difficulty: "intermediate",
          prerequisites: ["collecting-like-terms-both-sides"],
          masterySignals: "Student solves equations with brackets (single or both sides) in 3+ problems by expanding first, then collecting terms and solving, handles distributive law correctly",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions with brackets",
                "Expands correctly every time",
                "Organized working from expand → collect → solve"
              ],
              qualitative: [
                "Expands brackets using distributive law: $a(b + c) = ab + ac$",
                "Correctly expands 3(x + 2) = 3x + 6",
                "Correctly expands with negatives: 2(y - 5) = 2y - 10",
                "Handles brackets on both sides: 3(x + 1) = 2(x + 5)",
                "Simplifies after expansion by collecting like terms",
                "Solves resulting equation correctly",
                "Shows organized working: expand → simplify → collect → solve",
                "Handles negative multipliers: -2(x + 3) = -2x - 6"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on expansion",
                "Makes sign errors when expanding negatives",
                "Needs prompting on order of steps"
              ],
              qualitative: [
                "Can expand but makes sign errors with negatives",
                "Forgets to multiply all terms inside brackets",
                "Forgets to simplify after expanding",
                "Can handle single bracket but struggles with both sides",
                "Needs reminders to expand first before solving",
                "Makes errors in subsequent solving steps",
                "Working is disorganized or skips steps"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot expand brackets correctly",
                "Multiple errors in signs and distribution",
                "Cannot complete without full solution",
                "Gets stuck after expansion"
              ],
              qualitative: [
                "Does not understand distributive law",
                "Only multiplies first term in bracket",
                "Makes systematic sign errors (especially with negatives)",
                "Tries to solve without expanding first",
                "Cannot handle negative multipliers",
                "Loses terms during expansion",
                "Cannot proceed after expansion",
                "Confuses expanding with solving"
              ]
            }
          },

          learningObjectives: [
            "Expand brackets using distributive law before solving",
            "Apply distributive law: a(b + c) = ab + ac",
            "Handle negative multipliers correctly",
            "Expand brackets on both sides of equation",
            "Simplify by collecting like terms after expansion",
            "Solve resulting equation with variables on both sides",
            "Show organized working: expand, simplify, collect, solve"
          ],

          relevantFormulas: [
            "**Distributive Law:**",
            "$a(b + c) = ab + ac$",
            "$a(b - c) = ab - ac$",
            "**Strategy:**",
            "1. Expand all brackets first",
            "2. Simplify each side (collect like terms)",
            "3. Collect variables on one side, constants on other",
            "4. Solve resulting equation",
            "**Example:** $3(x + 2) = 2(x + 5)$",
            "$3x + 6 = 2x + 10$ (expand both sides)",
            "$3x - 2x = 10 - 6$ (collect terms)",
            "$x = 4$ (solve)",
            "**Negative multiplier:** $-2(x + 3) = -2x - 6$"
          ],

          sampleProblems: [
            "Solve: 3(x + 2) = 2x + 12",
            "Solve: 2(y - 3) = y + 1",
            "Solve: 4(m + 1) = 3(m + 3)",
            "Solve: 5(n - 2) + 3 = 2(n + 4)"
          ],

          availableTools: ["distributiveVisualizer", "balanceScale"]
        },

        {
          id: "multi-step-equations",
          title: "Multi-Step Equations",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["equations-with-brackets-both-sides"],
          masterySignals: "Student solves complex multi-step equations combining brackets, variables on both sides, and multiple terms in 3+ problems, shows organized systematic approach, and handles all operations correctly",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct complex solutions without hints",
                "Systematic approach maintained throughout",
                "All steps executed correctly"
              ],
              qualitative: [
                "Follows systematic strategy: expand → simplify → collect → solve",
                "Handles equations with multiple brackets",
                "Correctly combines like terms on each side before collecting",
                "Solves equations like 2(3x + 1) - 5 = 4(x - 2) + 7",
                "Manages multiple operations and terms efficiently",
                "Shows clear, organized working throughout",
                "Checks complex solutions by substitution",
                "Handles negative coefficients, brackets, and fractions in one equation",
                "Adapts strategy based on equation structure"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with 1-2 hints on strategy",
                "Makes occasional errors in complex equations",
                "Needs prompting on organization"
              ],
              qualitative: [
                "Understands steps but gets overwhelmed by complexity",
                "Makes errors when multiple operations present",
                "Forgets steps in long solutions",
                "Can solve simpler multi-step but struggles with very complex",
                "Working becomes disorganized with complexity",
                "Makes arithmetic errors under complexity",
                "Needs reminders to simplify before collecting"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot organize solution for complex equations",
                "Multiple errors across all steps",
                "Gets stuck early and cannot progress",
                "Requires full solution walkthrough"
              ],
              qualitative: [
                "Overwhelmed by multiple operations",
                "No systematic approach - random operations",
                "Cannot decide which step to do first",
                "Makes errors that compound through solution",
                "Cannot track what's been done",
                "Loses terms or makes sign errors repeatedly",
                "Cannot simplify complex expressions",
                "Does not know how to organize work for complex problems",
                "Gives up when equation looks complicated"
              ]
            }
          },

          learningObjectives: [
            "Solve complex equations with multiple operations",
            "Apply systematic strategy: expand → simplify → collect → solve",
            "Handle multiple brackets on both sides",
            "Combine like terms on each side before collecting across sides",
            "Manage equations with mixed operations efficiently",
            "Show clear, organized working for complex problems",
            "Check solutions for complex equations",
            "Adapt strategy based on equation complexity"
          ],

          relevantFormulas: [
            "**Multi-Step Equation Strategy:**",
            "1. **Expand** all brackets using distributive law",
            "2. **Simplify** each side separately (collect like terms on each side)",
            "3. **Collect** all variables on one side, constants on other",
            "4. **Solve** resulting two-step equation",
            "5. **Check** solution by substitution",
            "**Example:** $2(3x + 1) - 5 = 4(x - 2) + 7$",
            "Step 1: $6x + 2 - 5 = 4x - 8 + 7$ (expand)",
            "Step 2: $6x - 3 = 4x - 1$ (simplify each side)",
            "Step 3: $2x = 2$ (collect: $6x - 4x = -1 + 3$)",
            "Step 4: $x = 1$ (solve)"
          ],

          sampleProblems: [
            "Solve: 2(3x + 1) - 5 = 4(x - 2) + 7",
            "Solve: 5(y - 2) + 3y = 2(3y + 1) - 7",
            "Solve: 3(2m + 3) - 4m = 2(m + 5) + 1",
            "Solve: 4(n - 1) + 2(n + 3) = 3(2n - 1)"
          ],

          availableTools: ["distributiveVisualizer", "algebraExpression", "balanceScale"]
        }
      ]
    },

    learningObjectives: [
      "Solve equations with variables on both sides of the equals sign",
      "Expand brackets before solving equations",
      "Collect like terms systematically",
      "Apply a systematic multi-step strategy to complex equations"
    ],

    keyFormulas: `
**Variables on Both Sides:**
Strategy: Collect all variable terms on one side, constants on other
Example: $5x - 3 = 2x + 9 \\Rightarrow 3x = 12 \\Rightarrow x = 4$

**Distributive Law:**
$a(b + c) = ab + ac$
$a(b - c) = ab - ac$

**Multi-Step Strategy:**
1. Expand all brackets
2. Simplify each side
3. Collect variables on one side, constants on other
4. Solve resulting equation
5. Check by substitution

**Example:** $3(x + 2) = 2(x + 5)$
$3x + 6 = 2x + 10$ → $x = 4$
`
  },

  // ========================================================================
  // SUBTOPIC 3: FRACTIONAL EQUATIONS
  // ========================================================================

  's1-math-simple-linear-equations-fractional': {
    displayName: 'Fractional Equations',
    topicName: 'Simple Linear Equations',

    progressionStructure: {
      sections: [
        {
          id: "equations-with-fractions-lcm",
          title: "Equations with Fractions (LCM Method)",
          difficulty: "intermediate",
          prerequisites: ["multi-step-equations"],
          masterySignals: "Student solves equations with fractions using LCM method in 3+ problems, correctly identifies LCM of denominators, multiplies both sides by LCM to clear fractions, and solves resulting equation",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions using LCM method",
                "Correctly identifies LCM in all cases",
                "Clears fractions completely and accurately"
              ],
              qualitative: [
                "Identifies all denominators in equation",
                "Correctly finds LCM of denominators",
                "Multiplies both sides of equation by LCM",
                "Correctly distributes LCM to all terms (fractions and non-fractions)",
                "Simplifies after multiplying (fractions cancel)",
                "Solves resulting linear equation correctly",
                "Correctly solves equations like $\\frac{3x+2}{5} = \\frac{4x-7}{6}$",
                "Handles mixed terms: fractions and integers in same equation",
                "Shows organized working: LCM → multiply → simplify → solve"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on LCM or distribution",
                "Makes errors in finding LCM or multiplying",
                "Needs prompting on procedure"
              ],
              qualitative: [
                "Can find LCM but struggles to apply it correctly",
                "Forgets to multiply all terms by LCM",
                "Makes errors simplifying after multiplication",
                "Can handle simple fractions but struggles with complex numerators",
                "Needs help organizing work",
                "Makes arithmetic errors in distribution",
                "Can follow examples but not fully independent"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot find LCM of denominators",
                "Multiple errors in multiplying and simplifying",
                "Cannot clear fractions",
                "Requests solution after 1-2 attempts"
              ],
              qualitative: [
                "Does not understand LCM method",
                "Cannot identify denominators correctly",
                "Cannot find LCM even with guidance",
                "Multiplies only one side or only some terms",
                "Does not understand how multiplying by LCM clears fractions",
                "Makes systematic errors in distribution",
                "Gets stuck with fractions, cannot proceed",
                "Tries to solve without clearing fractions",
                "Cannot handle equations with expressions in numerators"
              ]
            }
          },

          learningObjectives: [
            "Identify all denominators in fractional equation",
            "Find LCM of all denominators",
            "Multiply both sides of equation by LCM",
            "Distribute LCM to all terms (fractions and integers)",
            "Simplify after multiplication (fractions cancel)",
            "Solve resulting linear equation",
            "Handle equations with expressions in numerators",
            "Show organized working through LCM method"
          ],

          relevantFormulas: [
            "**LCM Method for Fractional Equations:**",
            "1. Identify all denominators",
            "2. Find LCM of all denominators",
            "3. Multiply BOTH sides by LCM",
            "4. Simplify (fractions cancel)",
            "5. Solve resulting equation",
            "**Example:** $\\frac{3x+2}{5} = \\frac{4x-7}{6}$",
            "Denominators: 5 and 6, LCM = 30",
            "Multiply by 30: $30 \\times \\frac{3x+2}{5} = 30 \\times \\frac{4x-7}{6}$",
            "$6(3x+2) = 5(4x-7)$ (simplify)",
            "$18x + 12 = 20x - 35$ (expand)",
            "$47 = 2x$ → $x = 23.5$ (solve)",
            "**With mixed terms:** $\\frac{y}{5} - 6 = \\frac{y-3}{2}$",
            "LCM(5,2) = 10, multiply all terms: $2y - 60 = 5(y-3)$"
          ],

          sampleProblems: [
            "Solve: $\\frac{x}{3} = \\frac{x+2}{5}$",
            "Solve: $\\frac{2y-1}{4} = \\frac{y+3}{3}$",
            "Solve: $\\frac{m}{5} - 6 = \\frac{m-3}{2}$",
            "Solve: $\\frac{3n+2}{5} = \\frac{4n-7}{6}$"
          ],

          availableTools: ["fractionBar", "balanceScale"]
        },

        {
          id: "fractional-equations-variable-denominator",
          title: "Variable in Denominator",
          difficulty: "advanced",
          prerequisites: ["equations-with-fractions-lcm"],
          masterySignals: "Student solves fractional equations with variable in denominator (e.g., 6/(x-2) = 3) in 3+ problems, multiplies by LCM to clear fractions, solves correctly, and CHECKS that solution doesn't make denominator zero",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions with variable in denominator",
                "Always checks denominator restrictions",
                "Correctly identifies valid vs. extraneous solutions"
              ],
              qualitative: [
                "Identifies equations with variable in denominator",
                "Finds LCM of denominators (including variable expressions)",
                "Multiplies both sides by LCM to clear all fractions",
                "Solves resulting linear equation correctly",
                "CRITICAL: Checks that solution doesn't make any original denominator zero",
                "Correctly solves $\\frac{6}{x-2} = 3$ to get $x = 4$ (and checks $x \\neq 2$)",
                "Correctly solves $\\frac{1}{x+3} = \\frac{2}{x}$ with proper checking",
                "Identifies restricted values before solving",
                "Explains why certain values make equation undefined",
                "Recognizes when solution is extraneous (makes denominator zero)"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with reminders to check restrictions",
                "Forgets to check denominator occasionally",
                "Makes errors identifying LCM with variables"
              ],
              qualitative: [
                "Can solve but forgets to check denominator restrictions",
                "Needs reminder that certain values are not allowed",
                "Can identify restrictions with prompting",
                "Makes errors finding LCM with variable expressions",
                "Can follow examples but struggles with new problems",
                "Understands concept but execution inconsistent",
                "Needs help deciding if solution is valid"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot handle variable in denominator",
                "Multiple errors in solving and checking",
                "Does not check restrictions",
                "Cannot identify extraneous solutions"
              ],
              qualitative: [
                "Does not understand that denominator cannot be zero",
                "Cannot find LCM with variable expressions",
                "Makes errors multiplying by variable expressions",
                "Never checks if solution makes denominator zero",
                "Accepts invalid solutions",
                "Cannot identify restricted values",
                "Does not understand 'undefined' concept",
                "Cannot solve resulting equation after clearing fractions",
                "Confused about difference between regular fractions and variable denominators"
              ]
            }
          },

          learningObjectives: [
            "Identify equations with variable in denominator",
            "Recognize that denominator cannot equal zero",
            "Find LCM of denominators including variable expressions",
            "Multiply both sides by LCM to clear fractions",
            "Solve resulting linear equation",
            "CHECK that solution doesn't make any original denominator zero",
            "Identify and reject extraneous solutions",
            "Understand when equation is undefined"
          ],

          relevantFormulas: [
            "**Fractional Equations with Variable in Denominator:**",
            "**CRITICAL:** Solution must NOT make any denominator zero",
            "**Method:**",
            "1. Identify restricted values (what makes denominators zero)",
            "2. Find LCM of all denominators",
            "3. Multiply both sides by LCM",
            "4. Solve resulting equation",
            "5. CHECK: Substitute solution into ORIGINAL equation denominators",
            "6. If denominator = 0, solution is EXTRANEOUS (invalid)",
            "**Example:** $\\frac{6}{x-2} = 3$",
            "Restriction: $x \\neq 2$ (makes denominator zero)",
            "LCM: $x-2$",
            "Multiply: $(x-2) \\times \\frac{6}{x-2} = 3(x-2)$",
            "$6 = 3x - 6$ → $x = 4$",
            "Check: $x = 4 \\neq 2$ ✓ Valid solution",
            "**Example 2:** $\\frac{1}{x+3} = \\frac{2}{x}$",
            "Restrictions: $x \\neq -3, x \\neq 0$"
          ],

          sampleProblems: [
            "Solve: $\\frac{6}{x-2} = 3$",
            "Solve: $\\frac{10}{y+1} = 5$",
            "Solve: $\\frac{1}{m+3} = \\frac{2}{m}$",
            "Solve: $\\frac{4}{n-5} + 2 = \\frac{6}{n-5}$"
          ],

          availableTools: ["fractionBar", "balanceScale"]
        },

        {
          id: "checking-extraneous-solutions",
          title: "Checking for Extraneous Solutions",
          difficulty: "advanced",
          prerequisites: ["fractional-equations-variable-denominator"],
          masterySignals: "Student systematically checks all solutions to fractional equations in 3+ problems, identifies extraneous solutions that make denominators zero, explains why they're invalid, and presents only valid solutions",
          estimatedQuestions: "3-4 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "Checks restrictions in 3+ problems without prompting",
                "Correctly identifies all extraneous solutions",
                "Always provides final valid solution"
              ],
              qualitative: [
                "Automatically checks solution in original denominators",
                "Identifies all restricted values before solving",
                "Substitutes solution into each original denominator",
                "Correctly identifies when solution makes denominator zero",
                "Explains why extraneous solution is invalid (undefined equation)",
                "Presents only valid solutions as final answer",
                "Can analyze given solutions to determine validity",
                "Understands that extraneous solutions arise from multiplying by variable",
                "Shows checking work clearly and systematically"
              ]
            },
            developing: {
              quantitative: [
                "Checks with 1-2 reminders",
                "Sometimes forgets to check all denominators",
                "Can identify but needs help explaining"
              ],
              qualitative: [
                "Understands concept but needs prompting to check",
                "Can check when reminded but not automatically",
                "Sometimes only checks one denominator when multiple exist",
                "Can identify extraneous solution but struggles to explain why",
                "Needs help organizing checking procedure",
                "Can determine validity with examples but not independently"
              ]
            },
            struggling: {
              quantitative: [
                "Does not check for extraneous solutions",
                "Cannot identify invalid solutions",
                "Presents extraneous solutions as valid"
              ],
              qualitative: [
                "Does not understand concept of extraneous solutions",
                "Never checks if solution makes denominator zero",
                "Does not understand why some solutions are invalid",
                "Cannot substitute into denominators correctly",
                "Thinks all algebraic solutions are valid",
                "Does not understand 'undefined' in context of fractions",
                "Cannot explain difference between valid and extraneous",
                "Confused about when and why to check"
              ]
            }
          },

          learningObjectives: [
            "Understand what extraneous solutions are and why they occur",
            "Identify restricted values that make denominators zero",
            "Check all solutions by substituting into original denominators",
            "Determine if solution makes any denominator equal to zero",
            "Reject extraneous solutions as invalid",
            "Present only valid solutions as final answer",
            "Explain why extraneous solution is invalid",
            "Understand that multiplying by variable expression can introduce extraneous solutions"
          ],

          relevantFormulas: [
            "**Extraneous Solutions:**",
            "**Definition:** Solution that emerges from algebraic process but makes original equation undefined",
            "**Why they occur:** Multiplying both sides by variable expression can introduce invalid solutions",
            "**How to check:**",
            "1. Solve equation algebraically",
            "2. Substitute solution into ALL original denominators",
            "3. If ANY denominator = 0, solution is EXTRANEOUS",
            "4. Reject extraneous solutions",
            "**Example:** $\\frac{x}{x-3} = \\frac{3}{x-3}$",
            "Multiply by $(x-3)$: $x = 3$",
            "Check: If $x = 3$, denominator $= 3-3 = 0$ (UNDEFINED)",
            "Therefore $x = 3$ is EXTRANEOUS → No solution exists",
            "**Valid solution example:** $\\frac{6}{x-2} = 3$ gives $x = 4$",
            "Check: $4-2 = 2 \\neq 0$ ✓ Valid"
          ],

          sampleProblems: [
            "Solve and check: $\\frac{x}{x-3} = \\frac{3}{x-3}$ (has extraneous solution)",
            "Determine if x = 5 is valid for $\\frac{10}{x-5} = 2$",
            "Solve and identify any extraneous solutions: $\\frac{2}{m+1} = \\frac{m-1}{m+1}$"
          ],

          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Solve equations containing fractions using the LCM method",
      "Handle equations with variable in the denominator",
      "Identify and check for extraneous solutions",
      "Understand restrictions on solutions (denominator cannot be zero)"
    ],

    keyFormulas: `
**LCM Method:**
1. Find LCM of all denominators
2. Multiply both sides by LCM
3. Simplify (fractions cancel)
4. Solve resulting equation

**Variable in Denominator:**
- Denominator can NEVER equal zero
- Must check solution doesn't make denominator zero
- If it does, solution is EXTRANEOUS (invalid)

**Examples:**
- Simple: $\\frac{x}{3} = 5$ → LCM=3 → $x = 15$
- With variable: $\\frac{6}{x-2} = 3$ → $x = 4$ (check: $4 \\neq 2$ ✓)
- Extraneous: $\\frac{x}{x-3} = \\frac{3}{x-3}$ → $x = 3$ (but $3-3=0$ ✗ invalid)
`
  },

  // ========================================================================
  // SUBTOPIC 4: WORD PROBLEMS & APPLICATIONS
  // ========================================================================

  's1-math-simple-linear-equations-word-problems': {
    displayName: 'Word Problems & Applications',
    topicName: 'Simple Linear Equations',

    progressionStructure: {
      sections: [
        {
          id: "translating-word-problems",
          title: "Translating Word Problems to Equations",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["multi-step-equations"],
          masterySignals: "Student successfully translates word problems to equations in 3+ problems, defines variable clearly, identifies given information and relationships, forms correct equation, and solves with verification in context",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct translations and solutions",
                "Variable defined appropriately in all cases",
                "Equation matches problem structure"
              ],
              qualitative: [
                "Reads problem carefully and identifies unknown quantity",
                "Defines variable clearly: 'Let x = ...' with units",
                "Identifies all given information and relationships",
                "Translates relationships to algebraic equation",
                "Forms correct equation representing the problem",
                "Solves equation correctly",
                "States answer in context with units and meaning",
                "Checks solution makes sense in original problem context",
                "Follows systematic 7-step process",
                "Can translate 'more than', 'less than', 'is', 'total' etc."
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on defining variable or forming equation",
                "Needs prompting on translation keywords",
                "Can solve but struggles with context verification"
              ],
              qualitative: [
                "Can define variable with help",
                "Struggles to identify all relationships in problem",
                "Makes errors translating words to operations",
                "Can form equation with guidance but not independently",
                "Solves equation correctly but forgets context answer",
                "Needs help checking if answer makes sense",
                "Misses some information in problem",
                "Can follow examples but struggles with new contexts"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot translate problem to equation",
                "Multiple errors in defining variable and forming equation",
                "Cannot identify what's being asked",
                "Gives up before forming equation"
              ],
              qualitative: [
                "Does not know how to start word problem",
                "Cannot identify unknown quantity",
                "Cannot define appropriate variable",
                "Cannot translate words to algebraic expressions",
                "Forms incorrect equation that doesn't match problem",
                "Randomly tries operations without understanding",
                "Cannot connect solution back to problem context",
                "Does not understand what problem is asking",
                "Cannot identify given information vs. what to find",
                "Overwhelmed by word problems"
              ]
            }
          },

          learningObjectives: [
            "Read word problems carefully to understand context",
            "Identify the unknown quantity to find",
            "Define variable with clear statement and units",
            "Identify all given information in problem",
            "Recognize relationships and translate to algebraic form",
            "Form equation representing the problem situation",
            "Solve equation correctly",
            "State answer in complete sentence with context and units",
            "Verify solution makes sense in original problem",
            "Follow systematic problem-solving process"
          ],

          relevantFormulas: [
            "**7-Step Word Problem Process:**",
            "1. **Read** carefully, identify what's being asked",
            "2. **Define** variable: Let $x$ = [unknown quantity with units]",
            "3. **Express** other quantities in terms of variable",
            "4. **Form** equation based on relationships in problem",
            "5. **Solve** the equation",
            "6. **Answer** in complete sentence with context and units",
            "7. **Check** solution makes sense in problem context",
            "**Translation Keywords:**",
            "- 'is', 'equals', 'is the same as' → =",
            "- 'more than', 'sum', 'total', 'increased by' → +",
            "- 'less than', 'difference', 'decreased by' → -",
            "- 'times', 'product', 'of' → ×",
            "**Example:** 'Five more than twice a number is 17'",
            "Let $x$ = the number",
            "$2x + 5 = 17$ → $x = 6$"
          ],

          sampleProblems: [
            "Five more than twice a number is 17. Find the number.",
            "When 8 is subtracted from three times a number, the result is 13. What is the number?",
            "The sum of a number and its double is 24. Find the number.",
            "Seven less than four times a number equals twice the number plus 9. Find the number."
          ],

          availableTools: ["balanceScale"]
        },

        {
          id: "number-age-problems",
          title: "Number & Age Problems",
          difficulty: "advanced",
          prerequisites: ["translating-word-problems"],
          masterySignals: "Student solves number problems (consecutive integers, relationships) and age problems (current, past, future) in 3+ problems, sets up correct equations with appropriate variables, handles temporal relationships correctly, and verifies answers in context",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions to number/age problems",
                "Equations correctly represent relationships",
                "All answers verified in context"
              ],
              qualitative: [
                "Correctly handles consecutive integers: $n, n+1, n+2$",
                "Correctly sets up age relationships: current, past (x-3), future (x+5)",
                "Understands that time passes equally for all people",
                "Forms equations for age comparisons correctly",
                "Solves number problems: sum, difference, relationships",
                "Correctly interprets 'twice as old', 'half the age', etc.",
                "Handles problems with multiple unknowns using relationships",
                "States all answers clearly (not just variable value)",
                "Verifies ages or numbers make sense (positive, reasonable)",
                "Shows clear definition of variable(s)"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on relationships",
                "Makes errors in past/future age expressions",
                "Needs prompting on consecutive integer notation"
              ],
              qualitative: [
                "Can solve with guidance on setting up relationships",
                "Struggles with consecutive integer notation",
                "Makes errors with past/future age expressions",
                "Forgets that time passes equally for everyone",
                "Can handle simple age problems but struggles with complex",
                "Needs help expressing 'twice as old' algebraically",
                "Can solve equation but struggles setting it up",
                "Sometimes forgets to find all required answers"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot set up equation for number/age problems",
                "Multiple errors in relationships",
                "Cannot handle consecutive integers or age relationships",
                "Gives up during setup phase"
              ],
              qualitative: [
                "Does not understand consecutive integer notation",
                "Cannot express age relationships algebraically",
                "Thinks ages don't change with time passage",
                "Cannot translate 'twice as old' to algebraic form",
                "Forms equations that don't match relationships",
                "Confuses current, past, and future ages",
                "Cannot handle problems with two people's ages",
                "Random trial and error instead of equation",
                "Cannot verify if answer makes sense",
                "Overwhelmed by age relationships"
              ]
            }
          },

          learningObjectives: [
            "Represent consecutive integers algebraically: n, n+1, n+2",
            "Set up equations for number relationships",
            "Represent current, past, and future ages algebraically",
            "Understand that time passes equally for all people",
            "Translate age relationships to equations",
            "Interpret 'twice as old', 'half the age', 'years older/younger'",
            "Solve age and number problems systematically",
            "Find all required values (not just variable)",
            "Verify solutions make sense in context"
          ],

          relevantFormulas: [
            "**Consecutive Integers:**",
            "- Three consecutive integers: $n, n+1, n+2$",
            "- Three consecutive even integers: $n, n+2, n+4$",
            "- Three consecutive odd integers: $n, n+2, n+4$",
            "**Age Problems:**",
            "- Current age: Let $x$ = current age",
            "- Age 5 years ago: $x - 5$",
            "- Age 5 years from now: $x + 5$",
            "- Time passes EQUALLY for everyone",
            "**Example - Consecutive:** 'Sum of three consecutive integers is 48'",
            "Let $n, n+1, n+2$ be the integers",
            "$n + (n+1) + (n+2) = 48$ → $3n + 3 = 48$ → $n = 15$",
            "Integers: 15, 16, 17",
            "**Example - Age:** 'In 5 years, Tom will be twice as old as he was 3 years ago'",
            "Let $x$ = Tom's current age",
            "In 5 years: $x + 5$, Was 3 years ago: $x - 3$",
            "Equation: $x + 5 = 2(x - 3)$"
          ],

          sampleProblems: [
            "The sum of three consecutive integers is 48. Find the integers.",
            "Find three consecutive even integers whose sum is 54.",
            "Sarah is 5 years older than John. In 3 years, Sarah will be twice as old as John. Find their current ages.",
            "A father is currently three times as old as his son. In 12 years, he will be twice as old as his son. Find their current ages."
          ],

          availableTools: []
        },

        {
          id: "geometric-real-world",
          title: "Geometric & Real-World Applications",
          difficulty: "advanced",
          prerequisites: ["number-age-problems"],
          masterySignals: "Student solves geometric problems (perimeter, angle relationships) and real-world problems (money, distance, rates) in 3+ problems, applies appropriate formulas, forms correct equations from context, and verifies solutions make sense",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct solutions to geometric/real-world problems",
                "Appropriate formulas applied correctly",
                "Solutions verified in context"
              ],
              qualitative: [
                "Uses perimeter formulas correctly: $P = 2l + 2w$ or $P = 4s$",
                "Handles angle relationships: complementary (sum 90°), supplementary (sum 180°)",
                "Solves rectangle/triangle problems with relationships",
                "Forms equations for money problems (cost, price, total)",
                "Handles distance problems with relationships",
                "Applies rate formulas when needed",
                "Correctly interprets geometric constraints (positive lengths)",
                "States answer with appropriate units and context",
                "Verifies solution makes geometric sense (positive lengths, reasonable angles)",
                "Can work with mixed units (converts if needed)"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on formulas or setup",
                "Makes errors applying geometric formulas",
                "Needs prompting on units or context"
              ],
              qualitative: [
                "Knows formulas but struggles to apply correctly",
                "Can solve with formula reminders",
                "Makes errors expressing relationships algebraically",
                "Forgets to check if geometric answer makes sense",
                "Struggles with problems requiring multiple steps",
                "Can handle one type well but struggles with others",
                "Needs help interpreting problem context",
                "Sometimes forgets units in final answer"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot apply geometric formulas",
                "Multiple errors in setup and solving",
                "Cannot connect problem to appropriate formula",
                "Cannot form equation from context"
              ],
              qualitative: [
                "Does not know geometric formulas",
                "Cannot identify which formula applies to problem",
                "Cannot translate geometric relationships to algebra",
                "Accepts impossible answers (negative lengths)",
                "Cannot handle money or distance contexts",
                "Forms equations that don't match problem",
                "Cannot organize work for multi-step geometric problems",
                "Does not understand angle relationships",
                "Cannot verify if geometric answer is reasonable",
                "Confused by real-world context"
              ]
            }
          },

          learningObjectives: [
            "Apply perimeter formulas in equation contexts",
            "Solve problems involving rectangle and triangle relationships",
            "Handle angle relationships: complementary and supplementary",
            "Form equations for money and cost problems",
            "Solve distance and rate problems with relationships",
            "Apply appropriate geometric formulas",
            "Verify solutions make sense geometrically (positive values)",
            "State answers with appropriate units",
            "Handle real-world constraints and contexts",
            "Connect multiple pieces of information into single equation"
          ],

          relevantFormulas: [
            "**Geometric Formulas:**",
            "- Rectangle perimeter: $P = 2l + 2w$",
            "- Square perimeter: $P = 4s$",
            "- Triangle perimeter: $P = a + b + c$",
            "- Complementary angles: sum = $90°$",
            "- Supplementary angles: sum = $180°$",
            "- Triangle angle sum: $180°$",
            "**Real-World:**",
            "- Total cost: (price per item) × (number of items)",
            "- Distance: rate × time",
            "- Money: coins × value = total",
            "**Example - Perimeter:** 'Rectangle length is 5 cm more than width, perimeter is 34 cm'",
            "Let $w$ = width, then length $= w + 5$",
            "$2w + 2(w+5) = 34$ → $4w + 10 = 34$ → $w = 6$ cm",
            "**Example - Money:** 'Total cost of pens at \\$2 each and pencils at \\$0.50 each is \\$15, bought 12 items total'",
            "Let $p$ = number of pens, then pencils $= 12 - p$",
            "$2p + 0.5(12-p) = 15$"
          ],

          sampleProblems: [
            "The length of a rectangle is 3 cm more than its width. If the perimeter is 26 cm, find the dimensions.",
            "Two angles are complementary. One angle is 15° more than the other. Find both angles.",
            "John bought pens for $2 each and pencils for $0.50 each. He spent $15 on 12 items. How many of each did he buy?",
            "The sum of two consecutive sides of a rectangle is 17 cm. If the perimeter is 50 cm, find all four sides."
          ],

          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Translate word problems into algebraic equations systematically",
      "Solve number relationship and age problems",
      "Apply equations to geometric contexts (perimeter, angles)",
      "Solve real-world problems involving money, distance, and rates"
    ],

    keyFormulas: `
**7-Step Word Problem Process:**
1. Read and understand
2. Define variable: Let $x$ = ...
3. Express other quantities
4. Form equation
5. Solve equation
6. Answer in context with units
7. Check makes sense

**Special Problem Types:**
- Consecutive integers: $n, n+1, n+2$
- Age problems: current, $x-5$ (past), $x+5$ (future)
- Perimeter: $P = 2l + 2w$ (rectangle)
- Angles: complementary (90°), supplementary (180°)

**Example:** "Length is 3 more than width, perimeter is 26"
Let $w$ = width → length $= w + 3$
$2w + 2(w+3) = 26$ → $w = 5$ cm
`
  }
};
