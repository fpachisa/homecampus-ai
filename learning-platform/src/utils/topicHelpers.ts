/**
 * Topic Helper Utilities
 *
 * Helper functions for working with topics and subtopics across paths
 */

import { S3_MATH_TRIGONOMETRY } from '../prompt-library/subjects/mathematics/secondary/s3-trigonometry';
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

/**
 * Get the subtopics configuration for a given path/category
 */
export function getSubtopicsForPath(pathId: string): Record<string, any> | null {
  switch (pathId) {
    case 's3-math-trigonometry':
      return S3_MATH_TRIGONOMETRY;
    case 's3-math-circle-geometry':
      return S3_MATH_CIRCLE_GEOMETRY;
    case 's3-math-quadratic-equations':
      return S3_MATH_QUADRATIC_EQUATIONS;
    case 's3-math-exponential-logarithms':
      return S3_MATH_EXPONENTIAL_LOGARITHMS_SUBTOPICS;
    case 's3-math-sets-venn-diagrams':
      return S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS;
    case 's3-math-exponents':
      return S3_MATH_EXPONENTS_SUBTOPICS;
    case 's3-math-surds-radicals':
      return S3_MATH_SURDS_RADICALS_SUBTOPICS;
    case 's3-math-statistics':
      return S3_MATH_STATISTICS_SUBTOPICS;
    case 's3-math-relations-functions':
      return S3_MATH_RELATIONS_FUNCTIONS_SUBTOPICS;
    case 's3-math-coordinate-geometry':
      return S3_MATH_COORDINATE_GEOMETRY_SUBTOPICS;
    case 's4-math-differential-calculus':
      return DIFFERENTIAL_CALCULUS_SUBTOPICS;
    case 's4-math-integration':
      return S4_MATH_INTEGRATION_SUBTOPICS;
    case 's4-math-probability':
      return S4_MATH_PROBABILITY_SUBTOPICS;
    default:
      return null;
  }
}

/**
 * Get the first subtopic ID for a given path
 * Useful for auto-selecting a default subtopic when entering a path
 */
export function getFirstSubtopicId(pathId: string): string | null {
  const subtopics = getSubtopicsForPath(pathId);
  if (!subtopics) return null;

  const firstKey = Object.keys(subtopics)[0];
  return firstKey || null;
}

/**
 * Get all subtopic IDs for a given path
 */
export function getAllSubtopicIds(pathId: string): string[] {
  const subtopics = getSubtopicsForPath(pathId);
  if (!subtopics) return [];

  return Object.keys(subtopics);
}

/**
 * Check if a subtopic ID belongs to a given path
 */
export function isSubtopicInPath(pathId: string, subtopicId: string): boolean {
  const subtopicIds = getAllSubtopicIds(pathId);
  return subtopicIds.includes(subtopicId);
}
