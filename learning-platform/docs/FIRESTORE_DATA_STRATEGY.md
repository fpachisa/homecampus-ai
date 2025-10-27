# Firestore Data Strategy - AI Campus Learning Platform

**Version:** 2.0 - Startup Focused
**Date:** 2025-10-27
**Status:** MVP-Ready

**Change Log:**
- v2.0 (2025-10-27): Restructured for startup MVP - separated essentials from future enhancements
- v1.2 (2025-10-27): Enhanced with enterprise features (moved to Future Enhancements)
- v1.1 (2025-10-27): Fixed terminology - clarified Learn mode uses subtopic IDs, Practice uses topic IDs
- v1.0 (2025-10-27): Initial comprehensive strategy

---

## Executive Summary - Startup Focus

### What You Need for MVP (3 weeks)
✅ **Core Hybrid Model** - Scalable from day one, no future migrations needed
✅ **Parent Dashboard** - Single-read performance via denormalized summaries
✅ **Basic Offline** - Firestore's built-in persistence (1 line of code)
✅ **Simple Security** - Owner read/write, parent read-only
✅ **Error Handling** - Basic retry logic (no complex strategies)

### What You DON'T Need Yet
❌ Message archival (users won't hit limits for months)
❌ Performance monitoring dashboards (Firebase Console is fine)
❌ BigQuery analytics (Firebase Analytics is enough)
❌ GDPR compliance (implement when needed)
❌ Complex transaction strategies (basic saves work)
❌ Automated backups (manual weekly is fine initially)

### Recommended Architecture (Still Option D)
**Hybrid Collection Model** - Same scalable structure, simpler implementation:
- **Learn Mode:** Subtopic-level documents (e.g., `s3-math-trigonometry-basic-ratios`)
- **Practice Mode:** Topic-level documents (e.g., `s3-math-trigonometry`)
- **Progress Summary:** Denormalized for parent dashboard performance
- **Start Simple:** Basic saves, add optimizations when you have real usage data

**Topic ID Clarification:**
- **Learn Mode:** Uses full subtopic IDs like `s3-math-trigonometry-basic-ratios` (one subtopic has multiple sections)
- **Practice Mode:** Uses topic-level IDs like `s3-math-trigonometry` (one topic has multiple nodes)

---

## 🚀 MVP Essentials (Start Here!)

### Week 1: Core Data Structure

#### 1. Basic Firestore Setup
```typescript
// firebase.ts - Simple initialization
import { initializeApp } from 'firebase/app';
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

// Enable offline (1 line!)
enableIndexedDbPersistence(firestore).catch(err => {
  console.log('Offline mode not available');
});
```

#### 2. MVP TypeScript Interfaces
```typescript
// Just the essentials - expand later
interface LearnConversation {
  subtopicId: string;
  topicId: string;
  messages: Message[];
  sectionProgress: {
    currentSection: string;
    masteredSections: string[];
  };
  sessionStats: {
    problemsAttempted: number;
    correctAnswers: number;
    totalTimeSpent: number;
  };
  lastUpdated: Timestamp;
}

interface ProgressSummary {
  learnSubtopics: {
    [subtopicId: string]: {
      displayName: string;
      progress: number; // 0-100
      lastActive: Timestamp;
    }
  };
  lastUpdated: Timestamp;
}
```

#### 3. Simple Save/Load Functions
```typescript
// progressService.ts - MVP version
export async function saveLearnProgress(
  uid: string,
  subtopicId: string,
  conversation: LearnConversation
): Promise<void> {
  try {
    // Save conversation
    const convRef = doc(firestore, `users/${uid}/learn/${subtopicId}`);
    await setDoc(convRef, conversation);

    // Update summary for parent dashboard
    const summaryRef = doc(firestore, `users/${uid}/progressSummary`);
    await setDoc(summaryRef, {
      learnSubtopics: {
        [subtopicId]: {
          displayName: conversation.displayName,
          progress: calculateProgress(conversation),
          lastActive: serverTimestamp()
        }
      },
      lastUpdated: serverTimestamp()
    }, { merge: true });
  } catch (error) {
    // Simple retry
    if (retryCount < 3) {
      await new Promise(r => setTimeout(r, 1000));
      return saveLearnProgress(uid, subtopicId, conversation, retryCount + 1);
    }
    throw error;
  }
}

export async function loadLearnProgress(
  uid: string,
  subtopicId: string
): Promise<LearnConversation | null> {
  const convRef = doc(firestore, `users/${uid}/learn/${subtopicId}`);
  const snap = await getDoc(convRef);
  return snap.exists() ? snap.data() as LearnConversation : null;
}
```

### Week 2: Parent Dashboard & Security

#### 1. Basic Security Rules
```javascript
// firestore.rules - MVP version
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Simple helpers
    function isOwner(userId) {
      return request.auth != null && request.auth.uid == userId;
    }

    function isParent(childId) {
      return request.auth != null &&
        get(/databases/$(database)/documents/users/$(childId)/profile)
          .data.parents.hasAny([request.auth.uid]);
    }

    // User data
    match /users/{userId} {
      match /{document=**} {
        allow read: if isOwner(userId) || isParent(userId);
        allow write: if isOwner(userId);
      }
    }
  }
}
```

#### 2. Parent Dashboard Query
```typescript
// Single read for parent dashboard!
export async function getChildProgress(
  parentUid: string,
  childUid: string
): Promise<ProgressSummary> {
  // Verify parent (security rules double-check this)
  const summaryRef = doc(firestore, `users/${childUid}/progressSummary`);
  const snap = await getDoc(summaryRef);
  return snap.data() as ProgressSummary;
}
```

### Week 3: Testing & Deployment

#### Simple Integration Test
```typescript
describe('MVP Firestore Integration', () => {
  it('should save and load learn progress', async () => {
    const testConversation = {
      subtopicId: 's3-math-trig',
      messages: [],
      // ... minimal test data
    };

    await saveLearnProgress('test-user', 's3-math-trig', testConversation);
    const loaded = await loadLearnProgress('test-user', 's3-math-trig');

    expect(loaded).toEqual(testConversation);
  });
});
```

### That's It for MVP! 🎉

**Total Code:** ~200 lines
**Time to Implement:** 3 weeks
**Monthly Cost:** ~$5-10 for first 100 users

### ✅ MVP Checklist

```markdown
## Week 1
- [ ] Set up Firebase project
- [ ] Add Firestore to Firebase Console
- [ ] Create TypeScript interfaces
- [ ] Implement save/load functions
- [ ] Test offline mode

## Week 2
- [ ] Deploy security rules
- [ ] Implement progress summary
- [ ] Create parent query function
- [ ] Test parent dashboard

## Week 3
- [ ] Add error handling
- [ ] Test with 5-10 users
- [ ] Fix critical bugs only
- [ ] Deploy to production
- [ ] Celebrate! 🎉
```

### When to Add More Features

| Feature | Add When... | Why Wait? |
|---------|-------------|-----------|
| Message Archival | Any user has 300+ messages | Won't happen for months |
| Performance Monitoring | 100+ daily active users | Firebase Console is enough |
| Automated Backups | You have paying customers | Manual weekly backup is fine |
| GDPR Compliance | EU market or requested | Not needed for US-only |
| BigQuery Analytics | Need custom reports | Firebase Analytics works |
| Transaction Consistency | Seeing data issues | Simple saves rarely conflict |

---

### Hierarchical Structure

**Learn Mode Hierarchy:**
```
Grade (S3) → Subject (Math) → Topic (Trigonometry) → Subtopic (Basic Ratios) → Section (Introduction, Practice, etc.)
                                  ↑ s3-math-trigonometry    ↑ s3-math-trigonometry-basic-ratios
```

**Practice Mode Hierarchy:**
```
Grade (S3) → Subject (Math) → Topic (Trigonometry) → Nodes (Node 1, Node 2, etc.)
                                  ↑ s3-math-trigonometry
```

**Key Difference:**
- **Learn** saves per subtopic (finer granularity) - e.g., "Basic Ratios", "Advanced Applications"
- **Practice** saves per topic (broader scope) - e.g., all "Trigonometry" practice in one document

### Key Decision Rationale
1. **Topic-level granularity** avoids 1MB limit while keeping related data together
2. **Section-scoped messages** enable efficient context loading for AI
3. **Denormalized summaries** optimize parent dashboard queries
4. **Subcollections for sessions** enable future pagination without restructuring

---

## 1. Data Volume Analysis

### Message Volume (Learn Mode)

Based on codebase analysis:

**Per Section:**
- Average: 25-30 messages
- Minimum: 12-15 messages (all correct first try)
- Maximum: 35-50 messages (struggling, multiple hints)
- Avg size per message: 0.52 KB
- **Total per section: ~13-15 KB**

**Per Topic:**
- Typical: 6 sections × 25 messages = 150 messages
- Size: 150 × 0.52 KB = **~78 KB per topic**
- With metadata: **~80-100 KB per topic**

**Per Student (Academic Year):**
- Conservative: 10 topics = 1,000-1,500 messages = **~800 KB - 1 MB**
- Active: 25 topics = 2,500-3,750 messages = **~2-3 MB**
- Heavy: 50 topics = 5,000-7,500 messages = **~4-6 MB**

### Practice Mode Volume

**Per Path:**
- NodeProgress: 15 nodes × 80 bytes = 1.2 KB
- DailyStreak: 200 bytes
- Achievements: 500-800 bytes
- SessionHistory (30 days): 1-2 KB
- **Total per path: ~3-5 KB**

**Per Student:**
- 10 practice paths = **30-50 KB**
- 25 practice paths = **75-125 KB**

### Total Per-Student Data
- **Year 1 (active student):** 3-4 MB conversations + 50-75 KB practice = **~3-4 MB**
- **4-year student:** 12-16 MB conversations + 200-300 KB practice = **~12-16 MB**

### Firestore 1MB Document Limit Analysis

**Current Structure Risk:**
- Single document per user → Hits 1MB limit after ~10-15 topics
- ❌ **FAILS** for active students within 1 semester

**Recommended Structure:**
- One document per topic → 80-100 KB each
- ✅ **SAFE** - Would need 1,200+ messages in ONE topic to hit limit

---

## 2. Collection Architecture Options

### Option A: Flat Structure (Current - NOT RECOMMENDED)

```
firestore/
└── progress/
    └── {userId}  ← ONE DOCUMENT
        ├── conversationState (only 1 topic)
        ├── practiceState (all categories)
        └── settings
```

**Pros:**
- Simple to implement
- Single read/write per operation
- Easy to reason about

**Cons:**
- ❌ **Hits 1MB limit** after 10-15 topics
- ❌ Only ONE active conversation saved
- ❌ Cannot resume multiple topics
- ❌ Inefficient - must read ALL data for any update
- ❌ Poor parent queries - must load entire student data

**Verdict:** ❌ **NOT SCALABLE - Do not use**

---

### Option B: Topic-Based Subcollections

```
firestore/
└── users/
    └── {userId}/
        ├── profile: {...}              ← User info, settings
        ├── progressSummary: {...}      ← Lightweight metadata
        │
        ├── /learn/                     ← SUBCOLLECTION
        │   └── {subtopicId}/           ← e.g., "s3-math-trigonometry-basic-ratios"
        │       ├── conversation: {     ← 80-100 KB per doc
        │       │   messages: Message[]
        │       │   sectionProgress: {...}
        │       │   sessionStats: {...}
        │       │}
        │       └── /sessions/          ← Optional: future pagination
        │           └── {sessionId}
        │
        └── /practice/                  ← SUBCOLLECTION
            └── {topicId}/              ← e.g., "s3-math-trigonometry" (topic level)
                ├── progress: {         ← 3-5 KB per doc
                │   nodes: {...}
                │   totalXP: number
                │   streak: {...}
                │}
                └── /sessions/          ← Optional: detailed history
                    └── {sessionId}
```

**Pros:**
- ✅ Scales indefinitely (no 1MB limit per user)
- ✅ Efficient queries - read only what you need
- ✅ Multiple active conversations
- ✅ Natural data boundaries (topic, category)

**Cons:**
- ⚠️ Parent queries require multiple reads (one per topic)
- ⚠️ More complex service layer
- ⚠️ Slightly higher read costs for "load all progress"

**Query Examples:**
```typescript
// Student: Load specific subtopic (Learn mode)
doc(firestore, `users/${uid}/learn/${subtopicId}`)
// Example: users/uid123/learn/s3-math-trigonometry-basic-ratios/conversation

// Student: Load practice for topic
doc(firestore, `users/${uid}/practice/${topicId}/progress`)
// Example: users/uid123/practice/s3-math-trigonometry/progress

// Student: List all learn subtopics
collection(firestore, `users/${uid}/learn`)

// Parent: Load child's all subtopics (EXPENSIVE)
collection(firestore, `users/${childId}/learn`)  // N reads
```

**Verdict:** ✅ **GOOD - Scalable but parent queries are expensive**

---

### Option C: Hierarchical with Sessions (Most Granular)

```
firestore/
└── users/
    └── {userId}/
        ├── profile: {...}
        ├── progressSummary: {...}
        │
        ├── /learn/
        │   └── {subtopicId}/           ← e.g., "s3-math-trigonometry-basic-ratios"
        │       ├── metadata: {         ← Lightweight (1-2 KB)
        │       │   subtopicId, startedAt, lastActive
        │       │   sectionProgress: {...}
        │       │}
        │       └── /sections/          ← SUBCOLLECTION
        │           └── {sectionId}/
        │               └── messages: Message[]  ← 13-15 KB per doc
        │
        └── /practice/
            └── {topicId}/              ← e.g., "s3-math-trigonometry"
                ├── metadata: {...}
                └── /nodes/             ← SUBCOLLECTION
                    └── {nodeId}: {...}
```

**Pros:**
- ✅ Maximum granularity - never hits limits
- ✅ Perfect for pagination (load sections on demand)
- ✅ Optimal for large-scale analytics

**Cons:**
- ❌ **Overly complex** for current needs
- ❌ Many small reads increase costs
- ❌ Harder to maintain consistency
- ❌ Parent queries even more expensive

**Verdict:** ⚠️ **OVER-ENGINEERED - Unnecessary complexity for current scale**

---

### Option D: Hybrid Model (RECOMMENDED)

```
firestore/
└── users/
    └── {userId}/
        ├── profile: {                  ← User info (1-2 KB)
        │   email, displayName, role,
        │   settings: {
        │     ttsSpeaker, theme, audioEnabled
        │   }
        │}
        │
        ├── progressSummary: {          ← DENORMALIZED for parent queries (5-10 KB)
        │   totalTopicsStarted: number
        │   totalTopicsCompleted: number
        │   totalProblemsCorrect: number
        │   totalTimeSpentSeconds: number
        │   currentLevel: number
        │   totalXP: number
        │
        │   // Quick subtopic list for parent dashboard (Learn mode)
        │   learnSubtopics: {
        │     [subtopicId]: {           // e.g., "s3-math-trigonometry-basic-ratios"
        │       displayName: string
        │       topicId: string         // Parent topic: "s3-math-trigonometry"
        │       grade: string
        │       progress: number        // 0-100% (sections completed)
        │       lastActive: timestamp
        │       problemsCorrect: number
        │       timeSpent: number
        │     }
        │   }
        │
        │   // Practice summary (topic-level)
        │   practiceTopics: {
        │     [topicId]: {              // e.g., "s3-math-trigonometry"
        │       displayName: string
        │       nodesCompleted: number
        │       totalXP: number
        │       lastActive: timestamp
        │     }
        │   }
        │
        │   lastUpdated: timestamp
        │}
        │
        ├── /learn/                     ← SUBCOLLECTION
        │   └── {subtopicId}/           ← e.g., "s3-math-trigonometry-basic-ratios"
        │       └── conversation: {     ← 80-100 KB per subtopic
        │           subtopicId: string  // Full ID: "s3-math-trigonometry-basic-ratios"
        │           topicId: string     // Parent topic: "s3-math-trigonometry"
        │           categoryId: string  // Alias for topicId (deprecated, keep for compatibility)
        │
        │           // Full message history (section-scoped)
        │           messages: Message[]  // Each has sectionId
        │
        │           // Section progression (SOURCE OF TRUTH)
        │           sectionProgress: {
        │             currentSection: string
        │             masteredSections: string[]
        │             sectionHistory: SectionProgressEntry[]
        │           }
        │
        │           // Current problem state (transient)
        │           problemState?: {
        │             currentProblemId: string
        │             currentProblemText: string
        │             currentProblemType: number
        │             hintsProvided: number
        │             attempts: number
        │           }
        │
        │           // Session stats
        │           sessionStats: {
        │             problemsAttempted: number
        │             correctAnswers: number
        │             hintsProvided: number
        │             startTime: timestamp
        │             totalTimeSpent: number
        │           }
        │
        │           // Student learning profile
        │           studentProfile: {
        │             strugglingWith: string[]
        │             preferredMethod: string
        │             confidenceLevel: number
        │           }
        │
        │           lastUpdated: timestamp
        │           createdAt: timestamp
        │       }
        │
        └── /practice/                  ← SUBCOLLECTION
            └── {topicId}/              ← e.g., "s3-math-trigonometry" (topic level, not subtopic)
                └── progress: {         ← 3-5 KB per topic
                    topicId: string     // Topic ID: "s3-math-trigonometry"
                    displayName: string // e.g., "Trigonometry"
                    currentNodeId: string
                    currentCycle: number

                    // Node progress
                    nodes: {
                      [nodeId]: {
                        nodeId: string
                        problemsAttempted: number
                        problemsCorrect: number
                        status: 'locked' | 'current' | 'completed'
                        completedAt?: timestamp
                        timeSpentSeconds: number
                      }
                    }

                    // Layer progress
                    layerProgress: {...}

                    // Gamification
                    totalXP: number
                    currentLevel: number
                    streak: DailyStreak
                    achievements: Achievement[]
                    sessionHistory: SessionStats[]  // Last 30 days

                    totalProblemsAttempted: number
                    totalProblemsCorrect: number
                    totalTimeSpentSeconds: number

                    lastUpdated: timestamp
                    createdAt: timestamp
                }
```

**Key Features:**

1. **Denormalized Summary** (`progressSummary`):
   - Single-read parent dashboard (no need to load all topics)
   - Updated asynchronously when topic/practice progress changes
   - Trade-off: Slightly stale (1-2 seconds lag) vs. huge read cost savings

2. **Topic-Level Granularity**:
   - Each conversation is independent (80-100 KB)
   - Can load/save individual topics efficiently
   - Room to grow (1,200+ messages per topic before limit)

3. **Section-Scoped Messages**:
   - Messages tagged with `sectionId`
   - AI context uses last 6 messages filtered by current section
   - Maintains conversation continuity per section

4. **Future-Proof Subcollections**:
   - `/sessions/` subcollection can be added later for pagination
   - Can move old messages to sessions without breaking queries

**Pros:**
- ✅ **Scalable** - No 1MB limit issues
- ✅ **Parent-optimized** - Single read for dashboard
- ✅ **Efficient student queries** - Load only active topic
- ✅ **Multiple conversations** - Switch topics without loss
- ✅ **Balanced complexity** - Not too simple, not over-engineered
- ✅ **Eventual consistency OK** - Summary can lag slightly

**Cons:**
- ⚠️ Denormalization overhead - Must update 2 docs per save
- ⚠️ Slightly more complex service layer
- ⚠️ Summary can be stale (1-2 seconds)

**Verdict:** ✅✅ **HIGHLY RECOMMENDED - Best balance for requirements**

---

## 3. Data Models & TypeScript Interfaces

### User Profile

```typescript
interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  role: 'student' | 'parent' | 'admin';

  // Settings
  settings: {
    ttsSpeaker: string;
    theme: 'light' | 'dark';
    audioEnabled: boolean;
  };

  // Account metadata
  createdAt: Timestamp;
  lastLoginAt: Timestamp;

  // Parent-child relationships (for parent accounts)
  children?: string[];  // Array of child UIDs

  // Child-parent relationships (for student accounts)
  parents?: string[];   // Array of parent UIDs
}
```

**Firestore Path:** `users/{userId}/profile`

---

### Progress Summary (Denormalized)

```typescript
interface ProgressSummary {
  uid: string;

  // Overall stats
  totalTopicsStarted: number;
  totalTopicsCompleted: number;
  totalProblemsCorrect: number;
  totalTimeSpentSeconds: number;
  currentLevel: number;
  totalXP: number;

  // Learn mode summary (for parent dashboard) - subtopic level
  learnSubtopics: {
    [subtopicId: string]: {         // e.g., "s3-math-trigonometry-basic-ratios"
      displayName: string;          // e.g., "Basic Ratios"
      topicId: string;              // Parent topic: "s3-math-trigonometry"
      grade: string;                // e.g., "Secondary 3"
      progress: number;             // 0-100% (sections completed)
      lastActive: Timestamp;
      problemsCorrect: number;
      timeSpent: number;            // seconds
      sectionsCompleted: number;
      totalSections: number;
    }
  };

  // Practice mode summary - topic level
  practiceTopics: {
    [topicId: string]: {            // e.g., "s3-math-trigonometry"
      displayName: string;          // e.g., "Trigonometry"
      nodesCompleted: number;
      totalNodes: number;
      totalXP: number;
      currentLevel: number;
      lastActive: Timestamp;
    }
  };

  // Recent activity (for dashboard)
  recentActivity: {
    date: string;                     // ISO date
    topicId?: string;
    category?: string;
    activityType: 'learn' | 'practice';
    problemsSolved: number;
    timeSpent: number;
  }[];

  lastUpdated: Timestamp;
}
```

**Firestore Path:** `users/{userId}/progressSummary`

**Update Strategy:**
- Update asynchronously after each topic/practice save
- Use batched writes to update both conversation + summary
- Acceptable to be 1-2 seconds stale (parent dashboards don't need real-time)

---

### Learn Mode Conversation

```typescript
interface LearnConversation {
  // Subtopic identification
  subtopicId: string;                 // Full subtopic ID: "s3-math-trigonometry-basic-ratios"
  topicId: string;                    // Parent topic: "s3-math-trigonometry"
  categoryId: string;                 // Alias for topicId (deprecated, keep for compatibility)
  grade: string;                      // e.g., "Secondary 3"
  displayName: string;                // e.g., "Basic Ratios"

  // Full message history (section-scoped)
  messages: Message[];                // Each has sectionId

  // Section progression (SOURCE OF TRUTH)
  sectionProgress: {
    currentSection: string;           // Current active section ID
    masteredSections: string[];       // Array of completed section IDs
    sectionHistory: {
      sectionId: string;
      enteredAt: Timestamp;
      masteredAt: Timestamp | null;
      questionsAttempted: number;
      questionsCorrect: number;
      hintsUsed: number;
    }[];
  };

  // Current problem state (transient - resets with each new problem)
  problemState?: {
    currentProblemId: string;
    currentProblemText: string;
    currentProblemType: number;       // 1=basic, 2=intermediate, 3=advanced
    hintsProvided: number;
    attempts: number;
    mathTool?: string;                // Current visualization tool
  };

  // Session stats (cumulative across all sections)
  sessionStats: {
    problemsAttempted: number;
    correctAnswers: number;
    hintsProvided: number;
    startTime: Timestamp;
    totalTimeSpent: number;           // seconds
  };

  // Student learning profile (AI adaptation)
  studentProfile: {
    strugglingWith: string[];         // Concepts needing review
    preferredMethod: 'visual' | 'procedural' | 'conceptual' | null;
    confidenceLevel: number;          // 0-100
  };

  lastUpdated: Timestamp;
  createdAt: Timestamp;
}
```

**Firestore Path:** `users/{userId}/learn/{subtopicId}/conversation`

**Example:** `users/uid123/learn/s3-math-trigonometry-basic-ratios/conversation`

**Message Structure:**
```typescript
interface Message {
  id: string;
  role: 'tutor' | 'student';
  content: string;                    // Markdown + LaTeX
  timestamp: Timestamp;
  sectionId: string;                  // Links to section progression

  // Metadata
  metadata?: {
    problemType?: number;
    mathTool?: string;
    messageType?: 'hint' | 'solution' | 'celebration';
  };

  // Visualization data
  visualization?: VisualizationData;
}
```

---

### Practice Mode Progress

```typescript
interface PracticeProgress {
  topicId: string;                    // Topic ID: "s3-math-trigonometry"
  displayName: string;                // e.g., "Trigonometry"
  currentNodeId: string | null;       // Currently active node
  currentCycle: number;               // Which set of nodes (0 = first)

  // Node progress
  nodes: {
    [nodeId: string]: {
      nodeId: string;
      nodeNumber: number;
      title: string;
      layer: 'foundation' | 'integration' | 'application' | 'examPractice';
      problemsAttempted: number;
      problemsCorrect: number;
      status: 'locked' | 'current' | 'completed';
      completedAt?: Timestamp;
      timeSpentSeconds: number;
    }
  };

  // Layer progress tracking
  layerProgress: {
    foundation: { completed: number; total: number };
    integration: { completed: number; total: number };
    application: { completed: number; total: number };
    examPractice: { completed: number; total: number };
  };

  // Gamification
  totalXP: number;
  currentLevel: number;
  streak: {
    currentStreak: number;
    longestStreak: number;
    lastActivityDate: string;         // ISO date (YYYY-MM-DD)
    streakDates: string[];            // Last 30 days
  };
  achievements: {
    id: string;
    title: string;
    description: string;
    icon: string;
    earnedAt: Timestamp;
    xpReward: number;
  }[];
  sessionHistory: {
    date: string;                     // ISO date
    problemsSolved: number;
    timeSpentSeconds: number;
    xpEarned: number;
    accuracy: number;                 // 0-100%
  }[];

  // Aggregate stats
  totalProblemsAttempted: number;
  totalProblemsCorrect: number;
  totalTimeSpentSeconds: number;
  pathStartedAt: Timestamp;

  lastUpdated: Timestamp;
  createdAt: Timestamp;
}
```

**Firestore Path:** `users/{userId}/practice/{topicId}/progress`

**Example:** `users/uid123/practice/s3-math-trigonometry/progress`

---

## 4. Query Patterns & Performance

### Student Queries

#### Q1: Load Specific Subtopic (Learn Mode)
```typescript
// Single read - 80-100 KB
const subtopicId = 's3-math-trigonometry-basic-ratios';
const conversationRef = doc(firestore, `users/${uid}/learn/${subtopicId}`);
const snap = await getDoc(conversationRef);
```

**Performance:**
- 1 read operation
- ~80-100 KB data transfer
- Latency: 50-100ms (typical)

#### Q2: List All Subtopics (Learn Mode)
```typescript
// Multiple reads - one per subtopic
const learnRef = collection(firestore, `users/${uid}/learn`);
const q = query(learnRef, orderBy('lastUpdated', 'desc'));
const snap = await getDocs(q);
```

**Performance:**
- N read operations (where N = number of subtopics)
- For 10 subtopics: ~10 reads, ~800 KB - 1 MB
- Latency: 100-200ms

**Optimization:** Use `progressSummary.learnSubtopics` instead for dashboard view (1 read)

#### Q3: Load Practice Progress for Topic
```typescript
// Single read per topic
const topicId = 's3-math-trigonometry';
const progressRef = doc(firestore, `users/${uid}/practice/${topicId}/progress`);
const snap = await getDoc(progressRef);
```

**Performance:**
- 1 read operation
- ~3-5 KB data transfer
- Latency: 50-100ms

#### Q4: Get Student Dashboard Data
```typescript
// Single read - most efficient
const summaryRef = doc(firestore, `users/${uid}/progressSummary`);
const snap = await getDoc(summaryRef);
```

**Performance:**
- 1 read operation
- ~5-10 KB data transfer
- Latency: 50-100ms
- **Best for overview dashboards**

---

### Parent Queries

#### Q5: Load Child's Progress Summary (Parent Dashboard)
```typescript
// Single read - MOST EFFICIENT for parent dashboards
const summaryRef = doc(firestore, `users/${childUid}/progressSummary`);
const snap = await getDoc(summaryRef);

// Returns ALL subtopics (learnSubtopics) and practice topics (practiceTopics) in one read
```

**Performance:**
- 1 read operation (vs. 10-50 reads without denormalization)
- ~5-10 KB data transfer
- Latency: 50-100ms
- **✅ HUGE cost savings for parent dashboards**

#### Q6: Load Specific Child Subtopic (Detailed View)
```typescript
// Parent viewing child's specific conversation for a subtopic
const subtopicId = 's3-math-trigonometry-basic-ratios';
const conversationRef = doc(firestore, `users/${childUid}/learn/${subtopicId}/conversation`);
const snap = await getDoc(conversationRef);

// Security rule must verify parent-child relationship
```

**Performance:**
- 1 read operation
- ~80-100 KB data transfer
- Latency: 50-100ms

**Security:** Firestore rule checks `users/{childUid}/profile.parents` array

#### Q7: Load All Children's Summaries (Multi-Child Parent)
```typescript
// Batched reads for multiple children
const childUids = ['child1', 'child2', 'child3'];
const summaries = await Promise.all(
  childUids.map(childUid =>
    getDoc(doc(firestore, `users/${childUid}/progressSummary`))
  )
);
```

**Performance:**
- N read operations (where N = number of children)
- For 3 children: 3 reads, ~15-30 KB
- Latency: 100-150ms (parallel reads)

---

### Admin Queries (Future)

#### Q8: Get All Students in Grade (Analytics)
```typescript
// Requires composite index
const usersRef = collection(firestore, 'users');
const q = query(
  usersRef,
  where('role', '==', 'student'),
  where('profile.grade', '==', 'Secondary 3')
);
```

**Note:** For large-scale analytics, consider BigQuery export or Cloud Functions aggregation

---

## 5. Security Rules

### Firestore Security Rules Template

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    // Helper functions
    function isAuthenticated() {
      return request.auth != null;
    }

    function isOwner(userId) {
      return isAuthenticated() && request.auth.uid == userId;
    }

    function isParent(childId) {
      return isAuthenticated() &&
        exists(/databases/$(database)/documents/users/$(childId)/profile) &&
        get(/databases/$(database)/documents/users/$(childId)/profile).data.parents.hasAny([request.auth.uid]);
    }

    // Rate limiting helper - prevent rapid writes
    function rateLimit() {
      return request.time < resource.data.lastUpdated + duration.value(1, 's');
    }

    // Data validation helpers
    function validateProgressUpdate() {
      return request.resource.data.keys().hasAll(['lastUpdated', 'messages']) &&
             request.resource.data.messages is list &&
             request.resource.data.messages.size() < 1500; // Prevent abuse
    }

    function validateProfileUpdate() {
      return request.resource.data.keys().hasAll(['uid', 'email', 'displayName', 'role']) &&
             request.resource.data.role in ['student', 'parent', 'admin'];
    }

    // User profiles
    match /users/{userId} {
      // Profile document
      match /profile {
        allow read: if isOwner(userId) || isParent(userId);
        allow write: if isOwner(userId) && validateProfileUpdate();
      }

      // Progress summary
      match /progressSummary {
        allow read: if isOwner(userId) || isParent(userId);
        allow write: if isOwner(userId) && !rateLimit();
      }

      // Learn mode conversations
      match /learn/{subtopicId}/conversation {
        allow read: if isOwner(userId) || isParent(userId);
        allow write: if isOwner(userId) && validateProgressUpdate() && !rateLimit();
      }

      // Practice mode progress
      match /practice/{topicId}/progress {
        allow read: if isOwner(userId) || isParent(userId);
        allow write: if isOwner(userId) && !rateLimit();
      }
    }

    // Parent-child invites (existing)
    match /invites/{inviteId} {
      allow create: if isAuthenticated();
      allow read: if true;
      allow update: if isAuthenticated() &&
        (resource.data.fromUid == request.auth.uid ||
         request.resource.data.acceptedByUid == request.auth.uid);
      allow delete: if isAuthenticated() && resource.data.fromUid == request.auth.uid;
    }

    // Deny all other access
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

### Security Considerations

1. **Parent Access Verification:**
   - Always check `profile.parents` array before allowing parent read
   - Use `exists()` and `get()` to verify relationship
   - Cache relationship checks where possible

2. **Data Privacy:**
   - Students cannot read other students' data
   - Parents can ONLY read their own children's data
   - Admin access requires elevated privileges (handled separately)

3. **Write Protection:**
   - Students can ONLY write their own progress
   - Parents cannot modify child data (read-only access)
   - Prevents accidental or malicious data corruption

---

# ⚠️ ADVANCED SECTIONS (Not for MVP!)

**The following sections (6-13) contain enterprise-grade features for future reference.**
**Skip these for MVP and jump to Section 14 for the MVP roadmap.**

---

## 6. Data Consistency & Transactions [FUTURE REFERENCE]

### Transaction Strategy

Ensure atomic updates across conversation and summary documents:

```typescript
interface ConsistencyStrategy {
  // Use Firebase transactions for critical updates
  updateWithRetry: async (
    uid: string,
    subtopicId: string,
    conversationUpdate: LearnConversation,
    summaryData: Partial<ProgressSummary>
  ) => {
    const maxRetries = 3;
    let attempt = 0;

    while (attempt < maxRetries) {
      try {
        return await runTransaction(firestore, async (transaction) => {
          // Read existing summary
          const summaryRef = doc(firestore, `users/${uid}/progressSummary`);
          const summarySnap = await transaction.get(summaryRef);

          // Calculate new summary data
          const existingSummary = summarySnap.exists() ? summarySnap.data() : {};
          const newSummary = {
            ...existingSummary,
            ...summaryData,
            learnSubtopics: {
              ...existingSummary.learnSubtopics,
              [subtopicId]: summaryData.learnSubtopics[subtopicId]
            },
            lastUpdated: serverTimestamp()
          };

          // Write both documents in transaction
          const conversationRef = doc(firestore, `users/${uid}/learn/${subtopicId}`);
          transaction.set(conversationRef, conversationUpdate);
          transaction.set(summaryRef, newSummary, { merge: true });
        });
      } catch (error) {
        attempt++;
        if (attempt >= maxRetries) throw error;
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
      }
    }
  }
}
```

### Conflict Resolution

```typescript
interface ConflictResolution {
  strategy: 'last-write-wins' | 'merge' | 'user-choice';

  mergeStrategy: {
    messages: 'append',  // Always append new messages
    progress: 'max',     // Take highest progress value
    stats: 'sum',        // Sum statistics
    metadata: 'latest'   // Use latest timestamp
  };

  detectConflicts: (local: ConversationState, remote: ConversationState) => boolean;
  resolveConflict: (local: ConversationState, remote: ConversationState) => ConversationState;
}
```

---

## 7. Backup & Recovery Strategy [FUTURE - Month 3+]

### Automated Backup System

```typescript
interface BackupStrategy {
  // Scheduled exports to Cloud Storage
  schedule: {
    frequency: 'daily',
    time: '02:00',  // 2 AM UTC
    retention: {
      daily: 7,      // Keep 7 daily backups
      weekly: 4,     // Keep 4 weekly backups
      monthly: 12    // Keep 12 monthly backups
    }
  };

  // Export configuration
  export: {
    format: 'firestore' | 'json',
    destination: 'gs://ai-campus-backups/${date}',
    collections: [
      'users/*/profile',
      'users/*/progressSummary',
      'users/*/learn/*',
      'users/*/practice/*'
    ],
    compression: 'gzip'
  };

  // Recovery procedures
  recovery: {
    pointInTimeRecovery: true,
    maxRecoveryTime: '4 hours',
    testFrequency: 'monthly'
  };
}
```

### Implementation with Firebase Admin SDK

```typescript
// Cloud Function for automated backup
export const scheduledBackup = functions.pubsub
  .schedule('0 2 * * *')  // Daily at 2 AM
  .timeZone('UTC')
  .onRun(async (context) => {
    const client = new firestore.v1.FirestoreAdminClient();
    const projectId = process.env.GCP_PROJECT;
    const timestamp = new Date().toISOString().split('T')[0];

    const outputUriPrefix = `gs://ai-campus-backups/${timestamp}`;

    const [operation] = await client.exportDocuments({
      name: client.databasePath(projectId, '(default)'),
      outputUriPrefix,
      collectionIds: []  // Empty = all collections
    });

    // Log operation for monitoring
    console.log(`Backup operation started: ${operation.name}`);
    return operation;
  });
```

---

## 8. Message Pagination & Archival [FUTURE - When Users Hit 300+ Messages]

### Pagination Thresholds

```typescript
interface PaginationStrategy {
  // Document size thresholds
  thresholds: {
    maxMessagesPerDocument: 500;      // ~260KB at 0.52KB per message
    warningThreshold: 400;            // Start monitoring
    archiveAfterMessages: 1000;       // Move to archive
    archiveAfterDays: 90;             // Time-based archival
  };

  // Archive structure
  archiveStructure: {
    path: 'users/{userId}/learn/{subtopicId}/archives/{archiveId}';
    compression: 'gzip';
    indexing: {
      byDate: true,
      bySection: true
    };
  };

  // Retrieval strategy
  retrieval: {
    defaultLoad: 'last-100-messages';
    lazyLoad: true;
    cacheStrategy: 'lru';
    maxCacheSize: '10MB';
  };
}
```

### Implementation Example

```typescript
async function archiveOldMessages(
  uid: string,
  subtopicId: string,
  conversation: LearnConversation
): Promise<void> {
  const ARCHIVE_THRESHOLD = 500;

  if (conversation.messages.length > ARCHIVE_THRESHOLD) {
    // Split messages
    const toArchive = conversation.messages.slice(0, -100);  // Keep last 100
    const toKeep = conversation.messages.slice(-100);

    // Create archive document
    const archiveId = `archive_${Date.now()}`;
    const archiveRef = doc(
      firestore,
      `users/${uid}/learn/${subtopicId}/archives/${archiveId}`
    );

    // Compress and store
    const compressed = gzip(JSON.stringify(toArchive));

    await runTransaction(firestore, async (transaction) => {
      // Save archive
      transaction.set(archiveRef, {
        messages: compressed,
        messageCount: toArchive.length,
        dateRange: {
          start: toArchive[0].timestamp,
          end: toArchive[toArchive.length - 1].timestamp
        },
        createdAt: serverTimestamp()
      });

      // Update conversation with remaining messages
      const conversationRef = doc(
        firestore,
        `users/${uid}/learn/${subtopicId}`
      );
      transaction.update(conversationRef, {
        messages: toKeep,
        hasArchives: true,
        archiveCount: increment(1)
      });
    });
  }
}
```

---

## 9. Performance Monitoring [FUTURE - 100+ Users]

### Metrics Collection

```typescript
interface PerformanceMetrics {
  // Real-time metrics
  realtime: {
    avgReadLatency: number;        // Target: <100ms
    avgWriteLatency: number;       // Target: <200ms
    p95ReadLatency: number;        // 95th percentile
    p95WriteLatency: number;
    errorRate: number;             // Target: <0.1%
  };

  // Daily aggregates
  daily: {
    totalReads: number;
    totalWrites: number;
    uniqueUsers: number;
    avgDocumentSize: number;
    costEstimate: number;
  };

  // Alerts
  alerts: {
    highLatency: { threshold: 500, unit: 'ms' };
    highErrorRate: { threshold: 1, unit: 'percent' };
    documentSizeWarning: { threshold: 800, unit: 'KB' };
    costWarning: { threshold: 100, unit: 'USD/month' };
  };
}
```

### Implementation with Cloud Monitoring

```typescript
// Track performance in service layer
class PerformanceMonitor {
  private metrics: Map<string, number[]> = new Map();

  async trackOperation<T>(
    operation: string,
    fn: () => Promise<T>
  ): Promise<T> {
    const start = performance.now();

    try {
      const result = await fn();
      const duration = performance.now() - start;

      this.recordMetric(`${operation}.latency`, duration);
      this.recordMetric(`${operation}.success`, 1);

      // Send to Cloud Monitoring if threshold exceeded
      if (duration > 500) {
        await this.sendAlert({
          operation,
          latency: duration,
          timestamp: new Date()
        });
      }

      return result;
    } catch (error) {
      this.recordMetric(`${operation}.error`, 1);
      throw error;
    }
  }

  private recordMetric(key: string, value: number) {
    if (!this.metrics.has(key)) {
      this.metrics.set(key, []);
    }
    this.metrics.get(key)!.push(value);

    // Flush metrics every 60 seconds
    this.scheduleFlush();
  }
}
```

---

## 10. Offline Support & Error Handling [PARTIAL MVP - Use Basic Version]

### Offline Configuration

```typescript
interface OfflineStrategy {
  // Enable Firestore offline persistence
  persistence: {
    enabled: true;
    cacheSizeBytes: 100 * 1024 * 1024;  // 100MB cache
    synchronizeTabs: true;               // Multi-tab support
  };

  // Conflict resolution
  conflictResolution: {
    strategy: 'last-write-wins';
    mergeableFields: ['messages', 'sectionProgress'];
    versionTracking: true;
  };

  // Sync queue management
  syncQueue: {
    maxPendingWrites: 50;
    priorityFields: ['progressSummary', 'currentSection'];
    retryStrategy: {
      maxRetries: 5,
      backoffMultiplier: 2,
      maxBackoffSeconds: 60
    };
  };

  // User feedback
  ui: {
    showOfflineIndicator: true;
    showSyncStatus: true;
    warnOnStaleData: '5 minutes';
  };
}
```

### Implementation

```typescript
// Initialize offline support
export async function initializeOfflineSupport() {
  try {
    await enableIndexedDbPersistence(firestore, {
      forceOwnership: false  // Allow multiple tabs
    });

    // Monitor connection state
    const connectedRef = ref(database, '.info/connected');
    onValue(connectedRef, (snapshot) => {
      const isOnline = snapshot.val() === true;
      updateUIConnectionState(isOnline);

      if (isOnline) {
        // Sync pending writes
        syncPendingWrites();
      }
    });

  } catch (err) {
    if (err.code === 'failed-precondition') {
      // Multiple tabs open, persistence can't be enabled
      console.warn('Offline persistence disabled: multiple tabs open');
    } else if (err.code === 'unimplemented') {
      // Browser doesn't support persistence
      console.warn('Offline persistence not available');
    }
  }
}

// Error handling with retry logic
export async function saveWithRetry(
  saveFunction: () => Promise<void>,
  options = { maxRetries: 3 }
): Promise<void> {
  let lastError: Error;

  for (let i = 0; i < options.maxRetries; i++) {
    try {
      await saveFunction();
      return;  // Success
    } catch (error) {
      lastError = error;

      // Don't retry on validation errors
      if (error.code === 'invalid-argument' ||
          error.code === 'permission-denied') {
        throw error;
      }

      // Exponential backoff
      const delay = Math.min(1000 * Math.pow(2, i), 10000);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  // All retries failed
  throw lastError;
}
```

---

## 11. GDPR & Privacy Compliance [FUTURE - EU Market or Required]

### Data Privacy Requirements

```typescript
interface PrivacyCompliance {
  // Data retention policies
  retention: {
    activeUserData: 'indefinite';  // While account active
    inactiveUserData: '2 years';   // After last login
    deletedUserData: '30 days';    // Soft delete period
    backups: '1 year';             // Backup retention
  };

  // User rights implementation
  userRights: {
    // Right to access (GDPR Article 15)
    dataExport: {
      format: 'json' | 'csv';
      includeAll: true;
      timeframe: '30 days';
    };

    // Right to erasure (GDPR Article 17)
    deletion: {
      softDeletePeriod: '30 days';
      hardDelete: true;
      cascadeDelete: ['profile', 'progress', 'messages'];
    };

    // Right to rectification (GDPR Article 16)
    modification: {
      allowedFields: ['displayName', 'email', 'settings'];
      auditLog: true;
    };

    // Right to portability (GDPR Article 20)
    portability: {
      formats: ['json', 'xml'];
      includeMetadata: true;
    };
  };

  // Consent management
  consent: {
    required: ['dataProcessing', 'analytics'];
    optional: ['marketing', 'research'];
    granular: true;
    withdrawable: true;
  };
}
```

### Implementation

```typescript
// Data export function
export async function exportUserData(uid: string): Promise<UserDataExport> {
  const batch = [];

  // Collect all user data
  const collections = [
    'profile',
    'progressSummary',
    'learn',
    'practice'
  ];

  for (const collection of collections) {
    const snapshot = await getDocs(
      collection(firestore, `users/${uid}/${collection}`)
    );

    snapshot.forEach(doc => {
      batch.push({
        collection,
        id: doc.id,
        data: doc.data(),
        metadata: {
          createdAt: doc.createTime,
          updatedAt: doc.updateTime
        }
      });
    });
  }

  return {
    exportDate: new Date(),
    userId: uid,
    data: batch,
    format: 'json',
    version: '1.0'
  };
}

// Data deletion with audit trail
export async function deleteUserData(
  uid: string,
  reason: string,
  immediate = false
): Promise<void> {
  const deletionRecord = {
    uid,
    reason,
    requestedAt: serverTimestamp(),
    scheduledDeletion: immediate ?
      serverTimestamp() :
      Timestamp.fromDate(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)),
    status: immediate ? 'completed' : 'pending'
  };

  // Record deletion request
  await setDoc(
    doc(firestore, `deletions/${uid}`),
    deletionRecord
  );

  if (immediate) {
    // Hard delete immediately
    await performHardDelete(uid);
  } else {
    // Mark for soft delete
    await updateDoc(
      doc(firestore, `users/${uid}/profile`),
      { deletionScheduled: deletionRecord.scheduledDeletion }
    );
  }

  // Audit log
  await addDoc(
    collection(firestore, 'auditLogs'),
    {
      action: 'USER_DELETION_REQUEST',
      uid,
      reason,
      timestamp: serverTimestamp(),
      immediate
    }
  );
}
```

---

## 12. Analytics Pipeline [FUTURE - Year 2]

### BigQuery Integration

```typescript
interface AnalyticsPipeline {
  // Streaming export to BigQuery
  streaming: {
    enabled: true;
    dataset: 'ai_campus_analytics';
    tables: {
      events: 'user_events';
      progress: 'learning_progress';
      performance: 'system_performance';
    };
    batchSize: 500;
    flushInterval: '60 seconds';
  };

  // Aggregated metrics
  aggregations: {
    hourly: ['activeUsers', 'messagesCreated', 'problemsSolved'];
    daily: ['newUsers', 'topicCompletions', 'avgSessionDuration'];
    weekly: ['retention', 'progressionRate', 'engagementScore'];
    monthly: ['churn', 'masteryRate', 'costPerUser'];
  };

  // Real-time dashboards
  dashboards: {
    student: ['progress', 'achievements', 'timeSpent'];
    parent: ['childProgress', 'activitySummary', 'comparisons'];
    admin: ['systemHealth', 'userMetrics', 'costAnalysis'];
  };
}
```

### Cloud Function for Analytics

```typescript
// Stream events to BigQuery
export const streamToBigQuery = functions.firestore
  .document('users/{userId}/learn/{subtopicId}/conversation')
  .onWrite(async (change, context) => {
    const { userId, subtopicId } = context.params;
    const before = change.before.data();
    const after = change.after.data();

    // Calculate metrics
    const event = {
      timestamp: new Date(),
      userId,
      subtopicId,
      eventType: !before ? 'created' : 'updated',
      messagesAdded: after?.messages.length - (before?.messages.length || 0),
      progressChange: after?.sectionProgress.masteredSections.length -
                     (before?.sectionProgress.masteredSections.length || 0),
      timeSpent: after?.sessionStats.totalTimeSpent -
                 (before?.sessionStats.totalTimeSpent || 0)
    };

    // Stream to BigQuery
    const bigquery = new BigQuery();
    const dataset = bigquery.dataset('ai_campus_analytics');
    const table = dataset.table('user_events');

    await table.insert([event]);
  });
```

---

## 13. Testing Strategy [SCALE BEYOND MVP]

### Comprehensive Test Plan

```typescript
interface TestingStrategy {
  // Unit tests
  unit: {
    coverage: '80%';
    frameworks: ['vitest', '@testing-library/react'];
    focus: ['services', 'utilities', 'components'];
  };

  // Integration tests
  integration: {
    coverage: '70%';
    focus: ['dataFlow', 'transactions', 'security'];
    tools: ['@firebase/testing', 'firestore-emulator'];
  };

  // Load testing
  load: {
    scenarios: {
      baseline: { users: 100, duration: '10 minutes' };
      stress: { users: 1000, duration: '30 minutes' };
      spike: { users: 5000, duration: '5 minutes' };
      endurance: { users: 500, duration: '2 hours' };
    };
    metrics: ['responseTime', 'errorRate', 'throughput'];
    tools: ['k6', 'artillery'];
  };

  // Data integrity tests
  integrity: {
    checks: [
      'parentChildRelationships',
      'progressConsistency',
      'messageOrdering',
      'summaryAccuracy'
    ];
    frequency: 'daily';
    automated: true;
  };
}
```

### Test Implementation Examples

```typescript
// Load test with k6
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '2m', target: 100 },  // Ramp up
    { duration: '5m', target: 100 },  // Stay at 100
    { duration: '2m', target: 1000 }, // Spike to 1000
    { duration: '5m', target: 1000 }, // Stay at 1000
    { duration: '2m', target: 0 },    // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'],  // 95% of requests under 500ms
    http_req_failed: ['rate<0.1'],     // Error rate under 10%
  },
};

export default function () {
  // Simulate student loading dashboard
  const res = http.get('https://api.ai-campus.com/progress');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });
  sleep(1);
}

// Data integrity test
describe('Progress Summary Integrity', () => {
  it('should maintain consistency between conversation and summary', async () => {
    const uid = 'test-user-123';
    const subtopicId = 's3-math-trigonometry-basic-ratios';

    // Save conversation
    await saveLearnProgress(uid, subtopicId, mockConversation);

    // Verify summary updated correctly
    const summary = await getDoc(doc(firestore, `users/${uid}/progressSummary`));
    const summaryData = summary.data();

    expect(summaryData.learnSubtopics[subtopicId]).toBeDefined();
    expect(summaryData.learnSubtopics[subtopicId].progress).toBe(
      calculateProgress(mockConversation.sectionProgress)
    );
    expect(summaryData.lastUpdated).toBeDefined();
  });
});
```

---

## MVP Implementation Roadmap (3 Weeks)

### Week 1: Core Data Structure ✅

**Monday-Tuesday:**
- [ ] Create basic TypeScript interfaces (2 hours)
- [ ] Set up Firestore in Firebase Console (30 min)
- [ ] Initialize Firestore in app with offline support (1 hour)

**Wednesday-Thursday:**
- [ ] Implement `saveLearnProgress()` function (2 hours)
- [ ] Implement `loadLearnProgress()` function (1 hour)
- [ ] Add simple retry logic (1 hour)

**Friday:**
- [ ] Test save/load with real data
- [ ] Verify offline mode works

---

### Week 2: Parent Dashboard & Security ✅

**Monday-Tuesday:**
- [ ] Deploy basic security rules (2 hours)
- [ ] Test security rules in Firebase Console

**Wednesday-Thursday:**
- [ ] Implement progress summary updates (3 hours)
- [ ] Create parent dashboard query (1 hour)

**Friday:**
- [ ] Integration testing
- [ ] Fix any issues found

---

### Week 3: Polish & Deploy ✅

**Monday-Tuesday:**
- [ ] Add error handling and user feedback
- [ ] Create simple test suite

**Wednesday-Thursday:**
- [ ] Test with 5-10 beta users
- [ ] Fix critical issues only

**Friday:**
- [ ] Deploy to production
- [ ] Monitor Firebase Console for errors

---

## 15. Scalability & Cost Analysis

### Cost Projections (Google Cloud Pricing)

**Firestore Pricing (as of 2025):**
- Document reads: $0.06 per 100,000 reads
- Document writes: $0.18 per 100,000 writes
- Stored data: $0.18 per GB/month
- Network egress: $0.12 per GB

---

### Scenario 1: 100 Active Students

**Learn Mode Usage:**
- 100 students × 10 topics/semester = 1,000 topics
- 1,000 topics × 100 KB = 100 MB storage
- Writes: 100 students × 100 writes/day × 30 days = 300,000 writes/month = **$0.54/month**
- Reads: 100 students × 50 reads/day × 30 days = 150,000 reads/month = **$0.09/month**

**Practice Mode Usage:**
- 100 students × 5 paths = 500 paths
- 500 paths × 5 KB = 2.5 MB storage
- Writes: 100 students × 30 writes/day × 30 days = 90,000 writes/month = **$0.16/month**
- Reads: 100 students × 20 reads/day × 30 days = 60,000 reads/month = **$0.04/month**

**Progress Summary:**
- 100 students × 10 KB = 1 MB storage
- Writes: 300,000 + 90,000 = 390,000 summary updates = **$0.70/month**
- Reads: Parent dashboards: 20 parents × 10 views/day × 30 days = 6,000 reads = **$0.004/month**

**Total Cost (100 Students):**
- **Writes: $1.40/month**
- **Reads: $0.13/month**
- **Storage: ~$0.02/month** (103.5 MB × $0.18/GB)
- **TOTAL: ~$1.55/month** (very affordable)

---

### Scenario 2: 1,000 Active Students

**Learn Mode:**
- 1,000 students × 10 topics = 10,000 topics
- Storage: 1 GB
- Writes: 3,000,000/month = **$5.40/month**
- Reads: 1,500,000/month = **$0.90/month**

**Practice Mode:**
- 1,000 students × 5 paths = 5,000 paths
- Storage: 25 MB
- Writes: 900,000/month = **$1.62/month**
- Reads: 600,000/month = **$0.36/month**

**Progress Summary:**
- Storage: 10 MB
- Writes: 3,900,000/month = **$7.02/month**
- Reads: 60,000/month = **$0.04/month**

**Total Cost (1,000 Students):**
- **Writes: $14.04/month**
- **Reads: $1.30/month**
- **Storage: ~$0.18/month**
- **TOTAL: ~$15.52/month**

**Per-student cost: $0.016/month** (very scalable)

---

### Scenario 3: 10,000 Active Students

**Extrapolated:**
- **Writes: $140/month**
- **Reads: $13/month**
- **Storage: ~$1.80/month**
- **TOTAL: ~$155/month**

**Per-student cost: $0.0155/month** (economies of scale)

---

### Cost Optimization Strategies

1. **Denormalized Summaries:**
   - Parent dashboards: 1 read instead of 10-50 reads
   - **Savings: 90-95% on parent queries**

2. **Batch Writes:**
   - Update conversation + summary in one transaction
   - Reduces write amplification

3. **Client-Side Caching:**
   - Cache `progressSummary` for 5 minutes
   - Reduces redundant reads

4. **Archive Old Messages:**
   - Move messages older than 6 months to Cloud Storage
   - Keep summaries in Firestore
   - **Savings: ~70% storage cost** (Cloud Storage is cheaper)

---

## 16. Migration Strategy (For Future Reference)

**Current State:** No existing data (clean start)

**Future Migration (if needed):**

If you ever need to restructure:

1. **Create New Collections:**
   - Deploy new structure alongside old
   - Use feature flags to test with subset of users

2. **Dual-Write Period:**
   - Write to both old and new structures
   - Validate consistency
   - Duration: 1-2 weeks

3. **Migration Script:**
   ```typescript
   // Pseudo-code
   async function migrateUser(userId: string) {
     // Read old flat structure
     const oldProgress = await getDoc(doc(firestore, `progress/${userId}`));

     // Transform to new structure
     const newProfile = transformProfile(oldProgress);
     const conversations = transformConversations(oldProgress);
     const practice = transformPractice(oldProgress);
     const summary = generateSummary(conversations, practice);

     // Write to new structure (batched)
     const batch = writeBatch(firestore);
     batch.set(doc(firestore, `users/${userId}/profile`), newProfile);
     batch.set(doc(firestore, `users/${userId}/progressSummary`), summary);
     conversations.forEach(conv => {
       batch.set(doc(firestore, `users/${userId}/learn/${conv.topicId}/conversation`), conv);
     });
     // ... etc

     await batch.commit();
   }
   ```

4. **Gradual Rollout:**
   - Migrate 10% users → validate
   - Migrate 50% users → validate
   - Migrate 100% users
   - Delete old structure after 30 days

---

## 17. Appendices

### Appendix A: Comparison Table

| Criterion | Option A (Flat) | Option B (Subcollections) | Option C (Granular) | Option D (Hybrid) ✅ |
|-----------|----------------|---------------------------|---------------------|---------------------|
| **Scalability** | ❌ Hits 1MB limit | ✅ Unlimited | ✅ Unlimited | ✅ Unlimited |
| **Parent Queries** | ⚠️ Expensive (1 read but all data) | ❌ Very expensive (N reads) | ❌ Extremely expensive | ✅ Efficient (denormalized) |
| **Student Queries** | ✅ Simple (1 read) | ✅ Efficient (1 read per topic) | ⚠️ Many small reads | ✅ Efficient (1 read per topic) |
| **Data Organization** | ❌ Single blob | ✅ Natural boundaries | ✅ Highly structured | ✅ Balanced structure |
| **Implementation Complexity** | ✅ Very simple | ⚠️ Moderate | ❌ Complex | ⚠️ Moderate |
| **Cost (1000 students)** | ⚠️ Moderate | ⚠️ Moderate | ❌ High (many reads) | ✅ Low (optimized) |
| **Future-Proof** | ❌ Not scalable | ✅ Yes | ✅ Yes | ✅ Yes |
| **Recommendation** | ❌ Do not use | ✅ Good alternative | ⚠️ Over-engineered | ✅✅ **RECOMMENDED** |

---

### Appendix B: Service Layer Code Snippets

#### MVP Version - Simple & Working

```typescript
// mvpProgressService.ts - Start with this!
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';

// Save with basic retry
export async function saveLearnProgress(
  uid: string,
  subtopicId: string,
  conversation: LearnConversation,
  retryCount = 0
): Promise<void> {
  try {
    // Save both documents
    const batch = writeBatch(firestore);

    // 1. Conversation document
    const convRef = doc(firestore, `users/${uid}/learn/${subtopicId}`);
    batch.set(convRef, conversation);

    // 2. Summary for parent dashboard
    const summaryRef = doc(firestore, `users/${uid}/progressSummary`);
    batch.set(summaryRef, {
      learnSubtopics: {
        [subtopicId]: {
          displayName: conversation.displayName,
          progress: Math.round(
            (conversation.sectionProgress.masteredSections.length / 6) * 100
          ),
          lastActive: serverTimestamp()
        }
      },
      lastUpdated: serverTimestamp()
    }, { merge: true });

    await batch.commit();
  } catch (error) {
    if (retryCount < 3) {
      await new Promise(r => setTimeout(r, 1000));
      return saveLearnProgress(uid, subtopicId, conversation, retryCount + 1);
    }
    throw error;
  }
}

// Load conversation
export async function loadLearnProgress(
  uid: string,
  subtopicId: string
): Promise<LearnConversation | null> {
  const convRef = doc(firestore, `users/${uid}/learn/${subtopicId}`);
  const snap = await getDoc(convRef);
  return snap.exists() ? snap.data() as LearnConversation : null;
}

// Parent dashboard - single read!
export async function getChildSummary(
  childUid: string
): Promise<ProgressSummary | null> {
  const summaryRef = doc(firestore, `users/${childUid}/progressSummary`);
  const snap = await getDoc(summaryRef);
  return snap.exists() ? snap.data() as ProgressSummary : null;
}
```

#### Future Enhancement - Optimized Version

```typescript
// optimizedProgressService.ts - Add this in Phase 2
// Includes debouncing, transactions, better error handling

const debouncedSummaryUpdate = debounce(async (uid, updates) => {
  // ... debounced update logic (see Future Enhancements section)
}, 5000);

// ... more advanced features when you need them
```

---

### Appendix C: Index Requirements

**Required Composite Indexes:**

```javascript
// users/{userId}/learn collection
// Index: lastUpdated DESC
// Query: Recent topics

// users/{userId}/practice/{category}/progress
// Index: lastUpdated DESC
// Query: Recent practice sessions
```

**Note:** These indexes are automatically created by Firestore on first query (no manual setup needed for simple queries)

---

## 18. Conclusion

### MVP Architecture Summary

**Start Simple, Stay Scalable:**
- ✅ Same Hybrid Model (Option D) - no future migrations needed
- ✅ Core features only - ship in 3 weeks
- ✅ ~200 lines of code for MVP
- ✅ $5-10/month for first 100 users
- ✅ Add features based on real usage, not speculation

### Immediate Next Steps (Week 1)

1. **Monday Morning:** Create Firebase project (30 min)
2. **Monday Afternoon:** Copy MVP code from this doc (2 hours)
3. **Tuesday:** Test save/load with real data (2 hours)
4. **Wednesday:** Implement progress summary (3 hours)
5. **Thursday:** Deploy security rules (1 hour)
6. **Friday:** Test everything end-to-end

### Success Metrics for MVP

- [ ] Can save and load conversations ✅
- [ ] Parent dashboard loads in one read ✅
- [ ] Works offline ✅
- [ ] Costs < $10/month ✅
- [ ] Ships in 3 weeks ✅

### What NOT to Worry About

- **1MB limit:** Won't hit it for months
- **Performance:** Firebase handles 1000s of users easily
- **Backups:** Do them manually weekly initially
- **Analytics:** Firebase Console shows enough
- **Compliance:** Add when you need it

**Remember:** The best architecture is the one that ships. Start with MVP, iterate based on real user feedback!

---

**Document Version:** 2.0
**Last Updated:** 2025-10-27
**Status:** MVP-Ready
**Estimated Implementation Time:** 3 weeks (MVP) + Future phases as needed

---

## 19. Future Enhancements (After MVP)

### Phase 2: Optimization (Months 2-3)
**Implement when you have 100+ active users:**

#### Message Pagination & Archival
```typescript
// Only needed when users have 300+ messages per topic
interface PaginationStrategy {
  maxMessagesPerDocument: 500;
  archiveAfterDays: 90;
  compression: 'gzip';
}
```

#### Performance Monitoring
- Use Firebase Performance Monitoring
- Set up custom traces for critical operations
- Create alerts for slow queries (>500ms)

#### Data Consistency with Transactions
```typescript
// Upgrade to transactions when seeing inconsistencies
await runTransaction(firestore, async (transaction) => {
  const summarySnap = await transaction.get(summaryRef);
  // ... update both documents atomically
});
```

---

### Phase 3: Scale & Compliance (Months 4-6)
**Implement when scaling beyond 1000 users:**

#### GDPR Compliance
- Data export functionality
- Right to deletion
- Audit logging
- Consent management

#### BigQuery Analytics Pipeline
- Stream events for custom analytics
- Create data warehousing
- Build custom dashboards

#### Automated Backups
- Daily exports to Cloud Storage
- Point-in-time recovery
- Disaster recovery procedures

#### Advanced Security
- Rate limiting
- Request validation
- Field-level security rules
- Fraud detection

---

### Phase 4: Enterprise Features (Year 2+)
**When you're a mature product:**

- Multi-tenancy support
- Advanced role-based access control
- Compliance certifications (SOC 2, ISO)
- SLA guarantees
- White-label capabilities
- API for third-party integrations

---

## Cost Optimization Tips

### When to Optimize Writes
- **Current:** 2 writes per save (conversation + summary)
- **Optimize when:** Monthly bill exceeds $50
- **Solution:** Debounce summary updates by 5 seconds

### When to Archive Messages
- **Current:** All messages in one document
- **Archive when:** Any user has 300+ messages
- **Solution:** Move old messages to subcollection

### When to Add Caching
- **Current:** Direct Firestore reads
- **Cache when:** Same data read >10 times/minute
- **Solution:** In-memory cache with 5-minute TTL

---

## Questions or Concerns?

This is a living document. Start with the MVP essentials and add features as you grow. Remember: **You probably won't need most of the advanced features for the first year!**

Focus on shipping, getting users, and iterating based on real feedback. Good luck! 🚀
