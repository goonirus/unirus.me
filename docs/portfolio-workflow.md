# Portfolio Workflow

This guide describes how to continue building portfolio detail pages for `unirus.me`.

## Start Procedure

1. Check the repository state with `git -C .\unirus.me status --short --branch`.
2. Read the target project page or nearest existing reference page before editing.
3. Decide whether the task is a direct fix, a new project page, a content rewrite, or a design change.
4. Keep all site references relative.
5. Stop before remote push unless the user explicitly asks for it.

## Current Site Shape

- Main static entry: `home.html`.
- Portfolio archive: `public/portfolio/portfolio_home.html`.
- Detail pages: `public/portfolio/projects/<project>/<project>.html`.
- Project images: `picture/portfolio/<project>/`.
- Downloadable builds: `file/portfolio/digitalgame/`.
- Board-game PDFs or print assets: `file/portfolio/boardgame/<project>/`.
- Collaboration docs: `docs/`.
- `D:\File\unirus_me\TODO` is a temporary intake folder only. Never reference files in `TODO` from website HTML/CSS/JS. Copy any approved, deployable assets into the repo first and reference the copied files with relative paths.
- Homepage `Selected Works` is a curated preview, not the full project archive. Keep it to 4 visible projects per category on the homepage; add all projects to `portfolio_home.html`, which owns the full list and pagination.

There are also newer Vite/React files in the working tree. Treat them as an in-progress or separate line until the user clarifies their purpose. Do not assume they are the deployed site.

## Adding A Digital Game Page

Use an existing detail page as the pattern. Good references are:

- `public/portfolio/projects/whoareyou/whoareyou.html`
- `public/portfolio/projects/pengwin/pengwin.html`
- `public/portfolio/projects/action1000/action1000.html`

For a new digital game, usually update:

- `home.html`
- `public/portfolio/portfolio_home.html`
- `public/portfolio/projects/<project>/<project>.html`
- `picture/portfolio/<project>/`
- `file/portfolio/digitalgame/` only if a deployable build exists

## Page Content Pattern

A project detail page should usually include:

- Hero image or representative gameplay image.
- Metadata sidebar: role, team, timeline, engine/platform, jam/award when relevant.
- Overview: what the project is and why it matters.
- Design contribution: the user's actual design work, not generic project praise.
- Mechanic explanation: what the player does, what changed during development, and why the design is interesting.
- Visual/gameplay notes: only images that help explain the game.
- Recognition section when there are awards.
- Footer contact format consistent with other portfolio pages.
- For board-game or tabletop pages, manuals/rulebooks are supporting deliverables, not automatic visual centerpieces. If rules are important, present them as structured system content: victory pressure, turn flow, movement, combat, economy, variants, and player decisions. Do not fill a section with rulebook screenshots if the same content has already been explained. Keep the PDF as a reference/download unless a rulebook image communicates something new.

## Image Rules

- For outer cards, use an eye-catching cover image if the user provides one.
- For detail pages, prefer in-game screenshots or images that explain actual play.
- Use full-image display for certificates, UI captures, rule/tutorial images, and screenshots where edge content matters.
- Avoid `object-fit: cover` when it hides important UI or award content.
- Do not generate or composite fake screenshots unless the user explicitly asks for that.
- If an image is wrong or unused, remove it from the page reference first. Do not delete the file unless the user asks.
- Avoid manual/rulebook page screenshots as decorative filler. They are useful only when they reveal layout, production quality, or information architecture that the text and other visuals do not already cover.

## Download And External Links

- Only add local download links for player-facing builds that exist inside the repository and are small enough for GitHub/Netlify.
- Do not link source-code zips as player downloads without checking user intent.
- GitHub rejects files over 100 MB. Large builds should usually go to itch.io, GitHub Releases, Netlify Large Media, cloud storage, or be omitted.
- Only add itch.io links when the game is actually uploaded on the intended page.
- For collaborative itch.io projects, displaying the game on the user's profile does not change the project URL owner.

## Text And Encoding

- Be careful editing Chinese HTML.
- Prefer `apply_patch` for manual text changes.
- If using shell commands to inspect files with Chinese text, set UTF-8 output explicitly.
- After editing Chinese text, reread the relevant section to check for mojibake.
- Do not replace Chinese content wholesale unless the user asked for a rewrite.

## Git And Deployment

- Local commit is acceptable when the user asks to prepare or when it is clearly useful, but report it.
- Remote push requires explicit user instruction at that moment.
- Before committing, exclude local IDE/cache files such as `.vs/`, `node_modules/`, `dist/`, and unused generated assets.
- After staging, verify with `git diff --cached --stat` and `git diff --cached --name-only`.
- After pushing, report the commit hash and note that Netlify should deploy.

## Common Mistakes To Avoid

- Adding a fake download button for a file that will not deploy.
- Referencing temporary `TODO` paths from website pages.
- Linking to a teammate's itch.io account as if it were the user's account.
- Cropping award images or UI screenshots so important content is hidden.
- Reusing a visually attractive outer cover as a detail image when an in-game image would explain the game better.
- Editing extra Chinese copy without telling the user.
- Treating old README instructions as current without checking actual `git remote -v` and working tree state.
- Positioning a complete playable board-game project as only a map-design or system-design study when it already has rules, components, and player-facing materials.
- Positioning a complete board game as a prototype or "prototype package" when the user's intent is to present it as a complete, publishable tabletop game.
