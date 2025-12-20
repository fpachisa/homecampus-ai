import React, { useMemo } from 'react';

interface WaterTankVisualizerProps {
  length: number;         // Tank length in specified unit
  width: number;          // Tank width in specified unit
  height: number;         // Tank total height in specified unit
  waterHeight: number;    // Height of water level (0 = empty)
  unit?: 'cm' | 'm';
  showDimensions?: boolean;
  showWaterHeight?: boolean;
  caption?: string;
}

const WaterTankVisualizer: React.FC<WaterTankVisualizerProps> = ({
  length,
  width,
  height,
  waterHeight,
  unit = 'cm',
  showDimensions = true,
  showWaterHeight = true,
  caption
}) => {
  // Clamp water height to tank height
  const clampedWaterHeight = Math.max(0, Math.min(waterHeight, height));

  // Calculate dimensions dynamically based on the actual proportions
  const dimensions = useMemo(() => {
    const maxDim = Math.max(length, width, height);
    const baseScale = 120;
    const scaleFactor = baseScale / maxDim;

    // Calculate proportional dimensions (clamped for reasonable display)
    const tankLength = Math.max(60, Math.min(200, length * scaleFactor));
    const tankWidth = Math.max(40, Math.min(150, width * scaleFactor));
    const tankHeight = Math.max(50, Math.min(180, height * scaleFactor));
    const waterH = (clampedWaterHeight / height) * tankHeight;

    // Isometric angles
    const depthOffsetX = tankWidth * 0.5;
    const depthOffsetY = tankWidth * 0.25;

    // Calculate total dimensions needed
    const totalWidth = tankLength + depthOffsetX;
    const totalHeight = tankHeight + depthOffsetY;

    // Padding for labels
    const padding = { left: 60, right: 70, top: 20, bottom: 45 };

    // SVG dimensions - fit to content
    const svgWidth = totalWidth + padding.left + padding.right;
    const svgHeight = totalHeight + padding.top + padding.bottom;

    // Starting position (front-bottom-left corner)
    const startX = padding.left;
    const startY = svgHeight - padding.bottom;

    return {
      tankLength,
      tankWidth,
      tankHeight,
      waterH,
      depthOffsetX,
      depthOffsetY,
      svgWidth,
      svgHeight,
      startX,
      startY
    };
  }, [length, width, height, clampedWaterHeight]);

  const { tankLength, tankHeight, waterH, depthOffsetX, depthOffsetY, svgWidth, svgHeight, startX, startY } = dimensions;

  // Tank vertices
  // Front face (visible)
  const frontBottomLeft = { x: startX, y: startY };
  const frontBottomRight = { x: startX + tankLength, y: startY };
  const frontTopRight = { x: startX + tankLength, y: startY - tankHeight };
  const frontTopLeft = { x: startX, y: startY - tankHeight };

  // Back face (partially hidden)
  const backBottomLeft = { x: startX + depthOffsetX, y: startY - depthOffsetY };
  const backBottomRight = { x: startX + tankLength + depthOffsetX, y: startY - depthOffsetY };
  const backTopRight = { x: startX + tankLength + depthOffsetX, y: startY - tankHeight - depthOffsetY };
  const backTopLeft = { x: startX + depthOffsetX, y: startY - tankHeight - depthOffsetY };

  // Water surface vertices (at waterHeight)
  const waterFrontLeft = { x: startX, y: startY - waterH };
  const waterFrontRight = { x: startX + tankLength, y: startY - waterH };
  const waterBackRight = { x: startX + tankLength + depthOffsetX, y: startY - waterH - depthOffsetY };
  const waterBackLeft = { x: startX + depthOffsetX, y: startY - waterH - depthOffsetY };

  // Colors - detect dark mode
  const isDark = document.documentElement.classList.contains('dark');

  const tankEdgeColor = isDark ? '#e5e7eb' : '#1f2937';  // Gray for tank edges
  const waterColor = '#3b82f6';         // Blue-500 for water surface line
  const waterFillColor = 'rgba(59, 130, 246, 0.35)';  // Blue with transparency
  const textColor = isDark ? '#e5e7eb' : '#374151';
  const dimensionLineColor = isDark ? '#9ca3af' : '#6b7280';

  return (
    <div className="my-4">
      <svg
        width={svgWidth}
        height={svgHeight}
        className="mx-auto"
        style={{ maxWidth: '100%', height: 'auto' }}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      >
        {/* Hidden edges (dotted lines) - drawn first, behind everything */}
        {/* Back bottom edge */}
        <line
          x1={backBottomLeft.x} y1={backBottomLeft.y}
          x2={backBottomRight.x} y2={backBottomRight.y}
          stroke={tankEdgeColor}
          strokeWidth={1.5}
          strokeDasharray="4,4"
        />
        {/* Back left vertical edge */}
        <line
          x1={backBottomLeft.x} y1={backBottomLeft.y}
          x2={backTopLeft.x} y2={backTopLeft.y}
          stroke={tankEdgeColor}
          strokeWidth={1.5}
          strokeDasharray="4,4"
        />
        {/* Left depth edge (bottom) */}
        <line
          x1={frontBottomLeft.x} y1={frontBottomLeft.y}
          x2={backBottomLeft.x} y2={backBottomLeft.y}
          stroke={tankEdgeColor}
          strokeWidth={1.5}
          strokeDasharray="4,4"
        />

        {/* Water fill - drawn before tank edges so edges appear on top */}
        {clampedWaterHeight > 0 && (
          <>
            {/* Water front face */}
            <polygon
              points={`${frontBottomLeft.x},${frontBottomLeft.y} ${frontBottomRight.x},${frontBottomRight.y} ${waterFrontRight.x},${waterFrontRight.y} ${waterFrontLeft.x},${waterFrontLeft.y}`}
              fill={waterFillColor}
            />
            {/* Water right face */}
            <polygon
              points={`${frontBottomRight.x},${frontBottomRight.y} ${backBottomRight.x},${backBottomRight.y} ${waterBackRight.x},${waterBackRight.y} ${waterFrontRight.x},${waterFrontRight.y}`}
              fill={waterFillColor}
            />
            {/* Water top surface */}
            <polygon
              points={`${waterFrontLeft.x},${waterFrontLeft.y} ${waterFrontRight.x},${waterFrontRight.y} ${waterBackRight.x},${waterBackRight.y} ${waterBackLeft.x},${waterBackLeft.y}`}
              fill={waterFillColor}
            />

            {/* Water surface edges (solid blue lines) */}
            {/* Front edge of water surface */}
            <line
              x1={waterFrontLeft.x} y1={waterFrontLeft.y}
              x2={waterFrontRight.x} y2={waterFrontRight.y}
              stroke={waterColor}
              strokeWidth={2}
            />
            {/* Right edge of water surface */}
            <line
              x1={waterFrontRight.x} y1={waterFrontRight.y}
              x2={waterBackRight.x} y2={waterBackRight.y}
              stroke={waterColor}
              strokeWidth={2}
            />
            {/* Back edge of water surface */}
            <line
              x1={waterBackRight.x} y1={waterBackRight.y}
              x2={waterBackLeft.x} y2={waterBackLeft.y}
              stroke={waterColor}
              strokeWidth={2}
            />
            {/* Left edge of water surface */}
            <line
              x1={waterBackLeft.x} y1={waterBackLeft.y}
              x2={waterFrontLeft.x} y2={waterFrontLeft.y}
              stroke={waterColor}
              strokeWidth={2}
            />
          </>
        )}

        {/* Visible tank edges (solid black lines) */}
        {/* Front face edges */}
        <line
          x1={frontBottomLeft.x} y1={frontBottomLeft.y}
          x2={frontBottomRight.x} y2={frontBottomRight.y}
          stroke={tankEdgeColor}
          strokeWidth={2}
        />
        <line
          x1={frontBottomRight.x} y1={frontBottomRight.y}
          x2={frontTopRight.x} y2={frontTopRight.y}
          stroke={tankEdgeColor}
          strokeWidth={2}
        />
        <line
          x1={frontTopRight.x} y1={frontTopRight.y}
          x2={frontTopLeft.x} y2={frontTopLeft.y}
          stroke={tankEdgeColor}
          strokeWidth={2}
        />
        <line
          x1={frontTopLeft.x} y1={frontTopLeft.y}
          x2={frontBottomLeft.x} y2={frontBottomLeft.y}
          stroke={tankEdgeColor}
          strokeWidth={2}
        />

        {/* Top face edges (visible) */}
        <line
          x1={frontTopLeft.x} y1={frontTopLeft.y}
          x2={backTopLeft.x} y2={backTopLeft.y}
          stroke={tankEdgeColor}
          strokeWidth={2}
        />
        <line
          x1={frontTopRight.x} y1={frontTopRight.y}
          x2={backTopRight.x} y2={backTopRight.y}
          stroke={tankEdgeColor}
          strokeWidth={2}
        />
        <line
          x1={backTopLeft.x} y1={backTopLeft.y}
          x2={backTopRight.x} y2={backTopRight.y}
          stroke={tankEdgeColor}
          strokeWidth={2}
        />

        {/* Right face depth edge (visible) */}
        <line
          x1={frontBottomRight.x} y1={frontBottomRight.y}
          x2={backBottomRight.x} y2={backBottomRight.y}
          stroke={tankEdgeColor}
          strokeWidth={2}
        />
        {/* Back right vertical edge */}
        <line
          x1={backBottomRight.x} y1={backBottomRight.y}
          x2={backTopRight.x} y2={backTopRight.y}
          stroke={tankEdgeColor}
          strokeWidth={2}
        />

        {/* Dimension labels */}
        {showDimensions && (
          <>
            {/* Length label (front bottom edge) */}
            <text
              x={frontBottomLeft.x + tankLength / 2}
              y={frontBottomLeft.y + 25}
              textAnchor="middle"
              fill={textColor}
              fontSize="14"
              fontWeight="500"
            >
              {length} {unit}
            </text>

            {/* Width label (right bottom edge) */}
            <text
              x={frontBottomRight.x + depthOffsetX / 2 + 20}
              y={frontBottomRight.y - depthOffsetY / 2 + 5}
              textAnchor="start"
              fill={textColor}
              fontSize="14"
              fontWeight="500"
            >
              {width} {unit}
            </text>

            {/* Height label (left front edge) */}
            <line
              x1={frontBottomLeft.x - 30}
              y1={frontBottomLeft.y}
              x2={frontBottomLeft.x - 30}
              y2={frontTopLeft.y}
              stroke={dimensionLineColor}
              strokeWidth={1}
            />
            <line
              x1={frontBottomLeft.x - 35}
              y1={frontBottomLeft.y}
              x2={frontBottomLeft.x - 25}
              y2={frontBottomLeft.y}
              stroke={dimensionLineColor}
              strokeWidth={1}
            />
            <line
              x1={frontBottomLeft.x - 35}
              y1={frontTopLeft.y}
              x2={frontBottomLeft.x - 25}
              y2={frontTopLeft.y}
              stroke={dimensionLineColor}
              strokeWidth={1}
            />
            <text
              x={frontBottomLeft.x - 45}
              y={frontBottomLeft.y - tankHeight / 2}
              textAnchor="end"
              fill={textColor}
              fontSize="14"
              fontWeight="500"
            >
              {height} {unit}
            </text>
          </>
        )}

        {/* Water height label */}
        {showWaterHeight && clampedWaterHeight > 0 && clampedWaterHeight < height && (
          <>
            {/* Water height dimension line - at back bottom right corner going up to water level */}
            <line
              x1={backBottomRight.x + 15}
              y1={backBottomRight.y}
              x2={backBottomRight.x + 15}
              y2={waterBackRight.y}
              stroke={waterColor}
              strokeWidth={1.5}
            />
            {/* Bottom tick at back bottom right */}
            <line
              x1={backBottomRight.x + 10}
              y1={backBottomRight.y}
              x2={backBottomRight.x + 20}
              y2={backBottomRight.y}
              stroke={waterColor}
              strokeWidth={1.5}
            />
            {/* Top tick at water level (back right) */}
            <line
              x1={backBottomRight.x + 10}
              y1={waterBackRight.y}
              x2={backBottomRight.x + 20}
              y2={waterBackRight.y}
              stroke={waterColor}
              strokeWidth={1.5}
            />
            <text
              x={backBottomRight.x + 28}
              y={(backBottomRight.y + waterBackRight.y) / 2 + 5}
              textAnchor="start"
              fill={waterColor}
              fontSize="13"
              fontWeight="600"
            >
              {clampedWaterHeight} {unit}
            </text>
          </>
        )}
      </svg>

      {caption && (
        <div
          className="text-sm text-center mt-2 px-4"
          style={{ color: textColor }}
        >
          {caption}
        </div>
      )}
    </div>
  );
};

export default WaterTankVisualizer;
