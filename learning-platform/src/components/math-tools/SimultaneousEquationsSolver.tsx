import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface SimultaneousEquationsSolverProps {
  equation1: {
    a: number; // coefficient of x
    b: number; // coefficient of y
    c: number; // constant (ax + by = c)
  };
  equation2: {
    a: number;
    b: number;
    c: number;
  };
  method?: 'graphical' | 'substitution' | 'elimination';
  showSteps?: boolean;
  highlightIntersection?: boolean;
  caption?: string;
}

const SimultaneousEquationsSolver: React.FC<SimultaneousEquationsSolverProps> = ({
  equation1,
  equation2,
  method = 'graphical',
  showSteps = false,
  highlightIntersection = true,
  caption
}) => {
  const { theme } = useTheme();
  const isDark = document.documentElement.classList.contains('dark');
  const [_currentStep, _setCurrentStep] = useState(0);

  // Convert standard form (ax + by = c) to slope-intercept form (y = mx + c)
  const toSlopeIntercept = (eq: { a: number; b: number; c: number }) => {
    if (eq.b === 0) {
      // Vertical line: x = c/a
      return { type: 'vertical' as const, x: eq.c / eq.a };
    }
    // y = (-a/b)x + (c/b)
    const m = -eq.a / eq.b;
    const yIntercept = eq.c / eq.b;
    return { type: 'linear' as const, m, c: yIntercept };
  };

  const line1 = toSlopeIntercept(equation1);
  const line2 = toSlopeIntercept(equation2);

  // Find intersection point
  const findIntersection = () => {
    const { a: a1, b: b1, c: c1 } = equation1;
    const { a: a2, b: b2, c: c2 } = equation2;

    // Using Cramer's rule
    const determinant = a1 * b2 - a2 * b1;

    if (Math.abs(determinant) < 0.0001) {
      // Lines are parallel or coincident
      if (Math.abs(a1 * c2 - a2 * c1) < 0.0001 && Math.abs(b1 * c2 - b2 * c1) < 0.0001) {
        return { type: 'infinite' as const };
      }
      return { type: 'none' as const };
    }

    const x = (c1 * b2 - c2 * b1) / determinant;
    const y = (a1 * c2 - a2 * c1) / determinant;

    return { type: 'point' as const, x, y };
  };

  const intersection = findIntersection();

  // Format equation for display
  const formatEquation = (eq: { a: number; b: number; c: number }) => {
    const parts: string[] = [];

    if (eq.a !== 0) {
      if (eq.a === 1) parts.push('x');
      else if (eq.a === -1) parts.push('-x');
      else parts.push(`${eq.a}x`);
    }

    if (eq.b !== 0) {
      if (eq.b > 0 && parts.length > 0) parts.push('+');
      if (eq.b === 1) parts.push(parts.length > 0 ? 'y' : 'y');
      else if (eq.b === -1) parts.push('-y');
      else parts.push(`${eq.b}y`);
    }

    return parts.length > 0 ? `${parts.join(' ')} = ${eq.c}` : `0 = ${eq.c}`;
  };

  // SVG dimensions
  const width = 600;
  const height = 500;
  const padding = 60;

  // Determine visible range based on intersection
  let xMin = -10, xMax = 10, yMin = -10, yMax = 10;

  if (intersection.type === 'point') {
    const { x, y } = intersection;
    xMin = Math.floor(x) - 5;
    xMax = Math.ceil(x) + 5;
    yMin = Math.floor(y) - 5;
    yMax = Math.ceil(y) + 5;
  }

  // Ensure origin is included
  xMin = Math.min(xMin, 0);
  xMax = Math.max(xMax, 0);
  yMin = Math.min(yMin, 0);
  yMax = Math.max(yMax, 0);

  // Scaling
  const xScale = (width - 2 * padding) / (xMax - xMin);
  const yScale = (height - 2 * padding) / (yMax - yMin);

  // Convert math coordinates to SVG coordinates
  const mathToSVG = (x: number, y: number): [number, number] => {
    const svgX = padding + (x - xMin) * xScale;
    const svgY = height - padding - (y - yMin) * yScale;
    return [svgX, svgY];
  };

  const [originX, originY] = mathToSVG(0, 0);

  // Generate line path
  const generateLinePath = (line: ReturnType<typeof toSlopeIntercept>) => {
    if (line.type === 'vertical') {
      const [x1, y1] = mathToSVG(line.x, yMin);
      const [x2, y2] = mathToSVG(line.x, yMax);
      return `M ${x1} ${y1} L ${x2} ${y2}`;
    }

    const { m, c: yIntercept } = line;
    const y1 = m * xMin + yIntercept;
    const y2 = m * xMax + yIntercept;
    const [x1, svgY1] = mathToSVG(xMin, y1);
    const [x2, svgY2] = mathToSVG(xMax, y2);
    return `M ${x1} ${svgY1} L ${x2} ${svgY2}`;
  };

  // Colors
  const axisColor = theme.colors.textSecondary || '#666666';
  const gridColor = theme.colors.border || '#e5e7eb';
  const line1Color = '#3b82f6'; // Blue
  const line2Color = '#10b981'; // Green
  const intersectionColor = '#ef4444'; // Red

  // Grid lines
  const gridLines: React.ReactElement[] = [];
  for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x++) {
    const [svgX] = mathToSVG(x, 0);
    if (x !== 0) {
      gridLines.push(
        <line
          key={`grid-v-${x}`}
          x1={svgX}
          y1={padding}
          x2={svgX}
          y2={height - padding}
          stroke={gridColor}
          strokeWidth="1"
          strokeDasharray="2,2"
        />
      );
    }
  }

  for (let y = Math.ceil(yMin); y <= Math.floor(yMax); y++) {
    const [, svgY] = mathToSVG(0, y);
    if (y !== 0) {
      gridLines.push(
        <line
          key={`grid-h-${y}`}
          x1={padding}
          y1={svgY}
          x2={width - padding}
          y2={svgY}
          stroke={gridColor}
          strokeWidth="1"
          strokeDasharray="2,2"
        />
      );
    }
  }

  // Algebraic solution steps
  const getSubstitutionSteps = () => {
    const { a: a1, b: b1, c: c1 } = equation1;
    const { a: a2, b: b2, c: c2 } = equation2;

    const steps = [
      `Given equations:`,
      `Equation 1: ${formatEquation(equation1)}`,
      `Equation 2: ${formatEquation(equation2)}`,
      ``,
      `Step 1: Express y from Equation 1`,
    ];

    if (b1 !== 0) {
      const yCoeff = -a1 / b1;
      const yConst = c1 / b1;
      steps.push(`y = ${yCoeff.toFixed(2)}x + ${yConst.toFixed(2)}`);
      steps.push(``);
      steps.push(`Step 2: Substitute into Equation 2`);
      steps.push(`${a2}x + ${b2}(${yCoeff.toFixed(2)}x + ${yConst.toFixed(2)}) = ${c2}`);

      if (intersection.type === 'point') {
        steps.push(``);
        steps.push(`Step 3: Solve for x`);
        steps.push(`x = ${intersection.x.toFixed(2)}`);
        steps.push(``);
        steps.push(`Step 4: Substitute back to find y`);
        steps.push(`y = ${intersection.y.toFixed(2)}`);
        steps.push(``);
        steps.push(`Solution: (${intersection.x.toFixed(2)}, ${intersection.y.toFixed(2)})`);
      }
    }

    return steps;
  };

  const getEliminationSteps = () => {
    const { a: a1 } = equation1;
    const { a: a2 } = equation2;

    const steps = [
      `Given equations:`,
      `Equation 1: ${formatEquation(equation1)}`,
      `Equation 2: ${formatEquation(equation2)}`,
      ``,
      `Step 1: Make coefficients of x equal`,
    ];

    // Find LCM to eliminate x
    const lcm = Math.abs(a1 * a2) / gcd(Math.abs(a1), Math.abs(a2));
    const mult1 = lcm / Math.abs(a1);
    const mult2 = lcm / Math.abs(a2);

    steps.push(`Multiply Equation 1 by ${mult1}`);
    steps.push(`Multiply Equation 2 by ${mult2}`);
    steps.push(``);
    steps.push(`Step 2: Subtract equations to eliminate x`);

    if (intersection.type === 'point') {
      steps.push(``);
      steps.push(`Step 3: Solve for y`);
      steps.push(`y = ${intersection.y.toFixed(2)}`);
      steps.push(``);
      steps.push(`Step 4: Substitute back to find x`);
      steps.push(`x = ${intersection.x.toFixed(2)}`);
      steps.push(``);
      steps.push(`Solution: (${intersection.x.toFixed(2)}, ${intersection.y.toFixed(2)})`);
    }

    return steps;
  };

  // Helper function to find GCD
  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const steps = method === 'substitution' ? getSubstitutionSteps() :
                method === 'elimination' ? getEliminationSteps() : [];

  return (
    <div className="my-6 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
      {/* Graph */}
      <svg width={width} height={height} className="mx-auto">
        <defs>
          <marker
            id="arrowhead-simul"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill={axisColor} />
          </marker>
        </defs>

        {/* Grid lines */}
        {gridLines}

        {/* Axes */}
        <line
          x1={padding}
          y1={originY}
          x2={width - padding}
          y2={originY}
          stroke={axisColor}
          strokeWidth="2"
          markerEnd="url(#arrowhead-simul)"
        />
        <line
          x1={originX}
          y1={height - padding}
          x2={originX}
          y2={padding}
          stroke={axisColor}
          strokeWidth="2"
          markerEnd="url(#arrowhead-simul)"
        />

        {/* Axis labels */}
        <text
          x={width - padding + 15}
          y={originY + 5}
          className="text-sm font-medium fill-gray-700 dark:fill-gray-300"
        >
          x
        </text>
        <text
          x={originX - 10}
          y={padding - 10}
          className="text-sm font-medium fill-gray-700 dark:fill-gray-300"
        >
          y
        </text>

        {/* Axis tick marks */}
        {Array.from({ length: Math.floor(xMax) - Math.ceil(xMin) + 1 }, (_, i) => {
          const x = Math.ceil(xMin) + i;
          if (x === 0) return null;
          const [svgX] = mathToSVG(x, 0);
          return (
            <g key={`x-tick-${x}`}>
              <line
                x1={svgX}
                y1={originY - 5}
                x2={svgX}
                y2={originY + 5}
                stroke={axisColor}
                strokeWidth="2"
              />
              <text
                x={svgX}
                y={originY + 20}
                textAnchor="middle"
                className="text-xs fill-gray-600 dark:fill-gray-400"
              >
                {x}
              </text>
            </g>
          );
        })}

        {Array.from({ length: Math.floor(yMax) - Math.ceil(yMin) + 1 }, (_, i) => {
          const y = Math.ceil(yMin) + i;
          if (y === 0) return null;
          const [, svgY] = mathToSVG(0, y);
          return (
            <g key={`y-tick-${y}`}>
              <line
                x1={originX - 5}
                y1={svgY}
                x2={originX + 5}
                y2={svgY}
                stroke={axisColor}
                strokeWidth="2"
              />
              <text
                x={originX - 15}
                y={svgY + 5}
                textAnchor="end"
                className="text-xs fill-gray-600 dark:fill-gray-400"
              >
                {y}
              </text>
            </g>
          );
        })}

        {/* Line 1 */}
        <path
          d={generateLinePath(line1)}
          stroke={line1Color}
          strokeWidth="2.5"
          fill="none"
          opacity="0.8"
        />

        {/* Line 2 */}
        <path
          d={generateLinePath(line2)}
          stroke={line2Color}
          strokeWidth="2.5"
          fill="none"
          opacity="0.8"
        />

        {/* Intersection point */}
        {highlightIntersection && intersection.type === 'point' && (
          <>
            <circle
              cx={mathToSVG(intersection.x, intersection.y)[0]}
              cy={mathToSVG(intersection.x, intersection.y)[1]}
              r="8"
              fill={intersectionColor}
              stroke="white"
              strokeWidth="2.5"
            />
            <foreignObject
              x={mathToSVG(intersection.x, intersection.y)[0] + 15}
              y={mathToSVG(intersection.x, intersection.y)[1] - 25}
              width={150}
              height={50}
            >
              <div className="flex items-center justify-center h-full">
                <div
                  className="text-sm font-bold px-3 py-1 rounded shadow-md"
                  style={{
                    backgroundColor: isDark ? '#1f2937' : '#ffffff',
                    border: `2px solid ${intersectionColor}`
                  }}
                >
                  <MathText>
                    {`(${intersection.x.toFixed(2)}, ${intersection.y.toFixed(2)})`}
                  </MathText>
                </div>
              </div>
            </foreignObject>
          </>
        )}

        {/* Line labels */}
        <foreignObject x={width - 150} y={20} width={130} height={60}>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5" style={{ backgroundColor: line1Color }}></div>
              <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                <MathText>{formatEquation(equation1)}</MathText>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5" style={{ backgroundColor: line2Color }}></div>
              <div className="text-xs font-semibold text-gray-700 dark:text-gray-300">
                <MathText>{formatEquation(equation2)}</MathText>
              </div>
            </div>
          </div>
        </foreignObject>
      </svg>

      {/* Solution information */}
      <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 rounded">
        <h3 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">
          Solution
        </h3>
        <div className="text-gray-700 dark:text-gray-300">
          {intersection.type === 'point' && (
            <div>
              <p className="font-semibold">The lines intersect at one point:</p>
              <p className="text-lg font-mono mt-2">
                <MathText>
                  {`x = ${intersection.x.toFixed(2)}, y = ${intersection.y.toFixed(2)}`}
                </MathText>
              </p>
            </div>
          )}
          {intersection.type === 'none' && (
            <div>
              <p className="font-semibold text-red-600 dark:text-red-400">
                No solution - the lines are parallel
              </p>
              <p className="text-sm mt-2">
                The lines never intersect because they have the same gradient but different y-intercepts.
              </p>
            </div>
          )}
          {intersection.type === 'infinite' && (
            <div>
              <p className="font-semibold text-green-600 dark:text-green-400">
                Infinitely many solutions - the lines are identical
              </p>
              <p className="text-sm mt-2">
                Both equations represent the same line, so every point on the line is a solution.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Step-by-step solution */}
      {showSteps && method !== 'graphical' && steps.length > 0 && (
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-3">
            {method === 'substitution' ? 'Substitution Method' : 'Elimination Method'}
          </h3>
          <div className="space-y-2 text-gray-700 dark:text-gray-300 font-mono text-sm">
            {steps.map((step, index) => (
              <div key={index} className={step === '' ? 'h-2' : ''}>
                <MathText>{step}</MathText>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Caption */}
      {caption && (
        <div className="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default SimultaneousEquationsSolver;
