#!/usr/bin/env python3
"""
Question Bank Generator using Exemplar Templates

This script reads exemplar templates and uses AI (Claude or Gemini) to generate
practice questions for each node, outputting a complete YAML file.

Features:
- Auto-save progress after each node (crash resilient)
- Automatic retry with exponential backoff for failed questions
- Resume capability (skips already-generated nodes)
- Works with any topic (generic file paths)

Usage:
    # Generate all nodes for trigonometry
    python generate_questions.py \
        ../S3/Maths/s3-math-trigonometry-exemplars.json \
        ../S3/Maths/s3-math-trigonometry.yaml \
        --nodes all --provider gemini

    # Test mode (first 3 nodes only)
    python generate_questions.py \
        ../S3/Maths/s3-math-circle-geometry-exemplars.json \
        ../S3/Maths/s3-math-circle-geometry.yaml \
        --test

    # Specific nodes with custom retry attempts
    python generate_questions.py \
        ../S3/Maths/s3-math-sets-venn-diagrams-exemplars.json \
        ../S3/Maths/s3-math-sets-venn-diagrams.yaml \
        --nodes sets-node-1,sets-node-2,sets-node-3 --max-retries 5

    # Resume after crash (automatically skips completed nodes)
    python generate_questions.py \
        ../S3/Maths/s3-math-trigonometry-exemplars.json \
        ../S3/Maths/s3-math-trigonometry.yaml \
        --nodes all
"""

import json
import yaml
import os
import sys
import time
import argparse
from typing import Dict, List, Any, Optional

# Load environment variables from .env file
try:
    from dotenv import load_dotenv
    load_dotenv()  # Load from .env file in current directory
except ImportError:
    print("⚠️  python-dotenv not installed. Install with: pip install python-dotenv")
    print("⚠️  Falling back to system environment variables only")

# API Configuration - Support both providers
CLAUDE_API_KEY = os.environ.get("CLAUDE_API_KEY") or os.environ.get("VITE_CLAUDE_API_KEY")
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY") or os.environ.get("VITE_GEMINI_API_KEY")

# Global variables for clients (initialized based on provider choice)
anthropic_client = None
genai = None


def initialize_ai_provider(provider: str):
    """Initialize the selected AI provider"""
    global anthropic_client, genai

    if provider == "claude":
        if not CLAUDE_API_KEY:
            print("ERROR: CLAUDE_API_KEY or VITE_CLAUDE_API_KEY environment variable not set")
            print("Set it with: export CLAUDE_API_KEY='your-key-here'")
            sys.exit(1)

        try:
            import anthropic
            anthropic_client = anthropic.Anthropic(api_key=CLAUDE_API_KEY)
            print(f"✓ Initialized Claude Sonnet 4.5 provider")
        except ImportError:
            print("ERROR: anthropic package not installed. Install with: pip install anthropic")
            sys.exit(1)

    elif provider == "gemini":
        if not GEMINI_API_KEY:
            print("ERROR: GEMINI_API_KEY or VITE_GEMINI_API_KEY environment variable not set")
            print("Set it with: export GEMINI_API_KEY='your-key-here'")
            sys.exit(1)

        try:
            import google.generativeai as genai_module
            genai = genai_module
            genai.configure(api_key=GEMINI_API_KEY)
            print(f"✓ Initialized Gemini Flash 3 Preview provider")
        except ImportError:
            print("ERROR: google-generativeai package not installed. Install with: pip install google-generativeai")
            sys.exit(1)

    else:
        print(f"ERROR: Unknown provider '{provider}'. Use 'claude' or 'gemini'")
        sys.exit(1)


def load_exemplars(file_path: str) -> Dict[str, Any]:
    """Load exemplar templates from JSON file"""
    with open(file_path, 'r') as f:
        return json.load(f)


def create_batch_generation_prompt(exemplar: Dict[str, Any], count: int, node_number: int, previous_questions: List[str] = None) -> str:
    """Create prompt for AI to generate ALL questions at once with diversity enforcement"""

    prompt = f"""You are generating {count} diverse practice problems for Secondary 3 students.

# NODE INFORMATION
**Title**: {exemplar['title']}
**Learning Focus**: {', '.join(exemplar['learningFocus'])}
**Section**: {exemplar['section']}

# EXEMPLAR PROBLEMS (USE AS TEMPLATES, DO NOT COPY)
"""

    for ex in exemplar['exemplarProblems']:
        prompt += f"\nProblem: {ex['problemText']}\n"
        if 'correctAnswer' in ex:
            prompt += f"Answer: {json.dumps(ex['correctAnswer'], indent=2)}\n"

    prompt += f"""
# VARIATION RULES
Apply these rules when generating variations:

**Available Options**:
{json.dumps(exemplar.get('variationRules', {}), indent=2)}

# MATHTOOL SPECIFICATION
{json.dumps(exemplar.get('mathTool'), indent=2)}

# GENERATION GUIDELINES
{chr(10).join('- ' + g for g in exemplar.get('generationGuidelines', []))}

# CRITICAL DIVERSITY REQUIREMENTS (FOR BATCH OF {count} QUESTIONS)

**YOU MUST GENERATE {count} QUESTIONS THAT ARE SUBSTANTIALLY DIFFERENT:**
"""

    # Add anti-repetition section if previous questions exist
    if previous_questions and len(previous_questions) > 0:
        # Show last 20 questions (or all if less than 20) to avoid huge prompts
        recent_questions = previous_questions[-20:] if len(previous_questions) > 20 else previous_questions

        prompt += f"""

# ANTI-REPETITION: PREVIOUSLY GENERATED QUESTIONS

**CRITICAL**: The following {len(recent_questions)} questions have ALREADY been generated in previous nodes of this topic.

"""
        for i, prev_q in enumerate(recent_questions, 1):
            # Truncate very long questions to keep prompt manageable
            truncated_q = prev_q[:200] + "..." if len(prev_q) > 200 else prev_q
            prompt += f"{i}. {truncated_q}\n\n"

        prompt += f"""
**YOU MUST NOT repeat contexts/scenarios from above questions:**
- Review the {len(recent_questions)} questions above carefully
- Identify which contexts/scenarios were used
- Try to use DIFFERENT contexts for this batch
- Rotate through ALL available variation options in the exemplar

"""

    prompt += """
# REQUIRED OUTPUT FORMAT

Return a JSON array with exactly {count} questions:

[
  {{
    "problemText": "Question 1 with unique context A...",
    "avatarIntro": "Encouraging 1-2 sentence intro (ONLY for question 1). This is for TTS service. CRITICAL: It can have only plain text",
    "mathTool": {{
      "toolName": "exact tool name from MATHTOOL SPECIFICATION above",
      "parameters": {{ ... exact parameters for this specific problem }}
    }},
    "finalAnswer": "The correct answer",
    "stepByStepGuideline": [
      "Step 1: Clear explanation...",
      "Step 2: Next step...",
      "Step 3: Continue..."
    ]
  }},
  {{
    "problemText": "Question 2 with DIFFERENT context B...",
    "mathTool": {{ ... }},
    "finalAnswer": "...",
    "stepByStepGuideline": ["...", "...", "..."]
  }},
  {{
    "problemText": "Question 3 with DIFFERENT context C...",
    "mathTool": {{ ... }},
    "finalAnswer": "...",
    "stepByStepGuideline": ["...", "...", "..."]
  }}
  ... continue for all {count} questions
]

**CRITICAL RULES**:
- Return ONLY valid JSON array (no markdown, no code blocks, no extra text)
- Each question must be mathematically correct
- avatarIntro ONLY in first question and PLAIN TEXT ONLY (omit from others)
- mathTool.toolName must exactly match specification
- Ensure MAXIMUM diversity - use ALL available variation options

**CRITICAL FORMATTING - CURRENCY & LATEX**:
- CURRENCY: For money amounts, use \\$ (backslash-dollar) so it renders as $
  - WRONG: "costs $25" ← unescaped $ triggers LaTeX mode, garbles text
  - CORRECT: "costs \\$25" ← renders properly as: costs $25
- LATEX: Use $...$ ONLY for complex math expressions (fractions, square roots)
  - For fractions: $\\frac{{1}}{{2}}$ renders as ½
  - Simple symbols: Use Unicode instead (×, ÷, °, θ, π)

Generate {count} diverse questions now:"""

    return prompt


def generate_questions_batch(exemplar: Dict[str, Any], count: int, node_number: int, provider: str, previous_questions: List[str] = None) -> Optional[List[Dict[str, Any]]]:
    """Generate ALL questions for a node in a single batch (with diversity enforcement)"""

    prompt = create_batch_generation_prompt(exemplar, count, node_number, previous_questions)

    print(f"  Generating batch of {count} questions...", end=" ", flush=True)

    try:
        response_text = None

        if provider == "claude":
            message = anthropic_client.messages.create(
                model="claude-sonnet-4-5-20250929",
                max_tokens=8000,  # Increased for batch
                temperature=0.8,  # Higher for diversity
                messages=[{"role": "user", "content": prompt}]
            )
            response_text = message.content[0].text.strip()

        elif provider == "gemini":
            model = genai.GenerativeModel('gemini-3-flash-preview')
            response = model.generate_content(
                prompt,
                generation_config=genai.types.GenerationConfig(
                    temperature=0.8,
                    max_output_tokens=8000,
                )
            )
            response_text = response.text.strip()

        # Remove markdown code blocks if present
        if response_text.startswith("```"):
            lines = response_text.split("\n")
            response_text = "\n".join(lines[1:-1])

        # Parse JSON array
        questions_array = json.loads(response_text)

        # Validate it's an array
        if not isinstance(questions_array, list):
            print(f"✗ Expected array, got {type(questions_array)}")
            return None

        # Validate we got requested count
        if len(questions_array) != count:
            print(f"⚠️  Requested {count}, got {len(questions_array)} questions")

        # Add metadata to each question
        for i, question_data in enumerate(questions_array, start=1):
            question_data['id'] = f"q{node_number}-{i}"
            question_data['questionGroup'] = f"q{node_number}"

        print(f"✓")
        return questions_array

    except json.JSONDecodeError as e:
        print(f"✗ JSON Parse Error: {e}")
        if response_text:
            print(f"Response preview: {response_text[:300]}...")
        return None

    except Exception as e:
        print(f"✗ Error: {e}")
        return None


def generate_node_questions(node_id: str, exemplar: Dict[str, Any], node_number: int, provider: str, count: int = 5, max_retries: int = 3, previous_questions: List[str] = None) -> List[Dict[str, Any]]:
    """Generate all questions for a node using BATCH generation (with retry until complete)"""

    print(f"\n{'='*60}")
    print(f"NODE: {node_id} - {exemplar['title']}")
    print(f"{'='*60}")

    # Try batch generation with retries
    for attempt in range(1, max_retries + 1):
        questions = generate_questions_batch(exemplar, count, node_number, provider, previous_questions)

        # Success: Got exactly the number of questions requested
        if questions and len(questions) == count:
            print(f"  ✓ Generated {len(questions)}/{count} questions")
            return questions

        # Partial batch: Retry to get complete set
        elif questions and len(questions) > 0:
            print(f"  ⚠️  Partial batch: {len(questions)}/{count} questions (need all {count})")
            if attempt < max_retries:
                wait_time = 2 ** (attempt - 1)
                print(f"  ⚠️  Retrying to get complete batch (attempt {attempt + 1}/{max_retries}) in {wait_time}s...")
                time.sleep(wait_time)
            else:
                print(f"  ⚠️  Exhausted retries - accepting partial batch of {len(questions)} questions")
                return questions  # Last resort: accept partial after all retries

        # Failed batch: Retry
        elif attempt < max_retries:
            wait_time = 2 ** (attempt - 1)
            print(f"  ⚠️  Batch failed - retrying (attempt {attempt + 1}/{max_retries}) in {wait_time}s...")
            time.sleep(wait_time)
        else:
            print(f"  ✗ Failed to generate questions after {max_retries} attempts")
            return []

    return []


def create_yaml_node(node_id: str, node_number: int, exemplar: Dict[str, Any], questions: List[Dict[str, Any]]) -> Dict[str, Any]:
    """Create a YAML node entry with generated questions"""

    # Filter out any None values (defensive programming)
    valid_questions = [q for q in questions if q is not None]

    # Extract mathTool from first valid question, or from exemplar, or use null
    mathTool = None
    if valid_questions:
        # Try to get from first question
        first_question_tool = valid_questions[0].get('mathTool')
        if first_question_tool and isinstance(first_question_tool, dict):
            mathTool = first_question_tool.get('toolName')

    node = {
        'id': node_id,
        'nodeNumber': node_number,
        'title': exemplar['title'],
        'layer': 'foundation',  # All are foundation for now
        'problemsRequired': 5,
        'prerequisites': [],
        'descriptor': {
            'aiGeneratedQuestions': False,  # Flag to indicate pre-written questions
            'difficulty': 'easy',
            'mathTool': mathTool,  # Tool name at descriptor level (or null)
            'preWrittenQuestions': valid_questions  # Only valid questions
        }
    }

    return node


def load_existing_yaml(output_path: str) -> Dict[str, Any]:
    """Load existing YAML file if it exists (for resume capability)"""
    if not os.path.exists(output_path):
        return {'nodes': []}

    try:
        with open(output_path, 'r') as f:
            # Skip comment lines and load YAML
            lines = f.readlines()
            yaml_content = ''.join([line for line in lines if not line.strip().startswith('#')])
            data = yaml.safe_load(yaml_content)
            return data if data else {'nodes': []}
    except Exception as e:
        print(f"⚠️  Warning: Could not load existing file: {e}")
        return {'nodes': []}


def get_completed_node_ids(yaml_data: Dict[str, Any]) -> List[str]:
    """Extract list of already-generated node IDs from YAML data"""
    nodes = yaml_data.get('nodes', [])
    return [node['id'] for node in nodes if 'id' in node]


def save_yaml_incremental(output_path: str, all_nodes: List[Dict], topic_name: str):
    """Save YAML with all nodes (for incremental auto-saves and final save)"""
    yaml_output = {'nodes': all_nodes}

    with open(output_path, 'w') as f:
        f.write(f"# {topic_name} - Unified Practice Path\n")
        f.write("# Generated using exemplar-based AI question generation\n")
        f.write("# All nodes are accessible (no locks), with smart prerequisite suggestions\n\n")
        yaml.dump(yaml_output, f, default_flow_style=False, allow_unicode=True, sort_keys=False, width=120)


def extract_topic_name(output_path: str) -> str:
    """Extract topic name from output file path for YAML header comment"""
    # e.g., "s3-math-trigonometry.yaml" -> "Trigonometry"
    #       "s3-math-sets-venn-diagrams.yaml" -> "Sets Venn Diagrams"
    filename = os.path.basename(output_path)
    # Remove extension and prefix
    name = filename.replace('.yaml', '').replace('-TEST', '').replace('s3-math-', '').replace('-', ' ')
    return name.title()


def main():
    parser = argparse.ArgumentParser(
        description='Generate practice questions from exemplars',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Generate all nodes for trigonometry
  python generate_questions.py ../S3/Maths/s3-math-trigonometry-exemplars.json ../S3/Maths/s3-math-trigonometry.yaml --nodes all

  # Test mode (first 3 nodes)
  python generate_questions.py ../S3/Maths/s3-math-circle-geometry-exemplars.json ../S3/Maths/s3-math-circle-geometry.yaml --test

  # Custom retry attempts
  python generate_questions.py ../S3/Maths/s3-math-sets-venn-diagrams-exemplars.json ../S3/Maths/s3-math-sets-venn-diagrams.yaml --max-retries 5

  # Resume after crash (auto-detects and skips completed nodes)
  python generate_questions.py ../S3/Maths/s3-math-sets-venn-diagrams-exemplars.json ../S3/Maths/s3-math-sets-venn-diagrams.yaml --nodes all
        """
    )

    # Positional arguments (required)
    parser.add_argument('exemplar_file', help='Path to exemplar JSON file (e.g., ../S3/Maths/s3-math-trigonometry-exemplars.json)')
    parser.add_argument('output_file', help='Path to output YAML file (e.g., ../S3/Maths/s3-math-trigonometry.yaml)')

    # Optional arguments
    parser.add_argument('--nodes', default='all', help='Node IDs to generate (comma-separated) or "all" (default: all)')
    parser.add_argument('--test', action='store_true', help='Test mode: generate only first 3 nodes')
    parser.add_argument('--count', type=int, default=5, help='Questions per node (default: 5)')
    parser.add_argument('--max-retries', type=int, default=3, help='Maximum retry attempts per question (default: 3)')
    parser.add_argument('--provider', default='gemini', choices=['claude', 'gemini'],
                        help='AI provider to use (default: gemini)')

    args = parser.parse_args()

    # Initialize AI provider
    print(f"Initializing AI provider: {args.provider}")
    initialize_ai_provider(args.provider)
    print()

    # Load exemplars
    print("Loading exemplar templates...")
    exemplars = load_exemplars(args.exemplar_file)
    print(f"Loaded {len(exemplars)} node templates\n")

    # Determine output path (handle test mode)
    output_path = args.output_file if not args.test else args.output_file.replace('.yaml', '-TEST.yaml')

    # Load existing YAML if resuming
    print("Checking for existing progress...")
    existing_yaml = load_existing_yaml(output_path)
    completed_node_ids = get_completed_node_ids(existing_yaml)

    if completed_node_ids:
        print(f"📂 Found existing file with {len(completed_node_ids)} completed nodes")
        print(f"   Completed: {', '.join(completed_node_ids[:5])}{'...' if len(completed_node_ids) > 5 else ''}")
        print(f"   Will skip these and continue from where we left off\n")
    else:
        print("   No existing file found - starting fresh\n")

    # Determine which nodes to generate
    if args.test:
        node_ids = list(exemplars.keys())[:3]
        print(f"TEST MODE: Generating for first 3 nodes only")
    elif args.nodes == 'all':
        node_ids = list(exemplars.keys())
    else:
        node_ids = [n.strip() for n in args.nodes.split(',')]

    # Filter out already-completed nodes
    node_ids_to_generate = [nid for nid in node_ids if nid not in completed_node_ids]

    if not node_ids_to_generate:
        print("✅ All requested nodes already generated! Nothing to do.")
        print(f"   Delete {output_path} to regenerate from scratch.")
        return

    print(f"🔄 {len(node_ids_to_generate)} nodes remaining to generate")
    print(f"   (Total requested: {len(node_ids)}, Already done: {len(completed_node_ids)})\n")

    # Start with existing nodes
    all_nodes = existing_yaml.get('nodes', [])

    # NEW: Accumulate all previously generated question texts for anti-repetition
    all_previous_question_texts = []
    for node in all_nodes:
        for q in node.get('descriptor', {}).get('preWrittenQuestions', []):
            question_text = q.get('problemText', '')
            if question_text:
                all_previous_question_texts.append(question_text)

    if all_previous_question_texts:
        print(f"📝 Loaded {len(all_previous_question_texts)} previous questions for anti-repetition\n")

    # Extract topic name for YAML header
    topic_name = extract_topic_name(args.output_file)

    # Auto-save configuration (save after every node)
    SAVE_INTERVAL = 1
    nodes_since_last_save = 0

    # Generate questions for each remaining node
    for idx, node_id in enumerate(node_ids_to_generate, start=len(completed_node_ids) + 1):
        if node_id not in exemplars:
            print(f"⚠️  Node {node_id} not found in exemplars, skipping...")
            continue

        exemplar = exemplars[node_id]

        # Pass all previous question texts for anti-repetition
        questions = generate_node_questions(node_id, exemplar, idx, args.provider, args.count, args.max_retries, all_previous_question_texts)

        if questions:
            yaml_node = create_yaml_node(node_id, idx, exemplar, questions)
            all_nodes.append(yaml_node)
            nodes_since_last_save += 1

            # NEW: Add newly generated question texts to accumulator for next node
            for q in questions:
                question_text = q.get('problemText', '')
                if question_text:
                    all_previous_question_texts.append(question_text)

            # Auto-save after each node
            if nodes_since_last_save >= SAVE_INTERVAL:
                print(f"\n{'='*60}")
                print(f"💾 Auto-saving progress ({len(all_nodes)} nodes completed)...")
                print(f"{'='*60}")
                save_yaml_incremental(output_path, all_nodes, topic_name)
                nodes_since_last_save = 0
                print(f"✓ Progress saved to {output_path}")
                print(f"✓ Safe to resume if interrupted!\n")

    # Final save (if there were any unsaved nodes or if nothing was saved yet)
    print(f"\n{'='*60}")
    print(f"💾 Saving final output...")
    print(f"{'='*60}\n")
    save_yaml_incremental(output_path, all_nodes, topic_name)

    # Calculate newly generated nodes
    newly_generated = len(all_nodes) - len(completed_node_ids)

    print(f"\n✅ SUCCESS!")
    print(f"   Total nodes in file: {len(all_nodes)}")
    print(f"   Newly generated: {newly_generated}")
    print(f"   Total questions: {sum(len(n['descriptor'].get('preWrittenQuestions', [])) for n in all_nodes)}")
    print(f"   Output file: {output_path}")
    print(f"\nNext steps:")
    print(f"1. Review the generated questions in {output_path}")
    print(f"2. Validate mathTool parameters")
    print(f"3. Check for pedagogical quality")
    if args.test:
        print(f"4. If good, run without --test flag to generate all nodes")
    else:
        print(f"4. If good, use the YAML file in your application")


if __name__ == "__main__":
    main()
