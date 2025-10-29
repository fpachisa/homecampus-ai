/**
 * Topic Loader Utility
 * Handles dynamic loading of topic modules from filesystem
 */

import { promises as fs } from 'fs';
import path from 'path';

export interface TopicModule {
  subtopics: Record<string, any>;
  config: any;
  metadata?: {
    subject?: string;
    grade?: string;
    topicId?: string;
  };
}

export interface LoaderOptions {
  recursive?: boolean;
  filePattern?: RegExp;
  verbose?: boolean;
}

/**
 * Dynamically import a topic file
 * Works in both Node.js and bundled environments
 */
export async function importTopicFile(filePath: string): Promise<any> {
  try {
    // Dynamic import (works with Vite/bundlers)
    const module = await import(/* @vite-ignore */ filePath);
    return module;
  } catch (error) {
    console.error(`Failed to import topic file: ${filePath}`, error);
    throw error;
  }
}

/**
 * Scan directory for topic files
 * Returns array of absolute file paths
 */
export async function scanTopicDirectory(
  directoryPath: string,
  options: LoaderOptions = {}
): Promise<string[]> {
  const {
    recursive = true,
    filePattern = /^(s\d|k\d|p\d|jc\d)-.*\.ts$/, // Match: s3-*, s4-*, p1-*, k1-*, jc1-*, etc.
    verbose = false
  } = options;

  const topicFiles: string[] = [];

  try {
    const entries = await fs.readdir(directoryPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(directoryPath, entry.name);

      if (entry.isDirectory() && recursive) {
        // Recursively scan subdirectories
        const subFiles = await scanTopicDirectory(fullPath, options);
        topicFiles.push(...subFiles);
      } else if (entry.isFile() && filePattern.test(entry.name)) {
        // Match topic file pattern
        if (verbose) {
          console.log(`Found topic file: ${fullPath}`);
        }
        topicFiles.push(fullPath);
      }
    }

    return topicFiles;
  } catch (error) {
    console.error(`Failed to scan directory: ${directoryPath}`, error);
    return [];
  }
}

/**
 * Extract topic metadata from file path
 * Example: "/path/to/subjects/mathematics/secondary/s3-trigonometry.ts"
 * Returns: { subject: "mathematics", grade: "secondary", topicId: "s3-trigonometry" }
 */
export function extractMetadataFromPath(filePath: string): {
  subject?: string;
  grade?: string;
  topicId?: string;
  fileName: string;
} {
  const fileName = path.basename(filePath, '.ts');
  const parts = filePath.split(path.sep);

  // Find 'subjects' in path
  const subjectsIndex = parts.indexOf('subjects');

  let subject: string | undefined;
  let grade: string | undefined;

  if (subjectsIndex !== -1 && parts.length > subjectsIndex + 2) {
    subject = parts[subjectsIndex + 1]; // e.g., "mathematics"
    grade = parts[subjectsIndex + 2];    // e.g., "secondary"
  }

  return {
    subject,
    grade,
    topicId: fileName,
    fileName
  };
}

/**
 * Parse topic module exports
 * Extracts subtopics and config from module exports
 */
export function parseTopicModule(module: any, metadata: any): TopicModule {
  // Look for common export patterns:
  // 1. S3_MATH_TRIGONOMETRY_SUBTOPICS (explicit)
  // 2. S3_MATH_TRIGONOMETRY_CONFIG (config)
  // 3. S3_MATH_QUADRATIC_EQUATIONS (legacy - without _SUBTOPICS suffix)

  let subtopics: Record<string, any> = {};
  let config: any = {};

  // Find subtopics export (usually named *_SUBTOPICS or S*_MATH_*)
  const subtopicsKey = Object.keys(module).find(key =>
    key.endsWith('_SUBTOPICS') ||
    key.includes('SUBTOPICS') ||
    // Legacy pattern: S3_MATH_TOPIC_NAME without _SUBTOPICS suffix
    (key.match(/^S\d_MATH_[A-Z_]+$/) && !key.endsWith('_CONFIG'))
  );

  if (subtopicsKey) {
    subtopics = module[subtopicsKey];
  }

  // Find config export (usually named *_CONFIG)
  const configKey = Object.keys(module).find(key =>
    key.endsWith('_CONFIG') || key === 'CONFIG'
  );

  if (configKey) {
    config = module[configKey];
  }

  return {
    subtopics,
    config,
    metadata
  };
}

/**
 * Load a single topic file and parse it
 */
export async function loadTopicFile(
  filePath: string
): Promise<TopicModule | null> {
  try {
    const module = await importTopicFile(filePath);
    const metadata = extractMetadataFromPath(filePath);
    const parsed = parseTopicModule(module, metadata);

    if (Object.keys(parsed.subtopics).length === 0) {
      console.warn(`No subtopics found in: ${filePath}`);
      return null;
    }

    return parsed;
  } catch (error) {
    console.error(`Failed to load topic file: ${filePath}`, error);
    return null;
  }
}

/**
 * Load all topics from a directory
 */
export async function loadTopicsFromDirectory(
  directoryPath: string,
  options: LoaderOptions = {}
): Promise<TopicModule[]> {
  const { verbose = false } = options;

  if (verbose) {
    console.log(`Scanning for topics in: ${directoryPath}`);
  }

  const topicFiles = await scanTopicDirectory(directoryPath, options);

  if (verbose) {
    console.log(`Found ${topicFiles.length} topic files`);
  }

  const loadedTopics: TopicModule[] = [];

  for (const filePath of topicFiles) {
    const topic = await loadTopicFile(filePath);
    if (topic) {
      loadedTopics.push(topic);
      if (verbose) {
        console.log(`Loaded topic: ${topic.metadata?.topicId} (${Object.keys(topic.subtopics).length} subtopics)`);
      }
    }
  }

  return loadedTopics;
}

/**
 * Filter topics by subject and/or grade
 */
export function filterTopics(
  topics: TopicModule[],
  filters: {
    subject?: string;
    grade?: string;
    topicId?: string;
  }
): TopicModule[] {
  return topics.filter(topic => {
    if (filters.subject && topic.metadata?.subject !== filters.subject) {
      return false;
    }
    if (filters.grade && topic.metadata?.grade !== filters.grade) {
      return false;
    }
    if (filters.topicId && topic.metadata?.topicId !== filters.topicId) {
      return false;
    }
    return true;
  });
}
