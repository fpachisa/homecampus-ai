#!/usr/bin/env node

/**
 * STEP 4: Generate step-by-step solutions and avatarIntro messages
 * Uses AI to create pedagogical solutions following trigonometry.yaml style
 *
 * Usage: node generate-solutions.js <input-json> <output-json>
 * Example: node generate-solutions.js combined-questions.json with-solutions.json
 */

import Anthropic from '@anthropic-ai/sdk';
import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';
import { AI_CONFIG, getProviderName, validateConfig } from './config.js';
import { saveCheckpoint } from './checkpoint.js';

// Validate configuration
validateConfig();

// Initialize AI clients
const anthropic = AI_CONFIG.provider === 'anthropic' ? new Anthropic({
  apiKey: AI_CONFIG.anthropic.apiKey
}) : null;

const genAI = AI_CONFIG.provider === 'gemini' ? new GoogleGenerativeAI(AI_CONFIG.gemini.apiKey) : null;

const SOLUTION_GENERATION_PROMPT = `Generate step-by-step solutions, calculate answers (if missing), create avatarIntro messages, and generate a concise title for each question.

**CRITICAL: Generate Title**
- Create a short, descriptive title for each question
- Focus on the concept or topic being tested
- 3-6 words maximum
- Examples: "Exponential Decay Temperature Model", "Logarithmic Function Graph Analysis", "Compound Interest Calculation", "Trigonometric Identities Application"

**CRITICAL: Calculate Missing Answers**
- If "answer" field is empty (""), you MUST calculate and provide the final answer
- If the question is asking to derive something in that case also answer field has to be provide. It can NEVER be blank.
- Include the answer in your step-by-step solution
- Format answer appropriately (with units, decimal places, etc.)
- If answer is already provided, keep it as-is

**Style Guide (follow closely):**

1. **title**: Short, concept-focused title (3-8 words)
   - Describes what concept/skill is being tested
   - NOT just a truncation of the question text
   - Examples: "Quadratic Equation Factoring", "Circle Geometry Properties", "Exponential Growth Model"

2. **answer**: Final answer to the question
   - Calculate if empty/missing
   - Include units where applicable
   - Use appropriate precision (e.g., 2-3 decimal places)
   - Examples: "$x = 12.5$ cm", "$θ = 45°$", "$k = 0.470$ (3sf)"

3. **avatarIntro**: Brief, introductory message that introduces the question. It should be in plain text as this will be used with TTS service to speak out loud. This will be read before the question is presented to the user.
   - 1 - 2 sentences
   - Warm, supportive tone

4. **stepByStepGuideline**: Array of 5-7 clear steps
   - Explain WHY, not just WHAT
   - Reference formulas and concepts
   - Show calculations where needed
   - Use proper LaTeX for math (single backslash: $\\sin\\theta$, $e^{-0.2t}$)
   - Each step is a complete sentence or short paragraph
   - Examples of good steps:
     - "Identify the given information: Initial temperature is 25°C, decay constant k = 0.2."
     - "Apply the exponential decay formula: $T(t) = T_0 \\cdot e^{-kt}$, where $T_0$ is initial temperature."
     - "Substitute known values: $T(3) = 25 \\cdot e^{-0.2 \\times 3} = 25 \\cdot e^{-0.6}$."
     - "Calculate using a calculator: $e^{-0.6} \\approx 0.5488$, so $T(3) \\approx 25 \\times 0.5488 = 13.72°C$."

**═══════════════════════════════════════════════════════════════**
**CRITICAL FORMATTING RULES - Unicode First!**
**═══════════════════════════════════════════════════════════════**

**RULE 1: Use Unicode for simple symbols (prevents JSON errors!)**
✓ Greek: θ, α, β, π (NOT $\\theta$)
✓ Operators: ×, ÷, ± (NOT $\\times$)
✓ Superscripts: x², x³ (NOT $x^2$)
✓ Degrees: 30° (NOT $30^{\\circ}$)

**RULE 2: LaTeX ONLY for complex expressions**
✓ Fractions: $\\frac{x+1}{2x-3}$
✓ Complex: $\\sin^2(θ) + \\cos^2(θ)$
✓ Nested: $\\sqrt{x^2 + y^2}$

**RULE 3: JSON escaping**
- Single backslash: "\\frac" not "\\\\frac"
- Currency: "\\$15,000" not "$\\$15,000$"
- No newlines in strings

**Examples:**
✓ "Apply the formula: Area = πr²"
✓ "The angle θ = 30° and x² = 9"
✓ "Solve: $\\frac{x+1}{2x-3} = \\frac{1}{2}$"

**═══════════════════════════════════════════════════════════════**

**Output format:**
{
  "questions": [
    {
      "question": "...",
      "title": "Exponential Decay Temperature Model",
      "parts": [
        {
          "label": "a",
          "text": "...",
          "answer": "CALCULATED ANSWER HERE (if input was empty, calculate it!) and if you answer doensn't match the given answer then say answer-INCORRECT. Don't force it to match.",
          "avatarIntro": "Brief encouraging message",
          "stepByStepGuideline": [
            "Step 1: Identify what's given...",
            "Step 2: Apply the relevant formula...",
            "Step 3: Substitute values...",
            "Step 4: Calculate the result...",
            "Step 5: State final answer with units."
          ]
        }
      ]
    }
  ]
}


**Questions to generate solutions for:**`;

async function generateSolutions(inputPath, outputPath) {
  try {
    console.log(`Reading combined questions: ${inputPath}`);
    const data = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

    if (!data.questions || !Array.isArray(data.questions)) {
      throw new Error('Invalid input JSON: missing questions array');
    }

    const totalParts = data.questions.reduce((sum, q) => sum + q.parts.length, 0);
    console.log(`\n=== SOLUTION GENERATION ===`);
    console.log(`Provider: ${getProviderName()}`);
    console.log(`Generating solutions for ${data.questions.length} questions (${totalParts} parts)...`);
    console.log('This may take 2-3 minutes...\n');

    // Process in batches to avoid token limits
    const BATCH_SIZE = 5; // Process 5 questions at a time
    const questionsWithSolutions = [];
    const failedBatches = [];

    for (let i = 0; i < data.questions.length; i += BATCH_SIZE) {
      const batch = data.questions.slice(i, i + BATCH_SIZE);
      const batchNum = Math.floor(i / BATCH_SIZE) + 1;
      console.log(`\nProcessing batch ${batchNum} (questions ${i + 1}-${Math.min(i + BATCH_SIZE, data.questions.length)})...`);

      try {
        const prompt = SOLUTION_GENERATION_PROMPT + '\n\n' + JSON.stringify({ questions: batch }, null, 2);

        // Call appropriate AI provider
        let responseText;
        if (AI_CONFIG.provider === 'gemini') {
          const model = genAI.getGenerativeModel({ model: AI_CONFIG.gemini.model });
          const result = await model.generateContent(prompt);
          responseText = result.response.text();
        } else {
          const response = await anthropic.messages.create({
            model: AI_CONFIG.anthropic.model,
            messages: [
              {
                role: 'user',
                content: prompt
              }
            ]
          });
          responseText = response.content[0].text;
        }

        // Save raw response for debugging
        const debugPath = outputPath.replace('.json', `-batch-${batchNum}-response.txt`);
        fs.writeFileSync(debugPath, responseText);

        let jsonText = responseText;
        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          jsonText = jsonMatch[0];
        }

        // Remove markdown code blocks if present
        jsonText = jsonText.replace(/```json\s*/g, '').replace(/```\s*$/g, '');

        let batchResult;
        try {
          batchResult = JSON.parse(jsonText);
        } catch (parseError) {
          console.log(`❌ JSON parse error: ${parseError.message}`);
          console.log(`Attempting automatic fix...`);

          // Save original problematic JSON
          const problemPath = outputPath.replace('.json', `-batch-${batchNum}-problem.json`);
          fs.writeFileSync(problemPath, jsonText);

          // Try to fix common LaTeX escaping issues
          let fixedJson = jsonText;

          // Fix 1: Invalid escape sequences like \{ and \} (should be \\{ and \\})
          fixedJson = fixedJson.replace(/([^\\])\\([{}])/g, '$1\\\\$2');
          fixedJson = fixedJson.replace(/^\\([{}])/gm, '\\\\$1');

          try {
            batchResult = JSON.parse(fixedJson);
            console.log(`✓ Fixed JSON automatically! Issue was LaTeX braces: \\{ → \\\\{`);
          } catch (secondError) {
            console.log(`⚠ Failed to auto-fix. Skipping batch ${batchNum}.`);
            console.log(`Saved problematic JSON to: ${problemPath}`);
            console.log(`Saved raw response to: ${debugPath}`);
            throw secondError; // Will be caught by outer try-catch
          }
        }

        questionsWithSolutions.push(...batchResult.questions);
        console.log(`✓ Batch ${batchNum} complete (${questionsWithSolutions.length}/${data.questions.length} questions processed)`);

      } catch (batchError) {
        console.log(`❌ Batch ${batchNum} FAILED - continuing with next batch...\n`);
        failedBatches.push({
          batchNum: batchNum,
          questionIndices: `${i + 1}-${Math.min(i + BATCH_SIZE, data.questions.length)}`,
          error: batchError.message
        });
      }
    }

    // Save whatever we got successfully
    const outputData = { questions: questionsWithSolutions };
    fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));

    // Save checkpoint (even if some batches failed, save progress)
    const outputDir = path.dirname(outputPath);
    saveCheckpoint(outputDir, 3, 'Generate solutions', {
      withSolutions: outputPath
    });

    console.log('\n=== SOLUTION GENERATION SUMMARY ===');
    console.log(`✓ Successfully processed: ${questionsWithSolutions.length}/${data.questions.length} questions`);

    if (failedBatches.length > 0) {
      console.log(`\n${failedBatches.length > 0 ? '⚠' : '✓'} Failed batches: ${failedBatches.length}`);

      // Save failed batches log
      const failedLogPath = outputPath.replace('.json', '-failed-batches.log');
      const logContent = failedBatches.map(fb =>
        `Batch ${fb.batchNum} (questions ${fb.questionIndices}):\n  Error: ${fb.error}\n`
      ).join('\n');
      fs.writeFileSync(failedLogPath, logContent);

      console.log(`\n╔════════════════════════════════════════════════════════════════╗`);
      console.log(`║          ⚠ BATCH FAILURES - MANUAL FIX REQUIRED               ║`);
      console.log(`╚════════════════════════════════════════════════════════════════╝`);
      console.log(``);
      console.log(`Partial results saved (${questionsWithSolutions.length}/${data.questions.length} questions)`);
      console.log(``);
      console.log(`Failed batches saved to problem files:`);
      failedBatches.forEach(fb => {
        const problemFile = outputPath.replace('.json', `-batch-${fb.batchNum}-problem.json`);
        console.log(`  - ${problemFile}`);
        console.log(`    Questions ${fb.questionIndices}`);
      });
      console.log(``);
      console.log(`HOW TO FIX:`);
      console.log(``);
      console.log(`  1. Open each problem file and fix the JSON errors`);
      console.log(`     Common fixes: escape quotes (\"), add missing braces {}`);
      console.log(``);
      console.log(`  2. Manually merge the fixed questions into:`);
      console.log(`     ${outputPath}`);
      console.log(``);
      console.log(`     - Open ${outputPath} in an editor`);
      console.log(`     - Open each fixed batch-X-problem.json`);
      console.log(`     - Copy the "questions" array from each fixed file`);
      console.log(`     - Paste into the main file's "questions" array`);
      console.log(``);
      console.log(`  3. Verify total question count:`);
      console.log(`     Should have ${data.questions.length} questions total`);
      console.log(``);
      console.log(`  4. Once all questions are in ${outputPath},`);
      console.log(`     re-run the same command to continue to step 4`);
      console.log(``);
    }

    console.log(`✓ Saved to: ${outputPath}`);

    // Sample output (only if we have results)
    if (questionsWithSolutions.length > 0) {
      console.log('\n=== SAMPLE SOLUTION ===');
      const samplePart = questionsWithSolutions[0].parts[0];
      console.log(`Question part: ${samplePart.text.substring(0, 80)}...`);
      console.log(`\navatarIntro: "${samplePart.avatarIntro}"`);
      console.log(`\nFirst 3 solution steps:`);
      samplePart.stepByStepGuideline.slice(0, 3).forEach((step, idx) => {
        console.log(`  ${idx + 1}. ${step.substring(0, 100)}...`);
      });
    } else {
      console.log('\n⚠ No questions were successfully processed.');
    }

    // Exit with error code if there were failures (so shell script knows to warn user)
    if (failedBatches.length > 0) {
      process.exit(1);
    }

    return outputData;

  } catch (error) {
    console.error('❌ Error generating solutions:', error.message);
    if (error.response) {
      console.error('API Response:', error.response);
    }
    process.exit(1);
  }
}

// Main execution
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Usage: node generate-solutions.js <input-json> <output-json>');
  console.log('Example: node generate-solutions.js combined-questions.json with-solutions.json');
  process.exit(1);
}

const inputPath = path.resolve(args[0]);
const outputPath = path.resolve(args[1]);

if (!fs.existsSync(inputPath)) {
  console.error(`❌ Input file not found: ${inputPath}`);
  process.exit(1);
}

generateSolutions(inputPath, outputPath);
