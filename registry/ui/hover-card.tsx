"use client"

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card"
import { cn } from "cn"

function HoverCard({ ...props }: PreviewCardPrimitive.Root.Props) {
  return <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />
}

function HoverCardTrigger({ ...props }: PreviewCardPrimitive.Trigger.Props) {
  return (
    <PreviewCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  )
}

function HoverCardContent({
  className,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 4,
  ...props
}: PreviewCardPrimitive.Popup.Props &
  Pick<
    PreviewCardPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <PreviewCardPrimitive.Portal data-slot="hover-card-portal">
      <PreviewCardPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <PreviewCardPrimitive.Popup
          data-slot="hover-card-content"
          className={cn(
            // The Popover surface: 14px radius, 16px padding, menu shadow.
            // Scales from the trigger, 200ms in / 150ms out.
            "z-50 w-64 origin-(--transform-origin) rounded-xl bg-popover p-4 text-sm text-popover-foreground shadow-[0_1px_2px_rgb(0_0_0/0.04),0_8px_24px_rgb(0_0_0/0.1)] ring-1 ring-border transition-[opacity,scale] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] outline-hidden data-ending-style:scale-96 data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:scale-96 data-starting-style:opacity-0 motion-reduce:data-ending-style:scale-100 motion-reduce:data-starting-style:scale-100 dark:shadow-[0_1px_2px_rgb(0_0_0/0.5),0_8px_24px_rgb(0_0_0/0.5)]",
            className
          )}
          {...props}
        />
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }
