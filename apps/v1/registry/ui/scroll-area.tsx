"use client"

import * as React from "react"
import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area"
import { cn } from "cn"

function ScrollArea({
  className,
  children,
  ...props
}: ScrollAreaPrimitive.Root.Props) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn("relative", className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        // An outline, not a ring: it paints above the scrolled content.
        className="size-full rounded-[inherit] outline-none focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-solid focus-visible:outline-ring"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}: ScrollAreaPrimitive.Scrollbar.Props) {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        // A 6px thumb centered in a 10px track; it widens to 8px while hovered
        // or dragged. The 2px end gap keeps its round ends inside a rounded-lg
        // corner.
        "group/scrollbar flex touch-none p-0.5 transition-[padding] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] select-none data-horizontal:h-2.5 data-horizontal:flex-col data-vertical:h-full data-vertical:w-2.5 data-horizontal:hover:py-px data-horizontal:has-active:py-px data-vertical:hover:px-px data-vertical:has-active:px-px motion-reduce:transition-none",
        className
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb
        data-slot="scroll-area-thumb"
        className="relative flex-1 rounded-full bg-[color-mix(in_oklch,var(--muted-foreground),transparent_50%)] transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/scrollbar:bg-[color-mix(in_oklch,var(--muted-foreground),transparent_25%)] active:bg-[color-mix(in_oklch,var(--muted-foreground),transparent_25%)]"
      />
    </ScrollAreaPrimitive.Scrollbar>
  )
}

export { ScrollArea, ScrollBar }
