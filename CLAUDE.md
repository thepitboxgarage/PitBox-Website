# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Vite dev server at http://localhost:5173
npm run build        # tsc + vite build
npm run preview      # Preview production build
npm run typecheck    # TypeScript type check (no emit)
```

No test runner or linter is configured.

## Architecture

**Single app** — React 19 + Vite + TanStack Router, deployed to Vercel as a static SPA.

No backend. Third-party services are embedded directly via iframes or called client-side.

### Routing

File-based via TanStack Router plugin (routes auto-generated from `src/routes/`):

- `index.tsx` — home page
- `bays.tsx` — bay listing
- `about.tsx`, `services.tsx`, `contact.tsx` — static pages
- `book.tsx` — booking flow layout with step indicator
- `book.index.tsx` — Step 1: Equipment Manual
- `book.waiver.tsx` — Step 2: Sign Waiver (CleverWaiver embed)
- `book.schedule.tsx` — Step 3: Schedule Your Bay (Acuity embed)

### Booking flow

3-step flow: Read Manual → Sign Waiver → Schedule via Acuity.

- `src/components/booking/ManualStep.tsx` — manual content with acknowledgement gate
- `src/components/booking/WaiverEmbed.tsx` — CleverWaiver iframe embed
- `src/components/booking/ScheduleEmbed.tsx` — Acuity Scheduling iframe embed
- `src/components/booking/BookingSteps.tsx` — step indicator UI

### Shared types

`src/types.ts` — `Bay`, `Tool`, `ToolCategory`, `Duration`, `DurationOption`.

`src/lib/bays.ts` — bay data. `src/lib/constants.ts` — facility info, hours, features.

### Styling

Tailwind CSS 4 (Vite plugin), dark theme (`bg-[#0a0a0a]`). Global styles in `src/styles/globals.css`.

### Contact form

Uses EmailJS (`@emailjs/browser`) with invisible reCAPTCHA v2 — no backend required.
