import '@testing-library/jest-dom'

// Mock environment variables
Object.defineProperty(import.meta, 'env', {
  value: {
    VITE_GEMINI_API_KEY: 'test-api-key'
  },
  writable: true
})

// Mock DOM APIs that aren't available in jsdom
Object.defineProperty(window.Element.prototype, 'scrollIntoView', {
  value: vi.fn(),
  writable: true
})

// Global test utilities
global.console = {
  ...console,
  // Suppress console.log in tests unless explicitly needed
  log: vi.fn(),
  warn: vi.fn(),
  error: vi.fn()
}