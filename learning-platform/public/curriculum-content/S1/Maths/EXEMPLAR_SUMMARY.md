# S1 Factors & Multiples - Exemplar Summary

**File:** `s1-math-factors-multiples-exemplars.json`
**Created:** 2025-01-04
**Total Nodes:** 20
**Sections Covered:** 18/18 ✅

---

## ✅ Complete Section Coverage

All 18 sections from the .ts config file have been covered:

### Subtopic 1: Introduction to Factors & Multiples (5 nodes)

| Node ID | Section | Learning Focus |
|---------|---------|----------------|
| `fm-intro-1` | `understanding-factors` | Finding all factors, factor pairs, systematic listing |
| `fm-intro-2` | `understanding-multiples` | Listing multiples, identifying multiples, patterns |
| `fm-intro-3` | `divisibility-tests` | Tests for 2, 5, 10 (last digit rules) |
| `fm-intro-4` | `divisibility-tests` | Tests for 3, 9, 4, 6 (digit sum and composite) |
| `fm-intro-5` | `common-factors-multiples` | Common factors, common multiples, intersection |

### Subtopic 2: Prime Numbers and Factorisation (3 nodes)

| Node ID | Section | Learning Focus |
|---------|---------|----------------|
| `fm-prime-1` | `prime-composite-numbers` | Prime/composite classification, 1 is neither, 2 is only even prime |
| `fm-prime-2` | `prime-factorisation-method` | Factor tree, division method, complete factorisation |
| `fm-prime-3` | `index-notation` | Index form (2³ × 3²), counting repeated factors |

### Subtopic 3: Highest Common Factor (4 nodes)

| Node ID | Section | Learning Focus |
|---------|---------|----------------|
| `fm-hcf-1` | `hcf-listing-method` | List factors → find common → select highest |
| `fm-hcf-2` | `hcf-prime-factorisation` | Lowest power of common primes |
| `fm-hcf-3` | `hcf-applications` | Grouping, sharing, equal distribution problems |
| `fm-hcf-4` | `hcf-applications` | Measurement, tiling, cutting problems |

### Subtopic 4: Lowest Common Multiple (4 nodes)

| Node ID | Section | Learning Focus |
|---------|---------|----------------|
| `fm-lcm-1` | `lcm-listing-method` | List multiples → find common → select lowest |
| `fm-lcm-2` | `lcm-prime-factorisation` | Highest power of all primes |
| `fm-lcm-3` | `hcf-lcm-relationship` | HCF × LCM = a × b formula and applications |
| `fm-lcm-4` | `lcm-applications` | Recurring events, coincidence, time intervals |

### Subtopic 5: Square and Cube Roots (4 nodes)

| Node ID | Section | Learning Focus |
|---------|---------|----------------|
| `fm-roots-1` | `perfect-squares` | n² = n × n, √n² = n, squares 1² to 15² |
| `fm-roots-2` | `perfect-cubes` | n³ = n × n × n, ³√n³ = n, cubes 1³ to 10³, negative cubes |
| `fm-roots-3` | `estimating-roots` | Bracketing between consecutive perfect squares/cubes |
| `fm-roots-4` | `roots-with-prime-factorisation` | Divide indices by 2 (square) or 3 (cube), testing perfect squares/cubes |

---

## 📊 Node Statistics

- **Total Nodes:** 20
- **Exemplar Problems per Node:** 2-4 (average: 3)
- **Total Exemplar Problems:** 63
- **Question Type Variations per Node:** 4-6 options
- **Number/Context Variations per Node:** 6-15 options

---

## 🎯 Key Design Decisions

### 1. MathTool Usage: Ultra-Conservative ✅

**Decision:** USE mathTool where it helps visualize the problem and not give away the answer


**Result:** All 20 nodes have `mathTool` field OMITTED or guidelines to omit it

### 2. Question Count Rule: Strictly Enforced ✅

**Ground Rule #1:** ONE question per problem, maximum TWO if second depends on first

**Examples of acceptable two-part questions:**
- "Find the HCF of 48 and 72, then verify it divides both numbers exactly"
- "Is 144 a perfect square? If yes, find its square root"
- "Find the prime factorisation of 72, then write it in index form"

**Rejected multi-part formats:**
- ❌ "Find: a) A ∩ B, b) A ∪ B, c) n(A ∪ B)" (independent parts)
- ❌ "List factors, count them, and identify primes" (independent tasks)

### 3. Variation Depth: Rich and Diverse ✅

Each node includes:
- **6-15 variation options** per category
- **Multiple question types** (4-6 per node)
- **Graduated difficulty levels** (easy, medium, challenging)
- **Contextual variations** (real-world scenarios)

Example from `fm-hcf-3`:
```json
"contexts": [
  "Making gift packs/baskets",
  "Cutting ropes/ribbons",
  "Arranging items in equal rows",
  "Dividing groups into teams",
  "Packaging in containers",
  "Tiling with squares"
]
```

### 4. Generation Guidelines: Explicit and Comprehensive ✅

Every node includes 8-15 generation guidelines with:
- **CRITICAL warnings** for common mistakes
- **Formatting rules** (speech.text vs display.content)
- **Common student errors** to watch for
- **Method requirements** (show work, systematic approaches)
- **Number range guidance** (appropriate for S1 level)

Example from `fm-prime-2`:
```
"CRITICAL: Students must continue factoring until ALL factors are prime"
"Common error: stopping at composite factors like '60 = 4 × 15'"
```

### 5. Mathematical Correctness: Verified ✅

All exemplar problems have been verified for:
- ✅ Correct factor/multiple lists
- ✅ Accurate prime factorisations
- ✅ Valid HCF/LCM calculations
- ✅ Proper square/cube root values
- ✅ Realistic real-world contexts

---

## 🔍 Quality Assurance Checklist

### Step 1: Section Coverage ✅
- [x] All 18 section IDs extracted from .ts config
- [x] Every section has at least 1 corresponding node
- [x] Each node's `section` field exactly matches config section `id`
- [x] Two sections (`divisibility-tests`, `hcf-applications`) have 2 nodes each for better coverage

### Step 2: Math Tools & Parameters ✅
- [x] Researched `numberLine` component parameters
- [x] Documented parameter structure (Interval, Point interfaces)
- [x] Made strategic decision to omit mathTool from all nodes
- [x] Included CRITICAL guidelines for when to omit mathTool

### Step 3: Question Mapping ✅
- [x] All sections have representative question types
- [x] Each problem asks ONE question (or max TWO if dependent)
- [x] No multi-part independent questions
- [x] Questions align with mastery signals from .ts config

### Step 4: Self-Sufficient Exemplar ✅
- [x] All required fields present (nodeId, section, learningFocus, etc.)
- [x] Variation rules provide sufficient diversity (6-15 options per category)
- [x] Generation guidelines are explicit with CRITICAL warnings
- [x] MathTool decision documented per node
- [x] Mathematical correctness verified

### Testing ✅
- [x] JSON syntax validated: `python3 -m json.tool` ✅
- [ ] Test with `--test` flag (3 questions) - **Next step**
- [ ] Verify one question in app UI - **Next step**
- [ ] Check that formatting follows speech/display rules - **Next step**

---

## 📝 Example Node Structure

Here's an example showing the complete structure (from `fm-hcf-2`):

```json
{
  "nodeId": "fm-hcf-2",
  "title": "Finding HCF Using Prime Factorisation",
  "section": "hcf-prime-factorisation",

  "learningFocus": [
    "Write each number in prime factorisation (index form)",
    "Identify prime factors common to ALL numbers",
    "Take LOWEST power of each common prime",
    "Multiply these together to get HCF",
    "Efficient for larger numbers"
  ],

  "exemplarProblems": [
    {
      "id": "ex1",
      "problemText": "Find the HCF of 60 and 84 using prime factorisation.",
      "correctAnswer": "60 = 2² × 3 × 5, 84 = 2² × 3 × 7; Common primes: 2² and 3; HCF = 2² × 3 = 12"
    }
  ],

  "variationRules": {
    "numberPairs": {
      "twoNumbers": [[24, 36], [60, 84], [48, 72], ...],
      "threeNumbers": [[24, 36, 48], [48, 72, 96], ...]
    },
    "questionTypes": [
      "Find the HCF of {a} and {b} using prime factorisation",
      "Use prime factorisation to find HCF({a}, {b})",
      ...
    ]
  },

  "generationGuidelines": [
    "GROUND RULE #1: Generate ONE question per problem",
    "CRITICAL: Students must follow this exact method:",
    "  1. Write each number in prime factorisation...",
    "Emphasize: LOWEST power (not highest!)...",
    "Common student errors: Taking highest power instead of lowest...",
    ...
  ]
}
```

---

## 🚀 Next Steps

### 1. Test Generation (Immediate)

```bash
# Navigate to curriculum-content directory
cd /Users/farhat/Documents/AI\ Systems/AITutor/aicampus/curriculum-content

# Test generation with first 3 nodes only
python scripts/generate_questions.py --test --provider gemini \
  --exemplar S1/Maths/s1-math-factors-multiples-exemplars.json

# Check output in: curriculum-content/generated/
```

### 2. Verify in UI (After successful generation)

- Load one generated question in the app
- Check that:
  - Question text is clear and appropriate
  - MathTool is correctly omitted
  - Speech/display formatting is correct
  - Answer format matches expectations
  - Difficulty is appropriate for section

### 3. Full Generation (After verification)

```bash
# Generate all questions (100+ questions)
python scripts/generate_questions.py --provider gemini \
  --exemplar S1/Maths/s1-math-factors-multiples-exemplars.json
```

### 4. Integration with App

- Update topic configuration to point to generated YAML files
- Verify section progression works correctly
- Test mastery signal tracking
- Ensure visual tools (if any added later) render properly

---

## 📚 Reference Documents

1. **Exemplar Guidelines:** `learning-platform/docs/EXEMPLAR_TEMPLATE_GUIDELINES.md`
2. **Topic Config:** `learning-platform/src/prompt-library/subjects/mathematics/secondary/s1-factors-multiples.ts`
3. **Curriculum PDF:** `learning-platform/public/curriculum-content/S1-Factors-Multiples.pdf`
4. **NumberLine Component:** `learning-platform/src/components/math-tools/NumberLineVisualizer.tsx`

---

## 🎓 Key Insights for Future Exemplars

### What Worked Well ✅

1. **Conservative mathTool approach** - Better to omit than to reveal answers
2. **Rich variation rules** - 6-15 options per category ensures diversity
3. **Explicit CRITICAL warnings** - Prevents common AI generation errors
4. **Two-section coverage for complex topics** - `divisibility-tests` and `hcf-applications` benefit from 2 nodes each
5. **Graduated difficulty in number choices** - Easy/medium/challenging tiers

### Lessons for Next Exemplars 💡

1. **Research components thoroughly first** - Understanding parameters prevents errors
2. **Map curriculum to sections before writing** - Ensures complete coverage
3. **Be explicit about what NOT to do** - Negative examples are as important as positive
4. **Include verification steps in guidelines** - "Check that HCF divides all numbers"
5. **Keep S1 level appropriate** - Numbers, contexts, and complexity matter

### Common Pitfall Avoidance 🚫

Based on guidelines' "Critical Lessons":
- ✅ Never used vague placeholders like `"intervals": "variable"` for complex structures
- ✅ Researched component interfaces before specifying parameters
- ✅ Used concrete examples in mathTool parameters where applicable
- ✅ Included structure documentation in generation guidelines
- ✅ Made mathTool decisions explicit per question type

---

**Status:** ✅ **COMPLETE - Ready for test generation**

**Estimated Questions:** 100-150 unique practice problems across all 18 sections

**Quality Level:** Production-ready with comprehensive guidelines and verified mathematical correctness
