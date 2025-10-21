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
  points = [],
  legs = [],
  showInteriorAngles = false,
  interiorAngleLabel = 'θ',
  showCompassRose = true,
  showNorthLines = true,
  highlightPoint = -1,
  caption
}) => {
  const { theme } = useTheme();

  // Validate required props
  if (!points || points.length === 0) {
    return (
      <div style={{ padding: '20px', color: theme.colors.error || 'red' }}>
        Error: BearingsVisualizer requires at least one point.
      </div>
    );
  }

  // SVG display dimensions - Fixed for consistent display size
  const displayHeight = 400;
  const padding = 60; // Padding from edges for labels and decorations
  const distanceScale = 180; // pixels per "unit" distance
  const northLineLength = 100;

  // ============================================
  // STEP 1: Calculate all point positions
  // ============================================
  const positions: Array<{ x: number; y: number }> = [];

  // Position first point - will be adjusted after bounds calculation
  positions.push({ x: 200, y: 280 });

  // Calculate subsequent points based on bearings
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
      positions.push({ x: 200 + i * 50, y: 280 + i * 50 });
    }
  }

  // ============================================
  // STEP 2: Calculate bounds of all elements
  // ============================================
  let minX = Infinity, maxX = -Infinity;
  let minY = Infinity, maxY = -Infinity;

  // Include all point positions
  positions.forEach(pos => {
    minX = Math.min(minX, pos.x);
    maxX = Math.max(maxX, pos.x);
    minY = Math.min(minY, pos.y);
    maxY = Math.max(maxY, pos.y);
  });

  // Account for north lines extending upward
  positions.forEach(pos => {
    minY = Math.min(minY, pos.y - northLineLength - 20); // +20 for "N" label
  });

  // Account for compass rose at first point (if enabled)
  if (showCompassRose && positions.length > 0) {
    const compassRadius = 70;
    minX = Math.min(minX, positions[0].x - compassRadius);
    maxX = Math.max(maxX, positions[0].x + compassRadius);
    minY = Math.min(minY, positions[0].y - compassRadius);
    maxY = Math.max(maxY, positions[0].y + compassRadius);
  }

  // Account for bearing arcs and labels (extend ~70px from points)
  positions.forEach(pos => {
    const arcExtent = 75; // Slightly larger to account for labels
    minX = Math.min(minX, pos.x - arcExtent);
    maxX = Math.max(maxX, pos.x + arcExtent);
    minY = Math.min(minY, pos.y - arcExtent);
    maxY = Math.max(maxY, pos.y + arcExtent);
  });

  // Account for bearing lines in single-point bearings
  legs.forEach(leg => {
    if (leg.fromPoint === leg.toPoint) {
      const pos = positions[leg.fromPoint];
      const bearing = points[leg.fromPoint].bearing;
      if (bearing !== undefined && bearing !== null) {
        const bearingLineLength = 140;
        const mathAngle = 90 - bearing;
        const rad = (mathAngle * Math.PI) / 180;
        const lineEndX = pos.x + bearingLineLength * Math.cos(rad);
        const lineEndY = pos.y - bearingLineLength * Math.sin(rad);
        minX = Math.min(minX, lineEndX);
        maxX = Math.max(maxX, lineEndX);
        minY = Math.min(minY, lineEndY);
        maxY = Math.max(maxY, lineEndY);
      }
    }
  });

  // ============================================
  // STEP 3: Apply padding and create viewBox
  // ============================================
  const viewBoxMinX = minX - padding;
  const viewBoxMinY = minY - padding;
  const viewBoxWidth = (maxX - minX) + (2 * padding);
  const viewBoxHeight = (maxY - minY) + (2 * padding);

  const colors = {
    primary: theme.colors.brand,
    highlight: '#FF6B6B',
    muted: theme.colors.textMuted,
    compass: '#4ECDC4',
    northLine: '#00BFFF',
    bearingLine: '#3498DB',
    bearingArc: '#FF3333' // Brighter red for better visibility
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
        height={displayHeight}
        viewBox={`${viewBoxMinX} ${viewBoxMinY} ${viewBoxWidth} ${viewBoxHeight}`}
        style={{ display: 'block', margin: '0 auto' }}
        preserveAspectRatio="xMidYMid meet"
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
              strokeWidth="2"
              strokeDasharray="10,6"
              opacity="1"
            />
            <text
              x={pos.x + 15}
              y={pos.y - northLineLength - 8}
              fill={colors.northLine}
              fontSize="16"
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
                strokeWidth="2.5"
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
                  strokeWidth="1.8"
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
                          fontSize="18"
                          stroke="white"
                          strokeWidth="2"
                          paintOrder="stroke"
                          textAnchor="middle"
                        >
                          {bearing}°
                        </text>
                        <text
                          x={labelX}
                          y={labelY + 5}
                          fill={colors.bearingArc}
                          fontSize="18"
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
                  markerWidth="5"
                  markerHeight="5"
                  refX="5"
                  refY="2.5"
                  orient="auto"
                >
                  <polygon points="0 0, 4 2.5, 0 5" fill={colors.bearingLine} />
                </marker>
              </defs>
            </g>
          );
        })}

        {/* ============================================ */}
        {/* WAYPOINTS (POINTS) */}
        {/* ============================================ */}
        {positions.map((pos, idx) => {
          // Determine if this is the topmost point (smallest y value)
          const isTopPoint = positions.every((p, i) => i === idx || p.y >= pos.y);
          // Position label above for topmost point, below for others
          const labelY = isTopPoint ? pos.y - 15 : pos.y + 35;

          return (
            <g key={`point-${idx}`}>
              <circle
                cx={pos.x}
                cy={pos.y}
                r={highlightPoint === idx ? 10 : 8}
                fill={highlightPoint === idx ? colors.highlight : colors.primary}
              />
              <text
                x={pos.x}
                y={labelY}
                fill={theme.colors.textPrimary}
                fontSize="16"
                textAnchor="middle"
              >
                {points[idx].label}
              </text>
            </g>
          );
        })}
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
