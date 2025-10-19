/**
 * Histogram Visualizer
 *
 * Displays continuous data distributions with class intervals and frequencies.
 * Used for age ranges, height ranges, test score distributions, etc.
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface HistogramInterval {
  start: number;      // Class interval start (e.g., 0)
  end: number;        // Class interval end (e.g., 10)
  frequency: number;  // Count in this interval (e.g., 5)
}

interface HistogramVisualizerProps {
  intervals: HistogramInterval[];  // Array of class intervals with frequencies
  xLabel?: string;                 // X-axis label (e.g., 'Height (cm)')
  yLabel?: string;                 // Y-axis label (default: 'Frequency')
  title?: string;                  // Chart title
  showFrequencies?: boolean;       // Show frequency labels on bars (default: true)
  showMidpoints?: boolean;         // Show class midpoint markers (default: false)
  highlightInterval?: number;      // Index of interval to highlight (default: -1)
  caption?: string;                // Optional caption below chart
}

const HistogramVisualizer: React.FC<HistogramVisualizerProps> = ({
  intervals,
  xLabel,
  yLabel = 'Frequency',
  title,
  showFrequencies = true,
  showMidpoints = false,
  highlightInterval = -1,
  caption
}) => {
  const { theme } = useTheme();

  // Validation
  if (!intervals || intervals.length === 0) {
    console.error('HistogramVisualizer: intervals are required');
    return (
      <div className="p-4 border rounded" style={{
        backgroundColor: theme.colors.error + '20',
        borderColor: theme.colors.error,
        color: theme.colors.textPrimary
      }}>
        Invalid histogram: intervals are required
      </div>
    );
  }

  // Validate intervals are contiguous and properly ordered
  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];

    if (interval.start >= interval.end) {
      console.error(`HistogramVisualizer: interval ${i} has start >= end`);
      return (
        <div className="p-4 border rounded" style={{
          backgroundColor: theme.colors.error + '20',
          borderColor: theme.colors.error,
          color: theme.colors.textPrimary
        }}>
          Invalid histogram: interval {i} has start ({interval.start}) ≥ end ({interval.end})
        </div>
      );
    }

    if (interval.frequency < 0) {
      console.error(`HistogramVisualizer: interval ${i} has negative frequency`);
      return (
        <div className="p-4 border rounded" style={{
          backgroundColor: theme.colors.error + '20',
          borderColor: theme.colors.error,
          color: theme.colors.textPrimary
        }}>
          Invalid histogram: frequencies cannot be negative
        </div>
      );
    }

    // Check if intervals are contiguous (end of one = start of next)
    if (i < intervals.length - 1) {
      const nextInterval = intervals[i + 1];
      if (Math.abs(interval.end - nextInterval.start) > 0.01) { // Allow small floating point errors
        console.warn(`HistogramVisualizer: gap between intervals ${i} and ${i + 1}`);
      }
    }
  }

  // SVG dimensions
  const width = 500;
  const height = 400;
  const padding = 60;
  const topPadding = title ? 80 : 60;
  const chartWidth = width - 2 * padding;
  const chartHeight = height - padding - topPadding;

  // Find data range
  const xMin = intervals[0].start;
  const xMax = intervals[intervals.length - 1].end;
  const xRange = xMax - xMin;

  const maxFrequency = Math.max(...intervals.map(i => i.frequency), 1);
  const yMax = Math.ceil(maxFrequency * 1.1); // Add 10% headroom

  // Calculate scaling factors
  const xScale = chartWidth / xRange;
  const yScale = chartHeight / yMax;

  // Colors
  const barColor = theme.colors.brand || '#3b82f6';
  const highlightColor = theme.colors.success || '#10b981';
  const gridColor = theme.colors.border || '#e5e7eb';
  const textColor = theme.colors.textPrimary || '#1f2937';
  const mutedColor = theme.colors.textMuted || '#6b7280';
  const midpointColor = theme.colors.warning || '#f59e0b';

  // Render histogram bars
  const renderBars = () => {
    return intervals.map((interval, index) => {
      const barX = padding + (interval.start - xMin) * xScale;
      const barWidth = (interval.end - interval.start) * xScale;
      const barHeight = interval.frequency * yScale;
      const barY = topPadding + chartHeight - barHeight;
      const isHighlighted = index === highlightInterval;

      // Calculate midpoint
      const midpoint = (interval.start + interval.end) / 2;
      const midpointX = padding + (midpoint - xMin) * xScale;

      return (
        <g key={index}>
          {/* Bar */}
          <rect
            x={barX}
            y={barY}
            width={barWidth}
            height={barHeight}
            fill={isHighlighted ? highlightColor : barColor}
            opacity={isHighlighted ? 1 : 0.8}
            stroke={theme.colors.textPrimary}
            strokeWidth={1}
          />

          {/* Frequency label on top */}
          {showFrequencies && interval.frequency > 0 && (
            <text
              x={barX + barWidth / 2}
              y={barY - 5}
              fontSize="12"
              fontWeight="bold"
              textAnchor="middle"
              fill={textColor}
            >
              {interval.frequency}
            </text>
          )}

          {/* Midpoint marker */}
          {showMidpoints && (
            <>
              <line
                x1={midpointX}
                y1={topPadding + chartHeight}
                x2={midpointX}
                y2={topPadding + chartHeight + 8}
                stroke={midpointColor}
                strokeWidth={2}
              />
              <circle
                cx={midpointX}
                cy={topPadding + chartHeight + 8}
                r={3}
                fill={midpointColor}
              />
            </>
          )}
        </g>
      );
    });
  };

  // Y-axis ticks and grid lines
  const renderYAxis = () => {
    const numTicks = 5;
    const tickStep = yMax / numTicks;
    const ticks = [];

    for (let i = 0; i <= numTicks; i++) {
      const tickValue = Math.round(i * tickStep);
      const tickY = topPadding + chartHeight - (i * tickStep) * yScale;

      ticks.push(
        <g key={i}>
          {/* Grid line */}
          <line
            x1={padding}
            y1={tickY}
            x2={width - padding}
            y2={tickY}
            stroke={gridColor}
            strokeWidth={1}
            strokeDasharray="2,2"
            opacity={0.5}
          />
          {/* Tick label */}
          <text
            x={padding - 10}
            y={tickY + 4}
            fontSize="11"
            textAnchor="end"
            fill={mutedColor}
          >
            {tickValue}
          </text>
        </g>
      );
    }

    return ticks;
  };

  // X-axis ticks for interval boundaries
  const renderXAxis = () => {
    const ticks = [];

    // Add tick at start
    ticks.push(
      <text
        key="start"
        x={padding}
        y={topPadding + chartHeight + 20}
        fontSize="11"
        textAnchor="middle"
        fill={mutedColor}
      >
        {intervals[0].start}
      </text>
    );

    // Add tick at each interval boundary
    intervals.forEach((interval, index) => {
      const tickX = padding + (interval.end - xMin) * xScale;

      ticks.push(
        <text
          key={`end-${index}`}
          x={tickX}
          y={topPadding + chartHeight + 20}
          fontSize="11"
          textAnchor="middle"
          fill={mutedColor}
        >
          {interval.end}
        </text>
      );
    });

    return ticks;
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
            y={30}
            fontSize="16"
            fontWeight="bold"
            textAnchor="middle"
            fill={textColor}
          >
            {title}
          </text>
        )}

        {/* Grid and Y-axis */}
        {renderYAxis()}

        {/* Axes lines */}
        {/* Y-axis */}
        <line
          x1={padding}
          y1={topPadding}
          x2={padding}
          y2={topPadding + chartHeight}
          stroke={textColor}
          strokeWidth={2}
        />
        {/* X-axis */}
        <line
          x1={padding}
          y1={topPadding + chartHeight}
          x2={width - padding}
          y2={topPadding + chartHeight}
          stroke={textColor}
          strokeWidth={2}
        />

        {/* Bars */}
        {renderBars()}

        {/* X-axis ticks */}
        {renderXAxis()}

        {/* Axis labels */}
        {yLabel && (
          <text
            x={20}
            y={topPadding + chartHeight / 2}
            fontSize="13"
            fontWeight="600"
            textAnchor="middle"
            fill={textColor}
            transform={`rotate(-90 20 ${topPadding + chartHeight / 2})`}
          >
            {yLabel}
          </text>
        )}

        {xLabel && (
          <text
            x={width / 2}
            y={height - 15}
            fontSize="13"
            fontWeight="600"
            textAnchor="middle"
            fill={textColor}
          >
            {xLabel}
          </text>
        )}
      </svg>

      {/* Caption */}
      {caption && (
        <div className="text-sm mt-2" style={{ color: mutedColor, maxWidth: '500px', textAlign: 'center' }}>
          <MathText content={caption} />
        </div>
      )}

      {/* Legend for midpoints */}
      {showMidpoints && (
        <div className="text-xs mt-2 flex items-center" style={{ color: mutedColor }}>
          <circle cx={8} cy={8} r={3} fill={midpointColor} />
          <span className="ml-2">Class midpoints</span>
        </div>
      )}
    </div>
  );
};

export default HistogramVisualizer;
