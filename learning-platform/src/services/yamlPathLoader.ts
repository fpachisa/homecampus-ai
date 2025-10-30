/**
 * YAML Path Loader
 *
 * Loads unified path configurations from YAML files in curriculum-content/
 * Organized by grade and subject (e.g., curriculum-content/S3/Maths/)
 * Provides type-safe loading with validation
 *
 * NEW: Supports single unified path files (Foundation → Integration → Application)
 * DEPRECATED: Multi-difficulty loading (easy/medium/hard) for backward compatibility
 */

import * as YAML from 'yaml';
import type { PathNode, PathDifficulty } from '../types/practice';

interface YAMLPathConfig {
  nodes: PathNode[];
}

class YAMLPathLoader {
  private basePathUrl = '/learning-platform/public/curriculum-content';
  private cache: Map<string, PathNode[]> = new Map();

  /**
   * Decode Unicode escape sequences in strings
   * Converts "\uXXXX" to actual Unicode characters
   * Example: "\u222a" → "∪", "\u2229" → "∩"
   */
  private decodeUnicodeEscapes(obj: any): any {
    if (typeof obj === 'string') {
      // Replace all \uXXXX sequences with actual Unicode characters
      return obj.replace(/\\u([0-9a-fA-F]{4})/g, (_match, hex) => {
        return String.fromCharCode(parseInt(hex, 16));
      });
    }

    if (Array.isArray(obj)) {
      return obj.map(item => this.decodeUnicodeEscapes(item));
    }

    if (obj !== null && typeof obj === 'object') {
      const decoded: any = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          decoded[key] = this.decodeUnicodeEscapes(obj[key]);
        }
      }
      return decoded;
    }

    return obj;
  }

  /**
   * Parse category string to extract grade and subject
   * Format: {grade}-{subject}-{topic} (e.g., "s3-math-trigonometry")
   * Returns: { grade: "S3", subject: "Maths", category: "s3-math-trigonometry" }
   */
  private parseCategoryPath(category: string): { grade: string; subject: string; category: string } {
    const parts = category.split('-');

    if (parts.length < 2) {
      throw new Error(`Invalid category format: ${category}. Expected format: {grade}-{subject}-{topic}`);
    }

    const grade = parts[0]; // e.g., "s3"
    const subject = parts[1]; // e.g., "math"

    // Map to directory structure
    const gradeDir = grade.toUpperCase(); // s3 → S3
    const subjectDir = subject === 'math' ? 'Maths' : subject.charAt(0).toUpperCase() + subject.slice(1); // math → Maths

    return {
      grade: gradeDir,
      subject: subjectDir,
      category: category
    };
  }

  /**
   * Load unified path nodes from single YAML file (NEW)
   * Loads all nodes (foundation, integration, application) from one file
   */
  async loadUnifiedPath(category: string): Promise<PathNode[]> {
    const cacheKey = `${category}-unified`;

    if (this.cache.has(cacheKey)) {
      console.log(`✅ Using cached nodes for ${category}`);
      return this.cache.get(cacheKey)!;
    }

    try {
      // Parse category to get grade/subject directory structure
      const { grade, subject } = this.parseCategoryPath(category);
      const yamlPath = `${this.basePathUrl}/${grade}/${subject}/${category}.yaml`;

      console.log(`📂 Loading unified path: ${yamlPath}`);

      const response = await fetch(yamlPath);

      if (!response.ok) {
        throw new Error(`Failed to load ${yamlPath}: ${response.status} ${response.statusText}`);
      }

      const yamlText = await response.text();
      const rawConfig = YAML.parse(yamlText) as YAMLPathConfig;

      // Decode Unicode escape sequences (e.g., \u222a → ∪)
      const config = this.decodeUnicodeEscapes(rawConfig) as YAMLPathConfig;

      if (!config || !config.nodes || !Array.isArray(config.nodes)) {
        throw new Error(`Invalid YAML structure in ${yamlPath}: missing or invalid 'nodes' array`);
      }

      // Validate unified path nodes
      this.validateUnifiedNodes(config.nodes, category);

      console.log(`✅ Loaded ${config.nodes.length} nodes from unified path ${yamlPath}`);
      console.log(`   Foundation: ${config.nodes.filter(n => n.layer === 'foundation').length} nodes`);
      console.log(`   Integration: ${config.nodes.filter(n => n.layer === 'integration').length} nodes`);
      console.log(`   Application: ${config.nodes.filter(n => n.layer === 'application').length} nodes`);
      console.log(`   Exam Practice: ${config.nodes.filter(n => n.layer === 'examPractice').length} nodes`);

      this.cache.set(cacheKey, config.nodes);
      return config.nodes;

    } catch (error) {
      console.error(`❌ Failed to load unified path for ${category}:`, error);
      throw error;
    }
  }

  /**
   * Load path nodes from YAML file (DEPRECATED - for backward compatibility)
   * Use loadUnifiedPath() instead
   */
  async loadPath(category: string, difficulty: PathDifficulty): Promise<PathNode[]> {
    console.warn(`⚠️ loadPath() is deprecated. Use loadUnifiedPath() instead.`);

    try {
      // Parse category to get grade/subject directory structure
      const { grade, subject } = this.parseCategoryPath(category);
      const yamlPath = `${this.basePathUrl}/${grade}/${subject}/${category}-${difficulty}.yaml`;

      console.log(`📂 Loading legacy path config: ${yamlPath}`);

      // Fetch YAML file
      const response = await fetch(yamlPath);

      if (!response.ok) {
        throw new Error(`Failed to load ${yamlPath}: ${response.status} ${response.statusText}`);
      }

      const yamlText = await response.text();

      // Parse YAML
      const rawConfig = YAML.parse(yamlText) as YAMLPathConfig;

      // Decode Unicode escape sequences (e.g., \u222a → ∪)
      const config = this.decodeUnicodeEscapes(rawConfig) as YAMLPathConfig;

      if (!config || !config.nodes || !Array.isArray(config.nodes)) {
        throw new Error(`Invalid YAML structure in ${yamlPath}: missing or invalid 'nodes' array`);
      }

      // Validate and return nodes
      this.validateNodes(config.nodes, category, difficulty);

      console.log(`✅ Loaded ${config.nodes.length} nodes from ${yamlPath}`);

      return config.nodes;

    } catch (error) {
      console.error(`❌ Failed to load path config for ${category}/${difficulty}:`, error);
      throw error;
    }
  }

  /**
   * Validate unified path node structure (NEW)
   */
  private validateUnifiedNodes(nodes: PathNode[], category: string): void {
    const nodeIds = new Set<string>();

    for (const node of nodes) {
      // Check required fields
      if (!node.id || !node.title || !node.problemsRequired || !node.descriptor) {
        throw new Error(`Invalid node structure in ${category}: missing required fields`);
      }

      // Check for duplicate IDs
      if (nodeIds.has(node.id)) {
        throw new Error(`Duplicate node ID in ${category}: ${node.id}`);
      }
      nodeIds.add(node.id);

      // Check layer field
      if (!node.layer || !['foundation', 'integration', 'application', 'examPractice'].includes(node.layer)) {
        throw new Error(`Invalid or missing layer in node ${node.id}: ${node.layer}`);
      }

      // Check prerequisites is an array
      if (!Array.isArray(node.prerequisites)) {
        throw new Error(`Invalid prerequisites in node ${node.id}: must be an array`);
      }

      // Check descriptor
      const desc = node.descriptor;

      // NEW: subtopics is now optional (replaced by mathTool)
      // For backward compatibility, allow either:
      // 1) subtopics array (old format)
      // 2) mathTool/extraMathTool (AI-generated with visualization)
      // 3) preWrittenQuestions (exam-style with SVG diagrams)
      const hasSubtopics = desc.subtopics && Array.isArray(desc.subtopics) && desc.subtopics.length > 0;
      const hasMathTool = desc.mathTool || desc.extraMathTool;
      const hasPreWrittenQuestions = desc.aiGeneratedQuestions === false &&
                                     desc.preWrittenQuestions &&
                                     Array.isArray(desc.preWrittenQuestions) &&
                                     desc.preWrittenQuestions.length > 0;

      if (!hasSubtopics && !hasMathTool && !hasPreWrittenQuestions) {
        throw new Error(`Invalid descriptor in node ${node.id}: must have either subtopics array OR mathTool/extraMathTool OR preWrittenQuestions`);
      }

      // Validate pre-written questions structure
      if (hasPreWrittenQuestions && desc.preWrittenQuestions) {
        for (const q of desc.preWrittenQuestions) {
          if (!q.id || !q.problemText) {
            throw new Error(`Invalid pre-written question in node ${node.id}: missing id or problemText`);
          }
        }
      }

      // problemDescription and contexts are only required for AI-generated questions
      if (!hasPreWrittenQuestions) {
        if (!desc.problemDescription || !Array.isArray(desc.problemDescription)) {
          throw new Error(`Invalid descriptor in node ${node.id}: missing or invalid problemDescription array`);
        }

        if (!desc.contexts || !Array.isArray(desc.contexts)) {
          throw new Error(`Invalid descriptor in node ${node.id}: missing or invalid contexts array`);
        }
      }

      // Validate subtopic weights sum to ~1.0 (only if using old subtopics structure)
      if (hasSubtopics && desc.subtopics) {
        const totalWeight = desc.subtopics.reduce((sum, st) => sum + st.weight, 0);
        if (Math.abs(totalWeight - 1.0) > 0.01) {
          console.warn(`Warning: Subtopic weights in node ${node.id} sum to ${totalWeight}, not 1.0`);
        }
      }
    }

    // Validate all prerequisite references point to valid nodes
    for (const node of nodes) {
      for (const prereqId of node.prerequisites) {
        if (!nodeIds.has(prereqId)) {
          throw new Error(`Invalid prerequisite in node ${node.id}: ${prereqId} not found`);
        }
      }
    }
  }

  /**
   * Validate node structure (DEPRECATED - for backward compatibility)
   */
  private validateNodes(nodes: PathNode[], category: string, difficulty: PathDifficulty): void {
    for (const node of nodes) {
      // Check required fields
      if (!node.id || !node.title || !node.problemsRequired || !node.descriptor) {
        throw new Error(`Invalid node structure in ${category}/${difficulty}: missing required fields`);
      }

      // Check descriptor
      const desc = node.descriptor;

      // NEW: subtopics is now optional (replaced by mathTool)
      // For backward compatibility, allow either:
      // 1) subtopics array (old format)
      // 2) mathTool/extraMathTool (AI-generated with visualization)
      // 3) preWrittenQuestions (exam-style with SVG diagrams)
      const hasSubtopics = desc.subtopics && Array.isArray(desc.subtopics) && desc.subtopics.length > 0;
      const hasMathTool = desc.mathTool || desc.extraMathTool;
      const hasPreWrittenQuestions = desc.aiGeneratedQuestions === false &&
                                     desc.preWrittenQuestions &&
                                     Array.isArray(desc.preWrittenQuestions) &&
                                     desc.preWrittenQuestions.length > 0;

      if (!hasSubtopics && !hasMathTool && !hasPreWrittenQuestions) {
        throw new Error(`Invalid descriptor in node ${node.id}: must have either subtopics array OR mathTool/extraMathTool OR preWrittenQuestions`);
      }

      // Validate pre-written questions structure
      if (hasPreWrittenQuestions && desc.preWrittenQuestions) {
        for (const q of desc.preWrittenQuestions) {
          if (!q.id || !q.problemText) {
            throw new Error(`Invalid pre-written question in node ${node.id}: missing id or problemText`);
          }
        }
      }

      // problemDescription and contexts are only required for AI-generated questions
      if (!hasPreWrittenQuestions) {
        if (!desc.problemDescription || !Array.isArray(desc.problemDescription)) {
          throw new Error(`Invalid descriptor in node ${node.id}: missing or invalid problemDescription array`);
        }

        if (!desc.contexts || !Array.isArray(desc.contexts)) {
          throw new Error(`Invalid descriptor in node ${node.id}: missing or invalid contexts array`);
        }
      }

      if (desc.difficulty !== difficulty) {
        throw new Error(`Difficulty mismatch in node ${node.id}: expected ${difficulty}, got ${desc.difficulty}`);
      }

      // Validate subtopic weights sum to ~1.0 (only if using old subtopics structure)
      if (hasSubtopics && desc.subtopics) {
        const totalWeight = desc.subtopics.reduce((sum, st) => sum + st.weight, 0);
        if (Math.abs(totalWeight - 1.0) > 0.01) {
          console.warn(`Warning: Subtopic weights in node ${node.id} sum to ${totalWeight}, not 1.0`);
        }
      }
    }
  }

  /**
   * Check if a path YAML file exists
   */
  async pathExists(category: string, difficulty: PathDifficulty): Promise<boolean> {
    try {
      // Parse category to get grade/subject directory structure
      const { grade, subject } = this.parseCategoryPath(category);
      const yamlPath = `${this.basePathUrl}/${grade}/${subject}/${category}-${difficulty}.yaml`;
      const response = await fetch(yamlPath, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  }
}

export const yamlPathLoader = new YAMLPathLoader();
