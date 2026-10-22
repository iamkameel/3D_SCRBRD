# School & Team Colour Architecture — SCRBRD v1.0

## Design problem

SCRBRD is a multi-tenant school-sports platform. A fixture can feature two institutions, multiple squads, season-specific kits, a neutral competition and distinct broadcast and analytic presentations. **A school is not a CSS theme**, and a team is not always visually identical to the wider school brand.

School identity must therefore be modelled as data and resolved at the component/fixture level. It must never hijack semantic colours for errors, warnings, wins/losses, injury or live recording.

## Identity hierarchy

```text
School record (schoolId)
   └── School brand revision (approval, colour set, crest assets)
         └── Team (teamId, seasonId, divisionId)
               └── Approved kit/competition overrides
                     └── Resolved match identity (home/away, batting/fielding)
                           └── Scoped UI appearance tokens
```

### School identity record

`schoolId`, `name`, `shortName`, `initials`, `verifiedStatus`, `primaryHex`, `secondaryHex`, optional accent/neutral, crest variants (dark/light/monochrome), media usage licence, approval provenance, effective dates and change history. Treat colours as versioned brand facts, not convenient constants.

### Team identity record

`teamId`, `schoolId`, `seasonId`, `divisionId`, display name, approved team crest and kit palette overrides where school authorises them, including home/away/alternate. Team names and historical names should not imply a new school record.

### Match identity resolution

At render time resolve *two* identities. The batting side controls score and striker capsule. Bowling side controls bowling figures/crest. Explicit match states (LIVE, WICKET, FREE HIT, NO BALL, delayed, suspended, result) are separate. Competition sponsor branding must not replace school/role colours without a deliberate event package.

## Palette resolution algorithm

1. Confirm school or team **approved** palette, otherwise show provisional theme with an approval warning.
2. Determine home/away and batting/fielding context.
3. Set a restrained horizontal (`90deg`) gradient from approved primary/secondary values.
4. Select a single foreground colour that reaches a 4.5:1 contrast ratio at both ramp endpoints. If necessary, nudge the **display ramp**, not the stored official colour.
5. Derive a readable text accent for the surrounding dark or light surface.
6. If identities appear visually close, retain official colours and add clear crest, name, alternate outline/pattern or approved secondary accent. Do **not** silently recolour either school.
7. Scope resulting vars to the matched component. Do not change the global `--danger`, `--good`, `--warning`, `--action` or chart-series semantic values.
8. Cache resolved theme by school/team palette revision + context, invalidating when the approved revision changes.

## Model schema / UI storage

The example JSON schema is at `schemas/school-branding.schema.json`. `data/illustrative-schools.json` is explicitly mock data. The actual back end may use relational tables or Firestore collections, but must preserve history, approvals and tenant boundaries.

Suggested additions to SCRBRD's existing schema:

```text
school_brands(schoolBrandId PK, schoolId FK, revision, status, validFrom, validTo,
  primaryHex, secondaryHex, accentHex?, neutralHex?, paletteSource,
  approvedBy FK?, approvedAt?, creatorId FK, createdAt, notes)

school_brand_assets(assetId FK, schoolBrandId FK, variant, approved, licence, altText)

team_kit_variants(kitId PK, teamId FK, seasonId FK, variant, primaryHex,
  secondaryHex, crestVariantId?, status, approvalHistory[])
```

Prefer immutable approved revisions, never in-place untraceable overwrites. Test the same team across seasons with different identities.

## Validation and failure states

- Invalid hex or colour without accessible text → clear inline warning, do not silently save.
- Identical school colours on both sides → retain both colours, use crests + labels + approved differentiating treatment.
- Unverified brand record → preview permitted for authorised staff, no public claim of official branding.
- Missing crest → neutral monogram with school name, never impersonate or scrape copyrighted imagery.
- Team override without sign-off → use approved school-level palette until approved.
- Data confidentiality → branding can be public where authorised, but school role/medical/child consent records cannot leak through badge APIs.

## Chart and semantic colour policy

A win should not automatically become green for every school. Reserve globally consistent semantic colours for validation, states and alerts. Data viz uses an accessible categorical/continuous chart palette with explicit labels, keyboard alternative and per-team crests/swatches for head-to-head.

## Sample mismatch example

Two schools each have similar blue primaries: `#136CC8` and `#1B71CB`. A colour-distance warning appears, but both brands remain intact. The broadcast strip keeps the school's verified crest and uppercase name; an optional secondary trim or patterned ring differentiates the teams. User-visible settings explain the override.

## Approval / governance checklist

- Institution authorised representative confirms palette and crest rights.
- Brand owner verifies dark/light/mono variants and stored SVG accessibility.
- Design reviews accessibility of derived ramp and text, including mobiles and TV projections.
- QA tests crest fallback, colour clash, historic season, active team switching, school deletion/merger and updates during a live fixture.
- Audit logs record every palette change; tenants cannot change other schools' data.

**Note:** DeltaE76 used in `src/brand.mjs` is a rough perceptual screening heuristic, not an accurate industry-standard DeltaE2000 colour proof. Human review and official kit data take precedence.
