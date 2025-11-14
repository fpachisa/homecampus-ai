/**
 * UploadZone Component
 * Drag-and-drop file upload for homework problems
 */

import React, { useCallback, useState } from 'react';
import { Upload, Image, FileText, AlertCircle } from 'lucide-react';
import type { Theme } from '../../styles/themes';

interface UploadZoneProps {
  onUpload: (file: File) => void;
  theme: Theme;
  maxSizeMB?: number;
  disabled?: boolean;
}

const ACCEPTED_TYPES = {
  'image/png': ['.png'],
  'image/jpeg': ['.jpg', '.jpeg'],
  'application/pdf': ['.pdf'],
};

export const UploadZone: React.FC<UploadZoneProps> = ({
  onUpload,
  theme,
  maxSizeMB = 10,
  disabled = false,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateFile = useCallback(
    (file: File): string | null => {
      // Check file type
      if (!Object.keys(ACCEPTED_TYPES).includes(file.type)) {
        return 'Please upload a PNG, JPEG, or PDF file';
      }

      // Check file size
      const maxBytes = maxSizeMB * 1024 * 1024;
      if (file.size > maxBytes) {
        return `File size must be less than ${maxSizeMB}MB`;
      }

      return null;
    },
    [maxSizeMB]
  );

  const handleFile = useCallback(
    (file: File) => {
      setError(null);
      const validationError = validateFile(file);

      if (validationError) {
        setError(validationError);
        return;
      }

      onUpload(file);
    },
    [validateFile, onUpload]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      if (disabled) return;

      const files = Array.from(e.dataTransfer.files);
      if (files.length > 0) {
        handleFile(files[0]);
      }
    },
    [disabled, handleFile]
  );

  const handleFileInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(e.target.files || []);
      if (files.length > 0) {
        handleFile(files[0]);
      }
      // Reset input
      e.target.value = '';
    },
    [handleFile]
  );

  return (
    <div className="w-full">
      <div
        className="relative border-2 border-dashed rounded-lg p-8 transition-all"
        style={{
          borderColor: isDragging ? theme.colors.brand : theme.colors.border,
          backgroundColor: isDragging ? `${theme.colors.brand}10` : 'transparent',
          opacity: disabled ? 0.5 : 1,
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="file-upload"
          className="hidden"
          accept={Object.keys(ACCEPTED_TYPES).join(',')}
          onChange={handleFileInput}
          disabled={disabled}
        />

        <label
          htmlFor="file-upload"
          className={`flex flex-col items-center justify-center space-y-4 ${
            disabled ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
        >
          <div
            className="p-4 rounded-full"
            style={{ backgroundColor: `${theme.colors.brand}20` }}
          >
            <Upload className="w-8 h-8" style={{ color: theme.colors.brand }} />
          </div>

          <div className="text-center">
            <p className="text-lg font-medium" style={{ color: theme.colors.textPrimary }}>
              Drop your problem here or click to upload
            </p>
            <p className="text-sm mt-2" style={{ color: theme.colors.textSecondary }}>
              Supports PNG, JPEG, and PDF files up to {maxSizeMB}MB
            </p>
          </div>

          <div className="flex items-center space-x-4 text-sm" style={{ color: theme.colors.textSecondary }}>
            <div className="flex items-center space-x-1">
              <Image className="w-4 h-4" />
              <span>Image</span>
            </div>
            <div className="flex items-center space-x-1">
              <FileText className="w-4 h-4" />
              <span>PDF</span>
            </div>
          </div>

          <button
            type="button"
            className="px-6 py-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor: theme.colors.brand,
              color: '#ffffff',
              cursor: disabled ? 'not-allowed' : 'pointer',
            }}
            onMouseEnter={(e) => {
              if (!disabled) e.currentTarget.style.opacity = '0.9';
            }}
            onMouseLeave={(e) => {
              if (!disabled) e.currentTarget.style.opacity = '1';
            }}
            onClick={() => document.getElementById('file-upload')?.click()}
            disabled={disabled}
          >
            Select File
          </button>
        </label>
      </div>

      {error && (
        <div className="mt-4 p-3 rounded-lg flex items-start space-x-2" style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444' }}>
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}

      <div
        className="mt-4 p-4 rounded-lg"
        style={{
          backgroundColor: `${theme.colors.brand}10`,
          border: `1px solid ${theme.colors.brand}30`,
        }}
      >
        <p className="text-sm" style={{ color: theme.colors.textSecondary }}>
          <strong style={{ color: theme.colors.textPrimary }}>Tip:</strong> For best results, make sure your problem is clearly visible and
          well-lit. Include any diagrams or graphs that are part of the problem.
        </p>
      </div>
    </div>
  );
};
