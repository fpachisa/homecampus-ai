import type { VisualizationContext, VisualizationId } from '../types/visualization';
import {
  getVisualization,
  getVisualizationConfig
} from './visualizationRegistry';

/**
 * Visualization Selector
 * Intelligently selects the best visualization based on problem context
 */

// Context keyword mappings
const CONTEXT_KEYWORDS: Record<VisualizationContext, string[]> = {
  'chocolate-bar': ['chocolate', 'bar', 'candy', 'sweet'],
  'pizza': ['pizza', 'pie', 'slice'],
  'cake': ['cake', 'dessert', 'pastry'],
  'ribbon': ['ribbon', 'tape', 'fabric', 'cloth'],
  'rope': ['rope', 'cord', 'string', 'cable'],
  'liquid': ['water', 'juice', 'milk', 'liquid', 'drink', 'cup', 'liter', 'litre'],
  'measurement': ['meter', 'metre', 'kilometer', 'centimeter', 'inch', 'foot', 'yard'],
  'abstract': ['fraction', 'number', 'divide', 'equal', 'part']
};

// Visualization ID mappings for contexts
const CONTEXT_TO_VISUALIZATION: Record<VisualizationContext, VisualizationId> = {
  'chocolate-bar': 'bar-division',
  'pizza': 'circular-division',
  'cake': 'circular-division',
  'ribbon': 'bar-division',
  'rope': 'bar-division',
  'liquid': 'bar-division',
  'measurement': 'bar-division',
  'abstract': 'bar-division'
};

/**
 * Extract context from problem text using keyword matching
 */
export function extractContextFromProblem(problemText: string): {
  context: VisualizationContext;
  confidence: number;
  keywords: string[];
} {
  const normalizedText = problemText.toLowerCase();
  const matchedContexts: Array<{
    context: VisualizationContext;
    matchCount: number;
    keywords: string[];
  }> = [];

  // Check each context for keyword matches
  for (const [context, keywords] of Object.entries(CONTEXT_KEYWORDS)) {
    const matchedKeywords = keywords.filter(keyword =>
      normalizedText.includes(keyword.toLowerCase())
    );

    if (matchedKeywords.length > 0) {
      matchedContexts.push({
        context: context as VisualizationContext,
        matchCount: matchedKeywords.length,
        keywords: matchedKeywords
      });
    }
  }

  // Sort by match count and prioritize specific contexts over abstract
  matchedContexts.sort((a, b) => {
    if (a.matchCount !== b.matchCount) {
      return b.matchCount - a.matchCount;
    }
    // Prefer non-abstract contexts
    if (a.context === 'abstract') return 1;
    if (b.context === 'abstract') return -1;
    return 0;
  });

  // Return best match or fallback to abstract
  if (matchedContexts.length > 0) {
    const bestMatch = matchedContexts[0];
    const confidence = Math.min(bestMatch.matchCount / 3, 1); // Max confidence at 3+ matches
    return {
      context: bestMatch.context,
      confidence,
      keywords: bestMatch.keywords
    };
  }

  return {
    context: 'abstract',
    confidence: 0.5,
    keywords: []
  };
}

/**
 * Extract number of recipients from problem text (for sharing problems)
 */
export function extractNumberOfRecipients(problemText: string): number {
  // Match patterns like "3 friends", "among 4 people", "between 5 students"
  const patterns = [
    /(\d+)\s+(friends?|people|persons?|students?|kids?|children)/i,
    /among\s+(\d+)/i,
    /between\s+(\d+)/i,
    /divide.*equally.*(\d+)/i,
    /share.*among.*(\d+)/i
  ];

  for (const pattern of patterns) {
    const match = problemText.match(pattern);
    if (match) {
      const num = parseInt(match[1], 10);
      if (num > 0 && num <= 20) { // Reasonable limit
        return num;
      }
    }
  }

  return 0; // No recipients found
}

/**
 * Select the best visualization for a problem
 */
export function selectVisualization(
  problemText: string,
  preferredContext?: VisualizationContext
): {
  visualizationId: VisualizationId;
  context: VisualizationContext;
  confidence: number;
  fallbackId?: VisualizationId;
} {
  // Use preferred context if provided and confident
  if (preferredContext) {
    const visualizationId = CONTEXT_TO_VISUALIZATION[preferredContext];
    const config = getVisualizationConfig(visualizationId);

    return {
      visualizationId,
      context: preferredContext,
      confidence: 1.0,
      fallbackId: config?.fallbackId
    };
  }

  // Extract context from problem text
  const { context, confidence } = extractContextFromProblem(problemText);

  // Get the appropriate visualization ID for this context
  const visualizationId = CONTEXT_TO_VISUALIZATION[context];
  const config = getVisualizationConfig(visualizationId);

  // Check if visualization is registered
  const visualization = getVisualization(visualizationId);

  // If not registered, fall back to abstract
  if (!visualization && visualizationId !== 'bar-division') {
    return {
      visualizationId: 'bar-division',
      context: 'abstract',
      confidence: 0.7,
      fallbackId: undefined
    };
  }

  return {
    visualizationId,
    context,
    confidence,
    fallbackId: config?.fallbackId
  };
}

/**
 * Get visualization with automatic fallback
 */
export function getVisualizationWithFallback(
  visualizationId: VisualizationId
): VisualizationId {
  const visualization = getVisualization(visualizationId);

  if (visualization) {
    return visualizationId;
  }

  // Try fallback
  const config = getVisualizationConfig(visualizationId);
  if (config?.fallbackId) {
    return getVisualizationWithFallback(config.fallbackId);
  }

  // Ultimate fallback
  return 'bar-division';
}

/**
 * Generate recipient names for sharing problems
 */
export function generateRecipientNames(count: number, context: VisualizationContext): string[] {
  const names: string[] = [];

  // Context-specific naming
  if (context === 'pizza' || context === 'chocolate-bar' || context === 'cake') {
    // Use "Friend" for food sharing
    for (let i = 1; i <= count; i++) {
      names.push(`Friend ${i}`);
    }
  } else {
    // Use "Person" for other contexts
    for (let i = 1; i <= count; i++) {
      names.push(`Person ${i}`);
    }
  }

  return names;
}

/**
 * Get context-appropriate unit label
 */
export function getUnitLabel(context: VisualizationContext, count: number = 1): string {
  const labels: Record<VisualizationContext, { singular: string; plural: string }> = {
    'chocolate-bar': { singular: 'piece', plural: 'pieces' },
    'pizza': { singular: 'slice', plural: 'slices' },
    'cake': { singular: 'piece', plural: 'pieces' },
    'ribbon': { singular: 'section', plural: 'sections' },
    'rope': { singular: 'section', plural: 'sections' },
    'liquid': { singular: 'portion', plural: 'portions' },
    'measurement': { singular: 'unit', plural: 'units' },
    'abstract': { singular: 'part', plural: 'parts' }
  };

  const label = labels[context];
  return count === 1 ? label.singular : label.plural;
}

export default {
  extractContextFromProblem,
  extractNumberOfRecipients,
  selectVisualization,
  getVisualizationWithFallback,
  generateRecipientNames,
  getUnitLabel
};
