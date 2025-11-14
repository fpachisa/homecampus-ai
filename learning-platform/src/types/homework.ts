/**
 * Types for Homework Helper feature
 * Handles uploaded problem solving with Socratic guidance
 */

export interface UploadedProblem {
  id: string;
  studentId: string;
  uploadedAt: string;
  imageUrl: string;
  imageData?: string; // Base64 for immediate use
  fileType: 'image/png' | 'image/jpeg' | 'application/pdf';
  status: 'analyzing' | 'ready' | 'in-progress' | 'completed' | 'error';
  analysis?: ProblemAnalysis;
  gradeCheck?: GradeAppropriatenessCheck;
}

export interface ProblemAnalysis {
  extractedText: string; // OCR/extracted problem statement
  subject: 'mathematics' | 'physics' | 'chemistry' | 'unknown';
  topic: string; // "trigonometry", "algebra", "geometry"
  subTopic?: string; // "angle of elevation", "quadratic equations"
  difficulty: 'basic' | 'intermediate' | 'advanced';

  // Problem characteristics
  problemType: 'word-problem' | 'calculation' | 'proof' | 'multi-step' | 'multi-part';
  hasDiagram: boolean;
  hasGraph: boolean;
  hasTable: boolean;
  numberOfParts: number; // For multi-part problems

  // Extracted elements
  keyMathConcepts: string[]; // ["SOH-CAH-TOA", "angle calculation"]
  formulasNeeded?: string[]; // ["sin(θ) = opposite/hypotenuse"]
  visualElements: string[]; // ["right triangle", "labeled sides"]

  // Confidence
  analysisConfidence: 'high' | 'medium' | 'low';
  clarificationNeeded?: string[]; // ["Image unclear at bottom", "Units not visible"]
}

export interface GradeAppropriatenessCheck {
  studentGrade: number; // 9, 10, 11, 12 etc
  isAppropriate: boolean;
  reason: string;

  // Detailed breakdown
  requiredGradeLevel: number; // Minimum grade for this problem
  conceptsCovered: string[]; // Concepts in student's curriculum
  conceptsMissing: string[]; // Concepts NOT yet covered

  recommendation: 'proceed' | 'too-advanced' | 'too-basic' | 'review-needed';
  suggestionMessage?: string; // Message to show student
}

export interface HomeworkSession {
  sessionId: string;
  problemId: string;
  studentId: string;
  startedAt: string;
  lastActivityAt: string;
  status: 'active' | 'completed' | 'abandoned';

  // Conversation state
  messages: HomeworkMessage[];

  // Progress tracking
  hintsGiven: number;
  questionsAsked: number;
  studentAttempts: number;
  understoodConcepts: string[]; // Concepts student demonstrated understanding
  strugglingConcepts: string[]; // Concepts needing more help

  // Completion
  completedAt?: string;
  finalOutcome?: 'solved-with-understanding' | 'solved-mechanically' | 'gave-up' | 'incomplete';
}

export interface HomeworkMessage {
  id: string;
  role: 'student' | 'tutor';
  timestamp: string;

  // Content
  text?: string; // Student's text response
  imageRef?: string; // Reference to problem image

  // Tutor response
  speech?: {
    text: string;
    emotion?: string;
  };
  display?: {
    content: string; // Markdown with LaTeX
    mathTool?: {
      type: string;
      parameters: Record<string, unknown>;
    };
  };

  // Metadata
  messageType?: 'answer-attempt' | 'question' | 'hint-request' | 'clarification';
  conceptsAddressed?: string[];
}

export interface HomeworkHelperContext {
  problem: UploadedProblem;
  analysis: ProblemAnalysis;
  studentGrade: number;
  conversationHistory: HomeworkMessage[];

  // Teaching state
  currentFocus?: string; // Which concept/step are we on
  hintsGiven: number;
  questionsAsked: number;
  studentDemonstrated: string[]; // What understanding they've shown
}

export interface HomeworkHelperResponse {
  speech: {
    text: string;
    emotion: 'encouraging' | 'celebratory' | 'supportive' | 'neutral' | 'curious';
  };
  display: {
    content: string;
    mathTool?: {
      type: string;
      parameters: Record<string, unknown>;
    };
  };

  // Internal tracking
  conceptsAddressed: string[];
  teachingAction: 'question' | 'hint' | 'clarification' | 'celebration' | 'redirection' | 'encouragement';
  nextFocus?: string; // What to focus on next

  // Session signals
  sessionComplete?: boolean;
  completionReason?: 'understood' | 'student-needs-break' | 'stuck-despite-help';
}
