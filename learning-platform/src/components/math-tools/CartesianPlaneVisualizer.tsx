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
  labelPosition?: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'; // Default: top-right
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
  labelPosition?: 'start' | 'middle' | 'end' | 'auto'; // Default: auto (intelligent placement)
  labelOffset?: { dx?: number; dy?: number }; // Manual offset adjustment
}

interface Curve {
  type: 'quadratic' | 'absolute' | 'custom';
  equation?: string;         // Display label
  points: Array<{x: number, y: number}>; // Pre-calculated points to connect
  color?: string;
  style?: 'solid' | 'dashed';
  labelPosition?: 'start' | 'middle' | 'end' | 'auto'; // Default: auto
  labelOffset?: { dx?: number; dy?: number }; // Manual offset adjustment
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

  // Points to Plot (can be array or JSON/text string from AI)
  points?: Point[] | string;

  // Lines to Draw (can be array or JSON/text string from AI)
  lines?: Line[] | string;

  // Curves to Draw (can be array or JSON/text string from AI)
  curves?: Curve[] | string;

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

  // Normalize points to ensure it's always an array with proper {x, y} structure
  const normalizedPoints = React.useMemo(() => {
    const normalizePoint = (p: any): Point | null => {
      // Already in correct format
      if (p && typeof p.x === 'number' && typeof p.y === 'number') {
        return p as Point;
      }
      // Tuple format: [x, y] or [x, y, label]
      if (Array.isArray(p) && p.length >= 2) {
        return { x: p[0], y: p[1], label: p[2] };
      }
      // Object with coord array: {coord: [x, y]}
      if (p && Array.isArray(p.coord) && p.coord.length >= 2) {
        return { x: p.coord[0], y: p.coord[1], ...p };
      }
      return null;
    };

    const parseTextPoints = (text: string): Point[] => {
      // Parse text format like "A(-5, 7), B(4, 2)" or "P(-3, 4), M(1, -2)"
      const pattern = /([A-Z]?[a-z]?)\s*\(\s*(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)\s*\)/g;
      const results: Point[] = [];
      let match;
      while ((match = pattern.exec(text)) !== null) {
        results.push({
          x: parseFloat(match[2]),
          y: parseFloat(match[3]),
          label: match[1] || undefined
        });
      }
      return results;
    };

    if (Array.isArray(points)) {
      return points.map(normalizePoint).filter((p): p is Point => p !== null);
    }
    if (typeof points === 'string') {
      // First try JSON parsing
      try {
        // Replace single quotes with double quotes for valid JSON
        const jsonString = points.replace(/'/g, '"');
        const parsed = JSON.parse(jsonString);
        if (Array.isArray(parsed)) {
          return parsed.map(normalizePoint).filter((p): p is Point => p !== null);
        }
      } catch {
        // If JSON parsing fails, try text parsing
        const textPoints = parseTextPoints(points);
        if (textPoints.length > 0) {
          return textPoints;
        }
      }
    }
    return [];
  }, [points]);

  // Normalize lines to ensure it's always an array with proper Line structure
  const normalizedLines = React.useMemo(() => {
    // Helper to resolve point ID references
    const resolvePoint = (ref: any): {x: number, y: number} | null => {
      if (typeof ref === 'string') {
        // It's a point ID reference, look it up in normalizedPoints
        const point = normalizedPoints.find(p => p.label === ref || (p as any).id === ref);
        return point ? {x: point.x, y: point.y} : null;
      }
      // It's already coordinates (array or object)
      if (Array.isArray(ref)) {
        return {x: ref[0], y: ref[1]};
      }
      if (ref && typeof ref === 'object' && typeof ref.x === 'number' && typeof ref.y === 'number') {
        return {x: ref.x, y: ref.y};
      }
      return null;
    };

    const normalizeLine = (l: any): Line | null => {
      if (!l) return null;

      // Handle different line type formats
      if (l.type === 'horizontal' || l.type === 'horizontalLine') {
        return {
          type: 'horizontal',
          yValue: l.yValue ?? l.y,
          equation: l.equation ?? l.label,
          color: l.color,
          style: l.style
        };
      }

      if (l.type === 'vertical' || l.type === 'verticalLine') {
        return {
          type: 'vertical',
          xValue: l.xValue ?? l.x,
          equation: l.equation ?? l.label,
          color: l.color,
          style: l.style
        };
      }

      // Handle lines with p1/p2 point pairs (arrays, objects, or ID references)
      // Also handles type: 'segment' as an alias for 'line'
      if (l.p1 && l.p2) {
        const point1 = resolvePoint(l.p1);
        const point2 = resolvePoint(l.p2);

        if (!point1 || !point2) {
          return null;
        }

        const x1 = point1.x;
        const y1 = point1.y;
        const x2 = point2.x;
        const y2 = point2.y;

        // Check for vertical line (same x-coordinate)
        if (x1 === x2) {
          return {
            type: 'vertical',
            xValue: x1,
            equation: l.equation ?? l.label,
            color: l.color,
            style: l.style
          };
        }

        // Check for horizontal line (same y-coordinate)
        if (y1 === y2) {
          return {
            type: 'horizontal',
            yValue: y1,
            equation: l.equation ?? l.label,
            color: l.color,
            style: l.style
          };
        }

        // Regular linear line
        const slope = (y2 - y1) / (x2 - x1);
        const yIntercept = y1 - slope * x1;
        return {
          type: 'linear',
          slope,
          yIntercept,
          equation: l.equation ?? l.label,
          color: l.color,
          style: l.style
        };
      }

      // Handle lines with points array: [[x1, y1], [x2, y2]]
      if (l.points && Array.isArray(l.points) && l.points.length >= 2) {
        const p1 = l.points[0], p2 = l.points[1];
        if (Array.isArray(p1) && Array.isArray(p2)) {
          const x1 = p1[0], y1 = p1[1];
          const x2 = p2[0], y2 = p2[1];

          // Check for vertical line (same x-coordinate)
          if (x1 === x2) {
            return {
              type: 'vertical',
              xValue: x1,
              equation: l.equation ?? l.label,
              color: l.color,
              style: l.style
            };
          }

          // Check for horizontal line (same y-coordinate)
          if (y1 === y2) {
            return {
              type: 'horizontal',
              yValue: y1,
              equation: l.equation ?? l.label,
              color: l.color,
              style: l.style
            };
          }

          // Regular linear line
          const slope = (y2 - y1) / (x2 - x1);
          const yIntercept = y1 - slope * x1;
          return {
            type: 'linear',
            slope,
            yIntercept,
            equation: l.equation ?? l.label,
            color: l.color,
            style: l.style
          };
        }
      }

      // Already in correct format with slope/yIntercept
      if (l.type === 'linear' && l.slope !== undefined && l.yIntercept !== undefined) {
        return l as Line;
      }

      return null;
    };

    if (Array.isArray(lines)) {
      return lines.map(normalizeLine).filter((l): l is Line => l !== null);
    }
    if (typeof lines === 'string') {
      // Handle special case
      if (lines === 'none') return [];

      try {
        // Replace single quotes with double quotes for valid JSON
        const jsonString = lines.replace(/'/g, '"');
        const parsed = JSON.parse(jsonString);
        if (Array.isArray(parsed)) {
          return parsed.map(normalizeLine).filter((l): l is Line => l !== null);
        }
      } catch (e) {
        console.warn('Failed to parse lines string:', lines, e);
        return [];
      }
    }
    return [];
  }, [lines, normalizedPoints]);

  // Normalize curves to ensure it's always an array
  const normalizedCurves = React.useMemo(() => {
    if (Array.isArray(curves)) return curves;
    if (typeof curves === 'string') {
      try {
        // Replace single quotes with double quotes for valid JSON
        const jsonString = curves.replace(/'/g, '"');
        const parsed = JSON.parse(jsonString);
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    }
    return [];
  }, [curves]);

  // SVG dimensions
  const width = 600;
  const height = 500;
  const padding = 70;
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

    // Determine where to draw tick marks
    // Use y=0 for x-axis ticks if it's in range, otherwise use bottom edge
    const xTickY = (yMin <= 0 && yMax >= 0) ? 0 : yMin;
    // Use x=0 for y-axis ticks if it's in range, otherwise use left edge
    const yTickX = (xMin <= 0 && xMax >= 0) ? 0 : xMin;

    // X-axis ticks
    for (let x = Math.ceil(xMin / xStep) * xStep; x <= xMax; x += xStep) {
      const svgX = toSVGX(x);
      const tickY = toSVGY(xTickY);
      ticks.push(
        <g key={`xtick-${x}`}>
          <line
            x1={svgX}
            y1={tickY - 5}
            x2={svgX}
            y2={tickY + 5}
            stroke={axisColor}
            strokeWidth={1}
          />
          <text
            x={svgX}
            y={tickY + 20}
            fontSize="11"
            textAnchor="middle"
            fill={mutedColor}
          >
            {x}
          </text>
        </g>
      );
    }

    // Y-axis ticks
    for (let y = Math.ceil(yMin / yStep) * yStep; y <= yMax; y += yStep) {
      const svgY = toSVGY(y);
      const tickX = toSVGX(yTickX);
      ticks.push(
        <g key={`ytick-${y}`}>
          <line
            x1={tickX - 5}
            y1={svgY}
            x2={tickX + 5}
            y2={svgY}
            stroke={axisColor}
            strokeWidth={1}
          />
          <text
            x={tickX - 10}
            y={svgY + 4}
            fontSize="11"
            textAnchor="end"
            fill={mutedColor}
          >
            {y}
          </text>
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

  // Calculate intelligent label position for a line
  const calculateLineLabelPosition = (
    x1: number, y1: number, x2: number, y2: number,
    position: 'start' | 'middle' | 'end' | 'auto' = 'auto',
    slope: number = 0
  ) => {
    // Estimate label dimensions
    const labelWidth = 100; // approximate width for equations like "Line A: D = 2T"
    const labelHeight = 20;
    const padding = 10;

    let labelX: number, labelY: number;
    let textAnchor: 'start' | 'middle' | 'end' = 'start';

    // Choose position along the line
    let t = 0.5; // default to middle
    if (position === 'start') t = 0.2;
    else if (position === 'end') t = 0.8;
    else if (position === 'middle') t = 0.5;
    else if (position === 'auto') {
      // Intelligent placement: avoid edges where labels might overflow
      // For positive slopes, place label in middle-left area
      // For negative slopes, place label in middle-right area
      if (slope > 0) {
        t = 0.4; // Place at 40% along the line for positive slopes
      } else if (slope < 0) {
        t = 0.6; // Place at 60% along the line for negative slopes
      } else {
        t = 0.5; // Middle for horizontal lines
      }
    }

    // Calculate point along the line
    const lineX = x1 + t * (x2 - x1);
    const lineY = y1 + t * (y2 - y1);
    const svgX = toSVGX(lineX);
    const svgY = toSVGY(lineY);

    // Determine label offset based on slope
    if (Math.abs(slope) < 0.1) {
      // Nearly horizontal line - place label above
      labelX = svgX;
      labelY = svgY - 15;
      textAnchor = 'middle';
    } else if (Math.abs(slope) > 10) {
      // Nearly vertical line - place label to the right
      labelX = svgX + 10;
      labelY = svgY;
      textAnchor = 'start';
    } else if (slope > 0) {
      // Positive slope - place label above and to the left
      labelX = svgX - 5;
      labelY = svgY - 10;
      textAnchor = 'end';
    } else {
      // Negative slope - place label above and to the right
      labelX = svgX + 5;
      labelY = svgY - 10;
      textAnchor = 'start';
    }

    // Boundary check and adjustment
    const minX = padding + 5;
    const maxX = width - padding - labelWidth;
    const minY = topPadding + labelHeight;
    const maxY = height - padding - 5;

    if (labelX < minX) labelX = minX;
    if (labelX > maxX) {
      labelX = maxX;
      textAnchor = 'end';
    }
    if (labelY < minY) labelY = minY;
    if (labelY > maxY) labelY = maxY;

    return { labelX, labelY, textAnchor };
  };

  // Render lines
  const renderLines = () => {
    return normalizedLines.map((line, index) => {
      const lineColorFinal = line.color || lineColor;
      const strokeDasharray = line.style === 'dashed' ? '5,5' : undefined;

      if (line.type === 'linear' && line.slope !== undefined && line.yIntercept !== undefined) {
        // Linear: y = mx + b
        const x1 = xMin;
        const y1 = line.slope * x1 + line.yIntercept;
        const x2 = xMax;
        const y2 = line.slope * x2 + line.yIntercept;

        // Calculate intelligent label position
        const position = line.labelPosition || 'auto';
        const { labelX, labelY, textAnchor } = calculateLineLabelPosition(
          x1, y1, x2, y2, position, line.slope
        );

        // Apply manual offset if provided
        const finalLabelX = labelX + (line.labelOffset?.dx || 0);
        const finalLabelY = labelY + (line.labelOffset?.dy || 0);

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
                x={finalLabelX}
                y={finalLabelY}
                fontSize="11"
                fill={lineColorFinal}
                fontWeight="bold"
                textAnchor={textAnchor}
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

        // Position label in the middle of the visible line
        const position = line.labelPosition || 'auto';
        let labelY = topPadding + chartHeight / 2;
        if (position === 'start') labelY = topPadding + 30;
        else if (position === 'end') labelY = topPadding + chartHeight - 20;

        // Apply manual offset if provided
        const finalLabelX = svgX + 5 + (line.labelOffset?.dx || 0);
        const finalLabelY = labelY + (line.labelOffset?.dy || 0);

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
                x={finalLabelX}
                y={finalLabelY}
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

        // Position label in the middle of the visible line
        const position = line.labelPosition || 'auto';
        let labelX = padding + chartWidth / 2;
        if (position === 'start') labelX = padding + 10;
        else if (position === 'end') labelX = width - padding - 100;

        // Apply manual offset if provided
        const finalLabelX = labelX + (line.labelOffset?.dx || 0);
        const finalLabelY = svgY - 5 + (line.labelOffset?.dy || 0);

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
                x={finalLabelX}
                y={finalLabelY}
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
    return normalizedCurves.map((curve, index) => {
      if (curve.points.length < 2) return null;

      const curveColor = curve.color || lineColor;
      const strokeDasharray = curve.style === 'dashed' ? '5,5' : undefined;

      // Generate SVG path
      const pathData = curve.points
        .map((point: { x: number; y: number }, i: number) => {
          const x = toSVGX(point.x);
          const y = toSVGY(point.y);
          return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
        })
        .join(' ');

      // Calculate label position
      const position = curve.labelPosition || 'auto';
      let labelPointIndex = Math.floor(curve.points.length / 2); // default to middle
      if (position === 'start') labelPointIndex = Math.min(2, curve.points.length - 1);
      else if (position === 'end') labelPointIndex = Math.max(curve.points.length - 3, 0);
      else if (position === 'middle') labelPointIndex = Math.floor(curve.points.length / 2);

      const labelPoint = curve.points[labelPointIndex];
      let labelX = toSVGX(labelPoint.x);
      let labelY = toSVGY(labelPoint.y) - 15; // Place above the curve

      // Boundary check
      const minX = padding + 10;
      const maxX = width - padding - 100;
      const minY = topPadding + 20;
      const maxY = height - padding - 10;

      if (labelX < minX) labelX = minX;
      if (labelX > maxX) labelX = maxX;
      if (labelY < minY) labelY = minY;
      if (labelY > maxY) labelY = maxY;

      // Apply manual offset if provided
      const finalLabelX = labelX + (curve.labelOffset?.dx || 0);
      const finalLabelY = labelY + (curve.labelOffset?.dy || 0);

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
              x={finalLabelX}
              y={finalLabelY}
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
    return normalizedPoints.map((point, index) => {
      const svgX = toSVGX(point.x);
      const svgY = toSVGY(point.y);
      const pColor = point.color || pointColor;
      const isClosed = point.style !== 'open';

      // Calculate label position based on labelPosition property
      const position = point.labelPosition || 'top-right';
      let labelX = svgX;
      let labelY = svgY;
      let textAnchor: 'start' | 'middle' | 'end' = 'start';

      switch (position) {
        case 'top':
          labelX = svgX;
          labelY = svgY - 15;
          textAnchor = 'middle';
          break;
        case 'bottom':
          labelX = svgX;
          labelY = svgY + 20;
          textAnchor = 'middle';
          break;
        case 'left':
          labelX = svgX - 10;
          labelY = svgY + 4;
          textAnchor = 'end';
          break;
        case 'right':
          labelX = svgX + 10;
          labelY = svgY + 4;
          textAnchor = 'start';
          break;
        case 'top-left':
          labelX = svgX - 10;
          labelY = svgY - 10;
          textAnchor = 'end';
          break;
        case 'top-right':
          labelX = svgX + 10;
          labelY = svgY - 10;
          textAnchor = 'start';
          break;
        case 'bottom-left':
          labelX = svgX - 10;
          labelY = svgY + 15;
          textAnchor = 'end';
          break;
        case 'bottom-right':
          labelX = svgX + 10;
          labelY = svgY + 15;
          textAnchor = 'start';
          break;
      }

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
              x={labelX}
              y={labelY}
              fontSize="11"
              fontWeight="bold"
              fill={pColor}
              textAnchor={textAnchor}
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

        {/* Axes - only draw if 0 is within the visible range */}
        {/* Y-axis (at x=0) */}
        {xMin <= 0 && xMax >= 0 && (
          <>
            <line
              x1={toSVGX(0)}
              y1={topPadding}
              x2={toSVGX(0)}
              y2={topPadding + chartHeight}
              stroke={axisColor}
              strokeWidth={2}
            />
            {/* Y-axis arrow */}
            <polygon
              points={`${toSVGX(0)},${topPadding - 10} ${toSVGX(0) - 4},${topPadding} ${toSVGX(0) + 4},${topPadding}`}
              fill={axisColor}
            />
          </>
        )}

        {/* X-axis (at y=0) */}
        {yMin <= 0 && yMax >= 0 && (
          <>
            <line
              x1={padding}
              y1={toSVGY(0)}
              x2={width - padding}
              y2={toSVGY(0)}
              stroke={axisColor}
              strokeWidth={2}
            />
            {/* X-axis arrow */}
            <polygon
              points={`${width - padding + 10},${toSVGY(0)} ${width - padding},${toSVGY(0) - 4} ${width - padding},${toSVGY(0) + 4}`}
              fill={axisColor}
            />
          </>
        )}

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
          x={width - padding - 10}
          y={(yMin <= 0 && yMax >= 0) ? toSVGY(0) + 45 : toSVGY(yMin) + 45}
          fontSize="14"
          fontWeight="bold"
          fill={axisColor}
          textAnchor="end"
        >
          {xLabel}
        </text>
        <text
          x={(xMin <= 0 && xMax >= 0) ? toSVGX(0) + 15 : toSVGX(xMin) + 15}
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
        <div className="text-sm mt-2" style={{ color: mutedColor, maxWidth: '600px', textAlign: 'center' }}>
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default CartesianPlaneVisualizer;
