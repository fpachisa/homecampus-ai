/**
 * Percentage Stacked Bar Visualizer
 *
 * Vertical stacked bar showing composition/distribution of a whole (100%).
 * Perfect for problems like:
 * - "2/5 of the audience were adults, 25% were girls, the rest were boys"
 * - "20% of buttons are red, 80% are blue, 70% of blue are square-shaped"
 *
 * Shows percentage scale on the side with colored segments stacked vertically
 * from 0% at bottom to 100% at top.
 *
 * DESIGN PRINCIPLES (AI-Friendly):
 * - Segments specified with label, percentage, optional value
 * - Percentage scale auto-generated or customizable
 * - Brackets for labeling specific segments or groups
 * - Support for nested percentages (percentage of a segment)
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

// ============================================
// TYPE DEFINITIONS (AI-Friendly Structure)
// ============================================

interface StackedSegment {
  label: string;                // Category name: "adults", "girls", "boys"
  percentage: number;           // Percentage of whole (0-100)
  value?: string;               // Known value: "70", "$240", "?"
  color?: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'gray' | 'pink';
  highlight?: boolean;          // Highlight this segment
  subLabel?: string;            // Sub-label like "(2/5)" or "(25%)"
}

interface PercentageStackedBarVisualizerProps {
  /**
   * Title for the diagram
   * Example: "Concert Audience", "Mrs Sim's Buttons"
   */
  title?: string;

  /**
   * Segments stacked from bottom (0%) to top (100%)
   * Order: first segment at BOTTOM, last segment at TOP
   *
   * EXAMPLE - Concert audience:
   * segments: [
   *   { label: "adults", percentage: 40, color: "red", subLabel: "(2/5)" },
   *   { label: "girls", percentage: 25, color: "yellow", subLabel: "(25%)" },
   *   { label: "boys", percentage: 35, value: "70", color: "blue", highlight: true }
   * ]
   */
  segments: StackedSegment[];

  /**
   * Show percentage markers on the left side
   * Default: true
   */
  showPercentageScale?: boolean;

  /**
   * Custom percentage markers for the scale
   * Default: auto-generated based on segment boundaries
   * Example: [0, 40, 65, 100] for the concert problem
   */
  percentageMarkers?: number[];

  /**
   * Bracket highlighting specific segment(s)
   *
   * Example - bracket for "boys" showing value 70:
   * bracket: { fromSegment: 2, toSegment: 2, value: "70", position: "right" }
   */
  bracket?: {
    fromSegment: number;        // Starting segment index (0-based, 0 = bottom)
    toSegment: number;          // Ending segment index (inclusive)
    value: string;
    label?: string;
    position: 'left' | 'right';
  };

  /**
   * Second bracket for complex problems
   */
  bracket2?: {
    fromSegment: number;
    toSegment: number;
    value: string;
    label?: string;
    position: 'left' | 'right';
  };

  /**
   * Total value annotation at top or bottom
   */
  totalValue?: {
    value: string;              // "200", "?"
    label?: string;             // "Total attendance"
    position: 'top' | 'bottom';
  };

  /**
   * Show segment labels on the bar
   * Default: true
   */
  showSegmentLabels?: boolean;

  /**
   * Show percentage labels inside segments
   * Default: true
   */
  showPercentageLabels?: boolean;

  /**
   * Bar width: 'narrow', 'medium', 'wide'
   * Default: 'medium'
   */
  barWidth?: 'narrow' | 'medium' | 'wide';

  /**
   * Caption below the diagram
   */
  caption?: string;

  /**
   * Annotation text (e.g., "1% = 2 people")
   */
  annotation?: string;
}

// ============================================
// COMPONENT IMPLEMENTATION
// ============================================

const PercentageStackedBarVisualizer: React.FC<PercentageStackedBarVisualizerProps> = ({
  title,
  segments,
  showPercentageScale = true,
  percentageMarkers,
  bracket,
  bracket2,
  totalValue,
  showSegmentLabels = true,
  showPercentageLabels = true,
  barWidth = 'medium',
  caption,
  annotation
}) => {
  const { theme } = useTheme();

  // Validation
  if (!segments || segments.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500 dark:text-gray-400">
        No segments to display
      </div>
    );
  }

  // Color palette
  const colorMap: Record<string, string> = {
    red: '#ef4444',
    orange: '#f97316',
    yellow: '#eab308',
    green: '#22c55e',
    blue: '#3b82f6',
    purple: '#8b5cf6',
    gray: '#9ca3af',
    pink: '#ec4899'
  };

  const defaultColors = ['#ef4444', '#eab308', '#3b82f6', '#22c55e', '#f97316', '#8b5cf6'];

  const getSegmentColor = (index: number, specifiedColor?: string): string => {
    if (specifiedColor && colorMap[specifiedColor]) {
      return colorMap[specifiedColor];
    }
    return defaultColors[index % defaultColors.length];
  };

  const getLighterColor = (color: string): string => {
    return color + '40'; // ~25% opacity
  };

  // Strip LaTeX escapes
  const cleanValue = (value: string): string => {
    return value.replace(/\\+\$/g, '$');
  };

  // SVG dimensions
  const barWidthMap = { narrow: 80, medium: 120, wide: 160 };
  const actualBarWidth = barWidthMap[barWidth];
  const barHeight = 320;

  // Check if there's a right bracket
  const hasRightBracket = bracket?.position === 'right' || bracket2?.position === 'right';

  // Increase margins for annotation text and brackets
  const leftMargin = showPercentageScale ? 70 : 30;
  const rightMargin = hasRightBracket ? 140 : 80;
  // Extra space when both title and top totalValue are present
  const hasTitleAndTopTotal = title && totalValue?.position === 'top';
  const topMargin = hasTitleAndTopTotal ? 75 : (title ? 50 : 30);
  const bottomMargin = (totalValue?.position === 'bottom' ? 40 : 20) + (annotation ? 40 : 0);

  const svgWidth = leftMargin + actualBarWidth + rightMargin;
  const svgHeight = topMargin + barHeight + bottomMargin;

  const barX = leftMargin;
  const barY = topMargin;

  // Pixels per percentage point
  const pxPerPercent = barHeight / 100;

  // Generate percentage markers
  const getPercentageMarkers = (): number[] => {
    if (percentageMarkers) return percentageMarkers;

    const markers = new Set<number>([0]);
    let cumulative = 0;
    segments.forEach(seg => {
      cumulative += seg.percentage;
      markers.add(Math.round(cumulative));
    });
    if (!markers.has(100)) markers.add(100);

    return Array.from(markers).sort((a, b) => a - b);
  };

  // Calculate segment positions (from bottom to top)
  const getSegmentY = (segmentIndex: number): { y: number; height: number } => {
    let cumulativeFromTop = 0;
    for (let i = segments.length - 1; i > segmentIndex; i--) {
      cumulativeFromTop += segments[i].percentage;
    }
    const segmentHeight = segments[segmentIndex].percentage * pxPerPercent;
    const y = barY + cumulativeFromTop * pxPerPercent;
    return { y, height: segmentHeight };
  };

  // Render percentage scale
  const renderPercentageScale = () => {
    if (!showPercentageScale) return null;

    const markers = getPercentageMarkers();

    return (
      <g>
        {/* Scale line */}
        <line
          x1={barX - 10}
          y1={barY}
          x2={barX - 10}
          y2={barY + barHeight}
          stroke={theme.colors.border}
          strokeWidth={1}
        />

        {/* Markers */}
        {markers.map(percent => {
          const y = barY + barHeight - (percent * pxPerPercent);
          return (
            <g key={percent}>
              <line
                x1={barX - 15}
                y1={y}
                x2={barX - 5}
                y2={y}
                stroke={theme.colors.textSecondary}
                strokeWidth={1}
              />
              <text
                x={barX - 20}
                y={y + 4}
                textAnchor="end"
                className="text-xs"
                fill={theme.colors.textMuted}
              >
                {percent}%
              </text>
            </g>
          );
        })}
      </g>
    );
  };

  // Render segments
  const renderSegments = () => {
    return segments.map((segment, index) => {
      const { y, height } = getSegmentY(index);
      const segColor = getSegmentColor(index, segment.color);

      return (
        <g key={index}>
          {/* Segment rectangle */}
          <rect
            x={barX}
            y={y}
            width={actualBarWidth}
            height={height}
            fill={getLighterColor(segColor)}
            stroke={segment.highlight ? '#ef4444' : segColor}
            strokeWidth={segment.highlight ? 3 : 2}
          />

          {/* Segment label (outside right) */}
          {/* Position further right if there's a bracket to avoid overlap */}
          {showSegmentLabels && height > 20 && (
            <text
              x={barX + actualBarWidth + (hasRightBracket ? 70 : 10)}
              y={y + height / 2 + 5}
              textAnchor="start"
              className="text-sm font-medium"
              fill={theme.colors.textPrimary}
            >
              {segment.label}
              {segment.subLabel && (
                <tspan className="text-xs" fill={theme.colors.textMuted}>
                  {' '}{segment.subLabel}
                </tspan>
              )}
            </text>
          )}

          {/* Value inside segment */}
          {segment.value && height > 25 && (
            <text
              x={barX + actualBarWidth / 2}
              y={y + height / 2 + (showPercentageLabels ? -5 : 5)}
              textAnchor="middle"
              className="text-sm font-bold"
              fill={theme.colors.textPrimary}
            >
              {cleanValue(segment.value)}
            </text>
          )}

          {/* Percentage inside segment */}
          {showPercentageLabels && height > 35 && (
            <text
              x={barX + actualBarWidth / 2}
              y={y + height / 2 + (segment.value ? 10 : 5)}
              textAnchor="middle"
              className="text-xs"
              fill={theme.colors.textMuted}
            >
              {segment.percentage}%
            </text>
          )}
        </g>
      );
    });
  };

  // Render bracket
  const renderBracket = (bracketConfig: NonNullable<typeof bracket>, isSecond: boolean = false) => {
    const fromPos = getSegmentY(bracketConfig.fromSegment);
    const toPos = getSegmentY(bracketConfig.toSegment);

    const bracketTop = Math.min(fromPos.y, toPos.y);
    const bracketBottom = Math.max(fromPos.y + fromPos.height, toPos.y + toPos.height);

    const isLeft = bracketConfig.position === 'left';
    const x = isLeft ? barX - 25 : barX + actualBarWidth + 25;
    const bracketX = isLeft ? x - 15 : x + 15;

    return (
      <g key={isSecond ? 'bracket2' : 'bracket1'}>
        {/* Vertical bracket */}
        <path
          d={`M ${x} ${bracketTop}
              L ${bracketX} ${bracketTop}
              L ${bracketX} ${bracketBottom}
              L ${x} ${bracketBottom}`}
          fill="none"
          stroke={theme.colors.textSecondary}
          strokeWidth={2}
        />
        {/* Value label */}
        <text
          x={isLeft ? bracketX - 12 : bracketX + 12}
          y={(bracketTop + bracketBottom) / 2 + 5}
          textAnchor="middle"
          className="text-sm font-bold"
          fill={theme.colors.brand}
        >
          {cleanValue(bracketConfig.value)}
        </text>
        {/* Additional label */}
        {bracketConfig.label && (
          <text
            x={isLeft ? bracketX - 12 : bracketX + 12}
            y={(bracketTop + bracketBottom) / 2 + 20}
            textAnchor="middle"
            className="text-xs"
            fill={theme.colors.textMuted}
          >
            {bracketConfig.label}
          </text>
        )}
      </g>
    );
  };

  // Render total value
  const renderTotalValue = () => {
    if (!totalValue) return null;

    const isTop = totalValue.position === 'top';
    const y = isTop ? barY - 15 : barY + barHeight + 25;

    return (
      <g>
        <text
          x={barX + actualBarWidth / 2}
          y={y}
          textAnchor="middle"
          className="text-sm font-bold"
          fill={theme.colors.brand}
        >
          {totalValue.label && `${totalValue.label}: `}
          {cleanValue(totalValue.value)}
        </text>
      </g>
    );
  };

  // Render annotation
  const renderAnnotation = () => {
    if (!annotation) return null;

    const y = barY + barHeight + (totalValue?.position === 'bottom' ? 50 : 30);

    return (
      <text
        x={svgWidth / 2}
        y={y}
        textAnchor="middle"
        className="text-sm font-semibold"
        fill={theme.colors.brand}
      >
        {cleanValue(annotation)}
      </text>
    );
  };

  return (
    <div
      className="my-4 p-4 rounded-lg border"
      style={{
        borderColor: theme.colors.border,
        backgroundColor: theme.colors.surface
      }}
    >
      <svg
        width="100%"
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="mx-auto"
        style={{ maxWidth: `${svgWidth}px` }}
      >
        {/* Title */}
        {title && (
          <text
            x={svgWidth / 2}
            y={22}
            textAnchor="middle"
            className="text-base font-bold"
            fill={theme.colors.textPrimary}
          >
            {title}
          </text>
        )}

        {/* Percentage scale */}
        {renderPercentageScale()}

        {/* Segments */}
        {renderSegments()}

        {/* Brackets */}
        {bracket && renderBracket(bracket)}
        {bracket2 && renderBracket(bracket2, true)}

        {/* Total value */}
        {renderTotalValue()}

        {/* Annotation */}
        {renderAnnotation()}
      </svg>

      {/* Caption */}
      {caption && (
        <div
          className="text-sm mt-3 pt-3 border-t text-center"
          style={{
            borderColor: theme.colors.border,
            color: theme.colors.textSecondary
          }}
        >
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default PercentageStackedBarVisualizer;
