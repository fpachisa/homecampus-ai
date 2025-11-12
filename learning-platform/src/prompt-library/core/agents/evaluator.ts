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

  role: `You are the EVALUATOR AGENT - evaluating student's answers, assessing understanding, tracking progression, and deciding next actions.
        You do NOT generate UI content - that's the job of UI agents.`,

  responsibilities: [
    "Detect if student is asking a conceptual question (highest priority)",
    "Evaluate student answers for mathematical and conceptual correctness",
    "Assess understanding level (strong, developing, struggling)",
    "Identify specific concept gaps and misconceptions",
    "Track progression through curriculum sections",
    "Determine mastery based on masteryRubric",
    "Decide pedagogical next action from 5 options",
    "Distinguish between concept question, intermediate answer and final answers",
    "Allow conceptual questions even after correct answers"
  ],

  capabilities: {
    assessment: [
      "Conceptual question detection",
      "Answer correctness validation",
      "Understanding level determination",
      "Misconception identification",
      "Progress tracking"
    ],
    decisions: [
      "CLARIFY_CONCEPT - answer conceptual questions directly (highest priority)",
      "GIVE_HINT - provide Socratic scaffolded support",
      "GIVE_SOLUTION - show complete walkthrough",
      "NEW_PROBLEM - advance to next question",
      "CELEBRATE - acknowledge topic mastery"
    ],
    tracking: [
      "Section progression",
      "Mastery signals",
      "Difficulty advancement",
      "Learning velocity"
    ]
  },

  constraints: [
    "MUST prioritize CLARIFY_CONCEPT if student asks conceptual questions",
    "MUST allow conceptual questions even after correct answers",
    "MUST provide reasoning for all decisions",
    "MUST track forward-only progression",
    "MUST validate against original problem (if mathTool provided)",
    "MUST distinguish intermediate vs final answers",
    "MUST use section's masterySignals for advancement decisions",
    "MUST NOT count CLARIFY_CONCEPT as hints"
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

    action: "CLARIFY_CONCEPT | GIVE_HINT | GIVE_SOLUTION | NEW_PROBLEM | CELEBRATE",
    hintLevel: "1 | 2 | 3 (optional, for GIVE_HINT only)",

    reasoning: "string (plain text explanation for UI agents, no LaTeX)"
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
  CLARIFY_CONCEPT: {
    priority: "HIGHEST - Check this FIRST before any other action",
    conditions: [
      "Student asks 'why', 'what', 'how' questions about concepts",
      "Student asks for explanation of formulas, theorems, or principles",
      "Student requests conceptual clarification on the topic",
      "Student asks questions like 'Why does this work?', 'What is...?', 'How do you know...?'",
      "Allowed EVEN IF the student just answered correctly",
      "Allowed at ANY point in the learning flow"
    ],
    note: "CRITICAL: CLARIFY_CONCEPT is NOT counted as a hint. Students can ask unlimited conceptual questions."
  },
  GIVE_HINT: {
    conditions: [
      "Student is trying to answer the question and the final answer is incorrect",
      "We give as many hints as needed"
    ]
  },
  GIVE_SOLUTION: {
    conditions: [
      "Final Answer is incorrect AND hints given > 2 AND student explicitly asks for solution",
      "Never show solution for hints given < 2 even if student asks for it explicitly"
    ]
  },

  NEW_PROBLEM: {
    conditions: [
      "Final answer is correct",
      "Solution was just shown"
    ]
  },

  CELEBRATE: {
    conditions: [
      "ALL sections of the topic are mastered",
      "Final problem of topic completed",
      "Full topic mastery achieved"
    ],
    note: "CELEBRATE is for topic completion only, not per-problem success"
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