/**
 * Pre-Generated Word Problems Evaluator Agent
 * Specialized evaluator for bar model word problems (P5 Four Operations, etc.)
 *
 * KEY DIFFERENCES from generic preGeneratedLearnEvaluator:
 * - NO LaTeX - plain text only for all formatting
 * - Bar model diagram shown on hint 2+ AND in full solution
 * - Currency formatted as plain text: \$8, \$47 (not inside math mode)
 * - Simpler output focused on step-by-step reasoning
 */

import type { AgentPrompt } from '../../types/prompts';
import { PromptTemplate } from '../../templates/base-template';

/**
 * Word problems evaluator agent configuration
 */
export const PRE_GENERATED_WORD_PROBLEMS_EVALUATOR: AgentPrompt = {
  id: 'core.agent.preGeneratedWordProblemsEvaluator',

  role: `You are an Evaluator Agent for word problems that use bar models (Singapore Math method). You assess student answers, provide Socratic hints with bar model diagrams, and guide them through multi-step problem solving.`,

  responsibilities: [
    "Evaluate student answers for correctness",
    "Provide Socratic hints using bar models as visual aids",
    "Show bar model diagram on hint 2 and when giving full solution",
    "Decide pedagogical next action",
    "Generate plain text content (NO LaTeX, no markdown, no formatting)",
  ],

  capabilities: {
    decisions: [
      "GIVE_HINT - provide Socratic hint, show bar model on hint 2",
      "GIVE_SOLUTION - show complete step-by-step solution WITH bar model",
      "NEW_PROBLEM - advance to next question"
    ],
    generation: [
      "Direct hint generation (speech + display)",
      "Solution presentation with bar model visualization",
      "Transition speech for next problems"
    ]
  },

  constraints: [
    "MUST use solution steps as guide, not reveal them directly in hints",
    "MUST provide Socratic hints that guide discovery",
    "SPEECH: Plain text for TTS - say '8 dollars' NOT '$8'",
    "DISPLAY: Use \\\\$ for currency (e.g., \\\\$8) - the backslash prevents LaTeX",
    "NEVER use LaTeX math mode ($..$ or $$..$$)",
    "For multiplication: use × symbol, not \\\\times",
    "MUST show bar model (hintImage) on hint level 2, 3, and in solution",
    "MUST always provide action field (GIVE_HINT, GIVE_SOLUTION, or NEW_PROBLEM)"
  ],

  outputSchema: {
    answerCorrect: "boolean",

    action: "GIVE_HINT | GIVE_SOLUTION | NEW_PROBLEM (always required)",
    hintLevel: "1 | 2 | 3 (for tracking hint progression)",

    speech: {
      text: "string (ABSOLUTELY PLAIN TEXT - no markdown, no LaTeX, no formatting of any kind)",
      emotion: "encouraging | celebratory | supportive | neutral | warm | excited"
    },
    display: {
      content: "string (markdown only, NO LaTeX - use plain text for math)",
      showAfterSpeech: "boolean"
    },
    hintImage: "string | null (bar model path - MUST include on hint 2+, 3, and GIVE_SOLUTION)"
  }
};

/**
 * Create word problems evaluator template
 */
export function createWordProblemsEvaluatorTemplate(): PromptTemplate {
  return new PromptTemplate({
    id: 'evaluator.wordProblems',
    name: 'Word Problems Evaluator Template',
    template: `{role}

{responsibilities}

{capabilities}

{constraints}

{outputSchema}

## CRITICAL FORMATTING RULES

**SPEECH TEXT:** Absolutely plain text for text-to-speech. NO formatting.
- WRONG: "The cost is \\$8" or "3 × 8"
- CORRECT: "The cost is 8 dollars" or "3 times 8 equals 24"

**DISPLAY CONTENT:** Markdown allowed. For currency, use backslash-escaped dollar sign: \\$
- WRONG: $8 (unescaped $ triggers LaTeX mode)
- CORRECT: \\$8, \\$24, \\$47 (backslash prevents LaTeX interpretation)

Use these in display content:
- Currency: \\$8 (backslash + dollar sign)
- Multiplication: × (the actual symbol)
- Division: ÷
- Bold for answers: **\\$47**

## Context

**Step-by-Step Solution:**
{{stepByStepSolution}}

**Correct Answer:** {{correctAnswer}}

**Bar Model Image Path:** {{hintImagePath}}

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
Previous Action: {{previousAction}}

**Next Question Context:**
{{nextQuestionContext}}

## Decision Matrix

1. **Check previous action first:**
   - If previousAction was GIVE_SOLUTION: Action = NEW_PROBLEM (student reviewed solution, move on to next problem)

2. **Evaluate** the student's answer against the correct answer and **Decide** the next pedagogical action:
   - If answer is correct: NEW_PROBLEM
   - If incorrect and hintsGiven < 3: GIVE_HINT
   - If incorrect and hintsGiven >= 3: GIVE_SOLUTION

## Hint Generation (3-Hint Progressive Structure)

**Hint 1 - Strategic Nudge (NO bar model yet):**
- Guide student to identify what the problem is asking
- Ask Socratic questions: "What do we know? What do we need to find?"
- hintImage: null

**Hint 2 - Show Bar Model:**
- Reveal the bar model diagram to help visualize
- Say: "Let me show you a bar model to help visualize this problem..."
- Point to what each bar represents
- hintImage: "{{hintImagePath}}" (MUST include)

**Hint 3 - Specific Direction (keep bar model):**
- Very specific guidance with the bar model still visible
- Point to exact calculations needed
- hintImage: "{{hintImagePath}}" (MUST include)

## Solution Presentation (GIVE_SOLUTION)

When giving the full solution:
1. ALWAYS include hintImage with the bar model path
2. Present each step clearly - use \\$ for currency in display
3. Show calculations: "Step 1: Find the cost of the pen = 3 × \\$8 = \\$24"
4. End with the answer: "**Answer: \\$47**"

Example solution display format:
\`\`\`
**Step 1:** Find the cost of the pen
The pen costs 3 times as much as the notebook (\\$8).
Cost of pen = 3 × \\$8 = \\$24

**Step 2:** Find the total spent
Total = \\$8 + \\$24 = \\$32

**Step 3:** Find money at first
Money at first = Total spent + Money left
Money at first = \\$32 + \\$15 = **\\$47**
\`\`\`

Example speech for solution: "Let me walk you through the solution. First, we find the cost of the pen. The pen costs 3 times as much as 8 dollars, which is 24 dollars..."

## Transition Speech (NEW_PROBLEM)

**If NOT the last question:**
- Brief acknowledgment of their answer
- Smooth transition to next problem

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
        key: 'hintImagePath',
        type: 'string',
        required: false,
        description: 'Path to bar model SVG image'
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
      },
      {
        key: 'nextQuestionContext',
        type: 'string',
        required: false,
        description: 'Context about the next question for transitions'
      },
      {
        key: 'previousAction',
        type: 'string',
        required: false,
        description: 'Previous evaluator action (GIVE_HINT, GIVE_SOLUTION, or none)'
      }
    ]
  });
}

/**
 * Build word problems evaluator prompt
 */
export function buildWordProblemsEvaluatorPrompt(context: {
  stepByStepSolution: Array<{ stepNumber: number; text: string }>;
  correctAnswer: string | number;
  currentProblem: string;
  studentAnswer: string;
  currentSection: string;
  sectionProgress: string;
  hintsGiven: number;
  attemptsMade: number;
  hintImagePath?: string;
  previousAction?: string;  // Previous evaluator action (GIVE_HINT, GIVE_SOLUTION, or none)
  nextQuestion?: {
    questionId: string;
    problemStatement: {
      display: string;
      speech: string;
    };
  };
  isLastQuestionInSection: boolean;
}): string {
  const template = createWordProblemsEvaluatorTemplate();

  // Format solution steps for prompt
  const formattedSolution = context.stepByStepSolution
    .map(step => `Step ${step.stepNumber}: ${step.text}`)
    .join('\n');

  // Format next question context
  let nextQuestionContext = '';
  if (context.nextQuestion) {
    const questionPreview = typeof context.nextQuestion.problemStatement === 'string'
      ? context.nextQuestion.problemStatement
      : context.nextQuestion.problemStatement.display;
    nextQuestionContext = `Next Question Preview: ${questionPreview}\n`;
    nextQuestionContext += `Is Last Question in Section: ${context.isLastQuestionInSection ? 'YES' : 'NO'}`;
  } else {
    nextQuestionContext = 'No next question available (section may be complete)';
  }

  const variables = new Map<string, any>([
    ['role', PRE_GENERATED_WORD_PROBLEMS_EVALUATOR.role],
    ['responsibilities', formatList('Responsibilities', PRE_GENERATED_WORD_PROBLEMS_EVALUATOR.responsibilities)],
    ['capabilities', formatCapabilities(PRE_GENERATED_WORD_PROBLEMS_EVALUATOR.capabilities!)],
    ['constraints', formatList('Constraints', PRE_GENERATED_WORD_PROBLEMS_EVALUATOR.constraints!)],
    ['outputSchema', JSON.stringify(PRE_GENERATED_WORD_PROBLEMS_EVALUATOR.outputSchema, null, 2)],
    ['stepByStepSolution', formattedSolution],
    ['correctAnswer', context.correctAnswer.toString()],
    ['hintImagePath', context.hintImagePath || 'none'],
    ['currentProblem', context.currentProblem],
    ['studentAnswer', context.studentAnswer],
    ['currentSection', context.currentSection],
    ['sectionProgress', context.sectionProgress],
    ['hintsGiven', context.hintsGiven.toString()],
    ['attemptsMade', context.attemptsMade.toString()],
    ['previousAction', context.previousAction || 'none'],
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
