import { useRef, useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';

interface ScratchpadProps {
  onClear?: () => void;
  className?: string;
}

type DrawMode = 'pen' | 'eraser';
type ViewMode = 'canvas' | 'text';

const Scratchpad: React.FC<ScratchpadProps> = ({ onClear, className = '' }) => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawMode, setDrawMode] = useState<DrawMode>('pen');
  const [penColor, setPenColor] = useState('#5865F2');
  const [lineWidth, setLineWidth] = useState(3);
  const [viewMode, setViewMode] = useState<ViewMode>('canvas');
  const [textNotes, setTextNotes] = useState('');
  const [showGrid, setShowGrid] = useState(false);

  // History for undo/redo
  const [history, setHistory] = useState<ImageData[]>([]);
  const [historyStep, setHistoryStep] = useState(-1);

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match actual display size
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    // Scale context to account for device pixel ratio
    ctx.scale(dpr, dpr);

    // Set background
    ctx.fillStyle = theme.colors.secondary;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Draw grid if enabled
    if (showGrid) {
      drawGridBackground(ctx, rect.width, rect.height);
    }

    // Save initial state
    saveState();
  }, [theme, showGrid]);

  const drawGridBackground = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.strokeStyle = theme.colors.border;
    ctx.lineWidth = 0.5;

    const gridSize = 20;

    // Vertical lines
    for (let x = 0; x <= width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Horizontal lines
    for (let y = 0; y <= height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  };

  const getCanvasCoordinates = (canvas: HTMLCanvasElement, clientX: number, clientY: number) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  const saveState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const newHistory = history.slice(0, historyStep + 1);
    newHistory.push(imageData);

    // Limit history to 20 states
    if (newHistory.length > 20) {
      newHistory.shift();
    } else {
      setHistoryStep(historyStep + 1);
    }

    setHistory(newHistory);
  };

  const undo = () => {
    if (historyStep > 0) {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const newStep = historyStep - 1;
      setHistoryStep(newStep);
      ctx.putImageData(history[newStep], 0, 0);
    }
  };

  const redo = () => {
    if (historyStep < history.length - 1) {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const newStep = historyStep + 1;
      setHistoryStep(newStep);
      ctx.putImageData(history[newStep], 0, 0);
    }
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const coords = getCanvasCoordinates(canvas, clientX, clientY);

    ctx.beginPath();
    ctx.moveTo(coords.x, coords.y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    const coords = getCanvasCoordinates(canvas, clientX, clientY);

    if (drawMode === 'pen') {
      ctx.strokeStyle = penColor;
      ctx.lineWidth = lineWidth;
    } else {
      ctx.strokeStyle = theme.colors.secondary;
      ctx.lineWidth = lineWidth * 3;
    }

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    if (isDrawing) {
      setIsDrawing(false);
      saveState();
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();

    ctx.fillStyle = theme.colors.secondary;
    ctx.fillRect(0, 0, rect.width, rect.height);

    if (showGrid) {
      drawGridBackground(ctx, rect.width, rect.height);
    }

    saveState();
    onClear?.();
  };

  const clearAll = () => {
    clearCanvas();
    setTextNotes('');
  };

  const penColors = [
    { name: 'Brand', color: '#5865F2' },
    { name: 'Black', color: '#23272A' },
    { name: 'Red', color: '#ED4245' },
    { name: 'Green', color: '#57F287' },
    { name: 'Blue', color: '#3BA55D' },
    { name: 'Orange', color: '#FEE75C' },
  ];

  return (
    <div
      className={`flex flex-col h-full rounded-xl overflow-hidden ${className}`}
      style={{
        background: theme.glass.background,
        border: `1px solid ${theme.glass.border}`,
        backdropFilter: theme.glass.backdrop,
      }}
    >
      {/* Header */}
      <div
        className="px-4 py-3 border-b flex items-center justify-between"
        style={{ borderColor: theme.colors.border }}
      >
        <h3 className="font-semibold text-sm" style={{ color: theme.colors.textPrimary }}>
          Scratchpad ✏️
        </h3>

        {/* View Mode Toggle */}
        <div
          className="flex rounded-lg p-1"
          style={{ backgroundColor: theme.colors.interactive }}
        >
          <button
            onClick={() => setViewMode('canvas')}
            className="px-3 py-1 rounded text-xs font-medium transition-all"
            style={{
              backgroundColor: viewMode === 'canvas' ? theme.colors.brand : 'transparent',
              color: viewMode === 'canvas' ? '#ffffff' : theme.colors.textSecondary,
            }}
          >
            Draw
          </button>
          <button
            onClick={() => setViewMode('text')}
            className="px-3 py-1 rounded text-xs font-medium transition-all"
            style={{
              backgroundColor: viewMode === 'text' ? theme.colors.brand : 'transparent',
              color: viewMode === 'text' ? '#ffffff' : theme.colors.textSecondary,
            }}
          >
            Notes
          </button>
        </div>
      </div>

      {/* Canvas View */}
      {viewMode === 'canvas' && (
        <>
          {/* Toolbar */}
          <div
            className="px-4 py-2 border-b flex items-center justify-between flex-wrap gap-2"
            style={{ borderColor: theme.colors.border }}
          >
            {/* Draw Mode */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setDrawMode('pen')}
                className="p-2 rounded transition-all"
                style={{
                  backgroundColor: drawMode === 'pen' ? theme.colors.brand + '20' : theme.colors.interactive,
                  color: drawMode === 'pen' ? theme.colors.brand : theme.colors.textSecondary,
                }}
                title="Pen"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
              <button
                onClick={() => setDrawMode('eraser')}
                className="p-2 rounded transition-all"
                style={{
                  backgroundColor: drawMode === 'eraser' ? theme.colors.brand + '20' : theme.colors.interactive,
                  color: drawMode === 'eraser' ? theme.colors.brand : theme.colors.textSecondary,
                }}
                title="Eraser"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>

              {/* Line Width */}
              <input
                type="range"
                min="1"
                max="10"
                value={lineWidth}
                onChange={(e) => setLineWidth(Number(e.target.value))}
                className="w-16"
                title="Line Width"
              />
            </div>

            {/* Colors */}
            <div className="flex items-center space-x-1">
              {penColors.map((c) => (
                <button
                  key={c.color}
                  onClick={() => setPenColor(c.color)}
                  className="w-6 h-6 rounded-full border-2 transition-all"
                  style={{
                    backgroundColor: c.color,
                    borderColor: penColor === c.color ? theme.colors.brand : 'transparent',
                    transform: penColor === c.color ? 'scale(1.1)' : 'scale(1)',
                  }}
                  title={c.name}
                />
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <button
                onClick={undo}
                disabled={historyStep <= 0}
                className="p-2 rounded transition-all disabled:opacity-30"
                style={{
                  backgroundColor: theme.colors.interactive,
                  color: theme.colors.textSecondary,
                }}
                title="Undo"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                </svg>
              </button>
              <button
                onClick={redo}
                disabled={historyStep >= history.length - 1}
                className="p-2 rounded transition-all disabled:opacity-30"
                style={{
                  backgroundColor: theme.colors.interactive,
                  color: theme.colors.textSecondary,
                }}
                title="Redo"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2m18-10l-6 6m6-6l-6-6" />
                </svg>
              </button>
              <button
                onClick={() => setShowGrid(!showGrid)}
                className="p-2 rounded transition-all"
                style={{
                  backgroundColor: showGrid ? theme.colors.brand + '20' : theme.colors.interactive,
                  color: showGrid ? theme.colors.brand : theme.colors.textSecondary,
                }}
                title="Toggle Grid"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                </svg>
              </button>
              <button
                onClick={clearCanvas}
                className="p-2 rounded transition-all"
                style={{
                  backgroundColor: theme.colors.interactive,
                  color: '#ED4245',
                }}
                title="Clear Canvas"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Canvas */}
          <div className="flex-1 p-4 overflow-hidden">
            <canvas
              ref={canvasRef}
              className="w-full h-full rounded-lg cursor-crosshair"
              style={{
                backgroundColor: theme.colors.secondary,
                touchAction: 'none',
              }}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
            />
          </div>
        </>
      )}

      {/* Text Notes View */}
      {viewMode === 'text' && (
        <div className="flex-1 p-4 flex flex-col">
          <textarea
            value={textNotes}
            onChange={(e) => setTextNotes(e.target.value)}
            placeholder="Type your notes and working here..."
            className="flex-1 p-4 rounded-lg resize-none focus:outline-none"
            style={{
              backgroundColor: theme.colors.secondary,
              color: theme.colors.textPrimary,
              border: `1px solid ${theme.colors.border}`,
            }}
          />
          <button
            onClick={() => setTextNotes('')}
            className="mt-3 px-4 py-2 rounded-lg text-sm font-medium transition-all"
            style={{
              backgroundColor: theme.colors.interactive,
              color: theme.colors.textSecondary,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ED4245' + '20';
              e.currentTarget.style.color = '#ED4245';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = theme.colors.interactive;
              e.currentTarget.style.color = theme.colors.textSecondary;
            }}
          >
            Clear Notes
          </button>
        </div>
      )}

      {/* Footer */}
      <div
        className="px-4 py-2 border-t flex items-center justify-between"
        style={{ borderColor: theme.colors.border }}
      >
        <p className="text-xs" style={{ color: theme.colors.textMuted }}>
          Use this space for your working
        </p>
        <button
          onClick={clearAll}
          className="text-xs font-medium transition-all"
          style={{ color: '#ED4245' }}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Scratchpad;
