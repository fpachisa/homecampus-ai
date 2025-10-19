/**
 * Scatter Plot Visualizer
 *
 * Displays bivariate data relationships with optional trend line.
 * Used for correlation, pattern recognition, and relationship analysis.
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface DataPoint {
  x: number;         // X-coordinate
  y: number;         // Y-coordinate
  label?: string;    // Optional point label
}

interface ScatterPlotVisualizerProps {
  points: DataPoint[];             // Array of data points
  xLabel?: string;                 // X-axis label (e.g., 'Study Hours')
  yLabel?: string;                 // Y-axis label (e.g., 'Test Score')
  title?: string;                  // Chart title
  showTrendLine?: boolean;         // Show line of best fit (default: false)
  showGrid?: boolean;              // Show grid lines (default: true)
  xRange?: [number, number];       // X-axis range (auto-calculated if not provided)
  yRange?: [number, number];       // Y-axis range (auto-calculated if not provided)
  highlightPoint?: number;         // Index of point to highlight (default: -1)
  caption?: string;                // Optional caption below chart
}

const ScatterPlotVisualizer: React.FC<ScatterPlotVisualizerProps> = ({
  points,
  xLabel,
  yLabel,
  title,
  showTrendLine = false,
  showGrid = true,
  xRange: xRangeProp,
  yRange: yRangeProp,
  highlightPoint = -1,
  caption
}) => {
  const { theme } = useTheme();

  // Validation
  if (!points || points.length === 0) {
    console.error('ScatterPlotVisualizer: points are required');
    return (
      <div className="p-4 border rounded" style={{
        backgroundColor: theme.colors.error + '20',
        borderColor: theme.colors.error,
        color: theme.colors.textPrimary
      }}>
        Invalid scatter plot: points are required
      </div>
    );
  }

  // Extract x and y values
  const xValues = points.map(p => p.x);
  const yValues = points.map(p => p.y);

  // Calculate ranges
  let xRange: [number, number];
  let yRange: [number, number];

  if (xRangeProp) {
    xRange = xRangeProp;
  } else {
    const xMin = Math.min(...xValues);
    const xMax = Math.max(...xValues);
    const xPadding = (xMax - xMin) * 0.1 || 1; // 10% padding or at least 1
    xRange = [xMin - xPadding, xMax + xPadding];
  }

  if (yRangeProp) {
    yRange = yRangeProp;
  } else {
    const yMin = Math.min(...yValues);
    const yMax = Math.max(...yValues);
    const yPadding = (yMax - yMin) * 0.1 || 1;
    yRange = [yMin - yPadding, yMax + yPadding];
  }

  // Calculate linear regression (trend line) if needed
  let slope = 0;
  let intercept = 0;

  if (showTrendLine && points.length >= 2) {
    const n = points.length;
    const sumX = xValues.reduce((a, b) => a + b, 0);
    const sumY = yValues.reduce((a, b) => a + b, 0);
    const sumXY = points.reduce((sum, p) => sum + p.x * p.y, 0);
    const sumX2 = xValues.reduce((sum, x) => sum + x * x, 0);

    const meanX = sumX / n;
    const meanY = sumY / n;

    // Calculate slope: m = Σ((x - x̄)(y - ȳ)) / Σ((x - x̄)²)
    const numerator = sumXY - n * meanX * meanY;
    const denominator = sumX2 - n * meanX * meanX;

    if (denominator !== 0) {
      slope = numerator / denominator;
      intercept = meanY - slope * meanX;
    }
  }

  // SVG dimensions
  const width = 500;
  const height = 400;
  const padding = 60;
  const topPadding = title ? 80 : 60;
  const chartWidth = width - 2 * padding;
  const chartHeight = height - padding - topPadding;

  // Scaling functions
  const xScale = chartWidth / (xRange[1] - xRange[0]);
  const yScale = chartHeight / (yRange[1] - yRange[0]);

  const toSVGX = (x: number) => padding + (x - xRange[0]) * xScale;
  const toSVGY = (y: number) => topPadding + chartHeight - (y - yRange[0]) * yScale;

  // Colors
  const pointColor = theme.colors.brand || '#3b82f6';
  const highlightColor = theme.colors.success || '#10b981';
  const trendLineColor = theme.colors.error || '#ef4444';
  const gridColor = theme.colors.border || '#e5e7eb';
  const textColor = theme.colors.textPrimary || '#1f2937';
  const mutedColor = theme.colors.textMuted || '#6b7280';

  // Render grid lines
  const renderGrid = () => {
    if (!showGrid) return null;

    const numXTicks = 5;
    const numYTicks = 5;
    const xStep = (xRange[1] - xRange[0]) / numXTicks;
    const yStep = (yRange[1] - yRange[0]) / numYTicks;

    const gridLines = [];

    // Vertical grid lines
    for (let i = 0; i <= numXTicks; i++) {
      const xValue = xRange[0] + i * xStep;
      const svgX = toSVGX(xValue);

      gridLines.push(
        <g key={`x-${i}`}>
          <line
            x1={svgX}
            y1={topPadding}
            x2={svgX}
            y2={topPadding + chartHeight}
            stroke={gridColor}
            strokeWidth={1}
            strokeDasharray="2,2"
            opacity={0.5}
          />
          <text
            x={svgX}
            y={topPadding + chartHeight + 20}
            fontSize="11"
            textAnchor="middle"
            fill={mutedColor}
          >
            {xValue.toFixed(1)}
          </text>
        </g>
      );
    }

    // Horizontal grid lines
    for (let i = 0; i <= numYTicks; i++) {
      const yValue = yRange[0] + i * yStep;
      const svgY = toSVGY(yValue);

      gridLines.push(
        <g key={`y-${i}`}>
          <line
            x1={padding}
            y1={svgY}
            x2={width - padding}
            y2={svgY}
            stroke={gridColor}
            strokeWidth={1}
            strokeDasharray="2,2"
            opacity={0.5}
          />
          <text
            x={padding - 10}
            y={svgY + 4}
            fontSize="11"
            textAnchor="end"
            fill={mutedColor}
          >
            {yValue.toFixed(1)}
          </text>
        </g>
      );
    }

    return gridLines;
  };

  // Render trend line
  const renderTrendLine = () => {
    if (!showTrendLine) return null;

    const x1 = xRange[0];
    const y1 = slope * x1 + intercept;
    const x2 = xRange[1];
    const y2 = slope * x2 + intercept;

    return (
      <line
        x1={toSVGX(x1)}
        y1={toSVGY(y1)}
        x2={toSVGX(x2)}
        y2={toSVGY(y2)}
        stroke={trendLineColor}
        strokeWidth={2}
        strokeDasharray="4,4"
      />
    );
  };

  // Render data points
  const renderPoints = () => {
    return points.map((point, index) => {
      const svgX = toSVGX(point.x);
      const svgY = toSVGY(point.y);
      const isHighlighted = index === highlightPoint;

      return (
        <g key={index}>
          <circle
            cx={svgX}
            cy={svgY}
            r={isHighlighted ? 6 : 5}
            fill={isHighlighted ? highlightColor : pointColor}
            stroke={isHighlighted ? highlightColor : 'white'}
            strokeWidth={isHighlighted ? 3 : 2}
            opacity={isHighlighted ? 1 : 0.8}
          />
          {point.label && (
            <text
              x={svgX}
              y={svgY - 12}
              fontSize="10"
              textAnchor="middle"
              fill={textColor}
              fontWeight="bold"
            >
              {point.label}
            </text>
          )}
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

        {/* Grid */}
        {renderGrid()}

        {/* Axes */}
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

        {/* Trend line (behind points) */}
        {renderTrendLine()}

        {/* Data points */}
        {renderPoints()}

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

      {/* Trend line equation */}
      {showTrendLine && (
        <div className="text-xs mt-2" style={{ color: trendLineColor }}>
          Trend line: y = {slope.toFixed(2)}x + {intercept.toFixed(2)}
        </div>
      )}

      {/* Points count */}
      <div className="text-xs" style={{ color: mutedColor }}>
        {points.length} data points
      </div>
    </div>
  );
};

export default ScatterPlotVisualizer;
