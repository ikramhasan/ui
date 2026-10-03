import { BoldIcon, ItalicIcon } from "lucide-react"

import { Toggle } from "@/registry/ui/toggle"

export function ToggleDisabled() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle aria-label="Toggle bold" disabled>
        <BoldIcon />
      </Toggle>
      <Toggle
        variant="outline"
        aria-label="Toggle italic"
        disabled
        defaultPressed
      >
        <ItalicIcon />
      </Toggle>
    </div>
  )
}
