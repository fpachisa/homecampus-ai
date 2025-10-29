/**
 * Generate AI-Powered Initial Greetings
 *
 * This script generates initial greetings using the Gemini Flash API
 * (same as the app does in real-time) for ALL subtopics registered in
 * the PromptRegistry, not just those in the handcrafted cache.
 *
 * Usage:
 *   npm run generate-ai-samples                                      # Generate ALL 96 subtopics
 *   npm run generate-ai-samples -- --topic=s3-math-trigonometry      # S3 Trig only (7 subtopics)
 *   npm run generate-ai-samples -- --topic=s3-math-circle-geometry   # Circle Geo only (7 subtopics)
 *   npm run generate-ai-samples -- --topic=s4-math-probability       # S4 Probability only
 *
 * Output:
 *   src/data/initialGreetingsCache-ai-generated.ts
 */

// IMPORTANT: Load environment variables FIRST
import './env-loader.ts';
import { env } from './env-loader.ts';
import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Import AI service (need to use dynamic import for ESM compatibility)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');

interface CachedGreeting {
  speech: {
    text: string;
    emotion: 'encouraging' | 'celebratory' | 'supportive' | 'neutral' | 'warm';
  };
  display: {
    content: string;
    showAfterSpeech: boolean;
  };
  mathTool?: {
    toolName: string;
    parameters: Record<string, any>;
    caption?: string;
  };
}

/**
 * Sleep helper for rate limiting
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Format greeting data as TypeScript code using template literals
 * Preserves AI-generated format exactly (no escaping) for readability and TTS compatibility
 */
function formatAsTypeScript(topicId: string, greeting: CachedGreeting): string {
  const mathToolStr = greeting.mathTool
    ? `,
    mathTool: ${JSON.stringify(greeting.mathTool, null, 6).replace(/\n/g, '\n    ')}`
    : '';

  // Escape only backticks and ${} in the text (for template literal compatibility)
  const escapeSpeechText = greeting.speech.text
    .replace(/\\/g, '\\\\')  // Escape backslashes first
    .replace(/`/g, '\\`')     // Escape backticks
    .replace(/\$/g, '\\$');   // Escape dollar signs

  const escapeDisplayContent = greeting.display.content
    .replace(/\\/g, '\\\\')  // Escape backslashes first
    .replace(/`/g, '\\`')     // Escape backticks
    .replace(/\$/g, '\\$');   // Escape dollar signs

  // Use template literals (backticks) for text to preserve formatting exactly as AI generates
  return "  '" + topicId + "': {\n" +
    "    speech: {\n" +
    "      text: `" + escapeSpeechText + "`,\n" +
    "      emotion: '" + greeting.speech.emotion + "'\n" +
    "    },\n" +
    "    display: {\n" +
    "      content: `" + escapeDisplayContent + "`,\n" +
    "      showAfterSpeech: " + greeting.display.showAfterSpeech + "\n" +
    "    }" + mathToolStr + "\n" +
    "  }";
}

/**
 * Main generation function
 */
async function generateAISamples() {
  console.log('🤖 AI-Generated Initial Greetings Generator\n');
  console.log('===========================================\n');

  // Check environment
  if (!env.VITE_GEMINI_API_KEY) {
    console.error('❌ Error: VITE_GEMINI_API_KEY not found in environment');
    console.error('   Please add it to your .env file');
    process.exit(1);
  }

  console.log('✓ Gemini API key found\n');

  // Parse command line arguments for topic filter
  const topicFilter = process.argv.find(arg => arg.startsWith('--topic='))?.split('=')[1];

  // Dynamically import newPromptResolver to trigger topic registration
  console.log('📚 Loading ALL available subtopic IDs from prompt registry...');
  await import('../src/prompts/newPromptResolver.ts'); // This registers all topics

  const { PromptRegistry } = await import('../src/prompt-library/registry/prompt-registry.ts');
  const registry = PromptRegistry.getInstance();
  const allTopicIds = registry.listSubtopicIds();
  console.log(`✓ Found ${allTopicIds.length} total subtopics in registry\n`);

  // Filter topics if --topic parameter provided
  const topicIds = topicFilter
    ? allTopicIds.filter((id: string) => id.startsWith(topicFilter))
    : allTopicIds;

  if (topicFilter) {
    console.log(`🔍 Filtering by topic prefix: "${topicFilter}"`);
    console.log(`✓ Matched ${topicIds.length} subtopics:\n`);
    topicIds.forEach((id: string, idx: number) => {
      console.log(`   ${idx + 1}. ${id}`);
    });
    console.log('');
  }

  if (topicIds.length === 0) {
    console.error(`❌ No topics matched filter: "${topicFilter}"`);
    console.error(`   Available topics start with patterns like:`);
    console.error(`   - s3-math-trigonometry`);
    console.error(`   - s3-math-circle-geometry`);
    console.error(`   - s4-math-probability`);
    process.exit(1);
  }

  // Dynamically import FallbackAIService
  console.log('🔧 Initializing AI service...');
  const { default: FallbackAIService } = await import('../src/services/fallbackAIService.ts');

  const aiService = new FallbackAIService(
    env.VITE_GEMINI_API_KEY,
    env.VITE_CLAUDE_API_KEY,
    {
      maxRetries: 2,
      retryDelay: 1000,
      exponentialBackoff: true,
      showFallbackMessage: false
    }
  );
  console.log('✓ AI service ready\n');

  const results: Record<string, CachedGreeting> = {};
  let successCount = 0;
  let failCount = 0;

  console.log('🚀 Starting generation...\n');

  // Generate for each topic
  for (let i = 0; i < topicIds.length; i++) {
    const topicId = topicIds[i];
    console.log(`[${i + 1}/${topicIds.length}] Generating: ${topicId}`);

    try {
      // Call AI service (same as the app does)
      const response = await aiService.generateInitialGreetingWithProblem(topicId);

      // Store result (without preGeneratedAudioUrl since we're not pre-generating audio)
      results[topicId] = {
        speech: {
          text: response.speech.text,
          emotion: response.speech.emotion
        },
        display: {
          content: response.display.content,
          showAfterSpeech: response.display.showAfterSpeech
        },
        mathTool: response.mathTool
      };

      console.log(`   ✅ Success`);
      console.log(`   Greeting: "${response.speech.text.substring(0, 60)}..."`);
      console.log(`   Question: "${response.display.content.substring(0, 60)}..."\n`);

      successCount++;

      // Rate limiting: Wait between requests to avoid hitting API limits
      if (i < topicIds.length - 1) {
        await sleep(1500); // 1.5 second delay
      }
    } catch (error: any) {
      console.error(`   ❌ Failed: ${error.message}\n`);
      failCount++;

      // Continue with next topic even if one fails
      continue;
    }
  }

  // Generate TypeScript file content
  console.log('=====================================');
  console.log('📝 Generating TypeScript file...\n');

  const fileContent = `/**
 * AI-Generated Initial Greetings Cache
 *
 * Generated using Gemini Flash API via scripts/generateAISamples.ts
 * Generated on: ${new Date().toISOString()}
 * ${topicFilter ? `Topic filter: ${topicFilter} (${topicIds.length} subtopics)` : `All topics (${topicIds.length} subtopics)`}
 *
 * This file contains AI-generated initial greetings for comparison with
 * the handcrafted version in initialGreetingsCache.ts
 *
 * Note: This file does NOT include preGeneratedAudioUrl fields since
 * we're not pre-generating audio for these samples.
 */

import type { InitialGreetingResponse } from '../types/types';

export interface CachedGreeting extends Omit<InitialGreetingResponse, 'speech'> {
  speech: {
    text: string;
    emotion: 'encouraging' | 'celebratory' | 'supportive' | 'neutral' | 'warm';
  };
}

export const INITIAL_GREETINGS_AI_GENERATED: Record<string, CachedGreeting> = {
${Object.entries(results).map(([topicId, greeting]) => formatAsTypeScript(topicId, greeting)).join(',\n\n')}
};

/**
 * Helper function to get AI-generated greeting for a topic
 */
export function getAIGeneratedGreeting(topicId: string): CachedGreeting | undefined {
  return INITIAL_GREETINGS_AI_GENERATED[topicId];
}

/**
 * Check if a topic has an AI-generated greeting
 */
export function hasAIGeneratedGreeting(topicId: string): boolean {
  return topicId in INITIAL_GREETINGS_AI_GENERATED;
}

/**
 * Get list of all topics with AI-generated greetings
 */
export function getAIGeneratedTopicIds(): string[] {
  return Object.keys(INITIAL_GREETINGS_AI_GENERATED);
}
`;

  // Save to file
  const outputPath = resolve(projectRoot, 'src', 'data', 'initialGreetingsCache-ai-generated.ts');
  writeFileSync(outputPath, fileContent, 'utf-8');

  // Summary
  console.log('===========================================');
  console.log('Generation Complete!\n');
  if (topicFilter) {
    console.log(`📦 Topic Filter: ${topicFilter}`);
    console.log(`📊 Subtopics Generated: ${successCount}/${topicIds.length}`);
  } else {
    console.log(`📊 All Topics Generated: ${successCount}/${topicIds.length}`);
  }
  console.log(`✅ Success: ${successCount}/${topicIds.length}`);
  if (failCount > 0) {
    console.log(`❌ Failed:  ${failCount}/${topicIds.length}`);
  }
  console.log(`\n📁 Saved to: src/data/initialGreetingsCache-ai-generated.ts`);
  console.log('\nNext steps:');
  console.log('1. Visit http://localhost:5173/greetings-viewer');
  console.log('2. Review side-by-side with handcrafted versions');
  console.log('3. Edit and refine in initialGreetingsCache.ts');
  if (topicFilter) {
    console.log('4. Generate next topic batch with: npm run generate-ai-samples -- --topic=<topic-prefix>\n');
  } else {
    console.log('4. Or regenerate specific topic: npm run generate-ai-samples -- --topic=<topic-prefix>\n');
  }
}

// Run the generator
generateAISamples().catch((error) => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});
