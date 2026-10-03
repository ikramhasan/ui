import { Button } from "@/registry/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/ui/tooltip"

export function TooltipLongContent() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline" />}>
        Sync status
      </TooltipTrigger>
      <TooltipContent>
        Last synced 2 minutes ago. Changes made offline upload as soon as you
        reconnect.
      </TooltipContent>
    </Tooltip>
  )
}
