/**
 * P5 Mathematics - Properties of Parallelogram, Rhombus and Trapezium Topic Configuration
 *
 * Comprehensive configuration for teaching properties of special quadrilaterals,
 * including parallelograms, rhombuses, and trapeziums.
 *
 * Target audience: Primary 5 students (10-11 years old)
 */

// Type exports
export type PropertiesOfQuadrilateralsTopicId =
  | 'p5-math-properties-quadrilaterals-parallelogram'
  | 'p5-math-properties-quadrilaterals-rhombus'
  | 'p5-math-properties-quadrilaterals-trapezium'
  | 'p5-math-properties-quadrilaterals-finding-unknown';

// Topic-specific tutor customization
export const P5_PROPERTIES_OF_QUADRILATERALS_CONFIG = {
  teachingPhilosophy: `You are a friendly and encouraging mathematics tutor for Primary 5 students learning about properties of special quadrilaterals (parallelograms, rhombuses, and trapeziums).

Teaching Approach:
- Use simple, age-appropriate language suitable for 10-11 year olds
- Build understanding step by step: parallelogram → rhombus → trapezium → combined problems
- Use visual recognition - students should "see" parallel sides (arrows) and equal sides (tick marks)
- Connect to real-world examples: kites, tiles, road signs, building shapes
- Emphasize the key properties:
  * Parallelogram: 2 pairs of parallel sides, opposite angles equal, adjacent angles sum to 180°
  * Rhombus: Special parallelogram with 4 equal sides (all parallelogram properties apply)
  * Trapezium: Only 1 pair of parallel sides, co-interior angles sum to 180°
- Help students see the hierarchy: Rhombus IS a parallelogram (with extra property of equal sides)
- For angle problems, always identify parallel sides first, then apply the correct property
- Celebrate correct identification of properties and accurate calculations

**Text-to-Speech Guidelines:**
- Say "parallelogram" as "par-uh-LEL-oh-gram"
- Say "rhombus" as "ROM-bus"
- Say "trapezium" as "truh-PEE-zee-um"
- Say "co-interior" as "co-in-TEER-ee-or"
- Say "degrees" not the degree symbol
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation`,

  visualToolsGuidance: `Use pre-built visual tools when they help understanding.
IMPORTANT: Use the technical name in the toolName field, NOT the display name.

Available tools for this topic:
- parallelogramAngles: Shows a parallelogram with angle labels at vertices, parallel markers (arrows), optional equal side markers
- rhombusAngles: Shows a rhombus with angle labels, supports 'diamond' and 'tilted' orientations, equal side markers on all 4 sides
- trapeziumAngles: Shows a trapezium with angle labels, parallel markers on one pair of sides, optional isosceles markers

Tool usage guidelines:
- Use parallelogramAngles for parallelogram problems:
  * vertexLabels: labels for [bottomLeft, bottomRight, topRight, topLeft]
  * angles: angle labels/values for each vertex (use null to hide)
  * highlightAngles: array of indices (0-3) to highlight
  * showParallelMarkers: true to show arrow markers on parallel sides
  * skewAngle: controls the slant (15-75, default 30)

- Use rhombusAngles for rhombus problems:
  * orientation: 'diamond' (standing on corner) or 'tilted' (slanted like parallelogram)
  * vertexLabels: For diamond [top, right, bottom, left], for tilted [bottomLeft, bottomRight, topRight, topLeft]
  * showEqualSideMarkers: true shows tick marks on ALL 4 sides (key rhombus property!)
  * showParallelMarkers: true shows arrows on parallel sides

- Use trapeziumAngles for trapezium problems:
  * vertexLabels: [bottomLeft, bottomRight, topRight, topLeft]
  * showParallelMarkers: true shows arrows on the ONE pair of parallel sides
  * topSideRatio: 0.3-0.9 controls width of top relative to bottom
  * isIsosceles: true for isosceles trapezium
  * showEqualSideMarkers: true shows tick marks on non-parallel sides (for isosceles)

- Always include helpful captions explaining what to notice
- Show parallel markers to help students identify which sides are parallel
- DO NOT show answers in visualizations - student figures those out`
};

// Available math tools for this topic
export const P5_PROPERTIES_OF_QUADRILATERALS_MATH_TOOLS = [
  "parallelogramAngles",
  "rhombusAngles",
  "trapeziumAngles"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const P5_MATH_PROPERTIES_OF_QUADRILATERALS_SUBTOPICS = {

  'p5-math-properties-quadrilaterals-parallelogram': {
    displayName: 'Properties of Parallelogram',
    topicName: 'understanding the properties of parallelograms',

    progressionStructure: {
      sections: [
        {
          id: "identify-parallelogram",
          title: "Identifying a Parallelogram",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies parallelograms and their properties (parallel sides, equal opposite sides) in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of parallelograms",
                "Correctly identifies parallel and equal sides"
              ],
              qualitative: [
                "Defines parallelogram as having 2 pairs of parallel sides",
                "Identifies parallel sides using arrow markers",
                "Understands opposite sides are equal",
                "Can identify which sides are parallel to which",
                "Uses correct notation (// for parallel)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "May confuse with other quadrilaterals"
              ],
              qualitative: [
                "Knows definition but struggles to apply",
                "Needs reminders about what arrow markers mean",
                "Confuses parallel with equal",
                "Can identify when prompted"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot identify parallelograms"
              ],
              qualitative: [
                "Does not understand 'parallel sides'",
                "Confuses parallelogram with rectangle or rhombus",
                "Cannot read arrow markers",
                "Does not know the definition"
              ]
            }
          },
          learningObjectives: [
            "Define a parallelogram as a quadrilateral with 2 pairs of parallel sides",
            "Identify parallel sides using arrow markers",
            "Understand that opposite sides are equal in length",
            "Use // notation for parallel sides"
          ],
          relevantFormulas: [],
          availableTools: ["parallelogramAngles"]
        },
        {
          id: "opposite-angles-equal",
          title: "Opposite Angles are Equal",
          difficulty: "foundational",
          prerequisites: ["identify-parallelogram"],
          masterySignals: "Student correctly applies the 'opposite angles equal' property to find unknown angles in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of opposite angles property",
                "Identifies opposite angles correctly"
              ],
              qualitative: [
                "States that opposite angles in a parallelogram are equal",
                "Identifies which angles are opposite (diagonally across)",
                "Uses property to find unknown angles",
                "Can verify by checking if opposite pairs match",
                "Understands this applies to ALL parallelograms"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "May confuse opposite with adjacent"
              ],
              qualitative: [
                "Knows property but struggles to identify opposite angles",
                "Confuses opposite with adjacent angles",
                "Needs visual help to identify angle pairs",
                "Can apply when opposite angles are pointed out"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot apply opposite angles property"
              ],
              qualitative: [
                "Does not know the property",
                "Cannot identify opposite angles",
                "Confuses with triangle angle sum",
                "Does not connect the visual to the property"
              ]
            }
          },
          learningObjectives: [
            "State that opposite angles in a parallelogram are equal",
            "Identify opposite angles (diagonally across from each other)",
            "Use the property to find unknown angles",
            "Verify answers by checking opposite angle pairs"
          ],
          relevantFormulas: [
            "∠A = ∠C (opposite angles)",
            "∠B = ∠D (opposite angles)"
          ],
          availableTools: ["parallelogramAngles"]
        },
        {
          id: "adjacent-angles-180",
          title: "Adjacent Angles Sum to 180°",
          difficulty: "intermediate",
          prerequisites: ["opposite-angles-equal"],
          masterySignals: "Student correctly applies the 'adjacent angles sum to 180°' property in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of adjacent angles property",
                "Accurate calculation of unknown angles"
              ],
              qualitative: [
                "States that adjacent angles sum to 180°",
                "Identifies adjacent angles (next to each other)",
                "Understands this is due to co-interior angles between parallel lines",
                "Can find unknown angle: 180° - known angle",
                "Can apply to any adjacent pair in the parallelogram"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "May make arithmetic errors"
              ],
              qualitative: [
                "Knows property but makes calculation errors",
                "Forgets to subtract from 180°",
                "Confuses adjacent with opposite",
                "Needs reminders about co-interior angles"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot apply adjacent angles property"
              ],
              qualitative: [
                "Does not know the property",
                "Tries to use 360° instead of 180°",
                "Cannot identify adjacent angles",
                "Does not understand co-interior angle concept"
              ]
            }
          },
          learningObjectives: [
            "State that adjacent angles in a parallelogram sum to 180°",
            "Understand this is because they are co-interior angles",
            "Calculate unknown angles by subtracting from 180°",
            "Apply to any pair of adjacent angles"
          ],
          relevantFormulas: [
            "∠A + ∠B = 180° (adjacent angles)",
            "∠B + ∠C = 180° (adjacent angles)",
            "∠C + ∠D = 180° (adjacent angles)",
            "∠D + ∠A = 180° (adjacent angles)"
          ],
          availableTools: ["parallelogramAngles"]
        }
      ]
    },

    learningObjectives: [
      "Define and identify parallelograms",
      "Apply the property: opposite angles are equal",
      "Apply the property: adjacent angles sum to 180°",
      "Use both properties to find unknown angles"
    ],

    keyFormulas: `
**Properties of a Parallelogram:**
- 2 pairs of parallel sides
- Opposite sides are equal: AB = CD, BC = AD
- Opposite angles are equal: ∠A = ∠C, ∠B = ∠D
- Adjacent angles sum to 180°: ∠A + ∠B = 180°

**Finding Unknown Angles:**
- If opposite angle is known: Unknown = Known (they're equal)
- If adjacent angle is known: Unknown = 180° - Known
- All four angles sum to 360°
    `,

    notesPath: 'p5/math/properties-of-quadrilaterals/PropertiesOfParallelogram'
  },

  'p5-math-properties-quadrilaterals-rhombus': {
    displayName: 'Properties of Rhombus',
    topicName: 'understanding the properties of rhombuses',

    progressionStructure: {
      sections: [
        {
          id: "identify-rhombus",
          title: "Identifying a Rhombus",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies rhombuses and understands they have 4 equal sides in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of rhombuses",
                "Recognizes all 4 sides are equal"
              ],
              qualitative: [
                "Defines rhombus as a parallelogram with 4 equal sides",
                "Recognizes tick marks on ALL 4 sides indicate equal sides",
                "Understands rhombus is a SPECIAL type of parallelogram",
                "Can distinguish rhombus from general parallelogram",
                "Recognizes both diamond and tilted orientations"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "May confuse with square or parallelogram"
              ],
              qualitative: [
                "Knows 4 equal sides but forgets other properties",
                "Confuses rhombus with square",
                "Only recognizes one orientation (diamond or tilted)",
                "Needs reminders about tick marks meaning"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot identify rhombuses"
              ],
              qualitative: [
                "Does not know rhombus has 4 equal sides",
                "Cannot distinguish from parallelogram",
                "Does not understand tick mark notation",
                "Confuses with other quadrilaterals"
              ]
            }
          },
          learningObjectives: [
            "Define a rhombus as a parallelogram with 4 equal sides",
            "Recognize tick marks on all 4 sides",
            "Understand a rhombus is a special parallelogram",
            "Identify rhombuses in different orientations"
          ],
          relevantFormulas: [
            "AB = BC = CD = DA (all sides equal)"
          ],
          availableTools: ["rhombusAngles"]
        },
        {
          id: "rhombus-angle-properties",
          title: "Angle Properties of a Rhombus",
          difficulty: "intermediate",
          prerequisites: ["identify-rhombus"],
          masterySignals: "Student correctly applies parallelogram angle properties to rhombuses in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct angle calculations in rhombuses",
                "Uses both angle properties correctly"
              ],
              qualitative: [
                "Applies opposite angles equal property to rhombus",
                "Applies adjacent angles sum to 180° to rhombus",
                "Understands rhombus inherits ALL parallelogram properties",
                "Can find all angles from one given angle",
                "Verifies answers sum to 360°"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "May forget rhombus is a parallelogram"
              ],
              qualitative: [
                "Knows properties but struggles to apply",
                "Forgets that parallelogram rules apply",
                "Needs reminders about opposite/adjacent relationships",
                "Can apply when connection is pointed out"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot apply angle properties to rhombus"
              ],
              qualitative: [
                "Does not connect rhombus to parallelogram",
                "Thinks rhombus has different angle rules",
                "Cannot identify opposite/adjacent angles",
                "Makes systematic calculation errors"
              ]
            }
          },
          learningObjectives: [
            "Apply opposite angles equal property to rhombuses",
            "Apply adjacent angles sum to 180° to rhombuses",
            "Understand rhombus inherits all parallelogram properties",
            "Find all four angles from one given angle"
          ],
          relevantFormulas: [
            "Opposite angles are equal: ∠A = ∠C, ∠B = ∠D",
            "Adjacent angles sum to 180°: ∠A + ∠B = 180°",
            "All 4 angles sum to 360°"
          ],
          availableTools: ["rhombusAngles"]
        },
        {
          id: "rhombus-vs-parallelogram",
          title: "Rhombus vs Parallelogram",
          difficulty: "intermediate",
          prerequisites: ["rhombus-angle-properties"],
          masterySignals: "Student correctly compares rhombus and parallelogram properties in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct comparisons/identifications",
                "Correctly states what makes rhombus special"
              ],
              qualitative: [
                "Explains that every rhombus is a parallelogram",
                "Explains that NOT every parallelogram is a rhombus",
                "Identifies the key difference: 4 equal sides vs 2 pairs of equal sides",
                "Can determine if a shape is a rhombus or just a parallelogram",
                "Uses visual markers (tick marks) to distinguish"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "May confuse the relationship"
              ],
              qualitative: [
                "Knows they're related but confuses direction",
                "Thinks parallelogram is special type of rhombus",
                "Struggles to articulate the difference",
                "Can identify when both shapes are shown side by side"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot compare the shapes"
              ],
              qualitative: [
                "Thinks they are completely different shapes",
                "Does not understand hierarchy of quadrilaterals",
                "Cannot state what makes rhombus special",
                "Confuses with other shapes"
              ]
            }
          },
          learningObjectives: [
            "Explain the relationship: rhombus is a special parallelogram",
            "State the key difference: 4 equal sides (not just 2 pairs)",
            "Determine whether a shape is a rhombus or just a parallelogram",
            "Use tick marks to distinguish between them"
          ],
          relevantFormulas: [],
          availableTools: ["parallelogramAngles", "rhombusAngles"]
        }
      ]
    },

    learningObjectives: [
      "Define and identify rhombuses",
      "Understand rhombus is a special type of parallelogram",
      "Apply parallelogram angle properties to rhombuses",
      "Compare and contrast rhombus with parallelogram"
    ],

    keyFormulas: `
**Properties of a Rhombus:**
- All 4 sides are equal: AB = BC = CD = DA
- 2 pairs of parallel sides (it's a parallelogram)
- Opposite angles are equal: ∠A = ∠C, ∠B = ∠D
- Adjacent angles sum to 180°: ∠A + ∠B = 180°

**Rhombus vs Parallelogram:**
- Parallelogram: Opposite sides equal (AB = CD, BC = AD)
- Rhombus: ALL sides equal (AB = BC = CD = DA)
- Every rhombus IS a parallelogram
- NOT every parallelogram is a rhombus
    `,

    notesPath: 'p5/math/properties-of-quadrilaterals/PropertiesOfRhombus'
  },

  'p5-math-properties-quadrilaterals-trapezium': {
    displayName: 'Properties of Trapezium',
    topicName: 'understanding the properties of trapeziums',

    progressionStructure: {
      sections: [
        {
          id: "identify-trapezium",
          title: "Identifying a Trapezium",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies trapeziums and understands they have exactly 1 pair of parallel sides in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of trapeziums",
                "Correctly identifies the ONE pair of parallel sides"
              ],
              qualitative: [
                "Defines trapezium as having exactly 1 pair of parallel sides",
                "Identifies parallel sides using arrow markers",
                "Distinguishes trapezium from parallelogram (which has 2 pairs)",
                "Recognizes that non-parallel sides are NOT equal (unless isosceles)",
                "Can identify the parallel pair correctly"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "May confuse with parallelogram"
              ],
              qualitative: [
                "Knows definition but struggles to apply",
                "Confuses trapezium with parallelogram",
                "Forgets trapezium has only ONE pair of parallel sides",
                "Needs visual help to identify parallel sides"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot identify trapeziums"
              ],
              qualitative: [
                "Does not understand 'one pair of parallel sides'",
                "Thinks any quadrilateral is a trapezium",
                "Cannot read arrow markers",
                "Confuses with triangles or other shapes"
              ]
            }
          },
          learningObjectives: [
            "Define a trapezium as having exactly 1 pair of parallel sides",
            "Identify the parallel sides using arrow markers",
            "Distinguish trapezium from parallelogram",
            "Recognize that non-parallel sides may not be equal"
          ],
          relevantFormulas: [],
          availableTools: ["trapeziumAngles"]
        },
        {
          id: "co-interior-angles",
          title: "Co-interior Angles Sum to 180°",
          difficulty: "intermediate",
          prerequisites: ["identify-trapezium"],
          masterySignals: "Student correctly applies the co-interior angle property to find unknown angles in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of co-interior angles property",
                "Accurate calculations"
              ],
              qualitative: [
                "States that co-interior angles between parallel sides sum to 180°",
                "Identifies which angles are co-interior (same side of trapezium)",
                "Calculates unknown angle: 180° - known angle",
                "Applies property to both left and right sides",
                "Understands why this property works (parallel lines)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "May confuse which angles are co-interior"
              ],
              qualitative: [
                "Knows the property but struggles to identify co-interior pairs",
                "Confuses co-interior with opposite angles",
                "Makes arithmetic errors when subtracting from 180°",
                "Can apply when co-interior pairs are pointed out"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot apply co-interior property"
              ],
              qualitative: [
                "Does not know the co-interior angles property",
                "Tries to use opposite angles equal (wrong for trapezium)",
                "Cannot identify which angles form a co-interior pair",
                "Confuses with parallelogram properties"
              ]
            }
          },
          learningObjectives: [
            "State that co-interior angles between parallel sides sum to 180°",
            "Identify co-interior angle pairs (on the same side of the trapezium)",
            "Calculate unknown angles using 180° - known angle",
            "Understand why the property works (angles between parallel lines)"
          ],
          relevantFormulas: [
            "∠A + ∠D = 180° (co-interior angles on left side)",
            "∠B + ∠C = 180° (co-interior angles on right side)"
          ],
          availableTools: ["trapeziumAngles"]
        },
        {
          id: "isosceles-trapezium",
          title: "Isosceles Trapezium",
          difficulty: "intermediate",
          prerequisites: ["co-interior-angles"],
          masterySignals: "Student correctly applies isosceles trapezium properties in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of isosceles trapezium properties",
                "Uses equal base angles correctly"
              ],
              qualitative: [
                "Defines isosceles trapezium as having equal non-parallel sides",
                "Understands base angles are equal in isosceles trapezium",
                "Combines base angles equal with co-interior angles = 180°",
                "Can find all angles from one given angle",
                "Recognizes tick marks on non-parallel sides"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "May forget base angles are equal"
              ],
              qualitative: [
                "Knows definition but forgets angle property",
                "Struggles to combine with co-interior property",
                "Needs reminders about equal base angles",
                "Can apply when property is pointed out"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot apply isosceles trapezium properties"
              ],
              qualitative: [
                "Does not know what isosceles trapezium means",
                "Does not connect equal sides to equal angles",
                "Cannot combine multiple properties",
                "Treats like general trapezium"
              ]
            }
          },
          learningObjectives: [
            "Define isosceles trapezium as having equal non-parallel sides",
            "Apply the property: base angles are equal",
            "Combine with co-interior angles property",
            "Find all angles from one given angle"
          ],
          relevantFormulas: [
            "In isosceles trapezium: ∠A = ∠B (base angles)",
            "In isosceles trapezium: ∠C = ∠D (base angles)",
            "Still: ∠A + ∠D = 180° (co-interior)"
          ],
          availableTools: ["trapeziumAngles"]
        }
      ]
    },

    learningObjectives: [
      "Define and identify trapeziums",
      "Apply the co-interior angles property (sum to 180°)",
      "Understand and apply isosceles trapezium properties",
      "Distinguish trapezium from parallelogram"
    ],

    keyFormulas: `
**Properties of a Trapezium:**
- Exactly 1 pair of parallel sides
- Co-interior angles (between parallel sides) sum to 180°
- ∠A + ∠D = 180° (left side)
- ∠B + ∠C = 180° (right side)

**Isosceles Trapezium:**
- Non-parallel sides are equal
- Base angles are equal: ∠A = ∠B and ∠C = ∠D

**Trapezium vs Parallelogram:**
- Trapezium: 1 pair of parallel sides
- Parallelogram: 2 pairs of parallel sides
    `,

    notesPath: 'p5/math/properties-of-quadrilaterals/PropertiesOfTrapezium'
  },

  'p5-math-properties-quadrilaterals-finding-unknown': {
    displayName: 'Finding Unknown Angles',
    topicName: 'finding unknown angles in parallelograms, rhombuses, and trapeziums',

    progressionStructure: {
      sections: [
        {
          id: "parallelogram-angle-problems",
          title: "Angle Problems in Parallelograms",
          difficulty: "intermediate",
          prerequisites: [],
          masterySignals: "Student correctly finds unknown angles in parallelograms using both properties in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct parallelogram angle calculations",
                "Uses appropriate property for each problem"
              ],
              qualitative: [
                "Chooses correct property based on given information",
                "Uses opposite angles equal when finding diagonal angle",
                "Uses adjacent angles = 180° when finding neighbor angle",
                "Finds all four angles from one given angle",
                "Verifies answers sum to 360°"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "May use wrong property"
              ],
              qualitative: [
                "Knows properties but chooses wrong one",
                "Confuses opposite with adjacent",
                "Makes arithmetic errors",
                "Can solve when property is specified"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot solve parallelogram angle problems"
              ],
              qualitative: [
                "Does not remember properties",
                "Cannot determine which property to use",
                "Gets confused by angle positions",
                "Gives up or guesses"
              ]
            }
          },
          learningObjectives: [
            "Choose the appropriate property for each problem",
            "Use opposite angles equal property effectively",
            "Use adjacent angles sum to 180° effectively",
            "Find all angles from minimal given information"
          ],
          relevantFormulas: [
            "Opposite angles equal: ∠A = ∠C, ∠B = ∠D",
            "Adjacent angles: ∠A + ∠B = 180°"
          ],
          availableTools: ["parallelogramAngles"]
        },
        {
          id: "rhombus-angle-problems",
          title: "Angle Problems in Rhombuses",
          difficulty: "intermediate",
          prerequisites: ["parallelogram-angle-problems"],
          masterySignals: "Student correctly finds unknown angles in rhombuses in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct rhombus angle calculations",
                "Handles both diamond and tilted orientations"
              ],
              qualitative: [
                "Applies parallelogram properties to rhombus",
                "Works with diamond orientation (vertical axis)",
                "Works with tilted orientation (like parallelogram)",
                "Finds all angles systematically",
                "Understands rhombus is special parallelogram"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Struggles with one orientation"
              ],
              qualitative: [
                "Can solve tilted but not diamond (or vice versa)",
                "Forgets rhombus rules are same as parallelogram",
                "Gets confused by vertex labeling in diamond",
                "Can solve when orientation is clarified"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot solve rhombus problems"
              ],
              qualitative: [
                "Does not recognize rhombus as parallelogram",
                "Uses wrong properties for rhombus",
                "Cannot handle diamond orientation",
                "Confuses vertices in different orientations"
              ]
            }
          },
          learningObjectives: [
            "Apply parallelogram angle properties to rhombuses",
            "Solve problems with diamond orientation",
            "Solve problems with tilted orientation",
            "Recognize that rhombus rules = parallelogram rules"
          ],
          relevantFormulas: [
            "Same as parallelogram: opposite angles equal, adjacent = 180°",
            "All sides equal (use to identify rhombus)"
          ],
          availableTools: ["rhombusAngles"]
        },
        {
          id: "trapezium-angle-problems",
          title: "Angle Problems in Trapeziums",
          difficulty: "intermediate",
          prerequisites: ["rhombus-angle-problems"],
          masterySignals: "Student correctly finds unknown angles in trapeziums using co-interior property in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct trapezium angle calculations",
                "Handles isosceles and general trapeziums"
              ],
              qualitative: [
                "Identifies co-interior angle pairs correctly",
                "Applies co-interior angles sum to 180°",
                "Uses isosceles trapezium properties when applicable",
                "Finds multiple unknown angles systematically",
                "Does NOT use parallelogram properties incorrectly"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "May confuse with parallelogram properties"
              ],
              qualitative: [
                "Tries to use opposite angles equal (wrong!)",
                "Forgets trapezium has different rules",
                "Struggles to identify co-interior pairs",
                "Can solve when co-interior pairs are shown"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot solve trapezium problems"
              ],
              qualitative: [
                "Uses parallelogram properties on trapezium",
                "Does not know co-interior angles property",
                "Cannot identify which angles sum to 180°",
                "Confuses trapezium with parallelogram"
              ]
            }
          },
          learningObjectives: [
            "Apply co-interior angles property correctly",
            "Identify co-interior pairs in trapeziums",
            "Handle isosceles trapezium problems",
            "Avoid incorrectly applying parallelogram properties"
          ],
          relevantFormulas: [
            "Co-interior: ∠A + ∠D = 180°, ∠B + ∠C = 180°",
            "Isosceles: Base angles equal"
          ],
          availableTools: ["trapeziumAngles"]
        },
        {
          id: "mixed-problems",
          title: "Mixed Problems",
          difficulty: "challenging",
          prerequisites: ["trapezium-angle-problems"],
          masterySignals: "Student correctly identifies shape and applies appropriate properties in 3+ mixed problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct mixed problem solutions",
                "Identifies shape correctly first"
              ],
              qualitative: [
                "First identifies: parallelogram, rhombus, or trapezium",
                "Then applies appropriate properties for that shape",
                "Distinguishes which rules apply to which shape",
                "Solves multi-step problems systematically",
                "Verifies answers make sense"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with shape identification help",
                "Uses wrong properties for shape"
              ],
              qualitative: [
                "Can solve once shape is identified",
                "Mixes up properties between shapes",
                "Applies parallelogram rules to trapezium",
                "Needs hints about which shape it is"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot solve mixed problems"
              ],
              qualitative: [
                "Cannot identify the shape",
                "Uses same properties for all shapes",
                "Does not know different shapes have different rules",
                "Gets overwhelmed by variety"
              ]
            }
          },
          learningObjectives: [
            "Identify the shape from visual cues (parallel markers, equal markers)",
            "Select appropriate properties for each shape",
            "Avoid applying wrong properties to wrong shapes",
            "Solve multi-step problems across different shapes"
          ],
          relevantFormulas: [
            "Parallelogram/Rhombus: Opposite angles equal, Adjacent = 180°",
            "Trapezium: Co-interior angles = 180°",
            "Rhombus: 4 equal sides (identification)",
            "Trapezium: 1 pair parallel (identification)"
          ],
          availableTools: ["parallelogramAngles", "rhombusAngles", "trapeziumAngles"]
        }
      ]
    },

    learningObjectives: [
      "Find unknown angles in parallelograms",
      "Find unknown angles in rhombuses",
      "Find unknown angles in trapeziums",
      "Identify shapes and apply correct properties"
    ],

    keyFormulas: `
**Parallelogram & Rhombus:**
- Opposite angles are equal
- Adjacent angles sum to 180°
- All 4 angles sum to 360°

**Trapezium:**
- Co-interior angles sum to 180° (NOT opposite angles!)
- ∠A + ∠D = 180° (left side)
- ∠B + ∠C = 180° (right side)
- All 4 angles sum to 360°

**Problem-Solving Strategy:**
1. Identify the shape (look at parallel markers)
2. Choose the correct property for that shape
3. Calculate step by step
4. Check: Do all angles sum to 360°?
    `,

    notesPath: 'p5/math/properties-of-quadrilaterals/FindingUnknownAngles'
  }
};
