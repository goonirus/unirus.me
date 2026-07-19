# Codex Collaboration Notes

For future threads, read `docs/codex-start-here.md` first. This file remains the project-specific collaboration record, while `docs/portfolio-workflow.md` and `docs/project-state.md` hold the operational workflow and current-state snapshot.

This file records the working rules and user preferences for maintaining the `unirus.me` website.

## Project Context

- This repository is a static personal portfolio website.
- Main entry is `home.html`.
- Portfolio detail pages live under `public/portfolio/projects/`.
- Static assets are organized with relative paths and are meant to work both locally and after deployment.

## Path Rules

- Use relative paths in website files.
- Do not introduce absolute filesystem paths into HTML, CSS, or JS in the repo.
- Treat `D:\File\unirus_me\TODO` as a temporary intake folder only. Never reference `TODO` directly from website pages; copy approved assets into repo folders such as `picture/portfolio/<project>/` first.
- Keep downloadable files inside the repository if they are meant to work on GitHub/Netlify.
- Current download convention for digital game builds:
  - `file/portfolio/digitalgame/`
- Current download convention for board-game PDFs or print assets:
  - `file/portfolio/boardgame/<project>/`

## Deployment Rules

- Do not push to remote unless the user explicitly asks for it.
- Treat any remote push as a deployment-sensitive action because it may consume Netlify/site update quota.
- It is fine to prepare local changes, stage files, inspect git state, and explain what is ready.
- Before any `git push`, explicitly confirm with the user.

## Content Editing Rules

- If the user explicitly asks for a content change, make it directly.
- If you notice additional content issues that the user did not ask about:
  - point them out first
  - ask before changing them
- This applies especially to:
  - rewriting wording
  - changing tone
  - replacing Chinese copy
  - changing presentation choices that are not obvious bugs

## Public Writing Rules

- Public-facing articles must assume the reader has no chat context and may not know the game, project, or debate being discussed.
- Before finalizing public copy, do a reader-pass: check whether the title, subtitle, header tags, and first paragraphs would make sense to someone who did not participate in the conversation. Do not rely on shorthand from the chat.
- When converting the user's notes into public prose, do not mechanically avoid the original wording. Preserve strong, clear phrasing when it works; remove or soften only the parts that are too casual, too private, or unsuitable for the public tone.
- Distinguish imported social-platform comments from answers written during an article Q&A. A Jishi-style short comment may need its highly colloquial or emotional wording calibrated for a portfolio article; a clear Q&A answer is already draft copy and should normally be used directly. Correct only real problems instead of rewriting the answer into Codex's voice or a definition-heavy report style.
- Preserve exact, verifiable examples and numbers even when they are technical. Apply caution to subjective causal claims or disputed rankings, not to evidence merely because it is specific.
- For article-flow improvements, additions are allowed by default; deleting, compressing, rewriting, or splitting existing user-derived copy requires the user's explicit approval. When such a change seems necessary, show the original and proposed wording before editing.
- `Thoughts` and `Deconstructing Design` are sibling sections, not a parent-child hierarchy.
- Put system-level game critiques, mechanism breakdowns, and design-structure analysis under `Deconstructing Design`, not `Thoughts`.
- Keep `Thoughts` for looser notes, development reflections, and unfinished or exploratory ideas that do not need a full design-deconstruction frame.
- Do not begin from the author's private conclusion. Open by establishing the object, why it matters, and why this angle is worth reading.
- Before making a critique, give readers enough shared ground to understand what is being critiqued.
- Avoid wording that sounds like private bragging or "I saw through it quickly." Public tone should present a judgment without turning insight into self-display.
- For design thoughts, prefer a readable progression: context, experience/observation, problem, analysis, counterweight, conclusion.
- Section headings in public articles should create reading interest and carry the argument forward. Avoid generic scaffold labels such as "Observation," "Analysis," or "Closing Notes" unless the article is intentionally formal.
- Public copy must not contain internal drafting reminders, collaboration notes, or process language. If a sentence is mainly telling Codex how to organize two ideas, it belongs in the workflow document, not in the article.
- When an article needs a scholarly/research-like process, keep the rigor in the argument but translate method labels into reader-facing movement. Do not expose "hypothesis/test/evaluation" as a skeleton unless the user explicitly wants that style.
- If an opening paragraph is the author's own thesis or lead, style it as an article lead rather than a quote/callout. Avoid quote-like left borders, serif quote styling, or framed cards unless the text is actually quoted or intentionally presented as an aside.
- When explaining why a work is popular, do not accidentally turn other players' possible experience into the author's own concession. Keep "why it works for others" and "why it does not work for me" clearly separated.
- For puzzle-like or optimization-heavy games, evaluate whether deeper system understanding opens new play space or merely exposes the formula. If understanding the system removes fun without rewarding mastery, that is a meaningful design criticism.
- For `Deconstructing Design` articles about well-known commercial games, do not add only one token image. Use a small, purposeful image set, usually 2-4 official/product/reference images, but distribute them through the article where they create breathing space or help explain the nearby argument. Every image must be able to answer "why is this here, beside this paragraph?" If it cannot, use fewer images or a clearer visual explanation instead. Do not dump every image into the header as a decorative gallery. Also update archive/recent-article thumbnails when adding article visuals.
- When the user points out a reusable writing principle, record it in the guidance docs rather than treating it as a one-off correction.

## Technical Editing Rules

- Direct fixes are welcome for obvious issues such as:
  - broken links
  - wrong file paths
  - mismatched card title/link pairs
  - image cropping/display bugs
  - missing or misplaced assets
- Preserve the existing site structure and visual language unless the user asks for a redesign.

## Encoding / Text Safety

- Be careful with Chinese text in existing HTML files.
- Prefer `apply_patch` for text edits.
- Avoid shell-based bulk rewrite operations for HTML text unless absolutely necessary.
- If a file already shows encoding problems, change only the minimum necessary content and verify visible text after edits.

## Portfolio Page Conventions

- Use the existing project-page pattern as reference when adding a new detail page.
- Reuse the established layout:
  - left metadata sidebar
  - large hero/cover area
  - sectioned case-study content
  - footer matching site style
- For project downloads:
  - keep a direct download option when a distributable build exists and the file can realistically live in the deployed repo
  - keep an external itch.io link when available
- Do not add a fake local download button when the build is too large for the GitHub/Netlify deployment path or when the file is not meant to be shipped with the site.
- Do not add an itch.io button unless the project actually exists on the intended itch.io page.
- If the downloadable file is only source code, do not present it as a normal player-facing build without checking intent.

## Asset / Presentation Preferences Learned So Far

- Outer portfolio cards can use a more eye-catching image.
- Detail pages should usually use a more representative in-game screenshot.
- Certificates/award images should be shown fully, not cropped.
- Large tall images may need reduced width and centered layout.
- Rule/tutorial images should use contain-style display when cropping hides important content.

## Communication Preferences

- The user values being informed before non-obvious changes.
- The user appreciates reminders about hidden risks rather than silent decisions.
- When the user asks "why" or challenges the reasoning behind a choice, answer the question explicitly before or alongside the fix. Do not only patch the file and skip the explanation.
- If the user's wording, typo, abbreviation, or intended meaning is unclear, ask before expanding or integrating it. Do not silently infer from a possibly mistaken phrase, because the user may not notice the misunderstanding until it has propagated into a larger draft.
- Avoid overcorrection. When the user points out that something is too high, too low, too prominent, too hidden, too polished, or too casual, make a proportional correction instead of swinging to the opposite extreme.
- When the user identifies one example of a broader pattern, audit the active draft for that whole pattern instead of only changing the named example.
- Avoid approval-seeking or "weathervane" behavior. Preserve independent judgment: if a term, structure, score, or design choice seems wrong, explain the issue and propose a better option instead of passively adopting whatever was last mentioned.
- Avoid performative or deliberately flattering choices. The user dislikes things that feel intentional in a shallow way, even when the intent is praise. Let quality come from accuracy, proportion, and clear logic rather than visible effort to please.
- For ongoing work in this repo, staying in the same conversation is fine.
- If context gets too long later, this file can be used as a handoff summary for a new chat.

## Correction And Review Discipline

- When the user points out a visible error, first identify the underlying class of error, then audit the current work for the same pattern. Do not only change the exact phrase, number, or layout cell the user named.
- If the user gives examples, treat them as examples unless they explicitly say the list is exhaustive.
- After a correction, reread the surrounding section from a reader's perspective. Check whether the fixed sentence still belongs where it is, whether it now duplicates another sentence, and whether it creates a new logic break.
- If a correction changes the structure, check related files and data sources in the same pass. For example, a rating detail page, the all-games table, and the rating home page may all need matching title, link, score, or label changes.
- Do not silently delete user content to make prose shorter. Compression is allowed only when the meaning is preserved; if meaning is changed or a point is omitted, explain the reason.
- Preserve scope limits. A caveat about one factor must not be broadened into a general caveat about a different or larger claim.
- Preserve the logical relation between claims, not only the claims themselves. Do not turn a concession (`although A, B`) into causation (`A therefore B`), a limit on future development into a defect in the current work, or mitigation of a problem's consequences into proof that the underlying problem is smaller. Keep the user's original connector when possible; ask when the relation is uncertain.
- For UI/layout feedback, inspect the actual source of the visual problem instead of repeatedly tuning nearby values. If the user asks for vertical centering, check both the cell and the inner element; if the user asks for column readability, check widths, wrapping, labels, and icons together.
- Do not claim a check was performed unless it was actually performed. If only source-level checks were done and no browser screenshot was taken, say so.
- Prefer slower, higher-confidence edits over fast partial fixes when the user has already signaled that quality and review matter more than speed.

## Current Known Preferences Specific to This Repo

- `Peng-Win` is a puzzle project that won `Best Game Design`.
- That award is part of the project story and should be reflected on the detail page.
- Use repo-relative assets under `picture/portfolio/pengwin/`.
- Use repo-relative downloadable builds under `file/portfolio/digitalgame/`.
- `1000, Action!` is a `Global Game Jam 2026` project.
- `1000, Action!` won `Best Game Design` and `Best Innovation`.
- For `1000, Action!`, use `picture/portfolio/action1000/covery.png` as the portfolio cover image.
- For `1000, Action!`, use `picture/portfolio/action1000/frozen.png` as the detail-page mechanic image for the player-suspension explanation.
- For `1000, Action!`, the award layout should use:
  - `award_1000_3.jpg` and `award_1000_4.jpg` side by side as certificate images
  - `award_1000_2.jpg` below as the horizontal event photo
  - do not show `award_1000_1.jpg`
- `落井下食 / EatWell` is a long-term digital game project by the team `井上添花`, planned for a future Steam release.
- For projects with separate Chinese and English names, show the language-appropriate name in each language view instead of displaying both names in both views.
- For `落井下食 / EatWell`, the user's role is `Numerical Design / Systems Design`, with major design contribution from the second iteration onward.
- Do not add a local download button for the current `EatWell` build unless the user explicitly provides a deployable download plan; the temporary build folder is large and should not be copied into the repo by default.
- `Hundred Years' War` is a complete, publishable two-player historical strategy board game / tabletop wargame, not a map-system design exercise or production-package demo.
- For `Hundred Years' War`, present the map as one core module inside a complete work that also includes rulebook, components, battle board, setup, victory conditions, variants, and a production pipeline.
- Use repo-local assets under `picture/portfolio/hundredyearswar/` and the rulebook PDF under `file/portfolio/boardgame/hundredyearswar/`.

## Itch.io Collaboration Notes

- Being listed in `Authors` on itch.io does not mean the project URL belongs to the user.
- If the user is already in the project's `Admins` list and `Display as contributor` is enabled, the project can appear on the user's itch.io profile.
- If the project is hidden on the user's profile, it must be unhidden from the user's own profile/theme settings.
- A collaborative project shown on the user's itch.io profile will still keep the original owner's itch.io URL.
- If the user wants the project to live under `https://unirus.itch.io/`, they must either:
  - recreate/publish the project under their own account
  - or request an ownership transfer through itch.io support
