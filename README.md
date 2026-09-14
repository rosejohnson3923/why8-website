# why8-website — WHY8 Foundation, why8.org

Static HTML/CSS/JS, cut from the `esposure4all-website` mould. Deploys to Netlify from this repository (`publish = "/"`, no build). Security headers and the CSP live in `netlify.toml`, together with the 301s from the Netlify default host, `www`, and the seven redirect-only domains (`why8.global`, `why8foundation.{org,global,com,net,store,info}`) to `https://why8.org`.

## What is on the site today
A **holding page**: the WHY8 Foundation lockup, the name, one sentence, and `info@why8.org`. Nothing else, on purpose — the foundation's mission, programs and legal status arrive with the entity and its determination letter. Until then the site must not print `501(c)(3)`, "tax-deductible", or "nonprofit" as a status; `npm run check:claims` fails the build locally if any of those words appear in the pages.

## Brand
Black and white, with the shared Pathfinity purple as the only accent (founder, 2026-09-14). The site vendors two files from the public tokens repository — never a package dependency (a `github:` dependency breaks Netlify builds silently):

```
npm run sync:tokens   # copies ../esposure-brand-tokens/css/brand-tokens.css and css/brands/why8.css into assets/css/
```

`assets/css/why8.css` maps the mould's `--accent-red` / `--gradient-*` names onto the purple ladder and neutrals, so `styles.css` (the mould's stylesheet) needs no fork. Logo files: `assets/images/why8-lockup-{white,black}.svg` (the WHY8 FOUNDATION lockup) and `why8-avatar-1024-black.png` (favicon / Open Graph).

## Local
```
npm run dev      # http://localhost:3004
```

## Working record
The build and every founder ruling are recorded in the Pathfinity working repository: `docs/Company-Build/cto/WHY8_WORKSPACE_SETUP.md` (the organisation) and the session context.
