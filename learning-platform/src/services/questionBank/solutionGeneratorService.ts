/**
 * Solution Generator Service
 * Uses Gemini AI to generate step-by-step solutions for exam questions
 */

import { GeminiProvider } from '../providers/GeminiProvider';
import { safeParseJSON } from '../utils/responseParser';

// ============================================
// TYPE DEFINITIONS
// ============================================

export interface SolutionStep {
  step: number;
  explanation: string;
  working: string;
  reasoning: string;
}

export interface PartSolution {
  partId: string;
  solution: {
    finalAnswer: string;
    stepByStep: SolutionStep[];
  };
}

export interface QuestionSolution {
  questionId: string;
  parts: PartSolution[];
}

interface Question {
  questionNumber: number;
  stem: string;
  parts: {
    partId: string;
    questionText: string;
    marks: number;
    answerType: string;
  }[];
  totalMarks: number;
}

interface TopicInfo {
  topicId: string;
  topic: string;
  content: string[];
}

// ============================================
// PROMPT BUILDER
// ============================================

function buildSolutionPrompt(question: Question, topicInfo: TopicInfo, questionId: string): string {
  // Format question parts
  const partsText = question.parts.map(part =>
    `(${part.partId}) ${part.questionText} [${part.marks} mark${part.marks > 1 ? 's' : ''}]`
  ).join('\n');

  // Format topic content
  const topicContentText = topicInfo.content.map((item, idx) =>
    `${idx + 1}. ${item}`
  ).join('\n');

  return `You are an experienced O-level Mathematics tutor. Generate complete, pedagogically sound solutions for this question.

TOPIC: ${topicInfo.topicId} - ${topicInfo.topic}

TOPIC CONTENT (what students should know):
${topicContentText}

QUESTION:
${question.stem ? question.stem + '\n\n' : ''}${partsText}

TASK:
Generate step-by-step solutions for each part of this question. If not able to solve the question with the given infomation, clearly state that. DO NOT make up information.

REQUIREMENTS:
1. Provide final answer.

2. Break solution into clear, logical steps (typically 2-4 steps per part)

3. Each step must have THREE components:
   - explanation: One sentence describing what we're doing (plain English)
   - working: The mathematical work with proper LaTeX formatting
   - reasoning: One sentence explaining WHY we're doing this

4. For multi-part questions, parts can reference previous parts (e.g., "From part (a), we know...")

5. Use pedagogically sound explanations that help students understand the concept, not just get the answer

CRITICAL JSON FORMATTING RULES:

1. LaTeX commands: Use DOUBLE backslash in JSON output
   CORRECT:   {"working": "$\\\\frac{2}{5}$"}
   INCORRECT: {"working": "$\\frac{2}{5}$"}

   Why? In JSON, \\f, \\t, \\r are escape sequences. You MUST use \\\\ to represent one backslash.

   Examples of CORRECT JSON output:
   {"working": "$\\\\frac{AC}{BC} = \\\\frac{2x}{5x} = \\\\frac{2}{5}$"}
   {"explanation": "Use $\\\\theta$ to represent the angle"}
   {"working": "$\\\\tan(x) = \\\\frac{\\\\text{opposite}}{\\\\text{adjacent}}$"}

2. Dollar amounts: Escape with DOUBLE backslash
   CORRECT:   {"explanation": "The cost is \\\\$1,500"}
   INCORRECT: {"explanation": "The cost is $1,500"}

3. Degrees: Use DOUBLE backslash
   CORRECT:   {"working": "$\\\\angle A = 45^{\\\\circ}$"}
   INCORRECT: {"working": "$\\angle A = 45^{\\circ}$"}

4. Newlines: Use \\\\n for line breaks in multi-line equations
   CORRECT:   {"working": "$AC = 2x = 24$ cm\\\\n$\\\\therefore x = 12$ cm"}

REMEMBER: Every backslash in your JSON output must be written as \\\\ (double backslash)

OUTPUT FORMAT (JSON only, no markdown, no code blocks, no other text):
{
  "questionId": "${questionId}",
  "parts": [
    {
      "partId": "a",
      "solution": {
        "finalAnswer": "exact answer here",
        "stepByStep": [
          {
            "step": 1,
            "explanation": "one sentence describing what we're doing",
            "working": "mathematical work with LaTeX",
            "reasoning": "one sentence explaining why"
          }
        ]
      }
    }
  ]
}`;
}

// ============================================
// SERVICE CLASS
// ============================================

export class SolutionGeneratorService {
  private provider: GeminiProvider;

  constructor(apiKey: string) {
    this.provider = new GeminiProvider({
      apiKey,
      model: 'gemini-3-flash', // Use Gemini 3 Flash as specified
      temperature: 0.3 // Lower temperature for more consistent, accurate solutions
    });
  }

  /**
   * Generate solutions for a single question
   */
  async generateSolution(
    question: Question,
    topicInfo: TopicInfo,
    questionId: string
  ): Promise<QuestionSolution> {
    try {
      console.log(`Generating solution for question ${questionId}...`);

      // Build prompt
      const prompt = buildSolutionPrompt(question, topicInfo, questionId);

      // Call AI
      const response = await this.provider.generateContent(prompt);

      // Save raw response for debugging (optional)
      if (process.env.DEBUG_SOLUTIONS === 'true') {
        console.log('=== RAW AI RESPONSE ===');
        console.log(response);
        console.log('=== END RAW RESPONSE ===');
      }

      // Parse JSON response (safeParseJSON returns T directly or throws)
      let solutionData: QuestionSolution;

      try {
        solutionData = safeParseJSON<QuestionSolution>(response);
      } catch (parseError) {
        // Save raw response for debugging
        console.error('Failed to parse AI response. Saving raw response...');
        const fs = await import('fs');
        const path = await import('path');
        const debugDir = path.join(process.cwd(), 'public/curriculum-content/o-level/debug');
        if (!fs.existsSync(debugDir)) {
          fs.mkdirSync(debugDir, { recursive: true });
        }
        const debugFile = path.join(debugDir, `${questionId}-raw-response.txt`);
        fs.writeFileSync(debugFile, response);
        console.error(`Raw response saved to: ${debugFile}`);
        throw parseError;
      }

      // Validate structure
      if (!solutionData.questionId || !solutionData.parts || !Array.isArray(solutionData.parts)) {
        throw new Error('Invalid solution structure returned by AI');
      }

      // Validate all parts are present
      // Handle single-part questions with null partId
      if (question.parts.length === 1 && question.parts[0].partId === null) {
        // For single-part questions with null partId, accept any single part response
        if (solutionData.parts.length !== 1) {
          throw new Error(`Expected 1 part for single-part question, got ${solutionData.parts.length}`);
        }
      } else {
        // For multi-part questions, validate partId matching
        const expectedParts = question.parts.map(p => p.partId);
        const returnedParts = solutionData.parts.map(p => p.partId);
        const missingParts = expectedParts.filter(id => !returnedParts.includes(id));

        if (missingParts.length > 0) {
          throw new Error(`Missing solutions for parts: ${missingParts.join(', ')}`);
        }
      }

      console.log(`✓ Solution generated successfully for ${questionId}`);
      return solutionData;

    } catch (error) {
      console.error(`Error generating solution for ${questionId}:`, error);
      throw error;
    }
  }

  /**
   * Helper method for direct prompt generation
   */
  async generateContent(prompt: string): Promise<string> {
    return this.provider.generateContent(prompt);
  }
}
