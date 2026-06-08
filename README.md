# RIU Front End Challenge

A pixel-perfect frontend layout challenge built with Angular 18 standalone components and Tailwind CSS v4. The project implements a responsive news/media page with three main sections: a featured article, an article grid, and a gallery.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Angular | 18 | Framework (standalone components) |
| Tailwind CSS | v4 | Utility-first CSS (via `@tailwindcss/postcss`) |
| TypeScript | 5.x | Language |
| Google Fonts | — | Inter (body) + Figtree (display) |

---

## Architecture

The project follows an **Atomic Design** structure:

```
src/app/
  core/
    tokens/
      design-tokens.css       # CSS custom properties (colors, spacing, typography)
  shared/
    components/
      atoms/                  # Smallest reusable units
        badge-date/           # Calendar icon + date label
        app-button/           # Primary CTA button
        search-input/         # Search field with magnifier icon
        image-placeholder/    # Grey placeholder with "IMAGE" label
      molecules/              # Composed of atoms
        article-card/         # Image + date badge + title + body
        gallery-card/         # Image with gradient overlay + download link
        section-header/       # Title + description + search input
      organisms/              # Composed of molecules
        featured-article/     # Hero card with image and CTA
        article-grid/         # 3-column responsive grid of article cards
        gallery-section/      # Mixed-layout gallery with 4 cards
  pages/
    home/
      home.component.ts       # Assembles all three organisms
  app.component.ts            # Root component — renders HomeComponent
```

---

## Design Tokens

All design decisions are encoded as CSS custom properties in `src/app/core/tokens/design-tokens.css`.

| Token | Value | Usage |
|---|---|---|
| `--color-primary` | `#E4002B` | Button background, accent |
| `--color-surface` | `#FFFFFF` | Card backgrounds |
| `--color-background` | `#F4F4F5` | Page / section background |
| `--color-text-primary` | `#343A40` | Body text |
| `--color-text-dark` | `#000000` | Headings |
| `--font-body` | Inter | All body text and headings |
| `--font-display` | Figtree | Image placeholder label |
| `--radius-sm` | `8px` | Card / input border radius |
| `--shadow-card` | `0px 2px 4px rgba(0,0,0,0.2)` | Featured card shadow |
| `--container-max` | `1542px` | Max-width for page containers |

---

## Responsive Breakpoints

| Breakpoint | Min-width | Layout changes |
|---|---|---|
| Mobile (default) | — | Single column, stacked layout |
| Tablet (`md`) | `768px` | 2-column article grid; flex row for gallery; larger headings |
| Desktop (`lg`) | `1024px` | 3-column article grid; 4-column gallery; side-by-side featured card |

---

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Install

```bash
npm install
```

### Development server

```bash
npx ng serve
```

Navigate to `http://localhost:4200/`. The application reloads automatically on file changes.

### Build

```bash
npx ng build
```

Production artifacts are output to `dist/riu-front-end/`.

---

## Project Structure

```
/
  angular.json              # Angular workspace configuration
  tailwind.config.js        # Tailwind content paths and custom screens
  .postcssrc.json           # PostCSS config — enables @tailwindcss/postcss
  tsconfig.json             # TypeScript base config
  src/
    index.html              # HTML shell
    main.ts                 # Application bootstrap
    styles.css              # Global styles (Tailwind import + design tokens)
    app/
      app.component.ts      # Root component
      app.config.ts         # Application providers
      core/                 # App-wide singletons and tokens
      shared/               # Reusable UI components (atoms → molecules → organisms)
      pages/                # Route-level page components
```
