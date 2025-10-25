/**
 * AI Avatar Component
 * Animated waveform orb that visualizes speech and provides visual feedback
 * States: idle (pulse), speaking (waveform), listening (ripple)
 */

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../hooks/useTheme';

export type AvatarState = 'idle' | 'speaking' | 'listening';

interface AvatarProps {
  state?: AvatarState;
  audioData?: Float32Array;      // Audio frequency data for waveform visualization
  emotion?: 'encouraging' | 'celebratory' | 'supportive' | 'neutral';
  subtitle?: string;              // Current speech text to display
  showSubtitle?: boolean;         // User preference to show/hide subtitles
  size?: number;                  // Size of the orb in pixels
  audioDuration?: number;         // Audio duration for word-by-word timing
}

const Avatar: React.FC<AvatarProps> = ({
  state = 'idle',
  audioData,
  emotion = 'neutral',
  subtitle,
  showSubtitle = true,
  size = 120,
  audioDuration
}) => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const pulsePhaseRef = useRef(0);

  // Word-by-word subtitle reveal
  const [visibleWords, setVisibleWords] = useState(0);
  const words = subtitle ? subtitle.split(' ') : [];
  const totalWords = words.length;

  // Emotion-based color mapping
  const getEmotionColor = () => {
    switch (emotion) {
      case 'encouraging':
        return '#10b981'; // Green
      case 'celebratory':
        return '#f59e0b'; // Amber
      case 'supportive':
        return '#6366f1'; // Indigo (brand)
      case 'neutral':
      default:
        return theme.colors.brand;
    }
  };

  const emotionColor = getEmotionColor();

  // Idle animation: Gentle pulsing orb
  const drawIdleState = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const baseRadius = size / 3;

    // Animate pulse
    pulsePhaseRef.current += 0.02;
    const pulseScale = 1 + Math.sin(pulsePhaseRef.current) * 0.1;
    const radius = baseRadius * pulseScale;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw glowing orb
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    gradient.addColorStop(0, `${emotionColor}ff`);
    gradient.addColorStop(0.5, `${emotionColor}aa`);
    gradient.addColorStop(1, `${emotionColor}00`);

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 1.5, 0, Math.PI * 2);
    ctx.fill();

    // Draw solid center
    ctx.fillStyle = emotionColor;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.6, 0, Math.PI * 2);
    ctx.fill();
  };

  // Speaking/Listening animation: Ripple effect
  const drawListeningState = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const baseRadius = size / 3;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Animate ripples
    pulsePhaseRef.current += 0.03;

    // Draw multiple ripples
    for (let i = 0; i < 3; i++) {
      const ripplePhase = (pulsePhaseRef.current + i * 0.5) % 2;
      const rippleRadius = baseRadius * (0.5 + ripplePhase);
      const opacity = Math.max(0, 1 - ripplePhase);

      ctx.strokeStyle = `${emotionColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, rippleRadius, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Draw center orb
    ctx.fillStyle = emotionColor;
    ctx.beginPath();
    ctx.arc(centerX, centerY, baseRadius * 0.4, 0, Math.PI * 2);
    ctx.fill();
  };

  // Word-by-word reveal animation
  useEffect(() => {
    if (!subtitle || !state || state !== 'speaking' || totalWords === 0) {
      setVisibleWords(0);
      return;
    }

    // Reset visible words when subtitle changes
    setVisibleWords(0);

    // Calculate interval per word
    // If audioDuration is provided, use it; otherwise estimate ~300ms per word
    const durationMs = audioDuration ? audioDuration * 1000 : totalWords * 300;
    const intervalPerWord = durationMs / totalWords;

    let currentWord = 0;
    const timer = setInterval(() => {
      currentWord++;
      setVisibleWords(currentWord);

      if (currentWord >= totalWords) {
        clearInterval(timer);
      }
    }, intervalPerWord);

    return () => clearInterval(timer);
  }, [subtitle, state, totalWords, audioDuration]);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      switch (state) {
        case 'speaking':
          // Use ripple animation for speaking (same as listening)
          drawListeningState(ctx, canvas);
          break;
        case 'listening':
          drawListeningState(ctx, canvas);
          break;
        case 'idle':
        default:
          drawIdleState(ctx, canvas);
          break;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [state, audioData, emotionColor, size]);

  return (
    <div
      className="avatar-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        padding: '28px 32px',
        background: theme.name === 'dark'
          ? 'rgba(31, 31, 31, 0.95)'
          : 'rgba(254, 253, 251, 0.95)',
        backdropFilter: theme.glass.backdrop,
        border: `2px solid ${theme.colors.brand}`,
        borderRadius: theme.radius.xl,
        boxShadow: `${theme.shadows.lg}, 0 0 30px ${theme.colors.brand}40`
      }}
    >
      {/* Canvas for waveform animation */}
      <canvas
        ref={canvasRef}
        width={size * 2}
        height={size * 2}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2))'
        }}
      />

      {/* Subtitle display - word-by-word reveal */}
      {showSubtitle && subtitle && visibleWords > 0 && (
        <div
          className="avatar-subtitle"
          style={{
            maxWidth: '400px',
            padding: '12px 20px',
            background: theme.colors.tutorMessage,
            borderRadius: theme.radius.lg,
            border: `1px solid ${theme.colors.border}`,
            color: theme.colors.textPrimary,
            fontSize: '14px',
            lineHeight: '1.5',
            textAlign: 'center',
            boxShadow: theme.shadows.sm
          }}
        >
          {words.map((word, index) => (
            <span
              key={index}
              style={{
                display: 'inline-block',
                marginRight: '0.3em',
                opacity: index < visibleWords ? 1 : 0,
                transition: 'opacity 0.15s ease-out',
                willChange: 'opacity'
              }}
            >
              {word}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Avatar;
