/**
 * Two-Way Table Visualizer (Contingency Table)
 *
 * Interactive two-way table for categorical data and conditional probability.
 * Simplified AI-friendly parameter structure.
 */

import React from 'react';
import MathText from '../MathText';

interface TwoWayTableProps {
  rowLabels: string[];
  columnLabels: string[];
  data: number[][];  // 2D array: data[row][col]
  highlightCell?: { row: number; col: number };
  highlightRow?: number;
  highlightColumn?: number;
  showTotals?: boolean;
  showProbabilities?: boolean;
  caption?: string;
}

const TwoWayTableVisualizer: React.FC<TwoWayTableProps> = ({
  rowLabels,
  columnLabels,
  data,
  highlightCell,
  highlightRow,
  highlightColumn,
  showTotals = true,
  showProbabilities = false,
  caption
}) => {
  // Calculate totals
  const rowTotals = data.map(row => row.reduce((sum, val) => sum + val, 0));
  const columnTotals = columnLabels.map((_, colIdx) =>
    data.reduce((sum, row) => sum + row[colIdx], 0)
  );
  const grandTotal = rowTotals.reduce((sum, val) => sum + val, 0);

  // Check if cell/row/column should be highlighted
  const isCellHighlighted = (rowIdx: number, colIdx: number): boolean => {
    if (highlightCell && highlightCell.row === rowIdx && highlightCell.col === colIdx) {
      return true;
    }
    if (highlightRow !== undefined && highlightRow === rowIdx) {
      return true;
    }
    if (highlightColumn !== undefined && highlightColumn === colIdx) {
      return true;
    }
    return false;
  };

  const isRowHeaderHighlighted = (rowIdx: number): boolean => {
    return highlightRow !== undefined && highlightRow === rowIdx;
  };

  const isColumnHeaderHighlighted = (colIdx: number): boolean => {
    return highlightColumn !== undefined && highlightColumn === colIdx;
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="overflow-x-auto">
        <table className="border-collapse mx-auto" style={{ minWidth: '400px' }}>
          {/* Column headers */}
          <thead>
            <tr>
              <th className="border-2 border-gray-400 px-4 py-2 bg-gray-100 font-bold text-sm">
                {/* Empty top-left cell */}
              </th>
              {columnLabels.map((label, colIdx) => (
                <th
                  key={colIdx}
                  className="border-2 border-gray-400 px-4 py-2 text-center font-bold text-sm"
                  style={{
                    backgroundColor: isColumnHeaderHighlighted(colIdx) ? '#fef3c7' : '#f3f4f6',
                    fontWeight: isColumnHeaderHighlighted(colIdx) ? 'bold' : 'normal'
                  }}
                >
                  {label}
                </th>
              ))}
              {showTotals && (
                <th className="border-2 border-gray-400 px-4 py-2 bg-blue-50 text-center font-bold text-sm">
                  Total
                </th>
              )}
            </tr>
          </thead>

          {/* Data rows */}
          <tbody>
            {rowLabels.map((rowLabel, rowIdx) => (
              <tr key={rowIdx}>
                {/* Row header */}
                <th
                  className="border-2 border-gray-400 px-4 py-2 text-left font-bold text-sm"
                  style={{
                    backgroundColor: isRowHeaderHighlighted(rowIdx) ? '#fef3c7' : '#f3f4f6',
                    fontWeight: isRowHeaderHighlighted(rowIdx) ? 'bold' : 'normal'
                  }}
                >
                  {rowLabel}
                </th>

                {/* Data cells */}
                {data[rowIdx].map((value, colIdx) => {
                  const highlighted = isCellHighlighted(rowIdx, colIdx);
                  const probability = grandTotal > 0 ? value / grandTotal : 0;

                  return (
                    <td
                      key={colIdx}
                      className="border-2 border-gray-400 px-4 py-3 text-center"
                      style={{
                        backgroundColor: highlighted ? '#fde68a' : 'white',
                        fontWeight: highlighted ? 'bold' : 'normal'
                      }}
                    >
                      <div className="text-lg">{value}</div>
                      {showProbabilities && (
                        <div className="text-xs text-gray-600 mt-1">
                          ({probability.toFixed(3)})
                        </div>
                      )}
                    </td>
                  );
                })}

                {/* Row total */}
                {showTotals && (
                  <td className="border-2 border-gray-400 px-4 py-3 bg-blue-50 text-center font-bold">
                    {rowTotals[rowIdx]}
                    {showProbabilities && (
                      <div className="text-xs text-gray-600 mt-1 font-normal">
                        ({(rowTotals[rowIdx] / grandTotal).toFixed(3)})
                      </div>
                    )}
                  </td>
                )}
              </tr>
            ))}

            {/* Column totals row */}
            {showTotals && (
              <tr>
                <th className="border-2 border-gray-400 px-4 py-2 bg-blue-50 text-left font-bold text-sm">
                  Total
                </th>
                {columnTotals.map((total, colIdx) => (
                  <td
                    key={colIdx}
                    className="border-2 border-gray-400 px-4 py-3 bg-blue-50 text-center font-bold"
                  >
                    {total}
                    {showProbabilities && (
                      <div className="text-xs text-gray-600 mt-1 font-normal">
                        ({(total / grandTotal).toFixed(3)})
                      </div>
                    )}
                  </td>
                ))}
                {/* Grand total */}
                <td className="border-2 border-gray-400 px-4 py-3 bg-blue-100 text-center font-bold text-lg">
                  {grandTotal}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Caption */}
      {caption && (
        <div className="text-sm text-center text-gray-900 dark:text-gray-100 max-w-2xl px-4 mt-2 font-medium">
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default TwoWayTableVisualizer;
