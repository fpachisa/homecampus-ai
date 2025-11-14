# Homework Helper Autosave Feature - Implementation Plan

## 📊 Current State Analysis

### What Exists
- Well-structured data types (`UploadedProblem`, `HomeworkSession`, `HomeworkMessage`)
- Three-stage AI pipeline (analysis → grade check → tutoring)
- Rich metadata tracking (concepts, hints, teaching actions)
- Clean component architecture

### Critical Gap
- **ZERO persistence** - all state is in-memory React state
- Sessions lost on page refresh
- No history or resume capability
- No parent dashboard visibility

---

## 🎯 Storage Architecture Design

### Two-Tier Storage Strategy

**Tier 1: Local Storage (Quick Access)**
- Purpose: Active session caching, offline-first, instant resume
- Technology: `localStorage` via new `homeworkStorageService.ts`
- Scope: Current + last 5 sessions per student
- Pattern: Follow existing `sessionStorage.ts` pattern from Learn Mode

**Tier 2: Cloud Storage (Permanent Records)**
- Purpose: Complete history, parent dashboard, analytics
- Technology: Firestore (follows existing Firebase setup)
- Scope: All homework sessions permanently
- Access: Multi-device, shareable, queryable

---

## 🗄️ Data Model Design

### Firestore Collections Structure

```
users/{userId}/homeworkProblems/{problemId}
├── Fields:
│   ├── id: string
│   ├── studentId: string
│   ├── uploadedAt: timestamp
│   ├── lastActivityAt: timestamp
│   ├── status: 'analyzing' | 'ready' | 'active' | 'completed' | 'abandoned'
│   │
│   ├── extractedText: string              // OCR result (editable)
│   ├── subject: string                    // "mathematics"
│   ├── topic: string                      // "trigonometry"
│   ├── subTopic: string                   // "angle of elevation"
│   ├── difficulty: string                 // "intermediate"
│   ├── problemType: string                // "word-problem"
│   │
│   ├── keyMathConcepts: string[]         // ["SOH-CAH-TOA"]
│   ├── formulasNeeded: string[]          // ["sin(θ) = ..."]
│   ├── visualElements: string[]          // ["right triangle"]
│   │
│   ├── gradeCheck: {
│   │   studentGrade: number,
│   │   isAppropriate: boolean,
│   │   requiredGradeLevel: number,
│   │   conceptsCovered: string[],
│   │   conceptsMissing: string[],
│   │   recommendation: string
│   │ }
│   │
│   ├── statistics: {
│   │   totalSessions: number,
│   │   totalTimeSpent: number,            // seconds
│   │   lastAttemptedAt: timestamp
│   │ }
│   │
│   └── [NO imageData - too large for Firestore]
│
└── Subcollection: sessions/{sessionId}
    ├── sessionId: string
    ├── startedAt: timestamp
    ├── lastActivityAt: timestamp
    ├── completedAt?: timestamp
    ├── status: 'active' | 'completed' | 'abandoned'
    │
    ├── messages: HomeworkMessage[]       // Full conversation
    │   ├── [{ id, role, timestamp, text, speech, display, ... }]
    │
    ├── progress: {
    │   hintsGiven: number,
    │   questionsAsked: number,
    │   studentAttempts: number,
    │   understoodConcepts: string[],
    │   strugglingConcepts: string[]
    │ }
    │
    ├── finalOutcome?: string             // 'solved-with-understanding'
    └── completionReason?: string         // 'understood' | 'gave-up'
```

### localStorage Schema

```typescript
// Key: homework_active_{userId}
{
  currentProblemId: string | null,
  currentSessionId: string | null,

  // Cache recent problems (no image data)
  recentProblems: {
    [problemId]: {
      extractedText: string,
      analysis: ProblemAnalysis,
      gradeCheck: GradeAppropriatenessCheck,
      uploadedAt: string
    }
  },

  // Cache active session
  activeSession: HomeworkSession | null,

  lastSyncedAt: string
}
```

---

## 🔧 Implementation Phases

### **Phase 1: Core Storage Services** (Foundation)

**1.1 Create `homeworkStorageService.ts`**
- localStorage wrapper with type safety
- Methods: `saveActiveProblem()`, `saveActiveSession()`, `getActiveSession()`, `clearSession()`
- Auto-cleanup of old cached sessions (keep last 5)
- Error handling for quota exceeded

**1.2 Create `homeworkPersistenceService.ts`**
- Firestore operations wrapper
- Methods: `saveProblem()`, `updateProblem()`, `saveSession()`, `updateSession()`, `getSessionHistory()`
- Batch writes for efficiency
- Offline queue support

**1.3 Create `homeworkAutoSaveManager.ts`**
- Orchestrates both storage tiers
- Debounced saves (3-second delay after message)
- Smart diffing (only save if changed)
- Retry logic for failed saves
- Event emitter for save status (for UI feedback)

**Files to Create:**
- `learning-platform/src/services/homework/homeworkStorageService.ts`
- `learning-platform/src/services/homework/homeworkPersistenceService.ts`
- `learning-platform/src/services/homework/homeworkAutoSaveManager.ts`

---

### **Phase 2: Integration with HomeworkHelper** (Core Feature)

**2.1 Add AutoSave Hooks**
- Create `useHomeworkAutoSave()` custom hook
- Automatic save triggers:
  - After problem analysis completes
  - After grade check completes
  - On session start
  - After each message exchange (debounced)
  - On session completion
  - On component unmount / page unload

**2.2 Update HomeworkHelper.tsx**
- Import and initialize AutoSaveManager
- Add save status indicator (saving/saved/error)
- Add error recovery for failed saves
- Add "unsaved changes" warning on navigation

**2.3 Add Session Resume Logic**
- Check for active session on mount
- Show "Resume Session?" modal if found
- Load full state (problem + session + messages)
- Handle edge cases (corrupt data, expired sessions)

**Files to Modify:**
- `learning-platform/src/components/homework/HomeworkHelper.tsx`
- `learning-platform/src/components/homework/HomeworkSessionView.tsx`

**Files to Create:**
- `learning-platform/src/hooks/useHomeworkAutoSave.ts`
- `learning-platform/src/components/homework/SessionResumeModal.tsx`

---

### **Phase 3: History & Review UI** (User Features)

**3.1 Create Homework History Page**
- List all past homework problems (grouped by date)
- Show: extracted text preview, subject/topic, completion status
- Filter by: date range, subject, completion status
- Search by keywords in extracted text

**3.2 Create Session Detail View**
- View full conversation history
- Show progress metrics (hints, concepts understood)
- Replay session chronologically
- Export as PDF report for parents

**3.3 Add History Navigation**
- New "Homework History" button in parent/student dashboard
- Badge showing number of completed homework problems this week
- Quick access to recent incomplete sessions

**Files to Create:**
- `learning-platform/src/components/homework/HomeworkHistoryPage.tsx`
- `learning-platform/src/components/homework/SessionDetailView.tsx`
- `learning-platform/src/components/homework/HomeworkHistoryCard.tsx` (for dashboard)

---

### **Phase 4: Parent Dashboard Integration** (Visibility)

**4.1 Add Homework Usage Widget**
- Show total homework problems solved
- Weekly activity chart
- Subject breakdown (math: 5, science: 2, etc.)
- Average session duration
- Concepts frequently struggled with

**4.2 Add Individual Session Reports**
- Parent can view any completed homework session
- Show: problem text, key concepts, hints given, outcome
- Export/print capability
- Privacy controls (student can hide specific sessions)

**Files to Create:**
- `learning-platform/src/components/parent/HomeworkUsageWidget.tsx`
- `learning-platform/src/components/parent/HomeworkSessionReport.tsx`

**Files to Modify:**
- Parent dashboard component (add homework widgets)

---

### **Phase 5: Analytics & Optimization** (Polish)

**5.1 Add Usage Analytics**
- Track: problems attempted, completion rate, average hints needed
- Identify: struggling topics, peak usage times, session abandonment patterns
- Dashboard for student to see own progress

**5.2 Performance Optimization**
- Lazy load old sessions (pagination)
- Index Firestore queries for speed
- Compress message history for storage
- Add caching layer for frequently accessed data

**5.3 Data Management**
- Auto-archive sessions older than 6 months
- Allow students to delete specific sessions
- Bulk export for data portability
- GDPR compliance (right to deletion)

---

## 🔐 Important Implementation Details

### **What NOT to Save**

❌ **Original image files (base64)** - Too large for Firestore (1MB document limit)
- **Alternative:** Save to Firebase Storage with reference URL (optional future enhancement)
- **Current Plan:** Only save extracted text + metadata

❌ **Full analysis raw response** - Redundant, already parsed
- **Alternative:** Save only the structured `ProblemAnalysis` object

### **What MUST Save**

✅ **Extracted question text** - Core content
✅ **Problem metadata** - Subject, topic, difficulty, concepts, formulas
✅ **Full message history** - Complete conversation context
✅ **Progress metrics** - Hints, attempts, understood/struggling concepts
✅ **Session outcome** - How the session ended and why
✅ **Timestamps** - For analytics and sorting

### **Autosave Timing Strategy**

```typescript
// Trigger Points
1. Immediate: Problem analysis complete → save UploadedProblem
2. Immediate: Grade check complete → update UploadedProblem
3. Immediate: Session start → create HomeworkSession
4. Debounced (3s): After each message → update HomeworkSession
5. Immediate: Session complete → final update + mark completed
6. On Unmount: Save current state to localStorage
```

### **Error Handling**

```typescript
// Fallback Hierarchy
1. Try Firestore save (primary)
   ↓ (on fail)
2. Queue for retry with exponential backoff
   ↓ (if persistent failure)
3. Save to localStorage only (degraded mode)
   ↓
4. Show user warning: "Your session is saved locally but not synced"
   ↓
5. Retry sync on next network connection
```

---

## 🧪 Testing Strategy

### **Unit Tests**

```typescript
// homeworkStorageService.test.ts
- Save/load active session
- Handle quota exceeded
- Auto-cleanup old sessions

// homeworkPersistenceService.test.ts
- Firestore CRUD operations
- Batch writes
- Error handling

// homeworkAutoSaveManager.test.ts
- Debouncing logic
- Retry mechanism
- State diffing
```

### **Integration Tests**

```typescript
// HomeworkHelper.integration.test.tsx
- Upload → analyze → save problem
- Start session → exchange messages → autosave triggered
- Close session → reopen → resume correctly
- Handle save failures gracefully
```

### **E2E Tests**

```typescript
// homework-autosave.e2e.test.ts
- Complete homework flow with autosave
- Refresh page mid-session → resume
- Parent views completed homework in dashboard
```

---

## 📋 Migration & Rollout Plan

### **Phase 0: Pre-Launch**
1. Add feature flag: `VITE_ENABLE_HOMEWORK_AUTOSAVE=true`
2. Run beta test with 10 users
3. Monitor Firestore usage and costs
4. Fix any critical bugs

### **Phase 1: Soft Launch**
1. Enable for 25% of users
2. Monitor error rates, storage usage
3. Gather user feedback on resume UX

### **Phase 2: Full Rollout**
1. Enable for 100% of users
2. Add documentation/tooltips
3. Monitor support tickets

### **No Migration Needed:**
- New feature, no existing data to migrate
- Existing in-memory sessions will be lost (expected)
- Future sessions will autosave automatically

---

## 💰 Cost Considerations

### **Firestore Operations (per session)**

```
Problem Creation:
- 1 write (problem document)
- 1 write (first session subcollection)

Active Session (10 messages):
- 10 writes (debounced to ~3-4 actual writes)

Session Completion:
- 1 write (final update)

Total per session: ~6-7 writes

Cost: $0.18 per 100K writes
→ ~$0.00001 per session (negligible)
```

### **Storage Size Estimate**

```
Per Problem Document:
- Metadata: ~2KB
- Analysis data: ~1KB
- Grade check: ~500B
Total: ~3.5KB

Per Session Document:
- 10 messages × 500B = 5KB
- Progress metrics: ~500B
Total: ~5.5KB

Per completed homework: ~9KB

1000 homework problems = ~9MB
→ Well within free tier (1GB)
```

---

## 🎨 UI/UX Enhancements

### **Save Status Indicator**

```typescript
// In HomeworkSessionView header
<div className="save-status">
  {saveStatus === 'saving' && <Spinner />}
  {saveStatus === 'saved' && <CheckIcon />}
  {saveStatus === 'error' && <ErrorIcon />}
  <span>Last saved: {formatRelativeTime(lastSavedAt)}</span>
</div>
```

### **Resume Modal**

```typescript
// On mount, if active session found
<Modal>
  <h3>Resume Previous Session?</h3>
  <p>You have an unfinished homework session from {timeAgo}.</p>
  <ProblemPreview text={extractedText} />
  <ButtonGroup>
    <Button onClick={resumeSession}>Resume Session</Button>
    <Button onClick={startNew}>Start New</Button>
  </ButtonGroup>
</Modal>
```

### **History Page Layout**

```
┌─────────────────────────────────────┐
│  Homework History                   │
│  [Filter: All] [Search: ___]       │
├─────────────────────────────────────┤
│  Today                              │
│  ┌─────────────────────────────┐   │
│  │ Trigonometry Word Problem    │   │
│  │ ✓ Completed • 15 min        │   │
│  │ Concepts: SOH-CAH-TOA        │   │
│  └─────────────────────────────┘   │
│                                     │
│  Yesterday                          │
│  ┌─────────────────────────────┐   │
│  │ Quadratic Equations          │   │
│  │ ⊗ Abandoned • 8 min         │   │
│  │ Concepts: Factoring          │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

---

## 🚀 Implementation Timeline Estimate

| Phase | Tasks | Estimated Time | Priority |
|-------|-------|---------------|----------|
| **Phase 1** | Storage services | 2-3 days | P0 (Critical) |
| **Phase 2** | Integration + autosave | 2-3 days | P0 (Critical) |
| **Phase 3** | History UI | 2-3 days | P1 (High) |
| **Phase 4** | Parent dashboard | 1-2 days | P2 (Medium) |
| **Phase 5** | Analytics + polish | 2-3 days | P3 (Nice-to-have) |
| **Testing** | Unit + integration + E2E | 2 days | P0 (Critical) |
| **Total** | | **11-16 days** | |

---

## ✅ Success Metrics

**Technical Metrics:**
- 99.9% autosave success rate
- <100ms localStorage save latency
- <500ms Firestore save latency
- Zero data loss on page refresh

**User Metrics:**
- 80%+ session resume rate (users resume abandoned sessions)
- 50%+ users view homework history within first week
- <1% support tickets related to lost homework data

**Business Metrics:**
- Increased homework feature engagement (daily active users)
- Higher parent dashboard usage (visibility into homework help)
- Positive feedback on "never lose progress" feature

---

## 🔄 Future Enhancements (Post-MVP)

1. **Image Storage** - Save original images to Firebase Storage for review
2. **Collaborative Sessions** - Parent can join student's live homework session
3. **Homework Scheduling** - Remind students of pending homework
4. **Cross-Device Sync** - Start on laptop, continue on tablet
5. **Offline Mode** - Work fully offline, sync when reconnected
6. **Export Reports** - PDF/CSV export of homework activity
7. **AI Insights** - "You struggle with trigonometry, try this video"
8. **Study Streaks** - Gamification for consistent homework help usage

---

## 📚 Technical Dependencies

**Existing (Already in project):**
- Firebase/Firestore setup
- Type definitions (`homework.ts`, `homework.schemas.ts`)
- localStorage utilities pattern (from Learn Mode)

**New Dependencies:**
- None! (Use existing Firebase SDK)

**Environment Variables:**
- Already configured (Firebase keys in `.env`)

---

## 📝 Implementation Checklist

### Phase 1: Core Storage Services
- [ ] Create `homeworkStorageService.ts` with localStorage operations
- [ ] Create `homeworkPersistenceService.ts` with Firestore operations
- [ ] Create `homeworkAutoSaveManager.ts` with orchestration logic
- [ ] Add unit tests for all three services

### Phase 2: Integration
- [ ] Create `useHomeworkAutoSave` hook
- [ ] Create `SessionResumeModal` component
- [ ] Update `HomeworkHelper.tsx` with autosave integration
- [ ] Update `HomeworkSessionView.tsx` with save status indicator
- [ ] Add integration tests

### Phase 3: History UI
- [ ] Create `HomeworkHistoryPage` component
- [ ] Create `SessionDetailView` component
- [ ] Create `HomeworkHistoryCard` for dashboard
- [ ] Add routing for history pages

### Phase 4: Parent Dashboard
- [ ] Create `HomeworkUsageWidget` component
- [ ] Create `HomeworkSessionReport` component
- [ ] Integrate widgets into parent dashboard
- [ ] Add privacy controls

### Phase 5: Analytics & Optimization
- [ ] Add usage analytics tracking
- [ ] Implement pagination for history
- [ ] Add Firestore indexes
- [ ] Implement data archival strategy
- [ ] Add export functionality

### Testing
- [ ] Write unit tests for services
- [ ] Write integration tests for components
- [ ] Write E2E tests for complete flow
- [ ] Manual testing across browsers
- [ ] Performance testing with large datasets

---

**Document Version:** 1.0
**Created:** 2025-11-14
**Last Updated:** 2025-11-14
**Status:** Ready for Implementation
