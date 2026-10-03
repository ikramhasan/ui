import { BoldIcon, BookmarkIcon, ItalicIcon } from "lucide-react"

import { Toggle } from "@/registry/ui/toggle"

export function ToggleOutline() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Toggle variant="outline" aria-label="Toggle bold">
        <BoldIcon />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle italic" defaultPressed>
        <ItalicIcon />
      </Toggle>
      <Toggle variant="outline">
        <BookmarkIcon data-icon="inline-start" />
        Bookmark
      </Toggle>
    </div>
  )
}
