import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface SecantTangentComparisonVisualizerProps {
  expression: string; // Function expression
  point1: number; // First point x-coordinate (for secant)
  point2: number; // Second point x-coordinate (for secant)
  tangentPoint?: number; // Point for tangent (defaults to point1)
  showBoth?: boolean; // Show both lines (default true)
  showSlopes?: boolean; // Show slope values
  xMin?: number;
  xMax?: number;
  caption?: string;
}

const SecantTangentComparisonVisualizer: React.FC<SecantTangentComparisonVisualizerProps> = ({
  expression,
  point1,
  point2,
  tangentPoint,
  showBoth = true,
  showSlopes = true,
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

  const tangentPointCalc = tangentPoint ?? point1;

  // Calculate function values
  const y1 = evaluateExpression(point1);
  const y2 = evaluateExpression(point2);
  const yTangent = evaluateExpression(tangentPointCalc);

  if (y1 === null || y2 === null || yTangent === null) {
    return (
      <div className="p-4 bg-red-50 border border-red-300 rounded text-red-800">
        Cannot evaluate function at given points
      </div>
    );
  }

  // Calculate slopes
  const secantSlope = (y2 - y1) / (point2 - point1);

  // Calculate tangent slope numerically
  const h = 0.0001;
  const yLeft = evaluateExpression(tangentPointCalc - h);
  const yRight = evaluateExpression(tangentPointCalc + h);
  const tangentSlope = (yLeft !== null && yRight !== null)
    ? (yRight - yLeft) / (2 * h)
    : 0;

  // Auto-calculate range
  const xMinCalc = xMin ?? Math.min(point1, point2) - 2;
  const xMaxCalc = xMax ?? Math.max(point1, point2) + 2;

  // Calculate y-range
  const calculateYRange = (): [number, number] => {
    const yValues: number[] = [y1, y2, yTangent];
    const step = (xMaxCalc - xMinCalc) / 100;

    for (let x = xMinCalc; x <= xMaxCalc; x += step) {
      const y = evaluateExpression(x);
      if (y !== null) yValues.push(y);
    }

    // Add line endpoints
    const secantY1 = y1 + secantSlope * (xMinCalc - point1);
    const secantY2 = y1 + secantSlope * (xMaxCalc - point1);
    const tangentY1 = yTangent + tangentSlope * (xMinCalc - tangentPointCalc);
    const tangentY2 = yTangent + tangentSlope * (xMaxCalc - tangentPointCalc);

    yValues.push(secantY1, secantY2, tangentY1, tangentY2);

    let min = Math.min(...yValues);
    let max = Math.max(...yValues);
    const range = max - min;
    const padding = Math.max(range * 0.2, 2);

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
  const mathToSVG = (x: number, y: number): [number, number] => {
    const svgX = padding + (x - xMinCalc) * xScale;
    const svgY = height - padding - (y - yMin) * yScale;
    return [svgX, svgY];
  };

  // Generate function path
  const generatePath = (): string => {
    const points: [number, number][] = [];
    const step = (xMaxCalc - xMinCalc) / 300;

    for (let x = xMinCalc; x <= xMaxCalc; x += step) {
      const y = evaluateExpression(x);

      if (y !== null && y >= yMin - 10 && y <= yMax + 10) {
        const clampedY = Math.max(yMin, Math.min(yMax, y));
        const svgPoint = mathToSVG(x, clampedY);

        if (isFinite(svgPoint[0]) && isFinite(svgPoint[1])) {
          points.push(svgPoint);
        }
      }
    }

    if (points.length === 0) return '';

    return points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ');
  };

  // Generate secant line
  const secantLine = (): string => {
    const yStart = y1 + secantSlope * (xMinCalc - point1);
    const yEnd = y1 + secantSlope * (xMaxCalc - point1);

    const [x1Svg, y1Svg] = mathToSVG(xMinCalc, yStart);
    const [x2Svg, y2Svg] = mathToSVG(xMaxCalc, yEnd);

    return `M${x1Svg},${y1Svg} L${x2Svg},${y2Svg}`;
  };

  // Generate tangent line
  const tangentLine = (): string => {
    const yStart = yTangent + tangentSlope * (xMinCalc - tangentPointCalc);
    const yEnd = yTangent + tangentSlope * (xMaxCalc - tangentPointCalc);

    const [x1Svg, y1Svg] = mathToSVG(xMinCalc, yStart);
    const [x2Svg, y2Svg] = mathToSVG(xMaxCalc, yEnd);

    return `M${x1Svg},${y1Svg} L${x2Svg},${y2Svg}`;
  };

  const path = generatePath();
  const secantPath = secantLine();
  const tangentPath = tangentLine();
  const [originX, originY] = mathToSVG(0, 0);

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

        {/* Secant line */}
        <path
          d={secantPath}
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
          strokeDasharray="8,4"
        />

        {/* Tangent line */}
        {showBoth && (
          <path
            d={tangentPath}
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        )}

        {/* Points for secant line */}
        <circle
          cx={mathToSVG(point1, y1)[0]}
          cy={mathToSVG(point1, y1)[1]}
          r="6"
          fill="#10b981"
          stroke="white"
          strokeWidth="2"
        />
        <circle
          cx={mathToSVG(point2, y2)[0]}
          cy={mathToSVG(point2, y2)[1]}
          r="6"
          fill="#10b981"
          stroke="white"
          strokeWidth="2"
        />

        {/* Point for tangent line */}
        {showBoth && (
          <circle
            cx={mathToSVG(tangentPointCalc, yTangent)[0]}
            cy={mathToSVG(tangentPointCalc, yTangent)[1]}
            r="6"
            fill="#ef4444"
            stroke="white"
            strokeWidth="2"
          />
        )}

        {/* Slope annotations */}
        {showSlopes && (
          <g>
            <text
              x={width - padding - 10}
              y={padding + 20}
              fill="#10b981"
              fontSize="13"
              fontWeight="bold"
              textAnchor="end"
            >
              Secant: {secantSlope.toFixed(2)}
            </text>

            {showBoth && (
              <text
                x={width - padding - 10}
                y={padding + 40}
                fill="#ef4444"
                fontSize="13"
                fontWeight="bold"
                textAnchor="end"
              >
                Tangent: {tangentSlope.toFixed(2)}
              </text>
            )}
          </g>
        )}

        {/* Legend */}
        <g transform={`translate(${padding + 10}, ${padding + 10})`}>
          <line x1="0" y1="0" x2="30" y2="0" stroke="#3b82f6" strokeWidth="3" />
          <text x="35" y="5" fill={theme.colors.textPrimary} fontSize="11">
            f(x)
          </text>

          <line x1="0" y1="20" x2="30" y2="20" stroke="#10b981" strokeWidth="2" strokeDasharray="8,4" />
          <text x="35" y="25" fill={theme.colors.textPrimary} fontSize="11">
            Secant (avg rate)
          </text>

          {showBoth && (
            <>
              <line x1="0" y1="40" x2="30" y2="40" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
              <text x="35" y="45" fill={theme.colors.textPrimary} fontSize="11">
                Tangent (inst rate)
              </text>
            </>
          )}
        </g>
      </svg>

      {caption && (
        <p className="mt-2 text-sm text-center" style={{ color: theme.colors.textSecondary }}>
          {caption}
        </p>
      )}
    </div>
  );
};

export default SecantTangentComparisonVisualizer;
