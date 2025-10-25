/**
 * Utility functions for parsing and converting mathematical expressions to LaTeX
 */

export interface MathMatch {
  original: string;
  latex: string;
  startIndex: number;
  endIndex: number;
}

/**
 * Converts common mathematical notation to LaTeX format
 */
export function convertToLatex(text: string): string {
  // Handle complex fractions first: 3/(4 × 3)
  text = text.replace(/(\d+)\/\((\d+)\s*×\s*(\d+)\)/g, '\\frac{$1}{$2 \\times $3}');

  // Handle simple fractions: 1/2, 3/4, etc.
  text = text.replace(/(\d+)\/(\d+)/g, '\\frac{$1}{$2}');

  // Handle division symbol: ÷
  text = text.replace(/÷/g, '\\div');

  // Handle multiplication: ×
  text = text.replace(/×/g, '\\times');

  // Handle equals with proper spacing
  text = text.replace(/\s*=\s*/g, ' = ');

  return text;
}

/**
 * Detects mathematical expressions in text and returns their positions
 */
export function findMathExpressions(text: string): MathMatch[] {
  const matches: MathMatch[] = [];

  // Pattern for mathematical expressions involving fractions and basic operations
  const mathPatterns = [
    // Fraction operations: "1/2 ÷ 3", "2/3 × 4", "1/4 + 3/8"
    /(\d+\/\d+\s*[÷×+\-]\s*\d+(?:\/\d+)?(?:\s*=\s*\d+\/\d+)?)/g,
    // Simple fractions: "1/2", "3/4"
    /(\d+\/\d+)/g,
    // Mathematical equations: "= 1/6"
    /(=\s*\d+\/\d+)/g
  ];

  mathPatterns.forEach(pattern => {
    let match: RegExpExecArray | null;
    pattern.lastIndex = 0; // Reset regex state

    while ((match = pattern.exec(text)) !== null) {
      const original = match[1];
      const latex = convertToLatex(original);

      // Avoid duplicate matches
      const matchIndex = match.index ?? 0;
      const isDuplicate = matches.some(m =>
        m.startIndex <= matchIndex && matchIndex <= m.endIndex
      );

      if (!isDuplicate) {
        matches.push({
          original,
          latex,
          startIndex: matchIndex,
          endIndex: matchIndex + original.length
        });
      }
    }
  });

  // Sort by position to handle replacements correctly
  return matches.sort((a, b) => a.startIndex - b.startIndex);
}

/**
 * Checks if a string contains mathematical expressions
 */
export function containsMath(text: string): boolean {
  return findMathExpressions(text).length > 0;
}

/**
 * Replaces mathematical expressions in text with LaTeX versions
 */
export function replaceWithLatex(text: string): { text: string; hasMath: boolean } {
  const matches = findMathExpressions(text);

  if (matches.length === 0) {
    return { text, hasMath: false };
  }

  let result = text;
  let offset = 0;

  matches.forEach(match => {
    const start = match.startIndex + offset;
    const end = match.endIndex + offset;

    result = result.substring(0, start) + match.latex + result.substring(end);
    offset += match.latex.length - match.original.length;
  });

  return { text: result, hasMath: true };
}

/**
 * Calculate GCD (Greatest Common Divisor) using Euclidean algorithm
 */
export function calculateGCD(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

/**
 * Calculate LCM (Least Common Multiple)
 */
export function calculateLCM(a: number, b: number): number {
  if (a === 0 || b === 0) {
    return 0;
  }
  return Math.abs(a * b) / calculateGCD(a, b);
}

/**
 * Simplify a fraction to its lowest terms
 */
export function simplifyFraction(numerator: number, denominator: number): { numerator: number; denominator: number } {
  if (denominator === 0) {
    throw new Error('Denominator cannot be zero');
  }

  const gcd = calculateGCD(numerator, denominator);
  return {
    numerator: numerator / gcd,
    denominator: denominator / gcd
  };
}

/**
 * Calculate all math fields for visualization data
 * Used by Visualization Agent to inject calculated math into LLM-generated content
 */
export function calculateVisualizationMath(
  numerator: number,
  denominator: number,
  divisor: number
): {
  resultNumerator: number;
  resultDenominator: number;
  simplifiedNumerator: number;
  simplifiedDenominator: number;
  totalSmallPieces: number;
  needsSimplification: boolean;
} {
  // Calculate result fraction: numerator / (denominator × divisor)
  const resultNumerator = numerator;
  const resultDenominator = denominator * divisor;

  // Simplify the result
  const simplified = simplifyFraction(resultNumerator, resultDenominator);

  // Calculate total pieces after division
  const totalSmallPieces = numerator * divisor;

  // Check if simplification is needed
  const needsSimplification = simplified.numerator !== resultNumerator || simplified.denominator !== resultDenominator;

  return {
    resultNumerator,
    resultDenominator,
    simplifiedNumerator: simplified.numerator,
    simplifiedDenominator: simplified.denominator,
    totalSmallPieces,
    needsSimplification
  };
}

