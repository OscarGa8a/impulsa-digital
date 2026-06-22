# Impulsa Digital

Astro + Tailwind CSS marketing site. This project uses **pnpm** as its package
manager.

## Project Structure

```text
/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   │   └── en/
│   └── styles/
├── tests/
│   └── e2e/
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
└── pnpm-workspace.yaml
```

## Commands

All commands are run from the root of the project.

| Command                | Action                                  |
| :--------------------- | :-------------------------------------- |
| `pnpm install`         | Installs dependencies                   |
| `pnpm dev`             | Starts the local dev server             |
| `pnpm build`           | Builds the production site to `./dist/` |
| `pnpm preview`         | Previews the production build locally   |
| `pnpm test -- --run`   | Runs unit/content tests once            |
| `pnpm test:e2e`        | Runs Playwright E2E tests               |
| `pnpm astro ...`       | Runs Astro CLI commands                 |
| `pnpm astro -- --help` | Shows Astro CLI help                    |
