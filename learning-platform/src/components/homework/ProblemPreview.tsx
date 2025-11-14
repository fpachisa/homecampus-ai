/**
 * ProblemPreview Component
 * Shows analyzed problem with extracted text and confirmation options
 */

import React, { useState } from 'react';
import {
  CheckCircle,
  Edit3,
  AlertTriangle,
  BookOpen,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Loader,
} from 'lucide-react';
import type { ProblemAnalysis, GradeAppropriatenessCheck } from '../../types/homework';
import type { Theme } from '../../styles/themes';

interface ProblemPreviewProps {
  imageUrl: string;
  analysis: ProblemAnalysis;
  gradeCheck: GradeAppropriatenessCheck;
  onConfirm: (finalText: string) => void;
  onCancel: () => void;
  isProcessing?: boolean;
  theme: Theme;
}

export const ProblemPreview: React.FC<ProblemPreviewProps> = ({
  imageUrl,
  analysis,
  gradeCheck,
  onConfirm,
  onCancel,
  isProcessing = false,
  theme,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(analysis.extractedText);

  const handleConfirm = () => {
    onConfirm(editedText);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'basic':
        return 'text-green-700 bg-green-100';
      case 'intermediate':
        return 'text-yellow-700 bg-yellow-100';
      case 'advanced':
        return 'text-red-700 bg-red-100';
      default:
        return 'text-gray-700 bg-gray-100';
    }
  };

  const getRecommendationIcon = (recommendation: string) => {
    switch (recommendation) {
      case 'proceed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'review-needed':
        return <BookOpen className="w-5 h-5 text-yellow-600" />;
      case 'too-advanced':
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case 'too-basic':
        return <TrendingUp className="w-5 h-5 text-blue-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-gray-600" />;
    }
  };

  const getRecommendationColor = (recommendation: string) => {
    switch (recommendation) {
      case 'proceed':
        return 'bg-green-50 border-green-200';
      case 'review-needed':
        return 'bg-yellow-50 border-yellow-200';
      case 'too-advanced':
        return 'bg-red-50 border-red-200';
      case 'too-basic':
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">Problem Preview</h2>
        <p className="text-gray-600 mt-2">Review and confirm the problem details</p>
      </div>

      {/* Grade Check Notice */}
      <div
        className={`p-4 border rounded-lg ${getRecommendationColor(gradeCheck.recommendation)}`}
      >
        <div className="flex items-start space-x-3">
          {getRecommendationIcon(gradeCheck.recommendation)}
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800">
              {gradeCheck.recommendation === 'proceed' && 'Perfect Match!'}
              {gradeCheck.recommendation === 'review-needed' && 'Review Recommended'}
              {gradeCheck.recommendation === 'too-advanced' && 'Challenging Problem'}
              {gradeCheck.recommendation === 'too-basic' && 'Review Problem'}
            </h3>
            <p className="text-sm mt-1 text-gray-700">
              {gradeCheck.suggestionMessage || gradeCheck.reason}
            </p>
            {gradeCheck.conceptsMissing.length > 0 && (
              <div className="mt-2 text-sm">
                <strong>Concepts you'll learn:</strong>{' '}
                {gradeCheck.conceptsMissing.join(', ')}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: Image */}
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-700">Uploaded Image</h3>
          <div className="border rounded-lg overflow-hidden bg-gray-50">
            <img src={imageUrl} alt="Problem" className="w-full h-auto" />
          </div>
        </div>

        {/* Right: Analysis */}
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Problem Statement</h3>
            {!isEditing ? (
              <div className="p-3 bg-gray-50 border rounded-lg">
                <p className="text-gray-800 whitespace-pre-wrap">{editedText}</p>
                <button
                  onClick={() => setIsEditing(true)}
                  className="mt-2 text-sm text-blue-600 hover:text-blue-700 flex items-center space-x-1"
                >
                  <Edit3 className="w-4 h-4" />
                  <span>Edit if needed</span>
                </button>
              </div>
            ) : (
              <div>
                <textarea
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={6}
                />
                <button
                  onClick={() => setIsEditing(false)}
                  className="mt-2 text-sm text-blue-600 hover:text-blue-700"
                >
                  Done editing
                </button>
              </div>
            )}
          </div>

          {/* Topic Info */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-xs text-blue-600 font-medium">Topic</p>
              <p className="text-sm font-semibold text-gray-800 capitalize">{analysis.topic}</p>
            </div>
            <div className={`p-3 border rounded-lg ${getDifficultyColor(analysis.difficulty)}`}>
              <p className="text-xs font-medium">Difficulty</p>
              <p className="text-sm font-semibold capitalize">{analysis.difficulty}</p>
            </div>
          </div>

          {/* Key Concepts */}
          {analysis.keyMathConcepts.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Concepts</h4>
              <div className="flex flex-wrap gap-2">
                {analysis.keyMathConcepts.map((concept, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                  >
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Visual Elements */}
          {analysis.visualElements.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Visual Elements</h4>
              <div className="flex flex-wrap gap-2">
                {analysis.visualElements.map((element, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {element}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Clarification Needed */}
      {analysis.clarificationNeeded && analysis.clarificationNeeded.length > 0 && (
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-800">Image Quality Notice</h4>
              <p className="text-sm text-yellow-700 mt-1">
                Some parts of the image were unclear:
              </p>
              <ul className="list-disc list-inside text-sm text-yellow-700 mt-2">
                {analysis.clarificationNeeded.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-sm text-yellow-700 mt-2">
                You can still proceed, but you might need to clarify these details during the
                session.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-between items-center pt-4 border-t" style={{ borderColor: theme.colors.border }}>
        <button
          onClick={onCancel}
          disabled={isProcessing}
          className="px-6 py-2 rounded-lg transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            backgroundColor: theme.colors.interactive,
            color: theme.colors.textSecondary,
            border: `1px solid ${theme.colors.border}`,
          }}
          onMouseEnter={(e) => {
            if (!isProcessing) {
              e.currentTarget.style.backgroundColor = theme.colors.textMuted + '20';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = theme.colors.interactive;
          }}
        >
          Upload Different Problem
        </button>

        <button
          onClick={handleConfirm}
          disabled={isProcessing}
          className="px-6 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 font-medium disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-lg"
          style={{
            backgroundColor: theme.colors.brand,
            color: '#ffffff',
          }}
          onMouseEnter={(e) => {
            if (!isProcessing) {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.backgroundColor = theme.colors.brandHover || theme.colors.brand;
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.backgroundColor = theme.colors.brand;
          }}
        >
          {isProcessing ? (
            <>
              <Loader className="w-5 h-5 animate-spin" />
              <span>Starting Session...</span>
            </>
          ) : (
            <>
              <span>Start Tutoring Session</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};
