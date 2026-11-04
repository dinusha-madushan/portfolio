# Dinusha Madushan — Portfolio

A Next.js portfolio configured for static hosting on GitHub Pages.

## GitHub Pages setup

1. Create a **public** repository named `portfolio` under `dinusha-madushan`.
2. Upload the contents of this project to the repository root (do not upload the enclosing folder).
3. Commit the files to the `main` branch.
4. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
5. Open the **Actions** tab and wait for **Deploy portfolio to GitHub Pages** to finish successfully.

The website address will be:

https://dinusha-madushan.github.io/portfolio/

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000/portfolio/ in your browser.

## Build locally

```bash
npm ci
npm run build
```

The static website is generated in the `out/` directory.
