#!/usr/bin/env tsx

/**
 * Template Generation Script
 *
 * Generates teaching templates from comprehensive notes using AI.
 *
 * Usage:
 *   npm run generate-template <subtopic-id> <notes-file-path>
 *
 * Example:
 *   npm run generate-template s3-math-trigonometry-basic-ratios notes/s3/math/trigonometry/basic-ratios.md
 */

// CRITICAL: Load env vars FIRST before any other imports
import { env, validateEnv } from './env-loader.js';

import * as fs from 'fs';
import * as path from 'path';
import { templateGenerator } from '../src/services/templateGenerator.js';

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

/**
 * Main function
 */
async function main() {
  log('\n🤖 Template Generation Starting...', 'blue');
  log('━'.repeat(60), 'gray');

  // Validate environment variables
  const validation = validateEnv();

  if (validation.errors.length > 0) {
    log('\n❌ Environment Configuration Errors:', 'red');
    validation.errors.forEach(err => log(`   - ${err}`, 'red'));
    log('\nPlease check your .env file and ensure all required variables are set.', 'yellow');
    process.exit(1);
  }

  if (validation.warnings.length > 0) {
    log('\n⚠️  Environment Configuration Warnings:', 'yellow');
    validation.warnings.forEach(warn => log(`   - ${warn}`, 'yellow'));
  }

  const args = process.argv.slice(2);

  if (args.length < 2) {
    log('❌ Error: Missing required arguments', 'red');
    log('\nUsage:', 'yellow');
    log('  npm run generate-template <subtopic-id> <notes-file-path>', 'gray');
    log('\nExample:', 'yellow');
    log('  npm run generate-template s3-math-trigonometry-basic-ratios notes/s3/math/trigonometry/basic-ratios.md', 'gray');
    process.exit(1);
  }

  const subtopicId = args[0];
  const notesFilePath = path.join(process.cwd(), args[1]);

  log(`\n📋 Subtopic ID: ${subtopicId}`, 'cyan');
  log(`📄 Notes file: ${notesFilePath}`, 'cyan');

  // Check if notes file exists
  if (!fs.existsSync(notesFilePath)) {
    log(`\n❌ Error: Notes file not found: ${notesFilePath}`, 'red');
    process.exit(1);
  }

  // Read notes file
  log('\n📖 Reading comprehensive notes...', 'blue');
  const comprehensiveNotes = fs.readFileSync(notesFilePath, 'utf-8');
  log(`   ✓ Read ${comprehensiveNotes.length} characters`, 'green');

  // Generate template
  log('\n🔄 Generating teaching template with AI...', 'blue');
  log('   This may take 30-60 seconds...', 'gray');

  try {
    const template = await templateGenerator.generateTemplateFromNotes(
      subtopicId,
      comprehensiveNotes
    );

    log(`   ✓ Template generated successfully`, 'green');
    log(`   ✓ Template length: ${template.length} characters`, 'green');

    // Word count
    const wordCount = template.split(/\s+/).filter(w => w.length > 0).length;
    log(`   ✓ Word count: ${wordCount} words`, 'green');

    // Validate template
    log('\n🔍 Validating template quality...', 'blue');
    const warnings = templateGenerator.validateTemplate(template);

    if (warnings.length === 0) {
      log('   ✓ Template passed all quality checks', 'green');
    } else {
      log('   ⚠️  Template validation warnings:', 'yellow');
      warnings.forEach(warning => {
        log(`      - ${warning}`, 'yellow');
      });
    }

    // Preview template
    log('\n📝 Template Preview:', 'blue');
    log('━'.repeat(60), 'gray');
    const preview = template.substring(0, 500);
    log(preview, 'gray');
    if (template.length > 500) {
      log('   ... (truncated, see Firestore for full template)', 'gray');
    }
    log('━'.repeat(60), 'gray');

    // Success summary
    log('\n✅ Template Generation Complete!', 'green');
    log(`\n📊 Summary:`, 'cyan');
    log(`   - Subtopic ID: ${subtopicId}`, 'gray');
    log(`   - Input notes: ${comprehensiveNotes.length} chars`, 'gray');
    log(`   - Generated template: ${template.length} chars (${wordCount} words)`, 'gray');
    log(`   - Template saved to Firestore`, 'gray');

    process.exit(0);
  } catch (error) {
    log(`\n❌ Error generating template:`, 'red');
    console.error(error);
    process.exit(1);
  }
}

// Run
main().catch(error => {
  log(`\n❌ Fatal error: ${error}`, 'red');
  console.error(error);
  process.exit(1);
});
