# TTS System Documentation

## Overview

The AI Campus TTS (Text-to-Speech) system has been redesigned to use **Gemini 2.5 Flash TTS** with emotion-driven voice control. The new architecture provides:

- 🎭 **Emotion-based voice modulation** - AI agents can express encouragement, celebration, support, or neutrality
- 🎙️ **Multiple speaker voices** - 30+ prebuilt voices to choose from
- 🔄 **Automatic fallback** - Gemini TTS → Google Cloud TTS on failure
- 📦 **Provider pattern** - Easy to add new TTS providers in the future

## Architecture

### Provider Pattern

Similar to the AI service architecture, the TTS system uses a provider pattern:

```
TTSService (orchestrator)
├── Primary Provider (Gemini TTS)
└── Fallback Provider (Cloud TTS)
```

### Key Components

#### 1. **TTSProvider Interface** (`src/services/tts/TTSProvider.ts`)
Defines the contract for all TTS providers:
- `synthesize(options)` - Convert text to speech with emotion and speaker
- `getSupportedSpeakers()` - Get available voices
- `clearCache()` - Clear audio cache
- `getProviderName()` - For logging/debugging

#### 2. **GeminiTTSProvider** (`src/services/tts/GeminiTTSProvider.ts`)
Primary provider using Gemini 2.5 Flash TTS:
- Uses Gemini API with `response_modalities: ["AUDIO"]`
- Model: `gemini-3-flash-preview`
- Converts emotion types to voice context prompts
- Returns PCM audio (24kHz, mono, 16-bit) → converted to WAV
- Supports 30+ prebuilt voices

#### 3. **CloudTTSProvider** (`src/services/tts/CloudTTSProvider.ts`)
Legacy fallback using Google Cloud TTS:
- Uses Google Cloud Text-to-Speech REST API
- Voice: Chirp 3 HD (Sulafat)
- Returns MP3 audio
- Text normalization for acronyms (SOH-CAH-TOA → S.O.H. C.A.H. T.O.A.)

#### 4. **Emotion Mapping** (`src/services/tts/emotionPrompts.ts`)
Maps AI agent emotions to voice prompts:
- `encouraging` → "Say the following in an encouraging, supportive way with warmth:"
- `celebratory` → "Say the following with excitement and celebration, expressing joy:"
- `supportive` → "Say the following in a warm, supportive, and reassuring way:"
- `neutral` → "Say the following in a clear, friendly, and conversational way:"

#### 5. **TTSService** (`src/services/ttsService.ts`)
Orchestrator managing providers and fallback:
- Initializes providers based on environment config
- Automatic fallback on provider failure
- Caching with 1-hour expiry
- Pre-loading common phrases

## Environment Configuration

### Required Variables

```bash
# Gemini API Key (required for Gemini TTS)
VITE_GEMINI_API_KEY=your_gemini_api_key_here

# TTS Provider Selection
VITE_TTS_PROVIDER=gemini  # or "cloud" for legacy

# Default Speaker/Voice
VITE_TTS_SPEAKER=Callirhoe

# Optional: Cloud TTS API Key (fallback only)
VITE_GOOGLE_TTS_API_KEY=your_google_tts_api_key_here
```

### Available Speakers (Gemini TTS)

- Kore
- Puck
- Charon
- **Callirhoe** (default)
- Aoede
- Fenrir
- Orbit
- Leda
- Lyra
- Antheia
- _...and 20+ more voices_

## Usage

### Basic Usage (Automatic)

The TTS system integrates seamlessly with AI agents. Emotion is automatically passed from agent responses:

```typescript
// In AI agent response
{
  speech: {
    text: "Great job! You nailed it!",
    emotion: "celebratory"  // ← Automatically used by TTS
  },
  display: {
    content: "**Excellent work!** You got it right!"
  }
}
```

### Manual Usage (Advanced)

```typescript
import { ttsService } from '../services/ttsService';

// Synthesize with emotion
const audioBlob = await ttsService.synthesize(
  "Let's try another problem!",
  'encouraging',  // emotion
  'Puck'          // optional speaker override
);

// Play audio
const audio = new Audio(URL.createObjectURL(audioBlob));
await audio.play();
```

### Speaker Configuration Hook

```typescript
import { useSpeakerConfig } from '../hooks/useSpeakerConfig';

function SettingsPanel() {
  const { currentSpeaker, availableSpeakers, setSpeaker } = useSpeakerConfig();

  return (
    <select value={currentSpeaker} onChange={(e) => setSpeaker(e.target.value)}>
      {availableSpeakers.map(speaker => (
        <option key={speaker} value={speaker}>{speaker}</option>
      ))}
    </select>
  );
}
```

### Speaker Selector Component

```typescript
import { SpeakerSelector } from '../components/SpeakerSelector';

function Settings() {
  return (
    <div>
      <h2>Voice Settings</h2>
      <SpeakerSelector />
    </div>
  );
}
```

## Audio Manager

The `useAudioManager` hook manages TTS playback queue and avatar synchronization:

```typescript
const {
  isPlaying,
  currentSubtitle,
  avatarState,
  audioDuration,
  speakText,
  stopSpeaking,
  clearQueue
} = useAudioManager();

// Queue speech with emotion
await speakText("Great job!", "celebratory");
```

## Fallback System

The TTS service automatically falls back to Cloud TTS if Gemini TTS fails:

```
1. Try Gemini TTS (primary)
   ↓ [on error]
2. Try Cloud TTS (fallback)
   ↓ [on error]
3. Throw error
```

Logs show which provider is used:
```
✅ Gemini TTS initialized as primary provider
✅ Cloud TTS initialized as fallback provider
🔊 Gemini TTS: Synthesizing audio for: Great job!
🎭 Emotion: celebratory | Speaker: Callirhoe
```

## Caching

Audio is cached with 1-hour expiry to reduce API calls:

- Cache key: `${prompt}_${speaker}`
- Automatic cache expiry after 1 hour
- Manual cache clear: `ttsService.clearCache()`

## Best Practices

### 1. **Use Appropriate Emotions**
- `encouraging` - For hints and gentle guidance
- `celebratory` - For correct answers and achievements
- `supportive` - For reassurance when struggling
- `neutral` - For questions and general content

### 2. **Speaker Consistency**
- Let users choose their preferred speaker
- Store preference in localStorage (done automatically)
- Use consistent speaker throughout session

### 3. **Text Preparation**
- Speech text should be **plain text only** (no markdown, no LaTeX)
- Display content can use full markdown and LaTeX
- Acronyms are handled automatically by providers

### 4. **Performance**
- Pre-cache common phrases on app initialization
- Use emotion-based prompts instead of adjusting speaking rate
- Leverage automatic caching system

## Troubleshooting

### TTS Not Working

**Check 1: Environment Variables**
```bash
# Ensure VITE_GEMINI_API_KEY is set
echo $VITE_GEMINI_API_KEY
```

**Check 2: Provider Initialization**
Look for logs:
```
✅ Gemini TTS initialized as primary provider
⚠️ Failed to initialize Gemini TTS: [error]
```

**Check 3: API Errors**
Common errors:
- `401/403` - Invalid API key
- `429` - Rate limit exceeded
- `503` - Service unavailable (triggers fallback)

### Audio Not Playing

**Check 1: Browser Support**
Ensure browser supports Web Audio API and Audio elements.

**Check 2: Cache Issues**
```typescript
// Clear cache and retry
ttsService.clearCache();
```

**Check 3: Audio Format**
- Gemini TTS: WAV (converted from PCM)
- Cloud TTS: MP3

## Migration from Old System

The old TTS system has been fully replaced. Key changes:

### Old (Legacy)
```typescript
// Direct service call with options
await ttsService.synthesize(
  normalizedText,
  { speakingRate: 3.5 },
  false  // SSML
);
```

### New (Current)
```typescript
// Emotion-based with automatic speaker selection
await ttsService.synthesize(
  text,
  'encouraging',  // emotion
  'Callirhoe'     // optional speaker
);
```

### Migration Checklist
- ✅ Environment variables updated (`.env`)
- ✅ Remove manual text normalization (handled by providers)
- ✅ Replace speaking rate with emotions
- ✅ Update to new `synthesize()` signature
- ✅ Use speaker configuration hooks

## Future Enhancements

Potential improvements:
1. **Live API Integration** - Use `@google/genai` SDK for streaming TTS
2. **Custom Voice Training** - Train custom voices for specific subjects
3. **Multi-speaker Conversations** - Support for 2+ speakers in dialogues
4. **SSML Support** - Advanced prosody control for Gemini TTS
5. **Voice Cloning** - Clone teacher voices for personalization

## API Reference

### TTSService

#### Methods

**`synthesize(text, emotion?, speaker?)`**
- `text: string` - Text to convert to speech
- `emotion?: EmotionType` - Voice emotion ('encouraging' | 'celebratory' | 'supportive' | 'neutral')
- `speaker?: string` - Optional speaker override
- Returns: `Promise<Blob>` - Audio blob ready for playback

**`getSupportedSpeakers()`**
- Returns: `string[]` - Array of available speaker names

**`clearCache()`**
- Clears audio cache for all providers

**`isAvailable()`**
- Returns: `boolean` - True if at least one provider is initialized

**`preloadCommonPhrases(phrases, emotion?)`**
- `phrases: string[]` - Array of phrases to pre-cache
- `emotion?: EmotionType` - Emotion for all phrases
- Returns: `Promise<void>`

### useSpeakerConfig Hook

```typescript
const {
  currentSpeaker,      // Current selected speaker
  availableSpeakers,   // Array of available speakers
  setSpeaker,          // Function to change speaker
  resetToDefault       // Function to reset to default
} = useSpeakerConfig();
```

### useAudioManager Hook

```typescript
const {
  isPlaying,          // boolean - Audio currently playing
  currentSubtitle,    // string - Current subtitle text
  avatarState,        // 'idle' | 'speaking' | 'listening'
  audioDuration,      // number - Current audio duration (seconds)
  speakText,          // Function to queue speech
  stopSpeaking,       // Function to stop and clear
  clearQueue          // Function to clear queue only
} = useAudioManager();
```

## Testing

### Unit Tests
```bash
npm run test -- tts
```

### Manual Testing
1. Use `TTSTest.tsx` component for quick testing
2. Test different emotions and speakers
3. Verify fallback behavior (disable Gemini key)
4. Test cache functionality

### Test Scenarios
- ✅ Emotion variations (encouraging, celebratory, supportive, neutral)
- ✅ Speaker selection and persistence
- ✅ Primary provider failure → Fallback
- ✅ Cache hit/miss scenarios
- ✅ Concurrent speech requests (queue)
- ✅ Avatar state synchronization

---

**Version:** 2.0 (Gemini TTS)
**Last Updated:** 2025-10-17
**Maintainer:** AI Campus Team
