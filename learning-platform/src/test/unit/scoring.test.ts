import { describe, it, expect } from 'vitest'
import {
  calculateScore,
  determineDifficulty,
  isSubtopicComplete,
  calculateSessionDuration,
  BASE_POINTS,
  HINT_PENALTIES
} from '../../utils/scoringLogic'
import { scoringTestScenarios } from '../utils/testUtils'

describe('Scoring Logic', () => {
  describe('calculateScore', () => {
    it.each(scoringTestScenarios)(
      '$description',
      ({ difficulty, hintsUsed, expectedPoints, answerCorrect }) => {
        const result = calculateScore({
          difficulty,
          hintsUsed,
          answerCorrect
        })

        expect(result.pointsEarned).toBe(expectedPoints)
      }
    )

    it('should return correct base points for each difficulty', () => {
      expect(calculateScore({
        difficulty: 'easy',
        hintsUsed: 0,
        answerCorrect: true
      }).basePoints).toBe(0.11)

      expect(calculateScore({
        difficulty: 'medium',
        hintsUsed: 0,
        answerCorrect: true
      }).basePoints).toBe(0.22)

      expect(calculateScore({
        difficulty: 'hard',
        hintsUsed: 0,
        answerCorrect: true
      }).basePoints).toBe(0.43)
    })

    it('should calculate correct hint penalties', () => {
      // Easy/Medium - 1 hint
      const easyOneHint = calculateScore({
        difficulty: 'easy',
        hintsUsed: 1,
        answerCorrect: true
      })
      expect(easyOneHint.hintPenalty).toBe(0.01)
      expect(easyOneHint.pointsEarned).toBe(0.10) // 0.11 - 0.01

      // Easy/Medium - 2 hints
      const easyTwoHints = calculateScore({
        difficulty: 'easy',
        hintsUsed: 2,
        answerCorrect: true
      })
      expect(easyTwoHints.hintPenalty).toBe(0.03) // 0.01 + 0.02
      expect(easyTwoHints.pointsEarned).toBe(0.08) // 0.11 - 0.03

      // Hard - 1 hint
      const hardOneHint = calculateScore({
        difficulty: 'hard',
        hintsUsed: 1,
        answerCorrect: true
      })
      expect(hardOneHint.hintPenalty).toBe(0.02)
      expect(hardOneHint.pointsEarned).toBe(0.41) // 0.43 - 0.02

      // Hard - 2 hints
      const hardTwoHints = calculateScore({
        difficulty: 'hard',
        hintsUsed: 2,
        answerCorrect: true
      })
      expect(hardTwoHints.hintPenalty).toBe(0.06) // 0.02 + 0.04
      expect(hardTwoHints.pointsEarned).toBe(0.37) // 0.43 - 0.06
    })

    it('should give zero points for 3+ hints regardless of difficulty', () => {
      const easyThreeHints = calculateScore({
        difficulty: 'easy',
        hintsUsed: 3,
        answerCorrect: true
      })
      expect(easyThreeHints.pointsEarned).toBe(0)

      const mediumFiveHints = calculateScore({
        difficulty: 'medium',
        hintsUsed: 5,
        answerCorrect: true
      })
      expect(mediumFiveHints.pointsEarned).toBe(0)

      const hardTenHints = calculateScore({
        difficulty: 'hard',
        hintsUsed: 10,
        answerCorrect: true
      })
      expect(hardTenHints.pointsEarned).toBe(0)
    })

    it('should give zero points for wrong answers regardless of hints', () => {
      const wrongEasy = calculateScore({
        difficulty: 'easy',
        hintsUsed: 0,
        answerCorrect: false
      })
      expect(wrongEasy.pointsEarned).toBe(0)

      const wrongMediumWithHints = calculateScore({
        difficulty: 'medium',
        hintsUsed: 1,
        answerCorrect: false
      })
      expect(wrongMediumWithHints.pointsEarned).toBe(0)
    })

    it('should never return negative points', () => {
      // Edge case: if penalty somehow exceeds base points
      const result = calculateScore({
        difficulty: 'easy', // 0.11 base
        hintsUsed: 2, // 0.03 penalty (0.01 + 0.02)
        answerCorrect: true
      })
      expect(result.pointsEarned).toBeGreaterThanOrEqual(0)
    })
  })

  describe('BASE_POINTS constants', () => {
    it('should have correct base point values', () => {
      expect(BASE_POINTS.easy).toBe(0.11)
      expect(BASE_POINTS.medium).toBe(0.22)
      expect(BASE_POINTS.hard).toBe(0.43)
    })
  })

  describe('HINT_PENALTIES constants', () => {
    it('should have correct penalty values', () => {
      expect(HINT_PENALTIES.easy).toEqual([0.01, 0.02])
      expect(HINT_PENALTIES.medium).toEqual([0.01, 0.02])
      expect(HINT_PENALTIES.hard).toEqual([0.02, 0.04])
    })
  })
})