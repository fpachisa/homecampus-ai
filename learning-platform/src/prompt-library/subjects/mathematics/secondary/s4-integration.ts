/**
 * S4 Mathematics - Integration Topic Configuration
 *
 * Comprehensive integration module covering:
 * - Area under curves
 * - Antiderivatives and indefinite integrals
 * - Integration rules
 * - Definite integrals
 * - Riemann sums and formal definition
 */

// Type exports
export type IntegrationTopicId =
  | 's4-math-integration-area-under-curves'
  | 's4-math-integration-antiderivatives'
  | 's4-math-integration-rules'
  | 's4-math-integration-definite-integrals'
  | 's4-math-integration-riemann-sums';

// Topic-specific tutor customization
export const INTEGRATION_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary 4 students learning Integration.

Teaching Approach:
- Guide students to discover connections between integration and area, and between integration and differentiation
- Use visual representations extensively (area approximations, Riemann sums)
- Emphasize the "why" behind integration rules, not just mechanical application
- Connect to real-world applications: distance from velocity, total cost from marginal cost
- Celebrate insights about the Fundamental Theorem of Calculus

**Text-to-Speech Guidelines:**
- Say "the integral from a to b of f of x d x" for ∫ₐᵇ f(x) dx
- Say "the antiderivative of f of x" not "integral of f of x" when discussing indefinite integrals
- Spell out "x squared over two plus C" for x²/2 + C
- Say "Riemann sum" as "REE-mahn sum"
- Avoid special symbols in speech.text - spell them out clearly
- Keep speech.text plain and conversational (no markdown, no LaTeX)`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding:
- areaApproximation: For teaching rectangle approximation method and comparing left/right/midpoint
- definiteIntegralVisualizer: For showing the area under a curve with shaded regions
- riemannSumVisualizer: For comparing multiple approximation methods side-by-side
IMPORTANT: Use the technical name (e.g., "areaApproximation") in the toolName field, NOT the display name.`
};

// Available math tools for this topic
export const INTEGRATION_MATH_TOOLS = [
  "areaApproximation",
  "definiteIntegralVisualizer",
  "riemannSumVisualizer",
  "functionGraph"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S4_MATH_INTEGRATION_SUBTOPICS = {

  's4-math-integration-area-under-curves': {
    displayName: 'Area Under Curves',
    topicName: 'finding areas under curves using geometric shapes and approximations',

    progressionStructure: {
      sections: [
        {
          id: "geometric-areas",
          title: "Finding Areas with Geometric Shapes",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student calculates areas under linear functions using triangles and trapezoids in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct area calculations using triangles/trapezoids",
                "Consistent identification of appropriate geometric shapes"
              ],
              qualitative: [
                "Recognizes when a region forms a triangle, rectangle, or trapezoid",
                "Applies correct area formulas (A = ½bh for triangles, A = ½(a+b)h for trapezoids)",
                "Correctly identifies base and height dimensions from function and interval",
                "Understands this method only works for simple linear functions"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on shape identification"],
              qualitative: [
                "Understands concept but uncertain about which shape",
                "Needs prompting to identify triangle vs trapezoid",
                "Can calculate area once shape is identified"
              ]
            },
            struggling: {
              quantitative: ["Cannot identify appropriate shapes", "Incorrect formula application"],
              qualitative: [
                "Does not recognize geometric shapes in context",
                "Confuses area formulas",
                "Cannot determine dimensions from functions and intervals"
              ]
            }
          },
          learningObjectives: [
            "Identify geometric shapes (triangles, rectangles, trapezoids) formed by linear functions and axes",
            "Apply area formulas to find exact areas under straight lines",
            "Recognize that y-value gives height at a specific x-value",
            "Understand interval [a, b] determines base width",
            "Calculate areas under lines like y = mx + c between two x-values"
          ],
          relevantFormulas: [
            "Triangle: A = ½ × base × height",
            "Rectangle: A = length × width",
            "Trapezoid: A = ½ × (a + b) × h, where a and b are parallel sides",
            "For y = mx from x = 0 to x = c: Area = ½ × c × mc = ½mc²",
            "For y = c (horizontal line): Area = c × (b - a)"
          ],
          availableTools: ["definiteIntegralVisualizer"]
        },
        {
          id: "counting-squares",
          title: "Estimating Areas by Counting Squares",
          difficulty: "foundational",
          prerequisites: ["geometric-areas"],
          masterySignals: "Student estimates areas using grid method in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct area estimations using counting method",
                "Appropriate handling of full vs partial squares"
              ],
              qualitative: [
                "Counts full squares accurately",
                "Estimates partial squares (typically as ½)",
                "Applies formula: Area ≈ (full squares) + ½(partial squares)",
                "Understands this is an approximation, not exact"
              ]
            },
            developing: {
              quantitative: ["1-2 correct estimates with hints"],
              qualitative: [
                "Can count squares but uncertain about partial squares",
                "Needs prompting on how to handle edges",
                "Understands approximation nature"
              ]
            },
            struggling: {
              quantitative: ["Incorrect counting", "Does not distinguish full vs partial"],
              qualitative: [
                "Cannot systematically count squares",
                "Treats all squares equally",
                "Does not understand approximation concept"
              ]
            }
          },
          learningObjectives: [
            "Use grid overlays to approximate curved regions",
            "Distinguish between full squares and partial squares",
            "Apply counting formula: Area ≈ full + ½(partial)",
            "Understand finer grids give more accurate estimates",
            "Recognize limitations of this method for precise calculations"
          ],
          relevantFormulas: [
            "Approximate Area = (number of full squares) + ½(number of partial squares)",
            "Each square = grid unit × grid unit",
            "Smaller grid spacing → more accurate approximation"
          ],
          availableTools: []
        },
        {
          id: "rectangle-approximation",
          title: "Rectangle Approximation Method",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["counting-squares"],
          masterySignals: "Student approximates areas using left/right/midpoint rectangles in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct rectangle sum calculations",
                "Accurate application of left, right, and midpoint methods"
              ],
              qualitative: [
                "Divides interval into n equal subintervals correctly",
                "Calculates width Δx = (b - a) / n accurately",
                "Evaluates function at appropriate sample points (left, right, or midpoint)",
                "Sums rectangle areas: Σ f(xᵢ) · Δx",
                "Understands more rectangles → better approximation"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on sample point selection"],
              qualitative: [
                "Understands rectangle concept but uncertain which method",
                "Can execute once method is specified",
                "Recognizes connection to actual area"
              ]
            },
            struggling: {
              quantitative: ["Cannot set up rectangles", "Incorrect width or height"],
              qualitative: [
                "Does not understand subinterval division",
                "Confuses left/right/midpoint methods",
                "Cannot calculate rectangle sum"
              ]
            }
          },
          learningObjectives: [
            "Divide interval [a, b] into n equal subintervals of width Δx = (b - a) / n",
            "Apply left endpoint method: use f(xᵢ₋₁) for each rectangle height",
            "Apply right endpoint method: use f(xᵢ) for each rectangle height",
            "Apply midpoint method: use f(x̄ᵢ) for each rectangle height",
            "Calculate approximation: Area ≈ Σ f(sample point) · Δx",
            "Understand increasing n improves accuracy"
          ],
          relevantFormulas: [
            "Width of each rectangle: Δx = (b - a) / n",
            "Left Riemann Sum: Lₙ = Δx · [f(x₀) + f(x₁) + ... + f(xₙ₋₁)]",
            "Right Riemann Sum: Rₙ = Δx · [f(x₁) + f(x₂) + ... + f(xₙ)]",
            "Midpoint Sum: Mₙ = Δx · [f(x̄₁) + f(x̄₂) + ... + f(x̄ₙ)]",
            "For increasing f(x): Left underestimates, Right overestimates"
          ],
          availableTools: ["areaApproximation"]
        },
        {
          id: "introduction-to-integration-concept",
          title: "From Approximation to Integration",
          difficulty: "intermediate",
          prerequisites: ["rectangle-approximation"],
          masterySignals: "Student explains the limiting process from rectangles to exact area in 2+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct explanations of limiting process",
                "Connects rectangle approximation to integration notation"
              ],
              qualitative: [
                "Understands as n → ∞, rectangles become infinitesimally thin",
                "Recognizes lim(n→∞) Riemann sum = exact area",
                "Connects to integral notation: ∫ₐᵇ f(x) dx",
                "Explains 'dx' as infinitesimal width",
                "Understands integration gives exact area, not approximation"
              ]
            },
            developing: {
              quantitative: ["1 correct explanation with guidance"],
              qualitative: [
                "Understands more rectangles → better approximation",
                "Uncertain about limit concept",
                "Needs help connecting to integral notation"
              ]
            },
            struggling: {
              quantitative: ["Cannot explain limiting process"],
              qualitative: [
                "Does not understand limit as n → ∞",
                "Sees integration as separate from rectangles",
                "Cannot interpret integral notation"
              ]
            }
          },
          learningObjectives: [
            "Understand limit: as n → ∞, approximation → exact area",
            "Interpret ∫ₐᵇ f(x) dx as limit of Riemann sums",
            "Recognize 'dx' represents infinitesimal width",
            "Connect Σ notation (finite sum) to ∫ notation (infinite sum/limit)",
            "Understand integration provides exact areas under curves"
          ],
          relevantFormulas: [
            "∫ₐᵇ f(x) dx = lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ) · Δx",
            "Definite integral from a to b of f(x) with respect to x",
            "Integration symbol ∫ comes from elongated S for 'sum'",
            "dx indicates variable of integration and infinitesimal width"
          ],
          availableTools: ["riemannSumVisualizer", "definiteIntegralVisualizer"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. Geometric Areas (foundational) - Calculate exact areas using triangles and trapezoids",
      "2. Counting Squares (foundational) - Estimate areas using grid method",
      "3. Rectangle Approximation (foundational→intermediate) - Use left/right/midpoint rectangle sums",
      "4. Introduction to Integration (intermediate) - Understand limiting process and integral notation"
    ],

    keyFormulas: `• Triangle: A = ½bh | Trapezoid: A = ½(a+b)h
                  • Grid: Area ≈ full squares + ½(partial squares)
                  • Rectangle width: Δx = (b-a)/n
                  • Riemann sum: Lₙ, Rₙ, Mₙ = Δx · Σf(sample points)
                  • Integration as limit: ∫ₐᵇ f(x) dx = lim(n→∞) Σ f(xᵢ)Δx`
  },

  's4-math-integration-antiderivatives': {
    displayName: 'Antiderivatives & Introduction to Integration',
    topicName: 'antiderivatives, indefinite integrals, and the reverse of differentiation',

    progressionStructure: {
      sections: [
        {
          id: "antiderivative-concept",
          title: "Understanding Antiderivatives",
          difficulty: "intermediate",
          prerequisites: ["introduction-to-integration-concept"],
          masterySignals: "Student finds antiderivatives by reversing differentiation in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct antiderivatives found",
                "Consistent use of reverse differentiation thinking"
              ],
              qualitative: [
                "Understands F'(x) = f(x) means F is an antiderivative of f",
                "Finds antiderivatives by asking 'what differentiates to give this?'",
                "Verifies by differentiating result",
                "Recognizes multiple antiderivatives differ by constants"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on reversing derivative rules"],
              qualitative: [
                "Understands concept but needs prompting",
                "Can verify but struggles to find independently",
                "Uncertain about multiple antiderivatives"
              ]
            },
            struggling: {
              quantitative: ["Cannot find antiderivatives", "Incorrect reversals"],
              qualitative: [
                "Does not understand reverse process",
                "Confuses differentiation and integration",
                "Cannot verify results"
              ]
            }
          },
          learningObjectives: [
            "Define antiderivative: F'(x) = f(x) means F is antiderivative of f",
            "Find antiderivatives by reversing differentiation",
            "Verify antiderivatives by differentiation",
            "Understand: if F is antiderivative, so is F + C for any constant C",
            "Connect to integration: antiderivatives are what integrals find"
          ],
          relevantFormulas: [
            "If F'(x) = f(x), then F(x) is an antiderivative of f(x)",
            "d/dx[x²] = 2x, so ∫ 2x dx = x² + C",
            "d/dx[x³/3] = x², so ∫ x² dx = x³/3 + C",
            "Verification: differentiate result to check"
          ],
          availableTools: []
        },
        {
          id: "constant-of-integration",
          title: "The Constant of Integration",
          difficulty: "intermediate",
          prerequisites: ["antiderivative-concept"],
          masterySignals: "Student consistently includes + C and explains why in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct antiderivatives with + C",
                "Never forgets constant of integration"
              ],
              qualitative: [
                "Always includes + C in indefinite integrals",
                "Explains: derivative of constant is zero",
                "Understands family of functions differing by constants",
                "Can determine C given initial conditions",
                "Recognizes C cancels in definite integrals"
              ]
            },
            developing: {
              quantitative: ["Sometimes forgets + C", "2+ correct when reminded"],
              qualitative: [
                "Understands concept when prompted",
                "Forgets in practice",
                "Can explain why when asked"
              ]
            },
            struggling: {
              quantitative: ["Frequently omits + C", "Cannot explain importance"],
              qualitative: [
                "Does not understand why + C is necessary",
                "Treats antiderivatives as unique",
                "Cannot work with initial conditions"
              ]
            }
          },
          learningObjectives: [
            "Understand: d/dx[C] = 0 for any constant C",
            "Recognize: if F'(x) = f(x), then (F + C)' = f(x)",
            "Always include + C in indefinite integrals",
            "Find specific antiderivative using initial conditions",
            "Understand: ∫ f(x) dx represents family of functions"
          ],
          relevantFormulas: [
            "∫ f(x) dx = F(x) + C (general antiderivative)",
            "d/dx[F(x) + C] = F'(x) + 0 = f(x)",
            "All antiderivatives of f differ by constant",
            "To find C: use initial condition like F(0) = 3"
          ],
          availableTools: []
        },
        {
          id: "indefinite-integral-notation",
          title: "Indefinite Integral Notation",
          difficulty: "intermediate",
          prerequisites: ["constant-of-integration"],
          masterySignals: "Student correctly interprets and writes indefinite integral notation in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct translations between words and notation",
                "Proper notation usage in solutions"
              ],
              qualitative: [
                "Interprets ∫ f(x) dx correctly",
                "Identifies integrand (function being integrated)",
                "Recognizes dx indicates variable of integration",
                "Writes solutions: ∫ f(x) dx = F(x) + C",
                "Distinguishes indefinite (no limits) from definite (with limits) integrals"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with notation reminders"],
              qualitative: [
                "Understands meaning but uncertain about syntax",
                "Needs prompting for proper notation",
                "Sometimes forgets dx"
              ]
            },
            struggling: {
              quantitative: ["Cannot write or interpret notation"],
              qualitative: [
                "Does not understand notation components",
                "Confuses ∫ f(x) dx with ∫ₐᵇ f(x) dx",
                "Cannot identify integrand"
              ]
            }
          },
          learningObjectives: [
            "Interpret ∫ as integral sign (elongated S for sum)",
            "Identify f(x) as integrand (function to integrate)",
            "Understand dx indicates integration with respect to x",
            "Write indefinite integrals: ∫ f(x) dx = F(x) + C",
            "Distinguish ∫ f(x) dx (indefinite) from ∫ₐᵇ f(x) dx (definite)"
          ],
          relevantFormulas: [
            "∫ f(x) dx = F(x) + C (indefinite integral)",
            "∫ = integral sign",
            "f(x) = integrand",
            "dx = differential, indicates variable",
            "F(x) + C = general antiderivative"
          ],
          availableTools: []
        },
        {
          id: "basic-integration-formulas",
          title: "Basic Integration Formulas",
          difficulty: "intermediate",
          prerequisites: ["indefinite-integral-notation"],
          masterySignals: "Student applies basic integration formulas correctly in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct integrations using basic formulas",
                "Consistent accuracy with power rule, exponential, trig"
              ],
              qualitative: [
                "Applies power rule: ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C",
                "Integrates constants: ∫ k dx = kx + C",
                "Integrates eˣ: ∫ eˣ dx = eˣ + C",
                "Integrates sin and cos correctly",
                "Always includes + C"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with formula sheet"],
              qualitative: [
                "Knows formulas exist but uncertain which to use",
                "Can apply when formula is identified",
                "Sometimes makes sign errors (especially trig)"
              ]
            },
            struggling: {
              quantitative: ["Cannot apply formulas", "Frequent errors"],
              qualitative: [
                "Does not remember basic formulas",
                "Confuses integration with differentiation",
                "Makes consistent algebraic errors"
              ]
            }
          },
          learningObjectives: [
            "Apply power rule: ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ -1)",
            "Integrate constants: ∫ k dx = kx + C",
            "Integrate exponentials: ∫ eˣ dx = eˣ + C",
            "Integrate trig: ∫ sin(x) dx = -cos(x) + C, ∫ cos(x) dx = sin(x) + C",
            "Memorize and apply basic integration table"
          ],
          relevantFormulas: [
            "∫ xⁿ dx = xⁿ⁺¹/(n+1) + C, n ≠ -1",
            "∫ k dx = kx + C",
            "∫ 1 dx = x + C",
            "∫ eˣ dx = eˣ + C",
            "∫ sin(x) dx = -cos(x) + C",
            "∫ cos(x) dx = sin(x) + C"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. Antiderivative Concept (intermediate) - Understand F'(x) = f(x) relationship",
      "2. Constant of Integration (intermediate) - Always include + C and understand why",
      "3. Indefinite Integral Notation (intermediate) - Read and write ∫ f(x) dx correctly",
      "4. Basic Integration Formulas (intermediate) - Apply power rule, exponential, and trig formulas"
    ],

    keyFormulas: `• F'(x) = f(x) means F is antiderivative of f
                  • ∫ f(x) dx = F(x) + C (always include + C)
                  • Power rule: ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C, n ≠ -1
                  • ∫ k dx = kx + C | ∫ eˣ dx = eˣ + C
                  • ∫ sin(x) dx = -cos(x) + C | ∫ cos(x) dx = sin(x) + C`
  },

  's4-math-integration-rules': {
    displayName: 'Rules for Integration',
    topicName: 'integration rules including power rule, constant multiples, and sum/difference',

    progressionStructure: {
      sections: [
        {
          id: "power-rule-integration",
          title: "The Power Rule for Integration",
          difficulty: "intermediate",
          prerequisites: ["basic-integration-formulas"],
          masterySignals: "Student applies power rule with various exponents (positive, negative, fractional) in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct power rule applications",
                "Success with positive, negative, and fractional exponents"
              ],
              qualitative: [
                "Applies ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C correctly",
                "Handles fractional exponents: ∫ √x dx = ∫ x^(1/2) dx",
                "Handles negative exponents: ∫ 1/x² dx = ∫ x⁻² dx",
                "Simplifies results appropriately",
                "Recognizes n = -1 is special case (not covered yet)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on exponent manipulation"],
              qualitative: [
                "Understands rule but struggles with algebra",
                "Needs help converting roots and fractions to exponents",
                "Can apply once expression is in xⁿ form"
              ]
            },
            struggling: {
              quantitative: ["Cannot apply power rule", "Frequent exponent errors"],
              qualitative: [
                "Does not remember to add 1 to exponent",
                "Forgets to divide by new exponent",
                "Cannot handle non-integer exponents"
              ]
            }
          },
          learningObjectives: [
            "Apply power rule: increase exponent by 1, divide by new exponent",
            "Integrate positive integer powers: ∫ x³ dx = x⁴/4 + C",
            "Convert and integrate roots: ∫ √x dx = ∫ x^(1/2) dx = (2/3)x^(3/2) + C",
            "Convert and integrate reciprocals: ∫ 1/x² dx = ∫ x⁻² dx = -x⁻¹ + C = -1/x + C",
            "Recognize n = -1 is exception (leads to ln|x|)"
          ],
          relevantFormulas: [
            "∫ xⁿ dx = xⁿ⁺¹/(n+1) + C, where n ≠ -1",
            "∫ x² dx = x³/3 + C | ∫ x³ dx = x⁴/4 + C",
            "∫ √x dx = (2/3)x^(3/2) + C",
            "∫ 1/x² dx = -1/x + C",
            "∫ x⁻³ dx = -1/(2x²) + C"
          ],
          availableTools: []
        },
        {
          id: "constant-multiple-rule",
          title: "Constant Multiple Rule",
          difficulty: "intermediate",
          prerequisites: ["power-rule-integration"],
          masterySignals: "Student factors out constants before integrating in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of constant multiple rule",
                "Consistent factoring of constants"
              ],
              qualitative: [
                "Applies ∫ k·f(x) dx = k·∫ f(x) dx",
                "Factors constants out before integrating",
                "Integrates: ∫ 5x³ dx = 5·∫ x³ dx = 5·x⁴/4 + C",
                "Handles fractional constants correctly",
                "Recognizes this simplifies calculations"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with reminders to factor"],
              qualitative: [
                "Understands rule but sometimes integrates constant as well",
                "Needs prompting to pull out constant",
                "Can apply once constant is identified"
              ]
            },
            struggling: {
              quantitative: ["Integrates constant incorrectly", "Cannot identify constants"],
              qualitative: [
                "Treats k·f(x) as single function",
                "Tries to integrate constant using power rule",
                "Does not understand factoring concept"
              ]
            }
          },
          learningObjectives: [
            "Understand: ∫ k·f(x) dx = k·∫ f(x) dx",
            "Factor constants out of integrals",
            "Apply to simplify: ∫ 3x² dx = 3·∫ x² dx = 3·x³/3 + C = x³ + C",
            "Handle fractional constants: ∫ (1/2)x dx = (1/2)·x²/2 + C = x²/4 + C",
            "Recognize constant multiple rule makes integration easier"
          ],
          relevantFormulas: [
            "∫ k·f(x) dx = k·∫ f(x) dx",
            "∫ 5x³ dx = 5·(x⁴/4) + C = (5x⁴)/4 + C",
            "∫ 2sin(x) dx = 2·(-cos(x)) + C = -2cos(x) + C",
            "Constant factor can be pulled out or left in"
          ],
          availableTools: []
        },
        {
          id: "sum-difference-rule",
          title: "Sum and Difference Rule",
          difficulty: "intermediate",
          prerequisites: ["constant-multiple-rule"],
          masterySignals: "Student integrates polynomials term-by-term in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct polynomial integrations",
                "All terms integrated correctly with proper signs"
              ],
              qualitative: [
                "Applies ∫ [f(x) ± g(x)] dx = ∫ f(x) dx ± ∫ g(x) dx",
                "Integrates each term separately",
                "Maintains correct signs (+ and -)",
                "Combines constant multiples and power rules",
                "Adds single + C at the end (not one per term)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with guidance on term separation"],
              qualitative: [
                "Understands concept but makes sign errors",
                "Sometimes adds + C to each term",
                "Can complete with hints"
              ]
            },
            struggling: {
              quantitative: ["Cannot separate terms", "Frequent errors"],
              qualitative: [
                "Does not understand term-by-term integration",
                "Makes sign errors throughout",
                "Cannot combine multiple rules"
              ]
            }
          },
          learningObjectives: [
            "Apply sum rule: ∫ [f(x) + g(x)] dx = ∫ f(x) dx + ∫ g(x) dx",
            "Apply difference rule: ∫ [f(x) - g(x)] dx = ∫ f(x) dx - ∫ g(x) dx",
            "Integrate polynomials term by term",
            "Maintain correct signs throughout",
            "Add single + C to final result"
          ],
          relevantFormulas: [
            "∫ [f(x) ± g(x)] dx = ∫ f(x) dx ± ∫ g(x) dx",
            "∫ (x³ + 2x² - 5x + 3) dx = x⁴/4 + 2x³/3 - 5x²/2 + 3x + C",
            "Only one + C needed for entire expression"
          ],
          availableTools: []
        },
        {
          id: "combining-integration-rules",
          title: "Combining Integration Rules",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["sum-difference-rule"],
          masterySignals: "Student integrates complex expressions using multiple rules in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct integrations of complex expressions",
                "Successful combination of all three rules"
              ],
              qualitative: [
                "Combines power rule, constant multiple, and sum/difference rules",
                "Handles expressions like ∫ (3x⁴ - 8x² + 5x - 2) dx",
                "Integrates expressions with roots and fractions",
                "Simplifies answers appropriately",
                "Works efficiently through multi-term expressions"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with step-by-step guidance"],
              qualitative: [
                "Can apply individual rules but struggles to combine",
                "Needs help determining which rule to use when",
                "Makes occasional algebraic errors"
              ]
            },
            struggling: {
              quantitative: ["Cannot handle complex expressions", "Multiple errors"],
              qualitative: [
                "Overwhelmed by multiple terms",
                "Cannot systematically apply rules",
                "Frequent algebraic and sign errors"
              ]
            }
          },
          learningObjectives: [
            "Integrate complex polynomials using all rules",
            "Handle expressions with mixed positive/negative terms",
            "Work with fractional coefficients",
            "Integrate expressions requiring conversion (roots to powers)",
            "Develop systematic approach to complex integrals"
          ],
          relevantFormulas: [
            "General approach: factor constants, integrate term-by-term, simplify",
            "Example: ∫ (2x³ - 5x² + 3x - 7) dx = x⁴/2 - 5x³/3 + 3x²/2 - 7x + C",
            "With roots: ∫ (x² + √x) dx = ∫ (x² + x^(1/2)) dx = x³/3 + (2/3)x^(3/2) + C"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. Power Rule (intermediate) - Apply ∫ xⁿ dx with all types of exponents",
      "2. Constant Multiple Rule (intermediate) - Factor constants: ∫ k·f(x) dx = k·∫ f(x) dx",
      "3. Sum/Difference Rule (intermediate) - Integrate term-by-term",
      "4. Combining Rules (intermediate→advanced) - Handle complex multi-term expressions"
    ],

    keyFormulas: `• Power rule: ∫ xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ -1)
                  • Constant multiple: ∫ k·f(x) dx = k·∫ f(x) dx
                  • Sum/difference: ∫ [f(x) ± g(x)] dx = ∫ f(x) dx ± ∫ g(x) dx
                  • Always add single + C at end
                  • Combine all rules for polynomials`
  },

  's4-math-integration-definite-integrals': {
    displayName: 'The Definite Integral',
    topicName: 'evaluating definite integrals and computing exact areas',

    progressionStructure: {
      sections: [
        {
          id: "fundamental-theorem-calculus",
          title: "The Fundamental Theorem of Calculus",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["combining-integration-rules"],
          masterySignals: "Student applies FTC to evaluate definite integrals in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct definite integral evaluations",
                "Proper notation and calculation throughout"
              ],
              qualitative: [
                "Applies ∫ₐᵇ f(x) dx = F(b) - F(a)",
                "Finds antiderivative F(x) correctly",
                "Evaluates at upper limit b",
                "Evaluates at lower limit a",
                "Subtracts: F(b) - F(a)",
                "Uses bracket notation: [F(x)]ₐᵇ",
                "Does NOT include + C in definite integrals"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on evaluation"],
              qualitative: [
                "Finds antiderivative but uncertain about limits",
                "Sometimes evaluates in wrong order",
                "Occasionally includes + C unnecessarily"
              ]
            },
            struggling: {
              quantitative: ["Cannot apply FTC", "Frequent evaluation errors"],
              qualitative: [
                "Does not understand FTC",
                "Cannot evaluate at limits correctly",
                "Confuses definite and indefinite integrals"
              ]
            }
          },
          learningObjectives: [
            "State Fundamental Theorem of Calculus: ∫ₐᵇ f(x) dx = F(b) - F(a)",
            "Find antiderivative F(x) of integrand f(x)",
            "Evaluate F at upper and lower limits",
            "Calculate difference: F(b) - F(a)",
            "Use proper notation: [F(x)]ₐᵇ",
            "Understand: C cancels so no need to include it"
          ],
          relevantFormulas: [
            "∫ₐᵇ f(x) dx = [F(x)]ₐᵇ = F(b) - F(a)",
            "F(x) is any antiderivative of f(x)",
            "Example: ∫₁³ x² dx = [x³/3]₁³ = 27/3 - 1/3 = 26/3",
            "No + C needed (it cancels: (F+C)(b) - (F+C)(a) = F(b) - F(a))"
          ],
          availableTools: ["definiteIntegralVisualizer"]
        },
        {
          id: "properties-definite-integrals",
          title: "Properties of Definite Integrals",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["fundamental-theorem-calculus"],
          masterySignals: "Student applies properties (reversed limits, additivity, zero width) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of properties",
                "Successful manipulation using properties"
              ],
              qualitative: [
                "Applies ∫ₐᵇ = -∫ᵇₐ (reversed limits change sign)",
                "Applies ∫ₐᵃ = 0 (zero width)",
                "Applies ∫ₐᵇ + ∫ᵇᶜ = ∫ₐᶜ (additivity)",
                "Applies ∫ₐᵇ k·f(x) dx = k·∫ₐᵇ f(x) dx",
                "Uses properties to simplify calculations"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with property reminders"],
              qualitative: [
                "Knows properties exist but uncertain which to use",
                "Can apply when property is identified",
                "Sometimes makes sign errors"
              ]
            },
            struggling: {
              quantitative: ["Cannot use properties", "Incorrect manipulations"],
              qualitative: [
                "Does not understand properties",
                "Cannot recognize when to use them",
                "Makes conceptual errors"
              ]
            }
          },
          learningObjectives: [
            "Apply reversed limits: ∫ₐᵇ f(x) dx = -∫ᵇₐ f(x) dx",
            "Recognize zero width: ∫ₐᵃ f(x) dx = 0",
            "Use additivity: ∫ₐᵇ + ∫ᵇᶜ = ∫ₐᶜ",
            "Factor constants: ∫ₐᵇ k·f(x) dx = k·∫ₐᵇ f(x) dx",
            "Apply properties to simplify complex problems"
          ],
          relevantFormulas: [
            "∫ₐᵇ f(x) dx = -∫ᵇₐ f(x) dx (swap → change sign)",
            "∫ₐᵃ f(x) dx = 0 (same limits)",
            "∫ₐᵇ f + ∫ᵇᶜ f = ∫ₐᶜ f (split intervals)",
            "∫ₐᵇ k·f = k·∫ₐᵇ f (constant multiple)"
          ],
          availableTools: []
        },
        {
          id: "areas-below-x-axis",
          title: "Areas Below the x-axis",
          difficulty: "advanced",
          prerequisites: ["properties-definite-integrals"],
          masterySignals: "Student correctly handles negative integrals and finds total areas in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations of net vs total area",
                "Proper handling of sign changes"
              ],
              qualitative: [
                "Understands ∫ₐᵇ f(x) dx gives net area (can be negative)",
                "Finds zeros to determine where f(x) changes sign",
                "Splits interval at zeros: ∫ₐᶜ + ∫ᶜᵇ",
                "Takes absolute value of negative portions for total area",
                "Distinguishes net area from total geometric area"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with guidance on splitting"],
              qualitative: [
                "Understands negative integrals but struggles to find split points",
                "Needs help determining where to split",
                "Can complete once intervals are identified"
              ]
            },
            struggling: {
              quantitative: ["Cannot handle negative areas", "Incorrect splitting"],
              qualitative: [
                "Does not understand negative integral values",
                "Cannot find zeros or split points",
                "Confuses net and total area"
              ]
            }
          },
          learningObjectives: [
            "Understand: ∫ₐᵇ f(x) dx is negative when f(x) < 0",
            "Find net area: evaluate ∫ₐᵇ f(x) dx directly (can be negative)",
            "Find total area: |∫ₐᶜ f| + |∫ᶜᵇ f| where c is zero of f",
            "Determine split points by solving f(x) = 0",
            "Distinguish between signed area (net) and unsigned area (total)"
          ],
          relevantFormulas: [
            "Net area = ∫ₐᵇ f(x) dx (includes signs)",
            "Total area = ∫ₐᵇ |f(x)| dx (all positive)",
            "If f(c) = 0 for a < c < b: Total = |∫ₐᶜ f| + |∫ᶜᵇ f|",
            "Negative integral means function is below x-axis"
          ],
          availableTools: ["definiteIntegralVisualizer", "functionGraph"]
        },
        {
          id: "applications-definite-integrals",
          title: "Applications of Definite Integrals",
          difficulty: "advanced",
          prerequisites: ["areas-below-x-axis"],
          masterySignals: "Student solves real-world problems using definite integrals in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications to real contexts",
                "Proper setup and evaluation"
              ],
              qualitative: [
                "Sets up integral for distance from velocity: s = ∫ v(t) dt",
                "Sets up integral for total change from rate of change",
                "Interprets integral in context (units, meaning)",
                "Recognizes integration as accumulation",
                "Connects math to physical/economic situations"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with setup guidance"],
              qualitative: [
                "Understands integration conceptually but struggles with setup",
                "Can evaluate once integral is written",
                "Needs help with interpretation"
              ]
            },
            struggling: {
              quantitative: ["Cannot set up integrals from word problems"],
              qualitative: [
                "Does not recognize integration situations",
                "Cannot translate words to math",
                "Missing connection to accumulation"
              ]
            }
          },
          learningObjectives: [
            "Apply to motion: distance = ∫ velocity dt",
            "Apply to economics: total cost = ∫ marginal cost dq",
            "Interpret ∫ₐᵇ f(t) dt as accumulated quantity from t=a to t=b",
            "Include appropriate units in answers",
            "Recognize integration solves 'total change from rate' problems"
          ],
          relevantFormulas: [
            "Distance: s = ∫ₜ₁ᵗ² v(t) dt",
            "Total change: ΔF = ∫ₐᵇ f'(x) dx = F(b) - F(a)",
            "Work: W = ∫ₐᵇ F(x) dx",
            "Integration accumulates quantities over intervals"
          ],
          availableTools: ["definiteIntegralVisualizer"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. Fundamental Theorem of Calculus (intermediate→advanced) - Apply ∫ₐᵇ f = F(b) - F(a)",
      "2. Properties of Definite Integrals (intermediate→advanced) - Use properties to simplify",
      "3. Areas Below x-axis (advanced) - Handle negative values, find net vs total area",
      "4. Applications (advanced) - Solve real-world problems (distance, total change)"
    ],

    keyFormulas: `• FTC: ∫ₐᵇ f(x) dx = [F(x)]ₐᵇ = F(b) - F(a)
                  • Properties: ∫ₐᵇ = -∫ᵇₐ | ∫ₐᵃ = 0 | ∫ₐᵇ + ∫ᵇᶜ = ∫ₐᶜ
                  • Net area vs total area (absolute values)
                  • Distance = ∫ velocity dt | Total change = ∫ rate dt`
  },

  's4-math-integration-riemann-sums': {
    displayName: 'Riemann Sums',
    topicName: 'Riemann sums and the formal definition of integration',

    progressionStructure: {
      sections: [
        {
          id: "riemann-sum-types",
          title: "Types of Riemann Sums",
          difficulty: "advanced",
          prerequisites: ["rectangle-approximation"],
          masterySignals: "Student computes left, right, and midpoint Riemann sums in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct Riemann sum calculations",
                "Success with all three methods (left, right, midpoint)"
              ],
              qualitative: [
                "Calculates Δx = (b - a) / n",
                "Identifies correct sample points for each method",
                "Evaluates f(xᵢ) at each sample point",
                "Computes sum: Σ f(xᵢ) · Δx",
                "Explains differences between methods"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on sample points"],
              qualitative: [
                "Understands concept but makes arithmetic errors",
                "Confuses which endpoints to use",
                "Can complete with guidance"
              ]
            },
            struggling: {
              quantitative: ["Cannot set up Riemann sums", "Calculation errors"],
              qualitative: [
                "Does not understand subinterval division",
                "Cannot identify sample points",
                "Cannot compute sums"
              ]
            }
          },
          learningObjectives: [
            "Compute left Riemann sum: Lₙ = Σ f(xᵢ₋₁) · Δx",
            "Compute right Riemann sum: Rₙ = Σ f(xᵢ) · Δx",
            "Compute midpoint Riemann sum: Mₙ = Σ f(x̄ᵢ) · Δx",
            "Understand: increasing f → Left under, Right over",
            "Recognize midpoint usually most accurate"
          ],
          relevantFormulas: [
            "Δx = (b - a) / n",
            "Lₙ = Δx · [f(x₀) + f(x₁) + ... + f(xₙ₋₁)]",
            "Rₙ = Δx · [f(x₁) + f(x₂) + ... + f(xₙ)]",
            "Mₙ = Δx · [f(x̄₁) + f(x̄₂) + ... + f(x̄ₙ)]",
            "xᵢ = a + i·Δx, x̄ᵢ = a + (i-0.5)·Δx"
          ],
          availableTools: ["areaApproximation", "riemannSumVisualizer"]
        },
        {
          id: "riemann-sum-accuracy",
          title: "Riemann Sum Accuracy",
          difficulty: "advanced",
          prerequisites: ["riemann-sum-types"],
          masterySignals: "Student analyzes how accuracy improves with n in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct comparisons of accuracy",
                "Proper analysis of convergence"
              ],
              qualitative: [
                "Understands larger n → better approximation",
                "Compares errors for different n values",
                "Recognizes all methods converge to same value",
                "Explains: as n → ∞, Δx → 0, approximation → exact",
                "Understands midpoint typically converges faster"
              ]
            },
            developing: {
              quantitative: ["1-2 correct comparisons with guidance"],
              qualitative: [
                "Sees improvement but struggles to quantify",
                "Uncertain about convergence concept",
                "Needs help with error analysis"
              ]
            },
            struggling: {
              quantitative: ["Cannot analyze accuracy"],
              qualitative: [
                "Does not see pattern as n increases",
                "Missing connection to exact value",
                "Cannot explain convergence"
              ]
            }
          },
          learningObjectives: [
            "Observe: as n increases, approximation improves",
            "Calculate errors: |Riemann sum - exact value|",
            "Understand: all three methods converge to ∫ₐᵇ f(x) dx",
            "Recognize: Δx → 0 as n → ∞",
            "Compare: midpoint usually most accurate for given n"
          ],
          relevantFormulas: [
            "Error = |approximation - exact value|",
            "As n → ∞: Lₙ, Rₙ, Mₙ → ∫ₐᵇ f(x) dx",
            "Smaller Δx → more rectangles → better fit",
            "Midpoint error ~ Δx², Left/Right error ~ Δx"
          ],
          availableTools: ["riemannSumVisualizer"]
        },
        {
          id: "formal-definition-integration",
          title: "The Formal Definition of Integration",
          difficulty: "advanced",
          prerequisites: ["riemann-sum-accuracy"],
          masterySignals: "Student explains the limit definition of integration in 2+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct explanations of limit definition",
                "Proper interpretation of notation"
              ],
              qualitative: [
                "States: ∫ₐᵇ f(x) dx = lim(n→∞) Σ f(xᵢ) · Δx",
                "Explains each component: limit, sum, sample point, width",
                "Understands limit makes rectangles infinitesimally thin",
                "Recognizes this defines what integration means",
                "Connects to FTC as computational shortcut"
              ]
            },
            developing: {
              quantitative: ["1 correct explanation with prompting"],
              qualitative: [
                "Knows definition exists but uncertain about details",
                "Can recite formula but struggles with meaning",
                "Needs help connecting limit to exact area"
              ]
            },
            struggling: {
              quantitative: ["Cannot state or explain definition"],
              qualitative: [
                "Does not understand limit notation",
                "Missing connection between Riemann sums and integration",
                "Cannot explain why limit is needed"
              ]
            }
          },
          learningObjectives: [
            "State formal definition: ∫ₐᵇ f(x) dx = lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ) · Δx",
            "Explain: as n → ∞, sum of rectangles → exact area",
            "Interpret: ∫ as limit of Σ (integral as limit of sums)",
            "Understand: dx represents lim(Δx→0) Δx",
            "Connect: FTC provides easier way to evaluate this limit"
          ],
          relevantFormulas: [
            "∫ₐᵇ f(x) dx = lim(n→∞) Σᵢ₌₁ⁿ f(xᵢ) · Δx",
            "where Δx = (b-a)/n and xᵢ ∈ [xᵢ₋₁, xᵢ]",
            "This limit must exist and be independent of sample point choice",
            "If limit exists, f is Riemann integrable on [a, b]"
          ],
          availableTools: ["riemannSumVisualizer"]
        },
        {
          id: "trapezoidal-rule",
          title: "The Trapezoidal Rule",
          difficulty: "advanced",
          prerequisites: ["formal-definition-integration"],
          masterySignals: "Student applies trapezoidal rule and compares to Riemann sums in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct trapezoidal rule calculations",
                "Accurate comparison with rectangle methods"
              ],
              qualitative: [
                "Applies Tₙ = (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]",
                "Recognizes trapezoids better approximate curves than rectangles",
                "Understands: trapezoid uses both endpoints, averages heights",
                "Compares accuracy: usually better than left/right, comparable to midpoint",
                "Explains: trapezoid = average of left and right"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with formula reference"],
              qualitative: [
                "Can apply formula but uncertain about coefficients",
                "Forgets to multiply middle terms by 2",
                "Understands concept after completion"
              ]
            },
            struggling: {
              quantitative: ["Cannot apply trapezoidal rule", "Coefficient errors"],
              qualitative: [
                "Does not understand trapezoid vs rectangle",
                "Cannot remember or apply formula",
                "Missing connection to averaging"
              ]
            }
          },
          learningObjectives: [
            "Apply trapezoidal rule formula with correct coefficients",
            "Understand: trapezoid uses linear interpolation between points",
            "Recognize: Tₙ = (Lₙ + Rₙ)/2 (average of left and right)",
            "Compare: trapezoids usually more accurate than rectangles",
            "Explain: trapezoids fit curves better than rectangles"
          ],
          relevantFormulas: [
            "Tₙ = (Δx/2)[f(x₀) + 2f(x₁) + 2f(x₂) + ... + 2f(xₙ₋₁) + f(xₙ)]",
            "First and last terms coefficient 1, all others coefficient 2",
            "Tₙ = (Lₙ + Rₙ)/2 (average of left and right sums)",
            "Error ~ Δx² (better than rectangle methods' ~ Δx)"
          ],
          availableTools: ["riemannSumVisualizer"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. Riemann Sum Types (advanced) - Compute left, right, and midpoint sums",
      "2. Riemann Sum Accuracy (advanced) - Analyze convergence as n increases",
      "3. Formal Definition (advanced) - Understand ∫ = lim(n→∞) Σ f(xᵢ)Δx",
      "4. Trapezoidal Rule (advanced) - Apply and compare trapezoid method"
    ],

    keyFormulas: `• Δx = (b-a)/n | Lₙ = Δx·Σf(left) | Rₙ = Δx·Σf(right) | Mₙ = Δx·Σf(midpoint)
                  • As n → ∞: all methods → ∫ₐᵇ f(x) dx
                  • Formal definition: ∫ₐᵇ f(x) dx = lim(n→∞) Σf(xᵢ)Δx
                  • Trapezoidal: Tₙ = (Δx/2)[f(x₀) + 2f(x₁) + ... + 2f(xₙ₋₁) + f(xₙ)]`
  }
};
