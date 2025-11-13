/**
 * Mastery Event Service
 *
 * Tracks when students master sections in Learn Mode.
 * Used for:
 * - Mastery timeline on dashboard
 * - Achievement tracking
 * - Progress analytics
 *
 * Collection: users/{uid}/masteryEvents
 */

import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit as firestoreLimit,
  Timestamp,
  serverTimestamp
} from 'firebase/firestore';
import { firestore } from './firebase';
import { getLocalDateString } from '../utils/dateUtils';

// ============================================
// TYPES
// ============================================

export interface MasteryEvent {
  eventId: string;
  date: string;               // YYYY-MM-DD (for timeline grouping)
  timestamp: Timestamp;       // Exact time
  topicId: string;            // e.g., "s3-math-trigonometry"
  topicDisplayName: string;   // e.g., "Trigonometry"
  subtopicId: string;         // e.g., "s3-math-trigonometry-basic-ratios"
  sectionId: string;          // e.g., "section-1"
  sectionName: string;        // e.g., "Basic Ratios"
  sectionNumber: number;      // 1-based index
}

export interface MasteryEventInput {
  topicId: string;
  topicDisplayName: string;
  subtopicId: string;
  sectionId: string;
  sectionName: string;
  sectionNumber: number;
}

// ============================================
// CORE FUNCTIONS
// ============================================

/**
 * Record a mastery event
 *
 * Called when a student masters a section in Learn Mode.
 *
 * @param uid - User ID
 * @param eventData - Mastery event data
 * @returns Event ID
 */
export async function recordMasteryEvent(
  uid: string,
  eventData: MasteryEventInput
): Promise<string> {
  try {
    const eventsRef = collection(firestore, `users/${uid}/masteryEvents`);

    const event = {
      date: getLocalDateString(),
      timestamp: serverTimestamp(),
      ...eventData
    };

    const docRef = await addDoc(eventsRef, event);

    console.log('🎓 Mastery event recorded:', {
      eventId: docRef.id,
      topic: eventData.topicDisplayName,
      section: eventData.sectionName
    });

    return docRef.id;
  } catch (error) {
    console.error('Error recording mastery event:', error);
    throw error;
  }
}

/**
 * Get recent mastery events
 *
 * @param uid - User ID
 * @param limitCount - Number of events to fetch (default: 50)
 * @returns Array of mastery events (most recent first)
 */
export async function getMasteryEvents(
  uid: string,
  limitCount: number = 50
): Promise<MasteryEvent[]> {
  try {
    const eventsRef = collection(firestore, `users/${uid}/masteryEvents`);

    const q = query(
      eventsRef,
      orderBy('timestamp', 'desc'),
      firestoreLimit(limitCount)
    );

    const snapshot = await getDocs(q);
    const events: MasteryEvent[] = [];

    snapshot.forEach(doc => {
      events.push({
        eventId: doc.id,
        ...doc.data()
      } as MasteryEvent);
    });

    return events;
  } catch (error) {
    console.error('Error fetching mastery events:', error);
    return [];
  }
}

/**
 * Get mastery events for a specific topic
 *
 * @param uid - User ID
 * @param topicId - Topic ID to filter by
 * @returns Array of mastery events for that topic
 */
export async function getMasteryEventsForTopic(
  uid: string,
  topicId: string
): Promise<MasteryEvent[]> {
  try {
    const allEvents = await getMasteryEvents(uid, 100);
    return allEvents.filter(event => event.topicId === topicId);
  } catch (error) {
    console.error('Error fetching mastery events for topic:', error);
    return [];
  }
}

/**
 * Get mastery timeline (grouped by date)
 *
 * Returns events grouped by date for timeline visualization.
 *
 * @param uid - User ID
 * @param limitCount - Number of events to fetch
 * @returns Map of date -> events
 */
export async function getMasteryTimeline(
  uid: string,
  limitCount: number = 50
): Promise<Map<string, MasteryEvent[]>> {
  try {
    const events = await getMasteryEvents(uid, limitCount);
    const timeline = new Map<string, MasteryEvent[]>();

    events.forEach(event => {
      const existing = timeline.get(event.date) || [];
      existing.push(event);
      timeline.set(event.date, existing);
    });

    return timeline;
  } catch (error) {
    console.error('Error building mastery timeline:', error);
    return new Map();
  }
}

/**
 * Check if section was already mastered
 *
 * Prevents duplicate events for the same section.
 *
 * @param uid - User ID
 * @param subtopicId - Subtopic ID
 * @param sectionNumber - Section number
 * @returns True if already recorded
 */
export async function isSectionMastered(
  uid: string,
  subtopicId: string,
  sectionNumber: number
): Promise<boolean> {
  try {
    const events = await getMasteryEvents(uid, 100);
    return events.some(
      event =>
        event.subtopicId === subtopicId &&
        event.sectionNumber === sectionNumber
    );
  } catch (error) {
    console.error('Error checking section mastery:', error);
    return false;
  }
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Format mastery events for timeline display
 *
 * @param events - Array of mastery events
 * @returns Formatted timeline entries
 */
export function formatMasteryTimeline(events: MasteryEvent[]): {
  date: string;
  displayDate: string;
  events: {
    topicName: string;
    sectionName: string;
    icon: string;
  }[];
}[] {
  const timeline = new Map<string, MasteryEvent[]>();

  // Group by date
  events.forEach(event => {
    const existing = timeline.get(event.date) || [];
    existing.push(event);
    timeline.set(event.date, existing);
  });

  // Convert to array format
  return Array.from(timeline.entries()).map(([date, events]) => ({
    date,
    displayDate: formatDate(date),
    events: events.map(event => ({
      topicName: event.topicDisplayName,
      sectionName: event.sectionName,
      icon: '✅'
    }))
  }));
}

/**
 * Format date string for display
 */
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (dateStr === getLocalDateString(today)) {
    return 'Today';
  } else if (dateStr === getLocalDateString(yesterday)) {
    return 'Yesterday';
  } else {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }
}

// ============================================
// EXPORTS
// ============================================

export const masteryEventService = {
  recordMasteryEvent,
  getMasteryEvents,
  getMasteryEventsForTopic,
  getMasteryTimeline,
  isSectionMastered,
  formatMasteryTimeline
};
