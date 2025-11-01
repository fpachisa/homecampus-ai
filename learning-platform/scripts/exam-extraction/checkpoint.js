/**
 * Checkpoint management system for exam extraction pipeline
 * Enables resume-after-failure without re-running expensive AI steps
 */

import fs from 'fs';
import path from 'path';

const CHECKPOINT_FILENAME = '.checkpoint.json';

/**
 * Save a checkpoint after a successful pipeline step
 * @param {string} outputDir - Output directory (e.g., ./output/s3-math-exponential-logarithms)
 * @param {number} step - Step number (1-4)
 * @param {string} stepName - Human-readable step name
 * @param {Object} files - Map of file paths created in this step
 */
export function saveCheckpoint(outputDir, step, stepName, files = {}) {
  try {
    const checkpointPath = path.join(outputDir, CHECKPOINT_FILENAME);
    const checkpoint = {
      step,
      stepName,
      timestamp: Date.now(),
      files,
      version: '1.0.0'
    };

    fs.writeFileSync(checkpointPath, JSON.stringify(checkpoint, null, 2));
    console.log(`✓ Checkpoint saved: Step ${step} (${stepName})`);
  } catch (error) {
    // Non-critical - just warn
    console.warn(`⚠ Warning: Failed to save checkpoint: ${error.message}`);
  }
}

/**
 * Load existing checkpoint if available
 * @param {string} outputDir - Output directory
 * @returns {Object|null} - Checkpoint data or null if none exists
 */
export function loadCheckpoint(outputDir) {
  try {
    const checkpointPath = path.join(outputDir, CHECKPOINT_FILENAME);

    if (!fs.existsSync(checkpointPath)) {
      return null;
    }

    const checkpoint = JSON.parse(fs.readFileSync(checkpointPath, 'utf8'));

    // Validate checkpoint structure
    if (!checkpoint.step || !checkpoint.stepName || !checkpoint.timestamp) {
      console.warn('⚠ Invalid checkpoint file - ignoring');
      return null;
    }

    // Check if checkpoint is too old (>7 days)
    const age = Date.now() - checkpoint.timestamp;
    const sevenDays = 7 * 24 * 60 * 60 * 1000;
    if (age > sevenDays) {
      console.warn('⚠ Checkpoint is older than 7 days - ignoring');
      return null;
    }

    return checkpoint;
  } catch (error) {
    console.warn(`⚠ Warning: Failed to load checkpoint: ${error.message}`);
    return null;
  }
}

/**
 * Clear checkpoint after successful pipeline completion
 * @param {string} outputDir - Output directory
 */
export function clearCheckpoint(outputDir) {
  try {
    const checkpointPath = path.join(outputDir, CHECKPOINT_FILENAME);

    if (fs.existsSync(checkpointPath)) {
      fs.unlinkSync(checkpointPath);
      console.log('✓ Checkpoint cleared (pipeline complete)');
    }
  } catch (error) {
    // Non-critical - just warn
    console.warn(`⚠ Warning: Failed to clear checkpoint: ${error.message}`);
  }
}

/**
 * Verify that checkpoint files still exist
 * @param {Object} checkpoint - Checkpoint data
 * @returns {boolean} - True if all checkpoint files exist
 */
export function verifyCheckpoint(checkpoint) {
  if (!checkpoint || !checkpoint.files) {
    return false;
  }

  // Check if all files from checkpoint still exist
  for (const [key, filePath] of Object.entries(checkpoint.files)) {
    if (!fs.existsSync(filePath)) {
      console.warn(`⚠ Checkpoint file missing: ${filePath}`);
      return false;
    }
  }

  return true;
}

/**
 * Get human-readable time since checkpoint
 * @param {Object} checkpoint - Checkpoint data
 * @returns {string} - Human-readable time ago
 */
export function getCheckpointAge(checkpoint) {
  if (!checkpoint || !checkpoint.timestamp) {
    return 'unknown';
  }

  const age = Date.now() - checkpoint.timestamp;
  const seconds = Math.floor(age / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
}
