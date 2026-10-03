import { MailIcon, SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/registry/ui/input-group"

export function InputGroupInvalid() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <InputGroup className="max-w-xs">
        <InputGroupInput
          defaultValue="not-an-email"
          aria-invalid
          aria-label="Email"
        />
        <InputGroupAddon>
          <MailIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup className="max-w-xs" data-disabled>
        <InputGroupInput
          disabled
          placeholder="Disabled"
          aria-label="Disabled"
        />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
