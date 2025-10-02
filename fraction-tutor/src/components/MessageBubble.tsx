import React from 'react';
import MathText from './MathText';
import { useTheme } from '../hooks/useTheme';
import VisualizationRenderer from './visualizations/VisualizationRenderer';
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

  // Extract visualization data from structured step data
  // Find the first step that has visualization and use that data
  let extractedVisualizationData = null;
  if (structuredStepData) {
    const stepWithViz = structuredStepData.steps.find((step: any) =>
      step.includeVisualization && step.visualizationData
    );
    if (stepWithViz && stepWithViz.visualizationData) {
      // AI now provides complete visualization data with all stages and tutorText
      // Just pass it through with intro/conclusion text
      extractedVisualizationData = {
        ...stepWithViz.visualizationData,
        introText: structuredStepData.introText,
        conclusionText: structuredStepData.conclusionText
      };
    }
  }

  // Debug logging for MessageBubble
  if (isTutor && message.visualization) {
    console.log('📧 MessageBubble render:', {
      messageId: message.id,
      hasStructuredStepData,
      hasSimpleVisualization,
      extractedVisualizationData: !!extractedVisualizationData,
      visualizationType: typeof message.visualization,
      stepsLength: message.visualization?.steps?.length
    });
  }

  return (
    <div className={`flex w-full items-start animate-message-appear ${isTutor ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex items-start ${isTutor ? 'space-x-3' : 'space-x-3 flex-row-reverse space-x-reverse'}`}>
        {/* Avatar */}
        <div
          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg text-white shadow-md"
          style={{
            backgroundColor: isTutor ? theme.colors.brand : theme.colors.userMessage,
          }}
        >
          {isTutor ? '📚' : '🙋‍♀️'}
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

        {/* Render visualization or regular message */}
        {extractedVisualizationData ? (
          // Render extracted visualization from structured step data
          <div className="visualization-solution">
            {/* Display intro text if available */}
            {extractedVisualizationData.introText && (
              <div className="text-sm leading-relaxed whitespace-pre-wrap font-medium mb-4">
                <MathText>{extractedVisualizationData.introText}</MathText>
              </div>
            )}

            {/* Render the visualizer directly */}
            <VisualizationRenderer
              data={extractedVisualizationData}
              theme={theme}
              className="visualization-in-message"
              onComplete={onStepByStepComplete}
            />

            {/* Display conclusion text if available */}
            {extractedVisualizationData.conclusionText && (
              <div className="text-sm leading-relaxed whitespace-pre-wrap font-medium mt-4">
                <MathText>{extractedVisualizationData.conclusionText}</MathText>
              </div>
            )}
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

      </div>
      </div>
    </div>
  );
};

export default MessageBubble;