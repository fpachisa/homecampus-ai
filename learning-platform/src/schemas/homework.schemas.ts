/**
 * Zod Schemas for Homework Helper
 * Used with Gemini's structured output to guarantee valid JSON responses
 */

import { z } from 'zod';

/**
 * Schema for problem analysis response
 * Matches ProblemAnalysis type from src/types/homework.ts
 * Note: Uses only Gemini-supported JSON Schema subset
 */
export const ProblemAnalysisSchema = z.object({
  extractedText: z.string().describe("Complete problem statement as written in the image"),
  subject: z.string().describe("The subject - should be 'mathematics'"),
  topic: z.string().describe("Main math topic (e.g., trigonometry, algebra, geometry)"),
  subTopic: z.string().describe("Specific sub-topic (e.g., angle of elevation, quadratic equations)"),
  difficulty: z.enum(["basic", "intermediate", "advanced"]).describe("Problem difficulty level"),
  problemType: z.enum(["word-problem", "calculation", "proof", "multi-step", "multi-part"]).describe("Type of problem"),
  hasDiagram: z.boolean().describe("Whether the problem includes a diagram"),
  hasGraph: z.boolean().describe("Whether the problem includes a graph"),
  hasTable: z.boolean().describe("Whether the problem includes a table"),
  numberOfParts: z.number().int().min(1).describe("Number of parts in the problem (for multi-part problems)"),
  keyMathConcepts: z.array(z.string()).describe("List of key mathematical concepts (e.g., SOH-CAH-TOA, angle calculation)"),
  formulasNeeded: z.array(z.string()).describe("List of formulas needed (e.g., sin(θ) = opposite/hypotenuse)"),
  visualElements: z.array(z.string()).describe("Description of visual elements (e.g., right triangle, labeled sides)"),
  analysisConfidence: z.enum(["high", "medium", "low"]).describe("Confidence level of the analysis"),
  clarificationNeeded: z.array(z.string()).describe("List of any unclear parts or empty array if clear")
}).strict();

/**
 * Schema for grade appropriateness check
 * Matches GradeAppropriatenessCheck type (minus studentGrade which is added separately)
 */
export const GradeCheckSchema = z.object({
  isAppropriate: z.boolean().describe("Whether the problem is appropriate for the student's grade level"),
  reason: z.string().describe("Clear explanation of why the problem is or isn't appropriate"),
  requiredGradeLevel: z.number().int().min(1).max(12).describe("Minimum grade level required for this problem"),
  conceptsCovered: z.array(z.string()).describe("Concepts that the student should already know at their grade level"),
  conceptsMissing: z.array(z.string()).describe("Concepts not yet covered at the student's grade level"),
  recommendation: z.enum(["proceed", "too-advanced", "too-basic"]).describe("Recommendation for how to proceed"),
  suggestionMessage: z.string().describe("Friendly message to show the student")
});

/**
 * Schema for homework helper Socratic response
 * Matches HomeworkHelperResponse type from src/types/homework.ts
 */
export const HomeworkHelperResponseSchema = z.object({
  speech: z.object({
    text: z.string().describe("Plain text for TTS - no markdown, no LaTeX, no hyphens in acronyms"),
    emotion: z.enum(["encouraging", "celebratory", "supportive", "neutral", "curious"]).describe("Emotion for voice context")
  }).describe("Speech content for text-to-speech"),

  display: z.object({
    content: z.string().describe("Markdown and LaTeX formatted content for visual display"),
    mathTool: z.object({
      type: z.string().describe("Math tool type (e.g., rightTriangle, generalTriangle)"),
      parameters: z.any().describe("Tool-specific parameters as an object")
    }).optional().describe("Optional math visualization tool")
  }).describe("Display content with rich formatting"),

  conceptsAddressed: z.array(z.string()).describe("List of concepts discussed in this response"),
  teachingAction: z.enum([
    "question",
    "hint",
    "clarification",
    "celebration",
    "redirection",
    "encouragement"
  ]).describe("Type of teaching action being taken"),

  nextFocus: z.string().optional().describe("What to focus on in the next interaction"),
  sessionComplete: z.boolean().describe("Whether the tutoring session is complete"),
  completionReason: z.enum(["understood", "student-needs-break", "stuck-despite-help"]).optional().describe("Reason for session completion if sessionComplete is true")
});

// Export type inference helpers (optional - for TypeScript type checking)
export type ProblemAnalysisSchemaType = z.infer<typeof ProblemAnalysisSchema>;
export type GradeCheckSchemaType = z.infer<typeof GradeCheckSchema>;
export type HomeworkHelperResponseSchemaType = z.infer<typeof HomeworkHelperResponseSchema>;
