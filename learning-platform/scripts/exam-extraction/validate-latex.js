#!/usr/bin/env node

/**
 * LaTeX validation utility using KaTeX
 * Validates all LaTeX expressions in JSON/YAML files
 *
 * Usage:
 *   node validate-latex.js <file-path>
 *   node validate-latex.js output/topic/4-exam-practice.yaml
 */

import katex from 'katex';
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

/**
 * Extract all LaTeX expressions from text
 * Supports both inline ($...$) and display ($$...$$) math
 */
export function extractLatexExpressions(text) {
  if (!text || typeof text !== 'string') {
    return [];
  }

  const expressions = [];

  // Match $...$ patterns (non-greedy)
  const inlineRegex = /\$([^$]+)\$/g;
  let match;

  while ((match = inlineRegex.exec(text)) !== null) {
    expressions.push({
      raw: match[0],
      latex: match[1],
      type: 'inline',
      index: match.index
    });
  }

  return expressions;
}

/**
 * Validate a single LaTeX expression using KaTeX
 */
export function validateLatexExpression(latex) {
  try {
    // Try to render with KaTeX
    katex.renderToString(latex, {
      throwOnError: true,
      strict: 'warn',
      trust: false
    });
    return { valid: true };
  } catch (error) {
    return {
      valid: false,
      error: error.message,
      suggestion: getSuggestion(latex, error.message)
    };
  }
}

/**
 * Get suggestions for common LaTeX errors
 */
function getSuggestion(latex, errorMessage) {
  // Missing braces around exponent
  if (errorMessage.includes('Expected group') && latex.includes('^')) {
    const fixed = latex.replace(/\^(\w)/g, '^{$1}');
    if (fixed !== latex) {
      return `Try: ${fixed} (add braces around exponent)`;
    }
  }

  // Missing braces around subscript
  if (errorMessage.includes('Expected group') && latex.includes('_')) {
    const fixed = latex.replace(/_(\w)/g, '_{$1}');
    if (fixed !== latex) {
      return `Try: ${fixed} (add braces around subscript)`;
    }
  }

  // Common fractions
  if (latex.match(/\\frac\d/)) {
    const fixed = latex.replace(/\\frac(\d)(\d)/g, '\\frac{$1}{$2}');
    return `Try: ${fixed} (\\frac requires two arguments: \\frac{num}{denom})`;
  }

  // Missing backslash for common functions
  const commonFunctions = ['sin', 'cos', 'tan', 'log', 'ln', 'exp'];
  for (const func of commonFunctions) {
    const pattern = new RegExp(`(?<!\\\\)${func}`, 'g');
    if (pattern.test(latex)) {
      return `Try: \\${func} (use backslash for mathematical functions)`;
    }
  }

  return null;
}

/**
 * Validate all LaTeX in a text string
 */
export function validateTextLatex(text, context = '') {
  const expressions = extractLatexExpressions(text);
  const results = [];

  expressions.forEach(expr => {
    const validation = validateLatexExpression(expr.latex);
    if (!validation.valid) {
      results.push({
        context,
        raw: expr.raw,
        latex: expr.latex,
        error: validation.error,
        suggestion: validation.suggestion,
        index: expr.index
      });
    }
  });

  return results;
}

/**
 * Validate LaTeX in a structured object (recursive)
 */
export function validateObjectLatex(obj, path = '') {
  const errors = [];

  if (typeof obj === 'string') {
    const textErrors = validateTextLatex(obj, path);
    errors.push(...textErrors);
  } else if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      const itemErrors = validateObjectLatex(item, `${path}[${index}]`);
      errors.push(...itemErrors);
    });
  } else if (obj && typeof obj === 'object') {
    for (const [key, value] of Object.entries(obj)) {
      const keyPath = path ? `${path}.${key}` : key;
      const valueErrors = validateObjectLatex(value, keyPath);
      errors.push(...valueErrors);
    }
  }

  return errors;
}

/**
 * Validate LaTeX in a JSON file
 */
export function validateJsonFile(filePath) {
  console.log(`Validating LaTeX in: ${filePath}\n`);

  const content = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(content);

  return validateObjectLatex(data, path.basename(filePath));
}

/**
 * Validate LaTeX in a YAML file
 */
export function validateYamlFile(filePath) {
  console.log(`Validating LaTeX in: ${filePath}\n`);

  const content = fs.readFileSync(filePath, 'utf8');
  const data = yaml.load(content);

  return validateObjectLatex(data, path.basename(filePath));
}

/**
 * Validate LaTeX in a file (auto-detect JSON/YAML)
 */
export function validateFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();

  if (ext === '.json') {
    return validateJsonFile(filePath);
  } else if (ext === '.yaml' || ext === '.yml') {
    return validateYamlFile(filePath);
  } else {
    throw new Error(`Unsupported file type: ${ext}. Use .json, .yaml, or .yml`);
  }
}

/**
 * Print validation report
 */
export function printValidationReport(errors) {
  if (errors.length === 0) {
    console.log('✅ All LaTeX expressions are valid!\n');
    return true;
  }

  console.log(`❌ Found ${errors.length} LaTeX error${errors.length > 1 ? 's' : ''}:\n`);

  errors.forEach((error, index) => {
    console.log(`${index + 1}. ${error.context || 'Unknown location'}`);
    console.log(`   Expression: ${error.raw}`);
    console.log(`   Error: ${error.error}`);
    if (error.suggestion) {
      console.log(`   💡 Suggestion: ${error.suggestion}`);
    }
    console.log('');
  });

  return false;
}

/**
 * Main CLI execution
 */
if (import.meta.url === `file://${process.argv[1]}`) {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('Usage: node validate-latex.js <file-path>');
    console.log('Example: node validate-latex.js output/topic/4-exam-practice.yaml');
    process.exit(1);
  }

  const filePath = path.resolve(args[0]);

  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }

  try {
    const errors = validateFile(filePath);
    const isValid = printValidationReport(errors);
    process.exit(isValid ? 0 : 1);
  } catch (error) {
    console.error(`❌ Validation failed: ${error.message}`);
    process.exit(1);
  }
}
