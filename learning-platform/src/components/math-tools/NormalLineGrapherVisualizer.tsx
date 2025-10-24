import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { calculateSafeYRange, calculateSafeNormalSlope } from './utils/safeRangeCalculator';

interface NormalLineGrapherVisualizerProps {
  expression: string; // Function expression
  point: number; // x-value where tangent and normal are drawn
  tangentSlope?: number; // Tangent slope (calculated if not provided)
  showAngles?: boolean; // Show perpendicular angle indicator
  showSlopes?: boolean; // Show slope values
  xMin?: number;
  xMax?: number;
  caption?: string;
}

const NormalLineGrapherVisualizer: React.FC<NormalLineGrapherVisualizerProps> = ({
  expression,
  point,
  tangentSlope,
  showAngles = true,
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

  // Calculate tangent slope if not provided
  const calculateTangentSlope = (): number => {
    if (tangentSlope !== undefined) return tangentSlope;

    const h = 0.0001;
    const y1 = evaluateExpression(point - h);
    const y2 = evaluateExpression(point + h);

    if (y1 === null || y2 === null) return 0;

    return (y2 - y1) / (2 * h);
  };

  const mTangent = calculateTangentSlope();

  const yAtPoint = evaluateExpression(point);

  if (yAtPoint === null) {
    return (
      <div className="p-4 bg-red-50 border border-red-300 rounded text-red-800">
        Cannot evaluate function at point x = {point}
      </div>
    );
  }

  // Auto-calculate range
  const xMinCalc = xMin ?? point - 4;
  const xMaxCalc = xMax ?? point + 4;

  // Calculate mathematically perpendicular normal slope: m_normal = -1/m_tangent
  // This is the true mathematical relationship
  const mNormalMath = calculateSafeNormalSlope(mTangent, 1000);

  // Calculate y-range with safety protections
  const calculateYRange = (): [number, number] => {
    const yValues: number[] = [yAtPoint];
    const step = (xMaxCalc - xMinCalc) / 100;

    for (let x = xMinCalc; x <= xMaxCalc; x += step) {
      const y = evaluateExpression(x);
      if (y !== null) yValues.push(y);
    }

    // Add tangent line endpoints
    const tangentY1 = yAtPoint + mTangent * (xMinCalc - point);
    const tangentY2 = yAtPoint + mTangent * (xMaxCalc - point);
    yValues.push(tangentY1, tangentY2);

    // Only add normal line endpoints if it's not near-horizontal or near-vertical
    // (those cases draw vertical/horizontal lines that don't affect range calculation)
    if (Math.abs(mTangent) >= 0.001 && Math.abs(mTangent) <= 1000) {
      const normalY1 = yAtPoint + mNormalMath * (xMinCalc - point);
      const normalY2 = yAtPoint + mNormalMath * (xMaxCalc - point);
      yValues.push(normalY1, normalY2);
    }

    // Use safe range calculator to prevent crashes from extreme normal line values
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

  const aspectRatio = yScale / xScale;

  // Calculate visually perpendicular normal slope (corrected for aspect ratio)
  // For lines to LOOK perpendicular on screen with different x/y scales:
  // m_normal_visual = -1 / (m_tangent * aspectRatio^2)
  const mNormalVisual = calculateSafeNormalSlope(
    mTangent * aspectRatio * aspectRatio,
    1000
  );

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
    const y1 = yAtPoint + mTangent * (xMinCalc - point);
    const y2 = yAtPoint + mTangent * (xMaxCalc - point);

    const [x1Svg, y1Svg] = mathToSVG(xMinCalc, y1);
    const [x2Svg, y2Svg] = mathToSVG(xMaxCalc, y2);

    return `M${x1Svg},${y1Svg} L${x2Svg},${y2Svg}`;
  };

  // Generate normal line (using visually-corrected slope)
  const normalLine = (): string => {
    // Special case: if tangent is horizontal (slope ≈ 0), draw vertical normal line
    if (Math.abs(mTangent) < 0.001) {
      const [xSvg, y1Svg] = mathToSVG(point, yMin);
      const [_, y2Svg] = mathToSVG(point, yMax);
      return `M${xSvg},${y1Svg} L${xSvg},${y2Svg}`;
    }

    // Special case: if tangent is vertical (slope very large), draw horizontal normal line
    if (Math.abs(mTangent) > 1000) {
      const [x1Svg, ySvg] = mathToSVG(xMinCalc, yAtPoint);
      const [x2Svg, _] = mathToSVG(xMaxCalc, yAtPoint);
      return `M${x1Svg},${ySvg} L${x2Svg},${ySvg}`;
    }

    // Normal case: use visually-corrected slope
    const y1 = yAtPoint + mNormalVisual * (xMinCalc - point);
    const y2 = yAtPoint + mNormalVisual * (xMaxCalc - point);

    const [x1Svg, y1Svg] = mathToSVG(xMinCalc, y1);
    const [x2Svg, y2Svg] = mathToSVG(xMaxCalc, y2);

    return `M${x1Svg},${y1Svg} L${x2Svg},${y2Svg}`;
  };

  const path = generatePath();
  const tangentPath = tangentLine();
  const normalPath = normalLine();
  const [originX, originY] = mathToSVG(0, 0);
  const [pointX, pointY] = mathToSVG(point, yAtPoint);

  // Calculate perpendicular marker coordinates
  // Create a right angle marker in screen space
  const markerSize = 15;

  let tangentUnitX, tangentUnitY, normalUnitX, normalUnitY;

  // Special case: horizontal tangent (slope ≈ 0) → vertical normal
  if (Math.abs(mTangent) < 0.001) {
    tangentUnitX = markerSize;
    tangentUnitY = 0;
    normalUnitX = 0;
    normalUnitY = -markerSize; // Negative because SVG y is inverted
  }
  // Special case: vertical tangent (slope very large) → horizontal normal
  else if (Math.abs(mTangent) > 1000) {
    tangentUnitX = 0;
    tangentUnitY = -markerSize;
    normalUnitX = markerSize;
    normalUnitY = 0;
  }
  // Normal case: calculate from slopes
  else {
    // Calculate unit direction vectors in screen coordinates
    // For tangent: dx = 1, dy = slope (but y is inverted in SVG)
    const tangentScreenDx = xScale;
    const tangentScreenDy = -mTangent * yScale;
    const tangentLength = Math.sqrt(tangentScreenDx * tangentScreenDx + tangentScreenDy * tangentScreenDy);
    tangentUnitX = (tangentScreenDx / tangentLength) * markerSize;
    tangentUnitY = (tangentScreenDy / tangentLength) * markerSize;

    // For normal: dx = 1, dy = normal slope (already corrected for aspect ratio)
    const normalScreenDx = xScale;
    const normalScreenDy = -mNormalVisual * yScale;
    const normalLength = Math.sqrt(normalScreenDx * normalScreenDx + normalScreenDy * normalScreenDy);
    normalUnitX = (normalScreenDx / normalLength) * markerSize;
    normalUnitY = (normalScreenDy / normalLength) * markerSize;
  }

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

        {/* Normal line */}
        <path
          d={normalPath}
          fill="none"
          stroke="#10b981"
          strokeWidth="2"
          strokeDasharray="8,4"
        />

        {/* Point of tangency */}
        <circle
          cx={pointX}
          cy={pointY}
          r="6"
          fill="#fbbf24"
          stroke="white"
          strokeWidth="2"
        />

        {/* Right angle indicator */}
        {showAngles && (
          <g>
            <path
              d={`M${pointX + tangentUnitX},${pointY + tangentUnitY} L${pointX + tangentUnitX + normalUnitX},${pointY + tangentUnitY + normalUnitY} L${pointX + normalUnitX},${pointY + normalUnitY}`}
              fill="none"
              stroke="#fbbf24"
              strokeWidth="1.5"
            />
          </g>
        )}

        {/* Slope labels */}
        {showSlopes && (
          <g>
            <text
              x={width - padding - 10}
              y={padding + 20}
              fill="#ef4444"
              fontSize="13"
              fontWeight="bold"
              textAnchor="end"
            >
              Tangent: m = {mTangent.toFixed(2)}
            </text>

            <text
              x={width - padding - 10}
              y={padding + 40}
              fill="#10b981"
              fontSize="13"
              fontWeight="bold"
              textAnchor="end"
            >
              Normal: m = {Math.abs(mNormalMath) !== 999999 ? mNormalMath.toFixed(2) : '∞'}
            </text>
          </g>
        )}

        {/* Legend */}
        <g transform={`translate(${padding + 10}, ${padding + 10})`}>
          <line x1="0" y1="0" x2="30" y2="0" stroke="#3b82f6" strokeWidth="3" />
          <text x="35" y="5" fill={theme.colors.textPrimary} fontSize="11">
            f(x)
          </text>

          <line x1="0" y1="20" x2="30" y2="20" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
          <text x="35" y="25" fill={theme.colors.textPrimary} fontSize="11">
            Tangent
          </text>

          <line x1="0" y1="40" x2="30" y2="40" stroke="#10b981" strokeWidth="2" strokeDasharray="8,4" />
          <text x="35" y="45" fill={theme.colors.textPrimary} fontSize="11">
            Normal (⊥)
          </text>
        </g>
      </svg>

      {caption && (
        <p className="mt-2 text-sm text-center" style={{ color: theme.colors.textSecondary }}>
          {caption}
        </p>
      )}

      {/* Perpendicular relationship */}
      <div className="mt-2 text-xs text-center" style={{ color: theme.colors.textMuted }}>
        <p>Normal line is perpendicular to tangent: m<sub>tangent</sub> × m<sub>normal</sub> = -1</p>
      </div>
    </div>
  );
};

export default NormalLineGrapherVisualizer;
