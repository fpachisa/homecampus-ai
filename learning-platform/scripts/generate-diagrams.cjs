const fs = require('fs');
const path = require('path');

const outputDir = 'learning-platform/public/curriculum-content/P5/Maths/diagrams';

const style = `<style>
  .bar { fill: #e0f2fe; stroke: #0284c7; stroke-width: 2; }
  .bar-dark { fill: #bae6fd; stroke: #0284c7; stroke-width: 2; }
  .label { font-family: sans-serif; font-size: 14px; fill: #333; }
  .brace { stroke: #666; stroke-width: 1.5; fill: none; }
</style>`;

const svgs = {};

// Q1: Hat (22), Coat (4x), Left (40). Total?
svgs['q1_model.svg'] = `
<svg width="600" height="200" xmlns="http://www.w3.org/2000/svg">
  ${style}
  <!-- Hat -->
  <rect x="50" y="50" width="50" height="40" class="bar" />
  <text x="75" y="45" text-anchor="middle" class="label">$22</text>
  <text x="75" y="110" text-anchor="middle" class="label">Hat</text>

  <!-- Coat (4x) -->
  <rect x="100" y="50" width="200" height="40" class="bar-dark" />
  <text x="200" y="45" text-anchor="middle" class="label">Coat (4 units)</text>
  
  <!-- Left -->
  <rect x="300" y="50" width="80" height="40" class="bar" />
  <text x="340" y="45" text-anchor="middle" class="label">$40</text>
  <text x="340" y="110" text-anchor="middle" class="label">Left</text>

  <!-- Total Brace -->
  <path d="M 50 130 q 0 10 10 10 h 155 q 10 0 10 10 q 0 -10 10 -10 h 155 q 10 0 10 -10" class="brace" transform="rotate(180 230 135)"/>
  <text x="215" y="160" text-anchor="middle" class="label">Total Amount (?)</text>
</svg>`;

// Q2: Total (50). Books (30), Pens (?), Left (4).
svgs['q2_model.svg'] = `
<svg width="600" height="200" xmlns="http://www.w3.org/2000/svg">
  ${style}
  <text x="300" y="30" text-anchor="middle" class="label">Total $50</text>
  <rect x="50" y="50" width="500" height="40" fill="none" stroke="#ccc" />
  
  <!-- Books -->
  <rect x="50" y="50" width="300" height="40" class="bar" />
  <text x="200" y="75" text-anchor="middle" class="label">Books ($30)</text>

  <!-- Pens -->
  <rect x="350" y="50" width="110" height="40" class="bar-dark" />
  <text x="405" y="75" text-anchor="middle" class="label">Pens (?)</text>

  <!-- Left -->
  <rect x="460" y="50" width="40" height="40" class="bar" />
  <text x="480" y="75" text-anchor="middle" class="label">$4</text>
</svg>`;

// Q3: Handbag (3u - 5), Wallet (1u). Total 55.
svgs['q3_model.svg'] = `
<svg width="600" height="250" xmlns="http://www.w3.org/2000/svg">
  ${style}
  <!-- Wallet -->
  <rect x="100" y="50" width="80" height="40" class="bar" />
  <text x="140" y="75" text-anchor="middle" class="label">Wallet (1u)</text>

  <!-- Handbag -->
  <rect x="100" y="110" width="240" height="40" class="bar-dark" />
  <text x="220" y="135" text-anchor="middle" class="label">Handbag (3u)</text>
  
  <!-- Discount overlay on Hat start? No. Price paid. -->
  <!-- Logic: Paid + Discount = Original. -->
  <text x="380" y="135" text-anchor="middle" class="label">(-$5 off)</text>
  
  <!-- Total Brace -->
  <path d="M 350 50 L 370 50 L 370 150 L 350 150" fill="none" stroke="#666" />
  <text x="400" y="100" text-anchor="middle" class="label">Paid $55</text>
</svg>`;

// Q4: Adam(1u), Ben(1u + 24). Total 150.
svgs['q4_model.svg'] = `
<svg width="600" height="250" xmlns="http://www.w3.org/2000/svg">
  ${style}
  <rect x="100" y="50" width="150" height="40" class="bar" />
  <text x="175" y="75" text-anchor="middle" class="label">Adam (?)</text>

  <rect x="100" y="110" width="150" height="40" class="bar" />
  <rect x="250" y="110" width="50" height="40" class="bar-dark" />
  <text x="275" y="75" text-anchor="middle" class="label">$24</text>
  
  <text x="400" y="100" text-anchor="middle" class="label">Total $150</text>
  <brace x="320" y="50" h="100" /> <!-- Pseudo -->
  <path d="M 310 50 L 330 50 L 330 150 L 310 150" fill="none" stroke="#666" />
</svg>`;

// Q5: Internet(45), Phone(?). Total 100.
svgs['q5_model.svg'] = `
<svg width="600" height="150" xmlns="http://www.w3.org/2000/svg">
  ${style}
  <text x="300" y="30" text-anchor="middle" class="label">Monthly Total $100</text>
  <rect x="50" y="50" width="200" height="40" class="bar" />
  <text x="150" y="75" text-anchor="middle" class="label">Internet $45</text>
  
  <rect x="250" y="50" width="250" height="40" class="bar-dark" />
  <text x="375" y="75" text-anchor="middle" class="label">Phone ?</text>
</svg>`;

// Q6: 4 burgers for price of 3.
svgs['q6_model.svg'] = `
<svg width="600" height="200" xmlns="http://www.w3.org/2000/svg">
  ${style}
  <rect x="50" y="50" width="80" height="80" class="bar" />
  <text x="90" y="95" text-anchor="middle" class="label">$12</text>
  <rect x="140" y="50" width="80" height="80" class="bar" />
  <text x="180" y="95" text-anchor="middle" class="label">$12</text>
  <rect x="230" y="50" width="80" height="80" class="bar" />
  <text x="270" y="95" text-anchor="middle" class="label">$12</text>
  
  <rect x="320" y="50" width="80" height="80" class="bar-dark" />
  <text x="360" y="95" text-anchor="middle" class="label">FREE</text>
  
  <text x="225" y="160" text-anchor="middle" class="label">Total Paid = $36 for 4 items</text>
</svg>`;

// Q7: Ali(1u), Bob(1u+10), Carl(3*(1u+10)). Total 260.
svgs['q7_model.svg'] = `
<svg width="600" height="300" xmlns="http://www.w3.org/2000/svg">
  ${style}
  <text x="50" y="30" class="label">Ali</text>
  <rect x="100" y="10" width="50" height="30" class="bar" />
  
  <text x="50" y="80" class="label">Bob</text>
  <rect x="100" y="60" width="50" height="30" class="bar" />
  <rect x="150" y="60" width="20" height="30" class="bar-dark" />
  <text x="160" y="55" text-anchor="middle" class="label">10</text>
  
  <text x="50" y="130" class="label">Carl</text>
  <!-- 3 sets of Bob -->
  <rect x="100" y="110" width="70" height="30" class="bar" />
  <rect x="175" y="110" width="70" height="30" class="bar" />
  <rect x="250" y="110" width="70" height="30" class="bar" />
  
  <path d="M 330 10 L 350 10 L 350 140 L 330 140" fill="none" stroke="#666" />
  <text x="380" y="80" text-anchor="middle" class="label">Total $260</text>
</svg>`;

// Q8: Rice 75kg. 4kg bags. Remainder.
svgs['q8_model.svg'] = `
<svg width="600" height="200" xmlns="http://www.w3.org/2000/svg">
  ${style}
  <rect x="50" y="50" width="500" height="50" class="bar" opacity="0.5"/>
  <text x="300" y="30" text-anchor="middle" class="label">Total 75 kg</text>
  
  <!-- Small bags -->
  <rect x="50" y="50" width="30" height="50" class="bar-dark" />
  <rect x="85" y="50" width="30" height="50" class="bar-dark" />
  <text x="130" y="80" class="label">... 18 bags ...</text>
  <rect x="400" y="50" width="30" height="50" class="bar-dark" />
  
  <!-- Remainder -->
  <rect x="450" y="50" width="20" height="50" class="bar" />
  <text x="460" y="120" text-anchor="middle" class="label">Leftover</text>
</svg>`;

// Q9: X=3Y. X takes from Y -> X=7Y. Total 200 Const.
svgs['q9_model.svg'] = `
<svg width="600" height="300" xmlns="http://www.w3.org/2000/svg">
  ${style}
  <text x="50" y="30" class="label" font-weight="bold">Before</text>
  <text x="50" y="60" class="label">Yan</text>
  <rect x="100" y="40" width="50" height="30" class="bar" />
  <text x="50" y="100" class="label">Xavier</text>
  <rect x="100" y="80" width="150" height="30" class="bar-dark" />
  <text x="300" y="70" class="label">Total 200</text>

  <text x="50" y="180" class="label" font-weight="bold">After</text>
  <text x="50" y="210" class="label">Yan</text>
  <rect x="100" y="190" width="25" height="30" class="bar" />
  <text x="50" y="250" class="label">Xavier</text>
  <rect x="100" y="230" width="175" height="30" class="bar-dark" /> <!-- 7x -->
  <text x="300" y="220" class="label">Total 200</text>
</svg>`;

// Q10: All equal at end.
svgs['q10_model.svg'] = `
<svg width="600" height="300" xmlns="http://www.w3.org/2000/svg">
  ${style}
  <text x="100" y="30" text-anchor="middle" class="label">End State (Equal)</text>
  <rect x="50" y="50" width="100" height="40" class="bar" />
  <text x="25" y="75" class="label">X</text>
  <rect x="50" y="100" width="100" height="40" class="bar" />
  <text x="25" y="125" class="label">Y</text>
  <rect x="50" y="150" width="100" height="40" class="bar" />
  <text x="25" y="175" class="label">Z</text>
  
  <text x="250" y="100" class="label">Work backwards to find start</text>
</svg>`;

// Q11: Anna, Ben.
svgs['q11_model.svg'] = `
<svg width="600" height="200" xmlns="http://www.w3.org/2000/svg">
  ${style}
  <text x="50" y="50" class="label">Ben</text>
  <rect x="100" y="30" width="50" height="30" class="bar" />
  <text x="125" y="25" text-anchor="middle" class="label">$400</text>

  <text x="50" y="100" class="label">Anna</text>
  <rect x="100" y="80" width="250" height="30" class="bar-dark" />
  <text x="225" y="130" text-anchor="middle" class="label">Total $2400</text>
</svg>`;

// Q12: Grouping. 20 rotten. Rest in sets of 3.
svgs['q12_model.svg'] = `
<svg width="600" height="200" xmlns="http://www.w3.org/2000/svg">
  ${style}
  <rect x="50" y="50" width="400" height="50" class="bar" opacity="0.3"/>
  <rect x="50" y="50" width="40" height="50" fill="#ffcccc" stroke="#d32f2f"/>
  <text x="70" y="80" text-anchor="middle" class="label" fill="red">Rot</text>
  
  <rect x="100" y="50" width="350" height="50" class="bar" />
  <text x="275" y="80" text-anchor="middle" class="label">Sold (Sets of 3)</text>
  <text x="275" y="120" text-anchor="middle" class="label">$250 Total Sales</text>
</svg>`;

// Q13: Oranges. 1000 total. Bags of 12.
svgs['q13_model.svg'] = `
<svg width="600" height="200" xmlns="http://www.w3.org/2000/svg">
  ${style}
  <rect x="50" y="50" width="400" height="60" class="bar-dark" />
  <text x="250" y="40" text-anchor="middle" class="label">1000 Oranges</text>
  
  <line x1="50" y1="50" x2="50" y2="110" stroke="#fff" />
  <line x1="90" y1="50" x2="90" y2="110" stroke="#fff" />
  <text x="70" y="85" text-anchor="middle" class="label" font-size="10">12</text>
  
  <line x1="130" y1="50" x2="130" y2="110" stroke="#fff" />
  <text x="110" y="85" text-anchor="middle" class="label" font-size="10">12</text>

  <text x="200" y="85" class="label">... 83 Packs ...</text>
  
  <rect x="410" y="50" width="40" height="60" class="bar" />
  <text x="430" y="85" text-anchor="middle" class="label">Rem</text>
</svg>`;

// Q14: Box + 20. Shared by 4.
svgs['q14_model.svg'] = `
<svg width="600" height="200" xmlns="http://www.w3.org/2000/svg">
  ${style}
  <rect x="50" y="50" width="400" height="50" class="bar" />
  <text x="250" y="40" text-anchor="middle" class="label">Total Sweets</text>
  
  <!-- Divided into 4 -->
  <line x1="150" y1="50" x2="150" y2="100" stroke="#fff" />
  <line x1="250" y1="50" x2="250" y2="100" stroke="#fff" />
  <line x1="350" y1="50" x2="350" y2="100" stroke="#fff" />
  
  <text x="100" y="80" text-anchor="middle" class="label">15</text>
  <text x="200" y="80" text-anchor="middle" class="label">15</text>
  <text x="300" y="80" text-anchor="middle" class="label">15</text>
  <text x="400" y="80" text-anchor="middle" class="label">15</text>
</svg>`;

// Q15: A=3B. A-150, B-20. B=2A.
svgs['q15_model.svg'] = `
<svg width="600" height="300" xmlns="http://www.w3.org/2000/svg">
  ${style}
  <text x="50" y="30" class="label">Start</text>
  <text x="50" y="60" class="label">Aaron</text>
  <rect x="100" y="40" width="150" height="30" class="bar" />
  <text x="50" y="100" class="label">Bob</text>
  <rect x="100" y="80" width="50" height="30" class="bar-dark" />
  
  <text x="300" y="100" class="label">A spends 150, B spends 20</text>
</svg>`;

// Q16: 200 Students, 50 Teachers.
svgs['q16_model.svg'] = `
<svg width="600" height="200" xmlns="http://www.w3.org/2000/svg">
  ${style}
  <rect x="50" y="50" width="200" height="50" class="bar" />
  <text x="150" y="80" text-anchor="middle" class="label">Students (200 x $5)</text>
  
  <rect x="260" y="50" width="100" height="50" class="bar-dark" />
  <text x="310" y="80" text-anchor="middle" class="label">Teachers (50 x $10)</text>
  
  <text x="250" y="140" text-anchor="middle" class="label">Total Collected?</text>
</svg>`;

// Q17: Age. F=4S -> +20 -> F=2S.
svgs['q17_model.svg'] = `
<svg width="600" height="300" xmlns="http://www.w3.org/2000/svg">
  ${style}
  <text x="50" y="30" font-weight="bold" class="label">Now</text>
  <text x="50" y="60" class="label">Son</text>
  <rect x="100" y="40" width="40" height="30" class="bar" />
  <text x="50" y="100" class="label">Father</text>
  <rect x="100" y="80" width="160" height="30" class="bar-dark" />

  <text x="50" y="160" font-weight="bold" class="label">+20 Years</text>
  <rect x="100" y="190" width="40" height="30" class="bar" /> <!-- Son original -->
  <rect x="140" y="190" width="40" height="30" fill="#ccffcc" stroke="#009900" /> <!-- +20 -->
  
  <rect x="100" y="230" width="160" height="30" class="bar-dark" /> <!-- Father original -->
  <rect x="260" y="230" width="40" height="30" fill="#ccffcc" stroke="#009900" /> <!-- +20 -->
</svg>`;

// Q18: Car Loan.
svgs['q18_model.svg'] = `
<svg width="600" height="150" xmlns="http://www.w3.org/2000/svg">
  ${style}
  <text x="300" y="30" text-anchor="middle" class="label">Car Price $60,000</text>
  <rect x="50" y="50" width="500" height="50" class="bar" />
  
  <line x1="150" y1="50" x2="150" y2="100" stroke="#fff" stroke-width="2"/>
  <text x="100" y="80" text-anchor="middle" class="label">Paid 12k</text>
  <text x="325" y="80" text-anchor="middle" class="label">Installments (Rem)</text>
  
  <text x="325" y="120" text-anchor="middle" class="label">$800 per month</text>
</svg>`;

// Q19: Area Tiling.
svgs['q19_model.svg'] = `
<svg width="600" height="300" xmlns="http://www.w3.org/2000/svg">
  ${style}
  <rect x="50" y="50" width="400" height="200" fill="#f0f0f0" stroke="#333" />
  <text x="250" y="150" text-anchor="middle" class="label">Wall 600cm x 400cm</text>
  
  <rect x="50" y="50" width="20" height="10" fill="#aaa" stroke="#000" />
  <text x="80" y="40" class="label">Tile</text>
</svg>`;

// Q20: Taxi Fare.
svgs['q20_model.svg'] = `
<svg width="600" height="200" xmlns="http://www.w3.org/2000/svg">
  ${style}
  <rect x="50" y="80" width="500" height="20" class="bar" />
  <line x1="100" y1="80" x2="100" y2="100" stroke="#fff" />
  
  <text x="75" y="70" text-anchor="middle" class="label">1km ($3)</text>
  <text x="300" y="70" text-anchor="middle" class="label">7km (50c per 500m)</text>
</svg>`;

// Q21: Reading Speed.
svgs['q21_model.svg'] = `
<svg width="600" height="150" xmlns="http://www.w3.org/2000/svg">
  ${style}
  <rect x="50" y="50" width="400" height="40" class="bar" />
  <text x="250" y="75" text-anchor="middle" class="label">15 mins</text>
  <text x="250" y="110" text-anchor="middle" class="label">40 words/min</text>
</svg>`;

// Q22: Visitors.
svgs['q22_model.svg'] = `
<svg width="600" height="300" xmlns="http://www.w3.org/2000/svg">
  ${style}
  <rect x="50" y="50" width="100" height="30" fill="#ccc" />
  <text x="100" y="70" text-anchor="middle" class="label">Mon-Wed</text>
  
  <rect x="160" y="50" width="300" height="30" class="bar" />
  <text x="310" y="70" text-anchor="middle" class="label">Thu-Sun</text>
  
  <text x="310" y="100" text-anchor="middle" class="label">Ratio Fri:Sat:Sun</text>
  <text x="310" y="120" text-anchor="middle" class="label">1 : 3 : 6</text>
</svg>`;

// Q23: Jam Jars.
svgs['q23_model.svg'] = `
<svg width="600" height="200" xmlns="http://www.w3.org/2000/svg">
  ${style}
  <rect x="50" y="50" width="400" height="100" fill="none" stroke="#333" />
  <text x="250" y="40" text-anchor="middle" class="label">Basket (Gross 5000g)</text>
  
  <circle cx="100" cy="100" r="20" class="bar" />
  <circle cx="150" cy="100" r="20" class="bar" />
  <circle cx="200" cy="100" r="20" class="bar" />
  <text x="250" y="105" class="label">... 20 Jars ...</text>
  
  <text x="250" y="170" text-anchor="middle" class="label">Basket empty = 200g</text>
</svg>`;

Object.entries(svgs).forEach(([filename, content]) => {
    fs.writeFileSync(path.join(outputDir, filename), content.trim());
});

console.log('Generated 23 diagrams.');
