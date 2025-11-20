/**
 * ComparisonTable Component
 * 
 * Renders comparison and data tables with proper alignment
 * and responsive design
 */

import type { QuestionTable } from '../../types/examQuestions';
import MathText from '../MathText';

export default function ComparisonTable({ headers, rows, key, caption, notes }: QuestionTable) {
    return (
        <div className="table-container comparison-table">
            {caption && <div className="table-caption">{caption}</div>}

            <div className="table-wrapper">
                <table>
                    <thead>
                        <tr>
                            {headers.map((header, i) => (
                                <th key={i}><MathText>{String(header)}</MathText></th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, i) => (
                            <tr key={i}>
                                {row.map((cell, j) => (
                                    <td key={j}><MathText>{String(cell)}</MathText></td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {key && (
                <div className="table-key">
                    <strong>Key:</strong> {key}
                </div>
            )}

            {notes && notes.length > 0 && (
                <div className="table-notes">
                    {notes.map((note, i) => (
                        <div key={i} className="table-note">
                            {note}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
