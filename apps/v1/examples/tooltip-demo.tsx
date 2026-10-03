import { Button } from "@/registry/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/ui/tooltip"

export function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="secondary" />}>
        Hover
      </TooltipTrigger>
      <TooltipContent>Add to library</TooltipContent>
    </Tooltip>
  )
}
