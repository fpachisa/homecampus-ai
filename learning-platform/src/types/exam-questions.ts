/**
 * O-Level Exam Question Types and Schemas
 *
 * These schemas define the structure for extracted exam questions that serve as
 * "seed questions" for AI-generated practice questions.
 */

import { z } from 'zod';

/**
 * Schema for a single part of a multi-part question (e.g., Question 1(a), 1(b))
 */
export const ExamQuestionPartSchema = z.object({
  partId: z.string().describe("Part identifier, e.g., '1a', '1b', '2'"),
  questionText: z.string().describe("The question text with LaTeX notation using single backslash (e.g., $\\frac{1}{2}$)"),
  marks: z.number().describe("Marks allocated for this part"),
  answerType: z.enum(['numerical', 'algebraic', 'proof', 'drawing', 'mcq']).describe("Type of answer expected"),
  correctAnswer: z.string().optional().describe("The correct answer (if easily extractable)"),
  workingSolution: z.string().describe("Full worked solution with step-by-step explanation using LaTeX"),
});

/**
 * Schema for a complete exam question (may have multiple parts)
 */
export const ExamQuestionSchema = z.object({
  questionId: z.string().describe("Unique ID in format: YYYY_ExamType_School_Paper_QNumber (e.g., '2024_SA2_ACSI_P1_Q1')"),
  questionNumber: z.number().describe("Question number as shown in the exam paper"),

  // Source metadata
  source: z.object({
    paper: z.enum(['Paper1', 'Paper2']).describe("Which paper this question is from"),
  }),

  // Question content
  stem: z.string().optional().describe("Common context shared by all parts (if multi-part question)"),
  diagrams: z.array(z.object({
    imageUrl: z.string().describe("Relative path to saved diagram image"),
    caption: z.string().optional().describe("Caption or description of the diagram"),
    position: z.enum(['before', 'after', 'inline']).describe("Where the diagram appears relative to question text"),
  })).optional().describe("Diagrams or figures included in the question"),

  parts: z.array(ExamQuestionPartSchema).describe("Array of question parts (even if just one part)"),

  // Topic mapping
  topicMapping: z.object({
    primaryTopic: z.string().describe("Primary syllabus topic code (e.g., 'N5', 'G4', 'S1')"),
    secondaryTopics: z.array(z.string()).optional().describe("Additional related topics"),
  }),

  // Metadata
  estimatedTimeMinutes: z.number().describe("Estimated time to complete this question in minutes"),
  totalMarks: z.number().describe("Total marks for all parts combined"),

  // Quality control
  verified: z.boolean().default(false).describe("Whether this extraction has been manually verified"),
  extractionConfidence: z.number().min(0).max(1).describe("AI confidence in extraction accuracy (0-1)"),
});

/**
 * Schema for the complete question bank organized by topic
 */
export const QuestionBankSchema = z.object({
  version: z.string().describe("Version of the question bank schema"),
  lastUpdated: z.string().describe("ISO date string of last update"),
  topic: z.object({
    code: z.string().describe("Syllabus topic code (e.g., 'N5')"),
    name: z.string().describe("Topic name (e.g., 'Algebraic expressions and formulae')"),
  }),
  questions: z.array(ExamQuestionSchema),
  metadata: z.object({
    totalQuestions: z.number(),
    totalMarks: z.number(),
    averageTimeMinutes: z.number(),
    sources: z.array(z.string()).describe("List of exam papers these questions came from"),
  }),
});

/**
 * Schema for extracted questions from a single PDF (intermediate format before organizing by topic)
 */
export const ExtractedPaperSchema = z.object({
  examInfo: z.object({
    paper: z.enum(['Paper1', 'Paper2']),
    examIdentifier: z.string().describe("Unique identifier like '2024_SA2_ACSI_P1'"),
  }),
  questions: z.array(ExamQuestionSchema),
  extractionMetadata: z.object({
    extractedAt: z.string().describe("ISO date string of extraction"),
    averageConfidence: z.number(),
    questionsExtracted: z.number(),
    questionsWithDiagrams: z.number(),
  }),
});

// Type exports
export type ExamQuestionPart = z.infer<typeof ExamQuestionPartSchema>;
export type ExamQuestion = z.infer<typeof ExamQuestionSchema>;
export type QuestionBank = z.infer<typeof QuestionBankSchema>;
export type ExtractedPaper = z.infer<typeof ExtractedPaperSchema>;

/**
 * Helper function to generate a question ID
 */
export function generateQuestionId(
  year: number,
  examType: string,
  school: string,
  paper: 'Paper1' | 'Paper2',
  questionNumber: number
): string {
  return `${year}_${examType}_${school}_${paper}_Q${questionNumber}`;
}

/**
 * Helper function to validate LaTeX syntax (basic check)
 */
export function validateLatex(text: string): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Check for common LaTeX issues
  const dollarMatches = text.match(/\$/g);
  if (dollarMatches && dollarMatches.length % 2 !== 0) {
    errors.push('Unmatched $ delimiters');
  }

  // Check for double backslashes (should be single in JSON)
  if (text.includes('\\\\')) {
    errors.push('Double backslashes detected - should use single backslash in JSON');
  }

  // Check for common unescaped special characters in math mode
  const mathBlocks = text.match(/\$[^$]+\$/g) || [];
  mathBlocks.forEach((block) => {
    if (block.match(/(?<!\\)_(?![{0-9])/) && !block.match(/\\text/)) {
      errors.push('Unescaped underscore outside subscript context');
    }
  });

  return {
    valid: errors.length === 0,
    errors,
  };
}
