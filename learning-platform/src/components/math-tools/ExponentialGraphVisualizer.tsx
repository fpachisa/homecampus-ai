import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface ExponentialGraphVisualizerProps {
  base: number; // base b in f(x) = a × b^x + k
  coefficient?: number; // coefficient a (default: 1)
  verticalShift?: number; // vertical shift k (default: 0)
  showAsymptote?: boolean; // show horizontal asymptote
  showYIntercept?: boolean; // show y-intercept point
  highlightPoints?: Array<{ x: number; label?: string }>; // points to highlight
  xRange?: [number, number];
  yRange?: [number, number];
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  showGrid?: boolean;
  label?: string; // custom function label
  color?: string; // custom curve color
  caption?: string;
}

const ExponentialGraphVisualizer: React.FC<ExponentialGraphVisualizerProps> = ({
  base,
  coefficient = 1,
  verticalShift = 0,
  showAsymptote = true,
  showYIntercept = true,
  highlightPoints = [],
  xRange: xRangeProp,
  yRange: yRangeProp,
  xMin: xMinProp,
  xMax: xMaxProp,
  yMin: yMinProp,
  yMax: yMaxProp,
  showGrid = true,
  label,
  color,
  caption
}) => {
  const { theme } = useTheme();

  // Validate base
  if (base <= 0) {
    console.error('ExponentialGraphVisualizer: base must be positive');
    return (
      <div className="p-4 bg-red-50 border border-red-300 rounded text-red-800">
        Invalid exponential function: base must be positive
      </div>
    );
  }

  // Detect growth vs decay
  const isGrowth = base > 1;
  const isDecay = base > 0 && base < 1;

  // Handle range parameters
  let xRange: [number, number];
  let yRange: [number, number];

  if (xRangeProp) {
    xRange = xRangeProp;
  } else if (xMinProp !== undefined && xMaxProp !== undefined) {
    xRange = [xMinProp, xMaxProp];
  } else {
    // Default range: show enough to see the curve shape
    xRange = [-3, 3];
  }

  // Calculate exponential function value
  const exponentialY = (x: number): number => {
    return coefficient * Math.pow(base, x) + verticalShift;
  };

  if (yRangeProp) {
    yRange = yRangeProp;
  } else if (yMinProp !== undefined && yMaxProp !== undefined) {
    yRange = [yMinProp, yMaxProp];
  } else {
    // Auto-range: calculate based on x-range
    const yValues = [];
    for (let x = xRange[0]; x <= xRange[1]; x += 0.5) {
      yValues.push(exponentialY(x));
    }

    let yMin = Math.min(...yValues, verticalShift, 0); // Include asymptote and x-axis
    let yMax = Math.max(...yValues, verticalShift + coefficient, 0);

    // Add padding
    const ySpan = yMax - yMin;
    const yPadding = Math.max(ySpan * 0.2, 2);
    yMin -= yPadding;
    yMax += yPadding;

    yRange = [yMin, yMax];
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

  // Generate exponential curve path
  const generateExponentialPath = (): string => {
    const points: [number, number][] = [];
    const step = (xRange[1] - xRange[0]) / 200; // Smooth curve

    for (let x = xRange[0]; x <= xRange[1]; x += step) {
      const y = exponentialY(x);

      // Only plot if within reasonable range (prevent overflow)
      if (y >= yRange[0] - 100 && y <= yRange[1] + 100 && isFinite(y)) {
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
      return `${cmd}${p[0]},${p[1]}`;
    });

    return pathSegments.join(' ');
  };

  // Get y-intercept
  const yIntercept = exponentialY(0);

  // Colors
  const gridColor = theme.colors.border || '#e5e7eb';
  const axisColor = theme.colors.textSecondary || '#6b7280';
  const curveColor = color || theme.colors.brand || '#5865F2';
  const asymptoteColor = '#f59e0b';
  const interceptColor = '#10b981';
  const highlightColor = '#ef4444';

  // Generate equation string
  const getEquation = (): string => {
    // If custom label provided, use it as-is (it already contains the complete equation)
    if (label) {
      return label;
    }

    // Otherwise, construct the equation
    const aStr = coefficient === 1 ? '' : coefficient === -1 ? '-' : `${coefficient}`;
    const baseStr = base === Math.E ? 'e' : `${base}`;
    const kStr = verticalShift === 0 ? '' : verticalShift > 0 ? ` + ${verticalShift}` : ` - ${Math.abs(verticalShift)}`;

    // Need multiplication operator between coefficient and base when coefficient != 1
    const mult = (coefficient !== 1 && coefficient !== -1) ? ' \\times ' : '';

    return `f(x) = ${aStr}${mult}${baseStr}^{x}${kStr}`;
  };

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

        {/* Horizontal asymptote */}
        {showAsymptote && (
          <>
            <line
              x1={padding}
              y1={mathToSVG(0, verticalShift)[1]}
              x2={width - padding}
              y2={mathToSVG(0, verticalShift)[1]}
              stroke={asymptoteColor}
              strokeWidth={2}
              strokeDasharray="6 4"
              opacity={0.6}
            />
            <text
              x={width - padding - 5}
              y={mathToSVG(0, verticalShift)[1] - 5}
              className="text-xs font-semibold"
              fill={asymptoteColor}
              textAnchor="end"
            >
              y = {verticalShift}
            </text>
          </>
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

        {/* Exponential curve */}
        <path
          d={generateExponentialPath()}
          fill="none"
          stroke={curveColor}
          strokeWidth={3}
        />

        {/* Y-intercept */}
        {showYIntercept && yIntercept >= yRange[0] && yIntercept <= yRange[1] && (
          <>
            <circle
              cx={mathToSVG(0, yIntercept)[0]}
              cy={mathToSVG(0, yIntercept)[1]}
              r={5}
              fill={interceptColor}
            />
            <text
              x={mathToSVG(0, yIntercept)[0] + 12}
              y={mathToSVG(0, yIntercept)[1] + 5}
              className="text-sm font-semibold"
              fill={interceptColor}
            >
              (0, {yIntercept.toFixed(1)})
            </text>
          </>
        )}

        {/* Highlight points */}
        {highlightPoints.map((point, i) => {
          const y = exponentialY(point.x);
          if (y < yRange[0] || y > yRange[1]) return null;

          return (
            <g key={`highlight-${i}`}>
              <circle
                cx={mathToSVG(point.x, y)[0]}
                cy={mathToSVG(point.x, y)[1]}
                r={5}
                fill={highlightColor}
              />
              {point.label && (
                <text
                  x={mathToSVG(point.x, y)[0] + 12}
                  y={mathToSVG(point.x, y)[1] + 5}
                  className="text-sm font-semibold"
                  fill={highlightColor}
                >
                  {point.label}
                </text>
              )}
            </g>
          );
        })}

        {/* Growth/Decay indicator */}
        <text
          x={padding + 10}
          y={padding + 20}
          className="text-xs font-semibold"
          fill={isGrowth ? '#10b981' : isDecay ? '#ef4444' : axisColor}
        >
          {isGrowth ? 'Exponential Growth' : isDecay ? 'Exponential Decay' : 'Constant'}
        </text>
      </svg>

      {/* Equation display */}
      <div
        className="text-center mt-3 text-base font-semibold"
        style={{ color: theme.colors.textPrimary }}
      >
        <MathText>{`$${getEquation()}$`}</MathText>
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

export default ExponentialGraphVisualizer;
