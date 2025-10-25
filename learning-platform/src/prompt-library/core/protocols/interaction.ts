/**
 * Interaction Protocol
 * Clear contract between system and AI for consistent communication
 */

import type { InteractionProtocol } from '../../types/prompts';

/**
 * Complete interaction protocol defining inputs and outputs
 * for all agents in the system
 */
export const INTERACTION_PROTOCOL: InteractionProtocol = {
  // ============================================
  // System Inputs (What AI receives)
  // ============================================
  inputs: {
    studentContext: {
      currentSubtopic: "string - e.g., 's3-math-trigonometry-basic-ratios'",
      currentDifficultyLevel: "string - foundational | intermediate | advanced",
      chatHistory: "Message[] - last 6 messages for context",
      problemState: {
        currentProblem: "string - the problem/question being worked on",
        hintsGivenSoFar: "number - how many hints given for current problem",
        attemptsCount: "number - how many attempts student has made",
        recentPerformance: "string - summary of last 3-5 problems",
        originalMathTool: "MathTool | null - original visual tool (for validation)"
      }
    },
    studentResponse: "string - what the student just submitted"
  },

  // ============================================
  // Evaluator Agent Outputs
  // ============================================
  evaluatorOutputs: {
    answerCorrect: "boolean - is the student's answer correct?",
    isMainProblemSolved: "boolean - has the main problem been completely solved?",

    assessment: {
      understanding: "strong | developing | struggling - current understanding level",
      conceptGaps: "string[] - specific concepts student needs to work on",
      readyToAdvance: "boolean - ready for next section?"
    },

    progression: {
      currentSection: "string - current section ID (e.g., 'triangle-labeling')",
      sectionMastered: "boolean - has student mastered current section?",
      masteryProgress: "string - brief description (e.g., '2/3 signals met')",
      nextSection: "string | null - next section ID if current is mastered"
    },

    action: "GIVE_HINT | GIVE_SOLUTION | NEW_PROBLEM | CELEBRATE - next action",
    hintLevel: "1 | 2 | 3 (optional) - which hint number if GIVE_HINT",

    // Instructions for UI agents
    tutorInstruction: "object (optional) - if GIVE_HINT or CELEBRATE",
    questionInstruction: "object (optional) - if NEW_PROBLEM",
    solutionInstruction: "object (optional) - if GIVE_SOLUTION",

    reasoning: "string - internal explanation (plain text, NO LaTeX)"
  },

  // ============================================
  // Tutor Agent Outputs
  // ============================================
  tutorOutputs: {
    speech: {
      text: "string - what the avatar says (PLAIN TEXT - no markdown, no LaTeX)",
      emotion: "encouraging | celebratory | supportive | neutral"
    },

    display: {
      content: "string | null - chat bubble content (can use markdown/LaTeX)",
      showAfterSpeech: "boolean - timing of display",
      type: "hint | celebration | feedback",
      notes: {
        hint: "Progressive hint based on tutorInstruction",
        celebration: "Celebration when student completes subtopic",
        feedback: "Brief feedback on student's attempt"
      }
    },

    mathTool: "OPTIONAL - {toolName: string, parameters: object, caption: string}"
  },

  // ============================================
  // Question Generation Outputs
  // ============================================
  questionGenerationOutputs: {
    speech: {
      text: "string - brief acknowledgment (PLAIN TEXT)",
      emotion: "encouraging | celebratory | supportive | neutral"
    },

    display: {
      content: "string - the new question/problem text",
      showAfterSpeech: "boolean - true to show after speech",
      type: "question"
    },

    mathTool: "OPTIONAL - visual tool for the question"
  },

  // ============================================
  // Solution Generation Outputs
  // ============================================
  solutionOutputs: {
    speech: {
      text: "string - brief intro (1-2 sentences, PLAIN TEXT)",
      emotion: "supportive | encouraging"
    },

    display: {
      content: "string - complete step-by-step solution (markdown/LaTeX OK)",
      showAfterSpeech: "boolean - true to show after speech",
      type: "solution"
    },

    mathTool: "OPTIONAL - visual tool to explain solution"
  },

  // ============================================
  // Instruction Schemas (Evaluator → UI Agents)
  // ============================================
  instructionSchemas: {
    TutorInstruction: {
      focusConcept: "string - concept/skill to focus hint on",
      studentError: "string - what student did wrong",
      hintStrategy: "string - approach for the hint",
      relevantInfo: "string - definition/formula/concept needed",
      tone: "string - pedagogical tone guidance",
      depth: "gentle nudge | specific guidance | near-answer"
    },

    QuestionInstruction: {
      targetSection: "string - section ID from progressionStructure",
      targetConcept: "string - specific learning objective to test",
      difficulty: "foundational | intermediate | advanced",
      focusObjectives: "string[] - ALL learning objectives for section",
      relevantFormulas: "string[] - only formulas needed for this question",
      conceptGaps: "string[] (optional) - what student is struggling with",
      sampleProblems: "array (optional) - example problems as templates",
      questionConstraints: "object (optional) - additional parameters"
    },

    SolutionInstruction: {
      problemText: "string - the exact problem that needs solving",
      studentAttempt: "string - what the student tried",
      explanationFocus: "string - core concept to explain",
      relevantFormulas: "string[] - only formulas needed",
      relevantConcepts: "string - specific concepts from objectives",
      explanationDepth: "string - guidance on detail level",
      studentStrugglePoint: "string - what student is struggling with"
    }
  }
};

/**
 * Progression model for difficulty advancement
 */
export const PROGRESSION_MODEL = {
  description: "AI-driven organic difficulty progression based on student mastery",

  difficultyLevels: {
    1: "foundational - Basic concepts, triangle labeling, understanding ratios",
    2: "intermediate - Calculations, applying ratios, word problems",
    3: "advanced - Complex problems, multi-step reasoning, real-world applications"
  },

  progressionMechanism: "The system tracks currentProblemType (1, 2, or 3). The AI signals readiness to advance via assessment.readyToAdvance field. When true, the system will increment difficulty level for subsequent questions.",

  guidelines: [
    "Set readyToAdvance: true when student demonstrates consistent mastery (e.g., 3+ correct answers in a row at current level)",
    "Set readyToAdvance: false if student is still developing understanding or making errors",
    "Progression is one-way (no automatic regression) - system trusts AI's judgment",
    "Questions should match the current difficulty level appropriately"
  ],

  masterySignals: {
    foundational: "2-3 correct answers with minimal hints",
    intermediate: "3-4 correct answers with good understanding",
    advanced: "2-3 correct answers in complex scenarios"
  }
};

/**
 * Decision rules for evaluator agent
 */
export const EVALUATOR_DECISION_RULES = {
  actionSelection: {
    NEW_PROBLEM: {
      condition: "Student answered correctly OR after showing solution",
      instruction: "Generate questionInstruction with appropriate section"
    },
    GIVE_HINT: {
      condition: "Student answered incorrectly AND hints < 2",
      instruction: "Generate tutorInstruction with targeted hint guidance"
    },
    GIVE_SOLUTION: {
      condition: "Student answered incorrectly AND hints >= 2 OR student asks for solution",
      instruction: "Generate solutionInstruction"
    },
    CELEBRATE: {
      condition: "Student has mastered ALL sections in progressionStructure",
      instruction: "Generate tutorInstruction for celebration"
    }
  },

  distinguishingAnswerTypes: {
    intermediate: "Student is answering a hint or sub-question",
    final: "Student is answering the main problem",
    rules: [
      "Check the most recent tutor message in history",
      "If it contains a hint with sub-question, answer might be intermediate",
      "Only mark isMainProblemSolved=true for ORIGINAL problem answers",
      "Set isMainProblemSolved=false for all intermediate answers"
    ]
  },

  progressionTracking: {
    currentSection: "Determine based on what's being tested",
    sectionMastered: "Use section's masterySignals AND current stats",
    masteryProgress: "Track accurately (e.g., '2/3 correct answers')",
    nextSection: "Set if current mastered AND prerequisites met"
  }
};

/**
 * Response validation schemas
 */
export const RESPONSE_SCHEMAS = {
  evaluator: {
    required: ['answerCorrect', 'isMainProblemSolved', 'assessment', 'progression', 'action', 'reasoning'],
    optional: ['hintLevel', 'tutorInstruction', 'questionInstruction', 'solutionInstruction'],
    validation: {
      action: ['GIVE_HINT', 'GIVE_SOLUTION', 'NEW_PROBLEM', 'CELEBRATE'],
      understanding: ['strong', 'developing', 'struggling'],
      hintLevel: [1, 2, 3]
    }
  },

  tutor: {
    required: ['speech', 'display'],
    optional: ['mathTool'],
    validation: {
      emotion: ['encouraging', 'celebratory', 'supportive', 'neutral'],
      type: ['hint', 'celebration', 'feedback']
    }
  },

  question: {
    required: ['speech', 'display'],
    optional: ['mathTool'],
    validation: {
      emotion: ['encouraging', 'celebratory', 'supportive', 'neutral'],
      type: ['question']
    }
  },

  solution: {
    required: ['speech', 'display'],
    optional: ['mathTool'],
    validation: {
      emotion: ['supportive', 'encouraging'],
      type: ['solution']
    }
  }
};

/**
 * Math tool protocol
 */
export const MATH_TOOL_PROTOCOL = {
  structure: {
    toolName: "string - technical key (e.g., 'rightTriangle')",
    parameters: "object - tool-specific parameters",
    caption: "string - brief explanation of visual"
  },

  criticalRules: [
    "toolName must be the technical key, NOT the display name",
    "Use only these three fields (toolName, parameters, caption)",
    "Do NOT add 'description', 'structure', or wrapper fields",
    "Either include the flat object OR omit mathTool entirely"
  ],

  availableTools: [
    "rightTriangle",
    "elevationDepression",
    "multipleDepressionAngles",
    "generalTriangle",
    "extendedLineTriangle",
    "cuboid",
    "pyramid",
    "bearings",
    "quadrilateral"
  ]
};

/**
 * Practice mode protocol
 */
export const PRACTICE_MODE_PROTOCOL = {
  batchGeneration: {
    input: {
      problemType: "number - difficulty level",
      topicId: "string - topic identifier",
      count: "number - problems to generate",
      context: {
        userPreferences: "string[] - preferred contexts",
        excludeContexts: "string[] - recently used",
        recentProblems: "string[] - avoid repetition"
      }
    },
    output: {
      problems: [{
        problemText: "string - full problem statement",
        correctAnswer: "string - final answer with units",
        context: "string - theme/context used",
        solutionData: "object (optional) - pre-generated solution"
      }]
    }
  },

  evaluation: {
    input: {
      studentResponse: "string",
      currentProblem: "string",
      correctAnswer: "string",
      hintsGiven: "number",
      attempts: "number",
      recentHistory: "string"
    },
    output: {
      intent: "answer_submission | help_request | clarification",
      answerCorrect: "boolean",
      pointsEarned: "number",
      isMainProblemSolved: "boolean",
      speech: "object - avatar speech",
      display: "object - display content",
      action: "give_hint | show_solution | next_problem | none",
      reasoning: "string"
    }
  }
};

/**
 * Export all protocols
 */
export default {
  INTERACTION_PROTOCOL,
  PROGRESSION_MODEL,
  EVALUATOR_DECISION_RULES,
  RESPONSE_SCHEMAS,
  MATH_TOOL_PROTOCOL,
  PRACTICE_MODE_PROTOCOL
};