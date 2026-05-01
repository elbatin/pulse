# Pulse

> Real-time business analytics dashboard with a cinematic landing hero.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)
![GSAP](https://img.shields.io/badge/GSAP-3-88ce02?style=flat-square)

## Overview

Pulse is a concept landing page for a real-time business analytics SaaS. It features a full-page cinematic scroll experience built with GSAP ScrollTrigger — a deep-blue 3D card rises from below the fold, reveals an iPhone mockup with live metrics, and concludes with a tactile CTA section.

## Features

- **Cinematic scroll timeline** — 7000px pinned GSAP ScrollTrigger sequence
- **3D iPhone mockup** — mouse-tracked parallax rotation with physical hardware details
- **Skeuomorphic card** — deep-blue with dynamic mouse lighting via CSS custom properties
- **Glassmorphism badges** — floating stat callouts with backdrop blur
- **Tactile buttons** — physically layered box-shadow light/dark variants
- **Theme-aware** — light and dark mode via CSS variables

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (Radix UI) |
| Animations | GSAP 3 + ScrollTrigger |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and scroll down to experience the full animation sequence.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind base + shadcn theme tokens
│   ├── layout.tsx
│   └── page.tsx             # Entry point — renders CinematicHero with Pulse props
└── components/
    └── ui/
        └── cinematic-landing-hero.tsx   # Self-contained hero component
```

## Component API

```tsx
<CinematicHero
  brandName="PULSE"
  tagline1="See your business"
  tagline2="breathe."
  cardHeading="Data that actually makes sense."
  cardDescription={<>...</>}
  metricValue={98}
  metricLabel="Uptime Score"
  ctaHeading="Start seeing clearly."
  ctaDescription="No setup fees. No lock-in. Just clarity."
/>
```

## Author

**Batın Topaloğlu** — [elbatin.com](https://elbatin.com)
