import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface TrapeziumVisualizerProps {
  parallelSide1?: string; // top parallel side label (e.g., 'a', '6cm')
  parallelSide2?: string; // bottom parallel side label (e.g., 'b', '10cm')
  height?: string; // perpendicular height label (e.g., 'h', '8cm')
  leftSlant?: string; // left slant side label (e.g., 'c', '9cm')
  rightSlant?: string; // right slant side label (e.g., 'd', '9cm')
  showHeight?: boolean; // show perpendicular height line (default: true)
  highlightParallel?: boolean; // highlight parallel sides (default: true)
  highlightMode?: 'perimeter' | 'area' | 'height' | 'none'; // what to highlight
  showRightAngles?: boolean; // show right angle symbols at height endpoints (default: true)
  vertexLabels?: [string, string, string, string]; // [bottomLeft, bottomRight, topRight, topLeft]
  topSideRatio?: number; // ratio of top to bottom side (0.4-0.8, default: 0.6)
  caption?: string; // optional caption
}

const TrapeziumVisualizer: React.FC<TrapeziumVisualizerProps> = ({
  parallelSide1 = 'a',
  parallelSide2 = 'b',
  height = 'h',
  leftSlant = 'c',
  rightSlant = 'd',
  showHeight = true,
  highlightParallel = true,
  highlightMode = 'none',
  showRightAngles = true,
  vertexLabels,
  topSideRatio = 0.6,
  caption
}) => {
  const { theme } = useTheme();

  // SVG dimensions
  const svgWidth = 550;
  const svgHeight = 400;

  // Trapezium dimensions
  const bottomWidth = 300;
  const topWidth = bottomWidth * topSideRatio;
  const trapHeight = 170;
  const offset = (bottomWidth - topWidth) / 2;

  // Calculate trapezium vertices (parallel sides horizontal)
  const bottomLeftX = 100;
  const bottomLeftY = svgHeight - 90;
  const bottomRightX = bottomLeftX + bottomWidth;
  const bottomRightY = bottomLeftY;
  const topLeftX = bottomLeftX + offset;
  const topLeftY = bottomLeftY - trapHeight;
  const topRightX = topLeftX + topWidth;
  const topRightY = topLeftY;

  // Perpendicular height lines (from top vertices down to bottom)
  const leftHeightX = topLeftX;
  const leftHeightY = topLeftY;
  const leftHeightFootX = topLeftX;
  const leftHeightFootY = bottomLeftY;

  // Helper function to ensure LaTeX expressions are properly wrapped
  const ensureLatexWrapped = (text: string | undefined): string => {
    if (!text) return '';
    if (text.startsWith('$') && text.endsWith('$')) return text;
    if (text.includes('\\')) return `$${text}$`;
    return text;
  };

  // Colors
  const colors = {
    primary: theme.colors.brand,
    highlight: '#FF6B6B',
    perimeterColor: '#3498DB',
    areaColor: 'rgba(52, 152, 219, 0.2)',
    heightColor: '#E74C3C',
    parallelColor: '#27AE60',
    textColor: theme.colors.textPrimary,
    muted: theme.colors.textMuted
  };

  // Determine colors based on highlight mode
  const strokeColor =
    highlightMode === 'perimeter' ? colors.perimeterColor : colors.textColor;
  const strokeWidth = highlightMode === 'perimeter' ? 4 : 2;
  const fillColor = highlightMode === 'area' ? colors.areaColor : 'none';

  // Parallel sides stroke
  const parallelStrokeColor = highlightParallel ? colors.parallelColor : strokeColor;
  const parallelStrokeWidth = highlightParallel ? 4 : strokeWidth;

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
        {/* Trapezium body */}
        <path
          d={`M ${bottomLeftX} ${bottomLeftY} L ${bottomRightX} ${bottomRightY} L ${topRightX} ${topRightY} L ${topLeftX} ${topLeftY} Z`}
          fill={fillColor}
          stroke="none"
        />

        {/* Bottom parallel side (highlighted if enabled) */}
        <line
          x1={bottomLeftX}
          y1={bottomLeftY}
          x2={bottomRightX}
          y2={bottomRightY}
          stroke={parallelStrokeColor}
          strokeWidth={parallelStrokeWidth}
        />

        {/* Top parallel side (highlighted if enabled) */}
        <line
          x1={topLeftX}
          y1={topLeftY}
          x2={topRightX}
          y2={topRightY}
          stroke={parallelStrokeColor}
          strokeWidth={parallelStrokeWidth}
        />

        {/* Left slant side */}
        <line
          x1={bottomLeftX}
          y1={bottomLeftY}
          x2={topLeftX}
          y2={topLeftY}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />

        {/* Right slant side */}
        <line
          x1={bottomRightX}
          y1={bottomRightY}
          x2={topRightX}
          y2={topRightY}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />

        {/* Perpendicular height line */}
        {showHeight && (
          <>
            <line
              x1={leftHeightX}
              y1={leftHeightY}
              x2={leftHeightFootX}
              y2={leftHeightFootY}
              stroke={highlightMode === 'height' ? colors.heightColor : colors.primary}
              strokeWidth={highlightMode === 'height' ? 3 : 2}
              strokeDasharray="5,5"
            />
            {/* Height label */}
            <foreignObject
              x={leftHeightX + 10}
              y={leftHeightY + trapHeight / 2 - 15}
              width="40"
              height="30"
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  color: highlightMode === 'height' ? colors.heightColor : colors.textColor,
                  fontSize: '16px',
                  fontWeight: 'bold'
                }}
              >
                <MathText>{ensureLatexWrapped(height)}</MathText>
              </div>
            </foreignObject>
          </>
        )}

        {/* Right angle symbols at height endpoints */}
        {showHeight && showRightAngles && (
          <>
            {/* Top right angle */}
            <path
              d={`M ${leftHeightX + 12} ${leftHeightY} L ${leftHeightX + 12} ${
                leftHeightY + 12
              } L ${leftHeightX} ${leftHeightY + 12}`}
              fill="none"
              stroke={colors.textColor}
              strokeWidth="1.5"
            />
            {/* Bottom right angle */}
            <path
              d={`M ${leftHeightFootX + 12} ${leftHeightFootY} L ${leftHeightFootX + 12} ${
                leftHeightFootY - 12
              } L ${leftHeightFootX} ${leftHeightFootY - 12}`}
              fill="none"
              stroke={colors.textColor}
              strokeWidth="1.5"
            />
          </>
        )}

        {/* Parallel side indicators (tick marks perpendicular to sides) */}
        {highlightParallel && (
          <>
            {/* Top side - two perpendicular tick marks */}
            {/* First tick mark */}
            <line
              x1={topLeftX + topWidth * 0.5 - 5}
              y1={topLeftY - 8}
              x2={topLeftX + topWidth * 0.5 - 5}
              y2={topLeftY + 8}
              stroke={colors.parallelColor}
              strokeWidth="2.5"
            />
            {/* Second tick mark */}
            <line
              x1={topLeftX + topWidth * 0.5 + 5}
              y1={topLeftY - 8}
              x2={topLeftX + topWidth * 0.5 + 5}
              y2={topLeftY + 8}
              stroke={colors.parallelColor}
              strokeWidth="2.5"
            />

            {/* Bottom side - two perpendicular tick marks */}
            {/* First tick mark */}
            <line
              x1={topLeftX + topWidth * 0.5 - 5}
              y1={bottomLeftY - 8}
              x2={topLeftX + topWidth * 0.5 - 5}
              y2={bottomLeftY + 8}
              stroke={colors.parallelColor}
              strokeWidth="2.5"
            />
            {/* Second tick mark */}
            <line
              x1={topLeftX + topWidth * 0.5 + 5}
              y1={bottomLeftY - 8}
              x2={topLeftX + topWidth * 0.5 + 5}
              y2={bottomLeftY + 8}
              stroke={colors.parallelColor}
              strokeWidth="2.5"
            />
          </>
        )}

        {/* Vertex labels */}
        {vertexLabels && (
          <>
            {/* Bottom-left */}
            <text
              x={bottomLeftX - 20}
              y={bottomLeftY + 15}
              fill={colors.textColor}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >
              {vertexLabels[0]}
            </text>
            {/* Bottom-right */}
            <text
              x={bottomRightX + 20}
              y={bottomRightY + 15}
              fill={colors.textColor}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >
              {vertexLabels[1]}
            </text>
            {/* Top-right */}
            <text
              x={topRightX + 20}
              y={topRightY - 10}
              fill={colors.textColor}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >
              {vertexLabels[2]}
            </text>
            {/* Top-left */}
            <text
              x={topLeftX - 20}
              y={topLeftY - 10}
              fill={colors.textColor}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >
              {vertexLabels[3]}
            </text>
          </>
        )}

        {/* Side labels */}
        {/* Top parallel side */}
        <foreignObject
          x={topLeftX + topWidth / 2 - 25}
          y={topLeftY - 40}
          width="50"
          height="30"
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: highlightParallel ? colors.parallelColor : colors.textColor,
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            <MathText>{ensureLatexWrapped(parallelSide1)}</MathText>
          </div>
        </foreignObject>

        {/* Bottom parallel side */}
        <foreignObject
          x={bottomLeftX + bottomWidth / 2 - 25}
          y={bottomLeftY + 25}
          width="50"
          height="30"
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: highlightParallel ? colors.parallelColor : colors.textColor,
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            <MathText>{ensureLatexWrapped(parallelSide2)}</MathText>
          </div>
        </foreignObject>

        {/* Left slant side */}
        <foreignObject
          x={(bottomLeftX + topLeftX) / 2 - 50}
          y={(bottomLeftY + topLeftY) / 2 - 15}
          width="40"
          height="30"
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: colors.muted,
              fontSize: '14px',
              fontWeight: 'normal',
              fontStyle: 'italic'
            }}
          >
            <MathText>{ensureLatexWrapped(leftSlant)}</MathText>
          </div>
        </foreignObject>

        {/* Right slant side */}
        <foreignObject
          x={(bottomRightX + topRightX) / 2 + 15}
          y={(bottomRightY + topRightY) / 2 - 15}
          width="40"
          height="30"
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: colors.muted,
              fontSize: '14px',
              fontWeight: 'normal',
              fontStyle: 'italic'
            }}
          >
            <MathText>{ensureLatexWrapped(rightSlant)}</MathText>
          </div>
        </foreignObject>
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

export default TrapeziumVisualizer;
