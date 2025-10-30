/**
 * S4 Mathematics - Vectors Topic Configuration
 *
 * Comprehensive configuration for vectors covering fundamentals through dot products.
 * Includes geometric operations, component form, magnitude, parallelism, and scalar products.
 */

// Type exports
export type S4VectorsTopicId =
  | 's4-math-vectors-fundamentals'
  | 's4-math-vectors-component-form'
  | 's4-math-vectors-magnitude-ops'
  | 's4-math-vectors-parallelism'
  | 's4-math-vectors-dot-product';

// Topic-specific tutor customization
export const S4_VECTORS_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for S4 students learning Vectors.

Teaching Approach:
- Guide students to discover vector properties through questioning
- Emphasize both geometric (visual) and algebraic (component) representations
- Help students visualize vectors on coordinate grids
- Build from concrete examples to general principles
- Connect vectors to real-world applications (displacement, velocity, force)
- Encourage understanding of "why" formulas work, not just memorization

**Text-to-Speech Guidelines:**
- Spell out vector notation: "vector a" not "**a**" or "bold a"
- For i,j notation, say "three i plus four j" for 3i + 4j
- For column vectors, say "column vector with three and four"
- Say "magnitude of v" or "length of v" for |v|
- Say "a dot b" for a·b (dot product)
- Avoid special symbols in speech.text - spell everything out
- Keep speech.text plain and conversational (no markdown, no LaTeX)`,

  visualToolsGuidance: `Use visual tools strategically to enhance understanding:
- vectorDiagram: For geometric operations (addition, subtraction, scalar multiplication)
- componentForm: For showing i,j notation and column vectors
- dotProduct: For scalar product, angles, and perpendicularity
IMPORTANT: Use the technical name (e.g., "vectorDiagram") in the toolName field.`
};

// Available math tools for this topic
export const S4_VECTORS_MATH_TOOLS = [
  "vectorDiagram",
  "componentForm",
  "dotProduct"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S4_VECTORS_SUBTOPICS = {

  's4-math-vectors-fundamentals': {
    displayName: 'Vector Fundamentals & Geometric Operations',
    topicName: 'vectors, scalars, and geometric operations',

    progressionStructure: {
      sections: [
        {
          id: "scalars-vectors",
          title: "Scalars and Vectors",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies scalars vs vectors and recognizes equal/negative vectors in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct classifications without hints",
                "Consistently distinguishes magnitude-only (scalar) from magnitude+direction (vector)"
              ],
              qualitative: [
                "Understands scalars have magnitude only (mass, temperature, time)",
                "Recognizes vectors have both magnitude and direction (displacement, velocity, force)",
                "Identifies equal vectors (same magnitude and direction)",
                "Understands negative vectors (same magnitude, opposite direction)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints"],
              qualitative: [
                "Grasps basic concept but unsure with specific examples",
                "Needs prompting about direction requirement for vectors"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect identifications"],
              qualitative: [
                "Confuses scalars and vectors",
                "Does not understand direction component",
                "Cannot identify equal or negative vectors"
              ]
            }
          },
          learningObjectives: [
            "Define scalar as a quantity with magnitude only",
            "Define vector as a quantity with magnitude and direction",
            "Use vector notation: bold (v), arrow (v̄), or two points (AB̄)",
            "Recognize equal vectors have same magnitude and direction",
            "Understand -v has same magnitude as v but opposite direction"
          ],
          relevantFormulas: [
            "Scalar examples: 5 kg (mass), 20°C (temperature), 3 hours (time)",
            "Vector examples: 10 m east (displacement), 30 m/s north (velocity)",
            "Equal vectors: same magnitude AND same direction",
            "Negative vector: **-v** has opposite direction to **v**"
          ],
          availableTools: ["vectorDiagram"]
        },
        {
          id: "geometric-addition",
          title: "Geometric Vector Addition",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["scalars-vectors"],
          masterySignals: "Student adds vectors using triangle/parallelogram law in 3+ problems, finds resultant correctly",
          estimatedQuestions: "4-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct additions using triangle law",
                "Correctly calculates magnitude and direction of resultants"
              ],
              qualitative: [
                "Applies triangle law (nose-to-tail) correctly",
                "Understands parallelogram law for addition",
                "Recognizes vector addition is commutative: a + b = b + a",
                "Can add multiple vectors sequentially",
                "Uses Pythagoras and trig to find resultant magnitude/direction"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on method"],
              qualitative: [
                "Understands concept but needs guidance on setup",
                "Can apply triangle law with prompting",
                "Struggles with magnitude/direction calculations"
              ]
            },
            struggling: {
              quantitative: ["Incorrect vector arrangements", "Wrong resultant"],
              qualitative: [
                "Does not understand nose-to-tail method",
                "Cannot identify resultant direction",
                "Confuses addition with other operations"
              ]
            }
          },
          learningObjectives: [
            "Apply triangle law: place tail of b at head of a, resultant from tail of a to head of b",
            "Apply parallelogram law: vectors from same point, diagonal is resultant",
            "Understand a + b = b + a (commutative property)",
            "Calculate resultant magnitude using Pythagoras theorem",
            "Determine resultant direction using trigonometry"
          ],
          relevantFormulas: [
            "Triangle law: **a** + **b** = resultant from start of **a** to end of **b**",
            "Parallelogram law: **a** and **b** from same point, diagonal is **a** + **b**",
            "Magnitude: |**resultant**| = \\sqrt{a^2 + b^2} (for perpendicular vectors)",
            "Direction: \\tan\\theta = \\frac{opposite}{adjacent}"
          ],
          availableTools: ["vectorDiagram"]
        },
        {
          id: "geometric-subtraction",
          title: "Geometric Vector Subtraction",
          difficulty: "intermediate",
          prerequisites: ["geometric-addition"],
          masterySignals: "Student subtracts vectors correctly using a - b = a + (-b) in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct subtractions without hints",
                "Correctly finds -b and adds to a"
              ],
              qualitative: [
                "Understands a - b = a + (-b)",
                "Correctly reverses direction of b to get -b",
                "Applies triangle law to a + (-b)",
                "Recognizes subtraction is NOT commutative: a - b ≠ b - a"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on -b"],
              qualitative: [
                "Understands concept but needs prompting to find -b",
                "Can complete once negative vector is identified"
              ]
            },
            struggling: {
              quantitative: ["Incorrect direction of -b", "Wrong resultant"],
              qualitative: [
                "Does not understand how to form -b",
                "Confuses subtraction with addition",
                "Cannot apply triangle law correctly"
              ]
            }
          },
          learningObjectives: [
            "Apply subtraction rule: a - b = a + (-b)",
            "Find negative vector -b by reversing direction of b",
            "Use triangle law to add a and -b",
            "Calculate magnitude and direction of difference vector",
            "Understand applications to relative motion"
          ],
          relevantFormulas: [
            "Subtraction: **a** - **b** = **a** + (**-b**)",
            "Negative vector: **-b** has same magnitude as **b**, opposite direction",
            "NOT commutative: **a** - **b** ≠ **b** - **a**",
            "Relative velocity: **v**ₐ - **v**ᵦ gives velocity of A relative to B"
          ],
          availableTools: ["vectorDiagram"]
        },
        {
          id: "scalar-multiplication",
          title: "Geometric Scalar Multiplication",
          difficulty: "intermediate",
          prerequisites: ["scalars-vectors"],
          masterySignals: "Student multiplies vectors by scalars correctly in 3+ problems, understanding magnitude and direction changes",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct scalar multiplications",
                "Correctly determines magnitude and direction for positive/negative scalars"
              ],
              qualitative: [
                "Understands k**v** changes magnitude by factor |k|",
                "Recognizes positive k keeps same direction",
                "Recognizes negative k reverses direction",
                "Can simplify expressions like 2(**a** + **b**) - 3**a**",
                "Applies distributive property correctly"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on sign"],
              qualitative: [
                "Understands magnitude change but unsure about direction",
                "Needs prompting for negative scalars"
              ]
            },
            struggling: {
              quantitative: ["Wrong magnitude or direction"],
              qualitative: [
                "Does not understand effect of scalar on magnitude",
                "Confuses direction change with negative scalars",
                "Cannot simplify vector expressions"
              ]
            }
          },
          learningObjectives: [
            "Multiply vector by positive scalar: k**v** has same direction, magnitude k|**v**|",
            "Multiply vector by negative scalar: k**v** has opposite direction, magnitude |k||**v**|",
            "Understand zero vector: 0**v** = **0**",
            "Apply distributive property: k(**a** + **b**) = k**a** + k**b**",
            "Simplify vector expressions with scalar multiplication"
          ],
          relevantFormulas: [
            "k**v** where k > 0: same direction, magnitude = k|**v**|",
            "k**v** where k < 0: opposite direction, magnitude = |k||**v**|",
            "Distributive: k(**a** + **b**) = k**a** + k**b**",
            "(k + m)**a** = k**a** + m**a**",
            "0**v** = **0** (zero vector)"
          ],
          availableTools: ["vectorDiagram"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. Scalars and Vectors (foundational) - Distinguish scalars from vectors, identify equal/negative vectors",
      "2. Geometric Addition (foundational→intermediate) - Apply triangle/parallelogram law, find resultants",
      "3. Geometric Subtraction (intermediate) - Subtract vectors using a - b = a + (-b)",
      "4. Scalar Multiplication (intermediate) - Multiply vectors by scalars, simplify expressions"
    ],

    keyFormulas: `• Scalar: magnitude only (mass, temperature, time)
                  • Vector: magnitude + direction (displacement, velocity, force)
                  • Triangle law: nose-to-tail method
                  • Parallelogram law: vectors from same point, diagonal is resultant
                  • **a** - **b** = **a** + (**-b**)
                  • k**v**: multiply magnitude by |k|, reverse direction if k < 0`
  },

  's4-math-vectors-component-form': {
    displayName: 'Component Form & Algebraic Methods',
    topicName: 'component form, column vectors, and i,j notation',

    progressionStructure: {
      sections: [
        {
          id: "component-notation",
          title: "Vectors in Component Form",
          difficulty: "intermediate",
          prerequisites: ["scalar-multiplication"],
          masterySignals: "Student converts between geometric and component form, adds/subtracts in component form in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conversions between forms",
                "Consistently correct component arithmetic"
              ],
              qualitative: [
                "Writes vectors in column form: (x/y) or (x, y, z)",
                "Uses i,j notation correctly: xi + yj",
                "Understands unit vectors: **i** = (1,0), **j** = (0,1)",
                "Adds vectors component-wise: (a₁,a₂) + (b₁,b₂) = (a₁+b₁, a₂+b₂)",
                "Multiplies by scalar: k(x,y) = (kx,ky)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on notation"],
              qualitative: [
                "Understands concept but makes arithmetic errors",
                "Needs prompting for correct notation"
              ]
            },
            struggling: {
              quantitative: ["Wrong component calculations"],
              qualitative: [
                "Confuses column and i,j notation",
                "Cannot add vectors component-wise",
                "Makes sign errors with components"
              ]
            }
          },
          learningObjectives: [
            "Write vectors in column form: (x/y) for 2D, (x/y/z) for 3D",
            "Convert to i,j notation: **v** = xi + yj",
            "Recognize unit vectors: **i** = (1,0), **j** = (0,1), **k** = (0,0,1)",
            "Add vectors algebraically: add corresponding components",
            "Multiply by scalar: multiply each component by scalar"
          ],
          relevantFormulas: [
            "Column form: **v** = (x/y) or **v** = (x, y, z) for 3D",
            "i,j notation: **v** = xi + yj where **i** = (1,0), **j** = (0,1)",
            "Addition: (a₁/a₂) + (b₁/b₂) = ((a₁+b₁)/(a₂+b₂))",
            "Scalar multiplication: k(x/y) = (kx/ky)",
            "Example: 2(3/4) + (-1/2) = (6/8) + (-1/2) = (5/10)"
          ],
          availableTools: ["componentForm"]
        },
        {
          id: "position-vectors",
          title: "Position Vectors and Displacement",
          difficulty: "intermediate",
          prerequisites: ["component-notation"],
          masterySignals: "Student finds position vectors, displacement vectors, and midpoints using components in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct position/displacement vectors",
                "Correctly applies midpoint formula"
              ],
              qualitative: [
                "Understands position vector from origin to point",
                "Finds displacement: **AB** = **b** - **a** (final - initial)",
                "Applies midpoint formula: **m** = (**a** + **b**)/2",
                "Uses section formula to divide line segments",
                "Solves geometric problems using vectors"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on formulas"],
              qualitative: [
                "Understands position vectors but struggles with displacement",
                "Needs reminding of formula structure"
              ]
            },
            struggling: {
              quantitative: ["Wrong displacement direction", "Incorrect midpoint"],
              qualitative: [
                "Confuses position and displacement vectors",
                "Cannot apply formulas correctly",
                "Makes sign errors in subtraction"
              ]
            }
          },
          learningObjectives: [
            "Find position vector: **p** = (x/y) for point P(x,y)",
            "Calculate displacement: **AB** = **b** - **a** (from A to B)",
            "Apply midpoint formula: **m** = (**a** + **b**)/2",
            "Use section formula: point dividing AB in ratio m:n is (n**a** + m**b**)/(m+n)",
            "Solve geometric problems algebraically using vectors"
          ],
          relevantFormulas: [
            "Position vector of P(x,y): **p** = (x/y)",
            "Displacement from A to B: **AB** = **b** - **a**",
            "Midpoint M of AB: **m** = (**a** + **b**)/2",
            "Section formula: **p** = (n**a** + m**b**)/(m+n) divides AB in ratio m:n",
            "Distance AB: |**AB**| = |**b** - **a**|"
          ],
          availableTools: ["componentForm"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Component Notation (intermediate) - Column vectors, i,j notation, component operations",
      "2. Position Vectors (intermediate) - Position vectors, displacement, midpoint formula"
    ],

    keyFormulas: `• Column form: **v** = (x/y) or **v** = (x, y, z)
                  • i,j notation: **v** = xi + yj
                  • Unit vectors: **i** = (1,0), **j** = (0,1), **k** = (0,0,1)
                  • Addition: (a₁/a₂) + (b₁/b₂) = ((a₁+b₁)/(a₂+b₂))
                  • Displacement: **AB** = **b** - **a**
                  • Midpoint: **m** = (**a** + **b**)/2`
  },

  's4-math-vectors-magnitude-ops': {
    displayName: 'Magnitude & Complex Operations',
    topicName: 'magnitude, unit vectors, and vector equations',

    progressionStructure: {
      sections: [
        {
          id: "magnitude",
          title: "The Magnitude of a Vector",
          difficulty: "intermediate",
          prerequisites: ["component-notation"],
          masterySignals: "Student calculates magnitude using Pythagoras, finds unit vectors in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct magnitude calculations",
                "Consistently finds unit vectors correctly"
              ],
              qualitative: [
                "Applies Pythagoras: |**v**| = √(x² + y²)",
                "Calculates 3D magnitude: |**v**| = √(x² + y² + z²)",
                "Understands unit vector has magnitude 1",
                "Finds unit vector: **û** = **v**/|**v**|",
                "Calculates distance between points: |**b** - **a**|"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on Pythagoras"],
              qualitative: [
                "Understands concept but makes calculation errors",
                "Needs reminding of square root step"
              ]
            },
            struggling: {
              quantitative: ["Wrong magnitude formula", "Incorrect unit vector"],
              qualitative: [
                "Does not apply Pythagoras correctly",
                "Confuses magnitude with components",
                "Cannot find unit vector"
              ]
            }
          },
          learningObjectives: [
            "Calculate magnitude in 2D: |**v**| = √(x² + y²)",
            "Calculate magnitude in 3D: |**v**| = √(x² + y² + z²)",
            "Understand unit vector has magnitude 1",
            "Find unit vector in direction of **v**: **û** = **v**/|**v**|",
            "Calculate distance between points using magnitude"
          ],
          relevantFormulas: [
            "2D magnitude: |**v**| = \\sqrt{x^2 + y^2} for **v** = (x/y)",
            "3D magnitude: |**v**| = \\sqrt{x^2 + y^2 + z^2}",
            "Unit vector: **û** = **v**/|**v**| (magnitude 1, same direction)",
            "Distance AB: |**AB**| = |**b** - **a**| = \\sqrt{(b_1-a_1)^2 + (b_2-a_2)^2}",
            "Example: |(3/4)| = √(9 + 16) = √25 = 5"
          ],
          availableTools: ["componentForm"]
        },
        {
          id: "vector-operations",
          title: "Complex Vector Operations",
          difficulty: "advanced",
          prerequisites: ["magnitude", "position-vectors"],
          masterySignals: "Student solves vector equations and simplifies complex expressions in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ complex expressions simplified correctly",
                "Consistently solves vector equations"
              ],
              qualitative: [
                "Simplifies expressions with multiple operations",
                "Solves for unknown vectors: 2**x** + **a** = 3**b**",
                "Expresses vectors in terms of others",
                "Applies associative and distributive properties",
                "Handles combined operations confidently"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with step-by-step guidance"],
              qualitative: [
                "Can solve simple equations but struggles with complex ones",
                "Needs prompting on which property to apply"
              ]
            },
            struggling: {
              quantitative: ["Cannot solve equations", "Makes algebraic errors"],
              qualitative: [
                "Does not understand vector algebra",
                "Cannot isolate unknown vectors",
                "Confuses scalar and vector operations"
              ]
            }
          },
          learningObjectives: [
            "Simplify complex vector expressions using distributive property",
            "Solve vector equations for unknown vectors",
            "Express vectors as linear combinations of others",
            "Apply associative property: (**a** + **b**) + **c** = **a** + (**b** + **c**)",
            "Combine multiple operations: addition, subtraction, scalar multiplication"
          ],
          relevantFormulas: [
            "Distributive: k(**a** + **b**) = k**a** + k**b**",
            "Associative: (**a** + **b**) + **c** = **a** + (**b** + **c**)",
            "(k + m)**a** = k**a** + m**a**",
            "Solving: 2**x** + **a** = 3**b** → 2**x** = 3**b** - **a** → **x** = (3**b** - **a**)/2",
            "Simplify: 2(**a** + **b**) - 3**a** + **b** = -**a** + 3**b**"
          ],
          availableTools: ["componentForm"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Magnitude (intermediate) - Calculate magnitude using Pythagoras, find unit vectors",
      "2. Vector Operations (advanced) - Solve equations, simplify complex expressions"
    ],

    keyFormulas: `• |**v**| = √(x² + y²) for 2D, √(x² + y² + z²) for 3D
                  • Unit vector: **û** = **v**/|**v**|
                  • Distance: |**AB**| = |**b** - **a**|
                  • Distributive: k(**a** + **b**) = k**a** + k**b**
                  • Associative: (**a** + **b**) + **c** = **a** + (**b** + **c**)`
  },

  's4-math-vectors-parallelism': {
    displayName: 'Parallelism & Geometric Applications',
    topicName: 'parallel vectors and geometric proofs',

    progressionStructure: {
      sections: [
        {
          id: "parallel-vectors",
          title: "Parallelism",
          difficulty: "advanced",
          prerequisites: ["scalar-multiplication", "component-notation"],
          masterySignals: "Student tests parallelism using **a** = k**b** condition in 3+ problems, proves geometric properties",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct parallelism tests",
                "Finds scalar k accurately"
              ],
              qualitative: [
                "Understands **a** ∥ **b** ⟺ **a** = k**b** for some scalar k",
                "Recognizes k > 0 means same direction, k < 0 means opposite",
                "Tests parallelism using component form: a₁/b₁ = a₂/b₂",
                "Proves lines parallel using direction vectors",
                "Applies to geometric proofs (parallel sides, similar triangles)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on method"],
              qualitative: [
                "Understands concept but struggles with application",
                "Needs prompting to set up ratio equation"
              ]
            },
            struggling: {
              quantitative: ["Cannot test parallelism", "Wrong scalar value"],
              qualitative: [
                "Does not understand parallel condition",
                "Cannot set up component ratios",
                "Confuses parallelism with other properties"
              ]
            }
          },
          learningObjectives: [
            "Understand parallel vectors: **a** ∥ **b** ⟺ **a** = k**b** (k ≠ 0)",
            "Test parallelism using components: a₁/b₁ = a₂/b₂ = k",
            "Find scalar k such that vectors are parallel",
            "Recognize k > 0: same direction, k < 0: opposite direction",
            "Prove geometric properties using vector parallelism"
          ],
          relevantFormulas: [
            "Parallel condition: **a** ∥ **b** ⟺ **a** = k**b** (k ≠ 0)",
            "Component test: (a₁/a₂) ∥ (b₁/b₂) ⟺ a₁/b₁ = a₂/b₂",
            "Same direction: k > 0",
            "Opposite direction: k < 0",
            "Example: (6/9) ∥ (4/6) because 6/4 = 9/6 = 3/2"
          ],
          availableTools: ["vectorDiagram", "componentForm"]
        }
      ]
    },

    learningObjectives: [
      "Students will complete 1 section:",
      "1. Parallelism (advanced) - Test parallelism using scalar multiple condition, geometric proofs"
    ],

    keyFormulas: `• **a** ∥ **b** ⟺ **a** = k**b** for some scalar k ≠ 0
                  • Component test: a₁/b₁ = a₂/b₂ = k
                  • k > 0: same direction
                  • k < 0: opposite direction`
  },

  's4-math-vectors-dot-product': {
    displayName: 'Dot Product & Angles',
    topicName: 'scalar product, perpendicularity, and angles between vectors',

    progressionStructure: {
      sections: [
        {
          id: "dot-product",
          title: "The Scalar (Dot) Product",
          difficulty: "advanced",
          prerequisites: ["component-notation", "magnitude"],
          masterySignals: "Student calculates dot product, tests perpendicularity in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct dot product calculations",
                "Consistently identifies perpendicular vectors"
              ],
              qualitative: [
                "Calculates **a** · **b** = a₁b₁ + a₂b₂ (or + a₃b₃ for 3D)",
                "Applies dot product properties (commutative, distributive)",
                "Uses **a** · **a** = |**a**|²",
                "Tests perpendicularity: **a** ⊥ **b** ⟺ **a** · **b** = 0",
                "Understands geometric interpretation: **a** · **b** = |**a**||**b**|cos θ"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on formula"],
              qualitative: [
                "Can calculate dot product but struggles with properties",
                "Needs reminding of perpendicular condition"
              ]
            },
            struggling: {
              quantitative: ["Wrong dot product calculation", "Cannot test perpendicularity"],
              qualitative: [
                "Confuses dot product with magnitude",
                "Does not understand component multiplication",
                "Cannot apply perpendicularity test"
              ]
            }
          },
          learningObjectives: [
            "Calculate dot product: **a** · **b** = a₁b₁ + a₂b₂ (2D) or a₁b₁ + a₂b₂ + a₃b₃ (3D)",
            "Apply commutative property: **a** · **b** = **b** · **a**",
            "Apply distributive property: **a** · (**b** + **c**) = **a** · **b** + **a** · **c**",
            "Use **a** · **a** = |**a**|² to find magnitude",
            "Test perpendicularity: **a** ⊥ **b** ⟺ **a** · **b** = 0"
          ],
          relevantFormulas: [
            "Dot product (2D): **a** · **b** = a_1b_1 + a_2b_2",
            "Dot product (3D): **a** · **b** = a_1b_1 + a_2b_2 + a_3b_3",
            "Commutative: **a** · **b** = **b** · **a**",
            "**a** · **a** = |**a**|^2",
            "Perpendicular test: **a** ⊥ **b** ⟺ **a** · **b** = 0",
            "Example: (3/2) · (1/4) = 3(1) + 2(4) = 11"
          ],
          availableTools: ["dotProduct", "componentForm"]
        },
        {
          id: "angle-between-vectors",
          title: "The Angle Between Two Vectors",
          difficulty: "advanced",
          prerequisites: ["dot-product"],
          masterySignals: "Student calculates angle between vectors using dot product formula in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct angle calculations",
                "Accurately applies inverse cosine"
              ],
              qualitative: [
                "Uses formula: cos θ = (**a** · **b**)/(|**a**||**b**|)",
                "Calculates θ = arccos[(**a** · **b**)/(|**a**||**b**|)]",
                "Understands 0° ≤ θ ≤ 180°",
                "Recognizes acute angle: **a** · **b** > 0",
                "Recognizes obtuse angle: **a** · **b** < 0",
                "Applies to geometric problems"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with step-by-step guidance"],
              qualitative: [
                "Can apply formula but makes calculation errors",
                "Needs reminding to find magnitudes first"
              ]
            },
            struggling: {
              quantitative: ["Wrong formula application", "Incorrect angle"],
              qualitative: [
                "Confuses angle formula with other formulas",
                "Cannot calculate cos θ correctly",
                "Does not understand inverse cosine"
              ]
            }
          },
          learningObjectives: [
            "Calculate angle using: cos θ = (**a** · **b**)/(|**a**||**b**|)",
            "Find θ = arccos[(**a** · **b**)/(|**a**||**b**|)]",
            "Understand angle range: 0° ≤ θ ≤ 180°",
            "Recognize θ = 90° when **a** · **b** = 0 (perpendicular)",
            "Determine acute (0° < θ < 90°) vs obtuse (90° < θ < 180°) angles"
          ],
          relevantFormulas: [
            "\\cos\\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|}",
            "\\theta = \\arccos\\left[\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|}\\right]",
            "0° ≤ θ ≤ 180°",
            "Acute: **a** · **b** > 0 (0° < θ < 90°)",
            "Obtuse: **a** · **b** < 0 (90° < θ < 180°)",
            "Right angle: **a** · **b** = 0 (θ = 90°)"
          ],
          availableTools: ["dotProduct"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Dot Product (advanced) - Calculate scalar product, test perpendicularity, apply properties",
      "2. Angle Between Vectors (advanced) - Find angle using dot product formula, classify angles"
    ],

    keyFormulas: `• **a** · **b** = a₁b₁ + a₂b₂ (+ a₃b₃ for 3D)
                  • **a** · **b** = |**a**||**b**|cos θ
                  • Perpendicular: **a** · **b** = 0
                  • cos θ = (**a** · **b**)/(|**a**||**b**|)
                  • θ = arccos[(**a** · **b**)/(|**a**||**b**|)]
                  • Acute: **a** · **b** > 0, Obtuse: **a** · **b** < 0`
  }
};

// Global configuration
export const S4_VECTORS_CONFIG = {
  mathTools: S4_VECTORS_MATH_TOOLS,
  tutorCustomization: S4_VECTORS_TUTOR_CUSTOMIZATION
};
