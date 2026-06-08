# RIU Frontend Challenge

## Design Reference

Figma: [Challenge-RIU](https://www.figma.com/design/oXuQAestvw8eMPnUixWZiq/Challenge-RIU?node-id=9-637&t=6xmNIChbD3PRG8bL-1)

## Overview

A pixel-perfect responsive layout built in Angular 18 using standalone components and Tailwind CSS v4. It implements a news/media page with three sections: a featured article hero, a paginated article grid, and a mixed-layout image gallery.

## Tech Stack

- **Angular 18** — standalone components, no routing
- **Tailwind CSS v4** — utility-first styling via `@tailwindcss/postcss`
- **Google Fonts** — Inter (UI/body) + Figtree (image placeholder label)

## Architecture — Atomic Design

The project is structured in four levels of component composition:

| Level | Description |
|---|---|
| **Atoms** | Smallest reusable units with a single visual responsibility |
| **Molecules** | Compositions of 2–3 atoms that form a self-contained UI pattern |
| **Organisms** | Full page sections composed of molecules and atoms |
| **Pages** | Single page component that assembles the three organisms |

```
src/app/
├── app.component.html
├── app.component.ts
├── app.config.ts
├── core/
│   └── tokens/
│       └── design-tokens.css
├── pages/
│   └── home/
│       ├── home.component.html
│       └── home.component.ts
└── shared/
    └── components/
        ├── atoms/
        │   ├── app-button/           # Primary CTA button
        │   ├── badge-date/           # Calendar icon + date label
        │   ├── icon-download/        # Download SVG icon
        │   ├── image-placeholder/    # Grey block with "IMAGE" label
        │   └── search-input/         # Search field with magnifier icon
        ├── molecules/
        │   ├── article-card/         # Image + date badge + title + body
        │   ├── gallery-card/         # Full-bleed image with gradient overlay
        │   └── section-header/       # Title + description + search input
        └── organisms/
            ├── article-grid/         # Responsive grid of article cards
            ├── featured-article/     # Hero card with image and CTA
            └── gallery-section/      # Mixed-layout gallery with 4 cards
```

## Design Tokens

All design values live in `src/app/core/tokens/design-tokens.css` as CSS custom properties on `:root`. Components reference them via Tailwind arbitrary values (e.g. `text-[var(--color-primary)]`).

| Group | Tokens |
|---|---|
| **Colors** | `--color-primary`, `--color-surface`, `--color-background`, `--color-text-primary`, `--color-text-dark`, `--color-text-icon`, `--color-image-bg`, `--color-image-label` |
| **Typography** | `--font-body` (Inter), `--font-display` (Figtree) |
| **Font sizes** | `--text-sm` → `--text-4xl` (14px – 48px) |
| **Spacing** | `--space-1` → `--space-8` (4px – 96px) |
| **Shadows** | `--shadow-card` |
| **Radius** | `--radius-sm` (8px) |

## Responsive Breakpoints

| Breakpoint | Min-width | Layout |
|---|---|---|
| Mobile (default) | — | Single column; carousel for gallery; stacked featured card |
| Tablet (`md:`) | 768px | 2-column article grid; gallery cards in flex row; larger headings |
| Desktop (`lg:`) | 1024px | 3-column article grid; 4-column equal-width gallery; side-by-side featured card |

## CSS Exceptions

Three component CSS files are kept alongside Tailwind classes where a utility equivalent does not exist or causes tooling issues:

| File | Reason |
|---|---|
| `search-input.component.css` | `::placeholder` — Tailwind v4's `placeholder:` variant generates a PostCSS parse warning in this setup |
| `gallery-card.component.css` | Conditional heights driven by `@Input() small` at `md` and `lg` breakpoints; cannot be expressed as static Tailwind classes |
| `gallery-section.component.css` | `scrollbar-width: none` + `::-webkit-scrollbar { display: none }` — no Tailwind utility for hiding the scrollbar track |

## Getting Started

```bash
npm install
ng serve
```

Navigate to `http://localhost:4200`.

## Build

```bash
ng build
```

Output: `dist/riu-front-end` — 0 errors, 0 warnings.
