/**
 * Register all visualization components in the registry
 * This file should be imported at app startup to ensure all visualizers are available
 */

import { registerVisualization, getVisualizationConfig } from './visualizationRegistry';

// Import the 2 generic visualizer components
import BarDivisionVisualizer from '../components/visualizations/BarDivisionVisualizer';
import CircularDivisionVisualizer from '../components/visualizations/CircularDivisionVisualizer';

/**
 * Initialize and register all visualizers
 */
export function registerAllVisualizers(): void {
  // Register Bar Division Visualizer (for linear/rectangular objects)
  const barConfig = getVisualizationConfig('bar-division');
  if (barConfig) {
    registerVisualization({
      id: 'bar-division',
      displayName: 'Bar Division',
      context: 'abstract',
      keywords: ['ribbon', 'chocolate', 'bar', 'rope', 'fabric', 'wood', 'meter', 'tape', 'linear', 'rectangular'],
      component: BarDivisionVisualizer,
      config: barConfig
    });
  }

  // Register Circular Division Visualizer (for round/circular objects)
  const circularConfig = getVisualizationConfig('circular-division');
  if (circularConfig) {
    registerVisualization({
      id: 'circular-division',
      displayName: 'Circular Division',
      context: 'pizza',
      keywords: ['pizza', 'pie', 'cake', 'circular', 'round', 'wheel', 'garden', 'clock', 'disc'],
      component: CircularDivisionVisualizer,
      config: circularConfig
    });
  }

  console.log('✅ 2 generic visualizers registered successfully');
}

export default registerAllVisualizers;
