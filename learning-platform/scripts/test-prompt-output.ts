/**
 * Test script to check what prompt is being generated for Pythagoras topics
 */

import { getFilteredTools } from '../src/components/math-tools/mathToolsRegistry.js';
import { NewPromptResolver } from '../src/prompts/newPromptResolver.js';

// Initialize prompt resolver
const promptResolver = new NewPromptResolver();

// Test topic
const topicId = 's2-math-pythagoras-introduction';

console.log('========================================');
console.log(`Testing prompt generation for: ${topicId}`);
console.log('========================================\n');

// Generate the prompt
try {
  const prompt = promptResolver.resolveInitialGreetingWithProblem({
    topicId: topicId as any
  });

  console.log('FULL PROMPT:\n');
  console.log(prompt);
  console.log('\n========================================');

  // Extract just the AVAILABLE VISUAL TOOLS section
  const toolsMatch = prompt.match(/AVAILABLE VISUAL TOOLS.*?(?=\n\n[A-Z]|\n\n$)/s);
  if (toolsMatch) {
    console.log('\nEXTRACTED VISUAL TOOLS SECTION:\n');
    console.log(toolsMatch[0]);
    console.log('\n========================================');
  }

  // Check specifically for rightTriangle
  if (prompt.includes('rightTriangle')) {
    console.log('\n✓ rightTriangle found in prompt');

    // Extract rightTriangle definition
    const rightTriMatch = prompt.match(/"rightTriangle":\s*\{[^}]*\}/s);
    if (rightTriMatch) {
      console.log('\nrightTriangle definition:\n');
      console.log(rightTriMatch[0]);
    }
  } else {
    console.log('\n✗ rightTriangle NOT found in prompt');
  }

} catch (error) {
  console.error('Error generating prompt:', error);
}
