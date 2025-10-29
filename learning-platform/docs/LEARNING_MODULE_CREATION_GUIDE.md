# Learning Module Creation Guide

## Overview
This document outlines the standard process for creating a complete learning module for the AI Campus tutoring platform.

---

## Required Inputs

### 1. Source Material
- **PDF/Textbook**: Topic content with comprehensive coverage
  - Should include explanations, examples, and exercises
  - Provides the authoritative source for topic structure

### 2. Reference Examples
- **Existing Topic Configuration**: Use any existing topic config (e.g., `s3-surds-radicals.ts`)
  - Demonstrates structure, formatting, and progression patterns
  - Shows mastery rubric organization

- **Existing Notes Files**: Use any existing notes (e.g., from relations-functions topic)
  - Demonstrates dark theme compatible styling
  - Shows interactive examples and practice problems

### 3. Project Documentation
- **CLAUDE.md**: Architecture and build instructions

---

## Standard Process

### Step 1: Content Analysis & Structure Extraction
**Input**: Source PDF/textbook material

**Tasks**:
- Read through the entire source material
- Identify main subtopics (typically 4-8 subtopics)
- Break down each subtopic into logical sections (typically 2-4 sections each)
- Note learning progression (foundational → intermediate → advanced)
- Identify prerequisite relationships between sections

**Output**: Structured outline with:
- List of subtopics
- Sections within each subtopic
- Difficulty levels
- Learning flow and dependencies

### Step 2: Notes Files Creation
**Input**:
- Extracted structure from Step 1
- Source material content
- Reference notes files for styling

**Tasks**:
- Create one React/TypeScript `.tsx` file per subtopic
- Location: `learning-platform/src/notes/s3/[subject]/[topic-name]/`
- Follow dark theme compatible styling patterns
- Include interactive elements (expandable sections, collapsible solutions)

**Required Components per Notes File**:
- Header with gradient background and topic title
- Multiple sections (one per major concept)
- Worked examples with step-by-step solutions
- Practice problems with expandable solutions
- Key takeaways summary box
- Consistent color coding for different element types

**Styling Requirements**:
- Use Tailwind CSS classes throughout
- Include `dark:` variants for all colors, backgrounds, borders
- Use semantic color schemes (blue/indigo for primary, green for success, red for errors, yellow for warnings)
- Maintain consistent spacing and typography
- Ensure text remains readable in both light and dark modes

### Step 3: Configuration File Creation
**Input**:
- Extracted structure from Step 1
- Created notes from Step 2
- Reference config file (e.g., `s3-surds-radicals.ts`)

**Tasks**:
- Create topic configuration TypeScript file
- Location: `learning-platform/src/prompt-library/subjects/mathematics/secondary/[topic-name].ts`
- Follow prompt library architecture

**Required Structure**:

```typescript
// 1. Type exports
export type [Topic]TopicId =
  | 'subtopic-1-id'
  | 'subtopic-2-id'
  // ... etc

// 2. Tutor customization
export const [TOPIC]_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `...`,
  visualToolsGuidance: `...`
}

// 3. Available math tools
export const [TOPIC]_MATH_TOOLS = ["tool1", "tool2"]

// 4. Subtopics configuration
export const [TOPIC]_SUBTOPICS = {
  'subtopic-1-id': {
    displayName: '...',
    topicName: '...',
    progressionStructure: {
      sections: [...]
    },
    learningObjectives: [...],
    keyFormulas: `...`
  },
  // ... more subtopics
}
```

**Per Section Requirements**:
- `id`: Unique section identifier
- `title`: Display title
- `difficulty`: "foundational" | "intermediate" | "advanced" (with transitions)
- `prerequisites`: Array of prerequisite section IDs
- `masterySignals`: Clear success criteria
- `estimatedQuestions`: "X-Y questions"
- `masteryRubric`: Three levels with quantitative and qualitative indicators
  - `mastery`: What proficiency looks like
  - `developing`: What partial understanding looks like
  - `struggling`: Common errors and misconceptions
- `learningObjectives`: Specific, measurable goals
- `relevantFormulas`: Key formulas with examples
- `sampleProblems`: (Optional) Example problems
- `availableTools`: Visual tools for this section

### Step 4: Firestore Configuration Upload
**Input**:
- Completed config file from Step 3
- Created notes from Step 2

**Overview**:
Subtopic configurations are now stored in Firestore (not hardcoded). You need to add your new subtopic configs to the Firestore `subtopics` collection.

**Configuration Structure for Firestore**:
Each subtopic requires a document in the `subtopics/{subtopicId}` collection with this structure:

```typescript
{
  id: string;                      // "s3-math-[topic]-[subtopic]"
  displayName: string;             // "Display Name for UI"
  grade: string;                   // "s3" or "s4"
  subject: string;                 // "math"
  topic: string;                   // "topic-name"
  subtopic: string;                // "subtopic-name"

  metadata: {
    difficulty: string;            // "beginner" | "intermediate" | "advanced"
    estimatedMinutes: number;      // 45
    prerequisites: string[];       // ["prerequisite-subtopic-id"]
  },

  notesComponent: string;          // "s3/math/topic-name/SubtopicName"
  teachingTemplate: string;        // "" (populated by AI system)

  scoring: {
    easy: { basePoints: 0.10, hintPenalties: [0.02, 0.04, 0.06] },
    medium: { basePoints: 0.20, hintPenalties: [0.04, 0.08, 0.12] },
    hard: { basePoints: 0.30, hintPenalties: [0.06, 0.12, 0.20] }
  },

  modules: {
    learn: true,
    practice: true,
    visualizations: true
  },

  // Auto-generated timestamps
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

**Upload Methods**:

**Option A: Using Migration Script (Recommended)**
1. Add your subtopic configs to `scripts/migrateAllConfigs.ts`
2. Add to the appropriate array (or create a new one)
3. Run the migration script:
   ```bash
   npx tsx scripts/migrateAllConfigs.ts
   ```
4. Verify in Firebase Console → Firestore Database → `subtopics` collection

**Option B: Firebase Console (Quick for 1-2 subtopics)**
1. Go to Firebase Console → Firestore Database
2. Navigate to `subtopics` collection
3. Click "Add document"
4. Use the subtopic ID as the document ID
5. Add all required fields manually

**Option C: Admin Script (For bulk updates)**
Create a custom script similar to `migrateAllConfigs.ts` for your specific topic.

### Step 5: Platform Integration
**Input**:
- Configs uploaded to Firestore (Step 4)
- Created notes from Step 2
- Completed config file from Step 3

**Overview**:
After uploading configs to Firestore and creating your topic configuration file, you need to register your topic in the browser application and update UI files.

**📋 For detailed step-by-step instructions, see:**
👉 **[ADDING_NEW_TOPICS_CHECKLIST.md](./ADDING_NEW_TOPICS_CHECKLIST.md)**

**Files Requiring Manual Updates (10 total)**:

**AI/Backend Integration (2 files)**:
1. **newPromptResolver.ts** - Import your topic and register it
   - Add import at top: `import { YOUR_TOPIC_SUBTOPICS, YOUR_TOPIC_CONFIG } from '../prompt-library/subjects/mathematics/secondary/your-topic'`
   - Add to `registerBrowserTopics()` function: `registerTopics(YOUR_TOPIC_SUBTOPICS, YOUR_TOPIC_CONFIG);`

2. **configLoader.ts** - Fetches from Firestore automatically (no changes needed if configs uploaded)

**UI Integration (8 files)**:
3. **HomePage.tsx** - Add topic card to UI
4. **App.tsx** - Update application state types
5. **LeftPanel.tsx** - Add to navigation panel
6. **ChatInterface.tsx** - Update chat interface logic
7. **SubtopicWelcomeScreen.tsx** - Add to welcome screen
8. **SectionProgressTracker.tsx** - Update progress UI
9. **subtopicContentLoader.ts** - Register content loader
10. **notesLoader.ts** - Register notes components

**How Topic Registration Works** (Browser-Only):
1. Create your config file: `src/prompt-library/subjects/mathematics/secondary/your-topic.ts`
2. Export following naming conventions:
   - `YOUR_TOPIC_SUBTOPICS` or `S3_MATH_YOUR_TOPIC` for subtopics object
   - `YOUR_TOPIC_CONFIG` for global configuration
3. Import in `newPromptResolver.ts` (line ~24-37)
4. Register in `registerBrowserTopics()` function (line ~43-84)
5. Topics are immediately available when app loads in browser

**Example Registration**:
```typescript
// In newPromptResolver.ts

// 1. Add import at top
import { P5_FRACTIONS_SUBTOPICS, P5_FRACTIONS_CONFIG } from '../prompt-library/subjects/mathematics/primary/p5-fractions';

// 2. Register in function
function registerBrowserTopics() {
  const registry = PromptRegistry.getInstance();

  const registerTopics = (subtopics, config) => { /* helper function */ };

  // ... existing registrations ...

  // Add your new topic
  registerTopics(P5_FRACTIONS_SUBTOPICS, P5_FRACTIONS_CONFIG);

  console.log(`[NewPromptResolver] Registered ${registry.listSubtopicIds().length} subtopics from static imports`);
}
```

**Verification**:
After creating your config file and updating all files:

1. **Build Test**:
   ```bash
   npm run build
   ```
   - Should complete without TypeScript errors
   - Verify your imports are found

2. **Runtime Test**:
   ```bash
   npm run dev
   ```
   - Check browser console for: `[NewPromptResolver] Registered X subtopics from static imports`
   - X should include your new subtopics
   - Navigate to your topic and verify it loads

3. **Quick Verification Checklist**:
   - [ ] `npm run build` succeeds
   - [ ] Configs visible in Firestore Console
   - [ ] Topic card appears on HomePage
   - [ ] Subtopics load when clicked
   - [ ] Chat interface works without errors
   - [ ] Notes display correctly (if applicable)
   - [ ] AI responses generate successfully
   - [ ] Console shows correct number of registered subtopics

---

## Topic Registry Architecture

### Overview
The platform uses a **centralized PromptRegistry** that stores all topic configurations. Topics are registered via static imports when the application loads in the browser.

### How It Works

**1. Static Import**
- All topics are imported at the top of `newPromptResolver.ts`
- Imports happen when the browser loads the JavaScript bundle
- Example: `import { S3_MATH_TRIGONOMETRY_SUBTOPICS, S3_MATH_TRIGONOMETRY_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-trigonometry'`

**2. Registration Function**
- `registerBrowserTopics()` function runs immediately when module loads (line 87)
- Loops through all imported topics and registers them with `PromptRegistry`
- Each subtopic gets registered with its config and metadata

**3. Registry Storage**
- Central `PromptRegistry` singleton stores all topics
- Maps subtopic IDs to their full configuration
- Includes learning objectives, progression structure, agent customizations

**4. Prompt Resolution**
- `newPromptResolver` queries the registry synchronously
- Topics are already loaded, no async/await needed
- Clean error messages show available topics if lookup fails

### Supported Export Patterns

Your topic file should export these constants:

```typescript
// Pattern 1: Modern (Recommended)
export const S3_MATH_TOPIC_SUBTOPICS = { ... }
export const S3_MATH_TOPIC_CONFIG = { ... }

// Pattern 2: Legacy (Also Supported)
export const S3_MATH_TOPIC = { ... }  // Without _SUBTOPICS suffix
export const S3_MATH_TOPIC_CONFIG = { ... }
```

Both patterns work with the registration system.

### Adding a New Topic (2 Steps)

**Step 1: Import**
```typescript
// In newPromptResolver.ts (line ~24-37)
import { P5_FRACTIONS_SUBTOPICS, P5_FRACTIONS_CONFIG } from '../prompt-library/subjects/mathematics/primary/p5-fractions';
```

**Step 2: Register**
```typescript
// In registerBrowserTopics() function (line ~43-84)
registerTopics(P5_FRACTIONS_SUBTOPICS, P5_FRACTIONS_CONFIG);
```

That's it! The topic is immediately available when the app loads.

### Benefits

**For Browser Compatibility:**
- ✅ No filesystem access needed (works in all browsers)
- ✅ All topics bundled and ready on page load
- ✅ No async loading delays or race conditions
- ✅ Works offline after initial load

**For Scalability:**
- ✅ Supports 100+ topics
- ✅ Central registry for easy lookup
- ✅ Consistent API across all topics
- ✅ Type-safe imports

**For Maintainability:**
- ✅ Clear 2-step process to add topics
- ✅ Build fails fast if imports are wrong
- ✅ Easy to see all registered topics in one place
- ✅ Self-documenting code structure

---

## Quality Checklist

### Content Quality
- [ ] All major concepts from source material covered
- [ ] Logical progression from simple to complex
- [ ] Clear prerequisites defined
- [ ] Multiple worked examples per concept
- [ ] Practice problems with full solutions
- [ ] Real-world applications mentioned

### Technical Quality
- [ ] TypeScript types properly defined
- [ ] Dark theme fully compatible
- [ ] Interactive elements work correctly
- [ ] Consistent naming conventions
- [ ] Proper file organization
- [ ] No hardcoded values

### Educational Quality
- [ ] Mastery rubrics are specific and measurable
- [ ] Learning objectives are clear and achievable
- [ ] Formulas include examples
- [ ] Common mistakes documented in "struggling" rubrics
- [ ] Progressive difficulty maintained
- [ ] Socratic teaching approach emphasized

### Accessibility
- [ ] Color contrast sufficient in both themes
- [ ] Text remains readable in all modes
- [ ] Semantic HTML used
- [ ] Clear visual hierarchy
- [ ] Mathematical notation properly formatted

---

## Deliverables

### Files to Create
1. **Notes Files** (1 per subtopic)
   - Format: `.tsx` React components
   - Location: `learning-platform/src/notes/s3/[subject]/[topic-name]/`
   - Size: Typically 18-26KB per file

2. **Configuration File** (1 per topic)
   - Format: `.ts` TypeScript
   - Location: `learning-platform/src/prompt-library/subjects/mathematics/secondary/[topic-name].ts`
   - Size: Typically 800-1,200 lines
   - **Must Register**: Add import and registration in `newPromptResolver.ts`

3. **Firestore Subtopic Configs** (1 per subtopic)
   - Format: JSON documents in Firestore
   - Location: `subtopics/{subtopicId}` collection
   - Added via: Migration script or Firebase Console
   - Size: ~500 bytes per document

### Code Updates Required
1. **newPromptResolver.ts**: Add import and registration (2 lines)
2. **8 UI files**: Add topic to UI components (see checklist)


---

## Typical Metrics

### Scope
- **Subtopics**: 4-8 per topic
- **Sections**: 12-20 total across all subtopics
- **Questions**: 60-100 total (4-5 per section)
- **Notes Files**: 100-180KB total
- **Config File**: 800-1,500 lines

### Difficulty Distribution
- Foundational: 20-30% of sections
- Intermediate: 40-50% of sections
- Advanced: 20-30% of sections

### Time Estimates
- Content analysis: Review entire source material
- Notes creation: 1 file per subtopic with full examples
- Config creation: Complete progression structures with rubrics
- Quality review: Verify all requirements met

---

## Best Practices

### Content Development
1. Start with foundational concepts
2. Build complexity gradually
3. Use consistent terminology
4. Provide multiple examples per concept
5. Include visual aids where helpful

### Code Organization
1. One concept per notes file
2. Group related formulas together
3. Use descriptive variable names
4. Comment complex sections
5. Maintain consistent formatting

### Educational Design
1. Socratic questioning over direct instruction
2. Progressive hints rather than immediate answers
3. Celebrate student insights
4. Address common misconceptions explicitly
5. Connect to real-world applications

### TTS Optimization
1. Separate speech.text (plain) from display.content (formatted)
2. Spell out mathematical symbols in speech
3. Use clear pronunciation guides
4. Avoid markdown/LaTeX in speech text
5. Keep speech conversational

### Firestore Configuration Management
1. Use consistent ID format: `s3-math-[topic]-[subtopic]`
2. Always include full topic path in IDs (not just subtopic name)
3. Verify `notesComponent` path matches actual file location
4. Test configs in Firestore before bulk migration
5. Use migration scripts for multiple subtopics
6. Maintain consistency in difficulty levels and prerequisites
7. Keep metadata accurate (estimatedMinutes, difficulty)
8. Use Firebase Console for quick single-config updates

### Topic Registration Best Practices
1. **File Naming**: Use consistent pattern: `s3-topic-name.ts`, `s4-topic-name.ts`, `p5-topic-name.ts`
2. **Export Naming**: Follow conventions:
   - `[TOPIC]_SUBTOPICS` or `S3_MATH_[TOPIC]` for subtopics object
   - `[TOPIC]_CONFIG` for global configuration
3. **Import Location**: Add imports at top of `newPromptResolver.ts` (lines 24-37)
4. **Registration**: Add `registerTopics()` call in `registerBrowserTopics()` function (lines 43-84)
5. **Build Verification**: Run `npm run build` to catch any import/type errors
6. **Console Monitoring**: Check browser console for "Registered X subtopics from static imports"
7. **Error Handling**: If topic not found, verify:
   - Import path is correct
   - Exports follow naming conventions
   - Added to `registerBrowserTopics()` function
8. **Keep Organized**: Group imports and registrations by grade level (S3, S4, P5, etc.)

---

## Example Topic IDs Structure

```typescript
// Topic: [Subject]-[Level]-[TopicName]
's3-math-coordinate-geometry'

// Subtopics: [Topic]-[SubtopicName]
's3-math-coord-geom-fundamentals'
's3-math-coord-geom-gradient'
's3-math-coord-geom-applications'

// Sections: [concept-name]
'cartesian-plane'
'distance-formula'
'parallel-lines'
```

---

## Success Criteria

A complete learning module should:
- ✅ Cover all content from source material
- ✅ Follow established architectural patterns
- ✅ Support both light and dark themes
- ✅ Include interactive learning elements
- ✅ Provide clear mastery criteria
- ✅ Enable Socratic teaching approach
- ✅ Scale across K-12 subjects
- ✅ Be properly registered in newPromptResolver.ts
- ✅ Pass all verification tests
- ✅ Be ready for production deployment

### Verification Tests

Before considering a module complete, verify:

1. **Build Test**:
   ```bash
   npm run build
   ```
   - ✅ No TypeScript errors
   - ✅ No import/export issues
   - ✅ All types resolve correctly
   - ✅ Build completes successfully

2. **Registration Verification**:
   - ✅ Import added to `newPromptResolver.ts` (lines 24-37)
   - ✅ Registration added to `registerBrowserTopics()` (lines 43-84)
   - ✅ Export names match import names
   - ✅ File path is correct

3. **Runtime Test** (using `npm run dev`):
   - ✅ Topic appears in topic list UI
   - ✅ Subtopics load without errors
   - ✅ AI generates responses correctly
   - ✅ Progress tracking works
   - ✅ Notes display properly (if applicable)
   - ✅ Math tools render correctly

4. **Console Verification**:
   - ✅ Browser console shows: `[NewPromptResolver] Registered X subtopics from static imports`
   - ✅ X includes your new subtopics
   - ✅ No "Topic not found" errors
   - ✅ No import/module errors
   - ✅ ConfigLoader fetches from Firestore successfully
