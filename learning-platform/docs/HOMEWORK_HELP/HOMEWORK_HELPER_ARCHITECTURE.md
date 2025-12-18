# Homework Helper - Architecture Diagram

## Complete System Flow

```
┌─────────────────────────────────────────────────────────────────────────┐
│                            STUDENT INTERACTION                           │
└─────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────┐
│  STEP 1: UPLOAD                                                          │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │ UploadZone Component                                            │    │
│  │ - Drag & drop / file select                                     │    │
│  │ - Validate: PNG/JPEG/PDF, max 10MB                              │    │
│  │ - Convert to base64                                             │    │
│  └────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────┐
│  STEP 2: MULTIMODAL ANALYSIS                                             │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │ ProblemAnalysisService                                          │    │
│  │                                                                  │    │
│  │ Input: Image/PDF + Analysis Prompt                              │    │
│  │   ↓                                                              │    │
│  │ Gemini 2.5 Flash (Multimodal)                                   │    │
│  │   ↓                                                              │    │
│  │ Extract:                                                         │    │
│  │ • Problem text (OCR)                                             │    │
│  │ • Topic (e.g., "trigonometry")                                   │    │
│  │ • Difficulty (basic/intermediate/advanced)                       │    │
│  │ • Key concepts (e.g., "SOH-CAH-TOA")                            │    │
│  │ • Visual elements (diagrams, graphs)                            │    │
│  │ • Problem type (word-problem, calculation, etc)                 │    │
│  │   ↓                                                              │    │
│  │ Output: ProblemAnalysis object                                   │    │
│  └────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────┐
│  STEP 3: GRADE APPROPRIATENESS CHECK                                     │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │ GradeAppropriatenessService                                     │    │
│  │                                                                  │    │
│  │ Input: ProblemAnalysis + Student Grade (e.g., 9)                │    │
│  │   ↓                                                              │    │
│  │ ┌──────────────────┐        ┌──────────────────┐              │    │
│  │ │ Rule-Based Check │───OR───│ AI-Based Check   │              │    │
│  │ │ (Fast)           │        │ (Fallback)       │              │    │
│  │ │                  │        │                  │              │    │
│  │ │ CURRICULUM_MAP:  │        │ Gemini reasoning │              │    │
│  │ │ 'trig': min=9    │        │ for edge cases   │              │    │
│  │ │ If grade >= 9:   │        │                  │              │    │
│  │ │ ✓ proceed        │        │                  │              │    │
│  │ └──────────────────┘        └──────────────────┘              │    │
│  │   ↓                                                              │    │
│  │ Output:                                                          │    │
│  │ • isAppropriate: true/false                                      │    │
│  │ • recommendation: proceed | too-advanced | too-basic | review   │    │
│  │ • suggestionMessage: "Great! This is perfect for you."         │    │
│  │ • conceptsCovered: ["sine", "cosine"]                           │    │
│  │ • conceptsMissing: []                                            │    │
│  └────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────┐
│  STEP 4: PROBLEM PREVIEW                                                 │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │ ProblemPreview Component                                        │    │
│  │                                                                  │    │
│  │ Display:                                                         │    │
│  │ ┌──────────────────┐  ┌──────────────────────────────────┐    │    │
│  │ │ Uploaded Image   │  │ Extracted Text (editable)        │    │    │
│  │ │                  │  │ Topic: Trigonometry              │    │    │
│  │ │ [Problem photo]  │  │ Difficulty: Intermediate         │    │    │
│  │ │                  │  │ Concepts: SOH-CAH-TOA, angles    │    │    │
│  │ └──────────────────┘  └──────────────────────────────────┘    │    │
│  │                                                                  │    │
│  │ Grade Check Result:                                              │    │
│  │ ✓ Perfect Match! This is great for grade 9.                     │    │
│  │                                                                  │    │
│  │ [Upload Different] [Start Tutoring Session →]                   │    │
│  └────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────┐
│  STEP 5: SOCRATIC TUTORING SESSION                                       │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │ HomeworkHelperService + Homework Helper Agent                   │    │
│  │                                                                  │    │
│  │ Initial Greeting:                                                │    │
│  │ ┌──────────────────────────────────────────────────────────┐   │    │
│  │ │ Agent: "I see you have a trigonometry problem about       │   │    │
│  │ │         a ladder. Tell me, what do you understand so far?"│   │    │
│  │ └──────────────────────────────────────────────────────────┘   │    │
│  │                                                                  │    │
│  │ Conversation Loop:                                               │    │
│  │ ┌──────────────────────────────────────────────────────────┐   │    │
│  │ │ 1. Student: "I think I need to use sine..."               │   │    │
│  │ │    ↓                                                       │   │    │
│  │ │ 2. Build Context:                                          │   │    │
│  │ │    - ProblemAnalysis                                       │   │    │
│  │ │    - Conversation history (last 6 messages)                │   │    │
│  │ │    - Hints given, questions asked                          │   │    │
│  │ │    - Concepts demonstrated                                 │   │    │
│  │ │    ↓                                                       │   │    │
│  │ │ 3. Call Homework Helper Agent (via Gemini/Claude)          │   │    │
│  │ │    ↓                                                       │   │    │
│  │ │ 4. Agent Response:                                         │   │    │
│  │ │    {                                                       │   │    │
│  │ │      "speech": {                                           │   │    │
│  │ │        "text": "Excellent! Why did you choose sine?",      │   │    │
│  │ │        "emotion": "encouraging"                            │   │    │
│  │ │      },                                                    │   │    │
│  │ │      "display": {                                          │   │    │
│  │ │        "content": "**Excellent!** Why sine instead of      │   │    │
│  │ │                    cosine or tangent?",                    │   │    │
│  │ │        "mathTool": { type: "rightTriangle", ... }         │   │    │
│  │ │      },                                                    │   │    │
│  │ │      "teachingAction": "question",                         │   │    │
│  │ │      "conceptsAddressed": ["sine ratio"],                  │   │    │
│  │ │      "sessionComplete": false                              │   │    │
│  │ │    }                                                       │   │    │
│  │ │    ↓                                                       │   │    │
│  │ │ 5. Update Session State:                                   │   │    │
│  │ │    - Add messages to history                               │   │    │
│  │ │    - Track hints/questions                                 │   │    │
│  │ │    - Update understood concepts                            │   │    │
│  │ │    ↓                                                       │   │    │
│  │ │ 6. Display to student → Repeat from step 1                │   │    │
│  │ └──────────────────────────────────────────────────────────┘   │    │
│  │                                                                  │    │
│  │ Session Complete When:                                           │    │
│  │ • Student demonstrates understanding + solves correctly          │    │
│  │ • Student requests a break                                       │    │
│  │ • Stuck despite multiple hints                                   │    │
│  └────────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌─────────────────────────────────────────────────────────────────────────┐
│  COMPLETION                                                               │
│  • Show summary of concepts mastered                                     │
│  • Display session stats (hints, questions, attempts)                    │
│  • Option to upload new problem                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

## Agent Decision Tree

```
Student Input
    │
    ▼
┌───────────────────────────────┐
│ Analyze Student's Message     │
│ • What did they say?           │
│ • Is reasoning sound?          │
│ • Are they stuck?              │
│ • Do they understand?          │
└───────────────────────────────┘
    │
    ├─────────────────────────────────────────┬─────────────────────────────┐
    ▼                                         ▼                             ▼
┌─────────────────┐               ┌─────────────────┐         ┌──────────────────┐
│ Good Reasoning  │               │ Needs Guidance  │         │ Asking for Answer│
│                 │               │                 │         │                  │
│ teachingAction: │               │ teachingAction: │         │ teachingAction:  │
│ "celebration"   │               │ "question" or   │         │ "redirection"    │
│                 │               │ "hint"          │         │                  │
│ Response:       │               │                 │         │ Response:        │
│ "Excellent! Why │               │ If stuck a bit: │         │ "I'm here to help│
│  did you choose │               │ → question      │         │  YOU learn, not  │
│  that approach?"│               │ "What formula   │         │  give answers.   │
│                 │               │  involves these │         │  Let's think...  │
│ Keep probing    │               │  quantities?"   │         │                  │
│ understanding   │               │                 │         │ Redirect to      │
│                 │               │ If very stuck:  │         │ process          │
└─────────────────┘               │ → hint          │         └──────────────────┘
                                  │ "Look at the    │
                                  │  opposite and   │
                                  │  hypotenuse"    │
                                  └─────────────────┘
```

## Data Flow

```
┌──────────────────────────────────────────────────────────────────────┐
│ TYPE DEFINITIONS (src/types/homework.ts)                              │
├──────────────────────────────────────────────────────────────────────┤
│                                                                       │
│ UploadedProblem {                                                     │
│   id, studentId, imageUrl, imageData, fileType                       │
│   status: 'analyzing' | 'ready' | 'in-progress' | 'completed'       │
│   analysis: ProblemAnalysis                                           │
│   gradeCheck: GradeAppropriatenessCheck                              │
│ }                                                                     │
│                                                                       │
│ ProblemAnalysis {                                                     │
│   extractedText, subject, topic, subTopic, difficulty                │
│   problemType, hasDiagram, hasGraph, keyMathConcepts                 │
│   formulasNeeded, visualElements, analysisConfidence                 │
│ }                                                                     │
│                                                                       │
│ GradeAppropriatenessCheck {                                           │
│   studentGrade, isAppropriate, reason                                │
│   requiredGradeLevel, conceptsCovered, conceptsMissing               │
│   recommendation, suggestionMessage                                   │
│ }                                                                     │
│                                                                       │
│ HomeworkSession {                                                     │
│   sessionId, problemId, studentId                                    │
│   messages: HomeworkMessage[]                                         │
│   hintsGiven, questionsAsked, studentAttempts                        │
│   understoodConcepts, strugglingConcepts                             │
│   status: 'active' | 'completed' | 'abandoned'                       │
│ }                                                                     │
│                                                                       │
│ HomeworkMessage {                                                     │
│   id, role: 'student' | 'tutor', timestamp                           │
│   text (student) | speech + display (tutor)                          │
│   conceptsAddressed                                                   │
│ }                                                                     │
│                                                                       │
│ HomeworkHelperResponse {                                              │
│   speech: { text, emotion }                                           │
│   display: { content, mathTool? }                                     │
│   conceptsAddressed, teachingAction, nextFocus                       │
│   sessionComplete?, completionReason?                                 │
│ }                                                                     │
└──────────────────────────────────────────────────────────────────────┘
```

## Component Hierarchy

```
HomeworkHelper (Container)
│
├── State Management
│   ├── flowState: 'upload' | 'analyzing' | 'preview' | 'session' | 'error'
│   ├── currentProblem: UploadedProblem
│   ├── gradeCheck: GradeAppropriatenessCheck
│   └── session: HomeworkSession
│
├── Services
│   ├── ProblemAnalysisService
│   ├── GradeAppropriatenessService
│   └── HomeworkHelperService
│
└── Renders (based on flowState)
    │
    ├── flowState === 'upload'
    │   └── <UploadZone onUpload={handleUpload} />
    │
    ├── flowState === 'analyzing'
    │   └── <LoadingSpinner message="Analyzing..." />
    │
    ├── flowState === 'preview'
    │   └── <ProblemPreview
    │         imageUrl={...}
    │         analysis={...}
    │         gradeCheck={...}
    │         onConfirm={handleStartSession}
    │         onCancel={handleReset}
    │       />
    │
    ├── flowState === 'session'
    │   └── <HomeworkSessionView
    │         session={...}
    │         problem={...}
    │         onSendMessage={handleSendMessage}
    │         onExit={handleReset}
    │       />
    │       │
    │       ├── Header (with exit button)
    │       ├── Problem Image Sidebar (toggleable)
    │       ├── Messages Area
    │       │   ├── Student messages (right-aligned)
    │       │   └── Tutor messages (left-aligned, markdown support)
    │       ├── Progress Indicator (hints, questions, concepts)
    │       └── Input Area (textarea + send button)
    │
    └── flowState === 'error'
        └── <ErrorDisplay message={error} onRetry={handleReset} />
```

## API Integration Points

```
┌─────────────────────────────────────────────────────────────────┐
│ Gemini 2.5 Flash API with Structured Output                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│ SDK: @google/generative-ai                                      │
│ Model: gemini-3-flash                                         │
│ Validation: Zod schemas (src/schemas/homework.schemas.ts)       │
│                                                                  │
│ Use Case 1: Problem Analysis (Multimodal)                       │
│ ├─ Input: Image (base64) + ANALYSIS_PROMPT                      │
│ ├─ Config: temperature=0.2, maxTokens=2048                      │
│ ├─ Schema: ProblemAnalysisSchema                                │
│ └─ Output: ProblemAnalysis JSON (guaranteed valid)              │
│                                                                  │
│ Use Case 2: Grade Check (Text-only)                             │
│ ├─ Input: ProblemAnalysis + Student Grade + CHECK_PROMPT        │
│ ├─ Config: temperature=0.3, maxTokens=1024                      │
│ ├─ Schema: GradeCheckSchema                                     │
│ └─ Output: GradeAppropriatenessCheck JSON (guaranteed valid)    │
│                                                                  │
│ Use Case 3: Socratic Tutoring (Text-only)                       │
│ ├─ Input: HOMEWORK_HELPER_AGENT + Context + Student Message     │
│ ├─ Config: temperature=0.7, maxTokens=2048                      │
│ ├─ Schema: HomeworkHelperResponseSchema                         │
│ └─ Output: HomeworkHelperResponse JSON (guaranteed valid)       │
│                                                                  │
│ Benefits of Structured Output:                                  │
│ ✓ Zero JSON parsing errors                                      │
│ ✓ Guaranteed enum values and required fields                    │
│ ✓ 20-30% fewer prompt tokens (no JSON format instructions)      │
│ ✓ Runtime type safety with Zod validation                       │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ Claude API (Fallback)                                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│ Used only when Gemini fails (via BaseAIService)                 │
│ Same use cases as above, but text-only (no multimodal)          │
│ Automatic fallback on 503 errors                                │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## State Transitions

```
[Upload] ─upload file─> [Analyzing]
                            │
                  analysis complete
                            │
                            ▼
                        [Preview]
                            │
                  ┌─────────┴─────────┐
                  │                   │
          confirm/edit            cancel
                  │                   │
                  ▼                   ▼
              [Session]           [Upload]
                  │
          ┌───────┼───────┐
          │       │       │
      message  complete  exit
          │       │       │
          ▼       ▼       ▼
      [Session] [Session] [Upload]
                (status:
                completed)
```

## Security & Privacy

```
┌─────────────────────────────────────────────────────────────────┐
│ Data Handling                                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│ ✓ Images converted to base64 (no server storage in MVP)         │
│ ✓ Student ID required (authenticated users only)                │
│ ✓ No problem sharing between students                           │
│ ✓ Session data in-memory only (no persistence in MVP)           │
│ ✓ API keys in environment variables (not in code)               │
│                                                                  │
│ Future Enhancements:                                             │
│ • Encrypt stored images                                          │
│ • Auto-delete after 24 hours                                     │
│ • Parent/teacher review with consent                             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```
