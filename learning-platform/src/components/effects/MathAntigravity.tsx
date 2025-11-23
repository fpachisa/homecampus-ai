import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../hooks/useTheme';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    mass: number;
    angle: number;
    vAngle: number;
    symbol: string;
    color: string;
    update: (width: number, height: number, mouse: { x: number; y: number; isDown: boolean }, config: any) => void;
    draw: (ctx: CanvasRenderingContext2D) => void;
}

const MathAntigravity: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();

    // Configuration
    const config = {
        particleCount: 60, // Slightly reduced for performance
        mouseRepelRadius: 200,
        mouseRepelForce: 2,
        friction: 0.995,
        elasticity: 0.9,
        gravity: 0,
        colors: [
            theme.colors.brand,
            theme.colors.success,
            theme.colors.warning,
            theme.colors.info,
            theme.colors.textAccent,
            theme.colors.interactiveHover
        ],
        symbols: [
            // Numbers
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            // Basic Operators
            '+', '-', '×', '÷', '=', '≠', '≈', '±',
            // Algebra & Calculus
            'π', '∑', '∫', '√', '∞', '∂', '∆', 'λ', 'θ', 'α', 'β', 'γ', 'φ', 'ω', 'μ',
            // Trigonometry
            'sine', 'cos', 'tan',
            // Set Theory & Logic
            '∈', '∉', '⊂', '⊃', '∪', '∩', '∀', '∃', '∅', '⇒', '⇔',
            // Geometry
            '∠', '⊥', '∥', '°', '△', '□',
            // Other
            '!', '%', 'log', 'ln', 'e', 'i'
        ]
    };

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

        // Mouse state
        const mouse = {
            x: -1000,
            y: -1000,
            isDown: false
        };

        class ParticleImpl implements Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            mass: number;
            angle: number;
            vAngle: number;
            symbol: string;
            color: string;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.vx = (Math.random() - 0.5) * 4;
                this.vy = (Math.random() - 0.5) * 4;
                this.size = 16 + Math.random() * 24;
                this.mass = this.size / 10;
                this.angle = Math.random() * Math.PI * 2;
                this.vAngle = (Math.random() - 0.5) * 0.1;
                this.symbol = config.symbols[Math.floor(Math.random() * config.symbols.length)];
                this.color = config.colors[Math.floor(Math.random() * config.colors.length)];
            }

            update(width: number, height: number, mouse: { x: number; y: number; isDown: boolean }, config: any) {
                // Mouse Interaction (Repulsion)
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.mouseRepelRadius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (config.mouseRepelRadius - distance) / config.mouseRepelRadius;
                    const strength = mouse.isDown ? config.mouseRepelForce * 5 : config.mouseRepelForce;

                    this.vx += forceDirectionX * force * strength;
                    this.vy += forceDirectionY * force * strength;
                }

                // Center Repulsion (Keep text area clear)
                const centerX = width / 2;
                const safeZone = width * 0.6; // Central 60% is "safe" for text
                const distFromCenter = Math.abs(this.x - centerX);

                if (distFromCenter < safeZone / 2) {
                    // Push away from center towards nearest edge
                    const force = (safeZone / 2 - distFromCenter) / (safeZone / 2);
                    const direction = this.x < centerX ? -1 : 1;
                    // Gentle but persistent push
                    this.vx += direction * force * 0.5;
                }

                // Apply Friction
                this.vx *= config.friction;
                this.vy *= config.friction;

                // Limit speed
                const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
                const maxSpeed = 6;
                if (speed > maxSpeed) {
                    this.vx = (this.vx / speed) * maxSpeed;
                    this.vy = (this.vy / speed) * maxSpeed;
                }

                // Update Position
                this.x += this.vx;
                this.y += this.vy;
                this.angle += this.vAngle;

                // Wall Collisions
                this.handleBoundaries(width, height);
            }

            handleBoundaries(width: number, height: number) {
                const buffer = this.size;

                if (this.x > width - buffer) {
                    this.x = width - buffer;
                    this.vx *= -config.elasticity;
                }
                if (this.x < buffer) {
                    this.x = buffer;
                    this.vx *= -config.elasticity;
                }
                if (this.y > height - buffer) {
                    this.y = height - buffer;
                    this.vy *= -config.elasticity;
                }
                if (this.y < buffer) {
                    this.y = buffer;
                    this.vy *= -config.elasticity;
                }
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.save();
                ctx.translate(this.x, this.y);
                ctx.rotate(this.angle);

                ctx.font = `bold ${this.size}px "Segoe UI", sans-serif`;
                ctx.fillStyle = this.color;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';

                // Glow effect
                ctx.shadowColor = this.color;
                ctx.shadowBlur = 10;

                // Opacity based on theme (subtle)
                ctx.globalAlpha = 0.6;

                ctx.fillText(this.symbol, 0, 0);
                ctx.restore();
            }
        }

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
                // Spawn on left or right side (avoid center)
                const side = Math.random() > 0.5 ? 'left' : 'right';
                let x;
                if (side === 'left') {
                    x = Math.random() * (width * 0.2); // Left 20%
                } else {
                    x = width - (Math.random() * (width * 0.2)); // Right 20%
                }

                const y = Math.random() * height;
                particles.push(new ParticleImpl(x, y));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(p => {
                p.update(width, height, mouse, config);
                p.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        // Event Listeners
        const handleResize = () => {
            resize();
            // Optional: re-init particles on resize to keep them in bounds? 
            // Or just let them bounce back. Let's just resize canvas.
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleMouseDown = () => {
            mouse.isDown = true;
        };

        const handleMouseUp = () => {
            mouse.isDown = false;
        };

        const handleMouseLeave = () => {
            mouse.x = -1000;
            mouse.y = -1000;
            mouse.isDown = false;
        };

        window.addEventListener('resize', handleResize);
        // Attach mouse events to the container or window? 
        // Since it's a background effect, we might want it to react to mouse anywhere on the page
        // But coordinates need to be relative to canvas if canvas is not full screen.
        // If canvas is fixed inset-0, then clientX/Y matches.

        // Using window for mouse move to ensure smooth interaction even if over other elements
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseleave', handleMouseLeave);

        init();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]); // Re-run when theme changes to update colors

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
            <canvas
                ref={canvasRef}
                className="block w-full h-full"
                style={{ opacity: 0.8 }} // Global opacity for the effect
            />
        </div>
    );
};

export default MathAntigravity;
