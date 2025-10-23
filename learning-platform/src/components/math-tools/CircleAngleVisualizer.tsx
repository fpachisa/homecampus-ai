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
  arcAngleDegrees?: number; // angle of arc AB at centre (default: 80) - controls diagram shape
  showAngleCentre?: boolean; // show angle AOB at centre (default: true)
  showAngleCircumference?: boolean; // show angle ACB at circumference (default: true)
  angleCentreLabel?: string; // label for centre angle (e.g., '$2\\theta$')
  angleCircumferenceLabel?: string; // label for circumference angle (e.g., '$\\theta$')
  highlightArc?: boolean; // highlight the arc AB (default: false)

  // Same arc mode props
  circumferencePoint2?: string; // second point on circumference (e.g., 'D')
  oppositeSegments?: boolean; // position C and D on opposite sides of chord AB (default: false)
  showAngle1?: boolean; // show angle ACB (default: true)
  showAngle2?: boolean; // show angle ADB (default: true)
  angleLabel?: string; // common label for both angles (e.g., '$\\theta$')
  angleLabel2?: string; // optional separate label for second angle (e.g., '?')
  highlightSegment?: boolean; // shade the segment containing the angles (default: false)
  // Note: same arc mode also uses arcAngleDegrees from angle at centre mode

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
  arcAngleDegrees = 80,
  showAngleCentre = true,
  showAngleCircumference = true,
  angleCentreLabel,
  angleCircumferenceLabel,
  highlightArc = false,
  circumferencePoint2,
  oppositeSegments = false,
  showAngle1 = true,
  showAngle2 = true,
  angleLabel,
  angleLabel2,
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
    // Position A and B to create visual arc based on arcAngleDegrees
    // Center the arc at 90° (top), spread symmetrically based on arcAngleDegrees
    const halfArc = arcAngleDegrees / 2;
    pointAAngle = 90 + halfArc; // upper-left from top
    pointBAngle = 90 - halfArc; // upper-right from top
    angleCDeg = 270; // C at bottom, looking up at arc AB
  } else if (isSameArcMode) {
    // For same arc mode, A and B form the chord at the top, using arcAngleDegrees
    const halfArc = arcAngleDegrees / 2;
    pointAAngle = 90 + halfArc; // upper-left from top
    pointBAngle = 90 - halfArc; // upper-right from top

    if (oppositeSegments) {
      // Position C and D on OPPOSITE sides of chord AB
      // C on minor arc (above/top), D on major arc (below/bottom)
      angleCDeg = 90; // C at top (on minor arc AB)
      angleDDeg = 270; // D at bottom (on major arc AB)
    } else {
      // Both C and D on the same segment (major arc below)
      // Position them symmetrically in the major arc
      angleCDeg = 235; // C at 235° (bottom-left, on major arc)
      angleDDeg = 305; // D at 305° (bottom-right, on major arc)
    }
  } else {
    // For semicircle mode, use diameter (180° apart)
    pointAAngle = 180;
    pointBAngle = 0;
    angleCDeg = 90; // top of circle
  }

  // Point A (using mathematical coordinates: Y- goes up)
  const pointAX = centerX + circleRadius * Math.cos((pointAAngle * Math.PI) / 180);
  const pointAY = centerY - circleRadius * Math.sin((pointAAngle * Math.PI) / 180);

  // Point A label position (radially outward)
  const labelAOffset = 25;
  const labelAX = centerX + (circleRadius + labelAOffset) * Math.cos((pointAAngle * Math.PI) / 180);
  const labelAY = centerY - (circleRadius + labelAOffset) * Math.sin((pointAAngle * Math.PI) / 180);

  // Point B (using mathematical coordinates: Y- goes up)
  const pointBX = centerX + circleRadius * Math.cos((pointBAngle * Math.PI) / 180);
  const pointBY = centerY - circleRadius * Math.sin((pointBAngle * Math.PI) / 180);

  // Point B label position (radially outward)
  const labelBOffset = 25;
  const labelBX = centerX + (circleRadius + labelBOffset) * Math.cos((pointBAngle * Math.PI) / 180);
  const labelBY = centerY - (circleRadius + labelBOffset) * Math.sin((pointBAngle * Math.PI) / 180);

  // Point C (using mathematical coordinates: Y- goes up)
  const pointCX = centerX + circleRadius * Math.cos((angleCDeg * Math.PI) / 180);
  const pointCY = centerY - circleRadius * Math.sin((angleCDeg * Math.PI) / 180);

  // Point C label position (radially outward to avoid overlap with right angle marker)
  const labelCOffset = showRightAngleMarker ? 35 : 20; // Extra offset when right angle marker shown
  const labelCX = centerX + (circleRadius + labelCOffset) * Math.cos((angleCDeg * Math.PI) / 180);
  const labelCY = centerY - (circleRadius + labelCOffset) * Math.sin((angleCDeg * Math.PI) / 180);

  // Point D (only for same arc mode) (using mathematical coordinates: Y- goes up)
  const pointDX = centerX + circleRadius * Math.cos(((angleDDeg || 50) * Math.PI) / 180);
  const pointDY = centerY - circleRadius * Math.sin(((angleDDeg || 50) * Math.PI) / 180);

  // Point D label position (radially outward)
  const labelDOffset = 20;
  const labelDX = centerX + (circleRadius + labelDOffset) * Math.cos(((angleDDeg || 50) * Math.PI) / 180);
  const labelDY = centerY - (circleRadius + labelDOffset) * Math.sin(((angleDDeg || 50) * Math.PI) / 180);

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

  // Helper to get text anchor based on angle (for proper label positioning)
  const getTextAnchor = (angleDeg: number): {
    textAnchor: 'start' | 'middle' | 'end';
    dominantBaseline: 'auto' | 'middle' | 'hanging'
  } => {
    // Normalize angle to 0-360
    const normalizedAngle = ((angleDeg % 360) + 360) % 360;

    let textAnchor: 'start' | 'middle' | 'end' = 'middle';
    let dominantBaseline: 'auto' | 'middle' | 'hanging' = 'middle';

    // Determine horizontal alignment
    if (normalizedAngle > 45 && normalizedAngle < 135) {
      // Top half
      textAnchor = 'middle';
      dominantBaseline = 'auto'; // Text below the anchor point
    } else if (normalizedAngle >= 135 && normalizedAngle < 225) {
      // Left half
      textAnchor = 'end'; // Text to the left of anchor point
      dominantBaseline = 'middle';
    } else if (normalizedAngle >= 225 && normalizedAngle < 315) {
      // Bottom half
      textAnchor = 'middle';
      dominantBaseline = 'hanging'; // Text above the anchor point
    } else {
      // Right half (315-360 and 0-45)
      textAnchor = 'start'; // Text to the right of anchor point
      dominantBaseline = 'middle';
    }

    return { textAnchor, dominantBaseline };
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
            <text x={labelAX} y={labelAY} fill={theme.colors.textPrimary} fontSize="16" fontWeight="bold" {...getTextAnchor(pointAAngle)}>{pointALabel}</text>

            <circle cx={pointBX} cy={pointBY} r="5" fill={colors.primary} />
            <text x={labelBX} y={labelBY} fill={theme.colors.textPrimary} fontSize="16" fontWeight="bold" {...getTextAnchor(pointBAngle)}>{pointBLabel}</text>

            <circle cx={pointCX} cy={pointCY} r="5" fill={colors.primary} />
            <text x={labelCX} y={labelCY} fill={theme.colors.textPrimary} fontSize="16" fontWeight="bold" {...getTextAnchor(angleCDeg)}>{pointCLabel}</text>
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
            <text x={labelAX} y={labelAY} fill={theme.colors.textPrimary} fontSize="16" fontWeight="bold" {...getTextAnchor(pointAAngle)}>{pointALabel}</text>

            <circle cx={pointBX} cy={pointBY} r="5" fill={colors.primary} />
            <text x={labelBX} y={labelBY} fill={theme.colors.textPrimary} fontSize="16" fontWeight="bold" {...getTextAnchor(pointBAngle)}>{pointBLabel}</text>

            <circle cx={pointCX} cy={pointCY} r="5" fill={colors.primary} />
            <text x={labelCX} y={labelCY} fill={theme.colors.textPrimary} fontSize="16" fontWeight="bold" {...getTextAnchor(angleCDeg)}>{pointCLabel}</text>
          </>
        )}

        {/* SAME ARC MODE */}
        {isSameArcMode && (
          <>
            {/* Major segment highlighting (containing points C and D) */}
            {highlightSegment && (
              <path
                d={`M ${pointAX} ${pointAY} A ${circleRadius} ${circleRadius} 0 1 0 ${pointBX} ${pointBY} L ${pointAX} ${pointAY} Z`}
                fill={colors.segment}
                stroke="none"
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
              <>
                <path
                  d={drawAngleArc({ x: pointCX, y: pointCY }, { x: pointAX, y: pointAY }, { x: pointBX, y: pointBY }, 30)}
                  fill="none"
                  stroke={colors.angle}
                  strokeWidth="2.5"
                  opacity="0.8"
                />
                {angleLabel && (() => {
                  const labelPos = getAngleLabelPosition(
                    { x: pointCX, y: pointCY },
                    { x: pointAX, y: pointAY },
                    { x: pointBX, y: pointBY },
                    45
                  );
                  return (
                    <foreignObject
                      x={labelPos.x - 30}
                      y={labelPos.y - 15}
                      width="60"
                      height="30"
                    >
                      <div style={{ display: 'flex', justifyContent: 'center', color: colors.angle, fontSize: '16px', fontWeight: 'bold' }}>
                        <MathText>{ensureLatexWrapped(angleLabel)}</MathText>
                      </div>
                    </foreignObject>
                  );
                })()}
              </>
            )}

            {/* Angle at D */}
            {showAngle2 && (
              <>
                <path
                  d={drawAngleArc({ x: pointDX, y: pointDY }, { x: pointAX, y: pointAY }, { x: pointBX, y: pointBY }, 30)}
                  fill="none"
                  stroke={colors.angle}
                  strokeWidth="2.5"
                  opacity="0.8"
                />
                {(angleLabel2 || angleLabel) && (() => {
                  const labelPos = getAngleLabelPosition(
                    { x: pointDX, y: pointDY },
                    { x: pointAX, y: pointAY },
                    { x: pointBX, y: pointBY },
                    45
                  );
                  return (
                    <foreignObject
                      x={labelPos.x - 30}
                      y={labelPos.y - 15}
                      width="60"
                      height="30"
                    >
                      <div style={{ display: 'flex', justifyContent: 'center', color: colors.angle, fontSize: '16px', fontWeight: 'bold' }}>
                        <MathText>{ensureLatexWrapped(angleLabel2 || angleLabel)}</MathText>
                      </div>
                    </foreignObject>
                  );
                })()}
              </>
            )}

            {/* Centre O */}
            <circle cx={centerX} cy={centerY} r="4" fill={colors.primary} />
            <text x={centerX + 10} y={centerY - 10} fill={theme.colors.textPrimary} fontSize="14" fontWeight="bold">O</text>

            {/* Points - A and B are at top (chord), C and D are at bottom (arc) */}
            {/* Calculate label positions based on angle to ensure they're outside the circle */}
            <circle cx={pointAX} cy={pointAY} r="5" fill={colors.primary} />
            <text
              x={labelAX}
              y={labelAY}
              fill={theme.colors.textPrimary}
              fontSize="16"
              fontWeight="bold"
              {...getTextAnchor(pointAAngle)}
            >{pointALabel}</text>

            <circle cx={pointBX} cy={pointBY} r="5" fill={colors.primary} />
            <text
              x={labelBX}
              y={labelBY}
              fill={theme.colors.textPrimary}
              fontSize="16"
              fontWeight="bold"
              {...getTextAnchor(pointBAngle)}
            >{pointBLabel}</text>

            <circle cx={pointCX} cy={pointCY} r="5" fill={colors.primary} />
            <text
              x={labelCX}
              y={labelCY}
              fill={theme.colors.textPrimary}
              fontSize="16"
              fontWeight="bold"
              {...getTextAnchor(angleCDeg)}
            >{pointCLabel}</text>

            <circle cx={pointDX} cy={pointDY} r="5" fill={colors.primary} />
            <text
              x={labelDX}
              y={labelDY}
              fill={theme.colors.textPrimary}
              fontSize="16"
              fontWeight="bold"
              {...getTextAnchor(angleDDeg || 50)}
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
