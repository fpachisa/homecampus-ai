/**
 * QuestionTable Component
 * 
 * Main router component that renders different table types
 * based on the table.type property
 */

import type { QuestionTable as QuestionTableType } from '../../types/examQuestions';
import StemAndLeafTable from './StemAndLeafTable';
import ComparisonTable from './ComparisonTable';
import GenericTable from './GenericTable';
import './QuestionTable.css';

interface QuestionTableProps {
    table: QuestionTableType;
}

export default function QuestionTable({ table }: QuestionTableProps) {
    // Render the appropriate table component based on type
    switch (table.type) {
        case 'stem-and-leaf':
            return <StemAndLeafTable {...table} />;

        case 'comparison':
        case 'data':
            return <ComparisonTable {...table} />;

        case 'matrix':
        case 'generic':
        default:
            return <GenericTable {...table} />;
    }
}
