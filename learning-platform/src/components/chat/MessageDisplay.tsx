/**
 * MessageDisplay - Component for rendering chat messages with markdown and LaTeX
 * Uses the existing MathText component for consistent rendering across the app
 */

import React from 'react';
import MathText from '../MathText';

interface MessageDisplayProps {
  content: string;
  className?: string;
}

export const MessageDisplay: React.FC<MessageDisplayProps> = ({ content, className = '' }) => {
  return (
    <div className={`message-display ${className}`}>
      <MathText>{content}</MathText>
    </div>
  );
};
