/**
 * TTS Test Component
 * Temporary component to test Google Cloud TTS integration
 * Can be removed after TTS is fully integrated
 */

import React, { useState } from 'react';
import { ttsService } from '../services/ttsService';

const TTSTest: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [testText, setTestText] = useState("Hello! I'm your math tutor. Let's learn about fractions together!");
  const [audioUrl, setAudioUrl] = useState<string | null>(null);

  const handleTest = async () => {
    if (!ttsService) {
      setError('TTS Service is not initialized. Check your API key.');
      return;
    }

    setIsPlaying(true);
    setError(null);

    try {
      console.log('Testing TTS with text:', testText);

      // Synthesize speech
      const audioBlob = await ttsService.synthesize(testText);

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

  const testPhrases = [
    "Hello! I'm your math tutor. Let's learn about fractions together!",
    "Great job! You nailed it!",
    "Let me give you a hint that might help.",
    "Excellent work! You're really getting the hang of this!",
    "Don't worry, let me show you how to solve this step by step."
  ];

  return (
    <div style={{
      padding: '40px',
      maxWidth: '800px',
      margin: '0 auto',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1>🔊 TTS Service Test</h1>

      {!ttsService && (
        <div style={{
          padding: '20px',
          background: '#fee',
          border: '1px solid #fcc',
          borderRadius: '8px',
          marginBottom: '20px'
        }}>
          ❌ TTS Service not initialized. Check VITE_GOOGLE_TTS_API_KEY in .env file.
        </div>
      )}

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
            onClick={() => setTestText(phrase)}
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
            Phrase {idx + 1}
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
          <li>🎙️ <strong>Voice:</strong> en-US-Chirp3-HD-Sulafat</li>
          <li>🔧 <strong>Format:</strong> MP3</li>
          <li>⚡ <strong>Cache:</strong> 1 hour</li>
          <li>📊 <strong>Speaking Rate:</strong> {ttsService?.getConfig().audioConfig.speakingRate || 1.0}x</li>
        </ul>
      </div>
    </div>
  );
};

export default TTSTest;
