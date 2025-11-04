/**
 * Question Bank Viewer
 * Preview component for reviewing pre-generated questions with their SVG diagrams
 */

import React from 'react';
import { S1_MATH_PERIMETER_AREA_COMPOSITE_QUESTION_BANK } from '../data/learn/question-banks/s1-math-perimeter-area-composite.js';

interface QuestionViewerProps {
  questionBank?: typeof S1_MATH_PERIMETER_AREA_COMPOSITE_QUESTION_BANK;
}

export const QuestionBankViewer: React.FC<QuestionViewerProps> = ({
  questionBank = S1_MATH_PERIMETER_AREA_COMPOSITE_QUESTION_BANK
}) => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Question Bank Viewer
        </h1>
        <p className="text-gray-600 mb-8">
          Composite Figures - Perimeter & Area
        </p>

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
                      <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-md border-2 border-gray-200 p-4">
                        <img
                          src={question.imagePath}
                          alt={`Diagram for ${question.questionId}`}
                          className="max-w-full max-h-96 w-auto h-auto"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400"><rect width="500" height="400" fill="%23f3f4f6"/><text x="250" y="200" text-anchor="middle" fill="%23999" font-family="Arial" font-size="18">Image not found</text></svg>';
                          }}
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-2 text-center">
                        {question.imagePath}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Summary Footer */}
        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-gray-600">Total Sections:</p>
              <p className="text-2xl font-bold text-blue-600">{questionBank.length}</p>
            </div>
            <div>
              <p className="text-gray-600">Total Questions:</p>
              <p className="text-2xl font-bold text-blue-600">
                {questionBank.reduce((sum, section) => sum + section.questions.length, 0)}
              </p>
            </div>
            <div>
              <p className="text-gray-600">Avg Questions/Section:</p>
              <p className="text-2xl font-bold text-blue-600">
                {(questionBank.reduce((sum, section) => sum + section.questions.length, 0) / questionBank.length).toFixed(1)}
              </p>
            </div>
            <div>
              <p className="text-gray-600">SVG Diagrams:</p>
              <p className="text-2xl font-bold text-blue-600">
                {questionBank.reduce((sum, section) => sum + section.questions.length, 0)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionBankViewer;
