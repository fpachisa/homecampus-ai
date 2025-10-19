/**
 * Set Visualizer
 *
 * Visual representation of sets showing notation, elements,
 * and basic set relationships.
 */

import React from 'react';

interface SetVisualizerProps {
  // Set definition
  setName?: string;
  elements?: string[];
  setDescription?: string;          // e.g., "factors of 12", "even numbers < 10"

  // Display options
  displayMode?: 'list' | 'box' | 'circle';
  showCardinality?: boolean;        // Show n(A) = ...
  showBraces?: boolean;             // Show { } notation

  // Set relationships
  isSubsetOf?: string;              // Show "A ⊆ B" relationship
  isEqualTo?: string;               // Show "A = B" relationship
  isDisjointFrom?: string;          // Show "A ∩ B = ∅" relationship

  // Membership examples
  membershipExamples?: Array<{
    element: string;
    isMember: boolean;
  }>;

  // Visual styling
  color?: string;
  highlightColor?: string;

  // Caption
  caption?: string;
}

const SetVisualizer: React.FC<SetVisualizerProps> = ({
  setName = 'A',
  elements = [],
  setDescription,
  displayMode = 'list',
  showCardinality = false,
  showBraces = true,
  isSubsetOf,
  isEqualTo,
  isDisjointFrom,
  membershipExamples = [],
  color = '#3b82f6',
  highlightColor = '#fbbf24',
  caption
}) => {
  // Render set notation
  const renderSetNotation = () => {
    if (elements.length === 0 && !setDescription) {
      return (
        <div className="text-lg font-mono">
          {setName} = {showBraces && '{'} {showBraces && '}'}
          <span className="ml-2 text-sm text-gray-500">(empty set)</span>
        </div>
      );
    }

    if (setDescription) {
      return (
        <div className="text-lg font-mono">
          {setName} = {showBraces && '{'} {setDescription} {showBraces && '}'}
        </div>
      );
    }

    const displayElements = elements.length > 10 ? [...elements.slice(0, 10), '...'] : elements;

    return (
      <div className="text-lg font-mono">
        {setName} = {showBraces && '{'} {displayElements.join(', ')} {showBraces && '}'}
      </div>
    );
  };

  // Render visual representation
  const renderVisual = () => {
    if (displayMode === 'box') {
      return (
        <svg width="400" height="150" className="mx-auto">
          <rect
            x="20"
            y="20"
            width="360"
            height="110"
            fill={color}
            opacity="0.1"
            stroke={color}
            strokeWidth="3"
            rx="8"
          />
          <text x="35" y="45" fontSize="18" fontWeight="bold" fill={color}>
            {setName}
          </text>

          {/* Elements in box */}
          <g>
            {elements.slice(0, 15).map((elem, idx) => {
              const col = idx % 5;
              const row = Math.floor(idx / 5);
              return (
                <text
                  key={idx}
                  x={80 + col * 65}
                  y={55 + row * 25}
                  fontSize="14"
                  fill="#1f2937"
                  textAnchor="middle"
                >
                  {elem}
                </text>
              );
            })}
            {elements.length > 15 && (
              <text x="330" y="105" fontSize="12" fill="#6b7280">
                ...
              </text>
            )}
          </g>
        </svg>
      );
    }

    if (displayMode === 'circle') {
      return (
        <svg width="300" height="200" className="mx-auto">
          <circle
            cx="150"
            cy="100"
            r="80"
            fill={color}
            opacity="0.1"
            stroke={color}
            strokeWidth="3"
          />
          <text x="150" y="50" fontSize="20" fontWeight="bold" fill={color} textAnchor="middle">
            {setName}
          </text>

          {/* Elements in circle */}
          <g>
            {elements.slice(0, 8).map((elem, idx) => {
              // Arrange in circular pattern
              const angle = (idx / Math.min(8, elements.length)) * 2 * Math.PI - Math.PI / 2;
              const radius = 45;
              const x = 150 + radius * Math.cos(angle);
              const y = 100 + radius * Math.sin(angle);
              return (
                <text
                  key={idx}
                  x={x}
                  y={y}
                  fontSize="14"
                  fill="#1f2937"
                  textAnchor="middle"
                >
                  {elem}
                </text>
              );
            })}
            {elements.length > 8 && (
              <text x="150" y="160" fontSize="12" fill="#6b7280" textAnchor="middle">
                ...
              </text>
            )}
          </g>
        </svg>
      );
    }

    // Default: list mode (just notation)
    return null;
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-lg border-2 border-gray-200">
      {/* Set notation */}
      <div className="text-center">
        {renderSetNotation()}
      </div>

      {/* Cardinality */}
      {showCardinality && elements.length > 0 && (
        <div className="text-md font-mono text-gray-700">
          n({setName}) = {elements.length}
        </div>
      )}

      {/* Visual representation */}
      {displayMode !== 'list' && renderVisual()}

      {/* Set relationships */}
      {(isSubsetOf || isEqualTo || isDisjointFrom) && (
        <div className="border-t pt-3 w-full">
          <div className="text-sm font-semibold text-gray-600 mb-2">Relationships:</div>
          {isSubsetOf && (
            <div className="text-md font-mono">
              {setName} ⊆ {isSubsetOf}
              <span className="ml-2 text-sm text-gray-500">
                (every element of {setName} is in {isSubsetOf})
              </span>
            </div>
          )}
          {isEqualTo && (
            <div className="text-md font-mono">
              {setName} = {isEqualTo}
              <span className="ml-2 text-sm text-gray-500">
                (same elements)
              </span>
            </div>
          )}
          {isDisjointFrom && (
            <div className="text-md font-mono">
              {setName} ∩ {isDisjointFrom} = ∅
              <span className="ml-2 text-sm text-gray-500">
                (no common elements)
              </span>
            </div>
          )}
        </div>
      )}

      {/* Membership examples */}
      {membershipExamples.length > 0 && (
        <div className="border-t pt-3 w-full">
          <div className="text-sm font-semibold text-gray-600 mb-2">Element Membership:</div>
          <div className="space-y-1">
            {membershipExamples.map((example, idx) => (
              <div key={idx} className="text-md font-mono flex items-center gap-2">
                <span>{example.element}</span>
                <span className={example.isMember ? 'text-green-600' : 'text-red-600'}>
                  {example.isMember ? '∈' : '∉'}
                </span>
                <span>{setName}</span>
                <span className="text-xs text-gray-500 ml-2">
                  ({example.isMember ? 'is in' : 'is not in'} {setName})
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Caption */}
      {caption && (
        <div className="text-sm text-center text-gray-600 max-w-md border-t pt-2">
          {caption}
        </div>
      )}
    </div>
  );
};

export default SetVisualizer;
