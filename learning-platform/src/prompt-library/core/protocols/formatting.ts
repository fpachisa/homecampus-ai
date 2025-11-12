/**
 * Universal Formatting Rules - SIMPLIFIED Unicode-First Approach
 *
 * PHILOSOPHY: Use Unicode characters whenever possible, LaTeX only when necessary
 * This eliminates 80% of JSON escaping issues while maintaining full mathematical expressiveness
 */

import type { FormattingRules } from '../../types/prompts';

/**
 * UNICODE CHARACTER REFERENCE
 * Copy-paste these characters directly into your responses
 */
export const UNICODE_CHARS = {
  // Greek letters (lowercase)
  greek: {
    theta: 'θ',
    alpha: 'α',
    beta: 'β',
    gamma: 'γ',
    delta: 'δ',
    epsilon: 'ε',
    zeta: 'ζ',
    eta: 'η',
    lambda: 'λ',
    mu: 'μ',
    pi: 'π',
    rho: 'ρ',
    sigma: 'σ',
    tau: 'τ',
    phi: 'φ',
    omega: 'ω'
  },

  // Greek letters (uppercase)
  greekUpper: {
    Delta: 'Δ',
    Theta: 'Θ',
    Lambda: 'Λ',
    Sigma: 'Σ',
    Phi: 'Φ',
    Omega: 'Ω'
  },

  // Mathematical operators
  operators: {
    times: '×',
    divide: '÷',
    plusMinus: '±',
    minusPlus: '∓',
    sqrt: '√',
    infinity: '∞',
    approx: '≈',
    notEqual: '≠',
    lessEqual: '≤',
    greaterEqual: '≥',
    equivalent: '≡',
    proportional: '∝'
  },

  // Superscripts (for simple exponents)
  superscripts: {
    '0': '⁰',
    '1': '¹',
    '2': '²',
    '3': '³',
    '4': '⁴',
    '5': '⁵',
    '6': '⁶',
    '7': '⁷',
    '8': '⁸',
    '9': '⁹',
    '-': '⁻',
    '+': '⁺'
  },

  // Subscripts
  subscripts: {
    '0': '₀',
    '1': '₁',
    '2': '₂',
    '3': '₃',
    '4': '₄',
    '5': '₅',
    '6': '₆',
    '7': '₇',
    '8': '₈',
    '9': '₉'
  },

  // Common fractions (Unicode has these built-in!)
  fractions: {
    half: '½',
    third: '⅓',
    twoThirds: '⅔',
    quarter: '¼',
    threeQuarters: '¾',
    fifth: '⅕',
    twoFifths: '⅖',
    threeFifths: '⅗',
    fourFifths: '⅘',
    sixth: '⅙',
    fiveSixths: '⅚',
    eighth: '⅛',
    threeEighths: '⅜',
    fiveEighths: '⅝',
    sevenEighths: '⅞'
  },

  // Other useful symbols
  misc: {
    degree: '°',
    prime: '′',
    doublePrime: '″',
    bullet: '•',
    ellipsis: '…',
    therefore: '∴',
    because: '∵',
    angle: '∠',
    parallel: '∥',
    perpendicular: '⊥'
  }
};

/**
 * RULE 1: Unicode First - Simple Examples
 * Keep this documentation visible to AI agents
 */
export const UNICODE_FIRST_RULE = {
  rule: "ALWAYS use Unicode characters when available - NO LaTeX needed!",
  examples: {
    correct: [
      "The angle θ = 30°",
      "Calculate x² + 3x - 4",
      "The ratio is ½",
      "Use the formula: Area = πr²",
      "Solve: x × y ÷ 2 = 10"
    ],
    incorrect: [
      "The angle $\\theta$ = 30$^{\\circ}$",  // DON'T DO THIS - use Unicode θ and °
      "Calculate $x^2$ + 3x - 4",              // DON'T DO THIS - use Unicode x²
      "The ratio is $\\frac{1}{2}$"            // DON'T DO THIS - use Unicode ½
    ]
  },
  reason: "Unicode characters render instantly, no KaTeX parsing, no JSON escaping issues"
};

/**
 * SIMPLIFIED FORMATTING RULES - Compatible with FormattingRules type
 */
export const FORMATTING_RULES: FormattingRules = {
  
  //RULE 1: Unicode First - Simple Examples
  unicode: {
    rule: "ALWAYS use Unicode characters when available. DO NOT use LaTeX where unicode is available.",
    examples: {
      correct: [
        "The angle θ = 30°",
        "Calculate x² + 3x - 4",
        "Use the formula: Area = πr²",
        "Solve: x × y ÷ 2 = 10"
      ],
      incorrect: [
        "The angle $\\theta$ = 30$^{\\circ}$",  // DON'T DO THIS - use Unicode θ and °
        "Calculate $x^2$ + 3x - 4",              // DON'T DO THIS - use Unicode x²
      ]
    },
    reason: "Unicode characters render instantly, no KaTeX parsing, no JSON escaping issues"
  },
  
  
  // RULE 2: LaTeX Only When ABSOLUTELY Necessary and for fractions
  latex: {
    mathExpressions: {
      rule: "Use $...$ LaTeX ONLY when Unicode or Markdown cannot represent the expression and is ABSOLUTELY ESSENTIAL. NEVER use LaTeX for plain text or unicode symbols.",
      examples: {
        correct: [
          "All fractions: $\\frac{1}{2}$, $\\frac{13}{27}$ or $\\frac{x+1}{2x-3}$",
          "Complex expressions: $\\sin^2(θ) + \\cos^2(θ) = 1$",
          "Nested operations: $\\sqrt{x^2 + y^2}$"
        ],
        incorrect: [
          "Simple variables: $x$, $y$, $n$ (use plain text: x, y, n)",
          "Greek letters: $\\theta$, $\\alpha$, $\\pi$ (use Unicode: θ, α, π)",
          "Operators: $\\times$, $\\div$, $\\pm$ (use Unicode: ×, ÷, ±)",
          "Superscripts: $x^2$, $x^3$ (use Unicode: x², x³)"
        ]
      },
      reason: "Unicode handles simple cases without JSON escaping complexity"
    },
    jsonEscaping: {
      rule: "In JSON: Use ONE backslash for LaTeX commands",
      examples: {
        correct: '{"content": "Solve $\\frac{x}{2} = 5$"}',
        incorrect: '{"content": "Solve $\\\\frac{x}{2} = 5$"} // TWO backslashes breaks rendering'
      },
      reason: "JSON.parse() keeps single backslash as-is, KaTeX renders it correctly"
    },
    generalGuideline: "Use Unicode for simple symbols (80% of cases), LaTeX only for complex expressions (20% of cases)"
  },

  // RULE 3: Speech vs Display (unchanged)
  speech: {
    format: {
      rule: "PLAIN TEXT only - no markdown, no LaTeX, no Unicode symbols",
      examples: {
        correct: "Let's find the angle theta. It equals 30 degrees.",
        incorrect: "Let's find the angle θ. It equals 30°."  // Unicode symbols don't speak well
      },
      reason: "Text-to-speech engines need plain text for proper pronunciation"
    }
  },

  display: {
    format: {
      rule: "Use Unicode first, markdown for emphasis and structure, LaTeX only when absolutely needed",
      examples: {
        correct: "### Step 1\n\nWe have θ = 30° and need to find x.\n\nUsing the formula: x = $\\frac{opposite}{hypotenuse}$"
      },
      reason: "Display is rendered visually with full Unicode, LaTeX, and markdown support"
    }
  }
};

/**
 * Quick Decision Tree for AI
 */
export const FORMATTING_DECISION_TREE = `
┌─────────────────────────────────────────┐
│ Do I need to write a math expression?  │
└─────────────┬───────────────────────────┘
              │
              ├─→ Is it a simple symbol? (Greek letter, operator, superscript)
              │   └─→ YES: Use Unicode character (θ, ×, ², °)
              │   └─→ NO: Continue ↓
              │
              ├─→ Is it a common fraction? (1/2, 1/4, 3/4)
              │   └─→ YES: Use Unicode character (½, ¼, ¾)
              │   └─→ NO: Continue ↓
              │
              └─→ Is it a complex expression? (custom fractions, nested operations)
                  └─→ YES: Use LaTeX with $...$ delimiters
`;

/**
 * Helper function to convert simple LaTeX to Unicode
 * Use this to post-process AI responses if needed
 */
export function convertSimpleLatexToUnicode(text: string): string {
  return text
    // Greek letters
    .replace(/\\theta\b/g, 'θ')
    .replace(/\\alpha\b/g, 'α')
    .replace(/\\beta\b/g, 'β')
    .replace(/\\gamma\b/g, 'γ')
    .replace(/\\pi\b/g, 'π')
    .replace(/\\delta\b/g, 'δ')
    .replace(/\\epsilon\b/g, 'ε')
    .replace(/\\lambda\b/g, 'λ')
    .replace(/\\mu\b/g, 'μ')
    .replace(/\\phi\b/g, 'φ')
    .replace(/\\omega\b/g, 'ω')

    // Operators
    .replace(/\\times\b/g, '×')
    .replace(/\\div\b/g, '÷')
    .replace(/\\pm\b/g, '±')
    .replace(/\\approx\b/g, '≈')
    .replace(/\\neq\b/g, '≠')
    .replace(/\\leq\b/g, '≤')
    .replace(/\\geq\b/g, '≥')

    // Degree symbol
    .replace(/\^\{\\circ\}/g, '°')
    .replace(/\\circ/g, '°')

    // Simple superscripts (only single digits)
    .replace(/\^2\b/g, '²')
    .replace(/\^3\b/g, '³')
    .replace(/\^\{2\}/g, '²')
    .replace(/\^\{3\}/g, '³')

    // Simple square roots (only with numbers)
    .replace(/\\sqrt\{(\d+)\}/g, '√$1')

    // Common fractions
    .replace(/\\frac\{1\}\{2\}/g, '½')
    .replace(/\\frac\{1\}\{4\}/g, '¼')
    .replace(/\\frac\{3\}\{4\}/g, '¾')
    .replace(/\\frac\{1\}\{3\}/g, '⅓')
    .replace(/\\frac\{2\}\{3\}/g, '⅔');
}

/**
 * Legacy compatibility - FormatConverter class
 */
export class FormatConverter {
  /**
   * Convert LaTeX to plain text for speech
   */
  static latexToPlainText(latex: string): string {
    return latex
      // Remove dollar signs
      .replace(/\$/g, '')
      // Convert Unicode to plain text
      .replace(/θ/g, 'theta')
      .replace(/α/g, 'alpha')
      .replace(/β/g, 'beta')
      .replace(/π/g, 'pi')
      .replace(/×/g, 'times')
      .replace(/÷/g, 'divided by')
      .replace(/±/g, 'plus or minus')
      .replace(/²/g, ' squared')
      .replace(/³/g, ' cubed')
      .replace(/°/g, ' degrees')
      .replace(/½/g, 'one half')
      .replace(/¼/g, 'one quarter')
      .replace(/¾/g, 'three quarters')
      // Convert LaTeX fractions
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1 over $2')
      // Convert powers
      .replace(/\^(\d+)/g, ' to the power of $1')
      .replace(/\^\{([^}]+)\}/g, ' to the power of $1')
      // Convert square root
      .replace(/\\sqrt\{([^}]+)\}/g, 'square root of $1')
      .replace(/√(\d+)/g, 'square root of $1')
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
      // Remove other backslashes
      .replace(/\\/g, '')
      // Clean up extra spaces
      .replace(/\s+/g, ' ')
      .trim();
  }

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

  static escapeForJSON(latex: string): string {
    return latex;
  }
}

/**
 * Validate formatting (simplified)
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

    // Check for Unicode math symbols that don't speak well
    if (/[θαβγπ×÷±²³]/.test(speechText)) {
      warnings.push("Speech text contains Unicode symbols that may not pronounce correctly");
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings
  };
}

/**
 * Formatting presets
 */
export const FORMATTING_PRESETS = {
  speechOnly: {
    allowMarkdown: false,
    allowLatex: false,
    allowUnicode: false,
    convertToPlainText: true
  },

  displayOnly: {
    allowMarkdown: true,
    allowLatex: true,
    allowUnicode: true,
    unicodeFirst: true
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
  UNICODE_CHARS,
  UNICODE_FIRST_RULE,
  FORMATTING_RULES,
  FORMATTING_DECISION_TREE,
  convertSimpleLatexToUnicode,
  validateFormatting,
  FormatConverter,
  FORMATTING_PRESETS
};
