import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface DerivativeGrapherVisualizerProps {
  originalExpression: string; // f(x)
  derivativeExpression: string; // f'(x)
  showRelation?: boolean; // Show connecting lines between corresponding points
  highlightPoints?: number[]; // x-values to highlight on both graphs
  xMin?: number;
  xMax?: number;
  caption?: string;
}

const DerivativeGrapherVisualizer: React.FC<DerivativeGrapherVisualizerProps> = ({
  originalExpression,
  derivativeExpression,
  showRelation = false,
  highlightPoints = [],
  xMin = -5,
  xMax = 5,
  caption
}) => {
  const { theme } = useTheme();

  // Safe expression evaluator
  const evaluateExpression = (expression: string, x: number): number | null => {
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

  // Calculate y-ranges for both functions
  const calculateYRanges = (): { original: [number, number]; derivative: [number, number] } => {
    const originalYValues: number[] = [];
    const derivativeYValues: number[] = [];
    const step = (xMax - xMin) / 100;

    for (let x = xMin; x <= xMax; x += step) {
      const yOrig = evaluateExpression(originalExpression, x);
      const yDeriv = evaluateExpression(derivativeExpression, x);

      if (yOrig !== null) originalYValues.push(yOrig);
      if (yDeriv !== null) derivativeYValues.push(yDeriv);
    }

    const calcRange = (values: number[]): [number, number] => {
      if (values.length === 0) return [-10, 10];

      let min = Math.min(...values);
      let max = Math.max(...values);
      const range = max - min;
      const padding = Math.max(range * 0.2, 2);

      return [min - padding, max + padding];
    };

    return {
      original: calcRange(originalYValues),
      derivative: calcRange(derivativeYValues)
    };
  };

  const ranges = calculateYRanges();

  // SVG dimensions (side-by-side panels)
  const panelWidth = 240;
  const panelHeight = 300;
  const padding = 40;
  const gap = 20;
  const totalWidth = 2 * panelWidth + gap + 2 * padding;
  const totalHeight = panelHeight + 2 * padding;

  // Function to render a single graph panel
  const renderPanel = (
    expression: string,
    yRange: [number, number],
    color: string,
    label: string,
    offsetX: number
  ) => {
    const xScale = (panelWidth - 2 * 20) / (xMax - xMin);
    const yScale = (panelHeight - 2 * 20) / (yRange[1] - yRange[0]);

    const mathToSVG = (x: number, y: number): [number, number] => {
      const svgX = offsetX + 20 + (x - xMin) * xScale;
      const svgY = padding + panelHeight - 20 - (y - yRange[0]) * yScale;
      return [svgX, svgY];
    };

    // Generate path
    const points: [number, number][] = [];
    const step = (xMax - xMin) / 200;

    for (let x = xMin; x <= xMax; x += step) {
      const y = evaluateExpression(expression, x);

      if (y !== null && y >= yRange[0] - 10 && y <= yRange[1] + 10) {
        const clampedY = Math.max(yRange[0], Math.min(yRange[1], y));
        const svgPoint = mathToSVG(x, clampedY);

        if (isFinite(svgPoint[0]) && isFinite(svgPoint[1])) {
          points.push(svgPoint);
        }
      }
    }

    const path = points.length > 0
      ? points.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ')
      : '';

    // Origin
    const [originX, originY] = mathToSVG(0, 0);

    return (
      <g>
        {/* Panel border */}
        <rect
          x={offsetX}
          y={padding}
          width={panelWidth}
          height={panelHeight}
          fill="none"
          stroke={theme.colors.interactive}
          strokeWidth="1"
        />

        {/* Axes */}
        {originX >= offsetX + 20 && originX <= offsetX + panelWidth - 20 && (
          <line
            x1={originX}
            y1={padding + 20}
            x2={originX}
            y2={padding + panelHeight - 20}
            stroke={theme.colors.textPrimary}
            strokeWidth="1"
            opacity="0.3"
          />
        )}
        {originY >= padding + 20 && originY <= padding + panelHeight - 20 && (
          <line
            x1={offsetX + 20}
            y1={originY}
            x2={offsetX + panelWidth - 20}
            y2={originY}
            stroke={theme.colors.textPrimary}
            strokeWidth="1"
            opacity="0.3"
          />
        )}

        {/* Function curve */}
        {path && (
          <path d={path} fill="none" stroke={color} strokeWidth="2" />
        )}

        {/* Highlight points */}
        {highlightPoints.map((x, idx) => {
          const y = evaluateExpression(expression, x);
          if (y === null) return null;

          const [svgX, svgY] = mathToSVG(x, y);

          return (
            <circle
              key={idx}
              cx={svgX}
              cy={svgY}
              r="4"
              fill={color}
              stroke="white"
              strokeWidth="2"
            />
          );
        })}

        {/* Label */}
        <text
          x={offsetX + panelWidth / 2}
          y={padding + panelHeight - 5}
          fill={color}
          fontSize="14"
          fontWeight="bold"
          textAnchor="middle"
        >
          {label}
        </text>
      </g>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <svg width={totalWidth} height={totalHeight} className="bg-white dark:bg-gray-800 rounded">
        {/* Original function panel */}
        {renderPanel(
          originalExpression,
          ranges.original,
          '#3b82f6',
          'f(x)',
          padding
        )}

        {/* Derivative function panel */}
        {renderPanel(
          derivativeExpression,
          ranges.derivative,
          '#ef4444',
          "f'(x)",
          padding + panelWidth + gap
        )}

        {/* Connection lines */}
        {showRelation && highlightPoints.map((x, idx) => {
          const yOrig = evaluateExpression(originalExpression, x);
          const yDeriv = evaluateExpression(derivativeExpression, x);

          if (yOrig === null || yDeriv === null) return null;

          // Calculate SVG coordinates for both panels
          const xScale1 = (panelWidth - 2 * 20) / (xMax - xMin);
          const yScale1 = (panelHeight - 2 * 20) / (ranges.original[1] - ranges.original[0]);

          const xScale2 = (panelWidth - 2 * 20) / (xMax - xMin);
          const yScale2 = (panelHeight - 2 * 20) / (ranges.derivative[1] - ranges.derivative[0]);

          const x1Svg = padding + 20 + (x - xMin) * xScale1;
          const y1Svg = padding + panelHeight - 20 - (yOrig - ranges.original[0]) * yScale1;

          const x2Svg = padding + panelWidth + gap + 20 + (x - xMin) * xScale2;
          const y2Svg = padding + panelHeight - 20 - (yDeriv - ranges.derivative[0]) * yScale2;

          return (
            <line
              key={idx}
              x1={x1Svg}
              y1={y1Svg}
              x2={x2Svg}
              y2={y2Svg}
              stroke="#fbbf24"
              strokeWidth="1"
              strokeDasharray="3,3"
              opacity="0.5"
            />
          );
        })}

        {/* Title */}
        <text
          x={totalWidth / 2}
          y={padding / 2 + 5}
          fill={theme.colors.textPrimary}
          fontSize="16"
          fontWeight="bold"
          textAnchor="middle"
        >
          Function vs Derivative
        </text>
      </svg>

      {caption && (
        <p className="mt-2 text-sm text-center" style={{ color: theme.colors.textSecondary }}>
          {caption}
        </p>
      )}

      {/* Explanation */}
      <div className="mt-2 text-xs text-center" style={{ color: theme.colors.textMuted }}>
        <p>Where f(x) is increasing, f'(x) &gt; 0</p>
        <p>Where f(x) is decreasing, f'(x) &lt; 0</p>
        <p>Where f(x) has a turning point, f'(x) = 0</p>
      </div>
    </div>
  );
};

export default DerivativeGrapherVisualizer;
