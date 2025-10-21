# Socratic Fraction Tutor - MVP Technical Specification

## Project Overview

Build a web-based tutoring application that teaches Primary 6 students how to divide proper fractions by whole numbers using Socratic dialogue. The app uses AI (Gemini 2.5 Flash) to generate contextual questions and provide natural, encouraging responses.

## Core Requirements

### Technology Stack
- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS
- **LLM**: Google Gemini 2.5 Flash API
- **State Management**: React hooks (useState, useReducer)
- **Deployment**: Single page application (can run locally for testing)

### Key Features
1. Natural conversation interface (chat-like UI)
2. Dynamic question generation based on difficulty level
3. Contextual responses that feel human and encouraging
4. Progress tracking within session
5. Difficulty adjustment based on performance

## Application Architecture

### File Structure
```
fraction-tutor/
├── src/
│   ├── App.tsx                 # Main application component
│   ├── components/
│   │   ├── ChatInterface.tsx   # Main chat UI
│   │   ├── MessageBubble.tsx   # Individual message component
│   │   ├── InputArea.tsx       # Student input component
│   │   ├── DifficultySelector.tsx # Choose difficulty level
│   │   └── ProgressIndicator.tsx  # Show student progress
│   ├── services/
│   │   ├── geminiService.ts    # Gemini API integration
│   │   └── promptManager.ts    # Prompt construction logic
│   ├── types/
│   │   └── types.ts            # TypeScript interfaces
│   ├── utils/
│   │   └── conversationUtils.ts # Helper functions
│   └── prompts/
│       └── systemPrompts.ts    # All system prompts
├── .env                        # API keys (not committed)
└── package.json
```

## Detailed Implementation Guide

### 1. Environment Setup

Create a `.env` file:
```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### 2. Type Definitions (types/types.ts)

```typescript
export interface Message {
  id: string;
  role: 'tutor' | 'student';
  content: string;
  timestamp: Date;
  metadata?: {
    difficulty?: 'easy' | 'medium' | 'hard';
    isCorrect?: boolean;
    conceptsCovered?: string[];
  };
}

export interface ConversationState {
  messages: Message[];
  currentDifficulty: 'easy' | 'medium' | 'hard';
  sessionStats: {
    problemsAttempted: number;
    correctAnswers: number;
    hintsProvided: number;
    startTime: Date;
  };
  studentProfile: {
    strugglingWith: string[];
    preferredMethod: 'visual' | 'procedural' | 'conceptual' | null;
    confidenceLevel: number; // 0-100
  };
}

export interface GeminiResponse {
  response: string;
  metadata: {
    detectedUnderstanding: 'none' | 'partial' | 'complete';
    suggestedDifficulty: 'same' | 'easier' | 'harder';
    conceptsCovered: string[];
  };
}
```

### 3. System Prompts (prompts/systemPrompts.ts)

```typescript
export const SYSTEM_PROMPTS = {
  INITIAL_GREETING: `You are a friendly, encouraging math tutor in Singapore teaching a Primary 6 student about dividing proper fractions by whole numbers.

Start the conversation by:
1. Greeting the student warmly
2. Briefly explaining what you'll learn today (dividing fractions)
3. Immediately presenting an engaging word problem to assess their level

Keep your introduction concise and natural - aim for 2-3 sentences before the problem.`,

  QUESTION_GENERATION: {
    easy: `Generate a word problem for dividing a proper fraction by a whole number.

Examples of appropriate problems:
- "You have 1/2 of a chocolate bar and want to share it equally among 3 friends. How much does each friend get?"
- "There's 2/3 of a pizza left. If we divide it equally between 2 people, what's each person's share?"

Guidelines:
- Use simple fractions (1/2, 1/3, 2/3, 1/4, 3/4)
- Use small whole numbers (2, 3, 4)
- Use relatable, everyday contexts
- Keep language simple and friendly
- Ensure the result is a proper fraction

Generate ONE unique problem. Just the problem, no solution.`,

    medium: `Generate a word problem for dividing a proper fraction by a whole number.

Examples of appropriate problems:
- "Sarah has 3/5 of a ribbon. She needs to cut it into 4 equal pieces for an art project. How long is each piece?"
- "A recipe uses 5/6 cup of milk. If you want to divide it equally among 3 portions, how much milk per portion?"

Guidelines:
- Use fractions with denominators 5-8
- Use whole numbers 3-6
- Create contexts that require some thinking
- The result might not simplify neatly

Generate ONE unique problem. Just the problem, no solution.`,

    hard: `Generate a word problem for dividing a proper fraction by a whole number.

Examples of appropriate problems:
- "A contractor has 7/8 of a tin of paint left. If he uses equal amounts for 5 different rooms, how much paint per room?"
- "You have 5/12 of your monthly data allowance left. Dividing it equally across 4 devices, what fraction does each device get?"

Guidelines:
- Use fractions with denominators 7-12
- Use whole numbers 4-8
- Create contexts that require multi-step thinking
- Include scenarios where simplification is needed

Generate ONE unique problem. Just the problem, no solution.`
  },

  CONVERSATION_RESPONSE: `You are a warm, encouraging math tutor having a natural conversation with a Primary 6 student in Singapore about dividing proper fractions by whole numbers.

Guidelines for your responses:
1. Never say "wrong" directly - use phrases like "not quite", "let's think about this differently", or "interesting approach, but..."
2. When the student is correct, confirm enthusiastically and then extend their thinking
3. Use casual, friendly language with occasional local expressions (lah, sia, can)
4. Always ask for the student's thinking process before correcting
5. Use visual/physical analogies when the student is stuck
6. Build on what the student says rather than lecturing
7. Keep responses concise (2-4 sentences) - this is a conversation
8. Celebrate small victories and progress
9. If student uses an interesting approach, acknowledge it even if incorrect
10. Guide them to discover the rule: dividing by n is the same as multiplying by 1/n

Current problem: {current_problem}
Student's response: {student_response}
Conversation history (last 3 exchanges): {recent_history}

Respond naturally and encouragingly to guide the student toward understanding. If they're struggling, offer a hint about visualization or breaking down the problem. If they're succeeding, pose a follow-up question to deepen understanding.

Return your response in this JSON format:
{
  "response": "your natural tutoring response here",
  "metadata": {
    "detectedUnderstanding": "none|partial|complete",
    "suggestedDifficulty": "same|easier|harder",
    "conceptsCovered": ["array of concepts mentioned or practiced"]
  }
}`
};
```

### 4. Gemini Service Integration (services/geminiService.ts)

```typescript
import { GoogleGenerativeAI } from '@google/generative-ai';

class GeminiService {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor(apiKey: string) {
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      generationConfig: {
        temperature: 0.8, // Balanced creativity and consistency
        maxOutputTokens: 500,
      }
    });
  }

  async generateInitialGreeting(): Promise<string> {
    const prompt = SYSTEM_PROMPTS.INITIAL_GREETING;
    const result = await this.model.generateContent(prompt);
    return result.response.text();
  }

  async generateQuestion(difficulty: 'easy' | 'medium' | 'hard'): Promise<string> {
    const prompt = SYSTEM_PROMPTS.QUESTION_GENERATION[difficulty];
    const result = await this.model.generateContent(prompt);
    return result.response.text().trim();
  }

  async generateResponse(
    currentProblem: string,
    studentResponse: string,
    recentHistory: Message[]
  ): Promise<GeminiResponse> {
    const historyText = recentHistory
      .map(m => `${m.role === 'tutor' ? 'Tutor' : 'Student'}: ${m.content}`)
      .join('\n');

    const prompt = SYSTEM_PROMPTS.CONVERSATION_RESPONSE
      .replace('{current_problem}', currentProblem)
      .replace('{student_response}', studentResponse)
      .replace('{recent_history}', historyText);

    try {
      const result = await this.model.generateContent(prompt);
      const responseText = result.response.text();

      // Parse JSON response - will throw if not valid JSON
      const parsed = JSON.parse(responseText);
      return {
        response: parsed.response,
        metadata: parsed.metadata
      };
    } catch (error) {
      console.error('Gemini API error:', error);
      throw error;
    }
  }
}

export default GeminiService;
```

### 5. Main Chat Interface Component (components/ChatInterface.tsx)

```typescript
import React, { useState, useEffect, useRef } from 'react';
import MessageBubble from './MessageBubble';
import InputArea from './InputArea';
import ProgressIndicator from './ProgressIndicator';
import GeminiService from '../services/geminiService';

const ChatInterface: React.FC = () => {
  const [state, setState] = useState<ConversationState>({
    messages: [],
    currentDifficulty: 'easy',
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

  const [isLoading, setIsLoading] = useState(false);
  const [currentProblem, setCurrentProblem] = useState<string>('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  
  const geminiService = useRef<GeminiService | null>(null);

  useEffect(() => {
    // Initialize Gemini service
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      console.error('Gemini API key not found in environment variables');
      return;
    }
    geminiService.current = new GeminiService(apiKey);
    
    // Start conversation
    initializeConversation();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [state.messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const initializeConversation = async () => {
    if (!geminiService.current) return;
    
    setIsLoading(true);
    try {
      // Get initial greeting and first problem
      const greeting = await geminiService.current.generateInitialGreeting();
      const firstProblem = await geminiService.current.generateQuestion('easy');
      
      const fullGreeting = `${greeting}\n\nLet's start with this problem: ${firstProblem}`;
      setCurrentProblem(firstProblem);
      
      addMessage('tutor', fullGreeting, { difficulty: 'easy' });
    } catch (error) {
      console.error('Failed to initialize conversation:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const addMessage = (
    role: 'tutor' | 'student', 
    content: string, 
    metadata?: any
  ) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      role,
      content,
      timestamp: new Date(),
      metadata
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage]
    }));
  };

  const handleStudentSubmit = async (input: string) => {
    if (!geminiService.current || !input.trim()) return;

    // Add student message
    addMessage('student', input);
    
    setIsLoading(true);
    try {
      // Get last 3 exchanges for context
      const recentHistory = state.messages.slice(-6);
      
      // Generate tutor response
      const response = await geminiService.current.generateResponse(
        currentProblem,
        input,
        recentHistory
      );

      // Update statistics based on response
      if (response.metadata.detectedUnderstanding === 'complete') {
        setState(prev => ({
          ...prev,
          sessionStats: {
            ...prev.sessionStats,
            correctAnswers: prev.sessionStats.correctAnswers + 1
          }
        }));
      }

      // Add tutor response
      addMessage('tutor', response.response, response.metadata);

      // Adjust difficulty if needed
      if (response.metadata.suggestedDifficulty === 'harder' && 
          state.currentDifficulty !== 'hard') {
        const newDifficulty = state.currentDifficulty === 'easy' ? 'medium' : 'hard';
        setState(prev => ({ ...prev, currentDifficulty: newDifficulty }));
      } else if (response.metadata.suggestedDifficulty === 'easier' && 
                 state.currentDifficulty !== 'easy') {
        const newDifficulty = state.currentDifficulty === 'hard' ? 'medium' : 'easy';
        setState(prev => ({ ...prev, currentDifficulty: newDifficulty }));
      }

      // Generate new problem if current one is mastered
      if (response.metadata.detectedUnderstanding === 'complete' && 
          response.response.toLowerCase().includes('try')) {
        const newProblem = await geminiService.current.generateQuestion(state.currentDifficulty);
        setCurrentProblem(newProblem);
        setState(prev => ({
          ...prev,
          sessionStats: {
            ...prev.sessionStats,
            problemsAttempted: prev.sessionStats.problemsAttempted + 1
          }
        }));
      }

    } catch (error) {
      console.error('Failed to get response:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Fraction Division Tutor
          </h1>
          <ProgressIndicator stats={state.sessionStats} />
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto p-4 space-y-4">
          {state.messages.map(message => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-blue-100 rounded-lg px-4 py-2">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <InputArea onSubmit={handleStudentSubmit} disabled={isLoading} />
    </div>
  );
};

export default ChatInterface;
```

### 6. Message Bubble Component (components/MessageBubble.tsx)

```typescript
import React from 'react';
import { Message } from '../types/types';

interface Props {
  message: Message;
}

const MessageBubble: React.FC<Props> = ({ message }) => {
  const isTutor = message.role === 'tutor';
  
  return (
    <div className={`flex ${isTutor ? 'justify-start' : 'justify-end'}`}>
      <div 
        className={`
          max-w-2xl rounded-lg px-4 py-3 
          ${isTutor 
            ? 'bg-blue-100 text-gray-800' 
            : 'bg-green-100 text-gray-800'
          }
        `}
      >
        <div className="text-sm font-medium mb-1 opacity-70">
          {isTutor ? '🤖 Tutor' : '👤 You'}
        </div>
        <div className="whitespace-pre-wrap">{message.content}</div>
        {message.metadata?.isCorrect !== undefined && (
          <div className="text-xs mt-2 opacity-60">
            {message.metadata.isCorrect ? '✓ Correct' : '→ Keep trying'}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
```

### 7. Input Area Component (components/InputArea.tsx)

```typescript
import React, { useState, KeyboardEvent } from 'react';

interface Props {
  onSubmit: (input: string) => void;
  disabled: boolean;
}

const InputArea: React.FC<Props> = ({ onSubmit, disabled }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim() && !disabled) {
      onSubmit(input);
      setInput('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="bg-white border-t p-4">
      <div className="max-w-4xl mx-auto flex space-x-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={disabled}
          placeholder="Type your answer or ask for help..."
          className="
            flex-1 px-4 py-3 border rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-blue-400
            disabled:bg-gray-100 disabled:cursor-not-allowed
          "
        />
        <button
          onClick={handleSubmit}
          disabled={disabled || !input.trim()}
          className="
            px-6 py-3 bg-blue-500 text-white rounded-lg
            hover:bg-blue-600 transition-colors
            disabled:bg-gray-300 disabled:cursor-not-allowed
          "
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default InputArea;
```

### 8. Progress Indicator Component (components/ProgressIndicator.tsx)

```typescript
import React from 'react';

interface Props {
  stats: {
    problemsAttempted: number;
    correctAnswers: number;
    hintsProvided: number;
    startTime: Date;
  };
}

const ProgressIndicator: React.FC<Props> = ({ stats }) => {
  const accuracy = stats.problemsAttempted > 0 
    ? Math.round((stats.correctAnswers / stats.problemsAttempted) * 100)
    : 0;

  const sessionDuration = Math.round(
    (new Date().getTime() - stats.startTime.getTime()) / 60000
  );

  return (
    <div className="flex items-center space-x-6 text-sm">
      <div className="flex items-center space-x-2">
        <span className="text-gray-600">Problems:</span>
        <span className="font-medium">{stats.problemsAttempted}</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-600">Accuracy:</span>
        <span className="font-medium">{accuracy}%</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-600">Time:</span>
        <span className="font-medium">{sessionDuration} min</span>
      </div>
    </div>
  );
};

export default ProgressIndicator;
```

### 9. Main App Component (App.tsx)

```typescript
import React from 'react';
import ChatInterface from './components/ChatInterface';

function App() {
  return <ChatInterface />;
}

export default App;
```

### 10. Package.json Dependencies

```json
{
  "name": "fraction-tutor",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@google/generative-ai": "^0.21.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.47",
    "tailwindcss": "^3.4.12",
    "typescript": "^5.5.3",
    "vite": "^5.4.8"
  }
}
```

## Setup Instructions

1. Create a new Vite React TypeScript project:
```bash
npm create vite@latest fraction-tutor -- --template react-ts
cd fraction-tutor
```

2. Install dependencies:
```bash
npm install @google/generative-ai
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. Configure Tailwind CSS (tailwind.config.js):
```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Update src/index.css:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Add your Gemini API key to `.env`:
```
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

6. Run the application:
```bash
npm run dev
```

## Testing Scenarios

### Scenario 1: Complete Beginner
- Start with easy problem
- Give wrong answer (divide numerator only)
- Get corrected gently
- Try again with guidance
- Get it right
- Move to slightly harder problem

### Scenario 2: Quick Learner
- Start with easy problem
- Get it right immediately
- System suggests harder problem
- Continue succeeding
- Progress to hard level

### Scenario 3: Conceptual Struggle
- Student keeps making same mistake
- System switches to visual explanation
- Uses different analogies
- Breaks down to simpler sub-problems
- Gradually builds understanding

## Future Enhancements (Post-MVP)

1. **Persistence Layer**
   - Save conversation history
   - Track long-term progress
   - Generate reports for teachers/parents

2. **Advanced Analytics**
   - Time per problem
   - Error pattern detection
   - Learning curve visualization

3. **Adaptive Features**
   - Auto-detect frustration from response patterns
   - Dynamically adjust explanation style
   - Personalized problem generation

4. **Multi-Topic Support**
   - Add more fraction operations
   - Expand to other P6 math topics
   - Cross-topic connections

5. **Gamification**
   - Achievement badges
   - Progress streaks
   - Peer comparisons (anonymous)

## Important Notes

1. **API Rate Limiting**: Gemini API has rate limits. Consider implementing:
   - Request queuing
   - Exponential backoff for retries
   - Caching for common responses

2. **Error Handling**: Current implementation has strict error handling with no fallbacks. All API failures will propagate as errors:
   - Network errors will cause application failure
   - Invalid API key will prevent initialization
   - Invalid JSON responses will throw errors

3. **Response Quality**: Monitor and log:
   - Response relevance
   - JSON parsing failures
   - Unexpected response formats

4. **User Experience**: Consider adding:
   - Math notation rendering (KaTeX/MathJax)
   - Drawing tools for visual explanations
   - Voice input/output options

## Deployment

For quick testing:
```bash
npm run build
npm run preview
```

For production deployment, consider:
- Vercel (easiest for React apps)
- Netlify
- AWS Amplify
- Google Cloud Run

Remember to set environment variables in your deployment platform.

## Success Metrics to Track

1. **Engagement Metrics**
   - Average session duration
   - Messages per session
   - Return rate (if adding authentication)

2. **Learning Metrics**
   - Time to first correct answer
   - Improvement rate over session
   - Concept mastery indicators

3. **Technical Metrics**
   - API response time
   - Error rate
   - Token usage per session

This MVP will allow you to test the core conversation flow and validate that the Socratic method works effectively for teaching fraction division.