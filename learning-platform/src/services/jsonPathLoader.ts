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
            const nodes = this.convertQuestionsToNodes(questions, category);

            return nodes;

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

    private convertQuestionsToNodes(questions: ProcessedQuestion[], category: string): PathNode[] {
        const nodes: PathNode[] = [];
        const parts = category.split('-');
        const topicId = parts[1];
        const paperPart = parts.slice(2).join('-');
        const isPaper2 = paperPart.toLowerCase().includes('paper2') || paperPart.toLowerCase().includes('p2');
        const paperShort = isPaper2 ? 'p2' : 'p1';

        questions.forEach((q, index) => {
            const preWrittenQuestions: PreWrittenQuestion[] = [];

            if (q.parts && q.parts.length > 0) {
                q.parts.forEach((part, partIndex) => {
                    // Construct a unique ID
                    const uniqueId = `${q.questionId}-${part.partId}`;

                    // Combine stem and part text (only add stem to first part)
                    let problemText = '';
                    if (partIndex === 0 && q.stem) {
                        problemText += q.stem + '\n\n';
                    }
                    problemText += part.questionText;

                    // Format solution steps
                    const stepByStepGuideline = part.solution.stepByStep.map(step =>
                        `**${step.explanation}**: ${step.working} _${step.reasoning}_`
                    );

                    preWrittenQuestions.push({
                        id: uniqueId,
                        questionGroup: q.questionId,
                        problemText: problemText,
                        avatarIntro: partIndex === 0 ? `Let's solve Question ${q.questionNumber}.` : undefined,
                        diagramSvg: q.diagram?.diagramPath || undefined,
                        finalAnswer: part.solution.finalAnswer,
                        stepByStepGuideline: stepByStepGuideline,
                        // Add table support if needed, matching oLevelPathLoader
                        questionTable: undefined // Add logic to extract table if available in ProcessedQuestion
                    });
                });
            }

            // Create a node for this question
            nodes.push({
                id: `olevel-${topicId.toLowerCase()}-${paperShort}-node${index + 1}`,
                nodeNumber: index + 1,
                title: q.title || `Question ${q.questionNumber}`,
                layer: 'examPractice',
                problemsRequired: preWrittenQuestions.length,
                prerequisites: isPaper2 && index > 0 ? [`olevel-${topicId.toLowerCase()}-${paperShort}-node${index}`] : [],
                descriptor: {
                    aiGeneratedQuestions: false,
                    difficulty: 'medium',
                    mathTool: undefined,
                    preWrittenQuestions: preWrittenQuestions,
                    problemDescription: [`O-Level ${topicId.toUpperCase()} - ${q.title || 'Question ' + q.questionNumber}`],
                    contexts: ['exam']
                }
            });
        });

        return nodes;
    }
}

export const jsonPathLoader = new JsonPathLoader();
