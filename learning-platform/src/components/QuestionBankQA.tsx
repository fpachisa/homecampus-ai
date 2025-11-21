/**
 * Question Bank QA Interface
 * Review and validate processed exam questions with solutions
 */

import { useState, useEffect } from 'react';
import MathText from './MathText';
import { MathToolRenderer } from './practice/MathToolRenderer';
import { TableRenderer } from './practice/TableRenderer';
import { QuestionTable } from './tables';
import type { QuestionTable as QuestionTableType } from '../types/examQuestions';

// ============================================
// TYPE DEFINITIONS
// ============================================

interface SolutionStep {
  step: number;
  explanation: string;
  working: string;
  reasoning: string;
}

interface PartSolution {
  finalAnswer: string;
  stepByStep: SolutionStep[];
}

interface QuestionPart {
  partId: string | null;
  questionText: string;
  marks: number;
  answerType: string;
  table?: QuestionTableType;
  tables?: QuestionTableType[];
  solution: PartSolution;
}

interface Question {
  questionId: string;
  questionNumber: number;
  topicId: string;
  paper: string;
  stem: string;
  table?: QuestionTableType;
  hasDiagram: boolean;
  diagram: any;
  parts: QuestionPart[];
  totalMarks: number;
  title?: string;
}

interface QuestionBankData {
  metadata: {
    school: string;
    year: number;
    paper: string;
    processedDate: string;
    totalQuestions: number;
    successfullyProcessed: number;
  };
  questions: Question[];
}

// Topic name mapping
const TOPIC_NAMES: Record<string, string> = {
  'N1': 'Numbers and operations',
  'N2': 'Ratio and proportion',
  'N3': 'Percentage',
  'N4': 'Rate and speed',
  'N5': 'Algebraic expressions',
  'N6': 'Functions and graphs',
  'N7': 'Equations and inequalities',
  'N8': 'Set language and notation',
  'N9': 'Matrices',
  'G1': 'Angles, triangles and polygons',
  'G2': 'Congruence and similarity',
  'G3': 'Properties of circles',
  'G4': 'Pythagoras and trigonometry',
  'G5': 'Mensuration',
  'G6': 'Coordinate geometry',
  'G7': 'Vectors',
  'S1': 'Data handling and analysis',
  'S2': 'Probability',
};

// ============================================
// MAIN COMPONENT
// ============================================

export default function QuestionBankQA() {
  const [questionBank, setQuestionBank] = useState<QuestionBankData | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [showSolutions, setShowSolutions] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load question bank on mount
  useEffect(() => {
    loadQuestionBank();
  }, []);

  const loadQuestionBank = async () => {
    try {
      setLoading(true);

      // All topic files to load
      const topicFiles = [
        'n1', 'n2', 'n3', 'n4', 'n5', 'n6', 'n7', 'n8', 'n9',
        'g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7',
        's1', 's2'
      ];

      // Load all files
      const allQuestions: Question[] = [];
      let successCount = 0;

      for (const topicFile of topicFiles) {
        try {
          const response = await fetch(`/curriculum-content/o-level/exam-papers/QA/${topicFile}.json`);

          if (response.ok) {
            const text = await response.text();
            const data = JSON.parse(text);

            // Extract questions from Paper 1 and Paper 2
            const paper1Questions = data.questions['Paper 1'] || [];
            const paper2Questions = data.questions['Paper 2'] || [];

            // Normalize topicID to topicId (JSON uses uppercase ID) and map questionTable to table
            const normalizedP1 = paper1Questions.map((q: any) => ({
              ...q,
              topicId: q.topicID || q.topicId,
              table: q.table || q.questionTable,
              parts: q.parts?.map((p: any) => ({
                ...p,
                table: p.table || p.questionTable,
                tables: p.tables || p.questionTables
              }))
            }));
            const normalizedP2 = paper2Questions.map((q: any) => ({
              ...q,
              topicId: q.topicID || q.topicId,
              table: q.table || q.questionTable,
              parts: q.parts?.map((p: any) => ({
                ...p,
                table: p.table || p.questionTable,
                tables: p.tables || p.questionTables
              }))
            }));

            allQuestions.push(...normalizedP1, ...normalizedP2);
            successCount++;
          }
        } catch (err) {
          console.warn(`Failed to load ${topicFile}.json:`, err);
          // Continue loading other files
        }
      }

      // Create aggregated question bank
      const questionBankData: QuestionBankData = {
        metadata: {
          school: 'Multiple Schools',
          year: 2024,
          paper: 'All Papers',
          processedDate: new Date().toISOString(),
          totalQuestions: allQuestions.length,
          successfullyProcessed: allQuestions.length
        },
        questions: allQuestions
      };

      setQuestionBank(questionBankData);
      setLoading(false);
    } catch (err) {
      setError((err as Error).message);
      setLoading(false);
    }
  };

  // Get filtered questions
  const getFilteredQuestions = (): Question[] => {
    if (!questionBank) return [];
    if (selectedTopic === 'all') return questionBank.questions;
    return questionBank.questions.filter(q => q.topicId === selectedTopic);
  };

  const filteredQuestions = getFilteredQuestions();
  const currentQuestion = filteredQuestions[currentIndex];

  // Get unique topics from question bank
  const getAvailableTopics = (): string[] => {
    if (!questionBank) return [];
    const topics = new Set(questionBank.questions.map(q => q.topicId));
    return Array.from(topics).sort();
  };

  const availableTopics = getAvailableTopics();

  // Navigation
  const goToNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowSolutions(false);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowSolutions(false);
    }
  };

  // Topic change resets index
  const handleTopicChange = (topic: string) => {
    setSelectedTopic(topic);
    setCurrentIndex(0);
    setShowSolutions(false);
  };

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading question bank...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !questionBank) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <h2 className="text-red-800 font-semibold mb-2">Error Loading Question Bank</h2>
          <p className="text-red-600">{error || 'Question bank data not available'}</p>
        </div>
      </div>
    );
  }

  // No questions state
  if (filteredQuestions.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-md">
          <h2 className="text-yellow-800 font-semibold mb-2">No Questions Found</h2>
          <p className="text-yellow-600">No questions available for the selected topic.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Question Bank QA Tool (QA Queue)</h1>
              <p className="text-sm text-gray-600 mt-1">
                {questionBank.metadata.school} {questionBank.metadata.year} · {questionBank.metadata.paper}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">
                {questionBank.metadata.successfullyProcessed} questions processed
              </div>
            </div>
          </div>

          {/* Topic Filter */}
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700">Filter by Topic:</label>
            <select
              value={selectedTopic}
              onChange={(e) => handleTopicChange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Topics ({questionBank.questions.length})</option>
              {availableTopics.map(topic => {
                const count = questionBank.questions.filter(q => q.topicId === topic).length;
                return (
                  <option key={topic} value={topic}>
                    {topic} - {TOPIC_NAMES[topic]} ({count})
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        {currentQuestion && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {/* Question Header */}
            <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Question {currentQuestion.questionNumber}
                    {currentQuestion.title && (
                      <span className="text-blue-600 ml-2">· {currentQuestion.title}</span>
                    )}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">
                    ID: {currentQuestion.questionId} · Topic: {currentQuestion.topicId} ·
                    Paper: {currentQuestion.paper} · Marks: {currentQuestion.totalMarks}
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                    {TOPIC_NAMES[currentQuestion.topicId]}
                  </span>
                </div>
              </div>
            </div>

            {/* Question Content */}
            <div className="px-6 py-6">
              {/* Stem - Match Practice module styling */}
              {currentQuestion.stem && (
                <div className="text-gray-800 text-lg leading-relaxed mb-6">
                  <MathText>{currentQuestion.stem}</MathText>
                </div>
              )}

              {/* Structured Table - NEW */}
              {currentQuestion.table && (
                <div className="mb-6">
                  <QuestionTable table={currentQuestion.table} />
                </div>
              )}

              {/* Diagram - Display if available */}
              {currentQuestion.hasDiagram && currentQuestion.diagram && (
                <div className="mb-6">
                  {/* SVG Diagram from file path */}
                  {currentQuestion.diagram.type === 'needsSVG' && currentQuestion.diagram.diagramPath && (
                    <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <img
                        src={currentQuestion.diagram.diagramPath}
                        alt={currentQuestion.diagram.description || 'Diagram'}
                        className="max-w-full h-auto"
                        onError={(e) => {
                          // Show error message if SVG fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="text-red-600 text-sm">⚠️ Diagram not found: ${currentQuestion.diagram.diagramPath}</div>`;
                          }
                        }}
                      />
                      {currentQuestion.diagram.description && (
                        <div className="text-sm text-gray-600 mt-2 text-center italic">
                          {currentQuestion.diagram.description}
                        </div>
                      )}
                    </div>
                  )}

                  {/* MathTool Diagram (interactive visualization) */}
                  {currentQuestion.diagram.type === 'mathTool' && currentQuestion.diagram.toolName && (
                    <div className="bg-gray-50 rounded-lg border border-gray-200">
                      <MathToolRenderer
                        toolName={currentQuestion.diagram.toolName}
                        parameters={currentQuestion.diagram.config || {}}
                      />
                      {currentQuestion.diagram.description && (
                        <div className="text-sm text-gray-600 px-4 pb-4 text-center italic">
                          {currentQuestion.diagram.description}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Table Data */}
                  {currentQuestion.diagram.type === 'table' && currentQuestion.diagram.tableData && (
                    <TableRenderer tableData={currentQuestion.diagram.tableData} />
                  )}
                </div>
              )}

              {/* Parts */}
              <div className="space-y-6">
                {currentQuestion.parts.map((part, partIndex) => (
                  <div key={partIndex} className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 text-gray-800 text-lg leading-relaxed">
                        {part.partId && (
                          <span className="font-semibold text-gray-700">({part.partId}) </span>
                        )}
                        <MathText>{part.questionText}</MathText>
                      </div>
                      <span className="ml-4 text-sm text-gray-500 whitespace-nowrap">
                        [{part.marks} mark{part.marks > 1 ? 's' : ''}]
                      </span>
                    </div>

                    {/* Part Table - NEW */}
                    {part.table && (
                      <div className="mb-4 mt-2">
                        <QuestionTable table={part.table} />
                      </div>
                    )}
                    {part.tables && part.tables.map((tbl, idx) => (
                      <div key={idx} className="mb-4 mt-2">
                        <QuestionTable table={tbl} />
                      </div>
                    ))}

                    {/* Solution for this part - Match Practice module styling */}
                    {showSolutions && part.solution && (
                      <div className="mt-6 p-4 bg-purple-100 border-2 border-purple-400 rounded-lg">
                        <div className="font-semibold text-purple-800 mb-3">Solution:</div>

                        {/* Step-by-Step */}
                        {part.solution.stepByStep && part.solution.stepByStep.length > 0 && (
                          <div className="space-y-2 mb-3">
                            {part.solution.stepByStep.map((step, stepIndex) => (
                              <div key={stepIndex} className="text-gray-700">
                                <div className="font-medium text-gray-900 mb-1">
                                  Step {step.step}: <MathText>{step.explanation}</MathText>
                                </div>
                                <div className="ml-4">
                                  <MathText>{step.working}</MathText>
                                </div>
                                {step.reasoning && (
                                  <div className="ml-4 text-sm text-gray-600 italic mt-1">
                                    <MathText>{step.reasoning}</MathText>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Final Answer */}
                        <div className="mt-3 pt-3 border-t border-purple-200 font-semibold text-purple-800">
                          Final Answer: <MathText>{part.solution.finalAnswer}</MathText>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setShowSolutions(!showSolutions)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors"
                >
                  {showSolutions ? '▲ Hide Solutions' : '▼ Show Solutions'}
                </button>

              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="px-6 py-3 bg-white border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ← Previous
          </button>

          <div className="text-center">
            <p className="text-lg font-semibold text-gray-900">
              Question {currentIndex + 1} of {filteredQuestions.length}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              {selectedTopic === 'all' ? 'All Topics' : `${selectedTopic} - ${TOPIC_NAMES[selectedTopic]}`}
            </p>
          </div>

          <button
            onClick={goToNext}
            disabled={currentIndex === filteredQuestions.length - 1}
            className="px-6 py-3 bg-white border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next →
          </button>
        </div>
      </main>
    </div>
  );
}
