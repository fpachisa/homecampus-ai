import React from 'react';
import MathRenderer from './MathRenderer';
import { marked } from 'marked';

interface MathTextProps {
  children: string;
  className?: string;
}

/**
 * Component that renders text with markdown formatting and basic math expressions
 * Uses a simple approach: parse markdown first, then handle basic fractions only
 * More complex math should be handled by the AI service using proper LaTeX notation
 */
const MathText: React.FC<MathTextProps> = ({ children, className = '' }) => {
  // Configure marked for inline rendering only
  marked.setOptions({
    breaks: false,
    gfm: true,
  });

  // For now, let's just handle markdown and let the existing math detection work
  // If the text contains basic fractions, we'll detect those simply
  const processedContent = processTextWithBasicMath(children);

  return (
    <span className={className}>
      {processedContent.map((segment, index) => (
        <React.Fragment key={index}>
          {segment.type === 'math' ? (
            <MathRenderer inline>{segment.content}</MathRenderer>
          ) : (
            <span dangerouslySetInnerHTML={{ __html: marked.parseInline(segment.content) }} />
          )}
        </React.Fragment>
      ))}
    </span>
  );
};

interface TextSegment {
  type: 'text' | 'math';
  content: string;
}

/**
 * Smart detection: LaTeX (with or without $) → Plain fractions → Plain text
 * Handles: $\frac{1}{3}$ (delimited LaTeX), 4 \div 1/3 (bare LaTeX), 1/2 (plain), $3.50 (money)
 */
function processTextWithBasicMath(text: string): TextSegment[] {
  const segments: TextSegment[] = [];
  let workingText = text;
  let currentIndex = 0;

  // Step 1: Detect LaTeX notation $\...$ (must contain backslash to avoid matching money)
  // Matches both $\frac{1}{2}$ and $3 \times 2 = 6$ patterns
  const latexPattern = /\$[^$]*\\[a-zA-Z]+[^$]*\$/g;
  let latexMatch: RegExpExecArray | null;

  while ((latexMatch = latexPattern.exec(workingText)) !== null) {
    const matchStart = latexMatch.index;
    const matchEnd = matchStart + latexMatch[0].length;

    // Add text before LaTeX
    if (matchStart > currentIndex) {
      const textBefore = workingText.substring(currentIndex, matchStart);
      segments.push(...processBareLatexAndFractions(textBefore));
    }

    // Add LaTeX (strip $ delimiters)
    const latexContent = latexMatch[0].slice(1, -1); // Remove $ ... $
    segments.push({ type: 'math', content: latexContent });

    currentIndex = matchEnd;
  }

  // Add remaining text and check for bare LaTeX commands and plain fractions
  if (currentIndex < workingText.length) {
    const remainingText = workingText.substring(currentIndex);
    segments.push(...processBareLatexAndFractions(remainingText));
  }

  // If no math found, ensure we have at least one segment
  if (segments.length === 0) {
    segments.push({ type: 'text', content: text });
  }

  return segments;
}

/**
 * Step 1.5: Process bare LaTeX commands (without $ delimiters) and plain fractions
 * Handles: 4 \div 1/3, \times, \frac{1}{2}, etc.
 */
function processBareLatexAndFractions(text: string): TextSegment[] {
  const segments: TextSegment[] = [];

  // Detect bare LaTeX commands: \div, \times, \frac{}{}, etc.
  // Match from first backslash to either next backslash or end of math expression
  const bareLatexPattern = /\\[a-zA-Z]+(?:\{[^}]*\}\{[^}]*\})?/g;

  let currentIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = bareLatexPattern.exec(text)) !== null) {
    // Add text before the LaTeX command (may contain plain fractions)
    if (match.index > currentIndex) {
      const textBefore = text.substring(currentIndex, match.index);
      segments.push(...processPlainFractions(textBefore));
    }

    // Add the LaTeX command as math
    segments.push({ type: 'math', content: match[0] });

    currentIndex = match.index + match[0].length;
  }

  // Add remaining text (may contain plain fractions)
  if (currentIndex < text.length) {
    const remainingText = text.substring(currentIndex);
    segments.push(...processPlainFractions(remainingText));
  }

  // If no LaTeX found, just process as plain fractions
  if (segments.length === 0) {
    return processPlainFractions(text);
  }

  return segments;
}

/**
 * Step 2: Process plain fractions like 1/2, 3/4 (no LaTeX delimiters)
 */
function processPlainFractions(text: string): TextSegment[] {
  const segments: TextSegment[] = [];
  const simpleFractionPattern = /(\b\d+\/\d+\b)/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = simpleFractionPattern.exec(text)) !== null) {
    // Add text before the fraction
    if (match.index > lastIndex) {
      const textBefore = text.substring(lastIndex, match.index);
      if (textBefore) {
        segments.push({ type: 'text', content: textBefore });
      }
    }

    // Convert plain fraction to LaTeX and add as math
    const fraction = match[1];
    const latex = fraction.replace(/(\d+)\/(\d+)/, '\\frac{$1}{$2}');
    segments.push({ type: 'math', content: latex });

    lastIndex = match.index + match[1].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    const remainingText = text.substring(lastIndex);
    if (remainingText) {
      segments.push({ type: 'text', content: remainingText });
    }
  }

  // If no fractions found, return the text as-is
  if (segments.length === 0) {
    segments.push({ type: 'text', content: text });
  }

  return segments;
}

export default MathText;