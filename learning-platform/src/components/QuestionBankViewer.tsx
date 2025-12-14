/**
 * Question Bank Viewer
 * Preview component for reviewing pre-generated questions with their SVG diagrams
 * Supports all registered question banks with a dropdown selector
 */

import React, { useState } from 'react';
import type { QuestionBank } from '../data/learn/question-banks/types';

// Import all question banks
import { S1_MATH_PERIMETER_AREA_COMPOSITE_QUESTION_BANK } from '../data/learn/question-banks/s1-math-perimeter-area-composite.js';
import { P5_MATH_FOUR_OPERATIONS_WORD_PROBLEMS_QUESTION_BANK } from '../data/learn/question-banks/p5-math-four-operations-word-problems.js';
import { P5_MATH_FOUR_OPERATIONS_FRACTIONS_WORD_PROBLEMS_QUESTION_BANK } from '../data/learn/question-banks/p5-math-four-operations-fractions-word-problems.js';
import { P5_MATH_AREA_TRIANGLE_COMPOSITE_QUESTION_BANK } from '../data/learn/question-banks/p5-math-area-triangle-composite.js';

// Registry of all question banks with metadata
const QUESTION_BANK_REGISTRY: Record<string, {
  bank: QuestionBank;
  displayName: string;
  description: string;
  grade: string;
}> = {
  's1-math-perimeter-area-composite': {
    bank: S1_MATH_PERIMETER_AREA_COMPOSITE_QUESTION_BANK,
    displayName: 'S1 Perimeter & Area - Composite Figures',
    description: 'Composite figures involving rectangles, triangles, and circles',
    grade: 'Secondary 1'
  },
  'p5-math-four-operations-word-problems': {
    bank: P5_MATH_FOUR_OPERATIONS_WORD_PROBLEMS_QUESTION_BANK,
    displayName: 'P5 Four Operations - Word Problems',
    description: 'Word problems involving multiplication, division, and order of operations',
    grade: 'Primary 5'
  },
  'p5-math-four-operations-fractions-word-problems': {
    bank: P5_MATH_FOUR_OPERATIONS_FRACTIONS_WORD_PROBLEMS_QUESTION_BANK,
    displayName: 'P5 Fractions - Word Problems',
    description: 'Word problems involving fraction operations',
    grade: 'Primary 5'
  },
  'p5-math-area-triangle-composite': {
    bank: P5_MATH_AREA_TRIANGLE_COMPOSITE_QUESTION_BANK,
    displayName: 'P5 Area of Triangle - Composite Figures',
    description: 'Composite figures involving triangles and rectangles',
    grade: 'Primary 5'
  }
};

export const QuestionBankViewer: React.FC = () => {
  const [selectedBankId, setSelectedBankId] = useState<string>('p5-math-area-triangle-composite');

  const selectedBankInfo = QUESTION_BANK_REGISTRY[selectedBankId];
  const questionBank = selectedBankInfo?.bank || [];

  // Calculate stats
  const totalSections = questionBank.length;
  const totalQuestions = questionBank.reduce((sum, section) => sum + section.questions.length, 0);
  const questionsWithImages = questionBank.reduce(
    (sum, section) => sum + section.questions.filter(q => q.imagePath).length,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header with Selector */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Question Bank Viewer
          </h1>
          <p className="text-gray-600 mb-6">
            Review pre-generated questions with their SVG diagrams
          </p>

          {/* Question Bank Selector */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <label htmlFor="bank-selector" className="block text-sm font-medium text-gray-700 mb-2">
              Select Question Bank:
            </label>
            <select
              id="bank-selector"
              value={selectedBankId}
              onChange={(e) => setSelectedBankId(e.target.value)}
              className="w-full md:w-auto min-w-[400px] px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
            >
              {Object.entries(QUESTION_BANK_REGISTRY).map(([id, info]) => (
                <option key={id} value={id}>
                  {info.displayName} ({info.bank.reduce((s, sec) => s + sec.questions.length, 0)} questions)
                </option>
              ))}
            </select>

            {/* Selected Bank Info */}
            {selectedBankInfo && (
              <div className="mt-3 flex items-center gap-4 text-sm">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                  {selectedBankInfo.grade}
                </span>
                <span className="text-gray-600">{selectedBankInfo.description}</span>
              </div>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <p className="text-gray-600 text-sm">Sections</p>
            <p className="text-3xl font-bold text-blue-600">{totalSections}</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <p className="text-gray-600 text-sm">Questions</p>
            <p className="text-3xl font-bold text-blue-600">{totalQuestions}</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <p className="text-gray-600 text-sm">With SVG</p>
            <p className="text-3xl font-bold text-green-600">{questionsWithImages}</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <p className="text-gray-600 text-sm">Missing SVG</p>
            <p className="text-3xl font-bold text-red-600">{totalQuestions - questionsWithImages}</p>
          </div>
        </div>

        {/* Questions by Section */}
        {questionBank.map((section) => (
          <div key={section.sectionIndex} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-blue-500 pb-2">
              Section {section.sectionIndex + 1}
              <span className="text-lg font-normal text-gray-600 ml-2">
                ({section.questions.length} questions)
              </span>
            </h2>

            <div className="space-y-8">
              {section.questions.map((question, qIdx) => (
                <div
                  key={question.questionId}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                >
                  {/* Question Header */}
                  <div className="bg-blue-50 px-6 py-3 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-800">
                      Question {qIdx + 1} - {question.questionId}
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                    {/* Left: Problem Statement & Solution */}
                    <div className="space-y-4">
                      {/* Problem Statement */}
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Problem Statement:</h4>
                        <p className="text-gray-800 leading-relaxed">
                          {question.problemStatement}
                        </p>
                      </div>

                      {/* Correct Answer */}
                      <div className="bg-green-50 border border-green-200 rounded-md p-3">
                        <h4 className="font-semibold text-green-800 mb-1">Correct Answer:</h4>
                        <p className="text-green-900 text-lg font-bold">
                          {question.correctAnswer}
                        </p>
                      </div>

                      {/* Step-by-Step Solution */}
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Solution Steps:</h4>
                        <div className="space-y-2">
                          {question.stepByStepSolution.map((step) => (
                            <div
                              key={step.stepNumber}
                              className="flex gap-3 text-sm"
                            >
                              <div className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                                {step.stepNumber}
                              </div>
                              <p className="text-gray-700 leading-relaxed flex-1">
                                {step.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: SVG Diagram */}
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-gray-700 mb-2">Diagram:</h4>
                      <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-md border-2 border-gray-200 p-4 min-h-[300px]">
                        {question.imagePath ? (
                          <img
                            src={question.imagePath}
                            alt={`Diagram for ${question.questionId}`}
                            className="max-w-full max-h-96 w-auto h-auto"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400"><rect width="500" height="400" fill="%23fef2f2"/><text x="250" y="190" text-anchor="middle" fill="%23dc2626" font-family="Arial" font-size="16" font-weight="bold">SVG Not Found</text><text x="250" y="220" text-anchor="middle" fill="%23999" font-family="Arial" font-size="12">' + encodeURIComponent(question.imagePath || '') + '</text></svg>';
                            }}
                          />
                        ) : (
                          <div className="text-center text-gray-400">
                            <p className="text-lg font-medium">No diagram</p>
                            <p className="text-sm">This question has no SVG image</p>
                          </div>
                        )}
                      </div>
                      {question.imagePath && (
                        <p className="text-xs text-gray-500 mt-2 text-center font-mono">
                          {question.imagePath}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* No Questions State */}
        {questionBank.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
            <p className="text-gray-500 text-lg">No questions found in this question bank.</p>
          </div>
        )}

        {/* Back to Dev Tools */}
        <div className="mt-8 text-center">
          <a
            href="/dev"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Dev Tools
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuestionBankViewer;
