/**
 * Solution Generation Agent Base Template
 * Provides clear, educational step-by-step solutions
 */

import type { AgentPrompt } from '../../types/prompts';
import { PromptTemplate } from '../../templates/base-template';

/**
 * Base solution agent configuration
 * Extended by subject-specific solution generators
 */
export const SOLUTION_BASE: AgentPrompt = {
  id: 'core.agent.solution',

  role: `You are the SOLUTION GENERATION AGENT - Provide clear, educational step-by-step solutions.

Your sole responsibility is to generate clear, educational solutions based on precise instructions from the Evaluator Agent.
You do NOT make pedagogical decisions about explanation depth or what concepts to emphasize beyond the instructions.`,

  responsibilities: [
    "Generate complete step-by-step walkthroughs",
    "Focus on the explanationFocus from instruction",
    "Address the studentStrugglePoint directly",
    "Show WHY the student's attempt was incorrect",
    "Use ONLY relevantFormulas and relevantConcepts provided",
    "Create brief supportive speech introduction",
    "Format solution with clear markdown structure",
    "Include visual tools when helpful for explanation"
  ],

  capabilities: {
    generation: [
      "Step-by-step solution creation",
      "Error explanation",
      "Concept clarification",
      "Visual demonstration"
    ]
  },

  constraints: [
    "MUST follow solutionInstruction exactly",
    "MUST address studentStrugglePoint",
    "MUST keep speech.text as PLAIN TEXT (1-2 sentences)",
    "MUST use markdown/LaTeX in display.content",
    "MUST show complete working",
    "MUST explain the 'why' not just 'what'",
    "MUST use only provided formulas and concepts"
  ],

  outputSchema: {
    speech: {
      text: "string - brief supportive intro (plain text)",
      emotion: "supportive | encouraging"
    },

    display: {
      content: "string - complete solution (markdown/LaTeX)",
      showAfterSpeech: "boolean",
      type: "solution"
    },

    mathTool: {
      toolName: "string - technical key",
      parameters: "object - tool parameters",
      caption: "string - explanation"
    }
  }
};

/**
 * Create solution template
 */
export function createSolutionTemplate(): PromptTemplate {
  return new PromptTemplate({
    id: 'solution.base',
    name: 'Base Solution Template',
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
{solutionInstruction}

EVALUATOR'S REASONING:
{evaluatorReasoning}

YOUR TASK:
Execute the solutionInstruction to generate a complete educational solution.
Return a properly formatted JSON response following the output schema.

SOLUTION STRUCTURE:
1. Identify what we know and what we need
2. Select the appropriate method/formula
3. Set up the equation/calculation
4. Perform the calculation step-by-step
5. State the final answer with units

CRITICAL RULES:
1. Use ONLY information in solutionInstruction
2. speech.text must be PLAIN TEXT (TTS-compatible)
3. display.content uses markdown and LaTeX
4. Address the specific studentStrugglePoint
5. Return JSON only`,

    variables: [
      { key: 'role', type: 'string', required: true, default: SOLUTION_BASE.role },
      { key: 'responsibilities', type: 'array', required: true, default: SOLUTION_BASE.responsibilities },
      { key: 'constraints', type: 'array', required: true, default: SOLUTION_BASE.constraints },
      { key: 'outputSchema', type: 'object', required: true, default: SOLUTION_BASE.outputSchema },
      { key: 'formattingRules', type: 'object', required: false, default: {} },
      { key: 'visualTools', type: 'object', required: false, default: {} },
      { key: 'solutionInstruction', type: 'object', required: true, default: {} },
      { key: 'evaluatorReasoning', type: 'string', required: false, default: '' }
    ]
  });
}

/**
 * Solution structure templates
 */
export const SOLUTION_STRUCTURES = {
  mathematical: {
    steps: [
      "### Step 1: Identify Given Information",
      "### Step 2: Determine What We Need to Find",
      "### Step 3: Choose the Appropriate Formula",
      "### Step 4: Substitute Values",
      "### Step 5: Calculate",
      "### Step 6: Final Answer"
    ],
    emphasis: "Show all mathematical working"
  },

  conceptual: {
    steps: [
      "### Understanding the Problem",
      "### Key Concept",
      "### Applying the Concept",
      "### Working Through",
      "### Conclusion"
    ],
    emphasis: "Explain the underlying concepts"
  },

  procedural: {
    steps: [
      "### Step 1: Setup",
      "### Step 2: First Operation",
      "### Step 3: Second Operation",
      "### Step 4: Verification",
      "### Step 5: Result"
    ],
    emphasis: "Follow the procedure exactly"
  },

  problemSolving: {
    steps: [
      "### Understanding",
      "### Planning",
      "### Executing",
      "### Checking",
      "### Answer"
    ],
    emphasis: "Problem-solving strategy"
  }
};

/**
 * Explanation depth levels
 */
export const EXPLANATION_DEPTH = {
  brief: {
    description: "Quick solution with minimal explanation",
    sentencesPerStep: 1,
    showIntermediate: false
  },

  standard: {
    description: "Clear solution with reasoning",
    sentencesPerStep: 2,
    showIntermediate: true
  },

  detailed: {
    description: "Comprehensive explanation",
    sentencesPerStep: 3,
    showIntermediate: true,
    includeAlternatives: true
  }
};

/**
 * Common struggle points and how to address them
 */
export const STRUGGLE_POINT_STRATEGIES = {
  "formula_selection": {
    strategy: "Explain WHY this formula applies",
    emphasis: "Show the connection between given info and formula choice"
  },

  "calculation_error": {
    strategy: "Show each calculation step clearly",
    emphasis: "Highlight where the error occurred"
  },

  "concept_confusion": {
    strategy: "Clarify the concept before solving",
    emphasis: "Connect to fundamental understanding"
  },

  "unit_conversion": {
    strategy: "Show conversion explicitly",
    emphasis: "Keep units throughout calculation"
  },

  "setup_error": {
    strategy: "Demonstrate correct problem setup",
    emphasis: "Explain the structure"
  }
};

/**
 * Speech templates for solution introduction
 */
export const SOLUTION_SPEECH_TEMPLATES = {
  supportive: [
    "Let me walk you through this step by step.",
    "No worries! Here's how to solve it.",
    "Let me show you the complete solution.",
    "Here's the detailed explanation."
  ],

  encouraging: [
    "You were close! Here's the full solution.",
    "Good attempt! Let me show you the method.",
    "You're learning! Here's how it works.",
    "Nice try! Let's see the solution together."
  ],

  afterStruggle: [
    "This is tricky! Let me break it down for you.",
    "It's a challenging one. Here's the approach.",
    "Don't worry, this confuses many students. Let me explain.",
    "This takes practice. Here's the solution."
  ]
};

/**
 * LaTeX formatting helpers for solutions
 */
export const LATEX_HELPERS = {
  fractions: "\\frac{numerator}{denominator}",
  squareRoot: "\\sqrt{value}",
  powers: "x^{power}",
  subscript: "x_{index}",
  trigFunctions: "\\sin, \\cos, \\tan",
  greekLetters: "\\theta, \\alpha, \\beta",
  operators: "\\times, \\div, \\pm",
  alignedEquations: "Use \\begin{align} for multi-line",

  example: "$\\sin(30°) = \\frac{1}{2}$"
};