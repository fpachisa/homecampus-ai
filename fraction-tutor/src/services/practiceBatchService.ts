import type { PracticeProblem, ProblemQueue, PracticeConfig, PracticeBatchResponse, DifficultyTier, PracticeProgressState, ProgressiveConfig } from '../types/types';
import type { TopicId } from '../prompts/topics/P6-Math-Fractions';
import { P6_MATH_FRACTIONS } from '../prompts/topics/P6-Math-Fractions';

/**
 * Service for managing practice mode problem batching and queueing
 *
 * Key features:
 * - Batch generation: Generate multiple problems in one AI call
 * - Queue management: Track current problem position
 * - Prefetching: Background generation of next batch
 * - Session persistence: Save/load queues from session storage
 */
class PracticeBatchService {
  private readonly BATCH_SIZE = 3;              // Problems per batch
  private readonly PREFETCH_THRESHOLD = 1;      // Generate next batch when 1 problem left
  private readonly QUEUE_TTL = 30 * 60 * 1000;  // 30 minutes

  /**
   * Get storage key for a practice queue
   */
  private getQueueKey(topicId: string, mode: 'subtopic' | 'topic'): string {
    return `practice_queue_${topicId}_${mode}`;
  }

  /**
   * Save problem queue to session storage
   */
  saveQueue(queue: ProblemQueue): void {
    try {
      const key = this.getQueueKey(queue.topicId, queue.config.mode);
      sessionStorage.setItem(key, JSON.stringify(queue));
    } catch (error) {
      console.error('Failed to save practice queue:', error);
    }
  }

  /**
   * Load problem queue from session storage
   */
  loadQueue(topicId: string, mode: 'subtopic' | 'topic'): ProblemQueue | null {
    try {
      const key = this.getQueueKey(topicId, mode);
      const stored = sessionStorage.getItem(key);

      if (!stored) return null;

      const queue: ProblemQueue = JSON.parse(stored);

      // Check if queue is stale
      const isStale = Date.now() - queue.lastGenerated > this.QUEUE_TTL;
      if (isStale) {
        console.log('Practice queue is stale, will regenerate');
        this.clearQueue(topicId, mode);
        return null;
      }

      return queue;
    } catch (error) {
      console.error('Failed to load practice queue:', error);
      return null;
    }
  }

  /**
   * Clear queue from session storage
   */
  clearQueue(topicId: string, mode: 'subtopic' | 'topic'): void {
    try {
      const key = this.getQueueKey(topicId, mode);
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error('Failed to clear practice queue:', error);
    }
  }

  /**
   * Create initial problem queue with generated problems
   */
  createQueue(
    topicId: string,
    config: PracticeConfig,
    problems: PracticeProblem[]
  ): ProblemQueue {
    const queue: ProblemQueue = {
      topicId,
      problems,
      currentIndex: 0,
      config,
      lastGenerated: Date.now(),
      isPrefetching: false
    };

    this.saveQueue(queue);
    return queue;
  }

  /**
   * Get next problem from queue
   * Returns null if no more problems (queue exhausted)
   */
  getNextProblem(queue: ProblemQueue): PracticeProblem | null {
    if (queue.currentIndex >= queue.problems.length) {
      return null;
    }

    const problem = queue.problems[queue.currentIndex];

    // Increment index for next call
    queue.currentIndex++;
    this.saveQueue(queue);

    return problem;
  }

  /**
   * Check if we should prefetch next batch
   */
  shouldPrefetch(queue: ProblemQueue): boolean {
    const remainingProblems = queue.problems.length - queue.currentIndex;
    return remainingProblems <= this.PREFETCH_THRESHOLD && !queue.isPrefetching;
  }

  /**
   * Mark queue as prefetching
   */
  markPrefetching(queue: ProblemQueue, isPrefetching: boolean): void {
    queue.isPrefetching = isPrefetching;
    this.saveQueue(queue);
  }

  /**
   * Append new problems to queue (from prefetch)
   */
  appendProblems(queue: ProblemQueue, newProblems: PracticeProblem[]): void {
    queue.problems.push(...newProblems);
    queue.lastGenerated = Date.now();
    queue.isPrefetching = false;
    this.saveQueue(queue);

    console.log(`✅ Prefetch complete: ${newProblems.length} more problems added to queue`);
  }

  /**
   * Get current problem without advancing index
   */
  getCurrentProblem(queue: ProblemQueue): PracticeProblem | null {
    if (queue.currentIndex >= queue.problems.length) {
      return null;
    }
    return queue.problems[queue.currentIndex];
  }

  /**
   * Get queue statistics
   */
  getQueueStats(queue: ProblemQueue) {
    return {
      totalProblems: queue.problems.length,
      currentIndex: queue.currentIndex,
      remainingProblems: queue.problems.length - queue.currentIndex,
      shouldPrefetch: this.shouldPrefetch(queue),
      isPrefetching: queue.isPrefetching || false
    };
  }

  /**
   * Reset queue to beginning (for retry/restart)
   */
  resetQueue(queue: ProblemQueue): void {
    queue.currentIndex = 0;
    this.saveQueue(queue);
  }

  /**
   * Get batch size for generation
   */
  getBatchSize(): number {
    return this.BATCH_SIZE;
  }

  // ============================================
  // PROGRESSIVE DIFFICULTY METHODS
  // ============================================

  /**
   * Get default progressive config
   */
  getDefaultProgressiveConfig(): ProgressiveConfig {
    return {
      advanceAfterStreak: 5,
      minProblemsBeforeAdvance: 3,
      allowRegression: false,
      regressAfterFailStreak: 3,
      startingDifficulty: 'easy'
    };
  }

  /**
   * Initialize progression state for a new session
   */
  initProgressState(config: ProgressiveConfig): PracticeProgressState {
    return {
      currentDifficultyTier: config.startingDifficulty,
      problemsAtCurrentTier: 0,
      currentCorrectStreak: 0,
      currentWrongStreak: 0,
      hasUnlockedMedium: config.startingDifficulty !== 'easy',
      hasUnlockedHard: config.startingDifficulty === 'hard'
    };
  }

  /**
   * Get problem types for a given difficulty tier
   */
  getProblemTypesForDifficulty(topicId: TopicId, tier: DifficultyTier): number[] {
    const topicConfig = P6_MATH_FRACTIONS[topicId];
    if (!topicConfig || !topicConfig.PROBLEM_TYPE_CONFIG) {
      console.warn(`No config found for topic: ${topicId}, defaulting to type 1`);
      return [1];
    }

    const mapping = topicConfig.PROBLEM_TYPE_CONFIG.difficultyMapping;
    return mapping[tier] || [1];
  }

  /**
   * Select a random problem type from a tier
   */
  selectRandomProblemType(topicId: TopicId, tier: DifficultyTier): number {
    const types = this.getProblemTypesForDifficulty(topicId, tier);
    return types[Math.floor(Math.random() * types.length)];
  }

  /**
   * Update progression state after an answer
   * Returns: { advanced: boolean, regressed: boolean, message?: string }
   */
  updateProgressState(
    state: PracticeProgressState,
    config: ProgressiveConfig,
    isCorrect: boolean
  ): { advanced: boolean; regressed: boolean; message?: string } {
    let advanced = false;
    let regressed = false;
    let message: string | undefined;

    // Update streaks
    if (isCorrect) {
      state.currentCorrectStreak++;
      state.currentWrongStreak = 0;
    } else {
      state.currentCorrectStreak = 0;
      state.currentWrongStreak++;
    }

    // Increment problems at current tier
    state.problemsAtCurrentTier++;

    // Check for advancement
    const canAdvance = state.problemsAtCurrentTier >= config.minProblemsBeforeAdvance &&
                       state.currentCorrectStreak >= config.advanceAfterStreak;

    if (canAdvance) {
      if (state.currentDifficultyTier === 'easy' && !state.hasUnlockedMedium) {
        state.currentDifficultyTier = 'medium';
        state.hasUnlockedMedium = true;
        state.problemsAtCurrentTier = 0;
        state.currentCorrectStreak = 0;
        advanced = true;
        message = '🎉 Great job! Unlocked Medium difficulty!';
      } else if (state.currentDifficultyTier === 'medium' && !state.hasUnlockedHard) {
        state.currentDifficultyTier = 'hard';
        state.hasUnlockedHard = true;
        state.problemsAtCurrentTier = 0;
        state.currentCorrectStreak = 0;
        advanced = true;
        message = '🔥 Amazing! Unlocked Hard difficulty!';
      }
    }

    // Check for regression (if enabled)
    if (config.allowRegression && config.regressAfterFailStreak) {
      const shouldRegress = state.currentWrongStreak >= config.regressAfterFailStreak;

      if (shouldRegress) {
        if (state.currentDifficultyTier === 'hard') {
          state.currentDifficultyTier = 'medium';
          state.problemsAtCurrentTier = 0;
          state.currentWrongStreak = 0;
          regressed = true;
          message = '💪 Let\'s practice medium problems first';
        } else if (state.currentDifficultyTier === 'medium') {
          state.currentDifficultyTier = 'easy';
          state.problemsAtCurrentTier = 0;
          state.currentWrongStreak = 0;
          regressed = true;
          message = '📚 Back to basics - you\'ve got this!';
        }
      }
    }

    return { advanced, regressed, message };
  }

  /**
   * Get difficulty tier display name
   */
  getDifficultyLabel(tier: DifficultyTier): string {
    const labels = {
      easy: '⭐ Easy',
      medium: '⭐⭐ Medium',
      hard: '⭐⭐⭐ Hard'
    };
    return labels[tier];
  }

  /**
   * Save progression state to localStorage
   */
  saveProgressState(topicId: string, state: PracticeProgressState): void {
    try {
      const key = `progress_state_${topicId}`;
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error('Failed to save progress state:', error);
    }
  }

  /**
   * Load progression state from localStorage
   */
  loadProgressState(topicId: string): PracticeProgressState | null {
    try {
      const key = `progress_state_${topicId}`;
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Failed to load progress state:', error);
      return null;
    }
  }

  /**
   * Clear progression state
   */
  clearProgressState(topicId: string): void {
    try {
      const key = `progress_state_${topicId}`;
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Failed to clear progress state:', error);
    }
  }

  // ============================================
  // PRACTICE STATS PERSISTENCE
  // ============================================

  /**
   * Save practice stats to localStorage
   */
  savePracticeStats(topicId: string, stats: {
    problemsAttempted: number;
    correctAnswers: number;
    incorrectAnswers: number;
    currentStreak: number;
    bestStreak: number;
    accuracy: number;
  }): void {
    try {
      const key = `practice_stats_${topicId}`;
      localStorage.setItem(key, JSON.stringify(stats));
    } catch (error) {
      console.error('Failed to save practice stats:', error);
    }
  }

  /**
   * Load practice stats from localStorage
   */
  loadPracticeStats(topicId: string): {
    problemsAttempted: number;
    correctAnswers: number;
    incorrectAnswers: number;
    currentStreak: number;
    bestStreak: number;
    accuracy: number;
  } | null {
    try {
      const key = `practice_stats_${topicId}`;
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Failed to load practice stats:', error);
      return null;
    }
  }

  /**
   * Clear practice stats
   */
  clearPracticeStats(topicId: string): void {
    try {
      const key = `practice_stats_${topicId}`;
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Failed to clear practice stats:', error);
    }
  }
}

export const practiceBatchService = new PracticeBatchService();
