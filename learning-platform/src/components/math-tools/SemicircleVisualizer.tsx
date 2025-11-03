import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface SemicircleVisualizerProps {
  radius?: string; // radius label (e.g., 'r', '5cm', '10')
  orientation?: 'top' | 'bottom' | 'left' | 'right'; // which direction the arc faces (default: 'top')
  showDimensions?: boolean; // show radius line and label (default: true)
  showArcLength?: boolean; // show arc length measurement (default: false)
  showArea?: boolean; // shade the semicircle area (default: false)
  showDiameter?: boolean; // show diameter line (default: false)
  highlightElement?: 'radius' | 'arc' | 'diameter' | 'area' | 'none'; // what to highlight
  caption?: string; // optional caption
}

const SemicircleVisualizer: React.FC<SemicircleVisualizerProps> = ({
  radius = 'r',
  orientation = 'top',
  showDimensions = true,
  showArcLength = false,
  showArea = false,
  showDiameter = false,
  highlightElement = 'none',
  caption
}) => {
  const { theme } = useTheme();

  // SVG dimensions
  const svgWidth = 500;
  const svgHeight = 400;

  // Semicircle parameters
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;
  const circleRadius = 120;

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
    arc: '#3498DB',
    area: 'rgba(52, 152, 219, 0.2)',
    textColor: theme.colors.textPrimary,
    muted: theme.colors.textMuted
  };

  // Calculate path for semicircle based on orientation
  const getSemicirclePath = () => {
    switch (orientation) {
      case 'top':
        // Arc from left to right, curving upward
        return `M ${centerX - circleRadius} ${centerY} A ${circleRadius} ${circleRadius} 0 0 1 ${
          centerX + circleRadius
        } ${centerY} Z`;
      case 'bottom':
        // Arc from left to right, curving downward
        return `M ${centerX - circleRadius} ${centerY} A ${circleRadius} ${circleRadius} 0 0 0 ${
          centerX + circleRadius
        } ${centerY} Z`;
      case 'left':
        // Arc from bottom to top, curving left
        return `M ${centerX} ${centerY - circleRadius} A ${circleRadius} ${circleRadius} 0 0 0 ${centerX} ${
          centerY + circleRadius
        } Z`;
      case 'right':
        // Arc from top to bottom, curving right
        return `M ${centerX} ${centerY - circleRadius} A ${circleRadius} ${circleRadius} 0 0 1 ${centerX} ${
          centerY + circleRadius
        } Z`;
      default:
        return '';
    }
  };

  // Calculate positions for radius line and label based on orientation
  const getRadiusLineAndLabel = () => {
    switch (orientation) {
      case 'top':
        return {
          x1: centerX,
          y1: centerY,
          x2: centerX,
          y2: centerY - circleRadius,
          labelX: centerX + 15,
          labelY: centerY - circleRadius / 2
        };
      case 'bottom':
        return {
          x1: centerX,
          y1: centerY,
          x2: centerX,
          y2: centerY + circleRadius,
          labelX: centerX + 15,
          labelY: centerY + circleRadius / 2
        };
      case 'left':
        return {
          x1: centerX,
          y1: centerY,
          x2: centerX - circleRadius,
          y2: centerY,
          labelX: centerX - circleRadius / 2,
          labelY: centerY - 15
        };
      case 'right':
        return {
          x1: centerX,
          y1: centerY,
          x2: centerX + circleRadius,
          y2: centerY,
          labelX: centerX + circleRadius / 2,
          labelY: centerY - 15
        };
      default:
        return { x1: 0, y1: 0, x2: 0, y2: 0, labelX: 0, labelY: 0 };
    }
  };

  // Calculate diameter line based on orientation
  const getDiameterLine = () => {
    switch (orientation) {
      case 'top':
      case 'bottom':
        return {
          x1: centerX - circleRadius,
          y1: centerY,
          x2: centerX + circleRadius,
          y2: centerY,
          labelX: centerX,
          labelY: centerY + 25
        };
      case 'left':
      case 'right':
        return {
          x1: centerX,
          y1: centerY - circleRadius,
          x2: centerX,
          y2: centerY + circleRadius,
          labelX: centerX + 25,
          labelY: centerY
        };
      default:
        return { x1: 0, y1: 0, x2: 0, y2: 0, labelX: 0, labelY: 0 };
    }
  };

  const radiusPos = getRadiusLineAndLabel();
  const diameterPos = getDiameterLine();

  // Determine fill and stroke based on highlight
  const fillColor = showArea || highlightElement === 'area' ? colors.area : 'none';
  const arcStrokeWidth = highlightElement === 'arc' ? 4 : 2;
  const arcStrokeColor = highlightElement === 'arc' ? colors.arc : colors.textColor;

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
        {/* Semicircle */}
        <path
          d={getSemicirclePath()}
          fill={fillColor}
          stroke={arcStrokeColor}
          strokeWidth={arcStrokeWidth}
        />

        {/* Diameter line (base of semicircle) */}
        {showDiameter && (
          <>
            <line
              x1={diameterPos.x1}
              y1={diameterPos.y1}
              x2={diameterPos.x2}
              y2={diameterPos.y2}
              stroke={highlightElement === 'diameter' ? colors.highlight : colors.textColor}
              strokeWidth={highlightElement === 'diameter' ? 4 : 2}
              strokeDasharray="4,4"
            />
            <foreignObject
              x={diameterPos.labelX - 40}
              y={diameterPos.labelY - 15}
              width="80"
              height="30"
            >
            </foreignObject>
          </>
        )}

        {/* Radius line */}
        {showDimensions && (
          <>
            <line
              x1={radiusPos.x1}
              y1={radiusPos.y1}
              x2={radiusPos.x2}
              y2={radiusPos.y2}
              stroke={highlightElement === 'radius' ? colors.highlight : colors.primary}
              strokeWidth={highlightElement === 'radius' ? 4 : 2}
            />
            {/* Center point */}
            <circle cx={centerX} cy={centerY} r="4" fill={colors.primary} />
            {/* Endpoint */}
            <circle cx={radiusPos.x2} cy={radiusPos.y2} r="4" fill={colors.primary} />
            {/* Radius label */}
            <foreignObject
              x={radiusPos.labelX - 20}
              y={radiusPos.labelY - 15}
              width="40"
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
                <MathText>{ensureLatexWrapped(radius)}</MathText>
              </div>
            </foreignObject>
          </>
        )}

        {/* Arc length annotation */}
        {showArcLength && (
          <foreignObject x="50" y={svgHeight - 45} width={svgWidth - 100} height="40">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: colors.arc,
                fontSize: '14px',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              <MathText>{ensureLatexWrapped(`Arc length = \\pi ${radius}`)}</MathText>
            </div>
          </foreignObject>
        )}

        {/* Area annotation */}
        {showArea && !showArcLength && (
          <foreignObject x="50" y={svgHeight - 45} width={svgWidth - 100} height="40">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: colors.arc,
                fontSize: '14px',
                fontWeight: 'bold',
                textAlign: 'center'
              }}
            >
              <MathText>{ensureLatexWrapped(`Area = \\frac{1}{2}\\pi ${radius}^2`)}</MathText>
            </div>
          </foreignObject>
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

export default SemicircleVisualizer;
