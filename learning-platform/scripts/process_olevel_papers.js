#!/usr/bin/env node

/**
 * Generic O-Level Exam Paper Processor
 *
 * This script processes O-Level exam paper JSON files by:
 * 1. Adding "paper" metadata field to each question based on questionId
 * 2. Grouping questions by topicId
 * 3. Creating topic-based files organized by paper (Paper 1 / Paper 2)
 *
 * IMPORTANT: Output files are created in the same directory as input (raw/)
 * to avoid accidentally overwriting final processed files with solutions.
 *
 * Usage:
 *   node scripts/process_olevel_papers.js <input-file>
 *
 * Example:
 *   node scripts/process_olevel_papers.js raw/anderson-2024-paper-1-2.json
 *
 * Output:
 *   Creates topic files in raw/ directory (e.g., raw/n1.json, raw/n2.json, etc.)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Parse command line arguments
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('\nError: Input file required\n');
  console.log('Usage: node scripts/process_olevel_papers.js <input-file>\n');
  console.log('Example:');
  console.log('  node scripts/process_olevel_papers.js raw/anderson-2024-paper-1-2.json\n');
  process.exit(1);
}

// Setup paths
const baseDir = '/Users/farhat/Documents/AI Systems/AITutor/aicampus/learning-platform/public/curriculum-content/o-level/exam-papers';
const inputFile = args[0].startsWith('/') ? args[0] : path.join(baseDir, args[0]);
// Output to same directory as input (raw/) to avoid overwriting final processed files
const outputDir = path.dirname(inputFile);

// Validate input file exists
if (!fs.existsSync(inputFile)) {
  console.error(`\nError: Input file not found: ${inputFile}\n`);
  process.exit(1);
}

console.log('\n=== O-LEVEL EXAM PAPER PROCESSOR ===\n');
console.log(`Input file:  ${path.basename(inputFile)}`);
console.log(`Output dir:  ${outputDir}`);
console.log(`\nNote: Output files created in raw/ folder to preserve processed/ for final files with solutions.\n`);

// Read and parse the source file
let data;
try {
  data = JSON.parse(fs.readFileSync(inputFile, 'utf8'));
} catch (error) {
  console.error(`\nError reading/parsing input file: ${error.message}\n`);
  process.exit(1);
}

if (!data.questions || !Array.isArray(data.questions)) {
  console.error('\nError: Input file must contain a "questions" array\n');
  process.exit(1);
}

// Step 1: Add "paper" field to each question
console.log('Step 1: Adding "paper" metadata field...');
let paperAddCount = 0;

data.questions.forEach(question => {
  if (question.questionId.includes('-p1-')) {
    question.paper = 'Paper 1';
    paperAddCount++;
  } else if (question.questionId.includes('-p2-')) {
    question.paper = 'Paper 2';
    paperAddCount++;
  } else {
    console.warn(`Warning: Could not determine paper for questionId: ${question.questionId}`);
  }
});

console.log(`  ✓ Added paper field to ${paperAddCount} questions\n`);

// Step 2: Group questions by topicId
console.log('Step 2: Grouping questions by topicId...');
const topicGroups = {};

data.questions.forEach(question => {
  const topicId = question.topicID;

  if (!topicId) {
    console.warn(`Warning: Question ${question.questionId} has no topicID`);
    return;
  }

  if (!topicGroups[topicId]) {
    topicGroups[topicId] = {
      'Paper 1': [],
      'Paper 2': []
    };
  }

  if (question.paper) {
    topicGroups[topicId][question.paper].push(question);
  }
});

console.log(`  ✓ Grouped questions into ${Object.keys(topicGroups).length} topics\n`);

// Step 3: Create topic files
console.log('Step 3: Creating topic-based JSON files...');
const stats = {};
let filesCreated = 0;

Object.keys(topicGroups).forEach(topicId => {
  const fileName = `${topicId.toLowerCase()}.json`;
  const filePath = path.join(outputDir, fileName);

  const topicData = {
    topicId: topicId,
    questions: topicGroups[topicId]
  };

  fs.writeFileSync(filePath, JSON.stringify(topicData, null, 2), 'utf8');
  filesCreated++;

  stats[topicId] = {
    fileName: fileName,
    paper1Count: topicGroups[topicId]['Paper 1'].length,
    paper2Count: topicGroups[topicId]['Paper 2'].length,
    totalCount: topicGroups[topicId]['Paper 1'].length + topicGroups[topicId]['Paper 2'].length
  };
});

console.log(`  ✓ Created ${filesCreated} topic files\n`);

// Output statistics
console.log('=== PROCESSING COMPLETE ===\n');
console.log('Topic Files Created:');
console.log('┌────────────┬───────┬──────────┬──────────┬────────┐');
console.log('│ File       │ Topic │ Paper 1  │ Paper 2  │ Total  │');
console.log('├────────────┼───────┼──────────┼──────────┼────────┤');

Object.keys(stats).sort().forEach(topicId => {
  const stat = stats[topicId];
  console.log(
    `│ ${stat.fileName.padEnd(10)} │ ${topicId.padEnd(5)} │ ${String(stat.paper1Count).padStart(8)} │ ${String(stat.paper2Count).padStart(8)} │ ${String(stat.totalCount).padStart(6)} │`
  );
});

console.log('└────────────┴───────┴──────────┴──────────┴────────┘');
console.log(`\nTotal topic files created: ${Object.keys(stats).length}`);
console.log(`Total questions processed: ${data.questions.length}`);
console.log(`Output directory: ${outputDir}\n`);
