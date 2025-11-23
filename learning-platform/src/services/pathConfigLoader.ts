/**
 * Path Configuration Loader
 *
 * Loads path node configurations for practice mode from YAML files.
 * Files are organized by grade and subject (e.g., curriculum-content/S3/Maths/)
 * Scalable architecture supporting unlimited categories and paths.
 */

import type { PathNode, PathDifficulty, PathConfigSet } from '../types/practice';
import { yamlPathLoader } from './yamlPathLoader';
import { jsonPathLoader } from './jsonPathLoader';

class PathConfigLoader {
  private cache: Map<string, PathNode[]> = new Map();

  /**
   * Load path nodes for a given category and difficulty
   * Automatically loads from YAML files organized by grade/subject structure
   */
  async loadPathNodes(category: string, difficulty: PathDifficulty): Promise<PathNode[]> {
    const cacheKey = `${category}-${difficulty}`;

    // Check cache first
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    // Load from YAML file
    try {
      const nodes = await yamlPathLoader.loadPath(category, difficulty);

      // Cache the result
      this.cache.set(cacheKey, nodes);

      return nodes;

    } catch (error) {
      console.error(`Failed to load path nodes for ${category}/${difficulty}:`, error);
      // Return empty array to prevent crashes
      return [];
    }
  }

  /**
   * Load all three difficulty paths in parallel
   */
  async loadAllPaths(category: string): Promise<PathConfigSet> {
    const [easy, medium, hard] = await Promise.all([
      this.loadPathNodes(category, 'easy'),
      this.loadPathNodes(category, 'medium'),
      this.loadPathNodes(category, 'hard'),
    ]);

    return { easy, medium, hard };
  }

  /**
   * Load unified path nodes (NEW SYSTEM)
   * Loads single path with Foundation → Integration → Application layers
   */
  async loadUnifiedPathNodes(category: string): Promise<PathNode[]> {
    const cacheKey = `${category}-unified`;

    // Check cache first
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    // Try loading from JSON first (for O-Level exam papers)
    if (category.startsWith('olevel-')) {
      try {
        const jsonNodes = await jsonPathLoader.loadUnifiedPath(category);
        if (jsonNodes && jsonNodes.length > 0) {
          console.log(`✅ Loaded unified path from JSON for ${category}`);
          this.cache.set(cacheKey, jsonNodes);
          return jsonNodes;
        }
      } catch (jsonError) {
        console.warn(`Failed to load JSON path for ${category}, falling back to YAML`, jsonError);
      }
    }

    // Load from YAML file
    try {
      const nodes = await yamlPathLoader.loadUnifiedPath(category);

      // Cache the result
      this.cache.set(cacheKey, nodes);

      return nodes;

    } catch (error) {
      console.error(`Failed to load unified path nodes for ${category}:`, error);
      // Return empty array to prevent crashes
      return [];
    }
  }

  /**
   * Get cached nodes if available
   */
  getCachedPath(category: string, difficulty: PathDifficulty): PathNode[] | null {
    const cacheKey = `${category}-${difficulty}`;
    return this.cache.get(cacheKey) || null;
  }

  /**
   * Clear cache
   */
  clearCache(): void {
    this.cache.clear();
  }
}

export const pathConfigLoader = new PathConfigLoader();
