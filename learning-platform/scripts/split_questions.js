import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
if (args.length === 0) {
    console.error('Please provide the source file path as an argument.');
    process.exit(1);
}
const SOURCE_FILE = args[0];
const TARGET_DIR = '/Users/farhat/Documents/AI Systems/AITutor/aicampus/learning-platform/public/curriculum-content/o-level/exam-papers/raw/';

function splitQuestions() {
    try {
        const rawData = fs.readFileSync(SOURCE_FILE, 'utf8');
        const data = JSON.parse(rawData);
        const questions = data.questions;

        if (!questions || !Array.isArray(questions)) {
            console.error('Invalid source file format: "questions" array missing.');
            return;
        }

        const questionsByTopic = {};

        // Group questions by topicID
        questions.forEach(q => {
            const topicID = q.topicID;
            if (!topicID) {
                console.warn(`Question ${q.questionNumber} (ID: ${q.questionId}) has no topicID. Skipping.`);
                return;
            }

            if (!questionsByTopic[topicID]) {
                questionsByTopic[topicID] = [];
            }
            questionsByTopic[topicID].push(q);
        });

        // Process each topic
        for (const topicID of Object.keys(questionsByTopic)) {
            const filename = `${topicID.toLowerCase()}.json`;
            const filePath = path.join(TARGET_DIR, filename);

            let topicData = {
                topicId: topicID,
                questions: {
                    "Paper 1": [],
                    "Paper 2": []
                }
            };

            if (fs.existsSync(filePath)) {
                try {
                    const existingContent = fs.readFileSync(filePath, 'utf8');
                    topicData = JSON.parse(existingContent);
                    // Ensure structure exists
                    if (!topicData.questions) topicData.questions = {};
                    if (!topicData.questions["Paper 1"]) topicData.questions["Paper 1"] = [];
                    if (!topicData.questions["Paper 2"]) topicData.questions["Paper 2"] = [];
                } catch (err) {
                    console.error(`Error reading existing file ${filename}:`, err);
                    // Proceed with new structure if read fails? Or abort? 
                    // Safer to abort or backup. For now, let's assume we can overwrite/fix if it's just empty or malformed.
                    // But let's log and continue with the initialized empty structure for safety of this run, 
                    // though in production we might want to stop.
                }
            }

            const newQuestions = questionsByTopic[topicID];
            let addedCount = 0;

            newQuestions.forEach(q => {
                const paper = q.paper; // "Paper 1" or "Paper 2"
                if (paper === "Paper 1" || paper === "Paper 2") {
                    // Check for duplicates based on questionId
                    const existingIndex = topicData.questions[paper].findIndex(eq => eq.questionId === q.questionId);
                    if (existingIndex !== -1) {
                        // Update existing question
                        topicData.questions[paper][existingIndex] = q;
                    } else {
                        // Add new question
                        topicData.questions[paper].push(q);
                    }
                    addedCount++;
                } else {
                    console.warn(`Question ${q.questionId} has invalid paper: ${paper}. Skipping.`);
                }
            });

            fs.writeFileSync(filePath, JSON.stringify(topicData, null, 2));
            console.log(`Updated ${filename}: Added/Updated ${addedCount} questions.`);
        }

        console.log('Splitting complete.');

    } catch (err) {
        console.error('Error processing file:', err);
    }
}

splitQuestions();
