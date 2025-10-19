/**
 * Cartesian Plane Visualizer
 *
 * General-purpose coordinate grid for plotting points, lines, and curves.
 * Used for relations, functions, transformations, domain/range visualization.
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

// ==================== INTERFACES ====================

interface Point {
  x: number;
  y: number;
  label?: string;           // e.g., "(2, 3)", "A"
  color?: string;
  style?: 'open' | 'closed'; // Default: closed
}

interface Line {
  type: 'linear' | 'vertical' | 'horizontal';
  equation?: string;         // Display label, e.g., "y = 2x + 1"

  // For linear: y = mx + b
  slope?: number;            // m
  yIntercept?: number;       // b

  // For vertical: x = k
  xValue?: number;

  // For horizontal: y = k
  yValue?: number;

  color?: string;
  style?: 'solid' | 'dashed';
}

interface Curve {
  type: 'quadratic' | 'absolute' | 'custom';
  equation?: string;         // Display label
  points: Array<{x: number, y: number}>; // Pre-calculated points to connect
  color?: string;
  style?: 'solid' | 'dashed';
}

interface HighlightRegion {
  type: 'vertical' | 'horizontal' | 'rectangle';
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  color?: string;
  label?: string;            // e.g., "Domain", "Range"
}

interface CartesianPlaneVisualizerProps {
  // Grid Settings
  xMin?: number;             // Default: -10
  xMax?: number;             // Default: 10
  yMin?: number;             // Default: -10
  yMax?: number;             // Default: 10
  showGrid?: boolean;        // Default: true

  // Points to Plot
  points?: Point[];

  // Lines to Draw
  lines?: Line[];

  // Curves to Draw
  curves?: Curve[];

  // Highlight Region
  highlightRegion?: HighlightRegion;

  // Labels
  title?: string;
  xLabel?: string;           // Default: "x"
  yLabel?: string;           // Default: "y"
  caption?: string;
}

// ==================== COMPONENT ====================

const CartesianPlaneVisualizer: React.FC<CartesianPlaneVisualizerProps> = ({
  xMin = -10,
  xMax = 10,
  yMin = -10,
  yMax = 10,
  showGrid = true,
  points = [],
  lines = [],
  curves = [],
  highlightRegion,
  title,
  xLabel = 'x',
  yLabel = 'y',
  caption
}) => {
  const { theme } = useTheme();

  // SVG dimensions
  const width = 500;
  const height = 500;
  const padding = 60;
  const topPadding = title ? 80 : 60;
  const chartWidth = width - 2 * padding;
  const chartHeight = height - padding - topPadding;

  // Scaling functions
  const xRange = xMax - xMin;
  const yRange = yMax - yMin;
  const xScale = chartWidth / xRange;
  const yScale = chartHeight / yRange;

  const toSVGX = (x: number) => padding + (x - xMin) * xScale;
  const toSVGY = (y: number) => topPadding + chartHeight - (y - yMin) * yScale;

  // Colors
  const axisColor = theme.colors.textPrimary || '#1f2937';
  const gridColor = theme.colors.border || '#e5e7eb';
  const mutedColor = theme.colors.textMuted || '#6b7280';
  const pointColor = theme.colors.brand || '#3b82f6';
  const lineColor = theme.colors.success || '#10b981';

  // ==================== RENDER FUNCTIONS ====================

  // Render grid lines
  const renderGrid = () => {
    if (!showGrid) return null;

    const gridLines = [];
    const xStep = xRange > 20 ? 5 : xRange > 10 ? 2 : 1;
    const yStep = yRange > 20 ? 5 : yRange > 10 ? 2 : 1;

    // Vertical grid lines
    for (let x = Math.ceil(xMin / xStep) * xStep; x <= xMax; x += xStep) {
      if (x === 0) continue; // Skip axes
      const svgX = toSVGX(x);
      gridLines.push(
        <line
          key={`vgrid-${x}`}
          x1={svgX}
          y1={topPadding}
          x2={svgX}
          y2={topPadding + chartHeight}
          stroke={gridColor}
          strokeWidth={1}
          strokeDasharray="2,2"
          opacity={0.5}
        />
      );
    }

    // Horizontal grid lines
    for (let y = Math.ceil(yMin / yStep) * yStep; y <= yMax; y += yStep) {
      if (y === 0) continue; // Skip axes
      const svgY = toSVGY(y);
      gridLines.push(
        <line
          key={`hgrid-${y}`}
          x1={padding}
          y1={svgY}
          x2={width - padding}
          y2={svgY}
          stroke={gridColor}
          strokeWidth={1}
          strokeDasharray="2,2"
          opacity={0.5}
        />
      );
    }

    return gridLines;
  };

  // Render tick marks and labels
  const renderTicks = () => {
    const ticks = [];
    const xStep = xRange > 20 ? 5 : xRange > 10 ? 2 : 1;
    const yStep = yRange > 20 ? 5 : yRange > 10 ? 2 : 1;

    // X-axis ticks
    for (let x = Math.ceil(xMin / xStep) * xStep; x <= xMax; x += xStep) {
      const svgX = toSVGX(x);
      ticks.push(
        <g key={`xtick-${x}`}>
          <line
            x1={svgX}
            y1={toSVGY(0) - 5}
            x2={svgX}
            y2={toSVGY(0) + 5}
            stroke={axisColor}
            strokeWidth={1}
          />
          {x !== 0 && (
            <text
              x={svgX}
              y={toSVGY(0) + 20}
              fontSize="11"
              textAnchor="middle"
              fill={mutedColor}
            >
              {x}
            </text>
          )}
        </g>
      );
    }

    // Y-axis ticks
    for (let y = Math.ceil(yMin / yStep) * yStep; y <= yMax; y += yStep) {
      const svgY = toSVGY(y);
      ticks.push(
        <g key={`ytick-${y}`}>
          <line
            x1={toSVGX(0) - 5}
            y1={svgY}
            x2={toSVGX(0) + 5}
            y2={svgY}
            stroke={axisColor}
            strokeWidth={1}
          />
          {y !== 0 && (
            <text
              x={toSVGX(0) - 10}
              y={svgY + 4}
              fontSize="11"
              textAnchor="end"
              fill={mutedColor}
            >
              {y}
            </text>
          )}
        </g>
      );
    }

    return ticks;
  };

  // Render highlight region
  const renderHighlightRegion = () => {
    if (!highlightRegion) return null;

    const { type, xMin: rXMin, xMax: rXMax, yMin: rYMin, yMax: rYMax, color, label } = highlightRegion;
    const regionColor = color || '#fbbf24';

    if (type === 'vertical') {
      const x1 = toSVGX(rXMin ?? xMin);
      const x2 = toSVGX(rXMax ?? xMax);
      return (
        <g>
          <rect
            x={x1}
            y={topPadding}
            width={x2 - x1}
            height={chartHeight}
            fill={regionColor}
            opacity={0.2}
          />
          {label && (
            <text
              x={(x1 + x2) / 2}
              y={topPadding + 20}
              fontSize="12"
              fontWeight="bold"
              textAnchor="middle"
              fill={regionColor}
            >
              {label}
            </text>
          )}
        </g>
      );
    }

    if (type === 'horizontal') {
      const y1 = toSVGY(rYMax ?? yMax);
      const y2 = toSVGY(rYMin ?? yMin);
      return (
        <g>
          <rect
            x={padding}
            y={y1}
            width={chartWidth}
            height={y2 - y1}
            fill={regionColor}
            opacity={0.2}
          />
          {label && (
            <text
              x={padding + 20}
              y={(y1 + y2) / 2}
              fontSize="12"
              fontWeight="bold"
              fill={regionColor}
            >
              {label}
            </text>
          )}
        </g>
      );
    }

    if (type === 'rectangle') {
      const x1 = toSVGX(rXMin ?? xMin);
      const x2 = toSVGX(rXMax ?? xMax);
      const y1 = toSVGY(rYMax ?? yMax);
      const y2 = toSVGY(rYMin ?? yMin);
      return (
        <g>
          <rect
            x={x1}
            y={y1}
            width={x2 - x1}
            height={y2 - y1}
            fill={regionColor}
            opacity={0.2}
          />
          {label && (
            <text
              x={(x1 + x2) / 2}
              y={(y1 + y2) / 2}
              fontSize="12"
              fontWeight="bold"
              textAnchor="middle"
              fill={regionColor}
            >
              {label}
            </text>
          )}
        </g>
      );
    }

    return null;
  };

  // Render lines
  const renderLines = () => {
    return lines.map((line, index) => {
      const lineColorFinal = line.color || lineColor;
      const strokeDasharray = line.style === 'dashed' ? '5,5' : undefined;

      if (line.type === 'linear' && line.slope !== undefined && line.yIntercept !== undefined) {
        // Linear: y = mx + b
        const x1 = xMin;
        const y1 = line.slope * x1 + line.yIntercept;
        const x2 = xMax;
        const y2 = line.slope * x2 + line.yIntercept;

        return (
          <g key={`line-${index}`}>
            <line
              x1={toSVGX(x1)}
              y1={toSVGY(y1)}
              x2={toSVGX(x2)}
              y2={toSVGY(y2)}
              stroke={lineColorFinal}
              strokeWidth={2}
              strokeDasharray={strokeDasharray}
            />
            {line.equation && (
              <text
                x={toSVGX(x2) - 10}
                y={toSVGY(y2) - 10}
                fontSize="11"
                fill={lineColorFinal}
                fontWeight="bold"
              >
                {line.equation}
              </text>
            )}
          </g>
        );
      }

      if (line.type === 'vertical' && line.xValue !== undefined) {
        // Vertical: x = k
        const svgX = toSVGX(line.xValue);
        return (
          <g key={`line-${index}`}>
            <line
              x1={svgX}
              y1={topPadding}
              x2={svgX}
              y2={topPadding + chartHeight}
              stroke={lineColorFinal}
              strokeWidth={2}
              strokeDasharray={strokeDasharray}
            />
            {line.equation && (
              <text
                x={svgX + 5}
                y={topPadding + 20}
                fontSize="11"
                fill={lineColorFinal}
                fontWeight="bold"
              >
                {line.equation}
              </text>
            )}
          </g>
        );
      }

      if (line.type === 'horizontal' && line.yValue !== undefined) {
        // Horizontal: y = k
        const svgY = toSVGY(line.yValue);
        return (
          <g key={`line-${index}`}>
            <line
              x1={padding}
              y1={svgY}
              x2={width - padding}
              y2={svgY}
              stroke={lineColorFinal}
              strokeWidth={2}
              strokeDasharray={strokeDasharray}
            />
            {line.equation && (
              <text
                x={padding + 10}
                y={svgY - 5}
                fontSize="11"
                fill={lineColorFinal}
                fontWeight="bold"
              >
                {line.equation}
              </text>
            )}
          </g>
        );
      }

      return null;
    });
  };

  // Render curves
  const renderCurves = () => {
    return curves.map((curve, index) => {
      if (curve.points.length < 2) return null;

      const curveColor = curve.color || lineColor;
      const strokeDasharray = curve.style === 'dashed' ? '5,5' : undefined;

      // Generate SVG path
      const pathData = curve.points
        .map((point, i) => {
          const x = toSVGX(point.x);
          const y = toSVGY(point.y);
          return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
        })
        .join(' ');

      return (
        <g key={`curve-${index}`}>
          <path
            d={pathData}
            stroke={curveColor}
            strokeWidth={2}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
          {curve.equation && (
            <text
              x={toSVGX(curve.points[curve.points.length - 1].x) - 10}
              y={toSVGY(curve.points[curve.points.length - 1].y) - 10}
              fontSize="11"
              fill={curveColor}
              fontWeight="bold"
            >
              {curve.equation}
            </text>
          )}
        </g>
      );
    });
  };

  // Render points
  const renderPoints = () => {
    return points.map((point, index) => {
      const svgX = toSVGX(point.x);
      const svgY = toSVGY(point.y);
      const pColor = point.color || pointColor;
      const isClosed = point.style !== 'open';

      return (
        <g key={`point-${index}`}>
          <circle
            cx={svgX}
            cy={svgY}
            r={5}
            fill={isClosed ? pColor : 'white'}
            stroke={pColor}
            strokeWidth={2}
          />
          {point.label && (
            <text
              x={svgX + 10}
              y={svgY - 10}
              fontSize="11"
              fontWeight="bold"
              fill={pColor}
            >
              {point.label}
            </text>
          )}
        </g>
      );
    });
  };

  // ==================== MAIN RENDER ====================

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
            fill={axisColor}
          >
            {title}
          </text>
        )}

        {/* Grid */}
        {renderGrid()}

        {/* Highlight region (behind everything) */}
        {renderHighlightRegion()}

        {/* Axes */}
        {/* Y-axis */}
        <line
          x1={toSVGX(0)}
          y1={topPadding}
          x2={toSVGX(0)}
          y2={topPadding + chartHeight}
          stroke={axisColor}
          strokeWidth={2}
        />
        {/* X-axis */}
        <line
          x1={padding}
          y1={toSVGY(0)}
          x2={width - padding}
          y2={toSVGY(0)}
          stroke={axisColor}
          strokeWidth={2}
        />

        {/* Arrows on axes */}
        <polygon
          points={`${toSVGX(0)},${topPadding - 10} ${toSVGX(0) - 4},${topPadding} ${toSVGX(0) + 4},${topPadding}`}
          fill={axisColor}
        />
        <polygon
          points={`${width - padding + 10},${toSVGY(0)} ${width - padding},${toSVGY(0) - 4} ${width - padding},${toSVGY(0) + 4}`}
          fill={axisColor}
        />

        {/* Tick marks */}
        {renderTicks()}

        {/* Lines */}
        {renderLines()}

        {/* Curves */}
        {renderCurves()}

        {/* Points */}
        {renderPoints()}

        {/* Axis labels */}
        <text
          x={width - padding + 15}
          y={toSVGY(0) + 20}
          fontSize="14"
          fontWeight="bold"
          fill={axisColor}
        >
          {xLabel}
        </text>
        <text
          x={toSVGX(0) + 15}
          y={topPadding - 5}
          fontSize="14"
          fontWeight="bold"
          fill={axisColor}
        >
          {yLabel}
        </text>
      </svg>

      {/* Caption */}
      {caption && (
        <div className="text-sm mt-2" style={{ color: mutedColor, maxWidth: '500px', textAlign: 'center' }}>
          <MathText content={caption} />
        </div>
      )}
    </div>
  );
};

export default CartesianPlaneVisualizer;
