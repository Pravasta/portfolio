# Project images

Each project has its own folder named after its `slug` (see
`src/features/projects/projects.data.ts`).

```
public/projects/<slug>/
  cover.svg      # card thumbnail + detail hero
  doc-01.svg     # documentation screenshots (detail gallery)
  doc-02.svg
  ...
```

## How to use your own images

1. Drop your files into the matching `public/projects/<slug>/` folder.
2. Keep the same filenames (`cover.svg`, `doc-01.svg`, ...) to avoid editing
   code — **or** use different names/formats (`.png`, `.jpg`, `.webp`) and
   update the `cover` / `gallery` paths in `projects.data.ts`.
3. Paths are served from the site root, e.g. `/projects/invoice-saas/cover.png`.

The current `.svg` files are placeholders. If an image path is missing or fails
to load, the UI falls back to a gradient + emoji automatically
(`src/features/projects/ProjectImage.tsx`), so nothing breaks while you swap
images in.

Recommended sizes: cover ~1200×750, documentation ~1200×800 (any consistent
aspect ratio works — images are cropped with `object-cover`).
