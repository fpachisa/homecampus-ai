/**
 * Topic ID Structure and Utilities
 *
 * Naming Convention: {grade}-{subject}-{topic}-{subtopic}
 *
 * Grade Codes:
 * - p1, p2, p3, p4, p5, p6 (Primary 1-6)
 * - s1, s2, s3, s4 (Secondary 1-4)
 * - jc1, jc2 (Junior College 1-2)
 *
 * Subject Codes:
 * - math, science, english, chinese, tamil, malay
 *
 * Topic Examples:
 * - fractions, decimals, geometry, algebra, statistics
 *
 * Subtopic Examples:
 * - adding-same-denominator, dividing-whole-numbers, linear-equations
 */

export interface TopicIdComponents {
  grade: string;
  subject: string;
  topic: string;
  subtopic: string;
}

export class TopicIdUtils {
  /**
   * Parse a topic ID into its components
   * @param topicId - The topic ID to parse (e.g., "p6-math-fractions-dividing-whole-numbers")
   * @returns TopicIdComponents or null if invalid format
   */
  static parseTopicId(topicId: string): TopicIdComponents | null {
    const parts = topicId.split('-');
    if (parts.length < 4) {
      return null;
    }

    return {
      grade: parts[0],
      subject: parts[1],
      topic: parts[2],
      subtopic: parts.slice(3).join('-') // Handle multi-word subtopics
    };
  }

  /**
   * Build a topic ID from components
   * @param grade - Grade code (e.g., "p6", "s1")
   * @param subject - Subject code (e.g., "math", "science")
   * @param topic - Topic (e.g., "fractions", "algebra")
   * @param subtopic - Subtopic (e.g., "dividing-whole-numbers")
   * @returns Formatted topic ID
   */
  static buildTopicId(grade: string, subject: string, topic: string, subtopic: string): string {
    return `${grade}-${subject}-${topic}-${subtopic}`;
  }

  /**
   * Validate topic ID format
   * @param topicId - Topic ID to validate
   * @returns True if valid format
   */
  static isValidTopicId(topicId: string): boolean {
    const components = this.parseTopicId(topicId);
    return components !== null;
  }

  /**
   * Get a human-readable description from topic ID
   * @param topicId - Topic ID to describe
   * @returns Human-readable description
   */
  static getTopicDescription(topicId: string): string {
    const components = this.parseTopicId(topicId);
    if (!components) {
      return "Invalid topic ID";
    }

    const gradeMap: Record<string, string> = {
      p1: "Primary 1", p2: "Primary 2", p3: "Primary 3",
      p4: "Primary 4", p5: "Primary 5", p6: "Primary 6",
      s1: "Secondary 1", s2: "Secondary 2", s3: "Secondary 3", s4: "Secondary 4",
      jc1: "Junior College 1", jc2: "Junior College 2"
    };

    const grade = gradeMap[components.grade] || components.grade.toUpperCase();
    const subject = components.subject.charAt(0).toUpperCase() + components.subject.slice(1);
    const topic = components.topic.charAt(0).toUpperCase() + components.topic.slice(1);
    const subtopic = components.subtopic.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    return `${grade} ${subject} - ${topic}: ${subtopic}`;
  }
}

// Pre-defined topic ID constants for commonly used topics
export const TOPIC_IDS = {
  P6_MATH_FRACTIONS_DIVIDING_WHOLE_NUMBERS: 'p6-math-fractions-dividing-whole-numbers',
  P6_MATH_FRACTIONS_WHOLE_NUMBER_DIVIDING_FRACTIONS: 'p6-math-fractions-whole-number-dividing-fractions',
  P6_MATH_FRACTIONS_FRACTION_DIVIDING_FRACTION: 'p6-math-fractions-fraction-dividing-fraction',
  P6_MATH_FRACTIONS_WORD_PROBLEMS: 'p6-math-fractions-word-problems',
  P6_MATH_FRACTIONS_ADDING_SAME_DENOMINATOR: 'p6-math-fractions-adding-same-denominator',
  P6_MATH_DECIMALS_MULTIPLICATION: 'p6-math-decimals-multiplication',
  S1_MATH_ALGEBRA_LINEAR_EQUATIONS: 's1-math-algebra-linear-equations'
} as const;