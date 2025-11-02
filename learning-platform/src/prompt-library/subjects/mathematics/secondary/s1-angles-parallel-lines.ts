/**
 * S1 Mathematics: Angles and Parallel Lines
 *
 * This module covers fundamental geometric concepts for Secondary 1 students,
 * including angle properties, angle relationships, parallel lines with transversals,
 * and geometric reasoning.
 */

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type AnglesParallelLinesTopicId =
  | 's1-math-angles-parallel-lines-introduction'
  | 's1-math-angles-parallel-lines-angles-at-point'
  | 's1-math-angles-parallel-lines-angles-on-line'
  | 's1-math-angles-parallel-lines-vertically-opposite'
  | 's1-math-angles-parallel-lines-basic-parallel'
  | 's1-math-angles-parallel-lines-advanced-parallel';

// ============================================================================
// AVAILABLE MATH TOOLS
// ============================================================================

export const S1_ANGLES_PARALLEL_LINES_MATH_TOOLS = [
  "parallelLinesTransversal",
  "anglesAtPoint",
  "anglesOnLine",
  "verticallyOppositeAngles"
];

// ============================================================================
// TOPIC CONFIGURATION
// ============================================================================

export const S1_ANGLES_PARALLEL_LINES_CONFIG = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for Secondary 1 students learning Angles and Parallel Lines.

Teaching Approach:
- Guide students to discover angle relationships through visual reasoning
- Help students see patterns in angle configurations (F, Z, C patterns)
- Use concrete diagrams and visualizations extensively
- Build from simple angle properties to complex multi-step reasoning
- Emphasize the importance of geometric reasoning and justification
- Celebrate insights when students recognize angle patterns or apply properties correctly
- Adapt difficulty organically based on student mastery

**Text-to-Speech Guidelines:**
- Say "angle A B C" or "angle x" clearly, not using symbols
- Spell out "F pattern", "Z pattern", "C pattern" (not "F-pattern")
- Say "degrees" not the degree symbol
- Say "equals" not "is equal to" for brevity
- Avoid saying symbols, always use words
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), use proper notation with degree symbols`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding.
IMPORTANT: Use the technical name (e.g., "parallelLinesTransversal") in the toolName field, NOT the display name.

Available tools for this topic:
- parallelLinesTransversal: Essential for showing parallel lines cut by transversal with all 8 angles
- anglesAtPoint: For showing angles meeting at a point (360° property)
- anglesOnLine: For showing angles on a straight line (180° property)
- verticallyOppositeAngles: For showing two intersecting lines forming 4 angles

Examples of effective tool use:
- parallelLinesTransversal to show corresponding angles (F-pattern)
- parallelLinesTransversal to demonstrate alternate angles (Z-pattern)
- parallelLinesTransversal to show co-interior angles (C-pattern)
- anglesAtPoint to visualize angles around a point summing to 360°
- anglesOnLine to demonstrate supplementary angles
- verticallyOppositeAngles to show opposite angles are equal

Parameter Guidelines:
- parallelLinesTransversal: Only needs ONE known angle and its position (0-7)
  Auto-calculates all other angles. Use highlightPattern to emphasize F/Z/C patterns.
- anglesAtPoint: Provide array of 2-6 angles (use null for unknowns)
- anglesOnLine: Provide array of 2-4 angles on a straight line
- verticallyOppositeAngles: Provide 4 angles in clockwise order from top`,

  MATH_TOOLS_AVAILABLE: S1_ANGLES_PARALLEL_LINES_MATH_TOOLS
};

// ============================================================================
// SUBTOPICS CONFIGURATION
// ============================================================================

export const S1_MATH_ANGLES_PARALLEL_LINES_SUBTOPICS = {
  // ========================================================================
  // SUBTOPIC 1: INTRODUCTION TO ANGLES
  // ========================================================================

  's1-math-angles-parallel-lines-introduction': {
    displayName: 'Introduction to Angles',
    topicName: 'Angles and Parallel Lines',

    progressionStructure: {
      sections: [
        {
          id: "angle-basics-notation-types",
          title: "Angle Basics, Notation, and Types",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student understands what angles are, uses correct notation (∠ABC), identifies all angle types (acute, right, obtuse, straight, reflex), and can measure or estimate angles accurately",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "4+ correct angle type identifications without hints",
                "Correctly uses angle notation in all cases",
                "Accurately measures or estimates angles within 5°"
              ],
              qualitative: [
                "Understands angles as measures of rotation between two lines",
                "Correctly uses ∠ABC notation (vertex in middle)",
                "Identifies acute angles (0° < θ < 90°) consistently",
                "Identifies right angles (θ = 90°) and recognizes right angle symbol",
                "Identifies obtuse angles (90° < θ < 180°) consistently",
                "Identifies straight angles (θ = 180°) as angles on a line",
                "Identifies reflex angles (180° < θ < 360°) correctly",
                "Can estimate angle sizes reasonably well",
                "Explains the difference between angle types clearly"
              ]
            },
            developing: {
              quantitative: [
                "2-3 correct with hints about angle ranges",
                "Needs prompting for notation or type classification"
              ],
              qualitative: [
                "Understands basic concept but confuses some types",
                "Sometimes uses incorrect notation (e.g., ∠BAC instead of ∠ABC)",
                "Confuses obtuse and reflex angles occasionally",
                "Can identify right and straight angles but struggles with others",
                "Needs reference to angle type definitions",
                "Estimation is inconsistent (errors > 10°)",
                "Can classify with examples but not independently"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot consistently identify angle types",
                "Multiple notation errors",
                "Estimates are very inaccurate (errors > 20°)"
              ],
              qualitative: [
                "Does not understand what an angle represents",
                "Cannot use angle notation correctly",
                "Cannot distinguish between angle types",
                "Thinks all angles are the same",
                "Cannot identify right angles reliably",
                "Has no sense of angle magnitude",
                "Cannot estimate or compare angle sizes",
                "Confuses angles with lines or shapes"
              ]
            }
          },

          learningObjectives: [
            "Understand angles as measures of rotation between two lines",
            "Use correct angle notation (∠ABC with vertex in middle)",
            "Identify acute angles (0° < θ < 90°)",
            "Identify right angles (θ = 90°)",
            "Identify obtuse angles (90° < θ < 180°)",
            "Identify straight angles (θ = 180°)",
            "Identify reflex angles (180° < θ < 360°)",
            "Measure and estimate angles accurately"
          ],

          relevantFormulas: [
            "Acute angle: $0^{\\circ} < \\theta < 90^{\\circ}$",
            "Right angle: $\\theta = 90^{\\circ}$",
            "Obtuse angle: $90^{\\circ} < \\theta < 180^{\\circ}$",
            "Straight angle: $\\theta = 180^{\\circ}$",
            "Reflex angle: $180^{\\circ} < \\theta < 360^{\\circ}$",
            "Full rotation: $360^{\\circ}$"
          ],

          sampleProblems: [
            "Classify the following angles: 45°, 90°, 120°, 180°, 270°",
            "What type of angle is ∠ABC if it measures 135°?",
            "If ∠PQR = 200°, what type of angle is it?"
          ],

          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Understand what angles are and how they are formed",
      "Use correct angle notation",
      "Classify angles by type (acute, right, obtuse, straight, reflex)",
      "Measure and estimate angles"
    ],

    keyFormulas: `
**Angle Types:**
- Acute: $0^{\\circ} < \\theta < 90^{\\circ}$ (smaller than right angle)
- Right: $\\theta = 90^{\\circ}$ (quarter turn)
- Obtuse: $90^{\\circ} < \\theta < 180^{\\circ}$ (larger than right, smaller than straight)
- Straight: $\\theta = 180^{\\circ}$ (half turn, angles on a line)
- Reflex: $180^{\\circ} < \\theta < 360^{\\circ}$ (larger than straight)
- Full rotation: $360^{\\circ}$ (complete turn)

**Notation:**
- $\\angle ABC$ means angle at vertex B
- Vertex always in the middle of notation
`
  },

  // ========================================================================
  // SUBTOPIC 2: ANGLES AT A POINT
  // ========================================================================

  's1-math-angles-parallel-lines-angles-at-point': {
    displayName: 'Angles at a Point',
    topicName: 'Angles and Parallel Lines',

    progressionStructure: {
      sections: [
        {
          id: "angles-at-point-basic",
          title: "Angles at a Point - Basic Property",
          difficulty: "foundational",
          prerequisites: ["angle-basics-notation-types"],
          masterySignals: "Student understands that angles at a point sum to 360°, finds missing angles in 3+ problems with numerical values, and can explain the property",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct missing angle calculations without hints",
                "Consistently applies 360° property correctly"
              ],
              qualitative: [
                "Understands angles around a point sum to 360°",
                "Correctly finds missing angle by subtracting known angles from 360°",
                "Can handle 2-5 angles meeting at a point",
                "Checks answer by verifying sum equals 360°",
                "Explains why angles at a point sum to 360° (full rotation)",
                "Recognizes when angles form a complete turn around a point",
                "Can solve problems like: a + b + c = 360°, find missing angle"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints about the 360° property",
                "Needs prompting to subtract from 360°"
              ],
              qualitative: [
                "Knows the property but needs reminder",
                "Makes arithmetic errors when calculating missing angles",
                "Can apply with two angles but struggles with 3-4 angles",
                "Forgets to verify sum equals 360°",
                "Needs examples to remember the property",
                "Sometimes confuses with 180° property"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot apply 360° property",
                "Multiple calculation errors",
                "Does not know how to find missing angle"
              ],
              qualitative: [
                "Does not know angles at a point sum to 360°",
                "Cannot identify when property applies",
                "Randomly adds or subtracts angles",
                "Cannot handle more than 2 angles",
                "Does not understand the concept of angles around a point",
                "Cannot verify if answer is reasonable",
                "Confuses with other angle properties"
              ]
            }
          },

          learningObjectives: [
            "Understand that angles at a point sum to 360°",
            "Find missing angles at a point using the 360° property",
            "Recognize angle configurations around a point",
            "Verify answers by checking sum equals 360°",
            "Explain why angles at a point sum to 360° (full rotation)",
            "Handle problems with 2-5 angles meeting at a point"
          ],

          relevantFormulas: [
            "Angles at a Point: Sum = $360^{\\circ}$",
            "Full rotation around a point is $360^{\\circ}$",
            "To find missing angle: Subtract known angles from $360^{\\circ}$",
            "Example: If $a = 120^{\\circ}$, $b = 150^{\\circ}$, then $c = 360^{\\circ} - 120^{\\circ} - 150^{\\circ} = 90^{\\circ}$"
          ],

          sampleProblems: [
            "Three angles meet at a point. If two angles are 120° and 150°, find the third angle.",
            "Four angles at a point are 80°, 90°, 100°, and x. Find x.",
            "Angles at a point are 2x, 3x, and 4x. Find the value of x and each angle."
          ],

          availableTools: ["anglesAtPoint"]
        },

        {
          id: "angles-at-point-algebraic",
          title: "Angles at a Point - With Algebra",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["angles-at-point-basic"],
          masterySignals: "Student solves algebraic angle problems at a point in 3+ cases, sets up and solves equations using 360° property, handles expressions like 2x + 3x + 4x = 360°, and finds all angle values",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct algebraic solutions without hints",
                "All angle values calculated correctly after finding variable"
              ],
              qualitative: [
                "Sets up equation using sum = 360° correctly",
                "Combines like terms in expressions (2x + 3x + 4x)",
                "Solves for x accurately",
                "Calculates all individual angle values",
                "Verifies answer by checking sum equals 360°",
                "Can handle expressions with coefficients and constants (2x + 30 + 3x)",
                "Understands ratio problems (angles in ratio 2:3:4)",
                "Shows clear working throughout"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on setting up equation",
                "Finds x but makes errors calculating angle values"
              ],
              qualitative: [
                "Can set up equation with prompting",
                "Makes algebraic errors combining like terms",
                "Solves for x but forgets to find actual angles",
                "Can handle simple cases (x + 2x + 3x) but struggles with constants",
                "Forgets to verify final answer",
                "Needs help with ratio problems"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot set up algebraic equation",
                "Multiple errors in solving",
                "Cannot find angle values after solving for x"
              ],
              qualitative: [
                "Does not know how to translate problem to algebra",
                "Cannot combine like terms",
                "Cannot solve equations",
                "Does not understand what x represents",
                "Cannot work with ratios",
                "Randomly guesses values",
                "Cannot verify answer",
                "Does not understand connection between x and actual angles"
              ]
            }
          },

          learningObjectives: [
            "Set up algebraic equations using angles at a point property",
            "Combine like terms in angle expressions",
            "Solve linear equations to find variable values",
            "Calculate all individual angle values from the variable",
            "Handle expressions with coefficients and constants",
            "Solve ratio problems for angles at a point",
            "Verify solutions by checking sum equals 360°"
          ],

          relevantFormulas: [
            "Algebraic setup: Sum of expressions = $360^{\\circ}$",
            "Example: $2x + 3x + 4x = 360^{\\circ}$",
            "Combine: $9x = 360^{\\circ}$",
            "Solve: $x = 40^{\\circ}$",
            "Find angles: $2(40^{\\circ}) = 80^{\\circ}$, $3(40^{\\circ}) = 120^{\\circ}$, $4(40^{\\circ}) = 160^{\\circ}$",
            "Ratio problems: If angles in ratio $a:b:c$, use $ax + bx + cx = 360^{\\circ}$"
          ],

          sampleProblems: [
            "Three angles at a point are 2x, 3x, and 4x. Find x and each angle.",
            "Angles at a point are x + 30°, 2x, and 3x - 60°. Find all angles.",
            "Four angles at a point are in the ratio 2:3:4:5. Find each angle."
          ],

          availableTools: ["anglesAtPoint"]
        }
      ]
    },

    learningObjectives: [
      "Understand and apply the angles at a point property (sum = 360°)",
      "Find missing angles numerically and algebraically",
      "Solve ratio problems involving angles at a point",
      "Verify solutions"
    ],

    keyFormulas: `
**Angles at a Point:**
- Sum of all angles around a point = $360^{\\circ}$
- Full rotation = $360^{\\circ}$

**Finding Missing Angles:**
- Numerical: Subtract known angles from $360^{\\circ}$
- Algebraic: Set up equation, combine like terms, solve for variable

**Ratio Problems:**
- If angles in ratio $a:b:c$, let angles be $ax$, $bx$, $cx$
- Then $ax + bx + cx = 360^{\\circ}$

**Example:**
$2x + 3x + 4x = 360^{\\circ} \\Rightarrow 9x = 360^{\\circ} \\Rightarrow x = 40^{\\circ}$
`
  },

  // ========================================================================
  // SUBTOPIC 3: ANGLES ON A STRAIGHT LINE
  // ========================================================================

  's1-math-angles-parallel-lines-angles-on-line': {
    displayName: 'Angles on a Straight Line',
    topicName: 'Angles and Parallel Lines',

    progressionStructure: {
      sections: [
        {
          id: "angles-on-line-basic",
          title: "Angles on a Straight Line - Basic Property",
          difficulty: "foundational",
          prerequisites: ["angles-at-point-basic"],
          masterySignals: "Student understands that angles on a straight line sum to 180°, finds missing angles in 3+ problems with numerical values, and explains the supplementary angle property",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct missing angle calculations without hints",
                "Consistently applies 180° property correctly"
              ],
              qualitative: [
                "Understands angles on a straight line sum to 180°",
                "Correctly finds missing angle by subtracting from 180°",
                "Can handle 2-4 angles on a straight line",
                "Checks answer by verifying sum equals 180°",
                "Explains why angles on a line sum to 180° (straight angle)",
                "Understands supplementary angles (two angles summing to 180°)",
                "Can identify when angles form a straight line",
                "Distinguishes between 180° and 360° properties correctly"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints about the 180° property",
                "Needs prompting to subtract from 180°"
              ],
              qualitative: [
                "Knows the property but needs reminder",
                "Makes arithmetic errors when calculating",
                "Can apply with two angles but struggles with 3-4 angles",
                "Forgets to verify sum equals 180°",
                "Sometimes confuses with 360° property",
                "Can apply with examples but not independently"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot apply 180° property",
                "Multiple calculation errors",
                "Does not know how to find missing angle"
              ],
              qualitative: [
                "Does not know angles on a line sum to 180°",
                "Cannot identify when property applies",
                "Randomly adds or subtracts angles",
                "Cannot distinguish straight line from point configurations",
                "Always uses 360° regardless of situation",
                "Cannot verify if answer is reasonable",
                "Does not understand supplementary angles"
              ]
            }
          },

          learningObjectives: [
            "Understand that angles on a straight line sum to 180°",
            "Find missing angles on a line using the 180° property",
            "Recognize angle configurations on a straight line",
            "Understand supplementary angles",
            "Verify answers by checking sum equals 180°",
            "Distinguish between angles at a point (360°) and on a line (180°)",
            "Handle problems with 2-4 angles on a straight line"
          ],

          relevantFormulas: [
            "Angles on a Straight Line: Sum = $180^{\\circ}$",
            "Straight angle = $180^{\\circ}$ (half rotation)",
            "Supplementary angles: Two angles that sum to $180^{\\circ}$",
            "To find missing angle: Subtract known angles from $180^{\\circ}$",
            "Example: If $a = 70^{\\circ}$, $b = 50^{\\circ}$, then $c = 180^{\\circ} - 70^{\\circ} - 50^{\\circ} = 60^{\\circ}$"
          ],

          sampleProblems: [
            "Two angles on a straight line are 110° and x. Find x.",
            "Three angles on a straight line are 50°, 70°, and x. Find x.",
            "Angles on a line are 2x and 3x. Find x and each angle."
          ],

          availableTools: ["anglesOnLine"]
        },

        {
          id: "angles-on-line-algebraic",
          title: "Angles on a Line - With Algebra and Word Problems",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["angles-on-line-basic", "angles-at-point-algebraic"],
          masterySignals: "Student solves algebraic angle problems on a line in 3+ cases, handles word problems describing angle relationships, sets up equations using 180° property, and finds all angle values",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct algebraic/word problem solutions",
                "All angle values calculated correctly"
              ],
              qualitative: [
                "Sets up equation using sum = 180° correctly",
                "Translates word descriptions to algebra (e.g., 'twice the other angle')",
                "Solves for x accurately",
                "Calculates all individual angle values",
                "Verifies answer by checking sum equals 180°",
                "Handles expressions like x + 30, 2x - 10, etc.",
                "Can solve 'one angle is 20° more than the other' type problems",
                "Shows clear working and checks reasonableness"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on equation setup",
                "Can solve simple cases but struggles with word problems"
              ],
              qualitative: [
                "Can set up equation for simple cases",
                "Struggles to translate words to algebra",
                "Makes algebraic errors",
                "Finds x but forgets actual angles",
                "Can handle numerical coefficients but not word descriptions",
                "Needs prompting to verify answer"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot set up algebraic equations",
                "Cannot translate word problems to algebra",
                "Multiple solving errors"
              ],
              qualitative: [
                "Does not know how to start word problems",
                "Cannot translate relationships to expressions",
                "Cannot combine like terms or solve equations",
                "Does not understand variable representation",
                "Randomly guesses values",
                "Cannot verify or check answers",
                "Does not see connection between x and actual angles"
              ]
            }
          },

          learningObjectives: [
            "Set up algebraic equations using angles on a line property",
            "Translate word descriptions to algebraic expressions",
            "Solve problems like 'one angle is twice another'",
            "Handle expressions with constants (x + 30, 2x - 10)",
            "Calculate all individual angle values",
            "Solve word problems involving angle relationships",
            "Verify solutions by checking sum equals 180°",
            "Check if angles make sense in context"
          ],

          relevantFormulas: [
            "Algebraic setup: Sum of expressions = $180^{\\circ}$",
            "Example: If one angle is $x$ and another is $2x$:",
            "$x + 2x = 180^{\\circ} \\Rightarrow 3x = 180^{\\circ} \\Rightarrow x = 60^{\\circ}$",
            "Word problems: Translate 'more than', 'less than', 'twice', etc.",
            "'One angle is 30° more than the other': $x$ and $x + 30^{\\circ}$",
            "'Angles in ratio 2:3': $2x$ and $3x$"
          ],

          sampleProblems: [
            "Two angles on a line are x and 2x. Find both angles.",
            "One angle is 30° more than the other, and they are on a straight line. Find both angles.",
            "Three angles on a line are x, x + 20°, and 2x - 40°. Find all angles."
          ],

          availableTools: ["anglesOnLine"]
        }
      ]
    },

    learningObjectives: [
      "Understand and apply angles on a straight line property (sum = 180°)",
      "Find missing angles numerically and algebraically",
      "Understand supplementary angles",
      "Translate word problems to algebraic equations",
      "Verify solutions"
    ],

    keyFormulas: `
**Angles on a Straight Line:**
- Sum of angles on a straight line = $180^{\\circ}$
- Straight angle = $180^{\\circ}$ (half turn)
- Supplementary angles sum to $180^{\\circ}$

**Finding Missing Angles:**
- Numerical: Subtract known angles from $180^{\\circ}$
- Algebraic: Set up equation, solve for variable

**Word Problems:**
- 'Twice another angle': $x$ and $2x$
- '30° more than': $x$ and $x + 30^{\\circ}$
- 'Ratio 2:3': $2x$ and $3x$

**Example:**
$x + 2x = 180^{\\circ} \\Rightarrow 3x = 180^{\\circ} \\Rightarrow x = 60^{\\circ}$
Angles are $60^{\\circ}$ and $120^{\\circ}$
`
  },

  // ========================================================================
  // SUBTOPIC 4: VERTICALLY OPPOSITE ANGLES
  // ========================================================================

  's1-math-angles-parallel-lines-vertically-opposite': {
    displayName: 'Vertically Opposite Angles',
    topicName: 'Angles and Parallel Lines',

    progressionStructure: {
      sections: [
        {
          id: "vertically-opposite-basic",
          title: "Vertically Opposite Angles - Basic Property",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["angles-on-line-basic"],
          masterySignals: "Student understands that vertically opposite angles are equal, identifies opposite angle pairs correctly in 3+ diagrams, finds missing angles, and can explain the property",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications and calculations",
                "Correctly identifies opposite pairs in all cases"
              ],
              qualitative: [
                "Understands vertically opposite angles are equal",
                "Correctly identifies opposite angle pairs in X-shaped diagrams",
                "Explains why opposite angles are equal (using 180° property)",
                "Finds missing angles using opposite angle property",
                "Can verify using both opposite angles and straight line properties",
                "Recognizes when two lines intersect forming 4 angles",
                "Understands that if one angle is known, all four can be found",
                "Can explain: if a = x, then opposite = x; if a = x, then adjacent = 180° - x"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints about which angles are opposite",
                "Needs prompting to identify pairs"
              ],
              qualitative: [
                "Knows opposite angles are equal but can't always identify them",
                "Sometimes confuses opposite with adjacent angles",
                "Can apply property when told which angles are opposite",
                "Makes calculation errors when finding multiple angles",
                "Needs visual cues to identify opposite pairs",
                "Can verify with help"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot identify opposite angle pairs",
                "Multiple errors in using property",
                "Cannot find missing angles"
              ],
              qualitative: [
                "Does not understand what 'vertically opposite' means",
                "Cannot identify which angles are opposite in X-diagrams",
                "Does not know opposite angles are equal",
                "Randomly assigns angle values",
                "Cannot explain why property works",
                "Confuses with other angle properties",
                "Cannot work with intersecting lines"
              ]
            }
          },

          learningObjectives: [
            "Understand that vertically opposite angles are equal",
            "Identify opposite angle pairs when two lines intersect",
            "Find missing angles using the opposite angles property",
            "Explain why vertically opposite angles are equal",
            "Use both opposite angles and straight line properties together",
            "Recognize X-shaped angle configurations",
            "Verify answers using multiple angle properties"
          ],

          relevantFormulas: [
            "Vertically Opposite Angles: Equal",
            "When two straight lines intersect, they form 4 angles",
            "Opposite angles (across from each other) are equal",
            "Adjacent angles (next to each other) sum to $180^{\\circ}$",
            "Proof: If $a + b = 180^{\\circ}$ and $c + b = 180^{\\circ}$, then $a = c$",
            "Example: If one angle = $70^{\\circ}$, opposite angle = $70^{\\circ}$, adjacent angles = $110^{\\circ}$"
          ],

          sampleProblems: [
            "Two lines intersect. One angle is 65°. Find all four angles.",
            "Identify the vertically opposite angles in a diagram and find their values.",
            "If ∠a = 120°, find all other angles formed by two intersecting lines."
          ],

          availableTools: ["verticallyOppositeAngles"]
        },

        {
          id: "vertically-opposite-combined",
          title: "Combined Angle Properties",
          difficulty: "intermediate",
          prerequisites: ["vertically-opposite-basic", "angles-at-point-algebraic"],
          masterySignals: "Student solves complex problems combining vertically opposite angles with angles at a point and on a line in 3+ multi-step problems, sets up algebraic equations, and shows systematic reasoning",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multi-property solutions",
                "All angles found using appropriate properties"
              ],
              qualitative: [
                "Identifies which angle property to apply at each step",
                "Combines vertically opposite angles with 180° property",
                "Combines vertically opposite angles with 360° property",
                "Solves algebraic problems using multiple properties",
                "Shows clear reasoning: 'angles on a line, so...', 'opposite angles, so...'",
                "Verifies answer using alternative properties",
                "Can handle complex multi-line diagrams",
                "Works systematically through multi-step problems",
                "Checks all angles sum correctly"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on which property to use",
                "Can apply one property but struggles to combine"
              ],
              qualitative: [
                "Knows individual properties but struggles to apply multiple",
                "Needs prompting on which property to use when",
                "Makes errors tracking multiple angle relationships",
                "Can start problem but gets stuck partway",
                "Forgets to use all given information",
                "Needs help organizing multi-step approach"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot handle multi-property problems",
                "Multiple errors throughout",
                "Cannot organize approach"
              ],
              qualitative: [
                "Overwhelmed by complex angle diagrams",
                "Cannot identify which properties apply",
                "Randomly applies properties",
                "Cannot track multiple angle relationships",
                "Makes systematic errors",
                "Cannot organize multi-step solution",
                "Gives up on complex problems",
                "Cannot verify answers"
              ]
            }
          },

          learningObjectives: [
            "Combine vertically opposite angles with other angle properties",
            "Use multiple angle properties in one problem",
            "Solve complex algebraic problems with combined properties",
            "Show clear reasoning for each step",
            "Verify answers using alternative methods",
            "Handle complex multi-line angle diagrams",
            "Work systematically through multi-step problems",
            "Identify which angle property applies at each step"
          ],

          relevantFormulas: [
            "Combined Properties:",
            "- Vertically opposite angles: Equal",
            "- Angles on a line: Sum = $180^{\\circ}$",
            "- Angles at a point: Sum = $360^{\\circ}$",
            "Strategy: Identify configuration, apply appropriate property",
            "Multi-step approach:",
            "1. Identify given angles",
            "2. Use opposite angles property to find equal angles",
            "3. Use 180° or 360° property to find remaining angles",
            "4. Verify all relationships hold"
          ],

          sampleProblems: [
            "Three lines meet at a point. Two opposite angles are 3x and x + 80°. Find all angles.",
            "Two lines intersect. One angle is 2x + 10° and its opposite is 3x - 20°. Find all four angles.",
            "Multiple lines meet at a point forming 6 angles. Given some angles, find all others using properties."
          ],

          availableTools: ["verticallyOppositeAngles", "anglesAtPoint", "anglesOnLine"]
        }
      ]
    },

    learningObjectives: [
      "Understand and apply vertically opposite angles property (equal)",
      "Identify opposite angle pairs in intersecting lines",
      "Combine opposite angles with other angle properties",
      "Solve multi-step problems using multiple properties",
      "Show clear geometric reasoning"
    ],

    keyFormulas: `
**Vertically Opposite Angles:**
- When two lines intersect, opposite angles are equal
- Forms X-shaped configuration with 4 angles
- If you know one angle, you can find all four

**Combined with Other Properties:**
- Adjacent angles: Sum to $180^{\\circ}$ (on a line)
- Opposite angles: Equal
- All angles at point: Sum to $360^{\\circ}$

**Example:**
If one angle = $70^{\\circ}$:
- Opposite angle = $70^{\\circ}$ (equal)
- Adjacent angles = $110^{\\circ}$ (supplementary)
Check: $70 + 110 + 70 + 110 = 360$ ✓
`
  },

  // ========================================================================
  // SUBTOPIC 5: PARALLEL LINES - BASIC
  // ========================================================================

  's1-math-angles-parallel-lines-basic-parallel': {
    displayName: 'Parallel Lines - Basic',
    topicName: 'Angles and Parallel Lines',

    progressionStructure: {
      sections: [
        {
          id: "corresponding-angles",
          title: "Corresponding Angles (F-Pattern)",
          difficulty: "intermediate",
          prerequisites: ["vertically-opposite-basic"],
          masterySignals: "Student identifies corresponding angle pairs in 3+ diagrams, understands they are equal when lines are parallel, recognizes F-pattern, finds missing angles, and can explain the property",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct corresponding angle identifications",
                "Correctly applies equal property in all cases"
              ],
              qualitative: [
                "Identifies corresponding angles (matching positions, F-pattern)",
                "Understands corresponding angles are equal when lines are parallel",
                "Recognizes F or mirror-F shape formed by angle pair",
                "Can identify all 4 corresponding angle pairs in a diagram",
                "Finds missing angles using corresponding angles property",
                "Explains that angles are in 'same relative position'",
                "Can verify if lines are parallel using corresponding angles",
                "Distinguishes corresponding angles from alternate and co-interior"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints about F-pattern",
                "Needs visual cues to identify corresponding pairs"
              ],
              qualitative: [
                "Knows property but struggles to identify pairs",
                "Can recognize obvious F-patterns but not mirror-F",
                "Sometimes confuses with alternate angles",
                "Can apply when told which angles are corresponding",
                "Needs prompting to use F-pattern recognition",
                "Can find one pair but misses others"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot identify corresponding angles",
                "Multiple errors in applying property",
                "Cannot recognize F-pattern"
              ],
              qualitative: [
                "Does not understand what 'corresponding' means",
                "Cannot see F-pattern in diagrams",
                "Does not know corresponding angles are equal",
                "Randomly identifies angle pairs",
                "Cannot distinguish from other angle pair types",
                "Does not understand parallel lines concept",
                "Cannot find missing angles using the property"
              ]
            }
          },

          learningObjectives: [
            "Understand that corresponding angles are equal when lines are parallel",
            "Identify corresponding angle pairs (F-pattern)",
            "Recognize F or mirror-F shapes in parallel line diagrams",
            "Find missing angles using corresponding angles property",
            "Explain that corresponding angles are in matching positions",
            "Identify all 4 corresponding pairs in a parallel lines diagram",
            "Use corresponding angles to determine if lines are parallel",
            "Distinguish corresponding angles from other angle pair types"
          ],

          relevantFormulas: [
            "Corresponding Angles (F-Pattern):",
            "When a transversal cuts parallel lines:",
            "- Corresponding angles are EQUAL",
            "- They are in matching positions (same side, same relative height)",
            "- Form F or mirror-F pattern",
            "Recognition: Look for F-shape connecting the angle pair",
            "Example: If upper-left angle on top line = $70^{\\circ}$,",
            "then upper-left angle on bottom line = $70^{\\circ}$ (corresponding)"
          ],

          sampleProblems: [
            "Parallel lines are cut by a transversal. One angle is 110°. Find its corresponding angle.",
            "Identify all 4 corresponding angle pairs in a parallel lines diagram.",
            "If angle a = 3x + 20° and its corresponding angle = 5x - 40°, find x and the angles."
          ],

          availableTools: ["parallelLinesTransversal"]
        },

        {
          id: "alternate-angles",
          title: "Alternate Angles (Z-Pattern)",
          difficulty: "intermediate",
          prerequisites: ["corresponding-angles"],
          masterySignals: "Student identifies alternate angle pairs in 3+ diagrams, understands they are equal when lines are parallel, recognizes Z-pattern, finds missing angles, and can explain the property",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct alternate angle identifications",
                "Correctly applies equal property in all cases"
              ],
              qualitative: [
                "Identifies alternate angles (opposite sides, Z-pattern)",
                "Understands alternate angles are equal when lines are parallel",
                "Recognizes Z or reverse-Z shape formed by angle pair",
                "Can identify both pairs of alternate angles in a diagram",
                "Finds missing angles using alternate angles property",
                "Explains that angles are on 'opposite sides, between the lines'",
                "Can verify if lines are parallel using alternate angles",
                "Distinguishes alternate angles from corresponding and co-interior",
                "Understands 'alternate interior angles' terminology"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints about Z-pattern",
                "Needs visual cues to identify alternate pairs"
              ],
              qualitative: [
                "Knows property but struggles to identify pairs",
                "Can recognize obvious Z-patterns but not reverse-Z",
                "Sometimes confuses with corresponding angles",
                "Can apply when told which angles are alternate",
                "Needs prompting to use Z-pattern recognition",
                "Can find one pair but misses the other"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot identify alternate angles",
                "Multiple errors in applying property",
                "Cannot recognize Z-pattern"
              ],
              qualitative: [
                "Does not understand what 'alternate' means",
                "Cannot see Z-pattern in diagrams",
                "Does not know alternate angles are equal",
                "Randomly identifies angle pairs",
                "Cannot distinguish from other angle pair types",
                "Does not understand which angles are 'interior'",
                "Cannot find missing angles using the property"
              ]
            }
          },

          learningObjectives: [
            "Understand that alternate angles are equal when lines are parallel",
            "Identify alternate angle pairs (Z-pattern)",
            "Recognize Z or reverse-Z shapes in parallel line diagrams",
            "Find missing angles using alternate angles property",
            "Explain that alternate angles are on opposite sides of transversal",
            "Identify both pairs of alternate angles in a diagram",
            "Use alternate angles to determine if lines are parallel",
            "Distinguish alternate angles from other angle pair types"
          ],

          relevantFormulas: [
            "Alternate Angles (Z-Pattern):",
            "When a transversal cuts parallel lines:",
            "- Alternate angles are EQUAL",
            "- They are on opposite sides of the transversal",
            "- Both are between the parallel lines (interior)",
            "- Form Z or reverse-Z pattern",
            "Recognition: Look for Z-shape connecting the angle pair",
            "Example: If right-interior angle on top line = $65^{\\circ}$,",
            "then left-interior angle on bottom line = $65^{\\circ}$ (alternate)"
          ],

          sampleProblems: [
            "Parallel lines are cut by a transversal. One interior angle is 75°. Find its alternate angle.",
            "Identify both pairs of alternate angles in a parallel lines diagram.",
            "If angle a = 2x + 15° and its alternate angle = 3x - 20°, find x and the angles."
          ],

          availableTools: ["parallelLinesTransversal"]
        },

        {
          id: "co-interior-angles",
          title: "Co-Interior Angles (C-Pattern)",
          difficulty: "intermediate",
          prerequisites: ["alternate-angles"],
          masterySignals: "Student identifies co-interior angle pairs in 3+ diagrams, understands they sum to 180° when lines are parallel, recognizes C-pattern, finds missing angles, and can explain the property",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct co-interior angle identifications and calculations",
                "Correctly applies sum = 180° property in all cases"
              ],
              qualitative: [
                "Identifies co-interior angles (same side, C-pattern)",
                "Understands co-interior angles sum to 180° when lines are parallel",
                "Recognizes C or reverse-C shape formed by angle pair",
                "Can identify both pairs of co-interior angles in a diagram",
                "Finds missing angles using sum = 180° property",
                "Explains that angles are on 'same side, between the lines'",
                "Can verify if lines are parallel using co-interior angles",
                "Distinguishes co-interior from corresponding and alternate",
                "Understands these are also called 'supplementary interior angles'",
                "Knows why they sum to 180° (using corresponding + straight line)"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints about C-pattern or sum property",
                "Needs prompting that sum = 180°, not equal"
              ],
              qualitative: [
                "Knows property but struggles to identify pairs",
                "Can recognize C-pattern with help",
                "Sometimes thinks co-interior angles are equal (confuses with others)",
                "Can apply when told which angles are co-interior",
                "Makes arithmetic errors when finding missing angle",
                "Can find one pair but misses the other"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot identify co-interior angles",
                "Thinks they are equal instead of supplementary",
                "Cannot calculate missing angles"
              ],
              qualitative: [
                "Does not understand what 'co-interior' means",
                "Cannot see C-pattern in diagrams",
                "Does not know co-interior angles sum to 180°",
                "Randomly identifies angle pairs",
                "Confuses with corresponding or alternate angles",
                "Does not understand 'same side' concept",
                "Cannot find missing angles using the property"
              ]
            }
          },

          learningObjectives: [
            "Understand that co-interior angles sum to 180° when lines are parallel",
            "Identify co-interior angle pairs (C-pattern)",
            "Recognize C or reverse-C shapes in parallel line diagrams",
            "Find missing angles using sum = 180° property",
            "Explain that co-interior angles are on same side of transversal",
            "Identify both pairs of co-interior angles in a diagram",
            "Use co-interior angles to determine if lines are parallel",
            "Distinguish co-interior angles from other angle pair types",
            "Understand supplementary interior angles terminology"
          ],

          relevantFormulas: [
            "Co-Interior Angles (C-Pattern):",
            "When a transversal cuts parallel lines:",
            "- Co-interior angles SUM to $180^{\\circ}$ (supplementary)",
            "- They are on the SAME side of the transversal",
            "- Both are between the parallel lines (interior)",
            "- Form C or reverse-C pattern",
            "Recognition: Look for C-shape connecting the angle pair",
            "Example: If one co-interior angle = $110^{\\circ}$,",
            "then the other = $180^{\\circ} - 110^{\\circ} = 70^{\\circ}$",
            "Why: Corresponding angle equals first, and co-interior is supplementary to corresponding"
          ],

          sampleProblems: [
            "Parallel lines are cut by a transversal. One interior angle is 125°. Find its co-interior angle.",
            "Identify both pairs of co-interior angles in a parallel lines diagram.",
            "If two co-interior angles are 2x + 10° and 3x - 20°, find x and both angles."
          ],

          availableTools: ["parallelLinesTransversal"]
        }
      ]
    },

    learningObjectives: [
      "Identify and use corresponding angles (F-pattern, equal)",
      "Identify and use alternate angles (Z-pattern, equal)",
      "Identify and use co-interior angles (C-pattern, sum = 180°)",
      "Distinguish between the three angle pair types",
      "Determine if lines are parallel using angle properties"
    ],

    keyFormulas: `
**Parallel Lines Cut by Transversal:**

**Corresponding Angles (F-Pattern):**
- Same side, matching positions → EQUAL
- Form F or mirror-F shape

**Alternate Angles (Z-Pattern):**
- Opposite sides, both interior → EQUAL
- Form Z or reverse-Z shape

**Co-Interior Angles (C-Pattern):**
- Same side, both interior → SUM = $180^{\\circ}$
- Form C or reverse-C shape

**Summary Table:**
| Type | Pattern | Property |
|------|---------|----------|
| Corresponding | F | Equal |
| Alternate | Z | Equal |
| Co-Interior | C | Sum = $180^{\\circ}$ |

**Note:** All properties require parallel lines!
`
  },

  // ========================================================================
  // SUBTOPIC 6: PARALLEL LINES - ADVANCED
  // ========================================================================

  's1-math-angles-parallel-lines-advanced-parallel': {
    displayName: 'Parallel Lines - Advanced',
    topicName: 'Angles and Parallel Lines',

    progressionStructure: {
      sections: [
        {
          id: "multi-step-parallel-problems",
          title: "Multi-Step Parallel Lines Problems",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["co-interior-angles"],
          masterySignals: "Student solves complex multi-step problems in 3+ cases using combinations of F/Z/C patterns, vertically opposite angles, and angles on a line, shows clear reasoning, and finds all required angles",
          estimatedQuestions: "4-5 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multi-step solutions",
                "All angles found using appropriate properties",
                "Clear reasoning shown for each step"
              ],
              qualitative: [
                "Identifies which property to apply at each step",
                "Combines parallel line properties with vertically opposite and straight line",
                "Shows systematic approach: find one angle, then use it to find others",
                "Clearly states reasons: 'corresponding angles', 'alternate angles', etc.",
                "Solves algebraic multi-step problems",
                "Handles complex diagrams with multiple transversals",
                "Verifies answer by checking with alternative methods",
                "Can work backwards from answer to verify",
                "Organizes working clearly and logically"
              ]
            },
            developing: {
              quantitative: [
                "2 correct with hints on which property to use",
                "Can start problem but gets stuck partway"
              ],
              qualitative: [
                "Knows individual properties but struggles to chain them",
                "Needs prompting on which property applies when",
                "Makes errors tracking angle relationships through steps",
                "Can handle 2-step problems but struggles with 3+ steps",
                "Forgets to state reasons for steps",
                "Needs help organizing multi-step approach"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot handle multi-step problems",
                "Multiple errors throughout",
                "Cannot organize approach"
              ],
              qualitative: [
                "Overwhelmed by complex diagrams",
                "Cannot identify starting point",
                "Randomly applies properties",
                "Cannot track angle relationships through multiple steps",
                "Does not understand how to combine properties",
                "Cannot organize solution approach",
                "Gives up on complex problems",
                "Cannot verify answers"
              ]
            }
          },

          learningObjectives: [
            "Solve multi-step problems using combinations of angle properties",
            "Combine F/Z/C patterns with vertically opposite and straight line properties",
            "Show clear reasoning and state which property is used",
            "Work systematically through complex diagrams",
            "Solve algebraic multi-step problems",
            "Handle diagrams with multiple transversals",
            "Verify answers using alternative methods",
            "Organize working clearly and logically"
          ],

          relevantFormulas: [
            "Multi-Step Strategy:",
            "1. Identify given angle(s)",
            "2. Look for directly related angles (corresponding, alternate, co-interior)",
            "3. Use properties to find next angle",
            "4. Repeat until all required angles found",
            "5. State reason for each step",
            "6. Verify using alternative property",
            "Common Combinations:",
            "- Find corresponding angle, then vertically opposite",
            "- Find alternate angle, then angles on straight line",
            "- Use co-interior to find one, then corresponding for others",
            "Always state: 'corresponding angles', 'alternate angles', 'co-interior angles', 'angles on a line', 'vertically opposite angles'"
          ],

          sampleProblems: [
            "Find all 8 angles given one angle is 65°. State reasons for each step.",
            "Two parallel lines cut by transversal. If angle a = 3x + 15° and angle b (corresponding) = 5x - 25°, find all 8 angles.",
            "Complex diagram with multiple transversals: find all angles using multi-step reasoning."
          ],

          availableTools: ["parallelLinesTransversal", "verticallyOppositeAngles"]
        },

        {
          id: "reasoning-and-proofs",
          title: "Geometric Reasoning and Simple Proofs",
          difficulty: "advanced",
          prerequisites: ["multi-step-parallel-problems"],
          masterySignals: "Student writes clear geometric reasoning for 2-3 problems, uses correct angle property names, shows logical step-by-step justification, can prove simple geometric facts, and explains why properties work",
          estimatedQuestions: "3-4 questions",

          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 correct reasoning/proof problems",
                "Every step justified with correct property name",
                "Logical flow maintained throughout"
              ],
              qualitative: [
                "Writes clear geometric reasoning step-by-step",
                "States which property is used for each deduction",
                "Uses correct terminology (corresponding, alternate, co-interior, etc.)",
                "Shows logical flow: 'Given... therefore... because...'",
                "Can prove simple facts like 'if these angles are equal, lines are parallel'",
                "Explains why angle properties work",
                "Writes in complete sentences with proper mathematical language",
                "Verifies conclusions against initial conditions",
                "Can explain using multiple approaches",
                "Understands concept of mathematical proof"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on structure",
                "Reasoning present but incomplete or unclear"
              ],
              qualitative: [
                "Can state some reasons but misses some steps",
                "Uses informal language instead of proper terms",
                "Reasoning is present but disorganized",
                "Forgets to justify some steps",
                "Can explain when prompted but not independently",
                "Needs help with proof structure",
                "Struggles with 'why' questions"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot write geometric reasoning",
                "No justification provided for steps",
                "Cannot explain why properties work"
              ],
              qualitative: [
                "Does not understand what 'reasoning' or 'proof' means",
                "Cannot justify steps with property names",
                "Does not use correct terminology",
                "Cannot explain why answers are correct",
                "Provides calculations without reasoning",
                "Cannot organize logical argument",
                "Does not understand concept of mathematical justification",
                "Cannot explain why properties are true"
              ]
            }
          },

          learningObjectives: [
            "Write clear geometric reasoning for angle problems",
            "State which angle property justifies each step",
            "Use correct mathematical terminology",
            "Show logical flow in reasoning",
            "Prove simple geometric facts",
            "Explain why angle properties work",
            "Understand the concept of mathematical proof",
            "Verify conclusions against given information",
            "Write in complete sentences with proper mathematical language"
          ],

          relevantFormulas: [
            "Reasoning Structure:",
            "Given: [State what information is provided]",
            "To find: [State what needs to be found or proven]",
            "Working:",
            "1. [Statement] because [reason/property name]",
            "2. [Next statement] because [reason/property name]",
            "...",
            "Therefore: [Conclusion]",
            "Example:",
            "Given: Parallel lines with transversal, angle a = $70^{\\circ}$",
            "Find: Angle b (corresponding to a)",
            "Working: Angle b = $70^{\\circ}$ (corresponding angles are equal)",
            "Terminology to use:",
            "- Corresponding angles (F-pattern) are equal",
            "- Alternate angles (Z-pattern) are equal",
            "- Co-interior angles (C-pattern) sum to $180^{\\circ}$",
            "- Vertically opposite angles are equal",
            "- Angles on a straight line sum to $180^{\\circ}$"
          ],

          sampleProblems: [
            "Prove that if two alternate angles are equal, the lines must be parallel.",
            "Given angle a, find angle b and write complete reasoning for each step.",
            "Explain why co-interior angles sum to 180° when lines are parallel (using other properties)."
          ],

          availableTools: ["parallelLinesTransversal"]
        }
      ]
    },

    learningObjectives: [
      "Solve complex multi-step parallel lines problems",
      "Combine multiple angle properties systematically",
      "Write clear geometric reasoning",
      "Use correct mathematical terminology",
      "Understand concept of mathematical proof",
      "Explain why angle properties work"
    ],

    keyFormulas: `
**Multi-Step Problem Strategy:**
1. Identify given angles
2. Apply properties systematically
3. State reason for each step
4. Verify using alternative property

**Reasoning Template:**
Given: [information]
To find: [goal]
Working:
- Step 1: [statement] because [property]
- Step 2: [statement] because [property]
Therefore: [conclusion]

**Key Properties to Reference:**
- Corresponding angles (F) are equal
- Alternate angles (Z) are equal
- Co-interior angles (C) sum to $180^{\\circ}$
- Vertically opposite angles are equal
- Angles on a line sum to $180^{\\circ}$
- Angles at a point sum to $360^{\\circ}$

**Example Reasoning:**
"Angle b = $70^{\\circ}$ (corresponding to angle a)
Angle c = $110^{\\circ}$ (angles on a straight line with b)
Therefore angle d = $110^{\\circ}$ (vertically opposite to c)"
`
  }
};
