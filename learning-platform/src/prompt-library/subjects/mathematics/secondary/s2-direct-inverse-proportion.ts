/**
 * S2 Mathematics - Direct and Inverse Proportion Topic Configuration
 *
 * Clean topic configuration using the new prompt library architecture.
 * Inherits from base agents, formatting rules, and interaction protocols.
 */

// Type exports (subtopic IDs only)
export type ProportionTopicId =
  | 's2-math-proportion-direct-intro'
  | 's2-math-proportion-direct-algebraic'
  | 's2-math-proportion-direct-forms'
  | 's2-math-proportion-inverse-intro'
  | 's2-math-proportion-inverse-algebraic'
  | 's2-math-proportion-inverse-forms';

// Topic-specific tutor customization (overrides base)
export const PROPORTION_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary school students learning Direct and Inverse Proportion.

Teaching Approach:
- Guide students to discover proportional relationships through questioning
- Help students recognize patterns in tables and ratios
- Connect algebraic equations to graphical representations
- Emphasize real-world applications (speed-time, cost-quantity, etc.)
- Use visual tools to illustrate linear relationships and hyperbolas
- Encourage students to check if relationships pass through the origin

**Text-to-Speech Guidelines:**
- Say "y is proportional to x" instead of "y ∝ x"
- Use "k equals" instead of "k ="
- Say "y equals k x" instead of "y = kx"
- Say "y equals k over x" or "y equals k divided by x" instead of "y = k/x"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use mathematical notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding (not for every question).
IMPORTANT: Use the technical name (e.g., "cartesianPlane") in the toolName field, NOT the display name.

Recommended tools:
- cartesianPlane: For plotting points showing direct proportion (straight line through origin)
- functionGraph: For showing hyperbolas in inverse proportion (y = k/x)
- scatterPlot: For displaying data points in proportion relationships
- Use graphs strategically to help students visualize the difference between direct and inverse proportion`
};

// Available math tools for this topic
export const PROPORTION_MATH_TOOLS = [
  "cartesianPlane",
  "functionGraph",
  "scatterPlot",
  "lineChart",
  "algebraExpression"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S2_MATH_PROPORTION_SUBTOPICS = {

  // ==========================================
  // SUBTOPIC 1: Introduction to Direct Proportion
  // ==========================================

  's2-math-proportion-direct-intro': {
    displayName: 'Introduction to Direct Proportion',
    topicName: 'direct proportion (recognizing and understanding)',

    progressionStructure: {
      sections: [
        {
          id: "recognizing-direct-proportion",
          title: "Recognizing Direct Proportion",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies 3-4 direct proportion relationships from tables/descriptions and explains why they are proportional",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3-4 correct identifications without hints",
                "Correctly verifies constant ratio in all cases"
              ],
              qualitative: [
                "Recognizes that when x doubles, y doubles",
                "Identifies constant ratio y/x",
                "Understands the relationship starts at origin (0, 0)",
                "Can explain proportionality in real-world contexts",
                "Distinguishes proportional from non-proportional relationships"
              ]
            },
            developing: {
              quantitative: ["2 correct with hints on ratio checking"],
              qualitative: [
                "Recognizes obvious proportional patterns but needs prompting for verification",
                "Sometimes forgets to check if relationship passes through origin",
                "Needs guidance on calculating y/x ratio"
              ]
            },
            struggling: {
              quantitative: ["Cannot identify proportional relationships", "Multiple incorrect attempts"],
              qualitative: [
                "Confuses proportional with linear relationships (y = mx + c where c ≠ 0)",
                "Does not understand constant ratio concept",
                "Cannot verify proportionality from tables",
                "Does not recognize doubling/tripling patterns"
              ]
            }
          },
          learningObjectives: [
            "Understand that direct proportion means y/x remains constant",
            "Recognize that when x multiplies by a factor, y multiplies by the same factor",
            "Identify proportional relationships from tables and descriptions",
            "Verify proportionality by checking if y/x is constant",
            "Understand that proportional relationships pass through the origin (0, 0)"
          ],
          relevantFormulas: [
            "If y ∝ x, then y/x = k (constant)",
            "Equivalent form: y₁/x₁ = y₂/x₂",
            "When x doubles, y doubles; when x triples, y triples"
          ],
          availableTools: ["cartesianPlane", "scatterPlot"]
        },
        {
          id: "unitary-method",
          title: "Solving Problems Using the Unitary Method",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["recognizing-direct-proportion"],
          masterySignals: "Student successfully solves 3-4 proportion word problems using unitary method with correct intermediate steps",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3-4 correct solutions with proper unitary method steps",
                "Correct calculations with no arithmetic errors"
              ],
              qualitative: [
                "Finds value of 1 unit first",
                "Then scales up to required amount",
                "Shows clear step-by-step working",
                "Applies method to various contexts (cost, time, quantity, etc.)",
                "Handles fractional and decimal values correctly"
              ]
            },
            developing: {
              quantitative: ["2 correct with hints on method structure"],
              qualitative: [
                "Understands the approach but makes occasional calculation errors",
                "Sometimes jumps to final answer without finding 1 unit first",
                "Needs prompting for proper step structure"
              ]
            },
            struggling: {
              quantitative: ["Cannot set up unitary method", "Multiple arithmetic errors"],
              qualitative: [
                "Does not understand why we find 1 unit first",
                "Attempts to multiply/divide without proper setup",
                "Confuses when to multiply vs. divide",
                "Cannot adapt method to different contexts"
              ]
            }
          },
          learningObjectives: [
            "Apply unitary method: find value of 1 unit, then scale up",
            "Solve proportion problems involving cost, weight, time, distance",
            "Handle problems with fractional quantities",
            "Show clear working with intermediate steps",
            "Verify answers make sense in context"
          ],
          relevantFormulas: [
            "Unitary Method: If n units = value, then 1 unit = value/n, then m units = (value/n) × m",
            "Example: 6 kg cost $27 → 1 kg costs $27÷6 → 13 kg cost ($27÷6)×13"
          ],
          availableTools: []
        }
      ]
    }
  },

  // ==========================================
  // SUBTOPIC 2: Direct Proportion - Algebraic Forms
  // ==========================================

  's2-math-proportion-direct-algebraic': {
    displayName: 'Direct Proportion: Algebraic Forms',
    topicName: 'direct proportion (equations and graphical representation)',

    progressionStructure: {
      sections: [
        {
          id: "equation-y-equals-kx",
          title: "Writing and Using y = kx",
          difficulty: "intermediate",
          prerequisites: ["recognizing-direct-proportion"],
          masterySignals: "Student finds k from given values, writes y = kx equation, and uses it to find unknown values (3-4 questions)",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3-4 correct equations formed",
                "Correctly calculates k in all cases",
                "Uses equation to find unknown values accurately"
              ],
              qualitative: [
                "Understands k as the constant of proportionality",
                "Calculates k = y/x from given pair",
                "Writes equation y = kx correctly",
                "Substitutes to find unknown x or y values",
                "Interprets k in context (e.g., price per kg, speed)"
              ]
            },
            developing: {
              quantitative: ["2 correct with hints on finding k"],
              qualitative: [
                "Sometimes confuses which value to substitute for x and y",
                "Needs prompting on how to calculate k",
                "Can form equation but struggles with substitution"
              ]
            },
            struggling: {
              quantitative: ["Cannot find k correctly", "Confuses y = kx with y = mx + c"],
              qualitative: [
                "Does not understand k = y/x relationship",
                "Includes a constant term (writes y = kx + c)",
                "Cannot use equation to find unknowns",
                "Makes substitution errors"
              ]
            }
          },
          learningObjectives: [
            "Understand that y ∝ x means y = kx for some constant k",
            "Calculate k from a given pair of values using k = y/x",
            "Write the equation y = kx once k is found",
            "Use the equation to find unknown values",
            "Interpret k in real-world contexts"
          ],
          relevantFormulas: [
            "Direct proportion: y = kx (no constant term)",
            "To find k: k = y/x using given values",
            "Example: If y = 15 when x = 3, then k = 15/3 = 5, so y = 5x"
          ],
          availableTools: ["cartesianPlane", "algebraExpression"]
        },
        {
          id: "graphical-representation",
          title: "Graphs of Direct Proportion",
          difficulty: "intermediate",
          prerequisites: ["equation-y-equals-kx"],
          masterySignals: "Student correctly interprets graphs, identifies k from gradient, and distinguishes y = kx from y = kx + c (3 questions)",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3 correct graph interpretations",
                "Correctly identifies k = gradient"
              ],
              qualitative: [
                "Recognizes direct proportion graphs pass through origin",
                "Understands gradient = k",
                "Identifies that y = kx + c (where c ≠ 0) is NOT direct proportion",
                "Can read k from graph (rise/run)",
                "Compares different values of k from multiple lines"
              ]
            },
            developing: {
              quantitative: ["2 correct with hints on gradient interpretation"],
              qualitative: [
                "Recognizes straight line but needs prompting about origin",
                "Struggles to calculate gradient accurately",
                "Sometimes confuses direct proportion with other linear relationships"
              ]
            },
            struggling: {
              quantitative: ["Cannot identify proportional graphs", "Confuses gradient with y-intercept"],
              qualitative: [
                "Thinks any straight line is direct proportion",
                "Does not check if line passes through origin",
                "Cannot calculate gradient from graph",
                "Does not understand k relates to steepness"
              ]
            }
          },
          learningObjectives: [
            "Recognize that y = kx graphs as a straight line through the origin",
            "Understand that the gradient of the line equals k",
            "Identify that larger k means steeper line",
            "Distinguish between y = kx (proportion) and y = kx + c (not proportion)",
            "Read and interpret proportional relationship graphs"
          ],
          relevantFormulas: [
            "Direct proportion graph: straight line through (0, 0)",
            "Gradient = k = rise/run = Δy/Δx",
            "NOT direct proportion if y-intercept ≠ 0"
          ],
          availableTools: ["cartesianPlane", "functionGraph"]
        }
      ]
    }
  },

  // ==========================================
  // SUBTOPIC 3: Other Forms of Direct Proportion
  // ==========================================

  's2-math-proportion-direct-forms': {
    displayName: 'Other Forms of Direct Proportion',
    topicName: 'direct proportion (y ∝ x², y ∝ √x, and other forms)',

    progressionStructure: {
      sections: [
        {
          id: "y-proportional-x-squared",
          title: "y ∝ x² Relationships",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["equation-y-equals-kx"],
          masterySignals: "Student correctly solves 3 problems involving y ∝ x², finding k and calculating unknown values",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3 correct solutions for y = kx² problems",
                "Correctly finds k and uses it to solve for unknowns"
              ],
              qualitative: [
                "Understands y ∝ x² means y = kx²",
                "Calculates k = y/x² from given values",
                "Recognizes that doubling x makes y quadruple (4×)",
                "Applies to real contexts (area, braking distance, etc.)",
                "Distinguishes between y ∝ x and y ∝ x²"
              ]
            },
            developing: {
              quantitative: ["2 correct with hints on squaring"],
              qualitative: [
                "Understands the form but sometimes forgets to square x",
                "Needs prompting on k = y/x² formula",
                "Can solve but makes occasional arithmetic errors with squares"
              ]
            },
            struggling: {
              quantitative: ["Treats y ∝ x² as y ∝ x", "Cannot find k correctly"],
              qualitative: [
                "Confuses y = kx² with y = kx",
                "Does not square x when calculating k",
                "Does not understand the quadrupling effect when x doubles",
                "Cannot apply to real-world contexts"
              ]
            }
          },
          learningObjectives: [
            "Understand that y ∝ x² means y = kx²",
            "Calculate k = y/x² from given values",
            "Recognize the quadratic relationship: if x doubles, y increases by factor of 4",
            "Apply to real-world problems (area, kinetic energy, braking distance)",
            "Sketch and interpret parabolic graphs for y = kx²"
          ],
          relevantFormulas: [
            "y ∝ x² means y = kx²",
            "To find k: k = y/x²",
            "Example: If y = 20 when x = 2, then k = 20/4 = 5, so y = 5x²"
          ],
          availableTools: ["functionGraph", "cartesianPlane"]
        },
        {
          id: "square-root-and-other-forms",
          title: "y ∝ √x and Other Forms",
          difficulty: "advanced",
          prerequisites: ["y-proportional-x-squared"],
          masterySignals: "Student correctly identifies and solves proportion problems with various forms (√x, x³, 1/x²) with 2-3 correct",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 correct solutions for different proportion forms",
                "Correct k calculation for each form"
              ],
              qualitative: [
                "Identifies the correct form from context",
                "Calculates k appropriately (k = y/√x, k = y/x³, etc.)",
                "Understands how changes in x affect y for each form",
                "Can work with y ∝ √x, y ∝ x³, and compound proportions"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with formula reminders"],
              qualitative: [
                "Can solve with given formula but struggles to identify form",
                "Makes errors with fractional powers and roots",
                "Needs guidance on when to use different forms"
              ]
            },
            struggling: {
              quantitative: ["Cannot work with forms beyond y = kx"],
              qualitative: [
                "Confused by square roots and fractional powers",
                "Cannot identify which form applies to situation",
                "Makes consistent calculation errors with powers/roots"
              ]
            }
          },
          learningObjectives: [
            "Understand y ∝ √x means y = k√x",
            "Work with cubic and higher power proportions (y ∝ x³)",
            "Apply various proportion forms to physics and geometry problems",
            "Calculate k for any power relationship",
            "Recognize which form applies to a given situation"
          ],
          relevantFormulas: [
            "y ∝ √x means y = k√x, where k = y/√x",
            "y ∝ x³ means y = kx³, where k = y/x³",
            "General: y ∝ xⁿ means y = kxⁿ, where k = y/xⁿ"
          ],
          availableTools: ["functionGraph"]
        }
      ]
    }
  },

  // ==========================================
  // SUBTOPIC 4: Introduction to Inverse Proportion
  // ==========================================

  's2-math-proportion-inverse-intro': {
    displayName: 'Introduction to Inverse Proportion',
    topicName: 'inverse proportion (recognizing and understanding)',

    progressionStructure: {
      sections: [
        {
          id: "recognizing-inverse-proportion",
          title: "Recognizing Inverse Proportion",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["recognizing-direct-proportion"],
          masterySignals: "Student correctly identifies 3-4 inverse proportion relationships and verifies that xy = k (constant product)",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3-4 correct identifications of inverse relationships",
                "Correctly verifies xy = k in all cases"
              ],
              qualitative: [
                "Recognizes that when x doubles, y halves",
                "Identifies constant product xy = k",
                "Distinguishes inverse from direct proportion",
                "Explains inverse relationships in real-world contexts",
                "Understands that as x increases, y decreases proportionally"
              ]
            },
            developing: {
              quantitative: ["2 correct with hints on product checking"],
              qualitative: [
                "Recognizes inverse pattern but needs prompting to verify xy = k",
                "Sometimes confuses direct and inverse proportion",
                "Can identify obvious cases but struggles with complex examples"
              ]
            },
            struggling: {
              quantitative: ["Cannot distinguish inverse from direct proportion"],
              qualitative: [
                "Does not understand the halving/doubling relationship",
                "Cannot verify xy = constant",
                "Confuses with direct proportion consistently",
                "Does not recognize reciprocal nature"
              ]
            }
          },
          learningObjectives: [
            "Understand that inverse proportion means xy remains constant",
            "Recognize that when x multiplies by a factor, y divides by the same factor",
            "Identify inverse relationships from tables and descriptions",
            "Verify inverse proportionality by checking if xy = k (constant)",
            "Distinguish between direct proportion (y/x = k) and inverse proportion (xy = k)"
          ],
          relevantFormulas: [
            "If y ∝ 1/x, then xy = k (constant)",
            "Equivalent form: x₁y₁ = x₂y₂",
            "When x doubles, y halves; when x triples, y becomes 1/3"
          ],
          availableTools: ["scatterPlot", "cartesianPlane"]
        },
        {
          id: "solving-inverse-problems",
          title: "Solving Inverse Proportion Problems",
          difficulty: "intermediate",
          prerequisites: ["recognizing-inverse-proportion"],
          masterySignals: "Student solves 3-4 inverse proportion word problems correctly, finding k and using it to calculate unknowns",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3-4 correct solutions with proper method",
                "Accurate calculations without arithmetic errors"
              ],
              qualitative: [
                "Finds k = xy from given values",
                "Uses k to find unknown x or y",
                "Shows clear working: find k, then use x₁y₁ = x₂y₂",
                "Applies to various contexts (speed-time, workers-days, etc.)",
                "Verifies answers make sense (more workers → less time)"
              ]
            },
            developing: {
              quantitative: ["2 correct with hints on setup"],
              qualitative: [
                "Understands approach but makes occasional calculation errors",
                "Needs prompting on whether to use direct or inverse proportion",
                "Can solve but working is sometimes unclear"
              ]
            },
            struggling: {
              quantitative: ["Uses direct proportion method for inverse problems"],
              qualitative: [
                "Cannot identify when to use inverse proportion",
                "Multiplies instead of divides (or vice versa)",
                "Does not understand x₁y₁ = x₂y₂ relationship",
                "Makes consistent setup errors"
              ]
            }
          },
          learningObjectives: [
            "Calculate k = xy from given values",
            "Use x₁y₁ = x₂y₂ to find unknown values",
            "Solve inverse proportion word problems (speed-time, workers-days, etc.)",
            "Show clear step-by-step working",
            "Verify answers are sensible in context"
          ],
          relevantFormulas: [
            "Method: Find k = xy from given pair, then use k = x₂y₂ to find unknown",
            "Alternative: x₁y₁ = x₂y₂, rearrange to find unknown",
            "Example: 10 workers take 12 days → k = 120 → 15 workers take 120/15 = 8 days"
          ],
          availableTools: []
        },
        {
          id: "combined-proportion-problems",
          title: "Combined Direct and Inverse Proportion",
          difficulty: "advanced",
          prerequisites: ["solving-inverse-problems", "unitary-method"],
          masterySignals: "Student correctly solves 2-3 problems involving both direct and inverse proportion in the same scenario",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 correct solutions for combined problems",
                "Correct identification of which variable is direct/inverse"
              ],
              qualitative: [
                "Identifies which quantities are directly proportional",
                "Identifies which quantities are inversely proportional",
                "Handles both relationships in single problem",
                "Sets up combined equations correctly",
                "Works through multi-step problems systematically"
              ]
            },
            developing: {
              quantitative: ["1 correct with guidance on setup"],
              qualitative: [
                "Can handle one relationship but struggles with combination",
                "Needs prompting to identify direct vs inverse for each variable",
                "Makes errors in multi-step calculations"
              ]
            },
            struggling: {
              quantitative: ["Cannot handle combined proportion problems"],
              qualitative: [
                "Confused by multiple variables",
                "Cannot identify which relationship is direct vs inverse",
                "Attempts to apply one method to all variables",
                "Gets lost in multi-step problems"
              ]
            }
          },
          learningObjectives: [
            "Identify multiple proportional relationships in one problem",
            "Determine which variables are directly proportional",
            "Determine which variables are inversely proportional",
            "Solve problems with both direct and inverse proportion",
            "Apply systematic approach to complex multi-variable problems"
          ],
          relevantFormulas: [
            "Example: Work = Rate × Time → Work ∝ Rate (direct), Work ∝ Time (direct), but Rate ∝ 1/Time (inverse)",
            "Combined: If y ∝ x and y ∝ 1/z, then y = kx/z"
          ],
          availableTools: []
        }
      ]
    }
  },

  // ==========================================
  // SUBTOPIC 5: Inverse Proportion - Algebraic Forms
  // ==========================================

  's2-math-proportion-inverse-algebraic': {
    displayName: 'Inverse Proportion: Algebraic Forms',
    topicName: 'inverse proportion (equations and graphical representation)',

    progressionStructure: {
      sections: [
        {
          id: "equation-y-equals-k-over-x",
          title: "Writing and Using y = k/x",
          difficulty: "intermediate",
          prerequisites: ["recognizing-inverse-proportion"],
          masterySignals: "Student finds k from given values, writes y = k/x equation, and uses it correctly (3-4 questions)",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3-4 correct equations formed",
                "Correctly calculates k = xy in all cases",
                "Uses equation to find unknowns accurately"
              ],
              qualitative: [
                "Understands k as the constant product",
                "Calculates k = xy from given pair",
                "Writes equation y = k/x correctly",
                "Substitutes to find unknown x or y values",
                "Interprets k in context"
              ]
            },
            developing: {
              quantitative: ["2 correct with hints on finding k"],
              qualitative: [
                "Sometimes confuses y = k/x with y = kx",
                "Needs prompting on k = xy calculation",
                "Can form equation but struggles with rearrangement"
              ]
            },
            struggling: {
              quantitative: ["Cannot find k correctly", "Confuses direct and inverse forms"],
              qualitative: [
                "Does not understand k = xy relationship",
                "Writes y = kx instead of y = k/x",
                "Cannot rearrange to find x when y is given",
                "Makes consistent algebraic errors"
              ]
            }
          },
          learningObjectives: [
            "Understand that y ∝ 1/x means y = k/x for some constant k",
            "Calculate k = xy from a given pair of values",
            "Write the equation y = k/x once k is found",
            "Use the equation to find unknown values (including rearranging to x = k/y)",
            "Interpret k in real-world contexts"
          ],
          relevantFormulas: [
            "Inverse proportion: y = k/x or xy = k",
            "To find k: k = xy using given values",
            "To find x when y is known: x = k/y",
            "Example: If y = 12 when x = 10, then k = 120, so y = 120/x"
          ],
          availableTools: ["algebraExpression", "functionGraph"]
        },
        {
          id: "hyperbola-graphs",
          title: "Graphs of Inverse Proportion (Hyperbolas)",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["equation-y-equals-k-over-x"],
          masterySignals: "Student correctly interprets hyperbola graphs, identifies k, and understands asymptotes (2-3 questions)",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 correct graph interpretations",
                "Correctly identifies k from graph"
              ],
              qualitative: [
                "Recognizes rectangular hyperbola shape for y = k/x",
                "Understands curve approaches but never touches x and y axes (asymptotes)",
                "Identifies that larger k means curve is further from origin",
                "Distinguishes hyperbola from parabola and straight line",
                "Can find k from any point on the curve"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on reading k"],
              qualitative: [
                "Recognizes curved shape but unclear about asymptotes",
                "Struggles to calculate k from graph points",
                "Needs prompting on hyperbola vs other curve types"
              ]
            },
            struggling: {
              quantitative: ["Cannot interpret hyperbola graphs"],
              qualitative: [
                "Confuses hyperbola with parabola or other curves",
                "Does not understand asymptotic behavior",
                "Cannot extract k from graph",
                "Thinks curve will eventually touch axes"
              ]
            }
          },
          learningObjectives: [
            "Recognize that y = k/x graphs as a rectangular hyperbola",
            "Understand that the curve has asymptotes at x = 0 and y = 0",
            "Identify that larger k means the curve is further from the origin",
            "Calculate k from any point on the hyperbola",
            "Distinguish hyperbola graphs from parabolas and lines"
          ],
          relevantFormulas: [
            "Inverse proportion graph: rectangular hyperbola (y = k/x)",
            "Asymptotes: x = 0 (y-axis) and y = 0 (x-axis)",
            "For any point on curve: k = xy"
          ],
          availableTools: ["functionGraph", "cartesianPlane"]
        }
      ]
    }
  },

  // ==========================================
  // SUBTOPIC 6: Other Forms of Inverse Proportion
  // ==========================================

  's2-math-proportion-inverse-forms': {
    displayName: 'Other Forms of Inverse Proportion',
    topicName: 'inverse proportion (y ∝ 1/x², y ∝ 1/√x, and other forms)',

    progressionStructure: {
      sections: [
        {
          id: "inverse-square-law",
          title: "Inverse Square Law (y ∝ 1/x²)",
          difficulty: "advanced",
          prerequisites: ["equation-y-equals-k-over-x"],
          masterySignals: "Student correctly solves 2-3 inverse square problems, finding k and understanding the rapid decrease",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 correct solutions for y = k/x² problems",
                "Correctly finds k = yx² and uses it"
              ],
              qualitative: [
                "Understands y ∝ 1/x² means y = k/x²",
                "Calculates k = yx² from given values",
                "Recognizes that doubling x makes y quarter (÷4)",
                "Applies to real contexts (light intensity, gravitational force, etc.)",
                "Understands inverse square decreases faster than inverse proportion"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on squaring"],
              qualitative: [
                "Understands form but sometimes forgets to square x",
                "Needs prompting on k = yx² formula",
                "Can solve but makes arithmetic errors with squares"
              ]
            },
            struggling: {
              quantitative: ["Treats y ∝ 1/x² as y ∝ 1/x"],
              qualitative: [
                "Confuses y = k/x² with y = k/x",
                "Does not square x when calculating k",
                "Does not understand the quartering effect when x doubles",
                "Cannot apply to physics contexts"
              ]
            }
          },
          learningObjectives: [
            "Understand that y ∝ 1/x² means y = k/x²",
            "Calculate k = yx² from given values",
            "Recognize the inverse square relationship: if x doubles, y decreases by factor of 4",
            "Apply to real-world problems (light intensity, sound volume, gravity)",
            "Understand steeper decrease compared to y = k/x"
          ],
          relevantFormulas: [
            "y ∝ 1/x² means y = k/x² or x²y = k",
            "To find k: k = yx²",
            "Example: If y = 5 when x = 2, then k = 5×4 = 20, so y = 20/x²"
          ],
          availableTools: ["functionGraph"]
        },
        {
          id: "other-inverse-forms",
          title: "Other Inverse Proportion Forms",
          difficulty: "advanced",
          prerequisites: ["inverse-square-law"],
          masterySignals: "Student identifies and solves problems with various inverse forms (1/√x, 1/x³) with 2 correct",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2 correct solutions for different inverse forms",
                "Correct k calculation for each form"
              ],
              qualitative: [
                "Identifies the correct inverse form from context",
                "Calculates k appropriately (k = y√x, k = yx³, etc.)",
                "Understands how changes in x affect y for each form",
                "Can work with y ∝ 1/√x, y ∝ 1/x³, and compound inverse proportions"
              ]
            },
            developing: {
              quantitative: ["1 correct with formula reminders"],
              qualitative: [
                "Can solve with given formula but struggles to identify form",
                "Makes errors with fractional powers and roots in inverse",
                "Needs guidance on when to use different forms"
              ]
            },
            struggling: {
              quantitative: ["Cannot work with forms beyond y = k/x"],
              qualitative: [
                "Confused by square roots and fractional powers in denominators",
                "Cannot identify which inverse form applies",
                "Makes consistent calculation errors with powers/roots"
              ]
            }
          },
          learningObjectives: [
            "Understand y ∝ 1/√x means y = k/√x or y√x = k",
            "Work with cubic and higher power inverse proportions (y ∝ 1/x³)",
            "Apply various inverse proportion forms to science problems",
            "Calculate k for any power inverse relationship",
            "Recognize which inverse form applies to a situation"
          ],
          relevantFormulas: [
            "y ∝ 1/√x means y = k/√x, where k = y√x",
            "y ∝ 1/x³ means y = k/x³, where k = yx³",
            "General: y ∝ 1/xⁿ means y = k/xⁿ or yxⁿ = k"
          ],
          availableTools: ["functionGraph"]
        }
      ]
    }
  }
};

// ==========================
// TOPIC METADATA
// ==========================

export const S2_MATH_PROPORTION_METADATA = {
  topicId: 's2-math-direct-inverse-proportion',
  displayName: 'Direct and Inverse Proportion',
  description: 'Understanding and solving problems involving direct proportion (y ∝ x, y ∝ x²) and inverse proportion (y ∝ 1/x, y ∝ 1/x²)',
  level: 'Secondary 2',
  subject: 'Mathematics',
  subtopicIds: [
    's2-math-proportion-direct-intro',
    's2-math-proportion-direct-algebraic',
    's2-math-proportion-direct-forms',
    's2-math-proportion-inverse-intro',
    's2-math-proportion-inverse-algebraic',
    's2-math-proportion-inverse-forms'
  ] as ProportionTopicId[],
  estimatedHours: 8,
  difficulty: 'intermediate'
};
