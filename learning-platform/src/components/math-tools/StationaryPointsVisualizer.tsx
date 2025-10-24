import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { calculateSafeYRange } from './utils/safeRangeCalculator';

interface StationaryPoint {
  x: number;
  y: number;
  type: 'max' | 'min' | 'inflection';
  label?: string;
}

interface StationaryPointsVisualizerProps {
  expression: string; // Function expression
  stationaryPoints: StationaryPoint[]; // Array of stationary points
  showDerivativeZero?: boolean; // Show f'(x) = 0 annotation
  xMin?: number;
  xMax?: number;
  caption?: string;
}

const StationaryPointsVisualizer: React.FC<StationaryPointsVisualizerProps> = ({
  expression,
  stationaryPoints,
  showDerivativeZero = true,
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

  // Auto-calculate range based on stationary points
  const xValues = stationaryPoints.map(p => p.x);

  // Handle case where stationaryPoints might be empty or have invalid values
  let xMinCalc, xMaxCalc;
  if (xMin !== undefined && xMax !== undefined) {
    xMinCalc = xMin;
    xMaxCalc = xMax;
  } else if (xValues.length > 0) {
    const minX = Math.min(...xValues);
    const maxX = Math.max(...xValues);
    xMinCalc = xMin ?? (isFinite(minX) ? minX - 2 : -5);
    xMaxCalc = xMax ?? (isFinite(maxX) ? maxX + 2 : 5);
  } else {
    // Fallback if no stationary points provided
    xMinCalc = xMin ?? -5;
    xMaxCalc = xMax ?? 5;
  }

  // Calculate y-range with safety protections
  const calculateYRange = (): [number, number] => {
    const yValues: number[] = stationaryPoints.map(p => p.y);
    const step = (xMaxCalc - xMinCalc) / 100;

    for (let x = xMinCalc; x <= xMaxCalc; x += step) {
      const y = evaluateExpression(x);
      if (y !== null && isFinite(y)) yValues.push(y);
    }

    // Use safe range calculator to prevent crashes from extreme values
    return calculateSafeYRange(yValues, {
      maxSpan: 1000,
      maxAbsValue: 10000,
      padding: 0.2,
      minRange: 2
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

  const path = generatePath();
  const [originX, originY] = mathToSVG(0, 0);

  // Debug: log if path is empty
  if (!path) {
    console.warn('[StationaryPointsVisualizer] Empty path generated for expression:', expression);
    console.warn('[StationaryPointsVisualizer] Y-range:', yMin, yMax);
    console.warn('[StationaryPointsVisualizer] X-range:', xMinCalc, xMaxCalc);
  }

  // Color mapping for stationary point types
  const getPointColor = (type: string) => {
    switch (type) {
      case 'max':
        return '#ef4444'; // red
      case 'min':
        return '#10b981'; // green
      case 'inflection':
        return '#f59e0b'; // orange
      default:
        return '#6b7280'; // gray
    }
  };

  const getPointLabel = (type: string) => {
    switch (type) {
      case 'max':
        return 'Maximum';
      case 'min':
        return 'Minimum';
      case 'inflection':
        return 'Inflection';
      default:
        return 'Point';
    }
  };

  // Show error if path generation failed
  if (!path) {
    return (
      <div className="p-4 bg-red-50 border border-red-300 rounded text-red-800">
        <p className="font-bold">Graph Rendering Error</p>
        <p className="text-sm mt-1">Cannot generate graph path for expression: {expression}</p>
        <p className="text-xs mt-2">Y-range: [{yMin.toFixed(2)}, {yMax.toFixed(2)}]</p>
        <p className="text-xs">X-range: [{xMinCalc.toFixed(2)}, {xMaxCalc.toFixed(2)}]</p>
      </div>
    );
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

        {/* Stationary points */}
        {stationaryPoints.map((point, idx) => {
          const [svgX, svgY] = mathToSVG(point.x, point.y);
          const color = getPointColor(point.type);

          return (
            <g key={idx}>
              {/* Vertical dashed line to x-axis */}
              <line
                x1={svgX}
                y1={svgY}
                x2={svgX}
                y2={height - padding}
                stroke={color}
                strokeWidth="1"
                strokeDasharray="3,3"
                opacity="0.4"
              />

              {/* Point marker */}
              <circle
                cx={svgX}
                cy={svgY}
                r="7"
                fill={color}
                stroke="white"
                strokeWidth="2"
              />

              {/* Label */}
              {point.label && (
                <text
                  x={svgX}
                  y={svgY - 15}
                  fill={color}
                  fontSize="12"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {point.label}
                </text>
              )}

              {/* Coordinates */}
              <text
                x={svgX}
                y={height - padding + 20}
                fill={theme.colors.textPrimary}
                fontSize="11"
                textAnchor="middle"
              >
                ({point.x.toFixed(1)}, {point.y.toFixed(1)})
              </text>

              {/* f'(x) = 0 annotation */}
              {showDerivativeZero && point.type !== 'inflection' && (
                <text
                  x={svgX + 15}
                  y={svgY + 5}
                  fill={color}
                  fontSize="10"
                  fontStyle="italic"
                >
                  f'(x)=0
                </text>
              )}
            </g>
          );
        })}

        {/* Legend */}
        <g transform={`translate(${padding + 10}, ${padding + 10})`}>
          <circle cx="5" cy="0" r="5" fill="#ef4444" stroke="white" strokeWidth="1" />
          <text x="15" y="5" fill={theme.colors.textPrimary} fontSize="11">
            Maximum
          </text>

          <circle cx="5" cy="20" r="5" fill="#10b981" stroke="white" strokeWidth="1" />
          <text x="15" y="25" fill={theme.colors.textPrimary} fontSize="11">
            Minimum
          </text>

          <circle cx="5" cy="40" r="5" fill="#f59e0b" stroke="white" strokeWidth="1" />
          <text x="15" y="45" fill={theme.colors.textPrimary} fontSize="11">
            Inflection
          </text>
        </g>

        {/* Title */}
        <text
          x={width / 2}
          y={padding / 2 + 5}
          fill={theme.colors.textPrimary}
          fontSize="15"
          fontWeight="bold"
          textAnchor="middle"
        >
          Stationary Points (f'(x) = 0)
        </text>
      </svg>

      {caption && (
        <p className="mt-2 text-sm text-center" style={{ color: theme.colors.textSecondary }}>
          {caption}
        </p>
      )}

      {/* Summary */}
      <div className="mt-2 text-xs text-center" style={{ color: theme.colors.textMuted }}>
        <p>Found {stationaryPoints.length} stationary point(s)</p>
        <p className="mt-1">
          Max: {stationaryPoints.filter(p => p.type === 'max').length} |
          Min: {stationaryPoints.filter(p => p.type === 'min').length} |
          Inflection: {stationaryPoints.filter(p => p.type === 'inflection').length}
        </p>
      </div>
    </div>
  );
};

export default StationaryPointsVisualizer;
