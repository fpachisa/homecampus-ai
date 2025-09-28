import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import type { LayoutActions } from './MainLayout';

interface RightPanelProps {
  isCollapsed: boolean;
  width: number;
  layoutActions: LayoutActions;
}

interface Note {
  id: string;
  content: string;
  timestamp: Date;
}

const RightPanel: React.FC<RightPanelProps> = ({ isCollapsed, width, layoutActions }) => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'scratchpad' | 'visualizer' | 'notes'>('scratchpad');
  const [scratchContent, setScratchContent] = useState('');
  const [visualizerFraction, setVisualizerFraction] = useState('1/2');
  const [visualizerDivisor, setVisualizerDivisor] = useState('3');
  const [notes, setNotes] = useState<Note[]>([
    { id: '1', content: '1/2 ÷ 3 = 1/6', timestamp: new Date() },
    { id: '2', content: 'When dividing fractions, multiply by reciprocal', timestamp: new Date() },
  ]);

  const tabs = [
    { id: 'scratchpad', label: 'Scratch Pad', icon: '📝' },
    { id: 'visualizer', label: 'Visualizer', icon: '📊' },
    { id: 'notes', label: 'Notes', icon: '📋' },
  ];

  if (isCollapsed) {
    return (
      <div
        className="h-full flex flex-col items-center py-4 space-y-4 relative z-10"
        style={{
          width: 60,
          background: theme.glass.background,
          borderLeft: `1px solid ${theme.glass.border}`,
          backdropFilter: theme.glass.backdrop,
        }}
      >
        {/* Expand Button */}
        <button
          onClick={layoutActions.toggleRightPanel}
          className="p-3 rounded-lg transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: theme.colors.interactive,
            color: theme.colors.textSecondary,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.brand;
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.interactive;
            e.currentTarget.style.color = theme.colors.textSecondary;
          }}
          title="Expand Scratch Pad"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </button>

        {/* Tool Icons */}
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id as any);
              layoutActions.toggleRightPanel();
            }}
            className="p-2 rounded-lg transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: activeTab === tab.id ? theme.colors.brand : theme.colors.interactive,
              color: activeTab === tab.id ? '#ffffff' : theme.colors.textSecondary,
            }}
            title={tab.label}
          >
            <span className="text-lg">{tab.icon}</span>
          </button>
        ))}
      </div>
    );
  }

  const addNote = () => {
    if (scratchContent.trim()) {
      const newNote: Note = {
        id: Date.now().toString(),
        content: scratchContent.trim(),
        timestamp: new Date(),
      };
      setNotes([newNote, ...notes]);
      setScratchContent('');
    }
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const calculateFractionDivision = () => {
    try {
      // Simple fraction parsing for visualization
      const [num1, den1] = visualizerFraction.split('/').map(n => parseInt(n.trim()));
      const divisor = parseInt(visualizerDivisor.trim());

      if (isNaN(num1) || isNaN(den1) || isNaN(divisor) || den1 === 0 || divisor === 0) {
        return null;
      }

      // Calculate result: (num1/den1) ÷ divisor = num1/(den1*divisor)
      const resultNum = num1;
      const resultDen = den1 * divisor;

      return { num1, den1, divisor, resultNum, resultDen };
    } catch {
      return null;
    }
  };

  const visualizationResult = calculateFractionDivision();

  return (
    <div
      className="h-full flex flex-col relative z-10 animate-slide-up"
      style={{
        width,
        background: theme.glass.background,
        borderLeft: `1px solid ${theme.glass.border}`,
        backdropFilter: theme.glass.backdrop,
        boxShadow: theme.shadows.lg,
      }}
    >
      {/* Panel Header */}
      <div
        className="flex items-center justify-between p-4 border-b"
        style={{ borderColor: theme.colors.border }}
      >
        <h2 className="font-semibold text-sm" style={{ color: theme.colors.textPrimary }}>
          Workspace
        </h2>

        {/* Collapse Button */}
        <button
          onClick={layoutActions.toggleRightPanel}
          className="p-1.5 rounded-md transition-colors duration-200"
          style={{
            color: theme.colors.textSecondary,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.interactive;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
          title="Collapse workspace"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Tab Navigation */}
      <div
        className="flex border-b"
        style={{ borderColor: theme.colors.border }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 px-3 py-2 text-xs font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? 'border-b-2'
                : ''
            }`}
            style={{
              color: activeTab === tab.id ? theme.colors.textAccent : theme.colors.textMuted,
              borderColor: activeTab === tab.id ? theme.colors.brand : 'transparent',
              backgroundColor: activeTab === tab.id ? theme.colors.interactive : 'transparent',
            }}
          >
            <span className="mr-1">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'scratchpad' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium mb-2" style={{ color: theme.colors.textMuted }}>
                Work Area
              </label>
              <textarea
                value={scratchContent}
                onChange={(e) => setScratchContent(e.target.value)}
                placeholder="Write your calculations here..."
                className="w-full h-32 px-3 py-2 text-sm rounded-md border-none outline-none resize-none"
                style={{
                  backgroundColor: theme.colors.interactive,
                  color: theme.colors.textPrimary,
                }}
              />
            </div>

            <div className="flex space-x-2">
              <button
                onClick={addNote}
                disabled={!scratchContent.trim()}
                className="flex-1 px-3 py-2 text-xs font-medium rounded-md transition-colors duration-200 disabled:opacity-50"
                style={{
                  backgroundColor: theme.colors.brand,
                  color: '#ffffff',
                }}
              >
                Save to Notes
              </button>
              <button
                onClick={() => setScratchContent('')}
                className="px-3 py-2 text-xs font-medium rounded-md transition-colors duration-200"
                style={{
                  backgroundColor: theme.colors.interactive,
                  color: theme.colors.textSecondary,
                }}
              >
                Clear
              </button>
            </div>

            {/* Quick Tools */}
            <div className="space-y-2">
              <h4 className="text-xs font-medium" style={{ color: theme.colors.textMuted }}>
                Quick Tools
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    setVisualizerFraction('1/2');
                    setVisualizerDivisor('3');
                  }}
                  className="p-3 text-xs font-medium transition-all duration-300"
                  style={{
                    backgroundColor: theme.colors.interactive,
                    color: theme.colors.textSecondary,
                    borderRadius: theme.radius.md,
                    boxShadow: theme.shadows.sm,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = theme.shadows.md;
                    e.currentTarget.style.backgroundColor = theme.colors.brand;
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = theme.shadows.sm;
                    e.currentTarget.style.backgroundColor = theme.colors.interactive;
                    e.currentTarget.style.color = theme.colors.textSecondary;
                  }}
                >
                  1/2 ÷ 3
                </button>
                <button
                  onClick={() => {
                    setVisualizerFraction('2/3');
                    setVisualizerDivisor('4');
                  }}
                  className="p-3 text-xs font-medium transition-all duration-300"
                  style={{
                    backgroundColor: theme.colors.interactive,
                    color: theme.colors.textSecondary,
                    borderRadius: theme.radius.md,
                    boxShadow: theme.shadows.sm,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = theme.shadows.md;
                    e.currentTarget.style.backgroundColor = theme.colors.brand;
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = theme.shadows.sm;
                    e.currentTarget.style.backgroundColor = theme.colors.interactive;
                    e.currentTarget.style.color = theme.colors.textSecondary;
                  }}
                >
                  2/3 ÷ 4
                </button>
                <button
                  onClick={() => {
                    setVisualizerFraction('3/4');
                    setVisualizerDivisor('2');
                  }}
                  className="p-3 text-xs font-medium transition-all duration-300"
                  style={{
                    backgroundColor: theme.colors.interactive,
                    color: theme.colors.textSecondary,
                    borderRadius: theme.radius.md,
                    boxShadow: theme.shadows.sm,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = theme.shadows.md;
                    e.currentTarget.style.backgroundColor = theme.colors.brand;
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = theme.shadows.sm;
                    e.currentTarget.style.backgroundColor = theme.colors.interactive;
                    e.currentTarget.style.color = theme.colors.textSecondary;
                  }}
                >
                  3/4 ÷ 2
                </button>
                <button
                  onClick={() => {
                    setVisualizerFraction('5/6');
                    setVisualizerDivisor('5');
                  }}
                  className="p-3 text-xs font-medium transition-all duration-300"
                  style={{
                    backgroundColor: theme.colors.interactive,
                    color: theme.colors.textSecondary,
                    borderRadius: theme.radius.md,
                    boxShadow: theme.shadows.sm,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = theme.shadows.md;
                    e.currentTarget.style.backgroundColor = theme.colors.brand;
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = theme.shadows.sm;
                    e.currentTarget.style.backgroundColor = theme.colors.interactive;
                    e.currentTarget.style.color = theme.colors.textSecondary;
                  }}
                >
                  5/6 ÷ 5
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'visualizer' && (
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-medium mb-3" style={{ color: theme.colors.textMuted }}>
                Fraction Visualizer
              </h4>

              {/* Dynamic Fraction Visualization */}
              <div
                className="p-4 rounded-lg"
                style={{ backgroundColor: theme.colors.interactive }}
              >
                <div className="mb-3">
                  {visualizationResult ? (
                    <>
                      <p className="text-sm font-medium mb-2" style={{ color: theme.colors.textPrimary }}>
                        {visualizationResult.num1}/{visualizationResult.den1} ÷ {visualizationResult.divisor} = {visualizationResult.resultNum}/{visualizationResult.resultDen}
                      </p>

                      {/* Visual representation */}
                      <div className="space-y-2">
                        <div className="text-xs" style={{ color: theme.colors.textMuted }}>
                          Original: {visualizationResult.num1}/{visualizationResult.den1}
                        </div>
                        <div className="flex space-x-1">
                          {Array.from({ length: visualizationResult.den1 }).map((_, i) => (
                            <div
                              key={i}
                              className="w-6 h-6 rounded border"
                              style={{
                                backgroundColor: i < visualizationResult.num1 ? theme.colors.brand : 'transparent',
                                borderColor: theme.colors.border,
                              }}
                            />
                          ))}
                        </div>

                        <div className="text-xs mt-3" style={{ color: theme.colors.textMuted }}>
                          Divided by {visualizationResult.divisor}: {visualizationResult.resultNum}/{visualizationResult.resultDen} each
                        </div>
                        <div className="flex space-x-1">
                          {Array.from({ length: visualizationResult.divisor }).map((_, i) => (
                            <div
                              key={i}
                              className="w-4 h-4 rounded border"
                              style={{
                                backgroundColor: i === 0 ? theme.colors.brand : 'transparent',
                                borderColor: theme.colors.border,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <p className="text-sm" style={{ color: theme.colors.textMuted }}>
                      Enter a valid fraction and divisor to see the visualization
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Fraction Input */}
            <div className="space-y-2">
              <label className="text-xs font-medium" style={{ color: theme.colors.textMuted }}>
                Visualize Your Own
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="1/2"
                  value={visualizerFraction}
                  onChange={(e) => setVisualizerFraction(e.target.value)}
                  className="flex-1 px-2 py-1 text-xs rounded border-none outline-none"
                  style={{
                    backgroundColor: theme.colors.interactive,
                    color: theme.colors.textPrimary,
                  }}
                />
                <span className="px-2 py-1 text-xs" style={{ color: theme.colors.textMuted }}>÷</span>
                <input
                  type="text"
                  placeholder="3"
                  value={visualizerDivisor}
                  onChange={(e) => setVisualizerDivisor(e.target.value)}
                  className="flex-1 px-2 py-1 text-xs rounded border-none outline-none"
                  style={{
                    backgroundColor: theme.colors.interactive,
                    color: theme.colors.textPrimary,
                  }}
                />
              </div>
              {visualizationResult && (
                <button
                  onClick={() => {
                    const resultText = `${visualizationResult.num1}/${visualizationResult.den1} ÷ ${visualizationResult.divisor} = ${visualizationResult.resultNum}/${visualizationResult.resultDen}`;
                    setScratchContent(scratchContent + (scratchContent ? '\n' : '') + resultText);
                    setActiveTab('scratchpad');
                  }}
                  className="w-full px-3 py-2 text-xs font-medium rounded-md transition-colors duration-200"
                  style={{
                    backgroundColor: theme.colors.brand,
                    color: '#ffffff',
                  }}
                >
                  Add to Scratch Pad
                </button>
              )}
            </div>
          </div>
        )}

        {activeTab === 'notes' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-medium" style={{ color: theme.colors.textMuted }}>
                Saved Notes
              </h4>
              <span className="text-xs" style={{ color: theme.colors.textMuted }}>
                {notes.length} notes
              </span>
            </div>

            <div className="space-y-2">
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="p-3 rounded-md"
                  style={{ backgroundColor: theme.colors.interactive }}
                >
                  <div className="flex items-start justify-between">
                    <p className="text-sm flex-1" style={{ color: theme.colors.textPrimary }}>
                      {note.content}
                    </p>
                    <button
                      onClick={() => deleteNote(note.id)}
                      className="ml-2 p-1 rounded hover:bg-error/20 transition-colors duration-200"
                      style={{ color: theme.colors.textMuted }}
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-xs mt-1" style={{ color: theme.colors.textMuted }}>
                    {note.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              ))}

              {notes.length === 0 && (
                <div
                  className="p-4 text-center rounded-lg"
                  style={{ backgroundColor: theme.colors.interactive }}
                >
                  <p className="text-sm" style={{ color: theme.colors.textMuted }}>
                    No notes yet. Use the scratch pad to create some!
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightPanel;