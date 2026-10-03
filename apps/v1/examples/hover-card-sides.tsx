import { buttonVariants } from "@/registry/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/ui/hover-card"

export function HoverCardSides() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <HoverCard key={side}>
          <HoverCardTrigger
            href="#hover-card"
            className={buttonVariants({
              variant: "secondary",
              className: "capitalize",
            })}
          >
            {side}
          </HoverCardTrigger>
          <HoverCardContent side={side} className="w-48">
            <p className="font-medium capitalize">{side}</p>
            <p className="mt-1 text-muted-foreground">
              Opens on hover or keyboard focus.
            </p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}
