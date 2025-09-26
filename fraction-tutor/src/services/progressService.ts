export interface TopicProgress {
  topicId: string;
  score: number;
  problemsAttempted: number;
  correctAnswers: number;
  currentDifficulty: 'easy' | 'medium' | 'hard';
  updatedAt: number;
}

export interface SessionStats {
  problemsAttempted: number;
  correctAnswers: number;
  hintsProvided: number;
  startTime: Date;
}

class ProgressService {
  private getStorageKey(topicId: string, userId?: string): string {
    return userId ? `user_${userId}_progress_${topicId}` : `guest_progress_${topicId}`;
  }

  saveProgress(
    topicId: string,
    sessionStats: SessionStats,
    currentScore: number,
    difficulty: 'easy' | 'medium' | 'hard',
    userId?: string
  ): void {
    const progress: TopicProgress = {
      topicId,
      score: currentScore,
      problemsAttempted: sessionStats.problemsAttempted,
      correctAnswers: sessionStats.correctAnswers,
      currentDifficulty: difficulty,
      updatedAt: Date.now()
    };

    const key = this.getStorageKey(topicId, userId);
    localStorage.setItem(key, JSON.stringify(progress));
  }

  loadProgress(topicId: string, userId?: string): TopicProgress | null {
    const key = this.getStorageKey(topicId, userId);
    const stored = localStorage.getItem(key);

    if (!stored) return null;

    try {
      return JSON.parse(stored);
    } catch {
      return null;
    }
  }

  migrateGuestProgress(topicId: string, userId: string): void {
    const guestProgress = this.loadProgress(topicId);
    if (!guestProgress) return;

    // Copy guest progress to user progress
    this.saveProgress(
      topicId,
      {
        problemsAttempted: guestProgress.problemsAttempted,
        correctAnswers: guestProgress.correctAnswers,
        hintsProvided: 0, // We don't store this in progress
        startTime: new Date() // Fresh start time
      },
      guestProgress.score,
      guestProgress.currentDifficulty,
      userId
    );

    // Clear guest progress
    const guestKey = this.getStorageKey(topicId);
    localStorage.removeItem(guestKey);
  }

  getAllGuestTopicIds(): string[] {
    const keys = Object.keys(localStorage);
    return keys
      .filter(key => key.startsWith('guest_progress_'))
      .map(key => key.replace('guest_progress_', ''));
  }
}

export const progressService = new ProgressService();