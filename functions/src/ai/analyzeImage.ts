/**
 * Image Analysis Cloud Function
 * Securely proxies multimodal AI requests for image analysis
 *
 * Used by Homework Helper to analyze uploaded problem images
 */

import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { geminiApiKey } from '../config/ai';
import { checkRateLimit, DEFAULT_RATE_LIMITS } from '../utils/rateLimit';

// Request/Response types
export interface AnalyzeImageRequest {
  prompt: string;
  imageBase64: string;  // Base64-encoded image data (without data:... prefix)
  mimeType: string;     // e.g., 'image/png', 'image/jpeg'
}

export interface AnalyzeImageResponse {
  content: string;
}

/**
 * Analyze Image Cloud Function
 * Accepts an image and prompt, returns AI analysis
 */
export const analyzeImage = onCall<AnalyzeImageRequest, Promise<AnalyzeImageResponse>>(
  {
    region: 'asia-southeast1',
    timeoutSeconds: 120,
    memory: '512MiB',  // More memory for image processing
    secrets: [geminiApiKey],
  },
  async (request) => {
    // 1. Require authentication
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'Must be logged in to use image analysis');
    }
    const uid = request.auth.uid;

    // 2. Validate request
    const { prompt, imageBase64, mimeType } = request.data;

    if (!prompt || typeof prompt !== 'string') {
      throw new HttpsError('invalid-argument', 'Prompt is required');
    }

    if (!imageBase64 || typeof imageBase64 !== 'string') {
      throw new HttpsError('invalid-argument', 'Image data is required');
    }

    if (!mimeType || !mimeType.startsWith('image/')) {
      throw new HttpsError('invalid-argument', 'Valid image mime type is required');
    }

    // 3. Validate prompt length (prevents abuse)
    const MAX_PROMPT_LENGTH = 5000;  // Image analysis prompts shouldn't be huge
    if (prompt.length > MAX_PROMPT_LENGTH) {
      throw new HttpsError('invalid-argument', 'Prompt too long. Please shorten your message.');
    }

    // 3.1 Validate image size (max 4MB base64 = ~3MB original)
    if (imageBase64.length > 4 * 1024 * 1024) {
      throw new HttpsError('invalid-argument', 'Image too large. Maximum 3MB allowed.');
    }

    // 4. Check rate limits
    await checkRateLimit(uid, DEFAULT_RATE_LIMITS);

    // 5. Get API key
    const apiKey = geminiApiKey.value();
    if (!apiKey) {
      throw new HttpsError('internal', 'AI service not configured');
    }

    // 6. Call Gemini with multimodal input
    try {
      const requestBody = {
        contents: [
          {
            parts: [
              { text: prompt },
              {
                inline_data: {
                  mime_type: mimeType,
                  data: imageBase64.replace(/^data:[^;]+;base64,/, ''),  // Remove data URL prefix if present
                }
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 4096,
        }
      };

      const model = 'gemini-2.5-flash-preview-05-20';
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Gemini API Error:', response.status, errorData);
        throw new HttpsError('unavailable', 'AI service temporarily unavailable');
      }

      const data = await response.json();
      const content = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!content) {
        throw new HttpsError('internal', 'No response from AI');
      }

      console.log('Image analysis completed:', {
        uid: uid.substring(0, 8) + '...',
        promptLength: prompt.length,
        imageSize: Math.round(imageBase64.length / 1024) + 'KB',
        responseLength: content.length,
      });

      return { content };

    } catch (error: any) {
      if (error instanceof HttpsError) throw error;
      console.error('Image analysis error:', error);
      throw new HttpsError('internal', 'Failed to analyze image');
    }
  }
);
