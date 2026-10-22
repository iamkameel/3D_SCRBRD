/**
 * SCRBRD SCHOOL & TEAM COLOUR IDENTITY ARCHITECTURE ENGINE (v1.0)
 *
 * Implements:
 * 1. Verified South African School Brand Registry (Primary, Secondary, Third kit hexes)
 * 2. WCAG 2.1 Relative Luminance & Contrast Ratio Engine
 * 3. Automatic 7-Token School Ramp Generator:
 *    - --school-primary
 *    - --school-secondary
 *    - --school-ink-on-primary
 *    - --school-accent-on-dark   (>= 4.5:1 on #12161E)
 *    - --school-accent-on-light  (>= 4.5:1 on #E3E7DD)
 *    - --school-primary-surface  (12% alpha fill)
 *    - --school-primary-border   (32% alpha border)
 * 4. CIE76 Lab Perceptual Distance (ΔE76) & Two-Team Matchup Clash Resolver (ΔE76 < 22)
 */

export const VERIFIED_SCHOOL_BRANDS = [
  {
    id: "HIL",
    abbr: "HIL",
    name: "Hilton College",
    city: "Hilton, KZN",
    region: "Midlands",
    founded: 1872,
    primaryHex: "#003366",
    secondaryHex: "#C8A951",
    thirdHex: "#FFFFFF",
    motto: "Orando et Laborando",
    venue: "Hart-Davis Oval",
  },
  {
    id: "MIC",
    abbr: "MIC",
    name: "Michaelhouse",
    city: "Balgowan, KZN",
    region: "Midlands",
    founded: 1896,
    primaryHex: "#8B0000",
    secondaryHex: "#FFD700",
    thirdHex: "#FFFFFF",
    motto: "Quis Ut Deus",
    venue: "Roy Gathorne Oval",
  },
  {
    id: "MCB",
    abbr: "MCB",
    name: "Maritzburg College",
    city: "Pietermaritzburg, KZN",
    region: "Midlands",
    founded: 1863,
    primaryHex: "#003366",
    secondaryHex: "#CC0000",
    thirdHex: "#000000",
    motto: "Pro Aris et Focis",
    venue: "Goldstones",
  },
  {
    id: "KEA",
    abbr: "KEA",
    name: "Kearsney College",
    city: "Botha's Hill, KZN",
    region: "Midlands",
    founded: 1921,
    primaryHex: "#8B0000",
    secondaryHex: "#003087",
    thirdHex: "#FFFFFF",
    motto: "Carpe Diem",
    venue: "AH Smith Oval",
  },
  {
    id: "DHS",
    abbr: "DHS",
    name: "Durban High School",
    city: "Durban, KZN",
    region: "Coastal",
    founded: 1866,
    primaryHex: "#002B5C",
    secondaryHex: "#FFD700",
    thirdHex: "#006400",
    motto: "Deo Fretus",
    venue: "Theobald Oval",
  },
  {
    id: "WES",
    abbr: "WES",
    name: "Westville Boys' High",
    city: "Westville, KZN",
    region: "Coastal",
    founded: 1955,
    primaryHex: "#800000",
    secondaryHex: "#003366",
    thirdHex: "#C0C0C0",
    motto: "Incepto Ne Desistam",
    venue: "Bowden's Field",
  },
  {
    id: "GLE",
    abbr: "GLE",
    name: "Glenwood High School",
    city: "Durban, KZN",
    region: "Coastal",
    founded: 1910,
    primaryHex: "#00563F",
    secondaryHex: "#FFD700",
    thirdHex: "#FFFFFF",
    motto: "Nihil Humani Alienum",
    venue: "Dixon's",
  },
  {
    id: "KES",
    abbr: "KES",
    name: "King Edward VII School",
    city: "Johannesburg, GP",
    region: "Central",
    founded: 1902,
    primaryHex: "#B22222",
    secondaryHex: "#FFFFFF",
    thirdHex: "#1A1A1A",
    motto: "Strenue",
    venue: "Main Oval",
  },
  {
    id: "SJC",
    abbr: "SJC",
    name: "St John's College",
    city: "Johannesburg, GP",
    region: "Central",
    founded: 1898,
    primaryHex: "#00245D",
    secondaryHex: "#D4AF37",
    thirdHex: "#8B0000",
    motto: "Lux Vita Caritas",
    venue: "Mitchell Field",
  },
  {
    id: "AFF",
    abbr: "AFF",
    name: "Affies (Afrikaanse Hoër Seunskool)",
    city: "Pretoria, GP",
    region: "North",
    founded: 1920,
    primaryHex: "#8C1D40",
    secondaryHex: "#FFC72C",
    thirdHex: "#FFFFFF",
    motto: "Laat Daar Lig Wees",
    venue: "Affies Oval",
  },
  {
    id: "SAG",
    abbr: "SAG",
    name: "SACS (SA College Schools)",
    city: "Cape Town, WC",
    region: "Metro",
    founded: 1829,
    primaryHex: "#003865",
    secondaryHex: "#FFFFFF",
    thirdHex: "#C5B358",
    motto: "Spectemur Agendo",
    venue: "De Villiers Field",
  },
  {
    id: "DIO",
    abbr: "DIO",
    name: "Diocesan College (Bishops)",
    city: "Rondebosch, WC",
    region: "Metro",
    founded: 1849,
    primaryHex: "#1B365D",
    secondaryHex: "#7BAFD4",
    thirdHex: "#FFFFFF",
    motto: "Pro Fide et Patria",
    venue: "Frank Reid Oval",
  },
  {
    id: "PAA",
    abbr: "PAA",
    name: "Paarl Boys' High (Boishaai)",
    city: "Paarl, WC",
    region: "Boland",
    founded: 1868,
    primaryHex: "#002D62",
    secondaryHex: "#FFFFFF",
    thirdHex: "#5B92E5",
    motto: "Tandem Fit Surculus Arbor",
    venue: " Brugstraat Oval",
  },
  {
    id: "GRY",
    abbr: "GRY",
    name: "Grey High School",
    city: "Gqeberha, EC",
    region: "Eastern",
    founded: 1856,
    primaryHex: "#002147",
    secondaryHex: "#FFD100",
    thirdHex: "#FFFFFF",
    motto: "Tria Juncta In Uno",
    venue: "Pollock Oval",
  },
  {
    id: "SAR",
    abbr: "SAR",
    name: "St Andrew's College",
    city: "Makhanda, EC",
    region: "Eastern",
    founded: 1855,
    primaryHex: "#00338D",
    secondaryHex: "#FFFFFF",
    thirdHex: "#C8A951",
    motto: "Nec Aspera Terrent",
    venue: "Lower Field",
  },
];

const HEX6_RE = /^#[0-9a-fA-F]{6}$/;

export function normalizeHex(hex, fallback = "#003366") {
  if (typeof hex !== "string") return fallback;
  const trimmed = hex.trim();
  if (HEX6_RE.test(trimmed)) return trimmed.toUpperCase();
  if (/^#[0-9a-fA-F]{3}$/.test(trimmed)) {
    const r = trimmed[1];
    const g = trimmed[2];
    const b = trimmed[3];
    return `#${r}${r}${g}${g}${b}${b}`.toUpperCase();
  }
  return fallback;
}

export function hexToRgb(hex) {
  const clean = normalizeHex(hex);
  return {
    r: parseInt(clean.slice(1, 3), 16),
    g: parseInt(clean.slice(3, 5), 16),
    b: parseInt(clean.slice(5, 7), 16),
  };
}

export function hexToRgba(hex, alpha = 1) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function srgbChannelToLinear(c255) {
  const x = c255 / 255;
  return x <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

/**
 * WCAG 2.1 Relative Luminance (0.0 to 1.0)
 */
export function relativeLuminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  return (
    0.2126 * srgbChannelToLinear(r) +
    0.7152 * srgbChannelToLinear(g) +
    0.0722 * srgbChannelToLinear(b)
  );
}

/**
 * WCAG 2.1 Contrast Ratio (1.0 to 21.0)
 */
export function contrastRatio(hexA, hexB) {
  const lumA = relativeLuminance(hexA);
  const lumB = relativeLuminance(hexB);
  const brightest = Math.max(lumA, lumB);
  const darkest = Math.min(lumA, lumB);
  return (brightest + 0.05) / (darkest + 0.05);
}

/**
 * RGB <-> HSL helpers so we can walk lightness while preserving Hue & Saturation
 */
function rgbToHsl(r, g, b) {
  const rN = r / 255;
  const gN = g / 255;
  const bN = b / 255;
  const max = Math.max(rN, gN, bN);
  const min = Math.min(rN, gN, bN);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case rN:
        h = (gN - bN) / d + (gN < bN ? 6 : 0);
        break;
      case gN:
        h = (bN - rN) / d + 2;
        break;
      default:
        h = (rN - gN) / d + 4;
        break;
    }
    h /= 6;
  }
  return { h: h * 360, s: s * 100, l: l * 100 };
}

function hslToHex(h, s, l) {
  const sN = Math.max(0, Math.min(100, s)) / 100;
  const lN = Math.max(0, Math.min(100, l)) / 100;
  const c = (1 - Math.abs(2 * lN - 1)) * sN;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = lN - c / 2;
  let rPrime = 0;
  let gPrime = 0;
  let bPrime = 0;

  if (h >= 0 && h < 60) {
    rPrime = c;
    gPrime = x;
  } else if (h >= 60 && h < 120) {
    rPrime = x;
    gPrime = c;
  } else if (h >= 120 && h < 180) {
    gPrime = c;
    bPrime = x;
  } else if (h >= 180 && h < 240) {
    gPrime = x;
    bPrime = c;
  } else if (h >= 240 && h < 300) {
    rPrime = x;
    bPrime = c;
  } else {
    rPrime = c;
    bPrime = x;
  }

  const toHex = (v) =>
    Math.round((v + m) * 255)
      .toString(16)
      .padStart(2, "0")
      .toUpperCase();

  return `#${toHex(rPrime)}${toHex(gPrime)}${toHex(bPrime)}`;
}

/**
 * Walks HSL lightness up (for dark backgrounds) or down (for light backgrounds)
 * until WCAG contrast >= minRatio is met against bgHex.
 */
export function adjustForContrast(hex, bgHex, minRatio = 4.5, direction = "lighten") {
  const clean = normalizeHex(hex);
  if (contrastRatio(clean, bgHex) >= minRatio) return clean;

  const { r, g, b } = hexToRgb(clean);
  const { h, s, l } = rgbToHsl(r, g, b);
  // Keep saturation vivid even for near-white/black inputs
  const effectiveS = s < 12 ? s : Math.max(s, 48);

  if (direction === "lighten") {
    for (let stepL = Math.max(l, 25); stepL <= 96; stepL += 2) {
      const candidate = hslToHex(h, effectiveS, stepL);
      if (contrastRatio(candidate, bgHex) >= minRatio) {
        return candidate;
      }
    }
    return "#F4F6F3";
  } else {
    for (let stepL = Math.min(l, 75); stepL >= 6; stepL -= 2) {
      const candidate = hslToHex(h, effectiveS, stepL);
      if (contrastRatio(candidate, bgHex) >= minRatio) {
        return candidate;
      }
    }
    return "#10140F";
  }
}

/**
 * CIE L*a*b* conversion & CIE76 ΔE76 perceptual distance
 * Used by the Two-Team Matchup Clash Resolver (Threshold: ΔE76 < 22)
 */
export function srgbToLab(hex) {
  const { r, g, b } = hexToRgb(hex);
  const linR = srgbChannelToLinear(r);
  const linG = srgbChannelToLinear(g);
  const linB = srgbChannelToLinear(b);

  // sRGB to XYZ (D65 illuminant)
  const x = (linR * 0.4124564 + linG * 0.3575761 + linB * 0.1804375) / 0.95047;
  const y = (linR * 0.2126729 + linG * 0.7151522 + linB * 0.0721750) / 1.00000;
  const z = (linR * 0.0193339 + linG * 0.1191920 + linB * 0.9503041) / 1.08883;

  const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
  const fx = f(x);
  const fy = f(y);
  const fz = f(z);

  return {
    L: 116 * fy - 16,
    a: 500 * (fx - fy),
    b: 200 * (fy - fz),
  };
}

export function deltaE76(hexA, hexB) {
  const labA = srgbToLab(hexA);
  const labB = srgbToLab(hexB);
  const dL = labA.L - labB.L;
  const da = labA.a - labB.a;
  const db = labA.b - labB.b;
  return Math.sqrt(dL * dL + da * da + db * db);
}

/**
 * Computes the complete 7-Token School Colour Identity Ramp & WCAG Audit
 * per COLOUR_IDENTITY_ARCHITECTURE.md §2.
 */
export function computeSchoolTokens(primaryInput, secondaryInput = "#C8A951", thirdInput = "#FFFFFF") {
  const primary = normalizeHex(primaryInput, "#003366");
  const secondary = normalizeHex(secondaryInput, "#C8A951");
  const third = normalizeHex(thirdInput, "#FFFFFF");

  const lumPrimary = relativeLuminance(primary);
  const inkOnPrimary = lumPrimary < 0.24 ? "#F4F6F3" : "#07080A";

  const lumSecondary = relativeLuminance(secondary);
  const inkOnSecondary = lumSecondary < 0.24 ? "#F4F6F3" : "#07080A";

  const accentOnDark = adjustForContrast(primary, "#12161E", 4.5, "lighten");
  const accentOnLight = adjustForContrast(primary, "#E3E7DD", 4.5, "darken");

  const primarySurface = hexToRgba(primary, 0.12);
  const primaryBorder = hexToRgba(primary, 0.32);

  // Surface audit matrix
  const auditSurfaces = [
    { id: "broadcast-bg", label: "Broadcast Plate", hex: "#07080A" },
    { id: "broadcast-raised", label: "Broadcast Raised", hex: "#0C0F14" },
    { id: "broadcast-elevated", label: "Broadcast Elevated", hex: "#12161E" },
    { id: "floodlit-canvas", label: "Floodlit Canvas", hex: "#05070A" },
    { id: "daylight-interactive", label: "Daylight Surface", hex: "#E3E7DD" },
  ];

  const surfaceAudits = auditSurfaces.map((surf) => {
    const rawRatio = contrastRatio(primary, surf.hex);
    const isLightSurface = relativeLuminance(surf.hex) > 0.4;
    const rampTokenHex = isLightSurface ? accentOnLight : accentOnDark;
    const rampRatio = contrastRatio(rampTokenHex, surf.hex);
    return {
      ...surf,
      rawRatio: Number(rawRatio.toFixed(2)),
      rawPassAA: rawRatio >= 4.5,
      rampTokenHex,
      rampRatio: Number(rampRatio.toFixed(2)),
      rampPassAA: rampRatio >= 4.5,
    };
  });

  return {
    primary,
    secondary,
    third,
    inkOnPrimary,
    inkOnSecondary,
    accentOnDark,
    accentOnLight,
    primarySurface,
    primaryBorder,
    lumPrimary: Number(lumPrimary.toFixed(3)),
    inkContrastRatio: Number(contrastRatio(primary, inkOnPrimary).toFixed(2)),
    surfaceAudits,
    cssVars: {
      "--school-primary": primary,
      "--school-secondary": secondary,
      "--school-ink-on-primary": inkOnPrimary,
      "--school-accent-on-dark": accentOnDark,
      "--school-accent-on-light": accentOnLight,
      "--school-primary-surface": primarySurface,
      "--school-primary-border": primaryBorder,
    },
  };
}

/**
 * Resolves Two-Team Matchup Clash (COLOUR_IDENTITY_ARCHITECTURE.md §3)
 * When Team A and Team B have ΔE76 < 22 between primary kit colours,
 * Team B (away/bowling) automatically switches its broadcast pill,
 * chart series, and accent ramp to its secondary kit colour.
 */
export function resolveMatchupClash(schoolA, schoolB, threshold = 22) {
  const aPrimary = normalizeHex(schoolA?.primaryHex || schoolA?.colors?.[0] || "#003366");
  const aSecondary = normalizeHex(schoolA?.secondaryHex || schoolA?.colors?.[1] || "#C8A951");
  const bPrimary = normalizeHex(schoolB?.primaryHex || schoolB?.colors?.[0] || "#8B0000");
  const bSecondary = normalizeHex(schoolB?.secondaryHex || schoolB?.colors?.[1] || "#FFD700");
  const bThird = normalizeHex(schoolB?.thirdHex || "#FFFFFF");

  const primaryDeltaE = deltaE76(aPrimary, bPrimary);
  const isClashing = primaryDeltaE < threshold;

  let resolvedBPrimary = bPrimary;
  let resolvedBSecondary = bSecondary;
  let resolutionMode = "PRIMARY_KIT";
  let resolutionNote = `ΔE76 = ${primaryDeltaE.toFixed(1)} ≥ ${threshold} — Primary kits are perceptually distinct.`;

  if (isClashing) {
    const secondaryDeltaE = deltaE76(aPrimary, bSecondary);
    if (secondaryDeltaE >= threshold) {
      resolvedBPrimary = bSecondary;
      resolvedBSecondary = bPrimary;
      resolutionMode = "AWAY_SECONDARY_PROMOTED";
      resolutionNote = `Clash detected (ΔE76 = ${primaryDeltaE.toFixed(1)} < ${threshold}). Away team (${schoolB?.abbr || "Team B"}) automatically promoted to Secondary Kit (${bSecondary}, ΔE76 = ${secondaryDeltaE.toFixed(1)}).`;
    } else {
      resolvedBPrimary = bThird !== aPrimary ? bThird : "#F7B733";
      resolvedBSecondary = bPrimary;
      resolutionMode = "AWAY_THIRD_FALLBACK";
      resolutionNote = `Severe clash (Primary ΔE76 = ${primaryDeltaE.toFixed(1)}, Secondary ΔE76 = ${secondaryDeltaE.toFixed(1)}). Promoted Away Third/Gold Clash Kit (${resolvedBPrimary}).`;
    }
  }

  const teamATokens = computeSchoolTokens(aPrimary, aSecondary);
  const teamBTokens = computeSchoolTokens(resolvedBPrimary, resolvedBSecondary);
  const resolvedDeltaE = deltaE76(teamATokens.primary, teamBTokens.primary);

  return {
    deltaE: Number(primaryDeltaE.toFixed(1)),
    resolvedDeltaE: Number(resolvedDeltaE.toFixed(1)),
    threshold,
    isClashing,
    resolutionMode,
    resolutionNote,
    teamA: {
      abbr: schoolA?.abbr || "HIL",
      name: schoolA?.name || "Hilton College",
      rawPrimary: aPrimary,
      rawSecondary: aSecondary,
      ...teamATokens,
    },
    teamB: {
      abbr: schoolB?.abbr || "KEA",
      name: schoolB?.name || "Kearsney College",
      rawPrimary: bPrimary,
      rawSecondary: bSecondary,
      ...teamBTokens,
    },
    cssVars: {
      "--team-a-primary": teamATokens.primary,
      "--team-a-secondary": teamATokens.secondary,
      "--team-a-ink": teamATokens.inkOnPrimary,
      "--team-a-accent-on-dark": teamATokens.accentOnDark,
      "--team-b-primary": teamBTokens.primary,
      "--team-b-secondary": teamBTokens.secondary,
      "--team-b-ink": teamBTokens.inkOnPrimary,
      "--team-b-accent-on-dark": teamBTokens.accentOnDark,
    },
  };
}

/**
 * Applies active school and live matchup CSS tokens directly to :root
 */
export function applySchoolAndMatchupTokensToRoot(activeSchool, schoolA, schoolB) {
  if (typeof document === "undefined") return null;
  const root = document.documentElement;

  const activeTokens = computeSchoolTokens(
    activeSchool?.primaryHex || activeSchool?.colors?.[0] || "#003366",
    activeSchool?.secondaryHex || activeSchool?.colors?.[1] || "#C8A951",
    activeSchool?.thirdHex || "#FFFFFF"
  );

  const matchup = resolveMatchupClash(
    schoolA || activeSchool || VERIFIED_SCHOOL_BRANDS[0],
    schoolB || VERIFIED_SCHOOL_BRANDS[3]
  );

  Object.entries({ ...activeTokens.cssVars, ...matchup.cssVars }).forEach(([k, v]) => {
    root.style.setProperty(k, v);
  });

  return { activeTokens, matchup };
}

export function getSchoolBrandById(abbrOrId) {
  if (!abbrOrId) return VERIFIED_SCHOOL_BRANDS[0];
  const upper = String(abbrOrId).toUpperCase();
  return (
    VERIFIED_SCHOOL_BRANDS.find((s) => s.id === upper || s.abbr === upper) ||
    VERIFIED_SCHOOL_BRANDS[0]
  );
}
