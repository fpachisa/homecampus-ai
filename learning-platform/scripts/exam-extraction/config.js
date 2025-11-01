/**
 * Configuration for AI providers
 * Set AI_PROVIDER environment variable to choose: "anthropic" or "gemini"
 */

export const AI_CONFIG = {
  provider: process.env.AI_PROVIDER || 'anthropic', // Default to Anthropic

  anthropic: {
    apiKey: process.env.VITE_CLAUDE_API_KEY || process.env.ANTHROPIC_API_KEY,
    model: 'claude-sonnet-4-5-20250929'
  },

  gemini: {
    apiKey: process.env.VITE_GEMINI_API_KEY,
    model: 'gemini-2.5-flash'
  }
};

export function getProviderName() {
  return AI_CONFIG.provider === 'gemini' ? 'Gemini Flash 2.5' : 'Claude Sonnet 4';
}

export function validateConfig() {
  if (AI_CONFIG.provider === 'gemini') {
    if (!AI_CONFIG.gemini.apiKey) {
      throw new Error('VITE_GEMINI_API_KEY environment variable not set');
    }
  } else {
    if (!AI_CONFIG.anthropic.apiKey) {
      throw new Error('VITE_CLAUDE_API_KEY or ANTHROPIC_API_KEY environment variable not set');
    }
  }
}
