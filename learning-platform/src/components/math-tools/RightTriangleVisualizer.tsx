import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface RightTriangleVisualizerProps {
  angle?: number | null; // Acute angle in degrees (0-90), or null/0 to auto-calculate from sides and show θ
  hypotenuse?: string; // Label for hypotenuse
  opposite?: string; // Label for opposite side
  adjacent?: string; // Label for adjacent side
  highlightSide?: 'opposite' | 'adjacent' | 'hypotenuse' | 'none';
  showAngleMark?: boolean;
  showRightAngle?: boolean;
  showSideTypeLabels?: boolean; // Whether to show (Adjacent), (Opposite), (Hypotenuse) labels
  caption?: string; // Optional caption explaining the diagram
}

const RightTriangleVisualizer: React.FC<RightTriangleVisualizerProps> = ({
  angle = null,
  hypotenuse = '',
  opposite = '',
  adjacent = '',
  highlightSide = 'none',
  showAngleMark = true,
  showRightAngle = true,
  showSideTypeLabels = false,
  caption
}) => {
  const { theme } = useTheme();

  // ============================================
  // AUTO-CALCULATE ANGLE FROM SIDES
  // ============================================
  // When angle is null or 0, calculate it from the given side lengths.
  // This ensures:
  // 1. Triangle proportions are mathematically correct
  // 2. We can show "θ" label instead of a numeric value
  // 3. No more incorrect hardcoded angles (e.g., 45° for sides 8 and 11)
  //
  // WHY THIS IS NEEDED:
  // - When asking "find the angle", we want to show the unknown angle as "θ"
  // - But we still need a numeric angle to draw the triangle correctly
  // - Solution: Calculate the actual angle from sides, but display "θ" as the label

  let calculatedAngle: number = angle ?? 0;
  let showThetaLabel = false;

  if (angle === null || angle === 0) {
    showThetaLabel = true; // Display "θ" instead of numeric value

    // Try to calculate angle from given sides
    // Priority: opposite + adjacent > opposite + hypotenuse > adjacent + hypotenuse

    if (opposite && adjacent) {
      // Use arctan(opposite/adjacent) - most common for tangent problems
      const opp = parseFloat(opposite);
      const adj = parseFloat(adjacent);
      if (!isNaN(opp) && !isNaN(adj) && adj !== 0) {
        calculatedAngle = (Math.atan(opp / adj) * 180) / Math.PI;
      }
    } else if (opposite && hypotenuse) {
      // Use arcsin(opposite/hypotenuse) - for sine problems
      const opp = parseFloat(opposite);
      const hyp = parseFloat(hypotenuse);
      if (!isNaN(opp) && !isNaN(hyp) && hyp !== 0) {
        calculatedAngle = (Math.asin(opp / hyp) * 180) / Math.PI;
      }
    } else if (adjacent && hypotenuse) {
      // Use arccos(adjacent/hypotenuse) - for cosine problems
      const adj = parseFloat(adjacent);
      const hyp = parseFloat(hypotenuse);
      if (!isNaN(adj) && !isNaN(hyp) && hyp !== 0) {
        calculatedAngle = (Math.acos(adj / hyp) * 180) / Math.PI;
      }
    }

    // Fallback to 30° if calculation fails (e.g., non-numeric labels like "x", "h")
    if (calculatedAngle === 0 || isNaN(calculatedAngle)) {
      calculatedAngle = 30;
    }
  }

  // Calculate triangle dimensions using the calculated angle
  const baseWidth = 160; // Reduced from 200 for more compact display
  const angleRad = (calculatedAngle * Math.PI) / 180;

  // Calculate side lengths for display (not to scale, but proportional)
  const adjacentLength = baseWidth;
  const oppositeLength = adjacentLength * Math.tan(angleRad);
  const hypotenuseLength = Math.sqrt(adjacentLength * adjacentLength + oppositeLength * oppositeLength);

  // SVG dimensions and positioning
  const padding = 40; // Reduced from 60 for more compact display
  const svgWidth = adjacentLength + padding * 2 + 70; // Extra space for right-side labels
  const svgHeight = Math.max(oppositeLength, 80) + padding * 2; // Reduced minimum height

  // Triangle vertices
  const x1 = padding; // Bottom left (right angle)
  const y1 = svgHeight - padding;
  const x2 = x1 + adjacentLength; // Bottom right
  const y2 = y1;
  const x3 = x2; // Top right
  const y3 = y1 - oppositeLength;

  // Colors
  const defaultColor = theme.colors.textSecondary || '#666';
  const highlightColor = '#ef4444'; // Red for highlighting
  const angleColor = theme.colors.brand || '#5865F2';

  // Determine which side should be highlighted
  const getStrokeColor = (side: string) => {
    return highlightSide === side ? highlightColor : defaultColor;
  };

  const getStrokeWidth = (side: string) => {
    return highlightSide === side ? 3 : 2;
  };

  return (
    <div className="my-4">
      <svg width={svgWidth} height={svgHeight} className="mx-auto">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill={defaultColor} />
          </marker>
        </defs>

        {/* Triangle sides */}
        {/* Adjacent (bottom) */}
        <line
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={getStrokeColor('adjacent')}
          strokeWidth={getStrokeWidth('adjacent')}
        />

        {/* Opposite (right) */}
        <line
          x1={x2}
          y1={y2}
          x2={x3}
          y2={y3}
          stroke={getStrokeColor('opposite')}
          strokeWidth={getStrokeWidth('opposite')}
        />

        {/* Hypotenuse (diagonal) */}
        <line
          x1={x1}
          y1={y1}
          x2={x3}
          y2={y3}
          stroke={getStrokeColor('hypotenuse')}
          strokeWidth={getStrokeWidth('hypotenuse')}
        />

        {/* Right angle marker */}
        {showRightAngle && (
          <rect
            x={x2 - 10}
            y={y2 - 10}
            width={10}
            height={10}
            fill="none"
            stroke={defaultColor}
            strokeWidth={2}
          />
        )}

        {/* Angle arc and label */}
        {showAngleMark && calculatedAngle > 0 && (
          <>
            <path
              d={`M ${x1 + 25} ${y1} A 25 25 0 0 0 ${x1 + 25 * Math.cos(angleRad)} ${y1 - 25 * Math.sin(angleRad)}`}
              fill="none"
              stroke={angleColor}
              strokeWidth={2}
            />
            <text
              x={x1 + 35}
              y={y1 - 8}
              className="text-sm font-semibold"
              fill={angleColor}
            >
              {showThetaLabel ? 'θ' : `${Math.round(calculatedAngle)}°`}
            </text>
          </>
        )}

        {/* Side labels */}
        {/* Adjacent label (below bottom side) */}
        {adjacent && (
          <foreignObject
            x={x1 + adjacentLength / 2 - 40}
            y={y1 + 10}
            width={80}
            height={30}
            xmlns="http://www.w3.org/1999/xhtml"
          >
            <div className="flex items-center justify-center h-full">
              <div
                className="text-base font-semibold"
                style={{ color: highlightSide === 'adjacent' ? highlightColor : defaultColor }}
              >
                <MathText>{`$${adjacent}$`}</MathText>
              </div>
            </div>
          </foreignObject>
        )}

        {/* Opposite label (right of vertical side) */}
        {opposite && (
          <foreignObject
            x={x2 + 10}
            y={y2 - oppositeLength / 2 - 15}
            width={60}
            height={30}
            xmlns="http://www.w3.org/1999/xhtml"
          >
            <div className="flex items-center justify-center h-full">
              <div
                className="text-base font-semibold"
                style={{ color: highlightSide === 'opposite' ? highlightColor : defaultColor }}
              >
                <MathText>{`$${opposite}$`}</MathText>
              </div>
            </div>
          </foreignObject>
        )}

        {/* Hypotenuse label (middle of diagonal) */}
        {hypotenuse && (
          <foreignObject
            x={x1 + (adjacentLength / 2) - 70}
            y={y1 - (oppositeLength / 2) - 25}
            width={80}
            height={30}
            xmlns="http://www.w3.org/1999/xhtml"
          >
            <div className="flex items-center justify-center h-full">
              <div
                className="text-base font-semibold"
                style={{ color: highlightSide === 'hypotenuse' ? highlightColor : defaultColor }}
              >
                <MathText>{`$${hypotenuse}$`}</MathText>
              </div>
            </div>
          </foreignObject>
        )}

        {/* Side type labels (O, A, H) in small text */}
        {showSideTypeLabels && (
          <>
            {adjacent && (
              <text
                x={x1 + adjacentLength / 2}
                y={y1 + 40}
                className="text-xs"
                textAnchor="middle"
                fill={theme.colors.textMuted}
              >
                (Adjacent)
              </text>
            )}
            {opposite && (
              <text
                x={x2 + 45}
                y={y2 - oppositeLength / 2 + 20}
                className="text-xs"
                textAnchor="middle"
                fill={theme.colors.textMuted}
              >
                (Opposite)
              </text>
            )}
            {hypotenuse && (
              <text
                x={x1 + (adjacentLength / 2) - 30}
                y={y1 - (oppositeLength / 2) - 25}
                className="text-xs"
                textAnchor="middle"
                fill={theme.colors.textMuted}
              >
                (Hypotenuse)
              </text>
            )}
          </>
        )}
      </svg>

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

export default RightTriangleVisualizer;
