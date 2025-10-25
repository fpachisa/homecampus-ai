/**
 * Prompt Registry
 * Central registry for managing prompts, templates, and builders
 */

import { PromptTemplate } from '../templates/base-template';
import { PromptBuilder } from '../builders/prompt-builder';
import type {
  RegistryEntry,
  RegistryConfig,
  TopicConfig,
  AgentPrompt
} from '../types/prompts';

interface CacheEntry {
  value: string;
  timestamp: number;
  hits: number;
}

export class PromptRegistry {
  private static instance: PromptRegistry;

  // Storage maps
  private templates: Map<string, RegistryEntry<PromptTemplate>>;
  private builders: Map<string, RegistryEntry<() => PromptBuilder>>;
  private agents: Map<string, RegistryEntry<AgentPrompt>>;
  private topics: Map<string, RegistryEntry<TopicConfig>>;

  // Cache
  private cache: Map<string, CacheEntry>;
  private cacheConfig: {
    enabled: boolean;
    timeout: number;
    maxSize: number;
  };

  // Configuration
  private config: RegistryConfig;

  private constructor(config?: RegistryConfig) {
    this.templates = new Map();
    this.builders = new Map();
    this.agents = new Map();
    this.topics = new Map();
    this.cache = new Map();

    this.config = config || {
      enableCaching: true,
      cacheTimeout: 3600000, // 1 hour
      validationMode: 'strict'
    };

    this.cacheConfig = {
      enabled: this.config.enableCaching !== false,
      timeout: this.config.cacheTimeout || 3600000,
      maxSize: 1000
    };
  }

  /**
   * Get singleton instance
   */
  static getInstance(config?: RegistryConfig): PromptRegistry {
    if (!PromptRegistry.instance) {
      PromptRegistry.instance = new PromptRegistry(config);
    }
    return PromptRegistry.instance;
  }

  /**
   * Reset instance (useful for testing)
   */
  static reset(): void {
    PromptRegistry.instance = undefined as any;
  }

  // ============================================
  // Template Management
  // ============================================

  /**
   * Register a template
   */
  registerTemplate(id: string, template: PromptTemplate, metadata?: any): void {
    this.templates.set(id, {
      id,
      type: 'template',
      data: template,
      metadata: {
        createdAt: Date.now(),
        updatedAt: Date.now(),
        version: '1.0.0',
        ...metadata
      }
    });
  }

  /**
   * Get a template
   */
  getTemplate(id: string): PromptTemplate | undefined {
    const entry = this.templates.get(id);
    return entry?.data;
  }

  /**
   * Resolve a template with context
   */
  resolveTemplate(id: string, context?: any): string {
    const cacheKey = this.getCacheKey('template', id, context);

    // Check cache
    if (this.cacheConfig.enabled) {
      const cached = this.getFromCache(cacheKey);
      if (cached) return cached;
    }

    // Get and resolve template
    const template = this.getTemplate(id);
    if (!template) {
      throw new Error(`Template not found: ${id}`);
    }

    const resolved = context
      ? template.clone().setContext(context).resolve()
      : template.resolve();

    // Cache result
    if (this.cacheConfig.enabled) {
      this.addToCache(cacheKey, resolved);
    }

    return resolved;
  }

  // ============================================
  // Builder Management
  // ============================================

  /**
   * Register a builder factory
   */
  registerBuilder(id: string, factory: () => PromptBuilder, metadata?: any): void {
    this.builders.set(id, {
      id,
      type: 'builder',
      data: factory,
      metadata: {
        createdAt: Date.now(),
        updatedAt: Date.now(),
        version: '1.0.0',
        ...metadata
      }
    });
  }

  /**
   * Get a builder
   */
  getBuilder(id: string): PromptBuilder | undefined {
    const entry = this.builders.get(id);
    return entry?.data();
  }

  /**
   * Build a prompt
   */
  buildPrompt(builderId: string, context?: any): string {
    const cacheKey = this.getCacheKey('builder', builderId, context);

    // Check cache
    if (this.cacheConfig.enabled) {
      const cached = this.getFromCache(cacheKey);
      if (cached) return cached;
    }

    // Get builder and build
    const builder = this.getBuilder(builderId);
    if (!builder) {
      throw new Error(`Builder not found: ${builderId}`);
    }

    if (context) {
      if (context.role) builder.addRole(context.role);
      if (context.objectives) builder.addObjectives(context.objectives);
      if (context.context) builder.addContext(context.context);
    }

    const built = builder.build();

    // Cache result
    if (this.cacheConfig.enabled) {
      this.addToCache(cacheKey, built);
    }

    return built;
  }

  // ============================================
  // Agent Management
  // ============================================

  /**
   * Register an agent configuration
   */
  registerAgent(id: string, agent: AgentPrompt, metadata?: any): void {
    this.agents.set(id, {
      id,
      type: 'agent',
      data: agent,
      metadata: {
        createdAt: Date.now(),
        updatedAt: Date.now(),
        version: '1.0.0',
        ...metadata
      }
    });
  }

  /**
   * Get an agent configuration
   */
  getAgent(id: string): AgentPrompt | undefined {
    const entry = this.agents.get(id);
    return entry?.data;
  }

  /**
   * Build agent prompt
   */
  buildAgentPrompt(agentId: string, context?: any): string {
    const agent = this.getAgent(agentId);
    if (!agent) {
      throw new Error(`Agent not found: ${agentId}`);
    }

    const builder = new PromptBuilder()
      .addRole(agent.role)
      .addSection('RESPONSIBILITIES', agent.responsibilities);

    if (agent.capabilities) {
      builder.addSection('CAPABILITIES', agent.capabilities);
    }

    if (agent.constraints) {
      builder.addSection('CONSTRAINTS', agent.constraints);
    }

    if (agent.outputSchema) {
      builder.addOutputSchema(agent.outputSchema);
    }

    if (context) {
      builder.addContext(context);
    }

    return builder.build();
  }

  // ============================================
  // Topic Management
  // ============================================

  /**
   * Register a topic configuration
   */
  registerTopic(id: string, topic: TopicConfig, metadata?: any): void {
    this.topics.set(id, {
      id,
      type: 'topic',
      data: topic,
      metadata: {
        createdAt: Date.now(),
        updatedAt: Date.now(),
        version: '1.0.0',
        ...metadata
      }
    });
  }

  /**
   * Get a topic configuration
   */
  getTopic(id: string): TopicConfig | undefined {
    const entry = this.topics.get(id);
    return entry?.data;
  }

  /**
   * Build topic-specific prompt
   */
  buildTopicPrompt(
    topicId: string,
    agentType: 'evaluator' | 'tutor' | 'question' | 'solution',
    context?: any
  ): string {
    const topic = this.getTopic(topicId);
    if (!topic) {
      throw new Error(`Topic not found: ${topicId}`);
    }

    // Get base agent configuration
    const baseAgentId = `core.agent.${agentType}`;
    const baseAgent = this.getAgent(baseAgentId);

    if (!baseAgent) {
      throw new Error(`Base agent not found: ${baseAgentId}`);
    }

    // Build prompt with topic extensions
    const builder = new PromptBuilder()
      .addRole(baseAgent.role);

    // Add topic-specific content
    if (topic.agents && topic.agents[agentType]) {
      const extension = topic.agents[agentType];
      if (extension.topicSpecific) {
        builder.addSection('TOPIC SPECIFIC', extension.topicSpecific);
      }
      if (extension.customizations) {
        builder.addSection('CUSTOMIZATIONS', extension.customizations);
      }
    }

    // Add learning objectives
    if (topic.learningObjectives) {
      builder.addObjectives(topic.learningObjectives);
    }

    // Add context
    if (context) {
      builder.addContext(context);
    }

    return builder.build();
  }

  // ============================================
  // Cache Management
  // ============================================

  /**
   * Get from cache
   */
  private getFromCache(key: string): string | null {
    const entry = this.cache.get(key);

    if (!entry) return null;

    // Check if expired
    if (Date.now() - entry.timestamp > this.cacheConfig.timeout) {
      this.cache.delete(key);
      return null;
    }

    // Update hit count
    entry.hits++;
    return entry.value;
  }

  /**
   * Add to cache
   */
  private addToCache(key: string, value: string): void {
    // Check cache size
    if (this.cache.size >= this.cacheConfig.maxSize) {
      // Remove least recently used
      this.evictLRU();
    }

    this.cache.set(key, {
      value,
      timestamp: Date.now(),
      hits: 1
    });
  }

  /**
   * Generate cache key
   */
  private getCacheKey(type: string, id: string, context?: any): string {
    const contextHash = context
      ? JSON.stringify(context).replace(/\s/g, '')
      : 'no-context';
    return `${type}:${id}:${contextHash}`;
  }

  /**
   * Evict least recently used cache entry
   */
  private evictLRU(): void {
    let lruKey: string | null = null;
    let lruTimestamp = Date.now();

    for (const [key, entry] of this.cache) {
      if (entry.timestamp < lruTimestamp) {
        lruTimestamp = entry.timestamp;
        lruKey = key;
      }
    }

    if (lruKey) {
      this.cache.delete(lruKey);
    }
  }

  /**
   * Clear cache
   */
  clearCache(): void {
    this.cache.clear();
  }

  // ============================================
  // Utility Methods
  // ============================================

  /**
   * List all registered items
   */
  list(type?: 'template' | 'builder' | 'agent' | 'topic'): Record<string, string[]> {
    if (type) {
      const map = type === 'template' ? this.templates :
                  type === 'builder' ? this.builders :
                  type === 'agent' ? this.agents : this.topics;
      return { [type]: Array.from(map.keys()) };
    }

    return {
      templates: Array.from(this.templates.keys()),
      builders: Array.from(this.builders.keys()),
      agents: Array.from(this.agents.keys()),
      topics: Array.from(this.topics.keys())
    };
  }

  /**
   * Get registry statistics
   */
  getStats(): {
    counts: Record<string, number>;
    cache: {
      size: number;
      hits: number;
      enabled: boolean;
    };
  } {
    const totalHits = Array.from(this.cache.values())
      .reduce((sum, entry) => sum + entry.hits, 0);

    return {
      counts: {
        templates: this.templates.size,
        builders: this.builders.size,
        agents: this.agents.size,
        topics: this.topics.size
      },
      cache: {
        size: this.cache.size,
        hits: totalHits,
        enabled: this.cacheConfig.enabled
      }
    };
  }

  /**
   * Export registry for backup
   */
  export(): any {
    return {
      templates: Array.from(this.templates.entries()),
      builders: Array.from(this.builders.entries()).map(([k, v]) => [k, {
        ...v,
        data: 'function' // Can't serialize functions
      }]),
      agents: Array.from(this.agents.entries()),
      topics: Array.from(this.topics.entries()),
      metadata: {
        exportedAt: new Date().toISOString(),
        stats: this.getStats()
      }
    };
  }

  /**
   * Check if item exists
   */
  has(type: 'template' | 'builder' | 'agent' | 'topic', id: string): boolean {
    const map = type === 'template' ? this.templates :
                type === 'builder' ? this.builders :
                type === 'agent' ? this.agents : this.topics;
    return map.has(id);
  }

  /**
   * Remove item
   */
  remove(type: 'template' | 'builder' | 'agent' | 'topic', id: string): boolean {
    const map = type === 'template' ? this.templates :
                type === 'builder' ? this.builders :
                type === 'agent' ? this.agents : this.topics;
    return map.delete(id);
  }
}