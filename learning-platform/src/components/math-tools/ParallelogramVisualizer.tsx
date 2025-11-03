import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface ParallelogramVisualizerProps {
  base?: string; // base length label (e.g., 'b', '12cm')
  height?: string; // perpendicular height label (e.g., 'h', '8cm')
  slantSide?: string; // slant side label (e.g., 's', '10cm')
  showPerpendicular?: boolean; // show perpendicular height line (default: true)
  highlightMode?: 'perimeter' | 'area' | 'both' | 'height' | 'none'; // what to highlight
  showFormula?: boolean; // show area or perimeter formula (default: false)
  showRightAngle?: boolean; // show right angle symbol at height (default: true)
  vertexLabels?: [string, string, string, string]; // [bottomLeft, bottomRight, topRight, topLeft]
  skewAngle?: number; // angle of parallelogram skew in degrees (default: 30, range: 15-75)
  showTransformation?: boolean; // show animation button to transform to rectangle (default: false)
  caption?: string; // optional caption
}

const ParallelogramVisualizer: React.FC<ParallelogramVisualizerProps> = ({
  base = 'b',
  height = 'h',
  slantSide = 's',
  showPerpendicular = true,
  highlightMode = 'none',
  showFormula = false,
  showRightAngle = true,
  vertexLabels,
  skewAngle = 30,
  showTransformation = false,
  caption
}) => {
  const { theme } = useTheme();
  const [isTransformed, setIsTransformed] = useState(false);

  // SVG dimensions
  const svgWidth = 550;
  const svgHeight = 400;

  // Parallelogram dimensions
  const baseLength = 280;
  const heightValue = 160;
  const skew = isTransformed ? 0 : Math.tan((skewAngle * Math.PI) / 180) * heightValue;

  // Calculate parallelogram vertices
  const bottomLeftX = 100;
  const bottomLeftY = svgHeight - 100;
  const bottomRightX = bottomLeftX + baseLength;
  const bottomRightY = bottomLeftY;
  const topRightX = bottomRightX + skew;
  const topRightY = bottomRightY - heightValue;
  const topLeftX = bottomLeftX + skew;
  const topLeftY = topRightY;

  // Perpendicular height line (from top-left down to base)
  const heightFootX = bottomLeftX + skew;
  const heightFootY = bottomLeftY;
  const heightTopX = topLeftX;
  const heightTopY = topLeftY;

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
    textColor: theme.colors.textPrimary,
    muted: theme.colors.textMuted
  };

  // Determine colors based on highlight mode
  const strokeColor =
    highlightMode === 'perimeter' || highlightMode === 'both'
      ? colors.perimeterColor
      : colors.textColor;
  const strokeWidth =
    highlightMode === 'perimeter' || highlightMode === 'both' ? 4 : 2;
  const fillColor =
    highlightMode === 'area' || highlightMode === 'both'
      ? colors.areaColor
      : 'none';

  // Formula text
  const getFormulaText = () => {
    if (!showFormula) return null;

    if (highlightMode === 'perimeter') {
      return `Perimeter = 2(${base} + ${slantSide})`;
    } else if (highlightMode === 'area' || highlightMode === 'height') {
      return `Area = ${base} × ${height}`;
    } else if (highlightMode === 'both') {
      return `P = 2(${base} + ${slantSide}), A = ${base} × ${height}`;
    }
    return null;
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
        style={{ display: 'block', margin: '0 auto', transition: 'all 0.5s ease' }}
      >
        {/* Parallelogram */}
        <polygon
          points={`${bottomLeftX},${bottomLeftY} ${bottomRightX},${bottomRightY} ${topRightX},${topRightY} ${topLeftX},${topLeftY}`}
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          style={{ transition: 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)' }}
        />

        {/* Perpendicular height line */}
        {showPerpendicular && (
          <>
            <line
              x1={heightFootX}
              y1={heightFootY}
              x2={heightTopX}
              y2={heightTopY}
              stroke={highlightMode === 'height' ? colors.heightColor : colors.primary}
              strokeWidth={highlightMode === 'height' ? 3 : 2}
              strokeDasharray="5,5"
              style={{ transition: 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)' }}
            />
            {/* Height label */}
            <foreignObject
              x={heightFootX - 40}
              y={heightFootY - heightValue / 2 - 15}
              width="35"
              height="30"
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
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

        {/* Right angle symbol at height base */}
        {showPerpendicular && showRightAngle && (
          <g>
            <path
              d={`M ${heightFootX} ${heightFootY - 12} L ${heightFootX + 12} ${
                heightFootY - 12
              } L ${heightFootX + 12} ${heightFootY}`}
              fill="none"
              stroke={colors.textColor}
              strokeWidth="1.5"
            />
          </g>
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
              style={{ transition: 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)' }}
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
              style={{ transition: 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)' }}
            >
              {vertexLabels[3]}
            </text>
          </>
        )}

        {/* Base label (bottom edge) */}
        <foreignObject
          x={bottomLeftX + baseLength / 2 - 30}
          y={bottomLeftY + 20}
          width="60"
          height="30"
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: colors.textColor,
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            <MathText>{ensureLatexWrapped(base)}</MathText>
          </div>
        </foreignObject>

        {/* Slant side label (left edge) */}
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
            <MathText>{ensureLatexWrapped(slantSide)}</MathText>
          </div>
        </foreignObject>

        {/* Formula (if enabled) */}
        {showFormula && getFormulaText() && (
          <foreignObject x="50" y="20" width={svgWidth - 100} height="40">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: colors.primary,
                fontSize: '14px',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              <MathText>{ensureLatexWrapped(getFormulaText() || '')}</MathText>
            </div>
          </foreignObject>
        )}
      </svg>

      {/* Transformation button */}
      {showTransformation && (
        <div style={{ textAlign: 'center', marginTop: '12px' }}>
          <button
            onClick={() => setIsTransformed(!isTransformed)}
            style={{
              padding: '8px 16px',
              backgroundColor: theme.colors.brand,
              color: '#ffffff',
              border: 'none',
              borderRadius: theme.radius.md,
              fontSize: '14px',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = '0.9';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            {isTransformed ? 'Show Parallelogram' : 'Transform to Rectangle'}
          </button>
          <div
            style={{
              marginTop: '8px',
              fontSize: '12px',
              color: colors.muted,
              fontStyle: 'italic'
            }}
          >
            {isTransformed
              ? 'Rectangle has same area! Area = base × height'
              : 'Click to see how parallelogram area relates to rectangle'}
          </div>
        </div>
      )}

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

export default ParallelogramVisualizer;
