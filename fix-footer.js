const fs = require('fs');

const footerPath = 'src/components/layout/Footer.tsx';
let footer = fs.readFileSync(footerPath, 'utf8');

// Ensure next/image is imported
if (!footer.includes('import Image from "next/image"')) {
  footer = footer.replace('import Link from "next/link";', 'import Link from "next/link";\nimport Image from "next/image";');
}

const targetLogo = `<div className="w-10 h-10 relative">
                <div
                  className="absolute inset-0 rounded-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, #D09734 0%, #F5C759 50%, #BB832A 100%)",
                  }}
                />
                <div className="absolute inset-[2px] bg-[var(--color-black)] rounded-[2px] flex items-center justify-center">
                  <span
                    className="text-xs font-black tracking-[-0.05em]"
                    style={{ color: "#D09734", fontFamily: "var(--font-accent)" }}
                    dir="ltr"
                  >
                    PG
                  </span>
                </div>
              </div>
              <div className="flex flex-col leading-none" dir="ltr">
                <span
                  className="text-base font-bold tracking-[0.12em] uppercase"
                  style={{
                    color: "var(--color-white)",
                    fontFamily: "var(--font-accent)",
                  }}
                >
                  Pixels
                </span>
                <span
                  className="text-[10px] font-medium tracking-[0.3em] uppercase"
                  style={{ color: "var(--color-gold)" }}
                >
                  Group
                </span>
              </div>`;

const replaceLogo = `<div className="relative w-40 h-16 flex items-center">
                <Image src="/assets/logo/logo.png" alt={COMPANY_NAME} fill className="object-contain object-right" />
              </div>`;

footer = footer.replace(targetLogo, replaceLogo);
fs.writeFileSync(footerPath, footer);
console.log('Fixed Footer logo');
