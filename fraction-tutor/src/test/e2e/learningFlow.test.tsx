import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, waitFor, userEvent } from '../utils/testUtils'
import ChatInterface from '../../components/ChatInterface'
import { MockGeminiService, mockAnswerScenarios } from '../mocks/mockGemini'
import GeminiService from '../../services/geminiService'

// Mock the GeminiService module
vi.mock('../../services/geminiService', () => ({
  default: vi.fn()
}))

describe('End-to-End Learning Flow Tests', () => {
  let mockService: MockGeminiService
  const user = userEvent.setup()

  beforeEach(() => {
    vi.clearAllMocks()
    mockService = new MockGeminiService()

    const MockedGeminiService = vi.mocked(GeminiService)
    MockedGeminiService.mockImplementation(() => mockService as any)

    // Suppress console output in tests
    vi.spyOn(console, 'log').mockImplementation(() => {})
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  describe('Complete Learning Session', () => {
    it('should complete a full learning session from start to finish', async () => {
      render(<ChatInterface />)

      // === INITIALIZATION PHASE ===
      await waitFor(() => {
        expect(screen.getByText('Fraction Division Tutor')).toBeInTheDocument()
        expect(screen.getByText(/Hi there! I'm your math tutor/)).toBeInTheDocument()
        expect(screen.getByText(/You have 1\/2 of a chocolate bar/)).toBeInTheDocument()
      })

      // Verify initial state
      expect(screen.getByText('Score: 0.00/1.00')).toBeInTheDocument()
      expect(screen.getByText('0 Problems')).toBeInTheDocument()
      expect(screen.getByText('0m')).toBeInTheDocument()

      const input = screen.getByRole('textbox')

      // === EASY DIFFICULTY PHASE ===
      // Problem 1: Correct answer, no hints (0.11 points)
      await user.type(input, '1/6')
      await user.keyboard('{Enter}')

      await waitFor(() => {
        expect(screen.getByText('Score: 0.11/1.00')).toBeInTheDocument()
        expect(screen.getByText('1 Problem')).toBeInTheDocument()
      })

      // Problem 2: Correct answer, no hints (0.11 + 0.11 = 0.22 points)
      // This should trigger progression to medium (>= 0.2)
      await user.tripleClick(input)
      await user.type(input, '1/6')
      await user.keyboard('{Enter}')

      await waitFor(() => {
        expect(screen.getByText('Score: 0.22/1.00')).toBeInTheDocument()
        expect(screen.getByText('2 Problems')).toBeInTheDocument()
      })

      // === MEDIUM DIFFICULTY PHASE ===
      // Problem 3: Medium correct, no hints (0.22 + 0.22 = 0.44 points)
      await user.tripleClick(input)
      await user.type(input, '3/20') // Medium difficulty answer
      await user.keyboard('{Enter}')

      await waitFor(() => {
        expect(screen.getByText('Score: 0.44/1.00')).toBeInTheDocument()
        expect(screen.getByText('3 Problems')).toBeInTheDocument()
      })

      // Problem 4: Medium with 1 hint (0.44 + 0.21 = 0.65 points)
      // This should trigger progression to hard (>= 0.5)
      await user.tripleClick(input)
      await user.type(input, '1/8') // Medium with 1 hint
      await user.keyboard('{Enter}')

      await waitFor(() => {
        expect(screen.getByText('Score: 0.65/1.00')).toBeInTheDocument()
        expect(screen.getByText('4 Problems')).toBeInTheDocument()
      })

      // === HARD DIFFICULTY PHASE ===
      // Problem 5: Hard correct, no hints (0.65 + 0.43 = 1.08 points)
      // This should complete the subtopic (>= 1.0)
      await user.tripleClick(input)
      await user.type(input, '7/40') // Hard difficulty answer
      await user.keyboard('{Enter}')

      await waitFor(() => {
        expect(screen.getByText('Score: 1.08/1.00')).toBeInTheDocument()
        expect(screen.getByText('5 Problems')).toBeInTheDocument()
      })

      // === COMPLETION PHASE ===
      // Try to submit another answer after completion
      await user.tripleClick(input)
      await user.type(input, 'test answer')
      await user.keyboard('{Enter}')

      // Should show celebration message
      await waitFor(() => {
        expect(screen.getByText(/🎉 Congratulations! You've mastered fraction division/)).toBeInTheDocument()
      })
    }, 30000) // Extended timeout for full flow

    it('should handle a struggling student with many hints', async () => {
      render(<ChatInterface />)

      await waitFor(() => {
        expect(screen.getByText(/You have 1\/2 of a chocolate bar/)).toBeInTheDocument()
      })

      const input = screen.getByRole('textbox')

      // Student makes multiple mistakes, gets many hints
      // Problem 1: 3 hints = 0 points
      await user.type(input, '1/10') // 3 hints from mock
      await user.keyboard('{Enter}')

      await waitFor(() => {
        expect(screen.getByText('Score: 0.00/1.00')).toBeInTheDocument()
        expect(screen.getByText('1 Problem')).toBeInTheDocument() // Still counts as completed
      })

      // Problem 2: 2 hints = reduced points
      await user.tripleClick(input)
      await user.type(input, '1/12') // 2 hints: 0.11 - 0.03 = 0.08
      await user.keyboard('{Enter}')

      await waitFor(() => {
        expect(screen.getByText('Score: 0.08/1.00')).toBeInTheDocument()
        expect(screen.getByText('2 Problems')).toBeInTheDocument()
      })

      // Student is still in easy difficulty (< 0.2)
      // Would need many more problems to progress
    })

    it('should handle mixed correct and incorrect answers', async () => {
      render(<ChatInterface />)

      await waitFor(() => {
        expect(screen.getByText(/You have 1\/2 of a chocolate bar/)).toBeInTheDocument()
      })

      const input = screen.getByRole('textbox')

      // Problem 1: Wrong answer
      await user.type(input, '1/2') // Wrong from mock
      await user.keyboard('{Enter}')

      await waitFor(() => {
        expect(screen.getByText('Score: 0.00/1.00')).toBeInTheDocument()
        expect(screen.getByText('0 Problems')).toBeInTheDocument() // No increment for wrong
      })

      // Problem 2: Correct answer
      await user.tripleClick(input)
      await user.type(input, '1/6') // Correct
      await user.keyboard('{Enter}')

      await waitFor(() => {
        expect(screen.getByText('Score: 0.11/1.00')).toBeInTheDocument()
        expect(screen.getByText('1 Problem')).toBeInTheDocument() // Now increments
      })

      // Problem 3: Wrong answer again
      await user.tripleClick(input)
      await user.type(input, '1/2') // Wrong
      await user.keyboard('{Enter}')

      await waitFor(() => {
        expect(screen.getByText('Score: 0.11/1.00')).toBeInTheDocument() // Score unchanged
        expect(screen.getByText('1 Problem')).toBeInTheDocument() // Count unchanged
      })
    })

    it('should maintain accurate statistics throughout session', async () => {
      render(<ChatInterface />)

      await waitFor(() => {
        expect(screen.getByText(/You have 1\/2 of a chocolate bar/)).toBeInTheDocument()
      })

      const input = screen.getByRole('textbox')

      // Track session progression
      const sessionStart = Date.now()

      // Answer 3 problems with different outcomes
      const problems = [
        { answer: '1/6', expectedScore: 0.11, expectedProblems: 1 }, // Correct
        { answer: '1/2', expectedScore: 0.11, expectedProblems: 1 }, // Wrong (no change)
        { answer: '1/8', expectedScore: 0.21, expectedProblems: 2 }  // Correct with hint
      ]

      for (const [index, problem] of problems.entries()) {
        await user.tripleClick(input)
        await user.type(input, problem.answer)
        await user.keyboard('{Enter}')

        await waitFor(() => {
          expect(screen.getByText(`Score: ${problem.expectedScore.toFixed(2)}/1.00`)).toBeInTheDocument()
          const problemText = problem.expectedProblems === 1 ? '1 Problem' : `${problem.expectedProblems} Problems`
          expect(screen.getByText(problemText)).toBeInTheDocument()
        })

        // Small delay between problems
        await new Promise(resolve => setTimeout(resolve, 100))
      }

      // Session duration should be tracked (will be at least 0m, possibly 1m)
      const durationElement = screen.getByText(/\d+m/)
      expect(durationElement).toBeInTheDocument()
    })
  })

  describe('Boundary Condition Tests', () => {
    it('should handle exact progression thresholds', async () => {
      render(<ChatInterface />)

      await waitFor(() => {
        expect(screen.getByText(/You have 1\/2 of a chocolate bar/)).toBeInTheDocument()
      })

      const input = screen.getByRole('textbox')

      // Reach exactly 0.2 for medium progression
      // 0.11 + 0.09 (easy with 2 hints) = 0.20
      await user.type(input, '1/6') // 0.11 points
      await user.keyboard('{Enter}')

      await waitFor(() => {
        expect(screen.getByText('Score: 0.11/1.00')).toBeInTheDocument()
      })

      await user.tripleClick(input)
      await user.type(input, '1/12') // 0.09 points (2 hints)
      await user.keyboard('{Enter}')

      await waitFor(() => {
        expect(screen.getByText('Score: 0.20/1.00')).toBeInTheDocument()
      })

      // Should now be in medium difficulty range (score >= 0.2)
    })

    it('should handle completion at exactly 1.0', async () => {
      // This would test reaching exactly 1.0 points for completion
      // Implementation would involve calculating exact answer sequence
      // to reach 1.0 without going over
    })
  })

  describe('Performance and Reliability', () => {
    it('should handle rapid user input', async () => {
      render(<ChatInterface />)

      await waitFor(() => {
        expect(screen.getByText(/You have 1\/2 of a chocolate bar/)).toBeInTheDocument()
      })

      const input = screen.getByRole('textbox')

      // Submit multiple answers quickly
      const rapidAnswers = ['1/6', '1/8', '3/20']

      for (const answer of rapidAnswers) {
        await user.tripleClick(input)
        await user.type(input, answer)
        await user.keyboard('{Enter}')

        // Short delay to simulate rapid but not instantaneous input
        await new Promise(resolve => setTimeout(resolve, 50))
      }

      // Should handle all inputs and update correctly
      await waitFor(() => {
        // Final state should reflect all successful submissions
        const scoreElement = screen.getByText(/Score: \d+\.\d+\/1\.00/)
        expect(scoreElement).toBeInTheDocument()
      })
    })

    it('should maintain state consistency during errors', async () => {
      const errorService = {
        ...mockService,
        evaluateAnswer: vi.fn()
          .mockResolvedValueOnce({ answerCorrect: true, pointsEarned: 0.11, hintsUsed: 0 })
          .mockRejectedValueOnce(new Error('API Error'))
          .mockResolvedValueOnce({ answerCorrect: true, pointsEarned: 0.11, hintsUsed: 0 })
      }

      const MockedGeminiService = vi.mocked(GeminiService)
      MockedGeminiService.mockImplementation(() => errorService as any)

      render(<ChatInterface />)

      await waitFor(() => {
        expect(screen.getByText(/You have 1\/2 of a chocolate bar/)).toBeInTheDocument()
      })

      const input = screen.getByRole('textbox')

      // First answer should work
      await user.type(input, '1/6')
      await user.keyboard('{Enter}')

      await waitFor(() => {
        expect(screen.getByText('Score: 0.11/1.00')).toBeInTheDocument()
      })

      // Second answer causes error - state should remain consistent
      await user.tripleClick(input)
      await user.type(input, '1/8')
      await user.keyboard('{Enter}')

      // State should not be corrupted by the error
      expect(screen.getByText('Score: 0.11/1.00')).toBeInTheDocument()

      // Third answer should work and update from the consistent state
      await user.tripleClick(input)
      await user.type(input, '1/6')
      await user.keyboard('{Enter}')

      await waitFor(() => {
        expect(screen.getByText('Score: 0.22/1.00')).toBeInTheDocument()
      })
    })
  })
})