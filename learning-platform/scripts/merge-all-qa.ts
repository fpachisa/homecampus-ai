#!/usr/bin/env tsx

/**
 * Batch Merge QA to Processed
 * 
 * Merges all topic files from QA directory into the processed directory
 */

import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const QA_DIR = path.join(PROJECT_ROOT, 'public/curriculum-content/o-level/exam-papers/QA');
const PROCESSED_DIR = path.join(PROJECT_ROOT, 'public/curriculum-content/o-level/exam-papers/processed');

async function mergeFile(filename: string): Promise<{ success: boolean; added: number; skipped: number; error?: string }> {
    const qaPath = path.join(QA_DIR, filename);
    const processedPath = path.join(PROCESSED_DIR, filename);

    if (!fs.existsSync(qaPath)) {
        return { success: false, added: 0, skipped: 0, error: `QA file not found: ${qaPath}` };
    }

    try {
        const qaContent = JSON.parse(fs.readFileSync(qaPath, 'utf-8'));

        let processedContent: any = {
            topicId: qaContent.topicId,
            questions: {
                "Paper 1": [],
                "Paper 2": []
            }
        };

        if (fs.existsSync(processedPath)) {
            processedContent = JSON.parse(fs.readFileSync(processedPath, 'utf-8'));
        }

        // Merge questions
        const papers = ["Paper 1", "Paper 2"];
        let addedCount = 0;
        let skippedCount = 0;

        for (const paper of papers) {
            const qaQuestions = qaContent.questions[paper] || [];
            const processedQuestions = processedContent.questions[paper] || [];

            // Create a map of existing question IDs to avoid duplicates
            const existingIds = new Set(processedQuestions.map((q: any) => q.questionId));

            for (const q of qaQuestions) {
                if (!existingIds.has(q.questionId)) {
                    processedQuestions.push(q);
                    existingIds.add(q.questionId);
                    addedCount++;
                } else {
                    skippedCount++;
                }
            }

            // Sort questions by questionNumber
            processedQuestions.sort((a: any, b: any) => a.questionNumber - b.questionNumber);

            processedContent.questions[paper] = processedQuestions;
        }

        // Write back to processed file
        fs.writeFileSync(processedPath, JSON.stringify(processedContent, null, 2));

        return { success: true, added: addedCount, skipped: skippedCount };
    } catch (error) {
        return { success: false, added: 0, skipped: 0, error: (error as Error).message };
    }
}

async function mergeAll() {
    console.log('\n🔄 Starting batch merge from QA to Processed...\n');

    // Get all JSON files from QA directory
    const qaFiles = fs.readdirSync(QA_DIR).filter(f => f.endsWith('.json'));

    console.log(`📁 Found ${qaFiles.length} files in QA directory`);
    console.log('='.repeat(60));

    let totalAdded = 0;
    let totalSkipped = 0;
    let successCount = 0;
    let failCount = 0;

    for (const file of qaFiles) {
        process.stdout.write(`\n📄 Processing ${file}... `);

        const result = await mergeFile(file);

        if (result.success) {
            console.log(`✅`);
            console.log(`   Added: ${result.added} questions`);
            if (result.skipped > 0) {
                console.log(`   Skipped: ${result.skipped} duplicates`);
            }
            totalAdded += result.added;
            totalSkipped += result.skipped;
            successCount++;
        } else {
            console.log(`❌`);
            console.log(`   Error: ${result.error}`);
            failCount++;
        }
    }

    // Summary
    console.log('\n' + '='.repeat(60));
    console.log('📊 Merge Summary:');
    console.log('='.repeat(60));
    console.log(`✅ Successfully merged: ${successCount} files`);
    console.log(`❌ Failed: ${failCount} files`);
    console.log(`➕ Total questions added: ${totalAdded}`);
    console.log(`⏭️  Total duplicates skipped: ${totalSkipped}`);
    console.log('='.repeat(60));

    if (successCount > 0) {
        console.log('\n✨ Merge complete! All QA questions have been merged into the processed folder.');
    }
}

// Run the batch merge
mergeAll().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});
