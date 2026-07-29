const fs = require('fs');
const file = 'src/components/sections/Projects.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/\\`/g, '`').replace(/\\\$/g, '$');
fs.writeFileSync(file, content);
console.log('Fixed syntax errors in Projects.tsx');
