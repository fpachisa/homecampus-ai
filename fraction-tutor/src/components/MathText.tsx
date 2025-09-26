import React from 'react';
import MathRenderer from './MathRenderer';
import { findMathExpressions, convertToLatex } from '../utils/mathUtils';

interface MathTextProps {
  children: string;
  className?: string;
}

/**
 * Component that automatically detects mathematical expressions in text
 * and renders them with proper formatting while preserving plain text
 */
const MathText: React.FC<MathTextProps> = ({ children, className = '' }) => {
  const mathMatches = findMathExpressions(children);

  // If no math expressions found, return plain text
  if (mathMatches.length === 0) {
    return <span className={className}>{children}</span>;
  }

  // Split text into segments with math and non-math parts
  const segments: Array<{ type: 'text' | 'math'; content: string }> = [];
  let lastIndex = 0;

  mathMatches.forEach(match => {
    // Add text before math expression
    if (match.startIndex > lastIndex) {
      segments.push({
        type: 'text',
        content: children.substring(lastIndex, match.startIndex)
      });
    }

    // Add math expression
    segments.push({
      type: 'math',
      content: convertToLatex(match.original)
    });

    lastIndex = match.endIndex;
  });

  // Add remaining text after last math expression
  if (lastIndex < children.length) {
    segments.push({
      type: 'text',
      content: children.substring(lastIndex)
    });
  }

  return (
    <span className={className}>
      {segments.map((segment, index) => (
        <React.Fragment key={index}>
          {segment.type === 'math' ? (
            <MathRenderer inline>{segment.content}</MathRenderer>
          ) : (
            segment.content
          )}
        </React.Fragment>
      ))}
    </span>
  );
};

export default MathText;