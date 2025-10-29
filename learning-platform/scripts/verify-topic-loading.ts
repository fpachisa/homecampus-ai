/**
 * Verification Script for Dynamic Topic Loading
 *
 * This script tests that all topics can be loaded dynamically from the filesystem
 * Run with: npx tsx scripts/verify-topic-loading.ts
 */

import path from 'path';
import { fileURLToPath } from 'url';
import { PromptRegistry } from '../src/prompt-library/registry/prompt-registry.js';
import { loadTopicsFromDirectory } from '../src/prompt-library/registry/topic-loader.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface TestResult {
  passed: number;
  failed: number;
  errors: string[];
  topics: any[];
}

async function verifyTopicLoading(): Promise<TestResult> {
  const result: TestResult = {
    passed: 0,
    failed: 0,
    errors: [],
    topics: []
  };

  console.log('='.repeat(60));
  console.log('TOPIC LOADING VERIFICATION');
  console.log('='.repeat(60));
  console.log('');

  // 1. Test filesystem scanning
  console.log('Step 1: Scanning filesystem for topic files...');
  const subjectsPath = path.resolve(__dirname, '../src/prompt-library/subjects');
  console.log(`  Path: ${subjectsPath}`);

  try {
    const topics = await loadTopicsFromDirectory(subjectsPath, {
      recursive: true,
      verbose: false
    });

    console.log(`  ✓ Found ${topics.length} topic files`);
    result.topics = topics;

    if (topics.length === 0) {
      result.errors.push('No topics found! Check directory path.');
      result.failed++;
    } else {
      result.passed++;
    }
  } catch (error) {
    console.error(`  ✗ Failed to scan directory:`, error);
    result.errors.push(`Filesystem scan failed: ${error}`);
    result.failed++;
    return result;
  }

  console.log('');

  // 2. Test topic parsing
  console.log('Step 2: Verifying topic structure...');
  let subtopicCount = 0;

  for (const topic of result.topics) {
    const topicId = topic.metadata?.topicId || 'unknown';
    const subtopicIds = Object.keys(topic.subtopics);
    subtopicCount += subtopicIds.length;

    if (subtopicIds.length === 0) {
      console.error(`  ✗ ${topicId}: No subtopics found`);
      result.errors.push(`${topicId}: No subtopics`);
      result.failed++;
    } else {
      console.log(`  ✓ ${topicId}: ${subtopicIds.length} subtopics`);
      result.passed++;
    }

    // Check for required fields
    for (const subtopicId of subtopicIds) {
      const subtopic = topic.subtopics[subtopicId];

      if (!subtopic.displayName) {
        result.errors.push(`${subtopicId}: Missing displayName`);
      }
      if (!subtopic.progressionStructure) {
        result.errors.push(`${subtopicId}: Missing progressionStructure`);
      }
    }
  }

  console.log(`  Total subtopics: ${subtopicCount}`);
  console.log('');

  // 3. Test registry integration
  console.log('Step 3: Testing PromptRegistry integration...');
  const registry = PromptRegistry.getInstance();

  try {
    const loadedCount = await registry.loadFromDirectory(subjectsPath, {
      recursive: true,
      verbose: false
    });

    console.log(`  ✓ Loaded ${loadedCount} subtopics into registry`);

    if (loadedCount !== subtopicCount) {
      result.errors.push(`Mismatch: Found ${subtopicCount} subtopics but loaded ${loadedCount}`);
      result.failed++;
    } else {
      result.passed++;
    }
  } catch (error) {
    console.error(`  ✗ Failed to load into registry:`, error);
    result.errors.push(`Registry loading failed: ${error}`);
    result.failed++;
  }

  console.log('');

  // 4. Test topic retrieval
  console.log('Step 4: Testing topic retrieval...');
  const subtopicIds = registry.listSubtopicIds();

  console.log(`  Registry contains ${subtopicIds.length} subtopics`);

  // Test a few specific known topics
  const testTopics = [
    's3-math-trigonometry-basic-ratios',
    's3-math-circle-geometry-definitions',
    's4-math-differential-calculus-limits'
  ];

  for (const testId of testTopics) {
    const config = registry.getTopicWithConfig(testId);

    if (config) {
      console.log(`  ✓ ${testId}: Retrieved successfully`);
      result.passed++;

      // Verify structure
      if (!config.subtopic || !config.global) {
        result.errors.push(`${testId}: Invalid structure (missing subtopic or global)`);
        result.failed++;
      }
    } else {
      console.error(`  ✗ ${testId}: Not found in registry`);
      result.errors.push(`${testId}: Not found`);
      result.failed++;
    }
  }

  console.log('');

  return result;
}

async function main() {
  try {
    const result = await verifyTopicLoading();

    console.log('='.repeat(60));
    console.log('RESULTS');
    console.log('='.repeat(60));
    console.log(`Passed: ${result.passed}`);
    console.log(`Failed: ${result.failed}`);
    console.log(`Topics loaded: ${result.topics.length}`);
    console.log('');

    if (result.errors.length > 0) {
      console.log('Errors:');
      result.errors.forEach(err => console.log(`  - ${err}`));
      console.log('');
    }

    if (result.failed === 0) {
      console.log('✓ All tests passed! Topic loading system is working correctly.');
      process.exit(0);
    } else {
      console.error('✗ Some tests failed. Please review errors above.');
      process.exit(1);
    }
  } catch (error) {
    console.error('Fatal error during verification:', error);
    process.exit(1);
  }
}

main();
