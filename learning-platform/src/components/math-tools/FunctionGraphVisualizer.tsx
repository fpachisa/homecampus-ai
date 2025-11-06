/// <reference types="react" />
import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { calculateSafeYRange } from './utils/safeRangeCalculator';

interface FunctionGraphVisualizerProps {
  expression?: string; // Function expression like "x^2", "sin(x)", "2*x + 3" (optional for plotting points only)
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  showGrid?: boolean;
  showPoints?: Array<{ x: number; y?: number; label?: string; color?: string }>; // Points to mark (y optional - if not provided, calculated from expression)
  color?: string; // Curve color
  label?: string; // Function label
  caption?: string;
  xAxisMode?: 'degrees' | 'radians'; // For trig functions: treat x-axis as degrees or radians (default: radians)
}

const FunctionGraphVisualizer: React.FC<FunctionGraphVisualizerProps> = ({
  expression,
  xMin = -5,
  xMax = 5,
  yMin,
  yMax,
  showGrid = true,
  showPoints = [],
  color,
  label,
  caption,
  xAxisMode = 'radians'
}) => {
  const { theme } = useTheme();
  const curveColor = color || '#3b82f6'; // blue default

  // Safe expression evaluator
  const evaluateExpression = (x: number): number | null => {
    if (!expression) return null;
    try {
      // Replace common math notation with JavaScript
      let expr = expression
        .replace(/\^/g, '**')  // x^2 -> x**2
        .replace(/(\d)([a-z])/gi, '$1*$2')  // 2x -> 2*x
        .replace(/([a-z])(\d)/gi, '$1*$2')  // x2 -> x*2
        // Handle unary minus before exponentiation (e.g., -x^2 -> -(x**2))
        .replace(/-([a-z]+)\*\*(\w+)/gi, '-($1**$2)');

      // Convert degrees to radians for trig functions if needed
      const xValue = xAxisMode === 'degrees' ? (x * Math.PI / 180) : x;

      // Create safe evaluation context
      const Math_sin = Math.sin;
      const Math_cos = Math.cos;
      const Math_tan = Math.tan;
      const Math_sqrt = Math.sqrt;
      const Math_abs = Math.abs;
      const Math_log = Math.log;
      const Math_exp = Math.exp;

      // Replace function names
      expr = expr.replace(/sin\(/g, 'Math_sin(');
      expr = expr.replace(/cos\(/g, 'Math_cos(');
      expr = expr.replace(/tan\(/g, 'Math_tan(');
      expr = expr.replace(/sqrt\(/g, 'Math_sqrt(');
      expr = expr.replace(/abs\(/g, 'Math_abs(');
      expr = expr.replace(/ln\(/g, 'Math_log(');
      expr = expr.replace(/log\(/g, 'Math_log(');
      expr = expr.replace(/exp\(/g, 'Math_exp(');

      // Evaluate with context - use converted xValue for trig functions
      const result = Function('x', 'Math_sin', 'Math_cos', 'Math_tan', 'Math_sqrt', 'Math_abs', 'Math_log', 'Math_exp', `return ${expr}`)(
        xValue, Math_sin, Math_cos, Math_tan, Math_sqrt, Math_abs, Math_log, Math_exp
      );

      return isFinite(result) ? result : null;
    } catch (error) {
      return null;
    }
  };

  // Calculate function values for auto-ranging with safety protections
  const calculateYRange = (): [number, number] => {
    if (yMin !== undefined && yMax !== undefined) {
      return [yMin, yMax];
    }

    const yValues: number[] = [];

    // Include y-values from expression if provided
    if (expression) {
      const step = (xMax - xMin) / 100;
      for (let x = xMin; x <= xMax; x += step) {
        const y = evaluateExpression(x);
        if (y !== null) {
          yValues.push(y);
        }
      }
    }

    // Include explicit y-values from showPoints
    showPoints.forEach(point => {
      if (point.y !== undefined) {
        yValues.push(point.y);
      }
    });

    // If no y-values found, use default range
    if (yValues.length === 0) {
      return [yMin ?? -5, yMax ?? 5];
    }

    // Use safe range calculator to prevent crashes from extreme values
    return calculateSafeYRange(yValues, {
      maxSpan: 1000,
      maxAbsValue: 10000,
      padding: 0.2
    });
  };

  const [yRangeMin, yRangeMax] = calculateYRange();

  // SVG dimensions
  const width = 500;
  const height = 400;
  const padding = 50;

  // Scaling
  const xScale = (width - 2 * padding) / (xMax - xMin);
  const yScale = (height - 2 * padding) / (yRangeMax - yRangeMin);

  // Coordinate conversion
  const mathToSVG = (x: number, y: number): [number, number] => {
    const svgX = padding + (x - xMin) * xScale;
    const svgY = height - padding - (y - yRangeMin) * yScale;
    return [svgX, svgY];
  };

  // Generate function path
  const generatePath = (): string => {
    if (!expression) return ''; // No expression, no path

    const points: [number, number][] = [];
    const step = (xMax - xMin) / 300; // smooth curve

    for (let x = xMin; x <= xMax; x += step) {
      const y = evaluateExpression(x);

      if (y !== null && y >= yRangeMin - 10 && y <= yRangeMax + 10) {
        const clampedY = Math.max(yRangeMin, Math.min(yRangeMax, y));
        const svgPoint = mathToSVG(x, clampedY);

        if (isFinite(svgPoint[0]) && isFinite(svgPoint[1])) {
          points.push(svgPoint);
        }
      }
    }

    if (points.length === 0) return '';

    return points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ');
  };

  // Draw axes
  const [originX, originY] = mathToSVG(0, 0);

  // Grid lines
  const gridLines: React.ReactElement[] = [];
  if (showGrid) {
    // Vertical grid lines
    for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x++) {
      if (x === 0) continue;
      const [svgX] = mathToSVG(x, 0);
      gridLines.push(
        <line
          key={`vgrid-${x}`}
          x1={svgX}
          y1={padding}
          x2={svgX}
          y2={height - padding}
          stroke="#d1d5db"
          strokeWidth="1"
          opacity="0.5"
        />
      );
    }

    // Horizontal grid lines
    for (let y = Math.ceil(yRangeMin); y <= Math.floor(yRangeMax); y++) {
      if (y === 0) continue;
      const [, svgY] = mathToSVG(0, y);
      gridLines.push(
        <line
          key={`hgrid-${y}`}
          x1={padding}
          y1={svgY}
          x2={width - padding}
          y2={svgY}
          stroke="#d1d5db"
          strokeWidth="1"
          opacity="0.5"
        />
      );
    }
  }

  const path = generatePath();

  return (
    <div className="flex flex-col items-center">
      <svg width={width} height={height} className="bg-white dark:bg-gray-800 rounded">
        {/* Grid */}
        {gridLines}

        {/* Axes */}
        {originX >= padding && originX <= width - padding && (
          <line
            x1={originX}
            y1={padding}
            x2={originX}
            y2={height - padding}
            stroke={theme.colors.textPrimary}
            strokeWidth="2"
          />
        )}
        {originY >= padding && originY <= height - padding && (
          <line
            x1={padding}
            y1={originY}
            x2={width - padding}
            y2={originY}
            stroke={theme.colors.textPrimary}
            strokeWidth="2"
          />
        )}

        {/* Function curve */}
        {path && (
          <path
            d={path}
            fill="none"
            stroke={curveColor}
            strokeWidth="3"
          />
        )}

        {/* Marked points */}
        {showPoints.map((point, idx) => {
          // Use explicit y if provided, otherwise calculate from expression
          let y: number | null;
          if (point.y !== undefined) {
            y = point.y;
          } else if (expression) {
            y = evaluateExpression(point.x);
          } else {
            return null; // No y-value and no expression to calculate from
          }

          if (y === null) return null;

          const [svgX, svgY] = mathToSVG(point.x, y);
          const pointColor = point.color || '#ef4444'; // red default

          // Smart label positioning to avoid overlaps
          let labelX = svgX;
          let labelY = svgY;
          let textAnchor: 'start' | 'middle' | 'end' = 'start';

          if (point.label) {
            // Determine best position based on point location
            const isLeftHalf = svgX < width / 2;
            const isUpperHalf = svgY < height / 2;

            // Position label in the opposite quadrant for clarity
            if (isUpperHalf && isLeftHalf) {
              // Top-left point -> label bottom-right
              labelX = svgX + 12;
              labelY = svgY + 20;
              textAnchor = 'start';
            } else if (isUpperHalf && !isLeftHalf) {
              // Top-right point -> label bottom-left
              labelX = svgX - 12;
              labelY = svgY + 20;
              textAnchor = 'end';
            } else if (!isUpperHalf && isLeftHalf) {
              // Bottom-left point -> label top-right
              labelX = svgX + 12;
              labelY = svgY - 8;
              textAnchor = 'start';
            } else {
              // Bottom-right point -> label top-left
              labelX = svgX - 12;
              labelY = svgY - 8;
              textAnchor = 'end';
            }
          }

          // Calculate label background dimensions
          const labelWidth = point.label ? point.label.length * 8 + 8 : 0;
          const labelHeight = 20;

          // Calculate rectangle x position based on text anchor
          let rectX = labelX - 4;
          if (point.label) {
            if (textAnchor === 'end') {
              rectX = labelX - labelWidth + 4;
            }
          }

          return (
            <g key={idx}>
              <circle
                cx={svgX}
                cy={svgY}
                r="5"
                fill={pointColor}
                stroke="white"
                strokeWidth="2"
              />
              {point.label && (
                <>
                  {/* Label background for better readability */}
                  <rect
                    x={rectX}
                    y={labelY - 16}
                    width={labelWidth}
                    height={labelHeight}
                    fill={theme.colors.surface}
                    opacity="0.95"
                    rx="3"
                    stroke={theme.colors.border}
                    strokeWidth="1"
                  />
                  <text
                    x={labelX}
                    y={labelY}
                    fill={theme.colors.textPrimary}
                    fontSize="13"
                    fontWeight="600"
                    textAnchor={textAnchor}
                  >
                    {point.label}
                  </text>
                </>
              )}
            </g>
          );
        })}

        {/* Function label */}
        {label && (
          <text
            x={width - padding - 10}
            y={padding + 20}
            fill={curveColor}
            fontSize="16"
            fontWeight="bold"
            textAnchor="end"
          >
            {label}
          </text>
        )}
      </svg>

      {caption && (
        <p className="mt-2 text-sm text-center" style={{ color: theme.colors.textSecondary }}>
          {caption}
        </p>
      )}
    </div>
  );
};

export default FunctionGraphVisualizer;
