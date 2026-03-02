# Portfolio Landing Page 9 - Next.js, TypeScript, TailwindCSS Frontend Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-blue)](https://tailwindcss.com/)

A modern, single-page portfolio template built with the Next.js App Router and TypeScript. Sections use inline styles and shared CSS for a consistent max-width (1280px) layout. Scroll-triggered CSS animations (fade-up, fade-left, scale-in, etc.) reveal content smoothly as you scroll. Ideal for developers who want a production-ready portfolio with clear structure and no flash of unstyled content.

**Live Demo:** [https://portfolio-ui-9.vercel.app/](https://portfolio-ui-9.vercel.app/)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Routes & Pages](#routes--pages)
- [API Endpoints](#api-endpoints)
- [Components & Functionality](#components--functionality)
- [Scroll Animations](#scroll-animations)
- [Styling](#styling)
- [Reusing Components in Other Projects](#reusing-components-in-other-projects)
- [Keywords & SEO](#keywords--seo)
- [Conclusion](#conclusion)
- [License](#license)

---

## Features

- **Next.js App Router** – File-based routing with `app/`; server and client components separated.
- **TypeScript** – Full type safety and interfaces (e.g. `Project`, `TimelineItem`).
- **Tailwind CSS** – Utility classes for base styles; theme (colors, fonts) in `tailwind.config.ts`.
- **Inline styles** – Section layout and component styling use React inline `style` for reliable, consistent rendering (max-width 1280px, alignment).
- **Scroll-triggered CSS animations** – Sections and cards reveal on scroll (fade-up, fade-left, fade-right, scale-in, fade-rotate, staggered children) via `useScrollReveal` and `globals.css` keyframes.
- **Responsive layout** – Single container (max 1280px, centered); header uses CSS grid with media queries in `globals.css`.
- **SEO** – Metadata and viewport in `layout.tsx` (title, description, Open Graph, Twitter, canonical, robots).
- **Single-page sections** – Hero, Projects, Technologies, Timeline (About), Accomplishments, plus Header and Footer.
- **Sample API** – `GET /api/hello` for backend or serverless.
- **Linting** – ESLint with `eslint-config-next` and `next lint`.

---

## Tech Stack

| Category   | Technology                                                       |
| ---------- | ---------------------------------------------------------------- |
| Framework  | Next.js 14 (App Router)                                          |
| UI Library | React 18                                                         |
| Language   | TypeScript 5                                                     |
| Styling    | Tailwind CSS 3, inline styles, `app/globals.css`                 |
| Fonts      | Next.js font (Space Grotesk via `next/font/google`)              |
| Icons      | react-icons                                                      |
| Animations | CSS `@keyframes` + IntersectionObserver (`useScrollReveal` hook) |
| Linting    | ESLint, eslint-config-next                                       |

---

## Project Structure

```bash
portfolio-ui-9/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout, metadata, viewport, font, globals.css
│   │   ├── page.tsx         # Home page (server); renders <Home />
│   │   ├── providers.tsx    # Client wrapper (passthrough)
│   │   └── globals.css      # Tailwind layers, scroll animation keyframes, header grid
│   │   └── api/
│   │       └── hello/
│   │           └── route.ts # GET /api/hello
│   ├── components/
│   │   ├── Home/            # Page composition (Layout + sections)
│   │   ├── Hero/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Projects/
│   │   ├── Technologies/
│   │   ├── TimeLine/
│   │   ├── Accomplishments/
│   │   ├── BackgroundAnimation/
│   │   └── NavDropDown/
│   ├── layout/
│   │   └── Layout.tsx       # App shell (Header + main + Footer), 1280px container
│   ├── hooks/
│   │   └── useScrollReveal.ts # IntersectionObserver; adds .visible for CSS animations
│   ├── constants/
│   │   └── constants.ts    # projects[], TimeLineData[], Project & TimelineItem types
│   ├── tailwind.config.ts
│   └── (no styles/, themes/, or types/ – styling is globals.css + inline + Tailwind)
├── public/
├── next.config.js
├── tsconfig.json
├── .eslintrc.json
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** 18.x or 20.x (LTS recommended)
- **npm** (or yarn / pnpm)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/portfolio-ui-9.git
   cd portfolio-ui-9
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000). The page hot-reloads on file changes.

4. **Build for production**

   ```bash
   npm run build
   npm run start
   ```

---

## Environment Variables

This project **does not require any environment variables** to run or build. Config such as `SITE_URL` in `src/app/layout.tsx` is hardcoded.

To add env-based config later:

1. Create `.env.local` in the project root (git-ignored).
2. Use `NEXT_PUBLIC_*` for client-visible values; no prefix for server-only.
3. In Vercel (or other host), set the same variables in the project settings.

---

## Scripts

| Command         | Description                                                        |
| --------------- | ------------------------------------------------------------------ |
| `npm run dev`   | Start dev server at [http://localhost:3000](http://localhost:3000) |
| `npm run build` | Production build (output in `.next`)                               |
| `npm run start` | Run production server (run `build` first)                          |
| `npm run lint`  | Run ESLint (`next lint`)                                           |

---

## Routes & Pages

| Route        | File                     | Description                              |
| ------------ | ------------------------ | ---------------------------------------- |
| `/`          | `app/page.tsx`           | Home (server) renders client `<Home />`. |
| `/api/hello` | `app/api/hello/route.ts` | `GET` returns `{ name: 'John Doe' }`.    |

**`app/layout.tsx`** – Root layout: `<html>`, `<body>`, Space Grotesk font, `<Providers>`, and `import './globals.css'`. Metadata and viewport are exported for SEO.

---

## API Endpoints

### `GET /api/hello`

Sample API route for server/deployment checks.

**Response:** `{ "name": "John Doe" }`

**Example:** `curl http://localhost:3000/api/hello`

**File:** `src/app/api/hello/route.ts`

---

## Components & Functionality

### How the home page is built

- **`app/page.tsx`** (server) renders **`<Home />`**.
- **`Home`** (`components/Home/Home.tsx`, client) renders: `Layout` → hero section (grid: `Hero` + `BackgroundAnimation`), then `Projects`, `Technologies`, `Timeline`, `Accomplishments`.

### Layout (`src/layout/Layout.tsx`)

Single wrapper: max-width 1280px, padding, centered. Renders `Header`, `main` (children), and `Footer`. All sections share this container for aligned left/right edges.

### Hero (`src/components/Hero/Hero.tsx`)

Title (“Welcome To My Personal Portfolio”), description paragraph, and “Learn More” button. Uses `useScrollReveal` and class `anim-fade-left` so the block slides in from the left when it enters the viewport.

### Projects (`src/components/Projects/Projects.tsx`)

Grid of project cards from `constants.projects`. Each card: image, title, description, tags, Code/Source links. Section uses `anim-fade-up`; the grid has `stagger-children` so cards animate in sequence.

### Technologies (`src/components/Technologies/Technologies.tsx`)

Three items (Front-End, Back-End, UI/UX) with icons and short text. Section uses `anim-fade-down`; list uses `stagger-children`.

### Timeline (`src/components/TimeLine/TimeLine.tsx`)

“About” section: horizontal list of year + text from `TimeLineData`. Section uses `anim-fade-rotate` (slight rotation + fade).

### Accomplishments (`src/components/Accomplishments/Accomplishments.tsx`)

Four stat-style blocks (e.g. “20+ Open Source Projects”). Section uses `anim-scale-in`; grid uses `stagger-children`.

### Header & Footer

- **Header** – Logo, nav links (#projects, #tech, #about), social icons. Inline styles + `.site-header` grid in `globals.css` for responsive behavior.
- **Footer** – Call/Email, slogan, social icons. Inline styles.

### BackgroundAnimation (`src/components/BackgroundAnimation/BackgroundAnimation.tsx`)

Decorative SVG with motion paths. Uses `anim-fade-right` for scroll-in from the right.

### NavDropDown

Dropdown panel (e.g. contact links). Used where a nav item opens a menu; styling is self-contained.

---

## Scroll Animations

Animations are **CSS-only** (no Framer Motion for visibility). A small hook and global CSS drive them:

- **`src/hooks/useScrollReveal.ts`** – Uses `IntersectionObserver`; when an element is in view (default 10–15% visible), it adds the class `visible` to that element. One-shot (observer disconnects after reveal).
- **`src/app/globals.css`** – Defines:
  - **Keyframes:** `fadeUp`, `fadeDown`, `fadeLeft`, `fadeRight`, `scaleIn`, `fadeRotate`.
  - **Classes:** `.anim-fade-up`, `.anim-fade-down`, `.anim-fade-left`, `.anim-fade-right`, `.anim-scale-in`, `.anim-fade-rotate` — each starts with `opacity: 0` and, when `.visible` is added, runs the matching animation (forwards).
  - **Stagger:** `.stagger-children.visible > *` — children run `fadeUp` with increasing `animation-delay` (e.g. 0.05s, 0.12s, …).

Usage in a component:

```tsx
const ref = useScrollReveal<HTMLElement>(0.1);
return <section ref={ref} className="anim-fade-up" ... />;
```

---

## Styling

- **`app/globals.css`** – `@tailwind base/components/utilities`; base styles for `html`/`body`/links/lists; scroll animation keyframes and classes; `.site-header` grid and media queries.
- **`tailwind.config.ts`** – `content` paths, `theme.extend` (e.g. `maxWidth['7xl']`, `colors.background`, `fontFamily.sans`).
- **Components** – Inline `style` objects for layout and visuals (max-width 1280px, spacing, colors, gradients). This keeps sections visible and aligned even if Tailwind or class names change.
- **Layout** – Single container: `maxWidth: 1280`, `width: '100%'`, `margin: '0 auto'`, `padding: '0 48px'`.

---

## Reusing Components in Other Projects

1. Copy the component folder (e.g. `Hero/`, `Projects/`) and, if you use scroll animations, copy `hooks/useScrollReveal.ts` and the animation keyframes + classes from `globals.css`.
2. Install deps: `next`, `react`, `react-icons`; for Tailwind, `tailwindcss`, `postcss`, `autoprefixer`.
3. Ensure path alias `@/*` in `tsconfig.json` if you keep `@/` imports.
4. Use the same data shapes (`Project`, `TimelineItem`) or adapt props. Projects data lives in `constants/constants.ts`; edit there or pass as props after a small refactor.

---

## Keywords & SEO

Metadata in `app/layout.tsx` includes: title, description, authors, canonical URL, robots, Open Graph (type, url, title, description, siteName, locale, images), Twitter card, favicon, apple-touch-icon, theme-color.

**Keywords:** portfolio, John Doe, developer, React, Next.js, web development, projects, frontend, full stack, Arnob Mahmud.

To customize: edit the `metadata` and `viewport` exports in `src/app/layout.tsx` and update `SITE_URL` (or switch to `process.env.NEXT_PUBLIC_SITE_URL` if you add env vars).

---

## Conclusion

This repo is a **single-page portfolio** on Next.js 14 (App Router) and TypeScript. It uses Tailwind for base styles and inline styles for section layout so content is aligned and visible. Scroll-triggered CSS animations (and the `useScrollReveal` hook) make sections and cards appear smoothly from different directions. You can use it as a learning base or clone and edit constants, metadata, and copy for your own site.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Happy Coding! 🎉

This is an **open-source project** — feel free to use, enhance, and extend it.

If you have questions or want to share your work, reach out via GitHub or [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊
