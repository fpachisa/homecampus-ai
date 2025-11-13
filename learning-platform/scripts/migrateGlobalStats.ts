/**
 * Migration Script: Backfill Global Stats
 *
 * Purpose: Aggregate XP, level, problems, and time across ALL practice topics
 * for existing users who have per-topic stats but no global aggregation.
 *
 * Run this ONCE after deploying Phase 1-6 changes.
 *
 * Usage:
 *   npx tsx scripts/migrateGlobalStats.ts
 *
 * What it does:
 * 1. Fetches all users from Firestore
 * 2. For each user, aggregates stats from users/{uid}/practice/* subcollection
 * 3. Updates users/{uid}.gamification with aggregated totals
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, updateDoc } from 'firebase/firestore';
import { aggregateGlobalStats } from '../src/services/globalStatsAggregator';

// Firebase config (replace with your actual config or load from .env)
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

/**
 * Migrate a single user's stats
 */
async function migrateUser(uid: string): Promise<void> {
  try {
    console.log(`\n📊 Migrating user: ${uid}`);

    // Aggregate stats from all practice topics
    const globalStats = await aggregateGlobalStats(uid);

    console.log(`  → Total XP: ${globalStats.totalXP}`);
    console.log(`  → Level: ${globalStats.currentLevel}`);
    console.log(`  → Problems Solved: ${globalStats.totalProblemsSolved}`);
    console.log(`  → Time Spent: ${Math.round(globalStats.totalTimeSpentSeconds / 60)} minutes`);
    console.log(`  → Achievements: ${globalStats.totalAchievements}`);

    // Update user profile with aggregated stats
    const userRef = doc(firestore, 'users', uid);
    await updateDoc(userRef, {
      'gamification.totalXP': globalStats.totalXP,
      'gamification.currentLevel': globalStats.currentLevel,
      'gamification.totalProblemsSolved': globalStats.totalProblemsSolved,
      'gamification.totalProblemsAttempted': globalStats.totalProblemsAttempted,
      'gamification.totalTimeSpentSeconds': globalStats.totalTimeSpentSeconds,
      'gamification.totalAchievements': globalStats.totalAchievements,
      'gamification.lastUpdated': new Date().toISOString(),
    });

    console.log(`  ✅ Migrated successfully`);
  } catch (error) {
    console.error(`  ❌ Error migrating user ${uid}:`, error);
    throw error; // Re-throw to stop migration on error
  }
}

/**
 * Migrate all users in the system
 */
async function migrateAllUsers(): Promise<void> {
  try {
    console.log('🚀 Starting global stats migration...\n');

    // Fetch all users
    const usersSnapshot = await getDocs(collection(firestore, 'users'));
    const totalUsers = usersSnapshot.size;

    console.log(`📋 Found ${totalUsers} users to migrate\n`);

    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;

    // Migrate each user
    for (const userDoc of usersSnapshot.docs) {
      const uid = userDoc.id;

      try {
        // Check if user has any practice data
        const practiceSnapshot = await getDocs(collection(firestore, `users/${uid}/practice`));

        if (practiceSnapshot.empty) {
          console.log(`⏭️  Skipping user ${uid} (no practice data)`);
          skipCount++;
          continue;
        }

        await migrateUser(uid);
        successCount++;
      } catch (error) {
        console.error(`❌ Failed to migrate user ${uid}:`, error);
        errorCount++;
        // Continue with next user instead of stopping
      }
    }

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 Migration Summary');
    console.log('='.repeat(60));
    console.log(`Total users: ${totalUsers}`);
    console.log(`✅ Migrated: ${successCount}`);
    console.log(`⏭️  Skipped (no data): ${skipCount}`);
    console.log(`❌ Errors: ${errorCount}`);
    console.log('='.repeat(60));

    if (errorCount === 0) {
      console.log('\n🎉 Migration completed successfully!');
    } else {
      console.log('\n⚠️  Migration completed with errors. Please review the logs.');
    }
  } catch (error) {
    console.error('💥 Fatal error during migration:', error);
    process.exit(1);
  }
}

/**
 * Dry run: Preview what would be migrated without making changes
 */
async function dryRun(): Promise<void> {
  try {
    console.log('🔍 DRY RUN MODE - No changes will be made\n');

    const usersSnapshot = await getDocs(collection(firestore, 'users'));
    console.log(`📋 Found ${usersSnapshot.size} users\n`);

    for (const userDoc of usersSnapshot.docs) {
      const uid = userDoc.id;
      const practiceSnapshot = await getDocs(collection(firestore, `users/${uid}/practice`));

      if (practiceSnapshot.empty) {
        console.log(`⏭️  ${uid}: No practice data`);
        continue;
      }

      const globalStats = await aggregateGlobalStats(uid);
      console.log(`📊 ${uid}:`);
      console.log(`   Would set: ${globalStats.totalXP} XP, Level ${globalStats.currentLevel}`);
    }

    console.log('\n✅ Dry run complete. Run without --dry-run to execute migration.');
  } catch (error) {
    console.error('💥 Error during dry run:', error);
    process.exit(1);
  }
}

// Main execution
const isDryRun = process.argv.includes('--dry-run');

if (isDryRun) {
  dryRun();
} else {
  // Confirm before running
  console.log('⚠️  WARNING: This will update gamification stats for ALL users.');
  console.log('   Make sure you have:');
  console.log('   1. Deployed Phase 1-6 changes');
  console.log('   2. Backed up your Firestore data');
  console.log('   3. Tested the aggregation logic\n');
  console.log('   Run with --dry-run first to preview changes.\n');

  // Auto-run if --yes flag is provided, otherwise require manual confirmation
  if (process.argv.includes('--yes')) {
    migrateAllUsers();
  } else {
    console.log('   Add --yes flag to execute migration.\n');
    console.log('   Example: npx tsx scripts/migrateGlobalStats.ts --yes');
    process.exit(0);
  }
}
