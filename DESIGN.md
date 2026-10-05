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
- Sentence case for everything except product nouns ("Connect Shopify").

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

`variant`: `default` · `secondary` · `outline` · `ghost` · `destructive` · `link`. `size`: `xs` · `sm` · `default` · `lg` · `icon` · `icon-xs` · `icon-sm` · `icon-lg`. The reference pair is **Launch campaign** (`default`) and **Shuffle** (`secondary`).

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

### Button Group

shadcn `ButtonGroup` (`orientation` `horizontal` · `vertical`), `ButtonGroupText`, `ButtonGroupSeparator`. Joined raised Buttons: they keep their own skins; the group only squares the inner corners and drops the doubled border, so seams are one 1px `input` line.

- Children (Buttons, Inputs, Select triggers, nested groups) share one height; only the outer corners keep `rounded-lg`. Nested groups sit 8px apart. A focused child rises above its neighbors (z-10) so its ring is never clipped.
- `ButtonGroupText`: recessed into the row (the Kbd recipe at a lighter depth), 1px `input` border, `body` Medium in `muted-foreground` + 20% `foreground` (5:1 on the recess; dark `muted-foreground`, 5.5:1).
- `ButtonGroupSeparator`: the engraved `Separator`, `input` in light (black/40 in dark), inset 1px from the top and bottom; used for split buttons.

### Accordion

shadcn `Accordion` (`AccordionItem`, `AccordionTrigger`, `AccordionContent`; `multiple`, `disabled`).

- Items are divided by the engraved `Separator` line (`border` with a 1px highlight under it; dark black/40).
- `AccordionTrigger`: 40px (20px line + 2 × 10px), `body` Medium, underlined on hover. The chevron rides a 20px round raised chip (the secondary Button skin) centered on the text line; open, the chip is pressed in (the Toggle's well) and the 14px chevron turns over (200ms). Focus: the Button's 2px `ring` with a 2px offset. Disabled: 50%.
- `AccordionContent`: `body` in `muted-foreground` (5.1:1 light, 6.1:1 dark), 10px below. The height transitions on Base UI's `--accordion-panel-height` (200ms, ease `cubic-bezier(0.23, 1, 0.32, 1)`), so it is interruptible; reduced motion jumps.

### Collapsible

shadcn `Collapsible` (`CollapsibleTrigger`, `CollapsibleContent`). Unstyled apart from the Accordion's height transition on `--collapsible-panel-height`. Put spacing above the revealed content inside the panel (padding), not as a gap on the parent, so it grows with the height instead of appearing at once.

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

### Sheet

shadcn `Sheet` (`SheetContent` `side` `top` · `right` · `bottom` · `left`, `showCloseButton`; `SheetHeader`, `SheetFooter`, `SheetTitle`, `SheetDescription`, `SheetClose`). The Dialog's frame on an edge: a muted shell (1px `border` on the open side, a wide soft shadow) holding a raised `popover` card inset 4px, `rounded-lg`.

- The card is the shell's `::before`, spanning every grid row above `footer`, with a `1fr` filler row so it reaches down to the footer. `SheetFooter` sits on the shell: buttons 4px below the card and 4px from the edges. Without a footer the card fills the panel.
- Content sits 16px inside the card (20px from the panel edge, plus the border on the open side). Blocks are 16px apart.
- Close button: `ghost` `icon-sm`, 16px from the card's top-right corner, centered on the title line (0.25px measured). The header reserves 48px on the right for it.
- `left` / `right`: 75% wide, `sm:max-w-sm` (384px). `top` / `bottom`: full width, as tall as the content.
- Overlay: the Dialog's (`black/10`, dark `black/40`, slight blur).
- Motion: slides 40px in from its edge with opacity, 250ms in / 150ms out, ease `cubic-bezier(0.23, 1, 0.32, 1)`. Reduced motion keeps the fade.

### Drawer

shadcn `Drawer` on Base UI's Drawer (`swipeDirection` `down` · `up` · `left` · `right`, `snapPoints`, `showSwipeHandle`, nested drawers). One calm surface, no shell or inner card: a drawer is touch-first and full-bleed, so it reads as a single sheet of paper.

- Surface: `popover`, rounded 18px (`rounded-2xl`) on its open side, a 1px `border` hairline on that edge, a soft 40px shadow. Dark adds a 1px top highlight so it lifts off the dimmed page. The overscroll bleed is the same `popover`.
- Swipe handle: a quiet 40×4px pill (`input` + 15% `foreground`; dark + 20%), 16px from the open edge and 16px before the content (the header's padding), centered on the cross axis. Decorative only.
- Header and footer: upstream's 16px padding; bottom and top drawers center the header text.
- Motion and swipe physics are upstream's (450ms `cubic-bezier(0.22, 1, 0.36, 1)`, release scaled by swipe strength).

### Pagination

shadcn `Pagination` (`PaginationContent`, `PaginationItem`, `PaginationLink` with `isActive` and `size`, `PaginationPrevious`, `PaginationNext`, `PaginationEllipsis`). A pager set into the Tabs track.

- `PaginationContent`: the recessed Tabs track (32px, `rounded-lg`, 3px padding, Kbd-recipe gradient and inner shadow). Text `muted-foreground` + 20% `foreground` in light (4.9:1), `muted-foreground` in dark.
- Links: 26px, `rounded-[7px]` (10 − 3), Medium, tabular numbers, measured 3px from the track on top and bottom. Number links are at least 26px wide. Hover: text to `foreground`. The current page (`isActive`) rises as the Tabs chip.
- `PaginationPrevious` / `PaginationNext`: 2px padding on the chevron side, so the chevron's ink and the label each sit 9px from the link edge. Labels hide below `sm`.
- `PaginationEllipsis`: 26px, 16px icon. Disabled links (`aria-disabled`): 50%. Focus: the 2px `ring`, inset. Hit areas reach 40px tall.

### Popover

shadcn `Popover` (`PopoverTrigger`, `PopoverContent`, `PopoverHeader`, `PopoverTitle`, `PopoverDescription`). The plain floating surface that menus, selects and hover cards share.

- `popover` fill, 1px `border` ring, `rounded-xl` (14px), menu shadow. 288px wide (`w-72`), 16px padding, 16px between blocks.
- 4px from the trigger, centered by default (`side`, `align`, `sideOffset`, `alignOffset` as upstream).
- `PopoverTitle`: `body-medium`. `PopoverDescription`: `body` in `muted-foreground`, 4px below.
- Motion: scales from the trigger (`--transform-origin`), opacity + scale 0.96 → 1 in 200ms, out in 150ms, ease `cubic-bezier(0.23, 1, 0.32, 1)`. Reduced motion keeps the fade.

### Calendar and Date Picker

shadcn `Calendar` (react-day-picker: `mode` `single` · `multiple` · `range`, `captionLayout`, `numberOfMonths`, `showWeekNumber`, `buttonVariant`; `CalendarDayButton`). A date picker is shadcn's composition: a `Button` trigger opening `PopoverContent className="w-auto p-0"` with a `Calendar` inside. Every day is a key on a keyboard.

- Cells 32px (`--cell-size`), `rounded-md` (8px = the popover's 14px − 6px padding, concentric). 4px between weeks. Weekdays `caption` Medium `muted-foreground`; days `body`, tabular.
- Hover: a white key lifts out of the surface (the secondary Button skin, cross-fading in on `::before`).
- Today: recessed into the surface (the Kbd's well).
- Selected, and both ends of a range: the default Button skin (blue gradient, inner highlight, blue lift), popping in from 0.9 scale on `::after`, 150ms. Hover brightens it 6%.
- Range: a recessed groove (the Slider track) runs between the two blue keys, 2px shorter than the key top and bottom, from the center of the start key to the center of the end key, rounded at week edges. Hard-edged shadows only, so cells join without a seam. Outside days on the groove lift `muted-foreground` 20% toward `foreground` in light (4.5:1).
- Nav: `ghost` 32px chevron buttons, 6px from the edges, centered on the caption line. `captionLayout="dropdown"`: each month/year is a 28px secondary key with a native select laid over it; focus shows the Button ring on the key.
- Press: 0.95 scale. Focus: the 2px `ring`, no offset, so it stays inside the cell. Disabled days 50%; booked days add `line-through` via `modifiersClassNames`.
- Arrow keys, Page Up / Down, Home / End (react-day-picker behavior).

### Hover Card

shadcn `HoverCard` (`HoverCardTrigger`, `HoverCardContent`), on Base UI's Preview Card. The Popover surface: `popover`, 1px `border` ring, `rounded-xl` (14px), menu shadow, 16px padding, 256px wide, 4px from the trigger. Opens on hover or keyboard focus after Base UI's delay. The trigger is an `<a>`; style it with `buttonVariants` rather than `render={<Button />}`, which would turn the link into a button.

- Motion: scales from the trigger, opacity + scale 0.96 → 1 in 200ms, out in 150ms, ease `cubic-bezier(0.23, 1, 0.32, 1)`. Reduced motion keeps the fade.
- Upstream's `alignOffset` default of 4px is kept, so a centered card sits 4px past the trigger's center; pass `alignOffset={0}` to center it exactly.

### Dropdown Menu

shadcn `DropdownMenu` (all upstream parts; `DropdownMenuItem` `variant` `default` · `destructive`, `inset` on items and labels). The Dialog's muted shell holding 32px rows; the highlighted row lifts out of it as a raised card.

- Content: `muted` (dark: `popover` + 20% black, like the Dialog shell), 1px `border` ring, `rounded-xl` (14px), menu shadow plus a 1px inner top highlight, 4px padding, 4px below the trigger, start-aligned, at least the trigger's width.
- Items: 32px (`body` 20px line + 6px top and bottom), padding 0 8px, `rounded-lg` (10px = 14 − 4), 8px gap, 16px `muted-foreground` icons. Highlighted (hover or keyboard): a raised card, the secondary Button skin (`background` → `secondary` gradient, 1px hairline, 1px drop shadow, inner highlight), with the icon going to `foreground`. Disabled: 50%.
- `inset`: 32px left padding (8 + 16 icon + 8 gap), so inset text lines up with text after an icon.
- `destructive`: text and icon in `destructive` per **Text on tints**; highlighted, the raised card tinted with `destructive` (4% → 9% over `background`; 16% → 11% over `secondary` in dark) and a `destructive`-tinted hairline.
- Checkbox and radio items: a 16px `primary` check (2.5 stroke) 8px from the right (dark: `primary` + 35% white). The check is the only state mark, for both, and draws itself in like Checkbox's tick.
- `DropdownMenuLabel`: `caption` Medium in `muted-foreground`, 28px. `DropdownMenuShortcut`: a recessed keycap (the Kbd recipe), 20px on the 20px text line, `caption` Medium in `muted-foreground`, right-aligned, wide tracking. Separator: engraved, a 1px `border` line (dark: black/40) with a 1px highlight under it, edge to edge, 4px above and below.
- Sub-menus open to the right with the first item level with its trigger; the trigger keeps the raised card while open and ends in a `muted-foreground` chevron.
- Motion: from the trigger, opacity + scale 0.96, 150ms in / 100ms out. Keyboard opens and Escape closes are instant (Base UI's `data-instant`). Reduced motion keeps the fade.

### Combobox

shadcn `Combobox` (`ComboboxInput` with `showTrigger` / `showClear`, `ComboboxContent`, `ComboboxList`, `ComboboxItem`, `ComboboxGroup`, `ComboboxLabel`, `ComboboxCollection`, `ComboboxEmpty`, `ComboboxSeparator`, `ComboboxChips`, `ComboboxChip` with `showRemove`, `ComboboxChipsInput`, `ComboboxTrigger`, `ComboboxValue`, `useComboboxAnchor`). An Input Group field opening the Select's shell and rows.

- `ComboboxInput`: an `InputGroup` (the Input frame), text 11px in; the chevron and clear are ghost `icon-xs` buttons inset 4px. The whole frame is Base UI's anchor, so the popup opens 6px below, flush with the field's left edge and at least its width (measured 0px).
- `ComboboxContent`: the Select shell (`muted`, `rounded-xl`, ring, menu shadow, inner highlight); the list pads 4px. Rows are the Select row (32px, `rounded-lg`, 7px left padding), so row text lands 11px in, level with the input text (measured). The highlighted row (pointer or arrows; focus stays in the input) is the raised card. Selected rows end in the self-drawing 16px `primary` check. Labels: `caption` Medium `muted-foreground`; separator engraved. Empty: a 40px `muted-foreground` line, the height of a one-row list.
- Input inside the popup (`ComboboxTrigger` from a button): the Command's recessed well, 4px from the shell edges with a 10px radius (14 − 4), no ring, `primary` caret, text on the rows' 11px column. Placeholder 4.9–5.6:1 in light, 5.5–6.8:1 in dark.
- `ComboboxChips`: the Input frame with a 3px inner padding once it holds chips, so 24px chips sit 4px from the outer edge (1px border + 3px) with a 6px radius. `ComboboxChip`: the secondary Button skin, 12px Medium `foreground`; its remove button fills the chip's inner height (22px, radius 5 = 6 − 1), its 12px x going to `foreground` on hover. Backspace removes the last chip.
- Invalid: `destructive` border; disabled: the frame at 50%. Motion: the Select's (opacity + scale 0.96 from the field, 150ms in / 100ms out; reduced motion keeps the fade).

### Command

shadcn `Command` on cmdk (`CommandDialog`, `CommandInput`, `CommandList`, `CommandEmpty`, `CommandGroup`, `CommandItem`, `CommandShortcut`, `CommandSeparator`). The Dropdown Menu's shell and rows, with the query typed into a recessed well.

- Shell: `muted` (dark: `popover` + 20% black), `rounded-xl` (14px), 6px padding (a touch roomier than the menus: the palette is a destination, not a flyout). Inline it takes a `ring-1 ring-border` from `className`; `CommandDialog` uses the Dialog frame without its inner card, so the Command is the shell, 1/3 down the screen.
- `CommandInput`: a 32px `InputGroup` pressed into the shell (the Kbd's well: `muted` + 7% `foreground` at the top, inner shadow, hairline, catch-light), `rounded-md` (8px = 14 − 6), 6px from the shell edges and 6px above the list. It holds focus the whole time, so no ring; the caret is `primary`. Placeholder is `muted-foreground` + 20% `foreground` in light (5:1 on the well).
- Search icon, row icons, heading text: one 14px column from the shell edge; query text and row text share the 38px column.
- `CommandItem`: the Dropdown Menu row (32px, `rounded-md`, concentric with the shell, 16px `muted-foreground` icons). The highlighted row (pointer or arrows) lifts out as the raised card, instantly; press sinks it 0.5px. The list is a scroller, which clips at its padding edge, so it extends over the shell's 6px padding (sides and bottom) and pads itself back in: the raised row's hairline and shadow are never cut. `data-checked` rows end in a 16px `primary` check (2.5 stroke) that draws itself. Disabled 50%.
- `CommandShortcut`: the recessed keycap, 8px from the row's right edge, centered on the text line. Group headings: `caption` Medium `muted-foreground`, 28px. Separator: engraved, edge to edge, 6px above and below.
- Empty state: `body` `muted-foreground`, centered, 24px above and below.

### Context Menu

shadcn `ContextMenu` (the same parts as Dropdown Menu, opened by right-click or long-press on `ContextMenuTrigger`). Identical shell, rows, keycap shortcuts, engraved separators, raised highlight and drawing ticks; it opens at the pointer (to its right, the first row level with it) and scales from there.

### Menubar

shadcn `Menubar` (`MenubarMenu`, `MenubarTrigger`, `MenubarContent` and the Dropdown Menu parts, which it composes).

- Bar: a raised 32px strip (the secondary Button skin), `rounded-lg`. 1px border + 3px padding leave 24px triggers, `rounded-md` 6px (10 − 4, concentric), 8px side padding, 2px apart.
- Triggers: `body` Medium; hover `accent`; the open menu's trigger is pressed into the strip (the Toggle's recessed well). Focus: an inset 2px `ring`.
- Content: the Dropdown Menu shell, 4px below the strip, its edge level with the trigger's (alignOffset −4 = border + padding).
- Checkbox and radio items put the check on the left, 8px in (upstream's layout), so their text lands at 32px, level with `inset` items. The check draws itself in.
- Arrow keys move along the bar and into menus (Base UI behavior).

### Tooltip

shadcn `Tooltip` (`TooltipProvider`, `TooltipTrigger`, `TooltipContent`). Wrap the app in `TooltipProvider`.

- Inverted chip: `foreground` fill, `background` text, `caption` (12/16), `rounded-md` (8px), padding 6px 10px, so one line is 28px. Soft drop shadow (`0 1px 2px` + `0 4px 12px`, black 10%; dark 50% / 40%). `max-w-xs`, wraps beyond that.
- Arrow: a 10px square turned 45°, centered 4px inside the edge, so its tip shows 3px and stops short of the trigger at the 4px offset. Base UI points it at the trigger.
- With a `Kbd`: the key is inset 4px from the top, bottom and right, with a 4px radius (8 − 4). It is recessed into the tooltip's own surface, so it uses the opposite theme's Kbd recipe on `foreground`.
- Motion: from the trigger, opacity + scale 0.96, 150ms in / 100ms out. No motion when Base UI marks the open `data-instant` (moving along a toolbar, keyboard focus). Reduced motion keeps the fade.

### Avatar

shadcn `Avatar` (`size` `default` · `sm` · `lg`; `AvatarImage`, `AvatarFallback`, `AvatarBadge`, `AvatarGroup`, `AvatarGroupCount`). 32 / 24 / 40px, `rounded-full`.

- A 1px inset outline above the image (black/8, dark white/10) keeps photos from bleeding into the page, like Item image tiles.
- `AvatarFallback`: the secondary Button's raised skin as a white highlight fading over `secondary` (white/6 plus a top hairline in dark), `caption` Medium in `muted-foreground` (12px on `sm`). Measured 4.68–5.10:1 in light, 4.63–5.52:1 in dark across the gradient.
- `AvatarBadge`: 8 / 10 / 12px, `primary` with the Button's white/15 lift, cut out by a 2px `background` ring; its center sits on the avatar's edge (measured). Recolor with a plain `bg-*` (e.g. `bg-success`); the highlight is an overlay, so it follows. Icons show on `default` and `lg`.
- `AvatarGroup`: −8px overlap, each avatar ringed in `background`. `AvatarGroupCount` reuses the fallback skin and follows the group's size.

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

### Progress

shadcn `Progress` (`ProgressTrack`, `ProgressIndicator`, `ProgressLabel`, `ProgressValue`). The Slider without a thumb.

- Track: the Slider's 6px recessed groove, fully round, with its 3:1 inner hairline (3.5:1 measured in both themes) drawn above the fill, so the channel stays inside the groove's lip.
- Indicator: the Slider's `primary` channel, rounded at its leading end. Width eases in 500ms, ease `cubic-bezier(0.23, 1, 0.32, 1)`; reduced motion jumps.
- Label (`body` Medium) and value (`body` `muted-foreground`, tabular, right-aligned) sit 12px above the track.

### Slider

shadcn `Slider` (one thumb per value; `orientation` `horizontal` · `vertical`, `min`, `max`, `step`, `disabled`). The Switch's parts laid flat: a recessed groove, a `primary` channel and a raised white thumb.

- Track: 6px recessed groove (`input` + 12% `foreground` under the lip → `input`, inner shadow, a 3:1 inner hairline: 3.5:1 measured in both themes), fully round. The range fills it with the Switch's checked channel (`primary` gradient, inner shadow) and ends at the thumb's center.
- Thumb: 16px raised white (the Switch thumb), centered on the groove, edge-aligned (at the min / max it sits flush with the track's ends). Hover deepens the shadow; press scales 0.95 (reduced motion drops it). 40px hit area. Focus (keyboard, on Base UI's hidden range input): the Button's 2px `ring` with a 2px offset.
- The control is 16px on the cross axis, so the thumb never overflows its row. Vertical: the same, rotated, min height 160px.
- Disabled: the whole control at 50%.
- Arrow keys, Page Up / Down, Home / End (Base UI behavior).

### Sonner

shadcn `Toaster` on Sonner (every `Toaster` and `toast()` option as upstream). Toasts are `unstyled` and restyled part by part: the Dialog's frame on its side, a muted shell holding the message on a raised card, with the buttons on the shell to its right.

- Shell: the Dropdown Menu shell (`muted`, dark `popover` + 20% black, `rounded-xl`, 1px `border` ring, menu shadow plus inner top highlight), 4px padding, Sonner's 356px width.
- Card: a `::before` spanning the icon and content columns, inset 4px, `rounded-[10px]` (14 − 4), `popover` fill, 1px `border`, the faint card lift. Content padding 12px; title `body-medium`, description `body` `muted-foreground`, 2px apart. A one-line toast is 52px (card 44px, the Alert's one-line height).
- Icon: a 24px `rounded-md` tile, 10px inside the card, the title line centered on it (measured 0px). Success: `success/15` + `success`. Error: `destructive/10` + text-on-tints red (dark /20, lifted). Info, warning, loading: `muted` + `muted-foreground`. The promise spinner sits in the tile.
- Buttons on the shell: `action` is the default Button, `cancel` the secondary Button, `closeButton` a 44px-wide secondary key with a 16px X. They stretch to the card's height, 4px from the card, each other and the shell's top, right and bottom, so their 10px radius is concentric with the shell. Focus: the 2px `ring` without offset, so it stays inside the shell.
- Stacked toasts behind the front one show the shell and card with their content hidden. Motion is Sonner's own.

### Spinner

shadcn `Spinner`: an `svg` with `role="status"`. Eight round-capped spokes (2px on the 24 grid) stepping from 1/8 to full opacity clockwise; the mark turns a full circle in eight ticks every 0.8s, so the brightest spoke steps forward and the rest trail. Reduced motion halves the speed (1.6s) instead of stopping, since it's the only sign of progress. 16px by default, `currentColor`.

### Switch

shadcn `Switch`, `size` `default` / `sm`. A raised thumb in a recessed track: the button and the key in one control.

- `default`: track 32×18, thumb 14px, 2px inset, 14px travel. `sm`: 24×14, thumb 10px, 10px travel.
- Track, off: the Kbd recipe (`input` + 12% `foreground` at the top fading to `input`, an inner shadow under the lip) with a 3:1 inner hairline (`input` + 48% `foreground`; dark 35%). On: a recessed `primary` channel (`primary` + 14% black at the top), cross-fading in on a ::before.
- Thumb: white in both themes, the secondary button's raised skin (white → 5% darker, a soft drop shadow, a faint bottom edge).
- Hit area 56×42 via ::after. Press: the whole switch scales to 0.95.

### Checkbox and Radio Group

shadcn `Checkbox` and `RadioGroup` / `RadioGroupItem`.

- 16px; the checkbox has a 4px radius, the radio is round. Hit area 40×40 via ::after.
- Unchecked: the secondary button in miniature (`background` → `secondary` gradient, soft lift, faint bottom edge) with a 3:1 border (`input` + 48% `foreground`; dark 35%).
- Checked: the default button's skin (`primary` + 15% white → `primary`, inner top highlight, blue-tinted lift, `primary` + 15% black border) cross-fades in on a ::before. The tick is a 12px, 3px-stroke check; the radio dot is 6px, white, with a hairline shadow.
- Indeterminate (`indeterminate`, Base UI's `data-indeterminate`): the checked skin with an 8×2px white dash in place of the tick, centered on whole pixels (4px in from the sides, 7px from the top).
- Beside `FieldContent`, every control centers on the label's first line (no 1px nudge for the 16px controls; the 18px switch moves up 1px, the 14px one down 1px).

### Toggle motion

Toggles are used tens of times a day, so motion is short, purposeful and built from CSS transitions (interruptible: a fast double-click reverses smoothly). Easing is `cubic-bezier(0.23, 1, 0.32, 1)`.

- Switch: the thumb slides in 200ms; the on-channel fades in step with it.
- Checkbox: the fill fades in 150ms; the tick draws itself from the short stroke to the long one in 200ms, starting 50ms in. Unchecking erases it in 100ms.
- Radio: the dot grows from 0.5× (never from 0) and fades in over 200ms; out in 100ms.
- Press: 0.95 scale on every toggle. Reduced motion keeps the fades and drops scale and drawing.

### Input and Textarea

- `Input`: 32px, `background` fill, 1px `input`, radius 10px, `shadow-xs`, padding 0 10px, text `body`, placeholder `muted-foreground`. For a leading icon or a trailing hint, use `InputGroup`.
- Hover border: `input` + 10% `foreground`. Focus: border `ring` + a 3px `ring/30` ring (`ring/40` in dark).
- Invalid (`aria-invalid`): border `destructive`; on focus a 3px `destructive/25` ring (`/40` in dark).
- File inputs: the "Choose file" button is a chip inset 3px inside the field (24px tall, `rounded-sm`, 1px `input` border, `secondary` fill, 13px Medium `secondary-foreground`, 10px gap before the file name), so it reads as a button apart from the file name.
- `Textarea`: same frame, min 60px tall, grows with its content, resizes vertically only.
- Wrap a control with `Field` for its label and messages (see Field). Error messages say what to do ("Enter a URL ending in .myshopify.com"). Description or error, never both.

### Empty

shadcn `Empty` (`EmptyHeader`, `EmptyMedia` `variant` `default` · `icon`, `EmptyTitle`, `EmptyDescription`, `EmptyContent`).

- Container: centered, 24px padding, `rounded-xl`, 20px between header and content. `border-dashed` is set, so adding `border` gives a dashed outline.
- `EmptyMedia variant="icon"`: a 40px raised key (the secondary Button skin, `rounded-lg`, 20px icon in `foreground`) with two blank `muted` tiles fanned out behind it (±12°, 9px apart, hairline). The tiles sit at z −1 inside `EmptyHeader`'s stacking context, under the key's fill. 16px below.
- `EmptyTitle`: `title` (16/20 Medium). `EmptyDescription`: `body` `muted-foreground`, 4px below; links underlined, `foreground` on hover.

### Field

shadcn `Field` and its parts (`FieldLabel`, `FieldDescription`, `FieldError`, `FieldGroup`, `FieldSet`, `FieldLegend`, `FieldSeparator`, `FieldContent`, `FieldTitle`).

- Vertical fields: label, control, then description or error, 6px apart. Horizontal fields: 8px between label and control, centered.
- `FieldLabel` / `FieldTitle`: 13/16 Medium `foreground`. `FieldDescription`: 13/16 `muted-foreground`. `FieldError`: 13/16 `destructive`. An invalid field turns its control and message red, never its label.
- `FieldLegend`: `title` (16/20 Medium); a description right after it sits 4px below. `FieldGroup`: 20px between fields.
- `FieldSeparator`: 21px row, the engraved `Separator` line and the optional text sharing one center line.
- Choice cards (a `FieldLabel` wrapping a `Field`): `rounded-lg`, 1px `input` border, `accent/50` hover, the input focus ring; checked: `primary/30` border on a `primary/5` fill.

### Input Group

shadcn `InputGroup` (`InputGroupAddon`, `InputGroupButton`, `InputGroupText`, `InputGroupInput`, `InputGroupTextarea`). The group is the field frame (identical to `Input`: fill, border, `shadow-xs`, hover, focus ring, invalid), and the control inside it is borderless.

- Inline addons line up with plain input text: an icon or text sits 11px from the outer edge (1px border + 10px), 8px from the control's text. Inline-end mirrors it.
- Buttons inside: `xs` / `icon-xs` (24px) are inset 3px top, bottom and side with a 6px radius (10 − 1 − 3); `sm` / `icon-sm` (28px) are inset 1px with an 8px radius.
- Block addons (above or below a textarea): text at the same 11px; buttons at the edges inset 8px from the side and bottom.
- Disabled: the whole group at 50%, once.
- The sidebar's **Quick actions** field is an `InputGroup` with a command icon addon and a trailing `Kbd` ("K", 12px Medium).

### Scroll Area

shadcn `ScrollArea` and `ScrollBar` (`orientation` `vertical` · `horizontal`) on Base UI's Scroll Area. Bars overlay the content, inside the root's border, and only render when there is overflow.

- Track 10px; the thumb is 6px, `rounded-full`, `muted-foreground` at 50% (the menus' thin scrollbar), 2px in from the edge and the track's ends. 2.0:1 on `background` (dark 2.5:1).
- Hover or drag: the thumb widens to 8px on the cross axis only (the ends keep their 2px gap) and darkens to `muted-foreground` at 75%, 3.1:1 (dark 4.0:1). 150ms, ease `cubic-bezier(0.23, 1, 0.32, 1)`; reduced motion keeps the color change and drops the width change.
- Corners: the 2px end gap keeps the thumb's round ends inside a `rounded-lg` container (measured: 8.66px of the 9px inner radius at rest, tangent on hover). Rounder containers inset the bar with `className`.
- Keyboard focus on the viewport: a 2px `ring` outline inset 2px (an outline, so it paints above the scrolled content).

### Select

shadcn `Select` (`SelectTrigger` `size` `default` · `sm`, `SelectValue`, `SelectContent` with `alignItemWithTrigger`, `SelectGroup`, `SelectLabel`, `SelectItem`, `SelectSeparator`, scroll buttons). A secondary-button trigger opening the Dropdown Menu's shell and rows.

- `SelectTrigger`: the secondary Button skin (gradient, `input` hairline, secondary shadow; hover and open deepen the bottom stop), 32px (`sm` 28px, 13px text), `rounded-lg`. Text and leading icons sit 11px in (1px border + 10px), like `Input`; 8px gap; `muted-foreground` chevron 8px from the right. Placeholder in `muted-foreground`. Focus: the Button's 2px `ring` with a 2px offset. Invalid: `destructive` border + ring.
- `SelectContent`: the Dropdown Menu shell (`muted`, `rounded-xl`, ring, menu shadow, inner top highlight), groups pad 4px, at least the trigger's width. By default (`alignItemWithTrigger`) it is laid over the trigger with the selected item's text exactly on the value (measured 0px both axes) and the popup flush with the trigger's edges; with `alignItemWithTrigger={false}` it opens 4px below. Thin scrollbar in `muted-foreground`/50.
- `SelectItem`: the Dropdown Menu row (32px, `rounded-lg`, the raised card when highlighted) with 7px left padding, so its text lands 11px from the popup edge like the trigger's. The selected item has a 16px `primary` check (2.5 stroke) 8px from the right that draws itself in. `SelectLabel`: `caption` Medium in `muted-foreground`. `SelectSeparator`: engraved, like `Separator`.
- Motion: below the trigger, opacity + scale 0.96 from the trigger, 150ms in / 100ms out; laid over the trigger it only fades, since the item lands on the value. Reduced motion keeps the fade.
- Closes on pick, outside click, Escape (Base UI behavior).

### Toggle and Toggle Group

shadcn `Toggle` (`variant` `default` · `outline`, `size` `sm` · `default` · `lg`) and `ToggleGroup` / `ToggleGroupItem` (plus `spacing`, `orientation`, `multiple`). On is pressed into the surface: the inverse of the raised Button.

- Off: `default` is flat with an `accent` hover; `outline` is the secondary Button skin. Text and icons `muted-foreground`, `foreground` on hover.
- On (`data-pressed`): the Kbd's recessed well fades in on `::before` (150ms), the text goes to `foreground`, and an `outline` toggle drops its lift (the well covers its border). Pressed text measures 10:1+ in both themes.
- Sizes: 32px (`default`), 28px (`sm`, 13px text, 14px icons), 36px (`lg`), at least square. Press: scale 0.95 (reduced motion drops it).
- `ToggleGroup` with `spacing={0}` and the default variant is the Tabs track: recessed, 3px padding, the same outer height as a Toggle. Items are 6px shorter (26 / 22 / 30px), rounded 7px (`sm` 5px: 10 / 8 − 3, concentric), and the pressed item rises as the Tabs chip. Inactive text is `muted-foreground` + 20% `foreground` in light (4.9:1 on the track), the focus ring is inset. Vertical stacks the same track.
- `spacing={0}` with `outline` is a joined button strip: shared 1px borders, outer corners only; the pressed cell is the well.
- Arrow keys move between items (Base UI behavior).

### Table

shadcn `Table` (`TableHeader`, `TableBody`, `TableFooter`, `TableRow`, `TableHead`, `TableCell`, `TableCaption`). The Dialog's frame laid flat: a muted shell holding the rows on a raised card, with the header, footer and caption on the shell.

- Shell (`table-container`, scrolls horizontally): `muted` (dark: `background` + 20% black, like the Dialog shell), `rounded-xl` (14px), 1px `border` ring, 4px around the card. Without a `TableHeader`, the card fills the shell.
- Card: drawn behind `TableBody` on `::before`, `background` fill, 1px `border`, `rounded-[10px]` (14 − 4, concentric), a faint lift (`0 1px 2px` black/4%; dark /40%).
- `TableHead`: `label` (13/16 Medium) in `muted-foreground` (4.7:1 on the shell), 12px side padding. The header band is 36px above the card: the label's line box sits 10px from the shell's top edge and 10px from the card.
- Body rows: exactly 40px, divided by 1px `border` lines; the last row has none. `body` text, 12px side padding, so header and cell text line up 16px from the shell's inner edge. Numbers are tabular.
- Hover (and a row whose menu is open): `muted`, corner cells rounded 9px to follow the card. Selected (`data-state="selected"`): `primary` 6% over `background` (dark 14%), 9% / 18% on hover; `muted-foreground` text stays ≥ 4.5:1 on all of them.
- `TableFooter` and `TableCaption`: on the shell below the card, line box 10px from the card and 10px from the shell's bottom edge. Footer is `body-medium`; caption `body` `muted-foreground`.
- Fills sit on the cells (the table uses `border-separate`), so they round with the card's corners. Don't wrap the table in another bordered container.

### Data Table

shadcn's Data Table guide (TanStack Table v9 on `Table`; a docs page, not a registry item). It takes the Table's frame as is, so there is no outer bordered `div`.

- Sortable header: a ghost `sm` Button (28px, 13px type, the label size) with `-my-1.5` so the header band stays 36px and `-ml-[9px]` (8px padding + 1px transparent border) so its text lines up with the cells. On the muted shell `accent` barely shows, so the hover/open fill is `foreground` 5%; the text goes to `accent-foreground` (≥ 10:1 in both themes).
- Row actions: a ghost `icon-sm` Button wrapped in `-my-1 -mr-1.5`, so the row stays 40px and the icon's box ends on the cell's text edge.
- Toolbar (filter `Input`, column toggle) 16px above the table; pagination 16px below. The reusable pagination is a container query: first/last buttons from 672px, the page-size Select from 512px.

### Tabs

shadcn `Tabs` (`TabsList` `variant` `default` · `line`, `TabsTrigger`, `TabsContent`; `orientation` `horizontal` · `vertical`). The active tab's skin is Base UI's `Tabs.Indicator`, rendered inside `TabsList`, so it slides between tabs.

- `variant="default"`: a recessed 32px track (the Kbd recipe: `muted` + 7% `foreground` under the top lip → `muted`, inner shadow, hairline, white catch-light below), `rounded-lg`, 3px padding. Triggers are 26px, `rounded-[7px]` (10 − 3, concentric). The active tab sits on a raised chip (white gradient, hairline, 1px drop shadow, inner highlight). Inactive text is `muted-foreground` + 20% `foreground` in light (4.9:1 on the track's darkest stop; plain `muted-foreground` is 4.1:1), `muted-foreground` in dark (5.5:1).
- `variant="line"`: transparent, a 1px `border` hairline under the triggers (right of them when vertical) and a 2px `foreground` bar riding it under the active tab. Inactive text `muted-foreground`. An optional count is a `secondary` badge.
- Vertical: triggers stack at 26px, full width, start-aligned.
- Focus: 2px `ring`, inset inside the track so it never covers a neighbor or the lip. Hit areas reach 40px on the free axis. Disabled: 50%.
- Motion: the indicator slides (translate, width, height) in 200ms, ease `cubic-bezier(0.23, 1, 0.32, 1)`; text color fades in 150ms. Reduced motion jumps.
- Arrow keys move between tabs (Base UI behavior).

### Sidebar

shadcn `Sidebar` (`SidebarProvider`, `variant` `sidebar` · `floating` · `inset`, `collapsible` `offcanvas` · `icon` · `none`, every upstream part, `useSidebar`, ⌘B, the cookie). Upstream's width is 16rem; the design's app shell sets `--sidebar-width: 17rem` (272px) on `SidebarProvider`.

- `sidebar` background with a 1px `sidebar-border` on its edge. `floating` is the card surface (`rounded-xl`, ring, card shadow); `inset` lifts `SidebarInset` into a card (`rounded-xl`, ring, card shadow) 8px from the edges.
- `SidebarMenuButton`: 32px (`sm` 28px with 13px text, `lg` 48px), `rounded-md`, padding 8px, 16px `muted-foreground` icon, 10px gap, `body`. Hover: flat `sidebar-accent`, icon to `foreground`. Active (`isActive`): the raised key, the Dropdown Menu's highlighted row (white gradient, hairline, 1px drop shadow, inner highlight) + Medium. Press sinks it 0.5px. `outline`: the secondary Button skin.
- Collapsed to icons: 32px squares with the icon 8px in on both axes; labels give way to a tooltip on the right.
- `SidebarGroupLabel`: 13/16 Medium `muted-foreground`, 32px row. `SidebarGroupAction` / `SidebarMenuAction`: 20px, `muted-foreground`, 6px from the row's right edge, centered on it.
- `SidebarMenuBadge`: a count in the recessed keycap (the Kbd), 6px from the right, centered on the row.
- `SidebarMenuSub`: hangs off the parent icon's center on an engraved line (hairline + 1px highlight); sub buttons are 28px, `muted-foreground`, and the active one is the raised key.
- `SidebarMenuSkeleton`: Skeleton bars; widths come from `useId`, so server and client match.
- Mobile (< 768px): the Sheet from the left, without the Sheet's shell and card, so it is the same flat `sidebar` surface.
- Motion: width and position slide in 200ms, ease `cubic-bezier(0.23, 1, 0.32, 1)`; reduced motion jumps.

### Skeleton

shadcn `Skeleton`. An empty slot pressed into the surface: the Kbd's well at a whisper (`muted` + 5% `foreground` → `muted`, a soft inner lip, a faint hairline), `rounded-md`. It pulses; reduced motion holds it still. Size and shape come from `className`.

### Breadcrumb

shadcn `Breadcrumb` (`BreadcrumbList`, `BreadcrumbItem`, `BreadcrumbLink` with `render`, `BreadcrumbPage`, `BreadcrumbSeparator`, `BreadcrumbEllipsis`). Links rise as keys on hover; the current page stays plain text.

- `body` in `muted-foreground`, 20px line. Separators: upstream's 14px chevron (pass a `SlashIcon` as children for slashes), 12px from the text on each side.
- `BreadcrumbLink`: hover, keyboard focus and an open menu (`aria-expanded`) fade in the secondary Button skin (white gradient, `input` hairline, soft lift) and turn the text `foreground`. Press drops it 0.5px and loses the lift, like the Button. Focus adds the 2px `ring` on the key. Icons are 16px, 6px from the text.
- `BreadcrumbPage`: plain `body-medium` `foreground`, no fill: it is where you are, not something to press.
- The link skin bleeds 6px left/right and 2px up/down from the text box (24px tall, `rounded-md`), so the crumb text stays on the text line and never shifts. Links get a 40px hit area via `::after`.
- A dropdown on a crumb renders the trigger as `BreadcrumbLink` (`render={<button />}`), with the menu at `sideOffset={6}` and `alignOffset={-6}`, so it lines up 4px below the key and flush with its left edge.
- Motion: the skin fades in 150ms, ease `cubic-bezier(0.23, 1, 0.32, 1)`; reduced motion drops the press.

### Separator

shadcn `Separator` (`orientation` `horizontal` · `vertical`). Engraved: a 1px `border` line (dark: black/40) with a 1px highlight under it, or to its right when vertical (white 80%; dark: 5%). The highlight is a shadow, so the separator takes 1px of layout. `FieldSeparator`, `ItemSeparator` and `DropdownMenuSeparator` use the same groove.

### Kbd

shadcn `Kbd` / `KbdGroup`. 20px tall, min 20px wide, `rounded-sm`, 12/16 Medium `muted-foreground`, 12px icons; keys in a group are 4px apart.

- Recessed, the inverse of the raised button: a gradient from `muted` + 7% `foreground` at the top to `muted` at the bottom; an inner shadow under the top lip (`inset 0 1px 1.5px` black 12%), a 1px inner hairline (black 5%) and a 1px white catch-light just below the bottom edge (90%). Dark: top `muted` + 35% black, inner shadow 60%, hairline 25%, catch-light 7%. The hairline is an inset shadow, so the key's size never changes.

- Inside an `InputGroup` addon it is inset 5px from the top, bottom and side, with a 4px radius (10 − 1 − 5).

### Attachment

shadcn `Attachment` (`state` `idle` · `uploading` · `processing` · `error` · `done`, `size` `default` · `sm` · `xs`, `orientation` `horizontal` · `vertical`; `AttachmentMedia` `variant` `icon` · `image`, `AttachmentContent`, `AttachmentTitle`, `AttachmentDescription`, `AttachmentActions`, `AttachmentAction`, `AttachmentTrigger`, `AttachmentGroup`). A muted chip holding a raised tile, like the Dialog's shell and card.

- Chip: `muted` fill, 1px `border`. Horizontal chips are 56 / 44 / 36px tall with or without media. The radius and the tile inset are paired so the tile is concentric: 18px − 8px = 10px (`default`), 14 − 6 = 8 (`sm`), 10 − 4 = 6 (`xs`). Tiles are 40 / 32 / 28px; without media the text sits 12 / 10 / 8px in.
- `icon` media: the secondary Button skin (white key, `input` hairline, soft lift) with a 16px `foreground` icon (14px for `xs`, 24px when vertical). `image` media: the picture with a 1px black/10 outline (white/10 in dark), dimmed to 60% while uploading or processing.
- Title `body-medium` (`sm` / `xs`: 12/16 Medium), truncated; description `caption` in `muted-foreground` (4.7:1 on the chip, 5.5:1 dark), 2px below (flush for `sm` / `xs`). `uploading` and `processing` shimmer the title.
- `idle`: a dashed `input` + 15% `foreground` outline. `error`: `destructive/30` outline; the tile flattens to the `destructive/10` tint and the icon and description take the text-on-tints red (6:1 light, 7.3:1 dark).
- Actions: ghost `icon-xs`, 8px from the end, centered; 40px-tall hit areas. Vertical: over the image's top-right corner.
- With an `AttachmentTrigger`: hover lifts the chip toward `background` with an `input` outline (dark: `muted` + 4% `foreground`), keeping the description ≥ 4.5:1; keyboard focus draws the 2px `ring` inset on the chip edge, so a scrolling group never clips it.
- `AttachmentGroup`: a snapping, horizontally scrolling row, 12px gaps, faded edges.

### Bubble

shadcn `Bubble` (`BubbleContent` with `render`, `BubbleReactions` `side` / `align`, `BubbleGroup`), `variant` `default` · `secondary` · `muted` · `tinted` · `outline` · `ghost` · `destructive`, `align` `start` · `end`.

- `BubbleContent`: `rounded-2xl` (18px), `body` (14/20), padding 7px 13px inside a 1px border (transparent unless the variant draws one), so text sits 8px / 14px from the edge and one line is 36px: a pill. Up to 80% of the row (`ghost`: full width).
- `default` is the person's own turn, an ink key raised like the default Button: `foreground` + 12% `background` at the top → `foreground`, `foreground` + 20% black hairline, soft lift and inner highlight, `background` text (9:1 light, 11.5:1 dark). It inverts with the theme. `primary` stays reserved for actions.
- `secondary`: the secondary Button skin. `muted`: flat `muted`, for the other side. `tinted`: `primary` 8% over `background` (dark 18%), `foreground` text. `outline`: 1px `border` on `background`. `ghost`: unframed, no padding. `destructive`: `destructive/10` (dark /20) with text per **Text on tints** (5.6:1 light, 5.9:1 dark).
- As links or buttons: `default` brightens (dark: dims), `secondary` deepens its bottom stop, flat fills step 5% toward `foreground`, `outline` / `ghost` take `accent`. Focus: the 2px `ring` with a 2px offset.
- `BubbleGroup`: bubbles 4px apart; the corners between them on the sender's side tuck to 6px (`rounded-sm`), so a run reads as one turn. "Sender's side" follows the bubble's or its Message's `end` alignment.
- `BubbleReactions`: a 24px raised chip (secondary Button skin, `rounded-full`), 12px in from the bubble's side and hanging 3/4 of its height past the edge.

### Message

shadcn `Message` (`align` `start` · `end`; `MessageGroup`, `MessageAvatar`, `MessageContent`, `MessageHeader`, `MessageFooter`). Pure layout around a `Bubble`.

- Avatar and content 8px apart. `MessageAvatar` (32px, `muted`, `rounded-full`, a low-opacity outline like Item image tiles) sits 2px above the row's bottom, so it centers on a one-line bubble and on the last line of a longer one (measured 0px). With a footer it rises 36px (footer 28px + gap 8px) to stay level with the bubble.
- `MessageContent`: header, bubble and footer 8px apart. `MessageGroup`: messages 8px apart.
- `MessageHeader` / `MessageFooter`: `caption` Medium in `muted-foreground`, text 14px in, level with the bubble text. The footer is a 28px row for ghost `icon-sm` actions; with buttons it pads 8px, so the first icon's ink lands on the bubble's text line (measured 0px). On `ghost` bubbles both drop their padding. The footer follows the message's side.

### Marker

shadcn `Marker` (`variant` `default` · `border` · `separator`, `render`; `MarkerIcon`, `MarkerContent`). Notes between messages.

- `body` in `muted-foreground`, 20px line, 16px icon 8px before the text.
- `separator`: the engraved Separator line on both sides (hairline + 1px highlight; dark black/40), 12px from the label. `border`: the same engraved line under the row, 8px below the text.
- As links or buttons the text goes to `foreground` on hover; focus is the 2px `ring` with a 2px offset. Streaming text takes the `shimmer` utility; status markers take a `Spinner`.

### Message Scroller

shadcn `MessageScroller` on `@shadcn/react` (`MessageScrollerProvider`, `MessageScrollerViewport`, `MessageScrollerContent`, `MessageScrollerItem`, `MessageScrollerButton`, the three hooks). Behavior is upstream's; only the frame is styled.

- Viewport: the Scroll Area's thin thumb (`muted-foreground`/50, transparent track) with a stable gutter, a fade at the bottom edge, and keyboard focus as a 2px `ring` outline inset 2px. Rows 24px apart.
- `MessageScrollerButton`: a round `secondary` `icon-sm` key (28px) with a down arrow, centered 16px from the edge, with a 40px hit area. It rises in from 8px past its spot at 0.95 scale with opacity, 200ms; out in 150ms; ease `cubic-bezier(0.23, 1, 0.32, 1)`. Reduced motion keeps the fade.

### Questionnaire

shadcn `Questionnaire` on `@shadcn/react` (every upstream part; navigation buttons take Button `variant` and `size`). One question at a time, answered with Field choice cards.

- `QuestionnaireTitle`: `title` (16/20 Medium); the description 4px below in `muted-foreground`; choices 16px below that, 8px apart.
- `QuestionnaireChoice`: the Field choice card: `rounded-lg`, 1px `input` border on `background`, `shadow-xs`, 12px in, 44px for one line (1 + 11 + 20 + 11 + 1). Hover `accent/50`; checked `primary/30` border on `primary` 5% (dark /20 on 10%); keyboard focus is the input ring on the card. Invalid: `destructive` border. Disabled: 50%.
- Indicator: the Checkbox (`multiple`) or Radio skin at 16px, centered on the first text line (measured 0px); the checked skin fades in, the tick draws itself, the dot grows from half size. Press scales 0.95.
- Shortcut: the recessed Kbd keycap (20px, `caption` Medium in `muted-foreground` + 20% `foreground`; 4.9:1 light, 5.5:1 dark at the darkest stop), at the end of the first line, 13px from the edge like the indicator.
- `QuestionnaireInput`: the Input. `QuestionnaireError`: the Field error (13/16 `destructive`), 6px under the choices. `QuestionnaireProgress`: `caption` Medium `muted-foreground`, tabular.
- Actions: Previous at the start (`outline`), Skip (`outline`) and Next / Submit (`default`) at the end, 8px apart. 44px tall on touch screens, 32px from `sm`.

---

## 6. Blocks

App-level compositions built from the components above. They are not shadcn components and ship as blocks, if at all.

- **App header:** 40px app tile (`background`, `border`, `rounded-lg`, `shadow-xs`, holds the partner's own logo) → title in `heading` + status `Badge` → one-line description in `muted-foreground`. 12px gaps.
- **Section:** `title` heading, 12px above its content. 32px between sections.
- **Key/value table** (`Table` without a header, or `Item`s): the Table shell and card. Rows exactly 40px, divided by `border`. Two equal columns; the key column has a right hairline. Key: 16px icon + `body` `muted-foreground`. Value: `body` `foreground`; counts that open a list are underlined.
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
- All text meets WCAG AA (4.5:1) in both themes, including hover states. Check new pairs with the browser's own `color-mix()` output, not by eye.
- Controls that are nothing but their outline (checkbox, radio, switch track) meet 3:1 against their surroundings. Text fields use the softer `input` border (#e0e0e0, about 1.3:1) and rely on their label and placeholder; that is a known gap, not a 3:1 pass.
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
