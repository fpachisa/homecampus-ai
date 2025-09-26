import { SYSTEM_PROMPTS } from './systemPrompts';
import { P6_MATH_FRACTIONS, type TopicId, type SubtopicConfig } from './topics/P6-Math-Fractions';

export interface PromptContext {
  topicId: TopicId;
  currentDifficulty?: 'easy' | 'medium' | 'hard';
  recentHistory?: string;
  studentResponse?: string;
  tutorResponse?: string;
  finalScore?: number;
  problemsCompleted?: number;
  sessionDuration?: number;

// New fields for sequential architecture
  currentProblemId?: string;
  hintsGiven?: number;
  studentAttempts?: number;
  currentProblemText?: string;
  evaluatorInstruction?: string;
  hintLevel?: number;
  evaluatorReasoning?: string;
}

export class PromptResolver {
  private getTopicConfig(topicId: TopicId): SubtopicConfig {
    const config = P6_MATH_FRACTIONS[topicId];
    if (!config) {
      throw new Error(`Topic configuration not found for: ${topicId}`);
    }
    return config;
  }

  private formatScoringRules(config: SubtopicConfig): string {
    const { points } = config.SCORING_CONFIG;
    return [
      `- Easy problems: ${points.easy} points base`,
      `- Medium problems: ${points.medium} points base`,
      `- Hard problems: ${points.hard} points base`
    ].join('\n');
  }

  private formatHintPenalties(config: SubtopicConfig): string {
    const { hintPenalties } = config.SCORING_CONFIG;
    return [
      `- Easy/Medium: -${hintPenalties.easy.first} for 1st hint, -${hintPenalties.easy.second} for 2nd hint, ${hintPenalties.easy.thirdPlus} points if 3+ hints`,
      `- Hard: -${hintPenalties.hard.first} for 1st hint, -${hintPenalties.hard.second} for 2nd hint, ${hintPenalties.hard.thirdPlus} points if 3+ hints`
    ].join('\n');
  }

  resolveInitialGreeting(context: PromptContext): string {
    const config = this.getTopicConfig(context.topicId);
    return SYSTEM_PROMPTS.INITIAL_GREETING.replace(
      /{TOPIC_NAME}/g,
      config.topicName
    );
  }

  resolveConversationResponse(context: PromptContext): string {
    const config = this.getTopicConfig(context.topicId);
    return SYSTEM_PROMPTS.CONVERSATION_RESPONSE
      .replace(/{TOPIC_NAME}/g, config.topicName)
      .replace(/{current_difficulty}/g, context.currentDifficulty || 'easy')
      .replace(/{recent_history}/g, context.recentHistory || '')
      .replace(/{student_response}/g, context.studentResponse || '');
  }

  resolveCelebration(context: PromptContext): string {
    const config = this.getTopicConfig(context.topicId);
    return SYSTEM_PROMPTS.CELEBRATION
      .replace(/{TOPIC_NAME}/g, config.topicName)
      .replace(/{final_score}/g, context.finalScore?.toFixed(2) || '0.00')
      .replace(/{problems_completed}/g, context.problemsCompleted?.toString() || '0')
      .replace(/{session_duration}/g, context.sessionDuration?.toString() || '0');
  }

resolveEvaluatorAgent(context: PromptContext): string {
    const config = this.getTopicConfig(context.topicId);
    const scoringRules = this.formatScoringRules(config);
    const hintPenalties = this.formatHintPenalties(config);

    return SYSTEM_PROMPTS.EVALUATOR_AGENT
      .replace(/{TOPIC_NAME}/g, config.topicName)
      .replace(/{current_problem_id}/g, context.currentProblemId || 'unknown')
      .replace(/{hints_given}/g, context.hintsGiven?.toString() || '0')
      .replace(/{student_attempts}/g, context.studentAttempts?.toString() || '0')
      .replace(/{current_difficulty}/g, context.currentDifficulty || 'easy')
      .replace(/{current_problem_text}/g, context.currentProblemText || '')
      .replace(/{SCORING_RULES}/g, scoringRules)
      .replace(/{HINT_PENALTIES}/g, hintPenalties)
      .replace(/{recent_history}/g, context.recentHistory || '')
      .replace(/{student_response}/g, context.studentResponse || '');
  }

  resolveTutorAgent(context: PromptContext): string {
    const config = this.getTopicConfig(context.topicId);

    return SYSTEM_PROMPTS.TUTOR_AGENT
      .replace(/{TOPIC_NAME}/g, config.topicName)
      .replace(/{evaluator_instruction}/g, context.evaluatorInstruction || '')
      .replace(/{recent_history}/g, context.recentHistory || '')
      .replace(/{student_response}/g, context.studentResponse || '')
      .replace(/{current_difficulty}/g, context.currentDifficulty || 'easy')
      .replace(/{hint_level}/g, context.hintLevel?.toString() || '1');
  }

  resolveAnswerEvaluation(context: PromptContext): string {
    const config = this.getTopicConfig(context.topicId);
    const scoringRules = this.formatScoringRules(config);
    const hintPenalties = this.formatHintPenalties(config);

    return SYSTEM_PROMPTS.ANSWER_EVALUATION
      .replace(/{TOPIC_NAME}/g, config.topicName)
      .replace(/{SCORING_RULES}/g, scoringRules)
      .replace(/{HINT_PENALTIES}/g, hintPenalties)
      .replace(/{current_difficulty}/g, context.currentDifficulty || 'easy')
      .replace(/{recent_history}/g, context.recentHistory || '')
      .replace(/{student_response}/g, context.studentResponse || '')
      .replace(/{tutor_response}/g, context.tutorResponse || '');
  }

resolveQuestionGeneration(context: PromptContext): string {
    const config = this.getTopicConfig(context.topicId);
    const difficulty = context.currentDifficulty || 'easy';
    const basePrompt = config.QUESTION_GENERATION[difficulty];

    // If we have evaluator reasoning and history, wrap with acknowledgment context
    if (context.evaluatorReasoning && context.recentHistory) {
      return `You are generating a new math problem with appropriate acknowledgment based on the context.

CONTEXT:
- Recent conversation: ${context.recentHistory}
- Evaluator's reasoning: ${context.evaluatorReasoning}

YOUR TASK:
1. First, provide an appropriate acknowledgment based on the context and reasoning:
   - If the student answered correctly: Celebrate enthusiastically and acknowledge their success
   - If the student struggled or couldn't answer: Provide encouraging words and positive reinforcement

2. Then say you'll give them a new problem to work on

3. Finally, generate a new problem using these guidelines:
${basePrompt}

IMPORTANT:
- Start with acknowledgment, then introduce the new problem
- Keep the tone warm, encouraging, and age-appropriate for Primary 6
- The problem generation should follow the specific guidelines above exactly

Response format: [Acknowledgment] + [Transition] + [New Problem]`;
    }

    // If no context, return the base prompt (backward compatibility)
    return basePrompt;
  }

  getTopicScoringConfig(topicId: TopicId) {
    const config = this.getTopicConfig(topicId);
    return config.SCORING_CONFIG;
  }
}

// Export singleton instance
export const promptResolver = new PromptResolver();