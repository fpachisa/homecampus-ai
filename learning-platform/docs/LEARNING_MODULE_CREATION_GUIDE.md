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

### Step 0: Prerequisites & Planning (Before You Start)

Before creating a learn module, ensure you have everything needed and make key decisions upfront.

#### Required Materials
- [ ] **PDF textbook/course material** with comprehensive content
  - Should include explanations, examples, and exercises
  - Provides authoritative source for topic structure
- [ ] **Topic information**: Display name, grade level, subject
- [ ] **Reference examples**: Existing topic config and notes files

#### Environment Setup
- [ ] Development environment running (`npm run dev`)
- [ ] Firebase credentials configured (for Firestore upload)
- [ ] API keys set in `.env`:
  - `VITE_GEMINI_API_KEY` (for greeting generation)
  - `VITE_GOOGLE_TTS_API_KEY` (optional, for audio generation)

#### Planning Decisions

**1. Topic Structure** (decide early):
```
Topic ID: s1-math-[topic-name]       (e.g., s1-math-fractions)
Display Name: [Topic Name]            (e.g., "Fractions")
Grade Level: Secondary 1 / S1
Subject: Mathematics
Estimated Subtopics: 4-8              (based on PDF structure)
```

**2. Math Tools Assessment** (review existing tools first):

Available tools in `mathToolsRegistry.ts`:
- **Fractions**: fractionBar, numberLine
- **Geometry**: rightTriangle, generalTriangle, coordinatePlane, circleDiagram, cuboid, pyramid
- **Algebra**: functionGraph, quadraticVisualizer, exponentialGraph
- **Trigonometry**: unitCircle, bearings
- **Vectors**: vectorDiagram, dotProduct
- **And 10+ more...**

**Decision Framework**:
1. Can existing tools visualize the concepts? → **Use existing** (saves 3-5 hours per tool)
2. Does topic need unique visualization? → **Evaluate necessity and reusability**
3. Will new tool be used across multiple topics? → **Worth building**
4. Is it nice-to-have but not critical? → **Defer to later iteration**

Document your decision:
```markdown
Math Tools Plan:
- Use existing: fractionBar, numberLine
- Create new: [tool-name] - Reason: [justification]
  - Priority: HIGH/MEDIUM/LOW
  - Est. dev time: X hours
  - Reusable for: [other topics]
```

**3. Notes Strategy**:
- **Full notes**: Detailed explanations, examples, practice (recommended)

#### Output of Step 0
- [ ] Topic metadata documented
- [ ] Math tools plan created (reuse vs new)
- [ ] Development environment verified
- [ ] Ready to analyze PDF content

---

### Step 1: Content Analysis & Structure Extraction
**Input**: Source PDF/textbook material

**Tasks**:
1. **Read through the entire source material**
   - Understand the overall topic structure
   - Note key concepts and their relationships
   - Identify natural breaking points for subtopics

2. **Identify main subtopics** (typically 4-8 subtopics)
   - Look for chapter divisions or major concept groups
   - Each subtopic should be substantial enough for 45-60 minutes of learning
   - Example: For "Fractions" → Introduction, Adding/Subtracting, Multiplying/Dividing, Equivalence, Mixed Numbers

3. **Break down each subtopic into logical sections** (typically 2-4 sections each)
   - Sections represent progressive learning steps
   - Each section = one assessable concept
   - Assign difficulty: foundational → foundational-to-intermediate → intermediate → intermediate-to-advanced → advanced
   - Example: "Adding Fractions" → Like Denominators (foundational), Unlike Denominators (intermediate), Word Problems (advanced)

4. **Identify prerequisite relationships**
   - Which sections must be mastered before others?
   - Document dependencies clearly
   - Ensures logical progression

5. **Identify visual learning opportunities** (CRITICAL):
   - Which concepts would benefit from interactive visualization?
   - For each potential visualization:
     - Check if existing tool in registry can be used
     - If new tool needed, justify and assess priority
     - Consider: Does it enhance understanding or just decoration?

   Example assessment:
   ```
   Section: Adding Fractions with Unlike Denominators
   Visual opportunity: Show fraction bars with different divisions
   Tool decision: Use existing "fractionBar" tool
   Parameters needed: numerator1, denominator1, numerator2, denominator2, operation

   Section: Fraction Equivalence
   Visual opportunity: Interactive circle divided into segments
   Tool decision: CREATE NEW "fractionCircle" tool
   Justification: Circle visualization is pedagogically distinct from bar model
   Priority: HIGH (central to understanding equivalence)
   Reusable for: Decimals, Percentages, Ratio topics
   ```

**Output**: Structured outline with:
- **Subtopics list** with display names
- **Sections within each subtopic** with:
  - Section ID and title
  - Difficulty level
  - Prerequisite section IDs
  - Key concepts covered
  - Learning objectives (draft)
  - Important formulas
- **Difficulty progression** mapped out
- **Prerequisite dependency map**
- **Math tools plan** (per section):
  - Existing tools to use
  - New tools to create (with justification and priority)
  - Parameters each tool needs

**Time estimate**: 1.5-2 hours for thorough analysis

### Step 2: Notes Files Creation (VERY CRITICAL)

Notes files are React/TypeScript components that provide reference material for each subtopic. They are displayed when students click "View Notes" in the learn module.

**Input**:
- Extracted structure from Step 1
- Source material content (from PDF)
- Reference notes files for styling (e.g., `src/notes/s3/math/relations-functions/`)

#### 2.1 File Organization

**Create one `.tsx` file per subtopic**:
- **Location**: `learning-platform/src/notes/[grade]/[subject]/[topic-name]/`
  - Example: `src/notes/s1/math/fractions/AddingFractions.tsx`
- **Naming**: PascalCase matching subtopic name
- **Count**: Typically 4-8 files per topic (one per subtopic)

#### 2.2 Required Structure Per File

Every notes file MUST include these components in order:

**1. Header Section** (with gradient background):
```tsx
<div className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white p-6 rounded-t-lg">
  <h1 className="text-3xl font-bold">Subtopic Title</h1>
  <p className="mt-2 text-blue-100">Brief description of what this subtopic covers</p>
</div>
```

**2. Main Content Sections** (2-4 sections per file):

Each section should include:
```tsx
<section className="mb-8">
  <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
    Section Title
  </h2>

  {/* Concept explanation */}
  <div className="mb-6">
    <p className="text-gray-700 dark:text-gray-300 mb-4">
      Explanation text with proper dark theme support...
    </p>
  </div>

  {/* Worked example */}
  <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-6">
    <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">
      Example: [Title]
    </h3>
    <p className="text-gray-700 dark:text-gray-300">
      Step-by-step solution...
    </p>
  </div>

  {/* Practice problem with expandable solution */}
  <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
    <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
      Practice: [Problem]
    </h3>
    <button
      onClick={() => setShowSolution1(!showSolution1)}
      className="mt-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700 text-white rounded transition-colors"
    >
      {showSolution1 ? 'Hide' : 'Show'} Solution
    </button>
    {showSolution1 && (
      <div className="mt-4 p-4 bg-white dark:bg-gray-800 rounded border border-yellow-300 dark:border-yellow-700">
        Solution steps...
      </div>
    )}
  </div>
</section>
```

**3. Key Takeaways Box** (at end of file):
```tsx
<div className="bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 p-6 rounded mt-8">
  <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-3">
    Key Takeaways
  </h3>
  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
    <li>Main concept 1</li>
    <li>Main concept 2</li>
    <li>Main concept 3</li>
  </ul>
</div>
```

#### 2.3 Dark Theme Requirements (CRITICAL - Common Pitfall)

**Every color, background, and border MUST have a `dark:` variant.**

Common patterns:
```tsx
// Backgrounds
bg-white dark:bg-gray-800
bg-gray-50 dark:bg-gray-900
bg-blue-50 dark:bg-blue-900/30          // Colored backgrounds with opacity
bg-yellow-50 dark:bg-yellow-900/20

// Text
text-gray-900 dark:text-gray-100         // Primary text
text-gray-700 dark:text-gray-300         // Secondary text
text-gray-600 dark:text-gray-400         // Tertiary text

// Borders
border-gray-200 dark:border-gray-700
border-blue-500 (same in both modes)     // Accent colors usually consistent

// Interactive elements
bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700
```

**Common mistakes to avoid**:
- ❌ Forgetting `dark:` on hover states
- ❌ Forgetting `dark:` on borders
- ❌ Using pure white/black without alternatives
- ❌ Not testing in dark mode before finishing

#### 2.4 LaTeX Formatting in Notes (VERY VERY VERY CRITICAL)

**⚠️ DO NOT, I repeat DO NOT use LaTeX if it can be done through unicode. DO NOT use LaTeX for text formtting or currency ($) sign. **
** ONLY Use LaTeX if it's ABSOLUTELY mandatory life complex fractions

**⚠️ IMPORTANT: Always Use the Shared MathText Component**

All notes files MUST use the shared `MathText` component from `src/components/MathText.tsx`. This component:
- Properly handles LaTeX rendering with KaTeX


**❌ NEVER create custom LaTeX parsers** - This leads to buggy, unmaintainable code.

---

**Import the Component**:
```tsx
import MathText from '../../../../components/MathText';
```

---

**LaTeX Escaping Rules (CRITICAL)**:

**Rule 1: Wrap in string literals when LaTeX contains curly braces `{}`**

✅ CORRECT - Wrap in string literal with single quotes
<MathText>{'$\\sqrt{144}$'}</MathText>
<MathText>{'$\\frac{1}{2}$'}</MathText>
<MathText>{'$x^{2n}$'}</MathText>
<MathText>{'$2^{10}$'}</MathText>

❌ Wrong:   
<MathText>$\\frac{1}{2}$</MathText>  // without braces is WRONG

**Rule 2: Use LaTeX if ABSOLUTELY necessary**

❌ WRONG:
<MathText>$x + 3y - 5 = 0$</MathText>      \\simple text doesn't need LaTeX
<MathText>$2 \times 3 = 6$</MathText>  \\Use unicode symbols wherever available

✅  Correct: 
x + 3y - 5 = 0
2 × 3 = 6


**Rule 3: Use currency Dollar Signs Outside Math**:
```tsx
✅ Correct: <p>The cost is $150</p>
❌ Wrong:   <p><MathText>$The cost is \$150$</MathText></p> 
```

---

**Testing Checklist**:
- [ ] Test in dev environment (`npm run dev`)
- [ ] Verify in BOTH light and dark modes
- [ ] Check browser console for errors
- [ ] Verify no TypeScript errors (red squiggles)
- [ ] Test all expandable solutions
- [ ] Verify math renders correctly (not raw LaTeX code)



---

**Quick Debugging Guide**:

**Symptom**: TypeScript errors about invalid characters or unexpected tokens
→ **Fix**: Wrap LaTeX in `{'...'}`

**Symptom**: Math shows as raw LaTeX code (e.g., `\sqrt{144}` instead of √144)
→ **Fix**: Check for double backslashes, use single backslash

**Symptom**: Component not found or import errors
→ **Fix**: Verify `import MathText from '../../../../components/MathText';`

**Symptom**: Math renders in light mode but not dark mode
→ **Fix**: You created a custom parser - delete it and use MathText

**Symptom**: Build succeeds but math doesn't render
→ **Fix**: Check browser console for KaTeX errors, verify LaTeX syntax is valid

#### 2.5 Interactive Elements

**State management for expandable solutions**:
```tsx
import { useState } from 'react';

export default function SubtopicNotes() {
  // One state variable per expandable section
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);

  return (
    // ... component JSX
  );
}
```

**Collapsible sections** (for optional deep dives):
```tsx
const [showAdvanced, setShowAdvanced] = useState(false);

<div className="mt-6">
  <button
    onClick={() => setShowAdvanced(!showAdvanced)}
    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
  >
    <span>{showAdvanced ? '▼' : '▶'}</span>
    <span>Advanced Topic: [Title]</span>
  </button>
  {showAdvanced && (
    <div className="mt-4 ml-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded border-l-2 border-blue-500">
      Advanced content...
    </div>
  )}
</div>
```
#### 2.5.1  VISUAL AIDS (CRITICAL):

Use as many visual aids, graphs, to make the notes readable and help learning experience.

#### 2.6 Content Quality Guidelines

**Worked Examples**:
- Start with simple, clear examples
- Progress to more complex scenarios
- Show ALL steps (don't skip "obvious" ones)
- Explain WHY each step is taken, not just WHAT
- Include common variations

**Practice Problems**:
- 2-4 practice problems per section
- Vary difficulty (easy, medium, hard)
- Solutions should match the step-by-step style of examples
- Include final answers clearly

**Explanations**:
- Use conversational tone
- Connect to real-world applications when possible
- Address common misconceptions explicitly
- Use analogies where helpful

#### 2.7 Verification Checklist

Before considering notes complete:

**Dark Theme & Styling**:
- [ ] All sections have `dark:` theme variants
- [ ] Tested in both light AND dark modes
- [ ] All colors have sufficient contrast (check accessibility)
- [ ] Consistent styling throughout

**LaTeX & Math Rendering** (Critical - see Section 2.4 for details):
- [ ] Using shared `MathText` component (NOT custom parser)
- [ ] Import statement correct: `import MathText from '../../../../components/MathText';`
- [ ] LaTeX with curly braces `{}` wrapped in string literals: `<MathText>{'$\\sqrt{144}$'}</MathText>`
- [ ] Single backslash used in JSX (NOT double)
- [ ] All math renders correctly (not raw LaTeX code)
- [ ] LaTeX tested in dev environment (`npm run dev`)
- [ ] No TypeScript errors related to "Invalid character" or "Unexpected token"
- [ ] Browser console shows no KaTeX errors

**Functionality**:
- [ ] All expandable solutions work
- [ ] No TypeScript errors or warnings
- [ ] Imports are correct
- [ ] Examples progress logically
- [ ] Practice problems have full solutions
- [ ] Key takeaways accurately summarize content

**Time estimate**: 20-30 minutes per notes file with AI assistance = 2-2.5 hours for 5 files total

---

### Step 2.5: Math Tools Creation (VERY CRITICAL - Only If New Tools Needed)

Based on your math tools plan from Step 1, create any new interactive visualizations that are essential for the topic.
Think to note: the parametes used in the math tool should be easy to use and not ambiguous as AI will be generating these paramters on the fly so instruction should be very clear.

**⚠️ When to Create New Tools**:

Only create new tools if:
1. Concept cannot be visualized effectively with existing tools
2. Tool will be reused across multiple topics/sections
3. Significantly enhances learning (not just decorative)
4. You have development time available (3-5 hours per tool)

**When to Skip This Step**:
- Existing tools adequately cover the concepts
- Tool is nice-to-have but not critical to understanding
- Limited time/resources (can add tools in future iteration)

#### 2.5.1 Tool Development Process

**Location**: `src/components/math-tools/`

**Step 1: Create Component File**

Use an existing tool as a template:
```bash
# For example, copy FractionBarVisualizer as starting point
cp src/components/math-tools/FractionBarVisualizer.tsx \
   src/components/math-tools/YourNewTool.tsx
```

**Step 2: Define Parameters Interface**

```typescript
interface YourToolParameters {
  // Define what inputs the tool accepts
  value1: number;
  value2: number;
  operation: 'add' | 'subtract' | 'multiply' | 'divide';
  showSteps?: boolean;  // Optional parameters
}

interface YourToolProps {
  parameters: YourToolParameters;
}
```

**Step 3: Implement Visualization**

```typescript
export default function YourToolVisualizer({ parameters }: YourToolProps) {
  // Extract parameters
  const { value1, value2, operation, showSteps = false } = parameters;

  // Component state if needed
  const [isAnimating, setIsAnimating] = useState(false);

  // Render interactive SVG or Canvas
  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <svg viewBox="0 0 400 300" className="w-full h-auto">
        {/* Your visualization here */}
        {/* Use dark theme compatible colors */}
      </svg>

      {/* Controls if needed */}
      <div className="mt-4 flex gap-2">
        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded">
          Animate
        </button>
      </div>
    </div>
  );
}
```

**Step 4: Dark Theme Support**

Ensure tool works in both light and dark modes:
```typescript
// Use Tailwind dark: variants
<rect fill="currentColor" className="text-blue-500 dark:text-blue-400" />
<text className="fill-gray-900 dark:fill-gray-100">Label</text>

// Or use hooks for dynamic colors
const strokeColor = document.documentElement.classList.contains('dark')
  ? '#60a5fa'  // blue-400
  : '#3b82f6'; // blue-500
```

**Step 5: Register in mathToolsRegistry.ts**

```typescript
// In src/components/math-tools/mathToolsRegistry.ts
import YourToolVisualizer from './YourToolVisualizer';

export const mathToolsRegistry = {
  // ... existing tools

  yourToolName: {  // This ID is used in config files
    id: 'yourToolName',
    displayName: 'Your Tool Display Name',
    component: YourToolVisualizer,
    description: 'Brief description of what this tool visualizes',
    category: 'topic-category',  // e.g., 'fractions', 'geometry'
    parameters: {
      value1: {
        type: 'number',
        required: true,
        description: 'First value'
      },
      value2: {
        type: 'number',
        required: true,
        description: 'Second value'
      },
      operation: {
        type: 'string',
        required: true,
        options: ['add', 'subtract', 'multiply', 'divide']
      },
      showSteps: {
        type: 'boolean',
        required: false,
        default: false
      }
    }
  }
};
```

**Step 6: Test the Tool**

Create a test page to verify:
```tsx
// Quick test in a dev route
<YourToolVisualizer
  parameters={{
    value1: 3,
    value2: 4,
    operation: 'add',
    showSteps: true
  }}
/>
```

Test:
- [ ] Renders correctly in light mode
- [ ] Renders correctly in dark mode
- [ ] Responsive design works
- [ ] Interactive elements function
- [ ] Parameters update visualization correctly
- [ ] No console errors
- [ ] Performance is acceptable

#### 2.5.2 Tool Quality Guidelines

**Visual Design**:
- Clean, uncluttered interface
- Clear labels and legends
- Intuitive color coding
- Responsive to different screen sizes
- Smooth animations (if used)

**Educational Value**:
- Makes abstract concept concrete
- Shows dynamic relationships
- Allows exploration and discovery
- Provides immediate feedback
- Scales to show edge cases

**Technical Quality**:
- TypeScript types properly defined
- Dark theme fully supported
- Efficient rendering (no lag)
- Accessible (keyboard navigation where relevant)
- Well-documented parameters

#### 2.5.3 Example: Creating a Fraction Circle Tool

```typescript
// FractionCircleVisualizer.tsx
interface FractionCircleParameters {
  numerator: number;
  denominator: number;
  showEquivalent?: boolean;
}

export default function FractionCircleVisualizer({ parameters }: FractionCircleProps) {
  const { numerator, denominator, showEquivalent = false } = parameters;

  // Calculate angles for SVG paths
  const angle = (numerator / denominator) * 360;

  // Convert angle to SVG arc path
  const createArcPath = (startAngle: number, endAngle: number, radius: number) => {
    // SVG path calculation logic
    // ...
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg">
      <svg viewBox="0 0 200 200" className="w-full h-auto">
        {/* Circle outline */}
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gray-300 dark:text-gray-600"
        />

        {/* Filled segments */}
        <path
          d={createArcPath(0, angle, 80)}
          fill="currentColor"
          className="text-blue-500 dark:text-blue-400"
        />

        {/* Division lines */}
        {Array.from({ length: denominator }).map((_, i) => {
          const lineAngle = (i / denominator) * 360;
          const rad = (lineAngle - 90) * (Math.PI / 180);
          const x2 = 100 + 80 * Math.cos(rad);
          const y2 = 100 + 80 * Math.sin(rad);
          return (
            <line
              key={i}
              x1="100"
              y1="100"
              x2={x2}
              y2={y2}
              stroke="currentColor"
              strokeWidth="1"
              className="text-gray-400 dark:text-gray-500"
            />
          );
        })}

        {/* Center label */}
        <text
          x="100"
          y="105"
          textAnchor="middle"
          className="fill-gray-900 dark:fill-gray-100 text-lg font-semibold"
        >
          {numerator}/{denominator}
        </text>
      </svg>

      {showEquivalent && (
        <div className="mt-4 text-center text-gray-700 dark:text-gray-300">
          Decimal: {(numerator / denominator).toFixed(2)}
        </div>
      )}
    </div>
  );
}
```

#### 2.5.4 Time Estimates

Per new tool:
- **Simple tool** (e.g., enhanced number line): 2-3 hours
- **Medium tool** (e.g., interactive circle diagram): 4-6 hours
- **Complex tool** (e.g., 3D geometry visualizer): 8-12 hours

**Strategy for scaling**:
- Build 1-2 high-impact tools per batch of topics
- Reuse tools across multiple topics
- Prioritize tools with widest applicability
- Consider deferring nice-to-have tools to future iterations

#### 2.5.5 Verification

Before moving to Step 3:
- [ ] Tool registered in mathToolsRegistry.ts
- [ ] Tool tested in light and dark modes
- [ ] All parameters work correctly
- [ ] No TypeScript errors
- [ ] Performance is acceptable
- [ ] Educational value confirmed
- [ ] Tool ID documented (for use in config file)

**Output**: New tools ready to be referenced in config file's `availableTools` arrays

#### 2.5.6 Math Tool Registration Checklist (CRITICAL)

**⚠️ IMPORTANT**: Every new math tool MUST be registered in ALL THREE locations or it won't work.

For each new tool you create, verify you've completed:

- [ ] **mathToolsRegistry.ts** (Location: `src/components/math-tools/mathToolsRegistry.ts`, around line 1650)
  - Add tool metadata entry with:
    - `id`: Technical name used in code (e.g., `'fractionCircle'`)
    - `displayName`: Human-readable name
    - `component`: Reference to your component
    - `description`: Brief explanation
    - `category`: Topic category
    - `parameters`: Full parameter schema with types

- [ ] **MathToolRenderer.tsx** (Location: `src/components/practice/MathToolRenderer.tsx`)
  - **Import**: Add component import at top of file (around line 12-46)
    ```typescript
    import FractionCircleVisualizer from '../math-tools/FractionCircleVisualizer';
    ```
  - **Component Map**: Add mapping in `COMPONENT_MAP` object (around line 165-170)
    ```typescript
    fractionCircle: FractionCircleVisualizer,
    ```

- [ ] **Config file** (Your topic config: `src/prompt-library/subjects/mathematics/secondary/[topic-name].ts`)
  - Add tool ID to relevant section's `availableTools` array
  - Use the exact technical name from registry (e.g., `'fractionCircle'`, NOT `'Fraction Circle'`)

**Verification**:
```bash
# Test the tool renders
npm run dev
# Try generating a question that uses the tool
# Check browser console for "Tool 'xyz' not found" errors
```

**Common Mistake**: Using display name instead of technical ID in config file
- ❌ Wrong: `availableTools: ['Fraction Circle Visualizer']`
- ✅ Correct: `availableTools: ['fractionCircle']`

---

### Step 3: Configuration File Creation (SUPER CRITICAL)

The config file defines the learning progression, mastery rubrics, and AI tutor behavior for the entire topic. This is the most important file - the AI tutor relies on it for every interaction.

**Input**:
- Extracted structure from Step 1
- Created notes from Step 2
- Created/identified math tools from Step 2.5
- Reference config file (e.g., `s3-exponential-logarithms.ts`)

#### 3.1 Scope Reality Check

**IMPORTANT**: Config files are much larger than initially documented.

- **Actual file size**: comparable to existing ones 1000+ lines
- **Why so large?**: Detailed rubrics for every section
  - 3 rubric levels (mastery, developing, struggling)
  - ~8-12 sections per topic
  - = 24-36 detailed rubric definitions
- **Time investment**: 90-120 minutes of focused work
- **Don't rush**: Quality rubrics are essential for effective AI tutoring

**Tasks**:
- Create topic configuration TypeScript file
- Location: `learning-platform/src/prompt-library/subjects/mathematics/secondary/[topic-name].ts`
- Follow prompt library architecture

#### 3.2 Required Structure

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

#### 3.3 Writing Quality Mastery Rubrics (CRITICAL)

The mastery rubric is how the AI tutor determines student understanding and decides when to progress. Each section needs a detailed 3-level rubric.

**Three Rubric Levels Required**:

**1. Mastery** (proficiency achieved):
- **Quantitative**: Concrete metrics
  - Examples: "3+ correct answers without hints", "2 consecutive correct with minimal guidance"
  - Be specific about number and hint usage
- **Qualitative**: Observable understanding indicators
  - What does deep understanding look like?
  - Can they apply concept in novel contexts?
  - Can they explain their reasoning?
  - Example: "Correctly applies SOH-CAH-TOA in unfamiliar triangle orientations"

**2. Developing** (partial understanding):
- **Quantitative**: Progress indicators
  - Examples: "1-2 correct with 1-2 hints each", "Correct with significant guidance"
- **Qualitative**: What they get vs. what they miss
  - Where do they need support?
  - Which sub-concepts are solid?
  - Example: "Can identify correct formula but makes calculation errors"

**3. Struggling** (needs intervention):
- **Quantitative**: Warning signs
  - Examples: "Multiple incorrect attempts", "Requests solution after 1 hint", "Cannot start problem"
- **Qualitative**: Specific misconceptions and errors
  - What are common wrong approaches?
  - Where is the conceptual gap?
  - Example: "Confuses opposite and adjacent sides" or "Uses degrees instead of radians"

**Example of Excellent Rubric**:

```typescript
{
  id: "adding-fractions-unlike-denominators",
  title: "Adding Fractions with Unlike Denominators",
  difficulty: "intermediate",
  masterySignals: "Student correctly adds fractions with unlike denominators in 3+ problems with minimal hints",
  masteryRubric: {
    mastery: {
      quantitative: [
        "3+ correct answers without hints",
        "Consistent accuracy across different denominators"
      ],
      qualitative: [
        "Correctly finds least common denominator (LCD)",
        "Accurately converts fractions to equivalent forms",
        "Simplifies final answer to lowest terms",
        "Can add fractions with denominators that are not multiples (e.g., 5 and 7)",
        "Explains why LCD is necessary"
      ]
    },
    developing: {
      quantitative: [
        "1-2 correct with hints on LCD finding",
        "Makes occasional errors in conversion or simplification"
      ],
      qualitative: [
        "Understands need for common denominator but struggles to find LCD",
        "Can convert fractions with help but not independently",
        "Forgets to simplify or makes errors in simplification",
        "Succeeds with simple denominators (2, 4, 8) but struggles with primes"
      ]
    },
    struggling: {
      quantitative: [
        "Multiple incorrect attempts",
        "Cannot complete problem without full solution",
        "Requests hints after each step"
      ],
      qualitative: [
        "Does not understand why common denominator is needed",
        "Adds numerators and denominators separately (e.g., 1/2 + 1/3 = 2/5)",
        "Cannot identify or find LCD even with prompting",
        "Confuses multiplication and addition of fractions"
      ]
    }
  }
}
```

**Common Mistakes to Avoid**:

❌ **Too vague**: "Student understands fractions"
✅ **Specific**: "Student correctly finds LCD and converts fractions"

❌ **No quantitative metrics**: Just descriptions
✅ **Include both**: Numbers + behaviors

❌ **Generic errors**: "Makes mistakes"
✅ **Specific misconceptions**: "Adds denominators instead of finding LCD"

❌ **Rushed rubrics**: Copied from another section
✅ **Thoughtful rubrics**: Specific to this concept

#### 3.4 Tutor Customization Section

Define how the AI tutor should teach this specific topic:

```typescript
export const [TOPIC]_TUTOR_CUSTOMIZATION = {
  teachingPhilosophy: `You are a Socratic mathematics tutor for secondary school students learning [Topic].

Teaching Approach:
- Guide students to discover [key concepts] through questioning
- Help students understand [relationships between concepts]
- Use real-world contexts ([examples])
- Celebrate insights when students connect [concept A] to [concept B]
- Adapt difficulty organically based on student mastery

**Text-to-Speech Guidelines:**
- Say "[spoken form]" instead of "[mathematical symbol]" for clarity
- Spell out [technical terms] clearly
- Avoid complex [notation] in speech - spell out [alternatives]
- Keep speech.text plain and conversational (no markdown, no LaTeX)
- For display.content (shown visually), you can use proper notation normally`,

  visualToolsGuidance: `Use pre-built visual tools when they genuinely help understanding.
IMPORTANT: Use the technical name (e.g., "[toolName]") in the toolName field, NOT the display name.
Available tools for this topic: [list from Step 2.5]`
};
```

#### 3.5 Available Math Tools Array

List all tools that can be used across the topic:

```typescript
export const [TOPIC]_MATH_TOOLS = [
  "existingTool1",      // From registry
  "existingTool2",      // From registry
  "yourNewTool"         // Created in Step 2.5
];
```

#### 3.6 Verification Checklist

Before considering config file complete:
- [ ] All sections have complete 3-level rubrics
- [ ] Rubrics are specific and measurable (not vague)
- [ ] Quantitative metrics included (numbers, hint usage)
- [ ] Qualitative indicators are observable behaviors
- [ ] Common misconceptions documented in "struggling" level
- [ ] Prerequisites correctly defined for each section
- [ ] Learning objectives are clear and achievable
- [ ] Formulas include examples with proper LaTeX escaping
- [ ] Available tools match those in mathToolsRegistry
- [ ] TTS guidance includes pronunciation for complex terms
- [ ] File compiles without TypeScript errors

**Time estimate**: 90-120 minutes for thorough config creation

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

---

### Step 5: Initial Greetings Generation (IMPORTANT)

Every subtopic needs an initial greeting that welcomes the student and introduces the first concept. These greetings are played as TTS audio when students first access a subtopic.


#### 5.1 Batch Generation Process

Use the existing batch generation script to create greetings for all subtopics at once. You DON'T have to generate it by yourself.

**Step 1: Generate Greetings**

```bash
cd learning-platform

# Generate for your specific topic
npm run generate-ai-samples -- --topic=s1-math-fractions

# This creates: src/data/initialGreetingsCache-ai-generated.ts
# Processing time: ~2-3 minutes for 5-8 subtopics
```

**Step 2: Review Generated Greetings**

Open the generated file and check:
- [ ] Greetings are varied (not repetitive patterns like "I'm excited to dive into...")
- [ ] Tone is warm and encouraging
- [ ] Math terminology is TTS-friendly in speech.text
- [ ] Display content can use proper formatting
- [ ] Emotion tags are appropriate (warm, encouraging, supportive)

**Step 3: Copy to Main Cache**

Add your topic's greetings to the main cache file:

```typescript
// In src/data/initialGreetingsCache.ts

export const INITIAL_GREETINGS_CACHE: Record<string, CachedGreeting> = {
  // ... existing greetings ...

  // Add your new topic greetings
  's1-math-fractions-introduction': {
    speech: {
      text: "Welcome to fractions! Today we'll explore how to represent parts of a whole. Let's start with a simple question: if you have a pizza cut into 4 equal slices and eat 1 slice, what fraction of the pizza did you eat?",  // Plain text, TTS-friendly
      emotion: 'warm',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-fractions-introduction.mp3'
    },
    display: {
      content: "Welcome to **Fractions**! Today we'll explore how to represent parts of a whole.\n\nLet's start with a simple question: If you have a pizza cut into 4 equal slices and eat 1 slice, what fraction of the pizza did you eat?",  // Can use markdown
      showAfterSpeech: true
    },
    mathTool: {  // Optional - can show visual with greeting
      toolName: 'fractionCircle',
      parameters: {
        numerator: 1,
        denominator: 4
      },
      caption: 'Pizza divided into 4 slices'
    }
  },

  's1-math-fractions-adding-subtracting': {
    speech: {
      text: "Great work so far! Now let's learn how to add and subtract fractions. This builds on what you learned about fraction equivalence. Ready to try some problems?",
      emotion: 'encouraging',
      preGeneratedAudioUrl: '/assets/audio/initial-greetings/s1-math-fractions-adding-subtracting.mp3'
    },
    display: {
      content: "Great work so far! Now let's learn how to **add and subtract fractions**.\n\nThis builds on what you learned about fraction equivalence.",
      showAfterSpeech: true
    }
  },

  // ... repeat for all subtopics (typically 4-8 per topic)
};
```

#### 5.3 Audio Generation (mandatory)

Generate pre-recorded audio files so greetings load instantly:

```bash
# Generate MP3 files for all greetings
npm run generate-initial-audio

# Output: public/assets/audio/initial-greetings/
# Uses Google Cloud TTS with Gemini voice
# Time: ~2-3 minutes for 5-8 greetings
```

**Benefits of pre-generated audio**:
- Instant playback (no API call delay)
- Consistent voice quality
- Offline capability
- Better user experience

**Without pre-generated audio**:
- System falls back to real-time TTS
- Slight delay on first load
- Still works fine, just not as polished

#### 5.4 TTS-Friendly Speech Text Guidelines

**CRITICAL**: The `speech.text` field must be plain text optimized for text-to-speech.

**Rules**:
- ✅ **Plain text only** - no markdown, no LaTeX, no special formatting
- ✅ **Spell out math symbols** - "theta" not "θ", "pi" not "π"
- ✅ **No hyphens in acronyms** - "S O H C A H T O A" not "SOH-CAH-TOA"
- ✅ **Spell out operations** - "x squared" not "x²"
- ✅ **Use words for fractions** - "one-half" OR "1 over 2" not "½"
- ✅ **Clear pronunciation** - "sine" not "sin", "logarithm base 10" not "log10"

**Examples**:

```typescript
// ❌ WRONG (not TTS-friendly)
speech: {
  text: "Today we'll learn about SOH-CAH-TOA and θ = sin⁻¹(opposite/hypotenuse)"
}

// ✅ CORRECT (TTS-friendly)
speech: {
  text: "Today we'll learn about S O H C A H T O A and how theta equals the inverse sine of opposite over hypotenuse"
}

// Display content can be formatted normally
display: {
  content: "Today we'll learn about **SOH-CAH-TOA** and $\\theta = \\sin^{-1}(\\frac{opposite}{hypotenuse})$"
}
```

#### 5.5 Greeting Quality Checklist

Before moving to Step 6:
- [ ] All subtopics have greetings in initialGreetingsCache.ts
- [ ] Speech text is plain (no markdown/LaTeX)
- [ ] Speech text spells out math symbols
- [ ] Display content uses proper formatting
- [ ] Emotion tags are appropriate
- [ ] Audio URLs are correct (even if files not generated yet)
- [ ] Math tool references are valid (if used)
- [ ] Greetings are varied and engaging
- [ ] Tone is warm and encouraging throughout

**Time estimate**: 15-20 minutes (mostly automated with review)

---

### Step 6: Platform Integration (ABSOLUTE MANDATORY)

Platform integration connects your topic to the UI. **Missing ANY of these 10 files will break functionality** - the topic won't appear, won't load, or will crash.

**Input**:
- Configs uploaded to Firestore (Step 4)
- Created notes from Step 2
- Completed config file from Step 3
- Initial greetings added (Step 5)

**Overview**:
You must update 10 files to fully integrate the topic. Follow this checklist exactly.

**⚠️ CRITICAL**: Reference the detailed checklist at **[ADDING_NEW_TOPICS_CHECKLIST.md](./ADDING_NEW_TOPICS_CHECKLIST.md)** for line numbers and exact code examples.

---

#### 6.1 Integration Checklist (10 Files)

**File 1: newPromptResolver.ts** (AI/Backend Integration) ✅ CRITICAL

Location: `src/prompts/newPromptResolver.ts`

**Step 1** - Add import at top (around line 24-40):
```typescript
import { S1_MATH_FRACTIONS_SUBTOPICS, S1_FRACTIONS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s1-fractions';
```

**Step 2** - Add registration in `registerBrowserTopics()` function (around line 68-86):
```typescript
registerTopics(S1_MATH_FRACTIONS_SUBTOPICS, S1_FRACTIONS_CONFIG);
```

**Verify**: Check browser console shows correct subtopic count when app loads

---

**File 2: HomePage.tsx** (Topic Card Display) ✅ CRITICAL

Location: `src/components/HomePage.tsx`

**Step 1** - Update `Topic` interface category union (around line 12):
```typescript
category?: 'fractions' | ... | 's1-math-fractions';
```

**Step 2** - Add topic card to `topics` array (around line 74+):
```typescript
{
  id: 's1-fractions',
  name: 'Fractions',
  icon: '🍕',
  description: 'Master fraction operations, equivalence, and word problems',
  subtopicCount: 5,  // Match your actual count
  isActive: true,
  category: 's1-math-fractions',
  grade: 'Secondary 1',
  subject: 'Mathematics',
},
```

**Verify**: Topic card appears on home page

---

**File 3: App.tsx** (Type System) ✅ CRITICAL

Location: `src/App.tsx`

**Step 1** - Add import for topic type:
```typescript
import type { FractionsTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-fractions';
```

**Step 2** - Update `AppState` interface comment (around line 29):
```typescript
selectedCategory: string | null; // Add 's1-math-fractions' to comment
selectedTopic: TrigonometryTopicId | ... | FractionsTopicId | null;
```

**Step 3** - Update `AppContextType` interface (around line 44):
```typescript
handleTopicSelect: (topicId: ... | FractionsTopicId) => void;
```

**Step 4** - Update `handleTopicSelect` function (around line 83):
```typescript
const handleTopicSelect = (topicId: ... | FractionsTopicId) => { ... };
```

**Verify**: No TypeScript errors, topic accessible from HomePage

---

**File 4: LeftPanel.tsx** (Navigation Panel) ✅ CRITICAL

Location: `src/components/layout/LeftPanel.tsx`

**Step 1** - Add imports:
```typescript
import { S1_MATH_FRACTIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-fractions';
import type { FractionsTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-fractions';
```

**Step 2** - Add category display name (around line 40):
```typescript
const categoryDisplayNames: Record<string, string> = {
  // ... existing
  's1-math-fractions': 'Fractions',
};
```

**Step 3** - Add icon mapping (around line 50):
```typescript
const getTopicIcon = (topicId: string) => {
  // ... existing
  if (topicId.startsWith('s1-math-fractions-')) {
    const icons = ['🍕', '➕', '✖️', '⚖️', '🔢'];
    // ... icon selection logic
  }
};
```

**Step 4** - Add to `topicConfigs` useMemo (around line 120):
```typescript
if (category === 's1-math-fractions') {
  return Object.entries(S1_MATH_FRACTIONS_SUBTOPICS).map(...);
}
```

**Verify**: Subtopics appear in left panel when category selected

---

**File 5: SubtopicWelcomeScreen.tsx** (Welcome Display) ✅ CRITICAL - OFTEN MISSED!

Location: `src/components/SubtopicWelcomeScreen.tsx`

**Add category handling**:
```typescript
// Add your topic's welcome message customization
if (subtopicId.startsWith('s1-math-fractions-')) {
  // Custom welcome logic if needed
}
```

**Verify**: Welcome screen shows when subtopic first clicked (not blank!)

---

**File 6: ChatInterface.tsx** (Chat Logic) ✅ REQUIRED

Location: `src/components/ChatInterface.tsx`

**Step 1** - Add imports (top of file):
```typescript
import { S1_MATH_FRACTIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-fractions';
import type { FractionsTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-fractions';
```

**Step 2** - Add to `getTopicConfig()` function (around line 61-120):
```typescript
// Check if it's an S1 fractions topic
if (topicId.startsWith('s1-math-fractions-')) {
  return S1_MATH_FRACTIONS_SUBTOPICS[topicId as FractionsTopicId];
}
```

**Verify**: Chat interface loads without errors

---

**File 7: SectionProgressTracker.tsx** (Progress UI) ✅ REQUIRED

Location: `src/components/SectionProgressTracker.tsx`

**Step 1** - Add imports (top of file):
```typescript
import { S1_MATH_FRACTIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-fractions';
import type { FractionsTopicId } from '../prompt-library/subjects/mathematics/secondary/s1-fractions';
```

**Step 2** - Add to `getTopicSections()` function (around line 56-130):
```typescript
if (topicId.startsWith('s1-math-fractions-')) {
  const subtopic = S1_MATH_FRACTIONS_SUBTOPICS[topicId as FractionsTopicId];
  return (subtopic as any)?.progressionStructure?.sections || [];
}
```

**Verify**: Progress bar shows correctly for your topic

---

**File 8: subtopicContentLoader.ts** (Content Loading) ✅ REQUIRED

Location: `src/services/subtopicContentLoader.ts`

**Step 1** - Add import (top of file):
```typescript
import { S1_MATH_FRACTIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s1-fractions';
```

**Step 2** - Add to constructor's topicConfigs (around line 39-58):
```typescript
this.topicConfigs = {
  // ... existing topics
  ...S1_MATH_FRACTIONS_SUBTOPICS,  // Add your new topic
  // Future topics will be added here
};
```

**Verify**: Content loads without errors

---

**File 9: notesLoader.ts** (Notes Registration) ✅ CRITICAL

Location: `src/services/notesLoader.ts`

**Register notes components**:
```typescript
import { lazy } from 'react';

// Add lazy imports for each notes file
's1-math-fractions-introduction': lazy(() => import('../notes/s1/math/fractions/Introduction')),
's1-math-fractions-adding-subtracting': lazy(() => import('../notes/s1/math/fractions/AddingSubtracting')),
's1-math-fractions-multiplying-dividing': lazy(() => import('../notes/s1/math/fractions/MultiplyingDividing')),
's1-math-fractions-equivalence': lazy(() => import('../notes/s1/math/fractions/Equivalence')),
's1-math-fractions-mixed-numbers': lazy(() => import('../notes/s1/math/fractions/MixedNumbers')),
```

**Verify**: Notes display when "View Notes" clicked

---

**File 10: configLoader.ts** (Firestore Configs)

Location: `src/services/configLoader.ts`

**No changes needed** - automatically fetches from Firestore if configs uploaded in Step 4

**Verify**: Config fetches successfully from Firestore

---

#### 6.2 Verification After Integration

**Build Test**:
```bash
npm run build
```
Expected: ✅ No TypeScript errors, build completes successfully

**Runtime Test**:
```bash
npm run dev
# Open http://localhost:5173
```

**Manual Verification Checklist**:
1. [ ] Topic card appears on HomePage
2. [ ] Clicking card shows subtopics in LeftPanel
3. [ ] Clicking subtopic shows welcome screen (NOT blank!)
4. [ ] Initial greeting plays (audio if generated)
5. [ ] Chat interface loads without console errors
6. [ ] Notes display correctly (click "View Notes")
7. [ ] Math tools render properly (if questions use them)
8. [ ] Progress tracking works (try answering questions)
9. [ ] Browser console shows: `[NewPromptResolver] Registered X subtopics`
10. [ ] No 404 errors or broken imports in console

**Console Verification**:
```
[NewPromptResolver] Registered X subtopics from static imports
```
X should include your new subtopics (e.g., if you added 5, X increased by 5)

**Time estimate**: 30-40 minutes for all 10 files

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

## Common Pitfalls & Troubleshooting

This section documents issues that AI assistants (and humans) commonly miss or get wrong when creating learn modules.

### 1. Incomplete Platform Integration

**Symptom**: Topic appears on HomePage but clicking does nothing, or subtopic loads with blank screen

**Cause**: SubtopicWelcomeScreen.tsx not updated (MOST COMMONLY MISSED FILE)

**Fix**:
1. Open `src/components/SubtopicWelcomeScreen.tsx`
2. Add handling for your topic category
3. Verify welcome screen appears (not blank) when subtopic clicked

**Prevention**: Use the 10-file checklist in Step 6 - check off each file

---

### 2. Dark Theme Incomplete in Notes

**Symptom**: Notes look broken or unreadable in dark mode - missing backgrounds, invisible text, poor contrast

**Cause**: Missing `dark:` variants on colors, backgrounds, or borders

**Fix**:
```tsx
// ❌ WRONG - missing dark variants
<div className="bg-white text-gray-900 border-gray-200">

// ✅ CORRECT - includes dark variants
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-700">
```

**Common locations missed**:
- Hover states on buttons
- Border colors on boxes
- Background colors on code/example blocks
- Text colors in headings

**Prevention**: Test BOTH light and dark modes before finishing notes

---

### 3. LaTeX Rendering Errors

**Symptom**: Math doesn't render, shows raw LaTeX code, displays TypeScript errors, or renders incorrectly

**Common Causes**:
1. Not using the shared `MathText` component (creating custom parser instead)
2. Forgetting to wrap LaTeX with curly braces in string literals when `{}` present
3. Double backslashes instead of single
4. Dollar signs in non-math context

**Quick Fix Reference**:
```tsx
// ❌ WRONG - Missing string wrapping (most common!)
<MathText>$\sqrt{144}$</MathText>  // TypeScript error!

// ✅ CORRECT - Wrapped in string literal
<MathText>{'$\\sqrt{144}$'}</MathText>

// ❌ WRONG - Double backslash
<MathText>{'$\\\\frac{1}{2}$'}</MathText>

// ✅ CORRECT - Single backslash
<MathText>{'$\\frac{1}{2}$'}</MathText>
```

**For Complete LaTeX Guide**: See **Section 2.4: LaTeX Formatting in Notes** which includes:
- Comprehensive MathText component documentation
- All escaping rules and common patterns
- Real examples from production fixes
- Complete debugging guide with error messages

**Prevention**:
- Use shared MathText component (never create custom parsers)
- Wrap LaTeX with `{}` in string literals: `<MathText>{'$\\sqrt{...}$'}</MathText>`
- Test in dev environment (`npm run dev`) before committing
- Check Section 2.4's verification checklist

---

### 4. Math Tool Not Found Errors

**Symptom**: Console error: "Tool 'xyz' not found in registry"

**Cause**: Tool name mismatch between config file and mathToolsRegistry.ts, OR tool not registered

**Fix**:
1. Open `src/components/math-tools/mathToolsRegistry.ts`
2. Find the exact tool ID (NOT display name)
3. Use that exact ID in config's `availableTools` array
4. If tool doesn't exist, you forgot Step 2.5 (create or decide to use existing)

**Prevention**: Document tool IDs in Step 1 analysis, verify they exist before referencing

---

### 5. Initial Greetings Don't Play

**Symptom**: Welcome screen appears but greeting is silent or shows error

**Cause**: Greeting not added to initialGreetingsCache.ts, or subtopic ID mismatch

**Fix**:
1. Check `src/data/initialGreetingsCache.ts` has entry for your subtopic ID
2. Verify subtopic ID matches exactly (case-sensitive)
3. Ensure speech.text is plain text (no markdown/LaTeX)
4. Check emotion value is valid: 'warm' | 'encouraging' | 'supportive' | 'neutral'

**Prevention**: Complete Step 5 (greetings generation) before Step 6 (integration)

---

### 6. Firestore Configs Missing

**Symptom**: Topic loads but behaves oddly, progress doesn't save, or gets stuck

**Cause**: Subtopic configs not uploaded to Firestore

**Fix**:
1. Open Firebase Console → Firestore Database
2. Check `subtopics` collection for your topic IDs
3. If missing, add configs to `scripts/migrateAllConfigs.ts`
4. Run `npx tsx scripts/migrateAllConfigs.ts`
5. Verify configs appear in Firestore

**Prevention**: Complete Step 4 (Firestore upload) before Step 6 (integration)

---

### 7. TypeScript Build Errors

**Symptom**: `npm run build` fails with type errors

**Common causes**:
- Type unions not updated in App.tsx
- Import paths incorrect
- Exported names don't match imports
- Missing type definitions

**Fix checklist**:
- [ ] Config file exports match import names
- [ ] All type unions in App.tsx updated
- [ ] Import paths use correct file locations
- [ ] All required types exported from config file

**Prevention**: Run `npm run build` after each major change (notes, config, integration)

---

### 8. Notes Don't Display

**Symptom**: Click "View Notes" but nothing appears or shows 404

**Cause**: Notes not registered in notesLoader.ts, or file path incorrect

**Fix**:
1. Open `src/services/notesLoader.ts`
2. Add lazy import for each notes file
3. Verify import path matches actual file location
4. Check component is default export in notes file

Example:
```typescript
's1-math-fractions-introduction': lazy(() => import('../notes/s1/math/fractions/Introduction'))
// Path must match: src/notes/s1/math/fractions/Introduction.tsx
```

**Prevention**: Create all notes files first, then register them all at once

---

### 9. Vague or Unhelpful Rubrics

**Symptom**: AI tutor doesn't progress students appropriately, gets stuck, or progresses too quickly

**Cause**: Mastery rubrics are too vague (e.g., "understands concept")

**Fix**: Make rubrics specific and measurable
```typescript
// ❌ WRONG - too vague
struggling: {
  qualitative: ["Doesn't understand", "Makes mistakes"]
}

// ✅ CORRECT - specific and actionable
struggling: {
  quantitative: ["Multiple incorrect attempts", "Cannot start without full solution"],
  qualitative: [
    "Adds numerators and denominators separately (e.g., 1/2 + 1/3 = 2/5)",
    "Does not understand need for common denominator",
    "Cannot find LCD even with prompting"
  ]
}
```

**Prevention**: Reference existing high-quality configs for rubric examples

---

### 10. Speech Text Not TTS-Friendly

**Symptom**: Initial greeting sounds robotic or mispronounces math terms

**Cause**: LaTeX, symbols, or hyphens in speech.text field

**Fix**:
```typescript
// ❌ WRONG - not TTS-friendly
speech: {
  text: "Let's learn SOH-CAH-TOA! The formula is θ = sin⁻¹(opp/hyp)"
}

// ✅ CORRECT - TTS-friendly
speech: {
  text: "Let's learn S O H C A H T O A! The formula is theta equals inverse sine of opposite over hypotenuse"
}
```

**Prevention**: Keep speech.text plain, spell out all symbols, test with TTS before finalizing

---

### Pre-Flight Checklist (Use This Before Calling It Done)

Run through this checklist before considering a module complete:

**Build & Runtime**:
- [ ] `npm run build` succeeds with no errors
- [ ] `npm run dev` runs without console errors
- [ ] Browser console shows correct subtopic count registered

**Visual Testing**:
- [ ] Topic card appears on HomePage
- [ ] Click through entire flow (home → topic → subtopic → chat)
- [ ] Notes display correctly (if created)
- [ ] Math tools render (if used in questions)
- [ ] Test in BOTH light and dark modes

**Integration Verification**:
- [ ] All 10 integration files updated (use Step 6 checklist)
- [ ] Firestore configs visible in Firebase Console
- [ ] Initial greetings play correctly
- [ ] Welcome screen shows (not blank)

**Quality Checks**:
- [ ] Mastery rubrics are specific and measurable
- [ ] LaTeX renders correctly everywhere
- [ ] Dark theme works throughout
- [ ] No TypeScript errors or warnings
- [ ] Progress tracking works (try answering questions)

**Time estimate for debugging**: 15-30 minutes if issues found

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

### Required Files to Create

**1. Notes Files** (4-8 files per topic) - VERY CRITICAL
   - **Format**: `.tsx` React components
   - **Location**: `src/notes/[grade]/[subject]/[topic-name]/`
     - Example: `src/notes/s1/math/fractions/Introduction.tsx`
   - **Count**: One per subtopic (typically 4-8)
   - **Size**: 15-30KB per file
   - **Content**: Explanations, worked examples, practice problems
   - **Must include**: Dark theme support, LaTeX formatting, expandable solutions
   - **Time**: 20-30 minutes per file with AI = 2-2.5 hours total

**2. Configuration File** (1 per topic) - SUPER CRITICAL
   - **Format**: `.ts` TypeScript
   - **Location**: `src/prompt-library/subjects/mathematics/secondary/[topic-name].ts`
     - Example: `src/prompt-library/subjects/mathematics/secondary/s1-fractions.ts`
   - **Size**: **1,800-2,200 lines** (NOT 800-1,200 as previously stated)
   - **Why so large**: Detailed 3-level rubrics for every section (8-12 sections × 3 levels = 24-36 rubric definitions)
   - **Content**: Type exports, tutor customization, subtopics config, progression structure, mastery rubrics
   - **Must include**: Learning objectives, formulas, prerequisites, available tools
   - **Must Register**: Add import and registration in `newPromptResolver.ts`
   - **Time**: 90-120 minutes

**3. Math Tools** (0-2 new tools per topic) - VERY CRITICAL IF NEEDED
   - **Location**: `src/components/math-tools/`
   - **Create only if**: Concept needs visualization not available in existing tools
   - **Must register**: In `mathToolsRegistry.ts`
   - **Time**: 2-6 hours per tool depending on complexity
   - **Strategy**: Build 1-2 high-impact tools per batch, reuse across topics

**4. Firestore Subtopic Configs** (4-8 per topic) - REQUIRED
   - **Format**: JSON documents in Firestore
   - **Location**: Firestore `subtopics/{subtopicId}` collection
   - **Count**: One per subtopic
   - **Upload via**: Migration script (`scripts/migrateAllConfigs.ts`)
   - **Size**: ~500 bytes per document
   - **Content**: Metadata, difficulty, prerequisites, scoring, modules
   - **Must verify**: Visible in Firebase Console
   - **Time**: 20-30 minutes (add to script + run + verify)

**5. Initial Greetings** (4-8 per topic) - IMPORTANT
   - **Location**: `src/data/initialGreetingsCache.ts`
   - **Count**: One per subtopic
   - **Generated via**: `npm run generate-ai-samples -- --topic=your-topic`
   - **Must include**: TTS-friendly speech text, formatted display text
   - **Optional**: Pre-generated audio MP3 files (`npm run generate-initial-audio`)
   - **Time**: 15-20 minutes (generate + review + copy)

### Code Updates Required

**10 Files Must Be Updated** (ABSOLUTE MANDATORY):

**AI/Backend (1 file)**:
1. **newPromptResolver.ts**: Import + registration (2 lines)

**UI Integration (9 files)**:
2. **HomePage.tsx**: Topic card
3. **App.tsx**: Type definitions (4 locations)
4. **LeftPanel.tsx**: Category + icons + config loading (4 locations)
5. **SubtopicWelcomeScreen.tsx**: Welcome handling (OFTEN MISSED!)
6. **ChatInterface.tsx**: Chat logic (usually no changes)
7. **SectionProgressTracker.tsx**: Progress UI (usually no changes)
8. **subtopicContentLoader.ts**: Content loader (usually no changes)
9. **notesLoader.ts**: Notes lazy imports (1 per subtopic)
10. **configLoader.ts**: No changes (auto-loads from Firestore)

**Time**: 30-40 minutes for all integrations

### Complete Time Breakdown (Per Topic)

| Phase | Time | Notes |
|-------|------|-------|
| **Step 0: Prerequisites** | 15-20 min | Planning, environment setup |
| **Step 1: Content Analysis** | 1.5-2 hours | PDF analysis, structure extraction, tools planning |
| **Step 2: Notes Creation** | 2-2.5 hours | 4-8 TSX files with examples and practice |
| **Step 2.5: Math Tools** | 0-6 hours | Only if new tools needed; amortize across topics |
| **Step 3: Config File** | 90-120 min | ~2000 lines with detailed rubrics |
| **Step 4: Firestore Upload** | 20-30 min | Migration script + verification |
| **Step 5: Initial Greetings** | 15-20 min | Generation + review + copy |
| **Step 6: Platform Integration** | 30-40 min | 10 files to update |
| **Testing & QA** | 20-30 min | Build, runtime, visual testing |
| **TOTAL (without new tools)** | **6-8 hours** | Realistic estimate for complete module |
| **TOTAL (with 1 new tool)** | **9-12 hours** | Includes 3-4 hour tool development |

**With AI Assistance**: AI can reduce content creation time by ~40-50%, bringing total to **4-5 hours** for experienced developers following this guide


---

## Typical Metrics

### Scope (Per Topic)
- **Subtopics**: 4-8 (one notes file each)
- **Sections**: 8-12 per topic (distributed across subtopics, typically 2-4 per subtopic)
- **Config File**: **1,800-2,200 lines** (detailed rubrics are large!)
- **Notes Files**: 15-30KB each, 80-200KB total for topic
- **Math Tools**: 0-2 new tools (preferably reuse existing)
- **Initial Greetings**: 4-8 (one per subtopic)
- **Firestore Configs**: 4-8 documents (one per subtopic)
- **Integration Files**: 10 files to update

### Content Distribution
- **Difficulty Balance**:
  - Foundational: 20-30% of sections
  - Foundational-to-Intermediate: 15-20% of sections
  - Intermediate: 25-35% of sections
  - Intermediate-to-Advanced: 10-15% of sections
  - Advanced: 15-25% of sections

- **Mastery Rubrics**: 24-36 total (3 levels × 8-12 sections)
- **Learning Objectives**: 3-5 per section = 30-50 total
- **Formulas**: 5-15 key formulas across topic
- **Available Tools**: 2-5 tools per topic (mostly from existing registry)

### Realistic Time Estimates

**Per Learn Module (Complete Topic)**:
- **Minimum** (experienced, using AI): 4-5 hours
- **Typical** (following guide thoroughly): 6-8 hours
- **With new math tool**: 9-12 hours
- **First time** (learning the process): 10-14 hours

**Per Component**:
- Content analysis: 1.5-2 hours
- Notes creation (5 files): 2-2.5 hours with AI
- Config file creation: 1.5-2 hours
- Math tool (if new): 3-6 hours
- Firestore upload: 20-30 minutes
- Initial greetings: 15-20 minutes
- Platform integration: 30-40 minutes
- Testing & QA: 20-30 minutes

**Batch Processing (5-10 Topics)**:
- Efficiency gains: ~20% faster per topic after 2-3 topics (learning curve)
- Amortize math tool creation across multiple topics
- Can parallelize some tasks (greetings, Firestore uploads)
- Realistic: 1-2 complete topics per week working part-time

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
