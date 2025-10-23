import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface CircleBasicVisualizerProps {
  // Basic circle mode props
  radius?: string; // radius label (e.g., 'r', '5cm', '10')
  centreLabel?: string; // centre point label (e.g., 'O', 'P', 'C') (default: 'O')
  showCentre?: boolean; // show centre point (default: true)
  showRadius?: boolean; // show radius line (default: false)
  showDiameter?: boolean; // show diameter line (default: false)
  highlightElement?: 'radius' | 'diameter' | 'centre' | 'none'; // which element to highlight in red

  // Arc mode props
  pointA?: string; // label for first point on circumference (e.g., 'A')
  pointB?: string; // label for second point on circumference (e.g., 'B')
  arcAngle?: number; // angle subtended by arc at centre (0-360, determines arc size)
  showChord?: boolean; // show chord AB (default: false)
  showMinorArc?: boolean; // highlight minor arc (default: true)
  showMajorArc?: boolean; // highlight major arc (default: false)
  showSegment?: boolean; // shade the segment (default: false)

  caption?: string; // optional caption
}

const CircleBasicVisualizer: React.FC<CircleBasicVisualizerProps> = ({
  radius = 'r',
  centreLabel = 'O',
  showCentre = true,
  showRadius = false,
  showDiameter = false,
  highlightElement = 'none',
  pointA,
  pointB,
  arcAngle = 120,
  showChord = false,
  showMinorArc = true,
  showMajorArc = false,
  showSegment = false,
  caption
}) => {
  const { theme } = useTheme();

  // Detect mode: if pointA and pointB are provided, we're in arc mode
  const isArcMode = !!(pointA && pointB);

  // SVG dimensions and circle parameters
  const svgWidth = 400;
  const svgHeight = 400;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;
  const circleRadius = 120;

  // Calculate positions for arc mode
  const angleA = 90; // Point A at top
  const angleB = angleA + arcAngle; // Point B at arcAngle degrees from A

  const pointAX = centerX + circleRadius * Math.cos((angleA * Math.PI) / 180);
  const pointAY = centerY - circleRadius * Math.sin((angleA * Math.PI) / 180);
  const pointBX = centerX + circleRadius * Math.cos((angleB * Math.PI) / 180);
  const pointBY = centerY - circleRadius * Math.sin((angleB * Math.PI) / 180);

  // Calculate label positions (radially outward from center to avoid overlap)
  const labelOffset = 25; // Distance beyond circle radius for labels
  const labelAX = centerX + (circleRadius + labelOffset) * Math.cos((angleA * Math.PI) / 180);
  const labelAY = centerY - (circleRadius + labelOffset) * Math.sin((angleA * Math.PI) / 180);
  const labelBX = centerX + (circleRadius + labelOffset) * Math.cos((angleB * Math.PI) / 180);
  const labelBY = centerY - (circleRadius + labelOffset) * Math.sin((angleB * Math.PI) / 180);

  // Calculate arc paths
  const largeArcFlag = arcAngle > 180 ? 1 : 0;
  const minorArcPath = `M ${pointAX} ${pointAY} A ${circleRadius} ${circleRadius} 0 ${largeArcFlag} 0 ${pointBX} ${pointBY}`;
  const majorArcPath = `M ${pointBX} ${pointBY} A ${circleRadius} ${circleRadius} 0 ${largeArcFlag ? 0 : 1} 0 ${pointAX} ${pointAY}`;

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
    arc: '#3498DB',
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

        {/* BASIC MODE ELEMENTS */}
        {!isArcMode && (
          <>
            {/* Centre point */}
            {showCentre && (
              <>
                <circle
                  cx={centerX}
                  cy={centerY}
                  r="4"
                  fill={highlightElement === 'centre' ? colors.highlight : colors.primary}
                />
                <text
                  x={centerX}
                  y={centerY - 12}
                  fill={theme.colors.textPrimary}
                  fontSize="16"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {centreLabel}
                </text>
              </>
            )}

            {/* Radius */}
            {showRadius && (
              <>
                <line
                  x1={centerX}
                  y1={centerY}
                  x2={centerX + circleRadius}
                  y2={centerY}
                  stroke={highlightElement === 'radius' ? colors.highlight : colors.circle}
                  strokeWidth={highlightElement === 'radius' ? 4 : 2}
                />
                <circle cx={centerX + circleRadius} cy={centerY} r="4" fill={colors.primary} />
                <foreignObject
                  x={centerX + circleRadius / 2 - 30}
                  y={centerY - 35}
                  width="60"
                  height="30"
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: highlightElement === 'radius' ? colors.highlight : colors.circle,
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}>
                    <MathText>{ensureLatexWrapped(radius)}</MathText>
                  </div>
                </foreignObject>
              </>
            )}

            {/* Diameter */}
            {showDiameter && (
              <>
                <line
                  x1={centerX - circleRadius}
                  y1={centerY}
                  x2={centerX + circleRadius}
                  y2={centerY}
                  stroke={highlightElement === 'diameter' ? colors.highlight : colors.circle}
                  strokeWidth={highlightElement === 'diameter' ? 4 : 2}
                />
                <circle cx={centerX - circleRadius} cy={centerY} r="4" fill={colors.primary} />
                <circle cx={centerX + circleRadius} cy={centerY} r="4" fill={colors.primary} />
                <foreignObject
                  x={centerX - 40}
                  y={centerY + 10}
                  width="80"
                  height="30"
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: highlightElement === 'diameter' ? colors.highlight : colors.circle,
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}>
                    <MathText>{ensureLatexWrapped(`2${radius}`)}</MathText>
                  </div>
                </foreignObject>
              </>
            )}
          </>
        )}

        {/* ARC MODE ELEMENTS */}
        {isArcMode && (
          <>
            {/* Centre point */}
            <circle cx={centerX} cy={centerY} r="4" fill={colors.primary} />
            <text
              x={centerX}
              y={centerY - 12}
              fill={theme.colors.textPrimary}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >
              {centreLabel}
            </text>

            {/* Segment shading (if enabled) */}
            {showSegment && (
              <path
                d={`M ${pointAX} ${pointAY} A ${circleRadius} ${circleRadius} 0 ${largeArcFlag} 0 ${pointBX} ${pointBY} L ${pointAX} ${pointAY} Z`}
                fill={colors.segment}
                stroke="none"
              />
            )}

            {/* Minor arc highlight */}
            {showMinorArc && (
              <path
                d={minorArcPath}
                fill="none"
                stroke={colors.arc}
                strokeWidth="6"
                strokeLinecap="round"
                opacity="0.8"
              />
            )}

            {/* Major arc highlight */}
            {showMajorArc && (
              <path
                d={majorArcPath}
                fill="none"
                stroke={colors.highlight}
                strokeWidth="6"
                strokeLinecap="round"
                opacity="0.8"
              />
            )}

            {/* Chord */}
            {showChord && (
              <line
                x1={pointAX}
                y1={pointAY}
                x2={pointBX}
                y2={pointBY}
                stroke={colors.circle}
                strokeWidth="2"
              />
            )}

            {/* Point A */}
            <circle cx={pointAX} cy={pointAY} r="5" fill={colors.primary} />
            <text
              x={labelAX}
              y={labelAY}
              fill={theme.colors.textPrimary}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {pointA}
            </text>

            {/* Point B */}
            <circle cx={pointBX} cy={pointBY} r="5" fill={colors.primary} />
            <text
              x={labelBX}
              y={labelBY}
              fill={theme.colors.textPrimary}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {pointB}
            </text>

            {/* Radii to A and B (for reference) */}
            <line
              x1={centerX}
              y1={centerY}
              x2={pointAX}
              y2={pointAY}
              stroke={colors.muted}
              strokeWidth="1"
              strokeDasharray="3,3"
              opacity="0.5"
            />
            <line
              x1={centerX}
              y1={centerY}
              x2={pointBX}
              y2={pointBY}
              stroke={colors.muted}
              strokeWidth="1"
              strokeDasharray="3,3"
              opacity="0.5"
            />
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

export default CircleBasicVisualizer;
