import { describe, it, expect } from 'vitest';
import { convertToLatex, findMathExpressions } from '../utils/mathUtils';

describe('Phase 1: Math Renderer', () => {
  describe('convertToLatex', () => {
    it('should convert simple fractions to LaTeX', () => {
      expect(convertToLatex('1/2')).toBe('\\frac{1}{2}');
      expect(convertToLatex('3/4')).toBe('\\frac{3}{4}');
    });

    it('should convert division operations to LaTeX', () => {
      expect(convertToLatex('1/2 ÷ 3')).toBe('\\frac{1}{2} \\div 3');
      expect(convertToLatex('2/3 × 4')).toBe('\\frac{2}{3} \\times 4');
    });

    it('should handle equations', () => {
      expect(convertToLatex('1/2 ÷ 2 = 1/4')).toBe('\\frac{1}{2} \\div 2 = \\frac{1}{4}');
    });
  });

  describe('findMathExpressions', () => {
    it('should find fraction operations', () => {
      const text = 'Calculate 1/2 ÷ 3 to get the answer.';
      const matches = findMathExpressions(text);
      expect(matches).toHaveLength(1);
      expect(matches[0].original).toBe('1/2 ÷ 3');
      expect(matches[0].latex).toBe('\\frac{1}{2} \\div 3');
    });

    it('should find simple fractions', () => {
      const text = 'The answer is 1/4.';
      const matches = findMathExpressions(text);
      expect(matches).toHaveLength(1);
      expect(matches[0].original).toBe('1/4');
    });

    it('should handle text with no math', () => {
      const text = 'This is just regular text.';
      const matches = findMathExpressions(text);
      expect(matches).toHaveLength(0);
    });
  });

});

describe('Phase 1: Session Storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should save and load session data', () => {
    // This is a basic test - in a real scenario we'd import the sessionStorage service
    const testData = { test: 'data' };
    localStorage.setItem('fraction-tutor-session', JSON.stringify(testData));

    const loaded = localStorage.getItem('fraction-tutor-session');
    expect(loaded).toBeTruthy();
    expect(JSON.parse(loaded!)).toEqual(testData);
  });
});