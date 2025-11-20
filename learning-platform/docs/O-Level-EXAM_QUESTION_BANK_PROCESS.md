# O-Level Exam Question Bank Process Documentation

## Overview

This document outlines the complete process for converting extracted exam papers into a structured, AI-enhanced question bank for topical practice tests.

---

## 1. Data Structure

### 1.0 Raw JSON Schema

```json
{
  "questions": [
    {
      "questionNumber": 1, //incremental numbers but restart for Paper 2
      "questionId": "", //keep it blank
      "topicID": "", // keep it blank
      "stem": "Text that is common to all parts", //Optional, if not required keep it null
      "hasDiagram": true, //true even if the question has a table which is not included in stem or questionText
      "diagramDescription": "Right triangle ABC with...", //detailed diagram or table description
      "parts": [
        {
          "partId": "a",
          "questionText": "Calculate $\\sin\\theta$ when...",
          "marks": 2,
          "answerType": "numerical" | "algebraic" | "proof" | "drawing"
        }
      ],
      "totalMarks": 5,
      "paper": "Paper 1",
      "title": "2-4 words title relevant to the question"
    }
  ],
}
```


### 1.1 Enhanced Question Schema

```json
{
  "questionNumber": 1, //incremental numbers but restart for Paper 2
  "questionId": "N2-acsi-2024-p1-q1",   // Format: {topicId}-{school}-{year}-{paper}-q{number}
  "topicID": "N2",                      // Single topic mapping
  "title": "2-4 words title relevant to the question",                   // Only metadata we keep
  "stem": "The point C lies...",
  "hasDiagram": false,
  "diagramDescription": "Right triangle ABC with...", //detailed diagram or table description
  "diagram": null,                      // or diagram config object
  "parts": [
    {
      "partId": "a",
      "questionText": "Write AC as a fraction of BC.",
      "marks": 1,
      "answerType": "algebraic",
      "solution": {
        "finalAnswer": "$\\frac{2}{5}$",
        "stepByStep": [
          {
            "step": 1,
            "explanation": "Set up the ratio using a common factor",
            "working": "Let $AC = 2x$ and $AB = 7x$...",
            "reasoning": "The ratio $AC:AB = 2:7$ means..."
          }
        ]
      }
    }
  ],
  "totalMarks": 2,
  "paper": "Paper 1"
}
```

**Question ID Format:**
- `{topicId}-{school}-{year}-{paper}-q{questionNumber}`
- Example: `N2-acsi-2024-p1-q1`
- Includes school and year to prevent duplicates across 30+ exam papers

### 1.2 Diagram Types

```typescript
// Type 1: Math Tool (preferred - use existing library)
diagram: {
  type: "mathTool",
  toolName: "rightTriangle",
  parameters: {
    angle: 35,
    hypotenuse: "10",
    opposite: "x",
    adjacent: "",
    highlightSide: "opposite",
    showAngleMark: true,
    showRightAngle: true
  }
}

// Type 2: Needs Custom SVG (manual creation required)
diagram: {
  type: "needsSVG",
  description: "Cumulative frequency curve with grid",
  notes: "Complex curve - requires manual SVG creation"
}

// Type 3: Image (last resort)
diagram: {
  type: "image",
  imagePath: "/diagrams/acsi-2024-p1-q6.png",
  description: "Bar chart showing mobile data usage"
}
```

---

## 2. Processing Pipeline Architecture

### 2.1 Pipeline Overview

```
PDF Exam Paper
    ↓
[Step 1] Claude: Extract Questions to Raw JSON
    ↓
Raw Extracted JSON
    ↓
[Step 2] Claude: Manual Curriculum Mapping
    ↓
Questions with topicId assigned
    ↓
[Step 3] Claude: Generate Question IDs
    ↓
Questions with unique questionId field
    ↓
[Step 4] Claude: Filter Drawing Questions
    ↓
Questions requiring drawing moved to separate file
    ↓
[Step 5] Claude: Filter Diagram Questions (using mathTools library)
    ↓
Questions with diagram configs (or "needs SVG" flag)
    ↓
[Step 5.5] Claude: Split by TopicId
    ↓
Individual topic files in raw/ folder (n1.json, n2.json, etc.)
    ↓
[Step 6] Claude Code: Solution Generation (one topic file at a time)
    ↓
Complete Question Bank in processed/ folder (n1.json, n2.json, etc.)
    ↓
[Step 7] QA Interface Review
    ↓
Production Question Bank
```

**Key Points:**
- **Step 1**: Manual extraction from PDF to raw JSON (Claude reads PDF and creates structured data)
- **Steps 2-5**: Manual/guided by Claude Code (fast, accurate, context-aware)
- **Step 5.5**: Split questions by topicId into individual files in `raw/` folder
- **Step 6**: Claude Code manual solution generation (one topic file at a time)
  - **Why Claude Code**: Better understanding of mathTools, LaTeX formatting, PDF access for diagram reference
  - Generates pedagogically sound step-by-step solutions
  - Outputs individual topic files to `processed/` folder (n1.json, n2.json, etc.)
- **Step 7**: Human review in QA interface
- **SVG Creation**: Handled separately for "needsSVG" cases

### 2.2 Available Math Tools

From the mathTools library (70+ visualizers available):

**Trigonometry:**
- `rightTriangle`, `generalTriangle`, `unitCircle`
- `elevationDepression`, `multipleDepressionAngles`
- `bearings`, `extendedLineTriangle`

**Geometry 2D:**
- `quadrilateral`, `parallelogram`, `rectangle`, `square`, `trapezium`
- `compositeShape`, `quadrilateralComposite`

**Geometry 3D:**
- `cuboid`, `pyramid`, `cylinder`, `cone`, `sphere`
- `coordinate3DPlane`

**Circles:**
- `circleBasic`, `circleWithArcs`, `circleWithChords`
- `circleSemicircle`, `circleTangent`, `circleTwoTangents`
- `circleAngleCentre`, `circleSameArc`

**Algebra:**
- `parabolaGraph`, `factoringVisualizer`, `completingSquareVisualizer`
- `quadraticFormulaVisualizer`, `vertexFormTransform`, `rootsVisualizer`
- `algebraExpression`, `distributiveVisualizer`, `balanceScale`

**Functions & Graphs:**
- `exponentialGraph`, `logarithmGraph`, `functionGraph`
- `cartesianPlane`, `gradientVisualizer`, `graphCompare`

**Statistics:**
- `barChart`, `histogram`, `dotDiagram`, `boxPlot`
- `scatterPlot`, `pieChart`, `lineChart`

**Sets & Logic:**
- `vennDiagram`, `setVisualizer`

**Calculus:**
- `limitVisualizer`, `tangentVisualizer`, `derivativeGrapher`
- `firstPrinciplesVisualizer`, `chainRuleVisualizer`
- `stationaryPointsVisualizer`, `optimizationGrapher`
- `areaApproximation`, `definiteIntegralVisualizer`, `riemannSumVisualizer`

**Probability:**
- `probabilityTree`, `twoWayTable`

**Vectors:**
- `vectorDiagram`, `componentForm`, `dotProduct`

**Angles:**
- `anglesAtPoint`, `anglesOnLine`, `verticallyOppositeAngles`
- `parallelLinesTransversal`

**Other:**
- `numberLine`, `fractionBar`, `multiplicationGrid`, `wordProblemDiagram`

---

## 3. Step-by-Step Process

### Step 1: PDF Extraction to Raw JSON (Claude)

**Input:** PDF exam paper (e.g., `anderson-2024-paper-1.pdf`)

**Output:** Raw JSON file following the schema in section 1.0

**Process:**
1. Read the PDF exam paper and generate the below json format
4. Save to `/exam-papers/raw/{school}-{year}-paper-{number}.json`

**Example Output:**
```json
{
  "questions": [
    {
      "questionNumber": 1, //incremental numbers but restart for Paper 2
      "questionId": "", //keep it blank for step 1
      "topicID": "", // keep it blank for step 1
      "Title":"2-4 words title relevant to the question",
      "stem": "Text that is common to all parts", //Optional, if not required keep it null
      "hasDiagram": true, //true even if the question has a table which is not included in stem or questionText
      "diagramDescription": "Right triangle ABC with...", //detailed diagram or table description
      "parts": [
        {
          "partId": "a",
          "questionText": "Calculate $\\sin\\theta$ when...",
          "marks": 2,
          "answerType": "numerical" | "algebraic" | "proof" | "drawing"
        }
      ],
      "totalMarks": 5,
      "paper": "Paper 1"
    }
  ],
}
```

**Key Points:**
- Capture detailed `diagramDescription` for all diagrams
- Use proper LaTeX notation (single backslash in JSON: `$\\frac{2}{5}$`)
- Set `answerType`: "numerical", "algebraic", "proof", or "drawing"

---

### Step 2: Manual Curriculum Mapping (Claude)

**Input:** Raw JSON file from Step 1 with blank `topicId` fields

**Output:** Same JSON file with `topicId` populated for all questions

**Process:**
1. Read raw extracted question JSON
2. Read O-level syllabus for topic descriptions
3. Analyze each question content and match to single most relevant topic
4. Update the `topicId` field directly in the raw JSON file (N1-N9, G1-G7, S1-S2)

**Example Analysis:**

**Question:** "The point C lies on the line AB such that AC:AB=2:7. (a) Write AC as a fraction of BC."

**Syllabus Reference:**
- **N2 (Ratio and proportion)**: "ratios involving rational numbers, writing a ratio in its simplest form"

**Decision:** topicId = "N2"

**Updated JSON:**
```json
{
    "questionNumber": 1, //incremental numbers but restart for Paper 2
    "questionId": "", //keep it blank for step 1
    "topicID": "N2", // <- populated
    "Title":"2-4 words title relevant to the question",
}
```

**Key Points:**
- Update the raw JSON file **directly** (single source of truth)
- No separate mapping files needed
- The `topicId` field is read by the solution generation script in Step 5

---

### Step 3: Generate Question IDs (Claude)

**Input:** Raw JSON file from Step 2 with `topicId` populated

**Output:** Same JSON file with `questionId` field added to all questions

**Process:**
1. Read the raw JSON file with topicId already assigned
2. For each question, generate a unique questionId using the format:
   - Format: `{topicId}-{school}-{year}-{paperCode}-q{questionNumber}`
   - Example: `N5-anderson-2024-p1-q1`
3. Add the `questionId` field right after `questionNumber` field in each question object
4. Save the updated JSON file

**Example:**

**Before (after Step 2):**
```json
{
  "questionNumber": 1,
  "questionId": "",
  "topicId": "N5",
  "stem": null,
  "parts": [...]
}
```

**After (Step 3):**
```json
{
  "questionNumber": 1,
  "questionId": "N5-anderson-2024-p1-q1",  // ← Added Format: {topicId}-{school}-{year}-{paper}-q{number}
  "topicId": "N5",
  "stem": null,
  "parts": [...]
}
```


---

### Step 4: Filter Drawing Questions (Claude)

**Input:** Raw JSON file from Step 3 with `questionId` populated

**Output:**
- Main JSON file with drawing questions removed
- Update `questions_require_drawing.json` file with filtered questions

**Reason:**
The application does not currently support drawing input capabilities. Questions requiring students to sketch graphs, construct geometric shapes, or draw diagrams must be filtered out.

**Process:**
1. Read the raw JSON file
2. Identify questions with ANY part having `answerType: "drawing"`
3. Move entire question to `questions_require_drawing.json` (even if only one part requires drawing)
4. Remove question from main JSON file
5. Save both files

**Example:**

**Question to Filter:**
```json
{
  "questionNumber": 9,
  "questionId": "N6-anderson-2024-p1-q9",
  "topicId": "N6",
  "parts": [
    {
      "partId": null,
      "questionText": "Sketch the graph of $y = 3^{-x}$...",
      "answerType": "drawing"  // ← Has drawing answerType
    }
  ]
}
```

**Result:**
- Question removed from `anderson-2024-paper-1.json`
- Question added to `questions_require_drawing.json`

**questions_require_drawing.json Structure:**
```json
{
  "note": "Questions requiring drawing input are stored here separately...",
  "source": "anderson-2024-paper-1",
  "questions": [
    {
      "questionNumber": 9,
      "questionId": "N6-anderson-2024-p1-q9",
      ...
    },
    {
      "questionNumber": 13,
      "questionId": "G2-anderson-2024-p1-q13",
      ...
    }
  ]
}
```

**Key Points:**
- Filter ENTIRE question if ANY part requires drawing
- Questions with mixed answerTypes (e.g., part a is numerical, part b is drawing) are filtered out completely
- Common drawing question types:
  - Sketch graphs (exponential, parabola, etc.)
  - Geometric constructions (perpendicular bisector, angle bisector)
  - Draw diagrams from descriptions
- These questions can be re-enabled when drawing support is added to the app

---

### Step 5: Manual Diagram Mapping (Claude)

**CRITICAL: Always check mathToolsRegistry first!**

**Process:**
1. Check if question has diagram (`hasDiagram: true`)
2. Read `diagramDescription` and question context
3. **MANDATORY: Check `/src/components/math-tools/mathToolsRegistry.ts` to verify:**
   - Does a matching mathTool exist?
   - What are the EXACT parameter names and valid values?
   - What configuration options are available?
4. If mathTool exists AND provides sufficient control:
   - Use actual parameter names from registry (NOT assumed names)
   - Use valid values from registry (NOT made-up values)
   - Generate complete config object with all required parameters
5. If no mathTool fits OR tool lacks necessary control, flag as "needsSVG"

**Common Pitfall to Avoid:**
- ❌ DO NOT assume tool names or parameters exist
- ❌ DO NOT make up config values
- ✅ ALWAYS verify against actual mathToolsRegistry.ts first
- ✅ ONLY use documented parameters and valid values

**Example 1: Venn Diagram (Correct Process)**

**Input:**
```json
{
  "diagramDescription": "Venn diagram showing two overlapping circles A and B. The shaded region covers the entire universal set except for circle B."
}
```

**Step 1: Check mathToolsRegistry**
Search for "venn" in `/src/components/math-tools/mathToolsRegistry.ts`:
```typescript
vennDiagram: {
  technicalName: "vennDiagram",
  parameters: {
    setALabel: "string (default: 'A')",
    setBLabel: "string (default: 'B')",
    universalSetLabel: "string (default: 'U')",
    layout: "'overlapping' | 'disjoint' | 'subset' | 'equal'",
    aOnlyElements: "string[] | number",
    bOnlyElements: "string[] | number",
    intersectionElements: "string[] | number",
    neitherElements: "string[] | number",
    showElements: "boolean (default: true)",
    showRegionCounts: "boolean (default: false)",
    shadeRegion: "'none' | 'intersection' | 'union' | 'aOnly' | 'bOnly' | 'aComplement' | 'bComplement' | 'neither' | 'unionComplement'",
    // ... more parameters
  }
}
```

**Step 2: Analyze requirements**
- "Shaded region covers entire universal set except for circle B" = B complement
- Valid shadeRegion value: `"bComplement"` ✓

**Step 3: Generate correct config**
```json
{
  "type": "mathTool",
  "toolName": "vennDiagram",
  "config": {
    "setALabel": "A",
    "setBLabel": "B",
    "universalSetLabel": "U",
    "layout": "overlapping",
    "aOnlyElements": 0,
    "bOnlyElements": 0,
    "intersectionElements": 0,
    "neitherElements": 0,
    "showElements": false,
    "showRegionCounts": false,
    "shadeRegion": "bComplement"
  }
}
```

**❌ WRONG Approach (DO NOT DO THIS):**
```json
{
  "config": {
    "sets": ["A", "B"],              // ❌ Not a real parameter
    "shadeRegion": "universe-except-B", // ❌ Invalid value
    "showLabels": true               // ❌ Not a real parameter
  }
}
```



**Example 2: Cumulative Frequency Curve**

**Input:**
```json
{
  "diagramDescription": "Cumulative frequency curve for wait time (minutes) with time on x-axis and cumulative frequency on y-axis"
}
```

**Analysis:**
- This is a complex statistical graph
- `lineChart` might work but cumulative curves have specific shape
- Better to create custom SVG for accuracy

**Output:**
```json
{
  "type": "needsSVG",
  "description": "Cumulative frequency curve - requires custom SVG creation",
  "notes": "Need S-curve shape with grid, axis labels, and smooth curve through points"
}
```

---

### Step 5.5: Split by TopicId (Claude)

**Input:** Mega JSON file from Step 5 with all questions and diagram configs

**Output:** Individual topic files in `raw/` folder (n1.json, n2.json, g1.json, etc.)

**Process:**

1. Group questions by topicID (N1-N9, G1-G7, S1-S2)
2. Create individual topic files with lowercase naming (n1.json, not N1.json)
3. Organize questions within each file by Paper 1 and Paper 2

**File Structure:**
```json
{
  "topicId": "N1",
  "questions": {
    "Paper 1": [
      {...question objects with paper: "Paper 1"...}
    ],
    "Paper 2": [
      {...question objects with paper: "Paper 2"...}
    ]
  }
}
```

**Key Points:**
- Files saved in `raw/` folder (without solutions)
- Future exams will append to the same topic files
- After Step 6, files with solutions move to `processed/` folder

---

### Step 6: Solution Generation (Claude Code)

**Input:** Individual topic files from `raw/` folder (n1.json, n2.json, etc.)

**Output:** Individual topic files in `processed/` folder with complete solutions (same filenames)

**Why Claude Code instead of Gemini:**
1. **Better mathTool Understanding**: Deep knowledge of mathToolsRegistry configurations and parameters
2. **LaTeX Formatting Expertise**: Precise understanding of single-backslash rule in JSON
3. **PDF Access**: Can read the actual exam PDF for diagram descriptions, tables, and context
4. **Better Context Awareness**: Understanding of overall question bank structure and requirements
5. **Pedagogical Quality**: More thoughtful, teaching-focused solutions

**Process:**
1. Read topic file from `raw/` folder (e.g., `n1.json`)
2. For each question in the file:
   - Analyze question stem, parts, and context
   - Read PDF if needed for diagram details or table data (e.g., Speedpost pricing)
   - Generate complete step-by-step solutions for all parts
   - Ensure proper LaTeX formatting (single backslash in JSON)
   - Add solution object to each part
3. Save complete topic file to `processed/` folder with same filename
4. Repeat for all 18 topic files

**Solution Structure Requirements:**
- **Final Answer**: In exact format matching answerType (numerical/algebraic/proof)
- **Step-by-Step Breakdown**: Clear, logical steps with:
  - `step`: Step number (incremental)
  - `explanation`: What we're doing in this step
  - `working`: Mathematical steps with proper LaTeX
  - `reasoning`: Why we're doing this (pedagogical insight)
- **Pedagogical Quality**: Solutions should teach concepts, not just provide mechanical answers
- **LaTeX Formatting**: **CRITICAL** - Use SINGLE backslash in JSON source

**Critical Formatting Rules:**

```json
// ✓ CORRECT - Single backslash in JSON source
{"finalAnswer": "$\\frac{2}{5}$"}
// After JSON.parse: "$\frac{2}{5}$" → KaTeX renders correctly

// ✗ WRONG - Double backslash
{"finalAnswer": "$\\\\frac{2}{5}$"}
// After JSON.parse: "$\\frac{2}{5}$" → KaTeX shows literal \frac

// ✓ Dollar amounts - Escape the $
{"working": "The cost is \\$1,500"}

// ✓ Math expressions - Use $ delimiters
{"working": "$x^2 + 3x - 10 = 0$"}

// ✓ Degrees
{"working": "$\\theta = 45^{\\circ}$"}
```

**Example Output:**
```json
{
  "questionId": "N2-acsi-2024-p1-q1",
  "parts": [
    {
      "partId": "a",
      "solution": {
        "finalAnswer": "$\\frac{2}{5}$",
        "stepByStep": [
          {
            "step": 1,
            "explanation": "Set up the ratio using a common factor",
            "working": "Let $AC = 2x$ and $AB = 7x$ where $x$ is a common factor",
            "reasoning": "The ratio $AC:AB = 2:7$ means for every 2 units of AC, AB has 7 units"
          },
          {
            "step": 2,
            "explanation": "Find BC in terms of x",
            "working": "$BC = AB - AC = 7x - 2x = 5x$",
            "reasoning": "C lies on AB, so AB is divided into AC and BC"
          },
          {
            "step": 3,
            "explanation": "Express AC as a fraction of BC",
            "working": "$\\frac{AC}{BC} = \\frac{2x}{5x} = \\frac{2}{5}$",
            "reasoning": "Simplify by canceling the common factor x"
          }
        ]
      }
    },
    {
      "partId": "b",
      "solution": {
        "finalAnswer": "60 cm",
        "stepByStep": [
          {
            "step": 1,
            "explanation": "Find the value of x using the given length",
            "working": "$AC = 2x = 24$ cm, therefore $x = 12$ cm",
            "reasoning": "From the ratio setup, AC equals 2x"
          },
          {
            "step": 2,
            "explanation": "Calculate BC",
            "working": "$BC = 5x = 5 \\times 12 = 60$ cm",
            "reasoning": "From part (a), we found BC = 5x"
          }
        ]
      }
    }
  ]
}
```

**Example Workflow:**

```bash
# Anderson 2024 Paper 1 Example
# After Step 5.5, we have individual topic files in raw/ folder

# Step 6: Claude Code reads each topic file and generates solutions
raw/n1.json (4 questions without solutions)
    ↓
# Claude Code:
# 1. Reads all 4 questions
# 2. Analyzes each question
# 3. Reads PDF if needed (e.g., for diagram clarification)
# 4. Generates step-by-step solutions
# 5. Ensures proper LaTeX formatting
    ↓
processed/n1.json (4 questions with complete solutions)

# Repeat for all 18 topic files (n1-n9, g1-g7, s1-s2)
```

**File Organization:**
- **Input**: `raw/` folder contains topic files without solutions (n1.json, n2.json, etc.)
- **Output**: `processed/` folder contains topic files with complete solutions (same filenames)
- **Structure**: Each topic file organized by Paper 1 and Paper 2
- **Future Exams**: New questions will be appended to existing topic files in both folders

**Key Advantages over Automated AI:**
- Can handle complex questions requiring PDF reference (tables, diagrams)
- Better understanding of O-Level curriculum context
- More thoughtful pedagogical explanations
- Precise LaTeX formatting (no double-backslash errors)
- Can verify mathTool configurations against registry

---

## 7. Quality Assurance Interface (Step 7)

### 7.1 QA Interface Requirements

**Purpose:**
Test and validate questions with exact student-facing rendering.

**Features:**

1. **Topic Filter**
   - Dropdown to select topic (N1-N9, G1-G7, S1-S2)
   - Shows count of questions per topic

2. **Question Display**
   - Renders exactly like practice mode
   - Shows stem, diagram (with mathTools), parts
   - LaTeX rendered with KaTeX
   - Math tools interactive

3. **Solution Toggle**
   - Button to show/hide step-by-step solutions
   - Collapsible steps
   - Final answer highlighted

4. **Validation Controls**
   - ✅ Approve question
   - ❌ Flag for review
   - ✏️ Edit solution (opens JSON editor)
   - 💬 Add notes

5. **Navigation**
   - Next/Previous question in topic
   - Jump to specific question ID
   - Progress tracker (e.g., "5/12 reviewed")

### 7.2 QA Interface Design

```
┌─────────────────────────────────────────────────────────────┐
│  O-Level Question QA Tool                Topic: [N2 ▼]      │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ID: N2-acsi-2024-p1-q1    Marks: 2    Paper: Paper 1       │
│                                                              │
│  [Exact rendering of question as student sees it]           │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ The point C lies on the line AB such that AC:AB=2:7 │  │
│  │                                                       │  │
│  │ (a) Write AC as a fraction of BC.          [1 mark]  │  │
│  │                                                       │  │
│  │ [Answer input area - as student sees it]             │  │
│  │                                                       │  │
│  │ (b) Given that AC is 24 cm, calculate the length...  │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  [▼ Show Solutions]                                          │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Part (a): Final Answer: 2/5                          │  │
│  │                                                       │  │
│  │ ▼ Step 1: Set up the ratio using a common factor     │  │
│  │   Working: Let AC = 2x and AB = 7x where...          │  │
│  │   Reasoning: The ratio AC:AB = 2:7 means...          │  │
│  │                                                       │  │
│  │ ▶ Step 2: Find BC in terms of x                      │  │
│  │ ▶ Step 3: Express AC as a fraction of BC            │  │
│  │                                                       │  │
│  │ Part (b): Final Answer: 60 cm                        │  │
│  │ ▶ Step 1: Find value of x   ▶ Step 2: Calculate BC  │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  Diagram: ✓ Renders correctly   LaTeX: ✓ No errors          │
│                                                              │
│  [✅ Approve] [❌ Flag] [✏️ Edit JSON] [💬 Notes]            │
│                                                              │
│  ◀ Previous | Question 1 of 12 | Next ▶                     │
└─────────────────────────────────────────────────────────────┘
```

### 7.3 QA Workflow

1. **Select topic** (e.g., N2 - Ratio and Proportion)
2. **System loads** all N2 questions from processed bank
3. **Review each question:**
   - Verify question renders correctly
   - Check diagram/mathTool displays properly
   - Verify LaTeX formatting (no double backslashes!)
   - Review solution steps for accuracy
   - Test final answer
   - Approve or flag
4. **Track progress** (which questions reviewed)
5. **Export approved questions** to production

---

## 6. File Organization

```
learning-platform/
├── public/curriculum-content/o-level/
│   ├── o-level-maths-syllabus.json           (existing)
│   │
│   ├── exam-papers/
│   │   ├── Olevel__Emaths_2024_SA2_anderson.pdf (source PDF)
│   │   │
│   │   ├── raw/
│   │   │   ├── anderson-2024-paper-1.json      (Steps 1-5: mega file)
│   │   │   ├── acsi-2024-paper-1.json
│   │   │   ├── n1.json                         (Step 5.5: split by topic)
│   │   │   ├── n2.json
│   │   │   ├── n3.json
│   │   │   └── ... (n1-n9, g1-g7, s1-s2 WITHOUT solutions)
│   │   │
│   │   └── processed/
│   │       ├── n1.json                         (Step 6: WITH solutions)
│   │       ├── n2.json
│   │       ├── n3.json
│   │       └── ... (n1-n9, g1-g7, s1-s2 WITH solutions)
│   │
│   └── diagrams/
│       ├── svg/
│       │   ├── acsi-2024-p1-q18-cumulative.svg
│       │   └── anderson-2024-p1-q25-circle.svg
│       └── images/
│           └── acsi-2024-p1-q6-barchart.png
│
└── scripts/question-bank/
    └── (deprecated - Claude Code handles Step 6 manually)
```

**Key Points:**
- `raw/` folder: Contains questions extracted from PDFs
  - Mega files (e.g., `anderson-2024-paper-1.json`): Steps 1-5 output
  - Individual topic files (e.g., `n1.json`, `n2.json`): Step 5.5 output (without solutions)
- `processed/` folder: Contains complete questions with solutions (Step 6 output)
  - Individual topic files (e.g., `n1.json`, `n2.json`) with complete solutions
  - Organized by Paper 1 and Paper 2 within each file
  - Future exams will append to existing topic files
- No separate mapping files - topicId stored directly in raw JSON
- QA interface loads from `processed/*.json` files

---

## 7. Sample Run: ACSI 2024 Paper 1

### 7.1 Input
- File: `acsi-2024-paper-1.json` (26 questions, ~50 parts)
- Syllabus: `o-level-maths-syllabus.json`

### 7.2 Process Execution

**Step 1: PDF Extraction (Claude)**

- Extract all 26 questions from `anderson-2024-paper-1.pdf`
- Create raw JSON with question structure
- Save to `raw/anderson-2024-paper-1.json`

**Estimated time:** 15-20 minutes (Claude PDF reading + extraction)

**Step 2: Manual Curriculum Mapping (Claude)**

Process each question:
- Q1: Ratio problem → N2
- Q2: Trigonometry (obtuse/acute angles) → G4
- Q3: Probability (dice) → S2
- Q4: Percentage profit → N3
- Q5: Quadratic function → N6
- ... (all 26 questions)

**Estimated time:** 15-20 minutes (Claude analysis)

**Step 3: Generate Question IDs (Claude)**

Process all questions:
- Generate unique questionId for each question
- Format: `{topicId}-anderson-2024-p1-q{number}`
- Add field to raw JSON file

**Estimated time:** 2-3 minutes (automated edits)

**Step 4: Filter Drawing Questions (Claude)**

Identify and move questions with drawing answerType:
- Q9: Sketch exponential graph (N6) → Filtered
- Q13: Geometric constructions (G2) → Filtered
- Q26: Sketch height vs time graph (G5, part b only but entire question filtered) → Filtered

Move 3 questions to `questions_require_drawing.json`
Remove from main file (23 questions remain)

**Estimated time:** 2-3 minutes (identify + filter)

**Step 5: Manual Diagram Mapping (Claude)**

Questions with diagrams (after filtering):
- Q5: Parabola → `parabolaGraph` mathTool
- Q6: Bar chart → Flag as "needsSVG" (misleading chart)
- Q9: Rectangle with triangles → `quadrilateral` + overlays
- Q14: Venn diagram → `vennDiagram` mathTool
- Q18: Cumulative frequency → Flag as "needsSVG"
- Q19: Congruent triangles → `generalTriangle` (two instances)
- Q22: Bearings + right triangle → `bearings` + `rightTriangle`
- Q24: Vector grid → `vectorDiagram` mathTool
- Q26: Map with bearings → Flag as "needsSVG" (complex construction)

**Estimated time:** 20-30 minutes (Claude analysis + config generation)

**Step 5.5: Split by TopicId (Claude)**

- Group all 23 questions by topicId (N1-N9, G1-G7, S1-S2)
- Create individual topic files in `raw/` folder
- Organize by Paper 1 and Paper 2 within each file
- Result: 18 topic files (n1.json through s2.json) without solutions

**Estimated time:** 2-3 minutes (automated grouping and file creation)

**Step 6: Solution Generation (Claude Code)**

- Process all 18 topic files from `raw/` folder (n1.json through s2.json)
- For each topic file:
  - Read all questions in the file (~1-4 questions per topic)
  - Generate step-by-step solutions for each question
  - Read PDF if needed for diagram/table details
  - Ensure proper LaTeX formatting
  - Save to `processed/` folder with same filename
- Questions already have questionId from Step 3
- Output: Individual topic files in `processed/` folder with complete solutions

**Estimated time:** 60-90 minutes (manual solution generation for ~30 questions total across all topics)

**Total pipeline time:** ~116-158 minutes for 26 questions (23 processed, 3 filtered)
- Step 1 (PDF Extraction): 15-20 min
- Step 2 (Curriculum Mapping): 15-20 min
- Step 3 (Generate IDs): 2-3 min
- Step 4 (Filter Drawing): 2-3 min
- Step 5 (Diagram Mapping): 20-30 min
- Step 5.5 (Split by Topic): 2-3 min
- Step 6 (Claude Code Solution Gen): 60-90 min

### 7.3 Expected Output Sample

```json
{
  "questionId": "N2-acsi-2024-p1-q1",
  "questionNumber": 1,
  "topicId": "N2",
  "paper": "Paper 1",
  "stem": "The point C lies on the line AB such that $AC:AB=2:7$.",
  "hasDiagram": false,
  "diagram": null,
  "parts": [
    {
      "partId": "a",
      "questionText": "Write AC as a fraction of BC.",
      "marks": 1,
      "answerType": "algebraic",
      "solution": {
        "finalAnswer": "$\\frac{2}{5}$",
        "stepByStep": [
          {
            "step": 1,
            "explanation": "Set up the ratio using a common factor",
            "working": "Let $AC = 2x$ and $AB = 7x$ where $x$ is a common factor",
            "reasoning": "The ratio $AC:AB = 2:7$ means for every 2 units of AC, AB has 7 units"
          },
          {
            "step": 2,
            "explanation": "Find BC in terms of x",
            "working": "$BC = AB - AC = 7x - 2x = 5x$",
            "reasoning": "C lies on AB, so AB is divided into AC and BC"
          },
          {
            "step": 3,
            "explanation": "Express AC as a fraction of BC",
            "working": "$\\frac{AC}{BC} = \\frac{2x}{5x} = \\frac{2}{5}$",
            "reasoning": "Simplify by canceling the common factor x"
          }
        ]
      }
    },
    {
      "partId": "b",
      "questionText": "Given that AC is 24 cm, calculate the length of BC.",
      "marks": 1,
      "answerType": "numerical",
      "solution": {
        "finalAnswer": "60 cm",
        "stepByStep": [
          {
            "step": 1,
            "explanation": "Find the value of x using the given length",
            "working": "$AC = 2x = 24$ cm, therefore $x = 12$ cm",
            "reasoning": "From the ratio setup, AC equals 2x"
          },
          {
            "step": 2,
            "explanation": "Calculate BC",
            "working": "$BC = 5x = 5 \\times 12 = 60$ cm",
            "reasoning": "From part (a), we found BC = 5x"
          }
        ]
      }
    }
  ],
  "totalMarks": 2
}
```

### 7.4 Success Metrics

- ✅ All 26 questions mapped to topics
- ✅ All diagrams analyzed (mathTool config or "needsSVG")
- ✅ All solutions generated by AI
- ✅ All LaTeX uses single backslash in JSON source
- ✅ All question IDs follow format: `{topic}-acsi-2024-p1-q{n}`
- ✅ Zero JSON parsing errors
- ✅ All questions ready for QA review

---

## 8. Topical Test Generation (Future)

Once question bank is built:

```typescript
function generateTopicalTest(topicId: string, count: number = 5) {
  // Get all questions for this topic across all papers
  const allQuestions = questionBank.filter(q => q.topicId === topicId);

  // Randomly select 'count' questions
  const selected = randomSample(allQuestions, count);

  return {
    testId: `topical-${topicId}-${Date.now()}`,
    title: getTopicName(topicId),
    topicId,
    questions: selected,
    totalMarks: sum(selected.map(q => q.totalMarks)),
    estimatedTime: calculateTime(selected)
  };
}

// Example: generateTopicalTest("N2", 5)
// Returns 5 random ratio questions from entire bank (all papers, all years)
```

---

## 9. Next Steps

### Phase 1: Sample Run (Anderson 2024 Paper 1)
1. ✅ Document process (this file)
2. ✅ Step 1: Extract PDF to raw JSON (`anderson-2024-paper-1.json`)
3. ✅ Step 2: Curriculum mapping for all 26 questions
4. ✅ Step 3: Generate question IDs
5. ✅ Step 4: Filter drawing questions
6. ✅ Step 5: Diagram mapping for questions with diagrams
7. ✅ Step 5.5: Split by topicId into individual files
8. ✅ Step 6: Claude Code solution generation for all 18 topic files (30 questions total)
9. ⏳ Step 7: QA review interface testing

### Phase 2: Scale (Next Session)
5. Process more papers (ACSI 2024 Paper 2, other schools)
6. Handle "needsSVG" cases
7. Build production question bank organization
8. Implement topical test generator

---

## 10. Technical Notes

### LaTeX Formatting Critical Rules
```json
// ✓ CORRECT - Single backslash in JSON source
{"content": "$\\frac{2}{5}$"}
// After JSON.parse: "$\frac{2}{5}$" → KaTeX renders correctly

// ✗ WRONG - Double backslash
{"content": "$\\\\frac{2}{5}$"}
// After JSON.parse: "$\\frac{2}{5}$" → KaTeX shows literal \frac

// ✓ Dollar amounts - Escape the $
{"price": "The cost is \\$1,500"}

// ✓ Math expressions - Use $ delimiters
{"equation": "$x^2 + 3x - 10 = 0$"}
```

### Question ID Examples (30+ Papers)
```
N2-acsi-2024-p1-q1
N2-acsi-2024-p2-q5
N2-raffles-2023-p1-q3
N2-hci-2024-p1-q7
G4-acsi-2024-p1-q22
S2-acsi-2024-p1-q3
```
All unique, no collisions ✓

---

## Appendix: Topic ID Reference

**Number and Algebra (N1-N9)**
- N1: Numbers and operations
- N2: Ratio and proportion
- N3: Percentage
- N4: Rate and speed
- N5: Algebraic expressions and formulae
- N6: Functions and graphs
- N7: Equations and inequalities
- N8: Set language and notation
- N9: Matrices

**Geometry and Measurement (G1-G7)**
- G1: Angles, triangles and polygons
- G2: Congruence and similarity
- G3: Properties of circles
- G4: Pythagoras' theorem and trigonometry
- G5: Mensuration
- G6: Coordinate geometry
- G7: Vectors in two dimensions

**Statistics and Probability (S1-S2)**
- S1: Data handling and analysis
- S2: Probability

---

*Document Version: 3.0*
*Last Updated: 2025-01-18*
*Status: Anderson 2024 Paper 1 Complete - Ready for QA*
*Major Change: Step 6 now uses Claude Code instead of Gemini AI for solution generation*
