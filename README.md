# UI Registry

shadcn components rebuilt on [Base UI](https://base-ui.com) with our own design (see `DESIGN.md`), distributed through the [shadcn CLI](https://ui.shadcn.com/docs/registry/getting-started). Each component is a drop-in for its shadcn `base-nova` counterpart: same file name, exports, props, variants, sizes, `data-slot` attributes and Base UI primitive. Only the styling changes.

## Installing

```bash
# once: the theme variables and the Inter font
npx shadcn@latest add http://localhost:3000/r/style.json

# then any component
npx shadcn@latest add http://localhost:3000/r/button.json
```

Components only use the standard shadcn variables (`--primary`, `--secondary`, `--accent`, `--input`, `--ring`, …), so they also work with any other shadcn theme. Colors the design needs beyond those, like the button gradients, are derived in the component with `color-mix()`, the way base-nova does it. The one added color, `--success`, follows shadcn's "adding new colors" pattern.

## Development

```bash
pnpm install
pnpm dev            # landing page with every component at http://localhost:3000
pnpm registry:build # writes public/r/*.json
```

## Layout

- `registry/ui/<name>.tsx`: component source (what the CLI installs). Imported in the app as `@/registry/ui/<name>`.
- `registry.json`: item definitions. `style` is a `registry:style` item holding the theme variables and depending on shadcn's `font-inter`.
- `src/app/globals.css`: this app's copy of the same variables. Keep it in sync with the `style` item.
- `src/app/_demos/<name>-demo.tsx`: the landing page examples, registered in `src/app/page.tsx`.

## Adding a component

1. Install the upstream one for reference: `pnpm exec shadcn add <name>` (base-nova). Read it, then delete it.
2. Recreate it in `registry/ui/<name>.tsx` with the same API, restyled per `DESIGN.md`.
3. Add an item to `registry.json` with the same `dependencies` as upstream.
4. Add a demo and register it on the landing page.

When deploying, replace `http://localhost:3000` (`homepage` in `registry.json` and the install commands on the landing page).
