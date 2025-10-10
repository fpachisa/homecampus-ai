/**
 * Environment Variable Loader for Node Scripts
 *
 * This module ensures environment variables are loaded BEFORE any
 * other modules are imported. Import this FIRST in any script.
 */

import { config } from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Get the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env from the learning-platform root directory
const envPath = resolve(__dirname, '..', '.env');
const result = config({ path: envPath });

if (result.error) {
  console.warn('⚠️  Warning: Could not load .env file from:', envPath);
  console.warn('   Make sure you have a .env file in the learning-platform directory');
} else {
  console.log('✓ Environment variables loaded from:', envPath);
}

// Export env variables for direct access
export const env = {
  VITE_GEMINI_API_KEY: process.env.VITE_GEMINI_API_KEY,
  VITE_CLAUDE_API_KEY: process.env.VITE_CLAUDE_API_KEY,
  VITE_FIREBASE_API_KEY: process.env.VITE_FIREBASE_API_KEY,
  VITE_FIREBASE_AUTH_DOMAIN: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  VITE_FIREBASE_PROJECT_ID: process.env.VITE_FIREBASE_PROJECT_ID,
  VITE_FIREBASE_STORAGE_BUCKET: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  VITE_FIREBASE_MESSAGING_SENDER_ID: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  VITE_FIREBASE_APP_ID: process.env.VITE_FIREBASE_APP_ID,
};

// Validate critical env vars
export function validateEnv() {
  const warnings: string[] = [];
  const errors: string[] = [];

  if (!env.VITE_GEMINI_API_KEY) {
    warnings.push('VITE_GEMINI_API_KEY not found - AI features may not work');
  }

  if (!env.VITE_FIREBASE_PROJECT_ID || env.VITE_FIREBASE_PROJECT_ID === 'placeholder-project') {
    errors.push('VITE_FIREBASE_PROJECT_ID not found or is placeholder - Firestore operations will fail');
  }

  return { warnings, errors, isValid: errors.length === 0 };
}
