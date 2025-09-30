import React from 'react';
import type { VisualizationData, VisualizationId } from '../../types/visualization';
import BarDivisionVisualizer from './BarDivisionVisualizer';

interface VisualizationRendererProps {
  data: VisualizationData;
  theme: any; // Theme from useTheme hook
  className?: string;
  step?: number; // Which visual step to show
}

/**
 * Central router component for rendering different visualization types
 * Maps visualizationId to the appropriate pre-defined component
 */
const VisualizationRenderer: React.FC<VisualizationRendererProps> = ({
  data,
  theme,
  className = '',
  step
}) => {
  // Component mapping - maps visualization IDs to their respective components
  const componentMap: Record<VisualizationId, React.ComponentType<any>> = {
    'bar-division-simple': BarDivisionVisualizer,
    'bar-division-complex': BarDivisionVisualizer,
    'grouping-model': BarDivisionVisualizer, // TODO: Replace with GroupingVisualizer when created
    'step-by-step-solution': BarDivisionVisualizer // TODO: Replace with StepByStepVisualizer when created
  };

  // Get the component for this visualization ID
  const Component = componentMap[data.visualizationId as VisualizationId];

  // If no component found, render a fallback
  if (!Component) {
    console.warn(`No visualization component found for ID: ${data.visualizationId}`);
    return (
      <div className={`visualization-fallback p-4 text-center ${className}`}>
        <p style={{ color: theme?.colors?.textMuted || '#666' }}>
          Visualization not available for this problem type.
        </p>
      </div>
    );
  }

  // Render the mapped component with the visualization data
  return (
    <div className={`visualization-container ${className}`}>
      <Component data={data} theme={theme} step={step} />
    </div>
  );
};

export default VisualizationRenderer;