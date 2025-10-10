import { describe, it, expect } from 'vitest'
import {
  determineDifficulty,
  isSubtopicComplete
} from '../../utils/scoringLogic'
import { progressionTestScenarios } from '../utils/testUtils'

describe('Difficulty Progression Logic', () => {
  describe('determineDifficulty', () => {
    it.each(progressionTestScenarios)(
      '$description',
      ({ currentScore, expectedDifficulty }) => {
        const result = determineDifficulty(currentScore)
        expect(result).toBe(expectedDifficulty)
      }
    )

    it('should handle boundary conditions precisely', () => {
      // Test exact boundary values
      expect(determineDifficulty(0.199999)).toBe('easy')
      expect(determineDifficulty(0.2)).toBe('medium')
      expect(determineDifficulty(0.200001)).toBe('medium')

      expect(determineDifficulty(0.499999)).toBe('medium')
      expect(determineDifficulty(0.5)).toBe('hard')
      expect(determineDifficulty(0.500001)).toBe('hard')
    })

    it('should handle edge cases', () => {
      expect(determineDifficulty(0)).toBe('easy')
      expect(determineDifficulty(-0.1)).toBe('easy') // Negative scores stay easy
      expect(determineDifficulty(999)).toBe('hard') // Very high scores stay hard
    })
  })

  describe('isSubtopicComplete', () => {
    it.each(progressionTestScenarios)(
      '$description - completion check',
      ({ currentScore, expectedCompletion }) => {
        const result = isSubtopicComplete(currentScore)
        expect(result).toBe(expectedCompletion)
      }
    )

    it('should handle boundary conditions for completion', () => {
      expect(isSubtopicComplete(0.999999)).toBe(false)
      expect(isSubtopicComplete(1.0)).toBe(true)
      expect(isSubtopicComplete(1.000001)).toBe(true)
      expect(isSubtopicComplete(2.5)).toBe(true) // High scores still complete
    })

    it('should handle edge cases for completion', () => {
      expect(isSubtopicComplete(0)).toBe(false)
      expect(isSubtopicComplete(-1)).toBe(false) // Negative scores not complete
    })
  })

  describe('Progression Integration Tests', () => {
    it('should progress through all difficulty levels with expected scores', () => {
      // Simulate a learning session progressing through difficulties
      const learningScenarios = [
        // Start easy
        { score: 0, expectedDifficulty: 'easy' as const },
        { score: 0.11, expectedDifficulty: 'easy' as const }, // 1 easy problem
        { score: 0.19, expectedDifficulty: 'easy' as const }, // Just below threshold

        // Advance to medium
        { score: 0.2, expectedDifficulty: 'medium' as const }, // Hit threshold
        { score: 0.31, expectedDifficulty: 'medium' as const }, // 1 easy + 1 medium (0.11 + 0.20)
        { score: 0.42, expectedDifficulty: 'medium' as const }, // Still in medium range

        // Advance to hard
        { score: 0.5, expectedDifficulty: 'hard' as const }, // Hit hard threshold
        { score: 0.64, expectedDifficulty: 'hard' as const }, // Adding hard problems
        { score: 0.93, expectedDifficulty: 'hard' as const }, // Close to completion

        // Complete
        { score: 1.0, expectedDifficulty: 'hard' as const, complete: true },
        { score: 1.07, expectedDifficulty: 'hard' as const, complete: true }
      ]

      learningScenarios.forEach(({ score, expectedDifficulty, complete = false }) => {
        expect(determineDifficulty(score)).toBe(expectedDifficulty)
        expect(isSubtopicComplete(score)).toBe(complete)
      })
    })

    it('should handle realistic point accumulation patterns', () => {
      // Simulate realistic scoring patterns
      let totalScore = 0

      // 2 easy problems with no hints (0.11 each) = 0.22
      totalScore += 0.11 + 0.11
      expect(totalScore).toBe(0.22)
      expect(determineDifficulty(totalScore)).toBe('medium')

      // 1 medium problem with 1 hint (0.22 - 0.01) = 0.21
      totalScore += 0.21
      expect(totalScore).toBe(0.43)
      expect(determineDifficulty(totalScore)).toBe('medium')

      // 1 more medium problem, perfect (0.22) = 0.65
      totalScore += 0.22
      expect(totalScore).toBe(0.65)
      expect(determineDifficulty(totalScore)).toBe('hard')

      // 1 hard problem with 2 hints (0.43 - 0.06) = 0.37
      totalScore += 0.37
      expect(totalScore).toBe(1.02)
      expect(isSubtopicComplete(totalScore)).toBe(true)
    })
  })
})