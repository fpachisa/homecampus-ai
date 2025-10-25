/**
 * 3D Coordinate Plane Visualizer with Cuboid
 *
 * Shows a cuboid on a 3D coordinate system with X, Y, Z axes.
 * Displays selective vertex labels (A, B, D, E) showing coordinate axes from origin.
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface CustomPoint {
  x: number;
  y: number;
  z: number;
  label: string;
}

interface Coordinate3DPlaneVisualizerProps {
  // Cuboid dimensions
  length?: string | number;  // Y-axis dimension (depth, front-back)
  width?: string | number;   // X-axis dimension (left-right)
  height?: string | number;  // Z-axis dimension (up-down)

  // Cuboid features
  showFaceDiagonal?: boolean;
  showSpaceDiagonal?: boolean;
  faceDiagonal?: string | number;
  spaceDiagonal?: string | number;
  diagonalFace?: 'front' | 'side' | 'top' | 'bottom';
  highlightElement?: 'length' | 'width' | 'height' | 'faceDiagonal' | 'spaceDiagonal' | 'none';

  // Coordinate plane features
  showAxes?: boolean;       // Show X, Y, Z axes (default: true)
  showGrid?: boolean;       // Show grid lines (default: false)
  gridPlane?: 'xy' | 'xz' | 'yz' | 'none';  // Which plane to show grid on
  showOriginLabel?: boolean;  // Show O at origin (default: true)

  // Custom points to display (can be array or JSON/text string from AI)
  customPoints?: CustomPoint[] | string;

  // Display
  caption?: string;
  title?: string;
}

const Coordinate3DPlaneVisualizer: React.FC<Coordinate3DPlaneVisualizerProps> = ({
  length = '',
  width = '',
  height = '',
  faceDiagonal: _faceDiagonal = '',
  spaceDiagonal: _spaceDiagonal = '',
  highlightElement = 'none',
  showFaceDiagonal = false,
  showSpaceDiagonal = false,
  diagonalFace = 'bottom',
  showAxes = true,
  showGrid = false,
  gridPlane = 'none',
  showOriginLabel = true,
  customPoints = [],
  caption,
  title
}) => {
  const { theme: _theme } = useTheme();

  // Normalize customPoints to ensure it's always an array with proper {x, y, z} structure
  const normalizedCustomPoints = React.useMemo(() => {
    const normalizePoint = (p: any): CustomPoint | null => {
      // Already in correct format
      if (p && typeof p.x === 'number' && typeof p.y === 'number' && typeof p.z === 'number') {
        return p as CustomPoint;
      }
      // Tuple format: [x, y, z] or [x, y, z, label]
      if (Array.isArray(p) && p.length >= 3) {
        return { x: p[0], y: p[1], z: p[2], label: p[3] || '' };
      }
      // String format like "2,3,4"
      if (typeof p === 'string') {
        const match = p.match(/(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)/);
        if (match) {
          return { x: parseFloat(match[1]), y: parseFloat(match[2]), z: parseFloat(match[3]), label: '' };
        }
      }
      return null;
    };

    const parseText3DPoints = (text: string): CustomPoint[] => {
      // Parse text format like "A(1, 2, 3), B(5, 7, 9)" or "(2, 3, 4)"
      const pattern = /([A-Z]?[a-z]?\d?)\s*\(\s*(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)\s*,\s*(-?\d+\.?\d*)\s*\)/g;
      const results: CustomPoint[] = [];
      let match;
      while ((match = pattern.exec(text)) !== null) {
        results.push({
          x: parseFloat(match[2]),
          y: parseFloat(match[3]),
          z: parseFloat(match[4]),
          label: match[1] || ''
        });
      }
      return results;
    };

    if (Array.isArray(customPoints)) {
      return customPoints.map(normalizePoint).filter((p): p is CustomPoint => p !== null);
    }
    if (typeof customPoints === 'string') {
      // First try JSON parsing
      try {
        // Replace single quotes with double quotes for valid JSON
        const jsonString = customPoints.replace(/'/g, '"');
        const parsed = JSON.parse(jsonString);
        if (Array.isArray(parsed)) {
          return parsed.map(normalizePoint).filter((p): p is CustomPoint => p !== null);
        }
      } catch {
        // If JSON parsing fails, try text parsing
        const textPoints = parseText3DPoints(customPoints);
        if (textPoints.length > 0) {
          return textPoints;
        }
      }
    }
    return [];
  }, [customPoints]);

  // SVG dimensions
  const svgWidth = 600;
  const svgHeight = 500;

  // Extract numeric values from dimension strings or numbers
  const parseNumeric = (value: string | number): number => {
    if (typeof value === 'number') return value;
    if (!value) return 1;
    const str = String(value);
    const match = str.match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 1;
  };

  const widthNum = width ? parseNumeric(width) : 3;
  const lengthNum = length ? parseNumeric(length) : 4;
  const heightNum = height ? parseNumeric(height) : 5;

  // Scale factor to fit nicely in the SVG
  const maxDim = Math.max(widthNum, lengthNum, heightNum);
  const scaleFactor = 120 / maxDim;

  // Calculate proportional dimensions
  const baseWidth = widthNum * scaleFactor;   // X-axis (left-right)
  const baseLength = lengthNum * scaleFactor; // Y-axis (depth, front-back)
  const baseHeight = heightNum * scaleFactor; // Z-axis (up-down)

  // Isometric angles for pseudo-3D effect
  const depthOffsetX = baseLength * 0.5;  // X offset for depth
  const depthOffsetY = baseLength * 0.25; // Y offset for depth (creates 3D effect)

  // Bottom face vertices (front rectangle)
  const frontBottomLeft = { x: 150, y: 350 }; // A - Origin
  const frontBottomRight = { x: frontBottomLeft.x + baseWidth, y: frontBottomLeft.y }; // B
  const frontTopRight = { x: frontBottomRight.x, y: frontBottomRight.y - baseHeight }; // C
  const frontTopLeft = { x: frontBottomLeft.x, y: frontBottomLeft.y - baseHeight }; // D

  // Back face vertices (back rectangle, offset for depth)
  const backBottomLeft = { x: frontBottomLeft.x + depthOffsetX, y: frontBottomLeft.y - depthOffsetY }; // E
  const backBottomRight = { x: frontBottomRight.x + depthOffsetX, y: frontBottomRight.y - depthOffsetY }; // F
  const backTopRight = { x: frontTopRight.x + depthOffsetX, y: frontTopRight.y - depthOffsetY }; // G
  const backTopLeft = { x: frontTopLeft.x + depthOffsetX, y: frontTopLeft.y - depthOffsetY }; // H

  // Colors
  const highlightColor = '#ef4444';
  const faceColor = '#e0e7ff'; // Light blue for faces
  const edgeColor = '#475569'; // Dark gray for edges
  const axisColorX = '#dc2626'; // Red for X-axis
  const axisColorY = '#16a34a'; // Green for Y-axis
  const axisColorZ = '#2563eb'; // Blue for Z-axis
  const gridColor = '#cbd5e1';  // Light gray for grid

  // Determine stroke color and width
  const getStrokeColor = (element: string) => {
    return highlightElement === element ? highlightColor : edgeColor;
  };

  const getStrokeWidth = (element: string) => {
    return highlightElement === element ? 3 : 2;
  };

  // ==================== RENDER GRID ====================

  const renderGrid = () => {
    if (!showGrid || gridPlane === 'none') return null;

    const gridLines = [];
    const gridExtend = 1.5; // Extend grid beyond cuboid

    if (gridPlane === 'xy') {
      // XY plane at z=0 (bottom plane)
      for (let i = 0; i <= Math.ceil(widthNum * gridExtend); i++) {
        const x = i * scaleFactor;
        const startPos = { x: frontBottomLeft.x + x, y: frontBottomLeft.y };
        const endPos = { x: startPos.x + depthOffsetX * gridExtend, y: startPos.y - depthOffsetY * gridExtend };
        gridLines.push(
          <line key={`gx-${i}`} x1={startPos.x} y1={startPos.y} x2={endPos.x} y2={endPos.y}
                stroke={gridColor} strokeWidth={0.5} opacity={0.4} />
        );
      }
      for (let j = 0; j <= Math.ceil(lengthNum * gridExtend); j++) {
        const y = j * scaleFactor;
        const startPos = { x: frontBottomLeft.x + y * 0.5, y: frontBottomLeft.y - y * 0.25 };
        const endPos = { x: startPos.x + baseWidth * gridExtend, y: startPos.y };
        gridLines.push(
          <line key={`gy-${j}`} x1={startPos.x} y1={startPos.y} x2={endPos.x} y2={endPos.y}
                stroke={gridColor} strokeWidth={0.5} opacity={0.4} />
        );
      }
    }

    return <g id="grid">{gridLines}</g>;
  };

  // ==================== RENDER AXES ====================

  const renderAxes = () => {
    if (!showAxes) return null;

    const axisExtend = 2.5; // Extend axes well beyond cuboid
    const arrowSize = 10;

    // X-axis (horizontal right, red)
    const xEnd = { x: frontBottomLeft.x + baseWidth * axisExtend, y: frontBottomLeft.y };

    // Y-axis (diagonal right-up, green)
    const yEnd = { x: frontBottomLeft.x + depthOffsetX * axisExtend, y: frontBottomLeft.y - depthOffsetY * axisExtend };

    // Z-axis (vertical up, blue)
    const zEnd = { x: frontBottomLeft.x, y: frontBottomLeft.y - baseHeight * axisExtend };

    return (
      <g id="axes">
        <defs>
          <marker id="arrowX" markerWidth={arrowSize} markerHeight={arrowSize} refX={arrowSize - 1} refY={arrowSize / 2} orient="auto">
            <polygon points={`0 0, ${arrowSize} ${arrowSize / 2}, 0 ${arrowSize}`} fill={axisColorX} />
          </marker>
          <marker id="arrowY" markerWidth={arrowSize} markerHeight={arrowSize} refX={arrowSize - 1} refY={arrowSize / 2} orient="auto">
            <polygon points={`0 0, ${arrowSize} ${arrowSize / 2}, 0 ${arrowSize}`} fill={axisColorY} />
          </marker>
          <marker id="arrowZ" markerWidth={arrowSize} markerHeight={arrowSize} refX={arrowSize - 1} refY={arrowSize / 2} orient="auto">
            <polygon points={`0 0, ${arrowSize} ${arrowSize / 2}, 0 ${arrowSize}`} fill={axisColorZ} />
          </marker>
        </defs>

        {/* X-axis */}
        <line x1={frontBottomLeft.x} y1={frontBottomLeft.y} x2={xEnd.x} y2={xEnd.y}
              stroke={axisColorX} strokeWidth={2} markerEnd="url(#arrowX)" />
        <text x={xEnd.x + 15} y={xEnd.y + 5} fill={axisColorX} fontSize="16" fontWeight="bold">X</text>

        {/* Y-axis */}
        <line x1={frontBottomLeft.x} y1={frontBottomLeft.y} x2={yEnd.x} y2={yEnd.y}
              stroke={axisColorY} strokeWidth={2} markerEnd="url(#arrowY)" />
        <text x={yEnd.x + 15} y={yEnd.y + 5} fill={axisColorY} fontSize="16" fontWeight="bold">Y</text>

        {/* Z-axis */}
        <line x1={frontBottomLeft.x} y1={frontBottomLeft.y} x2={zEnd.x} y2={zEnd.y}
              stroke={axisColorZ} strokeWidth={2} markerEnd="url(#arrowZ)" />
        <text x={zEnd.x - 20} y={zEnd.y} fill={axisColorZ} fontSize="16" fontWeight="bold">Z</text>
      </g>
    );
  };

  // ==================== RENDER AXIS TICKS ====================

  const renderAxisTicks = () => {
    if (!showAxes) return null;

    const ticks = [];

    // X-axis ticks (red) - along width
    for (let i = 1; i <= Math.floor(widthNum); i++) {
      const pos = { x: frontBottomLeft.x + i * scaleFactor, y: frontBottomLeft.y };
      const tickEnd = { x: pos.x, y: pos.y + 5 };
      ticks.push(
        <line key={`xtick-${i}`} x1={pos.x} y1={pos.y} x2={tickEnd.x} y2={tickEnd.y}
              stroke={axisColorX} strokeWidth={1.5} />
      );
    }

    // Y-axis ticks (green) - along length (diagonal)
    for (let j = 1; j <= Math.floor(lengthNum); j++) {
      const pos = { x: frontBottomLeft.x + j * scaleFactor * 0.5, y: frontBottomLeft.y - j * scaleFactor * 0.25 };
      const tickEnd = { x: pos.x - 4, y: pos.y + 2 };
      ticks.push(
        <line key={`ytick-${j}`} x1={pos.x} y1={pos.y} x2={tickEnd.x} y2={tickEnd.y}
              stroke={axisColorY} strokeWidth={1.5} />
      );
    }

    // Z-axis ticks (blue) - along height (vertical)
    for (let k = 1; k <= Math.floor(heightNum); k++) {
      const pos = { x: frontBottomLeft.x, y: frontBottomLeft.y - k * scaleFactor };
      const tickEnd = { x: pos.x - 5, y: pos.y };
      ticks.push(
        <line key={`ztick-${k}`} x1={pos.x} y1={pos.y} x2={tickEnd.x} y2={tickEnd.y}
              stroke={axisColorZ} strokeWidth={1.5} />
      );
    }

    return <g id="axisTicks">{ticks}</g>;
  };

  // ==================== RENDER ORIGIN LABEL ====================

  const renderOriginLabel = () => {
    if (!showOriginLabel) return null;

    return (
      <text x={frontBottomLeft.x - 12} y={frontBottomLeft.y + 18}
            fill="#6366f1" fontSize="14" fontWeight="bold">O</text>
    );
  };

  // ==================== RENDER CUBOID FACES ====================

  const renderCuboid = () => {
    return (
      <>
        {/* Back faces (drawn first, behind front faces) */}
        <polygon
          points={`${backBottomLeft.x},${backBottomLeft.y} ${backBottomRight.x},${backBottomRight.y} ${backTopRight.x},${backTopRight.y} ${backTopLeft.x},${backTopLeft.y}`}
          fill="url(#faceGradient)"
          stroke={edgeColor}
          strokeWidth={1}
          opacity={0.6}
        />

        <polygon
          points={`${frontTopLeft.x},${frontTopLeft.y} ${frontTopRight.x},${frontTopRight.y} ${backTopRight.x},${backTopRight.y} ${backTopLeft.x},${backTopLeft.y}`}
          fill="url(#faceGradient)"
          stroke={edgeColor}
          strokeWidth={1}
          opacity={0.7}
        />

        <polygon
          points={`${frontBottomRight.x},${frontBottomRight.y} ${backBottomRight.x},${backBottomRight.y} ${backTopRight.x},${backTopRight.y} ${frontTopRight.x},${frontTopRight.y}`}
          fill="url(#faceGradient)"
          stroke={edgeColor}
          strokeWidth={1}
          opacity={0.7}
        />

        <polygon
          points={`${frontBottomLeft.x},${frontBottomLeft.y} ${frontBottomRight.x},${frontBottomRight.y} ${frontTopRight.x},${frontTopRight.y} ${frontTopLeft.x},${frontTopLeft.y}`}
          fill="url(#faceGradient)"
          stroke={edgeColor}
          strokeWidth={2}
          opacity={0.5}
        />
      </>
    );
  };

  // ==================== RENDER CUBOID EDGES ====================

  const renderEdges = () => {
    return (
      <>
        {/* Front face edges */}
        <line x1={frontBottomLeft.x} y1={frontBottomLeft.y} x2={frontBottomRight.x} y2={frontBottomRight.y}
              stroke={getStrokeColor('width')} strokeWidth={getStrokeWidth('width')} />
        <line x1={frontBottomRight.x} y1={frontBottomRight.y} x2={frontTopRight.x} y2={frontTopRight.y}
              stroke={getStrokeColor('height')} strokeWidth={getStrokeWidth('height')} />
        <line x1={frontTopRight.x} y1={frontTopRight.y} x2={frontTopLeft.x} y2={frontTopLeft.y}
              stroke={edgeColor} strokeWidth={2} />
        <line x1={frontTopLeft.x} y1={frontTopLeft.y} x2={frontBottomLeft.x} y2={frontBottomLeft.y}
              stroke={getStrokeColor('height')} strokeWidth={getStrokeWidth('height')} />

        {/* Back face edges */}
        <line x1={backBottomLeft.x} y1={backBottomLeft.y} x2={backBottomRight.x} y2={backBottomRight.y}
              stroke={edgeColor} strokeWidth={1.5} opacity={0.6} />
        <line x1={backBottomRight.x} y1={backBottomRight.y} x2={backTopRight.x} y2={backTopRight.y}
              stroke={edgeColor} strokeWidth={1.5} opacity={0.6} />
        <line x1={backTopRight.x} y1={backTopRight.y} x2={backTopLeft.x} y2={backTopLeft.y}
              stroke={edgeColor} strokeWidth={1.5} opacity={0.6} />
        <line x1={backTopLeft.x} y1={backTopLeft.y} x2={backBottomLeft.x} y2={backBottomLeft.y}
              stroke={edgeColor} strokeWidth={1.5} opacity={0.6} />

        {/* Connecting edges */}
        <line x1={frontBottomLeft.x} y1={frontBottomLeft.y} x2={backBottomLeft.x} y2={backBottomLeft.y}
              stroke={getStrokeColor('length')} strokeWidth={getStrokeWidth('length')} />
        <line x1={frontBottomRight.x} y1={frontBottomRight.y} x2={backBottomRight.x} y2={backBottomRight.y}
              stroke={getStrokeColor('length')} strokeWidth={getStrokeWidth('length')} />
        <line x1={frontTopRight.x} y1={frontTopRight.y} x2={backTopRight.x} y2={backTopRight.y}
              stroke={edgeColor} strokeWidth={2} />
        <line x1={frontTopLeft.x} y1={frontTopLeft.y} x2={backTopLeft.x} y2={backTopLeft.y}
              stroke={edgeColor} strokeWidth={2} />
      </>
    );
  };

  // ==================== RENDER DIAGONALS ====================

  const renderDiagonals = () => {
    return (
      <>
        {/* Face Diagonal */}
        {showFaceDiagonal && (
          <>
            {diagonalFace === 'front' && (
              <line x1={frontBottomLeft.x} y1={frontBottomLeft.y} x2={frontTopRight.x} y2={frontTopRight.y}
                    stroke={getStrokeColor('faceDiagonal')} strokeWidth={getStrokeWidth('faceDiagonal')} strokeDasharray="5,5" />
            )}
            {diagonalFace === 'side' && (
              <line x1={frontBottomRight.x} y1={frontBottomRight.y} x2={backTopRight.x} y2={backTopRight.y}
                    stroke={getStrokeColor('faceDiagonal')} strokeWidth={getStrokeWidth('faceDiagonal')} strokeDasharray="5,5" />
            )}
            {diagonalFace === 'top' && (
              <line x1={frontTopLeft.x} y1={frontTopLeft.y} x2={backTopRight.x} y2={backTopRight.y}
                    stroke={getStrokeColor('faceDiagonal')} strokeWidth={getStrokeWidth('faceDiagonal')} strokeDasharray="5,5" />
            )}
            {diagonalFace === 'bottom' && (
              <line x1={frontBottomLeft.x} y1={frontBottomLeft.y} x2={backBottomRight.x} y2={backBottomRight.y}
                    stroke={getStrokeColor('faceDiagonal')} strokeWidth={getStrokeWidth('faceDiagonal')} strokeDasharray="5,5" />
            )}
          </>
        )}

        {/* Space Diagonal */}
        {showSpaceDiagonal && (
          <line x1={frontBottomLeft.x} y1={frontBottomLeft.y} x2={backTopRight.x} y2={backTopRight.y}
                stroke={getStrokeColor('spaceDiagonal')} strokeWidth={getStrokeWidth('spaceDiagonal')} strokeDasharray="8,4" />
        )}
      </>
    );
  };

  // ==================== RENDER CUSTOM POINTS ====================

  const renderCustomPoints = () => {
    if (!normalizedCustomPoints || normalizedCustomPoints.length === 0) return null;

    return normalizedCustomPoints.map((point, idx) => {
      // Convert 3D coordinates to screen position using isometric projection
      const screenX = frontBottomLeft.x + point.x * scaleFactor + point.y * scaleFactor * 0.5;
      const screenY = frontBottomLeft.y - point.z * scaleFactor - point.y * scaleFactor * 0.25;

      return (
        <g key={`custom-point-${idx}`}>
          {/* Point dot */}
          <circle cx={screenX} cy={screenY} r={4} fill="#dc2626" />
          {/* Label with coordinates */}
          <text
            x={screenX + 10}
            y={screenY - 5}
            className="text-sm font-bold"
            fill="#dc2626"
          >
            {point.label}
          </text>
        </g>
      );
    });
  };

  // ==================== MAIN RENDER ====================

  return (
    <div className="my-4">
      {title && (
        <div className="text-center mb-2">
          <MathText className="text-lg font-semibold">{title}</MathText>
        </div>
      )}

      <svg width={svgWidth} height={svgHeight} className="mx-auto">
        <defs>
          <linearGradient id="faceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: faceColor, stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: faceColor, stopOpacity: 0.4 }} />
          </linearGradient>
        </defs>

        {renderGrid()}
        {renderAxes()}
        {renderAxisTicks()}
        {renderOriginLabel()}
        {renderCuboid()}
        {renderEdges()}
        {renderDiagonals()}
        {renderCustomPoints()}
      </svg>

      {caption && (
        <div className="text-center mt-3 text-sm text-gray-600 dark:text-gray-400">
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default Coordinate3DPlaneVisualizer;
