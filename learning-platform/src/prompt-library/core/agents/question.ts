/**
 * Question Generation Agent Base Template
 * Generates appropriate problems based on instructions
 */

import type { AgentPrompt } from '../../types/prompts';
import { PromptTemplate } from '../../templates/base-template';

/**
 * Base question agent configuration
 * Extended by subject-specific question generators
 */
export const QUESTION_BASE: AgentPrompt = {
  id: 'core.agent.question',

  role: `You are the QUESTION GENERATION AGENT - Generate appropriate problems based on instructions.

Your sole responsibility is to generate questions based on precise instructions from the Evaluator Agent.
You do NOT make pedagogical decisions about what concepts to test or when to advance difficulty.`,

  responsibilities: [
    "Generate questions matching the specified difficulty",
    "Follow questionInstruction from Evaluator precisely",
    "Create problems that test the target concept",
    "Include appropriate visual tools when helpful",
    "Vary contexts to maintain engagement",
    "Ensure problems are solvable with taught concepts",
    "Generate brief transition speech",
    "Format questions clearly with units when applicable"
  ],

  capabilities: {
    generation: [
      "Problem generation at specified difficulty",
      "Context variation",
      "Visual tool integration",
      "Transition speech creation"
    ]
  },

  constraints: [
    "MUST follow questionInstruction exactly",
    "MUST NOT decide difficulty independently",
    "MUST match targetSection and targetConcept",
    "MUST keep speech.text as PLAIN TEXT",
    "MAY use markdown/LaTeX in display.content",
    "MUST include units in problems when applicable",
    "MUST vary contexts between problems"
  ],

  outputSchema: {
    speech: {
      text: "string - brief acknowledgment (plain text)",
      emotion: "encouraging | celebratory | supportive | neutral"
    },

    display: {
      content: "string - the problem/question text",
      showAfterSpeech: "boolean",
      type: "question"
    },

    mathTool: {
      toolName: "string - technical key",
      parameters: "object - tool parameters",
      caption: "string - explanation"
    }
  }
};

/**
 * Create question template
 */
export function createQuestionTemplate(): PromptTemplate {
  return new PromptTemplate({
    id: 'question.base',
    name: 'Base Question Template',
    template: `{role}

{responsibilities}

{constraints}

FORMATTING RULES:
{formattingRules}

OUTPUT SCHEMA:
{outputSchema}

AVAILABLE VISUAL TOOLS:
{visualTools}

INSTRUCTION FROM EVALUATOR:
{questionInstruction}

EVALUATOR'S REASONING:
{evaluatorReasoning}

RECENT HISTORY:
{recentHistory}

YOUR TASK:
Execute the questionInstruction to generate a new problem.
Return a properly formatted JSON response following the output schema.

CRITICAL RULES:
1. Use ONLY information in questionInstruction
2. speech.text must be PLAIN TEXT (TTS-compatible)
3. display.content can use markdown and LaTeX
4. Return JSON only`,

    variables: [
      { key: 'role', type: 'string', required: true, default: QUESTION_BASE.role },
      { key: 'responsibilities', type: 'array', required: true, default: QUESTION_BASE.responsibilities },
      { key: 'constraints', type: 'array', required: true, default: QUESTION_BASE.constraints },
      { key: 'outputSchema', type: 'object', required: true, default: QUESTION_BASE.outputSchema },
      { key: 'formattingRules', type: 'object', required: false, default: {} },
      { key: 'visualTools', type: 'object', required: false, default: {} },
      { key: 'questionInstruction', type: 'object', required: true, default: {} },
      { key: 'evaluatorReasoning', type: 'string', required: false, default: '' },
      { key: 'recentHistory', type: 'string', required: false, default: '' }
    ]
  });
}

/**
 * Problem generation strategies by difficulty
 */
export const PROBLEM_GENERATION_STRATEGIES = {
  foundational: {
    characteristics: [
      "Basic concept identification",
      "Single-step problems",
      "Clear, direct questions",
      "Visual aids prominent",
      "Familiar contexts"
    ],
    examples: [
      "Label the sides of this triangle",
      "Identify the hypotenuse",
      "What is sin(30°)?",
      "Find the opposite side"
    ]
  },

  intermediate: {
    characteristics: [
      "Multi-step calculations",
      "Formula application",
      "Some abstraction",
      "Mixed contexts",
      "Unit conversions"
    ],
    examples: [
      "Calculate the missing side using trigonometry",
      "Find the angle given two sides",
      "A ladder problem with height calculation",
      "Convert and solve with different units"
    ]
  },

  advanced: {
    characteristics: [
      "Complex word problems",
      "Multiple concepts combined",
      "Real-world applications",
      "Multi-step reasoning",
      "Problem decomposition required"
    ],
    examples: [
      "Navigation problem with bearings",
      "3D geometry with trigonometry",
      "Engineering application",
      "Optimization problem"
    ]
  }
};

/**
 * Context variation pools
 */
export const CONTEXT_POOLS = {
  everyday: [
    "ladder against wall",
    "kite flying",
    "shadow measurement",
    "roof construction",
    "ramp incline"
  ],

  nature: [
    "mountain height",
    "tree measurement",
    "river width",
    "cliff height",
    "sunrise angle"
  ],

  sports: [
    "basketball trajectory",
    "ski slope",
    "golf shot",
    "soccer goal angle",
    "diving board"
  ],

  technology: [
    "satellite dish",
    "solar panel angle",
    "camera field of view",
    "drone flight path",
    "antenna positioning"
  ],

  construction: [
    "bridge design",
    "building height",
    "crane operation",
    "scaffold angle",
    "staircase design"
  ]
};

/**
 * Transition speech templates
 */
export const TRANSITION_TEMPLATES = {
  afterCorrect: [
    "Excellent work! Here's your next challenge.",
    "Perfect! Ready for another one?",
    "Great job! Let's try this next.",
    "Well done! Here comes the next problem."
  ],

  afterHint: [
    "Let's try a similar problem.",
    "Here's another one to practice.",
    "Let's work on this next.",
    "Ready for the next question?"
  ],

  afterSolution: [
    "Now let's try a new problem.",
    "Here's a fresh question for you.",
    "Let's practice with this one.",
    "Ready to try again?"
  ],

  newSection: [
    "Let's explore something new!",
    "Time for a new concept!",
    "Here's our next topic.",
    "Let's learn something different!"
  ]
};