/**
 * AI Campus Firebase Cloud Functions
 * Payment Gateway Integration + AI Proxy
 */

// Child profile management
export { addChildProfile } from './children/addChildProfile';

// Stripe payment functions
export { createCheckoutSession } from './stripe/checkout';
export { createPortalSession } from './stripe/portal';
export { syncSubscription } from './stripe/sync';
export { stripeWebhook } from './stripe/webhooks';

// Scheduled jobs
export { trialReminderJob } from './scheduled/trialReminder';

// Admin functions
export { extendTrial } from './admin/extendTrial';

// AI Proxy functions (secure - API keys never exposed to client)
export { generateContent, generateContentBatch } from './ai/generateContent';
export { synthesizeSpeech } from './ai/synthesizeSpeech';
export { synthesizeCloudTTS } from './ai/synthesizeCloudTTS';
export { analyzeImage } from './ai/analyzeImage';
