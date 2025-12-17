/**
 * P5 Mathematics - Angles Topic Configuration
 *
 * Comprehensive configuration for teaching angle properties:
 * - Angles on a straight line (sum = 180°)
 * - Vertically opposite angles (equal)
 * - Angles at a point (sum = 360°)
 * - Finding unknown angles (combined properties)
 *
 * Target audience: Primary 5 students (10-11 years old)
 */

// Type exports
export type P5AnglesTopicId =
  | 'p5-math-angles-straight-line'
  | 'p5-math-angles-vertically-opposite'
  | 'p5-math-angles-at-point'
  | 'p5-math-angles-finding-unknown';

// Topic-specific tutor customization
export const P5_ANGLES_CONFIG = {
  teachingPhilosophy: `You are a friendly and encouraging mathematics tutor for Primary 5 students learning about angle properties.

Teaching Approach:
- Use simple, age-appropriate language suitable for 10-11 year olds
- Build understanding step by step: first understand the property, then apply it
- Use visual diagrams to help students see the angles clearly
- Connect to real-world contexts: clock faces, road junctions, wind turbines, scissors
- Emphasize the THREE key properties:
  1. Angles on a straight line sum to 180°
  2. Vertically opposite angles are equal
  3. Angles at a point sum to 360°
- For complex problems, help students identify which property to use
- Encourage students to show their working and state which property they used
- Celebrate when students correctly identify angle relationships

**Text-to-Speech Guidelines:**
- Say "degrees" not the degree symbol
- Say "angle A O B" not "angle AOB" as one word
- Say "vertically opposite" clearly
- Spell out "perpendicular" as "per-pen-DIC-you-lar" if needed
- For formulas: say "one hundred eighty degrees" not "180 degrees symbol"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation`,

  visualToolsGuidance: `Use pre-built visual tools when they help understanding.
IMPORTANT: Use the technical name in the toolName field, NOT the display name.

Available tools for this topic:
- anglesOnLine: Shows 2-4 angles on a straight line with sum = 180°. Use for angles on a straight line problems.
- verticallyOppositeAngles: Shows two intersecting lines forming 4 angles. Use for vertically opposite angle problems.
- anglesAtPoint: Shows 2-6 angles meeting at a point with sum = 360°. Use for angles at a point problems.

Tool usage guidelines:
- Use anglesOnLine when teaching about straight line angles or finding unknown angles on a line
- Use verticallyOppositeAngles when showing intersecting lines and their equal opposite angles
- Use anglesAtPoint when showing angles around a central point
- Set highlight parameter to emphasize the unknown angle being solved for
- Use labels array to show angle names or values (e.g., ['a', '50°', 'b'])
- Use null in angles array for unknown angles (tool will calculate them)
- Always include helpful captions explaining the diagram
- DO NOT show calculations in visualizations - student figures those out`
};

// Available math tools for this topic
export const P5_ANGLES_MATH_TOOLS = [
  "anglesOnLine",
  "verticallyOppositeAngles",
  "anglesAtPoint"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const P5_MATH_ANGLES_SUBTOPICS = {

  'p5-math-angles-straight-line': {
    displayName: 'Angles on a Straight Line',
    topicName: 'angles on a straight line summing to 180 degrees',

    progressionStructure: {
      sections: [
        {
          id: "understanding-straight-line",
          title: "Understanding Angles on a Straight Line",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student understands that angles on a straight line sum to 180° and can identify such angles in diagrams in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of angles on a straight line",
                "States property correctly without prompting"
              ],
              qualitative: [
                "Correctly identifies when angles are on a straight line",
                "States 'angles on a straight line sum to 180°'",
                "Understands that a straight line = 180°",
                "Can identify the point where angles meet on the line",
                "Recognizes this property in different orientations"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about 180°",
                "Needs reminder about the property"
              ],
              qualitative: [
                "Knows angles add up but forgets to say 180°",
                "Identifies angles but unsure if they're on a straight line",
                "Needs visual support to see the straight line",
                "Confuses with angles at a point (360°)"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot identify angles on a straight line"
              ],
              qualitative: [
                "Does not know what 'angles on a straight line' means",
                "Does not connect straight line with 180°",
                "Cannot identify where angles meet",
                "Guesses random values"
              ]
            }
          },
          learningObjectives: [
            "Understand that a straight line represents 180°",
            "Identify angles that are on a straight line",
            "State that angles on a straight line sum to 180°"
          ],
          relevantFormulas: [
            "Angles on a straight line sum to 180°",
            "∠a + ∠b = 180° (for two angles on a line)"
          ],
          availableTools: ["anglesOnLine"]
        },
        {
          id: "two-angles-straight-line",
          title: "Finding Unknown Angle (Two Angles)",
          difficulty: "foundational",
          prerequisites: ["understanding-straight-line"],
          masterySignals: "Student correctly finds an unknown angle when given one angle on a straight line in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations without hints",
                "Consistent accuracy with different angle values"
              ],
              qualitative: [
                "Sets up equation correctly: unknown = 180° - known angle",
                "Calculates subtraction accurately",
                "States 'angles on a straight line sum to 180°' in working",
                "Uses correct units (degrees) in answer"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about the 180° property",
                "Makes occasional calculation errors"
              ],
              qualitative: [
                "Knows angles sum to 180° but needs reminding",
                "Sets up equation with help",
                "Makes arithmetic errors in subtraction",
                "Forgets to write degree symbol"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot complete without full solution shown"
              ],
              qualitative: [
                "Does not recognize that angles sum to 180°",
                "Adds angles instead of subtracting from 180°",
                "Guesses random values",
                "Does not understand what 'on a straight line' means"
              ]
            }
          },
          learningObjectives: [
            "Calculate an unknown angle when one angle is given",
            "Apply the formula: unknown = 180° - known angle",
            "Show working with property stated"
          ],
          relevantFormulas: [
            "Unknown angle = 180° - known angle",
            "If ∠a + ∠b = 180°, then ∠a = 180° - ∠b"
          ],
          availableTools: ["anglesOnLine"]
        },
        {
          id: "multiple-angles-straight-line",
          title: "Finding Unknown Angle (Three or More Angles)",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["two-angles-straight-line"],
          masterySignals: "Student correctly finds an unknown angle when given 2+ angles on a straight line in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct with 3 or more angles",
                "Shows clear working with all steps"
              ],
              qualitative: [
                "Correctly sums all known angles first",
                "Subtracts total from 180° accurately",
                "Handles problems with 3, 4, or more angles",
                "States property in working",
                "Organizes working clearly"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on adding known angles",
                "Struggles with more than 3 angles"
              ],
              qualitative: [
                "Adds some known angles but misses one",
                "Makes arithmetic errors in multi-step calculation",
                "Gets confused with many angles",
                "Correct approach but careless errors"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot organize multi-step calculation"
              ],
              qualitative: [
                "Does not know to add all known angles first",
                "Subtracts each angle separately from 180°",
                "Gets completely lost with 3+ angles",
                "Cannot keep track of calculations"
              ]
            }
          },
          learningObjectives: [
            "Sum multiple known angles on a straight line",
            "Find unknown angle by subtracting sum from 180°",
            "Organize multi-step working clearly"
          ],
          relevantFormulas: [
            "Unknown = 180° - (sum of all known angles)",
            "∠a + ∠b + ∠c + ... = 180°"
          ],
          availableTools: ["anglesOnLine"]
        }
      ]
    },

    learningObjectives: [
      "Understand that angles on a straight line sum to 180°",
      "Find unknown angles when one or more angles are given",
      "Apply the property to solve problems with multiple angles"
    ],

    keyFormulas: `
**Key Property:**
- Angles on a straight line sum to 180°

**Finding Unknown Angles:**
- Unknown = 180° − (sum of known angles)
- If two angles: ∠a = 180° − ∠b
- If three angles: ∠a = 180° − ∠b − ∠c

**Important:**
- Always state the property in your working
- Check: do all angles add to 180°?
    `
  },

  'p5-math-angles-vertically-opposite': {
    displayName: 'Vertically Opposite Angles',
    topicName: 'vertically opposite angles being equal',

    progressionStructure: {
      sections: [
        {
          id: "understanding-vertically-opposite",
          title: "Understanding Vertically Opposite Angles",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student understands that when two lines intersect, they form 4 angles, and vertically opposite angles are equal in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of vertically opposite angles",
                "States property correctly"
              ],
              qualitative: [
                "Identifies the two pairs of vertically opposite angles",
                "States 'vertically opposite angles are equal'",
                "Understands that opposite means across from each other",
                "Can identify all 4 angles formed by intersecting lines"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with visual support",
                "Identifies one pair but not both"
              ],
              qualitative: [
                "Knows concept but struggles to identify pairs",
                "Confuses 'opposite' with 'adjacent'",
                "Can state property when prompted",
                "Needs diagram to understand"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot identify vertically opposite angles"
              ],
              qualitative: [
                "Does not understand 'vertically opposite'",
                "Thinks all 4 angles are equal",
                "Cannot see how lines intersect",
                "Does not connect to equality property"
              ]
            }
          },
          learningObjectives: [
            "Understand what happens when two straight lines intersect",
            "Identify the two pairs of vertically opposite angles",
            "State that vertically opposite angles are equal"
          ],
          relevantFormulas: [
            "Vertically opposite angles are equal",
            "If lines AB and CD intersect: ∠AOC = ∠BOD and ∠AOD = ∠BOC"
          ],
          availableTools: ["verticallyOppositeAngles"]
        },
        {
          id: "identifying-pairs",
          title: "Identifying Vertically Opposite Pairs",
          difficulty: "foundational",
          prerequisites: ["understanding-vertically-opposite"],
          masterySignals: "Student can correctly identify both pairs of vertically opposite angles in various diagrams in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct pair identifications",
                "Identifies both pairs consistently"
              ],
              qualitative: [
                "Names both pairs correctly (e.g., ∠a = ∠c, ∠b = ∠d)",
                "Works with different line orientations",
                "Can identify pairs in complex diagrams",
                "Recognizes pairs even when lines are not horizontal/vertical"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct but inconsistent",
                "Often identifies only one pair"
              ],
              qualitative: [
                "Finds one pair but forgets there are two",
                "Gets confused with rotated diagrams",
                "Needs to trace lines to identify pairs",
                "Slower but accurate when careful"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot reliably identify pairs"
              ],
              qualitative: [
                "Points to adjacent angles instead of opposite",
                "Cannot visualize the intersection",
                "Does not understand 'pair' concept",
                "Gets confused by angle labels"
              ]
            }
          },
          learningObjectives: [
            "Identify both pairs of vertically opposite angles",
            "Work with diagrams in different orientations",
            "Name angle pairs using correct notation"
          ],
          relevantFormulas: [
            "Two lines intersecting form two pairs of equal angles",
            "Opposite pairs: top-bottom and left-right"
          ],
          availableTools: ["verticallyOppositeAngles"]
        },
        {
          id: "finding-unknown-vert-opp",
          title: "Finding Unknown Angles",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["identifying-pairs"],
          masterySignals: "Student correctly finds unknown angles using the vertically opposite property, possibly combined with angles on a straight line, in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct using vertically opposite property",
                "Combines with straight line property when needed"
              ],
              qualitative: [
                "Uses vertically opposite property correctly",
                "Combines properties to find all unknown angles",
                "Shows clear working with properties stated",
                "Finds all 4 angles from one given angle"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Can use one property but struggles to combine"
              ],
              qualitative: [
                "Finds equal angle but forgets adjacent angles",
                "Needs prompting to use multiple properties",
                "Gets correct answer but working incomplete",
                "Makes errors when combining properties"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot apply the property"
              ],
              qualitative: [
                "Does not know how to start",
                "Tries to guess or use wrong property",
                "Cannot connect given information to unknowns",
                "Does not see relationships between angles"
              ]
            }
          },
          learningObjectives: [
            "Find unknown angles using vertically opposite property",
            "Combine with angles on a straight line when needed",
            "Find all 4 angles from one given angle"
          ],
          relevantFormulas: [
            "If ∠a = 40°, then vertically opposite ∠c = 40°",
            "Adjacent ∠b = 180° - 40° = 140°",
            "Vertically opposite ∠d = 140°"
          ],
          availableTools: ["verticallyOppositeAngles", "anglesOnLine"]
        }
      ]
    },

    learningObjectives: [
      "Understand that vertically opposite angles are equal",
      "Identify both pairs of vertically opposite angles",
      "Find unknown angles using this property"
    ],

    keyFormulas: `
**Key Property:**
- Vertically opposite angles are EQUAL

**Two Lines Intersecting:**
- Form 4 angles at the intersection point
- Two pairs of equal angles
- Adjacent angles sum to 180°

**Finding Unknown Angles:**
- Vertically opposite angle = given angle
- Adjacent angle = 180° - given angle
    `
  },

  'p5-math-angles-at-point': {
    displayName: 'Angles at a Point',
    topicName: 'angles at a point summing to 360 degrees',

    progressionStructure: {
      sections: [
        {
          id: "understanding-angles-point",
          title: "Understanding Angles at a Point",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student understands that angles at a point sum to 360° and can identify such angles in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of angles at a point",
                "States property correctly"
              ],
              qualitative: [
                "Correctly identifies when angles are at a point",
                "States 'angles at a point sum to 360°'",
                "Understands connection to a full circle",
                "Can count all angles meeting at the point"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about 360°",
                "Confuses with other properties"
              ],
              qualitative: [
                "Knows angles add up but unsure of total",
                "Confuses with angles on a straight line (180°)",
                "Needs visual support to see the point",
                "Understands after explanation"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot identify angles at a point"
              ],
              qualitative: [
                "Does not know what 'angles at a point' means",
                "Does not connect to 360° or full circle",
                "Cannot identify the common point",
                "Guesses random totals (180°, 90°, etc.)"
              ]
            }
          },
          learningObjectives: [
            "Understand that angles at a point sum to 360°",
            "Connect this to a full circle (360°)",
            "Identify angles meeting at a common point"
          ],
          relevantFormulas: [
            "Angles at a point sum to 360°",
            "A full circle = 360°"
          ],
          availableTools: ["anglesAtPoint"]
        },
        {
          id: "finding-unknown-point",
          title: "Finding Unknown Angles at a Point",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["understanding-angles-point"],
          masterySignals: "Student correctly finds unknown angles at a point in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations",
                "Shows clear working"
              ],
              qualitative: [
                "Sets up equation correctly: unknown = 360° - sum of known",
                "Calculates accurately",
                "States 'angles at a point sum to 360°'",
                "Handles 3, 4, or more angles"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Makes calculation errors"
              ],
              qualitative: [
                "Knows to subtract from 360° but makes errors",
                "Forgets to add all known angles first",
                "Gets confused with many angles",
                "Correct approach but careless errors"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot apply the property"
              ],
              qualitative: [
                "Uses wrong total (180° instead of 360°)",
                "Does not know how to set up calculation",
                "Cannot organize multi-step work",
                "Gives up when there are many angles"
              ]
            }
          },
          learningObjectives: [
            "Find unknown angle by subtracting sum of known angles from 360°",
            "Work with multiple angles at a point",
            "Show clear working with property stated"
          ],
          relevantFormulas: [
            "Unknown = 360° - (sum of known angles)",
            "∠a + ∠b + ∠c + ... = 360°"
          ],
          availableTools: ["anglesAtPoint"]
        },
        {
          id: "equal-angles-point",
          title: "Equal Angles at a Point",
          difficulty: "intermediate",
          prerequisites: ["finding-unknown-point"],
          masterySignals: "Student correctly finds the size of equal angles at a point (e.g., clock hands, turbine blades) in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct with equal angle problems",
                "Uses division correctly"
              ],
              qualitative: [
                "Sets up: each angle = 360° ÷ number of angles",
                "Calculates division accurately",
                "Connects to real-world examples (clock, turbine)",
                "Can work backwards (given angle, find number of parts)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Struggles with division"
              ],
              qualitative: [
                "Knows to divide but makes errors",
                "Gets confused by problem wording",
                "Needs help identifying equal angles",
                "Correct approach but arithmetic errors"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot set up division"
              ],
              qualitative: [
                "Does not realize angles are equal",
                "Tries to subtract instead of divide",
                "Cannot connect to 360° total",
                "Does not understand 'equally spaced'"
              ]
            }
          },
          learningObjectives: [
            "Find equal angles when they divide 360° evenly",
            "Apply to real-world contexts (clock, turbine, etc.)",
            "Work backwards from angle size to number of parts"
          ],
          relevantFormulas: [
            "Each angle = 360° ÷ number of equal angles",
            "Clock: 12 hours = 360° ÷ 12 = 30° per hour",
            "Wind turbine: 3 blades = 360° ÷ 3 = 120° per blade"
          ],
          availableTools: ["anglesAtPoint"]
        }
      ]
    },

    learningObjectives: [
      "Understand that angles at a point sum to 360°",
      "Find unknown angles at a point",
      "Work with equal angles dividing 360°"
    ],

    keyFormulas: `
**Key Property:**
- Angles at a point sum to 360°

**Finding Unknown Angles:**
- Unknown = 360° - (sum of known angles)

**Equal Angles:**
- Each angle = 360° ÷ number of equal angles
- Example: 4 equal angles = 360° ÷ 4 = 90° each
    `
  },

  'p5-math-angles-finding-unknown': {
    displayName: 'Finding Unknown Angles',
    topicName: 'combining angle properties to find unknown angles',

    progressionStructure: {
      sections: [
        {
          id: "identifying-relationships",
          title: "Identifying Angle Relationships",
          difficulty: "foundational-to-intermediate",
          prerequisites: [],
          masterySignals: "Student can identify which angle property to use in a given problem in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct property identifications",
                "Identifies multiple relationships in complex diagrams"
              ],
              qualitative: [
                "Correctly identifies angles on a straight line",
                "Correctly identifies vertically opposite angles",
                "Correctly identifies angles at a point",
                "Can see multiple relationships in one diagram"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct but inconsistent",
                "Identifies some but not all relationships"
              ],
              qualitative: [
                "Identifies one property but misses others",
                "Gets confused with complex diagrams",
                "Needs hints to see all relationships",
                "Takes time but gets there"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect identifications",
                "Cannot choose correct property"
              ],
              qualitative: [
                "Confuses the three properties",
                "Cannot see patterns in diagrams",
                "Guesses which property to use",
                "Does not know properties well enough"
              ]
            }
          },
          learningObjectives: [
            "Identify which angle property applies to a given situation",
            "Recognize multiple angle relationships in one diagram",
            "Choose the correct property to use"
          ],
          relevantFormulas: [
            "Angles on a straight line: sum = 180°",
            "Vertically opposite angles: equal",
            "Angles at a point: sum = 360°"
          ],
          availableTools: ["anglesOnLine", "verticallyOppositeAngles", "anglesAtPoint"]
        },
        {
          id: "multi-step-problems",
          title: "Multi-Step Problems",
          difficulty: "intermediate",
          prerequisites: ["identifying-relationships"],
          masterySignals: "Student correctly solves problems requiring multiple steps and properties in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multi-step solutions",
                "Uses multiple properties correctly"
              ],
              qualitative: [
                "Finds intermediate angles as needed",
                "Uses one result to find another",
                "Shows clear step-by-step working",
                "States each property used",
                "Organizes work logically"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on order of steps",
                "Gets stuck after first step"
              ],
              qualitative: [
                "Does first step correctly but loses track",
                "Needs prompting for next step",
                "Working is disorganized",
                "Correct final answer but messy working"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot complete multi-step problems"
              ],
              qualitative: [
                "Does not know where to start",
                "Cannot see how steps connect",
                "Gets overwhelmed by complexity",
                "Gives up before completing"
              ]
            }
          },
          learningObjectives: [
            "Solve problems requiring multiple angle properties",
            "Use intermediate results to find final answers",
            "Show clear, organized working"
          ],
          relevantFormulas: [
            "Use vertically opposite first, then straight line",
            "Find one angle, then use it to find others",
            "Always state which property you are using"
          ],
          availableTools: ["anglesOnLine", "verticallyOppositeAngles", "anglesAtPoint"]
        },
        {
          id: "multiple-methods",
          title: "Multiple Solution Methods",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["multi-step-problems"],
          masterySignals: "Student can solve problems using different methods and verify answers in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ problems solved with alternative methods",
                "Verifies answers using different approach"
              ],
              qualitative: [
                "Finds multiple valid solution paths",
                "Uses alternative method to check answer",
                "Explains why both methods work",
                "Chooses more efficient method",
                "Confident with flexibility in approach"
              ]
            },
            developing: {
              quantitative: [
                "1-2 problems solved one way",
                "Can see alternative after being shown"
              ],
              qualitative: [
                "Finds one solution but not alternatives",
                "Can follow alternative method when shown",
                "Does not think to verify answers",
                "Sticks to familiar approach"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot find even one solution method",
                "Gets confused by multiple approaches"
              ],
              qualitative: [
                "Does not see alternative paths",
                "Gets confused when shown different method",
                "Cannot verify answers",
                "Lacks flexibility in problem-solving"
              ]
            }
          },
          learningObjectives: [
            "Find multiple valid solution paths",
            "Use alternative methods to verify answers",
            "Choose the most efficient method"
          ],
          relevantFormulas: [
            "Method 1: Start with vertically opposite, then straight line",
            "Method 2: Start with straight line, then vertically opposite",
            "Both methods should give the same answer"
          ],
          availableTools: ["anglesOnLine", "verticallyOppositeAngles", "anglesAtPoint"]
        }
      ]
    },

    learningObjectives: [
      "Identify which angle property to use",
      "Solve multi-step problems using multiple properties",
      "Verify answers using alternative methods"
    ],

    keyFormulas: `
**Summary of Properties:**
1. Angles on a straight line = 180°
2. Vertically opposite angles = equal
3. Angles at a point = 360°

**Problem-Solving Strategy:**
1. Identify all straight lines
2. Look for intersecting lines (vertically opposite)
3. Look for angles meeting at a point
4. Solve step by step
5. State each property used
6. Check with alternative method if possible
    `
  }
};
