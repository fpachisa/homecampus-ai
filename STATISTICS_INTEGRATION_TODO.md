# Statistics Topic Integration - Remaining Updates

**Status:** 4/10 files completed
**Remaining:** 6 files

---

## ✅ COMPLETED

1. ✅ HomePage.tsx
2. ✅ App.tsx
3. ✅ LeftPanel.tsx
4. ✅ ChatInterface.tsx

---

## 📋 REMAINING UPDATES

### 5. SubtopicWelcomeScreen.tsx (CRITICAL)

**Location:** `src/components/SubtopicWelcomeScreen.tsx`

#### Add imports (after line ~11):
```typescript
import { S3_MATH_STATISTICS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-statistics';
import type { StatisticsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-statistics';
```

#### Add icon mappings in `getTopicIcon()` function (after surds icons ~line 160):
```typescript
// S3 Statistics icons
if (topicId.includes('statistics-data-types')) return '📊';
if (topicId.includes('statistics-distributions')) return '📉';
if (topicId.includes('statistics-centre')) return '📍';
if (topicId.includes('statistics-boxplots')) return '📦';
if (topicId.includes('statistics-cumulative')) return '📈';
if (topicId.includes('statistics-deviation')) return '📏';
if (topicId.includes('statistics-normal')) return '🔔';
```

#### Add category check (after surds check ~line 200):
```typescript
} else if (category === 's3-math-statistics') {
  topicConfig = S3_MATH_STATISTICS_SUBTOPICS[topicId as StatisticsTopicId];
}
```

---

### 6. SectionProgressTracker.tsx

**Location:** `src/components/SectionProgressTracker.tsx`

#### Add imports (after line ~12):
```typescript
import { S3_MATH_STATISTICS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-statistics';
import type { StatisticsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-statistics';
```

#### Add check in `getTopicSections()` function (after surds check):
```typescript
if (topicId.startsWith('s3-math-statistics-')) {
  const subtopic = S3_MATH_STATISTICS_SUBTOPICS[topicId as StatisticsTopicId];
  return (subtopic as any)?.progressionStructure?.sections || [];
}
```

---

### 7. subtopicContentLoader.ts

**Location:** `src/services/subtopicContentLoader.ts`

#### Add import (around line ~12):
```typescript
import { S3_MATH_STATISTICS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-statistics';
```

#### Add to `topicConfigs` in constructor (around line ~35):
```typescript
constructor() {
  this.topicConfigs = {
    // ... existing configs
    ...S3_MATH_STATISTICS_SUBTOPICS,
  };
}
```

---

### 8. notesLoader.ts

**Location:** `src/services/notesLoader.ts`

#### Add note imports for Statistics subtopics:
```typescript
// S3 Statistics notes
's3/math/statistics/DataTypes': () => import('../notes/s3/math/statistics/DataTypes'),
's3/math/statistics/MeasuresOfCentre': () => import('../notes/s3/math/statistics/MeasuresOfCentre'),
's3/math/statistics/BoxPlots': () => import('../notes/s3/math/statistics/BoxPlots'),
's3/math/statistics/CumulativeFrequency': () => import('../notes/s3/math/statistics/CumulativeFrequency'),
's3/math/statistics/StandardDeviation': () => import('../notes/s3/math/statistics/StandardDeviation'),
's3/math/statistics/NormalDistribution': () => import('../notes/s3/math/statistics/NormalDistribution'),
```

---

### 9. newPromptResolver.ts (CRITICAL)

**Location:** `src/prompts/newPromptResolver.ts`

#### Add import (around line ~28):
```typescript
import { S3_MATH_STATISTICS_SUBTOPICS, S3_MATH_STATISTICS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-statistics';
```

#### Add check in `getTopicConfig()` method (before the throw statement ~line 214):
```typescript
if (topicId.startsWith('s3-math-statistics-')) {
  const subtopic = S3_MATH_STATISTICS_SUBTOPICS[topicId as any];
  return { subtopic, global: S3_MATH_STATISTICS_CONFIG };
}
```

---

### 10. configLoader.ts (CRITICAL for Notes Display)

**Location:** `src/services/configLoader.ts`

#### Add subtopic entries to `mockConfigs` object (before closing brace ~line 1162):

```typescript
// S3 Statistics subtopics
's3-math-statistics-data-types': {
  id: 's3-math-statistics-data-types',
  displayName: 'Data Types and Organization',
  grade: 's3',
  subject: 'math',
  topic: 'statistics',
  subtopic: 'data-types',
  metadata: {
    difficulty: 'foundational',
    estimatedMinutes: 45,
    prerequisites: []
  },
  notesComponent: 's3/math/statistics/DataTypes',
  teachingTemplate: '',
  scoring: {
    easy: { basePoints: 0.10, hintPenalties: [0.02, 0.04, 0.06] },
    medium: { basePoints: 0.20, hintPenalties: [0.04, 0.08, 0.12] },
    hard: { basePoints: 0.30, hintPenalties: [0.06, 0.12, 0.20] }
  },
  modules: {
    learn: true,
    practice: true,
    visualizations: true
  }
},

's3-math-statistics-distributions': {
  id: 's3-math-statistics-distributions',
  displayName: 'Describing Data Distributions',
  grade: 's3',
  subject: 'math',
  topic: 'statistics',
  subtopic: 'distributions',
  metadata: {
    difficulty: 'intermediate',
    estimatedMinutes: 40,
    prerequisites: ['s3-math-statistics-data-types']
  },
  notesComponent: null,
  teachingTemplate: '',
  scoring: {
    easy: { basePoints: 0.10, hintPenalties: [0.02, 0.04, 0.06] },
    medium: { basePoints: 0.20, hintPenalties: [0.04, 0.08, 0.12] },
    hard: { basePoints: 0.30, hintPenalties: [0.06, 0.12, 0.20] }
  },
  modules: {
    learn: true,
    practice: true,
    visualizations: true
  }
},

's3-math-statistics-centre': {
  id: 's3-math-statistics-centre',
  displayName: 'Measures of Centre',
  grade: 's3',
  subject: 'math',
  topic: 'statistics',
  subtopic: 'centre',
  metadata: {
    difficulty: 'foundational-intermediate',
    estimatedMinutes: 50,
    prerequisites: ['s3-math-statistics-data-types']
  },
  notesComponent: 's3/math/statistics/MeasuresOfCentre',
  teachingTemplate: '',
  scoring: {
    easy: { basePoints: 0.10, hintPenalties: [0.02, 0.04, 0.06] },
    medium: { basePoints: 0.20, hintPenalties: [0.04, 0.08, 0.12] },
    hard: { basePoints: 0.30, hintPenalties: [0.06, 0.12, 0.20] }
  },
  modules: {
    learn: true,
    practice: true,
    visualizations: true
  }
},

's3-math-statistics-boxplots': {
  id: 's3-math-statistics-boxplots',
  displayName: 'Box Plots and Quartiles',
  grade: 's3',
  subject: 'math',
  topic: 'statistics',
  subtopic: 'boxplots',
  metadata: {
    difficulty: 'intermediate-advanced',
    estimatedMinutes: 55,
    prerequisites: ['s3-math-statistics-centre']
  },
  notesComponent: 's3/math/statistics/BoxPlots',
  teachingTemplate: '',
  scoring: {
    easy: { basePoints: 0.10, hintPenalties: [0.02, 0.04, 0.06] },
    medium: { basePoints: 0.20, hintPenalties: [0.04, 0.08, 0.12] },
    hard: { basePoints: 0.30, hintPenalties: [0.06, 0.12, 0.20] }
  },
  modules: {
    learn: true,
    practice: true,
    visualizations: true
  }
},

's3-math-statistics-cumulative': {
  id: 's3-math-statistics-cumulative',
  displayName: 'Cumulative Frequency Graphs',
  grade: 's3',
  subject: 'math',
  topic: 'statistics',
  subtopic: 'cumulative',
  metadata: {
    difficulty: 'intermediate-advanced',
    estimatedMinutes: 50,
    prerequisites: ['s3-math-statistics-centre']
  },
  notesComponent: 's3/math/statistics/CumulativeFrequency',
  teachingTemplate: '',
  scoring: {
    easy: { basePoints: 0.10, hintPenalties: [0.02, 0.04, 0.06] },
    medium: { basePoints: 0.20, hintPenalties: [0.04, 0.08, 0.12] },
    hard: { basePoints: 0.30, hintPenalties: [0.06, 0.12, 0.20] }
  },
  modules: {
    learn: true,
    practice: true,
    visualizations: true
  }
},

's3-math-statistics-deviation': {
  id: 's3-math-statistics-deviation',
  displayName: 'Standard Deviation',
  grade: 's3',
  subject: 'math',
  topic: 'statistics',
  subtopic: 'deviation',
  metadata: {
    difficulty: 'intermediate-advanced',
    estimatedMinutes: 55,
    prerequisites: ['s3-math-statistics-centre']
  },
  notesComponent: 's3/math/statistics/StandardDeviation',
  teachingTemplate: '',
  scoring: {
    easy: { basePoints: 0.10, hintPenalties: [0.02, 0.04, 0.06] },
    medium: { basePoints: 0.20, hintPenalties: [0.04, 0.08, 0.12] },
    hard: { basePoints: 0.30, hintPenalties: [0.06, 0.12, 0.20] }
  },
  modules: {
    learn: true,
    practice: true,
    visualizations: true
  }
},

's3-math-statistics-normal': {
  id: 's3-math-statistics-normal',
  displayName: 'The Normal Distribution',
  grade: 's3',
  subject: 'math',
  topic: 'statistics',
  subtopic: 'normal',
  metadata: {
    difficulty: 'advanced',
    estimatedMinutes: 60,
    prerequisites: ['s3-math-statistics-deviation']
  },
  notesComponent: 's3/math/statistics/NormalDistribution',
  teachingTemplate: '',
  scoring: {
    easy: { basePoints: 0.10, hintPenalties: [0.02, 0.04, 0.06] },
    medium: { basePoints: 0.20, hintPenalties: [0.04, 0.08, 0.12] },
    hard: { basePoints: 0.30, hintPenalties: [0.06, 0.12, 0.20] }
  },
  modules: {
    learn: true,
    practice: true,
    visualizations: true
  }
},
```

---

## Summary

**Category ID:** `s3-math-statistics`
**Prefix:** `s3-math-statistics-`
**Icon:** 📊
**Subtopics:** 7

**Files Completed:** 4/10
**Files Remaining:** 6

**Next Steps:**
1. Update SubtopicWelcomeScreen.tsx (CRITICAL - nothing displays without this)
2. Update SectionProgressTracker.tsx
3. Update subtopicContentLoader.ts
4. Update notesLoader.ts (for notes to appear)
5. Update newPromptResolver.ts (CRITICAL - AI won't work without this)
6. Update configLoader.ts (CRITICAL - "View Notes" button won't appear without this)

**Testing After Completion:**
- Clear localStorage
- Statistics card appears on HomePage
- Statistics appears in left panel when selected
- Clicking subtopics shows welcome screen
- Notes button appears and works
- AI generates responses correctly
