# Practice Module - Path-Based System

## Overview

Complete overhaul of the Practice module to implement an interactive learning path system with:
- **3 independent difficulty paths** (Easy, Medium, Hard)
- **Sequential stepping stones** (nodes) that unlock progressively
- **Category-level practice** (all subtopics combined, e.g., all of Trigonometry)
- **Simple, organic structure** that can evolve over time

## Design Philosophy

**Start Simple, Evolve Organically**
- No complex constraint systems initially
- Focus on sample problems as the core descriptor
- Add sophistication only when needed based on real usage

## Architecture

### Data Flow
```
HomePage → Topic Selection → ModeSelector
                                    ↓
                              Practice Selected
                                    ↓
                         PathSelectionView (Easy/Medium/Hard)
                                    ↓
                         PathMapView (10 stepping stones)
                                    ↓
                         NodePracticeView (solve 5-8 problems)
                                    ↓
                         pathProgressService (track, unlock next)
```

### Key Concepts

**Path**: A difficulty level (easy/medium/hard) containing 10 nodes
**Node**: A stepping stone with 5-8 problems to complete
**Node Descriptor**: Configuration telling AI how to generate problems
**Completion**: Attempting all problems in a node (not necessarily correct)

---

## ✅ Completed

### 1. Type System (`src/types/practice.ts`)

**Core Types:**
```typescript
PathDifficulty = 'easy' | 'medium' | 'hard'
PathNode - Individual stepping stone
NodeDescriptor - How to generate problems for a node
PathConfig - Full path configuration
PathProgress - User progress tracking
PracticePathState - Overall state for all 3 paths
PathProblem - Individual problem structure
```

**Key Design Decision:**
- `NodeDescriptor` uses **sample problems** as the primary pattern definition
- Simple subtopic weighting system
- Context themes for variation

### 2. YAML Path Configurations

**Location:** `curriculum-content/paths/s3-math-trigonometry/`

**Files Created:**
- `s3-math-trigonometry-easy.yaml` - 10 beginner nodes
- `s3-math-trigonometry-medium.yaml` - 10 intermediate nodes
- `s3-math-trigonometry-hard.yaml` - 10 advanced nodes

**Node Structure (Example):**
```yaml
- id: trig-easy-1
  nodeNumber: 1
  title: "Finding Missing Sides with Sine"
  problemsRequired: 5
  descriptor:
    subtopics:
      - id: s3-math-trigonometry-basic-ratios
        weight: 0.8
      - id: s3-math-trigonometry-problem-solving
        weight: 0.2

    sampleProblems:
      - "A ladder is 10m long and leans against a wall at 60°..."
      - "A kite is flying on a 50m string at 45°..."
      - "A wheelchair ramp is 8m long at 30° angle..."

    contexts:
      - ladders and walls
      - kites and strings
      - ramps and slopes

    difficulty: easy
```

**Coverage:**
- **Easy Path**: Basic ratios, simple word problems, finding angles
- **Medium Path**: Multi-step, indirect measurements, navigation basics
- **Hard Path**: Sine/cosine rules, ambiguous cases, 3D trigonometry

### 3. UI Components

#### PathSelectionView (`src/components/practice/PathSelectionView.tsx`)
**Purpose:** Choose Easy, Medium, or Hard path

**Features:**
- 3 path cards with visual distinction
- Color-coded by difficulty
- Feature lists per path
- Independent path selection

**Props:**
```typescript
category: string
onSelectPath: (difficulty: PathDifficulty) => void
onBack: () => void
```

#### PathMapView (`src/components/practice/PathMapView.tsx`)
**Purpose:** Visual stepping stones with playful design

**Features:**
- Vertical scrolling path with 10 nodes
- Node states: locked 🔒, current (in progress), completed ✓
- Progress bars per node (e.g., 3/5 problems)
- Connecting lines between nodes
- Overall progress stats in header

**Props:**
```typescript
category: string
difficulty: PathDifficulty
nodes: PathNode[]
progress: PathProgress
onSelectNode: (nodeId: string) => void
onBack: () => void
```

**Visual Design:**
- Locked nodes are dimmed, show 🔒
- Current node has colored border, shows progress bar
- Completed nodes show ✓ checkmark
- Hover effects on unlocked nodes

### 4. Cleanup

**Removed:**
- ✅ `PracticeInterface.tsx` (old implementation)
- ✅ `practiceBatchService.ts` (old batch system)
- ✅ `practiceSystemPrompts.ts` (old prompts)
- ✅ Old Practice types from `types.ts`

---

## 🚧 Pending Implementation

### 5. NodePracticeView Component

**Purpose:** Solve problems within a node

**Required Features:**
- Display current problem from node
- Input area for student answer
- Submit and evaluate answer
- Show hints when requested
- Display solution if needed
- Track progress (3/5 problems)
- Auto-advance to next problem
- Complete node when all problems attempted

**Props (Draft):**
```typescript
category: string
difficulty: PathDifficulty
node: PathNode
sessionState: NodeSessionState
onComplete: () => void
onBack: () => void
```

**UI Elements Needed:**
- Problem display area
- Answer input field
- Submit button
- Hint request button
- Solution display (step-by-step)
- Problem counter (3/5)
- Progress indicator

### 6. pathPracticeService

**Purpose:** AI-based problem generation using node descriptors

**Location:** `src/services/pathPracticeService.ts`

**Key Methods (Draft):**
```typescript
class PathPracticeService {
  // Generate problems for a node
  generateNodeProblems(
    node: PathNode,
    count: number
  ): Promise<PathProblem[]>

  // Evaluate student answer
  evaluateAnswer(
    problem: PathProblem,
    studentAnswer: string,
    hintsGiven: number
  ): Promise<EvaluationResult>

  // Generate hint
  generateHint(
    problem: PathProblem,
    hintLevel: number
  ): Promise<string>

  // Get solution
  getSolution(problem: PathProblem): Promise<SolutionData>
}
```

**AI Prompt Strategy:**
```
Generate problems similar to these samples:
[sampleProblems from node descriptor]

Use these contexts:
[contexts from node descriptor]

Sample from subtopics:
[subtopics with weights]

Difficulty: [easy/medium/hard]
```

**Critical Decision:**
- Use sample problems as the pattern template
- AI learns structure from examples
- Vary numbers and contexts, keep complexity similar

### 7. pathProgressService

**Purpose:** State management and progression logic

**Location:** `src/services/pathProgressService.ts`

**Key Methods (Draft):**
```typescript
class PathProgressService {
  // Load progress from localStorage
  loadPathProgress(category: string): PracticePathState

  // Save progress to localStorage
  savePathProgress(state: PracticePathState): void

  // Record problem attempt
  recordAttempt(
    pathProgress: PathProgress,
    nodeId: string,
    isCorrect: boolean
  ): void

  // Check if node is complete
  isNodeComplete(
    nodeProgress: NodeProgress,
    requiredProblems: number
  ): boolean

  // Unlock next node
  unlockNextNode(pathProgress: PathProgress): void

  // Initialize new path progress
  initializePathProgress(
    category: string,
    difficulty: PathDifficulty,
    nodes: PathNode[]
  ): PathProgress
}
```

**Storage Keys:**
```
practice_path_state_{category} → PracticePathState
```

**Unlock Logic:**
- Node 1 starts unlocked ('current')
- All others start locked
- When node X completes → unlock node X+1
- Completion = attempted all required problems

### 8. YAML Loader Service

**Purpose:** Load and parse YAML path configurations

**Location:** `src/services/pathConfigLoader.ts`

**Key Methods:**
```typescript
class PathConfigLoader {
  // Load path nodes from YAML
  async loadPathNodes(
    category: string,
    difficulty: PathDifficulty
  ): Promise<PathNode[]>

  // Cache loaded configs
  getCachedPath(category: string, difficulty: PathDifficulty): PathNode[] | null
}
```

**Implementation Notes:**
- Use js-yaml library for parsing
- Fetch YAML files from curriculum-content/paths/
- Cache in memory to avoid re-parsing
- Validate structure on load

### 9. App.tsx Routing Updates

**Required Changes:**

**Update AppState:**
```typescript
interface AppState {
  selectedCategory: string | null;
  selectedMode: 'socratic' | 'practice' | null;

  // NEW: Practice-specific state
  practiceState?: {
    selectedDifficulty: PathDifficulty | null;
    selectedNodeId: string | null;
  };
}
```

**Update Routing Logic:**
```typescript
// After mode selection
if (appState.selectedMode === 'practice') {
  if (!appState.practiceState?.selectedDifficulty) {
    return <PathSelectionView />
  }

  if (!appState.practiceState?.selectedNodeId) {
    return <PathMapView />
  }

  return <NodePracticeView />
}
```

**Context Handlers Needed:**
```typescript
handleDifficultySelect(difficulty: PathDifficulty)
handleNodeSelect(nodeId: string)
handleNodeComplete()
handleBackToPathMap()
handleBackToPathSelection()
```

### 10. ModeSelector Updates

**Current Issue:**
ModeSelector tries to create PracticeConfig which no longer exists

**Required Fix:**
```typescript
const handlePracticeMode = () => {
  // Just set mode, path selection happens next
  onModeSelect('practice');
};
```

Remove PracticeConfig creation logic.

---

## File Structure

```
src/
├── types/
│   └── practice.ts ✅              # All path-based types
│
├── components/
│   └── practice/
│       ├── PathSelectionView.tsx ✅   # Choose difficulty
│       ├── PathMapView.tsx ✅         # Visual stepping stones
│       └── NodePracticeView.tsx 🚧    # Solve problems
│
├── services/
│   ├── pathPracticeService.ts 🚧     # Problem generation
│   ├── pathProgressService.ts 🚧     # State management
│   └── pathConfigLoader.ts 🚧        # YAML loader
│
└── App.tsx 🚧                      # Routing updates

curriculum-content/
└── paths/
    └── s3-math-trigonometry/
        ├── s3-math-trigonometry-easy.yaml ✅
        ├── s3-math-trigonometry-medium.yaml ✅
        └── s3-math-trigonometry-hard.yaml ✅
```

**Legend:**
- ✅ Completed
- 🚧 Pending

---

## Next Steps (Priority Order)

### Phase 1: Services Foundation
1. **pathConfigLoader.ts** - Need to load YAML files
2. **pathProgressService.ts** - Basic state management
3. **pathPracticeService.ts** - Stub implementation (mock problems first)

### Phase 2: Integration
4. **App.tsx routing** - Wire up the flow
5. **ModeSelector fix** - Remove old PracticeConfig logic

### Phase 3: Problem Solving Interface
6. **NodePracticeView.tsx** - Build the UI
7. **AI integration** - Real problem generation
8. **Testing** - End-to-end flow

### Phase 4: Refinement
9. **Error handling** - Edge cases
10. **Loading states** - Better UX
11. **Persistence** - Ensure progress saves correctly

---

## Key Design Decisions

### 1. Sample Problems as Descriptors
**Rationale:** AI can learn patterns from examples better than abstract rules.

**Example:**
```yaml
sampleProblems:
  - "A ladder is 10m long at 60°. How high does it reach?"
  - "A kite on 50m string at 45°. What is the height?"
```
→ AI generates similar structure with different numbers/contexts

### 2. Independent Paths
**Rationale:** Students can choose challenge level. No forced progression across difficulties.

**Benefit:** Advanced students skip Easy, beginners stay comfortable.

### 3. Completion = Attempt (not Correct)
**Rationale:** Learning happens through attempting. Low pressure.

**Benefit:** Students see solutions, learn, and progress. Points still awarded for correct answers.

### 4. Category-Level Practice
**Rationale:** Real-world problems mix concepts. Better than isolated subtopic drills.

**Benefit:** More realistic, prevents siloed learning.

---

## Sample AI Prompts (Draft)

### Problem Generation
```typescript
const GENERATE_NODE_PROBLEMS = `
Generate ${count} practice problems for this learning node.

NODE: ${node.title}
DIFFICULTY: ${node.descriptor.difficulty}

SUBTOPICS TO SAMPLE FROM:
${node.descriptor.subtopics.map(s =>
  `- ${s.id} (${s.weight * 100}% probability)`
).join('\n')}

SAMPLE PROBLEMS (follow these patterns exactly):
${node.descriptor.sampleProblems.map((p, i) =>
  `${i+1}. ${p}`
).join('\n\n')}

CONTEXTS TO USE:
${node.descriptor.contexts.join(', ')}

INSTRUCTIONS:
- Generate problems with similar structure and difficulty to samples
- Vary contexts from the provided list
- Use different numbers but keep complexity similar
- Each problem should require 2-3 steps to solve
- Provide the correct answer

Return JSON array:
[
  {
    "problemText": "...",
    "correctAnswer": "...",
    "context": "...",
    "subtopicId": "..."
  }
]
`;
```

### Answer Evaluation
```typescript
const EVALUATE_ANSWER = `
Problem: ${problem.problemText}
Correct Answer: ${problem.correctAnswer}
Student Answer: ${studentAnswer}

Evaluate if the student's answer is correct.
Accept equivalent forms (e.g., 0.5 = 1/2).

Return JSON:
{
  "isCorrect": boolean,
  "feedback": "brief feedback message",
  "acceptedBecause": "why answer was accepted (if not exact match)"
}
`;
```

---

## Storage Schema

### LocalStorage Keys

```typescript
// Overall path state for a category
`practice_path_state_${category}` → PracticePathState

// Individual session for active node (temporary)
`practice_node_session_${nodeId}` → NodeSessionState
```

### PracticePathState Structure
```json
{
  "category": "trigonometry",
  "paths": {
    "easy": {
      "currentNodeId": "trig-easy-3",
      "currentCycle": 0,
      "nodes": {
        "trig-easy-1": { "status": "completed", "problemsAttempted": 5, "problemsCorrect": 4 },
        "trig-easy-2": { "status": "completed", "problemsAttempted": 5, "problemsCorrect": 5 },
        "trig-easy-3": { "status": "current", "problemsAttempted": 2, "problemsCorrect": 1 }
      },
      "totalProblemsAttempted": 12,
      "totalProblemsCorrect": 10,
      "pathStartedAt": "2025-10-10T14:30:00Z",
      "lastUpdated": "2025-10-10T15:45:00Z"
    },
    "medium": { /* ... */ },
    "hard": { /* ... */ }
  }
}
```

---

## Future Enhancements (Not Now)

### Cycle 2 (Future)
- Auto-generation of nodes 11-20 when cycle 0 complete
- AI analyzes performance to tailor next cycle
- Adaptive difficulty within cycles

### Advanced Features (Future)
- XP and rewards system
- Streaks and badges
- Leaderboards
- Problem bookmarking
- Review mode for completed nodes
- Time-based challenges
- Multiplayer races

### Hint System Enhancement (Future)
- Structured hint progression in descriptor
- Visual hints (diagrams)
- Adaptive hints based on common mistakes

---

## Dependencies Needed

**NPM Packages:**
```bash
npm install js-yaml @types/js-yaml
```

**For YAML parsing in browser:**
- Bundle YAML files or fetch as text and parse client-side
- Alternatively: Convert YAML to JSON at build time

---

## Testing Strategy

### Unit Tests
- `pathProgressService` - unlock logic, state updates
- `pathPracticeService` - problem generation, answer evaluation

### Integration Tests
- Full flow: Selection → Map → Practice → Completion
- Progress persistence across sessions
- Multi-path usage

### E2E Tests
- Complete a full node
- Switch between paths
- Reload page and resume

---

## Questions to Resolve

1. **YAML Loading:** Client-side fetch or build-time conversion to JSON?
2. **Problem Caching:** Cache generated problems or regenerate each time?
3. **Hint Levels:** 1-level hint or multi-level progression?
4. **Solution Display:** Text-only or include visualizations?
5. **Avatar Integration:** Should avatar speak in Practice mode?

---

## Success Criteria

✅ User can select a path and see visual stepping stones
✅ Nodes unlock sequentially
✅ Problems are generated based on sample patterns
✅ Progress persists across sessions
✅ All 3 paths work independently
✅ Completion triggers unlock of next node
✅ UI is smooth and engaging with playful path design

---

**Last Updated:** 2025-10-10
**Status:** Foundation Complete, Services Pending
**Next Task:** Implement pathConfigLoader.ts
