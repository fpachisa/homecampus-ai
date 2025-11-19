/**
 * O-Level Path Loader
 *
 * Loads O-Level exam questions directly from JSON files
 * Transforms them into PathNode structure for the practice system
 *
 * Strategy:
 * - Paper 1: Group 5 questions per node (faster practice)
 * - Paper 2: 1 question per node (deeper focus)
 * - Multi-part questions stay together with shared questionGroup
 */

import type { PathNode, PreWrittenQuestion } from '../types/practice';

// Topic ID to topic name mapping
const TOPIC_NAMES: Record<string, string> = {
  'n1': 'Numbers & Operations',
  'n2': 'Ratio & Proportion',
  'n3': 'Percentage',
  'n4': 'Rate & Speed',
  'n5': 'Algebraic Expressions',
  'n6': 'Functions & Graphs',
  'n7': 'Equations & Inequalities',
  'n8': 'Set Language & Notation',
  'n9': 'Matrices',
  'g1': 'Angles, Triangles & Polygons',
  'g2': 'Congruence & Similarity',
  'g3': 'Circle Properties',
  'g4': 'Pythagoras & Trigonometry',
  'g5': 'Mensuration',
  'g6': 'Coordinate Geometry',
  'g7': 'Vectors',
  's1': 'Data Analysis',
  's2': 'Probability'
};

interface OLevelQuestion {
  questionNumber: number;
  questionId: string;
  topicID: string;
  title?: string;
  stem?: string;
  hasDiagram?: boolean;
  diagramDescription?: string;
  diagram?: {
    type: string;
    description?: string;
    notes?: string;
    diagramPath?: string;
    toolName?: string;
    parameters?: Record<string, any>;
    tableData?: {
      title?: string;
      zones?: Record<string, Record<string, any>>;
      constraints?: Record<string, string>;
      bookSpecs?: Record<string, string>;
      [key: string]: any;
    };
  };
  parts: Array<{
    partId: string | null;
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
  }>;
  totalMarks: number;
  paper: string;
}

interface OLevelTopicData {
  topicId: string;
  questions: {
    'Paper 1': OLevelQuestion[];
    'Paper 2': OLevelQuestion[];
  };
}

class OLevelPathLoader {
  private basePathUrl = '/curriculum-content/o-level/exam-papers/processed';
  private cache: Map<string, PathNode[]> = new Map();

  /**
   * Load O-Level path for a specific topic and paper
   */
  async loadOLevelPath(topicId: string, paper: 'paper1' | 'paper2'): Promise<PathNode[]> {
    const cacheKey = `${topicId}-${paper}`;

    if (this.cache.has(cacheKey)) {
      console.log(`✅ Using cached O-Level nodes for ${topicId} ${paper}`);
      return this.cache.get(cacheKey)!;
    }

    try {
      const jsonPath = `${this.basePathUrl}/${topicId.toLowerCase()}.json`;
      console.log(`📂 Loading O-Level questions: ${jsonPath}`);

      const response = await fetch(jsonPath);

      if (!response.ok) {
        throw new Error(`Failed to load ${jsonPath}: ${response.status} ${response.statusText}`);
      }

      const data: OLevelTopicData = await response.json();

      // Get questions for the specified paper
      const paperKey = paper === 'paper1' ? 'Paper 1' : 'Paper 2';
      const questions = data.questions[paperKey] || [];

      if (questions.length === 0) {
        console.warn(`⚠️ No questions found for ${topicId} ${paperKey}`);
        return [];
      }

      // Transform to PathNode structure
      const nodes = this.transformToPathNodes(topicId, paper, questions);

      console.log(`✅ Loaded ${nodes.length} nodes from ${jsonPath} (${questions.length} questions)`);

      this.cache.set(cacheKey, nodes);
      return nodes;

    } catch (error) {
      console.error(`❌ Failed to load O-Level path for ${topicId}/${paper}:`, error);
      throw error;
    }
  }

  /**
   * Transform O-Level questions to PathNode structure
   * Paper 1: Group 5 questions per node
   * Paper 2: 1 question per node
   */
  private transformToPathNodes(
    topicId: string,
    paper: 'paper1' | 'paper2',
    questions: OLevelQuestion[]
  ): PathNode[] {
    const nodes: PathNode[] = [];

    if (paper === 'paper2') {
      // Paper 2: One question per node (sequential prerequisites)
      questions.forEach((question, index) => {
        const preWrittenQuestions = this.transformQuestionToParts(question);
        const topicName = TOPIC_NAMES[topicId.toLowerCase()] || topicId.toUpperCase();

        nodes.push({
          id: `olevel-${topicId.toLowerCase()}-p2-node${index + 1}`,
          nodeNumber: index + 1,
          title: question.title || `Question ${question.questionNumber}`,
          problemsRequired: preWrittenQuestions.length,
          layer: 'examPractice',
          prerequisites: index > 0 ? [`olevel-${topicId.toLowerCase()}-p2-node${index}`] : [],
          descriptor: {
            problemDescription: [`O-Level ${topicName} - ${question.title || 'Question ' + question.questionNumber}`],
            contexts: ['exam'],
            aiGeneratedQuestions: false,
            preWrittenQuestions
          }
        });
      });
    } else {
      // Paper 1: Group 5 questions per node
      const questionsPerNode = 5;
      let nodeNumber = 1;

      for (let i = 0; i < questions.length; i += questionsPerNode) {
        const nodeQuestions = questions.slice(i, i + questionsPerNode);
        const allPreWritten = nodeQuestions.flatMap(q => this.transformQuestionToParts(q));
        const topicName = TOPIC_NAMES[topicId.toLowerCase()] || topicId.toUpperCase();

        nodes.push({
          id: `olevel-${topicId.toLowerCase()}-p1-node${nodeNumber}`,
          nodeNumber,
          title: `Paper 1: ${topicName} (Set ${nodeNumber})`,
          problemsRequired: allPreWritten.length,
          layer: 'examPractice',
          prerequisites: [], // Paper 1 nodes have no prerequisites
          descriptor: {
            problemDescription: [`O-Level ${topicName} - Paper 1 Practice Set ${nodeNumber}`],
            contexts: ['exam'],
            aiGeneratedQuestions: false,
            preWrittenQuestions: allPreWritten
          }
        });

        nodeNumber++;
      }
    }

    return nodes;
  }

  /**
   * Transform a single question into PreWrittenQuestion parts
   * Multi-part questions are kept together with shared questionGroup
   */
  private transformQuestionToParts(question: OLevelQuestion): PreWrittenQuestion[] {
    const parts: PreWrittenQuestion[] = [];

    question.parts.forEach((part, partIndex) => {
      // Build problem text (stem + part text)
      let problemText = '';

      // Add stem if present (only for first part to avoid repetition)
      if (partIndex === 0 && question.stem) {
        problemText += question.stem + '\n\n';
      }

      // Add part label and text
      if (part.partId) {
        problemText += `(${part.partId}) `;
      }
      problemText += part.questionText;

      // Format step-by-step guidelines
      const stepByStepGuideline = part.solution.stepByStep.map(step =>
        this.formatStepAsGuideline(step)
      );

      const preWrittenQuestion: PreWrittenQuestion = {
        id: part.partId
          ? `${question.questionId}-${part.partId}`
          : question.questionId,
        questionGroup: question.questionId,
        problemText: problemText.trim(),
        finalAnswer: part.solution.finalAnswer,
        stepByStepGuideline
      };

      // Add diagram if present (only for first part)
      if (partIndex === 0 && question.diagram) {
        if (question.diagram.type === 'mathTool' && question.diagram.toolName) {
          // Interactive math tool
          preWrittenQuestion.mathTool = {
            toolName: question.diagram.toolName,
            parameters: question.diagram.parameters || {}
          };
        } else if (question.diagram.type === 'table' && question.diagram.tableData) {
          // Table data
          preWrittenQuestion.tableData = question.diagram.tableData;
        } else if (question.diagram.diagramPath) {
          // Static SVG diagram
          preWrittenQuestion.diagramSvg = question.diagram.diagramPath;
        }
      }

      // Add avatar intro for first part only
      if (partIndex === 0) {
        //preWrittenQuestion.avatarIntro = `Let's work on this ${question.title || 'question'} together. ${question.hasDiagram ? 'Take a look at the diagram first.' : 'Read the question carefully.'}`;
      }

      parts.push(preWrittenQuestion);
    });

    return parts;
  }

  /**
   * Format solution step as guideline string
   * Format: "**Explanation**: Working. _Reasoning._"
   */
  private formatStepAsGuideline(step: {
    step: number;
    explanation: string;
    working: string;
    reasoning: string;
  }): string {
    return `**${step.explanation}**: ${step.working} _${step.reasoning}_`;
  }

  /**
   * Get topic metadata (name, available papers)
   */
  async getTopicMetadata(topicId: string): Promise<{
    id: string;
    name: string;
    paper1Count: number;
    paper2Count: number;
  }> {
    try {
      const jsonPath = `${this.basePathUrl}/${topicId.toLowerCase()}.json`;
      const response = await fetch(jsonPath);

      if (!response.ok) {
        return {
          id: topicId,
          name: TOPIC_NAMES[topicId.toLowerCase()] || topicId.toUpperCase(),
          paper1Count: 0,
          paper2Count: 0
        };
      }

      const data: OLevelTopicData = await response.json();

      return {
        id: topicId,
        name: TOPIC_NAMES[topicId.toLowerCase()] || topicId.toUpperCase(),
        paper1Count: data.questions['Paper 1']?.length || 0,
        paper2Count: data.questions['Paper 2']?.length || 0
      };
    } catch (error) {
      console.error(`Failed to get metadata for ${topicId}:`, error);
      return {
        id: topicId,
        name: TOPIC_NAMES[topicId.toLowerCase()] || topicId.toUpperCase(),
        paper1Count: 0,
        paper2Count: 0
      };
    }
  }

  /**
   * Get all available topics
   */
  getAllTopicIds(): string[] {
    return Object.keys(TOPIC_NAMES);
  }

  /**
   * Clear cache (useful for development)
   */
  clearCache(): void {
    this.cache.clear();
  }
}

export const oLevelPathLoader = new OLevelPathLoader();
