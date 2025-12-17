/**
 * P5 Mathematics - Properties of Triangles Topic Configuration
 *
 * Comprehensive configuration for teaching properties of triangles,
 * including types of triangles, angle sum property, and finding unknown angles.
 *
 * Target audience: Primary 5 students (10-11 years old)
 */

// Type exports
export type PropertiesOfTrianglesTopicId =
  | 'p5-math-properties-triangles-types'
  | 'p5-math-properties-triangles-angle-sum'
  | 'p5-math-properties-triangles-finding-unknown';

// Topic-specific tutor customization
export const P5_PROPERTIES_OF_TRIANGLES_CONFIG = {
  teachingPhilosophy: `You are a friendly and encouraging mathematics tutor for Primary 5 students learning about properties of triangles.

Teaching Approach:
- Use simple, age-appropriate language suitable for 10-11 year olds
- Build understanding step by step: first classify triangles, then angle sum, then find unknowns
- Use visual recognition - students should "see" equal sides (tick marks) and right angles (square markers)
- Connect to real-world examples: rooftops, road signs, pizza slices, musical instruments
- Emphasize the key properties:
  * Equilateral: 3 equal sides, all angles 60°
  * Isosceles: 2 equal sides, 2 equal base angles
  * Scalene: no equal sides, no equal angles
  * Sum of angles in ANY triangle = 180°
- For exterior angles, help students see the relationship to interior angles
- For adjacent triangles, work through each triangle systematically
- Celebrate pattern recognition and correct application of properties

**Text-to-Speech Guidelines:**
- Say "isosceles" as "eye-SOS-uh-leez"
- Say "equilateral" as "ee-kwi-LAT-er-ul"
- Say "scalene" as "SKAY-leen"
- Say "perpendicular" as "per-pen-DIC-you-lar"
- Say "degrees" not the degree symbol
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation`,

  visualToolsGuidance: `Use pre-built visual tools when they help understanding.
IMPORTANT: Use the technical name in the toolName field, NOT the display name.

Available tools for this topic:
- generalTriangle: Shows a triangle with customizable angles, vertex labels, equal side markers, and right angle markers
- extendedLineTriangle: Shows a triangle with one side extended to demonstrate exterior angles
- adjacentTriangles: Shows two triangles sharing a common side for complex angle problems

Tool usage guidelines:
- Use generalTriangle for most problems - it now supports:
  * equalSides: 'none' | 'b-c' | 'a-b' | 'a-c' | 'all' for tick marks
  * showRightAngleMarker: true/false for 90° angle marker
- Use extendedLineTriangle when teaching exterior angle property
  * extendedSide: 'BC' | 'CB' | 'AC' | 'CA' | 'AB' | 'BA' to control extension direction
  * Format is 'XY' meaning extend side XY beyond vertex Y
- Use adjacentTriangles for problems with two triangles sharing a side
  * Good for equilateral + general triangle problems
  * Good for two isosceles triangles sharing a side
- Always include helpful captions explaining what to notice
- Show equal sides with tick marks for isosceles/equilateral identification
- DO NOT show answers in visualizations - student figures those out`
};

// Available math tools for this topic
export const P5_PROPERTIES_OF_TRIANGLES_MATH_TOOLS = [
  "generalTriangle",
  "extendedLineTriangle",
  "adjacentTriangles"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const P5_MATH_PROPERTIES_OF_TRIANGLES_SUBTOPICS = {

  'p5-math-properties-triangles-types': {
    displayName: 'Types of Triangles',
    topicName: 'classifying triangles by sides and angles',

    progressionStructure: {
      sections: [
        {
          id: "classify-by-sides",
          title: "Classifying Triangles by Sides",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly classifies triangles as equilateral, isosceles, or scalene based on side lengths in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct classifications by sides",
                "Recognizes tick marks indicating equal sides"
              ],
              qualitative: [
                "Correctly identifies equilateral triangles (3 equal sides, 3 tick marks)",
                "Correctly identifies isosceles triangles (2 equal sides, 2 tick marks)",
                "Correctly identifies scalene triangles (no equal sides, no tick marks)",
                "Understands that equal sides are shown with tick marks",
                "Can explain why a triangle belongs to its category"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about tick marks",
                "May confuse isosceles and equilateral"
              ],
              qualitative: [
                "Struggles to count tick marks accurately",
                "Confuses terminology (calls isosceles equilateral)",
                "Needs reminders about what tick marks mean",
                "Can identify after seeing the pattern pointed out"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot classify by sides"
              ],
              qualitative: [
                "Does not understand what tick marks represent",
                "Cannot recall definitions of triangle types",
                "Guesses randomly",
                "Does not connect equal marks to equal sides"
              ]
            }
          },
          learningObjectives: [
            "Define equilateral, isosceles, and scalene triangles",
            "Recognize tick marks as indicators of equal sides",
            "Classify triangles based on the number of equal sides",
            "Understand that equilateral is a special case of isosceles"
          ],
          relevantFormulas: [],
          availableTools: ["generalTriangle"]
        },
        {
          id: "classify-by-angles",
          title: "Classifying Triangles by Angles",
          difficulty: "foundational",
          prerequisites: ["classify-by-sides"],
          masterySignals: "Student correctly classifies triangles as acute, right, or obtuse based on angle sizes in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct classifications by angles",
                "Recognizes right angle marker (small square)"
              ],
              qualitative: [
                "Correctly identifies acute triangles (all angles < 90°)",
                "Correctly identifies right triangles (one angle = 90°)",
                "Correctly identifies obtuse triangles (one angle > 90°)",
                "Recognizes the small square as a 90° marker",
                "Can compare angles to 90° benchmark"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "May confuse acute and obtuse"
              ],
              qualitative: [
                "Struggles to compare angles to 90°",
                "Confuses terminology",
                "Forgets to check all angles for acute classification",
                "Needs help recognizing right angle marker"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot classify by angles"
              ],
              qualitative: [
                "Does not understand what 90° looks like",
                "Cannot distinguish acute from obtuse",
                "Does not recognize right angle marker",
                "Cannot estimate angle sizes"
              ]
            }
          },
          learningObjectives: [
            "Define acute, right, and obtuse triangles",
            "Recognize the right angle marker (small square)",
            "Compare angles to the 90° benchmark",
            "Classify triangles based on their largest angle"
          ],
          relevantFormulas: [],
          availableTools: ["generalTriangle"]
        },
        {
          id: "combined-classification",
          title: "Combined Classification (Sides and Angles)",
          difficulty: "intermediate",
          prerequisites: ["classify-by-angles"],
          masterySignals: "Student correctly gives combined classifications (e.g., 'isosceles right triangle') in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct combined classifications",
                "Uses both criteria correctly"
              ],
              qualitative: [
                "Combines side and angle classification correctly",
                "Understands that equilateral triangles are always acute",
                "Can identify isosceles right triangles (45-45-90)",
                "Can identify scalene right triangles",
                "Gives complete descriptions (both criteria)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with prompting",
                "May give only one classification"
              ],
              qualitative: [
                "Gives side classification but forgets angle",
                "Gives angle classification but forgets side",
                "Needs reminders to check both criteria",
                "Can do both when prompted separately"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot combine classifications"
              ],
              qualitative: [
                "Overwhelmed by two criteria",
                "Confuses the two classification systems",
                "Cannot apply both at once",
                "Reverts to single classification only"
              ]
            }
          },
          learningObjectives: [
            "Apply both classification systems to describe a triangle",
            "Understand that equilateral triangles are always acute",
            "Identify special cases: isosceles right, scalene obtuse, etc.",
            "Give complete triangle descriptions using both criteria"
          ],
          relevantFormulas: [],
          availableTools: ["generalTriangle"]
        }
      ]
    },

    learningObjectives: [
      "Classify triangles by sides: equilateral, isosceles, scalene",
      "Classify triangles by angles: acute, right, obtuse",
      "Recognize visual markers: tick marks and right angle squares",
      "Combine both classifications to fully describe a triangle"
    ],

    keyFormulas: `
**Classifying by Sides:**
- Equilateral: 3 equal sides (3 tick marks)
- Isosceles: 2 equal sides (2 tick marks)
- Scalene: No equal sides (no tick marks)

**Classifying by Angles:**
- Acute: All angles less than 90°
- Right: One angle equals 90° (marked with small square)
- Obtuse: One angle greater than 90°

**Special Properties:**
- Equilateral triangles are always acute (all angles = 60°)
- A triangle can be classified by both sides AND angles
- Example: "isosceles right triangle" has 2 equal sides and a 90° angle
    `,

    notesPath: 'p5/math/properties-of-triangles/TypesOfTriangles'
  },

  'p5-math-properties-triangles-angle-sum': {
    displayName: 'Angle Sum of a Triangle',
    topicName: 'understanding that angles in a triangle add up to 180°',

    progressionStructure: {
      sections: [
        {
          id: "angle-sum-property",
          title: "The Angle Sum Property",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student understands and can verify that angles in any triangle sum to 180° in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct verifications of angle sum = 180°",
                "Can check any triangle type"
              ],
              qualitative: [
                "States the angle sum property correctly",
                "Verifies by adding all three angles",
                "Understands this works for ALL triangles",
                "Can check acute, right, and obtuse triangles",
                "Recognizes if given angles are invalid (don't sum to 180°)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "May make arithmetic errors"
              ],
              qualitative: [
                "Knows the property but makes calculation errors",
                "Needs reminders that it applies to all triangles",
                "Struggles with larger angle values",
                "Can state property but forgets to apply it"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot recall angle sum property"
              ],
              qualitative: [
                "Does not know angle sum = 180°",
                "Thinks different triangles have different sums",
                "Cannot add three angles correctly",
                "Confuses with angles at a point (360°)"
              ]
            }
          },
          learningObjectives: [
            "State that the sum of angles in any triangle equals 180°",
            "Verify the angle sum property by adding three angles",
            "Understand this property applies to ALL triangles",
            "Recognize that equilateral triangles have angles of 60° each"
          ],
          relevantFormulas: [
            "∠A + ∠B + ∠C = 180°"
          ],
          availableTools: ["generalTriangle"]
        },
        {
          id: "finding-third-angle",
          title: "Finding the Third Angle",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["angle-sum-property"],
          masterySignals: "Student correctly finds the unknown angle when two angles are given in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct unknown angle calculations",
                "Consistent method and accuracy"
              ],
              qualitative: [
                "Sets up equation: known + known + unknown = 180°",
                "Adds known angles correctly",
                "Subtracts from 180° accurately",
                "Can verify answer by checking sum = 180°",
                "Works with various angle combinations"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on method",
                "May make arithmetic errors"
              ],
              qualitative: [
                "Knows method but makes calculation errors",
                "Forgets to subtract from 180°",
                "May add instead of subtract",
                "Needs help setting up the equation"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot find unknown angle"
              ],
              qualitative: [
                "Does not know how to set up the problem",
                "Subtracts only one angle from 180°",
                "Adds all angles without finding unknown",
                "Cannot perform the arithmetic"
              ]
            }
          },
          learningObjectives: [
            "Add two known angles",
            "Subtract from 180° to find the unknown angle",
            "Verify answer by checking the sum equals 180°",
            "Work with various angle combinations"
          ],
          relevantFormulas: [
            "Unknown angle = 180° - (known angle 1) - (known angle 2)"
          ],
          availableTools: ["generalTriangle"]
        },
        {
          id: "special-triangle-angles",
          title: "Angles in Special Triangles",
          difficulty: "intermediate",
          prerequisites: ["finding-third-angle"],
          masterySignals: "Student correctly uses properties of isosceles and equilateral triangles to find unknown angles in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations using special properties",
                "Applies isosceles and equilateral properties"
              ],
              qualitative: [
                "Uses 'base angles equal' for isosceles triangles",
                "Uses 'all angles = 60°' for equilateral triangles",
                "Combines special properties with angle sum = 180°",
                "Can find all angles from one given angle in isosceles",
                "Recognizes when to use special properties"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about properties",
                "May forget to use special properties"
              ],
              qualitative: [
                "Knows properties but forgets to apply them",
                "Needs reminders about base angles being equal",
                "Can apply property when prompted",
                "Struggles to combine with angle sum"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot use special properties"
              ],
              qualitative: [
                "Does not know special angle properties",
                "Treats isosceles like scalene",
                "Does not connect equal sides to equal angles",
                "Cannot combine multiple properties"
              ]
            }
          },
          learningObjectives: [
            "Apply the property: in isosceles triangles, base angles are equal",
            "Apply the property: in equilateral triangles, all angles = 60°",
            "Combine special properties with angle sum = 180°",
            "Find all angles from minimal given information"
          ],
          relevantFormulas: [
            "Equilateral: Each angle = 180° ÷ 3 = 60°",
            "Isosceles: Base angles are equal",
            "Right triangle: Other two angles sum to 90°"
          ],
          availableTools: ["generalTriangle"]
        }
      ]
    },

    learningObjectives: [
      "State and apply the angle sum property (180°)",
      "Find an unknown angle when two angles are given",
      "Use special properties of isosceles and equilateral triangles",
      "Combine multiple properties to find all angles"
    ],

    keyFormulas: `
**Angle Sum Property:**
- Sum of angles in any triangle = 180°
- ∠A + ∠B + ∠C = 180°

**Finding Unknown Angles:**
- Unknown = 180° - (sum of known angles)

**Special Triangles:**
- Equilateral: All angles = 60°
- Isosceles: Base angles are equal
- Right triangle: Two acute angles sum to 90°
- Isosceles right: 90° + 45° + 45° = 180°
    `,

    notesPath: 'p5/math/properties-of-triangles/AngleSumOfTriangle'
  },

  'p5-math-properties-triangles-finding-unknown': {
    displayName: 'Finding Unknown Angles',
    topicName: 'finding unknown angles using triangle properties',

    progressionStructure: {
      sections: [
        {
          id: "exterior-angles",
          title: "Exterior Angles of a Triangle",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly applies the exterior angle property to find unknown angles in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct exterior angle calculations",
                "Uses exterior angle property correctly"
              ],
              qualitative: [
                "Understands that exterior angle = sum of two interior opposite angles",
                "Identifies which angles are 'interior opposite'",
                "Can find unknown interior angle from exterior angle",
                "Can find exterior angle from two interior angles",
                "Understands exterior + interior = 180° (straight line)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "May confuse which angles to add"
              ],
              qualitative: [
                "Understands concept but struggles with execution",
                "Needs help identifying interior opposite angles",
                "Confuses exterior angle with adjacent interior angle",
                "Can apply property when setup is shown"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot apply exterior angle property"
              ],
              qualitative: [
                "Does not understand exterior angle concept",
                "Confuses with angle sum property",
                "Cannot identify exterior angles in diagram",
                "Does not know what 'interior opposite' means"
              ]
            }
          },
          learningObjectives: [
            "Identify exterior angles formed by extending a side",
            "Apply: Exterior angle = sum of two interior opposite angles",
            "Use: Exterior angle + adjacent interior angle = 180°",
            "Find unknown angles using either approach"
          ],
          relevantFormulas: [
            "Exterior angle = Interior opposite angle 1 + Interior opposite angle 2",
            "Exterior angle + Adjacent interior angle = 180°"
          ],
          availableTools: ["extendedLineTriangle"]
        },
        {
          id: "adjacent-triangles",
          title: "Adjacent Triangles",
          difficulty: "intermediate",
          prerequisites: ["exterior-angles"],
          masterySignals: "Student correctly finds unknown angles in figures with two triangles sharing a side in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations with adjacent triangles",
                "Applies properties to both triangles"
              ],
              qualitative: [
                "Identifies the shared side between triangles",
                "Applies angle sum = 180° to each triangle separately",
                "Uses isosceles/equilateral properties when relevant",
                "Works systematically through both triangles",
                "Can find angles that span both triangles"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance",
                "May confuse which angles belong to which triangle"
              ],
              qualitative: [
                "Struggles to separate the two triangles",
                "Applies properties to wrong triangle",
                "Needs help identifying shared vertices",
                "Can solve with step-by-step guidance"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot work with adjacent triangles"
              ],
              qualitative: [
                "Overwhelmed by the complex figure",
                "Cannot identify individual triangles",
                "Mixes up angles from different triangles",
                "Cannot organize information"
              ]
            }
          },
          learningObjectives: [
            "Identify two triangles sharing a common side",
            "Apply angle properties to each triangle separately",
            "Transfer information between triangles (shared angles/sides)",
            "Solve multi-step problems systematically"
          ],
          relevantFormulas: [
            "Apply angle sum = 180° to each triangle",
            "Use isosceles/equilateral properties within each triangle",
            "Shared sides may indicate equal angles"
          ],
          availableTools: ["adjacentTriangles"]
        },
        {
          id: "combined-problems",
          title: "Combined Problems",
          difficulty: "challenging",
          prerequisites: ["adjacent-triangles"],
          masterySignals: "Student correctly solves complex problems requiring multiple properties in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct complex problem solutions",
                "Uses multiple properties appropriately"
              ],
              qualitative: [
                "Analyzes problem to identify which properties apply",
                "Combines exterior angles with special triangle properties",
                "Works through adjacent triangles with isosceles properties",
                "Shows clear reasoning and steps",
                "Checks answers for reasonableness"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance on approach",
                "May miss one step in multi-step problems"
              ],
              qualitative: [
                "Can apply individual properties but struggles to combine",
                "Needs hints about which property to use first",
                "Makes errors in multi-step calculations",
                "Can follow solution path when guided"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot solve combined problems"
              ],
              qualitative: [
                "Does not know where to start",
                "Cannot identify which properties apply",
                "Gets lost in multi-step problems",
                "Gives up or guesses"
              ]
            }
          },
          learningObjectives: [
            "Analyze complex figures to identify applicable properties",
            "Combine multiple properties in one problem",
            "Work systematically through multi-step solutions",
            "Verify answers using alternative methods"
          ],
          relevantFormulas: [
            "Use all relevant properties: angle sum, exterior angles, isosceles, equilateral",
            "Work step by step, finding one angle at a time",
            "Use found angles to find remaining angles"
          ],
          availableTools: ["generalTriangle", "extendedLineTriangle", "adjacentTriangles"]
        }
      ]
    },

    learningObjectives: [
      "Apply exterior angle property to find unknown angles",
      "Work with adjacent triangles sharing a side",
      "Combine multiple properties in complex problems",
      "Solve multi-step angle problems systematically"
    ],

    keyFormulas: `
**Exterior Angle Property:**
- Exterior angle = Sum of two interior opposite angles
- Exterior angle + Adjacent interior angle = 180° (angles on straight line)

**Adjacent Triangles:**
- Apply angle sum = 180° to each triangle separately
- Use special properties (isosceles/equilateral) within each triangle
- Information from one triangle can help solve the other

**Problem-Solving Strategy:**
1. Identify all triangles in the figure
2. Note any special triangles (isosceles, equilateral, right)
3. Look for exterior angles
4. Apply properties one step at a time
5. Check: Do all angles in each triangle sum to 180°?
    `,

    notesPath: 'p5/math/properties-of-triangles/FindingUnknownAngles'
  }
};
