---
name: verify-build
description: Validate the production build compiles cleanly before pushing to Netlify. Use before any push to main.
disable-model-invocation: true
---

Run the production build to confirm no compile errors before pushing to Netlify:

```
npm run build
```

If the build succeeds, report the output size summary from Vite and confirm it's safe to push.

If the build fails, show the error output and identify which file/import is broken.

After a successful build, also run:
```
npm run lint
```

Report any lint warnings or errors. The project deploys to Netlify on push to `main` — a broken build will fail the deploy.
