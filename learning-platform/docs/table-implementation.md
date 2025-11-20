# Table Support Implementation

## Overview

This implementation adds structured table support for exam questions, replacing markdown tables with a dedicated data structure and React components.

## Architecture

### Type Definitions (`src/types/examQuestions.ts`)

- **`TableType`**: Enum for table types (stem-and-leaf, comparison, data, matrix, generic)
- **`QuestionTable`**: Main table interface with headers, rows, key/legend, and notes
- **`ExamQuestion`**: Updated question interface with optional `table` field

### Components (`src/components/tables/`)

1. **QuestionTable.tsx** - Main router component that delegates to specialized renderers
2. **StemAndLeafTable.tsx** - Specialized renderer for stem-and-leaf diagrams
3. **ComparisonTable.tsx** - For comparison and data tables
4. **GenericTable.tsx** - General-purpose fallback renderer

### Styling (`src/components/tables/QuestionTable.css`)

- Responsive design for mobile devices
- Dark mode support
- Print-friendly styles
- Specialized styling for each table type

### Migration (`scripts/migrate-tables.ts`)

Intelligent migration script that:
- Detects markdown tables in question stems
- Automatically infers table type based on content
- Extracts keys/legends
- Creates backups before modifications
- Supports dry-run mode for preview

## Usage

### Using the Components

```tsx
import { QuestionTable } from './components/tables';
import type { QuestionTable as QuestionTableType } from './types/examQuestions';

// In your question renderer:
function QuestionStem({ stem, table }: { stem: string; table?: QuestionTableType }) {
  return (
    <div>
      <Markdown>{stem}</Markdown>
      {table && <QuestionTable table={table} />}
    </div>
  );
}
```

### Running the Migration

```bash
# Dry run - preview changes without modifying files
npm run migrate-tables

# Or explicitly:
npm run migrate-tables -- --dry-run

# Process a specific file
npm run migrate-tables -- --file s1.json

# Execute and apply changes (creates backups automatically)
npm run migrate-tables -- --execute

# Execute on a specific file
npm run migrate-tables -- --file s1.json --execute
```

### JSON Structure

**Before (markdown in stem):**
```json
{
  "stem": "The following stem-and-leaf diagram...\n\n| Stem | Leaf |\n| --- | --- |\n| 6 | 8 9 |\n| 7 | 0 2 3 3 |",
  "hasDiagram": false
}
```

**After (structured table):**
```json
{
  "stem": "The following stem-and-leaf diagram shows the scores of students in a math test.",
  "table": {
    "type": "stem-and-leaf",
    "headers": ["Stem", "Leaf"],
    "rows": [
      ["6", "8 9"],
      ["7", "0 2 3 3 4 4 4 7 8"]
    ],
    "key": "6|8 represents 68 marks"
  },
  "hasDiagram": false
}
```

## Table Types

### 1. Stem-and-Leaf
- Monospace font for leaves
- Letter-spaced digits
- Centered stem column
- Special formatting for statistical data

### 2. Comparison
- Multi-column layout
- Centered headers
- Alternating row colors
- Good for package comparisons, pricing tables

### 3. Data
- Similar to comparison but optimized for numerical data
- Better spacing for numbers
- Supports footnotes

### 4. Matrix
- For mathematical matrices and grid data
- Consistent cell sizing

### 5. Generic
- Fallback for any other table type
- Basic table styling with good defaults

## Integration Points

### Components That Need Updates

1. **QuestionPreviewCard component** - Add table rendering
2. **QuestionBankViewer** - Support table display
3. **Practice mode** - Handle tables in PreWrittenQuestion
4. **Markdown renderer** - Import table CSS

### Example Integration in QuestionPreviewCard:

```tsx
import { QuestionTable } from './tables';

// In the component:
{question.stem && (
  <div>
    <Markdown>{question.stem}</Markdown>
    {question.table && <QuestionTable table={question.table} />}
  </div>
)}
```

## Migration Checklist

- [x] Create type definitions
- [x] Build React components
- [x] Add CSS styling
- [x] Create migration script
- [ ] Test migration on sample files
- [ ] Update existing components to use QuestionTable
- [ ] Migrate all JSON files
- [ ] Update Gemini processing script to generate structured tables
- [ ] Add validation for table structure
- [ ] Update documentation

## Benefits

1. **Consistency** - All tables render uniformly
2. **Accessibility** - Proper semantic HTML, ARIA support
3. **Responsive** - Mobile-friendly, scrollable tables
4. **Maintainability** - Easy to update styling globally
5. **Type Safety** - TypeScript ensures data integrity
6. **Future-proof** - Easy to add new table types

## Files Created

```
src/
├── types/
│   └── examQuestions.ts              # Type definitions
├── components/
│   └── tables/
│       ├── index.ts                  # Exports
│       ├── QuestionTable.tsx         # Main router
│       ├── QuestionTable.css         # Styling
│       ├── StemAndLeafTable.tsx      # Specialized renderer
│       ├── ComparisonTable.tsx       # Comparison tables
│       └── GenericTable.tsx          # Fallback renderer
└── scripts/
    └── migrate-tables.ts             # Migration script
```

## Next Steps

1. Test the migration script on a few files
2. Update QuestionPreviewCard to use the new components
3. Run full migration on all QA files
4. Update the Gemini processing script to generate structured tables
5. Add unit tests for components
6. Consider extending to questionText tables (in question parts)

## Notes

- Backups are created automatically in `QA-backup/` before any modifications
- The migration script is idempotent - safe to run multiple times
- Dark mode styling is included for future support
- Print styles ensure tables look good when printed
