import React from 'react';
import MathText from '../../MathText';

/**
 * Shared UI components for high-quality visualizations
 * These components ensure consistent design across all visualizers
 */

// Step Controls Component
interface StepControlsProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  primaryColor?: string;
  disabledColor?: string;
  className?: string;
}

export const StepControls: React.FC<StepControlsProps> = ({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  primaryColor = '#d97706',
  disabledColor = '#d1d5db',
  className = ''
}) => {
  const isPreviousDisabled = currentStep === 0;
  const isNextDisabled = currentStep >= totalSteps - 1;

  return (
    <div className={`flex justify-between items-center mb-6 ${className}`}>
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={isPreviousDisabled}
        className="px-6 py-3 rounded-lg font-semibold transition-all duration-200 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 shadow-lg"
        style={{
          backgroundColor: isPreviousDisabled ? disabledColor : primaryColor,
          color: 'white',
          opacity: isPreviousDisabled ? 0.5 : 1
        }}
        aria-label="Previous step"
      >
        Previous
      </button>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={isNextDisabled}
        className="px-6 py-3 rounded-lg font-semibold transition-all duration-200 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 shadow-lg"
        style={{
          backgroundColor: isNextDisabled ? disabledColor : primaryColor,
          color: 'white',
          opacity: isNextDisabled ? 0.5 : 1
        }}
        aria-label="Next step"
      >
        Next
      </button>
    </div>
  );
};

// Math Summary Box Component
interface MathSummaryBoxProps {
  problem: string;
  solution: string;
  explanation?: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  accentColor?: string;
  className?: string;
}

export const MathSummaryBox: React.FC<MathSummaryBoxProps> = ({
  problem,
  solution,
  explanation,
  backgroundColor = '#ffffff',
  borderColor = '#78350f',
  textColor = '#78350f',
  accentColor = '#d97706',
  className = ''
}) => {
  return (
    <div
      className={`p-4 rounded-lg shadow-md mt-4 ${className}`}
      style={{
        backgroundColor,
        border: `2px solid ${borderColor}`
      }}
    >
      <h3
        className="text-lg font-bold mb-3"
        style={{ color: textColor }}
      >
        The Math:
      </h3>
      <div className="space-y-2 text-base">
        <p style={{ color: textColor }}>
          <span className="font-semibold">Problem:</span> <MathText>{problem}</MathText>
        </p>
        <p style={{ color: textColor }}>
          <span className="font-semibold">Solution:</span>{' '}
          <span style={{ color: accentColor, fontWeight: 'bold' }}>
            <MathText>{solution}</MathText>
          </span>
        </p>
        {explanation && (
          <p
            className="text-sm mt-3 pt-3"
            style={{
              color: textColor,
              opacity: 0.8,
              borderTop: `1px solid ${borderColor}`
            }}
          >
            <MathText>{explanation}</MathText>
          </p>
        )}
      </div>
    </div>
  );
};

// Step Progress Dots Component
interface StepProgressDotsProps {
  currentStep: number;
  totalSteps: number;
  onStepClick?: (step: number) => void;
  activeColor?: string;
  inactiveColor?: string;
  className?: string;
}

export const StepProgressDots: React.FC<StepProgressDotsProps> = ({
  currentStep,
  totalSteps,
  onStepClick,
  activeColor = '#d97706',
  inactiveColor = '#d1d5db',
  className = ''
}) => {
  return (
    <div className={`flex justify-center mt-4 ${className}`}>
      <div className="flex space-x-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <button
            key={index}
            onClick={() => onStepClick?.(index)}
            disabled={!onStepClick}
            className="transition-all duration-300"
            style={{
              width: index === currentStep ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: index === currentStep ? activeColor : inactiveColor,
              opacity: index === currentStep ? 1 : 0.6,
              border: 'none',
              cursor: onStepClick ? 'pointer' : 'default'
            }}
            aria-label={`Step ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Step Header Component
interface StepHeaderProps {
  stepNumber: number;
  title: string;
  description?: string;
  emoji?: string;
  textColor?: string;
  className?: string;
}

export const StepHeader: React.FC<StepHeaderProps> = ({
  stepNumber: _stepNumber,
  title,
  description,
  emoji,
  textColor = '#78350f',
  className = ''
}) => {
  return (
    <div className={`text-center mb-3 ${className}`}>
      {emoji && <div className="text-2xl mb-1">{emoji}</div>}
      <h3 className="text-lg font-semibold mb-1" style={{ color: textColor }}>
        {title}
      </h3>
      {description && (
        <p className="text-sm" style={{ color: textColor, opacity: 0.8 }}>
          {description}
        </p>
      )}
    </div>
  );
};

// Recipient Display Component (for sharing problems)
interface RecipientDisplayProps {
  recipients: Array<{
    name: string;
    color: string;
    fraction: string;
    emoji?: string;
  }>;
  className?: string;
}

export const RecipientDisplay: React.FC<RecipientDisplayProps> = ({
  recipients,
  className = ''
}) => {
  return (
    <div className={`grid gap-6 mt-4 ${className}`}
      style={{
        gridTemplateColumns: `repeat(${Math.min(recipients.length, 4)}, minmax(0, 1fr))`
      }}
    >
      {recipients.map((recipient, index) => (
        <div key={index} className="text-center">
          {recipient.emoji && <div className="text-4xl mb-2">{recipient.emoji}</div>}
          {recipient.name && (
            <p className="font-semibold" style={{ color: recipient.color }}>
              {recipient.name}
            </p>
          )}
          <div
            className="w-24 h-8 mx-auto rounded flex items-center justify-center text-white font-bold shadow-md"
            style={{
              backgroundColor: recipient.color,
              border: `2px solid ${recipient.color}`,
              marginTop: recipient.name || recipient.emoji ? '0.5rem' : '0'
            }}
          >
            {recipient.fraction}
          </div>
        </div>
      ))}
    </div>
  );
};

// Animated Container Component
interface AnimatedContainerProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const AnimatedContainer: React.FC<AnimatedContainerProps> = ({
  children,
  className = ''
}) => {
  return (
    <div
      className={`animate-fade-in ${className}`}
    >
      {children}
    </div>
  );
};
