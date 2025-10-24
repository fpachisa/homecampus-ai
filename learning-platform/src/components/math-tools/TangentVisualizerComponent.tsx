import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { calculateSafeYRange } from './utils/safeRangeCalculator';

interface TangentVisualizerProps {
  expression: string; // Function expression
  tangentPoint: number; // x-value where tangent is drawn
  slope?: number; // Slope of tangent (if not provided, calculate from function)
  showSlope?: boolean; // Show slope annotation
  showPoint?: boolean; // Show point of tangency
  xMin?: number;
  xMax?: number;
  caption?: string;
}

const TangentVisualizerComponent: React.FC<TangentVisualizerProps> = ({
  expression,
  tangentPoint,
  slope,
  showSlope = true,
  showPoint = true,
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

  // Calculate slope numerically if not provided
  const calculateSlope = (): number => {
    if (slope !== undefined) return slope;

    const h = 0.0001;
    const y1 = evaluateExpression(tangentPoint - h);
    const y2 = evaluateExpression(tangentPoint + h);

    if (y1 === null || y2 === null) return 0;

    return (y2 - y1) / (2 * h);
  };

  const tangentSlope = calculateSlope();
  const tangentY = evaluateExpression(tangentPoint);

  if (tangentY === null) {
    return (
      <div className="p-4 bg-red-50 border border-red-300 rounded text-red-800">
        Cannot evaluate function at tangent point x = {tangentPoint}
      </div>
    );
  }

  // Auto-calculate range centered on tangent point
  const xMinCalc = xMin ?? tangentPoint - 4;
  const xMaxCalc = xMax ?? tangentPoint + 4;

  // Calculate y-range with safety protections
  const calculateYRange = (): [number, number] => {
    const yValues: number[] = [tangentY];
    const step = (xMaxCalc - xMinCalc) / 100;

    for (let x = xMinCalc; x <= xMaxCalc; x += step) {
      const y = evaluateExpression(x);
      if (y !== null) yValues.push(y);
    }

    // Add tangent line endpoints
    const tangentY1 = tangentY + tangentSlope * (xMinCalc - tangentPoint);
    const tangentY2 = tangentY + tangentSlope * (xMaxCalc - tangentPoint);
    yValues.push(tangentY1, tangentY2);

    // Use safe range calculator to prevent crashes from extreme values
    return calculateSafeYRange(yValues, {
      maxSpan: 1000,
      maxAbsValue: 10000,
      padding: 0.2
    });
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

  // Generate tangent line
  const tangentLine = (): string => {
    const y1 = tangentY + tangentSlope * (xMinCalc - tangentPoint);
    const y2 = tangentY + tangentSlope * (xMaxCalc - tangentPoint);

    const [x1Svg, y1Svg] = mathToSVG(xMinCalc, y1);
    const [x2Svg, y2Svg] = mathToSVG(xMaxCalc, y2);

    return `M${x1Svg},${y1Svg} L${x2Svg},${y2Svg}`;
  };

  const path = generatePath();
  const tangentPath = tangentLine();
  const [originX, originY] = mathToSVG(0, 0);
  const [tangentPointSvgX, tangentPointSvgY] = mathToSVG(tangentPoint, tangentY);

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

        {/* Tangent line */}
        <path
          d={tangentPath}
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
          strokeDasharray="5,5"
        />

        {/* Point of tangency */}
        {showPoint && (
          <circle
            cx={tangentPointSvgX}
            cy={tangentPointSvgY}
            r="6"
            fill="#ef4444"
            stroke="white"
            strokeWidth="2"
          />
        )}

        {/* Slope annotation */}
        {showSlope && (
          <g>
            {/* Slope label */}
            <text
              x={width - padding - 10}
              y={padding + 20}
              fill="#ef4444"
              fontSize="14"
              fontWeight="bold"
              textAnchor="end"
            >
              m = {tangentSlope.toFixed(2)}
            </text>

            {/* Point label */}
            <text
              x={tangentPointSvgX + 10}
              y={tangentPointSvgY - 10}
              fill={theme.colors.textPrimary}
              fontSize="12"
              fontWeight="bold"
            >
              ({tangentPoint}, {tangentY.toFixed(2)})
            </text>
          </g>
        )}

        {/* Legend */}
        <g transform={`translate(${padding + 10}, ${padding + 10})`}>
          <line x1="0" y1="0" x2="30" y2="0" stroke="#3b82f6" strokeWidth="3" />
          <text x="35" y="5" fill={theme.colors.textPrimary} fontSize="12">
            f(x)
          </text>

          <line x1="0" y1="20" x2="30" y2="20" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
          <text x="35" y="25" fill={theme.colors.textPrimary} fontSize="12">
            Tangent
          </text>
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

export default TangentVisualizerComponent;
