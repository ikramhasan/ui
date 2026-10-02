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

## Components

Every `registry:ui` item in shadcn's base-nova registry (63 total, from https://ui.shadcn.com/r/styles/base-nova/registry.json). Tick a box when the component is in `registry/ui/`, in `registry.json` and on the landing page.

**Progress: 36 / 63**

- [x] Accordion (`accordion`)
- [x] Alert (`alert`)
- [x] Alert Dialog (`alert-dialog`)
- [ ] Aspect Ratio (`aspect-ratio`)
- [ ] Attachment (`attachment`)
- [ ] Avatar (`avatar`)
- [x] Badge (`badge`)
- [x] Breadcrumb (`breadcrumb`)
- [ ] Bubble (`bubble`)
- [x] Button (`button`)
- [x] Button Group (`button-group`)
- [x] Calendar (`calendar`)
- [x] Card (`card`)
- [ ] Carousel (`carousel`)
- [ ] Chart (`chart`)
- [x] Checkbox (`checkbox`)
- [x] Collapsible (`collapsible`)
- [ ] Combobox (`combobox`)
- [ ] Command (`command`)
- [x] Context Menu (`context-menu`)
- [x] Dialog (`dialog`)
- [ ] Direction (`direction`)
- [x] Drawer (`drawer`)
- [x] Dropdown Menu (`dropdown-menu`)
- [ ] Empty (`empty`)
- [x] Field (`field`)
- [ ] Form (`form`)
- [x] Hover Card (`hover-card`)
- [x] Input (`input`)
- [x] Input Group (`input-group`)
- [ ] Input OTP (`input-otp`)
- [x] Item (`item`)
- [x] Kbd (`kbd`)
- [x] Label (`label`)
- [ ] Marker (`marker`)
- [x] Menubar (`menubar`)
- [ ] Message (`message`)
- [ ] Message Scroller (`message-scroller`)
- [ ] Native Select (`native-select`)
- [ ] Navigation Menu (`navigation-menu`)
- [ ] Pagination (`pagination`)
- [x] Popover (`popover`)
- [x] Progress (`progress`)
- [ ] Questionnaire (`questionnaire`)
- [x] Radio Group (`radio-group`)
- [ ] Resizable (`resizable`)
- [ ] Scroll Area (`scroll-area`)
- [x] Select (`select`)
- [x] Separator (`separator`)
- [x] Sheet (`sheet`)
- [ ] Sidebar (`sidebar`)
- [ ] Skeleton (`skeleton`)
- [x] Slider (`slider`)
- [ ] Sonner (`sonner`)
- [ ] Spinner (`spinner`)
- [x] Switch (`switch`)
- [ ] Table (`table`)
- [x] Tabs (`tabs`)
- [x] Textarea (`textarea`)
- [ ] Toast (`toast`)
- [x] Toggle (`toggle`)
- [x] Toggle Group (`toggle-group`)
- [x] Tooltip (`tooltip`)

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

When deploying, replace `http://localhost:3000` everywhere: `homepage` and every `registryDependencies` URL in `registry.json`, plus the install commands on the landing page.

A component that uses another one of ours (e.g. Dialog uses Button) lists it in `registryDependencies` by **full URL**. A bare name like `"button"` resolves to shadcn's own registry and would install shadcn's button instead of ours.
