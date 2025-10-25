import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface ParabolaGraphVisualizerProps {
  a: number; // coefficient of x²
  // For vertex form: y = a(x - h)² + k
  h?: number; // x-coordinate of vertex
  k?: number; // y-coordinate of vertex
  // For standard form: y = ax² + bx + c
  b?: number; // coefficient of x
  c?: number; // constant term
  form?: 'vertex' | 'factored' | 'standard';
  showVertex?: boolean;
  showAxisOfSymmetry?: boolean;
  showIntercepts?: boolean;
  showRoots?: boolean; // Alias for showIntercepts
  showGrid?: boolean;
  highlightVertex?: boolean; // Alias for showVertex
  // Range parameters - supports both formats
  xRange?: [number, number];
  yRange?: [number, number];
  xMin?: number;
  xMax?: number;
  yMin?: number;
  yMax?: number;
  caption?: string;
}

const ParabolaGraphVisualizer: React.FC<ParabolaGraphVisualizerProps> = ({
  a,
  h: hProp,
  k: kProp,
  b: bProp,
  c: cProp,
  form = 'vertex',
  showVertex: showVertexProp = true,
  showAxisOfSymmetry = true,
  showIntercepts: showInterceptsProp = false,
  showRoots = false,
  highlightVertex = false,
  showGrid = true,
  xRange: xRangeProp,
  yRange: yRangeProp,
  xMin: xMinProp,
  xMax: xMaxProp,
  yMin: yMinProp,
  yMax: yMaxProp,
  caption
}) => {
  const { theme } = useTheme();

  // Handle aliases
  const showVertex = showVertexProp || highlightVertex;
  const showIntercepts = showInterceptsProp || showRoots;

  // Convert from standard form to vertex form if needed
  let h: number, k: number;

  if (bProp !== undefined && cProp !== undefined) {
    // Standard form: y = ax² + bx + c
    // Convert to vertex form: h = -b/(2a), k = c - b²/(4a)
    h = -bProp / (2 * a);
    k = cProp - (bProp * bProp) / (4 * a);
  } else if (hProp !== undefined && kProp !== undefined) {
    // Vertex form already provided
    h = hProp;
    k = kProp;
  } else {
    // Default to origin if neither form is complete
    console.error('ParabolaGraphVisualizer: Must provide either (h, k) or (b, c) parameters');
    h = 0;
    k = 0;
  }

  // Handle range parameters - support both xRange and xMin/xMax formats
  let xRange: [number, number];
  let yRange: [number, number];

  if (xRangeProp) {
    xRange = xRangeProp;
  } else if (xMinProp !== undefined && xMaxProp !== undefined) {
    xRange = [xMinProp, xMaxProp];
  } else {
    xRange = [-10, 10];
  }

  if (yRangeProp) {
    yRange = yRangeProp;
  } else if (yMinProp !== undefined && yMaxProp !== undefined) {
    yRange = [yMinProp, yMaxProp];
  } else {
    // Auto-range: ensure vertex is visible with some padding
    const vertexY = k;

    // Calculate y-values at the edges of x-range
    const yAtXMin = a * Math.pow(xRange[0] - h, 2) + k;
    const yAtXMax = a * Math.pow(xRange[1] - h, 2) + k;

    // Find min and max y values
    let yMin = Math.min(vertexY, yAtXMin, yAtXMax, 0); // Include 0 for x-axis
    let yMax = Math.max(vertexY, yAtXMin, yAtXMax, 0);

    // Add padding
    const ySpan = yMax - yMin;
    const yPadding = Math.max(ySpan * 0.2, 5); // 20% padding or minimum 5
    yMin -= yPadding;
    yMax += yPadding;

    yRange = [yMin, yMax];
  }

  // SVG dimensions
  const width = 500;
  const height = 400;
  const padding = 40;

  // Calculate scaling factors
  const xScale = (width - 2 * padding) / (xRange[1] - xRange[0]);
  const yScale = (height - 2 * padding) / (yRange[1] - yRange[0]);

  // Convert mathematical coordinates to SVG coordinates
  const mathToSVG = (x: number, y: number): [number, number] => {
    const svgX = padding + (x - xRange[0]) * xScale;
    const svgY = height - padding - (y - yRange[0]) * yScale;
    return [svgX, svgY];
  };

  // Calculate y-value for parabola: f(x) = a(x - h)² + k
  const parabolaY = (x: number): number => {
    return a * Math.pow(x - h, 2) + k;
  };

  // Generate parabola path
  const generateParabolaPath = (): string => {
    const points: [number, number][] = [];
    const step = (xRange[1] - xRange[0]) / 200; // More points for smoother curve

    for (let x = xRange[0]; x <= xRange[1]; x += step) {
      const y = parabolaY(x);
      // Clamp y-values to visible range for continuous path
      const clampedY = Math.max(yRange[0], Math.min(yRange[1], y));
      points.push(mathToSVG(x, clampedY));
    }

    if (points.length === 0) return '';

    return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
  };

  // Calculate x-intercepts (roots)
  // For vertex form y = a(x - h)² + k, solve a(x - h)² + k = 0
  // => (x - h)² = -k/a
  // => x = h ± √(-k/a)
  const getXIntercepts = (): number[] => {
    const kOverA = k / a;

    // For real roots, -k/a must be non-negative (k and a have opposite signs)
    if (kOverA > 0) return []; // No real roots
    if (kOverA === 0) return [h]; // One root at vertex

    // Two real roots
    const sqrtTerm = Math.sqrt(-kOverA);
    return [h - sqrtTerm, h + sqrtTerm];
  };

  // Get y-intercept
  const yIntercept = parabolaY(0);

  // Colors
  const gridColor = theme.colors.border || '#e5e7eb';
  const axisColor = theme.colors.textSecondary || '#6b7280';
  const parabolaColor = theme.colors.brand || '#5865F2';
  const vertexColor = '#ef4444';
  const interceptColor = '#10b981';

  // Generate equation string
  const getEquation = (): string => {
    if (form === 'vertex') {
      const aStr = a === 1 ? '' : a === -1 ? '-' : `${a}`;
      const hStr = h === 0 ? 'x' : h > 0 ? `(x - ${h})` : `(x + ${Math.abs(h)})`;
      const kStr = k === 0 ? '' : k > 0 ? ` + ${k}` : ` - ${Math.abs(k)}`;
      return `f(x) = ${aStr}${hStr}^2${kStr}`;
    }
    // Standard form: f(x) = ax² + bx + c
    const b = -2 * a * h;
    const c = a * h * h + k;
    const bStr = b === 0 ? '' : b > 0 ? ` + ${b}x` : ` - ${Math.abs(b)}x`;
    const cStr = c === 0 ? '' : c > 0 ? ` + ${c}` : ` - ${Math.abs(c)}`;
    return `f(x) = ${a}x^2${bStr}${cStr}`;
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

        {/* Axes */}
        {/* X-axis */}
        {yRange[0] <= 0 && yRange[1] >= 0 && (
          <line
            x1={padding}
            y1={mathToSVG(0, 0)[1]}
            x2={width - padding}
            y2={mathToSVG(0, 0)[1]}
            stroke={axisColor}
            strokeWidth={2}
          />
        )}
        {/* Y-axis */}
        {xRange[0] <= 0 && xRange[1] >= 0 && (
          <line
            x1={mathToSVG(0, 0)[0]}
            y1={padding}
            x2={mathToSVG(0, 0)[0]}
            y2={height - padding}
            stroke={axisColor}
            strokeWidth={2}
          />
        )}

        {/* Axis of symmetry */}
        {showAxisOfSymmetry && (
          <>
            <line
              x1={mathToSVG(h, yRange[0])[0]}
              y1={mathToSVG(h, yRange[0])[1]}
              x2={mathToSVG(h, yRange[1])[0]}
              y2={mathToSVG(h, yRange[1])[1]}
              stroke={parabolaColor}
              strokeWidth={1}
              strokeDasharray="4 4"
              opacity={0.4}
            />
            <text
              x={mathToSVG(h, yRange[1])[0]}
              y={mathToSVG(h, yRange[1])[1] - 5}
              className="text-xs"
              fill={parabolaColor}
              textAnchor="middle"
            >
              x = {h}
            </text>
          </>
        )}

        {/* Parabola */}
        <path
          d={generateParabolaPath()}
          fill="none"
          stroke={parabolaColor}
          strokeWidth={3}
        />

        {/* Vertex */}
        {showVertex && (
          <>
            <circle
              cx={mathToSVG(h, k)[0]}
              cy={mathToSVG(h, k)[1]}
              r={5}
              fill={vertexColor}
            />
            <text
              x={mathToSVG(h, k)[0] + 10}
              y={mathToSVG(h, k)[1] - 10}
              className="text-sm font-semibold"
              fill={vertexColor}
            >
              ({h}, {k})
            </text>
          </>
        )}

        {/* Intercepts */}
        {showIntercepts && (
          <>
            {/* X-intercepts */}
            {getXIntercepts().map((xInt, i) => (
              <g key={`x-intercept-${i}`}>
                <circle
                  cx={mathToSVG(xInt, 0)[0]}
                  cy={mathToSVG(xInt, 0)[1]}
                  r={4}
                  fill={interceptColor}
                />
                <text
                  x={mathToSVG(xInt, 0)[0]}
                  y={mathToSVG(xInt, 0)[1] + 20}
                  className="text-xs"
                  fill={interceptColor}
                  textAnchor="middle"
                >
                  ({xInt.toFixed(1)}, 0)
                </text>
              </g>
            ))}
            {/* Y-intercept */}
            {yIntercept >= yRange[0] && yIntercept <= yRange[1] && (
              <g>
                <circle
                  cx={mathToSVG(0, yIntercept)[0]}
                  cy={mathToSVG(0, yIntercept)[1]}
                  r={4}
                  fill={interceptColor}
                />
                <text
                  x={mathToSVG(0, yIntercept)[0] + 15}
                  y={mathToSVG(0, yIntercept)[1]}
                  className="text-xs"
                  fill={interceptColor}
                >
                  (0, {yIntercept.toFixed(1)})
                </text>
              </g>
            )}
          </>
        )}
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

export default ParabolaGraphVisualizer;
