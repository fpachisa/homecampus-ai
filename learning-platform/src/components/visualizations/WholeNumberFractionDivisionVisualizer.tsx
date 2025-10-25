import { useState } from 'react';
import type { VisualizationProps } from '../../types/visualization';
import { StepControls, MathSummaryBox, StepHeader } from './shared/VisualizationUI';
import MathText from '../MathText';

/**
 * Whole Number ÷ Fraction Visualizer
 * Shows "how many groups of (fraction) fit into (whole number)"
 * Example: 3 ÷ 1/2 = "How many 1/2-cup servings from 3 cups?"
 */
const WholeNumberFractionDivisionVisualizer: React.FC<VisualizationProps> = ({
  data,
  theme: _theme,
  className = '',
  onComplete: _onComplete
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  console.log('🎨 WholeNumberFractionDivisionVisualizer received data:', data);

  const { problemData, contextualLabels, stages: dataStages } = data;
  const stages = data.stages || dataStages;

  if (!problemData) {
    console.error('❌ WholeNumberFractionDivisionVisualizer: problemData is missing!', data);
    return (
      <div className="p-4 text-center text-red-600">
        <p>Visualization data is incomplete. Missing problem data.</p>
      </div>
    );
  }

  const {
    initial_number = 1, // e.g., 3 (cups)
    numerator,      // e.g., 1 (from 1/2)
    denominator     // e.g., 2 (from 1/2)
  } = problemData;

  // Calculate the answer: initial_number ÷ (numerator/denominator) = initial_number × (denominator/numerator)
  const totalParts = initial_number * denominator; // Total fractional parts after dividing all wholes
  const partsPerGroup = numerator; // How many parts make one group
  const completeGroups = Math.floor(totalParts / partsPerGroup);
  const remainderParts = totalParts % partsPerGroup;

  // Use theme from data (AI-generated based on context) or fallback to neutral theme
  const visualTheme = data.theme || {
    primaryColor: '#6366f1',    // indigo-500
    secondaryColor: '#3730a3',  // indigo-800
    accentColor: '#818cf8',     // indigo-400
    gradientFrom: '#eef2ff',    // indigo-50
    gradientTo: '#e0e7ff',      // indigo-100
    borderColor: '#312e81',     // indigo-900
    backgroundColor: '#eef2ff', // indigo-50
    textColor: '#312e81',       // indigo-900
    emoji: '🔢',
    iconLabel: 'unit'
  };

  const totalSteps = stages?.length || 4;

  // Colors for grouping
  const groupColors = [
    '#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444',
    '#06b6d4', '#ec4899', '#84cc16', '#f97316', '#14b8a6'
  ];

  const handlePrevious = () => setCurrentStep(Math.max(0, currentStep - 1));
  const handleNext = () => setCurrentStep(Math.min(totalSteps - 1, currentStep + 1));

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
        {visualTheme.emoji} {contextualLabels?.original || `${initial_number} ÷ ${numerator}/${denominator}`}
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
        {/* Step 0: Show whole items as bars */}
        {currentStep === 0 && (
          <div className="text-center animate-fade-in">
            <StepHeader
              stepNumber={1}
              title={stages?.[0]?.title || `Start with ${initial_number} whole items`}
              textColor={visualTheme.textColor}
              emoji={visualTheme.emoji}
            />
            <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto mb-4">
              {Array.from({ length: initial_number }).map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="w-20 h-16 rounded-lg shadow-lg relative transition-all"
                    style={{
                      backgroundColor: visualTheme.primaryColor,
                      border: `4px solid ${visualTheme.borderColor}`
                    }}
                  >
                    {/* Inner border for depth */}
                    <div
                      className="absolute inset-1 border rounded"
                      style={{ borderColor: visualTheme.accentColor }}
                    ></div>
                  </div>
                  <p className="mt-2 text-sm font-semibold" style={{ color: visualTheme.textColor }}>
                    #{i + 1}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-base" style={{ color: visualTheme.textColor }}>
              <MathText>{stages?.[0]?.description || `We have ${initial_number} whole items`}</MathText>
            </div>
          </div>
        )}

        {/* Step 1: Divide each whole into fractional parts with visual subdivision */}
        {currentStep === 1 && (
          <div className="text-center animate-fade-in">
            <StepHeader
              stepNumber={2}
              title={stages?.[1]?.title || `Divide each into ${denominator} parts`}
              textColor={visualTheme.textColor}
              emoji="✂️"
            />
            <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto mb-4">
              {Array.from({ length: initial_number }).map((_, wholeIdx) => (
                <div key={wholeIdx} className="flex flex-col items-center">
                  <div
                    className="w-20 h-16 rounded-lg shadow-lg overflow-hidden"
                    style={{
                      border: `4px solid ${visualTheme.borderColor}`,
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <div className="h-full flex">
                      {Array.from({ length: denominator }).map((_, partIdx) => (
                        <div
                          key={partIdx}
                          className="flex-1 transition-all relative"
                          style={{
                            backgroundColor: partIdx % 2 === 0 ? visualTheme.primaryColor : visualTheme.accentColor,
                            borderRight: partIdx < denominator - 1 ? `2px solid ${visualTheme.borderColor}` : 'none'
                          }}
                        >
                          {/* Show 1/n label on first item only */}
                          {wholeIdx === 0 && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-[8px] font-bold text-white opacity-80">
                                1/{denominator}
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="mt-2 text-xs font-semibold" style={{ color: visualTheme.textColor }}>
                    {denominator} parts
                  </p>
                </div>
              ))}
            </div>
            <div className="text-base" style={{ color: visualTheme.textColor }}>
              <MathText>{stages?.[1]?.description || `Each item divided into ${denominator} parts. Total: ${totalParts} parts`}</MathText>
            </div>
          </div>
        )}

        {/* Step 2: Group the parts with visual grouping */}
        {currentStep === 2 && (
          <div className="text-center animate-fade-in">
            <StepHeader
              stepNumber={3}
              title={stages?.[2]?.title || `Group every ${numerator} part${numerator > 1 ? 's' : ''}`}
              textColor={visualTheme.textColor}
              emoji="📦"
            />
            <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto mb-4">
              {Array.from({ length: initial_number }).map((_, wholeIdx) => (
                <div key={wholeIdx} className="flex flex-col items-center">
                  <div
                    className="w-20 h-16 rounded-lg shadow-lg overflow-hidden"
                    style={{
                      border: `4px solid ${visualTheme.borderColor}`,
                      backgroundColor: '#ffffff'
                    }}
                  >
                    <div className="h-full flex">
                      {Array.from({ length: denominator }).map((_, partIdx) => {
                        const globalPartIndex = wholeIdx * denominator + partIdx;
                        const groupIndex = Math.floor(globalPartIndex / partsPerGroup);
                        const isRemainder = globalPartIndex >= completeGroups * partsPerGroup;

                        return (
                          <div
                            key={partIdx}
                            className="flex-1 transition-all relative"
                            style={{
                              backgroundColor: isRemainder
                                ? '#d1d5db'
                                : groupColors[groupIndex % groupColors.length],
                              borderRight: partIdx < denominator - 1 ? `2px solid ${visualTheme.borderColor}` : 'none',
                              opacity: isRemainder ? 0.5 : 1
                            }}
                          >
                            {/* Show group number */}
                            {!isRemainder && wholeIdx === 0 && partIdx === 0 && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[10px] font-bold text-white">
                                  {groupIndex + 1}
                                </span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-base" style={{ color: visualTheme.textColor }}>
              <MathText>{stages?.[2]?.description || `Grouping ${totalParts} parts into groups of ${numerator}`}</MathText>
            </div>
          </div>
        )}

        {/* Step 3: Show final grouped portions visually */}
        {currentStep === 3 && (
          <div className="text-center animate-fade-in">
            <StepHeader
              stepNumber={4}
              title={stages?.[3]?.title || `Count the groups`}
              textColor={visualTheme.textColor}
              emoji="🎯"
            />

            {/* Visual representation of complete groups */}
            <div className="grid grid-cols-4 gap-4 max-w-3xl mx-auto mb-4">
              {Array.from({ length: completeGroups }).map((_, groupIdx) => (
                <div key={groupIdx} className="flex flex-col items-center">
                  <div
                    className="w-20 h-16 rounded-lg shadow-lg overflow-hidden"
                    style={{
                      border: `4px solid ${visualTheme.borderColor}`,
                      backgroundColor: groupColors[groupIdx % groupColors.length]
                    }}
                  >
                    {/* Show the fraction portion visually */}
                    <div className="h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-sm font-bold text-white">
                          {numerator}/{denominator}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-xs font-bold" style={{ color: groupColors[groupIdx % groupColors.length] }}>
                    Group {groupIdx + 1}
                  </p>
                </div>
              ))}
            </div>

            {/* Show remainder if exists */}
            {remainderParts > 0 && (
              <div className="flex justify-center mb-4">
                <div className="flex flex-col items-center">
                  <div
                    className="w-20 h-16 rounded-lg shadow-lg flex items-center justify-center"
                    style={{
                      backgroundColor: '#e5e7eb',
                      border: `3px dashed ${visualTheme.borderColor}`
                    }}
                  >
                    <span className="text-sm font-semibold text-gray-600">
                      {remainderParts}/{denominator}
                    </span>
                  </div>
                  <p className="mt-2 text-xs font-semibold text-gray-600">Remainder</p>
                </div>
              </div>
            )}

            <div className="text-base mb-2" style={{ color: visualTheme.textColor }}>
              <MathText>{stages?.[3]?.description || `We can make ${completeGroups} complete portions of ${numerator}/${denominator}${remainderParts > 0 ? ` with ${remainderParts}/${denominator} left over` : ''}`}</MathText>
            </div>
          </div>
        )}
      </div>

      <MathSummaryBox
        problem={data.mathSummary?.problem || `${initial_number} ÷ ${numerator}/${denominator} = ?`}
        solution={data.mathSummary?.solution || `${initial_number} ÷ ${numerator}/${denominator} = ${completeGroups}${remainderParts > 0 ? ` R${remainderParts}/${denominator}` : ''}`}
        explanation={data.mathSummary?.explanation || contextualLabels?.result || `${initial_number} whole items divided into groups of ${numerator}/${denominator} gives ${completeGroups} complete groups`}
        backgroundColor="#ffffff"
        borderColor={visualTheme.borderColor}
        textColor={visualTheme.textColor}
        accentColor={visualTheme.accentColor}
      />
    </div>
  );
};

export default WholeNumberFractionDivisionVisualizer;
