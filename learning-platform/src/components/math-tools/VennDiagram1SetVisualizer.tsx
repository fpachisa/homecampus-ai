/**
 * Venn Diagram 1-Set Visualizer
 *
 * Interactive single-set Venn diagram for teaching set complements,
 * universal sets, and basic set operations with one set.
 */

import React from 'react';
import MathText from '../MathText';

interface VennDiagram1SetProps {
  // Set labels
  setLabel?: string;
  universalSetLabel?: string;

  // Elements or counts in regions
  setElements?: string[] | number;      // Elements in the set A
  complementElements?: string[] | number; // Elements in A' (outside the set)

  // Visual options
  showElements?: boolean;        // Show actual elements or just counts
  showRegionCounts?: boolean;    // Show (n) notation for counts
  shadeRegion?: 'none' | 'set' | 'complement' | 'universal';

  // Styling
  setColor?: string;
  shadeColor?: string;

  // Optional caption
  caption?: string;
}

const VennDiagram1SetVisualizer: React.FC<VennDiagram1SetProps> = ({
  setLabel = 'A',
  universalSetLabel = 'U',
  setElements = [],
  complementElements = [],
  showElements = true,
  showRegionCounts = false,
  shadeRegion = 'none',
  setColor = '#3b82f6',
  shadeColor = '#86efac',
  caption
}) => {
  // Determine if elements are labels (strings), counts (numbers), or actual element arrays
  const isSetLabel = typeof setElements === 'string';
  const isComplementLabel = typeof complementElements === 'string';

  // Convert to appropriate format
  const setElem = typeof setElements === 'number'
    ? [String(setElements)]
    : Array.isArray(setElements)
      ? setElements
      : [];

  const complementElem = typeof complementElements === 'number'
    ? [String(complementElements)]
    : Array.isArray(complementElements)
      ? complementElements
      : [];

  // Calculate counts
  const setCount = typeof setElements === 'number'
    ? setElements
    : Array.isArray(setElements)
      ? setElements.length
      : 0;

  const complementCount = typeof complementElements === 'number'
    ? complementElements
    : Array.isArray(complementElements)
      ? complementElements.length
      : 0;

  // Circle position (centered)
  const centerX = 225;
  const centerY = 150;
  const radius = 85;

  // Determine what regions to shade
  const shouldShadeSet = shadeRegion === 'set' || shadeRegion === 'universal';
  const shouldShadeComplement = shadeRegion === 'complement' || shadeRegion === 'universal';

  // Render elements or count in a region
  const renderRegionContent = (
    elements: string[],
    count: number,
    x: number,
    y: number,
    isLabel: boolean,
    labelText?: string | string[] | number
  ) => {
    // If it's a descriptive label (string), just show the label
    if (isLabel && typeof labelText === 'string') {
      return (
        <text x={x} y={y} fontSize="14" textAnchor="middle" fill="#1f2937" className="font-medium">
          {labelText}
        </text>
      );
    }

    // Show count in (n) notation
    if (showRegionCounts && count > 0) {
      return (
        <text x={x} y={y} fontSize="18" fontWeight="bold" textAnchor="middle" fill="#1f2937">
          ({count})
        </text>
      );
    }

    // Show actual elements (max 5 to avoid clutter)
    if (showElements && elements.length > 0 && !isLabel) {
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

        {/* Shading for complement (outside the circle, inside universal set) */}
        {shouldShadeComplement && (
          <g>
            <defs>
              <mask id="complementMask">
                {/* White rectangle for universal set */}
                <rect x="20" y="20" width="410" height="260" fill="white" />
                {/* Black circle to subtract the set */}
                <circle cx={centerX} cy={centerY} r={radius} fill="black" />
              </mask>
            </defs>
            {/* Apply mask to shade complement region */}
            <rect
              x="20"
              y="20"
              width="410"
              height="260"
              fill={shadeColor}
              opacity="0.6"
              mask="url(#complementMask)"
            />
          </g>
        )}

        {/* Shading for the set (inside the circle) */}
        {shouldShadeSet && (
          <circle
            cx={centerX}
            cy={centerY}
            r={radius}
            fill={shadeColor}
            opacity="0.6"
          />
        )}

        {/* The set circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill={setColor}
          fillOpacity="0.3"
          stroke={setColor}
          strokeWidth="3"
        />

        {/* Set label */}
        <text x={centerX} y="55" fontSize="14" fontWeight="bold" textAnchor="middle" fill={setColor}>
          {setLabel}
        </text>

        {/* Region contents - inside the circle */}
        {renderRegionContent(setElem, setCount, centerX, centerY, isSetLabel, setElements)}

        {/* Region contents - outside the circle (complement) */}
        {/* Position in bottom right corner of universal set */}
        {(complementCount > 0 || isComplementLabel) &&
          renderRegionContent(complementElem, complementCount, 370, 245, isComplementLabel, complementElements)}
      </svg>

      {/* Caption */}
      {caption && (
        <div className="text-sm text-center text-gray-900 dark:text-gray-100 max-w-md px-4 mt-2 font-medium">
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default VennDiagram1SetVisualizer;
