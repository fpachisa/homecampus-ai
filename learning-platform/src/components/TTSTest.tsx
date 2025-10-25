/**
 * TTS Test Component
 * Test new Gemini TTS with emotion-based voice control
 */

import { useState } from 'react';
import { ttsService } from '../services/ttsService';
import type { EmotionType } from '../services/tts/TTSProvider';
import { useSpeakerConfig } from '../hooks/useSpeakerConfig';

const TTSTest: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [testText, setTestText] = useState("Hello! I'm your math tutor. Let's learn about fractions together!");
  const [emotion, setEmotion] = useState<EmotionType>('neutral');
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const { currentSpeaker, availableSpeakers, setSpeaker } = useSpeakerConfig();

  const handleTest = async () => {
    if (!ttsService || !ttsService.isAvailable()) {
      setError('TTS Service is not initialized. Check your API key.');
      return;
    }

    setIsPlaying(true);
    setError(null);

    try {
      console.log('Testing TTS with:', { text: testText, emotion, speaker: currentSpeaker });

      // Synthesize speech with emotion and speaker
      const audioBlob = await ttsService.synthesize(testText, emotion, currentSpeaker);

      // Create object URL for audio playback
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);

      // Play audio
      const audio = new Audio(url);
      audio.onended = () => {
        setIsPlaying(false);
        console.log('Audio playback complete');
      };
      audio.onerror = (e) => {
        setError(`Audio playback error: ${e}`);
        setIsPlaying(false);
      };

      await audio.play();

    } catch (err: any) {
      console.error('TTS Test Error:', err);
      setError(err.message || 'Unknown error occurred');
      setIsPlaying(false);
    }
  };

  const testPhrases: Array<{ text: string; emotion: EmotionType }> = [
    { text: "Hello! I'm your math tutor. Let's learn about fractions together!", emotion: 'neutral' },
    { text: "Great job! You nailed it!", emotion: 'celebratory' },
    { text: "Let me give you a hint that might help.", emotion: 'supportive' },
    { text: "Excellent work! You're really getting the hang of this!", emotion: 'celebratory' },
    { text: "Don't worry, let me show you how to solve this step by step.", emotion: 'supportive' },
    { text: "Keep trying! You're on the right track!", emotion: 'encouraging' }
  ];

  return (
    <div style={{
      padding: '40px',
      maxWidth: '900px',
      margin: '0 auto',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1>🔊 TTS Service Test - Gemini 2.5 Flash</h1>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Provider: <strong>{ttsService?.getProviderName() || 'None'}</strong>
      </p>

      {!ttsService || !ttsService.isAvailable() ? (
        <div style={{
          padding: '20px',
          background: '#fee',
          border: '1px solid #fcc',
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          ❌ TTS Service not initialized. Check VITE_GEMINI_API_KEY in .env file.
        </div>
      ) : null}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
            Emotion:
          </label>
          <select
            value={emotion}
            onChange={(e) => setEmotion(e.target.value as EmotionType)}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              borderRadius: '8px',
              border: '1px solid #ddd'
            }}
          >
            <option value="neutral">Neutral</option>
            <option value="encouraging">Encouraging</option>
            <option value="celebratory">Celebratory</option>
            <option value="supportive">Supportive</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
            Speaker:
          </label>
          <select
            value={currentSpeaker}
            onChange={(e) => setSpeaker(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              borderRadius: '8px',
              border: '1px solid #ddd'
            }}
          >
            {availableSpeakers.map((speaker) => (
              <option key={speaker} value={speaker}>{speaker}</option>
            ))}
          </select>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
          Test Text:
        </label>
        <textarea
          value={testText}
          onChange={(e) => setTestText(e.target.value)}
          style={{
            width: '100%',
            minHeight: '100px',
            padding: '12px',
            fontSize: '16px',
            borderRadius: '8px',
            border: '1px solid #ddd'
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>Quick Test Phrases:</p>
        {testPhrases.map((phrase, idx) => (
          <button
            key={idx}
            onClick={() => {
              setTestText(phrase.text);
              setEmotion(phrase.emotion);
            }}
            style={{
              padding: '8px 12px',
              marginRight: '8px',
              marginBottom: '8px',
              borderRadius: '6px',
              border: '1px solid #ddd',
              background: '#f5f5f5',
              cursor: 'pointer'
            }}
          >
            {phrase.emotion} #{idx + 1}
          </button>
        ))}
      </div>

      <button
        onClick={handleTest}
        disabled={isPlaying || !ttsService}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: 'bold',
          borderRadius: '8px',
          border: 'none',
          background: isPlaying ? '#ccc' : '#6366f1',
          color: 'white',
          cursor: isPlaying || !ttsService ? 'not-allowed' : 'pointer',
          marginBottom: '20px'
        }}
      >
        {isPlaying ? '🔊 Playing...' : '▶️ Test TTS'}
      </button>

      {error && (
        <div style={{
          padding: '16px',
          background: '#fee',
          border: '1px solid #fcc',
          borderRadius: '8px',
          color: '#c00',
          marginTop: '20px'
        }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {audioUrl && (
        <div style={{
          padding: '16px',
          background: '#efe',
          border: '1px solid #cfc',
          borderRadius: '8px',
          marginTop: '20px'
        }}>
          <strong>✅ Success!</strong> Audio generated. Voice: Sulafat (Chirp 3 HD)
          <br />
          <audio controls src={audioUrl} style={{ marginTop: '12px', width: '100%' }} />
        </div>
      )}

      <div style={{
        marginTop: '40px',
        padding: '20px',
        background: '#f5f5f5',
        borderRadius: '8px'
      }}>
        <h3>Configuration:</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>🤖 <strong>Provider:</strong> {ttsService?.getProviderName() || 'None'}</li>
          <li>🎙️ <strong>Speaker:</strong> {currentSpeaker}</li>
          <li>🎭 <strong>Current Emotion:</strong> {emotion}</li>
          <li>🔧 <strong>Format:</strong> WAV (Gemini) / MP3 (Cloud)</li>
          <li>⚡ <strong>Cache:</strong> 1 hour</li>
          <li>🔄 <strong>Fallback:</strong> Enabled</li>
        </ul>
        <p style={{ marginTop: '10px', fontSize: '14px', color: '#666' }}>
          Available Speakers: {availableSpeakers.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default TTSTest;
