/**
 * S4 Mathematics - Differential Calculus Topic Configuration
 *
 * Complete configuration for Secondary 4 Differential Calculus module
 * covering limits, derivatives, differentiation rules, and optimization.
 */

// Type exports
export type DifferentialCalculusTopicId =
  | 'limits'
  | 'gradient-tangent'
  | 'derivative-function'
  | 'first-principles'
  | 'differentiation-rules'
  | 'tangent-equations'
  | 'stationary-points';

// Topic-specific tutor customization (overrides base)
export const DIFFERENTIAL_CALCULUS_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary school students learning Differential Calculus.

Teaching Approach:
- Build intuition FIRST using graphs and real-world contexts (velocity, slopes) before formulas
- Ensure solid understanding of limits before moving to derivatives
- Show where rules come from (first principles), not just how to apply them
- Always connect algebraic work to graphical representation
- Address common pitfalls early: chain rule confusion, quotient rule sign errors
- Use incremental complexity: master power rule before product/quotient/chain rules
- Motivate with applications: optimization and tangent problems show relevance

Key Pedagogical Points:
- Derivative = instantaneous rate of change (not just "slope")
- f'(x) tells us about f(x)'s behavior (increasing/decreasing, max/min)
- Multiple notations are equivalent: f'(x) = dy/dx = d/dx[f(x)]
- Differentiability requires continuity (but not vice versa)

**Text-to-Speech Guidelines:**
- Pronounce "lim x approaches a" not "lim x arrow a"
- Say "f prime of x" for f'(x), "dee y dee x" for dy/dx
- Spell out Greek letters: "theta", "delta"
- Keep speech.text plain and conversational (no markdown, no LaTeX)`,

  visualToolsGuidance: `Use visual tools strategically:

**For Limits:**
- Show function approaching a point from both sides
- Visualize when limits don't exist (jumps, asymptotes)

**For Derivatives:**
- Animate secant line becoming tangent line (h → 0)
- Display f(x) and f'(x) side-by-side to show relationship
- Show tangent line at various points

**For Rules:**
- Product rule: Show geometric interpretation with areas
- Chain rule: Demonstrate composition of functions visually

**For Stationary Points:**
- Highlight where f'(x) = 0 on the graph
- Show connection between f'(x) sign and f(x) behavior
- Animate second derivative test

Always ask: "What do you notice about the graph at this point?"`
};

// Available math tools for this topic
export const DIFFERENTIAL_CALCULUS_MATH_TOOLS = [
  'function-graph',
  'limit-visualizer',
  'tangent-visualizer',
  'secant-tangent-comparison',
  'derivative-grapher',
  'first-principles-visualizer',
  'chain-rule-visualizer',
  'normal-line-grapher',
  'stationary-points-visualizer',
  'optimization-grapher'
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const DIFFERENTIAL_CALCULUS_SUBTOPICS = {

  // ==========================================================================
  // A. LIMITS
  // ==========================================================================
  'limits': {
    displayName: 'Limits',
    topicName: 'limits',

    progressionStructure: {
      sections: [
        {
          id: 'limits-intro',
          title: 'Introduction to Limits',
          difficulty: 'foundational',
          prerequisites: [],
          masterySignals: '3 correct answers with good understanding of approach concept',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Correctly evaluates limits by direct substitution',
                'Identifies limits that don\'t exist',
                'Explains limit concept in own words'
              ],
              qualitative: [
                'Uses precise language ("approaches" not "equals")',
                'Connects limits to graph behavior',
                'Self-corrects when substitution fails'
              ]
            },
            developing: {
              quantitative: ['Can substitute but struggles with conceptual understanding'],
              qualitative: [
                'Confuses limit value with function value',
                'Uncertain when limits don\'t exist',
                'Needs prompting to use algebraic techniques'
              ]
            },
            struggling: {
              quantitative: ['Confuses limits with function evaluation'],
              qualitative: [
                'Says lim[x→2] f(x) = f(2) always',
                'Doesn\'t recognize indeterminate forms (0/0)',
                'Can\'t interpret limit notation'
              ]
            }
          },

          learningObjectives: [
            'Understand limit as "value approached" not "value reached"',
            'Evaluate limits by direct substitution',
            'Recognize when direct substitution fails (0/0)',
            'Use limit notation correctly: lim[x→a] f(x) = L'
          ],

          relevantFormulas: [
            'lim[x→a] f(x) = L means "as x approaches a, f(x) approaches L"',
            'Basic Limit Laws: lim(f+g) = lim f + lim g, lim(kf) = k·lim f',
            'Direct Substitution: If f is continuous at x = a, then lim[x→a] f(x) = f(a)',
            'Example: lim[x→3] (x² + 2x) = 3² + 2(3) = 15'
          ],

          sampleProblems: [
            'Evaluate: lim[x→2] (x² + 3x - 1)',
            'Find: lim[x→-1] (x³ - 2x + 5)',
            'What is lim[x→0] (sin x / x)? Does direct substitution work?'
          ],

          availableTools: ['function-graph', 'limit-visualizer']
        },

        {
          id: 'evaluating-limits',
          title: 'Evaluating Limits Algebraically',
          difficulty: 'foundational-to-intermediate',
          prerequisites: ['limits-intro'],
          masterySignals: '4 correct answers showing algebraic manipulation skills',
          estimatedQuestions: '5-6 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Correctly handles 0/0 indeterminate forms',
                'Factors to cancel common terms',
                'Rationalizes numerators/denominators when needed'
              ],
              qualitative: [
                'Recognizes which technique to use',
                'Explains why direct substitution failed',
                'Simplifies before substituting'
              ]
            },
            developing: {
              quantitative: ['Uses techniques but makes algebraic errors'],
              qualitative: [
                'Factors incorrectly',
                'Forgets to cancel common factors',
                'Struggles with rationalization'
              ]
            },
            struggling: {
              quantitative: ['Gives up when direct substitution fails'],
              qualitative: [
                'Concludes "limit doesn\'t exist" when getting 0/0',
                'Can\'t factor quadratics',
                'Doesn\'t recognize need for rationalization'
              ]
            }
          },

          learningObjectives: [
            'Factor polynomials to cancel common terms',
            'Rationalize to eliminate 0/0 forms',
            'Apply limit laws correctly',
            'Recognize when algebraic manipulation is needed'
          ],

          relevantFormulas: [
            'Factoring: lim[x→2] (x²-4)/(x-2) = lim[x→2] (x-2)(x+2)/(x-2) = lim[x→2] (x+2) = 4',
            'Rationalization: lim[x→0] (√(x+1)-1)/x → multiply by conjugate',
            'Common Indeterminate Forms: 0/0, ∞/∞ → Need algebraic manipulation'
          ],

          availableTools: ['function-graph', 'limit-visualizer']
        },

        {
          id: 'one-sided-limits',
          title: 'One-Sided Limits',
          difficulty: 'intermediate',
          prerequisites: ['evaluating-limits'],
          masterySignals: '3 correct with understanding of left vs right limits',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Correctly evaluates lim[x→a⁺] and lim[x→a⁻]',
                'Determines if overall limit exists by comparing one-sided limits',
                'Handles piecewise functions correctly'
              ],
              qualitative: [
                'Explains difference between approaching from left vs right',
                'Uses correct notation (+ and -)',
                'Connects to continuity concept'
              ]
            },
            developing: {
              quantitative: ['Confuses left and right limits'],
              qualitative: [
                'Unsure which side is "+"',
                'Evaluates one-sided limits but can\'t conclude about overall limit'
              ]
            },
            struggling: {
              quantitative: ['Doesn\'t understand directional approach'],
              qualitative: [
                'Treats lim[x→a⁺] same as lim[x→a]',
                'Doesn\'t check both sides'
              ]
            }
          },

          learningObjectives: [
            'Evaluate left-hand limits: lim[x→a⁻] f(x)',
            'Evaluate right-hand limits: lim[x→a⁺] f(x)',
            'Determine if lim[x→a] f(x) exists by comparing one-sided limits',
            'Apply to piecewise functions'
          ],

          relevantFormulas: [
            'lim[x→a⁻] f(x) = L (approaching from left)',
            'lim[x→a⁺] f(x) = L (approaching from right)',
            'Overall limit exists ⟺ lim[x→a⁻] f(x) = lim[x→a⁺] f(x)',
            'Piecewise Example: If lim[x→2⁻] f(x) = 4 and lim[x→2⁺] f(x) = 4, then lim[x→2] f(x) = 4'
          ],

          availableTools: ['function-graph', 'limit-visualizer']
        },

        {
          id: 'limits-infinity',
          title: 'Limits at Infinity',
          difficulty: 'intermediate',
          prerequisites: ['evaluating-limits'],
          masterySignals: '3 correct with understanding of end behavior',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Evaluates lim[x→∞] for rational functions',
                'Identifies horizontal asymptotes',
                'Divides by highest power correctly'
              ],
              qualitative: [
                'Explains why terms vanish as x→∞',
                'Connects to graph behavior'
              ]
            },
            developing: {
              quantitative: ['Applies technique but doesn\'t understand why'],
              qualitative: [
                'Mechanically divides by x but can\'t explain',
                'Confused about which terms vanish'
              ]
            },
            struggling: {
              quantitative: ['Doesn\'t know how to handle ∞/∞'],
              qualitative: [
                'Says ∞/∞ = 1',
                'Doesn\'t divide by highest power'
              ]
            }
          },

          learningObjectives: [
            'Evaluate lim[x→∞] f(x) and lim[x→-∞] f(x)',
            'Find horizontal asymptotes using limits',
            'Divide by highest power to simplify',
            'Compare degrees of polynomials in rational functions'
          ],

          relevantFormulas: [
            'If degree(num) < degree(den): lim = 0',
            'If degree(num) = degree(den): lim = ratio of leading coefficients',
            'If degree(num) > degree(den): lim = ±∞',
            'Example: lim[x→∞] (3x²+2x)/(2x²-5) = 3/2',
            'Key Property: lim[x→∞] 1/xⁿ = 0 (for n > 0)'
          ],

          availableTools: ['function-graph', 'limit-visualizer']
        }
      ]
    },

    learningObjectives: [
      'Master the concept of limits as approaching values',
      'Evaluate limits using algebraic techniques',
      'Understand one-sided limits and their role in continuity',
      'Find limits at infinity and horizontal asymptotes'
    ],

    keyFormulas: `• Basic Limit Laws (sum, product, quotient)
• lim[x→a] f(x) exists ⟺ lim[x→a⁻] f(x) = lim[x→a⁺] f(x)
• Limits at infinity for rational functions
• lim[x→0] (sin x)/x = 1 (important limit)`
  },

  // ==========================================================================
  // B. GRADIENT OF TANGENT
  // ==========================================================================
  'gradient-tangent': {
    displayName: 'Gradient of a Tangent',
    topicName: 'finding the gradient of a tangent',

    progressionStructure: {
      sections: [
        {
          id: 'tangent-vs-secant',
          title: 'Tangent vs Secant Lines',
          difficulty: 'foundational',
          prerequisites: ['limits'],
          masterySignals: '3 correct with clear understanding of difference',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Correctly distinguishes tangent from secant in 3+ diagrams',
                'Calculates secant gradient correctly'
              ],
              qualitative: [
                'Explains that secant connects two points',
                'Explains that tangent touches at one point',
                'Understands tangent gradient is instantaneous rate of change'
              ]
            },
            developing: {
              quantitative: ['Identifies difference but struggles with gradient calculation'],
              qualitative: [
                'Confuses which line is which',
                'Needs prompting for gradient formula'
              ]
            },
            struggling: {
              quantitative: ['Cannot distinguish tangent from secant'],
              qualitative: [
                'Doesn\'t understand difference between average and instantaneous rate',
                'Can\'t calculate gradient of line between two points'
              ]
            }
          },

          learningObjectives: [
            'Distinguish between secant and tangent lines',
            'Calculate gradient of secant line: (f(x+h) - f(x))/h',
            'Understand secant gradient = average rate of change',
            'Understand tangent gradient = instantaneous rate of change'
          ],

          relevantFormulas: [
            'Secant gradient: m = (f(x+h) - f(x))/h (average rate of change)',
            'As h → 0, secant approaches tangent',
            'Tangent gradient = limit of secant gradient as h → 0'
          ],

          availableTools: ['tangent-visualizer', 'secant-tangent-comparison']
        },

        {
          id: 'gradient-limit-process',
          title: 'Gradient as a Limit Process',
          difficulty: 'intermediate',
          prerequisites: ['tangent-vs-secant'],
          masterySignals: '3 correct using limit of difference quotient',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Correctly applies lim[h→0] (f(x+h) - f(x))/h',
                'Finds tangent gradient for simple functions'
              ],
              qualitative: [
                'Explains why we need the limit',
                'Understands connection between secant and tangent',
                'Visualizes h getting smaller'
              ]
            },
            developing: {
              quantitative: ['Struggles with limit evaluation'],
              qualitative: [
                'Understands concept but makes algebraic errors',
                'Needs prompting for simplification'
              ]
            },
            struggling: {
              quantitative: ['Cannot apply limit process'],
              qualitative: [
                'Doesn\'t understand why limit is needed',
                'Can\'t simplify (f(x+h) - f(x))/h before taking limit'
              ]
            }
          },

          learningObjectives: [
            'Apply limit definition: m = lim[h→0] (f(x+h) - f(x))/h',
            'Simplify difference quotient before taking limit',
            'Find gradient of tangent for polynomial functions',
            'Interpret gradient as instantaneous rate of change'
          ],

          relevantFormulas: [
            'Tangent gradient: m = lim[h→0] (f(x+h) - f(x))/h',
            'Example: For f(x) = x², gradient at x = 2: lim[h→0] ((2+h)² - 4)/h = 4',
            'This is the definition of the derivative'
          ],

          availableTools: ['tangent-visualizer', 'secant-tangent-comparison', 'limit-visualizer']
        },

        {
          id: 'approximating-gradients',
          title: 'Approximating Gradients from Graphs',
          difficulty: 'intermediate',
          prerequisites: ['gradient-limit-process'],
          masterySignals: '3 correct gradient approximations',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Accurately draws tangent line at given point',
                'Calculates gradient from graph coordinates',
                'Estimates gradient to reasonable precision'
              ],
              qualitative: [
                'Explains method for drawing tangent',
                'Verifies answer makes sense from graph',
                'Recognizes when gradient is positive/negative/zero'
              ]
            },
            developing: {
              quantitative: ['Tangent line not quite accurate'],
              qualitative: [
                'Struggles to draw tangent precisely',
                'Gradient calculation correct once line is drawn'
              ]
            },
            struggling: {
              quantitative: ['Cannot draw tangent or find gradient'],
              qualitative: [
                'Draws secant instead of tangent',
                'Can\'t read coordinates from graph',
                'Doesn\'t know how to calculate gradient from two points'
              ]
            }
          },

          learningObjectives: [
            'Draw tangent line at a point on a curve',
            'Use rise/run to find gradient from graph',
            'Approximate gradient using nearby points',
            'Recognize gradient sign from curve behavior'
          ],

          relevantFormulas: [
            'Gradient from graph: rise/run = Δy/Δx',
            'Read two points on tangent line and calculate gradient',
            'Gradient > 0 when curve is increasing',
            'Gradient < 0 when curve is decreasing',
            'Gradient = 0 at turning points'
          ],

          availableTools: ['tangent-visualizer', 'function-graph']
        }
      ]
    },

    learningObjectives: [
      'Distinguish between secant and tangent lines',
      'Understand gradient as instantaneous rate of change',
      'Use limit process to find gradient of tangent',
      'Approximate gradients from graphs'
    ],

    keyFormulas: `• Secant gradient: m = (f(x+h) - f(x))/h
• Tangent gradient: m = lim[h→0] (f(x+h) - f(x))/h
• This limit defines the derivative`
  },

  // ==========================================================================
  // C. DERIVATIVE FUNCTION
  // ==========================================================================
  'derivative-function': {
    displayName: 'The Derivative Function',
    topicName: 'the derivative function',

    progressionStructure: {
      sections: [
        {
          id: 'derivative-definition',
          title: 'Definition of the Derivative',
          difficulty: 'intermediate',
          prerequisites: ['gradient-tangent'],
          masterySignals: '3 correct using derivative definition',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Correctly states f\'(x) = lim[h→0] (f(x+h) - f(x))/h',
                'Calculates derivatives using definition',
                'Interprets derivative as rate of change'
              ],
              qualitative: [
                'Explains derivative as function, not just number',
                'Connects derivative to tangent gradient at any point',
                'Understands derivative measures how function changes'
              ]
            },
            developing: {
              quantitative: ['Struggles with limit evaluation in derivative'],
              qualitative: [
                'Understands concept but makes algebraic errors',
                'Confuses derivative function with derivative at a point'
              ]
            },
            struggling: {
              quantitative: ['Cannot apply derivative definition'],
              qualitative: [
                'Doesn\'t understand what derivative represents',
                'Can\'t distinguish between f(x) and f\'(x)'
              ]
            }
          },

          learningObjectives: [
            'Define derivative: f\'(x) = lim[h→0] (f(x+h) - f(x))/h',
            'Understand derivative as function of x',
            'Calculate derivatives from first principles',
            'Interpret derivative as instantaneous rate of change'
          ],

          relevantFormulas: [
            'f\'(x) = lim[h→0] (f(x+h) - f(x))/h',
            'f\'(a) = gradient of tangent at x = a',
            'Example: If f(x) = x², then f\'(x) = 2x',
            'Example: If f(x) = x³, then f\'(x) = 3x²'
          ],

          availableTools: ['derivative-grapher', 'function-graph']
        },

        {
          id: 'derivative-notation',
          title: 'Derivative Notation',
          difficulty: 'intermediate',
          prerequisites: ['derivative-definition'],
          masterySignals: '3 correct using different notations correctly',
          estimatedQuestions: '3-4 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Uses f\'(x), dy/dx, d/dx[f(x)] interchangeably',
                'Interprets all notations correctly',
                'Chooses appropriate notation for context'
              ],
              qualitative: [
                'Explains equivalence of different notations',
                'Understands Leibniz notation dy/dx',
                'Recognizes operator notation d/dx'
              ]
            },
            developing: {
              quantitative: ['Comfortable with one notation but not others'],
              qualitative: [
                'Confused by multiple notations',
                'Needs prompting for notation equivalence'
              ]
            },
            struggling: {
              quantitative: ['Cannot use different notations'],
              qualitative: [
                'Treats dy/dx as fraction',
                'Doesn\'t understand notation represents same concept'
              ]
            }
          },

          learningObjectives: [
            'Use prime notation: f\'(x), y\'',
            'Use Leibniz notation: dy/dx, df/dx',
            'Use operator notation: d/dx[f(x)]',
            'Understand all notations represent the derivative',
            'Choose appropriate notation for context'
          ],

          relevantFormulas: [
            'f\'(x) = dy/dx = d/dx[f(x)] (all equivalent)',
            'Prime notation: f\'(x), y\', g\'(x)',
            'Leibniz: dy/dx ("dee y dee x")',
            'Operator: d/dx[x²] = 2x',
            'At a point: f\'(3) or dy/dx|ₓ₌₃'
          ],

          availableTools: ['derivative-grapher']
        },

        {
          id: 'differentiability-continuity',
          title: 'Differentiability and Continuity',
          difficulty: 'intermediate-to-advanced',
          prerequisites: ['derivative-definition'],
          masterySignals: '3 correct identifying where functions are/aren\'t differentiable',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Correctly identifies differentiable vs non-differentiable points',
                'Recognizes corners, cusps, vertical tangents',
                'Understands differentiable → continuous'
              ],
              qualitative: [
                'Explains why corners aren\'t differentiable',
                'Gives example of continuous but not differentiable',
                'Explains relationship between concepts'
              ]
            },
            developing: {
              quantitative: ['Identifies some non-differentiable points'],
              qualitative: [
                'Confused about relationship between concepts',
                'Needs prompting for corner/cusp identification'
              ]
            },
            struggling: {
              quantitative: ['Thinks all continuous functions are differentiable'],
              qualitative: [
                'Doesn\'t understand what makes function non-differentiable',
                'Can\'t identify corners or cusps'
              ]
            }
          },

          learningObjectives: [
            'Understand: differentiable → continuous',
            'Understand: continuous ↛ differentiable',
            'Identify points where derivative doesn\'t exist',
            'Recognize corners, cusps, and vertical tangents',
            'Give example: |x| is continuous but not differentiable at x=0'
          ],

          relevantFormulas: [
            'If f is differentiable at x = a, then f is continuous at x = a',
            'Continuity does NOT guarantee differentiability',
            'f\'(x) doesn\'t exist at: corners, cusps, vertical tangents, discontinuities',
            'Example: f(x) = |x| is continuous everywhere but not differentiable at x = 0'
          ],

          availableTools: ['derivative-grapher', 'function-graph']
        }
      ]
    },

    learningObjectives: [
      'Define derivative as limit of difference quotient',
      'Use multiple notation systems correctly',
      'Identify where functions are/aren\'t differentiable',
      'Understand relationship between continuity and differentiability'
    ],

    keyFormulas: `• f'(x) = lim[h→0] (f(x+h) - f(x))/h
• Notations: f'(x) = dy/dx = d/dx[f(x)]
• Differentiable → Continuous
• Continuous ↛ Differentiable`
  },

  // ==========================================================================
  // D. FIRST PRINCIPLES
  // ==========================================================================
  'first-principles': {
    displayName: 'Differentiation from First Principles',
    topicName: 'differentiation from first principles',

    progressionStructure: {
      sections: [
        {
          id: 'first-principles-formula',
          title: 'First Principles Formula',
          difficulty: 'intermediate',
          prerequisites: ['derivative-function'],
          masterySignals: '3 correct applications of first principles',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Correctly applies f\'(x) = lim[h→0] (f(x+h) - f(x))/h',
                'Simplifies algebraic expressions properly',
                'Evaluates limit correctly'
              ],
              qualitative: [
                'Explains each step clearly',
                'Recognizes when to factor or expand',
                'Verifies answer makes sense'
              ]
            },
            developing: {
              quantitative: ['Makes algebraic errors in simplification'],
              qualitative: [
                'Understands process but struggles with algebra',
                'Needs prompting for factoring or cancellation'
              ]
            },
            struggling: {
              quantitative: ['Cannot simplify (f(x+h) - f(x))/h'],
              qualitative: [
                'Doesn\'t understand why simplification is needed',
                'Can\'t cancel h from numerator and denominator'
              ]
            }
          },

          learningObjectives: [
            'Apply first principles: f\'(x) = lim[h→0] (f(x+h) - f(x))/h',
            'Expand (x+h)ⁿ and simplify',
            'Cancel common factor h before taking limit',
            'Derive simple polynomial derivatives'
          ],

          relevantFormulas: [
            'f\'(x) = lim[h→0] (f(x+h) - f(x))/h',
            'Example: f(x) = x² → f\'(x) = lim[h→0] ((x+h)² - x²)/h = lim[h→0] (2xh + h²)/h = 2x',
            'Example: f(x) = x³ → f\'(x) = 3x²',
            'Key: Simplify to eliminate h in denominator before substituting h = 0'
          ],

          availableTools: ['first-principles-visualizer', 'function-graph']
        },

        {
          id: 'polynomials-first-principles',
          title: 'Applying First Principles to Polynomials',
          difficulty: 'intermediate-to-advanced',
          prerequisites: ['first-principles-formula'],
          masterySignals: '3 correct polynomial derivatives from first principles',
          estimatedQuestions: '5-6 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Derives power rule for xⁿ',
                'Handles coefficients correctly',
                'Derives derivatives for x, x², x³, x⁴'
              ],
              qualitative: [
                'Shows all steps clearly',
                'Recognizes pattern emerging (power rule)',
                'Explains why lower powers disappear in limit'
              ]
            },
            developing: {
              quantitative: ['Can do simple cases but struggles with higher powers'],
              qualitative: [
                'Makes errors in binomial expansion',
                'Needs prompting for pattern recognition'
              ]
            },
            struggling: {
              quantitative: ['Cannot expand (x+h)ⁿ for n > 2'],
              qualitative: [
                'Doesn\'t understand binomial expansion',
                'Can\'t see connection to power rule'
              ]
            }
          },

          learningObjectives: [
            'Derive d/dx[xⁿ] = nxⁿ⁻¹ from first principles',
            'Apply to various polynomial functions',
            'Handle constant coefficients',
            'Recognize pattern leading to power rule'
          ],

          relevantFormulas: [
            'd/dx[x] = 1',
            'd/dx[x²] = 2x',
            'd/dx[x³] = 3x²',
            'd/dx[xⁿ] = nxⁿ⁻¹ (power rule)',
            'd/dx[cf(x)] = c·f\'(x) (constant multiple rule)'
          ],

          availableTools: ['first-principles-visualizer']
        },

        {
          id: 'common-derivatives',
          title: 'Deriving Common Derivatives',
          difficulty: 'advanced',
          prerequisites: ['polynomials-first-principles'],
          masterySignals: '3 correct derivations for √x, 1/x, etc.',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Derives d/dx[√x] = 1/(2√x)',
                'Derives d/dx[1/x] = -1/x²',
                'Handles rationalization correctly'
              ],
              qualitative: [
                'Uses appropriate algebraic techniques',
                'Explains why rationalization is needed for √x',
                'Connects results to power rule (x^(1/2), x^(-1))'
              ]
            },
            developing: {
              quantitative: ['Struggles with rationalization or negative exponents'],
              qualitative: [
                'Needs prompting for algebraic technique',
                'Can complete with guidance'
              ]
            },
            struggling: {
              quantitative: ['Cannot handle square roots or fractions'],
              qualitative: [
                'Doesn\'t know how to rationalize',
                'Can\'t work with negative or fractional exponents'
              ]
            }
          },

          learningObjectives: [
            'Derive d/dx[√x] = 1/(2√x) using rationalization',
            'Derive d/dx[1/x] = -1/x²',
            'Connect to power rule: x^(1/2), x^(-1)',
            'Use appropriate algebraic techniques for each function type'
          ],

          relevantFormulas: [
            'd/dx[√x] = 1/(2√x) or equivalently d/dx[x^(1/2)] = (1/2)x^(-1/2)',
            'd/dx[1/x] = -1/x² or equivalently d/dx[x^(-1)] = -x^(-2)',
            'd/dx[1/x²] = -2/x³ or equivalently d/dx[x^(-2)] = -2x^(-3)',
            'Rationalization technique for √x: multiply by (√(x+h) + √x)/(√(x+h) + √x)'
          ],

          availableTools: ['first-principles-visualizer', 'derivative-grapher']
        }
      ]
    },

    learningObjectives: [
      'Apply first principles formula correctly',
      'Simplify complex algebraic expressions',
      'Derive derivatives for xⁿ, √x, 1/x from first principles',
      'Recognize patterns leading to derivative rules'
    ],

    keyFormulas: `• f'(x) = lim[h→0] (f(x+h) - f(x))/h
• d/dx[xⁿ] = nxⁿ⁻¹ (derived from first principles)
• d/dx[√x] = 1/(2√x)
• d/dx[1/x] = -1/x²`
  },

  // ==========================================================================
  // E. DIFFERENTIATION RULES
  // ==========================================================================
  'differentiation-rules': {
    displayName: 'Rules for Differentiation',
    topicName: 'differentiation rules',

    progressionStructure: {
      sections: [
        {
          id: 'power-rule',
          title: 'Power Rule',
          difficulty: 'intermediate',
          prerequisites: ['first-principles'],
          masterySignals: '4 correct applications of power rule',
          estimatedQuestions: '5-6 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Applies d/dx[xⁿ] = nxⁿ⁻¹ correctly',
                'Handles positive, negative, and fractional exponents',
                'Differentiates polynomials term by term'
              ],
              qualitative: [
                'Explains power rule clearly',
                'Recognizes when to apply power rule',
                'Verifies answers make sense'
              ]
            },
            developing: {
              quantitative: ['Makes errors with negative or fractional exponents'],
              qualitative: [
                'Applies rule mechanically but doesn\'t understand it',
                'Needs prompting for special cases'
              ]
            },
            struggling: {
              quantitative: ['Cannot apply power rule correctly'],
              qualitative: [
                'Confuses power rule with other operations',
                'Doesn\'t understand exponent arithmetic'
              ]
            }
          },

          learningObjectives: [
            'Apply power rule: d/dx[xⁿ] = nxⁿ⁻¹',
            'Handle positive exponents (x², x³, etc.)',
            'Handle negative exponents (1/x = x⁻¹)',
            'Handle fractional exponents (√x = x^(1/2))',
            'Differentiate polynomials term by term'
          ],

          relevantFormulas: [
            'd/dx[xⁿ] = nxⁿ⁻¹',
            'd/dx[x³] = 3x²',
            'd/dx[1/x²] = d/dx[x⁻²] = -2x⁻³ = -2/x³',
            'd/dx[√x] = d/dx[x^(1/2)] = (1/2)x^(-1/2) = 1/(2√x)',
            'd/dx[c] = 0 (constant rule)',
            'd/dx[cf(x)] = c·f\'(x) (constant multiple rule)'
          ],

          availableTools: ['derivative-grapher', 'function-graph']
        },

        {
          id: 'product-rule',
          title: 'Product Rule',
          difficulty: 'intermediate-to-advanced',
          prerequisites: ['power-rule'],
          masterySignals: '4 correct applications of product rule',
          estimatedQuestions: '5-6 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Applies d/dx[uv] = u\'v + uv\' correctly',
                'Identifies u and v correctly',
                'Calculates u\' and v\' without errors'
              ],
              qualitative: [
                'Explains why d/dx[uv] ≠ u\'v\'',
                'Shows all steps clearly',
                'Simplifies final answer'
              ]
            },
            developing: {
              quantitative: ['Makes errors in identifying u, v or their derivatives'],
              qualitative: [
                'Forgets one term in u\'v + uv\'',
                'Needs prompting for correct formula'
              ]
            },
            struggling: {
              quantitative: ['Thinks d/dx[uv] = u\'v\''],
              qualitative: [
                'Doesn\'t understand why product rule is needed',
                'Can\'t identify which parts are u and v'
              ]
            }
          },

          learningObjectives: [
            'Apply product rule: d/dx[uv] = u\'v + uv\'',
            'Identify u and v in product',
            'Calculate derivatives u\' and v\'',
            'Understand why d/dx[uv] ≠ u\'v\'',
            'Simplify final answers'
          ],

          relevantFormulas: [
            'd/dx[uv] = u\'v + uv\'',
            'Example: d/dx[x²·sin x] = 2x·sin x + x²·cos x',
            'Example: d/dx[(x+1)(x²-3)] = (1)(x²-3) + (x+1)(2x) = 3x² + 2x - 3',
            'Mnemonic: "first times derivative of second plus second times derivative of first"'
          ],

          availableTools: ['derivative-grapher']
        },

        {
          id: 'quotient-rule',
          title: 'Quotient Rule',
          difficulty: 'advanced',
          prerequisites: ['product-rule'],
          masterySignals: '4 correct applications without sign errors',
          estimatedQuestions: '5-6 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Applies d/dx[u/v] = (u\'v - uv\')/v² correctly',
                'Gets signs correct (minus in numerator)',
                'Simplifies complex fractions'
              ],
              qualitative: [
                'Explains quotient rule formula',
                'Recognizes common sign error',
                'Shows all steps clearly'
              ]
            },
            developing: {
              quantitative: ['Makes sign errors in numerator'],
              qualitative: [
                'Confuses order of terms (uv\' - u\'v)',
                'Needs prompting for correct formula'
              ]
            },
            struggling: {
              quantitative: ['Cannot apply quotient rule'],
              qualitative: [
                'Forgets denominator v²',
                'Thinks d/dx[u/v] = u\'/v\''
              ]
            }
          },

          learningObjectives: [
            'Apply quotient rule: d/dx[u/v] = (u\'v - uv\')/v²',
            'Remember correct order: u\'v MINUS uv\'',
            'Square denominator v²',
            'Simplify complex fractions',
            'Recognize when to use quotient rule vs rewrite as product'
          ],

          relevantFormulas: [
            'd/dx[u/v] = (u\'v - uv\')/v²',
            'Example: d/dx[x²/(x+1)] = (2x(x+1) - x²(1))/(x+1)² = (x² + 2x)/(x+1)²',
            'Mnemonic: "low dee high minus high dee low over low low" or "vdu - udv over v²"',
            'Alternative: rewrite 1/v as v⁻¹ and use product rule'
          ],

          availableTools: ['derivative-grapher']
        },

        {
          id: 'chain-rule',
          title: 'Chain Rule',
          difficulty: 'advanced',
          prerequisites: ['product-rule'],
          masterySignals: '4 correct applications of chain rule',
          estimatedQuestions: '6-7 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Applies d/dx[f(g(x))] = f\'(g(x))·g\'(x) correctly',
                'Identifies outer and inner functions',
                'Evaluates composite derivatives correctly'
              ],
              qualitative: [
                'Explains "derivative of outer times derivative of inner"',
                'Recognizes when chain rule is needed',
                'Shows clear substitution: u = g(x)'
              ]
            },
            developing: {
              quantitative: ['Struggles to identify inner/outer functions'],
              qualitative: [
                'Forgets to multiply by g\'(x)',
                'Needs prompting for function composition'
              ]
            },
            struggling: {
              quantitative: ['Cannot identify composite functions'],
              qualitative: [
                'Doesn\'t understand function composition',
                'Thinks d/dx[(x²+1)³] = 3(x²+1)² (forgets chain rule)'
              ]
            }
          },

          learningObjectives: [
            'Apply chain rule: d/dx[f(g(x))] = f\'(g(x))·g\'(x)',
            'Identify outer function f and inner function g',
            'Differentiate composite functions',
            'Use substitution u = g(x) to clarify',
            'Recognize when chain rule is needed'
          ],

          relevantFormulas: [
            'd/dx[f(g(x))] = f\'(g(x))·g\'(x)',
            'Example: d/dx[(x²+1)³] = 3(x²+1)²·(2x) = 6x(x²+1)²',
            'Example: d/dx[√(x²+1)] = 1/(2√(x²+1))·(2x) = x/√(x²+1)',
            'Mnemonic: "derivative of outside, keep inside, times derivative of inside"'
          ],

          availableTools: ['chain-rule-visualizer', 'derivative-grapher']
        },

        {
          id: 'combining-rules',
          title: 'Combining Differentiation Rules',
          difficulty: 'advanced',
          prerequisites: ['quotient-rule', 'chain-rule'],
          masterySignals: '3 correct complex derivatives using multiple rules',
          estimatedQuestions: '5-6 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Applies multiple rules in sequence',
                'Chooses appropriate rule for each part',
                'Simplifies complex final answers'
              ],
              qualitative: [
                'Explains rule selection strategy',
                'Shows all intermediate steps',
                'Verifies answer makes sense'
              ]
            },
            developing: {
              quantitative: ['Can apply individual rules but struggles with combinations'],
              qualitative: [
                'Needs prompting for which rule to use',
                'Makes errors in complex expressions'
              ]
            },
            struggling: {
              quantitative: ['Cannot handle multiple rules together'],
              qualitative: [
                'Doesn\'t know which rule to apply first',
                'Gets lost in complex expressions'
              ]
            }
          },

          learningObjectives: [
            'Combine power, product, quotient, and chain rules',
            'Choose appropriate rule for complex problems',
            'Apply rules in correct order',
            'Simplify final answers',
            'Verify results using alternative methods when possible'
          ],

          relevantFormulas: [
            'Example: d/dx[(x²+1)³/x] requires quotient rule AND chain rule',
            'Example: d/dx[x²√(x+1)] requires product rule AND chain rule',
            'Strategy: Work from outside in (quotient/product first, then chain)',
            'Always simplify final answer'
          ],

          availableTools: ['derivative-grapher', 'chain-rule-visualizer']
        }
      ]
    },

    learningObjectives: [
      'Master power rule for all exponents',
      'Apply product rule correctly',
      'Apply quotient rule without sign errors',
      'Master chain rule for composite functions',
      'Combine rules for complex problems'
    ],

    keyFormulas: `• Power: d/dx[xⁿ] = nxⁿ⁻¹
• Product: d/dx[uv] = u'v + uv'
• Quotient: d/dx[u/v] = (u'v - uv')/v²
• Chain: d/dx[f(g(x))] = f'(g(x))·g'(x)`
  },

  // ==========================================================================
  // F. TANGENT EQUATIONS
  // ==========================================================================
  'tangent-equations': {
    displayName: 'Finding the Equation of a Tangent',
    topicName: 'equations of tangents and normals',

    progressionStructure: {
      sections: [
        {
          id: 'tangent-point-slope',
          title: 'Tangent Equation Using Point-Slope Form',
          difficulty: 'intermediate',
          prerequisites: ['differentiation-rules'],
          masterySignals: '4 correct tangent equations',
          estimatedQuestions: '5-6 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Finds gradient using derivative',
                'Uses point-slope form: y - y₁ = m(x - x₁)',
                'Writes equation in required form (y = mx + c)'
              ],
              qualitative: [
                'Explains process clearly: find gradient, use point',
                'Verifies tangent passes through given point',
                'Simplifies final equation'
              ]
            },
            developing: {
              quantitative: ['Finds gradient but makes errors in equation'],
              qualitative: [
                'Struggles with point-slope form',
                'Needs prompting for algebraic rearrangement'
              ]
            },
            struggling: {
              quantitative: ['Cannot find gradient or set up equation'],
              qualitative: [
                'Doesn\'t understand connection between derivative and tangent',
                'Can\'t use point-slope form'
              ]
            }
          },

          learningObjectives: [
            'Find gradient at point using f\'(x)',
            'Use point-slope form: y - y₁ = m(x - x₁)',
            'Write tangent equation in form y = mx + c',
            'Verify tangent passes through correct point',
            'Apply to various functions'
          ],

          relevantFormulas: [
            'Gradient at x = a: m = f\'(a)',
            'Point on curve: (a, f(a))',
            'Point-slope form: y - f(a) = f\'(a)(x - a)',
            'Example: For f(x) = x², tangent at x = 2: m = 4, point (2, 4), equation: y = 4x - 4'
          ],

          availableTools: ['tangent-visualizer', 'function-graph']
        },

        {
          id: 'normal-lines',
          title: 'Normal Lines',
          difficulty: 'intermediate-to-advanced',
          prerequisites: ['tangent-point-slope'],
          masterySignals: '4 correct normal line equations',
          estimatedQuestions: '5-6 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Finds tangent gradient correctly',
                'Calculates normal gradient: m_normal = -1/m_tangent',
                'Writes normal equation using point-slope form'
              ],
              qualitative: [
                'Explains perpendicular relationship',
                'Verifies normal is perpendicular to tangent',
                'Recognizes when tangent is horizontal (normal is vertical)'
              ]
            },
            developing: {
              quantitative: ['Struggles with negative reciprocal'],
              qualitative: [
                'Confuses tangent and normal gradients',
                'Needs prompting for perpendicular gradient formula'
              ]
            },
            struggling: {
              quantitative: ['Cannot find normal gradient'],
              qualitative: [
                'Doesn\'t understand perpendicular relationship',
                'Can\'t apply negative reciprocal'
              ]
            }
          },

          learningObjectives: [
            'Understand normal is perpendicular to tangent',
            'Find normal gradient: m_normal = -1/m_tangent',
            'Write normal equation using point-slope form',
            'Handle special cases (horizontal tangent → vertical normal)',
            'Verify tangent and normal are perpendicular'
          ],

          relevantFormulas: [
            'Perpendicular gradients: m₁·m₂ = -1',
            'Normal gradient: m_normal = -1/f\'(a)',
            'Normal equation: y - f(a) = (-1/f\'(a))(x - a)',
            'Example: If tangent has m = 2, normal has m = -1/2',
            'Special case: Horizontal tangent (m = 0) → vertical normal (x = a)'
          ],

          availableTools: ['tangent-visualizer', 'normal-line-grapher']
        },

        {
          id: 'curve-sketching',
          title: 'Applications to Curve Sketching',
          difficulty: 'advanced',
          prerequisites: ['normal-lines'],
          masterySignals: '3 correct applications combining tangents with curve analysis',
          estimatedQuestions: '4-5 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Finds tangent equations at multiple points',
                'Identifies where tangent is horizontal (f\' = 0)',
                'Uses tangent information to sketch curve'
              ],
              qualitative: [
                'Explains how derivative relates to curve shape',
                'Recognizes horizontal tangents at turning points',
                'Combines multiple tools for curve analysis'
              ]
            },
            developing: {
              quantitative: ['Can find individual tangents but struggles with synthesis'],
              qualitative: [
                'Needs prompting to connect tangents to curve behavior',
                'Doesn\'t recognize significance of horizontal tangents'
              ]
            },
            struggling: {
              quantitative: ['Cannot connect tangents to curve sketching'],
              qualitative: [
                'Doesn\'t understand how derivative describes curve',
                'Can\'t identify turning points from f\' = 0'
              ]
            }
          },

          learningObjectives: [
            'Use tangent information for curve sketching',
            'Find points where tangent is horizontal (f\' = 0)',
            'Identify turning points using derivatives',
            'Sketch curves using tangent and derivative information',
            'Apply to real-world problems'
          ],

          relevantFormulas: [
            'Horizontal tangent: f\'(x) = 0',
            'Turning points occur where f\'(x) = 0',
            'f\'(x) > 0 → curve increasing → tangent slopes upward',
            'f\'(x) < 0 → curve decreasing → tangent slopes downward',
            'Combine with f\'(x) analysis for complete curve sketch'
          ],

          availableTools: ['tangent-visualizer', 'derivative-grapher', 'function-graph']
        }
      ]
    },

    learningObjectives: [
      'Find equation of tangent at any point',
      'Calculate normal line equations',
      'Apply to curve sketching',
      'Use in real-world problems'
    ],

    keyFormulas: `• Tangent: y - f(a) = f'(a)(x - a)
• Normal: y - f(a) = (-1/f'(a))(x - a)
• Perpendicular gradients: m₁·m₂ = -1
• Horizontal tangent when f'(x) = 0`
  },

  // ==========================================================================
  // G. STATIONARY POINTS
  // ==========================================================================
  'stationary-points': {
    displayName: 'Stationary Points',
    topicName: 'stationary points and optimization',

    progressionStructure: {
      sections: [
        {
          id: 'finding-stationary-points',
          title: 'Finding Stationary Points',
          difficulty: 'intermediate-to-advanced',
          prerequisites: ['tangent-equations'],
          masterySignals: '4 correct identifications of stationary points',
          estimatedQuestions: '5-6 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Solves f\'(x) = 0 correctly',
                'Finds all stationary points',
                'Calculates coordinates (x, f(x)) accurately'
              ],
              qualitative: [
                'Explains why f\'(x) = 0 at stationary points',
                'Recognizes horizontal tangent at these points',
                'Verifies all solutions found'
              ]
            },
            developing: {
              quantitative: ['Finds some but not all stationary points'],
              qualitative: [
                'Makes algebraic errors solving f\'(x) = 0',
                'Needs prompting to find y-coordinates'
              ]
            },
            struggling: {
              quantitative: ['Cannot solve f\'(x) = 0'],
              qualitative: [
                'Doesn\'t understand what stationary point means',
                'Can\'t differentiate or solve equations'
              ]
            }
          },

          learningObjectives: [
            'Understand stationary point: where f\'(x) = 0',
            'Solve f\'(x) = 0 to find x-coordinates',
            'Calculate y-coordinates using f(x)',
            'Find all stationary points of a function',
            'Recognize horizontal tangent at stationary points'
          ],

          relevantFormulas: [
            'Stationary point: where f\'(x) = 0',
            'Process: 1) Find f\'(x), 2) Solve f\'(x) = 0, 3) Find f(x) at those x-values',
            'Example: f(x) = x³ - 3x → f\'(x) = 3x² - 3 = 0 → x = ±1 → Points: (-1, 2) and (1, -2)',
            'Coordinates: (a, f(a)) where f\'(a) = 0'
          ],

          availableTools: ['stationary-points-visualizer', 'derivative-grapher']
        },

        {
          id: 'nature-stationary-points',
          title: 'Nature of Stationary Points',
          difficulty: 'advanced',
          prerequisites: ['finding-stationary-points'],
          masterySignals: '4 correct classifications using first derivative test',
          estimatedQuestions: '5-6 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Correctly classifies max, min, or inflection',
                'Uses sign of f\'(x) before and after point',
                'Tests multiple points accurately'
              ],
              qualitative: [
                'Explains first derivative test clearly',
                'Recognizes sign patterns: -→0→+ is minimum',
                'Understands what each type means for curve shape'
              ]
            },
            developing: {
              quantitative: ['Struggles to determine sign of f\'(x)'],
              qualitative: [
                'Confuses which pattern is max vs min',
                'Needs prompting for test point selection'
              ]
            },
            struggling: {
              quantitative: ['Cannot classify stationary points'],
              qualitative: [
                'Doesn\'t understand first derivative test',
                'Can\'t determine sign of f\'(x) around point'
              ]
            }
          },

          learningObjectives: [
            'Use first derivative test to classify stationary points',
            'Recognize maximum: f\' changes from + to - (gradient: +→0→-)',
            'Recognize minimum: f\' changes from - to + (gradient: -→0→+)',
            'Recognize inflection: f\' same sign both sides',
            'Test points before and after stationary point'
          ],

          relevantFormulas: [
            'First Derivative Test:',
            '• Maximum: f\'(x) changes from + to 0 to - (curve: rising → peak → falling)',
            '• Minimum: f\'(x) changes from - to 0 to + (curve: falling → valley → rising)',
            '• Inflection: f\'(x) does not change sign (curve continues same direction)',
            'Test values: choose x slightly less and slightly more than stationary point'
          ],

          availableTools: ['stationary-points-visualizer', 'derivative-grapher']
        },

        {
          id: 'second-derivative-test',
          title: 'Second Derivative Test',
          difficulty: 'advanced',
          prerequisites: ['nature-stationary-points'],
          masterySignals: '4 correct classifications using second derivative',
          estimatedQuestions: '5-6 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Calculates f\'\'(x) correctly',
                'Evaluates f\'\'(a) at stationary point',
                'Correctly interprets sign of f\'\'(a)'
              ],
              qualitative: [
                'Explains concavity concept',
                'Recognizes f\'\' > 0 means concave up (minimum)',
                'Recognizes f\'\' < 0 means concave down (maximum)',
                'Knows when second derivative test fails (f\'\' = 0)'
              ]
            },
            developing: {
              quantitative: ['Makes errors calculating f\'\'(x)'],
              qualitative: [
                'Confuses which sign means max vs min',
                'Needs prompting when test is inconclusive'
              ]
            },
            struggling: {
              quantitative: ['Cannot find second derivative'],
              qualitative: [
                'Doesn\'t understand concavity',
                'Can\'t interpret f\'\'(x) sign'
              ]
            }
          },

          learningObjectives: [
            'Calculate second derivative f\'\'(x)',
            'Apply second derivative test at stationary point',
            'Recognize f\'\'(a) > 0 → minimum (concave up)',
            'Recognize f\'\'(a) < 0 → maximum (concave down)',
            'Understand when test fails (f\'\'(a) = 0) → use first derivative test',
            'Understand concavity concept'
          ],

          relevantFormulas: [
            'Second Derivative Test: If f\'(a) = 0, then:',
            '• f\'\'(a) > 0 → minimum (curve concave up, like ∪)',
            '• f\'\'(a) < 0 → maximum (curve concave down, like ∩)',
            '• f\'\'(a) = 0 → test inconclusive (use first derivative test)',
            'Concavity: f\'\' > 0 means curve bends upward, f\'\' < 0 means curve bends downward'
          ],

          availableTools: ['stationary-points-visualizer', 'derivative-grapher']
        },

        {
          id: 'optimization-problems',
          title: 'Optimization Problems',
          difficulty: 'advanced',
          prerequisites: ['second-derivative-test'],
          masterySignals: '3 correct optimization problems solved',
          estimatedQuestions: '5-6 questions',

          masteryRubric: {
            mastery: {
              quantitative: [
                'Formulates function to optimize',
                'Finds derivative and solves f\'(x) = 0',
                'Verifies maximum or minimum using tests',
                'Interprets result in context'
              ],
              qualitative: [
                'Translates word problem into mathematical function',
                'Identifies constraints and variables',
                'Explains why answer is maximum or minimum',
                'Verifies answer makes practical sense'
              ]
            },
            developing: {
              quantitative: ['Struggles to set up function from word problem'],
              qualitative: [
                'Can solve once function is given',
                'Needs prompting for problem formulation'
              ]
            },
            struggling: {
              quantitative: ['Cannot translate problem to mathematics'],
              qualitative: [
                'Doesn\'t understand what to optimize',
                'Can\'t identify variables and constraints'
              ]
            }
          },

          learningObjectives: [
            'Translate optimization problems into functions',
            'Identify quantity to maximize or minimize',
            'Express as function of one variable',
            'Find derivative and solve f\'(x) = 0',
            'Verify maximum/minimum using derivative tests',
            'Interpret results in real-world context',
            'Apply to area, volume, cost, profit problems'
          ],

          sampleProblems: [
            'Find dimensions of rectangle with perimeter 100m that maximizes area',
            'A box with square base and no top is made from 1200 cm² of cardboard. Find dimensions for maximum volume',
            'A farmer has 200m of fence. Find dimensions of rectangular enclosure (using barn wall as one side) that maximizes area'
          ],

          relevantFormulas: [
            'Process: 1) Define variables, 2) Write function to optimize, 3) Find f\'(x), 4) Solve f\'(x) = 0, 5) Verify max/min, 6) Interpret',
            'Common: Use constraints to express function in terms of one variable',
            'Example: Rectangle with P = 2l + 2w = 100 → w = 50 - l → A(l) = l(50-l) → maximize',
            'Always verify: endpoints, practical constraints, answer makes sense'
          ],

          availableTools: ['optimization-grapher', 'function-graph', 'stationary-points-visualizer']
        }
      ]
    },

    learningObjectives: [
      'Locate all stationary points (f\'(x) = 0)',
      'Classify using first and second derivative tests',
      'Solve max/min application problems',
      'Sketch curves using derivative information'
    ],

    keyFormulas: `• Stationary point: f'(x) = 0
• First derivative test: check sign of f'(x) before and after
  - Maximum: + to 0 to -
  - Minimum: - to 0 to +
• Second derivative test: f''(a) > 0 → min, f''(a) < 0 → max
• Optimization: formulate function, find f'(x) = 0, verify max/min`
  }
};

// Export for backward compatibility
export const S4_DIFFERENTIAL_CALCULUS_CONFIG = {
  TUTOR_ROLE: DIFFERENTIAL_CALCULUS_TUTOR_CUSTOMIZATION.teachingPhilosophy,
  QUESTION_AGENT_ROLE: null, // Uses base from prompt-library
  SOLUTION_AGENT_ROLE: null, // Uses base from prompt-library
  MATH_TOOLS_AVAILABLE: DIFFERENTIAL_CALCULUS_MATH_TOOLS
};
