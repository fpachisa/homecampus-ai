import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

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

const MathAntigravity: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const [scrollOpacity, setScrollOpacity] = useState(1);

  const config = {
    particleCount: 100, // Increased for sphere density
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
      'π', '∑', '∫', '√', '∞', 'θ', 'α', 'β',
      'sin', 'cos', 'log',
      '∠', '△',
      '%', 'e', '∂', '∇', '∀', '∃', '∈', '∉'
    ]
  };

  // Handle scroll fade
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const foldHeight = window.innerHeight * 0.7;

      if (scrollY <= 0) {
        setScrollOpacity(1);
      } else if (scrollY >= foldHeight) {
        setScrollOpacity(0);
      } else {
        setScrollOpacity(1 - (scrollY / foldHeight));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = container.clientWidth;
    let height = container.clientHeight;
    let particles: Particle[] = [];
    let animationFrameId: number;
    let time = 0;

    // Mouse state for rotation and parallax
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0
    };

    const createParticle = (index: number, total: number): Particle => {
      // Fibonacci Sphere Algorithm
      const phi = Math.acos(1 - 2 * (index + 0.5) / total);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (index + 0.5);

      const radius = 300; // Base radius of the sphere

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      return {
        x, y, z,
        baseX: x,
        baseY: y,
        baseZ: z,
        size: 16 + Math.random() * 24,
        symbol: config.symbols[Math.floor(Math.random() * config.symbols.length)],
        color: config.colors[Math.floor(Math.random() * config.colors.length)],
        phase: Math.random() * Math.PI * 2,
      };
    };

    const resize = () => {
      if (container && canvas) {
        width = container.clientWidth;
        height = container.clientHeight;
        canvas.width = width;
        canvas.height = height;
      }
    };

    const init = () => {
      resize();
      particles = [];
      for (let i = 0; i < config.particleCount; i++) {
        particles.push(createParticle(i, config.particleCount));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.01;

      // Smooth mouse movement
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Aggressive Parallax Center
      // Move the center of the sphere towards the mouse position
      // Factor 0.4 means it moves 40% of the way to the mouse from the center
      const centerX = width / 2 + mouse.x * 0.4;
      const centerY = height / 2 + mouse.y * 0.4;

      // Rotation angles
      const rotY = mouse.x * 0.001; // Rotate around Y axis (horizontal mouse move)
      const rotX = -mouse.y * 0.001; // Rotate around X axis (vertical mouse move)

      // Breathing effect - Brighter and stronger
      const breathCycle = (Math.sin(time * 3.0) + 2) / 2; // Increased speed from 0.5 to 2.0
      const breathScale = 1 + breathCycle * 0.25;
      const breathGlow = 25 + breathCycle * 15; // Glow pulses from 10 to 25

      // Pre-calculate rotation matrices
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      particles.forEach((p) => {
        // Apply breathing scale to base position
        let x = p.baseX * breathScale;
        let y = p.baseY * breathScale;
        let z = p.baseZ * breathScale;

        // Add organic float
        x += Math.sin(time + p.phase) * 5;
        y += Math.cos(time * 0.8 + p.phase) * 5;
        z += Math.sin(time * 1.2 + p.phase) * 5;

        // Rotate around Y axis
        let x1 = x * cosY - z * sinY;
        let z1 = z * cosY + x * sinY;

        // Rotate around X axis
        let y2 = y * cosX - z1 * sinX;
        let z2 = z1 * cosX + y * sinX;

        // Update particle 3D position
        p.x = x1;
        p.y = y2;
        p.z = z2;
      });

      // Sort particles by Z depth (painters algorithm)
      particles.sort((a, b) => a.z - b.z);

      // Draw particles
      particles.forEach((p) => {
        // 3D Projection
        const perspective = 800;
        const scale = perspective / (perspective + p.z);

        const screenX = centerX + p.x * scale;
        const screenY = centerY + p.y * scale;

        // Depth-based styling
        const depthAlpha = Math.max(0.1, Math.min(1, (p.z + 400) / 800)); // Fade out back particles
        const depthScale = scale; // Smaller when further away

        ctx.save();
        ctx.translate(screenX, screenY);

        // Breathing opacity - Brighter!
        // Base opacity increased, plus stronger pulse
        const pulseOpacity = 0.7 + Math.sin(time + p.phase) * 0.3;
        ctx.globalAlpha = Math.min(1, depthAlpha * pulseOpacity); // Cap at 1

        ctx.font = `${p.size * depthScale}px "Segoe UI", system-ui, sans-serif`;
        ctx.fillStyle = p.color;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        // Enhanced Glow
        if (scale > 0.6) {
          ctx.shadowColor = p.color;
          ctx.shadowBlur = breathGlow * scale; // Pulse the glow
        }

        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate mouse position relative to center
      // Invert X so moving mouse left rotates sphere left (natural feel)
      mouse.targetX = (e.clientX - rect.left - centerX);
      mouse.targetY = (e.clientY - rect.top - centerY);
    };

    const handleMouseLeave = () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        opacity: scrollOpacity,
        transition: 'opacity 0.2s ease-out',
        visibility: scrollOpacity > 0 ? 'visible' : 'hidden',
        zIndex: 0
      }}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
      />
    </div>
  );
};

export default MathAntigravity;
