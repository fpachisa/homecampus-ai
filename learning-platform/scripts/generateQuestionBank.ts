/**
 * Question Bank Generator Script
 * Uses Gemini to generate curated question banks for pre-generated topics
 * Dynamically imports topic configurations from the prompt library
 *
 * Usage: npm run generate-question-bank <topicId> <numQuestionsPerSection>
 * Example: npm run generate-question-bank s1-math-perimeter-area-composite 3
 *
 * Or directly: npx tsx scripts/generateQuestionBank.ts s1-math-perimeter-area-composite 3
 */

import { config } from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';
import { S1_MATH_PERIMETER_AREA_SUBTOPICS } from '../src/prompt-library/subjects/mathematics/secondary/s1-perimeter-area';
// Note: tsx handles .ts imports automatically, no need for .ts or .js extension

// Load environment variables from .env file
config();

/**
 * Load topic configuration from prompt library
 */
function loadTopicConfig(topicId: string): any {
  // Map of all available topic configs
  const ALL_TOPICS: Record<string, any> = {
    ...S1_MATH_PERIMETER_AREA_SUBTOPICS,
    // Add more subject imports as they become available
    // ...S1_MATH_ALGEBRA_SUBTOPICS,
  };

  const topicConfig = ALL_TOPICS[topicId];

  if (!topicConfig) {
    const availableTopics = Object.keys(ALL_TOPICS).join(', ');
    throw new Error(
      `Topic configuration not found for: ${topicId}\n\n` +
      `Available topics:\n${availableTopics}\n\n` +
      `Make sure the topic exists in the prompt library.`
    );
  }

  if (!topicConfig.progressionStructure || !topicConfig.progressionStructure.sections) {
    throw new Error(`Topic ${topicId} is missing progressionStructure or sections`);
  }

  return {
    displayName: topicConfig.displayName,
    topicName: topicConfig.topicName,
    learningObjectives: topicConfig.learningObjectives || [],
    sections: topicConfig.progressionStructure.sections.map((section: any) => ({
      id: section.id,
      title: section.title,
      difficulty: section.difficulty,
      learningObjectives: section.learningObjectives || [],
      relevantFormulas: section.relevantFormulas || [],
      masterySignals: section.masterySignals
    }))
  };
}

/**
 * Load existing progress from output file
 * Returns existing sections and list of missing section indices
 */
function loadExistingProgress(
  outputPath: string,
  totalSections: number
): { existingSections: any[]; missingSectionIndices: number[] } {
  // If file doesn't exist, all sections are missing
  if (!existsSync(outputPath)) {
    return {
      existingSections: [],
      missingSectionIndices: Array.from({ length: totalSections }, (_, i) => i)
    };
  }

  try {
    // Read and parse the TypeScript file
    const fileContent = readFileSync(outputPath, 'utf-8');

    // Extract the question bank array using regex
    // Looking for: export const NAME: QuestionBank = [...]
    const match = fileContent.match(/export const \w+: QuestionBank = (\[[\s\S]*\]);/);

    if (!match) {
      console.warn('⚠️  Could not parse existing file. Starting fresh.');
      return {
        existingSections: [],
        missingSectionIndices: Array.from({ length: totalSections }, (_, i) => i)
      };
    }

    // Parse the JSON array
    const questionBank = JSON.parse(match[1]) as any[];

    // Extract existing section indices
    const existingIndices = questionBank.map(section => section.sectionIndex);

    // Calculate missing indices
    const allIndices = Array.from({ length: totalSections }, (_, i) => i);
    const missingIndices = allIndices.filter(i => !existingIndices.includes(i));

    return {
      existingSections: questionBank,
      missingSectionIndices: missingIndices
    };
  } catch (error) {
    console.warn(`⚠️  Error reading existing file: ${error}. Starting fresh.`);
    return {
      existingSections: [],
      missingSectionIndices: Array.from({ length: totalSections }, (_, i) => i)
    };
  }
}

/**
 * Save question bank incrementally (after each section)
 * Sorts sections by index before saving
 */
function saveQuestionBankIncremental(
  outputPath: string,
  topicId: string,
  topicConfig: any,
  questionBank: any[],
  questionsPerSection: number
): void {
  // Sort by sectionIndex to maintain order
  const sortedBank = [...questionBank].sort((a, b) => a.sectionIndex - b.sectionIndex);

  // Generate export name
  const exportName = topicId
    .split('-')
    .map(word => word.toUpperCase())
    .join('_') + '_QUESTION_BANK';

  // Generate TypeScript file content
  const outputContent = `import { QuestionBank } from './types';

/**
 * Pre-generated question bank for ${topicConfig.displayName}
 * Generated using Gemini
 * ${topicConfig.sections.length} sections with ${questionsPerSection} questions each
 *
 * Topic: ${topicConfig.topicName}
 */
export const ${exportName}: QuestionBank = ${JSON.stringify(sortedBank, null, 2)};
`;

  // Write to file
  writeFileSync(outputPath, outputContent, 'utf-8');
}

/**
 * Save error response when JSON parsing fails
 */
function saveErrorResponse(
  topicId: string,
  sectionIndex: number,
  responseText: string,
  error: any
): void {
  const errorPath = join(
    process.cwd(),
    'src/data/learn/question-banks',
    `${topicId}-section${sectionIndex}-error.txt`
  );

  const errorContent = `Error generating questions for section ${sectionIndex}
Topic ID: ${topicId}
Error: ${error.message}

Raw Response:
${responseText}
`;

  writeFileSync(errorPath, errorContent, 'utf-8');
  console.error(`❌ JSON parse failed for section ${sectionIndex}. Error saved to: ${errorPath}`);
}

interface GeneratedQuestion {
  questionId: string;
  problemStatement: string;
  imagePath: string;
  correctAnswer: number | string;
  stepByStepSolution: Array<{
    stepNumber: number;
    text: string;
  }>;
}

/**
 * Generate questions for a specific section using Gemini
 * Returns both questions and raw response for error handling
 */
async function generateSectionQuestions(
  gemini: GoogleGenAI,
  topicConfig: any,
  sectionIndex: number,
  numQuestions: number
): Promise<{ questions: GeneratedQuestion[]; rawResponse: string }> {
  const section = topicConfig.sections[sectionIndex];

  const prompt = `You are an expert mathematics educator creating practice problems for Secondary 1 students.

SUBTOPIC OVERVIEW:
{
  "name": "${topicConfig.displayName}",
  "description": "${topicConfig.topicName}",
  "learningObjectives": ${JSON.stringify(topicConfig.learningObjectives || [], null, 4)}
}

CURRENT SECTION (Generate questions for THIS section ONLY):
Section ${sectionIndex + 1} of ${topicConfig.sections.length}: ${section.title} (${section.difficulty} difficulty)

LEARNING OBJECTIVES FOR THIS SECTION:
${section.learningObjectives.map((obj: string, i: number) => `${i + 1}. ${obj}`).join('\n')}

RELEVANT FORMULAS FOR THIS SECTION:
${Array.isArray(section.relevantFormulas) ? section.relevantFormulas.join('\n') : section.relevantFormulas}

MASTERY CRITERIA FOR THIS SECTION:
${section.masterySignals}

TASK: Generate ${numQuestions} unique practice problems for this section.

REQUIREMENTS:
1. Each problem should test that section's learning objectives only. DO NOT mix the learning objectives of previous or next section.
2. Problems should increase in complexity within the section. Start with basic problems and progress to more difficult ones.
3. Problems should vary in context (different shapes, scenarios)
4. Include proper mathematical notation
5. Provide step-by-step solutions that explain the "why" not just "what"
6. Use realistic dimensions (whole numbers or simple decimals)

OUTPUT FORMAT:
Return ONLY a valid JSON array with this exact structure:

[
  {
    "questionId": "s1-composite-q1-s${sectionIndex + 1}",
    "problemStatement": "Clear problem text with $\\\\LaTeX$ if ABSOLUTELY needed. Use unicode for symbols where possible and NEVER use LaTeX for plain text fomatting.",
    "correctAnswer": 48,
    "stepByStepSolution": [
      {
        "stepNumber": 1,
        "text": "Explain the first step (what to do and why)"
      },
      {
        "stepNumber": 2,
        "text": "Show the calculation with explanation"
      }
    ]
  }
]

IMPORTANT:
- Use ONE backslash for LaTeX (e.g., $\\\\frac$ for fractions)
- correctAnswer should be a number (use decimal if needed)
- Each solution should have 3-5 clear steps
- Make problems realistic and educational
- Do NOT include markdown code blocks, ONLY the JSON array

Generate ${numQuestions} problems now:`;

  console.log(`prompt: ${prompt}`);
  console.log(`\n🤖 Generating ${numQuestions} questions for Section ${sectionIndex + 1}: ${section.title}...`);

  const result = await gemini.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt
  });
  const response = result.text;

  console.log('📥 Raw response length:', response?.length);

  // Extract JSON from response (handle potential markdown wrappers)
  let jsonText = (response || '').trim();
  if (jsonText.startsWith('```json')) {
    jsonText = jsonText.replace(/```json\n?/, '').replace(/\n?```$/, '');
  } else if (jsonText.startsWith('```')) {
    jsonText = jsonText.replace(/```\n?/, '').replace(/\n?```$/, '');
  }

  // Parse JSON and add image paths
  try {
    const questions = JSON.parse(jsonText) as any[];
    const questionsWithImages = questions.map((q, index) => ({
      ...q,
      imagePath: `/assets/images/composite-figures/q${index + 1}-section${sectionIndex + 1}.svg`
    }));

    return {
      questions: questionsWithImages,
      rawResponse: response || ''
    };
  } catch (error: any) {
    // Attach raw response to error for debugging
    error.rawResponse = response;
    console.error('❌ Failed to parse JSON response');
    console.error('Response preview:', (response || '').substring(0, 500));
    throw error;
  }
}

/**
 * Generate complete question bank for a topic
 * With smart resume, incremental saving, and error resilience
 */
async function generateQuestionBank(
  topicId: string,
  questionsPerSection: number = 3
): Promise<void> {
  const apiKey = process.env.VITE_GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('VITE_GEMINI_API_KEY environment variable not set');
  }

  console.log('🔍 Loading topic configuration from prompt library...');
  const topicConfig = loadTopicConfig(topicId);
  console.log(`✅ Loaded config for: ${topicConfig.displayName}`);
  console.log(`📖 Topic: ${topicConfig.topicName}`);
  console.log(`📚 Sections found:`, topicConfig.sections.map((s: any) => s.title).join(', '));

  // Calculate output path
  const outputPath = join(
    process.cwd(),
    'src/data/learn/question-banks',
    `${topicId}.ts`
  );

  // Load existing progress
  const { existingSections, missingSectionIndices } = loadExistingProgress(
    outputPath,
    topicConfig.sections.length
  );

  // Show resume status
  if (existingSections.length > 0) {
    const existingIndices = existingSections.map(s => s.sectionIndex);
    console.log(`\n📂 Found existing progress:`);
    console.log(`   ✅ Completed sections: [${existingIndices.join(', ')}]`);
    console.log(`   🔄 Will generate missing sections: [${missingSectionIndices.join(', ')}]`);
  } else {
    console.log(`\n🎯 Starting fresh - no existing progress found`);
  }

  console.log(`\n📊 Generation Plan:`);
  console.log(`   • Total sections: ${topicConfig.sections.length}`);
  console.log(`   • Sections to generate: ${missingSectionIndices.length}`);
  console.log(`   • Questions per section: ${questionsPerSection}`);
  console.log(`   • New questions to generate: ${missingSectionIndices.length * questionsPerSection}\n`);

  // Initialize with existing data
  const questionBank = [...existingSections];
  const gemini = new GoogleGenAI({ apiKey });
  const errors: number[] = [];

  // Generate questions for missing sections only
  for (const sectionIndex of missingSectionIndices) {
    const section = topicConfig.sections[sectionIndex];

    try {
      console.log(`🤖 Generating Section ${sectionIndex + 1}/${topicConfig.sections.length}: ${section.title}...`);

      const { questions, rawResponse } = await generateSectionQuestions(
        gemini,
        topicConfig,
        sectionIndex,
        questionsPerSection
      );

      // Add to question bank
      questionBank.push({
        sectionIndex,
        questions
      });

      // Save incrementally
      saveQuestionBankIncremental(outputPath, topicId, topicConfig, questionBank, questionsPerSection);

      console.log(`✅ Section ${sectionIndex + 1} complete: ${questions.length} questions generated and saved`);

      // Add delay to avoid rate limiting (skip on last section)
      const isLastSection = sectionIndex === missingSectionIndices[missingSectionIndices.length - 1];
      if (!isLastSection) {
        console.log('⏳ Waiting 2 seconds before next section...\n');
        await new Promise(resolve => setTimeout(resolve, 2000));
      }

    } catch (error: any) {
      // Check if it's a JSON parse error
      if (error instanceof SyntaxError || error.message?.includes('JSON')) {
        console.error(`❌ JSON parse error for section ${sectionIndex + 1}`);

        // Save the raw response from error object
        const rawResponse = error.rawResponse || 'Raw response not available';
        saveErrorResponse(topicId, sectionIndex, rawResponse, error);
        errors.push(sectionIndex);

        console.log(`⚠️  Continuing to next section...\n`);
        continue; // Continue to next section
      } else {
        // Fatal error (network, API key, etc.)
        console.error(`❌ Fatal error generating section ${sectionIndex + 1}:`, error);
        throw error;
      }
    }
  }

  // Final summary
  console.log(`\n✨ Question bank generation complete!`);
  console.log(`📁 Output: ${outputPath}`);
  console.log(`\n📋 Summary:`);
  console.log(`   • Total sections: ${topicConfig.sections.length}`);
  console.log(`   • Completed sections: ${questionBank.length}`);
  console.log(`   • Total questions: ${questionBank.reduce((sum, section) => sum + section.questions.length, 0)}`);

  if (errors.length > 0) {
    console.log(`\n⚠️  Warning: ${errors.length} section(s) failed due to JSON parse errors:`);
    console.log(`   Failed sections: [${errors.join(', ')}]`);
    console.log(`   • Check error files in src/data/learn/question-banks/`);
    console.log(`   • Rerun the script to retry failed sections`);
  } else {
    console.log(`   • All sections generated successfully!`);
  }

  console.log(`\n💡 Next steps:`);
  console.log(`   • Review generated questions`);
  console.log(`   • Create images for visual problems`);
  if (errors.length > 0) {
    console.log(`   • Rerun script to retry failed sections`);
  }
}

// CLI execution
const topicId = process.argv[2] || 's1-math-perimeter-area-composite';
const questionsPerSection = parseInt(process.argv[3]) || 3;

generateQuestionBank(topicId, questionsPerSection)
  .then(() => {
    console.log('\n✅ Done!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  });
