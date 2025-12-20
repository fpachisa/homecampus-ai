/**
 * User-Friendly Error Messages
 * Maps technical errors to friendly messages for students
 */

export interface FriendlyError {
  title: string;
  message: string;
  suggestion?: string;
}

/**
 * Convert technical error to user-friendly message
 */
export function getFriendlyError(error: any): FriendlyError {
  const errorMessage = error?.message?.toLowerCase() || '';
  const errorCode = error?.code || '';

  // Rate limiting
  if (errorMessage.includes('rate limit') || errorCode === 'resource-exhausted') {
    return {
      title: "Taking a breather",
      message: "You're learning so fast! Let's slow down a bit.",
      suggestion: "Try again in a few seconds."
    };
  }

  // Authentication
  if (errorMessage.includes('unauthenticated') || errorMessage.includes('must be logged in')) {
    return {
      title: "Please sign in",
      message: "You need to be signed in to continue learning.",
      suggestion: "Sign in to save your progress."
    };
  }

  // Network errors
  if (errorMessage.includes('network') || errorMessage.includes('fetch') || errorMessage.includes('connection')) {
    return {
      title: "Connection issue",
      message: "Having trouble connecting to the internet.",
      suggestion: "Check your connection and try again."
    };
  }

  // Service unavailable
  if (errorMessage.includes('unavailable') || errorMessage.includes('503') || errorMessage.includes('502')) {
    return {
      title: "Be right back",
      message: "Our tutoring service is taking a quick break.",
      suggestion: "Please try again in a moment."
    };
  }

  // Timeout
  if (errorMessage.includes('timeout') || errorMessage.includes('timed out')) {
    return {
      title: "Taking too long",
      message: "That took longer than expected.",
      suggestion: "Let's try that again."
    };
  }

  // Input validation
  if (errorMessage.includes('invalid') || errorMessage.includes('input')) {
    return {
      title: "Hmm, that didn't work",
      message: "Something wasn't quite right with that.",
      suggestion: "Try rephrasing your answer."
    };
  }

  // Generic fallback - always friendly
  return {
    title: "Oops!",
    message: "Something unexpected happened.",
    suggestion: "Let's try that again."
  };
}

/**
 * Get a simple one-line friendly message
 */
export function getFriendlyMessage(error: any): string {
  const friendly = getFriendlyError(error);
  return friendly.suggestion
    ? `${friendly.message} ${friendly.suggestion}`
    : friendly.message;
}

/**
 * Check if error should show retry button
 */
export function shouldShowRetry(error: any): boolean {
  const errorMessage = error?.message?.toLowerCase() || '';

  // Don't show retry for auth errors
  if (errorMessage.includes('unauthenticated') || errorMessage.includes('must be logged in')) {
    return false;
  }

  return true;
}
