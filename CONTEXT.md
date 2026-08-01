# Project context

Site for Ragsdale Family Dentistry (Coppell, TX). Owner: Reed Ragsdale
(GitHub `reedrags33`). Repo: `reedrags33/Dental-Website`, `main` branch.

## What this is
Static site, no build step — plain HTML/CSS/JS:
- `index.html` — home (hero, features, team teaser, services teaser, reviews, contact form)
- `services.html` — full list of treatments
- `doctors.html` — bios for Dr. Reed Ragsdale and Dr. Peter Lecca
- `styles.css` — shared styles, design tokens in `:root`
- `script.js` — mobile nav toggle + contact form submit (Netlify Forms)
- `uploads/` — site images

Multi-page (not a single-page app) on purpose: each page has its own
`<title>`/meta description/URL for SEO. There's also `Dentist` JSON-LD
structured data in `index.html`'s `<head>`.

## Design direction
- Layout: Apple-inspired — generous whitespace, pill-shaped buttons,
  soft-shadow cards, alternating white/tint (`#f5f5f7`) section bands,
  blurred sticky nav.
- Typography: warm serif (Cormorant Garamond) for headings — kept
  intentionally instead of switching to a literal Apple/sans-serif look,
  to preserve a "family practice" feel rather than "tech company."
- Accent color: warm gold/amber (`--color-accent` in styles.css), not blue.

## Copy direction (important — don't drift from this)
SEO copy is written so **the patient is the hero of the story, not the
practice or the doctors**. Headlines and body copy use "you/your"
language centered on the patient's experience (e.g. "Your smile, your
questions, your pace") rather than practice-centered language ("We're
the best," "Award-winning care"). When writing new copy, keep this
StoryBrand-style framing: patient = hero with a problem, practice = guide
with a plan.

**Exception:** Dr. Peter Lecca's bio text on `doctors.html` is preserved
verbatim from his previous website at his request — do not rewrite it,
even for SEO/style consistency, without explicit approval.

## Known constraints / decisions made
- Images must never crop content in a way that cuts off people's heads —
  this was fixed once already (hero image `object-position` tuned by
  simulating the actual `object-fit: cover` crop math, not eyeballing).
  Verify crops the same way if hero/review images change.
- Site must render correctly on MacBook, a Dell/Windows laptop, iPad,
  and iPhone — check responsive breakpoints in `styles.css` after layout
  changes.
- Contact form posts to Netlify Forms (`data-netlify="true"` +
  `bot-field` honeypot) — this only works once actually deployed on
  Netlify; it won't submit successfully when opened locally or previewed
  elsewhere.

## GitHub access notes
Pushing to this repo previously failed with a 403 even though the
GitHub connector showed "connected" — the fix was installing the Claude
GitHub App itself (not just OAuth-authorizing it) via
`https://github.com/apps/claude/installations/new`, since GitHub
distinguishes OAuth authorization from app installation/repo access.
If push ever 403s again, check that first.

## Local docs folder
Reed also has a local folder on his computer ("Dental Website") with
documents he may want added to this repo — those need to come in either
as chat uploads or a manual push from his own machine; there's no
automatic sync between his local filesystem and this repo.
