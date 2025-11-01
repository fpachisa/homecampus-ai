# Exam Practice Extraction Pipeline

Automated pipeline for extracting exam questions from PDFs and converting them to YAML format for the AI Campus learning platform.

## Overview

This pipeline uses AI (Claude Sonnet 4 / Gemini Flash 2.5) to automatically extract, filter, combine, and format exam questions from PDF files into structured YAML nodes ready for integration into curriculum files.

**✨ NEW: Phase 1 Enhancements (Oct 2025)**
- 🔄 **One-step-at-a-time execution** - Run same command repeatedly, one step per run
- ⚡ **Auto-resume from failures** - Automatically skips completed steps
- ✅ **LaTeX validation** - Catch LaTeX errors automatically before manual review
- 🧮 **Answer calculation** - AI calculates missing answers during solution generation
- 📝 **AI-generated titles** - Descriptive, concept-focused titles instead of truncated text
- 🛡️ **Batch failure handling** - Save partial results, manual fix workflow
- See [PHASE1-ENHANCEMENTS.md](./PHASE1-ENHANCEMENTS.md) for details

### Pipeline Stages

```
PDF Input
    ↓
[1] Extract ALL questions → raw.json
    ↓
[2] AI Filter (context-aware) → filtered.json + removal-log
    ↓
[3] Generate solutions → with-solutions.json
    ↓
[4] Format YAML with smart grouping → exam-practice.yaml
    ↓
Manual validation + integration
```

**Note:** The old combine step has been removed. Smart grouping now happens in Step 4 using `questionGroup` structure to keep questions separate while grouping them into nodes with 4-6 parts.

## Quick Start

### Prerequisites

1. **Node.js 18+** installed
2. **Claude API key** set as environment variable:
   ```bash
   export VITE_CLAUDE_API_KEY="your-api-key-here"
   # OR
   export ANTHROPIC_API_KEY="your-api-key-here"
   ```

### One-Step-At-A-Time Execution ⭐ NEW

The pipeline now runs **one step at a time**. Just run the same command repeatedly until all 4 steps complete:

```bash
cd learning-platform/scripts/exam-extraction

# Run once - does step 1, then stops
./process-topic.sh \
  ../../public/curriculum-content/s3-math-exponential-logarithm-exam-practice.pdf \
  s3-math-exponential-logarithms \
  30

# Run again - does step 2, then stops
./process-topic.sh \
  ../../public/curriculum-content/s3-math-exponential-logarithm-exam-practice.pdf \
  s3-math-exponential-logarithms \
  30

# Run again - does step 3, then stops
# ... continue until step 4 completes
```

**Arguments:**
1. `<pdf-path>`: Path to exam practice PDF
2. `<topic-id>`: Topic identifier (e.g., `s3-math-exponential-logarithms`)
3. `<starting-node-number>`: First node number for exam practice nodes

**How it works:**
- Automatically detects which files already exist
- Skips completed steps
- Runs only the next incomplete step
- Stops after that step with clear instructions
- Idempotent - safe to run multiple times

### Output

All output files are saved to `./output/<topic-id>/`:

| File | Description |
|------|-------------|
| `1-raw-questions.json` | All extracted questions (no filtering) |
| `2-filtered-questions.json` | After intelligent filtering |
| `2-removed-questions.log` | Log of removed question parts |
| `3-with-solutions.json` | With AI-generated solutions |
| `4-exam-practice.yaml` | **Final YAML output with smart grouping** |

---

## Individual Scripts

Each stage can be run independently for testing or debugging.

### Step 1: Extract Questions

Extracts ALL questions from PDF with no filtering.

```bash
node extract-exam-questions.js \
  <pdf-path> \
  <output-json>
```

**Example:**
```bash
node extract-exam-questions.js \
  ../../public/curriculum-content/s3-math-exponential-logarithm-exam-practice.pdf \
  ./output/raw-questions.json
```

**Output:**
```json
{
  "questions": [
    {
      "question": "A temperature T°C at time t hours is modeled by T = 25e^{-0.2t}",
      "parts": [
        {
          "label": "a",
          "text": "Find the initial temperature when t = 0.",
          "answer": "25°C"
        },
        {
          "label": "b",
          "text": "Calculate the temperature after 3 hours.",
          "answer": ""
        }
      ]
    }
  ]
}
```

---

### Step 2: Filter Questions

Intelligently removes graph-drawing questions while keeping "plot of land" type questions.

```bash
node filter-questions.js \
  <input-json> \
  <output-json> \
  <removal-log>
```

**Example:**
```bash
node filter-questions.js \
  ./output/raw-questions.json \
  ./output/filtered-questions.json \
  ./output/removed.log
```

**Filtering Logic:**

✅ **KEEP:**
- "Find the area of a plot of land" (plot = land, not graphing)
- "The sketch shows..." (diagram already provided)
- "Calculate intercepts" (no drawing required)

❌ **REMOVE:**
- "Sketch the graph of f(x) = ..."
- "Draw a diagram to represent..."
- "On the axes, plot the points..."

---

### Step 3: Generate Solutions

AI generates step-by-step solutions, avatarIntro messages, and descriptive titles.

```bash
node generate-solutions.js \
  <input-json> \
  <output-json>
```

**Example:**
```bash
node generate-solutions.js \
  ./output/filtered-questions.json \
  ./output/with-solutions.json
```

**AI Generates:**
- **Title**: Short, concept-focused (3-8 words) - e.g., "Exponential Decay Temperature Model"
- **Answer**: Calculated if missing from PDF
- **avatarIntro**: Brief, supportive introduction (1-2 sentences)
- **stepByStepGuideline**: 5-10 pedagogical steps explaining WHY, not just WHAT

**Solution Style:**
- Explains WHY, not just WHAT
- References formulas and concepts
- Proper LaTeX formatting
- Follows trigonometry.yaml style

---

### Step 4: Format as YAML with Smart Grouping

Converts JSON to YAML with proper structure, grouping questions into nodes with 4-6 parts using `questionGroup` to keep questions separate.

```bash
node format-yaml.js \
  <input-json> \
  <output-yaml> \
  <topic-id> \
  <starting-node-number>
```

**Example:**
```bash
node format-yaml.js \
  ./output/with-solutions.json \
  ./output/exam-practice.yaml \
  s3-math-exponential-logarithms \
  30
```

**Smart Grouping:**
- Questions with ≥4 parts → standalone node
- Questions with <4 parts → grouped with others to reach 4-6 parts per node
- Each question gets unique `questionGroup` (q1a, q1b, q2a, etc.)
- Questions remain separate and contextual even when grouped in same node
- Structure matches trigonometry.yaml pattern

---

## Manual Integration

After pipeline completes:

1. **Review removal log:**
   ```bash
   cat ./output/<topic-id>/2-removed-questions.log
   ```
   Verify graph questions were correctly filtered

2. **Validate YAML:**
   ```bash
   cat ./output/<topic-id>/5-exam-practice.yaml
   ```
   Check LaTeX rendering, structure, solutions

3. **Append to topic file:**
   ```bash
   cat ./output/<topic-id>/5-exam-practice.yaml >> \
     ../../public/curriculum-content/S3/Maths/<topic-id>.yaml
   ```

4. **Test in development:**
   ```bash
   cd ../../
   npm run dev
   ```
   Navigate to topic and attempt exam questions

---

## Processing All 9 Topics

To process all S3 Maths topics in batch:

```bash
#!/bin/bash

# Array of topics with their PDFs and starting nodes
declare -A TOPICS=(
  ["s3-math-exponential-logarithms"]="s3-math-exponential-logarithm-exam-practice.pdf:30"
  ["s3-math-quadratic-equations"]="s3-math-quadratic-equations-exam-practice.pdf:55"
  ["s3-math-coordinate-geometry"]="s3-math-coordinate-geometry-exam-practice.pdf:25"
  # ... add remaining topics
)

for topic in "${!TOPICS[@]}"; do
  IFS=':' read -r pdf start_node <<< "${TOPICS[$topic]}"

  echo "Processing $topic..."
  ./process-topic.sh \
    "../../public/curriculum-content/$pdf" \
    "$topic" \
    "$start_node"
done
```

---

## New Features (Phase 1)

### Automatic Resume from Failures

The pipeline now saves checkpoints after each successful step. If a step fails, simply re-run the same command and it will automatically resume from where it stopped.

**Example:**
```bash
# First run - fails at step 3
./process-topic.sh exam.pdf topic-id 30
# [1/4] Extract ✓
# [2/4] Filter ✓
# [3/4] Generate solutions ❌ (network error)

# Re-run - automatically resumes!
./process-topic.sh exam.pdf topic-id 30
# ╔════════ CHECKPOINT DETECTED - RESUMING ════════╗
# [1/4] ⏭ Skipping (checkpoint)
# [2/4] ⏭ Skipping (checkpoint)
# [3/4] Generate solutions ✓
# [4/4] Format YAML ✓
```

**Benefits:**
- Saves 2-4 minutes per retry
- Saves $0.10-$0.30 in API costs per retry
- Zero manual intervention required

**Manual checkpoint control:**
```bash
# View checkpoint
cat ./output/<topic-id>/.checkpoint.json

# Force fresh run (delete checkpoint)
rm ./output/<topic-id>/.checkpoint.json
```

### LaTeX Validation

All LaTeX expressions are automatically validated using KaTeX before saving YAML. This catches ~80% of LaTeX errors that would otherwise require manual review.

**Example validation output:**
```
=== LATEX VALIDATION ===
❌ Found 2 LaTeX errors:

1. questions[0].parts[1].text
   Expression: $\unknownmacro{x}$
   Error: Undefined control sequence: \unknownmacro
   💡 Suggestion: Check macro spelling

2. stepByStepGuideline[3]
   Expression: $\frac12$
   Error: Expected group after '\frac'
   💡 Suggestion: Try: \frac{1}{2} (add braces)
```

**Standalone validation:**
```bash
# Validate any JSON/YAML file
node validate-latex.js output/topic/4-exam-practice.yaml

# Validate existing curriculum
node validate-latex.js ../../public/curriculum-content/S3/Maths/s3-math-trigonometry.yaml
```

### Answer Calculation

When exam PDFs don't have visible answers, the AI now automatically calculates them during step 3 (solution generation).

**How it works:**
- Extraction (step 1): Extracts answers if visible, otherwise `answer = ""`
- Solution generation (step 3): AI detects empty answers and calculates them
- Format (step 4): Includes calculated answers in final YAML

**Example:**
```
PDF shows question but no answer
  ↓
Step 1: answer = ""
  ↓
Step 3: AI calculates → answer = "$k = 0.470$ (3sf)"
  ↓
Step 4: finalAnswer: "$k = 0.470$ (3sf)"
```

**Benefits:**
- Complete answer coverage for all questions
- Students can self-check their work
- Consistent answer formatting (units, precision)
- Answers validated by step-by-step solution

### AI-Generated Titles

Each question gets a descriptive, concept-focused title generated by AI during step 3.

**Before (truncated text):**
```yaml
title: "Exam Practice: A temperature T°C at time t hours is modeled by T = 25e^{-0...."
```

**After (AI-generated):**
```yaml
title: "Exponential Decay Temperature Model"
```

**Title characteristics:**
- Short (3-8 words)
- Concept-focused, not text truncation
- Describes what skill/topic is being tested
- Professional and searchable

**Examples:**
- "Logarithmic Function Graph Analysis"
- "Compound Interest Calculation"
- "Trigonometric Identities Application"
- "Quadratic Equation Factoring"

### Handling Step 1 JSON Failures

Step 1 (extraction) may fail to parse JSON from the AI response. When this happens:

1. Script saves `1-raw-questions-problem.json` (unparsed AI response)
2. Script saves `1-raw-questions-response.txt` (raw AI text)
3. Script exits with error and instructions

**Fix workflow:**
```bash
# Step 1 fails with JSON parse error
./process-topic.sh exam.pdf topic-id 30

# Output:
# ❌ JSON parsing failed
# Problem file: output/topic-id/1-raw-questions-problem.json
#
# TO FIX:
#   1. Edit the problem JSON file
#   2. Fix JSON syntax errors
#   3. Run the same command again (auto-normalizes)

# Fix the JSON manually
nano output/topic-id/1-raw-questions-problem.json

# Run again - auto-detects problem file and normalizes it
./process-topic.sh exam.pdf topic-id 30

# Output:
# ╔════════════════════════════════════════════════════════════════╗
# ║      STEP 1 PROBLEM FILE DETECTED - NORMALIZING               ║
# ╚════════════════════════════════════════════════════════════════╝
# Running normalization on fixed JSON...
# ✓ Normalization complete!
# Continuing to step 2...
```

The pipeline **automatically runs normalization** when it detects a fixed problem file. The normalization:
- Flattens nested `sub_parts` into the main `parts` array
- Concatenates parent text with sub-part text
- Preserves hierarchy metadata (parentLabel, parentText)

### Handling Batch Failures (Step 3)

Step 3 processes questions in batches. If a batch fails (JSON parse errors), the pipeline:
1. Saves whatever succeeded to `3-with-solutions.json`
2. Saves failed batches to `batch-X-problem.json` files
3. Prints detailed fix instructions
4. Exits with error (prevents moving to step 4)

**Example workflow:**
```bash
# Step 3 runs with 16 questions (4 batches of 4-5 questions each)
./process-topic.sh exam.pdf topic-id 30

# Output:
# Batch 1: FAIL → saved to batch-1-problem.json
# Batch 2: SUCCESS
# Batch 3: FAIL → saved to batch-3-problem.json
# Batch 4: SUCCESS
#
# Partial results: 6/16 questions saved
#
# HOW TO FIX:
#   1. Open batch-1-problem.json and fix JSON errors
#   2. Open batch-3-problem.json and fix JSON errors
#   3. Manually merge fixed questions into 3-with-solutions.json
#   4. Re-run to continue to step 4
```

**Manual fix:**
1. Open each `batch-X-problem.json` in an editor
2. Fix JSON syntax errors (common: unescaped quotes, missing braces)
3. Open `3-with-solutions.json`
4. Copy the `questions` array from each fixed batch file
5. Paste into the main file's `questions` array
6. Verify total count (e.g., 16 questions)
7. Re-run the pipeline → continues to step 4

**Benefits:**
- No data loss - all successful batches saved
- Clear workflow for fixing failed batches
- Prevents incomplete YAML generation
- User has full control over fixes

---

## Configuration

### Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_CLAUDE_API_KEY` | Claude API key (preferred) |
| `ANTHROPIC_API_KEY` | Alternative API key variable |

### Model Configuration

Default: `claude-sonnet-4-20250514`

To change model, edit in scripts:
- `extract-exam-questions.js` (line 47)
- `filter-questions.js` (line 36)
- `generate-solutions.js` (line 73)

---

## Troubleshooting

### Error: "Cannot find module '@anthropic-ai/sdk'"

```bash
cd learning-platform/scripts/exam-extraction
npm install
```

### Error: "API key not found"

```bash
export VITE_CLAUDE_API_KEY="sk-ant-..."
# Verify:
echo $VITE_CLAUDE_API_KEY
```

### Error: "Invalid JSON response"

AI sometimes adds extra text. The scripts attempt to extract JSON automatically, but if it fails:
1. Check `error.message` for details
2. Review API response in error logs
3. Try re-running the specific step

### LaTeX Rendering Issues

- Pipeline uses single backslash: `$\\theta$`
- YAML preserves this correctly
- Test rendering in dev environment
- If issues persist, manually review YAML file

---

## Estimated Times

Per topic (8-10 questions):

| Stage | Duration |
|-------|----------|
| Extract | 1-2 min |
| Filter | 30-60 sec |
| Generate Solutions | 2-3 min |
| Format YAML (with grouping) | <5 sec |
| **Total** | **~4-6 min** |

Human validation: ~1 hour per topic

---

## Quality Checks

Before integration:

- [ ] All exam nodes have 4-6 parts
- [ ] LaTeX renders correctly
- [ ] Answers are present and correct
- [ ] Solutions are pedagogically sound
- [ ] Graph questions properly filtered
- [ ] "Plot of land" questions retained
- [ ] Node numbering is sequential

---

## Future Improvements

1. **Diagram extraction**: Auto-generate SVG diagrams from PDF
2. **Answer extraction**: Better OCR for answer keys
3. **Parallel processing**: Process multiple topics simultaneously
4. **Web interface**: GUI for validation and editing
5. **Auto-integration**: Directly append to YAML files

---

## Support

For issues or questions:
1. Check troubleshooting section above
2. Review error logs in output directory
3. Test individual stages to isolate problem
4. Verify API key and model access

---

## License

Internal tool for AI Campus curriculum development.
