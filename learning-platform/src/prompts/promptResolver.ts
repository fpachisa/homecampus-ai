import { SYSTEM_PROMPTS } from './systemPrompts';
import { S3_MATH_TRIGONOMETRY, S3_MATH_TRIGONOMETRY_CONFIG, type TrigonometryTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-trigonometry';
import { S3_MATH_CIRCLE_GEOMETRY, S3_MATH_CIRCLE_GEOMETRY_CONFIG, type CircleGeometryTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-circle-geometry';
import { S3_MATH_QUADRATIC_EQUATIONS, S3_MATH_QUADRATIC_EQUATIONS_CONFIG, type QuadraticEquationsTopicId } from '../prompt-library/subjects/mathematics/secondary/s3-quadratic-equations';
import { formatConversationHistory } from '../services/utils/responseParser';
import { getFilteredTools } from '../components/math-tools/mathToolsRegistry';

// Legacy type definitions (moved from deleted P6-Math-Fractions)
export type SubtopicConfig = any;
export type SolutionStep = any;

export interface PromptContext {
  topicId: TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId | string;
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

// Section progression state
  currentSection?: string;           // Current section ID
  masteredSections?: string[];       // Array of mastered section IDs

// New fields for visualization extraction
  problemText?: string;
  visualizationId?: string;
  trigger?: 'solution' | 'hint' | 'explanation';

// New fields for step-by-step visualization extraction
  stepConfigs?: any[];
  detectedContext?: string;
  detectedVisualizationId?: string;

// New fields for practice batch generation
  count?: number;                       // Number of problems to generate
  userPreferences?: string[];           // Preferred contexts
  excludeContexts?: string[];           // Recently used contexts
  recentProblems?: string[];            // Recent problem texts

// New fields for practice agent evaluation
  currentProblem?: string;              // Current problem text
  correctAnswer?: string;               // Correct answer for current problem
  hintsGivenCount?: number;             // Number of hints already given
  attemptsCount?: number;               // Number of attempts made
}

export class PromptResolver {
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
   * Get topic configuration using AI-First approach
   * Returns both subtopic config and global config
   */
  private getTopicConfig(topicId: TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId | string): {
    subtopic: any;
    global: any;
  } {
    // AI-First format: S3 trigonometry
    if (topicId.startsWith('s3-math-trigonometry-')) {
      const subtopic = S3_MATH_TRIGONOMETRY[topicId as TrigonometryTopicId];
      if (!subtopic) {
        throw new Error(`Topic configuration not found for: ${topicId}`);
      }
      return {
        subtopic,
        global: S3_MATH_TRIGONOMETRY_CONFIG
      };
    }

    // AI-First format: S3 circle geometry
    if (topicId.startsWith('s3-math-circle-geometry-')) {
      const subtopic = S3_MATH_CIRCLE_GEOMETRY[topicId as CircleGeometryTopicId];
      if (!subtopic) {
        throw new Error(`Topic configuration not found for: ${topicId}`);
      }
      return {
        subtopic,
        global: S3_MATH_CIRCLE_GEOMETRY_CONFIG
      };
    }

    // AI-First format: S3 quadratic equations
    if (topicId.startsWith('s3-math-quadratic-')) {
      const subtopic = S3_MATH_QUADRATIC_EQUATIONS[topicId as QuadraticEquationsTopicId];
      if (!subtopic) {
        throw new Error(`Topic configuration not found for: ${topicId}`);
      }
      return {
        subtopic,
        global: S3_MATH_QUADRATIC_EQUATIONS_CONFIG
      };
    }

    // Old format not supported - fail loudly
    throw new Error(`Topic ${topicId} uses old format. Please migrate to AI-First approach.`);
  }


  resolveInitialGreeting(context: PromptContext): string {
    const { subtopic } = this.getTopicConfig(context.topicId);
    return SYSTEM_PROMPTS.INITIAL_GREETING.replace(
      /{TOPIC_NAME}/g,
      subtopic.topicName
    );
  }

  resolveInitialGreetingWithProblem(context: PromptContext): string {
    const { subtopic, global } = this.getTopicConfig(context.topicId);

    // Format progression structure
    const progressionStructure = (subtopic as any).progressionStructure
      ? JSON.stringify((subtopic as any).progressionStructure, null, 2)
      : 'No progression structure defined';

    // Get first section for initial question
    const firstSection = (subtopic as any).progressionStructure?.sections?.[0];
    const firstSectionStr = firstSection
      ? `\n\n**Start with First Section:**\n- ID: ${firstSection.id}\n- Title: ${firstSection.title}\n- Difficulty: ${firstSection.difficulty}\n- Focus: ${firstSection.focusObjectives}`
      : '';

    // Scope tools to first section
    const contextWithFirstSection = {
      ...context,
      currentSection: firstSection?.id
    };
    const scopedMathTools = this.getScopedMathTools(contextWithFirstSection, subtopic, global);

    // AI-First approach with progression structure
    return `${global.TUTOR_ROLE}

**Current Topic: ${subtopic.displayName}**
${subtopic.topicName}

**Progression Structure:**
${progressionStructure}${firstSectionStr}

**Full Learning Objectives:**
${subtopic.learningObjectives}

**Key Formulas:**
${subtopic.keyFormulas}


**Available Visual Tools:**
${JSON.stringify(scopedMathTools, null, 2)}

**Your Task:**
Generate a warm, friendly greeting to start the learning session, then immediately present a foundational-level question from the FIRST section of the progression structure to assess the student's current understanding.

**Question Guidance:**
- Start with the first section: ${firstSection?.id || 'foundational content'}
- Test the objectives from that section only
- Keep it simple and accessible
- Use visuals if helpful

**CRITICAL: Required Output Format:**
Return a JSON response with EXACTLY these fields:
- speech: { text, emotion } - Warm welcome message
  * CRITICAL: text must be PLAIN TEXT only - no markdown (* _ **), no LaTeX ($ \\), suitable for text-to-speech
- display: { content, showAfterSpeech, type: "question" } - First foundational question from first section
  * content CAN use markdown and LaTeX for proper formatting
- mathTool: (OPTIONAL) If a visual tool from Available Visual Tools would help, include it as:
  {
    "toolName": "technical_key_from_available_tools",
    "parameters": { /* tool-specific parameters */ },
    "caption": "Brief explanation of the visual"
  }`;

  }

  resolveSectionStartQuestion(context: PromptContext & { sectionId: string }): string {
    const { subtopic, global } = this.getTopicConfig(context.topicId);

    // Format progression structure
    const progressionStructure = (subtopic as any).progressionStructure
      ? JSON.stringify((subtopic as any).progressionStructure, null, 2)
      : 'No progression structure defined';

    // Get the specific section for this question
    const targetSection = (subtopic as any).progressionStructure?.sections?.find(
      (s: any) => s.id === context.sectionId
    );

    if (!targetSection) {
      throw new Error(`Section ${context.sectionId} not found in topic ${context.topicId}`);
    }

    const targetSectionStr = `\n\n**Target Section (Student Jumped To):**\n- ID: ${targetSection.id}\n- Title: ${targetSection.title}\n- Difficulty: ${targetSection.difficulty}\n- Focus: ${targetSection.focusObjectives}`;

    // Scope tools to target section
    const contextWithTargetSection = {
      ...context,
      currentSection: targetSection.id
    };
    const scopedMathTools = this.getScopedMathTools(contextWithTargetSection, subtopic, global);

    // AI-First approach with section-specific context
    return `${global.TUTOR_ROLE}

**Current Topic: ${subtopic.displayName}**
${subtopic.topicName}

**Progression Structure:**
${progressionStructure}${targetSectionStr}

**Full Learning Objectives:**
${subtopic.learningObjectives}

**Key Formulas:**
${subtopic.keyFormulas}

**Available Visual Tools:**
${JSON.stringify(scopedMathTools, null, 2)}

**Your Task:**
The student has jumped to a new section: "${targetSection.title}". Generate a brief transition message acknowledging this, then immediately present a question from THIS specific section to assess their understanding.

**Question Guidance:**
- Focus on section: ${targetSection.id}
- Test the objectives from THIS section only: ${targetSection.focusObjectives}
- Match the section's difficulty level: ${targetSection.difficulty}
- Use visuals if helpful (scoped to this section)

**CRITICAL: Required Output Format:**
Return a JSON response with EXACTLY these fields:
- speech: { text, emotion } - Brief transition message (e.g., "Great! Let's work on [section topic]")
  * CRITICAL: text must be PLAIN TEXT only - no markdown (* _ **), no LaTeX ($ \\), suitable for text-to-speech
- display: { content, showAfterSpeech, type: "question" } - First question from the target section
  * content CAN use markdown and LaTeX for proper formatting
- mathTool: (OPTIONAL) If a visual tool from Available Visual Tools would help, include it as:
  {
    "toolName": "technical_key_from_available_tools",
    "parameters": { /* tool-specific parameters */ } - DO NOT use latex or markdown in parameters,
    "caption": "Brief explanation of the visual"
  }`;
  }

  resolveSectionResume(context: PromptContext & { sectionId: string; sectionMessages: any[]; sectionStats: any }): string {
    const { subtopic, global } = this.getTopicConfig(context.topicId);

    // Get the specific section
    const targetSection = (subtopic as any).progressionStructure?.sections?.find(
      (s: any) => s.id === context.sectionId
    );

    if (!targetSection) {
      throw new Error(`Section ${context.sectionId} not found in topic ${context.topicId}`);
    }

    // Format recent conversation from this section
    const conversationContext = formatConversationHistory(context.sectionMessages);

    // Scope tools to target section
    const contextWithTargetSection = {
      ...context,
      currentSection: targetSection.id
    };
    const scopedMathTools = this.getScopedMathTools(contextWithTargetSection, subtopic, global);

    return `${global.TUTOR_ROLE}

**Current Topic: ${subtopic.displayName}**
${subtopic.topicName}

**Section Being Resumed: ${targetSection.title}**
- ID: ${targetSection.id}
- Difficulty: ${targetSection.difficulty}
- Focus: ${targetSection.focusObjectives}

**Section Progress So Far:**
- Questions Attempted: ${context.sectionStats.questionsAttempted}
- Questions Correct: ${context.sectionStats.questionsCorrect}
- Hints Used: ${context.sectionStats.hintsUsed}
- Started: ${new Date(context.sectionStats.enteredAt).toLocaleString()}
- Status: ${context.sectionStats.masteredAt ? 'Mastered' : 'In Progress'}

**Recent Conversation in This Section:**
${conversationContext}

**Available Visual Tools:**
${JSON.stringify(scopedMathTools, null, 2)}

**Your Task:**
The student is returning to this section after working on something else. You need to:
1. Welcome them back to this section
2. Briefly summarize what was covered (based on recent conversation)
3. Identify where they left off
4. Either repeat the last unanswered question OR provide a relevant follow-up question

**Resume Guidance:**
- Be warm and welcoming ("Welcome back to [section topic]!")
- Keep summary brief (1-2 sentences max)
- Focus on section: ${targetSection.id}
- Continue testing objectives: ${targetSection.focusObjectives}
- Match difficulty level: ${targetSection.difficulty}
- Use visuals if helpful

**CRITICAL: Required Output Format:**
Return a JSON response with EXACTLY these fields:
- speech: { text, emotion } - Welcome back message with brief summary
  * CRITICAL: text must be PLAIN TEXT only - no markdown (* _ **), no LaTeX ($ \\), suitable for text-to-speech
  * Example: "Welcome back! We were working on finding angles in circles. Let's continue with the next question."
- display: { content, showAfterSpeech, type: "question" } - The question to continue with (last question or follow-up)
  * content CAN use markdown and LaTeX for proper formatting
- mathTool: (OPTIONAL) If a visual tool from Available Visual Tools would help, include it as:
  {
    "toolName": "technical_key_from_available_tools",
    "parameters": { /* tool-specific parameters */ },
    "caption": "Brief explanation of the visual"
  }`;
  }

  resolveConversationResponse(context: PromptContext): string {
    const { subtopic } = this.getTopicConfig(context.topicId);
    return SYSTEM_PROMPTS.CONVERSATION_RESPONSE
      .replace(/{TOPIC_NAME}/g, subtopic.topicName)
      .replace(/{current_problem_type}/g, context.currentProblemType?.toString() || '1')
      .replace(/{recent_history}/g, context.recentHistory || '')
      .replace(/{student_response}/g, context.studentResponse || '');
  }

  resolveCelebration(context: PromptContext): string {
    const { subtopic } = this.getTopicConfig(context.topicId);
    return SYSTEM_PROMPTS.CELEBRATION
      .replace(/{TOPIC_NAME}/g, subtopic.topicName)
      .replace(/{final_score}/g, context.finalScore?.toFixed(2) || '0.00')
      .replace(/{problems_completed}/g, context.problemsCompleted?.toString() || '0')
      .replace(/{session_duration}/g, context.sessionDuration?.toString() || '0');
  }

resolveEvaluatorAgent(context: PromptContext): string {
    const { subtopic, global } = this.getTopicConfig(context.topicId);

    // Format originalMathTool if present
    const originalMathToolStr = context.currentProblemText && (context as any).originalMathTool
      ? `\n- Original Visual Tool (GROUND TRUTH for validation): ${JSON.stringify((context as any).originalMathTool, null, 2)}`
      : '\n- Original Visual Tool: None';

    // Format progression structure
    const progressionStructure = (subtopic as any).progressionStructure
      ? JSON.stringify((subtopic as any).progressionStructure, null, 2)
      : 'No progression structure defined';

    // AI-First approach: Evaluator as Teaching Brain with full curriculum intelligence
    return `You are the EVALUATOR AGENT - The "Teaching Brain" with complete curriculum intelligence.

**Your Role:**
- Evaluate student answers for correctness
- Assess understanding and identify concept gaps
- Track progression through learning sections
- Decide next action (hint, solution, new question, celebrate)
- Generate TARGETED INSTRUCTIONS for UI agents (Tutor, Question, Solution)

**You do NOT generate UI content** - that's the job of UI agents who follow your instructions.

**Current Topic: ${subtopic.displayName}**
${subtopic.topicName}

**IMPORTANT: Formatting Rules for UI Agents**
When you generate instructions for UI agents, remember they must follow these formatting rules:
${JSON.stringify(global.FORMATTING_RULES, null, 2)}

**Progression Structure (Your Complete Knowledge + Roadmap):**
${progressionStructure}

NOTE: The progressionStructure above is your SINGLE SOURCE OF TRUTH. It contains:
- masteryPhilosophy: How to advance students (when to move to next section, when to remediate, when to celebrate)
- sections[]: All learning sections with detailed learningObjectives, relevantFormulas, masterySignals, prerequisites
- Everything you need to make informed pedagogical decisions

**Quick Reference (for human readers - you should use progressionStructure above):**
Learning Objectives Summary: ${subtopic.learningObjectives}
Key Formulas Summary: ${subtopic.keyFormulas}

**Instruction Schemas (How You Communicate with UI Agents):**
${JSON.stringify(global.INTERACTION_PROTOCOL.instructionSchemas, null, 2)}

**What You Must Return (EVALUATOR OUTPUT SCHEMA):**
${JSON.stringify(global.INTERACTION_PROTOCOL.evaluatorOutputs, null, 2)}

**Current Context:**
- Current Problem: ${context.currentProblemText || 'N/A'}
- Problem ID: ${context.currentProblemId || 'unknown'}
- Hints Given: ${context.hintsGiven?.toString() || '0'}
- Student Attempts: ${context.studentAttempts?.toString() || '0'}
- Current Difficulty: ${context.currentProblemType === 1 ? 'foundational' : context.currentProblemType === 2 ? 'intermediate' : 'advanced'}${originalMathToolStr}
- Recent History: ${context.recentHistory || 'No history'}

**PROGRESSION STATE (CRITICAL - NO REGRESSION ALLOWED):**
- Current Section: ${(context as any).currentSection || 'Not set - start with first section'}
- Mastered Sections: ${(context as any).masteredSections?.join(', ') || 'None yet'}

**CURRENT SECTION STATS (For Mastery Tracking):**
${(context as any).sectionStats ? `- Questions Attempted in Current Section: ${(context as any).sectionStats.questionsAttempted}
- Questions Correct in Current Section: ${(context as any).sectionStats.questionsCorrect}
- Hints Used in Current Section: ${(context as any).sectionStats.hintsUsed}

IMPORTANT: Use these stats to accurately track mastery progress. For example, if masterySignals say "3 correct answers", check if questionsCorrect >= 3.` : '- Section stats not available (new session or section transition)'}

**CRITICAL RULE - FORWARD-ONLY PROGRESSION:**
1. NEVER test sections that are in "Mastered Sections" unless student explicitly shows confusion
2. ALWAYS continue from "Current Section" or advance to next section
3. Only regress if student demonstrates clear knowledge gaps in prerequisites
4. Use progression.currentSection in your response to track which section you're testing
5. Set progression.sectionMastered = true only when section's masterySignals are met

**Student Response:**
${context.studentResponse || 'No response yet'}

**CRITICAL VALIDATION RULES:**
1. If originalMathTool is present, you MUST validate the student's answer against the EXACT parameters in originalMathTool
2. DO NOT hallucinate or change the triangle/diagram configuration - use the ground truth from originalMathTool
3. For example, if originalMathTool shows opposite="x" and student answers "z", the answer is WRONG
4. Your evaluation must be based on the ORIGINAL problem setup, not a modified version

**ASSESSMENT GENERATION (Use progressionStructure.masteryPhilosophy):**
1. Evaluate understanding: strong | developing | struggling
2. Identify conceptGaps based on student's mistakes/confusion (reference section's learningObjectives)
3. Determine readyToAdvance using progressionStructure.masteryPhilosophy and current section's masterySignals:
   - Check if current section's masterySignals are met
   - Follow the guidance in masteryPhilosophy (typically 2-3 correct with minimal hints)
   - Consider recent performance across multiple problems
   - Set true only when consistent mastery demonstrated

**PROGRESSION TRACKING:**
1. Determine currentSection based on what's being tested (section ID from progressionStructure.sections)
2. Evaluate if sectionMastered using that section's masterySignals criteria AND CURRENT SECTION STATS:
   - Use questionsCorrect from CURRENT SECTION STATS to check mastery
   - For example: if masterySignals say "3 correct answers", check if questionsCorrect >= 3
   - NOT just based on the current answer alone
3. Track masteryProgress accurately using stats (e.g., "Student has 2 correct answers, needs 1 more for mastery")
4. Set nextSection if current is mastered AND next section's prerequisites are met

**Distinguishing Intermediate vs Final Answers**                                                                                                                              
1. Check the most recent tutor message in recent_history
2. If it contains a hint with a sub-question, student might be answering THAT and that is intermediate answer
3. Only mark isMainProblemSolved=true if student answers the ORIGINAL problem from current_problem_text
4. Set isMainProblemSolved=false for all intermediate answers
5. Your reasoning to must include this analysis

**ACTION SELECTION RULES:**
- Use "NEW_PROBLEM" when: Student answered correctly OR after showing solution → Generate questionInstruction with appropriate section
- Use "GIVE_HINT" when: Student answered incorrectly AND hints < 2 → Generate tutorInstruction with targeted hint guidance
- Use "GIVE_SOLUTION" when: Student answered incorrectly AND hints >= 2 OR student asks for solution → Generate solutionInstruction
- Use "CELEBRATE" when: Student has mastered ALL sections in progressionStructure → Generate tutorInstruction for celebration
  * CRITICAL CHECK: progressionStructure has ${(subtopic as any).progressionStructure?.sections?.length || 0} total sections
  * ONLY use CELEBRATE if: (Mastered Sections count) === (Total sections) AND current section is also being mastered now
  * Example: If 3 total sections, need ALL 3 in Mastered Sections list to CELEBRATE
  * If only some sections mastered, use NEW_PROBLEM to continue to next section instead
- IMPORTANT: Do NOT use CELEBRATE after just one correct answer - use NEW_PROBLEM instead

**INSTRUCTION GENERATION (Based on Action):**

If action is GIVE_HINT:
- Generate tutorInstruction following TutorInstruction schema
- Include focusConcept, studentError, hintStrategy, relevantInfo (just what's needed), tone, depth
- Extract ONLY relevant info from progressionStructure.sections[currentSection].learningObjectives
- Use ONLY relevant formulas from progressionStructure.sections[currentSection].relevantFormulas

If action is NEW_PROBLEM:
- Generate questionInstruction following QuestionInstruction schema
- Required fields:
  * targetSection: section ID from progressionStructure.sections
  * targetConcept: specific objective from progressionStructure.sections[targetSection].learningObjectives to test
  * difficulty: foundational | intermediate | advanced (based on section difficulty)
  * focusObjectives: progressionStructure.sections[targetSection].learningObjectives (full array for context)
  * relevantFormulas: progressionStructure.sections[targetSection].relevantFormulas (only what's needed)
- Optional fields:
  * conceptGaps: from your assessment (what student is struggling with)
  * sampleProblems: progressionStructure.sections[targetSection].sampleProblems (if present)
  * questionConstraints: specific parameters if needed (e.g., angleRange: [30, 60])

If action is GIVE_SOLUTION:
- Generate solutionInstruction following SolutionInstruction schema
- Include problemText, studentAttempt, explanationFocus, explanationDepth, studentStrugglePoint
- Set relevantFormulas from progressionStructure.sections[currentSection].relevantFormulas
- Set relevantConcepts from progressionStructure.sections[currentSection].learningObjectives
- Extract ONLY what's needed for THIS specific problem

**Your Task:**
Evaluate the student's response, assess their understanding, track progression, decide the next action, and generate a targeted instruction for the appropriate UI agent. Return ONLY a JSON object with the evaluator output schema - NO speech, NO display, NO mathTool.`;
  }

  resolveTutorAgent(context: PromptContext): string {
    const { subtopic, global } = this.getTopicConfig(context.topicId);
    const scopedMathTools = this.getScopedMathTools(context, subtopic, global);

    // Format tutorInstruction from Evaluator
    const tutorInstructionStr = (context as any).tutorInstruction
      ? JSON.stringify((context as any).tutorInstruction, null, 2)
      : 'No instruction provided (this is an error - Evaluator should provide tutorInstruction)';

    // Format evaluator assessment for context
    const evaluatorAssessmentStr = (context as any).evaluatorAssessment
      ? JSON.stringify((context as any).evaluatorAssessment, null, 2)
      : 'No assessment provided';

    // Tutor Agent: Pure UI generator based on targeted instructions
    return `You are the Tutor Agent - a UI generator for hints and celebrations.

**Your Role:**
You execute instructions from the Evaluator Agent to generate Socratic hints or celebrations.
You do NOT make pedagogical decisions - the Evaluator determines what help to provide.

**Teaching Philosophy (for tone only):**
${global.TUTOR_ROLE}

**CRITICAL: Formatting Rules (You MUST Follow These)**
${JSON.stringify(global.FORMATTING_RULES, null, 2)}

**What You Must Return (TUTOR OUTPUT SCHEMA):**
${JSON.stringify(global.INTERACTION_PROTOCOL.tutorOutputs, null, 2)}

**Available Visual Tools:**
${JSON.stringify(scopedMathTools, null, 2)}

**Targeted Instruction from Evaluator:**
${tutorInstructionStr}

**Evaluator's Assessment (for context only, do NOT return this):**
${evaluatorAssessmentStr}

**Evaluator's Reasoning:**
${context.evaluatorReasoning || 'No reasoning provided'}

**Current Context:**
- Student Response: ${context.studentResponse || 'No response'}
- Recent History: ${context.recentHistory || 'No history'}
- Hint Level: ${context.hintLevel?.toString() || '1'}
- Answer Correct: ${(context as any).answerCorrect !== undefined ? (context as any).answerCorrect : 'unknown'}

**INSTRUCTION EXECUTION:**

The tutorInstruction contains everything you need:
- focusConcept: What to focus the hint on
- studentError: What the student did wrong
- hintStrategy: How to guide them
- relevantInfo: The specific definition/formula/concept needed
- tone: How to communicate
- depth: How much help to give

**SPEECH GENERATION:**
- CRITICAL: speech.text must be PLAIN TEXT ONLY - no markdown (* _ **), no LaTeX ($ \\), no usage of - like 30-60-90 or SOH-CAH-TAO (use space instead), uitable for text-to-speech
- Use tutorInstruction and evaluatorReasoning to guide tone and content, the transition should be natural and relevant
- If answerCorrect is FALSE: Gently acknowledge incorrect attempt, then introduce hint (e.g., "Not quite - let me help you with a hint about [focusConcept].")
- If answerCorrect is TRUE (partial): Acknowledge correct step, encourage next step
- If CELEBRATE action: Full enthusiastic celebration for completing subtopic
- Match the tone specified in tutorInstruction

**DISPLAY GENERATION:**
- For GIVE_HINT: Generate hint text based on hintStrategy and relevantInfo and it should always ends with a guiding question
- Make it Socratic - ask guiding questions, don't give direct answers (unless depth is "near-answer")
- Use relevantInfo provided (don't need full learning objectives)
- Display content CAN use markdown and LaTeX for proper formatting
- For CELEBRATE: null (speech-only)

**VISUAL TOOLS:**
- Use mathTool if a diagram would help clarify the hint
- Follow the specifications in Available Visual Tools above

**CRITICAL RULES:**
1. You are ONLY responsible for UI generation (speech + display + optional mathTool)
2. Use the tutorInstruction to guide your hint - it contains targeted, minimal information
3. Return ONLY these fields: speech, display, mathTool (optional)

**Your Task:**
Execute the tutorInstruction to generate an appropriate Socratic hint or celebration. Return a properly formatted JSON response following the tutor output schema.`;
  }

  resolveAnswerEvaluation(context: PromptContext): string {
    const { subtopic, global } = this.getTopicConfig(context.topicId);

    // AI-First approach: Use PROGRESSION_MODEL instead of rigid scoring
    return `${global.TUTOR_ROLE}

**Current Topic: ${subtopic.displayName}**
${subtopic.topicName}

**Progression Model:**
${JSON.stringify(global.PROGRESSION_MODEL, null, 2)}

**Your Task:**
Evaluate the student's answer and tutor's response to determine if progress is being made.

**Context:**
- Student Response: ${context.studentResponse || 'N/A'}
- Tutor Response: ${context.tutorResponse || 'N/A'}
- Recent History: ${context.recentHistory || 'No history'}

Return a properly formatted JSON response with your evaluation.`;
  }

resolveQuestionGeneration(context: PromptContext): string {
    const { subtopic, global } = this.getTopicConfig(context.topicId);
    const scopedMathTools = this.getScopedMathTools(context, subtopic, global);

    // Format questionInstruction from Evaluator
    const questionInstructionStr = (context as any).questionInstruction
      ? JSON.stringify((context as any).questionInstruction, null, 2)
      : 'No instruction provided (this is an error - Evaluator should provide questionInstruction)';

    // Streamlined Question Agent prompt
    return `${global.QUESTION_AGENT_ROLE}

**Current Topic:** ${subtopic.displayName}

**CRITICAL: Formatting Rules (You MUST Follow These)**
${JSON.stringify(global.FORMATTING_RULES, null, 2)}

**Targeted Instruction from Evaluator:**
${questionInstructionStr}

**Available Visual Tools (Section-Scoped):**
${JSON.stringify(scopedMathTools, null, 2)}

**What You Must Return:**
${JSON.stringify(global.INTERACTION_PROTOCOL.questionGenerationOutputs, null, 2)}

**How to Execute the Instruction:**

1. **Read the questionInstruction fields:**
   - targetSection: The section being tested
   - targetConcept: Specific skill to test
   - difficulty: foundational | intermediate | advanced
   - focusObjectives: Section's learning objectives (for context)
   - relevantFormulas: ONLY formulas for this question
   - conceptGaps: Student's struggles (if any)
   - sampleProblems: Example problems as templates (if provided)
   - questionConstraints: Parameters to control generation (if provided)

2. **Generate the question:**

   a) **If sampleProblems provided:**
      - Study their structure, complexity, and approach
      - Generate NEW question with similar:
        * Problem structure and steps
        * Complexity level
        * Context type (real-world vs abstract)
      - Change: numbers, specific context, variable names

   b) **If no sampleProblems:**
      - Create question testing targetConcept
      - Match difficulty level:
        * Foundational: Identification, recognition
        * Intermediate: Calculations, applying formulas
        * Advanced: Word problems, multi-step scenarios
      - Use ONLY relevantFormulas provided

3. **Add visual tool if helpful:**
   - Check Available Visual Tools above
   - Common for triangle/geometry questions
   - Use format: {toolName: "technical_key", parameters: {...}, caption: "..."}

4. **Create speech transition:**
   - Brief acknowledgment (1-2 sentences)
   - PLAIN TEXT only (no markdown, no LaTeX, no hyphens in acronyms)
   - Example: "Great work! Let's try another one."

**Context:**
- Evaluator's Reasoning: ${context.evaluatorReasoning || 'No reasoning provided'}
- Recent History: ${context.recentHistory || 'No history'}

**Example Response:**
{
  "speech": {
    "text": "Excellent! Here's your next challenge.",
    "emotion": "encouraging"
  },
  "display": {
    "content": "In this right triangle, the angle is 35° and the hypotenuse is 10 cm. Find the opposite side length. Round to 1 decimal place.",
    "showAfterSpeech": true,
    "type": "question"
  },
  "mathTool": {
    "toolName": "rightTriangle",
    "parameters": {
      "angle": 35,
      "hypotenuse": "10 cm",
      "opposite": "x",
      "adjacent": "",
      "highlightSide": "opposite",
      "showAngleMark": true,
      "showRightAngle": true,
      "showSideTypeLabels": false
    },
    "caption": "Find the opposite side x."
  }
}

**Critical Rules:**
1. Use ONLY information in questionInstruction
2. speech.text must be PLAIN TEXT (TTS-compatible)
3. display.content can use markdown and LaTeX
4. Return JSON only

Generate your question now:`;
  }

  getTopicScoringConfig(topicId: TrigonometryTopicId | CircleGeometryTopicId | QuadraticEquationsTopicId | string) {
    // AI-First approach: No rigid scoring config
    // Return progression model instead
    const { global } = this.getTopicConfig(topicId);
    return global.PROGRESSION_MODEL;
  }

  getSolutionStepsForProblemType(_config: SubtopicConfig, _problemType: number): SolutionStep[] | null {
    // AI-First approach: No rigid solution steps
    // AI generates solutions dynamically based on learning objectives
    console.warn('getSolutionStepsForProblemType is deprecated in AI-First approach');
    return null;
  }

  resolveVisualizationExtraction(context: PromptContext): string {
    const { subtopic } = this.getTopicConfig(context.topicId);

    return `You are a specialized AI agent that extracts mathematical data from problems for visualization purposes.

TOPIC: ${subtopic.topicName}
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

  resolveSolutionAgent(context: PromptContext): string {
    const { subtopic, global } = this.getTopicConfig(context.topicId);
    const scopedMathTools = this.getScopedMathTools(context, subtopic, global);

    // Format solutionInstruction from Evaluator
    const solutionInstructionStr = (context as any).solutionInstruction
      ? JSON.stringify((context as any).solutionInstruction, null, 2)
      : 'No instruction provided (this is an error - Evaluator should provide solutionInstruction)';

    // Streamlined Solution Agent prompt
    return `${global.SOLUTION_AGENT_ROLE}

**Current Topic:** ${subtopic.displayName}

**CRITICAL: Formatting Rules (You MUST Follow These)**
${JSON.stringify(global.FORMATTING_RULES, null, 2)}

**Targeted Instruction from Evaluator:**
${solutionInstructionStr}

**Available Visual Tools (Section-Scoped):**
${JSON.stringify(scopedMathTools, null, 2)}

**What You Must Return:**
${JSON.stringify(global.INTERACTION_PROTOCOL.solutionOutputs, null, 2)}

**How to Execute the Instruction:**

1. **Read the solutionInstruction fields:**
   - problemText: The exact problem to solve
   - studentAttempt: What the student tried
   - explanationFocus: Core concept to explain
   - relevantFormulas: ONLY formulas for this solution
   - relevantConcepts: Specific concepts from learning objectives
   - explanationDepth: How detailed to make it
   - studentStrugglePoint: What's confusing the student

2. **Generate the solution:**
   - Complete step-by-step walkthrough
   - Focus on explanationFocus concept
   - Address studentStrugglePoint directly
   - Show WHY studentAttempt was incorrect
   - Use ONLY relevantFormulas and relevantConcepts

3. **Format the response:**

   a) **Speech (1-2 sentences):**
      - PLAIN TEXT only (no markdown, no LaTeX, no hyphens)
      - Supportive tone
      - Example: "Let me walk you through this step by step. Take a look and ask if you have questions."

   b) **Display (complete solution):**
      - Use markdown formatting (headings, bold, lists)
      - Use LaTeX for math: $\\sin(\\theta) = \\frac{O}{H}$
      - Clear step numbers
      - Explain the "why" not just "what"

   c) **Visual tool (if helpful):**
      - Use for showing triangle configurations
      - Format: {toolName: "technical_key", parameters: {...}, caption: "..."}

**Context:**
- Evaluator's Reasoning: ${context.evaluatorReasoning || 'No reasoning provided'}

**Example Response:**
{
  "speech": {
    "text": "Let me walk you through this step by step. Take a look at the solution and let me know if you have any questions.",
    "emotion": "supportive"
  },
  "display": {
    "content": "### Step 1: Identify What We Know

Given:
- Angle = 35°
- Hypotenuse = 10 cm
- Find: Opposite side

### Step 2: Choose the Right Ratio

We need **sine** because we have:
- The angle (35°)
- The hypotenuse (10 cm)
- Looking for opposite

**SOH**: $\\sin(\\theta) = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$

### Step 3: Set Up the Equation

$\\sin(35°) = \\frac{x}{10}$

### Step 4: Solve for x

$x = 10 \\times \\sin(35°)$
$x = 10 \\times 0.574$
$x = 5.7$ cm

**Answer:** The opposite side is 5.7 cm.",
    "showAfterSpeech": true,
    "type": "solution"
  },
  "mathTool": {
    "toolName": "rightTriangle",
    "parameters": {
      "angle": 35,
      "hypotenuse": "10",
      "opposite": "5.7",
      "adjacent": "",
      "highlightSide": "opposite",
      "showAngleMark": true,
      "showRightAngle": true,
      "showSideTypeLabels": true
    },
    "caption": "The completed triangle with all values."
  }
}

**Critical Rules:**
1. Use ONLY information in solutionInstruction
2. speech.text must be PLAIN TEXT (TTS-compatible)
3. display.content uses markdown and LaTeX
4. Address the specific studentStrugglePoint
5. Return JSON only

Generate your solution now:`;
  }

  resolvePracticeBatch(context: PromptContext): string {
    const { subtopic, global } = this.getTopicConfig(context.topicId);
    const problemType = context.currentProblemType || 1;
    const count = context.count || 3;
    const difficultyLevel = problemType === 1 ? 'foundational' : problemType === 2 ? 'intermediate' : 'advanced';

    // Build context preferences string
    let contextPreferences = '';
    if (context.userPreferences && context.userPreferences.length > 0) {
      contextPreferences = `\nPrefer contexts related to: ${context.userPreferences.join(', ')}`;
    }
    if (context.excludeContexts && context.excludeContexts.length > 0) {
      contextPreferences += `\nAvoid using these contexts (used recently): ${context.excludeContexts.join(', ')}`;
    }

    // AI-First approach: Generate problems based on learning objectives
    return `${global.TUTOR_ROLE}

**Current Topic: ${subtopic.displayName}**
${subtopic.topicName}

**Learning Objectives:**
${subtopic.learningObjectives}

**Key Formulas:**
${subtopic.keyFormulas}

**Your Task:**
Generate ${count} practice problems at the ${difficultyLevel} difficulty level that align with the learning objectives.
${contextPreferences}

Return a properly formatted JSON response with an array of problems, each containing:
- problemText: The question text
- correctAnswer: The correct answer
- context: Brief context description (e.g., "triangle-angles", "building-height")
- solutionData: Optional pre-generated solution with stages and mathSummary`;
  }

  resolvePracticeAgent(context: PromptContext): string {
    const { subtopic, global } = this.getTopicConfig(context.topicId);
    const currentProblem = context.currentProblem || '';
    const correctAnswer = context.correctAnswer || '';
    const studentResponse = context.studentResponse || '';
    const hintsGiven = context.hintsGivenCount || 0;
    const attempts = context.attemptsCount || 0;
    const recentHistory = context.recentHistory || 'No previous conversation';

    // AI-First approach: Use TUTOR_ROLE + INTERACTION_PROTOCOL
    return `${global.TUTOR_ROLE}

**Current Topic: ${subtopic.displayName}**
${subtopic.topicName}

**Learning Objectives:**
${subtopic.learningObjectives}

**Interaction Protocol - What You Must Return:**
${JSON.stringify(global.INTERACTION_PROTOCOL.outputs, null, 2)}

**Current Problem:**
${currentProblem}

**Correct Answer:**
${correctAnswer}

**Student Response:**
${studentResponse}

**Context:**
- Hints Given: ${hintsGiven}
- Attempts Made: ${attempts}
- Recent History: ${recentHistory}

**Your Task:**
Evaluate the student's response to this practice problem. Determine if it's correct, partially correct, or incorrect. Provide appropriate feedback following the Socratic approach. Return a properly formatted JSON response following the output protocol.`;
  }
}

// Export singleton instance
export const promptResolver = new PromptResolver();