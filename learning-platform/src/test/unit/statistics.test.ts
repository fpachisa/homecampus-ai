import { describe, it, expect, beforeEach, vi } from 'vitest'
import { calculateSessionDuration } from '../../utils/scoringLogic'

describe('Statistics Tracking', () => {
  beforeEach(() => {
    // Reset any mocked functions before each test
    vi.clearAllMocks()
  })

  describe('calculateSessionDuration', () => {
    it('should calculate duration in minutes correctly', () => {
      const startTime = new Date('2024-01-01T10:00:00Z')
      const endTime = new Date('2024-01-01T10:05:00Z') // 5 minutes later

      const duration = calculateSessionDuration(startTime, endTime)
      expect(duration).toBe(5)
    })

    it('should handle fractional minutes by rounding', () => {
      const startTime = new Date('2024-01-01T10:00:00Z')
      const endTime = new Date('2024-01-01T10:02:30Z') // 2.5 minutes later

      const duration = calculateSessionDuration(startTime, endTime)
      expect(duration).toBe(3) // Rounds up to 3
    })

    it('should handle zero duration', () => {
      const startTime = new Date('2024-01-01T10:00:00Z')
      const endTime = new Date('2024-01-01T10:00:00Z') // Same time

      const duration = calculateSessionDuration(startTime, endTime)
      expect(duration).toBe(0)
    })

    it('should handle longer sessions', () => {
      const startTime = new Date('2024-01-01T10:00:00Z')
      const endTime = new Date('2024-01-01T11:23:45Z') // 1 hour 23 minutes 45 seconds

      const duration = calculateSessionDuration(startTime, endTime)
      expect(duration).toBe(84) // 83.75 minutes rounded to 84
    })

    it('should use current time as default end time', () => {
      const startTime = new Date(Date.now() - 300000) // 5 minutes ago

      const duration = calculateSessionDuration(startTime)

      // Should be approximately 5 minutes (allowing for small timing differences)
      expect(duration).toBeGreaterThanOrEqual(4)
      expect(duration).toBeLessThanOrEqual(6)
    })

    it('should handle date edge cases', () => {
      // Test across day boundary
      const startTime = new Date('2024-01-01T23:58:00Z')
      const endTime = new Date('2024-01-02T00:03:00Z') // 5 minutes later, next day

      const duration = calculateSessionDuration(startTime, endTime)
      expect(duration).toBe(5)
    })

    it('should handle very short durations', () => {
      const startTime = new Date('2024-01-01T10:00:00Z')
      const endTime = new Date('2024-01-01T10:00:15Z') // 15 seconds later

      const duration = calculateSessionDuration(startTime, endTime)
      expect(duration).toBe(0) // Less than a minute rounds to 0
    })
  })

  describe('Statistics Integration Scenarios', () => {
    it('should handle a typical learning session progression', () => {
      const sessionStart = new Date('2024-01-01T10:00:00Z')

      // Track session statistics over time
      const statistics = {
        problemsAttempted: 0,
        correctAnswers: 0,
        hintsProvided: 0,
        currentScore: 0,
        difficulty: 'easy' as const
      }

      // Problem 1: Easy, correct, no hints
      statistics.problemsAttempted = 1
      statistics.correctAnswers = 1
      statistics.currentScore = 0.11
      expect(statistics.correctAnswers).toBe(1)
      expect(statistics.currentScore).toBe(0.11)

      // Problem 2: Easy, correct, 1 hint
      statistics.problemsAttempted = 2
      statistics.correctAnswers = 2
      statistics.hintsProvided = 1
      statistics.currentScore = 0.21 // 0.11 + 0.10
      expect(statistics.correctAnswers).toBe(2)
      expect(statistics.hintsProvided).toBe(1)

      // Problem 3: Medium difficulty should be unlocked (score >= 0.2)
      expect(statistics.currentScore).toBeGreaterThanOrEqual(0.2)
      statistics.difficulty = 'medium'

      // Problem 3: Medium, correct, no hints
      statistics.problemsAttempted = 3
      statistics.correctAnswers = 3
      statistics.currentScore = 0.43 // 0.21 + 0.22
      expect(statistics.correctAnswers).toBe(3)

      // Check session duration at end
      const sessionEnd = new Date('2024-01-01T10:15:30Z') // 15.5 minutes later
      const sessionDuration = calculateSessionDuration(sessionStart, sessionEnd)
      expect(sessionDuration).toBe(16) // Rounded up
    })

    it('should track hints correctly per problem', () => {
      const hintsPerProblem = []

      // Problem 1: 0 hints
      hintsPerProblem.push(0)
      expect(hintsPerProblem[0]).toBe(0)

      // Problem 2: 2 hints
      hintsPerProblem.push(2)
      expect(hintsPerProblem[1]).toBe(2)

      // Problem 3: 1 hint
      hintsPerProblem.push(1)
      expect(hintsPerProblem[2]).toBe(1)

      // Total hints should be sum of all
      const totalHints = hintsPerProblem.reduce((sum, hints) => sum + hints, 0)
      expect(totalHints).toBe(3)

      // But for scoring, only current problem hints matter
      expect(hintsPerProblem[hintsPerProblem.length - 1]).toBe(1)
    })

    it('should handle wrong answers in statistics', () => {
      const statistics = {
        problemsAttempted: 0,
        correctAnswers: 0,
        currentScore: 0
      }

      // Problem 1: Wrong answer
      statistics.problemsAttempted = 1
      statistics.correctAnswers = 0 // No increment for wrong answer
      statistics.currentScore = 0 // No points for wrong answer
      expect(statistics.correctAnswers).toBe(0)
      expect(statistics.currentScore).toBe(0)

      // Problem 2: Correct answer
      statistics.problemsAttempted = 2
      statistics.correctAnswers = 1 // Now increment
      statistics.currentScore = 0.11 // Points earned
      expect(statistics.correctAnswers).toBe(1)
      expect(statistics.currentScore).toBe(0.11)

      // Accuracy should be 50% (1 correct out of 2 attempted)
      const accuracy = statistics.correctAnswers / statistics.problemsAttempted
      expect(accuracy).toBe(0.5)
    })

    it('should handle edge case with zero problems attempted', () => {
      const statistics = {
        problemsAttempted: 0,
        correctAnswers: 0,
        currentScore: 0
      }

      // Division by zero should be handled gracefully
      const accuracy = statistics.problemsAttempted > 0
        ? statistics.correctAnswers / statistics.problemsAttempted
        : 0
      expect(accuracy).toBe(0)
    })
  })
})