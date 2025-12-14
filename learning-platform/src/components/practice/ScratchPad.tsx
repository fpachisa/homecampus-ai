/**
 * ScratchPad Component
 *
 * Interactive work space for students to solve problems.
 * Features:
 * - Text mode: Multi-line textarea for calculations and notes
 * - Draw mode: Canvas for diagrams and visual problem-solving
 * - Auto-saves content per problem
 * - Responsive: Side-by-side on desktop, collapsible on mobile
 */

import { useState, useEffect, useMemo } from 'react';
import DrawingCanvas from './DrawingCanvas';
import type { ScratchPadData } from '../../types/practice';
import { useTheme } from '../../hooks/useTheme';

interface ScratchPadProps {
  problemId: string;
  initialData?: ScratchPadData;
  onChange: (data: ScratchPadData) => void;
  isMobile: boolean;
}

// Debounce utility
function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): T {
  let timeoutId: NodeJS.Timeout;
  return ((...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  }) as T;
}

const ScratchPad: React.FC<ScratchPadProps> = ({
  problemId,
  initialData,
  onChange,
  isMobile
}) => {
  // Theme for consistent styling
  const { theme } = useTheme();

  // Initialize state from props or defaults
  const [mode, setMode] = useState<'text' | 'draw'>(initialData?.mode || 'text');
  const [textContent, setTextContent] = useState(initialData?.textContent || '');
  const [drawingData, setDrawingData] = useState(initialData?.drawingData || '');
  const [isExpanded, setIsExpanded] = useState(!isMobile); // Always expanded on desktop

  // Drawing tool state
  const [color, setColor] = useState('#000000');
  const [penSize, setPenSize] = useState(4);
  const [tool, setTool] = useState<'pen' | 'eraser'>('pen');

  // Reset state when problem changes
  useEffect(() => {
    setMode(initialData?.mode || 'text');
    setTextContent(initialData?.textContent || '');
    setDrawingData(initialData?.drawingData || '');
  }, [problemId, initialData]);

  // Debounced save function
  const debouncedSave = useMemo(
    () => debounce((data: ScratchPadData) => {
      onChange(data);
    }, 500),
    [onChange]
  );

  // Save current state
  const saveState = () => {
    const data: ScratchPadData = {
      mode,
      textContent,
      drawingData,
      lastModified: new Date()
    };
    debouncedSave(data);
  };

  // Handle text content change
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setTextContent(newText);
    // Save immediately on text change
    const data: ScratchPadData = {
      mode,
      textContent: newText,
      drawingData,
      lastModified: new Date()
    };
    debouncedSave(data);
  };

  // Handle drawing save
  const handleDrawingSave = (imageData: string) => {
    setDrawingData(imageData);
    const data: ScratchPadData = {
      mode,
      textContent,
      drawingData: imageData,
      lastModified: new Date()
    };
    debouncedSave(data);
  };

  // Handle mode switch
  const handleModeSwitch = (newMode: 'text' | 'draw') => {
    setMode(newMode);
    // Save immediately with NEW mode (don't wait for state update)
    const data: ScratchPadData = {
      mode: newMode,  // Use parameter instead of stale state
      textContent,
      drawingData,
      lastModified: new Date()
    };
    debouncedSave(data);
  };

  // Handle clear
  const handleClear = () => {
    const confirmClear = window.confirm(
      'Are you sure you want to clear your work? This cannot be undone.'
    );

    if (confirmClear) {
      if (mode === 'text') {
        setTextContent('');
      } else {
        setDrawingData('');
        // Force canvas to reset by triggering re-render
      }
      saveState();
    }
  };

  // Color presets
  const colorPresets = [
    { color: '#000000', label: 'Black' },
    { color: '#2563eb', label: 'Blue' },
    { color: '#dc2626', label: 'Red' },
    { color: '#16a34a', label: 'Green' },
    { color: '#9333ea', label: 'Purple' },
    { color: '#ea580c', label: 'Orange' }
  ];

  // Pen sizes
  const penSizes = [
    { size: 2, label: 'Small' },
    { size: 4, label: 'Medium' },
    { size: 8, label: 'Large' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b-2 border-blue-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg">📝</span>
            <h3 className="text-lg font-semibold text-gray-800">Work Space</h3>
            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
              {mode === 'text' ? '✍️ Text' : '🎨 Draw'}
            </span>
          </div>

          {/* Mobile: Show collapse toggle */}
          {isMobile && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 hover:bg-blue-100 rounded transition"
              title={isExpanded ? 'Collapse' : 'Expand'}
            >
              {isExpanded ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Content (collapsible on mobile) */}
      {isExpanded && (
        <div className="p-4">
          {/* Toolbar */}
          <div className="mb-4 space-y-3">
            {/* Mode Toggle and Clear */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleModeSwitch('text')}
                className="flex-1 px-4 py-2 rounded-lg font-semibold transition"
                style={{
                  backgroundColor: mode === 'text' ? theme.colors.brand : theme.colors.interactive,
                  color: mode === 'text' ? '#ffffff' : theme.colors.textPrimary,
                }}
              >
                ✍️ Text
              </button>
              <button
                onClick={() => handleModeSwitch('draw')}
                className="flex-1 px-4 py-2 rounded-lg font-semibold transition"
                style={{
                  backgroundColor: mode === 'draw' ? theme.colors.brand : theme.colors.interactive,
                  color: mode === 'draw' ? '#ffffff' : theme.colors.textPrimary,
                }}
              >
                🎨 Draw
              </button>
              <button
                onClick={handleClear}
                className="px-4 py-2 rounded-lg font-semibold transition"
                style={{
                  backgroundColor: `${theme.colors.error}20`,
                  color: theme.colors.error,
                }}
                title="Clear work space"
              >
                🗑️ Clear
              </button>
            </div>

            {/* Drawing Tools (only visible in draw mode) */}
            {mode === 'draw' && (
              <div className="space-y-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                {/* Color Picker */}
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Color:</label>
                  <div className="flex items-center space-x-2">
                    {colorPresets.map((preset) => (
                      <button
                        key={preset.color}
                        onClick={() => {
                          setColor(preset.color);
                          setTool('pen');
                        }}
                        className={`w-8 h-8 rounded-full border-2 transition hover:scale-110 ${
                          color === preset.color && tool === 'pen'
                            ? 'border-blue-600 ring-2 ring-blue-200'
                            : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: preset.color }}
                        title={preset.label}
                      />
                    ))}
                    <div className="w-px h-8 bg-gray-300 mx-2" />
                    <button
                      onClick={() => setTool('eraser')}
                      className="px-3 py-1 rounded text-sm font-semibold transition"
                      style={{
                        backgroundColor: tool === 'eraser' ? theme.colors.brand : theme.colors.interactive,
                        color: tool === 'eraser' ? '#ffffff' : theme.colors.textPrimary,
                      }}
                      title="Eraser"
                    >
                      Eraser
                    </button>
                  </div>
                </div>

                {/* Pen Size */}
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Pen Size:</label>
                  <div className="flex items-center space-x-2">
                    {penSizes.map((preset) => (
                      <button
                        key={preset.size}
                        onClick={() => setPenSize(preset.size)}
                        className="px-4 py-2 rounded-lg text-sm font-semibold transition"
                        style={{
                          backgroundColor: penSize === preset.size ? theme.colors.brand : theme.colors.interactive,
                          color: penSize === preset.size ? '#ffffff' : theme.colors.textPrimary,
                        }}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Work Space Content */}
          <div className="work-space-content">
            {mode === 'text' ? (
              <textarea
                value={textContent}
                onChange={handleTextChange}
                placeholder="Show your work here... Write calculations, notes, or steps to solve the problem."
                className="w-full h-64 p-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none resize-none text-lined-bg font-mono text-base"
                style={{ lineHeight: '25px' }}
              />
            ) : (
              <DrawingCanvas
                key={problemId} // Force re-mount when problem changes
                initialImage={drawingData}
                onSave={handleDrawingSave}
                color={color}
                penSize={penSize}
                tool={tool}
              />
            )}
          </div>

          {/* Helper Text */}
          <div className="mt-2 text-xs text-gray-500 text-center">
            {mode === 'text'
              ? 'Type your calculations, notes, or step-by-step solution here'
              : 'Draw diagrams, sketches, or visual representations to help solve the problem'}
          </div>
        </div>
      )}
    </div>
  );
};

export default ScratchPad;
