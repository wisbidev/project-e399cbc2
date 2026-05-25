# Architecture — aiteam Landing Page

## 1. Overview

Single-page static landing page for **aiteam**, an AI platform that automates software delivery via Telegram. Dark-mode only, Vietnamese copy, mobile-first. No backend, no database, no auth.

---

## 2. Tech Stack

| Layer        | Technology              |
|--------------|-------------------------|
| Framework    | Next.js (App Router)    |
| Styling      | Tailwind CSS            |
| Animations   | Framer Motion           |
| Icons        | Lucide React (outline)  |
| Language     | TypeScript              |
| Deployment   | Vercel (static export)  |

No backend, no ORM, no external DB. All logic lives in React components.

---

## 3. Folder Structure

```
frontend/
  src/
    app/
      layout.tsx       # Root layout, metadata, font setup
      page.tsx         # Single-page entry, section composition
      globals.css      # Tailwind base + custom CSS vars
    components/
      Hero.tsx
      Pipeline.tsx
      Agents.tsx
      Features.tsx
      TechStack.tsx
      FinalCTA.tsx
      Footer.tsx
    types/
      index.ts         # Shared TypeScript types (section props, etc.)
```

- **One component per section.** Each file is self-contained with its own styles via Tailwind utility classes.
- No barrel/index re-exports. Import paths are explicit.
- `app/page.tsx` composes sections in order; no state needed.
- `globals.css` holds CSS custom properties (gradients, glow colors) referenced by Tailwind.

---

## 4. Key Design Decisions

| Decision | Rationale |
|---|---|
| Static export (`output: 'export'`) | No server required; deploys as pure CDN assets |
| Mobile-first breakpoints | Default Tailwind breakpoints — `sm` (640px), `md` (768px), `lg` (1024px) |
| Dark-only (no toggle) | Per NFR5 — eliminates theme-switching complexity |
| Section components accept no props | Each section is fully self-contained; no prop drilling |
| Framer Motion `whileInView` for scroll reveals | Lightweight, declarative; avoids manual IntersectionObserver |
| Lucide React for all icons | Consistent outline stroke weight, tree-shakeable |
| CSS vars for gradient/glow tokens | Keep glow colors in one place; easy to tune site-wide |

---

## 5. Naming Conventions

| Entity | Convention | Example |
|---|---|---|
| Component files | PascalCase, noun | `Hero.tsx`, `Agents.tsx` |
| Type files | PascalCase, singular noun | `types/index.ts` |
| CSS custom properties | kebab-case | `--glow-blue`, `--bg-dark` |
| Tailwind custom colors | lower-case | `blue-glow`, `dark-base` |
| Section IDs (anchor targets) | kebab-case | `id="ai-agents"`, `id="tech-stack"` |

---

## 6. Required Environment Variables

None. The site is fully static. No `NEXT_PUBLIC_` variables are needed.

---

## 7. Deployment

- Vercel auto-detects Next.js from `package.json`.
- Build command: `next build` (default).
- Output: static export via `next.config.ts` `output: 'export'` — one `out/` directory, no server.
- Telegram bot link is a hardcoded string (`https://t.me/aiteam_bot`); update in `FinalCTA.tsx` and `Footer.tsx` when the bot username is confirmed.
