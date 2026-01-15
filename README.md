# Rachel Koblic

Personal website for sharing ideas about AI-era learning, systems design, and creativity.

## Sections

- **Thinking** — Essays, notes, and talks exploring ideas in progress
- **Lab** — Interactive demos, prototypes, and experiments
- **Work** — Professional background and projects
- **About** — Bio and contact

## Development

```bash
npm install      # Install dependencies
npm run dev      # Start dev server at localhost:4321
npm run build    # Build for production
npm run preview  # Preview production build
```

## Stack

- [Astro](https://astro.build) — Static site framework
- [Tailwind CSS v4](https://tailwindcss.com) — Styling
- [MDX](https://mdxjs.com) — Content with components

## Adding Content

**New thinking post:**
```bash
# Create src/content/thinking/your-post-slug.md
```

**New lab project:**
```bash
# Create src/content/lab/your-project-slug.mdx
# Add image to public/images/lab/ (optional)
```

See `CLAUDE.md` for detailed documentation on content schemas and conventions.
