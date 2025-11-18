/**
 * Question Bank Solution Generator
 * Generates AI-powered step-by-step solutions for exam questions
 */

import { SolutionGeneratorService } from '../../src/services/questionBank/solutionGeneratorService';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config({ path: path.join(__dirname, '../../.env') });

const GEMINI_API_KEY = process.env.VITE_GEMINI_API_KEY!;

if (!GEMINI_API_KEY) {
  console.error('ERROR: VITE_GEMINI_API_KEY not found');
  process.exit(1);
}

// ============================================
// CONFIGURATION - CHANGE THIS FOR NEW PAPERS
// ============================================
const EXAM_CONFIG = {
  school: 'anderson',
  year: 2024,
  paper: 'Paper 1',
  paperCode: 'p1'
};

// Load syllabus
const syllabusPath = path.join(__dirname, '../../public/curriculum-content/o-level/o-level-maths-syllabus.json');
const syllabus = JSON.parse(fs.readFileSync(syllabusPath, 'utf-8'));

// Load raw questions (now with topicId already assigned)
const rawQuestionsPath = path.join(__dirname, `../../public/curriculum-content/o-level/exam-papers/raw/${EXAM_CONFIG.school}-${EXAM_CONFIG.year}-paper-${EXAM_CONFIG.paperCode.replace('p', '')}.json`);
const rawData = JSON.parse(fs.readFileSync(rawQuestionsPath, 'utf-8'));

function getTopicInfo(topicId: string): { topic: string; content: string[] } {
  for (const area of syllabus.subject_content) {
    for (const topic of area.topics) {
      if (topic.topicId === topicId) {
        return {
          topic: topic.topic,
          content: topic.content
        };
      }
    }
  }
  return { topic: 'Unknown', content: [] };
}

async function processQuestion(question: any, service: SolutionGeneratorService) {
  const questionNum = question.questionNumber;
  const topicId = question.topicId;

  // Skip questions without topicId assigned
  if (!topicId || topicId === '') {
    console.log(`⚠️  Q${questionNum}: No topicId assigned, skipping`);
    return null;
  }

  // Get topic info from syllabus
  const { topic, content } = getTopicInfo(topicId);

  // Generate questionId: {topicId}-{school}-{year}-{paper}-q{number}
  const questionId = `${topicId}-${EXAM_CONFIG.school}-${EXAM_CONFIG.year}-${EXAM_CONFIG.paperCode}-q${questionNum}`;

  console.log(`\n${'='.repeat(70)}`);
  console.log(`Processing Q${questionNum}: ${questionId}`);
  console.log(`Topic: ${topicId} - ${topic}`);
  console.log(`Parts: ${question.parts.length}`);
  console.log(`${'='.repeat(70)}`);

  try {
    // Generate solutions
    const topicInfo = {
      topicId: topicId,
      topic: topic,
      content: content
    };

    const startTime = Date.now();
    const solutions = await service.generateSolution(question, topicInfo, questionId);
    const duration = ((Date.now() - startTime) / 1000).toFixed(1);

    console.log(`✓ Solutions generated in ${duration}s`);

    // Merge with original question data
    const enhancedQuestion = {
      questionId,
      questionNumber: question.questionNumber,
      topicId: mapping.topicId,
      paper: EXAM_CONFIG.paper,
      stem: question.stem,
      hasDiagram: question.hasDiagram,
      diagram: null,
      parts: question.parts.map((part: any) => {
        // For single-part questions with null partId, match by index
        let solutionPart;
        if (question.parts.length === 1 && part.partId === null) {
          solutionPart = solutions.parts[0]; // Take first (and only) solution
        } else {
          solutionPart = solutions.parts.find((p: any) => p.partId === part.partId);
        }

        return {
          ...part,
          solution: solutionPart?.solution || null
        };
      }),
      totalMarks: question.totalMarks
    };

    return enhancedQuestion;

  } catch (error) {
    console.error(`✗ Error processing Q${questionNum}:`, (error as Error).message);
    return null;
  }
}

async function main() {
  console.log('='.repeat(70));
  console.log(`QUESTION BANK SOLUTION GENERATOR`);
  console.log(`Exam: ${EXAM_CONFIG.school.toUpperCase()} ${EXAM_CONFIG.year} ${EXAM_CONFIG.paper}`);
  console.log('='.repeat(70));
  console.log();

  // Filter text-only questions
  const textOnlyQuestions = rawData.questions.filter((q: any) => !q.hasDiagram);

  console.log(`Total questions: ${rawData.questions.length}`);
  console.log(`Text-only questions: ${textOnlyQuestions.length}`);
  console.log(`Questions with diagrams: ${rawData.questions.length - textOnlyQuestions.length} (will skip)`);
  console.log();

  const service = new SolutionGeneratorService(GEMINI_API_KEY);
  const processedQuestions: any[] = [];
  const errors: { questionNumber: number, error: string }[] = [];

  let processed = 0;
  let skipped = 0;
  let failed = 0;

  for (const question of textOnlyQuestions) {
    const result = await processQuestion(question, service);

    if (result) {
      processedQuestions.push(result);
      processed++;
    } else if (!question.topicId || question.topicId === '') {
      skipped++;
    } else {
      errors.push({
        questionNumber: question.questionNumber,
        error: 'Processing failed'
      });
      failed++;
    }

    // Small delay to avoid rate limits
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  // Save results
  const outputDir = path.join(__dirname, '../../public/curriculum-content/o-level/exam-papers/processed');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputFilename = `${EXAM_CONFIG.school}-${EXAM_CONFIG.year}-${EXAM_CONFIG.paperCode}-complete.json`;
  const outputPath = path.join(outputDir, outputFilename);
  const output = {
    metadata: {
      school: EXAM_CONFIG.school.toUpperCase(),
      year: EXAM_CONFIG.year,
      paper: EXAM_CONFIG.paper,
      processedDate: new Date().toISOString(),
      totalQuestions: textOnlyQuestions.length,
      successfullyProcessed: processed,
      failed: failed,
      skipped: skipped
    },
    questions: processedQuestions
  };

  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

  // Summary
  console.log();
  console.log('='.repeat(70));
  console.log('BATCH PROCESSING COMPLETE');
  console.log('='.repeat(70));
  console.log();
  console.log(`✓ Successfully processed: ${processed}/${textOnlyQuestions.length}`);
  console.log(`⚠ Skipped (no mapping):   ${skipped}/${textOnlyQuestions.length}`);
  console.log(`✗ Failed:                 ${failed}/${textOnlyQuestions.length}`);
  console.log();
  console.log(`Output saved to: ${outputPath.replace(process.cwd(), '.')}`);
  console.log();

  if (errors.length > 0) {
    console.log('ERRORS:');
    errors.forEach(e => {
      console.log(`  Q${e.questionNumber}: ${e.error}`);
    });
    console.log();
  }

  console.log('='.repeat(70));
}

main().catch(console.error);
