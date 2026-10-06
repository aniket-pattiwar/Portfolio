# Aniket Pattiwar — Portfolio

Next.js + React portfolio, configured for Vercel. All content lives in source files; no database, API keys, or environment variables are needed.

## Deploy to Vercel

1. Extract Aniket-Portfolio-Vercel.zip.
2. Put the extracted files at the root of a GitHub repository. package.json, app/, and vercel.json must be at the same level.
3. In Vercel, choose Add New > Project and import that repository.
4. Use Framework: Next.js, Root Directory: the folder containing package.json (aniket-portfolio if nested in your repository), Install Command: npm ci, Build Command: npm run build. Output Directory must be .next, never out. vercel.json explicitly sets .next to override stale dashboard settings.
5. Deploy. Add your domain in the Vercel project's Settings > Domains.

Alternatively, use the Vercel CLI from the extracted folder: `npx vercel`, then `npx vercel --prod` when ready.

Upload the extracted source files to GitHub, not the ZIP itself. Do not upload node_modules or the older dist directory.

## Local development

Run `npm ci`, then `npm run dev`. Open http://127.0.0.1:4174.
Run `npm run build` to generate the Next.js build in .next/. Vercel builds this from source; do not upload .next/ or the older out/ export.

## Your data

- lib/websites.js: six public repository cards and their website URLs.
- lib/projects.js: resume projects; GLAMS uses https://glams.cpatverse.in with a View link.
- app/page.js: personal details, experience, education, and contact information.
- app/website-collection.js: website cards and filters.
- public/Aniket_Resume.pdf: the resume offered to visitors.
- app/globals.css: responsive styling.

MERN, English Communication, Java, and Java v2.0 have Visit website buttons. Java links use the repository-listed URLs as requested; they previously returned 404. Poll Management and firebase-1 have repository links only. The private CDAC-ACTS repository is excluded.

Your email, professional details, and downloadable resume are visitor-facing content and become public when deployed publicly. There is no visitor-data collection, contact-form storage, authentication, or backend. Email links open the visitor's mail app. Accent and filter selections last only while the page is open.

Project preview illustrations are labeled interface concepts, not screenshots of deployed applications. Google Fonts have local fallbacks. Employment dates follow the supplied resume.

