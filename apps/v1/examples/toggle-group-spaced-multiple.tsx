import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

import { ToggleGroup, ToggleGroupItem } from "@/registry/ui/toggle-group"

export function ToggleGroupSpacedMultiple() {
  return (
    <ToggleGroup multiple defaultValue={["bold", "italic"]}>
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
  )
}
