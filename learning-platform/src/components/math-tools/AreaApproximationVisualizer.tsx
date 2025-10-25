import React, { useMemo } from 'react';

interface AreaApproximationVisualizerProps {
  functionExpression: string;
  lowerBound: number;
  upperBound: number;
  rectangles: number;
  method: 'left' | 'right' | 'midpoint';
  showExact?: boolean;
}

const AreaApproximationVisualizer: React.FC<AreaApproximationVisualizerProps> = ({
  functionExpression,
  lowerBound,
  upperBound,
  rectangles,
  method,
  showExact = false
}) => {
  // Detect the variable name from the expression (x, t, θ, etc.)
  const detectVariable = (expr: string): string => {
    // Remove math function names to avoid false matches
    const cleaned = expr
      .replace(/sin|cos|tan|sqrt|ln|log|exp|abs/gi, '')
      .replace(/\d+/g, ''); // Remove numbers

    // Find the first alphabetic character (or Greek letter)
    const match = cleaned.match(/[a-z]/i);
    return match ? match[0] : 'x';
  };

  const variableName = useMemo(() => detectVariable(functionExpression), [functionExpression]);

  // Safe function evaluator
  const evaluateFunction = (value: number): number => {
    try {
      // Simple expression parser for common functions
      let expr = functionExpression
        .replace(/\s+/g, '') // Remove all spaces first
        .replace(/\^/g, '**')
        // STEP 1: Replace math functions with PLACEHOLDERS (uppercase tokens that won't match [a-z])
        .replace(/sin/gi, '__SINE__')
        .replace(/cos/gi, '__COSINE__')
        .replace(/tan/gi, '__TANGENT__')
        .replace(/sqrt/gi, '__SQRT__')
        .replace(/ln/gi, '__LN__')
        .replace(/log/gi, '__LOG__')
        .replace(/exp/gi, '__EXP__')
        .replace(/abs/gi, '__ABS__')
        // STEP 2: Now apply implicit multiplication (safe because functions are placeholders)
        // Handle implicit multiplication: number followed by letter (3x -> 3*x)
        .replace(/(\d)([a-z])/gi, '$1*$2')
        // Handle implicit multiplication: letter followed by opening paren (x( -> x*(, but __SINE__( stays)
        .replace(/([a-z])(\()/gi, '$1*$2')
        // Handle implicit multiplication: closing paren followed by opening paren )( -> )*(
        .replace(/(\))(\()/g, '$1*$2')
        // Handle implicit multiplication: closing paren followed by number/letter ()2 -> ()*2, ()x -> ()*x)
        .replace(/(\))(\d|[a-z])/gi, '$1*$2')
        // STEP 3: Convert placeholders to Math.xxx functions
        .replace(/__SINE__/g, 'Math.sin')
        .replace(/__COSINE__/g, 'Math.cos')
        .replace(/__TANGENT__/g, 'Math.tan')
        .replace(/__SQRT__/g, 'Math.sqrt')
        .replace(/__LN__/g, 'Math.log')
        .replace(/__LOG__/g, 'Math.log10')
        .replace(/__EXP__/g, 'Math.exp')
        .replace(/__ABS__/g, 'Math.abs')
        // Handle unary minus before exponentiation (e.g., -x**2 -> -(x**2))
        .replace(/-([a-z]+)\*\*(\w+)/gi, '-($1**$2)');

      // Create function with detected variable name
      // eslint-disable-next-line no-new-func
      const fn = new Function(variableName, `return ${expr}`);
      const result = fn(value);
      return isNaN(result) || !isFinite(result) ? 0 : result;
    } catch (error) {
      console.error('Function evaluation error:', error, 'Original:', functionExpression);
      return 0;
    }
  };

  // Calculate function values and setup
  const { points, maxY, minY, approximateArea, exactArea } = useMemo(() => {
    const numPoints = 200;
    const step = (upperBound - lowerBound) / numPoints;
    const pts: { x: number; y: number }[] = [];

    let max = -Infinity;
    let min = Infinity;

    for (let i = 0; i <= numPoints; i++) {
      const x = lowerBound + i * step;
      const y = evaluateFunction(x);
      pts.push({ x, y });
      max = Math.max(max, y);
      min = Math.min(min, y);
    }

    // Calculate approximate area using rectangles
    const width = (upperBound - lowerBound) / rectangles;
    let approxArea = 0;

    for (let i = 0; i < rectangles; i++) {
      let x: number;
      if (method === 'left') {
        x = lowerBound + i * width;
      } else if (method === 'right') {
        x = lowerBound + (i + 1) * width;
      } else { // midpoint
        x = lowerBound + (i + 0.5) * width;
      }
      const height = evaluateFunction(x);
      approxArea += Math.abs(height * width);
    }

    // Calculate exact area using trapezoidal rule (approximation)
    let exact = 0;
    if (showExact) {
      const trapStep = (upperBound - lowerBound) / 1000;
      for (let i = 0; i < 1000; i++) {
        const x1 = lowerBound + i * trapStep;
        const x2 = lowerBound + (i + 1) * trapStep;
        const y1 = evaluateFunction(x1);
        const y2 = evaluateFunction(x2);
        exact += Math.abs((y1 + y2) / 2 * trapStep);
      }
    }

    return {
      points: pts,
      maxY: Math.max(max, 0),
      minY: Math.min(min, 0),
      approximateArea: approxArea,
      exactArea: exact
    };
  }, [functionExpression, lowerBound, upperBound, rectangles, method, showExact, variableName]);

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

  // Generate rectangles
  const rectWidth = (upperBound - lowerBound) / rectangles;
  const rects = [];

  for (let i = 0; i < rectangles; i++) {
    let x: number;
    if (method === 'left') {
      x = lowerBound + i * rectWidth;
    } else if (method === 'right') {
      x = lowerBound + (i + 1) * rectWidth;
    } else { // midpoint
      x = lowerBound + (i + 0.5) * rectWidth;
    }

    const rectX = lowerBound + i * rectWidth;
    const rectHeight = evaluateFunction(x);

    rects.push({
      x: scaleX(rectX),
      y: scaleY(Math.max(rectHeight, 0)),
      width: (rectWidth / xRange) * graphWidth,
      height: Math.abs((rectHeight / yRange) * graphHeight),
      isBelow: rectHeight < 0
    });
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
          Area Approximation: {method.charAt(0).toUpperCase() + method.slice(1)} Riemann Sum
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Function: f({variableName}) = {functionExpression} | Interval: [{lowerBound}, {upperBound}] | Rectangles: {rectangles}
        </p>
      </div>

      <svg width={width} height={height} className="mx-auto">
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

        {/* Rectangles */}
        {rects.map((rect, i) => (
          <rect
            key={`rect-${i}`}
            x={rect.x}
            y={rect.y}
            width={rect.width}
            height={rect.height}
            fill="rgb(59, 130, 246)"
            fillOpacity="0.4"
            stroke="rgb(37, 99, 235)"
            strokeWidth="1.5"
            className="transition-opacity hover:opacity-70"
          />
        ))}

        {/* Function curve */}
        <path
          d={pathData}
          fill="none"
          stroke="rgb(220, 38, 38)"
          strokeWidth="2.5"
        />

        {/* Bounds markers */}
        <line
          x1={scaleX(lowerBound)}
          y1={scaleY(0) - 10}
          x2={scaleX(lowerBound)}
          y2={scaleY(0) + 10}
          stroke="rgb(34, 197, 94)"
          strokeWidth="3"
        />
        <line
          x1={scaleX(upperBound)}
          y1={scaleY(0) - 10}
          x2={scaleX(upperBound)}
          y2={scaleY(0) + 10}
          stroke="rgb(34, 197, 94)"
          strokeWidth="3"
        />

        {/* Labels */}
        <text
          x={scaleX(lowerBound)}
          y={scaleY(0) + 30}
          textAnchor="middle"
          className="text-sm font-bold fill-green-600 dark:fill-green-400"
        >
          {/* a = {lowerBound} */}
        </text>
        <text
          x={scaleX(upperBound)}
          y={scaleY(0) + 30}
          textAnchor="middle"
          className="text-sm font-bold fill-green-600 dark:fill-green-400"
        >
          {/* b = {lowerBound} */}
        </text>
      </svg>

      <div className="mt-4 grid md:grid-cols-2 gap-3">
        <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded border border-blue-300 dark:border-blue-600">
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
            Approximate Area ({method}):
          </p>
          <p className="text-xl font-mono text-blue-700 dark:text-blue-300">
            ≈ {approximateArea.toFixed(4)}
          </p>
        </div>

        {showExact && (
          <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded border border-green-300 dark:border-green-600">
            <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Actual Area (numerical):
            </p>
            <p className="text-xl font-mono text-green-700 dark:text-green-300">
              ≈ {exactArea.toFixed(4)}
            </p>
          </div>
        )}
      </div>

      {showExact && (
        <div className="mt-2 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Error: {Math.abs(approximateArea - exactArea).toFixed(4)}
            ({((Math.abs(approximateArea - exactArea) / exactArea) * 100).toFixed(2)}%)
          </p>
        </div>
      )}
    </div>
  );
};

export default AreaApproximationVisualizer;
