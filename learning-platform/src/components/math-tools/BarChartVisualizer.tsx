/**
 * Bar Chart Visualizer
 *
 * Displays discrete categorical data with frequencies/counts.
 * Used for survey results, favorite items, categorical distributions.
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface BarChartVisualizerProps {
  categories: string[];           // Category labels (e.g., ['Red', 'Blue', 'Green'])
  values: number[];               // Frequencies/counts for each category
  xLabel?: string;                // X-axis label (e.g., 'Color')
  yLabel?: string;                // Y-axis label (e.g., 'Frequency')
  title?: string;                 // Chart title
  showValues?: boolean;           // Show values on top of bars (default: true)
  highlightIndex?: number;        // Index of bar to highlight (default: -1, none)
  orientation?: 'vertical' | 'horizontal'; // Bar direction (default: 'vertical')
  caption?: string;               // Optional caption below chart
}

const BarChartVisualizer: React.FC<BarChartVisualizerProps> = ({
  categories,
  values,
  xLabel,
  yLabel = 'Frequency',
  title,
  showValues = true,
  highlightIndex = -1,
  orientation = 'vertical',
  caption
}) => {
  const { theme } = useTheme();

  // Validation
  if (!categories || !values || categories.length === 0 || values.length === 0) {
    console.error('BarChartVisualizer: categories and values are required');
    return (
      <div className="p-4 border rounded" style={{
        backgroundColor: theme.colors.error + '20',
        borderColor: theme.colors.error,
        color: theme.colors.textPrimary
      }}>
        Invalid bar chart: categories and values are required
      </div>
    );
  }

  if (categories.length !== values.length) {
    console.error('BarChartVisualizer: categories and values must have same length');
    return (
      <div className="p-4 border rounded" style={{
        backgroundColor: theme.colors.error + '20',
        borderColor: theme.colors.error,
        color: theme.colors.textPrimary
      }}>
        Invalid bar chart: categories ({categories.length}) and values ({values.length}) must match
      </div>
    );
  }

  if (values.some(v => v < 0)) {
    console.error('BarChartVisualizer: negative values not allowed');
    return (
      <div className="p-4 border rounded" style={{
        backgroundColor: theme.colors.error + '20',
        borderColor: theme.colors.error,
        color: theme.colors.textPrimary
      }}>
        Invalid bar chart: frequencies cannot be negative
      </div>
    );
  }

  // SVG dimensions
  const width = 500;
  const height = 400;
  const padding = orientation === 'horizontal' ? 120 : 60; // More padding for horizontal labels
  const topPadding = title ? 80 : 60;

  // Calculate max value for scaling
  const maxValue = Math.max(...values, 1); // At least 1 to avoid division by zero
  const yMax = Math.ceil(maxValue * 1.1); // Add 10% headroom

  // Calculate bar dimensions
  const isVertical = orientation === 'vertical';
  const numBars = categories.length;
  const chartWidth = width - 2 * padding;
  const chartHeight = height - padding - topPadding;

  const barWidth = isVertical
    ? (chartWidth / numBars) * 0.7  // 70% of available space for bars, 30% for gaps
    : chartHeight / numBars * 0.7;

  const barGap = isVertical
    ? (chartWidth / numBars) * 0.15 // Half of the 30% gap on each side
    : (chartHeight / numBars) * 0.15;

  // Colors
  const barColor = theme.colors.brand || '#3b82f6';
  const highlightColor = theme.colors.success || '#10b981';
  const gridColor = theme.colors.border || '#e5e7eb';
  const textColor = theme.colors.textPrimary || '#1f2937';
  const mutedColor = theme.colors.textMuted || '#6b7280';

  // Render vertical bar chart
  const renderVerticalBars = () => {
    return values.map((value, index) => {
      const barX = padding + (chartWidth / numBars) * index + barGap;
      const barHeight = (value / yMax) * chartHeight;
      const barY = topPadding + chartHeight - barHeight;
      const isHighlighted = index === highlightIndex;

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
            stroke={isHighlighted ? highlightColor : 'none'}
            strokeWidth={isHighlighted ? 2 : 0}
          />

          {/* Value label on top */}
          {showValues && (
            <text
              x={barX + barWidth / 2}
              y={barY - 5}
              fontSize="12"
              fontWeight="bold"
              textAnchor="middle"
              fill={textColor}
            >
              {value}
            </text>
          )}

          {/* Category label */}
          <text
            x={barX + barWidth / 2}
            y={topPadding + chartHeight + 20}
            fontSize="12"
            textAnchor="middle"
            fill={mutedColor}
          >
            {categories[index]}
          </text>
        </g>
      );
    });
  };

  // Render horizontal bar chart
  const renderHorizontalBars = () => {
    const barThickness = (chartHeight / numBars) * 0.7; // Fixed thickness for horizontal bars

    return values.map((value, index) => {
      const barY = topPadding + (chartHeight / numBars) * index + barGap;
      const barLength = (value / yMax) * chartWidth; // Length based on value
      const barX = padding;
      const isHighlighted = index === highlightIndex;

      return (
        <g key={index}>
          {/* Bar */}
          <rect
            x={barX}
            y={barY}
            width={barLength}
            height={barThickness}
            fill={isHighlighted ? highlightColor : barColor}
            opacity={isHighlighted ? 1 : 0.8}
            stroke={isHighlighted ? highlightColor : 'none'}
            strokeWidth={isHighlighted ? 2 : 0}
          />

          {/* Value label at end */}
          {showValues && (
            <text
              x={barX + barLength + 5}
              y={barY + barThickness / 2 + 4}
              fontSize="12"
              fontWeight="bold"
              fill={textColor}
            >
              {value}
            </text>
          )}

          {/* Category label on left */}
          <text
            x={barX - 10}
            y={barY + barThickness / 2 + 4}
            fontSize="12"
            textAnchor="end"
            fill={mutedColor}
          >
            {categories[index]}
          </text>
        </g>
      );
    });
  };

  // Y-axis ticks and grid lines (vertical chart)
  const renderYAxis = () => {
    const numTicks = 5;
    const tickStep = yMax / numTicks;
    const ticks = [];

    for (let i = 0; i <= numTicks; i++) {
      const tickValue = Math.round(i * tickStep);
      const tickY = topPadding + chartHeight - (i * tickStep / yMax) * chartHeight;

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

  // X-axis ticks and grid lines (horizontal chart)
  const renderXAxis = () => {
    const numTicks = 5;
    const tickStep = yMax / numTicks;
    const ticks = [];

    for (let i = 0; i <= numTicks; i++) {
      const tickValue = Math.round(i * tickStep);
      const tickX = padding + (i * tickStep / yMax) * chartWidth;

      ticks.push(
        <g key={i}>
          {/* Grid line */}
          <line
            x1={tickX}
            y1={topPadding}
            x2={tickX}
            y2={topPadding + chartHeight}
            stroke={gridColor}
            strokeWidth={1}
            strokeDasharray="2,2"
            opacity={0.5}
          />
          {/* Tick label */}
          <text
            x={tickX}
            y={topPadding + chartHeight + 15}
            fontSize="11"
            textAnchor="middle"
            fill={mutedColor}
          >
            {tickValue}
          </text>
        </g>
      );
    }

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

        {/* Grid and axes */}
        {isVertical ? renderYAxis() : renderXAxis()}

        {/* Axes lines */}
        {isVertical ? (
          <>
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
          </>
        ) : (
          <>
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
          </>
        )}

        {/* Bars */}
        {isVertical ? renderVerticalBars() : renderHorizontalBars()}

        {/* Axis labels */}
        {yLabel && isVertical && (
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

        {xLabel && isVertical && (
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

        {xLabel && !isVertical && (
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

        {yLabel && !isVertical && (
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
      </svg>

      {/* Caption */}
      {caption && (
        <div className="text-sm mt-2" style={{ color: mutedColor, maxWidth: '500px', textAlign: 'center' }}>
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default BarChartVisualizer;
