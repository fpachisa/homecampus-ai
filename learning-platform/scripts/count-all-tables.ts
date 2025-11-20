import fs from 'fs';
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const PROCESSED_DIR = path.join(__dirname, '../public/curriculum-content/o-level/exam-papers/processed');

const files = fs.readdirSync(PROCESSED_DIR).filter((f: string) => f.endsWith('.json'));

console.log('🔍 Searching for ALL markdown tables in processed directory:\n');
console.log('='.repeat(80));

let totalTables = 0;
const tablesByFile: Record<string, number> = {};

for (const file of files) {
    const filePath = path.join(PROCESSED_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Count markdown tables using regex
    const tableRegex = /\|([^\n]+)\|\n\|[\s\-:|]+\|\n((?:\|[^\n]+\|\n?)+)/g;
    const matches = content.match(tableRegex);
    
    if (matches && matches.length > 0) {
        tablesByFile[file] = matches.length;
        totalTables += matches.length;
        console.log(`📄 ${file}: ${matches.length} table(s)`);
    }
}

console.log('\n' + '='.repeat(80));
console.log(`\n📊 Total markdown tables found: ${totalTables}`);
console.log(`📁 Files with tables: ${Object.keys(tablesByFile).length}`);
