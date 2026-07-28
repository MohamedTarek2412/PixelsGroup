# Pixels Group - Luxury Interior Finishing & Architecture

This is the official portfolio website for Pixels Group, an Egyptian luxury interior finishing and architecture company. Built to mirror the quality of a $100k+ digital agency.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router, React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + Vanilla CSS Design System
- **Animations:** Framer Motion (60fps hardware accelerated)
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📁 File Structure

```text
src/
├── app/                  # Next.js App Router (Pages, Layout, SEO Metadata)
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # 11 distinct sections (Hero, About, Services, etc.)
│   └── ui/               # Reusable primitives (Buttons, Animations, Header)
├── lib/                  # Utilities, Animations configs, and Constants (Data)
└── types/                # TypeScript Interfaces
public/
├── assets/               # All images and placeholders
├── fonts/                # Local fonts if needed
└── icons/                # Web manifest icons
```

## 🖼️ How to Change Images

We have created an organized folder structure inside `public/assets/`.
Navigate to `public/assets/` and read the `README.md` inside it for exact instructions on where to place your images.

Important: If you change the image filename or extension (e.g., from `.jpg` to `.png`), you MUST update the path in `src/lib/constants.ts` to match.

## 📝 How to Edit Content (Text, Packages, Projects)

All the website data (Text, Projects, Packages, Testimonials, Contact details) is centralized in a single file to make editing easy.

1. Open `src/lib/constants.ts`
2. Edit the strings inside the objects/arrays.
3. Save the file. The changes will reflect immediately.

## 🛠️ Development & Deployment

### Local Development

1. Install Node.js (v18 or higher)
2. Open terminal in this project folder
3. Run `npm install`
4. Run `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

### Production Build

Before deploying, ensure the build passes without errors:
```bash
npm run build
npm run start
```

### Vercel Deployment

This project is perfectly configured for zero-config Vercel deployment:
1. Push this repository to GitHub.
2. Go to Vercel.com and import the repository.
3. Click "Deploy".
4. Vercel will automatically detect Next.js and apply the optimal settings (Image Optimization, Caching, Edge network).

## ⚡ Performance & SEO

- **Lighthouse 100/100 target**
- Fully responsive across Mobile, Tablet, Desktop, and Ultrawide.
- Accessibility standards met (WCAG AAA contrast, ARIA labels, Keyboard navigation).
- Semantic HTML and built-in Next.js JSON-LD Structured Data in `layout.tsx`.

## 📄 License
Private project created for Pixels Group. All rights reserved.
