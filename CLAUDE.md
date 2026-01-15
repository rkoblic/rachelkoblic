# Rachel Koblic Personal Site

Personal website built with Astro, featuring a thinking section (essays/notes) and a lab (experiments/prototypes).

## Quick Start

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production
```

## Project Structure

```
src/
├── content/
│   ├── config.ts          # Content collection schemas
│   ├── thinking/          # Essays and notes (.md)
│   └── lab/               # Lab projects (.mdx)
├── components/
│   ├── Card.astro         # Reusable card component (flex layout, equal heights)
│   ├── Header.astro       # Site navigation
│   └── Footer.astro       # Site footer
├── layouts/
│   └── Base.astro         # Base HTML layout with meta tags
├── pages/
│   ├── index.astro        # Homepage
│   ├── about.astro        # About page
│   ├── work.astro         # Work/portfolio page (TODO)
│   ├── thinking/          # Thinking section
│   │   ├── index.astro    # Listing page
│   │   └── [...slug].astro # Individual post
│   └── lab/               # Lab section
│       ├── index.astro    # Listing page
│       └── [...slug].astro # Individual project
└── styles/
    └── global.css         # Global styles, CSS variables, term tooltips
public/
└── images/                # Static images
    ├── lab/               # Lab project images
    └── hero-illustration.png
```

## Content Collections

### Thinking (`src/content/thinking/*.md`)

```yaml
---
title: "Post Title"
description: "Short description"
type: "essay" | "note" | "talk"
topics: ["topic1", "topic2"]
publishedAt: 2026-01-14
updatedAt: 2026-01-14
status: "draft" | "growing" | "evergreen"
---
```

### Lab (`src/content/lab/*.mdx`)

```yaml
---
title: "Project Title"
description: "Short description"
status: "active" | "archived" | "experiment"
embedType: "react" | "iframe" | "link"
embedUrl: "https://..."
image: "/images/lab/project-name.png"  # Optional hero/thumbnail
date: 2026-01-14
topics: ["topic1", "topic2"]
---
```

## Design System

### Colors (defined in `global.css`)

- **Backgrounds**: `--color-bg-main` (#FFFDFB), `--color-bg-page` (#FAF8F5), `--color-bg-card` (#F7F3EE)
- **Text**: `--color-text-primary` (#2C2825), `--color-text-secondary` (#5A524A), `--color-text-tertiary` (#8B7E71), `--color-text-muted` (#A89F94)
- **Accent**: `--color-accent` (#0D9488) - Teal, used for links, buttons, highlights
- **Borders**: `--color-border` (#EBE6E0), light dividers use #F0EAE3

### Typography

- **Headings**: Cormorant Garamond (serif)
- **Body**: Inter (sans-serif)
- **Code**: JetBrains Mono (monospace)

### Styling Approach

- Tailwind CSS v4 via Vite plugin
- CSS variables defined in `@theme` block in `global.css`
- Arbitrary values in Tailwind classes reference CSS vars: `text-[--color-text-primary]`
- For accent color, hardcode hex values in classes for reliability: `bg-[#0D9488]`

## Design Patterns

### Term Tooltips

For key terms that need definition (like "logic layer"), use the `.term-tooltip` class:

```html
<span class="term-tooltip" data-tooltip="Definition text here.">term</span>
```

Displays: dotted underline, help cursor, tooltip on hover. Defined in `global.css`.

### Section Dividers

Use light borders for section separation—pauses, not walls:

```html
border-t border-[#F0EAE3]
```

Apply consistently to all horizontal rules across pages (sections, footers, etc.).

### "View all" Links

Subtle, invitational style—not CTAs:

```html
<a href="/thinking" class="text-xs tracking-wide text-[--color-text-tertiary] no-underline transition-colors hover:text-[#0D9488]">
  View all &rarr;
</a>
```

### Cards

Cards use flex layout for consistent alignment across grid:
- `flex flex-col h-full` on card container
- Fixed-height meta label area so titles align
- `flex-grow` on descriptions to push variance to bottom

### Inset/Aside Boxes

For callout content (like "How I Work"):

```css
.how-i-work {
  padding: 28px 32px;
  background: #FAF8F5;
  border-left: 3px solid #0D9488;
  border-radius: 0 8px 8px 0;
}
```

## Voice & Tone Guidelines

- **Plainspoken, not jargon-heavy**: Ground abstract terms in lived meaning
- **Invitational, not promotional**: "View all →" not "See More!"
- **Editorial, not dashboard**: Filters are "lenses" (use "View by:" not "Filter:")
- **Organic and continuous**: Dividers are pauses, not walls
- **Thinking made tangible**: Lab projects feel exploratory, not finalized

### Key Terms

When introducing conceptual terms, follow this pattern:
1. **Name the concept**
2. **Translate it into function**
3. **Anchor it in consequence**

Example: "logic layer" → tooltip: "The structures that make learning legible to intelligent systems."

## Key Conventions

1. **Lab images**: Store in `/public/images/lab/`, reference as `/images/lab/filename.png`
2. **Homepage sections**: Pull dynamically from collections (3 recent thinking, 2 recent lab)
3. **Prose styles**: Defined locally in `[...slug].astro` files for thinking and lab
4. **Links**: Use teal accent color (#0D9488) for interactive elements
5. **Dividers**: Use #F0EAE3 for all horizontal rules (lighter than default border)
6. **Border radius**: Use `rounded-lg` for cards/boxes, keeps things soft

## Adding Content

### New thinking post
Create `src/content/thinking/post-slug.md` with frontmatter above.

### New lab project
Create `src/content/lab/project-slug.mdx` with frontmatter above. Add image to `/public/images/lab/` if needed.

## Pages Status

- **Homepage**: Complete
- **About**: Complete
- **Thinking**: Complete (listing + detail pages)
- **Lab**: Complete (listing + detail pages)
- **Work**: TODO - portfolio/case studies page
