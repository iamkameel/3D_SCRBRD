# SCRBRD Athletic Broadcast — Component Catalogue

The UI Kit is a set of **visual and behavioural primitives**, not a catalogue of animations for their own sake.

| Family | Components and variants | Priority | Role / behaviour |
| --- | --- | --- | --- |
| Foundation | Typography scale, colour modes, spacing, radii, borders, shadows, focus rings | P0 | Entire app |
| Brand | School crest/monogram, team label, identity stripe, contrast-safe capsule, clash indicator | P0 | All school-aware views |
| Broadcast | `ScoreStrip`, active/inactive batters, fielding figures, over ledger, chase/result ribbon | P0 | Spectator, scorer read-only header |
| Match | Innings summary, fixture matchup, toss/status, over summary, player bowling/batting split | P0 | Match Centre / scorecard |
| Control | Button/quiet button/destructive, chip, segmented, select, input, tab, toast | P0 | All roles |
| Overlays | Contextual popover, modal confirmation, drawer, bottom sheet, action menu | P0 | Role-aware interactions |
| Cards | Hero, compact KPI, trend, player, fixture, achievement, match feed, comparison | P1 | Dashboards, profiles |
| Analytics | Manhattan chart, run-rate trajectory, wagon wheel, bowling map (future tracking), series key | P1 | Coach / analyst / player |
| Role navigation | Navigation rail, bottom navigation, role switcher, breadcrumbs, search | P1 | All roles |
| Broadcast events | Wicket takeover, free-hit notice, over complete, new-ball, milestones, confirmed result | P1 | Spectator only; scoring state never blocked |
| Athlete journey | Player bio/consent-checked media, performance history, training progress | P1 | Player / coach / parent-scoped |
| Administrative | School branding approval wizard, roster importer, roster table, errors, audit previews | P2 | School Admin / Super Admin |
| Logistics | Venue card, transport manifest, confirmation statuses | P2 | Logistics / staff |
| 3D media | Stadium background, progressive depth view, optional spatial trajectory | P2 | Feature experience with static fallback |

## Interaction states required for each component

Default, hover, focus-visible, active, selected, disabled, loading/skeleton, empty, validation error, permission denied, offline, reduced-motion and mobile. A *design-complete* component ships with all states, not merely an attractive default screenshot.

## Existing working demonstration

- ScoreStrip and duplex batter capsule (team colour derived at render).
- Summary board (demo innings rows).
- Bento KPI, illustrative form, wagon wheel, Manhattan and trend chart.
- Dynamic school colour lab and contrast/collision checks.
- Buttons, chips, segmented tabs, modal, toast, drawer and bottom sheet.
- Multi-mode light/dark, responsive desktop and phone layouts.

## Not yet production components

- Roster and role-driven permissions, reliable scoring actions and sync/replay, 3D engine, advanced chart data, official school logos, persistent theme configuration.
- Native gesture recognisers and fine-tuned animation curves; the HTML demos use basic pointer/click interactions.
- True wicket animation tied to an event stream; the current takeovers are illustrative states only.

## Definition of Done for production

1. Data model and role permission contract documented.
2. Component passes dark/light/mobile/keyboard/reduced-motion checks.
3. Snapshot and state tests cover edge cases, long surnames and team clashes.
4. Performance budget, data freshness and offline behaviour considered.
5. No unexpected modifications to the scorer's event stream or user consent rules.
