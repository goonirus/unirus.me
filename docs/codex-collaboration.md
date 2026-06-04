# Codex Collaboration Notes

This file records the working rules and user preferences for maintaining the `unirus.me` website.

## Project Context

- This repository is a static personal portfolio website.
- Main entry is `home.html`.
- Portfolio detail pages live under `public/portfolio/projects/`.
- Static assets are organized with relative paths and are meant to work both locally and after deployment.

## Path Rules

- Use relative paths in website files.
- Do not introduce absolute filesystem paths into HTML, CSS, or JS in the repo.
- Keep downloadable files inside the repository if they are meant to work on GitHub/Netlify.
- Current download convention for digital game builds:
  - `file/portfolio/digitalgame/`

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
- For ongoing work in this repo, staying in the same conversation is fine.
- If context gets too long later, this file can be used as a handoff summary for a new chat.

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

## Itch.io Collaboration Notes

- Being listed in `Authors` on itch.io does not mean the project URL belongs to the user.
- If the user is already in the project's `Admins` list and `Display as contributor` is enabled, the project can appear on the user's itch.io profile.
- If the project is hidden on the user's profile, it must be unhidden from the user's own profile/theme settings.
- A collaborative project shown on the user's itch.io profile will still keep the original owner's itch.io URL.
- If the user wants the project to live under `https://unirus.itch.io/`, they must either:
  - recreate/publish the project under their own account
  - or request an ownership transfer through itch.io support
