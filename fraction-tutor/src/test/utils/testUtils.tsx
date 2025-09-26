import React from 'react'
import { render, type RenderOptions } from '@testing-library/react'
import type { ConversationState, AnswerEvaluation } from '../../types/types'

// Custom render function that includes common providers if needed
function customRender(ui: React.ReactElement, options?: RenderOptions) {
  const AllProviders = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>
  }

  return render(ui, { wrapper: AllProviders, ...options })
}

// Test data factories
export const createMockConversationState = (overrides?: Partial<ConversationState>): ConversationState => ({
  messages: [],
  currentDifficulty: 'easy',
  sessionStats: {
    problemsAttempted: 0,
    correctAnswers: 0,
    hintsProvided: 0,
    startTime: new Date('2024-01-01T10:00:00Z')
  },
  studentProfile: {
    strugglingWith: [],
    preferredMethod: null,
    confidenceLevel: 50
  },
  ...overrides
})

export const createMockAnswerEvaluation = (overrides?: Partial<AnswerEvaluation>): AnswerEvaluation => ({
  answerCorrect: true,
  pointsEarned: 0.11,
  hintsUsed: 0,
  ...overrides
})

// Test scenarios for scoring
export interface ScoringTestScenario {
  description: string
  difficulty: 'easy' | 'medium' | 'hard'
  hintsUsed: number
  expectedPoints: number
  answerCorrect: boolean
}

export const scoringTestScenarios: ScoringTestScenario[] = [
  // Easy difficulty tests
  { description: 'Easy - correct, no hints', difficulty: 'easy', hintsUsed: 0, expectedPoints: 0.11, answerCorrect: true },
  { description: 'Easy - correct, 1 hint', difficulty: 'easy', hintsUsed: 1, expectedPoints: 0.10, answerCorrect: true },
  { description: 'Easy - correct, 2 hints', difficulty: 'easy', hintsUsed: 2, expectedPoints: 0.08, answerCorrect: true },
  { description: 'Easy - correct, 3+ hints', difficulty: 'easy', hintsUsed: 3, expectedPoints: 0, answerCorrect: true },
  { description: 'Easy - wrong answer', difficulty: 'easy', hintsUsed: 0, expectedPoints: 0, answerCorrect: false },

  // Medium difficulty tests
  { description: 'Medium - correct, no hints', difficulty: 'medium', hintsUsed: 0, expectedPoints: 0.22, answerCorrect: true },
  { description: 'Medium - correct, 1 hint', difficulty: 'medium', hintsUsed: 1, expectedPoints: 0.21, answerCorrect: true },
  { description: 'Medium - correct, 2 hints', difficulty: 'medium', hintsUsed: 2, expectedPoints: 0.19, answerCorrect: true },
  { description: 'Medium - correct, 3+ hints', difficulty: 'medium', hintsUsed: 3, expectedPoints: 0, answerCorrect: true },
  { description: 'Medium - wrong answer', difficulty: 'medium', hintsUsed: 0, expectedPoints: 0, answerCorrect: false },

  // Hard difficulty tests
  { description: 'Hard - correct, no hints', difficulty: 'hard', hintsUsed: 0, expectedPoints: 0.43, answerCorrect: true },
  { description: 'Hard - correct, 1 hint', difficulty: 'hard', hintsUsed: 1, expectedPoints: 0.41, answerCorrect: true },
  { description: 'Hard - correct, 2 hints', difficulty: 'hard', hintsUsed: 2, expectedPoints: 0.37, answerCorrect: true },
  { description: 'Hard - correct, 3+ hints', difficulty: 'hard', hintsUsed: 3, expectedPoints: 0, answerCorrect: true },
  { description: 'Hard - wrong answer', difficulty: 'hard', hintsUsed: 0, expectedPoints: 0, answerCorrect: false },
]

// Progression test scenarios
export interface ProgressionTestScenario {
  description: string
  currentScore: number
  expectedDifficulty: 'easy' | 'medium' | 'hard'
  expectedCompletion: boolean
}

export const progressionTestScenarios: ProgressionTestScenario[] = [
  { description: 'Score 0.0 - stays easy', currentScore: 0.0, expectedDifficulty: 'easy', expectedCompletion: false },
  { description: 'Score 0.19 - stays easy', currentScore: 0.19, expectedDifficulty: 'easy', expectedCompletion: false },
  { description: 'Score 0.2 - advances to medium', currentScore: 0.2, expectedDifficulty: 'medium', expectedCompletion: false },
  { description: 'Score 0.35 - stays medium', currentScore: 0.35, expectedDifficulty: 'medium', expectedCompletion: false },
  { description: 'Score 0.49 - stays medium', currentScore: 0.49, expectedDifficulty: 'medium', expectedCompletion: false },
  { description: 'Score 0.5 - advances to hard', currentScore: 0.5, expectedDifficulty: 'hard', expectedCompletion: false },
  { description: 'Score 0.75 - stays hard', currentScore: 0.75, expectedDifficulty: 'hard', expectedCompletion: false },
  { description: 'Score 0.99 - stays hard', currentScore: 0.99, expectedDifficulty: 'hard', expectedCompletion: false },
  { description: 'Score 1.0 - completes', currentScore: 1.0, expectedDifficulty: 'hard', expectedCompletion: true },
  { description: 'Score 1.2 - completes', currentScore: 1.2, expectedDifficulty: 'hard', expectedCompletion: true },
]

// Wait utilities for async testing
export const waitFor = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// Re-export everything from testing-library
export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'

// Override render with our custom render
export { customRender as render }