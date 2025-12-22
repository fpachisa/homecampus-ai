/**
 * Response Parser Utilities
 * Centralized JSON parsing and validation for AI service responses
 */

import { AIServiceError, AIErrorType } from '../aiService';

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
 * ============================================================================
 * MATH DELIMITER CONTEXT DETECTION APPROACH
 * ============================================================================
 *
 * THE FUNDAMENTAL PROBLEM:
 * - AI returns JSON like: {"text": "Since $\triangle ABC$ is..."}
 * - JSON.parse() interprets \t in \triangle as TAB escape sequence
 * - Result: "Since $    riangle ABC$" (tab replaces \t)
 * - Similarly: \theta → [TAB]heta, \tan → [TAB]an, \frac → [FF]rac, \sqrt → [TAB]sqrt
 *
 * WHY PATTERN LISTS DON'T WORK:
 * - Previous approach: Maintain list of 50+ LaTeX commands (theta, tan, triangle, sqrt...)
 * - Problem: LaTeX has HUNDREDS of commands (\square, \star, \diamond, \angle...)
 * - Someone adds \theta fix, but forgets \triangle → code breaks again
 * - NOT SCALABLE: New LaTeX commands require code changes
 * - Can cause double-escaping when AI sends already-correct JSON
 *
 * THIS SOLUTION: MATH DELIMITER CONTEXT DETECTION
 * - Our prompts require LaTeX to be in $...$ delimiters (see FORMATTING_RULES)
 * - Inside $...$: Escape ALL backslashes → handles any LaTeX command
 * - Outside $...$: Use standard JSON escape preservation
 * - NO PATTERN LISTS NEEDED - works for any LaTeX command (past/future)
 *
 * WHAT THIS FIXES:
 * ✓ \triangle, \square, \angle, \star (geometric shapes)
 * ✓ \theta, \alpha, \beta (Greek letters)
 * ✓ \tan, \sin, \cos (trig functions)
 * ✓ \frac, \div, \times (operators)
 * ✓ \sqrt, \sum, \int (special functions)
 * ✓ ANY future LaTeX command without code changes
 *
 * EDGE CASES HANDLED:
 * - Multiple $...$ in same string: ✓ Processes each separately
 * - Real tabs outside math: ✓ Preserved as \t JSON escapes
 * - Newlines (\n): ✓ Still work as line breaks outside math
 * - Money amounts ($10, $3.50): ✗ Will be treated as math (acceptable trade-off)
 *
 * CRITICAL: This prevents "Bad escaped character in JSON" errors!
 * AI models return LaTeX like $48^{\circ}$ which contains \c - but JSON requires \\c
 * Without this fix, JSON.parse() fails because \c is not a valid JSON escape sequence.
 *
 * USAGE: Always use parseJSON() instead of manual JSON.parse() for AI responses!
 * Used in: ChatInterface.tsx, BaseAIService.ts, and all agent response parsing
 */
export function fixJSONEscaping(text: string): string {
  let fixed = text;

  // Process each JSON string value separately
  // Find quoted strings and handle them individually
  fixed = fixed.replace(/"([^"]*?)"/g, (_match, content) => {

    // STEP 1: First escape literal control characters (actual tabs/newlines in the string)
    // These are control characters that somehow got into the JSON raw text
    // Example: Actual tab character (0x09) needs to become \t escape sequence
    let escaped = content
      .replace(/\r\n/g, '\\n')  // Windows line endings
      .replace(/\n/g, '\\n')    // Unix line endings
      .replace(/\r/g, '\\r')    // Mac line endings
      .replace(/\t/g, '\\t');   // Literal tab characters (NOT \t escape - actual 0x09)

    // STEP 2: Process math delimiters ($...$)
    // This is THE KEY FIX that eliminates pattern list maintenance!
    //
    // INSIDE $...$: Escape ALL backslashes
    //   - Input:  "Since $\triangle ABC$ is"
    //   - After:  "Since $\\triangle ABC$ is"
    //   - Works for ANY LaTeX command (no list needed!)
    //
    // OUTSIDE $...$: Leave backslashes for JSON escape processing in next step
    //   - Preserves \n (newlines), \t (tabs), \" (quotes), etc.
    //
    // WHY THIS WORKS:
    //   - Our AI prompts require math to be in $...$ delimiters (see FORMATTING_RULES)
    //   - Everything inside $ is LaTeX → escape all backslashes
    //   - Everything outside $ is plain text → preserve JSON escapes
    //
    escaped = escaped.replace(/\$([^$]+)\$/g, (_mathMatch: string, mathContent: string) => {
      // Inside math delimiter: Escape ALL backslashes
      // \triangle → \\triangle
      // \theta → \\theta
      // \frac{1}{2} → \\frac{1}{2}
      // \sqrt{3} → \\sqrt{3}
      // Works for ANY LaTeX command - no pattern matching needed!
      const escapedMath = mathContent.replace(/\\/g, '\\\\');
      return `$${escapedMath}$`;
    });

    // STEP 3: Outside math delimiters, handle remaining backslashes carefully
    // These might be JSON escapes (\n, \t) or other backslashes that need escaping
    //
    // CRITICAL: We must preserve valid JSON escape sequences
    // Valid JSON escapes: \" \\ \/ \b \f \n \r \t \uXXXX
    //
    // This regex says: "Escape backslashes that are NOT followed by valid JSON escape chars"
    // Negative lookahead (?!["\\/bfnrtu]) checks next character
    //
    // Examples:
    //   - \n → preserved (n is in lookahead)
    //   - \t → preserved (t is in lookahead)
    //   - \x → escaped to \\x (x not in lookahead)
    //
    // NOTE: Math content already processed above, so this mainly catches edge cases
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
 * Safe JSON parser that trusts AI-generated JSON
 * Simplified approach with only two stages (no legacy fallbacks)
 *
 * Strategy:
 * 1. Pre-sanitize raw text to remove control characters
 * 2. Extract JSON portion if wrapped in markdown
 * 3. Stage 0: Try direct parsing (trust AI formatting)
 * 4. Stage 3: Try with escaping fixes only (no corruption restoration)
 * 5. If both fail: use fallback or throw error
 *
 * Note: We removed legacy fallback stages (aggressive escaping, pattern extraction)
 * because the AI now consistently sends correctly-formatted JSON
 */
export function safeParseJSON<T>(
  rawText: string,
  _expectedKeys: string[] = [], // Unused, kept for backward compatibility
  fallbackResponse?: Partial<T>
): T {
  console.log('🔍 SafeParseJSON: Starting with text length:', rawText.length);

  // Stage 1: Pre-sanitize raw text
  // Remove actual control characters that break JSON
  // Do NOT run restoreCorruptedLatex here - it interferes with valid JSON
  let sanitized = rawText
    // Remove zero-width characters
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    // Remove other control characters except \t \r \n
    // BUT be careful not to remove backslashes that are part of LaTeX
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');

  // Stage 2: Extract JSON portion if wrapped
  let jsonText = extractJSONFromMarkdown(sanitized);

  // Stage 0: Try direct parsing first (trust AI to send correct JSON)
  // This avoids over-escaping already-correct responses
  // No corruption fixes applied - parse the JSON as-is
  try {
    const parsed = JSON.parse(jsonText);
    const result = unescapeLiteralNewlines(decodeUnicodeEscapes(parsed));
    console.log('✅ SafeParseJSON: Direct parsing succeeded (AI sent correct JSON)');
    return result as T;
  } catch (error0) {
    console.log('⚠️ SafeParseJSON: Direct parsing failed, trying with fixes...', (error0 as Error).message);
  }

  // Stage 3: Try with escaping fixes only (trust AI formatting, no corruption restoration)
  // Only runs if direct parsing failed
  // NOTE: We removed restoreCorruptedLatex() because it was causing false positives
  // on correctly-formatted AI responses (e.g., "greater than" → "greater \tan")
  try {
    // Apply JSON escaping fixes for edge cases
    const fixed = fixJSONEscaping(jsonText);
    const parsed = JSON.parse(fixed);
    const result = unescapeLiteralNewlines(decodeUnicodeEscapes(parsed));
    console.log('✅ SafeParseJSON: Stage 3 (escaping fixes only) succeeded');
    return result as T;
  } catch (error1) {
    console.error('❌ SafeParseJSON: Both Stage 0 and Stage 3 failed!', (error1 as Error).message);

    // Check if response appears to be truncated (doesn't end with valid JSON terminator)
    const trimmedText = jsonText.trim();
    const looksLikeTruncated = !trimmedText.endsWith('}') && !trimmedText.endsWith(']') && !trimmedText.endsWith('"');

    if (looksLikeTruncated) {
      console.error('🔄 SafeParseJSON: Response appears truncated, triggering retry/fallback');
      console.error('Last 100 chars:', trimmedText.slice(-100));
      // Throw a retryable error that will trigger Claude fallback
      throw new AIServiceError(
        AIErrorType.TRUNCATED_RESPONSE,
        error1 as Error,
        true, // retryable
        'AI response was truncated mid-JSON. Trying backup service...'
      );
    }

    // Not truncated - use fallback if provided for other parsing errors
    if (fallbackResponse) {
      console.log('⚠️ SafeParseJSON: Using fallback response for non-truncation parse error');
      return fallbackResponse as T;
    }

    // No fallback provided, throw error with details
    console.error('Raw text sample:', rawText.substring(0, 200));
    throw new Error(`Failed to parse AI response: ${(error1 as Error).message}`);
  }
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
