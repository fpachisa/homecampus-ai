#!/usr/bin/env node

/**
 * STEP 3: Combine short questions to meet minimum parts requirement
 * Merges questions with 2-3 parts to create nodes with 4-6 parts
 *
 * Usage: node combine-questions.js <input-json> <output-json>
 * Example: node combine-questions.js filtered-questions.json combined-questions.json
 */

import fs from 'fs';
import path from 'path';

const MIN_PARTS_PER_NODE = 4;
const MAX_PARTS_PER_NODE = 6;

function combineQuestions(inputPath, outputPath) {
  try {
    console.log(`Reading filtered questions: ${inputPath}`);
    const data = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

    if (!data.questions || !Array.isArray(data.questions)) {
      throw new Error('Invalid input JSON: missing questions array');
    }

    console.log(`\nCombining ${data.questions.length} questions...`);
    console.log(`Target: ${MIN_PARTS_PER_NODE}-${MAX_PARTS_PER_NODE} parts per node\n`);

    const combined = [];
    let currentGroup = null;

    data.questions.forEach((q, idx) => {
      const partsCount = q.parts.length;

      console.log(`Q${idx + 1}: ${partsCount} parts - "${q.question.substring(0, 60)}..."`);

      // If question already has enough parts, add it as standalone
      if (partsCount >= MIN_PARTS_PER_NODE) {
        console.log(`  → Standalone (${partsCount} parts ≥ ${MIN_PARTS_PER_NODE})`);
        combined.push(q);
        currentGroup = null;
        return;
      }

      // Question has <4 parts, needs combining
      if (!currentGroup) {
        // Start new group
        currentGroup = {
          questions: [q],
          totalParts: partsCount
        };
        console.log(`  → Start new group (${partsCount} parts so far)`);
      } else {
        // Add to existing group
        currentGroup.questions.push(q);
        currentGroup.totalParts += partsCount;
        console.log(`  → Add to group (${currentGroup.totalParts} parts total)`);

        // Check if group is ready
        if (currentGroup.totalParts >= MIN_PARTS_PER_NODE) {
          // Merge questions in group
          const mergedQuestion = mergeQuestionGroup(currentGroup.questions);
          combined.push(mergedQuestion);
          console.log(`  ✓ Group complete: ${currentGroup.questions.length} questions → ${currentGroup.totalParts} parts`);
          currentGroup = null;
        }
      }
    });

    // Handle remaining group if any
    if (currentGroup) {
      if (currentGroup.totalParts >= 2) {
        // Keep it even if slightly under minimum
        const mergedQuestion = mergeQuestionGroup(currentGroup.questions);
        combined.push(mergedQuestion);
        console.log(`  ✓ Final group: ${currentGroup.questions.length} questions → ${currentGroup.totalParts} parts (kept)`);
      } else {
        console.log(`  ⚠ Dropped final group: only ${currentGroup.totalParts} part(s)`);
      }
    }

    // Write output
    const outputData = { questions: combined };
    fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));
    console.log(`\n✓ Saved combined questions to: ${outputPath}`);

    // Print summary
    console.log('\n=== COMBINATION SUMMARY ===');
    console.log(`Original questions: ${data.questions.length}`);
    console.log(`Combined nodes: ${combined.length}`);
    console.log(`Reduction: ${data.questions.length - combined.length} questions merged`);

    console.log('\n=== PARTS DISTRIBUTION ===');
    combined.forEach((q, idx) => {
      const parts = q.parts.length;
      const status = parts >= MIN_PARTS_PER_NODE ? '✓' : '⚠';
      console.log(`Node ${idx + 1}: ${status} ${parts} parts`);
    });

    const avgParts = combined.reduce((sum, q) => sum + q.parts.length, 0) / combined.length;
    console.log(`\nAverage parts per node: ${avgParts.toFixed(1)}`);

    return outputData;

  } catch (error) {
    console.error('❌ Error combining questions:', error.message);
    process.exit(1);
  }
}

function mergeQuestionGroup(questions) {
  if (questions.length === 1) {
    return questions[0];
  }

  // Merge multiple questions into one
  const mergedContext = questions
    .map((q, idx) => `**Part ${idx + 1}:** ${q.question}`)
    .join('\n\n');

  // Combine all parts with updated labels
  const allParts = [];
  let partIndex = 0;
  const labels = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  questions.forEach((q) => {
    q.parts.forEach((part) => {
      const newPart = {
        label: labels[partIndex++],
        text: part.text,
        answer: part.answer || ''
      };

      // Preserve parent context if it exists
      if (part.parentText) {
        newPart.text = `${part.parentText} ${part.text}`;
      }

      allParts.push(newPart);
    });
  });

  return {
    question: mergedContext,
    parts: allParts
  };
}

// Main execution
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Usage: node combine-questions.js <input-json> <output-json>');
  console.log('Example: node combine-questions.js filtered-questions.json combined-questions.json');
  process.exit(1);
}

const inputPath = path.resolve(args[0]);
const outputPath = path.resolve(args[1]);

if (!fs.existsSync(inputPath)) {
  console.error(`❌ Input file not found: ${inputPath}`);
  process.exit(1);
}

combineQuestions(inputPath, outputPath);
