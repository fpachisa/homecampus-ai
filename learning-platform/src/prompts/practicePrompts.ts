/**
 * Practice Mode AI Prompts
 *
 * Prompt templates for AI-based problem generation, evaluation,
 * hints, and solutions in path-based practice mode.
 *
 * Enhanced with Socratic content (learning objectives, formulas, visual tools)
 */

import type { PathNode } from '../types/practice';
import type { SubtopicContent } from '../services/subtopicContentLoader';
import { S3_MATH_TRIGONOMETRY_CONFIG } from './topics/S3-Math-Trigonometry';
import { parseJSON } from '../services/utils/responseParser';

/**
 * Generate practice problems based on node descriptor + Socratic subtopic content
 */
export const generatePracticeProblemsPrompt = (
  node: PathNode,
  count: number,
  subtopicContents: SubtopicContent[]
): string => {
  const { descriptor } = node;

  // Build subtopic context sections
  const subtopicSections = descriptor.subtopics.map((st, index) => {
    const content = subtopicContents[index];
    if (!content) return '';

    const weight = Math.round(st.weight * 100);

    return `
**SUBTOPIC ${index + 1}: ${st.id} (${weight}% weight)**
Display Name: ${content.displayName}
Focus: ${content.topicName}

Key Formulas:
${content.relevantFormulas.length > 0 ? content.relevantFormulas.map(f => `- ${f}`).join('\n') : '- (No formulas specified)'}

Available Visual Tools: ${content.availableTools.join(', ')}

---
`;
  }).join('\n');

  // Collect all unique available tools
  const allTools = new Set<string>();
  subtopicContents.forEach(content => {
    content.availableTools.forEach(tool => allTools.add(tool));
  });

  // Filter MATH_TOOLS to only include tools available for this practice session
  // This significantly reduces prompt size (e.g., from 6 tools to 1-2 tools)
  const filteredMathTools = {
    description: S3_MATH_TRIGONOMETRY_CONFIG.MATH_TOOLS.description,
    availableTools: {} as any,
    usageGuidelines: S3_MATH_TRIGONOMETRY_CONFIG.MATH_TOOLS.usageGuidelines
  };

  // Only include tools that are in allTools set
  allTools.forEach(toolName => {
    const toolDef = S3_MATH_TRIGONOMETRY_CONFIG.MATH_TOOLS.availableTools[toolName];
    if (toolDef) {
      filteredMathTools.availableTools[toolName] = toolDef;
    }
  });

  return `You are a math problem generator for a learning platform. Generate ${count} practice problems for students.

**LESSON CONTEXT:**
Title: ${node.title}
Difficulty: ${descriptor.difficulty}
Problems Needed: ${count}

${subtopicSections}

**This describes what kind of problems to generate. Follow this and this ONLY to generate problems. Do NOT deviate from this.**
${descriptor.problemDescription.map((p, i) => `${i + 1}. ${p}`).join('\n\n')}

**CONTEXTS TO USE:**
${descriptor.contexts.join(', ')}

**VISUAL TOOLS AVAILABLE:**
You can include visual diagrams to help students understand each problem.
Available tools: ${Array.from(allTools).join(', ')}

**VISUAL TOOLS DOCUMENTATION:**
${JSON.stringify(filteredMathTools, null, 2)}

**INSTRUCTIONS:**
1. Generate ${count} NEW problems that:

   - Follow the guidance provided in sample problem descriptions to generate the problems
   - Weight: Generate problems according to subtopic weights (${descriptor.subtopics.map(st => `${Math.round(st.weight * 100)}%`).join(', ')})

2. Include a mathTool visualization if it helps illustrate the problem
   - Choose a tool from the availableTools list for that subtopic
   - Use the tool that best illustrates the problem setup
   - Set parameters to match the specific problem values
   - Include a brief caption describing what the diagram shows

3. Ensure all problems are solvable with the concepts from the lesson
4. Include units in answers where appropriate (meters, degrees, etc.)
5. Each problem should require 2-3 calculation steps to solve

**CRITICAL: Return ONLY valid JSON in this exact format:**
{
  "problems": [
    {
      "problemText": "The full problem statement as a string",
      "correctAnswer": "The final answer as a string, with units if applicable",
      "context": "The context/theme used for this problem",
      "subtopicId": "The subtopic ID this problem focuses on",
      "mathTool": {
        "toolName": "rightTriangle",
        "parameters": {
          "angle": 35,
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
 */
export const evaluatePracticeAnswerWithHistoryPrompt = (
  problemText: string,
  correctAnswer: string,
  studentAnswer: string,
  attemptNumber: number,
  previousAttempts: Array<{ answer: string; hint: string }>
): string => {
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
      avatarSpeech: 'Let\'s look at this together. What information do we have?'
    },
    2: {
      level: 'SPECIFIC GUIDANCE',
      instructions: 'Point to the specific formula, concept, or approach they should use. Mention key relationships.',
      avatarSpeech: 'Think about which formula or method applies here.'
    },
    3: {
      level: 'DETAILED SETUP',
      instructions: 'Show the equation setup or first steps. Explain the approach clearly but don\'t solve completely.',
      avatarSpeech: 'Let me show you how to set this up.'
    }
  };

  const guidance = hintGuidance[attemptNumber as keyof typeof hintGuidance] || hintGuidance[3];

  return `You are a supportive math tutor evaluating a student's answer and providing progressive guidance.

**PROBLEM:**
${problemText}

**CORRECT ANSWER:**
${correctAnswer}

${historyContext}

**STUDENT'S CURRENT ANSWER:**
${studentAnswer}

**EVALUATION INSTRUCTIONS:**
1. Determine if the answer is correct (accept equivalent forms)
2. If correct: Celebrate their success!
3. If incorrect (Attempt ${attemptNumber} of 3):
   - Provide ${guidance.level} level feedback
   - ${guidance.instructions}
   - Build on previous hints if any were given
   - Be encouraging and supportive

**IMPORTANT GUIDELINES:**
- avatarSpeech: Brief encouraging sentence (1-2 sentences max) that the avatar will speak, and describe the next action. CRITICAL: DO NOT include any markdown or special characters. Use plain text only.
- hint: Detailed written feedback that will be displayed on screen permanently
- For attempt ${attemptNumber}: ${guidance.instructions}
- Never give away the answer directly
- Consider their previous attempts and adapt your guidance

**CRITICAL: Return ONLY valid JSON in this exact format:**
{
  "isCorrect": true or false,
  "avatarSpeech": "${guidance.avatarSpeech}",
  "hint": "Detailed hint or feedback that helps the student (2-4 sentences)",
  "hintLevel": ${attemptNumber}
}

Generate the JSON now:`;
};

/**
 * Generate progressive hints for a problem
 */
export const generatePracticeHintPrompt = (
  problemText: string,
  hintLevel: number
): string => {
  const hintGuidance = {
    1: 'Give a gentle nudge - ask what information they have and what they need to find',
    2: 'Point to the specific trigonometric concept or ratio they should use',
    3: 'Show the equation setup but don\'t solve it completely'
  };

  return `You are providing a hint for a math problem. This is hint level ${hintLevel} of 3.

**PROBLEM:**
${problemText}

**HINT LEVEL ${hintLevel} GUIDANCE:**
${hintGuidance[hintLevel as keyof typeof hintGuidance] || hintGuidance[3]}

**INSTRUCTIONS:**
1. Provide a helpful hint appropriate for level ${hintLevel}
2. Don't give away the answer
3. Be encouraging and positive
4. Use simple, clear language
5. For level 3, you can show the equation setup

**CRITICAL: Return ONLY valid JSON in this exact format:**
{
  "hint": "The hint text (1-3 sentences)"
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

**CRITICAL: Return ONLY valid JSON in this exact format:**
{
  "steps": [
    "Step 1: Clear explanation of what we identify/know",
    "Step 2: Setting up the equation or choosing the method",
    "Step 3: Mathematical working with numbers",
    "Step 4: Final calculation",
    "Step 5: Answer with units (if applicable)"
  ]
}

Generate the JSON now:`;
};

/**
 * Helper to extract JSON from AI response
 * Uses the centralized parseJSON utility that handles LaTeX escape sequences
 */
export const extractJSON = (response: string): any => {
  return parseJSON(response);
};
