import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface OptimizationGrapherVisualizerProps {
  expression: string; // Function to optimize
  optimal: { x: number; y: number }; // Optimal point
  type?: 'maximize' | 'minimize'; // Type of optimization
  constraint?: string; // Optional constraint description
  showConstraints?: boolean; // Show constraint region
  xMin?: number;
  xMax?: number;
  caption?: string;
}

const OptimizationGrapherVisualizer: React.FC<OptimizationGrapherVisualizerProps> = ({
  expression,
  optimal,
  type = 'maximize',
  constraint,
  showConstraints = false,
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

  // Auto-calculate range centered on optimal point
  const xMinCalc = xMin ?? Math.max(0, optimal.x - 5); // Often optimization problems have x >= 0
  const xMaxCalc = xMax ?? optimal.x + 5;

  // Calculate y-range
  const calculateYRange = (): [number, number] => {
    const yValues: number[] = [optimal.y];
    const step = (xMaxCalc - xMinCalc) / 100;

    for (let x = xMinCalc; x <= xMaxCalc; x += step) {
      const y = evaluateExpression(x);
      if (y !== null && y >= 0) yValues.push(y); // Often we care about y >= 0
    }

    // Ensure we include y=0
    yValues.push(0);

    let min = Math.min(...yValues);
    let max = Math.max(...yValues);
    const range = max - min;
    const padding = Math.max(range * 0.2, 2);

    min = Math.max(0, min - padding / 2); // Keep min at 0 or above for typical problems
    max += padding;

    return [min, max];
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
  const [optimalX, optimalY] = mathToSVG(optimal.x, optimal.y);

  const optimalColor = type === 'maximize' ? '#10b981' : '#ef4444';

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
        <line
          x1={padding}
          y1={originY}
          x2={width - padding}
          y2={originY}
          stroke={theme.colors.textPrimary}
          strokeWidth="2"
          opacity="0.3"
        />

        {/* Function curve */}
        {path && (
          <path d={path} fill="none" stroke="#3b82f6" strokeWidth="3" />
        )}

        {/* Constraint region shading (if applicable) */}
        {showConstraints && xMinCalc >= 0 && (
          <rect
            x={padding}
            y={padding}
            width={(width - 2 * padding)}
            height={(height - 2 * padding)}
            fill={theme.colors.interactive}
            opacity="0.05"
          />
        )}

        {/* Vertical line to x-axis from optimal point */}
        <line
          x1={optimalX}
          y1={optimalY}
          x2={optimalX}
          y2={originY}
          stroke={optimalColor}
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.5"
        />

        {/* Horizontal line to y-axis from optimal point */}
        <line
          x1={originX}
          y1={optimalY}
          x2={optimalX}
          y2={optimalY}
          stroke={optimalColor}
          strokeWidth="2"
          strokeDasharray="5,5"
          opacity="0.5"
        />

        {/* Optimal point marker */}
        <circle
          cx={optimalX}
          cy={optimalY}
          r="8"
          fill={optimalColor}
          stroke="white"
          strokeWidth="3"
        />

        {/* Star marker for optimal point */}
        <text
          x={optimalX}
          y={optimalY + 5}
          fill="white"
          fontSize="14"
          fontWeight="bold"
          textAnchor="middle"
        >
          ★
        </text>

        {/* Labels */}
        <text
          x={optimalX}
          y={optimalY - 20}
          fill={optimalColor}
          fontSize="13"
          fontWeight="bold"
          textAnchor="middle"
        >
          {type === 'maximize' ? 'Maximum' : 'Minimum'}
        </text>

        <text
          x={optimalX}
          y={originY + 20}
          fill={theme.colors.textPrimary}
          fontSize="12"
          textAnchor="middle"
        >
          x = {optimal.x.toFixed(2)}
        </text>

        <text
          x={originX - 15}
          y={optimalY + 5}
          fill={theme.colors.textPrimary}
          fontSize="12"
          textAnchor="end"
        >
          y = {optimal.y.toFixed(2)}
        </text>

        {/* Title */}
        <text
          x={width / 2}
          y={padding / 2 + 5}
          fill={theme.colors.textPrimary}
          fontSize="15"
          fontWeight="bold"
          textAnchor="middle"
        >
          {type === 'maximize' ? 'Maximization' : 'Minimization'} Problem
        </text>

        {/* Optimal value box */}
        <g transform={`translate(${width - padding - 120}, ${padding + 10})`}>
          <rect
            x="0"
            y="0"
            width="110"
            height="40"
            fill={optimalColor}
            opacity="0.1"
            stroke={optimalColor}
            strokeWidth="2"
            rx="5"
          />
          <text
            x="55"
            y="18"
            fill={theme.colors.textPrimary}
            fontSize="11"
            fontWeight="bold"
            textAnchor="middle"
          >
            Optimal Value
          </text>
          <text
            x="55"
            y="32"
            fill={optimalColor}
            fontSize="14"
            fontWeight="bold"
            textAnchor="middle"
          >
            {optimal.y.toFixed(2)}
          </text>
        </g>
      </svg>

      {caption && (
        <p className="mt-2 text-sm text-center" style={{ color: theme.colors.textSecondary }}>
          {caption}
        </p>
      )}

      {/* Constraint info */}
      {constraint && (
        <div className="mt-2 p-2 bg-blue-50 dark:bg-blue-900/20 rounded text-center max-w-md">
          <p className="text-xs font-semibold" style={{ color: theme.colors.textPrimary }}>
            Constraint:
          </p>
          <p className="text-xs mt-1" style={{ color: theme.colors.textSecondary }}>
            {constraint}
          </p>
        </div>
      )}

      {/* Optimization info */}
      <div className="mt-2 text-xs text-center" style={{ color: theme.colors.textMuted }}>
        <p>
          {type === 'maximize' ? 'Maximum' : 'Minimum'} occurs at x = {optimal.x.toFixed(2)},
          giving {type === 'maximize' ? 'max' : 'min'} value = {optimal.y.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default OptimizationGrapherVisualizer;
