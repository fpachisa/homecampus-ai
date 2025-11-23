/**
 * JSON Path Loader
 *
 * Loads unified path configurations from processed JSON exam papers.
 * Dynamically converts exam paper JSONs into the PathNode structure required by the practice mode.
 * This eliminates the need for manual YAML creation for O-Level exam papers.
 */

import type { PathNode, PreWrittenQuestion } from '../types/practice';

interface ProcessedQuestionPart {
    partId: string;
    questionText: string;
    marks: number;
    answerType: string;
    solution: {
        finalAnswer: string;
        stepByStep: Array<{
            step: number;
            explanation: string;
            working: string;
            reasoning: string;
        }>;
    };
}

interface ProcessedQuestion {
    questionNumber: number;
    questionId: string;
    topicID: string;
    stem: string;
    hasDiagram: boolean;
    diagramDescription?: string;
    parts: ProcessedQuestionPart[];
    totalMarks: number;
    paper: string;
    title: string;
    diagram?: {
        type: string;
        description: string;
        notes: string;
        diagramPath: string;
    };
}

interface ProcessedExamPaper {
    topicId: string;
    questions: {
        [key: string]: ProcessedQuestion[]; // e.g., "Paper 1": [...]
    };
}

class JsonPathLoader {
    private basePathUrl = '/curriculum-content/o-level/exam-papers/processed';

    /**
     * Try to load a path from a JSON exam paper
     * @param category e.g., "olevel-g3-paper1"
     */
    async loadUnifiedPath(category: string): Promise<PathNode[] | null> {
        // 1. Parse category to identify if it's an O-Level exam paper request
        // Expected format: olevel-{topicId}-{paper} (e.g., olevel-g3-paper1)
        const parts = category.split('-');
        if (parts[0] !== 'olevel' || parts.length < 3) {
            return null;
        }

        const topicId = parts[1]; // e.g., "g3"
        const paperPart = parts.slice(2).join('-'); // e.g., "paper1" or "paper-1"

        // Map "paper1" to "Paper 1" key in JSON
        const paperKey = this.formatPaperKey(paperPart);

        try {
            const jsonPath = `${this.basePathUrl}/${topicId}.json`;
            console.log(`📂 Loading JSON path config: ${jsonPath} for ${paperKey}`);

            const response = await fetch(jsonPath);
            if (!response.ok) {
                console.warn(`JSON file not found: ${jsonPath}`);
                return null;
            }

            const data = await response.json() as ProcessedExamPaper;

            if (!data.questions || !data.questions[paperKey]) {
                console.warn(`Paper ${paperKey} not found in ${jsonPath}`);
                return null;
            }

            // 2. Convert JSON questions to PathNode structure
            const questions = data.questions[paperKey];
            const node = this.convertQuestionsToNode(questions, category);

            return [node];

        } catch (error) {
            console.error(`Error loading JSON path for ${category}:`, error);
            return null;
        }
    }

    private formatPaperKey(paperPart: string): string {
        // "paper1" -> "Paper 1"
        // "paper2" -> "Paper 2"
        const match = paperPart.match(/paper(\d+)/i);
        if (match) {
            return `Paper ${match[1]}`;
        }
        // Fallback: capitalize first letter
        return paperPart.charAt(0).toUpperCase() + paperPart.slice(1);
    }

    private convertQuestionsToNode(questions: ProcessedQuestion[], category: string): PathNode {
        const preWrittenQuestions: PreWrittenQuestion[] = [];

        questions.forEach(q => {
            // For each part, create a PreWrittenQuestion
            // Or if it's a single question without parts, create one

            if (q.parts && q.parts.length > 0) {
                q.parts.forEach((part, index) => {
                    // Construct a unique ID
                    const uniqueId = `${q.questionId}-${part.partId}`;

                    // Combine stem and part text
                    const problemText = `${q.stem}\n\n${part.questionText}`;

                    // Format solution steps
                    const stepByStepGuideline = part.solution.stepByStep.map(step =>
                        `${step.explanation} ${step.working}`
                    );

                    preWrittenQuestions.push({
                        id: uniqueId,
                        questionGroup: q.questionId,
                        problemText: problemText,
                        avatarIntro: index === 0 ? `Let's solve Question ${q.questionNumber}.` : undefined,
                        diagramSvg: q.diagram?.diagramPath || undefined,
                        finalAnswer: part.solution.finalAnswer,
                        stepByStepGuideline: stepByStepGuideline
                    });
                });
            }
        });

        return {
            id: `${category}-node-1`,
            nodeNumber: 1,
            title: `${category.toUpperCase().replace(/-/g, ' ')} Practice`,
            layer: 'examPractice',
            problemsRequired: preWrittenQuestions.length, // Require all for now, or cap it
            prerequisites: [],
            descriptor: {
                aiGeneratedQuestions: false,
                difficulty: 'medium', // Default
                mathTool: undefined,
                preWrittenQuestions: preWrittenQuestions,
                // Required fields for type safety (even if unused for pre-written)
                problemDescription: [],
                contexts: []
            }
        };
    }
}

export const jsonPathLoader = new JsonPathLoader();
