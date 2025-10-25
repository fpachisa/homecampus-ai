/**
 * Avatar Test Component
 * Test different avatar states and animations
 */

import { useState } from 'react';
import Avatar from './Avatar';

type AvatarState = 'idle' | 'speaking' | 'listening';

const AvatarTest: React.FC = () => {
  const [state, setState] = useState<AvatarState>('idle');
  const [emotion, setEmotion] = useState<'encouraging' | 'celebratory' | 'supportive' | 'neutral'>('neutral');
  const [subtitle, setSubtitle] = useState('Hello! I\'m your AI tutor.');
  const [showSubtitle, setShowSubtitle] = useState(true);

  const testSubtitles = {
    idle: 'Hello! I\'m your AI tutor.',
    speaking: 'Great job! Let\'s try another problem together!',
    listening: 'I\'m listening...'
  };

  return (
    <div style={{
      padding: '40px',
      maxWidth: '900px',
      margin: '0 auto',
      fontFamily: 'system-ui, sans-serif',
      background: '#1a1a2e',
      minHeight: '100vh',
      color: 'white'
    }}>
      <h1>🤖 Avatar Component Test</h1>
      <p style={{ color: '#aaa', marginBottom: '40px' }}>
        Test the waveform orb animation in different states
      </p>

      {/* Avatar Display */}
      <div style={{
        background: '#16213e',
        borderRadius: '12px',
        padding: '60px',
        marginBottom: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '300px'
      }}>
        <Avatar
          state={state}
          emotion={emotion}
          subtitle={showSubtitle ? subtitle : undefined}
          showSubtitle={showSubtitle}
          size={120}
        />
      </div>

      {/* Controls */}
      <div style={{
        background: '#16213e',
        borderRadius: '12px',
        padding: '30px',
        display: 'grid',
        gap: '24px'
      }}>
        {/* State Controls */}
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '12px' }}>
            Avatar State:
          </label>
          <div style={{ display: 'flex', gap: '12px' }}>
            {(['idle', 'speaking', 'listening'] as AvatarState[]).map((s) => (
              <button
                key={s}
                onClick={() => {
                  setState(s);
                  setSubtitle(testSubtitles[s]);
                }}
                style={{
                  padding: '10px 20px',
                  borderRadius: '8px',
                  border: state === s ? '2px solid #6366f1' : '2px solid transparent',
                  background: state === s ? '#6366f1' : '#2a2a4a',
                  color: 'white',
                  cursor: 'pointer',
                  fontWeight: state === s ? 'bold' : 'normal',
                  textTransform: 'capitalize'
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Emotion Controls */}
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '12px' }}>
            Emotion:
          </label>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {(['neutral', 'encouraging', 'celebratory', 'supportive'] as const).map((e) => (
              <button
                key={e}
                onClick={() => setEmotion(e)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '8px',
                  border: emotion === e ? '2px solid #10b981' : '2px solid transparent',
                  background: emotion === e ? '#10b981' : '#2a2a4a',
                  color: 'white',
                  cursor: 'pointer',
                  fontWeight: emotion === e ? 'bold' : 'normal',
                  textTransform: 'capitalize'
                }}
              >
                {e}
              </button>
            ))}
          </div>
        </div>

        {/* Subtitle Controls */}
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '12px' }}>
            Subtitle:
          </label>
          <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #444',
              background: '#2a2a4a',
              color: 'white',
              fontSize: '14px',
              marginBottom: '12px'
            }}
          />
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={showSubtitle}
              onChange={(e) => setShowSubtitle(e.target.checked)}
              style={{ width: '18px', height: '18px' }}
            />
            <span>Show subtitle</span>
          </label>
        </div>

        {/* Info */}
        <div style={{
          marginTop: '20px',
          padding: '20px',
          background: '#1a1a2e',
          borderRadius: '8px',
          fontSize: '13px',
          color: '#aaa'
        }}>
          <h4 style={{ marginTop: 0, color: 'white' }}>Animation Details:</h4>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li><strong>Idle:</strong> Gentle pulsing orb (breathing effect)</li>
            <li><strong>Speaking:</strong> Dynamic waveform bars radiating from center</li>
            <li><strong>Listening:</strong> Ripple effect from center</li>
            <li><strong>Emotions:</strong> Change orb color based on context</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AvatarTest;
