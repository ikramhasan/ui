import {
  AlignCenterIcon,
  AlignLeftIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react"

import { ToggleGroup, ToggleGroupItem } from "@/registry/ui/toggle-group"

export function ToggleGroupVertical() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <ToggleGroup orientation="vertical" spacing={0} defaultValue={["bold"]}>
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <BoldIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <ItalicIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Toggle underline">
          <UnderlineIcon />
        </ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup spacing={0} disabled defaultValue={["left"]}>
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenterIcon />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}
