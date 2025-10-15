// Pure functions for scoring logic that can be easily tested

export interface ScoringConfigForType {
  basePoints: number;
  hintPenalties: {
    first: number;
    second: number;
    thirdPlus: number;
  };
}

export interface ScoreCalculationInput {
  problemType: number
  hintsUsed: number
  answerCorrect: boolean
  scoringConfig: ScoringConfigForType
}

export interface ScoreCalculationResult {
  pointsEarned: number
  basePoints: number
  hintPenalty: number
}

export function calculateScore(input: ScoreCalculationInput): ScoreCalculationResult {
  const { hintsUsed, answerCorrect, scoringConfig } = input

  // No points for wrong answers
  if (!answerCorrect) {
    return {
      pointsEarned: 0,
      basePoints: 0,
      hintPenalty: 0
    }
  }

  const basePoints = scoringConfig.basePoints
  const penalties = scoringConfig.hintPenalties

  // Calculate hint penalty
  let hintPenalty = 0
  if (hintsUsed >= 3) {
    // 3+ hints = full penalty (thirdPlus value)
    return {
      pointsEarned: 0,
      basePoints,
      hintPenalty: penalties.thirdPlus
    }
  } else if (hintsUsed === 2) {
    hintPenalty = penalties.first + penalties.second
  } else if (hintsUsed === 1) {
    hintPenalty = penalties.first
  }

  const pointsEarned = Math.max(0, basePoints - hintPenalty)

  return {
    pointsEarned,
    basePoints,
    hintPenalty
  }
}

// Problem type progression logic
export function determineNextProblemType(currentScore: number, thresholds: number[]): number {
  // Find the highest problem type the student has reached based on score
  // thresholds = [0.2, 0.5] means: type 1 until 0.2, type 2 until 0.5, type 3 after
  let problemType = 1;

  for (let i = 0; i < thresholds.length; i++) {
    if (currentScore >= thresholds[i]) {
      problemType = i + 2; // +2 because we start at type 1, and first threshold moves to type 2
    }
  }

  return problemType;
}

// Completion check
export function isSubtopicComplete(currentScore: number): boolean {
  return currentScore >= 1.0
}

// Session duration calculation (in minutes)
export function calculateSessionDuration(startTime: Date, endTime: Date = new Date()): number {
  return Math.round((endTime.getTime() - startTime.getTime()) / 60000)
}