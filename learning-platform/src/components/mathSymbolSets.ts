/**
 * Math Symbol Sets Configuration
 * Defines topic-specific math input symbols for the toolbar
 */

export interface MathButton {
  label: string;
  insert: string;
  tooltip: string;
}

// Universal symbols - shown for all topics
const UNIVERSAL_SYMBOLS: MathButton[] = [
  { label: '÷', insert: ' ÷ ', tooltip: 'Divide' },
  { label: '×', insert: ' × ', tooltip: 'Multiply' },
  { label: '−', insert: ' − ', tooltip: 'Subtract' },
  { label: '+', insert: ' + ', tooltip: 'Add' },
  { label: '√', insert: '√(', tooltip: 'Square root' },
  { label: 'x²', insert: '^2', tooltip: 'Square' },
  { label: 'xⁿ', insert: '^', tooltip: 'Power' },
  { label: '/', insert: '/', tooltip: 'Fraction bar' },
  { label: '()', insert: '()', tooltip: 'Parentheses' },
];

// Trigonometry-specific symbols
const TRIGONOMETRY_SYMBOLS: MathButton[] = [
  { label: 'π', insert: 'π', tooltip: 'Pi' },
  { label: '°', insert: '°', tooltip: 'Degree symbol' },
  { label: 'sin', insert: 'sin(', tooltip: 'Sine' },
  { label: 'cos', insert: 'cos(', tooltip: 'Cosine' },
  { label: 'tan', insert: 'tan(', tooltip: 'Tangent' },
  { label: 'sin⁻¹', insert: 'sin⁻¹(', tooltip: 'Inverse sine (arcsin)' },
  { label: 'cos⁻¹', insert: 'cos⁻¹(', tooltip: 'Inverse cosine (arccos)' },
  { label: 'tan⁻¹', insert: 'tan⁻¹(', tooltip: 'Inverse tangent (arctan)' },
];

// Sets and Venn Diagrams symbols
const SETS_SYMBOLS: MathButton[] = [
  { label: '∈', insert: ' ∈ ', tooltip: 'Element of (is in)' },
  { label: '∉', insert: ' ∉ ', tooltip: 'Not an element of (is not in)' },
  { label: '∪', insert: ' ∪ ', tooltip: 'Union (or)' },
  { label: '∩', insert: ' ∩ ', tooltip: 'Intersection (and)' },
  { label: '⊆', insert: ' ⊆ ', tooltip: 'Subset of' },
  { label: '⊇', insert: ' ⊇ ', tooltip: 'Superset of' },
  { label: '∅', insert: '∅', tooltip: 'Empty set' },
  { label: "A'", insert: "'", tooltip: 'Complement (A prime)' },
  { label: 'ℕ', insert: 'ℕ', tooltip: 'Natural numbers' },
  { label: 'ℤ', insert: 'ℤ', tooltip: 'Integers' },
  { label: 'ℤ⁺', insert: 'ℤ⁺', tooltip: 'Positive integers' },
  { label: 'ℤ⁻', insert: 'ℤ⁻', tooltip: 'Negative integers' },
  { label: 'ℚ', insert: 'ℚ', tooltip: 'Rational numbers' },
  { label: 'ℝ', insert: 'ℝ', tooltip: 'Real numbers' },
];

// Quadratic equations symbols
const QUADRATIC_SYMBOLS: MathButton[] = [
  { label: '±', insert: '±', tooltip: 'Plus or minus' },
  { label: '≤', insert: ' ≤ ', tooltip: 'Less than or equal to' },
  { label: '≥', insert: ' ≥ ', tooltip: 'Greater than or equal to' },
  { label: '≠', insert: ' ≠ ', tooltip: 'Not equal to' },
  { label: 'Δ', insert: 'Δ', tooltip: 'Delta (discriminant)' },
];

// Exponential and logarithm symbols
const EXPONENTIAL_SYMBOLS: MathButton[] = [
  { label: 'e', insert: 'e', tooltip: "Euler's number" },
  { label: 'ln', insert: 'ln(', tooltip: 'Natural logarithm' },
  { label: 'log', insert: 'log(', tooltip: 'Logarithm base 10' },
  { label: '^', insert: '^', tooltip: 'Exponent' },
];

// Circle geometry symbols
const CIRCLE_SYMBOLS: MathButton[] = [
  { label: 'π', insert: 'π', tooltip: 'Pi' },
  { label: '°', insert: '°', tooltip: 'Degree symbol' },
  { label: 'r', insert: 'r', tooltip: 'Radius' },
  { label: 'd', insert: 'd', tooltip: 'Diameter' },
];

// Matrix symbols
const MATRIX_SYMBOLS: MathButton[] = [
  { label: 'Matrix', insert: 'MATRIX_BUILDER', tooltip: 'Open Matrix Builder' },
];

/**
 * Get math symbols for a specific topic
 * Returns universal symbols + topic-specific symbols
 */
export function getSymbolsForTopic(topicId: string): MathButton[] {
  const symbols = [...UNIVERSAL_SYMBOLS];
  const normalizedId = topicId.toLowerCase();

  // Trigonometry (S3/S4 Trigonometry, O-Level g4: Pythagoras & Trigonometry)
  if (normalizedId.includes('trigonometry') || normalizedId.includes('advanced-trig') || normalizedId.includes('-g4-')) {
    symbols.push(...TRIGONOMETRY_SYMBOLS);
  }
  // Sets (S3 Sets, O-Level n8: Set Language & Notation)
  else if (normalizedId.includes('sets') || normalizedId.includes('-n8-')) {
    symbols.push(...SETS_SYMBOLS);
  }
  // Quadratics & Inequalities (S3/S4 Quadratics, O-Level n7: Equations & Inequalities, n6: Functions & Graphs)
  else if (normalizedId.includes('quadratic') || normalizedId.includes('quad-') || normalizedId.includes('-n7-') || normalizedId.includes('-n6-')) {
    symbols.push(...QUADRATIC_SYMBOLS);
  }
  // Exponential & Logarithms (S3 Exponential)
  else if (normalizedId.includes('exponential') || normalizedId.includes('logarithms')) {
    symbols.push(...EXPONENTIAL_SYMBOLS);
  }
  // Circle Geometry (S3 Circle Geometry, O-Level g3: Circle Properties)
  else if (normalizedId.includes('circle-geometry') || normalizedId.includes('-g3-')) {
    symbols.push(...CIRCLE_SYMBOLS);
  }
  // Matrices (O-Level n9: Matrices)
  else if (normalizedId.includes('matrices') || normalizedId.includes('-n9-')) {
    symbols.push(...MATRIX_SYMBOLS);
  }
  // Fractions (P6 Fractions)
  else if (normalizedId.includes('fractions')) {
    // Fractions just need universal symbols
  }

  return symbols;
}
