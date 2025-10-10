import React from 'react';
import MathText from './MathText';
import { useTheme } from '../hooks/useTheme';
import VisualizationRenderer from './visualizations/VisualizationRenderer';
import { RightTriangleVisualizer } from './math-tools';
import ElevationDepressionVisualizer from './math-tools/ElevationDepressionVisualizer';
import CuboidVisualizer from './math-tools/CuboidVisualizer';
import PyramidVisualizer from './math-tools/PyramidVisualizer';
import BearingsVisualizer from './math-tools/BearingsVisualizer';
import GeneralTriangleVisualizer from './math-tools/GeneralTriangleVisualizer';
import CircleBasicVisualizer from './math-tools/CircleBasicVisualizer';
import CircleChordVisualizer from './math-tools/CircleChordVisualizer';
import CircleAngleVisualizer from './math-tools/CircleAngleVisualizer';
import CircleTangentVisualizer from './math-tools/CircleTangentVisualizer';
import ParabolaGraphVisualizer from './math-tools/ParabolaGraphVisualizer';
import FactoringVisualizer from './math-tools/FactoringVisualizer';
import CompletingSquareVisualizer from './math-tools/CompletingSquareVisualizer';
import QuadraticFormulaVisualizer from './math-tools/QuadraticFormulaVisualizer';
import VertexFormTransformVisualizer from './math-tools/VertexFormTransformVisualizer';
import RootsVisualizer from './math-tools/RootsVisualizer';
import WordProblemDiagramVisualizer from './math-tools/WordProblemDiagramVisualizer';
import type { Message } from '../types/types';

interface Props {
  message: Message;
  problemText?: string;
  topicId?: string;
  onContinue?: () => void;
}

const MessageBubble: React.FC<Props> = ({ message, onContinue }) => {
  const { theme } = useTheme();
  const isTutor = message.role === 'tutor';
  const [continueClicked, setContinueClicked] = React.useState(false);

  // Type guard to check if visualization data is structured step data
  const isStructuredStepData = (data: any): data is {steps: any[], introText?: string, conclusionText?: string} => {
    return data && typeof data === 'object' && Array.isArray(data.steps) && data.steps.length > 0;
  };

  // Type guard to check if visualization data is simple VisualizationData
  const isSimpleVisualizationData = (data: any): boolean => {
    return data && typeof data === 'object' && data.visualizationId && data.problemData && !Array.isArray(data.steps);
  };

  // Type guard to check if this is a plain text solution
  const isPlainTextSolution = (data: any): boolean => {
    return data && typeof data === 'object' && data.isPlainTextSolution === true;
  };

  // Check if this message has structured step data
  const hasStructuredStepData = isStructuredStepData(message.visualization);

  // Check if this message has simple visualization data
  const hasSimpleVisualization = isSimpleVisualizationData(message.visualization);

  // Check if this message has plain text solution
  const hasPlainTextSolution = isPlainTextSolution(message.visualization);

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
      const vizData = stepWithViz.visualizationData;

      // AI returns flat structure, need to nest problemData
      extractedVisualizationData = {
        visualizationId: vizData.visualizationId || 'bar-division',
        context: vizData.context || 'abstract',
        theme: vizData.theme,
        problemData: {
          // Whole number ÷ fraction visualizer fields
          initial_number: vizData.initial_number,
          // Fraction ÷ whole number visualizer fields
          numerator: vizData.numerator,
          denominator: vizData.denominator,
          divisor: vizData.divisor,
          // Fraction ÷ Fraction visualizer fields
          numerator1: vizData.numerator1,
          denominator1: vizData.denominator1,
          numerator2: vizData.numerator2,
          denominator2: vizData.denominator2,
          lcd: vizData.lcd,
          converted_numerator1: vizData.converted_numerator1,
          converted_numerator2: vizData.converted_numerator2,
          result: vizData.result,
          result_fraction: vizData.result_fraction,
          // Common fields
          context: vizData.context,
          numberOfRecipients: vizData.numberOfRecipients,
          unit: vizData.unit || vizData.result_unit,
          resultNumerator: vizData.resultNumerator,
          resultDenominator: vizData.resultDenominator,
          simplifiedNumerator: vizData.simplifiedNumerator,
          simplifiedDenominator: vizData.simplifiedDenominator,
          totalSmallPieces: vizData.totalSmallPieces,
          needsSimplification: vizData.needsSimplification
        },
        stages: vizData.stages || [],
        contextualLabels: vizData.contextualLabels || {
          original: vizData.problem_summary || '',
          division: '',
          result: vizData.result_unit || ''
        },
        trigger: 'solution',
        mathSummary: vizData.mathSummary,
        introText: structuredStepData.introText,
        conclusionText: structuredStepData.conclusionText
      };
    }
  }

  // Debug logging disabled - enable only when debugging visualization rendering issues
  // if (isTutor) {
  //   console.log('📧 MessageBubble render:', {
  //     messageId: message.id,
  //     messageContent: message.content,
  //     messageContentLength: message.content?.length,
  //     hasVisualization: !!message.visualization,
  //     hasStructuredStepData,
  //     hasSimpleVisualization,
  //     extractedVisualizationData: !!extractedVisualizationData,
  //     visualizationType: typeof message.visualization,
  //     stepsLength: message.visualization?.steps?.length,
  //     extractedData: extractedVisualizationData
  //   });
  // }

  return (
    <div className={`flex flex-col w-full animate-message-appear ${isTutor ? 'items-start' : 'items-end'}`}>
      <div className={`flex items-start ${isTutor ? 'space-x-3' : 'space-x-3 flex-row-reverse space-x-reverse'} ${extractedVisualizationData ? 'w-full' : 'max-w-lg'}`}>
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
          className={`relative ${extractedVisualizationData ? 'flex-1' : 'max-w-lg'} px-5 py-4 transition-all duration-300 hover:scale-[1.02] border backdrop-blur-sm`}
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
            {/* Render the visualizer directly */}
            <VisualizationRenderer
              data={extractedVisualizationData}
              theme={theme}
              className="visualization-in-message"
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

            {/* Math Tool rendering - for visual tools like RightTriangleVisualizer */}
            {isTutor && message.metadata?.mathTool && (
              <div className="mt-4">
                {message.metadata.mathTool.toolName === 'rightTriangle' && (
                  <RightTriangleVisualizer
                    {...message.metadata.mathTool.parameters}
                    caption={message.metadata.mathTool.caption}
                  />
                )}
                {message.metadata.mathTool.toolName === 'elevationDepression' && (
                  <ElevationDepressionVisualizer
                    {...message.metadata.mathTool.parameters}
                    caption={message.metadata.mathTool.caption}
                  />
                )}
                {message.metadata.mathTool.toolName === 'cuboid' && (
                  <CuboidVisualizer
                    {...message.metadata.mathTool.parameters}
                    caption={message.metadata.mathTool.caption}
                  />
                )}
                {message.metadata.mathTool.toolName === 'pyramid' && (
                  <PyramidVisualizer
                    {...message.metadata.mathTool.parameters}
                    caption={message.metadata.mathTool.caption}
                  />
                )}
                {message.metadata.mathTool.toolName === 'bearings' && (
                  <BearingsVisualizer
                    {...message.metadata.mathTool.parameters}
                    caption={message.metadata.mathTool.caption}
                  />
                )}
                {message.metadata.mathTool.toolName === 'generalTriangle' && (
                  <GeneralTriangleVisualizer
                    {...message.metadata.mathTool.parameters}
                    caption={message.metadata.mathTool.caption}
                  />
                )}
                {/* Circle geometry tools */}
                {(message.metadata.mathTool.toolName === 'circleBasic' || message.metadata.mathTool.toolName === 'circleWithArcs') && (
                  <CircleBasicVisualizer
                    {...message.metadata.mathTool.parameters}
                    caption={message.metadata.mathTool.caption}
                  />
                )}
                {message.metadata.mathTool.toolName === 'circleWithChords' && (
                  <CircleChordVisualizer
                    {...message.metadata.mathTool.parameters}
                    caption={message.metadata.mathTool.caption}
                  />
                )}
                {(message.metadata.mathTool.toolName === 'circleSemicircle' ||
                  message.metadata.mathTool.toolName === 'circleAngleCentre' ||
                  message.metadata.mathTool.toolName === 'circleSameArc') && (
                  <CircleAngleVisualizer
                    {...message.metadata.mathTool.parameters}
                    caption={message.metadata.mathTool.caption}
                  />
                )}
                {(message.metadata.mathTool.toolName === 'circleTangent' || message.metadata.mathTool.toolName === 'circleTwoTangents') && (
                  <CircleTangentVisualizer
                    {...message.metadata.mathTool.parameters}
                    caption={message.metadata.mathTool.caption}
                  />
                )}
                {/* Quadratic equations tools */}
                {message.metadata.mathTool.toolName === 'parabolaGraph' && (
                  <ParabolaGraphVisualizer
                    {...message.metadata.mathTool.parameters}
                    caption={message.metadata.mathTool.caption}
                  />
                )}
                {message.metadata.mathTool.toolName === 'factoringVisualizer' && (
                  <FactoringVisualizer
                    {...message.metadata.mathTool.parameters}
                    caption={message.metadata.mathTool.caption}
                  />
                )}
                {message.metadata.mathTool.toolName === 'completingSquareVisualizer' && (
                  <CompletingSquareVisualizer
                    {...message.metadata.mathTool.parameters}
                    caption={message.metadata.mathTool.caption}
                  />
                )}
                {message.metadata.mathTool.toolName === 'quadraticFormulaVisualizer' && (
                  <QuadraticFormulaVisualizer
                    {...message.metadata.mathTool.parameters}
                    caption={message.metadata.mathTool.caption}
                  />
                )}
                {message.metadata.mathTool.toolName === 'vertexFormTransform' && (
                  <VertexFormTransformVisualizer
                    {...message.metadata.mathTool.parameters}
                    caption={message.metadata.mathTool.caption}
                  />
                )}
                {message.metadata.mathTool.toolName === 'rootsVisualizer' && (
                  <RootsVisualizer
                    {...message.metadata.mathTool.parameters}
                    caption={message.metadata.mathTool.caption}
                  />
                )}
                {message.metadata.mathTool.toolName === 'wordProblemDiagram' && (
                  <WordProblemDiagramVisualizer
                    {...message.metadata.mathTool.parameters}
                    caption={message.metadata.mathTool.caption}
                  />
                )}
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

      {/* Continue Button - Show below the visualization card for step-by-step solutions OR plain text solutions */}
      {(extractedVisualizationData || hasPlainTextSolution) && onContinue && !continueClicked && (
        <div className="w-full flex justify-center mt-4">
          <button
            onClick={() => {
              setContinueClicked(true);
              onContinue();
            }}
            className="px-8 py-3 rounded-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            style={{
              backgroundColor: theme.colors.brand,
            }}
          >
            Continue →
          </button>
        </div>
      )}
    </div>
  );
};

export default MessageBubble;