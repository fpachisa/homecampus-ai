import { useState } from 'react';
import type { VisualizationProps } from '../../types/visualization';
import { StepControls, MathSummaryBox, RecipientDisplay, StepHeader } from './shared/VisualizationUI';
import MathText from '../MathText';

/**
 * Generic circular division visualizer
 * Works for: pizza, cake, pie, circular garden, wheel, etc.
 * Demonstrates dividing fractions using circular/pie model
 */
const CircularDivisionVisualizer: React.FC<VisualizationProps> = ({
  data,
  theme,
  className = '',
  onComplete: _onComplete
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const { problemData, contextualLabels, stages } = data;
  const {
    numerator,
    denominator,
    divisor,
    numberOfRecipients = divisor,
    // Pre-calculated values from Visualization Agent (no calculations needed!)
    resultNumerator = numerator,
    resultDenominator = denominator * divisor,
    simplifiedNumerator = numerator,
    simplifiedDenominator = denominator * divisor,
    totalSmallPieces = numerator * divisor,
    needsSimplification = false
  } = problemData;

  const visualTheme = data.theme || theme;
  const totalSteps = stages?.length || 4;

  // Special case: when numerator === divisor, no subdivision needed
  // Each person gets exactly 1 part (1/denominator)
  const isSimplifiedCase = numerator === divisor;

  // Colors for friends
  const friendColors = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444', '#06b6d4', '#ec4899', '#84cc16'];

  // Generate recipient data
  const recipients = Array.from({ length: numberOfRecipients }, (_, i) => ({
    name: `Person ${i + 1}`,
    color: friendColors[i % friendColors.length],
    fraction: isSimplifiedCase
      ? `${simplifiedNumerator}/${simplifiedDenominator}`
      : `${numerator}/${resultDenominator}`
  }));

  const handlePrevious = () => setCurrentStep(Math.max(0, currentStep - 1));
  const handleNext = () => {
    const nextStep = Math.min(totalSteps - 1, currentStep + 1);
    setCurrentStep(nextStep);
  };

  // SVG Pizza Component
  const PizzaSlice = ({
    startAngle,
    endAngle,
    color,
    isPresent = true,
    subdivisions = 1,
    subdivisionColors
  }: {
    startAngle: number;
    endAngle: number;
    color: string;
    isPresent?: boolean;
    subdivisions?: number;
    subdivisionColors?: string[];
  }) => {
    const centerX = 150;
    const centerY = 150;
    const radius = 130;

    if (!isPresent) {
      // Draw empty slice outline
      const startX = centerX + radius * Math.cos((startAngle - 90) * Math.PI / 180);
      const startY = centerY + radius * Math.sin((startAngle - 90) * Math.PI / 180);
      const endX = centerX + radius * Math.cos((endAngle - 90) * Math.PI / 180);
      const endY = centerY + radius * Math.sin((endAngle - 90) * Math.PI / 180);

      return (
        <g>
          <path
            d={`M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY} Z`}
            fill="#e5e7eb"
            stroke="#9ca3af"
            strokeWidth="2"
          />
          <text
            x={centerX + (radius / 2) * Math.cos(((startAngle + endAngle) / 2 - 90) * Math.PI / 180)}
            y={centerY + (radius / 2) * Math.sin(((startAngle + endAngle) / 2 - 90) * Math.PI / 180)}
            textAnchor="middle"
            dy="0.3em"
            fontSize="36"
            fill="#9ca3af"
          >
            ✕
          </text>
        </g>
      );
    }

    // Draw slices with optional subdivisions
    const angleRange = endAngle - startAngle;
    const subAngle = angleRange / subdivisions;

    return (
      <g>
        {Array.from({ length: subdivisions }).map((_, i) => {
          const subStart = startAngle + i * subAngle;
          const subEnd = startAngle + (i + 1) * subAngle;
          const startX = centerX + radius * Math.cos((subStart - 90) * Math.PI / 180);
          const startY = centerY + radius * Math.sin((subStart - 90) * Math.PI / 180);
          const endX = centerX + radius * Math.cos((subEnd - 90) * Math.PI / 180);
          const endY = centerY + radius * Math.sin((subEnd - 90) * Math.PI / 180);
          // Fix: Properly cycle through subdivision colors or use the base color
          const subColor = subdivisionColors && subdivisionColors.length > 0
            ? subdivisionColors[i % subdivisionColors.length]
            : color || visualTheme.primaryColor;

          return (
            <path
              key={i}
              d={`M ${centerX} ${centerY} L ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY} Z`}
              fill={subColor}
              stroke={visualTheme.borderColor}
              strokeWidth="2"
            />
          );
        })}
      </g>
    );
  };

  return (
    <div
      className={`w-full mx-auto p-4 rounded-lg ${className}`}
      style={{
        background: `linear-gradient(to bottom right, ${visualTheme.gradientFrom}, ${visualTheme.gradientTo})`
      }}
    >
      <h2
        className="text-xl font-bold text-center mb-4"
        style={{ color: visualTheme.textColor }}
      >
        {visualTheme.emoji} {contextualLabels.original || `${numerator}/${denominator}`}
      </h2>

      <StepControls
        currentStep={currentStep}
        totalSteps={totalSteps}
        onPrevious={handlePrevious}
        onNext={handleNext}
        primaryColor={visualTheme.primaryColor}
        disabledColor="#d1d5db"
      />

      <div className="mb-4">
        {/* Step 0: Whole pizza */}
        {currentStep === 0 && (
          <div className="text-center animate-fade-in">
            <StepHeader
              stepNumber={1}
              title={stages?.[0]?.title || "Start with the whole amount"}
              textColor={visualTheme.textColor}
              emoji={visualTheme.emoji}
            />
            <div className="flex justify-center mb-4">
              <svg width="300" height="300" viewBox="0 0 300 300">
                {Array.from({ length: denominator }).map((_, i) => (
                  <PizzaSlice
                    key={i}
                    startAngle={(360 / denominator) * i}
                    endAngle={(360 / denominator) * (i + 1)}
                    color={visualTheme.primaryColor}
                  />
                ))}
                <circle cx="150" cy="150" r="130" fill="none" stroke={visualTheme.borderColor} strokeWidth="4" />
              </svg>
            </div>
            <div className="text-base" style={{ color: visualTheme.textColor }}>
              <MathText>{stages?.[0]?.description || `Divided into ${denominator} equal parts`}</MathText>
            </div>
          </div>
        )}

        {/* Step 1: Show fraction */}
        {currentStep === 1 && (
          <div className="text-center animate-fade-in">
            <StepHeader
              stepNumber={2}
              title={stages?.[1]?.title || `We have ${numerator}/${denominator}`}
              textColor={visualTheme.textColor}
              emoji="✨"
            />
            <div className="flex justify-center mb-3">
              <svg width="200" height="200" viewBox="0 0 300 300">
                {Array.from({ length: denominator }).map((_, i) => (
                  <PizzaSlice
                    key={i}
                    startAngle={(360 / denominator) * i}
                    endAngle={(360 / denominator) * (i + 1)}
                    color={visualTheme.primaryColor}
                    isPresent={i < numerator}
                  />
                ))}
                <circle cx="150" cy="150" r="130" fill="none" stroke={visualTheme.borderColor} strokeWidth="4" />
              </svg>
            </div>
            <div className="text-base" style={{ color: visualTheme.textColor }}>
              <MathText>{stages?.[1]?.description || `${numerator} out of ${denominator} parts`}</MathText>
            </div>
          </div>
        )}

        {/* Step 2: Subdivide slices */}
        {currentStep === 2 && (
          <div className="text-center animate-fade-in">
            <StepHeader
              stepNumber={3}
              title={stages?.[2]?.title || `Divide into ${divisor} parts`}
              textColor={visualTheme.textColor}
              emoji="✂️"
            />
            <div className="flex justify-center mb-3">
              <svg width="200" height="200" viewBox="0 0 300 300">
                {Array.from({ length: denominator }).map((_, i) => (
                  <PizzaSlice
                    key={i}
                    startAngle={(360 / denominator) * i}
                    endAngle={(360 / denominator) * (i + 1)}
                    color={isSimplifiedCase && i < numerator ? friendColors[i % friendColors.length] : visualTheme.primaryColor}
                    isPresent={i < numerator}
                    subdivisions={i < numerator && !isSimplifiedCase ? divisor : 1}
                    subdivisionColors={i < numerator && !isSimplifiedCase ? friendColors.slice(0, divisor) : undefined}
                  />
                ))}
                <circle cx="150" cy="150" r="130" fill="none" stroke={visualTheme.borderColor} strokeWidth="4" />
              </svg>
            </div>
            <div className="text-base mb-2" style={{ color: visualTheme.textColor }}>
              <MathText>{stages?.[2]?.description || `Now we have ${totalSmallPieces} small pieces total!`}</MathText>
            </div>
          </div>
        )}

        {/* Step 3: Distribute to friends */}
        {currentStep === 3 && (
          <div className="text-center animate-fade-in">
            <StepHeader
              stepNumber={4}
              title={stages?.[3]?.title || `Give ${numerator} pieces each`}
              textColor={visualTheme.textColor}
              emoji="🎁"
            />
            <div className="flex flex-col items-center gap-4 mb-4">
              <svg width="200" height="200" viewBox="0 0 300 300">
                {Array.from({ length: denominator }).map((_, i) => (
                  <PizzaSlice
                    key={i}
                    startAngle={(360 / denominator) * i}
                    endAngle={(360 / denominator) * (i + 1)}
                    color={isSimplifiedCase && i < numerator ? friendColors[i % friendColors.length] : visualTheme.primaryColor}
                    isPresent={i < numerator}
                    subdivisions={isSimplifiedCase ? 1 : divisor}
                    subdivisionColors={isSimplifiedCase ? undefined : (i < numerator ? friendColors.slice(0, divisor) : Array(divisor).fill('#d1d5db'))}
                  />
                ))}
                <circle cx="150" cy="150" r="130" fill="none" stroke={visualTheme.borderColor} strokeWidth="4" />
              </svg>

              <RecipientDisplay recipients={recipients} />
            </div>
            <div className="text-base mb-2" style={{ color: visualTheme.textColor }}>
              <MathText>{stages?.[3]?.description || `Each gets ${numerator}/${resultDenominator}`}</MathText>
            </div>
            {needsSimplification && (
              <p className="text-lg font-bold mt-2" style={{ color: visualTheme.accentColor }}>
                {numerator}/{resultDenominator} = {simplifiedNumerator}/{simplifiedDenominator}
              </p>
            )}
          </div>
        )}
      </div>

      <MathSummaryBox
        problem={data.mathSummary?.problem || `${numerator}/${denominator} ÷ ${divisor} = ?`}
        solution={data.mathSummary?.solution || `${numerator}/${denominator} ÷ ${divisor} = ${resultNumerator}/${resultDenominator}${needsSimplification ? ` = ${simplifiedNumerator}/${simplifiedDenominator}` : ''}`}
        explanation={data.mathSummary?.explanation || contextualLabels.result || `Each portion is ${numerator}/${resultDenominator}${needsSimplification ? ` = ${simplifiedNumerator}/${simplifiedDenominator}` : ''}`}
        backgroundColor="#ffffff"
        borderColor={visualTheme.borderColor}
        textColor={visualTheme.textColor}
        accentColor={visualTheme.accentColor}
      />
    </div>
  );
};

export default CircularDivisionVisualizer;
