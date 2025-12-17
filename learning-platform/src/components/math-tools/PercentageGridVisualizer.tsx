/**
 * Percentage Grid Visualizer
 *
 * Displays percentages as a 10×10 grid (100 squares).
 * Each square represents 1%. Used for teaching percentage concepts
 * where 100 equal parts represent the whole (100%).
 * Designed for Primary 5 Percentage topic.
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface PercentageGridVisualizerProps {
  shadedCount: number;           // 0-100: number of shaded squares
  showPercentage?: boolean;      // Show percentage label (default: true)
  showFraction?: boolean;        // Show as fraction /100 (default: false)
  highlightRow?: number;         // Highlight specific row (0-9, 0 = top row)
  caption?: string;              // Optional caption text
  shadedColor?: string;          // Custom color for shaded squares
  secondShadedCount?: number;    // For showing two different portions (e.g., adults vs children)
  secondShadedColor?: string;    // Color for second shaded portion
}

const PercentageGridVisualizer: React.FC<PercentageGridVisualizerProps> = ({
  shadedCount,
  showPercentage = true,
  showFraction = false,
  highlightRow,
  caption,
  shadedColor,
  secondShadedCount = 0,
  secondShadedColor
}) => {
  const { theme } = useTheme();

  // Validation
  if (shadedCount < 0 || shadedCount > 100) {
    return (
      <div className="my-4 p-4 rounded-lg border border-red-300 bg-red-50 dark:bg-red-900/20">
        <p className="text-red-700 dark:text-red-400">Invalid shadedCount: must be between 0 and 100</p>
      </div>
    );
  }

  if (secondShadedCount < 0 || shadedCount + secondShadedCount > 100) {
    return (
      <div className="my-4 p-4 rounded-lg border border-red-300 bg-red-50 dark:bg-red-900/20">
        <p className="text-red-700 dark:text-red-400">Invalid secondShadedCount: total shaded cannot exceed 100</p>
      </div>
    );
  }

  // Grid dimensions
  const gridSize = 10; // 10x10 grid
  const cellSize = 28;
  const cellGap = 2;
  const totalSize = gridSize * cellSize + (gridSize - 1) * cellGap;
  const padding = 20;
  const svgWidth = totalSize + padding * 2;
  const svgHeight = totalSize + padding * 2;

  // Colors
  const primaryShaded = shadedColor || '#3b82f6'; // blue-500
  const secondaryShaded = secondShadedColor || '#10b981'; // emerald-500
  const emptyColor = theme.colors.surface || '#ffffff';
  const strokeColor = theme.colors.textSecondary || '#6b7280';
  const highlightStroke = '#f59e0b'; // amber-500

  // Generate grid squares
  const squares = [];
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const index = row * gridSize + col;
      const x = padding + col * (cellSize + cellGap);
      const y = padding + row * (cellSize + cellGap);

      // Determine fill color
      let fillColor = emptyColor;
      let fillOpacity = 0.3;

      if (index < shadedCount) {
        fillColor = primaryShaded;
        fillOpacity = 0.85;
      } else if (index < shadedCount + secondShadedCount) {
        fillColor = secondaryShaded;
        fillOpacity = 0.85;
      }

      // Check if this row should be highlighted
      const isHighlightedRow = highlightRow !== undefined && row === highlightRow;

      squares.push(
        <rect
          key={index}
          x={x}
          y={y}
          width={cellSize}
          height={cellSize}
          fill={fillColor}
          fillOpacity={fillOpacity}
          stroke={isHighlightedRow ? highlightStroke : strokeColor}
          strokeWidth={isHighlightedRow ? 2 : 1}
          rx={2}
          ry={2}
        />
      );
    }
  }

  return (
    <div
      className="my-4 p-4 rounded-lg border"
      style={{ borderColor: theme.colors.border, backgroundColor: theme.colors.surface }}
    >
      {/* SVG Grid */}
      <div className="flex justify-center">
        <svg
          width={svgWidth}
          height={svgHeight}
          viewBox={`0 0 ${svgWidth} ${svgHeight}`}
          style={{ maxWidth: '100%', height: 'auto' }}
        >
          {/* Grid outline */}
          <rect
            x={padding - 2}
            y={padding - 2}
            width={totalSize + 4}
            height={totalSize + 4}
            fill="none"
            stroke={strokeColor}
            strokeWidth="2"
            rx={4}
            ry={4}
          />

          {/* Grid squares */}
          {squares}
        </svg>
      </div>

      {/* Percentage/Fraction Labels */}
      {(showPercentage || showFraction) && (
        <div className="mt-3 flex justify-center gap-4 flex-wrap">
          {/* Primary shaded portion */}
          {shadedCount > 0 && (
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: primaryShaded, opacity: 0.85 }}
              />
              <span style={{ color: theme.colors.textPrimary }}>
                {showPercentage && `${shadedCount}%`}
                {showPercentage && showFraction && ' = '}
                {showFraction && <MathText>{`$\\frac{${shadedCount}}{100}$`}</MathText>}
              </span>
            </div>
          )}

          {/* Secondary shaded portion */}
          {secondShadedCount > 0 && (
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: secondaryShaded, opacity: 0.85 }}
              />
              <span style={{ color: theme.colors.textPrimary }}>
                {showPercentage && `${secondShadedCount}%`}
                {showPercentage && showFraction && ' = '}
                {showFraction && <MathText>{`$\\frac{${secondShadedCount}}{100}$`}</MathText>}
              </span>
            </div>
          )}

          {/* Unshaded portion */}
          {showPercentage && (100 - shadedCount - secondShadedCount) > 0 && (
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded border"
                style={{ backgroundColor: emptyColor, opacity: 0.3, borderColor: strokeColor }}
              />
              <span style={{ color: theme.colors.textMuted }}>
                {100 - shadedCount - secondShadedCount}% unshaded
              </span>
            </div>
          )}
        </div>
      )}

      {/* Caption */}
      {caption && (
        <div
          className="text-sm mt-4 pt-4 border-t text-center"
          style={{ borderColor: theme.colors.border, color: theme.colors.textMuted }}
        >
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default PercentageGridVisualizer;
