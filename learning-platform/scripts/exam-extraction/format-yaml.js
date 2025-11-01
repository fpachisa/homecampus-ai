#!/usr/bin/env node

/**
 * STEP 4: Format JSON to YAML with smart grouping and questionGroup structure
 * Groups questions into nodes with 4-6 parts, using questionGroup to separate questions
 *
 * Usage: node format-yaml.js <input-json> <output-yaml> <topic-id> <starting-node-number>
 * Example: node format-yaml.js filtered-solutions.json exam-practice.yaml s3-math-exponential-logarithms 30
 */

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { clearCheckpoint } from './checkpoint.js';
import { validateObjectLatex, printValidationReport } from './validate-latex.js';

const MIN_PARTS_PER_NODE = 4;
const MAX_PARTS_PER_NODE = 6;

function formatToYAML(inputPath, outputPath, topicId, startingNodeNumber) {
  try {
    console.log(`Reading questions with solutions: ${inputPath}`);
    const data = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

    if (!data.questions || !Array.isArray(data.questions)) {
      throw new Error('Invalid input JSON: missing questions array');
    }

    console.log(`\n=== SMART GROUPING ===`);
    console.log(`Questions to process: ${data.questions.length}`);
    console.log(`Target: ${MIN_PARTS_PER_NODE}-${MAX_PARTS_PER_NODE} parts per node`);
    console.log(`Starting node number: ${startingNodeNumber}\n`);

    // Group questions into nodes
    const nodeGroups = [];
    let currentGroup = [];
    let currentPartCount = 0;

    data.questions.forEach((q, qIdx) => {
      const partsCount = q.parts.length;
      console.log(`Q${qIdx + 1}: ${partsCount} parts - "${q.question.substring(0, 60)}..."`);

      // If question alone meets minimum, check if we should start new node
      if (partsCount >= MIN_PARTS_PER_NODE) {
        // Flush current group if exists
        if (currentGroup.length > 0) {
          nodeGroups.push([...currentGroup]);
          console.log(`  → Flushed group (${currentPartCount} parts)`);
          currentGroup = [];
          currentPartCount = 0;
        }
        // Add as standalone
        nodeGroups.push([q]);
        console.log(`  → Standalone node (${partsCount} parts)`);
      } else {
        // Try to add to current group
        if (currentPartCount + partsCount <= MAX_PARTS_PER_NODE) {
          currentGroup.push(q);
          currentPartCount += partsCount;
          console.log(`  → Added to group (now ${currentPartCount} parts)`);
        } else {
          // Current group is full, start new one
          if (currentGroup.length > 0) {
            nodeGroups.push([...currentGroup]);
            console.log(`  → Flushed group (${currentPartCount} parts)`);
          }
          currentGroup = [q];
          currentPartCount = partsCount;
          console.log(`  → Started new group (${partsCount} parts)`);
        }
      }
    });

    // Flush remaining group
    if (currentGroup.length > 0) {
      nodeGroups.push(currentGroup);
      console.log(`  → Final group (${currentPartCount} parts)`);
    }

    console.log(`\n✓ Created ${nodeGroups.length} nodes\n`);

    // Generate YAML nodes
    const yamlNodes = [];
    let nodeNumber = parseInt(startingNodeNumber);

    nodeGroups.forEach((group, groupIdx) => {
      const nodeId = `${topicId}-exam-practice-${groupIdx + 1}`;

      // Use AI-generated title from first question in group
      const title = group[0].title;

      // Calculate total parts
      const totalParts = group.reduce((sum, q) => sum + q.parts.length, 0);

      // Format pre-written questions with questionGroup structure
      const preWrittenQuestions = [];
      let isFirstPartInNode = true;

      group.forEach((q, qIndexInGroup) => {
        // questionGroup format: q{nodeNumber}{letter} → q35a, q35b, etc.
        const questionGroup = `q${nodeNumber}${String.fromCharCode(97 + qIndexInGroup)}`;

        // partNumber tracks which part within this question (1, 2, 3...)
        let partNumber = 1;

        q.parts.forEach((part, partIdx) => {
          // id format: q{nodeNumber}-part-{questionNumber}-{label} → q35-part-1-a, q35-part-1-b, etc.
          const idString = `q${nodeNumber}-part-${qIndexInGroup + 1}-${part.label}`;

          // Build question object with proper field order
          const questionObj = {
            id: idString,
            questionGroup: questionGroup,
            problemText: `${q.question}<br><br>(${part.label}) ${part.text}`
          };

          // ONLY add avatarIntro for the very first part in the node (after problemText)
          if (isFirstPartInNode && part.avatarIntro) {
            // Normalize to single line
            questionObj.avatarIntro = part.avatarIntro.replace(/\s+/g, ' ').trim();
          }

          // Add remaining fields
          questionObj.finalAnswer = part.answer || '';
          questionObj.stepByStepGuideline = part.stepByStepGuideline || [];
          questionObj.mathTool = null;

          preWrittenQuestions.push(questionObj);

          isFirstPartInNode = false; // After first part, no more avatarIntro
          partNumber++;
        });
      });

      // Create node structure
      const node = {
        id: nodeId,
        nodeNumber: nodeNumber++,
        title: title,
        layer: 'examPractice',
        problemsRequired: totalParts,
        prerequisites: [],
        descriptor: {
          aiGeneratedQuestions: false,
          difficulty: 'medium',
          preWrittenQuestions: preWrittenQuestions
        }
      };

      yamlNodes.push(node);

      console.log(`Node ${nodeNumber - 1}: ${group.length} question(s), ${totalParts} parts`);
      group.forEach((q, qi) => {
        console.log(`  - Q${qi + 1}: ${q.parts.length} parts`);
      });
    });

    // Validate LaTeX before converting to YAML
    console.log('\n=== LATEX VALIDATION ===');
    const latexErrors = validateObjectLatex(yamlNodes, 'YAML output');
    const isLatexValid = printValidationReport(latexErrors);

    if (!isLatexValid) {
      console.log('⚠ Warning: LaTeX errors found. Review the errors above.');
      console.log('The YAML file will still be generated, but you may need to fix these issues.\n');
    }

    // Convert to YAML with custom options to avoid folded scalars
    const yamlString = yaml.dump(yamlNodes, {
      indent: 2,
      lineWidth: -1, // Disable line wrapping (prevents >- folded scalars)
      noRefs: true,
      quotingType: '"',
      forceQuotes: false,
      condenseFlow: true,
      noCompatMode: false,
      flowLevel: -1 // Never use flow style for collections
    });

    // Write to file
    fs.writeFileSync(outputPath, yamlString);
    console.log(`✓ Saved YAML to: ${outputPath}`);

    // Clear checkpoint - pipeline complete!
    const outputDir = path.dirname(outputPath);
    clearCheckpoint(outputDir);

    // Print summary
    console.log('\n=== YAML FORMATTING SUMMARY ===');
    console.log(`Nodes created: ${yamlNodes.length}`);
    console.log(`Node numbers: ${startingNodeNumber} - ${nodeNumber - 1}`);
    console.log(`Total question parts: ${yamlNodes.reduce((sum, n) => sum + n.problemsRequired, 0)}`);

    // Print sample node structure
    console.log('\n=== SAMPLE NODE STRUCTURE ===');
    const sampleNode = yamlNodes[0];
    console.log(`ID: ${sampleNode.id}`);
    console.log(`Node #: ${sampleNode.nodeNumber}`);
    console.log(`Title: ${sampleNode.title}`);
    console.log(`Parts: ${sampleNode.problemsRequired}`);
    console.log(`First question ID: ${sampleNode.descriptor.preWrittenQuestions[0].id}`);

    console.log('\n✓ YAML file ready for integration into topic file!');
    console.log(`\nNext steps:`);
    console.log(`1. Review the YAML file: ${outputPath}`);
    console.log(`2. Append contents to: learning-platform/public/curriculum-content/S3/Maths/${topicId}.yaml`);
    console.log(`3. Update node numbering if needed`);
    console.log(`4. Test in development environment`);

    return yamlNodes;

  } catch (error) {
    console.error('❌ Error formatting to YAML:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Main execution
const args = process.argv.slice(2);
if (args.length < 4) {
  console.log('Usage: node format-yaml.js <input-json> <output-yaml> <topic-id> <starting-node-number>');
  console.log('Example: node format-yaml.js with-solutions.json exam-practice.yaml s3-math-exponential-logarithms 30');
  process.exit(1);
}

const inputPath = path.resolve(args[0]);
const outputPath = path.resolve(args[1]);
const topicId = args[2];
const startingNodeNumber = args[3];

if (!fs.existsSync(inputPath)) {
  console.error(`❌ Input file not found: ${inputPath}`);
  process.exit(1);
}

if (isNaN(parseInt(startingNodeNumber))) {
  console.error(`❌ Invalid starting node number: ${startingNodeNumber}`);
  process.exit(1);
}

formatToYAML(inputPath, outputPath, topicId, startingNodeNumber);
