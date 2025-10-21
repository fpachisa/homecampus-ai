# Exemplar-Based Question Generation System

This directory contains tools for generating practice questions using AI based on exemplar templates.

## Overview

Instead of manually writing hundreds of practice questions or having AI generate them unpredictably at runtime, this system:

1. **Uses exemplar templates** - One JSON file per topic with example problems from textbooks
2. **Generates variations** - Python script calls Claude API to create 5 variations per node
3. **Outputs YAML** - Complete curriculum file ready for deployment

## Files

```
curriculum-content/
├── S3/Maths/
│   ├── s3-math-sets-venn-diagrams.yaml              # Output YAML file
│   └── s3-math-sets-venn-diagrams-exemplars.json    # Exemplar templates
└── scripts/
    ├── generate_questions.py                         # Generation script
    └── README.md                                     # This file
```

## Setup

### 1. Install Dependencies

```bash
pip install anthropic pyyaml
```

### 2. Set API Key

```bash
export CLAUDE_API_KEY='your-claude-api-key-here'
# OR
export VITE_CLAUDE_API_KEY='your-claude-api-key-here'
```

## Usage

### Test Mode (First 3 Nodes)

Generate questions for first 3 nodes only to test:

```bash
cd curriculum-content/scripts
python generate_questions.py --test
```

Output: `../S3/Maths/s3-math-sets-venn-diagrams-TEST.yaml`

### Generate Specific Nodes

```bash
python generate_questions.py --nodes sets-node-1,sets-node-2,sets-node-5
```

### Generate All Nodes (100 questions)

```bash
python generate_questions.py --nodes all
```

Output: `../S3/Maths/s3-math-sets-venn-diagrams.yaml`

### Custom Question Count

```bash
python generate_questions.py --nodes all --count 10  # 10 questions per node
```

## Exemplar File Structure

```json
{
  "sets-node-1": {
    "nodeId": "sets-node-1",
    "title": "Set Notation and Membership",
    "section": "set-fundamentals",
    "pdfReference": "Exercise 3A #2-3",
    "learningFocus": ["∈ and ∉ notation", "n(A) cardinality"],

    "exemplarProblems": [
      {
        "id": "ex1",
        "problemText": "Let P = {composite factors of 50}...",
        "source": "Exercise 3A #2",
        "correctAnswer": { "a": "...", "b": "..." }
      }
    ],

    "variationRules": {
      "setDefinitions": ["factors of {number}", "multiples of {n}"],
      "numberRanges": { "min": 20, "max": 100 },
      "questionTypes": ["List elements", "True/false membership"]
    },

    "mathTool": {
      "toolName": "setVisualizer",
      "parameters": {
        "setElements": ["variable"],
        "showNotation": true
      }
    },

    "generationGuidelines": [
      "Use different set definitions for variety",
      "Mix finite and infinite sets"
    ]
  }
}
```

## Generated Output Format

The script generates YAML nodes like this:

```yaml
nodes:
  - id: sets-node-1
    nodeNumber: 1
    title: Set Notation and Membership
    layer: foundation
    problemsRequired: 5
    prerequisites: []
    descriptor:
      problemDescription:
        - "Generated problem 1..."
        - "Generated problem 2..."
      contexts: ["factors", "multiples"]
      difficulty: easy
      mathTool: "setVisualizer"
      _generatedQuestions:  # Full question data for review
        - problemDescription: "..."
          mathTool: { ... }
          correctAnswer: "..."
          workingSteps: [...]
```

## Workflow

### 1. Create/Update Exemplars

Edit `s3-sets-venn-diagrams-exemplars.json`:
- Add example problems from PDF/textbook
- Define variation rules
- Specify mathTool parameters
- Add generation guidelines

### 2. Generate Questions

```bash
# Test with 3 nodes first
python generate_questions.py --test

# Review output
cat ../S3/Maths/s3-math-sets-venn-diagrams-TEST.yaml

# If good, generate all
python generate_questions.py --nodes all
```

### 3. Review Generated Questions

Check the output YAML:
- ✅ Are questions pedagogically sound?
- ✅ Do mathTool parameters render correctly?
- ✅ Are answers correct?
- ✅ Is variety sufficient?

### 4. Deploy

```bash
# If all good, the file is already in the right location
# Just review ../S3/Maths/s3-math-sets-venn-diagrams.yaml

# Upload to Firestore (optional)
npm run upload-curriculum-to-firestore
```

## Adding New Topics

To add exemplars for a new topic (e.g., trigonometry):

1. **Create exemplar file**:
   ```bash
   cp s3-sets-venn-diagrams-exemplars.json s3-math-trigonometry-exemplars.json
   ```

2. **Edit exemplar file**:
   - Update node IDs (trig-node-1, trig-node-2, etc.)
   - Add example problems from trigonometry PDF/textbook
   - Define variation rules for trig (angles, sides, ratios)
   - Specify mathTools (rightTriangle, etc.)

3. **Update script** (optional):
   - Add command-line option for different topics
   - Or just change EXEMPLAR_FILE and OUTPUT_FILE constants

4. **Generate**:
   ```bash
   python generate_questions.py --nodes all
   ```

## Cost Estimation

Using Claude Sonnet 4.5:
- ~1,500 tokens per question (prompt + response)
- 20 nodes × 5 questions = 100 questions
- 100 × 1,500 = 150,000 tokens
- Cost: ~$0.45 (at $3 per million tokens)

**Very affordable for one-time generation!**

## Troubleshooting

### API Key Not Found

```bash
Error: CLAUDE_API_KEY environment variable not set
```

Solution: `export CLAUDE_API_KEY='sk-ant-...'`

### JSON Parse Error

```
✗ JSON Parse Error: Expecting property name enclosed in double quotes
```

Solution: Claude sometimes adds markdown. Script removes it automatically, but if it persists, check the response manually.

### Invalid mathTool Parameters

Review generated questions and ensure parameters match the exemplar specification. Update generation guidelines if needed.

## Benefits Over Runtime Generation

| Aspect | Runtime Generation | Pre-Generation (This System) |
|--------|-------------------|------------------------------|
| **Speed** | 2-3s per question | <100ms (fetched from file) |
| **Quality** | Unpredictable | Human-reviewed |
| **Cost** | $0.003 per student | One-time $0.45 |
| **Determinism** | Random | Fixed question bank |
| **Offline** | Requires AI | Works offline |
| **Variety** | Infinite | Controlled (5 variations) |

## Next Steps

1. ✅ Create exemplar file (DONE)
2. ✅ Write generation script (DONE)
3. ⏳ Test on 3 nodes
4. ⏳ Review and refine
5. ⏳ Generate all 100 questions
6. ⏳ Deploy to production

## Scaling to Other Topics

This system can scale to **all subjects and grades**:

- **S3 Math Trigonometry**: 43 nodes × 5 = 215 questions (~$1)
- **S3 Math Circle Geometry**: 10 nodes × 5 = 50 questions (~$0.25)
- **S3 Science Physics**: 30 nodes × 5 = 150 questions (~$0.70)

**Total for entire S3 curriculum**: ~$20-30 one-time cost!

Compare to:
- Hiring question writers: $1000s
- Runtime AI generation: $100s per month
- Manual question writing: Weeks of work
