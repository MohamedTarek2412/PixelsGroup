const fs = require('fs');

const navbarPath = 'src/components/layout/Navbar.tsx';
let navbar = fs.readFileSync(navbarPath, 'utf8');

navbar = navbar.replace(
  `              className="flex items-center gap-3 no-underline group"\n              <div className="relative w-32 h-12 flex items-center">`,
  `              className="flex items-center gap-3 no-underline group"\n              aria-label="الرئيسية"\n            >\n              <div className="relative w-32 h-12 flex items-center">`
);

fs.writeFileSync(navbarPath, navbar);
console.log('Fixed Navbar logo syntax');
