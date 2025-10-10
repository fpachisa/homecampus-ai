import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface BearingPoint {
  label: string; // Point label (e.g., "A", "B", "C")
  bearing?: number; // Bearing FROM this point (clockwise from North, 0-360)
  backBearing?: number; // Optional back bearing TO this point
}

interface BearingLeg {
  distance?: string; // Distance label (e.g., "368 km", "472 km")
  fromPoint: number; // Index of starting point
  toPoint: number; // Index of ending point
}

interface BearingsVisualizerProps {
  // Multi-point navigation
  points: BearingPoint[]; // Array of waypoints (minimum 2, supports 3+)
  legs: BearingLeg[]; // Connections between points with distances

  // Interior angles (e.g., angle between two path segments at a waypoint)
  showInteriorAngles?: boolean; // Show interior angles between consecutive legs
  interiorAngleLabel?: string; // Label for interior angle (e.g., "θ")

  // Display options
  showCompassRose?: boolean; // Show N/E/S/W compass rose at first point
  showNorthLines?: boolean; // Show North reference lines at all points
  highlightPoint?: number; // Index of point to highlight

  caption?: string; // Optional caption explaining the diagram
}

const BearingsVisualizer: React.FC<BearingsVisualizerProps> = ({
  points,
  legs,
  showInteriorAngles = false,
  interiorAngleLabel = 'θ',
  showCompassRose = true,
  showNorthLines = true,
  highlightPoint = -1,
  caption
}) => {
  const { theme } = useTheme();

  // SVG dimensions - Optimized for visibility
  const svgWidth = 650;
  const svgHeight = 400;
  const padding = 40; // Padding from edges

  // Calculate point positions based on bearings
  // Start with first point at a fixed position
  const positions: Array<{ x: number; y: number }> = [];
  const distanceScale = 180; // pixels per "unit" distance

  // Position first point - bottom-left area with minimal top space
  positions.push({ x: 200, y: svgHeight - padding - 80 });

  // Calculate subsequent points based on bearings and topology
  for (let i = 1; i < points.length; i++) {
    const previousLeg = legs.find(leg => leg.toPoint === i);
    if (previousLeg) {
      const fromPos = positions[previousLeg.fromPoint];
      const bearing = points[previousLeg.fromPoint].bearing ?? 0;

      // Convert bearing to math angle (bearing: clockwise from North; math: counterclockwise from East)
      const mathAngle = 90 - bearing;
      const rad = (mathAngle * Math.PI) / 180;

      positions.push({
        x: fromPos.x + distanceScale * Math.cos(rad),
        y: fromPos.y - distanceScale * Math.sin(rad)
      });
    } else {
      // Fallback: place point arbitrarily if no connection defined
      positions.push({ x: centerX + i * 50, y: centerY + i * 50 });
    }
  }

  const northLineLength = 120; // INCREASED from 80

  const colors = {
    primary: theme.colors.brand,
    highlight: '#FF6B6B',
    muted: theme.colors.textMuted,
    compass: '#4ECDC4',
    northLine: '#00BFFF',
    bearingLine: '#3498DB',
    bearingArc: '#FF3333', // Brighter red for better visibility
    interiorAngle: '#9B59B6'
  };

  // Helper: Calculate interior angle at a point (angle between incoming and outgoing paths)
  const getInteriorAngle = (pointIndex: number): number | null => {
    const incomingLeg = legs.find(leg => leg.toPoint === pointIndex);
    const outgoingLeg = legs.find(leg => leg.fromPoint === pointIndex);

    if (!incomingLeg || !outgoingLeg) return null;

    const incomingBearing = points[incomingLeg.fromPoint].bearing ?? 0;
    const outgoingBearing = points[pointIndex].bearing ?? 0;

    // Interior angle is the difference between outgoing and incoming bearings
    let angle = outgoingBearing - incomingBearing;
    if (angle < 0) angle += 360;
    if (angle > 180) angle = 360 - angle; // Use smaller angle

    return angle;
  };

  return (
    <div
      style={{
        padding: '12px',
        borderRadius: theme.radius.lg,
        background: theme.colors.tutorMessage,
        border: `1px solid ${theme.colors.border}`,
        marginTop: '12px'
      }}
    >
      <svg
        width="100%"
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        style={{ display: 'block', margin: '0 auto' }}
      >
        {/* ============================================ */}
        {/* NORTH REFERENCE LINES */}
        {/* ============================================ */}
        {showNorthLines && positions.map((pos, idx) => (
          <g key={`north-${idx}`}>
            <line
              x1={pos.x}
              y1={pos.y}
              x2={pos.x}
              y2={pos.y - northLineLength}
              stroke={colors.northLine}
              strokeWidth="4"
              strokeDasharray="10,6"
              opacity="1"
            />
            <text
              x={pos.x + 15}
              y={pos.y - northLineLength - 8}
              fill={colors.northLine}
              fontSize="18"
              fontWeight="bold"
            >
              N
            </text>
          </g>
        ))}

        {/* ============================================ */}
        {/* COMPASS ROSE AT FIRST POINT */}
        {/* ============================================ */}
        {showCompassRose && positions.length > 0 && (
          <>
            <circle
              cx={positions[0].x}
              cy={positions[0].y}
              r="70"
              fill="none"
              stroke={colors.compass}
              strokeWidth="2"
              opacity="0.4"
            />
            {[
              { angle: 0, label: 'N', offset: -60 },
              { angle: 90, label: 'E', offset: 60 },
              { angle: 180, label: 'S', offset: 60 },
              { angle: 270, label: 'W', offset: -60 }
            ].map(({ angle, label }) => {
              const mathAngle = 90 - angle;
              const rad = (mathAngle * Math.PI) / 180;
              const x = positions[0].x + 70 * Math.cos(rad);
              const y = positions[0].y - 70 * Math.sin(rad);
              return (
                <text
                  key={label}
                  x={x}
                  y={y + 5}
                  fill={colors.compass}
                  fontSize="16"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {label}
                </text>
              );
            })}
          </>
        )}

        {/* ============================================ */}
        {/* PATH LEGS (BEARING LINES) */}
        {/* ============================================ */}
        {legs.map((leg, idx) => {
          const fromPos = positions[leg.fromPoint];
          const toPos = positions[leg.toPoint];
          const bearing = points[leg.fromPoint].bearing;

          // Handle single-point bearing visualization (fromPoint === toPoint)
          const isSinglePointBearing = leg.fromPoint === leg.toPoint;

          // Calculate endpoint for single-point bearing line
          let lineEndX = toPos.x;
          let lineEndY = toPos.y;

          if (isSinglePointBearing && bearing !== undefined && bearing !== null) {
            // Draw bearing line from point in the bearing direction
            const bearingLineLength = 140;
            const mathAngle = 90 - bearing;
            const rad = (mathAngle * Math.PI) / 180;
            lineEndX = fromPos.x + bearingLineLength * Math.cos(rad);
            lineEndY = fromPos.y - bearingLineLength * Math.sin(rad);
          }

          return (
            <g key={`leg-${idx}`}>
              {/* Line connecting points OR showing bearing direction */}
              <line
                x1={fromPos.x}
                y1={fromPos.y}
                x2={lineEndX}
                y2={lineEndY}
                stroke={colors.bearingLine}
                strokeWidth="5"
                markerEnd={`url(#arrowhead-${idx})`}
              />

              {/* Bearing arc at starting point */}
              {bearing !== undefined && bearing !== null && (
                <path
                  d={`M ${fromPos.x} ${fromPos.y - 50}
                      A 50 50 0 ${bearing > 180 ? 1 : 0} 1
                      ${fromPos.x + 50 * Math.sin((bearing * Math.PI) / 180)}
                      ${fromPos.y - 50 * Math.cos((bearing * Math.PI) / 180)}`}
                  fill="none"
                  stroke={colors.bearingArc}
                  strokeWidth="3"
                />
              )}

              {/* Bearing angle label */}
              {bearing !== undefined && bearing !== null && (
                <>
                  {/* Calculate label position - place it at half the bearing angle for better positioning */}
                  {(() => {
                    const labelAngle = bearing / 2; // Midpoint of the arc
                    const labelRadius = 65; // Inside the arc
                    const labelX = fromPos.x + labelRadius * Math.sin((labelAngle * Math.PI) / 180);
                    const labelY = fromPos.y - labelRadius * Math.cos((labelAngle * Math.PI) / 180);

                    return (
                      <>
                        {/* White background for better visibility */}
                        <text
                          x={labelX}
                          y={labelY + 5}
                          fill="white"
                          fontSize="20"
                          fontWeight="bold"
                          stroke="white"
                          strokeWidth="4"
                          paintOrder="stroke"
                          textAnchor="middle"
                        >
                          {bearing}°
                        </text>
                        <text
                          x={labelX}
                          y={labelY + 5}
                          fill={colors.bearingArc}
                          fontSize="20"
                          fontWeight="bold"
                          textAnchor="middle"
                        >
                          {bearing}°
                        </text>
                      </>
                    );
                  })()}
                </>
              )}

              {/* Distance label (midpoint) - only for multi-point paths */}
              {leg.distance && !isSinglePointBearing && (
                <text
                  x={(fromPos.x + toPos.x) / 2 + 25}
                  y={(fromPos.y + toPos.y) / 2 - 5}
                  fill={theme.colors.textPrimary}
                  fontSize="19"
                  fontWeight="bold"
                >
                  <MathText>{leg.distance}</MathText>
                </text>
              )}

              {/* Arrow marker definition */}
              <defs>
                <marker
                  id={`arrowhead-${idx}`}
                  markerWidth="8"
                  markerHeight="8"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3.5, 0 7" fill={colors.bearingLine} />
                </marker>
              </defs>
            </g>
          );
        })}

        {/* ============================================ */}
        {/* BACK BEARINGS (if provided) */}
        {/* ============================================ */}
        {points.map((point, idx) => {
          if (!point.backBearing) return null;
          const pos = positions[idx];

          return (
            <g key={`back-bearing-${idx}`}>
              <path
                d={`M ${pos.x} ${pos.y - 55}
                    A 55 55 0 ${point.backBearing > 180 ? 1 : 0} 1
                    ${pos.x + 55 * Math.sin((point.backBearing * Math.PI) / 180)}
                    ${pos.y - 55 * Math.cos((point.backBearing * Math.PI) / 180)}`}
                fill="none"
                stroke={colors.highlight}
                strokeWidth="3"
                strokeDasharray="5,5"
              />
              {(() => {
                const labelAngle = point.backBearing / 2; // Midpoint of the arc
                const labelRadius = 70; // Inside the arc
                const labelX = pos.x + labelRadius * Math.sin((labelAngle * Math.PI) / 180);
                const labelY = pos.y - labelRadius * Math.cos((labelAngle * Math.PI) / 180);

                return (
                  <>
                    {/* White background for better visibility */}
                    <text
                      x={labelX}
                      y={labelY + 5}
                      fill="white"
                      fontSize="20"
                      fontWeight="bold"
                      stroke="white"
                      strokeWidth="4"
                      paintOrder="stroke"
                      textAnchor="middle"
                    >
                      {point.backBearing}°
                    </text>
                    <text
                      x={labelX}
                      y={labelY + 5}
                      fill={colors.highlight}
                      fontSize="20"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {point.backBearing}°
                    </text>
                  </>
                );
              })()}
            </g>
          );
        })}

        {/* ============================================ */}
        {/* INTERIOR ANGLES */}
        {/* ============================================ */}
        {showInteriorAngles && positions.map((pos, idx) => {
          const interiorAngle = getInteriorAngle(idx);
          if (interiorAngle === null) return null;

          const incomingLeg = legs.find(leg => leg.toPoint === idx);
          if (!incomingLeg) return null;

          const incomingBearing = points[incomingLeg.fromPoint].bearing ?? 0;
          const outgoingBearing = points[idx].bearing ?? 0;

          // Draw arc from incoming to outgoing bearing
          const arcRadius = 35;
          const startAngle = incomingBearing;
          const endAngle = outgoingBearing;

          return (
            <g key={`interior-${idx}`}>
              <path
                d={`M ${pos.x + arcRadius * Math.sin((startAngle * Math.PI) / 180)}
                    ${pos.y - arcRadius * Math.cos((startAngle * Math.PI) / 180)}
                    A ${arcRadius} ${arcRadius} 0 ${Math.abs(endAngle - startAngle) > 180 ? 1 : 0} ${endAngle > startAngle ? 1 : 0}
                    ${pos.x + arcRadius * Math.sin((endAngle * Math.PI) / 180)}
                    ${pos.y - arcRadius * Math.cos((endAngle * Math.PI) / 180)}`}
                fill="none"
                stroke={colors.interiorAngle}
                strokeWidth="3"
              />
              <text
                x={pos.x - 20}
                y={pos.y + 10}
                fill={colors.interiorAngle}
                fontSize="20"
                fontWeight="bold"
              >
                <MathText>{interiorAngleLabel}</MathText>
              </text>
            </g>
          );
        })}

        {/* ============================================ */}
        {/* WAYPOINTS (POINTS) */}
        {/* ============================================ */}
        {positions.map((pos, idx) => (
          <g key={`point-${idx}`}>
            <circle
              cx={pos.x}
              cy={pos.y}
              r={highlightPoint === idx ? 10 : 8}
              fill={highlightPoint === idx ? colors.highlight : colors.primary}
            />
            <text
              x={pos.x}
              y={pos.y + 30}
              fill={theme.colors.textPrimary}
              fontSize="22"
              fontWeight="bold"
              textAnchor="middle"
            >
              {points[idx].label}
            </text>
          </g>
        ))}
      </svg>

      {/* Caption */}
      {caption && (
        <div
          style={{
            marginTop: '16px',
            fontSize: '16px',
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

export default BearingsVisualizer;
