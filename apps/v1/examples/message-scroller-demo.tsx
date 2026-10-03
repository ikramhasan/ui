"use client"

import { ArrowUpIcon, RotateCwIcon } from "lucide-react"

import { Bubble, BubbleContent } from "@/registry/ui/bubble"
import { Button } from "@/registry/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/ui/card"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "@/registry/ui/input-group"
import { Message, MessageContent } from "@/registry/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/registry/ui/message-scroller"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/ui/tooltip"
import { useScriptedChat } from "@/examples/message-scroller/scripted-chat"

const script = [
  {
    user: "Every time the assistant streams a reply, the whole thread jumps around. How do I stop that?",
    assistant:
      "Wrap the transcript in MessageScroller and turn on autoScroll. The view follows new text only while you are already at the bottom.\n\nScroll up to read something earlier and it lets go: new tokens keep arriving below without moving what you are reading.",
  },
  {
    user: "Sending a new message still feels jarring.",
    assistant:
      "Mark the turn that starts an exchange with scrollAnchor. When it is appended, the viewport settles it near the top and leaves a peek of the previous reply above it.\n\nThe answer then streams into the room below, instead of the page snapping to the bottom on every token.",
  },
  {
    user: "And if someone has scrolled away?",
    assistant:
      "They stay where they are. MessageScrollerButton appears at the bottom of the viewport when there is newer content; pressing it jumps to the latest message and starts following again.",
  },
  {
    user: "Does this work with assistive tech?",
    assistant:
      'The content is a log with aria-relevant="additions", so new rows are announced without reading every streamed token. The scroll button is a real button that leaves the tab order when there is nothing to scroll to.',
  },
] as const

export function MessageScrollerDemo() {
  const { messages, next, send, reset, status } = useScriptedChat(script, {
    initialTurns: 1,
  })
  const isBusy = status === "streaming"

  return (
    <MessageScrollerProvider autoScroll>
      <Card className="h-[34rem] w-full max-w-sm gap-0">
        <CardHeader className="border-b">
          <CardTitle>New chat</CardTitle>
          <CardDescription>Press send to play the next turn.</CardDescription>
          <CardAction>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Reset conversation"
                    disabled={isBusy}
                    onClick={reset}
                  />
                }
              >
                <RotateCwIcon />
              </TooltipTrigger>
              <TooltipContent>Reset</TooltipContent>
            </Tooltip>
          </CardAction>
        </CardHeader>
        <CardContent className="min-h-0 flex-1 px-0">
          <MessageScroller>
            <MessageScrollerViewport>
              <MessageScrollerContent
                aria-busy={isBusy}
                className="p-(--card-spacing)"
              >
                {messages.map((message) => (
                  <MessageScrollerItem
                    key={message.id}
                    messageId={message.id}
                    scrollAnchor={message.role === "user"}
                  >
                    <Message align={message.role === "user" ? "end" : "start"}>
                      <MessageContent>
                        <Bubble
                          variant={
                            message.role === "user" ? "default" : "ghost"
                          }
                        >
                          <BubbleContent className="flex flex-col gap-2">
                            {message.text.split("\n\n").map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </BubbleContent>
                        </Bubble>
                      </MessageContent>
                    </Message>
                  </MessageScrollerItem>
                ))}
              </MessageScrollerContent>
            </MessageScrollerViewport>
            <MessageScrollerButton />
          </MessageScroller>
        </CardContent>
        <CardFooter className="border-t-0 bg-transparent pt-0">
          <form
            className="w-full"
            onSubmit={(event) => {
              event.preventDefault()
              send()
            }}
          >
            <InputGroup className="h-auto">
              <p className="line-clamp-2 min-h-10 w-full px-2.5 pt-2 text-sm text-muted-foreground">
                {next?.user ?? "That's the whole script. Reset to replay it."}
              </p>
              <InputGroupAddon align="block-end" className="justify-end">
                <InputGroupButton
                  type="submit"
                  variant="default"
                  size="icon-sm"
                  className="rounded-full"
                  disabled={!next || isBusy}
                  aria-label="Send"
                >
                  <ArrowUpIcon />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </form>
        </CardFooter>
      </Card>
    </MessageScrollerProvider>
  )
}
