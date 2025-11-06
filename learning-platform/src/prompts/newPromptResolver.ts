/**
 * New Prompt Resolver using Prompt Library
 * Replaces the old promptResolver with clean implementation
 */

import {
  PromptLibrary,
  PromptBuilder,
  FORMATTING_RULES,
  EVALUATOR_BASE,
  EVALUATOR_DECISION_MATRIX,
  HINT_TEMPLATES,
  TUTOR_BASE,
  QUESTION_BASE,
  SOLUTION_BASE
} from '../prompt-library';

import { formatConversationHistory } from '../services/utils/responseParser';
import { getFilteredTools } from '../components/math-tools/mathToolsRegistry';
import { PromptRegistry } from '../prompt-library/registry/prompt-registry';

// Import topic configurations for browser bundle (filesystem loading not available in browser)
// In Node.js environments (tests, scripts), topics can be loaded dynamically from filesystem
import { S3_MATH_TRIGONOMETRY_SUBTOPICS, S3_MATH_TRIGONOMETRY_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-trigonometry';
import { S3_MATH_CIRCLE_GEOMETRY_SUBTOPICS, S3_MATH_CIRCLE_GEOMETRY_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-circle-geometry';
import { S3_MATH_QUADRATIC_EQUATIONS, S3_MATH_QUADRATIC_EQUATIONS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-quadratic-equations';
import { S3_MATH_EXPONENTIAL_LOGARITHMS_SUBTOPICS, EXPONENTIAL_LOGARITHMS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-exponential-logarithms';
import { S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS, S3_MATH_SETS_VENN_DIAGRAMS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-sets-venn-diagrams';
import { S3_MATH_EXPONENTS_SUBTOPICS, S3_MATH_EXPONENTS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-exponents';
import { S3_MATH_SURDS_RADICALS_SUBTOPICS, S3_MATH_SURDS_RADICALS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-surds-radicals';
import { S3_MATH_STATISTICS_SUBTOPICS, S3_MATH_STATISTICS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-statistics';
import { S3_MATH_RELATIONS_FUNCTIONS_SUBTOPICS, S3_MATH_RELATIONS_FUNCTIONS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-relations-functions';
import { S3_MATH_COORDINATE_GEOMETRY_SUBTOPICS, S3_MATH_COORDINATE_GEOMETRY_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-coordinate-geometry';
import { DIFFERENTIAL_CALCULUS_SUBTOPICS, S4_DIFFERENTIAL_CALCULUS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s4-differential-calculus';
import { S4_MATH_INTEGRATION_SUBTOPICS, INTEGRATION_TUTOR_CUSTOMIZATION, INTEGRATION_MATH_TOOLS } from '../prompt-library/subjects/mathematics/secondary/s4-integration';
import { S4_MATH_PROBABILITY_SUBTOPICS, PROBABILITY_TUTOR_CUSTOMIZATION, PROBABILITY_MATH_TOOLS } from '../prompt-library/subjects/mathematics/secondary/s4-probability';
import { S4_MATH_QUADRATIC_FUNCTIONS_SUBTOPICS } from '../prompt-library/subjects/mathematics/secondary/s4-quadratic-functions';
import { S4_MATH_ADVANCED_TRIGONOMETRY_SUBTOPICS, S4_ADVANCED_TRIGONOMETRY_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s4-advanced-trigonometry';
import { S4_VECTORS_SUBTOPICS, S4_VECTORS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s4-vectors';
import { S1_MATH_FACTORS_MULTIPLES_SUBTOPICS, S1_FACTORS_MULTIPLES_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s1-factors-multiples';
import { S1_MATH_REAL_NUMBERS_SUBTOPICS, S1_REAL_NUMBERS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s1-real-numbers';
import { S1_MATH_APPROXIMATION_ESTIMATION_SUBTOPICS, S1_APPROXIMATION_ESTIMATION_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s1-approximation-estimation';
import { S1_MATH_BASIC_ALGEBRA_SUBTOPICS, S1_BASIC_ALGEBRA_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s1-basic-algebra';
import { S1_SIMPLE_LINEAR_EQUATIONS_SUBTOPICS, S1_SIMPLE_LINEAR_EQUATIONS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s1-simple-linear-equations';
import { S1_MATH_ANGLES_PARALLEL_LINES_SUBTOPICS, S1_ANGLES_PARALLEL_LINES_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s1-angles-parallel-lines';
import { S1_MATH_RATIO_RATE_SPEED_SUBTOPICS, S1_RATIO_RATE_SPEED_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s1-ratio-rate-speed';
import { S1_PERCENTAGE_SUBTOPICS, S1_PERCENTAGE_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s1-percentage';
import { S1_LINEAR_FUNCTIONS_SUBTOPICS, S1_LINEAR_FUNCTIONS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s1-linear-functions-graphs';
import { S1_MATH_PERIMETER_AREA_SUBTOPICS, S1_PERIMETER_AREA_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s1-perimeter-area';
import { S1_MATH_DATA_HANDLING_SUBTOPICS, S1_DATA_HANDLING_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s1-data-handling';
import { LINEAR_GRAPHS_SUBTOPICS, S2_LINEAR_GRAPHS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s2-linear-graphs';
import { LINEAR_INEQUALITIES_SUBTOPICS, S2_LINEAR_INEQUALITIES_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s2-linear-inequalities';

/**
 * Register all imported topics with the PromptRegistry
 * This ensures topics are available in browser environments where filesystem access isn't possible
 */
function registerBrowserTopics() {
  const registry = PromptRegistry.getInstance();

  // Helper to register topics
  const registerTopics = (subtopics: Record<string, any>, config: any) => {
    Object.entries(subtopics).forEach(([id, data]) => {
      // Determine grade level from ID prefix
      let gradeLevel: any = 'secondary-3'; // default
      if (id.startsWith('s1')) {
        gradeLevel = 'secondary-1';
      } else if (id.startsWith('s2')) {
        gradeLevel = 'secondary-2';
      } else if (id.startsWith('s3')) {
        gradeLevel = 'secondary-3';
      } else if (id.startsWith('s4')) {
        gradeLevel = 'secondary-4';
      }

      registry.registerTopic(id, {
        topicId: id,
        subject: 'mathematics' as any,
        gradeLevel: gradeLevel,
        learningObjectives: data.learningObjectives || [],
        progressionStructure: data.progressionStructure,
        agents: {},
        ...data,
        _config: config
      }, {
        source: 'static-import',
        loadedAt: Date.now()
      });
    });
  };

  // Register S1 topics
  registerTopics(S1_MATH_FACTORS_MULTIPLES_SUBTOPICS, S1_FACTORS_MULTIPLES_CONFIG);
  registerTopics(S1_MATH_REAL_NUMBERS_SUBTOPICS, S1_REAL_NUMBERS_CONFIG);
  registerTopics(S1_MATH_APPROXIMATION_ESTIMATION_SUBTOPICS, S1_APPROXIMATION_ESTIMATION_CONFIG);
  registerTopics(S1_MATH_BASIC_ALGEBRA_SUBTOPICS, S1_BASIC_ALGEBRA_CONFIG);
  registerTopics(S1_SIMPLE_LINEAR_EQUATIONS_SUBTOPICS, S1_SIMPLE_LINEAR_EQUATIONS_CONFIG);
  registerTopics(S1_MATH_ANGLES_PARALLEL_LINES_SUBTOPICS, S1_ANGLES_PARALLEL_LINES_CONFIG);
  registerTopics(S1_MATH_RATIO_RATE_SPEED_SUBTOPICS, S1_RATIO_RATE_SPEED_CONFIG);
  registerTopics(S1_PERCENTAGE_SUBTOPICS, S1_PERCENTAGE_CONFIG);
  registerTopics(S1_LINEAR_FUNCTIONS_SUBTOPICS, S1_LINEAR_FUNCTIONS_CONFIG);
  registerTopics(S1_MATH_PERIMETER_AREA_SUBTOPICS, S1_PERIMETER_AREA_CONFIG);
  registerTopics(S1_MATH_DATA_HANDLING_SUBTOPICS, S1_DATA_HANDLING_CONFIG);

  // Register S2 topics
  registerTopics(LINEAR_GRAPHS_SUBTOPICS, S2_LINEAR_GRAPHS_CONFIG);
  registerTopics(LINEAR_INEQUALITIES_SUBTOPICS, S2_LINEAR_INEQUALITIES_CONFIG);

  // Register all S3 topics
  registerTopics(S3_MATH_TRIGONOMETRY_SUBTOPICS, S3_MATH_TRIGONOMETRY_CONFIG);
  registerTopics(S3_MATH_CIRCLE_GEOMETRY_SUBTOPICS, S3_MATH_CIRCLE_GEOMETRY_CONFIG);
  registerTopics(S3_MATH_QUADRATIC_EQUATIONS, S3_MATH_QUADRATIC_EQUATIONS_CONFIG);
  registerTopics(S3_MATH_EXPONENTIAL_LOGARITHMS_SUBTOPICS, EXPONENTIAL_LOGARITHMS_CONFIG);
  registerTopics(S3_MATH_SETS_VENN_DIAGRAMS_SUBTOPICS, S3_MATH_SETS_VENN_DIAGRAMS_CONFIG);
  registerTopics(S3_MATH_EXPONENTS_SUBTOPICS, S3_MATH_EXPONENTS_CONFIG);
  registerTopics(S3_MATH_SURDS_RADICALS_SUBTOPICS, S3_MATH_SURDS_RADICALS_CONFIG);
  registerTopics(S3_MATH_STATISTICS_SUBTOPICS, S3_MATH_STATISTICS_CONFIG);
  registerTopics(S3_MATH_RELATIONS_FUNCTIONS_SUBTOPICS, S3_MATH_RELATIONS_FUNCTIONS_CONFIG);
  registerTopics(S3_MATH_COORDINATE_GEOMETRY_SUBTOPICS, S3_MATH_COORDINATE_GEOMETRY_CONFIG);

  // Register S4 topics
  registerTopics(DIFFERENTIAL_CALCULUS_SUBTOPICS, S4_DIFFERENTIAL_CALCULUS_CONFIG);
  registerTopics(S4_MATH_INTEGRATION_SUBTOPICS, { tutorCustomization: INTEGRATION_TUTOR_CUSTOMIZATION, availableTools: INTEGRATION_MATH_TOOLS });
  registerTopics(S4_MATH_PROBABILITY_SUBTOPICS, { tutorCustomization: PROBABILITY_TUTOR_CUSTOMIZATION, availableTools: PROBABILITY_MATH_TOOLS });
  registerTopics(S4_MATH_QUADRATIC_FUNCTIONS_SUBTOPICS, { MATH_TOOLS_AVAILABLE: ['graphingCalculator', 'coordinatePlane'] });
  registerTopics(S4_MATH_ADVANCED_TRIGONOMETRY_SUBTOPICS, S4_ADVANCED_TRIGONOMETRY_CONFIG);
  registerTopics(S4_VECTORS_SUBTOPICS, S4_VECTORS_CONFIG);

  console.log(`[NewPromptResolver] Registered ${registry.listSubtopicIds().length} subtopics from static imports`);
}

// Register topics immediately for browser use
registerBrowserTopics();

export interface PromptContext {
  topicId: string;
  studentResponse?: string;
  problemState?: any;
  currentProblemType?: number;
  recentHistory?: string;
  sectionProgress?: any;
  currentSection?: string;
  masteredSections?: string[];

  // Section-specific fields
  sectionId?: string;
  sectionMessages?: any[];

  // Evaluator specific
  currentProblemId?: string;
  hintsGiven?: number;
  studentAttempts?: number;
  currentProblemText?: string;
  originalMathTool?: any;
  sectionStats?: any;

  // Agent instruction context
  evaluatorInstruction?: any;
  tutorInstruction?: any;
  questionInstruction?: any;
  solutionInstruction?: any;
  evaluatorReasoning?: string;
  evaluatorAssessment?: any;
  answerCorrect?: boolean;
  hintLevel?: number;

  // Practice mode
  currentProblem?: string;
  correctAnswer?: string;
  hintsGivenCount?: number;
  attemptsCount?: number;

  // Other
  finalScore?: number;
  problemsCompleted?: number;
  sessionDuration?: number;
  count?: number;
  userPreferences?: string[];
  excludeContexts?: string[];
  recentProblems?: string[];
}

export class NewPromptResolver {
  private promptLibrary: PromptLibrary;
  private registry: PromptRegistry;

  constructor() {
    this.promptLibrary = new PromptLibrary();
    this.registry = PromptRegistry.getInstance();
  }

  /**
   * Get current section detail with position context
   * Returns structured section information for three-tier architecture
   */
  private getCurrentSectionDetail(context: PromptContext, subtopic: any): any {
    if (!context.currentSection || !subtopic.progressionStructure?.sections) {
      return null;
    }

    const sections = subtopic.progressionStructure.sections;
    const currentIndex = sections.findIndex((s: any) => s.id === context.currentSection);

    if (currentIndex === -1) {
      return null;
    }

    const currentSection = sections[currentIndex];
    const position = `${currentIndex + 1} of ${sections.length}`;

    return {
      id: currentSection.id,
      title: currentSection.title,
      position,
      difficulty: currentSection.difficulty,
      masteryRubric: currentSection.masteryRubric,
      objectives: currentSection.learningObjectives,
      formulas: currentSection.relevantFormulas || [],
      prerequisites: currentSection.prerequisites || []
    };
  }

  /**
   * Get next section detail for transitions
   * Returns null if no next section exists
   */
  private getNextSectionDetail(context: PromptContext, subtopic: any): any {
    if (!context.currentSection || !subtopic.progressionStructure?.sections) {
      return null;
    }

    const sections = subtopic.progressionStructure.sections;
    const currentIndex = sections.findIndex((s: any) => s.id === context.currentSection);

    if (currentIndex === -1 || currentIndex >= sections.length - 1) {
      return null;  // No next section
    }

    const nextSection = sections[currentIndex + 1];
    const position = `${currentIndex + 2} of ${sections.length}`;

    return {
      id: nextSection.id,
      title: nextSection.title,
      position,
      difficulty: nextSection.difficulty,
      objectives: nextSection.learningObjectives,
      formulas: nextSection.relevantFormulas || [],
      prerequisites: nextSection.prerequisites || []
    };
  }

  /**
   * Get section-scoped math tools
   * Filters tools from centralized registry to only include tools available in the current section
   */
  private getScopedMathTools(context: PromptContext, subtopic: any, global: any): any {
    const currentSection = context.currentSection || (context as any).currentSection;

    // Get available tools list from global config (MATH_TOOLS_AVAILABLE array)
    const availableToolsList = global.MATH_TOOLS_AVAILABLE || [];

    // If no current section, return all available tools for this topic
    if (!currentSection || !subtopic.progressionStructure?.sections) {
      return getFilteredTools(availableToolsList);
    }

    // Find the current section
    const section = subtopic.progressionStructure.sections.find(
      (s: any) => s.id === currentSection
    );

    // If section has availableTools, filter to section-specific tools
    if (section?.availableTools && Array.isArray(section.availableTools)) {
      const filteredTools = getFilteredTools(section.availableTools);

      // Check if tools object is empty
      if (Object.keys(filteredTools).length === 0) {
        return "NO visual tools available for this section. DO NOT attempt to create or use visual tools.";
      }

      return {
        description: `Pre-built visual tools (Section-scoped to: ${currentSection})`,
        tools: filteredTools,
        usageGuidelines: "Use visual tools to help clarify concepts. Choose tools based on the section's learning objectives. CRITICAL: Use exact techinalName of the tool. DO NOT create names of your own."
      };
    }

    // Default: return all available tools for this topic
    return getFilteredTools(availableToolsList);
  }

  /**
   * Get topic configuration from registry
   * Topics are already loaded from static imports at module initialization
   */
  private getTopicConfig(topicId: string): { subtopic: any; global: any } {
    // Get topic from registry (already populated from static imports)
    const config = this.registry.getTopicWithConfig(topicId);

    if (!config) {
      const available = this.registry.listSubtopicIds();
      throw new Error(
        `Topic ${topicId} not found in registry.\n` +
        `Registry has ${available.length} topics loaded.\n` +
        `Available topics: ${available.slice(0, 10).join(', ')}${available.length > 10 ? '...' : ''}\n` +
        `You requested: ${topicId}`
      );
    }

    return config;
  }

  /**
   * Resolve initial greeting
   */
  resolveInitialGreeting(context: PromptContext): string {
    const { subtopic } = this.getTopicConfig(context.topicId);

    const builder = this.promptLibrary.createBuilder()
      .addRole("You are a friendly, encouraging math tutor")
      .addTask(`Greet the student warmly and introduce ${subtopic.topicName}`)
      .addInstructions([
        "Keep your response to exactly 2-3 sentences",
        "Do NOT include a math problem in your greeting",
        "Be warm and encouraging"
      ]);

    return builder.build();
  }

  /**
   * Resolve initial greeting with problem
   */
  resolveInitialGreetingWithProblem(context: PromptContext): string {
    const { subtopic, global } = this.getTopicConfig(context.topicId);

    // Get first section for scoping tools
    const firstSection = (subtopic as any).progressionStructure?.sections?.[0];
    const contextWithFirstSection = {
      ...context,
      currentSection: firstSection?.id
    };
    const scopedMathTools = this.getScopedMathTools(contextWithFirstSection, subtopic, global);

    const builder = this.promptLibrary.createBuilder()
      .addRole("You are a warm and friendly math tutor who generates initial greetings and introductory problem on the given topic")
      .addContext({
        topic: subtopic.displayName,
        topicName: subtopic.topicName
      })
      .addObjectives(subtopic.learningObjectives ? [subtopic.learningObjectives] : [])
      .addFormattingRules(FORMATTING_RULES)
      .addVisualTools(scopedMathTools)
      .addTask(`Greet the student encouragingly and introduce ${subtopic.topicName}` + ` Then generate the first intoductory problem on ${firstSection.title}`)
      .addOutputSchema({
          speech: {
            text: "string - plain text for avatar speech, no LaTeX, no markdown, no HTML, no special characters.",
            emotion: "excited"
          },

          display: {
            content: "string - first introductory problem text",
            showAfterSpeech: "boolean",
            type: "initial_problem"
          },

          mathTool: {
            toolName: "string - technical key",
            parameters: "object - tool parameters",
            caption: "string - explanation"
          }

      })
      .addSection("IMPORTANT 1:", "Use visual tools from the available Visual Tools list when appropriate.")
      .addSection("CRITICAL", "Return ONLY valid JSON exactly as per OUTPUT SCHEMA even if no mathTool used still provide all fields and keep it blank.")
      .addSection("VERY CRITICAL", "DO NOT refer to any diagrams/images that do not exist. DO NOT hallucinate toolName. Use only from the Available Visual Tools")
      .addSection("IMPORTANT 2:", "Ask only one question unless the second part is using the answer from the first part.");

    return builder.build();
  }

  /**
   * BATCH VERSION: Resolve initial greeting + problem for multiple topics
   * Generates varied greetings to avoid repetitive patterns
   *
   * @param topics - Array of topic configurations with IDs and first sections
   * @param variationStyle - 'diverse' for maximum variation, 'consistent' for uniform style
   * @param avoidPatterns - Array of phrases to avoid in greetings
   * @returns Prompt string for batch generation
   */
  resolveInitialGreetingBatch(context: {
    topics: Array<{
      topicId: string;
      displayName: string;
      topicName: string;
      firstSection: any;
      learningObjectives?: string;
    }>;
    variationStyle: 'diverse' | 'consistent';
    avoidPatterns: string[];
  }): string {
    const { topics, variationStyle, avoidPatterns } = context;

    // Build topic list for prompt
    const topicsList = topics.map((t, i) =>
      `${i + 1}. **${t.topicId}**: ${t.displayName} (First section: "${t.firstSection?.title || 'Introduction'}")`
    ).join('\n');

    // Build variation instructions based on style
    const variationInstructions = variationStyle === 'diverse' ? [
      'Each greeting must have a UNIQUE opening style and sentence structure',
      'Vary greeting words: use different combinations of Hello/Hi/Hey/Welcome/Greetings',
      'Vary enthusiasm levels across greetings (some warm, some excited, some encouraging)',
      'Use different approaches to introduce topics (metaphors, real-world connections, curiosity hooks)',
      'Avoid ANY repetitive phrases or patterns across greetings',
      avoidPatterns.length > 0 ? `NEVER use these overused phrases: ${avoidPatterns.map(p => `"${p}"`).join(', ')}` : null,
      'Each greeting should feel distinctly different while maintaining a warm, supportive teaching voice'
    ].filter(Boolean) : [
      'Maintain a consistent warm and friendly tone across all greetings',
      'Use similar teaching approaches but vary specific wording',
      avoidPatterns.length > 0 ? `Avoid these phrases: ${avoidPatterns.map(p => `"${p}"`).join(', ')}` : null,
      'Keep greetings professional and aligned with the tutoring brand'
    ].filter(Boolean);

    const builder = this.promptLibrary.createBuilder()
      .addRole("You are creating VARIED initial greetings for a math tutoring platform")
      .addSection('TASK', `Generate ${topics.length} UNIQUE initial greetings with first problems for the following subtopics:

${topicsList}

Each greeting should:
1. Warmly introduce the specific subtopic with a UNIQUE style
2. Present an introductory problem from the first section
3. Follow all formatting rules and output schema requirements`)
      .addSection('VARIATION REQUIREMENTS', {
        style: variationStyle,
        instructions: variationInstructions,
        goal: 'Create greetings that feel fresh and unique, NOT repetitive or formulaic'
      })
      .addSection('FORMATTING RULES', FORMATTING_RULES)
      .addSection('OUTPUT SCHEMA', {
        description: 'Return a JSON object with greetings keyed by topicId',
        structure: {
          greetings: {
            '[topicId]': {
              speech: {
                text: 'string - plain text for TTS, NO LaTeX, NO markdown, NO hyphens in acronyms (e.g., "S O H C A H T O A" not "SOH-CAH-TOA")',
                emotion: 'string - vary emotions: "encouraging", "excited", "warm", "supportive"'
              },
              display: {
                content: 'string - first problem with markdown/LaTeX formatting, section header, clear question',
                showAfterSpeech: 'boolean - always true',
                type: '"initial_problem"'
              },
              mathTool: {
                _note: 'OPTIONAL - only if visual tool enhances the first problem',
                toolName: 'string - tool technical key (e.g., "rightTriangle", "unitCircle")',
                parameters: 'object - tool-specific parameters',
                caption: 'string - description of what the visualization shows'
              }
            }
          }
        }
      })
      .addSection('CRITICAL REQUIREMENTS', [
        'Return ONLY valid JSON matching the output schema exactly',
        'Include ALL topic IDs in the greetings object',
        `Ensure MAXIMUM variation - no two greetings should start or sound similar`,
        'speech.text must be plain text suitable for text-to-speech (no special characters)',
        'display.content can use markdown and LaTeX with proper escaping',
        'Use ONE backslash in LaTeX (e.g., "$\\\\theta$" not "$\\\\\\\\theta$")',
        'mathTool is optional - include only when it genuinely helps understanding',
        'Ask only one question per greeting unless multi-part questions share context'
      ]);

    return builder.build();
  }

  /**
   * Resolve evaluator agent prompt (Simplified Architecture)
   *
   * Evaluator focuses ONLY on:
   * - Assessing current response
   * - Deciding next action (using decision matrix)
   * - Determining section progression (using mastery rubric)
   * - Providing detailed reasoning for other agents
   */
  resolveEvaluatorAgent(context: PromptContext): string {
    const { subtopic } = this.getTopicConfig(context.topicId);
    const currentSectionDetail = this.getCurrentSectionDetail(context, subtopic);

    const builder = new PromptBuilder()
      // Base role and responsibilities
      .addRole(EVALUATOR_BASE.role)
      .addSection('RESPONSIBILITIES', EVALUATOR_BASE.responsibilities)

      // Decision-making rules (CRITICAL - keep these)
      .addSection('DECISION MATRIX', EVALUATOR_DECISION_MATRIX)

      // Current section detail ONLY (minimal context)
      .addIf(!!currentSectionDetail, (b) => {
        b.addSection('CURRENT SECTION', {
          title: currentSectionDetail.title,
          position: currentSectionDetail.position,
          difficulty: currentSectionDetail.difficulty,
          masteryRubric: currentSectionDetail.masteryRubric || 'Use general assessment criteria',
          objectives: currentSectionDetail.objectives,
          formulas: currentSectionDetail.formulas
        });
      })

      // Current problem context
      .addSection('CURRENT PROBLEM', {
        problem: context.currentProblemText || 'N/A',
        studentResponse: context.studentResponse || 'No response yet'
      })

      // Quantitative data from service layer
      .addSection('QUANTITATIVE DATA', {
        hintsGiven: context.hintsGiven || 0,
        studentAttempts: context.studentAttempts || 0,
        sectionStats: context.sectionStats || 'No stats available'
      })

      // Recent conversation history (truncated to last 10 exchanges)
      .addIf(!!context.recentHistory, (b) => {
        const historyLines = (context.recentHistory || '').split('\n');
        const truncatedHistory = historyLines.slice(-20).join('\n');  // Last ~10 exchanges (2 lines each)
        b.addSection('RECENT CONVERSATION', truncatedHistory);
      })

      // Original math tool for validation
      .addIf(!!context.originalMathTool, (b) => {
        b.addSection('ORIGINAL VISUAL TOOL (GROUND TRUTH)', context.originalMathTool);
      })

      .addTask(`Evaluate the student's response against the question asked.
Determine if the answer is correct and if it answers the main question or is just an intermediate step or answer to a tutor hint.
Use the DECISION MATRIX to select the appropriate action.
Use QUANTITATIVE DATA and masteryRubic of the CURRECT SECTION to determine if section is mastered.
Provide detailed reasoning that other agents can use to generate appropriate content.

Return ONLY a JSON object exactly matching the output schema below.`)

      .addSection('OUTPUT SCHEMA', {
        answerCorrect: "boolean - true only if final answer is correct",
        understanding: "mastery | developing | struggling - understanding level based on masteryRubric",
        conceptGaps: "string[] - specific concepts student needs to work on",
        sectionMastered: "boolean - true if understanding is mastery",
        advanceToNextSection: "boolean - true if sectionMastered is true",
        action: "GIVE_HINT | GIVE_SOLUTION | NEW_PROBLEM | CELEBRATE - next action",
        hintLevel: "1 | 2 | 3 (optional) - hint level if action is GIVE_HINT",
        reasoning: "string - detailed explanation for other agents (plain text, NO LaTeX)"
      });
    return builder.build();
  }

  /**
   * Resolve tutor agent prompt (Minimized - Reasoning-Focused)
   *
   * Tutor Agent focuses ONLY on:
   * - Generating Socratic hints based on evaluator's assessment
   * - Celebrating achievements
   * - Using evaluator's reasoning to craft targeted guidance
   */
  resolveTutorAgent(context: PromptContext): string {
    const { subtopic, global } = this.getTopicConfig(context.topicId);
    const scopedMathTools = this.getScopedMathTools(context, subtopic, global);
    const currentSectionDetail = this.getCurrentSectionDetail(context, subtopic);

    const builder = new PromptBuilder()
      .addRole(TUTOR_BASE.role)
      .addSection('RESPONSIBILITIES', TUTOR_BASE.responsibilities)
      .addSection('CONSTRAINTS', TUTOR_BASE.constraints)

      .addFormattingRules(FORMATTING_RULES)
      .addVisualTools(scopedMathTools)

      // Current problem (was missing!)
      .addSection('PROBLEM TO SOLVE', context.currentProblemText || 'No problem available')

      // Section formulas (was missing!)
      .addIf(!!currentSectionDetail?.formulas, (b) => {
        b.addSection('RELEVANT FORMULAS', currentSectionDetail.formulas);
      })

      // Evaluator's assessment and reasoning (primary guidance)
      .addSection("EVALUATOR'S ACTION", context.evaluatorInstruction?.action || 'GIVE_HINT')
      .addSection("EVALUATOR'S ASSESSMENT", context.evaluatorAssessment || 'No assessment provided')
      .addSection("EVALUATOR'S REASONING", context.evaluatorReasoning || 'No reasoning provided')
      .addSection('HINT TEMPLATE', HINT_TEMPLATES)

      // Current context
      .addSection('CURRENT CONTEXT', {
        studentResponse: context.studentResponse || '',
        hintLevel: context.hintLevel || 1,
        answerCorrect: context.answerCorrect || false
      })

      // Recent history
      .addSection('RECENT HISTORY', context.recentHistory || '')
      .addOutputSchema(TUTOR_BASE.outputSchema!)

      .addTask(`Generate an appropriate Socratic hint or celebration based on evaluator's reasoning.

For GIVE_HINT action:
  - Use evaluator's reasoning to understand what student missed
  - Craft a progressive hint (level ${context.hintLevel || 1}) based on the HINT TEMPLATE
  - Guide discovery, don't give the answer directly

For CELEBRATE action:
  - Celebrate the achievement warmly
  - Reference their progress from evaluator's assessment

CRITICAL: Return JSON only and in the exact format as OUTPUT SCHEMA. Even if no mathTool used still provide all fields and keep it blank.`)
.addSection("CRITICAL", "Ask only one question unless the second part is using the answer from the first part.");

    return builder.build();
  }

  /**
   * Resolve question agent prompt (Enhanced - Curriculum-Aware)
   *
   * Question Agent is now the curriculum expert, handling:
   * - Problem generation for current section
   * - Section transitions when evaluator signals advancement
   * - Problem variation to avoid repetition
   */
  resolveQuestionGeneration(context: PromptContext): string {
    const { subtopic, global } = this.getTopicConfig(context.topicId);
    const scopedMathTools = this.getScopedMathTools(context, subtopic, global);
    const currentSectionDetail = this.getCurrentSectionDetail(context, subtopic);
    const nextSectionDetail = this.getNextSectionDetail(context, subtopic);

    const builder = new PromptBuilder()
      .addRole(QUESTION_BASE.role)
      .addSection('RESPONSIBILITIES', QUESTION_BASE.responsibilities)
      .addSection('CONSTRAINTS', QUESTION_BASE.constraints)

      // FULL CURRICULUM CONTEXT (for transition awareness)
      .addSection('SUBTOPIC OVERVIEW', {
        name: subtopic.displayName,
        learningObjectives: subtopic.learningObjectives  // All sections summary
      })

      // Current section detail (full context)
      .addIf(!!currentSectionDetail, (b) => {
        b.addSection('CURRENT SECTION', {
          title: currentSectionDetail.title,
          position: currentSectionDetail.position,
          difficulty: currentSectionDetail.difficulty,
          objectives: currentSectionDetail.objectives,
          formulas: currentSectionDetail.formulas
        });
      })

      // Next section detail (for smooth transitions, if applicable)
      .addIf(!!nextSectionDetail, (b) => {
        b.addSection('NEXT SECTION (FOR TRANSITIONS)', {
          title: nextSectionDetail.title,
          position: nextSectionDetail.position,
          difficulty: nextSectionDetail.difficulty,
          objectives: nextSectionDetail.objectives,
          formulas: nextSectionDetail.formulas
        });
      })

      .addFormattingRules(FORMATTING_RULES)
      .addOutputSchema(QUESTION_BASE.outputSchema!)
      .addVisualTools(scopedMathTools)

      // Evaluator's decision and reasoning
      .addSection("EVALUATOR'S ACTION", context.evaluatorInstruction?.action || 'NEW_PROBLEM')
      .addSection("EVALUATOR'S REASONING", context.evaluatorReasoning || '')
      .addSection("ADVANCE TO NEXT SECTION", context.evaluatorInstruction?.advanceToNextSection || false) 

      // Recent history and problems for variation
      .addSection('RECENT HISTORY', context.recentHistory || '')
      .addIf(!!context.recentProblems, (b) => {
        b.addSection('RECENT PROBLEMS', context.recentProblems);
      })

      .addTask(`Generate an appropriate problem based on evaluator's decision. 

Rule: Ensure the problem only has one part unless the second part is using the answer from the first part.

If ADVANCE TO NEXT SECTION is true:
  - Generate an introductory problem for the NEXT SECTION
  - Acknowledge the transition in your speech
  - Start with easier objectives from next section

Otherwise:
  - Generate a problem for the CURRENT SECTION
  - Match the difficulty and objectives of current section

CRITICAL: Return JSON only and in the exact format as OUTPUT SCHEMA`)
.addSection("CRITICAL", "Ask only one question unless the second part is using the answer from the first part.");

    return builder.build();
  }

  /**
   * Resolve solution agent prompt (Minimized - Reasoning-Focused)
   *
   * Solution Agent focuses ONLY on:
   * - Providing step-by-step solution walkthrough
   * - Explaining the "why" not just the "what"
   * - Addressing struggle points from evaluator's reasoning
   */
  resolveSolutionAgent(context: PromptContext): string {
    const { subtopic, global } = this.getTopicConfig(context.topicId);
    const scopedMathTools = this.getScopedMathTools(context, subtopic, global);
    const currentSectionDetail = this.getCurrentSectionDetail(context, subtopic);

    const builder = new PromptBuilder()
      .addRole(SOLUTION_BASE.role)
      .addSection('RESPONSIBILITIES', SOLUTION_BASE.responsibilities)
      .addSection('CONSTRAINTS', SOLUTION_BASE.constraints)

      .addFormattingRules(FORMATTING_RULES)
      .addOutputSchema(SOLUTION_BASE.outputSchema!)
      .addVisualTools(scopedMathTools)

      // Current problem
      .addSection('PROBLEM TO SOLVE', context.currentProblemText || '')

      // Section formulas (for explanation reference)
      .addIf(!!currentSectionDetail?.formulas, (b) => {
        b.addSection('RELEVANT FORMULAS', currentSectionDetail.formulas);
      })

      // Evaluator's reasoning (what student struggled with)
      .addSection("EVALUATOR'S REASONING", context.evaluatorReasoning || '')
      .addSection("EVALUATOR'S ASSESSMENT", context.evaluatorAssessment)

      // Recent history
      .addSection('RECENT HISTORY', context.recentHistory || '')

      .addTask(`Provide a complete step-by-step solution to the problem.

Focus on:
  - Breaking down the solution into clear steps
  - Explaining WHY each step is necessary
  - Addressing the struggle points from evaluator's reasoning
  - Using relevant formulas from the section
  - Making the solution educational, not just mechanical

CRITICAL: Return JSON only and in the exact format as OUTPUT SCHEMA`);

    return builder.build();
  }

  /**
   * Resolve conversation response (deprecated - use agents instead)
   */
  resolveConversationResponse(context: PromptContext): string {
    const { subtopic } = this.getTopicConfig(context.topicId);

    const builder = this.promptLibrary.createBuilder()
      .addRole("You are a warm, encouraging math tutor")
      .addContext({
        topic: subtopic.topicName,
        currentProblemType: context.currentProblemType,
        recentHistory: context.recentHistory,
        studentResponse: context.studentResponse
      })
      .addTask("Respond naturally and encouragingly to the student");

    return builder.build();
  }

  /**
   * Resolve celebration
   */
  resolveCelebration(context: PromptContext): string {
    const { subtopic } = this.getTopicConfig(context.topicId);

    const builder = this.promptLibrary.createBuilder()
      .addRole("You are a warm, encouraging math tutor celebrating student success")
      .addContext({
        topic: subtopic.topicName,
        finalScore: context.finalScore,
        problemsCompleted: context.problemsCompleted,
        sessionDuration: context.sessionDuration
      })
      .addTask("Generate an enthusiastic celebration message")
      .addConstraints([
        "Be genuinely excited about their achievement",
        "Highlight their progress",
        "Encourage them about future learning",
        "Keep it to 3-4 sentences"
      ]);

    return builder.build();
  }

  /**
   * Resolve practice batch generation
   */
  resolvePracticeBatch(context: PromptContext): string {
    const { subtopic, global } = this.getTopicConfig(context.topicId);

    const builder = this.promptLibrary.createBuilder()
      .addRole(global.TUTOR_ROLE || "You are a math problem generator")
      .addContext({
        topic: subtopic.displayName,
        problemType: context.currentProblemType,
        count: context.count || 3
      })

      .addIf(!!context.userPreferences, (b) => {
        b.addSection('PREFERRED CONTEXTS', context.userPreferences);
      })

      .addIf(!!context.excludeContexts, (b) => {
        b.addSection('AVOID CONTEXTS', context.excludeContexts);
      })

      .addObjectives(subtopic.learningObjectives ? [subtopic.learningObjectives] : [])
      .addSection('KEY FORMULAS', subtopic.keyFormulas || '')

      .addTask(`Generate ${context.count || 3} practice problems with solutions`)
      .addOutputSchema({
        problems: [{
          problemText: "string",
          correctAnswer: "string",
          context: "string",
          solutionData: "object (optional)"
        }]
      })
      .addSection('CRITICAL', 'Return ONLY valid JSON');

    return builder.build();
  }

  /**
   * Resolve practice agent evaluation
   */
  resolvePracticeAgent(context: PromptContext): string {
    const { subtopic, global } = this.getTopicConfig(context.topicId);

    const builder = this.promptLibrary.createBuilder()
      .addRole(global.TUTOR_ROLE || "You are a supportive math tutor")
      .addContext({
        topic: subtopic.displayName,
        currentProblem: context.currentProblem,
        correctAnswer: context.correctAnswer,
        studentResponse: context.studentResponse,
        hintsGiven: context.hintsGivenCount || 0,
        attempts: context.attemptsCount || 0,
        recentHistory: context.recentHistory
      })

      .addObjectives(subtopic.learningObjectives ? [subtopic.learningObjectives] : [])

      .addTask("Evaluate the student's response and provide appropriate feedback")
      .addOutputSchema({
        intent: "string",
        answerCorrect: "boolean",
        pointsEarned: "number",
        isMainProblemSolved: "boolean",
        speech: { text: "string", emotion: "string" },
        display: { content: "string", showAfterSpeech: "boolean" },
        action: "string",
        reasoning: "string"
      })
      .addSection('CRITICAL', 'Return ONLY valid JSON');

    return builder.build();
  }

  /**
   * Resolve visualization extraction (if needed)
   */
  resolveVisualizationExtraction(context: any): string {
    const builder = this.promptLibrary.createBuilder()
      .addRole("You are a visualization data extractor")
      .addContext(context)
      .addTask("Extract mathematical data from the problem for visualization")
      .addOutputSchema({
        problemData: "object",
        stages: "array",
        contextualLabels: "object"
      });

    return builder.build();
  }

  /**
   * Resolve section start question
   * Called when student jumps to a new section
   */
  resolveSectionStartQuestion(context: PromptContext): string {
    const { subtopic, global } = this.getTopicConfig(context.topicId);

    // Use sectionId if provided, otherwise fall back to currentSection
    const targetSectionId = context.sectionId || context.currentSection;

    if (!targetSectionId) {
      throw new Error('sectionId or currentSection must be provided for section start question');
    }

    // Find the target section details
    const sections = subtopic.progressionStructure?.sections || [];
    const targetSection = sections.find((s: any) => s.id === targetSectionId);

    if (!targetSection) {
      throw new Error(`Section ${targetSectionId} not found in topic ${context.topicId}`);
    }

    const targetIndex = sections.indexOf(targetSection);
    const position = `${targetIndex + 1} of ${sections.length}`;

    // Scope tools to target section
    const contextWithTargetSection = {
      ...context,
      currentSection: targetSectionId
    };
    const scopedMathTools = this.getScopedMathTools(contextWithTargetSection, subtopic, global);

    // Build prompt using PromptBuilder
    const builder = this.promptLibrary.createBuilder()
      .addRole(global.TUTOR_ROLE || "You are a Socratic mathematics tutor")
      .addContext({
        topic: subtopic.displayName,
        topicName: subtopic.topicName
      })

      .addSection('TARGET SECTION (Student Jumped To)', {
        id: targetSection.id,
        title: targetSection.title,
        position: position,
        difficulty: targetSection.difficulty,
        focusObjectives: targetSection.focusObjectives || targetSection.learningObjectives,
        objectives: targetSection.learningObjectives,
        formulas: targetSection.relevantFormulas || []
      })

      .addFormattingRules(FORMATTING_RULES)
      .addVisualTools(scopedMathTools)

      .addTask(`The student has jumped to a new section: "${targetSection.title}".

Your task:
1. Generate a brief transition message acknowledging this section change
2. Immediately present a question from THIS specific section to assess their understanding

Question guidance:
- Focus on section: ${targetSection.id}
- Test the objectives from THIS section only
- Match the section's difficulty level: ${targetSection.difficulty}
- Use visuals if helpful (scoped to this section)
- Start with foundational concepts from this section`)

      .addOutputSchema({
        speech: {
          text: "string - Brief transition message (plain text for TTS)",
          emotion: "encouraging"
        },
        display: {
          content: "string - First question from target section (can use markdown and LaTeX)",
          showAfterSpeech: "boolean",
          type: "question"
        },
        mathTool: {
          toolName: "string - technical key from available tools (OPTIONAL)",
          parameters: "object - tool parameters (OPTIONAL)",
          caption: "string - explanation (OPTIONAL)"
        }
      })

      .addSection('CRITICAL', 'Return ONLY valid JSON. speech.text must be PLAIN TEXT (no markdown, no LaTeX). display.content CAN use markdown and LaTeX.');

    return builder.build();
  }

  /**
   * Resolve section resume
   * Called when student returns to an unfinished section
   */
  resolveSectionResume(context: PromptContext): string {
    const { subtopic, global } = this.getTopicConfig(context.topicId);

    // Use sectionId if provided, otherwise fall back to currentSection
    const targetSectionId = context.sectionId || context.currentSection;

    if (!targetSectionId) {
      throw new Error('sectionId or currentSection must be provided for section resume');
    }

    // Find the target section details
    const sections = subtopic.progressionStructure?.sections || [];
    const targetSection = sections.find((s: any) => s.id === targetSectionId);

    if (!targetSection) {
      throw new Error(`Section ${targetSectionId} not found in topic ${context.topicId}`);
    }

    const targetIndex = sections.indexOf(targetSection);
    const position = `${targetIndex + 1} of ${sections.length}`;

    // Format recent conversation from this section
    const conversationContext = context.sectionMessages
      ? formatConversationHistory(context.sectionMessages)
      : 'No previous conversation in this section';

    // Format section stats if available
    const sectionStats = context.sectionStats || {
      questionsAttempted: 0,
      questionsCorrect: 0,
      hintsUsed: 0,
      enteredAt: Date.now(),
      masteredAt: null
    };

    // Scope tools to target section
    const contextWithTargetSection = {
      ...context,
      currentSection: targetSectionId
    };
    const scopedMathTools = this.getScopedMathTools(contextWithTargetSection, subtopic, global);

    // Build prompt using PromptBuilder
    const builder = this.promptLibrary.createBuilder()
      .addRole(global.TUTOR_ROLE || "You are a Socratic mathematics tutor")
      .addContext({
        topic: subtopic.displayName,
        topicName: subtopic.topicName
      })

      .addSection('SECTION BEING RESUMED', {
        id: targetSection.id,
        title: targetSection.title,
        position: position,
        difficulty: targetSection.difficulty,
        focusObjectives: targetSection.focusObjectives || targetSection.learningObjectives,
        objectives: targetSection.learningObjectives,
        formulas: targetSection.relevantFormulas || []
      })

      .addSection('SECTION PROGRESS SO FAR', {
        questionsAttempted: sectionStats.questionsAttempted || 0,
        questionsCorrect: sectionStats.questionsCorrect || 0,
        hintsUsed: sectionStats.hintsUsed || 0,
        startedAt: sectionStats.enteredAt ? new Date(sectionStats.enteredAt).toLocaleString() : 'Unknown',
        status: sectionStats.masteredAt ? 'Mastered' : 'In Progress'
      })

      .addSection('RECENT CONVERSATION IN THIS SECTION', conversationContext)

      .addFormattingRules(FORMATTING_RULES)
      .addVisualTools(scopedMathTools)

      .addTask(`The student is returning to this section after working on something else.

Your task:
1. Welcome them back to this section warmly
2. Briefly summarize what was covered (based on recent conversation) - keep it to 1-2 sentences max
3. Identify where they left off
4. Either repeat the last unanswered question OR provide a relevant follow-up question

Resume guidance:
- Be warm and welcoming (e.g., "Welcome back to ${targetSection.title}!")
- Keep summary brief and encouraging
- Focus on section: ${targetSection.id}
- Continue testing objectives from this section
- Match difficulty level: ${targetSection.difficulty}
- Use visuals if helpful`)

      .addOutputSchema({
        speech: {
          text: "string - Welcome back message with brief summary (plain text for TTS)",
          emotion: "encouraging"
        },
        display: {
          content: "string - Question to continue with (can use markdown and LaTeX)",
          showAfterSpeech: "boolean",
          type: "question"
        },
        mathTool: {
          toolName: "string - technical key from available tools (OPTIONAL)",
          parameters: "object - tool parameters (OPTIONAL)",
          caption: "string - explanation (OPTIONAL)"
        }
      })

      .addSection('CRITICAL', 'Return ONLY valid JSON. speech.text must be PLAIN TEXT (no markdown, no LaTeX). display.content CAN use markdown and LaTeX.');

    return builder.build();
  }
}

// Export singleton instance for easy migration
export const newPromptResolver = new NewPromptResolver();