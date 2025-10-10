#!/usr/bin/env tsx

/**
 * Curriculum Sync Script
 *
 * Reads YAML files from curriculum-content/ directory
 * and uploads them to Firestore.
 *
 * Usage:
 *   npm run sync-curriculum [subtopic-id]
 *
 * Examples:
 *   npm run sync-curriculum                           # Sync all
 *   npm run sync-curriculum s3-math-trigonometry-basic-ratios  # Sync specific subtopic
 */

// CRITICAL: Load env vars FIRST before any other imports
import { env, validateEnv } from './env-loader.js';

import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'yaml';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, Timestamp } from 'firebase/firestore';
import type { SubtopicYAML } from '../src/types/curriculum.js';

// Initialize Firebase (using same config as app)
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY || "placeholder-api-key",
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || "placeholder.firebaseapp.com",
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || "placeholder-project",
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || "placeholder.appspot.com",
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "000000000000",
  appId: process.env.VITE_FIREBASE_APP_ID || "placeholder-app-id"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  gray: '\x1b[90m'
};

function log(message: string, color: keyof typeof colors = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

/**
 * Find all YAML files in curriculum-content directory
 */
function findYAMLFiles(dir: string): string[] {
  const yamlFiles: string[] = [];

  function traverse(currentDir: string) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.yaml') || item.endsWith('.yml')) {
        yamlFiles.push(fullPath);
      }
    }
  }

  traverse(dir);
  return yamlFiles;
}

/**
 * Parse YAML file and validate
 */
function parseYAMLFile(filePath: string): SubtopicYAML {
  const content = fs.readFileSync(filePath, 'utf-8');
  const data = yaml.parse(content);

  // Validate required fields
  const required = ['id', 'displayName', 'grade', 'subject', 'topic', 'subtopic', 'metadata', 'scoring', 'modules'];
  for (const field of required) {
    if (!(field in data)) {
      throw new Error(`Missing required field: ${field}`);
    }
  }

  return data as SubtopicYAML;
}

/**
 * Convert YAML data to Firestore document
 */
function toFirestoreDoc(yamlData: any) {
  return {
    ...yamlData,
    teachingTemplate: yamlData.teachingTemplate || '', // Will be generated later
    comprehensiveNotesUrl: yamlData.comprehensiveNotesUrl || '',
    notesComponent: yamlData.notesComponent || '', // Path to React component
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
    templateVersion: 'v1'
  };
}

/**
 * Sync a single YAML file to Firestore
 */
async function syncYAMLFile(filePath: string): Promise<boolean> {
  try {
    log(`\n📄 Processing: ${path.relative(process.cwd(), filePath)}`, 'gray');

    const yamlData = parseYAMLFile(filePath);
    const firestoreDoc = toFirestoreDoc(yamlData);

    // Upload to Firestore
    const docRef = doc(firestore, 'subtopics', yamlData.id);
    await setDoc(docRef, firestoreDoc, { merge: true });

    log(`✅ Synced: ${yamlData.id}`, 'green');
    log(`   ${yamlData.displayName}`, 'gray');

    return true;
  } catch (error) {
    log(`❌ Error: ${error instanceof Error ? error.message : String(error)}`, 'red');
    return false;
  }
}

/**
 * Main function
 */
async function main() {
  log('\n🔄 Curriculum Sync Starting...', 'blue');
  log('━'.repeat(60), 'gray');

  const args = process.argv.slice(2);
  const specificId = args[0];

  const curriculumDir = path.join(process.cwd(), '..', 'curriculum-content');

  if (!fs.existsSync(curriculumDir)) {
    log(`❌ Curriculum directory not found: ${curriculumDir}`, 'red');
    process.exit(1);
  }

  let yamlFiles = findYAMLFiles(curriculumDir);

  if (yamlFiles.length === 0) {
    log('⚠️  No YAML files found', 'yellow');
    process.exit(0);
  }

  // Filter by specific ID if provided
  if (specificId) {
    yamlFiles = yamlFiles.filter(file => {
      const data = parseYAMLFile(file);
      return data.id === specificId;
    });

    if (yamlFiles.length === 0) {
      log(`❌ No YAML file found with ID: ${specificId}`, 'red');
      process.exit(1);
    }

    log(`\n🎯 Syncing specific subtopic: ${specificId}`, 'blue');
  } else {
    log(`\n📦 Found ${yamlFiles.length} YAML file(s)`, 'blue');
  }

  // Sync all files
  let successCount = 0;
  let failCount = 0;

  for (const file of yamlFiles) {
    const success = await syncYAMLFile(file);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
  }

  // Summary
  log('\n━'.repeat(60), 'gray');
  log('📊 Sync Complete', 'blue');
  log(`   ✅ Success: ${successCount}`, 'green');
  if (failCount > 0) {
    log(`   ❌ Failed: ${failCount}`, 'red');
  }
  log('');

  process.exit(failCount > 0 ? 1 : 0);
}

// Run
main().catch(error => {
  log(`\n❌ Fatal error: ${error}`, 'red');
  console.error(error);
  process.exit(1);
});
