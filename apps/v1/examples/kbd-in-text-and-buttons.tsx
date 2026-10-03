import { Button } from "@/registry/ui/button"
import { Kbd } from "@/registry/ui/kbd"

export function KbdInTextAndButtons() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <p className="text-muted-foreground">
        Press <Kbd>⌘</Kbd> <Kbd>/</Kbd> to see every shortcut.
      </p>
      <Button variant="secondary">
        Search
        <Kbd data-icon="inline-end">⌘K</Kbd>
      </Button>
    </div>
  )
}
