/**
 * Configuration Loader Service
 *
 * Loads subtopic configurations from Firestore with caching
 * for optimal performance.
 */

import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { firestore } from './firebase';
import type { SubtopicConfig } from '../types/curriculum';

export class ConfigLoader {
  private cache: Map<string, SubtopicConfig> = new Map();
  private cacheTimestamps: Map<string, number> = new Map();
  private readonly CACHE_TTL = 5 * 60 * 1000; // 5 minutes

  /**
   * Get subtopic configuration by ID
   */
  async getSubtopicConfig(subtopicId: string): Promise<SubtopicConfig> {
    // Check cache first
    if (this.isCacheValid(subtopicId)) {
      const cached = this.cache.get(subtopicId);
      if (cached) {
        return cached;
      }
    }

    const docRef = doc(firestore, 'subtopics', subtopicId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      console.error(`[ConfigLoader] ❌ Config not found in Firestore: ${subtopicId}`);
      throw new Error(`Subtopic configuration not found: ${subtopicId}. Please ensure it has been migrated to Firestore.`);
    }

    const config = this.deserializeConfig(docSnap.data());

    // Update cache
    this.cache.set(subtopicId, config);
    this.cacheTimestamps.set(subtopicId, Date.now());

    return config;
  }

  /**
   * Get all subtopics for a given topic
   */
  async getSubtopicsByTopic(topicId: string): Promise<SubtopicConfig[]> {
    const [grade, subject, topic] = topicId.split('-');

    const q = query(
      collection(firestore, 'subtopics'),
      where('grade', '==', grade),
      where('subject', '==', subject),
      where('topic', '==', topic)
    );

    const querySnapshot = await getDocs(q);
    const configs: SubtopicConfig[] = [];

    querySnapshot.forEach((doc) => {
      const config = this.deserializeConfig(doc.data());
      configs.push(config);

      // Update cache
      this.cache.set(config.id, config);
      this.cacheTimestamps.set(config.id, Date.now());
    });

    return configs;
  }

  /**
   * Get all subtopics for a given grade and subject
   */
  async getSubtopicsByGradeAndSubject(
    grade: string,
    subject: string
  ): Promise<SubtopicConfig[]> {

    const q = query(
      collection(firestore, 'subtopics'),
      where('grade', '==', grade),
      where('subject', '==', subject)
    );

    const querySnapshot = await getDocs(q);
    const configs: SubtopicConfig[] = [];

    querySnapshot.forEach((doc) => {
      const config = this.deserializeConfig(doc.data());
      configs.push(config);

      // Update cache
      this.cache.set(config.id, config);
      this.cacheTimestamps.set(config.id, Date.now());
    });

    return configs;
  }

  /**
   * Invalidate cache for a specific subtopic
   */
  invalidateCache(subtopicId: string): void {
    this.cache.delete(subtopicId);
    this.cacheTimestamps.delete(subtopicId);
  }

  /**
   * Clear all cache
   */
  clearCache(): void {
    this.cache.clear();
    this.cacheTimestamps.clear();
  }

  /**
   * Check if cached data is still valid
   */
  private isCacheValid(subtopicId: string): boolean {
    if (!this.cache.has(subtopicId)) {
      return false;
    }

    const timestamp = this.cacheTimestamps.get(subtopicId);
    if (!timestamp) {
      return false;
    }

    return Date.now() - timestamp < this.CACHE_TTL;
  }

  /**
   * Deserialize Firestore data to SubtopicConfig
   * Handles Timestamp conversion
   */
  private deserializeConfig(data: any): SubtopicConfig {
    return {
      ...data,
      createdAt: data.createdAt?.toDate?.() || data.createdAt,
      updatedAt: data.updatedAt?.toDate?.() || data.updatedAt,
      notesLastUpdated: data.notesLastUpdated?.toDate?.() || data.notesLastUpdated,
      templateGeneratedAt: data.templateGeneratedAt?.toDate?.() || data.templateGeneratedAt,
    } as SubtopicConfig;
  }

  /**
   * Preload configurations for performance
   */
  async preloadConfigs(subtopicIds: string[]): Promise<void> {
    const promises = subtopicIds.map(id =>
      this.getSubtopicConfig(id).catch(err => {
        console.error(`[ConfigLoader] Failed to preload ${id}:`, err);
        return null;
      })
    );

    await Promise.all(promises);
  }
}

// Export singleton instance
export const configLoader = new ConfigLoader();
