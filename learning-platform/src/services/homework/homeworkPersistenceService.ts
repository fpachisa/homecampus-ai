/**
 * Homework Persistence Service
 *
 * Purpose: Cloud storage (Firestore) for homework sessions
 * - Permanent storage of all homework data
 * - Multi-device sync
 * - Parent dashboard access
 * - Analytics and history
 *
 * Collection Structure:
 * users/{userId}/homeworkProblems/{problemId}
 *   - Problem metadata, analysis, grade check
 *   - Subcollection: sessions/{sessionId}
 *     - Full conversation history and progress
 */

import {
  collection,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  writeBatch,
  serverTimestamp,
  Timestamp,
  type DocumentData
} from 'firebase/firestore';
import { firestore } from '../firebase';
import type {
  UploadedProblem,
  HomeworkSession
} from '../../types/homework';

export interface FirestoreProblemDocument {
  id: string;
  studentId: string;
  uploadedAt: Timestamp;
  lastActivityAt: Timestamp;
  status: string;

  // Problem content (NO imageData - too large)
  extractedText: string;
  subject: string;
  topic: string;
  subTopic?: string;
  difficulty: string;
  problemType: string;

  // Analysis data
  keyMathConcepts: string[];
  formulasNeeded?: string[];
  visualElements: string[];

  // Grade check
  gradeCheck: {
    studentGrade: number;
    isAppropriate: boolean;
    requiredGradeLevel: number;
    conceptsCovered: string[];
    conceptsMissing: string[];
    recommendation: string;
  };

  // Statistics
  statistics: {
    totalSessions: number;
    totalTimeSpent: number; // seconds
    lastAttemptedAt: Timestamp;
  };
}

export interface FirestoreSessionDocument {
  sessionId: string;
  problemId: string;
  studentId: string;
  startedAt: Timestamp;
  lastActivityAt: Timestamp;
  completedAt?: Timestamp;
  status: string;

  messages: DocumentData[]; // HomeworkMessage[]

  progress: {
    hintsGiven: number;
    questionsAsked: number;
    studentAttempts: number;
    understoodConcepts: string[];
    strugglingConcepts: string[];
  };

  finalOutcome?: string;
  completionReason?: string;
}

class HomeworkPersistenceService {
  /**
   * Get reference to user's homework problems collection
   */
  private getProblemsCollection(userId: string) {
    return collection(firestore, 'users', userId, 'homeworkProblems');
  }

  /**
   * Get reference to specific problem document
   */
  private getProblemDoc(userId: string, problemId: string) {
    return doc(this.getProblemsCollection(userId), problemId);
  }

  /**
   * Get reference to sessions subcollection
   */
  private getSessionsCollection(userId: string, problemId: string) {
    return collection(
      firestore,
      'users',
      userId,
      'homeworkProblems',
      problemId,
      'sessions'
    );
  }

  /**
   * Get reference to specific session document
   */
  private getSessionDoc(userId: string, problemId: string, sessionId: string) {
    return doc(this.getSessionsCollection(userId, problemId), sessionId);
  }

  /**
   * Convert UploadedProblem to Firestore document
   */
  private problemToFirestore(problem: UploadedProblem): FirestoreProblemDocument {
    if (!problem.analysis || !problem.gradeCheck) {
      throw new Error('Problem must have analysis and gradeCheck before saving to Firestore');
    }

    return {
      id: problem.id,
      studentId: problem.studentId,
      uploadedAt: Timestamp.fromDate(new Date(problem.uploadedAt)),
      lastActivityAt: Timestamp.now(),
      status: problem.status,

      extractedText: problem.analysis.extractedText,
      subject: problem.analysis.subject,
      topic: problem.analysis.topic,
      subTopic: problem.analysis.subTopic,
      difficulty: problem.analysis.difficulty,
      problemType: problem.analysis.problemType,

      keyMathConcepts: problem.analysis.keyMathConcepts,
      formulasNeeded: problem.analysis.formulasNeeded,
      visualElements: problem.analysis.visualElements,

      gradeCheck: {
        studentGrade: problem.gradeCheck.studentGrade,
        isAppropriate: problem.gradeCheck.isAppropriate,
        requiredGradeLevel: problem.gradeCheck.requiredGradeLevel,
        conceptsCovered: problem.gradeCheck.conceptsCovered,
        conceptsMissing: problem.gradeCheck.conceptsMissing,
        recommendation: problem.gradeCheck.recommendation
      },

      statistics: {
        totalSessions: 0,
        totalTimeSpent: 0,
        lastAttemptedAt: Timestamp.now()
      }
    };
  }

  /**
   * Convert HomeworkSession to Firestore document
   */
  private sessionToFirestore(session: HomeworkSession): FirestoreSessionDocument {
    const baseDoc = {
      sessionId: session.sessionId,
      problemId: session.problemId,
      studentId: session.studentId,
      startedAt: Timestamp.fromDate(new Date(session.startedAt)),
      lastActivityAt: Timestamp.fromDate(new Date(session.lastActivityAt)),
      status: session.status,

      messages: session.messages.map(msg => ({
        ...msg,
        timestamp: msg.timestamp // Keep as ISO string for simplicity
      })),

      progress: {
        hintsGiven: session.hintsGiven,
        questionsAsked: session.questionsAsked,
        studentAttempts: session.studentAttempts,
        understoodConcepts: session.understoodConcepts,
        strugglingConcepts: session.strugglingConcepts
      }
    };

    // Only add optional fields if they have values (Firestore doesn't accept undefined)
    const optionalFields: Partial<FirestoreSessionDocument> = {};

    if (session.completedAt) {
      optionalFields.completedAt = Timestamp.fromDate(new Date(session.completedAt));
    }

    if (session.finalOutcome) {
      optionalFields.finalOutcome = session.finalOutcome;
    }

    if (session.completedAt && session.finalOutcome) {
      optionalFields.completionReason = session.finalOutcome;
    }

    return { ...baseDoc, ...optionalFields } as FirestoreSessionDocument;
  }

  /**
   * Save problem to Firestore (initial save)
   */
  async saveProblem(problem: UploadedProblem): Promise<boolean> {
    try {
      const problemDoc = this.problemToFirestore(problem);
      const docRef = this.getProblemDoc(problem.studentId, problem.id);

      await setDoc(docRef, problemDoc);
      return true;
    } catch (error) {
      console.error('Failed to save problem to Firestore:', error);
      return false;
    }
  }

  /**
   * Update problem status
   */
  async updateProblemStatus(
    userId: string,
    problemId: string,
    status: UploadedProblem['status']
  ): Promise<boolean> {
    try {
      const docRef = this.getProblemDoc(userId, problemId);

      await updateDoc(docRef, {
        status,
        lastActivityAt: serverTimestamp()
      });

      return true;
    } catch (error) {
      console.error('Failed to update problem status:', error);
      return false;
    }
  }

  /**
   * Save session to Firestore (initial save or update)
   */
  async saveSession(session: HomeworkSession): Promise<boolean> {
    try {
      const sessionDoc = this.sessionToFirestore(session);
      const docRef = this.getSessionDoc(
        session.studentId,
        session.problemId,
        session.sessionId
      );

      await setDoc(docRef, sessionDoc);

      // Update problem's last activity time and increment session count
      const problemDocRef = this.getProblemDoc(session.studentId, session.problemId);
      const problemSnapshot = await getDoc(problemDocRef);

      if (problemSnapshot.exists()) {
        const currentStats = problemSnapshot.data().statistics || {
          totalSessions: 0,
          totalTimeSpent: 0
        };

        await updateDoc(problemDocRef, {
          lastActivityAt: serverTimestamp(),
          'statistics.totalSessions': currentStats.totalSessions + 1,
          'statistics.lastAttemptedAt': serverTimestamp()
        });
      }

      return true;
    } catch (error) {
      console.error('Failed to save session to Firestore:', error);
      return false;
    }
  }

  /**
   * Update existing session (for autosave)
   */
  async updateSession(session: HomeworkSession): Promise<boolean> {
    try {
      const sessionDoc = this.sessionToFirestore(session);
      const docRef = this.getSessionDoc(
        session.studentId,
        session.problemId,
        session.sessionId
      );

      await updateDoc(docRef, {
        ...sessionDoc,
        lastActivityAt: serverTimestamp()
      });

      // Update problem's last activity time
      const problemDocRef = this.getProblemDoc(session.studentId, session.problemId);
      await updateDoc(problemDocRef, {
        lastActivityAt: serverTimestamp(),
        'statistics.lastAttemptedAt': serverTimestamp()
      });

      return true;
    } catch (error) {
      console.error('Failed to update session in Firestore:', error);
      return false;
    }
  }

  /**
   * Mark session as completed
   */
  async completeSession(
    userId: string,
    problemId: string,
    sessionId: string,
    finalOutcome: HomeworkSession['finalOutcome'],
    completionReason?: HomeworkSession['finalOutcome']
  ): Promise<boolean> {
    try {
      const docRef = this.getSessionDoc(userId, problemId, sessionId);

      await updateDoc(docRef, {
        status: 'completed',
        completedAt: serverTimestamp(),
        finalOutcome,
        completionReason,
        lastActivityAt: serverTimestamp()
      });

      // Update problem status
      await this.updateProblemStatus(userId, problemId, 'completed');

      return true;
    } catch (error) {
      console.error('Failed to complete session:', error);
      return false;
    }
  }

  /**
   * Get problem by ID
   */
  async getProblem(userId: string, problemId: string): Promise<FirestoreProblemDocument | null> {
    try {
      const docRef = this.getProblemDoc(userId, problemId);
      const snapshot = await getDoc(docRef);

      if (!snapshot.exists()) {
        return null;
      }

      return snapshot.data() as FirestoreProblemDocument;
    } catch (error) {
      console.error('Failed to get problem:', error);
      return null;
    }
  }

  /**
   * Get session by ID
   */
  async getSession(
    userId: string,
    problemId: string,
    sessionId: string
  ): Promise<FirestoreSessionDocument | null> {
    try {
      const docRef = this.getSessionDoc(userId, problemId, sessionId);
      const snapshot = await getDoc(docRef);

      if (!snapshot.exists()) {
        return null;
      }

      return snapshot.data() as FirestoreSessionDocument;
    } catch (error) {
      console.error('Failed to get session:', error);
      return null;
    }
  }

  /**
   * Get all problems for a user (with pagination)
   */
  async getProblems(
    userId: string,
    options: {
      limitCount?: number;
      status?: UploadedProblem['status'];
      orderByField?: 'uploadedAt' | 'lastActivityAt';
    } = {}
  ): Promise<FirestoreProblemDocument[]> {
    try {
      const {
        limitCount = 50,
        status,
        orderByField = 'lastActivityAt'
      } = options;

      let q = query(
        this.getProblemsCollection(userId),
        orderBy(orderByField, 'desc'),
        limit(limitCount)
      );

      if (status) {
        q = query(q, where('status', '==', status));
      }

      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => doc.data() as FirestoreProblemDocument);
    } catch (error) {
      console.error('Failed to get problems:', error);
      return [];
    }
  }

  /**
   * Get all sessions for a problem
   */
  async getSessionsForProblem(
    userId: string,
    problemId: string
  ): Promise<FirestoreSessionDocument[]> {
    try {
      const q = query(
        this.getSessionsCollection(userId, problemId),
        orderBy('startedAt', 'desc')
      );

      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => doc.data() as FirestoreSessionDocument);
    } catch (error) {
      console.error('Failed to get sessions for problem:', error);
      return [];
    }
  }

  /**
   * Get recent homework activity (for dashboard)
   */
  async getRecentActivity(
    userId: string,
    days: number = 7
  ): Promise<{
    totalProblems: number;
    completedProblems: number;
    totalSessions: number;
    totalTimeSpent: number;
    problemsBySubject: Record<string, number>;
  }> {
    try {
      const cutoffDate = new Date();
      cutoffDate.setDate(cutoffDate.getDate() - days);

      const q = query(
        this.getProblemsCollection(userId),
        where('uploadedAt', '>=', Timestamp.fromDate(cutoffDate))
      );

      const snapshot = await getDocs(q);
      const problems = snapshot.docs.map(doc => doc.data() as FirestoreProblemDocument);

      const stats = {
        totalProblems: problems.length,
        completedProblems: problems.filter(p => p.status === 'completed').length,
        totalSessions: problems.reduce((sum, p) => sum + (p.statistics?.totalSessions || 0), 0),
        totalTimeSpent: problems.reduce((sum, p) => sum + (p.statistics?.totalTimeSpent || 0), 0),
        problemsBySubject: {} as Record<string, number>
      };

      // Count problems by subject
      problems.forEach(p => {
        stats.problemsBySubject[p.subject] = (stats.problemsBySubject[p.subject] || 0) + 1;
      });

      return stats;
    } catch (error) {
      console.error('Failed to get recent activity:', error);
      return {
        totalProblems: 0,
        completedProblems: 0,
        totalSessions: 0,
        totalTimeSpent: 0,
        problemsBySubject: {}
      };
    }
  }

  /**
   * Delete problem and all its sessions
   */
  async deleteProblem(userId: string, problemId: string): Promise<boolean> {
    try {
      const batch = writeBatch(firestore);

      // Delete all sessions
      const sessionsSnapshot = await getDocs(
        this.getSessionsCollection(userId, problemId)
      );

      sessionsSnapshot.docs.forEach(doc => {
        batch.delete(doc.ref);
      });

      // Delete problem document
      batch.delete(this.getProblemDoc(userId, problemId));

      await batch.commit();
      return true;
    } catch (error) {
      console.error('Failed to delete problem:', error);
      return false;
    }
  }

  /**
   * Check if Firestore is available
   */
  isAvailable(): boolean {
    try {
      return firestore !== null && firestore !== undefined;
    } catch {
      return false;
    }
  }
}

export const homeworkPersistenceService = new HomeworkPersistenceService();
