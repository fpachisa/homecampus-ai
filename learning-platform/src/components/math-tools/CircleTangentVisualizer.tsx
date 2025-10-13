import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface CircleTangentVisualizerProps {
  // Single tangent mode props
  tangentPoint?: string; // point of tangency label (e.g., 'T')
  showRadius?: boolean; // show radius to tangent point (default: true)
  showRightAngle?: boolean; // show 90° marker between radius and tangent (default: false)
  tangentLabel?: string; // label for tangent line
  highlightRadius?: boolean; // highlight radius in red (default: false)
  highlightTangent?: boolean; // highlight tangent in red (default: false)

  // Two tangents mode props
  externalPoint?: string; // external point label (e.g., 'P')
  tangentPoint1?: string; // first tangent point label (e.g., 'T1')
  tangentPoint2?: string; // second tangent point label (e.g., 'T2')
  showRadii?: boolean; // show radii to tangent points (default: false)
  showTangentLengths?: boolean; // mark equal tangent lengths (default: false)
  highlightTangents?: boolean; // highlight both tangents (default: false)

  caption?: string; // optional caption
}

const CircleTangentVisualizer: React.FC<CircleTangentVisualizerProps> = ({
  tangentPoint = 'T',
  showRadius = true,
  showRightAngle = false,
  tangentLabel,
  highlightRadius = false,
  highlightTangent = false,
  externalPoint,
  tangentPoint1 = 'T1',
  tangentPoint2 = 'T2',
  showRadii = false,
  showTangentLengths = false,
  highlightTangents = false,
  caption
}) => {
  const { theme } = useTheme();

  // Detect mode: if externalPoint is provided, we're in two tangents mode
  const isTwoTangentsMode = !!externalPoint;

  // SVG dimensions and circle parameters
  const svgWidth = 450;
  const svgHeight = 400;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;
  const circleRadius = 110;

  // SINGLE TANGENT MODE positions
  const tangentAngle = 45; // degrees from horizontal
  const tangentPointX = centerX + circleRadius * Math.cos((tangentAngle * Math.PI) / 180);
  const tangentPointY = centerY - circleRadius * Math.sin((tangentAngle * Math.PI) / 180);

  // Tangent line is perpendicular to radius
  const tangentLineAngle = tangentAngle - 90;
  const tangentLineLength = 150;
  const tangentX1 = tangentPointX - (tangentLineLength / 2) * Math.cos((tangentLineAngle * Math.PI) / 180);
  const tangentY1 = tangentPointY + (tangentLineLength / 2) * Math.sin((tangentLineAngle * Math.PI) / 180);
  const tangentX2 = tangentPointX + (tangentLineLength / 2) * Math.cos((tangentLineAngle * Math.PI) / 180);
  const tangentY2 = tangentPointY - (tangentLineLength / 2) * Math.sin((tangentLineAngle * Math.PI) / 180);

  // TWO TANGENTS MODE positions
  const externalPointX = centerX + 220;
  const externalPointY = centerY;

  // Calculate tangent points for two tangents mode
  // Using geometry: tangent points are where lines from P touch the circle
  const distOP = Math.sqrt(Math.pow(externalPointX - centerX, 2) + Math.pow(externalPointY - centerY, 2));
  const tangentLength = Math.sqrt(distOP * distOP - circleRadius * circleRadius);

  // Angle from center to external point
  const angleOP = Math.atan2(externalPointY - centerY, externalPointX - centerX);

  // Angle from OP to tangent point (using cos since OT is radius and perpendicular to tangent)
  const tangentAngleOffset = Math.acos(circleRadius / distOP);

  // Tangent point 1 (upper)
  const angleT1 = angleOP - tangentAngleOffset;
  const t1X = centerX + circleRadius * Math.cos(angleT1);
  const t1Y = centerY + circleRadius * Math.sin(angleT1);

  // Tangent point 2 (lower)
  const angleT2 = angleOP + tangentAngleOffset;
  const t2X = centerX + circleRadius * Math.cos(angleT2);
  const t2Y = centerY + circleRadius * Math.sin(angleT2);

  // Helper function to ensure LaTeX expressions are properly wrapped
  const ensureLatexWrapped = (text: string | undefined): string => {
    if (!text) return '';
    if (text.startsWith('$') && text.endsWith('$')) return text;
    if (text.includes('\\')) return `$${text}$`;
    return text;
  };

  const colors = {
    primary: theme.colors.brand,
    highlight: '#FF6B6B',
    circle: theme.colors.textPrimary,
    tangent: '#3498DB',
    radius: '#2ECC71',
    muted: theme.colors.textMuted
  };

  return (
    <div
      style={{
        padding: '20px',
        borderRadius: theme.radius.lg,
        background: theme.colors.tutorMessage,
        border: `1px solid ${theme.colors.border}`,
        marginTop: '16px'
      }}
    >
      <svg
        width="100%"
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        style={{ display: 'block', margin: '0 auto' }}
      >
        {/* Main circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={circleRadius}
          fill="none"
          stroke={colors.circle}
          strokeWidth="2"
        />

        {/* SINGLE TANGENT MODE */}
        {!isTwoTangentsMode && (
          <>
            {/* Tangent line */}
            <line
              x1={tangentX1}
              y1={tangentY1}
              x2={tangentX2}
              y2={tangentY2}
              stroke={highlightTangent ? colors.highlight : colors.tangent}
              strokeWidth={highlightTangent ? 4 : 2.5}
            />

            {/* Radius to tangent point */}
            {showRadius && (
              <line
                x1={centerX}
                y1={centerY}
                x2={tangentPointX}
                y2={tangentPointY}
                stroke={highlightRadius ? colors.highlight : colors.radius}
                strokeWidth={highlightRadius ? 4 : 2.5}
              />
            )}

            {/* Right angle marker */}
            {showRightAngle && (() => {
              const markerSize = 15;

              // Direction vector from tangent point to center (radius direction)
              const dxRadius = centerX - tangentPointX;
              const dyRadius = centerY - tangentPointY;
              const lenRadius = Math.sqrt(dxRadius * dxRadius + dyRadius * dyRadius);
              const uxRadius = (dxRadius / lenRadius) * markerSize;
              const uyRadius = (dyRadius / lenRadius) * markerSize;

              // Direction vector along tangent line
              const dxTangent = tangentX2 - tangentX1;
              const dyTangent = tangentY2 - tangentY1;
              const lenTangent = Math.sqrt(dxTangent * dxTangent + dyTangent * dyTangent);
              const uxTangent = (dxTangent / lenTangent) * markerSize;
              const uyTangent = (dyTangent / lenTangent) * markerSize;

              // Square corners
              const corner1 = { x: tangentPointX + uxRadius, y: tangentPointY + uyRadius };
              const corner2 = { x: corner1.x + uxTangent, y: corner1.y + uyTangent };
              const corner3 = { x: tangentPointX + uxTangent, y: tangentPointY + uyTangent };

              return (
                <path
                  d={`M ${tangentPointX} ${tangentPointY} L ${corner1.x} ${corner1.y} L ${corner2.x} ${corner2.y} L ${corner3.x} ${corner3.y} Z`}
                  fill="white"
                  stroke={colors.highlight}
                  strokeWidth="2.5"
                />
              );
            })()}

            {/* Centre O */}
            <circle cx={centerX} cy={centerY} r="4" fill={colors.primary} />
            <text
              x={centerX - 15}
              y={centerY + 5}
              fill={theme.colors.textPrimary}
              fontSize="16"
              fontWeight="bold"
            >
              O
            </text>

            {/* Tangent point */}
            <circle cx={tangentPointX} cy={tangentPointY} r="5" fill={colors.primary} />
            <text
              x={tangentPointX + 15}
              y={tangentPointY - 10}
              fill={theme.colors.textPrimary}
              fontSize="16"
              fontWeight="bold"
            >
              {tangentPoint}
            </text>
          </>
        )}

        {/* TWO TANGENTS MODE */}
        {isTwoTangentsMode && (
          <>
            {/* Tangent line 1 */}
            <line
              x1={externalPointX}
              y1={externalPointY}
              x2={t1X}
              y2={t1Y}
              stroke={highlightTangents ? colors.highlight : colors.tangent}
              strokeWidth={highlightTangents ? 4 : 2.5}
            />

            {/* Tangent line 2 */}
            <line
              x1={externalPointX}
              y1={externalPointY}
              x2={t2X}
              y2={t2Y}
              stroke={highlightTangents ? colors.highlight : colors.tangent}
              strokeWidth={highlightTangents ? 4 : 2.5}
            />

            {/* Radii to tangent points */}
            {showRadii && (
              <>
                <line
                  x1={centerX}
                  y1={centerY}
                  x2={t1X}
                  y2={t1Y}
                  stroke={colors.radius}
                  strokeWidth="2"
                  strokeDasharray="5,3"
                />
                <line
                  x1={centerX}
                  y1={centerY}
                  x2={t2X}
                  y2={t2Y}
                  stroke={colors.radius}
                  strokeWidth="2"
                  strokeDasharray="5,3"
                />

                {/* Right angle markers */}
                {(() => {
                  const markerSize = 12;

                  // Right angle marker at T1
                  const dxRadius1 = centerX - t1X;
                  const dyRadius1 = centerY - t1Y;
                  const lenRadius1 = Math.sqrt(dxRadius1 * dxRadius1 + dyRadius1 * dyRadius1);
                  const uxRadius1 = (dxRadius1 / lenRadius1) * markerSize;
                  const uyRadius1 = (dyRadius1 / lenRadius1) * markerSize;

                  const dxTangent1 = externalPointX - t1X;
                  const dyTangent1 = externalPointY - t1Y;
                  const lenTangent1 = Math.sqrt(dxTangent1 * dxTangent1 + dyTangent1 * dyTangent1);
                  const uxTangent1 = (dxTangent1 / lenTangent1) * markerSize;
                  const uyTangent1 = (dyTangent1 / lenTangent1) * markerSize;

                  const corner1_1 = { x: t1X + uxRadius1, y: t1Y + uyRadius1 };
                  const corner1_2 = { x: corner1_1.x + uxTangent1, y: corner1_1.y + uyTangent1 };
                  const corner1_3 = { x: t1X + uxTangent1, y: t1Y + uyTangent1 };

                  // Right angle marker at T2
                  const dxRadius2 = centerX - t2X;
                  const dyRadius2 = centerY - t2Y;
                  const lenRadius2 = Math.sqrt(dxRadius2 * dxRadius2 + dyRadius2 * dyRadius2);
                  const uxRadius2 = (dxRadius2 / lenRadius2) * markerSize;
                  const uyRadius2 = (dyRadius2 / lenRadius2) * markerSize;

                  const dxTangent2 = externalPointX - t2X;
                  const dyTangent2 = externalPointY - t2Y;
                  const lenTangent2 = Math.sqrt(dxTangent2 * dxTangent2 + dyTangent2 * dyTangent2);
                  const uxTangent2 = (dxTangent2 / lenTangent2) * markerSize;
                  const uyTangent2 = (dyTangent2 / lenTangent2) * markerSize;

                  const corner2_1 = { x: t2X + uxRadius2, y: t2Y + uyRadius2 };
                  const corner2_2 = { x: corner2_1.x + uxTangent2, y: corner2_1.y + uyTangent2 };
                  const corner2_3 = { x: t2X + uxTangent2, y: t2Y + uyTangent2 };

                  return (
                    <>
                      <path
                        d={`M ${t1X} ${t1Y} L ${corner1_1.x} ${corner1_1.y} L ${corner1_2.x} ${corner1_2.y} L ${corner1_3.x} ${corner1_3.y} Z`}
                        fill="white"
                        stroke={colors.highlight}
                        strokeWidth="2"
                      />
                      <path
                        d={`M ${t2X} ${t2Y} L ${corner2_1.x} ${corner2_1.y} L ${corner2_2.x} ${corner2_2.y} L ${corner2_3.x} ${corner2_3.y} Z`}
                        fill="white"
                        stroke={colors.highlight}
                        strokeWidth="2"
                      />
                    </>
                  );
                })()}
              </>
            )}

            {/* Equal tangent length markers */}
            {showTangentLengths && (
              <>
                {/* Tick marks on PT1 */}
                <line
                  x1={(externalPointX + t1X) / 2 - 5}
                  y1={(externalPointY + t1Y) / 2 - 5}
                  x2={(externalPointX + t1X) / 2 + 5}
                  y2={(externalPointY + t1Y) / 2 + 5}
                  stroke={colors.highlight}
                  strokeWidth="2.5"
                />
                {/* Tick marks on PT2 */}
                <line
                  x1={(externalPointX + t2X) / 2 - 5}
                  y1={(externalPointY + t2Y) / 2 - 5}
                  x2={(externalPointX + t2X) / 2 + 5}
                  y2={(externalPointY + t2Y) / 2 + 5}
                  stroke={colors.highlight}
                  strokeWidth="2.5"
                />
              </>
            )}

            {/* Line from O to P (for reference) */}
            <line
              x1={centerX}
              y1={centerY}
              x2={externalPointX}
              y2={externalPointY}
              stroke={colors.muted}
              strokeWidth="1"
              strokeDasharray="3,3"
              opacity="0.5"
            />

            {/* Centre O */}
            <circle cx={centerX} cy={centerY} r="4" fill={colors.primary} />
            <text
              x={centerX}
              y={centerY - 15}
              fill={theme.colors.textPrimary}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >
              O
            </text>

            {/* External point P */}
            <circle cx={externalPointX} cy={externalPointY} r="5" fill={colors.primary} />
            <text
              x={externalPointX + 15}
              y={externalPointY + 5}
              fill={theme.colors.textPrimary}
              fontSize="16"
              fontWeight="bold"
            >
              {externalPoint}
            </text>

            {/* Tangent point 1 */}
            <circle cx={t1X} cy={t1Y} r="5" fill={colors.primary} />
            <text
              x={t1X - 10}
              y={t1Y - 15}
              fill={theme.colors.textPrimary}
              fontSize="16"
              fontWeight="bold"
            >
              {tangentPoint1}
            </text>

            {/* Tangent point 2 */}
            <circle cx={t2X} cy={t2Y} r="5" fill={colors.primary} />
            <text
              x={t2X - 10}
              y={t2Y + 25}
              fill={theme.colors.textPrimary}
              fontSize="16"
              fontWeight="bold"
            >
              {tangentPoint2}
            </text>
          </>
        )}
      </svg>

      {/* Caption */}
      {caption && (
        <div
          style={{
            marginTop: '12px',
            fontSize: '14px',
            color: theme.colors.textMuted,
            textAlign: 'center',
            fontStyle: 'italic'
          }}
        >
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default CircleTangentVisualizer;
