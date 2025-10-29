# EXEMPLAR TEMPLATE CREATION GUIDE

## What is an Exemplar Template?

An **exemplar template** is the DNA blueprint for AI-generated practice questions. It contains:
- Sample problems that define the pattern
- Variation rules for creating diverse questions
- MathTool specifications for visualizations
- Pedagogical guidelines for question generation

### Why It Matters

⚠️ **Errors in the exemplar propagate to ALL generated questions!**
- Wrong parameter names → 1000 questions with broken visualizers
- Wrong pedagogy → 1000 questions that give away answers
- Missing sections → Students blocked from curriculum progression

### Ground Rules

**GROUND RULE #1: Section Coverage**
- Every section in the .ts config MUST have at least one node in the exemplar
- Node's `section` field must exactly match a section `id` from the config

**GROUND RULE #2: Question Count**
- Each problem asks ONE question only
- Maximum TWO questions if the second depends on the first
- No multi-part questions with independent answers (a, b, c)
- Chat interface expects simple text/numeric answers

---

## The 4-Step Workflow

### Step 1: Extract Sections from .ts Config File

**Location:** `learning-platform/src/prompt-library/subjects/mathematics/secondary/s3-[topic-name].ts`

**What to Extract:**
1. Open the topic's .ts config file
2. Find `progressionStructure.sections[]` array
3. Extract each section's `id` field
4. Create a checklist of all section IDs

**Example: s3-sets-venn-diagrams.ts**

```typescript
progressionStructure: {
  sections: [
    {
      id: "set-fundamentals",        // ✅ Need at least 1 node
      title: "Set Fundamentals and Notation",
      // ...
    },
    {
      id: "set-relationships",        // ✅ Need at least 1 node
      title: "Set Relationships and Properties",
      // ...
    },
    {
      id: "understanding-complements", // ✅ Need at least 1 node
      title: "Understanding Complements",
      // ...
    }
  ]
}
```

**Your Checklist:**
```
□ set-fundamentals
□ set-relationships
□ understanding-complements
```

⚠️ **Each section MUST have at least 1 node in your exemplar with matching `section` field!**

---

### Step 2: Extract Math Tools, Definitions & Parameters

#### Find Available Tools

**Location:** `learning-platform/src/components/math-tools/mathToolsRegistry.ts`

```bash
# Search for available tools
grep -A 10 "toolName:" learning-platform/src/components/math-tools/mathToolsRegistry.ts
```

#### Study Component Props

**CRITICAL:** You MUST read the React component TypeScript interface to know valid parameter names!

**Location:** `learning-platform/src/components/math-tools/[ToolName].tsx`

**Example: SetVisualizer Research**

```typescript
// File: SetVisualizer.tsx
interface SetVisualizerProps {
  setName?: string;              // ✅ Valid prop: "setName"
  elements?: string[];           // ✅ Valid prop: "elements"
  setDescription?: string;
  displayMode?: 'list' | 'box' | 'circle';
  showCardinality?: boolean;     // ✅ Valid prop
  showBraces?: boolean;          // ✅ Valid prop
  isSubsetOf?: string;
}
```

#### Create Parameter Reference Sheet

```
Tool: setVisualizer

Required Parameters:
  ✅ elements (string[]) - Array of set elements
  ✅ setName (string) - MUST match question context

Optional Parameters:
  ✅ showCardinality (boolean)
  ✅ showBraces (boolean)
  ✅ displayMode ('list' | 'box' | 'circle')

INVALID Parameters (DON'T USE):
  ❌ setElements - doesn't exist (use "elements")
  ❌ showNotation - doesn't exist (use "showBraces")
  ❌ highlightElements - doesn't exist
```

**Key Insight:** Parameter names in the exemplar must EXACTLY match React component prop names. No transformations happen in the data flow!

#### ⚠️ CRITICAL: Complex Parameter Structures

For parameters with complex structures (arrays of objects, nested objects, etc.):

**❌ NEVER DO THIS:**
```json
"parameters": {
  "intervals": "variable"  // Too vague! AI will guess wrong!
}
```

**✅ ALWAYS DO THIS:**
```json
"parameters": {
  "intervals": [
    {"start": 50, "end": 60, "frequency": 8},
    {"start": 60, "end": 70, "frequency": 15}
  ]
}
```

**Why it matters:** One vague placeholder in the exemplar = 100+ broken questions in production!

👉 See the **"Critical Lessons from Production Issues"** section at the end of this document for a detailed case study.

---

### Step 3: Map Curriculum Questions to Sections

**Location:** `curriculum-content/S3-[Topic-Name].pdf`

#### Process

1. Read the curriculum PDF for your topic
2. Identify sample questions and their types
3. Map each question type to the appropriate section from Step 1
4. Ensure EVERY section has at least one question type

#### Example Mapping: Sets & Venn Diagrams

**From PDF → Section Mapping:**

```
Section: set-fundamentals
  - "List all elements of set A = {factors of 24}"
  - "Determine if 15 ∈ C where C = {primes < 20}"
  - "Find n(A) where A = {multiples of 3 less than 30}"

Section: set-relationships
  - "Given A ⊆ B, which region represents B - A?"
  - "Find A ∩ B where A = {1,2,3,4,5} and B = {3,4,5,6,7}"
  - "Find A ∪ B using the given sets"

Section: understanding-complements
  - "If U = {1,2,3,...,10} and A = {2,4,6,8}, find A'"
  - "Find (A ∪ B)' given universal set U"
```

#### Apply Ground Rule #2

For each question, ensure:
- ✅ **ONE question per problem:** "Find n(A)"
- ✅ **TWO dependent questions:** "Find A ∪ B, then find n(A ∪ B)"
- ❌ **Multiple independent questions:** "Find: a) A ∩ B, b) A ∪ B, c) n(A ∪ B)"

**Why?** The chat interface expects simple text answers. Multi-part questions with independent answers are difficult for students to enter correctly.

---

### Step 4: Create Self-Sufficient Exemplar

The exemplar must be **completely self-sufficient** because the AI generation script only receives this file and a prompt.

#### Complete Annotated Template

```json
{
  "sets-node-1": {
    "nodeId": "sets-node-1",
    "title": "Set Notation and Membership",

    // MUST match section ID from .ts config (Step 1)
    "section": "set-fundamentals",

    // What students learn in this node
    "learningFocus": [
      "∈ and ∉ notation",
      "n(A) cardinality",
      "Listing set elements"
    ],

    // Sample problems showing the pattern
    "exemplarProblems": [
      {
        "id": "ex1",
        "problemText": "Let A = {factors of 24}. List all elements of set A.",
        "correctAnswer": "{1, 2, 3, 4, 6, 8, 12, 24}"
      },
      {
        "id": "ex2",
        "problemText": "Let C = {prime numbers less than 20}. Determine if 15 ∈ C.",
        "correctAnswer": "No, 15 = 3 × 5 (composite)"
      }
    ],

    // How to create variations (CRITICAL for diversity)
    "variationRules": {
      "setDefinitions": [
        "factors of {number}",
        "multiples of {n} less than {max}",
        "prime numbers less than {max}",
        "composite numbers between {min} and {max}",
        "perfect squares less than {max}",
        "even numbers between {min} and {max}"
      ],
      "numberRanges": {
        "small": [6, 12, 18, 20, 24, 30],
        "medium": [40, 50, 60, 72, 80, 100],
        "large": [100, 120, 144, 180, 200]
      },
      "questionTypes": [
        "List all elements",
        "True/false membership (∈ or ∉)",
        "Find n(A)"
      ]
    },

    // Visual tool configuration (from Step 2)
    // ONLY include if it helps WITHOUT revealing the answer!
    "mathTool": {
      "toolName": "setVisualizer",
      "parameters": {
        // Placeholder - AI fills with actual values
        "elements": ["variable"],

        // CRITICAL: Must match question context
        // If question asks about "Set C", use "C"
        "setName": "variable",

        // Optional display settings
        "showCardinality": true,
        "showBraces": true
      }
    },

    // Instructions for AI question generator
    "generationGuidelines": [
      "GROUND RULE #1: This node's 'section' field MUST match a section ID from the .ts config",
      "GROUND RULE #2: Generate ONE question per problem. Maximum TWO questions ONLY if the second depends on the first",

      // MathTool decision
      "CRITICAL: Only include mathTool for questions where visualization helps WITHOUT revealing the answer",
      "For 'list elements' questions, OMIT mathTool entirely (would give away answer)",
      "For 'find n(A)' questions, OMIT mathTool entirely (would show element count)",

      // Context matching
      "ALWAYS set setName parameter to match the set variable in the question",
      "Example: If question is about 'Set P', use setName: 'P'",

      // Quality standards
      "Use different set definitions for variety (rotate through variationRules)",
      "Keep numbers reasonable (factors/multiples < 200)",
      "Use proper set notation: ∈, ∉, ⊆, ', n(A), ℕ, ℤ, ℚ, ℝ",
      "Ensure mathematical correctness in all generated values"
    ]
  },

  "sets-node-2": {
    "nodeId": "sets-node-2",
    "title": "Set Intersections and Unions",
    "section": "set-relationships",
    // ... (follow same structure)
  }
}
```

#### MathTool Decision Framework

Use this decision tree to determine if a question should include mathTool:

```
┌─────────────────────────────────────────┐
│ Would the visualization REVEAL          │
│ THE ANSWER before student attempts?     │──YES──→ ❌ OMIT mathTool
└─────────────────────────────────────────┘
                    ↓ NO
┌─────────────────────────────────────────┐
│ Does visualization help understanding   │
│ or provide context?                     │──NO───→ ❌ OMIT mathTool
└─────────────────────────────────────────┘
                    ↓ YES
                ✅ INCLUDE mathTool
```

**Examples:**

| Question Type | Include mathTool? | Rationale |
|--------------|------------------|-----------|
| List all elements of set | ❌ NO | Would show the answer |
| Find n(A) cardinality | ❌ NO | Would show element count |
| Is X a member? (∈) | ❌ NO | Would show if X is in the list |
| Which Venn region? | ✅ YES | Shows structure, not answer |
| A ⊆ B relationship? | ✅ YES | Shows sets, student determines relationship |
| Triangle calculation | ✅ YES | Shows setup, not calculated answer |

---

### ⚠️ CRITICAL CONSTRAINT: MathTool Timing

**MathTool is ALWAYS visible on first question load, BEFORE any student action.**

This is a fundamental technical constraint of the application. You cannot show mathTool "after" a student does something.

#### What This Means:

❌ **NEVER write guidelines like:**
- "INCLUDE mathTool to show graph AFTER student creates table"
- "Show visualization when student submits answer"
- "Display diagram after student attempts question"

✅ **INSTEAD write:**
- "INCLUDE mathTool - visible when question loads"
- "DO NOT include mathTool - would reveal answer on first load"
- "Curve provides context without revealing exact numeric answer"

#### Decision Rules:

```
If mathTool shows on first load, would it:

├─ Show what student should calculate/create?
│  └─ YES → ❌ OMIT mathTool
│
├─ Show the exact numeric answer?
│  └─ YES → ❌ OMIT mathTool
│
├─ Provide context without revealing answer?
│  └─ YES → ✅ INCLUDE mathTool
│
└─ Help understand concept visually?
   └─ YES → ✅ INCLUDE mathTool + change question to "From the graph/diagram shown..."
```

#### Examples:

**❌ BAD - MathTool Reveals Answer:**
```json
{
  "problemText": "Create a table of values for f(x) = 2^x",
  "mathTool": {"toolName": "exponentialGraph", "parameters": {"base": 2}}
}
// Problem: Graph shows what the table values should produce!
```

**✅ GOOD - No MathTool:**
```json
{
  "problemText": "Create a table of values for f(x) = 2^x",
  "mathTool": null
}
// Correct: Student creates table without seeing result
```

**✅ GOOD - MathTool With Adjusted Question:**
```json
{
  "problemText": "From the graph of f(x) = 3^x shown below, identify the y-intercept.",
  "mathTool": {"toolName": "exponentialGraph", "parameters": {"base": 3}}
}
// Correct: Question says "from the graph shown" - reading from visual
```

**✅ GOOD - MathTool Provides Context:**
```json
{
  "problemText": "Find population after 5 years using f(n) = 80 × 1.12^n",
  "mathTool": {"toolName": "exponentialGraph", "parameters": {"base": 1.12}}
}
// Correct: Curve shows trend, not the exact number for n=5
```

**❌ BAD - highlightPoints Reveals Answer:**
```json
{
  "mathTool": {
    "parameters": {
      "highlightPoints": [{"x": 5}]  // Shows the answer point!
    }
  }
}
```

#### When In Doubt:

**Default Rule:** When uncertain whether mathTool reveals too much, **OMIT it**. Better to have no visualization than to give away the answer.

---

## Quality Assurance Checklist

Before running the generation script, verify:

### Step 1 Checks: Section Coverage
- [ ] Read the topic's .ts config file
- [ ] Listed all section IDs from `progressionStructure.sections[]`
- [ ] EVERY section has at least 1 corresponding node
- [ ] Each node's `section` field exactly matches a section `id`

### Step 2 Checks: Math Tools & Parameters
- [ ] Identified correct mathTool(s) from registry
- [ ] Read React component TypeScript interface
- [ ] All parameter names match component props exactly
- [ ] No invalid/non-existent parameters used
- [ ] Context-specific parameters included (e.g., setName)

### Step 3 Checks: Question Mapping
- [ ] All sections have representative question types
- [ ] Each problem asks ONE question (or max TWO if dependent)
- [ ] No multi-part questions with independent answers

### Step 4 Checks: Self-Sufficient Exemplar
- [ ] All required fields present (nodeId, section, learningFocus, etc.)
- [ ] Variation rules provide sufficient diversity (6+ options)
- [ ] Generation guidelines are explicit and clear
- [ ] MathTool decision made per question type
- [ ] Mathematical correctness verified

### Testing
- [ ] Validate JSON syntax: `python -m json.tool exemplar.json`
- [ ] Test with `--test` flag first (generates 3 questions)
- [ ] Verify one question in app UI
- [ ] Check mathTool renders correctly

---

## Common Pitfalls & Solutions

### Pitfall 1: Missing Section Coverage

**❌ Problem:**
```json
// .ts config has sections: "set-fundamentals", "set-relationships", "complements"
// But exemplar only has:
{
  "sets-node-1": { "section": "set-fundamentals" },
  "sets-node-2": { "section": "set-fundamentals" }
  // Missing "set-relationships" and "complements"!
}
```

**✅ Solution:**
```json
{
  "sets-node-1": { "section": "set-fundamentals" },
  "sets-node-2": { "section": "set-relationships" },
  "sets-node-3": { "section": "complements" }
  // All sections covered ✓
}
```

---

### Pitfall 2: Wrong Parameter Names

**❌ Problem:**
```json
"parameters": {
  "setElements": [...],      // Component expects "elements"
  "showNotation": true       // Component expects "showBraces"
}
```

**✅ Solution:**
```json
"parameters": {
  "elements": [...],         // Matches SetVisualizerProps
  "showBraces": true         // Matches SetVisualizerProps
}
```

**How to Avoid:** Always cross-reference with the React component's TypeScript interface!

---

### Pitfall 3: Missing Context-Specific Parameters

**❌ Problem:**
```json
// Question asks about "Set D"
"parameters": {
  "elements": ["variable"]
  // Missing setName! Will default to "A"
}
// Result: Visualizer shows "Set A" when question asks about "Set D"
```

**✅ Solution:**
```json
"parameters": {
  "elements": ["variable"],
  "setName": "variable"  // AI will match to question context
},
"generationGuidelines": [
  "ALWAYS set setName to match the set used in the question (C, D, P, etc.)"
]
```

---

### Pitfall 4: Revealing Answers with MathTool

**❌ Problem:**
```json
{
  "problemText": "List all factors of 24",
  "mathTool": {
    "parameters": {
      "elements": [1, 2, 3, 4, 6, 8, 12, 24]  // Answer visible!
    }
  }
}
```

**✅ Solution:**
```json
{
  "problemText": "List all factors of 24",
  "mathTool": null,  // or omit the field entirely
  "generationGuidelines": [
    "For 'list elements' questions, DO NOT include mathTool"
  ]
}
```

---

### Pitfall 5: Multi-Part Independent Questions

**❌ Problem:**
```json
{
  "problemText": "Let A = {1,2,3,4,5} and B = {3,4,5,6,7}. Find: a) A ∩ B, b) A ∪ B, c) n(A ∪ B)",
  "correctAnswer": {
    "a": "{3, 4, 5}",
    "b": "{1,2,3,4,5,6,7}",
    "c": "7"
  }
}
// Students struggle to enter multi-part answers in chat
```

**✅ Solution Option 1 - Split (Preferred):**
```json
{
  "exemplarProblems": [
    {
      "problemText": "Let A = {1,2,3,4,5} and B = {3,4,5,6,7}. Find A ∩ B.",
      "correctAnswer": "{3, 4, 5}"
    },
    {
      "problemText": "Let A = {1,2,3,4,5} and B = {3,4,5,6,7}. Find A ∪ B.",
      "correctAnswer": "{1,2,3,4,5,6,7}"
    }
  ]
}
```

**✅ Solution Option 2 - Make Dependent:**
```json
{
  "problemText": "Let A = {1,2,3,4,5} and B = {3,4,5,6,7}. First find A ∪ B, then find n(A ∪ B).",
  "correctAnswer": "First: {1,2,3,4,5,6,7}, Then: 7"
}
// Second question depends on first (acceptable)
```

---

### Pitfall 6: Insufficient Variation Rules

**❌ Problem:**
```json
"variationRules": {
  "setDefinitions": ["factors of {number}"],  // Only 1 option!
  "numberRanges": {"numbers": [12, 24]}       // Only 2 numbers!
}
// AI will generate repetitive questions
```

**✅ Solution:**
```json
"variationRules": {
  "setDefinitions": [
    "factors of {number}",
    "multiples of {n} less than {max}",
    "prime numbers less than {max}",
    "composite numbers between {min} and {max}",
    "even numbers between {min} and {max}",
    "perfect squares less than {max}"
  ],
  "numberRanges": {
    "small": [6, 12, 18, 20, 24, 30, 36],
    "medium": [40, 50, 60, 72, 80, 90, 100],
    "large": [100, 120, 144, 150, 180, 200]
  }
}
// Plenty of variety for diverse questions
```

---

## Appendix

### Testing Commands

```bash
# Validate JSON syntax
python -m json.tool curriculum-content/S3/Maths/s3-math-topic-exemplars.json > /dev/null

# Test generation (first 3 nodes only)
python curriculum-content/scripts/generate_questions.py --test --provider gemini

# Full generation
python curriculum-content/scripts/generate_questions.py --provider gemini
```

### Data Flow (Simplified)

```
Exemplar JSON → AI Generation Script → YAML → yamlPathLoader.ts →
MathToolRenderer.tsx → React Component

Key Point: Parameters pass through unchanged!
  exemplar.parameters = yaml.parameters = component.props
```

### Quick Parameter Validation

```typescript
// In browser console during testing:
console.log(currentProblem.mathTool);

// Should see:
{
  toolName: "setVisualizer",
  parameters: {
    elements: ['2', '3', '5'],  // ✅ Correct prop name
    setName: 'C',               // ✅ Matches question context
    showCardinality: true
  }
}
```

---

## CRITICAL LESSONS FROM PRODUCTION ISSUES

### Lesson 1: Never Use Placeholders for Complex mathTool Parameters

**Issue Discovered:** Statistics histogram generation (January 2025)

**❌ What Went Wrong:**

In the original statistics exemplar, histogram parameters used vague placeholders:

```json
"mathTool": {
  "toolName": "histogram",
  "parameters": {
    "intervals": "variable",  // ⚠️ Just a string placeholder!
    "xLabel": "variable",
    "yLabel": "Frequency"
  }
}
```

**Result:** The AI generation script interpreted `"intervals": "variable"` in multiple incorrect ways:
- Separate arrays: `intervals: [100, 120, 140]` and `frequencies: [5, 12, 18]`
- JSON strings: `intervals: '[0, 10, 20]'` with `dataPoints: [15, 25, 30]`
- Unknown parameter `dataPoints` (not in component interface)

**Impact:** All 105 generated questions had broken histogram visualizations causing:
- "Unknown tool name: none" errors
- "intervals.map is not a function" errors
- NaN attribute errors in SVG rendering

---

**✅ The Correct Approach:**

Provide **concrete examples** with the **exact data structure** from the component interface:

```json
"mathTool": {
  "toolName": "histogram",
  "parameters": {
    "intervals": [
      {"start": 50, "end": 60, "frequency": 8},
      {"start": 60, "end": 70, "frequency": 15},
      {"start": 70, "end": 80, "frequency": 12}
    ],
    "xLabel": "variable",
    "yLabel": "Frequency",
    "showFrequencies": true
  }
}
```

**Plus explicit guidelines:**

```json
"generationGuidelines": [
  "CRITICAL: intervals MUST be array of objects with {start, end, frequency} structure",
  "Example: [{\"start\": 50, \"end\": 60, \"frequency\": 8}, {\"start\": 60, \"end\": 70, \"frequency\": 15}]",
  "Do NOT use separate arrays for intervals and frequencies",
  "Do NOT use 'dataPoints' parameter - it does not exist in the component interface"
]
```

---

### Best Practices for Complex Parameters:

#### 1. **Research the Component Interface Thoroughly**

**Location:** `learning-platform/src/components/math-tools/[ToolName].tsx`

```typescript
// Example: HistogramVisualizer.tsx
interface HistogramVisualizerProps {
  intervals: Array<{start: number, end: number, frequency: number}>;  // ✅ This is the structure!
  xLabel?: string;
  yLabel?: string;
  showFrequencies?: boolean;
  // ... other props
}
```

**Key Point:** The exemplar parameter structure MUST exactly match the TypeScript interface.

---

#### 2. **Document Complex Structures in Multiple Places**

✅ **In the mathTool.parameters field:**
- Use actual object/array structures
- Show 2-3 complete examples
- Never use just `"variable"` for nested structures

✅ **In generationGuidelines:**
- Add "CRITICAL:" prefix for structure requirements
- Include concrete examples in the guidelines
- Explicitly state what NOT to do
- Reference the component interface

✅ **In the parameter reference sheet (Step 2):**
- Document the exact structure with examples
- Note any required vs optional fields
- Warn about common mistakes

---

#### 3. **Test Against Component Interface**

After creating the exemplar, verify:

```bash
# Check the component interface
grep -A 20 "interface.*Props" learning-platform/src/components/math-tools/HistogramVisualizer.tsx

# Verify your exemplar matches
# Example structure in exemplar should be valid JSON that could be passed directly to component
```

---

#### 4. **Simple vs Complex Parameters**

**Simple parameters** (OK to use "variable"):
- Strings: `"xLabel": "variable"`
- Booleans: `"showGrid": true`
- Numbers: `"highlightIndex": -1`

**Complex parameters** (MUST show structure):
- Arrays of objects: `"intervals": [{"start": 50, "end": 60, "frequency": 8}]`
- Nested objects: `"lines": [{"type": "linear", "slope": 2, "intercept": 3}]`
- Arrays of arrays: `"matrix": [[1, 2], [3, 4]]`

---

### The Amplification Effect

**Why this matters:** The exemplar is the "DNA" for ALL generated questions.

- ❌ One error in exemplar → 100+ broken questions
- ❌ Vague placeholder → Inconsistent AI interpretations
- ❌ Wrong parameter name → Runtime errors in production

- ✅ Correct exemplar → 100+ perfect questions
- ✅ Clear structure → Consistent generation
- ✅ Verified parameters → No runtime errors

**Remember:** You only create the exemplar ONCE, but it generates questions FOREVER. Get it right the first time.

---

### Quick Checklist for mathTool Parameters:

- [ ] Read the React component TypeScript interface
- [ ] Note ALL parameter names (exact spelling, case-sensitive)
- [ ] Identify which parameters are required vs optional
- [ ] For complex parameters, copy the exact structure
- [ ] Include 2-3 concrete examples in the exemplar
- [ ] Add "CRITICAL:" guidelines for complex structures
- [ ] State explicitly what NOT to do
- [ ] Test one generated question before full generation

---

## Summary: The 4-Step Checklist

- [ ] **Step 1:** Extracted all section IDs from .ts config, created checklist
- [ ] **Step 2:** Researched math tools, created parameter reference sheet
- [ ] **Step 3:** Mapped curriculum questions to sections, applied question count rule
- [ ] **Step 4:** Created self-sufficient exemplar with complete annotations

**Remember:** Perfect the exemplar once, generate perfect questions forever.

---

**Document Version:** 2.1
**Last Updated:** Added Critical Lessons from Production Issues (January 2025)
**Changelog:**
- v2.1: Added "Critical Lessons from Production Issues" section documenting histogram parameter issue and best practices for complex mathTool structures
- v2.0: Complete restructure around 4-step workflow, reduced length by ~55%
- v1.1: Added Ground Rules for Section Coverage and Question Count
- v1.0: Initial comprehensive version
