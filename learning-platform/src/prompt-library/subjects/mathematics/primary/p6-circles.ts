/**
 * P6 Mathematics - Circles Topic Configuration
 *
 * Comprehensive configuration for teaching Circles:
 * 1. Parts of a Circle
 * 2. Circumference of a Circle
 * 3. Perimeter of Semicircle & Quarter Circle
 * 4. Area of a Circle
 * 5. Area of Semicircle & Quarter Circle
 * 6. Composite Figures (Perimeter & Area)
 *
 * Target audience: Primary 6 students (11-12 years old)
 * Based on Singapore Math curriculum
 */

// Type exports
export type P6CirclesTopicId =
  | 'p6-math-circles-parts'
  | 'p6-math-circles-circumference'
  | 'p6-math-circles-perimeter-semi-quarter'
  | 'p6-math-circles-area'
  | 'p6-math-circles-area-semi-quarter'
  | 'p6-math-circles-composite';

// Topic-specific tutor customization
export const P6_CIRCLES_CONFIG = {
  teachingPhilosophy: `You are a friendly and encouraging mathematics tutor for Primary 6 students learning about Circles.

Teaching Approach:
- Use simple, age-appropriate language suitable for 11-12 year olds
- Use real-world contexts: wheels, clocks, pizza, plates, coins, circular tracks
- Build from parts of a circle to circumference, then area, then composite figures
- Emphasize the constant relationship between circumference and diameter (pi)
- Use visual tools extensively to show circle parts and shaded regions
- Help students understand when to use π = 3.14 vs π = 22/7
- For composite figures, teach the "decomposition" strategy: break into simpler shapes
- Celebrate when students make connections between concepts

Key Concepts to Reinforce:
- Centre (O): the point equidistant from all points on the circle
- Radius (r): line from centre to any point on circle
- Diameter (d): line through centre with endpoints on circle; d = 2r
- Pi (π): the ratio of circumference to diameter; approximately 3.14 or 22/7
- Circumference: distance around the circle; C = πd = 2πr
- Area: space inside the circle; A = πr²
- Semicircle: half a circle; Quarter circle: one-fourth of a circle
- Composite figures: combine addition and subtraction of areas/perimeters

**Text-to-Speech Guidelines:**
- Say "pi" not "pie" or the symbol
- For π = 22/7, say "pi equals twenty-two over seven"
- Say "radius" and "diameter" clearly
- Say "squared" for r² (e.g., "pi times r squared")
- For cm², say "square centimetres"
- Keep speech.text plain and conversational (no markdown, no LaTeX)`,

  visualToolsGuidance: `Use the circle visualization tools extensively.
IMPORTANT: Use the technical name in the toolName field.

Available tools for this topic:
- p6Circle: PRIMARY TOOL - Unified circle visualizer for full circle, semicircle, quarter circle, and 3/4 circle.
  Parameters:
  * mode: 'full' | 'semicircle' | 'quarter' | 'three-quarter'
  * orientation: varies by mode (e.g., 'top', 'bottom', 'left', 'right' for semicircle)
  * givenValue: the measurement value (e.g., "7", "14")
  * givenType: 'radius' | 'diameter'
  * unit: 'cm', 'm', etc.
  * showCentre, showRadiusLine, showDiameterLine, showShading, highlightArc

- circleBasic: For showing multiple radii, diameter vs radius comparison
- semicircle: Alternative for semicircle problems (has its own orientation options)

Tool usage guidelines:
- IMPORTANT: The p6Circle tool is for visualization ONLY - it does NOT show answers or calculations
- Use showRadiusLine when radius is given; showDiameterLine when diameter is given
- Use showShading for area problems to highlight the region
- Use highlightArc for perimeter problems to emphasize the curved edge
- For composite figures, use pregenerated SVG images (no mathTool)
- Always include helpful caption describing the figure
- Do NOT include answer or formula in the tool - that goes in the solution`
};

// Available math tools for this topic
export const P6_CIRCLES_MATH_TOOLS = [
  "p6Circle",
  "circleBasic",
  "semicircle"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const P6_CIRCLES_SUBTOPICS = {

  'p6-math-circles-parts': {
    displayName: 'Parts of a Circle',
    topicName: 'parts of a circle',

    progressionStructure: {
      sections: [
        {
          id: "centre-radius-diameter",
          title: "Centre, Radius, and Diameter",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies and names centre, radius, and diameter in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications",
                "Names parts correctly with proper labels"
              ],
              qualitative: [
                "Identifies centre (O) as the point equidistant from all points on circle",
                "Identifies radius as line from centre to circumference",
                "Identifies diameter as line through centre with both ends on circle",
                "Understands all radii of a circle are equal"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Sometimes confuses radius and diameter"
              ],
              qualitative: [
                "Can identify centre but struggles with radius/diameter distinction",
                "Knows definitions but cannot apply consistently",
                "Needs visual prompts to identify parts"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot identify basic parts"
              ],
              qualitative: [
                "Does not understand what centre, radius, or diameter means",
                "Confuses parts of a circle with each other",
                "Cannot label a circle diagram correctly"
              ]
            }
          },
          learningObjectives: [
            "Identify the centre of a circle",
            "Identify and name the radius (plural: radii)",
            "Identify and name the diameter",
            "Understand that all radii of a circle are equal"
          ],
          relevantFormulas: [],
          availableTools: ["p6Circle", "circleBasic"]
        },
        {
          id: "diameter-radius-relationship",
          title: "Relationship: Diameter = 2 × Radius",
          difficulty: "foundational",
          prerequisites: ["centre-radius-diameter"],
          masterySignals: "Student correctly converts between radius and diameter in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conversions",
                "Works with whole numbers and decimals"
              ],
              qualitative: [
                "Uses d = 2r to find diameter from radius",
                "Uses r = d ÷ 2 to find radius from diameter",
                "Can work with decimals (e.g., r = 7.5 m)",
                "Shows clear working"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Errors with decimal values"
              ],
              qualitative: [
                "Knows formula but makes calculation errors",
                "Forgets to divide by 2 when finding radius",
                "Needs reminding of the relationship"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot convert between radius and diameter"
              ],
              qualitative: [
                "Does not understand the relationship between radius and diameter",
                "Cannot apply the formula d = 2r",
                "Confuses when to multiply vs divide"
              ]
            }
          },
          learningObjectives: [
            "Understand that diameter = 2 × radius",
            "Calculate diameter when given radius",
            "Calculate radius when given diameter",
            "Apply the relationship with decimal values"
          ],
          relevantFormulas: [
            "Diameter = 2 × Radius  (d = 2r)",
            "Radius = Diameter ÷ 2  (r = d ÷ 2)"
          ],
          availableTools: ["p6Circle"]
        }
      ]
    },

    topicOverview: `In this section, you'll learn about the basic parts of a circle:
- **Centre (O)**: The point in the middle, equidistant from all points on the circle
- **Radius (r)**: A line from the centre to any point on the circle
- **Diameter (d)**: A line through the centre with both endpoints on the circle

Key relationship: **Diameter = 2 × Radius**`,

    problemDescriptors: [
      "Identify and name the centre, radius, and diameter of circles",
      "Convert between radius and diameter values",
      "Work with whole numbers and decimal measurements"
    ]
  },

  'p6-math-circles-circumference': {
    displayName: 'Circumference of a Circle',
    topicName: 'circumference of a circle',

    progressionStructure: {
      sections: [
        {
          id: "understanding-pi",
          title: "Understanding Pi (π)",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student understands that π is the ratio of circumference to diameter and knows its approximate values",
          estimatedQuestions: "2-3 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "Correctly states π ≈ 3.14 or 22/7",
                "Understands π = C ÷ d"
              ],
              qualitative: [
                "Understands π is the ratio of circumference to diameter",
                "Knows π ≈ 3.14 (decimal) and 22/7 (fraction)",
                "Understands this ratio is the same for ALL circles"
              ]
            },
            developing: {
              quantitative: [
                "Knows π values but not their meaning"
              ],
              qualitative: [
                "Can state π ≈ 3.14 but doesn't understand what π represents",
                "Confuses when to use 3.14 vs 22/7"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot recall π values",
                "Does not understand π as a ratio"
              ],
              qualitative: [
                "Does not understand what π represents",
                "Cannot recall the approximate values of π"
              ]
            }
          },
          learningObjectives: [
            "Understand that π is the ratio of circumference to diameter",
            "Know that π ≈ 3.14 (decimal form)",
            "Know that π ≈ 22/7 (fraction form)",
            "Understand π is the same for all circles"
          ],
          relevantFormulas: [
            "π = Circumference ÷ Diameter",
            "π ≈ 3.14 (decimal)",
            "π ≈ 22/7 (fraction)"
          ],
          availableTools: ["p6Circle"]
        },
        {
          id: "circumference-diameter",
          title: "Circumference from Diameter (C = πd)",
          difficulty: "foundational",
          prerequisites: ["understanding-pi"],
          masterySignals: "Student correctly calculates circumference using C = πd in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations",
                "Uses both π = 3.14 and π = 22/7 appropriately"
              ],
              qualitative: [
                "Applies C = π × d correctly",
                "Chooses appropriate π value based on problem instruction",
                "Shows clear working with correct units"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Makes calculation errors with fractions"
              ],
              qualitative: [
                "Knows formula but makes arithmetic errors",
                "Struggles with 22/7 calculations",
                "Forgets to include units"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot apply C = πd"
              ],
              qualitative: [
                "Does not know the circumference formula",
                "Cannot multiply by π correctly",
                "Confuses circumference with area"
              ]
            }
          },
          learningObjectives: [
            "Calculate circumference using C = π × d",
            "Apply the formula with π = 3.14",
            "Apply the formula with π = 22/7",
            "Include correct units in answers"
          ],
          relevantFormulas: [
            "Circumference = π × Diameter",
            "C = πd"
          ],
          availableTools: ["p6Circle"]
        },
        {
          id: "circumference-radius",
          title: "Circumference from Radius (C = 2πr)",
          difficulty: "intermediate",
          prerequisites: ["circumference-diameter"],
          masterySignals: "Student correctly calculates circumference using C = 2πr in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations",
                "Can use either method (find d first, or use 2πr directly)"
              ],
              qualitative: [
                "Applies C = 2 × π × r correctly",
                "Understands this is equivalent to finding d first",
                "Shows clear step-by-step working"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Forgets to multiply by 2"
              ],
              qualitative: [
                "Sometimes forgets the '2' in the formula",
                "Makes calculation errors",
                "Prefers finding d first but doesn't always do it correctly"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot apply C = 2πr"
              ],
              qualitative: [
                "Does not know how to use radius to find circumference",
                "Confuses with C = πd formula",
                "Cannot relate radius to diameter"
              ]
            }
          },
          learningObjectives: [
            "Calculate circumference using C = 2 × π × r",
            "Understand C = 2πr is equivalent to C = πd (since d = 2r)",
            "Choose the appropriate method based on given information"
          ],
          relevantFormulas: [
            "Circumference = 2 × π × Radius",
            "C = 2πr",
            "Since d = 2r, C = πd = π(2r) = 2πr"
          ],
          availableTools: ["p6Circle"]
        }
      ]
    },

    topicOverview: `The **circumference** is the distance around a circle (like perimeter).

Key formulas:
- **C = π × d** (when diameter is given)
- **C = 2 × π × r** (when radius is given)

Pi (π) ≈ 3.14 or 22/7`,

    problemDescriptors: [
      "Calculate circumference given diameter",
      "Calculate circumference given radius",
      "Use both π = 3.14 and π = 22/7",
      "Apply to real-world contexts (wheels, tracks, etc.)"
    ]
  },

  'p6-math-circles-perimeter-semi-quarter': {
    displayName: 'Perimeter of Semicircle & Quarter Circle',
    topicName: 'perimeter of semicircle and quarter circle',

    progressionStructure: {
      sections: [
        {
          id: "perimeter-semicircle",
          title: "Perimeter of a Semicircle",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly calculates perimeter of semicircle in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations",
                "Handles both radius and diameter given scenarios"
              ],
              qualitative: [
                "Identifies perimeter = arc + diameter (or arc + 2r)",
                "Calculates arc as half the circumference",
                "Shows clear working with all components"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Forgets to add the straight edge"
              ],
              qualitative: [
                "Calculates arc but forgets the diameter",
                "Confuses perimeter with area",
                "Makes errors calculating half circumference"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot identify components of perimeter"
              ],
              qualitative: [
                "Does not understand semicircle perimeter components",
                "Cannot calculate arc length",
                "Confuses with full circle circumference"
              ]
            }
          },
          learningObjectives: [
            "Understand semicircle perimeter = arc + diameter",
            "Calculate arc length as half circumference",
            "Calculate perimeter with radius or diameter given"
          ],
          relevantFormulas: [
            "Perimeter of semicircle = Arc + Diameter",
            "Arc = (1/2) × π × d = πr",
            "Perimeter = πr + 2r (when radius given)",
            "Perimeter = (1/2)πd + d (when diameter given)"
          ],
          availableTools: ["p6Circle"]
        },
        {
          id: "perimeter-quarter-circle",
          title: "Perimeter of a Quarter Circle",
          difficulty: "intermediate",
          prerequisites: ["perimeter-semicircle"],
          masterySignals: "Student correctly calculates perimeter of quarter circle in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations",
                "Handles various orientations"
              ],
              qualitative: [
                "Identifies perimeter = arc + radius + radius",
                "Calculates arc as quarter of circumference",
                "Shows clear working"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Forgets to add both radii"
              ],
              qualitative: [
                "Calculates arc but forgets one or both radii",
                "Makes errors calculating quarter circumference"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot identify components"
              ],
              qualitative: [
                "Does not understand quarter circle perimeter",
                "Confuses with semicircle formula"
              ]
            }
          },
          learningObjectives: [
            "Understand quarter circle perimeter = arc + r + r",
            "Calculate arc length as quarter circumference",
            "Apply to different orientations"
          ],
          relevantFormulas: [
            "Perimeter of quarter circle = Arc + Radius + Radius",
            "Arc = (1/4) × 2πr = (1/2)πr",
            "Perimeter = (1/2)πr + r + r"
          ],
          availableTools: ["p6Circle"]
        },
        {
          id: "perimeter-three-quarter",
          title: "Perimeter of a Three-Quarter Circle",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["perimeter-quarter-circle"],
          masterySignals: "Student correctly calculates perimeter of 3/4 circle in 2+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct calculations"
              ],
              qualitative: [
                "Identifies perimeter = arc (3/4) + r + r",
                "Calculates arc as 3/4 of circumference",
                "Shows clear working"
              ]
            },
            developing: {
              quantitative: [
                "1 correct with hints"
              ],
              qualitative: [
                "Struggles with 3/4 fraction calculation",
                "Forgets straight edges"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot calculate correctly"
              ],
              qualitative: [
                "Does not understand 3/4 circle structure",
                "Cannot calculate 3/4 of circumference"
              ]
            }
          },
          learningObjectives: [
            "Calculate arc as 3/4 of circumference",
            "Add the two straight radius edges",
            "Apply to various contexts"
          ],
          relevantFormulas: [
            "Arc = (3/4) × 2πr",
            "Perimeter = (3/4) × 2πr + r + r"
          ],
          availableTools: ["p6Circle"]
        }
      ]
    },

    topicOverview: `Learn to find the perimeter of partial circles by identifying all edges.

**Semicircle Perimeter** = Arc (half circumference) + Diameter
**Quarter Circle Perimeter** = Arc (quarter circumference) + Radius + Radius
**Three-Quarter Perimeter** = Arc (3/4 circumference) + Radius + Radius`,

    problemDescriptors: [
      "Calculate perimeter of semicircles",
      "Calculate perimeter of quarter circles",
      "Calculate perimeter of three-quarter circles",
      "Handle various orientations"
    ]
  },

  'p6-math-circles-area': {
    displayName: 'Area of a Circle',
    topicName: 'area of a circle',

    progressionStructure: {
      sections: [
        {
          id: "area-formula-radius",
          title: "Area Formula with Radius (A = πr²)",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly calculates area using A = πr² in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations",
                "Uses both π values correctly"
              ],
              qualitative: [
                "Applies A = π × r × r correctly",
                "Squares the radius (not diameter)",
                "Shows clear working with correct units (cm², m²)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Makes squaring errors"
              ],
              qualitative: [
                "Knows formula but makes calculation errors",
                "Sometimes forgets to square the radius",
                "Forgets square units"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses"
              ],
              qualitative: [
                "Does not know area formula",
                "Confuses area with circumference",
                "Cannot square numbers correctly"
              ]
            }
          },
          learningObjectives: [
            "Apply area formula A = π × r × r",
            "Calculate r² correctly",
            "Use appropriate π value",
            "Include square units in answer"
          ],
          relevantFormulas: [
            "Area = π × Radius × Radius",
            "A = πr²"
          ],
          availableTools: ["p6Circle"]
        },
        {
          id: "area-with-diameter",
          title: "Area When Diameter is Given",
          difficulty: "intermediate",
          prerequisites: ["area-formula-radius"],
          masterySignals: "Student correctly finds area when diameter is given in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations"
              ],
              qualitative: [
                "Finds radius first (r = d ÷ 2)",
                "Then applies A = πr²",
                "Shows two-step working clearly"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints"
              ],
              qualitative: [
                "Forgets to convert diameter to radius",
                "Uses diameter in the formula incorrectly"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses"
              ],
              qualitative: [
                "Does not know to find radius first",
                "Uses diameter directly in πr² formula"
              ]
            }
          },
          learningObjectives: [
            "Find radius from diameter (r = d ÷ 2)",
            "Apply area formula with calculated radius",
            "Show two-step working"
          ],
          relevantFormulas: [
            "Step 1: Radius = Diameter ÷ 2",
            "Step 2: Area = π × r × r"
          ],
          availableTools: ["p6Circle"]
        }
      ]
    },

    topicOverview: `The **area** of a circle is the space inside, measured in square units.

**Formula: A = π × r × r = πr²**

Important: Always use the RADIUS in the formula! If given diameter, find radius first.`,

    problemDescriptors: [
      "Calculate area with radius given",
      "Calculate area with diameter given",
      "Use both π = 3.14 and π = 22/7",
      "Apply to real-world contexts"
    ]
  },

  'p6-math-circles-area-semi-quarter': {
    displayName: 'Area of Semicircle & Quarter Circle',
    topicName: 'area of semicircle and quarter circle',

    progressionStructure: {
      sections: [
        {
          id: "area-semicircle",
          title: "Area of a Semicircle",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly calculates area of semicircle in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations"
              ],
              qualitative: [
                "Calculates full circle area first",
                "Divides by 2 for semicircle",
                "Handles both radius and diameter given"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints"
              ],
              qualitative: [
                "Forgets to divide by 2",
                "Makes calculation errors"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot calculate correctly"
              ],
              qualitative: [
                "Does not understand semicircle is half",
                "Confuses with perimeter formula"
              ]
            }
          },
          learningObjectives: [
            "Calculate area as half the full circle area",
            "Apply formula: Area = (1/2) × π × r²",
            "Handle diameter given scenarios"
          ],
          relevantFormulas: [
            "Area of semicircle = (1/2) × π × r²",
            "Or: Calculate πr², then divide by 2"
          ],
          availableTools: ["p6Circle"]
        },
        {
          id: "area-quarter-circle",
          title: "Area of a Quarter Circle",
          difficulty: "intermediate",
          prerequisites: ["area-semicircle"],
          masterySignals: "Student correctly calculates area of quarter circle in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations"
              ],
              qualitative: [
                "Calculates full circle area first",
                "Divides by 4 for quarter circle",
                "Shows clear working"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints"
              ],
              qualitative: [
                "Confuses dividing by 2 vs 4",
                "Makes calculation errors"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot calculate correctly"
              ],
              qualitative: [
                "Does not understand quarter is 1/4",
                "Cannot apply the correct fraction"
              ]
            }
          },
          learningObjectives: [
            "Calculate area as quarter of full circle area",
            "Apply formula: Area = (1/4) × π × r²",
            "Show clear two-step working"
          ],
          relevantFormulas: [
            "Area of quarter circle = (1/4) × π × r²",
            "Or: Calculate πr², then divide by 4"
          ],
          availableTools: ["p6Circle"]
        }
      ]
    },

    topicOverview: `For partial circles, find the area of the full circle first, then take the appropriate fraction.

**Semicircle Area** = (1/2) × π × r² = Full circle area ÷ 2
**Quarter Circle Area** = (1/4) × π × r² = Full circle area ÷ 4`,

    problemDescriptors: [
      "Calculate area of semicircles",
      "Calculate area of quarter circles",
      "Handle various given measurements"
    ]
  },

  'p6-math-circles-composite': {
    displayName: 'Composite Figures',
    topicName: 'composite circle figures',

    progressionStructure: {
      sections: [
        {
          id: "composite-addition",
          title: "Composite Figures: Addition Method",
          difficulty: "advanced",
          prerequisites: [],
          masterySignals: "Student correctly calculates area/perimeter by adding components in 2+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct calculations"
              ],
              qualitative: [
                "Identifies component shapes correctly",
                "Recognizes when to add (shapes joined)",
                "Shows organized working for each part"
              ]
            },
            developing: {
              quantitative: [
                "1 correct with hints"
              ],
              qualitative: [
                "Identifies shapes but makes calculation errors",
                "Forgets some components"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot calculate correctly"
              ],
              qualitative: [
                "Cannot break down composite figure",
                "Does not know which parts to add"
              ]
            }
          },
          learningObjectives: [
            "Identify shapes that make up a composite figure",
            "Add areas when shapes are combined",
            "Calculate total perimeter by adding all outer edges"
          ],
          relevantFormulas: [
            "Total Area = Area₁ + Area₂ + ...",
            "Perimeter = All outer edges (arcs + straight lines)"
          ],
          availableTools: [],
          pregeneratedContent: true
        },
        {
          id: "composite-subtraction",
          title: "Composite Figures: Subtraction Method",
          difficulty: "advanced",
          prerequisites: ["composite-addition"],
          masterySignals: "Student correctly calculates area/perimeter by subtracting in 2+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct calculations"
              ],
              qualitative: [
                "Recognizes when subtraction is needed (shape cut out)",
                "Correctly identifies outer and inner shapes",
                "Shows clear subtraction working"
              ]
            },
            developing: {
              quantitative: [
                "1 correct with hints"
              ],
              qualitative: [
                "Confuses when to add vs subtract",
                "Makes errors identifying the 'cut out' portion"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot calculate correctly"
              ],
              qualitative: [
                "Does not understand subtraction method",
                "Cannot identify what to subtract"
              ]
            }
          },
          learningObjectives: [
            "Recognize when a shape is 'cut out' from another",
            "Calculate area by subtraction: Outer - Inner",
            "Apply to real-world contexts"
          ],
          relevantFormulas: [
            "Shaded Area = Outer Area - Inner Area (cutout)",
            "Example: Square - Quarter circle"
          ],
          availableTools: [],
          pregeneratedContent: true
        },
        {
          id: "composite-complex",
          title: "Complex Composite Figures",
          difficulty: "advanced",
          prerequisites: ["composite-subtraction"],
          masterySignals: "Student correctly handles complex composite figures in 2+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct calculations"
              ],
              qualitative: [
                "Uses combination of addition and subtraction",
                "Recognizes patterns (2 semicircles = 1 circle)",
                "Shows strategic decomposition"
              ]
            },
            developing: {
              quantitative: [
                "1 correct with hints"
              ],
              qualitative: [
                "Struggles with complex decomposition",
                "Makes calculation errors in multi-step problems"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot calculate correctly"
              ],
              qualitative: [
                "Cannot develop strategy for complex figures",
                "Gets overwhelmed by multiple components"
              ]
            }
          },
          learningObjectives: [
            "Combine addition and subtraction strategies",
            "Recognize simplifying patterns",
            "Solve multi-step composite figure problems"
          ],
          relevantFormulas: [
            "2 semicircles = 1 full circle",
            "4 quarter circles = 1 full circle",
            "2 quarters + 1 semicircle = 1 full circle"
          ],
          availableTools: [],
          pregeneratedContent: true
        }
      ]
    },

    topicOverview: `**Composite figures** are shapes made of multiple basic shapes combined.

**Strategy:**
1. **Identify** the basic shapes (circles, semicircles, quarters, rectangles, squares)
2. **Decide** whether to ADD (shapes joined) or SUBTRACT (shapes cut out)
3. **Calculate** each part separately
4. **Combine** the results

**Useful patterns:**
- 2 semicircles = 1 full circle
- 4 quarter circles = 1 full circle`,

    problemDescriptors: [
      "Stadium shapes (rectangle + 2 semicircles)",
      "Quarter circle in a square corner",
      "Overlapping quarter circles (leaf shape)",
      "Square with 4 quarter circles (4-point star)",
      "Two circles with tangent lines"
    ],

    // Use pre-generated question bank for this subtopic
    // Composite figures require accurate SVG visuals that AI cannot generate reliably
    usePreGeneratedQuestions: true
  }
};

// Export all configurations
export default {
  config: P6_CIRCLES_CONFIG,
  mathTools: P6_CIRCLES_MATH_TOOLS,
  subtopics: P6_CIRCLES_SUBTOPICS
};
