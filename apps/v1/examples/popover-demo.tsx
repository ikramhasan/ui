import { Button } from "@/registry/ui/button"
import { Input } from "@/registry/ui/input"
import { Label } from "@/registry/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/ui/popover"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="secondary" />}>
        Dimensions
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>
            Set the dimensions for the layer.
          </PopoverDescription>
        </PopoverHeader>
        <div className="grid grid-cols-[4rem_1fr] items-center gap-x-3 gap-y-2">
          <Label htmlFor="popover-width">Width</Label>
          <Input id="popover-width" defaultValue="100%" />
          <Label htmlFor="popover-height">Height</Label>
          <Input id="popover-height" defaultValue="25px" />
        </div>
      </PopoverContent>
    </Popover>
  )
}
