import { useState, useEffect } from 'react';

/**
 * Hook to detect user's motion preference from system settings
 *
 * Returns true if user prefers reduced motion (accessibility setting).
 * Respects prefers-reduced-motion media query.
 *
 * Use this to disable or reduce animations for users who:
 * - Have vestibular disorders
 * - Get motion sickness from animations
 * - Prefer a calmer UI experience
 *
 * @example
 * const prefersReducedMotion = useReducedMotion();
 *
 * <motion.div
 *   animate={{ y: prefersReducedMotion ? 0 : 20 }}
 *   transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
 * >
 *   {children}
 * </motion.div>
 */
export const useReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if window is available (SSR safety)
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    // Create media query
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Handler for when preference changes
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Listen for changes (user can toggle in system settings)
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
};
