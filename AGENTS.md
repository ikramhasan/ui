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
3. Add an item to `registry.json` (`type: "registry:ui"`, upstream's `dependencies`; for other registry components use `registryDependencies`).
4. Add `src/app/_demos/<name>-demo.tsx` covering every variant, size and state (disabled, invalid, `render` composition), and register it in the `components` list in `src/app/page.tsx`. Tick the component in the README checklist and update its progress count.
5. Verify: `pnpm registry:build`, `pnpm exec tsc --noEmit`, `pnpm lint`, then check the page in light and dark, including keyboard focus. For a real install test, use a throwaway project in the scratchpad (with its own `pnpm install`, not a symlinked `node_modules`) and run `shadcn add http://localhost:3000/r/<name>.json`.

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
