# Adding New Topics - Integration Checklist

This checklist ensures all necessary files are updated when adding a new topic/subtopic to the learning platform. Missing any of these steps will result in broken functionality.

## ⚠️ Critical Lessons Learned

**From Venn Diagrams Integration (Oct 2025):**
- **SubtopicWelcomeScreen.tsx is CRITICAL** - Missing this causes nothing to display on first click
- **All 5 UI files must be updated** - Each file serves a different part of the user flow
- **Order matters** - Update files in sequence to catch errors early
- **Test with fresh localStorage** - Welcome screens only show for new topics
- **Console logging is essential** - Add debug logs to trace state flow

## 📋 Quick Reference

When adding a new topic category (e.g., `s3-math-sets-venn-diagrams`), you MUST update these files in this exact order:

1. **Create the topic configuration file** (prompt library)
2. **Update HomePage.tsx** (CRITICAL - Topic card display)
3. **Update App.tsx** (CRITICAL - Entry point & type system)
4. **Update UI components** (5 files - ALL CRITICAL)
5. **Update service layers** (4 files - content + notes + AI + config)
6. **Test the integration**

---

## 1. Create Topic Configuration File

**Location:** `src/prompt-library/subjects/mathematics/secondary/`

### Steps:
- [ ] Create new topic file (e.g., `s3-sets-venn-diagrams.ts`)
- [ ] Define subtopics with progression structure:
  ```typescript
  export const S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS = {
    's3-math-sets-basic-operations': {
      displayName: "Basic Set Operations",
      topicName: "sets-basic-operations",
      progressionStructure: {
        sections: [...]
      }
    }
  };
  ```
- [ ] Export TypeScript type for topic IDs:
  ```typescript
  export type SetsVennDiagramsTopicId = keyof typeof S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS;
  ```

---

## 2. Update HomePage.tsx (CRITICAL - Topic Card Display)

**Purpose:** Add the topic card to the home page so users can select it

**Location:** `src/components/HomePage.tsx`

**Required Changes:**
- [ ] Update `Topic` interface category union type (around line 12):
  ```typescript
  category?: 'fractions' | ... | 's3-math-exponents';
  ```

- [ ] Add topic object to `topics` array (around line 74):
  ```typescript
  {
    id: 's3-exponents',
    name: 'Exponents',
    icon: '⚡',
    description: 'Master exponent laws, rational exponents, and scientific notation',
    subtopicCount: 3,
    isActive: true,
    category: 's3-math-exponents',
    grade: 'Secondary 3',
    subject: 'Mathematics',
  },
  ```

⚠️ **CRITICAL:** Without updating HomePage.tsx, the topic card will not appear on the home page and users won't be able to select it.

---

## 3. Update App.tsx (CRITICAL - Entry Point)

**Purpose:** Register the topic category in the application state and type system

**Location:** `src/App.tsx`

**Required Changes:**
- [ ] Add import for topic type:
  ```typescript
  import type { ExponentsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-exponents';
  ```

- [ ] Update `AppState` interface comment (around line 29):
  ```typescript
  selectedCategory: string | null; // Add 's3-math-exponents' to comment
  selectedTopic: TrigonometryTopicId | CircleGeometryTopicId | ... | ExponentsTopicId | null;
  ```

- [ ] Update `AppContextType` interface (around line 44):
  ```typescript
  handleTopicSelect: (topicId: ... | ExponentsTopicId) => void;
  ```

- [ ] Update `handleTopicSelect` function (around line 83):
  ```typescript
  const handleTopicSelect = (topicId: ... | ExponentsTopicId) => { ... };
  ```

⚠️ **CRITICAL:** Without updating App.tsx, the topic won't be accessible from the HomePage and TypeScript will throw errors throughout the app.

---

## 4. Update UI Components (5 Files - ALL CRITICAL)

### 4.1 ✅ LeftPanel.tsx
**Purpose:** Display topics in left navigation panel

**Location:** `src/components/layout/LeftPanel.tsx`

**Required Changes:**
- [ ] Add imports:
  ```typescript
  import { S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-sets-venn-diagrams';
  import type { SetsVennDiagramsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-sets-venn-diagrams';
  ```

- [ ] Add category display name mapping (around line 40):
  ```typescript
  const categoryDisplayNames: Record<string, string> = {
    // ... existing categories
    's3-math-sets-venn-diagrams': 'Sets & Venn Diagrams',
  };
  ```

- [ ] Add icon mapping for subtopics (around line 50):
  ```typescript
  const getTopicIcon = (topicId: string) => {
    // ... existing icons
    if (topicId.startsWith('s3-math-sets-')) {
      const icons = ['📦', '📄', '🔄', '🔗', '🔢', '📏', '⭕', '🎯', '🧩'];
      // ... icon selection logic
    }
  };
  ```

- [ ] Add topic loading in `topicConfigs` useMemo (around line 120):
  ```typescript
  if (category === 's3-math-sets-venn-diagrams') {
    return Object.entries(S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS).map(([id, config]) => ({
      id,
      displayName: config.displayName
    }));
  }
  ```

### 4.2 ✅ ChatInterface.tsx (MOST CRITICAL)
**Purpose:** Core chat logic and topic configuration loading

**Location:** `src/components/ChatInterface.tsx`

**Required Changes:**
- [ ] Add imports (around line 24):
  ```typescript
  import { S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-sets-venn-diagrams';
  import type { SetsVennDiagramsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-sets-venn-diagrams';
  ```

- [ ] Add check in `getTopicConfig()` function (around line 56):
  ```typescript
  if (topicId.startsWith('s3-math-sets-')) {
    return S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS[topicId as SetsVennDiagramsTopicId];
  }
  ```

- [ ] Add case in `getTopicSubtitle()` function (around line 1078):
  ```typescript
  if (topicId.startsWith('s3-math-sets-')) {
    return 'Master sets and Venn diagrams!';
  }
  ```

- [ ] Add case in `getTopicIcon()` function (around line 1101):
  ```typescript
  if (topicId.startsWith('s3-math-sets-')) {
    return '🔄'; // Or any appropriate icon
  }
  ```

⚠️ **CRITICAL:** If ChatInterface.tsx is not updated, topics will appear in the left panel but clicking them will show "No topic configuration found" error and nothing will display.

### 4.3 ✅ SubtopicWelcomeScreen.tsx (CRITICAL)
**Purpose:** Display welcome screen for first-time topic visits

**Location:** `src/components/SubtopicWelcomeScreen.tsx`

**Required Changes:**
- [ ] Add imports (around line 11):
  ```typescript
  import { S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-sets-venn-diagrams';
  import type { SetsVennDiagramsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-sets-venn-diagrams';
  ```

- [ ] Add icon mapping in `getTopicIcon()` function (around line 72):
  ```typescript
  // S3 Sets & Venn Diagrams icons
  if (topicId.includes('sets-fundamentals')) return '📦';
  if (topicId.includes('sets-complement')) return '🔄';
  // ... etc for all Venn diagram subtopics
  ```

- [ ] Add category check (around line 105):
  ```typescript
  } else if (category === 's3-math-sets-venn-diagrams') {
    topicConfig = S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS[topicId as SetsVennDiagramsTopicId];
  }
  ```

⚠️ **CRITICAL:** If SubtopicWelcomeScreen is not updated, the welcome screen will return `null` and nothing will display when clicking a subtopic for the first time.

### 4.4 ✅ SectionProgressTracker.tsx
**Purpose:** Display section progression indicators

**Location:** `src/components/SectionProgressTracker.tsx`

**Required Changes:**
- [ ] Add imports (around line 12):
  ```typescript
  import { S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-sets-venn-diagrams';
  import type { SetsVennDiagramsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-sets-venn-diagrams';
  ```

- [ ] Add check in `getTopicSections()` function (around line 51):
  ```typescript
  if (topicId.startsWith('s3-math-sets-')) {
    const subtopic = S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS[topicId as SetsVennDiagramsTopicId];
    return (subtopic as any)?.progressionStructure?.sections || [];
  }
  ```

---

## 5. Update Service Layer (4 Files)

### 5.1 ✅ subtopicContentLoader.ts
**Purpose:** Load topic content for practice mode and AI context

**Location:** `src/services/subtopicContentLoader.ts`

**Required Changes:**
- [ ] Add import (around line 12):
  ```typescript
  import { S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s3-sets-venn-diagrams';
  ```

- [ ] Add to `topicConfigs` in constructor (around line 35):
  ```typescript
  constructor() {
    this.topicConfigs = {
      // ... existing configs
      ...S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS,
    };
  }
  ```

### 5.2 ✅ notesLoader.ts
**Purpose:** Register notes for the topic (if notes are available)

**Location:** `src/services/notesLoader.ts`

**Required Changes:**
- [ ] Add note imports for each section with notes:
  ```typescript
  's3/math/exponents/ExponentLaws': () => import('../notes/s3/math/exponents/ExponentLaws'),
  's3/math/exponents/RationalExponents': () => import('../notes/s3/math/exponents/RationalExponents'),
  's3/math/exponents/StandardForm': () => import('../notes/s3/math/exponents/StandardForm'),
  ```

**Note:** Only add entries for notes that actually exist. The notes loader uses lazy loading, so the imports won't fail until a user tries to view the notes.

### 5.3 ✅ newPromptResolver.ts (CRITICAL)
**Purpose:** Register topic configuration for AI prompt resolution

**Location:** `src/prompts/newPromptResolver.ts`

**Required Changes:**
- [ ] Add import (around line 28):
  ```typescript
  import { S3_MATH_EXPONENTS_SUBTOPICS, S3_MATH_EXPONENTS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-exponents';
  ```

- [ ] Add check in `getTopicConfig()` method (around line 214, before the throw statement):
  ```typescript
  if (topicId.startsWith('s3-math-exponents-')) {
    const subtopic = S3_MATH_EXPONENTS_SUBTOPICS[topicId as any];
    return { subtopic, global: S3_MATH_EXPONENTS_CONFIG };
  }
  ```

⚠️ **CRITICAL:** Without updating newPromptResolver.ts, the application will throw "Topic not found" errors when trying to generate AI responses.

### 5.4 ✅ configLoader.ts (CRITICAL for Notes Display)
**Purpose:** Register subtopics in mock configuration for notes loading

**Location:** `src/services/configLoader.ts`

**Required Changes:**
- [ ] Add subtopic entries to `mockConfigs` object (before the closing brace around line 1162):
  ```typescript
  's3-math-exponents-laws': {
    id: 's3-math-exponents-laws',
    displayName: 'Exponent Laws',
    grade: 's3',
    subject: 'math',
    topic: 'exponents',
    subtopic: 'laws',
    metadata: {
      difficulty: 'intermediate',
      estimatedMinutes: 50,
      prerequisites: []
    },
    notesComponent: 's3/math/exponents/ExponentLaws',
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
  // Add similar entries for other subtopics
  ```

⚠️ **CRITICAL:** Without updating configLoader.ts, the "View Notes" button will NOT appear when clicking subtopics. The configLoader provides the `notesComponent` path that the notesLoader needs.

---

## 6. Testing Checklist

After making all changes above, verify:

- [ ] **Left Panel Display**
  - Topic category appears in left panel
  - Subtopics are listed when category is expanded
  - Icons display correctly for each subtopic

- [ ] **Chat Interface**
  - Clicking a subtopic loads the chat interface (no errors)
  - Topic name and subtitle display correctly in header
  - Initial greeting and first problem are generated
  - No console errors about "No topic configuration found"

- [ ] **Section Progress**
  - Section progress tracker appears in chat header
  - Sections display with correct titles
  - Progress indicators update correctly

- [ ] **Content Loading**
  - AI can access learning objectives and formulas
  - Practice problems generate correctly
  - Visual tools (if any) render properly

---

## 7. Common Issues and Fixes

### Issue: "Nothing displays" when clicking subtopic (blank screen)
**Symptoms:** Click subtopic → blank screen, no errors, no welcome screen, no chat
**Root Cause:** SubtopicWelcomeScreen.tsx missing topic configuration check
**Why it happens:** Welcome screen is shown for first-time visits. If topicConfig is undefined, it returns null and renders nothing.
**Fix:**
1. Add imports for the topic in SubtopicWelcomeScreen.tsx
2. Add category check in the component (around line 105)
3. Add icon mapping in getTopicIcon() function
**Debug:** Check console - if you see `📺 CenterPanel: Showing SubtopicWelcomeScreen` but nothing displays, this is the issue

### Issue: "Topic not found" error when clicking subtopic
**Symptoms:** Error: "Topic s3-math-exponents-laws not found" at newPromptResolver.ts:213
**Root Cause:** newPromptResolver.ts missing topic import and configuration check
**Why it happens:** The AI service tries to generate prompts but can't find topic configuration
**Fix:**
1. Add import for S3_MATH_EXPONENTS_SUBTOPICS and S3_MATH_EXPONENTS_CONFIG
2. Add if check in getTopicConfig() method before the throw statement

### Issue: "View Notes" button not appearing
**Symptoms:** Subtopic loads fine, but "View Notes" button is missing from the interface
**Root Cause:** configLoader.ts missing subtopic entries in mockConfigs
**Why it happens:** The notesLoader checks configLoader for notesComponent path, but mockConfigs doesn't have the entries
**Fix:**
1. Add all subtopics to mockConfigs object in configLoader.ts
2. Include notesComponent path for each subtopic

### Issue: "Nothing is getting displayed" when clicking topic (with error)
**Cause:** ChatInterface.tsx missing topic configuration check
**Fix:** Add check in `getTopicConfig()` function in ChatInterface.tsx

### Issue: Topic appears in left panel but has no subtopics
**Cause:** LeftPanel.tsx missing topic loading logic
**Fix:** Add category check in `topicConfigs` useMemo

### Issue: Section progress not showing
**Cause:** SectionProgressTracker.tsx missing topic check
**Fix:** Add check in `getTopicSections()` function

### Issue: AI can't access topic content
**Cause:** subtopicContentLoader.ts missing topic configuration
**Fix:** Add topic to constructor's topicConfigs

---

## 8. File Update Summary Template

Use this template when adding a new topic:

```
Topic: [Topic Name]
Category ID: [e.g., s3-math-sets-venn-diagrams]
Prefix: [e.g., s3-math-sets-]

Files Updated:
✅ src/prompt-library/subjects/mathematics/secondary/[topic-file].ts
✅ src/components/HomePage.tsx
✅ src/App.tsx
✅ src/components/layout/LeftPanel.tsx
✅ src/components/ChatInterface.tsx
✅ src/components/SubtopicWelcomeScreen.tsx
✅ src/components/SectionProgressTracker.tsx
✅ src/services/subtopicContentLoader.ts
✅ src/services/notesLoader.ts (if notes exist)
✅ src/prompts/newPromptResolver.ts
✅ src/services/configLoader.ts (if notes exist)

Tested:
✅ Topic appears on HomePage
✅ Left panel display
✅ Chat interface loading
✅ Section progression
✅ Content generation
✅ Notes loading (if applicable)
✅ AI responses work (no "Topic not found" error)
```

---

## 9. Why Each File Is Important

| File | Purpose | Impact if Missing |
|------|---------|-------------------|
| **HomePage.tsx** | Topic card display on home screen | Topic won't appear on home page |
| **App.tsx** | Application state and type system | TypeScript errors, topic not selectable |
| **ChatInterface.tsx** | Core topic loading and chat logic | Topic won't load at all, shows error |
| **SubtopicWelcomeScreen.tsx** | Welcome screen for first-time visits | Nothing displays when clicking subtopic |
| **LeftPanel.tsx** | Navigation and topic display | Topic won't appear in left panel |
| **SectionProgressTracker.tsx** | Section progression UI | Progress tracker won't show |
| **subtopicContentLoader.ts** | Topic content for AI | AI can't access topic-specific content |
| **notesLoader.ts** | Notes registration | Notes won't load when requested |
| **newPromptResolver.ts** | AI prompt generation | "Topic not found" errors, AI can't respond |
| **configLoader.ts** | Notes metadata and configuration | "View Notes" button won't appear |

---

## 10. Architecture Notes

### Why This Pattern?
The system requires explicit registration in multiple files because:
- **Type Safety:** TypeScript needs to know about topic IDs at compile time
- **Dynamic Loading:** Each component independently loads topic configurations
- **No Central Registry:** There's no single registry file that all components import from

### Future Improvement Ideas
- Create a central topic registry that all components import from
- Use dynamic imports to reduce boilerplate
- Add automated tests that verify all files are updated when new topics are added

---

## Quick Copy-Paste Template

When adding a new topic, use this as a starting point:

```typescript
// 1. In LeftPanel.tsx
import { YOUR_TOPIC_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/your-topic';
import type { YourTopicId } from '../prompt-library/subjects/mathematics/secondary/your-topic';

// 2. In ChatInterface.tsx
import { YOUR_TOPIC_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/your-topic';
import type { YourTopicId } from '../prompt-library/subjects/mathematics/secondary/your-topic';

if (topicId.startsWith('your-prefix-')) {
  return YOUR_TOPIC_SUBTOPICS[topicId as YourTopicId];
}

// 3. In SectionProgressTracker.tsx
import { YOUR_TOPIC_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/your-topic';
import type { YourTopicId } from '../prompt-library/subjects/mathematics/secondary/your-topic';

if (topicId.startsWith('your-prefix-')) {
  const subtopic = YOUR_TOPIC_SUBTOPICS[topicId as YourTopicId];
  return (subtopic as any)?.progressionStructure?.sections || [];
}

// 4. In subtopicContentLoader.ts
import { YOUR_TOPIC_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/your-topic';

constructor() {
  this.topicConfigs = {
    ...YOUR_TOPIC_SUBTOPICS,
  };
}
```

---

**Last Updated:** 2025-10-17
**Verified Topics:**
- ✅ Trigonometry (7 subtopics)
- ✅ Circle Geometry (7 subtopics)
- ✅ Quadratic Equations (13 subtopics)
- ✅ Exponential & Logarithms (9 subtopics)
- ✅ Sets & Venn Diagrams (9 subtopics)
- ✅ Exponents (3 subtopics) - **FULLY TESTED** *(including newPromptResolver & configLoader fixes)*

**Total Files Required Per Topic:** 11 files (1 topic config + HomePage.tsx + App.tsx + 5 UI components + 4 service files)
