# N7 — The New Foundation of Modern Banking

Marketing website for **N7 & CB7** by Linktia Infosystems — cloud-based core banking and digital banking solutions.

---

## Tech Stack

| Tool | Version |
|---|---|
| Next.js | 16.2.6 |
| React | 19.2.4 |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| Framer Motion | 12.x |
| Node.js (recommended) | 18+ |

---

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm, yarn, pnpm, or bun

### Installation

```bash
git clone https://github.com/anshuljain4242/N7.git
cd N7
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads as you edit files.

### Production Build

```bash
npm run build
npm start
```

---

## Project Structure

```
├── app/
│   ├── globals.css       # Tailwind v4 config + global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page — composes all sections
├── components/
│   ├── ui.tsx            # Shared primitives (GradientButton, OutlineButton, LearnMoreLink)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── CB7Sections.tsx
│   ├── N7Section.tsx
│   ├── BlogSection.tsx
│   ├── CaseStudies.tsx
│   ├── CTABanner.tsx
│   └── Footer.tsx
├── lib/
│   └── motion.ts         # Shared Framer Motion variants + easing
└── public/
    └── images/           # Static assets
```

---

## Key Conventions

- **Shared UI primitives** live in `components/ui.tsx` — use `GradientButton`, `OutlineButton`, and `LearnMoreLink` instead of duplicating button/link markup.
- **Animation variants** (`fadeUp`, `fadeLeft`, `fadeRight`) and the `EASE` cubic-bezier are exported from `lib/motion.ts`.
- **Responsive layout** uses Tailwind utility classes with `lg:` breakpoint for desktop overrides. The `.page-container` class (defined in `globals.css`) handles consistent horizontal padding across breakpoints.
- **Fonts** — Archivo (body/headings), Chivo Mono (buttons/labels), Roboto (brand ticker) — loaded via Google Fonts in `globals.css`.

---

## Deployment

The easiest way to deploy is [Vercel](https://vercel.com):

```bash
npx vercel
```

Or connect the GitHub repo to Vercel for automatic deployments on push.
