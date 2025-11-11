/**
 * Email Service
 *
 * Handles email sending via Firebase Trigger Email extension
 * Writes email documents to Firestore 'mail' collection for the extension to process
 */

import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { firestore } from './firebase';
import { generateChildInviteEmail } from '../templates/emails/childInviteEmail';
import { generateParentInviteEmail } from '../templates/emails/parentInviteEmail';

// Email configuration from environment variables
const EMAIL_COLLECTION = import.meta.env.VITE_EMAIL_COLLECTION || 'mail';
const FROM_EMAIL = import.meta.env.VITE_FROM_EMAIL || 'noreply@homecampus.ai';
const FROM_NAME = import.meta.env.VITE_FROM_NAME || 'Home Campus';

export interface EmailMessage {
  to: string | string[];
  from?: string;
  replyTo?: string;
  message: {
    subject: string;
    html: string;
    text?: string;
  };
}

class EmailService {
  /**
   * Send a parent-to-child invite email
   * Used when a parent invites their child to join the platform
   */
  async sendChildInviteEmail(
    toEmail: string,
    inviteUrl: string,
    childInfo: { displayName: string; gradeLevel: string },
    parentName: string
  ): Promise<void> {
    try {
      // Generate HTML email content
      const htmlContent = generateChildInviteEmail({
        parentName,
        childName: childInfo.displayName,
        childGrade: childInfo.gradeLevel,
        inviteUrl,
        expiryDays: 30,
      });

      // Plain text fallback
      const textContent = `
Hi ${childInfo.displayName},

${parentName} has invited you to join Home Campus, an AI-powered learning platform!

Your Account Details:
- Name: ${childInfo.displayName}
- Grade Level: ${childInfo.gradeLevel}

Accept your invite by clicking this link:
${inviteUrl}

This invite will expire in 30 days.

If you have any questions, please contact our support team.

Best regards,
The Home Campus Team
      `.trim();

      // Create email document in Firestore
      const emailMessage: EmailMessage = {
        to: toEmail,
        from: `${FROM_NAME} <${FROM_EMAIL}>`,
        replyTo: FROM_EMAIL,
        message: {
          subject: `You've been invited to Home Campus!`,
          html: htmlContent,
          text: textContent,
        },
      };

      // Write to Firestore - Firebase extension will detect and send
      const mailRef = collection(firestore, EMAIL_COLLECTION);
      const docRef = await addDoc(mailRef, {
        ...emailMessage,
        createdAt: serverTimestamp(),
      });

      console.log('[EmailService] Child invite email queued:', {
        docId: docRef.id,
        to: toEmail,
        childName: childInfo.displayName,
      });
    } catch (error) {
      console.error('[EmailService] Failed to send child invite email:', error);
      throw new Error('Failed to send child invite email');
    }
  }

  /**
   * Send a child-to-parent invite email
   * Used when a student invites their parent to monitor their learning
   */
  async sendParentInviteEmail(
    toEmail: string,
    inviteUrl: string,
    studentInfo: { displayName: string; gradeLevel: string }
  ): Promise<void> {
    try {
      // Generate HTML email content
      const htmlContent = generateParentInviteEmail({
        studentName: studentInfo.displayName,
        studentGrade: studentInfo.gradeLevel,
        parentEmail: toEmail,
        inviteUrl,
        expiryDays: 30,
      });

      // Plain text fallback
      const textContent = `
Hi there,

${studentInfo.displayName} has invited you to join Home Campus so you can support and monitor their learning journey!

Home Campus is an AI-powered learning platform that provides personalized tutoring across multiple subjects.

Student Information:
- Name: ${studentInfo.displayName}
- Grade Level: ${studentInfo.gradeLevel}

What you'll get with your parent account:
- Progress Monitoring: Track ${studentInfo.displayName}'s learning progress and mastery levels
- Learning Insights: Understand their strengths and areas needing support
- Support & Engagement: Stay involved, celebrate achievements, provide encouragement
- Safe Environment: Age-appropriate content with parental oversight

Accept your invite by clicking this link:
${inviteUrl}

This invite will expire in 30 days.

If you have any questions, please contact our support team.

Best regards,
The Home Campus Team
      `.trim();

      // Create email document in Firestore
      const emailMessage: EmailMessage = {
        to: toEmail,
        from: `${FROM_NAME} <${FROM_EMAIL}>`,
        replyTo: FROM_EMAIL,
        message: {
          subject: `${studentInfo.displayName} has invited you to Home Campus!`,
          html: htmlContent,
          text: textContent,
        },
      };

      // Write to Firestore - Firebase extension will detect and send
      const mailRef = collection(firestore, EMAIL_COLLECTION);
      const docRef = await addDoc(mailRef, {
        ...emailMessage,
        createdAt: serverTimestamp(),
      });

      console.log('[EmailService] Parent invite email queued:', {
        docId: docRef.id,
        to: toEmail,
        studentName: studentInfo.displayName,
      });
    } catch (error) {
      console.error('[EmailService] Failed to send parent invite email:', error);
      throw new Error('Failed to send parent invite email');
    }
  }

  /**
   * Send a welcome email to new users
   */
  async sendWelcomeEmail(toEmail: string, displayName: string): Promise<void> {
    try {
      const emailMessage: EmailMessage = {
        to: toEmail,
        from: `${FROM_NAME} <${FROM_EMAIL}>`,
        message: {
          subject: 'Welcome to Home Campus!',
          html: `
            <h1>Welcome to Home Campus, ${displayName}!</h1>
            <p>We're excited to have you join our learning community.</p>
            <p>Get started by exploring our topics and starting your first learning session.</p>
          `,
          text: `Welcome to Home Campus, ${displayName}! We're excited to have you join our learning community.`,
        },
      };

      const mailRef = collection(firestore, EMAIL_COLLECTION);
      await addDoc(mailRef, {
        ...emailMessage,
        createdAt: serverTimestamp(),
      });

      console.log('[EmailService] Welcome email queued:', { to: toEmail });
    } catch (error) {
      console.error('[EmailService] Failed to send welcome email:', error);
      // Don't throw - welcome email is optional
    }
  }

  /**
   * Send a generic email
   * Useful for custom notifications
   */
  async sendEmail(
    toEmail: string | string[],
    subject: string,
    htmlContent: string,
    textContent?: string
  ): Promise<void> {
    try {
      const emailMessage: EmailMessage = {
        to: toEmail,
        from: `${FROM_NAME} <${FROM_EMAIL}>`,
        message: {
          subject,
          html: htmlContent,
          text: textContent || '',
        },
      };

      const mailRef = collection(firestore, EMAIL_COLLECTION);
      await addDoc(mailRef, {
        ...emailMessage,
        createdAt: serverTimestamp(),
      });

      console.log('[EmailService] Email queued:', { to: toEmail, subject });
    } catch (error) {
      console.error('[EmailService] Failed to send email:', error);
      throw new Error('Failed to send email');
    }
  }
}

// Export singleton instance
export const emailService = new EmailService();
