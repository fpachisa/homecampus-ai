import React, { useMemo } from 'react';

type RiemannMethod = 'left' | 'right' | 'midpoint' | 'trapezoid';

interface RiemannSumVisualizerProps {
  functionExpression: string;
  lowerBound: number;
  upperBound: number;
  partitions: number;
  showMethods?: RiemannMethod[];
}

const RiemannSumVisualizer: React.FC<RiemannSumVisualizerProps> = ({
  functionExpression,
  lowerBound,
  upperBound,
  partitions,
  showMethods = ['left', 'right', 'midpoint']
}) => {
  // Safe function evaluator
  const evaluateFunction = (x: number): number => {
    try {
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

  // Calculate areas for each method
  const methodResults = useMemo(() => {
    const width = (upperBound - lowerBound) / partitions;
    const results: Record<RiemannMethod, number> = {
      left: 0,
      right: 0,
      midpoint: 0,
      trapezoid: 0
    };

    // Calculate each method
    for (let i = 0; i < partitions; i++) {
      const x1 = lowerBound + i * width;
      const x2 = lowerBound + (i + 1) * width;
      const xMid = lowerBound + (i + 0.5) * width;

      const y1 = evaluateFunction(x1);
      const y2 = evaluateFunction(x2);
      const yMid = evaluateFunction(xMid);

      results.left += y1 * width;
      results.right += y2 * width;
      results.midpoint += yMid * width;
      results.trapezoid += ((y1 + y2) / 2) * width;
    }

    return results;
  }, [functionExpression, lowerBound, upperBound, partitions]);

  // Calculate exact area for comparison
  const exactArea = useMemo(() => {
    const step = (upperBound - lowerBound) / 1000;
    let area = 0;
    for (let i = 0; i < 1000; i++) {
      const x1 = lowerBound + i * step;
      const x2 = lowerBound + (i + 1) * step;
      const y1 = evaluateFunction(x1);
      const y2 = evaluateFunction(x2);
      area += (y1 + y2) / 2 * step;
    }
    return area;
  }, [functionExpression, lowerBound, upperBound]);

  const methodColors: Record<RiemannMethod, { bg: string; border: string; text: string }> = {
    left: { bg: 'rgb(59, 130, 246)', border: 'rgb(37, 99, 235)', text: 'text-blue-700 dark:text-blue-300' },
    right: { bg: 'rgb(139, 92, 246)', border: 'rgb(109, 40, 217)', text: 'text-purple-700 dark:text-purple-300' },
    midpoint: { bg: 'rgb(34, 197, 94)', border: 'rgb(22, 163, 74)', text: 'text-green-700 dark:text-green-300' },
    trapezoid: { bg: 'rgb(249, 115, 22)', border: 'rgb(234, 88, 12)', text: 'text-orange-700 dark:text-orange-300' }
  };

  const methodLabels: Record<RiemannMethod, string> = {
    left: 'Left Riemann Sum',
    right: 'Right Riemann Sum',
    midpoint: 'Midpoint Riemann Sum',
    trapezoid: 'Trapezoidal Rule'
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
          Riemann Sum Comparison
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          Function: f(x) = {functionExpression} | Interval: [{lowerBound}, {upperBound}] | Partitions: {partitions}
        </p>
      </div>

      <div className="grid gap-4 mb-4">
        {showMethods.map((method) => (
          <RiemannMethodCard
            key={method}
            method={method}
            label={methodLabels[method]}
            area={methodResults[method]}
            exactArea={exactArea}
            color={methodColors[method]}
            functionExpression={functionExpression}
            lowerBound={lowerBound}
            upperBound={upperBound}
            partitions={partitions}
            evaluateFunction={evaluateFunction}
          />
        ))}
      </div>

      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg border border-gray-300 dark:border-gray-600">
        <div className="flex justify-between items-center mb-2">
          <p className="font-semibold text-gray-900 dark:text-gray-100">
            Exact Area (numerical integration):
          </p>
          <p className="text-xl font-mono text-gray-900 dark:text-gray-100">
            ≈ {exactArea.toFixed(6)}
          </p>
        </div>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Calculated using trapezoidal rule with 1000 subdivisions
        </p>
      </div>
    </div>
  );
};

// Individual method card component
interface RiemannMethodCardProps {
  method: RiemannMethod;
  label: string;
  area: number;
  exactArea: number;
  color: { bg: string; border: string; text: string };
  functionExpression: string;
  lowerBound: number;
  upperBound: number;
  partitions: number;
  evaluateFunction: (x: number) => number;
}

const RiemannMethodCard: React.FC<RiemannMethodCardProps> = ({
  method,
  label,
  area,
  exactArea,
  color,
  functionExpression,
  lowerBound,
  upperBound,
  partitions,
  evaluateFunction
}) => {
  const error = Math.abs(area - exactArea);
  const errorPercent = (error / Math.abs(exactArea)) * 100;

  // Generate mini graph
  const width = 400;
  const height = 150;
  const padding = 30;
  const graphWidth = width - 2 * padding;
  const graphHeight = height - 2 * padding;

  const xRange = upperBound - lowerBound;
  const scaleX = (x: number) => padding + ((x - lowerBound) / xRange) * graphWidth;

  // Find y-range
  let maxY = -Infinity;
  let minY = Infinity;
  for (let i = 0; i <= 100; i++) {
    const x = lowerBound + (i / 100) * xRange;
    const y = evaluateFunction(x);
    maxY = Math.max(maxY, y);
    minY = Math.min(minY, y);
  }
  minY = Math.min(minY, 0);
  maxY = Math.max(maxY, 0);
  const yRange = maxY - minY || 1;
  const scaleY = (y: number) => padding + graphHeight - ((y - minY) / yRange) * graphHeight;

  // Generate function curve
  const pathData = Array.from({ length: 101 }, (_, i) => {
    const x = lowerBound + (i / 100) * xRange;
    const y = evaluateFunction(x);
    return `${i === 0 ? 'M' : 'L'} ${scaleX(x)} ${scaleY(y)}`;
  }).join(' ');

  // Generate rectangles based on method
  const rectWidth = (upperBound - lowerBound) / partitions;
  const rects = [];

  for (let i = 0; i < partitions; i++) {
    let x: number;
    const rectX = lowerBound + i * rectWidth;

    if (method === 'left') {
      x = rectX;
    } else if (method === 'right') {
      x = lowerBound + (i + 1) * rectWidth;
    } else if (method === 'midpoint') {
      x = lowerBound + (i + 0.5) * rectWidth;
    } else { // trapezoid
      const x1 = rectX;
      const x2 = lowerBound + (i + 1) * rectWidth;
      const y1 = evaluateFunction(x1);
      const y2 = evaluateFunction(x2);

      rects.push({
        type: 'trapezoid',
        x1: scaleX(x1),
        y1: scaleY(y1),
        x2: scaleX(x2),
        y2: scaleY(y2),
        y0: scaleY(0)
      });
      continue;
    }

    const rectHeight = evaluateFunction(x);
    rects.push({
      type: 'rectangle',
      x: scaleX(rectX),
      y: scaleY(Math.max(rectHeight, 0)),
      width: (rectWidth / xRange) * graphWidth,
      height: Math.abs((rectHeight / yRange) * graphHeight)
    });
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <h4 className={`font-bold mb-2 ${color.text}`}>{label}</h4>

          <svg width={width} height={height} className="mx-auto">
            {/* Axes */}
            <line
              x1={padding}
              y1={scaleY(0)}
              x2={width - padding}
              y2={scaleY(0)}
              stroke="currentColor"
              className="text-gray-400 dark:text-gray-600"
              strokeWidth="1.5"
            />

            {/* Rectangles or trapezoids */}
            {rects.map((rect, i) => {
              if (rect.type === 'trapezoid') {
                const trapPath = `M ${rect.x1} ${rect.y0} L ${rect.x1} ${rect.y1} L ${rect.x2} ${rect.y2} L ${rect.x2} ${rect.y0} Z`;
                return (
                  <path
                    key={`trap-${i}`}
                    d={trapPath}
                    fill={color.bg}
                    fillOpacity="0.4"
                    stroke={color.border}
                    strokeWidth="1"
                  />
                );
              }
              return (
                <rect
                  key={`rect-${i}`}
                  x={rect.x}
                  y={rect.y}
                  width={rect.width}
                  height={rect.height}
                  fill={color.bg}
                  fillOpacity="0.4"
                  stroke={color.border}
                  strokeWidth="1"
                />
              );
            })}

            {/* Function curve */}
            <path
              d={pathData}
              fill="none"
              stroke="rgb(220, 38, 38)"
              strokeWidth="2"
            />

            {/* Bounds */}
            <line
              x1={scaleX(lowerBound)}
              y1={padding}
              x2={scaleX(lowerBound)}
              y2={height - padding}
              stroke="rgb(34, 197, 94)"
              strokeWidth="1.5"
              strokeDasharray="3,3"
            />
            <line
              x1={scaleX(upperBound)}
              y1={padding}
              x2={scaleX(upperBound)}
              y2={height - padding}
              stroke="rgb(34, 197, 94)"
              strokeWidth="1.5"
              strokeDasharray="3,3"
            />
          </svg>
        </div>

        <div className="md:w-64 flex flex-col justify-center space-y-3">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Approximate Area:</p>
            <p className={`text-2xl font-mono ${color.text}`}>
              {area.toFixed(6)}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Error:</p>
            <p className="text-lg font-mono text-gray-900 dark:text-gray-100">
              {error.toFixed(6)}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              ({errorPercent.toFixed(2)}%)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiemannSumVisualizer;
