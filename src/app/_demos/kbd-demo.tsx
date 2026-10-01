import { CommandIcon, SearchIcon } from "lucide-react"

import { Example } from "@/app/_components/showcase"
import { Button } from "@/registry/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/ui/input-group"
import { Kbd, KbdGroup } from "@/registry/ui/kbd"

export function KbdDemo() {
  return (
    <>
      <Example title="Keys">
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
      </Example>

      <Example title="Quick actions">
        <InputGroup className="max-w-xs">
          <InputGroupInput placeholder="Quick actions" aria-label="Quick actions" />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>⌘K</Kbd>
          </InputGroupAddon>
        </InputGroup>
      </Example>

      <Example title="In text and buttons">
        <p className="text-muted-foreground">
          Press <Kbd>⌘</Kbd> <Kbd>/</Kbd> to see every shortcut.
        </p>
        <Button variant="secondary">
          Search
          <Kbd data-icon="inline-end">⌘K</Kbd>
        </Button>
      </Example>
    </>
  )
}
