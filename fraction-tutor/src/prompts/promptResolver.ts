import { SYSTEM_PROMPTS } from './systemPrompts';
import { P6_MATH_FRACTIONS, type TopicId, type SubtopicConfig, type SolutionStep } from './topics/P6-Math-Fractions';

export interface PromptContext {
  topicId: TopicId;
  currentProblemType?: number;
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
  evaluatorReasoning?: string; // Evaluator's reasoning for giving solution/hint

// New fields for visualization extraction
  problemText?: string;
  visualizationId?: string;
  trigger?: 'solution' | 'hint' | 'explanation';

// New fields for step-by-step visualization extraction
  stepConfigs?: any[];
  detectedContext?: string;
  detectedVisualizationId?: string;
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
    const scoringConfig = config.SCORING_CONFIG;
    const rules: string[] = [];

    // Iterate through all problem types in the scoring config
    for (const [problemType, typeConfig] of Object.entries(scoringConfig)) {
      if (typeof typeConfig === 'object' && 'basePoints' in typeConfig) {
        rules.push(`- Problem Type ${problemType}: ${typeConfig.basePoints} points base`);
      }
    }

    return rules.join('\n');
  }

  private formatHintPenalties(config: SubtopicConfig): string {
    const scoringConfig = config.SCORING_CONFIG;
    const penalties: string[] = [];

    // Iterate through all problem types in the scoring config
    for (const [problemType, typeConfig] of Object.entries(scoringConfig)) {
      if (typeof typeConfig === 'object' && 'hintPenalties' in typeConfig) {
        const hp = typeConfig.hintPenalties;
        penalties.push(
          `- Problem Type ${problemType}: -${hp.first} for 1st hint, -${hp.second} for 2nd hint, ${hp.thirdPlus} points if 3+ hints`
        );
      }
    }

    return penalties.join('\n');
  }

  resolveInitialGreeting(context: PromptContext): string {
    const config = this.getTopicConfig(context.topicId);
    return SYSTEM_PROMPTS.INITIAL_GREETING.replace(
      /{TOPIC_NAME}/g,
      config.topicName
    );
  }

  resolveInitialGreetingWithProblem(context: PromptContext): string {
    const config = this.getTopicConfig(context.topicId);
    const problemType = 1; // Always start with problem type 1
    const basePrompt = config.QUESTION_GENERATION[problemType];

    return SYSTEM_PROMPTS.INITIAL_GREETING_WITH_PROBLEM
      .replace(/{TOPIC_NAME}/g, config.topicName)
      .replace(/{question_generation_base_prompt}/g, basePrompt);
  }

  resolveConversationResponse(context: PromptContext): string {
    const config = this.getTopicConfig(context.topicId);
    return SYSTEM_PROMPTS.CONVERSATION_RESPONSE
      .replace(/{TOPIC_NAME}/g, config.topicName)
      .replace(/{current_problem_type}/g, context.currentProblemType?.toString() || '1')
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
      .replace(/{current_problem_type}/g, context.currentProblemType?.toString() || '1')
      .replace(/{current_problem_text}/g, context.currentProblemText || '')
      .replace(/{SCORING_RULES}/g, scoringRules)
      .replace(/{HINT_PENALTIES}/g, hintPenalties)
      .replace(/{recent_history}/g, context.recentHistory || '')
      .replace(/{student_response}/g, context.studentResponse || '');
  }

  resolveTutorAgent(context: PromptContext): string {
    const config = this.getTopicConfig(context.topicId);

    // Get solution steps for current problem type using template mapping
    let solutionStepsTemplate = '';
    if ('SOLUTION_STEPS' in config && config.SOLUTION_STEPS) {
      const problemType = context.currentProblemType || 1;
      const templateId = config.SOLUTION_STEPS.problemTypeMapping[problemType];

      if (templateId && config.SOLUTION_STEPS.templates[templateId]) {
        const template = config.SOLUTION_STEPS.templates[templateId];
        solutionStepsTemplate = template
          .map((step: SolutionStep) => `Step ${step.stepNumber}: ${step.instruction}`)
          .join('\n  ');
      } else {
        console.warn(`No solution template found for problem type ${problemType}, templateId: ${templateId}`);
      }
    }

    return SYSTEM_PROMPTS.TUTOR_AGENT
      .replace(/{TOPIC_NAME}/g, config.topicName)
      .replace(/{evaluator_instruction}/g, context.evaluatorInstruction || '')
      .replace(/{recent_history}/g, context.recentHistory || '')
      .replace(/{student_response}/g, context.studentResponse || '')
      .replace(/{current_problem_type}/g, context.currentProblemType?.toString() || '1')
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
      .replace(/{current_problem_type}/g, context.currentProblemType?.toString() || '1')
      .replace(/{recent_history}/g, context.recentHistory || '')
      .replace(/{student_response}/g, context.studentResponse || '')
      .replace(/{tutor_response}/g, context.tutorResponse || '');
  }

resolveQuestionGeneration(context: PromptContext): string {
    const config = this.getTopicConfig(context.topicId);
    const problemType = context.currentProblemType || 1;
    const basePrompt = config.QUESTION_GENERATION[problemType];

    // Use the new QUESTION_GENERATION_AGENT prompt from systemPrompts
    return SYSTEM_PROMPTS.QUESTION_GENERATION_AGENT
      .replace(/{TOPIC_NAME}/g, config.topicName)
      .replace(/{recent_history}/g, context.recentHistory || '')
      .replace(/{evaluator_reasoning}/g, context.evaluatorReasoning || 'Continue learning')
      .replace(/{current_problem_type}/g, context.currentProblemType?.toString() || '1')
      .replace(/{question_generation_base_prompt}/g, basePrompt);
  }

  getTopicScoringConfig(topicId: TopicId) {
    const config = this.getTopicConfig(topicId);
    return config.SCORING_CONFIG;
  }

  getSolutionStepsForProblemType(config: SubtopicConfig, problemType: number): SolutionStep[] | null {
    if (!('SOLUTION_STEPS' in config) || !config.SOLUTION_STEPS) {
      return null;
    }

    const templateId = config.SOLUTION_STEPS.problemTypeMapping[problemType];
    if (!templateId) {
      console.warn(`No template mapping for problem type ${problemType}`);
      return null;
    }

    const template = config.SOLUTION_STEPS.templates[templateId];
    if (!template) {
      console.warn(`Template '${templateId}' not found`);
      return null;
    }

    return template;
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

  resolveVisualizationAgent(context: PromptContext): string {
    const config = this.getTopicConfig(context.topicId);

    // Get solution steps for current problem type using template mapping
    let solutionStepsTemplate = '';
    if ('SOLUTION_STEPS' in config && config.SOLUTION_STEPS) {
      const problemType = context.currentProblemType || 1;
      const templateId = config.SOLUTION_STEPS.problemTypeMapping[problemType];

      if (templateId && config.SOLUTION_STEPS.templates[templateId]) {
        const template = config.SOLUTION_STEPS.templates[templateId];
        solutionStepsTemplate = template
          .map((step: SolutionStep) => `Step ${step.stepNumber}: ${step.instruction}`)
          .join('\n  ');
      } else {
        console.warn(`No solution template found for problem type ${problemType}, templateId: ${templateId}`);
        solutionStepsTemplate = 'Generate a 4-step solution following standard fraction division procedures.';
      }
    }

    // Get visualization config for this problem type
    const problemType = context.currentProblemType || 1;
    let visualizationId = 'bar-division'; // default fallback
    let dataSchemaJSON = '{}';

    if ('VISUALIZATION_CONFIG' in config && (config as any).VISUALIZATION_CONFIG) {
      const vizConfig = (config as any).VISUALIZATION_CONFIG[problemType];
      if (vizConfig) {
        visualizationId = vizConfig.visualizationId || visualizationId;
        if (vizConfig.dataSchema) {
          dataSchemaJSON = JSON.stringify(vizConfig.dataSchema, null, 2);
        }
      }
    }

    return SYSTEM_PROMPTS.VISUALIZATION_AGENT
      .replace(/{TOPIC_NAME}/g, config.topicName)
      .replace(/{recent_history}/g, context.recentHistory || '')
      .replace(/{student_response}/g, context.studentResponse || '')
      .replace(/{evaluator_reasoning}/g, context.evaluatorReasoning || 'Student needs help with this problem')
      .replace(/{current_problem_type}/g, context.currentProblemType?.toString() || '1')
      .replace(/{problem_text}/g, context.problemText || '')
      .replace(/{SOLUTION_STEPS_TEMPLATE}/g, solutionStepsTemplate)
      .replace(/{visualizationId}/g, visualizationId)
      .replace(/{dataSchemaJSON}/g, dataSchemaJSON);
  }
}

// Export singleton instance
export const promptResolver = new PromptResolver();