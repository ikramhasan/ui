import { CopyIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/ui/input-group"

export function InputGroupButtonExample() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <InputGroup className="max-w-xs">
        <InputGroupInput
          defaultValue="sk_live_51H8…"
          readOnly
          aria-label="API key"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs" aria-label="Copy">
            <CopyIcon />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="max-w-xs">
        <InputGroupInput
          placeholder="Invite by email"
          aria-label="Invite by email"
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="sm" variant="secondary">
            Invite
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
