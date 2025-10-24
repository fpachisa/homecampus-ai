/**
 * Safe Range Calculator for Math Tool Visualizers
 *
 * Protects against extreme values that can crash rendering by:
 * - Filtering out NaN/Infinity values
 * - Clamping values to reasonable absolute maximums
 * - Limiting the total span of the range
 * - Providing fallback ranges when data is invalid
 */

export interface SafeRangeOptions {
  maxSpan?: number;       // Maximum allowed range span (default: 1000)
  maxAbsValue?: number;   // Maximum absolute value allowed (default: 10000)
  padding?: number;       // Padding factor for range (default: 0.2)
  minRange?: number;      // Minimum range to ensure visibility (default: 2)
}

/**
 * Calculate a safe y-range from a set of y-values
 *
 * @param yValues - Array of y-values to calculate range from
 * @param options - Configuration options for safety bounds
 * @returns [yMin, yMax] tuple with safe rendering bounds
 */
export function calculateSafeYRange(
  yValues: number[],
  options?: SafeRangeOptions
): [number, number] {
  const maxSpan = options?.maxSpan ?? 1000;
  const maxAbsValue = options?.maxAbsValue ?? 10000;
  const paddingFactor = options?.padding ?? 0.2;
  const minRange = options?.minRange ?? 2;

  // Filter out invalid values (NaN, Infinity, -Infinity)
  const validValues = yValues.filter(y => isFinite(y));

  // Fallback if no valid values
  if (validValues.length === 0) {
    console.warn('[safeRangeCalculator] No valid y-values provided, using fallback range [-10, 10]');
    return [-10, 10];
  }

  // Clamp extreme values to prevent overflow
  const clampedValues = validValues.map(y => {
    if (Math.abs(y) > maxAbsValue) {
      console.warn(`[safeRangeCalculator] Extreme value detected: ${y}, clamping to ±${maxAbsValue}`);
      return Math.max(-maxAbsValue, Math.min(maxAbsValue, y));
    }
    return y;
  });

  // Calculate initial range
  let min = Math.min(...clampedValues);
  let max = Math.max(...clampedValues);

  // Check if span is too large
  if (max - min > maxSpan) {
    console.warn(`[safeRangeCalculator] Range span too large: ${(max - min).toFixed(2)}, capping to ${maxSpan}`);
    const center = (max + min) / 2;
    min = center - maxSpan / 2;
    max = center + maxSpan / 2;
  }

  // Ensure minimum range for visibility
  const currentRange = max - min;
  if (currentRange < minRange) {
    const center = (max + min) / 2;
    min = center - minRange / 2;
    max = center + minRange / 2;
  }

  // Add padding
  const range = max - min;
  const padding = Math.max(range * paddingFactor, minRange * 0.5);

  return [min - padding, max + padding];
}

/**
 * Check if a normal slope is effectively infinite (tangent slope near zero)
 *
 * @param tangentSlope - The slope of the tangent line
 * @param threshold - Threshold for considering slope as zero (default: 0.001)
 * @returns true if normal slope would be infinite/very large
 */
export function isNormalSlopeInfinite(tangentSlope: number, threshold: number = 0.001): boolean {
  return Math.abs(tangentSlope) < threshold;
}

/**
 * Calculate a safe normal slope, capping at a maximum value
 *
 * @param tangentSlope - The slope of the tangent line
 * @param maxNormalSlope - Maximum allowed normal slope (default: 1000)
 * @returns Safe normal slope value
 */
export function calculateSafeNormalSlope(tangentSlope: number, maxNormalSlope: number = 1000): number {
  if (tangentSlope === 0) {
    console.warn('[safeRangeCalculator] Tangent slope is 0, normal line is vertical');
    return maxNormalSlope; // Effectively vertical
  }

  const normalSlope = -1 / tangentSlope;

  if (Math.abs(normalSlope) > maxNormalSlope) {
    console.warn(`[safeRangeCalculator] Normal slope too large: ${normalSlope.toFixed(2)}, capping to ±${maxNormalSlope}`);
    return normalSlope > 0 ? maxNormalSlope : -maxNormalSlope;
  }

  return normalSlope;
}
