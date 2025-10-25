import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface FirstPrinciplesVisualizerProps {
  expression: string; // Function expression
  point: number; // x-value where derivative is calculated
  h: number; // Delta x value (small number like 0.5, 0.1)
  showTriangle?: boolean; // Show rise/run triangle
  showFormula?: boolean; // Show derivative formula
  xMin?: number;
  xMax?: number;
  caption?: string;
}

const FirstPrinciplesVisualizer: React.FC<FirstPrinciplesVisualizerProps> = ({
  expression,
  point,
  h,
  showTriangle = true,
  showFormula = true,
  xMin,
  xMax,
  caption
}) => {
  const { theme } = useTheme();

  // Safe expression evaluator
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

  // Calculate function values
  const y = evaluateExpression(point);
  const yPlusH = evaluateExpression(point + h);

  if (y === null || yPlusH === null) {
    return (
      <div className="p-4 bg-red-50 border border-red-300 rounded text-red-800">
        Cannot evaluate function at given points
      </div>
    );
  }

  // Calculate difference quotient (approximate derivative)

  // Auto-calculate range centered around the two points
  const xMinCalc = xMin ?? point - 2;
  const xMaxCalc = xMax ?? point + h + 2;

  // Calculate y-range
  const calculateYRange = (): [number, number] => {
    const yValues: number[] = [y, yPlusH];
    const step = (xMaxCalc - xMinCalc) / 100;

    for (let x = xMinCalc; x <= xMaxCalc; x += step) {
      const yVal = evaluateExpression(x);
      if (yVal !== null) yValues.push(yVal);
    }

    let min = Math.min(...yValues);
    let max = Math.max(...yValues);
    const range = max - min;
    const padding = Math.max(range * 0.3, 2);

    return [min - padding, max + padding];
  };

  const [yMin, yMax] = calculateYRange();

  // SVG dimensions
  const width = 500;
  const height = 400;
  const padding = 50;

  // Scaling
  const xScale = (width - 2 * padding) / (xMaxCalc - xMinCalc);
  const yScale = (height - 2 * padding) / (yMax - yMin);

  // Coordinate conversion
  const mathToSVG = (x: number, yVal: number): [number, number] => {
    const svgX = padding + (x - xMinCalc) * xScale;
    const svgY = height - padding - (yVal - yMin) * yScale;
    return [svgX, svgY];
  };

  // Generate function path
  const generatePath = (): string => {
    const points: [number, number][] = [];
    const step = (xMaxCalc - xMinCalc) / 300;

    for (let x = xMinCalc; x <= xMaxCalc; x += step) {
      const yVal = evaluateExpression(x);

      if (yVal !== null && yVal >= yMin - 10 && yVal <= yMax + 10) {
        const clampedY = Math.max(yMin, Math.min(yMax, yVal));
        const svgPoint = mathToSVG(x, clampedY);

        if (isFinite(svgPoint[0]) && isFinite(svgPoint[1])) {
          points.push(svgPoint);
        }
      }
    }

    if (points.length === 0) return '';

    return points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ');
  };

  const path = generatePath();
  const [originX, originY] = mathToSVG(0, 0);

  // Points
  const [x1Svg, y1Svg] = mathToSVG(point, y);
  const [x2Svg, y2Svg] = mathToSVG(point + h, yPlusH);

  // Secant line
  const secantPath = `M${x1Svg},${y1Svg} L${x2Svg},${y2Svg}`;

  // Smart label positioning to avoid overlap with curve
  const calculateLabelPosition = (
    pointX: number,
    pointY: number,
    isFirstPoint: boolean
  ): { x: number; y: number; anchor: string } => {
    // Calculate numerical derivative at the point to understand curve direction
    const delta = 0.01;
    const x = isFirstPoint ? point : point + h;
    const yLeft = evaluateExpression(x - delta);
    const yRight = evaluateExpression(x + delta);

    if (yLeft === null || yRight === null) {
      // Fallback to simple positioning
      return {
        x: pointX + (isFirstPoint ? -10 : 10),
        y: pointY - 10,
        anchor: isFirstPoint ? 'end' : 'start'
      };
    }

    const slope = (yRight - yLeft) / (2 * delta);
    const slopeSvg = -slope * yScale / xScale; // SVG y is inverted

    // Determine best quadrant for label based on slope
    let offsetX: number;
    let offsetY: number;
    let anchor: string;

    if (Math.abs(slopeSvg) < 0.5) {
      // Shallow slope: place label above or below
      offsetX = 0;
      const yVal = isFirstPoint ? y : yPlusH;
      offsetY = yVal < (yMin + yMax) / 2 ? -25 : 25; // Above if in lower half, below if in upper half
      anchor = 'middle';
    } else if (slopeSvg > 0) {
      // Positive slope: place label to the left
      offsetX = -70;
      offsetY = -10;
      anchor = 'end';
    } else {
      // Negative slope: place label to the right
      offsetX = 70;
      offsetY = -10;
      anchor = 'start';
    }

    return {
      x: pointX + offsetX,
      y: pointY + offsetY,
      anchor
    };
  };

  const label1Pos = calculateLabelPosition(x1Svg, y1Svg, true);
  const label2Pos = calculateLabelPosition(x2Svg, y2Svg, false);

  return (
    <div className="flex flex-col items-center">
      <svg width={width} height={height} className="bg-white dark:bg-gray-800 rounded">
        {/* Axes */}
        {originX >= padding && originX <= width - padding && (
          <line
            x1={originX}
            y1={padding}
            x2={originX}
            y2={height - padding}
            stroke={theme.colors.textPrimary}
            strokeWidth="2"
            opacity="0.3"
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
            opacity="0.3"
          />
        )}

        {/* Function curve */}
        {path && (
          <path d={path} fill="none" stroke="#3b82f6" strokeWidth="3" />
        )}

        {/* Secant line connecting the two points */}
        <path
          d={secantPath}
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
          strokeDasharray="5,5"
        />

        {/* Rise/Run triangle */}
        {showTriangle && (
          <g>
            {/* Horizontal line (run = h) */}
            <line
              x1={x1Svg}
              y1={y1Svg}
              x2={x2Svg}
              y2={y1Svg}
              stroke="#ef4444"
              strokeWidth="2"
            />

            {/* Vertical line (rise = f(x+h) - f(x)) */}
            <line
              x1={x2Svg}
              y1={y1Svg}
              x2={x2Svg}
              y2={y2Svg}
              stroke="#ef4444"
              strokeWidth="2"
            />

            {/* Right angle marker */}
            <rect
              x={x2Svg - 8}
              y={y1Svg > y2Svg ? y1Svg - 8 : y1Svg}
              width="8"
              height="8"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1"
            />

            {/* Labels */}
            <text
              x={(x1Svg + x2Svg) / 2}
              y={y1Svg + 20}
              fill="#ef4444"
              fontSize="13"
              fontWeight="bold"
              textAnchor="middle"
            >
              h = {h.toFixed(3)}
            </text>

            <text
              x={x2Svg + 15}
              y={(y1Svg + y2Svg) / 2}
              fill="#ef4444"
              fontSize="13"
              fontWeight="bold"
            >
              Δy = {(yPlusH - y).toFixed(3)}
            </text>
          </g>
        )}

        {/* Points */}
        <circle
          cx={x1Svg}
          cy={y1Svg}
          r="6"
          fill="#3b82f6"
          stroke="white"
          strokeWidth="2"
        />
        <text
          x={label1Pos.x}
          y={label1Pos.y}
          fill={theme.colors.textPrimary}
          fontSize="12"
          fontWeight="bold"
          textAnchor={label1Pos.anchor as 'inherit' | 'end' | 'start' | 'middle'}
        >
          (x, f(x))
        </text>

        <circle
          cx={x2Svg}
          cy={y2Svg}
          r="6"
          fill="#10b981"
          stroke="white"
          strokeWidth="2"
        />
        <text
          x={label2Pos.x}
          y={label2Pos.y}
          fill={theme.colors.textPrimary}
          fontSize="12"
          fontWeight="bold"
          textAnchor={label2Pos.anchor as 'inherit' | 'end' | 'start' | 'middle'}>
          (x+h, f(x+h))
        </text>

        {/* Difference quotient label removed - would give away the answer */}
      </svg>

      {caption && (
        <p className="mt-2 text-sm text-center" style={{ color: theme.colors.textSecondary }}>
          {caption}
        </p>
      )}

      {showFormula && (
        <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded text-center">
          <p className="text-sm font-semibold" style={{ color: theme.colors.textPrimary }}>
            First Principles Definition:
          </p>
          <p className="text-sm mt-1" style={{ color: theme.colors.textSecondary }}>
            f'(x) = lim<sub>h→0</sub> [f(x + h) - f(x)] / h
          </p>
          <p className="text-xs mt-2" style={{ color: theme.colors.textMuted }}>
            As h gets smaller, the secant line becomes the tangent line
          </p>
        </div>
      )}
    </div>
  );
};

export default FirstPrinciplesVisualizer;
