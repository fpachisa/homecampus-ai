/**
 * New Prompt Resolver using Prompt Library
 * Replaces the old promptResolver with clean implementation
 */

import {
  PromptLibrary,
  PromptBuilder,
  FORMATTING_RULES,
  INTERACTION_PROTOCOL,
  EVALUATOR_BASE,
  EVALUATOR_DECISION_MATRIX,
  HINT_PROGRESSION,
  TUTOR_BASE,
  QUESTION_BASE,
  SOLUTION_BASE
} from '../prompt-library';


import { getFilteredTools } from '../components/math-tools/mathToolsRegistry';

// Import topic configurations
// NEW: Migrated to prompt-library structure
import { S3_MATH_TRIGONOMETRY, S3_MATH_TRIGONOMETRY_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-trigonometry';
import { S3_MATH_CIRCLE_GEOMETRY, S3_MATH_CIRCLE_GEOMETRY_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-circle-geometry';
import { S3_MATH_QUADRATIC_EQUATIONS, S3_MATH_QUADRATIC_EQUATIONS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-quadratic-equations';

// OLD: Still in legacy format (to be migrated)
// None remaining!

export interface PromptContext {
  topicId: string;
  studentResponse?: string;
  problemState?: any;
  currentProblemType?: number;
  recentHistory?: string;
  sectionProgress?: any;
  currentSection?: string;
  masteredSections?: string[];

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

  constructor() {
    this.promptLibrary = new PromptLibrary();
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

      return {
        description: `Pre-built visual tools (Section-scoped to: ${currentSection})`,
        tools: filteredTools,
        usageGuidelines: "Use visual tools to help clarify concepts. Choose tools based on the section's learning objectives."
      };
    }

    // Default: return all available tools for this topic
    return getFilteredTools(availableToolsList);
  }

  /**
   * Get topic configuration (temporary bridge to old system)
   */
  private getTopicConfig(topicId: string): { subtopic: any; global: any } {
    // Bridge to old system - will be replaced when topics are migrated
    if (topicId.startsWith('s3-math-trigonometry-')) {
      const subtopic = S3_MATH_TRIGONOMETRY[topicId as any];
      return { subtopic, global: S3_MATH_TRIGONOMETRY_CONFIG };
    }

    if (topicId.startsWith('s3-math-circle-geometry-')) {
      const subtopic = S3_MATH_CIRCLE_GEOMETRY[topicId as any];
      return { subtopic, global: S3_MATH_CIRCLE_GEOMETRY_CONFIG };
    }

    if (topicId.startsWith('s3-math-quadratic-')) {
      const subtopic = S3_MATH_QUADRATIC_EQUATIONS[topicId as any];
      return { subtopic, global: S3_MATH_QUADRATIC_EQUATIONS_CONFIG };
    }

    throw new Error(`Topic ${topicId} not found`);
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
      .addRole(global.TUTOR_ROLE || "You are a Socratic mathematics tutor")
      .addContext({
        topic: subtopic.displayName,
        topicName: subtopic.topicName
      })
      .addObjectives(subtopic.learningObjectives ? [subtopic.learningObjectives] : [])
      .addFormattingRules(FORMATTING_RULES)
      .addVisualTools(scopedMathTools)
      .addTask(`Greet the student warmly and introduce ${subtopic.topicName}` + ` Then generate the first intoductory problem on ${firstSection.title}`)
      .addOutputSchema({
          speech: {
            text: "string - plain text for avatar speech",
            emotion: "warm"
          },

          display: {
            content: "string | null - markdown/LaTeX content",
            showAfterSpeech: "boolean",
            type: "initial_problem"
          },

          mathTool: {
            toolName: "string - technical key",
            parameters: "object - tool parameters",
            caption: "string - explanation"
          }

      })
      .addSection("CRITICAL", "Return ONLY valid JSON");

    return builder.build();
  }

  /**
   * Resolve evaluator agent prompt (Three-Tier Context Architecture)
   *
   * TIER 1: Topic Overview - provides "big picture" progression context
   * TIER 2: Current Section Detail - detailed rubric and objectives for THIS section only
   * TIER 3: Future Sections - excluded to reduce token usage
   */
  resolveEvaluatorAgent(context: PromptContext): string {
    const { subtopic } = this.getTopicConfig(context.topicId);
    const currentSectionDetail = this.getCurrentSectionDetail(context, subtopic);

    const builder = new PromptBuilder()
      // Base role and responsibilities
      .addRole(EVALUATOR_BASE.role)
      .addSection('RESPONSIBILITIES', EVALUATOR_BASE.responsibilities)
      .addSection('CAPABILITIES', EVALUATOR_BASE.capabilities)
      .addSection('CONSTRAINTS', EVALUATOR_BASE.constraints)

      // Decision-making rules
      .addSection('DECISION MATRIX', EVALUATOR_DECISION_MATRIX)
      .addSection('HINT PROGRESSION STRATEGY', HINT_PROGRESSION)

      // TIER 1: Topic Overview (always included for progression context)
      .addSection('TOPIC OVERVIEW', {
        name: subtopic.displayName,
        learningObjectives: subtopic.learningObjectives  // High-level 6-section summary
      })

      // TIER 2: Current Section Detail (full context for THIS section only)
      .addIf(!!currentSectionDetail, (b) => {
        b.addSection('CURRENT SECTION (DETAILED)', {
          title: currentSectionDetail.title,
          position: currentSectionDetail.position,
          difficulty: currentSectionDetail.difficulty,
          masteryRubric: currentSectionDetail.masteryRubric || 'Use general assessment criteria',
          objectives: currentSectionDetail.objectives,
          formulas: currentSectionDetail.formulas
        });
      })

      // Interaction protocol
      .addSection('INSTRUCTION SCHEMAS', INTERACTION_PROTOCOL.instructionSchemas)
      .addSection('EVALUATOR OUTPUT SCHEMA', INTERACTION_PROTOCOL.evaluatorOutputs)

      // Current problem context
      .addSection('CURRENT PROBLEM', {
        problem: context.currentProblemText || 'N/A',
        problemId: context.currentProblemId || 'unknown',
        studentResponse: context.studentResponse || 'No response yet'
      })

      // Quantitative data from service layer
      .addSection('QUANTITATIVE DATA', {
        hintsGiven: context.hintsGiven || 0,
        studentAttempts: context.studentAttempts || 0,
        currentSection: context.currentSection || 'Not set',
        masteredSections: context.masteredSections?.join(', ') || 'None yet',
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

      .addTask("Evaluate the student's response against the mastery rubric. Use topic overview for progression context. Assess both quantitative (from data) and qualitative (from response analysis) criteria. Return ONLY a JSON object with the evaluator output schema.");

    return builder.build();
  }

  /**
   * Resolve tutor agent prompt
   */
  resolveTutorAgent(context: PromptContext): string {
    const { subtopic, global } = this.getTopicConfig(context.topicId);
    const scopedMathTools = this.getScopedMathTools(context, subtopic, global);

    const builder = new PromptBuilder()
      .addRole(TUTOR_BASE.role)
      .addSection('RESPONSIBILITIES', TUTOR_BASE.responsibilities)
      .addSection('CONSTRAINTS', TUTOR_BASE.constraints)

      .addSection('TEACHING PHILOSOPHY', global.TUTOR_ROLE || '')
      .addFormattingRules(FORMATTING_RULES)
      .addOutputSchema(TUTOR_BASE.outputSchema!)
      .addVisualTools(scopedMathTools)

      .addSection('INSTRUCTION FROM EVALUATOR', context.tutorInstruction || {})
      .addSection("EVALUATOR'S ASSESSMENT", context.evaluatorAssessment || {})
      .addSection("EVALUATOR'S REASONING", context.evaluatorReasoning || '')

      .addSection('CURRENT CONTEXT', {
        studentResponse: context.studentResponse || '',
        recentHistory: context.recentHistory || '',
        hintLevel: context.hintLevel || 1,
        answerCorrect: context.answerCorrect || false
      })

      .addTask("Execute the tutorInstruction to generate an appropriate Socratic hint or celebration. Return a properly formatted JSON response.");

    return builder.build();
  }

  /**
   * Resolve question agent prompt
   */
  resolveQuestionGeneration(context: PromptContext): string {
    const { subtopic, global } = this.getTopicConfig(context.topicId);
    const scopedMathTools = this.getScopedMathTools(context, subtopic, global);

    const builder = new PromptBuilder()
      .addRole(QUESTION_BASE.role)
      .addSection('RESPONSIBILITIES', QUESTION_BASE.responsibilities)
      .addSection('CONSTRAINTS', QUESTION_BASE.constraints)

      .addFormattingRules(FORMATTING_RULES)
      .addOutputSchema(QUESTION_BASE.outputSchema!)
      .addVisualTools(scopedMathTools)

      .addSection('INSTRUCTION FROM EVALUATOR', context.questionInstruction || {})
      .addSection("EVALUATOR'S REASONING", context.evaluatorReasoning || '')
      .addSection('RECENT HISTORY', context.recentHistory || '')

      .addTask("Execute the questionInstruction to generate a new problem. Return JSON only.");

    return builder.build();
  }

  /**
   * Resolve solution agent prompt
   */
  resolveSolutionAgent(context: PromptContext): string {
    const { subtopic, global } = this.getTopicConfig(context.topicId);
    const scopedMathTools = this.getScopedMathTools(context, subtopic, global);

    const builder = new PromptBuilder()
      .addRole(SOLUTION_BASE.role)
      .addSection('RESPONSIBILITIES', SOLUTION_BASE.responsibilities)
      .addSection('CONSTRAINTS', SOLUTION_BASE.constraints)

      .addFormattingRules(FORMATTING_RULES)
      .addOutputSchema(SOLUTION_BASE.outputSchema!)
      .addVisualTools(scopedMathTools)

      .addSection('INSTRUCTION FROM EVALUATOR', context.solutionInstruction || {})
      .addSection("EVALUATOR'S REASONING", context.evaluatorReasoning || '')

      .addTask("Execute the solutionInstruction to generate a complete educational solution. Return JSON only.");

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
   * Bridge methods for compatibility
   */
  resolveSectionStartQuestion(context: any): string {
    return this.resolveInitialGreetingWithProblem(context);
  }

  resolveSectionResume(context: any): string {
    return this.resolveInitialGreetingWithProblem(context);
  }
}

// Export singleton instance for easy migration
export const newPromptResolver = new NewPromptResolver();