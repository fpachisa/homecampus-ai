import React from 'react';
import MathText from './MathText';
import { useTheme } from '../hooks/useTheme';
import VisualizationRenderer from './visualizations/VisualizationRenderer';
import type { Message } from '../types/types';

interface Props {
  message: Message;
}

const MessageBubble: React.FC<Props> = ({ message }) => {
  const { theme } = useTheme();
  const isTutor = message.role === 'tutor';

  return (
    <div className={`flex items-start space-x-3 animate-message-appear ${isTutor ? 'justify-start' : 'justify-end flex-row-reverse space-x-reverse'}`}>
      {/* Avatar */}
      <div
        className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg text-white shadow-md"
        style={{
          backgroundColor: isTutor ? theme.colors.brand : theme.colors.userMessage,
        }}
      >
        {isTutor ? '🧠' : '🙋‍♀️'}
      </div>

      {/* Message */}
      <div
        className="relative max-w-lg px-5 py-4 transition-all duration-300 hover:scale-[1.02] border backdrop-blur-sm"
        style={{
          background: isTutor
            ? `${theme.colors.tutorMessage}`
            : theme.gradients.brand,
          borderColor: isTutor ? theme.glass.border : 'rgba(255,255,255,0.2)',
          color: isTutor ? theme.colors.textPrimary : '#ffffff',
          borderRadius: theme.radius.lg,
          boxShadow: isTutor ? theme.shadows.md : theme.shadows.glow,
          backdropFilter: 'blur(8px)',
        }}
      >
        {/* Message tail */}
        <div
          className={`absolute top-4 w-3 h-3 transform rotate-45 border-l border-t ${isTutor ? '-left-1.5' : '-right-1.5'}`}
          style={{
            background: isTutor
              ? theme.colors.tutorMessage
              : theme.gradients.brand,
            borderColor: isTutor ? theme.glass.border : 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(8px)',
          }}
        />

        <div
          className="text-xs font-semibold mb-2"
          style={{
            color: isTutor ? theme.colors.textAccent : 'rgba(255,255,255,0.8)',
          }}
        >
          {isTutor ? 'Math Tutor' : 'You'}
        </div>

        <div className="text-sm leading-relaxed whitespace-pre-wrap font-medium">
          <MathText>{message.content}</MathText>
        </div>

        {/* Visualization rendering - only for tutor messages with visualization data */}
        {isTutor && message.visualization && (
          <div className="mt-4">
            <VisualizationRenderer
              data={message.visualization}
              theme={theme}
              className="visualization-in-message"
            />
          </div>
        )}

        {message.metadata?.isCorrect !== undefined && (
          <div
            className="text-xs mt-3 pt-2 border-t"
            style={{
              borderColor: isTutor ? theme.colors.border : 'rgba(255,255,255,0.3)',
              color: isTutor ? theme.colors.textMuted : 'rgba(255,255,255,0.8)',
            }}
          >
            {message.metadata.isCorrect ? '✓ Correct answer!' : '→ Keep exploring...'}
          </div>
        )}

        {message.metadata?.difficulty && (
          <div
            className="text-xs mt-2"
            style={{
              color: isTutor ? theme.colors.textMuted : 'rgba(255,255,255,0.7)',
            }}
          >
            Level: {message.metadata.difficulty}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;