import { Button } from "@/registry/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/ui/popover"

export function PopoverAlign() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {(["start", "center", "end"] as const).map((align) => (
        <Popover key={align}>
          <PopoverTrigger
            render={<Button variant="outline" className="capitalize" />}
          >
            {align}
          </PopoverTrigger>
          <PopoverContent align={align} className="w-48">
            Aligned to the {align}.
          </PopoverContent>
        </Popover>
      ))}
    </div>
  )
}
