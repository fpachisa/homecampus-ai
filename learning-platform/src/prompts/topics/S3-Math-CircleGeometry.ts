/**
 * Secondary 3 Mathematics - Circle Geometry
 *
 * AI-First Approach: Minimal configuration, maximum AI intelligence
 * - Mastery-based progression (no points)
 * - Learning objectives derived from curriculum
 * - AI generates appropriate questions (theorem proofs, applications, constructions)
 * - Clear input/output contracts
 */

// ============================================
// TYPE EXPORTS
// ============================================

export type CircleGeometryTopicId =
  | 's3-math-circle-geometry-definitions'
  | 's3-math-circle-geometry-angle-semicircle'
  | 's3-math-circle-geometry-chords'
  | 's3-math-circle-geometry-radius-tangent'
  | 's3-math-circle-geometry-tangents-external'
  | 's3-math-circle-geometry-angle-centre'
  | 's3-math-circle-geometry-angle-same-arc';

// ============================================
// CONFIGURATION STRUCTURE
// ============================================

export const S3_MATH_CIRCLE_GEOMETRY_CONFIG = {

  // ============================================
  // GLOBAL: Socratic Tutor Identity (Reference for Tutor Agent Only)
  // ============================================
  TUTOR_ROLE: `[REFERENCE - Used for Tutor Agent Socratic responses only, NOT for Question/Solution/Evaluator agents]

You are a Socratic mathematics tutor for secondary school students learning Circle Geometry.

Your Teaching Approach:
- Guide students to discover geometric proofs through questioning, not direct instruction
- Help students visualize circle properties and relationships
- Encourage logical reasoning and proof construction
- Use diagrams and visual aids to build understanding
- Celebrate insights when students discover theorem relationships
- Adapt difficulty organically based on student mastery

**IMPORTANT - Text-to-Speech Guidelines:**
When generating speech.text (what the avatar will speak aloud):
- Keep speech plain and conversational (no markdown, no LaTeX)
- Use "angle A O B" instead of "∠AOB" for proper pronunciation
- Avoid symbols that might be mispronounced
- For display.content (shown visually), you can use "∠AOB" and symbols normally

Your Visual Tools:
You have access to PRE-BUILT visual tools to help explain concepts:
- Use tools when they genuinely help understanding (especially for circle theorems)
- See MATH_TOOLS section for full details on available tools
- IMPORTANT: Use the technical name (e.g., "circleWithChords") in the toolName field, NOT the display name

When you use a visual tool, include it in your response using the mathTool field.`,

  // ============================================
  // GLOBAL: Question Agent Role (Minimal, Focused)
  // ============================================
  QUESTION_AGENT_ROLE: `You are the Question Generation Agent - execute targeted instructions to generate geometry questions.

Your sole responsibility is to generate questions based on precise instructions from the Evaluator Agent.
You do NOT make pedagogical decisions about what concepts to test or when to advance difficulty.`,

  // ============================================
  // GLOBAL: Solution Agent Role (Minimal, Focused)
  // ============================================
  SOLUTION_AGENT_ROLE: `You are the Solution Generation Agent - execute targeted instructions to generate step-by-step geometry solutions.

Your sole responsibility is to generate clear, logical solutions with proper geometric reasoning based on precise instructions from the Evaluator Agent.
You do NOT make pedagogical decisions about explanation depth beyond the instructions.`,

  // ============================================
  // GLOBAL: Formatting Rules (CRITICAL - All Agents Must Follow)
  // ============================================
  FORMATTING_RULES: {
    description: "Universal formatting rules that all AI agents must follow in their responses",

    latex: {
      angles: {
        rule: "Use $\\angle ABC$ for angles in display, 'angle ABC' in speech",
        examples: {
          correct_display: "$\\angle AOB = 90^{\\circ}$",
          correct_speech: "angle A O B equals 90 degrees",
          incorrect: "∠AOB = 90°" // Don't use symbols in speech
        },
        reason: "TTS engines cannot pronounce mathematical symbols correctly"
      },

      degrees: {
        rule: "Use $90^{\\circ}$ (WITH $ delimiters) in display, '90 degrees' in speech",
        examples: {
          correct_display: "$90^{\\circ}$",
          correct_speech: "90 degrees",
          incorrect: "90°" // Don't use degree symbol in speech
        }
      },

      mathExpressions: {
        rule: "Use $expression$ (WITH $ delimiters) for all math",
        examples: {
          correct: "$\\angle AOB = 2 \\times \\angle ACB$",
          correctWithText: "$\\text{Arc } AB$"
        },
        reason: "MathText.tsx processes LaTeX inside $ delimiters with KaTeX"
      },

      generalGuideline: "Display uses LaTeX for precision, speech uses plain English for clarity."
    },

    speech: {
      format: {
        rule: "PLAIN TEXT only - no markdown (* _ ** ###), no LaTeX ($ \\), no symbols",
        examples: {
          correct: "The angle at the centre is twice the angle at the circumference.",
          incorrect: "The angle at the centre is $2 \\times$ the angle at the circumference."
        },
        reason: "speech.text is read aloud by text-to-speech engine"
      },

      angles: {
        rule: "Spell out angle names with spaces",
        examples: {
          correct: "angle A O B",
          incorrect: "∠AOB"
        }
      },

      numbers: {
        rule: "Write numbers naturally for speech",
        examples: {
          correct: "90 degrees",
          incorrect: "90°"
        }
      }
    },

    display: {
      format: {
        rule: "Can use markdown (**, *, ###, -) and LaTeX ($...$) freely",
        examples: {
          correct: "### Step 1\n\nWe know $\\angle AOB = 2 \\times \\angle ACB$\n\n**Important:** The angle at centre..."
        },
        reason: "display.content is rendered visually with full markdown/LaTeX support"
      },

      structuring: {
        headings: "Use ### for step headings",
        emphasis: "Use **bold** for key theorems",
        latex: "Use $ delimiters for all math expressions and symbols"
      }
    },

    commonMistakes: [
      {
        mistake: "Using ∠ or ° symbols in speech.text",
        fix: "Use 'angle A O B' and '90 degrees' in speech"
      },
      {
        mistake: "Using LaTeX in speech.text",
        fix: "speech.text must be plain text. Save LaTeX for display.content"
      }
    ]
  },

  // ============================================
  // GLOBAL: Visual Math Tools
  // ============================================
  MATH_TOOLS: {
    description: "Pre-built visual tools for circle geometry. IMPORTANT: Use technical key in toolName field (e.g., 'circleWithChords'), NOT display name.",

    availableTools: {
      circleBasic: {
        name: "Basic Circle Visualizer",
        technicalName: "circleBasic",
        component: "CircleBasicVisualizer",
        description: "Simple circle showing centre, radius, diameter, and basic elements. Use for introducing circle terminology.",

        parameters: {
          radius: "string - radius label (e.g., 'r', '5cm', '10')",
          showCentre: "boolean (default: true) - show centre point O",
          showRadius: "boolean (default: false) - show radius line",
          showDiameter: "boolean (default: false) - show diameter line, choose only one of radius/diameter",
          highlightElement: "'radius' | 'diameter' | 'centre' | 'none' - which element to highlight in red"
        },

        exampleUsage: {
          scenario: "Introducing circle parts",
          caption: "A circle with centre O and radius 5cm",
          parameters: {
            radius: "5cm",
            showCentre: true,
            showRadius: true,
            showDiameter: false,
            highlightElement: "radius"
          }
        }
      },

      circleWithArcs: {
        name: "Circle with Arcs Visualizer",
        technicalName: "circleWithArcs",
        component: "CircleArcsVisualizer",
        description: "Circle showing arcs (major and minor), chords, and segments. Use for teaching arc and segment definitions.",

        parameters: {
          pointA: "string - label for first point on circumference (e.g., 'A')",
          pointB: "string - label for second point on circumference (e.g., 'B')",
          arcAngle: "number (0-360) - angle subtended by arc at centre (determines arc size)",
          showChord: "boolean (default: false) - show chord AB",
          showMinorArc: "boolean (default: true) - highlight minor arc",
          showMajorArc: "boolean (default: false) - highlight major arc",
          showSegment: "boolean (default: false) - shade the segment"
        },

        exampleUsage: {
          scenario: "Showing minor and major arcs",
          caption: "Circle showing minor arc AB and major arc AB",
          parameters: {
            pointA: "A",
            pointB: "B",
            arcAngle: 120,
            showChord: true,
            showMinorArc: true,
            showMajorArc: false,
            showSegment: false
          }
        }
      },

      circleWithChords: {
        name: "Circle with Chords Visualizer",
        technicalName: "circleWithChords",
        component: "CircleChordsVisualizer",
        description: "Circle showing one or two chords with perpendicular from centre. Use for chord theorems (equal chords, perpendicular bisector).",

        parameters: {
          chord1Points: "string - labels for first chord endpoints (e.g., 'AB')",
          chord2Points: "string (optional) - labels for second chord endpoints (e.g., 'CD')",
          showPerpendicular: "boolean (default: false) - show perpendicular from centre to chord",
          showMidpoint: "boolean (default: false) - mark midpoint of chord",
          equalChords: "boolean (default: false) - mark chords as equal length",
          highlightChord: "1 | 2 | 'none' - which chord to highlight"
        },

        exampleUsage: {
          scenario: "Equal chords theorem",
          caption: "Two equal chords AB and CD equidistant from centre O",
          parameters: {
            chord1Points: "AB",
            chord2Points: "CD",
            showPerpendicular: true,
            showMidpoint: true,
            equalChords: true,
            highlightChord: "none"
          }
        }
      },

      circleSemicircle: {
        name: "Semicircle Angle Visualizer",
        technicalName: "circleSemicircle",
        component: "CircleSemicircleVisualizer",
        description: "Circle showing angle in semicircle theorem. Shows diameter and angle subtended at circumference. CRITICAL: Use this for angle in semicircle problems.",

        parameters: {
          diameter: "string - diameter endpoints label (e.g., 'AB')",
          pointOnCircle: "string - point on circumference (e.g., 'C')",
          showAngle: "boolean (default: true) - show angle at circumference",
          showRightAngleMarker: "boolean (default: false) - show 90° marker at point C",
          highlightDiameter: "boolean (default: false) - highlight diameter in red"
        },

        exampleUsage: {
          scenario: "Angle in semicircle is 90°",
          caption: "Triangle ABC where AB is diameter. Angle ACB = 90°",
          parameters: {
            diameter: "AB",
            pointOnCircle: "C",
            showAngle: true,
            showRightAngleMarker: true,
            highlightDiameter: false
          }
        }
      },

      circleTangent: {
        name: "Circle with Tangent Visualizer",
        technicalName: "circleTangent",
        component: "CircleTangentVisualizer",
        description: "Circle showing tangent line and radius to point of contact. Use for radius-tangent perpendicular theorem.",

        parameters: {
          tangentPoint: "string - point of tangency label (e.g., 'T')",
          showRadius: "boolean (default: true) - show radius to tangent point",
          showRightAngle: "boolean (default: false) - show 90° marker between radius and tangent",
          tangentLabel: "string (optional) - label for tangent line",
          highlightRadius: "boolean (default: false) - highlight radius in red",
          highlightTangent: "boolean (default: false) - highlight tangent in red"
        },

        exampleUsage: {
          scenario: "Radius perpendicular to tangent",
          caption: "Radius OT is perpendicular to tangent at T",
          parameters: {
            tangentPoint: "T",
            showRadius: true,
            showRightAngle: true,
            tangentLabel: "tangent",
            highlightRadius: false,
            highlightTangent: false
          }
        }
      },

      circleTwoTangents: {
        name: "Circle with Two Tangents from External Point",
        technicalName: "circleTwoTangents",
        component: "CircleTwoTangentsVisualizer",
        description: "Circle showing two tangents from external point. Use for 'tangents from external point are equal' theorem.",

        parameters: {
          externalPoint: "string - external point label (e.g., 'P')",
          tangentPoint1: "string - first tangent point label (e.g., 'T1')",
          tangentPoint2: "string - second tangent point label (e.g., 'T2')",
          showRadii: "boolean (default: false) - show radii to tangent points",
          showTangentLengths: "boolean (default: false) - mark equal tangent lengths",
          highlightTangents: "boolean (default: false) - highlight both tangents"
        },

        exampleUsage: {
          scenario: "Equal tangents from external point",
          caption: "Tangents from P to circle at T1 and T2 are equal: PT1 = PT2",
          parameters: {
            externalPoint: "P",
            tangentPoint1: "T1",
            tangentPoint2: "T2",
            showRadii: true,
            showTangentLengths: true,
            highlightTangents: false
          }
        }
      },

      circleAngleCentre: {
        name: "Angle at Centre Visualizer",
        technicalName: "circleAngleCentre",
        component: "CircleAngleCentreVisualizer",
        description: "Circle showing angle at centre and angle at circumference subtended by same arc. Use for 'angle at centre = 2 × angle at circumference' theorem.",

        parameters: {
          arcPoints: "string - arc endpoints (e.g., 'AB')",
          circumferencePoint: "string - point on circumference (e.g., 'C')",
          showAngleCentre: "boolean (default: true) - show angle AOB at centre",
          showAngleCircumference: "boolean (default: true) - show angle ACB at circumference",
          angleCentreLabel: "string (optional) - label for centre angle (e.g., '$2\\theta$')",
          angleCircumferenceLabel: "string (optional) - label for circumference angle (e.g., '$\\theta$')",
          highlightArc: "boolean (default: false) - highlight the arc AB"
        },

        exampleUsage: {
          scenario: "Angle at centre is twice angle at circumference",
          caption: "∠AOB = 2 × ∠ACB (both subtended by arc AB)",
          parameters: {
            arcPoints: "AB",
            circumferencePoint: "C",
            showAngleCentre: true,
            showAngleCircumference: true,
            angleCentreLabel: "$2\\theta$",
            angleCircumferenceLabel: "$\\theta$",
            highlightArc: true
          }
        }
      },

      circleSameArc: {
        name: "Angles in Same Segment Visualizer",
        technicalName: "circleSameArc",
        component: "CircleSameArcVisualizer",
        description: "Circle showing multiple angles subtended by same arc (angles in same segment). Use for 'angles in same segment are equal' theorem.",

        parameters: {
          arcPoints: "string - arc endpoints (e.g., 'AB')",
          circumferencePoint1: "string - first point on circumference (e.g., 'C')",
          circumferencePoint2: "string (optional) - second point on circumference (e.g., 'D')",
          showAngle1: "boolean (default: true) - show angle ACB",
          showAngle2: "boolean (default: true) - show angle ADB",
          angleLabel: "string (optional) - common label for both angles (e.g., '$\\theta$')",
          highlightSegment: "boolean (default: false) - shade the segment containing the angles"
        },

        exampleUsage: {
          scenario: "Angles in same segment are equal",
          caption: "∠ACB = ∠ADB (both in same segment, subtended by arc AB)",
          parameters: {
            arcPoints: "AB",
            circumferencePoint1: "C",
            circumferencePoint2: "D",
            showAngle1: true,
            showAngle2: true,
            angleLabel: "$\\theta$",
            highlightSegment: true
          }
        }
      },

      generalTriangle: {
        name: "General Triangle Visualizer",
        technicalName: "generalTriangle",
        component: "GeneralTriangleVisualizer",
        description: "For triangles formed within circles or for theorem proofs. Reused from trigonometry module.",

        parameters: {
          sideA: "string (optional) - label for side a",
          sideB: "string (optional) - label for side b",
          sideC: "string (optional) - label for side c",
          angleA: "number (0-180) | null - angle A in degrees",
          angleB: "number (0-180) | null - angle B in degrees",
          angleC: "number (0-180) | null - angle C in degrees",
          vertexA_label: "string (optional, default: 'A')",
          vertexB_label: "string (optional, default: 'B')",
          vertexC_label: "string (optional, default: 'C')",
          highlightSide: "'a' | 'b' | 'c' | 'none'",
          highlightAngle: "'A' | 'B' | 'C' | 'none'",
          showAngles: "boolean (default: true)",
          showSides: "boolean (default: true)",
          triangleType: "'acute' | 'obtuse' | 'right' | 'auto' (default: 'auto')"
        }
      }
    },

    usageGuidelines: "Use visual tools to help students visualize circle theorems and relationships. Choose tools based on theorem being taught. Include as mathTool field with {toolName, parameters, caption}. Don't overuse - use when diagrams genuinely help understanding."
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
        1: "foundational - Basic concepts, definitions, theorem statements",
        2: "intermediate - Theorem proofs, applications, calculations",
        3: "advanced - Complex problems, combined theorems, multi-step reasoning"
      },
      progressionMechanism: "The system tracks currentProblemType (1, 2, or 3). The AI signals readiness to advance via assessment.readyToAdvance field in tutorOutputs. When true, the system will increment difficulty level for subsequent questions.",
      guidelines: [
        "Set readyToAdvance: true when student demonstrates consistent mastery (e.g., 2+ correct answers in a row at current level)",
        "Set readyToAdvance: false if student is still developing understanding or making errors",
        "Progression is one-way (no automatic regression) - system trusts AI's judgment",
        "Questions should match the current difficulty level appropriately"
      ]
    },

    // What the AI receives from the system
    inputs: {
      studentContext: {
        currentSubtopic: "string - e.g., 's3-math-circle-geometry-angle-semicircle'",
        currentDifficultyLevel: "string - foundational | intermediate | advanced",
        chatHistory: "Message[] - last 6 messages for context",
        problemState: {
          currentProblem: "string - the problem/question being worked on",
          hintsGivenSoFar: "number - how many hints given for current problem",
          attemptsCount: "number - how many attempts student has made",
          recentPerformance: "string - summary of last 3-5 problems",
          originalMathTool: "MathTool | null - the original visual tool shown with the problem"
        }
      },
      studentResponse: "string - what the student just submitted"
    },

    // EVALUATOR AGENT OUTPUT
    evaluatorOutputs: {
      answerCorrect: "boolean - is the student's answer correct?",
      isMainProblemSolved: "boolean - has the main problem been completely solved?",

      assessment: {
        understanding: "strong | developing | struggling - current understanding level",
        conceptGaps: "string[] - specific concepts student needs to work on",
        readyToAdvance: "boolean - ready for next section?"
      },

      progression: {
        currentSection: "string - current section ID from progressionStructure",
        sectionMastered: "boolean - has student mastered current section?",
        masteryProgress: "string - brief description of progress toward mastery",
        nextSection: "string | null - next section ID if current is mastered"
      },

      action: "GIVE_HINT | GIVE_SOLUTION | NEW_PROBLEM | CELEBRATE - next action",
      hintLevel: "1 | 2 | 3 (optional) - which hint number if action is GIVE_HINT",

      tutorInstruction: "object (optional) - if action is GIVE_HINT or CELEBRATE",
      questionInstruction: "object (optional) - if action is NEW_PROBLEM",
      solutionInstruction: "object (optional) - if action is GIVE_SOLUTION",

      reasoning: "string - internal explanation for action (plain text, NO LaTeX)"
    },

    // TUTOR AGENT OUTPUT
    tutorOutputs: {
      speech: {
        text: "string - what avatar says (plain text, no markdown/LaTeX, suitable for TTS)",
        emotion: "encouraging | celebratory | supportive | neutral"
      },

      display: {
        content: "string | null - what appears in chat bubble (can use markdown/LaTeX)",
        showAfterSpeech: "boolean - true if display appears after speech",
        type: "hint | celebration | feedback"
      },

      mathTool: "OPTIONAL - {toolName: string, parameters: object, caption: string}. CRITICAL: toolName must be technical key (e.g., 'circleSemicircle'), NOT display name."
    },

    // QUESTION GENERATION OUTPUT
    questionGenerationOutputs: {
      speech: {
        text: "string - brief acknowledgment + transition (plain text, no markdown/LaTeX)",
        emotion: "encouraging | celebratory | supportive | neutral"
      },

      display: {
        content: "string - the new question/problem text",
        showAfterSpeech: "boolean - true to show after speech",
        type: "question"
      },

      mathTool: "OPTIONAL - {toolName: string, parameters: object, caption: string}"
    },

    // SOLUTION GENERATION OUTPUT
    solutionOutputs: {
      speech: {
        text: "string - brief intro before solution (plain text, 1-2 sentences)",
        emotion: "supportive | encouraging"
      },

      display: {
        content: "string - complete step-by-step solution with reasoning (can use markdown/LaTeX)",
        showAfterSpeech: "boolean - true to show after speech",
        type: "solution"
      },

      mathTool: "OPTIONAL - {toolName: string, parameters: object, caption: string}"
    },

    // INSTRUCTION SCHEMAS
    instructionSchemas: {
      TutorInstruction: {
        focusConcept: "string - specific concept for hint",
        studentError: "string - what student did wrong",
        hintStrategy: "string - approach for hint",
        relevantInfo: "string - theorem/definition needed",
        tone: "string - pedagogical tone guidance",
        depth: "gentle nudge | specific guidance | near-answer"
      },

      QuestionInstruction: {
        targetSection: "string - section ID from progressionStructure",
        targetConcept: "string - specific learning objective to test",
        difficulty: "foundational | intermediate | advanced",
        focusObjectives: "string[] - all learning objectives for section",
        relevantTheorems: "string[] - theorems needed for this question",
        conceptGaps: "string[] (optional) - concepts student is struggling with",
        sampleProblems: "array (optional) - example problems for inspiration",
        questionConstraints: "object (optional) - additional parameters"
      },

      SolutionInstruction: {
        problemText: "string - exact problem being solved",
        studentAttempt: "string - what student tried",
        explanationFocus: "string - core concept to explain",
        relevantTheorems: "string[] - theorems needed",
        relevantConcepts: "string - concepts from learning objectives",
        explanationDepth: "string - guidance on detail level",
        studentStrugglePoint: "string - what student is struggling with"
      }
    }
  }
};

// ============================================
// SUBTOPICS: Learning Objectives
// ============================================

export const S3_MATH_CIRCLE_GEOMETRY_SUBTOPICS = {

  's3-math-circle-geometry-definitions': {
    displayName: 'Circle Geometry Definitions',
    topicName: 'circle geometry definitions (arc, chord, segments)',

    progressionStructure: {
      masteryPhilosophy: `
Advance to next section when student:
- Meets the current section's masterySignals (typically 2-3 correct identifications/definitions)
- Can correctly identify and name circle parts
- Shows understanding through accurate descriptions

Return to remediation when student:
- Confuses different circle parts
- Cannot identify basic elements
- Shows gaps in terminology

Complete subtopic when:
- Student has mastered ALL sections
- Can identify all circle parts accurately
- Uses correct terminology consistently`,

      sections: [
        {
          id: "circle-parts",
          title: "Parts of a Circle",
          difficulty: "foundational",
          prerequisites: [],
          masterySignals: "Student correctly identifies centre, radius, diameter, circumference in 2+ diagrams",
          estimatedQuestions: "2-3 questions",

          learningObjectives: [
            "Identify the centre of a circle",
            "Identify the radius (line from centre to circumference)",
            "Identify the diameter (line through centre connecting two points on circumference)",
            "Understand that diameter = 2 × radius",
            "Identify the circumference (perimeter of circle)"
          ],

          relevantFormulas: [
            "Diameter = 2 × radius",
            "Radius = diameter ÷ 2"
          ],

          availableTools: [
            "circleBasic"
          ]
        },
        {
          id: "arcs",
          title: "Arcs and Sectors",
          difficulty: "foundational",
          prerequisites: ["circle-parts"],
          masterySignals: "Student distinguishes between major and minor arcs in 2+ examples, correctly identifies sectors",
          estimatedQuestions: "2-3 questions",

          learningObjectives: [
            "Define arc as part of the circumference between two points",
            "Distinguish between minor arc (shorter) and major arc (longer)",
            "Understand that when two points divide a circle, they create two arcs",
            "Identify a sector as the region bounded by two radii and an arc",
            "Recognize that arc names use two or three letters (e.g., arc AB, arc ACB)"
          ],

          relevantFormulas: [
            "Minor arc + major arc = complete circumference",
            "Arc is measured by the angle it subtends at the centre"
          ],

          availableTools: [
            "circleWithArcs"
          ]
        },
        {
          id: "chords-and-segments",
          title: "Chords and Segments",
          difficulty: "foundational",
          prerequisites: ["arcs"],
          masterySignals: "Student correctly identifies chords and segments in 2+ diagrams, understands relationship to arcs",
          estimatedQuestions: "2-3 questions",

          learningObjectives: [
            "Define a chord as a line segment joining two points on the circumference",
            "Recognize that a diameter is the longest chord",
            "Define a segment as the region between a chord and the arc it cuts off",
            "Distinguish between major segment and minor segment",
            "Understand that a chord divides a circle into two segments"
          ],

          relevantFormulas: [
            "Diameter is a special chord passing through the centre",
            "Chord creates two segments: major and minor"
          ],

          availableTools: [
            "circleWithArcs",
            "circleWithChords"
          ]
        }
      ]
    },

    learningObjectives: `
Students will master circle terminology:
1. Circle Parts - Centre, radius, diameter, circumference
2. Arcs and Sectors - Minor/major arcs, sectors
3. Chords and Segments - Chords, major/minor segments`,

    keyFormulas: `
• Diameter = 2 × radius
• Chord: line segment joining two points on circumference
• Arc: part of circumference between two points
• Segment: region between chord and arc`
  },

  's3-math-circle-geometry-angle-semicircle': {
    displayName: 'Angle in a Semi-circle',
    topicName: 'angle in a semi-circle theorem',

    progressionStructure: {
      masteryPhilosophy: `
Advance when student:
- States theorem correctly
- Understands proof logic
- Applies theorem to find angles

Return to remediation when:
- Cannot state theorem
- Struggles with proof steps
- Makes errors in application

Complete when student masters all aspects of the theorem`,

      sections: [
        {
          id: "theorem-statement",
          title: "Understanding the Theorem",
          difficulty: "foundational",
          prerequisites: ["s3-math-circle-geometry-definitions"],
          masterySignals: "Student states theorem correctly 1+ times and identifies semicircle setups in diagrams",
          estimatedQuestions: "1-2 questions",

          learningObjectives: [
            "State the angle in a semi-circle theorem: The angle in a semi-circle is a right angle (90°)",
            "Identify when a triangle is inscribed in a semi-circle (one side is diameter)",
            "Recognize that the angle opposite the diameter is 90°",
            "Understand the condition: angle must be on the circumference, with diameter as one side"
          ],

          relevantFormulas: [
            "If AB is a diameter and C is on the circumference, then ∠ACB = 90°"
          ],

          availableTools: [
            "circleSemicircle"
          ]
        },
        {
          id: "proof",
          title: "Proof of the Theorem",
          difficulty: "intermediate",
          prerequisites: ["theorem-statement"],
          masterySignals: "Student follows proof logic, explains each step, constructs proof with guidance in 2+ attempts",
          estimatedQuestions: "2-3 questions",

          learningObjectives: [
            "Understand the proof approach: draw radii OA, OB, OC (where O is centre)",
            "Recognize that OA = OB = OC (all radii)",
            "Apply isosceles triangle properties: if OA = OC, then ∠OAC = ∠OCA",
            "Use angle sum in triangle: angles in triangle sum to 180°",
            "Complete proof: 2(∠OAC + ∠OCB) = 180°, therefore ∠ACB = 90°",
            "Construct the proof independently"
          ],

          relevantFormulas: [
            "In isosceles triangle: base angles are equal",
            "Angle sum in triangle = 180°",
            "∠AOC + ∠OCA + ∠OAC = 180°"
          ],

          availableTools: [
            "circleSemicircle",
            "generalTriangle"
          ]
        },
        {
          id: "applications",
          title: "Applying the Theorem",
          difficulty: "intermediate-advanced",
          prerequisites: ["proof"],
          masterySignals: "Student applies theorem to find unknown angles in 2+ problems, recognizes when to use theorem",
          estimatedQuestions: "2-3 questions",

          learningObjectives: [
            "Identify when angle in semi-circle theorem applies",
            "Use theorem to find unknown angles when diameter is given",
            "Recognize that if an angle in a triangle inscribed in a circle is 90°, then the opposite side is a diameter",
            "Apply theorem in multi-step problems",
            "Combine with other angle properties (angle sum, isosceles triangles)"
          ],

          relevantFormulas: [
            "If ∠ACB = 90° and A, B, C are on circle, then AB is diameter",
            "In semi-circle: ∠ACB = 90°, so ∠CAB + ∠CBA = 90°"
          ],

          sampleProblems: [
            {
              problem: "In circle with centre O, AB is a diameter. Point C lies on the circumference. If ∠CAB = 35°, find ∠CBA.",
            },
            {
              problem: "Triangle PQR is inscribed in a circle with PQ as diameter. If ∠QPR = 42°, find ∠PRQ.",
            }
          ],

          availableTools: [
            "circleSemicircle",
            "generalTriangle"
          ]
        }
      ]
    },

    learningObjectives: `
Students will master the angle in semi-circle theorem:
1. Theorem Statement - Angle in semi-circle is 90°
2. Proof - Using isosceles triangles and angle sum
3. Applications - Finding angles using the theorem`,

    keyFormulas: `
• The angle in a semi-circle is 90°
• If AB is diameter and C is on circumference, then ∠ACB = 90°
• Converse: If ∠ACB = 90° (C on circle), then AB is diameter`
  },

  's3-math-circle-geometry-chords': {
    displayName: 'Chords of a Circle',
    topicName: 'chords of a circle theorems',

    progressionStructure: {
      masteryPhilosophy: `
Advance when student:
- States chord theorems correctly
- Understands proofs
- Applies theorems to solve problems

Complete when student masters all chord relationships`,

      sections: [
        {
          id: "equal-chords-equal-angles",
          title: "Equal Chords Theorem",
          difficulty: "intermediate",
          prerequisites: ["s3-math-circle-geometry-definitions"],
          masterySignals: "Student states theorem correctly and applies to 2+ problems",
          estimatedQuestions: "2-3 questions",

          learningObjectives: [
            "State theorem: Equal chords subtend equal angles at the centre",
            "Understand the converse: If angles at centre are equal, then chords are equal",
            "Apply theorem to find equal chords given equal angles",
            "Apply converse to find equal angles given equal chords",
            "Recognize proof using congruent triangles (SAS)"
          ],

          relevantFormulas: [
            "If chord AB = chord CD, then ∠AOB = ∠COD (O is centre)",
            "If ∠AOB = ∠COD, then chord AB = chord CD"
          ],

          availableTools: [
            "circleWithChords"
          ]
        },
        {
          id: "perpendicular-bisector",
          title: "Perpendicular from Centre to Chord",
          difficulty: "intermediate",
          prerequisites: ["equal-chords-equal-angles"],
          masterySignals: "Student applies perpendicular bisector theorem in 2+ problems",
          estimatedQuestions: "2-3 questions",

          learningObjectives: [
            "State theorem: The perpendicular from the centre to a chord bisects the chord",
            "Understand converse: The line from centre to midpoint of chord is perpendicular to chord",
            "Apply to find chord lengths when perpendicular distance is given",
            "Use Pythagoras theorem with radius, half-chord, and perpendicular distance",
            "Recognize that equal chords are equidistant from centre"
          ],

          relevantFormulas: [
            "If OM ⊥ chord AB, then AM = MB (M is midpoint)",
            "r² = d² + (chord/2)² where r = radius, d = perpendicular distance to chord",
            "Equal chords have equal perpendicular distances from centre"
          ],

          sampleProblems: [
            {
              problem: "A chord of length 24cm is at a distance of 5cm from the centre of a circle. Find the radius of the circle.",
            },
            {
              problem: "In a circle with radius 13cm, a chord is 10cm from the centre. Find the length of the chord.",
            }
          ],

          availableTools: [
            "circleWithChords",
            "generalTriangle"
          ]
        },
        {
          id: "chord-applications",
          title: "Applications of Chord Theorems",
          difficulty: "advanced",
          prerequisites: ["perpendicular-bisector"],
          masterySignals: "Student solves complex multi-step chord problems in 2-3 attempts",
          estimatedQuestions: "2-3 questions",

          learningObjectives: [
            "Combine chord theorems with angle properties",
            "Apply Pythagoras theorem in chord problems",
            "Solve problems involving two or more chords",
            "Use chord theorems in real-world contexts (architecture, engineering)",
            "Prove relationships between chords, radii, and angles"
          ],

          relevantFormulas: [
            "All chord theorems combined",
            "Pythagoras: r² = d² + (c/2)² for chord c at distance d from centre radius r"
          ],

          availableTools: [
            "circleWithChords",
            "generalTriangle"
          ]
        }
      ]
    },

    learningObjectives: `
Students will master chord theorems:
1. Equal Chords - Equal chords subtend equal angles at centre
2. Perpendicular Bisector - Perpendicular from centre bisects chord
3. Applications - Solve complex chord problems`,

    keyFormulas: `
• Equal chords → equal angles at centre (and converse)
• Perpendicular from centre bisects chord
• Equal chords are equidistant from centre
• r² = d² + (chord/2)² (Pythagoras with chords)`
  },

  's3-math-circle-geometry-radius-tangent': {
    displayName: 'Radius-Tangent Theorem',
    topicName: 'radius and tangent perpendicular theorem',

    progressionStructure: {
      masteryPhilosophy: `
Advance when student:
- States radius-tangent theorem correctly
- Applies to find angles and lengths
- Proves using the theorem

Complete when student masters all applications`,

      sections: [
        {
          id: "tangent-definition",
          title: "Understanding Tangents",
          difficulty: "foundational",
          prerequisites: ["s3-math-circle-geometry-definitions"],
          masterySignals: "Student defines tangent correctly and identifies tangents in 2+ diagrams",
          estimatedQuestions: "2-3 questions",

          learningObjectives: [
            "Define a tangent as a line that touches the circle at exactly one point",
            "Identify the point of tangency (point where tangent touches circle)",
            "Understand that a tangent never crosses into the circle",
            "Distinguish between secant (cuts circle at 2 points) and tangent (touches at 1 point)",
            "Recognize that there are infinite tangents to a circle"
          ],

          relevantFormulas: [
            "Tangent touches circle at exactly one point (point of tangency)"
          ],

          availableTools: [
            "circleTangent"
          ]
        },
        {
          id: "radius-tangent-perpendicular",
          title: "Radius Perpendicular to Tangent",
          difficulty: "intermediate",
          prerequisites: ["tangent-definition"],
          masterySignals: "Student applies radius-tangent perpendicular theorem in 2+ problems",
          estimatedQuestions: "2-3 questions",

          learningObjectives: [
            "State theorem: The radius is perpendicular to the tangent at the point of tangency",
            "Understand that angle between radius and tangent is always 90°",
            "Apply theorem to find angles in diagrams",
            "Use right-angled triangle properties with radius and tangent",
            "Recognize converse: If a line through a point on the circle is perpendicular to the radius, it is a tangent"
          ],

          relevantFormulas: [
            "Radius ⊥ tangent at point of tangency",
            "∠OTP = 90° where O is centre, T is point of tangency, P is on tangent"
          ],

          sampleProblems: [
            {
              problem: "A tangent to a circle with centre O touches at point T. If ∠OTP = x, find x.",
            },
            {
              problem: "From an external point P, a tangent touches circle at T. If OP = 13cm and radius = 5cm, find PT.",
            }
          ],

          availableTools: [
            "circleTangent",
            "generalTriangle"
          ]
        },
        {
          id: "applications-radius-tangent",
          title: "Applications of Radius-Tangent Theorem",
          difficulty: "advanced",
          prerequisites: ["radius-tangent-perpendicular"],
          masterySignals: "Student solves multi-step problems using radius-tangent theorem in 2+ attempts",
          estimatedQuestions: "2-3 questions",

          learningObjectives: [
            "Apply Pythagoras theorem with radius, tangent, and external point",
            "Solve problems involving tangent lengths",
            "Combine radius-tangent theorem with other circle properties",
            "Use in construction problems (finding tangent from external point)",
            "Apply to real-world scenarios"
          ],

          relevantFormulas: [
            "In right triangle OTP: OP² = OT² + TP² where OT is radius, TP is tangent length",
            "Tangent length = √(distance² - radius²)"
          ],

          availableTools: [
            "circleTangent",
            "generalTriangle"
          ]
        }
      ]
    },

    learningObjectives: `
Students will master radius-tangent relationship:
1. Tangent Definition - Line touching circle at one point
2. Perpendicular Theorem - Radius ⊥ tangent at point of tangency
3. Applications - Solve problems using the theorem`,

    keyFormulas: `
• Tangent touches circle at exactly one point
• Radius ⊥ tangent at point of tangency
• OP² = OT² + TP² (Pythagoras with tangent from external point)`
  },

  's3-math-circle-geometry-tangents-external': {
    displayName: 'Tangents from an External Point',
    topicName: 'tangents from an external point theorem',

    progressionStructure: {
      masteryPhilosophy: `
Advance when student:
- States equal tangents theorem
- Applies to find tangent lengths
- Proves the theorem

Complete when student masters all aspects`,

      sections: [
        {
          id: "equal-tangents-theorem",
          title: "Equal Tangents Theorem",
          difficulty: "intermediate",
          prerequisites: ["s3-math-circle-geometry-radius-tangent"],
          masterySignals: "Student states theorem and applies in 2+ problems",
          estimatedQuestions: "2-3 questions",

          learningObjectives: [
            "State theorem: Tangents from an external point to a circle are equal in length",
            "Identify the two tangent segments from external point",
            "Recognize that tangent lengths PA = PB where P is external point",
            "Understand the setup: one external point, two points of tangency",
            "Apply theorem to find unknown tangent lengths"
          ],

          relevantFormulas: [
            "If PA and PB are tangents from external point P, then PA = PB"
          ],

          availableTools: [
            "circleTwoTangents"
          ]
        },
        {
          id: "proof-equal-tangents",
          title: "Proof of Equal Tangents",
          difficulty: "intermediate-advanced",
          prerequisites: ["equal-tangents-theorem"],
          masterySignals: "Student follows proof and can reproduce key steps in 2+ attempts",
          estimatedQuestions: "2-3 questions",

          learningObjectives: [
            "Draw radii OA and OB to points of tangency",
            "Recognize right angles: ∠OAP = ∠OBP = 90° (radius ⊥ tangent)",
            "Identify common hypotenuse OP in both right triangles",
            "Recognize equal radii: OA = OB",
            "Apply RHS (Right angle-Hypotenuse-Side) congruence: △OAP ≅ △OBP",
            "Conclude PA = PB from congruent triangles"
          ],

          relevantFormulas: [
            "∠OAP = ∠OBP = 90° (radius ⊥ tangent)",
            "OA = OB (radii)",
            "OP = OP (common side)",
            "△OAP ≅ △OBP (RHS)",
            "∴ PA = PB"
          ],

          availableTools: [
            "circleTwoTangents",
            "generalTriangle"
          ]
        },
        {
          id: "applications-two-tangents",
          title: "Applications of Equal Tangents",
          difficulty: "advanced",
          prerequisites: ["proof-equal-tangents"],
          masterySignals: "Student solves complex problems involving equal tangents in 2+ attempts",
          estimatedQuestions: "2-3 questions",

          learningObjectives: [
            "Find tangent lengths when other measurements are given",
            "Use equal tangents with Pythagoras theorem",
            "Solve problems with multiple external points",
            "Apply to angle calculations (∠APB at external point)",
            "Combine with other circle theorems",
            "Recognize equal tangents in compound shapes"
          ],

          relevantFormulas: [
            "PA = PB (equal tangents from P)",
            "PA² = OP² - r² (Pythagoras)",
            "Angle between tangents can be found using triangle properties"
          ],

          sampleProblems: [
            {
              problem: "Two tangents from point P touch circle at A and B. If OP = 10cm and radius = 6cm, find PA.",
            },
            {
              problem: "Tangents from P to circle touch at A and B. If PA = 12cm and ∠APB = 60°, find the radius.",
            }
          ],

          availableTools: [
            "circleTwoTangents",
            "generalTriangle"
          ]
        }
      ]
    },

    learningObjectives: `
Students will master tangents from external point:
1. Equal Tangents Theorem - Tangents from external point are equal
2. Proof - Using RHS congruence
3. Applications - Solve complex tangent problems`,

    keyFormulas: `
• Tangents from external point P are equal: PA = PB
• Proof uses: radius ⊥ tangent + RHS congruence
• PA² = OP² - r² (Pythagoras with tangent length)`
  },

  's3-math-circle-geometry-angle-centre': {
    displayName: 'Angle at the Centre',
    topicName: 'angle at the centre theorem',

    progressionStructure: {
      masteryPhilosophy: `
Advance when student:
- States theorem correctly (angle at centre = 2 × angle at circumference)
- Applies to find angles
- Understands proof

Complete when student masters all applications`,

      sections: [
        {
          id: "theorem-angle-centre",
          title: "Understanding Angle at Centre Theorem",
          difficulty: "intermediate",
          prerequisites: ["s3-math-circle-geometry-angle-semicircle"],
          masterySignals: "Student states theorem correctly and identifies setups in 2+ diagrams",
          estimatedQuestions: "2-3 questions",

          learningObjectives: [
            "State theorem: The angle subtended by an arc at the centre is twice the angle subtended by the same arc at any point on the remaining part of the circumference",
            "Identify angle at centre (∠AOB where O is centre)",
            "Identify angle at circumference (∠ACB where C is on circumference)",
            "Recognize the relationship: ∠AOB = 2 × ∠ACB",
            "Understand that both angles are subtended by the same arc AB"
          ],

          relevantFormulas: [
            "Angle at centre = 2 × angle at circumference (for same arc)",
            "∠AOB = 2 × ∠ACB where O is centre, C is on circumference"
          ],

          availableTools: [
            "circleAngleCentre"
          ]
        },
        {
          id: "proof-angle-centre",
          title: "Proof of Angle at Centre Theorem",
          difficulty: "advanced",
          prerequisites: ["theorem-angle-centre"],
          masterySignals: "Student follows proof logic and explains key steps in 2+ attempts",
          estimatedQuestions: "2-3 questions",

          learningObjectives: [
            "Draw radius OC to create isosceles triangles",
            "Recognize OA = OB = OC (all radii)",
            "Use isosceles triangle property: base angles are equal",
            "Apply exterior angle theorem: exterior angle = sum of opposite interior angles",
            "Show ∠AOC = 2∠ACO (exterior angle in △OAC)",
            "Show ∠BOC = 2∠BCO (exterior angle in △OBC)",
            "Conclude ∠AOB = ∠AOC + ∠BOC = 2(∠ACO + ∠BCO) = 2∠ACB"
          ],

          relevantFormulas: [
            "In isosceles triangle: base angles equal",
            "Exterior angle = sum of opposite interior angles",
            "∠AOB = ∠AOC + ∠BOC = 2∠ACO + 2∠BCO = 2∠ACB"
          ],

          availableTools: [
            "circleAngleCentre",
            "generalTriangle"
          ]
        },
        {
          id: "applications-angle-centre",
          title: "Applications of Angle at Centre",
          difficulty: "advanced",
          prerequisites: ["proof-angle-centre"],
          masterySignals: "Student applies theorem to find angles in 4+ problems, including multi-step questions",
          estimatedQuestions: "5-6 questions",

          learningObjectives: [
            "Find angle at centre given angle at circumference",
            "Find angle at circumference given angle at centre",
            "Recognize when angle at centre and circumference subtend same arc",
            "Apply theorem with reflex angles at centre",
            "Combine with other circle theorems (angle in semicircle, equal chords)",
            "Solve multi-step problems involving multiple angles"
          ],

          relevantFormulas: [
            "∠AOB = 2 × ∠ACB (same arc AB)",
            "If ∠AOB is reflex, use (360° - ∠AOB) for major arc calculations",
            "Can combine with: angle sum, isosceles triangles, etc."
          ],

          sampleProblems: [
            {
              problem: "Arc AB subtends ∠ACB = 35° at circumference and ∠AOB at centre O. Find ∠AOB.",
            },
            {
              problem: "In circle with centre O, ∠AOB = 140°. Point C is on the major arc AB. Find ∠ACB.",
            },
            {
              problem: "In circle with centre O, chord AB subtends 60° at C on circumference. If D is on the minor arc AB, find ∠ADB.",
            }
          ],

          availableTools: [
            "circleAngleCentre",
            "generalTriangle"
          ]
        }
      ]
    },

    learningObjectives: `
Students will master angle at centre theorem:
1. Theorem Statement - Angle at centre = 2 × angle at circumference
2. Proof - Using isosceles triangles and exterior angle theorem
3. Applications - Finding angles in complex configurations`,

    keyFormulas: `
• Angle at centre = 2 × angle at circumference (same arc)
• ∠AOB = 2 × ∠ACB where O is centre, C on circumference
• Proof uses isosceles triangles and exterior angle theorem`
  },

  's3-math-circle-geometry-angle-same-arc': {
    displayName: 'Angles Subtended by Same Arc',
    topicName: 'angles subtended by the same arc theorem',

    progressionStructure: {
      masteryPhilosophy: `
Advance when student:
- States theorem (angles in same segment are equal)
- Applies to find equal angles
- Understands cyclic quadrilaterals

Complete when student masters all segment angle properties`,

      sections: [
        {
          id: "angles-same-segment",
          title: "Angles in the Same Segment",
          difficulty: "intermediate",
          prerequisites: ["s3-math-circle-geometry-angle-centre"],
          masterySignals: "Student states theorem and identifies equal angles in same segment in 2+ diagrams",
          estimatedQuestions: "2-3 questions",

          learningObjectives: [
            "State theorem: Angles in the same segment of a circle are equal",
            "Identify the segment (region between chord and arc)",
            "Recognize that angles subtended by same arc at circumference are equal",
            "Understand that ∠ACB = ∠ADB when C and D are in same segment",
            "Distinguish between angles in different segments"
          ],

          relevantFormulas: [
            "Angles in same segment are equal",
            "If ∠ACB and ∠ADB are in same segment, then ∠ACB = ∠ADB"
          ],

          availableTools: [
            "circleSameArc"
          ]
        },
        {
          id: "proof-same-segment",
          title: "Proof Using Angle at Centre",
          difficulty: "intermediate-advanced",
          prerequisites: ["angles-same-segment"],
          masterySignals: "Student connects to angle at centre theorem and explains proof in 2+ attempts",
          estimatedQuestions: "2-3 questions",

          learningObjectives: [
            "Use angle at centre theorem: ∠AOB = 2∠ACB and ∠AOB = 2∠ADB",
            "Recognize that both angles relate to same angle at centre",
            "Conclude: if 2∠ACB = 2∠ADB, then ∠ACB = ∠ADB",
            "Understand this works for any points in the same segment",
            "Apply proof logic independently"
          ],

          relevantFormulas: [
            "∠AOB = 2∠ACB (angle at centre)",
            "∠AOB = 2∠ADB (angle at centre)",
            "∴ ∠ACB = ∠ADB (angles in same segment)"
          ],

          availableTools: [
            "circleSameArc",
            "circleAngleCentre"
          ]
        },
        {
          id: "cyclic-quadrilaterals",
          title: "Cyclic Quadrilaterals",
          difficulty: "advanced",
          prerequisites: ["proof-same-segment"],
          masterySignals: "Student identifies cyclic quadrilaterals and applies opposite angle property in 2+ problems",
          estimatedQuestions: "2-3 questions",

          learningObjectives: [
            "Define cyclic quadrilateral: four vertices on a circle",
            "State theorem: Opposite angles of cyclic quadrilateral sum to 180°",
            "Prove using angles in same segment",
            "Apply to find unknown angles in cyclic quadrilaterals",
            "Recognize converse: if opposite angles sum to 180°, quadrilateral is cyclic",
            "Use exterior angle property: exterior angle = opposite interior angle"
          ],

          relevantFormulas: [
            "In cyclic quadrilateral ABCD: ∠A + ∠C = 180° and ∠B + ∠D = 180°",
            "Exterior angle of cyclic quadrilateral = opposite interior angle"
          ],

          sampleProblems: [
            {
              problem: "ABCD is a cyclic quadrilateral. If ∠A = 85° and ∠B = 70°, find ∠C and ∠D.",
            },
            {
              problem: "Points P, Q, R, S lie on a circle. If ∠P = 3x and ∠R = 2x + 20°, find x.",
            }
          ],

          availableTools: [
            "circleSameArc"
          ]
        },
        {
          id: "applications-same-arc",
          title: "Advanced Applications",
          difficulty: "advanced",
          prerequisites: ["cyclic-quadrilaterals"],
          masterySignals: "Student solves complex problems combining multiple circle theorems in 2+ attempts",
          estimatedQuestions: "2-3 questions",

          learningObjectives: [
            "Combine angles in same segment with other circle theorems",
            "Solve problems with multiple circles",
            "Apply to geometric proofs",
            "Use in real-world contexts (inscribed shapes, architecture)",
            "Prove relationships between angles using circle theorems systematically"
          ],

          relevantFormulas: [
            "All circle theorems combined",
            "Angles in same segment, angle at centre, cyclic quadrilaterals, etc."
          ],

          availableTools: [
            "circleSameArc",
            "circleAngleCentre",
            "generalTriangle"
          ]
        }
      ]
    },

    learningObjectives: `
Students will master angles in same segment:
1. Same Segment Theorem - Angles in same segment are equal
2. Proof - Using angle at centre theorem
3. Cyclic Quadrilaterals - Opposite angles sum to 180°
4. Advanced Applications - Combining multiple theorems`,

    keyFormulas: `
• Angles in same segment are equal
• Proof: Both equal to half the angle at centre
• Cyclic quadrilateral: opposite angles sum to 180°
• Exterior angle of cyclic quad = opposite interior angle`
  }
};

// ============================================
// EXPORT COMBINED (for backward compatibility)
// ============================================

export const S3_MATH_CIRCLE_GEOMETRY: Record<CircleGeometryTopicId, any> =
  S3_MATH_CIRCLE_GEOMETRY_SUBTOPICS;
