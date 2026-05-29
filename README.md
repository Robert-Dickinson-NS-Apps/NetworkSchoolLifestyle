# NetworkSchoolLifestyle

A full-stack TypeScript web app exploring the lifestyle, ideas, and community of a modern "network school" — a curated showcase of living experience, lifelong learning, art discussions, and creative tools.

**Live app:** [replit.com/@robertdickinson/NetworkSchoolLifestyle](https://replit.com/@robertdickinson/NetworkSchoolLifestyle)

---

## Overview

NetworkSchoolLifestyle is a content-rich React + Express site that brings together several themes around education, community, and creative practice:

- **Living experience and community engagement** — imagery and narrative around day-to-day life at a network school.
- **Lifelong learning** — sections on the idea factory model and continuous learning.
- **Sponge City** — a dedicated section exploring sustainable urban water concepts.
- **Art and the future of art** — recommended X (Twitter) accounts and discussions.
- **Creative tools** — a launcher button for the Mirror Pix app in the video creation section.
- **Internationalization & theming** — theme switching and Russian-language support.
- **Source-code view** — inline source inspection for transparency.

---

## Tech stack

| Layer       | Technology |
|-------------|------------|
| Frontend    | React + Vite + TypeScript |
| UI          | Radix UI primitives + Tailwind CSS |
| Forms       | React Hook Form + `@hookform/resolvers` |
| Backend     | Node.js + Express (`server/index.ts`) |
| Database    | Neon (serverless Postgres) via Drizzle ORM |
| Schema      | `drizzle.config.ts` + `shared/` types |
| Build       | Vite (client) + esbuild (server bundle) |
| Hosting     | Replit (`.replit` config) |

---

## Repository structure

```text
NetworkSchoolLifestyle/
├── client/              # React + Vite frontend
├── server/              # Express API (entry: server/index.ts)
├── shared/              # Shared types & schema between client and server
├── attached_assets/     # Images and media for community/lifestyle sections
├── drizzle.config.ts    # Drizzle ORM configuration
├── components.json      # UI component registry (shadcn-style)
├── postcss.config.js    # PostCSS / Tailwind pipeline
├── package.json         # Scripts and dependencies
└── .replit              # Replit run/deploy configuration
```

---

## Getting started

### Prerequisites

- Node.js 18+
- npm (or pnpm / yarn)
- A Neon Postgres connection string (for database-backed features)

### Clone the repo

```bash
git clone https://github.com/Robert-Dickinson-NS-Apps/NetworkSchoolLifestyle.git
cd NetworkSchoolLifestyle
```

### Install dependencies

```bash
npm install
```

### Configure environment

Create a `.env` file with your database URL:

```env
DATABASE_URL=postgres://user:pass@host/db
```

### Push the database schema

```bash
npm run db:push
```

### Run in development

```bash
npm run dev
```

This starts the Express server (with `tsx`) which also serves the Vite-built client.

### Build for production

```bash
npm run build
npm start
```

---

## Scripts

| Script          | What it does |
|-----------------|--------------|
| `npm run dev`   | Start dev server with `tsx server/index.ts` |
| `npm run build` | Build client (Vite) and bundle server (esbuild) into `dist/` |
| `npm start`     | Run the built server (`dist/index.js`) in production mode |
| `npm run check` | TypeScript type check (`tsc`) |
| `npm run db:push` | Apply schema changes via `drizzle-kit push` |

---

## Features at a glance

- Themed React UI with Radix + Tailwind components
- Multi-language support (English / Russian) with theme switching
- Sponge City, lifelong learning, and idea factory sections
- Curated X account recommendations for art and the future of art
- Embedded launcher for the Mirror Pix video creation tool
- Inline source-code view

---

## About

Built by **Robert Dickinson** as part of the [Robert-Dickinson-NS-Apps](https://github.com/Robert-Dickinson-NS-Apps) collection — a set of single-purpose web apps exploring water engineering, learning communities, and creative tooling.

## License

MIT
