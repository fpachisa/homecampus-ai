/**
 * Progress Sync Service
 * Handles automatic saving and syncing of user progress to Firestore (authenticated) or localStorage (guests)
 */

import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';
import { firestore } from './firebase';
import type { ProgressSnapshot, ConversationSnapshot, ProgressMetadata } from '../types/progress';
import type { PracticePathState } from '../types/practice';

class ProgressSyncService {
  private readonly STORAGE_KEY = 'ai_campus_progress';
  private readonly GUEST_STORAGE_KEY = 'ai_campus_guest_progress';
  private readonly AUTO_SAVE_INTERVAL = 30000; // 30 seconds

  private syncInterval: NodeJS.Timeout | null = null;
  private pendingSave: ProgressSnapshot | null = null;
  private currentUid: string | null = null;
  private lastSaveTime: number = 0;

  /**
   * Start automatic progress syncing
   * @param uid User ID (for Firestore) or null (for localStorage)
   */
  startAutoSync(uid: string | null = null): void {
    this.currentUid = uid;

    // Clear any existing interval
    if (this.syncInterval) {
      clearInterval(this.syncInterval);
    }

    // Set up auto-save interval
    this.syncInterval = setInterval(() => {
      if (this.pendingSave) {
        this.executeSave(this.pendingSave);
      }
    }, this.AUTO_SAVE_INTERVAL);

    console.log(`✅ Auto-sync started${uid ? ` for user ${uid}` : ' for guest'}`);
  }

  /**
   * Stop automatic syncing
   */
  stopAutoSync(): void {
    if (this.syncInterval) {
      clearInterval(this.syncInterval);
      this.syncInterval = null;
    }
    this.currentUid = null;
    this.pendingSave = null;
    console.log('⏹️ Auto-sync stopped');
  }

  /**
   * Queue a progress save (debounced)
   * @param snapshot Progress snapshot to save
   */
  async queueSave(snapshot: ProgressSnapshot): Promise<void> {
    snapshot.timestamp = new Date().toISOString();
    snapshot.uid = this.currentUid || 'guest';
    this.pendingSave = snapshot;

    // If last save was more than 5 seconds ago, save immediately
    const now = Date.now();
    if (now - this.lastSaveTime > 5000) {
      await this.executeSave(snapshot);
    }
  }

  /**
   * Save progress immediately (for major events)
   * @param snapshot Progress snapshot to save
   */
  async saveNow(snapshot: ProgressSnapshot): Promise<void> {
    snapshot.timestamp = new Date().toISOString();
    snapshot.uid = this.currentUid || 'guest';
    await this.executeSave(snapshot);
  }

  /**
   * Execute the actual save operation
   */
  private async executeSave(snapshot: ProgressSnapshot): Promise<void> {
    try {
      const uid = snapshot.uid;

      if (uid && uid !== 'guest') {
        // Authenticated user - save to Firestore
        await this.saveToFirestore(uid, snapshot);
      } else {
        // Guest user - save to localStorage
        this.saveToLocalStorage(snapshot);
      }

      this.lastSaveTime = Date.now();
      this.pendingSave = null;

      console.log(`💾 Progress saved for ${uid === 'guest' ? 'guest' : 'user'}`);
    } catch (error) {
      console.error('❌ Failed to save progress:', error);
      throw error;
    }
  }

  /**
   * Save to Firestore (authenticated users)
   */
  private async saveToFirestore(uid: string, snapshot: ProgressSnapshot): Promise<void> {
    const docRef = doc(firestore, 'progress', uid);

    try {
      // Check if document exists
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // Update existing document
        await updateDoc(docRef, {
          ...snapshot,
          lastUpdated: new Date().toISOString(),
        });
      } else {
        // Create new document
        await setDoc(docRef, {
          ...snapshot,
          createdAt: new Date().toISOString(),
          lastUpdated: new Date().toISOString(),
        });
      }
    } catch (error) {
      console.error('Failed to save to Firestore:', error);
      // Fallback to localStorage on error
      this.saveToLocalStorage(snapshot);
    }
  }

  /**
   * Save to localStorage (guests and fallback)
   */
  private saveToLocalStorage(snapshot: ProgressSnapshot): void {
    try {
      const key = snapshot.uid === 'guest' ? this.GUEST_STORAGE_KEY : this.STORAGE_KEY;
      localStorage.setItem(key, JSON.stringify(snapshot));
    } catch (error) {
      console.error('Failed to save to localStorage:', error);
      throw error;
    }
  }

  /**
   * Load progress for a user
   * @param uid User ID (null for guest)
   * @returns Progress snapshot or null if none exists
   */
  async loadProgress(uid: string | null = null): Promise<ProgressSnapshot | null> {
    try {
      if (uid && uid !== 'guest') {
        // Try Firestore first
        const firestoreData = await this.loadFromFirestore(uid);
        if (firestoreData) return firestoreData;
      }

      // Fallback to localStorage
      return this.loadFromLocalStorage(uid || 'guest');
    } catch (error) {
      console.error('Failed to load progress:', error);
      return null;
    }
  }

  /**
   * Load from Firestore
   */
  private async loadFromFirestore(uid: string): Promise<ProgressSnapshot | null> {
    try {
      const docRef = doc(firestore, 'progress', uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data() as ProgressSnapshot;
      }

      return null;
    } catch (error) {
      console.error('Failed to load from Firestore:', error);
      return null;
    }
  }

  /**
   * Load from localStorage
   */
  private loadFromLocalStorage(uid: string): ProgressSnapshot | null {
    try {
      const key = uid === 'guest' ? this.GUEST_STORAGE_KEY : this.STORAGE_KEY;
      const stored = localStorage.getItem(key);

      if (!stored) return null;

      return JSON.parse(stored) as ProgressSnapshot;
    } catch (error) {
      console.error('Failed to load from localStorage:', error);
      return null;
    }
  }

  /**
   * Save conversation state
   */
  async saveConversationState(
    uid: string | null,
    conversation: ConversationSnapshot
  ): Promise<void> {
    const currentProgress = await this.loadProgress(uid);

    const snapshot: ProgressSnapshot = {
      uid: uid || 'guest',
      timestamp: new Date().toISOString(),
      conversationState: conversation,
      practiceState: currentProgress?.practiceState,
      settings: currentProgress?.settings,
    };

    await this.queueSave(snapshot);
  }

  /**
   * Save practice state
   */
  async savePracticeState(
    uid: string | null,
    category: string,
    state: PracticePathState
  ): Promise<void> {
    const currentProgress = await this.loadProgress(uid);

    const snapshot: ProgressSnapshot = {
      uid: uid || 'guest',
      timestamp: new Date().toISOString(),
      conversationState: currentProgress?.conversationState,
      practiceState: {
        ...(currentProgress?.practiceState || {}),
        [category]: state,
      },
      settings: currentProgress?.settings,
    };

    await this.saveNow(snapshot); // Immediate save for practice progress
  }

  /**
   * Load guest progress for migration
   */
  loadGuestData(): ProgressSnapshot | null {
    return this.loadFromLocalStorage('guest');
  }

  /**
   * Migrate guest progress to authenticated user
   */
  async migrateGuestProgress(guestData: ProgressSnapshot, newUid: string): Promise<void> {
    try {
      // Update UID
      guestData.uid = newUid;
      guestData.timestamp = new Date().toISOString();

      // Save to Firestore
      await this.saveToFirestore(newUid, guestData);

      // Clear guest data from localStorage
      localStorage.removeItem(this.GUEST_STORAGE_KEY);

      console.log(`✅ Guest progress migrated to user ${newUid}`);
    } catch (error) {
      console.error('Failed to migrate guest progress:', error);
      throw error;
    }
  }

  /**
   * Clear all guest data
   */
  clearGuestData(): void {
    localStorage.removeItem(this.GUEST_STORAGE_KEY);
  }

  /**
   * Get progress metadata (for resume prompts)
   */
  async getProgressMetadata(uid: string | null): Promise<ProgressMetadata | null> {
    const progress = await this.loadProgress(uid);

    if (!progress) return null;

    const metadata: ProgressMetadata = {
      uid: progress.uid,
      lastSaved: progress.timestamp,
      lastTopic: progress.conversationState?.topicId,
      lastProblem: progress.conversationState?.problemState?.currentProblemText?.substring(0, 100),
      totalProblemsCompleted:
        (progress.conversationState?.sessionStats.correctAnswers || 0) +
        Object.values(progress.practiceState || {}).reduce(
          (sum, path) => sum + path.totalProblemsCorrect,
          0
        ),
      dataSize: JSON.stringify(progress).length,
    };

    return metadata;
  }

  /**
   * Clear all progress for a user (reset)
   */
  async clearProgress(uid: string | null): Promise<void> {
    try {
      if (uid && uid !== 'guest') {
        // Delete from Firestore
        const docRef = doc(firestore, 'progress', uid);
        await setDoc(docRef, {}); // Clear document
      }

      // Clear from localStorage
      const key = uid === 'guest' ? this.GUEST_STORAGE_KEY : this.STORAGE_KEY;
      localStorage.removeItem(key);

      console.log(`🗑️ Progress cleared for ${uid || 'guest'}`);
    } catch (error) {
      console.error('Failed to clear progress:', error);
      throw error;
    }
  }
}

// Export singleton instance
export const progressSyncService = new ProgressSyncService();
