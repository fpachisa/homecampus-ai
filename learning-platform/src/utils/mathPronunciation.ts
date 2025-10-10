/**
 * Math Pronunciation Utilities for TTS
 * Converts mathematical text to SSML for better pronunciation
 */

/**
 * Dictionary of math terms that need special pronunciation
 * Maps term to SSML pronunciation hint
 */
const MATH_PRONUNCIATION_DICT: Record<string, string> = {
  // Trigonometry mnemonics - spell them out
  'SOH': '<say-as interpret-as="characters">SOH</say-as>',
  'CAH': '<say-as interpret-as="characters">CAH</say-as>',
  'TOA': '<say-as interpret-as="characters">TOA</say-as>',
  'SOH-CAH-TOA': '<say-as interpret-as="characters">SOH</say-as>-<say-as interpret-as="characters">CAH</say-as>-<say-as interpret-as="characters">TOA</say-as>',

  // Common math abbreviations
  'LCM': '<say-as interpret-as="characters">LCM</say-as>',
  'GCD': '<say-as interpret-as="characters">GCD</say-as>',
  'HCF': '<say-as interpret-as="characters">HCF</say-as>',
};

/**
 * Convert plain text to SSML with math pronunciation hints
 * @param text - Plain text that may contain math terms
 * @returns SSML-formatted text with pronunciation hints
 */
export function convertTextToMathSSML(text: string): string {
  let ssmlText = text;

  // Replace math terms with SSML pronunciation
  for (const [term, ssml] of Object.entries(MATH_PRONUNCIATION_DICT)) {
    // Use word boundaries to match whole words only
    // Case-insensitive matching
    const regex = new RegExp(`\\b${term}\\b`, 'gi');
    ssmlText = ssmlText.replace(regex, ssml);
  }

  // Wrap in SSML speak tag
  return `<speak>${ssmlText}</speak>`;
}

/**
 * Check if text contains math terms that need SSML
 * @param text - Text to check
 * @returns true if text contains math terms
 */
export function needsMathSSML(text: string): boolean {
  const upperText = text.toUpperCase();
  return Object.keys(MATH_PRONUNCIATION_DICT).some(term =>
    upperText.includes(term.toUpperCase())
  );
}

/**
 * Add custom pronunciation to the dictionary
 * Useful for extending with subject-specific terms
 */
export function addMathPronunciation(term: string, ssml: string): void {
  MATH_PRONUNCIATION_DICT[term] = ssml;
}
