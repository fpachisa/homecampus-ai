/**
 * DrawingCanvas Component
 *
 * HTML5 Canvas-based drawing component with touch and mouse support.
 * Allows freehand drawing with color, pen size, and eraser tools.
 */

import { useRef, useState, useEffect } from 'react';

interface DrawingCanvasProps {
  initialImage?: string;  // base64 PNG to restore previous drawing
  onSave: (imageData: string) => void;
  color: string;
  penSize: number;
  tool: 'pen' | 'eraser';
  disabled?: boolean;
}

const DrawingCanvas: React.FC<DrawingCanvasProps> = ({
  initialImage,
  onSave,
  color,
  penSize,
  tool,
  disabled = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState<{ x: number; y: number } | null>(null);

  // Initialize canvas with saved image or blank state
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Fill with white background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Load initial image if provided
    if (initialImage) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
      img.src = initialImage;
    }
  }, [initialImage]);

  // Get canvas coordinates from mouse/touch event
  const getCanvasCoordinates = (e: React.MouseEvent | React.TouchEvent): { x: number; y: number } | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    let clientX: number;
    let clientY: number;

    if ('touches' in e) {
      // Touch event
      if (e.touches.length === 0) return null;
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      // Mouse event
      clientX = e.clientX;
      clientY = e.clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  };

  // Start drawing
  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    if (disabled) return;
    e.preventDefault();

    const coords = getCanvasCoordinates(e);
    if (!coords) return;

    setIsDrawing(true);
    setLastPosition(coords);
  };

  // Draw line
  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || disabled) return;
    e.preventDefault();

    const coords = getCanvasCoordinates(e);
    if (!coords || !lastPosition) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!ctx) return;

    // Configure drawing style
    ctx.beginPath();
    ctx.moveTo(lastPosition.x, lastPosition.y);
    ctx.lineTo(coords.x, coords.y);
    ctx.strokeStyle = tool === 'eraser' ? '#ffffff' : color;
    ctx.lineWidth = tool === 'eraser' ? penSize * 3 : penSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();

    setLastPosition(coords);
  };

  // Stop drawing and save
  const stopDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);
    setLastPosition(null);

    // Save canvas state
    const canvas = canvasRef.current;
    if (canvas) {
      const imageData = canvas.toDataURL('image/png');
      onSave(imageData);
    }
  };

  // Handle mouse leave (stop drawing if cursor leaves canvas)
  const handleMouseLeave = () => {
    if (isDrawing) {
      stopDrawing();
    }
  };

  return (
    <div className="relative w-full h-full">
      <canvas
        ref={canvasRef}
        className={`w-full h-full border-2 border-gray-300 rounded-lg canvas-grid-bg ${
          disabled ? 'cursor-not-allowed opacity-50' : 'cursor-crosshair'
        }`}
        style={{
          touchAction: 'none', // Prevent scrolling while drawing on touch devices
          minHeight: '300px'
        }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={handleMouseLeave}
        onTouchStart={startDrawing}
        onTouchMove={draw}
        onTouchEnd={stopDrawing}
      />
    </div>
  );
};

export default DrawingCanvas;
