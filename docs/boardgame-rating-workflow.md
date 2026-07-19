# Board Game Rating Workflow

Last updated: 2026-07-17.

This document records the working method for building the board-game rating section of `unirus.me`. It is an internal writing and collaboration guide, not public-facing copy.

## Purpose

The board-game rating section should not become a bare score table or a pile of short impressions. Each entry should explain:

- what the game is;
- why it matters within its type or context;
- what the player actually experiences;
- how the score and weights were judged;
- where the user's personal taste affects the result;
- whether the game is broadly recommendable, personally valuable, or mainly interesting as design material.

The current workflow should compensate for the user's natural tendency to write short answers. Codex should ask focused questions, collect short answers, then expand them into coherent article paragraphs while preserving the user's judgment.

## Existing Site Context

Relevant local files:

- `public/rating/boardgame/rating_boardgame_home.html`
- `public/rating/boardgame/ratinglist_bg/all_games/all_games.html`
- `public/rating/boardgame/ratinglist_bg/all_games/all_games.js`
- `public/rating/boardgame/games/ArkNova.html`
- `public/rating/boardgame/games/BrassBirmingham.html`

Current board-game rating dimensions observed in the existing page pattern:

- `Mechanics` / `机制`
- `Theme` / `主题`
- `Aesthetics` / `美术`
- `Balance` / `平衡性`
- `Replayability` / `重玩性`
- `Interactivity` / `交互性`
- `Depth/Complex` / `深度 / 上手成本`
- `Flow` / `流畅度`
- `Innovation` / `创新`

These dimensions can be kept as the first working model. If a future change alters the dimension list or weights across the whole rating system, record the reason in this document before applying it to pages or data files.

Use `Flow` / `流畅度` as the public rating label. It measures how smoothly a session proceeds at the table: downtime, turn continuity, whether waiting time remains useful for planning, and whether the game's duration feels occupied rather than stalled. Keep the internal data key `flow` for stability.

Do not judge Flow entirely by expert-table performance. Familiarity and strong iconography can make experienced play exceptionally smooth, but a public score should also account for real interruption in ordinary first plays. Count only the learning burden that actually disrupts play, such as repeated reading, comparison, replanning, or module maintenance; do not deduct abstract rules difficulty a second time after already counting it under `Depth/Complex`.

Keep `Tempo` / `对局节奏` separate. Tempo is an in-game strategic concept covering timing windows, resource conversion, development speed, shared clocks, and the way player count changes action opportunities. A mechanism discussion may analyze tempo, while the rating matrix scores Flow. Do not use `Pacing` / `节奏` as the public dimension label because it blurs these two meanings.

## External Reference Takeaways

These are references for structure, not rules to copy.

- BoardGameGeek uses a broad personal 1-10 rating culture; the useful lesson is that a score needs a plain-language feeling anchor, not only a mathematical formula.
- GamesRadar's board-game review process separates overview/specs, features/design, gameplay, and a compact rating table. The useful lesson is that readers need both quick comparison and a readable explanation.
- GamesRadar's review policy also stresses that scores are subjective but should still explain what works, what does not, why, and for whom.

References:

- https://en.wikipedia.org/wiki/BoardGameGeek
- https://www.gamesradar.com/tabletop-gaming/how-we-test-board-games-at-gamesradar/
- https://www.gamesradar.com/reviews-policy/
- https://www.gamesradar.com/review-guidelines-how-we-score/

## Working Principle

Use a question-and-answer workflow.

Do not ask the user to write the article directly. Ask for short answers in batches, usually 5-8 questions at a time. The questions should include both necessary framework questions and game-specific discussion points.

For dimensions intended to be useful to readers beyond the user's personal diary, frame detailed questions around the incentives created by the system and the behavior the user expects or has observed from players generally. Do not default to asking what the user personally would do in a narrow board state; that turns an objective design evaluation into a fine-grained preference report. Personal decisions remain relevant when discussing the impression score or a stated preference, while design questions should usually ask, for example, “What does this rule encourage players to do?” or “What behavior have you observed around this incentive?”

After the user answers, Codex should:

1. extract the judgment from each answer;
2. identify whether the answer is about personal taste, broad recommendation, design analysis, or scoring calibration;
3. expand the answer into complete sentences and paragraphs;
4. preserve uncertainty instead of hiding it;
5. avoid adding claims that the user did not imply;
6. before finalizing, compare the draft against the user's original answer points and confirm that every substantive point is either preserved or has an explicit reason for omission;
7. ask follow-up questions only when the missing point affects the conclusion, score, or public positioning.

## Article Outline

Use this as the default order for a board-game rating detail page or article.

Treat this outline as a coverage checklist, not a mandatory mainline. A review should have a clear core judgment, but it does not need one thesis that every mechanism and dimension must serve. Let the final order emerge from the game's actual systems and the completed Q&A; do not ask the user to approve a single article "mainline" when that framing narrows useful discussion.

“Coverage” means checking that the article contains the important judgments needed to understand and evaluate the game. It does not mean naming every rule, mechanism, phase, or scoring source. Discuss a mechanism only when it supports an independent insight, materially affects a score or recommendation, supplies necessary context, or is itself especially worth examining. Do not create a section merely to make an inventory look complete.

Once a mechanism has already produced a complete argument, do not reopen it under another heading. Refer back to the established conclusion only when a later judgment genuinely needs it. For example, if unlimited hand size has already explained a game's long-term planning, it should not be asked about or described again merely because a later checklist contains “hand management.”

When expansions will receive separate review pages, keep their treatment in the main-game review concise. Explain only the mechanism they add, how it changes the evaluated complete game, and whether it integrates with the base system. Reserve detailed module-by-module strengths, weaknesses, scores, and recommendations for the expansion pages instead of duplicating them in the main review.

Organize the article by the object being analyzed, not mechanically by rating dimension. If a paragraph is fundamentally explaining a mechanism, keep it in the mechanisms section even when that explanation also produces judgments about balance, interaction, tempo, Flow, replayability, or `Depth/Complex`. Later dimension summaries should refer back to the earlier analysis with varied, natural phrasing instead of relocating or duplicating the original paragraph.

Do not move user-authored material to another section without prior approval. If a passage appears completely unrelated to the mechanism or section where it originated, explain the proposed move and its reason to the user first; relocate it only after the user agrees.

1. Basic card
   - English and Chinese title, designer, publisher, year, official player count, playtime, weight/complexity, played version, and player-count contexts that affect the evaluation.
   - Use the official or most recognizable full title in each language view. Do not shorten a public page title just because the conversation used a shorthand. If the exact localized title is unclear, ask instead of guessing.
   - Keep the title area for core identification and broad positioning. Player-count caveats, special modes, and other secondary judgments belong in the article body unless they are truly the game's defining feature.
   - Do not treat number of plays as a permanent required question. Ask it only when it changes the reliability, version context, or evolution of the judgment.
   - Purpose: give readers enough context before opinion begins.

2. Opening verdict
   - One short paragraph stating what kind of game it is and the core judgment.
   - It should answer: "Why is this game worth discussing?"

3. Positioning and expectation
   - What audience, genre, or comparison space does the game belong to?
   - What did the user expect before playing?
   - Did the actual experience confirm, exceed, or betray that expectation?

4. Core loop and player experience
   - What do players repeatedly do?
   - Where does the tension come from?
   - What kind of decisions feel meaningful, routine, surprising, or exhausting?

5. Design analysis
   - Discuss the main systems: mechanisms, interaction, tempo, Flow, randomness, information, balance, and depth.
   - This section should explain why the game works or fails, not only whether it is fun.

6. Theme, production, and usability
   - Theme integration, art, components, iconography, rulebook, setup, teardown, table presence, and teaching burden.
   - These should be connected to experience, not treated as decoration.

7. Rating breakdown
   - Show dimension scores and weights.
   - Explain any unusual weight or score.
   - Explain why the main scores and weights were chosen in public-facing prose, preferably inside the relevant analysis sections rather than in a detached scoring note. A table alone is not enough; readers should be able to follow the scoring logic without reading the private discussion.
   - If the mathematical total conflicts with the user's feeling tier, adjust only after writing down why.

8. Recommendation boundary
   - Who should play it?
   - Who should avoid it?
   - Is it best as a collection item, design study, occasional experience, group-dependent game, or repeated favorite?

9. Closing judgment
   - Return to the opening verdict with a sharper conclusion.
   - State what the score really means in one or two sentences.

## Reusable Game Page Template

Use this as the concrete template for an individual rating page. The outline above explains the logic; this template explains what should appear on the page.

1. Header and score block
   - Use the official or most recognizable full game title in each language view.
   - When the main page title scrolls out of view, show the current game's language-appropriate full title in the fixed navigation bar. Keep the first viewport uncluttered by hiding this duplicate title while the main heading remains visible.
   - Show the dimension-weighted score as the primary score when the page's purpose is the rating matrix.
   - Show the impression score nearby but visually secondary, not hidden and not dominant.
   - Every individual game page should show a recognizable cover or official product image in the first viewport, preferably beside the score block. Copy the asset into the repository and reference it with a relative path; do not depend on an external runtime image URL.
   - Preserve the cover rather than forcing a careless crop. Verify that the title, scores, and image remain visible without overlap or horizontal scrolling on both desktop and mobile widths.
   - Do not place secondary caveats such as "3-player mode works well" in the header tag area unless that caveat defines the game.

2. Sidebar or score card
   - Include a rating breakdown table with fixed dimension order:
     - Mechanics / 机制
     - Theme / 主题
     - Aesthetics / 美术
     - Balance / 平衡性
     - Replayability / 重玩性
     - Interactivity / 交互性
     - Depth/Complex / 深度/成本
     - Flow / 流畅度
     - Innovation / 创新
   - Use the same order across all games so readers can compare entries without relearning the table.
   - Display public-facing dimension scores on a 100-point scale.
   - Keep internal data keys stable if needed, but public labels should be reader-facing.
   - Make each dimension label a visible in-page link to the heading that contains its analysis. Multiple dimensions may share one destination when the article intentionally discusses them together; do not split a coherent section merely to create nine unique anchors.
   - Give anchored headings enough scroll offset to remain visible below the fixed navigation bar, and preserve keyboard focus and reduced-motion behavior.

3. Verdict
   - Establish what the game is and why it is worth discussing.
   - Separate broad public judgment from the user's personal preference.
   - A strong verdict can preserve the user's voice, but should not copy private-app comments wholesale if the tone is too casual.

4. Mechanism and numerical structure
   - Explain the game's central mechanism and why it produces meaningful decisions.
   - If a game receives high mechanics weight, this section must be substantial. Do not give a high mechanics weight while leaving the mechanism analysis thin.
   - When several individual systems are analyzed inside the mechanism section, keep one primary mechanism heading and present those systems as parallel subheadings. Do not give a mechanism subsection the same visual or semantic level as later article-level categories such as Balance, Theme, or Recommendation.
   - Preserve vivid user phrasing when it is accurate and professional enough. Do not mechanically paraphrase away good sentences.

5. Depth, learning cost, and replayability
   - Explain `Depth/Complex` as the relationship between mastery ceiling and entry cost.
   - If replayability is limited, explain whether that is a design failure, a tradeoff, or a personal-preference issue.
   - Keep "replayability is limited" and "mastery ceiling is high" separate if both are true.

6. Player count and interaction
   - Discuss player-count differences in the body, not as a decorative header label.
   - For interaction, distinguish quantity from quality. A game can have moderate interaction volume but high-quality interaction.
   - Preserve the scope of caveats. A note about tempo sensitivity in high-level play must not become a broad claim that all interaction dominates the result.

7. Balance and Flow
   - Explain both play balance and numerical balance when relevant.
   - If turn order or tempo is part of balance, connect it back to the earlier interaction/player-count discussion rather than leaving the balance paragraph logically unsupported.
   - For Flow, discuss downtime, turn continuity, useful planning during other players' turns, and whether the game respects the table time it asks for.

8. Theme, aesthetics, and audience reach
   - Do not merge theme and art when they work differently.
   - A theme can be a double-edged sword: it may support intuitive rules and immersion while narrowing the audience.
   - Art should be judged by whether it supports theme, readability, table presence, and player approachability.

9. Innovation and completion
   - Separate mechanism provenance from the Innovation score. Provenance asks whether an element had an earlier example; the score asks whether the game's meaningful innovations are distinctive, consequential, and well executed.
   - Do not treat the percentage of unprecedented components as the Innovation score. Familiar foundations such as cards, resources, tile placement, drafting, or variable powers do not create an automatic deduction merely because earlier games used them.
   - Judge what the game changes within the part where it actually innovates: whether the new structure changes player decisions, gives the game an identity that is hard to replace, and is developed far enough to support the whole experience.
   - Similarity establishes a precedent, not a direct line of influence. Do not claim that a designer borrowed from an earlier game unless a reliable source says so.
   - A game can have moderate innovation but excellent completion if its value comes from tuning, integration, and proportion.
   - Low or zero innovation weight can be valid when novelty is not central to why the game works.

10. Recommendation boundary
    - State who should try the game, who may dislike it, and whether the game is worth owning, studying, or only trying.
    - Avoid ending with a vague "recommended" if the article has enough material to name the right audience.

## Question Batches

### Batch 1: Basic Positioning

Ask these before drafting the article.

- What is the game, and what type of game would you call it in plain language?
- Which player-count contexts matter for this game, such as 2-player, 3-player, 4-player, team play, solo, or expansion-specific differences?
- Is the version, language, platform, or expansion context important to the judgment?
- What was your strongest feeling after the most representative play?
- Before playing, what did you expect from it?
- Did your opinion change after repeated plays?
- What other games should readers mentally compare it with?

### Batch 2: Core Experience

Ask these to find the article's main body.

- What do players spend most of their actual attention on during the game?
- Which decision feels most central?
- Where does the tension come from: scarcity, timing, interaction, uncertainty, risk, tempo, negotiation, or something else?
- Was there a moment when the game clearly "clicked" or clearly failed?
- Does the game reward better understanding, or does understanding the system make it feel more formulaic?
- Is downtime acceptable, meaningful, or damaging?

### Batch 3: Design Evaluation

Ask these to connect opinion to design logic.

- What is the strongest mechanism or system in the game?
- What is the weakest mechanism or system?
- Is the game deep because it creates meaningful choices, or only complex because it has many rules/components?
- Is randomness input randomness, output randomness, hidden information, setup variance, card draw, dice, or player-created chaos?
- Is interaction direct, indirect, tactical, social, blocking, trading, negotiation, or mostly absent?
- Does the game have dominant strategies, runaway leader problems, kingmaking, scripted openings, or catch-up issues?

### Batch 4: Theme and Usability

Ask these to avoid treating production as surface polish.

- Does the theme change how the game is understood or played?
- Are art and components only attractive, or do they improve readability and decision-making?
- Is the rulebook clear enough to learn from without outside help?
- How hard is it to teach?
- How painful are setup and teardown?
- Does the game respect the table time it asks for?

### Batch 5: Scoring and Weights

Ask these after the article's judgment is mostly clear.

- What is the gut-feeling score tier: must play, strongly recommended, worth trying, group-dependent, not recommended, or worse?
- Which dimension deserves the highest weight for this game, and why?
- Which dimension should have lower weight because it matters less to this game's promise?
- Which dimension score feels most controversial?
- Does the weighted score match your real feeling?
- If the total and feeling disagree, is the problem the score, the weight, or an admitted personal bias?

### Batch 6: Public Recommendation

Ask these before finalizing.

- Who is this game for?
- Who will probably dislike it?
- Is it worth owning, worth trying once, worth studying, or mostly replaceable?
- What is the one sentence you would say to someone before recommending or warning against it?

## Dynamic Scoring Rules

The rating system can be dynamic, but it must be traceable.

Current non-negotiable scoring reminders:

- Do not make dimension scores flatteringly match the final impression score.
- The impression score and the dimension-weighted score are separate systems.
- The dimension-weighted score will usually be lower than the impression score because deductions are counted directly.
- A full-10 dimension table would imply a game with no meaningful weakness, which should be treated as practically impossible.
- An individual 10/10 dimension score can still be valid when the game is already complete enough in that dimension and there is no fair reason to deduct points.
- Rare scores above 10 can be used as dimension-specific bonus points for extraordinary advantages. These bonuses should not retroactively lower other games that already deserve 10 in the same dimension.

- Start with the current baseline weights from the existing board-game page pattern.
- Adjust weights only when the game type makes a dimension structurally more or less important.
- A weight is the dimension's influence on the overall evaluation, not an extra bonus or reward. A high dimension score does not imply a high weight, and a low score does not imply a low weight.
- Scores and weights are independent judgments: the score asks how well the game handles the dimension; the weight asks how much that dimension affects whether this particular game is good overall.
- Record the reason for any non-baseline weight.
- Do not make weights fit the desired final score silently.
- Do not inflate dimension scores to make the weighted score match the user's impression score. Impression score and dimension-based score are two related but distinct systems; if they always match, the table loses its diagnostic value.
- Corrections should be proportional. If one weight, score, or visual hierarchy was too low or too high, adjust the actual problem instead of overcompensating in the opposite direction.
- Keep independent judgment when naming terms or structuring score displays. If a suggested English label is semantically wrong, choose a clearer term and explain the choice instead of passively preserving it.
- If a game deserves a high overall impression despite a weaker dimension, preserve the weaker dimension score and explain the reason through weights, written judgment, or a stated personal preference.
- Dimension-weighted scores will often be lower than impression scores because every deduction is counted directly. A perfect dimension table would imply a game with no meaningful weaknesses, which should be treated as almost nonexistent.
- If the weighted score does not match the feeling tier, first check whether one dimension is overvalued or undervalued.
- If the disagreement is personal taste, say so clearly in the article.
- A score should be both comparable and explainable. If it is only comparable, it becomes empty data; if it is only explainable, the rating list loses its function.
- Match the wording to the score band. For example, an 80/100 dimension is still a good score; describe it as a relative ceiling or not-as-exceptional dimension, not as a severe flaw or major failure.
- Dimension scores judge whether a game handles a dimension well, not whether the dimension is simply high in quantity. For example, interaction should be enough to matter, but excessive or oppressive interaction can still lower the score.
- Dimension weights measure impact on the complete player experience and overall judgment. They do not measure rulebook space, action frequency, content share, or how visible a dimension is during play.
- Low quantity does not imply low weight. If a game contains almost no interaction and that isolation substantially harms the experience, Interactivity should receive a low score and a high weight. Use a low weight only when the dimension's quality has limited influence on whether this particular game succeeds.
- Conversely, a dimension can appear constantly but still deserve modest weight when improving or worsening it would barely change the complete experience.
- Set the dimension score from its quality and the weight from its experiential importance. Do not use a low weight merely to hide an uncomfortable low score, and do not use a high weight as an extra reward for a high score.
- For Aesthetics, judge weight partly by sustained exposure. When cards, boards, icons, or illustrations occupy the player's attention throughout the session, visual quality and readability are not peripheral even if the game is mechanically driven. Continuous visibility alone does not require a higher weight, however: the visual strengths or shortcomings must materially affect this game's experience, and a rationale established for one game must not be imported into another mechanically.
- A very high Replayability score does not automatically justify a high Replayability weight. Many players may repeatedly explore a game while many others only sample it; in an element-rich game, replayability can be exceptional without dominating the value of mechanics, theme, interaction, usability, and the individual sessions already played.
- When bold, high-variance cards, powers, maps, or modules deliberately widen strategic routes, score the trade on both sides: Replayability may gain credit while Balance loses numerical consistency. Do not call every imbalance an accidental development failure, but do not let the extra variety excuse or erase the Balance deduction.
- Replayability weight may be slightly higher when a game's lasting value is concentrated in recombining a smaller set of core systems, and lower when replayability is only one value among many parallel mechanisms. This is an impact judgment, not a comparison of raw content counts.
- `Mechanics` judges the structure of the rules, the decisions those rules create, and how well the systems connect. Numerical tuning affects Mechanics only when it changes whether a mechanism produces meaningful decisions or has a viable function.
- `Balance` covers both numerical tuning and play balance: card and map values, option and strategy viability, player positions, randomness, and whether local imbalances distort the complete game.
- Numerical design remains an important analytical topic in the article, especially when costs, thresholds, or resource models create a game's pressure and depth. It is not currently a separate scored dimension.
- Do not fully deduct the same defect under both Mechanics and Balance. A functionally unusable option may affect Mechanics; an option that simply returns too much or too little value belongs primarily to Balance.
- The Balance score judges the quality of balance itself: how much content remains within a reasonable value range, how fair the available strategies and positions are, and whether explicit balancing rules meaningfully correct turn order, opening variance, map choice, objectives, or player-count differences.
- A general gameplay system that merely makes residual imbalance less consequential does not improve the Balance score. Its effect belongs in the Balance weight, because it reduces how strongly Balance influences the complete game's result or experience.
- A rule may create meaningful decisions and also serve as an explicit balancing measure. Mechanics may judge its decision structure and Balance may judge its fairness effect, but do not reward the same consequence twice.
- Keep deliberate balance design separate from impact dilution. Starting compensation, controlled selection, drafting, or equalized final turns can support the score; a short loop or broad system that simply prevents an imbalance from dominating supports a lower weight.
- Do not use the vague claim that "the complete system compensates for imbalance" to raise the Balance score. Name the actual balancing rule for score credit, and name the reduced structural importance for any weight reduction.
- The overall score may include the user's personal impression, but dimension scores should try to remove personal taste where possible so the rating table remains useful to other players.
- Dimension values should be based on what the user actually described, not on what the final total "should" be.
- Do not use BGG-style `weight` as a model for this system. This rating system separates mastery difficulty from learning cost: high mastery ceiling is usually good, while high learning cost is usually a drawback.
- Public pages should display dimension scores on a 100-point scale for readability. Internal data may remain on a 0-10 scale if that keeps sorting and older data stable.
- `Depth/Complex` means a ratio-like relationship between depth and learning cost. `Depth` refers to mastery difficulty or strategic ceiling; `Complex` refers to entry cost, rules load, and teaching burden. The slash should not be read as two parallel scores. The score itself judges how well the game handles that relationship; exact depth and complexity notes should be explained in the review text.
- `Emergence` / `涌现` is a standard game-design term for complex positions, behaviors, or strategies that arise from the interaction of comparatively simple rules instead of being specified one by one. Do not use it as a loose synonym for randomness, a large content pool, combinatorial variation, or merely having many mechanisms.
- The strategic space produced by emergence primarily supports `Depth/Complex`. `Mechanics` may separately recognize how economically and coherently the rules generate that space, but do not award the same emergent result twice across both dimensions.
- Treat 10/10 as rare. For `Depth/Complex`, 10 should mean an exceptional depth-to-learning-cost ratio close to abstract-classic territory; Go is an extreme reference point and may exceed the ordinary scale.
- A 10/10 dimension score means the game is close to having no meaningful weakness in that dimension. Do not use 10 merely because a game is excellent overall, but also do not withhold 10 only because another game has an exceptional bonus feature.
- A score above 10 must be explicitly explained as an extra-special strength, not as ordinary completion and not as a way to force the weighted score upward.
- A low or zero weight can be valid when a dimension is not important to what makes the game work. For example, a game may have only moderate innovation but deserve almost no innovation weight if its value comes from integration, tuning, and execution rather than novelty.
- Do not lower Innovation simply because the design uses established, foundational mechanisms. First isolate its distinctive contribution, then judge the originality, importance, and execution of that contribution. Use historical comparisons to describe the boundary of the innovation, not as a checklist of deductions.
- Before setting Innovation to `0%`, audit whether the value of innovation or iteration has already been credited under Mechanics. If Mechanics reaches `100` partly through those strengths, a zero Innovation weight can make that credit function like perfect innovation and disadvantage games whose originality is a genuine strength. Reallocate weight instead of letting Mechanics silently stand in for Innovation.
- Any score or weight that looks surprising from the table must be explained in the article. The explanation does not need to repeat every number, but it should name the main high-weight dimensions, real deductions, and any low or zero weights.
- Separate "system-level" scoring principles from "game-level" scoring reasons. System-level principles belong in the rating overview; an individual game page should explain why this game received this score or weight.

## Baseline Weight Draft

This is a starting point, not a locked rule.

| Dimension | Default weight | What it asks |
| --- | ---: | --- |
| Mechanics | 20% | Do the rules create meaningful decisions, and do the systems connect coherently? |
| Replayability | 15% | Does the game stay alive after repeated plays? |
| Interactivity | 10% | Do players meaningfully affect each other? |
| Balance | 10% | Are numerical values, options, strategies, and player positions reasonably well tuned? |
| Depth/Complex | 10% | Does the game create meaningful depth without turning learning cost into dead weight? |
| Flow | 10% | Does play remain smooth, occupied, and proportionate to the table time it asks for? |
| Theme | 10% | Does theme meaningfully support understanding or emotion? |
| Aesthetics | 10% | Do art/components improve appeal, readability, or table presence? |
| Innovation | 5% | Does the game add something distinctive or hard to replace? |

Possible adjustments:

- Party games can raise interactivity, Flow, and accessibility-related judgment while lowering deep mechanism weight.
- Heavy strategy games can raise mechanics, depth, balance, and replayability.
- Thematic/campaign games can raise theme and long-term-structure weight; score Flow separately from narrative tempo.
- Abstract games can lower theme and raise mechanism clarity, balance, and replayability.
- Family/gateway games should treat teachability and Flow as major experience factors, even if teachability is discussed under usability rather than as a separate dimension.

## Board-Game Expansion Rating Framework

Price is excluded from every base-game and expansion rating. Regional pricing, editions, availability, and later commercial decisions are external to the quality of the design itself. A review may still criticize pricing or a sales model when it materially affects access or the ability to keep supporting official releases, but that product-level criticism must not silently lower the design score.

Expansion reviews default to two independent outputs:

1. **Quality tier** judges how well the expansion is designed and executed once enabled: mechanisms, integration, balance, depth, clarity, and whether added rules, upkeep, and time earn their place.
2. **Enable recommendation** judges who should use it, when it should be introduced, and how often a group should enable it.

Do not treat necessity as evidence of quality. A weak base game may need a merely ordinary patch, while a complete base game may receive an exceptional but optional expansion. Likewise, a high quality tier does not force an always-on recommendation; a strong niche module can be `S` and still be `按需加入`.

Do not deduct justified complexity twice. A complex expansion may remain high quality when its depth and design value repay that complexity, while its enable recommendation still keeps it out of teaching games. Complexity lowers quality only when the return is insufficient. Audience breadth, first-play suitability, and frequency never decide the quality tier or its modifier.

### Quality Tiers

| Tier | Label | Working standard |
| --- | --- | --- |
| S | 卓越扩展 | An expansion-design benchmark. Its central additions are outstanding in conception, execution, integration, and the value they return for the burden they add, meaningfully elevating the game's design. |
| A | 优秀扩展 | Its additions deliver substantial and coherent design value with a high level of execution, and their added burden is fully justified. Flaws may remain, but they do not materially limit the expansion's overall achievement. |
| B | 有得有失 | The expansion offers real and identifiable design value, but important limitations in execution, integration, balance, depth, or value relative to added burden cannot be ignored. Its strengths and problems both materially shape play, so it does not support the same clear judgment of excellence as an A-tier expansion. |
| C | 减分扩展 | Its added value clearly does not outweigh its design flaws or extra burden, and the expansion weakens the game overall. It may still contain worthwhile ideas or local strengths, but they are not enough to rescue the overall judgment. |
| F | 糟糕扩展 | Its central design does not function. Rather than improve the game, its additions systematically damage the experience. This is a design failure with almost nothing worth salvaging, even when its parts are considered separately. |

`S` through `C` are deliberately broad primary tiers, not a disguised multi-step numerical scale. `A` means that remaining problems do not materially limit the expansion's overall achievement. `B` preserves both sides of the former boundary: the expansion has real design value, while important limitations also shape the experience and prevent a clear judgment of excellence. `C` begins only when the expansion is clearly detrimental overall. Separate `D` and `E` tiers are intentionally omitted because that low-end precision is not useful here; `F` is reserved for a design failure with almost nothing worth salvaging.

The tiers from `S` through `C` may carry a `+` or `-` when the overall feel places the expansion toward the upper or lower end of that broad tier. The signs have no separate checklist, are optional, and must not be treated as additional formal levels. `F` is not subdivided. Enable frequency and audience fit remain independent and cannot determine the modifier.

### Enable Recommendations

| Label | Working standard |
| --- | --- |
| 常驻 | Can be included from the first play and belongs in nearly every session; once familiar, removing it leaves a noticeable gap in the base experience. |
| 通常加入 | Better introduced after the group understands the base game; after that, it belongs in most sessions and is normally left in. |
| 按需加入 | Depends on player count, experience, available time, interaction preference, or the session's goal. |
| 通常不加 | Include only when the group specifically wants the change it creates. |
| 建议跳过 | The return usually does not justify the added burden. |

### Integration And Attribution

Treat integration as a central criterion. Test for two-way influence:

- Do base-game resources, actions, and strategic routes matter to the new system?
- Does the new system change decisions inside the base game?

A removable module is not automatically disconnected. The warning sign is an expansion whose cards, resources, tracks, or actions mostly feed themselves, creating administration without entering the original decision network.

An expansion is responsible only for the increment it introduces. Problems inherited from the base game are context, not automatic deductions, unless the expansion clearly magnifies them. Do not deduct the same opening, balance, or usability problem again merely because the expansion operates on top of it.

### Expansion Question Coverage

Do not treat an expansion review as complete after asking only what it adds, how well it integrates, and whether it should stay enabled. Before assigning the final tier and enable recommendation, check each of the following areas and decide whether it materially matters for this particular expansion:

- the exact scope being reviewed, including edition, module, and included secondary content;
- the experience or design problem it changes, and what is gained or lost in that change;
- the quality of its new decisions, routes, interactions, and replayability rather than content quantity alone;
- two-way integration with the base game, including whether it creates a detached subsystem or extra upkeep;
- incremental effects on balance, randomness, setup, play time, downtime, and cognitive load;
- whether it gives useful direction or overdetermines the opening and reduces adaptability;
- differences by player count, experience level, solo play, and common expansion combinations when relevant;
- any real boundary or exception to the enable recommendation;
- which problems belong to the expansion and which were inherited from the base game.

These are audit lenses, not a mandatory questionnaire. Before asking anything, search the current conversation, accepted assistant syntheses, draft notes, and existing public copy. Mark each relevant area as already answered, safely inferable, genuinely unresolved, or immaterial. Do not ask the user to repeat an accepted judgment in different words, and do not manufacture a question merely to demonstrate coverage.

Use short, adaptive batches only when genuine gaps remain. A batch may contain up to four or five questions, but it may also contain one question or none. Ask only about uncertainties likely to change the quality tier, enable recommendation, or a substantive reader-facing conclusion. Use each answer to decide whether another batch is necessary. A topic may be absent from the public article because it proved unimportant, but it should not be absent merely because Codex forgot to check it.

Most expansions should remain at tier level. Particularly interesting expansions may receive a full weighted review and numerical score. In that case, make `Integration / 融合度` an explicit high-weight dimension rather than blindly copying the base game's nine-dimension matrix. The detailed score supplements rather than replaces the quality tier and enable recommendation.

Expansion detail pages belong to their base game rather than the global all-games table:

- Do not add expansions as independent rows in `all_games.html` or `all_games.js`.
- Give each base-game review an `Expansion Reviews / 扩展评测` entry area near the top of the page, after the main header and before a long article or score matrix. Completed expansion reviews should be discoverable without scrolling through the full rating breakdown; do not bury this entry at the bottom of a long sidebar.
- Open each expansion article with a short reader-facing overview that first explains what the expansion adds and how it enters the base game, then presents the verdict. Do not use `Verdict / 结论` as the first section title; an overview title should orient the reader before the detailed analysis begins.
- Link a named expansion from the relevant paragraph in the base-game article when that paragraph already discusses it; do not create a detached duplicate description only to hold a link.
- Use `public/rating/boardgame/expansions/<base-game-slug>/<expansion-slug>.html` for expansion pages.
- The expansion page's primary back navigation should return to the base-game review. The rating Overview remains a secondary link for readers who want the tier rules.
- Keep the base game's title and expansion title visible together so readers never mistake an expansion for a standalone entry.

### Current Calibration Sample: Terraforming Mars — Prelude

- Quality tier: `S / 卓越扩展`.
- Enable recommendation: `常驻，从第一局开始即可加入`.
- It adds almost no meaningful rules or maintenance burden; operationally, players are essentially playing two additional opening cards.
- It accelerates the opening, increases setup variation, establishes early direction, and improves replayability while entering the existing engine naturally.
- A new player choosing Prelude cards imperfectly is a strategy-skill issue, not evidence of extra learning burden.
- The official opening's lack of a full draft and its existing balance variance belong to the base game. Prelude adds only a small amount to that inherited variance and should not be deducted for the base game's choice unless it demonstrably amplifies the problem.

## Expansion Rules For Codex

When expanding the user's short answers:

- Keep the user's judgment, not a generic reviewer voice.
- Do not mechanically paraphrase away the user's good lines. If a sentence is clear, vivid, and accurate, keep its structure or image and only adjust the parts that are too colloquial or unprofessional for publication.
- Prefer concrete causal sentences: "This works because..." / "The problem is..." / "The score is high despite..."
- Do not silently omit user-provided points. Parentheses, caveats, and scope limits may carry important judgment. If compression removes a point or changes its scope, state the deletion reason and the meaning lost before finalizing.
- When a user provides numbered answers, treat each numbered item as a checklist. The public draft should preserve the item itself, its reason, and its scope; if an item is split across sections, verify that the logic still reads in the right order.
- When reorganizing sentence order, preserve the original scope of each claim. A caveat about one factor must not be broadened into a caveat about multiple factors.
- Preserve the relation between claims as strictly as the claims themselves. `Although A, B` is not `A therefore B`; reducing the consequences of weak balance does not improve the Balance score; a possible limit on future expansions is not evidence that current replayability is lacking. Keep the original conjunction when it carries this logic, and ask before rewriting it if the relation is uncertain.
- When the user gives a process-level correction, audit the whole active draft under that rule. Do not only fix the examples the user named.
- Do not let internal coordination sentences leak into public copy. Drafting reminders such as "these two points must be read together" should be turned into reader-facing causality or kept only in notes.
- Before inserting user-provided text into an existing page, identify which existing paragraph or logic layer it belongs to. Do not place an explanation before the concept it explains.
- After inserting public-facing text, reread the surrounding paragraphs to check that the sequence still works.
- During the reread, explicitly look for repeated explanations, especially where a new paragraph restates the same cause in different words.
- Separate personal dislike from design failure.
- Do not invent play history, player count, publication facts, awards, or component details.
- Do not call a game deep unless the text explains what mastery reveals.
- Do not call a game replayable unless the text explains what changes between plays.
- When using English terms such as `downtime`, `kingmaking`, `runaway leader`, `input randomness`, and `output randomness`, explain them in Chinese on first use.

## Drafting Loop

Default collaboration loop:

1. Codex identifies the target game and reads the existing page/data pattern.
2. Codex asks Batch 1 and Batch 2 questions.
3. User gives short answers.
4. Codex drafts opening, positioning, and core experience.
5. Codex asks Batch 3 and game-specific questions.
6. User gives short answers.
7. Codex drafts design analysis.
8. Codex asks Batch 4 and Batch 5 questions.
9. User gives short answers.
10. Codex drafts rating breakdown and recommendation boundary.
11. Codex checks whether the score table, written judgment, and list data agree.
12. Only after the user confirms the public-facing draft should Codex make broad copy changes to website pages.

For low-risk template work, Codex may create a local draft file before website integration. For public webpage changes that affect tone, structure, or score, ask before final insertion unless the user explicitly requested direct implementation.

## Practical Iteration Method

This section records the working method learned from the first detailed entry, `Brass: Birmingham`.

### 1. Collect The Raw Judgment

Start from whatever the user already has: a short app comment, scattered notes, a score feeling, or a few complaints. Do not treat shortness as lack of content. The user's short notes often contain the real thesis, scope limits, and ranking logic.

When the user pastes a prior comment:

- identify the strongest usable claims;
- identify phrases that are vivid and worth preserving;
- identify phrases that are too casual for public copy;
- separate personal emotion from public-facing judgment;
- do not delete anything substantive without recording why.

### 2. Ask Focused Questions

The user prefers short answers. Ask small batches of questions that can be answered briefly. Each batch should include:

- one or two framework questions required by the rating system;
- one or two game-specific questions tied to reputation, controversy, player count, mechanisms, or common discussion points;
- one scoring-calibration question only after the design judgment is reasonably clear.

Avoid asking permanent boilerplate questions that do not matter for the current game. For example, number of plays is not always a standing question; player-count differences may matter much more.

Do not use the most recently reviewed game as the default comparison point merely because it is fresh in the conversation. Comparisons should come from genuinely similar games, shared mechanisms, shared audience, or a real public debate around the target game.

Finding those comparison points is Codex's research responsibility. Do not ask the user to supply examples merely because the article needs a comparison set. Before evaluating a broad hybrid game, research a small mechanism-reference map and present the strongest candidates with the exact point of resemblance. The user should be asked whether the comparison matches their play experience, not made responsible for discovering the comparison in the first place.

Distinguish documented influence from analytical resemblance. A designer interview or design diary may support wording such as "inspired by"; a review, rules comparison, or shared mechanism supports only wording such as "resembles," "recalls," or "offers a useful comparison." Never turn visible similarity into an unsupported claim of direct borrowing.

When the discussion proceeds mechanism by mechanism, include the relevant comparison candidates in each question. This gives the user a concrete frame for agreement, disagreement, and refinement without requiring them to generate a game catalogue from memory.

For broad hybrid games, do not ask for one single "core fun" or "main problem" too early. Split the discussion by mechanism or experience module first, then synthesize the core judgment after the parts are understood.

Expansion is a tool for incomplete short answers, not a mandatory rewrite step. Distinguish between source types: a short comment imported from Jishi or another social platform may need its emotional or highly colloquial wording adjusted for a public portfolio article, while answers produced through the review Q&A are already article drafts by default. When a Q&A answer is clear and substantial, treat its wording, cadence, and point of view as the canonical copy. Do not paraphrase it merely to make the work look more polished or more transformed, and do not turn natural prose into definition-heavy or report-like language. Make only necessary corrections to transitions, terminology, grammar, factual accuracy, or genuinely unsuitable public tone, and never remove substantive arguments, caveats, or examples.

Preserve precision according to the quality of the evidence, not according to how technical or specific it sounds. A concrete, mechanically checkable example such as an exact resource loss, timing sequence, card interaction, or before/after value should remain exact. A personal result, disputed strength ranking, or causal explanation such as why one asymmetric map is stronger should be scoped as the user's observation, qualified with evidence, or omitted when the causal detail is unnecessary. Do not blur a verifiable example merely to make the article sound less technical.

When improving flow, default to additive transitions and orientation sentences. Do not rewrite, delete, compress, or split an existing Q&A passage merely to make it smoother without first showing the user the original and the proposed change. Additions are allowed when they preserve the existing argument; changes to existing copy require explicit approval.

### 3. Expand Without Flattening

After receiving answers, expand them into public prose by preserving:

- the claim;
- the reason;
- the scope limit;
- the tradeoff;
- the user's distinctive phrasing when it carries meaning.

Expansion is allowed. Silent deletion is not. If compression is necessary, state what was removed and why before finalizing. Parenthetical notes may be central; do not assume they are optional.

### 4. Keep System Rules And Game Reasons Separate

System-level principles belong in the rating overview or this workflow document. Game pages should explain the specific game's score and weight logic.

Examples:

- System-level: "dimension scores should not be inflated to match impression scores."
- Game-level: "`Brass: Birmingham` gives innovation low weight because its value comes from tuning and integration, not novelty."

Do not place internal workflow reminders in public copy. Convert them into reader-facing causality or remove them.

Do not turn a correction from the private drafting conversation into a rebuttal against an imaginary reader. If the user corrects an overclaim such as "this is not innovative," the public article should simply describe what the mechanism does and where its value lies; it should not announce that the mechanism is "not a new idea" or "should not be treated as innovative" unless that misconception is independently relevant to readers. Audit defensive phrases such as "not merely," "cannot simply be called," and "it should first be made clear" for the same problem.

Do not justify a public result by paraphrasing the rubric back to the reader. Sentences such as “these strengths and flaws are exactly B-tier territory” or “these local problems explain why the box sits below S+” merely map the article onto an internal definition. State what the strengths and flaws actually make players gain, lose, include, or omit; reserve the tier label itself for the overview and final recommendation.

Do not narrate calibration history in a finished game page. Phrases such as “one percentage point moved from Balance to Replayability” or “this part is scored under Mechanics rather than Replayability” belong in drafts. Public prose should explain the current score and weight through the game's actual effects, not how the numbers were negotiated. Scope paragraphs should define the evaluated content without previewing the article's section order.

### 5. Integrate Score Logic Into The Relevant Sections

Avoid a detached "score and weight logic" block when it makes the article choppy. If mechanics carries the highest weight, the mechanics section should explain why. If replayability is the main deduction, the replayability section should explain the score and why it does or does not affect the overall verdict.

A table alone is not enough. Readers should be able to understand the score from the prose.

### 6. Build A Draft Before The Webpage

For a substantial review, keep or create a draft note under `docs/drafts/` before final website integration. The draft should preserve:

- raw user judgments;
- current scores and weights;
- important caveats;
- phrases that must not be lost;
- public-copy warnings such as "do not broaden this caveat."

The public page can be shorter and smoother, but the draft protects meaning during compression.

### 7. Review Against The Raw Answers

Before calling a draft ready, compare it against the user's answers point by point:

- Is every numbered answer represented?
- Build a source-to-page coverage list for every substantial Q&A paragraph and every later correction. Record its public location or the explicit reason it is intentionally non-public.
- Check complete arguments, not keyword presence. A claim scattered across several sections does not count as preserved if the reader can no longer follow its reason, example, scope limit, and conclusion as one argument.
- Compare concrete numbers, examples, temporal order, causal direction, and evaluative sentences. Replacing a specific example with a vague equivalent can lose meaning even when the topic remains present.
- Did any scope caveat get broadened?
- Did any important parenthetical point vanish?
- Did a sentence move before the paragraph it explains?
- Did a later insertion duplicate an earlier explanation?
- Did the prose accidentally turn a tradeoff into a flaw, or a personal preference into an objective defect?
- Run the comparison in reverse as well: identify public claims that come from Codex research or synthesis rather than the user's judgment, and confirm that they were requested, verified, or clearly framed as analysis rather than silently attributed to the user.

This check is mandatory when the user has already said that material was lost or distorted.

### 8. Sync Website, List Data, And Links

When the review page changes score or title data, update the relevant list data in the same pass:

- the detail page score block;
- the detail page rating breakdown table;
- `public/rating/boardgame/ratinglist_bg/all_games/all_games.js`;
- the total list page link to the detail page;
- the board-game rating home page link if the game is promoted there.

After updating, recalculate the weighted score and verify that the displayed score matches the data source.

## Game-Specific Discussion Prompts

For each game, add 3-6 targeted questions beyond the standard batches. They should come from the game's actual reputation, genre, or likely controversy.

Examples:

- For a highly ranked BGG game: "Does the reputation match the actual experience, or does the ranking reward a specific hobbyist taste?"
- For a heavy euro: "Does optimization create varied decisions, or does it become a spreadsheet with components?"
- For a cooperative game: "Does cooperation create shared planning, or does it collapse into alpha-player control?"
- For a party game: "Is the fun produced by the rules, the group, or the social excuse the game creates?"
- For a campaign game: "Is the long-term progression worth the administrative overhead?"
- For a game with strong theme: "Would the mechanism still work if the theme were removed, and would that make the game weaker?"
- For a game with high randomness: "Does randomness create adaptation, drama, or only noise?"

## Output Checklist

Before considering a board-game rating entry ready:

- The article states the object and context before critique.
- The title/header reads naturally to a first-time reader and does not rely on private shorthand from the chat.
- Header tags or pills describe the game's core identity, not a secondary caveat that belongs in the body.
- Rating tables should remain scan-friendly on normal desktop widths. Use compact column labels and stable column widths rather than forcing horizontal scrolling for ordinary comparison.
- The score has a plain-language feeling tier.
- The weighted score and written judgment do not contradict each other without explanation.
- Any unusual weight has a reason.
- Score and weight logic is explained in prose, not only shown in the table, and it is integrated into the relevant sections unless a separate scoring section is genuinely clearer.
- The user's original answer points have been checked against the finished draft; missing or compressed points have explicit reasons.
- Personal taste and broader recommendation are separated.
- The article explains at least one specific mechanism and one specific experience.
- The recommendation boundary is clear.
- Bilingual text, if present, is not just mechanical translation when Chinese and English readers need different context.
- All website paths are relative.
- No temporary TODO or external local path is referenced.

## Website Implementation Checklist

Use this checklist after writing or editing a rating page.

### Data And Score Sync

- The detail page's primary weighted score matches the rating breakdown table.
- The impression score is shown as a separate value and is not forced to equal the weighted score.
- The `all_games.js` row uses the same scores as the detail page.
- The weighted score calculation is checked manually when weights or scores change.
- The game title and localized title are correct in both the detail page and total list.
- Links between the detail page, board-game rating home, and all-games table work with relative paths.
- If a cache-busting query string is added to a local JS file, it should be updated only to solve browser cache issues and remain relative.

### Bilingual Text

- Chinese pages use the proper Chinese title, not a shorthand copied from chat unless it reads naturally in body prose.
- English-visible labels are English; Chinese-visible labels are Chinese.
- Do not leave mixed labels such as public Chinese headings that depend on English system terms unless the English term is the intended public term.
- For `Depth/Complex`, the public Chinese label can be `深度/成本`; the fuller explanation belongs in overview prose or hover/title text if needed.
- Recheck visible text after editing Chinese HTML to avoid mojibake or accidental shorthand.

### Table Layout

- Keep rating breakdown columns in a fixed dimension order across games and list pages.
- Do not sort rating dimensions by weight in the visual table; changing order makes cross-game comparison harder.
- The all-games table should be scan-friendly on normal desktop widths.
- Game names can wrap to two lines, but must be left-aligned and vertically centered.
- Give content rows enough height for two-line game names with visible top and bottom breathing room.
- Numeric score cells should be visually centered, including the final weighted score column.
- Dimension headers should avoid unnecessary wrapping. If full English terms force ordinary desktop scrolling, prefer stable short labels with clear hover text rather than cramped wrapping.
- The sort icon should stay inline with the header text and should not drop to its own line.
- Do not make the game column so wide that dimension columns become unreadable.
- Do not make dimension columns so narrow that labels become cryptic or mixed-language.
- Keep score colors semantically consistent across detail pages and list pages. Red is reserved for low or negative scores; an above-ceiling bonus score uses the same positive color family as other high scores.

### Reader Pass

- Read the page as someone who did not see the chat.
- Check whether the title, opening verdict, section headings, and score cards make sense without private context.
- Remove internal coordination phrases such as "these two points must be read together."
- If a sentence exists mainly to explain the drafting process, move it to this workflow file rather than leaving it in public copy.
- Make sure each section's first sentence introduces the topic before explaining the score consequence.

### Verification

- Run syntax checks for edited JS files, such as `node --check`.
- Run `git diff --check` for touched files.
- Search touched HTML/JS for absolute local paths such as `D:\` or `D:/`.
- Search for old labels after renaming dimensions.
- If no browser screenshot or visual run was performed, say that honestly in the final response. Do not imply visual QA was done when only source checks were done.
