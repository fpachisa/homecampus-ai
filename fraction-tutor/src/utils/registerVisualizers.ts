/**
 * Register all visualization components in the registry
 * This file should be imported at app startup to ensure all visualizers are available
 */

import { registerVisualization, getVisualizationConfig } from './visualizationRegistry';

// Import visualizer components
import BarDivisionVisualizer from '../components/visualizations/BarDivisionVisualizer';
import CircularDivisionVisualizer from '../components/visualizations/CircularDivisionVisualizer';
import WholeNumberFractionDivisionVisualizer from '../components/visualizations/WholeNumberFractionDivisionVisualizer';
import FractionFractionDivisionVisualizer from '../components/visualizations/FractionFractionDivisionVisualizer';

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

  // Register Whole Number ÷ Fraction Visualizer (grouping model)
  const wholeNumberFractionConfig = getVisualizationConfig('whole-number-fraction-division');
  if (wholeNumberFractionConfig) {
    registerVisualization({
      id: 'whole-number-fraction-division',
      displayName: 'Whole Number ÷ Fraction Division',
      context: 'abstract',
      keywords: [], // Not used - visualizationId is explicitly set in topic config
      component: WholeNumberFractionDivisionVisualizer,
      config: wholeNumberFractionConfig
    });
  }

  // Register Fraction ÷ Fraction Visualizer (common denominator model)
  const fractionFractionConfig = getVisualizationConfig('fraction-fraction-division');
  if (fractionFractionConfig) {
    registerVisualization({
      id: 'fraction-fraction-division',
      displayName: 'Fraction ÷ Fraction Division',
      context: 'liquid',
      keywords: ['cup', 'flour', 'milk', 'water', 'liquid', 'measuring', 'portion', 'scoop'], // Common keywords for fraction÷fraction problems
      component: FractionFractionDivisionVisualizer,
      config: fractionFractionConfig
    });
  }

  console.log('✅ 4 visualizers registered successfully');
}

export default registerAllVisualizers;
