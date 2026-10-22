---
name: SCRBRD Athletic Broadcast UI Kit
version: 1.0.0-proposed
status: design-review
source_direction: Athletic Broadcast Fidelity Pass 03
source_research: FOX Cricket 2024-25 forensic review of user-supplied footage
colour_modes: [dark, light]
accessibility_target: WCAG 2.2 AA
---
# SCRBRD — Athletic Broadcast UI Kit

## Purpose

Translate the approved **FOX Cricket-inspired craftsmanship** into a reusable, original sports product system: accurate data hierarchy, elegant team-aware colour ramps, capsule geometry, restrained material layering and distinctive athletic presentation. Do **not** reproduce FOX logos, proprietary artwork, player photographs, sound or fonts.

The earlier SCRBRD six-phone concept remains the emotional reference. The broadcast graphics are one component family **inside** the wider application, not a replacement for the rich bento, cinematic imagery, analytics and spatial navigation.

**This kit is a design and development hand-off.** It is not integrated with SCRBRD's scorer, backend, auth or production repository. It uses illustrative school palettes and match data.

## Four design layers

1. **Broadcast layer**: matte near-black plates, minimal outer radii, strong score and innings hierarchy, one outlined two-batter capsule, flat left–right active-team gradient, slightly raised inactive charcoal segment, dimensional but restrained crests, fielding-team bowler accent, cricket-correct delivery ledger.
2. **Athletic layer**: expressive sports photography, carefully varied bento-card scale, powerful editorial typography and meaningful colour pops. The reference six-screen aesthetic must remain visible beyond live cricket.
3. **Spatial interaction layer**: selectively translucent navigation, floating sheet/drawer/popover affordances, restrained depth, response to hover and gesture. Never put translucent glass behind high-density live numbers.
4. **Operational layer**: predictable, low-motion, keyboard- and touch-friendly scoring, admin and logistics controls. Function comes before cinematic effects.

## Typography — treat font roles as product architecture

| Token | Initial family recommendation | Weight / detail | Usage |
|---|---|---|---|
| `--font-brand` | Syne | 800–900 | Editorial heroes, major feature headlines, achievement launches |
| `--font-team` | Inter Display | 800–900; wide uppercase | Team identifiers, navigation headlines, match context |
| `--font-batter` | Noto Sans Display Condensed | 700–900; naturally condensed | Batter names in a shared capsule |
| `--font-score` | Barlow Condensed or approved athletic numeral family | 800–900 + tabular figures | Overs, innings totals, batters' runs, headline statistics |
| `--font-ui` | DM Sans, benchmark against Open Sans | 400–800 | Body, inputs, tooltips, charts, tables, buttons |

Family availability and licensing must be checked before deployment; CSS contains robust system fallbacks. Do **not** distribute commercial font files, scale glyphs horizontally, use only font weight to signify role, or apply brand display type to dense tables. At 200% zoom, critical content must remain readable without disappearing offscreen.

Recommended sizes: display 48–72px desktop; screen headline 30–44px; card headline 16–22px; body 16px; secondary 14px; minimal utility 12px when contrast and space permit. Broadcast score is context-driven 40–88px. Token sizes are starting points, not claimed FOX originals.

## Colour responsibilities

- **System colours**: foreground, background, border, focus, danger, live status, warnings and validation — **global**, stable, accessible in light/dark.
- **Institution identity**: school-approved primary, secondary, crest and approved kit variants — **school-scoped** and revision-controlled.
- **Team identity**: references its school, may carry season/team-specific approved kit overrides — **team/season-scoped**.
- **Match appearance**: resolved from batting team, fielding team, innings, venue context and accessibility needs — **fixture-scoped**.
- **Data series**: use stable chart palette that remains decipherable without colour; school colours are not automatically win/loss hues.

**Never infer a school colour from a name or badge photo and call it official.** The UI Kit's sample palettes are labelled unverified. Never silently recolour a school's identity to avoid a contrast collision. Add clear team crests, labels and optional patterned trims.

### Colour ramp / ink rule

Use one **flat horizontal** gradient for the active striker, with no vertical specular glare, three-dimensional bevel or bouncing plastic effect. Derive two conservative end colours from approved team tokens, then adjust for one shared readable ink colour. Target ≥4.5:1 contrast at **both ends** for small text. Do not assume a bright/luminous colour supports white text. The inactive batter gets a slight charcoal lift above the plate. The overall plate stays matte.

The source code uses WCAG relative luminance arithmetic and a *rough* CIELAB DeltaE76 clash check. That match screening is an early warning, not an official brand comparison or substitute for design review.

## Surface system

- `broadcast-bg` / `broadcast-raised` — opaque, near-black, low corner radius, high-contrast live figures.
- `panel` / `panel-2` — reliable matte cards for data and controls.
- `glass` — navigation, overlays and secondary floating UI only, with legible fallback.
- `editorial` — image-backed cards with controlled scrims, optional gradient light and foreground typography.
- `elevated` — floating sheet, drawer or detail panel with neutral shadow, not artificial neon borders.

Hero images should be original/licensed. Player minors require appropriately scoped media permission and role-based visibility.

## Motion hierarchy

- Button touch/press: ~100–160ms; tab/filter: 140–200ms.
- Cards and disclosures: ~200–280ms; drawers and sheets: 250–360ms, damped easing.
- Match event takeover: only after verified event, with spectator-driven motion, simple **read-only** interim graphic and return to score. Never block an active scorer.
- Reduced-motion mode removes nonessential movement while preserving status changes.

## Components shipped as illustrative examples

- App shell, left rail and compact mobile navigation
- Broadcast ScoreStrip with active/inactive batter capsule and delivery indicators
- Innings summary board
- Hero, player focus, compact scoreboard and team matchup
- KPI/trend cards, chart cards, fixture, achievement card
- Pill, chip, segmented control, tab strip, button system, school identity badge
- Contextual drawer, bottom sheet, confirmation and toast
- Color identity editor and school clash/contrast check

Reusable optional React/TypeScript views: `src/react/ScoreStrip.tsx`, `src/react/MatchSummary.tsx`, `src/react/StatTile.tsx`. The interactive design lab uses dependency-free DOM scripts, not production scoring data.

## Cricket and product semantics

- Overs are **legal balls** notation: `28.3` means 171 legal balls, not 28.3 decimal overs.
- A wide or no-ball changes the event ledger without consuming a legal delivery.
- A SCORE_STRIP component may render a state, but cannot mutate an event.
- Fixture status, player performance, target adjustment, disciplinary or medical information must come from an authorised and verified source; no values fabricated at render time.
- Roles and school tenants remain isolated; spectators are read-only, scoring is explicit opt-in.
- Match corrections require a durable replay/re-aggregation strategy before republishing scorecards.

## Accessibility/acceptance

Meet WCAG 2.2 AA where applicable, keyboard tab order, visible focus, 44px recommended touch targets, adequate contrast, semantic status icons/text, accessible charts/data alternatives and reduced-motion behaviour. Snapshot desktop/tablet/mobile in both themes. No component is approved merely because a screenshot looks attractive.

## Approval gates

1. Visual craft compared with Pass 03 (typography, gradient, material and geometry).
2. School brand records verified and versioned; user-configured demo values **not** production colours.
3. Real SCRBRD source app supplied and architecture audited before merging or replacing styles.
4. Scorer/spectator role journeys and cricket calculation regression tests passed.
5. Production build, accessibility and device testing passed, with formal deployment approval.

See `VISUAL_DESIGN.md`, `docs/COLOUR_IDENTITY_ARCHITECTURE.md` and `docs/COMPONENT_CATALOGUE.md`.
