/**
 * S3 Mathematics - Trigonometry Topic Configuration
 *
 * Clean topic configuration using the new prompt library architecture.
 * Inherits from base agents, formatting rules, and interaction protocols.
 */

// Type exports
export type TrigonometryTopicId =
  | 's3-math-trigonometry-basic-ratios'
  | 's3-math-trigonometry-problem-solving'
  | 's3-math-trigonometry-true-bearings'
  | 's3-math-trigonometry-obtuse-angles'
  | 's3-math-trigonometry-area-of-triangle'
  | 's3-math-trigonometry-sine-rule'
  | 's3-math-trigonometry-cosine-rule';

// Topic-specific tutor customization (overrides base)
export const TRIGONOMETRY_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary school students learning Trigonometry.

Teaching Approach:
- Guide students to discover solutions through questioning, not direct instruction
- Provide progressive hints only when students are stuck
- Celebrate insights and encourage perseverance
- Use relatable, real-world contexts

**Text-to-Speech Guidelines:**
- Use "S O H, C A H, T O A" instead of "SOH-CAH-TOA" for proper pronunciation
- Avoid acronyms that might be mispronounced - spell them out with spaces
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use "SOH-CAH-TOA" normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding (not for every question).
IMPORTANT: Use the technical name (e.g., "generalTriangle") in the toolName field, NOT the display name.`
};

// Available math tools for this topic
export const TRIGONOMETRY_MATH_TOOLS = [
  "rightTriangle",
  "elevationDepression",
  "multipleDepressionAngles",
  "generalTriangle",
  "extendedLineTriangle",
  "cuboid",
  "pyramid",
  "bearings",
  "quadrilateral"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S3_MATH_TRIGONOMETRY_SUBTOPICS = {

  's3-math-trigonometry-basic-ratios': {
    displayName: 'Trigonometric Ratios',
    topicName: 'trigonometric ratios (sine, cosine, tangent)',

    progressionStructure: {
      sections: [
        {
          id: "triangle-labeling",
          title: "Triangle Labeling (Foundation)",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies all three sides (opposite, adjacent, hypotenuse) in 2+ different triangle configurations with minimal hints",
          estimatedQuestions: "3-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2+ correct identifications without hints",
                "Consistent across different triangle orientations"
              ],
              qualitative: [
                "Uses correct terminology (opposite, adjacent, hypotenuse)",
                "Self-corrects when given minimal prompts",
                "Explains why each side is labeled relative to the angle"
              ]
            },
            developing: {
              quantitative: ["1 correct identification with hints"],
              qualitative: [
                "Partial understanding of side relationships",
                "Needs prompting for correct terminology",
                "Can identify hypotenuse but struggles with opposite/adjacent"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Requests solution early"],
              qualitative: [
                "Confuses opposite and adjacent consistently",
                "Cannot explain why sides are labeled as such",
                "Does not recognize hypotenuse as longest side"
              ]
            }
          },
          learningObjectives: [
            "Identify the hypotenuse (longest side, opposite the right angle)",
            "Identify the opposite side (opposite to the angle being considered)",
            "Identify the adjacent side (next to the angle, but not the hypotenuse)",
            "Label sides correctly relative to any given angle in a right triangle"
          ],
          relevantFormulas: [],
          availableTools: ["rightTriangle"]
        },
        {
          id: "basic-ratios",
          title: "The Three Primary Trigonometric Ratios",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["triangle-labeling"],
          masterySignals: "Student correctly recalls and applies SOH-CAH-TOA to identify which ratio to use in 2-3 problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 correct ratio selections without hints",
                "Consistent application across problem variations"
              ],
              qualitative: [
                "Recalls SOH-CAH-TOA mnemonic correctly",
                "Selects appropriate ratio for given sides/angle",
                "Explains why specific ratio applies to the problem"
              ]
            },
            developing: {
              quantitative: ["1 correct with hints"],
              qualitative: [
                "Partial recall of ratios (e.g., remembers sine but not cosine)",
                "Needs prompting for ratio selection",
                "Shows understanding but lacks confidence"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Cannot select ratio without hints"],
              qualitative: [
                "Confuses sin/cos/tan definitions",
                "Cannot match ratio to given triangle sides",
                "Does not understand mnemonic connection to formulas"
              ]
            }
          },
          learningObjectives: [
            "Recall and state: sin θ = Opposite / Hypotenuse",
            "Recall and state: cos θ = Adjacent / Hypotenuse",
            "Recall and state: tan θ = Opposite / Adjacent",
            "Apply the SOH-CAH-TOA mnemonic to select the correct ratio",
            "Understand that these ratios are constant for a given angle (similar triangles principle)"
          ],
          relevantFormulas: [
            "sin θ = O/H (Sine = Opposite / Hypotenuse)",
            "cos θ = A/H (Cosine = Adjacent / Hypotenuse)",
            "tan θ = O/A (Tangent = Opposite / Adjacent)",
            "SOH-CAH-TOA mnemonic"
          ],
          availableTools: ["rightTriangle"]
        },
        {
          id: "side-calculations",
          title: "Finding Unknown Side Lengths",
          difficulty: "intermediate",
          prerequisites: ["basic-ratios"],
          masterySignals: "Student sets up correct equation, rearranges, and solves for unknown side in 2-3 problems with minimal hints",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 correct solutions with minimal hints",
                "Consistent equation setup and rearrangement"
              ],
              qualitative: [
                "Correctly identifies which ratio to use",
                "Sets up equation accurately (e.g., sin(35°) = x/10)",
                "Rearranges algebraically to solve for unknown",
                "Uses calculator correctly in degree mode"
              ]
            },
            developing: {
              quantitative: ["1 correct with hints on rearrangement"],
              qualitative: [
                "Selects correct ratio but struggles with algebra",
                "Needs prompting for equation rearrangement",
                "Calculator errors or rounding issues"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Cannot rearrange equation"],
              qualitative: [
                "Selects wrong ratio for the problem",
                "Cannot set up equation from word problem",
                "Does not understand algebraic manipulation needed"
              ]
            }
          },
          learningObjectives: [
            "Identify which ratio to use based on given and unknown sides",
            "Set up correct equations (e.g., sin(35°) = x/10)",
            "Rearrange equations to solve for the unknown side",
            "Calculate using calculator with proper degree mode",
            "Round answers appropriately for context"
          ],
          relevantFormulas: [
            "sin θ = O/H → O = H × sin θ",
            "cos θ = A/H → A = H × cos θ",
            "tan θ = O/A → O = A × tan θ"
          ],
          availableTools: ["rightTriangle"]
        },
        {
          id: "angle-calculations",
          title: "Finding Unknown Angles",
          difficulty: "intermediate",
          prerequisites: ["side-calculations"],
          masterySignals: "Student correctly uses inverse trig functions (sin⁻¹, cos⁻¹, tan⁻¹) in 2-3 problems",
          estimatedQuestions: "3-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 correct angle calculations without hints",
                "Consistent use of inverse functions"
              ],
              qualitative: [
                "Selects correct inverse function for given sides",
                "Understands inverse functions 'undo' the trig operation",
                "Correctly interprets calculator output as angle",
                "Verifies answer makes sense in context"
              ]
            },
            developing: {
              quantitative: ["1 correct with hints"],
              qualitative: [
                "Knows to use inverse but unsure which one",
                "Needs prompting for correct inverse selection",
                "Calculator mode errors (radians vs degrees)"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Cannot select inverse function"],
              qualitative: [
                "Does not understand concept of inverse functions",
                "Tries to use regular trig functions to find angles",
                "Cannot interpret calculator output correctly"
              ]
            }
          },
          learningObjectives: [
            "Apply inverse trigonometric functions: sin⁻¹, cos⁻¹, tan⁻¹",
            "Understand when to use each inverse function",
            "Recognize that inverse functions 'undo' the trigonometric operation",
            "Ensure calculator is in degree mode",
            "Interpret angle results in context"
          ],
          relevantFormulas: [
            "θ = sin⁻¹(O/H) - find angle given opposite and hypotenuse",
            "θ = cos⁻¹(A/H) - find angle given adjacent and hypotenuse",
            "θ = tan⁻¹(O/A) - find angle given opposite and adjacent"
          ],
          availableTools: ["rightTriangle"]
        },
        {
          id: "special-angles",
          title: "Special Angles and Exact Values",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["basic-ratios"],
          masterySignals: "Student recalls exact values for 30°, 45°, 60° without calculator in 3+ cases and recognizes complementary relationships",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct exact values recalled without calculator",
                "Recognizes complementary relationships consistently"
              ],
              qualitative: [
                "Recalls exact values for 30°, 45°, 60° accurately",
                "Understands why sin(30°) = cos(60°) (complementary)",
                "Can simplify expressions using exact values",
                "Recognizes patterns in special angle values"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with prompting"],
              qualitative: [
                "Recalls some values but not all",
                "Needs hints for complementary relationships",
                "Struggles with simplification without calculator"
              ]
            },
            struggling: {
              quantitative: ["Cannot recall values without calculator"],
              qualitative: [
                "Does not know exact values for special angles",
                "Does not recognize complementary relationships",
                "Relies entirely on calculator for all angles"
              ]
            }
          },
          learningObjectives: [
            "Recall exact values for 0°, 30°, 45°, 60°, 90°",
            "Recognize patterns: sin(30°) = 1/2, cos(30°) = √3/2, tan(30°) = 1/√3",
            "Recognize patterns: sin(45°) = cos(45°) = √2/2, tan(45°) = 1",
            "Recognize patterns: sin(60°) = √3/2, cos(60°) = 1/2, tan(60°) = √3",
            "Understand complementary angle relationships: sin(30°) = cos(60°), sin(60°) = cos(30°)",
            "Simplify expressions using exact values without calculator"
          ],
          relevantFormulas: [
            "sin(30°) = 1/2, cos(30°) = √3/2, tan(30°) = 1/√3",
            "sin(45°) = √2/2, cos(45°) = √2/2, tan(45°) = 1",
            "sin(60°) = √3/2, cos(60°) = 1/2, tan(60°) = √3",
            "sin(0°) = 0, cos(0°) = 1, tan(0°) = 0",
            "sin(90°) = 1, cos(90°) = 0, tan(90°) = undefined"
          ],
          availableTools: ["rightTriangle"]
        },
        {
          id: "word-problems",
          title: "Real-World Problem Solving",
          difficulty: "advanced",
          prerequisites: ["side-calculations", "angle-calculations"],
          masterySignals: "Student independently solves 2-3 word problems with correct diagram setup, ratio selection, and practical interpretation",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "2-3 word problems solved independently without hints",
                "Consistent accuracy across different contexts"
              ],
              qualitative: [
                "Correctly interprets word problem into triangle diagram",
                "Selects appropriate ratio for the real-world scenario",
                "Interprets results with correct units and context",
                "Verifies answer is reasonable for the situation"
              ]
            },
            developing: {
              quantitative: ["1 correct with hints on setup"],
              qualitative: [
                "Understands concept but struggles with diagram setup",
                "Needs prompting to identify which sides/angles are given",
                "Can solve once diagram is clarified"
              ]
            },
            struggling: {
              quantitative: ["Cannot solve word problems independently"],
              qualitative: [
                "Cannot translate word problem into triangle",
                "Does not recognize real-world context as trig problem",
                "Cannot identify which information is given vs unknown"
              ]
            }
          },
          learningObjectives: [
            "Solve height and distance problems (ladders against walls, building heights)",
            "Solve angle of elevation scenarios (looking up at objects)",
            "Apply trigonometry to ramps, slopes, and inclines",
            "Use trigonometry in construction, surveying, and navigation contexts",
            "Interpret results in practical context with appropriate units",
            "Verify answers are reasonable for the situation"
          ],
          relevantFormulas: [
            "sin θ = O/H, cos θ = A/H, tan θ = O/A (applied to real-world contexts)",
            "θ = sin⁻¹(O/H), θ = cos⁻¹(A/H), θ = tan⁻¹(O/A) (for finding angles)"
          ],
          availableTools: ["rightTriangle"]
        }
      ]
    },

    learningObjectives: `Students will progress through 6 sections:
                        1. Triangle Labeling (foundational) - Identify opposite, adjacent, hypotenuse
                        2. Basic Ratios (foundational→intermediate) - Learn sine, cosine, tangent definitions
                        3. Side Calculations (intermediate) - Find unknown sides using trig ratios
                        4. Angle Calculations (intermediate) - Find angles using inverse functions
                        5. Special Angles (intermediate→advanced) - Master exact values for 30°, 45°, 60°
                        6. Real-World Problems (advanced) - Apply to height, distance, elevation scenarios`,

    keyFormulas: `• sin θ = O/H    (Sine = Opposite / Hypotenuse)
                  • cos θ = A/H    (Cosine = Adjacent / Hypotenuse)
                  • tan θ = O/A    (Tangent = Opposite / Adjacent)
                  • θ = sin⁻¹(O/H), θ = cos⁻¹(A/H), θ = tan⁻¹(O/A)    (Inverse functions)

                  Special Angle Values:
                  • sin(30°) = 1/2, cos(30°) = √3/2, tan(30°) = 1/√3
                  • sin(45°) = √2/2, cos(45°) = √2/2, tan(45°) = 1
                  • sin(60°) = √3/2, cos(60°) = 1/2, tan(60°) = √3`
                    },

  's3-math-trigonometry-problem-solving': {
    displayName: 'Problem Solving Using Trigonometry',
    topicName: 'problem solving using trigonometry',

    progressionStructure: {
      sections: [
        {
          id: "elevation-depression-concepts",
          title: "Understanding Angles of Elevation and Depression",
          difficulty: "foundational",
          prerequisites: ["s3-math-trigonometry-basic-ratios"],
          masterySignals: "Student correctly identifies and distinguishes between angles of elevation and depression in 3+ scenarios, and understands they are alternate angles",
          estimatedQuestions: "3-4 questions",
          learningObjectives: [
            "Define angle of elevation (angle from horizontal UP to an object)",
            "Define angle of depression (angle from horizontal DOWN to an object)",
            "Identify the horizontal line of sight in diagrams",
            "Understand that angle of depression from A to B equals angle of elevation from B to A (alternate angles)",
            "Draw clear diagrams showing elevation/depression angles"
          ],
          relevantFormulas: [
            "sin θ = O/H, cos θ = A/H, tan θ = O/A (applied to elevation/depression contexts)"
          ],
          availableTools: ["generalTriangle", "elevationDepression"]
        },
        {
          id: "elevation-depression-calculations",
          title: "Solving Elevation and Depression Problems",
          difficulty: "intermediate",
          prerequisites: ["elevation-depression-concepts"],
          masterySignals: "Student solves 3+ elevation/depression problems correctly, selecting appropriate trig ratios and interpreting results in context",
          estimatedQuestions: "3-4 questions",
          learningObjectives: [
            "Set up right triangles from elevation/depression scenarios",
            "Identify which sides are given and unknown",
            "Select appropriate trigonometric ratio for the situation",
            "Calculate heights of buildings, towers, cliffs from ground observations",
            "Calculate distances from elevated observations (plane to ground, cliff to boat)",
            "Interpret results with appropriate units and context",
            "Generate some complex problems using sample problems below"
          ],
          sampleProblems: [
            {
              problem: "From a lookout point 50 meters above sea level, the angle of depression to a boat is 10°. How far is the boat from the base of the lookout?"
            },
            {
              problem: "A model helicopter takes off from the horizontal ground with a constant speed of 5 m/s. After 10 seconds, the angle of elevation from Sam to the helicopter is 62°. Given that Sam is 1.8 m tall, how far is Sam's head from the helicopter at this time?"
            },
            {
              problem: "A post was hit by lightning and snapped into two. The top part fell to the ground, making an angle of 30° with the ground and is 15 m from its base. How tall was the post before it was hit by lightning?"
            }
          ],
          relevantFormulas: [
            "tan θ = height / distance (common for elevation/depression)",
            "sin θ = O/H, cos θ = A/H (when hypotenuse is involved)"
          ],
          availableTools: ["generalTriangle", "elevationDepression"]
        },
        {
          id: "3d-visualization",
          title: "Visualizing 3D Problems",
          difficulty: "intermediate",
          prerequisites: ["elevation-depression-calculations"],
          masterySignals: "Student identifies the correct 2D plane within 3D shapes in 2+ problems and draws accurate 2D triangles",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "Visualize 3D shapes (cuboids, pyramids, prisms) and identify right-angled triangles within them",
            "Extract the relevant 2D triangle from the 3D shape",
            "Identify when to use Pythagoras first to find intermediate lengths (e.g., diagonal of base)",
            "Label all dimensions clearly (length, width, height)",
            "Understand space diagonals vs face diagonals"
          ],
          relevantFormulas: [
            "Pythagoras: c² = a² + b² (for finding diagonals)",
            "sin θ = O/H, cos θ = A/H, tan θ = O/A (in the extracted 2D triangle)"
          ],
          availableTools: ["generalTriangle", "cuboid", "pyramid"]
        },
        {
          id: "3d-problem-solving",
          title: "Solving 3D Trigonometry Problems",
          difficulty: "advanced",
          prerequisites: ["3d-visualization"],
          masterySignals: "Student independently solves 2-3 complex 3D problems, correctly combining Pythagoras and trigonometry",
          estimatedQuestions: "4-5 questions",
          learningObjectives: [
            "Solve for angles between lines and planes (e.g., diagonal to base)",
            "Solve for angles in cuboids, rectangular prisms",
            "Solve for lengths in pyramids and cones",
            "Apply multi-step reasoning (Pythagoras → Trigonometry)",
            "Verify answers make sense in 3D context"
          ],
          relevantFormulas: [
            "Step 1: Pythagoras to find base diagonal or intermediate length",
            "Step 2: Trig ratio to find angle or final length",
            "Common: tan θ = height / base_diagonal"
          ],
          availableTools: ["generalTriangle", "cuboid", "pyramid"]
        }
      ]
    },

    learningObjectives: `Students will progress through 4 sections:
1. Elevation/Depression Concepts (foundational) - Define and identify angles of elevation and depression
2. Elevation/Depression Calculations (intermediate) - Solve real-world height and distance problems
3. 3D Visualization (intermediate) - Extract 2D triangles from 3D shapes
4. 3D Problem Solving (advanced) - Solve complex multi-step 3D problems`,

    keyFormulas: `• sin θ = O/H, cos θ = A/H, tan θ = O/A
• tan θ = height / distance (common for elevation/depression)
• Pythagoras: c² = a² + b² (for finding diagonals in 3D)
• Multi-step approach: Pythagoras first, then trigonometry`
  },

  's3-math-trigonometry-true-bearings': {
    displayName: 'True Bearings',
    topicName: 'true bearings',

    progressionStructure: {
      sections: [
        {
          id: "bearing-fundamentals",
          title: "Understanding True Bearings",
          difficulty: "foundational",
          prerequisites: ["s3-math-trigonometry-basic-ratios"],
          masterySignals: "Student correctly reads and writes bearings in 3+ scenarios, always using 3 digits and measuring clockwise from North",
          estimatedQuestions: "3-4 questions",
          learningObjectives: [
            "Define bearing as direction measured clockwise from North",
            "Express bearings as 3-digit numbers (000° to 360°)",
            "Identify cardinal directions: North (000°), East (090°), South (180°), West (270°)",
            "Read bearings from diagrams with compass directions",
            "Write bearings correctly (e.g., 045° not 45°)"
          ],
          relevantFormulas: [
            "North = 000° or 360°",
            "East = 090°",
            "South = 180°",
            "West = 270°"
          ],
          availableTools: ["bearings"]
        },
        {
          id: "back-bearings",
          title: "Back Bearings and Reverse Directions",
          difficulty: "intermediate",
          prerequisites: ["bearing-fundamentals"],
          masterySignals: "Student calculates back bearings correctly in 3+ problems, applying add/subtract 180° rules accurately",
          estimatedQuestions: "3-4 questions",
          learningObjectives: [
            "Understand that back bearing is the reverse direction",
            "Apply rule: if bearing < 180°, add 180° for back bearing",
            "Apply rule: if bearing > 180°, subtract 180° for back bearing",
            "Recognize that bearing from A to B + bearing from B to A = 180° difference",
            "Verify answers make sense (opposite directions)"
          ],
          relevantFormulas: [
            "If bearing < 180°: back bearing = bearing + 180°",
            "If bearing ≥ 180°: back bearing = bearing - 180°"
          ],
          availableTools: ["bearings"]
        },
        {
          id: "bearing-diagrams",
          title: "Drawing and Interpreting Bearing Diagrams",
          difficulty: "intermediate",
          prerequisites: ["back-bearings"],
          masterySignals: "Student draws accurate bearing diagrams in 2-3 scenarios, correctly showing North lines and angles",
          estimatedQuestions: "3-4 questions",
          learningObjectives: [
            "Draw North lines at each location (parallel lines)",
            "Mark bearings correctly as clockwise angles from North",
            "Identify alternate angles between parallel North lines",
            "Use bearing diagrams to set up triangle problems",
            "Extract relevant angles from bearing information"
          ],
          relevantFormulas: [
            "Alternate angles are equal (when North lines are parallel)",
            "Angles in a triangle sum to 180°"
          ],
          availableTools: ["bearings"]
        },
        {
          id: "bearing-calculations",
          title: "Navigation Problems with Bearings",
          difficulty: "advanced",
          prerequisites: ["bearing-diagrams"],
          masterySignals: "Student solves 2-3 navigation problems combining bearings, distances, and trigonometry",
          estimatedQuestions: "3-4 questions",
          learningObjectives: [
            "Solve distance problems using bearings and trigonometry",
            "Calculate final position after multiple bearing changes",
            "Find distances between positions using sine/cosine rules",
            "Apply Pythagoras when paths are perpendicular",
            "Interpret results in navigation context (shortest distance, direction)"
          ],
          sampleProblems: [
            {
              problem: "A rally driver travels on the bearing 060° for 30 km, then changes to the bearing 120° for another 40 km. How far is the driver from the starting point?"
            },
            {
              problem: "A small plane departs A and flies on a bearing of 072° for 100 km to point B. It then changes course to a bearing of 144° and flies for another 100 km to point C. Calculate the distance from A to C."
            },
            {
              problem: "A kayaker paddles to a point 3.1 km south and 1.6 km west of her starting point. On what bearing must be paddled to return directly to the starting point?"
            }
          ],
          relevantFormulas: [
            "sin θ = O/H, cos θ = A/H, tan θ = O/A (in triangles formed by paths)",
            "Sine rule: a/sin A = b/sin B = c/sin C",
            "Cosine rule: c² = a² + b² - 2ab cos C (for non-right triangles)",
            "Pythagoras: c² = a² + b² (when paths meet at 90°)"
          ],
          availableTools: ["bearings", "generalTriangle"]
        }
      ]
    },

    learningObjectives: `Students will progress through 4 sections:
1. Bearing Fundamentals (foundational) - Define bearings, 3-digit format, cardinal directions
2. Back Bearings (intermediate) - Calculate reverse directions using ±180° rules
3. Bearing Diagrams (intermediate) - Draw and interpret diagrams with North lines
4. Navigation Calculations (advanced) - Solve multi-step navigation problems`,

    keyFormulas: `• Bearings: 000° to 360°, measured clockwise from North
• Cardinal directions: N=000°, E=090°, S=180°, W=270°
• Back bearing: Add 180° if < 180°, subtract 180° if ≥ 180°
• North lines are parallel → alternate angles are equal
• Use sine/cosine rules for navigation triangles`
  },

  's3-math-trigonometry-obtuse-angles': {
    displayName: 'Trigonometry with Obtuse Angles',
    topicName: 'trigonometry with obtuse angles',

    progressionStructure: {
      sections: [
        {
          id: "obtuse-angle-definition",
          title: "Understanding Obtuse Angles in Trigonometry",
          difficulty: "foundational",
          prerequisites: ["s3-math-trigonometry-basic-ratios"],
          masterySignals: "Student identifies obtuse angles correctly and understands the angle range 90° < θ < 180° in 2-3 scenarios",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "Define obtuse angles as angles between 90° and 180°",
            "Understand that obtuse angles cannot exist in right-angled triangles",
            "Recognize that obtuse angles appear in non-right triangles",
            "Identify when to extend trigonometry beyond 90°"
          ],
          relevantFormulas: ["Obtuse angle range: 90° < θ < 180°"],
          availableTools: ["generalTriangle"]
        },
        {
          id: "supplementary-relationships",
          title: "Supplementary Angle Relationships",
          difficulty: "intermediate",
          prerequisites: ["obtuse-angle-definition"],
          masterySignals: "Student correctly applies 180° - θ relationships for all three trig functions in 3+ problems",
          estimatedQuestions: "4-5 questions",
          learningObjectives: [
            "Understand that 180° - θ is the supplementary angle",
            "Apply: sin(180° - θ) = sin θ (sine stays positive)",
            "Apply: cos(180° - θ) = -cos θ (cosine becomes negative)",
            "Apply: tan(180° - θ) = -tan θ (tangent becomes negative)",
            "Use these relationships to find obtuse angle values"
          ],
          relevantFormulas: [
            "sin(180° - θ) = sin θ",
            "cos(180° - θ) = -cos θ",
            "tan(180° - θ) = -tan θ"
          ],
          availableTools: ["generalTriangle"]
        },
        {
          id: "sign-patterns",
          title: "Understanding Sign Patterns (ASTC)",
          difficulty: "intermediate",
          prerequisites: ["supplementary-relationships"],
          masterySignals: "Student correctly determines which trig ratios are positive/negative in different quadrants for 3+ angles",
          estimatedQuestions: "3-4 questions",
          learningObjectives: [
            "Understand the four quadrants (0°-90°, 90°-180°, 180°-270°, 270°-360°)",
            "Know that in first quadrant (0°-90°): all ratios are positive",
            "Know that in second quadrant (90°-180°): only sine is positive",
            "Recall ASTC mnemonic: All Students Take Calculus",
            "Determine sign before calculating values"
          ],
          relevantFormulas: [
            "Quadrant I (0°-90°): All positive (sin, cos, tan)",
            "Quadrant II (90°-180°): Sin positive, cos and tan negative",
            "ASTC: All - Sine - Tan - Cosine (positive in each quadrant)"
          ],
          availableTools: ["generalTriangle"]
        },
        {
          id: "obtuse-calculations",
          title: "Calculations with Obtuse Angles",
          difficulty: "advanced",
          prerequisites: ["sign-patterns"],
          masterySignals: "Student solves 2-3 problems involving obtuse angles, correctly applying relationships and determining signs",
          estimatedQuestions: "4-5 questions",
          learningObjectives: [
            "Calculate exact values: sin(120°), cos(150°), tan(135°) using relationships",
            "Solve equations like sin θ = 0.5 where θ is obtuse (θ = 150°, not 30°)",
            "Apply obtuse angles in sine rule and cosine rule problems",
            "Verify which solution (acute or obtuse) makes sense in context",
            "Use calculator to find obtuse angles correctly"
          ],
          relevantFormulas: [
            "sin(180° - θ) = sin θ → to find obtuse angle from sine value",
            "cos(180° - θ) = -cos θ → to find obtuse angle from cosine value",
            "Examples: sin(150°) = sin(30°) = 1/2",
            "cos(120°) = -cos(60°) = -1/2"
          ],
          availableTools: ["generalTriangle"]
        }
      ]
    },

    learningObjectives: `Students will progress through 4 sections:
1. Obtuse Angle Definition (foundational) - Understand angles beyond 90°
2. Supplementary Relationships (intermediate) - Master sin(180°-θ), cos(180°-θ), tan(180°-θ)
3. Sign Patterns (intermediate) - Learn ASTC rule for quadrants
4. Obtuse Calculations (advanced) - Solve problems with obtuse angles`,

    keyFormulas: `• Obtuse angles: 90° < θ < 180°
• sin(180° - θ) = sin θ (positive in quadrant II)
• cos(180° - θ) = -cos θ (negative in quadrant II)
• tan(180° - θ) = -tan θ (negative in quadrant II)
• ASTC rule: All (I), Sine (II), Tan (III), Cosine (IV) are positive`
  },

  's3-math-trigonometry-area-of-triangle': {
    displayName: 'Area of Triangle',
    topicName: 'area of triangle using trigonometry',

    progressionStructure: {
      sections: [
        {
          id: "area-formula-understanding",
          title: "Understanding the Area Formula",
          difficulty: "foundational",
          prerequisites: ["s3-math-trigonometry-basic-ratios"],
          masterySignals: "Student explains why Area = ½ab sin C works and identifies the two sides and included angle in 3+ diagrams",
          estimatedQuestions: "3-4 questions",
          learningObjectives: [
            "Understand that Area = ½ab sin C requires two sides and the included angle",
            "Recognize the included angle is the angle BETWEEN the two given sides",
            "Understand the derivation: height h = b sin C, so Area = ½ × base × height = ½ab sin C",
            "Identify which formula variation to use: ½ab sin C, ½bc sin A, or ½ac sin B",
            "Recognize this works for ALL triangles (not just right-angled)"
          ],
          relevantFormulas: [
            "Area = ½ab sin C (a and b are sides, C is included angle)",
            "Area = ½bc sin A (b and c are sides, A is included angle)",
            "Area = ½ac sin B (a and c are sides, B is included angle)"
          ],
          availableTools: ["generalTriangle"]
        },
        {
          id: "area-basic-calculations",
          title: "Calculating Triangle Areas",
          difficulty: "intermediate",
          prerequisites: ["area-formula-understanding"],
          masterySignals: "Student calculates areas correctly in 3+ problems with two sides and included angle given",
          estimatedQuestions: "4-5 questions",
          learningObjectives: [
            "Identify the two sides and included angle from given information",
            "Substitute values correctly into Area = ½ab sin C",
            "Calculate using calculator in degree mode",
            "Express answers with appropriate units (cm², m², etc.)",
            "Round answers appropriately for context"
          ],
          relevantFormulas: [
            "Area = ½ab sin C",
            "Calculator must be in degree mode"
          ],
          availableTools: ["generalTriangle"]
        },
        {
          id: "area-reverse-problems",
          title: "Finding Angles or Sides from Area",
          difficulty: "advanced",
          prerequisites: ["area-basic-calculations"],
          masterySignals: "Student solves 2-3 reverse problems, finding unknown angle or side when area is given",
          estimatedQuestions: "3-4 questions",
          learningObjectives: [
            "Rearrange Area = ½ab sin C to find angle C: sin C = 2×Area/(ab)",
            "Find angle using inverse sine: C = sin⁻¹(2×Area/(ab))",
            "Rearrange to find unknown side when area and angle are given",
            "Verify answers make sense (0° < angle < 180°, positive side lengths)",
            "Consider whether acute or obtuse angle is appropriate"
          ],
          relevantFormulas: [
            "sin C = (2 × Area)/(ab) → C = sin⁻¹((2 × Area)/(ab))",
            "a = (2 × Area)/(b × sin C)",
            "b = (2 × Area)/(a × sin C)"
          ],
          availableTools: ["generalTriangle"]
        },
        {
          id: "area-real-world",
          title: "Real-World Area Problems",
          difficulty: "advanced",
          prerequisites: ["area-basic-calculations"],
          masterySignals: "Student solves 2-3 contextual problems involving land, design, or construction where triangle area formula applies",
          estimatedQuestions: "3-4 questions",
          learningObjectives: [
            "Apply area formula to land surveying problems",
            "Solve problems involving triangular plots, gardens, roofs",
            "Interpret diagrams showing two sides and an angle",
            "Compare areas of different triangular regions",
            "Express answers with appropriate precision and units for context"
          ],
          relevantFormulas: [
            "Area = ½ab sin C (applied to real-world contexts)",
            "Unit conversion (e.g., m² to hectares if needed)"
          ],
          availableTools: ["generalTriangle"]
        }
      ]
    },

    learningObjectives: `Students will progress through 4 sections:
1. Area Formula Understanding (foundational) - Understand Area = ½ab sin C and why it works
2. Basic Area Calculations (intermediate) - Calculate triangle areas given two sides and included angle
3. Reverse Problems (advanced) - Find angles or sides when area is given
4. Real-World Applications (advanced) - Apply to surveying, design, construction contexts`,

    keyFormulas: `• Area = ½ab sin C (a, b are two sides; C is the included angle between them)
• Area = ½bc sin A (alternate form using sides b, c and angle A)
• Area = ½ac sin B (alternate form using sides a, c and angle B)
• Reverse: sin C = 2×Area/(ab) → C = sin⁻¹(2×Area/(ab))
• Works for ALL triangles (right-angled, acute, obtuse)`
  },

  's3-math-trigonometry-sine-rule': {
    displayName: 'Sine Rule',
    topicName: 'sine rule',

    progressionStructure: {
      sections: [
        {
          id: "sine-rule-discovery",
          title: "Discovering the Sine Rule",
          difficulty: "foundational",
          prerequisites: ["s3-math-trigonometry-basic-ratios"],
          masterySignals: "Student observes that a/sin A = b/sin B = c/sin C through measurement or guided exploration in 2+ triangles",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "Understand that sine rule relates sides to their opposite angles",
            "Observe pattern: side/sin(opposite angle) gives same value for all three sides",
            "Recognize this works for ALL triangles (not just right-angled)",
            "State the sine rule: a/sin A = b/sin B = c/sin C",
            "Understand equivalent form: sin A/a = sin B/b = sin C/c"
          ],
          relevantFormulas: [
            "a/sin A = b/sin B = c/sin C (sine rule)",
            "sin A/a = sin B/b = sin C/c (reciprocal form)"
          ],
          availableTools: ["generalTriangle"]
        },
        {
          id: "when-to-use-sine-rule",
          title: "When to Use the Sine Rule",
          difficulty: "intermediate",
          prerequisites: ["sine-rule-discovery"],
          masterySignals: "Student correctly identifies 3+ scenarios where sine rule should be used: AAS, ASA, SSA cases",
          estimatedQuestions: "3-4 questions",
          learningObjectives: [
            "Recognize AAS (two angles and a side) situations",
            "Recognize ASA (angle-side-angle) situations",
            "Recognize SSA (two sides and non-included angle) situations",
            "Understand when sine rule is appropriate vs when to use cosine rule or basic trig",
            "Identify which sides and angles to use in the formula"
          ],
          relevantFormulas: [
            "Use sine rule when: AAS, ASA, or SSA",
            "Don't use when: SAS (two sides + included angle) or SSS (three sides)"
          ],
          availableTools: ["generalTriangle"]
        },
        {
          id: "sine-rule-find-sides",
          title: "Using Sine Rule to Find Unknown Sides",
          difficulty: "intermediate",
          prerequisites: ["when-to-use-sine-rule"],
          masterySignals: "Student solves 3+ problems finding unknown sides using sine rule, with correct setup and calculation",
          estimatedQuestions: "4-5 questions",
          learningObjectives: [
            "Set up proportion: a/sin A = b/sin B",
            "Rearrange to solve for unknown side: a = b × sin A / sin B",
            "Substitute values and calculate accurately",
            "Use calculator correctly (degree mode)",
            "Express answers with appropriate units and precision"
          ],
          relevantFormulas: [
            "a/sin A = b/sin B → a = (b × sin A) / sin B",
            "Calculator in degree mode"
          ],
          availableTools: ["generalTriangle"]
        },
        {
          id: "sine-rule-find-angles",
          title: "Using Sine Rule to Find Unknown Angles",
          difficulty: "advanced",
          prerequisites: ["sine-rule-find-sides"],
          masterySignals: "Student solves 2-3 problems finding angles, recognizing ambiguous case (SSA) when it occurs",
          estimatedQuestions: "4-5 questions",
          learningObjectives: [
            "Set up proportion to find angle: sin A/a = sin B/b",
            "Rearrange: sin A = a × sin B / b",
            "Use inverse sine: A = sin⁻¹(a × sin B / b)",
            "Recognize ambiguous case (SSA): two possible angles (acute and obtuse)",
            "Determine which angle makes sense using angle sum (angles in triangle = 180°)",
            "Verify solution is valid (all angles positive, sum to 180°)"
          ],
          relevantFormulas: [
            "sin A = (a × sin B) / b → A = sin⁻¹((a × sin B) / b)",
            "Ambiguous case: if sin A = k, then A = sin⁻¹(k) OR A = 180° - sin⁻¹(k)",
            "Check: A + B + C = 180°"
          ],
          availableTools: ["generalTriangle"]
        },
        {
          id: "sine-rule-applications",
          title: "Real-World Applications of Sine Rule",
          difficulty: "advanced",
          prerequisites: ["sine-rule-find-angles"],
          masterySignals: "Student solves 2-3 real-world problems using sine rule in navigation, surveying, or design contexts",
          estimatedQuestions: "3-4 questions",
          learningObjectives: [
            "Apply sine rule to navigation problems with bearings",
            "Solve surveying problems (distances across rivers, heights)",
            "Apply to engineering and design contexts",
            "Interpret results in practical context",
            "Combine sine rule with other concepts (area, bearings)"
          ],
          relevantFormulas: [
            "a/sin A = b/sin B = c/sin C (applied to real contexts)",
            "Often combined with bearing calculations or area formulas"
          ],
          availableTools: ["generalTriangle"]
        }
      ]
    },

    learningObjectives: `Students will progress through 5 sections:
1. Sine Rule Discovery (foundational) - Discover and state a/sin A = b/sin B = c/sin C
2. When to Use (intermediate) - Identify AAS, ASA, SSA scenarios
3. Finding Sides (intermediate) - Use sine rule to calculate unknown sides
4. Finding Angles (advanced) - Calculate angles, handle ambiguous case
5. Real-World Applications (advanced) - Apply to navigation, surveying, design`,

    keyFormulas: `• Sine Rule: a/sin A = b/sin B = c/sin C
• Reciprocal form: sin A/a = sin B/b = sin C/c
• Use when: AAS, ASA, or SSA (two angles + side, or two sides + non-included angle)
• To find side: a = (b × sin A) / sin B
• To find angle: sin A = (a × sin B) / b → A = sin⁻¹((a × sin B) / b)
• Ambiguous case (SSA): may have two solutions (acute or obtuse angle)`
  },

  's3-math-trigonometry-cosine-rule': {
    displayName: 'Cosine Rule',
    topicName: 'cosine rule',

    progressionStructure: {
      sections: [
        {
          id: "cosine-rule-understanding",
          title: "Understanding the Cosine Rule",
          difficulty: "foundational",
          prerequisites: ["s3-math-trigonometry-basic-ratios"],
          masterySignals: "Student states the cosine rule and recognizes it as generalization of Pythagoras in 2-3 scenarios",
          estimatedQuestions: "2-3 questions",
          learningObjectives: [
            "State the cosine rule: c² = a² + b² - 2ab cos C",
            "Understand that it generalizes Pythagoras (when C = 90°, cos 90° = 0)",
            "Recognize all three forms: c² = a² + b² - 2ab cos C, b² = a² + c² - 2ac cos B, a² = b² + c² - 2bc cos A",
            "Understand this works for ALL triangles",
            "Identify that angle C must be the angle OPPOSITE side c"
          ],
          relevantFormulas: [
            "c² = a² + b² - 2ab cos C",
            "a² = b² + c² - 2bc cos A",
            "b² = a² + c² - 2ac cos B",
            "When C = 90°: c² = a² + b² (Pythagoras)"
          ],
          availableTools: ["generalTriangle"]
        },
        {
          id: "when-to-use-cosine-rule",
          title: "When to Use the Cosine Rule",
          difficulty: "intermediate",
          prerequisites: ["cosine-rule-understanding"],
          masterySignals: "Student correctly identifies 3+ scenarios requiring cosine rule: SAS and SSS cases",
          estimatedQuestions: "3-4 questions",
          learningObjectives: [
            "Recognize SAS (two sides and included angle) situations → use to find third side",
            "Recognize SSS (three sides) situations → use to find any angle",
            "Distinguish when to use cosine rule vs sine rule",
            "Understand cosine rule is needed when sine rule doesn't apply",
            "Identify which form of cosine rule to use based on unknown"
          ],
          relevantFormulas: [
            "Use cosine rule to find side when: SAS (two sides + included angle)",
            "Use cosine rule to find angle when: SSS (three sides)",
            "Don't use when: AAS, ASA, or SSA (use sine rule instead)"
          ],
          availableTools: ["generalTriangle"]
        },
        {
          id: "cosine-rule-find-sides",
          title: "Finding Unknown Sides with Cosine Rule",
          difficulty: "intermediate",
          prerequisites: ["when-to-use-cosine-rule"],
          masterySignals: "Student solves 3+ SAS problems, correctly substituting into c² = a² + b² - 2ab cos C",
          estimatedQuestions: "4-5 questions",
          learningObjectives: [
            "Identify the two given sides (a and b) and included angle (C)",
            "Substitute correctly into c² = a² + b² - 2ab cos C",
            "Calculate carefully with correct order of operations",
            "Take square root to find final side length",
            "Use calculator in degree mode",
            "Express answers with appropriate precision and units"
          ],
          relevantFormulas: [
            "c² = a² + b² - 2ab cos C",
            "c = √(a² + b² - 2ab cos C)",
            "Calculator in degree mode"
          ],
          availableTools: ["generalTriangle"]
        },
        {
          id: "cosine-rule-find-angles",
          title: "Finding Unknown Angles with Cosine Rule",
          difficulty: "advanced",
          prerequisites: ["cosine-rule-find-sides"],
          masterySignals: "Student solves 3+ SSS problems, correctly rearranging and using cos⁻¹",
          estimatedQuestions: "4-5 questions",
          learningObjectives: [
            "Rearrange c² = a² + b² - 2ab cos C to find angle: cos C = (a² + b² - c²)/(2ab)",
            "Substitute three known sides correctly",
            "Calculate the cosine value (may be negative for obtuse angles)",
            "Use inverse cosine: C = cos⁻¹((a² + b² - c²)/(2ab))",
            "Recognize negative cosine → obtuse angle",
            "Verify answer makes sense (0° < angle < 180°)"
          ],
          relevantFormulas: [
            "cos C = (a² + b² - c²)/(2ab)",
            "C = cos⁻¹((a² + b² - c²)/(2ab))",
            "If cos C < 0, then C is obtuse (90° < C < 180°)",
            "If cos C > 0, then C is acute (0° < C < 90°)"
          ],
          availableTools: ["generalTriangle"]
        },
        {
          id: "choosing-sine-or-cosine",
          title: "Choosing Between Sine and Cosine Rule",
          difficulty: "advanced",
          prerequisites: ["cosine-rule-find-angles", "s3-math-trigonometry-sine-rule"],
          masterySignals: "Student correctly chooses appropriate rule (sine or cosine) in 3+ mixed problems",
          estimatedQuestions: "4-5 questions",
          learningObjectives: [
            "Analyze given information (sides and angles)",
            "Choose sine rule for: AAS, ASA, SSA",
            "Choose cosine rule for: SAS, SSS",
            "Understand when either rule could work (after finding enough information)",
            "Solve multi-step problems combining both rules",
            "Apply to complex real-world scenarios"
          ],
          relevantFormulas: [
            "Decision matrix: Given → Use",
            "AAS/ASA/SSA → Sine rule",
            "SAS/SSS → Cosine rule",
            "May need both rules in sequence for complex problems"
          ],
          availableTools: ["generalTriangle"]
        }
      ]
    },

    learningObjectives: `Students will progress through 5 sections:
1. Cosine Rule Understanding (foundational) - State c² = a² + b² - 2ab cos C, see Pythagoras connection
2. When to Use (intermediate) - Identify SAS and SSS scenarios
3. Finding Sides (intermediate) - Calculate unknown sides from SAS
4. Finding Angles (advanced) - Calculate angles from SSS using rearranged form
5. Choosing Sine or Cosine (advanced) - Decide which rule to apply in mixed problems`,

    keyFormulas: `• Cosine Rule: c² = a² + b² - 2ab cos C
• Alternate forms: a² = b² + c² - 2bc cos A, b² = a² + c² - 2ac cos B
• Use to find side when: SAS (two sides + included angle)
• Rearranged to find angle: cos C = (a² + b² - c²)/(2ab) → C = cos⁻¹((a² + b² - c²)/(2ab))
• Use to find angle when: SSS (three sides)
• Generalizes Pythagoras: when C = 90°, cos 90° = 0, so c² = a² + b²`
  }
};

// Export for backward compatibility
export const S3_MATH_TRIGONOMETRY: Record<TrigonometryTopicId, any> = S3_MATH_TRIGONOMETRY_SUBTOPICS;

// Export config that can be used by PromptLibrary
export const S3_MATH_TRIGONOMETRY_CONFIG = {
  TUTOR_ROLE: TRIGONOMETRY_TUTOR_CUSTOMIZATION.teachingPhilosophy,
  QUESTION_AGENT_ROLE: null, // Uses base from prompt-library
  SOLUTION_AGENT_ROLE: null, // Uses base from prompt-library
  MATH_TOOLS_AVAILABLE: TRIGONOMETRY_MATH_TOOLS,
  // FORMATTING_RULES: imported from prompt-library
  // INTERACTION_PROTOCOL: imported from prompt-library
};
