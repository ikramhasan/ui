import { CommandIcon } from "lucide-react"

import { Kbd, KbdGroup } from "@/registry/ui/kbd"

export function KbdDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Kbd>Esc</Kbd>
      <Kbd>K</Kbd>
      <Kbd>
        <CommandIcon />
      </Kbd>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span className="text-xs text-muted-foreground">then</span>
        <Kbd>B</Kbd>
      </KbdGroup>
    </div>
  )
}
