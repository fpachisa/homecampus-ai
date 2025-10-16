import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface LogarithmGraphVisualizerProps {
  base?: number; // base b in f(x) = a × log_b(x) + k (default: 10)
  coefficient?: number; // coefficient a (default: 1)
  horizontalShift?: number; // horizontal shift h in log(x - h) (default: 0)
  verticalShift?: number; // vertical shift k (default: 0)
  showAsymptote?: boolean; // show vertical asymptote at x = 0 (or x = h)
  showKeyPoints?: boolean; // show (1, 0) and (base, 1) points
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

const LogarithmGraphVisualizer: React.FC<LogarithmGraphVisualizerProps> = ({
  base = 10,
  coefficient = 1,
  horizontalShift = 0,
  verticalShift = 0,
  showAsymptote = true,
  showKeyPoints = true,
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
  if (base <= 0 || base === 1) {
    console.error('LogarithmGraphVisualizer: base must be positive and not equal to 1');
    return (
      <div className="p-4 bg-red-50 border border-red-300 rounded text-red-800">
        Invalid logarithmic function: base must be positive and ≠ 1
      </div>
    );
  }

  // Handle range parameters
  let xRange: [number, number];
  let yRange: [number, number];

  if (xRangeProp) {
    xRange = xRangeProp;
  } else if (xMinProp !== undefined && xMaxProp !== undefined) {
    xRange = [xMinProp, xMaxProp];
  } else {
    // Default range: start just after asymptote
    const minX = horizontalShift + 0.1;
    xRange = [minX, 10];
  }

  // Calculate logarithm function value
  // f(x) = a × log_b(x - h) + k
  const logarithmY = (x: number): number => {
    const xShifted = x - horizontalShift;
    if (xShifted <= 0) return NaN; // Domain restriction

    // Change of base formula: log_b(x) = ln(x) / ln(b)
    return coefficient * (Math.log(xShifted) / Math.log(base)) + verticalShift;
  };

  if (yRangeProp) {
    yRange = yRangeProp;
  } else if (yMinProp !== undefined && yMaxProp !== undefined) {
    yRange = [yMinProp, yMaxProp];
  } else {
    // Auto-range: calculate based on x-range
    const yValues = [];
    for (let x = xRange[0]; x <= xRange[1]; x += (xRange[1] - xRange[0]) / 20) {
      const y = logarithmY(x);
      if (!isNaN(y) && isFinite(y)) {
        yValues.push(y);
      }
    }

    if (yValues.length === 0) {
      yRange = [-5, 5];
    } else {
      let yMin = Math.min(...yValues, 0);
      let yMax = Math.max(...yValues, 0);

      // Add padding
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

  // Generate logarithm curve path
  const generateLogarithmPath = (): string => {
    const points: [number, number][] = [];
    const step = (xRange[1] - xRange[0]) / 200; // Smooth curve

    for (let x = xRange[0]; x <= xRange[1]; x += step) {
      const y = logarithmY(x);

      // Only plot if valid and within range
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
      return `${cmd}${p[0]},${p[1]}`;
    });

    return pathSegments.join(' ');
  };

  // Key points: where log_b(x - h) = 0 and log_b(x - h) = 1
  const keyPoint1X = 1 + horizontalShift; // log_b(1) = 0
  const keyPoint1Y = coefficient * 0 + verticalShift;
  const keyPoint2X = base + horizontalShift; // log_b(base) = 1
  const keyPoint2Y = coefficient * 1 + verticalShift;

  // Colors
  const gridColor = theme.colors.border || '#e5e7eb';
  const axisColor = theme.colors.textSecondary || '#6b7280';
  const curveColor = color || theme.colors.brand || '#5865F2';
  const asymptoteColor = '#f59e0b';
  const keyPointColor = '#10b981';

  // Generate equation string
  const getEquation = (): string => {
    // If custom label provided, use it as-is (it already contains the complete equation)
    if (label) {
      return label;
    }

    // Otherwise, construct the equation
    const aStr = coefficient === 1 ? '' : coefficient === -1 ? '-' : `${coefficient}`;
    const baseStr = base === 10 ? '\\log' : base === Math.E ? '\\ln' : `\\log_{${base}}`;
    const hStr = horizontalShift === 0 ? 'x' : horizontalShift > 0 ? `(x - ${horizontalShift})` : `(x + ${Math.abs(horizontalShift)})`;
    const kStr = verticalShift === 0 ? '' : verticalShift > 0 ? ` + ${verticalShift}` : ` - ${Math.abs(verticalShift)}`;

    // Need multiplication operator between coefficient and log when coefficient != 1
    const mult = (coefficient !== 1 && coefficient !== -1) ? ' \\times ' : '';

    return `f(x) = ${aStr}${mult}${baseStr}(${hStr})${kStr}`;
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
              if (x > xRange[1] || x <= horizontalShift) return null;
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

        {/* Vertical asymptote at x = horizontalShift */}
        {showAsymptote && horizontalShift >= xRange[0] && horizontalShift <= xRange[1] && (
          <>
            <line
              x1={mathToSVG(horizontalShift, yRange[0])[0]}
              y1={mathToSVG(horizontalShift, yRange[0])[1]}
              x2={mathToSVG(horizontalShift, yRange[1])[0]}
              y2={mathToSVG(horizontalShift, yRange[1])[1]}
              stroke={asymptoteColor}
              strokeWidth={2}
              strokeDasharray="6 4"
              opacity={0.6}
            />
            <text
              x={mathToSVG(horizontalShift, yRange[1])[0] + 5}
              y={mathToSVG(horizontalShift, yRange[1])[1] + 15}
              className="text-xs font-semibold"
              fill={asymptoteColor}
            >
              x = {horizontalShift}
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

        {/* Logarithm curve */}
        <path
          d={generateLogarithmPath()}
          fill="none"
          stroke={curveColor}
          strokeWidth={3}
        />

        {/* Key points */}
        {showKeyPoints && (
          <>
            {/* Point where log = 0, i.e., (1 + h, 0 + k) */}
            {keyPoint1X >= xRange[0] && keyPoint1X <= xRange[1] &&
             keyPoint1Y >= yRange[0] && keyPoint1Y <= yRange[1] && (
              <>
                <circle
                  cx={mathToSVG(keyPoint1X, keyPoint1Y)[0]}
                  cy={mathToSVG(keyPoint1X, keyPoint1Y)[1]}
                  r={5}
                  fill={keyPointColor}
                />
                <text
                  x={mathToSVG(keyPoint1X, keyPoint1Y)[0] + 12}
                  y={mathToSVG(keyPoint1X, keyPoint1Y)[1] + 5}
                  className="text-sm font-semibold"
                  fill={keyPointColor}
                >
                  ({keyPoint1X}, {keyPoint1Y.toFixed(1)})
                </text>
              </>
            )}

            {/* Point where log = 1, i.e., (base + h, 1*a + k) */}
            {keyPoint2X >= xRange[0] && keyPoint2X <= xRange[1] &&
             keyPoint2Y >= yRange[0] && keyPoint2Y <= yRange[1] && (
              <>
                <circle
                  cx={mathToSVG(keyPoint2X, keyPoint2Y)[0]}
                  cy={mathToSVG(keyPoint2X, keyPoint2Y)[1]}
                  r={5}
                  fill={keyPointColor}
                />
                <text
                  x={mathToSVG(keyPoint2X, keyPoint2Y)[0] + 12}
                  y={mathToSVG(keyPoint2X, keyPoint2Y)[1] + 5}
                  className="text-sm font-semibold"
                  fill={keyPointColor}
                >
                  ({keyPoint2X}, {keyPoint2Y.toFixed(1)})
                </text>
              </>
            )}
          </>
        )}

        {/* Domain indicator */}
        <text
          x={padding + 10}
          y={padding + 20}
          className="text-xs font-semibold"
          fill={axisColor}
        >
          Domain: x &gt; {horizontalShift}
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

export default LogarithmGraphVisualizer;
