# Project State

Last reviewed: 2026-07-19.

This file gives future threads a quick snapshot. Recheck the repository before acting because the user may have changed files after this note.

## Repository

- Workspace root: `D:\File\unirus_me`.
- Website repo: `D:\File\unirus_me\unirus.me`.
- GitHub remote: `https://github.com/goonirus/unirus.me`.
- Netlify site: `https://unirus.netlify.app/`.
- Current remote name observed: `origin`.
- Remote pushes must be explicitly requested by the user because they may trigger Netlify deploy quota.

## Active Website Line

- The deployed website remains the static HTML site led by `home.html`.
- Portfolio, writing, and rating pages live under `public/`; shared assets live under `picture/` and `file/`.
- Website pages must only reference repo-local relative paths.

There is a separate Vite/React direction in the local working tree:

- `index.html`
- `package.json`
- `src/`
- `vite.config.ts`
- TypeScript and Tailwind configuration files

These files are not part of the confirmed deployed version. Keep them local and untracked unless the user explicitly approves replacing the static site's publishing entry.

## Writing Sections

- `public/thoughts/` and `public/deconstruction/` are separate top-level writing sections.
- `Deconstructing Design` is for system-level game critique, mechanism breakdowns, and design-structure analysis.
- `Thoughts` is for looser notes, development reflections, and exploratory writing.
- The BitD, Pandemic, and Wondrous Creatures articles have been migrated into `public/deconstruction/BoardGame/`.

## Board Game Ratings

- Rating overview: `public/rating/boardgame/rating_boardgame_home.html`.
- Full comparison table: `public/rating/boardgame/ratinglist_bg/all_games/all_games.html`.
- Completed base-game reviews: `Brass: Birmingham`, `Ark Nova`, and `Terraforming Mars`.
- Completed expansion reviews: `Marine Worlds`, `Prelude`, `Venus Next`, `Colonies`, and `Turmoil`.
- Reusable process, scoring semantics, and collaboration rules live in `docs/boardgame-rating-workflow.md`.
- Drafts under `docs/drafts/` preserve the user's source reasoning and should not be treated as disposable generated text.
- Expansion quality tier and enable recommendation are separate judgments; expansion prices do not enter the score.

## Known Local Noise

The following kinds of files should not be committed unless the user specifically wants them:

- `.vs/`
- `.codex_tmp/`
- `node_modules/`
- `dist/`
- local `.local` files
- TypeScript `*.tsbuildinfo` caches
- generated or unused image experiments

## Recent Portfolio Work

`Peng-Win`:

- Puzzle game based on Sokoban-like mechanics.
- Won `Best Game Design`.
- Detail page uses in-game/representative images rather than only eye-catching cover art.
- Download build should be the player-facing build, not the Unity source project.

`1000, Action!`:

- `Global Game Jam 2026` project.
- Won `Best Game Design` and `Best Innovation`.
- Core idea: masking objects evolved into masking the timeline like video editing, blocking events on a layer.
- Level 4 design point: masking objects is not enough; masking the player so they stay suspended is required.
- Level 6 design point: a sound represents lightning; masking the sound is required.
- Use `covery.png` as cover.
- Use `frozen.png` to explain player suspension.
- Use `award_1000_3.jpg` and `award_1000_4.jpg` as certificate images, with `award_1000_2.jpg` as the horizontal event photo.
- Do not show `award_1000_1.jpg` unless asked.
- Do not add local download or itch.io links unless a real deployable target exists.

`落井下食 / EatWell`:

- Long-term digital game project by the team `井上添花`.
- Planned for a future Steam release.
- Public Gcores page: `https://www.gcores.com/games/133637?tab=all`.
- Genre/status from Gcores: strategy, simulation, survival; Windows; ongoing development.
- User role: numerical design / systems design, with major design contribution from the second iteration onward.
- Use repo-local assets under `picture/portfolio/eatwell/`.
- Do not reference the temporary `D:\File\unirus_me\TODO` folder from website files.
- Do not add a local download button for the current temporary build; it is too large and not the intended deployment path.

`Hundred Years' War`:

- Complete, publishable two-player historical strategy board game / tabletop wargame.
- Current portfolio page: `public/portfolio/projects/hundredyearswar/hundredyearswar.html`.
- Repo-local images: `picture/portfolio/hundredyearswar/`.
- Repo-local rulebook PDF: `file/portfolio/boardgame/hundredyearswar/Hundred-Years-War-Rulebook.pdf`.
- Present it as a complete work with playable map, rulebook, components, battle board, setup, victory conditions, variants, and production pipeline.
- Do not reduce the positioning to only `Historical Wargame / Map-System Design`; the map is one core module, not the whole project.

## Itch.io State

- The user's itch.io profile is `https://unirus.itch.io/`.
- A collaborative project can be visible on the user's profile when the user is an admin/contributor and the project is unhidden.
- The project URL still belongs to the original owner unless ownership is transferred or the user republishes it under their own account.

## Check Before Editing

1. Read `docs/codex-collaboration.md`.
2. Read `docs/portfolio-workflow.md`.
3. Run `git status --short --branch`.
4. Inspect the files you will touch.
5. If a change affects deployment, links, or project identity, explain the risk before acting.
