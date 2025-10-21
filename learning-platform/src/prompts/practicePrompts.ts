/**
 * Practice Mode AI Prompts
 *
 * Prompt templates for AI-based problem generation, evaluation,
 * hints, and solutions in path-based practice mode.
 *
 * Enhanced with Socratic content (learning objectives, formulas, visual tools)
 */

import type { PathNode, RelatedQuestionContext } from '../types/practice';
import { parseJSON } from '../services/utils/responseParser';
import { getFilteredTools } from '../components/math-tools/mathToolsRegistry';
import { FORMATTING_DECISION_TREE } from '../prompt-library';
/**
 * Generate practice problems based on node descriptor
 */
export const generatePracticeProblemsPrompt = (
  node: PathNode,
  count: number
): string => {
  const { descriptor } = node;

  // Helper to normalize tool names (kebab-case to camelCase)
  const normalizeToolName = (name: string): string => {
    return name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
  };

  // Get the required math tool for this node
  // Support both mathTool (new) and extraMathTool (deprecated) for backward compatibility
  const requiredTool = descriptor.mathTool || descriptor.extraMathTool;

  // Normalize and get tool documentation
  const toolName = requiredTool ? normalizeToolName(requiredTool) : null;
  const filteredMathTools = toolName ? getFilteredTools([toolName]) : {};
  const hasTools = toolName && Object.keys(filteredMathTools).length > 0;

  // Add tool context if specified
  const toolContext = toolName ? `

**REQUIRED VISUALIZATION:**
This node requires the "${toolName}" visualization tool.
Please refer to the VISUAL TOOLS DOCUMENTATION below and use this tool for ALL problems in this node.
` : '';

  return `You are a math problem generator for a learning platform. Generate ${count} practice problems for students.

**LESSON CONTEXT:**
Title: ${node.title}
Difficulty: ${descriptor.difficulty}
Problems Needed: ${count}

**This describes what kind of problems to generate. Follow this and this ONLY to generate problems. Do NOT deviate from this.**
${descriptor.problemDescription.map((p, i) => `${i + 1}. ${p}`).join('\n\n')}

**CONTEXTS TO USE:**
${descriptor.contexts.length > 0 ? descriptor.contexts.join(', ') : 'Any appropriate context'}
${toolContext}
**VISUAL TOOLS AVAILABLE:**
${toolName ? `You MUST include the "${toolName}" visualization for each problem to help students understand the problem setup.` : 'No specific visualization tool required for this node.'}

**VISUAL TOOLS DOCUMENTATION:**
${hasTools ? JSON.stringify(filteredMathTools, null, 2) : 'No tools available'}

**INSTRUCTIONS:**
1. Generate ${count} NEW problems that:
   - Follow the guidance provided in problem descriptions above
   - Use varied contexts to keep problems interesting
   - Include appropriate units in problem statements and answers
   - If rounding is needed, then always ask for 3 significant figures in the problem statement

2. ${toolName ? `Include the "${toolName}" mathTool visualization for EVERY problem` : 'Include a mathTool visualization only if helpful'}
   - Set parameters to match the specific problem values
   - Include a brief caption describing what the diagram shows

3. Ensure all problems are solvable with the concepts from the lesson


**CRITICAL: Return ONLY valid JSON in this exact format:**
{
  "problems": [
    {
      "problemText": "The full problem statement as a string",
      "correctAnswer": "The final answer as a string, with units if applicable",
      "context": "The context/theme used for this problem",
      "mathTool": {
        "toolName": "rightTriangle",
        "parameters": {
          "angle": 35,
          "angleLabel": "θ",
          "hypotenuse": "10m",
          "opposite": "x",
          "adjacent": "",
          "highlightSide": "opposite",
          "showAngleMark": true,
          "showRightAngle": true,
          "showSideTypeLabels": false
        },
        "caption": "Right triangle showing the ladder problem setup"
      }
    }
  ]
}

Generate the JSON now:`;
};



/**
 * Enhanced evaluation with progressive hints based on attempt history
 * Provides avatar speech and detailed hints that remain visible
 * Optional: Include context from related multi-part questions
 */
export const evaluatePracticeAnswerWithHistoryPrompt = (
  problemText: string,
  correctAnswer: string,
  studentAnswer: string,
  attemptNumber: number,
  previousAttempts: Array<{ answer: string; hint: string }>,
  relatedQuestionsContext?: RelatedQuestionContext[],
  isLastProblem?: boolean,
  solutionSteps?: string[]
): string => {
  // Build related questions context for multi-part exam questions
  const relatedContext = relatedQuestionsContext && relatedQuestionsContext.length > 0 ?
    `**RELATED PARTS (Multi-part exam question):**
This is part of a multi-part question. Here's what the student answered for previous parts:

${relatedQuestionsContext.map((q, i) =>
  `Part ${i + 1}: ${q.problemText}
Student's answer: ${q.studentAnswer}
Result: ${q.isCorrect ? '✓ Correct' : '✗ Incorrect'}`
).join('\n\n')}

**IMPORTANT:** When evaluating the current answer, consider:
- Whether the student's approach is consistent with their previous answers
- If their answer builds correctly on previous results
- Whether they may have made an error in an earlier part that affects this answer

` : '';

  // Build solution steps context (if available)
  const solutionContext = solutionSteps && solutionSteps.length > 0 ?
    `**INTENDED SOLUTION METHOD:**
The problem should be solved using the following approach:
${solutionSteps.map((step, i) => `${i + 1}. ${step}`).join('\n')}

**IMPORTANT:** Base your hints on THIS solution method. Do not suggest alternative methods.
` : '';

  // Build history context
  const historyContext = previousAttempts.length > 0 ?
    `**PREVIOUS ATTEMPTS:**
${previousAttempts.map((attempt, i) =>
  `Attempt ${i + 1}: Student answered "${attempt.answer}"
Hint given: "${attempt.hint}"`
).join('\n\n')}

**CURRENT ATTEMPT:** Attempt ${attemptNumber}
` : '';

  // Define hint guidance based on attempt number
  const hintGuidance = {
    1: {
      level: 'GENTLE NUDGE',
      instructions: 'Ask what information they have and what they need to find. Point them to think about the problem structure.',
      avatarSpeech: 'Appropriate short speech to guide the student in the right direction based on the answer they provided. DO NOT assume they said/identified/mentioned something they did not.'
    },
    2: {
      level: 'SPECIFIC GUIDANCE',
      instructions: 'Point to the specific formula, concept, or approach they should use. Mention key relationships.',
      avatarSpeech: 'Appropriate 1-2 sentences speech to guide the student further based on the answer they provided. DO NOT assume they said/identified/mentioned something they did not.'
    },
    3: {
      level: 'DETAILED SETUP',
      instructions: 'Show the equation setup or first steps. Explain the approach clearly but don\'t solve completely.',
      avatarSpeech: 'Appropriate 1-2 sentences speech to provide detailed guidance based on the answer they provided. DO NOT assume they said/identified/mentioned something they did not.'
    }
  };

  const guidance = hintGuidance[attemptNumber as keyof typeof hintGuidance] || hintGuidance[3];

  return `You are a supportive math tutor evaluating a student's answer and providing progressive guidance if required.

${relatedContext}
**PROBLEM:**
${problemText}

**CORRECT ANSWER:**
${correctAnswer}

${solutionContext}
${historyContext}

**STUDENT'S CURRENT ANSWER:**
${studentAnswer}

**EVALUATION INSTRUCTIONS:**
1. Determine if the answer is correct (accept equivalent forms)
2. If you think there the error is due to rounding, say so
3. If correct: Celebrate their success!
4. If incorrect (Attempt ${attemptNumber} of 3):
   - Provide ${guidance.level} level feedback
   - ${guidance.instructions}
   - Use student answer to tailor your hint and Do NOT claim or assume the student said/identified/mentioned something they didn't 
   - Build on previous hints if any were given
   - Be encouraging and supportive

**IMPORTANT GUIDELINES:**
- avatarSpeech: Brief encouraging sentence (1-2 sentences max) that the avatar will speak. CRITICAL: DO NOT include any markdown or special characters. Use plain text only.
- For attempt ${attemptNumber}: ${guidance.instructions}
- Never give away the answer directly
- Consider their previous attempts and adapt your guidance

**FORMATTING RULES:**
${FORMATTING_DECISION_TREE}

**Critical Rules:**
1. Unicode First: Use θ, °, ², × instead of LaTeX for simple symbols
2. LaTeX for complex: Use $\\frac{x+1}{2x-3}$ for fractions and complex expressions
3. JSON escaping: ONE backslash in JSON (e.g., {"content": "$\\frac{1}{2}$"})
4. Speech text: Plain text only - no markdown, no Unicode symbols, no LaTeX
5. Display content: Unicode first, then LaTeX when needed, markdown for structure

**CRITICAL: Return ONLY valid JSON. Use the correct format based on whether the answer is correct or incorrect:**


{
  "isCorrect": true,
  "avatarSpeech": "${isLastProblem ? 'Celebration message acknowledging lesson completion (e.g., Excellent work! You have completed this lesson!)' : 'Celebration message with transition (e.g., Perfect! Let us move on to the next one.)'} ",
  "explanation": "Brief explanation of why the answer is correct and the approach used (2-3 sentences)"
}

**IF ANSWER IS INCORRECT:**
Example with proper LaTeX formatting:
{
  "isCorrect": false,
  "avatarSpeech": "${guidance.avatarSpeech}",
  "hint": "Detailed hint that helps the student (2-4 sentences). Follow the critical latex formatting rules above.",
  "hintLevel": ${attemptNumber}
}

Generate the JSON now:`;
};

/**
 * Generate step-by-step solution
 */
export const generatePracticeSolutionPrompt = (
  problemText: string,
  correctAnswer: string
): string => {
  return `You are providing a complete step-by-step solution to a math problem.

**PROBLEM:**
${problemText}

**CORRECT ANSWER:**
${correctAnswer}

**INSTRUCTIONS:**
1. Break down the solution into clear, numbered steps
2. Show all mathematical working
3. Explain the reasoning at each step
4. Use proper mathematical notation
5. End with the final answer clearly stated
6. Keep each step concise (1-2 sentences)
7. Include 3-5 steps total

**LATEX FORMATTING (CRITICAL):**
- Wrap ALL mathematical expressions in $...$ delimiters
- Examples: $\sin(\theta)$, $\frac{3}{5}$, $x = 10$, $38^\circ$, $26\sqrt{3}$ cm²
- Use single backslashes: \sin, \frac, \theta, \sqrt{} (NOT \\sin, \\frac, \\theta)
- Variables, formulas, numbers with units: ALL need $ delimiters
- Common commands: \sin, \cos, \tan, \frac{num}{denom}, \sqrt{value}, ^\circ
- WRONG: 26\tsqrt3 or 26sqrt{3} (missing backslash or wrong syntax)

**CRITICAL: Return ONLY valid JSON in this exact format:**
Example with proper LaTeX formatting:
{
  "steps": [
    "Step 1: We need to find the missing side using the given angle $\theta = 35^\circ$ and hypotenuse $h = 10$ m",
    "Step 2: Use the sine ratio: $\sin(\theta) = \frac{\text{Opposite}}{\text{Hypotenuse}}$",
    "Step 3: Substitute values: $\sin(35^\circ) = \frac{x}{10}$",
    "Step 4: Solve for $x$: $x = 10 \times \sin(35^\circ) = 5.74$ m",
    "Step 5: Final answer: $x = 5.74$ m (3 significant figures)"
  ]
}

Generate the JSON now:`;
};

/**
 * Solve pre-written exam problem to get correct answer and solution steps
 * Used when loading pre-written questions with empty correctAnswer
 */
export const solvePreWrittenProblemPrompt = (
  problemText: string,
  previousPartsContext?: Array<{ problemText: string; answer: string }>
): string => {
  const previousContext = previousPartsContext && previousPartsContext.length > 0 ? `
**PREVIOUS PARTS (from same exam question):**
These parts have been solved. Use their answers if this part depends on them:

${previousPartsContext.map((part, i) => `
Part ${i + 1}: ${part.problemText}
Answer: ${part.answer}
`).join('\n')}

` : '';

  return `You are solving an exam problem to determine the correct answer and solution steps.

${previousContext}
**CURRENT PROBLEM:**
${problemText}

**INSTRUCTIONS:**
1. Solve this problem step-by-step showing all working
2. Use exact calculations - DO NOT round intermediate values
3. Only round the final answer to 3 significant figures if needed
4. If this problem depends on previous parts, use those answers in your calculation
5. Each step should be clear and explain the reasoning

**LATEX FORMATTING (CRITICAL):**
- Wrap ALL mathematical expressions in $...$ delimiters
- Examples: $\sin(\theta)$, $\frac{3}{5}$, $x = 10$, $38^\circ$, $26\sqrt{3}$ cm²
- Use single backslashes: \sin, \frac, \theta, \sqrt{} (NOT \\sin, \\frac, \\theta)
- Variables, formulas, angles, numbers with units: ALL need $ delimiters
- Common commands: \sin, \cos, \tan, \frac{num}{denom}, \sqrt{value}, ^\circ
- WRONG: 26\tsqrt3 or 26sqrt{3} (missing backslash or wrong syntax)

**CRITICAL: Return ONLY valid JSON in this exact format:**
Example with proper LaTeX formatting:
{
  "correctAnswer": "285 m",
  "steps": [
    "Step 1: We need to find distance $PR$. Given: $SR = 285$ m, $\angle SPR = 70^\circ$, $\angle PSR = 47^\circ$",
    "Step 2: Use the sine rule: $\frac{PR}{\sin(\angle PSR)} = \frac{SR}{\sin(\angle SPR)}$",
    "Step 3: Substitute: $\frac{PR}{\sin(47^\circ)} = \frac{285}{\sin(70^\circ)}$",
    "Step 4: Solve: $PR = \frac{285 \times \sin(47^\circ)}{\sin(70^\circ)} = 221.7$ m",
    "Step 5: Final answer: $PR = 222$ m (3 significant figures)"
  ]
}

**IMPORTANT:**
- correctAnswer must be a concise string (e.g., "320 m", "67.5°", "1250 m²")
- steps array should have 3-5 clear, numbered steps with proper LaTeX formatting
- Show mathematical working with $...$ delimiters around all math expressions

Generate the JSON now:`;
};

/**
 * Helper to extract JSON from AI response
 * Uses the centralized parseJSON utility that handles LaTeX escape sequences
 */
export const extractJSON = (response: string): any => {
  return parseJSON(response);
};
