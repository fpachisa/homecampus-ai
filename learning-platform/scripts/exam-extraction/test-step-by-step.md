# Step-by-Step Testing: Claude vs Gemini

Test the extraction pipeline with both AI providers to compare quality and performance.

## Setup

```bash
cd /Users/farhat/Documents/AI\ Systems/AITutor/aicampus/learning-platform/scripts/exam-extraction

# Ensure both API keys are set
export VITE_CLAUDE_API_KEY="your-claude-key"
export VITE_GEMINI_API_KEY="your-gemini-key"
```

## Test Files

PDF: `../../public/curriculum-content/s3-math-exponential-logarithm-exam-practice.pdf`

---

## STEP 1: Extract Questions (Both Providers)

### 1a. Extract with Claude

```bash
AI_PROVIDER=anthropic node extract-exam-questions.js \
  ../../public/curriculum-content/s3-math-exponential-logarithm-exam-practice.pdf \
  ./output/claude-1-raw.json
```

### 1b. Extract with Gemini

```bash
AI_PROVIDER=gemini node extract-exam-questions.js \
  ../../public/curriculum-content/s3-math-exponential-logarithm-exam-practice.pdf \
  ./output/gemini-1-raw.json
```

### Compare extraction results:

```bash
# Count questions
echo "Claude questions: $(cat ./output/claude-1-raw.json | grep -c '\"question\":' )"
echo "Gemini questions: $(cat ./output/gemini-1-raw.json | grep -c '\"question\":' )"

# Count parts
echo "Claude parts: $(cat ./output/claude-1-raw.json | grep -c '\"label\":' )"
echo "Gemini parts: $(cat ./output/gemini-1-raw.json | grep -c '\"label\":' )"

# View first question from each
echo "\n=== CLAUDE FIRST QUESTION ==="
cat ./output/claude-1-raw.json | jq '.questions[0]' | head -20

echo "\n=== GEMINI FIRST QUESTION ==="
cat ./output/gemini-1-raw.json | jq '.questions[0]' | head -20
```

---

## STEP 2: Filter Questions (Both Providers)

### 2a. Filter with Claude

```bash
AI_PROVIDER=anthropic node filter-questions.js \
  ./output/claude-1-raw.json \
  ./output/claude-2-filtered.json \
  ./output/claude-2-removed.log
```

### 2b. Filter with Gemini

```bash
AI_PROVIDER=gemini node filter-questions.js \
  ./output/gemini-1-raw.json \
  ./output/gemini-2-filtered.json \
  ./output/gemini-2-removed.log
```

### Compare filtering results:

```bash
# Compare what was removed
echo "=== CLAUDE REMOVED ==="
cat ./output/claude-2-removed.log | grep "Parts removed:"

echo "\n=== GEMINI REMOVED ==="
cat ./output/gemini-2-removed.log | grep "Parts removed:"

# Review removal reasoning
echo "\n=== CLAUDE REMOVAL REASONS ==="
cat ./output/claude-2-removed.log | grep "Reason:" | head -5

echo "\n=== GEMINI REMOVAL REASONS ==="
cat ./output/gemini-2-removed.log | grep "Reason:" | head -5
```

---

## STEP 3: Combine Questions (No AI)

```bash
# Claude path
node combine-questions.js \
  ./output/claude-2-filtered.json \
  ./output/claude-3-combined.json

# Gemini path
node combine-questions.js \
  ./output/gemini-2-filtered.json \
  ./output/gemini-3-combined.json
```

### Compare combination:

```bash
echo "Claude combined nodes: $(cat ./output/claude-3-combined.json | grep -c '\"question\":' )"
echo "Gemini combined nodes: $(cat ./output/gemini-3-combined.json | grep -c '\"question\":' )"
```

---

## STEP 4: Generate Solutions (Both Providers)

**⚠️ This is the most time-consuming step (2-3 minutes each)**

### 4a. Generate with Claude

```bash
AI_PROVIDER=anthropic node generate-solutions.js \
  ./output/claude-3-combined.json \
  ./output/claude-4-with-solutions.json
```

### 4b. Generate with Gemini

```bash
AI_PROVIDER=gemini node generate-solutions.js \
  ./output/gemini-3-combined.json \
  ./output/gemini-4-with-solutions.json
```

### Compare solution quality:

```bash
# Sample Claude solution
echo "=== CLAUDE SAMPLE SOLUTION ==="
cat ./output/claude-4-with-solutions.json | jq '.questions[0].parts[0] | {text, avatarIntro, steps: .stepByStepGuideline[0:3]}'

# Sample Gemini solution
echo "\n=== GEMINI SAMPLE SOLUTION ==="
cat ./output/gemini-4-with-solutions.json | jq '.questions[0].parts[0] | {text, avatarIntro, steps: .stepByStepGuideline[0:3]}'
```

---

## STEP 5: Format to YAML (No AI)

```bash
# Claude path
node format-yaml.js \
  ./output/claude-4-with-solutions.json \
  ./output/claude-5-exam-practice.yaml \
  s3-math-exponential-logarithms \
  29

# Gemini path
node format-yaml.js \
  ./output/gemini-4-with-solutions.json \
  ./output/gemini-5-exam-practice.yaml \
  s3-math-exponential-logarithms \
  29
```

### Compare final YAML:

```bash
echo "Claude YAML size: $(wc -l < ./output/claude-5-exam-practice.yaml) lines"
echo "Gemini YAML size: $(wc -l < ./output/gemini-5-exam-practice.yaml) lines"

# View first node from each
echo "\n=== CLAUDE FIRST NODE ==="
head -50 ./output/claude-5-exam-practice.yaml

echo "\n=== GEMINI FIRST NODE ==="
head -50 ./output/gemini-5-exam-practice.yaml
```

---

## Quality Comparison Checklist

After running both pipelines, evaluate:

### ✓ Extraction Accuracy (Step 1)
- [ ] Did both extract the same number of questions?
- [ ] Are question texts accurate (check PDF)?
- [ ] Is LaTeX formatting correct?
- [ ] Are answers extracted correctly?

### ✓ Filtering Intelligence (Step 2)
- [ ] Did both correctly identify graph-drawing questions?
- [ ] Were "plot of land" type questions kept?
- [ ] Are removal reasons logical?
- [ ] Any false positives (good questions removed)?

### ✓ Solution Quality (Step 4)
- [ ] Are solutions pedagogically sound?
- [ ] Do they explain WHY, not just WHAT?
- [ ] Is the step count appropriate (5-10 steps)?
- [ ] Are avatarIntro messages engaging?
- [ ] Is mathematical notation correct?

### ✓ Performance
- [ ] Time: Claude vs Gemini for each step
- [ ] Cost: Token usage comparison
- [ ] Reliability: Any API errors?

---

## Quick One-Liner Comparison

Run both and time them:

```bash
# Claude full pipeline
time (AI_PROVIDER=anthropic ./process-topic.sh \
  ../../public/curriculum-content/s3-math-exponential-logarithm-exam-practice.pdf \
  s3-math-exponential-logarithms-claude \
  29)

# Gemini full pipeline
time (AI_PROVIDER=gemini ./process-topic.sh \
  ../../public/curriculum-content/s3-math-exponential-logarithm-exam-practice.pdf \
  s3-math-exponential-logarithms-gemini \
  29)
```

---

## Recommendation Template

After testing, document findings:

```
## EXTRACTION QUALITY COMPARISON

**Winner: [Claude/Gemini/Tie]**

Extraction (Step 1):
- Accuracy: [Claude/Gemini better/same]
- LaTeX: [Claude/Gemini better/same]
- Notes: [specific observations]

Filtering (Step 2):
- Intelligence: [Claude/Gemini better/same]
- False positives: [count]
- Notes: [specific observations]

Solutions (Step 4):
- Pedagogical quality: [Claude/Gemini better/same]
- Explanation depth: [Claude/Gemini better/same]
- Notes: [specific observations]

Performance:
- Claude total time: [X minutes]
- Gemini total time: [Y minutes]
- Cost estimate: [based on token usage]

**Recommended provider for production: [Claude/Gemini]**
**Reason: [brief explanation]**
```
