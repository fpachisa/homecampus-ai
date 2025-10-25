import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

type FunctionType = 'exponential' | 'logarithm' | 'linear';

interface FunctionConfig {
  type: FunctionType;
  // For exponential: f(x) = a × b^x + k
  base?: number; // b (for exponential or logarithm)
  coefficient?: number; // a
  verticalShift?: number; // k
  horizontalShift?: number; // h (for logarithm)
  // For linear: f(x) = mx + c
  slope?: number; // m
  intercept?: number; // c
}

interface GraphCompareVisualizerProps {
  function1Type: FunctionType;
  function1Params: FunctionConfig;
  function1Label?: string;
  function1Color?: string;
  function2Type: FunctionType;
  function2Params: FunctionConfig;
  function2Label?: string;
  function2Color?: string;
  showIntersection?: boolean;
  showLegend?: boolean;
  xRange?: [number, number];
  yRange?: [number, number];
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  showGrid?: boolean;
  caption?: string;
}

const GraphCompareVisualizer: React.FC<GraphCompareVisualizerProps> = ({
  function1Type,
  function1Params,
  function1Label = 'f(x)',
  function1Color,
  function2Type,
  function2Params,
  function2Label = 'g(x)',
  function2Color,
  showIntersection = false,
  showLegend = true,
  xRange: xRangeProp,
  yRange: yRangeProp,
  xMin: xMinProp,
  xMax: xMaxProp,
  yMin: yMinProp,
  yMax: yMaxProp,
  showGrid = true,
  caption
}) => {
  const { theme } = useTheme();

  // Calculate function value based on type
  const calculateY = (x: number, type: FunctionType, params: FunctionConfig): number => {
    switch (type) {
      case 'exponential': {
        const { base = 2, coefficient = 1, verticalShift = 0 } = params;
        return coefficient * Math.pow(base, x) + verticalShift;
      }
      case 'logarithm': {
        const { base = 10, coefficient = 1, horizontalShift = 0, verticalShift = 0 } = params;
        const xShifted = x - horizontalShift;
        if (xShifted <= 0) return NaN;
        return coefficient * (Math.log(xShifted) / Math.log(base)) + verticalShift;
      }
      case 'linear': {
        const { slope = 1, intercept = 0 } = params;
        return slope * x + intercept;
      }
      default:
        return NaN;
    }
  };

  // Handle range parameters
  let xRange: [number, number];
  let yRange: [number, number];

  if (xRangeProp) {
    xRange = xRangeProp;
  } else if (xMinProp !== undefined && xMaxProp !== undefined) {
    xRange = [xMinProp, xMaxProp];
  } else {
    // Default range
    const needsPositiveX = function1Type === 'logarithm' || function2Type === 'logarithm';
    xRange = needsPositiveX ? [0.1, 10] : [-5, 5];
  }

  if (yRangeProp) {
    yRange = yRangeProp;
  } else if (yMinProp !== undefined && yMaxProp !== undefined) {
    yRange = [yMinProp, yMaxProp];
  } else {
    // Auto-range: calculate based on both functions
    const yValues: number[] = [];

    for (let x = xRange[0]; x <= xRange[1]; x += (xRange[1] - xRange[0]) / 50) {
      const y1 = calculateY(x, function1Type, function1Params);
      const y2 = calculateY(x, function2Type, function2Params);

      if (!isNaN(y1) && isFinite(y1)) yValues.push(y1);
      if (!isNaN(y2) && isFinite(y2)) yValues.push(y2);
    }

    if (yValues.length === 0) {
      yRange = [-10, 10];
    } else {
      let yMin = Math.min(...yValues, 0);
      let yMax = Math.max(...yValues, 0);

      const ySpan = yMax - yMin || 10;
      const yPadding = Math.max(ySpan * 0.2, 2);
      yMin -= yPadding;
      yMax += yPadding;

      yRange = [yMin, yMax];
    }
  }

  // SVG dimensions
  const width = 500;
  const height = 400;
  const padding = 50;

  // Calculate scaling factors
  const xScale = (width - 2 * padding) / (xRange[1] - xRange[0]);
  const yScale = (height - 2 * padding) / (yRange[1] - yRange[0]);

  // Convert mathematical coordinates to SVG coordinates
  const mathToSVG = (x: number, y: number): [number, number] => {
    const svgX = padding + (x - xRange[0]) * xScale;
    const svgY = height - padding - (y - yRange[0]) * yScale;
    return [svgX, svgY];
  };

  // Generate curve path for a function
  const generatePath = (type: FunctionType, params: FunctionConfig): string => {
    const points: [number, number][] = [];
    const step = (xRange[1] - xRange[0]) / 200;

    for (let x = xRange[0]; x <= xRange[1]; x += step) {
      const y = calculateY(x, type, params);

      if (!isNaN(y) && isFinite(y) && y >= yRange[0] - 100 && y <= yRange[1] + 100) {
        const clampedY = Math.max(yRange[0], Math.min(yRange[1], y));
        const svgPoint = mathToSVG(x, clampedY);

        // Ensure valid numbers
        if (isFinite(svgPoint[0]) && isFinite(svgPoint[1])) {
          points.push(svgPoint);
        }
      }
    }

    if (points.length === 0) return '';

    // Build path string with proper formatting
    const pathSegments = points.map((p, i) => {
      const cmd = i === 0 ? 'M' : 'L';
      return `${cmd}${p[0]},${p[1]}`; // Fixed: no space, comma separator
    });

    return pathSegments.join(' ');
  };

  // Simple intersection approximation (for display purposes)
  const findIntersection = (): { x: number; y: number } | null => {
    if (!showIntersection) return null;

    const step = (xRange[1] - xRange[0]) / 100;
    let bestX = xRange[0];
    let bestDiff = Infinity;

    for (let x = xRange[0]; x <= xRange[1]; x += step) {
      const y1 = calculateY(x, function1Type, function1Params);
      const y2 = calculateY(x, function2Type, function2Params);

      if (!isNaN(y1) && !isNaN(y2) && isFinite(y1) && isFinite(y2)) {
        const diff = Math.abs(y1 - y2);

        // Look for sign change or minimum difference
        if (diff < bestDiff) {
          bestDiff = diff;
          bestX = x;
        }
      }
    }

    // Only return if intersection is close enough
    if (bestDiff < 0.5) {
      const y = calculateY(bestX, function1Type, function1Params);
      return { x: bestX, y };
    }

    return null;
  };

  const intersection = findIntersection();

  // Colors
  const gridColor = theme.colors.border || '#e5e7eb';
  const axisColor = theme.colors.textSecondary || '#6b7280';
  const color1 = function1Color || theme.colors.brand || '#5865F2';
  const color2 = function2Color || '#ef4444';
  const intersectionColor = '#10b981';

  // Generate equation strings
  const getEquation = (type: FunctionType, params: FunctionConfig, label: string): string => {
    switch (type) {
      case 'exponential': {
        const { base = 2, coefficient = 1, verticalShift = 0 } = params;
        const aStr = coefficient === 1 ? '' : coefficient === -1 ? '-' : `${coefficient}`;
        const baseStr = base === Math.E ? 'e' : `${base}`;
        const kStr = verticalShift === 0 ? '' : verticalShift > 0 ? ` + ${verticalShift}` : ` - ${Math.abs(verticalShift)}`;
        // Need multiplication operator between coefficient and base when coefficient != 1
        const mult = (coefficient !== 1 && coefficient !== -1) ? ' \\times ' : '';
        return `${label} = ${aStr}${mult}${baseStr}^{x}${kStr}`;
      }
      case 'logarithm': {
        const { base = 10, coefficient = 1, horizontalShift = 0, verticalShift = 0 } = params;
        const aStr = coefficient === 1 ? '' : coefficient === -1 ? '-' : `${coefficient}`;
        const baseStr = base === 10 ? '\\log' : base === Math.E ? '\\ln' : `\\log_{${base}}`;
        const hStr = horizontalShift === 0 ? 'x' : `(x - ${horizontalShift})`;
        const kStr = verticalShift === 0 ? '' : verticalShift > 0 ? ` + ${verticalShift}` : ` - ${Math.abs(verticalShift)}`;
        // Need multiplication operator between coefficient and log when coefficient != 1
        const mult = (coefficient !== 1 && coefficient !== -1) ? ' \\times ' : '';
        return `${label} = ${aStr}${mult}${baseStr}(${hStr})${kStr}`;
      }
      case 'linear': {
        const { slope = 1, intercept = 0 } = params;
        const mStr = slope === 1 ? 'x' : slope === -1 ? '-x' : `${slope}x`;
        const cStr = intercept === 0 ? '' : intercept > 0 ? ` + ${intercept}` : ` - ${Math.abs(intercept)}`;
        return `${label} = ${mStr}${cStr}`;
      }
      default:
        return label;
    }
  };

  const equation1 = getEquation(function1Type, function1Params, function1Label);
  const equation2 = getEquation(function2Type, function2Params, function2Label);

  return (
    <div className="my-4">
      <svg width={width} height={height} className="mx-auto border" style={{ borderColor: gridColor }}>
        {/* Grid */}
        {showGrid && (
          <g opacity="0.2">
            {/* Vertical grid lines */}
            {Array.from({ length: Math.ceil(xRange[1] - xRange[0]) + 1 }, (_, i) => {
              const x = Math.ceil(xRange[0]) + i;
              if (x > xRange[1]) return null;
              const [svgX] = mathToSVG(x, 0);
              return (
                <line
                  key={`vgrid-${i}`}
                  x1={svgX}
                  y1={padding}
                  x2={svgX}
                  y2={height - padding}
                  stroke={gridColor}
                  strokeWidth={1}
                />
              );
            })}
            {/* Horizontal grid lines */}
            {Array.from({ length: Math.ceil(yRange[1] - yRange[0]) + 1 }, (_, i) => {
              const y = Math.ceil(yRange[0]) + i;
              if (y > yRange[1]) return null;
              const [, svgY] = mathToSVG(0, y);
              return (
                <line
                  key={`hgrid-${i}`}
                  x1={padding}
                  y1={svgY}
                  x2={width - padding}
                  y2={svgY}
                  stroke={gridColor}
                  strokeWidth={1}
                />
              );
            })}
          </g>
        )}

        {/* Axes */}
        {/* X-axis */}
        {yRange[0] <= 0 && yRange[1] >= 0 && (
          <>
            <line
              x1={padding}
              y1={mathToSVG(0, 0)[1]}
              x2={width - padding}
              y2={mathToSVG(0, 0)[1]}
              stroke={axisColor}
              strokeWidth={2}
            />
            <text
              x={width - padding + 5}
              y={mathToSVG(0, 0)[1] + 5}
              className="text-sm font-semibold"
              fill={axisColor}
            >
              x
            </text>
          </>
        )}

        {/* Y-axis */}
        {xRange[0] <= 0 && xRange[1] >= 0 && (
          <>
            <line
              x1={mathToSVG(0, 0)[0]}
              y1={padding}
              x2={mathToSVG(0, 0)[0]}
              y2={height - padding}
              stroke={axisColor}
              strokeWidth={2}
            />
            <text
              x={mathToSVG(0, 0)[0] + 5}
              y={padding - 5}
              className="text-sm font-semibold"
              fill={axisColor}
            >
              y
            </text>
          </>
        )}

        {/* Function 1 */}
        <path
          d={generatePath(function1Type, function1Params)}
          fill="none"
          stroke={color1}
          strokeWidth={3}
        />

        {/* Function 2 */}
        <path
          d={generatePath(function2Type, function2Params)}
          fill="none"
          stroke={color2}
          strokeWidth={3}
        />

        {/* Intersection point */}
        {intersection && intersection.x >= xRange[0] && intersection.x <= xRange[1] &&
         intersection.y >= yRange[0] && intersection.y <= yRange[1] && (
          <>
            <circle
              cx={mathToSVG(intersection.x, intersection.y)[0]}
              cy={mathToSVG(intersection.x, intersection.y)[1]}
              r={6}
              fill={intersectionColor}
              stroke="white"
              strokeWidth={2}
            />
            <text
              x={mathToSVG(intersection.x, intersection.y)[0] + 12}
              y={mathToSVG(intersection.x, intersection.y)[1] - 10}
              className="text-sm font-semibold"
              fill={intersectionColor}
            >
              ({intersection.x.toFixed(2)}, {intersection.y.toFixed(2)})
            </text>
          </>
        )}

        {/* Legend */}
        {showLegend && (
          <g>
            {/* Function 1 legend */}
            <line
              x1={padding + 10}
              y1={padding + 20}
              x2={padding + 40}
              y2={padding + 20}
              stroke={color1}
              strokeWidth={3}
            />
            <text
              x={padding + 45}
              y={padding + 25}
              className="text-sm font-semibold"
              fill={color1}
            >
              {function1Label}
            </text>

            {/* Function 2 legend */}
            <line
              x1={padding + 10}
              y1={padding + 40}
              x2={padding + 40}
              y2={padding + 40}
              stroke={color2}
              strokeWidth={3}
            />
            <text
              x={padding + 45}
              y={padding + 45}
              className="text-sm font-semibold"
              fill={color2}
            >
              {function2Label}
            </text>
          </g>
        )}
      </svg>

      {/* Equations display */}
      <div
        className="text-center mt-3 text-base font-semibold space-y-1"
        style={{ color: theme.colors.textPrimary }}
      >
        <div style={{ color: color1 }}>
          <MathText>{`$${equation1}$`}</MathText>
        </div>
        <div style={{ color: color2 }}>
          <MathText>{`$${equation2}$`}</MathText>
        </div>
      </div>

      {/* Caption */}
      {caption && (
        <div
          className="text-sm text-center mt-2 px-4"
          style={{ color: theme.colors.textSecondary }}
        >
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default GraphCompareVisualizer;
