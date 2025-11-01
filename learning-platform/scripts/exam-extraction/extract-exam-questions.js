#!/usr/bin/env node

/**
 * STEP 1: Extract ALL exam questions from PDF to simple JSON
 * NO filtering - extracts everything including graph questions
 *
 * Usage: node extract-exam-questions.js <pdf-path> <output-json-path>
 * Example: node extract-exam-questions.js ../../public/curriculum-content/s3-math-exponential-logarithm-exam-practice.pdf raw-questions.json
 */

import Anthropic from '@anthropic-ai/sdk';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleAIFileManager } from '@google/generative-ai/server';
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
const fileManager = AI_CONFIG.provider === 'gemini' ? new GoogleAIFileManager(AI_CONFIG.gemini.apiKey) : null;

const EXTRACTION_PROMPT = `Extract ALL exam questions from this PDF into a simple JSON structure.

**IMPORTANT: Extract EVERYTHING - do NOT filter or skip any questions.**

Output format: (Strictly follow this JSON structure exactly. DO NOT create new fields.) 
**Use sub_parts for nested questions like (a)(i), (a)(ii) to preserve hierarchy.**
{
  "questions": [
    {
      "question": "Main question stem/context (full text except the metadata information. Do NOT include metadata like '28. 2016/ΕΟΥ/P2/Q6(Modified) [GDC is allowed]')",
      "parts": [
        {
          "label": "a",
          "text": "Part a text here",
          "answer": "Final answer if visible in PDF"
        },
        {
          "label": "b",
          "text": "For the graph of f,",
          "sub_parts": [
            {
              "label": "b-i",
              "text": "find the x-intercept",
              "answer": "$x = -1.98$"
            },
            {
              "label": "b-ii",
              "text": "find the y-intercept",
              "answer": "$y = 4.39$"
            }
          ]
        }
      ]
    }
  ]
}


**═══════════════════════════════════════════════════════════════**
**CRITICAL: FORMATTING RULES - Follow These EXACTLY to Avoid Errors**
**═══════════════════════════════════════════════════════════════**

**RULE 1: UNICODE FIRST (Prevents 90% of JSON errors!)**

Use Unicode characters instead of LaTeX whenever possible:

✓ Greek letters: θ, α, β, γ, π, Δ, Σ
✗ DON'T: $\\theta$, $\\alpha$, $\\pi$

✓ Operators: ×, ÷, ±, ≈, ≠, ≤, ≥
✗ DON'T: $\\times$, $\\div$, $\\pm$

✓ Superscripts: x², x³, 10⁴
✗ DON'T: $x^2$, $x^3$

✓ Degrees: 30°, 45°, 90°
✗ DON'T: $30^{\\circ}$

✓ Common fractions: ½, ¼, ¾, ⅓, ⅔
✗ DON'T: $\\frac{1}{2}$, $\\frac{1}{4}$

**RULE 2: LaTeX ONLY for Complex Expressions**

Use $...$ LaTeX ONLY when Unicode cannot express it:

✓ Custom fractions: $\\frac{x+1}{2x-3}$, $\\frac{13}{27}$
✓ Complex expressions: $\\sin^2(θ) + \\cos^2(θ) = 1$
✓ Nested operations: $\\sqrt{x^2 + y^2}$
✓ Logarithms: $\\log_2(x+3)$, $\\ln(2x+4)$

**RULE 3: JSON Escaping (CRITICAL)**

- Single backslash in JSON: "\\frac" not "\\\\frac" and not "\frac"
- Currency outside $: "\\$1000" not "$\\$1000$"
- NO newlines in strings - use spaces
- Escape quotes: \\" for literal quote
- NO trailing commas

✓ $f(x)=\\ln(2x+4)+3$
✗ $f(x)=\ln(2x+4)+3$
**RULE 4: Quick Decision Tree**

Is it a simple symbol (θ, π, ², °)? → Use Unicode
Is it a common fraction (½, ¼, ¾)? → Use Unicode
Is it complex/custom? → Use LaTeX $...$

**Examples:**

✓ CORRECT:
  "text": "Find θ when x² = 9 and angle is 30°"
  "text": "The ratio is ½ and distance is πr²"
  "text": "Solve $\\frac{x+1}{2x-3} = \\frac{1}{2}$"
  "text": "Temperature is $T = 50 + 16e^{-kt}$"

✗ INCORRECT:
  "text": "Find $\\theta$ when $x^2$ = 9"  ← Use Unicode!
  "text": "The ratio is $\\frac{1}{2}$"    ← Use Unicode ½!
  "text": "Angle is $30^{\\circ}$"         ← Use Unicode 30°!

**═══════════════════════════════════════════════════════════════**

**Extraction Rules:**

1. Preserve multi-part structure exactly:
   - (a), (b), (c) as separate parts
   - (a)(i), (a)(ii) with sub_parts and labels "a-i", "a-ii"

2. Extract main question context ONCE in "question" field
   - Don't repeat context in each part
   - Exclude metadata like "28. 2016/EOY/P2/Q6"

3. For answers:
   - Extract if visible in PDF
   - If not visible, leave as empty string ""

4. Extract EVERYTHING - include all questions even if they involve:
   - Sketching graphs
   - Drawing diagrams
   - Plotting points
   - (Filtering happens in next step)

5. Preserve exact wording from PDF

**OUTPUT: Valid JSON only, no markdown blocks, no extra text**`;

async function extractWithClaude(pdfPath) {
  console.log('Using Claude Sonnet 4 for extraction...');

  const pdfBuffer = fs.readFileSync(pdfPath);
  const pdfBase64 = pdfBuffer.toString('base64');

  const response = await anthropic.messages.create({
    model: AI_CONFIG.anthropic.model,
    max_tokens: 16000,
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'document',
            source: {
              type: 'base64',
              media_type: 'application/pdf',
              data: pdfBase64
            }
          },
          {
            type: 'text',
            text: EXTRACTION_PROMPT
          }
        ]
      }
    ]
  });

  return response.content[0].text;
}

async function extractWithGemini(pdfPath) {
  console.log('Using Gemini Flash 2.5 for extraction...');
  console.log('Step 1: Uploading PDF to Gemini File API...');

  // Upload PDF to Gemini
  const uploadResult = await fileManager.uploadFile(pdfPath, {
    mimeType: 'application/pdf',
    displayName: path.basename(pdfPath)
  });

  console.log(`✓ PDF uploaded: ${uploadResult.file.displayName}`);
  console.log('Step 2: Processing with Gemini...');

  const model = genAI.getGenerativeModel({ model: AI_CONFIG.gemini.model });

  const result = await model.generateContent([
    {
      fileData: {
        mimeType: uploadResult.file.mimeType,
        fileUri: uploadResult.file.uri
      }
    },
    { text: EXTRACTION_PROMPT }
  ]);

  return result.response.text();
}

async function extractQuestionsFromPDF(pdfPath, outputPath) {
  try {
    console.log(`\n=== EXAM QUESTION EXTRACTION ===`);
    console.log(`Provider: ${getProviderName()}`);
    console.log(`PDF: ${pdfPath}\n`);

    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
      console.log(`Created output directory: ${outputDir}\n`);
    }

    console.log('Reading PDF...');
    console.log('This may take 1-2 minutes depending on PDF size...\n');

    // Call appropriate AI provider
    const responseText = AI_CONFIG.provider === 'gemini'
      ? await extractWithGemini(pdfPath)
      : await extractWithClaude(pdfPath);

    console.log('Raw response received. Parsing JSON...\n');

    // Save raw response for debugging
    const debugPath = outputPath.replace(/\.json$/, '-response.txt');
    fs.writeFileSync(debugPath, responseText);
    console.log(`Debug: Saved raw response to ${debugPath}`);

    // Try to extract JSON from response (in case AI adds extra text)
    let jsonText = responseText;
    const jsonMatch = responseText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      jsonText = jsonMatch[0];
    }

    // Clean common JSON issues from AI responses
    console.log('Cleaning JSON...');

    // Remove markdown code blocks if present
    jsonText = jsonText.replace(/```json\s*/g, '').replace(/```\s*$/g, '');

    // Fix common escape issues in LaTeX
    // The AI should output single backslash, but sometimes it adds extra escaping
    // We need to be careful not to break valid escape sequences

    let extractedData;
    try {
      extractedData = JSON.parse(jsonText);
    } catch (firstError) {
      console.log(`First parse failed: ${firstError.message}`);
      console.log('Attempting to fix common JSON issues...\n');

      // Save problematic JSON for inspection
      const problemPath = outputPath.replace('.json', '-problem.json');
      fs.writeFileSync(problemPath, jsonText);
      console.log(`Debug: Saved problematic JSON to ${problemPath}`);

      // Try various fixes
      let fixed = jsonText;
      let fixApplied = false;

      try {
        // Attempt 1: Fix LaTeX braces \{ and \} → \\{ and \\}
        fixed = fixed.replace(/([^\\])\\([{}])/g, '$1\\\\$2');
        fixed = fixed.replace(/^\\([{}])/gm, '\\\\$1');
        extractedData = JSON.parse(fixed);
        console.log('✓ Fixed by escaping LaTeX braces');
        fixApplied = true;
      } catch (e) {
        // Continue to next fix
      }

      if (!fixApplied) {
        try {
          // Attempt 2: Fix unescaped newlines in strings
          fixed = jsonText.replace(/([^\\])\n/g, '$1\\n');
          extractedData = JSON.parse(fixed);
          console.log('✓ Fixed by escaping newlines');
          fixApplied = true;
        } catch (e) {
          // Continue to next fix
        }
      }

      if (!fixApplied) {
        console.log('\n❌ JSON is too malformed to auto-fix.');
        console.log('\n╔════════════════════════════════════════════════════════════════╗');
        console.log('║          MANUAL FIX REQUIRED                                   ║');
        console.log('╚════════════════════════════════════════════════════════════════╝');
        console.log('');
        console.log('Problem files saved:');
        console.log(`  - ${problemPath}`);
        console.log(`  - ${debugPath}`);
        console.log('');
        console.log('TO FIX:');
        console.log('  1. Open and edit the problem JSON file:');
        console.log(`     ${problemPath}`);
        console.log('');
        console.log('  2. Fix JSON syntax errors (common: unescaped quotes, braces)');
        console.log('');
        console.log('  3. Run the same command again');
        console.log('     The pipeline will auto-detect the fixed file and normalize it');
        console.log('');
        throw new Error(`JSON parsing failed. Fix ${problemPath} and re-run the same command`);
      }
    }

    // Validate structure
    if (!extractedData.questions || !Array.isArray(extractedData.questions)) {
      throw new Error('Invalid JSON structure: missing questions array');
    }

    // Normalize structure: flatten sub_parts into main parts array
    console.log('Normalizing question structure...');
    extractedData.questions = extractedData.questions.map(q => {
      if (!q.parts || !Array.isArray(q.parts)) {
        return q;
      }

      const flattenedParts = [];
      q.parts.forEach(part => {
        if (part.sub_parts && Array.isArray(part.sub_parts)) {
          // Part has sub_parts - flatten them
          part.sub_parts.forEach(subPart => {
            flattenedParts.push({
              label: subPart.label,
              text: part.text + ' ' + subPart.text,
              answer: subPart.answer || '',
              parentLabel: part.label, // Track hierarchy
              parentText: part.text
            });
          });
        } else {
          // Regular part - add as is
          flattenedParts.push({
            label: part.label,
            text: part.text,
            answer: part.answer || ''
          });
        }
      });

      return {
        question: q.question,
        parts: flattenedParts
      };
    });

    console.log(`✓ Successfully extracted ${extractedData.questions.length} questions`);
    console.log(`✓ Total parts: ${extractedData.questions.reduce((sum, q) => sum + q.parts.length, 0)}`);

    // Write to output file
    fs.writeFileSync(outputPath, JSON.stringify(extractedData, null, 2));
    console.log(`✓ Saved to: ${outputPath}\n`);

    // Save checkpoint
    saveCheckpoint(outputDir, 1, 'Extract questions', {
      rawQuestions: outputPath
    });

    // Print summary
    console.log('=== EXTRACTION SUMMARY ===');
    extractedData.questions.forEach((q, idx) => {
      console.log(`\nQuestion ${idx + 1}: ${q.parts.length} parts`);
      console.log(`  Context: ${q.question.substring(0, 80)}...`);
      q.parts.forEach(part => {
        const hasAnswer = part.answer && part.answer.trim() !== '';
        console.log(`  (${part.label}) ${hasAnswer ? '✓' : '✗'} ${part.text.substring(0, 60)}...`);
      });
    });

    return extractedData;

  } catch (error) {
    console.error('❌ Error extracting questions:', error.message);
    if (error.response) {
      console.error('API Response:', error.response);
    }
    process.exit(1);
  }
}

// Main execution
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Usage: node extract-exam-questions.js <pdf-path> <output-json-path>');
  console.log('Example: node extract-exam-questions.js ./exam.pdf ./raw-questions.json');
  process.exit(1);
}

const pdfPath = path.resolve(args[0]);
const outputPath = path.resolve(args[1]);

if (!fs.existsSync(pdfPath)) {
  console.error(`❌ PDF file not found: ${pdfPath}`);
  process.exit(1);
}

extractQuestionsFromPDF(pdfPath, outputPath);
