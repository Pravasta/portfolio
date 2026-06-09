---
name: add-section
description: Add a new section to the portfolio, following the src/features/ structure pattern. Use when the user wants to add a new page section (e.g., testimonials, blog, certifications).
---

The user wants to add a new portfolio section. Follow these steps:

1. **Clarify** what the section is called and what content it should show (if $ARGUMENTS doesn't say).

2. **Create the feature folder** at `src/features/<section-name>/`:
   - Main component: `src/features/<section-name>/<SectionName>.tsx`
   - Sub-components if needed: `src/features/<section-name>/components/`
   - Use `@/` path aliases, never relative cross-directory imports

3. **Component structure**:
   - Use shadcn/ui primitives from `src/components/ui/` for UI elements
   - Use Tailwind utility classes; use CSS variables (`bg-background`, `text-foreground`, etc.) not raw colors
   - Add Framer Motion animations matching the existing pattern (`fade-in`, `slide-in-left/right`, `scale-in`)
   - Support dark mode — test both `dark:` and light variants

4. **Wire it up**:
   - Import and add the section to `src/pages/Index.tsx` at the appropriate position
   - If the section needs a nav link, add it to the Navbar component in `src/components/Navbar/`

5. **Validate**:
   - Run `npm run lint` to check for ESLint issues
   - Run `npm run build` to confirm the production build passes
