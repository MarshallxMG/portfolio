# Manas Goel — Portfolio

A futuristic "Data Engineering Command Center" portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **GSAP + ScrollTrigger**, **Lenis** smooth scroll, and **Three.js**.

## Features
- Animated loading screen + boot log
- Custom trailing cursor (auto-disabled on touch / reduced-motion)
- Three.js ambient "data network" background
- Hero: name-reveal, typewriter, mouse-follow glow, floating code chips
- Lenis smooth scrolling wired into GSAP ScrollTrigger
- Experience timeline with scroll-scrubbed line draw + animated ETL pipeline
- Skills: animated bars + rotating tech-orbit system
- 3D tilt project card → dedicated case-study page (parallax, animated dashboard, count-up metrics)
- Count-up impact stats, certifications, education
- Contact form (magnetic + ripple buttons, mailto submit)
- Command palette (⌘K / Ctrl-K)
- SEO metadata + Open Graph, responsive, keyboard-focusable, `prefers-reduced-motion` respected

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
```

## Build
```bash
npm run build
npm run start
```

## Deploy to Vercel
1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: **Next.js** (auto-detected). No env vars required.
4. Click **Deploy**.

Or via CLI:
```bash
npm i -g vercel
vercel          # preview
vercel --prod   # production
```

## Editing content
All text/content lives in **`lib/data.ts`** — name, role, links, experience, skills,
the featured project, metrics, certifications and stats. Edit there; components read from it.

## Structure
```
app/
  layout.tsx                 # fonts, SEO, providers
  page.tsx                   # section assembly
  globals.css
  projects/healthcare-fraud-detection/page.tsx
components/                  # all UI + animation components
  three/NetworkBackground.tsx
lib/
  data.ts                    # single source of content
  utils.ts
```
