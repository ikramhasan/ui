"use client"

import * as React from "react"
import { RotateCwIcon } from "lucide-react"

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
import { Marker, MarkerContent } from "@/registry/ui/marker"
import { Message, MessageContent } from "@/registry/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/registry/ui/message-scroller"
import { history } from "@/examples/message-scroller/history"

const INITIAL_VISIBLE_COUNT = 4

export function MessageScrollerLoadHistory() {
  const [demoKey, setDemoKey] = React.useState(0)
  const [visibleCount, setVisibleCount] = React.useState(INITIAL_VISIBLE_COUNT)
  const visibleMessages = history.slice(-visibleCount)
  const canLoadHistory = visibleCount < history.length

  return (
    <MessageScrollerProvider defaultScrollPosition="end">
      <Card className="h-[30rem] w-full max-w-sm gap-0">
        <CardHeader className="border-b">
          <CardTitle>Load history</CardTitle>
          <CardDescription>Earlier messages keep your place.</CardDescription>
          <CardAction>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label="Reset loaded messages"
              disabled={visibleCount === INITIAL_VISIBLE_COUNT}
              onClick={() => {
                setVisibleCount(INITIAL_VISIBLE_COUNT)
                setDemoKey((key) => key + 1)
              }}
            >
              <RotateCwIcon />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="min-h-0 flex-1 px-0">
          <MessageScroller key={demoKey}>
            <MessageScrollerViewport>
              <MessageScrollerContent className="p-(--card-spacing)">
                {visibleMessages.map((message) => (
                  <MessageScrollerItem key={message.id} messageId={message.id}>
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
                <MessageScrollerItem>
                  <Marker variant="separator">
                    <MarkerContent>End of conversation</MarkerContent>
                  </Marker>
                </MessageScrollerItem>
              </MessageScrollerContent>
            </MessageScrollerViewport>
            <MessageScrollerButton />
          </MessageScroller>
        </CardContent>
        <CardFooter>
          <Button
            variant="secondary"
            className="w-full"
            disabled={!canLoadHistory}
            onClick={() => setVisibleCount(history.length)}
          >
            {canLoadHistory ? "Load earlier messages" : "History loaded"}
          </Button>
        </CardFooter>
      </Card>
    </MessageScrollerProvider>
  )
}
