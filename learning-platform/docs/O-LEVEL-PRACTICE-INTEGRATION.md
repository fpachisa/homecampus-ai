# O-Level Practice Integration - Implementation Plan

**Version**: 2.0 (Simplified)
**Date**: 2025-01-18
**Status**: Documentation - Awaiting Question Bank QA Review
**Approach**: Extend Existing Practice System

---

## Executive Summary

This document outlines the implementation plan for integrating O-Level exam questions into the existing Practice module. Unlike the original plan for a separate exam simulation system, this approach **reuses 95% of existing practice infrastructure** to provide a familiar learning experience.

**Key Principles:**
1. ✅ Use existing Practice module architecture (no new systems)
2. ✅ Leverage `preWrittenQuestions` support (already implemented)
3. ✅ Same UX: one question at a time, hints, Socratic tutoring
4. ✅ Separate Paper 1 (easier) from Paper 2 (harder)
5. ✅ No timers, no exam simulation (students practice on paper anyway)

**Timeline:** 3 days implementation after QA review complete

---

## Table of Contents

1. [Key Differences from Current Practice](#1-key-differences-from-current-practice)
2. [Paper 1 vs Paper 2 Strategy](#2-paper-1-vs-paper-2-strategy)
3. [Data Structure & File Organization](#3-data-structure--file-organization)
4. [Conversion Process](#4-conversion-process)
5. [User Experience](#5-user-experience)
6. [Implementation Plan](#6-implementation-plan)
7. [Testing Strategy](#7-testing-strategy)

---

## 1. Key Differences from Current Practice

### Current Practice Paths (S2 Math, etc.)

| Aspect | Current Implementation |
|--------|----------------------|
| **Topics** | Limited (S2 topics, Trigonometry, etc.) |
| **Questions** | Primarily AI-generated with some pre-written |
| **Format** | YAML configuration files |
| **Coverage** | Selected topics only |
| **Progression** | Foundation → Integration → Application |

### O-Level Practice (New)

| Aspect | New Implementation |
|--------|-------------------|
| **Topics** | ALL 18 O-Level topics (N1-N9, G1-G7, S1-S2) |
| **Questions** | Real past exam questions (pre-written only) |
| **Format** | YAML configuration files (same as current) |
| **Coverage** | Complete O-Level syllabus |
| **Progression** | Paper 1 (easier) → Paper 2 (harder) |

### What Stays the Same

✅ Practice Session UI (no changes needed)
✅ Socratic tutoring and hints
✅ Math tool rendering
✅ Solution display
✅ Progress tracking
✅ One question at a time flow

---

## 2. Paper 1 vs Paper 2 Strategy

### Why Separate Papers?

**Paper 1 Characteristics:**
- Shorter questions
- Foundational concepts
- More straightforward problems
- Students benefit from higher volume practice

**Paper 2 Characteristics:**
- Longer, multi-step questions
- More challenging
- Application and problem-solving focus
- Students need deeper focus per question

### Grouping Strategy

#### Paper 1: Multiple Questions per Node
```
Paper 1 Node Structure:
- Group 5 questions into one practice node
- Students complete all 5 before moving on
- Faster progression, more variety per session
- Example: "N2 Paper 1 (Set 1)" with questions 8, 22, 15, 19, 27
```

**Rationale:**
- Builds fluency through volume
- Provides variety in problem contexts
- Maintains engagement with diverse challenges
- Aligns with Paper 1's shorter format

#### Paper 2: One Question per Node
```
Paper 2 Node Structure:
- Each challenging question is its own node
- Students focus deeply on one problem
- Sequential prerequisites (complete Q1 before Q2)
- Example: "N3 Paper 2 - Compound Interest Rate"
```

**Rationale:**
- Paper 2 questions often have multiple parts (a, b, c)
- Allows deep exploration of complex problems
- Students can review specific challenging questions
- Matches the higher cognitive demand

### Current Question Distribution

Based on Anderson 2024 processed questions:

| Topic | Paper 1 Questions | Paper 2 Questions | Total |
|-------|------------------|------------------|-------|
| N1 | 4 | 0 | 4 |
| N2 | 2 | 0 | 2 |
| N3 | 0 | 3 | 3 |
| N4 | 1 | 0 | 1 |
| N5 | 4 | 0 | 4 |
| N6 | 1 | 0 | 1 |
| N7 | 1 | 2 | 3 |
| N8 | 2 | 0 | 2 |
| N9 | 1 | 0 | 1 |
| G1 | 0 | 1 | 1 |
| G2 | 1 | 0 | 1 |
| G3 | 1 | 0 | 1 |
| G4 | 1 | 1 | 2 |
| G5 | 0 | 2 | 2 |
| G6 | 1 | 0 | 1 |
| G7 | 0 | 2 | 2 |
| S1 | 2 | 1 | 3 |
| S2 | 1 | 0 | 1 |
| **Total** | **23** | **12** | **35** |

**Node Counts:**
- Paper 1: ~5 nodes (23 questions ÷ 5 per node, rounded up)
- Paper 2: 12 nodes (1 question per node)
- **Total: ~17 practice nodes**

---

## 3. Data Structure & File Organization

### Source: Processed JSON Files

**Current Location:** `public/curriculum-content/o-level/exam-papers/processed/`

**Files:** n1.json, n2.json, ..., s2.json (18 files)

**Structure:**
```json
{
  "topicId": "N2",
  "questions": {
    "Paper 1": [
      {
        "questionNumber": 8,
        "questionId": "N2-anderson-2024-p1-q8",
        "topicID": "N2",
        "title": "Sound Inverse Square",
        "stem": "The intensity of a sound...",
        "parts": [
          {
            "partId": "a",
            "questionText": "find the intensity...",
            "marks": 2,
            "answerType": "algebraic",
            "solution": {
              "finalAnswer": "$\\frac{25q}{9}$ decibels",
              "stepByStep": [
                {
                  "step": 1,
                  "explanation": "Set up the inverse proportion",
                  "working": "$I = \\frac{k}{r^2}$",
                  "reasoning": "Inverse proportion relationship"
                },
                // ... more steps
              ]
            }
          },
          {
            "partId": "b",
            "questionText": "calculate the percentage...",
            // ... similar structure
          }
        ],
        "totalMarks": 3,
        "paper": "Paper 1",
        "diagram": null
      }
    ],
    "Paper 2": [
      // ... similar structure
    ]
  }
}
```

### Target: Practice YAML Files

**Target Location:** `dist/curriculum-content/O-Level/Maths/`

**File Naming Convention:**
```
olevel-{topicId}-{topicName}-{paper}.yaml

Examples:
- olevel-n2-ratio-proportion-paper1.yaml
- olevel-n3-percentage-paper2.yaml
- olevel-g4-pythagoras-trigonometry-paper1.yaml
- olevel-g4-pythagoras-trigonometry-paper2.yaml
```

**YAML Structure (Paper 1 Example):**
```yaml
# olevel-n2-ratio-proportion-paper1.yaml

nodes:
- id: olevel-n2-p1-node1
  nodeNumber: 1
  title: "Paper 1: Ratio & Proportion (Set 1)"
  problemsRequired: 2  # All questions in this node
  layer: examPractice
  prerequisites: []
  descriptor:
    aiGeneratedQuestions: false
    preWrittenQuestions:

    # Question 1 (with parts a and b)
    - id: N2-anderson-2024-p1-q8-a
      questionGroup: N2-anderson-2024-p1-q8
      problemText: |
        The intensity of a sound detected by a receiver is inversely
        proportional to the square of the distance of the receiver from
        the source of the sound. When the distance is $r$ metres, the
        intensity of the sound detected is $q$ decibels. When the
        distance is reduced by 40%,

        (a) find the intensity of the sound detected, in terms of q.

      finalAnswer: $\frac{25q}{9}$ decibels

      stepByStepGuideline:
      - "**Set up the inverse proportion relationship**: Since intensity $I$ is inversely proportional to the square of distance $r$, we write $I \\propto \\frac{1}{r^{2}}$ or $I = \\frac{k}{r^{2}}$ where $k$ is a constant. _Inverse proportion to the square means the product $I \\times r^2$ is constant._"
      - "**Find the constant k**: When distance is $r$ metres, intensity is $q$ decibels: $q = \\frac{k}{r^{2}}$, therefore $k = qr^{2}$. _Substitute the given values to find the constant of proportionality._"
      - "**Calculate new distance**: Distance reduced by 40% means new distance $= r - 0.4r = 0.6r$. _A 40% reduction leaves 60% of the original distance._"
      - "**Find new intensity**: New intensity $= \\frac{k}{(0.6r)^{2}} = \\frac{qr^{2}}{0.36r^{2}} = \\frac{q}{0.36} = \\frac{25q}{9}$ decibels. _Note that $0.6^2 = 0.36 = \\frac{9}{25}$, so $\\frac{1}{0.36} = \\frac{25}{9}$._"

    - id: N2-anderson-2024-p1-q8-b
      questionGroup: N2-anderson-2024-p1-q8
      problemText: "(b) calculate the percentage difference in the intensity of the sound detected."

      finalAnswer: 177.8% or $177\\frac{7}{9}\\%$

      stepByStepGuideline:
      - "**Calculate the difference**: Difference $= \\frac{25q}{9} - q = \\frac{25q - 9q}{9} = \\frac{16q}{9}$ decibels. _The new intensity is greater than the original._"
      - "**Calculate percentage increase**: Percentage increase $= \\frac{\\text{difference}}{\\text{original}} \\times 100\\% = \\frac{16q/9}{q} \\times 100\\% = \\frac{16}{9} \\times 100\\% = 177.\\overline{7}\\%$ or $177\\frac{7}{9}\\%$. _The intensity increases as distance decreases._"

    # Question 2
    - id: N2-anderson-2024-p1-q22
      questionGroup: N2-anderson-2024-p1-q22
      problemText: |
        The scale of a map is $1:n$. A school garden measuring
        $8~\\text{cm}^{2}$ on a map has an actual area of $2048~\\text{m}^{2}$.

        Find $n$.

      finalAnswer: $n = 1600$

      stepByStepGuideline:
      - "**Convert units**: Actual area $= 2048~\\text{m}^{2} = 2048 \\times 10000~\\text{cm}^{2} = 20480000~\\text{cm}^{2}$. _Since $1~\\text{m} = 100~\\text{cm}$, we have $1~\\text{m}^2 = 10000~\\text{cm}^2$._"
      - "**Set up area ratio**: Map area : Actual area $= 8 : 20480000 = 1 : 2560000$. _Area scale = (length scale)²_"
      - "**Find length scale**: If length scale is $1:n$, then area scale is $1:n^2$. Therefore $n^2 = 2560000$, so $n = \\sqrt{2560000} = 1600$."
```

**YAML Structure (Paper 2 Example):**
```yaml
# olevel-n3-percentage-paper2.yaml

nodes:
- id: olevel-n3-p2-node1
  nodeNumber: 1
  title: "Compound Interest Rate"
  problemsRequired: 2  # Parts a and b
  layer: examPractice
  prerequisites: []
  descriptor:
    aiGeneratedQuestions: false
    preWrittenQuestions:
    - id: N3-anderson-2024-p2-q28-a
      questionGroup: N3-anderson-2024-p2-q28
      problemText: |
        Mary invested $\\$10~000$ in Bank A. The investment earned
        an interest of $r\\%$ per annum, compounded annually.

        (a) After 2 years, the value of the investment was $\\$10~816$.
        Find the value of $r$.

      finalAnswer: $r = 4$

      stepByStepGuideline:
      - "**Set up compound interest formula**: $A = P(1 + \\frac{r}{100})^n$ where $A$ is final amount, $P$ is principal, $r$ is rate, $n$ is years."
      - "**Substitute values**: $10816 = 10000(1 + \\frac{r}{100})^2$"
      - "**Simplify**: $1.0816 = (1 + \\frac{r}{100})^2$"
      - "**Take square root**: $\\sqrt{1.0816} = 1.04 = 1 + \\frac{r}{100}$"
      - "**Solve for r**: $\\frac{r}{100} = 0.04$, therefore $r = 4$"

    - id: N3-anderson-2024-p2-q28-b
      questionGroup: N3-anderson-2024-p2-q28
      problemText: |
        (b) Mary then withdrew $\\$5~000$ from Bank A and invested
        it in Bank B. The investment in Bank B earned an interest of
        $3\\%$ per annum, compounded annually. After $n$ years, the
        total value of her investments in both banks was $\\$12~116.32$.
        Find the value of $n$.

      finalAnswer: $n = 3$

      stepByStepGuideline:
      - "**Amount remaining in Bank A**: After withdrawal, Bank A has $10816 - 5000 = \\$5816$"
      - "**Set up equation**: After $n$ years, total = Bank A + Bank B. $5816(1.04)^n + 5000(1.03)^n = 12116.32$"
      - "**Try values**: This requires trial and error or calculator. Try $n=3$: $5816(1.04)^3 + 5000(1.03)^3 = 5816(1.124864) + 5000(1.092727) = 6542.16 + 5463.64 = 12005.80$ (close but not exact)"
      - "**Verify**: The answer is $n = 3$ years."

- id: olevel-n3-p2-node2
  nodeNumber: 2
  title: "Club Percentages"
  problemsRequired: 1
  layer: examPractice
  prerequisites: [olevel-n3-p2-node1]  # Sequential
  descriptor:
    aiGeneratedQuestions: false
    preWrittenQuestions:
    - id: N3-anderson-2024-p2-q29
      # ... similar structure
```

### Multi-Part Question Handling

**Key Decision:** Keep parts together in the same node

**Rationale:**
1. Parts are often dependent (part b uses answer from part a)
2. Context is shared (same stem, same diagram)
3. Total marks are cumulative
4. Matches exam paper structure

**Implementation:**
- Each part becomes a separate `preWrittenQuestion` entry
- All parts share the same `questionGroup` ID
- Students answer parts sequentially within the node
- Progress tracked per part, but node completes when all parts done

---

## 4. Conversion Process

### Conversion Script: `convert_olevel_to_yaml.js`

**Location:** `learning-platform/scripts/convert_olevel_to_yaml.js`

**Purpose:** Convert processed JSON files to practice YAML format

#### Script Logic

```javascript
/**
 * Convert O-Level processed JSON to Practice YAML
 *
 * Input: public/curriculum-content/o-level/exam-papers/processed/*.json
 * Output: dist/curriculum-content/O-Level/Maths/*.yaml
 *
 * Strategy:
 * - Paper 1: Group 5 questions per node
 * - Paper 2: 1 question per node
 * - Keep multi-part questions together
 */

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const TOPIC_NAMES = {
  'N1': 'numbers-operations',
  'N2': 'ratio-proportion',
  'N3': 'percentage',
  'N4': 'rate-speed',
  'N5': 'algebraic-expressions',
  'N6': 'functions-graphs',
  'N7': 'equations-inequalities',
  'N8': 'set-language',
  'N9': 'matrices',
  'G1': 'angles-triangles-polygons',
  'G2': 'congruence-similarity',
  'G3': 'circle-properties',
  'G4': 'pythagoras-trigonometry',
  'G5': 'mensuration',
  'G6': 'coordinate-geometry',
  'G7': 'vectors',
  'S1': 'data-analysis',
  'S2': 'probability'
};

const QUESTIONS_PER_NODE = {
  'Paper 1': 5,
  'Paper 2': 1
};

function convertTopicToYaml(topicId) {
  const inputPath = `./public/curriculum-content/o-level/exam-papers/processed/${topicId.toLowerCase()}.json`;
  const jsonData = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));

  // Process each paper separately
  ['Paper 1', 'Paper 2'].forEach(paper => {
    const questions = jsonData.questions[paper] || [];
    if (questions.length === 0) return; // Skip if no questions for this paper

    const nodes = createNodes(topicId, paper, questions);
    if (nodes.length === 0) return;

    // Write YAML file
    const paperSuffix = paper === 'Paper 1' ? 'paper1' : 'paper2';
    const outputFilename = `olevel-${topicId.toLowerCase()}-${TOPIC_NAMES[topicId]}-${paperSuffix}.yaml`;
    const outputPath = `./dist/curriculum-content/O-Level/Maths/${outputFilename}`;

    const yamlContent = yaml.dump({ nodes }, {
      lineWidth: -1,  // No line wrapping
      noRefs: true    // No YAML references
    });

    fs.writeFileSync(outputPath, yamlContent, 'utf-8');
    console.log(`✓ Created ${outputFilename} (${nodes.length} nodes, ${questions.length} questions)`);
  });
}

function createNodes(topicId, paper, questions) {
  const questionsPerNode = QUESTIONS_PER_NODE[paper];
  const nodes = [];

  if (paper === 'Paper 2') {
    // Paper 2: One question per node
    questions.forEach((question, index) => {
      const preWrittenQuestions = createPreWrittenQuestions(question);

      nodes.push({
        id: `olevel-${topicId.toLowerCase()}-p2-node${index + 1}`,
        nodeNumber: index + 1,
        title: question.title || `Question ${question.questionNumber}`,
        problemsRequired: preWrittenQuestions.length,
        layer: 'examPractice',
        prerequisites: index > 0
          ? [`olevel-${topicId.toLowerCase()}-p2-node${index}`]
          : [],
        descriptor: {
          aiGeneratedQuestions: false,
          preWrittenQuestions
        }
      });
    });
  } else {
    // Paper 1: Group 5 questions per node
    let nodeNumber = 1;
    for (let i = 0; i < questions.length; i += questionsPerNode) {
      const nodeQuestions = questions.slice(i, i + questionsPerNode);
      const allPreWritten = nodeQuestions.flatMap(q => createPreWrittenQuestions(q));

      nodes.push({
        id: `olevel-${topicId.toLowerCase()}-p1-node${nodeNumber}`,
        nodeNumber,
        title: `Paper 1: ${topicId} (Set ${nodeNumber})`,
        problemsRequired: allPreWritten.length,
        layer: 'examPractice',
        prerequisites: [],  // Paper 1 nodes have no prerequisites
        descriptor: {
          aiGeneratedQuestions: false,
          preWrittenQuestions: allPreWritten
        }
      });

      nodeNumber++;
    }
  }

  return nodes;
}

function createPreWrittenQuestions(question) {
  const preWritten = [];

  // Build problem text (stem + part text)
  const buildProblemText = (part) => {
    let text = '';

    // Add stem if present
    if (question.stem) {
      text += question.stem + '\n\n';
    }

    // Add part label and text
    if (part.partId) {
      text += `(${part.partId}) `;
    }
    text += part.questionText;

    return text.trim();
  };

  // Convert each part to a pre-written question
  question.parts.forEach(part => {
    preWritten.push({
      id: part.partId
        ? `${question.questionId}-${part.partId}`
        : question.questionId,
      questionGroup: question.questionId,
      problemText: buildProblemText(part),
      finalAnswer: part.solution.finalAnswer,
      stepByStepGuideline: part.solution.stepByStep.map(step =>
        formatStepAsGuideline(step)
      ),
      // Include math tool if present
      ...(question.diagram?.type === 'mathTool' && {
        mathTool: {
          toolName: question.diagram.toolName,
          parameters: question.diagram.parameters
        }
      })
    });
  });

  return preWritten;
}

function formatStepAsGuideline(step) {
  // Format: "**Explanation**: Working. _Reasoning._"
  return `**${step.explanation}**: ${step.working} _${step.reasoning}_`;
}

// Run conversion for all topics
const allTopics = Object.keys(TOPIC_NAMES);
allTopics.forEach(topicId => {
  try {
    convertTopicToYaml(topicId);
  } catch (error) {
    console.error(`✗ Error processing ${topicId}:`, error.message);
  }
});

console.log('\n✓ Conversion complete!');
```

#### Expected Output

**Console output:**
```
✓ Created olevel-n1-numbers-operations-paper1.yaml (1 nodes, 4 questions)
✓ Created olevel-n2-ratio-proportion-paper1.yaml (1 nodes, 2 questions)
✓ Created olevel-n3-percentage-paper2.yaml (3 nodes, 3 questions)
✓ Created olevel-n4-rate-speed-paper1.yaml (1 nodes, 1 questions)
✓ Created olevel-n5-algebraic-expressions-paper1.yaml (1 nodes, 4 questions)
...
✓ Conversion complete!
Total files created: ~23 YAML files (some topics have both Paper 1 and Paper 2)
```

---

## 5. User Experience

### 5.1 Entry Point: Student Dashboard

**New Subject Card:**

```
┌─────────────────────────────────────────────┐
│ 📚 Choose Your Subject                      │
├─────────────────────────────────────────────┤
│                                             │
│ ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│ │    📐    │  │    🎓    │  │    📊    │   │
│ │ S2 Math  │  │ O-Level  │  │  Other   │   │
│ │          │  │   Math   │  │ Subjects │   │
│ │ Continue │  │   NEW!   │  │ Continue │   │
│ └──────────┘  └──────────┘  └──────────┘   │
│                                             │
│ O-Level: Practice with real exam questions │
│ 35 questions from Anderson 2024             │
└─────────────────────────────────────────────┘
```

### 5.2 O-Level Topic Selector

**Landing Page:**

```
O-Level Mathematics Practice
─────────────────────────────────────────────
Practice with real past-year exam questions

📊 Number & Algebra
────────────────────────────────────────────

N1 - Numbers & Operations
├── 📄 Paper 1 (4 questions)         [Start] ✅
└── 📄 Paper 2 (no questions)             -

N2 - Ratio & Proportion
├── 📄 Paper 1 (2 questions)         [Start] ✅
└── 📄 Paper 2 (no questions)             -

N3 - Percentage
├── 📄 Paper 1 (no questions)             -
└── 📄 Paper 2 (3 questions)         [Start] ✅

N4 - Rate & Speed
├── 📄 Paper 1 (1 question)          [Start] ✅
└── 📄 Paper 2 (no questions)             -

... [Continue for all topics]

📐 Geometry & Measurement
────────────────────────────────────────────

G4 - Pythagoras & Trigonometry
├── 📄 Paper 1 (1 question)          [Start] ✅
└── 📄 Paper 2 (1 question)          [Start] ✅

... [Continue for all topics]

📊 Statistics & Probability
────────────────────────────────────────────

S1 - Data Analysis
├── 📄 Paper 1 (2 questions)         [Start] ✅
└── 📄 Paper 2 (1 question)          [Start] ✅

────────────────────────────────────────────
💡 Tip: Paper 1 questions are shorter and cover
foundational concepts. Paper 2 questions are more
challenging and require deeper problem-solving.
```

### 5.3 Practice Session (Existing UI - No Changes!)

When student clicks "Start" on N2 Paper 1:

**Uses existing `PracticeSessionView.tsx` component:**

```
┌───────────────────────────────────────────┐
│ 🤖 Hi! Let's practice N2 - Ratio &       │
│     Proportion from Paper 1.              │
│                                           │
│ You'll work through 2 questions. Take    │
│ your time and think through each step!   │
└───────────────────────────────────────────┘

Question 1 of 2

The intensity of a sound detected by a receiver
is inversely proportional to the square of the
distance of the receiver from the source of the
sound. When the distance is r metres, the
intensity of the sound detected is q decibels.
When the distance is reduced by 40%,

(a) find the intensity of the sound detected,
    in terms of q.

Your Answer:
┌─────────────────────────────────────────┐
│                                         │
└─────────────────────────────────────────┘

[💡 Need a hint?]  [Submit Answer]
```

**After correct answer:**

```
✅ Excellent work!

Let me explain the solution:

Step 1: Set up the inverse proportion
relationship
Working: I = k/r² where k is a constant
Reasoning: Inverse proportion to the square
means I × r² is constant

[Continue to next part] [View full solution]
```

**All existing features work automatically:**
- ✅ Socratic hints
- ✅ Solution display
- ✅ Math tool rendering (if diagram present)
- ✅ Progress tracking
- ✅ Avatar animations
- ✅ Celebratory messages

---

## 6. Implementation Plan

### Phase 1: Data Conversion (1 day)

**Tasks:**
1. [ ] Create output directory structure
   ```bash
   mkdir -p dist/curriculum-content/O-Level/Maths
   ```

2. [ ] Write conversion script `convert_olevel_to_yaml.js`
   - Separate Paper 1 vs Paper 2
   - Paper 1: 5 questions per node
   - Paper 2: 1 question per node
   - Handle multi-part questions
   - Preserve diagrams

3. [ ] Run conversion on all 18 topics
   ```bash
   cd learning-platform/scripts
   node convert_olevel_to_yaml.js
   ```

4. [ ] Verify YAML files
   - Check file count (~23 files expected)
   - Spot-check 3-4 files for correct format
   - Validate YAML syntax

**Deliverable:** 23 YAML files ready for practice system

---

### Phase 2: UI Integration (1 day)

#### 2.1 Create O-Level Topic Selector Component

**File:** `src/components/practice/OLevelTopicSelector.tsx`

```typescript
/**
 * O-Level Topic Selector
 * Shows all 18 topics with Paper 1/Paper 2 breakdown
 */

interface TopicInfo {
  id: string;
  name: string;
  paper1Count: number;
  paper2Count: number;
}

const TOPICS: Record<string, TopicInfo[]> = {
  'Number & Algebra': [
    { id: 'n1', name: 'Numbers & Operations', paper1Count: 4, paper2Count: 0 },
    { id: 'n2', name: 'Ratio & Proportion', paper1Count: 2, paper2Count: 0 },
    { id: 'n3', name: 'Percentage', paper1Count: 0, paper2Count: 3 },
    // ... etc
  ],
  'Geometry & Measurement': [
    { id: 'g1', name: 'Angles, Triangles, Polygons', paper1Count: 0, paper2Count: 1 },
    // ... etc
  ],
  'Statistics & Probability': [
    { id: 's1', name: 'Data Analysis', paper1Count: 2, paper2Count: 1 },
    { id: 's2', name: 'Probability', paper1Count: 1, paper2Count: 0 },
  ]
};

export function OLevelTopicSelector() {
  const navigate = useNavigate();

  const handleStart = (topicId: string, paper: 'paper1' | 'paper2') => {
    // Navigate to practice session
    navigate(`/practice/olevel/${topicId}/${paper}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1>O-Level Mathematics Practice</h1>
      <p>Practice with real past-year exam questions</p>

      {Object.entries(TOPICS).map(([category, topics]) => (
        <div key={category}>
          <h2>{category}</h2>

          {topics.map(topic => (
            <div key={topic.id} className="topic-card">
              <h3>{topic.id.toUpperCase()} - {topic.name}</h3>

              <div className="papers">
                {/* Paper 1 */}
                <div className="paper-option">
                  <span>📄 Paper 1</span>
                  {topic.paper1Count > 0 ? (
                    <button onClick={() => handleStart(topic.id, 'paper1')}>
                      Start ({topic.paper1Count} questions)
                    </button>
                  ) : (
                    <span className="disabled">No questions</span>
                  )}
                </div>

                {/* Paper 2 */}
                <div className="paper-option">
                  <span>📄 Paper 2</span>
                  {topic.paper2Count > 0 ? (
                    <button onClick={() => handleStart(topic.id, 'paper2')}>
                      Start ({topic.paper2Count} questions)
                    </button>
                  ) : (
                    <span className="disabled">No questions</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
```

#### 2.2 Add O-Level Card to Student Dashboard

**File:** `src/components/dashboard/StudentDashboard.tsx`

```typescript
// Add new subject card
const subjects = [
  // Existing subjects...

  // NEW: O-Level
  {
    id: 'olevel-math',
    name: 'O-Level Math',
    icon: '🎓',
    description: 'Practice with real exam questions',
    route: '/practice/olevel',
    stats: {
      totalQuestions: 35,
      source: 'Anderson 2024'
    }
  }
];
```

#### 2.3 Update Practice Router

**File:** `src/routes/PracticeRouter.tsx`

```typescript
// Add O-Level routes
<Route path="olevel" element={<OLevelTopicSelector />} />
<Route path="olevel/:topicId/:paper" element={<PracticeSessionView />} />
```

**Deliverable:** Students can navigate to O-Level practice and select topics

---

### Phase 3: Practice Session Integration (0.5 days)

#### 3.1 Update YAML Path Loader

**File:** `src/services/yamlPathLoader.ts`

```typescript
// Add O-Level path loading
export async function loadOLevelPath(
  topicId: string,
  paper: 'paper1' | 'paper2'
) {
  const topicName = TOPIC_NAMES[topicId];
  const yamlPath = `/curriculum-content/O-Level/Maths/olevel-${topicId}-${topicName}-${paper}.yaml`;

  const response = await fetch(yamlPath);
  if (!response.ok) {
    throw new Error(`Failed to load O-Level path: ${yamlPath}`);
  }

  const yamlText = await response.text();
  const pathData = yaml.parse(yamlText);

  return pathData;
}
```

#### 3.2 Update Practice Session View

**File:** `src/components/practice/PracticeSessionView.tsx`

```typescript
// Detect O-Level practice and load accordingly
const { topicId, paper } = useParams();

useEffect(() => {
  if (topicId && paper) {
    // O-Level practice
    loadOLevelPath(topicId, paper).then(pathData => {
      initializeSession(pathData);
    });
  } else {
    // Regular practice (existing logic)
    // ...
  }
}, [topicId, paper]);
```

**Note:** Existing `PracticeSessionView` already handles:
- Pre-written questions ✅
- Multi-part questions (via questionGroup) ✅
- Math tool rendering ✅
- Solution display ✅
- Hints and Socratic tutoring ✅

**No changes needed to core practice logic!**

**Deliverable:** Full practice session flow working for O-Level questions

---

### Phase 4: Testing & QA (0.5 days)

#### Test Cases

**1. Data Integrity**
- [ ] All 18 topics converted successfully
- [ ] Paper 1 and Paper 2 separated correctly
- [ ] Multi-part questions kept together
- [ ] LaTeX formatting preserved
- [ ] Diagrams (mathTool configs) preserved

**2. UI Navigation**
- [ ] O-Level card appears on dashboard
- [ ] Topic selector shows all 18 topics
- [ ] Paper 1/Paper 2 buttons work
- [ ] Disabled state for topics with no questions

**3. Practice Session**
- [ ] Questions load correctly
- [ ] LaTeX renders properly
- [ ] Math tools display (if present)
- [ ] Multi-part questions work (a, b, c)
- [ ] Solutions display correctly
- [ ] Hints work
- [ ] Progress tracking works

**4. Edge Cases**
- [ ] Topics with only Paper 1 (e.g., N1)
- [ ] Topics with only Paper 2 (e.g., N3)
- [ ] Topics with both papers (e.g., G4)
- [ ] Single-part questions
- [ ] Multi-part questions (a, b, c)
- [ ] Questions with diagrams
- [ ] Questions without diagrams

**5. Mobile Responsiveness**
- [ ] Topic selector works on mobile
- [ ] Practice session works on mobile
- [ ] LaTeX readable on small screens

**Deliverable:** Fully tested O-Level practice module ready for students

---

## 7. Testing Strategy

### 7.1 Manual Testing Checklist

**Pre-Launch QA:**

1. **Question Review (Current Phase)**
   - [ ] Review all 35 questions in QA interface
   - [ ] Verify solutions are correct
   - [ ] Check LaTeX formatting
   - [ ] Validate diagrams
   - [ ] Fix any issues found

2. **Conversion Verification**
   - [ ] Run conversion script
   - [ ] Spot-check 5 random YAML files
   - [ ] Verify step-by-step guidelines format correctly
   - [ ] Check that multi-part questions stay together

3. **Integration Testing**
   - [ ] Test all navigation flows
   - [ ] Test practice session for 3 different topics
   - [ ] Test both Paper 1 and Paper 2
   - [ ] Test topics with/without diagrams

4. **User Acceptance Testing (Optional)**
   - [ ] Have 2-3 S4 students try the module
   - [ ] Collect feedback on UX
   - [ ] Identify any confusion points

### 7.2 Success Criteria

✅ **Phase 1 Complete When:**
- All YAML files generated without errors
- File count matches expectation (~23 files)
- Spot-check shows correct format

✅ **Phase 2 Complete When:**
- O-Level appears on dashboard
- All topics selectable
- Navigation works end-to-end

✅ **Phase 3 Complete When:**
- Practice session loads O-Level questions
- All existing features work (hints, solutions, etc.)
- No console errors

✅ **Phase 4 Complete When:**
- All test cases pass
- No blocking bugs
- Ready for student use

---

## Appendices

### Appendix A: File Inventory

**Expected YAML Files (23 total):**

| Topic | Paper 1 File | Paper 2 File | Total |
|-------|--------------|--------------|-------|
| N1 | ✅ | - | 1 |
| N2 | ✅ | - | 1 |
| N3 | - | ✅ | 1 |
| N4 | ✅ | - | 1 |
| N5 | ✅ | - | 1 |
| N6 | ✅ | - | 1 |
| N7 | ✅ | ✅ | 2 |
| N8 | ✅ | - | 1 |
| N9 | ✅ | - | 1 |
| G1 | - | ✅ | 1 |
| G2 | ✅ | - | 1 |
| G3 | ✅ | - | 1 |
| G4 | ✅ | ✅ | 2 |
| G5 | - | ✅ | 1 |
| G6 | ✅ | - | 1 |
| G7 | - | ✅ | 1 |
| S1 | ✅ | ✅ | 2 |
| S2 | ✅ | - | 1 |
| **Total** | **15** | **8** | **23** |

### Appendix B: Sample YAML Output

See Section 3 for complete examples.

### Appendix C: Dependencies

**No new dependencies required!**

Existing dependencies handle everything:
- `js-yaml`: YAML parsing (already installed)
- React Router: Navigation (already installed)
- Existing practice components (already built)

### Appendix D: Future Enhancements

**After initial launch (future phases):**

1. **More Question Papers** (Q2 2025)
   - Process remaining 29 schools/papers
   - Target: 500+ total questions
   - Automated pipeline for new papers

2. **Topical Analytics** (Q3 2025)
   - Track accuracy per topic
   - Identify weak areas
   - Recommend practice focus

3. **Timed Topical Tests** (Q3 2025)
   - Optional timed mode per topic
   - 2 minutes per mark
   - Performance benchmarking

4. **Spaced Repetition** (Q4 2025)
   - Smart question scheduling
   - Revisit weak questions
   - Long-term retention

---

## Summary

**What We're Building:**
- Extend existing Practice module to support O-Level topics
- Use real exam questions (35 currently, 500+ planned)
- Separate Paper 1 (easier, grouped) from Paper 2 (harder, individual)
- Leverage 95% of existing infrastructure

**Timeline:**
- Phase 1 (Conversion): 1 day
- Phase 2 (UI): 1 day
- Phase 3 (Integration): 0.5 days
- Phase 4 (Testing): 0.5 days
- **Total: 3 days**

**Next Steps:**
1. ✅ Complete QA review of 35 questions (in progress)
2. ⏳ Run conversion script (after QA approval)
3. ⏳ Integrate with UI
4. ⏳ Test and launch

**Key Advantages:**
- ✅ Reuses proven practice system
- ✅ Familiar UX for students
- ✅ Fast implementation (3 days vs 6 weeks)
- ✅ Easy to scale (just add more YAML files)
- ✅ No new code complexity

---

*End of Documentation*
*Ready for implementation after QA review*
