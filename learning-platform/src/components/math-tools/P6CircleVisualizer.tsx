import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

/**
 * P6CircleVisualizer - Unified circle visualization for Primary 6 curriculum
 *
 * Supports: full circle, semicircle, quarter circle, and 3/4 circle
 * with various orientations and configurable display options.
 *
 * IMPORTANT: This tool is for problem visualization only.
 * It does NOT show answers, formulas, or calculations.
 */

type CircleMode = 'full' | 'semicircle' | 'quarter' | 'three-quarter';

// Orientation for semicircle (which way the arc faces)
type SemicircleOrientation = 'top' | 'bottom' | 'left' | 'right';

// Orientation for quarter circle (which corner)
type QuarterOrientation = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

// Orientation for 3/4 circle (which quarter is missing)
type ThreeQuarterOrientation = 'missing-top-right' | 'missing-top-left' | 'missing-bottom-right' | 'missing-bottom-left';

interface P6CircleVisualizerProps {
  // Circle type
  mode: CircleMode;

  // Orientation (interpretation depends on mode)
  orientation?: SemicircleOrientation | QuarterOrientation | ThreeQuarterOrientation;

  // Dimension to display (just the value, e.g., "7", "14", "5.5")
  givenValue?: string;

  // What dimension is given
  givenType?: 'radius' | 'diameter';

  // Unit for measurement (e.g., "cm", "m")
  unit?: string;

  // What parts to show
  showCentre?: boolean;
  showRadiusLine?: boolean;
  showDiameterLine?: boolean;

  // Point labels
  centreLabel?: string;

  // Visual options
  showShading?: boolean;  // Shade the area (for visual clarity, not answer)
  highlightArc?: boolean; // Highlight the curved edge

  // Caption (problem context, NOT answer)
  caption?: string;
}

const P6CircleVisualizer: React.FC<P6CircleVisualizerProps> = ({
  mode,
  orientation,
  givenValue,
  givenType = 'radius',
  unit = 'cm',
  showCentre = true,
  showRadiusLine = true,
  showDiameterLine = false,
  centreLabel = 'O',
  showShading = false,
  highlightArc = false,
  caption
}) => {
  const { theme } = useTheme();

  // SVG dimensions
  const svgWidth = 450;
  const svgHeight = 400;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;
  const circleRadius = 120;

  // Colors
  const colors = {
    primary: theme.colors.brand,
    stroke: theme.colors.textPrimary,
    arcHighlight: '#3498DB',
    shading: 'rgba(52, 152, 219, 0.15)',
    textColor: theme.colors.textPrimary,
    muted: theme.colors.textMuted,
    dimensionLine: '#e74c3c'
  };

  // Format the dimension label
  const dimensionLabel = givenValue ? `${givenValue} ${unit}` : '';

  // Get default orientation based on mode
  const getDefaultOrientation = () => {
    switch (mode) {
      case 'semicircle': return 'top';
      case 'quarter': return 'top-right';
      case 'three-quarter': return 'missing-bottom-right';
      default: return undefined;
    }
  };

  const effectiveOrientation = orientation || getDefaultOrientation();

  // ==========================================
  // PATH GENERATORS
  // ==========================================

  const getFullCirclePath = () => {
    return `M ${centerX + circleRadius} ${centerY}
            A ${circleRadius} ${circleRadius} 0 1 1 ${centerX - circleRadius} ${centerY}
            A ${circleRadius} ${circleRadius} 0 1 1 ${centerX + circleRadius} ${centerY} Z`;
  };

  const getSemicirclePath = () => {
    const orient = effectiveOrientation as SemicircleOrientation;
    switch (orient) {
      case 'top':
        return `M ${centerX - circleRadius} ${centerY}
                A ${circleRadius} ${circleRadius} 0 0 1 ${centerX + circleRadius} ${centerY}
                L ${centerX - circleRadius} ${centerY} Z`;
      case 'bottom':
        return `M ${centerX - circleRadius} ${centerY}
                A ${circleRadius} ${circleRadius} 0 0 0 ${centerX + circleRadius} ${centerY}
                L ${centerX - circleRadius} ${centerY} Z`;
      case 'left':
        return `M ${centerX} ${centerY - circleRadius}
                A ${circleRadius} ${circleRadius} 0 0 0 ${centerX} ${centerY + circleRadius}
                L ${centerX} ${centerY - circleRadius} Z`;
      case 'right':
        return `M ${centerX} ${centerY - circleRadius}
                A ${circleRadius} ${circleRadius} 0 0 1 ${centerX} ${centerY + circleRadius}
                L ${centerX} ${centerY - circleRadius} Z`;
      default:
        return '';
    }
  };

  const getQuarterCirclePath = () => {
    const orient = effectiveOrientation as QuarterOrientation;
    switch (orient) {
      case 'top-right':
        return `M ${centerX} ${centerY}
                L ${centerX} ${centerY - circleRadius}
                A ${circleRadius} ${circleRadius} 0 0 1 ${centerX + circleRadius} ${centerY}
                L ${centerX} ${centerY} Z`;
      case 'top-left':
        return `M ${centerX} ${centerY}
                L ${centerX - circleRadius} ${centerY}
                A ${circleRadius} ${circleRadius} 0 0 1 ${centerX} ${centerY - circleRadius}
                L ${centerX} ${centerY} Z`;
      case 'bottom-right':
        return `M ${centerX} ${centerY}
                L ${centerX + circleRadius} ${centerY}
                A ${circleRadius} ${circleRadius} 0 0 1 ${centerX} ${centerY + circleRadius}
                L ${centerX} ${centerY} Z`;
      case 'bottom-left':
        return `M ${centerX} ${centerY}
                L ${centerX} ${centerY + circleRadius}
                A ${circleRadius} ${circleRadius} 0 0 1 ${centerX - circleRadius} ${centerY}
                L ${centerX} ${centerY} Z`;
      default:
        return '';
    }
  };

  const getThreeQuarterPath = () => {
    const orient = effectiveOrientation as ThreeQuarterOrientation;
    // 3/4 circle = full circle minus one quarter
    switch (orient) {
      case 'missing-top-right':
        return `M ${centerX} ${centerY - circleRadius}
                A ${circleRadius} ${circleRadius} 0 1 0 ${centerX + circleRadius} ${centerY}
                L ${centerX} ${centerY}
                L ${centerX} ${centerY - circleRadius} Z`;
      case 'missing-top-left':
        return `M ${centerX - circleRadius} ${centerY}
                A ${circleRadius} ${circleRadius} 0 1 0 ${centerX} ${centerY - circleRadius}
                L ${centerX} ${centerY}
                L ${centerX - circleRadius} ${centerY} Z`;
      case 'missing-bottom-right':
        return `M ${centerX + circleRadius} ${centerY}
                A ${circleRadius} ${circleRadius} 0 1 0 ${centerX} ${centerY + circleRadius}
                L ${centerX} ${centerY}
                L ${centerX + circleRadius} ${centerY} Z`;
      case 'missing-bottom-left':
        return `M ${centerX} ${centerY + circleRadius}
                A ${circleRadius} ${circleRadius} 0 1 0 ${centerX - circleRadius} ${centerY}
                L ${centerX} ${centerY}
                L ${centerX} ${centerY + circleRadius} Z`;
      default:
        return '';
    }
  };

  const getShapePath = () => {
    switch (mode) {
      case 'full': return getFullCirclePath();
      case 'semicircle': return getSemicirclePath();
      case 'quarter': return getQuarterCirclePath();
      case 'three-quarter': return getThreeQuarterPath();
      default: return '';
    }
  };

  // ==========================================
  // DIMENSION LINE POSITIONS
  // ==========================================

  const getRadiusLinePosition = () => {
    // Position radius line based on mode and orientation
    if (mode === 'full') {
      return { x1: centerX, y1: centerY, x2: centerX + circleRadius, y2: centerY };
    }

    if (mode === 'semicircle') {
      const orient = effectiveOrientation as SemicircleOrientation;
      switch (orient) {
        case 'top':
          return { x1: centerX, y1: centerY, x2: centerX, y2: centerY - circleRadius };
        case 'bottom':
          return { x1: centerX, y1: centerY, x2: centerX, y2: centerY + circleRadius };
        case 'left':
          return { x1: centerX, y1: centerY, x2: centerX - circleRadius, y2: centerY };
        case 'right':
          return { x1: centerX, y1: centerY, x2: centerX + circleRadius, y2: centerY };
      }
    }

    if (mode === 'quarter') {
      const orient = effectiveOrientation as QuarterOrientation;
      switch (orient) {
        case 'top-right':
          return { x1: centerX, y1: centerY, x2: centerX + circleRadius, y2: centerY };
        case 'top-left':
          return { x1: centerX, y1: centerY, x2: centerX - circleRadius, y2: centerY };
        case 'bottom-right':
          return { x1: centerX, y1: centerY, x2: centerX + circleRadius, y2: centerY };
        case 'bottom-left':
          return { x1: centerX, y1: centerY, x2: centerX - circleRadius, y2: centerY };
      }
    }

    if (mode === 'three-quarter') {
      return { x1: centerX, y1: centerY, x2: centerX + circleRadius, y2: centerY };
    }

    return { x1: centerX, y1: centerY, x2: centerX + circleRadius, y2: centerY };
  };

  const getDiameterLinePosition = () => {
    if (mode === 'semicircle') {
      const orient = effectiveOrientation as SemicircleOrientation;
      if (orient === 'top' || orient === 'bottom') {
        return {
          x1: centerX - circleRadius, y1: centerY,
          x2: centerX + circleRadius, y2: centerY
        };
      } else {
        return {
          x1: centerX, y1: centerY - circleRadius,
          x2: centerX, y2: centerY + circleRadius
        };
      }
    }
    // Default horizontal diameter for full circle
    return {
      x1: centerX - circleRadius, y1: centerY,
      x2: centerX + circleRadius, y2: centerY
    };
  };

  // Get label position for dimension
  const getDimensionLabelPosition = (isRadius: boolean) => {
    if (isRadius) {
      const pos = getRadiusLinePosition();
      const midX = (pos.x1 + pos.x2) / 2;
      const midY = (pos.y1 + pos.y2) / 2;
      // Offset label perpendicular to line
      if (pos.x1 === pos.x2) {
        // Vertical line - offset horizontally
        return { x: midX + 25, y: midY };
      } else {
        // Horizontal line - offset vertically
        return { x: midX, y: midY - 20 };
      }
    } else {
      const pos = getDiameterLinePosition();
      const midX = (pos.x1 + pos.x2) / 2;
      const midY = (pos.y1 + pos.y2) / 2;
      if (pos.x1 === pos.x2) {
        return { x: midX + 30, y: midY };
      } else {
        return { x: midX, y: midY + 25 };
      }
    }
  };

  const radiusPos = getRadiusLinePosition();
  const diameterPos = getDiameterLinePosition();
  const labelPos = getDimensionLabelPosition(givenType === 'radius');

  // Get right angle marker path based on orientation
  // Works for both quarter circles and 3/4 circles (which also have a right angle at center)
  const getRightAngleMarkerPath = () => {
    const size = 15;

    // For 3/4 circles, the right angle is at the missing quarter position
    let cornerPosition: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

    if (mode === 'quarter') {
      cornerPosition = effectiveOrientation as QuarterOrientation;
    } else if (mode === 'three-quarter') {
      // Map missing quarter to corner position
      const threeQuarterOrient = effectiveOrientation as ThreeQuarterOrientation;
      switch (threeQuarterOrient) {
        case 'missing-top-right': cornerPosition = 'top-right'; break;
        case 'missing-top-left': cornerPosition = 'top-left'; break;
        case 'missing-bottom-right': cornerPosition = 'bottom-right'; break;
        case 'missing-bottom-left': cornerPosition = 'bottom-left'; break;
        default: cornerPosition = 'top-right';
      }
    } else {
      cornerPosition = 'top-right';
    }

    switch (cornerPosition) {
      case 'top-right':
        // Edges go up and right from center
        return `M ${centerX + size} ${centerY} L ${centerX + size} ${centerY - size} L ${centerX} ${centerY - size}`;
      case 'top-left':
        // Edges go up and left from center
        return `M ${centerX - size} ${centerY} L ${centerX - size} ${centerY - size} L ${centerX} ${centerY - size}`;
      case 'bottom-right':
        // Edges go down and right from center
        return `M ${centerX + size} ${centerY} L ${centerX + size} ${centerY + size} L ${centerX} ${centerY + size}`;
      case 'bottom-left':
        // Edges go down and left from center
        return `M ${centerX - size} ${centerY} L ${centerX - size} ${centerY + size} L ${centerX} ${centerY + size}`;
      default:
        return `M ${centerX + size} ${centerY} L ${centerX + size} ${centerY - size} L ${centerX} ${centerY - size}`;
    }
  };

  // ==========================================
  // RENDER
  // ==========================================

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
        {/* Main shape */}
        <path
          d={getShapePath()}
          fill={showShading ? colors.shading : 'none'}
          stroke={highlightArc ? colors.arcHighlight : colors.stroke}
          strokeWidth={highlightArc ? 3 : 2}
        />

        {/* Centre point */}
        {showCentre && (
          <>
            <circle
              cx={centerX}
              cy={centerY}
              r="5"
              fill={colors.primary}
            />
            <text
              x={centerX - 15}
              y={centerY - 10}
              fill={colors.textColor}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >
              {centreLabel}
            </text>
          </>
        )}

        {/* Radius line with dimension */}
        {showRadiusLine && givenType === 'radius' && (
          <>
            <line
              x1={radiusPos.x1}
              y1={radiusPos.y1}
              x2={radiusPos.x2}
              y2={radiusPos.y2}
              stroke={colors.dimensionLine}
              strokeWidth="2"
            />
            {/* Endpoint */}
            <circle
              cx={radiusPos.x2}
              cy={radiusPos.y2}
              r="4"
              fill={colors.primary}
            />
            {/* Dimension label */}
            {dimensionLabel && (
              <foreignObject
                x={labelPos.x - 40}
                y={labelPos.y - 12}
                width="80"
                height="30"
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: colors.dimensionLine,
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                >
                  {dimensionLabel}
                </div>
              </foreignObject>
            )}
          </>
        )}

        {/* Diameter line with dimension */}
        {(showDiameterLine || givenType === 'diameter') && (
          <>
            <line
              x1={diameterPos.x1}
              y1={diameterPos.y1}
              x2={diameterPos.x2}
              y2={diameterPos.y2}
              stroke={colors.dimensionLine}
              strokeWidth="2"
            />
            {/* Endpoints */}
            <circle cx={diameterPos.x1} cy={diameterPos.y1} r="4" fill={colors.primary} />
            <circle cx={diameterPos.x2} cy={diameterPos.y2} r="4" fill={colors.primary} />
            {/* Dimension label for diameter */}
            {givenType === 'diameter' && dimensionLabel && (
              <foreignObject
                x={getDimensionLabelPosition(false).x - 40}
                y={getDimensionLabelPosition(false).y - 12}
                width="80"
                height="30"
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: colors.dimensionLine,
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                >
                  {dimensionLabel}
                </div>
              </foreignObject>
            )}
          </>
        )}

        {/* Right angle marker for quarter circle and 3/4 circle */}
        {(mode === 'quarter' || mode === 'three-quarter') && (
          <path
            d={getRightAngleMarkerPath()}
            fill="none"
            stroke={colors.muted}
            strokeWidth="1.5"
          />
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

export default P6CircleVisualizer;
