"use client"

import * as React from "react"
import { BrainIcon } from "lucide-react"

import { Button } from "@/registry/ui/button"
import {
  Trace,
  TraceCollapsible,
  TraceCollapsibleContent,
  TraceCollapsibleTrigger,
  TraceIcon,
  TraceLine,
  TraceTitle,
} from "@/registry/ui/trace"

const reasoning = `The user wants to know why the deploy is slow, so I should start from the build log instead of guessing.

Image optimization takes almost four minutes, and it runs on every deploy because the cache key includes the commit hash.`

// Streams the reasoning in, then lets the reader's click decide: the row
// is open while it streams (open ?? running) and stays as the reader left it.
export function TraceReasoning() {
  const [length, setLength] = React.useState(0)
  const [running, setRunning] = React.useState(false)
  const [open, setOpen] = React.useState<boolean>()

  React.useEffect(() => {
    if (!running) {
      return
    }

    const interval = setInterval(() => {
      setLength((current) => {
        const next = Math.min(current + 4, reasoning.length)
        if (next === reasoning.length) {
          setRunning(false)
        }
        return next
      })
    }, 30)

    return () => clearInterval(interval)
  }, [running])

  const text = reasoning.slice(0, length)

  return (
    <div className="flex w-full max-w-md flex-col items-start gap-6">
      <Trace className="min-h-40">
        {text ? (
          <TraceCollapsible open={open ?? running} onOpenChange={setOpen}>
            <TraceCollapsibleTrigger>
              <TraceLine status={running ? "running" : undefined}>
                <TraceIcon>
                  <BrainIcon />
                </TraceIcon>
                <TraceTitle>
                  {running ? "Thinking" : "Thought for 4 seconds"}
                </TraceTitle>
              </TraceLine>
            </TraceCollapsibleTrigger>
            <TraceCollapsibleContent className="whitespace-pre-wrap">
              {text}
            </TraceCollapsibleContent>
          </TraceCollapsible>
        ) : (
          <TraceLine status={running ? "running" : undefined}>
            <TraceIcon>
              <BrainIcon />
            </TraceIcon>
            <TraceTitle>{running ? "Thinking" : "Not started"}</TraceTitle>
          </TraceLine>
        )}
      </Trace>
      <Button
        variant="outline"
        size="sm"
        disabled={running}
        onClick={() => {
          setLength(0)
          setOpen(undefined)
          setRunning(true)
        }}
      >
        {text ? "Think again" : "Start"}
      </Button>
    </div>
  )
}
