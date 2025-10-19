/**
 * Box Plot Visualizer
 *
 * Displays five-number summary and distribution using box-and-whisker plot.
 * Shows minimum, Q1, median, Q3, maximum, and outliers.
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface BoxPlotVisualizerProps {
  min: number;             // Minimum value
  q1: number;              // First quartile (25th percentile)
  median: number;          // Median (50th percentile, Q2)
  q3: number;              // Third quartile (75th percentile)
  max: number;             // Maximum value
  outliers?: number[];     // Outlier values beyond whiskers (default: [])
  label?: string;          // Dataset label (e.g., 'Class A Scores')
  showLabels?: boolean;    // Show five-number summary labels (default: true)
  showIQR?: boolean;       // Highlight IQR region (default: false)
  orientation?: 'horizontal' | 'vertical'; // Box plot orientation (default: 'horizontal')
  caption?: string;        // Optional caption below plot
}

const BoxPlotVisualizer: React.FC<BoxPlotVisualizerProps> = ({
  min,
  q1,
  median,
  q3,
  max,
  outliers = [],
  label,
  showLabels = true,
  showIQR = false,
  orientation = 'horizontal',
  caption
}) => {
  const { theme } = useTheme();

  // Validation
  if (!(min <= q1 && q1 <= median && median <= q3 && q3 <= max)) {
    console.error('BoxPlotVisualizer: values must satisfy min ≤ Q1 ≤ median ≤ Q3 ≤ max');
    return (
      <div className="p-4 border rounded" style={{
        backgroundColor: theme.colors.error + '20',
        borderColor: theme.colors.error,
        color: theme.colors.textPrimary
      }}>
        Invalid box plot: values must satisfy min ({min}) ≤ Q1 ({q1}) ≤ median ({median}) ≤ Q3 ({q3}) ≤ max ({max})
      </div>
    );
  }

  // Calculate IQR for reference
  const iqr = q3 - q1;

  // SVG dimensions
  const width = 500;
  const height = 300;
  const padding = 60;
  const topPadding = label ? 80 : 60;

  const isHorizontal = orientation === 'horizontal';

  // Data range for scaling
  const dataMin = Math.min(min, ...outliers);
  const dataMax = Math.max(max, ...outliers);
  const dataRange = dataMax - dataMin;
  const paddedMin = dataMin - dataRange * 0.1;
  const paddedMax = dataMax + dataRange * 0.1;
  const paddedRange = paddedMax - paddedMin;

  // Chart dimensions
  const chartWidth = width - 2 * padding;
  const chartHeight = height - padding - topPadding;

  // Scaling function
  const scale = isHorizontal ? chartWidth / paddedRange : chartHeight / paddedRange;

  const toPosition = (value: number) => {
    if (isHorizontal) {
      return padding + (value - paddedMin) * scale;
    } else {
      return topPadding + chartHeight - (value - paddedMin) * scale;
    }
  };

  // Box plot dimensions
  const boxHeight = isHorizontal ? 60 : chartWidth * 0.4;
  const boxY = isHorizontal ? topPadding + chartHeight / 2 - boxHeight / 2 : padding + chartWidth * 0.3;

  // Colors
  const boxColor = theme.colors.brand || '#3b82f6';
  const medianColor = theme.colors.error || '#ef4444';
  const whiskerColor = theme.colors.textPrimary || '#1f2937';
  const outlierColor = theme.colors.warning || '#f59e0b';
  const iqrHighlight = theme.colors.success || '#10b981';
  const textColor = theme.colors.textPrimary || '#1f2937';
  const mutedColor = theme.colors.textMuted || '#6b7280';

  // Render horizontal box plot
  const renderHorizontalBoxPlot = () => {
    const minX = toPosition(min);
    const q1X = toPosition(q1);
    const medianX = toPosition(median);
    const q3X = toPosition(q3);
    const maxX = toPosition(max);

    return (
      <g>
        {/* Number line */}
        <line
          x1={padding}
          y1={boxY + boxHeight + 40}
          x2={width - padding}
          y2={boxY + boxHeight + 40}
          stroke={whiskerColor}
          strokeWidth={2}
        />

        {/* Whisker: min to Q1 */}
        <line
          x1={minX}
          y1={boxY + boxHeight / 2}
          x2={q1X}
          y2={boxY + boxHeight / 2}
          stroke={whiskerColor}
          strokeWidth={2}
        />
        {/* Min cap */}
        <line
          x1={minX}
          y1={boxY + boxHeight / 2 - 15}
          x2={minX}
          y2={boxY + boxHeight / 2 + 15}
          stroke={whiskerColor}
          strokeWidth={2}
        />

        {/* Whisker: Q3 to max */}
        <line
          x1={q3X}
          y1={boxY + boxHeight / 2}
          x2={maxX}
          y2={boxY + boxHeight / 2}
          stroke={whiskerColor}
          strokeWidth={2}
        />
        {/* Max cap */}
        <line
          x1={maxX}
          y1={boxY + boxHeight / 2 - 15}
          x2={maxX}
          y2={boxY + boxHeight / 2 + 15}
          stroke={whiskerColor}
          strokeWidth={2}
        />

        {/* IQR highlight (behind box) */}
        {showIQR && (
          <rect
            x={q1X}
            y={boxY - 5}
            width={q3X - q1X}
            height={boxHeight + 10}
            fill={iqrHighlight}
            opacity={0.2}
            stroke={iqrHighlight}
            strokeWidth={2}
            strokeDasharray="4,4"
          />
        )}

        {/* Box: Q1 to Q3 */}
        <rect
          x={q1X}
          y={boxY}
          width={q3X - q1X}
          height={boxHeight}
          fill={boxColor}
          fillOpacity={0.3}
          stroke={boxColor}
          strokeWidth={2}
        />

        {/* Median line */}
        <line
          x1={medianX}
          y1={boxY}
          x2={medianX}
          y2={boxY + boxHeight}
          stroke={medianColor}
          strokeWidth={3}
        />

        {/* Outliers */}
        {outliers.map((outlier, index) => {
          const outlierX = toPosition(outlier);
          return (
            <circle
              key={index}
              cx={outlierX}
              cy={boxY + boxHeight / 2}
              r={5}
              fill={outlierColor}
              stroke={whiskerColor}
              strokeWidth={1}
            />
          );
        })}

        {/* Labels */}
        {showLabels && (
          <>
            <text x={minX} y={boxY + boxHeight + 55} fontSize="11" textAnchor="middle" fill={mutedColor}>
              Min: {min}
            </text>
            <text x={q1X} y={boxY - 10} fontSize="11" textAnchor="middle" fill={textColor} fontWeight="bold">
              Q₁: {q1}
            </text>
            <text x={medianX} y={boxY - 10} fontSize="11" textAnchor="middle" fill={medianColor} fontWeight="bold">
              M: {median}
            </text>
            <text x={q3X} y={boxY - 10} fontSize="11" textAnchor="middle" fill={textColor} fontWeight="bold">
              Q₃: {q3}
            </text>
            <text x={maxX} y={boxY + boxHeight + 55} fontSize="11" textAnchor="middle" fill={mutedColor}>
              Max: {max}
            </text>
          </>
        )}

        {/* IQR label */}
        {showIQR && (
          <text
            x={(q1X + q3X) / 2}
            y={boxY + boxHeight + 25}
            fontSize="11"
            textAnchor="middle"
            fill={iqrHighlight}
            fontWeight="bold"
          >
            IQR = {iqr.toFixed(1)}
          </text>
        )}
      </g>
    );
  };

  // Render vertical box plot
  const renderVerticalBoxPlot = () => {
    const minY = toPosition(min);
    const q1Y = toPosition(q1);
    const medianY = toPosition(median);
    const q3Y = toPosition(q3);
    const maxY = toPosition(max);

    const boxX = padding + chartWidth / 2 - boxHeight / 2;

    return (
      <g>
        {/* Number line */}
        <line
          x1={boxX - 40}
          y1={topPadding}
          x2={boxX - 40}
          y2={topPadding + chartHeight}
          stroke={whiskerColor}
          strokeWidth={2}
        />

        {/* Whisker: Q3 to max */}
        <line
          x1={boxX + boxHeight / 2}
          y1={maxY}
          x2={boxX + boxHeight / 2}
          y2={q3Y}
          stroke={whiskerColor}
          strokeWidth={2}
        />
        {/* Max cap */}
        <line
          x1={boxX + boxHeight / 2 - 15}
          y1={maxY}
          x2={boxX + boxHeight / 2 + 15}
          y2={maxY}
          stroke={whiskerColor}
          strokeWidth={2}
        />

        {/* Whisker: min to Q1 */}
        <line
          x1={boxX + boxHeight / 2}
          y1={q1Y}
          x2={boxX + boxHeight / 2}
          y2={minY}
          stroke={whiskerColor}
          strokeWidth={2}
        />
        {/* Min cap */}
        <line
          x1={boxX + boxHeight / 2 - 15}
          y1={minY}
          x2={boxX + boxHeight / 2 + 15}
          y2={minY}
          stroke={whiskerColor}
          strokeWidth={2}
        />

        {/* IQR highlight */}
        {showIQR && (
          <rect
            x={boxX - 5}
            y={q3Y}
            width={boxHeight + 10}
            height={q1Y - q3Y}
            fill={iqrHighlight}
            opacity={0.2}
            stroke={iqrHighlight}
            strokeWidth={2}
            strokeDasharray="4,4"
          />
        )}

        {/* Box: Q1 to Q3 */}
        <rect
          x={boxX}
          y={q3Y}
          width={boxHeight}
          height={q1Y - q3Y}
          fill={boxColor}
          fillOpacity={0.3}
          stroke={boxColor}
          strokeWidth={2}
        />

        {/* Median line */}
        <line
          x1={boxX}
          y1={medianY}
          x2={boxX + boxHeight}
          y2={medianY}
          stroke={medianColor}
          strokeWidth={3}
        />

        {/* Outliers */}
        {outliers.map((outlier, index) => {
          const outlierY = toPosition(outlier);
          return (
            <circle
              key={index}
              cx={boxX + boxHeight / 2}
              cy={outlierY}
              r={5}
              fill={outlierColor}
              stroke={whiskerColor}
              strokeWidth={1}
            />
          );
        })}

        {/* Labels */}
        {showLabels && (
          <>
            <text x={boxX - 50} y={maxY + 4} fontSize="11" textAnchor="end" fill={mutedColor}>
              Max: {max}
            </text>
            <text x={boxX + boxHeight + 10} y={q3Y + 4} fontSize="11" fill={textColor} fontWeight="bold">
              Q₃: {q3}
            </text>
            <text x={boxX + boxHeight + 10} y={medianY + 4} fontSize="11" fill={medianColor} fontWeight="bold">
              M: {median}
            </text>
            <text x={boxX + boxHeight + 10} y={q1Y + 4} fontSize="11" fill={textColor} fontWeight="bold">
              Q₁: {q1}
            </text>
            <text x={boxX - 50} y={minY + 4} fontSize="11" textAnchor="end" fill={mutedColor}>
              Min: {min}
            </text>
          </>
        )}

        {/* IQR label */}
        {showIQR && (
          <text
            x={boxX + boxHeight / 2}
            y={(q1Y + q3Y) / 2 + 4}
            fontSize="11"
            textAnchor="middle"
            fill={iqrHighlight}
            fontWeight="bold"
          >
            IQR = {iqr.toFixed(1)}
          </text>
        )}
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
        {/* Title/Label */}
        {label && (
          <text
            x={width / 2}
            y={30}
            fontSize="16"
            fontWeight="bold"
            textAnchor="middle"
            fill={textColor}
          >
            {label}
          </text>
        )}

        {/* Box plot */}
        {isHorizontal ? renderHorizontalBoxPlot() : renderVerticalBoxPlot()}
      </svg>

      {/* Caption */}
      {caption && (
        <div className="text-sm mt-2" style={{ color: mutedColor, maxWidth: '500px', textAlign: 'center' }}>
          <MathText content={caption} />
        </div>
      )}

      {/* Legend */}
      {outliers.length > 0 && (
        <div className="text-xs mt-2 flex items-center space-x-4" style={{ color: mutedColor }}>
          <div className="flex items-center">
            <circle cx={8} cy={8} r={5} fill={outlierColor} stroke={whiskerColor} strokeWidth={1} />
            <span className="ml-2">Outliers ({outliers.length})</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoxPlotVisualizer;
