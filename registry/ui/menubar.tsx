"use client"

import * as React from "react"
import { Menu as MenuPrimitive } from "@base-ui/react/menu"
import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar"
import { cn } from "cn"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/registry/ui/dropdown-menu"
import { CheckIcon } from "lucide-react"

function Menubar({ className, ...props }: MenubarPrimitive.Props) {
  return (
    <MenubarPrimitive
      data-slot="menubar"
      className={cn(
        // A raised strip (the secondary Button skin), 32px: 1px border + 3px
        // padding leave 24px triggers, rounded 6px (10 − 4, concentric).
        "flex h-8 items-center gap-0.5 rounded-lg border border-input bg-linear-to-b from-background to-secondary p-[3px] shadow-[0_1px_2px_rgb(0_0_0/0.06),inset_0_-1px_0_rgb(0_0_0/0.03)] dark:from-[color-mix(in_oklch,var(--secondary),var(--foreground)_4%)] dark:shadow-[0_1px_2px_rgb(0_0_0/0.4),inset_0_1px_0_rgb(255_255_255/0.06)]",
        className
      )}
      {...props}
    />
  )
}

function MenubarMenu({ ...props }: React.ComponentProps<typeof DropdownMenu>) {
  return <DropdownMenu data-slot="menubar-menu" {...props} />
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuGroup>) {
  return <DropdownMenuGroup data-slot="menubar-group" {...props} />
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPortal>) {
  return <DropdownMenuPortal data-slot="menubar-portal" {...props} />
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuTrigger>) {
  return (
    <DropdownMenuTrigger
      data-slot="menubar-trigger"
      className={cn(
        // Hover is a flat fill; the open menu's trigger is pressed into the
        // strip (the Toggle's recessed well, fading in on ::before).
        "relative isolate flex h-6 items-center rounded-[calc(var(--radius-lg)-4px)] px-2 text-sm font-medium outline-hidden transition-colors duration-150 select-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset aria-expanded:bg-transparent aria-expanded:before:opacity-100 before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:bg-linear-to-b before:from-[color-mix(in_oklch,var(--muted),var(--foreground)_7%)] before:to-muted before:opacity-0 before:shadow-[inset_0_1px_2px_rgb(0_0_0/0.1),inset_0_0_0_1px_rgb(0_0_0/0.05)] before:transition-opacity before:duration-150 before:ease-[cubic-bezier(0.23,1,0.32,1)] dark:before:from-[color-mix(in_oklch,var(--muted),black_35%)] dark:before:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(0_0_0/0.25)]",
        className
      )}
      {...props}
    />
  )
}

function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof DropdownMenuContent>) {
  return (
    <DropdownMenuContent
      data-slot="menubar-content"
      // The Dropdown Menu shell. alignOffset −4 (1px border + 3px padding)
      // lines the first menu up with the strip's edge; sideOffset 8 from the
      // trigger opens it 4px below the strip.
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={cn("w-auto min-w-36", className)}
      {...props}
    />
  )
}

function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}: React.ComponentProps<typeof DropdownMenuItem>) {
  return (
    <DropdownMenuItem
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      inset={inset}
      variant={variant}
      className={cn("group/menubar-item", className)}
      {...props}
    />
  )
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: MenuPrimitive.CheckboxItem.Props & {
  inset?: boolean
}) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      data-inset={inset}
      className={cn(
        // The Dropdown Menu row with the check on the left, 8px in: text at
        // 32px (8 + 16 + 8), level with inset items.
        "relative flex min-h-8 cursor-default items-center gap-2 rounded-lg py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-linear-to-b focus:from-background focus:to-[color-mix(in_oklch,var(--background),var(--secondary)_60%)] focus:text-accent-foreground focus:shadow-[0_1px_2px_rgb(0_0_0/0.08),0_0_0_1px_rgb(0_0_0/0.06),inset_0_-1px_0_rgb(0_0_0/0.03)] dark:focus:from-[color-mix(in_oklch,var(--secondary),var(--foreground)_7%)] dark:focus:to-[color-mix(in_oklch,var(--secondary),var(--foreground)_3%)] dark:focus:shadow-[0_1px_2px_rgb(0_0_0/0.5),0_0_0_1px_rgb(255_255_255/0.05),inset_0_1px_0_rgb(255_255_255/0.06)] not-data-[variant=destructive]:focus:[&_svg:not([class*='text-'])]:text-foreground data-inset:pl-8 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-4 items-center justify-center">
        <MenuPrimitive.CheckboxItemIndicator
          keepMounted
          className="flex [&_path]:transition-[stroke-dashoffset] [&_path]:duration-200 [&_path]:ease-[cubic-bezier(0.23,1,0.32,1)] [&_path]:[stroke-dasharray:24] data-checked:[&_path]:[stroke-dashoffset:0] data-unchecked:[&_path]:duration-100 data-unchecked:[&_path]:[stroke-dashoffset:-24] motion-reduce:[&_path]:transition-none"
        >
          <CheckIcon className="stroke-[2.5] text-primary dark:text-[color-mix(in_oklch,var(--primary),white_35%)]" />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  )
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuRadioGroup>) {
  return <DropdownMenuRadioGroup data-slot="menubar-radio-group" {...props} />
}

function MenubarRadioItem({
  className,
  children,
  inset,
  ...props
}: MenuPrimitive.RadioItem.Props & {
  inset?: boolean
}) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="menubar-radio-item"
      data-inset={inset}
      className={cn(
        "relative flex min-h-8 cursor-default items-center gap-2 rounded-lg py-1.5 pr-2 pl-8 text-sm outline-hidden select-none focus:bg-linear-to-b focus:from-background focus:to-[color-mix(in_oklch,var(--background),var(--secondary)_60%)] focus:text-accent-foreground focus:shadow-[0_1px_2px_rgb(0_0_0/0.08),0_0_0_1px_rgb(0_0_0/0.06),inset_0_-1px_0_rgb(0_0_0/0.03)] dark:focus:from-[color-mix(in_oklch,var(--secondary),var(--foreground)_7%)] dark:focus:to-[color-mix(in_oklch,var(--secondary),var(--foreground)_3%)] dark:focus:shadow-[0_1px_2px_rgb(0_0_0/0.5),0_0_0_1px_rgb(255_255_255/0.05),inset_0_1px_0_rgb(255_255_255/0.06)] not-data-[variant=destructive]:focus:[&_svg:not([class*='text-'])]:text-foreground data-inset:pl-8 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-4 items-center justify-center">
        <MenuPrimitive.RadioItemIndicator
          keepMounted
          className="flex [&_path]:transition-[stroke-dashoffset] [&_path]:duration-200 [&_path]:ease-[cubic-bezier(0.23,1,0.32,1)] [&_path]:[stroke-dasharray:24] data-checked:[&_path]:[stroke-dashoffset:0] data-unchecked:[&_path]:duration-100 data-unchecked:[&_path]:[stroke-dashoffset:-24] motion-reduce:[&_path]:transition-none"
        >
          <CheckIcon className="stroke-[2.5] text-primary dark:text-[color-mix(in_oklch,var(--primary),white_35%)]" />
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  )
}

function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuLabel> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuLabel
      data-slot="menubar-label"
      data-inset={inset}
      inset={inset}
      className={className}
      {...props}
    />
  )
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuSeparator>) {
  return (
    <DropdownMenuSeparator
      data-slot="menubar-separator"
      className={className}
      {...props}
    />
  )
}

function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuShortcut>) {
  return (
    <DropdownMenuShortcut
      data-slot="menubar-shortcut"
      className={className}
      {...props}
    />
  )
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuSub>) {
  return <DropdownMenuSub data-slot="menubar-sub" {...props} />
}

function MenubarSubTrigger({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuSubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuSubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      inset={inset}
      className={className}
      {...props}
    />
  )
}

function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuSubContent>) {
  return (
    <DropdownMenuSubContent
      data-slot="menubar-sub-content"
      className={cn("min-w-32", className)}
      {...props}
    />
  )
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}
