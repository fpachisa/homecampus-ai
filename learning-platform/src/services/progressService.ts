import type { SectionProgressState, SectionProgressEntry } from '../types/types';

export interface TopicProgress {
  topicId: string;
  score: number; // deprecated in AI-First approach
  problemsAttempted: number;
  correctAnswers: number;
  currentProblemType: number; // deprecated - derived from section
  updatedAt: number;

  // NEW: Section progression tracking
  sectionProgress?: SectionProgressState; // Optional for backward compatibility
}

export interface SessionStats {
  problemsAttempted: number;
  correctAnswers: number;
  hintsProvided: number;
  startTime: Date;
}

/**
 * Progress Service
 *
 * Purpose: Stores learning progress data (section mastery, cumulative stats) across all sessions
 * Lifespan: PERMANENT - Progress data persists forever for student learning records
 * Firebase Ready: This will map to userProgress collection in Firebase
 *
 * IMPORTANT: This is the SOURCE OF TRUTH for sectionProgress.
 * sessionStorage may contain a snapshot, but this service is authoritative.
 */
class ProgressService {
  private getStorageKey(topicId: string, userId?: string): string {
    return userId ? `user_${userId}_progress_${topicId}` : `guest_progress_${topicId}`;
  }

  saveProgress(
    topicId: string,
    sessionStats: SessionStats,
    currentScore: number,
    problemType: number,
    userId?: string,
    sectionProgress?: SectionProgressState
  ): void {
    const progress: TopicProgress = {
      topicId,
      score: currentScore,
      problemsAttempted: sessionStats.problemsAttempted,
      correctAnswers: sessionStats.correctAnswers,
      currentProblemType: problemType,
      updatedAt: Date.now(),
      sectionProgress
    };

    const key = this.getStorageKey(topicId, userId);
    localStorage.setItem(key, JSON.stringify(progress));
  }

  // NEW: Save only section progress (for frequent updates during session)
  saveSectionProgress(
    topicId: string,
    sectionProgress: SectionProgressState,
    userId?: string
  ): void {
    const existing = this.loadProgress(topicId, userId);
    if (existing) {
      existing.sectionProgress = sectionProgress;
      existing.updatedAt = Date.now();
      const key = this.getStorageKey(topicId, userId);
      localStorage.setItem(key, JSON.stringify(existing));
    }
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
      guestProgress.currentProblemType,
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