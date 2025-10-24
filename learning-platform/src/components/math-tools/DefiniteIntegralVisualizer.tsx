import React, { useMemo } from 'react';

interface DefiniteIntegralVisualizerProps {
  functionExpression: string;
  lowerBound: number;
  upperBound: number;
  shadeArea?: boolean;
  showValue?: boolean;
}

const DefiniteIntegralVisualizer: React.FC<DefiniteIntegralVisualizerProps> = ({
  functionExpression,
  lowerBound,
  upperBound,
  shadeArea = true,
  showValue = true
}) => {
  // Safe function evaluator
  const evaluateFunction = (x: number): number => {
    try {
      // Simple expression parser for common functions
      const expr = functionExpression
        .replace(/\^/g, '**')
        .replace(/sin/g, 'Math.sin')
        .replace(/cos/g, 'Math.cos')
        .replace(/tan/g, 'Math.tan')
        .replace(/sqrt/g, 'Math.sqrt')
        .replace(/ln/g, 'Math.log')
        .replace(/log/g, 'Math.log10')
        // Handle unary minus before exponentiation (e.g., -x^2 -> -(x**2))
        .replace(/-([a-z]+)\*\*(\w+)/gi, '-($1**$2)');

      // eslint-disable-next-line no-new-func
      const fn = new Function('x', `return ${expr}`);
      const result = fn(x);
      return isNaN(result) || !isFinite(result) ? 0 : result;
    } catch (error) {
      console.error('Function evaluation error:', error);
      return 0;
    }
  };

  // Calculate function values and area
  const { points, shadedPath, maxY, minY, area } = useMemo(() => {
    const numPoints = 200;
    const step = (upperBound - lowerBound) / numPoints;
    const pts: { x: number; y: number }[] = [];

    let max = -Infinity;
    let min = Infinity;
    let calculatedArea = 0;

    // Generate points for the curve
    for (let i = 0; i <= numPoints; i++) {
      const x = lowerBound + i * step;
      const y = evaluateFunction(x);
      pts.push({ x, y });
      max = Math.max(max, y);
      min = Math.min(min, y);
    }

    // Calculate area using trapezoidal rule
    for (let i = 0; i < numPoints; i++) {
      const x1 = lowerBound + i * step;
      const x2 = lowerBound + (i + 1) * step;
      const y1 = evaluateFunction(x1);
      const y2 = evaluateFunction(x2);
      calculatedArea += (y1 + y2) / 2 * step;
    }

    // Generate shaded area path
    let shadePath = '';
    if (shadeArea) {
      // Start at lower bound on x-axis
      shadePath = `M ${lowerBound} 0 `;

      // Trace along the function
      for (let i = 0; i <= numPoints; i++) {
        const x = lowerBound + i * step;
        const y = evaluateFunction(x);
        shadePath += `L ${x} ${y} `;
      }

      // Close the path back to x-axis
      shadePath += `L ${upperBound} 0 Z`;
    }

    return {
      points: pts,
      shadedPath: shadePath,
      maxY: Math.max(max, 0) * 1.1,
      minY: Math.min(min, 0) * 1.1,
      area: calculatedArea
    };
  }, [functionExpression, lowerBound, upperBound, shadeArea]);

  // SVG dimensions and scaling
  const width = 600;
  const height = 400;
  const padding = 60;
  const graphWidth = width - 2 * padding;
  const graphHeight = height - 2 * padding;

  const xRange = upperBound - lowerBound;
  const yRange = maxY - minY || 1;

  const scaleX = (x: number) => padding + ((x - lowerBound) / xRange) * graphWidth;
  const scaleY = (y: number) => padding + graphHeight - ((y - minY) / yRange) * graphHeight;

  // Generate path for function curve
  const pathData = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${scaleX(p.x)} ${scaleY(p.y)}`)
    .join(' ');

  // Transform shaded path for SVG coordinates
  const transformedShadedPath = shadedPath
    .split(' ')
    .map((token) => {
      if (token === 'M' || token === 'L' || token === 'Z') return token;
      const coords = token.split(',').length === 2 ? token.split(',') : [token];
      if (coords.length === 2) {
        return `${scaleX(parseFloat(coords[0]))},${scaleY(parseFloat(coords[1]))}`;
      }
      return token;
    })
    .join(' ');

  // Parse and transform the shaded path properly
  const shadedPathParts = shadedPath.split(/([MLZ])/g).filter(Boolean);
  let transformedPath = '';

  for (let i = 0; i < shadedPathParts.length; i++) {
    const part = shadedPathParts[i].trim();
    if (part === 'M' || part === 'L' || part === 'Z') {
      transformedPath += part + ' ';
    } else if (part) {
      const coords = part.trim().split(/\s+/);
      if (coords.length >= 2) {
        const x = parseFloat(coords[0]);
        const y = parseFloat(coords[1]);
        transformedPath += `${scaleX(x)} ${scaleY(y)} `;
      }
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
          Definite Integral Visualization
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          ∫<sub>{lowerBound}</sub><sup>{upperBound}</sup> ({functionExpression}) dx
        </p>
      </div>

      <svg width={width} height={height} className="mx-auto">
        {/* Shaded area */}
        {shadeArea && transformedPath && (
          <path
            d={transformedPath}
            fill="rgb(147, 197, 253)"
            fillOpacity="0.5"
            stroke="none"
          />
        )}

        {/* Axes */}
        <line
          x1={padding}
          y1={scaleY(0)}
          x2={width - padding}
          y2={scaleY(0)}
          stroke="currentColor"
          className="text-gray-400 dark:text-gray-500"
          strokeWidth="2"
        />
        <line
          x1={scaleX(lowerBound)}
          y1={padding}
          x2={scaleX(lowerBound)}
          y2={height - padding}
          stroke="currentColor"
          className="text-gray-400 dark:text-gray-500"
          strokeWidth="2"
        />

        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((frac) => {
          const x = lowerBound + frac * xRange;
          return (
            <g key={`grid-x-${frac}`}>
              <line
                x1={scaleX(x)}
                y1={padding}
                x2={scaleX(x)}
                y2={height - padding}
                stroke="currentColor"
                className="text-gray-200 dark:text-gray-700"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
              <text
                x={scaleX(x)}
                y={height - padding + 20}
                textAnchor="middle"
                className="text-xs fill-gray-600 dark:fill-gray-400"
              >
                {x.toFixed(1)}
              </text>
            </g>
          );
        })}

        {/* Y-axis grid */}
        {[0, 0.5, 1].map((frac) => {
          const y = minY + frac * yRange;
          if (Math.abs(y) < 0.01) return null;
          return (
            <g key={`grid-y-${frac}`}>
              <line
                x1={padding}
                y1={scaleY(y)}
                x2={width - padding}
                y2={scaleY(y)}
                stroke="currentColor"
                className="text-gray-200 dark:text-gray-700"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
              <text
                x={padding - 10}
                y={scaleY(y) + 4}
                textAnchor="end"
                className="text-xs fill-gray-600 dark:fill-gray-400"
              >
                {y.toFixed(1)}
              </text>
            </g>
          );
        })}

        {/* Function curve */}
        <path
          d={pathData}
          fill="none"
          stroke="rgb(220, 38, 38)"
          strokeWidth="3"
        />

        {/* Bounds markers */}
        <line
          x1={scaleX(lowerBound)}
          y1={padding}
          x2={scaleX(lowerBound)}
          y2={height - padding}
          stroke="rgb(34, 197, 94)"
          strokeWidth="2.5"
          strokeDasharray="5,5"
        />
        <line
          x1={scaleX(upperBound)}
          y1={padding}
          x2={scaleX(upperBound)}
          y2={height - padding}
          stroke="rgb(34, 197, 94)"
          strokeWidth="2.5"
          strokeDasharray="5,5"
        />

        {/* Labels */}
        <text
          x={scaleX(lowerBound)}
          y={height - padding + 35}
          textAnchor="middle"
          className="text-sm font-bold fill-green-600 dark:fill-green-400"
        >
          a = {lowerBound}
        </text>
        <text
          x={scaleX(upperBound)}
          y={height - padding + 35}
          textAnchor="middle"
          className="text-sm font-bold fill-green-600 dark:fill-green-400"
        >
          b = {upperBound}
        </text>

        {/* Function label */}
        <text
          x={width - padding - 10}
          y={padding - 10}
          textAnchor="end"
          className="text-sm font-semibold fill-red-600 dark:fill-red-400"
        >
          f(x) = {functionExpression}
        </text>
      </svg>

      {showValue && (
        <div className="mt-4 bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded border border-indigo-300 dark:border-indigo-600">
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Definite Integral Value:
          </p>
          <p className="text-2xl font-mono text-indigo-700 dark:text-indigo-300">
            ∫<sub>{lowerBound}</sub><sup>{upperBound}</sup> ({functionExpression}) dx ≈ {area.toFixed(4)}
          </p>
          {area < 0 && (
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
              Note: Negative value indicates area below the x-axis
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default DefiniteIntegralVisualizer;
