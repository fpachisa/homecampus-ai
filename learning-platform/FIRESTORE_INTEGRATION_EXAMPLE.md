# Firestore Integration Example

This is a practical example showing how to integrate Firestore progress saving into your existing Learn component.

## Quick Start

### 1. Import the Service Functions

```typescript
import {
  saveLearnProgress,
  loadLearnProgress,
  conversationStateToFirestore,
  conversationStateFromFirestore
} from '../services/firestoreProgressService';
```

### 2. Add to Your Learn Component

Here's how to add Firestore to your existing Learn component (e.g., `TrigonometryTopicView.tsx`):

```typescript
// Inside your component:
const [conversationState, setConversationState] = useState<ConversationState>({
  messages: [],
  currentProblemType: 1,
  sessionStats: { /* ... */ },
  studentProfile: { /* ... */ }
});

const [sectionProgress, setSectionProgress] = useState<SectionProgressState>({
  currentSection: 'introduction',
  masteredSections: [],
  sectionHistory: []
});

// Get user ID from your auth context
const userId = auth.currentUser?.uid;

// Subtopic info (from your curriculum)
const subtopicId = 's3-math-trigonometry-basic-ratios';
const topicId = 's3-math-trigonometry';
const displayName = 'Basic Ratios';
const grade = 'Secondary 3';
```

### 3. Load Progress on Component Mount

```typescript
useEffect(() => {
  const loadExistingProgress = async () => {
    if (!userId) return;

    try {
      const loaded = await loadLearnProgress(userId, subtopicId);

      if (loaded) {
        // User has existing progress - restore it
        const { conversationState: loadedState, sectionProgress: loadedSection } =
          conversationStateFromFirestore(loaded);

        setConversationState(loadedState);
        setSectionProgress(loadedSection);

        console.log('✅ Progress loaded from Firestore');
      } else {
        // New user - start fresh
        console.log('🆕 Starting new session');
      }
    } catch (error) {
      console.error('Failed to load progress:', error);
      // Continue with fresh state on error
    }
  };

  loadExistingProgress();
}, [userId, subtopicId]);
```

### 4. Save Progress After Each Interaction

```typescript
const handleSendMessage = async (userMessage: string) => {
  // Your existing message handling logic
  const newMessages = [...conversationState.messages, {
    id: crypto.randomUUID(),
    role: 'student',
    content: userMessage,
    timestamp: new Date(),
    sectionId: sectionProgress.currentSection
  }];

  // Get AI response (your existing logic)
  const aiResponse = await getAIResponse(userMessage);

  // Update state
  const updatedState = {
    ...conversationState,
    messages: [...newMessages, aiResponse]
  };

  setConversationState(updatedState);

  // 💾 SAVE TO FIRESTORE
  if (userId) {
    try {
      const firestoreConv = conversationStateToFirestore(
        updatedState,
        subtopicId,
        topicId,
        displayName,
        grade,
        sectionProgress  // Pass current section progress
      );

      await saveLearnProgress(userId, subtopicId, firestoreConv);
      console.log('✅ Progress saved to Firestore');
    } catch (error) {
      console.error('Failed to save progress:', error);
      // Don't block UI on save failure - it will retry
    }
  }
};
```

### 5. Save When Section Progress Changes

```typescript
useEffect(() => {
  // Save whenever section progress updates
  const saveProgressUpdate = async () => {
    if (!userId || conversationState.messages.length === 0) return;

    try {
      const firestoreConv = conversationStateToFirestore(
        conversationState,
        subtopicId,
        topicId,
        displayName,
        grade,
        sectionProgress
      );

      await saveLearnProgress(userId, subtopicId, firestoreConv);
      console.log('✅ Section progress saved');
    } catch (error) {
      console.error('Failed to save section progress:', error);
    }
  };

  saveProgressUpdate();
}, [sectionProgress.currentSection, sectionProgress.masteredSections.length]);
```

## Full Example: TrigonometryTopicView.tsx

```typescript
import React, { useState, useEffect } from 'react';
import { auth } from '../services/firebase';
import {
  saveLearnProgress,
  loadLearnProgress,
  conversationStateToFirestore,
  conversationStateFromFirestore
} from '../services/firestoreProgressService';
import type { ConversationState, SectionProgressState } from '../types/types';

export const TrigonometryTopicView: React.FC = () => {
  // State
  const [conversationState, setConversationState] = useState<ConversationState>({
    messages: [],
    currentProblemType: 1,
    sessionStats: {
      problemsAttempted: 0,
      correctAnswers: 0,
      hintsProvided: 0,
      startTime: new Date()
    },
    studentProfile: {
      strugglingWith: [],
      preferredMethod: null,
      confidenceLevel: 50
    }
  });

  const [sectionProgress, setSectionProgress] = useState<SectionProgressState>({
    currentSection: 'introduction',
    masteredSections: [],
    sectionHistory: []
  });

  const [loading, setLoading] = useState(true);

  // Constants
  const userId = auth.currentUser?.uid;
  const subtopicId = 's3-math-trigonometry-basic-ratios';
  const topicId = 's3-math-trigonometry';
  const displayName = 'Basic Ratios';
  const grade = 'Secondary 3';

  // Load progress on mount
  useEffect(() => {
    const loadProgress = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }

      try {
        const loaded = await loadLearnProgress(userId, subtopicId);

        if (loaded) {
          const { conversationState: loadedState, sectionProgress: loadedSection } =
            conversationStateFromFirestore(loaded);

          setConversationState(loadedState);
          setSectionProgress(loadedSection);
        }
      } catch (error) {
        console.error('Load error:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProgress();
  }, [userId]);

  // Save helper
  const saveProgress = async (state: ConversationState, section: SectionProgressState) => {
    if (!userId) return;

    try {
      const firestoreConv = conversationStateToFirestore(
        state,
        subtopicId,
        topicId,
        displayName,
        grade,
        section
      );

      await saveLearnProgress(userId, subtopicId, firestoreConv);
    } catch (error) {
      console.error('Save error:', error);
    }
  };

  // Handle message sending
  const handleSendMessage = async (message: string) => {
    // Your AI logic here...
    const updatedState = {
      ...conversationState,
      messages: [...conversationState.messages, /* new messages */]
    };

    setConversationState(updatedState);

    // Save to Firestore
    await saveProgress(updatedState, sectionProgress);
  };

  if (loading) return <div>Loading progress...</div>;

  return (
    <div>
      {/* Your component UI */}
      <ChatInterface
        messages={conversationState.messages}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};
```

## Testing

### 1. Check Firebase Console

After running your app:
1. Go to https://console.firebase.google.com/
2. Select your project (homecampus-ai)
3. Go to Firestore Database
4. You should see:
   - `users/{userId}/learn/{subtopicId}/conversation`
   - `users/{userId}/progressSummary`

### 2. Test Offline Mode

1. Start your app
2. Open DevTools → Network tab → Go offline
3. Continue using the app
4. Messages queue locally
5. Go back online
6. Firestore automatically syncs!

### 3. Verify Security Rules

Try in console:
```javascript
// Should work (your own data)
await loadLearnProgress(myUserId, subtopicId);

// Should fail (someone else's data)
await loadLearnProgress(otherUserId, subtopicId); // Permission denied ✅
```

## What Gets Saved

Every save creates/updates two documents:

### 1. Conversation Document (~80-100KB)
```
users/{userId}/learn/{subtopicId}/conversation
├── messages: Array<Message>           // Full chat history
├── sectionProgress: {...}             // Current section, mastered sections
├── problemState: {...}                // Current problem details
├── sessionStats: {...}                // Problems attempted, hints, time
├── studentProfile: {...}              // Learning preferences
└── timestamps: {...}                  // Created, last updated
```

### 2. Progress Summary (~5-10KB)
```
users/{userId}/progressSummary
├── learnSubtopics: {
│   [subtopicId]: {
│     displayName: "Basic Ratios"
│     progress: 33                     // Percentage
│     lastActive: Timestamp
│     problemsCorrect: 5
│   }
│ }
└── practiceTopics: {...}              // Practice mode summary
```

## Performance Tips

1. **Debounce Saves** - Don't save after every keystroke
2. **Save on Key Events** - Message sent, section completed, problem solved
3. **Handle Errors Gracefully** - Don't block UI if save fails
4. **Use Loading States** - Show "Saving..." indicator
5. **Cache Reads** - Don't reload on every component mount

## Cost Estimate

- **100 users**: ~$1.55/month
- **1,000 users**: ~$15.52/month
- **Per save**: 2 writes (conversation + summary) = ~$0.000036

## Next Steps

1. ✅ Copy this pattern to all Learn components
2. ✅ Test with real user interactions
3. ✅ Monitor Firebase Console → Usage tab
4. ✅ Set up budget alerts at $10/month
5. 📊 Add parent dashboard using `getProgressSummary()`

---

**Need Help?** Check the full docs in `docs/FIRESTORE_DATA_STRATEGY.md`
