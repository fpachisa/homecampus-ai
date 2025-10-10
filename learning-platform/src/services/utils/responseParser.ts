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
 *
 * CRITICAL: This function prevents "Bad escaped character in JSON" errors!
 * AI models return LaTeX like $48^{\circ}$ which contains \c - but JSON requires \\c
 * Without this fix, JSON.parse() fails because \c is not a valid JSON escape sequence.
 *
 * USAGE: Always use parseJSON() instead of manual JSON.parse() for AI responses!
 * Used in: ChatInterface.tsx, BaseAIService.ts, and all agent response parsing
 */
export function fixJSONEscaping(text: string): string {
  // Fix unescaped backslashes that appear before special characters
  // This commonly happens with LaTeX formulas like \div, \frac, etc.
  let fixed = text;

  // Replace unescaped backslashes followed by common LaTeX commands
  // but only if they're not already escaped
  const latexCommands = [
    // Math operators
    'div', 'frac', 'times', 'cdot', 'pm', 'sqrt', 'sum', 'int', 'infty', 'partial', 'nabla',
    // Greek letters (lowercase)
    'alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa',
    'lambda', 'mu', 'nu', 'xi', 'pi', 'rho', 'sigma', 'tau', 'upsilon', 'phi', 'chi', 'psi', 'omega',
    // Greek letters (uppercase)
    'Gamma', 'Delta', 'Theta', 'Lambda', 'Xi', 'Pi', 'Sigma', 'Upsilon', 'Phi', 'Psi', 'Omega',
    // Trigonometric functions
    'sin', 'cos', 'tan', 'cot', 'sec', 'csc', 'arcsin', 'arccos', 'arctan',
    // Logarithms and exponentials
    'log', 'ln', 'exp',
    // Common symbols
    'circ', 'degree', 'angle', 'perp', 'parallel',
    // Text formatting
    'text', 'mathrm', 'mathbf', 'mathit',
    // Brackets and delimiters
    'left', 'right', 'big', 'Big',
    // Other common commands
    'neq', 'leq', 'geq', 'approx', 'equiv'
  ];

  for (const cmd of latexCommands) {
    // Match \command but not \\command (already escaped)
    const regex = new RegExp(`(?<!\\\\)\\\\${cmd}`, 'g');
    fixed = fixed.replace(regex, `\\\\${cmd}`);
  }

  // Also handle generic unescaped backslashes within quoted strings
  // but be careful not to break already-escaped sequences
  //
  // CRITICAL FIX (2025-10-08): Added 'n' and 't' explicitly to the lookahead character class
  // to preserve JSON newline (\n) and tab (\t) escape sequences.
  //
  // PROBLEM HISTORY:
  // - AI generates valid JSON: "content": "Line 1\n\nLine 2"
  // - Old regex (?<!\\)\\(?!["\\/bfnrtu]) would incorrectly match \n
  // - Result: \n became \\n (literal backslash-n) instead of newline
  // - Display showed: "Line 1\n\nLine 2" with visible \n characters
  //
  // WHY THE OLD REGEX FAILED:
  // - The lookahead (?!["\\/bfnrtu]) checks if backslash is NOT followed by escape chars
  // - BUT in actual strings, \n is a single escape sequence, not two chars
  // - The regex was treating \n as "backslash followed by n" and escaping it
  //
  // THE FIX:
  // - Explicitly list ALL valid JSON escape sequences in the negative lookahead
  // - Valid JSON escapes: \" \\ \/ \b \f \n \r \t \uXXXX
  // - The lookahead now checks: (?!["\\/bfnrtu])
  //   - This preserves: \" \\ \/ \b \f \n \r \t
  //   - This escapes: Any other backslash (e.g., LaTeX \div, \theta, etc.)
  //
  // IMPORTANT: Do NOT remove 'n' or 't' from this lookahead!
  // - Removing 'n' will break newlines in AI responses
  // - Removing 't' will break tabs in formatted content
  // - These are VALID JSON escape sequences that must be preserved
  fixed = fixed.replace(/"([^"]*?)"/g, (_match, content) => {
    // Within the quoted string, escape any lone backslashes
    // Use negative lookbehind to avoid double-escaping backslashes that are already escaped
    // Preserve valid JSON escapes: \" \\ \/ \b \f \n \r \t (note: \uXXXX handled separately)
    const escaped = content.replace(/(?<!\\)\\(?!["\\/bfnrtu])/g, '\\\\');
    return `"${escaped}"`;
  });

  return fixed;
}

/**
 * Unescape literal newline strings that AI models sometimes generate
 * Converts literal \n strings to actual newlines
 *
 * PROBLEM STATEMENT (Added: 2025-10-08):
 * - AI model returns: "content": "Line 1\\n\\nLine 2" (double backslash)
 * - In JSON spec, \\n means: literal backslash + letter n (NOT a newline escape)
 * - After JSON.parse(): we get string "Line 1\n\nLine 2" with visible \n characters
 * - Display shows: "Line 1\n\nLine 2" with literal backslash-n text (BAD!)
 * - marked.js sees literal \n characters and renders them as text
 *
 * WHY AI DOES THIS:
 * - AI model should send: "content": "Line 1\n\nLine 2" (single backslash)
 * - Single \n in JSON = newline escape sequence (correct)
 * - But AI sometimes double-escapes, sending \\n (incorrect)
 * - This is technically valid JSON (means literal backslash-n)
 * - Our JSON parser correctly parses it, but the result is wrong for display
 *
 * THE FIX:
 * - After JSON.parse(), scan all strings in the parsed object
 * - Replace literal \n with actual newline character (\n → U+000A)
 * - Recursively process nested objects and arrays
 * - NOTE: We do NOT replace \t (would break LaTeX: \tan, \text, \theta, etc.)
 *
 * WHY THIS IS SAFE:
 * - Educational content rarely needs literal "\n" as displayable text
 * - LaTeX formulas don't use \n (they use \\, \frac, \div, etc.)
 * - This runs AFTER fixJSONEscaping() which already handled LaTeX
 * - Only affects strings that made it through JSON parsing intact
 *
 * WHAT NOT TO CHANGE:
 * - Do NOT replace \t - breaks LaTeX commands (\tan becomes [TAB]an)
 * - Do NOT modify the regex pattern without testing markdown paragraphs
 * - Do NOT skip this for certain content types - breaks paragraph formatting
 * - Do NOT apply this BEFORE JSON.parse() - will cause parse errors
 *
 * TEST CASE:
 * Input JSON:  {"content": "Determine $\\tan(x)$.\\n\\nUse the formula."}
 * After parse: {content: "Determine $\tan(x)$.\n\nUse the formula."} (literal \n)
 * After fix:   {content: "Determine $\tan(x)$.\n\nUse the formula."} (real newlines)
 * Display:     Two paragraphs, with \tan rendered correctly!
 *
 * RELATED ISSUES:
 * - See fixJSONEscaping() lines 102-126 for \n preservation in JSON parsing
 * - See MathText.tsx lines 76-80 for markdown paragraph detection
 * - Both work together: this creates real newlines, MathText detects them
 */
export function unescapeLiteralNewlines(obj: any): any {
  if (typeof obj === 'string') {
    // ONLY replace literal \n, NOT \t
    // WHY: Many LaTeX commands start with \t (\tan, \text, \theta, \tau, etc.)
    // If we replace \t with tabs, it breaks LaTeX rendering
    // Example: "\tan" would become "[TAB]an" which displays as "an" (BAD!)
    //
    // We don't need to support literal tab characters in educational content,
    // so it's safe to skip \t replacement entirely
    return obj.replace(/\\n/g, '\n');
  } else if (Array.isArray(obj)) {
    return obj.map(item => unescapeLiteralNewlines(item));
  } else if (obj && typeof obj === 'object') {
    const result: any = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = unescapeLiteralNewlines(obj[key]);
      }
    }
    return result;
  }
  return obj;
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

  const parsed = JSON.parse(cleanedText);

  // Fix literal \n strings that AI models sometimes generate (NOT \t - breaks LaTeX!)
  // This runs AFTER parsing to convert double-escaped newline sequences
  return unescapeLiteralNewlines(parsed);
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
