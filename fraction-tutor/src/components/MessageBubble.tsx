import React from 'react';
import MathText from './MathText';
import { useTheme } from '../hooks/useTheme';
import VisualizationRenderer from './visualizations/VisualizationRenderer';
import StepByStepRenderer from './StepByStepRenderer';
import type { Message } from '../types/types';

interface Props {
  message: Message;
  problemText?: string;
  topicId?: string;
  onStepByStepComplete?: () => void;
}

const MessageBubble: React.FC<Props> = ({ message, onStepByStepComplete }) => {
  const { theme } = useTheme();
  const isTutor = message.role === 'tutor';

  // Type guard to check if visualization data is structured step data
  const isStructuredStepData = (data: any): data is {steps: any[], introText?: string, conclusionText?: string} => {
    return data && typeof data === 'object' && Array.isArray(data.steps) && data.steps.length > 0;
  };

  // Type guard to check if visualization data is simple VisualizationData
  const isSimpleVisualizationData = (data: any): boolean => {
    return data && typeof data === 'object' && data.visualizationId && data.problemData && !Array.isArray(data.steps);
  };

  // Check if this message has structured step data
  const hasStructuredStepData = isStructuredStepData(message.visualization);

  // Check if this message has simple visualization data
  const hasSimpleVisualization = isSimpleVisualizationData(message.visualization);

  // Extract the correct data based on type
  const structuredStepData = hasStructuredStepData ? message.visualization : null;
  const simpleVisualizationData = hasSimpleVisualization ? message.visualization : null;

  // Debug logging for MessageBubble
  if (isTutor && message.visualization) {
    console.log('📧 MessageBubble render:', {
      messageId: message.id,
      hasStructuredStepData,
      hasSimpleVisualization,
      visualizationType: typeof message.visualization,
      stepsLength: message.visualization?.steps?.length
    });
  }

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

        {/* Render step-by-step solution or regular message */}
        {hasStructuredStepData && structuredStepData ? (
          <div className="step-by-step-solution">
            <StepByStepRenderer
              key={`steps-${message.id}`}
              structuredStepData={structuredStepData}
              stepDelay={2500}
              onComplete={onStepByStepComplete}
            />
          </div>
        ) : (
          <>
            <div className="text-sm leading-relaxed whitespace-pre-wrap font-medium">
              <MathText>{message.content}</MathText>
            </div>

            {/* Simple visualization rendering - only for tutor messages with simple visualization data */}
            {isTutor && hasSimpleVisualization && simpleVisualizationData && (
              <div className="mt-4">
                <VisualizationRenderer
                  data={simpleVisualizationData}
                  theme={theme}
                  className="visualization-in-message"
                />
              </div>
            )}
          </>
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