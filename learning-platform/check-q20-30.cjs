const YAML = require('yaml');
const fs = require('fs');
const content = fs.readFileSync('/Users/farhat/Documents/AI Systems/AITutor/aicampus/curriculum-content/S4/Maths/s4-math-differential-calculus.yaml', 'utf8');
const parsed = YAML.parse(content);

const allQuestions = [];
parsed.nodes.forEach((node, nodeIdx) => {
  if (node.descriptor.preWrittenQuestions) {
    node.descriptor.preWrittenQuestions.forEach((q, qIdx) => {
      allQuestions.push({
        nodeTitle: node.title,
        toolName: q.mathTool?.toolName,
      });
    });
  }
});

console.log('Questions 20-30:');
allQuestions.slice(20, 30).forEach((q, i) => {
  console.log(`${i+20}: ${q.nodeTitle}, Tool: ${q.toolName || 'none'}`);
});
