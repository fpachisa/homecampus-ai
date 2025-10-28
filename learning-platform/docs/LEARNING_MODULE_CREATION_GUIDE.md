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
After uploading configs to Firestore, you must integrate your topic into the platform UI by updating 9 core files. ConfigLoader automatically fetches from Firestore, so no configuration updates needed there.

**📋 For detailed step-by-step instructions, see:**
👉 **[ADDING_NEW_TOPICS_CHECKLIST.md](./ADDING_NEW_TOPICS_CHECKLIST.md)**

The checklist provides:
- ✅ Exact file locations and line numbers
- ✅ Copy-paste code snippets for each change
- ✅ Common issues and debugging solutions
- ✅ Detailed explanations of why each file matters
- ✅ Testing procedures to verify integration

**Files to Update (9 total)**:
1. **HomePage.tsx** - Topic card display
2. **App.tsx** - Application state and types
3. **LeftPanel.tsx** - Navigation panel
4. **ChatInterface.tsx** - Core chat logic
5. **SubtopicWelcomeScreen.tsx** - Welcome screen
6. **SectionProgressTracker.tsx** - Progress UI
7. **subtopicContentLoader.ts** - Content loading
8. **notesLoader.ts** - Notes registration
9. **newPromptResolver.ts** - AI prompt resolution

**Note**: `configLoader.ts` no longer needs manual updates - it automatically fetches configs from Firestore.

**Quick Verification**:
After completing all updates from the checklist:
- [ ] Run `npm run build` - no TypeScript errors
- [ ] Configs visible in Firestore Console
- [ ] Topic card appears on HomePage
- [ ] Subtopics load when clicked
- [ ] Chat interface works without errors
- [ ] Notes display correctly (if applicable)
- [ ] AI responses generate successfully
- [ ] ConfigLoader fetches configs from Firestore (check browser console)

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

3. **Firestore Subtopic Configs** (1 per subtopic)
   - Format: JSON documents in Firestore
   - Location: `subtopics/{subtopicId}` collection
   - Added via: Migration script or Firebase Console
   - Size: ~500 bytes per document


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
- ✅ Be ready for production deployment
