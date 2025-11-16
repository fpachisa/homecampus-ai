# O-Level Exam Practice Module - Implementation Plan

## Overview
Build a comprehensive exam practice system that:
1. **Extracts real O-Level exam questions** from PDF papers (temporary - deleted after extraction)
2. **Maps questions to curriculum topics** using the O-Level syllabus
3. **Uses real questions as AI templates** to generate unlimited similar questions
4. **Integrates with existing Practice Mode** (no separate exam mode needed)

**Key Insight**: Real exam questions serve as high-quality "seed questions" for AI generation, not for direct student use in exam simulation.

## Simplified Architecture

```
┌─────────────────┐
│  PDF Exam Paper │ (temporary - deleted after use)
└────────┬────────┘
         │ Gemini 2.5 Flash
         │ Extract + Map to Topics
         ▼
┌──────────────────────┐
│ Seed Question Bank   │ (organized by syllabus topic)
│ - Question text      │
│ - Solution           │
│ - Marking scheme     │
│ - Topic mapping      │
└────────┬─────────────┘
         │
         │ AI Generation
         ▼
┌──────────────────────┐
│ Generated Questions  │ (unlimited variations)
│ - Similar structure  │
│ - Different context  │
│ - Exam-realistic     │
└────────┬─────────────┘
         │
         ▼
┌──────────────────────┐
│ Existing Practice    │ (no changes needed!)
│ Mode                 │
└──────────────────────┘
```

**Benefits of This Approach**:
- ✅ No separate UI needed (reuse Practice Mode)
- ✅ Unlimited practice questions from limited seed questions
- ✅ Exam-realistic difficulty and structure
- ✅ Fast development (2-3 weeks vs 5-6 weeks)
- ✅ No legal issues (don't distribute actual exam papers)

---

## Phase 1: Question Schema & Database Structure

### 1.1 Define Zod Schema for Question Structure

**File**: `src/types/exam-questions.ts`

```typescript
import { z } from 'zod';

// Core question schema
export const ExamQuestionPartSchema = z.object({
  partId: z.string(), // e.g., "1a", "1b"
  questionText: z.string(), // LaTeX-enabled markdown
  marks: z.number(),
  answerType: z.enum(['numerical', 'algebraic', 'proof', 'drawing', 'mcq']),
  correctAnswer: z.string().optional(), // For auto-marking
  workingSolution: z.string(), // Full worked solution with LaTeX
});

export const ExamQuestionSchema = z.object({
  questionId: z.string(), // Unique ID: "2024_SA2_ACSI_P1_Q1"
  questionNumber: z.number(),

  // Source metadata
  source: z.object({
    paper: z.enum(['Paper1', 'Paper2']),
  }),

  // Question content
  stem: z.string().optional(), // Common context for multi-part questions
  diagrams: z.array(z.object({
    imageUrl: z.string(),
    caption: z.string().optional(),
    position: z.enum(['before', 'after', 'inline']),
  })).optional(),

  parts: z.array(ExamQuestionPartSchema),

  // Topic mapping
  topicMapping: z.object({
    primaryTopic: z.string(), // e.g., "N5" from syllabus
    secondaryTopics: z.array(z.string()).optional()
  }),

  // Timing and difficulty
  estimatedTimeMinutes: z.number(),
  totalMarks: z.number(),

  // Quality control
  verified: z.boolean().default(false),
  verifiedBy: z.string().optional(),
  extractionConfidence: z.number().min(0).max(1),
});

export const QuestionBankSchema = z.object({
  version: z.string(),
  lastUpdated: z.string(),
  questions: z.array(ExamQuestionSchema),
  metadata: z.object({
    totalQuestions: z.number(),
    topicDistribution: z.record(z.number()),
    sources: z.array(z.string()),
  }),
});

export type ExamQuestion = z.infer<typeof ExamQuestionSchema>;
export type ExamQuestionPart = z.infer<typeof ExamQuestionPartSchema>;
export type QuestionBank = z.infer<typeof QuestionBankSchema>;
```

### 1.2 Database Directory Structure

```
learning-platform/public/curriculum-content/o-level/
├── exam-questions/
│   ├── by-topic/
│   │   ├── N1-numbers-operations.json
│   │   ├── N5-algebraic-expressions.json
│   │   ├── N7-equations-inequalities.json
│   │   ├── G4-trigonometry.json
│   │   └── ... (one file per syllabus topic)
│   ├── diagrams/
│   │   ├── N1-q-001-diagram.png
│   │   ├── G4-q-045-diagram.png
│   │   └── ...
│   └── index.json (master index with metadata)
└── o-level-maths-syllabus.json (existing)

Note: Source PDFs are temporary and deleted after extraction
```

---

## Phase 2: PDF Extraction Script

### 2.1 Extraction Script Architecture

**File**: `scripts/extract-exam-questions.ts`

**Key Features**:
- Multimodal Gemini 2.5 Flash for PDF reading
- Page-by-page extraction with context retention
- Diagram extraction and storage
- LaTeX formula detection and preservation
- Confidence scoring for extraction quality

**Process Flow**:
```
1. Load PDF → Gemini 2.5 Flash (multimodal)
2. Extract per page with context:
   - Question numbers and parts
   - Text content (preserve LaTeX)
   - Diagrams (extract as images)
   - Answers/solutions if present
3. Structure into schema
4. Validate with Zod
5. Save to JSON + extract diagrams
6. Generate confidence scores
```

### 2.2 Gemini Extraction Prompt Template

**File**: `scripts/prompts/question-extraction-prompt.ts`

```typescript
export const QUESTION_EXTRACTION_PROMPT = `
You are an expert at extracting O-Level Mathematics exam questions from PDF pages.

Your task:
1. Extract ALL questions from the provided page(s)
2. Identify question numbers and parts (a, b, c, etc.)
3. Preserve mathematical notation using LaTeX (use single backslash: \\frac{1}{2})
4. Note diagram positions and descriptions
5. Extract mark allocations [X marks]
6. Identify answer types (numerical, algebraic, proof, etc.)

CRITICAL LaTeX RULES:
- Use ONE backslash in JSON: {"content": "Solve $\\frac{x}{2} = 5$"}
- Inline math: $...$
- Display math: $$...$$
- Common: \\frac{a}{b}, \\sqrt{x}, x^{2}, \\theta, \\pi, \\le, \\ge

Output ONLY valid JSON matching this schema:
{
  "questions": [
    {
      "questionNumber": 1,
      "stem": "Optional context for all parts",
      "hasDiagram": true,
      "diagramDescription": "Right triangle ABC with...",
      "parts": [
        {
          "partId": "1a",
          "questionText": "Calculate $\\sin\\theta$ when...",
          "marks": 2,
          "answerType": "numerical"
        }
      ],
      "totalMarks": 5
    }
  ],
  "extractionConfidence": 0.95
}

Be precise. Preserve all mathematical notation. Include ALL questions on the page.
`;
```

### 2.3 Implementation Script

**File**: `scripts/extract-exam-questions.ts`

```typescript
import { GoogleGenerativeAI } from '@google/generative-ai';
import { ExamQuestionSchema } from '../src/types/exam-questions';
import * as fs from 'fs';
import * as path from 'path';

interface ExtractionConfig {
  pdfPath: string;
  examMetadata: {
    year: number;
    examType: string;
    school: string;
    paper: string;
  };
  outputDir: string;
}

class QuestionExtractor {
  private genAI: GoogleGenerativeAI;

  constructor(apiKey: string) {
    this.genAI = new GoogleGenerativeAI(apiKey);
  }

  async extractFromPDF(config: ExtractionConfig) {
    // 1. Load PDF as base64 or use Gemini File API
    // 2. Send to Gemini with extraction prompt
    // 3. Parse JSON response
    // 4. Validate with Zod
    // 5. Extract diagrams
    // 6. Save structured output
  }

  async extractDiagrams(pdfPath: string, pageNumbers: number[]) {
    // Extract specific pages as images
    // Save to diagrams/ directory
    // Return image URLs
  }

  validateExtraction(data: unknown) {
    return ExamQuestionSchema.safeParse(data);
  }
}
```

### 2.4 Run Script Commands

Add to `package.json`:
```json
{
  "scripts": {
    "extract:questions": "tsx scripts/extract-exam-questions.ts",
    "extract:single": "tsx scripts/extract-exam-questions.ts --pdf=<path>",
    "validate:questions": "tsx scripts/validate-question-bank.ts"
  }
}
```

---

## Phase 3: Topic Mapping System

### 3.1 Intelligent Topic Mapper

**File**: `scripts/map-questions-to-topics.ts`

**Approach**: Use Gemini to analyze question content and map to syllabus topics

**Mapping Prompt**:
```typescript
export const TOPIC_MAPPING_PROMPT = `
You are an expert O-Level Mathematics curriculum analyst.

Given:
1. O-Level Maths Syllabus (provided)
2. Exam question content

Task: Map the question to syllabus topics

Analyze:
- Mathematical concepts required
- Skills needed (e.g., factorization, trigonometry)
- Topic codes (N1-N9, G1-G7, S1-S2)
- Primary vs secondary topics
- Difficulty level

Output JSON:
{
  "primaryTopic": "N7",
  "primaryTopicName": "Equations and inequalities",
  "secondaryTopics": ["N5"],
  "skillsRequired": ["quadratic factorization", "solving equations"],
  "difficultyLevel": "intermediate",
  "reasoning": "Question requires solving quadratic equations by factorization..."
}
`;
```

### 3.2 Topic Mapping Workflow

```
1. Load syllabus JSON
2. For each extracted question:
   a. Send question + syllabus to Gemini
   b. Get topic mapping
   c. Validate against syllabus topic codes
   d. Add to question metadata
3. Generate topic distribution report
4. Flag unmapped or ambiguous questions for manual review
```

### 3.3 Manual Review Interface (Optional CLI)

**File**: `scripts/review-topic-mappings.ts`

Simple CLI tool for reviewing and adjusting topic mappings:
- Show question
- Show AI-suggested mapping
- Allow override
- Save corrections

---

## Phase 4: Question Database Creation & Validation

### 4.1 Database Builder

**File**: `scripts/build-question-database.ts`

Consolidates extracted questions into organized database:

```typescript
class QuestionDatabaseBuilder {
  async build() {
    // 1. Load all extracted question files
    // 2. Validate each with Zod
    // 3. Group by topic
    // 4. Group by exam
    // 5. Generate index.json
    // 6. Calculate metadata (counts, distributions)
    // 7. Write organized files
  }

  async generateIndex() {
    // Create master index with:
    // - Total questions
    // - Topic distribution
    // - Difficulty distribution
    // - Source exams list
  }
}
```

### 4.2 Validation Script

**File**: `scripts/validate-question-bank.ts`

Quality checks:
- Schema validation (Zod)
- LaTeX syntax validation (try rendering)
- Image reference validation (files exist)
- Topic code validation (match syllabus)
- Duplicate detection
- Completeness checks (all fields populated)

### 4.3 Quality Metrics

Generate report:
- Extraction confidence distribution
- Questions per topic
- Questions per difficulty level
- Questions needing manual review
- Missing solutions/marking schemes

---

## Phase 5: Integration with Practice Mode

### 5.1 Unified Practice Mode Enhancement

**No separate exam mode needed!** Instead, enhance existing Practice Mode to support exam-based questions:

| Aspect | AI-Generated Questions (Current) | Exam-Based Questions (New) |
|--------|----------------------------------|----------------------------|
| Source | AI generates from topic descriptors | AI generates from real exam question templates |
| Quality | Good, but variable | High quality, exam-realistic |
| Variety | Unlimited contexts | Contexts based on real exam patterns |
| Difficulty | Calibrated by section | Realistic exam difficulty |
| Solution | AI-generated walkthrough | Based on official marking schemes |

### 5.2 Enhanced Question Generation Service

**File**: `src/services/examQuestionGenerationService.ts`

```typescript
export class ExamQuestionGenerationService {
  /**
   * Generate a new question based on an exam seed question
   * @param seedQuestion - Real exam question used as template
   * @param variationLevel - 'similar' | 'moderate' | 'different'
   * @returns AI-generated question following same pattern
   */
  async generateFromSeed(
    seedQuestion: ExamSeedQuestion,
    variationLevel: VariationLevel
  ): Promise<GeneratedQuestion>

  /**
   * Load seed questions for a topic
   */
  async getSeedQuestionsByTopic(topicId: string): Promise<ExamSeedQuestion[]>
}
```

**Generation Prompt Strategy**:
```typescript
const EXAM_QUESTION_GENERATION_PROMPT = `
You are generating O-Level Mathematics practice questions based on real exam questions.

SEED QUESTION:
{seedQuestion}

TOPIC: {topicName}
SKILLS REQUIRED: {skillsList}
DIFFICULTY: {difficultyLevel}

Generate a NEW question that:
1. Tests the SAME mathematical concepts
2. Uses a DIFFERENT context (if applicable)
3. Maintains similar difficulty level
4. Follows O-Level exam standards
5. Includes worked solution and marking scheme

Variation Level: {variationLevel}
- similar: Change numbers/names, keep structure identical
- moderate: Change context, vary numbers significantly
- different: New context, different approach, same concepts

Output JSON with question, solution, and marking points.
`;
```

### 5.3 Integration Points with Existing Practice Mode

**No new UI needed!** Reuse existing components:
- `PracticeSessionView` - Already handles questions with LaTeX
- `InteractivePathView` - Already manages progression
- Existing agents (Evaluator, Tutor, Question, Solution) - Work as-is

**Only change**: Question source
```typescript
// Current: AI generates from topic descriptors
const question = await questionAgent.generateQuestion(topicDescriptor);

// New: AI generates from exam seed question
const seedQuestion = await getSeedQuestion(topicId);
const question = await questionAgent.generateFromSeed(seedQuestion);
```

### 5.4 Updated Path Configuration

Extend existing YAML path structure to support exam-based generation:

```yaml
path:
  id: o-level-math-exam-prep
  topics:
    - topicId: quadratic-equations
      descriptor:
        # Option 1: Traditional AI generation
        problemDescription: ["Solve quadratic equations..."]

        # Option 2: Exam-based generation (NEW)
        useExamSeeds: true
        seedQuestionPool: "exam-seed-questions/by-topic/N7-equations-inequalities.json"
        variationLevel: moderate
```


---

## Implementation Timeline (REVISED - Simplified)

### Sprint 1: Foundation (3-4 days)
- [ ] Define Zod schemas for seed questions
- [ ] Set up database structure (exam-seed-questions/)
- [ ] Build basic extraction script
- [ ] Test with 2-3 questions from PDF

### Sprint 2: Extraction & Mapping (4-5 days)
- [ ] Refine extraction prompts
- [ ] Implement diagram extraction
- [ ] Build topic mapping system
- [ ] Extract full Paper 1 (25 questions)
- [ ] Extract full Paper 2
- [ ] Delete source PDFs after extraction

### Sprint 3: Database & Validation (2-3 days)
- [ ] Build database builder (organize by topic)
- [ ] Create validation scripts
- [ ] Generate quality metrics
- [ ] Manual review and corrections

### Sprint 4: AI Question Generation (3-4 days)
- [ ] Build ExamQuestionGenerationService
- [ ] Create generation prompts (similar/moderate/different)
- [ ] Test generation from 5-10 seed questions
- [ ] Validate generated questions quality

### Sprint 5: Integration with Practice Mode (2-3 days)
- [ ] Extend Question Agent to support seed-based generation
- [ ] Update YAML path configuration schema
- [ ] Create O-Level exam prep path
- [ ] Test end-to-end flow

### Sprint 6: Testing & Refinement (2-3 days)
- [ ] Test question generation quality
- [ ] Validate LaTeX rendering
- [ ] Test evaluation accuracy
- [ ] Polish and bug fixes

**Total Estimated Time**: 2.5-3 weeks (much faster!)

---

## Success Metrics

### Quality Metrics
- Extraction accuracy > 95%
- LaTeX rendering success > 98%
- Topic mapping accuracy > 90%
- Diagram extraction success > 85%

### User Metrics
- Average session completion rate
- Questions attempted per session
- Improvement in scores over time
- User satisfaction (NPS)

### Coverage Metrics
- Questions per topic > 20
- Full papers available > 10
- Difficulty distribution (balanced)
- Exam years covered > 3

---

## Risk Mitigation

### Risk 1: PDF Extraction Accuracy
**Mitigation**:
- Manual review process
- Confidence scoring
- Validation scripts
- Fallback to manual entry for low-confidence extractions

### Risk 2: LaTeX Formatting Issues
**Mitigation**:
- Clear formatting rules in extraction prompt
- Validation scripts that test rendering
- Manual correction workflow
- Test suite with complex LaTeX examples

### Risk 3: Topic Mapping Errors
**Mitigation**:
- AI + manual review hybrid
- Clear syllabus mapping guidelines
- Review interface for corrections
- Analytics to identify misclassified questions

### Risk 4: Diagram Quality
**Mitigation**:
- High-resolution extraction
- Manual review for critical diagrams
- Redraw option for poor quality
- Fallback to text descriptions

---

## Future Enhancements

### Phase 2 Features (Post-MVP)
- **More Seed Questions**: Extract from 20+ past papers across multiple years
- **Adaptive Variation**: AI chooses variation level based on student performance
- **Multi-Step Questions**: Better handling of complex multi-part exam questions
- **Visual Question Generation**: Generate questions with diagrams
- **Answer Validation**: More sophisticated checking for algebraic equivalence
- **Marking Rubrics**: Partial credit for showing working

### Content Expansion
- **A-Level Mathematics**: Similar extraction and generation pipeline
- **O-Level Additional Mathematics**: Separate seed question bank
- **Other O-Level Subjects**: Physics, Chemistry (using same architecture)
- **International Boards**: IGCSE, IB (different syllabus mappings)

---

## Technical Debt & Maintenance

### Regular Maintenance Tasks
- Update question bank with new past papers (quarterly)
- Review and improve topic mappings
- Update marking schemes based on official answers
- Refresh analytics and grade boundaries
- Performance optimization based on usage patterns

### Code Quality
- TypeScript strict mode
- Comprehensive test coverage (>80%)
- Documentation for all services and components
- Zod schema versioning
- Database migration scripts

---

## Next Steps

1. **Review and approve this plan**
2. **Set up development environment**
3. **Start with Sprint 1: Foundation**
4. **Weekly check-ins on progress**
5. **Iterate based on early testing feedback**

---

**Document Version**: 1.0
**Created**: 2025-01-16
**Last Updated**: 2025-01-16
**Owner**: AI Campus Development Team
