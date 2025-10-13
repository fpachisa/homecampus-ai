import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface CircleAngleVisualizerProps {
  // Semicircle mode props
  diameter?: string; // diameter endpoints label (e.g., 'AB')
  pointOnCircle?: string; // point on circumference (e.g., 'C')
  showAngle?: boolean; // show angle at circumference (default: true)
  showRightAngleMarker?: boolean; // show 90° marker at point C (default: false)
  highlightDiameter?: boolean; // highlight diameter in red (default: false)

  // Angle at centre mode props
  arcPoints?: string; // arc endpoints (e.g., 'AB')
  circumferencePoint1?: string; // point on circumference (e.g., 'C')
  showAngleCentre?: boolean; // show angle AOB at centre (default: true)
  showAngleCircumference?: boolean; // show angle ACB at circumference (default: true)
  angleCentreLabel?: string; // label for centre angle (e.g., '$2\\theta$')
  angleCircumferenceLabel?: string; // label for circumference angle (e.g., '$\\theta$')
  highlightArc?: boolean; // highlight the arc AB (default: false)

  // Same arc mode props
  circumferencePoint2?: string; // second point on circumference (e.g., 'D')
  showAngle1?: boolean; // show angle ACB (default: true)
  showAngle2?: boolean; // show angle ADB (default: true)
  angleLabel?: string; // common label for both angles (e.g., '$\\theta$')
  highlightSegment?: boolean; // shade the segment containing the angles (default: false)

  caption?: string; // optional caption
}

const CircleAngleVisualizer: React.FC<CircleAngleVisualizerProps> = ({
  diameter,
  pointOnCircle,
  showAngle = true,
  showRightAngleMarker = false,
  highlightDiameter = false,
  arcPoints,
  circumferencePoint1,
  showAngleCentre = true,
  showAngleCircumference = true,
  angleCentreLabel,
  angleCircumferenceLabel,
  highlightArc = false,
  circumferencePoint2,
  showAngle1 = true,
  showAngle2 = true,
  angleLabel,
  highlightSegment = false,
  caption
}) => {
  const { theme } = useTheme();

  // Detect mode
  const isSemicircleMode = !!diameter;
  const isSameArcMode = !!circumferencePoint2;
  const isAngleCentreMode = !isSemicircleMode && !isSameArcMode;

  // SVG dimensions and circle parameters
  const svgWidth = 450;
  const svgHeight = 400;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;
  const circleRadius = 130;

  // Parse labels
  let pointALabel = '', pointBLabel = '', pointCLabel = '', pointDLabel = '';

  if (isSemicircleMode && diameter) {
    pointALabel = diameter.charAt(0);
    pointBLabel = diameter.charAt(1);
    pointCLabel = pointOnCircle || 'C';
  } else if (arcPoints) {
    pointALabel = arcPoints.charAt(0);
    pointBLabel = arcPoints.charAt(1);
    pointCLabel = circumferencePoint1 || 'C';
    pointDLabel = circumferencePoint2 || '';
  }

  // Calculate positions
  // Different positioning for each mode
  let pointAAngle, pointBAngle, angleCDeg, angleDDeg;

  if (isAngleCentreMode) {
    // Position P and Q such that they create a nice arc (not a diameter)
    // P at 200°, Q at 340° (this creates a 140° arc)
    pointAAngle = 200;
    pointBAngle = 340;
    angleCDeg = 280; // R on the major arc between P and Q
  } else if (isSameArcMode) {
    // For same arc mode, A and B form the chord at the top
    // A at 145° (top-left), B at 35° (top-right)
    pointAAngle = 145;
    pointBAngle = 35;
    // C and D should both be on the major arc (lower portion)
    // Position them so lines don't pass through center
    angleCDeg = 235; // C at 235° (bottom-left, on major arc)
    angleDDeg = 305; // D at 305° (bottom-right, on major arc)
  } else {
    // For semicircle mode, use diameter (180° apart)
    pointAAngle = 180;
    pointBAngle = 0;
    angleCDeg = 90; // top of circle
  }

  // Point A
  const pointAX = centerX + circleRadius * Math.cos((pointAAngle * Math.PI) / 180);
  const pointAY = centerY + circleRadius * Math.sin((pointAAngle * Math.PI) / 180);

  // Point B
  const pointBX = centerX + circleRadius * Math.cos((pointBAngle * Math.PI) / 180);
  const pointBY = centerY + circleRadius * Math.sin((pointBAngle * Math.PI) / 180);

  // Point C
  const pointCX = centerX + circleRadius * Math.cos((angleCDeg * Math.PI) / 180);
  const pointCY = centerY + circleRadius * Math.sin((angleCDeg * Math.PI) / 180);

  // Point D (only for same arc mode)
  const pointDX = centerX + circleRadius * Math.cos(((angleDDeg || 50) * Math.PI) / 180);
  const pointDY = centerY + circleRadius * Math.sin(((angleDDeg || 50) * Math.PI) / 180);

  // Helper to draw angle arc
  const drawAngleArc = (
    vertex: { x: number; y: number },
    point1: { x: number; y: number },
    point2: { x: number; y: number },
    radius: number = 35
  ): string => {
    const angle1 = Math.atan2(point1.y - vertex.y, point1.x - vertex.x);
    const angle2 = Math.atan2(point2.y - vertex.y, point2.x - vertex.x);

    const startX = vertex.x + radius * Math.cos(angle1);
    const startY = vertex.y + radius * Math.sin(angle1);
    const endX = vertex.x + radius * Math.cos(angle2);
    const endY = vertex.y + radius * Math.sin(angle2);

    let deltaAngle = angle2 - angle1;
    while (deltaAngle > Math.PI) deltaAngle -= 2 * Math.PI;
    while (deltaAngle < -Math.PI) deltaAngle += 2 * Math.PI;

    const largeArcFlag = Math.abs(deltaAngle) > Math.PI ? 1 : 0;
    const sweepFlag = deltaAngle > 0 ? 1 : 0;

    return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} ${sweepFlag} ${endX} ${endY}`;
  };

  // Helper to get angle label position
  const getAngleLabelPosition = (
    vertex: { x: number; y: number },
    point1: { x: number; y: number },
    point2: { x: number; y: number },
    distance: number = 50
  ): { x: number; y: number } => {
    const angle1 = Math.atan2(point1.y - vertex.y, point1.x - vertex.x);
    const angle2 = Math.atan2(point2.y - vertex.y, point2.x - vertex.x);

    let deltaAngle = angle2 - angle1;
    while (deltaAngle > Math.PI) deltaAngle -= 2 * Math.PI;
    while (deltaAngle < -Math.PI) deltaAngle += 2 * Math.PI;

    const bisectorAngle = angle1 + deltaAngle / 2;

    return {
      x: vertex.x + distance * Math.cos(bisectorAngle),
      y: vertex.y + distance * Math.sin(bisectorAngle)
    };
  };

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
    angle: '#3498DB',
    angleCentre: '#E74C3C',
    segment: 'rgba(52, 152, 219, 0.2)',
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

        {/* SEMICIRCLE MODE */}
        {isSemicircleMode && (
          <>
            {/* Segment shading (optional) */}
            {highlightSegment && (
              <path
                d={`M ${pointAX} ${pointAY} A ${circleRadius} ${circleRadius} 0 0 1 ${pointBX} ${pointBY} L ${pointAX} ${pointAY} Z`}
                fill={colors.segment}
                stroke="none"
              />
            )}

            {/* Diameter AB */}
            <line
              x1={pointAX}
              y1={pointAY}
              x2={pointBX}
              y2={pointBY}
              stroke={highlightDiameter ? colors.highlight : colors.circle}
              strokeWidth={highlightDiameter ? 4 : 2.5}
            />

            {/* Triangle sides AC and BC */}
            <line x1={pointAX} y1={pointAY} x2={pointCX} y2={pointCY} stroke={colors.circle} strokeWidth="2" />
            <line x1={pointBX} y1={pointBY} x2={pointCX} y2={pointCY} stroke={colors.circle} strokeWidth="2" />

            {/* Right angle marker at C */}
            {showRightAngleMarker && (() => {
              const markerSize = 15;

              // Direction vector from C to A (normalized)
              const dxCA = pointAX - pointCX;
              const dyCA = pointAY - pointCY;
              const lenCA = Math.sqrt(dxCA * dxCA + dyCA * dyCA);
              const uxCA = (dxCA / lenCA) * markerSize;
              const uyCA = (dyCA / lenCA) * markerSize;

              // Direction vector from C to B (normalized)
              const dxCB = pointBX - pointCX;
              const dyCB = pointBY - pointCY;
              const lenCB = Math.sqrt(dxCB * dxCB + dyCB * dyCB);
              const uxCB = (dxCB / lenCB) * markerSize;
              const uyCB = (dyCB / lenCB) * markerSize;

              // Square corners
              const corner1 = { x: pointCX + uxCA, y: pointCY + uyCA };
              const corner2 = { x: corner1.x + uxCB, y: corner1.y + uyCB };
              const corner3 = { x: pointCX + uxCB, y: pointCY + uyCB };

              return (
                <path
                  d={`M ${pointCX} ${pointCY} L ${corner1.x} ${corner1.y} L ${corner2.x} ${corner2.y} L ${corner3.x} ${corner3.y} Z`}
                  fill="white"
                  stroke={colors.highlight}
                  strokeWidth="2.5"
                />
              );
            })()}

            {/* Angle arc at C (only show if not showing right angle marker) */}
            {showAngle && !showRightAngleMarker && (
              <path
                d={drawAngleArc({ x: pointCX, y: pointCY }, { x: pointAX, y: pointAY }, { x: pointBX, y: pointBY }, 35)}
                fill="none"
                stroke={colors.angle}
                strokeWidth="2.5"
                opacity="0.8"
              />
            )}

            {/* Centre O */}
            <circle cx={centerX} cy={centerY} r="4" fill={colors.primary} />
            <text x={centerX} y={centerY + 20} fill={theme.colors.textPrimary} fontSize="14" fontWeight="bold" textAnchor="middle">
              O
            </text>

            {/* Points */}
            <circle cx={pointAX} cy={pointAY} r="5" fill={colors.primary} />
            <text x={pointAX - 15} y={pointAY + 5} fill={theme.colors.textPrimary} fontSize="16" fontWeight="bold">{pointALabel}</text>

            <circle cx={pointBX} cy={pointBY} r="5" fill={colors.primary} />
            <text x={pointBX + 15} y={pointBY + 5} fill={theme.colors.textPrimary} fontSize="16" fontWeight="bold">{pointBLabel}</text>

            <circle cx={pointCX} cy={pointCY} r="5" fill={colors.primary} />
            <text x={pointCX} y={pointCY - 15} fill={theme.colors.textPrimary} fontSize="16" fontWeight="bold" textAnchor="middle">{pointCLabel}</text>
          </>
        )}

        {/* ANGLE AT CENTRE MODE */}
        {isAngleCentreMode && !isSameArcMode && (
          <>
            {/* Arc highlight - major arc from A to B going through top */}
            {highlightArc && (
              <path
                d={`M ${pointAX} ${pointAY} A ${circleRadius} ${circleRadius} 0 1 0 ${pointBX} ${pointBY}`}
                fill="none"
                stroke={colors.highlight}
                strokeWidth="6"
                strokeLinecap="round"
                opacity="0.6"
              />
            )}

            {/* Radii from centre to A and B */}
            <line x1={centerX} y1={centerY} x2={pointAX} y2={pointAY} stroke={colors.circle} strokeWidth="2" />
            <line x1={centerX} y1={centerY} x2={pointBX} y2={pointBY} stroke={colors.circle} strokeWidth="2" />

            {/* Lines from C to A and B */}
            <line x1={pointCX} y1={pointCY} x2={pointAX} y2={pointAY} stroke={colors.circle} strokeWidth="2" />
            <line x1={pointCX} y1={pointCY} x2={pointBX} y2={pointBY} stroke={colors.circle} strokeWidth="2" />

            {/* Angle at centre O */}
            {showAngleCentre && (
              <>
                <path
                  d={drawAngleArc({ x: centerX, y: centerY }, { x: pointAX, y: pointAY }, { x: pointBX, y: pointBY }, 40)}
                  fill="none"
                  stroke={colors.angleCentre}
                  strokeWidth="3"
                  opacity="0.8"
                />
                {angleCentreLabel && (() => {
                  const labelPos = getAngleLabelPosition(
                    { x: centerX, y: centerY },
                    { x: pointAX, y: pointAY },
                    { x: pointBX, y: pointBY },
                    60
                  );
                  return (
                    <foreignObject
                      x={labelPos.x - 40}
                      y={labelPos.y - 15}
                      width="80"
                      height="30"
                    >
                      <div style={{ display: 'flex', justifyContent: 'center', color: colors.angleCentre, fontSize: '16px', fontWeight: 'bold' }}>
                        <MathText>{ensureLatexWrapped(angleCentreLabel)}</MathText>
                      </div>
                    </foreignObject>
                  );
                })()}
              </>
            )}

            {/* Angle at circumference C */}
            {showAngleCircumference && (
              <>
                <path
                  d={drawAngleArc({ x: pointCX, y: pointCY }, { x: pointAX, y: pointAY }, { x: pointBX, y: pointBY }, 35)}
                  fill="none"
                  stroke={colors.angle}
                  strokeWidth="2.5"
                  opacity="0.8"
                />
                {angleCircumferenceLabel && (() => {
                  const labelPos = getAngleLabelPosition(
                    { x: pointCX, y: pointCY },
                    { x: pointAX, y: pointAY },
                    { x: pointBX, y: pointBY },
                    50
                  );
                  return (
                    <foreignObject
                      x={labelPos.x - 30}
                      y={labelPos.y - 15}
                      width="60"
                      height="30"
                    >
                      <div style={{ display: 'flex', justifyContent: 'center', color: colors.angle, fontSize: '16px', fontWeight: 'bold' }}>
                        <MathText>{ensureLatexWrapped(angleCircumferenceLabel)}</MathText>
                      </div>
                    </foreignObject>
                  );
                })()}
              </>
            )}

            {/* Centre O */}
            <circle cx={centerX} cy={centerY} r="4" fill={colors.primary} />
            <text x={centerX} y={centerY + 20} fill={theme.colors.textPrimary} fontSize="14" fontWeight="bold" textAnchor="middle">O</text>

            {/* Points */}
            <circle cx={pointAX} cy={pointAY} r="5" fill={colors.primary} />
            <text x={pointAX - 15} y={pointAY + 5} fill={theme.colors.textPrimary} fontSize="16" fontWeight="bold">{pointALabel}</text>

            <circle cx={pointBX} cy={pointBY} r="5" fill={colors.primary} />
            <text x={pointBX + 15} y={pointBY + 5} fill={theme.colors.textPrimary} fontSize="16" fontWeight="bold">{pointBLabel}</text>

            <circle cx={pointCX} cy={pointCY} r="5" fill={colors.primary} />
            <text x={pointCX} y={pointCY - 15} fill={theme.colors.textPrimary} fontSize="16" fontWeight="bold" textAnchor="middle">{pointCLabel}</text>
          </>
        )}

        {/* SAME ARC MODE */}
        {isSameArcMode && (
          <>
            {/* Minor arc highlighting (upper arc from A to B) */}
            {highlightSegment && (
              <path
                d={`M ${pointAX} ${pointAY} A ${circleRadius} ${circleRadius} 0 0 0 ${pointBX} ${pointBY}`}
                fill="none"
                stroke={colors.highlight}
                strokeWidth="6"
                strokeLinecap="round"
                opacity="0.6"
              />
            )}

            {/* Chord AB */}
            <line x1={pointAX} y1={pointAY} x2={pointBX} y2={pointBY} stroke={colors.circle} strokeWidth="2" strokeDasharray="5,3" />

            {/* Triangle ACB */}
            <line x1={pointAX} y1={pointAY} x2={pointCX} y2={pointCY} stroke={colors.circle} strokeWidth="2" />
            <line x1={pointBX} y1={pointBY} x2={pointCX} y2={pointCY} stroke={colors.circle} strokeWidth="2" />

            {/* Triangle ADB */}
            <line x1={pointAX} y1={pointAY} x2={pointDX} y2={pointDY} stroke={colors.circle} strokeWidth="2" />
            <line x1={pointBX} y1={pointBY} x2={pointDX} y2={pointDY} stroke={colors.circle} strokeWidth="2" />

            {/* Angle at C */}
            {showAngle1 && (
              <path
                d={drawAngleArc({ x: pointCX, y: pointCY }, { x: pointAX, y: pointAY }, { x: pointBX, y: pointBY }, 30)}
                fill="none"
                stroke={colors.angle}
                strokeWidth="2.5"
                opacity="0.8"
              />
            )}

            {/* Angle at D */}
            {showAngle2 && (
              <path
                d={drawAngleArc({ x: pointDX, y: pointDY }, { x: pointAX, y: pointAY }, { x: pointBX, y: pointBY }, 30)}
                fill="none"
                stroke={colors.angle}
                strokeWidth="2.5"
                opacity="0.8"
              />
            )}

            {/* Centre O */}
            <circle cx={centerX} cy={centerY} r="4" fill={colors.primary} />
            <text x={centerX + 10} y={centerY - 10} fill={theme.colors.textPrimary} fontSize="14" fontWeight="bold">O</text>

            {/* Points - A and B are at top (chord), C and D are at bottom (arc) */}
            {/* Calculate label positions based on angle to ensure they're outside the circle */}
            <circle cx={pointAX} cy={pointAY} r="5" fill={colors.primary} />
            <text
              x={centerX + (circleRadius + 20) * Math.cos((pointAAngle * Math.PI) / 180)}
              y={centerY + (circleRadius + 20) * Math.sin((pointAAngle * Math.PI) / 180) + 5}
              fill={theme.colors.textPrimary}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >{pointALabel}</text>

            <circle cx={pointBX} cy={pointBY} r="5" fill={colors.primary} />
            <text
              x={centerX + (circleRadius + 20) * Math.cos((pointBAngle * Math.PI) / 180)}
              y={centerY + (circleRadius + 20) * Math.sin((pointBAngle * Math.PI) / 180) + 5}
              fill={theme.colors.textPrimary}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >{pointBLabel}</text>

            <circle cx={pointCX} cy={pointCY} r="5" fill={colors.primary} />
            <text
              x={centerX + (circleRadius + 20) * Math.cos((angleCDeg * Math.PI) / 180)}
              y={centerY + (circleRadius + 20) * Math.sin((angleCDeg * Math.PI) / 180) + 5}
              fill={theme.colors.textPrimary}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >{pointCLabel}</text>

            <circle cx={pointDX} cy={pointDY} r="5" fill={colors.primary} />
            <text
              x={centerX + (circleRadius + 20) * Math.cos(((angleDDeg || 50) * Math.PI) / 180)}
              y={centerY + (circleRadius + 20) * Math.sin(((angleDDeg || 50) * Math.PI) / 180) + 5}
              fill={theme.colors.textPrimary}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >{pointDLabel}</text>
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

export default CircleAngleVisualizer;
