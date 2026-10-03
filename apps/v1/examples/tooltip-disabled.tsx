import { Button } from "@/registry/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/ui/tooltip"

export function TooltipDisabled() {
  return (
    <Tooltip disabled>
      <TooltipTrigger render={<Button variant="secondary" />}>
        Hover
      </TooltipTrigger>
      <TooltipContent>Never shows</TooltipContent>
    </Tooltip>
  )
}
