#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const QA_DIR = path.join(PROJECT_ROOT, 'public/curriculum-content/o-level/exam-papers/QA');
const PROCESSED_DIR = path.join(PROJECT_ROOT, 'public/curriculum-content/o-level/exam-papers/processed');

const qaFiles = fs.readdirSync(QA_DIR).filter((f: string) => f.endsWith('.json'));

console.log('🔍 Duplicate Question IDs Found:\n');
console.log('='.repeat(80));

let totalDuplicates = 0;
let geminiDuplicates = 0;
let originalDuplicates = 0;

for (const file of qaFiles) {
    const qaPath = path.join(QA_DIR, file);
    const processedPath = path.join(PROCESSED_DIR, file);

    if (!fs.existsSync(processedPath)) continue;

    const qaData = JSON.parse(fs.readFileSync(qaPath, 'utf-8'));
    const processedData = JSON.parse(fs.readFileSync(processedPath, 'utf-8'));

    const processedIds = new Set();
    ['Paper 1', 'Paper 2'].forEach(paper => {
        (processedData.questions[paper] || []).forEach((q: any) => {
            processedIds.add(q.questionId);
        });
    });

    const duplicates: string[] = [];
    ['Paper 1', 'Paper 2'].forEach(paper => {
        (qaData.questions[paper] || []).forEach((q: any) => {
            if (processedIds.has(q.questionId)) {
                duplicates.push(q.questionId);
            }
        });
    });

    if (duplicates.length > 0) {
        console.log(`\n📄 ${file} (${duplicates.length} duplicates):`);
        duplicates.forEach(id => {
            const isGemini = id.includes('gemini');
            if (isGemini) geminiDuplicates++;
            else originalDuplicates++;
            totalDuplicates++;
            console.log(`   ${isGemini ? '🤖' : '📝'} ${id}`);
        });
    }
}

console.log('\n' + '='.repeat(80));
console.log(`\n📊 Summary:`);
console.log(`   Total duplicates: ${totalDuplicates}`);
console.log(`   🤖 AI-generated (gemini): ${geminiDuplicates}`);
console.log(`   📝 Original exam questions: ${originalDuplicates}`);
console.log('\n🤖 = AI-generated (gemini)');
console.log('📝 = Original exam question');
