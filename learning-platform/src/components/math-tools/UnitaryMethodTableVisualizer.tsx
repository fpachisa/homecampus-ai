/**
 * Unitary Method Table Visualizer
 *
 * Shows the Singapore Math unitary method for percentage calculations.
 * Displays a table with two columns (Percentage and Value) with operation
 * arrows showing multiplication/division relationships between rows.
 *
 * Critical for teaching:
 * - "If 10% is 5, what is 100%?"
 * - "If 30% is $240, what is 1%? What is 100%?"
 * - Percentage increase/decrease calculations
 *
 * DESIGN PRINCIPLES (AI-Friendly):
 * - Simple row definitions with percentage and value
 * - Operations specified as arrows between rows
 * - Support for highlighting answer rows
 * - Clean, readable table format
 */

import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import MathText from '../MathText';

// ============================================
// TYPE DEFINITIONS (AI-Friendly Structure)
// ============================================

interface TableRow {
  percentage: string;           // "10%", "30%", "1%", "100%"
  value: string;                // "5", "$240", "$8", "?", "$800"
  highlight?: boolean;          // Highlight this row (usually the answer)
  strikethrough?: boolean;      // Strike through (for showing cancellation)
}

interface TableOperation {
  fromRow: number;              // Source row index (0-based)
  toRow: number;                // Target row index (0-based)
  leftOp: string;               // Operation on left column: "×10", "÷30", "×100"
  rightOp: string;              // Operation on right column: "×10", "÷30", "×100"
}

interface UnitaryMethodTableVisualizerProps {
  /**
   * Title for the table
   * Example: "Finding the Whole", "Calculating Percentage Increase"
   */
  title?: string;

  /**
   * Column headers (default: ["Percentage", "Value"])
   * Example: ["Percentage", "Amount"], ["Number of medals", "Percentage"]
   */
  headers?: [string, string];

  /**
   * Rows of the table
   *
   * EXAMPLE - Finding 100% from 10%:
   * rows: [
   *   { percentage: "10%", value: "5" },
   *   { percentage: "100%", value: "50", highlight: true }
   * ]
   *
   * EXAMPLE - Two-step via 1%:
   * rows: [
   *   { percentage: "30%", value: "$240" },
   *   { percentage: "1%", value: "$8" },
   *   { percentage: "100%", value: "$800", highlight: true }
   * ]
   */
  rows: TableRow[];

  /**
   * Operations between rows (arrows with ×/÷)
   *
   * EXAMPLE - multiply both by 10:
   * operations: [
   *   { fromRow: 0, toRow: 1, leftOp: "×10", rightOp: "×10" }
   * ]
   *
   * EXAMPLE - two-step calculation:
   * operations: [
   *   { fromRow: 0, toRow: 1, leftOp: "÷30", rightOp: "÷30" },
   *   { fromRow: 1, toRow: 2, leftOp: "×100", rightOp: "×100" }
   * ]
   */
  operations: TableOperation[];

  /**
   * Show operation arrows between rows
   * Default: true
   */
  showArrows?: boolean;

  /**
   * Caption below the table
   */
  caption?: string;

  /**
   * Additional annotation text
   * Example: "The number is 50."
   */
  annotation?: string;

  /**
   * Swap column order (show Value first, then Percentage)
   * Useful for problems like "Number of medals | Percentage"
   * Default: false
   */
  swapColumns?: boolean;
}

// ============================================
// COMPONENT IMPLEMENTATION
// ============================================

const UnitaryMethodTableVisualizer: React.FC<UnitaryMethodTableVisualizerProps> = ({
  title,
  headers = ['Percentage', 'Value'],
  rows,
  operations,
  showArrows = true,
  caption,
  annotation,
  swapColumns = false
}) => {
  const { theme, isDark } = useTheme();

  // Validation
  if (!rows || rows.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500 dark:text-gray-400">
        No data to display
      </div>
    );
  }

  // Strip LaTeX escapes from currency
  const cleanValue = (value: string): string => {
    return value.replace(/\\+\$/g, '$');
  };

  // Get columns based on swap setting
  const getLeftColumn = (row: TableRow) => swapColumns ? row.value : row.percentage;
  const getRightColumn = (row: TableRow) => swapColumns ? row.percentage : row.value;
  const leftHeader = swapColumns ? headers[1] : headers[0];
  const rightHeader = swapColumns ? headers[0] : headers[1];

  // Find operations for a given row (operations going TO this row)
  const getOperationToRow = (rowIndex: number): TableOperation | undefined => {
    return operations.find(op => op.toRow === rowIndex);
  };

  // Colors
  const highlightBg = isDark ? 'rgba(34, 197, 94, 0.2)' : 'rgba(34, 197, 94, 0.15)';
  const highlightBorder = '#22c55e';
  const arrowColor = '#ec4899'; // pink-500

  return (
    <div
      className="my-4 p-4 rounded-lg border"
      style={{
        borderColor: theme.colors.border,
        backgroundColor: theme.colors.surface
      }}
    >
      {/* Title */}
      {title && (
        <h3
          className="text-base font-bold text-center mb-4"
          style={{ color: theme.colors.textPrimary }}
        >
          {title}
        </h3>
      )}

      {/* Table Container */}
      <div className="flex justify-center">
        <div className="inline-block">
          {/* Table */}
          <table
            className="border-collapse"
            style={{ borderColor: theme.colors.border }}
          >
            {/* Header */}
            <thead>
              <tr>
                <th
                  className="px-6 py-2 text-sm font-semibold border"
                  style={{
                    borderColor: theme.colors.border,
                    backgroundColor: isDark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.05)',
                    color: theme.colors.textPrimary
                  }}
                >
                  {leftHeader}
                </th>
                {/* Arrow column header (empty) */}
                {showArrows && operations.length > 0 && (
                  <th className="px-2" style={{ backgroundColor: 'transparent' }}></th>
                )}
                <th
                  className="px-6 py-2 text-sm font-semibold border"
                  style={{
                    borderColor: theme.colors.border,
                    backgroundColor: isDark ? 'rgba(0,0,0,0.2)' : 'rgba(0,0,0,0.05)',
                    color: theme.colors.textPrimary
                  }}
                >
                  {rightHeader}
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {rows.map((row, rowIndex) => {
                const operation = getOperationToRow(rowIndex);
                const hasArrowAbove = operation !== undefined;

                return (
                  <React.Fragment key={rowIndex}>
                    {/* Operation arrows (between rows) */}
                    {showArrows && hasArrowAbove && (
                      <tr>
                        <td className="relative h-8 text-center">
                          <div className="flex flex-col items-center justify-center h-full">
                            <span
                              className="text-xs font-semibold"
                              style={{ color: arrowColor }}
                            >
                              {swapColumns ? operation!.rightOp : operation!.leftOp}
                            </span>
                            <svg width="16" height="12" viewBox="0 0 16 12" className="mt-0.5">
                              <path
                                d="M8 0 L8 8 M4 4 L8 8 L12 4"
                                stroke={arrowColor}
                                strokeWidth="2"
                                fill="none"
                              />
                            </svg>
                          </div>
                        </td>
                        {/* Center column for arrows */}
                        {operations.length > 0 && (
                          <td className="px-2"></td>
                        )}
                        <td className="relative h-8 text-center">
                          <div className="flex flex-col items-center justify-center h-full">
                            <span
                              className="text-xs font-semibold"
                              style={{ color: arrowColor }}
                            >
                              {swapColumns ? operation!.leftOp : operation!.rightOp}
                            </span>
                            <svg width="16" height="12" viewBox="0 0 16 12" className="mt-0.5">
                              <path
                                d="M8 0 L8 8 M4 4 L8 8 L12 4"
                                stroke={arrowColor}
                                strokeWidth="2"
                                fill="none"
                              />
                            </svg>
                          </div>
                        </td>
                      </tr>
                    )}

                    {/* Data row */}
                    <tr>
                      <td
                        className="px-6 py-3 text-center border text-sm font-medium"
                        style={{
                          borderColor: theme.colors.border,
                          backgroundColor: row.highlight ? highlightBg : 'transparent',
                          borderLeftColor: row.highlight ? highlightBorder : theme.colors.border,
                          borderLeftWidth: row.highlight ? 3 : 1,
                          color: theme.colors.textPrimary,
                          textDecoration: row.strikethrough ? 'line-through' : 'none'
                        }}
                      >
                        {cleanValue(getLeftColumn(row))}
                      </td>
                      {/* Center column spacer */}
                      {showArrows && operations.length > 0 && (
                        <td className="px-2"></td>
                      )}
                      <td
                        className="px-6 py-3 text-center border text-sm font-medium"
                        style={{
                          borderColor: theme.colors.border,
                          backgroundColor: row.highlight ? highlightBg : 'transparent',
                          borderRightColor: row.highlight ? highlightBorder : theme.colors.border,
                          borderRightWidth: row.highlight ? 3 : 1,
                          color: row.highlight ? highlightBorder : theme.colors.textPrimary,
                          fontWeight: row.highlight ? 700 : 500,
                          textDecoration: row.strikethrough ? 'line-through' : 'none'
                        }}
                      >
                        {cleanValue(getRightColumn(row))}
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Annotation */}
      {annotation && (
        <div
          className="text-sm font-semibold text-center mt-4"
          style={{ color: theme.colors.brand }}
        >
          <MathText>{cleanValue(annotation)}</MathText>
        </div>
      )}

      {/* Caption */}
      {caption && (
        <div
          className="text-sm mt-3 pt-3 border-t text-center"
          style={{
            borderColor: theme.colors.border,
            color: theme.colors.textSecondary
          }}
        >
          <MathText>{caption}</MathText>
        </div>
      )}
    </div>
  );
};

export default UnitaryMethodTableVisualizer;
