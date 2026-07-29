const fs = require('fs');
const path = require('path');

const replaceInFile = (file, replacements) => {
  const filepath = path.join('src/components/sections', file);
  if (!fs.existsSync(filepath)) return;
  
  let content = fs.readFileSync(filepath, 'utf8');
  let original = content;
  
  for (const [search, replace] of replacements) {
    // using split join to replace all occurrences without regex escaping issues
    content = content.split(search).join(replace);
  }
  
  if (content !== original) {
    fs.writeFileSync(filepath, content);
    console.log(`Updated ${file}`);
  }
};

replaceInFile('WhyUs.tsx', [
  ['-left-8', '-start-8']
]);

replaceInFile('Services.tsx', [
  ['right-0', 'end-0'],
  ['left-0', 'start-0'],
  ['left-6', 'start-6']
]);

replaceInFile('Process.tsx', [
  ['-right-2', '-end-2'],
  ['-right-1', '-end-1']
]);

replaceInFile('Packages.tsx', [
  ['right-0', 'end-0']
]);

replaceInFile('Hero.tsx', [
  ['left-0 right-0', 'inset-x-0'],
  ['left-8', 'start-8'],
  ['right-8', 'end-8']
]);

replaceInFile('CostPlus.tsx', [
  ['right-0', 'end-0']
]);

replaceInFile('Contact.tsx', [
  ['left-0 right-0', 'inset-x-0']
]);

replaceInFile('About.tsx', [
  ['-right-16', '-end-16'],
  ['right-4', 'end-4'],
  ['left-4', 'start-4'],
  ['-right-6', '-end-6']
]);

console.log('Finished fixing RTL classes');
