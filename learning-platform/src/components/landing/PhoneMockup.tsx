import React from 'react';
import { useTheme } from '../../hooks/useTheme';

interface PhoneMockupProps {
  activeIndex: number;
}

// Learn Mode Mockup - AI Tutor conversation about trigonometry
const LearnMockup: React.FC<{ theme: ReturnType<typeof useTheme>['theme'] }> = ({ theme }) => (
  <div className="h-full flex flex-col">
    {/* Header */}
    <div
      className="px-4 py-3 flex items-center gap-3"
      style={{ borderBottom: `1px solid ${theme.colors.border}` }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center"
        style={{
          background: `radial-gradient(circle, ${theme.colors.brand} 0%, ${theme.colors.brandHover} 100%)`,
          boxShadow: theme.shadows.glow,
        }}
      >
        <span className="text-white text-lg">AI</span>
      </div>
      <div>
        <div className="font-semibold text-sm" style={{ color: theme.colors.textPrimary }}>
          AI Tutor
        </div>
        <div className="text-xs" style={{ color: theme.colors.success }}>
          Online
        </div>
      </div>
    </div>

    {/* Chat messages */}
    <div className="flex-1 p-4 space-y-3 overflow-hidden">
      {/* Problem context */}
      <div
        className="px-3 py-2 rounded-lg text-center text-xs"
        style={{
          backgroundColor: theme.colors.interactive,
          color: theme.colors.textMuted,
        }}
      >
        Topic: Basic Trigonometry Ratios
      </div>

      {/* Tutor message */}
      <div className="flex justify-start">
        <div
          className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tl-sm"
          style={{
            backgroundColor: theme.colors.interactive,
            color: theme.colors.textPrimary,
          }}
        >
          <p className="text-sm">
            In this right triangle, we know the opposite side is 5cm and the hypotenuse is 13cm. Which ratio should we use to find angle θ?
          </p>
        </div>
      </div>

      {/* Student message */}
      <div className="flex justify-end">
        <div
          className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tr-sm"
          style={{
            backgroundColor: theme.colors.brand + '40',
            color: theme.colors.textPrimary,
          }}
        >
          <p className="text-sm">Is it sine? Because sin = opposite/hypotenuse?</p>
        </div>
      </div>

      {/* Tutor encouraging response */}
      <div className="flex justify-start">
        <div
          className="max-w-[85%] px-4 py-3 rounded-2xl rounded-tl-sm"
          style={{
            backgroundColor: theme.colors.interactive,
            color: theme.colors.textPrimary,
          }}
        >
          <p className="text-sm">
            Exactly right! sin(θ) = 5/13. Now, how do we find the angle θ itself?
          </p>
        </div>
      </div>
    </div>

    {/* Input area */}
    <div
      className="px-4 py-3"
      style={{ borderTop: `1px solid ${theme.colors.border}` }}
    >
      <div
        className="px-4 py-3 rounded-xl flex items-center justify-between"
        style={{
          backgroundColor: theme.colors.interactive,
          border: `1px solid ${theme.colors.border}`,
        }}
      >
        <span className="text-sm" style={{ color: theme.colors.textMuted }}>
          Type your answer...
        </span>
        <span
          className="px-3 py-1.5 rounded-lg text-xs font-medium"
          style={{
            backgroundColor: theme.colors.brand,
            color: '#fff',
          }}
        >
          Send
        </span>
      </div>
    </div>
  </div>
);

// Practice Mode Mockup - Quadratic factorisation
const PracticeMockup: React.FC<{ theme: ReturnType<typeof useTheme>['theme'] }> = ({ theme }) => (
  <div className="h-full flex flex-col">
    {/* Header with progress */}
    <div
      className="px-4 py-3 flex items-center justify-between"
      style={{ borderBottom: `1px solid ${theme.colors.border}` }}
    >
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4, 5].map((num, i) => (
          <div
            key={num}
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold"
            style={{
              backgroundColor: i < 2 ? theme.colors.success : i === 2 ? theme.colors.brand : theme.colors.interactive,
              color: i <= 2 ? '#fff' : theme.colors.textMuted,
              boxShadow: i === 2 ? theme.shadows.glow : 'none',
            }}
          >
            {i < 2 ? '✓' : num}
          </div>
        ))}
      </div>
      <div className="text-xs" style={{ color: theme.colors.textMuted }}>
        3 of 5
      </div>
    </div>

    {/* Problem card */}
    <div className="flex-1 p-4 overflow-hidden">
      <div
        className="h-full rounded-xl p-4 flex flex-col"
        style={{
          background: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
        }}
      >
        <div
          className="text-xs font-medium mb-3"
          style={{ color: theme.colors.textMuted }}
        >
          Factorise the following expression:
        </div>

        {/* Math expression */}
        <div
          className="text-xl font-mono text-center py-4 mb-4"
          style={{ color: theme.colors.textAccent }}
        >
          x² + 7x + 12
        </div>

        {/* Visual hint - factor pairs */}
        <div
          className="flex-1 rounded-lg p-3 mb-4"
          style={{ backgroundColor: theme.colors.interactive }}
        >
          <div className="text-xs mb-2" style={{ color: theme.colors.textMuted }}>
            Hint: Find two numbers that...
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div
              className="px-3 py-2 rounded text-center"
              style={{ backgroundColor: theme.colors.brand + '20', color: theme.colors.textPrimary }}
            >
              Multiply to <span style={{ color: theme.colors.brand }}>12</span>
            </div>
            <div
              className="px-3 py-2 rounded text-center"
              style={{ backgroundColor: theme.colors.brand + '20', color: theme.colors.textPrimary }}
            >
              Add to <span style={{ color: theme.colors.brand }}>7</span>
            </div>
          </div>
        </div>

        {/* Answer input */}
        <div
          className="px-4 py-3 rounded-xl flex items-center gap-2"
          style={{
            backgroundColor: theme.colors.interactive,
            border: `1px solid ${theme.colors.border}`,
          }}
        >
          <span className="text-sm" style={{ color: theme.colors.textMuted }}>
            (x + _)(x + _)
          </span>
          <div className="flex-1" />
          <span
            className="px-3 py-1.5 rounded-lg text-xs font-medium"
            style={{
              backgroundColor: theme.colors.brand,
              color: '#fff',
            }}
          >
            Check
          </span>
        </div>
      </div>
    </div>
  </div>
);

// O-Level Mockup - Real exam style question
const OLevelMockup: React.FC<{ theme: ReturnType<typeof useTheme>['theme'] }> = ({ theme }) => (
  <div className="h-full flex flex-col">
    {/* Paper header */}
    <div
      className="px-4 py-3"
      style={{ borderBottom: `1px solid ${theme.colors.border}` }}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold text-sm" style={{ color: theme.colors.textPrimary }}>
            O-Level Mathematics
          </div>
          <div className="text-xs" style={{ color: theme.colors.textMuted }}>
            Paper 2 · 2023
          </div>
        </div>
        <div
          className="px-2 py-1 rounded text-xs"
          style={{ backgroundColor: theme.colors.brand + '20', color: theme.colors.brand }}
        >
          [3 marks]
        </div>
      </div>
    </div>

    {/* Question content */}
    <div className="flex-1 p-4 overflow-hidden">
      <div
        className="h-full rounded-xl p-4 flex flex-col"
        style={{
          background: theme.glass.background,
          border: `1px solid ${theme.glass.border}`,
        }}
      >
        <div
          className="text-xs font-semibold mb-2"
          style={{ color: theme.colors.brand }}
        >
          Question 7(a)
        </div>

        <div
          className="text-sm mb-4"
          style={{ color: theme.colors.textPrimary, lineHeight: 1.6 }}
        >
          A ladder of length 5m leans against a vertical wall. The foot of the ladder is 3m from the base of the wall. Calculate the height the ladder reaches up the wall.
        </div>

        {/* Diagram */}
        <div
          className="flex-1 flex items-center justify-center rounded-lg mb-4"
          style={{ backgroundColor: theme.colors.interactive }}
        >
          <svg width="160" height="120" viewBox="0 0 160 120">
            {/* Wall */}
            <line x1="30" y1="15" x2="30" y2="100" stroke={theme.colors.textMuted} strokeWidth="3" />
            {/* Ground */}
            <line x1="25" y1="100" x2="140" y2="100" stroke={theme.colors.textMuted} strokeWidth="3" />
            {/* Ladder */}
            <line x1="30" y1="20" x2="120" y2="100" stroke={theme.colors.brand} strokeWidth="3" />
            {/* Right angle marker */}
            <path d="M30 90 L40 90 L40 100" fill="none" stroke={theme.colors.textMuted} strokeWidth="1.5" />
            {/* Labels */}
            <text x="75" y="55" fontSize="12" fill={theme.colors.brand} fontWeight="bold">5m</text>
            <text x="70" y="115" fontSize="12" fill={theme.colors.textMuted}>3m</text>
            <text x="12" y="60" fontSize="12" fill={theme.colors.textAccent}>?</text>
          </svg>
        </div>

        {/* Answer input */}
        <div
          className="px-4 py-3 rounded-xl flex items-center gap-2"
          style={{
            backgroundColor: theme.colors.interactive,
            border: `1px solid ${theme.colors.border}`,
          }}
        >
          <span className="text-sm" style={{ color: theme.colors.textMuted }}>
            Height = ___ m
          </span>
          <div className="flex-1" />
          <span
            className="px-3 py-1.5 rounded-lg text-xs font-medium"
            style={{
              backgroundColor: theme.colors.brand,
              color: '#fff',
            }}
          >
            Submit
          </span>
        </div>
      </div>
    </div>

    {/* Progress bar */}
    <div
      className="px-4 py-3"
      style={{ borderTop: `1px solid ${theme.colors.border}` }}
    >
      <div className="flex items-center justify-between text-xs mb-2">
        <span style={{ color: theme.colors.textMuted }}>Progress</span>
        <span style={{ color: theme.colors.textPrimary }}>12 of 25</span>
      </div>
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{ backgroundColor: theme.colors.interactive }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: '48%',
            backgroundColor: theme.colors.brand,
          }}
        />
      </div>
    </div>
  </div>
);

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ activeIndex }) => {
  const { theme } = useTheme();

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Device frame - styled like Socratic panels */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: theme.glass.background,
          border: `2px solid ${theme.colors.brand}`,
          backdropFilter: theme.glass.backdrop,
          boxShadow: theme.shadows.glow,
          height: '500px',
        }}
      >
        {/* Learn mockup */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: activeIndex === 0 ? 1 : 0,
            pointerEvents: activeIndex === 0 ? 'auto' : 'none',
          }}
        >
          <LearnMockup theme={theme} />
        </div>

        {/* Practice mockup */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: activeIndex === 1 ? 1 : 0,
            pointerEvents: activeIndex === 1 ? 'auto' : 'none',
          }}
        >
          <PracticeMockup theme={theme} />
        </div>

        {/* O-Level mockup */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: activeIndex === 2 ? 1 : 0,
            pointerEvents: activeIndex === 2 ? 'auto' : 'none',
          }}
        >
          <OLevelMockup theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
