/**
 * Text utility functions for processing mathematical expressions
 */

/**
 * Strips LaTeX notation from text and converts it to natural speech
 * Used to prepare text for TTS (text-to-speech) systems
 *
 * @param text - Text containing LaTeX notation like $3 \div 1/2$ or $\frac{1}{2}$
 * @returns Natural language text suitable for speech, e.g., "3 divided by 1 over 2"
 *
 * @example
 * stripLatexForSpeech("$3 \\div 1/2$") // "3 divided by one half"
 * stripLatexForSpeech("$\\frac{3}{4}$") // "three quarters"
 * stripLatexForSpeech("$3 \\times 2 = 6$") // "3 times 2 equals 6"
 */
export function stripLatexForSpeech(text: string): string {
  if (!text) return text;

  let result = text;

  // Step 1: Convert \frac{numerator}{denominator} to spoken form
  // Matches: \frac{3}{4} -> "three quarters" or "3 over 4"
  result = result.replace(/\\frac\{(\d+)\}\{(\d+)\}/g, (_match, num, denom) => {
    return convertFractionToSpeech(parseInt(num), parseInt(denom));
  });

  // Step 2: Convert other LaTeX commands to natural language
  result = result.replace(/\\div/g, ' divided by ');
  result = result.replace(/\\times/g, ' times ');
  result = result.replace(/\\cdot/g, ' times ');
  result = result.replace(/=/g, ' equals ');

  // Step 3: Remove $ delimiters
  result = result.replace(/\$/g, '');

  // Step 4: Convert plain fractions like 1/2, 3/4 to spoken form
  // Only match fractions that look like actual fractions (not dates, ratios, etc.)
  result = result.replace(/\b(\d+)\/(\d+)\b/g, (_match, num, denom) => {
    return convertFractionToSpeech(parseInt(num), parseInt(denom));
  });

  // Step 5: Clean up extra whitespace
  result = result.replace(/\s+/g, ' ').trim();

  return result;
}

/**
 * Converts a fraction to natural speech form
 * @param numerator - The numerator of the fraction
 * @param denominator - The denominator of the fraction
 * @returns Spoken form of the fraction
 */
function convertFractionToSpeech(numerator: number, denominator: number): string {
  // Handle common fractions with special names
  if (numerator === 1 && denominator === 2) return 'one half';
  if (numerator === 1 && denominator === 3) return 'one third';
  if (numerator === 2 && denominator === 3) return 'two thirds';
  if (numerator === 1 && denominator === 4) return 'one quarter';
  if (numerator === 3 && denominator === 4) return 'three quarters';
  if (numerator === 1 && denominator === 5) return 'one fifth';
  if (numerator === 1 && denominator === 8) return 'one eighth';

  // For other fractions, use "over"
  const numWord = numberToWords(numerator);
  const denomWord = numberToWords(denominator);

  return `${numWord} over ${denomWord}`;
}

/**
 * Converts numbers 1-20 to words (for simple fractions)
 * For larger numbers, returns the number as-is
 */
function numberToWords(num: number): string {
  const words: { [key: number]: string } = {
    1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
    6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
    11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen',
    16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty'
  };

  return words[num] || num.toString();
}
