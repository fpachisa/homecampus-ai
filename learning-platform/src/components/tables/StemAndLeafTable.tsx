/**
 * StemAndLeafTable Component
 * 
 * Specialized renderer for stem-and-leaf diagrams
 * with proper formatting and monospace font for leaves
 */

import type { QuestionTable } from '../../types/examQuestions';

export default function StemAndLeafTable({ headers, rows, key, caption }: QuestionTable) {
    return (
        <div className="table-container stem-leaf-table">
            {caption && <div className="table-caption">{caption}</div>}

            <table>
                <thead>
                    <tr>
                        {headers.map((header, i) => (
                            <th
                                key={i}
                                className={i === 0 ? 'stem-col' : 'leaf-col'}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, i) => (
                        <tr key={i}>
                            <td className="stem-cell">{row[0]}</td>
                            <td className="leaf-cell">{row[1]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {key && (
                <div className="table-key">
                    <strong>Key:</strong> {key}
                </div>
            )}
        </div>
    );
}
