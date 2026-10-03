import { Button } from "@/registry/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/ui/popover"

export function PopoverSides() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Popover key={side}>
          <PopoverTrigger
            render={<Button variant="outline" className="capitalize" />}
          >
            {side}
          </PopoverTrigger>
          <PopoverContent side={side} className="w-auto">
            Opens on the {side}.
          </PopoverContent>
        </Popover>
      ))}
    </div>
  )
}
