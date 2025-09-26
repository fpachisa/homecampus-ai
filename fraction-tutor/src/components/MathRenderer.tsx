import React, { useEffect, useRef } from 'react';
import katex from 'katex';

interface MathRendererProps {
  children: string;
  inline?: boolean;
  className?: string;
}

/**
 * Component that renders mathematical expressions using KaTeX
 * Gracefully falls back to plain text if rendering fails
 */
const MathRenderer: React.FC<MathRendererProps> = ({
  children,
  inline = true,
  className = ''
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const fallbackRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      katex.render(children, containerRef.current, {
        throwOnError: false,
        displayMode: !inline,
        strict: false,
        trust: false, // Security: don't allow arbitrary HTML
      });

      // Hide fallback if rendering succeeds
      if (fallbackRef.current) {
        fallbackRef.current.style.display = 'none';
      }
    } catch (error) {
      console.warn('KaTeX rendering failed:', error);

      // Show fallback text
      if (fallbackRef.current && containerRef.current) {
        containerRef.current.style.display = 'none';
        fallbackRef.current.style.display = 'inline';
      }
    }
  }, [children, inline]);

  return (
    <span className={`math-renderer ${className}`}>
      {/* KaTeX rendered content */}
      <span
        ref={containerRef}
        className="katex-container"
      />

      {/* Fallback plain text */}
      <span
        ref={fallbackRef}
        className="math-fallback text-gray-700 font-mono text-sm"
        style={{ display: 'none' }}
      >
        {children.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1/$2')
                .replace(/\\div/g, '÷')
                .replace(/\\times/g, '×')}
      </span>
    </span>
  );
};

export default MathRenderer;