# UI

A calm, light, neutral-first interface system for AI and productivity tools: a gray sidebar, white panels, hairline borders, one blue for action, one green for "it's working". Light and Dark themes.

Use this file as the source of truth when building techshoi UI. It is written against **shadcn/ui conventions**: tokens are the standard shadcn CSS variables, components are the shadcn components with their props, variants and sizes, and only the styling differs. When this file and shadcn disagree on a name, an API or a token, shadcn wins and this file is updated.

---

## 1. Principles

1. **Neutral first.** Almost everything is gray, white and #333 text. Color is a signal: blue (`primary`) means _act_ or _on_, green (`success`) means _connected / allowed_, red (`destructive`) means _fix this_ or _this can't be undone_.
2. **Depth from surfaces and hairlines, not shadows.** Separate regions with surface steps (`sidebar` → `background` → `muted`) and 1px `border` lines. Shadows are only for buttons, floating cards and menus.
3. **Buttons carry the texture.** They are the most tactile elements: a vertical gradient, a 1px border, a faint lift and (default variant) an inner top highlight. Everything else stays flat.
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
| `muted-foreground`           | `#777777` | `#9a9a9a` | Descriptions, row keys, section labels, nav icons, meta ("1 of 5"), placeholders. 4.48:1 on `background`, just under AA for small text: keep it to secondary information, never body copy. Dark: 6:1. |
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
| `success` _(added color)_    | `#15b042` | `#3ddc6e` | Positive status (Connected) and the granted-permission shield. Added the way shadcn's theming docs add a color (`--success` + `--color-success`); no shadcn component uses it, so apply it with `className`. Soft fill: `bg-success/15`. Light text-on-fill is ~2.5:1, so always pair it with a word. |

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

### Badge

20px tall (`h-5`), padding 0 6px, `rounded-sm` (6px), 13/16 Medium. One or two words. Sits 8px after a title. Uses shadcn's variants:

- `secondary`: `muted` fill, `muted-foreground` text ("Disconnected").
- `default`: `primary/10` fill, `primary` text ("New").
- `destructive`: `destructive/10` fill, `destructive` text.
- `outline`: 1px `border`, `foreground` text.
- `ghost`: no fill, `muted-foreground` text; `accent` fill on hover when it is a link.
- `link`: `primary` text, underline on hover.
- Positive status has no shadcn variant: `className="bg-success/15 text-success"` ("Connected").

### Switch

shadcn `Switch`, keeping its `size` prop: `default` is the design track below; `sm` scales it down to 20×12 with an 8px thumb. Track 24×14, fully round; thumb 10px, white in both themes, 2px inset, slides 10px. Unchecked track `input`, checked track `primary`. For settings that apply immediately.

### Input, Textarea and Field

- `Input`: 32px, `background` fill, 1px `input`, radius 10px, `shadow-xs`, padding 0 10px, text `body`, placeholder `muted-foreground`. For a leading icon or a trailing hint, use `InputGroup`.
- Hover border: `input` + 10% `foreground`. Focus: border `ring` + a 3px `ring/30` ring (`ring/40` in dark).
- Invalid (`aria-invalid`): border `destructive`; on focus a 3px `destructive/25` ring (`/40` in dark).
- File inputs: the "Choose file" button is a chip inset 3px inside the field (24px tall, `rounded-sm`, 1px `input` border, `secondary` fill, 13px Medium `secondary-foreground`, 10px gap before the file name), so it reads as a button apart from the file name.
- `Textarea`: same frame, min 60px tall, resizes vertically only.
- Labels and messages use `Field`: `FieldLabel` 13/16 Medium in `foreground`, 6px above the control; `FieldDescription` one line of 13/16 `muted-foreground` under it; `FieldError` in `destructive`, saying what to do ("Enter a URL ending in .myshopify.com"). Description or error, never both.

### Quick actions field

The sidebar's command field: an `InputGroup` (32px, `background`, 1px `border`, radius 10px, `shadow-xs`) with a command icon addon, placeholder "Quick actions", and a `Kbd` ("K", 12px Medium) as the trailing addon.

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

shadcn `Kbd`. 12/16 Medium, `muted-foreground`.

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
- Light theme, kept as specified and flagged: `success` on its soft fill is ~2.5:1, `muted-foreground` on white 4.48:1. Keep badges worded and keep `muted-foreground` for secondary text only. Both pass in dark.

---

## 11. Don't

- Don't rename shadcn variables, variants, sizes, parts or props, and don't add variants shadcn doesn't have. Express design-only looks with `className`.
- Don't add theme variables beyond shadcn's set, except through the documented "add a color" pattern (currently only `success`).
- Don't use `primary` for anything that isn't an action or an "on" state, or put more than one default button in a view.
- Don't add heavy shadows, gradients on surfaces, or bold weights.
- Don't hard-code colors in components; use tokens or `color-mix()` of tokens.
- Don't mix control heights in one row; everything inline is 32px.
- Don't use color alone to carry meaning.
