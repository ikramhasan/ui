import { ArrowUpIcon, CopyIcon, PlusIcon, ThumbsUpIcon } from "lucide-react"

import { Bubble, BubbleContent } from "@/registry/ui/bubble"
import { Button } from "@/registry/ui/button"
import { Card, CardContent, CardFooter } from "@/registry/ui/card"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/registry/ui/input-group"
import { Marker, MarkerContent, MarkerIcon } from "@/registry/ui/marker"
import { Message, MessageContent, MessageFooter } from "@/registry/ui/message"
import { Spinner } from "@/registry/ui/spinner"

export function AssistantChat() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-5">
        <Message align="end">
          <MessageContent>
            <Bubble>
              <BubbleContent>Which products sold best last week?</BubbleContent>
            </Bubble>
          </MessageContent>
        </Message>
        <Marker>
          <MarkerContent>Read 1,284 orders</MarkerContent>
        </Marker>
        <Message>
          <MessageContent>
            <Bubble variant="muted">
              <BubbleContent>
                The linen shirt, up 38%. Most orders came from the spring
                newsletter.
              </BubbleContent>
            </Bubble>
            <MessageFooter>
              <Button variant="ghost" size="icon-sm" aria-label="Copy">
                <CopyIcon />
              </Button>
              <Button variant="ghost" size="icon-sm" aria-label="Like">
                <ThumbsUpIcon />
              </Button>
            </MessageFooter>
          </MessageContent>
        </Message>
        <Marker role="status">
          <MarkerIcon>
            <Spinner />
          </MarkerIcon>
          <MarkerContent className="shimmer">
            Drafting a campaign...
          </MarkerContent>
        </Marker>
      </CardContent>
      <CardFooter className="pb-5">
        <InputGroup>
          <InputGroupTextarea
            placeholder="Ask anything…"
            aria-label="Message"
          />
          <InputGroupAddon align="block-end">
            <InputGroupButton
              size="icon-xs"
              variant="secondary"
              aria-label="Attach"
            >
              <PlusIcon />
            </InputGroupButton>
            <InputGroupButton
              size="icon-xs"
              variant="default"
              className="ml-auto rounded-full"
              aria-label="Send"
            >
              <ArrowUpIcon />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </CardFooter>
    </Card>
  )
}
