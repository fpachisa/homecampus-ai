import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface GradientVisualizerProps {
  point1: { x: number; y: number };
  point2: { x: number; y: number };
  showCalculation?: boolean;
  showTriangle?: boolean;
  highlightRise?: boolean;
  highlightRun?: boolean;
  caption?: string;
}

const GradientVisualizer: React.FC<GradientVisualizerProps> = ({
  point1,
  point2,
  showCalculation = false,
  showTriangle = true,
  highlightRise = false,
  highlightRun = false,
  caption
}) => {

  const { theme } = useTheme();
  const isDark = document.documentElement.classList.contains('dark');

  // Calculate gradient components
  const run = point2.x - point1.x;
  const rise = point2.y - point1.y;

  // Calculate gradient
  let gradient: number | string = 0;
  let gradientText = '';
  let isVertical = false;
  let isHorizontal = false;

  if (run === 0) {
    // Vertical line - undefined gradient
    gradient = 'undefined';
    gradientText = 'undefined (vertical line)';
    isVertical = true;
  } else if (rise === 0) {
    // Horizontal line - gradient = 0
    gradient = 0;
    gradientText = '0 (horizontal line)';
    isHorizontal = true;
  } else {
    // Normal gradient
    gradient = rise / run;
    // Format to 2 decimal places if not a whole number
    gradientText = Number.isInteger(gradient)
      ? gradient.toString()
      : gradient.toFixed(2);
  }

  const isPositive = typeof gradient === 'number' && gradient > 0;
  const isNegative = typeof gradient === 'number' && gradient < 0;

  // SVG dimensions and setup
  const width = 600;
  const height = 500;
  const padding = 60;

  // Determine visible range
  const xValues = [point1.x, point2.x];
  const yValues = [point1.y, point2.y];

  const xMin = Math.min(...xValues) - 2;
  const xMax = Math.max(...xValues) + 2;
  const yMin = Math.min(...yValues) - 2;
  const yMax = Math.max(...yValues) + 2;

  // Ensure we include origin if points are close to it
  const finalXMin = Math.min(xMin, 0);
  const finalXMax = Math.max(xMax, 0);
  const finalYMin = Math.min(yMin, 0);
  const finalYMax = Math.max(yMax, 0);

  // Scaling
  const xScale = (width - 2 * padding) / (finalXMax - finalXMin);
  const yScale = (height - 2 * padding) / (finalYMax - finalYMin);

  // Convert math coordinates to SVG coordinates
  const mathToSVG = (x: number, y: number): [number, number] => {
    const svgX = padding + (x - finalXMin) * xScale;
    const svgY = height - padding - (y - finalYMin) * yScale;
    return [svgX, svgY];
  };

  // Get SVG coordinates for points
  const [x1, y1] = mathToSVG(point1.x, point1.y);
  const [x2, y2] = mathToSVG(point2.x, point2.y);
  const [originX, originY] = mathToSVG(0, 0);

  // Calculate right triangle corner point for visualization
  // The right angle should be at (point2.x, point1.y)
  const [triangleCornerX, triangleCornerY] = mathToSVG(point2.x, point1.y);

  // Colors
  const axisColor = theme.colors.textSecondary || '#666666';
  const gridColor = theme.colors.border || '#e5e7eb';
  const lineColor = isPositive ? '#10b981' : isNegative ? '#ef4444' : '#6366f1';
  const riseColor = '#ef4444'; // Red for vertical change
  const runColor = '#3b82f6'; // Blue for horizontal change
  const triangleColor = theme.colors.textMuted || '#9ca3af';

  // Draw grid lines
  const gridLines: React.ReactElement[] = [];
  for (let x = Math.ceil(finalXMin); x <= Math.floor(finalXMax); x++) {
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

  for (let y = Math.ceil(finalYMin); y <= Math.floor(finalYMax); y++) {
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

  return (
    <div className="my-6 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
      <svg width={width} height={height} className="mx-auto">
        <defs>
          <marker
            id="arrowhead-gradient"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill={axisColor} />
          </marker>
          <marker
            id="arrowhead-rise"
            markerWidth="8"
            markerHeight="6"
            refX="7"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 8 3, 0 6" fill={riseColor} />
          </marker>
          <marker
            id="arrowhead-run"
            markerWidth="8"
            markerHeight="6"
            refX="7"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 8 3, 0 6" fill={runColor} />
          </marker>
        </defs>

        {/* Grid lines */}
        {gridLines}

        {/* Axes */}
        {/* X-axis */}
        <line
          x1={padding}
          y1={originY}
          x2={width - padding}
          y2={originY}
          stroke={axisColor}
          strokeWidth="2"
          markerEnd="url(#arrowhead-gradient)"
        />
        {/* Y-axis */}
        <line
          x1={originX}
          y1={height - padding}
          x2={originX}
          y2={padding}
          stroke={axisColor}
          strokeWidth="2"
          markerEnd="url(#arrowhead-gradient)"
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

        {/* Scale markers on axes */}
        {/* X-axis markers */}
        {Array.from({ length: Math.floor(finalXMax) - Math.ceil(finalXMin) + 1 }, (_, i) => {
          const x = Math.ceil(finalXMin) + i;
          if (x === 0) return null;
          const [svgX] = mathToSVG(x, 0);
          return (
            <g key={`x-marker-${x}`}>
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

        {/* Y-axis markers */}
        {Array.from({ length: Math.floor(finalYMax) - Math.ceil(finalYMin) + 1 }, (_, i) => {
          const y = Math.ceil(finalYMin) + i;
          if (y === 0) return null;
          const [, svgY] = mathToSVG(0, y);
          return (
            <g key={`y-marker-${y}`}>
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

        {/* Main line connecting the two points */}
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={lineColor}
          strokeWidth="2.5"
          opacity="0.8"
        />

        {/* Right triangle visualization */}
        {showTriangle && !isVertical && (
          <>
            {/* Horizontal line (run) */}
            <line
              x1={x1}
              y1={y1}
              x2={triangleCornerX}
              y2={triangleCornerY}
              stroke={highlightRun ? runColor : triangleColor}
              strokeWidth={highlightRun ? 3 : 2}
              strokeDasharray="4,4"
              markerEnd={highlightRun ? "url(#arrowhead-run)" : undefined}
            />

            {/* Vertical line (rise) */}
            <line
              x1={triangleCornerX}
              y1={triangleCornerY}
              x2={x2}
              y2={y2}
              stroke={highlightRise ? riseColor : triangleColor}
              strokeWidth={highlightRise ? 3 : 2}
              strokeDasharray="4,4"
              markerEnd={highlightRise ? "url(#arrowhead-rise)" : undefined}
            />

            {/* Right angle marker */}
            <rect
              x={triangleCornerX - 8}
              y={triangleCornerY - 8}
              width={16}
              height={16}
              fill="none"
              stroke={triangleColor}
              strokeWidth="1.5"
              transform={`rotate(${rise > 0 ? 0 : 180} ${triangleCornerX} ${triangleCornerY})`}
            />

            {/* Labels for rise and run */}
            {/* Run label */}
            <foreignObject
              x={(x1 + triangleCornerX) / 2 - 40}
              y={triangleCornerY + (rise > 0 ? 15 : -35)}
              width={80}
              height={30}
            >
              <div className="flex items-center justify-center h-full">
                <div
                  className="text-sm font-semibold px-2 py-1 rounded"
                  style={{
                    backgroundColor: isDark ? '#1f2937' : '#f3f4f6',
                    color: highlightRun ? runColor : theme.colors.textPrimary
                  }}
                >
                  <MathText>{`Run = ${Math.abs(run)}`}</MathText>
                </div>
              </div>
            </foreignObject>

            {/* Rise label */}
            <foreignObject
              x={triangleCornerX + (run > 0 ? 15 : -95)}
              y={(triangleCornerY + y2) / 2 - 15}
              width={80}
              height={30}
            >
              <div className="flex items-center justify-center h-full">
                <div
                  className="text-sm font-semibold px-2 py-1 rounded"
                  style={{
                    backgroundColor: isDark ? '#1f2937' : '#f3f4f6',
                    color: highlightRise ? riseColor : theme.colors.textPrimary
                  }}
                >
                  <MathText>{`Rise = ${Math.abs(rise)}`}</MathText>
                </div>
              </div>
            </foreignObject>
          </>
        )}

        {/* Points */}
        {/* Point 1 */}
        <circle
          cx={x1}
          cy={y1}
          r="6"
          fill={lineColor}
          stroke="white"
          strokeWidth="2"
        />
        <foreignObject
          x={point1.x < point2.x ? x1 - 70 : x1 + 10}
          y={point1.y > point2.y ? y1 - 35 : y1 + 10}
          width={100}
          height={25}
        >
          <div className="flex items-center justify-center h-full">
            <div
              className="text-sm font-semibold px-2 py-1 rounded"
              style={{ backgroundColor: isDark ? '#1f2937' : '#ffffff' }}
            >
              <MathText>{`(${point1.x}, ${point1.y})`}</MathText>
            </div>
          </div>
        </foreignObject>

        {/* Point 2 */}
        <circle
          cx={x2}
          cy={y2}
          r="6"
          fill={lineColor}
          stroke="white"
          strokeWidth="2"
        />
        <foreignObject
          x={point2.x > point1.x ? x2 + 10 : x2 - 70}
          y={point2.y < point1.y ? y2 + 10 : y2 - 35}
          width={100}
          height={25}
        >
          <div className="flex items-center justify-center h-full">
            <div
              className="text-sm font-semibold px-2 py-1 rounded"
              style={{ backgroundColor: isDark ? '#1f2937' : '#ffffff' }}
            >
              <MathText>{`(${point2.x}, ${point2.y})`}</MathText>
            </div>
          </div>
        </foreignObject>
      </svg>

      {/* Gradient calculation display */}
      {showCalculation && (
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-3">
            Gradient Calculation
          </h3>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <div className="font-mono text-sm">
              <MathText>{`Gradient (m) = $\\frac{\\text{Rise}}{\\text{Run}}$ = $\\frac{\\text{Change in } y}{\\text{Change in } x}$`}</MathText>
            </div>
            <div className="font-mono text-sm">
              <MathText>{`m = $\\frac{y_2 - y_1}{x_2 - x_1}$`}</MathText>
            </div>
            <div className="font-mono text-sm">
              <MathText>{`m = $\\frac{${point2.y} - (${point1.y})}{${point2.x} - (${point1.x})}$`}</MathText>
            </div>
            <div className="font-mono text-sm">
              <MathText>{`m = $\\frac{${rise}}{${run}}$`}</MathText>
            </div>
            <div className="font-mono text-base font-bold mt-3 pt-3 border-t border-blue-300 dark:border-blue-700">
              <MathText>{`m = ${gradientText}`}</MathText>
            </div>

            {/* Interpretation */}
            <div className="mt-4 pt-3 border-t border-blue-300 dark:border-blue-700 text-sm">
              <strong>Interpretation:</strong>{' '}
              {isVertical && "The line is vertical (undefined gradient) - it goes straight up/down."}
              {isHorizontal && "The line is horizontal (gradient = 0) - it's completely flat."}
              {isPositive && `The line slopes upward from left to right (positive gradient = ${gradientText}).`}
              {isNegative && `The line slopes downward from left to right (negative gradient = ${gradientText}).`}
            </div>
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

export default GradientVisualizer;
