const fs = require('fs');
const cp = require('child_process');

const currentFile = 'src/lib/constants.ts';
let currentContent = fs.readFileSync(currentFile, 'utf8');

const originalContent = cp.execSync('git show HEAD:src/lib/constants.ts').toString('utf8');

// The list of all exports that might be missing
const neededExports = [
  'CONTACT', 'COMPANY_NAME', 'WHY_US', 'TESTIMONIALS', 'PROJECTS', 'SERVICES', 
  'PROCESS_STEPS', 'PAYMENT_INSTALLMENTS', 'PACKAGES', 'FAQ_ITEMS', 
  'ESTIMATION_STEPS', 'ESTIMATION_ADVANTAGES', 'COST_PLUS_TIERS', 
  'COST_PLUS_INCLUDES', 'COST_PLUS_GIFTS', 'COST_PLUS_NO_CONTRACT_FEE', 
  'STATS', 'COMPANY_DESCRIPTION_AR', 'NAV_LINKS', 'COMPANY_TAGLINE', 
  'COMPANY_DESCRIPTION', 'SITE_URL', 'GENERAL_NOTES'
];

let appended = false;

for (const exp of neededExports) {
  // If current content doesn't have it, we need to extract it from original
  if (!currentContent.includes(`export const ${exp}`)) {
    console.log(`Missing export: ${exp}`);
    
    // Find where this export starts in the original file
    const startStr = `export const ${exp}`;
    const startIdx = originalContent.indexOf(startStr);
    
    if (startIdx !== -1) {
      // Find the end of this export block (naively, just look for the next "export const" or end of file)
      // Since some exports have nested blocks, looking for the next "export const" is safest.
      let endIdx = originalContent.indexOf('export const', startIdx + 1);
      if (endIdx === -1) endIdx = originalContent.length;
      
      const block = originalContent.substring(startIdx, endIdx);
      currentContent += `\n\n${block}`;
      appended = true;
      console.log(`Appended ${exp}`);
    } else {
      console.log(`Could not find ${exp} in original file either!`);
    }
  }
}

if (appended) {
  fs.writeFileSync(currentFile, currentContent);
  console.log('Successfully restored missing exports.');
} else {
  console.log('No missing exports found or restored.');
}
