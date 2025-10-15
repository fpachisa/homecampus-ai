/**
 * Base Template Class
 * Core template system for prompt composition and resolution
 */

import type {
  DeepPartial,
  PromptTemplateConfig,
  TemplateVariable,
  TemplateValidator
} from '../types/prompts';

export class PromptTemplate {
  private id: string;
  private name: string;
  private template: string;
  private variables: Map<string, any>;
  private validators: TemplateValidator[];
  private metadata: Record<string, any>;
  private parent?: PromptTemplate;

  constructor(config: PromptTemplateConfig) {
    this.id = config.id;
    this.name = config.name;
    this.template = config.template;
    this.variables = new Map();
    this.validators = config.validators || [];
    this.metadata = config.metadata || {};

    // Initialize default variables if provided
    if (config.variables) {
      config.variables.forEach(v => {
        if (v.default !== undefined) {
          this.variables.set(v.key, v.default);
        }
      });
    }
  }

  /**
   * Set a variable value (fluent API)
   */
  set(key: string, value: any): this {
    this.variables.set(key, value);
    return this;
  }

  /**
   * Set multiple variables at once
   */
  setMany(variables: Record<string, any>): this {
    Object.entries(variables).forEach(([key, value]) => {
      this.variables.set(key, value);
    });
    return this;
  }

  /**
   * Set context object (flattens nested objects)
   */
  setContext(context: any): this {
    const flattened = this.flattenObject(context);
    Object.entries(flattened).forEach(([key, value]) => {
      this.variables.set(key, value);
    });
    return this;
  }

  /**
   * Add a validation rule
   */
  validate(validator: TemplateValidator): this {
    this.validators.push(validator);
    return this;
  }

  /**
   * Resolve the template with current variables
   */
  resolve(): string {
    // Run validators
    this.runValidators();

    // Start with template
    let resolved = this.template;

    // If has parent, prepend parent's resolved template
    if (this.parent) {
      const parentResolved = this.parent.clone().setMany(
        Object.fromEntries(this.variables)
      ).resolve();
      resolved = parentResolved + '\n\n' + resolved;
    }

    // Replace all variables
    for (const [key, value] of this.variables) {
      const patterns = [
        new RegExp(`{${key}}`, 'g'),           // {variable}
        new RegExp(`{{${key}}}`, 'g'),         // {{variable}}
        new RegExp(`\\$\\{${key}\\}`, 'g')     // ${variable}
      ];

      const replacement = this.formatValue(value);

      patterns.forEach(pattern => {
        resolved = resolved.replace(pattern, replacement);
      });
    }

    // Check for unreplaced variables
    const unreplaced = resolved.match(/{[^}]+}|{{[^}]+}}|\$\{[^}]+\}/g);
    if (unreplaced && unreplaced.length > 0) {
      console.warn(`Template ${this.id} has unreplaced variables:`, unreplaced);
    }

    return resolved;
  }

  /**
   * Clone the template
   */
  clone(): PromptTemplate {
    const cloned = new PromptTemplate({
      id: `${this.id}_clone_${Date.now()}`,
      name: this.name,
      template: this.template,
      validators: [...this.validators],
      metadata: { ...this.metadata }
    });

    // Copy variables
    for (const [key, value] of this.variables) {
      cloned.variables.set(key, value);
    }

    // Copy parent reference
    if (this.parent) {
      cloned.parent = this.parent;
    }

    return cloned;
  }

  /**
   * Extend template (inheritance)
   */
  extend(config: DeepPartial<PromptTemplateConfig>): PromptTemplate {
    const extended = new PromptTemplate({
      id: config.id || `${this.id}_extended`,
      name: config.name || `${this.name} (Extended)`,
      template: config.template || '',
      validators: config.validators || [],
      metadata: { ...this.metadata, ...config.metadata }
    });

    // Set this as parent
    extended.parent = this;

    // Copy variables
    for (const [key, value] of this.variables) {
      extended.variables.set(key, value);
    }

    return extended;
  }

  /**
   * Compose multiple templates
   */
  static compose(...templates: PromptTemplate[]): PromptTemplate {
    if (templates.length === 0) {
      throw new Error('At least one template required for composition');
    }

    const composedTemplate = templates
      .map(t => t.template)
      .join('\n\n---\n\n');

    const composed = new PromptTemplate({
      id: `composed_${Date.now()}`,
      name: 'Composed Template',
      template: composedTemplate,
      validators: [],
      metadata: { composed: true, sources: templates.map(t => t.id) }
    });

    // Merge all variables
    templates.forEach(template => {
      for (const [key, value] of template.variables) {
        if (!composed.variables.has(key)) {
          composed.variables.set(key, value);
        }
      }
    });

    // Merge all validators
    templates.forEach(template => {
      composed.validators.push(...template.validators);
    });

    return composed;
  }

  /**
   * Create from string template
   */
  static fromString(template: string, id?: string): PromptTemplate {
    return new PromptTemplate({
      id: id || `string_template_${Date.now()}`,
      name: 'String Template',
      template,
      validators: [],
      metadata: {}
    });
  }

  /**
   * Chain templates (sequential composition)
   */
  chain(next: PromptTemplate): PromptTemplate {
    const chained = new PromptTemplate({
      id: `${this.id}_chain_${next.id}`,
      name: `${this.name} → ${next.name}`,
      template: `${this.template}\n\n[NEXT SECTION]\n\n${next.template}`,
      validators: [...this.validators, ...next.validators],
      metadata: {
        chained: true,
        chain: [this.id, next.id]
      }
    });

    // Merge variables
    for (const [key, value] of this.variables) {
      chained.variables.set(key, value);
    }
    for (const [key, value] of next.variables) {
      if (!chained.variables.has(key)) {
        chained.variables.set(key, value);
      }
    }

    return chained;
  }

  /**
   * Get template info
   */
  getInfo(): {
    id: string;
    name: string;
    variables: string[];
    hasValidators: boolean;
    metadata: Record<string, any>;
  } {
    return {
      id: this.id,
      name: this.name,
      variables: Array.from(this.variables.keys()),
      hasValidators: this.validators.length > 0,
      metadata: this.metadata
    };
  }

  /**
   * Export as configuration
   */
  export(): PromptTemplateConfig {
    const variables: TemplateVariable[] = Array.from(this.variables.entries()).map(
      ([key, value]) => ({
        key,
        type: typeof value as any,
        required: false,
        default: value
      })
    );

    return {
      id: this.id,
      name: this.name,
      template: this.template,
      variables,
      validators: this.validators,
      metadata: this.metadata
    };
  }

  // ============================================
  // Private Helper Methods
  // ============================================

  /**
   * Run all validators
   */
  private runValidators(): void {
    for (const validator of this.validators) {
      if (!validator.validate(this.variables)) {
        const message = validator.errorMessage ||
          `Validation failed: ${validator.name}`;
        throw new Error(`Template ${this.id}: ${message}`);
      }
    }
  }

  /**
   * Format value for template replacement
   */
  private formatValue(value: any): string {
    if (value === null || value === undefined) {
      return '';
    }

    if (typeof value === 'object') {
      // Handle arrays specially
      if (Array.isArray(value)) {
        return value.map(v => this.formatValue(v)).join('\n');
      }
      // Format objects as JSON
      return JSON.stringify(value, null, 2);
    }

    return String(value);
  }

  /**
   * Flatten nested object for context setting
   */
  private flattenObject(
    obj: any,
    prefix: string = '',
    separator: string = '.'
  ): Record<string, any> {
    const flattened: Record<string, any> = {};

    for (const [key, value] of Object.entries(obj)) {
      const newKey = prefix ? `${prefix}${separator}${key}` : key;

      if (value === null || value === undefined) {
        flattened[newKey] = value;
      } else if (typeof value === 'object' && !Array.isArray(value)) {
        Object.assign(flattened, this.flattenObject(value, newKey, separator));
      } else {
        flattened[newKey] = value;
      }
    }

    return flattened;
  }
}

/**
 * Helper function to create common validators
 */
export class TemplateValidators {
  static required(...keys: string[]): TemplateValidator {
    return {
      name: 'required_variables',
      validate: (variables: Map<string, any>) => {
        return keys.every(key => variables.has(key) && variables.get(key) !== undefined);
      },
      errorMessage: `Required variables missing: ${keys.join(', ')}`
    };
  }

  static typeCheck(key: string, type: string): TemplateValidator {
    return {
      name: `type_check_${key}`,
      validate: (variables: Map<string, any>) => {
        const value = variables.get(key);
        return value === undefined || typeof value === type;
      },
      errorMessage: `Variable ${key} must be of type ${type}`
    };
  }

  static pattern(key: string, pattern: RegExp): TemplateValidator {
    return {
      name: `pattern_${key}`,
      validate: (variables: Map<string, any>) => {
        const value = variables.get(key);
        return value === undefined || pattern.test(String(value));
      },
      errorMessage: `Variable ${key} does not match required pattern`
    };
  }

  static custom(
    name: string,
    validate: (variables: Map<string, any>) => boolean,
    errorMessage?: string
  ): TemplateValidator {
    return { name, validate, errorMessage };
  }
}