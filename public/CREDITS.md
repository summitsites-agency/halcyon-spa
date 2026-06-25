# Media credits

**Halcyon — Day Spa & Retreat** is a fictional brand built as a demo for Summit Sites.

## Current media: generated placeholders

All images and the hero video are currently **on-brand placeholder assets** generated
locally with ffmpeg via `npm run placeholders` (`scripts/placeholders.mjs`). They exist so
the site runs end-to-end with no broken media. They are intentionally simple soft-tint
fills in the cream & blush palette.

## Swapping in real media

Replace files in place — paths and aspect ratios are fixed by the design, so real media
drops in without code changes:

| Path | Aspect | Subject |
|------|--------|---------|
| `videos/hero.mp4` + `videos/hero-poster.jpg` | 16:9 | Calm hero loop (water ripple / steam / sheer fabric / hands) |
| `images/treatment-massage.jpg` | 4:3 | Massage / bodywork |
| `images/treatment-facial.jpg` | 4:3 | Facial / skin ritual |
| `images/treatment-hydro.jpg` | 4:3 | Hydrotherapy / mineral soak |
| `images/ritual.jpg` | 4:5 | Therapist preparing oils by candlelight |
| `images/practitioner-*.jpg` | 3:4 | Practitioner portraits |
| `images/gallery-1.jpg` | ~16:11 (wide) | Treatment room (hero of the grid) |
| `images/gallery-2..5.jpg` | square-ish | Details, soak, botanicals, lounge |
| `images/cta.jpg` | 16:9 | Calming full-bleed scene |

### Sourcing options
- **AI-generated** via the Higgsfield MCP (`generate_video` for the hero, `generate_image`
  for stills) — the signature approach.
- **License-free stock** from Pexels / Unsplash / Coverr / Mixkit.

When using stock, list each asset's source + license below.

| File | Source | License |
|------|--------|---------|
| _(placeholders — none yet)_ | generated locally | n/a |
