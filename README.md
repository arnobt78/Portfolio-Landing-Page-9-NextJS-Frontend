# Portfolio Landing Page 9 - Next.js, TypeScript, TailwindCSS, Framer Motion Frontend Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.2.1-blue)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.34.3-black)](https://www.framer.com/motion/)

A modern, single-page portfolio template built with the Next.js App Router, TypeScript, and Styled Components. Use it to showcase your projects, skills, timeline, and accomplishments with a clean, responsive layout and SEO-friendly metadata. Ideal for developers and learners who want a production-ready portfolio with clear structure and reusable components.

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
- [Theming & Styling](#theming--styling)
- [Reusing Components in Other Projects](#reusing-components-in-other-projects)
- [Keywords & SEO](#keywords--seo)
- [Conclusion](#conclusion)
- [License](#license)

---

## Features

- **Next.js App Router** – File-based routing with `app/` directory; server and client components separated.
- **TypeScript** – Full type safety, interfaces for props and data (e.g. `Project`, `TimelineItem`).
- **Styled Components** – CSS-in-JS with a shared theme (colors, fonts, breakpoints).
- **Responsive design** – Breakpoints (sm, md, lg, xl) used across layout and components.
- **SEO** – Centralized metadata in `layout.tsx` (title, description, Open Graph, Twitter, canonical, robots).
- **Single-page sections** – Hero, Projects, Technologies, Timeline (About), Accomplishments.
- **Sample API route** – `GET /api/hello` as a starting point for backend or serverless logic.
- **Linting** – ESLint with `eslint-config-next` and `next lint`.

---

## Tech Stack

| Category   | Technology                                          |
| ---------- | --------------------------------------------------- |
| Framework  | Next.js 14 (App Router)                             |
| UI Library | React 18                                            |
| Language   | TypeScript 5                                        |
| Styling    | Styled Components 6, styled-normalize               |
| Fonts      | Next.js font (Space Grotesk via `next/font/google`) |
| Icons      | react-icons                                         |
| Linting    | ESLint, eslint-config-next                          |

---

## Project Structure

```bash
portfolio-ui-9/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout, metadata, viewport, font
│   │   ├── page.tsx            # Home page (server); renders <Home />
│   │   ├── providers.tsx       # Client wrapper (Theme provider)
│   │   └── api/
│   │       └── hello/
│   │           └── route.ts    # GET /api/hello
│   ├── components/             # Client-side UI components
│   │   ├── Home/               # Page composition
│   │   ├── Hero/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Projects/
│   │   ├── Technologies/
│   │   ├── TimeLine/
│   │   ├── Accomplishments/
│   │   ├── BackgroundAnimation/
│   │   └── NavDropDown/
│   ├── layout/                 # App shell (Header + main + Footer)
│   │   ├── Layout.tsx
│   │   └── LayoutStyles.ts
│   ├── styles/                 # Global styles & shared styled primitives
│   │   ├── globals.ts          # createGlobalStyle (reset, body, etc.)
│   │   ├── theme.tsx           # ThemeProvider + GlobalStyles
│   │   └── GlobalComponents/   # Section, SectionTitle, Button, etc.
│   ├── themes/
│   │   └── default.ts          # Colors, fonts, breakpoints
│   ├── constants/
│   │   └── constants.ts        # projects[], TimeLineData[], types
│   └── types/
│       └── styled.d.ts         # Styled Components DefaultTheme
├── public/                     # Static assets (favicon, images, og-image)
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

   Open [http://localhost:3000](http://localhost:3000). The page will hot-reload on file changes.

4. **Build for production**

   ```bash
   npm run build
   npm run start
   ```

---

## Environment Variables

This project **does not require any environment variables** to run locally or to build. All config (e.g. `SITE_URL` in `src/app/layout.tsx`) is currently hardcoded for simplicity.

If you add a backend, analytics, or feature flags later, you can use Next.js env support:

1. **Create a `.env.local`** in the project root (already ignored by git):

   ```bash
   # Example (not required for current project)
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

2. **Naming rules**
   - `NEXT_PUBLIC_*` – exposed to the browser.
   - No prefix – server-only (e.g. API routes, `layout.tsx`, server components).

3. **Use in code**

   ```ts
   // In client or server code (only NEXT_PUBLIC_* in client)
   const siteUrl =
     process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-ui-9.vercel.app/";
   ```

4. **Vercel / production** – Add the same variable names in your hosting dashboard (e.g. Vercel → Project → Settings → Environment Variables).

You do **not** need a `.env` file to run or build this project as-is.

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

The app uses the **Next.js App Router**. All routes are under `src/app/`.

| Route        | File                     | Description                                                                |
| ------------ | ------------------------ | -------------------------------------------------------------------------- |
| `/`          | `app/page.tsx`           | Home page (server component) that renders the client `<Home />` component. |
| `/api/hello` | `app/api/hello/route.ts` | API route: `GET` returns `{ name: 'John Doe' }`.                           |

- **`app/layout.tsx`** – Root layout: `<html>`, `<body>`, font (Space Grotesk), and `<Providers>` (which wraps the app with Styled Components theme). Metadata and viewport are exported here for SEO.

---

## API Endpoints

### `GET /api/hello`

Sample API route to verify server-side and deployment.

**Response**

```json
{ "name": "John Doe" }
```

**Example**

```bash
curl http://localhost:3000/api/hello
```

**Code location:** `src/app/api/hello/route.ts`

```ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ name: "John Doe" });
}
```

You can add more route handlers in the same file (e.g. `POST`) or create new folders under `app/api/` for other endpoints.

---

## Components & Functionality

### How the home page is built

- **`app/page.tsx`** (server) renders **`<Home />`**.
- **`Home`** (`components/Home/Home.tsx`, client) composes: `Layout` → `Section` (grid) with `Hero` + `BackgroundAnimation`, then `Projects`, `Technologies`, `Timeline`, `Accomplishments`.

### Layout (`src/layout/Layout.tsx`)

Wraps every page in a header, main content area, and footer.

```tsx
<Container>
  <Header />
  <main>{children}</main>
  <Footer />
</Container>
```

Use it in any page or layout that should share the same shell.

---

### Hero (`src/components/Hero/Hero.tsx`)

Hero section: title, short description, and a “Learn More” button. Optional `handleClick` prop for the button.

**Props**

```ts
interface HeroProps {
  handleClick?: () => void;
}
```

**Example**

```tsx
<Hero />
<Hero handleClick={() => scrollToSection('projects')} />
```

---

### Projects (`src/components/Projects/Projects.tsx`)

Renders a grid of project cards from `src/constants/constants.ts` (`projects` array). Each card shows image, title, description, tags, and “Code” / “Source” links.

**Data shape** (from `constants.ts`):

```ts
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  source: string;
  visit: string;
  id: number;
}
```

To customize: edit `projects` in `src/constants/constants.ts` or replace with data from an API.

---

### Technologies (`src/components/Technologies/Technologies.tsx`)

Lists three areas (Front-End, Back-End, UI/UX) with icons and short text. Good place to describe your stack.

---

### Timeline (`src/components/TimeLine/TimeLine.tsx`)

“About” section: horizontal carousel of year + text entries. Data comes from `TimeLineData` in `constants.ts`.

**Data shape**

```ts
interface TimelineItem {
  year: number;
  text: string;
}
```

Edit `TimeLineData` to change the timeline content.

---

### Accomplishments (`src/components/Accomplishments/Accomplishments.tsx`)

Stats-style blocks (e.g. “20+ Open Source Projects”). Data is local inside the component; you can move it to `constants.ts` or props for reusability.

---

### Header & Footer

- **Header** – Logo, nav links (#projects, #tech, #about), social icons. Styled in `HeaderStyles.ts`.
- **Footer** – Contact (phone, email), slogan, social icons. Uses shared `SocialIcons` from Header styles.

---

### BackgroundAnimation (`src/components/BackgroundAnimation/BackgroundAnimation.tsx`)

Decorative SVG animation for the hero. Purely visual; drop it into any section where you want the same effect.

---

## Theming & Styling

### Theme (`src/themes/default.ts`)

- **fonts** – `title`, `main` (both use CSS variable `--font-space-grotesk` from Next.js font).
- **colors** – `primary1`, `background1`, `accent1`, `button`, `background2`.
- **breakpoints** – `sm`, `md`, `lg`, `xl` (e.g. `theme.breakpoints.sm` in styled-components).

### Global styles (`src/styles/globals.ts`)

- `styled-normalize` plus box-sizing, body font/colors, and basic reset for headings, links, lists.

### Shared primitives (`src/styles/GlobalComponents/index.ts`)

- `Section`, `SectionTitle`, `SectionText`, `SectionDivider`, `ButtonBack`, `ButtonFront`, etc. Used across Hero, Projects, Technologies, Timeline, Accomplishments.

### Styled Components + TypeScript

Theme types are declared in `src/types/styled.d.ts` so `props.theme` is typed in styled components.

---

## Reusing Components in Other Projects

1. **Copy the component folder** (e.g. `Hero/` including `Hero.tsx` and `HeroStyles.ts`).
2. **Satisfy dependencies** – Install `styled-components`, and copy or adapt:
   - `styles/GlobalComponents` (or only the primitives you use),
   - `themes/default.ts`,
   - `types/styled.d.ts`.
3. **Path alias** – If you use `@/`, add in `tsconfig.json`:

   ```json
   "baseUrl": ".",
   "paths": { "@/*": ["./src/*"] }
   ```

   Or replace `@/` imports with relative paths.

4. **Example: reuse Hero**

   ```tsx
   import Hero from "@/components/Hero/Hero";
   import { Section } from "@/styles/GlobalComponents";

   <Section row nopadding>
     <Hero handleClick={() => console.log("Learn more")} />
   </Section>;
   ```

5. **Example: reuse Projects with your data**
   - Keep `Projects.tsx` and `ProjectsStyles.ts`.
   - Provide a `projects` array with the same `Project` shape (or adapt the component to your type).
   - Import and render: `<Projects />` (or pass `projects` as prop if you refactor the component to accept it).

---

## Keywords & SEO

The site metadata (in `app/layout.tsx`) targets:

**Keywords:** portfolio, John Doe, developer, React, Next.js, web development, projects, frontend, full stack, Arnob Mahmud.

**SEO features:** title, description, authors, canonical URL, robots, Open Graph (type, url, title, description, siteName, locale, images), Twitter card, favicon, apple-touch-icon, theme-color.

To customize: edit the `metadata` and `viewport` exports in `src/app/layout.tsx` and replace `SITE_URL` (and optionally use `process.env.NEXT_PUBLIC_SITE_URL` if you introduce env vars).

---

## Conclusion

This project is a **single-page portfolio template** built with Next.js 14 (App Router), TypeScript, and Styled Components. It demonstrates:

- Clear separation of server (`page.tsx`, `layout.tsx`, API route) and client components (`Home`, Hero, Projects, etc.).
- Centralized theming and global styles.
- Reusable sections (Hero, Projects, Technologies, Timeline, Accomplishments) and a sample API route.

You can use it as a learning reference or as a base for your own portfolio by editing constants, metadata, and content.

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Happy Coding! 🎉

This is an **open-source project** - feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊
