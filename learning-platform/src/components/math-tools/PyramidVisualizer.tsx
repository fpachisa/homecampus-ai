import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface PyramidVisualizerProps {
  baseLength?: string; // Label for base edge length (for square base)
  baseWidth?: string; // Label for base width (for rectangular base, if different from length)
  height?: string; // Label for perpendicular height from base to apex
  slantHeight?: string; // Label for slant height (from base edge midpoint to apex)
  lateralEdge?: string; // Label for lateral edge (from base vertex to apex)
  highlightElement?: 'baseLength' | 'baseWidth' | 'height' | 'slantHeight' | 'lateralEdge' | 'none';
  pyramidType?: 'square' | 'rectangular'; // Type of pyramid base
  showHeight?: boolean; // Show perpendicular height line
  showSlantHeight?: boolean; // Show slant height line
  showVertexLabels?: boolean; // Show vertex labels
  caption?: string;
}

const PyramidVisualizer: React.FC<PyramidVisualizerProps> = ({
  baseLength = '',
  baseWidth = '',
  height = '',
  slantHeight = '',
  lateralEdge = '',
  highlightElement = 'none',
  pyramidType = 'square',
  showHeight = true,
  showSlantHeight = false,
  showVertexLabels = false,
  caption
}) => {
  const { theme } = useTheme();

  // SVG dimensions
  const svgWidth = 500;
  const svgHeight = 450;

  // Pyramid dimensions
  const baseSize = 220; // Base edge length for visualization
  const pyramidHeight = 200; // Visual height
  const baseWidthSize = pyramidType === 'rectangular' && baseWidth ? baseSize * 0.7 : baseSize;

  // 3D perspective - isometric view
  const depthOffsetX = baseSize * 0.45;
  const depthOffsetY = baseSize * 0.22;

  // Base center position
  const baseCenterX = svgWidth / 2;
  const baseCenterY = svgHeight - 80;

  // Base vertices (square or rectangle)
  const frontLeft = { x: baseCenterX - baseWidthSize / 2, y: baseCenterY }; // A
  const frontRight = { x: baseCenterX + baseWidthSize / 2, y: baseCenterY }; // B
  const backRight = { x: frontRight.x + depthOffsetX, y: frontRight.y - depthOffsetY }; // C
  const backLeft = { x: frontLeft.x + depthOffsetX, y: frontLeft.y - depthOffsetY }; // D

  // Apex (top of pyramid)
  const apex = { x: baseCenterX + depthOffsetX / 2, y: baseCenterY - pyramidHeight }; // V

  // Base center (for height line)
  const baseCenter = {
    x: (frontLeft.x + frontRight.x + backLeft.x + backRight.x) / 4,
    y: (frontLeft.y + frontRight.y + backLeft.y + backRight.y) / 4
  };

  // Slant height point (midpoint of front edge)
  const slantHeightBase = {
    x: (frontLeft.x + frontRight.x) / 2,
    y: (frontLeft.y + frontRight.y) / 2
  };

  // Colors
  const defaultColor = theme.colors.textSecondary || '#666';
  const highlightColor = '#ef4444';
  const faceColor = '#fef3c7'; // Light yellow
  const edgeColor = '#78716c'; // Warm gray

  // Determine stroke properties
  const getStrokeColor = (element: string) => {
    return highlightElement === element ? highlightColor : edgeColor;
  };

  const getStrokeWidth = (element: string) => {
    return highlightElement === element ? 3 : 2;
  };

  return (
    <div className="my-4">
      <svg width={svgWidth} height={svgHeight} className="mx-auto">
        <defs>
          {/* Gradient for 3D effect */}
          <linearGradient id="pyramidFace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: faceColor, stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: faceColor, stopOpacity: 0.5 }} />
          </linearGradient>
        </defs>

        {/* Base (drawn first) */}
        <polygon
          points={`${frontLeft.x},${frontLeft.y} ${frontRight.x},${frontRight.y} ${backRight.x},${backRight.y} ${backLeft.x},${backLeft.y}`}
          fill="url(#pyramidFace)"
          stroke={edgeColor}
          strokeWidth={1.5}
          opacity={0.7}
        />

        {/* Back triangular faces (less visible) */}
        {/* Back-left face */}
        <polygon
          points={`${backLeft.x},${backLeft.y} ${backRight.x},${backRight.y} ${apex.x},${apex.y}`}
          fill="url(#pyramidFace)"
          stroke={edgeColor}
          strokeWidth={1.5}
          opacity={0.4}
        />

        {/* Front triangular faces (more visible) */}
        {/* Left face */}
        <polygon
          points={`${frontLeft.x},${frontLeft.y} ${backLeft.x},${backLeft.y} ${apex.x},${apex.y}`}
          fill="url(#pyramidFace)"
          stroke={edgeColor}
          strokeWidth={2}
          opacity={0.6}
        />

        {/* Right face */}
        <polygon
          points={`${frontRight.x},${frontRight.y} ${backRight.x},${backRight.y} ${apex.x},${apex.y}`}
          fill="url(#pyramidFace)"
          stroke={edgeColor}
          strokeWidth={2}
          opacity={0.6}
        />

        {/* Front face (most visible) */}
        <polygon
          points={`${frontLeft.x},${frontLeft.y} ${frontRight.x},${frontRight.y} ${apex.x},${apex.y}`}
          fill="url(#pyramidFace)"
          stroke={edgeColor}
          strokeWidth={2}
          opacity={0.8}
        />

        {/* Base edges (redraw for emphasis) */}
        <line
          x1={frontLeft.x}
          y1={frontLeft.y}
          x2={frontRight.x}
          y2={frontRight.y}
          stroke={getStrokeColor('baseLength')}
          strokeWidth={getStrokeWidth('baseLength')}
        />
        <line
          x1={frontRight.x}
          y1={frontRight.y}
          x2={backRight.x}
          y2={backRight.y}
          stroke={getStrokeColor(pyramidType === 'rectangular' ? 'baseWidth' : 'baseLength')}
          strokeWidth={getStrokeWidth(pyramidType === 'rectangular' ? 'baseWidth' : 'baseLength')}
        />

        {/* Lateral edges (from base vertices to apex) */}
        <line
          x1={frontLeft.x}
          y1={frontLeft.y}
          x2={apex.x}
          y2={apex.y}
          stroke={getStrokeColor('lateralEdge')}
          strokeWidth={getStrokeWidth('lateralEdge')}
        />
        <line
          x1={frontRight.x}
          y1={frontRight.y}
          x2={apex.x}
          y2={apex.y}
          stroke={getStrokeColor('lateralEdge')}
          strokeWidth={getStrokeWidth('lateralEdge')}
        />
        <line
          x1={backLeft.x}
          y1={backLeft.y}
          x2={apex.x}
          y2={apex.y}
          stroke={edgeColor}
          strokeWidth={1.5}
          opacity={0.5}
        />
        <line
          x1={backRight.x}
          y1={backRight.y}
          x2={apex.x}
          y2={apex.y}
          stroke={edgeColor}
          strokeWidth={1.5}
          opacity={0.5}
        />

        {/* Perpendicular height (from base center to apex) */}
        {showHeight && (
          <>
            <line
              x1={baseCenter.x}
              y1={baseCenter.y}
              x2={apex.x}
              y2={apex.y}
              stroke={getStrokeColor('height')}
              strokeWidth={getStrokeWidth('height')}
              strokeDasharray="5,5"
            />
            {/* Dot at base center */}
            <circle cx={baseCenter.x} cy={baseCenter.y} r={3} fill={edgeColor} />
            {/* Right angle marker at base center */}
            <path
              d={`M ${baseCenter.x - 8} ${baseCenter.y} L ${baseCenter.x - 8} ${baseCenter.y - 8} L ${baseCenter.x} ${baseCenter.y - 8}`}
              fill="none"
              stroke={edgeColor}
              strokeWidth={1.5}
            />
          </>
        )}

        {/* Slant height (from base edge midpoint to apex) */}
        {showSlantHeight && (
          <>
            <line
              x1={slantHeightBase.x}
              y1={slantHeightBase.y}
              x2={apex.x}
              y2={apex.y}
              stroke={getStrokeColor('slantHeight')}
              strokeWidth={getStrokeWidth('slantHeight')}
              strokeDasharray="8,4"
            />
            {/* Dot at slant height base */}
            <circle cx={slantHeightBase.x} cy={slantHeightBase.y} r={3} fill={edgeColor} />
          </>
        )}

        {/* Vertex labels */}
        {showVertexLabels && (
          <>
            <text x={frontLeft.x - 20} y={frontLeft.y + 5} className="text-sm font-bold" fill={defaultColor}>A</text>
            <text x={frontRight.x + 10} y={frontRight.y + 5} className="text-sm font-bold" fill={defaultColor}>B</text>
            <text x={backRight.x + 10} y={backRight.y} className="text-sm font-bold" fill={defaultColor}>C</text>
            <text x={backLeft.x - 20} y={backLeft.y} className="text-sm font-bold" fill={defaultColor}>D</text>
            <text x={apex.x - 20} y={apex.y - 10} className="text-sm font-bold" fill={defaultColor}>V</text>
          </>
        )}

        {/* Dimension labels */}
        {/* Base length label (front edge) */}
        {baseLength && (
          <foreignObject
            x={frontLeft.x + (frontRight.x - frontLeft.x) / 2 - 40}
            y={frontLeft.y + 15}
            width={80}
            height={30}
          >
            <div className="flex items-center justify-center h-full">
              <div
                className="text-base font-semibold"
                style={{ color: highlightElement === 'baseLength' ? highlightColor : defaultColor }}
              >
                <MathText>{`$${baseLength}$`}</MathText>
              </div>
            </div>
          </foreignObject>
        )}

        {/* Base width label (right edge, for rectangular pyramids) */}
        {baseWidth && pyramidType === 'rectangular' && (
          <foreignObject
            x={frontRight.x + 5}
            y={frontRight.y - (frontRight.y - backRight.y) / 2 - 15}
            width={80}
            height={30}
          >
            <div className="flex items-center justify-center h-full">
              <div
                className="text-base font-semibold"
                style={{ color: highlightElement === 'baseWidth' ? highlightColor : defaultColor }}
              >
                <MathText>{`$${baseWidth}$`}</MathText>
              </div>
            </div>
          </foreignObject>
        )}

        {/* Height label (perpendicular height) */}
        {height && showHeight && (
          <foreignObject
            x={baseCenter.x - 60}
            y={baseCenter.y - pyramidHeight / 2 - 15}
            width={60}
            height={30}
          >
            <div className="flex items-center justify-center h-full">
              <div
                className="text-base font-semibold bg-white bg-opacity-80 px-1 rounded"
                style={{ color: highlightElement === 'height' ? highlightColor : defaultColor }}
              >
                <MathText>{`$${height}$`}</MathText>
              </div>
            </div>
          </foreignObject>
        )}

        {/* Slant height label */}
        {slantHeight && showSlantHeight && (
          <foreignObject
            x={slantHeightBase.x - 80}
            y={slantHeightBase.y - (slantHeightBase.y - apex.y) / 2 - 15}
            width={80}
            height={30}
          >
            <div className="flex items-center justify-center h-full">
              <div
                className="text-base font-semibold bg-white bg-opacity-80 px-1 rounded"
                style={{ color: highlightElement === 'slantHeight' ? highlightColor : defaultColor }}
              >
                <MathText>{`$${slantHeight}$`}</MathText>
              </div>
            </div>
          </foreignObject>
        )}

        {/* Lateral edge label */}
        {lateralEdge && (
          <foreignObject
            x={frontRight.x + 10}
            y={frontRight.y - (frontRight.y - apex.y) / 2 - 15}
            width={60}
            height={30}
          >
            <div className="flex items-center justify-center h-full">
              <div
                className="text-base font-semibold"
                style={{ color: highlightElement === 'lateralEdge' ? highlightColor : defaultColor }}
              >
                <MathText>{`$${lateralEdge}$`}</MathText>
              </div>
            </div>
          </foreignObject>
        )}
      </svg>

      {caption && (
        <div
          className="text-sm text-center mt-2 px-4"
          style={{ color: theme.colors.textSecondary }}
        >
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default PyramidVisualizer;
