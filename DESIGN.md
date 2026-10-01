# UI

A calm, light, neutral-first interface system for AI and productivity tools: a gray sidebar, white panels, hairline borders, one blue for action, one green for "it's working". Light and Dark themes.

Use this file as the source of truth when building techshoi UI. It is written against **shadcn/ui conventions**: tokens are the standard shadcn CSS variables, components are the shadcn components with their props, variants and sizes, and only the styling differs. When this file and shadcn disagree on a name, an API or a token, shadcn wins and this file is updated.

---

## 1. Principles

1. **Neutral first.** Almost everything is gray, white and #333 text. Color is a signal: blue (`primary`) means _act_ or _on_, green (`success`) means _connected / allowed_, red (`destructive`) means _fix this_ or _this can't be undone_.
2. **Depth from surfaces and hairlines, not shadows.** Separate regions with surface steps (`sidebar` → `background` → `muted`) and 1px `border` lines. Shadows are only for buttons, floating cards and menus.
3. **Buttons carry the texture; keys sink in.** Buttons are the most tactile elements: a vertical gradient, a 1px border, a faint lift and (default variant) an inner top highlight, so they protrude. `Kbd` is the inverse, recessed into the surface. Everything else stays flat.
4. **One size of control.** Buttons, inputs, select triggers and sidebar menu buttons are 32px (`h-8`) with a 10px radius (`rounded-lg`), so anything can sit in a row together.
5. **Medium, never Bold.** Emphasis comes from weight 500 and from `foreground` vs `muted-foreground`, not from size jumps or bold.

---

## 2. Color

Themes: light (default) and dark, toggled with the `dark` class on `<html>` (shadcn convention: `@custom-variant dark (&:is(.dark *))`). Tokens are the standard shadcn variables, used through their Tailwind utilities (`bg-background`, `text-muted-foreground`, `border-input`, …). The `style` registry item installs them.

| Variable                     | Light     | Dark      | Use                                                                                                                                                   |
| ---------------------------- | --------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `background`                 | `#ffffff` | `#1c1c1c` | Main panel, inputs, tables, the composer box.                                                                                                         |
| `foreground`                 | `#333333` | `#ececec` | Default text: body, nav items, values, titles. Also the user's chat bubble fill (with `background` text on it).                                       |
| `card` / `card-foreground`   | `#ffffff` / `#333333` | `#1c1c1c` / `#ececec` | Cards and floating panels.                                                                                                   |
| `popover` / `popover-foreground` | `#ffffff` / `#333333` | `#1c1c1c` / `#ececec` | Menus, select content, popovers.                                                                                         |
| `primary`                    | `#3e6ae1` | `#3e6ae1` | The action blue: default button (bottom of its gradient), links, switch on, selected checks, the send button. White on it is 4.8:1.                   |
| `primary-foreground`         | `#ffffff` | `#ffffff` | Label and icon on `primary`.                                                                                                                          |
| `secondary`                  | `#f5f5f5` | `#242424` | Bottom of the secondary button gradient, segmented tab track.                                                                                         |
| `secondary-foreground`       | `#1a1a1a` | `#f5f5f5` | Label and icon on the secondary button, sampled from the reference buttons.                                                                           |
| `muted`                      | `#f5f5f5` | `#242424` | Nested panels (Tool permissions), attachment chips, the sources pill, the composer upsell strip, neutral badges.                                     |
| `muted-foreground`           | `#6e6e6e` | `#9a9a9a` | Descriptions, row keys, section labels, nav icons, meta ("1 of 5"), placeholders. 5.1:1 on `background`, 4.7:1 on `muted`, 4.55:1 on the `accent` hover fill (darkened from the reference #777777 to pass AA). Dark: 6:1. |
| `accent`                     | `#f2f2f2` | `#2a2a2a` | Hover and highlighted fills: ghost and outline buttons, menu items, list rows. (shadcn's `accent` is a hover fill, not a brand color.)               |
| `accent-foreground`          | `#333333` | `#ececec` | Text on `accent`.                                                                                                                                     |
| `destructive`                | `#d42f2f` | `#ff6b6b` | Errors and destructive actions: invalid field borders and messages, the destructive button. 4.9:1 on `background` (light), 6.5:1 (dark). Soft fills use `destructive/10`–`/20`. |
| `border`                     | `#ebebeb` | `#2e2e2e` | Hairlines: panel and card outlines, table row dividers, sidebar edge.                                                                                 |
| `input`                      | `#e0e0e0` | `#3a3a3a` | Control borders: inputs, secondary and outline buttons, toolbar dividers, switch track when off.                                                      |
| `ring`                       | `#0077e6` | `#3d9bff` | Keyboard focus rings on every control. Brighter than `primary` so focus reads on top of a primary button.                                            |
| `sidebar`                    | `#f9f9f9` | `#151515` | Sidebar background and the app canvas behind panels.                                                                                                  |
| `sidebar-foreground`         | `#333333` | `#ececec` | Sidebar text.                                                                                                                                         |
| `sidebar-primary` / `-foreground` | `#3e6ae1` / `#ffffff` | same | Primary elements inside the sidebar.                                                                                                       |
| `sidebar-accent` / `-foreground`  | `#ededed` / `#333333` | `#313131` / `#ececec` | The selected (active) sidebar menu item.                                                                           |
| `sidebar-border`             | `#ebebeb` | `#2e2e2e` | Sidebar edge and rules.                                                                                                                               |
| `sidebar-ring`               | `#0077e6` | `#3d9bff` | Focus inside the sidebar.                                                                                                                             |
| `chart-1` … `chart-5`        | shadcn neutral | shadcn neutral | Charts (unchanged from shadcn's neutral base).                                                                                               |
| `success` _(added color)_    | `#0a772a` | `#3ddc6e` | Positive status (Connected) and the granted-permission shield. Added the way shadcn's theming docs add a color (`--success` + `--color-success`); no shadcn component uses it, so apply it with `className`. Soft fill: `bg-success/15` (text on it 4.6:1). Darkened from the reference #15B042, which was 2.5:1 on its fill and 2.6:1 as an icon on white. |

### Color rules

- Body copy is `foreground`. Secondary info (descriptions, row keys, meta, section labels, nav icons, placeholders) is `muted-foreground`.
- `primary` is the only blue for things you act on: default button, links, switch on, selected checks, the send button. `ring` is only for focus.
- `accent` is a neutral hover fill. Never use it as a brand color.
- `success` only for positive status and granted permissions. `destructive` only for errors and destructive actions.
- Never put meaning in color alone: a badge always has a word, a granted permission has a shield icon.

### Derived colors

Some design colors aren't tokens; components derive them from tokens with `color-mix()`, the same way shadcn's base-nova styles do. This keeps components working with any shadcn theme.

| Color                         | Derivation                                         | Light ≈   | Dark ≈    |
| ----------------------------- | -------------------------------------------------- | --------- | --------- |
| Default button gradient top   | `primary` + 15% white                              | `#5982e8` | `#5982e8` |
| Default button border         | `primary` + 15% black                              | `#3054b5` | `#3054b5` |
| Secondary button gradient top | `background` (light); `secondary` + 4% `foreground` (dark) | `#ffffff` | `#2b2b2b` |
| Secondary button hover bottom | `secondary` + 5% `foreground` (light), 8% (dark)   | `#ebebeb` | `#333333` |

**Text on tints.** `primary` and `destructive` text on their own 10–20% tints (Badge `default` / `destructive`, Button `destructive`) is darkened with 12% black in light mode, and lifted in dark mode (`primary` + 35% white, `destructive` + 25% white), so it passes 4.5:1 at rest and on hover. Button and Badge `link` text is lifted the same way in dark.

---

## 3. Typography

Family: **Inter**, through `--font-sans` (the `style` item installs shadcn's `font-inter`). Weights 400 / 500 / 600.

| Style         | Size / line height | Weight | Tailwind                       | Use                                                                 |
| ------------- | ------------------ | ------ | ------------------------------ | ------------------------------------------------------------------- |
| `display`     | 28px / 36px        | 500    | `text-[28px] leading-9 font-medium` | One per empty state or landing view. e.g. "Where should we begin?" |
| `heading`     | 20px / 28px        | 500    | `text-xl font-medium`          | Page and panel titles. e.g. "Shopify"                               |
| `title`       | 16px / 20px        | 500    | `text-base leading-5 font-medium` | Section titles, card titles, app names, workspace name.          |
| `body`        | 14px / 20px        | 400    | `text-sm`                      | Default text, nav items, descriptions, table cells.                 |
| `body-medium` | 14px / 20px        | 500    | `text-sm font-medium`          | Row names, permission titles, emphasis within body.                 |
| `button`      | 14px / 16px        | 500    | `text-sm leading-4 font-medium` | Button labels at the 32px control height.                          |
| `label`       | 13px / 16px        | 500    | `text-[13px] leading-4 font-medium` | Badges, sidebar group labels, small-button labels.             |
| `caption`     | 12px / 16px        | 400    | `text-xs`                      | Keyboard hints (`Kbd`) and tiny meta. e.g. "1 of 5"                 |

- Default text on any page is `body` (14/20 Regular, `foreground`).
- One `display` per screen at most (empty states). `heading` titles a page or panel. `title` heads sections and cards.
- Button labels are 14/16 Medium (13px on `size="sm"`).
- Sentence case for everything except product nouns ("Explore Moodboards").

---

## 4. Spacing, radius, sizes, shadows

**Spacing**: Tailwind's 4px scale (`1` = 4px).

| Step | Value | Use                                                 |
| ---- | ----- | --------------------------------------------------- |
| `1`  | 4px   | Icon-to-text in badges, gaps inside stacked text.   |
| `2`  | 8px   | Gap between controls, nav item padding.             |
| `3`  | 12px  | Cell and row padding, sidebar side padding.         |
| `4`  | 16px  | Panel padding, gap between sections inside a panel. |
| `5`  | 20px  | Card padding (action cards, chat panel).            |
| `6`  | 24px  | Gap between page sections.                          |
| `8`  | 32px  | Gap between major page blocks.                      |
| `10` | 40px  | Page top padding, column gutter in app grids.       |

**Radius**: shadcn's scale from `--radius: 0.625rem`. 10px (`rounded-lg`) is the signature.

| Utility        | Value  | Use                                                     |
| -------------- | ------ | ------------------------------------------------------- |
| `rounded-sm`   | 6px    | Badges, small marks.                                    |
| `rounded-md`   | 8px    | Sidebar menu buttons, menu items, segments, small tiles, `xs` buttons. |
| `rounded-lg`   | 10px   | Buttons, inputs, select triggers, app tiles.            |
| `rounded-xl`   | 14px   | Tables, lists, nested panels, menus, attachment chips.  |
| `rounded-2xl`  | 18px   | Cards, the composer, chat panel, message bubbles.       |
| `rounded-full` | 9999px | Switch tracks, the send button, the sources pill.       |

**Fixed sizes**

| Size              | Value | Tailwind | Use                                                   |
| ----------------- | ----- | -------- | ----------------------------------------------------- |
| Control           | 32px  | `h-8`    | Buttons, icon buttons (`size-8`), inputs, sidebar menu buttons. |
| Small control     | 28px  | `h-7`    | `size="sm"` buttons inside strips and toolbars.       |
| Data row          | 40px  | `h-10`   | Key/value table rows.                                 |
| List row          | 44px  | `h-11`   | Store and list rows with a mark and link.             |
| Badge             | 20px  | `h-5`    | Badges.                                               |
| Switch            | 24×14 | `w-6 h-3.5` | Switch track; thumb 10px (`size-2.5`), 2px inset.  |
| Tile              | 40px  | `size-10` | App icon tiles.                                      |
| Sidebar width     | 272px | `--sidebar-width: 17rem` | Set on `SidebarProvider`.              |

**Shadows**: not tokens. Inputs use Tailwind's `shadow-xs` (identical to the design's value); the others are arbitrary values inside the component that owns them, with a `dark:` variant.

| Shadow         | Light                                                                  | Dark                                                               | Owner                                                  |
| -------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------ |
| Input / tile   | `shadow-xs` (`0 1px 2px rgb(0 0 0 / 0.05)`)                            | `0 1px 2px rgba(0,0,0,0.4)`                                        | Input, outline button, app tiles.                      |
| Secondary button | `0 1px 2px rgba(0,0,0,0.06), inset 0 -1px 0 rgba(0,0,0,0.03)`        | `0 1px 2px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)`  | Button `secondary`: a soft lift and a faint bottom edge. |
| Default button | `0 1px 2px rgba(30,60,160,0.28), inset 0 1px 0 rgba(255,255,255,0.22)` | `0 1px 2px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.22)` | Button `default`: blue-tinted lift plus a top highlight. |
| Card           | `0 1px 2px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.05)`              | `0 1px 2px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.3)`            | Floating cards (Getting started, the composer).        |
| Menu           | `0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.10)`              | `0 1px 2px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.5)`            | Select, dropdown menu, popover content.                |

**Focus**: `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background` (a 2px gap and a 2px `ring` outline) on every control. Text inputs use a 3px soft ring around a `ring` border instead (see Input).

---

## 5. Components

Every component is the shadcn component of the same name (base-nova, on Base UI), with the same parts, props, variants and sizes. This section only describes how each one looks. Disabled = 40% opacity (fields 50%), no hover, no press. Invalid = `aria-invalid`.

### Button

`variant`: `default` · `secondary` · `outline` · `ghost` · `destructive` · `link`. `size`: `xs` · `sm` · `default` · `lg` · `icon` · `icon-xs` · `icon-sm` · `icon-lg`. The reference pair is **Explore Moodboards** (`default`) and **Surprise me** (`secondary`).

|              | `default`                                      | `secondary`                                         | `outline`                 | `ghost`                       | `destructive`              | `link`               |
| ------------ | ---------------------------------------------- | --------------------------------------------------- | ------------------------- | ----------------------------- | -------------------------- | -------------------- |
| Fill         | gradient `primary` + 15% white → `primary`     | gradient `background` → `secondary`                 | `background`              | none                          | `destructive/10`           | none                 |
| Border       | 1px `primary` + 15% black                      | 1px `input`                                         | 1px `input`               | none                          | none                       | none                 |
| Label / icon | `primary-foreground`                           | `secondary-foreground`                              | `foreground`              | `foreground`, icon `muted-foreground` | `destructive`      | `primary`            |
| Shadow       | default button shadow                          | secondary button shadow                             | `shadow-xs`               | none                          | none                       | none                 |
| Hover        | brightness +6%                                 | bottom stop → `secondary` + 5% `foreground`         | `accent` fill             | `accent` fill                 | `destructive/20`           | underline            |
| Use          | one per view: the action the view exists for   | most actions                                        | flat bordered actions     | toolbars, pickers, inline actions | delete, disconnect     | inline text actions  |

- `default` size: 32px, radius 10px (`rounded-lg`), padding 0 12px, gap 6px, label 14/16 Medium. Ghost runs tighter (0 8px).
- Icons are 16px, same color as the label, placed with `data-icon="inline-start"` / `"inline-end"` (the side padding tightens by 2px).
- `sm`: 28px, padding 0 10px, 13px label. Only in strips and toolbars. `xs`: 24px, 12px label, `rounded-md`. `lg`: 36px.
- Press: move down 0.5px and drop the shadow.
- **Icon buttons** are `size="icon"` (32×32, one 16px icon): `secondary` for "+ connect" on app rows, `ghost` in toolbars and message actions (`icon-sm`, 28px). Always give them an `aria-label`.
- **Send button**: `<Button size="icon" className="rounded-full">`, the default (primary) variant.

### Alert

shadcn `Alert` (`AlertTitle`, `AlertDescription`, `AlertAction`), variants `default` and `destructive`.

- Container: `card` fill, 1px `border`, `rounded-xl`, padding 12px, no shadow. A one-line alert is 44px, the same as a list row.
- Optional 16px icon, 10px before the text, nudged down 2px to center on the title line.
- `AlertTitle`: `body-medium` in `foreground`. `AlertDescription`: `body` in `muted-foreground`, 2px below the title. Links are underlined.
- `AlertAction`: 8px from the top and right, sized for `size="sm"` / `icon-sm` buttons (28px), which then center on the title line.
- `destructive`: title and icon in `destructive`, description in `destructive/90`. Same neutral container.

### Card

shadcn `Card` (`CardHeader`, `CardTitle`, `CardDescription`, `CardAction`, `CardContent`, `CardFooter`), `size` `default` / `sm`.

- `card` fill, 1px `border` ring, `rounded-2xl` (18px), no shadow at rest. Spacing (padding and the gap between parts) is 20px; `sm` is 16px.
- `CardTitle`: `title` (16/20 Medium); `sm`: 14/20. `CardDescription`: `body` `muted-foreground`, 4px below.
- `CardAction`: a 20px row (the title line) that centers whatever it holds, so a badge, a 28px button or an icon button all line up with the title.
- `CardFooter`: `muted/50` strip under a hairline; content-aligned horizontal padding, 16px vertical (12px for `sm`).
- Interactive cards (the **Action card** block) are links: hover adds the card shadow and an `input` ring; focus uses the standard ring.

### Item

shadcn `Item` and its parts, `variant` `default` / `outline` / `muted`, `size` `default` / `sm` / `xs`; renders through `useRender`, so `render={<a />}` makes a link row.

- `rounded-lg`, 1px border (transparent except `outline`), `muted` fill for `muted`. A one-line text row is 40 / 36 / 32px for `default` / `sm` / `xs`.
- `ItemTitle`: `body-medium`, one line. `ItemDescription`: `body` `muted-foreground`, two lines max, 2px below the title (`xs`: 12/16).
- `ItemMedia`: `icon` is 16px `muted-foreground`, centered on the title line. `image` is a 40 / 32 / 24px tile (10 / 8 / 6px radius) with a 1px low-opacity outline; it top-aligns with the title when there is a description.
- Link rows take the `accent` hover fill and the standard focus ring.
- Lists (store list, key/value rows) are an `ItemGroup` inside a `rounded-xl` bordered container, rows separated by `ItemSeparator`.

### Dialog and Alert Dialog

shadcn `Dialog` and `AlertDialog`, same parts and props. Both share one frame: a muted shell holding an inset card, with the footer on the shell.

- Shell: `muted` fill (dark: `popover` + 20% black, so the card still reads raised), `rounded-xl` (14px), 1px `border` ring, menu shadow. Width `sm:max-w-sm` (384px); Alert Dialog `size="sm"` is 320px.
- Card: inset 4px, `rounded-lg` (10px = 14 − 4), `popover` fill, 1px `border`, a faint lift. Content padding 16px, so content sits 20px from the shell edge; 16px between content blocks.
- Footer: on the shell, buttons 4px below the card and 4px from the shell's right and bottom edges (10px button radius + 4px = the shell's 14px). Buttons 8px apart, stacked on mobile; Alert Dialog `size="sm"` splits them into two columns. Without a footer, the shell shows 4px below the card.
- Title: `heading` (20/28 Medium). Description: `body` in `muted-foreground`, 4px below.
- Dialog close button: `ghost` `icon-sm`, 20px from the top and right, so its 28px box lines up with the title line; the header reserves 32px on the right for it.
- Alert Dialog media: 40px `muted` tile, `rounded-lg`, 20px icon.
- Overlay: `black/10` (dark: `black/40`) with a slight backdrop blur.
- Motion: opacity + scale from 0.96, 250ms `cubic-bezier(0.23, 1, 0.32, 1)` in, 150ms out; the backdrop fades with it. Reduced motion keeps the fade and drops the scale.

### Badge

shadcn `Badge` (renders through `useRender`, so `render={<a />}` works). 20px tall, `rounded-sm` (6px), 13/16 Medium, 6px side padding (5px + a 1px border that is transparent except on `outline`). One or two words; sits 8px after a title.

- With a 12px icon (`data-icon="inline-start"` / `"inline-end"`): 4px from the icon to the edge (matching the 4px above and below it) and 4px to the text.
- `default`: `primary/10` fill (`/20` in dark), `primary` text darkened/lifted per **Text on tints** ("New").
- `secondary`: `muted` fill, `muted-foreground` text ("Disconnected").
- `destructive`: `destructive/10` fill (`/20` in dark), `destructive` text per **Text on tints**.
- `outline`: 1px `border`, `foreground` text.
- `ghost`: no fill, `muted-foreground` text.
- `link`: `primary` text (lifted in dark like `default`), underline on hover.
- As links, filled badges darken slightly on hover; `outline` and `ghost` take the `accent` fill. Focus uses the standard ring.
- Positive status has no shadcn variant: `className="bg-success/15 text-success"` ("Connected").

### Switch

shadcn `Switch`, keeping its `size` prop: `default` is the design track below; `sm` scales it down to 20×12 with an 8px thumb. Track 24×14, fully round; thumb 10px, white in both themes, 2px inset, slides 10px. Unchecked track `input`, checked track `primary`. For settings that apply immediately.

### Input and Textarea

- `Input`: 32px, `background` fill, 1px `input`, radius 10px, `shadow-xs`, padding 0 10px, text `body`, placeholder `muted-foreground`. For a leading icon or a trailing hint, use `InputGroup`.
- Hover border: `input` + 10% `foreground`. Focus: border `ring` + a 3px `ring/30` ring (`ring/40` in dark).
- Invalid (`aria-invalid`): border `destructive`; on focus a 3px `destructive/25` ring (`/40` in dark).
- File inputs: the "Choose file" button is a chip inset 3px inside the field (24px tall, `rounded-sm`, 1px `input` border, `secondary` fill, 13px Medium `secondary-foreground`, 10px gap before the file name), so it reads as a button apart from the file name.
- `Textarea`: same frame, min 60px tall, grows with its content, resizes vertically only.
- Wrap a control with `Field` for its label and messages (see Field). Error messages say what to do ("Enter a URL ending in .myshopify.com"). Description or error, never both.

### Field

shadcn `Field` and its parts (`FieldLabel`, `FieldDescription`, `FieldError`, `FieldGroup`, `FieldSet`, `FieldLegend`, `FieldSeparator`, `FieldContent`, `FieldTitle`).

- Vertical fields: label, control, then description or error, 6px apart. Horizontal fields: 8px between label and control, centered.
- `FieldLabel` / `FieldTitle`: 13/16 Medium `foreground`. `FieldDescription`: 13/16 `muted-foreground`. `FieldError`: 13/16 `destructive`. An invalid field turns its control and message red, never its label.
- `FieldLegend`: `title` (16/20 Medium); a description right after it sits 4px below. `FieldGroup`: 20px between fields.
- `FieldSeparator`: 21px row, 1px `border` line and the optional text sharing one center line.
- Choice cards (a `FieldLabel` wrapping a `Field`): `rounded-lg`, 1px `input` border, `accent/50` hover, the input focus ring; checked: `primary/30` border on a `primary/5` fill.

### Input Group

shadcn `InputGroup` (`InputGroupAddon`, `InputGroupButton`, `InputGroupText`, `InputGroupInput`, `InputGroupTextarea`). The group is the field frame (identical to `Input`: fill, border, `shadow-xs`, hover, focus ring, invalid), and the control inside it is borderless.

- Inline addons line up with plain input text: an icon or text sits 11px from the outer edge (1px border + 10px), 8px from the control's text. Inline-end mirrors it.
- Buttons inside: `xs` / `icon-xs` (24px) are inset 3px top, bottom and side with a 6px radius (10 − 1 − 3); `sm` / `icon-sm` (28px) are inset 1px with an 8px radius.
- Block addons (above or below a textarea): text at the same 11px; buttons at the edges inset 8px from the side and bottom.
- Disabled: the whole group at 50%, once.
- The sidebar's **Quick actions** field is an `InputGroup` with a command icon addon and a trailing `Kbd` ("K", 12px Medium).

### Select

shadcn `Select` (`SelectTrigger`, `SelectContent`, `SelectItem`, `SelectSeparator`).

- `SelectTrigger`: styled like a secondary button, value left, `muted-foreground` chevron right, min width 160px.
- `SelectContent`: 4px below, `popover`, 1px `border`, `rounded-xl`, menu shadow, 4px padding.
- `SelectItem`: 32px, `rounded-md`, `body`, optional 16px `muted-foreground` icon; highlighted `accent`; selected item Medium with a `primary` check on the right. Separators are 1px `border`.
- Closes on pick, outside click, Escape (Base UI behavior).

### Tabs

shadcn `Tabs` (`TabsList`, `TabsTrigger`, `TabsContent`), using `TabsList`'s `variant`:

- `variant="default"` (filters, view toggles): 32px track, `muted` fill, 1px `border`, `rounded-lg`, 2px padding. Triggers `rounded-md`; the active one looks like a secondary button (gradient, secondary shadow, `secondary-foreground`).
- `variant="line"` (page sections): 14/16 Medium triggers in `muted-foreground`, 20px apart, 36px tall, over a 1px `border` line. Active: `foreground` with a 2px `foreground` bar on the line. An optional count is a `secondary` badge.
- 2–5 tabs, arrow keys move between them (Base UI behavior).

### Sidebar

shadcn `Sidebar` with `--sidebar-width: 17rem` (272px).

- `sidebar` background, 1px `sidebar-border` on the right; `SidebarHeader` padding 16px top / 12px sides.
- Header: workspace switcher (20px mark, name in `title`, chevron, ghost `SidebarTrigger`), then the Quick actions field.
- `SidebarMenuButton`: 32px, `rounded-md`, padding 0 8px, 16px `muted-foreground` icon, 10px gap, `body`. Hover `sidebar-accent`. Active (`isActive`): `sidebar-accent` + Medium.
- `SidebarGroupLabel` ("Tools", "Pinned", "Chat"): 13/16 Medium `muted-foreground`, 20px above, 8px below. Chat history items have no icon and truncate with an ellipsis.
- `SidebarFooter`: a "Getting started" card (40px, `card`, `border`, `rounded-xl`, card shadow, `primary` progress ring, "1 of 5" in `muted-foreground`), then a trial row above a `border` rule ("14 days left" + `size="sm"` default button "Upgrade").

### Breadcrumb

shadcn `Breadcrumb`. `body` in `muted-foreground`, slash separators (`BreadcrumbSeparator` with a slash), 8px gaps; `BreadcrumbPage` is `foreground` Medium; only the first crumb has an icon.

### Kbd

shadcn `Kbd` / `KbdGroup`. 20px tall, min 20px wide, `rounded-sm`, 12/16 Medium `muted-foreground`, 12px icons; keys in a group are 4px apart.

- Recessed, the inverse of the raised button: a gradient from `muted` + 7% `foreground` at the top to `muted` at the bottom; an inner shadow under the top lip (`inset 0 1px 1.5px` black 12%), a 1px inner hairline (black 5%) and a 1px white catch-light just below the bottom edge (90%). Dark: top `muted` + 35% black, inner shadow 60%, hairline 25%, catch-light 7%. The hairline is an inset shadow, so the key's size never changes.

- Inside an `InputGroup` addon it is inset 5px from the top, bottom and side, with a 4px radius (10 − 1 − 5).

---

## 6. Blocks

App-level compositions built from the components above. They are not shadcn components and ship as blocks, if at all.

- **App header:** 40px app tile (`background`, `border`, `rounded-lg`, `shadow-xs`, holds the partner's own logo) → title in `heading` + status `Badge` → one-line description in `muted-foreground`. 12px gaps.
- **Section:** `title` heading, 12px above its content. 32px between sections.
- **Key/value table** (`Table` or `Item`s): 1px `border`, `rounded-xl`, `background`. Rows exactly 40px, divided by `border`. Two equal columns; the key column has a right hairline. Key: 16px icon + `body` `muted-foreground`. Value: `body` `foreground`; counts that open a list are underlined.
- **Store list** (`ItemGroup` of `Item`s): same container as the table. Rows 44px: 20px mark, name in 14 Medium, URL as an underlined `primary` link, 12px gaps. An expanded row holds an inset panel with 8px padding.
- **Inset panel (Tool permissions):** `muted`, `rounded-xl`, padding 16px, `title` heading. Items 16px apart: title 14 Medium + filled `success` shield when granted; description `body` `muted-foreground`; optional `Switch` on the right.
- **App list item** (`Item`): 40px tile, 16px gap, name in `title`, one-line description in `muted-foreground` with an ellipsis. Trailing: a `secondary` `size="icon"` "+" button when not connected, a plain `muted-foreground` check when connected. Two-column grid, 40px gutter.
- **Action card** (`Card`): `card`, 1px `border`, `rounded-2xl`, padding 20px. 20px `muted-foreground` icon, 32px gap, title in `title`, description in `body` `muted-foreground`. Hover: `input` border + card shadow. Shown in a row of three (e.g. Create / Find / Research).
- **Composer** (`InputGroup` + `Textarea`):
  - Box: `background`, 1px `border`, `rounded-2xl`, card shadow, padding 16px 12px 12px. Textarea 16/20, placeholder "Ask anything…" in `muted-foreground`.
  - Toolbar: left: `secondary` icon buttons (attach "+", apps), a `ghost` mode toggle with a `default` "New" badge; right: a ghost model `Select`, a ghost mic, and the round send button (disabled until there is text).
  - Optional upsell strip under the box on `muted` (the wrapper shares the 18px radius): crown icon, one line, `size="sm"` default button.
  - Empty state: centered `display` heading ("Where should we begin?") → composer → three action cards.
- **Chat panel:**
  - Panel: `card`, 1px `border`, `rounded-2xl`, padding 20px; header with `heading` title and a ghost close button.
  - The person's turn aligns right: attachment chip (`muted`, `rounded-xl`, 32px tile, title 14 Medium, URL 13px `muted-foreground`), then the message bubble (`bg-foreground text-background`, `rounded-2xl`, padding 8px 14px, `body`).
  - The reply: a meta row with "Thought for N seconds ›" (`muted-foreground`, lightbulb icon) on the left and a sources pill on the right (`muted`, fully round, 28px, stacked 18px marks + "6 sources"). Then the answer in `body` with a 20px mark on the left, then message actions: ghost `icon-sm` buttons (copy, improve, thumbs down, retry), a 1px divider, one ghost text action.

---

## 7. Icons

Lucide (`iconLibrary: "lucide"`): 16px line icons on a 24-unit grid, 1.75 stroke, round caps and joins, `currentColor`. 20px in action cards and the assistant mark. `muted-foreground` in nav and row keys; label color inside buttons. The only filled icon is the permission shield (`success`). Third-party apps appear by their own logos inside an app tile; techshoi has no logo yet, so use the name in plain type.

---

## 8. Layout

- App shell: 272px `Sidebar` + `SidebarInset` main column on `background`. Main content centered, max ~720px wide, 40px top padding.
- Detail page order: breadcrumb → app header → sections (key/value table, store list…), 32px apart.
- Panel padding 16px, card padding 20px, gaps between controls 8px, between cards 16px.

---

## 9. Content

- Sentence case; product nouns keep capitals.
- Short and literal: labels name the thing ("Products synced"), status is one word ("Connected"), counts are plain ("1 of 5", "14 days left").
- Verbs on buttons, nouns on headings. Descriptions are one line saying what it does for the person.
- No exclamation marks, no emoji in UI copy. Truncate with an ellipsis rather than wrapping in nav and lists.

---

## 10. Accessibility

- Keyboard behavior, roles and ARIA come from Base UI; don't reimplement them.
- Every control has a visible focus ring and an accessible name.
- All text meets WCAG AA (4.5:1) in both themes, including hover states; icons and control borders meet 3:1. Check new pairs with the browser's own `color-mix()` output, not by eye.
- Still never carry meaning by color alone: badges are worded, a granted permission has a shield icon.

---

## 11. Don't

- Don't rename shadcn variables, variants, sizes, parts or props, and don't add variants shadcn doesn't have. Express design-only looks with `className`.
- Don't add theme variables beyond shadcn's set, except through the documented "add a color" pattern (currently only `success`).
- Don't use `primary` for anything that isn't an action or an "on" state, or put more than one default button in a view.
- Don't add heavy shadows, gradients on surfaces, or bold weights.
- Don't hard-code colors in components; use tokens or `color-mix()` of tokens.
- Don't mix control heights in one row; everything inline is 32px.
- Don't use color alone to carry meaning.
