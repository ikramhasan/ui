import { MailIcon, UsersIcon } from "lucide-react"

import { Card } from "@/registry/ui/card"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/registry/ui/empty"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/ui/input-group"

export function InviteTeam() {
  return (
    <Card className="py-0">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <UsersIcon />
          </EmptyMedia>
          <EmptyTitle>No teammates yet</EmptyTitle>
          <EmptyDescription>
            Invite people to share campaigns, drafts and reports.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <InputGroup>
            <InputGroupInput
              type="email"
              placeholder="you@studio.com"
              aria-label="Email"
            />
            <InputGroupAddon>
              <MailIcon />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">
              <InputGroupButton variant="secondary">Invite</InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </EmptyContent>
      </Empty>
    </Card>
  )
}
