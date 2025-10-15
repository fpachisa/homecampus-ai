# Agent Instruction Optimization Plan

## Problem Analysis

The evaluator currently passes verbose instructions to UI agents (Tutor, Question, Solution), leading to:
1. **Token bloat** in agent-to-agent communication
2. **Redundant context** already available in the question agent's prompt
3. **Large instruction objects** in evaluator output

## Current vs Optimized Instructions

### QuestionInstruction (Current - ~200-300 tokens)
```typescript
{
  targetSection: "triangle-labeling",
  targetConcept: "Identify hypotenuse in right triangles",
  difficulty: "foundational",
  focusObjectives: [  // ← Redundant! All section objectives
    "Identify the hypotenuse (longest side, opposite the right angle)",
    "Identify the opposite side (opposite to the angle being considered)",
    "Identify the adjacent side (next to the angle, but not the hypotenuse)",
    "Label sides correctly relative to any given angle in a right triangle"
  ],
  relevantFormulas: [],  // ← Already in section detail
  conceptGaps: ["Student confuses opposite and adjacent"],
  sampleProblems: [],  // ← Could be huge
  questionConstraints: {}
}
```

### QuestionInstruction (Optimized - ~50-80 tokens)
```typescript
{
  section: "triangle-labeling",  // Shorter field name
  focus: "Identify hypotenuse in right triangles",  // Merged targetConcept
  difficulty: "foundational",
  emphasis?: "Student confuses opposite and adjacent",  // Optional, concise
  variation?: "Use different triangle orientation"  // Optional constraint hint
}
```

**Token Savings:** 60-70% reduction

## Optimization Principles

1. **Trust the Question Agent's Context**
   - Question agent already receives section detail (objectives, formulas) via `resolveQuestionGeneration`
   - Don't duplicate this in the instruction

2. **Focus Over Lists**
   - Single `focus` string instead of array of objectives
   - Evaluator selects THE most important objective to test

3. **Optional Guidance**
   - Only include `emphasis` if student has specific gaps
   - Only include `variation` if constraint is needed

4. **Shorter Field Names**
   - `targetSection` → `section` (-6 chars per instruction)
   - `targetConcept` + `focusObjectives` → `focus` (merged)
   - `conceptGaps` → `emphasis` (clearer meaning)

## Implementation Steps

### 1. Create Optimized Type Definitions

```typescript
// src/prompt-library/types/agents.ts

export interface QuestionInstructionOptimized {
  section: string;              // Section ID
  focus: string;                // Primary objective to test
  difficulty: DifficultyLevel;  // Difficulty level
  emphasis?: string;            // Optional: What to emphasize (e.g., student gap)
  variation?: string;           // Optional: Problem variation hint
}

export interface TutorInstructionOptimized {
  focus: string;                // Concept to hint about
  error: string;                // What student did wrong
  strategy: 'nudge' | 'guide' | 'setup';  // Hint depth
  key?: string;                 // Optional: Key formula/definition to reference
}

export interface SolutionInstructionOptimized {
  problem: string;              // Problem text
  emphasis: string;             // What to focus explanation on
  depth: 'brief' | 'detailed';  // Explanation depth
  struggle?: string;            // Optional: Student's struggle point
}
```

### 2. Update Interaction Protocol

```typescript
// src/prompt-library/core/protocols/interaction.ts

export const INSTRUCTION_SCHEMAS_OPTIMIZED = {
  QuestionInstruction: {
    section: "string - section ID",
    focus: "string - specific objective to test",
    difficulty: "foundational | intermediate | advanced",
    emphasis: "string (optional) - what to emphasize based on student gaps",
    variation: "string (optional) - problem variation hint"
  },

  TutorInstruction: {
    focus: "string - concept to hint about",
    error: "string - what student did wrong",
    strategy: "nudge | guide | setup - hint depth",
    key: "string (optional) - key formula/definition to reference"
  },

  SolutionInstruction: {
    problem: "string - problem text",
    emphasis: "string - what to focus explanation on",
    depth: "brief | detailed - explanation depth",
    struggle: "string (optional) - student's specific struggle point"
  }
};
```

### 3. Update Evaluator Prompt

The evaluator should be instructed to:
- Generate CONCISE instructions
- Trust that UI agents have section context
- Only include optional fields when genuinely needed

```
INSTRUCTION GENERATION GUIDELINES:

When generating questionInstruction:
- The Question Agent already has access to section objectives and formulas
- Provide ONLY: section ID, focus (1 objective), difficulty
- Optional: emphasis (if student has gap), variation (if needed)

When generating tutorInstruction:
- Provide ONLY: focus concept, student error, strategy level
- Optional: key formula/definition (if directly relevant)

When generating solutionInstruction:
- Provide ONLY: problem text, emphasis, depth
- Optional: struggle point (if known)

DO NOT duplicate information already in agent context.
```

### 4. Update resolveQuestionGeneration

Question agent prompt should clarify that it already has context:

```typescript
resolveQuestionGeneration(context: PromptContext): string {
  const { subtopic } = this.getTopicConfig(context.topicId);
  const currentSectionDetail = this.getCurrentSectionDetail(context, subtopic);

  const builder = new PromptBuilder()
    .addRole(QUESTION_BASE.role)

    // Section context (already available)
    .addSection('SECTION CONTEXT', {
      title: currentSectionDetail.title,
      objectives: currentSectionDetail.objectives,
      formulas: currentSectionDetail.formulas
    })

    // Instruction from evaluator (CONCISE)
    .addSection('INSTRUCTION FROM EVALUATOR', context.questionInstruction || {})

    .addTask(`Generate a problem testing the focus objective.

      You have access to:
      - Full section objectives above
      - Relevant formulas above

      Use the instruction's 'focus' to select which objective to test.
      Use 'emphasis' to tailor the problem if provided.

      Do NOT expect all details in the instruction - reference section context.`);

  return builder.build();
}
```

## Expected Impact

### Token Savings Per Evaluator Call

| Instruction | Current | Optimized | Savings |
|-------------|---------|-----------|---------|
| QuestionInstruction | 200-300 | 50-80 | 70% |
| TutorInstruction | 150-200 | 40-60 | 70% |
| SolutionInstruction | 100-150 | 40-60 | 60% |

### Total Evaluator Output Reduction

- Evaluator output currently: ~400-600 tokens (with verbose instructions)
- Evaluator output optimized: ~150-250 tokens
- **Savings: ~60% in instruction objects**

### Cascading Benefits

1. **Faster Evaluator Response:** Smaller JSON output
2. **Clearer Evaluator Reasoning:** Less verbose, more focused
3. **Better Agent Separation:** Clear contracts, no duplication
4. **Scalability:** Adding more objectives doesn't bloat instructions

## Migration Path

1. ✅ Create optimized type definitions alongside existing ones
2. ✅ Update INSTRUCTION_SCHEMAS in interaction protocol
3. ✅ Modify evaluator prompt with concise instruction guidelines
4. ✅ Update UI agent prompts to clarify context availability
5. ✅ Test with sample evaluator responses
6. ⚠️ Gradually replace old types (breaking change - requires coordination)

## Testing Strategy

```typescript
// Test cases
const testScenarios = [
  {
    name: "First problem in section",
    expected: {
      section: "triangle-labeling",
      focus: "Identify hypotenuse",
      difficulty: "foundational"
      // No emphasis/variation needed
    }
  },
  {
    name: "Student has specific gap",
    expected: {
      section: "basic-ratios",
      focus: "Apply SOH-CAH-TOA",
      difficulty: "foundational",
      emphasis: "Student confuses sine and cosine"
    }
  },
  {
    name: "Need problem variation",
    expected: {
      section: "word-problems",
      focus: "Real-world ladder problem",
      difficulty: "advanced",
      variation: "Use different angle than previous"
    }
  }
];
```

## Conclusion

By trusting that UI agents have access to section context and eliminating redundant information, we can reduce instruction sizes by 60-70% without losing any pedagogical intelligence.

**Next Steps:**
1. Implement optimized type definitions
2. Update interaction protocol
3. Modify evaluator prompt with concise guidelines
4. Test and validate
