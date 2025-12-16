/**
 * P5 Mathematics - Volume Topic Configuration
 *
 * Comprehensive configuration for teaching volume concepts including:
 * - Unit cubes and counting cubes
 * - Cubic centimetres (cm³) and cubic metres (m³)
 * - Volume formula: V = L × B × H
 * - Volume of liquids (litres and millilitres)
 * - Word problems on volume
 *
 * Target audience: Primary 5 students (10-11 years old)
 */

// Type exports
export type VolumeTopicId =
  | 'p5-math-volume-unit-cubes'
  | 'p5-math-volume-cubic-units'
  | 'p5-math-volume-formula'
  | 'p5-math-volume-liquids'
  | 'p5-math-volume-word-problems';

// Topic-specific tutor customization
export const P5_VOLUME_CONFIG = {
  teachingPhilosophy: `You are a friendly and encouraging mathematics tutor for Primary 5 students learning about volume.

Teaching Approach:
- Use simple, age-appropriate language suitable for 10-11 year olds
- Build understanding step by step: first unit cubes, then cm³/m³, then formulas
- Connect abstract concepts to concrete visuals - always relate back to counting unit cubes
- Use real-world contexts: fish tanks, swimming pools, water bottles, toy boxes, rooms
- Help students visualize 3D shapes and understand length × breadth × height
- Emphasize the difference between volume (space inside) and capacity (what it can hold)
- For liquids, connect 1 ℓ = 1000 ml = 1000 cm³ through concrete examples
- Be patient - 3D visualization can be challenging for some students
- Celebrate when students count cubes correctly or apply formulas accurately

**Text-to-Speech Guidelines:**
- Say "cubic centimetres" not "cm cubed" or "centimetres cubed"
- Say "cubic metres" not "m cubed" or "metres cubed"
- Say "litres" clearly (British spelling used in Singapore curriculum)
- Say "millilitres" as "milli-leetres" with clear separation
- Say "length times breadth times height" not "L B H" or "l times b times h"
- For large numbers, say them naturally: "one million two hundred thousand"
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation`,

  visualToolsGuidance: `Use pre-built visual tools when they help understanding.
IMPORTANT: Use the technical name in the toolName field, NOT the display name.

Available tools for this topic:
- unitCubeGrid: Shows a 3D cuboid made of unit cubes with optional highlighting of layers. Use for counting cubes and understanding volume as space occupied.

Tool usage guidelines:
- Use unitCubeGrid when teaching students to count unit cubes
- Highlight different layers (x, y, or z) to help students see the multiplication pattern
- Use appropriate dimensions (keep under 6×6×6 for clarity)
- Always include helpful captions explaining what to notice
- DO NOT show formulas or calculations in visualizations - student figures those out
- For liquid problems and water tanks, use pre-generated SVG diagrams instead of visualizers`
};

// Available math tools for this topic
export const P5_VOLUME_MATH_TOOLS = [
  "unitCubeGrid"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const P5_MATH_VOLUME_SUBTOPICS = {

  'p5-math-volume-unit-cubes': {
    displayName: 'Understanding Volume with Unit Cubes',
    topicName: 'understanding volume by counting unit cubes',

    progressionStructure: {
      sections: [
        {
          id: "what-is-volume",
          title: "What is Volume?",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly explains that volume is the amount of space a solid takes up and can identify solids vs flat shapes in 3+ responses",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct explanations of volume concept",
                "Correctly identifies 3D solids vs 2D shapes"
              ],
              qualitative: [
                "Explains volume as 'the amount of space inside a solid'",
                "Understands that volume applies to 3D objects, not flat shapes",
                "Can give examples of solids (box, cube, can)",
                "Distinguishes between area (flat, 2D) and volume (solid, 3D)",
                "Uses words like 'space', 'inside', '3D', 'solid' correctly"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with some confusion",
                "Partially understands the concept"
              ],
              qualitative: [
                "Confuses volume with area or perimeter",
                "Thinks volume is about weight or size generally",
                "Can identify solids but cannot explain what volume measures",
                "Needs examples to understand the concept"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot explain what volume means"
              ],
              qualitative: [
                "Does not know what 'volume' means in mathematics",
                "Confuses volume with other measurements",
                "Cannot distinguish between 2D and 3D shapes",
                "Does not understand 'space inside a solid'"
              ]
            }
          },
          learningObjectives: [
            "Define volume as the amount of space a solid takes up",
            "Distinguish between 2D shapes and 3D solids",
            "Understand that volume is measured in cubic units",
            "Give examples of objects that have volume"
          ],
          relevantFormulas: [],
          availableTools: ["unitCubeGrid"]
        },
        {
          id: "unit-cubes",
          title: "Unit Cubes",
          difficulty: "foundational",
          prerequisites: ["what-is-volume"],
          masterySignals: "Student correctly explains what a unit cube is and can identify unit cubes in diagrams in 3+ responses",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications of unit cubes",
                "Correctly explains unit cube dimensions"
              ],
              qualitative: [
                "Explains that a unit cube has all edges equal to 1 unit",
                "Understands that a unit cube takes up 1 cubic unit of space",
                "Can identify unit cubes in diagrams",
                "Recognizes that larger solids are made up of unit cubes",
                "Understands why we use unit cubes to measure volume"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints",
                "Partial understanding of unit cube concept"
              ],
              qualitative: [
                "Knows unit cube is small but unsure of dimensions",
                "Confuses unit cube with any small cube",
                "Can identify unit cubes when pointed out but not independently",
                "Does not fully understand why unit cubes are useful"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot identify or explain unit cubes"
              ],
              qualitative: [
                "Does not know what a unit cube is",
                "Cannot see unit cubes within larger solids",
                "Confuses unit cube with other shapes",
                "Does not understand the concept of 'unit' measurement"
              ]
            }
          },
          learningObjectives: [
            "Define a unit cube as a cube with edges of 1 unit length",
            "Understand that a unit cube has a volume of 1 cubic unit",
            "Identify unit cubes within larger 3D figures",
            "Explain why unit cubes are used to measure volume"
          ],
          relevantFormulas: [],
          availableTools: ["unitCubeGrid"]
        },
        {
          id: "counting-cubes",
          title: "Counting Unit Cubes to Find Volume",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["unit-cubes"],
          masterySignals: "Student correctly counts unit cubes in cuboid shapes (including hidden cubes) to find volume in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct cube counts including hidden cubes",
                "Uses layer method or multiplication efficiently"
              ],
              qualitative: [
                "Counts visible and hidden cubes accurately",
                "Uses strategies: layer-by-layer or row-by-row counting",
                "Recognizes the multiplication pattern (layers × cubes per layer)",
                "Gives volume in cubic units (e.g., 24 cubic units)",
                "Can explain counting strategy clearly"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct, may miss hidden cubes",
                "Counts slowly without efficient strategy"
              ],
              qualitative: [
                "Counts visible cubes correctly but forgets hidden ones",
                "Counts one by one without seeing patterns",
                "Needs reminders to count hidden cubes",
                "Sometimes makes counting errors in larger shapes"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect counts",
                "Cannot count cubes accurately"
              ],
              qualitative: [
                "Only counts visible cubes on the surface",
                "Does not understand that cubes are inside the solid",
                "Loses track while counting",
                "Cannot visualize the 3D structure"
              ]
            }
          },
          learningObjectives: [
            "Count unit cubes to find the volume of simple cuboids",
            "Remember to count hidden cubes inside the solid",
            "Use efficient strategies: count layers, then multiply",
            "Express volume in cubic units"
          ],
          relevantFormulas: [
            "Volume = number of unit cubes",
            "Volume = cubes in one layer × number of layers"
          ],
          availableTools: ["unitCubeGrid"]
        },
        {
          id: "comparing-volumes",
          title: "Comparing Volumes",
          difficulty: "intermediate",
          prerequisites: ["counting-cubes"],
          masterySignals: "Student correctly compares volumes of different solids and determines which has greater/smaller volume in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct volume comparisons",
                "Accurately counts and compares different shapes"
              ],
              qualitative: [
                "Counts cubes accurately for multiple shapes",
                "Compares volumes using numbers, not visual estimation only",
                "Uses correct comparison language (greater than, less than, equal to)",
                "Can order multiple solids by volume",
                "Understands that different shapes can have the same volume"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct comparisons",
                "Sometimes relies on visual estimation"
              ],
              qualitative: [
                "Can count but makes errors in comparison",
                "Guesses based on appearance rather than counting",
                "Confuses 'bigger looking' with greater volume",
                "Can compare two solids but struggles with more"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect comparisons",
                "Cannot compare volumes reliably"
              ],
              qualitative: [
                "Does not count - guesses based on appearance",
                "Cannot determine which solid has greater volume",
                "Thinks taller always means greater volume",
                "Does not understand that volume is a measurable quantity"
              ]
            }
          },
          learningObjectives: [
            "Compare volumes of different solids by counting cubes",
            "Use proper comparison language (greater/less/equal)",
            "Understand that different shapes can have the same volume",
            "Order multiple solids by volume from least to greatest"
          ],
          relevantFormulas: [
            "Compare: Solid A has 24 cubic units, Solid B has 18 cubic units",
            "Solid A has greater volume than Solid B"
          ],
          availableTools: ["unitCubeGrid"]
        }
      ]
    },

    learningObjectives: [
      "Understand that volume is the amount of space a solid takes up",
      "Identify and use unit cubes to measure volume",
      "Count unit cubes (including hidden cubes) to find volume",
      "Compare volumes of different solids"
    ],

    keyFormulas: `
**Key Concepts:**
- Volume = the amount of space a solid takes up
- Unit cube = a cube with edges of 1 unit
- Volume of a unit cube = 1 cubic unit
- Volume = total number of unit cubes

**Counting Strategies:**
- Count layer by layer: cubes in one layer × number of layers
- Remember to count hidden cubes inside!
    `
  },

  'p5-math-volume-cubic-units': {
    displayName: 'Volume in cm³ and m³',
    topicName: 'measuring volume in cubic centimetres and cubic metres',

    progressionStructure: {
      sections: [
        {
          id: "cubic-centimetre",
          title: "The Cubic Centimetre (cm³)",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly explains that 1 cm³ is the volume of a cube with 1 cm edges and can visualize its size in 3+ responses",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct explanations of cm³",
                "Correctly identifies objects measured in cm³"
              ],
              qualitative: [
                "Explains that 1 cm³ is a cube with 1 cm edges",
                "Can visualize the size (about fingertip-sized)",
                "Reads cm³ as 'cubic centimetre' (not 'cm cubed')",
                "Knows cm³ is used for small objects",
                "Understands the ³ means 3 dimensions (length, breadth, height)"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with some confusion",
                "Understands concept but struggles with visualization"
              ],
              qualitative: [
                "Knows cm³ is a unit of volume but unsure of exact size",
                "Confuses cm³ with cm² (area)",
                "Says 'centimetre cubed' instead of 'cubic centimetre'",
                "Cannot visualize how small 1 cm³ is"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot explain cm³"
              ],
              qualitative: [
                "Does not know what cm³ represents",
                "Confuses volume units with length or area units",
                "Cannot read the notation 'cm³' correctly",
                "Does not understand the ³ symbol"
              ]
            }
          },
          learningObjectives: [
            "Define 1 cm³ as the volume of a cube with 1 cm edges",
            "Visualize the size of 1 cm³ (fingertip-sized)",
            "Read and say 'cubic centimetre' correctly",
            "Understand that cm³ is used for small volumes"
          ],
          relevantFormulas: [
            "1 cm³ = volume of a cube with 1 cm × 1 cm × 1 cm dimensions"
          ],
          availableTools: ["unitCubeGrid"]
        },
        {
          id: "cubic-metre",
          title: "The Cubic Metre (m³)",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["cubic-centimetre"],
          masterySignals: "Student correctly explains that 1 m³ is the volume of a cube with 1 m edges and understands it's used for large volumes in 3+ responses",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct explanations of m³",
                "Correctly identifies objects measured in m³"
              ],
              qualitative: [
                "Explains that 1 m³ is a cube with 1 m edges",
                "Can visualize the size (fits about 3-4 children inside)",
                "Reads m³ as 'cubic metre' (not 'm cubed')",
                "Knows m³ is used for large objects like rooms, pools",
                "Understands relationship: m³ is much bigger than cm³"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with some confusion",
                "Has difficulty visualizing the size"
              ],
              qualitative: [
                "Knows m³ is for large volumes but cannot visualize size",
                "Confuses m³ with m² (area)",
                "Unsure when to use m³ vs cm³",
                "Cannot estimate how big 1 m³ is"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot explain m³"
              ],
              qualitative: [
                "Does not know what m³ represents",
                "Cannot distinguish between m³ and cm³",
                "Does not understand that m³ is much larger than cm³",
                "Cannot give examples of objects measured in m³"
              ]
            }
          },
          learningObjectives: [
            "Define 1 m³ as the volume of a cube with 1 m edges",
            "Visualize the size of 1 m³ (room-sized)",
            "Read and say 'cubic metre' correctly",
            "Understand that m³ is used for large volumes"
          ],
          relevantFormulas: [
            "1 m³ = volume of a cube with 1 m × 1 m × 1 m dimensions"
          ],
          availableTools: ["unitCubeGrid"]
        },
        {
          id: "choosing-units",
          title: "Choosing Appropriate Units",
          difficulty: "intermediate",
          prerequisites: ["cubic-metre"],
          masterySignals: "Student correctly chooses cm³ or m³ as appropriate for different objects and can justify their choice in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct unit selections with justifications",
                "Consistently chooses appropriate units"
              ],
              qualitative: [
                "Chooses cm³ for small objects (boxes, containers)",
                "Chooses m³ for large objects (rooms, pools, warehouses)",
                "Can justify choice based on practical reasoning",
                "Understands that using the wrong unit gives impractical numbers",
                "Considers the context when choosing units"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct choices with partial reasoning",
                "Sometimes chooses wrong unit"
              ],
              qualitative: [
                "Has general idea but sometimes picks wrong unit",
                "Cannot clearly explain why one unit is better",
                "Gets confused with medium-sized objects",
                "Needs examples to decide which unit to use"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect choices",
                "Randomly selects units"
              ],
              qualitative: [
                "Does not understand why unit choice matters",
                "Picks units without considering object size",
                "Cannot distinguish between cm³ and m³ usage",
                "Does not see the practical difference"
              ]
            }
          },
          learningObjectives: [
            "Choose cm³ for measuring small objects",
            "Choose m³ for measuring large objects",
            "Justify unit choices with practical reasoning",
            "Understand that appropriate units give sensible numbers"
          ],
          relevantFormulas: [
            "cm³ for: pencil boxes, drink cartons, small containers",
            "m³ for: rooms, swimming pools, warehouses, trucks"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Understand the cubic centimetre (cm³) as a unit of volume",
      "Understand the cubic metre (m³) as a unit of volume",
      "Choose appropriate units for measuring different objects",
      "Visualize and compare the sizes of cm³ and m³"
    ],

    keyFormulas: `
**Cubic Centimetre (cm³):**
- 1 cm³ = volume of a cube with 1 cm edges
- Size reference: about the size of a fingertip
- Used for: small objects (boxes, drink cartons)

**Cubic Metre (m³):**
- 1 m³ = volume of a cube with 1 m edges
- Size reference: fits about 3-4 children inside
- Used for: large objects (rooms, pools, trucks)

**Choosing Units:**
- Small objects → cm³
- Large objects → m³
    `
  },

  'p5-math-volume-formula': {
    displayName: 'Volume of Cubes and Cuboids',
    topicName: 'calculating volume using the formula V = L × B × H',

    progressionStructure: {
      sections: [
        {
          id: "formula-introduction",
          title: "Discovering the Volume Formula",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly discovers and explains that V = L × B × H from counting cubes in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct formula applications",
                "Correctly explains why formula works"
              ],
              qualitative: [
                "Understands formula comes from counting cubes: layers × cubes per layer",
                "Explains Length × Breadth gives cubes in one layer",
                "Explains multiplying by Height gives total layers",
                "Can verify formula by counting cubes",
                "Understands the formula is a shortcut for counting"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with formula but not understanding why",
                "Uses formula mechanically"
              ],
              qualitative: [
                "Knows the formula but cannot explain why it works",
                "Needs reminders about what L, B, H represent",
                "Cannot connect formula to cube counting",
                "Uses formula but cannot verify answer by counting"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot apply or understand formula"
              ],
              qualitative: [
                "Does not know the formula",
                "Confuses L, B, H with area formula",
                "Does not understand what each dimension represents",
                "Cannot see the connection between formula and cubes"
              ]
            }
          },
          learningObjectives: [
            "Discover that volume = number of cubes in one layer × number of layers",
            "Connect this to V = L × B × H",
            "Understand why the formula works (not just memorize it)",
            "Verify formula results by counting cubes"
          ],
          relevantFormulas: [
            "V = Length × Breadth × Height",
            "V = L × B × H",
            "Cubes in one layer = L × B",
            "Total cubes = (L × B) × H"
          ],
          availableTools: ["unitCubeGrid"]
        },
        {
          id: "cuboid-volume",
          title: "Volume of Cuboids",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["formula-introduction"],
          masterySignals: "Student correctly calculates volume of cuboids using V = L × B × H with different dimension values in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct cuboid volume calculations",
                "Uses formula accurately with correct units"
              ],
              qualitative: [
                "Identifies L, B, H from diagrams correctly",
                "Multiplies three dimensions accurately",
                "Includes correct units (cm³ or m³) in answer",
                "Can handle 2-digit and 3-digit dimensions",
                "Works systematically: L × B first, then × H"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with calculation errors",
                "Sometimes forgets units"
              ],
              qualitative: [
                "Knows formula but makes multiplication errors",
                "Forgets to include units in answer",
                "Gets confused when dimensions are in different order",
                "Struggles with larger numbers"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect calculations",
                "Cannot apply formula correctly"
              ],
              qualitative: [
                "Does not remember the formula",
                "Cannot identify dimensions from diagram",
                "Adds instead of multiplies",
                "Uses wrong units or no units"
              ]
            }
          },
          learningObjectives: [
            "Apply V = L × B × H to calculate cuboid volumes",
            "Identify length, breadth, and height from diagrams",
            "Calculate accurately with multi-digit numbers",
            "Include correct units (cm³ or m³) in answers"
          ],
          relevantFormulas: [
            "Volume of Cuboid = L × B × H",
            "Always include units: cm³ or m³"
          ],
          availableTools: ["unitCubeGrid"]
        },
        {
          id: "cube-volume",
          title: "Volume of Cubes",
          difficulty: "intermediate",
          prerequisites: ["cuboid-volume"],
          masterySignals: "Student correctly calculates volume of cubes using V = L × L × L and understands why all dimensions are equal in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct cube volume calculations",
                "Understands relationship to cuboid formula"
              ],
              qualitative: [
                "Understands that all edges of a cube are equal",
                "Applies V = L × L × L correctly",
                "Can simplify to V = side³ conceptually",
                "Calculates cubes of numbers accurately",
                "Distinguishes cube problems from cuboid problems"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct cube calculations",
                "Sometimes confuses with cuboid approach"
              ],
              qualitative: [
                "Knows all sides are equal but makes calculation errors",
                "Multiplies twice instead of three times",
                "Needs reminders that cubes have equal edges",
                "Gets confused between area (L × L) and volume (L × L × L)"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect calculations",
                "Cannot calculate cube volumes"
              ],
              qualitative: [
                "Does not know that cube edges are all equal",
                "Treats cube like any cuboid (uses different dimensions)",
                "Cannot multiply a number by itself three times",
                "Does not understand what makes a cube special"
              ]
            }
          },
          learningObjectives: [
            "Understand that cubes have all equal edges",
            "Apply V = L × L × L for cube volumes",
            "Calculate cubes of numbers accurately",
            "Distinguish between cube and cuboid volume calculations"
          ],
          relevantFormulas: [
            "Volume of Cube = side × side × side",
            "Volume of Cube = L × L × L",
            "Special case of cuboid where L = B = H"
          ],
          availableTools: ["unitCubeGrid"]
        },
        {
          id: "find-unknown-dimension",
          title: "Finding an Unknown Dimension",
          difficulty: "intermediate-to-challenging",
          prerequisites: ["cube-volume"],
          masterySignals: "Student correctly finds an unknown dimension when given volume and two dimensions in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct unknown dimension calculations",
                "Uses division correctly to find missing value"
              ],
              qualitative: [
                "Understands to divide volume by product of known dimensions",
                "Sets up calculation: missing = V ÷ (known₁ × known₂)",
                "Checks answer by substituting back into formula",
                "Works systematically with clear steps",
                "Handles both cube and cuboid problems"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints on method",
                "Struggles with division steps"
              ],
              qualitative: [
                "Understands concept but makes calculation errors",
                "Divides in wrong order",
                "Forgets to check answer",
                "Needs help setting up the division"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot find missing dimension"
              ],
              qualitative: [
                "Does not know how to rearrange the formula",
                "Tries to multiply instead of divide",
                "Cannot understand the inverse relationship",
                "Gets confused about which operation to use"
              ]
            }
          },
          learningObjectives: [
            "Find an unknown length when given volume and other dimensions",
            "Use division as the inverse of multiplication",
            "Check answers by substituting back into the formula",
            "Solve for unknown edge length of cubes"
          ],
          relevantFormulas: [
            "If V = L × B × H, then:",
            "L = V ÷ (B × H)",
            "B = V ÷ (L × H)",
            "H = V ÷ (L × B)",
            "For cubes: side = ∛V (cube root of volume)"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Understand and apply V = L × B × H for cuboid volumes",
      "Calculate volume of cubes using V = L × L × L",
      "Find unknown dimensions when given volume",
      "Include correct units in all volume answers"
    ],

    keyFormulas: `
**Volume of Cuboid:**
- V = Length × Breadth × Height
- V = L × B × H
- Units: cm³ or m³

**Volume of Cube:**
- V = side × side × side
- V = L × L × L
- (All edges equal)

**Finding Unknown Dimension:**
- L = V ÷ (B × H)
- B = V ÷ (L × H)
- H = V ÷ (L × B)
    `
  },

  'p5-math-volume-liquids': {
    displayName: 'Volume of Liquids',
    topicName: 'measuring liquid volume in litres and millilitres',

    progressionStructure: {
      sections: [
        {
          id: "litre-millilitre",
          title: "Litres and Millilitres",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly explains the relationship 1 ℓ = 1000 ml and can convert between units in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct conversions between ℓ and ml",
                "Correctly states 1 ℓ = 1000 ml"
              ],
              qualitative: [
                "States 1 litre = 1000 millilitres confidently",
                "Converts ℓ to ml by multiplying by 1000",
                "Converts ml to ℓ by dividing by 1000",
                "Can give examples of each (1 litre bottle, 250 ml cup)",
                "Understands ml is for small amounts, ℓ for larger"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct conversions with hints",
                "Remembers relationship but makes errors"
              ],
              qualitative: [
                "Knows 1 ℓ = 1000 ml but confuses multiply/divide",
                "Makes place value errors (10 instead of 1000)",
                "Can convert one way but not the other",
                "Needs reminders about which operation to use"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect conversions",
                "Does not know the relationship"
              ],
              qualitative: [
                "Does not remember 1 ℓ = 1000 ml",
                "Confuses litres with other units",
                "Cannot perform the conversion",
                "Does not understand what litres and millilitres measure"
              ]
            }
          },
          learningObjectives: [
            "State that 1 litre = 1000 millilitres",
            "Convert litres to millilitres (multiply by 1000)",
            "Convert millilitres to litres (divide by 1000)",
            "Give examples of common litre and millilitre amounts"
          ],
          relevantFormulas: [
            "1 ℓ = 1000 ml",
            "ℓ to ml: multiply by 1000",
            "ml to ℓ: divide by 1000"
          ],
          availableTools: []
        },
        {
          id: "ml-cm3-connection",
          title: "Connecting ml to cm³",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["litre-millilitre"],
          masterySignals: "Student correctly explains and uses 1 ml = 1 cm³ to connect liquid volume to solid volume in 3+ problems",
          estimatedQuestions: "3-4 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct applications of 1 ml = 1 cm³",
                "Converts between ml/ℓ and cm³ correctly"
              ],
              qualitative: [
                "States 1 ml = 1 cm³ confidently",
                "Derives 1 ℓ = 1000 cm³ from this relationship",
                "Can calculate how much liquid fits in a container",
                "Understands capacity vs volume (same concept for liquids)",
                "Uses this to solve container problems"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with hints about the relationship",
                "Remembers fact but struggles to apply it"
              ],
              qualitative: [
                "Knows 1 ml = 1 cm³ but forgets to use it",
                "Cannot connect to 1 ℓ = 1000 cm³",
                "Struggles to see why liquid and solid volume are related",
                "Needs help applying the relationship to problems"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Does not know the relationship"
              ],
              qualitative: [
                "Does not know 1 ml = 1 cm³",
                "Cannot see connection between liquid and solid volume",
                "Thinks liquids are measured differently from solids",
                "Cannot use this relationship in problems"
              ]
            }
          },
          learningObjectives: [
            "State that 1 ml = 1 cm³",
            "Derive that 1 ℓ = 1000 cm³",
            "Understand that volume and capacity use the same units",
            "Calculate how much liquid fits in a container of known volume"
          ],
          relevantFormulas: [
            "1 ml = 1 cm³",
            "1 ℓ = 1000 ml = 1000 cm³"
          ],
          availableTools: []
        },
        {
          id: "container-capacity",
          title: "Volume of Containers",
          difficulty: "intermediate",
          prerequisites: ["ml-cm3-connection"],
          masterySignals: "Student correctly calculates how much liquid a rectangular container can hold using V = L × B × H in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct container capacity calculations",
                "Converts volume to litres/ml correctly"
              ],
              qualitative: [
                "Uses V = L × B × H to find container volume in cm³",
                "Converts cm³ to ml or ℓ as required",
                "Understands capacity = how much liquid fits inside",
                "Handles both find-capacity and find-dimensions problems",
                "Includes correct units throughout"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with unit conversion errors",
                "Calculates volume but forgets to convert"
              ],
              qualitative: [
                "Calculates volume correctly but forgets conversion",
                "Confuses when to use cm³ vs ml/ℓ in answer",
                "Makes errors in multi-step problems",
                "Needs help connecting volume to capacity"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect calculations",
                "Cannot connect formula to container capacity"
              ],
              qualitative: [
                "Does not connect V = L × B × H to liquid capacity",
                "Cannot perform the cm³ to ml/ℓ conversion",
                "Does not understand what capacity means",
                "Gets lost in the multiple steps"
              ]
            }
          },
          learningObjectives: [
            "Calculate container volume using V = L × B × H",
            "Convert volume in cm³ to millilitres or litres",
            "Understand that capacity = how much liquid fits inside",
            "Solve problems about tanks, boxes, and containers"
          ],
          relevantFormulas: [
            "Container capacity = L × B × H (in cm³)",
            "Capacity in ml = Volume in cm³",
            "Capacity in ℓ = Volume in cm³ ÷ 1000"
          ],
          availableTools: []
        },
        {
          id: "water-level-problems",
          title: "Water Level Problems",
          difficulty: "intermediate-to-challenging",
          prerequisites: ["container-capacity"],
          masterySignals: "Student correctly solves problems involving water heights, partially filled containers, and finding dimensions from water volume in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct water level problems",
                "Handles various problem types (find height, find volume, find dimension)"
              ],
              qualitative: [
                "Calculates water volume using L × B × water height",
                "Finds water height when given volume and base dimensions",
                "Understands water takes the shape of the container",
                "Can work with partially filled containers",
                "Sets up equations correctly for unknown quantities"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with help on setup",
                "Confuses container height with water height"
              ],
              qualitative: [
                "Confuses water level with container height",
                "Cannot set up the equation for unknown values",
                "Struggles with partially filled containers",
                "Makes errors in which dimensions to use"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot solve water level problems"
              ],
              qualitative: [
                "Does not understand water level vs container height",
                "Cannot visualize water in a container",
                "Uses container dimensions incorrectly",
                "Cannot find unknown heights or dimensions"
              ]
            }
          },
          learningObjectives: [
            "Calculate volume of water using L × B × water height",
            "Find water height when given volume and base area",
            "Understand difference between water level and container height",
            "Solve problems with partially filled containers"
          ],
          relevantFormulas: [
            "Volume of water = L × B × water height",
            "Water height = Volume ÷ (L × B)",
            "Base area = L × B"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Convert between litres and millilitres",
      "Understand and use 1 ml = 1 cm³",
      "Calculate capacity of rectangular containers",
      "Solve water level problems"
    ],

    keyFormulas: `
**Unit Conversions:**
- 1 ℓ = 1000 ml
- 1 ml = 1 cm³
- 1 ℓ = 1000 cm³

**Container Capacity:**
- Capacity = L × B × H (in cm³)
- Capacity in ml = Volume in cm³
- Capacity in ℓ = Volume in cm³ ÷ 1000

**Water Level:**
- Volume of water = L × B × water height
- Water height = Volume ÷ (L × B)
    `
  },

  'p5-math-volume-word-problems': {
    displayName: 'Word Problems on Volume',
    topicName: 'solving word problems involving volume of cubes, cuboids, and liquids',

    progressionStructure: {
      sections: [
        {
          id: "basic-volume-problems",
          title: "Basic Volume Word Problems",
          difficulty: "foundational-to-intermediate",
          prerequisites: [],
          masterySignals: "Student correctly extracts dimensions from word problems and calculates volume in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct word problems solved",
                "Extracts information accurately"
              ],
              qualitative: [
                "Identifies length, breadth, height from word descriptions",
                "Applies V = L × B × H correctly",
                "Includes correct units in answer",
                "Interprets context (tank, box, room) correctly",
                "Answers in complete sentences when required"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with help extracting information",
                "Struggles to identify dimensions from text"
              ],
              qualitative: [
                "Can calculate but struggles to extract information",
                "Confuses which measurement is which",
                "Forgets units or context in answer",
                "Needs help understanding the scenario"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot solve word problems"
              ],
              qualitative: [
                "Cannot identify dimensions from word problem",
                "Does not know which formula to use",
                "Gets overwhelmed by the text",
                "Cannot visualize the scenario"
              ]
            }
          },
          learningObjectives: [
            "Extract dimensions from word problem descriptions",
            "Identify what the problem is asking for",
            "Apply volume formulas to real-world contexts",
            "Give complete answers with units"
          ],
          relevantFormulas: [
            "V = L × B × H for cuboids",
            "V = side × side × side for cubes",
            "Read carefully to identify what's given and what's asked"
          ],
          availableTools: []
        },
        {
          id: "water-transfer-problems",
          title: "Water Transfer Problems",
          difficulty: "intermediate",
          prerequisites: ["basic-volume-problems"],
          masterySignals: "Student correctly solves problems involving pouring water between containers, filling and emptying tanks in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct water transfer problems",
                "Handles multiple containers and transfers"
              ],
              qualitative: [
                "Calculates initial and final water amounts",
                "Tracks water moved between containers",
                "Finds new water levels after transfer",
                "Works systematically step by step",
                "Handles problems with multiple transfers"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with help tracking transfers",
                "Loses track of water amounts"
              ],
              qualitative: [
                "Understands concept but loses track of amounts",
                "Makes errors when multiple transfers occur",
                "Confuses what's added vs removed",
                "Needs help organizing the steps"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot track water transfers"
              ],
              qualitative: [
                "Does not understand water transfer concept",
                "Cannot set up the problem",
                "Gets confused about which container has what",
                "Cannot visualize the transfer process"
              ]
            }
          },
          learningObjectives: [
            "Track water amounts when transferring between containers",
            "Calculate new water levels after pouring",
            "Handle problems with multiple transfers",
            "Work systematically with step-by-step reasoning"
          ],
          relevantFormulas: [
            "Water in = Water out (conservation)",
            "New level = Old volume ± transferred volume, then find height",
            "Track step by step: initial → after transfer 1 → after transfer 2"
          ],
          availableTools: []
        },
        {
          id: "fractional-fill-problems",
          title: "Fractional Fill Problems",
          difficulty: "intermediate-to-challenging",
          prerequisites: ["water-transfer-problems"],
          masterySignals: "Student correctly solves problems involving containers that are ²/₃ full, ⁴/₅ full, etc. in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct fractional fill problems",
                "Calculates fractions of capacity accurately"
              ],
              qualitative: [
                "Calculates total capacity first, then applies fraction",
                "Finds fraction of volume: (fraction) × total capacity",
                "Can work backwards: given water amount, find total capacity",
                "Handles various fractions (½, ⅓, ²/₃, ¾, ⁴/₅)",
                "Converts between ml and ℓ as needed"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with calculation errors",
                "Understands concept but makes fraction errors"
              ],
              qualitative: [
                "Knows to find fraction of capacity but calculates wrong",
                "Confuses fraction operations",
                "Struggles working backwards from partial fill",
                "Makes errors converting between units"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot work with fractions of capacity"
              ],
              qualitative: [
                "Does not know what '²/₃ full' means mathematically",
                "Cannot calculate fractions of volumes",
                "Does not connect fractions to multiplication",
                "Gets overwhelmed by multiple steps"
              ]
            }
          },
          learningObjectives: [
            "Calculate fraction of a container's capacity",
            "Find total capacity from a partial fill amount",
            "Interpret phrases like '²/₃ full' or '¾ filled'",
            "Combine fraction skills with volume calculations"
          ],
          relevantFormulas: [
            "Water volume = fraction × total capacity",
            "Total capacity = water volume ÷ fraction",
            "If ²/₃ full with 400 ml, total = 400 ÷ ²/₃ = 400 × ³/₂ = 600 ml"
          ],
          availableTools: []
        },
        {
          id: "multi-step-problems",
          title: "Multi-Step Volume Problems",
          difficulty: "challenging",
          prerequisites: ["fractional-fill-problems"],
          masterySignals: "Student correctly solves complex word problems requiring multiple steps and combining different concepts in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct multi-step problems",
                "Combines multiple concepts accurately"
              ],
              qualitative: [
                "Breaks complex problems into manageable steps",
                "Combines volume, capacity, fractions, and conversions",
                "Keeps track of intermediate answers",
                "Checks reasonableness of final answer",
                "Shows clear working for each step"
              ]
            },
            developing: {
              quantitative: [
                "1-2 correct with guidance on steps",
                "Struggles to organize multi-step work"
              ],
              qualitative: [
                "Gets lost in multi-step problems",
                "Solves parts but cannot combine them",
                "Makes errors carrying values between steps",
                "Needs help breaking down the problem"
              ]
            },
            struggling: {
              quantitative: [
                "Multiple incorrect responses",
                "Cannot handle multi-step problems"
              ],
              qualitative: [
                "Overwhelmed by problem complexity",
                "Cannot identify what steps are needed",
                "Tries to solve in one step and fails",
                "Cannot track multiple pieces of information"
              ]
            }
          },
          learningObjectives: [
            "Break complex problems into steps",
            "Combine multiple volume and capacity concepts",
            "Track intermediate values carefully",
            "Check answers for reasonableness"
          ],
          relevantFormulas: [
            "Step 1: Identify what's given and what's asked",
            "Step 2: Plan your approach",
            "Step 3: Solve step by step",
            "Step 4: Check your answer makes sense"
          ],
          availableTools: []
        }
      ]
    },

    learningObjectives: [
      "Extract information from word problems",
      "Solve water transfer problems",
      "Calculate fractional fills of containers",
      "Tackle multi-step volume problems"
    ],

    keyFormulas: `
**Problem-Solving Strategy:**
1. Read carefully - identify what's given and asked
2. Visualize the situation
3. Choose the right formula
4. Calculate step by step
5. Check answer is reasonable

**Common Problem Types:**
- Basic: Find volume from dimensions
- Transfer: Track water between containers
- Fractional: ²/₃ full means (²/₃) × capacity
- Multi-step: Combine concepts systematically

**Key Relationships:**
- V = L × B × H
- 1 ℓ = 1000 ml = 1000 cm³
- Water volume = fraction × total capacity
    `,

    // AI-generated text-only questions
    usePreGeneratedQuestions: false,

    sampleProblems: [
      {
        section: "basic-volume-problems",
        examples: [
          "A rectangular fish tank is 40 cm long, 25 cm wide and 30 cm tall. What is the volume of the fish tank?",
          "A wooden crate has a length of 80 cm, breadth of 50 cm and height of 60 cm. Find the volume of the crate in cm³.",
          "A storage box is a cube with edges of 15 cm. What is the volume of the box?",
          "Mr Tan's room is 5 m long, 4 m wide and 3 m high. What is the volume of the room in cubic metres?"
        ]
      },
      {
        section: "water-transfer-problems",
        examples: [
          "A rectangular tank measuring 30 cm by 20 cm by 25 cm is half-filled with water. 3 litres of water is then poured out. What is the volume of water left in the tank?",
          "Tank A contains 2.4 litres of water. Tank B is empty. If 800 ml of water is poured from Tank A to Tank B, how much water is left in Tank A?",
          "A rectangular container is 25 cm long and 20 cm wide. It contains water to a height of 12 cm. If 1.5 litres of water is added, what is the new height of the water?",
          "A tank measuring 40 cm by 30 cm by 35 cm is filled with water to a height of 20 cm. If 6 litres of water is poured out, what is the new water level?"
        ]
      },
      {
        section: "fractional-fill-problems",
        examples: [
          "A rectangular tank is ²/₃ filled with water. If the tank measures 30 cm by 20 cm by 24 cm, what is the volume of water in the tank?",
          "A container is ³/₄ full of juice. If it contains 1.8 litres of juice, what is the full capacity of the container?",
          "Tank A is ⁴/₅ full of water. If it contains 3.2 litres of water, what is the volume of the tank when completely full?",
          "A fish tank measuring 50 cm by 30 cm by 40 cm is ⅗ filled with water. How many more litres of water are needed to fill it completely?"
        ]
      },
      {
        section: "multi-step-problems",
        examples: [
          "A rectangular tank 50 cm by 40 cm by 30 cm is ²/₃ full of water. 8 litres of water is then poured out. What is the new height of the water in the tank?",
          "Tank A measuring 30 cm by 20 cm by 25 cm is completely full. Water from Tank A is used to fill Tank B which is 40 cm by 25 cm by 20 cm until Tank B is ³/₄ full. How much water is left in Tank A?",
          "A rectangular container is 45 cm long, 30 cm wide and 20 cm high. It is ⅔ filled with water. If 2.7 litres of water is added, will the container overflow? If so, by how much?",
          "Mrs Lee fills a rectangular tank measuring 60 cm by 40 cm by 50 cm with water at a rate of 3 litres per minute. How long will it take to fill the tank to ⁴/₅ of its capacity?"
        ]
      }
    ]
  }
};
