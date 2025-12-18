/**
 * Percentage Bar Visualizer
 *
 * Primary tool for P6 Percentage topic - handles all horizontal bar-based
 * percentage visualizations including:
 * - Single bars with percentage segments (spent/left, used/remaining)
 * - Multiple bars for comparison (before/after, person A/B)
 * - Increase/decrease scenarios with reference lines
 * - Brackets for totals, differences, partial values
 * - Percentage scale markers on axis
 *
 * DESIGN PRINCIPLES (AI-Friendly):
 * - Parameters are flat and explicit (no deep nesting)
 * - Each segment defined with percentage AND optional value
 * - Brackets specified separately for flexibility
 * - Supports all P6 percentage visualization patterns
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';

// ============================================
// TYPE DEFINITIONS (AI-Friendly Structure)
// ============================================

interface PercentageSegment {
  percentage: number;         // Percentage this segment represents (0-100+)
  value?: string;             // Display value: "$240", "70", "?"
  label?: string;             // Segment label: "spent", "left", "increase"
  color?: 'green' | 'yellow' | 'blue' | 'red' | 'orange' | 'gray' | 'pink' | 'purple';
  highlight?: boolean;        // Highlight this segment with bold border
}

interface PercentageBar {
  label: string;              // Row label: "Ali", "Before", "Monday"
  segments: PercentageSegment[];
  totalValue?: string;        // Total value for this bar (shown at end): "$800", "?"
}

interface PercentageBarVisualizerProps {
  /**
   * Title for the diagram
   * Example: "Ali and Ben's Money", "Before and After"
   */
  title?: string;

  /**
   * Array of bars to display (1-4 bars)
   *
   * SINGLE BAR - Hassan's money (spent vs left):
   * bars: [{
   *   label: "Hassan",
   *   segments: [
   *     { percentage: 30, value: "$240", label: "spent", color: "yellow" },
   *     { percentage: 70, label: "left", color: "green" }
   *   ]
   * }]
   *
   * TWO BARS - Before/After comparison:
   * bars: [
   *   { label: "Monday", segments: [{ percentage: 100, value: "80", color: "green" }] },
   *   { label: "Tuesday", segments: [
   *     { percentage: 100, value: "80", color: "green" },
   *     { percentage: 50, value: "40", label: "increase", color: "yellow", highlight: true }
   *   ]}
   * ]
   */
  bars: PercentageBar[];

  /**
   * Show percentage scale markers on top (0%, 10%, 20%... 100%)
   * Default: true for single bar, auto for multi-bar
   */
  showPercentageScale?: boolean;

  /**
   * Custom percentage markers (default: [0, 25, 50, 75, 100] or based on segments)
   * Example: [0, 30, 70, 100] for Hassan's money problem
   */
  percentageMarkers?: number[];

  /**
   * Show a dashed reference line at specific percentage
   * Used for increase/decrease problems to show original 100%
   *
   * Example: referenceLine: { percentage: 100, label: "Original (100%)" }
   */
  referenceLine?: {
    percentage: number;
    label?: string;
  };

  /**
   * Bracket spanning specific percentage range on a bar
   * Used to label a portion: "This part is $240"
   *
   * Example - showing $240 is 30% of the bar:
   * partialBracket: { barIndex: 0, fromPercent: 0, toPercent: 30, value: "$240", position: "bottom" }
   */
  partialBracket?: {
    barIndex: number;
    fromPercent: number;
    toPercent: number;
    value: string;
    label?: string;
    position: 'top' | 'bottom';
  };

  /**
   * Second partial bracket for complex problems
   */
  partialBracket2?: {
    barIndex: number;
    fromPercent: number;
    toPercent: number;
    value: string;
    label?: string;
    position: 'top' | 'bottom';
  };

  /**
   * Bracket showing total of one or more bars
   *
   * Example - total is $800:
   * totalBracket: { barIndices: [0], value: "$800", position: "right" }
   */
  totalBracket?: {
    barIndices: number[];
    value: string;
    label?: string;
    position?: 'right' | 'left';
  };

  /**
   * Bracket showing difference between two bars
   * Used for increase/decrease problems
   *
   * Example - increase of 40:
   * differenceBracket: { barIndices: [0, 1], value: "40", label: "increase" }
   */
  differenceBracket?: {
    barIndices: [number, number];
    value: string;
    label?: string;
  };

  /**
   * Show percentage labels inside/above segments
   * Default: true
   */
  showSegmentPercentages?: boolean;

  /**
   * Show segment value labels
   * Default: true
   */
  showSegmentValues?: boolean;

  /**
   * Caption below the diagram
   */
  caption?: string;

  /**
   * Annotation text shown below bars (e.g., "1% = $8")
   */
  annotation?: string;
}

// ============================================
// COMPONENT IMPLEMENTATION
// ============================================

const PercentageBarVisualizer: React.FC<PercentageBarVisualizerProps> = ({
  title,
  bars,
  showPercentageScale = true,
  percentageMarkers,
  referenceLine,
  partialBracket,
  partialBracket2,
  totalBracket,
  differenceBracket,
  showSegmentPercentages = true,
  showSegmentValues = true,
  caption,
  annotation
}) => {
  const { theme } = useTheme();

  // Validation
  if (!bars || bars.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500 dark:text-gray-400">
        No bars to display
      </div>
    );
  }

  // Color palette
  const colorMap: Record<string, string> = {
    green: '#22c55e',
    yellow: '#eab308',
    blue: '#3b82f6',
    red: '#ef4444',
    orange: '#f97316',
    gray: '#9ca3af',
    pink: '#ec4899',
    purple: '#8b5cf6'
  };

  const defaultColors = ['#22c55e', '#eab308', '#3b82f6', '#f97316', '#ec4899', '#8b5cf6'];

  const getSegmentColor = (segmentIndex: number, specifiedColor?: string): string => {
    if (specifiedColor && colorMap[specifiedColor]) {
      return colorMap[specifiedColor];
    }
    return defaultColors[segmentIndex % defaultColors.length];
  };

  const getLighterColor = (color: string): string => {
    return color + '35'; // ~21% opacity
  };

  // Strip LaTeX escapes from currency
  const cleanValue = (value: string): string => {
    return value.replace(/\\+\$/g, '$');
  };

  // Calculate max percentage across all bars for scaling
  const getBarTotalPercentage = (bar: PercentageBar): number => {
    return bar.segments.reduce((sum, seg) => sum + seg.percentage, 0);
  };
  const maxPercentage = Math.max(...bars.map(getBarTotalPercentage), 100);

  // SVG dimensions
  const svgWidth = 560;
  const labelWidth = 90;
  const barStartX = labelWidth + 20;
  const rightMargin = totalBracket ? 70 : 30;
  const barMaxWidth = svgWidth - barStartX - rightMargin;

  // Scale: pixels per percentage point
  const pxPerPercent = barMaxWidth / maxPercentage;

  const barHeight = 40;
  const barSpacing = 65;

  // Calculate dynamic height
  const hasTopBracket = partialBracket?.position === 'top' || partialBracket2?.position === 'top';
  const hasBottomBracket = partialBracket?.position === 'bottom' || partialBracket2?.position === 'bottom';
  const hasScale = showPercentageScale;

  const topPadding = (hasScale ? 40 : 0) + (hasTopBracket ? 30 : 0) + (title ? 30 : 0);
  const bottomPadding = (hasBottomBracket ? 35 : 0) + (annotation ? 30 : 0);

  const svgHeight = topPadding + (bars.length * barSpacing) + bottomPadding + 30;
  const barsStartY = topPadding + 15;

  // Generate percentage markers if not provided
  const getPercentageMarkers = (): number[] => {
    if (percentageMarkers) return percentageMarkers;

    // Auto-generate based on segments
    const markers = new Set<number>([0]);
    bars.forEach(bar => {
      let cumulative = 0;
      bar.segments.forEach(seg => {
        cumulative += seg.percentage;
        markers.add(Math.round(cumulative));
      });
    });
    markers.add(100);
    if (maxPercentage > 100) markers.add(maxPercentage);

    return Array.from(markers).sort((a, b) => a - b);
  };

  // Render percentage scale
  const renderPercentageScale = () => {
    if (!showPercentageScale) return null;

    const markers = getPercentageMarkers();
    const scaleY = title ? 50 : 25;

    // Calculate which markers need to be offset due to overlap
    // Minimum pixel distance to avoid text overlap (based on typical "100%" width ~30px)
    const minPixelDistance = 35;

    // Track which markers should be offset (staggered up)
    const markerOffsets: Map<number, number> = new Map();

    for (let i = 0; i < markers.length; i++) {
      const currentX = barStartX + markers[i] * pxPerPercent;

      // Check distance to previous marker
      if (i > 0) {
        const prevX = barStartX + markers[i - 1] * pxPerPercent;
        const distance = currentX - prevX;

        // If too close to previous marker, check if previous was offset
        if (distance < minPixelDistance) {
          const prevOffset = markerOffsets.get(markers[i - 1]) || 0;
          // Alternate: if prev was normal (0), offset this one up (-15); if prev was up, keep this normal
          markerOffsets.set(markers[i], prevOffset === 0 ? -15 : 0);
        } else {
          markerOffsets.set(markers[i], 0);
        }
      } else {
        markerOffsets.set(markers[i], 0);
      }
    }

    return (
      <g>
        {/* Scale line */}
        <line
          x1={barStartX}
          y1={scaleY}
          x2={barStartX + maxPercentage * pxPerPercent}
          y2={scaleY}
          stroke={theme.colors.border}
          strokeWidth={1}
        />

        {/* Markers */}
        {markers.map(percent => {
          const x = barStartX + percent * pxPerPercent;
          const yOffset = markerOffsets.get(percent) || 0;
          const textY = scaleY - 10 + yOffset;

          return (
            <g key={percent}>
              <line
                x1={x}
                y1={scaleY - 5}
                x2={x}
                y2={scaleY + 5}
                stroke={theme.colors.textSecondary}
                strokeWidth={1}
              />
              <text
                x={x}
                y={textY}
                textAnchor="middle"
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

  // Check if a segment is covered by a difference bracket
  const isSegmentInDifferenceBracket = (barIndex: number, segStartPercent: number): boolean => {
    if (!differenceBracket) return false;

    const [idx1, idx2] = differenceBracket.barIndices;
    const bar1 = bars[idx1];
    const bar2 = bars[idx2];
    if (!bar1 || !bar2) return false;

    // Only applies to the bar with the longer total
    const bar1Percent = getBarTotalPercentage(bar1);
    const bar2Percent = getBarTotalPercentage(bar2);
    const longerIdx = bar1Percent > bar2Percent ? idx1 : idx2;

    if (barIndex !== longerIdx) return false;

    // Check if this segment falls within the difference range
    const shorterPercent = Math.min(bar1Percent, bar2Percent);

    // Segment is in difference area if it starts at or after the shorter bar's end
    return segStartPercent >= shorterPercent - 0.01;
  };

  // Render a single bar
  const renderBar = (bar: PercentageBar, barIndex: number) => {
    const y = barsStartY + barIndex * barSpacing;
    let currentX = barStartX;
    let cumulativePercent = 0;

    return (
      <g key={barIndex}>
        {/* Bar label */}
        <text
          x={labelWidth}
          y={y + barHeight / 2 + 5}
          textAnchor="end"
          className="text-sm font-medium"
          fill={theme.colors.textPrimary}
        >
          {bar.label}
        </text>

        {/* Segments */}
        {bar.segments.map((segment, segIndex) => {
          const segWidth = segment.percentage * pxPerPercent;
          const segColor = getSegmentColor(segIndex, segment.color);
          const segStartPercent = cumulativePercent;
          cumulativePercent += segment.percentage;
          const segX = currentX;
          currentX += segWidth;

          // Check if this segment is covered by a difference bracket (skip internal text if so)
          const isCoveredByDiffBracket = isSegmentInDifferenceBracket(barIndex, segStartPercent);

          // Intelligent text placement based on segment width
          // Estimate text widths: value ~20-40px, label ~30-60px, percentage ~25-35px
          const isNarrow = segWidth < 70;

          // Decide what to show and where based on available space
          const hasValue = showSegmentValues && segment.value;
          const hasLabel = segment.label;
          const hasPercentage = showSegmentPercentages;

          // For very narrow segments: show value only, move percentage outside
          // For narrow segments: show value and percentage, skip label inside
          // For medium/wide: show everything
          // If covered by difference bracket, skip internal text (bracket will show it)

          let showValueInside = hasValue && segWidth > 25 && !isCoveredByDiffBracket;
          let showPercentageInside = hasPercentage && !isNarrow && !isCoveredByDiffBracket;
          let showLabelAbove = hasLabel && segWidth > 30;

          // For narrow segments with both value and percentage, only show value
          if (isNarrow && hasValue && hasPercentage) {
            showPercentageInside = false;
          }

          // Calculate vertical positions based on what's shown
          const valueY = showPercentageInside
            ? y + barHeight / 2 - 3
            : y + barHeight / 2 + 5;
          const percentageY = showValueInside
            ? y + barHeight / 2 + 12
            : y + barHeight / 2 + 5;

          return (
            <g key={segIndex}>
              {/* Segment rectangle */}
              <rect
                x={segX}
                y={y}
                width={segWidth}
                height={barHeight}
                fill={getLighterColor(segColor)}
                stroke={segment.highlight ? '#ef4444' : segColor}
                strokeWidth={segment.highlight ? 3 : 2}
                rx={segIndex === 0 ? 4 : 0}
                ry={segIndex === 0 ? 4 : 0}
              />

              {/* Segment divider (dashed line) */}
              {segIndex > 0 && (
                <line
                  x1={segX}
                  y1={y}
                  x2={segX}
                  y2={y + barHeight}
                  stroke={segColor}
                  strokeWidth={1}
                  strokeDasharray="4 2"
                />
              )}

              {/* Segment label (above segment) */}
              {showLabelAbove && (
                <text
                  x={segX + segWidth / 2}
                  y={y - 6}
                  textAnchor="middle"
                  className="text-xs font-medium"
                  fill={theme.colors.textSecondary}
                >
                  {segment.label}
                </text>
              )}

              {/* Segment value (inside bar) */}
              {showValueInside && (
                <text
                  x={segX + segWidth / 2}
                  y={valueY}
                  textAnchor="middle"
                  className="text-sm font-bold"
                  fill={theme.colors.textPrimary}
                >
                  {cleanValue(segment.value!)}
                </text>
              )}

              {/* Segment percentage (inside bar for wide segments, or as subscript for narrow) */}
              {hasPercentage && showPercentageInside && (
                <text
                  x={segX + segWidth / 2}
                  y={percentageY}
                  textAnchor="middle"
                  className="text-xs"
                  fill={theme.colors.textMuted}
                >
                  {segment.percentage}%
                </text>
              )}

              {/* For narrow segments: show percentage below the segment or as a small subscript */}
              {/* Skip if covered by difference bracket */}
              {hasPercentage && isNarrow && !showPercentageInside && segWidth > 20 && !isCoveredByDiffBracket && (
                <text
                  x={segX + segWidth / 2}
                  y={y + barHeight + 12}
                  textAnchor="middle"
                  className="text-xs"
                  fill={theme.colors.textMuted}
                >
                  {segment.percentage}%
                </text>
              )}
            </g>
          );
        })}

        {/* Total value at end of bar */}
        {bar.totalValue && (
          <text
            x={currentX + 10}
            y={y + barHeight / 2 + 5}
            textAnchor="start"
            className="text-sm font-semibold"
            fill={theme.colors.brand}
          >
            {cleanValue(bar.totalValue)}
          </text>
        )}
      </g>
    );
  };

  // Render reference line
  const renderReferenceLine = () => {
    if (!referenceLine) return null;

    const x = barStartX + referenceLine.percentage * pxPerPercent;
    const topY = barsStartY - 5;
    const bottomY = barsStartY + bars.length * barSpacing - barSpacing + barHeight + 10;

    return (
      <g>
        <line
          x1={x}
          y1={topY}
          x2={x}
          y2={bottomY}
          stroke={theme.colors.textMuted}
          strokeWidth={2}
          strokeDasharray="6 4"
        />
        {referenceLine.label && (
          <text
            x={x}
            y={bottomY + 15}
            textAnchor="middle"
            className="text-xs"
            fill={theme.colors.textMuted}
          >
            {referenceLine.label}
          </text>
        )}
      </g>
    );
  };

  // Render partial bracket
  const renderPartialBracket = (bracket: NonNullable<typeof partialBracket>, isSecond: boolean = false) => {
    if (bracket.barIndex >= bars.length) return null;

    const y = barsStartY + bracket.barIndex * barSpacing;
    const bracketStartX = barStartX + bracket.fromPercent * pxPerPercent;
    const bracketEndX = barStartX + bracket.toPercent * pxPerPercent;
    const bracketWidth = bracketEndX - bracketStartX;

    const isTop = bracket.position === 'top';
    const bracketY = isTop ? y - 8 : y + barHeight + 8;
    const bracketEndY = isTop ? y - 20 : y + barHeight + 20;
    const labelY = isTop ? y - 28 : y + barHeight + 34;

    return (
      <g key={isSecond ? 'partial2' : 'partial1'}>
        {/* Bracket shape */}
        <path
          d={`M ${bracketStartX} ${bracketY}
              L ${bracketStartX} ${bracketEndY}
              L ${bracketEndX} ${bracketEndY}
              L ${bracketEndX} ${bracketY}`}
          fill="none"
          stroke={theme.colors.textSecondary}
          strokeWidth={1.5}
        />
        {/* Value label */}
        <text
          x={bracketStartX + bracketWidth / 2}
          y={labelY}
          textAnchor="middle"
          className="text-sm font-bold"
          fill={theme.colors.brand}
        >
          {cleanValue(bracket.value)}
        </text>
        {/* Additional label */}
        {bracket.label && (
          <text
            x={bracketStartX + bracketWidth / 2}
            y={labelY + 14}
            textAnchor="middle"
            className="text-xs"
            fill={theme.colors.textMuted}
          >
            {bracket.label}
          </text>
        )}
      </g>
    );
  };

  // Render total bracket
  const renderTotalBracket = () => {
    if (!totalBracket || totalBracket.barIndices.length === 0) return null;

    const indices = totalBracket.barIndices;
    const minIdx = Math.min(...indices);
    const maxIdx = Math.max(...indices);
    const topY = barsStartY + minIdx * barSpacing;
    const bottomY = barsStartY + maxIdx * barSpacing + barHeight;

    // Find the longest bar among selected
    let maxBarWidth = 0;
    indices.forEach(idx => {
      if (bars[idx]) {
        const barWidth = getBarTotalPercentage(bars[idx]) * pxPerPercent;
        maxBarWidth = Math.max(maxBarWidth, barWidth);
      }
    });

    const isLeft = totalBracket.position === 'left';
    const x = isLeft ? barStartX - 15 : barStartX + maxBarWidth + 15;
    const bracketX = isLeft ? x - 15 : x + 15;

    return (
      <g>
        {/* Vertical bracket */}
        <path
          d={`M ${x} ${topY}
              L ${bracketX} ${topY}
              L ${bracketX} ${bottomY}
              L ${x} ${bottomY}`}
          fill="none"
          stroke={theme.colors.textSecondary}
          strokeWidth={2}
        />
        {/* Value label */}
        <text
          x={isLeft ? bracketX - 15 : bracketX + 15}
          y={(topY + bottomY) / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-sm font-bold"
          fill={theme.colors.brand}
          transform={`rotate(-90, ${isLeft ? bracketX - 15 : bracketX + 15}, ${(topY + bottomY) / 2})`}
        >
          {cleanValue(totalBracket.value)}
        </text>
        {/* Additional label */}
        {totalBracket.label && (
          <text
            x={isLeft ? bracketX - 30 : bracketX + 30}
            y={(topY + bottomY) / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-xs"
            fill={theme.colors.textMuted}
            transform={`rotate(-90, ${isLeft ? bracketX - 30 : bracketX + 30}, ${(topY + bottomY) / 2})`}
          >
            {totalBracket.label}
          </text>
        )}
      </g>
    );
  };

  // Render difference bracket
  const renderDifferenceBracket = () => {
    if (!differenceBracket) return null;

    const [idx1, idx2] = differenceBracket.barIndices;
    const bar1 = bars[idx1];
    const bar2 = bars[idx2];
    if (!bar1 || !bar2) return null;

    const bar1Percent = getBarTotalPercentage(bar1);
    const bar2Percent = getBarTotalPercentage(bar2);

    const longerIdx = bar1Percent > bar2Percent ? idx1 : idx2;
    const shorterPercent = Math.min(bar1Percent, bar2Percent);
    const longerPercent = Math.max(bar1Percent, bar2Percent);

    const y = barsStartY + longerIdx * barSpacing;
    const diffStartX = barStartX + shorterPercent * pxPerPercent;
    const diffEndX = barStartX + longerPercent * pxPerPercent;

    return (
      <g>
        {/* Highlight rectangle for difference */}
        <rect
          x={diffStartX}
          y={y}
          width={diffEndX - diffStartX}
          height={barHeight}
          fill="#ef444425"
          stroke="#ef4444"
          strokeWidth={2}
          rx={0}
        />
        {/* Difference value */}
        <text
          x={diffStartX + (diffEndX - diffStartX) / 2}
          y={y + barHeight / 2 + (differenceBracket.label ? -5 : 5)}
          textAnchor="middle"
          className="text-sm font-bold"
          fill="#ef4444"
        >
          {cleanValue(differenceBracket.value)}
        </text>
        {/* Difference label */}
        {differenceBracket.label && (
          <text
            x={diffStartX + (diffEndX - diffStartX) / 2}
            y={y + barHeight / 2 + 10}
            textAnchor="middle"
            className="text-xs"
            fill="#ef4444"
          >
            {differenceBracket.label}
          </text>
        )}
      </g>
    );
  };

  // Render annotation
  const renderAnnotation = () => {
    if (!annotation) return null;

    const y = barsStartY + bars.length * barSpacing + 10;

    return (
      <text
        x={barStartX + (100 * pxPerPercent) / 2}
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

        {/* Reference line (behind bars) */}
        {renderReferenceLine()}

        {/* Bars */}
        {bars.map((bar, index) => renderBar(bar, index))}

        {/* Brackets */}
        {partialBracket && renderPartialBracket(partialBracket)}
        {partialBracket2 && renderPartialBracket(partialBracket2, true)}
        {renderTotalBracket()}
        {renderDifferenceBracket()}

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
          {caption}
        </div>
      )}
    </div>
  );
};

export default PercentageBarVisualizer;
