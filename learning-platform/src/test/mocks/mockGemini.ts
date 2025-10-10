import type { AnswerEvaluation, GeminiResponse } from '../../types/types'

export interface MockAnswerScenario {
  studentResponse: string
  tutorResponse: string
  expectedEvaluation: AnswerEvaluation
  difficulty: 'easy' | 'medium' | 'hard'
  description: string
}

// Mock answer scenarios for testing
export const mockAnswerScenarios: MockAnswerScenario[] = [
  // Easy difficulty - correct answers
  {
    studentResponse: "1/6",
    tutorResponse: "Excellent! That's correct!",
    expectedEvaluation: {
      answerCorrect: true,
      pointsEarned: 0.11,
      hintsUsed: 0
    },
    difficulty: 'easy',
    description: 'Easy correct answer, no hints'
  },
  {
    studentResponse: "1/8",
    tutorResponse: "Great job! You got it right with a little help.",
    expectedEvaluation: {
      answerCorrect: true,
      pointsEarned: 0.10, // 0.11 - 0.01 for 1 hint
      hintsUsed: 1
    },
    difficulty: 'easy',
    description: 'Easy correct answer, 1 hint'
  },
  {
    studentResponse: "1/12",
    tutorResponse: "Perfect! You figured it out after I helped you with the method.",
    expectedEvaluation: {
      answerCorrect: true,
      pointsEarned: 0.09, // 0.11 - 0.01 - 0.02 for 2 hints
      hintsUsed: 2
    },
    difficulty: 'easy',
    description: 'Easy correct answer, 2 hints'
  },
  {
    studentResponse: "1/10",
    tutorResponse: "Yes, that's right! Good work after all those hints.",
    expectedEvaluation: {
      answerCorrect: true,
      pointsEarned: 0, // 3+ hints = 0 points
      hintsUsed: 3
    },
    difficulty: 'easy',
    description: 'Easy correct answer, 3 hints (no points)'
  },

  // Medium difficulty - correct answers
  {
    studentResponse: "3/20",
    tutorResponse: "Excellent work! That's the right answer!",
    expectedEvaluation: {
      answerCorrect: true,
      pointsEarned: 0.22,
      hintsUsed: 0
    },
    difficulty: 'medium',
    description: 'Medium correct answer, no hints'
  },
  {
    studentResponse: "1/8",
    tutorResponse: "Great! You solved it with a bit of guidance.",
    expectedEvaluation: {
      answerCorrect: true,
      pointsEarned: 0.21, // 0.22 - 0.01 for 1 hint
      hintsUsed: 1
    },
    difficulty: 'medium',
    description: 'Medium correct answer, 1 hint'
  },

  // Hard difficulty - correct answers
  {
    studentResponse: "7/40",
    tutorResponse: "Outstanding! You mastered this difficult problem!",
    expectedEvaluation: {
      answerCorrect: true,
      pointsEarned: 0.43,
      hintsUsed: 0
    },
    difficulty: 'hard',
    description: 'Hard correct answer, no hints'
  },
  {
    studentResponse: "5/48",
    tutorResponse: "Excellent! You got it right with some help.",
    expectedEvaluation: {
      answerCorrect: true,
      pointsEarned: 0.41, // 0.43 - 0.02 for 1 hint on hard
      hintsUsed: 1
    },
    difficulty: 'hard',
    description: 'Hard correct answer, 1 hint'
  },
  {
    studentResponse: "1/16",
    tutorResponse: "Perfect! You figured it out after I guided you through it.",
    expectedEvaluation: {
      answerCorrect: true,
      pointsEarned: 0.37, // 0.43 - 0.02 - 0.04 for 2 hints on hard
      hintsUsed: 2
    },
    difficulty: 'hard',
    description: 'Hard correct answer, 2 hints'
  },

  // Wrong answers
  {
    studentResponse: "1/2",
    tutorResponse: "Not quite right. Let me help you think about this...",
    expectedEvaluation: {
      answerCorrect: false,
      pointsEarned: 0,
      hintsUsed: 0
    },
    difficulty: 'easy',
    description: 'Easy wrong answer'
  }
]

// Mock GeminiService class
export class MockGeminiService {
  private answerScenarios: MockAnswerScenario[]

  constructor(scenarios: MockAnswerScenario[] = mockAnswerScenarios) {
    this.answerScenarios = scenarios
  }

  async generateInitialGreeting(_topicId?: string): Promise<string> {
    return "Hi there! I'm your math tutor and I'm excited to help you learn about dividing proper fractions by whole numbers today. Let's start with a problem to see what you already know!"
  }

  async generateQuestion(difficulty: 'easy' | 'medium' | 'hard', _topicId?: string): Promise<string> {
    const questions = {
      easy: "You have 1/2 of a chocolate bar and want to share it equally among 3 friends. How much does each friend get?",
      medium: "Sarah has 3/5 of a ribbon. She needs to cut it into 4 equal pieces for an art project. How long is each piece?",
      hard: "A contractor has 7/8 of a tin of paint left. If he uses equal amounts for 5 different rooms, how much paint per room?"
    }
    return questions[difficulty]
  }

  async generateResponse(
    _studentResponse: string,
    _recentHistory: any[],
    _currentDifficulty: 'easy' | 'medium' | 'hard',
    isComplete: boolean = false,
    _topicId?: string
  ): Promise<GeminiResponse> {
    if (isComplete) {
      return {
        response: "🎉 Congratulations! You've already mastered fraction division! Amazing work!",
        metadata: {
          detectedUnderstanding: "complete",
          suggestedDifficulty: "same",
          conceptsCovered: []
        }
      }
    }

    return {
      response: "Great work! Let me give you another problem to try.",
      metadata: {
        detectedUnderstanding: "partial",
        suggestedDifficulty: "same",
        conceptsCovered: []
      }
    }
  }

  async evaluateAnswer(
    studentResponse: string,
    _tutorResponse: string,
    _recentHistory: any[],
    currentDifficulty: 'easy' | 'medium' | 'hard',
    _topicId?: string
  ): Promise<AnswerEvaluation> {
    // Find matching scenario
    const scenario = this.answerScenarios.find(
      s => s.studentResponse === studentResponse &&
           s.difficulty === currentDifficulty
    )

    if (scenario) {
      return scenario.expectedEvaluation
    }

    // Default fallback
    return {
      answerCorrect: false,
      pointsEarned: 0,
      hintsUsed: 0
    }
  }

  async generateCelebration(finalScore: number, problemsCompleted: number, _sessionDuration: number, _topicId?: string): Promise<string> {
    return `🎉 Congratulations! You've mastered fraction division with a score of ${finalScore.toFixed(2)}/1.00! You completed ${problemsCompleted} problems and showed excellent understanding. Great job - you're ready for more advanced math topics! 🌟`
  }
}