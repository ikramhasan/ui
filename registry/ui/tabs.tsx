"use client"

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-horizontal:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  "group/tabs-list relative isolate inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        // A recessed track (the Kbd recipe): darker under the top lip, an
        // inner shadow and hairline, and a catch-light below the bottom edge.
        default:
          "bg-muted bg-linear-to-b text-[color-mix(in_oklch,var(--muted-foreground),var(--foreground)_20%)] dark:text-muted-foreground from-[color-mix(in_oklch,var(--muted),var(--foreground)_7%)] to-muted shadow-[inset_0_1px_2px_rgb(0_0_0/0.1),inset_0_0_0_1px_rgb(0_0_0/0.05),0_1px_0_rgb(255_255_255/0.9)] dark:from-[color-mix(in_oklch,var(--muted),black_35%)] dark:shadow-[inset_0_1px_2px_rgb(0_0_0/0.6),inset_0_0_0_1px_rgb(0_0_0/0.25),0_1px_0_rgb(255_255_255/0.07)]",
        // An engraved hairline under (or beside) the triggers.
        line: "gap-1 bg-transparent group-data-horizontal/tabs:shadow-[inset_0_-1px_0_var(--border)] group-data-vertical/tabs:shadow-[inset_-1px_0_0_var(--border)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

// The active tab's skin lives on Base UI's indicator, which slides between
// tabs. It sits under the triggers (-z-1 in the list's stacking context).
const tabsIndicatorVariants = cva(
  "pointer-events-none absolute -z-1 transition-[translate,width,height] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none",
  {
    variants: {
      variant: {
        // A raised chip (the secondary Button in white), concentric with the
        // track: radius 10 − 3px padding.
        default:
          "top-0 left-0 h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) translate-y-(--active-tab-top) rounded-[calc(var(--radius-lg)-3px)] bg-linear-to-b from-background to-[color-mix(in_oklch,var(--background),var(--secondary)_60%)] shadow-[0_1px_2px_rgb(0_0_0/0.1),0_0_0_1px_rgb(0_0_0/0.07),inset_0_-1px_0_rgb(0_0_0/0.03)] dark:from-[color-mix(in_oklch,var(--secondary),var(--foreground)_9%)] dark:to-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] dark:shadow-[0_1px_2px_rgb(0_0_0/0.5),0_0_0_1px_rgb(255_255_255/0.06),inset_0_1px_0_rgb(255_255_255/0.07)]",
        // A 2px bar riding the hairline.
        line: "rounded-full bg-foreground group-data-horizontal/tabs:bottom-0 group-data-horizontal/tabs:left-0 group-data-horizontal/tabs:translate-x-(--active-tab-left) group-data-horizontal/tabs:h-0.5 group-data-horizontal/tabs:w-(--active-tab-width) group-data-vertical/tabs:top-0 group-data-vertical/tabs:translate-y-(--active-tab-top) group-data-vertical/tabs:right-0 group-data-vertical/tabs:h-(--active-tab-height) group-data-vertical/tabs:w-0.5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  children,
  ...props
}: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    >
      {children}
      <TabsPrimitive.Indicator
        renderBeforeHydration
        className={tabsIndicatorVariants({ variant })}
      />
    </TabsPrimitive.List>
  )
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        // 26px in a 32px track (3px padding). The hit area grows to 40px on
        // the free axis (the after: pseudo-element), never into a neighbor.
        // In the track the focus ring is inset, so it can't cover the
        // neighboring tab or the track's lip.
        "relative inline-flex flex-1 items-center justify-center gap-1.5 rounded-[calc(var(--radius-lg)-3px)] border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-current transition-[color,box-shadow] duration-150 outline-none select-none group-data-horizontal/tabs:h-full group-data-vertical/tabs:h-[26px] group-data-vertical/tabs:w-full group-data-vertical/tabs:flex-none group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring group-data-[variant=default]/tabs-list:focus-visible:ring-inset disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-active:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "after:absolute group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:-inset-y-[7px] group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-inset-x-1",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("flex-1 text-sm outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
