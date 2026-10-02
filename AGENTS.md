# UI Registry

## What we're building

A component library distributed through the **shadcn CLI**: every shadcn/ui component, rebuilt on **Base UI** (shadcn's `base-nova` style) with our own design. The goal is a drop-in replacement: same file names, exports, parts, props, variants, sizes, `data-slot` attributes, keyboard behavior and accessibility as shadcn. **Only the styling differs.**

- Design source of truth: `DESIGN.md` (the full catalog also lives at https://claude.ai/artifact/BMTLLMNNtjn6hQjR9JR6wr).
- Every shadcn component will be replicated. The README's Components checklist tracks what is done and what remains.
- Every component is shown on the landing page (`src/app/page.tsx`), served at http://localhost:3000. The user usually has `pnpm dev` running already, so check port 3000 before starting a server.

## Rules

1. **shadcn conventions win.** People using this library expect shadcn. If `DESIGN.md` conflicts with shadcn (a token name, a variant, a size, a part, dark-mode mechanism), follow shadcn and update `DESIGN.md` to match.
2. **No invented API.** Don't add variants, sizes, props or parts shadcn doesn't have. Design-only looks go through `className`.
3. **Standard tokens only.** Components use shadcn's CSS variables (`--background`, `--primary`, `--secondary`, `--muted`, `--accent` (a neutral hover fill, not a brand color), `--input`, `--ring`, `--sidebar-*`, …). Colors the design needs beyond those are derived inline with `color-mix()` of tokens, as base-nova does; shadows are arbitrary values with a `dark:` variant. The one added color is `--success`, following shadcn's "adding new colors" pattern. Components must still work under any other shadcn theme.
4. **Base UI does the behavior.** Wrap the same `@base-ui/react` primitive upstream uses; never reimplement focus, keyboard or ARIA handling.
5. Dark mode is the `.dark` class. Radius is shadcn's scale from `--radius: 0.625rem`. `cn` is imported from the `cn` package, like upstream.

## How to add a component

1. Install the upstream one for reference: `pnpm exec shadcn add <name>` (writes to `src/components/ui/`). Read it closely (variants, parts, data attributes, accessibility, keyboard support), then delete it. The raw item is also at `https://ui.shadcn.com/r/styles/base-nova/<name>.json`.
2. Recreate it in `registry/ui/<name>.tsx` with the identical API, restyled per `DESIGN.md`. Match the surrounding code style (upstream formatting, no semicolons).
3. Add an item to `registry.json` (`type: "registry:ui"`, upstream's `dependencies`; for our own components use `registryDependencies` with the full URL, e.g. `http://localhost:3000/r/button.json`; a bare `"button"` installs shadcn's button). Import our components as `@/registry/ui/<name>`; the CLI rewrites it to the user's alias.
4. Add `src/app/_demos/<name>-demo.tsx` covering every variant, size and state (disabled, invalid, `render` composition), and register it in the `components` list in `src/app/page.tsx`. Tick the component in the README checklist and update its progress count.
5. Verify: `pnpm registry:build`, `pnpm exec tsc --noEmit`, `pnpm lint`, then check the page in light and dark, including keyboard focus. For a real install test, use a throwaway project in the scratchpad (with its own `pnpm install`, not a symlinked `node_modules`) and run `shadcn add http://localhost:3000/r/<name>.json`.

## Working with the user

- **Commit only when asked.** Commits go on `main` once the user says "commit". Never push.
- **Notify when done.** Whenever you finish something and need the user's attention (a change ready for review, a question, a blocker), send a macOS notification with a brief summary: `osascript -e 'display notification "A brief suitable text." with title "pi" sound name "Glass"'; echo $?`.
- **Design taste.** The user loves the textured pieces: the Button protrudes (gradient, hairline, lift, inner highlight), the Kbd is recessed (the inverse), the Dialog is a muted shell holding a raised card with the footer on the shell, and the toggles reuse those skins. Variations on that language are welcome. The user rejected two Card redesigns (a gray tray with a sheet, and a raised card with a recessed footer well), so the Card stays plain.
- **Experiments are cheap.** When asked to "try" a look, change only the component file, show it, and restore it with `git checkout` if it's rejected. Don't update DESIGN.md until the look is kept.
- **Precision matters.** "This is a design library": a 1px misalignment is a bug. Before calling anything done, do the box math (control height − borders − padding vs child size, line heights, radii) and measure it in the browser (insets on every side, centers vs the text line, concentric radii = outer − inset). Report numbers, not impressions.
- **Ask before changing shipped tokens or many components.** Present the measured trade-off (e.g. a contrast table) and let the user decide.

## Design rules learned (beyond DESIGN.md)

- **Contrast:** all text ≥ 4.5:1 in both themes, hover states included. Controls that are only their outline (checkbox, radio, switch track) need ≥ 3:1. Measure with the browser's own `color-mix()` output against the real background. Text on its own tint (primary/destructive) is darkened 12% in light and lifted in dark; see "Text on tints" in DESIGN.md. Open gap: text-field borders (`input`, #e0e0e0) are about 1.3:1, and darkening them is the user's call.
- **Motion:** CSS transitions, not keyframes, so interactions are interruptible. Ease `cubic-bezier(0.23, 1, 0.32, 1)`. Dialogs 250ms in / 150ms out with scale 0.96; toggles 150–200ms; press scale 0.95. Never scale from 0. Always ship a `motion-reduce:` variant that keeps the fades.
- **Hit areas** ≥ 40px via an `after:` pseudo-element on small controls.

## Technical gotchas

- **Dev server misses new files.** The user's `pnpm dev` sometimes doesn't generate Tailwind classes for files created after it started. Don't restart it yourself (it's the user's process, and `next dev` refuses a second instance in this directory). Verify on a production build instead: `pnpm exec next build && pnpm exec next start -p 3001`, then load with a cache-busting query (`?v=N`).
- **Hidden Chrome tabs freeze transitions and `requestAnimationFrame`.** The test tab is usually in the background: computed styles show mid-transition values, and Base UI popups never finish opening or unmounting. Measure with `*{transition:none!important}` injected, or with `offsetTop` / `offsetWidth`, and use `document.visibilityState` to tell. Ask the user to feel-check motion themselves.
- **Tailwind's `data-selected` variant is shadcn's `[data-selected=true]`.** Base UI sets an empty `data-selected` on Select items, so use the arbitrary `data-[selected]:` / `not-data-[selected]:` form there.
- **`cn` won't let an unprefixed override replace a `dark:` class.** If a variant is meant to be recolored with `className` (e.g. a success Badge), put the per-theme colors in CSS variables and apply them with a single unprefixed `bg-(--x)` / `text-(--y)`, as Badge does. Button `destructive` still has the old pattern.
- **Gradients can't transition.** Cross-fade a second skin on `::before` with opacity, as Checkbox, Radio and the Switch track do.
- **Pseudo-elements don't get the global `border-border`.** Set `before:border-border` explicitly.
- **shadcn's `data-checked` / `data-unchecked` variants don't compose with `group-`.** Style the child from the element that carries the attribute (e.g. `data-unchecked:*:…` on Base UI's Indicator, which gets the same attributes).
- **Absolutely positioned grid children** use their grid area as their containing block without occupying cells (the Dialog's card is a `::before` spanning `row-[1/footer]`). Give the grid an explicit column (`grid-cols-1`), or an `auto` end line stretches to the padding edge.
- **The Chrome screenshot frame** is scaled relative to CSS pixels. Get coordinates from a fresh screenshot before clicking.

## Open items

- Replace `http://localhost:3000` on deploy: `homepage` and every `registryDependencies` URL in `registry.json`, plus the landing-page install commands.
- The design catalog artifact still lists the old `muted-foreground` (#777777) and `success` (#15B042); the shipped values are #6e6e6e and #0a772a.
- Suggested next: Progress (the Slider groove and channel), then Hover Card (the Popover surface), then Accordion and Collapsible.

## Layout

- `registry/ui/*.tsx`: component sources the CLI installs (imported in the app as `@/registry/ui/<name>`).
- `registry.json`: items. `style` (`registry:style`) holds the theme variables and depends on shadcn's `font-inter`. Users install it once: `npx shadcn@latest add http://localhost:3000/r/style.json`.
- `src/app/globals.css`: this app's copy of the `style` variables. Keep the two in sync.
- `src/app/_components/`: landing page chrome (theme toggle, install command, section/example frames).
- `src/app/_demos/`: one demo per component.
- `public/r/`: build output (gitignored).

## Skills

This project has skills installed under `.claude/skills/` (mirrored in `.agents/skills/`). Use them while building and reviewing components:

- **`make-interfaces-feel-better`**: use for every component, covering hover states, shadows, borders, radius, typography, icons, optical alignment and micro-interactions. Run its review mode on each new component before calling it done.
- **Emil Kowalski's skills:**
  - `emil-design-eng`: his philosophy on UI polish, component design and animation decisions. Apply it to every component.
  - `animate`: building any motion from scratch (popovers, dialogs, menus, accordions, switches, toasts).
  - `review-animations`: reviewing motion code against a high craft bar (user-invoked).
  - `improve-animations`: auditing the motion across the codebase and planning fixes.
  - `find-animation-opportunities`: finding places that should (or shouldn't) animate.
  - `animation-vocabulary`: naming a motion effect precisely.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
