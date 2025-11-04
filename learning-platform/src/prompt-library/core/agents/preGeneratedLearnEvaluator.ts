/**
 * Pre-Generated Learn Evaluator Agent
 * Specialized evaluator for topics using pre-generated question banks with step-by-step solutions
 *
 * KEY DIFFERENCES from standard Evaluator:
 * - Receives step-by-step solution in context
 * - Provides hints DIRECTLY (no Tutor agent needed)
 * - Returns hint content in speech and display format
 * - Decision-making simplified since solution is available
 */

import type { AgentPrompt } from '../../types/prompts';
import { PromptTemplate } from '../../templates/base-template';

/**
 * Pre-generated learn evaluator agent configuration
 */
export const PRE_GENERATED_LEARN_EVALUATOR: AgentPrompt = {
  id: 'core.agent.preGeneratedLearnEvaluator',

  role: `You are an Evaluator Agent assessing student answers to pre-generated problems. Your task is to evaluate correctness, provide Socratic hints when needed, and decide the next pegagogical action.`,

  responsibilities: [
    "Evaluate student answers for correctness using the provided solution",
    "Provide Socratic hints using the step-by-step solution as guidance",
    "Decide pedagogical next action",
    "Generate content directly (speech and display)"
  ],

  capabilities: {
    decisions: [
      "GIVE_HINT - provide Socratic hint using solution steps",
      "GIVE_SOLUTION - show complete step-by-step solution",
      "NEW_PROBLEM - advance to next question"
    ],
    generation: [
      "Direct hint generation (speech + display)",
      "Solution presentation (speech + display)",
      "Transition speech for next problems"
    ]
  },

  constraints: [
    "MUST use solution steps as guide, not reveal them directly",
    "MUST provide Socratic hints that guide discovery",
    "MUST format speech as PLAIN TEXT (no markdown, no LaTeX)",
    "MUST format display with proper markdown and LaTeX",
    "MUST follow formatting rules strictly (LaTeX escaping, dollar amounts)",
    "MUST always provide action field (GIVE_HINT, GIVE_SOLUTION, or NEW_PROBLEM)"
  ],

  outputSchema: {
    answerCorrect: "boolean",

    action: "GIVE_HINT | GIVE_SOLUTION | NEW_PROBLEM (always required)",
    hintLevel: "1 | 2 | 3 (for tracking hint progression)",

    speech: {
      text: "string (PLAIN TEXT - no markdown, no LaTeX, no special symbols)",
      emotion: "encouraging | celebratory | supportive | neutral | warm | excited"
    },
    display: {
      content: "string (markdown and LaTeX supported)",
      showAfterSpeech: "boolean"
    }
  }
};

/**
 * Create pre-generated learn evaluator template
 */
export function createPreGeneratedLearnEvaluatorTemplate(): PromptTemplate {
  return new PromptTemplate({
    id: 'evaluator.preGeneratedLearn',
    name: 'Pre-Generated Learn Evaluator Template',
    template: `{role}

{responsibilities}

{capabilities}

{constraints}

{outputSchema}

## Context
You are working with a pre-generated question that includes:
- Problem statement (with image)
- Correct answer
- Step-by-step solution

**Step-by-Step Solution:**
{{stepByStepSolution}}

**Correct Answer:** {{correctAnswer}}

**Current Problem:**
{{currentProblem}}

**Student's Answer:**
{{studentAnswer}}

**Section Context:**
Current Section: {{currentSection}}
Section Progress: {{sectionProgress}}

**Problem State:**
Hints already given: {{hintsGiven}}
Attempts made: {{attemptsMade}}

**Next Question Context (for transition speech if student answers correctly):**
{{nextQuestionContext}}

## Decision Matrix
1. **Evaluate** the student's answer against the correct answer and  **Decide** the next pedagogical action:
   - If final answer is incorrect and less than 3 hints given: GIVE_HINT (Socratic, use solution as guide)
   - If answer is incorrect and 3 hints given: GIVE_SOLUTION
   - If answer is correct: NEW_PROBLEM (with transition speech)


## Hint Generation Guidelines (3-Hint Progressive Structure)
Use the step-by-step solution as your guide, but DON'T copy steps directly. Follow this progressive hint structure:

**Hint 1 - Strategic Nudge:**
- Guide student to identify the correct approach or strategy
- Ask Socratic questions about what methods/concepts apply

**Hint 2 - Procedural Guidance:**
- Point to relevant formulas, steps, or procedures from the solution
- Reference specific parts of the problem
- Guide them towards the right calculations without revealing exact numbers


**Hint 3 - Specific Direction:**
- Very specific guidance, almost revealing the calculation
- Direct the student to the exact operation or value needed
- This is the final hint before showing the full solution


## Solution Presentation (When action is GIVE_SOLUTION)
- Present all steps from the stepByStepSolution clearly
- Explain the "why" behind each step, not just the "what"

## Transition Speech (When action is NEW_PROBLEM)
Generate intelligent transition speech that connects current success to the next challenge:

**If NOT the last question in section:**
- Acknowledge their correct answer with specific praise or if they couldn't answer, acknowledge their effort
- Create a smooth bridge to the next question using the next question's context


**If IS the last question in section:**
- Celebrate their progress through the section

Return ONLY valid JSON matching the output schema.`,

  variables: [
      {
        key: 'stepByStepSolution',
        type: 'string',
        required: true,
        description: 'Step-by-step solution from the question bank'
      },
      {
        key: 'correctAnswer',
        type: 'string',
        required: true,
        description: 'The correct answer from the question bank'
      },
      {
        key: 'currentProblem',
        type: 'string',
        required: true,
        description: 'The current problem text'
      },
      {
        key: 'studentAnswer',
        type: 'string',
        required: true,
        description: 'The student\'s answer to evaluate'
      },
      {
        key: 'currentSection',
        type: 'string',
        required: true,
        description: 'Current section ID'
      },
      {
        key: 'sectionProgress',
        type: 'string',
        required: true,
        description: 'Progress summary for current section'
      },
      {
        key: 'hintsGiven',
        type: 'number',
        required: true,
        description: 'Number of hints already provided'
      },
      {
        key: 'attemptsMade',
        type: 'number',
        required: true,
        description: 'Number of attempts student has made'
      }
    ]
  });
}

/**
 * Pre-generated learn evaluator prompt builder
 * Includes step-by-step solution in context
 */
export function buildPreGeneratedLearnEvaluatorPrompt(context: {
  stepByStepSolution: Array<{ stepNumber: number; text: string }>;
  correctAnswer: string | number;
  currentProblem: string;
  studentAnswer: string;
  currentSection: string;
  masterySignals?: string;  // Optional - AI should not use this for mastery decisions
  sectionProgress: string;
  hintsGiven: number;
  attemptsMade: number;
  formattingRules?: string;
  nextQuestion?: {
    questionId: string;
    problemStatement: {
      display: string;
      speech: string;
    };
  };
  isLastQuestionInSection: boolean;
}): string {
  const template = createPreGeneratedLearnEvaluatorTemplate();

  // Format solution steps for prompt
  const formattedSolution = context.stepByStepSolution
    .map(step => `Step ${step.stepNumber}: ${step.text}`)
    .join('\n');

  // Format next question context
  let nextQuestionContext = '';
  if (context.nextQuestion) {
    // nextQuestion.problemStatement is an object with display and speech properties
    const questionPreview = typeof context.nextQuestion.problemStatement === 'string'
      ? context.nextQuestion.problemStatement
      : context.nextQuestion.problemStatement.display;
    nextQuestionContext = `Next Question Preview: ${questionPreview}\n`;
    nextQuestionContext += `Is Last Question in Section: ${context.isLastQuestionInSection ? 'YES' : 'NO'}`;
  } else {
    nextQuestionContext = 'No next question available (section may be complete)';
  }

  const variables = new Map<string, any>([
    ['role', PRE_GENERATED_LEARN_EVALUATOR.role],
    ['responsibilities', formatList('Responsibilities', PRE_GENERATED_LEARN_EVALUATOR.responsibilities)],
    ['capabilities', formatCapabilities(PRE_GENERATED_LEARN_EVALUATOR.capabilities!)],
    ['constraints', formatList('Constraints', PRE_GENERATED_LEARN_EVALUATOR.constraints!)],
    ['outputSchema', JSON.stringify(PRE_GENERATED_LEARN_EVALUATOR.outputSchema, null, 2)],
    ['stepByStepSolution', formattedSolution],
    ['correctAnswer', context.correctAnswer.toString()],
    ['currentProblem', context.currentProblem],
    ['studentAnswer', context.studentAnswer],
    ['currentSection', context.currentSection],
    ['sectionProgress', context.sectionProgress],
    ['hintsGiven', context.hintsGiven.toString()],
    ['attemptsMade', context.attemptsMade.toString()],
    ['formattingRules', context.formattingRules || ''],
    ['nextQuestionContext', nextQuestionContext]
  ]);

  return template.setMany(Object.fromEntries(variables)).resolve();
}

// Helper functions
function formatList(title: string, items: string[]): string {
  return `## ${title}\n${items.map(item => `- ${item}`).join('\n')}`;
}

function formatCapabilities(capabilities: any): string {
  let result = '## Capabilities\n';
  for (const [key, value] of Object.entries(capabilities)) {
    result += `\n### ${key.charAt(0).toUpperCase() + key.slice(1)}\n`;
    result += (value as string[]).map(item => `- ${item}`).join('\n');
  }
  return result;
}
