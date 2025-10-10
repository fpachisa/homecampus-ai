import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface ElevationDepressionVisualizerProps {
  type: 'elevation' | 'depression'; // Type of problem
  angle?: number | null; // Angle in degrees, or null to show as θ
  height?: string; // Vertical distance label (e.g., "50m", "h")
  distance?: string; // Horizontal distance label (e.g., "120m", "d")
  observerLabel?: string; // Label for observer (e.g., "Observer", "Boat")
  targetLabel?: string; // Label for target (e.g., "Top of building", "Boat")
  showTriangle?: boolean; // Whether to show the triangle overlay
  showRightAngle?: boolean; // Whether to show right angle marker
  highlightSide?: 'height' | 'distance' | 'hypotenuse' | 'none';
  caption?: string; // Optional caption
}

const ElevationDepressionVisualizer: React.FC<ElevationDepressionVisualizerProps> = ({
  type,
  angle = null,
  height = '',
  distance = '',
  observerLabel = type === 'elevation' ? 'Observer' : 'Observer',
  targetLabel = type === 'elevation' ? 'Target' : 'Target',
  showTriangle = true,
  showRightAngle = true,
  highlightSide = 'none',
  caption
}) => {
  const { theme } = useTheme();

  // Calculate angle if not provided
  let calculatedAngle: number = angle ?? 0;
  let showThetaLabel = false;

  if (angle === null || angle === 0) {
    showThetaLabel = true;

    // Try to calculate from height and distance
    if (height && distance) {
      const h = parseFloat(height);
      const d = parseFloat(distance);
      if (!isNaN(h) && !isNaN(d) && d !== 0) {
        calculatedAngle = (Math.atan(h / d) * 180) / Math.PI;
      }
    }

    // Fallback to 30° for visualization
    if (calculatedAngle === 0 || isNaN(calculatedAngle)) {
      calculatedAngle = 30;
    }
  }

  // SVG dimensions
  const svgWidth = 500;
  const svgHeight = 350;
  const padding = 40;

  // Calculate geometry
  const horizontalLength = 300;
  const angleRad = (calculatedAngle * Math.PI) / 180;
  const verticalLength = horizontalLength * Math.tan(angleRad);

  // Colors
  const defaultColor = theme.colors.textSecondary || '#666';
  const highlightColor = '#ef4444';
  const angleColor = theme.colors.brand || '#5865F2';
  const horizonColor = '#94a3b8'; // Slate gray for horizon line

  // Determine stroke properties
  const getStrokeColor = (side: string) => {
    return highlightSide === side ? highlightColor : defaultColor;
  };

  const getStrokeWidth = (side: string) => {
    return highlightSide === side ? 3 : 2;
  };

  // Position calculations for elevation
  const elevationObserverX = padding + 50;
  const elevationObserverY = svgHeight - padding - 50;
  const elevationTargetX = elevationObserverX + horizontalLength;
  const elevationTargetY = elevationObserverY - verticalLength;

  // Position calculations for depression
  const depressionObserverX = padding + 50;
  const depressionObserverY = padding + 50;
  const depressionTargetX = depressionObserverX + horizontalLength;
  const depressionTargetY = depressionObserverY + verticalLength;

  if (type === 'elevation') {
    return (
      <div className="my-4">
        <svg width={svgWidth} height={svgHeight} className="mx-auto">
          {/* Ground level - horizontal line */}
          <line
            x1={padding}
            y1={elevationObserverY}
            x2={svgWidth - padding}
            y2={elevationObserverY}
            stroke={horizonColor}
            strokeWidth={2}
            strokeDasharray="5,5"
          />

          {/* Observer (person icon) */}
          <g>
            {/* Head */}
            <circle
              cx={elevationObserverX}
              cy={elevationObserverY - 20}
              r={8}
              fill={defaultColor}
            />
            {/* Body */}
            <line
              x1={elevationObserverX}
              y1={elevationObserverY - 12}
              x2={elevationObserverX}
              y2={elevationObserverY}
              stroke={defaultColor}
              strokeWidth={2}
            />
            {/* Eye level line (horizontal from eye) */}
            <line
              x1={elevationObserverX}
              y1={elevationObserverY - 20}
              x2={elevationObserverX + 30}
              y2={elevationObserverY - 20}
              stroke={angleColor}
              strokeWidth={1}
              strokeDasharray="3,3"
            />
            {/* Observer label */}
            <text
              x={elevationObserverX}
              y={elevationObserverY + 20}
              className="text-xs font-medium"
              textAnchor="middle"
              fill={defaultColor}
            >
              {observerLabel}
            </text>
          </g>

          {/* Target (building) */}
          <g>
            {/* Building rectangle */}
            <rect
              x={elevationTargetX - 15}
              y={elevationTargetY}
              width={30}
              height={elevationObserverY - elevationTargetY}
              fill="#cbd5e1"
              stroke={defaultColor}
              strokeWidth={2}
            />
            {/* Target point marker */}
            <circle
              cx={elevationTargetX}
              cy={elevationTargetY}
              r={5}
              fill={highlightColor}
            />
            {/* Target label */}
            <text
              x={elevationTargetX}
              y={elevationTargetY - 15}
              className="text-xs font-medium"
              textAnchor="middle"
              fill={defaultColor}
            >
              {targetLabel}
            </text>
          </g>

          {/* Triangle overlay */}
          {showTriangle && (
            <>
              {/* Horizontal (distance) */}
              <line
                x1={elevationObserverX}
                y1={elevationObserverY - 20}
                x2={elevationTargetX}
                y2={elevationObserverY - 20}
                stroke={getStrokeColor('distance')}
                strokeWidth={getStrokeWidth('distance')}
              />

              {/* Vertical (height) */}
              <line
                x1={elevationTargetX}
                y1={elevationObserverY - 20}
                x2={elevationTargetX}
                y2={elevationTargetY}
                stroke={getStrokeColor('height')}
                strokeWidth={getStrokeWidth('height')}
              />

              {/* Hypotenuse (line of sight) */}
              <line
                x1={elevationObserverX}
                y1={elevationObserverY - 20}
                x2={elevationTargetX}
                y2={elevationTargetY}
                stroke={getStrokeColor('hypotenuse')}
                strokeWidth={getStrokeWidth('hypotenuse')}
                strokeDasharray={highlightSide === 'hypotenuse' ? '0' : '5,5'}
              />

              {/* Right angle marker */}
              {showRightAngle && (
                <rect
                  x={elevationTargetX - 10}
                  y={elevationObserverY - 30}
                  width={10}
                  height={10}
                  fill="none"
                  stroke={defaultColor}
                  strokeWidth={1.5}
                />
              )}

              {/* Angle of elevation arc */}
              <path
                d={`M ${elevationObserverX + 30} ${elevationObserverY - 20}
                    A 30 30 0 0 0 ${elevationObserverX + 30 * Math.cos(angleRad)} ${elevationObserverY - 20 - 30 * Math.sin(angleRad)}`}
                fill="none"
                stroke={angleColor}
                strokeWidth={2}
              />

              {/* Angle label */}
              <text
                x={elevationObserverX + 45}
                y={elevationObserverY - 25}
                className="text-sm font-semibold"
                fill={angleColor}
              >
                {showThetaLabel ? 'θ' : `${Math.round(calculatedAngle)}°`}
              </text>

              {/* Side labels */}
              {distance && (
                <foreignObject
                  x={elevationObserverX + horizontalLength / 2 - 40}
                  y={elevationObserverY - 45}
                  width={80}
                  height={30}
                >
                  <div className="flex items-center justify-center h-full">
                    <div
                      className="text-base font-semibold"
                      style={{ color: highlightSide === 'distance' ? highlightColor : defaultColor }}
                    >
                      <MathText>{`$${distance}$`}</MathText>
                    </div>
                  </div>
                </foreignObject>
              )}

              {height && (
                <foreignObject
                  x={elevationTargetX + 15}
                  y={elevationObserverY - 20 - verticalLength / 2 - 15}
                  width={60}
                  height={30}
                >
                  <div className="flex items-center justify-center h-full">
                    <div
                      className="text-base font-semibold"
                      style={{ color: highlightSide === 'height' ? highlightColor : defaultColor }}
                    >
                      <MathText>{`$${height}$`}</MathText>
                    </div>
                  </div>
                </foreignObject>
              )}
            </>
          )}

          {/* "Angle of Elevation" label */}
          <text
            x={elevationObserverX + 50}
            y={elevationObserverY - 50}
            className="text-xs italic"
            fill={angleColor}
          >
            Angle of Elevation
          </text>
        </svg>

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
  } else {
    // Depression type
    return (
      <div className="my-4">
        <svg width={svgWidth} height={svgHeight} className="mx-auto">
          {/* Horizontal reference line (eye level) */}
          <line
            x1={padding}
            y1={depressionObserverY}
            x2={svgWidth - padding}
            y2={depressionObserverY}
            stroke={horizonColor}
            strokeWidth={2}
            strokeDasharray="5,5"
          />

          {/* Observer (elevated platform or cliff) */}
          <g>
            {/* Platform */}
            <rect
              x={depressionObserverX - 20}
              y={depressionObserverY}
              width={40}
              height={10}
              fill="#94a3b8"
              stroke={defaultColor}
              strokeWidth={2}
            />
            {/* Person on platform */}
            <circle
              cx={depressionObserverX}
              cy={depressionObserverY - 8}
              r={8}
              fill={defaultColor}
            />
            <line
              x1={depressionObserverX}
              y1={depressionObserverY}
              x2={depressionObserverX}
              y2={depressionObserverY + 12}
              stroke={defaultColor}
              strokeWidth={2}
            />
            {/* Eye level line (horizontal from eye) */}
            <line
              x1={depressionObserverX}
              y1={depressionObserverY}
              x2={depressionObserverX + 30}
              y2={depressionObserverY}
              stroke={angleColor}
              strokeWidth={1}
              strokeDasharray="3,3"
            />
            {/* Observer label */}
            <text
              x={depressionObserverX}
              y={depressionObserverY - 25}
              className="text-xs font-medium"
              textAnchor="middle"
              fill={defaultColor}
            >
              {observerLabel}
            </text>
          </g>

          {/* Target (boat or object below) */}
          <g>
            {/* Target point marker */}
            <circle
              cx={depressionTargetX}
              cy={depressionTargetY}
              r={8}
              fill={highlightColor}
            />
            {/* Simple boat shape */}
            <path
              d={`M ${depressionTargetX - 15} ${depressionTargetY}
                  L ${depressionTargetX + 15} ${depressionTargetY}
                  L ${depressionTargetX + 10} ${depressionTargetY + 8}
                  L ${depressionTargetX - 10} ${depressionTargetY + 8} Z`}
              fill="#60a5fa"
              stroke={defaultColor}
              strokeWidth={1.5}
            />
            {/* Target label */}
            <text
              x={depressionTargetX}
              y={depressionTargetY + 30}
              className="text-xs font-medium"
              textAnchor="middle"
              fill={defaultColor}
            >
              {targetLabel}
            </text>
          </g>

          {/* Triangle overlay */}
          {showTriangle && (
            <>
              {/* Horizontal (distance) */}
              <line
                x1={depressionObserverX}
                y1={depressionObserverY}
                x2={depressionTargetX}
                y2={depressionObserverY}
                stroke={getStrokeColor('distance')}
                strokeWidth={getStrokeWidth('distance')}
              />

              {/* Vertical (height) */}
              <line
                x1={depressionTargetX}
                y1={depressionObserverY}
                x2={depressionTargetX}
                y2={depressionTargetY}
                stroke={getStrokeColor('height')}
                strokeWidth={getStrokeWidth('height')}
              />

              {/* Hypotenuse (line of sight) */}
              <line
                x1={depressionObserverX}
                y1={depressionObserverY}
                x2={depressionTargetX}
                y2={depressionTargetY}
                stroke={getStrokeColor('hypotenuse')}
                strokeWidth={getStrokeWidth('hypotenuse')}
                strokeDasharray={highlightSide === 'hypotenuse' ? '0' : '5,5'}
              />

              {/* Right angle marker */}
              {showRightAngle && (
                <rect
                  x={depressionTargetX - 10}
                  y={depressionObserverY}
                  width={10}
                  height={10}
                  fill="none"
                  stroke={defaultColor}
                  strokeWidth={1.5}
                />
              )}

              {/* Angle of depression arc */}
              <path
                d={`M ${depressionObserverX + 30} ${depressionObserverY}
                    A 30 30 0 0 1 ${depressionObserverX + 30 * Math.cos(angleRad)} ${depressionObserverY + 30 * Math.sin(angleRad)}`}
                fill="none"
                stroke={angleColor}
                strokeWidth={2}
              />

              {/* Angle label */}
              <text
                x={depressionObserverX + 45}
                y={depressionObserverY + 20}
                className="text-sm font-semibold"
                fill={angleColor}
              >
                {showThetaLabel ? 'θ' : `${Math.round(calculatedAngle)}°`}
              </text>

              {/* Side labels */}
              {distance && (
                <foreignObject
                  x={depressionObserverX + horizontalLength / 2 - 40}
                  y={depressionObserverY - 35}
                  width={80}
                  height={30}
                >
                  <div className="flex items-center justify-center h-full">
                    <div
                      className="text-base font-semibold"
                      style={{ color: highlightSide === 'distance' ? highlightColor : defaultColor }}
                    >
                      <MathText>{`$${distance}$`}</MathText>
                    </div>
                  </div>
                </foreignObject>
              )}

              {height && (
                <foreignObject
                  x={depressionTargetX + 15}
                  y={depressionObserverY + verticalLength / 2 - 15}
                  width={60}
                  height={30}
                >
                  <div className="flex items-center justify-center h-full">
                    <div
                      className="text-base font-semibold"
                      style={{ color: highlightSide === 'height' ? highlightColor : defaultColor }}
                    >
                      <MathText>{`$${height}$`}</MathText>
                    </div>
                  </div>
                </foreignObject>
              )}
            </>
          )}

          {/* "Angle of Depression" label */}
          <text
            x={depressionObserverX + 50}
            y={depressionObserverY + 45}
            className="text-xs italic"
            fill={angleColor}
          >
            Angle of Depression
          </text>
        </svg>

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
  }
};

export default ElevationDepressionVisualizer;
