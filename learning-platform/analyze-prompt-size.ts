/**
 * Detailed analysis of evaluator prompt size
 */

import { newPromptResolver } from './src/prompts/newPromptResolver';
import type { PromptContext } from './src/prompts/newPromptResolver';

function estimateTokens(text: string): number {
  return Math.ceil(text.length / 4);
}

const sampleContext: PromptContext = {
  topicId: 's3-math-trigonometry-basic-ratios',
  currentSection: 'triangle-labeling',
  currentProblemText: 'In the right triangle ABC with right angle at C, and angle A = 35°, which side is the hypotenuse?',
  currentProblemId: 'trig-001',
  studentResponse: 'The hypotenuse is the side AB because it is opposite the right angle.',
  hintsGiven: 0,
  studentAttempts: 1,
  masteredSections: [],
  recentHistory: 'User: Hello\nAssistant: Welcome to trigonometry!',
  sectionStats: {
    problemsAttempted: 1,
    correctAnswers: 0,
    hintsUsed: 0
  }
};

const prompt = newPromptResolver.resolveEvaluatorAgent(sampleContext);

// Split by sections
const sections = [
  'ROLE:',
  'RESPONSIBILITIES:',
  'CAPABILITIES:',
  'CONSTRAINTS:',
  'DECISION MATRIX:',
  'HINT PROGRESSION STRATEGY:',
  'TOPIC OVERVIEW:',
  'CURRENT SECTION (DETAILED):',
  'INSTRUCTION SCHEMAS:',
  'EVALUATOR OUTPUT SCHEMA:',
  'CURRENT PROBLEM:',
  'QUANTITATIVE DATA:',
  'RECENT CONVERSATION:',
  'YOUR TASK:'
];

console.log('\n📊 DETAILED SECTION BREAKDOWN:\n');
console.log('Section'.padEnd(35) + 'Chars'.padEnd(10) + 'Est. Tokens');
console.log('-'.repeat(60));

let lastIndex = 0;
sections.forEach((section, i) => {
  const nextSection = sections[i + 1];
  const sectionStart = prompt.indexOf(section, lastIndex);
  if (sectionStart === -1) {
    console.log(`${section.padEnd(35)}${'N/A'.padEnd(10)}N/A`);
    return;
  }

  const sectionEnd = nextSection ? prompt.indexOf(nextSection, sectionStart) : prompt.length;
  const sectionContent = prompt.substring(sectionStart, sectionEnd);
  const chars = sectionContent.length;
  const tokens = estimateTokens(sectionContent);

  console.log(`${section.padEnd(35)}${chars.toString().padEnd(10)}~${tokens}`);
  lastIndex = sectionEnd;
});

console.log('-'.repeat(60));
console.log(`${'TOTAL'.padEnd(35)}${prompt.length.toString().padEnd(10)}~${estimateTokens(prompt)}`);

// Show full prompt to file
console.log('\n💾 Full prompt saved to: evaluator-prompt-full.txt');
const fs = require('fs');
fs.writeFileSync('evaluator-prompt-full.txt', prompt);
