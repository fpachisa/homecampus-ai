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
 * Simple function to detect only basic fractions and preserve everything else
 * This avoids complex regex and keeps the solution maintainable
 */
function processTextWithBasicMath(text: string): TextSegment[] {
  const segments: TextSegment[] = [];

  // Only detect simple fractions like 3/4, 1/2, etc. - nothing complex
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

    // Add the fraction as math
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

  // If no fractions found, return the entire text as one segment
  if (segments.length === 0) {
    segments.push({ type: 'text', content: text });
  }

  return segments;
}

export default MathText;