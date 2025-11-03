/**
 * S1 Mathematics - Perimeter and Area Topic Configuration
 *
 * Clean topic configuration using the new prompt library architecture.
 * Inherits from base agents, formatting rules, and interaction protocols.
 */

// Type exports
export type PerimeterAreaTopicId =
  | 's1-math-perimeter-area-parallelograms'
  | 's1-math-perimeter-area-trapeziums'
  | 's1-math-perimeter-area-composite';

// Topic-specific tutor customization (overrides base)
export const PERIMETER_AREA_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for Secondary 1 students learning Perimeter and Area of geometric shapes.

Teaching Approach:
- Guide students to discover formulas through questioning, not direct instruction
- Help students visualize shapes using the interactive math tools
- Emphasize the distinction between perimeter (distance around) and area (space inside)
- For parallelograms, CRITICAL: Distinguish perpendicular height from slant side
- For trapeziums, CRITICAL: Identify which sides are parallel
- For composite figures, teach decomposition strategy (breaking into simpler shapes)
- Use real-world contexts (floors, gardens, pools, walls) to make concepts concrete
- Celebrate insights when students connect area to counting squares

**Text-to-Speech Guidelines:**
- Say "perpendicular height" not "height perpendicular" for clarity
- Spell out "l times w" for l × w (length times width)
- Say "pi r squared" for πr² (not "pie are squared")
- Say "one-half times base times height" for ½bh
- Say "trapezium" (British/Singapore English), not "trapezoid"
- Spell out units clearly: "square centimeters" not just "centimeters squared"
- Avoid special symbols in speech.text - spell them out
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), use proper mathematical notation normally`,

  visualToolsGuidance: `Use pre-built visual tools frequently to help students see shapes and understand concepts.
IMPORTANT: Use the technical name (e.g., "parallelogram") in the toolName field, NOT the display name.

Critical tool usage:
- Use "rectangle" and "square" for foundational review
- Use "parallelogram" with showPerpendicular=true to teach height vs slant side
- Use "trapezium" with highlightParallel=true to emphasize parallel sides
- Use "semicircle" when dealing with curved edges
- Use "compositeShape" for complex figures (L-shape, stadium, arch, etc.)
- Show transformation animations when teaching area relationships`
};

// Available math tools for this topic
export const PERIMETER_AREA_MATH_TOOLS = [
  "rectangle",
  "square",
  "parallelogram",
  "trapezium",
  "semicircle",
  "compositeShape"
];

// ==========================
// SUBTOPICS CONFIGURATION
// ==========================

export const S1_MATH_PERIMETER_AREA_SUBTOPICS = {

  's1-math-perimeter-area-parallelograms': {
    displayName: 'Parallelograms',
    topicName: 'rectangles, squares, and parallelograms - their properties, perimeter, and area',

    progressionStructure: {
      sections: [
        {
          id: "rectangles-review",
          title: "Review: Rectangles and Squares",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly calculates perimeter and area of rectangles and squares in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct calculations without hints",
                "Correctly applies both perimeter and area formulas"
              ],
              qualitative: [
                "Correctly identifies length and width in rectangles",
                "Applies P = 2(l + w) or P = 2l + 2w accurately",
                "Applies A = l × w accurately",
                "Recognizes square as special rectangle (all sides equal)",
                "For squares, uses s for side length in formulas P = 4s and A = s²",
                "Distinguishes when to find perimeter vs area based on context",
                "Includes correct units (cm for perimeter, cm² for area)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on formula selection"],
              qualitative: [
                "Knows formulas but confuses which to use",
                "Makes arithmetic errors in calculations",
                "Forgets to include units or uses wrong units",
                "Needs prompting to identify given dimensions"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Cannot distinguish perimeter from area"],
              qualitative: [
                "Confuses perimeter (distance around) with area (space inside)",
                "Uses wrong formula consistently",
                "Cannot identify length and width from diagram",
                "Adds dimensions when should multiply (or vice versa)",
                "Does not understand that area uses squared units"
              ]
            }
          },
          learningObjectives: [
            "Review that a rectangle has four right angles and opposite sides equal",
            "Calculate rectangle perimeter using P = 2(l + w) or P = 2l + 2w",
            "Calculate rectangle area using A = l × w",
            "Recognize a square as a special rectangle where all sides are equal",
            "Calculate square perimeter using P = 4s",
            "Calculate square area using A = s²",
            "Distinguish between perimeter (linear units) and area (square units)",
            "Apply formulas to solve real-world problems (gardens, floors, walls)"
          ],
          relevantFormulas: [
            "Rectangle perimeter: P = 2(l + w) or P = 2l + 2w",
            "Rectangle area: A = l × w",
            "Square perimeter: P = 4s (where s = side length)",
            "Square area: A = s²",
            "Remember: Perimeter = distance around (add all sides)",
            "Remember: Area = space inside (multiply dimensions)",
            "Units: Perimeter in cm/m, Area in cm²/m²"
          ],
          availableTools: ["rectangle", "square"]
        },
        {
          id: "parallelogram-properties",
          title: "Parallelogram Properties and Perimeter",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["rectangles-review"],
          masterySignals: "Student identifies parallelogram properties and calculates perimeter correctly in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct property identifications and perimeter calculations",
                "Consistently identifies opposite sides correctly"
              ],
              qualitative: [
                "Recognizes parallelogram has opposite sides equal and parallel",
                "Understands opposite angles are equal",
                "Identifies adjacent angles are supplementary (add to 180°)",
                "Calculates perimeter by adding all four sides: P = 2(a + b)",
                "Distinguishes between the two different side lengths",
                "Can find missing side using opposite sides equal property",
                "Does NOT confuse slant side with perpendicular height"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on which sides to add"],
              qualitative: [
                "Knows opposite sides equal but makes arithmetic errors",
                "Needs prompting to identify which sides are opposite",
                "Can calculate perimeter once sides are identified",
                "Sometimes confuses properties with rectangles"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect perimeter calculations", "Cannot identify opposite sides"],
              qualitative: [
                "Does not understand parallelogram properties",
                "Thinks all sides are equal (confuses with square)",
                "Cannot identify which sides are opposite",
                "Adds wrong combination of sides for perimeter",
                "Confuses perimeter calculation with area"
              ]
            }
          },
          learningObjectives: [
            "Understand parallelogram is a quadrilateral with opposite sides parallel and equal",
            "Identify that opposite angles in a parallelogram are equal",
            "Recognize that adjacent angles are supplementary (sum to 180°)",
            "Calculate parallelogram perimeter using P = 2(a + b) where a and b are adjacent sides",
            "Use property of opposite sides equal to find missing side lengths",
            "Distinguish between base, slant side, and height (preparation for area)"
          ],
          relevantFormulas: [
            "Parallelogram properties:",
            "  • Opposite sides are parallel and equal in length",
            "  • Opposite angles are equal",
            "  • Adjacent angles are supplementary (add to 180°)",
            "Parallelogram perimeter: P = 2(a + b) or P = a + b + a + b",
            "Example: If sides are 8 cm and 5 cm, P = 2(8 + 5) = 26 cm",
            "Note: Perimeter uses the slant side, NOT the perpendicular height"
          ],
          availableTools: ["parallelogram"]
        },
        {
          id: "parallelogram-area",
          title: "Parallelogram Area - Perpendicular Height",
          difficulty: "intermediate",
          prerequisites: ["parallelogram-properties"],
          masterySignals: "Student calculates parallelogram area using perpendicular height in 3+ problems, clearly distinguishing height from slant side",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct area calculations without hints",
                "Consistently uses perpendicular height, NOT slant side"
              ],
              qualitative: [
                "Correctly applies A = base × perpendicular height (A = bh)",
                "CRITICAL: Distinguishes perpendicular height from slant side",
                "Understands perpendicular height is measured at 90° to the base",
                "Identifies which measurement is the base and which is the height",
                "Does NOT use slant side in area formula",
                "Understands parallelogram can be transformed to rectangle with same area",
                "Can explain why area = base × height (cut and rearrange to rectangle)",
                "Uses correct squared units for area (cm², m²)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints distinguishing height from slant side"],
              qualitative: [
                "Knows formula A = bh but sometimes uses slant side instead of height",
                "Needs prompting to identify perpendicular height",
                "Understands concept after reminder about 90° angle",
                "Makes errors when diagram shows slant side more prominently",
                "Can calculate once height is clearly identified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect area calculations", "Consistently uses slant side instead of height"],
              qualitative: [
                "Does not understand difference between perpendicular height and slant side",
                "Uses slant side in area formula (common misconception: A = b × slant side)",
                "Thinks area formula is same as perimeter formula",
                "Cannot identify which measurement is perpendicular to base",
                "Confuses parallelogram area with rectangle area (though concept is related)"
              ]
            }
          },
          learningObjectives: [
            "CRITICAL: Understand perpendicular height is measured at 90° to the base",
            "Distinguish perpendicular height from slant side length",
            "Calculate parallelogram area using A = base × height",
            "Understand parallelogram can be cut and rearranged into rectangle",
            "Recognize that area = base × height comes from rectangle transformation",
            "Identify base and perpendicular height from diagrams",
            "Solve problems where height or base must be found given area",
            "Apply area formula to real-world contexts (tiles, floors, fields)"
          ],
          relevantFormulas: [
            "Parallelogram area: A = base × height (A = bh)",
            "CRITICAL: height = perpendicular height (at 90° to base), NOT slant side",
            "Why this works: Parallelogram can be cut and rearranged to form rectangle",
            "Rectangle with same base and height has same area",
            "Given area and base: height = A ÷ base",
            "Given area and height: base = A ÷ height",
            "Example: base = 12 cm, height = 7 cm → A = 12 × 7 = 84 cm²",
            "Common mistake: Using slant side instead of perpendicular height",
            "Visual check: Look for the 90° angle marking the perpendicular height"
          ],
          availableTools: ["parallelogram"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Rectangles Review (foundational) - Review rectangle and square perimeter and area",
      "2. Parallelogram Properties (foundational→intermediate) - Learn properties and calculate perimeter",
      "3. Parallelogram Area (intermediate) - CRITICAL: Distinguish height from slant side, calculate area"
    ],

    keyFormulas: `• Rectangle: P = 2(l + w), A = l × w
                  • Square: P = 4s, A = s²
                  • Parallelogram properties: opposite sides parallel and equal
                  • Parallelogram perimeter: P = 2(a + b)
                  • Parallelogram area: A = base × height (NOT slant side!)
                  • CRITICAL: Perpendicular height is at 90° to base
                  • Units: Perimeter in cm/m, Area in cm²/m²`
  },

  's1-math-perimeter-area-trapeziums': {
    displayName: 'Trapeziums',
    topicName: 'trapeziums - their properties, perimeter, and area',

    progressionStructure: {
      sections: [
        {
          id: "trapezium-properties",
          title: "Trapezium Properties and Identification",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["parallelogram-area"],
          masterySignals: "Student correctly identifies trapeziums, names parallel sides, and calculates perimeter in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct identifications and perimeter calculations",
                "Correctly identifies parallel sides in all problems"
              ],
              qualitative: [
                "Defines trapezium as quadrilateral with exactly one pair of parallel sides",
                "Identifies which sides are parallel (usually marked with arrows)",
                "Recognizes the two parallel sides are called bases",
                "Identifies the non-parallel sides as legs",
                "Calculates perimeter by adding all four sides",
                "Can identify perpendicular height (perpendicular to parallel sides)",
                "Distinguishes trapezium from parallelogram (parallelogram has TWO pairs of parallel sides)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on identifying parallel sides"],
              qualitative: [
                "Understands trapezium has parallel sides but needs help identifying which ones",
                "Can calculate perimeter once sides are clearly labeled",
                "Needs prompting to recognize parallel side markers (arrows)",
                "Sometimes confuses trapezium with parallelogram"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect identifications", "Cannot identify parallel sides"],
              qualitative: [
                "Does not understand what parallel means",
                "Cannot identify which sides are parallel even with markings",
                "Confuses trapezium with other quadrilaterals",
                "Cannot distinguish between bases (parallel) and legs (non-parallel)",
                "Thinks all trapeziums are regular or have equal legs"
              ]
            }
          },
          learningObjectives: [
            "Define trapezium as quadrilateral with exactly one pair of parallel sides",
            "Identify parallel sides (bases) using parallel markers (arrows)",
            "Recognize the two parallel sides can have different lengths",
            "Identify non-parallel sides as legs",
            "Calculate trapezium perimeter by adding all four side lengths",
            "Identify perpendicular height as distance between parallel sides",
            "Distinguish trapezium from parallelogram (which has TWO pairs of parallel sides)"
          ],
          relevantFormulas: [
            "Trapezium definition: Quadrilateral with exactly one pair of parallel sides",
            "Terminology:",
            "  • Bases = the two parallel sides (often labeled a and b)",
            "  • Legs = the two non-parallel sides",
            "  • Height = perpendicular distance between parallel sides",
            "Trapezium perimeter: P = a + b + c + d (sum of all four sides)",
            "Parallel sides notation: Sides marked with matching arrows (→ →)",
            "Example: If sides are 10 cm, 6 cm, 5 cm, 5 cm → P = 10 + 6 + 5 + 5 = 26 cm"
          ],
          availableTools: ["trapezium"]
        },
        {
          id: "trapezium-area",
          title: "Trapezium Area Formula",
          difficulty: "intermediate",
          prerequisites: ["trapezium-properties"],
          masterySignals: "Student correctly applies trapezium area formula A = ½(a + b)h in 3+ problems, identifying parallel sides and perpendicular height",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ correct area calculations without hints",
                "Consistently identifies parallel sides (a, b) and height (h)"
              ],
              qualitative: [
                "Correctly applies A = ½(a + b) × h or A = ½h(a + b)",
                "Identifies which two sides are parallel (bases a and b)",
                "Identifies perpendicular height h (perpendicular to both parallel sides)",
                "Understands formula as: (average of parallel sides) × height",
                "Calculates (a + b) first, then multiplies by ½h",
                "Can rearrange formula to find missing dimension given area",
                "Uses correct squared units for area",
                "Can explain why formula uses average of parallel sides"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on identifying a, b, and h"],
              qualitative: [
                "Knows formula but struggles to identify which sides are a, b, and h",
                "Makes arithmetic errors (e.g., forgets to multiply by ½)",
                "Needs prompting to identify parallel sides vs height",
                "Can calculate once dimensions are clearly labeled",
                "Sometimes uses non-parallel sides instead of parallel ones"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect calculations", "Uses wrong dimensions in formula"],
              qualitative: [
                "Does not understand which sides are a and b (parallel sides)",
                "Uses legs (non-parallel sides) instead of bases in formula",
                "Confuses height with leg length",
                "Forgets the ½ factor completely",
                "Cannot identify perpendicular height from diagram",
                "Uses wrong formula (e.g., tries to use parallelogram or rectangle formula)"
              ]
            }
          },
          learningObjectives: [
            "Understand trapezium area formula: A = ½(a + b) × h",
            "Identify a and b as the lengths of the two parallel sides (bases)",
            "Identify h as perpendicular height (perpendicular to both parallel sides)",
            "Recognize formula can be written as: A = ½h(a + b) or A = h(a + b)/2",
            "Understand intuition: area = (average of bases) × height",
            "Calculate area by: (1) adding parallel sides, (2) multiplying by height, (3) dividing by 2",
            "Solve for missing dimensions when area is given",
            "Apply formula to real-world contexts (pools, roof shapes, fields)"
          ],
          relevantFormulas: [
            "Trapezium area: A = ½(a + b) × h",
            "Alternative forms: A = ½h(a + b) or A = h(a + b)/2",
            "Where:",
            "  • a = length of first parallel side (base)",
            "  • b = length of second parallel side (base)",
            "  • h = perpendicular height between parallel sides",
            "Intuition: A = (average of parallel sides) × height",
            "Average of parallel sides = (a + b)/2",
            "Step-by-step: (1) Add a + b, (2) Multiply by h, (3) Divide by 2",
            "Example: a = 10 cm, b = 6 cm, h = 8 cm",
            "  A = ½(10 + 6) × 8 = ½(16) × 8 = 8 × 8 = 64 cm²",
            "Finding height: h = 2A ÷ (a + b)",
            "Common mistake: Using legs instead of parallel sides for a and b"
          ],
          availableTools: ["trapezium"]
        },
        {
          id: "trapezium-applications",
          title: "Trapezium Problem Solving",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["trapezium-area"],
          masterySignals: "Student solves multi-step trapezium problems, finds missing dimensions, and applies to real-world contexts in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ complex problems solved correctly with minimal hints",
                "Correctly works backwards from area to find dimensions"
              ],
              qualitative: [
                "Solves for missing parallel side given area, other base, and height",
                "Solves for height given area and both parallel sides",
                "Applies both perimeter and area formulas in combined problems",
                "Interprets word problems to extract trapezium dimensions",
                "Identifies when a real-world shape is a trapezium",
                "Can verify answer by working forwards",
                "Handles problems with mixed units (converts appropriately)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with guidance on setting up equations"],
              qualitative: [
                "Understands how to rearrange formula but makes algebraic errors",
                "Needs hints to identify which dimension is missing",
                "Can solve once equation is set up",
                "Struggles with word problems but succeeds with clear diagrams"
              ]
            },
            struggling: {
              quantitative: ["Cannot set up equation", "Multiple incorrect attempts"],
              qualitative: [
                "Does not know how to work backwards from area",
                "Cannot rearrange trapezium area formula",
                "Confuses which variable to solve for",
                "Cannot extract dimensions from word problems",
                "Gives up quickly on multi-step problems"
              ]
            }
          },
          learningObjectives: [
            "Solve for missing parallel side: a = (2A/h) − b or b = (2A/h) − a",
            "Solve for missing height: h = 2A/(a + b)",
            "Apply both perimeter and area in combined problems",
            "Interpret word problems to identify trapezium dimensions",
            "Recognize real-world trapeziums (roof shapes, swimming pools, fields)",
            "Verify solutions by substituting back into original formula",
            "Handle problems with fractional or decimal dimensions"
          ],
          relevantFormulas: [
            "Area formula: A = ½(a + b) × h",
            "Rearrangements:",
            "  • To find height: h = 2A ÷ (a + b)",
            "  • To find unknown base: a = (2A ÷ h) − b",
            "Perimeter formula: P = a + b + c + d",
            "Problem-solving steps:",
            "  1. Draw and label diagram",
            "  2. Identify known dimensions",
            "  3. Identify what to find",
            "  4. Choose appropriate formula",
            "  5. Substitute known values",
            "  6. Solve for unknown",
            "  7. Verify answer makes sense",
            "Example: Area = 72 cm², bases a = 10 cm and b = 8 cm, find h",
            "  72 = ½(10 + 8) × h",
            "  72 = ½(18) × h",
            "  72 = 9h",
            "  h = 72 ÷ 9 = 8 cm"
          ],
          availableTools: ["trapezium"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 3 sections:",
      "1. Trapezium Properties (foundational→intermediate) - Identify trapeziums, parallel sides, calculate perimeter",
      "2. Trapezium Area (intermediate) - Apply area formula A = ½(a + b)h",
      "3. Trapezium Applications (intermediate→advanced) - Solve complex problems, find missing dimensions"
    ],

    keyFormulas: `• Trapezium: Quadrilateral with one pair of parallel sides
                  • Parallel sides called bases (a and b)
                  • Perimeter: P = a + b + c + d (sum of all sides)
                  • Area: A = ½(a + b) × h where h is perpendicular height
                  • Alternative: A = (average of bases) × height
                  • To find height: h = 2A ÷ (a + b)
                  • To find base: a = (2A ÷ h) − b`
  },

  's1-math-perimeter-area-composite': {
    displayName: 'Composite Figures',
    topicName: 'composite shapes - breaking down complex figures and calculating their area',

    progressionStructure: {
      sections: [
        {
          id: "decomposition-strategy",
          title: "Breaking Down Composite Shapes",
          difficulty: "intermediate",
          prerequisites: ["trapezium-area"],
          masterySignals: "Student correctly identifies how to break composite shapes into basic shapes in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ composite shapes correctly decomposed",
                "Consistently identifies all component shapes"
              ],
              qualitative: [
                "Recognizes composite shape is made of multiple basic shapes",
                "Identifies individual shapes: rectangles, squares, triangles, semicircles, parallelograms, trapeziums",
                "Determines dimensions of each component shape",
                "Recognizes when shapes are added together vs subtracted (cutouts)",
                "Labels dimensions systematically on diagram",
                "Can find missing dimensions using given information",
                "Plans calculation strategy before computing"
              ]
            },
            developing: {
              quantitative: ["1-2 shapes decomposed with hints"],
              qualitative: [
                "Can identify some component shapes but misses others",
                "Needs guidance on how to partition the figure",
                "Struggles to find dimensions of component shapes",
                "Needs prompting to recognize overlapping or subtracted regions"
              ]
            },
            struggling: {
              quantitative: ["Cannot identify component shapes", "Does not know where to start"],
              qualitative: [
                "Does not understand concept of decomposition",
                "Sees composite shape as one unfamiliar shape, cannot break it down",
                "Cannot identify basic shapes within the composite",
                "Randomly guesses which formulas to use",
                "Cannot determine dimensions of components"
              ]
            }
          },
          learningObjectives: [
            "Understand composite shape is made from combining basic shapes",
            "Identify component shapes: rectangles, squares, triangles, semicircles, trapeziums, parallelograms",
            "Use decomposition strategy: break complex shape into simpler parts",
            "Determine dimensions of each component using given information",
            "Recognize addition method (combine areas) vs subtraction method (area with cutouts)",
            "Find missing dimensions by analyzing relationships",
            "Draw lines to partition composite shapes clearly"
          ],
          relevantFormulas: [
            "Decomposition strategy:",
            "  1. Identify basic shapes that make up the composite",
            "  2. Determine dimensions of each component shape",
            "  3. Find missing dimensions using given information",
            "  4. Calculate area of each component",
            "  5. Add or subtract areas as appropriate",
            "Basic shape areas:",
            "  • Rectangle: A = l × w",
            "  • Square: A = s²",
            "  • Triangle: A = ½bh",
            "  • Semicircle: A = ½πr²",
            "  • Parallelogram: A = bh",
            "  • Trapezium: A = ½(a + b)h",
            "Addition method: Total area = Area₁ + Area₂ + Area₃ + ...",
            "Subtraction method: Total area = Large shape − Cutout shape(s)"
          ],
          availableTools: ["compositeShape", "rectangle", "square", "semicircle"]
        },
        {
          id: "addition-method",
          title: "Composite Shapes - Addition Method",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["decomposition-strategy"],
          masterySignals: "Student correctly calculates area of composite shapes by adding component areas in 3+ problems",
          estimatedQuestions: "5-6 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ composite area problems solved correctly",
                "Consistently adds component areas accurately"
              ],
              qualitative: [
                "Breaks composite shape into basic components",
                "Calculates area of each component correctly",
                "Adds all component areas to get total",
                "Handles L-shapes, T-shapes, U-shapes, and stepped shapes",
                "Works with shapes containing semicircles (stadium, arch shapes)",
                "Uses correct formula for each component shape",
                "Includes correct squared units in final answer",
                "Can verify answer makes sense (total should be larger than any component)"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on calculating component areas"],
              qualitative: [
                "Can break down shape but makes errors calculating individual areas",
                "Forgets to add one of the component areas",
                "Uses wrong formula for one of the components",
                "Needs prompting to identify all components",
                "Can complete once component areas are found"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect calculations", "Cannot complete decomposition"],
              qualitative: [
                "Cannot break down composite shape into components",
                "Uses wrong formulas for multiple components",
                "Adds dimensions instead of areas",
                "Multiplies areas instead of adding them",
                "Cannot handle shapes with curved portions (semicircles)"
              ]
            }
          },
          learningObjectives: [
            "Apply addition method: Total area = sum of component areas",
            "Calculate area of L-shaped figures (two rectangles)",
            "Calculate area of T-shaped figures (two rectangles)",
            "Calculate area of U-shaped figures (three rectangles)",
            "Calculate area of stepped/staircase figures (multiple rectangles)",
            "Handle composite shapes with semicircles (stadium = rectangle + 2 semicircles = rectangle + circle)",
            "Handle arch shapes (rectangle + semicircle on top)",
            "Organize calculations systematically to avoid missing components"
          ],
          relevantFormulas: [
            "Addition method: Total Area = Area₁ + Area₂ + Area₃ + ...",
            "Common composite shapes:",
            "• L-shape: Two rectangles",
            "  - Break at the corner",
            "  - Calculate area of each rectangle",
            "  - Add the two areas",
            "• T-shape: Two rectangles (horizontal + vertical)",
            "• U-shape: Three rectangles (two vertical sides + horizontal bottom)",
            "• Stadium: Rectangle + 2 semicircles",
            "  - Two semicircles = one full circle",
            "  - Total = Rectangle area + Circle area",
            "  - A = (l × w) + πr²",
            "• Arch (Rectangle + semicircle on top):",
            "  - A = Rectangle area + Semicircle area",
            "  - A = (l × w) + ½πr²",
            "Example: L-shape with dimensions 10×6 cm and 8×4 cm",
            "  Area = (10 × 6) + (8 × 4) = 60 + 32 = 92 cm²",
            "Note: π ≈ 3.14 or use fraction 22/7 for more exact answers"
          ],
          availableTools: ["compositeShape"]
        },
        {
          id: "subtraction-method",
          title: "Composite Shapes - Subtraction Method",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["addition-method"],
          masterySignals: "Student correctly calculates area of shapes with cutouts using subtraction method in 3+ problems",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ subtraction problems solved correctly",
                "Correctly identifies when to subtract vs add"
              ],
              qualitative: [
                "Recognizes when a shape has a cutout or hole",
                "Applies subtraction method: Outer area − Cutout area",
                "Calculates area of outer (larger) shape correctly",
                "Calculates area of cutout (hole) correctly",
                "Subtracts cutout from outer shape",
                "Handles shapes with circular or rectangular cutouts",
                "Handles shapes with multiple cutouts (subtract all)",
                "Can explain when to use subtraction vs addition method"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with hints on identifying cutout"],
              qualitative: [
                "Can calculate individual areas but forgets to subtract",
                "Sometimes adds when should subtract",
                "Needs prompting to recognize cutout/hole",
                "Makes errors calculating cutout area",
                "Can complete once method is clarified"
              ]
            },
            struggling: {
              quantitative: ["Multiple incorrect attempts", "Does not recognize cutouts"],
              qualitative: [
                "Does not understand subtraction method concept",
                "Adds all areas instead of subtracting cutout",
                "Cannot identify which part is cutout vs outer shape",
                "Uses wrong formulas for cutout shapes",
                "Cannot handle circular cutouts (struggles with πr²)"
              ]
            }
          },
          learningObjectives: [
            "Recognize when a composite shape has a cutout (hole, window, pool)",
            "Apply subtraction method: Total area = Outer area − Cutout area",
            "Calculate area of outer (larger) shape",
            "Calculate area of cutout (removed portion)",
            "Subtract cutout area from outer area",
            "Handle rectangular shapes with rectangular cutouts",
            "Handle rectangular shapes with circular cutouts",
            "Solve problems with multiple cutouts (subtract all cutouts)",
            "Apply to real-world contexts (flooring with hole, picture frame, window)"
          ],
          relevantFormulas: [
            "Subtraction method: Total Area = Outer Area − Cutout Area",
            "For multiple cutouts: Total = Outer − Cutout₁ − Cutout₂ − ...",
            "Common subtraction problems:",
            "• Rectangle with rectangular cutout:",
            "  - Calculate outer rectangle: A₁ = l₁ × w₁",
            "  - Calculate cutout rectangle: A₂ = l₂ × w₂",
            "  - Total area = A₁ − A₂",
            "• Rectangle with circular cutout:",
            "  - Calculate rectangle: A₁ = l × w",
            "  - Calculate circle: A₂ = πr²",
            "  - Total area = A₁ − A₂",
            "• Square with semicircular cutout:",
            "  - Calculate square: A₁ = s²",
            "  - Calculate semicircle: A₂ = ½πr²",
            "  - Total area = A₁ − A₂",
            "Example: 20 cm × 15 cm rectangle with 8 cm × 6 cm rectangular cutout",
            "  Outer = 20 × 15 = 300 cm²",
            "  Cutout = 8 × 6 = 48 cm²",
            "  Total = 300 − 48 = 252 cm²",
            "Real-world: Floor area with opening for stairwell, window in wall, pool in yard"
          ],
          availableTools: ["compositeShape"]
        },
        {
          id: "complex-composites",
          title: "Advanced Composite Shape Problems",
          difficulty: "advanced",
          prerequisites: ["subtraction-method"],
          masterySignals: "Student solves complex composite problems combining addition and subtraction methods, with multiple components and curved edges",
          estimatedQuestions: "4-5 questions",
          masteryRubric: {
            mastery: {
              quantitative: [
                "3+ complex composite problems solved with minimal hints",
                "Combines multiple methods correctly"
              ],
              qualitative: [
                "Handles shapes requiring both addition and subtraction",
                "Works with irregular composites (e.g., L-shape with circular cutout)",
                "Manages shapes with multiple semicircles or curves",
                "Correctly applies π for circular portions (uses 3.14 or 22/7)",
                "Simplifies fractions and decimals appropriately",
                "Solves word problems by drawing diagrams first",
                "Verifies answer makes sense given dimensions",
                "Can work backwards: given total area, find missing dimension"
              ]
            },
            developing: {
              quantitative: ["1-2 correct with guidance on strategy"],
              qualitative: [
                "Can handle complex shapes with significant scaffolding",
                "Makes arithmetic errors with π calculations",
                "Needs help organizing multi-step approach",
                "Struggles to find missing dimensions",
                "Can complete once problem is broken into smaller steps"
              ]
            },
            struggling: {
              quantitative: ["Cannot approach complex problems", "Overwhelmed by multiple steps"],
              qualitative: [
                "Does not know where to start with complex shapes",
                "Cannot combine multiple methods (addition + subtraction)",
                "Gives up when seeing curved edges or multiple components",
                "Cannot draw diagram from word problem description",
                "Makes multiple calculation errors"
              ]
            }
          },
          learningObjectives: [
            "Solve complex composite problems combining multiple methods",
            "Handle shapes requiring both addition and subtraction in one problem",
            "Work with irregular composites (e.g., T-shape with circular cutout)",
            "Manage multiple curved edges (multiple semicircles)",
            "Apply systematic problem-solving approach",
            "Draw diagrams from word problem descriptions",
            "Find missing dimensions given total area and most dimensions",
            "Verify answers using estimation and reasonableness checks"
          ],
          relevantFormulas: [
            "Complex composite strategy:",
            "  1. Draw and label complete diagram",
            "  2. Identify ALL component shapes (added and subtracted)",
            "  3. Find any missing dimensions using given info",
            "  4. Calculate area of each component",
            "  5. Add areas for combined shapes",
            "  6. Subtract areas for cutouts",
            "  7. Verify answer is reasonable",
            "Example: L-shape (two rectangles) with circular cutout",
            "  Step 1: Area of rectangle 1",
            "  Step 2: Area of rectangle 2",
            "  Step 3: Add rectangles: A₁ + A₂",
            "  Step 4: Area of circle cutout: πr²",
            "  Step 5: Total = (A₁ + A₂) − πr²",
            "Complex example: Stadium with rectangular cutout",
            "  Rectangle + Circle − Small rectangle",
            "π approximations: π ≈ 3.14 or π ≈ 22/7",
            "Finding missing dimension:",
            "  Rearrange area formula to solve for unknown",
            "  Example: Total = 500 cm², known areas = 200 cm² + 150 cm², find missing",
            "  Missing = 500 − 200 − 150 = 150 cm²"
          ],
          availableTools: ["compositeShape", "rectangle", "parallelogram", "trapezium", "semicircle"]
        }
      ]
    },

    learningObjectives: [
      "Students will progress through 4 sections:",
      "1. Decomposition Strategy (intermediate) - Break composite shapes into basic components",
      "2. Addition Method (intermediate→advanced) - Calculate area by adding components (L, T, U shapes, stadium, arch)",
      "3. Subtraction Method (intermediate→advanced) - Calculate area with cutouts (holes, windows)",
      "4. Complex Composites (advanced) - Combine methods, handle irregular shapes, find missing dimensions"
    ],

    keyFormulas: `• Decomposition: Break complex shapes into basic shapes
                  • Addition method: Total = Area₁ + Area₂ + Area₃ + ...
                  • Subtraction method: Total = Outer area − Cutout area
                  • Basic shapes: Rectangle (lw), Square (s²), Triangle (½bh), Circle (πr²), Semicircle (½πr²)
                  • L-shape: Two rectangles added
                  • Stadium: Rectangle + Circle (or Rectangle + 2 semicircles)
                  • Arch: Rectangle + Semicircle
                  • With cutouts: Calculate outer shape, subtract cutout(s)
                  • π ≈ 3.14 or 22/7`
  }
};

// ==========================
// GLOBAL TOPIC CONFIGURATION
// ==========================

export const S1_PERIMETER_AREA_CONFIG = {
  tutor: PERIMETER_AREA_TUTOR_CUSTOMIZATION,
  mathTools: PERIMETER_AREA_MATH_TOOLS,
  subtopics: S1_MATH_PERIMETER_AREA_SUBTOPICS
};
