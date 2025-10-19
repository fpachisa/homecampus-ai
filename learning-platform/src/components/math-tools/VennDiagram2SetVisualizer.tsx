/**
 * Venn Diagram 2-Set Visualizer
 *
 * Interactive two-set Venn diagram for teaching set operations,
 * relationships, and counting problems.
 */

import React from 'react';
import MathText from '../MathText';

interface VennDiagram2SetProps {
  // Set labels
  setALabel?: string;
  setBLabel?: string;
  universalSetLabel?: string;

  // Layout
  layout?: 'overlapping' | 'disjoint' | 'subset' | 'equal';

  // Elements or counts in regions
  aOnlyElements?: string[] | number;
  bOnlyElements?: string[] | number;
  intersectionElements?: string[] | number;
  neitherElements?: string[] | number;

  // Visual options
  showElements?: boolean;        // Show actual elements or just counts
  showRegionCounts?: boolean;    // Show (n) notation for counts
  shadeRegion?: 'none' | 'intersection' | 'union' | 'aOnly' | 'bOnly' | 'aComplement' | 'bComplement' | 'neither' | 'unionComplement';
  highlightSet?: 'A' | 'B' | 'both' | 'none';

  // Styling
  setAColor?: string;
  setBColor?: string;
  shadeColor?: string;

  // Optional caption
  caption?: string;
}

const VennDiagram2SetVisualizer: React.FC<VennDiagram2SetProps> = ({
  setALabel = 'A',
  setBLabel = 'B',
  universalSetLabel = 'U',
  layout = 'overlapping',
  aOnlyElements = [],
  bOnlyElements = [],
  intersectionElements = [],
  neitherElements = [],
  showElements = true,
  showRegionCounts = false,
  shadeRegion = 'none',
  highlightSet = 'none',
  setAColor = '#3b82f6',
  setBColor = '#ef4444',
  shadeColor = '#86efac',
  caption
}) => {
  // Convert elements to arrays if they're numbers
  const aOnly = typeof aOnlyElements === 'number' ? [String(aOnlyElements)] : aOnlyElements;
  const bOnly = typeof bOnlyElements === 'number' ? [String(bOnlyElements)] : bOnlyElements;
  const intersection = typeof intersectionElements === 'number' ? [String(intersectionElements)] : intersectionElements;
  const neither = typeof neitherElements === 'number' ? [String(neitherElements)] : neitherElements;

  // Calculate counts
  const aOnlyCount = typeof aOnlyElements === 'number' ? aOnlyElements : aOnlyElements.length;
  const bOnlyCount = typeof bOnlyElements === 'number' ? bOnlyElements : bOnlyElements.length;
  const intersectionCount = typeof intersectionElements === 'number' ? intersectionElements : intersectionElements.length;
  const neitherCount = typeof neitherElements === 'number' ? neitherElements : neitherElements.length;

  // Determine circle positions based on layout
  const getCirclePositions = () => {
    switch (layout) {
      case 'disjoint':
        return { aX: 140, bX: 310, overlap: false };
      case 'subset':
        return { aX: 225, bX: 225, overlap: true, aRadius: 55, bRadius: 90 };
      case 'equal':
        return { aX: 225, bX: 225, overlap: true, aRadius: 85, bRadius: 85 };
      case 'overlapping':
      default:
        return { aX: 165, bX: 285, overlap: true };
    }
  };

  const positions = getCirclePositions();
  const baseRadius = 85;
  const aRadius = positions.aRadius || baseRadius;
  const bRadius = positions.bRadius || baseRadius;

  // Determine what regions to shade
  const shouldShade = (region: string): boolean => {
    switch (shadeRegion) {
      case 'intersection':
        return region === 'intersection';
      case 'union':
        return region === 'aOnly' || region === 'intersection' || region === 'bOnly';
      case 'aOnly':
        return region === 'aOnly';
      case 'bOnly':
        return region === 'bOnly';
      case 'aComplement':
        return region === 'bOnly' || region === 'neither';
      case 'bComplement':
        return region === 'aOnly' || region === 'neither';
      case 'neither':
        return region === 'neither';
      case 'unionComplement':
        return region === 'neither';
      default:
        return false;
    }
  };

  // Render elements or count in a region
  const renderRegionContent = (elements: string[], count: number, x: number, y: number) => {
    if (showRegionCounts) {
      return (
        <text x={x} y={y} fontSize="18" fontWeight="bold" textAnchor="middle" fill="#1f2937">
          ({count})
        </text>
      );
    }

    if (showElements && elements.length > 0 && typeof aOnlyElements !== 'number') {
      // Show actual elements (max 5 to avoid clutter)
      const displayElements = elements.slice(0, 5);
      return (
        <g>
          {displayElements.map((elem, idx) => (
            <text
              key={idx}
              x={x}
              y={y + (idx - displayElements.length / 2) * 16}
              fontSize="14"
              textAnchor="middle"
              fill="#1f2937"
            >
              {elem}
            </text>
          ))}
          {elements.length > 5 && (
            <text x={x} y={y + (displayElements.length / 2) * 16 + 8} fontSize="12" textAnchor="middle" fill="#6b7280">
              ...
            </text>
          )}
        </g>
      );
    }

    // Show count as number (no brackets)
    if (count > 0) {
      return (
        <text x={x} y={y} fontSize="18" fontWeight="bold" textAnchor="middle" fill="#1f2937">
          {count}
        </text>
      );
    }

    return null;
  };

  // Highlight circle border
  const getCircleBorder = (set: 'A' | 'B') => {
    if (highlightSet === set || highlightSet === 'both') {
      return { strokeWidth: 4, stroke: '#fbbf24' };
    }
    return { strokeWidth: 3, stroke: set === 'A' ? setAColor : setBColor };
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <svg width="450" height="300" className="mx-auto">
        {/* Universal set rectangle */}
        <rect
          x="20"
          y="20"
          width="410"
          height="260"
          fill="#f0f9ff"
          stroke="#0369a1"
          strokeWidth="3"
          rx="10"
        />
        <text x="30" y="45" fontSize="20" fontWeight="bold" fill="#0369a1">
          {universalSetLabel}
        </text>

        {/* Shading overlays - rendered behind circles */}
        {/* Union shading - both circles shaded as one unified region */}
        {shadeRegion === 'union' && (
          <g>
            <defs>
              <clipPath id="unionClip">
                <circle cx={positions.aX} cy="150" r={aRadius} />
                <circle cx={positions.bX} cy="150" r={bRadius} />
              </clipPath>
            </defs>
            {/* Single rectangle covering both circles, clipped to their union */}
            <rect
              x={positions.aX - aRadius}
              y={150 - aRadius}
              width={positions.bX - positions.aX + bRadius * 2}
              height={aRadius * 2}
              fill={shadeColor}
              opacity="0.6"
              clipPath="url(#unionClip)"
            />
          </g>
        )}

        {/* A only shading */}
        {shouldShade('aOnly') && shadeRegion !== 'union' && (
          <circle
            cx={positions.aX}
            cy="150"
            r={aRadius}
            fill={shadeColor}
            opacity="0.5"
          />
        )}

        {/* B only shading */}
        {shouldShade('bOnly') && shadeRegion !== 'union' && (
          <circle
            cx={positions.bX}
            cy="150"
            r={bRadius}
            fill={shadeColor}
            opacity="0.5"
          />
        )}

        {/* Intersection shading */}
        {layout === 'overlapping' && shouldShade('intersection') && shadeRegion !== 'union' && (
          <ellipse
            cx={(positions.aX + positions.bX) / 2}
            cy="150"
            rx="50"
            ry="85"
            fill={shadeColor}
            opacity="0.7"
          />
        )}

        {/* Circle A */}
        <circle
          cx={positions.aX}
          cy="150"
          r={aRadius}
          fill={shadeRegion === 'union' ? 'none' : setAColor}
          fillOpacity={shadeRegion === 'union' ? 0 : 0.3}
          {...getCircleBorder('A')}
        />

        {/* Circle B */}
        <circle
          cx={positions.bX}
          cy="150"
          r={bRadius}
          fill={shadeRegion === 'union' ? 'none' : setBColor}
          fillOpacity={shadeRegion === 'union' ? 0 : 0.3}
          {...getCircleBorder('B')}
        />

        {/* Shade "neither" region if needed */}
        {shouldShade('neither') && (
          <rect
            x="370"
            y="220"
            width="50"
            height="50"
            fill={shadeColor}
            opacity="0.7"
            rx="5"
          />
        )}

        {/* Set labels */}
        {layout === 'subset' ? (
          <>
            <text x={positions.aX} y="55" fontSize="14" fontWeight="bold" textAnchor="middle" fill={setAColor}>
              {setALabel}
            </text>
            <text x={positions.bX} y="55" fontSize="14" fontWeight="bold" textAnchor="middle" fill={setBColor}>
              {setBLabel}
            </text>
          </>
        ) : layout === 'equal' ? (
          <>
            <text x={positions.aX} y="55" fontSize="14" fontWeight="bold" textAnchor="middle" fill={setAColor}>
              {setALabel} = {setBLabel}
            </text>
          </>
        ) : (
          <>
            <text x={positions.aX} y="55" fontSize="14" fontWeight="bold" textAnchor="middle" fill={setAColor}>
              {setALabel}
            </text>
            <text x={positions.bX} y="55" fontSize="14" fontWeight="bold" textAnchor="middle" fill={setBColor}>
              {setBLabel}
            </text>
          </>
        )}

        {/* Region contents */}
        {layout !== 'subset' && layout !== 'equal' && (
          <>
            {/* A only region */}
            {renderRegionContent(aOnly, aOnlyCount, positions.aX - 40, 155)}

            {/* B only region */}
            {renderRegionContent(bOnly, bOnlyCount, positions.bX + 40, 155)}

            {/* Intersection region (if overlapping) */}
            {layout === 'overlapping' && renderRegionContent(intersection, intersectionCount, (positions.aX + positions.bX) / 2, 155)}
          </>
        )}

        {/* Subset layout content */}
        {layout === 'subset' && (
          <>
            {/* Inner circle (A) */}
            {renderRegionContent(aOnly, aOnlyCount, positions.aX, 155)}
            {/* Outer circle only (B - A) */}
            {renderRegionContent(bOnly, bOnlyCount, positions.aX, 210)}
          </>
        )}

        {/* Equal layout shows note */}
        {layout === 'equal' && (
          <text x="225" y="220" fontSize="14" textAnchor="middle" fill="#6b7280" fontStyle="italic">
            A = B (same elements)
          </text>
        )}

        {/* Neither region (outside both circles) */}
        {neitherCount > 0 && layout !== 'subset' && layout !== 'equal' && renderRegionContent(neither, neitherCount, 390, 245)}
      </svg>

      {/* Caption */}
      {caption && (
        <div className="text-sm text-center text-gray-600 max-w-md px-4">
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default VennDiagram2SetVisualizer;
