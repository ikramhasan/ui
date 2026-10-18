"use client"

import * as React from "react"
import { BrainIcon, ListChecksIcon } from "lucide-react"

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

export function TraceOpen() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex w-full max-w-md flex-col items-start gap-6">
      <Trace>
        <TraceCollapsible defaultOpen>
          <TraceCollapsibleTrigger>
            <TraceLine>
              <TraceIcon>
                <ListChecksIcon />
              </TraceIcon>
              <TraceTitle>Planned 3 steps</TraceTitle>
            </TraceLine>
          </TraceCollapsibleTrigger>
          <TraceCollapsibleContent>
            Read the build log, find the slow step, then fix its cache key.
          </TraceCollapsibleContent>
        </TraceCollapsible>
        <TraceCollapsible open={open} onOpenChange={setOpen}>
          <TraceCollapsibleTrigger>
            <TraceLine>
              <TraceIcon>
                <BrainIcon />
              </TraceIcon>
              <TraceTitle>Thought for 4 seconds</TraceTitle>
            </TraceLine>
          </TraceCollapsibleTrigger>
          <TraceCollapsibleContent>
            Image optimization takes almost four minutes and runs on every
            deploy, because the cache key includes the commit hash.
          </TraceCollapsibleContent>
        </TraceCollapsible>
      </Trace>
      <Button variant="outline" size="sm" onClick={() => setOpen(!open)}>
        {open ? "Close" : "Open"} the second row
      </Button>
    </div>
  )
}
