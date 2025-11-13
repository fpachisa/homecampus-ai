/**
 * Date Utilities
 *
 * Centralized date formatting to ensure consistency across the app.
 * CRITICAL: All date strings for stats tracking MUST use local timezone
 * to avoid mismatches between sessionHistory and weeklyStats.
 */

/**
 * Get local date string in YYYY-MM-DD format
 * Uses LOCAL timezone (not UTC) for consistency with user's location
 *
 * @param date - Date to format (defaults to now)
 * @returns Date string in YYYY-MM-DD format
 *
 * @example
 * getLocalDateString(new Date('2025-11-13T15:30:00')) // "2025-11-13"
 */
export function getLocalDateString(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Get start of day in local timezone
 */
export function getLocalStartOfDay(date: Date = new Date()): Date {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

/**
 * Get end of day in local timezone
 */
export function getLocalEndOfDay(date: Date = new Date()): Date {
  const d = new Date(date);
  d.setHours(23, 59, 59, 999);
  return d;
}

/**
 * Check if two dates are the same day (local timezone)
 */
export function isSameLocalDay(date1: Date, date2: Date): boolean {
  return getLocalDateString(date1) === getLocalDateString(date2);
}

/**
 * Get date N days ago (local timezone)
 */
export function getDateDaysAgo(days: number, from: Date = new Date()): Date {
  const d = new Date(from);
  d.setDate(d.getDate() - days);
  return d;
}

/**
 * Parse YYYY-MM-DD string to Date (local timezone)
 */
export function parseLocalDateString(dateStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(year, month - 1, day);
}
