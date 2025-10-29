# Initial Greetings Audio Files

This directory contains pre-generated TTS audio files for Learn Mode initial greetings.

## Purpose

These audio files eliminate the need for TTS API calls during initial topic load, reducing load time from 2-6 seconds to <0.5 seconds.

## File Naming Convention

Audio files are named after their corresponding topic IDs:
- `s3-math-trigonometry-basic-ratios.mp3`
- `s3-math-exponents-laws.mp3`
- etc.

## Generating Audio Files

To generate or regenerate all audio files, run:

```bash
npm run generate-initial-audio
```

This will:
1. Load all greetings from `src/data/initialGreetingsCache.ts`
2. Generate TTS audio using the configured TTS provider (Gemini TTS by default)
3. Save MP3 files to this directory
4. Update the cache file with correct audio URLs

## Audio Specifications

- **Format**: MP3
- **TTS Provider**: Gemini 2.5 Flash TTS (with emotion-driven voice control)
- **Speaker**: Configured via `VITE_TTS_SPEAKER` env variable (default: Kore)
- **Emotion**: Specified per greeting (encouraging, celebratory, supportive, neutral)

## Cache Reference

Audio files are referenced in `src/data/initialGreetingsCache.ts` via the `preGeneratedAudioUrl` field.
