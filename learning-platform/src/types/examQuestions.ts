/**
 * Exam Questions Type Definitions
 * 
 * Types for O-Level exam questions with structured table support
 */

// ============================================
// TABLE TYPES
// ============================================

export type TableType =
    | "stem-and-leaf"
    | "comparison"
    | "data"
    | "matrix"
    | "generic";

export interface QuestionTable {
    type: TableType;
    headers: string[];
    rows: (string | number)[][];
    key?: string;       // Optional key/legend (e.g., "6|8 represents 68 marks")
    caption?: string;   // Optional caption/title
    notes?: string[];   // Optional footnotes or additional notes
}

// ============================================
// QUESTION STRUCTURE
// ============================================

export interface QuestionPart {
    partId: string;              // e.g., "a", "b", "c"
    questionText: string;
    marks: number;
    answerType: "numerical" | "algebraic" | "proof" | "text" | "drawing";
    table?: QuestionTable;       // NEW: Optional structured table for specific part
    solution: {
        finalAnswer: string;
        stepByStep: SolutionStep[];
    };
}

export interface SolutionStep {
    step: number;
    explanation: string;
    working: string;
    reasoning: string;
}

export interface ExamQuestion {
    questionNumber: number;
    questionId: string;           // e.g., "S1-canberra-2024-p1-q13"
    topicID: string;              // e.g., "S1", "N9"
    stem: string;                 // Question text/description
    table?: QuestionTable;        // NEW: Optional structured table
    hasDiagram: boolean;
    diagramDescription: string | null;
    parts: QuestionPart[];
    totalMarks: number;
    paper: string;                // "Paper 1" or "Paper 2"
    title: string;
}

export interface TopicQuestions {
    topicId: string;
    questions: {
        "Paper 1": ExamQuestion[];
        "Paper 2": ExamQuestion[];
    };
}

// ============================================
// UTILITY TYPES
// ============================================

export interface TableMigrationResult {
    questionId: string;
    originalStem: string;
    updatedStem: string;
    extractedTable: QuestionTable;
    success: boolean;
    error?: string;
}
