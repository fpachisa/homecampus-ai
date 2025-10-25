/**
 * Path Geometry Utilities
 *
 * Generates curved, meandering path positions for interactive path node layout.
 * Creates an organic, flowing path that zigzags across the screen.
 */

export interface NodePosition {
  x: number;            // X position (0-100%)
  y: number;            // Y position in pixels
  rotation: number;     // Rotation angle for variety (-15 to 15 degrees)
}

// ============================================
// PATH GENERATION
// ============================================

/**
 * Generates positions for nodes in a meandering path
 * @param nodeCount - Total number of nodes
 * @param containerWidth - Width of the container (defaults to percentage-based)
 * @param verticalSpacing - Spacing between nodes vertically (in pixels)
 * @returns Array of node positions
 */
export const generateMeanderingPath = (
  nodeCount: number,
  verticalSpacing: number = 150
): NodePosition[] => {
  const positions: NodePosition[] = [];
  const amplitude = 15; // How far left/right nodes swing (percentage) - reduced from 35
  const center = 50;    // Center line (percentage)

  for (let i = 0; i < nodeCount; i++) {
    // Create a sine wave pattern with some variation
    const frequency = 0.4; // How many waves along the path - reduced from 0.5
    const phaseShift = i * 0.2; // Add variety to the wave - reduced from 0.3

    // Calculate X position using sine wave
    const xOffset = Math.sin((i * frequency) + phaseShift) * amplitude;
    const x = center + xOffset;

    // Y position is simply vertical spacing
    const y = i * verticalSpacing;

    // Add slight rotation for organic feel
    const rotation = Math.sin(i * 0.7) * 3; // -3 to 3 degrees - reduced from 8

    positions.push({ x, y, rotation });
  }

  return positions;
};

/**
 * Generates positions with alternating left-right zigzag pattern
 */
export const generateZigZagPath = (
  nodeCount: number,
  verticalSpacing: number = 150
): NodePosition[] => {
  const positions: NodePosition[] = [];
  const leftX = 30;    // Left position (percentage)
  const rightX = 70;   // Right position (percentage)
  const centerX = 50;  // Center position (percentage)

  for (let i = 0; i < nodeCount; i++) {
    let x: number;

    // Alternate between left, center, right
    const pattern = i % 3;
    if (pattern === 0) x = leftX;
    else if (pattern === 1) x = centerX;
    else x = rightX;

    const y = i * verticalSpacing;
    const rotation = (i % 2 === 0 ? -5 : 5); // Slight alternating tilt

    positions.push({ x, y, rotation });
  }

  return positions;
};

// ============================================
// SVG PATH GENERATION
// ============================================

/**
 * Generates an SVG path string connecting the nodes with smooth curves
 */
export const generateSVGPath = (
  positions: NodePosition[],
  containerWidth: number
): string => {
  if (positions.length === 0) return '';
  if (positions.length === 1) return `M ${positions[0].x * containerWidth / 100} ${positions[0].y}`;

  const points = positions.map(p => ({
    x: p.x * containerWidth / 100,
    y: p.y
  }));

  // Start path
  let path = `M ${points[0].x} ${points[0].y}`;

  // Create smooth curves between points using cubic Bezier curves
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];

    // Control points for smooth curve
    const controlHeight = (curr.y - prev.y) / 2;
    const cp1x = prev.x;
    const cp1y = prev.y + controlHeight;
    const cp2x = curr.x;
    const cp2y = curr.y - controlHeight;

    // Cubic Bezier curve
    path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
  }

  return path;
};

// ============================================
// LAYER BOUNDARIES
// ============================================

/**
 * Calculates Y positions for layer boundaries based on node indices
 */
export const calculateLayerBoundaries = (
  foundationCount: number,
  integrationCount: number,
  applicationCount: number,
  verticalSpacing: number = 150
): {
  foundation: { start: number; end: number };
  integration: { start: number; end: number };
  application: { start: number; end: number };
} => {
  const foundationEnd = (foundationCount - 1) * verticalSpacing;
  const integrationStart = foundationCount * verticalSpacing;
  const integrationEnd = (foundationCount + integrationCount - 1) * verticalSpacing;
  const applicationStart = (foundationCount + integrationCount) * verticalSpacing;
  const applicationEnd = (foundationCount + integrationCount + applicationCount - 1) * verticalSpacing;

  return {
    foundation: { start: 0, end: foundationEnd },
    integration: { start: integrationStart, end: integrationEnd },
    application: { start: applicationStart, end: applicationEnd },
  };
};

// ============================================
// VIEWPORT HELPERS
// ============================================

/**
 * Calculates the required SVG viewBox for the path
 */
export const calculateViewBox = (
  positions: NodePosition[],
  containerWidth: number,
  padding: number = 50
): { width: number; height: number } => {
  if (positions.length === 0) return { width: 0, height: 0 };

  const maxY = Math.max(...positions.map(p => p.y));

  return {
    width: containerWidth,
    height: maxY + padding * 2,
  };
};

/**
 * Finds the position index closest to a scroll position
 */
export const findClosestNode = (
  positions: NodePosition[],
  scrollY: number
): number => {
  let closest = 0;
  let minDiff = Math.abs(positions[0].y - scrollY);

  for (let i = 1; i < positions.length; i++) {
    const diff = Math.abs(positions[i].y - scrollY);
    if (diff < minDiff) {
      minDiff = diff;
      closest = i;
    }
  }

  return closest;
};
