import { CalendarIcon } from "lucide-react"

import { buttonVariants } from "@/registry/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/ui/hover-card"

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger
        href="https://github.com/shadcn"
        className={buttonVariants({ variant: "link" })}
      >
        @shadcn
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="flex gap-3">
          <div
            aria-hidden
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground"
          >
            SC
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-medium">@shadcn</p>
            <p className="text-muted-foreground">
              Beautifully designed components. Open source.
            </p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
              <CalendarIcon className="size-3.5" />
              Joined December 2021
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
