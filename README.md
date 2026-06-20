# mehrshadb

Personal website for Mehrshad Baqerzadegan — full-stack software engineer portfolio and resume.

Live site: [mehrshadb.ir](https://mehrshadb.ir)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

Resume content lives in `src/lib/site-data.ts`. The PDF is served from `public/resume.pdf`.

To update the resume file, replace `public/resume.pdf` with your latest version.

Add your headshot as `public/photo.jpg` (square works best, roughly 400×400 px).

## Deploy to GitHub Pages

Repo: [github.com/ducksonmoon/mehrshadb](https://github.com/ducksonmoon/mehrshadb)

Custom domain: **mehrshadb.ir**

### One-time GitHub setup

1. Push this repo to `main`.
2. Go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Under **Custom domain**, enter `mehrshadb.ir` and save.
4. Enable **Enforce HTTPS** once the certificate is ready.

### DNS setup (at your domain registrar)

Add these records for `mehrshadb.ir`:

| Type | Name | Value |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `ducksonmoon.github.io` |

DNS can take up to 24 hours to propagate. GitHub will show a green check when it is configured correctly.

### How deployment works

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds a static export and publishes it to GitHub Pages.

To test a production build locally:

```bash
npm run build
npx serve out
```
