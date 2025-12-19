import { useState } from 'react';
import MathText from '../../../../components/MathText';
import { compositeCircleProblems } from './compositeProblemsData';
import type { CompositeCircleProblem } from './compositeProblemsData';

interface ProblemCardProps {
  problem: CompositeCircleProblem;
  index: number;
}

function ProblemCard({ problem, index }: ProblemCardProps) {
  const [showSolution, setShowSolution] = useState(false);

  const categoryColors = {
    perimeter: { bg: 'bg-teal-50 dark:bg-teal-900/30', border: 'border-teal-500', text: 'text-teal-700 dark:text-teal-300' },
    area: { bg: 'bg-rose-50 dark:bg-rose-900/30', border: 'border-rose-500', text: 'text-rose-700 dark:text-rose-300' },
    both: { bg: 'bg-purple-50 dark:bg-purple-900/30', border: 'border-purple-500', text: 'text-purple-700 dark:text-purple-300' }
  };

  const colors = categoryColors[problem.category];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-gray-900 dark:text-gray-100">
          Example {index + 1}: {problem.title}
        </h3>
        <div className="flex gap-2">
          <span className={`px-2 py-1 rounded text-xs font-medium ${colors.bg} ${colors.text}`}>
            {problem.category === 'both' ? 'Perimeter & Area' : problem.category.charAt(0).toUpperCase() + problem.category.slice(1)}
          </span>
          <span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
            <MathText>{`$(\\pi = ${problem.piValue})$`}</MathText>
          </span>
        </div>
      </div>

      <p className="text-gray-800 dark:text-gray-200 mb-4">{problem.problem.text}</p>

      {/* SVG Figure */}
      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4 flex justify-center">
        <img
          src={problem.figureSvg}
          alt={problem.problem.figureDescription}
          className="max-w-full h-auto max-h-64"
          style={{ filter: 'var(--svg-filter, none)' }}
        />
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-4">
        {problem.problem.figureDescription}
      </p>

      <button
        onClick={() => setShowSolution(!showSolution)}
        className={`px-4 py-2 rounded-lg transition-colors ${
          showSolution
            ? 'bg-gray-500 hover:bg-gray-600 text-white'
            : 'bg-blue-500 hover:bg-blue-600 text-white'
        }`}
      >
        {showSolution ? 'Hide Solution' : 'Show Solution'}
      </button>

      {showSolution && (
        <div className={`mt-4 p-4 rounded-lg ${colors.bg} border-l-4 ${colors.border}`}>
          {/* Decomposition Strategy */}
          <div className="mb-4">
            <p className="font-bold text-gray-900 dark:text-gray-100 mb-2">Strategy:</p>
            <p className="text-gray-800 dark:text-gray-200">{problem.solution.decomposition}</p>
          </div>

          {/* Solution Steps */}
          <div className="mb-4">
            <p className="font-bold text-gray-900 dark:text-gray-100 mb-2">Solution:</p>
            <div className="space-y-3">
              {problem.solution.steps.map((step, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
                    <strong>Step {idx + 1}:</strong> {step.description}
                  </p>
                  <p className="text-gray-800 dark:text-gray-200 font-mono text-sm">
                    {step.calculation}
                  </p>
                  <p className="text-gray-900 dark:text-gray-100 font-bold">
                    = {step.result}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Answer */}
          <div className="bg-green-100 dark:bg-green-900/40 p-3 rounded-lg">
            <p className="text-green-800 dark:text-green-200 font-bold">
              {problem.solution.answerSentence}
            </p>
          </div>

          {/* Pro Tip for students */}
          {problem.teachingNotes && (
            <div className="mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 dark:text-gray-200 text-sm">
                <strong>Pro Tip:</strong> {problem.teachingNotes}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function CompositeFigures() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-500 to-purple-600 text-white p-8 rounded-lg mb-8">
        <h1 className="text-3xl font-bold mb-4">Area and Perimeter of Composite Figures</h1>
        <p className="text-lg">Learn to solve complex shapes made of circles and other figures</p>
      </div>

      <div className="space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-violet-700 dark:text-violet-300">What are Composite Figures?</h2>

          <div className="bg-violet-50 dark:bg-violet-900/30 p-6 rounded-lg border-l-4 border-violet-500 mb-6">
            <p className="text-gray-800 dark:text-gray-200 text-lg">
              <strong>Composite figures</strong> are shapes made up of two or more simple shapes combined together.
              To find their perimeter or area, we need to:
            </p>
            <ol className="list-decimal list-inside mt-3 text-gray-800 dark:text-gray-200 space-y-2">
              <li><strong>Identify</strong> the basic shapes that make up the figure</li>
              <li><strong>Decide</strong> whether to add or subtract areas/lengths</li>
              <li><strong>Calculate</strong> each part and combine them</li>
            </ol>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-teal-100 dark:bg-teal-900/40 p-4 rounded-lg">
              <h3 className="font-bold text-teal-700 dark:text-teal-300 mb-2">For Perimeter</h3>
              <p className="text-gray-800 dark:text-gray-200">
                Identify all the <strong>outer edges</strong> - curved (arcs) and straight lines.
                Add them all up!
              </p>
            </div>
            <div className="bg-rose-100 dark:bg-rose-900/40 p-4 rounded-lg">
              <h3 className="font-bold text-rose-700 dark:text-rose-300 mb-2">For Area</h3>
              <p className="text-gray-800 dark:text-gray-200">
                Either <strong>add</strong> areas (parts joined together) or <strong>subtract</strong> areas (parts cut out).
              </p>
            </div>
          </div>
        </section>

        {/* Key Strategies */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-700 dark:text-purple-300">Key Strategies</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-gray-300 dark:border-gray-600 mb-6">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-gray-100">Useful Combinations to Remember</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <p className="font-bold text-purple-700 dark:text-purple-300">2 semicircles</p>
                <p className="text-gray-800 dark:text-gray-200">= 1 full circle</p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <p className="font-bold text-purple-700 dark:text-purple-300">4 quarter circles</p>
                <p className="text-gray-800 dark:text-gray-200">= 1 full circle</p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <p className="font-bold text-purple-700 dark:text-purple-300">2 quarter circles</p>
                <p className="text-gray-800 dark:text-gray-200">= 1 semicircle</p>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <p className="font-bold text-purple-700 dark:text-purple-300">2 quarter + 1 semicircle</p>
                <p className="text-gray-800 dark:text-gray-200">= 1 full circle</p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border-l-4 border-yellow-500">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Pro Tip:</strong> Always look for ways to combine partial circles into full circles
                or semicircles - this simplifies calculations!
              </p>
            </div>
          </div>
        </section>

        {/* Worked Examples - Perimeter Focus */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-teal-700 dark:text-teal-300">Worked Examples</h2>

          <div className="space-y-6">
            {compositeCircleProblems.map((problem, index) => (
              <ProblemCard key={problem.id} problem={problem} index={index} />
            ))}
          </div>
        </section>

        {/* Summary */}
        <section className="bg-gradient-to-r from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Key Takeaways</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-2xl">1.</span>
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Break down</strong> composite figures into basic shapes you know how to calculate.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">2.</span>
              <p className="text-gray-800 dark:text-gray-200">
                For <strong>perimeter</strong>: identify ALL outer edges (arcs + straight lines).
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">3.</span>
              <p className="text-gray-800 dark:text-gray-200">
                For <strong>area</strong>: decide if you need to ADD (shapes joined) or SUBTRACT (shapes cut out).
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">4.</span>
              <p className="text-gray-800 dark:text-gray-200">
                Look for <strong>simplifications</strong>: 2 semicircles = 1 circle, 4 quarters = 1 circle.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">5.</span>
              <p className="text-gray-800 dark:text-gray-200">
                Always <strong>draw or visualize</strong> how parts can be rearranged to simplify the problem.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
