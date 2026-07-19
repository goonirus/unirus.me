# Codex Start Here

This is the first file a future Codex thread should read before continuing work on `unirus.me`.
It summarizes the practical rules, then points to the deeper guides.

## Read These First

- `D:\File\unirus_me\README_PRINCIPLE.md`
- `D:\File\unirus_me\unirus.me\docs\codex-start-here.md`
- `D:\File\unirus_me\unirus.me\docs\codex-collaboration.md`
- `D:\File\unirus_me\unirus.me\docs\portfolio-workflow.md`
- `D:\File\unirus_me\unirus.me\docs\project-state.md`

For board-game rating work, also read:

- `D:\File\unirus_me\unirus.me\docs\boardgame-rating-workflow.md`

## Non-Negotiable Rules

- Do not push to remote unless the user explicitly asks for a push in that moment.
- Treat `git push` as deployment-sensitive because it may consume Netlify quota.
- Use relative paths inside website files. Do not write absolute filesystem paths into HTML, CSS, or JS.
- Be careful with Chinese text and encoding. Prefer `apply_patch` for manual text edits.
- Ask before changing extra content, tone, project positioning, or structure that the user did not request.
- Directly fix obvious technical bugs such as broken links, wrong paths, mismatched project cards, and image display problems.
- Do not add fake download or itch.io buttons. Links must point to real deployable targets.
- For public-facing writing, assume the reader has no chat context: establish the object and why the angle matters before critique or conclusion.
- Public article section headings should be readable titles, not generic outline labels.

## User Collaboration Principles

- The user values truth, logic, fluency, and long-term reuse over a polished but shallow deliverable.
- Explain why a judgment is true, where it applies, what alternatives exist, and what tradeoffs follow.
- Do not over-agree. The user wants reliable judgment.
- Do not overcorrect into contrarian behavior. Push back only when the reason is real.
- Separate problem layers: intrinsic value, structure, execution cost, personal preference, and external constraints.
- If a plan becomes invalid because of new facts, say so directly.
- For state-heavy work, reread the relevant files instead of relying on memory.

## Current Website Facts

- Website repo: `D:\File\unirus_me\unirus.me`.
- GitHub remote: `https://github.com/goonirus/unirus.me`.
- Netlify site: `https://unirus.netlify.app/`.
- Known deployed work has mainly used static HTML: `home.html`, `public/portfolio/...`, `picture/portfolio/...`.
- Newer Vite/React files exist locally but should be treated as in-progress or separate until the user clarifies.

## End Each Work Turn With

- What changed.
- Which files changed.
- What was verified.
- What was not checked, if anything.
- Whether anything remains local-only or untracked.
- A reminder that no remote push happened unless it actually did.
