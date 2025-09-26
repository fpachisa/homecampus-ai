import React from 'react';

interface FractionVisualizerProps {
  numerator: number;
  denominator: number;
  type?: 'bar' | 'circle';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  showLabel?: boolean;
}

/**
 * Visual representation of fractions using SVG
 * Supports both bar and circle (pie) visualizations
 */
const FractionVisualizer: React.FC<FractionVisualizerProps> = ({
  numerator,
  denominator,
  type = 'bar',
  size = 'medium',
  className = '',
  showLabel = true
}) => {
  // Validate input
  if (denominator <= 0 || numerator < 0) {
    return null;
  }

  // Size configurations
  const sizeConfig = {
    small: { width: 120, height: 40, strokeWidth: 1, fontSize: 12 },
    medium: { width: 180, height: 60, strokeWidth: 2, fontSize: 14 },
    large: { width: 240, height: 80, strokeWidth: 2, fontSize: 16 }
  };

  const config = sizeConfig[size];

  // Calculate the fraction value (ensure it doesn't exceed 1)
  const fractionValue = Math.min(numerator / denominator, 1);

  const renderBarVisualization = () => {
    const segmentWidth = config.width / denominator;

    return (
      <svg width={config.width} height={config.height} className="mx-auto">
        {/* Background rectangle */}
        <rect
          x={0}
          y={10}
          width={config.width}
          height={config.height - 20}
          fill="none"
          stroke="#d1d5db"
          strokeWidth={config.strokeWidth}
          rx={4}
        />

        {/* Filled segments */}
        {Array.from({ length: Math.min(numerator, denominator) }).map((_, index) => (
          <rect
            key={index}
            x={index * segmentWidth}
            y={10}
            width={segmentWidth}
            height={config.height - 20}
            fill="url(#blueGradient)"
            stroke="#3b82f6"
            strokeWidth={1}
            rx={2}
          />
        ))}

        {/* Segment dividers */}
        {Array.from({ length: denominator - 1 }).map((_, index) => (
          <line
            key={index}
            x1={(index + 1) * segmentWidth}
            y1={10}
            x2={(index + 1) * segmentWidth}
            y2={config.height - 10}
            stroke="#9ca3af"
            strokeWidth={1}
          />
        ))}

        {/* Gradient definition */}
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.9} />
          </linearGradient>
        </defs>
      </svg>
    );
  };

  const renderCircleVisualization = () => {
    const radius = Math.min(config.width, config.height) / 2 - 10;
    const centerX = config.width / 2;
    const centerY = config.height / 2;

    // Calculate angles for each segment
    const anglePerSegment = (2 * Math.PI) / denominator;
    const filledSegments = Math.min(numerator, denominator);

    return (
      <svg width={config.width} height={config.height} className="mx-auto">
        {/* Background circle */}
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="#f9fafb"
          stroke="#d1d5db"
          strokeWidth={config.strokeWidth}
        />

        {/* Filled segments */}
        {Array.from({ length: filledSegments }).map((_, index) => {
          const startAngle = index * anglePerSegment - Math.PI / 2;
          const endAngle = (index + 1) * anglePerSegment - Math.PI / 2;

          const x1 = centerX + radius * Math.cos(startAngle);
          const y1 = centerY + radius * Math.sin(startAngle);
          const x2 = centerX + radius * Math.cos(endAngle);
          const y2 = centerY + radius * Math.sin(endAngle);

          const largeArcFlag = anglePerSegment > Math.PI ? 1 : 0;

          return (
            <path
              key={index}
              d={`M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
              fill="url(#blueGradient)"
              stroke="#3b82f6"
              strokeWidth={1}
            />
          );
        })}

        {/* Segment dividers */}
        {Array.from({ length: denominator }).map((_, index) => {
          const angle = index * anglePerSegment - Math.PI / 2;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          return (
            <line
              key={index}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke="#9ca3af"
              strokeWidth={1}
            />
          );
        })}

        {/* Gradient definition */}
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity={0.8} />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.9} />
          </linearGradient>
        </defs>
      </svg>
    );
  };

  return (
    <div className={`fraction-visualizer ${className}`}>
      {showLabel && (
        <div className="text-center text-sm font-medium text-gray-700 mb-2">
          {numerator}/{denominator}
          {fractionValue < 1 && ` = ${(fractionValue * 100).toFixed(0)}%`}
        </div>
      )}

      <div className="flex justify-center">
        {type === 'bar' ? renderBarVisualization() : renderCircleVisualization()}
      </div>

      {/* Helpful description */}
      {showLabel && (
        <div className="text-xs text-gray-500 text-center mt-2">
          {numerator} out of {denominator} part{denominator !== 1 ? 's' : ''}
        </div>
      )}
    </div>
  );
};

export default FractionVisualizer;