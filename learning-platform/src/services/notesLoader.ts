/**
 * NotesLoader Service
 *
 * Dynamically loads and manages React component-based notes for subtopics.
 * Supports both .tsx React components and .md markdown files.
 */

import { configLoader } from './configLoader';
import { ComponentType } from 'react';

// Import all notes components statically
// This is required because Vite doesn't support fully dynamic imports
const notesComponents: Record<string, () => Promise<{ default: ComponentType<any> }>> = {
  's3/math/trigonometry/BasicRatios': () => import('../notes/s3/math/trigonometry/BasicRatios'),
  's3/math/trigonometry/ProblemSolving': () => import('../notes/s3/math/trigonometry/ProblemSolving'),
  's3/math/trigonometry/TrueBearings': () => import('../notes/s3/math/trigonometry/TrueBearings'),
  's3/math/trigonometry/ObtuseAngles': () => import('../notes/s3/math/trigonometry/ObtuseAngles'),
  's3/math/trigonometry/AreaOfTriangle': () => import('../notes/s3/math/trigonometry/AreaOfTriangle'),
  's3/math/trigonometry/SineRule': () => import('../notes/s3/math/trigonometry/SineRule'),
  's3/math/trigonometry/CosineRule': () => import('../notes/s3/math/trigonometry/CosineRule'),
  's3/math/circle-geometry/Definitions': () => import('../notes/s3/math/circle-geometry/Definitions'),
  's3/math/circle-geometry/AngleInSemicircle': () => import('../notes/s3/math/circle-geometry/AngleInSemicircle'),
  's3/math/circle-geometry/Chords': () => import('../notes/s3/math/circle-geometry/Chords'),
  's3/math/circle-geometry/RadiusTangent': () => import('../notes/s3/math/circle-geometry/RadiusTangent'),
  's3/math/circle-geometry/TangentsExternal': () => import('../notes/s3/math/circle-geometry/TangentsExternal'),
  's3/math/circle-geometry/AngleCentre': () => import('../notes/s3/math/circle-geometry/AngleCentre'),
  's3/math/circle-geometry/AngleSameArc': () => import('../notes/s3/math/circle-geometry/AngleSameArc'),
  's3/math/quadratic-equations/SolvingStandardForm': () => import('../notes/s3/math/quadratic-equations/SolvingStandardForm'),
  's3/math/quadratic-equations/SolvingFactorization': () => import('../notes/s3/math/quadratic-equations/SolvingFactorization'),
  's3/math/quadratic-equations/SolvingFractional': () => import('../notes/s3/math/quadratic-equations/SolvingFractional'),
  's3/math/quadratic-equations/SolvingCompletingSquare': () => import('../notes/s3/math/quadratic-equations/SolvingCompletingSquare'),
  's3/math/quadratic-equations/SolvingFormula': () => import('../notes/s3/math/quadratic-equations/SolvingFormula'),
  's3/math/quadratic-equations/SolvingExponential': () => import('../notes/s3/math/quadratic-equations/SolvingExponential'),
  's3/math/quadratic-equations/WordProblems': () => import('../notes/s3/math/quadratic-equations/WordProblems'),
  's3/math/quadratic-equations/GraphFeatures': () => import('../notes/s3/math/quadratic-equations/GraphFeatures'),
  's3/math/quadratic-equations/GraphCompletedSquare': () => import('../notes/s3/math/quadratic-equations/GraphCompletedSquare'),
  's3/math/quadratic-equations/GraphFactorised': () => import('../notes/s3/math/quadratic-equations/GraphFactorised'),
  's3/math/quadratic-equations/GraphPolynomial': () => import('../notes/s3/math/quadratic-equations/GraphPolynomial'),
  's3/math/quadratic-equations/GraphFindingFunction': () => import('../notes/s3/math/quadratic-equations/GraphFindingFunction'),
  's3/math/quadratic-equations/GraphProblemSolving': () => import('../notes/s3/math/quadratic-equations/GraphProblemSolving'),
  // Add more note components here as you create them
  // 'p4/science/biology/PlantParts': () => import('../notes/p4/science/biology/PlantParts'),
};

interface NotesCache {
  [key: string]: ComponentType<any>;
}

class NotesLoaderService {
  private cache: NotesCache = {};

  /**
   * Load notes component for a subtopic
   * @param subtopicId - The subtopic ID
   * @returns React component or null if not available
   */
  async loadNotesComponent(subtopicId: string): Promise<ComponentType<any> | null> {
    // Check cache first
    if (this.cache[subtopicId]) {
      return this.cache[subtopicId];
    }

    // Get config to find notes component path
    const config = await configLoader.getSubtopicConfig(subtopicId);

    if (!config.notesComponent) {
      console.warn(`No notes component configured for ${subtopicId}`);
      return null;
    }

    try {
      // Get the import function for this component
      const importFn = notesComponents[config.notesComponent];

      if (!importFn) {
        console.warn(`Notes component not found in registry: ${config.notesComponent}`);
        console.warn('Available components:', Object.keys(notesComponents));
        return null;
      }

      // Dynamic import of the notes component
      const notesModule = await importFn();

      if (!notesModule.default) {
        throw new Error(`Notes component ${config.notesComponent} must have a default export`);
      }

      // Cache the loaded component
      this.cache[subtopicId] = notesModule.default;

      return notesModule.default;
    } catch (error) {
      console.error(`Failed to load notes component for ${subtopicId}:`, error);
      return null;
    }
  }

  /**
   * Preload notes component (for performance optimization)
   * @param subtopicId - The subtopic ID to preload
   */
  async preloadNotes(subtopicId: string): Promise<void> {
    await this.loadNotesComponent(subtopicId);
  }

  /**
   * Check if notes are available for a subtopic
   * @param subtopicId - The subtopic ID
   * @returns true if notes component is configured
   */
  async hasNotes(subtopicId: string): Promise<boolean> {
    const config = await configLoader.getSubtopicConfig(subtopicId);
    return !!config.notesComponent;
  }

  /**
   * Clear cache for a specific subtopic or all
   * @param subtopicId - Optional subtopic ID. If not provided, clears all cache
   */
  clearCache(subtopicId?: string): void {
    if (subtopicId) {
      delete this.cache[subtopicId];
    } else {
      this.cache = {};
    }
  }
}

// Export singleton instance
export const notesLoader = new NotesLoaderService();
