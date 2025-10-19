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

/**
 * Get math symbols for a specific topic
 * Returns universal symbols + topic-specific symbols
 */
export function getSymbolsForTopic(topicId: string): MathButton[] {
  const symbols = [...UNIVERSAL_SYMBOLS];

  // Determine topic category from topicId prefix
  if (topicId.startsWith('s3-math-trigonometry-')) {
    symbols.push(...TRIGONOMETRY_SYMBOLS);
  } else if (topicId.startsWith('s3-math-sets-')) {
    symbols.push(...SETS_SYMBOLS);
  } else if (topicId.startsWith('s3-math-quadratic-')) {
    symbols.push(...QUADRATIC_SYMBOLS);
  } else if (topicId.startsWith('s3-math-exponential-logarithms-')) {
    symbols.push(...EXPONENTIAL_SYMBOLS);
  } else if (topicId.startsWith('s3-math-circle-geometry-')) {
    symbols.push(...CIRCLE_SYMBOLS);
  } else if (topicId.startsWith('p6-math-fractions-')) {
    // Fractions just need universal symbols
    // Could add specific fraction symbols in the future
  }
  // For unknown topics, return universal symbols only

  return symbols;
}
