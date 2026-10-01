import {
  ArrowUpIcon,
  CopyIcon,
  MailIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react"

import { Example } from "@/app/_components/showcase"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/registry/ui/input-group"

export function InputGroupDemo() {
  return (
    <>
      <Example title="Icon">
        <InputGroup className="max-w-xs">
          <InputGroupInput placeholder="Quick actions" aria-label="Quick actions" />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup className="max-w-xs">
          <InputGroupInput type="email" placeholder="you@studio.com" aria-label="Email" />
          <InputGroupAddon>
            <MailIcon />
          </InputGroupAddon>
        </InputGroup>
      </Example>

      <Example title="Text">
        <InputGroup className="max-w-xs">
          <InputGroupInput placeholder="acme" aria-label="Store" />
          <InputGroupAddon>
            <InputGroupText>https://</InputGroupText>
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <InputGroupText>.myshopify.com</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </Example>

      <Example title="Button">
        <InputGroup className="max-w-xs">
          <InputGroupInput defaultValue="sk_live_51H8…" readOnly aria-label="API key" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton size="icon-xs" aria-label="Copy">
              <CopyIcon />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <InputGroup className="max-w-xs">
          <InputGroupInput placeholder="Invite by email" aria-label="Invite by email" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton size="sm" variant="secondary">
              Invite
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </Example>

      <Example title="Textarea">
        <InputGroup className="max-w-md">
          <InputGroupTextarea placeholder="Ask anything…" aria-label="Message" />
          <InputGroupAddon align="block-end">
            <InputGroupButton size="icon-xs" variant="secondary" aria-label="Attach">
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
      </Example>

      <Example title="Invalid and disabled">
        <InputGroup className="max-w-xs">
          <InputGroupInput defaultValue="not-an-email" aria-invalid aria-label="Email" />
          <InputGroupAddon>
            <MailIcon />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup className="max-w-xs" data-disabled>
          <InputGroupInput disabled placeholder="Disabled" aria-label="Disabled" />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
      </Example>
    </>
  )
}
