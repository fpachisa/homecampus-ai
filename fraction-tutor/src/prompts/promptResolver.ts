import { SYSTEM_PROMPTS } from './systemPrompts';
import { P6_MATH_FRACTIONS, type TopicId, type SubtopicConfig, type SolutionStep } from './topics/P6-Math-Fractions';

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

// New fields for visualization extraction
  problemText?: string;
  visualizationId?: string;
  trigger?: 'solution' | 'hint' | 'explanation';

// New fields for step-by-step visualization extraction
  stepConfigs?: any[];
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

    // Format solution steps template if available
    let solutionStepsTemplate = '';
    if ('SOLUTION_STEPS' in config && config.SOLUTION_STEPS) {
      solutionStepsTemplate = config.SOLUTION_STEPS.template
        .map((step: SolutionStep) => `Step ${step.stepNumber}: ${step.instruction}`)
        .join('\n  ');
    }

    return SYSTEM_PROMPTS.TUTOR_AGENT
      .replace(/{TOPIC_NAME}/g, config.topicName)
      .replace(/{evaluator_instruction}/g, context.evaluatorInstruction || '')
      .replace(/{recent_history}/g, context.recentHistory || '')
      .replace(/{student_response}/g, context.studentResponse || '')
      .replace(/{current_difficulty}/g, context.currentDifficulty || 'easy')
      .replace(/{hint_level}/g, context.hintLevel?.toString() || '1')
      .replace(/{SOLUTION_STEPS_TEMPLATE}/g, solutionStepsTemplate);
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

  resolveVisualizationExtraction(context: PromptContext): string {
    const config = this.getTopicConfig(context.topicId);

    return `You are a specialized AI agent that extracts mathematical data from fraction division problems for visualization purposes.

TOPIC: ${config.topicName}
PROBLEM TEXT: ${context.problemText}
VISUALIZATION TYPE: ${context.visualizationId}
TRIGGER: ${context.trigger}

Your task is to analyze the fraction division problem and extract the numerical data and context needed for visualization.

For problems like "You have 3/4 cup of flour and want to divide it equally among 3 loaves. How much flour per loaf?":

Extract:
1. numerator: 3 (from 3/4)
2. denominator: 4 (from 3/4)
3. divisor: 3 (number of groups/parts)
4. context: descriptive context (e.g., "flour-loaves", "pizza-friends", "ribbon-pieces")

Generate appropriate visualization stages:
- Stage 1: Show original fraction
- Stage 2: Show division/partitioning
- Stage 3: Show result per group

Create contextual labels that match the problem scenario.

IMPORTANT: Return ONLY valid JSON in this exact format:
{
  "problemData": {
    "numerator": number,
    "denominator": number,
    "divisor": number,
    "context": "string"
  },
  "stages": [
    {
      "id": "original",
      "title": "Original Amount",
      "description": "You start with [amount]",
      "duration": 2000
    },
    {
      "id": "partition",
      "title": "Divide into Groups",
      "description": "Split the [amount] into [divisor] equal parts",
      "duration": 3000
    },
    {
      "id": "result",
      "title": "Result",
      "description": "Each part gets [result amount]",
      "duration": 2000
    }
  ],
  "contextualLabels": {
    "original": "[amount description]",
    "division": "[divisor description]",
    "result": "[result description]"
  }
}`;
  }

  resolveStepByStepVisualizationExtraction(context: PromptContext): string {
    // Format step visualization requirements
    const stepVisualizationRequirements = context.stepConfigs?.map(config =>
      `Step ${config.stepNumber}: ${config.includeVisualization ? `Include visualization (${config.visualizationId})` : 'No visualization'}`
    ).join('\n') || '';

    // Get default visualization ID from the first step that has visualization
    const defaultVisualizationId = context.stepConfigs?.find(config => config.includeVisualization)?.visualizationId || 'bar-division-simple';

    return SYSTEM_PROMPTS.STEP_BY_STEP_VISUALIZATION_EXTRACTION
      .replace(/{tutor_response}/g, context.tutorResponse || '')
      .replace(/{problem_text}/g, context.problemText || '')
      .replace(/{step_visualization_requirements}/g, stepVisualizationRequirements)
      .replace(/{default_visualization_id}/g, defaultVisualizationId);
  }
}

// Export singleton instance
export const promptResolver = new PromptResolver();