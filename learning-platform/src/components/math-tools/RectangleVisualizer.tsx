import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface RectangleVisualizerProps {
  length?: string; // length label (e.g., 'l', '12cm', '15')
  width?: string; // width label (e.g., 'w', '8cm', '10')
  highlightMode?: 'perimeter' | 'area' | 'both' | 'none'; // what to highlight
  showFormula?: boolean; // show perimeter or area formula (default: false)
  showGrid?: boolean; // show grid overlay for area counting (default: false)
  gridSize?: number; // number of grid divisions (default: 10)
  vertexLabels?: [string, string, string, string]; // labels for corners [topLeft, topRight, bottomRight, bottomLeft] (e.g., ['A','B','C','D'])
  caption?: string; // optional caption
}

const RectangleVisualizer: React.FC<RectangleVisualizerProps> = ({
  length = 'l',
  width = 'w',
  highlightMode = 'none',
  showFormula = false,
  showGrid = false,
  gridSize = 10,
  vertexLabels,
  caption
}) => {
  const { theme } = useTheme();

  // SVG dimensions
  const svgWidth = 500;
  const svgHeight = 400;
  const padding = 60;

  // Rectangle dimensions (scaled to fit nicely in SVG)
  const rectWidth = 280;
  const rectHeight = 180;
  const rectX = (svgWidth - rectWidth) / 2;
  const rectY = (svgHeight - rectHeight) / 2;

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
    gridColor: 'rgba(128, 128, 128, 0.3)',
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

  // Grid lines
  const renderGrid = () => {
    if (!showGrid) return null;

    const lines = [];
    const gridCellWidth = rectWidth / gridSize;
    const gridCellHeight = rectHeight / gridSize;

    // Vertical grid lines
    for (let i = 1; i < gridSize; i++) {
      lines.push(
        <line
          key={`v-${i}`}
          x1={rectX + i * gridCellWidth}
          y1={rectY}
          x2={rectX + i * gridCellWidth}
          y2={rectY + rectHeight}
          stroke={colors.gridColor}
          strokeWidth="1"
        />
      );
    }

    // Horizontal grid lines
    for (let i = 1; i < gridSize; i++) {
      lines.push(
        <line
          key={`h-${i}`}
          x1={rectX}
          y1={rectY + i * gridCellHeight}
          x2={rectX + rectWidth}
          y2={rectY + i * gridCellHeight}
          stroke={colors.gridColor}
          strokeWidth="1"
        />
      );
    }

    return lines;
  };

  // Formula text
  const getFormulaText = () => {
    if (!showFormula) return null;

    if (highlightMode === 'perimeter' || (highlightMode === 'both' && !showFormula)) {
      return `Perimeter = 2(${length} + ${width})`;
    } else if (highlightMode === 'area') {
      return `Area = ${length} × ${width}`;
    } else if (highlightMode === 'both') {
      return `P = 2(${length} + ${width}), A = ${length} × ${width}`;
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
        style={{ display: 'block', margin: '0 auto' }}
      >
        {/* Grid overlay */}
        {renderGrid()}

        {/* Rectangle */}
        <rect
          x={rectX}
          y={rectY}
          width={rectWidth}
          height={rectHeight}
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />

        {/* Vertex labels */}
        {vertexLabels && (
          <>
            {/* Top-left */}
            <text
              x={rectX - 15}
              y={rectY - 10}
              fill={colors.textColor}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >
              {vertexLabels[0]}
            </text>
            {/* Top-right */}
            <text
              x={rectX + rectWidth + 15}
              y={rectY - 10}
              fill={colors.textColor}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >
              {vertexLabels[1]}
            </text>
            {/* Bottom-right */}
            <text
              x={rectX + rectWidth + 15}
              y={rectY + rectHeight + 20}
              fill={colors.textColor}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >
              {vertexLabels[2]}
            </text>
            {/* Bottom-left */}
            <text
              x={rectX - 15}
              y={rectY + rectHeight + 20}
              fill={colors.textColor}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >
              {vertexLabels[3]}
            </text>
          </>
        )}

        {/* Length label (top edge) */}
        <foreignObject
          x={rectX + rectWidth / 2 - 40}
          y={rectY - 35}
          width="80"
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
            <MathText>{ensureLatexWrapped(length)}</MathText>
          </div>
        </foreignObject>

        {/* Width label (left edge) */}
        <foreignObject
          x={rectX - 50}
          y={rectY + rectHeight / 2 - 15}
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
            <MathText>{ensureLatexWrapped(width)}</MathText>
          </div>
        </foreignObject>

        {/* Formula (if enabled) */}
        {showFormula && getFormulaText() && (
          <foreignObject x="50" y={svgHeight - 40} width={svgWidth - 100} height="40">
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

export default RectangleVisualizer;
