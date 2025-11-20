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
                console.log(`Skipping duplicate question ID: ${q.questionId}`);
            }
        }

        // Sort questions by questionNumber (optional, but good for organization)
        processedQuestions.sort((a: any, b: any) => a.questionNumber - b.questionNumber);

        processedContent.questions[paper] = processedQuestions;
    }

    // Write back to processed file
    console.log(`Writing merged content to: ${processedPath}`);
    fs.writeFileSync(processedPath, JSON.stringify(processedContent, null, 2));
    console.log(`Successfully merged ${addedCount} questions from QA to Processed.`);
}

// Get filename from command line args
const filename = process.argv[2];

if (!filename) {
    console.error("Please provide a filename (e.g., g4.json)");
    process.exit(1);
}

mergeFile(filename);
