"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "@base-ui/react/select"
import { cn } from "cn"
import { ChevronDownIcon, CheckIcon, ChevronUpIcon } from "lucide-react"

const Select = SelectPrimitive.Root

function SelectGroup({ className, ...props }: SelectPrimitive.Group.Props) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn("scroll-my-1 p-1", className)}
      {...props}
    />
  )
}

function SelectValue({ className, ...props }: SelectPrimitive.Value.Props) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn("flex flex-1 text-left", className)}
      {...props}
    />
  )
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: SelectPrimitive.Trigger.Props & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        // The secondary Button skin: a raised gradient with a hairline and an
        // inner shadow at the bottom. Text sits 11px in (1px border + 10px),
        // the same as Input, so the two line up in a form.
        "flex w-fit items-center justify-between gap-1.5 rounded-lg border border-input bg-linear-to-b from-background to-secondary py-2 pr-2 pl-2.5 text-sm whitespace-nowrap text-secondary-foreground shadow-[0_1px_2px_rgb(0_0_0/0.06),inset_0_-1px_0_rgb(0_0_0/0.03)] transition-[color,border-color,box-shadow] outline-none select-none hover:to-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-popup-open:to-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:text-[13px] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:from-[color-mix(in_oklch,var(--secondary),var(--foreground)_4%)] dark:shadow-[0_1px_2px_rgb(0_0_0/0.4),inset_0_1px_0_rgb(255_255_255/0.06)] dark:hover:to-[color-mix(in_oklch,var(--secondary),var(--foreground)_8%)] dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 dark:data-popup-open:to-[color-mix(in_oklch,var(--secondary),var(--foreground)_8%)] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon
        render={
          <ChevronDownIcon className="pointer-events-none size-4 text-muted-foreground" />
        }
      />
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  alignItemWithTrigger = true,
  ...props
}: SelectPrimitive.Popup.Props &
  Pick<
    SelectPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger"
  >) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className="isolate z-50"
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          data-align-trigger={alignItemWithTrigger}
          className={cn(
            // The Dropdown Menu shell: muted, 14px radius; groups pad 4px, so
            // items are 10px (14 − 4). Below the trigger it scales from it;
            // laid over the trigger (data-side="none") it only fades, since
            // the selected item lands exactly on the value.
            "relative isolate z-50 max-h-(--available-height) w-(--anchor-width) min-w-36 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-xl bg-muted text-sm text-popover-foreground shadow-[0_1px_2px_rgb(0_0_0/0.04),0_8px_24px_rgb(0_0_0/0.1),inset_0_1px_0_rgb(255_255_255/0.7)] ring-1 ring-border transition-[opacity,scale] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] outline-none data-ending-style:scale-96 data-ending-style:opacity-0 data-ending-style:duration-100 data-starting-style:scale-96 data-starting-style:opacity-0 data-[side=none]:data-ending-style:scale-100 data-[side=none]:data-starting-style:scale-100 motion-reduce:data-ending-style:scale-100 motion-reduce:data-starting-style:scale-100 dark:bg-[color-mix(in_oklch,var(--popover),black_20%)] dark:shadow-[0_1px_2px_rgb(0_0_0/0.5),0_8px_24px_rgb(0_0_0/0.5),inset_0_1px_0_rgb(255_255_255/0.04)] [scrollbar-color:color-mix(in_oklch,var(--muted-foreground),transparent_50%)_transparent] [scrollbar-width:thin]",
            className
          )}
          {...props}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.List>{children}</SelectPrimitive.List>
          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: SelectPrimitive.GroupLabel.Props) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn(
        "px-[7px] py-1.5 text-xs font-medium text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: SelectPrimitive.Item.Props) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        // The Dropdown Menu row: 32px (20px line + 2 × 6px), and the
        // highlighted row lifts out of the shell as a raised card. Text sits
        // 11px in (4px group + 7px), as in the trigger (1px border + 10px),
        // so the popup laid over the trigger lands flush with its edges.
        "relative flex min-h-8 w-full cursor-default items-center gap-2 rounded-lg py-1.5 pr-8 pl-[7px] text-sm outline-hidden select-none focus:bg-linear-to-b focus:from-background focus:to-[color-mix(in_oklch,var(--background),var(--secondary)_60%)] focus:text-accent-foreground focus:shadow-[0_1px_2px_rgb(0_0_0/0.08),0_0_0_1px_rgb(0_0_0/0.06),inset_0_-1px_0_rgb(0_0_0/0.03)] dark:focus:from-[color-mix(in_oklch,var(--secondary),var(--foreground)_7%)] dark:focus:to-[color-mix(in_oklch,var(--secondary),var(--foreground)_3%)] dark:focus:shadow-[0_1px_2px_rgb(0_0_0/0.5),0_0_0_1px_rgb(255_255_255/0.05),inset_0_1px_0_rgb(255_255_255/0.06)] focus:[&_svg:not([class*='text-'])]:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText className="flex flex-1 shrink-0 items-center gap-2 whitespace-nowrap">
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator
        keepMounted
        render={
          // The tick draws itself, like Checkbox and the Dropdown Menu.
          <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center [&_path]:transition-[stroke-dashoffset] [&_path]:duration-200 [&_path]:ease-[cubic-bezier(0.23,1,0.32,1)] [&_path]:[stroke-dasharray:24] not-data-[selected]:[&_path]:duration-100 not-data-[selected]:[&_path]:[stroke-dashoffset:-24] data-[selected]:[&_path]:[stroke-dashoffset:0] motion-reduce:[&_path]:transition-none" />
        }
      >
        <CheckIcon className="pointer-events-none stroke-[2.5] text-primary dark:text-[color-mix(in_oklch,var(--primary),white_35%)]" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: SelectPrimitive.Separator.Props) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      // Engraved, like Separator: a hairline with a highlight under it.
      className={cn(
        "pointer-events-none -mx-1 my-1 h-px bg-border shadow-[0_1px_0_rgb(255_255_255/0.8)] dark:bg-black/40 dark:shadow-[0_1px_0_rgb(255_255_255/0.05)]",
        className
      )}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={cn(
        "top-0 z-10 flex w-full cursor-default items-center justify-center bg-muted py-1 text-muted-foreground dark:bg-[color-mix(in_oklch,var(--popover),black_20%)] [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpArrow>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={cn(
        "bottom-0 z-10 flex w-full cursor-default items-center justify-center bg-muted py-1 text-muted-foreground dark:bg-[color-mix(in_oklch,var(--popover),black_20%)] [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownArrow>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
