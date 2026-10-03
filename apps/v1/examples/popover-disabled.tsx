import { Button } from "@/registry/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/ui/popover"

export function PopoverDisabled() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="secondary" />} disabled>
        Dimensions
      </PopoverTrigger>
      <PopoverContent>Never opens.</PopoverContent>
    </Popover>
  )
}
