#!/usr/bin/env node

/**
 * Normalize JSON structure - flatten sub_parts into main parts array
 * Use this when you have manually fixed JSON that needs normalization
 *
 * Usage: node normalize-structure.js <input-json> <output-json>
 * Example: node normalize-structure.js gemini-1-raw-problem.json gemini-1-raw.json
 */

import fs from 'fs';
import path from 'path';

function normalizeStructure(inputPath, outputPath) {
  try {
    console.log(`Reading: ${inputPath}`);
    const data = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

    if (!data.questions || !Array.isArray(data.questions)) {
      throw new Error('Invalid JSON structure: missing questions array');
    }

    console.log(`Found ${data.questions.length} questions`);
    console.log('Normalizing structure: flattening sub_parts...\n');

    // Normalize structure: flatten sub_parts into main parts array
    data.questions = data.questions.map((q, qIdx) => {
      if (!q.parts || !Array.isArray(q.parts)) {
        return q;
      }

      const flattenedParts = [];
      let partCount = 0;

      q.parts.forEach((part) => {
        if (part.sub_parts && Array.isArray(part.sub_parts)) {
          // Part has sub_parts - flatten them
          console.log(`  Q${qIdx + 1}: Flattening part "${part.label}" with ${part.sub_parts.length} sub-parts`);
          part.sub_parts.forEach(subPart => {
            flattenedParts.push({
              label: subPart.label,
              text: part.text + ' ' + subPart.text, // Concatenate parent text with sub-part text
              answer: subPart.answer || '',
              parentLabel: part.label,
              parentText: part.text
            });
            partCount++;
          });
        } else {
          // Regular part - add as is
          flattenedParts.push({
            label: part.label,
            text: part.text,
            answer: part.answer || ''
          });
          partCount++;
        }
      });

      console.log(`  Q${qIdx + 1}: Result = ${partCount} flat parts`);

      return {
        question: q.question,
        parts: flattenedParts
      };
    });

    // Calculate totals
    const totalParts = data.questions.reduce((sum, q) => sum + q.parts.length, 0);

    console.log(`\n✓ Normalization complete`);
    console.log(`✓ Questions: ${data.questions.length}`);
    console.log(`✓ Total parts: ${totalParts}`);

    // Write output
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    console.log(`✓ Saved to: ${outputPath}\n`);

    // Print sample
    console.log('=== SAMPLE OUTPUT ===');
    const sample = data.questions[0];
    console.log(`Question: ${sample.question.substring(0, 80)}...`);
    console.log(`Parts:`);
    sample.parts.slice(0, 3).forEach(p => {
      const context = p.parentText ? ` (from "${p.parentText}")` : '';
      console.log(`  (${p.label}) ${p.text.substring(0, 60)}...${context}`);
    });

    return data;

  } catch (error) {
    console.error('❌ Error normalizing structure:', error.message);
    process.exit(1);
  }
}

// Main execution
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Usage: node normalize-structure.js <input-json> <output-json>');
  console.log('Example: node normalize-structure.js gemini-1-raw-problem.json gemini-1-raw.json');
  process.exit(1);
}

const inputPath = path.resolve(args[0]);
const outputPath = path.resolve(args[1]);

if (!fs.existsSync(inputPath)) {
  console.error(`❌ Input file not found: ${inputPath}`);
  process.exit(1);
}

normalizeStructure(inputPath, outputPath);
