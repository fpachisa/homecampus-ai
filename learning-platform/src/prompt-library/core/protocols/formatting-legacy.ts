/**
 * Universal Formatting Rules
 * Centralized formatting guidelines for all AI responses
 *
 * CRITICAL: These rules prevent common LaTeX/markdown rendering issues
 * and ensure consistent output across all agents and topics.
 */

import type { FormattingRules } from '../../types/prompts';

/**
 * Universal formatting rules that all AI agents must follow
 * Single source of truth to prevent circular regex/LaTeX issues
 */
export const FORMATTING_RULES: FormattingRules = {
  latex: {
    dollarAmounts: {
      rule: "Use \\$1,500,000 (backslash-escaped, NO $ delimiters)",
      examples: {
        correct: "\\$1,500,000 per hectare",
        incorrect: "$\\$1,500,000$ per hectare"
      },
      reason: "MathText.tsx regex /\\$([^$]+)\\$/g cannot handle escaped $ inside delimiters"
    },

    mathExpressions: {
      rule: "Use $expression$ (WITH $ delimiters, NO escaped $ inside)",
      examples: {
        correct: [
          "$x^2 + 3x = 10$",
          "$45^{\\circ}$",
          "$1 \\text{ hectare} = 10,000 \\text{ m}^2$",
          "$26\\sqrt{3}$ cm² (ALWAYS use \\sqrt{} with braces)",
          "$\\frac{1}{2} \\times 13 \\times 8 \\times \\sin(60°) = 26\\sqrt{3}$"
        ],
        incorrect: [
          "$\\$100$ investment (DO NOT put \\$ inside $ delimiters)",
          "26\\tsqrt3 or 26sqrt{3} (WRONG: missing backslash or typo \\tsqrt)"
        ]
      },
      reason: "MathText.tsx processes LaTeX inside $ delimiters with KaTeX"
    },

    jsonEscaping: {
      rule: "JSON escaping: ONE backslash in JSON source (\\) → ONE backslash after JSON.parse() (\\) → KaTeX renders the symbol",
      examples: {
        correct: [
          'JSON source: {"content": "The angle is $\\theta = 45^{\\circ}$"}',
          'After JSON.parse(): "The angle is $\\theta = 45^{\\circ}$"',
          'KaTeX renders as: "The angle is θ = 45°"'
        ],
        incorrect: [
          'JSON source: {"content": "$\\\\theta$"} ← WRONG: TWO backslashes',
          'After parse: "$\\\\theta$" ← Double backslash = LaTeX fails!'
        ]
      },
      reason: "JSON.parse() processes escape sequences. Use ONE backslash in JSON source for LaTeX commands."
    },

    generalGuideline: "NEVER mix dollar amounts and LaTeX delimiters. Use \\$ for money, $ for math, never both together."
  },

  speech: {
    format: {
      rule: "PLAIN TEXT only - no markdown (* _ ** ###), no LaTeX ($ \\), no hyphens in compound words/acronyms",
      examples: {
        correct: "Let's use S O H C A H T O A to solve this. The angle is 30 degrees.",
        incorrect: "Let's use SOH-CAH-TOA to solve this. The angle is $30^{\\circ}$."
      },
      reason: "speech.text is read aloud by text-to-speech engine which cannot parse markdown or LaTeX"
    },

    acronyms: {
      rule: "Use spaces between letters for proper pronunciation",
      examples: {
        correct: "S O H C A H T O A",
        incorrect: "SOH-CAH-TOA"
      },
      reason: "TTS engines pronounce hyphens incorrectly"
    },

    numbers: {
      rule: "Write numbers naturally for speech",
      examples: {
        correct: "30 degrees",
        incorrect: "30°"
      }
    }
  },

  display: {
    format: {
      rule: "Can use markdown (**, *, ###, -) and LaTeX ($...$) freely",
      examples: {
        correct: "### Step 1\n\nWe have $\\sin(45^{\\circ}) = \\frac{x}{10}$\n\n**Important:** The opposite side is..."
      },
      reason: "display.content is rendered visually with full markdown/LaTeX support"
    },

    structuring: {
      headings: "Use ### for step headings",
      emphasis: "Use **bold** for key concepts",
      latex: "Use $ delimiters for all math expressions"
    }
  },

  commonMistakes: [
    {
      mistake: "Putting \\$1,500,000 inside $ delimiters",
      fix: "Use \\$1,500,000 (no delimiters) OR write '1,500,000 dollars' OR use 'USD 1,500,000'",
      severity: 'error'
    },
    {
      mistake: "Using LaTeX in speech.text",
      fix: "speech.text must be plain text. Save LaTeX for display.content",
      severity: 'error'
    },
    {
      mistake: "Using hyphens in speech (30-60-90 triangle)",
      fix: "Use spaces: '30 60 90 triangle'",
      severity: 'warning'
    },
    {
      mistake: "Using double backslashes in JSON for LaTeX",
      fix: "Use single backslash: \\theta not \\\\theta in JSON source",
      severity: 'error'
    }
  ]
};

/**
 * Critical JSON escaping reminders for AI agents generating JSON
 */
export const JSON_ESCAPING_CRITICAL = {
  warning: "⚠️⚠️⚠️ YOU ARE GENERATING JSON OUTPUT - LaTeX backslashes MUST BE ESCAPED IN JSON! ⚠️⚠️⚠️",

  flow: {
    step1: "Write \\theta in JSON source",
    step2: "JSON.parse() keeps it as \\theta",
    step3: "KaTeX renders as θ symbol"
  },

  requiredCommands: {
    greek: "\\theta, \\alpha, \\beta, \\gamma, \\pi (ONE backslash in JSON source)",
    trig: "\\sin, \\cos, \\tan, \\sec, \\csc, \\cot (ONE backslash in JSON source)",
    fractions: "\\frac{numerator}{denominator} (ONE backslash in JSON source)",
    geometry: "\\angle, \\triangle, \\circ (ONE backslash in JSON source)",
    operators: "\\times, \\div, \\pm, \\sqrt{value} (ONE backslash in JSON source)",
    text: "\\text{...} (ONE backslash in JSON source)"
  },

  technicalDetails: "JSON.parse() processes escape sequences: \\ in JSON source stays as \\ in string value (when followed by valid LaTeX like 't' in \\theta). KaTeX then renders the single backslash commands as math symbols."
};

/**
 * LaTeX document commands that should NEVER be used
 */
export const FORBIDDEN_LATEX_COMMANDS = [
  "\\begin{}",
  "\\end{}",
  "\\item",
  "\\itemize",
  "\\enumerate",
  "\\documentclass",
  "\\usepackage",
  "\\section",
  "\\subsection"
];

/**
 * Helper function to validate formatting
 */
export function validateFormatting(content: any): {
  valid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check speech text
  if (content.speech?.text) {
    const speechText = content.speech.text;

    // Check for LaTeX
    if (speechText.includes('$') || speechText.includes('\\')) {
      errors.push("Speech text contains LaTeX symbols");
    }

    // Check for markdown
    if (speechText.includes('**') || speechText.includes('###')) {
      errors.push("Speech text contains markdown");
    }

    // Check for hyphens in common acronyms
    if (speechText.includes('SOH-CAH-TOA')) {
      warnings.push("Speech text contains hyphenated acronym (use spaces)");
    }
  }

  // Check display content
  if (content.display?.content) {
    const displayContent = content.display.content;

    // Check for forbidden LaTeX commands
    FORBIDDEN_LATEX_COMMANDS.forEach(cmd => {
      if (displayContent.includes(cmd)) {
        errors.push(`Display content contains forbidden LaTeX command: ${cmd}`);
      }
    });

    // Check for mixed dollar signs
    const dollarPattern = /\$[^$]*\\\$[^$]*\$/;
    if (dollarPattern.test(displayContent)) {
      errors.push("Display content mixes currency and LaTeX delimiters");
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Format converter for different output contexts
 */
export class FormatConverter {
  /**
   * Convert LaTeX to plain text for speech
   */
  static latexToPlainText(latex: string): string {
    return latex
      // Remove dollar signs
      .replace(/\$/g, '')
      // Convert fractions
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1 over $2')
      // Convert powers
      .replace(/\^(\d+)/g, ' to the power of $1')
      .replace(/\^\{([^}]+)\}/g, ' to the power of $1')
      // Convert square root
      .replace(/\\sqrt\{([^}]+)\}/g, 'square root of $1')
      // Convert Greek letters
      .replace(/\\theta/g, 'theta')
      .replace(/\\alpha/g, 'alpha')
      .replace(/\\beta/g, 'beta')
      .replace(/\\gamma/g, 'gamma')
      .replace(/\\pi/g, 'pi')
      // Convert trig functions
      .replace(/\\sin/g, 'sine')
      .replace(/\\cos/g, 'cosine')
      .replace(/\\tan/g, 'tangent')
      // Convert operators
      .replace(/\\times/g, 'times')
      .replace(/\\div/g, 'divided by')
      .replace(/\\pm/g, 'plus or minus')
      // Convert degree symbol
      .replace(/\\circ/g, ' degrees')
      .replace(/°/g, ' degrees')
      // Remove other backslashes
      .replace(/\\/g, '')
      // Clean up extra spaces
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * Ensure proper JSON escaping for LaTeX
   */
  static escapeForJSON(latex: string): string {
    // Already properly escaped with single backslashes
    return latex;
  }

  /**
   * Clean markdown from text
   */
  static removeMarkdown(text: string): string {
    return text
      .replace(/\*\*([^*]+)\*\*/g, '$1')  // Bold
      .replace(/\*([^*]+)\*/g, '$1')      // Italic
      .replace(/###\s*/g, '')              // Headers
      .replace(/##\s*/g, '')
      .replace(/#\s*/g, '')
      .replace(/^-\s*/gm, '')              // Lists
      .replace(/^\d+\.\s*/gm, '')          // Numbered lists
      .trim();
  }
}

/**
 * Formatting presets for different contexts
 */
export const FORMATTING_PRESETS = {
  speechOnly: {
    allowMarkdown: false,
    allowLatex: false,
    allowHyphens: false,
    convertAcronyms: true
  },

  displayOnly: {
    allowMarkdown: true,
    allowLatex: true,
    allowHyphens: true,
    convertAcronyms: false
  },

  jsonOutput: {
    singleBackslash: true,
    escapeQuotes: true,
    validateStructure: true
  }
};

/**
 * Export all formatting utilities
 */
export default {
  FORMATTING_RULES,
  JSON_ESCAPING_CRITICAL,
  FORBIDDEN_LATEX_COMMANDS,
  validateFormatting,
  FormatConverter,
  FORMATTING_PRESETS
};