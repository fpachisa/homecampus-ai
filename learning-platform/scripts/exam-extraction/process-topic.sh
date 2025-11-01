#!/bin/bash

###############################################################################
# EXAM PRACTICE EXTRACTION PIPELINE
#
# Orchestrates the full extraction pipeline from PDF to YAML
#
# Usage: ./process-topic.sh <pdf-path> <topic-id> <starting-node-number>
#
# Example:
#   ./process-topic.sh \
#     ../../public/curriculum-content/s3-math-exponential-logarithm-exam-practice.pdf \
#     s3-math-exponential-logarithms \
#     30
#
# Output files (in ./output/<topic-id>/):
#   - 1-raw-questions.json           (Step 1: All extracted questions)
#   - 2-filtered-questions.json      (Step 2: Graph questions removed)
#   - 2-removed-questions.log        (Step 2: Log of removed parts)
#   - 3-with-solutions.json          (Step 3: Solutions generated)
#   - 4-exam-practice.yaml           (Step 4: Final YAML with smart grouping)
###############################################################################

set -e  # Exit on error

# Color output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check arguments
if [ "$#" -ne 3 ]; then
    echo "Usage: ./process-topic.sh <pdf-path> <topic-id> <starting-node-number>"
    echo ""
    echo "Example:"
    echo "  ./process-topic.sh \\"
    echo "    ../../public/curriculum-content/s3-math-exponential-logarithm-exam-practice.pdf \\"
    echo "    s3-math-exponential-logarithms \\"
    echo "    30"
    exit 1
fi

PDF_PATH="$1"
TOPIC_ID="$2"
START_NODE="$3"

# Validate PDF exists
if [ ! -f "$PDF_PATH" ]; then
    echo -e "${RED}❌ PDF file not found: $PDF_PATH${NC}"
    exit 1
fi

# Validate starting node number
if ! [[ "$START_NODE" =~ ^[0-9]+$ ]]; then
    echo -e "${RED}❌ Invalid starting node number: $START_NODE${NC}"
    exit 1
fi

# Create output directory
OUTPUT_DIR="./output/$TOPIC_ID"
mkdir -p "$OUTPUT_DIR"

echo -e "${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║        EXAM PRACTICE EXTRACTION PIPELINE                       ║${NC}"
echo -e "${BLUE}║        (One Step At A Time)                                    ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "PDF: ${YELLOW}$PDF_PATH${NC}"
echo -e "Topic ID: ${YELLOW}$TOPIC_ID${NC}"
echo -e "Starting Node: ${YELLOW}$START_NODE${NC}"
echo -e "Output Dir: ${YELLOW}$OUTPUT_DIR${NC}"
echo ""

# Track timing
START_TIME=$(date +%s)

# Check if there's a problem file from step 1 that needs normalization
if [ -f "$OUTPUT_DIR/1-raw-questions-problem.json" ] && [ ! -f "$OUTPUT_DIR/1-raw-questions.json" ]; then
    echo -e "${YELLOW}╔════════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${YELLOW}║      STEP 1 PROBLEM FILE DETECTED - NORMALIZING               ║${NC}"
    echo -e "${YELLOW}╚════════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${BLUE}Running normalization on fixed JSON...${NC}"
    echo ""

    node normalize-structure.js \
      "$OUTPUT_DIR/1-raw-questions-problem.json" \
      "$OUTPUT_DIR/1-raw-questions.json"

    if [ $? -eq 0 ]; then
        echo ""
        echo -e "${GREEN}✓ Normalization complete!${NC}"
        echo -e "${BLUE}Continuing to step 2...${NC}"
        echo ""
    else
        echo -e "${RED}❌ Normalization failed${NC}"
        echo -e "${YELLOW}Please fix the JSON in: $OUTPUT_DIR/1-raw-questions-problem.json${NC}"
        exit 1
    fi
fi

# Detect which step to run based on existing files
STEP_TO_RUN=0

if [ ! -f "$OUTPUT_DIR/1-raw-questions.json" ]; then
    STEP_TO_RUN=1
elif [ ! -f "$OUTPUT_DIR/2-filtered-questions.json" ]; then
    STEP_TO_RUN=2
elif [ ! -f "$OUTPUT_DIR/3-with-solutions.json" ]; then
    STEP_TO_RUN=3
elif [ ! -f "$OUTPUT_DIR/4-exam-practice.yaml" ]; then
    STEP_TO_RUN=4
else
    echo -e "${GREEN}╔════════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║              ALL STEPS COMPLETE!                               ║${NC}"
    echo -e "${GREEN}╚════════════════════════════════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${GREEN}✓ Final YAML:${NC} $OUTPUT_DIR/4-exam-practice.yaml"
    echo ""
    echo -e "${BLUE}Next steps:${NC}"
    echo -e "  1. Review the YAML file"
    echo -e "  2. Append to: ${YELLOW}../../public/curriculum-content/S3/Maths/$TOPIC_ID.yaml${NC}"
    echo -e "  3. Test in development environment"
    echo ""
    exit 0
fi

echo -e "${BLUE}Next step to run: ${YELLOW}Step $STEP_TO_RUN${NC}\n"

###############################################################################
# STEP 1: Extract all questions from PDF
###############################################################################
if [ $STEP_TO_RUN -eq 1 ]; then
    echo -e "${BLUE}[1/4]${NC} Extracting questions from PDF..."
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

    node extract-exam-questions.js \
      "$PDF_PATH" \
      "$OUTPUT_DIR/1-raw-questions.json"

    if [ $? -eq 0 ]; then
        echo ""
        echo -e "${GREEN}✓ Step 1 complete!${NC}\n"
        echo -e "${BLUE}Next:${NC} Run the same command again to continue to step 2"
        echo -e "  ${YELLOW}./process-topic.sh $PDF_PATH $TOPIC_ID $START_NODE${NC}"
        echo ""
        exit 0
    else
        echo -e "${RED}❌ Step 1 failed${NC}"
        exit 1
    fi
fi

# Show skipped steps
if [ $STEP_TO_RUN -ge 2 ]; then
    echo -e "${YELLOW}[1/4]${NC} ${YELLOW}⏭ Skipping (file exists)${NC}\n"
fi

###############################################################################
# STEP 2: Filter out graph-drawing questions
###############################################################################
if [ $STEP_TO_RUN -eq 2 ]; then
    echo -e "${BLUE}[2/4]${NC} Filtering graph-drawing questions..."
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

    node filter-questions.js \
      "$OUTPUT_DIR/1-raw-questions.json" \
      "$OUTPUT_DIR/2-filtered-questions.json" \
      "$OUTPUT_DIR/2-removed-questions.log"

    if [ $? -eq 0 ]; then
        echo ""
        echo -e "${GREEN}✓ Step 2 complete!${NC}\n"
        echo -e "${BLUE}Review removed questions:${NC} $OUTPUT_DIR/2-removed-questions.log"
        echo ""
        echo -e "${BLUE}Next:${NC} Run the same command again to continue to step 3"
        echo -e "  ${YELLOW}./process-topic.sh $PDF_PATH $TOPIC_ID $START_NODE${NC}"
        echo ""
        exit 0
    else
        echo -e "${RED}❌ Step 2 failed${NC}"
        exit 1
    fi
fi

# Show skipped steps
if [ $STEP_TO_RUN -ge 3 ]; then
    echo -e "${YELLOW}[2/4]${NC} ${YELLOW}⏭ Skipping (file exists)${NC}\n"
fi

###############################################################################
# STEP 3: Generate solutions
###############################################################################
if [ $STEP_TO_RUN -eq 3 ]; then
    echo -e "${BLUE}[3/4]${NC} Generating step-by-step solutions..."
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

    node generate-solutions.js \
      "$OUTPUT_DIR/2-filtered-questions.json" \
      "$OUTPUT_DIR/3-with-solutions.json"

    EXIT_CODE=$?

    echo ""
    if [ $EXIT_CODE -eq 0 ]; then
        echo -e "${GREEN}✓ Step 3 complete!${NC}\n"
        echo -e "${BLUE}Next:${NC} Run the same command again to continue to step 4"
        echo -e "  ${YELLOW}./process-topic.sh $PDF_PATH $TOPIC_ID $START_NODE${NC}"
        echo ""
        exit 0
    else
        echo -e "${RED}❌ Step 3 had issues${NC}"
        echo -e "${YELLOW}⚠ Check the output above for batch failure instructions${NC}\n"
        exit 1
    fi
fi

# Show skipped steps
if [ $STEP_TO_RUN -ge 4 ]; then
    echo -e "${YELLOW}[3/4]${NC} ${YELLOW}⏭ Skipping (file exists)${NC}\n"
fi

###############################################################################
# STEP 4: Format as YAML with smart grouping + LaTeX validation
###############################################################################
if [ $STEP_TO_RUN -eq 4 ]; then
    echo -e "${BLUE}[4/4]${NC} Formatting as YAML with smart grouping + LaTeX validation..."
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

    node format-yaml.js \
      "$OUTPUT_DIR/3-with-solutions.json" \
      "$OUTPUT_DIR/4-exam-practice.yaml" \
      "$TOPIC_ID" \
      "$START_NODE"

    if [ $? -eq 0 ]; then
        END_TIME=$(date +%s)
        DURATION=$((END_TIME - START_TIME))
        MINUTES=$((DURATION / 60))
        SECONDS=$((DURATION % 60))

        echo ""
        echo -e "${GREEN}╔════════════════════════════════════════════════════════════════╗${NC}"
        echo -e "${GREEN}║              ✓ PIPELINE COMPLETE!                              ║${NC}"
        echo -e "${GREEN}╚════════════════════════════════════════════════════════════════╝${NC}"
        echo ""
        echo -e "⏱  Step time: ${YELLOW}${MINUTES}m ${SECONDS}s${NC}"
        echo ""
        echo -e "📁 Output: ${YELLOW}$OUTPUT_DIR/4-exam-practice.yaml${NC}"
        echo ""
        echo -e "${BLUE}Next steps:${NC}"
        echo -e "  1. Review the YAML file"
        echo -e "  2. Check removal log: ${YELLOW}$OUTPUT_DIR/2-removed-questions.log${NC}"
        echo -e "  3. Append to: ${YELLOW}../../public/curriculum-content/S3/Maths/$TOPIC_ID.yaml${NC}"
        echo -e "  4. Test in development environment"
        echo ""
        exit 0
    else
        echo -e "${RED}❌ Step 4 failed${NC}"
        exit 1
    fi
fi
