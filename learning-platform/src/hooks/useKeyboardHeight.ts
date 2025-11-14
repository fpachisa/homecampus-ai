import { useState, useEffect } from 'react';

export const useKeyboardHeight = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // @ts-ignore - visualViewport not in default types
    const vv = window.visualViewport;
    if (!vv) return;

    const handleResize = () => {
      // @ts-ignore
      const viewport = window.visualViewport;
      if (!viewport) return;

      const height = window.innerHeight - viewport.height;
      setKeyboardHeight(height);
      setIsKeyboardOpen(height > 100);
    };

    // @ts-ignore
    window.visualViewport.addEventListener('resize', handleResize);
    // @ts-ignore
    window.visualViewport.addEventListener('scroll', handleResize);

    handleResize();

    return () => {
      // @ts-ignore
      if (window.visualViewport) {
        // @ts-ignore
        window.visualViewport.removeEventListener('resize', handleResize);
        // @ts-ignore
        window.visualViewport.removeEventListener('scroll', handleResize);
      }
    };
  }, []);

  return { keyboardHeight, isKeyboardOpen };
};
