# Harshal Wankhede — Portfolio

React 18 + Vite, animated with GSAP (ScrollTrigger) and Lenis smooth scrolling.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build for hosting

```bash
npm run build      # creates the dist/ folder
npm run preview    # test the production build locally
```

Upload the contents of `dist/` to any static host. The build uses relative paths, so it works in a sub-folder too.

- **Netlify / Cloudflare Pages / Vercel:** import the repo, build command `npm run build`, output folder `dist`.
- **GitHub Pages:** push `dist/` to a `gh-pages` branch, or use a GitHub Action that builds and publishes it.

## Edit your content

- Text, projects, skills, certifications, links: `src/data/portfolio.js`
- Photos: replace `src/assets/profile.jpg` and `src/assets/sunset.jpg`
- Colours, fonts, spacing: `src/index.css` (design tokens are at the top, in `:root`)
- Page sections: `src/components/`
- Animations: `src/hooks/useAnimations.js`

## Structure

```
index.html
vite.config.js
package.json
public/favicon.svg
src/
  main.jsx
  App.jsx
  index.css
  assets/        profile.jpg, sunset.jpg
  data/          portfolio.js
  hooks/         useAnimations.js
  components/    Nav, Hero, Pipeline, Marquee, About, Work,
                 Projects, Skills, Certifications, Contact, ui
```
