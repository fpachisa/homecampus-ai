  │ 5-Agent Architecture Refactoring Plan                                                                                                                                     │
     │                                                                                                                                                                           │
     │ Overview                                                                                                                                                                  │
     │                                                                                                                                                                           │
     │ Transform the current 3-agent system into a specialized 5-agent system where each pedagogical action has its own dedicated agent with unique prompts, tone, and strategy. │
     │                                                                                                                                                                           │
     │ Architectural Changes                                                                                                                                                     │
     │                                                                                                                                                                           │
     │ Current State (3 Agents)                                                                                                                                                  │
     │                                                                                                                                                                           │
     │ - Evaluator: Decides action                                                                                                                                               │
     │ - Tutor: Handles GIVE_HINT + CELEBRATE (mixed responsibility)                                                                                                             │
     │ - Question: Generates NEW_PROBLEM                                                                                                                                         │
     │ - Solution: Generates GIVE_SOLUTION                                                                                                                                       │
     │                                                                                                                                                                           │
     │ New State (5 Specialized Agents)                                                                                                                                          │
     │                                                                                                                                                                           │
     │ - Evaluator: Decides action (now supports 5 actions)                                                                                                                      │
     │ - Concept Clarifier: CLARIFY_CONCEPT - direct explanations, not counted as hints                                                                                          │
     │ - Hint Agent: GIVE_HINT only - Socratic scaffolding                                                                                                                       │
     │ - Celebration Agent: CELEBRATE only - final topic celebration with stats                                                                                                  │
     │ - Question Agent: NEW_PROBLEM (unchanged)                                                                                                                                 │
     │ - Solution Agent: GIVE_SOLUTION (unchanged)                                                                                                                               │
     │                                                                                                                                                                           │
     │ Implementation Steps                                                                                                                                                      │
     │                                                                                                                                                                           │
     │ Phase 1: Core Type Updates                                                                                                                                                │
     │                                                                                                                                                                           │
     │ 1. Update EvaluatorOutput type (src/prompt-library/types/agents.ts)                                                                                                       │
     │   - Add 'CLARIFY_CONCEPT' to action enum                                                                                                                                  │
     │   - Keep schema simple (reasoning-based)                                                                                                                                  │
     │ 2. Add agent output interfaces (src/prompt-library/types/agents.ts)                                                                                                       │
     │   - ConceptClarifierOutput                                                                                                                                                │
     │   - HintOutput (copy from existing TutorOutput)                                                                                                                           │
     │   - CelebrationOutput (copy from existing TutorOutput)                                                                                                                    │
     │                                                                                                                                                                           │
     │ Phase 2: Create New Agent Templates                                                                                                                                       │
     │                                                                                                                                                                           │
     │ 3. Create Concept Clarifier Agent (src/prompt-library/core/agents/conceptClarifier.ts)                                                                                    │
     │   - Tone: Direct, explanatory (not Socratic)                                                                                                                              │
     │   - Purpose: Answer "why" and "what" questions                                                                                                                            │
     │   - Flow: Clarify → tie back to problem → ask if ready or have more questions                                                                                             │
     │   - Critical: NOT counted as hint, allowed even after correct answers                                                                                                     │
     │ 4. Create Hint Agent (src/prompt-library/core/agents/hintAgent.ts)                                                                                                        │
     │   - Extract from: Current Tutor agent (GIVE_HINT cases only)                                                                                                              │
     │   - Tone: Socratic, question-based scaffolding                                                                                                                            │
     │   - Strategy: Use existing HINT_PROGRESSION (gentle → specific → detailed)                                                                                                │
     │ 5. Create Celebration Agent (src/prompt-library/core/agents/celebrationAgent.ts)                                                                                          │
     │   - Extract from: Current Tutor agent (CELEBRATE cases only)                                                                                                              │
     │   - Tone: Enthusiastic, reflective                                                                                                                                        │
     │   - Content: Summarize learning + show stats (time, problems solved, sections mastered)                                                                                   │
     │   - Trigger: Only when ALL sections mastered (topic completion)                                                                                                           │
     │                                                                                                                                                                           │
     │ Phase 3: Update Evaluator                                                                                                                                                 │
     │                                                                                                                                                                           │
     │ 6. Update Evaluator Decision Matrix (src/prompt-library/core/agents/evaluator.ts)                                                                                         │
     │   - Already has CLARIFY_CONCEPT defined (lines 143-147) ✓                                                                                                                 │
     │   - Add priority rules: CLARIFY_CONCEPT takes precedence even after correct answer                                                                                        │
     │   - Make evaluator more flexible in allowing questions                                                                                                                    │
     │ 7. Update Evaluator Base Template (src/prompt-library/core/agents/evaluator.ts)                                                                                           │
     │   - Update outputSchema to reflect 5 actions                                                                                                                              │
     │   - Add guidance for detecting conceptual questions vs problem attempts                                                                                                   │
     │                                                                                                                                                                           │
     │ Phase 4: Add Prompt Resolver Methods                                                                                                                                      │
     │                                                                                                                                                                           │
     │ 8. Add resolver methods (src/prompts/newPromptResolver.ts)                                                                                                                │
     │   - resolveConceptClarifierAgent() - new                                                                                                                                  │
     │   - resolveHintAgent() - extracted from resolveTutorAgent                                                                                                                 │
     │   - resolveCelebrationAgent() - extracted from resolveTutorAgent                                                                                                          │
     │   - Keep existing: resolveQuestionGeneration(), resolveSolutionAgent()                                                                                                    │
     │                                                                                                                                                                           │
     │ Phase 5: Update BaseAIService                                                                                                                                             │
     │                                                                                                                                                                           │
     │ 9. Split generateTutorResponse (src/services/BaseAIService.ts)                                                                                                            │
     │   - generateConceptClarification() - new method                                                                                                                           │
     │   - generateHint() - extracted, GIVE_HINT only                                                                                                                            │
     │   - generateCelebration() - extracted, CELEBRATE only with stats                                                                                                          │
     │   - Remove or deprecate generateTutorResponse()                                                                                                                           │
     │ 10. Add celebration stats calculation                                                                                                                                     │
     │   - Calculate session duration                                                                                                                                            │
     │   - Count total problems solved                                                                                                                                           │
     │   - Calculate accuracy rate                                                                                                                                               │
     │   - Pass to celebration agent as context                                                                                                                                  │
     │                                                                                                                                                                           │
     │ Phase 6: Update ChatInterface Dispatch Logic                                                                                                                              │
     │                                                                                                                                                                           │
     │ 11. Refactor agent dispatch (src/components/ChatInterface.tsx:1768-1816)                                                                                                  │
     │   - Change from 3-way split to 5-way split                                                                                                                                │
     │   - Add cases:                                                                                                                                                            │
     │       - CLARIFY_CONCEPT → call generateConceptClarification()                                                                                                             │
     │     - GIVE_HINT → call generateHint()                                                                                                                                     │
     │     - CELEBRATE → call generateCelebration() with stats                                                                                                                   │
     │     - Keep: NEW_PROBLEM, GIVE_SOLUTION (unchanged)                                                                                                                        │
     │ 12. Handle CLARIFY_CONCEPT flow (new logic)                                                                                                                               │
     │   - Don't increment hintsUsed counter                                                                                                                                     │
     │   - Tag message with messageType: 'clarification'                                                                                                                         │
     │   - Don't advance problem state                                                                                                                                           │
     │   - Allow clarification even if answerCorrect: true                                                                                                                       │
     │ 13. Update message tagging                                                                                                                                                │
     │   - Add messageType: 'clarification' for concept clarifier                                                                                                                │
     │   - Keep messageType: 'hint' for hints only                                                                                                                               │
     │   - Add messageType: 'celebration' for celebrations                                                                                                                       │
     │                                                                                                                                                                           │
     │ Phase 7: Testing & Edge Cases                                                                                                                                             │
     │                                                                                                                                                                           │
     │ 14. Test CLARIFY_CONCEPT scenarios                                                                                                                                        │
     │   - Student asks concept question with wrong answer                                                                                                                       │
     │   - Student asks concept question with correct answer                                                                                                                     │
     │   - Student asks multiple concept questions in a row                                                                                                                      │
     │   - Verify hints counter NOT incremented                                                                                                                                  │
     │ 15. Test agent separation                                                                                                                                                 │
     │   - Verify each agent has distinct tone                                                                                                                                   │
     │   - Verify Hint Agent stays Socratic                                                                                                                                      │
     │   - Verify Concept Clarifier is direct                                                                                                                                    │
     │   - Verify Celebration includes stats                                                                                                                                     │
     │ 16. Test section progression                                                                                                                                              │
     │   - Verify stats still update correctly                                                                                                                                   │
     │   - Verify section mastery detection unchanged                                                                                                                            │
     │   - Verify celebration triggers at topic completion                                                                                                                       │
     │                                                                                                                                                                           │
     │ Key Design Decisions                                                                                                                                                      │
     │                                                                                                                                                                           │
     │ 1. CLARIFY_CONCEPT Priority                                                                                                                                               │
     │                                                                                                                                                                           │
     │ - Takes precedence over other actions                                                                                                                                     │
     │ - Allowed even after correct answer                                                                                                                                       │
     │ - Flow: Clarify → tie to problem → ask if ready to try or have more questions                                                                                             │
     │                                                                                                                                                                           │
     │ 2. Celebration Trigger                                                                                                                                                    │
     │                                                                                                                                                                           │
     │ - CELEBRATE action = final topic completion only (all sections mastered)                                                                                                  │
     │ - Shows: time spent, problems solved, sections completed, accuracy                                                                                                        │
     │ - NOT per-problem encouragement (that's in NEW_PROBLEM speech)                                                                                                            │
     │                                                                                                                                                                           │
     │ 3. Agent Tone Differentiation                                                                                                                                             │
     │                                                                                                                                                                           │
     │ - Concept Clarifier: Direct explanations with examples                                                                                                                    │
     │ - Hint Agent: Socratic questions and scaffolding                                                                                                                          │
     │ - Celebration Agent: Enthusiastic + reflective + stats                                                                                                                    │
     │                                                                                                                                                                           │
     │ 4. Backward Compatibility                                                                                                                                                 │
     │                                                                                                                                                                           │
     │ - Pre-generated flow (exam prep) may need separate handling                                                                                                               │
     │ - Consider divergence acceptable for pre-gen topics                                                                                                                       │
     │                                                                                                                                                                           │
     │ Files to Modify                                                                                                                                                           │
     │                                                                                                                                                                           │
     │ New Files (3):                                                                                                                                                            │
     │ - src/prompt-library/core/agents/conceptClarifier.ts                                                                                                                      │
     │ - src/prompt-library/core/agents/hintAgent.ts                                                                                                                             │
     │ - src/prompt-library/core/agents/celebrationAgent.ts                                                                                                                      │
     │                                                                                                                                                                           │
     │ Modified Files (5):                                                                                                                                                       │
     │ - src/prompt-library/types/agents.ts (type updates)                                                                                                                       │
     │ - src/prompt-library/core/agents/evaluator.ts (decision matrix)                                                                                                           │
     │ - src/prompts/newPromptResolver.ts (3 new resolvers)                                                                                                                      │
     │ - src/services/BaseAIService.ts (3 new methods)                                                                                                                           │
     │ - src/components/ChatInterface.tsx (dispatch logic)                                                                                                                       │
     │                                                                                                                                                                           │
     │ Expected Impact                                                                                                                                                           │
     │                                                                                                                                                                           │
     │ ✅ Pedagogical Benefits:                                                                                                                                                   │
     │ - Clear separation of teaching strategies                                                                                                                                 │
     │ - Concept clarification doesn't penalize (no hint counter)                                                                                                                │
     │ - More flexible evaluator (allows questions at any time)                                                                                                                  │
     │ - Better celebration experience (stats + reflection)                                                                                                                      │
     │                                                                                                                                                                           │
     │ ✅ Architectural Benefits:                                                                                                                                                 │
     │ - Single Responsibility Principle per agent                                                                                                                               │
     │ - Easier to tune individual agent behavior                                                                                                                                │
     │ - Clear prompt ownership                                                                                                                                                  │
     │ - Simpler testing (one agent = one test suite)                                                                                                                            │
     │                                                                                                                                                                           │
     │ ✅ Maintenance Benefits:                                                                                                                                                   │
     │ - No mixed responsibilities                                                                                                                                               │
     │ - Easy to add new actions (just add new agent)                                                                                                                            │
     │ - Clear documentation per agent role  