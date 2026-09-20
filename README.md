# y0xhz — portfolio & working notebook

A static Jekyll site hosted on GitHub Pages. Pages are written in Markdown;
shared layout, navigation, and styling live in `_layouts/` and `assets/`.

## Local preview

```sh
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4173
```

Open http://127.0.0.1:4173. Build without a server with `bundle exec jekyll build`.

## Browser checks

With the preview server running:

```sh
npm ci
npx playwright install chromium
npm test
```

For a system Chromium installation, use `CHROMIUM_PATH=/usr/bin/chromium npm test`.
Set `BASE_URL` to test a different preview address.

Checks cover ten pages at 320, 375, 768, 1024, and 1440px in all three themes,
WCAG A/AA checks with axe at mobile and desktop widths, internal links and
fragments, keyboard navigation, reduced motion, theme persistence, blocked
storage, and navigation without JavaScript. Screenshots are saved to the
ignored `artifacts/` directory. Automated accessibility checks do not replace
manual keyboard and visual review.

## Design & content

The design uses a paper background, ink text, a terracotta accent, serif
headlines, and monospace annotations. Reading text uses system font stacks;
Retro headings use the locally hosted Silkscreen font. The PE
diagram is an inline SVG, so no external images or fonts are needed to render
the interface. The Explore menu works without JavaScript. The Light, Dark,
and Retro buttons support keyboard activation and store the selected theme
locally. Invalid saved preferences fall back to Light; all three themes still
work when browser storage is unavailable.

Dark mode uses neutral charcoal, softer off-white text, and a muted sand accent
for interaction. Its headings use a smaller, upright treatment, annotations
stay neutral, and research illustrations and callouts use simple rules instead
of tinted panels.

Retro mode takes its cues from 8-bit arcade games: pixel headlines, a midnight
purple background, gold buttons, mint and coral accents, raised menu panels,
and an original pixel-art scene with a character, coins, and a treasure chest.
The homepage includes working project, quest-log, and player-profile shortcuts
only in Retro mode. There are no blinking text or animated screen effects.
Silkscreen is bundled under its SIL Open Font License; see
[`assets/fonts/silkscreen/OFL.txt`](assets/fonts/silkscreen/OFL.txt).

Keep project status explicit. Link to repositories or articles only when they
exist; use plain status text for unpublished work. Avoid decorative skill
percentages, invented metrics, and duplicate placeholder entries. Existing
page routes are retained.

The UI/UX Pro Max skill informed the contrast, focus, responsive layout, and
interaction checks. Layout and editorial choices are specific to this portfolio.
