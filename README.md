# Christian A. Espiridion — Portfolio

Single-page portfolio built with **React (Vite)**, **Tailwind CSS v4**, and **GSAP + ScrollTrigger**.

## Run it

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build in dist/
npm run preview  # preview the production build
```

## Deploying

- **Vercel / Netlify** — zero config: import the repo, framework preset "Vite", build command `npm run build`, output `dist`.
- **GitHub Pages** — set the repo path as the base first, in `vite.config.js`:
  ```js
  export default defineConfig({
    base: "/<your-repo-name>/",
    plugins: [react(), tailwindcss()],
  });
  ```
  then publish `dist/` (e.g. with the `gh-pages` package or a Pages GitHub Action).

## Swapping in real project screenshots

Project cards use designed gradient placeholders until you add images:

1. Drop your screenshots into `public/projects/` (e.g. `public/projects/lah-lah.webp`).
2. In [src/data/content.js](src/data/content.js), set the project's `image` field:
   ```js
   image: "/projects/lah-lah.webp",
   ```
3. Done — the card lazy-loads the image and drops the gradient automatically.

## Where things live

- **All site copy/content** — `src/data/content.js` (projects, services, skills, experience, education, contact info)
- **Theme palettes** — `src/index.css` (`:root` = light, `.dark` = dark; both map to Tailwind tokens like `bg-surface`, `text-ink`, `text-accent`)
- **Components** — `src/components/` (Navbar, ThemeToggle, Hero, Marquee, About, Portfolio, Services, Skills, Experience, Education, Contact, Footer)
- **Animation helpers** — `src/hooks/useGsap.js` (scoped, StrictMode-safe, respects `prefers-reduced-motion`)
- **Dark mode** — class strategy; defaults to system preference, persists explicit choice in `localStorage`
