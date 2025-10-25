/**
 * Email Service
 *
 * Handles email sending via Firebase Trigger Email extension
 * Writes email documents to Firestore 'mail' collection for the extension to process
 */

import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { firestore } from './firebase';
import { generateInviteEmail } from '../templates/emails/inviteEmail';

// Email configuration from environment variables
const EMAIL_COLLECTION = import.meta.env.VITE_EMAIL_COLLECTION || 'mail';
const FROM_EMAIL = import.meta.env.VITE_FROM_EMAIL || 'noreply@homecampus.com';
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
   */
  async sendInviteEmail(
    toEmail: string,
    inviteUrl: string,
    childInfo: { displayName: string; gradeLevel: string },
    parentName: string
  ): Promise<void> {
    try {
      // Generate HTML email content
      const htmlContent = generateInviteEmail({
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

      console.log('[EmailService] Invite email queued:', {
        docId: docRef.id,
        to: toEmail,
        childName: childInfo.displayName,
      });
    } catch (error) {
      console.error('[EmailService] Failed to send invite email:', error);
      throw new Error('Failed to send invite email');
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
