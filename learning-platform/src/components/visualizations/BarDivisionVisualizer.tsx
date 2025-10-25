import { useState } from 'react';
import type { VisualizationProps } from '../../types/visualization';
import { StepControls, MathSummaryBox, RecipientDisplay, StepHeader } from './shared/VisualizationUI';
import MathText from '../MathText';

/**
 * Generic bar/linear division visualizer
 * Works for: ribbon, chocolate, rope, fabric, wood, meter, etc.
 * Demonstrates dividing fractions by whole numbers using bar model
 */
const BarDivisionVisualizer: React.FC<VisualizationProps> = ({
  data,
  theme: _theme,
  className = '',
  onComplete: _onComplete
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  // Debug: log the incoming data
  console.log('🎨 BarDivisionVisualizer received data:', data);

  const { problemData, contextualLabels, stages: dataStages } = data;
  const stages = data.stages || dataStages;

  // Guard against missing problemData
  if (!problemData) {
    console.error('❌ BarDivisionVisualizer: problemData is missing!', data);
    return (
      <div className="p-4 text-center text-red-600">
        <p>Visualization data is incomplete. Missing problem data.</p>
      </div>
    );
  }

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

  // Use theme from data, or theme prop, or fallback to abstract theme
  const visualTheme = data.theme || {
    primaryColor: '#6366f1',
    secondaryColor: '#3730a3',
    accentColor: '#818cf8',
    gradientFrom: '#eef2ff',
    gradientTo: '#e0e7ff',
    borderColor: '#312e81',
    backgroundColor: '#eef2ff',
    textColor: '#312e81',
    emoji: '🔢',
    iconLabel: 'part'
  };
  const totalSteps = stages?.length || 4;

  // Special case: when numerator === divisor, no subdivision needed
  // Each person gets exactly 1 part (1/denominator)
  const isSimplifiedCase = numerator === divisor;

  // Colors for recipients (using visually distinct colors)
  const recipientColors = [
    '#3b82f6', // blue
    '#10b981', // green
    '#8b5cf6', // purple
    '#f59e0b', // amber
    '#ef4444', // red
    '#06b6d4', // cyan
    '#ec4899', // pink
    '#84cc16'  // lime
  ];

  const handlePrevious = () => {
    setCurrentStep(Math.max(0, currentStep - 1));
  };

  const handleNext = () => {
    const nextStep = Math.min(totalSteps - 1, currentStep + 1);
    setCurrentStep(nextStep);
  };

  // Generate recipient data - simplified to show only fraction and result label
  const recipients = Array.from({ length: numberOfRecipients }, (_, i) => ({
    name: '', // No name/label
    color: recipientColors[i % recipientColors.length],
    fraction: isSimplifiedCase
      ? `${simplifiedNumerator}/${simplifiedDenominator}`
      : `${numerator}/${resultDenominator}`,
    emoji: undefined // No emoji
  }));

  return (
    <div
      className={`w-full mx-auto p-4 rounded-lg ${className}`}
      style={{
        background: `linear-gradient(to bottom right, ${visualTheme.gradientFrom}, ${visualTheme.gradientTo})`
      }}
    >
      {/* Title - use from data or fallback */}
      <h2
        className="text-xl font-bold text-center mb-4"
        style={{ color: visualTheme.textColor }}
      >
        {visualTheme.emoji} {contextualLabels.original || `${numerator}/${denominator}`}
      </h2>

      {/* Step Controls */}
      <StepControls
        currentStep={currentStep}
        totalSteps={totalSteps}
        onPrevious={handlePrevious}
        onNext={handleNext}
        primaryColor={visualTheme.primaryColor}
        disabledColor="#d1d5db"
      />

      <div className="mb-4">
        {/* Step 0: Start with whole bar */}
        {currentStep === 0 && (
          <div className="text-center animate-fade-in">
            <StepHeader
              stepNumber={1}
              title={stages?.[0]?.title || "Start with the whole amount"}
              textColor={visualTheme.textColor}
              emoji={visualTheme.emoji}
            />
            <div className="flex justify-center mb-3">
              <div
                className="grid gap-1 w-60 h-16 rounded-lg overflow-hidden"
                style={{
                  gridTemplateColumns: `repeat(${denominator}, 1fr)`,
                  border: `3px solid ${visualTheme.borderColor}`,
                  backgroundColor: '#ffffff'
                }}
              >
                {Array.from({ length: denominator }).map((_, i) => (
                  <div
                    key={i}
                    className="transition-all duration-300"
                    style={{
                      backgroundColor: visualTheme.primaryColor,
                      borderRight: i < denominator - 1 ? `1px solid ${visualTheme.borderColor}` : 'none'
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="text-base" style={{ color: visualTheme.textColor }}>
              <MathText>{stages?.[0]?.description || `Divided into ${denominator} equal pieces`}</MathText>
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
              <div
                className="grid gap-1 w-60 h-16 rounded-lg overflow-hidden"
                style={{
                  gridTemplateColumns: `repeat(${denominator}, 1fr)`,
                  border: `3px solid ${visualTheme.borderColor}`,
                  backgroundColor: '#ffffff'
                }}
              >
                {Array.from({ length: denominator }).map((_, i) => (
                  <div
                    key={i}
                    className="relative transition-all duration-300"
                    style={{
                      backgroundColor: i < numerator ? visualTheme.primaryColor : '#e5e7eb',
                      borderRight: i < denominator - 1 ? `1px solid ${visualTheme.borderColor}` : 'none'
                    }}
                  >
                    {i >= numerator && (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-2xl">
                        ✕
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-base" style={{ color: visualTheme.textColor }}>
              <MathText>{stages?.[1]?.description || `${numerator} out of ${denominator} pieces`}</MathText>
            </div>
          </div>
        )}

        {/* Step 2: Divide each piece */}
        {currentStep === 2 && (
          <div className="text-center animate-fade-in">
            <StepHeader
              stepNumber={3}
              title={stages?.[2]?.title || `Divide into ${divisor} parts`}
              textColor={visualTheme.textColor}
              emoji="✂️"
            />
            <div className="flex justify-center mb-3">
              <div
                className="grid gap-1 w-60 h-16 rounded-lg overflow-hidden"
                style={{
                  gridTemplateColumns: `repeat(${denominator}, 1fr)`,
                  border: `3px solid ${visualTheme.borderColor}`,
                  backgroundColor: '#ffffff'
                }}
              >
                {Array.from({ length: denominator }).map((_, i) => (
                  <div
                    key={i}
                    className="relative transition-all duration-300"
                    style={{
                      backgroundColor: i < numerator
                        ? (isSimplifiedCase ? recipientColors[i % recipientColors.length] : visualTheme.primaryColor)
                        : '#e5e7eb',
                      borderRight: i < denominator - 1 ? `1px solid ${visualTheme.borderColor}` : 'none'
                    }}
                  >
                    {i < numerator && !isSimplifiedCase && (
                      <div
                        className="absolute inset-0 grid gap-[1px]"
                        style={{ gridTemplateRows: `repeat(${divisor}, 1fr)` }}
                      >
                        {Array.from({ length: divisor }).map((_, j) => (
                          <div
                            key={j}
                            className="transition-all duration-300"
                            style={{
                              backgroundColor: recipientColors[j % recipientColors.length],
                              borderBottom: j < divisor - 1 ? `1px solid ${visualTheme.borderColor}` : 'none'
                            }}
                          />
                        ))}
                      </div>
                    )}
                    {i >= numerator && (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-2xl">
                        ✕
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-base mb-2" style={{ color: visualTheme.textColor }}>
              <MathText>{stages?.[2]?.description || `Now we have ${totalSmallPieces} small pieces total!`}</MathText>
            </div>
          </div>
        )}

        {/* Step 3: Give to each recipient */}
        {currentStep === 3 && (
          <div className="text-center animate-fade-in">
            <StepHeader
              stepNumber={4}
              title={stages?.[3]?.title || `Give ${numerator} pieces each`}
              textColor={visualTheme.textColor}
              emoji="🎁"
            />
            <div className="flex flex-col items-center gap-4 mb-4">
              <div
                className="grid gap-1 w-60 h-16 rounded-lg overflow-hidden"
                style={{
                  gridTemplateColumns: `repeat(${denominator}, 1fr)`,
                  border: `3px solid ${visualTheme.borderColor}`,
                  backgroundColor: '#ffffff'
                }}
              >
                {Array.from({ length: denominator }).map((_, i) => (
                  <div
                    key={i}
                    className="relative transition-all duration-300"
                    style={{
                      backgroundColor: i < numerator
                        ? (isSimplifiedCase ? recipientColors[i % recipientColors.length] : visualTheme.primaryColor)
                        : '#e5e7eb',
                      borderRight: i < denominator - 1 ? `1px solid ${visualTheme.borderColor}` : 'none'
                    }}
                  >
                    {i < numerator && !isSimplifiedCase && (
                      <div
                        className="absolute inset-0 grid gap-[1px]"
                        style={{ gridTemplateRows: `repeat(${divisor}, 1fr)` }}
                      >
                        {Array.from({ length: divisor }).map((_, j) => (
                          <div
                            key={j}
                            className="transition-all duration-300"
                            style={{
                              backgroundColor: recipientColors[j % recipientColors.length],
                              borderBottom: j < divisor - 1 ? `1px solid ${visualTheme.borderColor}` : 'none'
                            }}
                          />
                        ))}
                      </div>
                    )}
                    {i >= numerator && !isSimplifiedCase && (
                      <div className="absolute inset-0">
                        {/* Show subdivision grid for unused sections too */}
                        <div
                          className="absolute inset-0 grid gap-[1px]"
                          style={{ gridTemplateRows: `repeat(${divisor}, 1fr)` }}
                        >
                          {Array.from({ length: divisor }).map((_, j) => (
                            <div
                              key={j}
                              className="transition-all duration-300 bg-gray-200"
                              style={{
                                borderBottom: j < divisor - 1 ? `1px solid ${visualTheme.borderColor}` : 'none'
                              }}
                            />
                          ))}
                        </div>
                        {/* X mark on top of the subdivided gray sections */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-2xl">
                          ✕
                        </div>
                      </div>
                    )}
                    {i >= numerator && isSimplifiedCase && (
                      <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-2xl">
                        ✕
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <RecipientDisplay recipients={recipients} />
            </div>
            <div className="text-base mb-2" style={{ color: visualTheme.textColor }}>
              <MathText>{stages?.[3]?.description || `Each gets ${numerator}/${resultDenominator}`}</MathText>
            </div>
            {needsSimplification && (
              <p
                className="text-lg font-bold mt-2"
                style={{ color: visualTheme.accentColor }}
              >
                {numerator}/{resultDenominator} = {simplifiedNumerator}/{simplifiedDenominator}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Mathematical explanation */}
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

export default BarDivisionVisualizer;
