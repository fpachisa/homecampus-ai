/**
 * Prompt Library Main Export
 * Central access point for the prompt library system
 */

// ============================================
// Core Exports
// ============================================

// Templates
export { PromptTemplate, TemplateValidators } from './templates/base-template';

// Builders
export { PromptBuilder, AgentPromptBuilder } from './builders/prompt-builder';

// Registry
export { PromptRegistry } from './registry/prompt-registry';

// ============================================
// Protocols & Rules
// ============================================

// Formatting
export {
  FORMATTING_RULES,
  validateFormatting,
  FormatConverter,
  FORMATTING_PRESETS
} from './core/protocols/formatting';

// Interaction
export {
  INTERACTION_PROTOCOL,
  PROGRESSION_MODEL,
  EVALUATOR_DECISION_RULES,
  RESPONSE_SCHEMAS,
  MATH_TOOL_PROTOCOL,
  PRACTICE_MODE_PROTOCOL
} from './core/protocols/interaction';

// ============================================
// Agent Templates
// ============================================

// Evaluator
export {
  EVALUATOR_BASE,
  createEvaluatorTemplate,
  EVALUATOR_DECISION_MATRIX,
  HINT_PROGRESSION
} from './core/agents/evaluator';

// Tutor
export {
  TUTOR_BASE,
  createTutorTemplate,
  SOCRATIC_STRATEGIES,
  EMOTIONAL_TONES,
  HINT_TEMPLATES
} from './core/agents/tutor';

// Question
export {
  QUESTION_BASE,
  createQuestionTemplate,
  PROBLEM_GENERATION_STRATEGIES,
  CONTEXT_POOLS,
  TRANSITION_TEMPLATES
} from './core/agents/question';

// Solution
export {
  SOLUTION_BASE,
  createSolutionTemplate,
  SOLUTION_STRUCTURES,
  EXPLANATION_DEPTH,
  STRUGGLE_POINT_STRATEGIES,
  SOLUTION_SPEECH_TEMPLATES
} from './core/agents/solution';

// ============================================
// Type Exports
// ============================================

export * from './types/prompts';
export * from './types/agents';
export * from './types/topics';

// ============================================
// Main PromptLibrary Class
// ============================================

import { PromptRegistry } from './registry/prompt-registry';
import { PromptBuilder } from './builders/prompt-builder';
import { PromptTemplate } from './templates/base-template';
import { FORMATTING_RULES } from './core/protocols/formatting';
import { INTERACTION_PROTOCOL } from './core/protocols/interaction';
import type { TopicConfig, PromptContext } from './types/prompts';

/**
 * Main PromptLibrary class
 * High-level API for prompt generation
 */
export class PromptLibrary {
  private registry: PromptRegistry;
  private initialized: boolean = false;

  constructor() {
    this.registry = PromptRegistry.getInstance();
    this.initialize();
  }

  /**
   * Initialize the library with base components
   */
  private initialize(): void {
    if (this.initialized) return;

    // Register base agent templates
    this.registerBaseAgents();

    // Register core protocols
    this.registerProtocols();

    this.initialized = true;
  }

  /**
   * Register base agent templates
   */
  private registerBaseAgents(): void {
    // Import agent modules dynamically to register them
    import('./core/agents/evaluator').then(module => {
      this.registry.registerAgent('core.agent.evaluator', module.EVALUATOR_BASE);
      this.registry.registerTemplate('evaluator.base', module.createEvaluatorTemplate());
    });

    import('./core/agents/tutor').then(module => {
      this.registry.registerAgent('core.agent.tutor', module.TUTOR_BASE);
      this.registry.registerTemplate('tutor.base', module.createTutorTemplate());
    });

    import('./core/agents/question').then(module => {
      this.registry.registerAgent('core.agent.question', module.QUESTION_BASE);
      this.registry.registerTemplate('question.base', module.createQuestionTemplate());
    });

    import('./core/agents/solution').then(module => {
      this.registry.registerAgent('core.agent.solution', module.SOLUTION_BASE);
      this.registry.registerTemplate('solution.base', module.createSolutionTemplate());
    });
  }

  /**
   * Register core protocols as templates
   */
  private registerProtocols(): void {
    // Register formatting rules template
    this.registry.registerTemplate(
      'protocol.formatting',
      PromptTemplate.fromString(
        JSON.stringify(FORMATTING_RULES, null, 2),
        'protocol.formatting'
      )
    );

    // Register interaction protocol template
    this.registry.registerTemplate(
      'protocol.interaction',
      PromptTemplate.fromString(
        JSON.stringify(INTERACTION_PROTOCOL, null, 2),
        'protocol.interaction'
      )
    );
  }

  /**
   * Get formatting rules
   */
  getFormattingRules(): any {
    return FORMATTING_RULES;
  }

  /**
   * Get interaction protocol
   */
  getInteractionProtocol(): any {
    return INTERACTION_PROTOCOL;
  }

  /**
   * Register a topic
   */
  registerTopic(id: string, config: TopicConfig): void {
    this.registry.registerTopic(id, config);
  }

  /**
   * Get topic configuration
   */
  getTopic(id: string): TopicConfig | undefined {
    return this.registry.getTopic(id);
  }

  /**
   * Build evaluator prompt for a topic
   */
  buildEvaluatorPrompt(topicId: string, context: PromptContext): string {
    const topic = this.registry.getTopic(topicId);
    if (!topic) {
      throw new Error(`Topic not found: ${topicId}`);
    }

    const builder = new PromptBuilder()
      .addRole(EVALUATOR_BASE.role)
      .addSection('RESPONSIBILITIES', EVALUATOR_BASE.responsibilities)
      .addSection('CAPABILITIES', EVALUATOR_BASE.capabilities)
      .addSection('CONSTRAINTS', EVALUATOR_BASE.constraints);

    // Add topic-specific content
    if (topic.learningObjectives) {
      builder.addObjectives(topic.learningObjectives);
    }

    if (topic.progressionStructure) {
      builder.addSection('PROGRESSION STRUCTURE', topic.progressionStructure);
    }

    // Add context
    builder.addContext(context);

    // Add formatting rules
    builder.addFormattingRules(FORMATTING_RULES);

    // Add output schema
    builder.addOutputSchema(EVALUATOR_BASE.outputSchema);

    return builder.build();
  }

  /**
   * Build tutor prompt
   */
  buildTutorPrompt(topicId: string, instruction: any, context: PromptContext): string {
    const builder = new PromptBuilder()
      .addRole(TUTOR_BASE.role)
      .addSection('RESPONSIBILITIES', TUTOR_BASE.responsibilities)
      .addSection('CONSTRAINTS', TUTOR_BASE.constraints)
      .addSection('INSTRUCTION FROM EVALUATOR', instruction)
      .addContext(context)
      .addFormattingRules(FORMATTING_RULES)
      .addOutputSchema(TUTOR_BASE.outputSchema);

    return builder.build();
  }

  /**
   * Build question prompt
   */
  buildQuestionPrompt(topicId: string, instruction: any, context: PromptContext): string {
    const builder = new PromptBuilder()
      .addRole(QUESTION_BASE.role)
      .addSection('RESPONSIBILITIES', QUESTION_BASE.responsibilities)
      .addSection('CONSTRAINTS', QUESTION_BASE.constraints)
      .addSection('INSTRUCTION FROM EVALUATOR', instruction)
      .addContext(context)
      .addFormattingRules(FORMATTING_RULES)
      .addOutputSchema(QUESTION_BASE.outputSchema);

    return builder.build();
  }

  /**
   * Build solution prompt
   */
  buildSolutionPrompt(topicId: string, instruction: any, context: PromptContext): string {
    const builder = new PromptBuilder()
      .addRole(SOLUTION_BASE.role)
      .addSection('RESPONSIBILITIES', SOLUTION_BASE.responsibilities)
      .addSection('CONSTRAINTS', SOLUTION_BASE.constraints)
      .addSection('INSTRUCTION FROM EVALUATOR', instruction)
      .addContext(context)
      .addFormattingRules(FORMATTING_RULES)
      .addOutputSchema(SOLUTION_BASE.outputSchema);

    return builder.build();
  }

  /**
   * Create a new builder
   */
  createBuilder(): PromptBuilder {
    return new PromptBuilder();
  }

  /**
   * Get a template
   */
  getTemplate(id: string): PromptTemplate | undefined {
    return this.registry.getTemplate(id);
  }

  /**
   * Get registry statistics
   */
  getStats(): any {
    return this.registry.getStats();
  }

  /**
   * Clear cache
   */
  clearCache(): void {
    this.registry.clearCache();
  }
}

// Export singleton instance
export const promptLibrary = new PromptLibrary();

// Export default
export default PromptLibrary;