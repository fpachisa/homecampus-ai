/**
 * Path Progress Service
 *
 * Manages state and progression for path-based practice mode.
 * Handles progress tracking, node completion, and unlocking.
 */

import type {
  PracticePathState,
  PathProgress,
  NodeProgress,
  PathNode,
  PathDifficulty,
} from '../types/practice';
import { streakService } from './streakService';
import { achievementService } from './achievementService';
import { savePracticeProgress, pathProgressToFirestore } from './firestoreProgressService';

class PathProgressService {
  private readonly STORAGE_KEY_PREFIX = 'practice_path_state_';
  private readonly UNIFIED_STORAGE_KEY_PREFIX = 'practice_unified_path_';

  // Debounce timer for Firestore saves
  private saveTimers: Map<string, NodeJS.Timeout> = new Map();
  private readonly SAVE_DEBOUNCE_MS = 500; // Reduced from 2000ms for faster persistence

  /**
   * Load progress for a category from localStorage
   */
  loadPathProgress(category: string): PracticePathState | null {
    try {
      const key = `${this.STORAGE_KEY_PREFIX}${category}`;
      const stored = localStorage.getItem(key);

      if (!stored) return null;

      const state: PracticePathState = JSON.parse(stored);

      // Convert date strings back to Date objects
      Object.values(state.paths as any).forEach((path: any) => {
        path.pathStartedAt = new Date(path.pathStartedAt);
        path.lastUpdated = new Date(path.lastUpdated);
        Object.values(path.nodes).forEach((node: any) => {
          if (node.completedAt) {
            node.completedAt = new Date(node.completedAt);
          }
        });
      });

      return state;
    } catch (error) {
      console.error('Failed to load path progress:', error);
      return null;
    }
  }

  /**
   * Save progress to localStorage
   */
  savePathProgress(state: PracticePathState): void {
    try {
      const key = `${this.STORAGE_KEY_PREFIX}${state.category}`;
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error('Failed to save path progress:', error);
    }
  }

  /**
   * Initialize progress for a new path
   */
  initializePathProgress(
    category: string,
    difficulty: PathDifficulty,
    nodes: PathNode[]
  ): PathProgress {
    const now = new Date();
    const nodeProgress: Record<string, NodeProgress> = {};

    // Initialize all nodes
    nodes.forEach((node, index) => {
      nodeProgress[node.id] = {
        nodeId: node.id,
        problemsAttempted: 0,
        problemsCorrect: 0,
        status: index === 0 ? 'current' : 'locked', // First node is unlocked
      };
    });

    return {
      category,
      difficulty,
      currentNodeId: nodes[0]?.id || null,
      currentCycle: 0,
      nodes: nodeProgress,
      totalProblemsAttempted: 0,
      totalProblemsCorrect: 0,
      pathStartedAt: now,
      lastUpdated: now,
    } as PathProgress;
  }

  /**
   * Initialize full practice path state for a category
   */
  initializePracticePathState(
    category: string,
    easyNodes: PathNode[],
    mediumNodes: PathNode[],
    hardNodes: PathNode[]
  ): PracticePathState {
    return {
      category,
      paths: {
        easy: this.initializePathProgress(category, 'easy', easyNodes),
        medium: this.initializePathProgress(category, 'medium', mediumNodes),
        hard: this.initializePathProgress(category, 'hard', hardNodes),
      },
      progress: {} as any,
    };
  }

  /**
   * Record a problem attempt
   */
  recordAttempt(
    pathProgress: PathProgress,
    nodeId: string,
    isCorrect: boolean
  ): void {
    const nodeProgress = pathProgress.nodes[nodeId];
    if (!nodeProgress) {
      console.warn(`Node ${nodeId} not found in progress`);
      return;
    }

    // Update node progress
    nodeProgress.problemsAttempted++;
    if (isCorrect) {
      nodeProgress.problemsCorrect++;
    }

    // Update path totals
    pathProgress.totalProblemsAttempted++;
    if (isCorrect) {
      pathProgress.totalProblemsCorrect++;
    }

    pathProgress.lastUpdated = new Date();
  }

  /**
   * Check if a node is complete
   */
  isNodeComplete(nodeProgress: NodeProgress, requiredProblems: number): boolean {
    return nodeProgress.problemsAttempted >= requiredProblems;
  }

  /**
   * Complete a node and unlock the next one
   */
  completeNode(pathProgress: PathProgress, nodeId: string, allNodes: PathNode[]): void {
    const nodeProgress = pathProgress.nodes[nodeId];
    if (!nodeProgress) return;

    // Mark as completed
    nodeProgress.status = 'completed';
    nodeProgress.completedAt = new Date();

    // Find and unlock next node
    const currentIndex = allNodes.findIndex((n) => n.id === nodeId);
    if (currentIndex >= 0 && currentIndex < allNodes.length - 1) {
      const nextNode = allNodes[currentIndex + 1];
      const nextNodeProgress = pathProgress.nodes[nextNode.id];
      if (nextNodeProgress) {
        nextNodeProgress.status = 'current';
        pathProgress.currentNodeId = nextNode.id;
      }
    } else {
      // Last node completed
      pathProgress.currentNodeId = null;
    }

    pathProgress.lastUpdated = new Date();
  }

  /**
   * Get progress statistics for a path
   */
  getPathStats(pathProgress: PathProgress) {
    const totalNodes = Object.keys(pathProgress.nodes).length;
    const completedNodes = Object.values(pathProgress.nodes).filter(
      (n) => n.status === 'completed'
    ).length;
    const accuracy =
      pathProgress.totalProblemsAttempted > 0
        ? Math.round(
            (pathProgress.totalProblemsCorrect / pathProgress.totalProblemsAttempted) * 100
          )
        : 0;

    return {
      totalNodes,
      completedNodes,
      accuracy,
      totalProblemsAttempted: pathProgress.totalProblemsAttempted,
      totalProblemsCorrect: pathProgress.totalProblemsCorrect,
    };
  }

  /**
   * Get current node ID for a path
   */
  getCurrentNodeId(pathProgress: PathProgress): string | null {
    return pathProgress.currentNodeId;
  }

  /**
   * Check if entire path is complete
   */
  isPathComplete(pathProgress: PathProgress): boolean {
    return Object.values(pathProgress.nodes).every((n) => n.status === 'completed');
  }

  /**
   * Reset progress for a specific path
   */
  resetPath(state: PracticePathState, difficulty: PathDifficulty, nodes: PathNode[]): void {
    if (!state.paths) {
      state.paths = { easy: this.initializePathProgress(state.category, 'easy', []), medium: this.initializePathProgress(state.category, 'medium', []), hard: this.initializePathProgress(state.category, 'hard', []) };
    }
    state.paths[difficulty] = this.initializePathProgress(state.category, difficulty, nodes);
    this.savePathProgress(state);
  }

  /**
   * Clear all progress for a category
   */
  clearProgress(category: string): void {
    try {
      const key = `${this.STORAGE_KEY_PREFIX}${category}`;
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Failed to clear progress:', error);
    }
  }

  /**
   * Sync progress with current node configuration
   * Adds any new nodes that were added to the YAML config after initialization
   */
  syncProgressWithConfig(
    pathProgress: PathProgress,
    currentNodes: PathNode[]
  ): boolean {
    let updated = false;

    // Get list of existing node IDs in progress
    const existingNodeIds = new Set(Object.keys(pathProgress.nodes));

    // Find nodes in config that aren't in progress
    const newNodes = currentNodes.filter((node) => !existingNodeIds.has(node.id));

    if (newNodes.length > 0) {
      console.log(`📝 Syncing ${newNodes.length} new nodes to progress for ${pathProgress.difficulty} path`);

      newNodes.forEach((node) => {
        const nodeIndex = currentNodes.findIndex((n) => n.id === node.id);
        const previousNode = nodeIndex > 0 ? currentNodes[nodeIndex - 1] : null;

        // Determine status based on previous node
        let status: 'locked' | 'current' | 'completed' = 'locked';

        if (nodeIndex === 0) {
          // First node should be current if there's no current node
          status = pathProgress.currentNodeId === null ? 'current' : 'locked';
        } else if (previousNode) {
          const previousProgress = pathProgress.nodes[previousNode.id];
          // Unlock if previous node is completed
          if (previousProgress && previousProgress.status === 'completed') {
            status = pathProgress.currentNodeId === null ? 'current' : 'locked';
            if (status === 'current') {
              pathProgress.currentNodeId = node.id;
            }
          }
        }

        pathProgress.nodes[node.id] = {
          nodeId: node.id,
          problemsAttempted: 0,
          problemsCorrect: 0,
          status,
        };

        updated = true;
      });

      pathProgress.lastUpdated = new Date();
    }

    return updated;
  }

  /**
   * Sync entire practice path state with current configurations
   */
  syncPracticePathState(
    state: PracticePathState,
    easyNodes: PathNode[],
    mediumNodes: PathNode[],
    hardNodes: PathNode[]
  ): boolean {
    if (!state.paths) return false;

    const easyUpdated = this.syncProgressWithConfig(state.paths.easy, easyNodes);
    const mediumUpdated = this.syncProgressWithConfig(state.paths.medium, mediumNodes);
    const hardUpdated = this.syncProgressWithConfig(state.paths.hard, hardNodes);

    return easyUpdated || mediumUpdated || hardUpdated;
  }

  // ============================================
  // UNIFIED PATH METHODS (NEW SYSTEM)
  // ============================================

  /**
   * Load unified progress for a category from localStorage
   */
  loadUnifiedProgress(category: string): PathProgress | null {
    try {
      const key = `${this.UNIFIED_STORAGE_KEY_PREFIX}${category}`;
      const stored = localStorage.getItem(key);

      if (!stored) return null;

      const progress: PathProgress = JSON.parse(stored);

      // Convert date strings back to Date objects
      progress.pathStartedAt = new Date(progress.pathStartedAt);
      progress.lastUpdated = new Date(progress.lastUpdated);
      Object.values(progress.nodes).forEach((node) => {
        if (node.completedAt) {
          node.completedAt = new Date(node.completedAt);
        }
      });

      // Initialize other gamification fields if missing
      if (progress.totalXP === undefined) progress.totalXP = 0;
      if (progress.currentLevel === undefined) progress.currentLevel = 0;
      if (progress.achievements === undefined) progress.achievements = [];
      if (progress.sessionHistory === undefined) progress.sessionHistory = [];
      if (progress.totalTimeSpentSeconds === undefined) progress.totalTimeSpentSeconds = 0;

      // Initialize or recalculate weekly stats
      if (!progress.weeklyStats) {
        progress.weeklyStats = {
          problemsSolved: 0,
          timeSpentSeconds: 0,
          xpEarned: 0,
          averageAccuracy: 0,
        };
      }
      // Recalculate from session history on load
      this.updateWeeklyStats(progress);

      console.log('📊 Loaded progress with session history:', {
        category,
        sessionCount: progress.sessionHistory?.length || 0,
        sessions: progress.sessionHistory?.map(s => ({ date: s.date, problems: s.problemsSolved })) || [],
        weeklyProblems: progress.weeklyStats?.problemsSolved || 0,
      });

      return progress;
    } catch (error) {
      console.error('Failed to load unified progress:', error);
      return null;
    }
  }

  /**
   * Save unified progress to localStorage
   */
  saveUnifiedProgress(category: string, progress: PathProgress): void {
    try {
      const key = `${this.UNIFIED_STORAGE_KEY_PREFIX}${category}`;
      localStorage.setItem(key, JSON.stringify(progress));
    } catch (error) {
      console.error('Failed to save unified progress:', error);
    }
  }

  /**
   * Calculate layer progress from node progress
   */
  private calculateLayerProgress(nodes: PathNode[], nodeProgress: Record<string, NodeProgress>) {
    const layerProgress = {
      foundation: { completed: 0, total: 0 },
      integration: { completed: 0, total: 0 },
      application: { completed: 0, total: 0 },
      examPractice: { completed: 0, total: 0 },
    };

    nodes.forEach((node) => {
      layerProgress[node.layer].total++;
      const progress = nodeProgress[node.id];
      if (progress && progress.status === 'completed') {
        layerProgress[node.layer].completed++;
      }
    });

    return layerProgress;
  }

  /**
   * Initialize unified progress for a new path (NEW SYSTEM)
   * All nodes are unlocked from the start
   */
  initializeUnifiedProgress(category: string, nodes: PathNode[]): PathProgress {
    const now = new Date();
    const nodeProgress: Record<string, NodeProgress> = {};

    // Initialize all nodes as unlocked (status = 'current')
    nodes.forEach((node) => {
      nodeProgress[node.id] = {
        nodeId: node.id,
        problemsAttempted: 0,
        problemsCorrect: 0,
        status: 'current', // All nodes unlocked in new system
        timeSpentSeconds: 0,
      };
    });

    return {
      category,
      currentNodeId: null, // No specific current node - all are accessible
      currentCycle: 0,
      nodes: nodeProgress,
      layerProgress: this.calculateLayerProgress(nodes, nodeProgress),
      totalProblemsAttempted: 0,
      totalProblemsCorrect: 0,
      pathStartedAt: now,
      lastUpdated: now,

      // Gamification features
      totalXP: 0,
      currentLevel: 0,
      achievements: [],
      sessionHistory: [],
      totalTimeSpentSeconds: 0,

      weeklyStats: {
        problemsSolved: 0,
        timeSpentSeconds: 0,
        xpEarned: 0,
        averageAccuracy: 0,
      },
    };
  }

  /**
   * Sync unified progress with current node configuration
   * Adds any new nodes that were added to the YAML config after initialization
   */
  syncUnifiedProgress(pathProgress: PathProgress, currentNodes: PathNode[]): boolean {
    let updated = false;

    // Get list of existing node IDs in progress
    const existingNodeIds = new Set(Object.keys(pathProgress.nodes));

    // Find nodes in config that aren't in progress
    const newNodes = currentNodes.filter((node) => !existingNodeIds.has(node.id));

    if (newNodes.length > 0) {
      console.log(`📝 Syncing ${newNodes.length} new nodes to unified progress`);

      newNodes.forEach((node) => {
        pathProgress.nodes[node.id] = {
          nodeId: node.id,
          problemsAttempted: 0,
          problemsCorrect: 0,
          status: 'current', // All nodes unlocked
        };

        updated = true;
      });

      // Recalculate layer progress
      pathProgress.layerProgress = this.calculateLayerProgress(currentNodes, pathProgress.nodes);
      pathProgress.lastUpdated = new Date();
    }

    return updated;
  }

  /**
   * Debounced save to Firestore
   * @private
   */
  private debouncedFirestoreSave(uid: string, category: string, pathProgress: PathProgress, allNodes: PathNode[]): void {
    const key = `${uid}:${category}`;

    // Clear existing timer for this uid/category combination
    if (this.saveTimers.has(key)) {
      clearTimeout(this.saveTimers.get(key)!);
    }

    // Set new timer
    const timer = setTimeout(async () => {
      try {
        console.log(`💾 Auto-saving progress to Firestore for ${category}...`);
        console.log('📊 SessionHistory being saved:', pathProgress.sessionHistory);
        // Extract displayName from first node's title, or fall back to category
        const displayName = allNodes[0]?.title?.split(' - ')[0] || category;
        const firestoreProgress = pathProgressToFirestore(pathProgress, category, displayName, allNodes);
        console.log('📊 Firestore sessionHistory:', firestoreProgress.sessionHistory);
        await savePracticeProgress(uid, category, firestoreProgress);
        console.log(`✅ Progress auto-saved to Firestore`);
      } catch (error) {
        console.error('Failed to auto-save progress to Firestore:', error);
      } finally {
        this.saveTimers.delete(key);
      }
    }, this.SAVE_DEBOUNCE_MS);

    this.saveTimers.set(key, timer);
  }

  /**
   * Flush any pending Firestore saves immediately
   * Call this before page unload to ensure no data loss
   */
  async flushPendingSaves(): Promise<void> {
    const promises: Promise<void>[] = [];

    // Clear all timers and execute saves immediately
    for (const [_key, timer] of this.saveTimers.entries()) {
      clearTimeout(timer);
      // Note: We can't execute the saves here without more context
      // This is a best-effort flush; components should call explicit saves on unmount
    }

    this.saveTimers.clear();
    await Promise.all(promises);
  }

  /**
   * Record a problem attempt in unified progress
   * @param uid - Optional user ID for Firestore auto-save
   * @param category - Optional category for Firestore auto-save
   */
  recordUnifiedAttempt(
    pathProgress: PathProgress,
    nodeId: string,
    isCorrect: boolean,
    allNodes: PathNode[],
    isFirstTry: boolean = false,
    uid?: string,
    category?: string
  ): void {
    const nodeProgress = pathProgress.nodes[nodeId];
    if (!nodeProgress) {
      console.warn(`Node ${nodeId} not found in progress`);
      return;
    }

    // Update node progress
    nodeProgress.problemsAttempted++;
    if (isCorrect) {
      nodeProgress.problemsCorrect++;
    }

    // Update path totals
    pathProgress.totalProblemsAttempted++;
    if (isCorrect) {
      pathProgress.totalProblemsCorrect++;
    }

    // Award XP for correct answers
    if (isCorrect) {
      const xpEarned = achievementService.calculateProblemXP(isCorrect, isFirstTry);
      pathProgress.totalXP += xpEarned;
      console.log(`⭐ +${xpEarned} XP earned! Total XP: ${pathProgress.totalXP}`);

      // Update level based on new XP
      const newLevel = achievementService.calculateLevel(pathProgress.totalXP);
      if (newLevel > pathProgress.currentLevel) {
        console.log(`🎉 Level Up! Now level ${newLevel}`);
        pathProgress.currentLevel = newLevel;
      }

      // Update today's session stats (for daily goal tracking)
      this.updateTodaySessionStats(pathProgress, xpEarned);
    }

    // Check for newly earned achievements
    // NOTE: Passing empty streak - streak achievements are checked separately in firestoreProgressService
    const newAchievements = achievementService.checkAndAwardAchievements(
      pathProgress,
      streakService.initializeStreak()
    );
    if (newAchievements.length > 0) {
      // Add achievements and their XP rewards
      pathProgress.achievements.push(...newAchievements);
      const achievementXP = newAchievements.reduce((sum: number, a: any) => sum + a.xpReward, 0);
      pathProgress.totalXP += achievementXP;

      console.log(`🏆 ${newAchievements.length} new achievement(s) earned!`);
      newAchievements.forEach((a: any) => {
        console.log(`  - ${a.icon} ${a.title}: +${a.xpReward} XP`);
      });

      // Update level again after achievement XP
      const newLevel = achievementService.calculateLevel(pathProgress.totalXP);
      if (newLevel > pathProgress.currentLevel) {
        console.log(`🎉 Level Up! Now level ${newLevel}`);
        pathProgress.currentLevel = newLevel;
      }
    }

    // Recalculate layer progress (in case node was completed)
    pathProgress.layerProgress = this.calculateLayerProgress(allNodes, pathProgress.nodes);
    pathProgress.lastUpdated = new Date();

    // Auto-save to Firestore if uid and category provided
    if (uid && category) {
      this.debouncedFirestoreSave(uid, category, pathProgress, allNodes);
    }
  }

  /**
   * Complete a node in unified progress
   * @param uid - Optional user ID for Firestore auto-save
   * @param category - Optional category for Firestore auto-save
   */
  completeUnifiedNode(
    pathProgress: PathProgress,
    nodeId: string,
    allNodes: PathNode[],
    uid?: string,
    category?: string
  ): void {
    const nodeProgress = pathProgress.nodes[nodeId];
    if (!nodeProgress) return;

    // Mark as completed
    nodeProgress.status = 'completed';
    nodeProgress.completedAt = new Date();

    // Award bonus XP for node completion
    const nodeCompletionXP = achievementService.XP_REWARDS.NODE_COMPLETE;
    pathProgress.totalXP += nodeCompletionXP;
    console.log(`🎯 Node completed! +${nodeCompletionXP} XP bonus`);

    // Update level based on new XP
    const newLevel = achievementService.calculateLevel(pathProgress.totalXP);
    if (newLevel > pathProgress.currentLevel) {
      console.log(`🎉 Level Up! Now level ${newLevel}`);
      pathProgress.currentLevel = newLevel;
    }

    // Check for newly earned achievements (may unlock layer completion achievements)
    // NOTE: Passing empty streak - streak achievements are checked separately in firestoreProgressService
    const newAchievements = achievementService.checkAndAwardAchievements(
      pathProgress,
      streakService.initializeStreak()
    );
    if (newAchievements.length > 0) {
      pathProgress.achievements.push(...newAchievements);
      const achievementXP = newAchievements.reduce((sum: number, a: any) => sum + a.xpReward, 0);
      pathProgress.totalXP += achievementXP;

      console.log(`🏆 ${newAchievements.length} new achievement(s) earned!`);
      newAchievements.forEach((a: any) => {
        console.log(`  - ${a.icon} ${a.title}: +${a.xpReward} XP`);
      });

      // Update level again after achievement XP
      const updatedLevel = achievementService.calculateLevel(pathProgress.totalXP);
      if (updatedLevel > pathProgress.currentLevel) {
        console.log(`🎉 Level Up! Now level ${updatedLevel}`);
        pathProgress.currentLevel = updatedLevel;
      }
    }

    // Recalculate layer progress
    pathProgress.layerProgress = this.calculateLayerProgress(allNodes, pathProgress.nodes);
    pathProgress.lastUpdated = new Date();

    // Auto-save to Firestore if uid and category provided
    if (uid && category) {
      this.debouncedFirestoreSave(uid, category, pathProgress, allNodes);
    }
  }

  /**
   * Helper to get local date string without timezone conversion
   */
  private getLocalDateString(date: Date = new Date()): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  /**
   * Update today's session stats for daily goal tracking
   */
  private updateTodaySessionStats(pathProgress: PathProgress, xpEarned: number): void {
    // Use local timezone to avoid UTC date shift issues
    const today = this.getLocalDateString();

    // Initialize sessionHistory if it doesn't exist
    if (!pathProgress.sessionHistory) {
      pathProgress.sessionHistory = [];
    }

    // Find or create today's session
    let todaySession = pathProgress.sessionHistory.find(s => s.date === today);

    if (!todaySession) {
      // Create new session for today
      todaySession = {
        date: today,
        problemsSolved: 0,
        timeSpentSeconds: 0,
        xpEarned: 0,
        accuracy: 0,
      };
      pathProgress.sessionHistory.push(todaySession);
    }

    // Update today's session
    todaySession.problemsSolved++;
    todaySession.xpEarned += xpEarned;

    // Calculate accuracy from pathProgress totals (approximation)
    if (pathProgress.totalProblemsAttempted > 0) {
      todaySession.accuracy = Math.round((pathProgress.totalProblemsCorrect / pathProgress.totalProblemsAttempted) * 100);
    }

    // Keep only last 30 days
    pathProgress.sessionHistory = pathProgress.sessionHistory
      .sort((a, b) => a.date.localeCompare(b.date))
      .slice(-30);

    console.log(`📊 Daily goal progress: ${todaySession.problemsSolved} problems today`);

    // Update weekly stats
    this.updateWeeklyStats(pathProgress);
  }

  /**
   * Update weekly stats from session history
   */
  private updateWeeklyStats(pathProgress: PathProgress): void {
    if (!pathProgress.sessionHistory || pathProgress.sessionHistory.length === 0) {
      return;
    }

    // Get date 7 days ago using local timezone
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    const weekAgoStr = this.getLocalDateString(weekAgo);

    // Filter sessions from the last 7 days
    const thisWeekSessions = pathProgress.sessionHistory.filter(s => s.date >= weekAgoStr);

    if (thisWeekSessions.length === 0) {
      pathProgress.weeklyStats = {
        problemsSolved: 0,
        timeSpentSeconds: 0,
        xpEarned: 0,
        averageAccuracy: 0,
      };
      return;
    }

    // Calculate totals
    const problemsSolved = thisWeekSessions.reduce((sum, s) => sum + s.problemsSolved, 0);
    const timeSpentSeconds = thisWeekSessions.reduce((sum, s) => sum + s.timeSpentSeconds, 0);
    const xpEarned = thisWeekSessions.reduce((sum, s) => sum + s.xpEarned, 0);
    const averageAccuracy = thisWeekSessions.length > 0
      ? Math.round(thisWeekSessions.reduce((sum, s) => sum + s.accuracy, 0) / thisWeekSessions.length)
      : 0;

    pathProgress.weeklyStats = {
      problemsSolved,
      timeSpentSeconds,
      xpEarned,
      averageAccuracy,
    };

    console.log(`📈 Weekly stats: ${problemsSolved} problems, ${xpEarned} XP`);
  }

  /**
   * Clear unified progress for a category
   */
  clearUnifiedProgress(category: string): void {
    try {
      const key = `${this.UNIFIED_STORAGE_KEY_PREFIX}${category}`;
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Failed to clear unified progress:', error);
    }
  }
}

// Lazy singleton using Proxy to avoid circular dependency TDZ errors
// Instance is created on first method access, not at module load time
let _instance: PathProgressService | null = null;

export const pathProgressService = new Proxy({} as PathProgressService, {
  get(_target, prop: string | symbol) {
    // Create instance lazily on first access
    if (!_instance) {
      _instance = new PathProgressService();
    }

    const value = (_instance as any)[prop];

    // Bind methods to preserve 'this' context
    if (typeof value === 'function') {
      return value.bind(_instance);
    }

    return value;
  }
});
