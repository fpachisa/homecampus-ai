#!/usr/bin/env tsx

/**
 * Verify Template Script
 *
 * Verifies that a template was successfully saved to Firestore
 *
 * Usage:
 *   npm run verify-template <subtopic-id>
 */

// CRITICAL: Load env vars FIRST before any other imports
import { env, validateEnv } from './env-loader.js';

import { configLoader } from '../src/services/configLoader.js';

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  gray: '\x1b[90m',
  cyan: '\x1b[36m'
};

function log(message: string, color: keyof typeof colors = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

async function main() {
  log('\n🔍 Template Verification Starting...', 'blue');
  log('━'.repeat(60), 'gray');

  // Validate environment
  const validation = validateEnv();
  if (validation.errors.length > 0) {
    log('\n❌ Environment Configuration Errors:', 'red');
    validation.errors.forEach(err => log(`   - ${err}`, 'red'));
    process.exit(1);
  }

  const args = process.argv.slice(2);
  if (args.length < 1) {
    log('❌ Error: Missing subtopic ID', 'red');
    log('\nUsage:', 'yellow');
    log('  npm run verify-template <subtopic-id>', 'gray');
    process.exit(1);
  }

  const subtopicId = args[0];
  log(`\n📋 Subtopic ID: ${subtopicId}`, 'cyan');

  try {
    // Load configuration
    log('\n📡 Loading configuration from Firestore...', 'blue');
    const config = await configLoader.getSubtopicConfig(subtopicId);

    log('   ✓ Configuration loaded successfully', 'green');

    // Display configuration details
    log('\n📊 Configuration Details:', 'blue');
    log(`   - Display Name: ${config.displayName}`, 'gray');
    log(`   - Grade: ${config.grade}`, 'gray');
    log(`   - Subject: ${config.subject}`, 'gray');
    log(`   - Topic: ${config.topic}`, 'gray');
    log(`   - Subtopic: ${config.subtopic}`, 'gray');
    log(`   - Difficulty: ${config.metadata.difficulty}`, 'gray');
    log(`   - Estimated Time: ${config.metadata.estimatedMinutes} minutes`, 'gray');

    // Check template
    if (config.teachingTemplate) {
      const wordCount = config.teachingTemplate.split(/\s+/).filter(w => w.length > 0).length;
      log('\n📝 Teaching Template:', 'blue');
      log(`   ✓ Template exists`, 'green');
      log(`   - Length: ${config.teachingTemplate.length} characters`, 'gray');
      log(`   - Word count: ${wordCount} words`, 'gray');

      if (config.templateGeneratedAt) {
        log(`   - Generated: ${config.templateGeneratedAt.toLocaleString()}`, 'gray');
      }

      // Preview
      log('\n   Preview (first 300 chars):', 'cyan');
      log('   ' + '─'.repeat(58), 'gray');
      const preview = config.teachingTemplate.substring(0, 300).split('\n').map(line => '   ' + line).join('\n');
      log(preview, 'gray');
      log('   ' + '─'.repeat(58), 'gray');
    } else {
      log('\n⚠️  No teaching template found', 'yellow');
      log('   Run: npm run generate-template to create one', 'gray');
    }

    // Check modules
    log('\n🔧 Enabled Modules:', 'blue');
    log(`   - Learn: ${config.modules.learn ? '✓' : '✗'}`, config.modules.learn ? 'green' : 'gray');
    log(`   - Practice: ${config.modules.practice ? '✓' : '✗'}`, config.modules.practice ? 'green' : 'gray');
    log(`   - Visualizations: ${config.modules.visualizations ? '✓' : '✗'}`, config.modules.visualizations ? 'green' : 'gray');

    log('\n✅ Verification Complete!', 'green');
    process.exit(0);

  } catch (error) {
    log(`\n❌ Error loading configuration:`, 'red');
    console.error(error);
    process.exit(1);
  }
}

main().catch(error => {
  log(`\n❌ Fatal error: ${error}`, 'red');
  console.error(error);
  process.exit(1);
});
