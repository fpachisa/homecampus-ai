import React, { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { X, Grid3X3, Check } from 'lucide-react';

interface MatrixBuilderModalProps {
    isOpen: boolean;
    onClose: () => void;
    onInsert: (latex: string) => void;
}

export const MatrixBuilderModal: React.FC<MatrixBuilderModalProps> = ({
    isOpen,
    onClose,
    onInsert,
}) => {
    const { theme } = useTheme();
    const [rows, setRows] = useState(2);
    const [cols, setCols] = useState(2);
    const [values, setValues] = useState<string[][]>([]);

    // Initialize/Update values grid when dimensions change
    useEffect(() => {
        setValues(prev => {
            const newValues = Array(rows).fill(null).map((_, r) =>
                Array(cols).fill(null).map((_, c) => {
                    // Preserve existing values if possible
                    if (prev[r] && prev[r][c] !== undefined) {
                        return prev[r][c];
                    }
                    return '';
                })
            );
            return newValues;
        });
    }, [rows, cols]);

    const handleValueChange = (row: number, col: number, val: string) => {
        const newValues = [...values];
        newValues[row] = [...newValues[row]];
        newValues[row][col] = val;
        setValues(newValues);
    };

    const handleInsert = () => {
        // Generate LaTeX
        // \begin{pmatrix} a & b \\ c & d \end{pmatrix}
        const rowsLatex = values.map(row => row.join(' & ')).join(' \\\\ ');
        const latex = `\\begin{pmatrix} ${rowsLatex} \\end{pmatrix}`;
        onInsert(latex);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
            onClick={onClose}
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(4px)',
            }}
        >
            <div
                className="relative max-w-md w-full rounded-2xl p-6 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                style={{
                    backgroundColor: theme.colors.primary,
                    border: `1px solid ${theme.colors.border}`,
                    boxShadow: theme.shadows.xl,
                }}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div
                            className="p-2 rounded-lg"
                            style={{ backgroundColor: `${theme.colors.brand}20` }}
                        >
                            <Grid3X3 size={24} color={theme.colors.brand} />
                        </div>
                        <h2
                            className="text-xl font-bold"
                            style={{ color: theme.colors.textPrimary }}
                        >
                            Matrix Builder
                        </h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/5"
                        style={{ color: theme.colors.textMuted }}
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Controls */}
                <div className="flex gap-4 mb-6">
                    <div className="flex-1">
                        <label className="block text-xs font-medium mb-1.5" style={{ color: theme.colors.textSecondary }}>
                            Rows
                        </label>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4].map(n => (
                                <button
                                    key={n}
                                    onClick={() => setRows(n)}
                                    className={`flex-1 py-1.5 rounded-md text-sm font-medium transition-all ${rows === n ? 'ring-2 ring-offset-1' : ''
                                        }`}
                                    style={{
                                        backgroundColor: rows === n ? theme.colors.brand : theme.colors.chat,
                                        color: rows === n ? '#fff' : theme.colors.textPrimary,
                                        borderColor: theme.colors.border,
                                        borderWidth: rows === n ? 0 : 1,
                                    }}
                                >
                                    {n}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1">
                        <label className="block text-xs font-medium mb-1.5" style={{ color: theme.colors.textSecondary }}>
                            Columns
                        </label>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4].map(n => (
                                <button
                                    key={n}
                                    onClick={() => setCols(n)}
                                    className={`flex-1 py-1.5 rounded-md text-sm font-medium transition-all ${cols === n ? 'ring-2 ring-offset-1' : ''
                                        }`}
                                    style={{
                                        backgroundColor: cols === n ? theme.colors.brand : theme.colors.chat,
                                        color: cols === n ? '#fff' : theme.colors.textPrimary,
                                        borderColor: theme.colors.border,
                                        borderWidth: cols === n ? 0 : 1,
                                    }}
                                >
                                    {n}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div
                    className="mb-6 p-4 rounded-xl overflow-x-auto"
                    style={{ backgroundColor: theme.colors.secondary }}
                >
                    <div
                        className="grid gap-2 mx-auto w-fit"
                        style={{
                            gridTemplateColumns: `repeat(${cols}, minmax(60px, 1fr))`
                        }}
                    >
                        {values.map((row, r) => (
                            row.map((val, c) => (
                                <input
                                    key={`${r}-${c}`}
                                    value={val}
                                    onChange={(e) => handleValueChange(r, c, e.target.value)}
                                    placeholder="0"
                                    className="w-full h-10 text-center rounded-lg text-sm font-medium focus:outline-none focus:ring-2 transition-all"
                                    style={{
                                        backgroundColor: theme.colors.primary,
                                        border: `1px solid ${theme.colors.border}`,
                                        color: theme.colors.textPrimary,
                                    }}
                                    onFocus={(e) => e.target.style.borderColor = theme.colors.brand}
                                    onBlur={(e) => e.target.style.borderColor = theme.colors.border}
                                />
                            ))
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 py-2.5 rounded-xl font-medium transition-colors"
                        style={{
                            color: theme.colors.textSecondary,
                            backgroundColor: theme.colors.chat,
                        }}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleInsert}
                        className="flex-1 py-2.5 rounded-xl font-medium text-white shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 transition-transform active:scale-95"
                        style={{
                            background: theme.gradients.brand,
                        }}
                    >
                        <Check size={18} />
                        Insert Matrix
                    </button>
                </div>
            </div>
        </div>
    );
};
