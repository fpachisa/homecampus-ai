/**
 * Prompt Builder Class
 * Fluent API for constructing complex prompts programmatically
 */

import type { BuilderComponent, BuilderOptions, BuilderContext } from '../types/prompts';
import { PromptTemplate } from '../templates/base-template';
import { getFilteredTools } from '../../components/math-tools/mathToolsRegistry';

export class PromptBuilder {
  private components: Map<string, BuilderComponent>;
  private order: string[];
  private options: BuilderOptions;
  private metadata: Record<string, any>;

  constructor(options?: BuilderOptions) {
    this.components = new Map();
    this.order = [];
    this.options = options || {
      separator: '\n\n',
      includeHeaders: true,
      validateOutput: true
    };
    this.metadata = {};
  }

  /**
   * Add role definition
   */
  addRole(role: string, description?: string): this {
    const content = description ? `${role}\n\n${description}` : role;
    this.addComponent('role', 'ROLE', content);
    return this;
  }

  /**
   * Add context section
   */
  addContext(context: any, format: 'json' | 'text' | 'yaml' = 'json'): this {
    const formatted = this.formatContent(context, format);
    this.addComponent('context', 'CONTEXT', formatted);
    return this;
  }

  /**
   * Add learning objectives
   */
  addObjectives(objectives: string[] | Record<string, string[]>): this {
    let formatted: string;

    if (Array.isArray(objectives)) {
      formatted = objectives.map((obj, i) => `${i + 1}. ${obj}`).join('\n');
    } else {
      formatted = Object.entries(objectives)
        .map(([category, items]) => {
          const itemsList = items.map((item, i) => `  ${i + 1}. ${item}`).join('\n');
          return `${category}:\n${itemsList}`;
        })
        .join('\n\n');
    }

    this.addComponent('objectives', 'LEARNING OBJECTIVES', formatted);
    return this;
  }

  /**
   * Add formatting rules
   */
  addFormattingRules(rules: any): this {
    const formatted = this.formatContent(rules, 'json');
    this.addComponent('formatting', 'FORMATTING RULES', formatted);
    return this;
  }

  /**
   * Add output schema
   */
  addOutputSchema(schema: any, description?: string): this {
    const formatted = this.formatContent(schema, 'json');
    const content = description
      ? `${description}\n\n${formatted}`
      : formatted;
    this.addComponent('schema', 'OUTPUT SCHEMA', content);
    return this;
  }

  /**
   * Add visual tools from math tools registry
   */
  addVisualTools(toolNames: string[] | Record<string, any>): this {
    let tools: Record<string, any>;

    // If already filtered tools object, use directly
    if (!Array.isArray(toolNames) && typeof toolNames === 'object') {
      tools = toolNames;
    } else {
      // Otherwise filter from registry
      tools = getFilteredTools(toolNames as string[]);
    }

    const formatted = this.formatContent(tools, 'json');
    this.addComponent('visual_tools', 'AVAILABLE VISUAL TOOLS', formatted);
    return this;
  }

  /**
   * Add instruction section
   */
  addInstructions(instructions: string[] | string): this {
    const formatted = Array.isArray(instructions)
      ? instructions.map((inst, i) => `${i + 1}. ${inst}`).join('\n')
      : instructions;
    this.addComponent('instructions', 'INSTRUCTIONS', formatted);
    return this;
  }

  /**
   * Add examples
   */
  addExamples(examples: Array<{ input?: any; output: any; description?: string }>): this {
    const formatted = examples.map((ex, i) => {
      let example = `Example ${i + 1}:`;
      if (ex.description) {
        example += `\n${ex.description}`;
      }
      if (ex.input !== undefined) {
        example += `\nInput: ${this.formatContent(ex.input, 'auto')}`;
      }
      example += `\nOutput: ${this.formatContent(ex.output, 'auto')}`;
      return example;
    }).join('\n\n');

    this.addComponent('examples', 'EXAMPLES', formatted);
    return this;
  }

  /**
   * Add task description
   */
  addTask(task: string): this {
    this.addComponent('task', 'YOUR TASK', task);
    return this;
  }

  /**
   * Add constraints or rules
   */
  addConstraints(constraints: string[]): this {
    const formatted = constraints.map(c => `- ${c}`).join('\n');
    this.addComponent('constraints', 'CONSTRAINTS', formatted);
    return this;
  }

  /**
   * Add custom section
   */
  addSection(title: string, content: string | any, format: 'auto' | 'json' | 'text' = 'auto'): this {
    const formatted = typeof content === 'string'
      ? content
      : this.formatContent(content, format);
    this.addComponent(title.toLowerCase().replace(/\s+/g, '_'), title.toUpperCase(), formatted);
    return this;
  }

  /**
   * Add raw content without header
   */
  addRaw(content: string): this {
    const id = `raw_${Date.now()}`;
    this.components.set(id, {
      type: 'custom',
      content,
      order: this.order.length
    });
    this.order.push(id);
    return this;
  }

  /**
   * Import from template
   */
  fromTemplate(template: PromptTemplate): this {
    const resolved = template.resolve();
    this.addRaw(resolved);
    return this;
  }

  /**
   * Conditional section
   */
  addIf(condition: boolean, callback: (builder: PromptBuilder) => void): this {
    if (condition) {
      callback(this);
    }
    return this;
  }

  /**
   * Set metadata
   */
  setMetadata(key: string, value: any): this {
    this.metadata[key] = value;
    return this;
  }

  /**
   * Build the final prompt
   */
  build(customOrder?: string[]): string {
    const sections: string[] = [];
    const orderToUse = customOrder || this.order;

    for (const key of orderToUse) {
      const component = this.components.get(key);
      if (!component) continue;

      if (this.options.includeHeaders && component.type !== 'custom') {
        sections.push(component.content);
      } else if (component.type === 'custom') {
        sections.push(component.content);
      } else {
        // Extract content without header
        const lines = component.content.split('\n');
        const contentStart = lines.findIndex(line => line.trim() === '') + 1;
        sections.push(lines.slice(contentStart).join('\n'));
      }
    }

    const prompt = sections.join(this.options.separator || '\n\n');

    // Validate if required
    if (this.options.validateOutput) {
      this.validatePrompt(prompt);
    }

    return prompt;
  }

  /**
   * Build as template
   */
  buildAsTemplate(id?: string, name?: string): PromptTemplate {
    const prompt = this.build();
    return new PromptTemplate({
      id: id || `builder_template_${Date.now()}`,
      name: name || 'Builder Generated Template',
      template: prompt,
      metadata: this.metadata
    });
  }

  /**
   * Clone builder
   */
  clone(): PromptBuilder {
    const cloned = new PromptBuilder(this.options);

    // Copy components
    for (const [key, component] of this.components) {
      cloned.components.set(key, { ...component });
    }

    // Copy order and metadata
    cloned.order = [...this.order];
    cloned.metadata = { ...this.metadata };

    return cloned;
  }

  /**
   * Merge with another builder
   */
  merge(other: PromptBuilder): this {
    for (const [key, component] of other.components) {
      if (!this.components.has(key)) {
        this.components.set(key, component);
        this.order.push(key);
      }
    }
    return this;
  }

  /**
   * Get builder info
   */
  getInfo(): {
    sections: string[];
    metadata: Record<string, any>;
    options: BuilderOptions;
  } {
    return {
      sections: this.order,
      metadata: this.metadata,
      options: this.options
    };
  }

  /**
   * Create from context object
   */
  static fromContext(context: BuilderContext): PromptBuilder {
    const builder = new PromptBuilder();

    if (context.role) {
      builder.addRole(context.role);
    }
    if (context.context) {
      builder.addContext(context.context);
    }
    if (context.objectives) {
      builder.addObjectives(context.objectives);
    }
    if (context.formattingRules) {
      builder.addFormattingRules(context.formattingRules);
    }
    if (context.outputSchema) {
      builder.addOutputSchema(context.outputSchema);
    }
    if (context.customSections) {
      for (const [title, content] of context.customSections) {
        builder.addSection(title, content);
      }
    }

    return builder;
  }

  // ============================================
  // Private Helper Methods
  // ============================================

  /**
   * Add component to builder
   */
  private addComponent(id: string, header: string, content: string): void {
    const formattedContent = this.options.includeHeaders
      ? `${header}:\n${content}`
      : content;

    this.components.set(id, {
      type: id === 'role' ? 'role' :
            id === 'context' ? 'context' :
            id === 'objectives' ? 'objectives' :
            id === 'formatting' ? 'formatting' :
            id === 'schema' ? 'schema' : 'custom',
      content: formattedContent,
      order: this.order.length
    });

    if (!this.order.includes(id)) {
      this.order.push(id);
    }
  }

  /**
   * Format content based on type
   */
  private formatContent(content: any, format: 'auto' | 'json' | 'text' | 'yaml'): string {
    if (format === 'text' || typeof content === 'string') {
      return String(content);
    }

    if (format === 'json' || (format === 'auto' && typeof content === 'object')) {
      return JSON.stringify(content, null, 2);
    }

    if (format === 'yaml') {
      // Simple YAML-like formatting
      return this.toYamlLike(content);
    }

    return String(content);
  }

  /**
   * Simple YAML-like formatting
   */
  private toYamlLike(obj: any, indent: number = 0): string {
    const spaces = ' '.repeat(indent);

    if (Array.isArray(obj)) {
      return obj.map(item => {
        if (typeof item === 'object') {
          return `${spaces}- ${this.toYamlLike(item, indent + 2).trim()}`;
        }
        return `${spaces}- ${item}`;
      }).join('\n');
    }

    if (typeof obj === 'object' && obj !== null) {
      return Object.entries(obj).map(([key, value]) => {
        if (typeof value === 'object') {
          return `${spaces}${key}:\n${this.toYamlLike(value, indent + 2)}`;
        }
        return `${spaces}${key}: ${value}`;
      }).join('\n');
    }

    return String(obj);
  }

  /**
   * Validate the generated prompt
   */
  private validatePrompt(prompt: string): void {
    // Check minimum length
    if (prompt.length < 10) {
      console.warn('Generated prompt seems too short');
    }

    // Check for common issues
    const issues: string[] = [];

    if (!prompt.includes(':') && this.options.includeHeaders) {
      issues.push('No section headers found');
    }

    if (prompt.includes('undefined')) {
      issues.push('Contains undefined values');
    }

    if (prompt.includes('[object Object]')) {
      issues.push('Contains unformatted objects');
    }

    if (issues.length > 0) {
      console.warn('Prompt validation issues:', issues);
    }
  }
}

/**
 * Specialized builder for agent prompts
 */
export class AgentPromptBuilder extends PromptBuilder {
  constructor() {
    super({
      separator: '\n\n',
      includeHeaders: true,
      validateOutput: true
    });
  }

  addAgentRole(agentType: 'evaluator' | 'tutor' | 'question' | 'solution'): this {
    const roles = {
      evaluator: "You are the EVALUATOR AGENT - The 'Teaching Brain' with complete curriculum intelligence.",
      tutor: "You are the TUTOR AGENT - The empathetic, encouraging interface for student interaction.",
      question: "You are the QUESTION AGENT - Generate appropriate problems based on instructions.",
      solution: "You are the SOLUTION AGENT - Provide clear, educational step-by-step solutions."
    };

    return this.addRole(roles[agentType]);
  }

  addTopicContext(topicId: string, section?: string): this {
    return this.addContext({
      topicId,
      currentSection: section,
      timestamp: new Date().toISOString()
    });
  }

  addAgentInstructions(action: string, details?: any): this {
    return this.addSection('AGENT INSTRUCTION', {
      action,
      ...details
    });
  }
}