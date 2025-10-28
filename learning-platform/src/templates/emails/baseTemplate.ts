/**
 * Base Email Template
 *
 * Provides consistent branding and styling for all emails
 */

export interface BaseEmailProps {
  title: string;
  preheader?: string;
  content: string;
}

export function baseEmailTemplate({ title, preheader, content }: BaseEmailProps): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>${title}</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  ${preheader ? `<div style="display: none; max-height: 0px; overflow: hidden;">${preheader}</div>` : ''}

  <!-- Email Container -->
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f4f4f7;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <!-- Email Card -->
        <table role="presentation" style="width: 100%; max-width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);">

          <!-- Header -->
          <tr>
            <td style="padding: 40px 40px 20px; text-align: center; background: linear-gradient(135deg, #D97757 0%, #C46649 100%); border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">
                📚 Home Campus
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; background-color: #f8f9fa; border-radius: 0 0 8px 8px; text-align: center;">
              <p style="margin: 0 0 10px; color: #6b7280; font-size: 14px;">
                This email was sent by <strong>Home Campus</strong>
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                AI-Powered Home Learning Platform
              </p>
              <div style="margin-top: 20px;">
                <a href="mailto:support@homecampus.com" style="color: #D97757; text-decoration: none; font-size: 12px;">Contact Support</a>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
