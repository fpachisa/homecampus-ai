# Step-by-Step Visualization Error Documentation

## Problem Summary
The step-by-step visualization feature in the AI tutoring system is not working correctly. Only the first step appears, and subsequent steps (2, 3, 4) never render. The component also experiences unmount/remount cycles that interrupt the progressive revelation timer mechanism.

## Expected Behavior
When a student gets an incorrect answer after 2+ hints, the system should:
1. Show a step-by-step solution with progressive revelation
2. Display step 1 immediately
3. After 2.5 seconds, reveal step 2
4. After another 2.5 seconds, reveal step 3
5. Continue until all steps are visible
6. Generate a new problem after all steps complete

## Current Behavior
- Only step 1 appears and becomes visible (`isVisible: true`)
- Steps 2, 3, 4 remain `isVisible: false` forever
- Component mounts, shows first step, then gets stuck
- ChatInterface re-renders constantly causing component instability
- New problem never generates after step-by-step completion

## Technical Context

### Architecture Overview
- **ChatInterface.tsx**: Main conversation container that manages AI agent flow
- **MessageBubble.tsx**: Individual message renderer that chooses between regular content and step-by-step visualization
- **StepByStepRenderer.tsx**: Progressive step revelation component with timer-based unveiling
- **AI Services**: Generate structured step data with intro/conclusion text and individual step objects

### Data Flow
1. Student submits incorrect answer after 2+ hints
2. Evaluator agent decides action: "GIVE_SOLUTION" with `includeVisualization: true`
3. Tutor agent generates step-by-step solution text
4. `extractStepByStepVisualizations()` parses solution into structured data:
   ```javascript
   {
     steps: [
       { stepNumber: 1, title: "Step 1: ...", content: "...", includeVisualization: true/false },
       { stepNumber: 2, title: "Step 2: ...", content: "...", includeVisualization: true/false },
       // ... more steps
     ],
     introText: "...",
     conclusionText: "..."
   }
   ```
5. ChatInterface adds message with structured visualization data
6. MessageBubble detects structured data and renders StepByStepRenderer
7. StepByStepRenderer should progressively reveal steps with 2.5s delays

## Key Files and Code Sections

### StepByStepRenderer.tsx (Lines 48-96)
**Progressive Revelation Logic:**
```javascript
useEffect(() => {
  if (steps.length === 0) return;

  // Show first step immediately
  if (visibleSteps.length === 0) {
    console.log('StepByStepRenderer: Showing first step');
    setVisibleSteps([0]);
    setCurrentStep(0);
    return;
  }

  // Continue showing next steps with delay
  if (currentStep < steps.length - 1) {
    console.log(`Setting timer for step ${currentStep + 1} in ${stepDelay}ms`);
    const timer = setTimeout(() => {
      const nextStep = currentStep + 1;
      console.log(`Revealing step ${nextStep}`);
      setVisibleSteps(prev => [...prev, nextStep]);
      setCurrentStep(nextStep);
    }, stepDelay);

    return () => clearTimeout(timer);
  } else {
    console.log('All steps visible');
    if (onComplete) onComplete();
  }
}, [currentStep, steps.length, stepDelay, onComplete]);
```

**Problem**: Timer for subsequent steps never fires due to component re-renders clearing the timeout.

### ChatInterface.tsx (Lines 459-467)
**Message Addition:**
```javascript
// STEP 7: Add tutor response with visualization data
console.log('🏃 ChatInterface: Adding step-by-step message to chat');
addMessage('tutor', tutorResponse, { difficulty: difficultyForExecution }, structuredVisualizationData);
console.log('✅ ChatInterface: Step-by-step message added');
```

**Problem**: `addMessage()` triggers state changes that cause constant re-renders.

### Console Log Pattern
```
StepByStepRenderer: Component MOUNTED
StepByStepRenderer: Showing first step
ChatInterface: Component re-rendered  // <- This causes issues
StepByStepRenderer: Component render  // Timer gets cleared here
```

## Attempted Solutions (All Failed)

### 1. Fixed Component Key Props ❌
**Attempt**: Added stable key to prevent React from unmounting component
```javascript
<StepByStepRenderer
  key={`steps-${message.id}`}  // Stable key
  structuredStepData={structuredStepData}
  stepDelay={2500}
/>
```
**Result**: Component still unmounts/remounts

### 2. Fixed useEffect Dependencies ❌
**Attempt**: Removed problematic dependencies causing infinite loops
```javascript
// Before: [currentStep, steps.length, stepDelay, visibleSteps.length]
// After: [currentStep, steps.length, stepDelay, onComplete]
```
**Result**: Still re-renders interrupt timers

### 3. Added Initial Render Skip Logic ❌
**Attempt**: Used `useRef` to skip reset on initial render
```javascript
const isInitialRender = useRef(true);
useEffect(() => {
  if (isInitialRender.current) {
    isInitialRender.current = false;
    return; // Skip reset
  }
  // Reset logic for new steps
}, [stepsId, lastStepsId]);
```
**Result**: Helps but doesn't solve core re-render issue

### 4. Delayed New Problem Generation ❌
**Attempt**: Added 11-second delay before generating new problem
```javascript
setTimeout(async () => {
  const newProblem = await aiService.current.generateQuestion(...);
  addMessage('tutor', newProblem, ...);
}, totalVisualizationTime);
```
**Result**: Terrible UX, component still unmounts before delay completes

### 5. Callback-Based New Problem Generation ❌
**Attempt**: Used onComplete callback from StepByStepRenderer
```javascript
const handleStepByStepComplete = useCallback(async () => {
  // Generate new problem after all steps complete
}, []);

<StepByStepRenderer onComplete={handleStepByStepComplete} />
```
**Result**: Callback never fires because steps 2-4 never appear

### 6. useRef Instead of useState ❌
**Attempt**: Avoided re-renders by using ref for pending problem data
```javascript
const pendingNewProblemRef = useRef(null);
// No setState, just ref updates
```
**Result**: Reduces some re-renders but core issue persists

### 7. Disabled React StrictMode ❌
**Attempt**: Removed `<StrictMode>` wrapper to prevent double mounting
```javascript
// Before: <StrictMode><App /></StrictMode>
// After: <App />
```
**Result**: Eliminates double mounting but ChatInterface still re-renders constantly

### 8. Centralized Prompt Management ✅ (Different Issue)
**Attempt**: Fixed DRY violation by centralizing duplicated prompts
- Moved 80+ line prompt from both `geminiService.ts` and `claudeService.ts` to `systemPrompts.ts`
- Extended `PromptResolver` with `resolveStepByStepVisualizationExtraction()`
**Result**: Successfully eliminated code duplication, but doesn't fix visualization issue

## Current Debug Output

### What We See:
```
🎬 ChatInterface: Setting up step-by-step completion callback
🏃 ChatInterface: Adding step-by-step message to chat
✅ ChatInterface: Step-by-step message added
🔄 ChatInterface: Component re-rendered  // <- Problem starts here
StepByStepRenderer: Component MOUNTED
StepByStepRenderer: Showing first step
StepByStepRenderer: Step 0 {isVisible: true, ...}  // Only this step ever shows
StepByStepRenderer: Step 1 {isVisible: false, ...} // Never becomes true
StepByStepRenderer: Step 2 {isVisible: false, ...} // Never becomes true
StepByStepRenderer: Step 3 {isVisible: false, ...} // Never becomes true
```

### What's Missing:
- No timer logs for subsequent steps: `Setting timer for step 2 in 2500ms`
- No step revelation logs: `Revealing step 2`
- No completion callback: `All steps visible`
- No onComplete execution

## Root Cause Analysis

The core issue appears to be that **ChatInterface is constantly re-rendering** after adding the step-by-step message. Each re-render causes StepByStepRenderer to re-mount or reset its internal state, clearing the `setTimeout` timer that should reveal the next step.

### Evidence:
1. Console shows `🔄 ChatInterface: Component re-rendered` immediately after message addition
2. StepByStepRenderer re-renders multiple times but timer for step 2 never fires
3. Only step 1 (`visibleSteps: [0]`) ever becomes visible
4. Component state gets reset before setTimeout(2500ms) can execute

### Suspected Triggers:
- `addMessage()` function creating new state references
- `setState()` calls in rapid succession
- useEffect dependencies causing cascading updates
- Session persistence auto-save triggering re-renders
- Progress saving mechanism triggering state updates

## Files Requiring Investigation

### Primary Suspects:
1. **ChatInterface.tsx** - Identify what causes constant re-renders after `addMessage()`
2. **StepByStepRenderer.tsx** - Why setTimeout timers get cleared/lost
3. **useSessionPersistence.ts** - Auto-save might trigger re-renders
4. **progressService.ts** - Progress updates might cause state changes

### Secondary Files:
- **MessageBubble.tsx** - Type guards and conditional rendering
- **sessionStorage.ts** - Session state management
- **aiService implementations** - State updates from AI responses

## Reproduction Steps
1. Start app: `npm run dev`
2. Navigate to http://localhost:5176/
3. Submit an incorrect answer
4. Submit another incorrect answer (to trigger hint)
5. Submit third incorrect answer (to trigger solution with visualization)
6. Observe: Only step 1 appears, steps 2-4 never show
7. Observe: No new problem generates after timeout

## Environment
- React 19+ with TypeScript
- Vite 7.x build tool
- Node.js development environment
- Browser: Chrome/Safari (tested both)

## Next Steps for Investigation
1. **Profile React re-renders**: Use React DevTools Profiler to identify what components re-render when
2. **Add comprehensive logging**: Track every state change in ChatInterface to find the trigger
3. **Isolate StepByStepRenderer**: Test component in isolation with mock data
4. **Review useState/useEffect patterns**: Look for anti-patterns causing cascading updates
5. **Check session persistence**: Disable auto-save temporarily to test impact

The issue is critical for the learning experience as students never see the complete step-by-step solution, defeating the educational purpose of the Socratic tutoring method.