import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const QA_DIR = path.join(PROJECT_ROOT, 'public/curriculum-content/o-level/exam-papers/QA');
const PROCESSED_DIR = path.join(PROJECT_ROOT, 'public/curriculum-content/o-level/exam-papers/processed');


async function mergeFile(filename: string) {
    const qaPath = path.join(QA_DIR, filename);
    const processedPath = path.join(PROCESSED_DIR, filename);

    if (!fs.existsSync(qaPath)) {
        console.error(`Error: QA file not found: ${qaPath}`);
        return;
    }

    console.log(`Reading QA file: ${qaPath}`);
    const qaContent = JSON.parse(fs.readFileSync(qaPath, 'utf-8'));

    let processedContent: any = {
        topicId: qaContent.topicId,
        questions: {
            "Paper 1": [],
            "Paper 2": []
        }
    };

    if (fs.existsSync(processedPath)) {
        console.log(`Reading existing processed file: ${processedPath}`);
        processedContent = JSON.parse(fs.readFileSync(processedPath, 'utf-8'));
    } else {
        console.log(`Processed file does not exist. Creating new one.`);
    }

    // Merge questions
    const papers = ["Paper 1", "Paper 2"];
    let addedCount = 0;
    let skippedCount = 0;

    for (const paper of papers) {
        const qaQuestions = qaContent.questions[paper] || [];
        // Initialize if missing
        if (!processedContent.questions[paper]) {
            processedContent.questions[paper] = [];
        }
        let processedQuestions = processedContent.questions[paper];

        // Create a map of existing questions for easy lookup
        const processedMap = new Map(processedQuestions.map((q: any) => [q.questionId, q]));

        for (const q of qaQuestions) {
            if (processedMap.has(q.questionId)) {
                // Skip existing question
                skippedCount++;
            } else {
                // Add new question
                processedMap.set(q.questionId, q);
                addedCount++;
            }
        }

        // Convert map back to array
        processedQuestions = Array.from(processedMap.values());

        // Sort questions by questionNumber
        processedQuestions.sort((a: any, b: any) => a.questionNumber - b.questionNumber);

        processedContent.questions[paper] = processedQuestions;
    }

    // Write back to processed file
    console.log(`Writing merged content to: ${processedPath}`);
    fs.writeFileSync(processedPath, JSON.stringify(processedContent, null, 2));
    console.log(`Successfully merged ${filename}: Added ${addedCount}, Skipped ${skippedCount} questions.`);
}

async function main() {
    const filename = process.argv[2];

    if (filename) {
        await mergeFile(filename);
    } else {
        console.log("No filename provided. Merging ALL files in QA directory...");
        const files = fs.readdirSync(QA_DIR).filter(f => f.endsWith('.json'));
        for (const file of files) {
            await mergeFile(file);
        }
    }
}

main();

