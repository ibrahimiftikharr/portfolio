# Ibrahim Iftikhar — Portfolio

Next.js (App Router) portfolio dashboard matching the provided Figma desktop/mobile layouts, populated with real project assets from `ASSETS/`.

## Stack

- Next.js 16 + React 19
- Tailwind CSS v4
- TypeScript
- `lucide-react` icons

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Push this repo to GitHub/GitLab/Bitbucket (or import the folder in Vercel).
2. In Vercel: **Add New Project** → import the repo.
3. Framework preset: **Next.js** (auto-detected).
4. Root directory: project root (where `package.json` lives).
5. Build command: `npm run build` · Output: Next.js default.
6. Deploy.

No environment variables are required.

## Structure

- `src/app` — routes (About, Portfolio + case studies, Recommendations, Awards, Experience)
- `src/components` — sidebar, mobile nav, case-study blocks
- `src/data/content.ts` — copy and asset paths
- `public/images` — optimized copies of project/award/letter assets
- `public/docs` — CV and recommendation/award PDFs
- `ASSETS/` — original source materials
- `screens/` — Figma screen references

## Notes

- About Me hero portrait uses the design reference image (`public/images/profile.jpg`).
- All other imagery and credentials come from supplied assets / CV — metrics are labeled as measured where shown.
