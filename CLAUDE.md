# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start Vite dev server (localhost:5173)
npm run build    # Production build to /dist
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
```

No test framework is currently configured.

## Architecture Overview

PriceDeck is a React + Vite marketing website for AI-powered commodity price intelligence in Nigeria. It's a frontend-only SPA deployed on Vercel with WhatsApp as the primary user interaction channel.

**Tech Stack:**
- React 19 with React Router DOM for routing
- Tailwind CSS 4 for styling
- Vite 8 for build tooling
- Deployed on Vercel (SPA rewrite in `vercel.json`)

**Project Structure:**
```
src/
├── main.jsx          # Entry point
├── App.jsx           # Router + layout (Navbar, Routes, Footer)
├── index.css         # Global styles + Tailwind + custom utilities
└── pages/
    ├── Home.jsx      # Landing page (7 inline section components)
    ├── About.jsx     # Company story
    ├── MarketPartners.jsx  # Partner signup
    └── Privacy.jsx   # Privacy policy
```

**Routing:** 4 routes (`/`, `/about`, `/market-partners`, `/privacy`) - all other paths rewrite to `/` via Vercel config.

## Styling Conventions

All styling uses Tailwind utilities plus these custom classes defined in `index.css`:

- `.container-custom` - Max-width 1100px centered container
- `.section-padding` - Standard section vertical spacing
- `.btn-primary` - Green CTA button (#25D366 WhatsApp green)
- `.dark-card` - Light gray card with border
- `.overline` - Uppercase label text
- `.chat-container`, `.chat-bubble-user`, `.chat-bubble-bot` - WhatsApp chat mockup styling

**Font:** Plus Jakarta Sans (loaded from Google Fonts in `index.html`)

## Key Patterns

- Home page sections are defined as inline functional components within `Home.jsx` (not separate files)
- Minimal state management - only `useState` for UI toggles (mobile menu)
- No backend code - WhatsApp links (`https://wa.me/{number}`) handle user actions
- Images go in `public/images/` and are referenced as `/images/filename.jpg`
