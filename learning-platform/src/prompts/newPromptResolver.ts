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

// Import topic configurations
// NEW: Migrated to prompt-library structure
import { S3_MATH_TRIGONOMETRY, S3_MATH_TRIGONOMETRY_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-trigonometry';
import { S3_MATH_CIRCLE_GEOMETRY, S3_MATH_CIRCLE_GEOMETRY_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-circle-geometry';
import { S3_MATH_QUADRATIC_EQUATIONS, S3_MATH_QUADRATIC_EQUATIONS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-quadratic-equations';
import { S3_MATH_EXPONENTIAL_LOGARITHMS_SUBTOPICS, EXPONENTIAL_LOGARITHMS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-exponential-logarithms';
import { S3_MATH_SETS_VENN_DIAGRAMS, S3_MATH_SETS_VENN_DIAGRAMS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-sets-venn-diagrams';
import { S3_MATH_EXPONENTS_SUBTOPICS, S3_MATH_EXPONENTS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-exponents';
import { S3_MATH_SURDS_RADICALS_SUBTOPICS, S3_MATH_SURDS_RADICALS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-surds-radicals';
import { S3_MATH_STATISTICS_SUBTOPICS, S3_MATH_STATISTICS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-statistics';
import { S3_MATH_RELATIONS_FUNCTIONS_SUBTOPICS, S3_MATH_RELATIONS_FUNCTIONS_CONFIG } from '../prompt-library/subjects/mathematics/secondary/s3-relations-functions';

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

    if (topicId.startsWith('s3-math-exponential-logarithms-')) {
      const subtopic = S3_MATH_EXPONENTIAL_LOGARITHMS_SUBTOPICS[topicId as any];
      return { subtopic, global: EXPONENTIAL_LOGARITHMS_CONFIG };
    }

    if (topicId.startsWith('s3-math-sets-')) {
      const subtopic = S3_MATH_SETS_VENN_DIAGRAMS[topicId as any];
      return { subtopic, global: S3_MATH_SETS_VENN_DIAGRAMS_CONFIG };
    }

    if (topicId.startsWith('s3-math-exponents-')) {
      const subtopic = S3_MATH_EXPONENTS_SUBTOPICS[topicId as any];
      return { subtopic, global: S3_MATH_EXPONENTS_CONFIG };
    }

    if (topicId.startsWith('s3-math-surds-')) {
      const subtopic = S3_MATH_SURDS_RADICALS_SUBTOPICS[topicId as any];
      return { subtopic, global: S3_MATH_SURDS_RADICALS_CONFIG };
    }

    if (topicId.startsWith('s3-math-statistics-')) {
      const subtopic = S3_MATH_STATISTICS_SUBTOPICS[topicId as any];
      return { subtopic, global: S3_MATH_STATISTICS_CONFIG };
    }

    if (topicId.startsWith('s3-math-relations-')) {
      const subtopic = S3_MATH_RELATIONS_FUNCTIONS_SUBTOPICS[topicId as any];
      return { subtopic, global: S3_MATH_RELATIONS_FUNCTIONS_CONFIG };
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
      .addRole("You are a warm and friendly math tutor")
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
      .addSection("CRITICAL", "Return ONLY valid JSON exactly as per OUTPUT SCHEMA even if no mathTool used still provide all fields and keep it blank.")
      .addSection("CRITICAL", "Ask only one question unless the second part is using the answer from the first part.");

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