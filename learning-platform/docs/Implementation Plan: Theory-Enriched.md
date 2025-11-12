Implementation Plan: Theory-Enriched Initial Greetings

 Overview

 Modify the initial greeting generation prompt to include theory/background before the first problem. This affects the pre-generation workflow using the existing scripts.

 ---
 Current Flow (What Exists)

 1. Script: scripts/generateAISamples.ts
   - Calls aiService.generateInitialGreetingWithProblem(topicId) for each topic
   - Saves to src/data/initialGreetingsCache-ai-generated.ts
 2. Service: BaseAIService.generateInitialGreetingWithProblem()
   - Calls promptResolver.resolveInitialGreetingWithProblem({ topicId })
 3. Prompt Resolver: newPromptResolver.ts:365-411
   - Currently: "Greet the student + generate first problem"
   - NO theory introduction
 4. Script: scripts/generateInitialAudio.ts
   - Reads cache and generates MP3 files using Google Cloud TTS
 5. Runtime: ChatInterface loads from cache (fast, no AI calls)

 ---
 What Changes

 File 1: src/prompts/newPromptResolver.ts

 Function: resolveInitialGreetingWithProblem() (lines 365-411)

 Current Prompt Structure:
 .addTask(`Greet the student encouragingly and introduce ${subtopic.topicName}. 
          Then generate the first introductory problem on ${firstSection.title}`)

 New Prompt Structure:
 // Line 366: Access teaching template
 const { subtopic, global } = this.getTopicConfig(context.topicId);
 const theoryContent = subtopic.teachingTemplate; // 800-1000 word template

 // Line 378-382: Add theory to context
 .addContext({
   topic: subtopic.displayName,
   topicName: subtopic.topicName,
   theoryContent: theoryContent // NEW: Include teaching template
 })

 // Line 385: Enhanced task with theory requirement
 .addTask(`
 1. Start with a warm greeting
 2. Provide a BRIEF theory introduction (2-3 paragraphs) covering:
    - What the topic is (definition/concept)
    - Why it matters (real-world application)
    - Key formulas or rules (if applicable)
    - Core concepts students will learn
 3. Transition smoothly to practice
 4. Present the first introductory problem on ${firstSection.title}

 Use the provided theory content as reference but condense it to 2-3 paragraphs maximum.
 `)

 // Lines 387-402: Update output schema expectations
 .addOutputSchema({
   speech: {
     text: "string - spoken greeting + theory overview + problem intro (plain text)",
     emotion: "warm | encouraging | excited"
   },
   display: {
     content: `string - formatted as:
     
     # Introduction to {Topic}
     
     {2-3 paragraphs of theory with key concepts, formulas}
     
     ---
     
     **Your First Problem:**
     
     {problem statement}
     `,
     showAfterSpeech: true
   },
   mathTool: { ... }
 })

 // Add instruction for length control
 .addSection("IMPORTANT - BREVITY:", `
 Theory introduction must be:
 - 2-3 paragraphs maximum
 - Focus on KEY concepts only
 - Include essential formulas/rules
 - Motivating and encouraging tone
 - Smooth transition to problem
 `)

 ---
 File 2: src/prompts/newPromptResolver.ts (Batch Version)

 Function: resolveInitialGreetingWithProblemBatch() (lines ~413+)

 Changes: Apply the same modifications to the batch generation prompt for consistency.

 ---
 Files to Modify

 1. ✏️ src/prompts/newPromptResolver.ts
   - Line 366: Already accesses subtopic config (has teachingTemplate field)
   - Line 378-382: Add theoryContent to context
   - Line 385: Replace task with theory-enriched version
   - Line 387-402: Update output schema documentation
   - Line 409: Add brevity instruction section
   - Line 413+: Update batch version similarly
 2. 📖 scripts/generateAISamples.ts (NO CHANGES)
   - Already calls the correct method
   - Will automatically use new prompt
 3. 📖 scripts/generateInitialAudio.ts (NO CHANGES)
   - Will work with longer speech text
   - TTS handles variable length automatically

 ---
 Execution Workflow

 Phase 1: Modify Prompt (Code Changes)

 1. Update resolveInitialGreetingWithProblem() with theory context
 2. Update batch version for consistency
 3. Test prompt with a single topic manually (optional)

 Phase 2: Regenerate Greetings

 # Option A: Regenerate ALL subtopics (150+ topics)
 npm run generate-ai-samples

 # Option B: Test with one topic first
 npm run generate-ai-samples -- --topic=s3-math-trigonometry

 # Option C: Regenerate by subject area
 npm run generate-ai-samples -- --topic=s3-math
 npm run generate-ai-samples -- --topic=s4-math

 Output: src/data/initialGreetingsCache-ai-generated.ts

 Phase 3: Review & Curate

 1. Check initialGreetingsCache-ai-generated.ts
 2. Verify theory quality:
   - ✅ 2-3 paragraphs (not too long)
   - ✅ Key concepts covered
   - ✅ Smooth transition to problem
   - ✅ Accurate formulas/definitions
 3. Copy desired greetings to src/data/initialGreetingsCache.ts (production cache)
 4. Edit/refine as needed

 Phase 4: Generate Audio

 # Generate MP3 files for new/updated greetings
 npm run generate-initial-audio

 Notes:
 - Only generates missing audio files (skips existing ones)
 - Longer speech = larger MP3 files (expected)
 - Uses Google Cloud Chirp-3 HD TTS
 - Output: public/assets/audio/initial-greetings/{topicId}.mp3

 Phase 5: Test Runtime

 1. Start dev server: npm run dev
 2. Navigate to a subtopic (fresh start)
 3. Verify:
   - ✅ Greeting includes theory introduction
   - ✅ Audio plays correctly (longer duration)
   - ✅ Display shows formatted theory + problem
   - ✅ Smooth user experience

 ---
 Example Output Comparison

 Before (Current)

 Speech:
 Great to see you! Let's dive into basic trigonometric ratios.
 I've prepared your first problem.

 Display:
 In right triangle ABC, angle C is 90°, angle A is 30°,
 and the hypotenuse is 10 cm. Find the length of the side
 opposite to angle A.

 After (New with Theory)

 Speech:
 Welcome! Today we're exploring trigonometric ratios - special
 relationships in right-angled triangles. These ratios help us
 find unknown sides and angles, and they're used everywhere from
 architecture to navigation. The three fundamental ratios are
 sine, cosine, and tangent. Sine equals opposite over hypotenuse,
 cosine equals adjacent over hypotenuse, and tangent equals
 opposite over adjacent. We remember this with S-O-H C-A-H T-O-A.
 Now let's test your understanding with a problem.

 Display:
 # Introduction to Trigonometric Ratios

 Trigonometric ratios are fundamental relationships in right-angled
 triangles that connect angles to side lengths. These powerful tools
 allow us to calculate unknown measurements and are essential in fields
 like engineering, physics, navigation, and architecture.

 **The Three Primary Ratios:**
 - **Sine (sin θ)** = Opposite / Hypotenuse
 - **Cosine (cos θ)** = Adjacent / Hypotenuse
 - **Tangent (tan θ)** = Opposite / Adjacent

 💡 **Memory Aid:** SOH-CAH-TOA helps you remember which sides go where!

 ---

 **Your First Problem:**

 In right triangle ABC, angle C is 90°, angle A is 30°, and the
 hypotenuse is 10 cm. Find the length of the side opposite to angle A.

 ---
 Edge Cases & Considerations

 1. Missing Teaching Template

 Issue: Some subtopics may not have teachingTemplate populated

 Solution:
 const theoryContent = subtopic.teachingTemplate ||
   `Learning objectives: ${subtopic.learningObjectives}`;
 Fallback to learning objectives if template missing.

 2. Very Long Templates

 Issue: Some templates may be >1000 words

 Solution: Prompt explicitly instructs "condense to 2-3 paragraphs maximum"

 3. TTS Audio Duration

 Issue: Longer speech = longer audio files

 Impact:
 - Current greetings: ~10-15 seconds
 - New greetings: ~30-45 seconds
 - Still acceptable for initial load

 Mitigation: Add loading indicator during audio playback

 4. Display Formatting

 Issue: Markdown formatting in display content

 Status: Already supported! MessageBubble uses MathText component which renders markdown

 5. Batch Generation Consistency

 Issue: Ensure batch method uses same prompt structure

 Solution: Update batch method similarly (lines 413+)

 ---
 Success Criteria

 ✅ Prompt includes theoryContent from subtopic.teachingTemplate✅ Generated greetings have 2-3 paragraph theory introduction✅ Theory covers: definition, real-world use, key formulas,
 concepts✅ Smooth transition from theory to problem✅ Audio generation works with longer speech✅ Display formatting renders correctly (markdown)✅ Works across all subtopics (with/without
 templates)✅ No runtime changes needed (uses cache)

 ---
 Estimated Effort

 Code Changes: 1-2 hours
 - Modify resolveInitialGreetingWithProblem()
 - Test with sample topics
 - Update batch version

 Content Generation: 2-4 hours
 - Run generate-ai-samples (batched, so faster)
 - Review quality of 150+ greetings
 - Curate and refine

 Audio Generation: 1-2 hours
 - Run generate-initial-audio
 - Verify audio quality
 - Test file sizes

 Testing: 1 hour
 - Test runtime flow
 - Verify different topics
 - Check edge cases

 Total: 1 day (with batch processing, mostly automated)

 ---
 Benefits

 🎓 Educational: Students learn theory before practice⚡ Performance: No runtime impact (pre-generated)🎯 Scalable: Works across all 150+ subtopics🔄 Maintainable: Uses existing
 teachingTemplate infrastructure🎨 Flexible: Can regenerate individual topics as needed