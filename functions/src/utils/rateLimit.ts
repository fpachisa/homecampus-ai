/**
 * Rate Limiting Utility for AI Proxy Functions
 * Prevents abuse by limiting requests per user
 */

import { db } from '../config/firebase';
import { HttpsError } from 'firebase-functions/v2/https';

export interface RateLimitConfig {
  maxRequestsPerMinute: number;
  maxRequestsPerDay: number;
  maxInputLength: number;
}

export const DEFAULT_RATE_LIMITS: RateLimitConfig = {
  maxRequestsPerMinute: 10,  // 10 requests per minute
  maxRequestsPerDay: 200,    // 200 requests per day
  maxInputLength: 1000,      // 1000 characters max input
};

interface RateLimitDoc {
  minuteRequests: number[];
  dayRequests: number;
  dayStart: number;
  lastUpdated: number;
}

/**
 * Check and update rate limits for a user
 * Throws HttpsError if rate limit exceeded
 */
export async function checkRateLimit(
  uid: string,
  config: RateLimitConfig = DEFAULT_RATE_LIMITS
): Promise<void> {
  const now = Date.now();
  const rateLimitRef = db.collection('rateLimits').doc(uid);

  // Use transaction for atomic read-modify-write
  await db.runTransaction(async (transaction) => {
    const doc = await transaction.get(rateLimitRef);

    let data: RateLimitDoc;
    if (!doc.exists) {
      // Initialize new rate limit document
      data = {
        minuteRequests: [],
        dayRequests: 0,
        dayStart: now,
        lastUpdated: now,
      };
    } else {
      data = doc.data() as RateLimitDoc;
    }

    // Reset daily counter if new day (24 hours passed)
    if (now - data.dayStart > 86400000) {
      data.dayRequests = 0;
      data.dayStart = now;
    }

    // Filter out requests older than 1 minute
    data.minuteRequests = data.minuteRequests.filter(
      (timestamp) => now - timestamp < 60000
    );

    // Check per-minute limit
    if (data.minuteRequests.length >= config.maxRequestsPerMinute) {
      const oldestRequest = Math.min(...data.minuteRequests);
      const waitTime = Math.ceil((60000 - (now - oldestRequest)) / 1000);
      throw new HttpsError(
        'resource-exhausted',
        `Rate limit exceeded. Please wait ${waitTime} seconds before trying again.`
      );
    }

    // Check daily limit
    if (data.dayRequests >= config.maxRequestsPerDay) {
      throw new HttpsError(
        'resource-exhausted',
        'Daily request limit reached. Please try again tomorrow.'
      );
    }

    // Update counters
    data.minuteRequests.push(now);
    data.dayRequests++;
    data.lastUpdated = now;

    transaction.set(rateLimitRef, data);
  });
}

/**
 * Validate input length
 * Throws HttpsError if input exceeds limit
 */
export function validateInputLength(
  input: string,
  maxLength: number = DEFAULT_RATE_LIMITS.maxInputLength
): void {
  if (input.length > maxLength) {
    throw new HttpsError(
      'invalid-argument',
      `Input too long. Maximum ${maxLength} characters allowed.`
    );
  }
}

/**
 * Check if input looks like junk/spam
 * Returns true if input appears to be spam
 */
export function isLikelySpam(input: string): boolean {
  // Repeated characters (more than 10 in a row)
  if (/(.)\1{10,}/.test(input)) return true;

  // Mostly non-alphanumeric (less than 30% alphanumeric for longer inputs)
  const alphanumeric = input.replace(/[^a-zA-Z0-9]/g, '').length;
  if (input.length > 20 && alphanumeric / input.length < 0.3) return true;

  // Random keyboard mashing patterns
  if (/[asdfghjkl]{8,}|[qwerty]{6,}|[zxcvbnm]{6,}/i.test(input)) return true;

  return false;
}

/**
 * Full input validation - checks length and spam
 */
export function validateInput(
  input: string,
  config: RateLimitConfig = DEFAULT_RATE_LIMITS
): void {
  if (!input || typeof input !== 'string') {
    throw new HttpsError('invalid-argument', 'Input is required');
  }

  validateInputLength(input, config.maxInputLength);

  if (isLikelySpam(input)) {
    throw new HttpsError(
      'invalid-argument',
      'Invalid input detected. Please enter a valid response.'
    );
  }
}

/**
 * Get rate limit status for a user (for debugging/monitoring)
 */
export async function getRateLimitStatus(uid: string): Promise<{
  minuteRequestsRemaining: number;
  dayRequestsRemaining: number;
  resetInSeconds: number;
}> {
  const now = Date.now();
  const doc = await db.collection('rateLimits').doc(uid).get();

  if (!doc.exists) {
    return {
      minuteRequestsRemaining: DEFAULT_RATE_LIMITS.maxRequestsPerMinute,
      dayRequestsRemaining: DEFAULT_RATE_LIMITS.maxRequestsPerDay,
      resetInSeconds: 0,
    };
  }

  const data = doc.data() as RateLimitDoc;

  // Filter minute requests
  const recentRequests = data.minuteRequests.filter(
    (timestamp) => now - timestamp < 60000
  );

  // Calculate reset time
  const oldestRequest = recentRequests.length > 0
    ? Math.min(...recentRequests)
    : now;
  const resetInSeconds = Math.max(0, Math.ceil((60000 - (now - oldestRequest)) / 1000));

  // Check if day needs reset
  const effectiveDayRequests = now - data.dayStart > 86400000 ? 0 : data.dayRequests;

  return {
    minuteRequestsRemaining: DEFAULT_RATE_LIMITS.maxRequestsPerMinute - recentRequests.length,
    dayRequestsRemaining: DEFAULT_RATE_LIMITS.maxRequestsPerDay - effectiveDayRequests,
    resetInSeconds,
  };
}
