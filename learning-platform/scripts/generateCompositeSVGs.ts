/**
 * Composite Figure SVG Generator
 * Generates educational SVGs showing component shapes with dimensions
 * Based on question bank configurations
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

// Color schemes for gradients
const GRADIENT_PRESETS = {
  'purple-blue': ['#6366f1', '#8b5cf6'],
  'green-cyan': ['#10b981', '#06b6d4'],
  'orange-red': ['#f97316', '#ef4444'],
  'pink-purple': ['#ec4899', '#a855f7'],
  'yellow-orange': ['#fbbf24', '#f97316'],
  'blue-indigo': ['#3b82f6', '#6366f1']
};

const STROKE_COLORS = {
  'purple-blue': '#4338ca',
  'green-cyan': '#047857',
  'orange-red': '#dc2626',
  'pink-purple': '#9333ea',
  'yellow-orange': '#d97706',
  'blue-indigo': '#1e40af'
};

interface ShapeConfig {
  type: 'rect' | 'circle' | 'semicircle' | 'quartercircle' | 'triangle';
  x: number;
  y: number;
  width?: number;
  height?: number;
  radius?: number;
  points?: string; // For triangle
  orientation?: 'right' | 'left' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'; // For semicircle/quartercircle
  gradient: keyof typeof GRADIENT_PRESETS;
  label?: string;
  labelLines?: string[]; // Multi-line labels
}

interface DimensionConfig {
  type: 'horizontal' | 'vertical';
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
  color: string;
  isUnknown?: boolean; // Shows "?" instead of value
}

interface SeparationLineConfig {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label?: string;
}

interface SVGConfig {
  questionId: string;
  title: string;
  shapes: ShapeConfig[];
  dimensions: DimensionConfig[];
  separationLines?: SeparationLineConfig[];
  scale?: number; // pixels per cm (default 30)
}

class CompositeSVGGenerator {
  private svg: string[] = [];
  private gradientIds: Set<string> = new Set();

  generate(config: SVGConfig): string {
    this.svg = [];
    this.gradientIds = new Set();

    // Start SVG
    this.svg.push('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" style="background-color: #f8f9fa;">');

    // Collect and add gradients
    this.addGradients(config.shapes);

    // Add shapes (without labels)
    config.shapes.forEach((shape, index) => this.addShape(shape, index));

    // Add dimension lines
    config.dimensions.forEach(dim => this.addDimension(dim));

    // Close SVG
    this.svg.push('</svg>');

    return this.svg.join('\n');
  }

  private addTitle(title: string): void {
    this.svg.push('  <!-- Title -->');
    this.svg.push('  <text x="250" y="25" font-family="Arial, sans-serif" font-size="18" font-weight="bold" text-anchor="middle" fill="#2c3e50">');
    this.svg.push(`    ${title}`);
    this.svg.push('  </text>');
    this.svg.push('');
  }

  private addGradients(shapes: ShapeConfig[]): void {
    this.svg.push('  <!-- Define gradient fills -->');
    this.svg.push('  <defs>');

    shapes.forEach((shape, index) => {
      const gradientKey = shape.gradient;
      const gradientId = `gradient-${index}`;
      this.gradientIds.add(gradientId);

      const colors = GRADIENT_PRESETS[gradientKey];
      this.svg.push(`    <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="0%" y2="100%">`);
      this.svg.push(`      <stop offset="0%" style="stop-color:${colors[0]};stop-opacity:0.8" />`);
      this.svg.push(`      <stop offset="100%" style="stop-color:${colors[1]};stop-opacity:0.8" />`);
      this.svg.push('    </linearGradient>');
    });

    this.svg.push('  </defs>');
    this.svg.push('');
  }

  private addShape(shape: ShapeConfig, shapeIndex: number): void {
    const gradientIds = Array.from(this.gradientIds);
    const gradientId = gradientIds[shapeIndex] || gradientIds[0];

    const strokeColor = STROKE_COLORS[shape.gradient];

    if (shape.type === 'rect') {
      this.svg.push(`  <rect x="${shape.x}" y="${shape.y}" width="${shape.width}" height="${shape.height}"`);
      this.svg.push(`        fill="url(#${gradientId})"`);
      this.svg.push(`        stroke="${strokeColor}"`);
      this.svg.push('        stroke-width="3"');
      this.svg.push('        rx="2"/>');
      this.svg.push('');
    } else if (shape.type === 'circle') {
      const cx = shape.x + (shape.radius || 0);
      const cy = shape.y + (shape.radius || 0);
      this.svg.push(`  <circle cx="${cx}" cy="${cy}" r="${shape.radius}"`);
      this.svg.push(`          fill="url(#${gradientId})"`);
      this.svg.push(`          stroke="${strokeColor}"`);
      this.svg.push('          stroke-width="3"/>');
      this.svg.push('');
    } else if (shape.type === 'semicircle') {
      // Semicircle as a path
      // x, y is the center point on the straight edge
      // orientation determines which way the semicircle opens
      const cx = shape.x;
      const cy = shape.y;
      const r = shape.radius || 0;
      const orientation = shape.orientation || 'right'; // default to right

      let pathD = '';
      switch (orientation) {
        case 'right':
          // Opening to the right (vertical semicircle, bulge on right)
          // Start at top, arc clockwise to bottom
          pathD = `M ${cx},${cy - r} A ${r},${r} 0 0,1 ${cx},${cy + r} Z`;
          break;
        case 'left':
          // Opening to the left (vertical semicircle, bulge on left)
          // Start at top, arc counter-clockwise to bottom
          pathD = `M ${cx},${cy - r} A ${r},${r} 0 0,0 ${cx},${cy + r} Z`;
          break;
        case 'top':
          // Opening to the top (horizontal semicircle, bulge on top)
          // Start at left, arc clockwise (upward in SVG coords) to right
          pathD = `M ${cx - r},${cy} A ${r},${r} 0 0,1 ${cx + r},${cy} Z`;
          break;
        case 'bottom':
          // Opening to the bottom (horizontal semicircle, bulge on bottom)
          // Start at left, arc counter-clockwise (downward in SVG coords) to right
          pathD = `M ${cx - r},${cy} A ${r},${r} 0 0,0 ${cx + r},${cy} Z`;
          break;
      }

      this.svg.push(`  <path d="${pathD}"`);
      this.svg.push(`        fill="url(#${gradientId})"`);
      this.svg.push(`        stroke="${strokeColor}"`);
      this.svg.push('        stroke-width="3"/>');
      this.svg.push('');
    } else if (shape.type === 'quartercircle') {
      // Quarter circle as a path
      // x, y is the corner point
      // orientation determines which quarter
      const cx = shape.x;
      const cy = shape.y;
      const r = shape.radius || 0;
      const orientation = shape.orientation || 'top-right';

      let pathD = '';
      switch (orientation) {
        case 'top-right':
          // Quarter circle in top-right: arc from top to right
          pathD = `M ${cx},${cy - r} A ${r},${r} 0 0,1 ${cx + r},${cy} L ${cx},${cy} Z`;
          break;
        case 'top-left':
          // Quarter circle in top-left: arc from left to top
          pathD = `M ${cx - r},${cy} A ${r},${r} 0 0,1 ${cx},${cy - r} L ${cx},${cy} Z`;
          break;
        case 'bottom-right':
          // Quarter circle in bottom-right: arc from right to bottom
          pathD = `M ${cx + r},${cy} A ${r},${r} 0 0,1 ${cx},${cy + r} L ${cx},${cy} Z`;
          break;
        case 'bottom-left':
          // Quarter circle in bottom-left: arc from bottom to left
          pathD = `M ${cx},${cy + r} A ${r},${r} 0 0,1 ${cx - r},${cy} L ${cx},${cy} Z`;
          break;
      }

      this.svg.push(`  <path d="${pathD}"`);
      this.svg.push(`        fill="url(#${gradientId})"`);
      this.svg.push(`        stroke="${strokeColor}"`);
      this.svg.push('        stroke-width="3"/>');
      this.svg.push('');
    } else if (shape.type === 'triangle') {
      this.svg.push(`  <polygon points="${shape.points}"`);
      this.svg.push(`           fill="url(#${gradientId})"`);
      this.svg.push(`           stroke="${strokeColor}"`);
      this.svg.push('           stroke-width="3"/>');
      this.svg.push('');
    }
  }

  private addShapeLabel(shape: ShapeConfig): void {
    let centerX = 0;
    let centerY = 0;

    if (shape.type === 'rect') {
      centerX = shape.x + (shape.width || 0) / 2;
      centerY = shape.y + (shape.height || 0) / 2;
    } else if (shape.type === 'circle') {
      centerX = shape.x + (shape.radius || 0);
      centerY = shape.y + (shape.radius || 0);
    } else if (shape.type === 'semicircle') {
      centerX = shape.x;
      centerY = shape.y - (shape.radius || 0) / 2;
    }

    if (shape.labelLines && shape.labelLines.length > 1) {
      // Multi-line label
      const lineHeight = 18;
      const startY = centerY - ((shape.labelLines.length - 1) * lineHeight) / 2;

      shape.labelLines.forEach((line, index) => {
        const fontSize = index === 0 ? 14 : 12;
        this.svg.push(`  <text x="${centerX}" y="${startY + index * lineHeight}" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="bold" text-anchor="middle" fill="white">`);
        this.svg.push(`    ${line}`);
        this.svg.push('  </text>');
      });
    } else if (shape.label) {
      // Single line label
      this.svg.push(`  <text x="${centerX}" y="${centerY + 5}" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="white">`);
      this.svg.push(`    ${shape.label}`);
      this.svg.push('  </text>');
    }
  }

  private addDimension(dim: DimensionConfig): void {
    this.svg.push(`  <!-- Dimension: ${dim.label} -->`);

    if (dim.type === 'vertical') {
      // Vertical dimension line
      const x = dim.x1;
      const y1 = dim.y1;
      const y2 = dim.y2;

      this.svg.push(`  <line x1="${x}" y1="${y1}" x2="${x}" y2="${y2}" stroke="${dim.color}" stroke-width="2"/>`);
      this.svg.push(`  <line x1="${x - 5}" y1="${y1}" x2="${x + 5}" y2="${y1}" stroke="${dim.color}" stroke-width="2"/>`);
      this.svg.push(`  <line x1="${x - 5}" y1="${y2}" x2="${x + 5}" y2="${y2}" stroke="${dim.color}" stroke-width="2"/>`);

      // Label (rotated for vertical)
      const labelY = (y1 + y2) / 2;
      const labelX = x + (dim.label.includes('?') ? 25 : 25);
      const displayLabel = dim.isUnknown ? `? cm` : dim.label;

      if (x < 250) {
        // Left side - rotate -90
        this.svg.push(`  <text x="${x - 15}" y="${labelY}" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="${dim.color}" text-anchor="middle" transform="rotate(-90 ${x - 15} ${labelY})">`);
      } else {
        // Right side - no rotation
        this.svg.push(`  <text x="${labelX}" y="${labelY + 5}" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="${dim.color}">`);
      }
      this.svg.push(`    ${displayLabel}`);
      this.svg.push('  </text>');
    } else {
      // Horizontal dimension line
      const x1 = dim.x1;
      const x2 = dim.x2;
      const y = dim.y1;

      this.svg.push(`  <line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${dim.color}" stroke-width="2"/>`);
      this.svg.push(`  <line x1="${x1}" y1="${y - 5}" x2="${x1}" y2="${y + 5}" stroke="${dim.color}" stroke-width="2"/>`);
      this.svg.push(`  <line x1="${x2}" y1="${y - 5}" x2="${x2}" y2="${y + 5}" stroke="${dim.color}" stroke-width="2"/>`);

      // Label
      const labelX = (x1 + x2) / 2;
      const labelY = y - 8;
      const displayLabel = dim.isUnknown ? `? cm` : dim.label;

      this.svg.push(`  <text x="${labelX}" y="${labelY}" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="${dim.color}" text-anchor="middle">`);
      this.svg.push(`    ${displayLabel}`);
      this.svg.push('  </text>');
    }

    this.svg.push('');
  }

  private addSeparationLine(line: SeparationLineConfig): void {
    this.svg.push('  <!-- Separation line (dashed) -->');
    this.svg.push(`  <line x1="${line.x1}" y1="${line.y1}" x2="${line.x2}" y2="${line.y2}" stroke="#ff6b6b" stroke-width="2" stroke-dasharray="8,4"/>`);

    if (line.label) {
      const labelX = (line.x1 + line.x2) / 2;
      const labelY = line.y1 - 7;
      this.svg.push(`  <text x="${labelX}" y="${labelY}" font-family="Arial, sans-serif" font-size="11" font-style="italic" fill="#ff6b6b">`);
      this.svg.push(`    ${line.label}`);
      this.svg.push('  </text>');
    }

    this.svg.push('');
  }
}

// Load config and generate SVG
function generateSVG(configPath: string, outputPath: string): void {
  const configContent = readFileSync(configPath, 'utf-8');
  const config: SVGConfig = JSON.parse(configContent);

  const generator = new CompositeSVGGenerator();
  const svgContent = generator.generate(config);

  // Ensure output directory exists
  const outputDir = join(outputPath, '..');
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  writeFileSync(outputPath, svgContent, 'utf-8');
  console.log(`✅ Generated: ${outputPath}`);
}

// CLI execution
const args = process.argv.slice(2);

if (args.includes('--test') || args.length === 0) {
    // Generate ALL composite figure SVGs
    const allConfigs = [
      // Section 1
      { config: 's1-composite-q2-s1', output: 'q2-section1' },
      { config: 's1-composite-q3-s1', output: 'q3-section1' },
      { config: 's1-composite-q4-s1', output: 'q4-section1' },
      // Section 2
      { config: 's1-composite-q1-s2', output: 'q1-section2' },
      { config: 's1-composite-q2-s2', output: 'q2-section2' },
      { config: 's1-composite-q3-s2', output: 'q3-section2' },
      { config: 's1-composite-q4-s2', output: 'q4-section2' },
      // Section 3
      { config: 's1-composite-q1-s3', output: 'q1-section3' },
      { config: 's1-composite-q2-s3', output: 'q2-section3' },
      { config: 's1-composite-q3-s3', output: 'q3-section3' },
      { config: 's1-composite-q4-s3', output: 'q4-section3' },
      // Section 4
      { config: 's1-composite-q1-s4', output: 'q1-section4' },
      { config: 's1-composite-q2-s4', output: 'q2-section4' },
      { config: 's1-composite-q3-s4', output: 'q3-section4' },
      { config: 's1-composite-q4-s4', output: 'q4-section4' }
    ];

    const mode = args.includes('--test') ? 'test' : 'all';
    const configsToGenerate = mode === 'test'
      ? allConfigs.slice(0, 3)  // First 3 for testing
      : allConfigs;             // All 15 for production

    console.log(`🎨 Generating ${configsToGenerate.length} SVGs (mode: ${mode})...\n`);

    let successCount = 0;
    let errorCount = 0;

    configsToGenerate.forEach(({ config: configId, output: outputName }) => {
      const configPath = join(process.cwd(), 'scripts', 'svg-configs', `${configId}.json`);
      const outputPath = join(process.cwd(), 'public', 'assets', 'images', 'composite-figures', `${outputName}.svg`);

      if (existsSync(configPath)) {
        try {
          generateSVG(configPath, outputPath);
          successCount++;
        } catch (error: any) {
          console.error(`❌ Error generating ${configId}:`, error.message);
          errorCount++;
        }
      } else {
        console.warn(`⚠️  Config not found: ${configPath}`);
        errorCount++;
      }
    });

    console.log(`\n✨ Generation complete!`);
    console.log(`   ✅ Success: ${successCount}`);
    if (errorCount > 0) {
      console.log(`   ❌ Errors: ${errorCount}`);
    }
  } else if (args.length === 2) {
    // Generate single SVG
    const [configPath, outputPath] = args;
    generateSVG(configPath, outputPath);
  } else {
    console.log('Usage:');
    console.log('  npm run generate-svg --test              # Generate test SVGs');
    console.log('  npm run generate-svg <config> <output>   # Generate single SVG');
  }

export { CompositeSVGGenerator, SVGConfig };
