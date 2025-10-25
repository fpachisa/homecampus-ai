import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface VertexFormTransformVisualizerProps {
  baseParabola?: boolean;
  a: number;
  h: number;
  k: number;
  showTransformations?: boolean;
  animateTransform?: boolean;
  caption?: string;
}

const VertexFormTransformVisualizer: React.FC<VertexFormTransformVisualizerProps> = ({
  baseParabola = true,
  a,
  h,
  k,
  showTransformations = true,
  animateTransform: _animateTransform = false,
  caption
}) => {
  const { theme } = useTheme();

  // SVG dimensions
  const width = 500;
  const height = 400;
  const padding = 40;
  const xRange: [number, number] = [-10, 10];
  const yRange: [number, number] = [-10, 10];

  // Calculate scaling
  const xScale = (width - 2 * padding) / (xRange[1] - xRange[0]);
  const yScale = (height - 2 * padding) / (yRange[1] - yRange[0]);

  const mathToSVG = (x: number, y: number): [number, number] => {
    const svgX = padding + (x - xRange[0]) * xScale;
    const svgY = height - padding - (y - yRange[0]) * yScale;
    return [svgX, svgY];
  };

  // Base parabola: y = x²
  const baseParabolaY = (x: number): number => x * x;

  // Transformed parabola: y = a(x - h)² + k
  const transformedY = (x: number): number => a * Math.pow(x - h, 2) + k;

  const generatePath = (yFunc: (x: number) => number): string => {
    const points: [number, number][] = [];
    const step = (xRange[1] - xRange[0]) / 100;

    for (let x = xRange[0]; x <= xRange[1]; x += step) {
      const y = yFunc(x);
      if (y >= yRange[0] && y <= yRange[1]) {
        points.push(mathToSVG(x, y));
      }
    }

    if (points.length === 0) return '';
    return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
  };

  // Transformation descriptions
  const getTransformations = (): string[] => {
    const transforms: string[] = [];

    if (Math.abs(a) !== 1) {
      if (Math.abs(a) > 1) {
        transforms.push(`Vertical stretch by factor of ${Math.abs(a)}`);
      } else {
        transforms.push(`Vertical compression by factor of ${Math.abs(a)}`);
      }
    }

    if (a < 0) {
      transforms.push('Reflection over x-axis');
    }

    if (h !== 0) {
      transforms.push(`Horizontal shift ${h > 0 ? 'right' : 'left'} by ${Math.abs(h)} units`);
    }

    if (k !== 0) {
      transforms.push(`Vertical shift ${k > 0 ? 'up' : 'down'} by ${Math.abs(k)} units`);
    }

    return transforms;
  };

  const gridColor = theme.colors.border || '#e5e7eb';
  const axisColor = theme.colors.textSecondary || '#6b7280';
  const baseColor = '#9ca3af';
  const transformedColor = theme.colors.brand || '#5865F2';

  return (
    <div className="my-4">
      <svg width={width} height={height} className="mx-auto border" style={{ borderColor: gridColor }}>
        {/* Grid */}
        <g opacity="0.2">
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

        {/* Axes */}
        <line
          x1={padding}
          y1={mathToSVG(0, 0)[1]}
          x2={width - padding}
          y2={mathToSVG(0, 0)[1]}
          stroke={axisColor}
          strokeWidth={2}
        />
        <line
          x1={mathToSVG(0, 0)[0]}
          y1={padding}
          x2={mathToSVG(0, 0)[0]}
          y2={height - padding}
          stroke={axisColor}
          strokeWidth={2}
        />

        {/* Base parabola y = x² */}
        {baseParabola && (
          <path
            d={generatePath(baseParabolaY)}
            fill="none"
            stroke={baseColor}
            strokeWidth={2}
            strokeDasharray="4 4"
            opacity={0.5}
          />
        )}

        {/* Transformed parabola */}
        <path
          d={generatePath(transformedY)}
          fill="none"
          stroke={transformedColor}
          strokeWidth={3}
        />

        {/* Vertex */}
        <circle
          cx={mathToSVG(h, k)[0]}
          cy={mathToSVG(h, k)[1]}
          r={5}
          fill="#ef4444"
        />
        <text
          x={mathToSVG(h, k)[0] + 10}
          y={mathToSVG(h, k)[1] - 10}
          className="text-sm font-semibold"
          fill="#ef4444"
        >
          ({h}, {k})
        </text>
      </svg>

      {/* Equation */}
      <div
        className="text-center mt-3 text-base font-semibold"
        style={{ color: theme.colors.textPrimary }}
      >
        <MathText>{`$f(x) = ${a === 1 ? '' : a === -1 ? '-' : a}(x ${h >= 0 ? '-' : '+'} ${Math.abs(h)})^2 ${k >= 0 ? '+' : ''} ${k}$`}</MathText>
      </div>

      {/* Transformations */}
      {showTransformations && getTransformations().length > 0 && (
        <div className="mt-3 p-3 rounded" style={{ backgroundColor: theme.colors.interactive }}>
          <div className="text-sm font-semibold mb-2" style={{ color: theme.colors.textPrimary }}>
            Transformations from y = x²:
          </div>
          <ul className="text-sm space-y-1" style={{ color: theme.colors.textSecondary }}>
            {getTransformations().map((transform, i) => (
              <li key={i}>• {transform}</li>
            ))}
          </ul>
        </div>
      )}

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

export default VertexFormTransformVisualizer;
