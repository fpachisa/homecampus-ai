/**
 * Line Chart Visualizer
 *
 * Displays time-series or sequential data as connected points.
 * Shows trends, patterns, and changes over time.
 * Used for teaching: trend analysis, predictions, interpolation, data interpretation.
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface LineChartVisualizerProps {
  xLabels: string[];                 // X-axis labels (e.g., ['Jan', 'Feb', 'Mar'] or ['2020', '2021', '2022'])
  yValues: number[];                 // Y-axis values corresponding to each x label
  xAxisLabel?: string;               // X-axis label (e.g., 'Month', 'Year')
  yAxisLabel?: string;               // Y-axis label (e.g., 'Temperature (°C)', 'Sales')
  title?: string;                    // Chart title
  showPoints?: boolean;              // Show data point markers (default: true)
  showGrid?: boolean;                // Show gridlines (default: true)
  highlightPoint?: number;           // Index of point to highlight (default: -1, none)
  trendLine?: boolean;               // Show linear trend line (default: false)
  caption?: string;                  // Optional caption below chart
}

const LineChartVisualizer: React.FC<LineChartVisualizerProps> = ({
  xLabels,
  yValues,
  xAxisLabel,
  yAxisLabel,
  title,
  showPoints = true,
  showGrid = true,
  highlightPoint = -1,
  trendLine = false,
  caption
}) => {
  const { theme } = useTheme();

  // Validation
  if (!xLabels || !yValues || xLabels.length === 0 || yValues.length === 0) {
    console.error('LineChartVisualizer: xLabels and yValues are required');
    return (
      <div className="p-4 border rounded" style={{
        backgroundColor: theme.colors.error + '20',
        borderColor: theme.colors.error,
        color: theme.colors.textPrimary
      }}>
        Invalid line chart: xLabels and yValues are required
      </div>
    );
  }

  if (xLabels.length !== yValues.length) {
    console.error('LineChartVisualizer: xLabels and yValues must have same length');
    return (
      <div className="p-4 border rounded" style={{
        backgroundColor: theme.colors.error + '20',
        borderColor: theme.colors.error,
        color: theme.colors.textPrimary
      }}>
        Invalid line chart: xLabels ({xLabels.length}) and yValues ({yValues.length}) must match
      </div>
    );
  }

  // SVG dimensions
  const width = 600;
  const height = 400;
  const padding = 60;
  const topPadding = title ? 80 : 60;
  const bottomPadding = 80;

  // Calculate chart dimensions
  const chartWidth = width - 2 * padding;
  const chartHeight = height - topPadding - bottomPadding;

  // Calculate Y-axis scale
  const minValue = Math.min(...yValues);
  const maxValue = Math.max(...yValues);
  const yRange = maxValue - minValue;
  const yMin = Math.floor(minValue - yRange * 0.1); // Add 10% padding below
  const yMax = Math.ceil(maxValue + yRange * 0.1);  // Add 10% padding above
  const yScale = yMax - yMin || 1; // Prevent division by zero

  // Theme colors
  const lineColor = theme.colors.brand || '#3b82f6';
  const pointColor = theme.colors.success || '#10b981';
  const highlightColor = theme.colors.error || '#ef4444';
  const gridColor = theme.colors.border || '#e5e7eb';
  const textColor = theme.colors.textPrimary || '#1f2937';
  const mutedColor = theme.colors.textMuted || '#6b7280';
  const bgColor = theme.colors.panel || '#ffffff';

  // Calculate point positions
  const points = yValues.map((value, index) => {
    const x = padding + (index / (xLabels.length - 1)) * chartWidth;
    const y = topPadding + chartHeight - ((value - yMin) / yScale) * chartHeight;
    return { x, y, value, label: xLabels[index] };
  });

  // Create line path
  const linePath = points
    .map((point, index) => {
      if (index === 0) {
        return `M ${point.x} ${point.y}`;
      }
      return `L ${point.x} ${point.y}`;
    })
    .join(' ');

  // Calculate linear trend line (simple linear regression)
  const calculateTrendLine = () => {
    const n = yValues.length;
    let sumX = 0;
    let sumY = 0;
    let sumXY = 0;
    let sumX2 = 0;

    yValues.forEach((y, i) => {
      sumX += i;
      sumY += y;
      sumXY += i * y;
      sumX2 += i * i;
    });

    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    // Calculate trend line points
    const trendPoints = [
      {
        x: padding,
        y: topPadding + chartHeight - ((intercept - yMin) / yScale) * chartHeight
      },
      {
        x: padding + chartWidth,
        y: topPadding + chartHeight - ((slope * (n - 1) + intercept - yMin) / yScale) * chartHeight
      }
    ];

    return `M ${trendPoints[0].x} ${trendPoints[0].y} L ${trendPoints[1].x} ${trendPoints[1].y}`;
  };

  // Y-axis ticks and grid lines
  const renderYAxis = () => {
    const numTicks = 5;
    const tickStep = yScale / numTicks;
    const ticks = [];

    for (let i = 0; i <= numTicks; i++) {
      const tickValue = yMin + i * tickStep;
      const tickY = topPadding + chartHeight - (i * tickStep / yScale) * chartHeight;

      ticks.push(
        <g key={i}>
          {/* Grid line */}
          {showGrid && (
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
          )}
          {/* Tick label */}
          <text
            x={padding - 10}
            y={tickY + 4}
            fontSize="11"
            textAnchor="end"
            fill={mutedColor}
          >
            {tickValue.toFixed(1)}
          </text>
        </g>
      );
    }

    return ticks;
  };

  // X-axis labels
  const renderXAxis = () => {
    return xLabels.map((label, index) => {
      const x = padding + (index / (xLabels.length - 1)) * chartWidth;
      const y = topPadding + chartHeight;

      return (
        <g key={index}>
          {/* Vertical grid line */}
          {showGrid && (
            <line
              x1={x}
              y1={topPadding}
              x2={x}
              y2={y}
              stroke={gridColor}
              strokeWidth={1}
              strokeDasharray="2,2"
              opacity={0.3}
            />
          )}
          {/* X-axis label */}
          <text
            x={x}
            y={y + 20}
            fontSize="11"
            textAnchor="middle"
            fill={mutedColor}
          >
            {label}
          </text>
        </g>
      );
    });
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <svg
        width={width}
        height={height}
        style={{
          backgroundColor: bgColor,
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
        {renderYAxis()}
        {renderXAxis()}

        {/* Axes lines */}
        <line
          x1={padding}
          y1={topPadding}
          x2={padding}
          y2={topPadding + chartHeight}
          stroke={textColor}
          strokeWidth={2}
        />
        <line
          x1={padding}
          y1={topPadding + chartHeight}
          x2={width - padding}
          y2={topPadding + chartHeight}
          stroke={textColor}
          strokeWidth={2}
        />

        {/* Trend line (if enabled) */}
        {trendLine && yValues.length > 1 && (
          <path
            d={calculateTrendLine()}
            stroke={lineColor}
            strokeWidth={2}
            strokeDasharray="5,5"
            fill="none"
            opacity={0.5}
          />
        )}

        {/* Line connecting points */}
        <path
          d={linePath}
          stroke={lineColor}
          strokeWidth={3}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data points */}
        {showPoints && points.map((point, index) => {
          const isHighlighted = index === highlightPoint;
          return (
            <g key={index}>
              {/* Point circle */}
              <circle
                cx={point.x}
                cy={point.y}
                r={isHighlighted ? 8 : 5}
                fill={isHighlighted ? highlightColor : pointColor}
                stroke={bgColor}
                strokeWidth={2}
              />
              {/* Value label (for highlighted point) */}
              {isHighlighted && (
                <text
                  x={point.x}
                  y={point.y - 15}
                  fontSize="12"
                  fontWeight="bold"
                  textAnchor="middle"
                  fill={textColor}
                >
                  {point.value}
                </text>
              )}
            </g>
          );
        })}

        {/* Axis labels */}
        {yAxisLabel && (
          <text
            x={20}
            y={topPadding + chartHeight / 2}
            fontSize="13"
            fontWeight="600"
            textAnchor="middle"
            fill={textColor}
            transform={`rotate(-90 20 ${topPadding + chartHeight / 2})`}
          >
            {yAxisLabel}
          </text>
        )}

        {xAxisLabel && (
          <text
            x={width / 2}
            y={height - 20}
            fontSize="13"
            fontWeight="600"
            textAnchor="middle"
            fill={textColor}
          >
            {xAxisLabel}
          </text>
        )}
      </svg>

      {/* Caption */}
      {caption && (
        <div className="text-sm mt-2" style={{ color: mutedColor, maxWidth: '600px', textAlign: 'center' }}>
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default LineChartVisualizer;
