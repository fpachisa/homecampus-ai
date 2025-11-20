import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const RAW_DIR = path.resolve(process.cwd(), 'public/curriculum-content/o-level/exam-papers/raw');
const QA_DIR = path.resolve(process.cwd(), 'public/curriculum-content/o-level/exam-papers/QA');
const API_KEY = process.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
    console.error('Error: VITE_GEMINI_API_KEY not found in .env file');
    process.exit(1);
}

// Initialize Gemini (New SDK)
const ai = new GoogleGenAI({ apiKey: API_KEY });
const MODEL_NAME = "gemini-3-pro-preview";

// Ensure QA directory exists
if (!fs.existsSync(QA_DIR)) {
    fs.mkdirSync(QA_DIR, { recursive: true });
}

// Helper to generate unique ID suffix using timestamp
// Format: DDMMHHMMSS (e.g., 2011143045 = Nov 20, 14:30:45)
const getUniqueIdSuffix = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');
    return `${day}${month}${hour}${minute}${second}`; // e.g. 2011143045
};

const UNIQUE_ID_SUFFIX = getUniqueIdSuffix();

// Process a single file
async function processFile(filename: string) {
    console.log(`Processing ${filename}...`);
    const filePath = path.join(RAW_DIR, filename);
    const rawContent = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(rawContent);
    const topicId = jsonData.topicId;

    const prompt = `
    You are an expert tutor for O-level Singapore math and great at creating solutions in provided json format.
    
    I will give you a JSON object containing exam questions segregated by O-level topic ids.
    
    Your task is to:
    1.  **Add Solutions**: For EACH question part (within "parts"), add a "solution" object with "finalAnswer" and "stepByStep" array.
        Structure:
        "solution": {
          "finalAnswer": "The final answer string",
          "stepByStep": [
            {
              "step": 1,
              "explanation": "Brief explanation",
              "working": "Mathematical working",
              "reasoning": "Pedagogical reasoning"
            },
            ...
          ]
        }
        
    2.  **Generate New Questions**: Create 2-3 NEW questions for "Paper 1" and "Paper 2" (if applicable) with the SAME complexity level and similar structure to the existing ones.
        - Use the "questionNumber" starting from 101.
        - Generate "questionId" using format: "${topicId}-gemini-${UNIQUE_ID_SUFFIX}-{paper}-q101" (e.g., N2-gemini-2011143045-p1-q101).
        - Ensure these new questions also have the full "solution" structure.
        - Add these new questions to the respective "Paper 1" or "Paper 2" arrays.

    CRITICAL: FORMATTING RULES
    use unicode as much as possible. Use LaTeX where there is no unicode support.
    LaTeX: $\\frac{5}{6}$ ALWAYS use $..$ delimiters.
    
    Input JSON:
    ${JSON.stringify(jsonData)}

    Return ONLY the valid JSON object with the updates. Do not wrap in markdown code blocks.
  `;

    try {
        const response = await ai.models.generateContent({
            model: MODEL_NAME,
            contents: prompt, // Simplified to string as per GeminiProvider.ts
            config: { // Changed from generationConfig to config
                temperature: 0.4,
            }
        });

        let text = response.text?.trim() || ''; // Changed from response.response.text() to response.text

        if (!text) {
            throw new Error('Empty response from Gemini API');
        }

        // Clean up markdown code blocks if present
        text = text.replace(/^```json\n/, '').replace(/\n```$/, '');

        // Attempt to clean common JSON errors
        // 1. Remove control characters that are not newlines or tabs
        text = text.replace(/[\x00-\x09\x0B-\x1F\x7F]/g, '');

        // 2. Fix bad escaped characters (e.g. \l in LaTeX)
        // We want to replace \x with \\x if x is not a valid escape char and not already escaped.
        // Use negative lookbehind to ensure not preceded by \
        // Use negative lookahead to ensure not followed by valid escape chars
        text = text.replace(/(?<!\\)\\(?![\\"/bfnrtu])/g, '\\\\');

        let processedData;
        try {
            processedData = JSON.parse(text);
        } catch (e) {
            console.log("JSON Parse Error. Attempting to fix...");
            // Fallback: Try to escape unescaped newlines in strings (very basic heuristic)
            // This is risky but might work for simple cases. 
            // Better approach: just log the text for debugging if it fails again.
            console.log("Failed JSON text snippet:", text.substring(0, 500) + "...");
            throw e;
        }

        // Write to QA folder
        const outputPath = path.join(QA_DIR, filename);
        fs.writeFileSync(outputPath, JSON.stringify(processedData, null, 2));
        console.log(`✓ Saved processed file to ${outputPath}`);

    } catch (error) {
        console.error(`Error processing ${filename}:`, error);
    }
}

// Main function
async function main() {
    const args = process.argv.slice(2);
    let filesToProcess = [];

    if (args.length > 0) {
        filesToProcess = args;
    } else {
        const files = fs.readdirSync(RAW_DIR);
        // Filter for topic files (e.g., n1.json, s2.json)
        filesToProcess = files.filter(file => /^[a-z][0-9]\.json$/i.test(file));
    }

    console.log(`Found ${filesToProcess.length} files to process.`);

    for (const file of filesToProcess) {
        await processFile(file);
        // Add a small delay to avoid rate limits
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
}

main().catch(console.error);
