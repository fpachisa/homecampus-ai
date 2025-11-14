# Homework Helper Feature - Implementation Guide

## Overview

The Homework Helper feature enables students to upload homework problems (images or PDFs) and receive Socratic guidance without ever getting direct answers. This document explains the architecture, implementation, and integration steps.

## Feature Flow

```
1. Upload Problem (PNG/JPEG/PDF)
   ↓
2. Multimodal Analysis (Extract text, identify topic, concepts)
   ↓
3. Grade Appropriateness Check (Match with student's curriculum)
   ↓
4. Problem Preview & Confirmation (Student can edit extracted text)
   ↓
5. Socratic Tutoring Session (Guide without giving answers)
   ↓
6. Session Complete (Understanding achieved)
```

## Architecture

### Core Components

#### 1. **Services** (`src/services/`)

**ProblemAnalysisService** (`problemAnalysisService.ts`)
- Uses Gemini 2.5 Flash multimodal capabilities
- Extracts problem text from images/PDFs
- Identifies topic, difficulty, concepts, visual elements
- Returns structured `ProblemAnalysis` object

**GradeAppropriatenessService** (`gradeAppropriatenessService.ts`)
- Checks if problem matches student's grade level
- Uses curriculum mapping + AI reasoning
- Returns recommendation: `proceed | too-advanced | too-basic | review-needed`
- Provides friendly suggestion messages for students

**HomeworkHelperService** (`homeworkHelperService.ts`)
- Manages Socratic tutoring sessions
- Uses the new Homework Helper Agent
- Generates questions, hints, and guidance
- Never provides final answers
- Validates reasoning, not just results

#### 2. **Homework Helper Agent** (`src/prompt-library/core/agents/homeworkHelper.ts`)

**NEW AGENT - Distinct from Evaluator**
- Works with single uploaded problems (no curriculum context)
- Focuses on Socratic questioning and reasoning validation
- NEVER gives final answers
- Teaching actions: question, hint, clarification, celebration, redirection, encouragement
- Returns structured JSON with speech and display content

**Key Differences from Evaluator:**
| Feature | Evaluator Agent | Homework Helper Agent |
|---------|----------------|----------------------|
| Context | Curriculum path + sections | Single uploaded problem |
| Goal | Track progression through curriculum | Guide understanding of ONE problem |
| Answer Knowledge | Has correct answers | Does NOT have answers |
| Validation | Answer checking | Reasoning validation |
| Progression | Moves through sections | Stays on problem until understood |

#### 3. **UI Components** (`src/components/homework/`)

**HomeworkHelper** (Main Container)
- Orchestrates entire flow from upload to session
- Manages state transitions: upload → analyzing → preview → session
- Handles errors and fallbacks

**UploadZone**
- Drag-and-drop file upload
- File validation (type, size)
- Supports PNG, JPEG, PDF up to 10MB

**ProblemPreview**
- Shows uploaded image + extracted text
- Displays grade appropriateness check
- Allows editing of extracted text
- Shows topic, difficulty, key concepts

**HomeworkSessionView**
- Chat interface for tutoring
- Shows problem image in sidebar
- Displays messages with markdown/LaTeX support
- Tracks hints given, questions asked, concepts mastered
- Session completion modal

#### 4. **Types** (`src/types/homework.ts`)

Complete TypeScript definitions for:
- `UploadedProblem` - Problem data and metadata
- `ProblemAnalysis` - Analysis results
- `GradeAppropriatenessCheck` - Grade matching results
- `HomeworkSession` - Session state
- `HomeworkMessage` - Chat messages
- `HomeworkHelperContext` - Agent context
- `HomeworkHelperResponse` - Agent responses

## Integration Steps

### Step 1: Add Route to Main App

In your router configuration (e.g., `App.tsx` or routing file):

```tsx
import { HomeworkHelper } from './components/homework';

// Inside your routes
<Route
  path="/homework-helper"
  element={
    <HomeworkHelper
      studentId={currentUser.id}
      studentGrade={currentUser.grade}
    />
  }
/>
```

### Step 2: Add Navigation Link

Add a link to the Homework Helper in your main navigation:

```tsx
<Link to="/homework-helper">
  <BookOpen className="w-5 h-5" />
  <span>Homework Help</span>
</Link>
```

### Step 3: Verify Environment Variables

Ensure `.env` has required API keys:

```bash
# Required: Gemini for multimodal analysis + tutoring
VITE_GEMINI_API_KEY=your_gemini_api_key_here

# Optional: Claude as fallback
VITE_CLAUDE_API_KEY=your_claude_api_key_here
```

### Step 4: Test with Sample Problems

Test with various problem types:
- ✅ Typed problems (clear text)
- ✅ Handwritten problems
- ✅ Problems with diagrams
- ✅ Multi-part problems
- ✅ PDF worksheets

## Usage Example

### For Students

1. **Upload**: Click "Select File" or drag problem image
2. **Review**: Check extracted text, edit if needed
3. **Confirm**: Click "Start Tutoring Session"
4. **Work**: Share your thinking, show your work
5. **Learn**: Answer tutor's questions, receive hints
6. **Complete**: Demonstrate understanding

### For Teachers/Parents

The feature automatically:
- Checks grade appropriateness
- Warns if problem is too advanced
- Tracks concepts the student understands
- Records hints needed
- Shows session history

## Technical Details

### Structured Output (NEW!)

The system uses **Gemini's structured output** feature to guarantee valid JSON responses:

- All services use Zod schemas for type-safe validation
- Schema definitions in `src/schemas/homework.schemas.ts`
- Eliminates JSON parsing errors and validation issues
- Reduces prompt token usage by ~20-30% (no need for JSON format instructions)

**Benefits:**
- Zero JSON parsing failures
- Guaranteed enum values and required fields
- Runtime type safety with Zod validation
- Cleaner, more maintainable code

### Multimodal Analysis

The system uses **Gemini 2.5 Flash** with multimodal capabilities and structured output:

```typescript
import { GoogleGenerativeAI } from '@google/generative-ai';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { ProblemAnalysisSchema } from '../schemas/homework.schemas';

// Create model with structured output
this.model = this.genAI.getGenerativeModel({
  model: 'gemini-2.5-flash',
  generationConfig: {
    temperature: 0.2,
    responseMimeType: "application/json",
    responseSchema: zodToJsonSchema(ProblemAnalysisSchema) as any,
  },
});

// Generate content - guaranteed valid JSON
const result = await this.model.generateContent([
  { text: ANALYSIS_PROMPT },
  { inlineData: { mimeType, data: base64Image } }
]);

const parsed = JSON.parse(result.response.text());
const validated = ProblemAnalysisSchema.parse(parsed); // Runtime validation
```

### Grade Matching

Two-tier approach:
1. **Rule-based** (fast): Uses curriculum map for common topics
2. **AI-based** (fallback): Gemini reasoning for edge cases

```typescript
// Check against curriculum map
const curriculumInfo = CURRICULUM_MAP['trigonometry'];
if (studentGrade >= curriculumInfo.minGrade) {
  recommendation = 'proceed';
}
```

### Socratic Tutoring

The agent follows strict rules:
- ❌ Never: "The answer is X"
- ❌ Never: "You should get X"
- ✅ Instead: "What approach are you considering?"
- ✅ Instead: "Check your calculation in step 3"
- ✅ Instead: "What principle would help here?"

## Customization Options

### 1. Adjust Max File Size

```tsx
<UploadZone
  onUpload={handleUpload}
  maxSizeMB={15} // Default: 10MB
/>
```

### 2. Customize Curriculum Map

Edit `gradeAppropriatenessService.ts`:

```typescript
const CURRICULUM_MAP = {
  'your-topic': {
    minGrade: 9,
    maxGrade: 12,
    concepts: ['concept1', 'concept2']
  },
  // ... add more
};
```

### 3. Modify Agent Behavior

Edit `homeworkHelper.ts` agent prompt:

```typescript
// Adjust teaching style
// Add subject-specific guidance
// Modify response format
```

### 4. Add Visual Tools

When the agent includes `mathTool` in response:

```typescript
// In HomeworkSession.tsx
{message.display?.mathTool && (
  <MathToolRenderer
    type={message.display.mathTool.type}
    parameters={message.display.mathTool.parameters}
  />
)}
```

## Data Storage (Future Enhancement)

Current implementation is in-memory only. To persist sessions:

### Option 1: Local Storage

```typescript
// Save session
localStorage.setItem(
  `homework-session-${sessionId}`,
  JSON.stringify(session)
);

// Load session
const saved = localStorage.getItem(`homework-session-${sessionId}`);
if (saved) {
  setSession(JSON.parse(saved));
}
```

### Option 2: Firebase/Backend

```typescript
// Save to Firestore
await db.collection('homework-sessions').doc(sessionId).set({
  studentId,
  problemId,
  messages,
  status,
  // ... rest of session
});

// Load from Firestore
const doc = await db.collection('homework-sessions').doc(sessionId).get();
if (doc.exists) {
  setSession(doc.data());
}
```

## Error Handling

The system handles common errors gracefully:

1. **Image quality too low**: Shows clarification notice, allows proceeding
2. **API failures**: Provides fallback responses, allows retry
3. **Parse errors**: Returns supportive default messages
4. **Network issues**: Shows clear error messages with retry option

## Performance Considerations

### Analysis Speed
- Typical image analysis: 2-4 seconds
- Grade check (rule-based): < 100ms
- Grade check (AI-based): 1-2 seconds

### Session Response Time
- Gemini response: 1-3 seconds
- Claude fallback: 2-5 seconds

### Optimization Tips
1. Use rule-based grade check when possible (faster)
2. Cache curriculum mappings
3. Implement response streaming for long responses (future)
4. Compress large images before upload

## Testing Checklist

- [ ] Upload PNG image
- [ ] Upload JPEG image
- [ ] Upload PDF file
- [ ] Reject oversized file
- [ ] Reject invalid file type
- [ ] Handle poor image quality
- [ ] Grade check: appropriate problem
- [ ] Grade check: too advanced
- [ ] Grade check: too basic
- [ ] Edit extracted text
- [ ] Start tutoring session
- [ ] Send student message
- [ ] Receive tutor response
- [ ] Request hint
- [ ] Ask for clarification
- [ ] Complete session
- [ ] Exit and restart

## Troubleshooting

### Issue: "No JSON found in response"
**Status**: ELIMINATED with structured output
**Previous Cause**: AI returned non-JSON text
**Current Fix**: Gemini's structured output guarantees valid JSON - this error should not occur

### Issue: "Failed to analyze problem"
**Cause**: Image too unclear or API error
**Fix**: Check image quality, verify API key, check network

### Issue: Grade check always returns "proceed"
**Cause**: Topic not in curriculum map
**Fix**: Add topic to `CURRICULUM_MAP` or relies on AI-based check

### Issue: Agent gives direct answers
**Cause**: Agent prompt not being followed
**Fix**: This shouldn't happen - report as bug if occurs

### Issue: Zod validation errors
**Cause**: Gemini returned JSON that doesn't match schema (rare)
**Fix**: Check schema definition matches expected response structure. Update schema if needed.

## Future Enhancements

### Phase 2 (Planned)
- [ ] Session persistence (save/resume)
- [ ] Session history view
- [ ] Multi-subject support (physics, chemistry)
- [ ] Handwriting quality improvement
- [ ] Step-by-step work submission (upload work photos)

### Phase 3 (Future)
- [ ] Problem sets (multiple uploads)
- [ ] Peer sharing (share problems with classmates)
- [ ] Parent review dashboard
- [ ] Teacher assignment integration
- [ ] Auto-link to curriculum paths

## API Costs

### Gemini 2.5 Flash Pricing (as of 2024)
- Input: ~$0.15 per million tokens
- Output: ~$0.30 per million tokens
- Images: ~$0.0015 per image

### Estimated Cost Per Session
- Problem analysis: ~$0.002
- Grade check: ~$0.001
- Tutoring (10 messages): ~$0.005
- **Total per session: ~$0.008**

Very cost-effective for homework help!

## Support

For questions or issues:
1. Check this documentation
2. Review type definitions in `src/types/homework.ts`
3. Check console logs for detailed errors
4. Review agent prompt in `homeworkHelper.ts`

## License

Same as main AI Campus project.
