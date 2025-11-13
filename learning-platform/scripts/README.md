# Migration Scripts

## Global Stats Migration

### Purpose
Backfills global gamification stats for existing users by aggregating data from all practice topics.

### When to Run
Run this ONCE after deploying the stats tracking fixes (Phases 1-6).

### Prerequisites
1. All Phase 1-6 changes deployed to production
2. Firebase credentials configured in `.env`
3. `tsx` package installed: `npm install -D tsx`

### Usage

#### 1. Dry Run (Preview Changes)
See what would be migrated without making any changes:

```bash
cd learning-platform
npx tsx scripts/migrateGlobalStats.ts --dry-run
```

This will show:
- How many users would be migrated
- Current XP/level for each user
- Users with no practice data (skipped)

#### 2. Run Migration
Execute the migration after verifying the dry run looks correct:

```bash
npx tsx scripts/migrateGlobalStats.ts --yes
```

**Warning:** This will update `gamification` data for ALL users with practice data.

### What It Does

For each user:
1. Queries all documents in `users/{uid}/practice/*`
2. Sums `totalXP`, `totalProblemsCorrect`, `totalTimeSpentSeconds`, etc.
3. Calculates correct global level from total XP
4. Deduplicates achievements across topics
5. Updates `users/{uid}.gamification` with aggregated totals

### Expected Output

```
🚀 Starting global stats migration...

📋 Found 150 users to migrate

📊 Migrating user: abc123
  → Total XP: 350
  → Level: 3
  → Problems Solved: 45
  → Time Spent: 120 minutes
  → Achievements: 5
  ✅ Migrated successfully

...

============================================================
📊 Migration Summary
============================================================
Total users: 150
✅ Migrated: 142
⏭️  Skipped (no data): 8
❌ Errors: 0
============================================================

🎉 Migration completed successfully!
```

### Rollback

If issues arise:
1. Restore Firestore from backup
2. Revert code changes to before Phase 3
3. Investigate the issue before re-running

### Post-Migration Verification

After migration, verify:
1. Homepage XP/level matches practice page
2. Dashboard shows correct total XP (not per-topic)
3. Parent dashboard shows child's actual stats
4. Weekly stats display correctly
5. No users have 0 XP when they should have practice data

### Troubleshooting

**Error: "Missing or insufficient permissions"**
- Check Firebase credentials in `.env`
- Ensure service account has Firestore read/write access

**Error: "Cannot find module 'globalStatsAggregator'"**
- Run from `learning-platform` directory
- Ensure TypeScript files are compiled or use `tsx`

**Migration hangs or times out**
- Process users in batches (modify script)
- Increase timeout for large databases
