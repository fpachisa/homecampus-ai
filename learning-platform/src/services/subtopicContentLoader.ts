/**
 * Subtopic Content Loader
 *
 * Loads rich learning content from Socratic topic files to enhance
 * practice problem generation with learning objectives, formulas, and visual tools.
 */

import { S3_MATH_TRIGONOMETRY_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-trigonometry';
import { S3_MATH_CIRCLE_GEOMETRY } from '../prompt-library/subjects/mathematics/secondary/s3-circle-geometry';
import { S3_MATH_QUADRATIC_EQUATIONS } from '../prompt-library/subjects/mathematics/secondary/s3-quadratic-equations';
import { S3_MATH_EXPONENTIAL_LOGARITHMS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-exponential-logarithms';
import { S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-sets-venn-diagrams';
import { S3_MATH_EXPONENTS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-exponents';
import { S3_MATH_SURDS_RADICALS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-surds-radicals';
import { S3_MATH_STATISTICS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-statistics';
import { S3_MATH_RELATIONS_FUNCTIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-relations-functions';
import { S3_MATH_COORDINATE_GEOMETRY_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-coordinate-geometry';
import { DIFFERENTIAL_CALCULUS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s4-differential-calculus';
import { S4_MATH_INTEGRATION_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s4-integration';
import { S4_MATH_PROBABILITY_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s4-probability';
import { S4_MATH_ADVANCED_TRIGONOMETRY_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s4-advanced-trigonometry';
import { S4_VECTORS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s4-vectors';
import { S1_MATH_FACTORS_MULTIPLES_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-factors-multiples';
import { S1_MATH_REAL_NUMBERS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-real-numbers';
import { S1_MATH_APPROXIMATION_ESTIMATION_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-approximation-estimation';
import { S1_MATH_BASIC_ALGEBRA_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-basic-algebra';
import { S1_SIMPLE_LINEAR_EQUATIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-simple-linear-equations';
import { S1_MATH_ANGLES_PARALLEL_LINES_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-angles-parallel-lines';
import { S1_MATH_RATIO_RATE_SPEED_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-ratio-rate-speed';
import { S1_PERCENTAGE_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-percentage';
import { S1_LINEAR_FUNCTIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-linear-functions-graphs';
import { S1_MATH_PERIMETER_AREA_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-perimeter-area';
import { S1_MATH_DATA_HANDLING_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-data-handling';
import { LINEAR_GRAPHS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s2-linear-graphs';
import { LINEAR_INEQUALITIES_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s2-linear-inequalities';
import { S2_MATH_EXPANSION_FACTORISATION_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s2-expansion-factorisation';

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
      // S1 Math topics
      ...S1_MATH_FACTORS_MULTIPLES_SUBTOPICS,
      ...S1_MATH_REAL_NUMBERS_SUBTOPICS,
      ...S1_MATH_APPROXIMATION_ESTIMATION_SUBTOPICS,
      ...S1_MATH_BASIC_ALGEBRA_SUBTOPICS,
      ...S1_SIMPLE_LINEAR_EQUATIONS_SUBTOPICS,
      ...S1_MATH_ANGLES_PARALLEL_LINES_SUBTOPICS,
      ...S1_MATH_RATIO_RATE_SPEED_SUBTOPICS,
      ...S1_PERCENTAGE_SUBTOPICS,
      ...S1_LINEAR_FUNCTIONS_SUBTOPICS,
      ...S1_MATH_PERIMETER_AREA_SUBTOPICS,
      ...S1_MATH_DATA_HANDLING_SUBTOPICS,
      // S2 Math topics
      ...LINEAR_GRAPHS_SUBTOPICS,
      ...LINEAR_INEQUALITIES_SUBTOPICS,
      ...S2_MATH_EXPANSION_FACTORISATION_SUBTOPICS,
      // S3 Math topics
      ...S3_MATH_TRIGONOMETRY_SUBTOPICS,
      ...S3_MATH_CIRCLE_GEOMETRY,
      ...S3_MATH_QUADRATIC_EQUATIONS,
      ...S3_MATH_EXPONENTIAL_LOGARITHMS_SUBTOPICS,
      ...S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS,
      ...S3_MATH_EXPONENTS_SUBTOPICS,
      ...S3_MATH_SURDS_RADICALS_SUBTOPICS,
      ...S3_MATH_STATISTICS_SUBTOPICS,
      ...S3_MATH_RELATIONS_FUNCTIONS_SUBTOPICS,
      ...S3_MATH_COORDINATE_GEOMETRY_SUBTOPICS,
      // S4 Math topics
      ...DIFFERENTIAL_CALCULUS_SUBTOPICS,
      ...S4_MATH_INTEGRATION_SUBTOPICS,
      ...S4_MATH_PROBABILITY_SUBTOPICS,
      ...S4_MATH_ADVANCED_TRIGONOMETRY_SUBTOPICS,
      ...S4_VECTORS_SUBTOPICS,
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
