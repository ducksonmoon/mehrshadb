# mehrshadb

Personal website for Mehrshad Baqerzadegan — full-stack software engineer portfolio and resume.

Live site: [ducksonmoon.github.io/mehrshadb](https://ducksonmoon.github.io/mehrshadb)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

Resume content lives in `src/lib/site-data.ts`. The PDF is served from `public/resume.pdf`.

To update the resume file, replace `public/resume.pdf` with your latest version.

Add your headshot as `public/photo.jpg` (square works best, roughly 400×400 px). Until then, the site shows your initials as a placeholder.

## Deploy to GitHub Pages

The site is a static export configured for the `ducksonmoon/mehrshadb` repo.

1. Push to `main` — the GitHub Actions workflow builds and deploys automatically.
2. In the repo on GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

The site will be published at `https://ducksonmoon.github.io/mehrshadb`.

To test a production build locally (uses `/mehrshadb` base path automatically):

```bash
npm run build
npx serve out
```
