import { useState } from 'react';
import MathText from './MathText';
import { MathToolRenderer } from './practice/MathToolRenderer';
import { QuestionTable } from './tables';
import type { QuestionTable as QuestionTableType } from '../types/examQuestions';
import type { PreWrittenQuestion } from '../types/practice';
import type { PathLayer } from '../types/practice';

interface QuestionPreviewCardProps {
  question: PreWrittenQuestion;
  nodeTitle: string;
  nodeId: string;
  layer: PathLayer;
}

const QuestionPreviewCard: React.FC<QuestionPreviewCardProps> = ({
  question,
  nodeTitle,
  nodeId: _nodeId,
  layer,
}) => {
  const [solutionExpanded, setSolutionExpanded] = useState(false);

  // Layer badge colors
  const layerColors: Record<PathLayer, { bg: string; text: string }> = {
    foundation: { bg: 'bg-blue-100', text: 'text-blue-800' },
    integration: { bg: 'bg-orange-100', text: 'text-orange-800' },
    application: { bg: 'bg-green-100', text: 'text-green-800' },
    examPractice: { bg: 'bg-purple-100', text: 'text-purple-800' },
  };

  const layerColor = layerColors[layer];

  return (
    <div className="border-2 border-gray-300 rounded-lg p-6 mb-4 bg-white shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b-2 border-gray-200">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold text-gray-800">{nodeTitle}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${layerColor.bg} ${layerColor.text}`}>
            {layer}
          </span>
        </div>
        <span className="text-sm text-gray-600 font-mono bg-gray-100 px-2 py-1 rounded">
          {question.id}
        </span>
      </div>

      {/* Avatar Intro */}
      {question.avatarIntro && (
        <div className="mb-4 p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
          <div className="flex items-start gap-2">
            <span className="text-blue-600 text-xl">🎤</span>
            <p className="text-blue-800 italic">{question.avatarIntro}</p>
          </div>
        </div>
      )}

      {/* Problem Text */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-600 mb-2">Problem:</h4>
        <div className="text-gray-800 text-base leading-relaxed">
          <MathText>{question.problemText}</MathText>
        </div>
      </div>

      {/* Structured Table */}
      {question.questionTable && (
        <div className="mb-4">
          <QuestionTable table={question.questionTable} />
        </div>
      )}

      {/* MathTool Visualization */}
      {question.mathTool && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-600 mb-2">Visualization:</h4>
          <MathToolRenderer
            toolName={question.mathTool.toolName}
            parameters={question.mathTool.parameters}
          />
        </div>
      )}

      {/* Diagram SVG (legacy) */}
      {question.diagramSvg && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-600 mb-2">Diagram:</h4>
          <img src={question.diagramSvg} alt="Question diagram" className="max-w-full h-auto" />
        </div>
      )}

      {/* Final Answer */}
      {question.finalAnswer && (
        <div className="mb-4 p-3 bg-green-50 border-l-4 border-green-400 rounded">
          <div className="flex items-start gap-2">
            <span className="text-green-600 text-xl">✓</span>
            <div>
              <h4 className="text-sm font-semibold text-green-800 mb-1">Answer:</h4>
              <div className="text-green-800">
                <MathText>{question.finalAnswer}</MathText>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Solution Steps (Collapsible) */}
      {question.stepByStepGuideline && question.stepByStepGuideline.length > 0 && (
        <div className="mb-2">
          <button
            onClick={() => setSolutionExpanded(!solutionExpanded)}
            className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors w-full text-left"
          >
            <span className="text-lg">📋</span>
            <span>Solution Steps</span>
            <span className="ml-auto text-gray-500">
              {solutionExpanded ? '▲' : '▼'}
            </span>
          </button>

          {solutionExpanded && (
            <div className="mt-3 p-4 bg-gray-50 rounded border border-gray-200">
              <ol className="list-decimal list-inside space-y-2">
                {question.stepByStepGuideline.map((step, index) => (
                  <li key={index} className="text-gray-700">
                    <span className="ml-2">
                      <MathText>{step}</MathText>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}

      {/* Question Group Info (for multi-part questions) */}
      {question.questionGroup && (
        <div className="mt-4 pt-3 border-t border-gray-200">
          <span className="text-xs text-gray-500">
            Part of question group: <span className="font-mono">{question.questionGroup}</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default QuestionPreviewCard;
