# Anuar Aimoldin - Personal Website

A modern, performant portfolio website showcasing AI research, machine learning competitions, publications, and professional experience. Built with Next.js 14 and deployed on Vercel.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Service Architecture](#service-architecture)
- [Features](#features)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Environment Variables](#environment-variables)

## Overview

This is the personal portfolio website for Anuar Aimoldin, an AI Researcher and Machine Learning Engineer. The site showcases:

- Professional experience in AI/ML research
- Kaggle competitions achievements (Competitions Master, #14 globally)
- Research publications and media appearances
- Community engagement and talks
- Mathematics olympiad accomplishments

## Tech Stack

### Frontend Framework
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with Server Components
- **TypeScript 5** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **shadcn/ui** - Re-usable component library
- **Radix UI** - Headless UI primitives
- **Framer Motion 10** - Animation library
- **Lucide React** - Icon library
- **class-variance-authority** - Component variant management
- **clsx & tailwind-merge** - Conditional class name utilities

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **TypeScript** - Static type checking

### Backend & Data
- **Supabase** - Database and file storage
  - PostgreSQL database
  - Storage API for CV/resume files
  - Authentication ready (configured but not actively used)

### Hosting & Deployment
- **Vercel** - Serverless deployment platform
- **Next.js Edge Runtime** - For optimal performance

## Project Structure

\`\`\`
.
├── app/                              # Next.js App Router
│   ├── careers/                      # Career history page
│   │   ├── page.tsx                  # Main careers page with experience timeline
│   │   └── loading.tsx               # Loading state
│   ├── community/                    # Community engagement page
│   │   └── page.tsx                  # Community activities and involvement
│   ├── competitions/                 # ML & Math competitions
│   │   ├── page.tsx                  # Competitions achievements
│   │   └── loading.tsx               # Loading state
│   ├── media/                        # Media appearances
│   │   ├── page.tsx                  # Media articles overview
│   │   ├── [slug]/                   # Dynamic media article routes
│   │   │   └── page.tsx              # Individual article page
│   │   ├── limon/                    # Specific media article
│   │   │   └── page.tsx
│   │   └── loading.tsx
│   ├── research/                     # Research & publications
│   │   └── page.tsx                  # Research papers and publications
│   ├── talks/                        # Conference talks & presentations
│   │   ├── page.tsx                  # Talks listing
│   │   └── loading.tsx
│   ├── layout.tsx                    # Root layout with navigation
│   ├── page.tsx                      # Home page
│   ├── globals.css                   # Global styles and CSS variables
│   └── icon.tsx                      # Dynamic favicon generator
│
├── components/                       # React components
│   ├── layout/                       # Layout components
│   │   ├── navigation.tsx            # Main navigation bar
│   │   ├── theme-aware-logo.tsx      # Dynamic logo component
│   │   └── theme-provider.tsx        # Theme context provider
│   ├── sections/                     # Page section components
│   │   ├── home/                     # Home page sections
│   │   │   ├── hero-section.tsx      # Hero with animated name
│   │   │   ├── stats-section.tsx     # Achievement statistics
│   │   │   ├── featured-work-section.tsx  # Featured projects
│   │   │   └── community-section.tsx # Community highlights
│   │   ├── competitions/             # Competition sections
│   │   │   ├── machine-learning-competitions.tsx
│   │   │   └── mathematics-olympiads.tsx
│   │   ├── research/                 # Research sections
│   │   │   └── research-section.tsx  # Publications display
│   │   ├── community/                # Community sections
│   │   │   ├── community-section.tsx
│   │   │   └── community-content.tsx
│   │   └── media/                    # Media sections
│   │       └── article-detail.tsx    # Media article detail view
│   ├── features/                     # Feature components
│   │   └── animated-databek.tsx      # Animated branding element
│   └── ui/                           # shadcn/ui components
│       ├── accordion.tsx
│       ├── alert.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       ├── tabs.tsx
│       ├── tooltip.tsx
│       └── ... (30+ reusable UI components)
│
├── hooks/                            # Custom React hooks
│   ├── use-mobile.tsx                # Mobile breakpoint detection
│   └── use-toast.ts                  # Toast notification management
│
├── lib/                              # Utility functions
│   └── utils.ts                      # Helper functions (cn, etc.)
│
├── locals/                           # Internationalization data
│   └── en/                           # English locale
│       ├── careers/                  # Career data
│       │   └── index.json            # Experience entries
│       ├── competitions/             # Competition data
│       │   ├── ml.json               # ML competitions
│       │   └── math.json             # Math olympiads
│       ├── home/                     # Home page data
│       │   ├── hero.json             # Hero section data
│       │   ├── expertise.json        # Skills and expertise
│       │   └── community.json        # Community data
│       ├── media/                    # Media articles data
│       │   ├── index.json
│       │   ├── zerttey.json
│       │   ├── kazpravda.json
│       │   ├── limon.json
│       │   ├── cdmo.json
│       │   └── steppe.json
│       ├── research/                 # Research publications
│       │   └── index.json            # Publications list
│       ├── talks/                    # Talks data
│       │   └── index.json            # Conference talks
│       └── navigation.json           # Navigation menu data
│
├── public/                           # Static assets
│   ├── favicon.ico                   # Browser favicon
│   ├── icon.svg                      # Logo icon
│   └── placeholder.svg               # Placeholder images
│
├── styles/                           # Additional styles
│   └── globals.css                   # Legacy global styles
│
├── next.config.mjs                   # Next.js configuration
├── tailwind.config.ts                # Tailwind CSS configuration
├── tsconfig.json                     # TypeScript configuration
├── postcss.config.mjs                # PostCSS configuration
├── components.json                   # shadcn/ui configuration
└── package.json                      # Dependencies and scripts
\`\`\`

## Service Architecture

### Frontend Architecture

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                    Vercel Edge Network                   │
│                  (CDN + Edge Functions)                  │
└─────────────────┬───────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────┐
│                Next.js 14 App Router                     │
│  ┌───────────────────────────────────────────────────┐  │
│  │  Server Components (RSC)                          │  │
│  │  - Pre-rendered at build time                     │  │
│  │  - Dynamic data fetching                          │  │
│  │  - SEO optimized                                  │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │  Client Components                                │  │
│  │  - Interactive UI elements                        │  │
│  │  - Framer Motion animations                       │  │
│  │  - State management (React hooks)                 │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────┬───────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────┐
│              Component Architecture                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  │
│  │   Layout     │  │   Sections   │  │   Features   │  │
│  │  Components  │  │  Components  │  │  Components  │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  │
│  ┌──────────────────────────────────────────────────┐  │
│  │         shadcn/ui Component Library               │  │
│  │         (Radix UI + Tailwind CSS)                 │  │
│  └──────────────────────────────────────────────────┘  │
└─────────────────┬───────────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────────┐
│                   Data Layer                             │
│  ┌─────────────────────┐  ┌─────────────────────────┐  │
│  │  Static JSON Files  │  │   Supabase Storage      │  │
│  │  (locals/*.json)    │  │   (CV/Resume files)     │  │
│  └─────────────────────┘  └─────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
\`\`\`

### Data Flow

\`\`\`
User Request
     │
     ▼
┌─────────────────┐
│  Vercel Edge    │ ──► Static Assets (CDN)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Next.js SSR    │ ──► Server Components (Pre-rendered)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Data Fetching  │
└────────┬────────┘
         │
         ├──► JSON Files (Static Data)
         │
         └──► Supabase Storage (Files)
                │
                └──► CV/Resume PDFs
\`\`\`

### Key Architectural Decisions

1. **Static-First Approach**: Most content is served as pre-rendered static pages for optimal performance
2. **Component-Based Design**: Modular, reusable components following React best practices
3. **Type Safety**: Full TypeScript coverage for better developer experience
4. **Responsive Design**: Mobile-first approach using Tailwind's responsive utilities
5. **Optimized Images**: Next.js Image component for automatic optimization
6. **SEO Optimized**: Server-side rendering with proper meta tags and Open Graph data
7. **Incremental Enhancement**: Progressive enhancement with client-side interactivity

## Features

### Core Features
- **Responsive Design**: Fully responsive across all devices
- **Dark Mode**: Dark theme optimized for readability
- **Smooth Animations**: Framer Motion powered transitions
- **Fast Loading**: Optimized bundle size and lazy loading
- **SEO Optimized**: Proper meta tags, Open Graph, and structured data
- **Type Safety**: Full TypeScript implementation

### Pages & Sections

#### Home Page
- Hero section with animated name display
- Statistics showcase (Kaggle rank, publications, etc.)
- Featured work highlights
- Community engagement preview

#### Careers
- Complete professional experience timeline
- Expandable job descriptions
- Skills and achievements
- CV download links (1-page and 2-page versions)
- Search and filter functionality

#### Research
- Academic publications
- Research papers
- Citations and links
- Collaboration information

#### Competitions
- Kaggle ML competitions (10+ medals)
- Mathematics olympiads
- Achievement details and rankings

#### Media
- Press coverage and articles
- Interviews and features
- Dynamic article pages

#### Talks
- Conference presentations
- Workshop recordings
- Speaking engagements

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- pnpm (recommended) or npm
- Git

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/personal-website.git
cd personal-website
\`\`\`

2. Install dependencies:
\`\`\`bash
pnpm install
\`\`\`

3. Set up environment variables:
\`\`\`bash
cp .env.example .env.local
\`\`\`

Add your Supabase credentials:
\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
\`\`\`

4. Run the development server:
\`\`\`bash
pnpm dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

### Project Commands

\`\`\`bash
# Development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint

# Type check
pnpm type-check
\`\`\`

### Adding New Content

#### Adding Career Experience
Edit `locals/en/careers/index.json`:
\`\`\`json
{
  "id": "unique-id",
  "title": "Job Title",
  "company": "Company Name",
  "location": "City, Country",
  "duration": "Jan 2023 - Present",
  "description": "Role description",
  "achievements": ["Achievement 1", "Achievement 2"]
}
\`\`\`

#### Adding Publications
Edit `locals/en/research/index.json`:
\`\`\`json
{
  "id": "unique-id",
  "title": "Paper Title",
  "authors": ["Author 1", "Author 2"],
  "venue": "Conference/Journal Name",
  "year": 2024,
  "url": "https://doi.org/..."
}
\`\`\`

#### Adding Media Articles
1. Create JSON file in `locals/en/media/[article-name].json`
2. Add article data structure
3. Create page route in `app/media/[article-name]/page.tsx`

### Code Style

- Use TypeScript for all new files
- Follow ESLint configuration
- Use Tailwind CSS for styling
- Prefer Server Components over Client Components
- Use `cn()` utility for conditional classes
- Follow shadcn/ui patterns for new components

## Deployment

### Vercel Deployment (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

\`\`\`bash
# Build the project
pnpm build

# The output will be in .next/ directory
# Deploy this directory to your hosting platform
\`\`\`

### Environment Configuration

Set these environment variables in your deployment platform:

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY`: Supabase service role key (keep secret)

## Environment Variables

### Required

\`\`\`env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
\`\`\`

### Optional

\`\`\`env
# Analytics (if integrated)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Feature Flags
NEXT_PUBLIC_ENABLE_BLOG=false
\`\`\`

## Performance

- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.0s
- **Cumulative Layout Shift**: < 0.1

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Contributing

This is a personal portfolio project, but suggestions and bug reports are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - feel free to use this project as a template for your own portfolio.

## Contact

- **Website**: [anuar.best](https://anuar.best)
- **Kaggle**: [@sneddy](https://www.kaggle.com/sneddy)
- **LinkedIn**: [Anuar Aimoldin](https://linkedin.com/in/anuar-aimoldin)
- **Email**: contact@anuar.best

---

Built with ❤️ using Next.js and Vercel
