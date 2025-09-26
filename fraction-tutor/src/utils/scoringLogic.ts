// Pure functions for scoring logic that can be easily tested

export interface ScoreCalculationInput {
  difficulty: 'easy' | 'medium' | 'hard'
  hintsUsed: number
  answerCorrect: boolean
}

export interface ScoreCalculationResult {
  pointsEarned: number
  basePoints: number
  hintPenalty: number
}

// Base points for each difficulty level
export const BASE_POINTS = {
  easy: 0.11,
  medium: 0.22,
  hard: 0.43
} as const

// Hint penalty rules
export const HINT_PENALTIES = {
  easy: [0.01, 0.02],
  medium: [0.01, 0.02],
  hard: [0.02, 0.04]
} as const

export function calculateScore(input: ScoreCalculationInput): ScoreCalculationResult {
  const { difficulty, hintsUsed, answerCorrect } = input

  // No points for wrong answers
  if (!answerCorrect) {
    return {
      pointsEarned: 0,
      basePoints: 0,
      hintPenalty: 0
    }
  }

  const basePoints = BASE_POINTS[difficulty]
  const penalties = HINT_PENALTIES[difficulty]

  // Calculate hint penalty
  let hintPenalty = 0
  if (hintsUsed >= 3) {
    // 3+ hints = 0 points
    return {
      pointsEarned: 0,
      basePoints,
      hintPenalty: basePoints // Full penalty
    }
  } else if (hintsUsed === 2) {
    hintPenalty = penalties[0] + penalties[1]
  } else if (hintsUsed === 1) {
    hintPenalty = penalties[0]
  }

  const pointsEarned = Math.max(0, basePoints - hintPenalty)

  return {
    pointsEarned,
    basePoints,
    hintPenalty
  }
}

// Difficulty progression logic
export function determineDifficulty(currentScore: number): 'easy' | 'medium' | 'hard' {
  if (currentScore >= 0.5) {
    return 'hard'
  } else if (currentScore >= 0.2) {
    return 'medium'
  } else {
    return 'easy'
  }
}

// Completion check
export function isSubtopicComplete(currentScore: number): boolean {
  return currentScore >= 1.0
}

// Session duration calculation (in minutes)
export function calculateSessionDuration(startTime: Date, endTime: Date = new Date()): number {
  return Math.round((endTime.getTime() - startTime.getTime()) / 60000)
}