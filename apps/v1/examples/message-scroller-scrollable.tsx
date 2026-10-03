"use client"

import { Badge } from "@/registry/ui/badge"
import { Bubble, BubbleContent } from "@/registry/ui/bubble"
import { Card, CardContent, CardFooter } from "@/registry/ui/card"
import { Message, MessageContent } from "@/registry/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScrollerScrollable,
} from "@/registry/ui/message-scroller"
import { history } from "@/examples/message-scroller/history"

function ScrollState() {
  const { start, end } = useMessageScrollerScrollable()

  return (
    <div className="flex w-full items-center gap-2 text-sm text-muted-foreground">
      <span className="flex-1">Scroll the transcript</span>
      <Badge variant={start ? "default" : "secondary"}>
        {start ? "More above" : "At start"}
      </Badge>
      <Badge variant={end ? "default" : "secondary"}>
        {end ? "More below" : "At end"}
      </Badge>
    </div>
  )
}

export function MessageScrollerScrollable() {
  return (
    <MessageScrollerProvider defaultScrollPosition="last-anchor">
      <Card className="h-[30rem] w-full max-w-sm gap-0 py-0">
        <CardContent className="min-h-0 flex-1 px-0">
          <MessageScroller>
            <MessageScrollerViewport>
              <MessageScrollerContent className="p-(--card-spacing)">
                {history.map((message) => (
                  <MessageScrollerItem
                    key={message.id}
                    messageId={message.id}
                    scrollAnchor={message.role === "user"}
                  >
                    <Message align={message.role === "user" ? "end" : "start"}>
                      <MessageContent>
                        <Bubble
                          variant={message.role === "user" ? "muted" : "ghost"}
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
            <MessageScrollerButton direction="start" />
            <MessageScrollerButton />
          </MessageScroller>
        </CardContent>
        <CardFooter>
          <ScrollState />
        </CardFooter>
      </Card>
    </MessageScrollerProvider>
  )
}
