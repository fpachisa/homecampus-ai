# PRACTICE MODULE CREATION GUIDE

## Overview

This guide describes how to create practice modules for the AI Campus learning platform. Practice modules are YAML files containing nodes (problem sets) organized by layers.

### What is a Practice Module?

A practice module is a YAML file that defines:
- **Nodes**: Individual problem sets focused on specific skills
- **Layers**: Progression stages (Foundation → Word Problems → Exam Practice)
- **Problems**: Pre-written questions with solutions and optional visualizations

### File Locations

| File Type | Location |
|-----------|----------|
| YAML Practice Files | `curriculum-content/{Grade}/{Subject}/{category}.yaml` |
| SVG Diagrams | `curriculum-content/{Grade}/{Subject}/bar-model-svgs/{topic}/` |
| Topic Config (.ts) | `src/prompt-library/subjects/mathematics/{level}/{topic}.ts` |
| Notes Files | `src/notes/{level}/{subject}/{topic}/` |

**Example paths:**
- YAML: `curriculum-content/P5/Maths/p5-math-four-operations-fractions.yaml`
- SVGs: `curriculum-content/P5/Maths/bar-model-svgs/fractions/`
- Config: `src/prompt-library/subjects/mathematics/primary/p5-four-operations-fractions.ts`
- Notes: `src/notes/p5/math/four-operations-fractions/`

---

## The 5-Step Workflow

### Step 1: Extract Sections from .ts Config File

**Purpose:** Understand the curriculum structure and ensure complete coverage.

**Location:** `src/prompt-library/subjects/mathematics/{level}/{topic}.ts`

**What to Extract:**
1. Open the topic's .ts config file
2. Find `progressionStructure.sections[]` array
3. Extract each section's `id`, `title`, and learning objectives
4. Create a checklist of all section IDs

**Example: p5-four-operations-fractions.ts**

```typescript
progressionStructure: {
  sections: [
    {
      id: "adding-fractions-same-denominator",
      title: "Adding Fractions (Same Denominator)",
      objectives: ["Add fractions with common denominators"]
    },
    {
      id: "subtracting-fractions-same-denominator",
      title: "Subtracting Fractions (Same Denominator)",
      objectives: ["Subtract fractions with common denominators"]
    },
    // ... more sections
  ]
}
```

**Your Checklist:**
```
□ adding-fractions-same-denominator
□ subtracting-fractions-same-denominator
□ adding-fractions-different-denominator
□ subtracting-fractions-different-denominator
□ multiplying-fractions
□ dividing-fractions
□ word-problems-addition-subtraction
□ word-problems-multiplication-division
```

**GROUND RULE #1:** Every section MUST have at least one node in the YAML.

---

### Step 2: Review Notes Files for Sample Problems

**Purpose:** Extract curriculum-aligned problems, concepts, and contexts.

**Location:** `src/notes/{level}/{subject}/{topic}/`

**What to Extract:**

1. **Sample Problems with Solutions**
   - Practice problems shown in the notes
   - Worked examples with step-by-step solutions

2. **Key Concepts and Formulas**
   - Core rules and procedures
   - Common patterns students must learn

3. **Problem Contexts and Scenarios**
   - Real-world applications (pizza sharing, rope cutting, etc.)
   - Word problem setups used in the curriculum

4. **Visual Aids**
   - Bar models, diagrams, number lines
   - These inform SVG creation later

**Example extraction from notes:**

```
Section: adding-fractions-same-denominator
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sample Problems:
  1. "1/5 + 2/5 = ?" → 3/5
  2. "2/7 + 3/7 = ?" → 5/7
  3. "1/4 + 2/4 = ?" → 3/4

Key Concepts:
  - Same denominator: add numerators, keep denominator
  - a/c + b/c = (a+b)/c

Contexts for Word Problems:
  - Pizza slices eaten
  - Ribbon/rope lengths
  - Water in containers
```

---

### Step 3: Create Problem Inventory

**Purpose:** Plan all problems before writing YAML.

For each section, document:

```
Section: [section-id]
Layer: [foundation | word-problems | examPractice]
Node Title: [descriptive title]
Problems Required: [number, typically 5-8]

Problems:
1. [Problem text] → [Answer]
   Steps: [brief solution outline]

2. [Problem text] → [Answer]
   Steps: [brief solution outline]

SVG Needed: [yes/no, description if yes]
```

**Layer Guidelines:**

| Layer | Purpose | Problem Type |
|-------|---------|--------------|
| `foundation` | Core computation skills | Direct calculation, no context |
| `word-problems` | Applied problem solving | Real-world scenarios with bar models |
| `examPractice` | Exam preparation | Past paper style questions |

**GROUND RULE #2:** Each problem asks ONE question only. Maximum TWO questions if the second depends on the first.

---

### Step 4: Create YAML File

**Purpose:** Write the complete practice module.

**File Location:** `curriculum-content/{Grade}/{Subject}/{category}.yaml`

#### YAML Structure

```yaml
nodes:
  # ============================================
  # FOUNDATION LAYER - Computation Skills
  # ============================================

  - id: topic-foundation-node-1
    title: "Descriptive Node Title"
    layer: foundation
    prerequisites: []  # or list of node IDs
    problemsRequired: 5
    descriptor:
      section: "section-id-from-config"
      problemDescription:
        - "Generate problems that test [specific skill]"
        - "Focus on [key concept]"
      contexts:
        - "pure computation"
      preWrittenQuestions:
        - id: "node1-q1"
          problemText: "Calculate: $\\frac{1}{5} + \\frac{2}{5}$"
          finalAnswer: "$\\frac{3}{5}$"
          stepByStepGuideline:
            - "Add the numerators: 1 + 2 = 3"
            - "Keep the denominator: 5"
            - "Answer: $\\frac{3}{5}$"

        - id: "node1-q2"
          problemText: "Calculate: $\\frac{3}{8} + \\frac{4}{8}$"
          finalAnswer: "$\\frac{7}{8}$"
          stepByStepGuideline:
            - "Add the numerators: 3 + 4 = 7"
            - "Keep the denominator: 8"
            - "Answer: $\\frac{7}{8}$"
      aiGeneratedQuestions: false

  # ============================================
  # WORD PROBLEMS LAYER - Applied Problems
  # ============================================

  - id: topic-word-problems-node-1
    title: "Word Problems: Addition and Subtraction"
    layer: word-problems
    prerequisites:
      - topic-foundation-node-1
      - topic-foundation-node-2
    problemsRequired: 4
    descriptor:
      section: "word-problems-section-id"
      problemDescription:
        - "Multi-step word problems using fractions"
      contexts:
        - "real-world scenarios"
      preWrittenQuestions:
        - id: "wp-node1-q1"
          avatarIntro: "Let's solve a real-world problem!"
          problemText: "Sarah has $\\frac{3}{4}$ of a pizza. She eats $\\frac{1}{4}$. What fraction is left?"
          finalAnswer: "$\\frac{2}{4} = \\frac{1}{2}$"
          stepByStepGuideline:
            - "Start with $\\frac{3}{4}$ pizza"
            - "Subtract what was eaten: $\\frac{3}{4} - \\frac{1}{4}$"
            - "Same denominator, subtract numerators: 3 - 1 = 2"
            - "Answer: $\\frac{2}{4} = \\frac{1}{2}$"
          solutionDiagramSvg: "/curriculum-content/P5/Maths/bar-model-svgs/fractions/pizza-problem.svg"
      aiGeneratedQuestions: false
```

#### Key YAML Fields

| Field | Required | Description |
|-------|----------|-------------|
| `id` | Yes | Unique node identifier |
| `title` | Yes | Display name for the node |
| `layer` | Yes | `foundation`, `word-problems`, or `examPractice` |
| `prerequisites` | Yes | Array of node IDs (can be empty) |
| `problemsRequired` | Yes | Number of problems to complete |
| `descriptor.section` | Yes | Must match section ID from .ts config |
| `descriptor.preWrittenQuestions` | Yes | Array of question objects |
| `descriptor.aiGeneratedQuestions` | Yes | Set to `false` for pre-written |

#### Question Object Fields

| Field | Required | Description |
|-------|----------|-------------|
| `id` | Yes | Unique question identifier |
| `problemText` | Yes | The question (supports LaTeX) |
| `finalAnswer` | Yes | Correct answer (supports LaTeX) |
| `stepByStepGuideline` | Yes | Array of solution steps |
| `avatarIntro` | No | Tutor's introduction to the problem |
| `solutionDiagramSvg` | No | Path to SVG diagram |
| `questionTable` | No | Structured data table |
| `mathTool` | No | Interactive visualization |

#### LaTeX Guidelines

```yaml
# Use double backslash in YAML for LaTeX
problemText: "Calculate: $\\frac{1}{2} + \\frac{1}{3}$"

# Fractions
"$\\frac{numerator}{denominator}$"

# Mixed numbers (use spacing)
"$2\\frac{1}{4}$"

# Multiplication symbol
"$\\times$"

# Division symbol
"$\\div$"
```

---

### Step 5: Create SVG Diagrams (If Needed)

**Purpose:** Visual bar models for word problem solutions.

**Location:** `curriculum-content/{Grade}/{Subject}/bar-model-svgs/{topic}/`

#### When to Create SVGs

- Word problems with quantities to visualize
- Problems where bar models aid understanding
- Multi-step problems showing before/after states

#### SVG Template

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
  <!-- Title -->
  <text x="200" y="20" text-anchor="middle" font-size="14" font-weight="bold">
    Problem Title
  </text>

  <!-- Bar Model -->
  <rect x="50" y="50" width="300" height="40" fill="#E3F2FD" stroke="#1976D2" stroke-width="2"/>

  <!-- Segments -->
  <rect x="50" y="50" width="100" height="40" fill="#90CAF9" stroke="#1976D2" stroke-width="2"/>

  <!-- Labels -->
  <text x="100" y="75" text-anchor="middle" font-size="12">1/3</text>

  <!-- Brackets and annotations -->
  <path d="M 50 100 L 50 110 L 350 110 L 350 100" fill="none" stroke="#333" stroke-width="1"/>
  <text x="200" y="125" text-anchor="middle" font-size="11">Total: 1 whole</text>
</svg>
```

#### SVG Best Practices

1. **Consistent dimensions**: Use `viewBox="0 0 400 200"` or similar
2. **Clear labels**: All segments should be labeled
3. **Color coding**: Use consistent colors for same quantities
4. **Before/After**: Show problem state and solution state
5. **Annotations**: Include brackets, arrows, and explanatory text

#### Naming Convention

```
{context}-{description}.svg

Examples:
- pizza-sharing.svg
- ribbon-cutting.svg
- water-containers.svg
- marbles-comparison.svg
```

---

## Quality Assurance Checklist

### Before Starting
- [ ] Read the topic's .ts config file completely
- [ ] Listed all section IDs from `progressionStructure.sections[]`
- [ ] Located and read all notes files for the topic

### Problem Inventory
- [ ] Created problem inventory for each section
- [ ] Each section has at least one node planned
- [ ] Problems progress from simple to complex
- [ ] Word problems have varied contexts

### YAML Creation
- [ ] All section IDs from config have corresponding nodes
- [ ] Node IDs are unique and descriptive
- [ ] Layers are assigned appropriately
- [ ] Prerequisites form logical progression
- [ ] `problemsRequired` matches question count
- [ ] All LaTeX is properly escaped (double backslash)
- [ ] `aiGeneratedQuestions: false` is set

### Questions
- [ ] Each problem asks ONE question only
- [ ] `finalAnswer` is correct and complete
- [ ] `stepByStepGuideline` is clear and accurate
- [ ] Word problems have realistic contexts
- [ ] Numbers are appropriate for grade level

### SVGs (if applicable)
- [ ] SVG files exist at specified paths
- [ ] Bar models accurately represent problems
- [ ] Labels are clear and readable
- [ ] Colors are consistent

### Testing
- [ ] YAML validates: `python -c "import yaml; yaml.safe_load(open('file.yaml'))"`
- [ ] Load practice module in app UI
- [ ] Verify all nodes display correctly
- [ ] Test at least one problem from each layer

---

## Common Pitfalls & Solutions

### Pitfall 1: Missing Section Coverage

**Problem:** Some sections from .ts config have no nodes in YAML.

**Solution:** Cross-reference your node list against the section checklist from Step 1.

### Pitfall 2: LaTeX Escaping Errors

**Problem:** Math doesn't render - shows raw LaTeX or errors.

**Wrong:**
```yaml
problemText: "Calculate: $\frac{1}{2}$"  # Single backslash
```

**Correct:**
```yaml
problemText: "Calculate: $\\frac{1}{2}$"  # Double backslash
```

### Pitfall 3: Incorrect Section IDs

**Problem:** Node doesn't link to curriculum progression.

**Wrong:**
```yaml
section: "adding-fractions"  # Doesn't match config
```

**Correct:**
```yaml
section: "adding-fractions-same-denominator"  # Exact match
```

### Pitfall 4: Missing Prerequisites

**Problem:** Students can access advanced nodes without basics.

**Solution:** Set prerequisites to enforce progression:
```yaml
- id: advanced-node
  prerequisites:
    - basic-node-1
    - basic-node-2
```

### Pitfall 5: Incorrect Calculations

**Problem:** `finalAnswer` or solution steps have math errors.

**Solution:** Double-check all calculations. For fractions:
- Verify LCD calculations
- Confirm simplification to lowest terms
- Check mixed number conversions

### Pitfall 6: SVG Path Errors

**Problem:** Solution diagrams don't display.

**Solution:** Verify:
1. File exists at specified path
2. Path starts with `/curriculum-content/`
3. Filename matches exactly (case-sensitive)

---

## Example: Complete Node

```yaml
- id: fractions-foundation-node-3
  title: "Adding Fractions with Different Denominators"
  layer: foundation
  prerequisites:
    - fractions-foundation-node-1
    - fractions-foundation-node-2
  problemsRequired: 6
  descriptor:
    section: "adding-fractions-different-denominator"
    problemDescription:
      - "Adding fractions requiring LCD"
      - "Results may need simplification"
    contexts:
      - "pure computation"
    preWrittenQuestions:
      - id: "f3-q1"
        problemText: "Calculate: $\\frac{1}{2} + \\frac{1}{3}$"
        finalAnswer: "$\\frac{5}{6}$"
        stepByStepGuideline:
          - "Find LCD of 2 and 3: LCD = 6"
          - "Convert $\\frac{1}{2} = \\frac{3}{6}$"
          - "Convert $\\frac{1}{3} = \\frac{2}{6}$"
          - "Add: $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$"

      - id: "f3-q2"
        problemText: "Calculate: $\\frac{2}{3} + \\frac{1}{4}$"
        finalAnswer: "$\\frac{11}{12}$"
        stepByStepGuideline:
          - "Find LCD of 3 and 4: LCD = 12"
          - "Convert $\\frac{2}{3} = \\frac{8}{12}$"
          - "Convert $\\frac{1}{4} = \\frac{3}{12}$"
          - "Add: $\\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$"

      - id: "f3-q3"
        problemText: "Calculate: $\\frac{3}{4} + \\frac{2}{5}$"
        finalAnswer: "$\\frac{23}{20}$ or $1\\frac{3}{20}$"
        stepByStepGuideline:
          - "Find LCD of 4 and 5: LCD = 20"
          - "Convert $\\frac{3}{4} = \\frac{15}{20}$"
          - "Convert $\\frac{2}{5} = \\frac{8}{20}$"
          - "Add: $\\frac{15}{20} + \\frac{8}{20} = \\frac{23}{20}$"
          - "Convert to mixed number: $1\\frac{3}{20}$"

      - id: "f3-q4"
        problemText: "Calculate: $\\frac{1}{6} + \\frac{1}{4}$"
        finalAnswer: "$\\frac{5}{12}$"
        stepByStepGuideline:
          - "Find LCD of 6 and 4: LCD = 12"
          - "Convert $\\frac{1}{6} = \\frac{2}{12}$"
          - "Convert $\\frac{1}{4} = \\frac{3}{12}$"
          - "Add: $\\frac{2}{12} + \\frac{3}{12} = \\frac{5}{12}$"

      - id: "f3-q5"
        problemText: "Calculate: $\\frac{5}{6} + \\frac{3}{8}$"
        finalAnswer: "$\\frac{29}{24}$ or $1\\frac{5}{24}$"
        stepByStepGuideline:
          - "Find LCD of 6 and 8: LCD = 24"
          - "Convert $\\frac{5}{6} = \\frac{20}{24}$"
          - "Convert $\\frac{3}{8} = \\frac{9}{24}$"
          - "Add: $\\frac{20}{24} + \\frac{9}{24} = \\frac{29}{24}$"
          - "Convert to mixed number: $1\\frac{5}{24}$"

      - id: "f3-q6"
        problemText: "Calculate: $\\frac{2}{9} + \\frac{1}{6}$"
        finalAnswer: "$\\frac{7}{18}$"
        stepByStepGuideline:
          - "Find LCD of 9 and 6: LCD = 18"
          - "Convert $\\frac{2}{9} = \\frac{4}{18}$"
          - "Convert $\\frac{1}{6} = \\frac{3}{18}$"
          - "Add: $\\frac{4}{18} + \\frac{3}{18} = \\frac{7}{18}$"
    aiGeneratedQuestions: false
```

---

## Summary: The 5-Step Checklist

- [ ] **Step 1:** Extract all section IDs from .ts config
- [ ] **Step 2:** Review notes files for problems and concepts
- [ ] **Step 3:** Create problem inventory with all questions planned
- [ ] **Step 4:** Write complete YAML with all nodes and questions
- [ ] **Step 5:** Create SVG diagrams for word problem solutions

---

**Document Version:** 3.0
**Last Updated:** December 2025
**Changelog:**
- v3.0: Complete rewrite - Direct YAML creation workflow (no AI generation scripts)
- v2.2: Added Step 3 - Notes Files Review
- v2.1: Added complex parameter lessons
- v2.0: 4-step workflow with exemplar templates
- v1.0: Initial version
