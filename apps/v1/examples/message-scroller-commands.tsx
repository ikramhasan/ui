"use client"

import { ArrowDownToLineIcon, ArrowUpToLineIcon } from "lucide-react"

import { Bubble, BubbleContent } from "@/registry/ui/bubble"
import { Button } from "@/registry/ui/button"
import { Card, CardContent, CardFooter } from "@/registry/ui/card"
import { Message, MessageContent } from "@/registry/ui/message"
import {
  MessageScroller,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  useMessageScroller,
  useMessageScrollerVisibility,
} from "@/registry/ui/message-scroller"
import { history } from "@/examples/message-scroller/history"

const questions = history.filter((message) => message.role === "user")

// Controls outside the scroller frame, driving it through the hooks.
function Outline() {
  const { scrollToMessage, scrollToStart, scrollToEnd } = useMessageScroller()
  const { currentAnchorId } = useMessageScrollerVisibility()

  return (
    <div className="flex w-full flex-col gap-3">
      <nav aria-label="Questions" className="-mx-2 flex flex-col">
        {questions.map((question, index) => (
          <Button
            key={question.id}
            variant="ghost"
            className="justify-start text-muted-foreground aria-current:bg-accent aria-current:text-foreground"
            aria-current={question.id === currentAnchorId ? "true" : undefined}
            onClick={() => scrollToMessage(question.id, { behavior: "smooth" })}
          >
            <span className="tabular-nums">{index + 1}.</span>
            <span className="truncate">{question.text}</span>
          </Button>
        ))}
      </nav>
      <div className="flex gap-2">
        <Button
          variant="secondary"
          size="sm"
          className="flex-1"
          onClick={() => scrollToStart({ behavior: "smooth" })}
        >
          <ArrowUpToLineIcon data-icon="inline-start" />
          Start
        </Button>
        <Button
          variant="secondary"
          size="sm"
          className="flex-1"
          onClick={() => scrollToEnd({ behavior: "smooth" })}
        >
          <ArrowDownToLineIcon data-icon="inline-start" />
          End
        </Button>
      </div>
    </div>
  )
}

export function MessageScrollerCommands() {
  return (
    <MessageScrollerProvider defaultScrollPosition="start">
      <Card className="h-[34rem] w-full max-w-sm gap-0 py-0">
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
          </MessageScroller>
        </CardContent>
        <CardFooter>
          <Outline />
        </CardFooter>
      </Card>
    </MessageScrollerProvider>
  )
}
