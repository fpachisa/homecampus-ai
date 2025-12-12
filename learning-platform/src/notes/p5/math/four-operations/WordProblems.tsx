/**
 * Word Problems Notes Component
 *
 * Comprehensive notes for P5 Four Operations Word Problems.
 * Problems are organized by bar model category for better learning progression.
 * Uses static SVG images for accurate bar model representations.
 *
 * Total: 23 problems across 7 categories
 */

import { useState } from 'react';
import {
  WORD_PROBLEMS,
  CATEGORY_INFO,
  getProblemsByCategory,
  getCategoriesInOrder,
  type WordProblem,
  type ProblemCategory
} from './wordProblemsData';

// ============================================
// HELPER COMPONENTS
// ============================================

interface ProblemCardProps {
  problem: WordProblem;
  index: number;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ problem, index }) => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
      {/* Problem Title */}
      <h4 className="font-bold mb-4 text-gray-900 dark:text-gray-100">
        Example {index + 1}: {problem.title}
      </h4>

      {/* Problem Statement */}
      <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded mb-4 border-l-4 border-blue-400">
        <p className="text-gray-800 dark:text-gray-200">
          <strong>Problem:</strong> {problem.problem.text}
        </p>
      </div>

      {/* Solution Toggle */}
      <button
        onClick={() => setShowSolution(!showSolution)}
        className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700 text-white rounded transition-colors font-medium"
      >
        {showSolution ? 'Hide' : 'Show'} Solution
      </button>

      {/* Solution */}
      {showSolution && (
        <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded space-y-4">
          {/* Step 1: Bar Model */}
          <div>
            <p className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Step 1: Draw the Bar Model
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
              <img
                src={problem.barModelSvg}
                alt={`Bar model for ${problem.title}`}
                className="w-full max-w-lg mx-auto"
              />
            </div>
          </div>

          {/* Step 2+: Solution Steps */}
          <div>
            <p className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
              Step 2: Solve
            </p>
            <div className="space-y-3">
              {problem.solution.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/50 rounded text-sm font-bold text-emerald-700 dark:text-emerald-300 min-w-[28px] text-center">
                    {String.fromCharCode(97 + idx)}
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
                    <p className="font-mono text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded mt-1 inline-block">
                      {step.calculation} = {step.result}
                    </p>
                    {step.note && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 italic">
                        {step.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Answer */}
          <div className="pt-3 border-t border-gray-200 dark:border-gray-600">
            <p className="font-bold text-green-600 dark:text-green-400 text-lg">
              Answer: {problem.solution.answerSentence}
            </p>
          </div>

          {/* Teaching Notes (if available) */}
          {problem.teachingNotes && (
            <div className="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border-l-4 border-yellow-400">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Tip:</strong> {problem.teachingNotes}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

interface CategorySectionProps {
  category: ProblemCategory;
  sectionNumber: number;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category, sectionNumber }) => {
  const info = CATEGORY_INFO[category];
  const problems = getProblemsByCategory(category);

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">
        {sectionNumber}. {info.title}
      </h2>

      {/* Category Description */}
      <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border-l-4 border-emerald-500 mb-6">
        <p className="text-gray-800 dark:text-gray-200 mb-2">{info.description}</p>
        <p className="text-sm text-emerald-700 dark:text-emerald-300">
          <strong>Key Technique:</strong> {info.keyTechnique}
        </p>
      </div>

      {/* Problems */}
      {problems.map((problem, idx) => (
        <ProblemCard key={problem.id} problem={problem} index={idx} />
      ))}
    </section>
  );
};

// ============================================
// MAIN COMPONENT
// ============================================

const WordProblems = () => {
  const categories = getCategoriesInOrder();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Word Problems</h1>
        <p className="text-lg">Using bar models to solve real-world problems</p>
        <p className="text-emerald-100 mt-2">{WORD_PROBLEMS.length} problems across {categories.length} categories</p>
      </div>

      <div className="space-y-8">

        {/* Section 1: Introduction to Bar Models */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">
            Introduction: What is a Bar Model?
          </h2>

          <div className="bg-emerald-50 dark:bg-emerald-900/30 p-6 rounded-lg border-l-4 border-emerald-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Singapore Math Bar Models</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              A bar model is a visual tool that helps us understand word problems. We draw bars (rectangles)
              to represent quantities and their relationships.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-gray-800 dark:text-gray-200 font-medium mb-2">Bar models help us:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>See the <strong>relationship</strong> between numbers</li>
                <li>Identify what we <strong>know</strong> and what we need to <strong>find</strong></li>
                <li>Choose the correct <strong>operation</strong> to solve the problem</li>
                <li>Break down <strong>complex problems</strong> into simpler steps</li>
              </ul>
            </div>
          </div>

          {/* Units Method */}
          <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg border-l-4 border-purple-500 mb-4">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">The Units Method</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              When we don't know the exact values, we can use <strong>units</strong> to represent equal parts.
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded">
              <p className="text-gray-800 dark:text-gray-200 mb-2">Example: "Jia Ling has 6 times as many as Vicky"</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Vicky = 1 unit</li>
                <li>Jia Ling = 6 units</li>
                <li>If we find what 1 unit equals, we can solve the problem!</li>
              </ul>
            </div>
          </div>

          {/* Problem Categories Overview */}
          <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">Types of Word Problems</h3>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              In this lesson, you'll learn to solve different types of word problems:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {categories.map((cat, idx) => (
                <div key={cat} className="flex items-center gap-2 bg-white dark:bg-gray-800 p-2 rounded">
                  <span className="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full text-sm font-bold">
                    {idx + 1}
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">
                    {CATEGORY_INFO[cat].title}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-xs">
                    ({getProblemsByCategory(cat).length})
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Sections */}
        {categories.map((category, idx) => (
          <CategorySection
            key={category}
            category={category}
            sectionNumber={idx + 2}
          />
        ))}

        {/* Problem-Solving Strategy */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-300">
            Problem-Solving Strategy
          </h2>

          <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/30 dark:to-green-900/30 p-6 rounded-lg border-2 border-emerald-300 dark:border-emerald-600 mb-4">
            <h3 className="font-bold text-xl mb-4 text-center text-gray-900 dark:text-gray-100">
              4 Steps to Solve Word Problems
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 bg-white dark:bg-gray-800 rounded">
                <span className="w-10 h-10 flex items-center justify-center bg-emerald-500 text-white rounded-full font-bold text-lg">1</span>
                <div>
                  <p className="font-bold text-emerald-600 dark:text-emerald-400">UNDERSTAND</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Read carefully. What do you know? What do you need to find?</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-white dark:bg-gray-800 rounded">
                <span className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full font-bold text-lg">2</span>
                <div>
                  <p className="font-bold text-blue-600 dark:text-blue-400">PLAN</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Draw a bar model. Use units if needed. Decide which operations to use.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-white dark:bg-gray-800 rounded">
                <span className="w-10 h-10 flex items-center justify-center bg-purple-500 text-white rounded-full font-bold text-lg">3</span>
                <div>
                  <p className="font-bold text-purple-600 dark:text-purple-400">SOLVE</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Do the calculations. Show your working clearly.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-3 bg-white dark:bg-gray-800 rounded">
                <span className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-full font-bold text-lg">4</span>
                <div>
                  <p className="font-bold text-orange-600 dark:text-orange-400">CHECK</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Does your answer make sense? Write the answer in a sentence.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg border-2 border-yellow-400 dark:border-yellow-600">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-800 dark:text-yellow-200">Key Takeaways</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200">
            <li><strong>Bar models</strong> help visualize relationships between quantities</li>
            <li>Use <strong>units</strong> when you don't know exact values but know ratios</li>
            <li>Look for <strong>key words</strong>: "more than," "less than," "times as many," "altogether"</li>
            <li>For <strong>"times as many"</strong> problems: draw bars with equal units</li>
            <li>For <strong>"before and after"</strong> problems: draw TWO diagrams</li>
            <li>For <strong>complex problems</strong>: find what the units have in common</li>
            <li>Always <strong>check</strong> your answer - does it make sense?</li>
          </ul>
        </div>

        {/* Summary Stats */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center">
          <p className="text-gray-600 dark:text-gray-400">
            You've learned <strong className="text-emerald-600 dark:text-emerald-400">{WORD_PROBLEMS.length} problems</strong> across{' '}
            <strong className="text-emerald-600 dark:text-emerald-400">{categories.length} categories</strong>.
            Practice makes perfect!
          </p>
        </div>

      </div>
    </div>
  );
};

export default WordProblems;
