import { BoldIcon, BookmarkIcon, ItalicIcon } from "lucide-react"

import { Toggle } from "@/registry/ui/toggle"

export function ToggleDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle aria-label="Toggle bold">
        <BoldIcon />
      </Toggle>
      <Toggle aria-label="Toggle italic" defaultPressed>
        <ItalicIcon />
      </Toggle>
      <Toggle defaultPressed>
        <BookmarkIcon data-icon="inline-start" />
        Bookmark
      </Toggle>
    </div>
  )
}
