# Adoption Roadmap — SCRBRD Athletic Broadcast UI Kit

**Source constraint:** the genuine SCRBRD_3D app export was unavailable in this conversation (the earlier tar.gz was a cookie verification page). This is a standalone demonstration and optional React source. It is **not** merged into a live application.

## 0 — Visual approval

Review the standalone UI Studio at desktop and mobile widths in dark/light, including the updated FOX-inspired scorebar. Get sign-off for three highly influential details: team font width, batter name compression and flat horizontal ramps. Do not apply the full palette globally just because a screen looks cinematic.

## 1 — Engineering discovery

Audit actual repo when the source is supplied: routing, styles, state, cricket data model, event replay/corrections, teams and schools, tenancy and permission checks. Establish an untouched baseline and run its tests.

## 2 — Design tokens and school registry

Introduce `src/tokens.css`, the validation helpers in `src/brand.mjs`, and the school branding schema. **Extract/namespace component CSS before integration** — the standalone showcase has broad demo selectors such as `.card` and `.view` that could collide with an established app. Store approved palettes and maintain tenant/season history. Verify contrast from both light/dark surfaces and two-team clashes.

## 3 — Read-only broadcast components

Integrate `<ScoreStrip/>` and `<MatchSummary/>` using authoritative, tested match view models. Do not publish synthetic results or allow score entry through spectator UI. Validate over counts, batting order corrections, delivery extras, and fielding-team accent.

## 4 — Dashboard and cards

Refactor one role dashboard at a time: Spectator Match Centre → Player Profile → Coach Analytics → Admin. Reuse the same type and colours but change density and motion rules for each role. Avoid false consistency, e.g. turning match cards and government-style invoices into identical glowing tiles.

## 5 — Interaction/motion QA

Keyboard, high contrast, low-end phones, reduced motion, offline scoring. Transition animations should never hold event commits or intercept scrolling.

## 6 — Go/no-go

Before shipping require visual reference diff approval, working builds/tests, signed-in role journeys, multi-school tenant isolation, school media rights, POPIA for minors and approval of the actual release. Keep releases staged and rollbackable.

## Developer starting points

- `SCRBRD_UI_KIT_INTERACTIVE.html` — self-contained, opens without server.
- `index.html` + `src/*` + `assets/*` — editable modular source.
- `src/brand.mjs` — colour and cricket notation utility examples; 10 Node test cases.
- `src/react/*` — optional typed presentational component starting points (requires host React project and peer deps; not compiled here).
- `schemas/school-branding.schema.json` — proposed registry data model.
- `data/illustrative-schools.json` — sample values only; not official branding.
