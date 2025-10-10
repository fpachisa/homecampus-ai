import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface RootsVisualizerProps {
  root1: number;
  root2: number;
  a?: number;
  showFactoredForm?: boolean;
  showOnGraph?: boolean;
  highlightVertex?: boolean;
  caption?: string;
}

const RootsVisualizer: React.FC<RootsVisualizerProps> = ({
  root1,
  root2,
  a = 1,
  showFactoredForm = true,
  showOnGraph = true,
  highlightVertex = true,
  caption
}) => {
  const { theme } = useTheme();

  // Calculate vertex (midpoint of roots)
  const h = (root1 + root2) / 2;
  const k = a * (h - root1) * (h - root2);

  // SVG dimensions
  const width = 500;
  const height = 400;
  const padding = 40;

  // Adjust range to show roots
  const margin = Math.max(5, Math.abs(root2 - root1));
  const xRange: [number, number] = [Math.min(root1, root2) - margin, Math.max(root1, root2) + margin];
  const yMin = Math.min(k - 5, -2);
  const yMax = Math.max(k + 5, 2);
  const yRange: [number, number] = [yMin, yMax];

  const xScale = (width - 2 * padding) / (xRange[1] - xRange[0]);
  const yScale = (height - 2 * padding) / (yRange[1] - yRange[0]);

  const mathToSVG = (x: number, y: number): [number, number] => {
    const svgX = padding + (x - xRange[0]) * xScale;
    const svgY = height - padding - (y - yRange[0]) * yScale;
    return [svgX, svgY];
  };

  // Parabola: f(x) = a(x - root1)(x - root2)
  const parabolaY = (x: number): number => a * (x - root1) * (x - root2);

  const generatePath = (): string => {
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

  const gridColor = theme.colors.border || '#e5e7eb';
  const axisColor = theme.colors.textSecondary || '#6b7280';
  const parabolaColor = theme.colors.brand || '#5865F2';
  const rootColor = '#10b981';
  const vertexColor = '#ef4444';

  return (
    <div className="my-4">
      {showFactoredForm && (
        <div className="mb-4 p-3 rounded text-center" style={{ backgroundColor: theme.colors.interactive }}>
          <div className="text-sm font-semibold mb-1" style={{ color: theme.colors.textMuted }}>
            Factored Form:
          </div>
          <div className="text-base font-semibold" style={{ color: theme.colors.brand }}>
            <MathText>
              {`$f(x) = ${a === 1 ? '' : a === -1 ? '-' : a}(x ${root1 >= 0 ? '-' : '+'} ${Math.abs(root1)})(x ${root2 >= 0 ? '-' : '+'} ${Math.abs(root2)})$`}
            </MathText>
          </div>
        </div>
      )}

      {showOnGraph && (
        <svg width={width} height={height} className="mx-auto border" style={{ borderColor: gridColor }}>
          {/* Grid */}
          <g opacity="0.2">
            {Array.from({ length: Math.floor(xRange[1] - xRange[0]) + 1 }, (_, i) => {
              const x = Math.floor(xRange[0]) + i;
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
            {Array.from({ length: Math.floor(yRange[1] - yRange[0]) + 1 }, (_, i) => {
              const y = Math.floor(yRange[0]) + i;
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

          {/* Parabola */}
          <path
            d={generatePath()}
            fill="none"
            stroke={parabolaColor}
            strokeWidth={3}
          />

          {/* Roots (x-intercepts) */}
          <circle
            cx={mathToSVG(root1, 0)[0]}
            cy={mathToSVG(root1, 0)[1]}
            r={6}
            fill={rootColor}
          />
          <text
            x={mathToSVG(root1, 0)[0]}
            y={mathToSVG(root1, 0)[1] + 20}
            className="text-sm font-semibold"
            fill={rootColor}
            textAnchor="middle"
          >
            x = {root1}
          </text>

          <circle
            cx={mathToSVG(root2, 0)[0]}
            cy={mathToSVG(root2, 0)[1]}
            r={6}
            fill={rootColor}
          />
          <text
            x={mathToSVG(root2, 0)[0]}
            y={mathToSVG(root2, 0)[1] + 20}
            className="text-sm font-semibold"
            fill={rootColor}
            textAnchor="middle"
          >
            x = {root2}
          </text>

          {/* Vertex */}
          {highlightVertex && (
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
                ({h.toFixed(1)}, {k.toFixed(1)})
              </text>
            </>
          )}
        </svg>
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

export default RootsVisualizer;
