import { useMemo } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface LimitVisualizerProps {
  expression: string; // Function expression
  limitPoint: number; // x-value where limit is evaluated
  limitValue?: number; // The limit value (if it exists)
  leftValue?: number; // f(x) as x approaches from left
  rightValue?: number; // f(x) as x approaches from right
  functionValue?: number; // f(limitPoint) - may differ from limit
  showApproach?: boolean; // Show approach arrows
  xMin?: number;
  xMax?: number;
  caption?: string;
}

const LimitVisualizerComponent: React.FC<LimitVisualizerProps> = ({
  expression,
  limitPoint,
  limitValue,
  leftValue,
  rightValue,
  functionValue,
  showApproach: _showApproach = true,
  xMin,
  xMax,
  caption
}) => {
  const { theme } = useTheme();

  // Safe expression evaluator (same as FunctionGraphVisualizer)
  const evaluateExpression = (x: number): number | null => {
    try {
      let expr = expression
        .replace(/\^/g, '**')
        .replace(/(\d)([a-z])/gi, '$1*$2')
        .replace(/([a-z])(\d)/gi, '$1*$2')
        // Handle unary minus before exponentiation (e.g., -x^2 -> -(x**2))
        .replace(/-([a-z]+)\*\*(\w+)/gi, '-($1**$2)');

      const Math_sin = Math.sin;
      const Math_cos = Math.cos;
      const Math_tan = Math.tan;
      const Math_sqrt = Math.sqrt;
      const Math_abs = Math.abs;
      const Math_log = Math.log;
      const Math_exp = Math.exp;

      expr = expr.replace(/sin\(/g, 'Math_sin(');
      expr = expr.replace(/cos\(/g, 'Math_cos(');
      expr = expr.replace(/tan\(/g, 'Math_tan(');
      expr = expr.replace(/sqrt\(/g, 'Math_sqrt(');
      expr = expr.replace(/abs\(/g, 'Math_abs(');
      expr = expr.replace(/ln\(/g, 'Math_log(');
      expr = expr.replace(/log\(/g, 'Math_log(');
      expr = expr.replace(/exp\(/g, 'Math_exp(');

      const result = Function('x', 'Math_sin', 'Math_cos', 'Math_tan', 'Math_sqrt', 'Math_abs', 'Math_log', 'Math_exp', `return ${expr}`)(
        x, Math_sin, Math_cos, Math_tan, Math_sqrt, Math_abs, Math_log, Math_exp
      );

      return isFinite(result) ? result : null;
    } catch (error) {
      return null;
    }
  };

  // Auto-calculate range centered on limit point
  const xMinCalc = xMin ?? limitPoint - 4;
  const xMaxCalc = xMax ?? limitPoint + 4;

  // Calculate y-range (memoized to prevent infinite re-renders)
  const [yMin, yMax] = useMemo(() => {
    const yValues: number[] = [];
    const step = (xMaxCalc - xMinCalc) / 100;

    for (let x = xMinCalc; x <= xMaxCalc; x += step) {
      if (Math.abs(x - limitPoint) > 0.01) { // Skip near discontinuity
        const y = evaluateExpression(x);
        if (y !== null) {
          yValues.push(y);
        }
      }
    }

    // Include limit/function values
    if (limitValue !== undefined) yValues.push(limitValue);
    if (leftValue !== undefined) yValues.push(leftValue);
    if (rightValue !== undefined) yValues.push(rightValue);
    if (functionValue !== undefined) yValues.push(functionValue);

    if (yValues.length === 0) return [-10, 10];

    let min = Math.min(...yValues);
    let max = Math.max(...yValues);
    const range = max - min;
    const padding = Math.max(range * 0.3, 2);

    return [min - padding, max + padding];
  }, [expression, limitPoint, limitValue, leftValue, rightValue, functionValue, xMinCalc, xMaxCalc]);

  // SVG dimensions
  const width = 500;
  const height = 400;
  const padding = 50;

  // Scaling
  const xScale = (width - 2 * padding) / (xMaxCalc - xMinCalc);
  const yScale = (height - 2 * padding) / (yMax - yMin);

  // Coordinate conversion
  const mathToSVG = (x: number, y: number): [number, number] => {
    const svgX = padding + (x - xMinCalc) * xScale;
    const svgY = height - padding - (y - yMin) * yScale;
    return [svgX, svgY];
  };

  // Generate function path (with discontinuity handling) - memoized
  const paths = useMemo(() => {
    const leftPoints: [number, number][] = [];
    const rightPoints: [number, number][] = [];
    const step = (xMaxCalc - xMinCalc) / 300;
    const discontinuityGap = 0.1;

    for (let x = xMinCalc; x <= xMaxCalc; x += step) {
      const distFromLimit = Math.abs(x - limitPoint);

      if (distFromLimit < discontinuityGap) continue; // Skip near limit point

      const y = evaluateExpression(x);

      if (y !== null && y >= yMin - 10 && y <= yMax + 10) {
        const clampedY = Math.max(yMin, Math.min(yMax, y));
        const svgPoint = mathToSVG(x, clampedY);

        if (isFinite(svgPoint[0]) && isFinite(svgPoint[1])) {
          if (x < limitPoint) {
            leftPoints.push(svgPoint);
          } else {
            rightPoints.push(svgPoint);
          }
        }
      }
    }

    const leftPath = leftPoints.length > 0
      ? leftPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ')
      : '';

    const rightPath = rightPoints.length > 0
      ? rightPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ')
      : '';

    return { left: leftPath, right: rightPath };
  }, [expression, limitPoint, xMinCalc, xMaxCalc, yMin, yMax, xScale, yScale]);
  const [originX, originY] = mathToSVG(0, 0);
  const [limitX] = mathToSVG(limitPoint, 0);

  // Determine continuity and limit existence
  const actualFunctionValue = functionValue ?? evaluateExpression(limitPoint);

  // Check if we have one-sided limits that differ
  const hasOneSidedLimits = leftValue !== undefined && rightValue !== undefined;
  const limitsAgree = hasOneSidedLimits && Math.abs(leftValue - rightValue) < 0.01;

  // Overall limit only exists if both one-sided limits agree, or if explicitly provided
  const actualLimitValue = limitValue ?? (limitsAgree ? leftValue : undefined);

  const isContinuous = actualLimitValue != null &&
    actualFunctionValue != null &&
    Math.abs(actualLimitValue - actualFunctionValue) < 0.01;

  return (
    <div className="flex flex-col items-center">
      <svg width={width} height={height} className="bg-white dark:bg-gray-800 rounded">
        {/* Frame border for reference */}
        <rect
          x={padding}
          y={padding}
          width={width - 2 * padding}
          height={height - 2 * padding}
          fill="none"
          stroke={theme.colors.textPrimary}
          strokeWidth="1.5"
          opacity="0.3"
        />

        {/* Axes - always show if origin is in range */}
        {originX >= padding - 10 && originX <= width - padding + 10 && (
          <line
            x1={originX}
            y1={padding}
            x2={originX}
            y2={height - padding}
            stroke={theme.colors.textPrimary}
            strokeWidth="2"
            opacity="0.7"
          />
        )}
        {originY >= padding - 10 && originY <= height - padding + 10 && (
          <line
            x1={padding}
            y1={originY}
            x2={width - padding}
            y2={originY}
            stroke={theme.colors.textPrimary}
            strokeWidth="2"
            opacity="0.7"
          />
        )}

        {/* Vertical line at limit point */}
        <line
          x1={limitX}
          y1={padding}
          x2={limitX}
          y2={height - padding}
          stroke="#fbbf24"
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.5"
        />

        {/* Function curves */}
        {paths.left && (
          <path d={paths.left} fill="none" stroke="#3b82f6" strokeWidth="3" />
        )}
        {paths.right && (
          <path d={paths.right} fill="none" stroke="#3b82f6" strokeWidth="3" />
        )}

        {/* Approach arrows removed for cleaner visualization */}

        {/* One-sided limit markers (when left ≠ right) */}
        {hasOneSidedLimits && !limitsAgree && (
          <>
            {/* Left limit marker */}
            <circle
              cx={mathToSVG(limitPoint, leftValue)[0]}
              cy={mathToSVG(limitPoint, leftValue)[1]}
              r="7"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
            />
            {/* Right limit marker */}
            <circle
              cx={mathToSVG(limitPoint, rightValue)[0]}
              cy={mathToSVG(limitPoint, rightValue)[1]}
              r="7"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
            />
            {/* Function value marker */}
            {actualFunctionValue != null && (
              <circle
                cx={mathToSVG(limitPoint, actualFunctionValue)[0]}
                cy={mathToSVG(limitPoint, actualFunctionValue)[1]}
                r="5"
                fill="#ef4444"
                stroke="white"
                strokeWidth="2"
              />
            )}
          </>
        )}

        {/* Single limit marker (when limit exists) */}
        {actualLimitValue != null && (
          <>
            <circle
              cx={mathToSVG(limitPoint, actualLimitValue)[0]}
              cy={mathToSVG(limitPoint, actualLimitValue)[1]}
              r="6"
              fill={isContinuous ? '#10b981' : 'none'}
              stroke="#10b981"
              strokeWidth="3"
            />
            {/* Function value (if different from limit) */}
            {actualFunctionValue != null && !isContinuous && (
              <circle
                cx={mathToSVG(limitPoint, actualFunctionValue)[0]}
                cy={mathToSVG(limitPoint, actualFunctionValue)[1]}
                r="5"
                fill="#ef4444"
                stroke="white"
                strokeWidth="2"
              />
            )}
          </>
        )}

        {/* Label */}
        <text
          x={limitX}
          y={height - padding + 25}
          fill={theme.colors.textPrimary}
          fontSize="14"
          textAnchor="middle"
          fontWeight="bold"
        >
          x = {limitPoint}
        </text>

        {/* Note: Limit value label removed - would give away the answer */}
      </svg>

      {caption && (
        <p className="mt-2 text-sm text-center" style={{ color: theme.colors.textSecondary }}>
          {caption}
        </p>
      )}

      {/* Legend */}
      <div className="mt-2 text-xs flex items-center gap-3 flex-wrap justify-center">
        {hasOneSidedLimits && !limitsAgree && (
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-full border-2 border-blue-500"></div>
            <span style={{ color: theme.colors.textSecondary }}>One-sided limits</span>
          </div>
        )}
        {actualLimitValue !== undefined && (
          <>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded-full border-2 border-green-500 bg-green-500"></div>
              <span style={{ color: theme.colors.textSecondary }}>Limit exists (continuous)</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded-full border-2 border-green-500"></div>
              <span style={{ color: theme.colors.textSecondary }}>Limit exists</span>
            </div>
          </>
        )}
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 rounded-full bg-red-500"></div>
          <span style={{ color: theme.colors.textSecondary }}>Function value</span>
        </div>
      </div>
    </div>
  );
};

export default LimitVisualizerComponent;
