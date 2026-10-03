import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react"

import { ToggleGroup, ToggleGroupItem } from "@/registry/ui/toggle-group"

export function ToggleGroupSizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {(["sm", "default", "lg"] as const).map((size) => (
        <ToggleGroup key={size} size={size} spacing={0} defaultValue={["left"]}>
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
      ))}
    </div>
  )
}
