/**
 * Parent-to-Child Invite Email Template
 */

import { baseEmailTemplate } from './baseTemplate';

export interface InviteEmailData {
  parentName: string;
  childName: string;
  childGrade: string;
  inviteUrl: string;
  expiryDays: number;
}

export function generateInviteEmail(data: InviteEmailData): string {
  const { parentName, childName, childGrade, inviteUrl, expiryDays } = data;

  const content = `
    <!-- Greeting -->
    <h2 style="margin: 0 0 20px; color: #1f2937; font-size: 24px; font-weight: 600;">
      You've been invited to Home Campus!
    </h2>

    <!-- Message -->
    <p style="margin: 0 0 16px; color: #4b5563; font-size: 16px; line-height: 1.6;">
      Hi <strong>${childName}</strong>,
    </p>

    <p style="margin: 0 0 16px; color: #4b5563; font-size: 16px; line-height: 1.6;">
      <strong>${parentName}</strong> has invited you to join <strong>Home Campus</strong>, an AI-powered learning platform designed to help you excel in your studies!
    </p>

    <!-- Account Details Box -->
    <div style="background-color: #FFF8F5; border-left: 4px solid #D97757; padding: 20px; margin: 24px 0; border-radius: 4px;">
      <p style="margin: 0 0 12px; color: #374151; font-size: 14px; font-weight: 600;">
        Your Account Details:
      </p>
      <p style="margin: 0 0 8px; color: #6b7280; font-size: 14px;">
        <strong>Name:</strong> ${childName}
      </p>
      <p style="margin: 0; color: #6b7280; font-size: 14px;">
        <strong>Grade Level:</strong> ${childGrade}
      </p>
    </div>

    <!-- CTA Button -->
    <table role="presentation" style="margin: 32px 0;">
      <tr>
        <td style="border-radius: 6px; background: linear-gradient(135deg, #D97757 0%, #C46649 100%);">
          <a href="${inviteUrl}" style="display: inline-block; padding: 16px 40px; color: #ffffff; text-decoration: none; font-size: 16px; font-weight: 600; border-radius: 6px;">
            Accept Invite & Create Account
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

    <!-- What You'll Get -->
    <div style="margin: 32px 0;">
      <p style="margin: 0 0 16px; color: #1f2937; font-size: 16px; font-weight: 600;">
        What you'll get with Home Campus:
      </p>
      <ul style="margin: 0; padding-left: 20px; color: #4b5563; font-size: 14px; line-height: 1.8;">
        <li>Personalized AI tutoring in Mathematics and more subjects</li>
        <li>Interactive problem-solving with step-by-step guidance</li>
        <li>Visual learning tools and practice exercises</li>
        <li>Track your progress and achievements</li>
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
    title: `You're invited to Home Campus!`,
    preheader: `${parentName} has invited you to join Home Campus. Accept your invite to start learning!`,
    content,
  });
}
