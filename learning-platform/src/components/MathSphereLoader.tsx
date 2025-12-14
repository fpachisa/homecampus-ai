/**
 * MathSphereLoader - Lightweight animated math sphere for loading screens
 *
 * A simplified version of MathAntigravity optimized for loading states:
 * - Fewer particles (~30) for better performance
 * - Auto-rotating (no mouse interaction needed)
 * - Smaller size suitable for loading overlays
 * - Theme-aware colors
 */

import React, { useEffect, useRef } from 'react';
import { useThemeContext } from '../contexts/ThemeContext';

interface Particle {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  size: number;
  symbol: string;
  color: string;
  phase: number;
}

interface MathSphereLoaderProps {
  size?: number;          // Canvas size (default 180)
  message?: string;       // Optional loading message
  particleCount?: number; // Number of symbols (default 30)
}

const MathSphereLoader: React.FC<MathSphereLoaderProps> = ({
  size = 180,
  message,
  particleCount = 30,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useThemeContext();

  const config = {
    particleCount,
    colors: [
      theme.colors.brand,
      theme.colors.success,
      theme.colors.warning,
      theme.colors.info,
      theme.colors.textAccent,
    ],
    symbols: [
      '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      '+', '-', '×', '÷', '=',
      'π', '∑', '√', '∞', 'θ',
      '%', 'e',
    ],
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with device pixel ratio for sharpness
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    let particles: Particle[] = [];
    let animationFrameId: number;
    let time = 0;
    let rotationAngle = 0;

    const sphereRadius = size * 0.35; // Sphere radius relative to canvas

    const createParticle = (index: number, total: number): Particle => {
      // Fibonacci Sphere Algorithm for even distribution
      const phi = Math.acos(1 - 2 * (index + 0.5) / total);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (index + 0.5);

      const x = sphereRadius * Math.sin(phi) * Math.cos(theta);
      const y = sphereRadius * Math.sin(phi) * Math.sin(theta);
      const z = sphereRadius * Math.cos(phi);

      return {
        x, y, z,
        baseX: x,
        baseY: y,
        baseZ: z,
        size: 10 + Math.random() * 8,
        symbol: config.symbols[Math.floor(Math.random() * config.symbols.length)],
        color: config.colors[Math.floor(Math.random() * config.colors.length)],
        phase: Math.random() * Math.PI * 2,
      };
    };

    // Initialize particles
    particles = [];
    for (let i = 0; i < config.particleCount; i++) {
      particles.push(createParticle(i, config.particleCount));
    }

    const animate = () => {
      ctx.clearRect(0, 0, size, size);
      time += 0.015;
      rotationAngle += 0.008; // Auto-rotation speed

      const centerX = size / 2;
      const centerY = size / 2;

      // Auto-rotation angles
      const rotY = rotationAngle;
      const rotX = Math.sin(time * 0.5) * 0.3; // Gentle tilt

      // Breathing effect
      const breathCycle = (Math.sin(time * 2) + 1) / 2;
      const breathScale = 1 + breathCycle * 0.1;

      // Pre-calculate rotation matrices
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      particles.forEach((p) => {
        // Apply breathing scale
        let x = p.baseX * breathScale;
        let y = p.baseY * breathScale;
        let z = p.baseZ * breathScale;

        // Add subtle organic movement
        x += Math.sin(time + p.phase) * 2;
        y += Math.cos(time * 0.8 + p.phase) * 2;

        // Rotate around Y axis
        let x1 = x * cosY - z * sinY;
        let z1 = z * cosY + x * sinY;

        // Rotate around X axis
        let y2 = y * cosX - z1 * sinX;
        let z2 = z1 * cosX + y * sinX;

        // Update particle position
        p.x = x1;
        p.y = y2;
        p.z = z2;
      });

      // Sort by depth (painter's algorithm)
      particles.sort((a, b) => a.z - b.z);

      // Draw particles
      particles.forEach((p) => {
        // 3D Projection
        const perspective = 400;
        const scale = perspective / (perspective + p.z);

        const screenX = centerX + p.x * scale;
        const screenY = centerY + p.y * scale;

        // Depth-based styling
        const depthAlpha = Math.max(0.2, Math.min(1, (p.z + sphereRadius * 1.5) / (sphereRadius * 3)));
        const depthScale = scale;

        ctx.save();
        ctx.translate(screenX, screenY);

        // Pulsing opacity
        const pulseOpacity = 0.6 + Math.sin(time * 1.5 + p.phase) * 0.3;
        ctx.globalAlpha = Math.min(1, depthAlpha * pulseOpacity);

        ctx.font = `${Math.max(8, p.size * depthScale)}px "Segoe UI", system-ui, sans-serif`;
        ctx.fillStyle = p.color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Glow effect for front particles
        if (scale > 0.7) {
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8 + breathCycle * 4;
        }

        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, size, particleCount]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: size,
          height: size,
        }}
      />
      {message && (
        <p
          style={{
            fontSize: theme.typography.fontSize.base,
            color: theme.colors.textSecondary,
            fontFamily: theme.typography.fontFamily,
            textAlign: 'center',
            margin: 0,
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default MathSphereLoader;
