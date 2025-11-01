#!/usr/bin/env node

/**
 * STEP 2: Intelligent context-aware filtering of questions
 * Removes ONLY questions requiring students to draw/sketch graphs
 * KEEPS questions like "area of a plot of land" or "the sketch shows..."
 *
 * Usage: node filter-questions.js <input-json> <output-json> <removal-log>
 * Example: node filter-questions.js raw-questions.json filtered-questions.json removed.log
 */

import Anthropic from '@anthropic-ai/sdk';
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { AI_CONFIG, getProviderName, validateConfig } from './config.js';
import { saveCheckpoint } from './checkpoint.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Validate configuration
validateConfig();

// Initialize AI clients
const anthropic = AI_CONFIG.provider === 'anthropic' ? new Anthropic({
  apiKey: AI_CONFIG.anthropic.apiKey
}) : null;

const genAI = AI_CONFIG.provider === 'gemini' ? new GoogleGenerativeAI(AI_CONFIG.gemini.apiKey) : null;

const FILTER_PROMPT = `Analyze these exam questions and identify which ones require the STUDENT to DRAW or SKETCH a graph.

**REMOVE a question part if it requires the student to:**
- Sketch a graph or curve
- Draw a diagram from scratch
- Plot points on a coordinate grid
- Construct a graph using given data

**KEEP a question part if it:**
- Uses the word "plot" to mean land/area (e.g., "area of a plot of land")
- References an existing sketch/diagram (e.g., "The sketch shows...", "From the diagram...")
- Asks to calculate coordinates, intercepts, or intersections (no drawing required)
- Asks to interpret or analyze an existing graph
- Asks about properties like area, perimeter, angles (using word "plot" contextually)

**Analysis Process:**
For each question part, provide:
1. "keep": true/false
2. "reason": Brief explanation of decision

Output JSON format:
{
  "filtered": [
    {
      "question": "...",
      "parts": [
        {
          "label": "a",
          "text": "...",
          "answer": "...",
          "keep": true,
          "reason": "Calculating area of land, 'plot' means land not graph"
        },
        {
          "label": "b",
          "text": "...",
          "answer": "...",
          "keep": false,
          "reason": "Requires student to sketch the graph of f(x)"
        }
      ]
    }
  ]
}

**Examples:**

✅ KEEP: "Find the area of a triangular plot of land with sides..."
   Reason: "plot" means land, not graph plotting

✅ KEEP: "The sketch shows a right-angled triangle. Calculate angle θ."
   Reason: Sketch already provided, student interprets it

✅ KEEP: "Find the coordinates of the point where the line intersects the y-axis."
   Reason: Calculation only, no drawing required

❌ REMOVE: "Sketch the graph of f(x) = 2^x for 0 ≤ x ≤ 5"
   Reason: Requires student to draw graph

❌ REMOVE: "On the axes provided, plot the points A(2,3) and B(5,7)"
   Reason: Requires student to plot points

❌ REMOVE: "Draw a diagram to represent this information"
   Reason: Requires student to create diagram

**Questions to analyze:**`;

async function filterQuestions(inputPath, outputPath, logPath) {
  try {
    console.log(`Reading raw questions: ${inputPath}`);
    const rawData = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

    if (!rawData.questions || !Array.isArray(rawData.questions)) {
      throw new Error('Invalid input JSON: missing questions array');
    }

    console.log(`\n=== INTELLIGENT FILTERING ===`);
    console.log(`Provider: ${getProviderName()}`);
    console.log(`Analyzing ${rawData.questions.length} questions...`);
    console.log('This may take 30-60 seconds...\n');

    // Call appropriate AI provider
    let responseText;
    if (AI_CONFIG.provider === 'gemini') {
      const model = genAI.getGenerativeModel({ model: AI_CONFIG.gemini.model });
      const result = await model.generateContent(
        FILTER_PROMPT + '\n\n' + JSON.stringify(rawData, null, 2)
      );
      responseText = result.response.text();
    } else {
      const response = await anthropic.messages.create({
        model: AI_CONFIG.anthropic.model,
        max_tokens: 8000,
        messages: [
          {
            role: 'user',
            content: FILTER_PROMPT + '\n\n' + JSON.stringify(rawData, null, 2)
          }
        ]
      });
      responseText = response.content[0].text;
    }

    console.log('Analysis complete. Processing results...\n');

    let jsonText = responseText;
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      jsonText = jsonMatch[0];
    }

    const analysisData = JSON.parse(jsonText);

    // Process filtering results
    const keptQuestions = [];
    const removedParts = [];
    let totalParts = 0;
    let keptParts = 0;

    analysisData.filtered.forEach((q, qIdx) => {
      const keptPartsList = q.parts.filter(p => p.keep);
      const removedPartsList = q.parts.filter(p => !p.keep);

      totalParts += q.parts.length;
      keptParts += keptPartsList.length;

      // Log removed parts
      removedPartsList.forEach(part => {
        removedParts.push({
          question: q.question,
          part: part.label,
          text: part.text,
          reason: part.reason
        });
      });

      // Keep question if it has at least one kept part
      if (keptPartsList.length > 0) {
        keptQuestions.push({
          question: q.question,
          parts: keptPartsList.map(p => ({
            label: p.label,
            text: p.text,
            answer: p.answer || ''
          }))
        });
      }
    });

    // Write filtered output
    const outputData = { questions: keptQuestions };
    fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));
    console.log(`✓ Saved filtered questions to: ${outputPath}`);

    // Write removal log
    const logContent = [
      '=== REMOVED QUESTION PARTS ===',
      `Total parts analyzed: ${totalParts}`,
      `Parts kept: ${keptParts}`,
      `Parts removed: ${removedParts.length}`,
      '',
      ...removedParts.map((r, idx) => {
        return [
          `\n--- Removed Part ${idx + 1} ---`,
          `Question: ${r.question.substring(0, 100)}...`,
          `Part (${r.part}): ${r.text.substring(0, 150)}...`,
          `Reason: ${r.reason}`
        ].join('\n');
      })
    ].join('\n');

    fs.writeFileSync(logPath, logContent);
    console.log(`✓ Saved removal log to: ${logPath}\n`);

    // Save checkpoint
    const outputDir = path.dirname(outputPath);
    saveCheckpoint(outputDir, 2, 'Filter questions', {
      filteredQuestions: outputPath,
      removalLog: logPath
    });

    // Print summary
    console.log('=== FILTERING SUMMARY ===');
    console.log(`Total questions analyzed: ${rawData.questions.length}`);
    console.log(`Questions kept (full or partial): ${keptQuestions.length}`);
    console.log(`Total parts analyzed: ${totalParts}`);
    console.log(`Parts kept: ${keptParts} (${Math.round(keptParts/totalParts*100)}%)`);
    console.log(`Parts removed: ${removedParts.length} (${Math.round(removedParts.length/totalParts*100)}%)`);

    if (removedParts.length > 0) {
      console.log('\n=== SAMPLE REMOVED PARTS ===');
      removedParts.slice(0, 3).forEach((r, idx) => {
        console.log(`\n${idx + 1}. Part (${r.part}): ${r.text.substring(0, 80)}...`);
        console.log(`   Reason: ${r.reason}`);
      });
      console.log(`\n(See ${logPath} for complete list)`);
    }

    return outputData;

  } catch (error) {
    console.error('❌ Error filtering questions:', error.message);
    if (error.response) {
      console.error('API Response:', error.response);
    }
    process.exit(1);
  }
}

// Main execution
const args = process.argv.slice(2);
if (args.length < 3) {
  console.log('Usage: node filter-questions.js <input-json> <output-json> <removal-log>');
  console.log('Example: node filter-questions.js raw-questions.json filtered-questions.json removed.log');
  process.exit(1);
}

const inputPath = path.resolve(args[0]);
const outputPath = path.resolve(args[1]);
const logPath = path.resolve(args[2]);

if (!fs.existsSync(inputPath)) {
  console.error(`❌ Input file not found: ${inputPath}`);
  process.exit(1);
}

filterQuestions(inputPath, outputPath, logPath);
