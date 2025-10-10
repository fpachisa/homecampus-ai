import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface ParabolaGraphVisualizerProps {
  a: number; // coefficient of x²
  h: number; // x-coordinate of vertex
  k: number; // y-coordinate of vertex
  form?: 'vertex' | 'factored' | 'standard';
  showVertex?: boolean;
  showAxisOfSymmetry?: boolean;
  showIntercepts?: boolean;
  showGrid?: boolean;
  xRange?: [number, number];
  yRange?: [number, number];
  caption?: string;
}

const ParabolaGraphVisualizer: React.FC<ParabolaGraphVisualizerProps> = ({
  a,
  h,
  k,
  form = 'vertex',
  showVertex = true,
  showAxisOfSymmetry = true,
  showIntercepts = false,
  showGrid = true,
  xRange = [-10, 10],
  yRange = [-10, 10],
  caption
}) => {
  const { theme } = useTheme();

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
    const step = (xRange[1] - xRange[0]) / 100;

    for (let x = xRange[0]; x <= xRange[1]; x += step) {
      const y = parabolaY(x);
      if (y >= yRange[0] && y <= yRange[1]) {
        points.push(mathToSVG(x, y));
      }
    }

    if (points.length === 0) return '';

    return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
  };

  // Calculate x-intercepts
  const getXIntercepts = (): number[] => {
    const discriminant = -4 * a * k;
    if (discriminant < 0) return [];
    if (discriminant === 0) return [h];
    const sqrtDisc = Math.sqrt(discriminant);
    return [h - sqrtDisc / (2 * a), h + sqrtDisc / (2 * a)];
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
            {Array.from({ length: xRange[1] - xRange[0] + 1 }, (_, i) => {
              const x = xRange[0] + i;
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
            {Array.from({ length: yRange[1] - yRange[0] + 1 }, (_, i) => {
              const y = yRange[0] + i;
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
