/**
 * Subtopic Content Loader
 *
 * Loads rich learning content from Socratic topic files to enhance
 * practice problem generation with learning objectives, formulas, and visual tools.
 */

import { S3_MATH_TRIGONOMETRY_SUBTOPICS } from "../prompt-library/subjects/mathematics/secondary/s3-trigonometry';
import { S3_MATH_CIRCLE_GEOMETRY } from "../prompt-library/subjects/mathematics/secondary/s3-circle-geometry';
import { S3_MATH_QUADRATIC_EQUATIONS } from "../prompt-library/subjects/mathematics/secondary/s3-quadratic-equations';

export interface SubtopicContent {
  displayName: string;
  topicName: string;
  learningObjectives: string[];
  relevantFormulas: string[];
  availableTools: string[];
  sampleProblems?: string[];
  difficultyRange?: string;
}

class SubtopicContentLoader {
  private topicConfigs: Record<string, any>;

  constructor() {
    // Initialize with all topic configurations
    this.topicConfigs = {
      // S3 Math topics
      ...S3_MATH_TRIGONOMETRY_SUBTOPICS,
      ...S3_MATH_CIRCLE_GEOMETRY,
      ...S3_MATH_QUADRATIC_EQUATIONS,
      // Future topics will be added here
    };
  }

  /**
   * Get subtopic content by ID
   * Aggregates learning objectives, formulas, and tools from all sections within the subtopic
   */
  getSubtopicContent(subtopicId: string): SubtopicContent | null {
    const subtopic = this.topicConfigs[subtopicId];

    if (!subtopic) {
      console.warn(`Subtopic not found: ${subtopicId}`);
      return null;
    }

    // Extract basic info
    const displayName = subtopic.displayName || 'Unknown Topic';
    const topicName = subtopic.topicName || '';

    // Aggregate from all sections
    const learningObjectives: string[] = [];
    const relevantFormulas: string[] = [];
    const availableTools: Set<string> = new Set();
    const sampleProblems: string[] = [];
    const difficulties: string[] = [];

    if (subtopic.progressionStructure?.sections) {
      subtopic.progressionStructure.sections.forEach((section: any) => {
        // Collect learning objectives
        if (section.learningObjectives) {
          learningObjectives.push(...section.learningObjectives);
        }

        // Collect formulas
        if (section.relevantFormulas) {
          relevantFormulas.push(...section.relevantFormulas);
        }

        // Collect available tools (unique)
        if (section.availableTools) {
          section.availableTools.forEach((tool: string) => availableTools.add(tool));
        }

        // Collect sample problems if available
        if (section.sampleProblems) {
          section.sampleProblems.forEach((sp: any) => {
            if (typeof sp === 'string') {
              sampleProblems.push(sp);
            } else if (sp.problem) {
              sampleProblems.push(sp.problem);
            }
          });
        }

        // Collect difficulty levels
        if (section.difficulty) {
          difficulties.push(section.difficulty);
        }
      });
    }

    // Determine difficulty range
    const difficultyRange = difficulties.length > 0
      ? difficulties[0] === difficulties[difficulties.length - 1]
        ? difficulties[0]
        : `${difficulties[0]}-to-${difficulties[difficulties.length - 1]}`
      : undefined;

    return {
      displayName,
      topicName,
      learningObjectives,
      relevantFormulas,
      availableTools: Array.from(availableTools),
      sampleProblems: sampleProblems.length > 0 ? sampleProblems : undefined,
      difficultyRange
    };
  }

  /**
   * Get content for multiple subtopics (used when node has weighted subtopics)
   */
  getMultipleSubtopicContents(subtopicIds: string[]): SubtopicContent[] {
    return subtopicIds
      .map(id => this.getSubtopicContent(id))
      .filter((content): content is SubtopicContent => content !== null);
  }

  /**
   * Check if a subtopic ID exists
   */
  hasSubtopic(subtopicId: string): boolean {
    return subtopicId in this.topicConfigs;
  }
}

export const subtopicContentLoader = new SubtopicContentLoader();
