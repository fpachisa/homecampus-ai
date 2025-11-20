#!/usr/bin/env tsx

/**
 * Table Migration Script
 * 
 * Scans exam question JSON files and converts markdown tables
 * to structured table objects without modifying the original files.
 * 
 * Usage:
 *   npm run migrate-tables -- --dry-run    # Preview changes only
 *   npm run migrate-tables -- --execute    # Apply changes
 *   npm run migrate-tables -- --file s1.json  # Process specific file
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import type { ExamQuestion, QuestionTable, TableMigrationResult, TopicQuestions } from '../src/types/examQuestions';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Parse command line arguments
const args = process.argv.slice(2);
const dirFlag = args.find((arg: string) => arg === '--dir');
const dirIndex = args.indexOf('--dir');
const targetDir = dirIndex !== -1 && args[dirIndex + 1] ? args[dirIndex + 1] : 'QA';

const BASE_DIR = path.join(__dirname, '../public/curriculum-content/o-level/exam-papers');
const SOURCE_DIR = path.join(BASE_DIR, targetDir);
const BACKUP_DIR = path.join(BASE_DIR, `${targetDir}-backup`);

// ============================================
// TABLE DETECTION & EXTRACTION
// ============================================

interface ParsedMarkdownTable {
    headers: string[];
    rows: string[][];
    fullMatch: string;
}

/**
 * Extract markdown table from text
 */
function extractMarkdownTable(text: string): ParsedMarkdownTable | null {
    // Match markdown tables: | header | header |\n| --- | --- |\n| row | row |
    const tableRegex = /\|([^\n]+)\|\n\|[\s\-:|]+\|\n((?:\|[^\n]+\|\n?)+)/g;
    const match = tableRegex.exec(text);

    if (!match) return null;

    const [fullMatch, headerLine, bodyLines] = match;

    // Parse headers
    const headers = headerLine
        .split('|')
        .map(h => h.trim())
        .filter(h => h.length > 0);

    // Parse rows
    const rows = bodyLines
        .trim()
        .split('\n')
        .map(line =>
            line
                .split('|')
                .map(cell => cell.trim())
                .filter(cell => cell.length > 0)
        )
        .filter(row => row.length > 0);

    return { headers, rows, fullMatch };
}

/**
 * Determine table type based on content and structure
 */
function inferTableType(headers: string[], rows: string[][], stem: string): QuestionTable['type'] {
    // Stem-and-leaf detection
    if (
        headers.length === 2 &&
        (headers[0].toLowerCase().includes('stem') || headers[1].toLowerCase().includes('leaf')) ||
        stem.toLowerCase().includes('stem-and-leaf') ||
        stem.toLowerCase().includes('stem and leaf')
    ) {
        return 'stem-and-leaf';
    }

    // Matrix/pricing table detection
    if (stem.toLowerCase().includes('matrix') || stem.toLowerCase().includes('price')) {
        return 'matrix';
    }

    // Comparison table detection (multiple columns with different categories)
    if (headers.length >= 3) {
        return 'comparison';
    }

    // Data table (numerical data)
    const hasNumericData = rows.some(row =>
        row.some(cell => !isNaN(Number(cell)) || cell.match(/\d+/))
    );

    if (hasNumericData) {
        return 'data';
    }

    return 'generic';
}

/**
 * Extract key/legend from stem text
 */
function extractTableKey(stem: string, tableMatch: string): string | undefined {
    const afterTable = stem.split(tableMatch)[1];
    if (!afterTable) return undefined;

    // Look for "Key:" pattern
    const keyMatch = /Key:\s*(.+?)(?:\n|$)/i.exec(afterTable);
    return keyMatch ? keyMatch[1].trim() : undefined;
}

/**
 * Convert markdown table to structured QuestionTable object
 */
function convertToStructuredTable(
    stem: string,
    parsedTable: ParsedMarkdownTable
): { table: QuestionTable; updatedStem: string } {
    const { headers, rows, fullMatch } = parsedTable;

    const tableType = inferTableType(headers, rows, stem);
    const key = extractTableKey(stem, fullMatch);

    // Remove table and key from stem
    let updatedStem = stem.replace(fullMatch, '').trim();
    if (key) {
        updatedStem = updatedStem.replace(new RegExp(`Key:\\s*${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i'), '').trim();
    }

    const table: QuestionTable = {
        type: tableType,
        headers,
        rows,
        ...(key && { key })
    };

    return { table, updatedStem };
}

// ============================================
// FILE PROCESSING
// ============================================

/**
 * Process a single question and extract table if present
 */
function processQuestion(question: ExamQuestion): TableMigrationResult | null {
    const parsedTable = extractMarkdownTable(question.stem);

    if (!parsedTable) {
        // Also check questionText in parts
        for (const part of question.parts) {
            const partTable = extractMarkdownTable(part.questionText);
            if (partTable) {
                console.log(`  ⚠️  Warning: Table found in part.questionText for ${question.questionId}`);
                console.log(`     Consider moving the table to the question stem for better structure.`);
            }
        }
        return null;
    }

    const { table, updatedStem } = convertToStructuredTable(question.stem, parsedTable);

    return {
        questionId: question.questionId,
        originalStem: question.stem,
        updatedStem,
        extractedTable: table,
        success: true
    };
}

/**
 * Process a single JSON file
 */
function processFile(filename: string, execute: boolean = false): void {
    const filePath = path.join(SOURCE_DIR, filename);

    console.log(`\n${'='.repeat(60)}`);
    console.log(`📄 Processing: ${filename}`);
    console.log('='.repeat(60));

    if (!fs.existsSync(filePath)) {
        console.error(`❌ File not found: ${filePath}`);
        return;
    }

    const rawContent = fs.readFileSync(filePath, 'utf8');
    const data: TopicQuestions = JSON.parse(rawContent);

    const results: TableMigrationResult[] = [];
    let modifiedCount = 0;

    // Process Paper 1
    for (const question of data.questions['Paper 1'] || []) {
        const result = processQuestion(question);
        if (result) {
            results.push(result);
            modifiedCount++;

            if (execute) {
                question.stem = result.updatedStem;
                question.table = result.extractedTable;
            }
        }
    }

    // Process Paper 2
    for (const question of data.questions['Paper 2'] || []) {
        const result = processQuestion(question);
        if (result) {
            results.push(result);
            modifiedCount++;

            if (execute) {
                question.stem = result.updatedStem;
                question.table = result.extractedTable;
            }
        }
    }

    // Display results
    if (results.length === 0) {
        console.log('✅ No tables found in this file.');
        return;
    }

    console.log(`\n📊 Found ${results.length} question(s) with tables:\n`);

    for (const result of results) {
        console.log(`  🔹 ${result.questionId}`);
        console.log(`     Table Type: ${result.extractedTable.type}`);
        console.log(`     Headers: [${result.extractedTable.headers.join(', ')}]`);
        console.log(`     Rows: ${result.extractedTable.rows.length}`);
        if (result.extractedTable.key) {
            console.log(`     Key: ${result.extractedTable.key}`);
        }
        console.log('');
    }

    // Save if executing
    if (execute) {
        // Create backup
        if (!fs.existsSync(BACKUP_DIR)) {
            fs.mkdirSync(BACKUP_DIR, { recursive: true });
        }
        const backupPath = path.join(BACKUP_DIR, `${filename}.backup-${Date.now()}`);
        fs.writeFileSync(backupPath, rawContent);
        console.log(`✅ Backup created: ${backupPath}`);

        // Write updated file
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log(`✅ Updated ${modifiedCount} question(s) in ${filename}`);
    } else {
        console.log(`ℹ️  DRY RUN: No changes made. Use --execute to apply changes.`);
    }
}

/**
 * Process all files in the QA directory
 */
function processAllFiles(execute: boolean = false): void {
    if (!fs.existsSync(SOURCE_DIR)) {
        console.error(`❌ Source directory not found: ${SOURCE_DIR}`);
        return;
    }

    const files = fs.readdirSync(SOURCE_DIR).filter((f: string) => f.endsWith('.json'));

    console.log(`\n🚀 Starting table migration process...`);
    console.log(`📁 Processing ${files.length} file(s) in ${SOURCE_DIR}`);
    console.log(`📁 Target directory: ${targetDir}`);
    console.log(`⚙️  Mode: ${execute ? 'EXECUTE (will modify files)' : 'DRY RUN (preview only)'}\n`);

    let totalTablesFound = 0;

    for (const file of files) {
        try {
            processFile(file, execute);
        } catch (error) {
            console.error(`❌ Error processing ${file}:`, error);
        }
    }

    console.log(`\n${'='.repeat(60)}`);
    console.log('✨ Migration process complete!');
    console.log('='.repeat(60));
}

// ============================================
// CLI
// ============================================

const execute = args.includes('--execute');
const dryRun = args.includes('--dry-run') || !execute;
const fileIndex = args.findIndex((arg: string) => arg === '--file');
const specificFile = fileIndex !== -1 ? args[fileIndex + 1] : null;

if (args.includes('--help') || args.includes('-h')) {
    console.log(`
📚 Table Migration Script

Usage:
  npm run migrate-tables                      # Dry run on all files in QA
  npm run migrate-tables -- --dry-run         # Preview changes only (default)
  npm run migrate-tables -- --execute         # Apply changes to all QA files
  npm run migrate-tables -- --file s1.json    # Process specific file
  npm run migrate-tables -- --dir processed   # Use processed directory instead of QA
  npm run migrate-tables -- --dir processed --execute  # Migrate tables in processed folder

Options:
  --dry-run    Preview changes without modifying files (default)
  --execute    Apply changes and create backups
  --file FILE  Process only the specified file
  --dir DIR    Target directory (QA or processed, default: QA)
  --help, -h   Show this help message
  `);
    process.exit(0);
}

// Run the migration
if (specificFile) {
    processFile(specificFile, execute);
} else {
    processAllFiles(execute);
}
