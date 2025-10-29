/**
 * Generate Initial Audio Files using Google Cloud Chirp-3 HD
 *
 * Generates pre-generated TTS audio files for all 96 initial greetings,
 * eliminating TTS API calls during initial load.
 *
 * Usage:
 *   npm run generate-initial-audio
 *
 * Requirements:
 *   - VITE_GOOGLE_TTS_API_KEY environment variable must be set
 */

// IMPORTANT: Load environment variables FIRST
import './env-loader.ts';
import { env } from './env-loader.ts';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = resolve(__dirname, '..');
const publicDir = resolve(projectRoot, 'public');
const audioDir = resolve(publicDir, 'assets', 'audio', 'initial-greetings');

// CONFIGURATION
const SPEAKING_RATE = 1.15;      // 1.15x speed without pitch change
const VOICE_NAME = 'en-US-Chirp3-HD-Sulafat';
const BATCH_SIZE = 10;            // Process 10 files at a time
const DELAY_BETWEEN_REQUESTS = 2000;  // 2 seconds between each request
const DELAY_BETWEEN_BATCHES = 10000;  // 10 seconds between batches

// Import types
interface CachedGreeting {
  speech: {
    text: string;
    emotion: 'encouraging' | 'celebratory' | 'supportive' | 'neutral' | 'excited' | 'warm';
    preGeneratedAudioUrl?: string;
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
 * Generate audio using Google Cloud Chirp-3 HD TTS API
 */
async function generateAudio(
  text: string,
  emotion: string
): Promise<{ audioData: ArrayBuffer; duration: number }> {
  const apiKey = env.VITE_GOOGLE_TTS_API_KEY;

  if (!apiKey) {
    throw new Error('VITE_GOOGLE_TTS_API_KEY environment variable not set');
  }

  const apiEndpoint = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;

  const requestBody = {
    input: {
      text: text
    },
    voice: {
      languageCode: 'en-US',
      name: VOICE_NAME
    },
    audioConfig: {
      audioEncoding: 'LINEAR16',
      speakingRate: SPEAKING_RATE,
      sampleRateHertz: 24000
    }
  };

  const response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Google Cloud TTS API error (${response.status}): ${errorText}`);
  }

  const data = await response.json();

  if (!data.audioContent) {
    throw new Error('No audio data in Google Cloud TTS response');
  }

  // Convert base64 to ArrayBuffer
  const base64Audio = data.audioContent;
  const binaryString = atob(base64Audio);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  // Calculate duration
  const sampleRate = 24000;
  const duration = bytes.length / 2 / sampleRate;

  return {
    audioData: bytes.buffer,
    duration: duration
  };
}

/**
 * Convert PCM audio to WAV format with proper headers
 */
function convertPCMtoWAV(pcmData: ArrayBuffer, sampleRate: number = 24000): Buffer {
  const pcmBuffer = Buffer.from(pcmData);
  const pcmLength = pcmBuffer.length;

  // WAV file parameters
  const numChannels = 1;
  const bitsPerSample = 16;
  const byteRate = sampleRate * numChannels * (bitsPerSample / 8);
  const blockAlign = numChannels * (bitsPerSample / 8);

  // Create WAV header (44 bytes)
  const header = Buffer.alloc(44);

  // RIFF chunk descriptor
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + pcmLength, 4);
  header.write('WAVE', 8);

  // fmt sub-chunk
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(numChannels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bitsPerSample, 34);

  // data sub-chunk
  header.write('data', 36);
  header.writeUInt32LE(pcmLength, 40);

  return Buffer.concat([header, pcmBuffer]);
}

/**
 * Sleep helper for rate limiting
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Main generation function
 */
async function generateAllAudio() {
  console.log('🎵 Google Cloud Chirp-3 HD Audio Generator\n');
  console.log('=========================================\n');

  // Check environment
  if (!env.VITE_GOOGLE_TTS_API_KEY) {
    console.error('❌ Error: VITE_GOOGLE_TTS_API_KEY not found in environment');
    console.error('   Please add it to your .env file');
    process.exit(1);
  }

  console.log(`✓ Using Google Cloud Chirp-3 HD TTS`);
  console.log(`✓ Voice: ${VOICE_NAME}`);
  console.log(`✓ Speaking rate: ${SPEAKING_RATE}x\n`);
  console.log(`⚙️  Batch size: ${BATCH_SIZE} files`);
  console.log(`⚙️  Delay between requests: ${DELAY_BETWEEN_REQUESTS}ms`);
  console.log(`⚙️  Delay between batches: ${DELAY_BETWEEN_BATCHES}ms\n`);

  // Ensure audio directory exists
  if (!existsSync(audioDir)) {
    console.log(`✓ Creating audio directory: ${audioDir}\n`);
    mkdirSync(audioDir, { recursive: true });
  }

  // Load greetings cache
  const cacheFilePath = resolve(projectRoot, 'src', 'data', 'initialGreetingsCache.ts');

  if (!existsSync(cacheFilePath)) {
    console.error(`❌ Error: Cache file not found at ${cacheFilePath}`);
    process.exit(1);
  }

  console.log(`✓ Loading greetings from cache...\n`);

  // Dynamically import the cache
  const { INITIAL_GREETINGS_CACHE } = await import('../src/data/initialGreetingsCache.ts');

  const topicIds = Object.keys(INITIAL_GREETINGS_CACHE);
  console.log(`Found ${topicIds.length} topics in cache\n`);

  let successCount = 0;
  let failCount = 0;
  let skippedCount = 0;

  // Process in batches
  const batches = [];
  for (let i = 0; i < topicIds.length; i += BATCH_SIZE) {
    batches.push(topicIds.slice(i, i + BATCH_SIZE));
  }

  console.log(`Processing ${batches.length} batches...\n`);

  for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
    const batch = batches[batchIndex];
    console.log(`\n📦 Batch ${batchIndex + 1}/${batches.length} (${batch.length} files)\n`);
    console.log('─'.repeat(60));

    for (let i = 0; i < batch.length; i++) {
      const topicId = batch[i];
      const greeting = INITIAL_GREETINGS_CACHE[topicId];
      const audioFileName = `${topicId}.wav`;
      const audioFilePath = resolve(audioDir, audioFileName);
      const overallIndex = batchIndex * BATCH_SIZE + i + 1;

      console.log(`\n[${overallIndex}/${topicIds.length}] ${topicId}`);
      console.log(`   Text: "${greeting.speech.text.substring(0, 60)}..."`);

      try {
        // Check if file already exists
        if (existsSync(audioFilePath)) {
          console.log(`   ⏭️  Already exists, skipping...`);
          skippedCount++;
          continue;
        }

        // Generate audio
        const { audioData, duration } = await generateAudio(
          greeting.speech.text,
          greeting.speech.emotion
        );

        // Convert to WAV
        const wavData = convertPCMtoWAV(audioData, 24000);

        // Save to file
        writeFileSync(audioFilePath, wavData);

        console.log(`   ✅ Generated: ${duration.toFixed(1)}s, ${(wavData.length / 1024).toFixed(0)}KB`);
        successCount++;

        // Rate limiting: Wait between requests (except for last item in last batch)
        if (!(batchIndex === batches.length - 1 && i === batch.length - 1)) {
          await sleep(DELAY_BETWEEN_REQUESTS);
        }
      } catch (error: any) {
        console.error(`   ❌ Failed: ${error.message}`);
        failCount++;
      }
    }

    // Wait between batches (except after last batch)
    if (batchIndex < batches.length - 1) {
      console.log(`\n⏸️  Waiting ${DELAY_BETWEEN_BATCHES / 1000}s before next batch...\n`);
      await sleep(DELAY_BETWEEN_BATCHES);
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('Generation Complete!\n');
  console.log(`✅ Success:  ${successCount}/${topicIds.length}`);
  console.log(`⏭️  Skipped:  ${skippedCount}/${topicIds.length}`);
  if (failCount > 0) {
    console.log(`❌ Failed:   ${failCount}/${topicIds.length}`);
  }
  console.log(`\n📁 Audio files saved to: ${audioDir}`);
  console.log('\nNext steps:');
  console.log('1. Verify audio files play correctly');
  console.log('2. Update initialGreetingsCache.ts to reference .wav files');
  console.log('3. Test initial load performance\n');
}

// Run the generator
generateAllAudio().catch((error) => {
  console.error('\n❌ Fatal error:', error);
  process.exit(1);
});
