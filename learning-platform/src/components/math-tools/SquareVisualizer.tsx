import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface SquareVisualizerProps {
  side?: string; // side length label (e.g., 's', '10cm', '15')
  highlightMode?: 'perimeter' | 'area' | 'both' | 'none'; // what to highlight
  showFormula?: boolean; // show perimeter or area formula (default: false)
  showGrid?: boolean; // show grid overlay for area counting (default: false)
  gridSize?: number; // number of grid divisions (default: 10)
  showEqualMarks?: boolean; // show tick marks indicating equal sides (default: true)
  vertexLabels?: [string, string, string, string]; // labels for corners [topLeft, topRight, bottomRight, bottomLeft]
  caption?: string; // optional caption
}

const SquareVisualizer: React.FC<SquareVisualizerProps> = ({
  side = 's',
  highlightMode = 'none',
  showFormula = false,
  showGrid = false,
  gridSize = 10,
  showEqualMarks = true,
  vertexLabels,
  caption
}) => {
  const { theme } = useTheme();

  // SVG dimensions
  const svgWidth = 500;
  const svgHeight = 400;

  // Square dimensions (centered, equal sides)
  const squareSize = 200;
  const squareX = (svgWidth - squareSize) / 2;
  const squareY = (svgHeight - squareSize) / 2;

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
    const gridCellSize = squareSize / gridSize;

    // Vertical grid lines
    for (let i = 1; i < gridSize; i++) {
      lines.push(
        <line
          key={`v-${i}`}
          x1={squareX + i * gridCellSize}
          y1={squareY}
          x2={squareX + i * gridCellSize}
          y2={squareY + squareSize}
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
          x1={squareX}
          y1={squareY + i * gridCellSize}
          x2={squareX + squareSize}
          y2={squareY + i * gridCellSize}
          stroke={colors.gridColor}
          strokeWidth="1"
        />
      );
    }

    return lines;
  };

  // Equal marks (tick marks on sides to indicate equal lengths)
  const renderEqualMarks = () => {
    if (!showEqualMarks) return null;

    const markSize = 8;
    const marks = [];

    // Top side mark
    marks.push(
      <line
        key="mark-top"
        x1={squareX + squareSize / 2}
        y1={squareY - markSize}
        x2={squareX + squareSize / 2}
        y2={squareY + markSize}
        stroke={colors.textColor}
        strokeWidth="2"
      />
    );

    // Right side mark
    marks.push(
      <line
        key="mark-right"
        x1={squareX + squareSize - markSize}
        y1={squareY + squareSize / 2}
        x2={squareX + squareSize + markSize}
        y2={squareY + squareSize / 2}
        stroke={colors.textColor}
        strokeWidth="2"
      />
    );

    // Bottom side mark
    marks.push(
      <line
        key="mark-bottom"
        x1={squareX + squareSize / 2}
        y1={squareY + squareSize - markSize}
        x2={squareX + squareSize / 2}
        y2={squareY + squareSize + markSize}
        stroke={colors.textColor}
        strokeWidth="2"
      />
    );

    // Left side mark
    marks.push(
      <line
        key="mark-left"
        x1={squareX - markSize}
        y1={squareY + squareSize / 2}
        x2={squareX + markSize}
        y2={squareY + squareSize / 2}
        stroke={colors.textColor}
        strokeWidth="2"
      />
    );

    return marks;
  };

  // Formula text
  const getFormulaText = () => {
    if (!showFormula) return null;

    if (highlightMode === 'perimeter') {
      return `Perimeter = 4 × ${side} = 4${side}`;
    } else if (highlightMode === 'area') {
      return `Area = ${side} × ${side} = ${side}²`;
    } else if (highlightMode === 'both') {
      return `P = 4${side}, A = ${side}²`;
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

        {/* Square */}
        <rect
          x={squareX}
          y={squareY}
          width={squareSize}
          height={squareSize}
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
        />

        {/* Equal marks */}
        {renderEqualMarks()}

        {/* Vertex labels */}
        {vertexLabels && (
          <>
            {/* Top-left */}
            <text
              x={squareX - 15}
              y={squareY - 10}
              fill={colors.textColor}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >
              {vertexLabels[0]}
            </text>
            {/* Top-right */}
            <text
              x={squareX + squareSize + 15}
              y={squareY - 10}
              fill={colors.textColor}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >
              {vertexLabels[1]}
            </text>
            {/* Bottom-right */}
            <text
              x={squareX + squareSize + 15}
              y={squareY + squareSize + 20}
              fill={colors.textColor}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >
              {vertexLabels[2]}
            </text>
            {/* Bottom-left */}
            <text
              x={squareX - 15}
              y={squareY + squareSize + 20}
              fill={colors.textColor}
              fontSize="16"
              fontWeight="bold"
              textAnchor="middle"
            >
              {vertexLabels[3]}
            </text>
          </>
        )}

        {/* Side label (top edge) */}
        <foreignObject
          x={squareX + squareSize / 2 - 30}
          y={squareY - 40}
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
            <MathText>{ensureLatexWrapped(side)}</MathText>
          </div>
        </foreignObject>

        {/* Side label (left edge) */}
        <foreignObject
          x={squareX - 50}
          y={squareY + squareSize / 2 - 15}
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
            <MathText>{ensureLatexWrapped(side)}</MathText>
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

export default SquareVisualizer;
