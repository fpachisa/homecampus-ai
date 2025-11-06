/**
 * Linear Inequality Grapher
 *
 * Visualizes linear inequalities in two variables with:
 * - Boundary lines (solid for ≤/≥, dashed for </>)
 * - Half-plane shading (above/below the line)
 * - Test point verification
 * - Support for systems of inequalities
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

// ==================== INTERFACES ====================

interface Inequality {
  coefficientX: number;     // Coefficient of x (e.g., 2 in "2x + 3y ≤ 6")
  coefficientY: number;     // Coefficient of y (e.g., 3 in "2x + 3y ≤ 6")
  constant: number;         // Right-hand side constant (e.g., 6 in "2x + 3y ≤ 6")
  inequalityType: '<' | '>' | '<=' | '>=';
  color?: string;           // Color for this specific inequality
  label?: string;           // Optional label (e.g., "y ≤ 2x + 3")
}

interface TestPoint {
  x: number;
  y: number;
  label?: string;
}

interface LinearInequalityGrapherProps {
  // Can accept single inequality or array for systems
  inequality?: Inequality;
  inequalities?: Inequality[];

  // OR accept direct parameters (for easier use from MathToolRenderer)
  coefficientX?: number;
  coefficientY?: number;
  constant?: number;
  inequalityType?: '<' | '>' | '<=' | '>=';
  color?: string;
  label?: string;

  // Grid settings
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  showGrid?: boolean;

  // Test point (to verify which side satisfies inequality)
  testPoint?: TestPoint;
  showTestPoint?: boolean;

  // Styling
  shadeOpacity?: number;     // Opacity of shaded region (0-1)

  // Labels
  title?: string;
  caption?: string;
}

// ==================== COMPONENT ====================

const LinearInequalityGrapher: React.FC<LinearInequalityGrapherProps> = ({
  inequality,
  inequalities = [],
  coefficientX,
  coefficientY,
  constant,
  inequalityType,
  color,
  label,
  xMin = -5,
  xMax = 5,
  yMin = -5,
  yMax = 5,
  showGrid = true,
  testPoint,
  showTestPoint = false,
  shadeOpacity = 0.4,
  title,
  caption
}) => {
  const { theme } = useTheme();

  // Normalize to array for consistent processing
  const allInequalities = React.useMemo(() => {
    const result: Inequality[] = [];

    // If direct parameters provided, create inequality object
    if (
      coefficientX !== undefined &&
      coefficientY !== undefined &&
      constant !== undefined &&
      inequalityType
    ) {
      result.push({
        coefficientX,
        coefficientY,
        constant,
        inequalityType,
        color,
        label
      });
    }

    // Add any inequality objects
    if (inequality) {
      result.push(inequality);
    }

    // Add array of inequalities
    result.push(...inequalities);

    return result;
  }, [inequality, inequalities, coefficientX, coefficientY, constant, inequalityType, color, label]);

  // Default colors for multiple inequalities
  const defaultColors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

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

  // ==================== HELPER FUNCTIONS ====================

  /**
   * Convert inequality to slope-intercept form for boundary line
   * ax + by ≤ c  →  y ≤ (-a/b)x + (c/b)
   * Returns { slope, yIntercept, isVertical, xValue }
   */
  const getBoundaryLine = (ineq: Inequality) => {
    const { coefficientX: a, coefficientY: b, constant: c } = ineq;

    // Special case: vertical line (by = k, or ax ≤ c with b = 0)
    if (b === 0) {
      return {
        isVertical: true,
        xValue: c / a,  // x = c/a
        slope: undefined,
        yIntercept: undefined
      };
    }

    // Regular line: y = mx + b
    const slope = -a / b;
    const yIntercept = c / b;

    return {
      isVertical: false,
      xValue: undefined,
      slope,
      yIntercept
    };
  };

  /**
   * Determine if we should shade above or below the boundary line
   * For ax + by ≤ c:
   *   - If b > 0: shade below (y ≤ ...)
   *   - If b < 0: shade above (y ≥ ...)
   * For ax + by ≥ c: opposite
   * For ax + by < c or >: same logic, just dashed line
   */
  const getShadeDirection = (ineq: Inequality) => {
    const { coefficientY: b, inequalityType } = ineq;

    const isLessOrEqual = inequalityType === '<' || inequalityType === '<=';

    // Special case: vertical line (b = 0)
    if (b === 0) {
      // ax ≤ c → shade to the left (x ≤ c/a)
      // ax ≥ c → shade to the right (x ≥ c/a)
      return isLessOrEqual ? 'left' : 'right';
    }

    // Regular line
    if (b > 0) {
      return isLessOrEqual ? 'below' : 'above';
    } else {
      return isLessOrEqual ? 'above' : 'below';
    }
  };

  /**
   * Check if a point satisfies an inequality
   */
  const satisfiesInequality = (point: { x: number; y: number }, ineq: Inequality): boolean => {
    const { coefficientX: a, coefficientY: b, constant: c, inequalityType } = ineq;
    const leftSide = a * point.x + b * point.y;

    switch (inequalityType) {
      case '<':
        return leftSide < c;
      case '>':
        return leftSide > c;
      case '<=':
        return leftSide <= c;
      case '>=':
        return leftSide >= c;
      default:
        return false;
    }
  };

  // ==================== RENDER FUNCTIONS ====================

  const renderGrid = () => {
    if (!showGrid) return null;

    const gridLines = [];
    const xStep = xRange > 20 ? 5 : xRange > 10 ? 2 : 1;
    const yStep = yRange > 20 ? 5 : yRange > 10 ? 2 : 1;

    // Vertical grid lines
    for (let x = Math.ceil(xMin / xStep) * xStep; x <= xMax; x += xStep) {
      if (x === 0) continue;
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
      if (y === 0) continue;
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

  const renderTicks = () => {
    const ticks = [];
    const xStep = xRange > 20 ? 5 : xRange > 10 ? 2 : 1;
    const yStep = yRange > 20 ? 5 : yRange > 10 ? 2 : 1;

    const xTickY = (yMin <= 0 && yMax >= 0) ? 0 : yMin;
    const yTickX = (xMin <= 0 && xMax >= 0) ? 0 : xMin;

    // X-axis ticks
    for (let x = Math.ceil(xMin / xStep) * xStep; x <= xMax; x += xStep) {
      const svgX = toSVGX(x);
      const tickY = toSVGY(xTickY);

      // Skip rendering "0" label on x-axis if origin is visible (to avoid duplicate)
      const showLabel = !(x === 0 && yMin <= 0 && yMax >= 0 && xMin <= 0 && xMax >= 0);

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
          {showLabel && (
            <text
              x={svgX}
              y={tickY + 20}
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

  /**
   * Render shaded region for a single inequality
   */
  const renderShading = (ineq: Inequality, index: number) => {
    const boundaryLine = getBoundaryLine(ineq);
    const shadeDirection = getShadeDirection(ineq);
    const color = ineq.color || defaultColors[index % defaultColors.length];

    // For vertical line
    if (boundaryLine.isVertical && boundaryLine.xValue !== undefined) {
      const boundaryX = toSVGX(boundaryLine.xValue);

      if (shadeDirection === 'left') {
        // Shade everything to the left of x = k
        return (
          <rect
            key={`shade-${index}`}
            x={padding}
            y={topPadding}
            width={boundaryX - padding}
            height={chartHeight}
            fill={color}
            opacity={shadeOpacity}
          />
        );
      } else {
        // Shade everything to the right of x = k
        return (
          <rect
            key={`shade-${index}`}
            x={boundaryX}
            y={topPadding}
            width={width - padding - boundaryX}
            height={chartHeight}
            fill={color}
            opacity={shadeOpacity}
          />
        );
      }
    }

    // For regular line: create polygon points
    if (boundaryLine.slope !== undefined && boundaryLine.yIntercept !== undefined) {
      // Calculate line endpoints
      const x1 = xMin;
      const y1 = boundaryLine.slope * x1 + boundaryLine.yIntercept;
      const x2 = xMax;
      const y2 = boundaryLine.slope * x2 + boundaryLine.yIntercept;

      let polygonPoints: string;

      if (shadeDirection === 'below') {
        // Polygon: bottom-left → line start → line end → bottom-right
        polygonPoints = `
          ${toSVGX(x1)},${toSVGY(yMin)}
          ${toSVGX(x1)},${toSVGY(y1)}
          ${toSVGX(x2)},${toSVGY(y2)}
          ${toSVGX(x2)},${toSVGY(yMin)}
        `;
      } else {
        // Polygon: top-left → line start → line end → top-right
        polygonPoints = `
          ${toSVGX(x1)},${toSVGY(yMax)}
          ${toSVGX(x1)},${toSVGY(y1)}
          ${toSVGX(x2)},${toSVGY(y2)}
          ${toSVGX(x2)},${toSVGY(yMax)}
        `;
      }

      return (
        <polygon
          key={`shade-${index}`}
          points={polygonPoints}
          fill={color}
          opacity={shadeOpacity}
        />
      );
    }

    return null;
  };

  /**
   * Render boundary line for a single inequality
   */
  const renderBoundaryLine = (ineq: Inequality, index: number) => {
    const boundaryLine = getBoundaryLine(ineq);
    const isStrict = ineq.inequalityType === '<' || ineq.inequalityType === '>';
    const strokeDasharray = isStrict ? '8,4' : undefined;  // Dashed for strict inequalities
    const color = ineq.color || defaultColors[index % defaultColors.length];

    // Vertical line
    if (boundaryLine.isVertical && boundaryLine.xValue !== undefined) {
      const svgX = toSVGX(boundaryLine.xValue);
      return (
        <g key={`boundary-${index}`}>
          <line
            x1={svgX}
            y1={topPadding}
            x2={svgX}
            y2={topPadding + chartHeight}
            stroke={color}
            strokeWidth={3}
            strokeDasharray={strokeDasharray}
          />
          {ineq.label && (
            <text
              x={svgX + 8}
              y={topPadding + 20}
              fontSize="12"
              fontWeight="bold"
              fill={color}
            >
              {ineq.label}
            </text>
          )}
        </g>
      );
    }

    // Regular line
    if (boundaryLine.slope !== undefined && boundaryLine.yIntercept !== undefined) {
      const x1 = xMin;
      const y1 = boundaryLine.slope * x1 + boundaryLine.yIntercept;
      const x2 = xMax;
      const y2 = boundaryLine.slope * x2 + boundaryLine.yIntercept;

      return (
        <g key={`boundary-${index}`}>
          <line
            x1={toSVGX(x1)}
            y1={toSVGY(y1)}
            x2={toSVGX(x2)}
            y2={toSVGY(y2)}
            stroke={color}
            strokeWidth={3}
            strokeDasharray={strokeDasharray}
          />

        </g>
      );
    }

    return null;
  };

  /**
   * Render test point
   */
  const renderTestPoint = () => {
    if (!showTestPoint || !testPoint) return null;

    const svgX = toSVGX(testPoint.x);
    const svgY = toSVGY(testPoint.y);

    // Check if test point satisfies all inequalities
    const satisfiesAll = allInequalities.every(ineq =>
      satisfiesInequality(testPoint, ineq)
    );

    const pointColor = satisfiesAll ? '#10b981' : '#ef4444';  // Green if satisfies, red if not

    return (
      <g>
        {/* Point */}
        <circle
          cx={svgX}
          cy={svgY}
          r={6}
          fill={pointColor}
          stroke="white"
          strokeWidth={2}
        />

        {/* Label */}
        {testPoint.label && (
          <text
            x={svgX + 10}
            y={svgY - 10}
            fontSize="12"
            fontWeight="bold"
            fill={pointColor}
          >
            {testPoint.label}
          </text>
        )}

        {/* Verification text */}
        <text
          x={svgX + 10}
          y={svgY + 5}
          fontSize="10"
          fill={pointColor}
        >
          {satisfiesAll ? '✓ Satisfies' : '✗ Does not satisfy'}
        </text>
      </g>
    );
  };

  // ==================== MAIN RENDER ====================

  // Helper to format inequality for display
  const formatInequality = (ineq: Inequality) => {
    if (ineq.label) return ineq.label;

    const { coefficientX: a, coefficientY: b, constant: c, inequalityType } = ineq;

    // Format as ax + by [symbol] c
    const xTerm = a === 1 ? 'x' : a === -1 ? '-x' : `${a}x`;
    const yTerm = b === 1 ? ' + y' : b === -1 ? ' - y' : b > 0 ? ` + ${b}y` : ` - ${Math.abs(b)}y`;
    const symbol = inequalityType === '<=' ? '≤' : inequalityType === '>=' ? '≥' : inequalityType;

    return `${xTerm}${b !== 0 ? yTerm : ''} ${symbol} ${c}`;
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      {/* Equation display above graph */}
      {allInequalities.length > 0 && !title && (
        <div className="text-center mb-2">
          <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            {allInequalities.map((ineq, idx) => (
              <div key={idx} style={{ color: ineq.color || defaultColors[idx % defaultColors.length] }}>
                {formatInequality(ineq)}
              </div>
            ))}
          </div>
        </div>
      )}

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

        {/* Shaded regions (render first, behind everything) */}
        {allInequalities.map((ineq, index) => renderShading(ineq, index))}

        {/* Axes */}
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
            <polygon
              points={`${toSVGX(0)},${topPadding - 10} ${toSVGX(0) - 4},${topPadding} ${toSVGX(0) + 4},${topPadding}`}
              fill={axisColor}
            />
          </>
        )}

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
            <polygon
              points={`${width - padding + 10},${toSVGY(0)} ${width - padding},${toSVGY(0) - 4} ${width - padding},${toSVGY(0) + 4}`}
              fill={axisColor}
            />
          </>
        )}

        {/* Tick marks */}
        {renderTicks()}

        {/* Boundary lines */}
        {allInequalities.map((ineq, index) => renderBoundaryLine(ineq, index))}

        {/* Test point */}
        {renderTestPoint()}

        {/* Axis labels */}
        <text
          x={width - padding + 15}
          y={(yMin <= 0 && yMax >= 0) ? toSVGY(0) + 20 : toSVGY(yMin) + 20}
          fontSize="14"
          fontWeight="bold"
          fill={axisColor}
        >
          x
        </text>
        <text
          x={(xMin <= 0 && xMax >= 0) ? toSVGX(0) + 15 : toSVGX(xMin) + 15}
          y={topPadding - 5}
          fontSize="14"
          fontWeight="bold"
          fill={axisColor}
        >
          y
        </text>
      </svg>

      {/* Caption */}
      {caption && (
        <div className="text-sm mt-2 text-gray-700 dark:text-gray-300" style={{ maxWidth: '500px', textAlign: 'center' }}>
          <MathText>{caption}</MathText>
        </div>
      )}

      {/* Legend */}
      {allInequalities.length > 0 && (
        <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800" style={{ maxWidth: '500px' }}>
          <div className="text-xs font-semibold text-blue-800 dark:text-blue-300 mb-1">Legend:</div>
          {allInequalities.map((ineq, idx) => {
            const isStrict = ineq.inequalityType === '<' || ineq.inequalityType === '>';
            const color = ineq.color || defaultColors[idx % defaultColors.length];
            return (
              <div key={idx} className="text-xs text-gray-700 dark:text-gray-300 flex items-center gap-2 mt-1">
                <div
                  className="w-8 h-0.5"
                  style={{
                    backgroundColor: color,
                    borderStyle: isStrict ? 'dashed' : 'solid',
                    borderWidth: isStrict ? '1px' : '0',
                    borderColor: color,
                    borderTop: isStrict ? `2px dashed ${color}` : 'none',
                  }}
                />
                <span className="font-medium">{isStrict ? 'Dashed' : 'Solid'} line:</span>
                <span>Boundary {isStrict ? '(not included)' : '(included)'}</span>
                <div
                  className="w-4 h-4 ml-2"
                  style={{ backgroundColor: color, opacity: shadeOpacity }}
                />
                <span>Shaded region: Solution set</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LinearInequalityGrapher;
