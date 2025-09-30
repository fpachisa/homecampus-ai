import React from 'react';
import type { VisualizationData } from '../../types/visualization';

interface BarDivisionVisualizerProps {
  data: VisualizationData;
  theme: any;
  className?: string;
  step?: number; // Which visual step to show (0, 1, 2)
}

/**
 * Visualizes fraction division by whole numbers using step-controlled bar model
 * Shows: original fraction → division lines → result per group
 * Example: 3/4 ÷ 3 = 1/4 for each of 3 groups
 */
const BarDivisionVisualizer: React.FC<BarDivisionVisualizerProps> = ({
  data,
  theme,
  className = '',
  step = 0
}) => {
  const { problemData, stages, contextualLabels } = data;
  const { numerator, denominator, divisor } = problemData;

  // Use the provided step, but ensure it's within valid range
  const currentStage = Math.min(step, Math.max(0, stages.length - 1));

  // SVG dimensions and styling
  const config = {
    width: 320,
    height: 100,
    strokeWidth: 2,
    fontSize: 14
  };

  // Calculate segment width for the original fraction
  const segmentWidth = config.width / denominator;

  // Colors from theme
  const colors = {
    primary: theme?.colors?.brand || '#3b82f6',
    primaryHover: theme?.colors?.brandHover || '#2563eb',
    background: theme?.colors?.interactive || '#f1f5f9',
    border: theme?.colors?.border || '#d1d5db',
    text: theme?.colors?.textPrimary || '#1f2937',
    textMuted: theme?.colors?.textMuted || '#6b7280'
  };

  const renderOriginalFraction = () => {
    return (
      <>
        {/* Background rectangle */}
        <rect
          x={0}
          y={30}
          width={config.width}
          height={40}
          fill="none"
          stroke={colors.border}
          strokeWidth={config.strokeWidth}
          rx={4}
        />

        {/* Filled segments (original fraction) */}
        {Array.from({ length: Math.min(numerator, denominator) }).map((_, index) => (
          <rect
            key={`original-${index}`}
            x={index * segmentWidth}
            y={30}
            width={segmentWidth}
            height={40}
            fill={colors.primary}
            stroke={colors.primaryHover}
            strokeWidth={1}
            rx={2}
            opacity={currentStage >= 0 ? 0.8 : 0.3}
            style={{
              transition: 'opacity 0.6s ease'
            }}
          />
        ))}

        {/* Segment dividers for denominator */}
        {Array.from({ length: denominator - 1 }).map((_, index) => (
          <line
            key={`divider-${index}`}
            x1={(index + 1) * segmentWidth}
            y1={30}
            x2={(index + 1) * segmentWidth}
            y2={70}
            stroke={colors.border}
            strokeWidth={1}
          />
        ))}
      </>
    );
  };

  const renderDivisionLines = () => {
    if (currentStage < 1) return null;

    // Calculate division lines within the filled portion
    const filledWidth = (numerator / denominator) * config.width;
    const divisionSpacing = filledWidth / divisor;

    return (
      <>
        {Array.from({ length: divisor - 1 }).map((_, index) => (
          <line
            key={`division-${index}`}
            x1={(index + 1) * divisionSpacing}
            y1={25}
            x2={(index + 1) * divisionSpacing}
            y2={75}
            stroke={colors.primaryHover}
            strokeWidth={3}
            strokeDasharray="5,5"
            opacity={currentStage >= 1 ? 1 : 0}
            style={{
              transition: 'opacity 0.6s ease'
            }}
          />
        ))}
      </>
    );
  };

  const renderResultHighlight = () => {
    if (currentStage < 2) return null;

    // Highlight the first division group as example
    const filledWidth = (numerator / denominator) * config.width;
    const groupWidth = filledWidth / divisor;

    return (
      <rect
        x={0}
        y={27}
        width={groupWidth}
        height={46}
        fill="none"
        stroke={colors.primaryHover}
        strokeWidth={4}
        rx={4}
        opacity={currentStage >= 2 ? 1 : 0}
        style={{
          transition: 'opacity 0.6s ease'
        }}
      />
    );
  };

  const getCurrentStageInfo = () => {
    if (stages.length === 0) return { title: '', description: '' };
    return stages[Math.min(currentStage, stages.length - 1)];
  };

  const stageInfo = getCurrentStageInfo();

  return (
    <div className={`bar-division-visualizer ${className}`} style={{
      backgroundColor: colors.background,
      borderRadius: '12px',
      padding: '16px',
      margin: '8px 0'
    }}>
      {/* Stage title and description */}
      <div className="mb-4 text-center">
        <h3
          className="font-semibold text-sm mb-1"
          style={{ color: colors.text }}
        >
          {stageInfo.title || 'Fraction Division Visualization'}
        </h3>
        <p
          className="text-xs"
          style={{ color: colors.textMuted }}
        >
          {stageInfo.description || `Dividing ${contextualLabels.original} by ${divisor}`}
        </p>
      </div>

      {/* SVG Visualization */}
      <div className="flex justify-center mb-4">
        <svg width={config.width} height={config.height}>
          {/* Gradient definition */}
          <defs>
            <linearGradient id="fractionGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={colors.primary} stopOpacity={0.9} />
              <stop offset="100%" stopColor={colors.primaryHover} stopOpacity={1} />
            </linearGradient>
          </defs>

          {renderOriginalFraction()}
          {renderDivisionLines()}
          {renderResultHighlight()}

          {/* Labels */}
          <text
            x={config.width / 2}
            y={15}
            textAnchor="middle"
            fontSize={config.fontSize}
            fill={colors.text}
            fontWeight="500"
          >
            {contextualLabels.original}
          </text>

          {currentStage >= 2 && (
            <text
              x={config.width / 2}
              y={95}
              textAnchor="middle"
              fontSize={config.fontSize - 2}
              fill={colors.textMuted}
            >
              Each group: {numerator}/{denominator * divisor} = {numerator}/{denominator * divisor}
            </text>
          )}
        </svg>
      </div>
    </div>
  );
};

export default BarDivisionVisualizer;