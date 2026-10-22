# SCRBRD — Visual Design Reference / Athletic Broadcast UI Kit v1.0

## The benchmark we are preserving

Fidelity Pass 03 (the previously approved reference project) reproduced key details from the user-supplied FOX Cricket frames. The next step is productisation **without losing the original craft**:

- Flat left-to-right team gradient rather than raised-plastic effect.
- Inactive batter compartment is slightly lighter than the broadcast strip.
- One shared pale capsule outline; small striker triangle follows the active batter.
- Team names: **wider, heavier and uppercase**. Batter names: naturally condensed. Score numerals: stable, large, easy to read at a glance.
- Team crests with faint separation shadows but no garish neon halo.
- Bowling side statistics use fielding-team colour. Match-context ribbon is dark, quiet and consistent.

## Where it changes in the app

| Touchpoint | Broadcast craftsmanship | Athletic/spatial experience |
|---|---|---|
| Live spectator/Match Centre | Persistent score, current partnership, bowler, balls, chase | Cinematic event environment; match-media and analytical bento |
| Live scorer | Compact score, legible over actions | Stable controls; no blocking animation; clear invalid/error/correction states |
| Player profile | Selected performance panel and stats hierarchy | Character-led portrait with data cards, training story, achievements |
| Coach cockpit | Clear metric comparisons, team badges | Analytics bento, form indicators, filters and progressive disclosures |
| Fixture/competition | Team colours and head-to-head identity | Editorial cards and event status, schedule transitions |
| School administration | Trusted tokens and accessible form controls | Calm version of the same brand; minimal atmospheric effects |
| Awards and records | Big athletic statistics and short event ribbon | Celebratory art direction, meaningful motion, player/school identity |
| 3D/statistical visualisation | Small, fixed typography overlays | Optional spatial interactions and touch gestures; data always accessible without 3D |

## Five visual material families

1. **Hero** — editorial photography, space to breathe, controlled scrim, athletic display type.
2. **Broadcast strip** — dark opaque rectangular foundation, purposeful capsule edges and tiny internal layering.
3. **Bento** — modular cards with varied span, rounded corners, legible data and small chromatic moments.
4. **Glass chrome** — sparingly in navigation, sheets and anchored contextual layers.
5. **Operational controls** — predictable size, shape, targets and stable feedback; no bloom behind critical text.

## Representative examples

- Interactive specimen: `SCRBRD_UI_KIT_INTERACTIVE.html` (single self-contained file).
- Overview: `previews/01-overview-desktop.png`.
- Components: `previews/02-components-desktop.png`.
- School colour studio: `previews/03-school-colours-desktop.png`.
- Broadcast family: `previews/04-broadcast-desktop.png`.
- Light mode: `previews/06-overview-light.png`.
- Mobile: `previews/07-overview-mobile.png` and `previews/08-broadcast-mobile.png`.

These screenshots are produced from an original HTML/CSS/JS demo and **not from SCRBRD's live React app**. All athletes and scores in the demo are illustrative. School colours are not official.

## Typography governance

Inter Display Heavy (team labels) and naturally condensed Noto Sans Display (batters) were chosen for the visual study; neither is asserted to be FOX Cricket's proprietary font. The expression layer uses Syne, while body and data controls specify DM Sans / Inter fallbacks. Test typography against long South African school names and diverse surnames. Consider a compact number face, but reject any numeral design that looks impressive while making `2–34 7.3` difficult to parse.

## Adaptation to school registries

Never assign a global UI accent based on whichever school is viewed. Scope institutional colour variables only to the relevant school or match component. The same Coach dashboard may show multiple schools/teams at once, so a single page-wide brand override would be misleading. Preserve light/dark semantics and stable chart colours.

## Non-goals

No exact reproduction of broadcaster protected logo/identities for production; no licensed asset distribution; no fake official kit colours; no claims that the demo is connected to live scoring, auth, personal health or tenant data.
