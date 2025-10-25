/**
 * Venn Diagram 3-Set Visualizer
 *
 * Interactive three-set Venn diagram for teaching advanced set operations,
 * complex counting problems, and set identities.
 *
 * 8 Regions:
 * 1. A only
 * 2. B only
 * 3. C only
 * 4. A∩B only (not C)
 * 5. A∩C only (not B)
 * 6. B∩C only (not A)
 * 7. A∩B∩C (center - all three)
 * 8. Neither
 */

import React from 'react';

interface VennDiagram3SetProps {
  // Set labels
  setALabel?: string;
  setBLabel?: string;
  setCLabel?: string;
  universalSetLabel?: string;

  // Region data (can be elements array or just count)
  aOnly?: string[] | number;
  bOnly?: string[] | number;
  cOnly?: string[] | number;
  abOnly?: string[] | number;        // A∩B but not C
  acOnly?: string[] | number;        // A∩C but not B
  bcOnly?: string[] | number;        // B∩C but not A
  abc?: string[] | number;           // A∩B∩C (center)
  neither?: string[] | number;

  // Visual options
  showElements?: boolean;
  showRegionCounts?: boolean;
  shadeRegions?: string[];           // Array of region names to shade
  highlightSets?: string[];          // Array of set names to highlight

  // Styling
  setAColor?: string;
  setBColor?: string;
  setCColor?: string;
  shadeColor?: string;

  // Optional caption
  caption?: string;
}

const VennDiagram3SetVisualizer: React.FC<VennDiagram3SetProps> = ({
  setALabel = 'A',
  setBLabel = 'B',
  setCLabel = 'C',
  universalSetLabel = 'U',
  aOnly = [],
  bOnly = [],
  cOnly = [],
  abOnly = [],
  acOnly = [],
  bcOnly = [],
  abc = [],
  neither = [],
  showElements = false,
  showRegionCounts = true,
  shadeRegions = [],
  highlightSets = [],
  setAColor = '#3b82f6',
  setBColor = '#ef4444',
  setCColor = '#22c55e',
  shadeColor = '#fbbf24',
  caption
}) => {
  // Helper to get count
  const getCount = (data: string[] | number): number => {
    return typeof data === 'number' ? data : data.length;
  };

  const counts = {
    aOnly: getCount(aOnly),
    bOnly: getCount(bOnly),
    cOnly: getCount(cOnly),
    abOnly: getCount(abOnly),
    acOnly: getCount(acOnly),
    bcOnly: getCount(bcOnly),
    abc: getCount(abc),
    neither: getCount(neither)
  };

  // Circle positions for three overlapping circles
  const circleA = { cx: 200, cy: 140, r: 85 };
  const circleB = { cx: 300, cy: 140, r: 85 };
  const circleC = { cx: 250, cy: 220, r: 85 };

  // Check if region should be shaded
  const shouldShade = (regionName: string): boolean => {
    return shadeRegions.includes(regionName);
  };

  // Check if set should be highlighted
  const isHighlighted = (setName: string): boolean => {
    return highlightSets.includes(setName);
  };

  // Get circle border style
  const getCircleBorder = (setName: string, baseColor: string) => {
    if (isHighlighted(setName)) {
      return { strokeWidth: 4, stroke: '#fbbf24' };
    }
    return { strokeWidth: 2, stroke: baseColor };
  };

  // Render content in a region
  const renderRegionContent = (elements: string[] | number, count: number, x: number, y: number) => {
    if (showRegionCounts) {
      return (
        <text x={x} y={y} fontSize="16" fontWeight="bold" textAnchor="middle" fill="#1f2937">
          ({count})
        </text>
      );
    }

    if (showElements && typeof elements !== 'number' && elements.length > 0) {
      const displayElements = elements.slice(0, 3);
      return (
        <g>
          {displayElements.map((elem, idx) => (
            <text
              key={idx}
              x={x}
              y={y + (idx - 1) * 14}
              fontSize="12"
              textAnchor="middle"
              fill="#1f2937"
            >
              {elem}
            </text>
          ))}
          {elements.length > 3 && (
            <text x={x} y={y + 28} fontSize="10" textAnchor="middle" fill="#6b7280">
              ...
            </text>
          )}
        </g>
      );
    }

    if (count > 0) {
      return (
        <text x={x} y={y} fontSize="16" fontWeight="bold" textAnchor="middle" fill="#1f2937">
          {count}
        </text>
      );
    }

    return null;
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <svg width="500" height="350" className="mx-auto">
        {/* Universal set rectangle */}
        <rect
          x="20"
          y="20"
          width="460"
          height="310"
          fill="#f0f9ff"
          stroke="#0369a1"
          strokeWidth="3"
          rx="10"
        />
        <text x="30" y="45" fontSize="20" fontWeight="bold" fill="#0369a1">
          {universalSetLabel}
        </text>

        {/* Shading layers (rendered behind circles) */}
        {shouldShade('aOnly') && (
          <circle cx={circleA.cx} cy={circleA.cy} r={circleA.r} fill={shadeColor} opacity="0.5" />
        )}
        {shouldShade('bOnly') && (
          <circle cx={circleB.cx} cy={circleB.cy} r={circleB.r} fill={shadeColor} opacity="0.5" />
        )}
        {shouldShade('cOnly') && (
          <circle cx={circleC.cx} cy={circleC.cy} r={circleC.r} fill={shadeColor} opacity="0.5" />
        )}

        {/* Circle A */}
        <circle
          cx={circleA.cx}
          cy={circleA.cy}
          r={circleA.r}
          fill={setAColor}
          opacity="0.25"
          {...getCircleBorder('A', setAColor)}
        />

        {/* Circle B */}
        <circle
          cx={circleB.cx}
          cy={circleB.cy}
          r={circleB.r}
          fill={setBColor}
          opacity="0.25"
          {...getCircleBorder('B', setBColor)}
        />

        {/* Circle C */}
        <circle
          cx={circleC.cx}
          cy={circleC.cy}
          r={circleC.r}
          fill={setCColor}
          opacity="0.25"
          {...getCircleBorder('C', setCColor)}
        />

        {/* Additional shading for specific regions */}
        {shouldShade('abc') && (
          <ellipse cx="250" cy="167" rx="32" ry="28" fill={shadeColor} opacity="0.8" />
        )}
        {shouldShade('abOnly') && (
          <ellipse cx="250" cy="125" rx="32" ry="20" fill={shadeColor} opacity="0.7" />
        )}
        {shouldShade('acOnly') && (
          <ellipse cx="210" cy="185" rx="25" ry="30" fill={shadeColor} opacity="0.7" />
        )}
        {shouldShade('bcOnly') && (
          <ellipse cx="290" cy="185" rx="25" ry="30" fill={shadeColor} opacity="0.7" />
        )}
        {shouldShade('neither') && (
          <rect x="410" y="280" width="60" height="40" fill={shadeColor} opacity="0.7" rx="5" />
        )}

        {/* Set labels */}
        <text x={circleA.cx} y={circleA.cy - 95} fontSize="14" fontWeight="bold" textAnchor="middle" fill={setAColor}>
          {setALabel}
        </text>
        <text x={circleB.cx} y={circleB.cy - 95} fontSize="14" fontWeight="bold" textAnchor="middle" fill={setBColor}>
          {setBLabel}
        </text>
        <text x={circleC.cx} y={circleC.cy + 95} fontSize="14" fontWeight="bold" fill={setCColor} textAnchor="middle">
          {setCLabel}
        </text>

        {/* Region contents - positioned carefully */}
        {/* A only (top left) */}
        {renderRegionContent(aOnly, counts.aOnly, 165, 115)}

        {/* B only (top right) */}
        {renderRegionContent(bOnly, counts.bOnly, 335, 115)}

        {/* C only (bottom center) */}
        {renderRegionContent(cOnly, counts.cOnly, 250, 270)}

        {/* A∩B only (between A and B, above center) */}
        {renderRegionContent(abOnly, counts.abOnly, 250, 125)}

        {/* A∩C only (left side of C) */}
        {renderRegionContent(acOnly, counts.acOnly, 210, 195)}

        {/* B∩C only (right side of C) */}
        {renderRegionContent(bcOnly, counts.bcOnly, 290, 195)}

        {/* A∩B∩C (center of all three) */}
        {renderRegionContent(abc, counts.abc, 250, 170)}

        {/* Neither (outside all circles) */}
        {counts.neither > 0 && renderRegionContent(neither, counts.neither, 440, 300)}
      </svg>

      {/* Caption */}
      {caption && (
        <div className="text-sm text-center text-gray-900 dark:text-gray-100 max-w-md px-4 mt-2 font-medium">
          {caption}
        </div>
      )}

      {/* Legend for regions (helpful for complex problems) */}
      {showRegionCounts && Object.values(counts).some(c => c > 0) && (
        <div className="text-xs text-gray-500 text-center max-w-lg px-4">
          <div className="grid grid-cols-4 gap-2">
            {counts.aOnly > 0 && <div>{setALabel} only: {counts.aOnly}</div>}
            {counts.bOnly > 0 && <div>{setBLabel} only: {counts.bOnly}</div>}
            {counts.cOnly > 0 && <div>{setCLabel} only: {counts.cOnly}</div>}
            {counts.abOnly > 0 && <div>{setALabel}∩{setBLabel} only: {counts.abOnly}</div>}
            {counts.acOnly > 0 && <div>{setALabel}∩{setCLabel} only: {counts.acOnly}</div>}
            {counts.bcOnly > 0 && <div>{setBLabel}∩{setCLabel} only: {counts.bcOnly}</div>}
            {counts.abc > 0 && <div>All three: {counts.abc}</div>}
            {counts.neither > 0 && <div>Neither: {counts.neither}</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default VennDiagram3SetVisualizer;
