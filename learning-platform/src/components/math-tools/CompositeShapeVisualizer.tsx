import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

type PresetType =
  | 'l-shape'
  | 'stadium'
  | 'arch'
  | 't-shape'
  | 'u-shape'
  | 'parallelogram-semicircle'
  | 'rectangle-circle'
  | 'stepped';

interface CompositeShapeVisualizerProps {
  preset: PresetType; // which preset template to use
  dimensions: number[]; // array of dimensions specific to each preset
  colorRegions?: boolean; // color-code different regions (default: true)
  showCalculation?: boolean; // show area calculations per region (default: false)
  operation?: 'sum' | 'difference'; // whether adding or subtracting areas (default: 'sum')
  caption?: string; // optional caption
}

const CompositeShapeVisualizer: React.FC<CompositeShapeVisualizerProps> = ({
  preset,
  dimensions,
  colorRegions = true,
  showCalculation = false,
  operation = 'sum',
  caption
}) => {
  const { theme } = useTheme();
  const [showDetails, setShowDetails] = useState(false);

  // SVG dimensions
  const svgWidth = 600;
  const svgHeight = 450;
  const centerX = svgWidth / 2;
  const centerY = svgHeight / 2;

  // Helper function to ensure LaTeX expressions are properly wrapped
  const ensureLatexWrapped = (text: string | undefined): string => {
    if (!text) return '';
    if (text.startsWith('$') && text.endsWith('$')) return text;
    if (text.includes('\\')) return `$${text}$`;
    return text;
  };

  // Colors for different regions
  const colors = {
    primary: theme.colors.brand,
    region1: 'rgba(52, 152, 219, 0.4)',
    region2: 'rgba(46, 204, 113, 0.4)',
    region3: 'rgba(241, 196, 15, 0.4)',
    region4: 'rgba(231, 76, 60, 0.4)',
    strokeColor: theme.colors.textPrimary,
    textColor: theme.colors.textPrimary,
    muted: theme.colors.textMuted
  };

  // Render preset based on type
  const renderPreset = () => {
    switch (preset) {
      case 'l-shape':
        return renderLShape();
      case 'stadium':
        return renderStadium();
      case 'arch':
        return renderArch();
      case 't-shape':
        return renderTShape();
      case 'u-shape':
        return renderUShape();
      case 'parallelogram-semicircle':
        return renderParallelogramSemicircle();
      case 'rectangle-circle':
        return renderRectangleCircle();
      case 'stepped':
        return renderStepped();
      default:
        return null;
    }
  };

  // L-Shape: Two rectangles forming L
  // dimensions: [width1, height1, width2, height2]
  const renderLShape = () => {
    // Scale dimensions up significantly (multiply by 3)
    const [w1 = 100, h1 = 150, w2 = 150, h2 = 80] = dimensions.map(d => d * 3);

    const rect1X = centerX - w1 / 2 - w2 / 4;
    const rect1Y = centerY - h1 / 2;
    const rect2X = rect1X + w1;
    const rect2Y = centerY + h1 / 2 - h2;

    const area1 = w1 * h1;
    const area2 = w2 * h2;
    const totalArea = area1 + area2;

    return (
      <>
        {/* Rectangle 1 (vertical part) */}
        <rect
          x={rect1X}
          y={rect1Y}
          width={w1}
          height={h1}
          fill={colorRegions ? colors.region1 : 'none'}
          stroke={colors.strokeColor}
          strokeWidth="2"
        />
        {showCalculation && (
          <foreignObject x={rect1X + w1 / 2 - 40} y={rect1Y + h1 / 2 - 15} width="80" height="30">
            <div style={{ textAlign: 'center', fontSize: '12px', fontWeight: 'bold' }}>
              <MathText>{`${w1} × ${h1} = ${area1}`}</MathText>
            </div>
          </foreignObject>
        )}

        {/* Rectangle 2 (horizontal part) */}
        <rect
          x={rect2X}
          y={rect2Y}
          width={w2}
          height={h2}
          fill={colorRegions ? colors.region2 : 'none'}
          stroke={colors.strokeColor}
          strokeWidth="2"
        />
        {showCalculation && (
          <foreignObject x={rect2X + w2 / 2 - 40} y={rect2Y + h2 / 2 - 15} width="80" height="30">
            <div style={{ textAlign: 'center', fontSize: '12px', fontWeight: 'bold' }}>
              <MathText>{`${w2} × ${h2} = ${area2}`}</MathText>
            </div>
          </foreignObject>
        )}

        {showDetails && (
          <foreignObject x="50" y={svgHeight - 50} width={svgWidth - 100} height="40">
            <div style={{ textAlign: 'center', fontSize: '14px', color: colors.primary }}>
              <MathText>{`Total Area = ${area1} + ${area2} = ${totalArea} square units`}</MathText>
            </div>
          </foreignObject>
        )}
      </>
    );
  };

  // Stadium: Rectangle + 2 semicircles
  // dimensions: [length, radius]
  const renderStadium = () => {
    // Scale dimensions up (multiply by 2)
    const [length = 200, radius = 60] = dimensions.map(d => d * 2);
    const x = centerX - length / 2 - radius;
    const y = centerY;

    const rectArea = length * (2 * radius);
    const circleArea = Math.PI * radius * radius;
    const totalArea = rectArea + circleArea;

    return (
      <>
        {/* Left semicircle */}
        <path
          d={`M ${x} ${y - radius} A ${radius} ${radius} 0 0 0 ${x} ${y + radius} Z`}
          fill={colorRegions ? colors.region1 : 'none'}
          stroke={colors.strokeColor}
          strokeWidth="2"
        />

        {/* Rectangle */}
        <rect
          x={x}
          y={y - radius}
          width={length}
          height={2 * radius}
          fill={colorRegions ? colors.region2 : 'none'}
          stroke={colors.strokeColor}
          strokeWidth="2"
        />

        {/* Right semicircle */}
        <path
          d={`M ${x + length} ${y - radius} A ${radius} ${radius} 0 0 1 ${x + length} ${
            y + radius
          } Z`}
          fill={colorRegions ? colors.region1 : 'none'}
          stroke={colors.strokeColor}
          strokeWidth="2"
        />

        {showDetails && (
          <foreignObject x="50" y={svgHeight - 50} width={svgWidth - 100} height="40">
            <div style={{ textAlign: 'center', fontSize: '14px', color: colors.primary }}>
              <MathText>{`Total Area = ${length} × ${2 * radius} + \\pi × ${radius}² ≈ ${totalArea.toFixed(
                1
              )} sq units`}</MathText>
            </div>
          </foreignObject>
        )}
      </>
    );
  };

  // Arch: Rectangle + semicircle on top
  // dimensions: [width, height, radius]
  const renderArch = () => {
    // Scale dimensions up (multiply by 2)
    const [width = 150, height = 120, radius = 75] = dimensions.map(d => d * 2);
    const x = centerX - width / 2;
    const y = centerY + radius / 2;

    const rectArea = width * height;
    const semicircleArea = (Math.PI * radius * radius) / 2;
    const totalArea = rectArea + semicircleArea;

    return (
      <>
        {/* Rectangle (door) */}
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={colorRegions ? colors.region1 : 'none'}
          stroke={colors.strokeColor}
          strokeWidth="2"
        />

        {/* Semicircle (arch top) */}
        <path
          d={`M ${x} ${y} A ${radius} ${radius} 0 0 1 ${x + width} ${y} Z`}
          fill={colorRegions ? colors.region2 : 'none'}
          stroke={colors.strokeColor}
          strokeWidth="2"
        />

        {showDetails && (
          <foreignObject x="50" y={svgHeight - 50} width={svgWidth - 100} height="40">
            <div style={{ textAlign: 'center', fontSize: '14px', color: colors.primary }}>
              <MathText>{`Total Area = ${width} × ${height} + \\frac{1}{2}\\pi × ${radius}² ≈ ${totalArea.toFixed(
                1
              )} sq units`}</MathText>
            </div>
          </foreignObject>
        )}
      </>
    );
  };

  // T-Shape: Two rectangles forming T
  // dimensions: [topWidth, topHeight, stemWidth, stemHeight]
  const renderTShape = () => {
    // Scale dimensions up significantly (multiply by 5)
    const [topW = 200, topH = 60, stemW = 80, stemH = 150] = dimensions.map(d => d * 5);

    const topX = centerX - topW / 2;
    const topY = centerY - topH / 2 - stemH / 2 + topH;
    const stemX = centerX - stemW / 2;
    const stemY = topY;

    const topArea = topW * topH;
    const stemArea = stemW * stemH;
    const totalArea = topArea + stemArea;

    return (
      <>
        {/* Top bar */}
        <rect
          x={topX}
          y={topY}
          width={topW}
          height={topH}
          fill={colorRegions ? colors.region1 : 'none'}
          stroke={colors.strokeColor}
          strokeWidth="2"
        />
        {/* Top bar labels */}
        {showCalculation && (
          <>
            {/* Width label */}
            <foreignObject x={topX + topW / 2 - 20} y={topY - 20} width="40" height="20">
              <div style={{ textAlign: 'center', fontSize: '11px', fontWeight: 'bold', color: colors.textColor }}>
                {topW}
              </div>
            </foreignObject>
            {/* Height label */}
            <foreignObject x={topX - 25} y={topY + topH / 2 - 10} width="20" height="20">
              <div style={{ textAlign: 'center', fontSize: '11px', fontWeight: 'bold', color: colors.textColor }}>
                {topH}
              </div>
            </foreignObject>
            {/* Area calculation */}
            <foreignObject x={topX + topW / 2 - 40} y={topY + topH / 2 - 10} width="80" height="20">
              <div style={{ textAlign: 'center', fontSize: '10px', fontWeight: 'bold', color: colors.primary }}>
                <MathText>{`${topW} × ${topH}`}</MathText>
              </div>
            </foreignObject>
          </>
        )}

        {/* Vertical stem */}
        <rect
          x={stemX}
          y={stemY}
          width={stemW}
          height={stemH}
          fill={colorRegions ? colors.region2 : 'none'}
          stroke={colors.strokeColor}
          strokeWidth="2"
        />
        {/* Stem labels */}
        {showCalculation && (
          <>
            {/* Width label */}
            <foreignObject x={stemX + stemW / 2 - 15} y={stemY - 20} width="30" height="20">
              <div style={{ textAlign: 'center', fontSize: '11px', fontWeight: 'bold', color: colors.textColor }}>
                {stemW}
              </div>
            </foreignObject>
            {/* Height label */}
            <foreignObject x={stemX + stemW + 5} y={stemY + stemH / 2 - 10} width="20" height="20">
              <div style={{ textAlign: 'center', fontSize: '11px', fontWeight: 'bold', color: colors.textColor }}>
                {stemH}
              </div>
            </foreignObject>
            {/* Area calculation */}
            <foreignObject x={stemX + stemW / 2 - 40} y={stemY + stemH / 2 - 10} width="80" height="20">
              <div style={{ textAlign: 'center', fontSize: '10px', fontWeight: 'bold', color: colors.primary }}>
                <MathText>{`${stemW} × ${stemH}`}</MathText>
              </div>
            </foreignObject>
          </>
        )}

        {showDetails && (
          <foreignObject x="50" y={svgHeight - 50} width={svgWidth - 100} height="40">
            <div style={{ textAlign: 'center', fontSize: '14px', color: colors.primary }}>
              <MathText>{`Total Area = ${topArea} + ${stemArea} = ${totalArea} square units`}</MathText>
            </div>
          </foreignObject>
        )}
      </>
    );
  };

  // U-Shape: Three rectangles forming U
  // dimensions: [width, height, thickness]
  const renderUShape = () => {
    // Scale dimensions up (multiply by 2.5)
    const [width = 180, height = 150, thickness = 40] = dimensions.map(d => d * 2.5);
    const x = centerX - width / 2;
    const y = centerY - height / 2;

    const bottomArea = width * thickness;
    const sideArea = thickness * (height - thickness);
    const totalArea = bottomArea + 2 * sideArea;

    return (
      <>
        {/* Left vertical */}
        <rect
          x={x}
          y={y}
          width={thickness}
          height={height}
          fill={colorRegions ? colors.region1 : 'none'}
          stroke={colors.strokeColor}
          strokeWidth="2"
        />

        {/* Bottom horizontal */}
        <rect
          x={x}
          y={y + height - thickness}
          width={width}
          height={thickness}
          fill={colorRegions ? colors.region2 : 'none'}
          stroke={colors.strokeColor}
          strokeWidth="2"
        />

        {/* Right vertical */}
        <rect
          x={x + width - thickness}
          y={y}
          width={thickness}
          height={height}
          fill={colorRegions ? colors.region1 : 'none'}
          stroke={colors.strokeColor}
          strokeWidth="2"
        />

        {showDetails && (
          <foreignObject x="50" y={svgHeight - 50} width={svgWidth - 100} height="40">
            <div style={{ textAlign: 'center', fontSize: '14px', color: colors.primary }}>
              <MathText>{`Total Area = ${bottomArea} + 2(${sideArea}) = ${totalArea} square units`}</MathText>
            </div>
          </foreignObject>
        )}
      </>
    );
  };

  // Parallelogram + Semicircle
  // dimensions: [base, height, radius, skewAngle]
  const renderParallelogramSemicircle = () => {
    // Scale dimensions up (multiply by 2)
    const scaledDims = dimensions.map((d, i) => i === 3 ? d : d * 2); // Don't scale angle
    const [base = 180, height = 100, radius = 90, skewAngle = 30] = scaledDims;
    const skew = Math.tan((skewAngle * Math.PI) / 180) * height;

    const paraX = centerX - base / 2 - skew / 2;
    const paraY = centerY + radius / 4;

    const paraArea = base * height;
    const semicircleArea = (Math.PI * radius * radius) / 2;
    const totalArea = paraArea + semicircleArea;

    return (
      <>
        {/* Parallelogram */}
        <polygon
          points={`${paraX},${paraY + height} ${paraX + base},${paraY + height} ${
            paraX + base + skew
          },${paraY} ${paraX + skew},${paraY}`}
          fill={colorRegions ? colors.region1 : 'none'}
          stroke={colors.strokeColor}
          strokeWidth="2"
        />

        {/* Semicircle on top */}
        <path
          d={`M ${paraX + skew} ${paraY} A ${radius} ${radius} 0 0 1 ${paraX + base + skew} ${paraY} Z`}
          fill={colorRegions ? colors.region2 : 'none'}
          stroke={colors.strokeColor}
          strokeWidth="2"
        />

        {showDetails && (
          <foreignObject x="50" y={svgHeight - 50} width={svgWidth - 100} height="40">
            <div style={{ textAlign: 'center', fontSize: '14px', color: colors.primary }}>
              <MathText>{`Total Area = ${base} × ${height} + \\frac{1}{2}\\pi × ${radius}² ≈ ${totalArea.toFixed(
                1
              )} sq units`}</MathText>
            </div>
          </foreignObject>
        )}
      </>
    );
  };

  // Rectangle - Circle (cutout)
  // dimensions: [rectWidth, rectHeight, circleRadius]
  const renderRectangleCircle = () => {
    // Scale dimensions up (multiply by 1.5)
    const [rectW = 220, rectH = 180, circleR = 50] = dimensions.map(d => d * 1.5);
    const rectX = centerX - rectW / 2;
    const rectY = centerY - rectH / 2;

    const rectArea = rectW * rectH;
    const circleArea = Math.PI * circleR * circleR;
    const totalArea = rectArea - circleArea;

    return (
      <>
        {/* Rectangle */}
        <rect
          x={rectX}
          y={rectY}
          width={rectW}
          height={rectH}
          fill={colorRegions ? colors.region1 : 'none'}
          stroke={colors.strokeColor}
          strokeWidth="2"
        />

        {/* Circle (cutout - shown with different styling) */}
        <circle
          cx={centerX}
          cy={centerY}
          r={circleR}
          fill={operation === 'difference' ? theme.colors.background : colors.region4}
          stroke={colors.strokeColor}
          strokeWidth="2"
          strokeDasharray={operation === 'difference' ? '5,5' : '0'}
        />

        {showDetails && (
          <foreignObject x="50" y={svgHeight - 50} width={svgWidth - 100} height="40">
            <div style={{ textAlign: 'center', fontSize: '14px', color: colors.primary }}>
              <MathText>{`Area = ${rectW} × ${rectH} - \\pi × ${circleR}² ≈ ${totalArea.toFixed(
                1
              )} sq units`}</MathText>
            </div>
          </foreignObject>
        )}
      </>
    );
  };

  // Stepped: Multiple rectangles in staircase
  // dimensions: [stepWidth, stepHeight, numSteps]
  const renderStepped = () => {
    // Scale dimensions up (multiply by 3, but not numSteps)
    const scaledDims = dimensions.map((d, i) => i === 2 ? d : d * 3); // Don't scale numSteps
    const [stepW = 60, stepH = 50, numSteps = 3] = scaledDims;
    const startX = centerX - (numSteps * stepW) / 2;
    const startY = centerY + (numSteps * stepH) / 2;

    const stepArea = stepW * stepH;
    const totalArea = stepArea * numSteps;

    return (
      <>
        {Array.from({ length: numSteps }).map((_, i) => (
          <rect
            key={i}
            x={startX + i * stepW}
            y={startY - (i + 1) * stepH}
            width={stepW}
            height={(i + 1) * stepH}
            fill={colorRegions ? [colors.region1, colors.region2, colors.region3][i] : 'none'}
            stroke={colors.strokeColor}
            strokeWidth="2"
          />
        ))}

        {showDetails && (
          <foreignObject x="50" y={svgHeight - 50} width={svgWidth - 100} height="40">
            <div style={{ textAlign: 'center', fontSize: '14px', color: colors.primary }}>
              <MathText>{`Total Area ≈ ${totalArea} square units`}</MathText>
            </div>
          </foreignObject>
        )}
      </>
    );
  };

  return (
    <div
      style={{
        padding: '20px',
        borderRadius: theme.radius.lg,
        background: theme.colors.tutorMessage,
        border: `1px solid ${theme.colors.border}`,
        marginTop: '16px'
      }}
    >
      <svg
        width="100%"
        height={svgHeight}
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        style={{ display: 'block', margin: '0 auto' }}
      >
        {renderPreset()}
      </svg>

      {/* Show Details Toggle */}
      {showCalculation && (
        <div style={{ textAlign: 'center', marginTop: '12px' }}>
          <button
            onClick={() => setShowDetails(!showDetails)}
            style={{
              padding: '6px 12px',
              backgroundColor: theme.colors.brand,
              color: '#ffffff',
              border: 'none',
              borderRadius: theme.radius.sm,
              fontSize: '12px',
              cursor: 'pointer'
            }}
          >
            {showDetails ? 'Hide' : 'Show'} Total Area
          </button>
        </div>
      )}

      {/* Caption */}
      {caption && (
        <div
          style={{
            marginTop: '12px',
            fontSize: '14px',
            color: theme.colors.textMuted,
            textAlign: 'center',
            fontStyle: 'italic'
          }}
        >
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default CompositeShapeVisualizer;
