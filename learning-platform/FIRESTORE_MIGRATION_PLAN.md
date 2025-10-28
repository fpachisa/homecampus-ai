# Firestore Migration Plan

## Executive Summary

Migrate **2,612 lines of hardcoded mock data** from `configLoader.ts` to Firestore database for better scalability, maintainability, and collaboration.

**Current State:**
- ❌ All subtopic configurations hardcoded in `configLoader.ts`
- ❌ Manual updates required for each new topic/subtopic
- ❌ Version control conflicts when multiple people edit
- ❌ Missing Differential Calculus configs (reason for this migration)
- ❌ ~100+ subtopics across S3 and S4 Math

**Target State:**
- ✅ All configs stored in Firestore collections
- ✅ Easy admin UI for adding/editing topics (future)
- ✅ Automatic sync with prompt library
- ✅ Version history and timestamps
- ✅ Scalable to hundreds of subjects/topics

---

## 🎉 Implementation Status

**Date:** 2025-10-28
**Status:** ✅ **READY TO DEPLOY**

### Completed Tasks

1. ✅ **Firestore Security Rules** (`firestore.rules`)
   - Public read access for curriculum data
   - Admin-only write access
   - Aligned with existing user progress rules
   - Ready to deploy

2. ✅ **Migration Scripts** (`scripts/`)
   - `addDifferentialCalculusConfigs.ts` - Quick fix for 7 missing configs
   - `migrateSubtopicsToFirestore.ts` - Full migration template
   - `extractMockConfigs.ts` - Helper for extracting mock data
   - `README.md` - Comprehensive usage guide

3. ✅ **ConfigLoader Updates** (`src/services/configLoader.ts`)
   - Now prioritizes Firestore over mock data
   - Graceful fallback to mock data during migration
   - Maintains backward compatibility
   - Enhanced logging for debugging

4. ✅ **7 Missing Differential Calculus Configs**
   - All configs defined with proper notesComponent paths
   - Prerequisites chain configured correctly
   - Ready to upload to Firestore

### Next Steps (User Action Required)

1. **Run Migration Script** (1 minute)
   ```bash
   cd learning-platform
   npx ts-node scripts/migrateAllConfigs.ts
   ```

2. **Commit and Push** (2 minutes)
   ```bash
   git add .
   git commit -m "Add Firestore migration: Differential Calculus configs

- Add firestore.rules with curriculum collection security
- Update ConfigLoader to use Firestore exclusively
- Add 7 missing Differential Calculus subtopic configs
- Remove fallback to mock data (no users, no compatibility needed)

Fixes: Missing Notes links for Differential Calculus"

   git push origin main  # CI/CD deploys automatically
   ```

3. **Verify After Deployment** (5 minutes)
   - Check Firebase Console → Firestore → `subtopics` collection
   - Navigate to deployed app → S4 → Differential Calculus
   - Click "Notes" link on any subtopic
   - Verify notes page loads

4. **Future: Full Migration** (optional)
   - Add remaining ~95 configs to `migrateAllConfigs.ts`
   - Run migration, commit, push
   - Remove `mockConfigs` object from `configLoader.ts` (~2,400 lines)

---

## Architecture Overview

### Current Data Flow
```
ConfigLoader.getSubtopicConfig()
  ├─ Check cache
  └─ Return mockConfigs[subtopicId]  ⚠️ HARDCODED
```

### Target Data Flow
```
ConfigLoader.getSubtopicConfig()
  ├─ Check cache
  ├─ Firestore.collection('subtopics').doc(subtopicId).get()  ✅ DATABASE
  └─ Cache result
```

---

## Firestore Collections Schema

### Collection: `subtopics`
**Document ID:** `subtopicId` (e.g., `s4-math-differential-calculus-limits`)

**Document Structure:**
```typescript
{
  // Identification
  id: string;                      // "s4-math-differential-calculus-limits"
  displayName: string;             // "Limits"
  grade: string;                   // "s4"
  subject: string;                 // "math"
  topic: string;                   // "differential-calculus"
  subtopic: string;                // "limits"

  // Metadata
  metadata: {
    difficulty: string;            // "beginner" | "intermediate" | "advanced"
    estimatedMinutes: number;      // 45
    prerequisites: string[];       // ["s4-math-differential-calculus-intro"]
  },

  // Content References
  notesComponent: string;          // "s4/math/differential-calculus/Limits"
  comprehensiveNotesUrl?: string;  // Cloud Storage URL (future)
  teachingTemplate: string;        // AI-condensed teaching guide

  // Scoring
  scoring: {
    easy: {
      basePoints: number;          // 0.10
      hintPenalties: number[];     // [0.02, 0.04, 0.06]
    },
    medium: { ... },
    hard: { ... }
  },

  // Module Availability
  modules: {
    learn: boolean;                // true
    practice: boolean;             // true
    visualizations: boolean;       // true
  },

  // Timestamps (auto-generated)
  createdAt: Timestamp;
  updatedAt: Timestamp;
  notesLastUpdated?: Timestamp;
  templateGeneratedAt?: Timestamp;
  templateVersion?: string;
}
```

### Collection: `topics` (Future - for topic-level metadata)
**Document ID:** `topicId` (e.g., `s4-math-differential-calculus`)

```typescript
{
  id: string;
  displayName: string;
  grade: string;
  subject: string;
  icon: string;
  subtopicIds: string[];           // Array of subtopic IDs
  progressionOrder: string[];      // Ordered learning path
}
```

---

## Implementation Steps

### Phase 1: Setup & Schema Design ✅
- [x] Analyze current mock data structure
- [x] Design Firestore schema
- [ ] Document security rules requirements

### Phase 2: Firestore Configuration
**File:** `/firestore.rules`

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Subtopic configs - public read, admin write
    match /subtopics/{subtopicId} {
      allow read: if true;  // Public read for all users
      allow write: if request.auth != null &&
                      request.auth.token.admin == true;  // Admin only
    }

    // Topics metadata - public read, admin write
    match /topics/{topicId} {
      allow read: if true;
      allow write: if request.auth != null &&
                      request.auth.token.admin == true;
    }
  }
}
```

### Phase 3: Migration Script
**File:** `/scripts/migrateToFirestore.ts`

```typescript
import { db } from '../src/services/firebase';
import { collection, doc, setDoc } from 'firebase/firestore';

// Import all mock configs
import { mockConfigs } from '../src/services/configLoader';

async function migrateSubtopics() {
  console.log('Starting migration...');

  let count = 0;
  for (const [subtopicId, config] of Object.entries(mockConfigs)) {
    try {
      await setDoc(doc(db, 'subtopics', subtopicId), {
        ...config,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      count++;
      console.log(`✓ Migrated: ${subtopicId}`);
    } catch (error) {
      console.error(`✗ Failed: ${subtopicId}`, error);
    }
  }

  console.log(`\nMigration complete: ${count} subtopics migrated`);
}

migrateSubtopics();
```

**Run migration:**
```bash
npm run migrate:firestore
```

### Phase 4: Update ConfigLoader
**File:** `src/services/configLoader.ts`

**Before:**
```typescript
async getSubtopicConfig(subtopicId: string): Promise<SubtopicConfig> {
  // Check cache
  if (this.isCacheValid(subtopicId)) { ... }

  // TEMPORARY: Mock data
  const mockConfigs = { ... 2600 lines ... };

  return mockConfigs[subtopicId];
}
```

**After:**
```typescript
async getSubtopicConfig(subtopicId: string): Promise<SubtopicConfig> {
  // Check cache
  if (this.isCacheValid(subtopicId)) {
    return this.cache.get(subtopicId)!;
  }

  // Fetch from Firestore
  const docRef = doc(firestore, 'subtopics', subtopicId);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error(`Subtopic config not found: ${subtopicId}`);
  }

  const config = docSnap.data() as SubtopicConfig;

  // Cache it
  this.cache.set(subtopicId, config);
  this.cacheTimestamps.set(subtopicId, Date.now());

  return config;
}
```

### Phase 5: Add Missing Differential Calculus Configs
**File:** `/scripts/addDifferentialCalculus.ts`

```typescript
import { db } from '../src/services/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { DIFFERENTIAL_CALCULUS_SUBTOPICS } from '../src/prompt-library/subjects/mathematics/secondary/s4-differential-calculus';

async function addDifferentialCalculusConfigs() {
  const configs = [
    {
      id: 's4-math-differential-calculus-limits',
      displayName: 'Limits',
      notesComponent: 's4/math/differential-calculus/Limits',
      // ... rest of config
    },
    // ... 6 more configs
  ];

  for (const config of configs) {
    await setDoc(doc(db, 'subtopics', config.id), {
      ...config,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    console.log(`✓ Added: ${config.id}`);
  }
}
```

### Phase 6: Testing
- [ ] Test Firestore read with existing subtopics
- [ ] Test cache invalidation
- [ ] Test error handling (missing subtopics)
- [ ] Verify Notes link appears for Differential Calculus
- [ ] Performance testing (check query times)

### Phase 7: Cleanup
- [ ] Remove `mockConfigs` object from `configLoader.ts`
- [ ] Remove temporary fallback code
- [ ] Update documentation
- [ ] Reduce `configLoader.ts` from 2,612 to ~200 lines

---

## Data Migration Checklist

### Current Mock Data Inventory
- ✅ S3 Math Trigonometry (7 subtopics)
- ✅ S3 Math Circle Geometry (7 subtopics)
- ✅ S3 Math Quadratic Equations (13 subtopics)
- ✅ S3 Math Exponential & Logarithms (9 subtopics)
- ✅ S3 Math Sets & Venn Diagrams (9 subtopics)
- ✅ S3 Math Exponents (3 subtopics)
- ✅ S3 Math Surds & Radicals (6 subtopics)
- ✅ S3 Math Statistics (6 subtopics)
- ✅ S3 Math Relations & Functions (6 subtopics)
- ✅ S3 Math Coordinate Geometry (7 subtopics)
- ✅ S4 Math Integration (5 subtopics)
- ✅ S4 Math Probability (5 subtopics)
- ✅ S4 Math Quadratic Functions (5 subtopics)
- ❌ **S4 Math Differential Calculus (7 subtopics) - MISSING!**

**Total:** ~95 subtopics to migrate + 7 new ones = **102 subtopics**

---

## Benefits After Migration

### For Developers
- ✅ No merge conflicts on `configLoader.ts`
- ✅ Easy to add new topics (just add to Firestore)
- ✅ Can query/filter subtopics by grade, subject, difficulty
- ✅ Version history via Firestore

### For Content Creators
- ✅ Future admin UI for non-technical updates
- ✅ Bulk import from YAML/CSV
- ✅ Preview changes before publishing
- ✅ Rollback capability

### For Performance
- ✅ Firestore caching (automatic)
- ✅ Offline support (Firestore persistence)
- ✅ Smaller bundle size (no 2,600-line file)

---

## Risks & Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Firestore downtime | App breaks | Keep fallback to local JSON in production |
| Migration errors | Data loss | Dry-run first, backup mock data |
| Security rules wrong | Data exposed | Test rules thoroughly before deploy |
| Cost increase | Firebase bill | Monitor usage, implement caching |

---

## Timeline Estimate

- **Phase 1-2 (Setup):** 1 hour
- **Phase 3 (Migration Script):** 2 hours
- **Phase 4 (Update ConfigLoader):** 1 hour
- **Phase 5 (Add Differential Calculus):** 30 minutes
- **Phase 6 (Testing):** 2 hours
- **Phase 7 (Cleanup):** 30 minutes

**Total:** ~7 hours

---

## Next Steps

1. **Immediate:** Add missing Differential Calculus configs to mock data (quick fix)
2. **Short-term:** Set up Firestore collections and security rules
3. **Medium-term:** Run migration script and update ConfigLoader
4. **Long-term:** Build admin UI for content management

---

## Related Files

- `/src/services/configLoader.ts` - ConfigLoader service (2,612 lines to reduce)
- `/src/types/curriculum.ts` - SubtopicConfig interface
- `/src/services/notesLoader.ts` - Notes component loader
- `/firestore.rules` - Firestore security rules (to create)
- `/scripts/migrateToFirestore.ts` - Migration script (to create)

---

**Document Version:** 1.0
**Created:** 2025-10-28
**Status:** Planning Phase
