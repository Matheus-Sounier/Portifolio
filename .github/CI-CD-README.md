CI / CD setup for this repository

Overview

- CI: GitHub Actions workflow `.github/workflows/ci.yml` runs on `push` and `pull_request` to `dev` and `main`. It installs dependencies and runs `npm test`.
- CD (optional): `.github/workflows/deploy-vercel.yml` triggers after the CI workflow completes successfully and will call the Vercel action to deploy the `main` branch to production.

Required repository secrets (for CD)

- `VERCEL_TOKEN` — a personal token from Vercel (Settings → Tokens).
- `VERCEL_ORG_ID` — your Vercel organization ID.
- `VERCEL_PROJECT_ID` — your Vercel project ID.

How it works

- Recommended: keep Vercel's Git integration enabled (it will also create deployments automatically). The deploy workflow is optional and can be used if you want GitHub Actions to trigger Vercel deploys and control deploy args.
- Protect `main` and/or `dev` branches in GitHub (Settings → Branches) and require the `CI` check to pass before merging.

Notes

- The deploy workflow uses `amondnet/vercel-action`. If you prefer the official Vercel action or a different approach, update `.github/workflows/deploy-vercel.yml` accordingly.
- CI artifacts: test reports/coverage are uploaded as artifacts (optional).
