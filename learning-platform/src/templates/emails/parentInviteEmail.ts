/**
 * Child-to-Parent Invite Email Template
 * Used when a student invites their parent to monitor their learning
 */

import { baseEmailTemplate } from './baseTemplate';

export interface ParentInviteEmailData {
  studentName: string;
  studentGrade: string;
  parentEmail: string;
  inviteUrl: string;
  expiryDays: number;
}

export function generateParentInviteEmail(data: ParentInviteEmailData): string {
  const { studentName, studentGrade, inviteUrl, expiryDays } = data;

  const content = `
    <!-- Greeting -->
    <h2 style="margin: 0 0 20px; color: #1f2937; font-size: 24px; font-weight: 600;">
      You've been invited to Home Campus!
    </h2>

    <!-- Message -->
    <p style="margin: 0 0 16px; color: #4b5563; font-size: 16px; line-height: 1.6;">
      Hi there,
    </p>

    <p style="margin: 0 0 16px; color: #4b5563; font-size: 16px; line-height: 1.6;">
      <strong>${studentName}</strong> has invited you to join <strong>Home Campus</strong> so you can support and monitor their learning journey!
    </p>

    <p style="margin: 0 0 16px; color: #4b5563; font-size: 16px; line-height: 1.6;">
      Home Campus is an AI-powered learning platform that provides personalized tutoring across multiple subjects. By creating a parent account, you'll be able to stay involved in ${studentName}'s educational progress.
    </p>

    <!-- Student Details Box -->
    <div style="background-color: #FFF8F5; border-left: 4px solid #D97757; padding: 20px; margin: 24px 0; border-radius: 4px;">
      <p style="margin: 0 0 12px; color: #374151; font-size: 14px; font-weight: 600;">
        Student Information:
      </p>
      <p style="margin: 0 0 8px; color: #6b7280; font-size: 14px;">
        <strong>Name:</strong> ${studentName}
      </p>
      <p style="margin: 0; color: #6b7280; font-size: 14px;">
        <strong>Grade Level:</strong> ${studentGrade}
      </p>
    </div>

    <!-- CTA Button -->
    <table role="presentation" style="margin: 32px 0;">
      <tr>
        <td style="border-radius: 6px; background: linear-gradient(135deg, #D97757 0%, #C46649 100%);">
          <a href="${inviteUrl}" style="display: inline-block; padding: 16px 40px; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 600; border-radius: 6px;">
            Accept Invite & Create Parent Account
          </a>
        </td>
      </tr>
    </table>

    <!-- Alternative Link -->
    <p style="margin: 24px 0 16px; color: #6b7280; font-size: 14px; line-height: 1.6;">
      Or copy and paste this link into your browser:
    </p>
    <p style="margin: 0 0 24px; color: #D97757; font-size: 14px; word-break: break-all;">
      ${inviteUrl}
    </p>

    <!-- What You'll Get as a Parent -->
    <div style="margin: 32px 0;">
      <p style="margin: 0 0 16px; color: #1f2937; font-size: 16px; font-weight: 600;">
        What you'll get with your parent account:
      </p>
      <ul style="margin: 0; padding-left: 20px; color: #4b5563; font-size: 14px; line-height: 1.8;">
        <li><strong>Progress Monitoring:</strong> Track ${studentName}'s learning progress, completed topics, and mastery levels</li>
        <li><strong>Learning Insights:</strong> Understand their strengths and identify areas where they might need extra support</li>
        <li><strong>Support & Engagement:</strong> Stay involved in their education, celebrate achievements, and provide encouragement</li>
        <li><strong>Safe Environment:</strong> Rest assured with age-appropriate content and parental oversight features</li>
      </ul>
    </div>

    <!-- Expiry Notice -->
    <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px; margin: 24px 0; border-radius: 4px;">
      <p style="margin: 0; color: #92400e; font-size: 14px;">
        ⏰ <strong>Note:</strong> This invite will expire in ${expiryDays} days. Please accept it soon!
      </p>
    </div>

    <!-- Support -->
    <p style="margin: 24px 0 0; color: #6b7280; font-size: 14px; line-height: 1.6;">
      If you have any questions or need help getting started, don't hesitate to reach out to our support team.
    </p>
  `;

  return baseEmailTemplate({
    title: `${studentName} has invited you to Home Campus!`,
    preheader: `${studentName} wants you to support their learning on Home Campus. Accept your invite to create a parent account.`,
    content,
  });
}
