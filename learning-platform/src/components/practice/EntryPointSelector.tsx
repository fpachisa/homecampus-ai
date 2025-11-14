import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface EntryPointSelectorProps {
  category: string;
  onEntryPointSelect: (entryPoint: 'foundation' | 'integration' | 'application' | 'explore') => void;
  onBack: () => void;
}

interface EntryPointOption {
  id: 'foundation' | 'integration' | 'application' | 'explore';
  icon: string;
  title: string;
  description: string;
  nodeRange: string;
  color: string;
  colorLight: string;
}

const ENTRY_POINTS: EntryPointOption[] = [
  {
    id: 'foundation',
    icon: '🏗️',
    title: 'Start with Basics',
    description: 'Build strong fundamentals with core concepts and individual skills',
    nodeRange: 'Nodes 1-7',
    color: '#57F287',
    colorLight: '#57F28720',
  },
  {
    id: 'integration',
    icon: '🔗',
    title: 'Combine Concepts',
    description: 'Skip basics and practice integrating multiple concepts together',
    nodeRange: 'Nodes 8-11',
    color: '#5865F2',
    colorLight: '#5865F220',
  },
  {
    id: 'application',
    icon: '🎯',
    title: 'Master Exams',
    description: 'Jump to challenging exam-style problems and real-world applications',
    nodeRange: 'Nodes 12-15',
    color: '#EB459E',
    colorLight: '#EB459E20',
  },
  {
    id: 'explore',
    icon: '🗺️',
    title: 'Explore Freely',
    description: 'All nodes unlocked - choose your own path and practice anywhere',
    nodeRange: 'All 15 nodes',
    color: '#FEE75C',
    colorLight: '#FEE75C20',
  },
];

const EntryPointSelector: React.FC<EntryPointSelectorProps> = ({
  category,
  onEntryPointSelect,
  onBack,
}) => {
  const { theme } = useTheme();

  const handleEntryPointClick = (entryPoint: 'foundation' | 'integration' | 'application' | 'explore') => {
    // Save to localStorage
    localStorage.setItem(`practice_entry_point_${category}`, entryPoint);
    onEntryPointSelect(entryPoint);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6"
      style={{
        background: theme.gradients.panel,
        color: theme.colors.textPrimary,
      }}
    >
      {/* Background texture */}
      <div
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 25%, rgba(88, 101, 242, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(71, 82, 196, 0.05) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-5xl w-full">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-6 p-2 rounded-lg transition-all duration-200"
          style={{
            backgroundColor: theme.colors.interactive,
            color: theme.colors.textSecondary,
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.brand;
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.interactive;
            e.currentTarget.style.color = theme.colors.textSecondary;
          }}
          title="Back"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3" style={{ color: theme.colors.textPrimary }}>
            Where Would You Like to Start?
          </h1>
          <p className="text-lg" style={{ color: theme.colors.textSecondary }}>
            Choose an entry point based on your current skill level
          </p>
        </div>

        {/* Entry Point Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {ENTRY_POINTS.map((option) => (
            <button
              key={option.id}
              onClick={() => handleEntryPointClick(option.id)}
              className="group relative p-8 rounded-2xl transition-all duration-300 text-left"
              style={{
                background: theme.glass.background,
                border: `1px solid ${theme.glass.border}`,
                backdropFilter: theme.glass.backdrop,
                boxShadow: theme.shadows.md,
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = theme.shadows.glow;
                e.currentTarget.style.borderColor = option.color + '50';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = theme.shadows.md;
                e.currentTarget.style.borderColor = theme.glass.border;
              }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4"
                style={{
                  backgroundColor: option.colorLight,
                  color: option.color,
                }}
              >
                {option.icon}
              </div>

              {/* Content */}
              <h2 className="text-2xl font-bold mb-2" style={{ color: theme.colors.textPrimary }}>
                {option.title}
              </h2>
              <p className="text-base mb-4" style={{ color: theme.colors.textSecondary }}>
                {option.description}
              </p>

              {/* Node Range Badge */}
              <div
                className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4"
                style={{
                  backgroundColor: option.colorLight,
                  color: option.color,
                }}
              >
                {option.nodeRange}
              </div>

              {/* CTA */}
              <div
                className="px-6 py-3 rounded-lg text-center font-semibold transition-all duration-200"
                style={{
                  backgroundColor: option.colorLight,
                  color: option.color,
                }}
              >
                Select →
              </div>
            </button>
          ))}
        </div>

        {/* Info Footer */}
        <div
          className="p-6 rounded-xl text-center"
          style={{
            background: theme.glass.background,
            border: `1px solid ${theme.glass.border}`,
            backdropFilter: theme.glass.backdrop,
          }}
        >
          <p className="text-sm" style={{ color: theme.colors.textMuted }}>
            💡 <strong>Don't worry!</strong> All nodes are unlocked - you can navigate freely and change your path at any
            time
          </p>
        </div>
      </div>
    </div>
  );
};

export default EntryPointSelector;
