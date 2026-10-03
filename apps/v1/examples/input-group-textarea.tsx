import { ArrowUpIcon, PlusIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/ui/input-group"

export function InputGroupTextareaExample() {
  return (
    <InputGroup className="max-w-md">
      <InputGroupTextarea placeholder="Ask anything…" aria-label="Message" />
      <InputGroupAddon align="block-end">
        <InputGroupButton
          size="icon-xs"
          variant="secondary"
          aria-label="Attach"
        >
          <PlusIcon />
        </InputGroupButton>
        <InputGroupText className="ml-auto">0 / 2000</InputGroupText>
        <InputGroupButton
          size="icon-xs"
          variant="default"
          className="rounded-full"
          aria-label="Send"
        >
          <ArrowUpIcon />
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
