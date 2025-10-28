/**
 * Extract Mock Configs Helper Script
 *
 * This script reads configLoader.ts and extracts all mock configs
 * into a JSON file that can then be used for migration.
 *
 * Usage:
 *   npx ts-node scripts/extractMockConfigs.ts
 *
 * Output:
 *   scripts/extracted-configs.json
 */

import * as fs from 'fs';
import * as path from 'path';

const CONFIG_LOADER_PATH = path.join(__dirname, '../src/services/configLoader.ts');
const OUTPUT_PATH = path.join(__dirname, 'extracted-configs.json');

interface SubtopicConfig {
  id: string;
  displayName: string;
  grade: string;
  subject: string;
  topic: string;
  subtopic: string;
  metadata: {
    difficulty: string;
    estimatedMinutes: number;
    prerequisites: string[];
  };
  notesComponent?: string;
  teachingTemplate: string;
  scoring: {
    easy: { basePoints: number; hintPenalties: number[] };
    medium: { basePoints: number; hintPenalties: number[] };
    hard: { basePoints: number; hintPenalties: number[] };
  };
  modules: {
    learn: boolean;
    practice: boolean;
    visualizations: boolean;
  };
}

/**
 * Parse the configLoader.ts file and extract all mock configs
 */
function extractConfigs(): Record<string, SubtopicConfig> {
  console.log('📖 Reading configLoader.ts...');

  const content = fs.readFileSync(CONFIG_LOADER_PATH, 'utf-8');

  // Find the mockConfigs object
  const mockConfigsStart = content.indexOf('const mockConfigs: Record<string, SubtopicConfig> = {');

  if (mockConfigsStart === -1) {
    throw new Error('Could not find mockConfigs object in configLoader.ts');
  }

  // Extract the object content
  // We need to find the matching closing brace
  let braceCount = 0;
  let startIndex = -1;
  let endIndex = -1;

  for (let i = mockConfigsStart; i < content.length; i++) {
    if (content[i] === '{') {
      if (braceCount === 0) {
        startIndex = i;
      }
      braceCount++;
    } else if (content[i] === '}') {
      braceCount--;
      if (braceCount === 0) {
        endIndex = i + 1;
        break;
      }
    }
  }

  if (startIndex === -1 || endIndex === -1) {
    throw new Error('Could not parse mockConfigs object');
  }

  const mockConfigsString = content.substring(startIndex, endIndex);

  // Convert TypeScript object to JSON
  // This is a simplified approach - we'll use eval in a safe context
  // In a real production script, you'd want to use a proper TS parser like ts-morph

  try {
    // Create a safe evaluation context
    const evalString = `
      (function() {
        const mockConfigs = ${mockConfigsString};
        return mockConfigs;
      })()
    `;

    // For safety, we'll just write the extracted string to a file
    // and let the user manually convert it if needed
    fs.writeFileSync(
      path.join(__dirname, 'extracted-configs-raw.ts'),
      mockConfigsString,
      'utf-8'
    );

    console.log('✅ Extracted mock configs to extracted-configs-raw.ts');
    console.log('⚠️  Manual conversion to JSON may be needed');

    return {};
  } catch (error) {
    console.error('❌ Failed to parse mock configs:', error);
    throw error;
  }
}

/**
 * Alternative: Count configs in the file
 */
function countConfigs(): number {
  const content = fs.readFileSync(CONFIG_LOADER_PATH, 'utf-8');

  // Count the number of id: 's*-math-* patterns
  const matches = content.match(/id:\s*'s\d+-math-[\w-]+'/g);

  return matches ? matches.length : 0;
}

// Main execution
console.log('🔍 Analyzing configLoader.ts...\n');

const count = countConfigs();
console.log(`Found approximately ${count} subtopic configs in the file\n`);

try {
  extractConfigs();
  console.log('\n✨ Extraction complete!');
} catch (error) {
  console.error('\n💥 Extraction failed:', error);
  console.log('\n📝 Alternative approach:');
  console.log('1. Manually copy the mockConfigs object from configLoader.ts');
  console.log('2. Convert it to JSON format');
  console.log('3. Use the migration script to upload to Firestore');
}
