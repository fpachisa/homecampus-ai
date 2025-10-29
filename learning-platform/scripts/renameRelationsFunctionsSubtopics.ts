/**
 * Migration Script: Rename Relations & Functions Subtopic IDs
 *
 * This script renames 5 subtopic document IDs in Firestore to follow
 * the consistent naming pattern: s3-math-relations-functions-XXXXX
 *
 * Usage:
 *   # Dry run (preview changes, no modifications)
 *   npm run migrate:subtopics
 *
 *   # Execute the migration
 *   npm run migrate:subtopics -- --execute
 *
 * Prerequisites:
 *   - Firebase Admin SDK credentials set up
 *   - GOOGLE_APPLICATION_CREDENTIALS environment variable set
 */

import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize Firebase Admin (only if not already initialized)
if (getApps().length === 0) {
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    const serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);
    initializeApp({
      credential: cert(serviceAccount),
      projectId: process.env.VITE_FIREBASE_PROJECT_ID
    });
  } else {
    // Fallback: use environment variables
    initializeApp({
      projectId: process.env.VITE_FIREBASE_PROJECT_ID,
    });
  }
}

const db = getFirestore();

/**
 * ID mappings: old -> new
 */
const ID_MAPPINGS = {
  's3-math-function-notation': 's3-math-relations-functions-function-notation',
  's3-math-domain-range': 's3-math-relations-functions-domain-range',
  's3-math-sign-diagrams': 's3-math-relations-functions-sign-diagrams',
  's3-math-transformations': 's3-math-relations-functions-transformations',
  's3-math-absolute-value': 's3-math-relations-functions-absolute-value'
};

/**
 * Rename a single subtopic document
 */
async function renameSubtopic(oldId: string, newId: string, dryRun: boolean): Promise<boolean> {
  try {
    console.log(`\n📄 Processing: ${oldId} -> ${newId}`);

    // Read the old document
    const oldDocRef = db.collection('subtopics').doc(oldId);
    const oldDoc = await oldDocRef.get();

    if (!oldDoc.exists) {
      console.log(`   ⚠️  Document ${oldId} does not exist - skipping`);
      return false;
    }

    const data = oldDoc.data();
    console.log(`   ✓ Read old document: ${oldId}`);

    if (dryRun) {
      console.log(`   🔍 [DRY RUN] Would create new document: ${newId}`);
      console.log(`   🔍 [DRY RUN] Would update 'id' field: ${oldId} -> ${newId}`);
      console.log(`   🔍 [DRY RUN] Would delete old document: ${oldId}`);
      return true;
    }

    // Create new document with updated ID
    const newDocRef = db.collection('subtopics').doc(newId);
    const updatedData = {
      ...data,
      id: newId  // Update the 'id' field inside the document
    };

    await newDocRef.set(updatedData);
    console.log(`   ✓ Created new document: ${newId}`);

    // Delete old document
    await oldDocRef.delete();
    console.log(`   ✓ Deleted old document: ${oldId}`);

    console.log(`   ✅ Successfully renamed: ${oldId} -> ${newId}`);
    return true;

  } catch (error) {
    console.error(`   ❌ Error renaming ${oldId}:`, error);
    return false;
  }
}

/**
 * Main migration function
 */
async function migrateSubtopics() {
  const args = process.argv.slice(2);
  const dryRun = !args.includes('--execute');

  console.log('\n' + '='.repeat(70));
  console.log('🔄 Firestore Migration: Rename Relations & Functions Subtopics');
  console.log('='.repeat(70));

  if (dryRun) {
    console.log('\n⚠️  DRY RUN MODE - No changes will be made');
    console.log('   To execute the migration, run: npm run migrate:subtopics -- --execute\n');
  } else {
    console.log('\n🚀 EXECUTE MODE - Changes will be applied!\n');
  }

  console.log('Documents to rename:');
  Object.entries(ID_MAPPINGS).forEach(([oldId, newId], index) => {
    console.log(`  ${index + 1}. ${oldId}`);
    console.log(`     -> ${newId}`);
  });

  console.log('\n' + '-'.repeat(70));

  let successCount = 0;
  let failCount = 0;
  let skipCount = 0;

  // Process each mapping
  for (const [oldId, newId] of Object.entries(ID_MAPPINGS)) {
    const result = await renameSubtopic(oldId, newId, dryRun);
    if (result === false) {
      const oldDocRef = db.collection('subtopics').doc(oldId);
      const oldDoc = await oldDocRef.get();
      if (!oldDoc.exists) {
        skipCount++;
      } else {
        failCount++;
      }
    } else {
      successCount++;
    }
  }

  // Summary
  console.log('\n' + '='.repeat(70));
  console.log('📊 Migration Summary');
  console.log('='.repeat(70));

  if (dryRun) {
    console.log(`✓ Would rename: ${successCount} documents`);
    console.log(`⚠️ Would skip: ${skipCount} documents (not found)`);
    console.log(`❌ Errors: ${failCount} documents`);
    console.log('\n💡 To execute the migration, run:');
    console.log('   npm run migrate:subtopics -- --execute');
  } else {
    console.log(`✅ Successfully renamed: ${successCount} documents`);
    console.log(`⚠️ Skipped: ${skipCount} documents (not found)`);
    console.log(`❌ Failed: ${failCount} documents`);

    if (successCount > 0) {
      console.log('\n✅ Migration completed successfully!');
      console.log('\n📝 Next steps:');
      console.log('   1. Verify the new documents in Firebase Console');
      console.log('   2. Update any external references to use new IDs');
      console.log('   3. Clear browser localStorage if testing locally');
    }
  }

  console.log('\n');
  process.exit(failCount > 0 ? 1 : 0);
}

// Run migration
migrateSubtopics().catch((error) => {
  console.error('\n❌ Migration failed with error:', error);
  process.exit(1);
});
