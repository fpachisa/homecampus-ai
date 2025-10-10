import React from 'react';
import type { VisualizationData, VisualizationId } from '../../types/visualization';
import { getVisualization, getFallbackVisualization } from '../../utils/visualizationRegistry';

interface VisualizationRendererProps {
  data: VisualizationData;
  theme: any; // Theme from useTheme hook
  className?: string;
  step?: number; // Which visual step to show
  onComplete?: () => void; // Callback when user completes viewing all steps
}

/**
 * Central router component for rendering different visualization types
 * Uses the visualization registry to dynamically load the appropriate component
 */
const VisualizationRenderer: React.FC<VisualizationRendererProps> = ({
  data,
  theme,
  className = '',
  step,
  onComplete
}) => {
  // Get the visualization from the registry
  let visualization = getVisualization(data.visualizationId as VisualizationId);

  // If not found, try fallback
  if (!visualization) {
    console.warn(`Visualization not found: ${data.visualizationId}, trying fallback...`);
    visualization = getFallbackVisualization(data.visualizationId as VisualizationId);
  }

  // If still not found, render error fallback
  if (!visualization) {
    console.error(`No visualization or fallback found for ID: ${data.visualizationId}`);
    return (
      <div className={`visualization-fallback p-4 text-center ${className}`}>
        <p style={{ color: theme?.colors?.textMuted || '#666' }}>
          Visualization not available for this problem type.
        </p>
      </div>
    );
  }

  // Get the component and render it
  const Component = visualization.component;

  return (
    <div className={`visualization-container ${className}`}>
      <Component data={data} theme={theme} step={step} onComplete={onComplete} />
    </div>
  );
};

export default VisualizationRenderer;