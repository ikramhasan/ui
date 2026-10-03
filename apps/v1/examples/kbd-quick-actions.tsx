import { SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/ui/input-group"
import { Kbd } from "@/registry/ui/kbd"

export function KbdQuickActions() {
  return (
    <InputGroup className="max-w-xs">
      <InputGroupInput placeholder="Quick actions" aria-label="Quick actions" />
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <Kbd>⌘K</Kbd>
      </InputGroupAddon>
    </InputGroup>
  )
}
