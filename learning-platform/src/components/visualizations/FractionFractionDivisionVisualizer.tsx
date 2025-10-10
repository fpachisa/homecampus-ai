import React, { useState } from 'react';
import type { VisualizationProps } from '../../types/visualization';
import { StepControls, MathSummaryBox, StepHeader } from './shared/VisualizationUI';
import MathText from '../MathText';
import { calculateLCM } from '../../utils/mathUtils';

/**
 * Fraction ÷ Fraction Visualizer
 * Generic visualizer for dividing any proper fraction by another proper fraction
 * Uses measuring cup/container model with common denominator approach
 *
 * Example: 5/6 ÷ 1/12
 * - Shows 5/6 initially
 * - Converts to LCD (12): 5/6 = 10/12
 * - Shows how many 1/12 portions fit into 10/12
 * - Answer: 10 portions
 */
const FractionFractionDivisionVisualizer: React.FC<VisualizationProps> = ({
  data,
  theme,
  className = '',
  onComplete
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  console.log('🎨 FractionFractionDivisionVisualizer received data:', data);

  const { problemData, contextualLabels, stages: dataStages } = data;
  const stages = data.stages || dataStages;

  if (!problemData) {
    console.error('❌ FractionFractionDivisionVisualizer: problemData is missing!', data);
    return (
      <div className="p-4 text-center text-red-600">
        <p>Visualization data is incomplete. Missing problem data.</p>
      </div>
    );
  }

  const {
    numerator1,      // Dividend numerator (e.g., 5 from 5/6)
    denominator1,    // Dividend denominator (e.g., 6 from 5/6)
    numerator2,      // Divisor numerator (e.g., 1 from 1/12)
    denominator2     // Divisor denominator (e.g., 12 from 1/12)
  } = problemData;

  // Calculate LCD and converted values
  const lcd = calculateLCM(denominator1, denominator2);
  const convertedNumerator1 = (numerator1 * lcd) / denominator1;
  const convertedNumerator2 = (numerator2 * lcd) / denominator2;

  // Calculate the result
  const result = convertedNumerator1 / convertedNumerator2;
  const isWholeNumber = Number.isInteger(result);
  const resultFraction = isWholeNumber ? `${result}` : `${convertedNumerator1}/${convertedNumerator2}`;

  // Use theme from data or fallback
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
    iconLabel: 'part'
  };

  const totalSteps = stages?.length || 5;

  // Colors for portion visualization
  const portionColors = [
    '#10b981', // emerald
    '#3b82f6', // blue
    '#8b5cf6', // purple
    '#f59e0b', // amber
    '#ef4444', // red
    '#06b6d4', // cyan
    '#ec4899', // pink
    '#84cc16'  // lime
  ];

  const handlePrevious = () => setCurrentStep(Math.max(0, currentStep - 1));
  const handleNext = () => setCurrentStep(Math.min(totalSteps - 1, currentStep + 1));

  // Calculate portions for display (limit to reasonable number for visualization)
  const displayablePortions = Math.min(Math.floor(result), 20);
  const hasRemainder = !isWholeNumber && result > 1;

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
        {visualTheme.emoji} {contextualLabels?.original || `${numerator1}/${denominator1} ÷ ${numerator2}/${denominator2}`}
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
        {/* Step 0: Problem statement */}
        {currentStep === 0 && (
          <div className="text-center animate-fade-in">
            <StepHeader
              stepNumber={1}
              title={stages?.[0]?.title || "The Problem"}
              textColor={visualTheme.textColor}
              emoji={visualTheme.emoji}
            />
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
              <div className="text-4xl mb-3">{visualTheme.emoji}</div>
              <div className="text-base" style={{ color: visualTheme.textColor }}>
                <MathText>{stages?.[0]?.description || `We have ${numerator1}/${denominator1}, and each portion is ${numerator2}/${denominator2}. How many portions can we make?`}</MathText>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              This is: {numerator1}/{denominator1} ÷ {numerator2}/{denominator2} = ?
            </p>
          </div>
        )}

        {/* Step 1: Show initial fraction */}
        {currentStep === 1 && (
          <div className="text-center animate-fade-in">
            <StepHeader
              stepNumber={2}
              title={stages?.[1]?.title || `We have ${numerator1}/${denominator1}`}
              textColor={visualTheme.textColor}
              emoji={visualTheme.emoji}
            />
            <div className="flex justify-center mb-4">
              <div className="relative">
                {/* Measuring cup visualization */}
                <div
                  className="w-80 h-32 rounded-b-lg relative overflow-hidden"
                  style={{
                    border: `4px solid ${visualTheme.borderColor}`,
                    backgroundColor: '#ffffff'
                  }}
                >
                  <div className="absolute bottom-0 w-full h-full flex">
                    {Array.from({ length: denominator1 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 transition-all duration-300"
                        style={{
                          backgroundColor: i < numerator1 ? visualTheme.primaryColor : '#e5e7eb',
                          borderRight: i < denominator1 - 1 ? `2px solid ${visualTheme.borderColor}` : 'none'
                        }}
                      >
                        {i >= numerator1 && (
                          <div className="h-full flex items-center justify-center text-gray-400 text-2xl">
                            ✕
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-2 left-0 right-0 text-center text-xs font-semibold" style={{ color: visualTheme.textColor }}>
                    {visualTheme.iconLabel.toUpperCase()}
                  </div>
                </div>
                {/* Cup rim */}
                <div
                  className="w-96 h-3 rounded-t-lg -mb-1 mx-auto"
                  style={{ backgroundColor: visualTheme.borderColor }}
                ></div>
              </div>
            </div>
            <div className="text-base" style={{ color: visualTheme.textColor }}>
              <MathText>{stages?.[1]?.description || `The container is divided into ${denominator1} equal parts. We have ${numerator1} out of ${denominator1} parts = ${numerator1}/${denominator1}`}</MathText>
            </div>
          </div>
        )}

        {/* Step 2: Convert to common denominator */}
        {currentStep === 2 && (
          <div className="text-center animate-fade-in">
            <StepHeader
              stepNumber={3}
              title={stages?.[2]?.title || `Convert to common denominator (${lcd})`}
              textColor={visualTheme.textColor}
              emoji="🔄"
            />
            <div className="flex justify-center mb-4">
              <div className="relative">
                {/* Measuring cup with LCD divisions */}
                <div
                  className="w-80 h-32 rounded-b-lg relative overflow-hidden"
                  style={{
                    border: `4px solid ${visualTheme.borderColor}`,
                    backgroundColor: '#ffffff'
                  }}
                >
                  <div className="absolute bottom-0 w-full h-full flex">
                    {Array.from({ length: lcd }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 transition-all duration-300"
                        style={{
                          backgroundColor: i < convertedNumerator1 ? visualTheme.accentColor : '#e5e7eb',
                          borderRight: i < lcd - 1 ? `1px solid ${visualTheme.borderColor}` : 'none'
                        }}
                      >
                        {i >= convertedNumerator1 && (
                          <div className="h-full flex items-center justify-center text-gray-400 text-xl">
                            ✕
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Cup rim */}
                <div
                  className="w-96 h-3 rounded-t-lg -mb-1 mx-auto"
                  style={{ backgroundColor: visualTheme.borderColor }}
                ></div>
              </div>
            </div>
            <div className="text-base mb-2" style={{ color: visualTheme.textColor }}>
              <MathText>{stages?.[2]?.description || `Now divided into ${lcd} equal parts (twelfths)`}</MathText>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg max-w-md mx-auto">
              <p className="text-sm text-gray-700">
                {numerator1}/{denominator1} = {convertedNumerator1}/{lcd}
                {denominator1 !== denominator2 && ` and ${numerator2}/${denominator2} = ${convertedNumerator2}/${lcd}`}
              </p>
            </div>
          </div>
        )}

        {/* Step 3: Show portions */}
        {currentStep === 3 && (
          <div className="text-center animate-fade-in">
            <StepHeader
              stepNumber={4}
              title={stages?.[3]?.title || `Count ${numerator2}/${denominator2} portions`}
              textColor={visualTheme.textColor}
              emoji="📊"
            />
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-base" style={{ color: visualTheme.textColor }}>
                Each portion is {convertedNumerator2}/{lcd}. How many fit into {convertedNumerator1}/{lcd}?
              </p>

              {/* Visual portions */}
              {displayablePortions > 0 && displayablePortions <= 12 && (
                <div className="grid grid-cols-4 gap-3">
                  {Array.from({ length: displayablePortions }).map((_, i) => (
                    <div key={i} className="flex flex-col items-center p-2 bg-white rounded-lg shadow">
                      <p className="font-bold text-xs mb-1" style={{ color: portionColors[i % portionColors.length] }}>
                        Portion {i + 1}
                      </p>
                      <div
                        className="w-6 h-12 border-2 rounded"
                        style={{
                          backgroundColor: portionColors[i % portionColors.length],
                          borderColor: visualTheme.borderColor
                        }}
                      ></div>
                    </div>
                  ))}
                </div>
              )}

              {displayablePortions > 12 && (
                <div className="p-4 bg-white rounded-lg shadow">
                  <p className="text-xl font-bold" style={{ color: visualTheme.accentColor }}>
                    {displayablePortions} portions!
                  </p>
                </div>
              )}

              <div className="p-3 bg-green-100 rounded-lg max-w-md mx-auto">
                <p className="text-base text-gray-700">
                  We have {convertedNumerator1} parts
                </p>
                <p className="text-base text-gray-700">
                  Each portion is {convertedNumerator2} parts
                </p>
                <p className="text-lg font-bold text-green-700 mt-2">
                  {convertedNumerator1} ÷ {convertedNumerator2} = {result} portions!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Final answer */}
        {currentStep === 4 && (
          <div className="text-center animate-fade-in">
            <StepHeader
              stepNumber={5}
              title={stages?.[4]?.title || "The Answer!"}
              textColor={visualTheme.textColor}
              emoji="✨"
            />

            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
              <div className="text-5xl mb-3">{visualTheme.emoji}</div>
              <p className="text-2xl font-bold mb-3" style={{ color: visualTheme.accentColor }}>
                {result} {problemData.result_unit || 'portions'}!
              </p>
              <p className="text-lg text-gray-700">
                {numerator1}/{denominator1} ÷ {numerator2}/{denominator2} = {resultFraction}
              </p>
            </div>

            <div className="bg-purple-100 p-4 rounded-lg mx-auto max-w-lg mt-4">
              <p className="text-base font-semibold text-purple-900 mb-2">How it works:</p>
              <div className="text-left space-y-1 text-sm text-gray-700">
                <p>• Convert to common denominator: {numerator1}/{denominator1} = {convertedNumerator1}/{lcd}</p>
                {denominator1 !== denominator2 && (
                  <p>• Each portion: {numerator2}/{denominator2} = {convertedNumerator2}/{lcd}</p>
                )}
                <p>• Count portions: {convertedNumerator1}/{lcd} ÷ {convertedNumerator2}/{lcd} = {result}</p>
              </div>
            </div>

            <div className="bg-pink-100 p-4 rounded-lg mx-auto max-w-lg mt-4">
              <p className="text-base font-semibold text-pink-900 mb-1">The math shortcut:</p>
              <p className="text-sm text-gray-700">
                {numerator1}/{denominator1} ÷ {numerator2}/{denominator2} = {numerator1}/{denominator1} × {denominator2}/{numerator2} = {(numerator1 * denominator2)}/{(denominator1 * numerator2)} = {result}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Mathematical explanation */}
      <MathSummaryBox
        problem={data.mathSummary?.problem || `${numerator1}/${denominator1} ÷ ${numerator2}/${denominator2} = ?`}
        solution={data.mathSummary?.solution || `${numerator1}/${denominator1} ÷ ${numerator2}/${denominator2} = ${resultFraction}`}
        explanation={data.mathSummary?.explanation || contextualLabels?.result || `Converting to common denominator (${lcd}), we get ${convertedNumerator1}/${lcd} ÷ ${convertedNumerator2}/${lcd} = ${result}`}
        backgroundColor="#ffffff"
        borderColor={visualTheme.borderColor}
        textColor={visualTheme.textColor}
        accentColor={visualTheme.accentColor}
      />
    </div>
  );
};

export default FractionFractionDivisionVisualizer;
