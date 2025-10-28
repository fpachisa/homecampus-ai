# Firestore Migration Scripts

This directory contains scripts for migrating subtopic configurations to Firestore.

## Overview

**Problem:** 2,612 lines of hardcoded mock data in `configLoader.ts` making it difficult to maintain and add new topics. Missing 7 Differential Calculus configs causing Notes links to not appear.

**Solution:** Migrate all subtopic configurations to Firestore's `subtopics` collection.

**Deployment:** Git commit + push → CI/CD handles deployment automatically.

## Prerequisites

### 1. Firebase Project Setup

Ensure your Firebase project is configured:

```bash
# Check your .env file has these variables:
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
# ... other Firebase config
```

### 2. Firebase Admin Credentials

For server-side scripts, you need Firebase Admin SDK credentials:

**Option A: Service Account Key (Recommended for local development)**

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to Project Settings → Service Accounts
4. Click "Generate New Private Key"
5. Save the JSON file securely (e.g., `firebase-admin-key.json`)
6. Set environment variable:

```bash
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/firebase-admin-key.json"
```

**Option B: Firebase CLI (Alternative)**

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# The scripts will use your Firebase CLI credentials
```

## Quick Start: Fix Missing Differential Calculus Notes

```bash
cd learning-platform

# Run the migration script
npx ts-node scripts/migrateAllConfigs.ts

# Commit and push (CI/CD will deploy firestore.rules automatically)
git add .
git commit -m "Add Differential Calculus configs to Firestore"
git push origin main
```

This will:
- ✅ Add 7 missing Differential Calculus subtopic configs to Firestore
- ✅ Enable Notes links to appear on the Learn page
- ✅ CI/CD will deploy security rules automatically
- ✅ Take ~1 minute to complete

**Verify (after deployment):**
1. Go to Firebase Console → Firestore Database
2. Navigate to `subtopics` collection
3. You should see 7 new documents:
   - `s4-math-differential-calculus-limits`
   - `s4-math-differential-calculus-gradient-tangent`
   - `s4-math-differential-calculus-derivative-function`
   - `s4-math-differential-calculus-first-principles`
   - `s4-math-differential-calculus-differentiation-rules`
   - `s4-math-differential-calculus-tangent-equations`
   - `s4-math-differential-calculus-stationary-points`

## Full Migration: All Subtopics

For migrating all ~102 subtopic configs from mock data to Firestore:

### Step 1: Extract Mock Configs (Helper)

```bash
# This script helps extract configs from configLoader.ts
npx ts-node scripts/extractMockConfigs.ts

# Output: scripts/extracted-configs-raw.ts
```

### Step 2: Run Full Migration

```bash
# Edit migrateSubtopicsToFirestore.ts to include all configs
# Then run:
npx ts-node scripts/migrateSubtopicsToFirestore.ts
```

**Note:** The full migration script currently only includes Differential Calculus configs as a template. You'll need to either:
1. Manually add all other configs to the `ALL_SUBTOPICS` array
2. Or programmatically extract them from `configLoader.ts`

### Step 3: Verify Migration

After running the migration:

```bash
# Check Firebase Console
# Go to: Firestore Database → subtopics collection

# Expected: ~102 documents (95 existing + 7 new)
```

## How It Works

### Architecture

**Before Migration:**
```
ConfigLoader.getSubtopicConfig()
  ├─ Check cache
  ├─ Check mockConfigs object (2,612 lines of hardcoded data)
  └─ Throw error if not found
```

**After Migration:**
```
ConfigLoader.getSubtopicConfig()
  ├─ Check cache
  ├─ Fetch from Firestore subtopics/{subtopicId} ✅
  └─ Throw error if not found (no fallback needed - new app, no users)
```

**Benefits:**
- ✅ Easy to add new topics (just add to Firestore)
- ✅ No merge conflicts on `configLoader.ts`
- ✅ Centralized curriculum management
- ✅ Can build admin UI for non-technical content updates
- ✅ Clean implementation (no backward compatibility needed)

## Troubleshooting

### Error: "Permission denied"

**Cause:** Firestore security rules not deployed via CI/CD.

**Solution:**
```bash
# Ensure firestore.rules is committed
git add firestore.rules
git commit -m "Add Firestore security rules"
git push origin main

# CI/CD will deploy automatically
# Verify rules in Firebase Console after deployment
```

### Error: "GOOGLE_APPLICATION_CREDENTIALS not found"

**Cause:** Firebase Admin credentials not configured.

**Solution:**
```bash
# Option 1: Set service account key path
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/key.json"

# Option 2: Use Firebase CLI
firebase login
```

### Error: "Project ID not found"

**Cause:** `.env` file not configured or VITE_FIREBASE_PROJECT_ID missing.

**Solution:**
```bash
# Check .env file exists
cat .env

# Ensure VITE_FIREBASE_PROJECT_ID is set
echo $VITE_FIREBASE_PROJECT_ID
```

### Configs not appearing in app

**Cause:** Configs not yet migrated to Firestore or cache issue.

**Solution:**
```bash
# 1. Verify config exists in Firestore (Firebase Console)
# 2. Clear browser cache and reload
# 3. Restart dev server:
npm run dev
```

## Script Reference

| Script | Purpose | When to Use |
|--------|---------|-------------|
| `migrateAllConfigs.ts` | **Primary script**: Migrate configs to Firestore | Run once to add Differential Calculus configs |
| `extractMockConfigs.ts` | Helper to extract existing mock data | For understanding current data structure (optional) |

## Next Steps After Migration

1. **Commit and deploy:**
   ```bash
   git add .
   git commit -m "Add Differential Calculus configs to Firestore"
   git push origin main  # CI/CD handles deployment
   ```

2. **Test after deployment:**
   - Navigate to deployed app
   - Go to S4 Math → Differential Calculus
   - Click "Notes" link on any subtopic
   - Verify notes page loads

3. **Monitor Firestore usage:**
   - Go to Firebase Console → Usage tab
   - Set budget alerts at $10/month
   - Monitor reads/writes/storage

4. **Future: Remove mock data** (after all ~102 configs migrated):
   - Add remaining configs to `migrateAllConfigs.ts`
   - Run migration
   - Delete `mockConfigs` object from `configLoader.ts` (~2,400 lines)

## Cost Estimate

**Current Usage (after migration):**
- Storage: ~102 documents × ~1KB = ~102KB = $0.00002/month
- Reads: ~100 students × 50 reads/day × 30 days = 150,000 reads = $0.09/month
- Writes: Only when adding new topics (minimal)
- **Total: < $0.10/month**

## Architecture Alignment

The migration follows the existing Firestore architecture:

```
Existing Collections:
├── users/{uid} (user profiles)
├── users/{uid}/learn/{subtopicId} (learn progress)
├── users/{uid}/practice/{topicId} (practice progress)
└── progressSummaries/{uid} (parent dashboard)

New Collections:
├── subtopics/{subtopicId} ✅ PUBLIC READ, ADMIN WRITE
└── topics/{topicId} ✅ (future)
```

**All paths follow the even-segment rule:**
- ✅ `subtopics/{subtopicId}` = 2 segments
- ✅ `topics/{topicId}` = 2 segments
- ✅ `users/{uid}/learn/{subtopicId}` = 4 segments

## Support

For issues or questions:
1. Check Firebase Console for errors
2. Review firestore.rules file
3. See `FIRESTORE_MIGRATION_PLAN.md` for detailed architecture
4. Check `docs/FIRESTORE_DATA_STRATEGY.md` for full strategy

---

**Last Updated:** 2025-10-28
**Status:** Ready to Use
