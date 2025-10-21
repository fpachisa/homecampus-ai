/**
 * S3 Mathematics - Coordinate Geometry Topic Configuration
 *
 * Clean topic configuration using the new prompt library architecture.
 * Inherits from base agents, formatting rules, and interaction protocols.
 */

// Type exports
export type CoordinateGeometryTopicId =
  | 's3-math-coord-geom-fundamentals'
  | 's3-math-coord-geom-gradient'
  | 's3-math-coord-geom-line-equations'
  | 's3-math-coord-geom-graphing'
  | 's3-math-coord-geom-perpendicular-bisectors'
  | 's3-math-coord-geom-applications'
  | 's3-math-coord-geom-3d';

// Topic-specific tutor customization (overrides base)
export const COORDINATE_GEOMETRY_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary school students learning Coordinate Geometry.

Teaching Approach:
- Guide students to discover solutions through questioning, not direct instruction
- Provide progressive hints only when students are stuck
- Celebrate insights and encourage perseverance
- Use visual representations to help students understand the Cartesian plane
- Emphasize the "why" behind formulas (distance from Pythagoras, midpoint as average)
- Connect coordinate geometry to real-world applications (maps, GPS, design)

**Text-to-Speech Guidelines:**
- Spell out coordinates clearly: "the point with x-coordinate 3 and y-coordinate negative 2"
- Say "x sub 1" or "x subscript 1" for x₁
- Say "gradient equals y 2 minus y 1 over x 2 minus x 1" for m = (y₂ − y₁)/(x₂ − x₁)
- Say "negative reciprocal" not "flip and negate"
- Avoid special symbols in speech.text - spell them out
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), use proper mathematical notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding (not for every question).
IMPORTANT: Use the technical name (e.g., "cartesianPlane") in the toolName field, NOT the display name.`
};

// Available math tools for this topic
export const COORDINATE_GEOMETRY_MATH_TOOLS = [
  "cartesianPlane"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S3_MATH_COORDINATE_GEOMETRY_SUBTOPICS = {

  's3-math-coord-geom-fundamentals': {
    displayName: 'Coordinate Plane Fundamentals',
    topicName: 'the Cartesian plane, coordinates, distance, and midpoints',

    progressionStructure: {
      sections: [
        {
          id: "cartesian-plane",
          title: "The Cartesian Plane and Coordinates",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies coordinates, quadrants, and plots points in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct coordinate identifications without hints",
                "Consistent accurate quadrant identification"
              ],
              qualitative: [
                "Correctly identifies ordered pairs (x, y)",
                "Distinguishes x-coordinate from y-coordinate",
                "Accurately identifies quadrants based on sign combinations",
                "Understands origin as (0, 0)",
                "Knows axes divide plane into four quadrants"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on x vs y"],
              qualitative: [
                "Understands concept but confuses x and y",
                "Needs prompting for quadrant signs",
                "Can identify after being reminded of conventions"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect identifications", "Cannot distinguish coordinates"],
              qualitative: [
                "Confuses x and y coordinates",
                "Does not understand quadrant system",
                "Cannot read coordinates from graph"
              ]
            }
          },
          learningObjectives: [
            "Understand the Cartesian plane consists of two perpendicular axes (x-axis horizontal, y-axis vertical)",
            "Identify the origin O as the intersection point (0, 0)",
            "Describe points using ordered pairs (x, y) where x is horizontal position, y is vertical position",
            "Identify the four quadrants and their sign conventions: Q1(+,+), Q2(−,+), Q3(−,−), Q4(+,−)",
            "Plot points accurately on the Cartesian plane"
          ],
          relevantFormulas: [
            "Point notation: (x, y) where x = x-coordinate, y = y-coordinate",
            "Quadrant 1: x > 0, y > 0",
            "Quadrant 2: x < 0, y > 0",
            "Quadrant 3: x < 0, y < 0",
            "Quadrant 4: x > 0, y < 0",
            "Points on x-axis: (x, 0)",
            "Points on y-axis: (0, y)"
          ],
          availableTools: ["cartesianPlane"]
        },
        {
          id: "distance-formula",
          title: "Distance Between Two Points",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["cartesian-plane"],
          masterySignals: "Student applies distance formula correctly in 3+ problems, including with surds",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ distance calculations correct without hints",
                "Consistent accurate application of formula"
              ],
              qualitative: [
                "Correctly applies d = √[(x₂−x₁)² + (y₂−y₁)²]",
                "Understands formula derives from Pythagoras' theorem",
                "Calculates x-step and y-step accurately",
                "Simplifies surds in answers (e.g., √20 = 2√5)",
                "Recognizes distance is always positive or zero"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on formula setup"],
              qualitative: [
                "Knows formula but makes arithmetic errors",
                "Needs prompting for correct substitution",
                "Forgets to simplify surd answers"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect calculations", "Cannot apply formula"],
              qualitative: [
                "Does not understand distance formula",
                "Confuses x-step and y-step",
                "Cannot connect to Pythagoras' theorem"
              ]
            }
          },
          learningObjectives: [
            "Understand distance formula is derived from Pythagoras' theorem",
            "Calculate horizontal distance (x-step) = x₂ − x₁",
            "Calculate vertical distance (y-step) = y₂ − y₁",
            "Apply distance formula: d = √[(x₂−x₁)² + (y₂−y₁)²]",
            "Simplify distance answers using surds for exact values",
            "Recognize distance is always non-negative"
          ],
          relevantFormulas: [
            "Distance formula: d = √[(x₂−x₁)² + (y₂−y₁)²]",
            "Derivation: d² = (x-step)² + (y-step)² {Pythagoras}",
            "x-step = x₂ − x₁ (horizontal distance)",
            "y-step = y₂ − y₁ (vertical distance)",
            "Example: Distance from (−2, 1) to (3, 4) = √[(3−(−2))² + (4−1)²] = √[25+9] = √34",
            "Leave answers in surd form for exact values"
          ],
          availableTools: ["cartesianPlane"]
        },
        {
          id: "midpoint-formula",
          title: "Midpoint of a Line Segment",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["cartesian-plane"],
          masterySignals: "Student finds midpoints correctly in 3+ problems without hints",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ midpoint calculations correct without hints",
                "Consistent accurate averaging"
              ],
              qualitative: [
                "Correctly applies M = ((x₁+x₂)/2, (y₁+y₂)/2)",
                "Understands midpoint is equidistant from both endpoints",
                "Calculates average of x-coordinates separately from y-coordinates",
                "Can work backwards from midpoint to find unknown endpoint"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on averaging"],
              qualitative: [
                "Understands averaging but makes arithmetic errors",
                "Needs prompting for which coordinates to average",
                "Can calculate once formula is recalled"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect midpoints", "Cannot average"],
              qualitative: [
                "Does not understand midpoint concept",
                "Confuses midpoint with distance",
                "Cannot apply averaging correctly"
              ]
            }
          },
          learningObjectives: [
            "Understand midpoint is the point equidistant from both endpoints",
            "Apply midpoint formula: M = ((x₁+x₂)/2, (y₁+y₂)/2)",
            "Recognize midpoint coordinates are averages of endpoint coordinates",
            "Find unknown endpoint given midpoint and one endpoint",
            "Verify midpoint by checking distances MA = MB"
          ],
          relevantFormulas: [
            "Midpoint formula: M = ((x₁+x₂)/2, (y₁+y₂)/2)",
            "x-coordinate of M = (x₁+x₂)/2 (average of x-coordinates)",
            "y-coordinate of M = (y₁+y₂)/2 (average of y-coordinates)",
            "Example: Midpoint of (−1, 3) and (4, 7) = ((−1+4)/2, (3+7)/2) = (3/2, 5)",
            "Verification: distance from M to each endpoint should be equal"
          ],
          availableTools: ["cartesianPlane"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Cartesian Plane (foundational) - Understand coordinates, quadrants, plotting points",
      "2. Distance Formula (foundational→intermediate) - Apply Pythagoras to find distance between points",
      "3. Midpoint Formula (foundational→intermediate) - Find midpoint using averaging"
    ],

    keyFormulas: `• Point notation: (x, y)
                  • Quadrants: Q1(+,+), Q2(−,+), Q3(−,−), Q4(+,−)
                  • Distance: d = √[(x₂−x₁)² + (y₂−y₁)²]
                  • Midpoint: M = ((x₁+x₂)/2, (y₁+y₂)/2)
                  • Distance derives from Pythagoras' theorem
                  • Midpoint uses averaging of coordinates`
  },

  's3-math-coord-geom-gradient': {
    displayName: 'Gradient and Line Relationships',
    topicName: 'gradient, parallel lines, and perpendicular lines',

    progressionStructure: {
      sections: [
        {
          id: "understanding-gradient",
          title: "Understanding and Calculating Gradient",
          difficulty: "intermediate",
          prerequisites: ["midpoint-formula"],
          masterySignals: "Student calculates gradients correctly and identifies positive/negative/zero/undefined in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ gradient calculations correct without hints",
                "Consistent identification of gradient type"
              ],
              qualitative: [
                "Correctly applies m = (y₂−y₁)/(x₂−x₁)",
                "Understands gradient as vertical step / horizontal step",
                "Identifies positive gradient (upward slope)",
                "Identifies negative gradient (downward slope)",
                "Recognizes horizontal line has gradient 0",
                "Recognizes vertical line has undefined gradient"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on formula"],
              qualitative: [
                "Knows formula but makes substitution errors",
                "Needs prompting for sign interpretation",
                "Can calculate once steps are identified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect gradients", "Cannot identify slope type"],
              qualitative: [
                "Does not understand gradient concept",
                "Confuses x-step and y-step",
                "Cannot interpret positive vs negative gradient"
              ]
            }
          },
          learningObjectives: [
            "Understand gradient as a measure of steepness",
            "Calculate gradient using m = (y₂−y₁)/(x₂−x₁)",
            "Identify positive gradient (line slopes upward, ↗)",
            "Identify negative gradient (line slopes downward, ↘)",
            "Recognize horizontal line has gradient = 0",
            "Recognize vertical line has undefined gradient (division by zero)"
          ],
          relevantFormulas: [
            "Gradient formula: m = (y₂−y₁)/(x₂−x₁)",
            "Alternative: m = vertical step / horizontal step = y-step / x-step",
            "Positive gradient: line rises as x increases",
            "Negative gradient: line falls as x increases",
            "Horizontal line (y = k): gradient = 0",
            "Vertical line (x = k): gradient undefined",
            "Example: Gradient from (−1, 2) to (3, 5) = (5−2)/(3−(−1)) = 3/4"
          ],
          availableTools: ["cartesianPlane"]
        },
        {
          id: "parallel-lines",
          title: "Parallel Lines",
          difficulty: "intermediate",
          prerequisites: ["understanding-gradient"],
          masterySignals: "Student identifies parallel lines using equal gradients in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct parallel line identifications",
                "Consistent application of equal gradient rule"
              ],
              qualitative: [
                "Understands parallel lines have equal gradients",
                "Applies m₁ = m₂ for parallel lines",
                "Finds gradient of line parallel to given line",
                "Verifies parallelism by comparing gradients"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints"],
              qualitative: [
                "Knows equal gradient rule but forgets to apply",
                "Needs prompting for gradient comparison",
                "Can verify once reminded of rule"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect identifications"],
              qualitative: [
                "Does not understand parallel line condition",
                "Cannot compare gradients correctly",
                "Confuses parallel with perpendicular"
              ]
            }
          },
          learningObjectives: [
            "Understand parallel lines never intersect and maintain constant distance",
            "Apply rule: lines are parallel ⟺ gradients are equal (m₁ = m₂)",
            "Find gradient of line parallel to given line",
            "Verify two lines are parallel by calculating and comparing gradients",
            "Recognize this rule applies only to non-horizontal, non-vertical lines"
          ],
          relevantFormulas: [
            "Parallel lines rule: l₁ ∥ l₂ ⟺ m₁ = m₂",
            "If line has gradient m, any parallel line also has gradient m",
            "Example: Lines with gradients 3 and 3 are parallel",
            "Example: Lines with gradients 2/5 and 2/5 are parallel",
            "Special cases: all horizontal lines (y = k) are parallel",
            "Special cases: all vertical lines (x = k) are parallel"
          ],
          availableTools: ["cartesianPlane"]
        },
        {
          id: "perpendicular-lines",
          title: "Perpendicular Lines",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["parallel-lines"],
          masterySignals: "Student finds perpendicular gradients using m₁ × m₂ = −1 in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ perpendicular gradient calculations correct",
                "Consistent use of negative reciprocal"
              ],
              qualitative: [
                "Correctly applies m₁ × m₂ = −1",
                "Finds perpendicular gradient as negative reciprocal",
                "Verifies perpendicularity by checking product = −1",
                "Understands if m₁ = a/b then m₂ = −b/a"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on negative reciprocal"],
              qualitative: [
                "Knows rule but struggles with reciprocal",
                "Forgets to negate when flipping fraction",
                "Can calculate once process is shown"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect perpendicular gradients"],
              qualitative: [
                "Does not understand negative reciprocal",
                "Confuses perpendicular with parallel",
                "Cannot apply m₁ × m₂ = −1 correctly"
              ]
            }
          },
          learningObjectives: [
            "Understand perpendicular lines meet at 90° (right angle)",
            "Apply rule: lines are perpendicular ⟺ m₁ × m₂ = −1",
            "Find perpendicular gradient as negative reciprocal: m₂ = −1/m₁",
            "If m₁ = a/b, then m₂ = −b/a",
            "Verify perpendicularity by checking gradient product equals −1"
          ],
          relevantFormulas: [
            "Perpendicular lines rule: m₁ × m₂ = −1",
            "Negative reciprocal: m₂ = −1/m₁",
            "Example: If m₁ = 2, then m₂ = −1/2 (check: 2 × (−1/2) = −1 ✓)",
            "Example: If m₁ = 3/4, then m₂ = −4/3",
            "Example: If m₁ = −5/2, then m₂ = 2/5",
            "Special case: horizontal line (m=0) ⊥ vertical line (undefined)",
            "Verification: multiply gradients, if product = −1, lines are perpendicular"
          ],
          availableTools: ["cartesianPlane"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Understanding Gradient (intermediate) - Calculate and interpret gradient",
      "2. Parallel Lines (intermediate) - Use equal gradients",
      "3. Perpendicular Lines (intermediate→advanced) - Use negative reciprocals"
    ],

    keyFormulas: `• Gradient: m = (y₂−y₁)/(x₂−x₁) = y-step/x-step
• Positive gradient: line slopes upward ↗
• Negative gradient: line slopes downward ↘
• Horizontal line: m = 0
• Vertical line: m undefined
• Parallel: m₁ = m₂
• Perpendicular: m₁ × m₂ = −1, or m₂ = −1/m₁`
  },

  's3-math-coord-geom-line-equations': {
    displayName: 'Equations of Lines',
    topicName: 'different forms of line equations and conversions',

    progressionStructure: {
      sections: [
        {
          id: "point-gradient-form",
          title: "Point-Gradient Form",
          difficulty: "intermediate",
          prerequisites: ["perpendicular-lines"],
          masterySignals: "Student uses point-gradient form to write equations in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ equations written correctly using point-gradient form",
                "Consistent accurate substitution"
              ],
              qualitative: [
                "Correctly applies y − y₁ = m(x − x₁)",
                "Substitutes point (x₁, y₁) and gradient m accurately",
                "Understands this form when gradient and one point are known",
                "Can rearrange to other forms after using point-gradient"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on substitution"],
              qualitative: [
                "Knows formula but makes substitution errors",
                "Needs prompting for which values go where",
                "Can write equation once setup is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect equations", "Cannot use form"],
              qualitative: [
                "Does not understand point-gradient form",
                "Confuses x₁ and y₁ with x and y",
                "Cannot substitute values correctly"
              ]
            }
          },
          learningObjectives: [
            "Understand point-gradient form: y − y₁ = m(x − x₁)",
            "Use when gradient m and one point (x₁, y₁) are known",
            "Substitute values correctly to write equation",
            "Rearrange point-gradient form to gradient-intercept form",
            "Apply to find equation from two points (calculate gradient first)"
          ],
          relevantFormulas: [
            "Point-gradient form: y − y₁ = m(x − x₁)",
            "When gradient m and point (x₁, y₁) are known",
            "Example: gradient 2, point (3, 5) → y − 5 = 2(x − 3)",
            "Expansion: y − 5 = 2x − 6 → y = 2x − 1",
            "For two points: find gradient first, then use either point"
          ],
          availableTools: ["cartesianPlane"]
        },
        {
          id: "gradient-intercept-form",
          title: "Gradient-Intercept Form",
          difficulty: "intermediate",
          prerequisites: ["point-gradient-form"],
          masterySignals: "Student identifies gradient and y-intercept from y = mx + c in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of m and c",
                "Consistent writing of equations in y = mx + c form"
              ],
              qualitative: [
                "Correctly identifies m as gradient, c as y-intercept",
                "Writes equations when gradient and y-intercept are known",
                "Reads gradient and y-intercept from equation",
                "Understands line passes through (0, c)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints"],
              qualitative: [
                "Knows form but confuses m and c",
                "Needs prompting for y-intercept meaning",
                "Can identify once form is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect identifications"],
              qualitative: [
                "Cannot identify gradient or y-intercept",
                "Does not understand y = mx + c structure",
                "Confuses different equation forms"
              ]
            }
          },
          learningObjectives: [
            "Understand gradient-intercept form: y = mx + c",
            "Identify m as gradient and c as y-intercept",
            "Recognize y-intercept is where line cuts y-axis (where x = 0)",
            "Write equation when gradient and y-intercept are known",
            "Convert from point-gradient form to gradient-intercept form"
          ],
          relevantFormulas: [
            "Gradient-intercept form: y = mx + c",
            "m = gradient (steepness of line)",
            "c = y-intercept (where line crosses y-axis)",
            "Example: y = 3x − 5 has gradient 3, y-intercept −5",
            "Example: y = −2x + 7 has gradient −2, y-intercept 7",
            "Line passes through point (0, c)"
          ],
          availableTools: ["cartesianPlane"]
        },
        {
          id: "general-form",
          title: "General Form and Conversions",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["gradient-intercept-form"],
          masterySignals: "Student converts between forms and uses general form ax + by = d in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ conversions between forms correct",
                "Consistent accurate rearrangement"
              ],
              qualitative: [
                "Correctly writes general form ax + by = d",
                "Converts y = mx + c to ax + by = d",
                "Converts ax + by = d to y = mx + c",
                "Finds gradient from general form using m = −a/b",
                "Understands vertical lines (x = k) and horizontal lines (y = k)"
              ]
            },
            developing: {
              quantitative: ["1-2 conversions correct with hints"],
              qualitative: [
                "Knows how to rearrange but makes algebra errors",
                "Needs prompting for elimination of fractions",
                "Can convert once method is shown"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect conversions"],
              qualitative: [
                "Cannot rearrange equations",
                "Does not understand different forms",
                "Makes sign errors in conversions"
              ]
            }
          },
          learningObjectives: [
            "Understand general form: ax + by = d where a, b, d are constants",
            "Convert from y = mx + c to ax + by = d",
            "Convert from ax + by = d to y = mx + c",
            "Find gradient from general form: m = −a/b",
            "Recognize vertical lines (x = k) and horizontal lines (y = k)",
            "Write equations with positive coefficient of x by convention"
          ],
          relevantFormulas: [
            "General form: ax + by = d",
            "Gradient from general form: m = −a/b",
            "Conversion example: y = (1/2)x − 3 → 2y = x − 6 → x − 2y = 6",
            "Conversion example: 3x + 4y = 12 → 4y = −3x + 12 → y = (−3/4)x + 3",
            "Vertical line: x = k (undefined gradient)",
            "Horizontal line: y = k (gradient = 0)",
            "Convention: write with positive x coefficient"
          ],
          availableTools: ["cartesianPlane"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Point-Gradient Form (intermediate) - Use y − y₁ = m(x − x₁)",
      "2. Gradient-Intercept Form (intermediate) - Use y = mx + c",
      "3. General Form (intermediate→advanced) - Use ax + by = d and convert between forms"
    ],

    keyFormulas: `• Point-gradient: y − y₁ = m(x − x₁)
• Gradient-intercept: y = mx + c (m=gradient, c=y-intercept)
• General form: ax + by = d
• Gradient from general: m = −a/b
• Vertical line: x = k (undefined gradient)
• Horizontal line: y = k (gradient = 0)
• Conversion: rearrange algebraically`
  },

  's3-math-coord-geom-graphing': {
    displayName: 'Graphing Straight Lines',
    topicName: 'graphing lines and finding equations from graphs',

    progressionStructure: {
      sections: [
        {
          id: "graphing-gradient-intercept",
          title: "Graphing from Gradient-Intercept Form",
          difficulty: "intermediate",
          prerequisites: ["general-form"],
          masterySignals: "Student graphs lines using y-intercept and gradient in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ graphs drawn correctly",
                "Consistent use of y-intercept and gradient steps"
              ],
              qualitative: [
                "Plots y-intercept (0, c) correctly",
                "Uses gradient as rise/run to find second point",
                "Extends line in both directions with arrows",
                "Interprets positive/negative gradient correctly"
              ]
            },
            developing: {
              quantitative: ["1-2 graphs with hints on steps"],
              qualitative: [
                "Plots y-intercept but struggles with gradient steps",
                "Needs prompting for which direction to count",
                "Can graph once steps are clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect graphs"],
              qualitative: [
                "Cannot plot y-intercept",
                "Does not understand gradient as steps",
                "Cannot use rise/run to find points"
              ]
            }
          },
          learningObjectives: [
            "Plot y-intercept (0, c) on the y-axis",
            "Use gradient m = rise/run to find another point",
            "For m = a/b: move b units right (x-step), then a units up/down (y-step)",
            "Extend line in both directions with arrows",
            "Verify graph by checking additional points"
          ],
          relevantFormulas: [
            "Gradient-intercept form: y = mx + c",
            "Step 1: Plot (0, c) on y-axis",
            "Step 2: From (0, c), use gradient m = rise/run",
            "If m = 3/4: move 4 right, then 3 up",
            "If m = −2: move 1 right, then 2 down (or 1 left, 2 up)",
            "Always make horizontal step positive",
            "Example: y = 2x − 3 → plot (0, −3), then move 1 right, 2 up to get (1, −1)"
          ],
          availableTools: ["cartesianPlane"]
        },
        {
          id: "graphing-general-form",
          title: "Graphing from General Form",
          difficulty: "intermediate",
          prerequisites: ["graphing-gradient-intercept"],
          masterySignals: "Student graphs lines using x and y intercepts in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ graphs using intercepts correct",
                "Consistent accurate intercept calculation"
              ],
              qualitative: [
                "Finds y-intercept by setting x = 0",
                "Finds x-intercept by setting y = 0",
                "Joins intercepts and extends line",
                "Verifies graph with third point if needed"
              ]
            },
            developing: {
              quantitative: ["1-2 graphs with hints on intercepts"],
              qualitative: [
                "Knows to set x or y to zero but makes errors",
                "Needs prompting for which to set to zero",
                "Can graph once intercepts are found"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect intercepts or graphs"],
              qualitative: [
                "Cannot find intercepts",
                "Confuses x and y intercepts",
                "Does not understand intercept method"
              ]
            }
          },
          learningObjectives: [
            "Find y-intercept by letting x = 0 in equation",
            "Find x-intercept by letting y = 0 in equation",
            "Plot both intercepts on appropriate axes",
            "Join the intercepts and extend line in both directions",
            "Verify accuracy by checking equation with coordinates"
          ],
          relevantFormulas: [
            "General form: ax + by = d",
            "y-intercept: let x = 0, solve for y → point (0, y)",
            "x-intercept: let y = 0, solve for x → point (x, 0)",
            "Example: 2x + 3y = 12",
            "  y-intercept: 2(0) + 3y = 12 → y = 4 → (0, 4)",
            "  x-intercept: 2x + 3(0) = 12 → x = 6 → (6, 0)",
            "Join (0, 4) and (6, 0), extend with arrows"
          ],
          availableTools: ["cartesianPlane"]
        },
        {
          id: "finding-equations-from-graphs",
          title: "Finding Equations from Graphs",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["graphing-general-form"],
          masterySignals: "Student determines equations from graphs in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ equations found from graphs correct",
                "Consistent method use"
              ],
              qualitative: [
                "Identifies gradient from graph (counting steps or using two points)",
                "Reads y-intercept from graph",
                "Writes equation in appropriate form",
                "Verifies equation with points on the graph"
              ]
            },
            developing: {
              quantitative: ["1-2 equations with hints"],
              qualitative: [
                "Can read intercept but struggles with gradient",
                "Needs prompting for gradient calculation method",
                "Can write equation once gradient found"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect equations"],
              qualitative: [
                "Cannot determine gradient from graph",
                "Cannot read y-intercept",
                "Does not know how to construct equation"
              ]
            }
          },
          learningObjectives: [
            "Determine gradient by counting rise/run or using two clear points",
            "Read y-intercept from where line crosses y-axis",
            "Write equation in y = mx + c form",
            "For vertical line, write x = k; for horizontal line, write y = k",
            "Verify equation by substituting coordinates of points on the line"
          ],
          relevantFormulas: [
            "Method 1: Count steps → m = rise/run",
            "Method 2: Choose two points → m = (y₂−y₁)/(x₂−x₁)",
            "Read c from y-intercept",
            "Write y = mx + c",
            "Special cases: vertical x = k, horizontal y = k",
            "Example: Line through (0, 2) with gradient 3 → y = 3x + 2",
            "Verification: check known points satisfy equation"
          ],
          availableTools: ["cartesianPlane"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Graphing from y = mx + c (intermediate) - Use y-intercept and gradient",
      "2. Graphing from ax + by = d (intermediate) - Use x and y intercepts",
      "3. Finding Equations from Graphs (intermediate→advanced) - Determine gradient and intercept"
    ],

    keyFormulas: `• From y = mx + c: plot (0, c), use gradient steps
• From ax + by = d: find x-intercept (y=0) and y-intercept (x=0)
• Gradient from graph: count rise/run or use two points
• Always extend lines with arrows
• Verify graphs by checking points satisfy equation
• Horizontal line y = k, vertical line x = k`
  },

  's3-math-coord-geom-perpendicular-bisectors': {
    displayName: 'Perpendicular Bisectors',
    topicName: 'perpendicular bisectors of line segments',

    progressionStructure: {
      sections: [
        {
          id: "perpendicular-bisector-concept",
          title: "Understanding Perpendicular Bisectors",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["finding-equations-from-graphs"],
          masterySignals: "Student understands equidistance property and identifies perpendicular bisectors in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications or verifications",
                "Consistent understanding of properties"
              ],
              qualitative: [
                "Understands perpendicular bisector passes through midpoint",
                "Knows it's perpendicular to line segment",
                "Recognizes equidistance property",
                "Can verify point on perpendicular bisector by checking equal distances"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints"],
              qualitative: [
                "Knows definition but struggles with verification",
                "Needs prompting for equidistance check",
                "Can understand once properties are reviewed"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect answers"],
              qualitative: [
                "Does not understand perpendicular bisector concept",
                "Cannot identify key properties",
                "Confuses with other line concepts"
              ]
            }
          },
          learningObjectives: [
            "Define perpendicular bisector as line through midpoint perpendicular to segment",
            "Understand points on perpendicular bisector are equidistant from endpoints",
            "Verify point is on perpendicular bisector by showing equal distances to endpoints",
            "Understand perpendicular bisector divides plane into proximity regions",
            "Apply to real-world contexts (Voronoi diagrams, service regions)"
          ],
          relevantFormulas: [
            "Perpendicular bisector: passes through midpoint M of [AB]",
            "Perpendicular to [AB]: gradient relationship m₁ × m₂ = −1",
            "Equidistance property: for any point P on bisector, PA = PB",
            "Verification: calculate PA and PB using distance formula",
            "Example: If PA = PB, then P is on perpendicular bisector of [AB]"
          ],
          availableTools: ["cartesianPlane"]
        },
        {
          id: "equation-perpendicular-bisector",
          title: "Finding Equation of Perpendicular Bisector",
          difficulty: "advanced",
          prerequisites: ["perpendicular-bisector-concept"],
          masterySignals: "Student finds equation of perpendicular bisector in 2-3 problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 perpendicular bisector equations correct",
                "Consistent systematic approach"
              ],
              qualitative: [
                "Finds midpoint M correctly",
                "Calculates gradient of [AB]",
                "Finds perpendicular gradient (negative reciprocal)",
                "Uses point-gradient form with M and perpendicular gradient",
                "Simplifies to appropriate form"
              ]
            },
            developing: {
              quantitative: ["1 equation correct with hints"],
              qualitative: [
                "Knows steps but makes calculation errors",
                "Needs prompting for perpendicular gradient",
                "Can complete once setup is shown"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect equations"],
              qualitative: [
                "Cannot complete multi-step process",
                "Forgets steps in procedure",
                "Makes errors in gradient or midpoint"
              ]
            }
          },
          learningObjectives: [
            "Step 1: Find midpoint M of [AB] using midpoint formula",
            "Step 2: Find gradient m₁ of [AB] using gradient formula",
            "Step 3: Find perpendicular gradient m₂ = −1/m₁",
            "Step 4: Use point-gradient form y − y_M = m₂(x − x_M)",
            "Step 5: Simplify to gradient-intercept or general form"
          ],
          sampleProblems: [
            {
              problem: "Find the equation of the perpendicular bisector of [AB] where A(−1, 3) and B(4, 7)"
            },
            {
              problem: "Find the perpendicular bisector of [PQ] where P(2, −1) and Q(6, 5)"
            },
            {
              problem: "Show that point R(3, 2) lies on the perpendicular bisector of [AB] where A(1, 0) and B(5, 4)"
            }
          ],
          relevantFormulas: [
            "Step 1: Midpoint M = ((x₁+x₂)/2, (y₁+y₂)/2)",
            "Step 2: Gradient of [AB]: m₁ = (y₂−y₁)/(x₂−x₁)",
            "Step 3: Perpendicular gradient: m₂ = −1/m₁",
            "Step 4: Point-gradient form: y − y_M = m₂(x − x_M)",
            "Step 5: Simplify to y = mx + c or ax + by = d",
            "Example: A(−1, 3), B(4, 7) → M(3/2, 5), m₁=4/5, m₂=−5/4",
            "  → y − 5 = (−5/4)(x − 3/2) → 10x + 8y = 55"
          ],
          availableTools: ["cartesianPlane"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 2 sections:",
      "1. Understanding Perpendicular Bisectors (intermediate→advanced) - Properties and equidistance",
      "2. Finding Equations (advanced) - Multi-step process to find equation"
    ],

    keyFormulas: `• Perpendicular bisector: through midpoint, perpendicular to segment
• Equidistance: points on bisector satisfy PA = PB
• Process: find M, find m₁, find m₂ = −1/m₁, use point-gradient form
• M = ((x₁+x₂)/2, (y₁+y₂)/2)
• m₁ = (y₂−y₁)/(x₂−x₁)
• m₂ = −1/m₁ (negative reciprocal)
• y − y_M = m₂(x − x_M)`
  },

  's3-math-coord-geom-applications': {
    displayName: 'Coordinate Geometry Applications',
    topicName: 'using coordinate geometry to prove geometric facts',

    progressionStructure: {
      sections: [
        {
          id: "triangle-properties",
          title: "Proving Triangle Properties",
          difficulty: "advanced",
          prerequisites: ["equation-perpendicular-bisector"],
          masterySignals: "Student proves triangles are isosceles, right-angled, or equilateral in 2-3 problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 triangle proofs correct",
                "Consistent method selection and application"
              ],
              qualitative: [
                "Uses distance formula to show equal sides (isosceles)",
                "Uses Pythagoras or gradient to show right angle",
                "Uses distance for all three sides (equilateral)",
                "Clearly states conclusion based on calculated properties"
              ]
            },
            developing: {
              quantitative: ["1 proof correct with hints"],
              qualitative: [
                "Knows which method but makes calculation errors",
                "Needs prompting for which property to prove",
                "Can complete once approach is identified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect or incomplete proofs"],
              qualitative: [
                "Cannot select appropriate method",
                "Makes errors in calculations",
                "Does not state clear conclusion"
              ]
            }
          },
          learningObjectives: [
            "Prove triangle is isosceles by showing two sides equal (distance formula)",
            "Prove triangle is right-angled by: (a) perpendicular sides (gradient), or (b) Pythagoras a²+b²=c²",
            "Prove triangle is equilateral by showing all three sides equal",
            "Calculate all necessary side lengths using distance formula",
            "State clear conclusion based on properties proven"
          ],
          relevantFormulas: [
            "Isosceles: Two sides equal → AB = AC using distance formula",
            "Right-angled method 1: Two sides perpendicular → m_AB × m_BC = −1",
            "Right-angled method 2: Pythagoras → AB² + BC² = AC²",
            "Equilateral: All sides equal → AB = BC = AC",
            "Distance: d = √[(x₂−x₁)² + (y₂−y₁)²]",
            "Gradient: m = (y₂−y₁)/(x₂−x₁)",
            "Example: Triangle PQR with P(1,5), Q(5,7), R(3,1)",
            "  PQ = 2√5, QR = 2√10, PR = 2√5 → isosceles (PQ = PR)"
          ],
          availableTools: ["cartesianPlane"]
        },
        {
          id: "quadrilateral-properties",
          title: "Proving Quadrilateral Properties",
          difficulty: "advanced",
          prerequisites: ["triangle-properties"],
          masterySignals: "Student proves quadrilaterals are parallelograms, rhombuses, rectangles, or squares in 2-3 problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 quadrilateral proofs correct",
                "Systematic verification of properties"
              ],
              qualitative: [
                "Proves parallelogram using opposite sides parallel (equal gradients)",
                "Proves rhombus by showing all sides equal",
                "Proves rectangle by showing parallelogram + perpendicular sides",
                "Proves square by showing rhombus + perpendicular sides",
                "Uses midpoint formula to show diagonals bisect each other"
              ]
            },
            developing: {
              quantitative: ["1 proof with hints on approach"],
              qualitative: [
                "Knows properties but struggles with systematic verification",
                "Needs prompting for which property to check",
                "Can complete once guided through steps"
              ]
            },
            struggling: {
              quantitative: ["Multiple incomplete or incorrect proofs"],
              qualitative: [
                "Cannot identify which properties to prove",
                "Makes calculation errors",
                "Does not understand quadrilateral classifications"
              ]
            }
          },
          learningObjectives: [
            "Prove parallelogram: opposite sides parallel (m_AB = m_DC, m_BC = m_AD)",
            "Prove rhombus: all four sides equal (AB = BC = CD = DA)",
            "Prove rectangle: parallelogram with perpendicular adjacent sides",
            "Prove square: rhombus with perpendicular sides (or rectangle with equal sides)",
            "Alternative: use diagonal properties (equal lengths, bisect each other)"
          ],
          sampleProblems: [
            {
              problem: "Show that ABCD with A(1,3), B(6,3), C(3,−1), D(−2,−1) is a parallelogram"
            },
            {
              problem: "Prove that PQRS is a rhombus given P(0,3), Q(3,0), R(0,−3), S(−3,0)"
            },
            {
              problem: "Show that quadrilateral ABCD is a rectangle"
            }
          ],
          relevantFormulas: [
            "Parallelogram: m_AB = m_DC and m_BC = m_AD (opposite sides parallel)",
            "Rhombus: AB = BC = CD = DA (all sides equal)",
            "Rectangle: parallelogram + m_AB × m_BC = −1 (adjacent sides ⊥)",
            "Square: all sides equal + adjacent sides perpendicular",
            "Alternative parallelogram: diagonals bisect (same midpoint)",
            "Distance: d = √[(x₂−x₁)² + (y₂−y₁)²]",
            "Gradient: m = (y₂−y₁)/(x₂−x₁)",
            "Perpendicular: m₁ × m₂ = −1"
          ],
          availableTools: ["cartesianPlane"]
        },
        {
          id: "collinearity",
          title: "Proving Collinearity",
          difficulty: "advanced",
          prerequisites: ["quadrilateral-properties"],
          masterySignals: "Student proves points are collinear using equal gradients in 2-3 problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 collinearity proofs correct",
                "Consistent use of gradient equality"
              ],
              qualitative: [
                "Calculates gradient from A to M",
                "Calculates gradient from M to C",
                "Compares gradients to determine collinearity",
                "States clear conclusion with justification"
              ]
            },
            developing: {
              quantitative: ["1 proof with hints"],
              qualitative: [
                "Knows method but makes gradient calculation errors",
                "Needs prompting for which gradients to compare",
                "Can complete once method is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect proofs"],
              qualitative: [
                "Does not understand collinearity test",
                "Cannot calculate gradients correctly",
                "Confuses collinearity with other concepts"
              ]
            }
          },
          learningObjectives: [
            "Understand collinearity means points lie on same straight line",
            "Test: gradient from A to M equals gradient from M to C",
            "Calculate both gradients using gradient formula",
            "Compare gradients (if equal, points are collinear)",
            "Apply to problems involving midpoints, line segments, and geometric figures"
          ],
          relevantFormulas: [
            "Collinearity test: m_AM = m_MC",
            "If gradients equal, A, M, C are collinear",
            "Gradient: m = (y₂−y₁)/(x₂−x₁)",
            "Example: A(−2,−7), B(0,−3), C(6,5)",
            "  m_AB = (−3−(−7))/(0−(−2)) = 4/2 = 2",
            "  m_BC = (5−(−3))/(6−0) = 8/6 = 4/3",
            "  Since 2 ≠ 4/3, points are NOT collinear",
            "Alternative: all three points satisfy same line equation"
          ],
          availableTools: ["cartesianPlane"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Triangle Properties (advanced) - Prove isosceles, right-angled, equilateral",
      "2. Quadrilateral Properties (advanced) - Prove parallelogram, rhombus, rectangle, square",
      "3. Collinearity (advanced) - Prove points lie on same line"
    ],

    keyFormulas: `• Isosceles: two sides equal (distance formula)
• Right-angled: perpendicular sides (gradient) OR Pythagoras
• Equilateral: all sides equal
• Parallelogram: opposite sides parallel (equal gradients)
• Rhombus: all sides equal (distance)
• Rectangle: parallelogram + perpendicular adjacent sides
• Square: rhombus + perpendicular OR rectangle + equal sides
• Collinear: m_AM = m_MC (equal gradients through middle point)`
  },

  's3-math-coord-geom-3d': {
    displayName: '3-Dimensional Coordinate Geometry',
    topicName: '3D coordinates using rectangular prisms, distance and midpoint in 3D space',

    progressionStructure: {
      sections: [
        {
          id: "3d-coordinates",
          title: "3D Coordinates and Rectangular Prisms",
          difficulty: "intermediate",
          prerequisites: ["midpoint-formula"],
          masterySignals: "Student correctly identifies 3D coordinates using cuboid vertices in 2+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct coordinate identifications without hints",
                "Consistent accurate plotting in 3D space"
              ],
              qualitative: [
                "Correctly identifies ordered triples (x, y, z)",
                "Understands X-axis (horizontal), Y-axis (depth), Z-axis (vertical)",
                "Visualizes points in 3D space",
                "Understands coordinate planes (XY, XZ, YZ)",
                "Recognizes rectangular prism geometry"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on axes"],
              qualitative: [
                "Understands concept but confuses axes",
                "Needs prompting for which coordinate is which",
                "Can identify after spatial visualization help"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect identifications"],
              qualitative: [
                "Cannot visualize 3D space",
                "Confuses x, y, z coordinates",
                "Does not understand 3D coordinate system"
              ]
            }
          },
          learningObjectives: [
            "Understand 3D coordinates (x, y, z) represent positions in 3D space",
            "Identify vertices of rectangular prism (cuboid) using ordered triples",
            "Recognize how dimensions (length, width, height) determine vertex coordinates",
            "Visualize 8 vertices of a cuboid from combinations of dimensions",
            "Understand how X, Y, Z coordinates correspond to edges of rectangular prism"
          ],
          relevantFormulas: [
            "Vertex notation: (x, y, z) where x = length, y = width, z = height",
            "Cuboid with dimensions l × w × h has 8 vertices",
            "If one corner at origin (0,0,0), opposite corner is at (l, w, h)",
            "Example: Cuboid 3×4×5 has vertices including (0,0,0), (3,0,0), (0,4,0), (0,0,5), (3,4,5)",
            "Each vertex is a unique combination of edge endpoints"
          ],
          availableTools: ["coordinate3DPlane"]
        },
        {
          id: "3d-distance",
          title: "Distance in 3D - Space Diagonal",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["3d-coordinates"],
          masterySignals: "Student applies 3D distance formula to cuboid diagonals correctly in 2-3 problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ distance calculations correct without hints",
                "Consistent accurate application of 3D formula"
              ],
              qualitative: [
                "Correctly applies d = √[(x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²]",
                "Understands formula uses Pythagoras twice (diagonal of rectangular prism)",
                "Calculates x-step, y-step, and z-step accurately",
                "Simplifies surds in answers",
                "Visualizes distance as diagonal of rectangular prism"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on formula"],
              qualitative: [
                "Knows formula but makes arithmetic errors",
                "Needs prompting for z-coordinate inclusion",
                "Forgets to simplify surd answers"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect calculations"],
              qualitative: [
                "Does not understand 3D distance formula",
                "Omits z-coordinate",
                "Cannot extend 2D Pythagoras to 3D"
              ]
            }
          },
          learningObjectives: [
            "Understand space diagonal connects opposite vertices of cuboid",
            "Apply 3D distance formula to find length of space diagonal",
            "Recognize formula d = √(l² + w² + h²) for cuboid dimensions",
            "Visualize Pythagoras theorem applied twice (base diagonal, then space diagonal)",
            "Calculate distance between any two vertices of rectangular prism"
          ],
          relevantFormulas: [
            "Space diagonal of cuboid: d = √(length² + width² + height²)",
            "General 3D distance formula: d = √[(x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²]",
            "Derivation: Apply Pythagoras twice through rectangular prism",
            "  Base diagonal² = l² + w² (first application)",
            "  Space diagonal² = base diagonal² + h² (second application)",
            "  Space diagonal = √(l² + w² + h²)",
            "Example: Cuboid 3×4×5 has space diagonal = √(9+16+25) = √50 = 5√2 units"
          ],
          availableTools: ["coordinate3DPlane"]
        },
        {
          id: "3d-midpoint",
          title: "Midpoint of Space Diagonal",
          difficulty: "intermediate",
          prerequisites: ["3d-distance"],
          masterySignals: "Student finds midpoint of space diagonal (cuboid center) correctly in 2-3 problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ midpoint calculations correct without hints",
                "Consistent accurate averaging of all three coordinates"
              ],
              qualitative: [
                "Correctly applies M = ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2)",
                "Understands midpoint is equidistant from both endpoints in 3D",
                "Averages all three coordinates separately",
                "Can work backwards to find unknown endpoint in 3D"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints"],
              qualitative: [
                "Understands averaging but makes arithmetic errors",
                "Needs prompting to include z-coordinate",
                "Can calculate once formula is recalled"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect midpoints"],
              qualitative: [
                "Does not extend 2D midpoint to 3D",
                "Omits z-coordinate in calculation",
                "Cannot apply averaging correctly"
              ]
            }
          },
          learningObjectives: [
            "Find midpoint of space diagonal (center of cuboid)",
            "Understand center is equidistant from all 8 vertices",
            "Apply 3D midpoint formula to opposite vertices",
            "Recognize center coordinates are half of each dimension",
            "For cuboid l×w×h with corner at origin, center is at (l/2, w/2, h/2)"
          ],
          relevantFormulas: [
            "Midpoint of space diagonal: M = ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2)",
            "For cuboid with corners at (0,0,0) and (l,w,h): center = (l/2, w/2, h/2)",
            "Center represents geometric center of rectangular prism",
            "Example: Cuboid with vertices (0,0,0) and (4,6,8) has center (2,3,4)",
            "Verification: All space diagonals intersect at the center"
          ],
          availableTools: ["coordinate3DPlane"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. 3D Coordinates and Rectangular Prisms (intermediate) - Understand cuboid vertices as (x,y,z) coordinates",
      "2. Distance - Space Diagonal (intermediate→advanced) - Calculate diagonal of cuboid using 3D distance",
      "3. Midpoint of Space Diagonal (intermediate) - Find center of cuboid using midpoint formula"
    ],

    keyFormulas: `• Cuboid vertices: 8 corners represented as (x, y, z) coordinates
• Cuboid l×w×h with corner at origin has opposite corner at (l, w, h)
• Space diagonal: d = √(l² + w² + h²)
• General 3D distance: d = √[(x₂−x₁)² + (y₂−y₁)² + (z₂−z₁)²]
• Center of cuboid: (l/2, w/2, h/2) when one corner at origin
• General 3D midpoint: M = ((x₁+x₂)/2, (y₁+y₂)/2, (z₁+z₂)/2)
• Derivation: Pythagoras applied twice (base diagonal, then space diagonal)`
  }
};

// Export for backward compatibility
export const S3_MATH_COORDINATE_GEOMETRY: Record<CoordinateGeometryTopicId, any> = S3_MATH_COORDINATE_GEOMETRY_SUBTOPICS;

// Export config that can be used by PromptLibrary
export const S3_MATH_COORDINATE_GEOMETRY_CONFIG = {
  TUTOR_ROLE: COORDINATE_GEOMETRY_TUTOR_CUSTOMIZATION.teachingPhilosophy,
  QUESTION_AGENT_ROLE: null, // Uses base from prompt-library
  SOLUTION_AGENT_ROLE: null, // Uses base from prompt-library
  MATH_TOOLS_AVAILABLE: COORDINATE_GEOMETRY_MATH_TOOLS,
  // FORMATTING_RULES: imported from prompt-library
  // INTERACTION_PROTOCOL: imported from prompt-library
};
