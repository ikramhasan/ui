import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react"

import { ToggleGroup, ToggleGroupItem } from "@/registry/ui/toggle-group"

export function ToggleGroupDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <ToggleGroup spacing={0} defaultValue={["left"]}>
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRightIcon />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup spacing={0} defaultValue={["week"]}>
        <ToggleGroupItem value="day">Day</ToggleGroupItem>
        <ToggleGroupItem value="week">Week</ToggleGroupItem>
        <ToggleGroupItem value="month">Month</ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
