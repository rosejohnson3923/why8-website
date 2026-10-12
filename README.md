# why8-website — WHY8 Foundation, why8.org

Static HTML/CSS/JS, cut from the `esposure4all-website` mould. Deploys to Netlify from this repository (`publish = "/"`, no build). Security headers and the CSP live in `netlify.toml`, together with the 301s from the Netlify default host, `www`, and the seven redirect-only domains (`why8.global`, `why8foundation.{org,global,com,net,store,info}`) to `https://why8.org`.

## What is on the site today
A **holding page**: the WHY8 Foundation lockup, the name, the one-liner, the purpose paragraph ("Our Purpose") and `info@why8.org`. Both texts are the register claim `why8.purpose.charter` (esposure-ops migration 256, 2026-09-14), cut verbatim from the founders' purpose clause. Nothing else, on purpose — programs, partners, numbers and legal status arrive as claims with the entity and its determination letter. Since the IRS determination letter (ops 302, 2026-10-12) the site prints the status line (claim `why8.irs.501c3-determination`) and nothing about gifts or deductibility — that outward use is a founder ruling; `npm run check:claims` fails locally on "tax-deductible", "pending", Form 1023 mentions, dates on entity lines and street addresses.

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
