import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface CircleChordVisualizerProps {
  chord1Points?: string; // labels for first chord endpoints (e.g., 'AB')
  chord2Points?: string; // labels for second chord endpoints (e.g., 'CD')
  showPerpendicular?: boolean; // show perpendicular from centre to chord (default: false)
  showMidpoint?: boolean; // mark midpoint of chord (default: false)
  equalChords?: boolean; // mark chords as equal length (default: false)
  highlightChord?: 1 | 2 | 'none'; // which chord to highlight

  caption?: string; // optional caption
}

const CircleChordVisualizer: React.FC<CircleChordVisualizerProps> = ({
  chord1Points = 'AB',
  chord2Points,
  showPerpendicular = false,
  showMidpoint = false,
  equalChords = false,
  highlightChord = 'none',
  caption
}) => {
  const { theme } = useTheme();

  // Parse chord point labels
  const chord1Label1 = chord1Points.charAt(0);
  const chord1Label2 = chord1Points.charAt(1);
  const chord2Label1 = chord2Points ? chord2Points.charAt(0) : '';
  const chord2Label2 = chord2Points ? chord2Points.charAt(1) : '';

  const hasTwoChords = !!chord2Points;

  // SVG dimensions and circle parameters
  const svgWidth = 450;
  const svgHeight = 400;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;
  const circleRadius = 130;

  // Chord 1 endpoints (horizontal-ish, above center)
  const chord1Angle = 60; // degrees from horizontal
  const chord1Length = 180;
  const chord1CenterX = centerX - 20;
  const chord1CenterY = centerY - 50;

  const chord1X1 = chord1CenterX - (chord1Length / 2) * Math.cos((chord1Angle * Math.PI) / 180);
  const chord1Y1 = chord1CenterY + (chord1Length / 2) * Math.sin((chord1Angle * Math.PI) / 180);
  const chord1X2 = chord1CenterX + (chord1Length / 2) * Math.cos((chord1Angle * Math.PI) / 180);
  const chord1Y2 = chord1CenterY - (chord1Length / 2) * Math.sin((chord1Angle * Math.PI) / 180);

  // Midpoint of chord 1
  const chord1MidX = (chord1X1 + chord1X2) / 2;
  const chord1MidY = (chord1Y1 + chord1Y2) / 2;

  // Chord 2 endpoints (horizontal-ish, below center) - mirror of chord 1 if equal chords
  const chord2Length = equalChords ? chord1Length : 160;
  const chord2CenterX = centerX + 20;
  const chord2CenterY = centerY + 50;
  const chord2Angle = -60; // degrees from horizontal

  const chord2X1 = chord2CenterX - (chord2Length / 2) * Math.cos((chord2Angle * Math.PI) / 180);
  const chord2Y1 = chord2CenterY + (chord2Length / 2) * Math.sin((chord2Angle * Math.PI) / 180);
  const chord2X2 = chord2CenterX + (chord2Length / 2) * Math.cos((chord2Angle * Math.PI) / 180);
  const chord2Y2 = chord2CenterY - (chord2Length / 2) * Math.sin((chord2Angle * Math.PI) / 180);

  // Midpoint of chord 2
  const chord2MidX = (chord2X1 + chord2X2) / 2;
  const chord2MidY = (chord2Y1 + chord2Y2) / 2;

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
    perpendicular: '#2ECC71',
    midpoint: '#E74C3C',
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

        {/* Centre point O */}
        <circle cx={centerX} cy={centerY} r="4" fill={colors.primary} />
        <text
          x={centerX + 15}
          y={centerY + 5}
          fill={theme.colors.textPrimary}
          fontSize="16"
          fontWeight="bold"
          textAnchor="start"
        >
          O
        </text>

        {/* Chord 1 */}
        <line
          x1={chord1X1}
          y1={chord1Y1}
          x2={chord1X2}
          y2={chord1Y2}
          stroke={highlightChord === 1 ? colors.highlight : colors.circle}
          strokeWidth={highlightChord === 1 ? 4 : 2.5}
        />

        {/* Chord 1 endpoints */}
        <circle cx={chord1X1} cy={chord1Y1} r="5" fill={colors.primary} />
        <text
          x={chord1X1 - 15}
          y={chord1Y1 - 10}
          fill={theme.colors.textPrimary}
          fontSize="16"
          fontWeight="bold"
          textAnchor="middle"
        >
          {chord1Label1}
        </text>

        <circle cx={chord1X2} cy={chord1Y2} r="5" fill={colors.primary} />
        <text
          x={chord1X2 + 15}
          y={chord1Y2 - 10}
          fill={theme.colors.textPrimary}
          fontSize="16"
          fontWeight="bold"
          textAnchor="middle"
        >
          {chord1Label2}
        </text>

        {/* Perpendicular from centre to chord 1 */}
        {showPerpendicular && (
          <>
            <line
              x1={centerX}
              y1={centerY}
              x2={chord1MidX}
              y2={chord1MidY}
              stroke={colors.perpendicular}
              strokeWidth="2"
              strokeDasharray="5,3"
            />
            {/* Right angle marker */}
            <path
              d={`M ${chord1MidX - 8} ${chord1MidY - 4} L ${chord1MidX - 8} ${chord1MidY + 4} L ${chord1MidX} ${chord1MidY + 4}`}
              fill="none"
              stroke={colors.perpendicular}
              strokeWidth="1.5"
            />
          </>
        )}

        {/* Midpoint marker on chord 1 */}
        {showMidpoint && (
          <>
            <circle cx={chord1MidX} cy={chord1MidY} r="4" fill={colors.midpoint} />
            <text
              x={chord1MidX - 8}
              y={chord1MidY + 20}
              fill={colors.midpoint}
              fontSize="14"
              fontWeight="bold"
              textAnchor="middle"
            >
              M
            </text>
          </>
        )}

        {/* Chord 2 (if present) */}
        {hasTwoChords && (
          <>
            <line
              x1={chord2X1}
              y1={chord2Y1}
              x2={chord2X2}
              y2={chord2Y2}
              stroke={highlightChord === 2 ? colors.highlight : colors.circle}
              strokeWidth={highlightChord === 2 ? 4 : 2.5}
            />

            {/* Chord 2 endpoints */}
            <circle cx={chord2X1} cy={chord2Y1} r="5" fill={colors.primary} />
            <text
              x={chord2X1 - 15}
              y={chord2Y1 + 20}
              fill={theme.colors.textPrimary}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >
              {chord2Label1}
            </text>

            <circle cx={chord2X2} cy={chord2Y2} r="5" fill={colors.primary} />
            <text
              x={chord2X2 + 15}
              y={chord2Y2 + 20}
              fill={theme.colors.textPrimary}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >
              {chord2Label2}
            </text>

            {/* Perpendicular from centre to chord 2 */}
            {showPerpendicular && (
              <>
                <line
                  x1={centerX}
                  y1={centerY}
                  x2={chord2MidX}
                  y2={chord2MidY}
                  stroke={colors.perpendicular}
                  strokeWidth="2"
                  strokeDasharray="5,3"
                />
                {/* Right angle marker */}
                <path
                  d={`M ${chord2MidX - 8} ${chord2MidY - 4} L ${chord2MidX - 8} ${chord2MidY + 4} L ${chord2MidX} ${chord2MidY + 4}`}
                  fill="none"
                  stroke={colors.perpendicular}
                  strokeWidth="1.5"
                />
              </>
            )}

            {/* Midpoint marker on chord 2 */}
            {showMidpoint && (
              <>
                <circle cx={chord2MidX} cy={chord2MidY} r="4" fill={colors.midpoint} />
                <text
                  x={chord2MidX + 8}
                  y={chord2MidY - 10}
                  fill={colors.midpoint}
                  fontSize="14"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  N
                </text>
              </>
            )}

            {/* Equal chord markers */}
            {equalChords && (
              <>
                {/* Single tick marks on both chords to show equality */}
                <line
                  x1={chord1MidX - 6}
                  y1={chord1MidY - 8}
                  x2={chord1MidX + 6}
                  y2={chord1MidY + 8}
                  stroke={colors.highlight}
                  strokeWidth="2.5"
                />
                <line
                  x1={chord2MidX - 6}
                  y1={chord2MidY - 8}
                  x2={chord2MidX + 6}
                  y2={chord2MidY + 8}
                  stroke={colors.highlight}
                  strokeWidth="2.5"
                />
              </>
            )}
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

export default CircleChordVisualizer;
