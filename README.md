# Anuar Aimoldin — Personal Website

Modern, mobile-first portfolio for AI research, industry leadership, competitions, talks, and community work. Built with Next.js 14 and deployed on Vercel.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## Overview

This site highlights:
- AI research and publications
- Industry leadership and career milestones
- Kaggle and competition achievements
- Talks and community work
- Media coverage

## Tech Stack

Frontend:
- Next.js 14 (App Router)
- React 18
- TypeScript 5

Styling/UI:
- Tailwind CSS 3.4
- shadcn/ui + Radix UI
- Framer Motion
- Lucide React
- class-variance-authority + clsx + tailwind-merge

Content/Data:
- Local JSON in `locals/`
- Static assets in `public/`

Observability:
- Vercel Analytics

Hosting:
- Vercel

## SEO and Metadata

- Route-level metadata in `app/**/metadata.ts`
- Dynamic Open Graph and Twitter images in `app/opengraph-image.tsx` and `app/twitter-image.tsx`
- JSON-LD on the home page in `app/page.tsx`
- `app/sitemap.ts` and `app/robots.ts`

## Project Structure

```
.
├── app/
│   ├── careers/
│   │   ├── metadata.ts
│   │   └── page.tsx
│   ├── community/
│   │   ├── metadata.ts
│   │   └── page.tsx
│   ├── competitions/
│   │   ├── metadata.ts
│   │   └── page.tsx
│   ├── media/
│   │   ├── metadata.ts
│   │   ├── page.tsx
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── limon/
│   │       └── page.tsx
│   ├── research/
│   │   ├── metadata.ts
│   │   └── page.tsx
│   ├── talks/
│   │   ├── metadata.ts
│   │   └── page.tsx
│   ├── opengraph-image.tsx
│   ├── twitter-image.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── locals/
│   └── en/
├── public/
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## Features

- Responsive, mobile-first layout
- Dark theme with refined typography and gradients
- Animated hero, stats, and featured work
- Career timeline with expandable roles
- Research papers, citations, and service
- Competitions and talks pages
- Media articles with dynamic routes
- SEO-ready metadata, OG images, sitemap, and robots

## Getting Started

Prerequisites:
- Node.js 18+ or 20+
- pnpm (recommended) or npm

Install and run:

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Development

Commands:

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

### Updating Content

- Home hero and community copy: `locals/en/home/*.json`
- Navigation links and CTAs: `locals/en/navigation.json`
- Careers data: `app/careers/page.tsx`
- Research papers and service: `app/research/page.tsx`
- Media articles: `locals/en/media/*.json` and `app/media/[slug]/page.tsx`

## Deployment

Vercel is the recommended deployment platform. No environment variables are required for the current setup.

## Contact

- Website: https://anuar.best
- Kaggle: https://www.kaggle.com/sneddy
- LinkedIn: https://linkedin.com/in/anuar-aimoldin
- Email: aimoldin@gmail.com
