import { UnderlineIcon } from "lucide-react"

import { Toggle } from "@/registry/ui/toggle"

export function ToggleSizes() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle size="sm" variant="outline" aria-label="Toggle underline">
        <UnderlineIcon />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle underline" defaultPressed>
        <UnderlineIcon />
      </Toggle>
      <Toggle size="lg" variant="outline" aria-label="Toggle underline">
        <UnderlineIcon />
      </Toggle>
    </div>
  )
}
