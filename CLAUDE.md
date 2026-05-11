# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development (run each in a separate terminal)
npm run dev:web          # Vite dev server at http://localhost:5173
npm run dev:api          # Express API with hot reload at http://localhost:3001

# Type checking
npm run typecheck        # Check all workspaces
npm run typecheck --workspace=apps/web
npm run typecheck --workspace=apps/api

# Build
npm run build            # Build all workspaces
npm run build --workspace=apps/web
npm run build --workspace=apps/api
```

No test runner or linter is configured.

## Architecture

**Monorepo** (npm workspaces): `apps/web`, `apps/api`, `packages/shared`.

### Shared types (`packages/shared`)

Single source of truth for types used by both apps: `Bay`, `Tool`, `Duration` (`hourly`/`half-day`/`full-day`), booking wizard state, `CheckoutPayload`/`CheckoutResponse`, `AcuitySlot`, `WaiverRecord`. Import via `@pitbox/shared`.

### Web (`apps/web`) — React 19 + Vite + TanStack Router

**Routing**: File-based via TanStack Router plugin (routes auto-generated from `src/routes/`). Key routes:
- `bays.tsx` / `bays.$bayId.tsx` — bay listing and detail
- `book.tsx` — 5-step booking wizard
- `book.confirmation.tsx` — post-payment confirmation

**Booking wizard** (`src/components/booking/`): Steps 1–5 driven by React Hook Form + Zod. `BookingWizard` orchestrates state across `Step1BayDuration` → `Step2DateTime` → `Step3Details` → `Step4Waiver` (canvas signature) → `Step5Payment`.

**API calls**: Dev Vite proxy routes `/api` → `http://localhost:3001`. In production set `VITE_API_URL`.

**Styling**: Tailwind CSS 4 (Vite plugin), dark theme (`bg-[#0a0a0a]`).

### API (`apps/api`) — Express + TypeScript (tsx)

Routes:
- `GET /api/availability` — queries Acuity for open slots (bay + date + duration)
- `POST /api/checkout` — creates Stripe Checkout session
- `POST /api/waivers` — store waiver record in Supabase
- `POST /api/webhooks/stripe` — Stripe webhook (raw body required — already handled separately from JSON middleware)
- `GET /health`

Integrations (`src/lib/`):
- `acuity.ts` — maps bay IDs → Acuity calendar IDs, duration → appointment type IDs
- `stripe.ts` — Stripe client
- `supabase.ts` — Supabase service client
- `mailer.ts` — Resend email

### Booking flow (end-to-end)

Bay + duration → fetch Acuity availability → collect user details → canvas waiver signature → Stripe Checkout → Stripe webhook fires → waiver stored in Supabase → confirmation page.

### Environment variables

Copy `.env.example` files in `apps/api/` and `apps/web/`. API needs Acuity credentials (user ID, API key, appointment type IDs per duration, calendar IDs for each of the 6 bays), Stripe keys, Supabase URL + service key, and Resend API key. Web needs `VITE_STRIPE_PUBLISHABLE_KEY` and Supabase anon key.
