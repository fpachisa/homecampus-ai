/**
 * Average Tower Visualizer
 *
 * Visualizes the concept of average as "evening out" stacked blocks/towers.
 * Shows how redistributing blocks creates towers of equal height (the average).
 * Essential tool for P6 Averages topic.
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface AverageTowerVisualizerProps {
  values: number[];                // Heights of each tower (e.g., [3, 7, 6, 4])
  labels?: string[];               // Optional labels for each tower
  showAverage?: boolean;           // Show average line across towers (default: false - don't give away answer)
  showEvenedOut?: boolean;         // Show the "evened out" result (default: false)
  title?: string;                  // Title above visualization
  caption?: string;                // Caption below visualization
  blockColor?: string;             // Custom block color (default: theme brand)
  evenedColor?: string;            // Color for evened-out blocks (default: theme success)
}

const AverageTowerVisualizer: React.FC<AverageTowerVisualizerProps> = ({
  values,
  labels,
  showAverage = false,
  showEvenedOut = false,
  title,
  caption,
  blockColor,
  evenedColor
}) => {
  const { theme } = useTheme();

  // Validation
  if (!values || values.length === 0) {
    return (
      <div className="p-4 border rounded" style={{
        backgroundColor: theme.colors.error + '20',
        borderColor: theme.colors.error,
        color: theme.colors.textPrimary
      }}>
        Invalid tower visualization: values array is required
      </div>
    );
  }

  if (values.some(v => v < 0 || !Number.isInteger(v))) {
    return (
      <div className="p-4 border rounded" style={{
        backgroundColor: theme.colors.error + '20',
        borderColor: theme.colors.error,
        color: theme.colors.textPrimary
      }}>
        Invalid tower visualization: values must be non-negative integers
      </div>
    );
  }

  // Calculate statistics
  const total = values.reduce((sum, v) => sum + v, 0);
  const count = values.length;
  const average = total / count;
  const maxValue = Math.max(...values, 1);

  // SVG dimensions
  const width = 500;
  const height = 320;
  const padding = 50;
  const topPadding = title ? 50 : 30;
  const bottomPadding = 40;

  // Block dimensions
  const chartWidth = width - 2 * padding;
  const chartHeight = height - topPadding - bottomPadding;
  const towerWidth = (chartWidth / count) * 0.6;
  const towerGap = (chartWidth / count) * 0.2;

  // Use stacked blocks for small values, solid bars for large values
  const useStackedBlocks = maxValue <= 15;
  const blockHeight = useStackedBlocks
    ? Math.min(30, chartHeight / (maxValue + 1))
    : chartHeight / maxValue; // For proportional bars

  // Colors
  const primaryBlockColor = blockColor || theme.colors.brand || '#3b82f6';
  const evenedBlockColor = evenedColor || theme.colors.success || '#10b981';
  const averageLineColor = '#ef4444'; // Red for visibility
  const textColor = theme.colors.textPrimary || '#1f2937';
  const mutedColor = theme.colors.textMuted || '#6b7280';

  // Render a single tower with stacked blocks OR solid bar
  const renderTower = (value: number, index: number, isEvened: boolean = false) => {
    const towerX = padding + (chartWidth / count) * index + towerGap;
    const displayValue = isEvened ? Math.round(average) : value;
    const color = isEvened ? evenedBlockColor : primaryBlockColor;
    const strokeColor = isEvened ? '#059669' : '#2563eb';

    // For large values, render as a solid proportional bar
    if (!useStackedBlocks) {
      const barHeight = (displayValue / maxValue) * (chartHeight - 20); // Leave space for label
      const barY = topPadding + chartHeight - barHeight;

      return (
        <g key={`tower-${index}`}>
          <rect
            x={towerX}
            y={barY}
            width={towerWidth}
            height={barHeight}
            fill={color}
            stroke={strokeColor}
            strokeWidth={1}
            rx={4}
            ry={4}
            opacity={0.9}
          />

          {/* Value label on top of bar */}
          <text
            x={towerX + towerWidth / 2}
            y={barY - 8}
            fontSize="14"
            fontWeight="bold"
            textAnchor="middle"
            fill={textColor}
          >
            {displayValue}
          </text>

          {/* Tower label at bottom */}
          {labels && labels[index] && (
            <text
              x={towerX + towerWidth / 2}
              y={topPadding + chartHeight + 20}
              fontSize="12"
              textAnchor="middle"
              fill={mutedColor}
            >
              {labels[index]}
            </text>
          )}

          {/* Index label if no custom labels */}
          {!labels && (
            <text
              x={towerX + towerWidth / 2}
              y={topPadding + chartHeight + 20}
              fontSize="12"
              textAnchor="middle"
              fill={mutedColor}
            >
              Tower {index + 1}
            </text>
          )}
        </g>
      );
    }

    // For small values, render stacked blocks
    const blocks = [];

    // Draw blocks from bottom to top
    for (let i = 0; i < displayValue; i++) {
      const blockY = topPadding + chartHeight - (i + 1) * blockHeight;
      blocks.push(
        <rect
          key={`${index}-${i}`}
          x={towerX}
          y={blockY}
          width={towerWidth}
          height={blockHeight - 2} // 2px gap between blocks
          fill={color}
          stroke={strokeColor}
          strokeWidth={1}
          rx={2}
          ry={2}
          opacity={0.9}
        />
      );
    }

    return (
      <g key={`tower-${index}`}>
        {blocks}

        {/* Value label on top of tower */}
        <text
          x={towerX + towerWidth / 2}
          y={topPadding + chartHeight - displayValue * blockHeight - 8}
          fontSize="14"
          fontWeight="bold"
          textAnchor="middle"
          fill={textColor}
        >
          {displayValue}
        </text>

        {/* Tower label at bottom */}
        {labels && labels[index] && (
          <text
            x={towerX + towerWidth / 2}
            y={topPadding + chartHeight + 20}
            fontSize="12"
            textAnchor="middle"
            fill={mutedColor}
          >
            {labels[index]}
          </text>
        )}

        {/* Index label if no custom labels */}
        {!labels && (
          <text
            x={towerX + towerWidth / 2}
            y={topPadding + chartHeight + 20}
            fontSize="12"
            textAnchor="middle"
            fill={mutedColor}
          >
            Tower {index + 1}
          </text>
        )}
      </g>
    );
  };

  // Render average line
  const renderAverageLine = () => {
    if (!showAverage && !showEvenedOut) return null;

    // Calculate line position based on rendering mode
    const lineY = useStackedBlocks
      ? topPadding + chartHeight - average * blockHeight
      : topPadding + chartHeight - (average / maxValue) * (chartHeight - 20);

    return (
      <g>
        {/* Dashed average line */}
        <line
          x1={padding - 10}
          y1={lineY}
          x2={width - padding + 10}
          y2={lineY}
          stroke={averageLineColor}
          strokeWidth={2}
          strokeDasharray="6,4"
        />

        {/* "Avg" label on the left - no value shown to avoid giving away answer */}
        <text
          x={padding - 15}
          y={lineY + 4}
          fontSize="11"
          textAnchor="end"
          fill={averageLineColor}
          fontWeight="600"
        >
          Avg
        </text>
      </g>
    );
  };


  return (
    <div className="flex flex-col items-center space-y-2">
      <svg
        width={width}
        height={height}
        style={{
          backgroundColor: theme.colors.panel || '#ffffff',
          borderRadius: '8px',
        }}
      >
        {/* Title */}
        {title && (
          <text
            x={width / 2}
            y={25}
            fontSize="16"
            fontWeight="bold"
            textAnchor="middle"
            fill={textColor}
          >
            {title}
          </text>
        )}

        {/* Base line */}
        <line
          x1={padding}
          y1={topPadding + chartHeight}
          x2={width - padding}
          y2={topPadding + chartHeight}
          stroke={textColor}
          strokeWidth={2}
        />

        {/* Towers */}
        {showEvenedOut
          ? values.map((_, index) => renderTower(0, index, true))
          : values.map((value, index) => renderTower(value, index, false))
        }

        {/* Re-render evened towers with actual values */}
        {showEvenedOut && values.map((_, index) => renderTower(Math.round(average), index, true))}

        {/* Average line */}
        {renderAverageLine()}
      </svg>

      {/* Caption */}
      {caption && (
        <div className="text-sm mt-2 px-4" style={{ color: mutedColor, maxWidth: '500px', textAlign: 'center' }}>
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default AverageTowerVisualizer;
