import { useState, useEffect, useRef } from 'react';
import VisualizationRenderer from './visualizations/VisualizationRenderer';
import { useTheme } from '../hooks/useTheme';

interface StepByStepRendererProps {
  structuredStepData: any; // Pre-structured data from LLM with steps, intro, conclusion
  stepDelay?: number; // Delay between steps in milliseconds
  className?: string;
  onComplete?: () => void; // Callback when all steps are revealed
}

/**
 * Renders solution steps progressively with optional visualizations
 * Shows one step at a time with configurable delays between steps
 */
const StepByStepRenderer: React.FC<StepByStepRendererProps> = ({
  structuredStepData,
  stepDelay = 2000,
  className = '',
  onComplete
}) => {
  const { theme } = useTheme();
  const [visibleCount, setVisibleCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const onCompleteRef = useRef(onComplete);
  const stepsRef = useRef(structuredStepData?.steps || []);
  const containerRef = useRef<HTMLDivElement>(null);

  // Keep refs updated without triggering re-renders
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    stepsRef.current = structuredStepData?.steps || [];
  }, [structuredStepData]);

  const steps = structuredStepData?.steps || [];

  console.log('🎬 StepByStepRenderer: Render', { visibleCount, totalSteps: steps.length });

  // Single timer-driven state machine
  useEffect(() => {
    console.log('🟢 StepByStepRenderer: MOUNTED - Starting timer-based revelation');

    if (steps.length === 0) {
      console.log('⚠️ StepByStepRenderer: No steps to reveal');
      return;
    }

    // Reveal steps one at a time with timer
    const revealNextStep = (stepIndex: number) => {
      if (stepIndex >= steps.length) {
        console.log('✅ StepByStepRenderer: All steps revealed, calling onComplete');
        if (onCompleteRef.current) {
          onCompleteRef.current();
        }
        return;
      }

      console.log(`⏰ StepByStepRenderer: Revealing step ${stepIndex + 1}/${steps.length}`);
      setVisibleCount(stepIndex + 1);
      setActiveIndex(stepIndex); // Auto-advance to newly revealed step

      // Schedule next step
      if (stepIndex + 1 < steps.length) {
        console.log(`⏱️ StepByStepRenderer: Scheduling step ${stepIndex + 2} in ${stepDelay}ms`);
        timerRef.current = setTimeout(() => {
          revealNextStep(stepIndex + 1);
        }, stepDelay);
      } else {
        // Last step revealed, schedule onComplete
        console.log(`⏱️ StepByStepRenderer: Last step revealed, scheduling onComplete in ${stepDelay}ms`);
        timerRef.current = setTimeout(() => {
          console.log('✅ StepByStepRenderer: Calling onComplete after final step');
          if (onCompleteRef.current) {
            onCompleteRef.current();
          }
        }, stepDelay);
      }
    };

    // Start revealing from first step immediately
    revealNextStep(0);

    // Cleanup: clear any pending timers on unmount
    return () => {
      console.log('🔴 StepByStepRenderer: UNMOUNTING - Clearing timer');
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [steps.length, stepDelay]); // Only re-run if steps count or delay changes

  // Navigation functions
  const goToPrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const goToNext = () => {
    if (activeIndex < visibleCount - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const goToStep = (index: number) => {
    if (index < visibleCount) {
      setActiveIndex(index);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, visibleCount]);

  const colors = {
    background: theme.colors.interactive || '#f1f5f9',
    border: theme.colors.border || '#d1d5db',
    text: theme.colors.textPrimary || '#1f2937',
    textMuted: theme.colors.textMuted || '#6b7280',
    accent: theme.colors.brand || '#3b82f6'
  };

  if (steps.length === 0) {
    return (
      <div className={`step-by-step-renderer ${className}`}>
        <p style={{ color: colors.textMuted }}>No solution steps available.</p>
      </div>
    );
  }

  return (
    <div className={`step-by-step-renderer ${className}`}>
      {/* Intro text */}
      {structuredStepData?.introText && (
        <div className="intro-text mb-4">
          <p className="text-sm leading-relaxed" style={{ color: colors.text }}>
            {structuredStepData.introText}
          </p>
        </div>
      )}

      {/* Horizontal Carousel Container */}
      <div className="relative" style={{ minHeight: '350px' }}>
        {/* Carousel Track */}
        <div
          ref={containerRef}
          className="overflow-hidden relative"
          style={{
            width: '100%',
            minHeight: '300px'
          }}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {steps.map((step: any, index: number) => {
              const isVisible = index < visibleCount;
              const isActive = index === activeIndex;

              return (
                <div
                  key={step.stepNumber}
                  className="flex-shrink-0 px-2 transition-opacity duration-500"
                  style={{
                    width: '100%',
                    opacity: isVisible ? 1 : 0
                  }}
                >
                  <div
                    className={`solution-step h-full rounded-xl p-4 transition-all duration-300`}
                    style={{
                      backgroundColor: isActive ? colors.background : 'transparent',
                      border: isActive ? `2px solid ${colors.accent}` : `1px solid ${colors.border}`,
                      boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
                      minHeight: '280px'
                    }}
                  >
                    {/* Step Header */}
                    <div className="flex items-center space-x-3 mb-3">
                      <div
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                        style={{ backgroundColor: colors.accent }}
                      >
                        {step.stepNumber}
                      </div>
                      <h3
                        className="font-semibold text-base"
                        style={{ color: colors.text }}
                      >
                        {step.title}
                      </h3>
                    </div>

                    {/* Step Content */}
                    <div className="ml-11">
                      <p
                        className="text-sm leading-relaxed mb-4"
                        style={{ color: colors.text }}
                      >
                        {step.content}
                      </p>

                      {/* Visualization for this step */}
                      {step.includeVisualization && step.visualizationData && (
                        <div className="visualization-container">
                          <VisualizationRenderer
                            data={step.visualizationData}
                            theme={theme}
                            step={index}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Arrows - Only show if multiple steps */}
        {steps.length > 1 && (
          <>
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              disabled={activeIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
              style={{
                backgroundColor: colors.background,
                border: `2px solid ${colors.border}`,
                color: colors.text,
                zIndex: 10
              }}
              onMouseEnter={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = colors.accent, e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.background, e.currentTarget.style.color = colors.text)}
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              disabled={activeIndex >= visibleCount - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
              style={{
                backgroundColor: colors.background,
                border: `2px solid ${colors.border}`,
                color: colors.text,
                zIndex: 10
              }}
              onMouseEnter={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = colors.accent, e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.background, e.currentTarget.style.color = colors.text)}
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Conclusion text */}
      {structuredStepData?.conclusionText && visibleCount === steps.length && (
        <div className="conclusion-text mt-4 pt-4 border-t" style={{ borderColor: colors.border }}>
          <p className="text-sm leading-relaxed" style={{ color: colors.text }}>
            {structuredStepData.conclusionText}
          </p>
        </div>
      )}

      {/* Interactive Progress Dots */}
      <div className="flex justify-center mt-6">
        <div className="flex space-x-2">
          {steps.map((step: any, index: number) => (
            <button
              key={`progress-dot-${step.stepNumber || index}`}
              onClick={() => goToStep(index)}
              disabled={index >= visibleCount}
              className="transition-all duration-300 disabled:cursor-not-allowed"
              style={{
                width: index === activeIndex ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: index < visibleCount ? colors.accent : colors.border,
                opacity: index === activeIndex ? 1 : (index < visibleCount ? 0.6 : 0.3),
                border: 'none',
                cursor: index < visibleCount ? 'pointer' : 'default'
              }}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepByStepRenderer;