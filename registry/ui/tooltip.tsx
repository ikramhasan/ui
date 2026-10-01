"use client"

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip"
import { cn } from "cn"

function TooltipProvider({
  delay = 0,
  ...props
}: TooltipPrimitive.Provider.Props) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delay={delay}
      {...props}
    />
  )
}

function Tooltip({ ...props }: TooltipPrimitive.Root.Props) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

function TooltipTrigger({ ...props }: TooltipPrimitive.Trigger.Props) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

// Opacity + scale out of the trigger; skipped entirely when Base UI marks the
// open as instant (moving between tooltips in a group, or keyboard focus).
// The arrow is a 10px square turned 45°, centered 4px inside the edge, so its
// tip stops short of the trigger at the default 4px offset.
function TooltipContent({
  className,
  side = "top",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  children,
  ...props
}: TooltipPrimitive.Popup.Props &
  Pick<
    TooltipPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-content"
          className={cn(
            "z-50 inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-md bg-foreground px-2.5 py-1.5 text-xs text-background shadow-[0_1px_2px_rgb(0_0_0/0.1),0_4px_12px_rgb(0_0_0/0.1)] transition-[opacity,scale] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] has-data-[slot=kbd]:py-1 has-data-[slot=kbd]:pr-1 data-ending-style:scale-96 data-ending-style:opacity-0 data-ending-style:duration-100 data-instant:duration-0 data-starting-style:scale-96 data-starting-style:opacity-0 motion-reduce:data-ending-style:scale-100 motion-reduce:data-starting-style:scale-100 dark:shadow-[0_1px_2px_rgb(0_0_0/0.5),0_4px_12px_rgb(0_0_0/0.4)] **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-[4px]",
            className
          )}
          {...props}
        >
          {children}
          <TooltipPrimitive.Arrow className="z-50 size-2.5 rotate-45 rounded-[2px] bg-foreground fill-foreground data-[side=bottom]:-top-px data-[side=inline-end]:-left-px data-[side=inline-start]:-right-px data-[side=left]:-right-px data-[side=right]:-left-px data-[side=top]:-bottom-px" />
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
