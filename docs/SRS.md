# Software Requirements Specification — aiteam Landing Page

## 1. Overview

A modern, dark-mode landing page in Vietnamese introducing **aiteam** — an AI platform that automatically builds software via Telegram. The page tells the story from user idea to automated deploy, showcasing the 4 AI agents (PM, TL, Dev, TestLead) that operate like a real engineering team.

**Key constraints:**
- Mobile-first, responsive design
- Dark theme with blue-cyan glow/gradient effects
- Built with Next.js + Tailwind CSS + Framer Motion
- 7 sections: Hero → Pipeline → AI Agents → Features → Tech Stack → Final CTA → Footer

---

## 2. Functional Requirements

### F1 — Hero Section
| # | Requirement | Acceptance Criteria |
|---|---|---|
| F1.1 | Dark background with blue gradient overlay | Gradient blends from dark blue/purple to black; covers full viewport height on desktop |
| F1.2 | Headline "AI Team. Không cần thuê dev." | Large bold typography (≥ 4xl on mobile, ≥ 6xl on desktop); white text |
| F1.3 | Subheadline explaining the value prop | 1–2 sentences; muted gray/blue-300 color; max-width constrained |
| F1.4 | Primary CTA "Bắt đầu ngay" | Filled blue button; links to Telegram bot; visible on mobile without scrolling |
| F1.5 | Secondary CTA "Xem cách hoạt động" | Outlined/ghost button; smooth-scrolls to Pipeline section on click |
| F1.6 | Responsive mobile-first | Stack vertically on mobile; proper spacing; no horizontal overflow |

### F2 — Pipeline / How It Works
| # | Requirement | Acceptance Criteria |
|---|---|---|
| F2.1 | Section title "Từ ý tưởng đến deploy hoàn toàn tự động" | Centered heading with gradient text effect |
| F2.2 | 5-step timeline / step cards | Each card: icon/step-number, title, short description |
| F2.3 | Steps: Telegram → PM phân tích → User duyệt → AI team build → Deploy | Correct order; connected visually (line or arrow between steps) |
| F2.4 | Dark cards with subtle light border | Border color: blue-500/30 or similar; rounded-lg; padding |
| F2.5 | Responsive | Horizontal row on desktop (≥ 5 columns); vertical stack on mobile |

### F3 — AI Agents Section
| # | Requirement | Acceptance Criteria |
|---|---|---|
| F3.1 | Section title "4 AI Agents vận hành như engineering team thật" | Centered heading |
| F3.2 | 4 agent cards: PM, TL, Dev, TestLead | Each card: agent role name + 3–4 bullet-point responsibilities |
| F3.3 | Hover glow effect (blue) | On hover: subtle box-shadow or outline glow in cyan/blue |
| F3.4 | Grid layout | 2×2 grid on desktop, 1 column on mobile |
| F3.5 | Agent icons | Small icon/avatar placeholder per card (can be emoji or SVG) |

### F4 — Features Section
| # | Requirement | Acceptance Criteria |
|---|---|---|
| F4.1 | Section title "Tự động hóa toàn bộ quy trình phát triển phần mềm" | Centered heading |
| F4.2 | 6 feature items | Each: outline-style icon + title + 1-line description |
| F4.3 | Responsive grid | 3 columns on desktop, 2 on tablet, 1 on mobile |
| F4.4 | Icon style consistency | All icons use same outline/line-art style (phosphor-icons or lucide-react) |

### F5 — Tech Stack Section
| # | Requirement | Acceptance Criteria |
|---|---|---|
| F5.1 | Section title "Stack hiện đại, sẵn sàng production" | Centered heading |
| F5.2 | Logo/badge grid for: Next.js, Go, PostgreSQL, Tailwind CSS, GitHub Actions, Docker | Each badge shows tech name + icon/logo; dark pill style |
| F5.3 | Responsive grid | Auto-fit/flex-wrap; 3 per row on desktop, 2 on tablet, 1 on mobile |

### F6 — Final CTA + Footer
| # | Requirement | Acceptance Criteria |
|---|---|---|
| F6.1 | Final CTA section: headline + subheadline + "Chat qua Telegram" button | Full-width dark section; CTA button opens Telegram link in new tab |
| F6.2 | Footer: logo "aiteam" + Telegram link + GitHub link + copyright | Minimal, centered or 3-column layout; copyright year dynamic via JS |
| F6.3 | Links open in new tab with rel="noopener noreferrer" | All external links |

### F7 — Animations & Polish
| # | Requirement | Acceptance Criteria |
|---|---|---|
| F7.1 | Fade-in on scroll for sections | Using Framer Motion `whileInView` or similar; staggered children |
| F7.2 | Hover glow effects | Section F3 cards, buttons, and any interactive element |
| F7.3 | Smooth transitions | Page-load entrance animation for Hero; section transitions |
| F7.4 | Typography: large modern, generous whitespace | Consistent font scale; section padding ≥ 16px on mobile, ≥ 32px on desktop |
| F7.5 | Clean layout, no clutter | Maximum content width ~1200px centered; consistent spacing |

---

## 3. Tech Stack

| Component | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React (outline style) |
| Deployment | Vercel (or static export) |
| Language | TypeScript |

---

## 4. Non-functional Requirements

| # | Requirement |
|---|---|
| NFR1 | Lighthouse Performance ≥ 90, Accessibility ≥ 95 |
| NFR2 | No JavaScript runtime errors |
| NFR3 | 100% responsive across 320px–1920px |
| NFR4 | All text in Vietnamese (no lorem ipsum) |
| NFR5 | Dark mode only (no light mode toggle needed) |

---

## 5. Design

Design: see attached spec (no Figma file available — design described textually in this document and in the individual function descriptions above).

---

## 6. Constraints

- No authentication, no database — purely static landing page
- Must be deployable as a static site (Next.js static export or Vercel)
- All copy in Vietnamese
- Single-page layout with anchor smooth-scroll
