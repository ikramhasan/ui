import { BoldIcon, BookmarkIcon, ItalicIcon, UnderlineIcon } from "lucide-react"

import { Example } from "@/app/_components/showcase"
import { Toggle } from "@/registry/ui/toggle"

export function ToggleDemo() {
  return (
    <>
      <Example title="Default">
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
      </Example>

      <Example title="Outline">
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
      </Example>

      <Example title="Sizes">
        <Toggle size="sm" variant="outline" aria-label="Toggle underline">
          <UnderlineIcon />
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle underline" defaultPressed>
          <UnderlineIcon />
        </Toggle>
        <Toggle size="lg" variant="outline" aria-label="Toggle underline">
          <UnderlineIcon />
        </Toggle>
      </Example>

      <Example title="Disabled">
        <Toggle aria-label="Toggle bold" disabled>
          <BoldIcon />
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle italic" disabled defaultPressed>
          <ItalicIcon />
        </Toggle>
      </Example>
    </>
  )
}
