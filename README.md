# DevOps Engineer Portfolio — Zeeshan Ahmad

## Run locally
1. Install Node.js 20+
2. `npm install`
3. `npm run dev`
4. Open http://127.0.0.1:5174/

## Personalization
- Edit `src/data/portfolio.js` for profile, experience, projects and links.
- Replace `public/Zeeshan_Ahmad_Resume.pdf` to update the downloadable resume.
- Replace `public/profile_avatar.png` to update the portrait.
- Edit `public/favicon.svg` to customize the browser favicon.
- The resume mentions GitHub without a URL, so the GitHub link is intentionally empty. Add your exact GitHub URL to `profile.github` when available.

## Production build
Run `npm run build`; deploy the `dist` directory.


## Live GitHub repositories
The GitHub section requests public, non-fork, non-archived repositories from the GitHub REST API at runtime. It displays up to 6 repositories and offers language filters. GitHub API availability and unauthenticated rate limits apply. To change the account, update `profile.github` in `src/data/portfolio.js` AND the API username in `GitHubProjects` in `src/App.jsx`. No token is required; do not place private tokens in frontend code.


## Animated cartoon hero
The hero now uses `public/devops-cartoon.png`, a stylized illustration based on the provided video aesthetic. Framer Motion provides gentle floating movement and CSS animates the background orbit. To change the artwork, replace that image while keeping its filename.


## Advanced animation additions
- Hero: floating cartoon, subtle halo and orbiting light points (decorative).
- CI/CD lab: click **RUN PIPELINE** to play an illustrative six-stage pipeline. No infrastructure is accessed.
- Terminal lab: select a command and click **RUN COMMAND** to see sample output. This does not execute commands.
- Animated statistics: numbers count up when scrolled into view. Values are portfolio claims, not live telemetry.
- Projects and GitHub cards: subtle mouse-follow tilt, hover glow and existing scroll reveals.
- Motion accessibility: respects `prefers-reduced-motion`; touch devices do not tilt cards.

Install dependencies with `npm install`, run `npm run dev`, and verify a production build using `npm run build`.


## 3D cloud infrastructure addition
An isolated perspective-based animated cloud topology has been added behind the existing hero cartoon. It uses Framer Motion and SVG (no additional dependencies), and retains the current layout, sections, typography, and styling. The topology is a decorative simulation, not live infrastructure data. Respects reduced-motion preferences.

## Premium Interactive update (October 2026)
This release is based directly on the supplied working project. Existing layout, content, assets, colors, sections, GitHub API integration, resume and 3D cloud/cartoon are preserved. Additions: scroll progress indicator, active navigation state, soft pointer glow on fine-pointer devices, back-to-top control, smooth anchor navigation, refined button/card/pipeline hover states, and reduced-motion accommodations.

The new behavior is isolated in `src/components/PremiumInteractions.jsx` and appended CSS in `src/styles.css`; `src/App.jsx` only imports and mounts the overlay.

Run `npm install` and `npm run dev` on Windows. Do not copy `node_modules` from another operating system. Build verification was attempted in a Linux environment, but the uploaded Windows dependencies do not include the Linux Rollup native module; run `npm install` followed by `npm run build` locally to verify.

## Cinematic Experience upgrade (2026-10-30)

This release adds `src/components/CinematicExperience.jsx` and an isolated additive CSS layer in `src/styles.css`. The enhancement includes sequenced hero entrance, cursor-responsive lighting on existing cards, subtle hero parallax, animated CI/CD data-flow, terminal output transitions, section-title accents, and active-navigation feedback. It preserves the original design, content, section order, profile assets, resume and GitHub integration. Motion effects respect the operating system's reduced-motion preference. The development server remains on `127.0.0.1:5176`.

On Windows: `npm install` followed by `npm run dev`. Use Ctrl+Shift+R to refresh the browser after replacing an older version.
