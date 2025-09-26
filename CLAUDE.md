# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AI-powered tutoring system called "AI Campus" with a focus on a Socratic fraction tutoring application. The main application is a React-based web tutor that teaches Primary 6 students how to divide proper fractions by whole numbers using conversational AI.

## Build and Development Commands

### Fraction Tutor Application
Navigate to the `fraction-tutor` directory for all development:

```bash
cd fraction-tutor

# Development server
npm run dev

# Build for production
tsc -b && vite build

# Run tests
npm run test
npm run test:ui      # Interactive test UI
npm run test:run     # Single test run
npm run coverage     # Test coverage report

# Code quality
npm run lint
npm run preview      # Preview production build
```

## Architecture Overview

### Core Technology Stack
- **Frontend**: React 19+ with TypeScript
- **Build Tool**: Vite 7.x
- **Styling**: Tailwind CSS 4.x
- **AI Integration**: Google Gemini 2.5 Flash API
- **State Management**: React hooks (useState, useReducer)
- **Testing**: Vitest with Testing Library
- **Authentication**: Firebase Auth (optional)
- **Math Rendering**: KaTeX for mathematical expressions

### Application Structure

The application follows a modular, service-oriented architecture:

**Core Services:**
- `geminiService.ts`: Handles all AI interactions with dual agent architecture (Evaluator + Tutor agents)
- `progressService.ts`: Manages learning progression and scoring logic
- `sessionStorage.ts`: Handles session persistence
- `firebase.ts`: Optional authentication and cloud sync

**Key Components:**
- `ChatInterface.tsx`: Main conversation UI with sequential agent flow
- `MessageBubble.tsx`: Individual message rendering
- `MathRenderer.tsx`: KaTeX-based math expression rendering
- `FractionVisualizer.tsx`: Visual fraction representations
- `ProgressIndicator.tsx`: Real-time learning analytics

### AI Agent Architecture

The system uses a sequential two-agent approach:

1. **Evaluator Agent**: Analyzes student responses and determines next action
   - Evaluates answer correctness and assigns points
   - Decides whether to give hints, solutions, or new problems
   - Tracks problem state and difficulty progression

2. **Tutor Agent**: Executes instructions from evaluator
   - Generates contextual responses based on evaluator decisions
   - Provides hints, explanations, or celebrates achievements
   - Maintains encouraging Socratic dialogue style

### Prompt System

Located in `src/prompts/`:
- `promptResolver.ts`: Central prompt management and resolution
- `systemPrompts.ts`: Core system prompts for different agent roles
- `topicIds.ts`: Topic identification constants
- `topics/P6-Math-Fractions.ts`: Subject-specific prompt templates

## Environment Setup

Required environment variables (see `.env.example`):
```bash
VITE_GEMINI_API_KEY=your_gemini_api_key_here

# Optional Firebase config for authentication
VITE_FIREBASE_API_KEY=your_firebase_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id_here
# ... additional Firebase config
```

## Key Type Definitions

Critical interfaces in `src/types/types.ts`:
- `ConversationState`: Complete chat session state
- `ProblemState`: Individual problem tracking
- `EvaluatorInstruction`: Agent instruction format
- `AnswerEvaluation`: Response evaluation structure
- `GeminiResponse`: AI service response format

## Testing Strategy

The application has comprehensive test coverage:
- **Unit Tests**: Service logic, scoring algorithms, math utilities
- **Integration Tests**: Component interactions, API flows
- **E2E Tests**: Complete learning flows and user journeys

Test files follow the pattern: `*.test.ts` or `*.test.tsx`

## Development Workflow

1. **Adding New Features**:
   - Update type definitions first
   - Implement service layer changes
   - Update components and UI
   - Add comprehensive tests

2. **AI Prompt Updates**:
   - Modify prompts in `src/prompts/`
   - Test with various student response scenarios
   - Validate JSON response formats

3. **Scoring Logic Changes**:
   - Update `scoringLogic.ts`
   - Ensure backward compatibility
   - Add unit tests for edge cases

## Important Implementation Notes

- The application requires active Gemini API connection for core functionality
- Session state persists locally but can sync to Firebase if configured
- Math expressions are rendered using KaTeX - ensure proper escaping
- The scoring system uses a 0-1.00 scale where 1.00 indicates subtopic mastery
- All AI responses go through error handling with fallback messages
- The system supports difficulty progression (easy → medium → hard)