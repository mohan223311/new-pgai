const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

const replacements = [
  { from: /pgai-bg/g, to: 'white' },
  { from: /pgai-neon/g, to: 'brand-primary' },
  { from: /pgai-text\/[0-9]+/g, to: 'slate-body' },
  { from: /pgai-text/g, to: 'slate-heading' },
  { from: /pgai-card/g, to: 'white' },
  { from: /bg-\[#090B0F\]/g, to: 'bg-slate-50' },
  { from: /bg-\[#1A1D24\]/g, to: 'bg-slate-50' },
  { from: /bg-\[#13161C\]/g, to: 'bg-white' },
  { from: /bg-\[#0E1015\]/g, to: 'bg-white' },
  { from: /#D3F36B/gi, to: '#E8600A' },
  { from: /211,243,107/g, to: '232,96,10' },
  { from: /text-white/g, to: 'text-slate-heading' },
  { from: /text-gray-[45]00/g, to: 'text-slate-body' },
  { from: /border-white\/([0-9]+)/g, to: 'border-black/$1' },
  { from: /bg-white\/([0-9]+)/g, to: 'bg-black/$1' },
  { from: /from-\[#13161C\] to-black/g, to: 'from-slate-50 to-slate-100' },
  { from: /bg-black/g, to: 'bg-slate-100' },
  { from: /text-black/g, to: 'text-white' },
  { from: /fill-black/g, to: 'fill-white' },
  { from: /border-\[#13161C\]/g, to: 'border-white' }
];

files.forEach(file => {
  // Skip Navbar, Hero, Stats as they were already updated manually
  if (['Navbar.tsx', 'Hero.tsx', 'Stats.tsx'].includes(file)) return;
  
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  replacements.forEach(({ from, to }) => {
    content = content.replace(from, to);
  });
  
  // Fix button text-slate-heading back to text-white where appropriate
  content = content.replace(/hover:text-slate-heading/g, 'hover:text-white');
  content = content.replace(/text-slate-heading rounded-full/g, 'text-white rounded-full');
  content = content.replace(/text-slate-heading font-bold py-4/g, 'text-white font-bold py-4');
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});
