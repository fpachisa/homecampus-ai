/**
 * NotesThemeWrapper Component
 *
 * Wraps note content and applies theme-aware CSS overrides to make
 * hardcoded light-mode Tailwind classes work in dark mode.
 *
 * This allows all 48 note files to automatically support dark mode
 * without modifying each individual file.
 */

import React from 'react';
import { useTheme } from '../hooks/useTheme';

interface NotesThemeWrapperProps {
  children: React.ReactNode;
}

const NotesThemeWrapper: React.FC<NotesThemeWrapperProps> = ({ children }) => {
  const { isDark } = useTheme();

  // Define theme-aware CSS overrides
  const themeStyles = isDark ? `
    /* Main container backgrounds */
    .notes-theme-wrapper .bg-gray-50 {
      background-color: #1f2937 !important; /* gray-800 */
    }

    .notes-theme-wrapper .bg-white {
      background-color: #111827 !important; /* gray-900 */
    }

    .notes-theme-wrapper .bg-gray-100 {
      background-color: #374151 !important; /* gray-700 */
    }

    /* Text colors - make dark text light */
    .notes-theme-wrapper .text-gray-600 {
      color: #d1d5db !important; /* gray-300 */
    }

    .notes-theme-wrapper .text-gray-700 {
      color: #e5e7eb !important; /* gray-200 */
    }

    .notes-theme-wrapper .text-gray-800 {
      color: #f3f4f6 !important; /* gray-100 */
    }

    /* Colored text - make vibrant for dark backgrounds */
    .notes-theme-wrapper .text-purple-800,
    .notes-theme-wrapper .text-purple-700 {
      color: #c4b5fd !important; /* purple-300 */
    }

    .notes-theme-wrapper .text-blue-800,
    .notes-theme-wrapper .text-blue-700 {
      color: #93c5fd !important; /* blue-300 */
    }

    .notes-theme-wrapper .text-green-700,
    .notes-theme-wrapper .text-green-800 {
      color: #86efac !important; /* green-300 */
    }

    .notes-theme-wrapper .text-yellow-800,
    .notes-theme-wrapper .text-yellow-700 {
      color: #fde047 !important; /* yellow-300 */
    }

    .notes-theme-wrapper .text-red-600,
    .notes-theme-wrapper .text-red-700 {
      color: #fca5a5 !important; /* red-300 */
    }

    .notes-theme-wrapper .text-orange-600,
    .notes-theme-wrapper .text-orange-700,
    .notes-theme-wrapper .text-orange-800 {
      color: #fdba74 !important; /* orange-300 */
    }

    /* Colored backgrounds - darker with light text */
    .notes-theme-wrapper .bg-purple-50 {
      background-color: #581c87 !important; /* purple-900 */
    }

    .notes-theme-wrapper .bg-purple-100 {
      background-color: #6b21a8 !important; /* purple-800 */
    }

    .notes-theme-wrapper .bg-blue-50 {
      background-color: #1e3a8a !important; /* blue-900 */
    }

    .notes-theme-wrapper .bg-blue-100 {
      background-color: #1e40af !important; /* blue-800 */
    }

    .notes-theme-wrapper .bg-green-50 {
      background-color: #14532d !important; /* green-900 */
    }

    .notes-theme-wrapper .bg-green-100 {
      background-color: #166534 !important; /* green-800 */
    }

    .notes-theme-wrapper .bg-yellow-50 {
      background-color: #713f12 !important; /* yellow-900 */
    }

    .notes-theme-wrapper .bg-yellow-100 {
      background-color: #854d0e !important; /* yellow-800 */
    }

    .notes-theme-wrapper .bg-red-50 {
      background-color: #7f1d1d !important; /* red-900 */
    }

    .notes-theme-wrapper .bg-red-100 {
      background-color: #991b1b !important; /* red-800 */
    }

    .notes-theme-wrapper .bg-orange-50 {
      background-color: #7c2d12 !important; /* orange-900 */
    }

    .notes-theme-wrapper .bg-orange-100 {
      background-color: #9a3412 !important; /* orange-800 */
    }

    /* Borders - lighter in dark mode */
    .notes-theme-wrapper .border-gray-300 {
      border-color: #4b5563 !important; /* gray-600 */
    }

    .notes-theme-wrapper .border-gray-200 {
      border-color: #374151 !important; /* gray-700 */
    }

    /* Colored borders - keep visible */
    .notes-theme-wrapper .border-purple-500 {
      border-color: #a78bfa !important; /* purple-400 */
    }

    .notes-theme-wrapper .border-purple-300 {
      border-color: #c4b5fd !important; /* purple-300 */
    }

    .notes-theme-wrapper .border-blue-500 {
      border-color: #60a5fa !important; /* blue-400 */
    }

    .notes-theme-wrapper .border-blue-300 {
      border-color: #93c5fd !important; /* blue-300 */
    }

    .notes-theme-wrapper .border-green-500 {
      border-color: #4ade80 !important; /* green-400 */
    }

    .notes-theme-wrapper .border-green-300 {
      border-color: #86efac !important; /* green-300 */
    }

    .notes-theme-wrapper .border-yellow-500 {
      border-color: #facc15 !important; /* yellow-400 */
    }

    .notes-theme-wrapper .border-yellow-300 {
      border-color: #fde047 !important; /* yellow-300 */
    }

    .notes-theme-wrapper .border-red-300 {
      border-color: #fca5a5 !important; /* red-300 */
    }

    .notes-theme-wrapper .border-orange-300 {
      border-color: #fdba74 !important; /* orange-300 */
    }

    .notes-theme-wrapper .border-orange-500 {
      border-color: #fb923c !important; /* orange-400 */
    }

    /* SVG fills for diagrams */
    .notes-theme-wrapper .fill-blue-600 {
      fill: #93c5fd !important; /* blue-300 */
    }

    /* Input fields */
    .notes-theme-wrapper input[type="number"],
    .notes-theme-wrapper input[type="text"] {
      background-color: #374151 !important; /* gray-700 */
      color: #f3f4f6 !important; /* gray-100 */
      border-color: #4b5563 !important; /* gray-600 */
    }

    /* Buttons that aren't already styled */
    .notes-theme-wrapper button.bg-white {
      background-color: #374151 !important; /* gray-700 */
      color: #f3f4f6 !important; /* gray-100 */
    }

    .notes-theme-wrapper button.bg-gray-200 {
      background-color: #4b5563 !important; /* gray-600 */
      color: #f3f4f6 !important; /* gray-100 */
    }

    /* Tables */
    .notes-theme-wrapper table.border-gray-300,
    .notes-theme-wrapper tbody tr {
      border-color: #4b5563 !important; /* gray-600 */
    }

    .notes-theme-wrapper thead tr {
      /* Keep vibrant header colors */
    }

    .notes-theme-wrapper tbody tr.bg-gray-50 {
      background-color: #1f2937 !important; /* gray-800 */
    }

    /* Font mono code blocks */
    .notes-theme-wrapper .font-mono.bg-gray-100 {
      background-color: #374151 !important; /* gray-700 */
    }

    /* Details summary (collapsible sections) */
    .notes-theme-wrapper details summary {
      color: #93c5fd !important; /* blue-300 */
    }

    /* Gradients - keep as-is, they work in both themes */

    /* Ensure text in colored boxes is visible - BUT DON'T override KaTeX! */
    .notes-theme-wrapper .bg-purple-50 *:not(.katex):not(.katex *):not(.math-renderer):not(.math-renderer *),
    .notes-theme-wrapper .bg-purple-100 *:not(.katex):not(.katex *):not(.math-renderer):not(.math-renderer *) {
      color: #e9d5ff !important; /* purple-200 */
    }

    .notes-theme-wrapper .bg-blue-50 *:not(.katex):not(.katex *):not(.math-renderer):not(.math-renderer *),
    .notes-theme-wrapper .bg-blue-100 *:not(.katex):not(.katex *):not(.math-renderer):not(.math-renderer *) {
      color: #dbeafe !important; /* blue-100 */
    }

    .notes-theme-wrapper .bg-green-50 *:not(.katex):not(.katex *):not(.math-renderer):not(.math-renderer *),
    .notes-theme-wrapper .bg-green-100 *:not(.katex):not(.katex *):not(.math-renderer):not(.math-renderer *) {
      color: #dcfce7 !important; /* green-100 */
    }

    .notes-theme-wrapper .bg-yellow-50 *:not(.katex):not(.katex *):not(.math-renderer):not(.math-renderer *),
    .notes-theme-wrapper .bg-yellow-100 *:not(.katex):not(.katex *):not(.math-renderer):not(.math-renderer *) {
      color: #fef9c3 !important; /* yellow-100 */
    }

    .notes-theme-wrapper .bg-red-50 *:not(.katex):not(.katex *):not(.math-renderer):not(.math-renderer *),
    .notes-theme-wrapper .bg-red-100 *:not(.katex):not(.katex *):not(.math-renderer):not(.math-renderer *) {
      color: #fee2e2 !important; /* red-100 */
    }

    .notes-theme-wrapper .bg-orange-50 *:not(.katex):not(.katex *):not(.math-renderer):not(.math-renderer *),
    .notes-theme-wrapper .bg-orange-100 *:not(.katex):not(.katex *):not(.math-renderer):not(.math-renderer *) {
      color: #ffedd5 !important; /* orange-100 */
    }

    /* Override for strongly colored text that should stay visible */
    .notes-theme-wrapper .font-semibold,
    .notes-theme-wrapper .font-bold {
      color: inherit;
    }

    /* Specific overrides for colored text in colored boxes */
    .notes-theme-wrapper .bg-green-50 .text-green-700,
    .notes-theme-wrapper .bg-green-50 .font-bold.text-green-700 {
      color: #86efac !important; /* green-300 */
    }

    .notes-theme-wrapper .bg-yellow-50 .font-bold {
      color: #fef08a !important; /* yellow-200 */
    }

    .notes-theme-wrapper .bg-orange-50 .text-orange-700,
    .notes-theme-wrapper .bg-orange-50 .font-bold.text-orange-700 {
      color: #fdba74 !important; /* orange-300 */
    }

    .notes-theme-wrapper .bg-orange-50 .font-bold {
      color: #fed7aa !important; /* orange-200 */
    }

    /* ========================================
       SVG-SPECIFIC OVERRIDES (Fix diagram text)
       ======================================== */

    /* SVG text with inline dark fills */
    .notes-theme-wrapper svg text[fill="#333"],
    .notes-theme-wrapper svg text[fill="#000"],
    .notes-theme-wrapper svg text[fill="black"] {
      fill: #e5e7eb !important; /* gray-200 - light for visibility */
    }

    /* SVG text elements with classes */
    .notes-theme-wrapper svg text.text-sm {
      fill: #e5e7eb !important; /* gray-200 */
    }

    .notes-theme-wrapper svg text.font-semibold,
    .notes-theme-wrapper svg text.font-bold {
      fill: #f3f4f6 !important; /* gray-100 */
    }

    /* SVG text elements without explicit fill (inherit from stroke or default) */
    .notes-theme-wrapper svg text:not([fill]) {
      fill: #e5e7eb !important; /* gray-200 */
    }

    /* SVG paths, lines, and shapes with dark colors */
    .notes-theme-wrapper svg line[stroke="#333"] {
      stroke: #9ca3af !important; /* gray-400 */
    }

    .notes-theme-wrapper svg rect[stroke="#333"] {
      stroke: #9ca3af !important; /* gray-400 */
    }

    /* ========================================
       GRADIENT CLASS OVERRIDES (Fix colored boxes)
       ======================================== */

    /* Red gradients */
    .notes-theme-wrapper .from-red-50 {
      --tw-gradient-from: #7f1d1d !important; /* red-900 */
      --tw-gradient-to: rgb(127 29 29 / 0) !important;
      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
    }

    .notes-theme-wrapper .to-red-100 {
      --tw-gradient-to: #991b1b !important; /* red-800 */
    }

    /* Blue gradients */
    .notes-theme-wrapper .from-blue-50 {
      --tw-gradient-from: #1e3a8a !important; /* blue-900 */
      --tw-gradient-to: rgb(30 58 138 / 0) !important;
      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
    }

    .notes-theme-wrapper .to-blue-100 {
      --tw-gradient-to: #1e40af !important; /* blue-800 */
    }

    /* Green gradients */
    .notes-theme-wrapper .from-green-50 {
      --tw-gradient-from: #14532d !important; /* green-900 */
      --tw-gradient-to: rgb(20 83 45 / 0) !important;
      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
    }

    .notes-theme-wrapper .to-green-100 {
      --tw-gradient-to: #166534 !important; /* green-800 */
    }

    /* Purple gradients */
    .notes-theme-wrapper .from-purple-50 {
      --tw-gradient-from: #581c87 !important; /* purple-900 */
      --tw-gradient-to: rgb(88 28 135 / 0) !important;
      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
    }

    .notes-theme-wrapper .to-purple-100 {
      --tw-gradient-to: #6b21a8 !important; /* purple-800 */
    }

    /* Yellow gradients */
    .notes-theme-wrapper .from-yellow-50 {
      --tw-gradient-from: #713f12 !important; /* yellow-900 */
      --tw-gradient-to: rgb(113 63 18 / 0) !important;
      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
    }

    .notes-theme-wrapper .to-yellow-100 {
      --tw-gradient-to: #854d0e !important; /* yellow-800 */
    }

    /* Orange gradients */
    .notes-theme-wrapper .from-orange-50 {
      --tw-gradient-from: #7c2d12 !important; /* orange-900 */
      --tw-gradient-to: rgb(124 45 18 / 0) !important;
      --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to) !important;
    }

    .notes-theme-wrapper .to-orange-100 {
      --tw-gradient-to: #9a3412 !important; /* orange-800 */
    }

    /* ========================================
       TEXT IN GRADIENT BOXES (Fix formula text) - DON'T override KaTeX!
       ======================================== */

    /* All text in red gradient boxes */
    .notes-theme-wrapper [class*="from-red"][class*="to-red"] *:not(.katex):not(.katex *):not(.math-renderer):not(.math-renderer *) {
      color: #fef2f2 !important; /* red-50 - very light */
    }

    .notes-theme-wrapper [class*="from-red"][class*="to-red"] h4,
    .notes-theme-wrapper [class*="from-red"][class*="to-red"] .font-bold {
      color: #ffffff !important;
    }

    /* All text in blue gradient boxes */
    .notes-theme-wrapper [class*="from-blue"][class*="to-blue"] *:not(.katex):not(.katex *):not(.math-renderer):not(.math-renderer *) {
      color: #eff6ff !important; /* blue-50 - very light */
    }

    .notes-theme-wrapper [class*="from-blue"][class*="to-blue"] h4,
    .notes-theme-wrapper [class*="from-blue"][class*="to-blue"] .font-bold {
      color: #ffffff !important;
    }

    /* All text in green gradient boxes */
    .notes-theme-wrapper [class*="from-green"][class*="to-green"] *:not(.katex):not(.katex *):not(.math-renderer):not(.math-renderer *) {
      color: #f0fdf4 !important; /* green-50 - very light */
    }

    .notes-theme-wrapper [class*="from-green"][class*="to-green"] h4,
    .notes-theme-wrapper [class*="from-green"][class*="to-green"] .font-bold {
      color: #ffffff !important;
    }

    /* All text in purple gradient boxes */
    .notes-theme-wrapper [class*="from-purple"][class*="to-purple"] *:not(.katex):not(.katex *):not(.math-renderer):not(.math-renderer *) {
      color: #faf5ff !important; /* purple-50 - very light */
    }

    .notes-theme-wrapper [class*="from-purple"][class*="to-purple"] h4,
    .notes-theme-wrapper [class*="from-purple"][class*="to-purple"] .font-bold {
      color: #ffffff !important;
    }

    /* All text in yellow gradient boxes */
    .notes-theme-wrapper [class*="from-yellow"][class*="to-yellow"] *:not(.katex):not(.katex *):not(.math-renderer):not(.math-renderer *) {
      color: #fefce8 !important; /* yellow-50 - very light */
    }

    .notes-theme-wrapper [class*="from-yellow"][class*="to-yellow"] h4,
    .notes-theme-wrapper [class*="from-yellow"][class*="to-yellow"] .font-bold {
      color: #ffffff !important;
    }

    /* All text in orange gradient boxes */
    .notes-theme-wrapper [class*="from-orange"][class*="to-orange"] *:not(.katex):not(.katex *):not(.math-renderer):not(.math-renderer *) {
      color: #ffedd5 !important; /* orange-100 - very light */
    }

    .notes-theme-wrapper [class*="from-orange"][class*="to-orange"] h4,
    .notes-theme-wrapper [class*="from-orange"][class*="to-orange"] .font-bold {
      color: #ffffff !important;
    }

    /* ========================================
       DEFAULT TEXT COLOR SAFETY NET
       ======================================== */

    /* Ensure all text without explicit color classes is readable */
    .notes-theme-wrapper p:not([class*="text-"]):not([class*="from-"]):not([class*="bg-gradient"]),
    .notes-theme-wrapper li:not([class*="text-"]),
    .notes-theme-wrapper span:not([class*="text-"]):not([class*="font-"]) {
      color: #d1d5db !important; /* gray-300 - safe default */
    }

    /* Headers without explicit colors */
    .notes-theme-wrapper h1:not([class*="text-"]),
    .notes-theme-wrapper h2:not([class*="text-"]),
    .notes-theme-wrapper h3:not([class*="text-"]),
    .notes-theme-wrapper h4:not([class*="text-"]) {
      color: #f3f4f6 !important; /* gray-100 - brighter for headers */
    }
  ` : '';

  return (
    <>
      {/* Inject theme-specific CSS */}
      {isDark && <style dangerouslySetInnerHTML={{ __html: themeStyles }} />}

      {/* Wrapper div with theme class */}
      <div className="notes-theme-wrapper">
        {children}
      </div>
    </>
  );
};

export default NotesThemeWrapper;
