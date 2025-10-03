/**
 * Response Parser Utilities
 * Centralized JSON parsing and validation for AI service responses
 */

/**
 * Clean markdown code fences from AI response text
 * Handles both ```json ... ``` and ``` ... ``` formats
 */
export function cleanMarkdownCodeFences(text: string): string {
  let cleanedText = text.trim();

  // Remove markdown code blocks if present
  if (cleanedText.startsWith('```json')) {
    cleanedText = cleanedText.replace(/```json\s*/, '').replace(/\s*```$/, '');
  } else if (cleanedText.startsWith('```')) {
    cleanedText = cleanedText.replace(/```\s*/, '').replace(/\s*```$/, '');
  }

  return cleanedText.trim();
}

/**
 * Extract JSON from text that might contain markdown code fences anywhere
 * Useful for responses with extra text before/after the JSON
 */
export function extractJSONFromMarkdown(text: string): string {
  let cleanedText = text.trim();

  // Try to extract JSON from markdown code fences (```json ... ``` or ``` ... ```)
  const jsonFenceMatch = cleanedText.match(/```json\s*\n?([\s\S]*?)\n?```/);
  const genericFenceMatch = cleanedText.match(/```\s*\n?([\s\S]*?)\n?```/);

  if (jsonFenceMatch) {
    cleanedText = jsonFenceMatch[1].trim();
  } else if (genericFenceMatch) {
    cleanedText = genericFenceMatch[1].trim();
  }

  // Additional cleanup: remove any leading/trailing text that's not JSON
  cleanedText = cleanedText.trim();

  // Find first { and last } to extract just the JSON object
  const firstBrace = cleanedText.indexOf('{');
  const lastBrace = cleanedText.lastIndexOf('}');
  if (firstBrace !== -1 && lastBrace !== -1 && firstBrace < lastBrace) {
    cleanedText = cleanedText.substring(firstBrace, lastBrace + 1);
  }

  return cleanedText;
}

/**
 * Fix common JSON escaping issues in AI responses
 * Handles unescaped backslashes in LaTeX formulas and other special characters
 */
export function fixJSONEscaping(text: string): string {
  // Fix unescaped backslashes that appear before special characters
  // This commonly happens with LaTeX formulas like \div, \frac, etc.
  let fixed = text;

  // Replace unescaped backslashes followed by common LaTeX commands
  // but only if they're not already escaped
  const latexCommands = ['div', 'frac', 'times', 'cdot', 'pm', 'sqrt', 'sum', 'int', 'infty', 'partial', 'nabla'];

  for (const cmd of latexCommands) {
    // Match \command but not \\command (already escaped)
    const regex = new RegExp(`(?<!\\\\)\\\\${cmd}`, 'g');
    fixed = fixed.replace(regex, `\\\\${cmd}`);
  }

  // Also handle generic unescaped backslashes within quoted strings
  // but be careful not to break already-escaped sequences
  fixed = fixed.replace(/"([^"]*?)"/g, (match, content) => {
    // Within the quoted string, escape any lone backslashes
    const escaped = content.replace(/\\(?!["\\/bfnrtu])/g, '\\\\');
    return `"${escaped}"`;
  });

  return fixed;
}

/**
 * Parse JSON response with error handling
 */
export function parseJSON<T>(text: string, useMarkdownExtraction: boolean = false): T {
  let cleanedText = useMarkdownExtraction
    ? extractJSONFromMarkdown(text)
    : cleanMarkdownCodeFences(text);

  // Fix common JSON escaping issues before parsing
  cleanedText = fixJSONEscaping(cleanedText);

  return JSON.parse(cleanedText);
}

/**
 * Validate object has required keys
 */
export function validateRequiredKeys<T extends object>(
  obj: T,
  requiredKeys: (keyof T)[],
  errorMessage: string = 'Missing required keys'
): void {
  for (const key of requiredKeys) {
    if (!(key in obj) || obj[key] === undefined || obj[key] === null) {
      throw new Error(`${errorMessage}: ${String(key)}`);
    }
  }
}

/**
 * Format conversation history for prompt
 */
export function formatConversationHistory(history: Array<{ role: string; content: string }>): string {
  return history
    .map(m => `${m.role === 'tutor' ? 'Tutor' : 'Student'}: ${m.content}`)
    .join('\n');
}
