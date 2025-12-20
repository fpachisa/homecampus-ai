import React, { useMemo } from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

interface CuboidVisualizerProps {
  length?: string; // Label for length (front-back)
  width?: string; // Label for width (left-right)
  height?: string; // Label for height (up-down)
  faceDiagonal?: string; // Label for face diagonal
  spaceDiagonal?: string; // Label for space diagonal (body diagonal)
  highlightElement?: 'length' | 'width' | 'height' | 'faceDiagonal' | 'spaceDiagonal' | 'none';
  showFaceDiagonal?: boolean; // Show diagonal on a face
  showSpaceDiagonal?: boolean; // Show diagonal through the body
  diagonalFace?: 'front' | 'side' | 'top' | 'bottom'; // Which face to show diagonal on
  showVertexLabels?: boolean; // Show vertex labels A, B, C, D, E, F, G, H
  shadedFace?: 'front' | 'top' | 'side' | 'none'; // Which face to shade/highlight
  caption?: string;
}

const CuboidVisualizer: React.FC<CuboidVisualizerProps> = ({
  length = '',
  width = '',
  height = '',
  faceDiagonal = '',
  spaceDiagonal = '',
  highlightElement = 'none',
  showFaceDiagonal = false,
  showSpaceDiagonal = false,
  diagonalFace = 'bottom',
  showVertexLabels = false,
  shadedFace = 'none',
  caption
}) => {
  const { theme } = useTheme();

  // Extract numeric values from dimension strings (e.g., "5cm" -> 5, "12" -> 12)
  const parseNumeric = (value: string): number => {
    const match = value.match(/[\d.]+/);
    return match ? parseFloat(match[0]) : 1;
  };

  const widthNum = width ? parseNumeric(width) : 1;
  const lengthNum = length ? parseNumeric(length) : 1;
  const heightNum = height ? parseNumeric(height) : 1;

  // Calculate dimensions dynamically based on the actual proportions
  const dimensions = useMemo(() => {
    // Find the maximum dimension to use as reference for scaling
    const maxDim = Math.max(widthNum, lengthNum, heightNum);

    // Base scale - larger shapes get more pixels
    const baseScale = 120;
    const scaleFactor = baseScale / maxDim;

    // Calculate proportional dimensions (clamped for reasonable display)
    const baseWidth = Math.max(60, Math.min(200, widthNum * scaleFactor));
    const baseLength = Math.max(40, Math.min(150, lengthNum * scaleFactor));
    const baseHeight = Math.max(50, Math.min(180, heightNum * scaleFactor));

    // Isometric angles for pseudo-3D effect
    const depthOffsetX = baseLength * 0.5;
    const depthOffsetY = baseLength * 0.25;

    // Calculate total dimensions needed
    const totalWidth = baseWidth + depthOffsetX;
    const totalHeight = baseHeight + depthOffsetY;

    // Padding for labels
    const padding = { left: 55, right: 55, top: 30, bottom: 50 };

    // SVG dimensions - fit to content
    const svgWidth = totalWidth + padding.left + padding.right;
    const svgHeight = totalHeight + padding.top + padding.bottom;

    // Position the cuboid (front-bottom-left corner)
    const originX = padding.left;
    const originY = svgHeight - padding.bottom;

    return {
      baseWidth,
      baseLength,
      baseHeight,
      depthOffsetX,
      depthOffsetY,
      svgWidth,
      svgHeight,
      originX,
      originY
    };
  }, [widthNum, lengthNum, heightNum]);

  const { baseWidth, baseHeight, depthOffsetX, depthOffsetY, svgWidth, svgHeight, originX, originY } = dimensions;

  // Bottom face vertices (front rectangle)
  const frontBottomLeft = { x: originX, y: originY }; // A
  const frontBottomRight = { x: frontBottomLeft.x + baseWidth, y: frontBottomLeft.y }; // B
  const frontTopRight = { x: frontBottomRight.x, y: frontBottomRight.y - baseHeight }; // C
  const frontTopLeft = { x: frontBottomLeft.x, y: frontBottomLeft.y - baseHeight }; // D

  // Back face vertices (back rectangle, offset for depth)
  const backBottomLeft = { x: frontBottomLeft.x + depthOffsetX, y: frontBottomLeft.y - depthOffsetY }; // E
  const backBottomRight = { x: frontBottomRight.x + depthOffsetX, y: frontBottomRight.y - depthOffsetY }; // F
  const backTopRight = { x: frontTopRight.x + depthOffsetX, y: frontTopRight.y - depthOffsetY }; // G
  const backTopLeft = { x: frontTopLeft.x + depthOffsetX, y: frontTopLeft.y - depthOffsetY }; // H

  // Colors - single color scheme for consistency (important for shaded part questions)
  const defaultColor = theme.colors.textSecondary || '#666';
  const highlightColor = '#ef4444';
  const edgeColor = '#334155'; // Darker edge color for contrast
  const faceColor = '#dbeafe'; // Very light blue - unshaded faces
  const shadedColor = '#3b82f6'; // Bright blue - clearly shaded face

  // Determine stroke color and width
  const getStrokeColor = (element: string) => {
    return highlightElement === element ? highlightColor : edgeColor;
  };

  const getStrokeWidth = (element: string) => {
    return highlightElement === element ? 3 : 2;
  };

  // Generate unique gradient IDs for this instance
  const gradientId = useMemo(() => Math.random().toString(36).substr(2, 9), []);

  return (
    <div className="my-4">
      <svg width={svgWidth} height={svgHeight} className="mx-auto" style={{ maxWidth: '100%' }}>
        <defs>
          {/* Single gradient for all faces - varying opacity for 3D depth effect */}
          <linearGradient id={`faceGradient-${gradientId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: faceColor, stopOpacity: 0.9 }} />
            <stop offset="100%" style={{ stopColor: faceColor, stopOpacity: 0.7 }} />
          </linearGradient>
        </defs>

        {/* Back faces (drawn first, behind front faces) */}
        {/* Back face */}
        <polygon
          points={`${backBottomLeft.x},${backBottomLeft.y} ${backBottomRight.x},${backBottomRight.y} ${backTopRight.x},${backTopRight.y} ${backTopLeft.x},${backTopLeft.y}`}
          fill={faceColor}
          stroke={edgeColor}
          strokeWidth={1}
          opacity={0.4}
        />

        {/* Top face */}
        <polygon
          points={`${frontTopLeft.x},${frontTopLeft.y} ${frontTopRight.x},${frontTopRight.y} ${backTopRight.x},${backTopRight.y} ${backTopLeft.x},${backTopLeft.y}`}
          fill={shadedFace === 'top' ? shadedColor : faceColor}
          stroke={edgeColor}
          strokeWidth={shadedFace === 'top' ? 2.5 : 1.5}
          opacity={shadedFace === 'top' ? 0.85 : 0.6}
        />

        {/* Right/Side face */}
        <polygon
          points={`${frontBottomRight.x},${frontBottomRight.y} ${backBottomRight.x},${backBottomRight.y} ${backTopRight.x},${backTopRight.y} ${frontTopRight.x},${frontTopRight.y}`}
          fill={shadedFace === 'side' ? shadedColor : faceColor}
          stroke={edgeColor}
          strokeWidth={shadedFace === 'side' ? 2.5 : 1.5}
          opacity={shadedFace === 'side' ? 0.85 : 0.5}
        />

        {/* Front face (main face, most visible) */}
        <polygon
          points={`${frontBottomLeft.x},${frontBottomLeft.y} ${frontBottomRight.x},${frontBottomRight.y} ${frontTopRight.x},${frontTopRight.y} ${frontTopLeft.x},${frontTopLeft.y}`}
          fill={shadedFace === 'front' ? shadedColor : faceColor}
          stroke={edgeColor}
          strokeWidth={shadedFace === 'front' ? 2.5 : 2}
          opacity={shadedFace === 'front' ? 0.85 : 0.7}
        />

        {/* Edges - draw all 12 edges of the cuboid */}
        {/* Front face edges (4 edges) */}
        <line x1={frontBottomLeft.x} y1={frontBottomLeft.y} x2={frontBottomRight.x} y2={frontBottomRight.y} stroke={getStrokeColor('width')} strokeWidth={getStrokeWidth('width')} />
        <line x1={frontBottomRight.x} y1={frontBottomRight.y} x2={frontTopRight.x} y2={frontTopRight.y} stroke={getStrokeColor('height')} strokeWidth={getStrokeWidth('height')} />
        <line x1={frontTopRight.x} y1={frontTopRight.y} x2={frontTopLeft.x} y2={frontTopLeft.y} stroke={edgeColor} strokeWidth={2} />
        <line x1={frontTopLeft.x} y1={frontTopLeft.y} x2={frontBottomLeft.x} y2={frontBottomLeft.y} stroke={getStrokeColor('height')} strokeWidth={getStrokeWidth('height')} />

        {/* Back face edges (4 edges) */}
        <line x1={backBottomLeft.x} y1={backBottomLeft.y} x2={backBottomRight.x} y2={backBottomRight.y} stroke={edgeColor} strokeWidth={1.5} opacity={0.6} />
        <line x1={backBottomRight.x} y1={backBottomRight.y} x2={backTopRight.x} y2={backTopRight.y} stroke={edgeColor} strokeWidth={1.5} opacity={0.6} />
        <line x1={backTopRight.x} y1={backTopRight.y} x2={backTopLeft.x} y2={backTopLeft.y} stroke={edgeColor} strokeWidth={1.5} opacity={0.6} />
        <line x1={backTopLeft.x} y1={backTopLeft.y} x2={backBottomLeft.x} y2={backBottomLeft.y} stroke={edgeColor} strokeWidth={1.5} opacity={0.6} />

        {/* Connecting edges (4 edges from front to back) */}
        <line x1={frontBottomLeft.x} y1={frontBottomLeft.y} x2={backBottomLeft.x} y2={backBottomLeft.y} stroke={getStrokeColor('length')} strokeWidth={getStrokeWidth('length')} />
        <line x1={frontBottomRight.x} y1={frontBottomRight.y} x2={backBottomRight.x} y2={backBottomRight.y} stroke={getStrokeColor('length')} strokeWidth={getStrokeWidth('length')} />
        <line x1={frontTopRight.x} y1={frontTopRight.y} x2={backTopRight.x} y2={backTopRight.y} stroke={edgeColor} strokeWidth={2} />
        <line x1={frontTopLeft.x} y1={frontTopLeft.y} x2={backTopLeft.x} y2={backTopLeft.y} stroke={edgeColor} strokeWidth={2} />

        {/* Face Diagonal */}
        {showFaceDiagonal && (
          <>
            {diagonalFace === 'front' && (
              <line
                x1={frontBottomLeft.x}
                y1={frontBottomLeft.y}
                x2={frontTopRight.x}
                y2={frontTopRight.y}
                stroke={getStrokeColor('faceDiagonal')}
                strokeWidth={getStrokeWidth('faceDiagonal')}
                strokeDasharray="5,5"
              />
            )}
            {diagonalFace === 'side' && (
              <line
                x1={frontBottomRight.x}
                y1={frontBottomRight.y}
                x2={backTopRight.x}
                y2={backTopRight.y}
                stroke={getStrokeColor('faceDiagonal')}
                strokeWidth={getStrokeWidth('faceDiagonal')}
                strokeDasharray="5,5"
              />
            )}
            {diagonalFace === 'top' && (
              <line
                x1={frontTopLeft.x}
                y1={frontTopLeft.y}
                x2={backTopRight.x}
                y2={backTopRight.y}
                stroke={getStrokeColor('faceDiagonal')}
                strokeWidth={getStrokeWidth('faceDiagonal')}
                strokeDasharray="5,5"
              />
            )}
            {diagonalFace === 'bottom' && (
              <line
                x1={frontBottomLeft.x}
                y1={frontBottomLeft.y}
                x2={backBottomRight.x}
                y2={backBottomRight.y}
                stroke={getStrokeColor('faceDiagonal')}
                strokeWidth={getStrokeWidth('faceDiagonal')}
                strokeDasharray="5,5"
              />
            )}
          </>
        )}

        {/* Space Diagonal (body diagonal from front-bottom-left to back-top-right) */}
        {showSpaceDiagonal && (
          <line
            x1={frontBottomLeft.x}
            y1={frontBottomLeft.y}
            x2={backTopRight.x}
            y2={backTopRight.y}
            stroke={getStrokeColor('spaceDiagonal')}
            strokeWidth={getStrokeWidth('spaceDiagonal')}
            strokeDasharray="8,4"
          />
        )}

        {/* Vertex Labels - Standard Cuboid Notation */}
        {/* Bottom face (ABCD): A=front-left, B=front-right, C=back-right, D=back-left */}
        {/* Top face (EFGH): E=front-left, F=front-right, G=back-right, H=back-left */}
        {showVertexLabels && (
          <>
            {/* Bottom face vertices */}
            <text x={frontBottomLeft.x - 15} y={frontBottomLeft.y + 5} className="text-sm font-bold" fill={defaultColor}>A</text>
            <text x={frontBottomRight.x + 10} y={frontBottomRight.y + 5} className="text-sm font-bold" fill={defaultColor}>B</text>
            <text x={backBottomRight.x + 10} y={backBottomRight.y + 5} className="text-sm font-bold" fill={defaultColor}>C</text>
            <text x={backBottomLeft.x - 15} y={backBottomLeft.y + 5} className="text-sm font-bold" fill={defaultColor}>D</text>

            {/* Top face vertices */}
            <text x={frontTopLeft.x - 15} y={frontTopLeft.y} className="text-sm font-bold" fill={defaultColor}>E</text>
            <text x={frontTopRight.x + 10} y={frontTopRight.y} className="text-sm font-bold" fill={defaultColor}>F</text>
            <text x={backTopRight.x + 10} y={backTopRight.y} className="text-sm font-bold" fill={defaultColor}>G</text>
            <text x={backTopLeft.x - 15} y={backTopLeft.y} className="text-sm font-bold" fill={defaultColor}>H</text>
          </>
        )}

        {/* Edge Labels */}
        {/* Width label (bottom front edge) */}
        {width && (
          <foreignObject
            x={frontBottomLeft.x + baseWidth / 2 - 40}
            y={frontBottomLeft.y + 10}
            width={80}
            height={30}
          >
            <div className="flex items-center justify-center h-full">
              <div
                className="text-base font-semibold"
                style={{ color: highlightElement === 'width' ? highlightColor : defaultColor }}
              >
                <MathText>{`$${width}$`}</MathText>
              </div>
            </div>
          </foreignObject>
        )}

        {/* Height label (left front edge) */}
        {height && (
          <foreignObject
            x={frontBottomLeft.x - 50}
            y={frontBottomLeft.y - baseHeight / 2 - 15}
            width={50}
            height={30}
          >
            <div className="flex items-center justify-center h-full">
              <div
                className="text-base font-semibold"
                style={{ color: highlightElement === 'height' ? highlightColor : defaultColor }}
              >
                <MathText>{`$${height}$`}</MathText>
              </div>
            </div>
          </foreignObject>
        )}

        {/* Length label (bottom-right receding edge BC) */}
        {length && (
          <foreignObject
            x={frontBottomRight.x + depthOffsetX / 2 + 10}
            y={frontBottomRight.y - depthOffsetY / 2 - 15}
            width={60}
            height={30}
          >
            <div className="flex items-center justify-center h-full">
              <div
                className="text-base font-semibold"
                style={{ color: highlightElement === 'length' ? highlightColor : defaultColor }}
              >
                <MathText>{`$${length}$`}</MathText>
              </div>
            </div>
          </foreignObject>
        )}

        {/* Face Diagonal label */}
        {faceDiagonal && showFaceDiagonal && (
          <foreignObject
            x={
              diagonalFace === 'front' ? frontBottomLeft.x + 80 :
              diagonalFace === 'side' ? frontBottomRight.x + 50 :
              diagonalFace === 'top' ? frontTopLeft.x + 80 :
              // For bottom face: position along the diagonal AC (from A to C)
              frontBottomLeft.x + (backBottomRight.x - frontBottomLeft.x) * 0.4 - 40
            }
            y={
              diagonalFace === 'front' ? frontBottomLeft.y - 80 :
              diagonalFace === 'side' ? frontBottomRight.y - 80 :
              diagonalFace === 'top' ? frontTopLeft.y - 30 :
              // For bottom face: position along the diagonal AC
              frontBottomLeft.y + (backBottomRight.y - frontBottomLeft.y) * 0.4 + 5
            }
            width={80}
            height={30}
          >
            <div className="flex items-center justify-center h-full">
              <div
                className="text-base font-semibold px-2 rounded"
                style={{ color: highlightElement === 'faceDiagonal' ? highlightColor : defaultColor }}
              >
                <MathText>{`$${faceDiagonal}$`}</MathText>
              </div>
            </div>
          </foreignObject>
        )}

        {/* Space Diagonal label */}
        {spaceDiagonal && showSpaceDiagonal && (
          <foreignObject
            x={frontBottomLeft.x + (backTopRight.x - frontBottomLeft.x) / 2 - 40}
            y={frontBottomLeft.y + (backTopRight.y - frontBottomLeft.y) / 2 - 55}
            width={80}
            height={30}
          >
            <div className="flex items-center justify-center h-full">
              <div
                className="text-base font-semibold px-2 rounded"
                style={{ color: highlightElement === 'spaceDiagonal' ? highlightColor : defaultColor }}
              >
                <MathText>{`$${spaceDiagonal}$`}</MathText>
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

export default CuboidVisualizer;
