# P6 Algebra Learn Module - Implementation Plan

## Executive Summary

This document outlines the complete implementation plan for the P6 Algebra learn module, based on the Singapore Primary 6 Mathematics curriculum (pages 153-169 of P6-Algebra.pdf).

---

## 1. Content Analysis

### 1.1 PDF Structure Overview

The P6 Algebra curriculum covers three main sections:

| Section | Pages | Key Concepts |
|---------|-------|--------------|
| Algebraic Expressions | 153-159 | Variables, writing expressions with +, -, ×, ÷ |
| Simplifying & Evaluating | 160-165 | Like terms, combining terms, substitution |
| Solving Equations | 166-169 | One-step, multi-step, word problems |

### 1.2 Key Pedagogical Approach

The textbook uses **bar models** extensively as the primary visual tool:
- Bar models represent unknown quantities with variables
- Comparison bars show relationships between quantities
- Part-whole models help set up algebraic expressions and equations

---

## 2. Proposed Subtopic Structure (4 Subtopics)

### Subtopic 1: Writing Algebraic Expressions
**ID**: `p6-math-algebra-writing-expressions`

**Sections**:
| Section ID | Title | Difficulty | Focus |
|------------|-------|------------|-------|
| `intro-variables` | Understanding Variables | foundational | Using letters to represent unknowns |
| `addition-expressions` | Addition Expressions | foundational | n + 3, h + 3, k + 3 |
| `subtraction-expressions` | Subtraction Expressions | foundational-intermediate | p - 2, 12 - j |
| `multiplication-expressions` | Multiplication Expressions | intermediate | 8m, 5q, "coefficient × variable" notation |
| `division-expressions` | Division Expressions | intermediate | y/6, p/3, using fractions |

**Bar Model Usage**: Show unknown quantity + known quantity, part-whole relationships

---

### Subtopic 2: Simplifying Algebraic Expressions
**ID**: `p6-math-algebra-simplifying`

**Sections**:
| Section ID | Title | Difficulty | Focus |
|------------|-------|------------|-------|
| `like-terms-concept` | Understanding Like Terms | foundational | What are like terms? |
| `adding-like-terms` | Adding Like Terms | foundational-intermediate | 6y + 2y = 8y |
| `subtracting-like-terms` | Subtracting Like Terms | intermediate | 6y - 2y = 4y |
| `combining-mixed-terms` | Combining Terms with Constants | intermediate | 8y + 7, 6y + 2 + 2y + 5 |

**Visual Tools**:
- Bar models showing boxes of "y clips" being combined
- AlgebraExpressionVisualizer for term breakdown

---

### Subtopic 3: Evaluating Algebraic Expressions
**ID**: `p6-math-algebra-evaluating`

**Sections**:
| Section ID | Title | Difficulty | Focus |
|------------|-------|------------|-------|
| `substitution-basics` | Introduction to Substitution | foundational | Replace variable with number |
| `single-variable-eval` | Single Variable Expressions | foundational-intermediate | When y = 9, find 20 + y |
| `multi-term-eval` | Multi-term Expressions | intermediate | When x = 15, find 4x + 9 |
| `word-problems-eval` | Word Problem Evaluation | intermediate-advanced | Context-based evaluation |

**Examples from PDF**:
- Length of rod = (20 + y) cm; when y = 9, length = 29 cm
- Total cherries = 4x + 9; when x = 15, total = 69

---

### Subtopic 4: Solving Algebraic Equations
**ID**: `p6-math-algebra-solving`

**Sections**:
| Section ID | Title | Difficulty | Focus |
|------------|-------|------------|-------|
| `one-step-equations` | One-Step Equations | foundational-intermediate | j = 18 - 7 = 11 |
| `bar-model-equations` | Bar Models for Equations | intermediate | Setting up equations from diagrams |
| `multi-step-equations` | Multi-Step Equations | intermediate-advanced | 2k = 20 - 4, k = 16 ÷ 2 = 8 |
| `word-problems-solving` | Word Problems with Equations | advanced | Complex scenarios |

**Examples from PDF**:
- Siti bought j crayons, ended with 18. If she had 7, find j.
- Container had k buttons, doubled to 20 after adding k more + 4 green. Find k.

---

## 3. Math Tools Assessment

### 3.1 Existing Tools (SUFFICIENT - No new tools needed)

| Tool | Use Case in P6 Algebra | Priority |
|------|------------------------|----------|
| **BarModelVisualizer** | PRIMARY tool - bar models for all 4 subtopics | CRITICAL |
| **AlgebraExpressionVisualizer** | Term breakdown in Simplifying subtopic | HIGH |
| **BalanceScaleVisualizer** | Equation concept in Solving subtopic | MEDIUM |

### 3.2 BarModelVisualizer Capabilities Check

The existing BarModelVisualizer fully supports P6 Algebra needs:

| Requirement | Supported? | How |
|-------------|------------|-----|
| Variable in segment | ✅ | `value: "n"` or `value: "x"` |
| Unknown + constant | ✅ | `segments: [{value: "n"}, {value: "3"}]` |
| Total bracket | ✅ | `totalLabel: "?"` with `bracketPosition` |
| Comparison bracket | ✅ | `comparison: {value: "60", between: [0,1]}` |
| Multiple bars | ✅ | `bars: [...]` array |
| Group bracket | ✅ | `groupBracket: {value: "1500", bars: [0,1]}` |

**DECISION**: No new math tools required. Existing tools cover all needs.

---

## 4. Notes Files Structure

### 4.1 Directory Structure
```
src/notes/p6/math/algebra/
├── WritingExpressions.tsx
├── SimplifyingExpressions.tsx
├── EvaluatingExpressions.tsx
└── SolvingEquations.tsx
```

### 4.2 Notes Content Plan

#### WritingExpressions.tsx (~200-250 lines)
1. **Header**: Introduction to Algebraic Expressions
2. **Section 1**: What is a Variable? (cupcake box example from PDF p.154)
3. **Section 2**: Addition Expressions (n + 3, cookies example)
4. **Section 3**: Subtraction Expressions (p - 2, apples example)
5. **Section 4**: Multiplication Expressions (8m, shirts/buttons example)
6. **Section 5**: Division Expressions (y/6, sharing money example)
7. **Key Takeaways**

Each section includes:
- Concept explanation
- Bar model visualization (MathToolRenderer)
- Worked example
- Practice problem with expandable solution

#### SimplifyingExpressions.tsx (~200-250 lines)
1. **Header**: Simplifying Algebraic Expressions
2. **Section 1**: Like Terms (clips in boxes example)
3. **Section 2**: Adding Like Terms (6y + 2y = 8y)
4. **Section 3**: Subtracting Like Terms (6y - 2y = 4y)
5. **Section 4**: Combining with Constants (8y + 7)
6. **Key Takeaways**

#### EvaluatingExpressions.tsx (~180-220 lines)
1. **Header**: Evaluating Algebraic Expressions
2. **Section 1**: What is Substitution?
3. **Section 2**: Simple Substitution (stick/rod example)
4. **Section 3**: Multi-term Evaluation (cherries example)
5. **Section 4**: Money Problems (Lucas/Simon example)
6. **Key Takeaways**

#### SolvingEquations.tsx (~220-280 lines)
1. **Header**: Solving Algebraic Equations
2. **Section 1**: One-Step Equations (Siti crayons example)
3. **Section 2**: Bar Models for Equations (visual setup)
4. **Section 3**: Multi-Step Equations (buttons container example)
5. **Section 4**: Word Problems (table tennis/badminton example)
6. **Key Takeaways**

---

## 5. Configuration File Structure

**File**: `src/prompt-library/subjects/mathematics/primary/p6-algebra.ts`

**Estimated Size**: ~1800-2200 lines

### 5.1 Exports Required
```typescript
export type P6AlgebraTopicId =
  | 'p6-math-algebra-writing-expressions'
  | 'p6-math-algebra-simplifying'
  | 'p6-math-algebra-evaluating'
  | 'p6-math-algebra-solving';

export const P6_ALGEBRA_TUTOR_CUSTOMIZATION = { ... };
export const P6_ALGEBRA_MATH_TOOLS = ['barModel', 'algebraExpression', 'balanceScale'];
export const P6_ALGEBRA_SUBTOPICS = { ... };
export const P6_ALGEBRA_CONFIG = { ... };
```

### 5.2 Mastery Rubric Highlights

For each section, define specific 3-level rubrics:

**Example - Adding Like Terms**:
```typescript
masteryRubric: {
  mastery: {
    quantitative: ["3+ correct without hints", "Consistent accuracy"],
    qualitative: [
      "Identifies like terms correctly (same variable)",
      "Adds coefficients accurately",
      "Writes simplified form (e.g., 8y not y8)",
      "Can explain why terms can be combined"
    ]
  },
  developing: {
    quantitative: ["1-2 correct with hints"],
    qualitative: [
      "Recognizes like terms but makes calculation errors",
      "Sometimes forgets to simplify fully"
    ]
  },
  struggling: {
    quantitative: ["Multiple incorrect", "Needs full solutions"],
    qualitative: [
      "Tries to combine unlike terms (3x + 2y = 5xy) ← WRONG",
      "Adds both coefficient and variable (3x + 2x = 5xx) ← WRONG",
      "Does not understand what 'like terms' means"
    ]
  }
}
```

---

## 6. Platform Integration Checklist

### 6.1 Files to Update (10 files)

| # | File | Update Required |
|---|------|-----------------|
| 1 | `newPromptResolver.ts` | Import + register P6_ALGEBRA_SUBTOPICS |
| 2 | `HomePage.tsx` | Add topic card for P6 Algebra |
| 3 | `App.tsx` | Add P6AlgebraTopicId type |
| 4 | `LeftPanel.tsx` | Add category display + icons + config |
| 5 | `SubtopicWelcomeScreen.tsx` | Add category handling |
| 6 | `ChatInterface.tsx` | Add topic config lookup |
| 7 | `SectionProgressTracker.tsx` | Add section lookup |
| 8 | `subtopicContentLoader.ts` | Add subtopics to loader |
| 9 | `notesLoader.ts` | Register 4 notes components |
| 10 | `migrateAllConfigs.ts` | Add Firestore configs |

### 6.2 Firestore Documents (4 documents)

```
subtopics/
├── p6-math-algebra-writing-expressions
├── p6-math-algebra-simplifying
├── p6-math-algebra-evaluating
└── p6-math-algebra-solving
```

---

## 7. Initial Greetings

### 7.1 Greeting Samples

**Writing Expressions**:
```typescript
speech: {
  text: "Welcome to Algebra! Today we're going to learn something really cool. Imagine you have a box of cupcakes but you don't know how many are inside. Instead of guessing, we can use a letter like n to represent that unknown number! Let's explore how to write algebraic expressions.",
  emotion: 'warm'
},
display: {
  content: "Welcome to **Algebra**! Today we'll learn to use letters to represent unknown numbers.\n\nImagine a mystery box of cupcakes. We can call the unknown number **n**!"
}
```

**Simplifying Expressions**:
```typescript
speech: {
  text: "Great progress! Now let's learn how to simplify algebraic expressions. When you have terms with the same variable, like 3 y plus 2 y, you can combine them! It's like counting boxes of the same items together.",
  emotion: 'encouraging'
}
```

**Evaluating Expressions**:
```typescript
speech: {
  text: "You're doing amazing! Now let's learn substitution. This is where the magic happens. When someone tells you that y equals 5, you can replace y with 5 and calculate the actual answer!",
  emotion: 'encouraging'
}
```

**Solving Equations**:
```typescript
speech: {
  text: "You've mastered expressions! Now for the finale: solving equations. An equation is like a mystery where you need to find the value of the unknown. Bar models will be your best friend here!",
  emotion: 'supportive'
}
```

---

## 8. Visual Tool Usage Guide for AI

### 8.1 Bar Model Examples for P6 Algebra

**Addition Expression (n + 3)**:
```typescript
{
  toolName: 'barModel',
  parameters: {
    title: "Cupcakes in Box + On Plate",
    bars: [
      {
        label: "Total",
        segments: [
          { value: "n", units: 3 },
          { value: "3", units: 1 }
        ],
        totalLabel: "n + 3",
        bracketPosition: "top"
      }
    ],
    caption: "Unknown n cupcakes plus 3 known cupcakes"
  }
}
```

**Subtraction Expression (p - 2)**:
```typescript
{
  toolName: 'barModel',
  parameters: {
    title: "Buns in Bag",
    bars: [
      {
        label: "Original",
        segments: [
          { value: "p" }
        ],
        totalLabel: "p"
      },
      {
        label: "Left",
        segments: [
          { value: "?", units: 3 },
          { value: "2", units: 1, highlight: true }
        ],
        totalLabel: "p - 2"
      }
    ],
    caption: "Take away 2 from p buns"
  }
}
```

**Like Terms (6y + 2y)**:
```typescript
{
  toolName: 'barModel',
  parameters: {
    title: "Blue and Red Clips",
    bars: [
      { label: "Blue", segments: [{ value: "y", units: 6 }] },
      { label: "Red", segments: [{ value: "y", units: 2 }] }
    ],
    groupBracket: { value: "8y", bars: [0, 1] },
    showUnitDividers: true,
    caption: "6y + 2y = 8y clips altogether"
  }
}
```

**Equation Solving (2k + 4 = 20)**:
```typescript
{
  toolName: 'barModel',
  parameters: {
    title: "Yellow and Green Buttons",
    bars: [
      {
        label: "Total",
        segments: [
          { value: "k", units: 1 },
          { value: "k", units: 1 },
          { value: "4", units: 1, highlight: true }
        ],
        totalLabel: "20"
      }
    ],
    caption: "2k + 4 = 20, so 2k = 16, k = 8"
  }
}
```

---

## 9. Time Estimates

| Phase | Estimated Time |
|-------|----------------|
| Notes Creation (4 files) | 2.5-3 hours |
| Config File Creation | 1.5-2 hours |
| Platform Integration (10 files) | 45-60 min |
| Firestore Migration | 20-30 min |
| Initial Greetings | 15-20 min |
| Testing & QA | 30-45 min |
| **TOTAL** | **6-8 hours** |

---

## 10. Success Criteria

### 10.1 Pre-Launch Checklist

- [ ] `npm run build` succeeds with no errors
- [ ] Topic card appears on HomePage
- [ ] All 4 subtopics load without errors
- [ ] Notes display correctly in light AND dark modes
- [ ] Bar models render properly
- [ ] Initial greetings play
- [ ] Progress tracking works
- [ ] AI generates appropriate responses

### 10.2 Quality Metrics

- [ ] All mastery rubrics are specific and measurable
- [ ] Common misconceptions documented in "struggling" level
- [ ] Bar model examples match PDF pedagogy
- [ ] TTS speech is plain text (no LaTeX)

---

## 11. Implementation Order

1. **Create notes files** (highest visual value)
2. **Create config file** (enables AI tutoring)
3. **Update platform integrations** (makes it accessible)
4. **Add Firestore configs** (enables persistence)
5. **Add greetings** (polish)
6. **Test everything** (quality assurance)

---

## Appendix: PDF Reference Mapping

| PDF Page | Topic | Notes Section | Config Section |
|----------|-------|---------------|----------------|
| 153-154 | Intro to variables | WritingExpressions Sec 1 | intro-variables |
| 155 | Addition (n + 3) | WritingExpressions Sec 2 | addition-expressions |
| 155-156 | Subtraction (p - 2) | WritingExpressions Sec 3 | subtraction-expressions |
| 157 | Multiplication (8m) | WritingExpressions Sec 4 | multiplication-expressions |
| 158 | Division (y/6) | WritingExpressions Sec 5 | division-expressions |
| 160 | Like terms | SimplifyingExpressions Sec 1-2 | like-terms, adding-like-terms |
| 161-163 | Evaluation | EvaluatingExpressions | all sections |
| 166-169 | Equations | SolvingEquations | all sections |
