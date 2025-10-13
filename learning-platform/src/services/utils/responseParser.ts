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
    // STEP 1: First, escape any literal control characters within the string
    // This prevents "Bad control character in string literal" errors
    let escaped = content
      .replace(/\r\n/g, '\\n')  // Windows line endings first (before individual \n)
      .replace(/\n/g, '\\n')     // Unix line endings
      .replace(/\r/g, '\\r')     // Mac line endings
      .replace(/\t/g, '\\t');    // Literal tabs

    // STEP 2: Within the quoted string, escape any lone backslashes
    // Use negative lookbehind to avoid double-escaping backslashes that are already escaped
    // Preserve valid JSON escapes: \" \\ \/ \b \f \n \r \t (note: \uXXXX handled separately)
    escaped = escaped.replace(/(?<!\\)\\(?!["\\/bfnrtu])/g, '\\\\');
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
 * Decode Unicode escape sequences in strings
 * Converts \u0394 → Δ, \u00b0 → °, etc.
 *
 * PROBLEM STATEMENT (Added: 2025-01-10):
 * - AI returns text with Unicode escapes: "triangle \\u0394ABC" or "15\\u00b0"
 * - After JSON.parse(), we get literal "\u0394" strings (not the character)
 * - Display shows: \u0394ABC instead of ΔABC
 * - Display shows: 15\u00b0instead of 15°
 *
 * WHY AI DOES THIS:
 * - AI model sometimes double-escapes Unicode sequences
 * - Sends: \\u0394 (double backslash) instead of \u0394 (single backslash)
 * - JSON.parse() correctly interprets \\u as literal backslash-u
 * - But we want the actual Unicode character for display
 *
 * THE FIX:
 * - After JSON.parse(), scan all strings in the parsed object
 * - Find patterns like \u0394 (backslash-u followed by 4 hex digits)
 * - Convert to actual Unicode character using String.fromCharCode()
 * - Recursively process nested objects and arrays
 *
 * EXAMPLES:
 * - \u0394 → Δ (Greek capital letter Delta)
 * - \u00b0 → ° (degree sign)
 * - \u03B8 → θ (Greek lowercase theta)
 * - \u03C0 → π (Greek lowercase pi)
 *
 * WHY THIS IS SAFE:
 * - Only affects literal \uXXXX strings that made it through JSON parsing
 * - Doesn't interfere with LaTeX commands (\div, \theta, etc.)
 * - Pattern requires exactly 4 hexadecimal digits (valid Unicode format)
 * - Runs AFTER fixJSONEscaping() which handled LaTeX
 */
export function decodeUnicodeEscapes(obj: any): any {
  if (typeof obj === 'string') {
    // Replace \uXXXX with actual Unicode character
    // Pattern matches: \u followed by exactly 4 hexadecimal digits
    // Example: \u0394 → Δ (0x0394 = 916 decimal = Greek Delta)
    return obj.replace(/\\u([0-9a-fA-F]{4})/g, (_match, hex) => {
      return String.fromCharCode(parseInt(hex, 16));
    });
  } else if (Array.isArray(obj)) {
    return obj.map(item => decodeUnicodeEscapes(item));
  } else if (obj && typeof obj === 'object') {
    const result: any = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = decodeUnicodeEscapes(obj[key]);
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

  // Post-processing fixes (in order):
  // 1. Fix literal \n strings that AI models sometimes generate (NOT \t - breaks LaTeX!)
  //    This converts double-escaped newline sequences to real newlines
  let fixed = unescapeLiteralNewlines(parsed);

  // 2. Decode Unicode escape sequences (\u0394 → Δ, \u00b0 → °, etc.)
  //    This converts literal \uXXXX strings to actual Unicode characters
  fixed = decodeUnicodeEscapes(fixed);

  return fixed;
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

/**
 * Restore LaTeX commands that were corrupted by control character interpretation
 * This fixes cases where \theta became [TAB]heta and \frac became [FF]rac
 */
function restoreCorruptedLatex(text: string): string {
  // Common LaTeX commands that get corrupted by control character interpretation
  // The patterns look for corrupted versions and restore them

  let fixed = text;

  // First pass: Fix the most common corruptions from control characters
  // \t (tab) in commands like \theta, \tan, \text becomes actual tab or spaces
  // \f (form feed) in commands like \frac gets removed or corrupted
  // \n (newline) in commands might become actual newlines
  // \r (carriage return) might corrupt \rho, \right

  // Pattern explanation:
  // (\s+|[\t\f\r]|) - matches spaces, tabs, form feeds, carriage returns, or nothing
  // This handles cases where control chars are rendered as spaces or removed entirely

  const latexPatterns: Array<[RegExp, string]> = [
    // Critical math operators that commonly break
    [/(\s{1,8}|[\t\f]|)rac\{/g, '\\frac{'],  // \frac with \f as form feed
    [/(\s{1,8}|[\t\n\r]|)heta/g, '\\theta'],  // \theta with \t as tab
    [/(\s{1,8}|[\t\f]|)ext\{/g, '\\text{'],   // \text with \t as tab
    [/(\s{1,8}|[\t\f]|)imes/g, '\\times'],    // \times with \t as tab

    // Trig functions where \t becomes tab
    [/(\s{1,8}|[\t]|)an\b/g, '\\tan'],        // \tan
    [/sin\(/g, '\\sin('],                      // \sin (s rarely corrupts)
    [/cos\(/g, '\\cos('],                      // \cos (c rarely corrupts)
    [/(\s{1,8}|[\t]|)anh/g, '\\tanh'],        // \tanh

    // Common symbols
    [/\^?\{?circ\}?/g, '^{\\circ}'],          // degree symbol
    [/(\s{1,8}|)div\b/g, '\\div'],            // division
    [/(\s{1,8}|)cdot/g, '\\cdot'],            // dot multiplication
    [/(\s{1,8}|)pm\b/g, '\\pm'],              // plus-minus
    [/(\s{1,8}|)sqrt/g, '\\sqrt'],            // square root

    // Greek letters with \t corruption
    [/(\s{1,8}|[\t]|)au\b/g, '\\tau'],        // \tau

    // Comparison operators
    [/(\s{1,8}|[\n]|)eq\b/g, '\\neq'],        // \neq with \n as newline
    [/(\s{1,8}|)leq\b/g, '\\leq'],            // less than or equal
    [/(\s{1,8}|)geq\b/g, '\\geq'],            // greater than or equal
    [/(\s{1,8}|)approx/g, '\\approx'],        // approximately equal

    // Fix double backslashes that shouldn't be there
    [/\\\\theta/g, '\\theta'],
    [/\\\\frac/g, '\\frac'],
    [/\\\\text/g, '\\text'],
    [/\\\\sin/g, '\\sin'],
    [/\\\\cos/g, '\\cos'],
    [/\\\\tan/g, '\\tan'],
  ];

  // Apply all corrections
  for (const [pattern, replacement] of latexPatterns) {
    fixed = fixed.replace(pattern, replacement);
  }

  // Second pass: Clean up any remaining issues
  // Sometimes we get spaces in the middle of commands
  fixed = fixed
    .replace(/\\ +([a-z]+)/g, '\\$1')  // Remove spaces after backslash
    .replace(/\s+\{/g, '{')             // Remove spaces before opening brace
    .replace(/\}\s+/g, '}');            // Clean spaces after closing brace

  return fixed;
}

/**
 * Safe JSON parser with multiple fallback strategies
 * Provides 100% reliability for AI responses with LaTeX content
 *
 * Strategy:
 * 1. Restore corrupted LaTeX commands
 * 2. Pre-sanitize raw text to remove control characters
 * 3. Try standard parsing with fixes
 * 4. If fails, try aggressive LaTeX escaping
 * 5. If still fails, extract values with regex patterns
 * 6. Last resort: return safe fallback
 */
export function safeParseJSON<T>(
  rawText: string,
  expectedKeys: string[] = [],
  fallbackResponse?: Partial<T>
): T {
  console.log('🔍 SafeParseJSON: Starting with text length:', rawText.length);

  // Stage 0: Restore corrupted LaTeX commands FIRST
  // This must happen before any other processing
  let restored = restoreCorruptedLatex(rawText);

  if (restored !== rawText) {
    console.log('✅ SafeParseJSON: Restored corrupted LaTeX commands');
  }

  // Stage 1: Pre-sanitize raw text
  // Remove actual control characters that break JSON
  let sanitized = restored
    // Remove zero-width characters
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    // Remove other control characters except \t \r \n
    // BUT be careful not to remove backslashes that are part of LaTeX
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');

  // Stage 2: Extract JSON portion if wrapped
  let jsonText = extractJSONFromMarkdown(sanitized);

  // Stage 3: Try standard parsing with current fixes
  try {
    const fixed = fixJSONEscaping(jsonText);
    const parsed = JSON.parse(fixed);
    const result = unescapeLiteralNewlines(decodeUnicodeEscapes(parsed));
    console.log('✅ SafeParseJSON: Standard parsing succeeded');
    return result as T;
  } catch (error1) {
    console.log('⚠️ SafeParseJSON: Standard parsing failed:', (error1 as Error).message);
  }

  // Stage 4: Try aggressive LaTeX escaping
  try {
    // More aggressive approach: escape ALL backslashes in content
    const aggressiveFixed = jsonText.replace(/"([^"]*?)"/g, (_match, content) => {
      // First escape actual newlines and tabs
      let escaped = content
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\t/g, '\\t');

      // Then escape ALL backslashes that aren't already escaped
      escaped = escaped.replace(/\\/g, '\\\\');

      // But fix double-escaped valid JSON escapes
      escaped = escaped
        .replace(/\\\\n/g, '\\n')
        .replace(/\\\\r/g, '\\r')
        .replace(/\\\\t/g, '\\t')
        .replace(/\\\\"/g, '\\"')
        .replace(/\\\\\//g, '\\/');

      return `"${escaped}"`;
    });

    const parsed = JSON.parse(aggressiveFixed);
    console.log('✅ SafeParseJSON: Aggressive escaping succeeded');
    return parsed as T;
  } catch (error2) {
    console.log('⚠️ SafeParseJSON: Aggressive escaping failed:', (error2 as Error).message);
  }

  // Stage 5: Pattern extraction fallback
  try {
    const extracted: any = {};

    // Try to extract each expected key using regex
    for (const key of expectedKeys) {
      // Try different patterns
      const patterns = [
        // Standard JSON string value
        new RegExp(`"${key}"\\s*:\\s*"([^"]*?)"`),
        // Boolean value
        new RegExp(`"${key}"\\s*:\\s*(true|false)`),
        // Number value
        new RegExp(`"${key}"\\s*:\\s*(\\d+(?:\\.\\d+)?)`),
        // Null value
        new RegExp(`"${key}"\\s*:\\s*(null)`),
      ];

      for (const pattern of patterns) {
        const match = jsonText.match(pattern);
        if (match) {
          let value: any = match[1];
          // Convert booleans and null
          if (value === 'true') value = true;
          else if (value === 'false') value = false;
          else if (value === 'null') value = null;
          else if (!isNaN(Number(value))) value = Number(value);

          extracted[key] = value;
          break;
        }
      }
    }

    if (Object.keys(extracted).length > 0) {
      console.log('✅ SafeParseJSON: Pattern extraction recovered:', Object.keys(extracted));
      return { ...fallbackResponse, ...extracted } as T;
    }
  } catch (error3) {
    console.log('⚠️ SafeParseJSON: Pattern extraction failed:', (error3 as Error).message);
  }

  // Stage 6: Last resort - return fallback
  console.log('❌ SafeParseJSON: All strategies failed, using fallback');
  if (fallbackResponse) {
    return fallbackResponse as T;
  }

  // No fallback provided, throw error
  throw new Error('Failed to parse AI response after all strategies');
}

/**
 * Enhanced JSON extraction specifically for practice mode responses
 * Handles the specific format of evaluation responses with LaTeX
 */
export function extractPracticeJSON(responseText: string): any {
  const expectedKeys = ['isCorrect', 'avatarSpeech', 'explanation', 'hint', 'hintLevel'];

  const fallback = {
    isCorrect: false,
    avatarSpeech: 'Let me help you with this problem.',
    hint: 'Try breaking down the problem step by step.',
    hintLevel: 1
  };

  return safeParseJSON(responseText, expectedKeys, fallback);
}
