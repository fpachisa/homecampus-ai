import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const QA_DIR = path.join(__dirname, 'QA');
const PROCESSED_DIR = path.join(__dirname, 'processed');

// List of files to merge
const filesToMerge = ['g5.json', 'n1.json', 'n2.json', 'n3.json', 'n4.json', 'n5.json', 'n7.json', 'n8.json', 'n9.json', 's1.json'];

// Function to merge questions from QA into processed
function mergeTopicFile(filename) {
    console.log(`\n=== Merging ${filename} ===`);

    const qaPath = path.join(QA_DIR, filename);
    const processedPath = path.join(PROCESSED_DIR, filename);

    // Read QA file
    const qaData = JSON.parse(fs.readFileSync(qaPath, 'utf8'));

    // Read processed file
    const processedData = JSON.parse(fs.readFileSync(processedPath, 'utf8'));

    let addedCount = 0;
    let skippedCount = 0;

    // Merge Paper 1 and Paper 2
    ['Paper 1', 'Paper 2'].forEach(paper => {
        if (qaData.questions[paper] && qaData.questions[paper].length > 0) {
            // Ensure processed has this paper
            if (!processedData.questions[paper]) {
                processedData.questions[paper] = [];
            }

            // Get existing question IDs in processed
            const existingIds = new Set(
                processedData.questions[paper].map(q => q.questionId)
            );

            // Add questions from QA that don't exist in processed
            qaData.questions[paper].forEach(qaQuestion => {
                if (!existingIds.has(qaQuestion.questionId)) {
                    processedData.questions[paper].push(qaQuestion);
                    addedCount++;
                    console.log(`  ✓ Added ${paper} Q${qaQuestion.questionNumber} (${qaQuestion.questionId})`);
                } else {
                    skippedCount++;
                    console.log(`  ⊘ Skipped ${paper} Q${qaQuestion.questionNumber} (already exists)`);
                }
            });

            // Sort questions by questionNumber
            processedData.questions[paper].sort((a, b) => a.questionNumber - b.questionNumber);
        }
    });

    // Write back to processed file
    fs.writeFileSync(processedPath, JSON.stringify(processedData, null, 2), 'utf8');

    console.log(`✓ ${filename}: Added ${addedCount} questions, Skipped ${skippedCount} duplicates`);
    return { added: addedCount, skipped: skippedCount };
}

// Main execution
console.log('====================================');
console.log('QA to Processed Merge Script');
console.log('====================================');

let totalAdded = 0;
let totalSkipped = 0;

filesToMerge.forEach(filename => {
    try {
        const result = mergeTopicFile(filename);
        totalAdded += result.added;
        totalSkipped += result.skipped;
    } catch (error) {
        console.error(`✗ Error merging ${filename}:`, error.message);
    }
});

console.log('\n====================================');
console.log('Merge Complete');
console.log(`Total Added: ${totalAdded} questions`);
console.log(`Total Skipped: ${totalSkipped} duplicates`);
console.log('====================================');
