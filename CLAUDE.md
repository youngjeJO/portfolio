# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — TypeScript compile (`tsc`) + production build to `dist/`
- `npm run preview` — preview the production build
- `npm run lint` — ESLint over `ts,tsx` with `--max-warnings 0` (warnings fail the script)

There is no test runner configured.

## Deployment

Pushes to `main` or `master` trigger `.github/workflows/deploy.yml`, which runs `npm ci && npm run build`, then publishes `dist/` to GitHub Pages. The workflow also touches `dist/.nojekyll` and copies `index.html` to `dist/404.html` so client-side routes resolve on Pages.

The site is hosted under a subpath, which has two consequences that must stay in sync:
- `vite.config.ts` sets `base: '/portfolio/'`
- `src/App.tsx` sets `<Router basename="/portfolio">`

If the repo or Pages URL ever changes, both must be updated together.

The `predeploy`/`deploy` scripts in `package.json` use `gh-pages -d build`, but the actual build output dir is `dist`, so manual `npm run deploy` will not work as written — use the GitHub Actions workflow instead.

## Architecture

React 18 + TypeScript + Vite SPA, styled with `styled-components` and a typed theme. Two routes only:

- `/` → `pages/Home.tsx` — single-page composition of `Hero`, `About`, `Skills`, `Projects`, `Contact` sections. Hash links (e.g. `#about`) are scrolled into view by a `useEffect` that watches `useLocation().hash`.
- `/project/:id` → `pages/ProjectDetail.tsx` — looks up `projectsDetail[id]` from `src/data/projects.ts`.

### Content vs. data separation

- `src/content/` — UI copy (Korean strings, labels, navigation items, skills taxonomy). Re-exported via `src/content/index.ts`. Edit here to change visible text.
- `src/data/projects.ts` — structured project records (`projectsDetail` keyed by route id, plus shared types `ProjectDetail`, `ProjectSummary`, `TechStackCategory`, `Task`, `Challenge`). Adding a project means adding both an entry here and ensuring the id is linked from the Projects section.

### Theming

`src/styles/theme.ts` exports a frozen `theme` object (colors, fonts, fontSizes, spacing, breakpoints). `src/types/styled.d.ts` augments `styled-components`' `DefaultTheme` with the inferred `Theme` type, so `${({ theme }) => theme.spacing.md}` is fully typed in any styled component. Add new design tokens to `theme.ts` rather than hardcoding values.

`src/styles/GlobalStyle.ts` is mounted once in `src/main.tsx` alongside `ThemeProvider`.

### Path alias

`tsconfig.json` defines `@/*` → `src/*`. Note: this alias is not mirrored in `vite.config.ts`, so `@/` imports will type-check but fail at bundle time. Use relative imports until the Vite alias is added.

## 디자인 참고
- 컬러: #0094ff, #444950
- 그림자 제거, border-redius: 10px
