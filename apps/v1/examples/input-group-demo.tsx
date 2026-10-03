import { MailIcon, SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/ui/input-group"

export function InputGroupDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <InputGroup className="max-w-xs">
        <InputGroupInput
          placeholder="Quick actions"
          aria-label="Quick actions"
        />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="max-w-xs">
        <InputGroupInput
          type="email"
          placeholder="you@studio.com"
          aria-label="Email"
        />
        <InputGroupAddon>
          <MailIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
