/**
 * P6 Mathematics - Volume of Cube and Cuboid Topic Configuration
 *
 * Comprehensive configuration for teaching volume concepts:
 * 1. Finding the Side of Cube or Cuboid
 * 2. Finding the Area of One Face
 * 3. Word Problems (including water tank problems)
 *
 * Target audience: Primary 6 students (11-12 years old)
 */

// Type exports
export type P6VolumeCubeCuboidTopicId =
  | 'p6-math-volume-finding-side'
  | 'p6-math-volume-face-area'
  | 'p6-math-volume-word-problems';

// Topic-specific tutor customization
export const P6_VOLUME_CUBE_CUBOID_CONFIG = {
  teachingPhilosophy: `You are a friendly and encouraging mathematics tutor for Primary 6 students learning about volume of cubes and cuboids.

Teaching Approach:
- Use simple, age-appropriate language suitable for 11-12 year olds
- Build from concrete understanding (counting unit cubes) to abstract formulas
- Use real-world contexts: boxes, containers, water tanks, storage spaces
- Help students understand WHY the formulas work, not just memorize them
- Guide students through rearranging formulas to find unknown dimensions
- Introduce cube roots and square roots with clear explanation
- Connect volume (3D) to area (2D) concepts students already know
- Use visual tools extensively to show 3D shapes
- Be patient with multi-step word problems - break them down
- Celebrate when students correctly apply the volume formula

Key Concepts to Reinforce:
- Volume = Length × Breadth × Height (for cuboid)
- Volume = Side × Side × Side = Side³ (for cube)
- Finding unknown dimension: divide volume by product of known dimensions
- Cube root finds the side of a cube from its volume
- 1 litre = 1000 cm³ (essential for water tank problems)

**Text-to-Speech Guidelines:**
- Say "length times breadth times height" not "L × B × H"
- Say "centimeters cubed" or "cubic centimeters" not "cm³"
- Say "meters cubed" or "cubic meters" not "m³"
- Say "square centimeters" not "cm²"
- Say "cube root of" not "∛"
- Say "square root of" not "√"
- Say "litres" clearly
- Say "divided by" not "÷"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding.
IMPORTANT: Use the technical name in the toolName field, NOT the display name.

Available tools for this topic:
- cuboid: PRIMARY TOOL - Shows 3D cuboid with labeled dimensions (length, width, height). Can highlight specific edges. USE THIS EXTENSIVELY for dimension problems.
- unitCubeGrid: Shows volume as stacked unit cubes. Great for conceptual understanding of V = L × B × H. Use for building intuition.
- waterTank: Shows rectangular tank with water level. ESSENTIAL for all water tank word problems. Shows before/after scenarios.

Tool usage guidelines:
- Use cuboid for ALL problems involving finding dimensions or showing relationships
- Use unitCubeGrid to introduce volume concept and show layering
- Use waterTank for ALL water-related word problems
- Always include a helpful caption explaining what to look at in the visualization
- For multi-step problems, consider showing multiple visualizations`
};

// Available math tools for this topic
export const P6_VOLUME_CUBE_CUBOID_MATH_TOOLS = [
  "cuboid",
  "unitCubeGrid",
  "waterTank",
  "rectangle",
  "square"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const P6_VOLUME_CUBE_CUBOID_SUBTOPICS = {

  'p6-math-volume-finding-side': {
    displayName: 'Finding the Side of Cube or Cuboid',
    topicName: 'finding the side of cube or cuboid',

    progressionStructure: {
      sections: [
        {
          id: "volume-formula-basics",
          title: "Volume Formula Basics",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly calculates volume of cubes and cuboids using V = L × B × H in 3+ problems with minimal hints",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct volume calculations without hints",
                "Correctly applies formula to both cubes and cuboids"
              ],
              qualitative: [
                "Understands volume as space occupied by a solid",
                "Can visualize volume as counting unit cubes",
                "Correctly identifies length, breadth, and height",
                "Applies correct units (cm³, m³)",
                "For cube: recognizes all sides are equal"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on formula application",
                "Correct formula but arithmetic errors"
              ],
              qualitative: [
                "Knows the formula but mixes up dimensions",
                "Forgets to cube units (writes cm instead of cm³)",
                "Needs reminding that cube has equal sides",
                "Can calculate but doesn't understand why"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot recall volume formula"
              ],
              qualitative: [
                "Confuses volume with area",
                "Does not understand 3D concept",
                "Adds dimensions instead of multiplying",
                "Cannot identify which measurement is which",
                "Gets confused between cm² and cm³"
              ]
            }
          },
          learningObjectives: [
            "Understand volume as amount of space a solid occupies",
            "Apply formula: Volume = Length × Breadth × Height",
            "Apply formula: Volume of cube = Side³",
            "Use correct cubic units in answers"
          ],
          relevantFormulas: [
            "Volume of cuboid = Length × Breadth × Height",
            "Volume of cube = Side × Side × Side = Side³",
            "Example: V = 8 × 4 × 3 = 96 m³"
          ],
          availableTools: ["cuboid", "unitCubeGrid"]
        },
        {
          id: "finding-unknown-dimension",
          title: "Finding an Unknown Dimension",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["volume-formula-basics"],
          masterySignals: "Student correctly finds unknown dimensions (height, length, or breadth) using division in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct answers without hints",
                "Consistently rearranges formula correctly"
              ],
              qualitative: [
                "Understands Height = Volume ÷ (Length × Breadth)",
                "Can find any of the three dimensions",
                "Shows systematic working: formula → substitute → calculate",
                "Correctly multiplies two known dimensions first, then divides",
                "Applies correct units in answer"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on formula rearrangement",
                "Correct approach but arithmetic errors"
              ],
              qualitative: [
                "Knows to divide but unsure which numbers to use",
                "Forgets to multiply two dimensions before dividing",
                "Can solve with scaffolding but not independently",
                "Gets confused about which dimension is unknown"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect attempts",
                "Cannot set up the division correctly"
              ],
              qualitative: [
                "Does not understand rearranging V = L × B × H",
                "Multiplies instead of divides",
                "Confuses volume formula with perimeter or area",
                "Cannot identify what operation to use",
                "Does not recognize that dividing by (L × B) gives H"
              ]
            }
          },
          learningObjectives: [
            "Rearrange volume formula to find unknown dimension",
            "Calculate Height = Volume ÷ (Length × Breadth)",
            "Calculate Breadth = Volume ÷ (Length × Height)",
            "Calculate Length = Volume ÷ (Breadth × Height)"
          ],
          relevantFormulas: [
            "Height = Volume ÷ (Length × Breadth)",
            "Breadth = Volume ÷ (Length × Height)",
            "Length = Volume ÷ (Breadth × Height)",
            "Example: Height = 480 ÷ (8 × 6) = 480 ÷ 48 = 10 cm"
          ],
          availableTools: ["cuboid"]
        },
        {
          id: "cube-edge-from-volume",
          title: "Finding the Edge of a Cube",
          difficulty: "intermediate",
          prerequisites: ["volume-formula-basics"],
          masterySignals: "Student correctly finds edge length of cube using cube root in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct cube root calculations",
                "Recognizes perfect cubes quickly"
              ],
              qualitative: [
                "Understands cube root reverses cubing",
                "Can identify perfect cubes (1, 8, 27, 64, 125, 216, 343, 512, 729, 1000)",
                "Uses calculator correctly for non-perfect cubes",
                "Understands why Edge = ∛Volume",
                "Can verify answer by cubing"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about cube roots",
                "Recognizes some perfect cubes but not all"
              ],
              qualitative: [
                "Understands concept but struggles with calculation",
                "Confuses cube root with square root",
                "Needs table of perfect cubes as reference",
                "Can verify given answer but can't find it independently"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot find cube roots",
                "Does not recognize perfect cubes"
              ],
              qualitative: [
                "Does not understand what cube root means",
                "Confuses ∛ with √",
                "Tries to divide volume by 3",
                "Cannot connect V = s³ to s = ∛V",
                "Does not understand that 3 × 3 × 3 = 27, so ∛27 = 3"
              ]
            }
          },
          learningObjectives: [
            "Understand cube root as inverse of cubing",
            "Calculate edge of cube: Edge = ∛Volume",
            "Recognize common perfect cubes (1-1000)",
            "Use calculator for cube roots when needed"
          ],
          relevantFormulas: [
            "Edge of cube = ∛Volume (cube root of volume)",
            "Perfect cubes: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000",
            "Example: If Volume = 729 cm³, Edge = ∛729 = 9 cm"
          ],
          availableTools: ["cuboid"]
        },
        {
          id: "using-face-area",
          title: "Using Face Area to Find Dimensions",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["finding-unknown-dimension", "cube-edge-from-volume"],
          masterySignals: "Student correctly uses base/face area with volume to find dimensions in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations using area relationships",
                "Handles both cuboid and cube problems"
              ],
              qualitative: [
                "Understands Volume = Base Area × Height",
                "Can rearrange: Height = Volume ÷ Base Area",
                "For cube: finds edge from face area using √",
                "Distinguishes between cube root (volume) and square root (area)",
                "Shows clear working with units"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance on relationships",
                "Gets one type (cuboid or cube) but not both"
              ],
              qualitative: [
                "Understands relationship but makes calculation errors",
                "Confuses when to use √ vs ∛",
                "Forgets area has cm² while volume has cm³",
                "Needs prompting to identify which relationship to use"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot apply area-volume relationships",
                "Multiple errors in setup and calculation"
              ],
              qualitative: [
                "Does not understand Volume = Area × perpendicular dimension",
                "Confuses face area with volume",
                "Cannot distinguish between area and length formulas",
                "Does not know when to use square root vs cube root",
                "Cannot identify base area from given information"
              ]
            }
          },
          learningObjectives: [
            "Apply Volume = Base Area × Height",
            "Calculate Height = Volume ÷ Base Area",
            "Find cube edge from face area: Edge = √(Face Area)",
            "Choose appropriate root (√ or ∛) based on given information"
          ],
          relevantFormulas: [
            "Volume = Base Area × Height",
            "Height = Volume ÷ Base Area",
            "For cube: Edge = √(Face Area)",
            "Example: If Base Area = 70 cm² and Volume = 1050 cm³, Height = 1050 ÷ 70 = 15 cm"
          ],
          availableTools: ["cuboid"]
        }
      ]
    },

    learningObjectives: [
      "Calculate volume of cubes and cuboids",
      "Find unknown dimensions using volume formula",
      "Apply cube roots to find edge of cube",
      "Use face area to determine dimensions"
    ],

    keyFormulas: `Volume Formulas:
- Volume of cube = Side × Side × Side = Side³
- Volume of cuboid = Length × Breadth × Height

Finding Unknown Dimensions:
- Height = Volume ÷ (Length × Breadth)
- Breadth = Volume ÷ (Length × Height)
- Length = Volume ÷ (Breadth × Height)

From Volume to Side (Cube):
- Edge of cube = ∛Volume (cube root)

From Face Area:
- Height = Volume ÷ Base Area
- Edge of cube = √(Face Area) (square root)`
  },

  'p6-math-volume-face-area': {
    displayName: 'Finding the Area of One Face',
    topicName: 'finding the area of one face of cube or cuboid',

    progressionStructure: {
      sections: [
        {
          id: "base-area-from-volume",
          title: "Finding Base Area from Volume",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly calculates base area using Base Area = Volume ÷ Height in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct base area calculations",
                "Consistent correct application of formula"
              ],
              qualitative: [
                "Understands relationship: Volume = Base Area × Height",
                "Correctly rearranges to: Base Area = Volume ÷ Height",
                "Uses correct units (cm² for area)",
                "Can explain why the formula works",
                "Visualizes base area as a layer"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Correct formula but unit errors"
              ],
              qualitative: [
                "Knows to divide but forgets which values",
                "Confuses area units with volume units",
                "Can apply formula but doesn't understand why",
                "Needs reminder about relationship"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot apply the relationship",
                "Multiple incorrect attempts"
              ],
              qualitative: [
                "Does not see connection between area and volume",
                "Multiplies instead of divides",
                "Cannot identify what base area means",
                "Confuses base area with total surface area"
              ]
            }
          },
          learningObjectives: [
            "Understand Volume = Base Area × Height relationship",
            "Calculate Base Area = Volume ÷ Height",
            "Apply correct square units for area (cm²)"
          ],
          relevantFormulas: [
            "Volume = Base Area × Height",
            "Base Area = Volume ÷ Height",
            "Example: If Volume = 960 m³ and Height = 8 m, Base Area = 960 ÷ 8 = 120 m²"
          ],
          availableTools: ["cuboid", "unitCubeGrid"]
        },
        {
          id: "face-area-of-cuboid",
          title: "Finding Face Area of a Cuboid",
          difficulty: "intermediate",
          prerequisites: ["base-area-from-volume"],
          masterySignals: "Student correctly finds area of any face of cuboid using division in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct face area calculations",
                "Handles different faces correctly"
              ],
              qualitative: [
                "Understands Volume = Face Area × perpendicular dimension",
                "Can identify which dimension is perpendicular to given face",
                "Correctly calculates: Face Area = Volume ÷ perpendicular dimension",
                "Recognizes cuboid has 3 pairs of faces",
                "Can work backwards from face area to find dimensions"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance",
                "Correct for some faces but not others"
              ],
              qualitative: [
                "Understands concept but confuses which dimension to divide by",
                "Struggles to identify perpendicular dimension",
                "Can solve when told which dimension to use",
                "Gets confused by different orientations"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot identify correct face area relationship",
                "Multiple errors"
              ],
              qualitative: [
                "Does not understand face-dimension relationship",
                "Cannot visualize which face is being asked about",
                "Divides by wrong dimension consistently",
                "Confuses face area with surface area or volume"
              ]
            }
          },
          learningObjectives: [
            "Identify different faces of a cuboid (top/bottom, front/back, left/right)",
            "Calculate face area = Volume ÷ perpendicular dimension",
            "Choose correct dimension to divide by based on face asked"
          ],
          relevantFormulas: [
            "Top/Bottom face area = Volume ÷ Height",
            "Front/Back face area = Volume ÷ Breadth",
            "Left/Right face area = Volume ÷ Length",
            "Example: If Volume = 3840 cm³ and Breadth = 10 cm, Face Area = 3840 ÷ 10 = 384 cm²"
          ],
          availableTools: ["cuboid"]
        },
        {
          id: "face-area-of-cube",
          title: "Finding Face Area of a Cube",
          difficulty: "intermediate",
          prerequisites: ["base-area-from-volume"],
          masterySignals: "Student correctly finds face area of cube from volume using two-step process in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct two-step calculations",
                "Finds both edge and area correctly"
              ],
              qualitative: [
                "Correctly finds edge using cube root: Edge = ∛Volume",
                "Then calculates Face Area = Edge × Edge = Edge²",
                "Understands why two steps are needed",
                "Can verify answer by reversing process",
                "Uses correct units throughout (cm³ → cm → cm²)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with prompting on steps",
                "Gets edge but forgets to square"
              ],
              qualitative: [
                "Knows to use cube root but forgets second step",
                "Confuses when to use √ vs ∛",
                "Can follow process but doesn't understand why",
                "Makes errors in cube root calculation"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot complete two-step process",
                "Multiple errors in cube root or squaring"
              ],
              qualitative: [
                "Does not know to find edge first",
                "Tries to directly calculate area from volume",
                "Confuses volume with face area",
                "Cannot find cube root",
                "Does not understand relationship between V, edge, and face area"
              ]
            }
          },
          learningObjectives: [
            "Apply two-step process: find edge, then find area",
            "Step 1: Edge = ∛Volume",
            "Step 2: Face Area = Edge × Edge = Edge²"
          ],
          relevantFormulas: [
            "Step 1: Edge of cube = ∛Volume",
            "Step 2: Face Area = Edge × Edge = Edge²",
            "Example: If Volume = 5832 cm³, Edge = ∛5832 = 18 cm, Face Area = 18 × 18 = 324 cm²"
          ],
          availableTools: ["cuboid"]
        }
      ]
    },

    learningObjectives: [
      "Calculate base area from volume and height",
      "Find face area of any face of a cuboid",
      "Apply two-step process for cube face area"
    ],

    keyFormulas: `Base Area:
- Base Area = Volume ÷ Height

Face Area of Cuboid:
- Face Area = Volume ÷ (perpendicular dimension)
- Top/Bottom = Volume ÷ Height
- Front/Back = Volume ÷ Breadth
- Left/Right = Volume ÷ Length

Face Area of Cube (two steps):
- Step 1: Edge = ∛Volume
- Step 2: Face Area = Edge²`
  },

  'p6-math-volume-word-problems': {
    displayName: 'Word Problems',
    topicName: 'word problems involving volume of cube and cuboid',

    progressionStructure: {
      sections: [
        {
          id: "basic-volume-word-problems",
          title: "Basic Volume Word Problems",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly solves basic word problems about containers and boxes in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct word problem solutions",
                "Correctly identifies all given information"
              ],
              qualitative: [
                "Can translate word problem into mathematical setup",
                "Identifies length, breadth, height from context",
                "Shows clear working with formula",
                "States answer with correct units and context",
                "Can draw/visualize the shape described"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance on setup",
                "Correct calculation but missing units/context"
              ],
              qualitative: [
                "Struggles to identify which dimension is which",
                "Can calculate once setup is provided",
                "Forgets to include units in answer",
                "Doesn't state answer in context of problem"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot translate problem to math",
                "Multiple errors"
              ],
              qualitative: [
                "Cannot identify what is being asked",
                "Does not recognize volume problem",
                "Cannot extract dimensions from text",
                "Confuses different types of problems"
              ]
            }
          },
          learningObjectives: [
            "Identify given information from word problem",
            "Translate problem into volume calculation",
            "State answer with units and context"
          ],
          relevantFormulas: [
            "Volume = Length × Breadth × Height",
            "Unknown dimension = Volume ÷ (other two dimensions)"
          ],
          availableTools: ["cuboid"]
        },
        {
          id: "water-tank-problems",
          title: "Water Tank Problems",
          difficulty: "intermediate",
          prerequisites: ["basic-volume-word-problems"],
          masterySignals: "Student correctly solves water level and tank filling problems with unit conversion in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct water tank calculations",
                "Correctly converts litres ↔ cm³"
              ],
              qualitative: [
                "Fluently converts: 1 litre = 1000 cm³",
                "Calculates water height = Volume ÷ Base Area",
                "Finds volume needed to fill: Total - Current",
                "Can work with partially filled tanks",
                "Shows clear step-by-step working"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with conversion hints",
                "Correct method but conversion errors"
              ],
              qualitative: [
                "Forgets litre-cm³ conversion",
                "Knows formula but makes arithmetic errors",
                "Struggles with multi-step problems",
                "Confuses height of tank with water level"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot apply water tank formulas",
                "Multiple conversion errors"
              ],
              qualitative: [
                "Does not know 1 litre = 1000 cm³",
                "Cannot distinguish water volume from tank capacity",
                "Confuses height of water with tank dimensions",
                "Cannot visualize water in tank"
              ]
            }
          },
          learningObjectives: [
            "Convert between litres and cm³ (1 L = 1000 cm³)",
            "Calculate water level height from volume",
            "Find volume needed to fill tank completely"
          ],
          relevantFormulas: [
            "1 litre = 1000 cm³",
            "Water height = Volume of water ÷ Base Area",
            "Volume to fill = Total tank volume - Current water volume",
            "Example: 45 litres = 45,000 cm³"
          ],
          availableTools: ["waterTank", "cuboid"]
        },
        {
          id: "multi-step-transfer-problems",
          title: "Multi-step and Transfer Problems",
          difficulty: "advanced",
          prerequisites: ["water-tank-problems"],
          masterySignals: "Student correctly solves complex problems involving fractional fill, transfer, and rates in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct complex problem solutions",
                "Handles multiple solution methods"
              ],
              qualitative: [
                "Correctly interprets fractional fill (e.g., 3/4 filled)",
                "Solves water transfer problems (volume stays constant)",
                "Applies rate formula: Time = Volume ÷ Rate",
                "Can choose most efficient solution method",
                "Breaks complex problems into manageable steps"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with significant guidance",
                "Partially correct multi-step solutions"
              ],
              qualitative: [
                "Gets fractional fill but struggles with transfer",
                "Knows rate formula but makes setup errors",
                "Can follow guided solution but not independent",
                "Loses track in multi-step problems"
              ]
            },
            struggling: {
              quantitative: [
                "Cannot complete multi-step problems",
                "Multiple conceptual errors"
              ],
              qualitative: [
                "Does not understand fractional fill concept",
                "Cannot track volume during transfer",
                "Does not know how to apply rates",
                "Gets overwhelmed by multi-step problems",
                "Cannot identify what each step should accomplish"
              ]
            }
          },
          learningObjectives: [
            "Solve fractional fill problems (tank is 2/3 filled)",
            "Apply conservation of volume in transfer problems",
            "Use rate formula: Time = Volume ÷ Rate",
            "Break complex problems into steps"
          ],
          relevantFormulas: [
            "Fractional fill: Water height = Fraction × Total height",
            "Or: Water volume = Fraction × Total volume",
            "Transfer: Volume of water stays constant",
            "Rate: Time = Volume ÷ Rate (litres ÷ litres per minute = minutes)"
          ],
          availableTools: ["waterTank", "cuboid"]
        }
      ]
    },

    learningObjectives: [
      "Solve real-world volume word problems",
      "Apply unit conversion (litres ↔ cm³)",
      "Calculate water levels and tank filling",
      "Solve complex multi-step volume problems"
    ],

    keyFormulas: `Unit Conversion:
- 1 litre = 1000 cm³
- 1 ml = 1 cm³

Water Tank Problems:
- Water height = Volume of water ÷ Base Area
- Volume to fill = Tank capacity - Current water volume

Multi-step Problems:
- Fractional fill: Water volume = Fraction × Total volume
- Rate problems: Time = Volume ÷ Rate
- Transfer: Volume of water stays constant when moved`
  }
};
