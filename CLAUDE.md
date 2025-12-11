# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI Campus is an intelligent tutoring platform supporting K-12 education across multiple subjects. The main application is a React-based web tutor using AI-driven Socratic teaching methods with conversational interaction and visual learning tools.

## Build and Development Commands

### Learning Platform
Navigate to the `learning-platform` directory for all development:

```bash
cd learning-platform

# Development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test           # Watch mode
npm run test:ui        # Interactive test UI
npm run test:run       # Single test run
npm run coverage       # Test coverage report

# Code quality
npm run lint
npm run preview        # Preview production build

# Curriculum management
npm run sync-curriculum      # Sync curriculum from YAML
npm run generate-template    # Generate new topic template
npm run verify-template      # Verify template structure
```

## Architecture Overview

### Core Technology Stack
- **Frontend**: React 19+ with TypeScript
- **Build Tool**: Vite 7.x
- **Styling**: Tailwind CSS 4.x
- **AI Integration**: Google Gemini 2.5 Flash API with Claude Sonnet fallback
- **State Management**: React hooks (useState, useReducer)
- **Testing**: Vitest with Testing Library
- **Math Rendering**: KaTeX for mathematical expressions

### High-Level Architecture

#### Prompt Library System (New Architecture)
The system uses a **centralized prompt library** (`src/prompt-library/`) that separates concerns and enables K-12 scalability:

**Core Components:**
- `core/agents/`: Base agent templates (Evaluator, Tutor, Question, Solution)
- `core/protocols/`: Universal formatting rules and interaction protocols
- `templates/`: PromptTemplate class for composition and inheritance
- `builders/`: PromptBuilder for fluent API construction
- `registry/`: Central registry with caching
- `subjects/mathematics/`: Subject-specific extensions

**Key Classes:**
- `PromptTemplate`: Template system with variable substitution, validation, and inheritance
- `PromptBuilder`: Fluent API for programmatic prompt construction
- `PromptRegistry`: Singleton managing templates, builders, and caching
- `PromptLibrary`: High-level API for prompt generation

**Usage Pattern:**
```typescript
// High-level API
const promptLib = new PromptLibrary();
const prompt = promptLib.buildEvaluatorPrompt(topicId, context);

// Builder pattern for custom prompts
const customPrompt = new PromptBuilder()
  .addRole("You are a helpful tutor")
  .addContext({ topic: "trigonometry" })
  .addObjectives(["Learn SOH-CAH-TOA"])
  .build();
```

#### AI Agent System
The system uses a **sequential multi-agent architecture**:

1. **Evaluator Agent** (`core/agents/evaluator.ts`)
   - The "Teaching Brain" with complete curriculum intelligence
   - Evaluates correctness and understanding
   - Tracks section progression and mastery signals
   - Makes pedagogical decisions (hint, solution, new problem, celebrate)
   - Generates targeted instructions for UI agents
   - Does NOT generate UI content

2. **Tutor Agent** (`core/agents/tutor.ts`)
   - UI generator for hints and celebrations
   - Executes evaluator's tutorInstruction
   - Socratic questioning and encouragement
   - Generates speech (plain text for TTS) and display (markdown/LaTeX)

3. **Question Agent** (`core/agents/question.ts`)
   - Generates new problems based on questionInstruction
   - Matches difficulty and section requirements
   - Varies contexts and includes visual tools

4. **Solution Agent** (`core/agents/solution.ts`)
   - Creates step-by-step walkthroughs based on solutionInstruction
   - Addresses student struggle points
   - Explains the "why" not just "what"

**Agent Flow:**
```
Student Answer → Evaluator (decides action) →
  → Tutor (hint/celebration) OR
  → Question (new problem) OR
  → Solution (walkthrough)
```

#### Service Layer
**Core Services** (`src/services/`):
- `BaseAIService.ts`: Provider-agnostic AI service implementation
- `providers/`: AIProvider interface with Gemini and Claude implementations
- `FallbackAIService.ts`: Automatic Gemini → Claude failover on 503 errors
- `pathPracticeService.ts`: Practice mode problem generation and evaluation
- `pathProgressService.ts`: Section progression and mastery tracking
- `yamlPathLoader.ts`: Curriculum loading from YAML files

**Key Services:**
- `BaseAIService`: Implements all AI interactions using injected provider
- `GeminiService`: Primary provider using Google Gemini 2.5 Flash
- `ClaudeService`: Fallback provider using Anthropic Claude Sonnet
- Automatic failover with smart retry logic (fast-fail for 503, retry for network errors)

**TTS System** (`src/services/tts/`):
- **Provider Pattern**: Similar to AI providers, supports multiple TTS backends
- `TTSProvider.ts`: Interface for TTS providers with emotion and speaker support
- `GeminiTTSProvider.ts`: Gemini 2.5 Flash TTS with emotion-driven voice control
- `CloudTTSProvider.ts`: Google Cloud TTS (legacy, fallback only)
- `emotionPrompts.ts`: Emotion-to-prompt mapping for voice context control
- **Emotion System**: Maps AI agent emotions to voice prompts (encouraging, celebratory, supportive, neutral)
- **Speaker Selection**: 30+ prebuilt voices (Kore, Puck, Charon, Callirhoe, etc.)
- **Automatic Fallback**: Gemini TTS → Cloud TTS on failure
- **Hooks**: `useAudioManager` (playback queue), `useSpeakerConfig` (speaker preferences)

#### Curriculum System
**Path-Based Learning** (`curriculum-content/paths/`):
- Hierarchical structure: Subject → Path → Topics → Problems
- YAML configuration files define paths, objectives, and progression
- Support for both generated (AI) and pre-written (exam) problems
- Multi-part questions with related context
- Section-based mastery tracking

**YAML Structure:**
```yaml
path:
  id: s3-math-trigonometry
  topics:
    - topicId: basic-ratios
      descriptor:
        problemDescription: ["Generate SOH-CAH-TOA problems..."]
        contexts: ["ladder", "kite", "shadow"]
        mathTool: right-triangle  # Visual tool
```

#### Visual Tools System
**Math Visualizers** (`src/components/math-tools/`):
- Centralized registry in `mathToolsRegistry.ts`
- Tools: rightTriangle, generalTriangle, bearings, cuboid, pyramid, etc.
- Each tool has parameters schema and rendering logic
- Tools are scopable per section (progressionStructure.sections[].availableTools)

#### State Management
**Session State** (`src/types/types.ts`):
- `ConversationState`: Complete chat session state
- `ProblemState`: Current problem tracking (hints, attempts, problem ID)
- `SectionProgressState`: Section-based progression tracking
- `PathProgressState`: Overall path completion

**Section Progression:**
- Students progress through sections sequentially
- Each section has masterySignals (e.g., "3 correct with minimal hints")
- Forward-only progression (no automatic regression)
- Jump to different sections supported
- Resume previous sections with full context

### Critical Formatting Rules

**LaTeX/JSON Escaping** (`core/protocols/formatting.ts`):
- **CRITICAL**: Use ONE backslash in JSON source for LaTeX commands
- JSON source: `{"content": "The angle is $\\theta = 45^{\\circ}$"}`
- After JSON.parse(): `"The angle is $\\theta = 45^{\\circ}$"` (still one backslash)
- KaTeX then renders: "The angle is θ = 45°"

**Speech vs Display:**
- `speech.text`: PLAIN TEXT only (no markdown, no LaTeX, no hyphens in acronyms)
- `display.content`: Full markdown and LaTeX supported
- Example: Speech = "S O H C A H T O A", Display = "SOH-CAH-TOA"

**Dollar Amounts:**
- Use `\$1,500,000` (escaped, NO $ delimiters) for currency
- Use `$x^2 + 3x$` (WITH $ delimiters) for math expressions
- NEVER mix: `$\$100$` ← WRONG

## Environment Setup

Required environment variables (create `.env` in `learning-platform/`):
```bash
# Required: Primary AI provider (also used for Gemini TTS)
VITE_GEMINI_API_KEY=your_gemini_api_key_here

# Optional: Fallback AI provider (activates on Gemini 503 errors)
VITE_CLAUDE_API_KEY=your_claude_api_key_here

# TTS Configuration (New!)
# Provider: "gemini" (default, uses Gemini 2.5 Flash TTS) or "cloud" (legacy)
VITE_TTS_PROVIDER=gemini

# Default Speaker/Voice for Gemini TTS (MUST be lowercase)
# Available: kore, puck, charon, callirrhoe, aoede, fenrir, sulafat, leda, and 22 more
VITE_TTS_SPEAKER=callirrhoe

# Optional: Google Cloud TTS API Key (fallback only)
VITE_GOOGLE_TTS_API_KEY=your_google_tts_api_key_here

# Optional: Firebase authentication
VITE_FIREBASE_API_KEY=your_firebase_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id_here
# ... additional Firebase config
```

## Key Type Definitions

**Core Types** (`src/types/types.ts`):
- `ConversationState`: Complete session state with messages and progress
- `ProblemState`: Current problem tracking (ID, hints, attempts, type)
- `EvaluatorInstruction`: Evaluator output with action and agent instructions
- `SectionProgressState`: Section-based progression tracking

**Prompt Types** (`src/prompt-library/types/`):
- `prompts.ts`: Template, builder, registry types
- `agents.ts`: Agent-specific input/output schemas
- `topics.ts`: Topic configuration structures

**Practice Types** (`src/types/practice.ts`):
- `PathNode`: Hierarchical path structure
- `PracticeProblem`: Problem with metadata and solution data
- `PathDescriptor`: Problem generation guidelines

## Adding New Content

### Adding a New Subject (e.g., Science/Physics)
1. Create `src/prompt-library/subjects/science/physics/kinematics.ts`
2. Extend base agent templates:
   ```typescript
   export const KINEMATICS_CONFIG = {
     agents: {
       evaluator: { extends: EVALUATOR_BASE, topicSpecific: {...} },
       tutor: { extends: TUTOR_BASE, style: 'inquiry-based' }
     },
     progressionStructure: { sections: [...] }
   };
   ```
3. Register with PromptLibrary
4. Create YAML path in `curriculum-content/paths/science-physics/`

### Adding a New Math Topic
1. Create topic file in `src/prompts/topics/` (temporary, will migrate)
2. Define progression structure with sections and mastery signals
3. Specify learning objectives and formulas per section
4. Create YAML path configuration
5. Add visual tools if needed in `mathToolsRegistry.ts`

### Adding a New Visual Tool
1. Create React component in `src/components/math-tools/`
2. Register in `mathToolsRegistry.ts` with parameters schema
3. Add to `MATH_TOOLS_AVAILABLE` in topic configuration
4. Tool automatically available to AI agents

## Testing Strategy

**Test Organization:**
- Unit tests: Service logic, utility functions
- Integration tests: Agent flows, prompt resolution
- Component tests: React components with Testing Library

**Running Tests:**
```bash
npm run test           # Watch mode during development
npm run test:run       # CI/CD single run
npm run coverage       # Generate coverage report
```

## Development Workflow

### Working with Prompts
1. Universal rules in `src/prompt-library/core/protocols/`
2. Agent templates in `src/prompt-library/core/agents/`
3. Subject extensions in `src/prompt-library/subjects/`
4. Test prompt changes with various student responses
5. Validate JSON output schemas

### Working with Topics
1. Define progression structure with clear sections
2. Set mastery signals per section (e.g., "3 correct, minimal hints")
3. Specify learning objectives and formulas per section
4. Add sample problems for question generation guidance
5. Configure section-scoped visual tools

### Working with Agents
1. Evaluator makes decisions, generates instructions
2. UI agents (Tutor, Question, Solution) execute instructions
3. Never mix responsibilities (Evaluator doesn't generate UI)
4. Follow formatting rules strictly (speech = plain text)
5. Return only JSON, no additional text

## Important Implementation Notes

- **Prompt Library**: Centralized system replaces old mixed-responsibility structure
- **No Backward Compatibility Layer**: Clean implementation, discard what doesn't work
- **Agent Separation**: Evaluator decides, UI agents execute
- **Section Progression**: Forward-only with explicit mastery signals
- **Visual Tools**: Registry-based, scopable per section
- **Formatting Critical**: LaTeX escaping, speech vs display rules
- **Fallback System**: Automatic Gemini → Claude on 503 errors
- **YAML Curriculum**: Structured paths with objectives and progression
- **Math Rendering**: KaTeX with proper escaping (ONE backslash in JSON source)
