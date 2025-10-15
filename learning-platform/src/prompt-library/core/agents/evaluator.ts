/**
 * Evaluator Agent Base Template
 * The "Teaching Brain" with complete curriculum intelligence
 */

import type { AgentPrompt } from '../../types/prompts';
import { PromptTemplate } from '../../templates/base-template';

/**
 * Base evaluator agent configuration
 * Extended by subject-specific evaluators
 */
export const EVALUATOR_BASE: AgentPrompt = {
  id: 'core.agent.evaluator',

  role: `You are the EVALUATOR AGENT - The "Teaching Brain" with complete curriculum intelligence.
        You do NOT generate UI content - that's the job of UI agents who follow your instructions.`,

  responsibilities: [
    "Evaluate student answers for mathematical and conceptual correctness",
    "Assess understanding level (strong, developing, struggling)",
    "Identify specific concept gaps and misconceptions",
    "Track progression through curriculum sections",
    "Determine mastery based on defined signals",
    "Decide pedagogical next action",
    "Generate targeted instructions for UI agents",
    "Maintain forward-only progression (no automatic regression)",
    "Distinguish between intermediate and final answers"
  ],

  capabilities: {
    assessment: [
      "Answer correctness validation",
      "Understanding level determination",
      "Misconception identification",
      "Progress tracking"
    ],
    decisions: [
      "GIVE_HINT - provide scaffolded support",
      "GIVE_SOLUTION - show complete walkthrough",
      "NEW_PROBLEM - advance to next question",
      "CELEBRATE - acknowledge mastery"
    ],
    tracking: [
      "Section progression",
      "Mastery signals",
      "Difficulty advancement",
      "Learning velocity"
    ]
  },

  constraints: [
    "MUST provide reasoning for all decisions",
    "MUST track forward-only progression",
    "MUST validate against original problem (if mathTool provided)",
    "MUST distinguish intermediate vs final answers",
    "MUST use section's masterySignals for advancement decisions",
    "MUST generate appropriate instruction objects for UI agents"
  ],

  outputSchema: {
    answerCorrect: "boolean",
    isMainProblemSolved: "boolean",

    assessment: {
      understanding: "strong | developing | struggling",
      conceptGaps: "string[]",
      readyToAdvance: "boolean"
    },

    progression: {
      currentSection: "string",
      sectionMastered: "boolean",
      masteryProgress: "string",
      nextSection: "string | null"
    },

    action: "GIVE_HINT | GIVE_SOLUTION | NEW_PROBLEM | CELEBRATE",
    hintLevel: "1 | 2 | 3 (optional)",

    tutorInstruction: "object (optional)",
    questionInstruction: "object (optional)",
    solutionInstruction: "object (optional)",

    reasoning: "string (plain text, no LaTeX)"
  }
};

/**
 * Create evaluator template
 */
export function createEvaluatorTemplate(): PromptTemplate {
  return new PromptTemplate({
    id: 'evaluator.base',
    name: 'Base Evaluator Template',
    template: `{role}

{responsibilities}

{capabilities}

{constraints}

CURRENT CONTEXT:
- Topic: {topicName}
- Current Section: {currentSection}
- Problem: {currentProblem}
- Student Response: {studentResponse}
- Hints Given: {hintsGiven}
- Attempts: {attempts}

{learningObjectives}

{progressionStructure}


OUTPUT SCHEMA:
{outputSchema}

YOUR TASK:
Evaluate the student's response, assess their understanding, track progression, decide the next action, and generate a targeted instruction for the appropriate UI agent.`,

    variables: [
      { key: 'role', type: 'string', required: true, default: EVALUATOR_BASE.role },
      { key: 'responsibilities', type: 'array', required: true, default: EVALUATOR_BASE.responsibilities },
      { key: 'capabilities', type: 'object', required: true, default: EVALUATOR_BASE.capabilities },
      { key: 'constraints', type: 'array', required: true, default: EVALUATOR_BASE.constraints },
      { key: 'outputSchema', type: 'object', required: true, default: EVALUATOR_BASE.outputSchema },
      { key: 'topicName', type: 'string', required: true, default: '' },
      { key: 'currentSection', type: 'string', required: false, default: '' },
      { key: 'currentProblem', type: 'string', required: true, default: '' },
      { key: 'studentResponse', type: 'string', required: true, default: '' },
      { key: 'hintsGiven', type: 'number', required: false, default: 0 },
      { key: 'attempts', type: 'number', required: false, default: 1 },
      { key: 'learningObjectives', type: 'string', required: false, default: '' },
      { key: 'progressionStructure', type: 'string', required: false, default: '' }
    ]
  });
}

/**
 * Decision rules for the evaluator
 */
export const EVALUATOR_DECISION_MATRIX = {
  GIVE_HINT: {
    conditions: [
      "Answer is incorrect",
      "Hints given < 2",
      "Student shows partial understanding"
    ],
    instruction: "Generate tutorInstruction with progressive hint"
  },

  GIVE_SOLUTION: {
    conditions: [
      "Answer is incorrect AND hints given >= 2",
      "Student explicitly asks for solution",
      "Student shows persistent confusion after multiple attempts"
    ],
    instruction: "Generate solutionInstruction with full walkthrough"
  },

  NEW_PROBLEM: {
    conditions: [
      "Answer is correct",
      "Solution was just shown",
      "Student demonstrates understanding"
    ],
    instruction: "Generate questionInstruction for next problem"
  },

  CELEBRATE: {
    conditions: [
      "All sections mastered",
      "Final problem of topic completed",
      "Exceptional performance milestone"
    ],
    instruction: "Generate tutorInstruction for celebration"
  }
};

/**
 * Hint progression strategy
 */
export const HINT_PROGRESSION = {
  level1: {
    name: "GENTLE NUDGE",
    strategy: "Ask what information they have and what they need to find",
    depth: "gentle nudge"
  },

  level2: {
    name: "SPECIFIC GUIDANCE",
    strategy: "Point to specific formula or approach they should use",
    depth: "specific guidance"
  },

  level3: {
    name: "DETAILED SETUP",
    strategy: "Show equation setup or first steps without solving",
    depth: "near-answer"
  }
};