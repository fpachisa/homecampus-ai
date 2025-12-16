import React from 'react';

interface UnitCubeGridVisualizerProps {
  cubesAlong: number;
  cubesDeep: number;
  cubesHigh: number;
  unit?: 'cubic units' | 'cm³' | 'm³';
  showDimensions?: boolean;
  highlightLayer?: number;
  caption?: string;
}

const UnitCubeGridVisualizer: React.FC<UnitCubeGridVisualizerProps> = ({
  cubesAlong,
  cubesDeep,
  cubesHigh,
  unit = 'cubic units',
  showDimensions = true,
  highlightLayer,
  caption
}) => {
  const nx = Math.min(Math.max(1, Math.round(cubesAlong)), 10);
  const ny = Math.min(Math.max(1, Math.round(cubesDeep)), 10);
  const nz = Math.min(Math.max(1, Math.round(cubesHigh)), 10);

  // Isometric projection: 30-degree angles
  const cos30 = Math.cos(Math.PI / 6); // ≈ 0.866
  const sin30 = 0.5;

  // Fixed edge size for consistent cube appearance
  const edge = 28;

  const dx = edge * cos30;  // horizontal movement per unit x
  const dy = edge * sin30;  // vertical movement per unit x (downward)
  const dz = edge;          // vertical movement per unit z (upward)

  // Calculate actual rendered dimensions
  const totalWidth = (nx + ny) * dx;
  const totalHeight = nz * dz + (nx + ny) * dy;

  // Add padding for labels (increased to accommodate unit suffix like "cm")
  const labelPadding = 55;
  const svgWidth = totalWidth + labelPadding * 2;
  const svgHeight = totalHeight + labelPadding * 2;

  // Center the cuboid: origin is at the back corner (0,0,0)
  // Horizontal center: origin + nx*dx - ny*dx should equal svgWidth/2 at mid-x
  const originX = labelPadding + ny * dx;
  // Vertical center: the cuboid spans from (originY - nz*dz) to (originY + (nx+ny)*dy)
  // Center it by placing originY such that the middle is at svgHeight/2
  const originY = labelPadding + nz * dz;

  // Project grid point (x, y, z) to screen coordinates
  const project = (x: number, y: number, z: number): { x: number; y: number } => ({
    x: originX + x * dx - y * dx,
    y: originY - z * dz + x * dy + y * dy
  });

  const isDark = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');

  // Grayscale colors for non-highlighted cubes
  const grayscale = {
    top: isDark ? '#e5e5e5' : '#ffffff',
    right: isDark ? '#a3a3a3' : '#d4d4d4',
    left: isDark ? '#737373' : '#a3a3a3',
    stroke: isDark ? '#404040' : '#525252'
  };

  // Orange colors for highlighted layer
  const orange = {
    top: '#fed7aa',
    right: '#fdba74',
    left: '#fb923c',
    stroke: '#c2410c'
  };

  const textColor = isDark ? '#f3f4f6' : '#1f2937';

  // Draw a single cube using direct vertex projection
  const drawCube = (gx: number, gy: number, gz: number, colors: typeof grayscale) => {
    // Project all 8 vertices directly
    const v100 = project(gx + 1, gy, gz);
    const v010 = project(gx, gy + 1, gz);
    const v110 = project(gx + 1, gy + 1, gz);
    const v001 = project(gx, gy, gz + 1);
    const v101 = project(gx + 1, gy, gz + 1);
    const v011 = project(gx, gy + 1, gz + 1);
    const v111 = project(gx + 1, gy + 1, gz + 1);

    const poly = (pts: { x: number; y: number }[]) =>
      `${pts.map(p => `${p.x},${p.y}`).join(' ')}`;

    // In isometric view, the viewer looks from +x, +y direction toward origin
    // Visible faces are those pointing TOWARD the viewer:
    // - Top face: z = gz + 1 (pointing up/toward viewer)
    // - Right face: x = gx + 1 (pointing toward +x, viewer's left side)
    // - Left face: y = gy + 1 (pointing toward +y, viewer's right side)
    return (
      <g key={`${gx}-${gy}-${gz}`}>
        {/* Top face (z = gz + 1) */}
        <polygon
          points={poly([v001, v101, v111, v011])}
          fill={colors.top}
          stroke={colors.stroke}
          strokeWidth={0.6}
        />
        {/* Right face (x = gx + 1, pointing toward viewer's left) */}
        <polygon
          points={poly([v100, v110, v111, v101])}
          fill={colors.right}
          stroke={colors.stroke}
          strokeWidth={0.6}
        />
        {/* Left face (y = gy + 1, pointing toward viewer's right) */}
        <polygon
          points={poly([v010, v110, v111, v011])}
          fill={colors.left}
          stroke={colors.stroke}
          strokeWidth={0.6}
        />
      </g>
    );
  };

  // Render all cubes using painter's algorithm (back to front)
  // Viewer looks from +x, +y direction, so render:
  // - Lower z first (bottom layers)
  // - Lower y first (back rows)
  // - Lower x first (back columns)
  const renderCubes = () => {
    const elements: React.ReactElement[] = [];

    for (let z = 0; z < nz; z++) {
      const isHL = highlightLayer === z + 1;
      const colors = isHL ? orange : grayscale;

      for (let y = 0; y < ny; y++) {
        for (let x = 0; x < nx; x++) {
          elements.push(drawCube(x, y, z, colors));
        }
      }
    }

    return elements;
  };

  const renderDimensions = () => {
    if (!showDimensions) return null;

    const unitSuffix = unit === 'cubic units' ? '' : ` ${unit.replace('³', '')}`;

    // Get corner points of the cuboid
    const pFrontBottom = project(nx, ny, 0);  // Front corner (closest to viewer)
    const pRightBottom = project(nx, 0, 0);   // Right corner
    const pLeftBottom = project(0, ny, 0);    // Left corner
    const pLeftTop = project(0, ny, nz);      // Left corner top

    // Right edge: from pFrontBottom to pRightBottom - y varies, so shows ny (cubesDeep)
    const rightLabelX = (pFrontBottom.x + pRightBottom.x) / 2;
    const rightLabelY = (pFrontBottom.y + pRightBottom.y) / 2 + 20;

    // Left edge: from pFrontBottom to pLeftBottom - x varies, so shows nx (cubesAlong)
    const leftLabelX = (pFrontBottom.x + pLeftBottom.x) / 2 - 8;
    const leftLabelY = (pFrontBottom.y + pLeftBottom.y) / 2 + 20;

    // Z dimension label - along the left vertical edge, offset outward
    const zLabelX = pLeftBottom.x - 12;
    const zLabelY = (pLeftBottom.y + pLeftTop.y) / 2;

    return (
      <>
        {/* Y dimension (cubesDeep) - right edge */}
        <text x={rightLabelX} y={rightLabelY}
              textAnchor="middle" fill={textColor} fontSize="14" fontWeight="600">
          {ny}{unitSuffix}
        </text>
        {/* X dimension (cubesAlong) - left edge */}
        <text x={leftLabelX} y={leftLabelY}
              textAnchor="middle" fill={textColor} fontSize="14" fontWeight="600">
          {nx}{unitSuffix}
        </text>
        {/* Z dimension (cubesHigh) - vertical edge */}
        <text x={zLabelX} y={zLabelY}
              textAnchor="end" fill={textColor} fontSize="14" fontWeight="600">
          {nz}{unitSuffix}
        </text>
      </>
    );
  };

  return (
    <div className="my-4">
      <svg width={svgWidth} height={svgHeight} className="mx-auto"
           viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
        {renderCubes()}
        {renderDimensions()}
      </svg>
      {caption && (
        <div className="text-sm text-center mt-2 px-4" style={{ color: textColor }}>
          {caption}
        </div>
      )}
    </div>
  );
};

export default UnitCubeGridVisualizer;
