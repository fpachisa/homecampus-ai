/**
 * Template Generator Service
 *
 * Generates condensed teaching templates from comprehensive notes
 * using AI. Templates are optimized for use as AI context (800-1000 words)
 * while full notes remain rich and comprehensive for students.
 */

import { doc, updateDoc, Timestamp } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { firestore, storage } from './firebase';
import { getFallbackAIService } from './fallbackAIService';

export class TemplateGenerator {
  /**
   * Generate teaching template from comprehensive notes
   * This is called once when notes are uploaded/updated
   */
  async generateTemplateFromNotes(
    subtopicId: string,
    comprehensiveNotes: string
  ): Promise<string> {
    console.log(`[TemplateGenerator] Generating template for ${subtopicId}`);
    console.log(`[TemplateGenerator] Input notes length: ${comprehensiveNotes.length} characters`);

    try {
      // Extract text content if notes contain MDX/JSX
      const textContent = this.extractTextFromMDX(comprehensiveNotes);
      console.log(`[TemplateGenerator] Extracted text length: ${textContent.length} characters`);

      // Generate condensed template using AI
      const template = await this.generateTemplate(textContent);

      // Save template to Firestore
      await this.saveTemplate(subtopicId, template);

      console.log(`[TemplateGenerator] Template generated successfully`);
      console.log(`[TemplateGenerator] Template length: ${template.length} characters`);

      return template;
    } catch (error) {
      console.error(`[TemplateGenerator] Error generating template:`, error);
      throw error;
    }
  }

  /**
   * Generate template from Cloud Storage MDX file
   */
  async generateTemplateFromStorageUrl(
    subtopicId: string,
    storageUrl: string
  ): Promise<string> {
    console.log(`[TemplateGenerator] Loading notes from storage: ${storageUrl}`);

    try {
      // Download notes from Cloud Storage
      const notesRef = ref(storage, storageUrl);
      const downloadUrl = await getDownloadURL(notesRef);

      const response = await fetch(downloadUrl);
      const comprehensiveNotes = await response.text();

      return this.generateTemplateFromNotes(subtopicId, comprehensiveNotes);
    } catch (error) {
      console.error(`[TemplateGenerator] Error loading from storage:`, error);
      throw error;
    }
  }

  /**
   * Regenerate template (when notes are updated)
   */
  async regenerateTemplate(subtopicId: string, comprehensiveNotes: string): Promise<string> {
    console.log(`[TemplateGenerator] Regenerating template for ${subtopicId}`);
    return this.generateTemplateFromNotes(subtopicId, comprehensiveNotes);
  }

  /**
   * Core AI prompt for template generation
   */
  private async generateTemplate(comprehensiveNotes: string): Promise<string> {
    const prompt = `You are an expert educator creating a condensed teaching template.

You will receive comprehensive teaching notes (may be 3000-5000 words or more).
Your job is to distill them into a teaching template (800-1000 words) that will be used as context for AI tutoring.

This template will be included in EVERY AI tutoring interaction, so it must be:
- Concise yet complete
- Action-oriented and practical
- Focused on teaching strategies, not just content
- Easy for an AI tutor to interpret and apply

COMPREHENSIVE NOTES:
${comprehensiveNotes}

Create a teaching template in this exact markdown format:

# Teaching Template

## Key Concept (100-150 words)
[Distill the core concept into 2-3 clear paragraphs. What is the fundamental idea students must understand?]

## Solution Strategy (200-250 words)
[Provide a step-by-step approach for solving problems in this topic]
[Use numbered steps]
[Include when to use each approach]

## Difficulty Progression (150-200 words)
**Easy Level:**
[Describe characteristics of easy problems]
[Example contexts and problem types]
[Whether visualizations are needed]

**Medium Level:**
[Describe medium difficulty problems]
[How they differ from easy]
[Additional complexity]

**Hard Level:**
[Describe hard problems]
[Advanced concepts required]
[Abstract thinking involved]

## Hint Strategy (200-250 words)
**Hint 1 (Gentle guidance):**
[What to reveal at hint level 1 - guide thinking without giving away solution]

**Hint 2 (More direct):**
[What to reveal at hint level 2 - show approach/method]

**Hint 3 (Almost complete):**
[What to reveal at hint level 3 - provide setup, student completes]

## Common Mistakes (100-150 words)
1. [Most common mistake and why it happens]
2. [Second common mistake]
3. [Third common mistake]
[How to help students avoid these]

## Example Problem Patterns (150-200 words)
[Provide 2-3 concrete example patterns with brief solutions]
[These serve as reference for the AI when generating similar problems]

---

IMPORTANT:
- Keep total length between 800-1000 words
- Use clear, concise language
- Focus on practical teaching guidance
- Maintain markdown formatting
- Be specific with examples where helpful

Return ONLY the template content as markdown. No preamble or explanation.`;

    try {
      // Use the fallback AI service which handles Gemini/Claude automatically
      const aiService = getFallbackAIService();
      const response = await aiService.generate(prompt);
      return response.trim();
    } catch (error) {
      console.error('[TemplateGenerator] AI generation failed:', error);
      throw new Error('Failed to generate template with AI');
    }
  }

  /**
   * Extract plain text from MDX/JSX content
   * Removes React components but keeps text content
   */
  private extractTextFromMDX(mdxContent: string): string {
    let text = mdxContent;

    // Remove import statements
    text = text.replace(/^import\s+.*$/gm, '');

    // Remove export statements
    text = text.replace(/^export\s+.*$/gm, '');

    // Remove JSX/React components but keep content inside
    // This is a simple approach - keeps text between tags
    text = text.replace(/<([A-Z][A-Za-z0-9]*)[^>]*>/g, '');
    text = text.replace(/<\/([A-Z][A-Za-z0-9]*)>/g, '');

    // Remove self-closing JSX tags
    text = text.replace(/<[A-Z][A-Za-z0-9]*[^>]*\/>/g, '');

    // Remove HTML comments
    text = text.replace(/<!--[\s\S]*?-->/g, '');

    // Remove code blocks' language identifiers but keep content
    text = text.replace(/```[\w]*\n/g, '```\n');

    // Clean up extra whitespace
    text = text.replace(/\n{3,}/g, '\n\n');
    text = text.replace(/\s+$/gm, '');
    text = text.trim();

    return text;
  }

  /**
   * Save generated template to Firestore
   */
  private async saveTemplate(subtopicId: string, template: string): Promise<void> {
    const docRef = doc(firestore, 'subtopics', subtopicId);

    await updateDoc(docRef, {
      teachingTemplate: template,
      templateGeneratedAt: Timestamp.now(),
      templateVersion: 'v1',
      updatedAt: Timestamp.now()
    });

    console.log(`[TemplateGenerator] Template saved to Firestore`);
  }

  /**
   * Count words in text
   */
  private countWords(text: string): number {
    return text.split(/\s+/).filter(word => word.length > 0).length;
  }

  /**
   * Validate template quality
   * Returns warnings if template doesn't meet criteria
   */
  validateTemplate(template: string): string[] {
    const warnings: string[] = [];
    const wordCount = this.countWords(template);

    // Check word count
    if (wordCount < 700) {
      warnings.push(`Template too short: ${wordCount} words (target: 800-1000)`);
    } else if (wordCount > 1100) {
      warnings.push(`Template too long: ${wordCount} words (target: 800-1000)`);
    }

    // Check for required sections
    const requiredSections = [
      'Key Concept',
      'Solution Strategy',
      'Difficulty Progression',
      'Hint Strategy',
      'Common Mistakes',
      'Example Problem Patterns'
    ];

    for (const section of requiredSections) {
      if (!template.includes(section)) {
        warnings.push(`Missing required section: ${section}`);
      }
    }

    // Check for difficulty levels
    const difficultyLevels = ['Easy Level', 'Medium Level', 'Hard Level'];
    for (const level of difficultyLevels) {
      if (!template.includes(level)) {
        warnings.push(`Missing difficulty level: ${level}`);
      }
    }

    // Check for hint levels
    const hintLevels = ['Hint 1', 'Hint 2', 'Hint 3'];
    for (const level of hintLevels) {
      if (!template.includes(level)) {
        warnings.push(`Missing hint level: ${level}`);
      }
    }

    return warnings;
  }
}

// Export singleton instance
export const templateGenerator = new TemplateGenerator();
