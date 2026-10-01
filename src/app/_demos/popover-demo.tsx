import { Example } from "@/app/_components/showcase"
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
    <>
      <Example title="Form">
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
      </Example>

      <Example title="Sides">
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
      </Example>

      <Example title="Align">
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
      </Example>

      <Example title="Disabled">
        <Popover>
          <PopoverTrigger render={<Button variant="secondary" />} disabled>
            Dimensions
          </PopoverTrigger>
          <PopoverContent>Never opens.</PopoverContent>
        </Popover>
      </Example>
    </>
  )
}
