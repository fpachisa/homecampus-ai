/**
 * Secondary 3 Mathematics - Trigonometry Topics
 *
 * AI-First Approach: Minimal configuration, maximum AI intelligence
 * - Mastery-based progression (no points)
 * - Learning objectives derived from curriculum
 * - AI generates appropriate questions (conceptual, word problems, calculations)
 * - Clear input/output contracts
 */

// ============================================
// TYPE EXPORTS
// ============================================

export type TrigonometryTopicId =
  | 's3-math-trigonometry-basic-ratios'
  | 's3-math-trigonometry-problem-solving'
  | 's3-math-trigonometry-true-bearings'
  | 's3-math-trigonometry-obtuse-angles'
  | 's3-math-trigonometry-area-of-triangle'
  | 's3-math-trigonometry-sine-rule'
  | 's3-math-trigonometry-cosine-rule';

// ============================================
// CONFIGURATION STRUCTURE
// ============================================

export const S3_MATH_TRIGONOMETRY_CONFIG = {

  // ============================================
  // GLOBAL: Socratic Tutor Identity (Reference for Tutor Agent Only)
  // ============================================
  TUTOR_ROLE: `[REFERENCE - Used for Tutor Agent Socratic responses only, NOT for Question/Solution/Evaluator agents]

You are a Socratic mathematics tutor for secondary school students learning Trigonometry.

Your Teaching Approach:
- Guide students to discover solutions through questioning, not direct instruction
- Provide progressive hints only when students are stuck
- Celebrate insights and encourage perseverance
- Use relatable, real-world contexts
- Assess understanding through dialogue, not just correct answers
- Adapt difficulty organically based on student mastery

**IMPORTANT - Text-to-Speech Guidelines:**
When generating speech.text (what the avatar will speak aloud):
- Use "S O H, C A H, T O A" instead of "SOH-CAH-TOA" for proper pronunciation
- Avoid acronyms that might be mispronounced - spell them out with spaces
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use "SOH-CAH-TOA" normally

Your Visual Tools:
You have access to PRE-BUILT visual tools to help explain concepts:
- Use tools when they genuinely help understanding (not for every question)
- See MATH_TOOLS section for full details on available tools and how to use them
- IMPORTANT: Use the technical name (e.g., "generalTriangle") in the toolName field, NOT the display name

When you use a visual tool, include it in your response using the mathTool field.`,

  // ============================================
  // GLOBAL: Question Agent Role (Minimal, Focused)
  // ============================================
  QUESTION_AGENT_ROLE: `You are the Question Generation Agent - execute targeted instructions to generate questions.

Your sole responsibility is to generate questions based on precise instructions from the Evaluator Agent.
You do NOT make pedagogical decisions about what concepts to test or when to advance difficulty.`,

  // ============================================
  // GLOBAL: Solution Agent Role (Minimal, Focused)
  // ============================================
  SOLUTION_AGENT_ROLE: `You are the Solution Generation Agent - execute targeted instructions to generate step-by-step solutions.

Your sole responsibility is to generate clear, educational solutions based on precise instructions from the Evaluator Agent.
You do NOT make pedagogical decisions about explanation depth or what concepts to emphasize beyond the instructions.`,

  // ============================================
  // GLOBAL: Mastery-Based Progression (moved to progressionStructure in each subtopic)
  // ============================================
  // NOTE: PROGRESSION_MODEL has been consolidated into progressionStructure.masteryPhilosophy
  // This ensures single source of truth and no duplication

  // ============================================
  // GLOBAL: Formatting Rules (CRITICAL - All Agents Must Follow)
  // ============================================
  /**
   * FORMATTING_RULES - Universal formatting guidelines for all AI responses
   *
   * WHY THIS EXISTS:
   * - Single source of truth prevents circular regex/LaTeX issues
   * - MathText.tsx has specific requirements that must be followed
   * - Prevents AI from generating malformed LaTeX that breaks rendering
   *
   * IMPORTANT: These rules are automatically injected into all agent prompts.
   * DO NOT duplicate these rules in individual prompts - reference this global constant.
   */
  FORMATTING_RULES: {
    description: "Universal formatting rules that all AI agents must follow in their responses",

    latex: {
      dollarAmounts: {
        rule: "Use \\$1,500,000 (backslash-escaped, NO $ delimiters)",
        examples: {
          correct: "\\$1,500,000 per hectare",
          incorrect: "$\\$1,500,000$ per hectare"
        },
        reason: "MathText.tsx regex /\\$([^$]+)\\$/g cannot handle escaped $ inside delimiters"
      },

      mathExpressions: {
        rule: "Use $expression$ (WITH $ delimiters, NO escaped $ inside)",
        examples: {
          correct: "$x^2 + 3x = 10$",
          correctWithDegree: "$45^{\\circ}$",
          correctWithText: "$1 \\text{ hectare} = 10,000 \\text{ m}^2$",
          incorrect: "$\\$100$ investment" // DO NOT put \$ inside $ delimiters
        },
        reason: "MathText.tsx processes LaTeX inside $ delimiters with KaTeX"
      },

      generalGuideline: "NEVER mix dollar amounts and LaTeX delimiters. Use \\$ for money, $ for math, never both together."
    },

    speech: {
      format: {
        rule: "PLAIN TEXT only - no markdown (* _ ** ###), no LaTeX ($ \\), no hyphens in compound words/acronyms",
        examples: {
          correct: "Let's use S O H C A H T O A to solve this. The angle is 30 degrees.",
          incorrect: "Let's use SOH-CAH-TOA to solve this. The angle is $30^{\\circ}$."
        },
        reason: "speech.text is read aloud by text-to-speech engine which cannot parse markdown or LaTeX"
      },

      acronyms: {
        rule: "Use spaces between letters for proper pronunciation",
        examples: {
          correct: "S O H C A H T O A",
          incorrect: "SOH-CAH-TOA"
        },
        reason: "TTS engines pronounce hyphens incorrectly"
      },

      numbers: {
        rule: "Write numbers naturally for speech",
        examples: {
          correct: "30 degrees",
          incorrect: "30°"
        }
      }
    },

    display: {
      format: {
        rule: "Can use markdown (**, *, ###, -) and LaTeX ($...$) freely",
        examples: {
          correct: "### Step 1\n\nWe have $\\sin(45^{\\circ}) = \\frac{x}{10}$\n\n**Important:** The opposite side is..."
        },
        reason: "display.content is rendered visually with full markdown/LaTeX support"
      },

      structuring: {
        headings: "Use ### for step headings",
        emphasis: "Use **bold** for key concepts",
        latex: "Use $ delimiters for all math expressions"
      }
    },

    commonMistakes: [
      {
        mistake: "Putting \\$1,500,000 inside $ delimiters",
        fix: "Use \\$1,500,000 (no delimiters) OR write '1,500,000 dollars' OR use 'USD 1,500,000'"
      },
      {
        mistake: "Using LaTeX in speech.text",
        fix: "speech.text must be plain text. Save LaTeX for display.content"
      },
      {
        mistake: "Using hyphens in speech (30-60-90 triangle)",
        fix: "Use spaces: '30 60 90 triangle'"
      }
    ]
  },

  // ============================================
  // GLOBAL: Visual Math Tools
  // ============================================
  MATH_TOOLS: {
    description: "Pre-built visual tools the AI can use to help students understand concepts visually. IMPORTANT: When using tools, the toolName field must use the technical key (e.g., 'rightTriangle'), NOT the display name.",

    availableTools: {
      rightTriangle: {
        name: "Right Triangle Visualizer",
        technicalName: "rightTriangle",
        component: "RightTriangleVisualizer",
        description: "Interactive right triangle for teaching trig ratios (SOH-CAH-TOA) and solving for unknown sides or angles. Use angle:null when asking students to find the angle (displays 'θ'). Set showSideTypeLabels:false when asking students to identify sides, true when explaining which side is which.",

        parameters: {
          angle: "number (0-90) | null - the acute angle in degrees, or null/0 to auto-calculate from sides. IMPORTANT: Use null or 0 when asking students to find the angle. The component will: (1) auto-calculate correct angle from given side lengths for proper triangle proportions, (2) display 'θ' instead of numeric value",
          hypotenuse: "string - label for hypotenuse (e.g., '10', '10m', 'h')",
          opposite: "string - label for opposite side (e.g., 'x', '5', '5cm')",
          adjacent: "string - label for adjacent side (e.g., 'y', '8', '8m')",
          highlightSide: "'opposite' | 'adjacent' | 'hypotenuse' | 'none' - which side to highlight in red",
          showAngleMark: "boolean - show the angle arc and label (will show 'θ' if angle is null/0)",
          showRightAngle: "boolean - show the right angle marker",
          showSideTypeLabels: "boolean (default: false) - show descriptive labels '(Opposite)', '(Adjacent)', '(Hypotenuse)' below side labels. Set to false when asking students to identify sides, set to true when explaining/teaching which side is which."
        },

        exampleUsage: {
          scenario: "Finding opposite side with known angle",
          caption: "Find the opposite side x when angle=35° and hypotenuse=10",
          parameters: {
            angle: 35,
            hypotenuse: "10",
            opposite: "x",
            adjacent: "",
            highlightSide: "opposite",
            showAngleMark: true,
            showRightAngle: true,
            showSideTypeLabels: false
          }
        }
      },

      elevationDepression: {
        name: "Elevation and Depression Angle Visualizer",
        technicalName: "elevationDepression",
        component: "ElevationDepressionVisualizer",
        description: "Visualizes angles of elevation (looking up) and depression (looking down) with observer, target, horizontal reference line, and right triangle overlay. Use type='elevation' when observer looks UP, type='depression' when observer looks DOWN. Use angle:null when asking students to find the angle.",

        parameters: {
          type: "'elevation' | 'depression' - type of angle problem (elevation: looking up, depression: looking down)",
          angle: "number (0-90) | null - the angle in degrees, or null/0 to auto-calculate from height/distance and show 'θ'",
          height: "string - label for vertical distance (e.g., '50m', 'h', '120')",
          distance: "string - label for horizontal distance (e.g., '100m', 'd', '200')",
          observerLabel: "string (optional) - label for observer (default: 'Observer'). Can be 'Person', 'Boat', 'Plane', etc.",
          targetLabel: "string (optional) - label for target (default: 'Target'). Can be 'Top of building', 'Boat', 'Base', etc.",
          showTriangle: "boolean (default: true) - show the right triangle overlay with labeled sides",
          showRightAngle: "boolean (default: true) - show the right angle marker",
          highlightSide: "'height' | 'distance' | 'hypotenuse' | 'none' - which side to highlight in red"
        },

        exampleUsage: {
          scenario: "Angle of elevation problem - find height",
          caption: "A person 50m from a building looks up at 35°. Find the height h.",
          parameters: {
            type: "elevation",
            angle: 35,
            height: "h",
            distance: "50m",
            observerLabel: "Person",
            targetLabel: "Top of building",
            showTriangle: true,
            showRightAngle: true,
            highlightSide: "height"
          }
        }
      },

      cuboid: {
        name: "Cuboid (3D Box) Visualizer",
        technicalName: "cuboid",
        component: "CuboidVisualizer",
        description: "3D cuboid showing length, width, height, face diagonals (2D diagonal on a face like AC on base ABCD), and space diagonals (3D diagonal through body like AG). IMPORTANT: For angle problems (e.g., 'find angle GAC'), you MUST show BOTH diagonals: set showFaceDiagonal=true AND showSpaceDiagonal=true. Use diagonalFace to specify which face (bottom/front/side/top).",

        parameters: {
          length: "string - label for length/depth (front-back dimension, e.g., '8cm', 'l', '5')",
          width: "string - label for width (left-right dimension, e.g., '6cm', 'w', '10')",
          height: "string - label for height (up-down dimension, e.g., '4cm', 'h', '3')",
          faceDiagonal: "string (optional) - label for face diagonal (e.g., 'AC', 'd₁', 'x'). IMPORTANT: Set this when problem mentions base diagonal or face diagonal.",
          spaceDiagonal: "string (optional) - label for space/body diagonal (e.g., 'd', 'AG', 'y')",
          highlightElement: "'length' | 'width' | 'height' | 'faceDiagonal' | 'spaceDiagonal' | 'none' - which element to highlight in red",
          showFaceDiagonal: "boolean (default: false) - show diagonal on one face. CRITICAL: Set to true when problem mentions 'base diagonal' or asks about angle between space diagonal and base/face diagonal.",
          showSpaceDiagonal: "boolean (default: false) - show diagonal through the body (from one corner to opposite corner)",
          diagonalFace: "'bottom' | 'front' | 'side' | 'top' (default: 'bottom') - which face to show the face diagonal on. Use 'bottom' for base diagonal AC.",
          showVertexLabels: "boolean (default: false) - show vertex labels A, B, C, D (base), E, F, G, H (top)"
        },

        exampleUsage: {
          scenario: "Find angle between space diagonal and base diagonal",
          caption: "Cuboid showing angle GAC formed by space diagonal AG and base diagonal AC.",
          parameters: {
            length: "10m",
            width: "7m",
            height: "5m",
            faceDiagonal: "AC",
            spaceDiagonal: "AG",
            showFaceDiagonal: true,
            showSpaceDiagonal: true,
            diagonalFace: "bottom",
            highlightElement: "none",
            showVertexLabels: true
          }
        }
      },

      pyramid: {
        name: "Pyramid Visualizer",
        technicalName: "pyramid",
        component: "PyramidVisualizer",
        description: "3D pyramid visualization showing three key heights: perpendicular height (h: base center to apex, for volume), slant height (s: base edge midpoint to apex, for surface area), and lateral edge (e: base corner to apex). Use for teaching Pythagoras in 3D: s² = h² + (a/2)².",

        parameters: {
          baseLength: "string - label for base edge length (e.g., '10cm', 'a', '8'). For square pyramids, this is the side length.",
          baseWidth: "string (optional) - label for base width if rectangular pyramid (e.g., '8cm', 'b'). Omit for square pyramids.",
          height: "string - label for perpendicular height from base center to apex (e.g., '12cm', 'h', 'x')",
          slantHeight: "string (optional) - label for slant height from base edge midpoint to apex (e.g., '13cm', 's', 'l')",
          lateralEdge: "string (optional) - label for lateral edge from base vertex to apex (e.g., '15cm', 'e', 'y')",
          highlightElement: "'baseLength' | 'baseWidth' | 'height' | 'slantHeight' | 'lateralEdge' | 'none' - which element to highlight in red",
          pyramidType: "'square' | 'rectangular' (default: 'square') - type of pyramid base",
          showHeight: "boolean (default: true) - show perpendicular height line from base center to apex",
          showSlantHeight: "boolean (default: false) - show slant height line from base edge midpoint to apex",
          showVertexLabels: "boolean (default: false) - show vertex labels A, B, C, D (base), V (apex)"
        },

        exampleUsage: {
          scenario: "Find slant height given height and base",
          caption: "A square pyramid with base 10cm and height 12cm. Find slant height s.",
          parameters: {
            baseLength: "10cm",
            height: "12cm",
            slantHeight: "s",
            highlightElement: "slantHeight",
            pyramidType: "square",
            showHeight: true,
            showSlantHeight: true,
            showVertexLabels: false
          }
        }
      },

      bearings: {
        name: "Bearings Visualizer",
        technicalName: "bearings",
        component: "BearingsVisualizer",
        description: "Visualizes multi-point compass bearing navigation with North reference lines. Supports 2+ waypoints forming navigation paths or triangles. Shows bearings (000°-360° clockwise from North), distances, back bearings, and interior angles between path segments.",

        parameters: {
          points: "Array<{label, bearing?, backBearing?}> - array of waypoints. Each point has: label (string, e.g., 'A', 'Ship'), bearing (number 0-360, direction FROM this point), backBearing (number 0-360, optional reverse bearing TO this point)",
          legs: "Array<{fromPoint, toPoint, distance?}> - connections between points. Each leg has: fromPoint (number, index of start point), toPoint (number, index of end point), distance (string, e.g., '368 km')",
          showInteriorAngles: "boolean (default: false) - show interior angles at waypoints where paths meet",
          interiorAngleLabel: "string (default: 'θ') - label for interior angles",
          showCompassRose: "boolean (default: true) - show N/E/S/W compass rose at first point",
          showNorthLines: "boolean (default: true) - show North reference lines at all points",
          highlightPoint: "number (default: -1) - index of point to highlight, or -1 for none"
        },

        exampleUsage: {
          scenario: "Three-point bearing navigation forming a triangle",
          caption: "A plane flies from A on bearing 143° for 368 km to B, then bearing 233° for 472 km to C.",
          parameters: {
            points: [
              {label: "A", bearing: 143},
              {label: "B", bearing: 233, backBearing: 37},
              {label: "C"}
            ],
            legs: [
              {fromPoint: 0, toPoint: 1, distance: "368 km"},
              {fromPoint: 1, toPoint: 2, distance: "472 km"}
            ],
            showInteriorAngles: true,
            interiorAngleLabel: "θ",
            showCompassRose: true,
            showNorthLines: true,
            highlightPoint: -1
          }
        }
      },

      generalTriangle: {
        name: "General Triangle Visualizer",
        technicalName: "generalTriangle",
        component: "GeneralTriangleVisualizer",
        description: "Visualizes any triangle (acute, obtuse, right) with labeled sides and angles. Use for sine rule (a/sin A = b/sin B), cosine rule (c² = a² + b² - 2ab cos C), and area formula (Area = ½ab sin C). Use this instead of rightTriangle when the triangle is not right-angled or when teaching sine/cosine rules.",

        parameters: {
          sideA: "string (optional) - label for side a (opposite angle A, e.g., '10', '10cm', 'x', 'p')",
          sideB: "string (optional) - label for side b (opposite angle B, e.g., '8', '8m', 'y', 'q')",
          sideC: "string (optional) - label for side c (opposite angle C, e.g., '12', '12cm', 'z', 'r')",
          angleA: "number (0-180) | null - angle A in degrees, or null if unknown",
          angleB: "number (0-180) | null - angle B in degrees, or null if unknown",
          angleC: "number (0-180) | null - angle C in degrees, or null if unknown",
          angleA_label: "string (optional) - custom label for angle A arc (e.g., 'θ', '$45^{\\circ}$', 'x'). If not provided, shows angle value",
          angleB_label: "string (optional) - custom label for angle B arc",
          angleC_label: "string (optional) - custom label for angle C arc",
          vertexA_label: "string (optional, default: 'A') - label for vertex A (e.g., 'P', 'X', 'A')",
          vertexB_label: "string (optional, default: 'B') - label for vertex B (e.g., 'Q', 'Y', 'B')",
          vertexC_label: "string (optional, default: 'C') - label for vertex C (e.g., 'R', 'Z', 'C')",
          highlightSide: "'a' | 'b' | 'c' | 'none' - which side to highlight in red",
          highlightAngle: "'A' | 'B' | 'C' | 'none' - which angle to highlight",
          showAngles: "boolean (default: true) - show angle arcs and labels",
          showSides: "boolean (default: true) - show side labels",
          triangleType: "'acute' | 'obtuse' | 'right' | 'auto' (default: 'auto') - triangle type for visualization",
          showAmbiguousCase: "boolean (default: false) - show second possible triangle for SSA ambiguous case"
        },

        exampleUsage: [
          {
            scenario: "Sine rule - find unknown side",
            caption: "Triangle ABC with angle A = 45°, angle B = 60°, side a = 10. Find side b.",
            parameters: {
              sideA: "10",
              sideB: "b",
              sideC: "",
              angleA: 45,
              angleB: 60,
              angleC: 75,
              highlightSide: "b",
              highlightAngle: "none",
              showAngles: true,
              showSides: true,
              triangleType: "auto"
            }
          },
          {
            scenario: "Triangle PQR with custom vertex labels",
            caption: "Triangle PQR with side p opposite angle P, side q opposite angle Q.",
            parameters: {
              sideA: "p",
              sideB: "q",
              sideC: "r",
              angleA: 40,
              angleB: 60,
              angleC: 80,
              vertexA_label: "P",
              vertexB_label: "Q",
              vertexC_label: "R",
              showAngles: true,
              showSides: true,
              triangleType: "acute"
            }
          }
        ]
      }
    },

    usageGuidelines: "Use visual tools when they help clarify concepts or problem setups. Choose tools based on problem type (rightTriangle for right triangles, generalTriangle for sine/cosine rules, elevationDepression for angles of elevation/depression, etc.). Include as mathTool field with {toolName, parameters, caption}. Don't overuse - not every question needs a diagram."
  },

  // ============================================
  // GLOBAL: Input/Output Contract
  // ============================================
  INTERACTION_PROTOCOL: {

    description: "Clear contract between system and AI for consistent communication",

    // DIFFICULTY PROGRESSION MODEL
    progressionModel: {
      description: "AI-driven organic difficulty progression based on student mastery",
      difficultyLevels: {
        1: "foundational - Basic concepts, triangle labeling, understanding ratios",
        2: "intermediate - Calculations, applying ratios, word problems",
        3: "advanced - Complex problems, multi-step reasoning, real-world applications"
      },
      progressionMechanism: "The system tracks currentProblemType (1, 2, or 3). The AI signals readiness to advance via assessment.readyToAdvance field in tutorOutputs. When true, the system will increment difficulty level for subsequent questions.",
      guidelines: [
        "Set readyToAdvance: true when student demonstrates consistent mastery (e.g., 3+ correct answers in a row at current level)",
        "Set readyToAdvance: false if student is still developing understanding or making errors",
        "Progression is one-way (no automatic regression) - system trusts AI's judgment",
        "Questions should match the current difficulty level appropriately"
      ]
    },

    // What the AI receives from the system
    inputs: {
      studentContext: {
        currentSubtopic: "string - e.g., 's3-math-trigonometry-basic-ratios'",
        currentDifficultyLevel: "string - foundational | intermediate | advanced",
        chatHistory: "Message[] - last 6 messages for context",
        problemState: {
          currentProblem: "string - the problem/question being worked on",
          hintsGivenSoFar: "number - how many hints given for current problem",
          attemptsCount: "number - how many attempts student has made",
          recentPerformance: "string - summary of last 3-5 problems (e.g., 'Correct (1st try), Correct (1st try), Struggled (3 hints)')",
          originalMathTool: "MathTool | null - the original visual tool shown with the problem (for validation)"
        }
      },
      studentResponse: "string - what the student just submitted"
    },

    // EVALUATOR AGENT OUTPUT (internal evaluation only, NO UI generation)
    evaluatorOutputs: {
      answerCorrect: "boolean - is the student's answer correct?",
      isMainProblemSolved: "boolean - has the main problem been completely solved?",

      assessment: {
        understanding: "strong | developing | struggling - current understanding level based on PROGRESSION_MODEL",
        conceptGaps: "string[] - specific concepts student needs to work on (empty array if none)",
        readyToAdvance: "boolean - ready for next section? Based on PROGRESSION_MODEL mastery signals"
      },

      progression: {
        currentSection: "string - current section ID from progressionStructure (e.g., 'triangle-labeling')",
        sectionMastered: "boolean - has student mastered current section based on masterySignals?",
        masteryProgress: "string - brief description of progress toward mastery (e.g., '2/3 signals met')",
        nextSection: "string | null - next section ID if current is mastered, null otherwise"
      },

      action: "GIVE_HINT | GIVE_SOLUTION | NEW_PROBLEM | CELEBRATE - next action for UI agent to execute",
      hintLevel: "1 | 2 | 3 (optional) - which hint number if action is GIVE_HINT",

      // Targeted instructions for UI agents (only include the relevant one based on action)
      tutorInstruction: "object (optional) - if action is GIVE_HINT or CELEBRATE, provide targeted instruction for Tutor agent",
      questionInstruction: "object (optional) - if action is NEW_PROBLEM, provide targeted instruction for Question agent",
      solutionInstruction: "object (optional) - if action is GIVE_SOLUTION, provide targeted instruction for Solution agent",

      reasoning: "string - internal explanation for why this action was chosen (plain text, NO LaTeX)"
    },

    // TUTOR AGENT OUTPUT (UI generation based on evaluator instruction)
    // NOTE: Assessment is now owned by Evaluator, not Tutor
    tutorOutputs: {
      speech: {
        text: "string - what the avatar says (conversational, warm, encouraging). MUST be PLAIN TEXT - no markdown (* _ **), no LaTeX ($ \\), and NO usage of - like 30-60-90 or SOH-CAH-TAO (use space instead),  suitable for text-to-speech",
        emotion: "encouraging | celebratory | supportive | neutral"
      },

      display: {
        content: "string | null - what appears in chat bubble after speech (hint text or celebration message). Use null if only speech, no display needed",
        showAfterSpeech: "boolean - true if display appears after speech completes, false for immediate",
        type: "hint | celebration | feedback",
        notes: {
          hint: "Progressive hint for current question based on tutorInstruction from Evaluator",
          celebration: "Celebration message when student completes subtopic",
          feedback: "Brief feedback on student's attempt (for intermediate steps)"
        }
      },

      mathTool: "OPTIONAL (omit entirely if not needed) - Visual tool object with three fields: {toolName: string, parameters: object, caption: string}. Example: {\"toolName\": \"rightTriangle\", \"parameters\": {\"angle\": 35, \"hypotenuse\": \"10\", \"opposite\": \"x\", \"adjacent\": \"\", \"highlightSide\": \"opposite\", \"showAngleMark\": true, \"showRightAngle\": true, \"showSideTypeLabels\": false}, \"caption\": \"This triangle shows our setup.\"}. CRITICAL: toolName must be the technical key (\"rightTriangle\"), NOT the display name (\"Right Triangle Visualizer\"). Use ONLY these three fields (toolName, parameters, caption). Do NOT add 'description', 'structure', or other wrapper fields. Either include the flat object OR omit mathTool entirely. See MATH_TOOLS section for available tools and parameters."
    },

    // QUESTION GENERATION OUTPUT (for generating new problems/questions)
    // NOTE: Questions are now generated based on questionInstruction from Evaluator
    questionGenerationOutputs: {
      speech: {
        text: "string - what the avatar says (brief acknowledgment + transition to new problem). MUST be PLAIN TEXT - no markdown (* _ **), no LaTeX ($ \\), and NO usage of - like 30-60-90 or SOH-CAH-TAO (use space instead), suitable for text-to-speech",
        emotion: "encouraging | celebratory | supportive | neutral"
      },

      display: {
        content: "string - the new question/problem text to display in chat, generated based on questionInstruction",
        showAfterSpeech: "boolean - true to show question after speech completes",
        type: "question"
      },

      mathTool: "OPTIONAL (omit entirely if not needed) - Visual tool to accompany the new question. Same format as tutorOutputs.mathTool: {toolName: string, parameters: object, caption: string}. CRITICAL: toolName must be \"rightTriangle\" (the technical key), NOT \"Right Triangle Visualizer\" (the display name)."
    },

    // SOLUTION GENERATION OUTPUT (for generating step-by-step solutions)
    // NOTE: Solutions are now generated based on solutionInstruction from Evaluator
    solutionOutputs: {
      speech: {
        text: "string - brief (1-2 sentences) spoken intro before showing solution. MUST be PLAIN TEXT - no markdown (* _ **), no LaTeX ($ \\), and NO usage of - like 30-60-90 or SOH-CAH-TAO (use space instead), suitable for text-to-speech",
        emotion: "supportive | encouraging"
      },

      display: {
        content: "string - complete step-by-step solution explanation with clear reasoning. Use markdown formatting (headings, bold, lists). You MAY use LaTeX for math notation (e.g., $\\sin(\\theta) = \\frac{O}{H}$)",
        showAfterSpeech: "boolean - true to show solution after speech completes",
        type: "solution"
      },

      mathTool: "OPTIONAL (omit entirely if not needed) - Visual tool to help explain the solution. Same format: {toolName: string, parameters: object, caption: string}. Use this to show a diagram that helps explain the solution steps."
    },

    // ============================================
    // INSTRUCTION SCHEMAS (Evaluator → UI Agents)
    // ============================================

    instructionSchemas: {
      description: "Detailed schemas for instructions that Evaluator sends to UI agents. These ensure targeted, efficient communication.",

      TutorInstruction: {
        focusConcept: "string - the specific concept/skill to focus the hint on (e.g., 'Identifying opposite side')",
        studentError: "string - what the student did wrong or is confused about",
        hintStrategy: "string - approach for the hint (e.g., 'Use SOH-CAH-TOA mnemonic, ask which side is across from angle')",
        relevantInfo: "string - just the definition/formula/concept needed for this hint (not full learning objectives)",
        tone: "string - pedagogical tone guidance (e.g., 'gentle correction, not discouraging' or 'celebrate progress, encourage next step')",
        depth: "gentle nudge | specific guidance | near-answer - how much help to give"
      },

      QuestionInstruction: {
        targetSection: "string - section ID from progressionStructure (e.g., 'triangle-labeling', 'side-calculations')",
        targetConcept: "string - specific learning objective to test (e.g., 'Apply sin θ = O/H to find unknown side')",
        difficulty: "foundational | intermediate | advanced - difficulty level for this question",
        focusObjectives: "string[] - ALL learning objectives for this section (provides full context)",
        relevantFormulas: "string[] - only the formulas needed for this question (e.g., ['sin θ = O/H', 'SOH-CAH-TOA'])",
        conceptGaps: "string[] (optional) - specific concepts the student is struggling with",
        sampleProblems: "array (optional) - example problems from the section to use as inspiration/templates for generating similar complexity questions. If the targetSection has sampleProblems, include them here.",
        questionConstraints: "object (optional) - additional parameters to control question generation (e.g., angleRange, contextType, knownSides)"
      },

      SolutionInstruction: {
        problemText: "string - the exact problem that needs solving",
        studentAttempt: "string - what the student tried (to address their confusion)",
        explanationFocus: "string - the core concept to explain (e.g., 'Why we use sin (not cos) when we have opposite and hypotenuse')",
        relevantFormulas: "string[] - only the formulas needed for this solution",
        relevantConcepts: "string - the specific concepts from learning objectives relevant to this problem",
        explanationDepth: "string - guidance on explanation detail (e.g., 'step-by-step with visual, emphasize ratio selection')",
        studentStrugglePoint: "string - what the student is struggling with (e.g., 'Doesn't know which ratio to use')"
      }
    }
  }
};

// ============================================
// SUBTOPICS: Learning Objectives
// ============================================

export const S3_MATH_TRIGONOMETRY_SUBTOPICS = {

  's3-math-trigonometry-basic-ratios': {
    displayName: 'Trigonometric Ratios',
    topicName: 'trigonometric ratios (sine, cosine, tangent)',

    // Progression structure for evaluator-driven learning
    progressionStructure: {
      // Mastery philosophy: How to advance students through sections
      masteryPhilosophy: `
Advance to next section when student:
- Meets the current section's masterySignals (typically 2-3 correct answers with minimal hints)
- Demonstrates conceptual understanding in their explanations
- Shows confidence and independent problem-solving

Return to remediation/easier content when student:
- Struggles repeatedly or needs excessive hints
- Shows conceptual gaps or confusion
- Expresses frustration or lack of confidence

Complete the entire subtopic when:
- Student has mastered ALL sections (met masterySignals for each)
- Can explain concepts clearly in their own words
- Applies knowledge confidently to novel problems across all difficulty levels`,

      sections: [
        {
          id: "triangle-labeling",
          title: "Triangle Labeling (Foundation)",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies all three sides (opposite, adjacent, hypotenuse) in 3+ different triangle configurations with minimal hints",
          estimatedQuestions: "3-5 questions",

          learningObjectives: [
            "Identify the hypotenuse (longest side, opposite the right angle)",
            "Identify the opposite side (opposite to the angle being considered)",
            "Identify the adjacent side (next to the angle, but not the hypotenuse)",
            "Label sides correctly relative to any given angle in a right triangle"
          ],

          relevantFormulas: [], // No formulas needed for basic labeling

          availableTools: [
            "rightTriangle"
          ]
        },
        {
          id: "basic-ratios",
          title: "The Three Primary Trigonometric Ratios",
          difficulty: "foundational-to-intermediate",
          prerequisites: ["triangle-labeling"],
          masterySignals: "Student correctly recalls and applies SOH-CAH-TOA to identify which ratio to use in 2-3 problems",
          estimatedQuestions: "4-6 questions",

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

          availableTools: [
            "rightTriangle"
          ]
        },
        {
          id: "side-calculations",
          title: "Finding Unknown Side Lengths",
          difficulty: "intermediate",
          prerequisites: ["basic-ratios"],
          masterySignals: "Student sets up correct equation, rearranges, and solves for unknown side in 2-3 problems with minimal hints",
          estimatedQuestions: "4-6 questions",

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

          availableTools: [
            "rightTriangle"
          ]
        },
        {
          id: "angle-calculations",
          title: "Finding Unknown Angles",
          difficulty: "intermediate",
          prerequisites: ["side-calculations"],
          masterySignals: "Student correctly uses inverse trig functions (sin⁻¹, cos⁻¹, tan⁻¹) in 2-3 problems",
          estimatedQuestions: "3-5 questions",

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

          availableTools: [
            "rightTriangle"
          ]
        },
        {
          id: "special-angles",
          title: "Special Angles and Exact Values",
          difficulty: "intermediate-to-advanced",
          prerequisites: ["basic-ratios"],
          masterySignals: "Student recalls exact values for 30°, 45°, 60° without calculator in 3+ cases and recognizes complementary relationships",
          estimatedQuestions: "3-4 questions",

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

          availableTools: [
            "rightTriangle"
          ]
        },
        {
          id: "word-problems",
          title: "Real-World Problem Solving",
          difficulty: "advanced",
          prerequisites: ["side-calculations", "angle-calculations"],
          masterySignals: "Student independently solves 2-3 word problems with correct diagram setup, ratio selection, and practical interpretation",
          estimatedQuestions: "4-6 questions",

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

          availableTools: [
            "rightTriangle"
          ]
        }
      ]
    },

    // NOTE: Detailed learning objectives are now in progressionStructure.sections[].learningObjectives
    // This field is kept as a quick reference summary only
    learningObjectives: `
NOTE: Detailed objectives are in progressionStructure.sections[].learningObjectives above.

Quick Summary - Students will progress through 6 sections:
1. Triangle Labeling (foundational) - Identify opposite, adjacent, hypotenuse
2. Basic Ratios (foundational→intermediate) - Learn and apply SOH-CAH-TOA
3. Side Calculations (intermediate) - Find unknown sides using trig ratios
4. Angle Calculations (intermediate) - Find angles using inverse functions
5. Special Angles (intermediate→advanced) - Master exact values for 30°, 45°, 60°
6. Real-World Problems (advanced) - Apply to height, distance, elevation scenarios`,

    // NOTE: Formulas are now in progressionStructure.sections[].relevantFormulas
    // This field is kept as a consolidated quick reference
    keyFormulas: `
NOTE: Section-specific formulas are in progressionStructure.sections[].relevantFormulas above.

Consolidated Quick Reference:
• sin θ = O/H    (Sine = Opposite / Hypotenuse)
• cos θ = A/H    (Cosine = Adjacent / Hypotenuse)
• tan θ = O/A    (Tangent = Opposite / Adjacent)
• θ = sin⁻¹(O/H), θ = cos⁻¹(A/H), θ = tan⁻¹(O/A)    (Inverse functions)

Special Angle Values:
• sin(30°) = 1/2, cos(30°) = √3/2, tan(30°) = 1/√3
• sin(45°) = √2/2, cos(45°) = √2/2, tan(45°) = 1
• sin(60°) = √3/2, cos(60°) = 1/2, tan(60°) = √3
• sin(0°) = 0, cos(0°) = 1, tan(0°) = 0
• sin(90°) = 1, cos(90°) = 0, tan(90°) = undefined`
  },

  's3-math-trigonometry-problem-solving': {
    displayName: 'Problem Solving Using Trigonometry',
    topicName: 'problem solving using trigonometry',

    // Progression structure for evaluator-driven learning
    progressionStructure: {
      // Mastery philosophy: How to advance students through sections
      masteryPhilosophy: `
Advance to next section when student:
- Meets the current section's masterySignals (typically 2-3 correct answers with minimal hints)
- Demonstrates conceptual understanding in their explanations
- Shows confidence and independent problem-solving

Return to remediation/easier content when student:
- Struggles repeatedly or needs excessive hints
- Shows conceptual gaps or confusion
- Expresses frustration or lack of confidence

Complete the entire subtopic when:
- Student has mastered ALL sections (met masterySignals for each)
- Can explain concepts clearly in their own words
- Applies knowledge confidently to novel problems across all difficulty levels`,

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

          availableTools: [
            "generalTriangle",
            "elevationDepression"
          ]
        },
        {
          id: "elevation-depression-calculations",
          title: "Solving Elevation and Depression Problems",
          difficulty: "intermediate",
          prerequisites: ["elevation-depression-concepts"],
          masterySignals: "Student solves 3+ elevation/depression problems correctly, selecting appropriate trig ratios and interpreting results in context",
          estimatedQuestions: "4-6 questions",

          learningObjectives: [
            "Set up right triangles from elevation/depression scenarios",
            "Identify which sides are given and unknown",
            "Select appropriate trigonometric ratio for the situation",
            "Calculate heights of buildings, towers, cliffs from ground observations",
            "Calculate distances from elevated observations (plane to ground, cliff to boat)",
            "Interpret results with appropriate units and context",
            "Generate some complex problems usings sample problems below"
          ],
          sampleProblems: [
            {
              problem: "From a lookout point 50 meters above sea level, the angle of depression to a boat is 10°. How far is the boat from the base of the lookout?",
            },
            {
              problem: "A model helicopter takes off from the horizontal ground with a constant speed of 5 m/s. After 10 seconds, the angle of elevation from Sam to the helicopter is 62°. Given that Sam is 1.8 m tall, how far is Sam's head from the helicopter at this time?",
            },
            {
              problem: "A post was hit by lightning and snapped into two. The top part fell to the ground, making an angle of 30° with the ground and is 15 m from its base. How tall was the post before it was hit by lightning?",
            }
          ],
          relevantFormulas: [
            "tan θ = height / distance (common for elevation/depression)",
            "sin θ = O/H, cos θ = A/H (when hypotenuse is involved)"
          ],

          availableTools: [
            "generalTriangle",
            "elevationDepression"
          ]
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

          availableTools: [
            "generalTriangle",
            "cuboid",
            "pyramid"
          ]
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

          availableTools: [
            "generalTriangle",
            "cuboid",
            "pyramid"
          ]
        }
      ]
    },

    learningObjectives: `
NOTE: Detailed objectives are in progressionStructure.sections[].learningObjectives above.

Quick Summary - Students will progress through 4 sections:
1. Elevation/Depression Concepts (foundational) - Define and identify angles of elevation and depression
2. Elevation/Depression Calculations (intermediate) - Solve real-world height and distance problems
3. 3D Visualization (intermediate) - Extract 2D triangles from 3D shapes
4. 3D Problem Solving (advanced) - Solve complex multi-step 3D problems`,

    keyFormulas: `
NOTE: Section-specific formulas are in progressionStructure.sections[].relevantFormulas above.

Consolidated Quick Reference:
• sin θ = O/H, cos θ = A/H, tan θ = O/A
• tan θ = height / distance (common for elevation/depression)
• Pythagoras: c² = a² + b² (for finding diagonals in 3D)
• Multi-step approach: Pythagoras first, then trigonometry`
  },

  's3-math-trigonometry-true-bearings': {
    displayName: 'True Bearings',
    topicName: 'true bearings',

    // Progression structure for evaluator-driven learning
    progressionStructure: {
      // Mastery philosophy: How to advance students through sections
      masteryPhilosophy: `
Advance to next section when student:
- Meets the current section's masterySignals (typically 2-3 correct answers with minimal hints)
- Demonstrates conceptual understanding in their explanations
- Shows confidence and independent problem-solving

Return to remediation/easier content when student:
- Struggles repeatedly or needs excessive hints
- Shows conceptual gaps or confusion
- Expresses frustration or lack of confidence

Complete the entire subtopic when:
- Student has mastered ALL sections (met masterySignals for each)
- Can explain concepts clearly in their own words
- Applies knowledge confidently to novel problems across all difficulty levels`,

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

          availableTools: [
            "bearings"
          ]
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

          availableTools: [
            "bearings"
          ]
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

          availableTools: [
            "bearings"
          ]
        },
        {
          id: "bearing-calculations",
          title: "Navigation Problems with Bearings",
          difficulty: "advanced",
          prerequisites: ["bearing-diagrams"],
          masterySignals: "Student solves 2-3 navigation problems combining bearings, distances, and trigonometry",
          estimatedQuestions: "4-6 questions",

          learningObjectives: [
            "Solve distance problems using bearings and trigonometry",
            "Calculate final position after multiple bearing changes",
            "Find distances between positions using sine/cosine rules",
            "Apply Pythagoras when paths are perpendicular",
            "Interpret results in navigation context (shortest distance, direction)"
          ],
          sampleProblems: [
            {
              problem: "A rally driver travels on the bearing 060° for 30 km, then changes to the bearing 120° for another 40 km. How far is the driver from the starting point?",
            },
            {
              problem: "A small plane departs A and flies on a bearing of 072° for 100 km to point B. It then changes course to a bearing of 144° and flies for another 100 km to point C. Calculate the distance from A to C.",
            },
            {
              problem: "A kayaker paddles to a point 3.1 km south and 1.6 km west of her starting point. On what bearing must be paddled to return directly to the starting point?",
            }
          ],
          relevantFormulas: [
            "sin θ = O/H, cos θ = A/H, tan θ = O/A (in triangles formed by paths)",
            "Sine rule: a/sin A = b/sin B = c/sin C",
            "Cosine rule: c² = a² + b² - 2ab cos C (for non-right triangles)",
            "Pythagoras: c² = a² + b² (when paths meet at 90°)"
          ],

          availableTools: [
            "bearings",
            "generalTriangle"
          ]
        }
      ]
    },

    learningObjectives: `
NOTE: Detailed objectives are in progressionStructure.sections[].learningObjectives above.

Quick Summary - Students will progress through 4 sections:
1. Bearing Fundamentals (foundational) - Define bearings, 3-digit format, cardinal directions
2. Back Bearings (intermediate) - Calculate reverse directions using ±180° rules
3. Bearing Diagrams (intermediate) - Draw and interpret diagrams with North lines
4. Navigation Calculations (advanced) - Solve multi-step navigation problems`,

    keyFormulas: `
NOTE: Section-specific formulas are in progressionStructure.sections[].relevantFormulas above.

Consolidated Quick Reference:
• Bearings: 000° to 360°, measured clockwise from North
• Cardinal directions: N=000°, E=090°, S=180°, W=270°
• Back bearing: Add 180° if < 180°, subtract 180° if ≥ 180°
• North lines are parallel → alternate angles are equal
• Use sine/cosine rules for navigation triangles`
  },

  's3-math-trigonometry-obtuse-angles': {
    displayName: 'Trigonometry with Obtuse Angles',
    topicName: 'trigonometry with obtuse angles',

    // Progression structure for evaluator-driven learning
    progressionStructure: {
      // Mastery philosophy: How to advance students through sections
      masteryPhilosophy: `
Advance to next section when student:
- Meets the current section's masterySignals (typically 2-3 correct answers with minimal hints)
- Demonstrates conceptual understanding in their explanations
- Shows confidence and independent problem-solving

Return to remediation/easier content when student:
- Struggles repeatedly or needs excessive hints
- Shows conceptual gaps or confusion
- Expresses frustration or lack of confidence

Complete the entire subtopic when:
- Student has mastered ALL sections (met masterySignals for each)
- Can explain concepts clearly in their own words
- Applies knowledge confidently to novel problems across all difficulty levels`,

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

          relevantFormulas: [
            "Obtuse angle range: 90° < θ < 180°"
          ],

          availableTools: [
            "generalTriangle"
          ]
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

          availableTools: [
            "generalTriangle"
          ]
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

          availableTools: [
            "generalTriangle"
          ]
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

          availableTools: [
            "generalTriangle"
          ]
        }
      ]
    },

    learningObjectives: `
NOTE: Detailed objectives are in progressionStructure.sections[].learningObjectives above.

Quick Summary - Students will progress through 4 sections:
1. Obtuse Angle Definition (foundational) - Understand angles beyond 90°
2. Supplementary Relationships (intermediate) - Master sin(180°-θ), cos(180°-θ), tan(180°-θ)
3. Sign Patterns (intermediate) - Learn ASTC rule for quadrants
4. Obtuse Calculations (advanced) - Solve problems with obtuse angles`,

    keyFormulas: `
NOTE: Section-specific formulas are in progressionStructure.sections[].relevantFormulas above.

Consolidated Quick Reference:
• Obtuse angles: 90° < θ < 180°
• sin(180° - θ) = sin θ (positive in quadrant II)
• cos(180° - θ) = -cos θ (negative in quadrant II)
• tan(180° - θ) = -tan θ (negative in quadrant II)
• ASTC rule: All (I), Sine (II), Tan (III), Cosine (IV) are positive`
  },

  's3-math-trigonometry-area-of-triangle': {
    displayName: 'Area of Triangle',
    topicName: 'area of triangle using trigonometry',

    // Progression structure for evaluator-driven learning
    progressionStructure: {
      // Mastery philosophy: How to advance students through sections
      masteryPhilosophy: `
Advance to next section when student:
- Meets the current section's masterySignals (typically 2-3 correct answers with minimal hints)
- Demonstrates conceptual understanding in their explanations
- Shows confidence and independent problem-solving

Return to remediation/easier content when student:
- Struggles repeatedly or needs excessive hints
- Shows conceptual gaps or confusion
- Expresses frustration or lack of confidence

Complete the entire subtopic when:
- Student has mastered ALL sections (met masterySignals for each)
- Can explain concepts clearly in their own words
- Applies knowledge confidently to novel problems across all difficulty levels`,

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

          availableTools: [
            "generalTriangle"
          ]
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

          availableTools: [
            "generalTriangle"
          ]
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

          availableTools: [
            "generalTriangle"
          ]
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

          availableTools: [
            "generalTriangle"
          ]
        }
      ]
    },

    learningObjectives: `
NOTE: Detailed objectives are in progressionStructure.sections[].learningObjectives above.

Quick Summary - Students will progress through 4 sections:
1. Area Formula Understanding (foundational) - Understand Area = ½ab sin C and why it works
2. Basic Area Calculations (intermediate) - Calculate triangle areas given two sides and included angle
3. Reverse Problems (advanced) - Find angles or sides when area is given
4. Real-World Applications (advanced) - Apply to surveying, design, construction contexts`,

    keyFormulas: `
NOTE: Section-specific formulas are in progressionStructure.sections[].relevantFormulas above.

Consolidated Quick Reference:
• Area = ½ab sin C (a, b are two sides; C is the included angle between them)
• Area = ½bc sin A (alternate form using sides b, c and angle A)
• Area = ½ac sin B (alternate form using sides a, c and angle B)
• Reverse: sin C = 2×Area/(ab) → C = sin⁻¹(2×Area/(ab))
• Works for ALL triangles (right-angled, acute, obtuse)`
  },

  's3-math-trigonometry-sine-rule': {
    displayName: 'Sine Rule',
    topicName: 'sine rule',

    // Progression structure for evaluator-driven learning
    progressionStructure: {
      // Mastery philosophy: How to advance students through sections
      masteryPhilosophy: `
Advance to next section when student:
- Meets the current section's masterySignals (typically 2-3 correct answers with minimal hints)
- Demonstrates conceptual understanding in their explanations
- Shows confidence and independent problem-solving

Return to remediation/easier content when student:
- Struggles repeatedly or needs excessive hints
- Shows conceptual gaps or confusion
- Expresses frustration or lack of confidence

Complete the entire subtopic when:
- Student has mastered ALL sections (met masterySignals for each)
- Can explain concepts clearly in their own words
- Applies knowledge confidently to novel problems across all difficulty levels`,

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

          availableTools: [
            "generalTriangle"
          ]
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

          availableTools: [
            "generalTriangle"
          ]
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

          availableTools: [
            "generalTriangle"
          ]
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

          availableTools: [
            "generalTriangle"
          ]
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

          availableTools: [
            "generalTriangle"
          ]
        }
      ]
    },

    learningObjectives: `
NOTE: Detailed objectives are in progressionStructure.sections[].learningObjectives above.

Quick Summary - Students will progress through 5 sections:
1. Sine Rule Discovery (foundational) - Discover and state a/sin A = b/sin B = c/sin C
2. When to Use (intermediate) - Identify AAS, ASA, SSA scenarios
3. Finding Sides (intermediate) - Use sine rule to calculate unknown sides
4. Finding Angles (advanced) - Calculate angles, handle ambiguous case
5. Real-World Applications (advanced) - Apply to navigation, surveying, design`,

    keyFormulas: `
NOTE: Section-specific formulas are in progressionStructure.sections[].relevantFormulas above.

Consolidated Quick Reference:
• Sine Rule: a/sin A = b/sin B = c/sin C
• Reciprocal form: sin A/a = sin B/b = sin C/c
• Use when: AAS, ASA, or SSA (two angles + side, or two sides + non-included angle)
• To find side: a = (b × sin A) / sin B
• To find angle: sin A = (a × sin B) / b → A = sin⁻¹((a × sin B) / b)
• Ambiguous case (SSA): may have two solutions (acute or obtuse angle)`
  },

  's3-math-trigonometry-cosine-rule': {
    displayName: 'Cosine Rule',
    topicName: 'cosine rule',

    // Progression structure for evaluator-driven learning
    progressionStructure: {
      // Mastery philosophy: How to advance students through sections
      masteryPhilosophy: `
Advance to next section when student:
- Meets the current section's masterySignals (typically 2-3 correct answers with minimal hints)
- Demonstrates conceptual understanding in their explanations
- Shows confidence and independent problem-solving

Return to remediation/easier content when student:
- Struggles repeatedly or needs excessive hints
- Shows conceptual gaps or confusion
- Expresses frustration or lack of confidence

Complete the entire subtopic when:
- Student has mastered ALL sections (met masterySignals for each)
- Can explain concepts clearly in their own words
- Applies knowledge confidently to novel problems across all difficulty levels`,

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

          availableTools: [
            "generalTriangle"
          ]
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

          availableTools: [
            "generalTriangle"
          ]
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

          availableTools: [
            "generalTriangle"
          ]
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

          availableTools: [
            "generalTriangle"
          ]
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

          availableTools: [
            "generalTriangle"
          ]
        }
      ]
    },

    learningObjectives: `
NOTE: Detailed objectives are in progressionStructure.sections[].learningObjectives above.

Quick Summary - Students will progress through 5 sections:
1. Cosine Rule Understanding (foundational) - State c² = a² + b² - 2ab cos C, see Pythagoras connection
2. When to Use (intermediate) - Identify SAS and SSS scenarios
3. Finding Sides (intermediate) - Calculate unknown sides from SAS
4. Finding Angles (advanced) - Calculate angles from SSS using rearranged form
5. Choosing Sine or Cosine (advanced) - Decide which rule to apply in mixed problems`,

    keyFormulas: `
NOTE: Section-specific formulas are in progressionStructure.sections[].relevantFormulas above.

Consolidated Quick Reference:
• Cosine Rule: c² = a² + b² - 2ab cos C
• Alternate forms: a² = b² + c² - 2bc cos A, b² = a² + c² - 2ac cos B
• Use to find side when: SAS (two sides + included angle)
• Rearranged to find angle: cos C = (a² + b² - c²)/(2ab) → C = cos⁻¹((a² + b² - c²)/(2ab))
• Use to find angle when: SSS (three sides)
• Generalizes Pythagoras: when C = 90°, cos 90° = 0, so c² = a² + b²`
  }
};

// ============================================
// EXPORT COMBINED (for backward compatibility)
// ============================================

export const S3_MATH_TRIGONOMETRY: Record<TrigonometryTopicId, any> =
  S3_MATH_TRIGONOMETRY_SUBTOPICS;
