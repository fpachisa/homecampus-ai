import type {
  VisualizationMetadata,
  VisualizationConfig,
  VisualizationTheme,
  VisualizationId,
  VisualizationContext
} from '../types/visualization';

/**
 * Visualization Registry
 * Central registry for all visualization components with themes and metadata
 */

// Pre-defined themes for different contexts
export const VISUALIZATION_THEMES: Record<VisualizationContext, VisualizationTheme> = {
  'chocolate-bar': {
    primaryColor: '#d97706', // amber-600
    secondaryColor: '#92400e', // amber-800
    accentColor: '#f59e0b', // amber-500
    gradientFrom: '#fef3c7', // amber-50
    gradientTo: '#fed7aa', // orange-200
    borderColor: '#78350f', // amber-900
    backgroundColor: '#fffbeb', // amber-50
    textColor: '#78350f', // amber-900
    emoji: '🍫',
    iconLabel: 'piece'
  },
  'pizza': {
    primaryColor: '#ea580c', // orange-600
    secondaryColor: '#9a3412', // orange-800
    accentColor: '#fb923c', // orange-400
    gradientFrom: '#fff7ed', // orange-50
    gradientTo: '#fed7aa', // orange-200
    borderColor: '#7c2d12', // orange-900
    backgroundColor: '#fff7ed', // orange-50
    textColor: '#7c2d12', // orange-900
    emoji: '🍕',
    iconLabel: 'slice'
  },
  'cake': {
    primaryColor: '#ec4899', // pink-500
    secondaryColor: '#9f1239', // pink-800
    accentColor: '#f472b6', // pink-400
    gradientFrom: '#fdf2f8', // pink-50
    gradientTo: '#fce7f3', // pink-100
    borderColor: '#831843', // pink-900
    backgroundColor: '#fdf2f8', // pink-50
    textColor: '#831843', // pink-900
    emoji: '🍰',
    iconLabel: 'piece'
  },
  'ribbon': {
    primaryColor: '#8b5cf6', // violet-500
    secondaryColor: '#5b21b6', // violet-800
    accentColor: '#a78bfa', // violet-400
    gradientFrom: '#f5f3ff', // violet-50
    gradientTo: '#ede9fe', // violet-100
    borderColor: '#4c1d95', // violet-900
    backgroundColor: '#f5f3ff', // violet-50
    textColor: '#4c1d95', // violet-900
    emoji: '🎀',
    iconLabel: 'piece'
  },
  'rope': {
    primaryColor: '#0891b2', // cyan-600
    secondaryColor: '#155e75', // cyan-800
    accentColor: '#22d3ee', // cyan-400
    gradientFrom: '#ecfeff', // cyan-50
    gradientTo: '#cffafe', // cyan-100
    borderColor: '#164e63', // cyan-900
    backgroundColor: '#ecfeff', // cyan-50
    textColor: '#164e63', // cyan-900
    emoji: '🪢',
    iconLabel: 'section'
  },
  'liquid': {
    primaryColor: '#3b82f6', // blue-500
    secondaryColor: '#1e40af', // blue-800
    accentColor: '#60a5fa', // blue-400
    gradientFrom: '#eff6ff', // blue-50
    gradientTo: '#dbeafe', // blue-100
    borderColor: '#1e3a8a', // blue-900
    backgroundColor: '#eff6ff', // blue-50
    textColor: '#1e3a8a', // blue-900
    emoji: '💧',
    iconLabel: 'portion'
  },
  'measurement': {
    primaryColor: '#10b981', // emerald-500
    secondaryColor: '#065f46', // emerald-800
    accentColor: '#34d399', // emerald-400
    gradientFrom: '#ecfdf5', // emerald-50
    gradientTo: '#d1fae5', // emerald-100
    borderColor: '#064e3b', // emerald-900
    backgroundColor: '#ecfdf5', // emerald-50
    textColor: '#064e3b', // emerald-900
    emoji: '📏',
    iconLabel: 'unit'
  },
  'abstract': {
    primaryColor: '#6366f1', // indigo-500
    secondaryColor: '#3730a3', // indigo-800
    accentColor: '#818cf8', // indigo-400
    gradientFrom: '#eef2ff', // indigo-50
    gradientTo: '#e0e7ff', // indigo-100
    borderColor: '#312e81', // indigo-900
    backgroundColor: '#eef2ff', // indigo-50
    textColor: '#312e81', // indigo-900
    emoji: '🔢',
    iconLabel: 'part'
  }
};

// Visualization configurations (2 generic visualizers)
const VISUALIZATION_CONFIGS: Record<VisualizationId, VisualizationConfig> = {
  'bar-division': {
    visualizationId: 'bar-division',
    context: 'abstract',
    description: 'Generic bar model for dividing linear/rectangular objects (ribbon, chocolate, rope, etc.)',
    theme: VISUALIZATION_THEMES['abstract'],
    supportedOperations: ['division'],
    qualityLevel: 'high',
    fallbackId: undefined
  },
  'circular-division': {
    visualizationId: 'circular-division',
    context: 'pizza',
    description: 'Generic circular model for dividing round objects (pizza, cake, pie, garden, etc.)',
    theme: VISUALIZATION_THEMES['pizza'],
    supportedOperations: ['division'],
    qualityLevel: 'high',
    fallbackId: undefined
  }
};

// Registry storage (will be populated when components are registered)
const visualizationRegistry = new Map<VisualizationId, VisualizationMetadata>();

/**
 * Register a visualization component
 */
export function registerVisualization(metadata: VisualizationMetadata): void {
  visualizationRegistry.set(metadata.id, metadata);
}

/**
 * Get visualization by ID
 */
export function getVisualization(id: VisualizationId): VisualizationMetadata | undefined {
  return visualizationRegistry.get(id);
}

/**
 * Get all registered visualizations
 */
export function getAllVisualizations(): VisualizationMetadata[] {
  return Array.from(visualizationRegistry.values());
}

/**
 * Get visualizations by context
 */
export function getVisualizationsByContext(context: VisualizationContext): VisualizationMetadata[] {
  return getAllVisualizations().filter(v => v.context === context);
}

/**
 * Get visualization config
 */
export function getVisualizationConfig(id: VisualizationId): VisualizationConfig | undefined {
  return VISUALIZATION_CONFIGS[id];
}

/**
 * Get theme for context
 */
export function getThemeForContext(context: VisualizationContext): VisualizationTheme {
  return VISUALIZATION_THEMES[context];
}

/**
 * Search visualizations by keywords
 */
export function searchVisualizationsByKeywords(keywords: string[]): VisualizationMetadata[] {
  const normalizedKeywords = keywords.map(k => k.toLowerCase());

  return getAllVisualizations().filter(v => {
    const matchCount = v.keywords.filter(k =>
      normalizedKeywords.some(nk => k.toLowerCase().includes(nk) || nk.includes(k.toLowerCase()))
    ).length;
    return matchCount > 0;
  }).sort((a, b) => {
    // Sort by quality level and match count
    const qualityOrder = { high: 3, medium: 2, basic: 1 };
    const aQuality = qualityOrder[a.config.qualityLevel];
    const bQuality = qualityOrder[b.config.qualityLevel];
    return bQuality - aQuality;
  });
}

/**
 * Get fallback visualization for a given ID
 */
export function getFallbackVisualization(id: VisualizationId): VisualizationMetadata | undefined {
  const config = VISUALIZATION_CONFIGS[id];
  if (!config?.fallbackId) return undefined;
  return visualizationRegistry.get(config.fallbackId);
}

export default {
  registerVisualization,
  getVisualization,
  getAllVisualizations,
  getVisualizationsByContext,
  getVisualizationConfig,
  getThemeForContext,
  searchVisualizationsByKeywords,
  getFallbackVisualization
};
